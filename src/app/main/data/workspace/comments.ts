// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from "app.common.data";
import * as dm from "app.common.data.macros";
import * as gpt from "app.common.geom.point";
import * as gsh from "app.common.geom.shapes";
import * as sm from "app.common.schema";
import * as ctst from "app.common.types.shape-tree";
import * as dcmt from "app.main.data.comments";
import * as dcm from "app.main.data.common";
import * as ev from "app.main.data.event";
import * as dsh from "app.main.data.helpers";
import * as dwco from "app.main.data.workspace.common";
import * as dwd from "app.main.data.workspace.drawing";
import * as dwe from "app.main.data.workspace.edition";
import * as dws from "app.main.data.workspace.selection";
import * as dwz from "app.main.data.workspace.zoom";
import * as rp from "app.main.repo";
import * as rt from "app.main.router";
import * as ms from "app.main.streams";
import * as mse from "app.util.mouse";
import { rx } from "beicon.v2.core";
import * as ptk from "potok.v2.core";

declare function handleInterrupt(): ptk.WatchEvent;
declare function handleCommentLayerClick(position: any): ptk.WatchEvent;

export function initializeComments(fileId: string): ptk.WatchEvent {
  return ptk.reify("initialize-comments", {
    watch(_state, stream) {
      const stopperS = rx.filter((event) => event === "finalize", stream);

      return rx.merge(
        rx.of(dcmt.retrieveCommentThreads(fileId)),
        rx.pipe(
          stream,
          rx.filter(mse.mouseEvent),
          rx.filter(mse.mouseClickEvent),
          rx.switchMap(() => rx.take(1, ms.mousePosition)),
          rx.withLatestFrom(ms.keyboardSpace),
          rx.filter(([_, space]: [any, boolean]) => !space),
          rx.map(([position]) => position),
          rx.map(handleCommentLayerClick)
        ),
        rx.pipe(
          stream,
          rx.filter(dwco.interrupt),
          rx.map(handleInterrupt)
        )
      ).pipe(rx.takeUntil(stopperS));
    },
  });
}

function handleInterrupt(): ptk.WatchEvent {
  return ptk.reify("handle-interrupt", {
    watch(_state, state) {
      const local = state.commentsLocal;

      if (local.draft) {
        return rx.of(dcmt.closeThread());
      } else if (local.open) {
        return rx.of(dcmt.closeThread());
      } else {
        return rx.of(
          dwe.clearEditionMode(),
          dws.deselectAll(true)
        );
      }
    },
  });
}

// Event responsible for what should be executed when user clicked
// on the comments layer. An option can be create a new draft thread,
// an other option is close previously open thread or cancel the
// latest opened thread draft.
function handleCommentLayerClick(position: any): ptk.WatchEvent {
  return ptk.reify("handle-comment-layer-click", {
    watch(_state, state) {
      const local = state.commentsLocal;

      if (local.open) {
        return rx.of(dcmt.closeThread());
      } else {
        const pageId = state.currentPageId;
        const fileId = state.currentFileId;
        const params = {
          position,
          pageId,
          fileId,
        };

        return rx.of(dcmt.createDraft(params));
      }
    },
  });
}

export function centerToCommentThread(thread: {position: any}): ptk.UpdateEvent {
  dm.assert(
    "expected valid comment thread",
    dcmt.checkCommentThread!(thread)
  );

  return ptk.reify("center-to-comment-thread", {
    update(_state, state) {
      return dm.update(state, "workspaceLocal", (local: any) => {
        const {vbox, zoom} = local;
        const pw = 160 / zoom;
        const ph = 160 / zoom;
        const nw = vbox.width / 2 - pw;
        const nh = vbox.height / 2 - ph;
        const nx = position.x - nw;
        const ny = position.y - nh;

        return dm.assoc(local, "vbox", {x: nx, y: ny});
      });
    },
  });
}

export function updateCommentThreadPosition(
  thread: any,
  [newX, newY]: [number, number],
  frameId?: string
): ptk.WatchEvent {
  dm.assert(
    "expected valid comment thread",
    dcmt.checkCommentThread!(thread)
  );

  return ptk.reify("update-comment-thread-position", {
    watch(_state, state) {
      const page = dsh.lookupPage(state);
      const pageId = page.id;
      const objects = dsh.lookupPageObjects(state, pageId);
      const frameIdFinal = frameId ?? ctst.getFrameIdByPosition(objects, gpt.point(newX, newY));
      const threadFinal = dm.assoc(
        dm.assoc(
          thread,
          "position",
          gpt.point(newX, newY)
        ),
        "frame-id",
        frameIdFinal
      );
      const threadId = thread.id;

      return rx.concat(
        rx.of((state: any) => dm.assoc(state, "commentThreads", dm.assoc(state.commentThreads, threadId, threadFinal))),
        rp.cmd("update-comment-thread-position", threadFinal)
          .pipe(
            rx.catchError(() => rx.throw({type: "update-comment-thread-position"})),
            rx.ignoreElements()
          )
      );
    },
  });
}

