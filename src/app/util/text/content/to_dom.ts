// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from "app/common/data";
import * as txt from "app/common/types/text";
import * as dom from "app/util/dom";
import * as styles from "app/util/text/content/styles";

export function setDataset(element: HTMLElement, data: Record<string, unknown>): void {
  Object.entries(data).forEach(([dataName, dataValue]) => {
    dom.setData(element, dataName, dataValue);
  });
}

export function setStyles(element: HTMLElement, elementStyles: Record<string, unknown>): void {
  Object.entries(elementStyles).forEach(([styleName, styleValue]) => {
    if (styles.mapping.has(styleName)) {
      const [styleEncode] = styles.mapping.get(styleName)!;
      const styleEncodedValue = styleEncode(styleValue);
      dom.setStyle(
        element,
        styles.getStyleNameAsCssVariable(styleName),
        styleEncodedValue,
      );
    } else {
      dom.setStyle(
        element,
        styles.getStyleName(styleName),
        styles.normalizeStyleValue(styleName, styleValue),
      );
    }
  });
}

export function createElement(
  tag: string,
  attrs?: Record<string, unknown> | null,
  children?: (HTMLElement | Text)[] | null,
): HTMLElement {
  const element = dom.createElement(tag);

  if (attrs) {
    Object.entries(attrs).forEach(([attrName, attrValue]) => {
      switch (attrName) {
        case "data":
          setDataset(element, attrValue as Record<string, unknown>);
          break;
        case "style":
          setStyles(element, attrValue as Record<string, unknown>);
          break;
        default:
          dom.setAttribute(element, attrName, attrValue as string | number | boolean);
      }
    });
  }

  if (children) {
    children.forEach((child) => {
      dom.appendChild(element, child);
    });
  }

  return element;
}

export function getStylesFromAttrs(
  node: Record<string, unknown>,
  attrs: string[],
  defaults: Record<string, unknown>,
): Record<string, unknown> {
  const nodeStyles = attrs.reduce((acc, key) => {
    const defaultValue = defaults[key];
    return {...acc, [key]: node[key] ?? defaultValue};
  }, {} as Record<string, unknown>);

  let fills: unknown[];
  if (
    node["fill-color"] !== undefined ||
    node["fill-opacity"] !== undefined ||
    node["fill-color-gradient"] !== undefined
  ) {
    fills = [d.withoutNils({
      "fill-color": node["fill-color"],
      "fill-opacity": node["fill-opacity"],
      "fill-color-gradient": node["fill-color-gradient"],
      "fill-color-ref-id": node["fill-color-ref-id"],
      "fill-color-ref-file": node["fill-color-ref-file"],
    })];
  } else if (node["fills"] === undefined || node["fills"] === null) {
    fills = [{"fill-color": "#000000", "fill-opacity": 1}];
  } else {
    fills = node["fills"] as unknown[];
  }

  return {...nodeStyles, fills};
}

export function getParagraphStyles(
  paragraph: txt.TextParagraph,
): Record<string, unknown> {
  const nodeStyles = getStylesFromAttrs(
    paragraph,
    d.concatSet(txt.paragraphAttrs, txt.textNodeAttrs),
    txt.defaultTextAttrs,
  );

  const fontSize =
    paragraph.children?.some((child: txt.TextSpan) => child.text !== "")
      ? "0"
      : (nodeStyles["font-size"] ?? txt.defaultTypography["font-size"]);

  let lineHeight = nodeStyles["line-height"] as string | undefined;
  if (lineHeight === undefined || lineHeight === "") {
    lineHeight = txt.defaultTypography["line-height"] as string;
  }

  return {...nodeStyles, "font-size": fontSize, "line-height": lineHeight};
}

export function getRootStyles(root: txt.TextRoot): Record<string, unknown> {
  return getStylesFromAttrs(root, txt.rootAttrs, txt.defaultTextAttrs);
}

export function getTextSpanStyles(
  inline: txt.TextSpan,
  paragraph: txt.TextParagraph,
): Record<string, unknown> {
  const node = inline.text === "" ? paragraph : inline;
  const nodeStyles = getStylesFromAttrs(node, txt.textNodeAttrs, txt.defaultTextAttrs);
  const {[txt.textNodeAttrs.includes("line-height") ? "line-height" : ""]: _, ...rest} =
    nodeStyles;
  return rest;
}

export function normalizeSpaces(text: string | null): string | null {
  if (!text) return null;
  return text.replace(/\//g, "/\u200B");
}

export function getTextSpanChildren(
  inline: txt.TextSpan,
  paragraph: txt.TextParagraph,
): (HTMLElement | Text)[] {
  if (inline.text === "" && paragraph.children?.length === 1) {
    return [dom.createElement("br")];
  }
  return [dom.createText(normalizeSpaces(inline.text) ?? "")];
}

export function createRandomKey(): string {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(36);
}

export function hasContent(paragraph: txt.TextParagraph): boolean {
  return paragraph.children?.some((child) => child.text !== "") ?? false;
}

export function createTextSpan(
  inline: txt.TextSpan,
  paragraph: txt.TextParagraph,
): HTMLElement {
  return createElement(
    "span",
    {
      id: inline.key ?? createRandomKey(),
      data: {itype: "span"},
      style: getTextSpanStyles(inline, paragraph),
    },
    getTextSpanChildren(inline, paragraph),
  );
}

export function createParagraph(paragraph: txt.TextParagraph): HTMLElement {
  return createElement(
    "div",
    {
      id: paragraph.key ?? createRandomKey(),
      data: {itype: "paragraph"},
      style: getParagraphStyles(paragraph),
    },
    paragraph.children?.map((child) => createTextSpan(child, paragraph)) ?? [],
  );
}

export function createRoot(root: txt.TextRoot): HTMLElement {
  const rootStyles = getRootStyles(root);
  const paragraphs = root.children?.[0]?.children ?? [];
  const filteredParagraphs = paragraphs.map((_, index) => paragraphs[index]);

  return createElement(
    "div",
    {
      id: root.key ?? createRandomKey(),
      data: {itype: "root"},
      style: rootStyles,
    },
    filteredParagraphs.map(createParagraph),
  );
}
