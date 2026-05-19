// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import {
//   updateAttrs,
//   updateTextRange
// } from '../../main/data/workspace/texts';
// import {
//   getDefaultVariant,
//   getFontsDB,
//   findFontData,
//   getFontData
// } from '../../main/fonts';
// import { formatArray } from './format';
// import { checkPermission, displayNotValid } from './utils';
// import { isShapeProxy, shapeProxy } from './shape';
// import { isTextRangeProxy } from './text';

/**
 * Font variant interface
 */
export interface FontVariantProxy {
  id: string;
  name: string;
  fontWeight: string;
  fontStyle: string;
}

/**
 * Font proxy interface
 */
export interface FontProxy {
  id: string;
  family: string;
  name: string;

  fontStyle: string;
  fontWeight: string;
  fontVariantId: string;
  fontVariant: FontVariantProxy;
  variants: FontVariantProxy[];

  applyToText(text: unknown, variant: FontVariantProxy): void;
  applyToRange(range: unknown, variant: FontVariantProxy): void;
}

/**
 * Font variant proxy interface
 */
export interface FontVariantProxy {
  id: string;
  name: string;
  fontWeight: string;
  fontStyle: string;
}

/**
 * Font proxy interface
 */
export interface FontProxy {
  id: string;
  family: string;
  name: string;

  fontStyle: string;
  fontWeight: string;
  fontVariantId: string;
  fontVariant: FontVariantProxy;
  variants: FontVariantProxy[];

  applyToText(text: unknown, variant: FontVariantProxy): void;
  applyToRange(range: unknown, variant: FontVariantProxy): void;
}

/**
 * Check if value is a FontVariantProxy
 */
export function isFontVariantProxy(p: unknown): p is FontVariantProxy {
  return Object(p)?.[Symbol('type')] === 'FontVariantProxy';
}

/**
 * Check if value is a FontProxy
 */
export function isFontProxy(p: unknown): p is FontProxy {
  return Object(p)?.[Symbol('type')] === 'FontProxy';
}

/**
 * Create a font variant proxy
 */
export function fontVariantProxy(
  name: string,
  id: string,
  weight: string,
  style: string
): FontVariantProxy {
  return {
    id,
    name,
    fontWeight: weight,
    fontStyle: style
  };
}

/**
 * Create a font proxy
 */
