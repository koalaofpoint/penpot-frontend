// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { assert } from "../../../common/data/macros";
import { UUID } from "../../../common/uuid";
import type { UpdateEvent } from "../../../potok/v2/ptk";

// --- Manage shape's highlight status

export function highlightShape(id: UUID): UpdateEvent {
  assert(UUID.isValid(id));

  return {
    type: "app.main.data.workspace/highlight-shape",
    update(state: any) {
      const highlighted = state.workspaceLocal?.highlighted || new Set<UUID>();
      return {
        ...state,
        workspaceLocal: {
          ...state.workspaceLocal,
          highlighted: new Set([...highlighted, id]),
        },
      };
    },
  };
}

export function dehighlightShape(id: UUID): UpdateEvent {
  assert(UUID.isValid(id));

  return {
    type: "app.main.data.workspace/dehighlight-shape",
    update(state: any) {
      const highlighted = state.workspaceLocal?.highlighted || new Set<UUID>();
      const newHighlighted = new Set(highlighted);
      newHighlighted.delete(id);
      return {
        ...state,
        workspaceLocal: {
          ...state.workspaceLocal,
          highlighted: newHighlighted,
        },
      };
    },
  };
}
