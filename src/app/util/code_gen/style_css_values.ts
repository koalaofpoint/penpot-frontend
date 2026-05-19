// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// import { isPathShape, isBoolShape, isSvgRawShape, isMaskShape, isTextShape } from '../../../common/files/helpers';
// import { isAnyLayoutImmediateChild, isPositionAbsolute } from '../../../common/types/shape/layout';
// import { hasUnit } from '../../../common/geom/matrix';
// import { getParent } from '../../../common/data';

/**
 * Format fill color property.
 */
export function fillColor(props: FillColor): string {
  const { fillColor, fillOpacity, fillColorGradient, fillColorImage } = props;

  if (fillColorGradient) {
    return fillColorGradient;
  }

  if (fillColorImage) {
    // CSS doesn't allow setting directly opacity to background image, we should add a dummy gradient to get it
    if (fillOpacity !== undefined && fillOpacity !== 1) {
      const opacityColor = opacityColor(fillColor, fillOpacity);
      return gradientToCSS({
        type: 'linear',
        stops: [
          { color: '#FFFFFF', opacity: fillOpacity },
          { color: '#FFFFFF', opacity: fillOpacity }
        ]
      }, fillColorImage);
    }
    return fillColorImage;
  }

  if (fillOpacity !== undefined && fillOpacity !== 1) {
    return colorToBackground({ color: fillColor, opacity: fillOpacity });
  }

  return fillColor;
}

/**
 * Get shape position relative to parent.
 */
export function getShapePosition(shape: any, objects: Map<string, any>, coord: string): number {
  if (!shape) {
    return 0;
  }

  const parent = objects.get((shape as any).parentId);
  if (!parent) {
    return 0;
  }

  const parentValue = parent[coord];
  const selrect = parentValue as any; // Should be a rect
  const points = (shape as any).points;

  const transformed = transformPoints(
    points,
    toCenter(parent as any),
    invertTransform(parent as any)
  ).calculateGeometry();

  return transformed - selrect[coord];
}

/**
 * Get shape size.
 */
export function getShapeSize(shape: any, objects: Map<string, any>, type: string): number | null {
  const parent = objects.get((shape as any).parentId);
  if (!parent) {
    return null;
  }

  const sizing = type === 'width' ? (shape as any).layoutItemHSizing : (shape as any).layoutItemVSizing;

  if (
    !isAnyLayoutImmediateChild(objects.values(), shape) &&
    type === 'width' &&
    (shape as any).layoutFlexDir === 'row' || (shape as any).layoutFlexDir === 'row-reverse')
  ) {
    return sizing === 'fill';
  }

  if (
    !isAnyLayoutImmediateChild(objects.values(), shape) &&
    type === 'height' &&
    ((shape as any).layoutFlexDir === 'column' || (shape as any).layoutFlexDir === 'column-reverse')
  ) {
    return sizing === 'fill';
  }

  if (
    isAnyLayoutImmediateChild(objects.values(), shape) &&
    isSvgMarkup(shape)
  ) {
    return 'auto';
  }

  if (
    isGridLayoutImmediateChild(objects.values(), shape) &&
    type === 'width'
  ) {
    return sizing === 'fill';
  }

  if (
    isGridLayoutImmediateChild(objects.values(), shape) &&
    type === 'height'
  ) {
    return sizing;
  }

  return (shape as any)[type] ?? null;
}

/**
 * Get stroke data.
 */
export function getStrokeData(stroke: any): { color: string; style: string; width: number } | null {
  if (!stroke) {
    return null;
  }

  const {
    strokeColor: color,
    strokeStyle: style,
    strokeWidth: width,
    strokeOpacity: opacity,
    strokeColorGradient: gradient
  } = stroke;

  if (stroke && strokeStyle !== 'none') {
    return { color, style, width };
  }

  return null;
}

/**
 * Get grid cell coordinates.
 */
