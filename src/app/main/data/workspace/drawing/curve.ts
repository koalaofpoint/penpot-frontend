// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as dm from "app.common.data.macros";
import * as grc from "app.common.geom.rect";
import * as gslf from "app.common.geom.shapes.flex-layout";
import * as gslg from "app.common.geom.shapes.grid-layout";
import * as ctn from "app.common.types.container";
import * as path from "app.common.types.path";
import * as cts from "app.common.types.shape";
import * as ctst from "app.common.types.shape-tree";
import * as ctl from "app.common.types.shape.layout";
import * as uuid from "app.common.uuid";
import * as dsh from "app.main.data.helpers";
import * as common from "app.main.data.workspace.drawing.common";
import * as ms from "app.main.streams";
import * as mse from "app.util.mouse";
import * as ups from "app.util.path.simplify-curve";
import * as rx from "beicon.v2.core";
import * as ptk from "potok.v2.core";

const simplifyTolerance = 0.3;

export function setupFrame(): ptk.UpdateEvent {
  return ptk.reify("setup-frame", {
    update(_state, state) {
      const objects = dsh.lookupPageObjects(state);
      const content = dm.getIn(state, ["workspace-drawing", "object", "content"]);
      const position = path.getHandlerPoint(content, 0, null);

      const frame = ctst.topNestedFrame(objects, position);
      const frameId = frame ? ctn.getFirstValidParent(objects, frame).id : null;

      const flexLayout = ctl.flexLayout(objects, frameId);
      const gridLayout = ctl.gridLayout(objects, frameId);

      const dropIndex = flexLayout ? gslf.getDropIndex(frameId, objects, position) : undefined;
      const dropCell = gridLayout ? gslg.getDropCell(frameId, objects, position) : undefined;

      return dm.updateIn(state, ["workspace-drawing", "object"],
        (object: any) => {
          let result = dm.assoc(object, "frame-id", frameId);
          result = dm.assoc(result, "parent-id", frameId);

          if (dropIndex !== undefined) {
            result = Object.assign(result, { index: dropIndex });
          }

          if (dropCell !== undefined) {
            result = Object.assign(result, { cell: dropCell });
          }

          return result;
        }
      );
    },
  });
}

export function insertPoint(point: any): ptk.UpdateEvent {
  return ptk.reify("insert-point", {
    update(_state, state) {
      return dm.updateIn(state, ["workspace-drawing", "object"],
        (object: any) => {
          const points = dm.getIn(object, ["::points"], []).concat([point]);
          const content = path.pointsToContent(points);
          const selrect = path.calcSelrect(content);
          const points2 = grc.rectToPoints(selrect);

          return Object.assign(object, {
            "::points": points,
            content: content,
            selrect: selrect,
            points: points2
          });
        }
      );
    },
  });
}

export function finishDrawing(): ptk.UpdateEvent {
  return ptk.reify("finish-drawing", {
    update(_state, state) {
      return dm.updateIn(state, ["workspace-drawing", "object"],
        (shape: any) => {
          const points = ups.simplify(dm.getIn(shape, ["::points"], []), simplifyTolerance);
          const content = path.pointsToContent(points);
          const selrect = path.calcSelrect(content);
          const points2 = grc.rectToPoints(selrect);

          let result = Object.assign(shape, {
            content: content,
            selrect: selrect,
            points: points2
          });
          result = dm.dissoc(result, "::points");

          if (points.length === 0 || selrect === null || content.length <= 1) {
            result = Object.assign(result, { "initialized?": false });
          }

          return result;
        }
      );
    },
  });
}

export function handleDrawing(): ptk.WatchEvent {
  return ptk.reify("handle-drawing", {
    watch(_state, _state, stream) {
      const stopper = mse.dragStopper(stream);
      const mouse = rx.sample(10, ms.mousePosition);
      const shape = cts.setupShape({
        type: "path",
        initialized: true,
        frameId: uuid.zero,
        parentId: uuid.zero,
        "::points": []
      });

      return rx.concat(
        rx.of((state: any) => dm.assoc(state, "workspace-drawing", { object: shape })),
        rx.pipe(
          mouse,
          rx.map(insertPoint),
          rx.takeUntil(stopper)
        ),
        rx.of(setupFrame()),
        rx.of(finishDrawing()),
        rx.of(common.handleFinishDrawing())
      );
    },
  });
}