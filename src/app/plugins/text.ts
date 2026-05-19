// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { proxyToShape, proxyToLibraryTypography, displayNotValid, mixedValue } from './utils';
// import { checkPermission } from './register';
// import { emit } from '../../main/store';
// import { updateShapes, updateTextRange, updateAttrs, updateEditorState } from '../../main/data/workspace';
// import { updateAttrs as updateTextAttrs } from '../../main/data/workspace/texts';
// import { getFontData, findFontData, getDefaultVariant, getVariant, findVariant } from '../../main/fonts';
// import { contentToText, changeText, contentToTextStyles } from '../../common/types/text';
// import { importContent, createEditorState } from '../../util/text-editor';
// import { parseFills, validateFill } from './parser';
// import { formatFills } from './format';
// import { trim } from './strings';

// Regex patterns for text property validation
const FONT_SIZE_REGEX = /^\d*\.?\d*$/;
const LINE_HEIGHT_REGEX = /^\d*\.?\d*$/;
const LETTER_SPACING_REGEX = /^\d*\.?\d*$/;
const TEXT_TRANSFORM_REGEX = /^(uppercase|capitalize|lowercase|none)$/;
const TEXT_DECORATION_REGEX = /^(underline|line-through|none)$/;
const TEXT_DIRECTION_REGEX = /^(ltr|rtl)$/;
const TEXT_ALIGN_REGEX = /^(left|center|right|justify)$/;
const VERTICAL_ALIGN_REGEX = /^(top|center|bottom)$/;

// Text grow types
export type TextGrowType = 'auto-width' | 'auto-height' | 'fixed';

/**
 * Text style data
 */
export interface TextStyleData {
  fontId?: string;
  fontFamily?: string;
  fontVariantId?: string;
  fontStyle?: string;
  fontWeight?: string;
  fontSize?: string;
  lineHeight?: string;
  letterSpacing?: string;
  textTransform?: string;
  textDecoration?: string;
  direction?: string;
  textAlign?: string;
  verticalAlign?: string;
  fills?: unknown[];
}

/**
 * Text content with styles
 */
export interface TextContentWithStyles {
  text: string;
  fontId?: string;
  fontFamily?: string;
  fontVariantId?: string;
  fontStyle?: string;
  fontWeight?: string;
  fontSize?: string;
  lineHeight?: string;
  letterSpacing?: string;
  textTransform?: string;
  textDecoration?: string;
  direction?: string;
  textAlign?: string;
  fills?: unknown[];
}

/**
 * Text Range proxy interface
 */
export interface TextRangeProxy {
  pluginId: string;
  fileId: string;
  pageId: string;
  id: string;
  start: number;
  end: number;

  shape: unknown;
  characters: string;
  fontId: string;
  fontFamily: string;
  fontVariantId: string;
  fontSize: string;
  fontWeight: string;
  fontStyle: string;
  lineHeight: string;
  letterSpacing: string;
  textTransform: string;
  textDecoration: string;
  direction: string;
  align: string;
  fills: unknown[];

  setFontId(value: string): void;
  setFontFamily(value: string): void;
  setFontVariantId(value: string): void;
  setFontSize(value: string): void;
  setFontWeight(value: string): void;
  setFontStyle(value: string): void;
  setLineHeight(value: string): void;
  setLetterSpacing(value: string): void;
  setTextTransform(value: string): void;
  setTextDecoration(value: string): void;
  setDirection(value: string): void;
  setAlign(value: string): void;
  setFills(value: unknown[]): void;

  applyTypography(typography: unknown): void;
}

/**
 * Check if value is a TextRangeProxy
 */
export function isTextRangeProxy(p: unknown): p is TextRangeProxy {
  return Object(p)?.[Symbol('type')] === 'TextRange';
}

/**
 * Extract text range styles from content
 */
function contentRangeToTextStyles(
  content: unknown,
  start: number,
  end: number
): TextContentWithStyles[] {
  // TODO: Implement content to text+styles extraction
  // const styles = contentToTextStyles(content);
  // let acc = 0;
  // const result: TextContentWithStyles[] = [];
  // let taking = false;
  //
  // for (const style of styles) {
  //   const from = acc;
  //   const to = acc + style.text.length;
  //   taking = taking || (from <= start && start < to);
  //
  //   if (taking) {
  //     const text = style.text.substring(Math.max(0, start - acc), end - acc);
  //     if (text) {
  //       result.push({ ...style, text });
  //     }
  //   }
  //
  //   acc = to;
  //   if (from > end) break;
  // }
  //
  // return result;

  return [];
}

