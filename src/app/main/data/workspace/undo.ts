// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from "../../../common/data";
import { assert, getIn } from "../../../common/data/macros";
import * as cpc from "../../../common/files/changes";
import * as ct from "../../../common/time";
import * as ctl from "../../../common/types/shape/layout";
import * as dch from "../changes";
import * as dcm from "../common";
import * as dsh from "../helpers";
import { Observable, of, filter, takeUntil, delay, tap, map, from, empty } from "rxjs";
import * as ptk from "../../../potok/v2/ptk";

// Change this to :info :debug or :trace to debug this module

const DISCARD_TRANSACTION_TIME_MILLIS = 20 * 1000;

export interface UndoEntry {
  undoChanges: cpc.Change[];
  redoChanges: cpc.Change[];
  undoGroup: string;
  tags: Set<string>;
}

export const MAX_UNDO_SIZE = 50;

function conjUndoEntry(undo: UndoEntry[], data: UndoEntry): UndoEntry[] {
  const newUndo = [...undo, data];
  if (newUndo.length > MAX_UNDO_SIZE) {
    return newUndo.slice(newUndo.length - MAX_UNDO_SIZE);
  }
  return newUndo;
}

export function materializeUndo(
  _changes: cpc.Change[],
  index: number
): ptk.UpdateEvent {
  return {
    type: "app.main.data.workspace/materialize-undo",
    update(state: any): any {
      return {
        ...state,
        workspaceUndo: {
          ...state.workspaceUndo,
          index,
        },
      };
    },
  };
}

function addUndoEntry(state: any, entry: UndoEntry): any {
  if (!entry || d.isEmpty(entry.undoChanges) || d.isEmpty(entry.redoChanges)) {
    return state;
  }

  const index = state.workspaceUndo?.index ?? -1;
  const items = (state.workspaceUndo?.items ?? []).slice(0, index + 1);
  const newItems = conjUndoEntry(items, entry);

  return {
    ...state,
    workspaceUndo: {
      ...state.workspaceUndo,
      items: newItems,
      index: Math.min(index + 1, MAX_UNDO_SIZE - 1),
    },
  };
}

function stackUndoEntry(
  state: any,
  entry: { undoChanges: any[]; redoChanges: any[] }
): any {
  const index = state.workspaceUndo?.index ?? -1;

  if (index >= 0) {
    const items = [...state.workspaceUndo.items];
    const item = { ...items[index] };
    item.undoChanges = [...entry.undoChanges, ...item.undoChanges];
    item.redoChanges = [...item.redoChanges, ...entry.redoChanges];
    items[index] = item;

    return {
      ...state,
      workspaceUndo: {
        ...state.workspaceUndo,
        items,
      },
    };
  }

  return addUndoEntry(state, entry);
}

function accumulateUndoEntry(
  state: any,
  entry: { undoChanges: any[]; redoChanges: any[]; undoGroup?: string; tags?: Set<string> }
): any {
  let newState = state;

  const currentUndoChanges = state.workspaceUndo?.transaction?.undoChanges || [];
  const currentRedoChanges = state.workspaceUndo?.transaction?.redoChanges || [];

  newState = {
    ...newState,
    workspaceUndo: {
      ...newState.workspaceUndo,
      transaction: {
        ...newState.workspaceUndo?.transaction,
        undoChanges: [...entry.undoChanges, ...currentUndoChanges],
        redoChanges: [...currentRedoChanges, ...entry.redoChanges],
      },
    },
  };

  if (!newState.workspaceUndo?.transaction?.undoGroup && entry.undoGroup) {
    newState = {
      ...newState,
      workspaceUndo: {
        ...newState.workspaceUndo,
        transaction: {
          ...newState.workspaceUndo.transaction,
          undoGroup: entry.undoGroup,
        },
      },
    };
  }

  if (entry.tags) {
    newState = {
      ...newState,
      workspaceUndo: {
        ...newState.workspaceUndo,
        transaction: {
          ...newState.workspaceUndo.transaction,
          tags: entry.tags,
        },
      },
    };
  }

  return newState;
}

