// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { setData, setAttribute, setStyle } from '../../../util/dom';
// import { stylesMapping } from '../styles';

interface DataNode {
  dataName: string;
  dataValue: string;
}

interface StyleNode {
  styleName: string;
  styleValue: string;
  styleEncodedValue: string;
}

/**
 * Sets a data attribute on an element.
 */
export function setDataset(element: HTMLElement, dataNode: DataNode): void {
  setData(element, dataNode.dataName, dataNode.dataValue);
}

/**
 * Sets style attributes on an element.
 */
export function setStyles(element: HTMLElement, styleNodes: StyleNode[]): void {
  styleNodes.forEach(({ styleName, styleValue, styleEncodedValue }) => {
    // TODO: Use stylesMapping
    if (stylesMapping[styleName]) {
      setStyle(element, stylesMapping[styleName], styleEncodedValue);
    } else {
      setAttribute(element, styleName, styleValue);
    }
  });
}

/**
 * Creates a new DOM element.
 */
export function createElement(tag: string, attrs: Record<string, any> = {}): HTMLElement {
  const element = document.createElement(tag);

  // Set attributes
  Object.entries(attrs).forEach(([attrName, attrValue]) => {
    if (attrName.startsWith('data-')) {
      const dataName = attrName.substring(5);
      const dataValue = attrValue;
      setData(element, { dataName, dataValue });
    } else if (attrName === 'style') {
      const styleData = attrValue as StyleNode[];
      setStyles(element, styleData);
    } else {
      setAttribute(element, attrName, attrValue);
    }
  });

  return element;
}

/**
 * Creates a new DOM element with no attributes.
 */
export function createElementNoAttrs(tag: string): HTMLElement {
  return createElement(tag);
}

/**
 * Creates a new DOM element with attributes.
 */
export function createElementWithAttrs(tag: string, attrs: Record<string, any>): HTMLElement {
  return createElement(tag, attrs);
}

/**
 * Creates a new DOM element with children.
 */
export function createElementWithChildren(tag: string, children: Node[]): HTMLElement {
  const element = createElement(tag);
  children.forEach(child => appendChild(element, child));
  return element;
}

/**
 * Creates a new DOM element with attributes and children.
 */
export function createElementFull(tag: string, attrs: Record<string, any>, children: Node[]): HTMLElement {
  const element = createElement(tag, attrs);
  children.forEach(child => appendChild(element, child));
  return element;
}

// Helper functions
function appendChild(element: HTMLElement, child: Node): void {
  element.appendChild(child);
}