/**
 * Create font data from font and variant
 */
function getFontData(font: unknown, variant: unknown): TextStyleData {
  // TODO: Extract from font and variant
  // return {
  //   fontId: font?.id,
  //   fontFamily: font?.family,
  //   fontVariantId: variant?.id,
  //   fontStyle: variant?.style,
  //   fontWeight: variant?.weight
  // };
  return {};
}

/**
 * Create variant data
 */
function getVariantData(variant: unknown): Partial<TextStyleData> {
  // TODO: Extract from variant
  // return {
  //   fontVariantId: variant?.id,
  //   fontStyle: variant?.style,
  //   fontWeight: variant?.weight
  // };
  return {};
}

/**
 * Create a TextRangeProxy for a text shape
 */
export function textRangeProxy(
  pluginId: string,
  fileId: string,
  pageId: string,
  id: string,
  start: number,
  end: number
): TextRangeProxy {
  const self = {} as TextRangeProxy;

  // Internal properties
  (self as unknown as Record<symbol, unknown>)[Symbol('$plugin')] = pluginId;
  (self as unknown as Record<symbol, unknown>)[Symbol('$file')] = fileId;
  (self as unknown as Record<symbol, unknown>)[Symbol('$page')] = pageId;
  (self as unknown as Record<symbol, unknown>)[Symbol('$id')] = id;
  (self as unknown as Record<symbol, unknown>)[Symbol('$start')] = start;
  (self as unknown as Record<symbol, unknown>)[Symbol('$end')] = end;
  (self as unknown as Record<symbol, unknown>)[Symbol('type')] = 'TextRange';

  // Public properties
  self.pluginId = pluginId;
  self.fileId = fileId;
  self.pageId = pageId;
  self.id = id;
  self.start = start;
  self.end = end;

  // Shape getter
  let _shape: unknown | null = null;
  Object.defineProperty(self, 'shape', {
    get(): unknown {
      if (!_shape) {
        // TODO: _shape = proxyToShape(self);
      }
      return _shape;
    },
    enumerable: true
  });

  // Characters getter
  Object.defineProperty(self, 'characters', {
    get(): string {
      // TODO: const rangeData = contentRangeToTextStyles(...);
      // return rangeData.map(s => s.text).join('');
      return '';
    },
    enumerable: true
  });

  // Font ID
  Object.defineProperty(self, 'fontId', {
    get(): string {
      // TODO: const rangeData = contentRangeToTextStyles(...);
      // return mixedValue(rangeData.map(s => s.fontId));
      return '';
    },
    enumerable: true
  });
  self.setFontId = function(value: string): void {
    // TODO: const font = getFontData(value);
    // const variant = getDefaultVariant(font);
    // if (!font) {
    //   displayNotValid('fontId', value);
    // } else if (!checkPermission(pluginId, 'content:write')) {
    //   displayNotValid('fontId', "Plugin doesn't have 'content:write' permission");
    // } else {
    //   emit(updateTextRange(id, start, end, getFontData(font, variant)));
    // }
  };

  // Font family
  Object.defineProperty(self, 'fontFamily', {
    get(): string {
      // TODO: return mixedValue(rangeData.map(s => s.fontFamily));
      return '';
    },
    enumerable: true
  });
  self.setFontFamily = function(value: string): void {
    // TODO: const font = findFontData({ family: value });
    // const variant = getDefaultVariant(font);
    // if (!font || typeof value !== 'string') {
    //   displayNotValid('fontFamily', value);
    // } else if (!checkPermission(pluginId, 'content:write')) {
    //   displayNotValid('fontFamily', "Plugin doesn't have 'content:write' permission");
    // } else {
    //   emit(updateTextRange(id, start, end, getFontData(font, variant)));
    // }
  };

  // Font variant ID
  Object.defineProperty(self, 'fontVariantId', {
    get(): string {
      // TODO: return mixedValue(rangeData.map(s => s.fontVariantId));
      return '';
    },
    enumerable: true
  });
  self.setFontVariantId = function(value: string): void {
    // TODO: const font = getFontData(self.fontId);
    // const variant = getVariant(font, value);
    // if (!variant || typeof value !== 'string') {
    //   displayNotValid('fontVariantId', value);
    // } else if (!checkPermission(pluginId, 'content:write')) {
    //   displayNotValid('fontVariantId', "Plugin doesn't have 'content:write' permission");
    // } else {
    //   emit(updateTextRange(id, start, end, getVariantData(variant)));
    // }
  };

  // Font size
  Object.defineProperty(self, 'fontSize', {
    get(): string {
      // TODO: return mixedValue(rangeData.map(s => s.fontSize));
      return '';
    },
    enumerable: true
  });
  self.setFontSize = function(value: string): void {
    const trimmed = value.trim();
    if (!trimmed || !FONT_SIZE_REGEX.test(trimmed)) {
      // displayNotValid('fontSize', value);
      console.error('[PENPOT PLUGIN] fontSize not valid:', value);
    } else if (!checkPermission(pluginId, 'content:write')) {
      // displayNotValid('fontSize', "Plugin doesn't have 'content:write' permission");
      console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
    } else {
      // emit(updateTextRange(id, start, end, { fontSize: trimmed }));
    }
  };

  // Font weight
  Object.defineProperty(self, 'fontWeight', {
    get(): string {
      // TODO: return mixedValue(rangeData.map(s => s.fontWeight));
      return '';
    },
    enumerable: true
  });
  self.setFontWeight = function(value: string): void {
    // TODO: const font = getFontData(self.fontId);
    // const variant = findVariant(font, { style: self.fontStyle, weight: value })
    //   ?? findVariant(font, { weight: value });
    // if (!variant) {
    //   displayNotValid('fontWeight', `Font weight '${value}' not supported for current font`);
    // } else if (!checkPermission(pluginId, 'content:write')) {
    //   displayNotValid('fontWeight', "Plugin doesn't have 'content:write' permission");
    // } else {
    //   emit(updateTextRange(id, start, end, getVariantData(variant)));
    // }
  };

  // Font style
  Object.defineProperty(self, 'fontStyle', {
    get(): string {
      // TODO: return mixedValue(rangeData.map(s => s.fontStyle));
      return '';
    },
    enumerable: true
  });
  self.setFontStyle = function(value: string): void {
    // TODO: const font = getFontData(self.fontId);
    // const variant = findVariant(font, { weight: self.fontWeight, style: value })
    //   ?? findVariant(font, { style: value });
    // if (!variant) {
    //   displayNotValid('fontStyle', `Font style '${value}' not supported for current font`);
    // } else if (!checkPermission(pluginId, 'content:write')) {
    //   displayNotValid('fontStyle', "Plugin doesn't have 'content:write' permission");
    // } else {
    //   emit(updateTextRange(id, start, end, getVariantData(variant)));
    // }
  };

  // Line height
  Object.defineProperty(self, 'lineHeight', {
    get(): string {
      // TODO: return mixedValue(rangeData.map(s => s.lineHeight));
      return '';
    },
    enumerable: true
  });
  self.setLineHeight = function(value: string): void {
    const trimmed = value.trim();
    if (!trimmed || !LINE_HEIGHT_REGEX.test(trimmed)) {
      // displayNotValid('lineHeight', value);
      console.error('[PENPOT PLUGIN] lineHeight not valid:', value);
    } else if (!checkPermission(pluginId, 'content:write')) {
      // displayNotValid('lineHeight', "Plugin doesn't have 'content:write' permission");
      console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
    } else {
      // emit(updateTextRange(id, start, end, { lineHeight: trimmed }));
    }
  };

  // Letter spacing
  Object.defineProperty(self, 'letterSpacing', {
    get(): string {
      // TODO: return mixedValue(rangeData.map(s => s.letterSpacing));
      return '';
    },
    enumerable: true
  });
  self.setLetterSpacing = function(value: string): void {
    const trimmed = value.trim();
    if (!trimmed || !LETTER_SPACING_REGEX.test(trimmed)) {
      // displayNotValid('letterSpacing', value);
      console.error('[PENPOT PLUGIN] letterSpacing not valid:', value);
    } else if (!checkPermission(pluginId, 'content:write')) {
      // displayNotValid('letterSpacing', "Plugin doesn't have 'content:write' permission");
      console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
    } else {
      // emit(updateTextRange(id, start, end, { letterSpacing: trimmed }));
    }
  };

  // Text transform
  Object.defineProperty(self, 'textTransform', {
    get(): string {
      // TODO: return mixedValue(rangeData.map(s => s.textTransform));
      return '';
    },
    enumerable: true
  });
  self.setTextTransform = function(value: string): void {
    if (typeof value === 'string' && !TEXT_TRANSFORM_REGEX.test(value)) {
      // displayNotValid('textTransform', value);
      console.error('[PENPOT PLUGIN] textTransform not valid:', value);
    } else if (!checkPermission(pluginId, 'content:write')) {
      // displayNotValid('textTransform', "Plugin doesn't have 'content:write' permission");
      console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
    } else {
      // emit(updateTextRange(id, start, end, { textTransform: value }));
    }
  };

  // Text decoration
  Object.defineProperty(self, 'textDecoration', {
    get(): string {
      // TODO: return mixedValue(rangeData.map(s => s.textDecoration));
      return '';
    },
    enumerable: true
  });
  self.setTextDecoration = function(value: string): void {
    if (typeof value === 'string' && TEXT_DECORATION_REGEX.test(value)) {
      // displayNotValid('textDecoration', value);
      console.error('[PENPOT PLUGIN] textDecoration not valid:', value);
    } else if (!checkPermission(pluginId, 'content:write')) {
      // displayNotValid('textDecoration', "Plugin doesn't have 'content:write' permission");
      console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
    } else {
      // emit(updateTextRange(id, start, end, { textDecoration: value }));
    }
  };

  // Direction
  Object.defineProperty(self, 'direction', {
    get(): string {
      // TODO: return mixedValue(rangeData.map(s => s.direction));
      return '';
    },
    enumerable: true
  });
  self.setDirection = function(value: string): void {
    if (typeof value === 'string' && TEXT_DIRECTION_REGEX.test(value)) {
      // displayNotValid('direction', value);
      console.error('[PENPOT PLUGIN] direction not valid:', value);
    } else if (!checkPermission(pluginId, 'content:write')) {
      // displayNotValid('direction', "Plugin doesn't have 'content:write' permission");
      console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
    } else {
      // emit(updateTextRange(id, start, end, { direction: value }));
    }
  };

  // Align
  Object.defineProperty(self, 'align', {
    get(): string {
      // TODO: return mixedValue(rangeData.map(s => s.textAlign));
      return '';
    },
    enumerable: true
  });
  self.setAlign = function(value: string): void {
    if (typeof value === 'string' && TEXT_ALIGN_REGEX.test(value)) {
      // displayNotValid('align', value);
      console.error('[PENPOT PLUGIN] align not valid:', value);
    } else if (!checkPermission(pluginId, 'content:write')) {
      // displayNotValid('align', "Plugin doesn't have 'content:write' permission");
      console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
    } else {
      // emit(updateTextRange(id, start, end, { textAlign: value }));
    }
  };

  // Fills
  Object.defineProperty(self, 'fills', {
    get(): unknown[] {
      // TODO: const rangeData = contentRangeToTextStyles(...);
      // return formatFills(mixedValue(rangeData.map(s => s.fills)));
      return [];
    },
    enumerable: true
  });
  self.setFills = function(value: unknown[]): void {
    // TODO: const parsed = parseFills(value);
    // if (!validateFill(parsed)) {
    //   displayNotValid('fills', value);
    // } else if (!checkPermission(pluginId, 'content:write')) {
    //   displayNotValid('fills', "Plugin doesn't have 'content:write' permission");
    // } else {
    //   emit(updateTextRange(id, start, end, { fills: parsed }));
    // }
  };

  // Apply typography
  self.applyTypography = function(typography: unknown): void {
    // TODO: const typographyData = proxyToLibraryTypography(typography);
    // if (typographyData) {
    //   const attrs = {
    //     typographyRefFile: fileId,
    //     typographyRefId: typographyData.id,
    //     ...omit(typographyData, ['id', 'name'])
    //   };
    //   emit(updateTextRange(id, start, end, attrs));
    // }
  };

  return self;
}

