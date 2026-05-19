// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

/**
 * FIXME: this is legacy namespace, all functions of this ns should be
 * relocated under app.common.types on the respective colors related
 * namespace. All generic color conversion and other helpers are moved to
 * app.common.types.color namespace.
 */

// Color Types
export interface ColorStop {
  offset: number;
  color: string;
  opacity: number;
}

export interface Gradient {
  type: 'linear' | 'radial';
  stops: ColorStop[];
}

export interface ColorValue {
  color?: string;
  opacity?: number;
  gradient?: Gradient | ':multiple';
  value?: string;
  id?: string | ':multiple';
  fileId?: string | ':multiple';
  name?: string;
  color?: string;
  gradient?: Gradient;
}

/**
 * Converts a gradient object to CSS string.
 */
export function gradientToCSS(gradient: Gradient): string {
  const parseStop = ({ offset, color, opacity }: ColorStop): string => {
    const [r, g, b] = hexToRGB(color);
    return `rgba(${r}, ${g}, ${b}, ${opacity}) ${offset * 100}%`;
  };

  const stopsCSS = gradient.stops.map(parseStop).join(',');

  if (gradient.type === 'linear') {
    return `linear-gradient(to bottom, ${stopsCSS})`;
  } else {
    return `radial-gradient(circle, ${stopsCSS})`;
  }
}

/**
 * Converts gradient type to localized string.
 */
export function gradientTypeToString(type: 'linear' | 'radial', tr: (key: string) => string): string | null {
  switch (type) {
    case 'linear':
      return tr('workspace.gradients.linear');
    case 'radial':
      return tr('workspace.gradients.radial');
    default:
      return null;
  }
}

/**
 * Converts color value to CSS background string.
 * TODO: REMOVE `VALUE` WHEN COLOR IS INTEGRATED
 */
export function colorToBackground(colorValue: ColorValue): string {
  const color = colorValue.color ?? colorValue.value ?? null;
  const opacity = colorValue.opacity ?? 1;

  if (colorValue.gradient && colorValue.gradient !== ':multiple') {
    return gradientToCSS(colorValue.gradient);
  }

  if (color !== null && color !== ':multiple') {
    const normalizedColor = color.replace('#', '');
    const expandedColor = expandHex(normalizedColor);
    const colorWithHash = prependHash(expandedColor);
    const [r, g, b] = hexToRGB(colorWithHash);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  return 'transparent';
}

/**
 * Converts color value to background string in specified format.
 */
export function colorToFormatBackground(colorValue: ColorValue, format: 'rgba' | 'hsla' | 'hex'): string {
  const { color, gradient } = colorValue;
  const opacity = colorValue.opacity ?? 1;

  if (gradient && gradient !== ':multiple') {
    return gradientToCSS(gradient);
  }

  if (color !== ':multiple') {
    switch (format) {
      case 'rgba': {
        const [r, g, b] = hexToRGB(color);
        return `rgba(${formatRGBA([r, g, b, opacity])})`;
      }
      case 'hsla': {
        const [h, s, l] = hexToHSL(color);
        return `hsla(${formatHSLA([h, s, l, opacity])})`;
      }
      case 'hex': {
        return `${color}${opacityToHex(opacity).toUpperCase()}`;
      }
    }
  }

  return 'transparent';
}

/**
 * Checks if the color value represents multiple colors.
 */
export function isMultiple({ id, fileId, value, color, gradient }: ColorValue): boolean {
  return (
    value === ':multiple' ||
    color === ':multiple' ||
    gradient === ':multiple' ||
    id === ':multiple' ||
    fileId === ':multiple'
  );
}

/**
 * Gets the display name for a color value.
 */
export function getColorName(colorValue: ColorValue): string | undefined {
  return (
    (colorValue as any).__name || // metadata equivalent
    colorValue.name ||
    colorValue.color ||
    gradientTypeToString(colorValue.gradient?.type, (key: string) => key)
  );
}

/**
 * Generates a random RGB color string.
 */
export function randomColor(): string {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Helper functions (would normally come from app.common.types.color)
function hexToRGB(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
}

function hexToHSL(hex: string): [number, number, number] {
  const [r, g, b] = hexToRGB(hex);
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;

  const max = Math.max(rNorm, gNorm, bNorm);
  const min = Math.min(rNorm, gNorm, bNorm);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case rNorm:
        h = ((gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0)) / 6;
        break;
      case gNorm:
        h = ((bNorm - rNorm) / d + 2) / 6;
        break;
      case bNorm:
        h = ((rNorm - gNorm) / d + 4) / 6;
        break;
    }
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function expandHex(hex: string): string {
  if (hex.length === 3) {
    return hex.split('').map(c => c + c).join('');
  }
  return hex;
}

function prependHash(hex: string): string {
  return hex.startsWith('#') ? hex : `#${hex}`;
}

function formatRGBA([r, g, b, a]: [number, number, number, number]): string {
  return `${r}, ${g}, ${b}, ${a}`;
}

function formatHSLA([h, s, l, a]: [number, number, number, number]): string {
  return `${h}, ${s}%, ${l}%, ${a}`;
}

function opacityToHex(opacity: number): string {
  const hex = Math.round(opacity * 255).toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}
