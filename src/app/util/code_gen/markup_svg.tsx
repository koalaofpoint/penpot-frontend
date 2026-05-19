// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import {renderToStaticMarkup} from "react-dom/server";
import * as render from "app/main/render";
import * as cb from "app/util/code-beautify";
import * as str from "cuerdas/core";
import {element} from "rumext.v2";

export function generateSVG(objects: any[], shape: any): string {
  return renderToStaticMarkup(
    element(render.objectSVG, {
      objects,
      "object-id": shape.id,
    }),
  ) as string;
}

export function generateMarkup(objects: any[], shapes: any[]): string {
  return shapes.map((shape) => generateSVG(objects, shape)).join("\n");
}

export function generateFormattedMarkup(objects: any[], shapes: any[]): string {
  const markup = generateMarkup(objects, shapes);
  return cb.formatCode(markup, "svg");
}
