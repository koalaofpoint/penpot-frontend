// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from 'app.common.data';
import * as dm from 'app.common.data.macros';
import * as cpc from 'app.common.files.changes';
import * as log from 'app.common.logging';
import * as ct from 'app.common.time';
import * as cts from 'app.common.types.shape';
import * as ctst from 'app.common.types.shape-tree';
import * as uuid from 'app.common.uuid';
import * as ev from 'app.main.data.event';
import * as dsh from 'app.main.data.helpers';
import * as features from 'app.main.features';
import * as mw from 'app.main.worker';
import * as wasm_shape from 'app.render-wasm.shape';
import * as rx from 'beicon.v2.core';
import * as ptk from 'potok.v2.core';

// Change this to :info :debug or :trace to debug this module
log.set_level('info');

export const page_change = new Set(['add-page', 'mod-page', 'del-page', 'mov-page']);
export const update_layout_attr = new Set(['hidden']);

export const commit_checker = ptk.type_checker('commit');

function fix_page_id(change: any): any {
  if (page_change.has(change.type) && change.page_id == null) {
    return {
      ...change,
      page_id: change.id ?? (change.page?.id)
    };
  }
  return change;
}

function update_indexes(commit: any, attr: string) {
  return ptk.reify('update-indexes', class implements ptk.WatchEvent {
    async watch(state: any, dispatch: any, ctx: any) {
      const changes = dm.get_in(commit, [attr])
        .map(fix_page_id)
        .filter((x: any) => x.page_id)
        .group_by((x: any) => x.page_id);

      rx.from(changes)
        .merge_map(([page_id, changes]: [string, any[]]) => {
          log.debug({ hint: 'update-indexes', page_id, changes: changes.length });
          return mw.ask!({
            cmd: 'index/update',
            page_id,
            changes
          });
        })
        .catch((cause: any) => {
          log.warn({ hint: 'unable to update index', cause });
          return rx.empty();
        })
        .ignore();
    }
  });
}

function get_pending_commits(state: any): any {
  const queue = state.persistence?.queue;
  const index = state.persistence?.index;

  if (!queue || !index) return null;

  return queue
    .map((item: any) => dm.getf(index)(item))
    .filter(Boolean)
    .length > 0 ? queue : null;
}

const xf_map_page_id = (x: any) => x.page_id;

function apply_changes_locally(commit: any, pending: any = null) {
  return ptk.reify('apply-changes-localy', class implements ptk.UpdateEvent {
    update(state: any): any {
      const undo_changes = pending
        ? pending
            .map((p: any) => p.undo_changes)
            .reverse()
            .flat()
            .to_vec()
        : null;

      let redo_changes = commit.redo_changes;
      if (pending) {
        redo_changes = [...redo_changes, ...pending.flatMap((p: any) => p.redo_changes)];
      }

      const apply_changes = (fdata: any) => {
        fdata = cpc.process_changes(fdata, undo_changes, false);
        fdata = cpc.process_changes(fdata, redo_changes, false);
        const pids = new Set(redo_changes.map(xf_map_page_id));

        return pids.reduce((acc: any, pid: string) => ctst.update_object_indices(acc, pid), fdata);
      };

      if (!commit.ignore_wasm && features.active_feature(state, 'render-wasm/v1')) {
        // Update the wasm model
        const shape_changes = {};

        state = {
          ...state,
          files: {
            ...state.files,
            [commit.file_id]: {
              ...state.files[commit.file_id],
              data: (function() {
                cts.shape_changes = shape_changes;
                return apply_changes(state.files[commit.file_id].data);
              })()
            }
          }
        };

        const objects = dm.get_in(state, [
          'files',
          commit.file_id,
          'data',
          'pages-index',
          state.current_page_id,
          'objects'
        ]);

        wasm_shape.process_shape_changes!(objects, shape_changes);
        return state;
      }

      // wasm renderer deactivated
      return {
        ...state,
        files: {
          ...state.files,
          [commit.file_id]: {
            ...state.files[commit.file_id],
            data: apply_changes(state.files[commit.file_id].data)
          }
        }
      };
    }
  });
}

export function create_commit({
  commit_id,
  redo_changes,
  undo_changes,
  origin,
  save_undo = true,
  features,
  file_id,
  file_revn,
  file_vern,
  undo_group,
  tags = new Set(),
  stack_undo = false,
  source,
  ignore_wasm = false
}: any) {
  if (!cpc.check_changes(redo_changes)) {
    throw new Error("expect valid vector of changes for redo-changes");
  }

  if (!cpc.check_changes(undo_changes)) {
    throw new Error("expect valid vector of changes for undo-changes");
  }

  const commit_id_ = commit_id ?? uuid.next();
  const source_ = source ?? 'local';
  const local_ = source_ === 'local';
  const commit_data = {
    id: commit_id_,
    created_at: ct.now(),
    source: source_,
    origin: ptk.type(origin),
    features,
    file_id,
    file_revn,
    file_vern,
    changes: redo_changes,
    redo_changes,
    undo_changes,
    save_undo,
    undo_group,
    tags,
    stack_undo,
    ignore_wasm
  };

  return ptk.reify('commit', class implements ptk.WatchEvent {
    async get(): Promise<any> {
      return commit_data;
    }

    async watch(state: any, dispatch: any, ctx: any) {
      const pending = local_ ? null : get_pending_commits(state);

      return rx.concat(
        rx.of(apply_changes_locally(commit_data, pending)),
        pending
          ? rx.concat(
              rx.from(pending.reverse())
                .map((commit: any) => update_indexes(commit, 'undo-changes')),
              rx.of(update_indexes(commit_data, 'redo-changes')),
              rx.from(pending)
                .map((commit: any) => update_indexes(commit, 'redo-changes'))
            )
          : rx.of(update_indexes(commit_data, 'redo-changes'))
      );
    }
  });
}

function resolve_file_revn(state: any, file_id: string): number {
  return dm.get_in(state, ['files', file_id, 'revn']);
}

function resolve_file_vern(state: any, file_id: string): number {
  return dm.get_in(state, ['files', file_id, 'vern']);
}

export function commit_changes({
  redo_changes,
  undo_changes,
  save_undo = true,
  undo_group = uuid.next(),
  tags = new Set(),
  stack_undo = false,
  file_id
}: any) {
  return ptk.reify('commit-changes', class implements ev.PerformanceEvent, ptk.WatchEvent {
    async watch(state: any, dispatch: any, ctx: any) {
      const file_id_ = file_id ?? state.current_file_id;
      const uchg = undo_changes.to_vec();
      const rchg = redo_changes.to_vec();
      const features = state.features;
      const permissions = state.permissions;

      // Prevent commit changes by a viewer team member (it really should never happen)
      if (!permissions.can_edit) return rx.empty();

      return rx.of({
        ...arguments[0],
        undo_group,
        features,
        tags,
        stack_undo,
        save_undo,
        file_id: file_id_,
        file_revn: resolve_file_revn(state, file_id_),
        file_vern: resolve_file_vern(state, file_id_),
        undo_changes: uchg,
        redo_changes: rchg
      }).pipe(
        rx.map(commit_data => create_commit(commit_data))
      );
    }
  });
}