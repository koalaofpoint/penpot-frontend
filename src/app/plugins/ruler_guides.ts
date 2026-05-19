// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { frameShape? } from '../../common/files/helpers';
// import { validSafeNumber? } from '../../common/schema';
// import { updateGuides, removeGuide } from '../../main/data/workspace/guides';
// import { emit } from '../../main/store';
// import { checkPermission } from './register';
// import { locateShape, locateObjects, proxyToRulerGuide, displayNotValid } from './utils';
// import { axisToOrientation } from './format';

/**
 * Ruler guide proxy interface
 */
export interface RulerGuideProxy {
  pluginId: string;
  fileId: string;
  pageId: string;
  id: string;

  board: unknown;
  orientation: 'horizontal' | 'vertical';
  position: number;

  setBoard(board: unknown): void;
  setPosition(position: number): void;
  remove(): void;
}

/**
 * Check if value is a RulerGuideProxy
 */
export function isRulerGuideProxy(p: unknown): p is RulerGuideProxy {
  return Object(p)?.[Symbol('type')] === 'RulerGuideProxy';
}

/**
 * Create a ruler guide proxy
 */
export function rulerGuideProxy(
  pluginId: string,
  fileId: string,
  pageId: string,
  id: string
): RulerGuideProxy {
  const self = {} as RulerGuideProxy;

  // Internal properties
  (self as unknown as Record<symbol, unknown>)[Symbol('$plugin')] = pluginId;
  (self as unknown as Record<symbol, unknown>)[Symbol('$file')] = fileId;
  (self as unknown as Record<symbol, unknown>)[Symbol('$page')] = pageId;
  (self as unknown as Record<symbol, unknown>)[Symbol('$id')] = id;
  (self as unknown as Record<symbol, unknown>)[Symbol('type')] = 'RulerGuideProxy';

  // Public properties
  self.pluginId = pluginId;
  self.fileId = fileId;
  self.pageId = pageId;
  self.id = id;

  // Board getter
  Object.defineProperty(self, 'board', {
    get(): unknown {
      const guide = proxyToRulerGuideInternal(self);
      const boardId = guide?.frameId;

      if (!boardId) return undefined;

      // TODO: Create shape proxy for board
      // return shapeProxy(pluginId, fileId, pageId, boardId);
      return undefined;
    },
    set(board: unknown): void {
      if (!isShapeProxy(board)) {
        // displayNotValid('board', 'The board is not a shape proxy');
        console.error('[PENPOT PLUGIN] The board is not a shape proxy');
        return;
      }

      // TODO: Check if shape is a frame
      // const shape = locateShape(fileId, pageId, getProxyId(board));
      // if (!frameShape?(shape)) {
      //   displayNotValid('board', 'The shape is not a board');
      //   return;
      // }

      if (!checkPermission(pluginId, 'content:write')) {
        // displayNotValid('board', "Plugin doesn't have 'content:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
        return;
      }

      const boardId = getProxyId(board);
      const guide = proxyToRulerGuideInternal(self);

      if (guide) {
        // TODO: Emit update guides event
        // emit(updateGuides({ ...guide, frameId: boardId }));
      }
    },
    enumerable: true
  });

  // Orientation getter
  Object.defineProperty(self, 'orientation', {
    get(): 'horizontal' | 'vertical' {
      const guide = proxyToRulerGuideInternal(self);
      if (!guide) return 'vertical'; // default
      return axisToOrientationInternal(guide.axis);
    },
    enumerable: true
  });

  // Position getter and setter
  Object.defineProperty(self, 'position', {
    get(): number {
      const guide = proxyToRulerGuideInternal(self);

      if (!guide) return 0;

      if (guide.frameId) {
        // If guide is attached to frame, position is relative to frame
        // TODO: Calculate relative position
        // const objects = locateObjects(fileId, pageId);
        // const boardPos = objects[guide.frameId]?.[guide.axis];
        // return guide.position - (boardPos || 0);
        return guide.position;
      }

      // No frame, position is absolute
      return guide.position;
    },
    set(value: number): void {
      if (!isValidSafeNumber(value)) {
        // displayNotValid('position', 'Not valid position');
        console.error('[PENPOT PLUGIN] Not valid position');
        return;
      }

      if (!checkPermission(pluginId, 'content:write')) {
        // displayNotValid('position', "Plugin doesn't have 'content:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
        return;
      }

      const guide = proxyToRulerGuideInternal(self);
      if (!guide) return;

      let newPosition: number;

      if (guide.frameId) {
        // Calculate absolute position for frame-attached guide
        // TODO: Get frame position
        // const objects = locateObjects(fileId, pageId);
        // const boardPos = objects[guide.frameId]?.[guide.axis];
        // newPosition = (boardPos || 0) + value;
        newPosition = value;
      } else {
        // Absolute position
        newPosition = value;
      }

      // TODO: Emit update guides event
      // emit(updateGuides({ ...guide, position: newPosition }));
    },
    enumerable: true
  });

  // Remove method
  self.remove = function(): void {
    const guide = proxyToRulerGuideInternal(self);
    if (guide) {
      // TODO: Emit remove guide event
      // emit(removeGuide(guide));
    }
  };

  return self;
}

/**
 * Check if value is a shape proxy
 */
function isShapeProxy(p: unknown): p is { id?: string } {
  return typeof p === 'object' && p !== null && 'id' in p;
}

/**
 * Get proxy ID from shape proxy
 */
function getProxyId(proxy: unknown): string | undefined {
  if (typeof proxy !== 'object' || proxy === null) return undefined;
  return (proxy as Record<string, unknown>).id as string | undefined;
}

/**
 * Check if value is a valid safe number
 */
function isValidSafeNumber(value: unknown): value is number {
  return typeof value === 'number' && !isNaN(value) && isFinite(value);
}

/**
 * Convert axis to orientation string
 */
function axisToOrientationInternal(axis: 'x' | 'y' | undefined): 'horizontal' | 'vertical' {
  if (axis === 'y') return 'horizontal';
  return 'vertical';
}

/**
 * Get ruler guide data from proxy
 */
function proxyToRulerGuideInternal(proxy: RulerGuideProxy): {
  frameId?: string;
  axis: 'x' | 'y';
  position: number;
} | null {
  // TODO: Get from state
  // return locateRulerGuide(proxy.fileId, proxy.pageId, proxy.id);
  return {
    axis: 'y',
    position: 0
  };
}

/**
 * Update guide event type
 */
export interface UpdateGuidesEvent {
  type: 'update-guides';
  guide: {
    frameId?: string;
    axis: 'x' | 'y';
    position: number;
  };
}

/**
 * Remove guide event type
 */
export interface RemoveGuideEvent {
  type: 'remove-guide';
  guide: {
    frameId?: string;
    axis: 'x' | 'y';
    position: number;
  };
}
