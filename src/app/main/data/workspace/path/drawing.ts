/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (c) KALEIDOS INC
 */

import * as D from "../common/data";
import * as DM from "../common/data/macros";
import * as GPT from "../common/geom/point";
import * as GSL from "../common/geom/shapes/flex-layout";
import * as CTN from "../common/types/container";
import * as PATH from "../common/types/path";
import * as PATH_HELPERS from "../common/types/path/helpers";
import * as CTS from "../common/types/shape";
import * as CTST from "../common/types/shape-tree";
import * as CTL from "../common/types/shape/layout";
import * as DSH from "../data/helpers";
import * as DWDC from "./drawing/common";
import * as DWE from "./edition";
import * as DWPG from "./pages";
import * as CHANGES from "./changes";
import * as COMMON from "./common";
import * as HELPERS from "./helpers";
import * as ST from "./state";
import * as STREAMS from "./streams";
import * as UNDO from "./undo";
import * as DWSH from "./shapes";
import * as MSE from "../util/mouse";
import { Observable, of, concat, merge, filter, map, take, takeUntil, switchMap } from "rxjs";

function endPathEvent(event: any): boolean {
  if (!event) return false;
  const type = event.type || event;
  return (
    type === "app.main.data.workspace.path.common/finish-path" ||
    type === "app.main.data.workspace.path.shortcuts/esc-pressed" ||
    type === "app.main.data.workspace.common/clear-edition-mode" ||
    type === "app.main.data.workspace.edition/clear-edition-mode" ||
    type === "app.main.data.workspace.pages/finalize-page" ||
    event === "interrupt" ||
    (MSE.mouseEvent(event) && MSE.mouseDoubleClickEvent(event))
  );
}

export function previewNextPoint({ x, y, shift }: any) {
  return {
    type: "app.main.data.workspace.path.drawing/preview-next-point",
    update: (_: any, state: any) => {
      const id = ST.getPathId(state);
      const fixAngle = !!shift;
      const lastPoint = DM.getIn(state, ["workspace-local", "edit-path", id, "last-point"]);
      const position = fixAngle && lastPoint
        ? PATH_HELPERS.positionFixedAngle(lastPoint, GPT.point(x, y))
        : GPT.point(x, y);

      const content = ST.getPath(state, "content");
      const pathLastPoint = DM.getIn(state, ["workspace-local", "edit-path", id, "last-point"]);
      const prevHandler = DM.getIn(state, ["workspace-local", "edit-path", id, "prev-handler"]);
      const segment = PATH.nextNode(content, position, pathLastPoint, prevHandler);

      return D.assocIn(state, ["workspace-local", "edit-path", id, "preview"], segment);
    },
  };
}

export function addNode({ x, y, shift }: any) {
  return {
    type: "app.main.data.workspace.path.drawing/add-node",
    update: (_: any, state: any) => {
      const id = ST.getPathId(state);
      const fixAngle = !!shift;
      const lastPoint = DM.getIn(state, ["workspace-local", "edit-path", id, "last-point"]);
      const prevHandler = DM.getIn(state, ["workspace-local", "edit-path", id, "prev-handler"]);
      const position = fixAngle && lastPoint
        ? PATH_HELPERS.positionFixedAngle(lastPoint, GPT.point(x, y))
        : GPT.point(x, y);

      if (lastPoint && GPT.equal(lastPoint, position)) {
        return state;
      }

      const shape = HELPERS.appendNode(
        ST.getPath(state),
        position,
        lastPoint,
        prevHandler
      );

      let result = state;
      result = D.assocIn(result, ["workspace-local", "edit-path", id, "last-point"], position);
      result = D.updateIn(result, ["workspace-local", "edit-path", id], (ep: any) => {
        const { prev-handler, preview, ...rest } = ep;
        return rest;
      });
      result = D.assocIn(result, ST.getPathLocation(result), shape);

      return result;
    },
  };
}

