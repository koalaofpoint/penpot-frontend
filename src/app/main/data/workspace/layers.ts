// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from "../../../common/data";
import * as mth from "../../../common/math";
import * as dsh from "../helpers";
import * as dwsh from "./shapes";
import { Observable, of, filter, bufferTime, take, concat, merge, empty, map, tap } from "rxjs";
import { pipe } from "rxjs";
import * as ptk from "../../../potok/v2/ptk";

// -- Opacity ----------------------------------------------------------

// The opacity of an element can be changed by typing numbers on the keyboard:
// 1 --> 0.1
// 2 --> 0.2
// 3 --> 0.3
// 4 --> 0.4
// ...
// 9 --> 0.9
// 0 --> 1
// 00 --> 0%
// The user can also type a more exact number:
// 45 --> 45%
// 05 --> 5%

export function calculateOpacity(numbers: number[]): number {
  const total = parseInt(numbers.join(""), 10);
  if (numbers.length === 1 && numbers[0] === 0) {
    return 1;
  }
  return total / Math.pow(10, numbers.length);
}

export function setOpacity(opacity: number): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace/set-opacity",
    watch(_: any, state: any, _stream: any): Observable<any> {
      const objects = dsh.lookupPageObjects(state);
      const selected = dsh.lookupSelected(state, { omitBlocked: true });
      const shapes = selected.map((id: string) => objects.get(id));
      const shapeIds = shapes.map((s: any) => s.id);

      return of(dwsh.updateShapes(shapeIds, (o: any) => ({ ...o, opacity })));
    },
  };
}

const SAME_EVENT = Symbol("same-event");

export function pressedOpacity(opacity: number): ptk.Event {
  return {
    type: "app.main.data.workspace/pressed-opacity",
    data: opacity,

    update(state: any): any {
      if (state.pressOpacityId === undefined) {
        return { ...state, pressOpacityId: SAME_EVENT };
      }
      return state;
    },

    watch(_: any, state: any, stream: any): Observable<any> {
      if (SAME_EVENT !== state.pressOpacityId) {
        return empty();
      }

      const setOpacityEvent = setOpacity(calculateOpacity([opacity]));

      const opacityEvents = stream.pipe(
        filter((e: any) => e.type === "app.main.data.workspace/pressed-opacity"),
        bufferTime(600),
        take(1),
        map((events: any[]) => setOpacity(calculateOpacity(events.map(e => e.data))))
      );

      return concat(
        of(setOpacityEvent),
        merge(
          opacityEvents,
          of(pressedOpacity(opacity))
        ),
        of((state: any) => {
          const { pressOpacityId, ...rest } = state;
          return rest;
        })
      );
    },
  };
}
