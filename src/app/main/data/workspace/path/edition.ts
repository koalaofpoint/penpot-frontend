/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (c) KALEIDOS INC
 */

import * as DM from "../common/data/macros";
import * as UUID from "../common/uuid";
import * as D from "../common/data";
import * as GPT from "../common/geom/point";
import * as PATH from "../common/types/path";
import * as PATH_HELPERS from "../common/types/path/helpers";
import * as DCH from "../data/changes";
import * as DSH from "../data/helpers";
import * as DWE from "./edition";
import * as CHANGES from "./changes";
import * as HELPERS from "./helpers";
import * as SELECTION from "./selection";
import * as ST from "./state";
import * as STREAMS from "./streams";
import * as UNDO from "./undo";
import * as DWSH from "./shapes";
import * as MS from "../streams";
import * as MSE from "../util/mouse";
import { Observable, of, concat, merge, filter, map, take, takeUntil, debounceTime, scan } from "rxjs";

export function modifyHandler(
  id: any,
  index: number,
  prefix: string,
  dx: number,
  dy: number,
  matchOpposite: boolean
) {
  return {
    type: "app.main.data.workspace.path.edition/modify-handler",
    update: (_: any, state: any) => {
      const content = ST.getPath(state, "content");
      const modifiers = HELPERS.moveHandlerModifiers(
        content,
        index,
        prefix,
        false,
        matchOpposite,
        dx,
        dy
      );
      const cx = prefix === "c1" ? "c1x" : "c2x";
      const cy = prefix === "c1" ? "c1y" : "c2y";
      const point = GPT.point(
        DM.getIn(content, [index, "params", cx], 0) + dx,
        DM.getIn(content, [index, "params", cy], 0) + dy
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
              movingHandler: point,
            },
          },
        },
      };
    },
  };
}

export function applyContentModifiers() {
  return {
    type: "app.main.data.workspace.path.edition/apply-content-modifiers",
    watch: (it: any, state: any): Observable<any> => {
      const id = ST.getPathId(state);
      const shape = ST.getPath(state);

      const contentModifiers =
        DM.getIn(state, ["workspace-local", "edit-path", id, "contentModifiers"]) || {};

      if (!shape || !contentModifiers) {
        return of(DWE.clearEditionMode);
      }

      const pageId = state["current-page-id"];
      const objects = DSH.lookupPageObjects(state);

      const content = shape.content;
      const newContent = PATH.applyContentModifiers(content, contentModifiers);

      const oldPoints = PATH.getPoints(content);
      const newPoints = PATH.getPoints(newContent);
      const pointChange = Object.fromEntries(oldPoints.map((p, i) => [p, newPoints[i]]));

      if (newContent && shape) {
        const changes = CHANGES.generatePathChanges(
          it,
          objects,
          pageId,
          shape,
          shape.content,
          newContent
        );

        if (newContent.length === 0) {
          return of(DCH.commitChanges(changes), DWE.clearEditionMode);
        }

        return of(
          DCH.commitChanges(changes),
          SELECTION.updateSelection(pointChange),
          (state: any) => ({
            ...state,
            ["workspace-local"]: {
              ...state["workspace-local"],
              ["edit-path"]: {
                ...state["workspace-local"]?.["edit-path"],
                [id]: {
                  ...state["workspace-local"]?.["edit-path"]?.[id],
                  contentModifiers: undefined,
                  movingNodes: undefined,
                  movingHandler: undefined,
                },
              },
            },
          })
        );
      }

      return of();
    },
  };
}

export function modifyContentPoint(
  content: any,
  moveDelta: { x: number; y: number },
  modifiers: any,
  point: any
): any {
  const pointIndices = PATH.pointIndices(content, point);
  const handlerIndices = PATH.handlerIndices(content, point);

  const modifyPoint = (mods: any, index: number) => ({
    ...mods,
    [index]: {
      ...mods[index],
      x: (mods[index]?.x || 0) + moveDelta.x,
      y: (mods[index]?.y || 0) + moveDelta.y,
    },
  });

  const modifyHandler = (mods: any, [index, prefix]: [number, string]) => {
    const cx = D.prefixKeyword(prefix, "x");
    const cy = D.prefixKeyword(prefix, "y");
    return {
      ...mods,
      [index]: {
        ...mods[index],
        [cx]: (mods[index]?.[cx] || 0) + moveDelta.x,
        [cy]: (mods[index]?.[cy] || 0) + moveDelta.y,
      },
    };
  };

  let result = modifiers;
  result = pointIndices.reduce(modifyPoint, result);
  result = handlerIndices.reduce(modifyHandler, result);

  return result;
}