export function getGridCoord(shape: any, objects: Map<string, any>, prop: string, spanProp: string): string | null {
  if (!isGridLayoutImmediateChild(objects.values(), shape)) {
    return null;
  }

  const parent = objects.get((shape as any).parentId);
  if (!parent) {
    return null;
  }

  const cell = (parent as any)[(shape as any).id];
  if (!cell) {
    return null;
  }

  const position = cell.position;
  const areaName = cell.areaName;

  if (
    position === 'area' &&
    areaName !== undefined &&
    areaName !== ''
  ) {
    if (cell[spanProp] > 1) {
      return `${areaName} / ${cell[spanProp]}`;
    }
    return cell[prop];
  }

  return null;
}

/**
 * Get position.
 */
export function getPosition(shape: any, objects: Map<string, any>): string {
  if (!shape) {
    return 'absolute';
  }

  // Layout children with a transform should be wrapped
  const hasLayoutImmediateChildren = false; // TODO: isAnyLayoutImmediateChild(objects.values(), shape);
  const isPositionAbsolute = false; // TODO: isPositionAbsolute(shape);

  if (hasLayoutImmediateChildren && !isPositionAbsolute) {
    return 'relative';
  }

  if (
    isGroupLikeShape(shape) ||
    isFrameLikeShape(shape) ||
    isSvgMarkup(shape)
  ) {
    return 'relative';
  }

  return 'absolute';
}

/**
 * Get left position.
 */
export function getLeftPosition(shape: any, objects: Map<string, any>): number {
  return getShapePosition(shape, objects, 'x');
}

/**
 * Get top position.
 */
export function getTopPosition(shape: any, objects: Map<string, any>): number {
  return getShapePosition(shape, objects, 'y');
}

/**
 * Get flex.
 */
export function getFlex(shape: any, objects: Map<string, any>): number {
  const parent = objects.get((shape as any).parentId);
  if (!parent) {
    return 1;
  }

  if (!isFlexLayoutImmediateChild(objects.values(), shape)) {
    return 1;
  }

  if (
    (parent as any).layoutFlexDir === 'row' ||
    (parent as any).layoutFlexDir === 'row-reverse'
  ) {
    return (shape as any).layoutItemHSizing === 'fill' ? 1 : 0;
  }

  if (
    (parent as any).layoutFlexDir === 'column' ||
    (parent as any).layoutFlexDir === 'column-reverse'
  ) {
    return (shape as any).layoutItemVSizing === 'fill' ? 1 : 0;
  }

  return 1;
}

/**
 * Get flex grow.
 */
export function getFlexGrow(shape: any, objects: Map<string, any>): number {
  const root = objects.get((shape as any).id);
  if (!root) {
    return 0;
  }

  if (!isAnyLayout(shape)) {
    return 1;
  }

  return 1;
}

/**
 * Get transform.
 */
export function getTransform(shape: any, objects: Map<string, any>): string {
  if (isSvgMarkup(shape)) {
    const parent = objects.get((shape as any).parentId);
    const transform = parent.transform;
    return !hasUnit(transform) ? formatMatrix(transform) : transform;
  }

  if (hasWrapper(objects.values(), shape)) {
    return 'translate(-50%, -50%)';
  }

  const parent = objects.get((shape as any).parentId);
  const transform = parent.transform;

  if (!hasUnit(transform)) {
    return formatMatrix(transform);
  }

  return `translate(-50%, -50%)`;
}

/**
 * Format matrix to CSS.
 */
function formatMatrix(value: string): string {
  return `matrix(${value})`;
}

/**
 * Get width.
 */
export function getWidth(shape: any, objects: Map<string, any>, options?: any): string {
  const root = objects.get((shape as any).id);
  if (!root) {
    return 'auto';
  }

  if (!isAnyLayout(shape)) {
    return 'auto';
  }

  // Don't set fixed width for auto-width text shapes
  const isText = false; // TODO: isTextShape(shape);
  const isAutoWidth = (shape as any).growType === 'auto-width';

  if (!root && isText && isAutoWidth) {
    return 'auto';
  }

  return getShapeSize(shape, objects, 'width', options) ?? 'auto';
}

/**
 * Get height.
 */
