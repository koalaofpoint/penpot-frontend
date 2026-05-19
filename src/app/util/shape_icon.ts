// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { isInstanceHead, isMainInstance, isVariant } from '../../common/types/component';
// import { getProp } from '../../common/data/macros';
// import { hasImages } from '../../common/types/shape';
// import { flexLayout, col, row, gridLayout } from '../../common/types/shape/layout';

/**
 * Shape type
 */
export type ShapeType = 'frame' | 'image' | 'line' | 'circle' | 'path' | 'rect' | 'text' | 'group' | 'bool' | 'svg-raw' | 'component' | 'shape' | 'mask';

/**
 * Boolean operation type
 */
export type BoolType = 'difference' | 'exclude' | 'intersection' | 'union';

/**
 * Layout type
 */
export type LayoutType = 'flex-horizontal' | 'flex-vertical' | 'flex-grid';

/**
 * Get icon for boolean shape
 */
export function getBoolIcon(shape: { boolType?: BoolType }): string | null {
  const type = shape.boolType;
  switch (type) {
    case 'difference':
      return 'boolean-difference';
    case 'exclude':
      return 'boolean-exclude';
    case 'intersection':
      return 'boolean-intersection';
    case 'union':
      return 'boolean-union';
    default:
      return null;
  }
}

/**
 * Get icon for frame shape
 */
export function getFrameIcon(shape: {
  isVariantContainer?: boolean;
  flexLayout?: boolean;
  col?: boolean;
  row?: boolean;
  gridLayout?: boolean;
}): string {
  // TODO: Implement with proper imports
  // if (isVariantContainer(shape)) {
  //   return 'component';
  // }
  // if (flexLayout(shape) && col(shape)) {
  //   return 'flex-horizontal';
  // }
  // if (flexLayout(shape) && row(shape)) {
  //   return 'flex-vertical';
  // }
  // if (gridLayout(shape)) {
  //   return 'flex-grid';
  // }
  return 'board';
}

/**
 * Get icon for shape based on its type and properties
 */
export function getShapeIcon(shape: {
  type?: ShapeType;
  boolType?: BoolType;
  maskedGroup?: boolean;
  isInstanceHead?: boolean;
  isMainInstance?: boolean;
  isVariant?: boolean;
  hasImages?: boolean;
}): string | null {
  // TODO: Implement with proper imports
  // if (isInstanceHead(shape)) {
  //   if (isMainInstance(shape)) {
  //     return isVariant(shape) ? 'variant' : 'component';
  //   }
  //   return 'component-copy';
  // }

  const type = shape.type;

  switch (type) {
    case 'frame':
      return getFrameIcon(shape);
    case 'image':
      return 'img';
    case 'line':
      return shape.hasImages ? 'img' : 'rectangle';
    case 'circle':
      return shape.hasImages ? 'img' : 'elipse';
    case 'path':
      return shape.hasImages ? 'img' : 'path';
    case 'rect':
      return shape.hasImages ? 'img' : 'rectangle';
    case 'text':
      return 'text';
    case 'group':
      return shape.maskedGroup ? 'mask' : 'group';
    case 'bool':
      return getBoolIcon(shape);
    case 'svg-raw':
      return 'img';
    default:
      return null;
  }
}

/**
 * Get icon for shape by type
 */
export function getShapeIconByType(type: ShapeType | 'component'): string | null {
  if (type === 'component') {
    return 'component';
  }

  switch (type) {
    case 'frame':
      return 'board';
    case 'image':
      return 'img';
    case 'shape':
      return 'path';
    case 'text':
      return 'text';
    case 'mask':
      return 'mask';
    case 'group':
      return 'group';
    default:
      return null;
  }
}
