// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from "../../../common/data";
import { assert, getIn } from "../../../common/data/macros";
import * as cfh from "../../../common/files/helpers";
import * as gal from "../../../common/geom/align";
import * as gmt from "../../../common/geom/matrix";
import * as gpt from "../../../common/geom/point";
import * as grc from "../../../common/geom/rect";
import * as gsh from "../../../common/geom/shapes";
import * as ev from "../event";
import * as dsh from "../helpers";
import * as ms from "../../../streams";
import * as mse from "../../../util/mouse";
import { Observable, of, filter, takeUntil, map, concat, empty } from "rxjs";
import * as ptk from "../../../potok/v2/ptk";

interface LocalState {
  vbox?: grc.Rect;
  vport?: grc.Rect;
  zoom?: number;
  zoomInverse?: number;
}

function implUpdateZoom(
  local: LocalState,
  center: gpt.Point | null,
  zoom: number | ((z: number) => number)
): LocalState {
  const oldZoom = local.zoom || 1;
  const newZoom = typeof zoom === "function" ? zoom(oldZoom) : zoom;
  const actualCenter = center || (local.vbox ? grc.rectToCenter(local.vbox) : gpt.point(0, 0));
  const scale = oldZoom / newZoom;

  const mtx = gmt.scaleMatrix(gpt.point(scale), actualCenter);
  const vboxPrime = gsh.transformRect(local.vbox!, mtx);

  return {
    ...local,
    zoom: newZoom,
    zoomInverse: 1 / newZoom,
    vbox: {
      ...local.vbox,
      x: vboxPrime.x,
      y: vboxPrime.y,
      width: vboxPrime.width,
      height: vboxPrime.height,
    },
  };
}

export function increaseZoom(center?: gpt.Point): ptk.UpdateEvent {
  return {
    type: "app.main.data.workspace/increase-zoom",
    update(state: any): any {
      const actualCenter = center === undefined ? ms.mousePosition : center;
      const local = state.workspaceLocal || {};
      return {
        ...state,
        workspaceLocal: implUpdateZoom(
          local,
          actualCenter,
          (z) => Math.min(z * 1.3, 200)
        ),
      };
    },
  };
}

export function decreaseZoom(center?: gpt.Point): ptk.UpdateEvent {
  return {
    type: "app.main.data.workspace/decrease-zoom",
    update(state: any): any {
      const actualCenter = center === undefined ? ms.mousePosition : center;
      const local = state.workspaceLocal || {};
      return {
        ...state,
        workspaceLocal: implUpdateZoom(
          local,
          actualCenter,
          (z) => Math.max(z / 1.3, 0.01)
        ),
      };
    },
  };
}

export function setZoom(center: gpt.Point | null, scale: number): ptk.UpdateEvent {
  return {
    type: "app.main.data.workspace/set-zoom",
    update(state: any): any {
      const vp = getIn(state, ["workspaceLocal", "vbox"]);
      const x = vp.x + vp.width / 2;
      const y = vp.y + vp.height / 2;
      const actualCenter = center || gpt.point(x, y);

      const local = state.workspaceLocal || {};
      return {
        ...state,
        workspaceLocal: implUpdateZoom(
          local,
          actualCenter,
          (z) => Math.min(Math.max(z * scale, 0.01), 200)
        ),
      };
    },
  };
}

export const resetZoom: ptk.UpdateEvent = {
  type: "app.main.data.workspace/reset-zoom",
  update(state: any): any {
    const local = state.workspaceLocal || {};
    return {
      ...state,
      workspaceLocal: implUpdateZoom(local, null, 1),
    };
  },
};

export const zoomToFitAll: ptk.UpdateEvent = {
  type: "app.main.data.workspace/zoom-to-fit-all",
  update(state: any): any {
    const pageId = state.currentPageId;
    const objects = dsh.lookupPageObjects(state, pageId);
    const shapes = cfh.getImmediateChildren(objects);
    const srect = gsh.shapesToRect(shapes);

    if (shapes.length === 0) {
      return state;
    }

    const local = state.workspaceLocal || {};
    const { vport } = local;

    const adjustedRect = gal.adjustToViewport(vport, srect, { padding: 160, minZoom: 0.01 });
    const zoom = vport.width / srect.width;

    return {
      ...state,
      workspaceLocal: {
        ...local,
        zoom,
        zoomInverse: 1 / zoom,
        vbox: { ...local.vbox, ...adjustedRect },
      },
    };
  },
};

export const zoomToSelectedShape: ptk.UpdateEvent = {
  type: "app.main.data.workspace/zoom-to-selected-shape",
  update(state: any): any {
    const selected = dsh.lookupSelected(state);

    if (selected.length === 0) {
      return state;
    }

    const pageId = state.currentPageId;
    const objects = dsh.lookupPageObjects(state, pageId);
    const selectedShapes = selected.map((id: string) => objects.get(id));
    const srect = gsh.shapesToRect(selectedShapes);

    const local = state.workspaceLocal || {};
    const { vport } = local;

    const adjustedRect = gal.adjustToViewport(vport, srect, { padding: 40, minZoom: 0.01 });
    const zoom = vport.width / srect.width;

    return {
      ...state,
      workspaceLocal: {
        ...local,
        zoom,
        zoomInverse: 1 / zoom,
        vbox: { ...local.vbox, ...adjustedRect },
      },
    };
  },
};

export function fitToShapes(ids: string[]): ptk.UpdateEvent {
  return {
    type: "app.main.data.workspace/fit-to-shapes",
    update(state: any): any {
      if (ids.length === 0) {
        return state;
      }

      const pageId = state.currentPageId;
      const objects = dsh.lookupPageObjects(state, pageId);
      const shapes = ids.map((id) => objects.get(id));
      const srect = gsh.shapesToRect(shapes);

      const local = state.workspaceLocal || {};
      const { vport } = local;

      const adjustedRect = gal.adjustToViewport(vport, srect, { padding: 40, minZoom: 0.01 });
      const zoom = vport.width / adjustedRect.width;

      return {
        ...state,
        workspaceLocal: {
          ...local,
          zoom,
          zoomInverse: 1 / zoom,
          vbox: { ...local.vbox, ...adjustedRect },
        },
      };
    },
  };
}

export function startZooming(pt: gpt.Point | null): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace/start-zooming",
    watch(_: any, state: any, stream: any): Observable<any> {
      const stopper = stream.pipe(
        filter((e: any) => e.type === "app.main.data.workspace/finish-zooming")
      );

      if (state.workspaceLocal?.zooming) {
        return empty();
      }

      const setZoomingTrue = of((state: any) => ({
        ...state,
        workspaceLocal: { ...state.workspaceLocal, zooming: true },
      }));

      const zoomEvents = stream.pipe(
        filter(mse.isPointerEvent),
        filter((e: any) => e.source === "delta"),
        map((e: any) => e.pt),
        takeUntil(stopper),
        map((delta) => {
          const scale = 1 + delta.y / 100;
          return setZoom(pt, scale);
        })
      );

      return concat(setZoomingTrue, zoomEvents);
    },
  };
}

export function finishZooming(): ptk.UpdateEvent {
  return {
    type: "app.main.data.workspace/finish-zooming",
    update(state: any): any {
      const { zooming, ...rest } = state.workspaceLocal || {};
      return {
        ...state,
        workspaceLocal: rest,
      };
    },
  };
}
