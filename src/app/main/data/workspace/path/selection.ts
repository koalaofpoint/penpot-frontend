/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (c) KALEIDOS INC
 */

import * as DM from "../common/data/macros";
import * as GPT from "../common/geom/point";
import * as GRT from "../common/geom/rect";
import * as GSH from "../common/geom/shapes";
import * as ST from "./state";
import * as MS from "../streams";
import * as MSE from "../util/mouse";
import { Observable, from, filter, map, merge, bufferTime, pipe } from "rxjs";
import { distinctContiguous } from "rxjs/operators";

export function pathPointerEnter(position: any) {
  return {
    type: "app.main.data.workspace.path.selection/path-pointer-enter",
    update: (_: any, state: any) => {
      const id = ST.getPathId(state);
      return DM.updateIn(state, ["workspace-local", "edit-path", id, "hover-points"], (set = new Set()) =>
        set.add(position)
      );
    },
  };
}

export function pathPointerLeave(position: any) {
  return {
    type: "app.main.data.workspace.path.selection/path-pointer-leave",
    update: (_: any, state: any) => {
      const id = ST.getPathId(state);
      return DM.updateIn(state, ["workspace-local", "edit-path", id, "hover-points"], (set = new Set()) => {
        set.delete(position);
        return set;
      });
    },
  };
}

export function pathHandlerEnter(index: number, prefix: string) {
  return {
    type: "app.main.data.workspace.path.selection/path-handler-enter",
    update: (_: any, state: any) => {
      const id = ST.getPathId(state);
      return DM.updateIn(
        state,
        ["workspace-local", "edit-path", id, "hover-handlers"],
        (set = new Set()) => set.add([index, prefix])
      );
    },
  };
}

export function pathHandlerLeave(index: number, prefix: string) {
  return {
    type: "app.main.data.workspace.path.selection/path-handler-leave",
    update: (_: any, state: any) => {
      const id = ST.getPathId(state);
      return DM.updateIn(state, ["workspace-local", "edit-path", id, "hover-handlers"], (set = new Set()) => {
        set.delete([index, prefix]);
        return set;
      });
    },
  };
}

export function selectNodeArea(initialSet: Set<any>, remove: boolean) {
  return {
    type: "app.main.data.workspace.path.selection/select-node-area",
    update: (_: any, state: any) => {
      const selrect = DM.getIn(state, ["workspace-local", "selrect"]);
      const id = DM.getIn(state, ["workspace-local", "edition"]);
      const content = ST.getPath(state, "content");

      const selectedPoint = selrect
        ? (p: any) => GSH.hasPointRect(selrect, p)
        : () => false;

      const xform = (contentArr: any[]) =>
        contentArr
          .filter((s) => s.command !== "close-path")
          .map((s) => GPT.point(s.params))
          .filter(selectedPoint);

      const positions = remove
        ? new Set([...initialSet].filter((p) => !xform(content).includes(p)))
        : new Set([...initialSet, ...xform(content)]);

      if (id != null) {
        return DM.assocIn(state, ["workspace-local", "edit-path", id, "selected-points"], positions);
      }
      return state;
    },
  };
}

export function selectNode(position: any, shift: boolean) {
  return {
    type: "app.main.data.workspace.path.selection/select-node",
    update: (_: any, state: any) => {
      const id = DM.getIn(state, ["workspace-local", "edition"]);
      const selectedPoints = DM.getIn(state, ["workspace-local", "edit-path", id, "selected-points"], new Set());

      let newSelectedPoints: Set<any>;
      if (shift && selectedPoints.has(position)) {
        newSelectedPoints = new Set(selectedPoints);
        newSelectedPoints.delete(position);
      } else if (shift) {
        newSelectedPoints = new Set(selectedPoints);
        newSelectedPoints.add(position);
      } else {
        newSelectedPoints = new Set([position]);
      }

      if (id != null) {
        return DM.assocIn(state, ["workspace-local", "edit-path", id, "selected-points"], newSelectedPoints);
      }
      return state;
    },
  };
}

export function deselectAll() {
  return {
    type: "app.main.data.workspace.path.selection/deselect-all",
    update: (_: any, state: any) => {
      const id = ST.getPathId(state);
      return DM.assocIn(state, ["workspace-local", "edit-path", id, "selected-points"], new Set());
    },
  };
}

export function updateAreaSelection(rect: any) {
  return {
    type: "app.main.data.workspace.path.selection/update-area-selection",
    update: (_: any, state: any) => {
      return DM.assocIn(state, ["workspace-local", "selrect"], rect);
    },
  };
}

export function clearAreaSelection() {
  return {
    type: "app.main.data.workspace.path.selection/clear-area-selection",
    update: (_: any, state: any) => {
      const { selrect, ...rest } = state["workspace-local"] || {};
      return { ...state, "workspace-local": rest };
    },
  };
}

export function handleAreaSelection(append: boolean, remove: boolean) {
  const validRect = (zoom: number, { width, height }: any) => width > 10 / zoom || height > 10 / zoom;

  return {
    type: "app.main.data.workspace.path.selection/handle-area-selection",
    watch: (_: any, state: any, stream: Observable<any>) => {
      const id = DM.getIn(state, ["workspace-local", "edition"]);
      const zoom = DM.getIn(state, ["workspace-local", "zoom"], 1);
      const stopper = MSE.dragStopper(stream);
      const fromP = MS.mousePosition.getValue();

      const initialSet =
        append || remove
          ? DM.getIn(state, ["workspace-local", "edit-path", id, "selected-points"], new Set())
          : new Set();

      const selrectStream = MS.mousePosition.pipe(
        map((p: any) => GRT.pointsToRect([fromP, p])),
        filter((r: any) => validRect(zoom, r))
      );

      return merge(
        selrectStream.pipe(map(() => updateAreaSelection(null))),
        selrectStream.pipe(
          bufferTime(100),
          map((arr) => arr[arr.length - 1]),
          pipe(distinctContiguous()),
          map(() => selectNodeArea(initialSet, remove))
        )
      );
    },
  };
}

export function updateSelection(pointChange: (p: any) => any) {
  return {
    type: "app.main.data.workspace.path.selection/update-selection",
    update: (_: any, state: any) => {
      const id = ST.getPathId(state);
      const selectedPoints = DM.getIn(state, ["workspace-local", "edit-path", id, "selected-points"], new Set());
      const newSelectedPoints = new Set([...selectedPoints].map(pointChange));
      return DM.assocIn(state, ["workspace-local", "edit-path", id, "selected-points"], newSelectedPoints);
    },
  };
}