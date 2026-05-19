// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { getIn } from '../../common/data/macros';
// import { name as keywordName } from '../../common/data';
// import { nilv } from '../../common/data';
// import { validSafeInt, validSafeNumber } from '../../common/schema';
// import {
//   flexDirectionTypes,
//   wrapTypes,
//   alignItemsTypes,
//   alignContentTypes,
//   justifyItemsTypes,
//   justifyContentTypes,
//   itemHSizingTypes,
//   itemVSizingTypes,
//   itemAlignSelfTypes,
//   reverse
// } from '../../common/types/shape/layout';
// import { updateLayout, updateLayoutChild, removeLayout } from '../../main/data/workspace/shape-layout';
// import { relocateShapes } from '../../main/data/workspace/shapes';
// import { emit } from '../../main/store';
// import { naturalChildOrdering } from './flags';
// import { checkPermission, displayNotValid, locateShape } from './utils';

/**
 * Flex direction type
 */
export type FlexDirectionType = 'row' | 'row-reverse' | 'column' | 'column-reverse';

/**
 * Wrap type
 */
export type WrapType = 'nowrap' | 'wrap' | 'wrap-reverse';

/**
 * Align items type
 */
export type AlignItemsType = 'start' | 'center' | 'end' | 'stretch' | 'baseline';

/**
 * Align content type
 */
export type AlignContentType = 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';

/**
 * Justify items type
 */
export type JustifyItemsType = 'start' | 'center' | 'end' | 'stretch';

/**
 * Justify content type
 */
export type JustifyContentType = 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';

/**
 * Item sizing type
 */
export type ItemSizingType = 'fix' | 'auto' | 'fill';

/**
 * Item align self type
 */
export type ItemAlignSelfType = 'auto' | 'start' | 'center' | 'end' | 'stretch';

/**
 * Flex layout proxy interface
 */
export interface FlexLayoutProxy {
  pluginId: string;
  fileId: string;
  pageId: string;
  id: string;

  dir: FlexDirectionType;
  wrap: WrapType;
  alignItems: AlignItemsType;
  alignContent: AlignContentType;
  justifyItems: JustifyItemsType;
  justifyContent: JustifyContentType;
  rowGap: number;
  columnGap: number;
  verticalPadding: number;
  horizontalPadding: number;
  topPadding: number;
  rightPadding: number;
  bottomPadding: number;
  leftPadding: number;

  horizontalSizing: ItemSizingType;
  verticalSizing: ItemSizingType;

  remove(): void;
  appendChild(child: unknown): void;
}

/**
 * Check if value is a FlexLayoutProxy
 */
export function isFlexLayoutProxy(p: unknown): p is FlexLayoutProxy {
  return Object(p)?.[Symbol('type')] === 'FlexLayoutProxy';
}

/**
 * Create a flex layout proxy
 */
