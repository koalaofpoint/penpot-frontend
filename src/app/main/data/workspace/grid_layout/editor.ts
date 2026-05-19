/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (c) KALEIDOS INC
 */

import * as DM from "../common/data/macros";
import * as GRT from "../common/geom/rect";
import * as CTL from "../common/types/shape/layout";
import * as DSH from "../data/helpers";
import { Observable, of, merge, filter, map, take, takeUntil, concat } from "rxjs";

export function hoverGridCell(gridId: any, cellId: any, addToSet: boolean) {
  return {
    type: "app.main.data.workspace.grid-layout.editor/hover-grid-cell",
    update: (_: any, state: any) => {
      return DM.updateIn(state, ["workspace-grid-edition", gridId, "hover"], (hoverSet: Set<any> = new Set()) => {
        if (addToSet) {
          hoverSet.add(cellId);
        } else {
          hoverSet.delete(cellId);
        }
        return hoverSet;
      });
    },
  };
}

export function addToSelection(gridId: any, cellId: any, shift: boolean = false) {
  return {
    type: "app.main.data.workspace.grid-edition/add-to-selection",
    update: (_: any, state: any) => {
      if (shift) {
        const objects = DSH.lookupPageObjects(state);
        const grid = objects[gridId];
        const selected = DM.getIn(state, ["workspace-grid-edition", gridId, "selected"], new Set());
        const newSelected = new Set([...selected, cellId]);
        const cells = [...newSelected].map((id) => DM.getIn(grid, ["layout-grid-cells", id]));

        const { firstRow, lastRow, firstColumn, lastColumn } = CTL.cellsCoordinates(cells);
        const finalSelected = new Set(
          CTL.cellsInArea(grid, firstRow, lastRow, firstColumn, lastColumn).map((c) => c.id)
        );

        return DM.assocIn(state, ["workspace-grid-edition", gridId, "selected"], finalSelected);
      }

      return DM.updateIn(state, ["workspace-grid-edition", gridId, "selected"], (s: Set<any>) => {
        s.add(cellId);
        return s;
      });
    },
  };
}

export function setSelection(gridId: any, cellId: any) {
  return {
    type: "app.main.data.workspace.grid-layout.editor/set-selection",
    update: (_: any, state: any) => {
      return DM.assocIn(state, ["workspace-grid-edition", gridId, "selected"], new Set([cellId]));
    },
  };
}

export function removeSelection(gridId: any, cellId: any) {
  return {
    type: "app.main.data.workspace.grid-layout.editor/remove-selection",
    update: (_: any, state: any) => {
      return DM.updateIn(state, ["workspace-grid-edition", gridId, "selected"], (s: Set<any>) => {
        s.delete(cellId);
        return s;
      });
    },
  };
}

export function clearSelection(gridId: any) {
  return {
    type: "app.main.data.workspace.grid-layout.editor/clear-selection",
    update: (_: any, state: any) => {
      return DM.updateIn(state, ["workspace-grid-edition", gridId], (ge: any) => {
        const { selected, ...rest } = ge;
        return rest;
      });
    },
  };
}

export function cleanSelection(gridId: any) {
  return {
    type: "app.main.data.workspace.grid-layout.editor/clean-selection",
    update: (_: any, state: any) => {
      const objects = DSH.lookupPageObjects(state);
      const shape = objects[gridId];

      return DM.updateIn(state, ["workspace-grid-edition", gridId, "selected"], (selected: Set<any>) => {
        return new Set([...selected].filter((id) => shape["layout-grid-cells"]?.has(id)));
      });
    },
  };
}

export function stopGridLayoutEditing(gridId: any) {
  return {
    type: "app.main.data.workspace.grid-layout.editor/stop-grid-layout-editing",
    update: (_: any, state: any) => {
      const { [gridId]: _, ...rest } = state["workspace-grid-edition"] || {};
      return {
        ...state,
        "workspace-grid-edition": rest,
      };
    },
  };
}

export function locateBoard(gridId: any) {
  return {
    type: "app.main.data.workspace.grid-layout.editor/locate-board",
    update: (_: any, state: any) => {
      const objects = DSH.lookupPageObjects(state);
      const srect = objects[gridId]?.selrect;

      if (!srect) return state;

      return {
        ...state,
        ["workspace-local"]: {
          ...state["workspace-local"],
          vbox: {
            ...state["workspace-local"]?.vbox,
            x: srect.x,
            y: srect.y,
            x1: srect.x,
            x2: srect.x + srect.width,
            y1: srect.y,
            y2: srect.y + srect.height,
          },
        },
      };
    },
  };
}

export function selectTrackCells(gridId: any, type: "column" | "row", index: number) {
  return {
    type: "app.main.data.workspace.grid-layout.editor/select-track-cells",
    update: (_: any, state: any) => {
      const objects = DSH.lookupPageObjects(state);
      const parent = objects[gridId];

      const cells =
        type === "column" ? CTL.cellsByColumn(parent, index) : CTL.cellsByRow(parent, index);

      const selected = new Set(cells.map((c) => c.id));

      return DM.assocIn(state, ["workspace-grid-edition", gridId, "selected"], selected);
    },
  };
}