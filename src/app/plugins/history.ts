// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { checkPermission } from './register';

/**
 * History subcontext type
 */
export function historySubcontext?(p: unknown): p is HistorySubcontext {
  return Object(p)?.type === 'HistorySubcontext';
}

/**
 * Create history subcontext
 */
export function historySubcontext(pluginId: string): unknown {
  // TODO: Implement with proper object
  // return Object.create({ name: 'HistorySubcontext', $plugin: get(fn [] => pluginId) });
}

/**
 * Start undo transaction
 */
export function undoBlockBegin(): void {
  // TODO: Check permission
  // if (!checkPermission(pluginId, 'content:write')) {
  //   displayNotValid('Plugin doesn\'t have \'content:write\' permission');
  //   return;
  // }

  // TODO: Emit start undo transaction
  // emit('start-undo-transaction', id);
}

/**
 * Finish undo transaction
 */
export function undoBlockFinish(blockId: string): void {
  // TODO: Check permission
  // if (!checkPermission(pluginId, 'content:write')) {
  //   displayNotValid('Plugin doesn\'t have \'content:write\' permission');
  //   return;
  // }

  // TODO: Emit commit undo transaction
  // emit('commit-undo-transaction', blockId);
}
