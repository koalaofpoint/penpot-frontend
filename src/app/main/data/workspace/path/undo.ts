/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (c) KALEIDOS INC
 */

import * as D from "../common/data";
import * as DM from "../common/data/macros";
import * as UUID from "../common/uuid";
import * as U from "../common/data/undo-stack";
import * as DWC from "./common";
import * as DWE from "./edition";
import * as DWPG from "./pages";
import * as CHANGES from "./changes";
import * as COMMON from "./common";
import * as ST from "./state";
import * as ST2 from "../store";
import { Observable, of, concat, from, filter, map, take, takeUntil } from "rxjs";
import { derived, fromAtom } from "okulary";

export function undoEvent(event: any): boolean {
  return event.type === "app.main.data.workspace.common/undo";
}

export function redoEvent(event: any): boolean {
  return event.type === "app.main.data.workspace.common/redo";
}

function makeEntry(state: any): any {
  const id = ST.getPathId(state);
  const shape = ST.getPath(state);

  return {
    content: shape?.content,
    selrect: shape?.selrect,
    points: shape?.points,
    preview: DM.getIn(state, ["workspace-local", "edit-path", id, "preview"]),
    lastPoint: DM.getIn(state, ["workspace-local", "edit-path", id, "last-point"]),
    prevHandler: DM.getIn(state, ["workspace-local", "edit-path", id, "prev-handler"]),
  };
}

function loadEntry(state: any, entry: any): any {
  const id = ST.getPathId(state);
  const oldContent = ST.getPath(state, "content");

  let result = state;
  if (entry.content != null) {
    result = D.assocInWhen(result, ST.getPathLocation(state, "content"), entry.content);
  }
  if (entry.selrect != null) {
    result = D.assocInWhen(result, ST.getPathLocation(state, "selrect"), entry.selrect);
  }
  if (entry.points != null) {
    result = D.assocInWhen(result, ST.getPathLocation(state, "points"), entry.points);
  }
  if (entry.preview != null || entry.lastPoint != null || entry.prevHandler != null) {
    result = D.updateInWhen(result, ["workspace-local", "edit-path", id], (editPath: any) => ({
      ...editPath,
      preview: entry.preview,
      lastPoint: entry.lastPoint,
      prevHandler: entry.prevHandler,
      oldContent,
    }));
  }

  return result;
}

export function undoPath() {
  return {
    type: "app.main.data.workspace.path.undo/undo-path",
    update: (_: any, state: any) => {
      const id = ST.getPathId(state);
      const undoStack = U.undo(
        DM.getIn(state, ["workspace-local", "edit-path", id, "undo-stack"])
      );
      const entry = U.peek(undoStack);

      if (entry == null) {
        return state;
      }

      return {
        ...loadEntry(state, entry),
        ["workspace-local"]: {
          ...state["workspace-local"],
          ["edit-path"]: {
            ...state["workspace-local"]?.["edit-path"],
            [id]: {
              ...state["workspace-local"]?.["edit-path"]?.[id],
              undoStack,
            },
          },
        },
      };
    },
    watch: (_: any, state: any): Observable<any> => {
      const id = ST.getPathId(state);
      const undoStack = DM.getIn(state, ["workspace-local", "edit-path", id, "undo-stack"]);

      if (U.getIndex(undoStack) > 0) {
        return of(CHANGES.savePathContent({ preserveMoveTo: true }));
      }

      return of(
        CHANGES.savePathContent({ preserveMoveTo: true }),
        COMMON.finishPath(),
        DWC.showToolbar
      );
    },
  };
}

export function redoPath() {
  return {
    type: "app.main.data.workspace.path.undo/redo-path",
    update: (_: any, state: any) => {
      const id = ST.getPathId(state);
      const undoStack = U.redo(
        DM.getIn(state, ["workspace-local", "edit-path", id, "undo-stack"])
      );
      const entry = U.peek(undoStack);

      let result = loadEntry(state, entry);
      result = D.assocInWhen(result, ["workspace-local", "edit-path", id, "undo-stack"], undoStack);

      return result;
    },
    watch: (): Observable<any> => {
      return of(CHANGES.savePathContent());
    },
  };
}

export function mergeHead() {
  return {
    type: "app.main.data.workspace.path.undo/merge-head",
    update: (_: any, state: any) => {
      const id = ST.getPathId(state);
      const stack = DM.getIn(state, ["workspace-local", "edit-path", id, "undo-stack"]);
      const head = U.peek(stack);
      const newStack = U.fixup(U.undo(stack), head);

      return D.assocInWhen(state, ["workspace-local", "edit-path", id, "undo-stack"], newStack);
    },
  };
}

export function addUndoEntry() {
  return {
    type: "app.main.data.workspace.path.undo/add-undo-entry",
    update: (_: any, state: any) => {
      const id = ST.getPathId(state);
      const entry = makeEntry(state);

      return D.updateInWhen(state, ["workspace-local", "edit-path", id, "undo-stack"], (stack: any) =>
        U.append(stack, entry)
      );
    },
  };
}

export function endPathUndo() {
  return {
    type: "app.main.data.workspace.path.undo/end-path-undo",
    update: (_: any, state: any) => {
      const id = ST.getPathId(state);
      return D.updateInWhen(state, ["workspace-local", "edit-path", id], (editPath: any) => {
        const { undoLock, undoStack, ...rest } = editPath;
        return rest;
      });
    },
  };
}

function stopUndo(event: any): boolean {
  return (
    event.type === "app.main.data.workspace.edition/clear-edition-mode" ||
    event.type === "app.main.data.workspace.pages/finalize-page"
  );
}

const pathContentRef = derived((state: any) => ST.getPath(state, "content"));

export function startPathUndo() {
  const lock = UUID.next();

  return {
    type: "app.main.data.workspace.path.undo/start-path-undo",
    update: (_: any, state: any) => {
      const id = ST.getPathId(state);
      const undoLock = DM.getIn(state, ["workspace-local", "edit-path", id, "undo-lock"]);

      if (undoLock) {
        return state;
      }

      return {
        ...state,
        ["workspace-local"]: {
          ...state["workspace-local"],
          ["edit-path"]: {
            ...state["workspace-local"]?.["edit-path"],
            [id]: {
              ...state["workspace-local"]?.["edit-path"]?.[id],
              undoLock: lock,
              undoStack: U.makeStack(),
            },
          },
        },
      };
    },
    watch: (_: any, state: any, stream: Observable<any>): Observable<any> => {
      const id = ST.getPathId(state);
      const undoLock = DM.getIn(state, ["workspace-local", "edit-path", id, "undo-lock"]);

      if (undoLock !== lock) {
        return of();
      }

      const stopUndoStream = stream.pipe(filter(stopUndo), take(1));

      return concat(
        fromAtom(pathContentRef, { emitCurrentValue: true }).pipe(
          takeUntil(stopUndoStream),
          filter((c) => c != null),
          map(() => addUndoEntry())
        ),
        of(endPathUndo())
      );
    },
  };
}