/**
 * Add text properties to a shape proxy
 */
export function addTextProperties(
  shapeProxy: Record<string, unknown>,
  pluginId: string
): void {
  // Characters property
  Object.defineProperty(shapeProxy, 'characters', {
    get(): string {
      // TODO: const shape = proxyToShape(this);
      // return contentToText(shape.content);
      return '';
    },
    set(value: string): void {
      const id = (this as unknown as Record<symbol, unknown>)[Symbol('$id')] as string;
      if (typeof value !== 'string' || !value) {
        // displayNotValid('characters', value);
        console.error('[PENPOT PLUGIN] characters not valid:', value);
      } else if (!checkPermission(pluginId, 'content:write')) {
        // displayNotValid('characters', "Plugin doesn't have 'content:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
      } else {
        // TODO: Update shape content
        // emit(updateShapes([id], shape => updateContent(shape, changeText(value))));
      }
    },
    enumerable: true,
    configurable: true
  });

  // Grow type property
  Object.defineProperty(shapeProxy, 'growType', {
    get(): TextGrowType {
      // TODO: const shape = proxyToShape(this);
      // return shape.growType as TextGrowType;
      return 'auto-width';
    },
    set(value: string): void {
      const id = (this as unknown as Record<symbol, unknown>)[Symbol('$id')] as string;
      if (
        value !== 'auto-width' &&
        value !== 'auto-height' &&
        value !== 'fixed'
      ) {
        // displayNotValid('growType', value);
        console.error('[PENPOT PLUGIN] growType not valid:', value);
      } else if (!checkPermission(pluginId, 'content:write')) {
        // displayNotValid('growType', "Plugin doesn't have 'content:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
      } else {
        // emit(updateShapes([id], shape => ({ ...shape, growType: value })));
      }
    },
    enumerable: true,
    configurable: true
  });

  // Font ID
  Object.defineProperty(shapeProxy, 'fontId', {
    get(): string {
      // TODO: const textProps = getTextProps(proxyToShape(this));
      // return mixedValue(textProps.fontId);
      return '';
    },
    set(value: string): void {
      const id = (this as unknown as Record<symbol, unknown>)[Symbol('$id')] as string;
      // TODO: const font = getFontData(value);
      // const variant = getDefaultVariant(font);
      // if (!font) {
      //   displayNotValid('fontId', value);
      // } else if (!checkPermission(pluginId, 'content:write')) {
      //   displayNotValid('fontId', "Plugin doesn't have 'content:write' permission");
      // } else {
      //   emit(updateTextAttrs(id, getFontData(font, variant)));
      // }
    },
    enumerable: true,
    configurable: true
  });

  // Font family
  Object.defineProperty(shapeProxy, 'fontFamily', {
    get(): string {
      // TODO: const textProps = getTextProps(proxyToShape(this));
      // return mixedValue(textProps.fontFamily);
      return '';
    },
    set(value: string): void {
      const id = (this as unknown as Record<symbol, unknown>)[Symbol('$id')] as string;
      // TODO: const font = findFontData({ family: value });
      // const variant = getDefaultVariant(font);
      // if (!font) {
      //   displayNotValid('fontFamily', value);
      // } else if (!checkPermission(pluginId, 'content:write')) {
      //   displayNotValid('fontFamily', "Plugin doesn't have 'content:write' permission");
      // } else {
      //   emit(updateTextAttrs(id, getFontData(font, variant)));
      // }
    },
    enumerable: true,
    configurable: true
  });

  // Font variant ID
  Object.defineProperty(shapeProxy, 'fontVariantId', {
    get(): string {
      // TODO: const textProps = getTextProps(proxyToShape(this));
      // return mixedValue(textProps.fontVariantId);
      return '';
    },
    set(value: string): void {
      const id = (this as unknown as Record<symbol, unknown>)[Symbol('$id')] as string;
      // TODO: const font = getFontData(this.fontId);
      // const variant = getVariant(font, value);
      // if (!variant) {
      //   displayNotValid('fontVariantId', value);
      // } else if (!checkPermission(pluginId, 'content:write')) {
      //   displayNotValid('fontVariantId', "Plugin doesn't have 'content:write' permission");
      // } else {
      //   emit(updateTextAttrs(id, getVariantData(variant)));
      // }
    },
    enumerable: true,
    configurable: true
  });

  // Font size
  Object.defineProperty(shapeProxy, 'fontSize', {
    get(): string {
      // TODO: const textProps = getTextProps(proxyToShape(this));
      // return mixedValue(textProps.fontSize);
      return '';
    },
    set(value: string): void {
      const id = (this as unknown as Record<symbol, unknown>)[Symbol('$id')] as string;
      const trimmed = value.trim();
      if (!trimmed || !FONT_SIZE_REGEX.test(trimmed)) {
        // displayNotValid('fontSize', value);
        console.error('[PENPOT PLUGIN] fontSize not valid:', value);
      } else if (!checkPermission(pluginId, 'content:write')) {
        // displayNotValid('fontSize', "Plugin doesn't have 'content:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
      } else {
        // emit(updateTextAttrs(id, { fontSize: trimmed }));
      }
    },
    enumerable: true,
    configurable: true
  });

  // Font weight
  Object.defineProperty(shapeProxy, 'fontWeight', {
    get(): string {
      // TODO: const textProps = getTextProps(proxyToShape(this));
      // return mixedValue(textProps.fontWeight);
      return '';
    },
    set(value: string): void {
      const id = (this as unknown as Record<symbol, unknown>)[Symbol('$id')] as string;
      // TODO: const font = getFontData(this.fontId);
      // const variant = findVariant(font, { style: this.fontStyle, weight: value })
      //   ?? findVariant(font, { weight: value });
      // if (!variant) {
      //   displayNotValid('fontWeight', `Font weight '${value}' not supported for current font`);
      // } else if (!checkPermission(pluginId, 'content:write')) {
      //   displayNotValid('fontWeight', "Plugin doesn't have 'content:write' permission");
      // } else {
      //   emit(updateTextAttrs(id, getVariantData(variant)));
      // }
    },
    enumerable: true,
    configurable: true
  });

  // Font style
  Object.defineProperty(shapeProxy, 'fontStyle', {
    get(): string {
      // TODO: const textProps = getTextProps(proxyToShape(this));
      // return mixedValue(textProps.fontStyle);
      return '';
    },
    set(value: string): void {
      const id = (this as unknown as Record<symbol, unknown>)[Symbol('$id')] as string;
      // TODO: const font = getFontData(this.fontId);
      // const variant = findVariant(font, { weight: this.fontWeight, style: value })
      //   ?? findVariant(font, { style: value });
      // if (!variant) {
      //   displayNotValid('fontStyle', `Font style '${value}' not supported for current font`);
      // } else if (!checkPermission(pluginId, 'content:write')) {
      //   displayNotValid('fontStyle', "Plugin doesn't have 'content:write' permission");
      // } else {
      //   emit(updateTextAttrs(id, getVariantData(variant)));
      // }
    },
    enumerable: true,
    configurable: true
  });

  // Line height
  Object.defineProperty(shapeProxy, 'lineHeight', {
    get(): string {
      // TODO: const textProps = getTextProps(proxyToShape(this));
      // return mixedValue(textProps.lineHeight);
      return '';
    },
    set(value: string): void {
      const id = (this as unknown as Record<symbol, unknown>)[Symbol('$id')] as string;
      const trimmed = value.trim();
      if (!trimmed || !LINE_HEIGHT_REGEX.test(trimmed)) {
        // displayNotValid('lineHeight', value);
        console.error('[PENPOT PLUGIN] lineHeight not valid:', value);
      } else if (!checkPermission(pluginId, 'content:write')) {
        // displayNotValid('lineHeight', "Plugin doesn't have 'content:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
      } else {
        // emit(updateTextAttrs(id, { lineHeight: trimmed }));
      }
    },
    enumerable: true,
    configurable: true
  });

  // Letter spacing
  Object.defineProperty(shapeProxy, 'letterSpacing', {
    get(): string {
      // TODO: const textProps = getTextProps(proxyToShape(this));
      // return mixedValue(textProps.letterSpacing);
      return '';
    },
    set(value: string): void {
      const id = (this as unknown as Record<symbol, unknown>)[Symbol('$id')] as string;
      const trimmed = value.trim();
      if (typeof value !== 'string' || !LETTER_SPACING_REGEX.test(trimmed)) {
        // displayNotValid('letterSpacing', value);
        console.error('[PENPOT PLUGIN] letterSpacing not valid:', value);
      } else if (!checkPermission(pluginId, 'content:write')) {
        // displayNotValid('letterSpacing', "Plugin doesn't have 'content:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
      } else {
        // emit(updateTextAttrs(id, { letterSpacing: trimmed }));
      }
    },
    enumerable: true,
    configurable: true
  });

  // Text transform
  Object.defineProperty(shapeProxy, 'textTransform', {
    get(): string {
      // TODO: const textProps = getTextProps(proxyToShape(this));
      // return mixedValue(textProps.textTransform);
      return '';
    },
    set(value: string): void {
      const id = (this as unknown as Record<symbol, unknown>)[Symbol('$id')] as string;
      if (typeof value !== 'string' || !TEXT_TRANSFORM_REGEX.test(value)) {
        // displayNotValid('textTransform', value);
        console.error('[PENPOT PLUGIN] textTransform not valid:', value);
      } else if (!checkPermission(pluginId, 'content:write')) {
        // displayNotValid('textTransform', "Plugin doesn't have 'content:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
      } else {
        // emit(updateTextAttrs(id, { textTransform: value }));
      }
    },
    enumerable: true,
    configurable: true
  });

  // Text decoration
  Object.defineProperty(shapeProxy, 'textDecoration', {
    get(): string {
      // TODO: const textProps = getTextProps(proxyToShape(this));
      // return mixedValue(textProps.textDecoration);
      return '';
    },
    set(value: string): void {
      const id = (this as unknown as Record<symbol, unknown>)[Symbol('$id')] as string;
      if (typeof value !== 'string' || !TEXT_DECORATION_REGEX.test(value)) {
        // displayNotValid('textDecoration', value);
        console.error('[PENPOT PLUGIN] textDecoration not valid:', value);
      } else if (!checkPermission(pluginId, 'content:write')) {
        // displayNotValid('textDecoration', "Plugin doesn't have 'content:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
      } else {
        // emit(updateTextAttrs(id, { textDecoration: value }));
      }
    },
    enumerable: true,
    configurable: true
  });

  // Direction
  Object.defineProperty(shapeProxy, 'direction', {
    get(): string {
      // TODO: const textProps = getTextProps(proxyToShape(this));
      // return mixedValue(textProps.direction);
      return '';
    },
    set(value: string): void {
      const id = (this as unknown as Record<symbol, unknown>)[Symbol('$id')] as string;
      if (typeof value !== 'string' || !TEXT_DIRECTION_REGEX.test(value)) {
        // displayNotValid('direction', value);
        console.error('[PENPOT PLUGIN] direction not valid:', value);
      } else if (!checkPermission(pluginId, 'content:write')) {
        // displayNotValid('direction', "Plugin doesn't have 'content:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
      } else {
        // emit(updateTextAttrs(id, { direction: value }));
      }
    },
    enumerable: true,
    configurable: true
  });

  // Align
  Object.defineProperty(shapeProxy, 'align', {
    get(): string {
      // TODO: const textProps = getTextProps(proxyToShape(this));
      // return mixedValue(textProps.textAlign);
      return '';
    },
    set(value: string): void {
      const id = (this as unknown as Record<symbol, unknown>)[Symbol('$id')] as string;
      if (typeof value !== 'string' || !TEXT_ALIGN_REGEX.test(value)) {
        // displayNotValid('align', value);
        console.error('[PENPOT PLUGIN] align not valid:', value);
      } else if (!checkPermission(pluginId, 'content:write')) {
        // displayNotValid('align', "Plugin doesn't have 'content:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
      } else {
        // emit(updateTextAttrs(id, { textAlign: value }));
      }
    },
    enumerable: true,
    configurable: true
  });

  // Vertical align
  Object.defineProperty(shapeProxy, 'verticalAlign', {
    get(): string {
      // TODO: const textProps = getTextProps(proxyToShape(this));
      // return textProps.verticalAlign ?? '';
      return '';
    },
    set(value: string): void {
      const id = (this as unknown as Record<symbol, unknown>)[Symbol('$id')] as string;
      if (typeof value !== 'string' || !VERTICAL_ALIGN_REGEX.test(value)) {
        // displayNotValid('verticalAlign', value);
        console.error('[PENPOT PLUGIN] verticalAlign not valid:', value);
      } else if (!checkPermission(pluginId, 'content:write')) {
        // displayNotValid('verticalAlign', "Plugin doesn't have 'content:write' permission");
        console.error("[PENPOT PLUGIN] Plugin doesn't have 'content:write' permission");
      } else {
        // emit(updateTextAttrs(id, { verticalAlign: value }));
      }
    },
    enumerable: true,
    configurable: true
  });
}
