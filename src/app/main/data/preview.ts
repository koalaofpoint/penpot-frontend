// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { d, dm } from "../../common/data";
import { cfh } from "../../common/files/helpers";
import { ctst } from "../../common/types/shape-tree";
import { dsh } from "./helpers";
import { fonts } from "../fonts";
import { refs } from "../refs";
import { cb } from "../../util/code-beautify";
import { cg } from "../../util/code-gen";
import { ts } from "../../util/timers";
import { rx } from "../../beicon/v2";
import { set } from "../../clojure.set";
import { str } from "../../cuerdas/core";
import { ptk } from "../../potok/v2";

export interface Shape {
  id: string;
  content: any;
  selrect: { width: number; height: number };
}

export interface State {
  files: Record<string, any>;
  currentFileId?: string;
  currentPageId?: string;
  workspaceLocal: {
    selected?: string[];
  };
}

const styleType = "css";
const markupType = "html";

const pageTemplate = `
<!DOCTYPE html>
<html>
  <head>
    <style>
    %s
    </style>
  </head>
  <body>
  %s
  </body>
</html>`;

const updatePreviewWindow = (preview: Window, code: string, width: number, height: number) => {
  if (preview) {
    if ("load" in preview) {
      (preview as any).load(code, width, height);
    } else {
      ts.schedule(() => updatePreviewWindow(preview, code, width, height));
    }
  }
};

const shapesToFonts = (shapes: Shape[]) => {
  return shapes.reduce((acc, shape) => {
    if (cfh.isTextShape(shape)) {
      const shapeFonts = fonts.getContentFonts(shape.content);
      return set.union(acc, shapeFonts);
    }
    return acc;
  }, new Set<string>());
};

export const updatePreview = (preview: Window, shapeId: string) => {
  return ptk.reify("update-preview", {
    effect(_state: State, _prevState: State, _dispatch: ptk.Dispatch) => {
      const objects = dsh.lookupPageObjectsByIdInFile(
        _state,
        _state.currentFileId || "",
        _state.currentPageId || ""
      );

      if (!objects) return;

      const shape = objects[shapeId] as Shape | undefined;
      if (!shape) return;

      const allChildren = rx.pipe(
        rx.from(cfh.selectedWithChildren(objects, [shapeId])),
        rx.map((selectedIds) => ctst.sortZIndex(objects, selectedIds)),
        rx.map((sortedIds) => sortedIds.map((id) => objects[id]).filter(Boolean))
      );

      fontsStream.subscribe((fonts: string[]) => {
        const fontfacesCss = fonts.join("\n");
        const styleCode = fontfacesCss + "\n" + cb.formatCode(
          styleType,
          cg.generateStyleCode(objects, styleType, [shape], allChildren)
        );

        const markupCode = cg.generateFormattedMarkupCode(objects, markupType, [shape]);

        updatePreviewWindow(
          preview,
          pageTemplate.replace("%s", styleCode).replace("%s", markupCode),
          shape.selrect.width,
          shape.selrect.height
        );
      });
    },
  });
};

const fontsStream = rx.pipe(
  rx.from([] as string[]), // This should be populated with actual fonts
  rx.mergeMap((font) => fonts.fetchFontCss(font)),
  rx.reduce((acc: string[], css: string) => [...acc, css], []),
  rx.map((cssArray) => cssArray.join("\n"))
);

export const openPreviewSelected = () => {
  return ptk.reify("open-preview-selected", {
    watch(_state: State, _prevState: State, _dispatch: ptk.Dispatch) => {
      const selected = dsh.lookupSelected(_state);
      if (selected.length === 0) return rx.empty();

      const shapeId = selected[0];
      const closedPreview = rx.subject();
      const preview = window.open("/#/frame-preview", "_blank");

      if (preview) {
        preview.addEventListener("beforeunload", () => {
          closedPreview.next(true);
        });
      }

      return rx.pipe(
        rx.from(refs.allChildrenObjects(shapeId)),
        { emitCurrentValue: true },
        rx.takeUntil(closedPreview),
        rx.debounceTime(1000),
        rx.map(() => updatePreview(preview as Window, shapeId))
      );
    },
  });
};