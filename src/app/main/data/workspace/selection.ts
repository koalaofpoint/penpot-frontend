// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from "../../../common/data";
import { assert, getIn } from "../../../common/data/macros";
import * as pcb from "../../../common/files/changes-builder";
import * as cpf from "../../../common/files/focus";
import * as cfh from "../../../common/files/helpers";
import * as gpt from "../../../common/geom/point";
import * as grc from "../../../common/geom/rect";
import * as gsh from "../../../common/geom/shapes";
import * as cll from "../../../common/logic/libraries";
import * as ctk from "../../../common/types/component";
import * as ctn from "../../../common/types/container";
import { UUID, zero as uuidZero } from "../../../common/uuid";
import * as dch from "../changes";
import * as ev from "../event";
import * as dsh from "../helpers";
import * as md from "../modal";
import * as dwc from "./collapse";
import * as dwe from "./edition";
import * as dwpg from "./pages";
import * as dwsp from "./specialized-panel";
import * as dwu from "./undo";
import * as dwz from "./zoom";
import * as refs from "../../refs";
import * as rt from "../../router";
import * as ms from "../../streams";
import * as mw from "../../worker";
import * as mse from "../../../util/mouse";
import {
  Observable,
  of,
  from,
  merge,
  concat,
  filter,
  map,
  tap,
  takeUntil,
  bufferTime,
  last,
  bufferCount,
  distinctContiguous,
  observeOn,
} from "rxjs";
import * as ptk from "../../../potok/v2/ptk";
import * as set from "clojure.set";
import * as linkedSet from "linked.set";

export function isInterrupt(e: any): boolean {
  return e === "interrupt";
}

// --- Selection Rect

export function updateSelrect(selrect: any): ptk.UpdateEvent {
  return {
    type: "app.main.data.workspace.selection/update-selrect",
    update(state: any): any {
      return d.assocIn(state, ["workspaceLocal", "selrect"], selrect);
    },
  };
}

export function handleAreaSelection(
  append: boolean,
  remove: boolean,
  ignoreGroups: boolean
): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace.selection/handle-area-selection",
    watch(_: any, state: any, stream: any): Observable<any> {
      const zoom = getIn(state, ["workspaceLocal", "zoom"], 1);
      const stopper = mse.dragStopper(stream);
      const initPosition = ms.mousePosition;

      const initialSet = append || remove
        ? dsh.lookupSelected(state)
        : linkedSet.emptyLinkedSet();

      const initSelrect = grc.makeRect(
        initPosition.x,
        initPosition.y,
        0,
        0
      );

      const calculateSelrect = (
        selrect: any,
        [delta, space]: [any, boolean]
      ): any => {
        let newSelrect = grc.updateRect(
          { ...selrect, x2: selrect.x2 + delta.x, y2: selrect.y2 + delta.y },
          "corners"
        );

        if (space) {
          newSelrect = grc.updateRect(
            {
              ...newSelrect,
              x1: newSelrect.x1 + delta.x,
              y1: newSelrect.y1 + delta.y,
            },
            "corners"
          );
        }

        return newSelrect;
      };

      const selrectStream = ms.mousePosition.pipe(
        bufferCount(2, 1),
        map(([from, to]) => (from && to ? gpt.toVec(from, to) : null)),
        filter((v) => v !== null),
        withLatestFrom(ms.keyboardSpace),
        scan(calculateSelrect, initSelrect),
        filter(
          (s: any) =>
            grc.rectWidth(s) > 10 / zoom || grc.rectHeight(s) > 10 / zoom
        ),
        takeUntil(stopper)
      );

      const deselectAllEvent = append || remove ? of() : of(deselectAll());

      const updateSelrectEvent = selrectStream.pipe(map((s) => updateSelrect(s)));

      const bufferedSelect = selrectStream.pipe(
        bufferTime(100),
        map((arr) => arr[arr.length - 1]),
        distinctContiguous(),
        map((s) =>
          selectShapesByCurrentSelrect(initialSet, remove, ignoreGroups)
        )
      );

      const finalSelect = selrectStream.pipe(
        last(),
        map((s) =>
          selectShapesByCurrentSelrect(initialSet, remove, ignoreGroups, false)
        )
      );

      const resetSelrect = of(updateSelrect(null));

      return concat(
        deselectAllEvent,
        merge(updateSelrectEvent, bufferedSelect, finalSelect),
        resetSelrect.pipe(observeOn(asyncScheduler))
      );
    },
  };
}

