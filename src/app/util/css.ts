// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { getElement, createElement, setAttribute, appendChild } from './dom';

/**
 * CSS declarations type
 */
export type CSSDeclarations = Record<string, string | number>;

/**
 * Converts an object of CSS declarations to a string.
 */
export function declarationsToString(declarations: CSSDeclarations): string {
  const entries = Object.entries(declarations);
  return entries.reduce((acc, [k, v]) => {
    return `${acc}${k}: ${v};`;
  }, '');
}

/**
 * Adds a CSS rule to a CSS Style Sheet.
 */
export function addRule(styleSheet: CSSStyleSheet, selector: string, declarations: CSSDeclarations): void {
  const rule = `${selector} { ${declarationsToString(declarations)} }`;
  styleSheet.insertRule(rule, styleSheet.cssRules.length);
}

/**
 * Wraps a style element to provide a convenient API for adding rules.
 */
export interface StyleWrapper {
  add: (selector: string, declarations: CSSDeclarations) => void;
}

/**
 * Creates a wrapper for an existing style element.
 */
function wrapStyleSheet(style: HTMLStyleElement): StyleWrapper {
  const sheet = style.sheet;
  if (!sheet) {
    throw new Error('Style element has no sheet');
  }
  return {
    add: (selector: string, declarations: CSSDeclarations) => addRule(sheet, selector, declarations),
  };
}

/**
 * Creates a new CSS Style Sheet and returns an object that allows adding rules to it.
 * FIXME: Maybe we should rename this to `createDynamicStyle`?
 */
export function createStyle(id: string): StyleWrapper {
  const element = getElement(id);

  if (element) {
    return wrapStyleSheet(element as HTMLStyleElement);
  }

  const style = createElement('style');
  setAttribute(style, 'id', id);
  setAttribute(style, 'type', 'text/css');
  appendChild(document.head, style);
  return wrapStyleSheet(style);
}
