// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from "../../../common/data";
import * as dsh from "../helpers";
import * as dwc from "./common";
import { Observable, merge, filter, take, map, of } from "rxjs";
import * as ptk from "../../../potok/v2/ptk";

export function isInterrupt(e: any): boolean {
  return e === "interrupt" || e === "app.main.data.workspace.specialized-panel/interrupt";
}

export function clearSpecializedPanel(): ptk.UpdateEvent {
  return {
    type: "app.main.data.workspace.specialized-panel/clear-specialized-panel",
    update(state: any): any {
      const { specializedPanel, ...rest } = state;
      return rest;
    },
  };
}

export function openSpecializedPanel(type: string): ptk.Event {
  return {
    type: "app.main.data.workspace.specialized-panel/open-specialized-panel",
    update(state: any): any {
      const pageId = state.currentPageId;
      const objects = dsh.lookupPageObjects(state, pageId);
      const selectedIds = dsh.lookupSelected(state);
      const selectedShapes = selectedIds.map((id: string) => objects.get(id));

      return {
        ...state,
        specializedPanel: { type, shapes: selectedShapes },
      };
    },
    watch(_: any, __: any, stream: any): Observable<any> {
      const interrupt$ = stream.pipe(
        filter((e: any) => isInterrupt(e))
      );

      const undo$ = stream.pipe(
        filter((e: any) => e.type === dwc.undo)
      );

      return merge(interrupt$, undo$).pipe(
        take(1),
        map(() => clearSpecializedPanel())
      );
    },
  };
}
