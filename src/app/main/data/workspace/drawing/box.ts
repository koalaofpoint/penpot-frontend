// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as dm from "app.common.data.macros";
import * as gpt from "app.common.geom.point";
import * as grc from "app.common.geom.rect";
import * as gsh from "app.common.geom.shapes";
import * as gslf from "app.common.geom.shapes.flex-layout";
import * as gslg from "app.common.geom.shapes.grid-layout";
import * as mth from "app.common.math";
import * as ctn from "app.common.types.container";
import * as ctm from "app.common.types.modifiers";
import * as cts from "app.common.types.shape";
import * as ctst from "app.common.types.shape-tree";
import * as ctl from "app.common.types.shape.layout";
import * as uuid from "app.common.uuid";
import * as dsh from "app.main.data.helpers";
import * as common from "app.main.data.workspace.drawing.common";
import * as snap from "app.main.snap";
import * as ms from "app.main.streams";
import * as mse from "app.util.mouse";
import * as rx from "beicon.v2.core";
import * as ptk from "potok.v2.core";

export function adjustRatio(point: any, initial: any): any {
  const v = gpt.toVec(point, initial);
  const dx = Math.abs(v.x);
  const dy = Math.abs(v.y);
  const sx = Math.sign(v.x);
  const sy = Math.sign(v.y);

  let result = point;

  if (dx > dy) {
    result = dm.assoc(result, "y", point.y - sy * (dx - dy));
  }

  if (dy > dx) {
    result = dm.assoc(result, "x", point.x - sx * (dy - dx));
  }

  return result;
}

export function resizeShape(shape: any, initial: any, point: any, lock?: boolean, mod?: boolean, snapPixel?: boolean): any {
  if (shape.x === undefined || shape.y === undefined || shape.width === undefined || shape.height === undefined) {
    return shape;
  }

  let drawRect = grc.makeRect(initial,
    lock ? adjustRatio(point, initial) : point
  );

  if (snapPixel) {
    drawRect = dm.update(drawRect, "width", (w: number) => Math.max(w, 1));
    drawRect = dm.update(drawRect, "height", (h: number) => Math.max(h, 1));
  }

  const shapeRect = grc.makeRect(shape.x, shape.y, shape.width, shape.height);
  const scaleV = gpt.point(
    drawRect.width / shapeRect.width,
    drawRect.height / shapeRect.height
  );
  const moveV = gpt.toVec(
    gpt.point(shapeRect),
    gpt.point(drawRect)
  );

  return dm.assoc(
    dm.assoc(shape, "click-draw?", false),
    "__meta__",
    { mod },
    "transform",
    ctm.compose(
      ctm.empty(),
      ctm.resize(scaleV, gpt.point(shape.x, shape.y)),
      ctm.move(moveV)
    )
  );
}

function updateDrawing(state: any, initial: any, point: any, lock?: boolean, mod?: boolean, snapPixel?: boolean): any {
  return state.updateIn(["workspace-drawing", "object"],
    (obj: any) => resizeShape(obj, initial, point, lock, mod, snapPixel)
  );
}

export function moveDrawing({x, y}: {x: number, y: number}) {
  return (state: any) => state.updateIn(["workspace-drawing", "object"],
    (obj: any) => gsh.absoluteMove(obj, gpt.point(x, y))
  );
}

export function handleDrawing(type: string) {
  return ptk.reify("handle-drawing", {
    async watch(_state, state, stream) {
      const stopper = mse.dragStopper(stream);
      const layout = state.workspaceLayout;
      const zoom = state.workspaceLocal?.zoom ?? 1;

      const snapPixel = layout.has("snap-pixel-grid");
      const initial = snapPixel ? gpt.roundStep(ms.mousePosition.current, 1) : ms.mousePosition.current;

      const pageId = state.currentPageId;
      const objects = dsh.lookupPageObjects(state, pageId);
      const focus = state.workspaceFocusSelected;

      const fid = await ctst.topNestedFrame(objects, initial)
        .then(ctn.getFirstValidParent)
        .then(frame => frame.id);

      const flexLayout = ctl.flexLayout(objects, fid);
      const gridLayout = ctl.gridLayout(objects, fid);

      const dropIndex = flexLayout ? gslf.getDropIndex(fid, objects, initial) : undefined;
      const dropCell = gridLayout ? gslg.getDropCell(fid, objects, initial) : undefined;

      const shape = cts.setupShape({
        type,
        x: initial.x,
        y: initial.y,
        frameId: fid,
        parentId: fid,
        initialized: true,
        clickDraw: true,
        hideInViewer: type === "frame" && fid !== uuid.zero
      });

      let shapeWithMeta = shape;
      if (dropIndex !== undefined) {
        shapeWithMeta = Object.assign(shapeWithMeta, { index: dropIndex });
      }
      if (dropCell !== undefined) {
        shapeWithMeta = Object.assign(shapeWithMeta, { cell: dropCell });
      }

      return rx.concat(
        // Add shape to drawing state
        rx.of((state: any) => state.update("workspaceDrawing", (drawing: any) =>
          dm.assoc(drawing, "object", shapeWithMeta)
        )),

        // Initial SNAP
        rx.concat(
          rx.pipe(
            rx.concat(
              snap.closestSnapPoint(pageId, [shapeWithMeta], objects, layout, zoom, focus, initial)
                .pipe(rx.map(moveDrawing))
            ),

            rx.pipe(
              ms.mousePosition,
              rx.filter(pos => gpt.distance(pos, initial) * zoom > 10),
              rx.takeUntil(stopper),
              rx.withLatestFrom(ms.mousePositionShift, ms.mousePositionMod),
              rx.switchMap(([current, ...rest]: any[]) => {
                const [shift, mod, point] = rest;
                return snap.closestSnapPoint(pageId, [shapeWithMeta], objects, layout, zoom, focus, point)
                  .pipe(rx.map((snapPoint: any) => [current, shift, mod, snapPoint]));
              }),
              rx.map(([_, shift, mod, point]: any[]) =>
                (state: any) => updateDrawing(state, initial,
                  snapPixel ? gpt.roundStep(point, 1) : point,
                  shift, mod, snapPixel
                )
              )
            )
          )
        ),

        rx.pipe(
          rx.of(common.handleFinishDrawing),
          rx.delay(100)
        )
      );
    },
  });
}