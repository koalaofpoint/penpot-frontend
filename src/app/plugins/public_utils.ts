// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { rect->center } from '../../common/geom/rect';
// import { shapes->rect } from '../../common/geom/shapes';
// import { formatPoint } from './format';
// import { isShapeProxy, proxy->shape } from './shape';
// import { displayNotValid } from './utils';

/**
 * Get the center point of multiple shapes
 *
 * @param shapes - Array of shape proxies
 * @returns Center point as { x, y }
 */
export function centerShapes(shapes: unknown[]): { x: number; y: number } | undefined {
  // Check if all items are shape proxies
  if (!shapes.every(isShapeProxyInternal)) {
    displayNotValid('centerShapes', shapes);
    return undefined;
  }

  // Convert proxies to shapes
  const shapeData = shapes.map(proxyToShapeInternal);

  // Calculate bounding rect and center
  // TODO: const bounds = shapes->rect(shapeData);
  // TODO: const center = rect->center(bounds);
  // TODO: return formatPoint(center);
  return { x: 0, y: 0 };
}

// Helper functions

function isShapeProxyInternal(p: unknown): boolean {
  // TODO: return isShapeProxy(p);
  return true;
}

function proxyToShapeInternal(proxy: unknown): unknown {
  // TODO: return proxy->shape(proxy);
  return proxy;
}

function displayNotValid(code: string, message: string): void {
  console.error(`[PENPOT PLUGIN] Value not valid: ${message}. Code: ${code}`);
}
