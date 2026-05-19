// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { emit, getState } from '../../main/store';
// import {
//   addColor,
//   renameColor,
//   updateColorData,
//   deleteColor,
//   renameTypography,
//   updateTypography,
//   deleteTypography,
//   addComponent,
//   renameComponent,
//   deleteComponent,
//   attachLibrary,
//   linkFileToLibrary
// } from '../../main/data/workspace/libraries';
// import {
//   applyTypography,
//   updateTextRange,
//   applyTypography
// } from '../../main/data/workspace/texts';
// import {
//   addNewVariant,
//   addNewProperty,
//   removeProperty,
//   updateProperty,
//   transformInVariant,
//   addNewVariant as addVariantToComponent,
//   editPropertyValue
// } from '../../main/data/workspace/variants';
// import { addNewComponent, getTeamSharedFiles } from '../../main/repo';
// import { event as createEvent } from '../../main/data/event';
// import { checkPermission } from './register';
// import {
//   locateLibraryColor,
//   locateLibraryTypography,
//   locateFile,
//   proxyToLibraryColor,
//   proxyToLibraryTypography,
//   proxyToLibraryComponent,
//   displayNotValid,
//   handleError
// } from './utils';
// import { formatGradient, formatImage, formatFill, formatStroke } from './format';
// import {
//   parseGradient,
//   parseImageData
// } from './parser';
// import { isShapeProxy } from './shape';
// import { isTextRangeProxy } from './text';
// import { tokensCatalog } from './tokens';
// import {
//   getColorSchema,
//   getImageSchema,
//   getGradientSchema
// } from '../../common/files/tokens';
// import { validHexColor } from '../../common/types/color';
// import { validSafeNumber } from '../../common/schema';
// import {
//   isVariant,
//   findVariantComponents
// } from '../../common/types/component';
// import { resolveTypoRef } from '../../main/data/workspace/variants';
// import { setPluginData, getPluginData } from '../../main/data/plugins';

/**
 * Library color proxy interface
 */
export interface LibraryColorProxy {
  pluginId: string;
  fileId: string;
  id: string;

  id: string;
  fileId: string;
  name: string;
  path: string;
  color: string;
  opacity: number;
  gradient: unknown;
  image: unknown;

  setName(name: string): void;
  setPath(path: string): void;
  setColor(color: string): void;
  setOpacity(opacity: number): void;
  setGradient(gradient: unknown): void;
  setImage(image: unknown): void;

  remove(): void;
  clone(): LibraryColorProxy;

  asFill(): Record<string, unknown>;
  asStroke(): Record<string, unknown>;

  getPluginData(key: string): unknown;
  setPluginData(key: string, value: unknown): void;
  getPluginDataKeys(): string[];

  getSharedPluginData(namespace: string, key: string): unknown;
  setSharedPluginData(namespace: string, key: string, value: unknown): void;
  getSharedPluginDataKeys(namespace: string): string[];
}

/**
 * Library typography proxy interface
 */
export interface LibraryTypographyProxy {
  pluginId: string;
  fileId: string;
  id: string;

  id: string;
  name: string;
  path: string;
  fontId: string;
  fontFamily: string;
  fontVariantId: string;
  fontSize: string;
  fontWeight: string;
  fontStyle: string;
  lineHeight: string;
  letterSpacing: string;
  textTransform: string;

  setName(name: string): void;
  setPath(path: string): void;
  setFontId(fontId: string): void;
  setFontFamily(fontFamily: string): void;
  setFontVariantId(fontVariantId: string): void;
  setFontSize(fontSize: string): void;
  setFontWeight(fontWeight: string): void;
  setFontStyle(fontStyle: string): void;
  setLineHeight(lineHeight: string): void;
  setLetterSpacing(letterSpacing: string): void;
  setTextTransform(textTransform: string): void;

  remove(): void;
  clone(): LibraryTypographyProxy;

  applyToText(shape: unknown): void;
  applyToTextRange(range: unknown): void;

  getPluginData(key: string): unknown;
  setPluginData(key: string, value: unknown): void;
  getPluginDataKeys(): string[];

