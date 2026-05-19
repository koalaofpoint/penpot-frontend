// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { parseDouble, getProp, str, nilv } from '../../common/data';
// import { ensureLoaded } from '../../main/fonts';
// import {
//   boundingRectToRect,
//   getAttribute,
//   getComputedStyle,
//   getPropertyValue,
//   query,
//   queryAll,
//   loadFont,
//   checkFont
// } from './dom';
// import { parseTextNodes } from './text-position-data';

/**
 * Text node data
 */
export interface TextNodeData {
  node: Node;
  position: { x: number; y: number; width: number; height: number };
  text: string;
  direction: string;
}

/**
 * Transform data with font information
 */
export interface TransformData {
  node: Node;
  position: { x: number; y: number; width: number; height: number };
  text: string;
  direction: string;
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  textTransform: string;
  textDecoration: string;
  letterSpacing: string;
  fontStyle: string;
  fills: unknown;
}

/**
 * Cache for font loading promises
 */
const loadPromises = new Map<string, Promise<void>>();

/**
 * Load font if not already loading
 */
function loadFont(font: string): Promise<void> {
  const existing = loadPromises.get(font);
  if (existing) {
    return existing;
  }

  // TODO: Implement with proper imports
  // const loadPromise = loadFont(font);
  // loadPromises.set(font, loadPromise);
  // return loadPromise;
  return Promise.resolve();
}

/**
 * Resolve font for a node
 */
function resolveFont(node: Node): Promise<void> {
  // TODO: Implement with proper imports
  // const styles = getComputedStyle(node);
  // let font = getPropertyValue(styles, 'font');
  //
  // if (!font || font === '') {
  //   // Firefox 95 won't return font correctly.
  //   // We can get font shorthand with font-size + font-family
  //   font = `${getPropertyValue(styles, 'font-size')} ${getPropertyValue(styles, 'font-family')}`;
  // }
  //
  // const fontId = getPropertyValue(styles, '--font-id');
  //
  // return ensureLoaded(fontId)
  //   .then(() => {
  //     if (!checkFont(font)) {
  //       return loadFont(font);
  //     }
  //   })
  //   .catch(cause => {
  //     console.error(`Cannot load font ${fontId}`);
  //   });
  return Promise.resolve();
}

/**
 * Parse text nodes
 */
export function parseTextNodes(
  parentNode: Node,
  direction: string,
  textNode: unknown,
  textAlign: string
): TextNodeData[] {
  // TODO: Implement with proper imports
  // const entries = textPositionData.parseTextNodes(parentNode, textNode, textAlign);
  //
  // return entries
  //   .filter(entry => entry.position !== null)
  //   .map(entry => ({
  //     node: entry.node,
  //     position: boundingRectToRect(entry.position),
  //     text: entry.text,
  //     direction
  //   }));
  return [];
}

/**
 * Process text node
 */
function processTextNode(parentNode: Node): TextNodeData[] {
  // TODO: Implement with proper imports
  // const root = getParentWithSelector(parentNode, '.text-node-html');
  // const paragraph = getParentWithSelector(parentNode, '.paragraph');
  // const shapeX = parseDouble(getAttribute(root, 'data-x'));
  // const shapeY = parseDouble(getAttribute(root, 'data-y'));
  // const direction = getComputedStyle(parentNode).direction;
  // const textAlign = getComputedStyle(paragraph).textAlign;
  //
  // return parseTextNodes(parentNode, direction, textNode, textAlign)
  //   .map(data => ({
  //     ...data,
  //     position: {
  //       x: data.position.x + shapeX,
  //       y: data.position.y + shapeY
  //     }
  //   }));
  return [];
}

/**
 * Calculate text node positions for a shape
 */
function calcTextNodePositions(shapeId: string): Promise<Node[]> {
  // TODO: Implement with proper imports
  // const textNodes = queryAll(`#html-text-node-${shapeId} .text-node`);
  // const promises = textNodes.map(resolveFont);
  //
  // return Promise.all(promises).then(() => {
  //   return textNodes.map(processTextNode).flat();
  // });
  return Promise.resolve([]);
}

/**
 * Calculate position data for text nodes
 */
export function calcPositionData(shapeId: string): Promise<TransformData[] | null> {
  if (!shapeId) {
    return Promise.resolve(null);
  }

  return calcTextNodePositions(shapeId).then(textNodes => {
    return textNodes.map(data => {
      // TODO: Implement with proper imports
      // const styles = getComputedStyle(data.node);
      // const position = {
      //   ...data.position,
      //   y: data.position.y + getProp(data.position, 'height')
      // };
      //
      // return {
      //   ...position,
      //   direction: data.direction,
      //   fontFamily: str(getProperty(styles, 'font-family')),
      //   fontSize: str(getProperty(styles, 'font-size')),
      //   fontWeight: str(getProperty(styles, 'font-weight')),
      //   textTransform: str(getProperty(styles, 'text-transform')),
      //   textDecoration: str(getProperty(styles, 'text-decoration')),
      //   letterSpacing: str(getProperty(styles, 'letter-spacing')),
      //   fontStyle: str(getProperty(styles, 'font-style')),
      //   fills: decodeStr(getProperty(styles, '--fills')),
      //   text: data.text
      // };
      return data as unknown as TransformData;
    });
  });
}