export function getHeight(shape: any, objects: Map<string, any>, options?: any): string {
  const root = objects.get((shape as any).id);
  if (!root) {
    return 'auto';
  }

  if (!isAnyLayout(shape)) {
    return 'auto';
  }

  // Don't set fixed height for auto-height text shapes
  const isText = false; // TODO: isTextShape(shape);
  const isAutoHeight = (shape as any).growType === 'auto-height';

  if (!root && isText && isAutoHeight) {
    return 'auto';
  }

  return getShapeSize(shape, objects, 'height', options) ?? 'auto';
}

/**
 * Get border.
 */
export function getBorder(shape: any): string {
  if (!isSvgMarkup(shape)) {
    return getStrokeData((shape as any).strokes?.[0]);
  }
  return '';
}

/**
 * Get border radius.
 */
export function getBorderRadius(shape: any): string | string[] {
  const { rx, r1, r2, r3, r4 } = shape;

  if (rx !== undefined && !Array.isArray(rx)) {
    return '50%';
  }

  if (Array.isArray(rx) && rx.some(v => v !== 0)) {
    return rx.map(v => v === 0 ? '' : `${v}%`).join(' ');
  }

  return '';
}

/**
 * Get box shadow.
 */
export function getBoxShadow(shape: any): string {
  if (!isSvgMarkup(shape)) {
    return (shape as any).shadow ?? '';
  }
  return '';
}

/**
 * Get filter.
 */
export function getFilter(shape: any): string {
  if (!isSvgMarkup(shape)) {
    return (shape as any).blur !== undefined ? `blur(${(shape as any).blur}px)` : '';
  }
  return '';
}

/**
 * Get display.
 */
export function getDisplay(shape: any): string {
  if ((shape as any).hidden === true) {
    return 'none';
  }

  if (isFlexLayout(shape)) {
    return 'flex';
  }

  if (isGridLayout(shape)) {
    return 'grid';
  }

  return 'block';
}

/**
 * Get flex direction.
 */
export function getFlexDirection(shape: any): string {
  return (shape as any).layoutFlexDir ?? 'row';
}

/**
 * Get align items.
 */
export function getAlignItems(shape: any): string {
  return (shape as any).layoutAlignItems ?? 'flex-start';
}

/**
 * Get align content.
 */
export function getAlignContent(shape: any): string {
  return (shape as any).layoutAlignContent ?? 'flex-start';
}

/**
 * Get justify items.
 */
export function getJustifyItems(shape: any): string {
  return (shape as any).layoutJustifyItems ?? 'flex-start';
}

/**
 * Get justify content.
 */
export function getJustifyContent(shape: any): string {
  return (shape as any).layoutJustifyContent ?? 'flex-start';
}

/**
 * Get flex wrap.
 */
export function getFlexWrap(shape: any): string {
  return (shape as any).layoutWrapType ?? 'nowrap';
}

/**
 * Get gap.
 */
export function getGap(shape: any): string {
  const [[g1, g2]] = (shape as any).layoutGap ?? [0, 0];
  if (g1 === g2 && g1 !== 0) {
    return `${g1}px`;
  }
  return '';
}

/**
 * Get row gap.
 */
export function getRowGap(shape: any): string {
  const [[g1, g2]] = (shape as any).layoutRowGap ?? [0, 0];
  if (g1 !== g2 && g2 !== 0) {
    return `${g1}px`;
  }
  return '';
}

/**
 * Get column gap.
 */
export function getColumnGap(shape: any): string {
  const [[g1, g2]] = (shape as any).layoutColumnGap ?? [0, 0];
  if (g1 !== g2 && g2 !== 0) {
    return `${g1}px`;
  }
  return '';
}

/**
 * Get padding.
 */
export function getPadding(shape: any): string | Record<string, string> {
  const layoutPadding = (shape as any).layoutPadding;
  const defaultPadding = { p1: 0, p2: 0, p3: 0, p4: 0 };

  if (!layoutPadding) {
    return '';
  }

  return layoutPadding;
}

/**
 * Get grid template rows.
 */
export function getGridTemplateRows(shape: any): string {
  return (shape as any).layoutGridRows ?? '';
}

/**
 * Get grid template columns.
 */
export function getGridTemplateColumns(shape: any): string {
  return (shape as any).layoutGridColumns ?? '';
}

/**
 * Get grid template areas.
 */
