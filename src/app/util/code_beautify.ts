// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper location
// import { html } from 'js-beautify';

/**
 * Format HTML code
 */
export function formatHTML(data: string): string {
  // TODO: Implement with js-beautify
  // return html(data, { indent_size: 2 });
  return data;
}

/**
 * Format code by type
 */
export function formatCode(code: string, type: string | 'svg' | 'html' | 'css'): string {
  const actualType = typeof type === 'symbol' ? String(type).slice(1) : type;

  if (actualType === 'svg') {
    return code
      .replace('<defs></defs>', '')
      .replace('>', '>\n<');
  }

  if (actualType === 'svg' || actualType === 'html') {
    return formatHTML(code);
  }

  return code;
}
