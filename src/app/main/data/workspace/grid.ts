// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { assert } from "../../../common/data/macros";
import * as ctg from "../../../common/types/grid";
import * as d from "../../../common/data";
import * as dch from "../changes";
import * as dsh from "../helpers";
import * as dwsh from "./shapes";
import { Observable, of } from "rxjs";
import type { WatchEvent } from "../../../potok/v2/ptk";

////////////////////////////////////////////////////////////////////////////////
// Grid
////////////////////////////////////////////////////////////////////////////////

export function addFrameGrid(frameId: string): WatchEvent {
  assert(typeof frameId === "string", "expected valid uuid");

  return {
    type: "app.main.data.workspace/add-frame-grid",
    watch(_: any, state: any, _stream: any): Observable<any> {
      const page = dsh.lookupPage(state);
      const params = page.defaultGrids?.square || ctg.defaultGridParams.square;
      const grid = {
        type: "square",
        params,
        display: true,
      };

      return of(
        dwsh.updateShapes(
          [frameId],
          (obj: any) => ({
            ...obj,
            grids: obj.grids ? [...obj.grids, grid] : [grid],
          })
        )
      );
    },
  };
}

export function removeFrameGrid(frameId: string, index: number): WatchEvent {
  return {
    type: "app.main.data.workspace/remove-frame-grid",
    watch(_: any, _state: any, _stream: any): Observable<any> {
      return of(
        dwsh.updateShapes([frameId], (o: any) => ({
          ...o,
          grids: d.removeAtIndex(o.grids || [], index),
        }))
      );
    },
  };
}

export function setFrameGrid(frameId: string, index: number, data: any): WatchEvent {
  return {
    type: "app.main.data.workspace/set-frame-grid",
    watch(_: any, _state: any, _stream: any): Observable<any> {
      return of(
        dwsh.updateShapes([frameId], (o: any) => {
          const grids = [...(o.grids || [])];
          grids[index] = data;
          return { ...o, grids };
        })
      );
    },
  };
}

export function setDefaultGrid(type: string, params: any): WatchEvent {
  return {
    type: "app.main.data.workspace/set-default-grid",
    watch(it: any, state: any, _stream: any): Observable<any> {
      const page = dsh.lookupPage(state);
      return of(
        dch.commitChanges(
          pcb.emptyChanges(it)
            .withPage(page)
            .setDefaultGrid(type, params)
        )
      );
    },
  };
}
