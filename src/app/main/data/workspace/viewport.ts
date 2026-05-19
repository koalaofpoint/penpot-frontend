// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from "../../../common/data";
import { assert, getIn } from "../../../common/data/macros";
import * as cfh from "../../../common/files/helpers";
import * as gal from "../../../common/geom/align";
import * as gpt from "../../../common/geom/point";
import * as gpr from "../../../common/geom/rect";
import * as gsh from "../../../common/geom/shapes";
import * as mth from "../../../common/math";
import * as ev from "../event";
import * as dsh from "../helpers";
import * as mse from "../../../util/mouse";
import { Observable, concat, filter, takeUntil, map, of, observeOn } from "rxjs";
import { asyncScheduler } from "rxjs";
import * as ptk from "../../../potok/v2/ptk";

interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface LocalState {
  vport?: Rect;
  vbox?: Rect;
  zoom?: number;
  zoomInverse?: number;
  hideToolbar?: boolean;
  panning?: boolean;
}

function updateViewportFn(
  local: LocalState,
  size: Rect
): LocalState {
  if (!local.vport) {
    return { ...local, vport: size };
  }

  const wprop = local.vport.width / size.width;
  const hprop = local.vport.height / size.height;

  const updatedVbox = (vbox: Rect) => {
    const newWidth = vbox.width / wprop;
    const newHeight = vbox.height / hprop;
    return gpr.updateRect(vbox, { width: newWidth, height: newHeight });
  };

  return {
    ...local,
    vport: size,
    vbox: local.vbox ? updatedVbox(local.vbox) : { ...size, x: 0, y: 0 },
  };
}

function initializeViewport(
  state: any,
  local: LocalState,
  size: Rect
): LocalState {
  const pageId = state.currentPageId;
  const objects = dsh.lookupPageObjects(state, pageId);
  const shapes = cfh.getImmediateChildren(objects);
  const srect = gsh.shapesToRect(shapes);
  const newLocal: LocalState = {
    ...local,
    vport: size,
    zoom: 1,
    zoomInverse: 1,
    hideToolbar: false,
  };

  if (!d.isNumber(srect.width) || !d.isNumber(srect.height)) {
    return { ...newLocal, vbox: { ...size, x: 0, y: 0 } };
  }

  if (srect.width > size.width || srect.height > size.height) {
    const adjustedRect = gal.adjustToViewport(size, srect, { padding: 40, minZoom: 0.01 });
    const zoom = size.width / srect.width;
    return {
      ...newLocal,
      zoom,
      zoomInverse: 1 / zoom,
      vbox: gpr.merge(newLocal.vbox || {}, adjustedRect),
    };
  }

  const vx = srect.x + (srect.width - size.width) / 2;
  const vy = srect.y + (srect.height - size.height) / 2;
  const vbox = gpr.updateRect(size, { x: vx, y: vy });

  return { ...newLocal, vbox };
}

function setupViewport(state: any, local: LocalState, size: Rect): LocalState {
  if (local.vbox && local.vport) {
    return updateViewportFn(local, size);
  }
  return initializeViewport(state, local, size);
}

export function initializeViewport(size: Rect): ptk.UpdateEvent {
  if (!gpr.isRect(size)) {
    throw new Error("expected `size` to be a rect instance");
  }

  return {
    type: "app.main.data.workspace/initialize-viewport",
    update(state: any): any {
      const currentLocal = state.workspaceLocal || {};
      const newLocal = setupViewport(state, currentLocal, size);
      return {
        ...state,
        workspaceLocal: newLocal,
      };
    },
  };
}

export function calculateCenteredViewbox(
  local: LocalState,
  position: gpt.Point
): LocalState {
  const vbox = local.vbox!;
  const nw = vbox.width / 2;
  const nh = vbox.height / 2;
  const nx = position.x - nw;
  const ny = position.y - nh;

  return {
    ...local,
    vbox: { ...vbox, x: nx, y: ny },
  };
}