export function appendUndo(entry: UndoEntry, stack: boolean): ptk.UpdateEvent {
  assert(entry, "expected valid undo entry");
  assert(typeof stack === "boolean", "expected boolean for stack?");

  return {
    type: "app.main.data.workspace/append-undo",
    update(state: any): any {
      const transaction = state.workspaceUndo?.transaction;

      if (transaction && (!stack || !d.isEmpty(transaction.undoChanges) || !d.isEmpty(transaction.redoChanges))) {
        return accumulateUndoEntry(state, entry);
      }

      if (stack) {
        return stackUndoEntry(state, entry);
      }

      return addUndoEntry(state, entry);
    },
  };
}

const EMPTY_TX = {
  undoChanges: [],
  redoChanges: [],
};

export function startUndoTransaction(
  id: symbol,
  timeout: number = DISCARD_TRANSACTION_TIME_MILLIS
): ptk.Event {
  return {
    type: "app.main.data.workspace/start-undo-transaction",
    update(state: any): any {
      return {
        ...state,
        workspaceUndo: {
          ...state.workspaceUndo,
          transaction: state.workspaceUndo?.transaction || EMPTY_TX,
          transactionsPending: {
            ...(state.workspaceUndo?.transactionsPending || {}),
            [id]: ct.now(),
          },
        },
      };
    },
    watch(_: any, __: any, stream: any): Observable<any> {
      if (!timeout || timeout <= 0) {
        return empty();
      }

      const stopper = stream.pipe(
        filter((e: any) => e.type === "app.main.data.workspace/start-undo-transaction")
      );

      return of(checkOpenTransactions(timeout)).pipe(
        delay(timeout),
        takeUntil(stopper)
      );
    },
  };
}

export function discardUndoTransaction(): ptk.UpdateEvent {
  return {
    type: "app.main.data.workspace/discard-undo-transaction",
    update(state: any): any {
      const { transaction, transactionsPending, ...restUndo } = state.workspaceUndo || {};
      return {
        ...state,
        workspaceUndo: restUndo,
      };
    },
  };
}

function addTransactionUndoEntry(state: any): any {
  const undoState = state.workspaceUndo;
  const currentTx = undoState?.transaction;
  const pendingTx = undoState?.transactionsPending;

  if (currentTx && (!pendingTx || Object.keys(pendingTx).length === 0)) {
    const newState = addUndoEntry(state, currentTx);
    const { transaction, ...rest } = newState.workspaceUndo || {};
    return {
      ...newState,
      workspaceUndo: rest,
    };
  }

  return state;
}

export function commitUndoTransaction(id: symbol): ptk.UpdateEvent {
  return {
    type: "app.main.data.workspace/commit-undo-transaction",
    update(state: any): any {
      const { [id]: _, ...restPending } = state.workspaceUndo?.transactionsPending || {};
      return {
        ...state,
        workspaceUndo: {
          ...state.workspaceUndo,
          transactionsPending: restPending,
        },
      };
    },
  };
}

export function reinitializeUndo(): ptk.UpdateEvent {
  return {
    type: "app.main.data.workspace/reset-undo",
    update(state: any): any {
      return {
        ...state,
        workspaceUndo: {},
      };
    },
  };
}

export function checkOpenTransactions(timeout: number): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace/check-open-transactions",
    watch(_: any, state: any, _stream: any): Observable<any> {
      const pending = state.workspaceUndo?.transactionsPending || {};
      const pendingWithDiff = Object.entries(pending).map(([key, timestamp]) => [
        key,
        ct.diffMs(timestamp as Date, ct.now()),
      ]);

      const overdue = pendingWithDiff.filter(([_, diff]) => diff >= timeout);

      return from(overdue).pipe(
        tap(([_, diff]) => console.warn(`FORCE COMMIT TRANSACTION AFTER ${diff}MS`)),
        map(([id]) => commitUndoTransaction(id as symbol))
      );
    },
  };
}