export function setMoveModifier(points: any[], moveModifier: { x: number; y: number }) {
  return {
    type: "app.main.data.workspace.path.edition/set-modifiers",
    update: (_: any, state: any) => {
      const id = ST.getPathId(state);
      const content = ST.getPath(state, "content");
      const modifiersReducer = (mods: any, pt: any) =>
        modifyContentPoint(content, moveModifier, mods, pt);

      const contentModifiers =
        DM.getIn(state, ["workspace-local", "edit-path", id, "contentModifiers"], {});
      const newModifiers = points.reduce(modifiersReducer, contentModifiers);

      return {
        ...state,
        ["workspace-local"]: {
          ...state["workspace-local"],
          ["edit-path"]: {
            ...state["workspace-local"]?.["edit-path"],
            [id]: {
              ...state["workspace-local"]?.["edit-path"]?.[id],
              contentModifiers: newModifiers,
            },
          },
        },
      };
    },
  };
}

export function moveSelectedPathPoint(fromPoint: any, toPoint: any) {
  return {
    type: "app.main.data.workspace.path.edition/move-point",
    update: (_: any, state: any) => {
      const id = ST.getPathId(state);
      const content = ST.getPath(state, "content");
      const finalToPoint = toPoint.shift
        ? PATH_HELPERS.positionFixedAngle(fromPoint, toPoint)
        : toPoint;

      const delta = GPT.subtract(finalToPoint, fromPoint);
      const modifiersReducer = (mods: any, pt: any) =>
        modifyContentPoint(content, delta, mods, pt);

      const selectedPoints =
        DM.getIn(state, ["workspace-local", "edit-path", id, "selected-points"], new Set());
      const modifiers = DM.getIn(
        state,
        ["workspace-local", "edit-path", id, "contentModifiers"],
        {}
      );
      const newModifiers = [...selectedPoints].reduce(modifiersReducer, modifiers);

      return {
        ...state,
        ["workspace-local"]: {
          ...state["workspace-local"],
          ["edit-path"]: {
            ...state["workspace-local"]?.["edit-path"],
            [id]: {
              ...state["workspace-local"]?.["edit-path"]?.[id],
              movingNodes: true,
              contentModifiers: newModifiers,
            },
          },
        },
      };
    },
  };
}

export function startMovePathPoint(position: any, shift: boolean) {
  return {
    type: "app.main.data.workspace.path.edition/start-move-path-point",
    watch: (_: any, state: any): Observable<any> => {
      const id = DM.getIn(state, ["workspace-local", "edition"]);
      const selectedPoints = DM.getIn(
        state,
        ["workspace-local", "edit-path", id, "selected-points"],
        new Set()
      );
      const selected = selectedPoints.has(position);

      return STREAMS.dragStream(
        concat(
          of(DWSH.updateShapes([id], PATH.convertToPath)),
          selected
            ? of()
            : of(SELECTION.selectNode(position, shift)),
          of(dragSelectedPoints(MS.mousePosition.getValue()))
        ),
        of(SELECTION.selectNode(position, shift))
      );
    },
  };
}

export function dragSelectedPoints(startPosition: any) {
  return {
    type: "app.main.data.workspace.path.edition/drag-selected-points",
    watch: (_: any, state: any, stream: any): Observable<any> => {
      const stopper = MSE.dragStopper(stream);

      const id = DM.getIn(state, ["workspace-local", "edition"]);
      const selectedPoints = DM.getIn(
        state,
        ["workspace-local", "edit-path", id, "selected-points"],
        new Set()
      );

      const closestPoint = [...selectedPoints].reduce((closest, point) =>
        GPT.distance(startPosition, point) < GPT.distance(startPosition, closest) ? point : closest
      );

      const content = ST.getPath(state, "content");
      const points = PATH.getPoints(content);

      return concat(
        [...points].map((point) =>
          STREAMS.movePointsStream(closestPoint, selectedPoints, points).pipe(
            map((pos) => moveSelectedPathPoint(startPosition, pos)),
            takeUntil(stopper)
          )
        ),
        of(applyContentModifiers())
      );
    },
  };
}

