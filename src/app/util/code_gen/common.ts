// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// import { isPathShape, isBoolShape } from '../../../common/files/helpers';
// import { isAnyLayoutImmediateChild, isPositionAbsolute } from '../../../common/types/shape/layout';
// import { hasUnit } from '../../../common/geom/matrix';

// TODO: Import these from their actual locations
interface Shape {
  name?: string;
  id?: string;
  fills?: any[];
  strokes?: any[];
  svgAttrs?: any;
  shadow?: any[];
  transform?: string;
}

interface LayoutChild {
  id: string;
}

/**
 * Converts a shape to a CSS selector.
 */
export function shapeToSelector(shape: Shape): string {
  if (!shape) {
    return '';
  }

  const name = shape.name ?? '';
  const subs = name.substring(0, Math.min(10, name.length)).replace(/[^a-zA-Z0-9\s:]+/g, '');
  // selectors cannot start with numbers
  const finalName = /^\d.*$/.test(name) ? `c-${name}` : name;
  const id = shape.id ?? name.substring(24, 36);

  const selectorBase = cssSelector(finalName, ' id');
  const selector = selectorBase.endsWith('-') ? selectorBase.substring(1) : selectorBase;

  return selector;
}

/**
 * Determines if a shape is rendered in HTML+CSS or is rendered
 * through SVG.
 */
export function isSvgMarkup(shape: Shape): boolean {
  if (!shape) {
    return false;
  }

  // path and path-like shapes
  const isPathShape = false; // TODO: isPathShape(shape);
  const isBoolShape = false; // TODO: isBoolShape(shape);

  // imported SVG images
  const isSvgRawShape = false; // TODO: isSvgRawShape(shape);

  // CSS masks are not enough we need to delegate to SVG
  const isMaskShape = false; // TODO: isMaskShape(shape);

  // Texts with shadows or strokes we render in SVG
  const isTextShape = false; // TODO: isTextShape(shape);

  return isPathShape ||
         isBoolShape ||
         isSvgRawShape ||
         isMaskShape ||
         (isTextShape && ((shape.shadow?.length ?? 0) > 0 || (shape.strokes?.length ?? 0) > 0));
}

/**
 * Checks if objects need a wrapper element.
 *
 * Layout children with a transform should be wrapped.
 */
export function hasWrapper(objects: LayoutChild[], shape: Shape): boolean {
  // Layout children with a transform should be wrapped
  const hasLayoutImmediateChildren = false; // TODO: isAnyLayoutImmediateChild(objects, shape);

  return (
    hasLayoutImmediateChildren &&
    !isPositionAbsolute(shape) &&
    !hasUnit(shape.transform)
  );
}

/**
 * Checks if transform has a unit.
 */
function hasUnit(transform: string | undefined): boolean {
  return transform !== undefined && transform !== '';
}
