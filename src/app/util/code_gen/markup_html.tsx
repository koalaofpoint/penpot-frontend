// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import {renderToStaticMarkup} from "react-dom/server";
import * as d from "app/common/data";
import * as dm from "app/common/data/macros";
import * as cfh from "app/common/files/helpers";
import * as ctl from "app/common/types/shape/layout";
import * as cfg from "app/config";
import * as text from "app/main/ui/shapes/text/html-text";
import * as cgc from "app/util/code-gen/common";
import {generateSVG} from "app/util/code-gen/markup-svg";
import * as str from "cuerdas/core";
import {element} from "rumext.v2";

function fmt(template: string, ...args: any[]): string {
  return dm.fmt(template, ...args);
}

function str_(...args: any[]): string {
  return dm.str(...args);
}

export function generateHTML(
  objects: any[],
  shape: any,
  level: number = 0,
): string | null {
  if (!shape || !shape.selrect) {
    return null;
  }

  const indent = str.repeat("  ", level);
  let shapeHtml: string;

  if (cgc.svgMarkup(shape)) {
    const svgMarkup = generateSVG(objects, shape);
    shapeHtml = fmt(
      "%<div class=\"%\">\n%\n%</div>",
      indent,
      str_("shape ", d.name(shape.type), " ", cgc.shapeToSelector(shape)),
      svgMarkup,
      indent,
    );
  } else if (cfh.textShape(shape)) {
    const textShapeHtml = renderToStaticMarkup(
      element(text.textShape, {shape, code: true}),
    ) as string;
    const cleanedTextShapeHtml = textShapeHtml.replace(
      /style\s*=\s*["'][^"']*["']/g,
      "",
    );
    shapeHtml = fmt(
      "%<div class=\"%\">\n%\n%</div>",
      indent,
      str_("shape ", d.name(shape.type), " ", cgc.shapeToSelector(shape)),
      cleanedTextShapeHtml,
      indent,
    );
  } else if (cfh.imageShape(shape)) {
    const data = shape.metadata || shape.fillImage;
    const imageUrl = cfg.resolveFileMedia(data);
    shapeHtml = fmt(
      "%<img src=\"%\" class=\"%\">\n%</img>",
      indent,
      imageUrl,
      str_("shape ", d.name(shape.type), " ", cgc.shapeToSelector(shape)),
      indent,
    );
  } else if (!shape.shapes || shape.shapes.length === 0) {
    shapeHtml = fmt(
      "%<div class=\"%\">\n%</div>",
      indent,
      str_("shape ", d.name(shape.type), " ", cgc.shapeToSelector(shape)),
      indent,
    );
  } else {
    const children = shape.shapes.map((id: string) => objects[id]);
    const reverse = ctl.anyLayout(shape);
    const orderedChildren = reverse ? [...children].reverse() : children;
    shapeHtml = fmt(
      "%<div class=\"%\">\n%\n%</div>",
      indent,
      str_(d.name(shape.type), " ", cgc.shapeToSelector(shape)),
      orderedChildren
        .map((child: any) => generateHTML(objects, child, level + 1))
        .join("\n"),
      indent,
    );
  }

  if (cgc.hasWrapper(objects, shape)) {
    shapeHtml = fmt(
      "<div class=\"%\">%</div>",
      str_(cgc.shapeToSelector(shape), "-wrapper"),
      shapeHtml,
    );
  }

  return fmt(
    "%<!-- % -->\n%",
    indent,
    str_(d.name(shape.type), ": ", shape.name),
    shapeHtml,
  );
}

export function generateMarkup(objects: any[], shapes: any[]): string {
  return shapes
    .map((shape) => generateHTML(objects, shape))
    .filter(Boolean)
    .join("\n");
}
