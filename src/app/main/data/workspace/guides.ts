// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { assert } from "../../../common/data/macros";
import * as pcb from "../../../common/files/changes-builder";
import * as gpt from "../../../common/geom/point";
import * as gsh from "../../../common/geom/shapes";
import * as ctp from "../../../common/types/page";
import * as dwc from "../changes";
import * as ev from "../event";
import * as dsh from "../helpers";
import { Observable, of, from, map } from "rxjs";
import { pipe } from "rxjs";
import type { WatchEvent, UpdateEvent, Event } from "../../../potok/v2/ptk";

// --- Types ---
export interface Guide {
  id: string;
  position: number;
  axis: "x" | "y";
  frameId: string;
}

export function updateGuides(guide: Guide): Event {
  assert(ctp.validGuide(guide), "expected valid guide");

  return {
    type: "app.main.data.workspace/update-guides",
    data: { ...guide, [ev.EVENT_NAME]: "update-guide" },

    watch(it: any, state: any, _stream: any): Observable<any> {
      const page = dsh.lookupPage(state);
      const changes = pcb.emptyChanges(it)
        .withPage(page)
        .setGuide(guide.id, guide);

      return of(dwc.commitChanges(changes));
    },
  };
}

export function removeGuide(guide: Guide): Event {
  assert(ctp.validGuide(guide), "expected valid guide");

  return {
    type: "app.main.data.workspace/remove-guide",
    data: guide,

    update(state: any): any {
      const sdisj = (set: Set<any>, val: any) => set ? set.delete(val) : new Set([val]);
      const hover = state.workspaceGuides?.hover || new Set();
      return {
        ...state,
        workspaceGuides: {
          ...state.workspaceGuides,
          hover: new Set(hover).delete(guide.id),
        },
      };
    },

    watch(it: any, state: any, _stream: any): Observable<any> {
      const page = dsh.lookupPage(state);
      const changes = pcb.emptyChanges(it)
        .withPage(page)
        .setGuide(guide.id, null);

      return of(dwc.commitChanges(changes));
    },
  };
}

export function removeGuides(ids: Set<string>): WatchEvent {
  assert(Array.from(ids).every(id => typeof id === "string"), "expected a set of ids");

  return {
    type: "app.main.data.workspace/remove-guides",
    watch(_: any, state: any, _stream: any): Observable<any> {
      const page = dsh.lookupPage(state);
      const guides = page.guides || {};
      const guidesToRemove = Object.values(guides)
        .filter((g: any) => ids.has(g.id))
        .map((g: any) => removeGuide(g));

      return from(guidesToRemove);
    },
  };
}

export function moveFrameGuides(args: { ids: string[]; modifiers?: Map<string, any>; transforms?: Map<string, any> }): WatchEvent {
  assert(args.ids.every(id => typeof id === "string"), "expected a coll of uuids");

  return {
    type: "app.main.data.workspace/move-frame-guides",
    watch(_: any, state: any, _stream: any): Observable<any> {
      const ids = args.ids;
      const objectModifiers = args.modifiers || new Map();
      const objectTransforms = args.transforms || new Map();
      const objects = dsh.lookupPageObjects(state);

      const isFrame = (id: string) => objects.get(id)?.type === "frame";
      const frameIds = new Set(ids.filter(isFrame));

      const buildMoveEvent = (guide: any) => {
        const frameId = guide.frameId;
        const frame = objects.get(frameId);
        const modifier = objectModifiers.get(frameId)?.modifiers;
        const transform = objectTransforms.get(frameId);

        let frameTransformed = frame;
        if (modifier) {
          frameTransformed = gsh.transformShape(frameTransformed, modifier);
        }
        if (transform) {
          frameTransformed = gsh.applyTransform(frameTransformed, transform);
        }

        const moved = gpt.toVec(
          gpt.point(frame.x, frame.y),
          gpt.point(frameTransformed.x, frameTransformed.y)
        );

        const updatedGuide: Guide = {
          ...guide,
          position: guide.position + moved[guide.axis],
        };

        return updateGuides(updatedGuide);
      };

      const page = dsh.lookupPage(state);
      const guides = Object.values(page.guides || {});

      const filteredGuides = guides.filter((g: any) => frameIds.has(g.frameId));

      return from(filteredGuides.map(buildMoveEvent));
    },
  };
}

export function setHoverGuide(id: string, hover: boolean): UpdateEvent {
  return {
    type: "app.main.data.workspace/set-hover-guide",
    update(state: any): any {
      const sconj = (set: Set<any>, val: any) => set ? new Set([...set, val]) : new Set([val]);
      const sdisj = (set: Set<any>, val: any) => set ? new Set([...set].filter(x => x !== val)) : new Set([val]);

      return {
        ...state,
        workspaceGuides: {
          ...state.workspaceGuides,
          hover: hover ? sconj(state.workspaceGuides?.hover, id) : sdisj(state.workspaceGuides?.hover, id),
        },
      };
    },
  };
}
