// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { assert, getIn, str } from "../../../common/data/macros";
import * as cfh from "../../../common/files/helpers";
import { setLevel } from "../../../common/logging";
import * as thc from "../../../common/thumbnails";
import * as ct from "../../../common/time";
import * as ctc from "../../../common/types/component";
import { UUID, uuidZero } from "../../../common/uuid";
import * as dch from "../changes";
import * as dsh from "../helpers";
import * as dps from "../persistence";
import * as dwpg from "./pages";
import * as thr from "../../../rasterizer";
import * as refs from "../../../refs";
import * as render from "../../../render";
import * as rp from "../../../repo";
import * as q from "../../../util/queue";
import * as tm from "../../../util/timers";
import * as wapi from "../../../util/webapi";
import {
  Observable,
  from,
  of,
  filter,
  take,
  takeUntil,
  map,
  mergeMap,
  tap,
  catchError,
  share,
  concat,
  debounceTime,
  merge,
} from "rxjs";
import * as ptk from "../../../potok/v2/ptk";

setLevel("warn");

interface ThumbnailRequest {
  fileId: string;
  pageId: string;
  shapeId: string;
  tag: string;
}

function findRequest(params: ThumbnailRequest, item: ThumbnailRequest): boolean {
  return (
    params.fileId === item.fileId &&
    params.pageId === item.pageId &&
    params.shapeId === item.shapeId &&
    params.tag === item.tag
  );
}

function createRequest(
  fileId: string,
  pageId: string,
  shapeId: string,
  tag: string
): ThumbnailRequest {
  return {
    fileId,
    pageId,
    shapeId,
    tag,
  };
}

export const queue = q.create(findRequest, 1000 / 30);

export function clearQueue(): void {
  console.debug("clearing thumbnail queue");
  q.clear(queue);
}

function renderThumbnail(
  state: any,
  fileId: string,
  pageId: string,
  frameId: string,
  tag: string
): Observable<Blob> {
  const objectId = thc.fmtObjectId(fileId, pageId, frameId, tag);
  const tp = ct.tpointMs();
  const fileData = dsh.lookupFileData(state, fileId);
  const page = dsh.getPage(fileData, pageId);
  const objects = page.objects;
  const shape = objects.get(frameId);

  return render.renderFrame(objects, shape, objectId).pipe(
    take(1),
    filter((html: any) => html !== null && html !== undefined),
    mergeMap((html: string) => thr.render(html)),
    tap(() =>
      console.debug(`thumbnail rendered in ${tp()}ms`)
    )
  );
}

function requestThumbnail(
  state: any,
  fileId: string,
  pageId: string,
  shapeId: string,
  tag: string
): void {
  const request = createRequest(fileId, pageId, shapeId, tag);
  const renderFn = () => renderThumbnail(state, fileId, pageId, shapeId, tag);
  q.enqueueUnique(queue, request, renderFn);
}

export function clearThumbnail(
  fileId: string,
  pageId: string,
  frameId: string,
  tag: string
): ptk.Event;
export function clearThumbnail(fileId: string, objectId: string): ptk.Event;
export function clearThumbnail(
  fileId: string,
  pageIdOrObjectId: string,
  frameIdOrTag?: string,
  tag?: string
): ptk.Event {
  let objectId: string;
  let pending: { current: string | null } = { current: null };

  if (frameIdOrTag && tag) {
    objectId = thc.fmtObjectId(fileId, pageIdOrObjectId, frameIdOrTag, tag);
  } else {
    objectId = pageIdOrObjectId;
  }

  return {
    type: "app.main.data.workspace/clear-thumbnail",
    data: objectId,

    update(state: any): any {
      const thumbs = state.thumbnails || new Map();
      const uri = thumbs.get(objectId);

      if (uri) {
        pending.current = uri;
        const newThumbs = new Map(thumbs);
        newThumbs.delete(objectId);
        return { ...state, thumbnails: newThumbs };
      }

      return state;
    },

    watch(): Observable<any> {
      if (!pending.current) {
        return empty();
      }

      const uri = pending.current;

      if (uri.startsWith("blob:")) {
        tm.scheduleOnIdle(() => wapi.revokeUri(uri));
      }

      const params = { fileId, objectId };
      return from(rp.cmd!("delete-file-object-thumbnail", params)).pipe(
        catchError(() => empty()),
        ignoreElements()
      );
    },
  };
}

function assocThumbnail(objectId: string, uri: string): ptk.Event {
  const prevUri: { current: string | null } = { current: null };

  return {
    type: "app.main.data.workspace/assoc-thumbnail",
    update(state: any): any {
      const prevUriVal = state.thumbnails?.get(objectId);
      if (prevUriVal) {
        prevUri.current = prevUriVal;
      }
      const thumbs = new Map(state.thumbnails || {});
      thumbs.set(objectId, uri);
      return { ...state, thumbnails: thumbs };
    },

    effect(): void {
      tm.scheduleOnIdle(() => {
        if (prevUri.current) {
          wapi.revokeUri(prevUri.current);
        }
      });
    },
  };
}

