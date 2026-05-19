// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { validSafeNumber } from '../../common/schema';
// import { updateViewportPosition } from '../../main/data/workspace/viewport';
// import { setZoom, resetZoom, zoomToFitAll, fitToShapes } from '../../main/data/workspace/zoom';
// import { emit } from '../../main/store';
// import { formatBounds } from './format';
// import { isShapeProxy } from './shape';
// import { displayNotValid } from './utils';

/**
 * Point interface
 */
export interface Point {
  x: number;
  y: number;
}

/**
 * Bounds interface
 */
export interface Bounds {
  x: number;
  y: number;
  width: number;
  height: number;
}

/**
 * Viewport proxy interface
 */
export interface ViewportProxy {
  pluginId: string;

  center: Point;
  zoom: number;
  bounds: Bounds;

  zoomReset(): void;
  zoomToFitAll(): void;
  zoomIntoView(shapes: unknown[]): void;
}

/**
 * Check if value is a ViewportProxy
 */
export function isViewportProxy(p: unknown): p is ViewportProxy {
  return Object(p)?.[Symbol('type')] === 'ViewportProxy';
}

/**
 * Create a viewport proxy
 */
export function viewportProxy(pluginId: string): ViewportProxy {
  const self = {} as ViewportProxy;

  // Internal properties
  (self as unknown as Record<symbol, unknown>)[Symbol('$plugin')] = pluginId;
  (self as unknown as Record<symbol, unknown>)[Symbol('type')] = 'ViewportProxy';

  self.pluginId = pluginId;

  // Center getter
  Object.defineProperty(self, 'center', {
    get(): Point {
      // TODO: const vp = getState().workspaceLocal.vbox;
      // TODO: return { x: vp.x + vp.width / 2, y: vp.y + vp.height / 2 };
      return { x: 0, y: 0 };
    },
    set(value: Point): void {
      const newX = value?.x;
      const newY = value?.y;

      if (!validSafeNumber(newX)) {
        displayNotValid('center-x', newX);
        return;
      }

      if (!validSafeNumber(newY)) {
        displayNotValid('center-y', newY);
        return;
      }

      // TODO: const vb = getState().workspaceLocal.vbox;
      // TODO: const oldX = vb.x + vb.width / 2;
      // TODO: const oldY = vb.y + vb.height / 2;
      // TODO: const deltaX = newX - oldX;
      // TODO: const deltaY = newY - oldY;
      // TODO: emit(updateViewportPosition({
      // TODO:   x: x => x + deltaX,
      // TODO:   y: y => y + deltaY
      // TODO: }));
    },
    enumerable: true
  });

  // Zoom getter
  Object.defineProperty(self, 'zoom', {
    get(): number {
      // TODO: return getState().workspaceLocal.zoom;
      return 1;
    },
    set(value: number): void {
      if (!validSafeNumber(value)) {
        displayNotValid('zoom', value);
        return;
      }

      // TODO: const currentZoom = getState().workspaceLocal.zoom;
      // TODO: emit(setZoom(value / currentZoom));
    },
    enumerable: true
  });

  // Bounds getter
  Object.defineProperty(self, 'bounds', {
    get(): Bounds {
      // TODO: const vbox = getState().workspaceLocal.vbox;
      // TODO: return formatBounds(vbox);
      return { x: 0, y: 0, width: 0, height: 0 };
    },
    enumerable: true
  });

  // Reset zoom method
  self.zoomReset = function(): void {
    // TODO: emit(resetZoom());
  };

  // Zoom to fit all method
  self.zoomToFitAll = function(): void {
    // TODO: emit(zoomToFitAll());
  };

  // Zoom into view method
  self.zoomIntoView = function(shapes: unknown[]): void {
    if (!shapes.every(isShapeProxyInternal)) {
      displayNotValid('zoomIntoView', 'Argument should be valid shapes');
      return;
    }

    // TODO: const ids = shapes.map(shape => (shape as Record<string, unknown>)['$id'] as string);
    // TODO: emit(fitToShapes(ids));
  };

  return self;
}

// Helper functions

function validSafeNumber(value: unknown): value is number {
  // TODO: return validSafeNumber(value);
  return typeof value === 'number' && !isNaN(value) && isFinite(value);
}

function isShapeProxyInternal(p: unknown): boolean {
  // TODO: return isShapeProxy(p);
  return true;
}

function displayNotValid(code: string, message: string): void {
  console.error(`[PENPOT PLUGIN] Value not valid: ${message}. Code: ${code}`);
}
