/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (c) KALEIDOS INC
 */

import * as PATH from "../common/types/path";
import * as ST from "./state";

export const initPath = () => ({ type: "app.main.data.workspace.path.common/init-path", data: {} });

export function cleanEditState(state: any): any {
  const { last-point, prev-handler, drag-handler, preview, ...rest } = state;
  return rest;
}

export function finishPath() {
  return {
    type: "app.main.data.workspace.path.common/finish-path",
    update: (_: any, state: any) => {
      const id = ST.getPathId(state);
      const pathLocation = ST.getPathLocation(state, "content");
      const cleanedState = cleanEditState(
        (state["workspace-local"]?.["edit-path"]?.[id]) || {}
      );

      return {
        ...state,
        ["workspace-local"]: {
          ...state["workspace-local"],
          ["edit-path"]: {
            ...state["workspace-local"]?.["edit-path"],
            [id]: cleanedState,
          },
        },
        [pathLocation]: PATH.closeSubpaths(state[pathLocation] || []),
      };
    },
  };
}