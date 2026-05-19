// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from "app/common/data";
import * as dm from "app/common/data/macros";
import * as cfh from "app/common/files/helpers";
import * as gmt from "app/common/geom/matrix";
import * as gsb from "app/common/geom/shapes/bounds";
import * as gpo from "app/common/geom/shapes/points";
import * as legacyTxt from "app/common/text";
import * as ctl from "app/common/types/shape/layout";
import * as typesText from "app/common/types/text";
import * as sts from "app/main/ui/shapes/text/styles";
import * as cgc from "app/util/code-gen/common";
import {formatValue, formatShadowToCss} from "app/util/code-gen/style-css-formats";
import {getValue} from "app/util/code-gen/style-css-values";
import * as str from "cuerdas/core";

const prelude = `
html, body {
  margin: 0;
  min-height: 100%;
  min-width: 100%;
  padding: 0;
}

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
}

* {
  box-sizing: border-box;
}

.text-node { background-clip: text !important; -webkit-background-clip: text !important; }

`;

const shapeWrapperCssProperties = new Set([
  ":flex-shrink",
  ":margin",
  ":max-height",
  ":min-height",
  ":max-width",
  ":min-width",
  ":align-self",
  ":justify-self",
  ":grid-column",
  ":grid-row",
  ":z-index",
  ":top",
  ":left",
  ":position",
]);

const shapeCssProperties = [
  ":position",
  ":left",
  ":top",
  ":width",
  ":height",
  ":transform",
  ":background",
  ":border",
  ":border-start-start-radius",
  ":border-start-end-radius",
  ":border-end-start-radius",
  ":border-end-end-radius",
  ":box-shadow",
  ":filter",
  ":opacity",
  ":overflow",
  ":blend-mode",
  ":display",
  ":align-items",
  ":align-content",
  ":justify-items",
  ":justify-content",
  ":gap",
  ":column-gap",
  ":row-gap",
  ":padding-inline-start",
  ":padding-inline-end",
  ":padding-block-start",
  ":padding-block-end",
  ":z-index",
  ":flex-direction",
  ":flex-wrap",
  ":flex",
  ":flex-grow",
  ":grid-template-rows",
  ":grid-template-columns",
  ":grid-template-areas",
  ":grid-auto-flow",
  ":flex-shrink",
  ":margin",
  ":margin-block-start",
  ":margin-block-end",
  ":margin-inline-start",
  ":margin-inline-end",
  ":max-height",
  ":max-block-size",
  ":min-height",
  ":min-block-size",
  ":max-width",
  ":max-inline-size",
  ":min-width",
  ":min-inline-size",
  ":align-self",
  ":justify-self",
  ":grid-column",
  ":grid-row",
  ":grid-area",
];

function shapeToCssProperty(
  shape: any,
  objects: any,
  property: any,
  options: any,
): [any, any] | null {
  const value = getValue(property, shape, objects, options);
  if (value) return [property, value];
  return null;
}

function shapeToWrapperCssProperties(
  shape: any,
  objects: any,
): [any, any][] | null {
  if (!ctl.anyLayoutImmediateChild(objects, shape) || gmt.unit(shape.transform))
    return null;

  const parent = objects[shape.parentId];
  const bounds = gpo.parentCoordsBounds(gpo.getPoints(shape), gpo.getPoints(parent));
  const width = gpo.widthPoints(bounds);
  const height = gpo.heightPoints(bounds);

  const result: [any, any][] = [[":width", width], [":height", height]];

  if (!ctl.anyLayoutImmediateChild(objects, shape) || !ctl.positionAbsolute(shape)) {
    result.push([":position", "relative"]);
  }

  return result;
}

function shapeToWrapperChildCssProperties(
  shape: any,
  objects: any,
): [any, any][] | null {
  if (!ctl.anyLayoutImmediateChild(objects, shape) || gmt.unit(shape.transform))
    return null;
  return [
    [":position", "absolute"],
    [":left", "50%"],
    [":top", "50%"],
  ];
}

function shapeToSvgProps(shape: any, objects: any): [any, any][] {
  const bounds = gsb.getObjectBounds(objects, shape);
  return [
    [":position", "absolute"],
    [":top", 0],
    [":left", 0],
    [
      ":transform",
      `translate(${-bounds.x - shape.selrect.x}px, ${-bounds.y - shape.selrect.y}px)`,
    ],
  ];
}

function shapeToCssProperties(
  shape: any,
  objects: any,
  properties: any[],
  options: any,
): [any, any][] {
  return properties
    .map((property) => {
      const value = getValue(property, shape, objects, options);
      if (value) return [property, value];
      return null;
    })
    .filter(Boolean) as [any, any][];
}

function formatCssValue(
  property: any,
  value: any,
  options: any,
): string | null {
  if (value === null || value === undefined) return null;
  return formatValue(property, value, options);
}

function formatCssProperty([property, value]: [any, any], options: any): string | null {
  if (value === null || value === undefined) return null;
  const formattedValue = formatCssValue(property, value, options);
  if (!formattedValue) return null;

  const propertyName =
    property === ":blend-mode" ? `mix-${d.name(property)}` : d.name(property);
  return `${propertyName}: ${formattedValue};`;
}

