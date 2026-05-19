// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import {
//   updateLayout,
//   addLayoutTrack,
//   changeLayoutTrack,
//   updateGridCell,
//   moveShapesToFrame
// } from '../../main/data/workspace/shape-layout';
// import { emit } from '../../main/store';
// import { checkPermission, displayNotValid, isShapeProxy, shapeProxy } from './shape';
// import { parseId } from './parser';
// import { validSafeInt } from '../../common/schema';

/**
 * Grid layout proxy interface
 */
export interface GridLayoutProxy {
  pluginId: string;
  fileId: string;
  pageId: string;
  id: string;

  dir: 'row' | 'column';
  rows: string[][];
  columns: string[];
  alignItems: string[];
  alignContent: string;
  justifyItems: string[];
  rowGap: number;
  columnGap: number;
  verticalPadding: [number, number, number, number];
  horizontalPadding: [number, number, number, number];
  topPadding: number;
  rightPadding: number;
  bottomPadding: number;
  leftPadding: number;

  setDir(value: 'row' | 'column'): void;
  setRows(tracks: string[]): void;
  setColumns(tracks: string[]): void;
  setAlignItems(value: string): void;
  setAlignContent(value: string): void;
  setJustifyItems(value: string): void;
  setRowGap(value: number): void;
  setColumnGap(value: number): void;
  setVerticalPadding(p1: number, p2: number, p3: number, p4: number): void;
  setHorizontalPadding(p2: number, p3: number, p4: number): void;
  setTopPadding(p1: number): void;
  setRightPadding(p2: number, p3: number, p4: number): void;
  setBottomPadding(p3: number, p4: number): void;
  setLeftPadding(p4: number): void;

  addRow(type: string, value: number): void;
  addColumn(type: string, value: number): void;

  removeRow(index: number): void;
  removeColumn(index: number): void;

  setColumn(index: number, type: string, value: number): void;
  setRow(index: number, type: string, value: number): void;

  appendChild(child: unknown, row: number, column: number): void;

  remove(): void;
}

/**
 * Grid cell proxy interface
 */
export interface GridCellProxy {
  pluginId: string;
  fileId: string;
  pageId: string;
  id: string;

  row: number;
  column: number;

  areaName?: string;
  position: { x: number; y: number };
  rowSpan?: number;
  columnSpan?: number;
  absolute: boolean;

  setPosition(value: { x: number; y: number }): void;

  setRowSpan(value: number): void;
  setColumnSpan(value: number): void;

  setAreaName(value: string): void;

  setAlignSelf(value: string): void;
  setJustifySelf(value: string);

  setRowGap(value: number): void;
  setColumnGap(value: number): void;
  setVerticalPadding(p1: number, p2: number, p3: number, p4: number): void;
  setHorizontalPadding(p2: number, p3: number, p4: number): void;
  setTopPadding(p1: number): void;
  setRightPadding(p2: number, p3: number, p4: number): void;
  setBottomPadding(p3: number, p4: number): void;
  setLeftPadding(p4: number): void;
}

  setWidth(value: number): void;
  setHeight(value: number): void;
  setMaxWidth(value: number): void;
  setMaxHeight(value: number): void;
  setMinWidth(value: number): void;
  setMinHeight(value: number): void;
}

  setHorizontalAlignment(value: 'start' | 'center' | 'end' | 'stretch'): void;
  setVerticalAlignment(value: 'start' | 'center' | 'end' | 'stretch'): void;
}

  setHorizontalSizing(value: 'fixed' | 'percent' | 'flex'): void;
  setVerticalSizing(value: 'fixed' | 'percent' | 'flex'): void;
}

  remove(): void;
}

/**
 * Check if value is a GridLayoutProxy
 */
export function isGridLayoutProxy(p: unknown): p is GridLayoutProxy {
  return Object(p)?.[Symbol('type')] === 'GridLayoutProxy';
}

/**
 * Check if value is a GridCellProxy
 */
export function isGridCellProxy(p: unknown): p is GridCellProxy {
  return Object(p)?.[Symbol('type')] === 'GridCellProxy';
}

/**
 * Grid direction type
 */
export type GridDirection = 'row' | 'column';

/**
 * Create a grid layout proxy
 */