export function duplicateThumbnail(oldId: string, newId: string): ptk.UpdateEvent {
  return {
    type: "app.main.data.workspace/duplicate-thumbnail",
    update(state: any): any {
      const thumbs = state.thumbnails || new Map();
      const thumbnail = thumbs.get(str(oldId));
      const newThumbs = new Map(thumbs);
      newThumbs.set(str(newId), thumbnail);
      return { ...state, thumbnails: newThumbs };
    },
  };
}

export function updateThumbnail(
  fileId: string,
  pageId: string,
  frameId: string,
  tag: string,
  requester: string
): ptk.Event {
  const objectId = thc.fmtObjectId(fileId, pageId, frameId, tag);

  return {
    type: "app.main.data.workspace/update-thumbnail",
    data: objectId,

    watch(_: any, state: any, stream: any): Observable<any> {
      console.debug(`update thumbnail requester=${requester} object-id=${objectId} tag=${tag}`);
      const tp = ct.tpointMs();

      const stop$ = stream.pipe(
        filter((e: any) => e.type === "app.main.data.workspace/clear-thumbnail"),
        filter((e: any) => e.data === objectId),
        take(1)
      );

      const request$ = new Observable<any>((subscriber) => {
        const req = createRequest(fileId, pageId, frameId, tag);
        const renderFn = () => renderThumbnail(state, fileId, pageId, frameId, tag);
        q.enqueueUnique(queue, req, renderFn);
      });

      return request$.pipe(
        mergeMap((blob: Blob) => {
          const uri = wapi.createUri(blob);
          const params = {
            fileId,
            objectId,
            media: blob,
            tag: tag || "frame",
          };

          return merge(
            of(assocThumbnail(objectId, uri)),
            from(rp.cmd!("create-file-object-thumbnail", params)).pipe(
              catchError(() => empty()),
              ignoreElements()
            )
          );
        }),
        catchError((cause) => {
          console.error(cause);
          return empty();
        }),
        tap(() => console.debug(`thumbnail updated in ${tp()}ms`)),
        takeUntil(stop$)
      );
    },
  };
}

function extractFrameChanges(
  pageId: string,
  [event, [oldData, newData]]: [any, [any, any]]
): Set<[string, string]> {
  const changes = event.changes;
  const frameIdCache: Map<string, Set<[string, string]>> = new Map();

  function lookupDataObjects(data: any, pid: string): Map<string, any> {
    return getIn(data, ["pages-index", pid, "objects"]);
  }

  function extractIds(change: any): [string, string][] {
    switch (change.type) {
      case "add-obj":
      case "mod-obj":
      case "del-obj":
        return [[change.pageId, change.id]];
      case "mov-objects":
        return change.shapes.map((id: string) => [change.pageId, id]);
      default:
        return [];
    }
  }

  function getFrameIds(id: string): Set<[string, string]> {
    const oldObjects = lookupDataObjects(oldData, pageId);
    const newObjects = lookupDataObjects(newData, pageId);

    const newShape = newObjects.get(id);
    const oldShape = oldObjects.get(id);

    const oldFrameId = cfh.frameShape(oldShape) ? id : oldShape?.frameId;
    const newFrameId = cfh.frameShape(newShape) ? id : newShape?.frameId;

    const rootFrameOld = cfh.rootFrame(oldObjects, oldFrameId);
    const rootFrameNew = cfh.rootFrame(newObjects, newFrameId);
    const instanceRoot = ctc.instanceRoot(newShape);

    const localResult: Set<[string, string]> = new Set();

    if (rootFrameOld) {
      localResult.add(["frame", oldFrameId]);
    }
    if (rootFrameNew) {
      localResult.add(["frame", newFrameId]);
    }
    if (instanceRoot) {
      localResult.add(["component", id]);
    }

    frameIdCache.set(id, localResult);

    const result = new Set(localResult);

    if (
      oldShape?.frameId &&
      oldShape.frameId !== uuidZero &&
      id !== oldShape.frameId
    ) {
      const cached = getFrameIdsCached(oldShape.frameId);
      cached.forEach((v) => result.add(v));
    }

    if (
      newShape?.frameId &&
      newShape.frameId !== uuidZero &&
      id !== newShape.frameId
    ) {
      const cached = getFrameIdsCached(newShape.frameId);
      cached.forEach((v) => result.add(v));
    }

    frameIdCache.set(id, result);
    return result;
  }

  function getFrameIdsCached(id: string): Set<[string, string]> {
    if (frameIdCache.has(id)) {
      return frameIdCache.get(id)!;
    }
    return getFrameIds(id);
  }

  const result: Set<[string, string]> = new Set();

  for (const change of changes) {
    const ids = extractIds(change);
    for (const [pid, id] of ids) {
      if (pid === pageId) {
        const frameIds = getFrameIdsCached(id);
        frameIds.forEach((v) => result.add(v));
      }
    }
  }

  return result;
}

