// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { log } from "app.common.logging";
import * as du from "app.main.data.profile";
import * as dwl from "app.main.data.workspace.layout";
import { rx } from "beicon.v2.core";
import * as ptk from "potok.v2.core";

// Change this to :info :debug or :trace to debug this module
log.setLevel("warn");

// HELPERS

export function initialized?(state: any): boolean {
  return (
    state.currentFileId !== undefined &&
    state.currentPageId !== undefined
  );
}

export function interrupt?(e: any): boolean {
  return e === "interrupt";
}

export function setWorkspaceVisited(): ptk.WatchEvent {
  return ptk.reify("set-workspace-visited", {
    watch(_state, state) {
      const profile = state.profile;
      const props = profile.props;

      if (!props.workspaceVisited) {
        return rx.of(du.updateProfileProps({ workspaceVisited: true }));
      }

      return rx.EMPTY;
    },
  });
}

// Toolbar

export function hideToolbar(): ptk.UpdateEvent {
  return ptk.reify("hide-toolbar", {
    update(_state, state) {
      return state.setIn(["workspaceLocal", "hide-toolbar"], true);
    },
  });
}

export function showToolbar(): ptk.UpdateEvent {
  return ptk.reify("show-toolbar", {
    update(_state, state) {
      return state.setIn(["workspaceLocal", "hide-toolbar"], false);
    },
  });
}

export function toggleToolbarVisibility(): ptk.UpdateEvent {
  return ptk.reify("toggle-toolbar-visibility", {
    update(_state, state) {
      return state.updateIn(["workspaceLocal", "hide-toolbar"], (value: boolean) => !value);
    },
  });
}

// Read only

export function setWorkspaceReadOnly(readOnly: boolean): ptk.UpdateEvent {
  return ptk.reify("set-workspace-read-only", {
    update(_state, state) {
      return state.set("workspaceGlobal", { readOnly });
    },

    watch(_state, _stream) {
      if (readOnly) {
        return rx.of("interrupt", dwl.removeLayoutFlag("colorpalette"), dwl.removeLayoutFlag("textpalette"));
      }

      return rx.EMPTY;
    },
  });
}