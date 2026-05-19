// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from "app/common/data";
import * as txt from "app/common/types/text";
import * as styles from "app/util/text/content/styles";

export function isTextNode(node: Node): boolean {
  return node.nodeType === Node.TEXT_NODE;
}

export function isElement(node: Node, tag: string): boolean {
  return (
    node.nodeType === Node.ELEMENT_NODE &&
    node.nodeName === tag.toUpperCase()
  );
}

export function isLineBreak(node: Node): boolean {
  return isElement(node, "br");
}

export function isTextSpanChild(node: Node): boolean {
  return isLineBreak(node) || isTextNode(node);
}

export function getTextSpanText(element: HTMLElement): string {
  if (!isTextSpanChild(element.firstChild!)) {
    throw new TypeError("Invalid text span child");
  }
  if (isLineBreak(element.firstChild!)) {
    return "";
  }
  return element.textContent ?? "";
}

function valueEmpty(v: unknown): boolean {
  return (
    v === null ||
    v === undefined ||
    (typeof v === "string" && v === "") ||
    (typeof v === "object" && !Array.isArray(v) && Object.keys(v).length === 0)
  );
}

export function getAttrsFromStyles(
  element: HTMLElement,
  attrs: string[],
  defaults: Record<string, unknown>,
): Record<string, unknown> {
  const style = element.style;
  return attrs.reduce((acc, key) => {
    const value = styles.mapping.has(key)
      ? (() => {
          const styleName = styles.getStyleNameAsCssVariable(key);
          const [, styleDecode] = styles.mapping.get(key)!;
          return styleDecode(style.getPropertyValue(styleName));
        })()
      : (() => {
          const styleName = styles.getStyleName(key);
          return styles.normalizeAttrValue(key, style.getPropertyValue(styleName));
        })();
    return {...acc, [key]: valueEmpty(value) ? defaults[key] : value};
  }, {} as Record<string, unknown>);
}

export function getTextSpanStyles(element: HTMLElement): Record<string, unknown> {
  return getAttrsFromStyles(element, txt.textNodeAttrs, txt.getDefaultTextAttrs());
}

export function getParagraphStyles(element: HTMLElement): Record<string, unknown> {
  return getAttrsFromStyles(
    element,
    d.concatSet(txt.paragraphAttrs, txt.textNodeAttrs),
    {...txt.defaultParagraphAttrs, ...txt.getDefaultTextAttrs()},
  );
}

export function getRootStyles(element: HTMLElement): Record<string, unknown> {
  return getAttrsFromStyles(element, txt.rootAttrs, txt.defaultRootAttrs);
}

export function createTextSpan(element: HTMLElement): txt.TextSpan {
  const text = getTextSpanText(element);
  return {
    text,
    key: (element as HTMLElement & {id: string}).id,
    ...getTextSpanStyles(element),
  } as txt.TextSpan;
}

export function createParagraph(element: HTMLElement): txt.TextParagraph {
  return {
    type: "paragraph",
    key: (element as HTMLElement & {id: string}).id,
    children: Array.from(element.children).map((child) =>
      createTextSpan(child as HTMLElement),
    ),
    ...getParagraphStyles(element),
  } as txt.TextParagraph;
}

export function createRoot(element: HTMLElement): txt.TextRoot {
  const rootStyles = getRootStyles(element);
  return {
    type: "root",
    key: (element as HTMLElement & {id: string}).id,
    children: [
      {
        type: "paragraph-set",
        children: Array.from(element.children).map((child) =>
          createParagraph(child as HTMLElement),
        ),
      },
    ],
    ...rootStyles,
  } as txt.TextRoot;
}
