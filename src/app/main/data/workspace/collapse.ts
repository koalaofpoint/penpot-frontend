// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { assert } from "../../../common/data/macros";
import * as cfh from "../../../common/files/helpers";
import { UUID, UUID_ZERO } from "../../../common/uuid";
import type { UpdateEvent } from "../../../potok/v2/ptk";

// --- Shape attrs (Layers Sidebar)

export function expandAllParents(ids: UUID[], objects: Map<UUID, any>): UpdateEvent {
  assert(ids.every(id => UUID.isValid(id)));

  return {
    type: "app.main.data.workspace/expand-all-parents",
    update(state: any) {
      const expandFn = (expanded: Map<UUID, boolean>): Map<UUID, boolean> => {
        const parentsSeqs = ids.map(x => cfh.getParentIds(objects, x));
        const flatParents = parentsSeqs.flat();
        const nonRootParents = flatParents.filter(id => id !== UUID_ZERO);
        const distinctParents = new Set(nonRootParents);

        const result = new Map(expanded);
        distinctParents.forEach(id => result.set(id, true));
        return result;
      };

      const currentExpanded = state.workspaceLocal?.expanded || new Map();
      return {
        ...state,
        workspaceLocal: {
          ...state.workspaceLocal,
          expanded: expandFn(currentExpanded),
        },
      };
    },
  };
}

export function toggleCollapse(id: UUID): UpdateEvent {
  assert(UUID.isValid(id));

  return {
    type: "app.main.data.workspace/toggle-collapse",
    update(state: any) {
      const currentExpanded = state.workspaceLocal?.expanded || new Map();
      const currentValue = currentExpanded.get(id) || false;
      return {
        ...state,
        workspaceLocal: {
          ...state.workspaceLocal,
          expanded: new Map(currentExpanded).set(id, !currentValue),
        },
      };
    },
  };
}

export function expandCollapse(id: UUID): UpdateEvent {
  assert(UUID.isValid(id));

  return {
    type: "app.main.data.workspace/expand-collapse",
    update(state: any) {
      const currentExpanded = state.workspaceLocal?.expanded || new Map();
      return {
        ...state,
        workspaceLocal: {
          ...state.workspaceLocal,
          expanded: new Map(currentExpanded).set(id, true),
        },
      };
    },
  };
}

export function collapseAll(): UpdateEvent {
  return {
    type: "app.main.data.workspace/collapse-all",
    update(state: any) {
      const { expanded, ...rest } = state.workspaceLocal || {};
      return {
        ...state,
        workspaceLocal: rest,
      };
    },
  };
}
