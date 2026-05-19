// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { formatCode } from './code_beautify';
// import { generateMarkup as generateHTMLMarkup } from './code_gen/markup_html';
// import { generateMarkup as generateSVGMarkup } from './code_gen/markup_svg';
// import { generateStyle } from './code_gen/style_css';

/**
 * Code generation type
 */
export type CodeType = 'html' | 'svg' | 'css';

/**
 * Generate markup code for shapes
 */
export function generateMarkupCode(objects: unknown[], type: CodeType, shapes?: unknown[]): string {
  const generateMarkup =
    type === 'html'
      ? generateHTMLMarkup
      : generateSVGMarkup;

  return generateMarkup(objects, shapes);
}

/**
 * Generate formatted markup code for shapes
 */
export function generateFormattedMarkupCode(
  objects: unknown[],
  type: CodeType,
  shapes?: unknown[]
): string {
  const markup = generateMarkupCode(objects, type, shapes);
  return formatCode(markup, type);
}

/**
 * Generate style code for shapes
 */
export function generateStyleCode(
  objects: unknown[],
  type: CodeType,
  rootShapes?: unknown[],
  allShapes?: unknown[]
): string;
export function generateStyleCode(
  objects: unknown[],
  type: CodeType,
  rootShapes?: unknown[],
  allShapes?: unknown[],
  options?: unknown
): string {
  // TODO: Implement with code_gen/style_css
  // if (type === 'css') {
  //   return generateStyle(objects, rootShapes, allShapes, options);
  // }
  return '';
}

/**
 * Get prelude for code type
 */
export function prelude(type: CodeType): string {
  if (type === 'css') {
    // TODO: Import and return css.prelude();
    return '';
  }
  return '';
}