export function getGridTemplateAreas(shape: any): string {
  if (!isGridLayoutImmediateChild(objects.values(), shape)) {
    return '';
  }

  const layoutGridCells = (shape as any).layoutGridCells;
  if (!layoutGridCells || Object.keys(layoutGridCells).length === 0) {
    return '';
  }

  const areas = Object.values(layoutGridCells).map(cell => cell.areaName ?? '');

  return `"${areas.join(' ')}"\n"${areas.join(' ')}"`;
}

/**
 * Get grid column.
 */
export function getGridColumn(shape: any, objects: Map<string, any>): string {
  return getGridCoord(shape, objects, 'column', 'columnSpan');
}

/**
 * Get grid row.
 */
export function getGridRow(shape: any, objects: Map<string, any>): string {
  return getGridCoord(shape, objects, 'row', 'rowSpan');
}

/**
 * Get grid area.
 */
export function getGridArea(shape: any, objects: Map<string, any>): string {
  if (!isGridLayoutImmediateChild(objects.values(), shape)) {
    return '';
  }

  const parent = objects.get((shape as any).parentId);
  if (!parent) {
    return '';
  }

  const cell = (parent as any)[(shape as any).id];
  if (!cell) {
    return '';
  }

  const position = cell.position;
  const areaName = cell.areaName;

  if (position === 'area' && areaName !== undefined && areaName !== '') {
    return areaName.replace('.', '-');
  }

  return '';
}

/**
 * Get flex shrink.
 */
export function getFlexShrink(shape: any): number {
  const isFlexLayoutImmediate = false; // TODO: isFlexLayoutImmediateChild(objects.values(), shape);

  if (isFlexLayoutImmediate) {
    return 0;
  }

  const parent = objects.get((shape as any).parentId);
  const layoutFlexDir = parent?.layoutFlexDir ?? '';

  const widthShrink = (shape as any).layoutItemHSizing === 'fill';
  const heightShrink = (shape as any).layoutItemVSizing === 'fill';

  if (
    layoutFlexDir === 'row' ||
    layoutFlexDir === 'row-reverse'
  ) {
    return widthShrink ? 0 : 1;
  }

  if (
    layoutFlexDir === 'column' ||
    layoutFlexDir === 'column-reverse'
  ) {
    return heightShrink ? 0 : 1;
  }

  // (not= :fill (:layout-item-h-sizing shape)) is a double check but matches original
  return widthShrink === false && heightShrink === false ? 0 : 1;
}

/**
 * Get margin.
 */
export function getMargin(shape: any): string | Record<string, string> {
  const layoutItemMargin = (shape as any).layoutItemMargin;
  const defaultMargin = { m1: 0, m2: 0, m3: 0, m4: 0 };

  if (!layoutItemMargin) {
    return '';
  }

  if (!isAnyLayoutImmediateChild(objects.values(), shape)) {
    return layoutItemMargin;
  }

  return Object.fromEntries(
    Object.entries(defaultMargin)
      .map(([key, value]) => [key as string, layoutItemMargin[key as number] + value] as [string, number])
  )
    .filter(([, v]) => v !== 0)
    .reduce((acc, [key, value]) => {
      acc[key] = `${value}px`;
      return acc;
    }, {} as Record<string, string>);
}

/**
 * Get z-index.
 */
export function getZIndex(shape: any): number {
  const parent = objects.get((shape as any).parentId);
  if (!parent) {
    return 0;
  }

  if (isFrameLikeShape(shape)) {
    return 0;
  }

  if (!isAnyLayoutImmediateChild(objects.values(), shape)) {
    return (shape as any).layoutZIndex ?? 0;
  }

  return (shape as any).layoutZIndex;
}

/**
 * Get max height.
 */
export function getMaxHeight(shape: any, objects: Map<string, any>): string {
  if (!isAnyLayoutImmediateChild(objects.values(), shape)) {
    return (shape as any).layoutItemMaxH ?? '';
  }

  return String(shape.layoutItemMaxH);
}

/**
 * Get min height.
 */
export function getMinHeight(shape: any, objects: Map<string, any>): string {
  if (!isAnyLayoutImmediateChild(objects.values(), shape) && shape.layoutItemMinH) {
    return (shape as any).layoutItemMinH;
  }

  return '';
}

