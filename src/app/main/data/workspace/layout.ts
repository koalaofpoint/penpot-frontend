/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (c) KALEIDOS INC
 */

import { ptk, ev } from "../../potok";
import { d } from "../../../common/data";
import { dm } from "../../../common/data/macros";
import { storage } from "../../../util/storage";

export const validFlags = {
  sitemap: true,
  layers: true,
  comments: true,
  assets: true,
  documentHistory: true,
  hidePalettes: true,
  colorpalette: true,
  elementOptions: true,
  rulers: true,
  displayGuides: true,
  snapGuides: true,
  scaleText: true,
  dynamicAlignment: true,
  displayArtboardNames: true,
  snapRulerGuides: true,
  showPixelGrid: true,
  snapPixelGrid: true,
};

export const presets = {
  assets: {
    del: new Set(["sitemap", "layers", "documentHistory"]),
    add: new Set(["assets"]),
  },
  documentHistory: {
    del: new Set(["assets", "layers", "sitemap"]),
    add: new Set(["documentHistory"]),
  },
  layers: {
    del: new Set(["documentHistory", "assets"]),
    add: new Set(["sitemap", "layers"]),
  },
  tokens: {
    del: new Set(["sitemap", "layers", "documentHistory", "assets"]),
    add: new Set(["tokens"]),
  },
};

export const validOptionsMode = {
  design: true,
  prototype: true,
  inspect: true,
};

export const defaultLayout = new Set([
  "sitemap",
  "layers",
  "elementOptions",
  "rulers",
  "displayGuides",
  "snapGuides",
  "dynamicAlignment",
  "displayArtboardNames",
  "snapRulerGuides",
  "showPixelGrid",
  "snapPixelGrid",
]);

export const defaultGlobal = {
  optionsMode: "design",
};

export const ensureLayout = (name: string) => {
  return ptk.reify("ensure-layout", {
    ptk: {
      UpdateEvent: {
        update(_ctx, state) {
          const todel = presets[name]?.del || new Set();
          const toadd = presets[name]?.add || new Set();

          return {
            ...state,
            workspaceLayout: new Set([...state.workspaceLayout].filter(flag => !todel.has(flag)).concat(toadd)),
          };
        },
      },
    },
  });
};

declare let persistLayoutFlags!: (flags: Set<string>) => void;

export const toggleLayoutFlag = (flag: string, options?: { force?: boolean }) => {
  const force = options?.force || false;

  return ptk.reify("toggle-layout-flag", {
    ptk: {
      Event: {
        data: { name: flag },
      },
      UpdateEvent: {
        update(_ctx, state) {
          return {
            ...state,
            workspaceLayout: force
              ? new Set([...state.workspaceLayout, flag])
              : state.workspaceLayout.has(flag)
              ? new Set([...state.workspaceLayout].filter(f => f !== flag))
              : new Set([...state.workspaceLayout, flag]),
          };
        },
      },
      EffectEvent: {
        effect(_ctx, state) {
          persistLayoutFlags(state.workspaceLayout);
        },
      },
    },
  });
};

export const removeLayoutFlag = (flag: string) => {
  return ptk.reify("remove-layout-flag", {
    ptk: {
      UpdateEvent: {
        update(_ctx, state) {
          return {
            ...state,
            workspaceLayout: new Set([...state.workspaceLayout].filter(f => f !== flag)),
          };
        },
      },
      EffectEvent: {
        effect(_ctx, state) {
          persistLayoutFlags(state.workspaceLayout);
        },
      },
    },
  });
};

export const setOptionsMode = (mode: string) => {
  dm.assert("expected valid options mode", validOptionsMode[mode]);

  return ptk.reify("set-options-mode", {
    ptk: {
      Event: {
        data: {
          origin: "workspace:sidebar",
          mode: mode,
        },
      },
      UpdateEvent: {
        update(_ctx, state) {
          return {
            ...state,
            workspaceGlobal: {
              ...state.workspaceGlobal,
              optionsMode: mode,
            },
          };
        },
      },
    },
  });
};

export const layoutFlagsPersistenceMapping = {
  hidePalettes: "app.main.data.workspace/hide-palettes?",
  colorpalette: "app.main.data.workspace/show-colorpalette?",
  textpalette: "app.main.data.workspace/show-textpalette?",
  rulers: "app.main.data.workspace/show-rulers?",
};

export const loadLayoutFlags = (layout: string[]) => {
  const layoutSet = new Set(layout || []);

  return Object.entries(layoutFlagsPersistenceMapping).reduce((layout, [flag, key]) => {
    const value = storage.user.get(key, "none");
    switch (value) {
      case "none":
        return layout;
      case false:
        return new Set([...layout].filter(f => f !== flag));
      case true:
        return new Set([...layout, flag]);
      default:
        return layout;
    }
  }, layoutSet);
};

export const persistLayoutFlags = (layout: Set<string>) => {
  Object.entries(layoutFlagsPersistenceMapping).forEach(([flag, key]) => {
    storage.user.set(key, layout.has(flag));
  });
};

export const layoutStatePersistenceMapping = {
  selectedPalette: "app.main.data.workspace/selected-palette",
  selectedPaletteColorpicker: "app.main.data.workspace/selected-palette-colorpicker",
};

export const loadLayoutState = (state: any) => {
  return Object.entries(layoutStatePersistenceMapping).reduce((state, [key, skey]) => {
    const val = storage.user.get(skey, "none");
    return val === "none" ? state : { ...state, [key]: val };
  }, state);
};

export const persistLayoutState = (state: any) => {
  Object.entries(layoutStatePersistenceMapping).forEach(([key, skey]) => {
    const val = state[key];
    if (val === undefined) {
      storage.user.delete(skey);
    } else {
      storage.user.set(skey, val);
    }
  });
};