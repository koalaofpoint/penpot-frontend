// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

/**
 * CSS formatters and value formatters.
 */

// import { resolveFileMedia } from '../../../config';
// import { gradientToCSS } from '../../../main/ui/formats';
// import { colorToBackground } from '../../../util/color';

interface ColorFormatOptions {
  format?: 'hex' | 'rgba' | 'hsla';
}

interface FillColor {
  fillColor: string;
  fillOpacity?: number;
  fillColorGradient?: any;
  fillColorImage?: any;
}

interface ShadowOptions {
  style?: 'inner-shadow' | 'drop-shadow';
  offsetX?: number;
  offsetY?: number;
  blur?: number;
  spread?: number;
  color?: string;
}

interface SizeOptions {
  width?: number;
  height?: number;
  maxWidth?: number;
  maxHeight?: number;
  minHeight?: number;
  minWidth?: number;
}

interface BorderRadius {
  rx?: number;
  r1?: number;
  r2?: number;
  r3?: number;
  r4?: number;
}

interface TrackOptions {
  rows?: any;
  columns?: any;
}

/**
 * Format a color value to CSS string.
 */
export function formatColorValue(value: string, options?: ColorFormatOptions): string {
  const format = options?.format ?? 'hex';

  // This would need the actual implementation
  // return colorToFormatBackground({ color: value }, format);
  return value;
}

/**
 * Format an array of color values.
 */
export function formatColorArray(values: string[]): string {
  return values.map(v => formatColorValue(v)).join(', ');
}

/**
 * Format a string or size array.
 */
export function formatStringOrSizeArray(value: string | string[]): string {
  if (Array.isArray(value)) {
    if (value.length > 0) {
      return value.map(v => `${v}px`).join(' ');
    }
    return '';
  }
  return value;
}

/**
 * Format a keyword to CSS keyword.
 */
export function formatKeyword(value: string): string {
  return value;
}

/**
 * Format grid tracks.
 */
export function formatTracks(value: any): string {
  if (typeof value === 'string') {
    return `"${value}"`;
  }
  return value;
}

/**
 * Format shadow properties to CSS string.
 */
export function formatShadowToCSS(options: ShadowOptions): string {
  const {
    style = 'drop-shadow',
    offsetX = 0,
    offsetY = 0,
    blur = 0,
    spread = 0,
    color
  } = options;

  return `${offsetX}px ${offsetY}px ${blur}px ${spread}px ${color || '#000'}`;
}

/**
 * Format multiple shadows.
 */
export function formatShadow(options: ShadowOptions[]): string {
  return options.map(opt => formatShadowToCSS(opt)).join(', ');
}

/**
 * Format border properties to CSS string.
 */
export function formatBorderToCSS(color: string, style: string, width: number): string {
  return `${width}px ${style} ${color}`;
}

/**
 * Format border style.
 */
export function formatBorderStyle(value: string): string {
  return value;
}

/**
 * Format border width.
 */
export function formatBorderWidth(value: number): string {
  return `${value}px`;
}

/**
 * Format border color.
 */
export function formatBorderColor(color: string): string {
  return color;
}

/**
 * Format border radius.
 */
export function formatBorderRadius(value: string | number): string {
  return typeof value === 'number' ? `${value}px` : value;
}

/**
 * Format size to CSS string.
 */
export function formatSize(value: number | 'fill' | 'auto'): string {
  if (value === 'fill') {
    return '100%';
  }
  if (value === 'auto') {
    return 'auto';
  }
  return `${value}px`;
}

/**
 * Format size array to CSS string.
 */
export function formatSizeArray(value: number[]): string {
  return value.map(v => formatSize(v)).join(' ');
}

/**
 * Format blur value.
 */
export function formatBlur(value: number): string {
  return `blur(${value}px)`;
}

/**
 * Format matrix value.
 */
export function formatMatrix(value: string): string {
  return `matrix(${value})`;
}

/**
 * Get appropriate value formatter function for a given CSS property.
 */
export function getFormatter(property: string): (value: any, options?: any) => string {
  switch (property) {
    case 'position':
      return formatPosition;
    case 'width':
    case 'height':
      return formatSize;
    case 'maxWidth':
    case 'maxHeight':
    case 'minHeight':
    case 'minWidth':
    case 'min-inline-size':
    case 'max-inline-size':
    case 'min-inline-size':
    case 'min-block-size':
    case 'max-block-size':
      return formatSize;
    case 'background':
      return formatColorValue;
    case 'colorArray':
      return formatColorArray;
    case 'border':
      return formatBorderToCSS;
    case 'borderStyle':
      return formatBorderStyle;
    case 'borderWidth':
      return formatBorderWidth;
    case 'borderColor':
      return formatBorderColor;
    case 'sizeArray':
      return formatSizeArray;
    case 'stringOrSizeArray':
      return formatStringOrSizeArray;
    case 'keyword':
      return formatKeyword;
    case 'tracks':
      return formatTracks;
    case 'shadows':
      return formatShadow;
    case 'blur':
      return formatBlur;
    case 'matrix':
      return formatMatrix;
    default:
      return (v: any) => typeof v === 'string' ? v : String(v);
  }
}

/**
 * Format position value.
 */
function formatPosition(value: number | 'relative' | 'absolute'): string {
  if (typeof value === 'number') {
    return `${value}px`;
  }
  return value;
}
