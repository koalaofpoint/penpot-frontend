// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import {
//   getOwner,
//   updateComment,
//   retrieveCommentThreads
//   deleteComment,
//   deleteCommentThreadOnWorkspace,
//   updateCommentThreadPosition,
//   updateCommentThread,
//   getComments
//   createComment
// } from '../../main/data/comments';
// import { lookupProfile, lookupPage } from '../../main/data/helpers';
// import {
//   updateCommentThreadPosition as updateCommentThreadPositionEvent,
//   updateCommentThread as updateCommentThreadEvent
// } from '../../main/data/workspace/comments';
// import { getTeamSharedFiles } from '../../main/repo';
// import { emit } from '../../main/store';
// import { checkPermission, displayNotValid, handleError } from './utils';
// import { formatPoint } from './format';
// import { parsePoint } from './parser';
// import { isShapeProxy, shapeProxy } from './shape';
// import { isTextRangeProxy } from './text';
// import { userProxy } from './user';
// import { validSafeNumber } from '../../common/schema';
// import { point as PointType } from '../../common/geom/point';

/**
 * Comment proxy interface
 */
export interface CommentProxy {
  pluginId: string;
  fileId: string;
  pageId: string;
  threadId: string;

  user: unknown;
  owner: unknown;
  date: Date;
  content: string;

  setContent(content: string): void;
  remove(): Promise<void>;
}

/**
 * Comment thread proxy interface
 */
export interface CommentThreadProxy {
  pluginId: string;
  fileId: string;
  pageId: string;
  threadId: string;

  seqNumber: number;
  board: unknown;
  owner: unknown;
  position: Point;

  setPosition(position: Point): void;
  setResolved(isResolved: boolean): void;

  findComments(): Promise<CommentProxy[]>;
  reply(content: string): Promise<CommentProxy>;
  remove(): Promise<void>;
}

/**
 * Check if value is a CommentProxy
 */
export function isCommentProxy(p: unknown): p is CommentProxy {
  return Object(p)?.[Symbol('type')] === 'CommentProxy';
}

/**
 * Check if value is a CommentThreadProxy
 */
export function isCommentThreadProxy(p: unknown): p is CommentThreadProxy {
  return Object(p)?.[Symbol('type')] === 'CommentThreadProxy';
}

/**
 * Create a comment proxy
 */
export function commentProxy(
  pluginId: string,
  fileId: string,
  pageId: string,
  threadId: string,
  data: any
): CommentProxy {
  const self = {} as CommentProxy;
  const internalData = { ...data };

  // Internal properties
  (self as unknown as Record<symbol, unknown>)[Symbol('$plugin')] = pluginId;
  (self as unknown as Record<symbol, unknown>)[Symbol('$file')] = fileId;
  (self as unknown as Record<symbol, unknown>)[Symbol('$page')] = pageId;
  (self as unknown as Record<symbol, unknown>)[Symbol('$thread')] = threadId;
  (self as unknown as Record<symbol, unknown>)[Symbol('$id')] = data.id;
  (self as unknown as Record<symbol, unknown>)[Symbol('type')] = 'CommentProxy';

  // Public properties
  self.pluginId = pluginId;
  self.fileId = fileId;
  self.pageId = pageId;
  self.threadId = threadId;

  // User getter
  Object.defineProperty(self, 'user', {
    get(): unknown {
      const ownerId = internalData.owner;
      return userProxy(pluginId, { id: ownerId });
    },
    enumerable: true
  });

  // Owner getter
  Object.defineProperty(self, 'owner', {
    get(): unknown {
      const ownerId = internalData.owner;
      return userProxy(pluginId, { id: ownerId });
    },
    enumerable: true
  });

  // Date getter
  Object.defineProperty(self, 'date', {
    get(): Date {
      return internalData.createdAt ? new Date(internalData.createdAt) : new Date();
    },
    enumerable: true
  });

  // Content getter
  Object.defineProperty(self, 'content', {
    get(): string {
      return internalData.content ?? '';
    },
    enumerable: true
  });

  // Content setter
  Object.defineProperty(self, 'content', {
    set(content: string): void {
      const profile = getProfileInternal();
      const ownerId = internalData.owner;

      if (typeof content !== 'string' || content === '') {
        displayNotValid('content', 'Not valid');
        console.error('[PENPOT PLUGIN] Content must be a non-empty string');
        return;
      }

      if (profile?.id !== ownerId) {
        displayNotValid('content', 'Cannot change content from another user\'s comments');
        console.error('[PENPOT PLUGIN] Cannot change content from another user\'s comments');
        return;
      }

      if (!checkPermission(pluginId, 'comment:write')) {
        displayNotValid('content', "Plugin doesn't have 'comment:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'comment:write' permission");
        return;
      }

      // TODO: Emit update comment event
      // emit(updateComment({ id: internalData.id, content }));
    },
    enumerable: true
  });

  // Remove method
  self.remove = function(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!checkPermission(pluginId, 'comment:write')) {
        displayNotValid('remove', "Plugin doesn't have 'comment:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'comment:write' permission");
        reject(new Error("Plugin doesn't have 'comment:write' permission"));
        return;
      }

      const profile = getProfileInternal();
      const ownerId = internalData.owner;

      if (profile?.id !== ownerId) {
        displayNotValid('remove', 'Cannot remove comment from another user\'s comments');
        console.error('[PENPOT PLUGIN] Cannot remove comment from another user\'s comments');
        reject(new Error('Cannot remove comment from another user\'s comments'));
        return;
      }

      // TODO: Emit delete comment thread event
      // emit(deleteComment({ id: internalData.id }))
      //   .subscribe(() => {
      //     emit(retrieveCommentThreads(fileId));
      //     resolve();
      //   });

      resolve();
    });
  };

  return self;
}

