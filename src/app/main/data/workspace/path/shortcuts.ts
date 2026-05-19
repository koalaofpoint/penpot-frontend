/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (c) KALEIDOS INC
 */

import * as ST from "./state";
import { Observable, of, concat } from "rxjs";

export function escPressed() {
  return {
    type: "app.main.data.workspace.path.shortcuts/esc-pressed",
    watch: (): Observable<any> => {
      return of("interrupt");
    },
  };
}

export const shortcuts = {
  moveNodes: {
    tooltip: "M",
    command: "m",
    subsections: ["path-editor"],
  },
  drawNodes: {
    tooltip: "P",
    command: "p",
    subsections: ["path-editor"],
  },
  addNode: {
    tooltip: "Shift+",
    command: "shift++",
    subsections: ["path-editor"],
  },
  deleteNode: {
    tooltip: "Supr",
    command: ["del", "backspace"],
    subsections: ["path-editor"],
  },
  mergeNodes: {
    tooltip: "Cmd+J",
    command: "cmd+j",
    subsections: ["path-editor"],
  },
  joinNodes: {
    tooltip: "J",
    command: "j",
    subsections: ["path-editor"],
  },
  separateNodes: {
    tooltip: "K",
    command: "k",
    subsections: ["path-editor"],
  },
  makeCorner: {
    tooltip: "X",
    command: "x",
    subsections: ["path-editor"],
  },
  makeCurve: {
    tooltip: "C",
    command: "c",
    subsections: ["path-editor"],
  },
  snapNodes: {
    tooltip: "Cmd+'",
    command: ["cmd+'", "cmd+219"],
    subsections: ["path-editor"],
  },
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
  moveFastUp: {
    tooltip: "Shift+Up",
    command: "shift+up",
  },
  moveFastDown: {
    tooltip: "Shift+Down",
    command: "shift+down",
  },
  moveFastRight: {
    tooltip: "Shift+Right",
    command: "shift+right",
  },
  moveFastLeft: {
    tooltip: "Shift+Left",
    command: "shift+left",
  },
  moveUnitUp: {
    tooltip: "Up",
    command: "up",
  },
  moveUnitDown: {
    tooltip: "Down",
    command: "down",
  },
  moveUnitLeft: {
    tooltip: "Right",
    command: "right",
  },
  moveUnitRight: {
    tooltip: "Left",
    command: "left",
  },
};

export function getTooltip(shortcut: string): string {
  const shortcutDef = shortcuts[shortcut as keyof typeof shortcuts];
  if (!shortcutDef) {
    throw new Error(`Shortcut not found: ${shortcut}`);
  }
  return shortcutDef.tooltip;
}