export function dragHandler(
  position?: any,
  index?: number,
  prefix?: string,
  { x, y, alt, shift }: any = {}
) {
  return {
    type: "app.main.data.workspace.path.drawing/drag-handler",
    update: (_: any, state: any) => {
      const id = ST.getPathId(state);
      const content = ST.getPath(state, "content");
      const idx = index ?? content.length;
      const pfx = prefix ?? "c1";
      const pos = position ?? (content[idx - 1] ? PATH_HELPERS.segmentToPoint(content[idx - 1]) : null);
      const oldHandler = PATH.getHandlerPoint(content, idx, pfx);

      const handlerPosition = shift && pos
        ? PATH_HELPERS.positionFixedAngle(pos, GPT.point(x, y))
        : GPT.point(x, y);

      let dx: number;
      let dy: number;
      if (oldHandler && pos) {
        dx = GPT.add(GPT.subtract(oldHandler, pos), GPT.subtract(pos, handlerPosition)).x;
        dy = GPT.add(GPT.subtract(oldHandler, pos), GPT.subtract(pos, handlerPosition)).y;
      } else if (pos) {
        const vec = GPT.subtract(pos, handlerPosition);
        dx = vec.x;
        dy = vec.y;
      } else {
        dx = 0;
        dy = 0;
      }

      const matchOpposite = !alt;
      const modifiers = HELPERS.moveHandlerModifiers(
        content,
        idx,
        pfx,
        matchOpposite,
        matchOpposite,
        dx,
        dy
      );

      return {
        ...state,
        ["workspace-local"]: {
          ...state["workspace-local"],
          ["edit-path"]: {
            ...state["workspace-local"]?.["edit-path"],
            [id]: {
              ...state["workspace-local"]?.["edit-path"]?.[id],
              contentModifiers: {
                ...state["workspace-local"]?.["edit-path"]?.[id]?.contentModifiers,
                ...modifiers,
              },
              dragHandler: handlerPosition,
            },
          },
        },
      };
    },
  };
}

export function finishDrag() {
  return {
    type: "app.main.data.workspace.path.drawing/finish-drag",
    update: (_: any, state: any) => {
      const id = ST.getPathId(state);
      const modifiers = DM.getIn(state, ["workspace-local", "edit-path", id, "contentModifiers"]);
      const content = PATH.applyContentModifiers(ST.getPath(state, "content"), modifiers);
      const handler = DM.getIn(state, ["workspace-local", "edit-path", id, "dragHandler"]);

      let result = ST.setContent(state, content);
      result = D.updateIn(result, ["workspace-local", "edit-path", id], (ep: any) => {
        const { dragHandler, contentModifiers, prevHandler, ...rest } = ep;
        return { ...rest, "prev-handler": handler };
      });
      result = D.updateIn(result, ST.getPathLocation(result), PATH.updateGeometry);

      return result;
    },
    watch: (): Observable<any> => {
      return concat(
        of({ type: "preview-next-point" }),
        of(UNDO.mergeHead())
      );
    },
  };
}

export function closePathDragStart(position: any) {
  return {
    type: "app.main.data.workspace.path.drawing/close-path-drag-start",
    watch: (_: any, state: any, stream: any): Observable<any> => {
      const content = ST.getPath(state, "content");
      const handlers = PATH.getHandlers(content);
      const atPosition = handlers[position];
      const [idx, pfx] = atPosition?.length === 1 ? atPosition[0] : [undefined, undefined];

      const dragEventsStream = STREAMS.positionStream(state).pipe(
        map((pos) => dragHandler(position, idx, pfx, pos)),
        takeUntil(
          merge(
            MSE.dragStopper(stream),
            stream.pipe(filter(endPathEvent))
          )
        )
      );

      return concat(
        of(addNode(position)),
        STREAMS.dragStream(
          concat(
            of(dragEventsStream),
            of(finishDrag()),
            of({ type: "close-path-drag-end" })
          )
        ),
        of(COMMON.finishPath())
      );
    },
  };
}

export function closePathDragEnd() {
  return {
    type: "app.main.data.workspace.path.drawing/close-path-drag-end",
    update: (_: any, state: any) => {
      const id = ST.getPathId(state);
      return D.updateIn(state, ["workspace-local", "edit-path", id], (ep: any) => {
        const { prev-handler, ...rest } = ep;
        return rest;
      });
    },
  };
}