function formatCssProperties(properties: any[], options: any): string | null {
  if (!properties) return null;
  return properties
    .map((p) => `  ${formatCssProperty(p, options)}`)
    .filter(Boolean)
    .join("\n");
}

export function getShapePropertiesCss(
  objects: any,
  shape: any,
  properties: any[],
  options?: any,
): string | null {
  const cssProps = shapeToCssProperties(shape, objects, properties, options);
  return formatCssProperties(cssProps, options);
}

function formatJsStyles(properties: any, _options: any): string | null {
  const keys = Object.keys(properties).filter((k) => !k.startsWith("--"));
  const formattedProps = keys.map((key) => [
    str.kebab(key),
    (properties as any)[key],
  ]);
  return formatCssProperties(formattedProps, null);
}

function nodeToCss(shape: any, shapeSelector: string, node: any): string {
  let properties: any;
  switch (node.type) {
    case ":root":
    case "root":
      properties = sts.generateRootStyles(shape, node, true);
      break;
    case ":paragraph-set":
    case "paragraph-set":
      properties = sts.generateParagraphSetStyles(shape);
      break;
    case ":paragraph":
    case "paragraph":
      properties = sts.generateParagraphStyles(shape, node);
      break;
    default:
      properties = sts.generateTextStyles(shape, node);
  }

  const selector = `${shapeSelector} .${node.$id}`;
  return `.${selector} {\n${formatJsStyles(properties, null)}\n}`;
}

function generateTextCss(shape: any): string {
  const selector = cgc.shapeToSelector(shape);
  const indexedContent = legacyTxt.indexContent(shape.content);
  const textNodes = typesText.nodeSeq(indexedContent);
  return textNodes.map((node) => nodeToCss(shape, selector, node)).join("\n");
}

export function getShapeCssSelector(
  objects: any,
  shape: any,
  options?: any,
): string | null {
  if (!shape || !shape.selrect) return null;

  const selector = cgc.shapeToSelector(shape);
  const wrapper = cgc.hasWrapper(objects, shape);
  const svg = cgc.svgMarkup(shape);

  const cssPropertiesToUse = wrapper
    ? shapeCssProperties.filter((p) => !shapeWrapperCssProperties.has(p))
    : shapeCssProperties;

  const properties = formatCssProperties(
    shapeToCssProperties(shape, objects, cssPropertiesToUse, options),
    options,
  );

  let wrapperProperties: string | null = null;
  if (wrapper) {
    const wrapperCssProps = shapeToCssProperties(
      shape,
      objects,
      Array.from(shapeWrapperCssProperties),
      options,
    );
    const wrapperChildProps = shapeToWrapperCssProperties(shape, objects);
    const allWrapperProps = d.concatVec(wrapperCssProps, wrapperChildProps);
    wrapperProperties = formatCssProperties(allWrapperProps, options);
  }

  let wrapperChildProperties: string | null = null;
  if (wrapper) {
    const childProps = shapeToWrapperChildCssProperties(shape, objects);
    wrapperChildProperties = formatCssProperties(childProps, options);
  }

  let svgChildProps: string | null = null;
  if (svg) {
    const svgProps = shapeToSvgProps(shape, objects);
    svgChildProps = formatCssProperties(svgProps, options);
  }

  const shapeCss = formatCssProperties(
    shapeToCssProperties(shape, objects, cssPropertiesToUse, options),
    options,
  );

  const textCss = cfh.textShape(shape) ? generateTextCss(shape) : null;

  const parts: string[] = [];
  if (shape.name) parts.push(`/* ${shape.name} */`);
  if (wrapper && wrapperProperties) {
    parts.push(`.${selector}-wrapper {\n${wrapperProperties}\n}`);
  }
  if (wrapper && wrapperChildProperties) {
    parts.push(`.${selector}-wrapper > * {\n${wrapperChildProperties}\n}`);
  }
  if (svg && svgChildProps) {
    parts.push(`.${selector} > svg {\n${svgChildProps}\n}`);
  }
  if (shapeCss) {
    parts.push(`.${selector} {\n${shapeCss}\n}`);
  }
  if (textCss) {
    parts.push(textCss);
  }

  return parts.join("\n");
}

export function getCssProperty(
  objects: any,
  shape: any,
  property: any,
  options?: any,
): string | null {
  const cssProp = shapeToCssProperty(shape, objects, property, options);
  if (!cssProp) return null;
  return formatCssProperty(cssProp, options);
}

export function getCssValue(
  objects: any,
  shape: any,
  property: any,
  options?: any,
): string | null {
  const prop = shapeToCssProperty(shape, objects, property, options);
  if (!prop) return null;
  return formatCssValue(prop[0], prop[1], options);
}

export function generateStyle(
  objects: any,
  rootShapes: any[],
  allShapes: any[],
  options: {withPrelude?: boolean} = {withPrelude: true},
): string {
  const opts = {...options, rootShapes: new Set(rootShapes.map((s: any) => s.id))};
  const preludeStr = options.withPrelude ? prelude : "";

  const shapesCss = allShapes
    .map((shape) => getShapeCssSelector(objects, shape, opts))
    .filter(Boolean)
    .join("\n\n");

  return preludeStr + shapesCss;
}

export function shadowToCss(shadow: any): string {
  return `box-shadow: ${formatShadowToCss(shadow, {})} ;`;
}