export function gridLayoutProxy(
  pluginId: string,
  fileId: string,
  pageId: string,
  id: string
): GridLayoutProxy {
  const self = {} as GridLayoutProxy;

  // Internal properties
  (self as unknown as Record<symbol, unknown>)[Symbol('$plugin')] = pluginId;
  (self as unknown as Record<symbol, unknown>)[Symbol('$id')] = id;
  (self as unknown as Record<symbol, unknown>)[Symbol('$file')] = fileId;
  (self as unknown as Record<symbol, unknown>)[Symbol('$page')] = pageId;
  (self as unknown as Record<symbol, unknown>)[Symbol('type')] = 'GridLayoutProxy';

  // Public properties
  self.pluginId = pluginId;
  self.fileId = fileId;
  self.pageId = pageId;
  self.id = id;

  // Dir getter and setter
  Object.defineProperty(self, 'dir', {
    get(): GridDirection {
      // TODO: return u/proxy->shape :layout-grid-dir (name);
      return 'row';
    },
    set(value: GridDirection): void {
      if (!['row', 'column'].includes(value)) {
        displayNotValid('dir', value);
        console.error('[PENPOT PLUGIN] dir must be "row" or "column"');
        return;
      }

      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('dir', "Plugin doesn't have 'content:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
        return;
      }

      // TODO: Emit update layout grid dir event
      // emit(updateLayout({ id, layoutGridDir: value }));
    },
    enumerable: true
  });

  // Rows getter and setter
  Object.defineProperty(self, 'rows', {
    get(): string[] {
      // TODO: return u/proxy->shape :layout-grid-rows (name);
      return [];
    },
    set(tracks: string[]): void {
      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('rows', 'Plugin doesn't have 'content:write' permission');
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
        return;
      }

      // TODO: Emit update layout grid rows event
      // emit(updateLayout({ id, layoutGridRows: tracks }));
    },
    enumerable: true
  });

  // Columns getter and setter
  Object.defineProperty(self, 'columns', {
    get(): string[] {
      // TODO: return u/proxy->shape :layout-grid-columns (name);
      return [];
    },
    set(tracks: string[]): void {
      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('columns', 'Plugin doesn't have 'content:write' permission');
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
        return;
      }

      // TODO: Emit update layout grid columns event
      // emit(updateLayout({ id, layoutGridColumns: tracks }));
    },
    enumerable: true
  });

  // Align items getter and setter
  Object.defineProperty(self, 'alignItems', {
    get(): string {
      // TODO: return u/proxy->shape :layout-align-items (name);
      return '';
    },
    set(value: string): void {
      if (!['start', 'center', 'end', 'space-between'].includes(value)) {
        displayNotValid('alignItems', value);
        console.error('[PENPOT PLUGIN] alignItems must be "start", "center", "end", or "space-between"');
        return;
      }

      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('alignItems', "Plugin doesn't have 'content:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
        return;
      }

      // TODO: Emit update layout align items event
      // emit(updateLayout({ id, layoutAlignItems: value }));
    },
    enumerable: true
  });

  // Align content getter and setter
  Object.defineProperty(self, 'alignContent', {
    get(): string {
      // TODO: return u/proxy->shape :layout-align-content (name);
      return '';
    },
    set(value: string): void {
      if (!['start', 'center', 'end', 'stretch'].includes(value)) {
        displayNotValid('alignContent', value);
        console.error('[PENPOT PLUGIN] alignContent must be "start", "center", "end", or "stretch"');
        return;
      }

      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('alignContent', "Plugin doesn't have 'content:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
        return;
      }

      // TODO: Emit update layout align content event
      // emit(updateLayout({ id, layoutAlignContent: value }));
    },
    enumerable: true
  });

  // Justify items getter and setter
  Object.defineProperty(self, 'justifyItems', {
    get(): string {
      // TODO: return u/proxy->shape :layout-justify-items (name);
      return '';
    },
    set(value: string): void {
      if (!['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly'].includes(value)) {
        displayNotValid('justifyItems', value);
        console.error('[PENPOT PLUGIN] justifyItems must be "start", "center", "end", "space-between", "space-around", or "space-evenly"');
        return;
      }

      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('justifyItems', 'Plugin doesn't have 'content:write' permission');
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
        return;
      }

      // TODO: Emit update layout justify items event
      // emit(updateLayout({ id, layoutJustifyItems: value }));
    },
    enumerable: true
  });

  // Row gap getter and setter
  Object.defineProperty(self, 'rowGap', {
    get(): number {
      // TODO: return u/proxy->shape :layout-gap :row-gap (name) ?? 0;
      return 0;
    },
    set(value: number): void {
      if (!validSafeInt(value)) {
        displayNotValid('rowGap', value);
        console.error('[PENPOT PLUGIN] rowGap must be a valid integer');
        return;
      }

      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('rowGap', "Plugin doesn't have 'content:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
        return;
      }

      // TODO: Emit update layout gap event
      // emit(updateLayout({ id, layoutGap: { rowGap: value }}));
    },
    enumerable: true
  });

  // Column gap getter and setter
  Object.defineProperty(self, 'columnGap', {
    get(): number {
      // TODO: return u/proxy->shape :layout-gap :column-gap (name) ?? 0;
      return 0;
    },
    set(value: number): void {
      if (!validSafeInt(value)) {
        displayNotValid('columnGap', value);
        console.error('[PENPOT PLUGIN] columnGap must be a valid integer');
        return;
      }

      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('columnGap', "Plugin doesn't have 'content:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
        return;
      }

      // TODO: Emit update layout gap event
      // emit(updateLayout({ id, layoutGap: { columnGap: value }}));
    },
    enumerable: true
  });

  // Vertical padding getter and setter
  Object.defineProperty(self, 'verticalPadding', {
    get(): [number, number, number, number] {
      // TODO: return u/proxy->shape :layout-padding :p1 (name) ?? [0, 0, 0, 0];
      return [0, 0, 0, 0];
    },
    set(p1: number, p2: number, p3: number, p4: number): void {
      const values = [p1, p2, p3, p4];

      if (!values.every(v => validSafeInt(v))) {
        displayNotValid('verticalPadding', values);
        console.error('[PENPOT PLUGIN] All vertical padding values must be valid integers');
        return;
      }

      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('verticalPadding', "Plugin doesn't have 'content:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
        return;
      }

      // TODO: Emit update layout vertical padding event
      // emit(updateLayout({ id, layoutPadding: { p1, p2, p3, p4: [p1, p2, p3, p4] }}));
    },
    enumerable: true
  });

  // Horizontal padding getter and setter
  Object.defineProperty(self, 'horizontalPadding', {
    get(): [number, number, number, number] {
      // TODO: return u/proxy->shape :layout-padding :p2 (name) ?? [0, 0, 0, 0];
      return [0, 0, 0, 0];
    },
    set(p2: number, p3: number, p4: number): void {
      const values = [p2, p3, p4];

      if (!values.every(v => validSafeInt(v))) {
        displayNotValid('horizontalPadding', values);
        console.error('[PENPOT PLUGIN] All horizontal padding values must be valid integers');
        return;
      }

      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('horizontalPadding', "Plugin doesn't have 'content:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
        return;
      }

      // TODO: Emit update layout horizontal padding event
      // emit(updateLayout({ id, layoutPadding: { p2, p3, p4: [p2, p3, p4] }}));
    },
    enumerable: true
  });

  // Top padding getter and setter
  Object.defineProperty(self, 'topPadding', {
    get(): number {
      // TODO: return u/proxy->shape :layout-padding :p1 (name) ?? 0;
      return 0;
    },
    set(p1: number): void {
      if (!validSafeInt(p1)) {
        displayNotValid('topPadding', p1);
        console.error('[PENPOT PLUGIN] topPadding must be a valid integer');
        return;
      }

      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('topPadding', "Plugin doesn't have 'content:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
        return;
      }

      // TODO: Emit update layout top padding event
      // emit(updateLayout({ id, layoutPadding: { p1 }}));
    },
    enumerable: true
  });

  // Right padding getter and setter
  Object.defineProperty(self, 'rightPadding', {
    get(): number {
      // TODO: return u/proxy->shape :layout-padding :p2 (name) ?? 0;
      return 0;
    },
    set(p2: number): void {
      if (!validSafeInt(p2)) {
        displayNotValid('rightPadding', p2);
        console.error('[PENPOT PLUGIN] rightPadding must be a valid integer');
        return;
      }

      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('rightPadding', "Plugin doesn't have 'content:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
        return;
      }

      // TODO: Emit update layout right padding event
      // emit(updateLayout({ id, layoutPadding: { p2 }}));
    },
    enumerable: true
  });

  // Bottom padding getter and setter
  Object.defineProperty(self, 'bottomPadding', {
    get(): number {
      // TODO: return u/proxy->shape :layout-padding :p3 (name) ?? 0;
      return 0;
    },
    set(p3: number): void {
      if (!validSafeInt(p3)) {
        displayNotValid('bottomPadding', p3);
        console.error('[PENPOT PLUGIN] bottomPadding must be a valid integer');
        return;
      }

      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('bottomPadding', "Plugin doesn't have 'content:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
        return;
      }

      // TODO: Emit update layout bottom padding event
      // emit(updateLayout({ id, layoutPadding: { p3 }}));
    },
    enumerable: true
  });

  // Left padding getter and setter
  Object.defineProperty(self, 'leftPadding', {
    get(): number {
      // TODO: return u/proxy->shape :layout-padding :p4 (name) ?? 0;
      return 0;
    },
    set(p4: number): void {
      if (!validSafeInt(p4)) {
        displayNotValid('leftPadding', p4);
        console.error('[PENPOT PLUGIN] leftPadding must be a valid integer');
        return;
      }

      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('leftPadding', "Plugin doesn't have 'content:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
        return;
      }

      // TODO: Emit update layout left padding event
      // emit(updateLayout({ id, layoutPadding: { p4 }}));
    },
    enumerable: true
  });

  // Add row method
  self.addRow = function(type: string, value: number): void {
    if (!['percent', 'flex', 'fixed'].includes(type)) {
      displayNotValid('addRow-type', type);
      console.error('[PENPOT PLUGIN] Row type must be "percent", "flex", or "fixed"');
      return;
    }

    if (!validSafeNumber(value)) {
      displayNotValid('addRow-value', value);
      console.error('[PENPOT PLUGIN] Value must be a valid number');
      return;
    }

    if (!checkPermission(pluginId, 'content:write')) {
      displayNotValid('addRow', "Plugin doesn't have 'content:write' permission");
      console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
      return;
    }

    // TODO: Emit add layout track event
    // emit(addLayoutTrack({ id, row: { type, value }));
  };

    // TODO: Update self.rows
  // self.rows = [...self.rows, `${type} ${value}`];
  };

  // Add column method
  self.addColumn = function(type: string, value: number): void {
    if (!['percent', 'flex', 'fixed'].includes(type)) {
      displayNotValid('addColumn-type', type);
        console.error('[PENPOT PLUGIN] Column type must be "percent", "flex", or "fixed"');
        return;
      }

    if (!validSafeNumber(value)) {
      displayNotValid('addColumn-value', value);
      console.error('[PENPOT PLUGIN] Value must be a valid number');
        return;
      }

    if (!checkPermission(pluginId, 'content:write')) {
      displayNotValid('addColumn', "Plugin doesn't have 'content:write' permission");
      console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
        return;
      }

    // TODO: Emit add layout track event
    // emit(addLayoutTrack({ id, column: { type, value }));
    };

    // TODO: Update self.columns
    // self.columns = [...self.columns, `${type} ${value}`];
  };

  // Remove row method
  self.removeRow = function(index: number): void {
    if (!checkPermission(pluginId, 'content:write')) {
      displayNotValid('removeRow', "Plugin doesn't have 'content:write' permission");
      console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
      return;
    }

    // TODO: Emit remove layout track event
    // emit(removeLayoutTrack({ id, row: index }));
  };

    // Remove column method
  self.removeColumn = function(index: number): void {
    if (!checkPermission(pluginId, 'content:write')) {
      displayNotValid('removeColumn', "Plugin doesn't have 'content:write' permission");
      console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
      return;
    }

    // TODO: Emit remove layout track event
    // emit(removeLayoutTrack({ id, column: index }));
  };

  // Set row method
  self.setRow = function(index: number, type: string, value: number): void {
    if (!validSafeInt(index)) {
      displayNotValid('setRow-index', index);
      console.error('[PENPOT PLUGIN] Row index must be a valid integer');
      return;
    }

    if (!checkPermission(pluginId, 'content:write')) {
      displayNotValid('setRow', "Plugin doesn't have 'content:write' permission");
      console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
      return;
    }

    // TODO: Emit change layout track event
    // emit(changeLayoutTrack({ id, row: { index, type, value }));
  };

  // Set column method
  self.setColumn = function(index: number, type: string, value: number): void {
    if (!validSafeInt(index)) {
      displayNotValid('setColumn-index', index);
      console.error('[PENPOT PLUGIN] Column index must be a valid integer');
      return;
    }

    if (!checkPermission(pluginId, 'content:write')) {
      displayNotValid('setColumn', "Plugin doesn't have 'content:write' permission");
      console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
      return;
    }

    // TODO: Emit change layout track event
    // emit(changeLayoutTrack({ id, column: index, type, value }));
  };

  // Append child method
  self.appendChild = function(child: unknown, row: number, column: number): void {
    if (!isShapeProxy(child)) {
      displayNotValid('appendChild-child', child);
      console.error('[PENPOT PLUGIN] Child must be a shape proxy');
      return;
    }

    const childId = (child as Record<string, unknown>)['$id'];
    const rowNum = row ?? 0;
    const colNum = column ?? 0;

    if (rowNum < 0 || colNum < 0) {
      displayNotValid('appendChild-row', 'Row and column must be positive');
      console.error('[PENPOT PLUGIN] Row and column must be positive');
      return;
    }

    // TODO: Emit move shapes to frame event
    // emit(moveShapesToFrame({ childId }, { row: rowNum, column: colNum }));
  };

  // Remove method
  self.remove = function(): void {
    if (!checkPermission(pluginId, 'content:write')) {
      displayNotValid('remove', 'Plugin doesn't have 'content:write' permission');
      console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
      return;
    }

    // TODO: Emit remove layout event
    // emit(removeLayout({ id }));
  };

  return self;
}