export function startPathFromPoint(position: any) {
  return {
    type: "app.main.data.workspace.path.drawing/start-path-from-point",
    watch: (_: any, state: any, stream: any): Observable<any> => {
      const stopper = merge(
        MSE.dragStopper(stream),
        stream.pipe(filter(endPathEvent))
      );

      const dragEvents = STREAMS.positionStream(state).pipe(
        map((pos) => dragHandler(pos)),
        takeUntil(stopper)
      );

      return concat(
        of(addNode(position)),
        STREAMS.dragStream(
          concat(
            of(dragEvents),
            of(finishDrag())
          )
        )
      );
    },
  };
}

function makeNodeEventsStream(stream: Observable<any>): Observable<any> {
  return stream.pipe(
    filter((e: any) => e?.type === "app.main.data.workspace.path.drawing/close-path-drag-start"),
    take(1),
    switchMap(() => of())
  );
}

function makeDragStream(state: any, stream: Observable<any>, downEvent: any): Observable<any> {
  if (!GPT.point(downEvent)) {
    throw new Error("should be a point instance");
  }

  const stopper = merge(
    MSE.dragStopper(stream),
    stream.pipe(filter(endPathEvent))
  );

  const dragEvents = STREAMS.positionStream(state).pipe(
    map((pos) => dragHandler(pos)),
    takeUntil(stopper)
  );

  return concat(
    of(addNode(downEvent)),
    STREAMS.dragStream(
      concat(
        of(dragEvents),
        of(finishDrag())
      )
    )
  );
}

function startEdition() {
  return {
    type: "app.main.data.workspace.path.drawing/start-edition",
    update: (_: any, state: any) => {
      const id = ST.getPathId(state);
      return D.assocIn(state, ["workspace-local", "edit-path", id, "edit-mode"], "draw");
    },
    watch: (_: any, state: any, stream: Observable<any>): Observable<any> => {
      const mouseDown = stream.pipe(
        filter(MSE.mouseEvent),
        filter(MSE.mouseDownEvent)
      );

      const endStream = stream.pipe(
        filter(endPathEvent),
        map(() => true)
      );

      const stopperStream = stream.pipe(
        filter((e: any) => e?.type === "app.main.data.workspace.path.drawing/start-edition"),
        merge(endStream)
      );

      const mousemoveEvents = STREAMS.positionStream(state).pipe(
        map(previewNextPoint)
      );

      const mousedownEvents = mouseDown.pipe(
        map(() => STREAMS.positionStream(state).getValue()),
        switchMap((pos) =>
          concat(
            makeNodeEventsStream(stream),
            makeDragStream(state, stream, pos)
          )
        ),
        takeUntil(endStream)
      );

      return concat(
        of(UNDO.startPathUndo()),
        merge(mousemoveEvents, mousedownEvents).pipe(takeUntil(stopperStream)),
        of({ type: "end-edition" })
      );
    },
  };
}

export function setupFrame() {
  return {
    type: "app.main.data.workspace.path.drawing/setup-frame",
    update: (_: any, state: any) => {
      const objects = DSH.lookupPageObjects(state);
      const content = DM.getIn(state, ["workspace-drawing", "object", "content"], []);
      const position = PATH.getHandlerPoint(content, 0, null);

      const frame = CTST.topNestedFrame(objects, position);
      const frameId = frame ? CTN.getFirstValidParent(objects, frame).id : null;
      const flexLayout = CTL.flexLayout(objects, frameId);
      const gridLayout = CTL.gridLayout(objects, frameId);
      const dropIndex = flexLayout ? GSL.getDropIndex(frameId, objects, position) : undefined;

      return D.updateIn(state, ["workspace-drawing", "object"], (obj: any) => ({
        ...obj,
        "frame-id": frameId,
        "parent-id": frameId,
        ...(dropIndex !== undefined ? { index: dropIndex } : {}),
      }));
    },
  };
}

function handleDrawingEnd(shapeId: any) {
  return {
    type: "app.main.data.workspace.path.drawing/handle-drawing-end",
    update: (_: any, state: any) => {
      const content = PATH.checkContent(DM.getIn(state, ["workspace-drawing", "object", "content"]));
      if (content && content.length > 1) {
        return D.assocIn(state, ["workspace-drawing", "object", "initialized?"], true);
      }
      return state;
    },
    watch: (_: any, state: any): Observable<any> => {
      const content = DM.getIn(state, ["workspace-drawing", "object", "content"]);
      if (content && content.length > 1) {
        return of(
          setupFrame(),
          DWDC.handleFinishDrawing(),
          DWE.startEditionMode(shapeId),
          changeEditMode("draw")
        );
      }
      return of(DWDC.handleFinishDrawing());
    },
  };
}