export function flexLayoutProxy(
  pluginId: string,
  fileId: string,
  pageId: string,
  id: string
): FlexLayoutProxy {
  const self = {} as FlexLayoutProxy;

  // Internal properties
  (self as unknown as Record<symbol, unknown>)[Symbol('$plugin')] = pluginId;
  (self as unknown as Record<symbol, unknown>)[Symbol('$id')] = id;
  (self as unknown as Record<symbol, unknown>)[Symbol('$file')] = fileId;
  (self as unknown as Record<symbol, unknown>)[Symbol('$page')] = pageId;
  (self as unknown as Record<symbol, unknown>)[Symbol('type')] = 'FlexLayoutProxy';

  // Public properties
  self.pluginId = pluginId;
  self.fileId = fileId;
  self.pageId = pageId;
  self.id = id;

  // Dir getter/setter
  Object.defineProperty(self, 'dir', {
    get(): FlexDirectionType {
      // TODO: const shape = proxyToShapeInternal(self);
      // TODO: return keywordName(shape.layoutFlexDir);
      return 'row';
    },
    set(value: FlexDirectionType): void {
      const kwValue = value.toLowerCase();
      // TODO: if (!flexDirectionTypes.has(kwValue)) {
      // TODO:   displayNotValid('dir', value);
      // TODO;   return;
      // TODO: }
      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('dir', "Plugin doesn't have 'content:write' permission");
        return;
      }
      // TODO: emit(updateLayout(new Set([id]), { layoutFlexDir: kwValue }));
    },
    enumerable: true
  });

  // Wrap getter/setter
  Object.defineProperty(self, 'wrap', {
    get(): WrapType {
      // TODO: const shape = proxyToShapeInternal(self);
      // TODO: return keywordName(shape.layoutWrapType);
      return 'nowrap';
    },
    set(value: WrapType): void {
      const kwValue = value.toLowerCase();
      // TODO: if (!wrapTypes.has(kwValue)) {
      // TODO:   displayNotValid('wrap', value);
      // TODO;   return;
      // TODO: }
      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('wrap', "Plugin doesn't have 'content:write' permission");
        return;
      }
      // TODO: emit(updateLayout(new Set([id]), { layoutWrapType: kwValue }));
    },
    enumerable: true
  });

  // Align items getter/setter
  Object.defineProperty(self, 'alignItems', {
    get(): AlignItemsType {
      // TODO: const shape = proxyToShapeInternal(self);
      // TODO: return keywordName(shape.layoutAlignItems);
      return 'start';
    },
    set(value: AlignItemsType): void {
      const kwValue = value.toLowerCase();
      // TODO: if (!alignItemsTypes.has(kwValue)) {
      // TODO:   displayNotValid('alignItems', value);
      // TODO;   return;
      // TODO: }
      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('alignItems', "Plugin doesn't have 'content:write' permission");
        return;
      }
      // TODO: emit(updateLayout(new Set([id]), { layoutAlignItems: kwValue }));
    },
    enumerable: true
  });

  // Align content getter/setter
  Object.defineProperty(self, 'alignContent', {
    get(): AlignContentType {
      // TODO: const shape = proxyToShapeInternal(self);
      // TODO: return keywordName(shape.layoutAlignContent);
      return 'start';
    },
    set(value: AlignContentType): void {
      const kwValue = value.toLowerCase();
      // TODO: if (!alignContentTypes.has(kwValue)) {
      // TODO:   displayNotValid('alignContent', value);
      // TODO;   return;
      // TODO: }
      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('alignContent', "Plugin doesn't have 'content:write' permission");
        return;
      }
      // TODO: emit(updateLayout(new Set([id]), { layoutAlignContent: kwValue }));
    },
    enumerable: true
  });

  // Justify items getter/setter
  Object.defineProperty(self, 'justifyItems', {
    get(): JustifyItemsType {
      // TODO: const shape = proxyToShapeInternal(self);
      // TODO: return keywordName(shape.layoutJustifyItems);
      return 'start';
    },
    set(value: JustifyItemsType): void {
      const kwValue = value.toLowerCase();
      // TODO: if (!justifyItemsTypes.has(kwValue)) {
      // TODO:   displayNotValid('justifyItems', value);
      // TODO;   return;
      // TODO: }
      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('justifyItems', "Plugin doesn't have 'content:write' permission");
        return;
      }
      // TODO: emit(updateLayout(new Set([id]), { layoutJustifyItems: kwValue }));
    },
    enumerable: true
  });

  // Justify content getter/setter
  Object.defineProperty(self, 'justifyContent', {
    get(): JustifyContentType {
      // TODO: const shape = proxyToShapeInternal(self);
      // TODO: return keywordName(shape.layoutJustifyContent);
      return 'start';
    },
    set(value: JustifyContentType): void {
      const kwValue = value.toLowerCase();
      // TODO: if (!justifyContentTypes.has(kwValue)) {
      // TODO:   displayNotValid('justifyContent', value);
      // TODO;   return;
      // TODO: }
      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('justifyContent', "Plugin doesn't have 'content:write' permission");
        return;
      }
      // TODO: emit(updateLayout(new Set([id]), { layoutJustifyContent: kwValue }));
    },
    enumerable: true
  });

  // Row gap getter/setter
  Object.defineProperty(self, 'rowGap', {
    get(): number {
      // TODO: const shape = proxyToShapeInternal(self);
      // TODO: return nilv(shape.layoutGap?.rowGap, 0);
      return 0;
    },
    set(value: number): void {
      if (!validSafeIntInternal(value)) {
        displayNotValid('rowGap', value);
        return;
      }
      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('rowGap', "Plugin doesn't have 'content:write' permission");
        return;
      }
      // TODO: emit(updateLayout(new Set([id]), { layoutGap: { rowGap: value } }));
    },
    enumerable: true
  });

  // Column gap getter/setter
  Object.defineProperty(self, 'columnGap', {
    get(): number {
      // TODO: const shape = proxyToShapeInternal(self);
      // TODO: return nilv(shape.layoutGap?.columnGap, 0);
      return 0;
    },
    set(value: number): void {
      if (!validSafeIntInternal(value)) {
        displayNotValid('columnGap', value);
        return;
      }
      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('columnGap', "Plugin doesn't have 'content:write' permission");
        return;
      }
      // TODO: emit(updateLayout(new Set([id]), { layoutGap: { columnGap: value } }));
    },
    enumerable: true
  });

  // Vertical padding getter/setter
  Object.defineProperty(self, 'verticalPadding', {
    get(): number {
      // TODO: const shape = proxyToShapeInternal(self);
      // TODO: return nilv(shape.layoutPadding?.p1, 0);
      return 0;
    },
    set(value: number): void {
      if (!validSafeIntInternal(value)) {
        displayNotValid('verticalPadding', value);
        return;
      }
      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('verticalPadding', "Plugin doesn't have 'content:write' permission");
        return;
      }
      // TODO: emit(updateLayout(new Set([id]), { layoutPadding: { p1: value, p3: value } }));
    },
    enumerable: true
  });

  // Horizontal padding getter/setter
  Object.defineProperty(self, 'horizontalPadding', {
    get(): number {
      // TODO: const shape = proxyToShapeInternal(self);
      // TODO: return nilv(shape.layoutPadding?.p2, 0);
      return 0;
    },
    set(value: number): void {
      if (!validSafeIntInternal(value)) {
        displayNotValid('horizontalPadding', value);
        return;
      }
      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('horizontalPadding', "Plugin doesn't have 'content:write' permission");
        return;
      }
      // TODO: emit(updateLayout(new Set([id]), { layoutPadding: { p2: value, p4: value } }));
    },
    enumerable: true
  });

  // Top padding getter/setter
  Object.defineProperty(self, 'topPadding', {
    get(): number {
      // TODO: const shape = proxyToShapeInternal(self);
      // TODO: return nilv(shape.layoutPadding?.p1, 0);
      return 0;
    },
    set(value: number): void {
      if (!validSafeIntInternal(value)) {
        displayNotValid('topPadding', value);
        return;
      }
      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('topPadding', "Plugin doesn't have 'content:write' permission");
        return;
      }
      // TODO: emit(updateLayout(new Set([id]), { layoutPadding: { p1: value } }));
    },
    enumerable: true
  });

  // Right padding getter/setter
  Object.defineProperty(self, 'rightPadding', {
    get(): number {
      // TODO: const shape = proxyToShapeInternal(self);
      // TODO: return nilv(shape.layoutPadding?.p2, 0);
      return 0;
    },
    set(value: number): void {
      if (!validSafeIntInternal(value)) {
        displayNotValid('rightPadding', value);
        return;
      }
      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('rightPadding', "Plugin doesn't have 'content:write' permission");
        return;
      }
      // TODO: emit(updateLayout(new Set([id]), { layoutPadding: { p2: value } }));
    },
    enumerable: true
  });

  // Bottom padding getter/setter
  Object.defineProperty(self, 'bottomPadding', {
    get(): number {
      // TODO: const shape = proxyToShapeInternal(self);
      // TODO: return nilv(shape.layoutPadding?.p3, 0);
      return 0;
    },
    set(value: number): void {
      if (!validSafeIntInternal(value)) {
        displayNotValid('bottomPadding', value);
        return;
      }
      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('bottomPadding', "Plugin doesn't have 'content:write' permission");
        return;
      }
      // TODO: emit(updateLayout(new Set([id]), { layoutPadding: { p3: value } }));
    },
    enumerable: true
  });

  // Left padding getter/setter
  Object.defineProperty(self, 'leftPadding', {
    get(): number {
      // TODO: const shape = proxyToShapeInternal(self);
      // TODO: return nilv(shape.layoutPadding?.p4, 0);
      return 0;
    },
    set(value: number): void {
      if (!validSafeIntInternal(value)) {
        displayNotValid('leftPadding', value);
        return;
      }
      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('leftPadding', "Plugin doesn't have 'content:write' permission");
        return;
      }
      // TODO: emit(updateLayout(new Set([id]), { layoutPadding: { p4: value } }));
    },
    enumerable: true
  });

  // Horizontal sizing getter/setter
  Object.defineProperty(self, 'horizontalSizing', {
    get(): ItemSizingType {
      // TODO: const shape = proxyToShapeInternal(self);
      // TODO: return keywordName(nilv(shape.layoutItemHSizing, 'fix'));
      return 'fix';
    },
    set(value: ItemSizingType): void {
      const kwValue = value.toLowerCase();
      // TODO: if (!itemHSizingTypes.has(kwValue)) {
      // TODO:   displayNotValid('horizontalSizing', value);
      // TODO;   return;
      // TODO: }
      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('horizontalSizing', "Plugin doesn't have 'content:write' permission");
        return;
      }
      // TODO: emit(updateLayout(new Set([id]), { layoutItemHSizing: kwValue }));
    },
    enumerable: true
  });

  // Vertical sizing getter/setter
  Object.defineProperty(self, 'verticalSizing', {
    get(): ItemSizingType {
      // TODO: const shape = proxyToShapeInternal(self);
      // TODO: return keywordName(nilv(shape.layoutItemVSizing, 'fix'));
      return 'fix';
    },
    set(value: ItemSizingType): void {
      const kwValue = value.toLowerCase();
      // TODO: if (!itemVSizingTypes.has(kwValue)) {
      // TODO:   displayNotValid('verticalSizing', value);
      // TODO;   return;
      // TODO: }
      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('verticalSizing', "Plugin doesn't have 'content:write' permission");
        return;
      }
      // TODO: emit(updateLayout(new Set([id]), { layoutItemVSizing: kwValue }));
    },
    enumerable: true
  });

  // Remove method
  self.remove = function(): void {
    // TODO: emit(removeLayout(new Set([id])));
  };

  // Append child method
  self.appendChild = function(child: unknown): void {
    // TODO: if (!isShapeProxy(child)) {
    // TODO:   displayNotValid('appendChild', child);
    // TODO:   return;
    // TODO: }

    const childId = (child as Record<string, unknown>)[Symbol('$id')] as string;
    // TODO: const shape = locateShape(fileId, pageId, id);
    // TODO: const isReverse = reverse(shape);
    // TODO: const shapes = shape.shapes ?? [];
    // TODO: const index = naturalChildOrdering(pluginId) && !isReverse ? 0 : shapes.length;

    // TODO: emit(relocateShapes(new Set([childId]), id, index));
  };

  return self;
}