export function watchStateChanges(
  fileId: string,
  pageId: string
): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace/watch-state-changes",
    watch(_: any, __: any, stream: any): Observable<any> {
      const stopperS = stream.pipe(
        filter(
          (event: any) =>
            event.type === `${dwpg.finalizePage}` ||
            event.type === "app.main.data.workspace/watch-state-changes"
        )
      );

      const workspaceDataS = concat(
        of(null),
        from(refs.workspaceData as any as Observable<any>)
      ).pipe(
        buffer(2, 1),
        share()
      );

      const allCommitsS = stream.pipe(
        filter(dch.isCommit),
        map((e: any) => e.data),
        observeOn(asyncScheduler),
        withLatestFrom(workspaceDataS),
        mergeMap(([event, [oldData, newData]]) =>
          from(extractFrameChanges(pageId, [event, [oldData, newData]]))
        ),
        tap((frameId) =>
          console.trace(`incoming change origin=all frame-id=${str(frameId)}`)
        ),
        share()
      );

      const notifierS = stream.pipe(
        filter((e: any) => e.type === `${dps/commitPersisted}`),
        debounceTime(5000),
        tap(() => console.trace("buffer initialized"))
      );

      const clear$ = allCommitsS.pipe(
        mergeMap(([tag, frameId]) =>
          of(clearThumbnail(fileId, pageId, frameId, tag))
        )
      );

      const generate$ = allCommitsS.pipe(
        bufferUntil(notifierS),
        mergeMap((items: Set<[string, string]>) => from(Array.from(items))),
        map(([tag, frameId]) =>
          updateThumbnail(fileId, pageId, frameId, tag, "watch-state-changes")
        )
      );

      return merge(clear$, generate$).pipe(takeUntil(stopperS));
    },
  };
}

// Helper functions that need to be imported or defined
function empty(): Observable<never> {
  return new Observable((subscriber) => subscriber.complete());
}

function ignoreElements(): Observable<never> {
  return new Observable((subscriber) => {
    subscriber.complete();
  });
}

function observeOn(scheduler: any): any {
  return (source: Observable<any>) =>
    new Observable((subscriber) => {
      source.subscribe({
        next(value) {
          scheduler.schedule(() => subscriber.next(value));
        },
        error(err) {
          subscriber.error(err);
        },
        complete() {
          scheduler.schedule(() => subscriber.complete());
        },
      });
    });
}

function asyncScheduler: any = {
  schedule(fn: () => void) {
    setTimeout(fn, 0);
  },
};

function buffer(count: number, skip: number): any {
  return (source: Observable<any>) =>
    new Observable((subscriber) => {
      const buffer: any[] = [];
      source.subscribe({
        next(value) {
          buffer.push(value);
          if (buffer.length >= count) {
            subscriber.next(buffer);
            buffer.splice(0, skip);
          }
        },
        error(err) {
          subscriber.error(err);
        },
        complete() {
          subscriber.complete();
        },
      });
    });
}

function bufferUntil(notifier: Observable<any>): any {
  return (source: Observable<any>) =>
    new Observable((subscriber) => {
      const buffer: any[] = [];
      let completer: (() => void) | null = null;

      source.subscribe({
        next(value) {
          buffer.push(value);
        },
        error(err) {
          subscriber.error(err);
        },
        complete() {
          completer = () => {
            if (buffer.length > 0) {
              subscriber.next(buffer);
            }
            subscriber.complete();
          };
          completer();
        },
      });

      notifier.subscribe({
        next() {
          if (buffer.length > 0) {
            subscriber.next(buffer.splice(0));
          }
        },
        error(err) {
          subscriber.error(err);
        },
        complete() {},
      });
    });
}

function withLatestFrom(other: Observable<any>): any {
  return (source: Observable<any>) =>
    new Observable((subscriber) => {
      let latestOther: any = null;
      let hasLatest = false;

      other.subscribe({
        next(value) {
          latestOther = value;
          hasLatest = true;
        },
        error(err) {
          subscriber.error(err);
        },
        complete() {},
      });

      source.subscribe({
        next(value) {
          if (hasLatest) {
            subscriber.next([value, latestOther]);
          }
        },
        error(err) {
          subscriber.error(err);
        },
        complete() {
          subscriber.complete();
        },
      });
    });
}