function withLatestFrom(other: Observable<any>): any {
  return (source: Observable<any>) =>
    new Observable((subscriber) => {
      let latestOther: any = null;
      source.subscribe({
        next(value) {
          if (latestOther !== undefined) {
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
      other.subscribe({
        next(value) {
          latestOther = value;
        },
      });
    });
}

function scan<R>(
  fn: (acc: R, value: any) => R,
  initial: R
): (source: Observable<any>) => Observable<R> {
  return (source: Observable<any>) =>
    new Observable((subscriber) => {
      let acc = initial;
      source.subscribe({
        next(value) {
          acc = fn(acc, value);
          subscriber.next(acc);
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

const asyncScheduler: any = {
  schedule(fn: () => void) {
    setTimeout(fn, 0);
  },
};

// --- Toggle shape's selection status (selected or deselected)

export function selectShape(
  id: UUID,
  toggle: boolean = false
): ptk.Event {
  assert(typeof id === "string" && id.length > 0);

  return {
    type: "app.main.data.workspace.selection/select-shape",
    update(state: any): any {
      return {
        ...state,
        workspaceLocal: {
          ...state.workspaceLocal,
          selected: d.toggleSelection(
            state.workspaceLocal?.selected,
            id,
            toggle
          ),
          lastSelected: id,
        },
      };
    },
    watch(_: any, state: any, _stream: any): Observable<any> {
      const pageId = state.currentPageId;
      const objects = dsh.lookupPageObjects(state, pageId);
      const selectedIds = dsh.lookupSelected(state);
      const selected = dsh.lookupShapes(state, selectedIds);
      const frameIds = selected.map((item: any) => {
        const parent = cfh.getFrame(objects, item.id);
        return parent?.id;
      });

      const paramsWithoutBoard = rt.getParams(state);
      delete paramsWithoutBoard.boardId;

      const paramsBoard = { ...rt.getParams(state), boardId: frameIds };

      const expandParents = dwc.expandAllParents([id], objects);
      const interrupt = of("interrupt" as const, dwsp.interrupt);

      if (frameIds.some((fId: UUID) => fId === uuidZero)) {
        return of(
          expandParents,
          ...interrupt,
          rt.nav("workspace", paramsWithoutBoard, { [rt.REPLACE]: true })
        );
      }

      return of(
        expandParents,
        ...interrupt,
        rt.nav("workspace", paramsBoard, { [rt.REPLACE]: true })
      );
    },
  };
}

export function selectPrevShape(): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace.selection/select-prev-shape",
    watch(_: any, state: any, _stream: any): Observable<any> {
      const selected = dsh.lookupSelected(state);
      const countSelected = selected.length;
      const firstSelected = selected[0];
      const pageId = state.currentPageId;
      const objects = dsh.lookupPageObjects(state, pageId);
      const current = objects.get(firstSelected);
      const parent = objects.get(current?.parentId);
      const siblingIds = parent?.shapes || [];
      const currentIndex = d.indexOf(siblingIds, firstSelected);

      let sibling: UUID | undefined;
      if (countSelected === 1) {
        if (currentIndex === siblingIds.length - 1) {
          sibling = siblingIds[0];
        } else {
          sibling = siblingIds[currentIndex + 1];
        }
        return of(selectShape(sibling!));
      }

      if (countSelected > 1) {
        return of(selectShape(firstSelected));
      }

      return of();
    },
  };
}

export function selectNextShape(): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace.selection/select-next-shape",
    watch(_: any, state: any, _stream: any): Observable<any> {
      const selected = dsh.lookupSelected(state);
      const countSelected = selected.length;
      const firstSelected = selected[0];
      const pageId = state.currentPageId;
      const objects = dsh.lookupPageObjects(state, pageId);
      const current = objects.get(firstSelected);
      const parent = objects.get(current?.parentId);
      const siblingIds = parent?.shapes || [];
      const currentIndex = d.indexOf(siblingIds, firstSelected);

      let sibling: UUID | undefined;
      if (countSelected === 1) {
        if (currentIndex === 0) {
          sibling = siblingIds[siblingIds.length - 1];
        } else {
          sibling = siblingIds[currentIndex - 1];
        }
        return of(selectShape(sibling!));
      }

      if (countSelected > 1) {
        return of(selectShape(firstSelected));
      }

      return of();
    },
  };
}

export function deselectShape(id: UUID): ptk.Event {
  assert(typeof id === "string" && id.length > 0);

  return {
    type: "app.main.data.workspace.selection/deselect-shape",
    watch(): Observable<any> {
      return of(dwsp.interrupt);
    },
    update(state: any): any {
      const selected = state.workspaceLocal?.selected || new Set();
      const newSelected = new Set(selected);
      newSelected.delete(id);

      const { lastSelected, ...rest } = state.workspaceLocal || {};

      return {
        ...state,
        workspaceLocal: {
          ...rest,
          selected: newSelected,
        },
      };
    },
  };
}

export function shiftSelectShapes(
  id: UUID,
  objects?: Map<UUID, any>
): ptk.Event {
  return {
    type: "app.main.data.workspace.selection/shift-select-shapes",
    watch(): Observable<any> {
      return of(dwsp.interrupt);
    },
    update(state: any): any {
      const pageObjects = objects || dsh.lookupPageObjects(state);
      const lastSelected = state.workspaceLocal?.lastSelected;
      const expandedSelection = cfh.expandRegionSelection(
        pageObjects,
        new Set([lastSelected, id])
      );
      const selection = new Set([...dsh.lookupSelected(state), id]);
      const newSelection = new Set([...selection, ...expandedSelection]);

      return {
        ...state,
        workspaceLocal: {
          ...state.workspaceLocal,
          selected: newSelection,
          lastSelected: id,
        },
      };
    },
  };
}

export function selectShapes(ids: Set<UUID>): ptk.Event {
  return {
    type: "app.main.data.workspace.selection/select-shapes",
    update(state: any): any {
      const objects = dsh.lookupPageObjects(state);
      const focus = state.workspaceFocusSelected;

      let finalIds = ids;
      if (focus && d.notEmpty(focus)) {
        finalIds = cpf.filterNotFocus(objects, focus, ids);
      }

      return {
        ...state,
        workspaceLocal: {
          ...state.workspaceLocal,
          selected: finalIds,
        },
      };
    },
    watch(_: any, state: any, _stream: any): Observable<any> {
      const objects = dsh.lookupPageObjects(state);
      const expandS = of(
        dwc.expandAllParents(Array.from(ids), objects)
      ).pipe(observeOn(asyncScheduler));

      const interruptS = of(dwsp.interrupt);

      return merge(expandS, interruptS);
    },
  };
}

export function selectAll(): ptk.Event {
  return {
    type: "app.main.data.workspace.selection/select-all",
    watch(_: any, state: any, _stream: any): Observable<any> {
      const focus = state.workspaceFocusSelected;
      let objects = dsh.lookupPageObjects(state);

      if (focus) {
        objects = cpf.focusObjects(objects, focus);
      }

      const lookup = d.getf(objects);
      const parents = new Set(
        dsh
          .lookupSelected(state)
          .map((id: UUID) => lookup(id)?.parentId)
          .filter((pid: UUID) => pid !== undefined)
      );

      const parent =
        parents.size === 1
          ? lookup(Array.from(parents)[0])
          : lookup(uuidZero);

      const toselect = d.orderedSet(
        ...cfh
          .getImmediateChildren(objects, parent?.id)
          .filter((s: any) => !s.hidden && !s.blocked)
          .map((s: any) => s.id)
      );

      return of(selectShapes(toselect));
    },
  };
}

export function deselectAll(checkModal: boolean = false): ptk.Event {
  return {
    type: "app.main.data.workspace.selection/deselect-all",
    watch(_: any, state: any, _stream: any): Observable<any> {
      const paramsWithoutBoard = rt.getParams(state);
      delete paramsWithoutBoard.boardId;

      return of(
        dwsp.interrupt,
        dwe.clearEditionMode(),
        rt.nav("workspace", paramsWithoutBoard, { [rt.REPLACE]: true })
      );
    },
    update(state: any): any {
      if (checkModal && md.modal(state)) {
        return state;
      }

      return {
        ...state,
        workspaceLocal: {
          ...state.workspaceLocal,
          selected: d.orderedSet(),
        },
      };
    },
  };
}

// --- Select Shapes (By selrect)

export function selectShapesByCurrentSelrect(
  initialSet: Set<UUID>,
  remove: boolean,
  ignoreGroups: boolean,
  buffered: boolean = true
): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace.selection/select-shapes-by-current-selrect",
    watch(_: any, state: any, _stream: any): Observable<any> {
      const pageId = state.currentPageId;
      const objects = dsh.lookupPageObjects(state, pageId);
      const selrect = getIn(state, ["workspaceLocal", "selrect"]);
      const blocked = (id: UUID) => getIn(objects, [id, "blocked"], false);

      const filterObjs = (ids: UUID[]) =>
        ids.filter((id) => !blocked(id) && !cfh.hiddenParent(objects, id));

      if (!selrect) {
        return of();
      }

      const askWorker = buffered ? mw.askBuffered : mw.ask;

      return askWorker({
        cmd: "index/query-selection",
        pageId,
        rect: selrect,
        includeFrames: true,
        ignoreGroups,
        fullFrame: true,
        usingSelrect: true,
      }).pipe(
        filter((result: any) => result !== null),
        map((result: any) => cfh.cleanLoops(objects, result)),
        map((ids: UUID[]) =>
          remove
            ? set.difference(initialSet, new Set(ids))
            : new Set([...initialSet, ...filterObjs(ids)])
        ),
        map((ids: Set<UUID>) => selectShapes(ids))
      );
    },
  };
}

export function selectInsideGroup(
  groupId: UUID,
  position: any
): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace.selection/select-inside-group",
    watch(_: any, state: any, _stream: any): Observable<any> {
      const pageId = state.currentPageId;
      const objects = dsh.lookupPageObjects(state, pageId);
      const group = objects.get(groupId);
      const children = (group?.shapes || [])
        .map((id: UUID) => objects.get(id))
        .reverse();

      const selected = children.find((child: any) =>
        gsh.hasPoint(child, position)
      );

      if (selected) {
        return of(selectShape(selected.id));
      }

      return of();
    },
  };
}

// --- Duplicate Shapes

export function clearMemorizeDuplicated(): ptk.UpdateEvent {
  return {
    type: "app.main.data.workspace.selection/clear-memorize-duplicated",
    update(state: any): any {
      return d.dissocIn(state, ["workspaceLocal", "duplicated"]);
    },
  };
}

export function memorizeDuplicated(
  idOriginal: UUID,
  idDuplicated: UUID
): ptk.Event {
  return {
    type: "app.main.data.workspace.selection/memorize-duplicated",
    update(state: any): any {
      return {
        ...state,
        workspaceLocal: {
          ...state.workspaceLocal,
          duplicated: { idOriginal, idDuplicated },
        },
      };
    },
    watch(_: any, __: any, stream: any): Observable<any> {
      const stopper = stream.pipe(
        filter((e: any) => e.type === "app.main.data.workspace.selection/memorize-duplicated")
      );

      return of(clearMemorizeDuplicated()).pipe(
        delay(10000),
        takeUntil(stopper)
      );
    },
  };
}

function calcDuplicateDelta(
  obj: any,
  state: any,
  objects: Map<UUID, any>
): any {
  const { idOriginal, idDuplicated } =
    getIn(state, ["workspaceLocal", "duplicated"]) || {};
  const isFrame = cfh.frameShape(obj);
  const isInstanceHead = ctk.instanceHead(obj);

  if (
    (obj.id !== idOriginal && obj.id !== idDuplicated) ||
    !objects.has(idOriginal) ||
    !objects.has(idDuplicated)
  ) {
    if (isFrame && !isInstanceHead) {
      return gpt.point(obj.width + 50, 0);
    }
    return gpt.point(0, 0);
  }

  const ptOriginal = gpt.point(
    objects.get(idOriginal).selrect.x,
    objects.get(idOriginal).selrect.y
  );
  const ptDuplicated = gpt.point(
    objects.get(idDuplicated).selrect.x,
    objects.get(idDuplicated).selrect.y
  );
  const ptObj = gpt.point(obj.selrect.x, obj.selrect.y);
  const distance = gpt.subtract(ptDuplicated, ptOriginal);
  const newPos = gpt.add(ptDuplicated, distance);

  return gpt.subtract(newPos, ptObj);
}

export function duplicateShapes(
  ids: Set<UUID>,
  options: {
    moveDelta?: boolean;
    altDuplication?: boolean;
    changeSelection?: boolean;
    returnRef?: { current: UUID | null };
  } = {}
): ptk.WatchEvent {
  const {
    moveDelta = false,
    altDuplication = false,
    changeSelection = true,
    returnRef,
  } = options;

  return {
    type: "app.main.data.workspace.selection/duplicate-shapes",
    watch(it: any, state: any, _stream: any): Observable<any> {
      const page = dsh.lookupPage(state);
      const objects = page.objects;

      const filteredIds = new Set(
        Array.from(ids)
          .map((id) => objects.get(id))
          .filter((obj) => ctk.allowDuplicate(objects, obj))
          .map((obj) => obj.id)
      );

      if (filteredIds.size === 0) {
        return of();
      }

      const obj = objects.get(Array.from(filteredIds)[0]);
      const delta = moveDelta
        ? calcDuplicateDelta(obj, state, objects)
        : gpt.point(0, 0);

      const fileId = state.currentFileId;
      const libraries = dsh.lookupLibraries(state);
      const libraryData = dsh.lookupFileData(state, fileId);

      let changes = cll.generateDuplicateChanges(
        objects,
        page,
        filteredIds,
        delta,
        libraries,
        libraryData,
        fileId,
        { altDuplication }
      );

      changes = cll.generateDuplicateChangesUpdateIndices(objects, filteredIds);

      let tags = changes.tags || new Set();
      if (altDuplication) {
        tags = new Set([...tags, "alt-duplication"]);
      }
      if (tags.size > 0) {
        changes = { ...changes, tags };
      }

      const idOriginal = Array.from(filteredIds)[0];

      const newIds = changes.redoChanges
        .filter((c: any) => c.type === "add-obj" && filteredIds.has(c.oldId))
        .map((c: any) => getIn(c, ["obj", "id"]));

      const frames = new Set(
        Array.from(filteredIds).map((id) => objects.get(id)?.frameId)
      );

      const undoId = Symbol();

      const emitEvents = from(Array.from(filteredIds)).pipe(
        map((shapeId) => {
          const shape = objects.get(shapeId);
          const parentType = cfh.getShapeType(objects, shape.parentId);
          const externalLib =
            fileId !== shape.componentFile;
          const component = ctn.getComponentFromShape(shape, libraries);
          const origin = "workspace:duplicate-shapes";

          if (ctk.instanceHead(shape)) {
            return ev.event({
              [ev.NAME]: "use-library-component",
              [ev.ORIGIN]: origin,
              isExternalLibrary: externalLib,
              type: shape.type,
              parentType,
              isVariant: ctk.isVariant(component),
            });
          }

          if (cfh.hasLayout(objects, shape.parentId)) {
            return ev.event({
              [ev.NAME]: "layout-add-element",
              [ev.ORIGIN]: origin,
              type: shape.type,
              parentType,
            });
          }

          return ev.event({
            [ev.NAME]: "create-shape",
            [ev.ORIGIN]: origin,
            type: shape.type,
            parentType,
          });
        })
      );

      const operations = of(
        dwu.startUndoTransaction(undoId),
        dch.commitChanges(changes),
        changeSelection ? selectShapes(d.orderedSet(...newIds)) : null,
        ptk.dataEvent("layout/update", { ids: Array.from(frames) }),
        memorizeDuplicated(idOriginal, newIds[0]),
        dwu.commitUndoTransaction(undoId)
      ).filter((e) => e !== null);

      return concat(emitEvents, operations);
    },
  };
}

export function duplicateSelected(
  moveDelta: boolean = false,
  altDuplication: boolean = false
): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace.selection/duplicate-selected",
    watch(_: any, state: any, _stream: any): Observable<any> {
      if (
        moveDelta &&
        getIn(state, ["workspaceLocal", "transform"]) === undefined
      ) {
        const selected = dsh.lookupSelected(state);
        return of(
          duplicateShapes(selected, { moveDelta, altDuplication })
        );
      }

      return of();
    },
  };
}

