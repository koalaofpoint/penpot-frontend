/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (c) KALEIDOS INC
 */

import * as DM from "../common/data/macros";
import * as STP from "../common/types/path/shape-to-path";

export function getPathId(state: any): any {
  return (
    DM.getIn(state, ["workspace-local", "edition"]) ||
    DM.getIn(state, ["workspace-drawing", "object", "id"])
  );
}

export function getPathLocation(state: any, ...ks: any[]): any[] {
  const editId = DM.getIn(state, ["workspace-local", "edition"]);
  if (editId) {
    const pageId = state["current-page-id"];
    const fileId = state["current-file-id"];
    return ["files", fileId, "data", "pages-index", pageId, "objects", editId, ...ks];
  }
  return ["workspace-drawing", "object", ...ks];
}

export function getPath(state: any, ...ks: any[]): any {
  const pathLoc = getPathLocation(state);
  const shape = STP.convertToPath({}, DM.getIn(state, pathLoc));
  if (ks.length === 0) {
    return shape;
  }
  return DM.getIn(shape, ks);
}

export function setContent(state: any, content: any): any {
  const pathLoc = getPathLocation(state, "content");
  return DM.assocIn(state, pathLoc, content);
}