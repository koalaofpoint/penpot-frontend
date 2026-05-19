// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as dsh from "../helpers";
import * as dwpc from "./path/common";
import { Observable, filter, take, map, of, concat, empty } from "rxjs";
import * as ptk from "../../../potok/v2/ptk";

export function isInterrupt(e: any): boolean {
  return e === "interrupt";
}

export function clearEditionMode(): ptk.Event {
  return {
    type: "app.main.data.workspace/clear-edition-mode",
    update(state: any): any {
      const { edition, editPath, ...restLocal } = state.workspaceLocal || {};
      const { tool, object, lock, ...restDrawing } = state.workspaceDrawing || {};

      return {
        ...state,
        workspaceLocal: restLocal,
        workspaceDrawing: restDrawing,
        workspaceGridEdition: undefined,
      };
    },
    watch(_: any, state: any, _stream: any): Observable<any> {
      const id = state.workspaceLocal?.edition;

      if (id === null || id === undefined) {
        return empty();
      }

      return concat([dwpc.finishPath()]);
    },
  };
}

export function startEditionMode(id: string): ptk.Event {
  if (typeof id !== "string" || !id) {
    throw new Error("expected valid uuid for `id`");
  }

  return {
    type: "app.main.data.workspace/start-edition-mode",
    update(state: any): any {
      const objects = dsh.lookupPageObjects(state);

      if (!objects.has(id)) {
        return state;
      }

      const { edition, ...restLocal } = state.workspaceLocal || {};

      return {
        ...state,
        workspaceLocal: {
          ...restLocal,
          edition: id,
        },
        workspaceGridEdition: undefined,
      };
    },
    watch(_: any, __: any, stream: any): Observable<any> {
      return stream.pipe(
        filter(isInterrupt),
        take(1),
        map(() => clearEditionMode())
      );
    },
  };
}