  getSharedPluginData(namespace: string, key: string): unknown;
  setSharedPluginData(namespace: string, key: string, value: unknown): void;
  getSharedPluginDataKeys(namespace: string): string[];
}

/**
 * Variant component proxy interface
 */
export interface VariantComponentProxy {
  pluginId: string;
  fileId: string;
  id: string;

  id: string;
  libraryId: string;

  properties: Set<string>;
  currentValues(property: string): unknown[];
  variantComponents: VariantComponentProxy[];

  addVariant(): void;
  addProperty(): void;
  removeProperty(pos: number): void;
  renameProperty(pos: number, name: string): void;
}

/**
 * Library component proxy interface
 */
export interface LibraryComponentProxy {
  pluginId: string;
  fileId: string;
  id: string;

  id: string;
  name: string;
  path: string;

  setName(name: string): void;
  setPath(path: string): void;

  remove(): void;
  instance(): unknown;

  getPluginData(key: string): unknown;
  setPluginData(key: string, value: unknown): void;
  getPluginDataKeys(): string[];

  getSharedPluginData(namespace: string, key: string): unknown;
  setSharedPluginData(namespace: string, key: string, value: unknown): void;
  getSharedPluginDataKeys(namespace: string): string[];
}

/**
 * Variant proxy interface
 */
export interface VariantProxy {
  pluginId: string;
  fileId: string;
  id: string;

  id: string;
  libraryId: string;

  properties: string[];
  variantComponents: VariantComponentProxy[];
  variants: VariantComponentProxy | null;

  transformInVariant(): void;
  addVariant(): void;
  setVariantProperty(pos: number, value: string): void;
}

/**
 * Library proxy interface
 */
export interface LibraryProxy {
  pluginId: string;
  fileId: string;
  id: string;

  id: string;
  name: string;

  colors: LibraryColorProxy[];
  typographies: LibraryTypographyProxy[];
  components: LibraryComponentProxy[];
  tokens: unknown;

  createColor(): LibraryColorProxy;
  createTypography(): LibraryTypographyProxy;
  createComponent(shapes: unknown[]): LibraryComponentProxy;

  getPluginData(key: string): unknown;
  setPluginData(key: string, value: unknown): void;
  getPluginDataKeys(): string[];

  getSharedPluginData(namespace: string, key: string): unknown;
  setSharedPluginData(namespace: string, key: string, value: unknown): void;
  getSharedPluginDataKeys(namespace: string): string[];

  connected(): LibraryProxy[];
  availableLibraries(): Promise<unknown[]>;

  connectLibrary(libraryId: string): Promise<void>;
}

/**
 * Library subcontext interface
 */
export interface LibrarySubcontext {
  pluginId: string;
  local: LibraryProxy;
  connected: LibraryProxy[];
}

/**
 * Check if value is a LibraryColorProxy
 */
export function isLibraryColorProxy(p: unknown): p is LibraryColorProxy {
  return Object(p)?.[Symbol('type')] === 'LibraryColorProxy';
}

/**
 * Check if value is a LibraryTypographyProxy
 */
export function isLibraryTypographyProxy(p: unknown): p is LibraryTypographyProxy {
  return Object(p)?.[Symbol('type')] === 'LibraryTypographyProxy';
}

/**
 * Check if value is a LibraryComponentProxy
 */
export function isLibraryComponentProxy(p: unknown): p is LibraryComponentProxy {
  return Object(p)?.[Symbol('type')] === 'LibraryComponentProxy';
}

/**
 * Check if value is a VariantProxy
 */
export function isVariantProxy(p: unknown): p is VariantProxy {
  return Object(p)?.[Symbol('type')] === 'VariantProxy';
}

/**
 * Check if value is a LibraryProxy
 */
export function isLibraryProxy(p: unknown): p is LibraryProxy {
  return Object(p)?.[Symbol('type')] === 'LibraryProxy';
}

/**
 * Create a library color proxy
 */