function getDisplacement(direction: string): { x: number; y: number } {
  switch (direction) {
    case "up":
      return GPT.point(0, -1);
    case "down":
      return GPT.point(0, 1);
    case "left":
      return GPT.point(-1, 0);
    case "right":
      return GPT.point(1, 0);
    default:
      return GPT.point(0, 0);
  }
}

export function finishMoveSelected() {
  return {
    type: "app.main.data.workspace.path.edition/finish-move-selected",
    update: (_: any, state: any) => {
      const id = DM.getIn(state, ["workspace-local", "edition"]);
      return {
        ...state,
        ["workspace-local"]: {
          ...state["workspace-local"],
          ["edit-path"]: {
            ...state["workspace-local"]?.["edit-path"],
            [id]: {
              ...state["workspace-local"]?.["edit-path"]?.[id],
              currentMove: undefined,
            },
          },
        },
      },
    },
  };
}

export function moveSelected(direction: string, shift: boolean) {
  const sameEvent = Symbol("same-event");

  return {
    type: "app.main.data.workspace.path.edition/move-selected",
    deref: () => direction,
    update: (_: any, state: any) => {
      const id = DM.getIn(state, ["workspace-local", "edition"]);
      const currentMove = DM.getIn(state, ["workspace-local", "edit-path", id, "currentMove"]);

      if (currentMove == null) {
        return {
          ...state,
          ["workspace-local"]: {
            ...state["workspace-local"],
            ["edit-path"]: {
              ...state["workspace-local"]?.["edit-path"],
              [id]: {
                ...state["workspace-local"]?.["edit-path"]?.[id],
                movingNodes: true,
                currentMove: sameEvent,
              },
            },
          },
        };
      }

      return state;
    },
    watch: (_: any, state: any, stream: Observable<any>): Observable<any> => {
      const id = DM.getIn(state, ["workspace-local", "edition"]);
      const currentMove = DM.getIn(state, ["workspace-local", "edit-path", id, "currentMove"]);

      if (id && currentMove === sameEvent) {
        const points = DM.getIn(
          state,
          ["workspace-local", "edit-path", id, "selected-points"],
          new Set()
        );

        const moveEvents = stream.pipe(
          filter((e: any) => e.type === "app.main.data.workspace.path.edition/move-selected"),
          map((e: any) => e.deref()),
          filter((d: string) => d === direction)
        );

        const stopper = moveEvents.pipe(debounceTime(100), take(1));

        const scale = shift ? GPT.point(10, 10) : GPT.point(1, 1);
        const movVec = GPT.multiply(getDisplacement(direction), scale);

        return concat(
          of(DWSH.updateShapes([id], PATH.convertToPath)),
          merge(
            moveEvents.pipe(
              takeUntil(stopper),
              scan((acc) => GPT.add(acc, movVec), GPT.point(0, 0)),
              map((offset) => setMoveModifier([...points], offset))
            ),
            of(moveSelected(direction, shift))
          ),
          of(applyContentModifiers(), finishMoveSelected())
        );
      }

      return of();
    },
  };
}

