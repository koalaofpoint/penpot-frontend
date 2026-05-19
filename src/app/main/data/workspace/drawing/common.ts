// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as dm from "app.common.data.macros";
import * as cfh from "app.common.files.helpers";
import * as gsh from "app.common.geom.shapes";
import * as ctm from "app.common.types.modifiers";
import * as cts from "app.common.types.shape";
import * as dsh from "app.main.data.helpers";
import * as dwsh from "app.main.data.workspace.shapes";
import * as dwu from "app.main.data.workspace.undo";
import * as mw from "app.main.worker";
import * as rx from "beicon.v2.core";
import * as ptk from "potok.v2.core";

export function clearDrawing(): ptk.UpdateEvent {
  return ptk.reify("clear-drawing", {
    update(_state, state) {
      return state.dissoc("workspace-drawing");
    },
  });
}

export function handleFinishDrawing(): ptk.WatchEvent {
  return ptk.reify("handle-finish-drawing", {
    watch(_state, state, _stream) {
      const drawingState = state.workspaceDrawing;
      const shape = drawingState.object;
      const tool = drawingState.tool;
      const objects = dsh.lookupPageObjects(state);
      const pageId = state.currentPageId;

      if (shape.initialized) {
        const clickDraw = shape.clickDraw;
        const text = cfh.textShape(shape);

        const width = drawingState.width ?? 100;
        const height = drawingState.height ?? 100;

        let shapeFinal = shape;

        if (!clickDraw) {
          shapeFinal = dm.assoc(shapeFinal, "growType", "fixed");
        }

        if (clickDraw && !text) {
          shapeFinal = dm.assoc(
            dm.assoc(
              shapeFinal,
              "width", width,
              "height", height
            ),
            "selrect", null,
            "points", null
          );
          shapeFinal = cts.setupShape(shapeFinal);
          shapeFinal = gsh.transformShape(ctm.moveModifiers(-width / 2, -height / 2), shapeFinal);
        }

        if (clickDraw && text) {
          shapeFinal = dm.assoc(
            dm.assoc(shapeFinal, "height", 17, "width", 4, "growType", "autoWidth")
          );
          shapeFinal = cts.setupShape(shapeFinal);
        }

        shapeFinal = dm.dissoc(shapeFinal, "initialized", "clickDraw");

        return rx.concat(
          cfh.frameShape(shapeFinal)
            ? rx.of(dwu.startUndoTransaction(shapeFinal.id))
            : rx.empty(),

          rx.of(dwsh.addShape(shapeFinal, { noSelect: tool === "curve" })),

          cfh.frameShape(shapeFinal)
            ? rx.concat(
              rx.pipe(
                mw.ask({
                  cmd: "index/query-selection",
                  pageId,
                  rect: shapeFinal.selrect,
                  includeFrames: true,
                  fullFrame: true,
                  usingSelrect: true
                }),
                rx.map((selection: any[]) => cfh.cleanLoops(objects, selection)),
                rx.map((selection: any[]) => dwsh.moveShapesIntoFrame(shapeFinal.id, selection))
              ),
              rx.of(dwu.commitUndoTransaction(shapeFinal.id))
            )
            : rx.empty()
        );
      }

      // Delay so the mouse event can read the drawing state
      return rx.pipe(
        rx.of(clearDrawing()),
        rx.delay(0)
      );
    },
  });
}