export function updateViewportPositionCenter(
  position: gpt.Point
): ptk.UpdateEvent {
  if (!gpt.isPoint(position)) {
    throw new Error("expected a point instance for `position` param");
  }

  return {
    type: "app.main.data.workspace/update-viewport-position-center",
    update(state: any): any {
      const local = state.workspaceLocal || {};
      const newLocal = calculateCenteredViewbox(local, position);
      return {
        ...state,
        workspaceLocal: newLocal,
      };
    },
  };
}

export function updateViewportPosition(opts: {
  x?: (v: number) => number;
  y?: (v: number) => number;
}): ptk.UpdateEvent {
  assert(typeof opts.x === "function", "expected function for `x`");
  assert(typeof opts.y === "function", "expected function for `y`");

  return {
    type: "app.main.data.workspace/update-viewport-position",
    update(state: any): any {
      const vbox = state.workspaceLocal?.vbox || {};
      return {
        ...state,
        workspaceLocal: {
          ...state.workspaceLocal,
          vbox: {
            ...vbox,
            x: opts.x ? opts.x(vbox.x) : vbox.x,
            y: opts.y ? opts.y(vbox.y) : vbox.y,
          },
        },
      };
    },
  };
}

export function updateViewportSize(
  resizeType: "left" | "right" | "top" | "bottom",
  size: Rect
): ptk.UpdateEvent {
  return {
    type: "app.main.data.workspace/update-viewport-size",
    update(state: any): any {
      const local = state.workspaceLocal || {};
      const { vport } = local;

      if (!vport || mth.almostZero(size.width) || mth.almostZero(size.height)) {
        return state;
      }

      const wprop = vport.width / size.width;
      const hprop = vport.height / size.height;

      const vbox = local.vbox || {};
      const vboxX = vbox.x;
      const vboxY = vbox.y;
      const vboxWidth = vbox.width;
      const vboxHeight = vbox.height;

      const vboxWidthPrime = vboxWidth / wprop;
      const vboxHeightPrime = vboxHeight / hprop;

      let vboxXPrime: number;
      let vboxYPrime: number;

      switch (resizeType) {
        case "left":
          vboxXPrime = vboxX + (vboxWidth - vboxWidthPrime);
          break;
        case "right":
          vboxXPrime = vboxX;
          break;
        default:
          vboxXPrime = vboxX + (vboxWidth - vboxWidthPrime) / 2;
      }

      switch (resizeType) {
        case "top":
          vboxYPrime = vboxY + (vboxHeight - vboxHeightPrime);
          break;
        case "bottom":
          vboxYPrime = vboxY;
          break;
        default:
          vboxYPrime = vboxY + (vboxHeight - vboxHeightPrime) / 2;
      }

      return {
        ...state,
        workspaceLocal: {
          ...local,
          vport: size,
          vbox: {
            ...vbox,
            x: vboxXPrime,
            y: vboxYPrime,
            width: vboxWidthPrime,
            height: vboxHeightPrime,
          },
        },
      };
    },
  };
}

export function startPanning(): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace/start-panning",
    watch(_: any, state: any, stream: any): Observable<any> {
      const zoom = state.workspaceLocal?.zoom || 1;

      if (state.workspaceLocal?.panning) {
        return empty();
      }

      const stopper = stream.pipe(
        filter((e: any) => e.type === "app.main.data.workspace/finish-panning")
      );

      const setPanningTrue = of((state: any) => ({
        ...state,
        workspaceLocal: { ...state.workspaceLocal, panning: true },
      }));

      const panEvents = stream.pipe(
        filter(mse.isPointerEvent),
        filter((e: any) => e.source === "delta"),
        takeUntil(stopper),
        observeOn(asyncScheduler),
        map((event: any) => {
          const delta = getIn(event, ["pt"]);
          return updateViewportPosition({
            x: (v) => v - delta.x / zoom,
            y: (v) => v - delta.y / zoom,
          });
        })
      );

      return concat(setPanningTrue, panEvents);
    },
  };
}

export function finishPanning(): ptk.UpdateEvent {
  return {
    type: "app.main.data.workspace/finish-panning",
    update(state: any): any {
      const { panning, ...rest } = state.workspaceLocal || {};
      return {
        ...state,
        workspaceLocal: rest,
      };
    },
  };
}