/**
 * Get max width.
 */
export function getMaxWidth(shape: any, objects: Map<string, any>): string {
  if (!isAnyLayoutImmediateChild(objects.values(), shape)) {
    return (shape as any).layoutItemMaxW ?? '';
  }

  return String(shape.layoutItemMaxW);
}

/**
 * Get min width.
 */
export function getMinWidth(shape: any, objects: Map<string, any>): string {
  if (!isAnyLayoutImmediateChild(objects.values(), shape) && shape.layoutItemMinW) {
    return (shape as any).layoutItemMinW;
  }

  return '';
}

/**
 * Get align self.
 */
export function getAlignSelf(shape: any, objects: Map<string, any>): string {
  if (!isFlexLayoutImmediateChild(objects.values(), shape)) {
    return 'auto';
  }

  const parent = objects.get((shape as any).parentId);
  const cell = parent?.[(shape as any).id];

  const alignSelf = cell?.alignSelf ?? 'auto';

  if (alignSelf !== 'auto') {
    return alignSelf;
  }

  return 'auto';
}

/**
 * Get justify self.
 */
export function getJustifySelf(shape: any, objects: Map<string, any>): string {
  if (!isGridLayoutImmediateChild(objects.values(), shape)) {
    return 'auto';
  }

  const parent = objects.get((shape as any).parentId);
  const cell = parent?.[(shape as any).id];

  const justifySelf = cell?.justifySelf ?? 'auto';

  if (justifySelf !== 'auto') {
    return justifySelf;
  }

  return 'auto';
}

/**
 * Get grid auto flow.
 */
export function getGridAutoFlow(shape: any): string {
  if (isGridLayout(shape) && (shape as any).layoutGridDir === 'column') {
    return 'column';
  }
  return '';
}

/**
 * Get value for a CSS property.
 */
