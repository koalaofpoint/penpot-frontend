/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (c) KALEIDOS INC
 */

import * as DS from "../shortcuts";
import * as DW from "../workspace";
import * as DWU from "../workspace/undo";
import * as ST from "../store";
import { Observable, of } from "rxjs";

export function escPressed() {
  return {
    type: "app.main.data.workspace.grid-layout.shortcuts/esc-pressed",
    watch: (_: any, state: any): Observable<any> => {
      const editionId =
        DM.getIn(state, ["workspace-drawing", "object", "id"]) ||
        DM.getIn(state, ["workspace-local", "edition"]);
      const pathEditMode = DM.getIn(state, ["workspace-local", "edit-path", editionId, "edit-mode"]);

      if (pathEditMode !== "draw") {
        return of("interrupt");
      }
      return of();
    },
  };
}

export const shortcuts = {
  escape: {
    tooltip: "Esc",
    command: ["escape", "enter", "v"],
  },
  undo: {
    tooltip: "Cmd+Z",
    command: "cmd+z",
  },
  redo: {
    tooltip: "Cmd+Y",
    command: ["cmd+shift+z", "cmd+y"],
  },
  increaseZoom: {
    tooltip: "+",
    command: "+",
  },
  decreaseZoom: {
    tooltip: "-",
    command: "-",
  },
  resetZoom: {
    tooltip: "Shift+0",
    command: "shift+0",
  },
  fitAll: {
    tooltip: "Shift+1",
    command: "shift+1",
  },
  zoomSelected: {
    tooltip: "Shift+2",
    command: "shift+2",
  },
};

export function getTooltip(shortcut: string): string {
  const shortcutDef = shortcuts[shortcut as keyof typeof shortcuts];
  if (!shortcutDef) {
    throw new Error(`Shortcut not found: ${shortcut}`);
  }
  return shortcutDef.tooltip;
}