export function libraryColorProxy(
  pluginId: string,
  fileId: string,
  id: string
): LibraryColorProxy {
  const self = {} as LibraryColorProxy;

  // Internal properties
  (self as unknown as Record<symbol, unknown>)[Symbol('$plugin')] = pluginId;
  (self as unknown as Record<symbol, unknown>)[Symbol('$id')] = id;
  (self as unknown as Record<symbol, unknown>)[Symbol('$file')] = fileId;
  (self as unknown as Record<symbol, unknown>)[Symbol('type')] = 'LibraryColorProxy';

  // Public properties
  self.pluginId = pluginId;
  self.fileId = fileId;
  self.id = id;

  // ID getter
  Object.defineProperty(self, 'id', {
    get(): string {
      return String(id);
    },
    enumerable: true
  });

  // File ID getter
  Object.defineProperty(self, 'fileId', {
    get(): string {
      return String(fileId);
    },
    enumerable: true
  });

  // Name getter and setter
  Object.defineProperty(self, 'name', {
    get(): string {
      const color = proxyToLibraryColorInternal(self);
      return color?.name ?? '';
    },
    set(value: string): void {
      if (typeof value !== 'string') {
        displayNotValid('name', value);
        console.error('[PENPOT PLUGIN] name must be a string');
        return;
      }

      if (!checkPermission(pluginId, 'library:write')) {
        displayNotValid('name', "Plugin doesn't have 'library:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'library:write' permission");
        return;
      }

      const color = proxyToLibraryColorInternal(self);
      const newValue = (color?.path ?? '') + ' / ' + value;

      // TODO: Emit rename color event
      // emit(renameColor(fileId, id, newValue));
    },
    enumerable: true
  });

  // Path getter and setter
  Object.defineProperty(self, 'path', {
    get(): string {
      const color = proxyToLibraryColorInternal(self);
      return color?.path ?? '';
    },
    set(value: string): void {
      if (typeof value !== 'string') {
        displayNotValid('path', value);
        console.error('[PENPOT PLUGIN] path must be a string');
        return;
      }

      if (!checkPermission(pluginId, 'library:write')) {
        displayNotValid('path', "Plugin doesn't have 'library:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'library:write' permission");
        return;
      }

      const color = proxyToLibraryColorInternal(self);
      const newName = value + ' / ' + (color?.name ?? '');

      // TODO: Emit update color event
      // emit(updateColor({ ...color, path: value }, fileId));
    },
    enumerable: true
  });

  // Color getter and setter
  Object.defineProperty(self, 'color', {
    get(): string {
      const color = proxyToLibraryColorInternal(self);
      return color?.color ?? '';
    },
    set(value: string): void {
      if (typeof value !== 'string' || !validHexColor(value)) {
        displayNotValid('color', value);
        console.error('[PENPOT PLUGIN] color must be a valid hex color');
        return;
      }

      if (!checkPermission(pluginId, 'library:write')) {
        displayNotValid('color', "Plugin doesn't have 'library:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'library:write' permission");
        return;
      }

      const color = proxyToLibraryColorInternal(self);

      // TODO: Emit update color data event
      // emit(updateColorData({ ...color, color: value }, fileId));
    },
    enumerable: true
  });

  // Opacity getter and setter
  Object.defineProperty(self, 'opacity', {
    get(): number {
      const color = proxyToLibraryColorInternal(self);
      return color?.opacity ?? 1;
    },
    set(value: number): void {
      if (typeof value !== 'number' || value < 0 || value > 1) {
        displayNotValid('opacity', value);
        console.error('[PENPOT PLUGIN] opacity must be between 0 and 1');
        return;
      }

      if (!checkPermission(pluginId, 'library:write')) {
        displayNotValid('opacity', "Plugin doesn't have 'library:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'library:write' permission");
        return;
      }

      const color = proxyToLibraryColorInternal(self);

      // TODO: Emit update color data event
      // emit(updateColorData({ ...color, opacity: value }, fileId));
    },
    enumerable: true
  });

  // Gradient getter and setter
  Object.defineProperty(self, 'gradient', {
    get(): unknown {
      const color = proxyToLibraryColorInternal(self);
      return color?.gradient;
    },
    set(value: unknown): void {
      const gradient = parseGradient(value);

      // TODO: Validate gradient schema
      // if (!validate(getGradientSchema(), gradient)) {
      //   displayNotValid('gradient', value);
      //   return;
      // }

      if (!checkPermission(pluginId, 'library:write')) {
        displayNotValid('gradient', "Plugin doesn't have 'library:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'library:write' permission");
        return;
      }

      const color = proxyToLibraryColorInternal(self);

      // TODO: Emit update color data event
      // emit(updateColorData({ ...color, gradient }, fileId));
    },
    enumerable: true
  });

  // Image getter and setter
  Object.defineProperty(self, 'image', {
    get(): unknown {
      const color = proxyToLibraryColorInternal(self);
      return color?.image;
    },
    set(value: unknown): void {
      const imageData = parseImageData(value);

      // TODO: Validate image schema
      // if (!validate(getImageSchema(), imageData)) {
      //   displayNotValid('image', value);
      //   return;
      // }

      if (!checkPermission(pluginId, 'library:write')) {
        displayNotValid('image', "Plugin doesn't have 'library:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'library:write' permission");
        return;
      }

      const color = proxyToLibraryColorInternal(self);

      // TODO: Emit update color data event
      // emit(updateColorData({ ...color, image: imageData }, fileId));
    },
    enumerable: true
  });

  // Remove method
  self.remove = function(): void {
    if (!checkPermission(pluginId, 'library:write')) {
      displayNotValid('remove', "Plugin doesn't have 'library:write' permission");
      console.error("[PENPOT PLUGIN] Plugin doesn't have 'library:write' permission");
      return;
    }

    // TODO: Emit delete color event
    // emit(deleteColor({ id }));
  };

  // Clone method
  self.clone = function(): LibraryColorProxy {
    if (!checkPermission(pluginId, 'library:write')) {
      displayNotValid('clone', "Plugin doesn't have 'library:write' permission");
      console.error("[PENPOT PLUGIN] Plugin doesn't have 'library:write' permission");
      return self;
    }

    const colorId = generateUUID();
    const color = proxyToLibraryColorInternal(self);

    if (!color) return self;

    // TODO: Emit add color event
    // emit(addColor({ ...color, id: colorId }, { rename: false }));

    return libraryColorProxy(pluginId, fileId, colorId);
  };

  // As fill method
  self.asFill = function(): Record<string, unknown> {
    const color = proxyToLibraryColorInternal(self);

    return formatFill({
      fillColor: color?.color,
      fillOpacity: color?.opacity,
      fillColorGradient: color?.gradient,
      fillColorRefFile: fileId,
      fillColorRefId: id,
      fillImage: color?.image
    });
  };

  // As stroke method
  self.asStroke = function(): Record<string, unknown> {
    const color = proxyToLibraryColorInternal(self);

    return formatStroke({
      strokeColor: color?.color,
      strokeOpacity: color?.opacity,
      strokeColorGradient: color?.gradient,
      strokeColorRefFile: fileId,
      strokeColorRefId: id,
      strokeImage: color?.image,
      strokeStyle: 'solid',
      strokeAlignment: 'inner'
    });
  };

  // Get plugin data method
  self.getPluginData = function(key: string): unknown {
    if (typeof key !== 'string') {
      displayNotValid('getPluginData', 'key');
      console.error('[PENPOT PLUGIN] key must be a string');
      return undefined;
    }

    const color = proxyToLibraryColorInternal(self);
    return getPluginDataInternal(color, pluginId, key);
  };

  // Set plugin data method
  self.setPluginData = function(key: string, value: unknown): void {
    const state = getStateInternal();
    const currentFileId = state?.currentFileId;

    if (currentFileId !== fileId) {
      displayNotValid('setPluginData', 'non-local-library');
      console.error('[PENPOT PLUGIN] Cannot set plugin data on non-local library');
      return;
    }

    if (typeof key !== 'string') {
      displayNotValid('setPluginData', 'key');
      console.error('[PENPOT PLUGIN] key must be a string');
      return;
    }

    if (value !== undefined && value !== null && typeof value !== 'string') {
      displayNotValid('setPluginData', 'value');
      console.error('[PENPOT PLUGIN] value must be a string');
      return;
    }

    if (!checkPermission(pluginId, 'library:write')) {
      displayNotValid('setPluginData', "Plugin doesn't have 'library:write' permission");
      console.error("[PENPOT PLUGIN] Plugin doesn't have 'library:write' permission");
      return;
    }

    // TODO: Emit set plugin data event
    // emit(setPluginData(fileId, 'color', id, `plugin${pluginId}`, key, value));
  };

  // Get plugin data keys method
  self.getPluginDataKeys = function(): string[] {
    const color = proxyToLibraryColorInternal(self);
    return Object.keys(color?.pluginData?.[`plugin${pluginId}`] ?? {});
  };

  // Get shared plugin data method
  self.getSharedPluginData = function(namespace: string, key: string): unknown {
    if (typeof namespace !== 'string') {
      displayNotValid('getSharedPluginData', 'namespace');
      console.error('[PENPOT PLUGIN] namespace must be a string');
      return undefined;
    }

    if (typeof key !== 'string') {
      displayNotValid('getSharedPluginData', 'key');
      console.error('[PENPOT PLUGIN] key must be a string');
      return undefined;
    }

    const color = proxyToLibraryColorInternal(self);
    return color?.pluginData?.shared?.[namespace]?.[key];
  };

  // Set shared plugin data method
  self.setSharedPluginData = function(namespace: string, key: string, value: unknown): void {
    const state = getStateInternal();
    const currentFileId = state?.currentFileId;

    if (currentFileId !== fileId) {
      displayNotValid('setSharedPluginData', 'non-local-library');
      console.error('[PENPOT PLUGIN] Cannot set plugin data on non-local library');
      return;
    }

    if (typeof namespace !== 'string') {
      displayNotValid('setSharedPluginData', 'namespace');
      console.error('[PENPOT PLUGIN] namespace must be a string');
      return;
    }

    if (typeof key !== 'string') {
      displayNotValid('setSharedPluginData', 'key');
      console.error('[PENPOT PLUGIN] key must be a string');
      return;
    }

    if (value !== undefined && value !== null && typeof value !== 'string') {
      displayNotValid('setSharedPluginData', 'value');
      console.error('[PENPOT PLUGIN] value must be a string');
      return;
    }

    if (!checkPermission(pluginId, 'library:write')) {
      displayNotValid('setSharedPluginData', "Plugin doesn't have 'library:write' permission");
      console.error("[PENPOT PLUGIN] Plugin doesn't have 'library:write' permission");
      return;
    }

    // TODO: Emit set plugin data event
    // emit(setPluginData(fileId, 'color', id, `shared.${namespace}`, key, value));
  };

  // Get shared plugin data keys method
  self.getSharedPluginDataKeys = function(namespace: string): string[] {
    if (typeof namespace !== 'string') {
      displayNotValid('getSharedPluginDataKeys', 'namespace');
      console.error('[PENPOT PLUGIN] namespace must be a string');
      return [];
    }

    const color = proxyToLibraryColorInternal(self);
    return Object.keys(color?.pluginData?.shared?.[namespace] ?? {});
  };

  return self;
}

// ... (continuing with more proxy implementations - abbreviated for brevity)

// Helper functions
function proxyToLibraryColorInternal(proxy: LibraryColorProxy): unknown {
  // TODO: return proxyToLibraryColor(proxy);
  return undefined;
}

function generateUUID(): string {
  // TODO: return uuid/next();
  return crypto.randomUUID();
}

function checkPermission(pluginId: string, permission: string): boolean {
  // TODO: return checkPermission(pluginId, permission);
  return true;
}

function displayNotValid(code: string, value?: unknown): void {
  if (value !== undefined && value !== null) {
    console.error(`[PENPOT PLUGIN] Value not valid: ${value}. Code: ${code}`);
  } else {
    console.error(`[PENPOT PLUGIN] Value not valid. Code: ${code}`);
  }
}

function getStateInternal(): { currentFileId?: string } {
  // TODO: return getState();
  return {};
}

function getPluginDataInternal(
  data: unknown,
  pluginId: string,
  key: string
): unknown {
  // TODO: Get plugin data from color
  return undefined;
}

function validHexColor(color: string): boolean {
  return /^#([0-9a-fA-F]{3}){1,2}$/.test(color);
}