// Move comment threads that are inside a frame when that frame is moved"
function moveFrameCommentThreads(ids: string[], transforms: any): ptk.WatchEvent {
  dm.assert(sm.checkCollOfUuid(ids));

  return ptk.reify("move-frame-comment-threads", {
    watch(_state, state) {
      const page = dsh.lookupPage(state);
      const objects = page.objects;

      const isFrame = (id: string) => d.get(objects, [id, "type"]) === "frame";
      const frameIds = new Set(ids.filter(isFrame));

      const threadsPositionMap = d.get(page, "comment-thread-positions");
      const objectModifiers = state.workspaceModifiers;

      const buildMoveEvent = (commentThread: any) => {
        const frameId = commentThread.frameId;
        const frame = d.get(objects, frameId);
        const modifiers = d.get(objectModifiers, [frameId, "modifiers"]);
        const transform = d.get(transforms, frameId);

        let frameFinal = frame;

        if (modifiers) {
          frameFinal = gsh.transformShape(modifiers, frameFinal);
        }

        if (transform) {
          frameFinal = gsh.applyTransform(transform, frameFinal);
        }

        const moved = gpt.toVec(
          gpt.point(frame.x, frame.y),
          gpt.point(frameFinal.x, frameFinal.y)
        );

        const position = d.get(threadsPositionMap, [commentThread.id, "position"]);
        const newX = position.x + moved.x;
        const newY = position.y + moved.y;

        return updateCommentThreadPosition(commentThread, [newX, newY], frame.id);
      };

      const threads = state.commentThreads;
      const threadValues = Object.values(threads);

      return rx.from(
        threadValues
          .map((thread: any) => dm.assoc(thread, "position", d.get(threadsPositionMap, [thread.id, "position"])))
          .map((thread: any) => dm.assoc(thread, "frame-id", d.get(threadsPositionMap, [thread.id, "frame-id"])))
          .filter((thread: any) => frameIds.has(thread.frameId))
          .map(buildMoveEvent)
      );
    },
  });
}

ptk.resolve("move-frame-comment-threads", function(idsOrTransforms: any) {
  if (!d.notEmpty(idsOrTransforms)) {
    return;
  }

  const ids = dm.isMap(idsOrTransforms) ? Object.keys(idsOrTransforms) : idsOrTransforms;
  const transforms = dm.isMap(idsOrTransforms) ? idsOrTransforms : undefined;

  return moveFrameCommentThreads(ids, transforms);
});

export function overlapBubbles(zoom: number, thread1: any, thread2: any): boolean {
  const distance = gpt.distance(thread1.position, thread2.position);
  const distanceZoom = distance * zoom;
  const distanceOverlap = 32;

  return distanceZoom < distanceOverlap;
}

function calculateZoomScaleToUngroupCurrentBubble(
  zoom: number,
  thread: any,
  threads: any[]
): number {
  const threadsRest = threads.filter(t => t.id !== thread.id);
  const zoomScaleStep = 1.75;

  if (threadsRest.some(threadRest => overlapBubbles(zoom, thread, threadRest))) {
    return calculateZoomScaleToUngroupCurrentBubble(zoom * zoomScaleStep, thread, threads);
  }

  return zoom;
}

export function setZoomToSeparateGroupedBubbles(thread: any): ptk.WatchEvent {
  dm.assert(
    "zoom-to-separate-bubbles",
    dcmt.checkCommentThread!(thread)
  );

  return ptk.reify("set-zoom-to-separate-grouped-bubbles", {
    watch(_state, state) {
      const local = state.workspaceLocal;
      const zoom = local.zoom;
      const pageId = thread.pageId;

      const threadsMap = state.commentThreads;
      const threadsAll = Object.values(threadsMap);
      const threads = threadsAll.filter((t: any) => t.pageId === pageId);

      const updatedZoom = calculateZoomScaleToUngroupCurrentBubble(zoom, thread, threads);
      const scaleZoom = updatedZoom / zoom;

      return rx.of(dwz.setZoom(scaleZoom));
    },
  });
}

export function navigateToCommentFromDashboard(thread: any): ptk.WatchEvent {
  dm.assert(
    "expected valid comment thread",
    dcmt.checkCommentThread!(thread)
  );

  return ptk.reify("navigate-to-comment-from-dashboard", {
    watch(_state, stream) {
      return rx.merge(
        rx.of(dcm.goToWorkspace({
          fileId: thread.fileId,
          pageId: thread.pageId
        })),

        rx.pipe(
          stream,
          rx.filter(ptk.isType("app.main.data.workspace/workspace-initialized")),
          rx.observeOn("async"),
          rx.take(1),
          rx.flatMap(() => rx.of(
            dwd.selectForDrawing("comments"),
            setZoomToSeparateGroupedBubbles(thread),
            centerToCommentThread(thread),
            Object.assign(dcmt.openThread(thread), {
              [ev.origin]: "workspace"
            })
          ))
        )
      );
    },
  });
}

export function navigateToComment(thread: any): ptk.WatchEvent {
  return ptk.reify("navigate-to-comment", {
    watch(_state, state) {
      return rx.concat(
        thread ? rx.of(
          rt.nav("workspace",
            dm.dissoc(
              dm.assoc(
                rt.getParams(state),
                "page-id",
                thread.pageId
              ),
              "comment-id"
            ),
            { [rt.replace]: true }
          )
        ) : rx.EMPTY,

        rx.of(
          dwd.selectForDrawing("comments"),
          setZoomToSeparateGroupedBubbles(thread),
          centerToCommentThread(thread),
          Object.assign(dcmt.openThread(thread), {
            [ev.origin]: "workspace"
          })
        ).pipe(rx.observeOn("async"))
      );
    },
  });
}

export function navigateToCommentId(threadId: string): ptk.WatchEvent {
  return ptk.reify("navigate-to-comment-id", {
    watch(_state, state) {
      const fileId = state.currentFileId;

      return rp.cmd("get-comment-threads", { fileId })
        .pipe(
          rx.map(threads => d.seek((t: any) => t.id === threadId, threads)),
          rx.map(navigateToComment)
        );
    },
  });
}