export function startMoveHandler(index: number, prefix: string) {
  return {
    type: "app.main.data.workspace.path.edition/start-move-handler",
    watch: (_: any, state: any, stream: any): Observable<any> => {
      const id = DM.getIn(state, ["workspace-local", "edition"]);
      const cx = D.prefixKeyword(prefix, "x");
      const cy = D.prefixKeyword(prefix, "y");

      const modifiers = DM.getIn(state, ["workspace-local", "edit-path", id, "contentModifiers"], {});
      const startDeltaX = DM.getIn(modifiers, [index, cx], 0);
      const startDeltaY = DM.getIn(modifiers, [index, cy], 0);

      const content = ST.getPath(state, "content");
      const points = PATH.getPoints(content);

      const point = PATH_HELPERS.segmentToPoint(content[(prefix === "c1" ? index - 1 : index)]);
      const handler = PATH.getHandler(content, index, prefix);

      const [opIdx, opPrefix] = PATH.oppositeIndex(content, index, prefix);
      const opposite = PATH.getHandlerPoint(content, opIdx, opPrefix);

      return STREAMS.dragStream(
        concat(
          of(DWSH.updateShapes([id], PATH.convertToPath)),
          STREAMS.moveHandlerStream(handler, point, handler, opposite, points).pipe(
            map((pos: any) => {
              const finalPos = pos.shift
                ? PATH_HELPERS.positionFixedAngle(point, GPT.point(pos.x, pos.y))
                : GPT.point(pos.x, pos.y);

              return modifyHandler(
                id,
                index,
                prefix,
                startDeltaX + (finalPos.x - handler.x),
                startDeltaY + (finalPos.y - handler.y),
                !pos.alt
              );
            }),
            takeUntil(
              merge(
                MSE.dragStopper(stream),
                stream.pipe(filter((e: any) => STREAMS.finishEdition(e)))
              )
            )
          ),
          of(applyContentModifiers())
        )
      );
    },
  };
}

export function startPathEdit(id: any) {
  return {
    type: "app.main.data.workspace.path.edition/start-path-edit",
    update: (_: any, state: any) => {
      const objects = DSH.lookupPageObjects(state);
      const shape = objects[id];

      const existingEditPath = state["workspace-local"]?.["edit-path"]?.[id] || {};
      const editMode = existingEditPath["edit-mode"];

      return {
        ...ST.setContent(state, PATH.closeSubpaths(shape.content)),
        ["workspace-local"]: {
          ...state["workspace-local"],
          ["edit-path"]: {
            ...state["workspace-local"]?.["edit-path"],
            [id]: {
              ...existingEditPath,
              "edit-mode": editMode === "move" ? "draw" : editMode,
              selected: new Set(),
              snapToggled: false,
              oldContent: shape.content,
            },
          },
        },
      };
    },
    watch: (_: any, __: any, stream: Observable<any>): Observable<any> => {
      const stopper = stream.pipe(
        filter(
          (e: any) =>
            e.type === "app.main.data.workspace.edition/clear-edition-mode" ||
            e.type === "app.main.data.workspace.path.edition/start-path-edit"
        )
      );

      return concat(
        of(UNDO.startPathUndo()),
        stream.pipe(
          filter((e: any) => e === "interrupt"),
          take(1),
          map(() => stopPathEdit(id)),
          takeUntil(stopper)
        )
      );
    },
  };
}

export function stopPathEdit(id: any) {
  return {
    type: "app.main.data.workspace.path.edition/stop-path-edit",
    update: (_: any, state: any) => {
      const { [id]: _, ...rest } = state["workspace-local"]?.["edit-path"] || {};
      return {
        ...state,
        ["workspace-local"]: {
          ...state["workspace-local"],
          ["edit-path"]: rest,
        },
      };
    },
    watch: (): Observable<any> => {
      return of({ type: "layout/update", data: { ids: [id] } });
    },
  };
}

export function splitSegments(id: any, { fromP, toP, t }: any) {
  return {
    type: "app.main.data.workspace.path.edition/split-segments",
    update: (_: any, state: any) => {
      const content = ST.getPath(state, "content");
      return {
        ...state,
        ["workspace-local"]: {
          ...state["workspace-local"],
          ["edit-path"]: {
            ...state["workspace-local"]?.["edit-path"],
            [id]: {
              ...state["workspace-local"]?.["edit-path"]?.[id],
              oldContent: content,
            },
          },
        },
        ...ST.setContent(
          state,
          PATH.content(PATH.splitSegments(content, new Set([fromP, toP]), t))
        ),
      };
    },
    watch: (): Observable<any> => {
      return of(CHANGES.savePathContent({ preserveMoveTo: true }));
    },
  };
}

export function createNodeAtPosition(params: any) {
  return {
    type: "app.main.data.workspace.path.edition/create-node-at-position",
    watch: (_: any, state: any): Observable<any> => {
      const id = ST.getPathId(state);
      return of(
        DWSH.updateShapes([id], PATH.convertToPath),
        splitSegments(id, params)
      );
    },
  };
}