export function handleDrawing() {
  return {
    type: "app.main.data.workspace.path.drawing/handle-drawing",
    update: (_: any, state: any) => {
      const shape = CTS.setupShape({ type: "path" });
      return {
        ...state,
        "workspace-drawing": {
          ...state["workspace-drawing"],
          object: shape,
        },
      };
    },
    watch: (_: any, state: any, stream: Observable<any>): Observable<any> => {
      const shapeId = DM.getIn(state, ["workspace-drawing", "object", "id"]);
      return concat(
        of(startEdition()),
        stream.pipe(
          filter((e: any) => e?.type === "end-edition"),
          take(1)
        ),
        of(handleDrawingEnd(shapeId))
      );
    },
  };
}

function startDrawModeStar() {
  return {
    type: "app.main.data.workspace.path.drawing/start-draw-mode*",
    watch: (_: any, state: any, stream: Observable<any>): Observable<any> => {
      const local = state["workspace-local"];
      const id = local?.edition;
      const mode = DM.getIn(local, ["edit-path", id, "edit-mode"]);

      if (mode === "draw") {
        return concat(
          of(DWSH.updateShapes([id], PATH.convertToPath)),
          of(startEdition()),
          stream.pipe(
            filter((e: any) => e?.type === "end-edition"),
            take(1),
            switchMap(() =>
              of(
                checkChangedContent(),
                startDrawModeStar()
              )
            )
          )
        );
      }

      return of();
    },
  };
}

export function startDrawMode() {
  return {
    type: "app.main.data.workspace.path.drawing/start-draw-mode",
    update: (_: any, state: any) => {
      const id = DM.getIn(state, ["workspace-local", "edition"]);
      const objects = DSH.lookupPageObjects(state);
      const content = DM.getIn(objects, [id, "content"]);

      if (content) {
        return D.assocIn(state, ["workspace-local", "edit-path", id, "old-content"], content);
      }
      return state;
    },
    watch: (): Observable<any> => {
      return of(startDrawModeStar());
    },
  };
}

export function changeEditMode(mode: string) {
  return {
    type: "app.main.data.workspace.path.drawing/change-edit-mode",
    update: (_: any, state: any) => {
      const id = DM.getIn(state, ["workspace-local", "edition"]);
      if (id) {
        return D.updateIn(state, ["workspace-local", "edit-path", id], (ep: any) =>
          ep ? { ...ep, "edit-mode": mode } : { "edit-mode": mode }
        );
      }
      return state;
    },
    watch: (_: any, state: any): Observable<any> => {
      const id = DM.getIn(state, ["workspace-local", "edition"]);
      if (id) {
        const currentMode = DM.getIn(state, ["workspace-local", "edit-path", id, "edit-mode"]);
        switch (currentMode) {
          case "move":
            return of(COMMON.finishPath());
          case "draw":
            return of(startDrawMode());
          default:
            return of();
        }
      }
      return of();
    },
  };
}

export function resetLastHandler() {
  return {
    type: "app.main.data.workspace.path.drawing/reset-last-handler",
    update: (_: any, state: any) => {
      const id = ST.getPathId(state);
      return D.assocIn(state, ["workspace-local", "edit-path", id, "prev-handler"], null);
    },
  };
}

export function checkChangedContent() {
  return {
    type: "app.main.data.workspace.path.drawing/check-changed-content",
    watch: (_: any, state: any): Observable<any> => {
      const id = ST.getPathId(state);
      const content = ST.getPath(state, "content");
      const oldContent = DM.getIn(state, ["workspace-local", "edit-path", id, "old-content"]);
      const mode = DM.getIn(state, ["workspace-local", "edit-path", id, "edit-mode"]);
      const emptyContent = !content || content.length === 0;

      if (content !== oldContent && !emptyContent) {
        return of(CHANGES.savePathContent());
      }

      if (mode === "draw") {
        return of("interrupt");
      }

      return of(COMMON.finishPath(), DWDC.clearDrawing());
    },
  };
}