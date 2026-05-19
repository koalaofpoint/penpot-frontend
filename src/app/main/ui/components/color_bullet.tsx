// This Source Code Form is subject to terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { css, cssCase } from '../../main/style';
// import { cfg } from '../../../config';
// import { uc } from 'cuerdas.core';
// import { ucGradientTypeToString } from '../../../util/color';
// import { tr } from '../../../util/i18n';

/**
 * Color item type
 */
export type ColorItem =
  | { name: string; path: string; color: Color }
  | { name: string; path: string; gradient: GradientType }
  | { name: string; path: string; image: ImageColorItem };

/**
 * Gradient type
 */
interface GradientType {
  type: string;
}

/**
 * Image color item type
 */
interface ImageColorItem {
  name: string;
  path: string;
}

/**
 * Color type
 */
interface Color {
  color: string;
  opacity?: number;
}

/**
 * Breakable color title
 */
function breakableColorTitle(color: ColorItem | ColorItem): string {
  if (typeof color === 'string') {
    return color.color;
  }
  if ('gradient' in color) {
    const gradient = color.gradient as GradientType;
    return ucGradientTypeToString(gradient.type);
  }
  if ('image' in color) {
    return tr('media.image');
  }
  return '';
}

/**
 * Color title component
 */
function ColorTitle({ color }: { color: ColorItem | ColorItem }) {
  if (typeof color === 'string') {
    const colorObj = color as Color;
    return (
      <span className="color-text" style={{ opacity: colorObj.opacity }}>
        {colorObj.color}
      </span>
    );
  }
  if ('gradient' in color) {
    const gradient = color.gradient as GradientType;
    return (
      <span className="color-text gradient" style={{ opacity: 1 }}>
        {ucGradientTypeToString(gradient.type)}
      </span>
    );
  }
  return <span className="color-text image" style={{ opacity: 1 }}>
    {tr('media.image')}
  </span>;
  }
}

/**
 * Color title component - Displays color item name
 */
export function ColorTitle({ color }: { color: ColorItem | ColorItem }) {
  const { name, path } = color;
  const title = breakableColorTitle(color);
  const isLibraryColor = typeof color === 'string';

  return (
    <span className="color-name">
      <span className="color-row-name">{name}</span>
      {title}
      {!isLibraryColor && (
        <span className="color-bullet-wrapper" onClick={title}>
          <span className={cssCase({
            'color-bullet': true,
            'is-library-color': isLibraryColor,
            'is-not-library-color': !isLibraryColor
          })}>
            {isLibraryColor && <span className="color-bullet-left"></span>}
            <span className="color-bullet-right"></span>
          </span>
        </span>
      )}
    </span>
  );
}