export function changeHoverState(
  id: UUID,
  value: boolean
): ptk.UpdateEvent {
  return {
    type: "app.main.data.workspace.selection/change-hover-state",
    update(state: any): any {
      const hoverValue = value ? new Set([id]) : new Set();
      return {
        ...state,
        workspaceLocal: {
          ...state.workspaceLocal,
          hover: hoverValue,
        },
      };
    },
  };
}

export function updateFocusShapes(
  added: Set<UUID>,
  removed: Set<UUID>
): ptk.UpdateEvent {
  return {
    type: "app.main.data.workspace.selection/update-focus-shapes",
    update(state: any): any {
      const objects = dsh.lookupPageObjects(state);
      const currentFocus = state.workspaceFocusSelected || new Set();

      const newFocus = set.union(
        currentFocus,
        added
      );
      const finalFocus = set.difference(newFocus, removed);
      const cleanedFocus = cfh.cleanLoops(objects, finalFocus);

      return {
        ...state,
        workspaceFocusSelected: cleanedFocus,
      };
    },
  };
}

export function toggleFocusMode(): ptk.Event {
  return {
    type: "app.main.data.workspace.selection/toggle-focus-mode",
    data: {},

    update(state: any): any {
      const selected = dsh.lookupSelected(state);
      const haveSelection = d.notEmpty(selected);
      const inMode = d.notEmpty(state.workspaceFocusSelected);

      if (inMode) {
        return {
          ...state,
          workspaceLocal: state.workspacePreFocus || {
            ...state.workspaceLocal,
          },
          workspaceFocusSelected: undefined,
          workspacePreFocus: undefined,
        };
      }

      if (haveSelection) {
        return {
          ...state,
          workspaceFocusSelected: selected,
          workspacePreFocus: state.workspaceLocal,
        };
      }

      return state;
    },

    watch(_: any, state: any, stream: any): Observable<any> {
      const stopper = stream.pipe(
        filter(
          (e: any) =>
            e.type === "app.main.data.workspace.selection/toggle-focus-mode" ||
            e.type === `${dwpg.finalizePage}`
        )
      );

      if (!d.notEmpty(state.workspaceFocusSelected)) {
        return of();
      }

      const zoomAndDeselect = of(
        dwz.zoomToSelectedShape,
        deselectAll()
      );

      const updateFocus = from(refs.workspacePageObjects).pipe(
        map((obj: any) => new Set(Object.keys(obj || {}))),
        bufferCount(2, 1),
        mergeMap(([oldKeys, newKeys]) => {
          const oldSet = oldKeys as Set<string>;
          const newSet = newKeys as Set<string>;
          const removed = set.difference(oldSet, newSet);
          const added = set.difference(newSet, oldSet);

          if (d.notEmpty(added) || d.notEmpty(removed)) {
            return of(updateFocusShapes(added, removed));
          }

          return of();
        })
      );

      return merge(zoomAndDeselect, updateFocus).pipe(takeUntil(stopper));
    },
  };
}