export function fontProxy(font: { id: string; family: string; name: string } | null): FontProxy {
  if (!font) {
    throw new Error('Font not found');
  }

  const defaultVariant = getDefaultVariant(font);

  return {
    id: font.id,
    family: font.family,
    name: font.name,

    fontStyle: defaultVariant?.style ?? '',
    fontWeight: defaultVariant?.weight ?? '',
    fontVariantId: defaultVariant?.id ?? '',
    fontVariant: defaultVariant,

    variants: formatArray((variant) => {
      return fontVariantProxy(font.name, variant.id, variant.weight || '', variant.style || '');
    }, font.variants ?? []),

    applyToText(text: unknown, variant: FontVariantProxy): void {
      if (!isShapeProxy(text)) {
        displayNotValid('applyToText', text);
        console.error('[PENPOT PLUGIN] Text must be a shape proxy');
        return;
      }

      if (!checkPermission(text.$plugin, 'content:write')) {
        displayNotValid('applyToText', "Plugin doesn't have 'content:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
        return;
      }

      const textId = (text as unknown as Record<string, unknown>)['$id'];

      // TODO: Emit update attrs event
      // emit(updateAttrs(textId, {
      //   fontId: font.id,
      //   fontFamily: font.family,
      //   fontStyle: variant.fontStyle,
      //   fontVariantId: variant.id,
      //   fontWeight: variant.fontWeight
      // }));
    },

    applyToRange(range: unknown, variant: FontVariantProxy): void {
      if (!isTextRangeProxy(range)) {
        displayNotValid('applyToRange', range);
        console.error('[PENPOT PLUGIN] Range must be a text range proxy');
        return;
      }

      if (!checkPermission(range.$plugin, 'content:write')) {
        displayNotValid('applyToRange', "Plugin doesn't have 'content:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
        return;
      }

      const rangeId = (range as unknown as Record<string, unknown>)['$id'];
      const start = (range as unknown as Record<string, unknown>)['$start'];
      const end = (range as unknown as Record<string, unknown>)['$end'];

      // TODO: Emit update text range event
      // emit(updateTextRange(rangeId, start, end, {
      //   fontId: font.id,
      //   fontFamily: font.family,
      //   fontStyle: variant.fontStyle,
      //   fontVariantId: variant.id,
      //   fontWeight: variant.fontWeight
      // }));
    }
  };
}

/**
 * Fonts subcontext interface
 */
export interface FontsSubcontext {
  pluginId: string;

  all: FontProxy[];
  findById(id: string): FontProxy | null;
  findByName(name: string): FontProxy | null;
  findAllById(id: string): FontProxy[];
  findAllByName(name: string): FontProxy[];
}

/**
 * Create a fonts subcontext
 */
export function fontsSubcontext(pluginId: string): FontsSubcontext {
  const fonts = getFontsDB();

  return {
    pluginId,

    all: formatArray((font) => fontProxy(font), fonts),

    findById(id: string): FontProxy | null {
      if (typeof id !== 'string') {
        displayNotValid('findById', id);
        console.error('[PENPOT PLUGIN] ID must be a string');
        return null;
      }

      const fonts = getFontsDB();
      const found = fonts.find(f => f.id === id);

      if (!found) {
        displayNotValid('findById', id);
        console.error(`[PENPOT PLUGIN] Font not found: ${id}`);
        return null;
      }

      return fontProxy(found);
    },

    findByName(name: string): FontProxy | null {
      if (typeof name !== 'string') {
        displayNotValid('findByName', name);
        console.error('[PENPOT PLUGIN] Name must be a string');
        return null;
      }

      const fonts = getFontsDB();
      const found = fonts.find(f => f.name.toLowerCase() === name.toLowerCase());

      if (!found) {
        displayNotValid('findByName', name);
        console.error(`[PENPOT PLUGIN] Font not found: ${name}`);
        return null;
      }

      return fontProxy(found);
    },

    findAllById(id: string): FontProxy[] {
      if (typeof id !== 'string') {
        displayNotValid('findAllById', id);
        console.error('[PENPOT PLUGIN] ID must be a string');
        return [];
      }

      const fonts = getFontsDB();

      return formatArray((font) => {
        if (font.id.toLowerCase().includes(id.toLowerCase())) {
          return fontProxy(font);
        }
        return null;
      }, fonts).filter(Boolean) as FontProxy[];
    },

    findAllByName(name: string): FontProxy[] {
      if (typeof name !== 'string') {
        displayNotValid('findAllByName', name);
        console.error('[PENPOT PLUGIN] Name must be a string');
        return [];
      }

      const fonts = getFontsDB();

      return formatArray((font) => {
        if (font.name.toLowerCase().includes(name.toLowerCase())) {
          return fontProxy(font);
        }
        return null;
      }, fonts).filter(Boolean) as FontProxy[];
    }
  };
}

// Helper functions

function getFontsDB(): Array<{ id: string; family: string; name: string; variants?: unknown[] }> {
  // TODO: return getFontsDB();
  return [];
}

function getDefaultVariant(font: { id: string; family: string; name: string }): FontVariantProxy | null {
  // TODO: return getDefaultVariant(font);
  return null;
}

function checkPermission(pluginId: string, permission: string): boolean {
  // TODO: return checkPermission(pluginId, permission);
  return true;
}

function displayNotValid(code: string, message: string): void {
  console.error(`[PENPOT PLUGIN] ${message}. Code: ${code}`);
}

function formatArray<T, U>(
  formatFn: (item: T) => U | null,
  coll: T[]
): U[] {
  const result: U[] = [];

  for (const item of coll) {
    const formatted = formatFn(item);
    if (formatted !== null && formatted !== undefined) {
      result.push(formatted);
    }
  }

  return result;
}