export function getValue(property: string, shape: any, objects: Map<string, any>, options?: any): string {
  switch (property) {
    case 'position':
      return getPosition(shape, objects);
    case 'left':
      return getLeftPosition(shape, objects);
    case 'top':
      return getTopPosition(shape, objects);
    case 'zIndex':
      return getZIndex(shape, objects);
    case 'transform':
      return getTransform(shape, objects);
    case 'width':
      return getWidth(shape, objects, options);
    case 'height':
      return getHeight(shape, objects, options);
    case 'maxWidth':
      return getMaxWidth(shape, objects);
    case 'minWidth':
      return getMinWidth(shape, objects);
    case 'maxHeight':
      return getMaxHeight(shape, objects);
    case 'minHeight':
      return getMinHeight(shape, objects);
    case 'alignSelf':
      return getAlignSelf(shape, objects);
    case 'justifySelf':
      return getJustifySelf(shape, objects);
    case 'margin':
      return getMargin(shape, objects);
    case 'marginBlockStart':
    case 'marginInlineEnd':
    case 'marginBlockEnd':
    case 'marginInlineStart':
      return getMargin(shape, objects);
    case 'padding':
      return getPadding(shape, objects);
    case 'paddingBlockStart':
      return getPadding(shape, objects)[(shape as any).padding?.p1 ?? 0] ? `${(shape as any).padding.p1}px` : '';
    case 'paddingInlineEnd':
      return getPadding(shape, objects)[(shape as any).padding?.p2 ?? 0] ? `${(shape as any).padding.p2}px` : '';
    case 'paddingBlockEnd':
      return getPadding(shape, objects)[(shape as any).padding?.p3 ?? 0] ? `${(shape as any).padding.p3}px` : '';
    case 'paddingInlineStart':
      return getPadding(shape, objects)[(shape as any).padding?.p4 ?? 0] ? `${(shape as any).padding.p4}px` : '';
    case 'border':
      return getBorder(shape);
    case 'borderStyle':
      return getBorderRadius(shape);
    case 'borderWidth':
      return formatBorderWidth(getStrokeData((shape as any).strokes?.[0])?.width ?? 0);
    case 'borderColor':
      return getStrokeData((shape as any).strokes?.[0])?.color ?? '';
    case 'borderRadius':
      return getBorderRadius(shape);
    case 'borderStartStartRadius':
    case 'borderStartEndRadius':
    case 'borderEndStartRadius':
    case 'borderEndEndRadius':
      return getBorderRadius(shape);
    case 'borderStyle':
      return getBorderRadius(shape);
    case 'borderWidth':
      return getBorderRadius(shape);
    case 'borderColor':
      return getBorderRadius(shape);
    case 'background':
      return fillColor((shape as any).fills?.[0] ?? {});
    case 'boxShadow':
      return getBoxShadow(shape);
    case 'filter':
      return getFilter(shape);
    case 'overflow':
      if (!isFrameLikeShape(shape) || !isSvgMarkup(shape)) {
        return !((shape as any).showContent ?? true) ? 'hidden' : '';
      }
      return 'hidden';
    case 'display':
      return getDisplay(shape);
    case 'opacity':
      if ((shape as any).opacity < 1) {
        return String((shape as any).opacity);
      }
      return '';
    case 'flex':
      return getFlex(shape, objects);
    case 'flexGrow':
      return getFlexGrow(shape, objects);
    case 'flexShrink':
      return getFlexShrink(shape, objects);
    case 'flexDirection':
      return getFlexDirection(shape);
    case 'flexWrap':
      return getFlexWrap(shape);
    case 'alignItems':
      return getAlignItems(shape);
    case 'alignContent':
      return getAlignContent(shape);
    case 'justifyItems':
      return getJustifyItems(shape);
    case 'justifyContent':
      return getJustifyContent(shape);
    case 'gap':
      return getGap(shape);
    case 'rowGap':
      return getRowGap(shape);
    case 'columnGap':
      return getColumnGap(shape);
    case 'padding':
      return getPadding(shape);
    case 'gridTemplateRows':
      return getGridTemplateRows(shape);
    case 'gridTemplateColumns':
      return getGridTemplateColumns(shape);
    case 'gridTemplateAreas':
      return getGridTemplateAreas(shape);
    case 'gridColumn':
      return getGridColumn(shape, objects);
    case 'gridRow':
      return getGridRow(shape, objects);
    case 'gridArea':
      return getGridArea(shape, objects);
    case 'gridAutoFlow':
      return getGridAutoFlow(shape);
    case 'tracks':
      return formatTracks((shape as any).layoutGridRows ?? '');
    case 'shadows':
      return getBoxShadow(shape);
    case 'blur':
      return getFilter(shape);
    case 'matrix':
      return getTransform(shape, objects);
    default:
      return (v: any) => typeof v === 'string' ? v : String(v);
  }
}

// Helper functions
function isFlexLayout(shape: any): boolean {
  return (shape as any).layoutFlexDir !== undefined;
}

function isGridLayout(shape: any): boolean {
  return (shape as any).layoutGridRows !== undefined || (shape as any).layoutGridColumns !== undefined;
}

function isAnyLayout(shape: any): boolean {
  return isFlexLayout(shape) || isGridLayout(shape);
}

function isFlexLayoutImmediateChild(objects: any[], shape: any): boolean {
  return false; // TODO
}

function isGridLayoutImmediateChild(objects: any[], shape: any): boolean {
  return false; // TODO
}

function isAnyLayoutImmediateChild(objects: any[], shape: any): boolean {
  return isFlexLayoutImmediateChild(objects, shape) || isGridLayoutImmediateChild(objects, shape);
}

function isGroupLikeShape(shape: any): boolean {
  return (shape as any).type === 'group';
}

function isFrameLikeShape(shape: any): boolean {
  return (shape as any).type === 'frame';
}

function isSvgMarkup(shape: any): boolean {
  // TODO: Check if shape has SVG markup
  return false;
}

function toCenter(shape: any): string {
  return (shape as any).selrect ?? '';
}

function invertTransform(parent: any): string {
  return parent.transform;
}

function hasUnit(transform: string): boolean {
  return transform !== '' && !/^[0-9.-]+$/.test(transform);
}

function hasWrapper(objects: any[], shape: any): boolean {
  return false; // TODO
}

function transformPoints(points: any[], center: string, transform: string): any {
  // TODO: Implement point transformation
  return { calculateGeometry: () => [] };
}