export function undoToIndex(destIndex: number): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace/undo-to-index",
    watch(it: any, state: any, _stream: any): Observable<any> {
      const objects = dsh.lookupPageObjects(state);
      const edition = state.workspaceLocal?.edition;
      const drawing = state.workspaceDrawing;

      if ((edition || drawing?.object) && !ctl.isGridLayout(objects, edition)) {
        return empty();
      }

      const undo = state.workspaceUndo;
      const items = undo?.items || [];
      const index = undo?.index ?? items.length - 1;

      if (!items || items.length === 0 || destIndex < -1 || destIndex > items.length - 1) {
        return empty();
      }

      let changes: any[] = [];

      if (destIndex < index) {
        const sliceItems = items.slice(destIndex + 1, index + 1).reverse();
        changes = sliceItems.flatMap((item: any) => item.undoChanges);
      } else if (destIndex > index) {
        const sliceItems = items.slice(index + 1, destIndex + 1);
        changes = sliceItems.flatMap((item: any) => item.redoChanges);
      }

      if (changes.length === 0) {
        return empty();
      }

      return of(
        materializeUndo(changes, destIndex),
        dch.commitChanges({
          redoChanges: changes,
          undoChanges: [],
          origin: it,
          saveUndo: false,
        })
      );
    },
  };
}

export function assureValidCurrentPage(): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace/assure-valid-current-page",
    watch(_: any, state: any, _stream: any): Observable<any> {
      const pageId = state.currentPageId;
      const fileData = dsh.lookupFileData(state);
      const pages = fileData?.pages || new Map();

      if (pages.has(pageId)) {
        return empty();
      }

      const firstPage = Array.from(pages.keys())[0];
      return of(dcm.goToWorkspace({ teamId: firstPage }));
    },
  };
}

export const undo: ptk.WatchEvent = {
  type: "app.main.data.workspace/undo",
  watch(it: any, state: any, _stream: any): Observable<any> {
    const objects = dsh.lookupPageObjects(state);
    const edition = state.workspaceLocal?.edition;
    const drawing = state.workspaceDrawing;

    if (
      (edition !== null && edition !== undefined) ||
      (drawing?.object !== null && drawing?.object !== undefined)
    ) {
      if (!ctl.isGridLayout(objects, edition)) {
        return empty();
      }
    }

    const undo = state.workspaceUndo;
    const items = undo?.items || [];
    const index = undo?.index ?? items.length - 1;

    if (items.length === 0 || index === -1) {
      return empty();
    }

    const item = items[index];
    const changes = item?.undoChanges;
    const undoGroup = item?.undoGroup;

    const findFirstGroupIdx = (idx: number): number => {
      if (items[idx]?.undoGroup === undoGroup) {
        return findFirstGroupIdx(idx - 1);
      }
      return idx + 1;
    };

    const undoGroupIndex = undoGroup ? findFirstGroupIdx(index) : null;

    if (undoGroup && undoGroupIndex !== null) {
      return of(undoToIndex(undoGroupIndex - 1));
    }

    return of(
      materializeUndo(changes, index - 1),
      dch.commitChanges({
        redoChanges: changes,
        undoChanges: [],
        saveUndo: false,
        origin: it,
      }),
      assureValidCurrentPage()
    );
  },
};

export const redo: ptk.WatchEvent = {
  type: "app.main.data.workspace/redo",
  watch(it: any, state: any, _stream: any): Observable<any> {
    const objects = dsh.lookupPageObjects(state);
    const edition = state.workspaceLocal?.edition;
    const drawing = state.workspaceDrawing;

    if (
      (edition !== null && edition !== undefined) ||
      (drawing?.object !== null && drawing?.object !== undefined)
    ) {
      if (!ctl.isGridLayout(objects, edition)) {
        return empty();
      }
    }

    const undo = state.workspaceUndo;
    const items = undo?.items || [];
    const index = undo?.index ?? items.length - 1;

    if (items.length === 0 || index === items.length - 1) {
      return empty();
    }

    const item = items[index + 1];
    const changes = item?.redoChanges;
    const undoGroup = item?.undoGroup;

    const findLastGroupIdx = (idx: number): number => {
      const currentItem = items[idx];
      if (currentItem?.undoGroup === undoGroup) {
        return findLastGroupIdx(idx + 1);
      }
      return idx - 1;
    };

    const redoGroupIndex = undoGroup ? findLastGroupIdx(index + 1) : null;

    if (undoGroup && redoGroupIndex !== null) {
      return of(undoToIndex(redoGroupIndex));
    }

    return of(
      materializeUndo(changes, index + 1),
      dch.commitChanges({
        redoChanges: changes,
        undoChanges: [],
        origin: it,
        saveUndo: false,
      })
    );
  },
};
