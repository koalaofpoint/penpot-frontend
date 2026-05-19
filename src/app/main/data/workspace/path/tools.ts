/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (c) KALEIDOS INC
 */

import * as DM from "../common/data/macros";
import * as PATH from "../common/types/path";
import * as DCH from "../data/changes";
import * as DSH from "../data/helpers";
import * as DWE from "./edition";
import * as CHANGES from "./changes";
import * as ST from "./state";
import * as DWSH from "./shapes";
import { Observable, of, concat } from "rxjs";

export function processPathTool(toolFn: (content: any, points: any) => any, points?: any) {
  return {
    type: "app.main.data.workspace.path.tools/process-path-tool",
    watch: (it: any, state: any): Observable<any> => {
      const pageId = state["current-page-id"];
      const objects = DSH.lookupPageObjects(state, pageId);

      const shape = ST.getPath(state);
      const id = ST.getPathId(state);

      const selectedPoints = DM.getIn(
        state,
        ["workspace-local", "edit-path", id, "selected-points"],
        new Set()
      );

      const finalPoints = points || selectedPoints;

      if (!finalPoints || finalPoints.length === 0 || !shape) {
        return of();
      }

      const newContent = PATH.closeSubpaths(toolFn(shape.content, finalPoints));
      const changes = CHANGES.generatePathChanges(
        it,
        objects,
        pageId,
        shape,
        shape.content,
        newContent
      );

      return concat(
        of(DWSH.updateShapes([id], PATH.convertToPath), DCH.commitChanges(changes)),
        newContent.length === 0 ? of(DWE.clearEditionMode) : of()
      );
    },
  };
}

export function makeCorner(point?: any) {
  return processPathTool(
    (content, pts) => {
      const points = point ? new Set([point]) : pts;
      return [...points].reduce((c, p) => PATH.makeCornerPoint(c, p), content);
    },
    point ? new Set([point]) : undefined
  );
}

export function makeCurve(point?: any) {
  return processPathTool(
    (content, pts) => {
      const points = point ? new Set([point]) : pts;
      return [...points].reduce((c, p) => PATH.makeCurvePoint(c, p), content);
    },
    point ? new Set([point]) : undefined
  );
}

export function addNode() {
  return processPathTool((content) => PATH.splitSegments(content, new Set(), 0.5));
}

export function removeNode() {
  return processPathTool(PATH.removeNodes);
}

export function mergeNodes() {
  return processPathTool(PATH.mergeNodes);
}

export function joinNodes() {
  return processPathTool(PATH.joinNodes);
}

export function separateNodes() {
  return processPathTool(PATH.separateNodes);
}

export function toggleSnap() {
  return {
    type: "app.main.data.workspace.path.tools/toggle-snap",
    update: (_: any, state: any) => {
      const id = ST.getPathId(state);
      const current = DM.getIn(state, ["workspace-local", "edit-path", id, "snap-toggled"], false);
      return DM.assocIn(state, ["workspace-local", "edit-path", id, "snap-toggled"], !current);
    },
  };
}