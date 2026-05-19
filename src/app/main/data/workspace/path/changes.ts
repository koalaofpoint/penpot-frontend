/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (c) KALEIDOS INC
 */

import * as DM from "../common/data/macros";
import * as PCB from "../common/files/changes-builder";
import * as PATH from "../common/types/path";
import * as DCH from "../data/changes";
import * as DSH from "../data/helpers";
import * as ST from "./state";
import { Observable, of } from "rxjs";

export function generatePathChanges(
  it: any,
  objects: any,
  pageId: any,
  shape: any,
  oldContent: any,
  newContent: any
): any {
  if (!PATH.isContent(oldContent)) {
    throw new Error("Old content is not a valid path content");
  }
  if (!PATH.isContent(newContent)) {
    throw new Error("New content is not a valid path content");
  }

  const shapeId = shape.id;

  // We set the old values so the update-shapes works
  const objectsWithOldValues = {
    ...objects,
    [shapeId]: {
      ...objects[shapeId],
      content: oldContent,
      ...PATH.updateGeometry(shape),
    },
  };

  const changes = new PCB(it, pageId).withObjects(objectsWithOldValues);

  const normalizedNewContent = PATH.content(newContent);

  if (shapeId == null) {
    return changes;
  }

  if (normalizedNewContent.length === 0) {
    return changes.removeObjects([shapeId]).resizeParents([shapeId]);
  }

  return changes
    .updateShapes([shapeId], (s: any) => ({
      ...s,
      content: normalizedNewContent,
      ...PATH.updateGeometry(s),
    }))
    .resizeParents([shapeId]);
}

export type SavePathContentOptions = {
  preserveMoveTo?: boolean;
};

export function savePathContent(options: SavePathContentOptions = {}) {
  const { preserveMoveTo = false } = options;
  return {
    type: "app.main.data.workspace.path.changes/save-path-content",
    update: (_: any, state: any) => {
      let content = ST.getPath(state, "content");
      if (!preserveMoveTo && content.length > 0 && content[content.length - 1].command === "move-to") {
        content = PATH.content(content.slice(0, -1));
      } else {
        content = PATH.content(content);
      }
      return ST.setContent(state, content);
    },
    watch: (it: any, state: any, _: any): Observable<any> => {
      const pageId = state["current-page-id"];
      const local = state["workspace-local"];
      const id = local?.edition;
      const objects = DSH.lookupPageObjects(state, pageId);

      const shape = objects?.[id];
      if (!shape) {
        return of();
      }

      const oldContent = DM.getIn(local, ["edit-path", id, "old-content"]);
      if (!oldContent) {
        return of();
      }

      const newContent = shape.content;
      const changes = generatePathChanges(it, objects, pageId, shape, oldContent, newContent);
      return of(DCH.commitChanges(changes));
    },
  };
}