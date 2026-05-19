// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

/**
 * Encode a value for transmission.
 */
export function encode(value: string): string {
  // TODO: Implement transit encoding
  return btoa(value);
}

/**
 * Decode a value from transmission.
 */
export function decode(value: string): any {
  if (value === '') {
    return null;
  }
  // TODO: Implement transit decoding
  try {
    return JSON.parse(atob(value));
  } catch {
    return value;
  }
}

/**
 * Mapping for style attributes.
 */
export const mapping: Record<string, { encode: (v: string) => string; decode: (s: string) => any }> = {
  fills: { encode, decode },
  typographyRefId: { encode, decode },
  typographyRefFile: { encode, decode },
  fontId: { encode: (v: string) => v; decode: (s: string) => s },
  fontVariantId: { encode: (v: string) => v; decode: (s: string) => s },
  verticalAlign: { encode: (v: string) => v; decode: (s: string) => s }
};

/**
 * Normalizes a style value by adding units.
 */
export function normalizeStyleValue(k: string, v: string): string {
  if (isKeyword(k)) {
    if (k === 'font-size' || k === 'letter-spacing') {
      return isNumber(v) ? `${v}px` : v;
    }
    return v;
}

function isKeyword(k: string): boolean {
  return k === 'font-size' || k === 'letter-spacing';
}

/**
 * Gets style name as CSS variable.
 */
export function getStyleNameAsCSSVariable(key: string): string {
  return `--${key}`;
}

/**
 * Gets style name.
 */
export function getStyleName(key: string): string {
  return key;
}

/**
 * Gets style key word from CSS variable name.
 */
export function getAttrKeyWordFromCSSVariable(styleName: string): string {
  return styleName.startsWith('--') ? styleName.substring(2) : styleName;
}

/**
 * Gets style key from style name.
 */
export function getAttrKey(styleName: string): string {
  if (styleNeedsMapping(styleName)) {
    return getAttrKeyWordFromCSSVariable(styleName);
  }
  return styleName;
}

/**
 * Checks if property is a mapping that needs special handling.
 */
export function attrNeedsMapping(key: string): boolean {
  return key === 'fills';
}

/**
 * Converts style key to attr key.
 */
export function styleToAttrKey(styleName: string): string {
  if (attrNeedsMapping(styleName)) {
    return getAttrKeyWordFromCSSVariable(styleName);
  }
  return styleName;
}

/**
 * Converts style value to attr value.
 */
export function styleToAttrValue(styleName: string, styleValue: string, decode: boolean): string {
  if (attrNeedsMapping(styleName)) {
    const encoder = mapping[styleName];
    return encoder(styleValue);
  }
  return styleValue;
}

/**
 * Converts style value to CSS value.
 */
export function attrToStyleValue(styleName: string, attrValue: string, encode: boolean): string {
  if (attrNeedsMapping(styleName)) {
    const decoder = mapping[styleName];
    return decoder(attrValue);
  }
  return attrValue;
}

/**
 * Maps attrs to styles.
 */
export function attrsToStyles(attrs: Record<string, any>): Record<string, string> {
  const mapped: Record<string, string> = {};
  Object.entries(attrs).forEach(([key, value]) => {
    const styleKey = styleToAttrKey(key);
    const styleValue = styleToAttrValue(key, value, false);
    mapped[styleKey] = styleValue;
  });
  return mapped;
}

/**
 * Converts a style declaration to CSS.
 */
export function styleToCSS(property: string, value: string): string {
  const styleName = getStyleName(property);
  const styleValue = attrToStyleValue(styleName, value, false);
  return `${styleName}: ${styleValue};`;
}

/**
 * Converts style value to attr value.
 */
export function styleToAttr(property: string, value: string, normalize: boolean = false): string {
  const styleName = getStyleName(property);
  const styleValue = attrToStyleValue(styleName, value, false);
  return normalize ? normalizeStyleValue(styleName, styleValue) : styleValue;
}

/**
 * Formats a single CSS property in 'property: value;' format.
 */
export function formatCSSProperty(property: string, value: string): string {
  return `${property}: ${value};`;
}

/**
 * Gets style defaults for JavaScript object.
 */
export function getStyleDefaults(styleDefaults: Record<string, string>): Record<string, string> {
  return styleDefaults;
}