/**
 * Layout child proxy interface
 */
export interface LayoutChildProxy {
  pluginId: string;
  fileId: string;
  pageId: string;
  id: string;

  absolute: boolean;
  zIndex: number;
  horizontalSizing: ItemSizingType;
  verticalSizing: ItemSizingType;
  alignSelf: ItemAlignSelfType;
  verticalMargin: number;
  horizontalMargin: number;
  topMargin: number;
  rightMargin: number;
  bottomMargin: number;
  leftMargin: number;
  maxWidth: number;
  minWidth: number;
  maxHeight: number;
  minHeight: number;
}

/**
 * Check if value is a LayoutChildProxy
 */
export function isLayoutChildProxy(p: unknown): p is LayoutChildProxy {
  return Object(p)?.[Symbol('type')] === 'LayoutChildProxy';
}

/**
 * Create a layout child proxy
 */
export function layoutChildProxy(
  pluginId: string,
  fileId: string,
  pageId: string,
  id: string
): LayoutChildProxy {
  const self = {} as LayoutChildProxy;

  // Internal properties
  (self as unknown as Record<symbol, unknown>)[Symbol('$plugin')] = pluginId;
  (self as unknown as Record<symbol, unknown>)[Symbol('$id')] = id;
  (self as unknown as Record<symbol, unknown>)[Symbol('$file')] = fileId;
  (self as unknown as Record<symbol, unknown>)[Symbol('$page')] = pageId;
  (self as unknown as Record<symbol, unknown>)[Symbol('type')] = 'LayoutChildProxy';

  // Public properties
  self.pluginId = pluginId;
  self.fileId = fileId;
  self.pageId = pageId;
  self.id = id;

  // Absolute getter/setter
  Object.defineProperty(self, 'absolute', {
    get(): boolean {
      // TODO: const shape = proxyToShapeInternal(self);
      // TODO: return Boolean(shape.layoutItemAbsolute);
      return false;
    },
    set(value: boolean): void {
      if (typeof value !== 'boolean') {
        displayNotValid('absolute', value);
        return;
      }
      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('absolute', "Plugin doesn't have 'content:write' permission");
        return;
      }
      // TODO: emit(updateLayout(new Set([id]), { layoutItemAbsolute: value }));
    },
    enumerable: true
  });

  // Z-index getter/setter
  Object.defineProperty(self, 'zIndex', {
    get(): number {
      // TODO: const shape = proxyToShapeInternal(self);
      // TODO: return nilv(shape.layoutItemZIndex, 0);
      return 0;
    },
    set(value: number): void {
      // TODO: if (!validSafeIntInternal(value)) {
      // TODO:   displayNotValid('zIndex', value);
      // TODO;   return;
      // TODO: }
      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('zIndex', "Plugin doesn't have 'content:write' permission");
        return;
      }
      // TODO: emit(updateLayoutChild(new Set([id]), { layoutItemZIndex: value }));
    },
    enumerable: true
  });

  // Horizontal sizing getter/setter
  Object.defineProperty(self, 'horizontalSizing', {
    get(): ItemSizingType {
      // TODO: const shape = proxyToShapeInternal(self);
      // TODO: return keywordName(nilv(shape.layoutItemHSizing, 'fix'));
      return 'fix';
    },
    set(value: ItemSizingType): void {
      const kwValue = value.toLowerCase();
      // TODO: if (!itemHSizingTypes.has(kwValue)) {
      // TODO:   displayNotValid('horizontalSizing', value);
      // TODO;   return;
      // TODO: }
      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('horizontalSizing', "Plugin doesn't have 'content:write' permission");
        return;
      }
      // TODO: emit(updateLayoutChild(new Set([id]), { layoutItemHSizing: kwValue }));
    },
    enumerable: true
  });

  // Vertical sizing getter/setter
  Object.defineProperty(self, 'verticalSizing', {
    get(): ItemSizingType {
      // TODO: const shape = proxyToShapeInternal(self);
      // TODO: return keywordName(nilv(shape.layoutItemVSizing, 'fix'));
      return 'fix';
    },
    set(value: ItemSizingType): void {
      const kwValue = value.toLowerCase();
      // TODO: if (!itemVSizingTypes.has(kwValue)) {
      // TODO:   displayNotValid('verticalSizing', value);
      // TODO;   return;
      // TODO: }
      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('verticalSizing', "Plugin doesn't have 'content:write' permission");
        return;
      }
      // TODO: emit(updateLayoutChild(new Set([id]), { layoutItemVSizing: kwValue }));
    },
    enumerable: true
  });

  // Align self getter/setter
  Object.defineProperty(self, 'alignSelf', {
    get(): ItemAlignSelfType {
      // TODO: const shape = proxyToShapeInternal(self);
      // TODO: return keywordName(nilv(shape.layoutItemAlignSelf, 'auto'));
      return 'auto';
    },
    set(value: ItemAlignSelfType): void {
      const kwValue = value.toLowerCase();
      // TODO: if (!itemAlignSelfTypes.has(kwValue)) {
      // TODO:   displayNotValid('alignSelf', value);
      // TODO;   return;
      // TODO: }
      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('alignSelf', "Plugin doesn't have 'content:write' permission");
        return;
      }
      // TODO: emit(updateLayoutChild(new Set([id]), { layoutItemAlignSelf: kwValue }));
    },
    enumerable: true
  });

  // Vertical margin getter/setter
  Object.defineProperty(self, 'verticalMargin', {
    get(): number {
      // TODO: const shape = proxyToShapeInternal(self);
      // TODO: return nilv(shape.layoutItemMargin?.m1, 0);
      return 0;
    },
    set(value: number): void {
      if (!validSafeNumberInternal(value)) {
        displayNotValid('verticalMargin', value);
        return;
      }
      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('verticalMargin', "Plugin doesn't have 'content:write' permission");
        return;
      }
      // TODO: emit(updateLayoutChild(new Set([id]), { layoutItemMargin: { m1: value, m3: value } }));
    },
    enumerable: true
  });

  // Horizontal margin getter/setter
  Object.defineProperty(self, 'horizontalMargin', {
    get(): number {
      // TODO: const shape = proxyToShapeInternal(self);
      // TODO: return nilv(shape.layoutItemMargin?.m2, 0);
      return 0;
    },
    set(value: number): void {
      if (!validSafeNumberInternal(value)) {
        displayNotValid('horizontalMargin', value);
        return;
      }
      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('horizontalMargin', "Plugin doesn't have 'content:write' permission");
        return;
      }
      // TODO: emit(updateLayoutChild(new Set([id]), { layoutItemMargin: { m2: value, m4: value } }));
    },
    enumerable: true
  });

  // Top margin getter/setter
  Object.defineProperty(self, 'topMargin', {
    get(): number {
      // TODO: const shape = proxyToShapeInternal(self);
      // TODO: return nilv(shape.layoutItemMargin?.m1, 0);
      return 0;
    },
    set(value: number): void {
      if (!validSafeNumberInternal(value)) {
        displayNotValid('topMargin', value);
        return;
      }
      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('topMargin', "Plugin doesn't have 'content:write' permission");
        return;
      }
      // TODO: emit(updateLayoutChild(new Set([id]), { layoutItemMargin: { m1: value } }));
    },
    enumerable: true
  });

  // Right margin getter/setter
  Object.defineProperty(self, 'rightMargin', {
    get(): number {
      // TODO: const shape = proxyToShapeInternal(self);
      // TODO: return nilv(shape.layoutItemMargin?.m2, 0);
      return 0;
    },
    set(value: number): void {
      if (!validSafeNumberInternal(value)) {
        displayNotValid('rightMargin', value);
        return;
      }
      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('rightMargin', "Plugin doesn't have 'content:write' permission");
        return;
      }
      // TODO: emit(updateLayoutChild(new Set([id]), { layoutItemMargin: { m2: value } }));
    },
    enumerable: true
  });

  // Bottom margin getter/setter
  Object.defineProperty(self, 'bottomMargin', {
    get(): number {
      // TODO: const shape = proxyToShapeInternal(self);
      // TODO: return nilv(shape.layoutItemMargin?.m3, 0);
      return 0;
    },
    set(value: number): void {
      if (!validSafeNumberInternal(value)) {
        displayNotValid('bottomMargin', value);
        return;
      }
      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('bottomMargin', "Plugin doesn't have 'content:write' permission");
        return;
      }
      // TODO: emit(updateLayoutChild(new Set([id]), { layoutItemMargin: { m3: value } }));
    },
    enumerable: true
  });

  // Left margin getter/setter
  Object.defineProperty(self, 'leftMargin', {
    get(): number {
      // TODO: const shape = proxyToShapeInternal(self);
      // TODO: return nilv(shape.layoutItemMargin?.m4, 0);
      return 0;
    },
    set(value: number): void {
      if (!validSafeNumberInternal(value)) {
        displayNotValid('leftMargin', value);
        return;
      }
      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('leftMargin', "Plugin doesn't have 'content:write' permission");
        return;
      }
      // TODO: emit(updateLayoutChild(new Set([id]), { layoutItemMargin: { m4: value } }));
    },
    enumerable: true
  });

  // Max width getter/setter
  Object.defineProperty(self, 'maxWidth', {
    get(): number {
      // TODO: const shape = proxyToShapeInternal(self);
      // TODO: return shape.layoutItemMaxW;
      return 0;
    },
    set(value: number): void {
      if (!validSafeNumberInternal(value)) {
        displayNotValid('maxWidth', value);
        return;
      }
      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('maxWidth', "Plugin doesn't have 'content:write' permission");
        return;
      }
      // TODO: emit(updateLayoutChild(new Set([id]), { layoutItemMaxW: value }));
    },
    enumerable: true
  });

  // Min width getter/setter
  Object.defineProperty(self, 'minWidth', {
    get(): number {
      // TODO: const shape = proxyToShapeInternal(self);
      // TODO: return shape.layoutItemMinW;
      return 0;
    },
    set(value: number): void {
      if (!validSafeNumberInternal(value)) {
        displayNotValid('minWidth', value);
        return;
      }
      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('minWidth', "Plugin doesn't have 'content:write' permission");
        return;
      }
      // TODO: emit(updateLayoutChild(new Set([id]), { layoutItemMinW: value }));
    },
    enumerable: true
  });

  // Max height getter/setter
  Object.defineProperty(self, 'maxHeight', {
    get(): number {
      // TODO: const shape = proxyToShapeInternal(self);
      // TODO: return shape.layoutItemMaxH;
      return 0;
    },
    set(value: number): void {
      if (!validSafeNumberInternal(value)) {
        displayNotValid('maxHeight', value);
        return;
      }
      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('maxHeight', "Plugin doesn't have 'content:write' permission");
        return;
      }
      // TODO: emit(updateLayoutChild(new Set([id]), { layoutItemMaxH: value }));
    },
    enumerable: true
  });

  // Min height getter/setter
  Object.defineProperty(self, 'minHeight', {
    get(): number {
      // TODO: const shape = proxyToShapeInternal(self);
      // TODO: return shape.layoutItemMinH;
      return 0;
    },
    set(value: number): void {
      if (!validSafeNumberInternal(value)) {
        displayNotValid('minHeight', value);
        return;
      }
      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('minHeight', "Plugin doesn't have 'content:write' permission");
        return;
      }
      // TODO: emit(updateLayoutChild(new Set([id]), { layoutItemMinH: value }));
    },
    enumerable: true
  });

  return self;
}

// Helper functions

function displayNotValid(code: string, message: string): void {
  console.error(`[PENPOT PLUGIN] Value not valid: ${message}. Code: ${code}`);
}

function checkPermission(pluginId: string, permission: string): boolean {
  // TODO: return checkPermission(pluginId, permission);
  return true;
}

function validSafeIntInternal(value: unknown): value is number {
  // TODO: return validSafeInt(value);
  return typeof value === 'number' && Number.isInteger(value);
}

function validSafeNumberInternal(value: unknown): value is number {
  // TODO: return validSafeNumber(value);
  return typeof value === 'number' && !isNaN(value) && isFinite(value);
}

function proxyToShapeInternal(proxy: Record<string, unknown>): any {
  // TODO: return proxyToShape(proxy);
  return {};
}