/**
 * Create a comment thread proxy
 */
export function commentThreadProxy(
  pluginId: string,
  fileId: string,
  pageId: string,
  data: any
): CommentThreadProxy {
  const self = {} as CommentThreadProxy;
  const internalData = { ...data };

  // Internal properties
  (self as unknown as Record<symbol, unknown>)[Symbol('$plugin')] = pluginId;
  (self as unknown as Record<symbol, unknown>)[Symbol('$file')] = fileId;
  (self as unknown as Record<symbol, unknown>)[Symbol('$page')] = pageId;
  (self as unknown as Record<symbol, unknown>)[Symbol('$thread')] = internalData.id;
  (self as unknown as Record<symbol, unknown>)[Symbol('$id')] = internalData.id;
  (self as unknown as Record<symbol, unknown>)[Symbol('type')] = 'CommentThreadProxy';

  // Public properties
  self.pluginId = pluginId;
  self.fileId = fileId;
  self.pageId = pageId;
  self.threadId = internalData.id;

  // Sequence number getter
  Object.defineProperty(self, 'seqNumber', {
    get(): number {
      return internalData.seqn ?? 0;
    },
    enumerable: true
  });

  // Board getter
  Object.defineProperty(self, 'board', {
    get(): unknown {
      const frameId = internalData.frame;
      if (!frameId) return undefined;

      // TODO: return shapeProxy(pluginId, fileId, pageId, frameId);
      return undefined;
    },
    enumerable: true
  });

  // Owner getter
  Object.defineProperty(self, 'owner', {
    get(): unknown {
      const ownerId = internalData.owner;
      return userProxy(pluginId, { id: ownerId });
    },
    enumerable: true
  });

  // Position getter
  Object.defineProperty(self, 'position', {
    get(): Point {
      return internalData.position ?? { x: 0, y: 0 };
    },
    enumerable: true
  });

  // Position setter
  Object.defineProperty(self, 'position', {
    set(position: Point): void {
      const parsed = parsePoint(position);

      if (!validSafeNumber(parsed.x) || !validSafeNumber(parsed.y)) {
        displayNotValid('position', 'Not valid point');
        console.error('[PENPOT PLUGIN] Position must contain valid numbers');
        return;
      }

      if (!checkPermission(pluginId, 'comment:write')) {
        displayNotValid('position', "Plugin doesn't have 'comment:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'comment:write' permission");
        return;
      }

      // TODO: Emit update comment thread position event
      // emit(updateCommentThreadPositionEvent({ id: internalData.id, x: parsed.x, y: parsed.y }));
    },
    enumerable: true
  });

  // Resolved getter
  Object.defineProperty(self, 'resolved', {
    get(): boolean {
      return internalData.isResolved ?? false;
    },
    enumerable: true
  });

  // Resolved setter
  Object.defineProperty(self, 'resolved', {
    set(isResolved: boolean): void {
      if (typeof isResolved !== 'boolean') {
        displayNotValid('resolved', 'Not a boolean type');
        console.error('[PENPOT PLUGIN] Resolved must be a boolean');
        return;
      }

      if (!checkPermission(pluginId, 'comment:write')) {
        displayNotValid('resolved', "Plugin doesn't have 'comment:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'comment:write' permission");
        return;
      }

      // TODO: Emit update comment thread event
      // emit(updateCommentThreadEvent({ id: internalData.id, isResolved }));
    },
    enumerable: true
  });

  // Find comments method
  self.findComments = function(): Promise<CommentProxy[]> {
    return new Promise((resolve, reject) => {
      if (!checkPermission(pluginId, 'comment:read')) {
        displayNotValid('findComments', "Plugin doesn't have 'comment:read' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'comment:read' permission");
        reject(new Error("Plugin doesn't have 'comment:read' permission"));
        return;
      }

      // TODO: Emit get comments event
      // emit(getComments({ threadId: internalData.id }))
      //   .subscribe(comments => {
      //     const proxies = comments.map(c => commentProxy(pluginId, fileId, pageId, internalData.id, c));
      //     resolve(proxies);
      //   });

      resolve([]);
    });
  };

  // Reply method
  self.reply = function(content: string): Promise<CommentProxy> {
    return new Promise((resolve, reject) => {
      if (!checkPermission(pluginId, 'comment:write')) {
        displayNotValid('reply', "Plugin doesn't have 'comment:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'comment:write' permission");
        reject(new Error("Plugin doesn't have 'comment:write' permission"));
        return;
      }

      if (typeof content !== 'string' || content === '') {
        displayNotValid('reply', 'Not valid');
        console.error('[PENPOT PLUGIN] Content must be a non-empty string');
        reject(new Error('Content must be a non-empty string'));
        return;
      }

      // TODO: Emit create comment event
      // emit(createComment({ threadId: internalData.id, content }))
      //   .subscribe(comment => {
      //     const proxy = commentProxy(pluginId, fileId, pageId, internalData.id, comment);
      //     resolve(proxy);
      //   });

      resolve({} as CommentProxy);
    });
  };

  // Remove method
  self.remove = function(): Promise<void> {
    return new Promise((resolve, reject) => {
      const profile = getProfileInternal();
      const ownerId = internalData.owner;

      if (!checkPermission(pluginId, 'comment:write')) {
        displayNotValid('remove', "Plugin doesn't have 'comment:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'comment:write' permission");
        reject(new Error("Plugin doesn't have 'comment:write' permission"));
        return;
      }

      if (profile?.id !== ownerId) {
        displayNotValid('remove', 'Cannot remove comment thread from another user');
        console.error('[PENPOT PLUGIN] Cannot remove comment thread from another user');
        reject(new Error('Cannot remove comment thread from another user'));
        return;
      }

      // TODO: Emit delete comment thread on workspace event
      // emit(deleteCommentThreadOnWorkspace({ id: internalData.id }))
      //   .subscribe(() => {
      //     emit(retrieveCommentThreads(fileId));
      //     resolve();
      //   });

      resolve();
    });
  };

  return self;
}

// Helper functions

function getProfileInternal(): { id?: string } | undefined {
  // TODO: return lookupProfile(getState(), ownerId);
  return undefined;
}

function checkPermission(pluginId: string, permission: string): boolean {
  // TODO: return checkPermission(pluginId, permission);
  return true;
}

function displayNotValid(code: string, message: string): void {
  console.error(`[PENPOT PLUGIN] Value not valid: ${message}. Code: ${code}`);
}

function validSafeNumber(value: unknown): value is number {
  return typeof value === 'number' && !isNaN(value) && isFinite(value);
}

// Point interface
interface Point {
  x: number;
  y: number;
}
