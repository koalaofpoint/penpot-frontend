// This Source Code Form is subject to terms of Mozilla Public
// License, v. 2.0. If a copy of MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { css } from '../util/css';
// import * as cur from './ui/cursors';

// Angle per rotation
const ANGLE_STEP = 10;

/**
 * Returns the class name of a static cursor
 */
export function getStatic(name: string): string {
  return `cursor-${name}`;
}

/**
 * Returns the class name of a dynamic cursor (with rotation)
 */
export function getDynamic(name: string, rotation: number): string {
  const step = Math.floor(rotation / ANGLE_STEP) * ANGLE_STEP;
  return `cursor-${name}-${step % 360}`;
}

/**
 * Initializes a static cursor style
 */
export function initStaticCursorStyle(style: any, name: string, value: string): void {
  // TODO: Implement using css.add or similar
  // style.add(`.cursor-${name}`, { cursor: `${value} !important` });
}

/**
 * Initializes a dynamic cursor style
 */
export function initDynamicCursorStyle(style: any, name: string, fn: (rotation: number) => string): void {
  const rotations = Array.from({ length: 360 / ANGLE_STEP }, (_, i) => i * ANGLE_STEP);
  rotations.forEach((rotation) => {
    // TODO: Implement using css.add or similar
    // style.add(`.cursor-${name}-${rotation}`, { cursor: `${fn(rotation)} !important` });
  });
}

/**
 * Initializes all cursor styles
 */
export function initStyles(): void {
  // TODO: Implement using css.createStyle
  // const style = css.createStyle('css-cursors');

  // Static cursors
  // initStaticCursorStyle(style, 'comments', cur.comments);
  // initStaticCursorStyle(style, 'create-artboard', cur.createArtboard);
  // initStaticCursorStyle(style, 'create-ellipse', cur.createEllipse);
  // initStaticCursorStyle(style, 'create-polygon', cur.createPolygon);
  // initStaticCursorStyle(style, 'create-rectangle', cur.createRectangle);
  // initStaticCursorStyle(style, 'create-shape', cur.createShape);
  // initStaticCursorStyle(style, 'duplicate', cur.duplicate);
  // initStaticCursorStyle(style, 'hand', cur.hand);
  // initStaticCursorStyle(style, 'move-pointer', cur.movePointer);
  // initStaticCursorStyle(style, 'pen', cur.pen);
  // initStaticCursorStyle(style, 'pen-node', cur.penNode);
  // initStaticCursorStyle(style, 'pencil', cur.pencil);
  // initStaticCursorStyle(style, 'picker', cur.picker);
  // initStaticCursorStyle(style, 'pointer-inner', cur.pointerInner);
  // initStaticCursorStyle(style, 'pointer-move', cur.pointerMove);
  // initStaticCursorStyle(style, 'pointer-node', cur.pointerNode);
  // initStaticCursorStyle(style, 'resize-alt', cur.resizeAlt);
  // initStaticCursorStyle(style, 'zoom', cur.zoom);
  // initStaticCursorStyle(style, 'zoom-in', cur.zoomIn);
  // initStaticCursorStyle(style, 'zoom-out', cur.zoomOut);

  // Dynamic cursors
  // initDynamicCursorStyle(style, 'resize-ew', cur.resizeEw);
  // initDynamicCursorStyle(style, 'resize-nesw', cur.resizeNesw);
  // initDynamicCursorStyle(style, 'resize-ns', cur.resizeNs);
  // initDynamicCursorStyle(style, 'resize-nwse', cur.resizeNwse);
  // initDynamicCursorStyle(style, 'rotate', cur.rotate);
  // initDynamicCursorStyle(style, 'text', cur.text);
  // initDynamicCursorStyle(style, 'scale-ew', cur.scaleEw);
  // initDynamicCursorStyle(style, 'scale-nesw', cur.scaleNesw);
  // initDynamicCursorStyle(style, 'scale-ns', cur.scaleNs);
  // initDynamicCursorStyle(style, 'scale-nwse', cur.scaleNwse);
  // initDynamicCursorStyle(style, 'resize-ew-2', cur.resizeEw2);
  // initDynamicCursorStyle(style, 'resize-ns-2', cur.resizeNs2);
}
