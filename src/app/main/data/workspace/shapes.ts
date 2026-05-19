// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from 'app.common.data';
import * as dm from 'app.common.data.macros';
import * as pcb from 'app.common.files.changes-builder';
import * as cfh from 'app.common.files.helpers';
import * as cfsh from 'app.common.files.shapes-helpers';
import * as cls from 'app.common.logic.shapes';
import * as sm from 'app.common.schema';
import * as ctc from 'app.common.types.component';
import * as ctn from 'app.common.types.container';
import * as cts from 'app.common.types.shape';
import * as ctst from 'app.common.types.shape-tree';
import * as dch from 'app.main.data.changes';
import * as dc from 'app.main.data.comments';
import * as ev from 'app.main.data.event';
import * as dsh from 'app.main.data.helpers';
import * as dwco from 'app.main.data.workspace.collapse';
import * as dwe from 'app.main.data.workspace.edition';
import * as dws from 'app.main.data.workspace.selection';
import * as dwu from 'app.main.data.workspace.undo';
import * as rx from 'beicon.v2.core';
import * as ptk from 'potok.v2.core';

const update_layout_attr = new Set(['hidden']);

function add_undo_group(changes: any, state: any): any {
  const undo = state.workspace_undo;
  const items = undo.items;
  const index = undo.index ?? (items.length - 1);
  const prev_item = items[index];
  const undo_group = prev_item?.undo_group;
  const should_add = undo_group &&
    changes.redo_changes[0]?.type === 'mod-obj' &&
    prev_item.redo_changes[0]?.type === 'add-obj' &&
    prev_item.tags?.has('alt-duplication');

  return should_add ? {...changes, undo_group} : changes;
}

export function update_shapes(
  ids: string[],
  update_fn: (shape: any) => any,
  options?: {
    reg_objects?: boolean;
    save_undo?: boolean;
    stack_undo?: boolean;
    attrs?: string[];
    ignore_tree?: boolean;
    page_id?: string;
    ignore_touched?: boolean;
    undo_group?: string;
    with_objects?: boolean;
    changed_sub_attr?: string[];
  }
): ptk.PtkEvent {
  const {
    reg_objects = false,
    save_undo = true,
    stack_undo = false,
    attrs,
    ignore_tree = false,
    page_id,
    ignore_touched = false,
    undo_group,
    with_objects = false,
    changed_sub_attr
  } = options || {};

  dm.assert!(ids.every(uuid.is_uuid), "expect a coll of uuid for `ids`");
  dm.assert!(typeof update_fn === 'function', "the `update-fn` should be a valid function");

  return ptk.reify('update-shapes', class implements ptk.WatchEvent {
    async watch(it: any, state: any, ctx: any) {
      const page_id_ = page_id || state.current_page_id;
      const objects = dsh.lookup_page_objects(state, page_id_);
      const ids_ = ids.filter(Boolean);

      const xf_update_layout = (
        map((shape: any) => objects[shape.id])
          .filter((shape: any) =>
            update_layout_attr.has(
              pcb.changed_attrs(shape, objects, update_fn, {attrs, with_objects})[0]
            )
          )
          .map((shape: any) => shape.id)
      );

      const update_layout_ids = Array.from(xf_update_layout(ids_)).filter(Boolean);

      let changes = pcb.empty_changes(it, page_id_)
        .pcb_set_save_undo(save_undo)
        .pcb_set_stack_undo(stack_undo)
        .cls_generate_update_shapes(
          ids_,
          update_fn,
          objects,
          {
            attrs,
            changed_sub_attr,
            ignore_tree,
            ignore_touched,
            with_objects
          }
        );

      if (undo_group) {
        changes = changes.pcb_set_undo_group(undo_group);
      }

      changes = add_undo_group(changes, state);

      return rx.concat(
        changes.redo_changes.length > 0
          ? (function() {
              if (reg_objects) {
                changes = changes.pcb_resize_parents(ids_);
              }

              return rx.of(dch.commit_changes({
                ...changes,
                reg_objects
              }));
            })()
          : rx.empty(),
        update_layout_ids.length > 0
          ? rx.of(dwco.update_layout(update_layout_ids))
          : rx.empty()
      );
    }
  });
}