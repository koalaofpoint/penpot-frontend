// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from 'app.common.data';
import * as dm from 'app.common.data.macros';
import * as cfeat from 'app.common.features';
import * as cfh from 'app.common.files.helpers';
import * as log from 'app.common.logging';
import * as sm from 'app.common.schema';
import * as ct from 'app.common.time';
import {valid_project} from 'app.common.types.project';
import * as uuid from 'app.common.uuid';
import * as cf from 'app.config';
import * as mconst from 'app.main.constants';
import * as dcm from 'app.main.data.common';
import * as ev from 'app.main.data.event';
import * as df from 'app.main.data.fonts';
import * as dsh from 'app.main.data.helpers';
import * as modal from 'app.main.data.modal';
import * as ntf from 'app.main.data.notifications';
import * as dws from 'app.main.data.websocket';
import * as rp from 'app.main.repo';
import * as st from 'app.main.store';
import * as i18n from 'app.util.i18n';
import * as sse from 'app.util.sse';
import * as rx from 'beicon.v2.core';
import * as set from 'clojure.set';
import * as str from 'cuerdas.core';
import * as ptk from 'potok.v2.core';

log.set_level('warn');

declare function initialize(team_id: string): ptk.PtkEvent;
declare function process_message(msg: any): void;

export function initialize(team_id: string) {
  dm.assert!(uuid.is_uuid(team_id), "expected uuid instance for `team-id`");

  return ptk.reify('initialize', class implements ptk.WatchEvent {
    async watch(state: any, dispatch: any, stream: any) {
      const stopper = rx.filter(ptk.type_checker('finalize'), stream);
      const profile_id = state.profile_id;

      return rx.merge(
        rx.of(fetch_projects(team_id), df.fetch_fonts(team_id)),
        rx.from(stream)
          .pipe(
            rx.filter(ptk.type_checker('dws/message')),
            rx.map(msg => msg.data),
            rx.filter((msg: any) => msg.topic === uuid.zero || msg.topic === profile_id),
            rx.map(process_message)
          )
      ).pipe(
        rx.take_until(stopper)
      );
    }
  });
}

export function finalize(team_id: string) {
  return ptk.data_event('finalize', {team_id});
}

// Data Fetching (context aware: current team)

function projects_fetched(projects: any[]) {
  return ptk.reify('projects-fetched', class implements ptk.UpdateEvent {
    update(state: any): any {
      return projects.reduce((state: any, project: any) => {
        // Replace completely instead of merge to ensure deleted-at is removed
        return state.set_in(['projects', project.id], project);
      }, state);
    }
  });
}

export function fetch_projects(team_id: string) {
  return ptk.reify('fetch-projects', class implements ptk.WatchEvent {
    async watch(state: any, dispatch: any, ctx: any) {
      return rp.cmd('get-projects', {team_id})
        .pipe(rx.map(projects_fetched));
    }
  });
}

const schema_search_params = {
  closed: true,
  entries: {
    search_term: {pred: sm.maybe_pred(sm.string)}
  }
};

const check_search_params = sm.check_fn(schema_search_params);

export function search(params: any) {
  const params_ = check_search_params(params);

  return ptk.reify('search', class implements ptk.UpdateEvent, ptk.WatchEvent {
    update(state: any): any {
      return state.delete('search-result');
    }

    async watch(state: any, dispatch: any, ctx: any) {
      const team_id = state.current_team_id;
      const params__ = {...params_, team_id};

      return rp.cmd('search-files', params__)
        .pipe(
          rx.map((result: any) => (state: any) => state.set('search-result', result))
        );
    }
  });
}

function recent_files_fetched(files: any[]) {
  return ptk.reify('recent-files-fetched', class implements ptk.UpdateEvent {
    update(state: any): any {
      const files_ = d.index_by(files, 'id');
      return state
        .set('recent-files', files_)
        .update('files', (files: any) => d.merge(files, files_));
    }
  });
}

export function fetch_recent_files(team_id?: string) {
  return ptk.reify('fetch-recent-files', class implements ptk.WatchEvent {
    async watch(state: any, dispatch: any, ctx: any) {
      const team_id_ = team_id || state.current_team_id;
      if (!team_id_) return rx.empty();

      return rp.cmd('get-team-recent-files', {team_id: team_id_})
        .pipe(rx.map(recent_files_fetched));
    }
  });
}

export function builtin_templates_fetched(libraries: any[]) {
  return ptk.reify('libraries-fetched', class implements ptk.UpdateEvent {
    update(state: any): any {
      return state.set('builtin-templates', libraries);
    }
  });
}

export function fetch_builtin_templates() {
  return ptk.reify('fetch-builtin-templates', class implements ptk.WatchEvent {
    async watch(state: any, dispatch: any, ctx: any) {
      return rp.cmd('get-builtin-templates')
        .pipe(rx.map(builtin_templates_fetched));
    }
  });
}

function deleted_files_fetched(files: any[]) {
  return ptk.reify('deleted-files-fetched', class implements ptk.UpdateEvent {
    update(state: any): any {
      const now = ct.now();
      const filtered_files = files.filter((file: any) => {
        const will_be_deleted_at = file.will_be_deleted_at;
        return !will_be_deleted_at || ct.is_after(will_be_deleted_at, now);
      });
      const files_ = d.index_by(filtered_files, 'id');

      return state
        .set('deleted-files', files_)
        .update('files', (files: any) => d.merge(files, files_));
    }
  });
}

export function fetch_deleted_files(team_id?: string) {
  return ptk.reify('fetch-deleted-files', class implements ptk.WatchEvent {
    async watch(state: any, dispatch: any, ctx: any) {
      const team_id_ = team_id || state.current_team_id;
      if (!team_id_) return rx.empty();

      return rp.cmd('get-team-deleted-files', {team_id: team_id_})
        .pipe(rx.map(deleted_files_fetched));
    }
  });
}

// Data Selection

export function clear_selected_files() {
  return ptk.reify('clear-file-select', class implements ptk.UpdateEvent {
    update(state: any): any {
      return state
        .delete('selected-files')
        .delete('selected-project')
        .update('dashboard-local', (local: any) => ({
          ...local,
          menu_open: false,
          menu_pos: null
        }));
    }
  });
}

export function toggle_file_select(file: any) {
  return ptk.reify('toggle-file-select', class implements ptk.UpdateEvent {
    update(state: any): any {
      const selected_project_id = state.selected_project;
      const should_toggle = !selected_project_id || selected_project_id === file.project_id;

      if (should_toggle) {
        const selected_files = state.selected_files
          ? state.selected_files.has(file.id)
            ? state.selected_files.delete(file.id)
            : state.selected_files.add(file.id)
          : new Set([file.id]);

        return state
          .set('selected-files', selected_files)
          .set('selected-project', file.project_id);
      }

      return state;
    }
  });
}

// Show grid menu

export function show_file_menu_with_position(file_id: string, pos: any) {
  return ptk.reify('show-file-menu-with-position', class implements ptk.UpdateEvent {
    update(state: any): any {
      return state.update('dashboard-local', (local: any) => ({
        ...local,
        menu_open: true,
        menu_pos: pos,
        file_id
      }));
    }
  });
}

export function show_file_menu() {
  return ptk.reify('show-file-menu', class implements ptk.UpdateEvent {
    update(state: any): any {
      return state.update('dashboard-local', (local: any) => ({
        ...local,
        menu_open: true
      }));
    }
  });
}

export function hide_file_menu() {
  return ptk.reify('hide-file-menu', class implements ptk.UpdateEvent {
    update(state: any): any {
      return state.update('dashboard-local', (local: any) => ({
        ...local,
        menu_open: false
      }));
    }
  });
}

export function start_edit_file_name(file_id: string) {
  return ptk.reify('start-edit-file-menu', class implements ptk.UpdateEvent {
    update(state: any): any {
      return state.update('dashboard-local', (local: any) => ({
        ...local,
        edition: true,
        file_id
      }));
    }
  });
}

export function stop_edit_file_name() {
  return ptk.reify('stop-edit-file-name', class implements ptk.UpdateEvent {
    update(state: any): any {
      return state.update('dashboard-local', (local: any) => ({
        ...local,
        edition: false
      }));
    }
  });
}

// Data Modification

// --- EVENT: create-project

function project_created(project: any) {
  return ptk.reify('project-created', class implements cljs.IDeref, ptk.UpdateEvent {
    async deref(): Promise<any> {
      return project;
    }

    update(state: any): any {
      return state
        .set_in(['projects', project.id], project)
        .set_in(['dashboard-local', 'project-for-edit'], project.id);
    }
  });
}

export function create_project() {
  return ptk.reify('create-project', class implements ptk.WatchEvent {
    async watch(state: any, dispatch: any, ctx: any) {
      const team_id = state.current_team_id;
      const projects = dsh.lookup_team_projects(state, team_id);
      const unames = cfh.get_used_names(projects);
      const base_name = i18n.tr('dashboard.new-project-prefix');
      const name = cfh.generate_unique_name(base_name, unames, {immediate_suffix: true});

      const params = {name, team_id};
      const {on_success = identity, on_error = rx.throw} = params.meta || {};

      return rp.cmd('create-project', params)
        .pipe(
          rx.tap(on_success),
          rx.map(project_created),
          rx.catch(on_error)
        );
    }
  });
}

function project_duplicated(project: any) {
  return ptk.reify('project-duplicated', class implements ptk.UpdateEvent {
    update(state: any): any {
      return state.set_in(['projects', project.id], project);
    }
  });
}

export function duplicate_project(params: any) {
  dm.assert!(uuid.is_uuid(params.id));

  return ptk.reify('duplicate-project', class implements ev.Event, ptk.WatchEvent {
    get data() {
      return {project_id: params.id, name: params.name};
    }

    async watch(state: any, dispatch: any, ctx: any) {
      const {on_success = identity, on_error = rx.throw} = params.meta || {};
      const projects = state.projects;
      const unames = cfh.get_used_names(Object.values(projects));
      const suffix_fn = (copy_count: number) =>
        str.concat(' ', i18n.tr('dashboard.copy-suffix'), copy_count > 1 ? ` ${copy_count}` : '');
      const new_name = cfh.generate_unique_name(params.name, unames, {suffix_fn});

      return rp.cmd('duplicate-project', {project_id: params.id, name: new_name})
        .pipe(
          rx.tap(on_success),
          rx.map(project_duplicated),
          rx.catch(on_error)
        );
    }
  });
}

export function move_project(params: any) {
  dm.assert!(uuid.is_uuid(params.id));
  dm.assert!(uuid.is_uuid(params.team_id));

  return ptk.reify('move-project', class implements ev.Event, ptk.WatchEvent {
    get data() {
      return {id: params.id, team_id: params.team_id};
    }

    async watch(state: any, dispatch: any, ctx: any) {
      const {on_success = identity, on_error = rx.throw} = params.meta || {};

      return rp.cmd('move-project', {project_id: params.id, team_id: params.team_id})
        .pipe(
          rx.tap(on_success),
          rx.catch(on_error)
        );
    }
  });
}

export function toggle_project_pin(project: any) {
  return ptk.reify('toggle-project-pin', class implements ptk.UpdateEvent, ptk.WatchEvent {
    update(state: any): any {
      return state.update_in(['projects', project.id], (p: any) => ({
        ...p,
        is_pinned: !p.is_pinned
      }));
    }

    async watch(state: any, dispatch: any, ctx: any) {
      const project_ = state.projects[project.id];
      const params = {
        id: project.id,
        is_pinned: !project.is_pinned,
        team_id: project_.team_id
      };

      return rp.cmd('update-project-pin', params)
        .pipe(rx.ignore());
    }
  });
}

// --- EVENT: rename-project

export function rename_project(params: any) {
  return ptk.reify('rename-project', class implements ptk.UpdateEvent, ptk.WatchEvent {
    update(state: any): any {
      return state
        .update_in(['projects', params.id], (p: any) => ({
          ...p,
          name: params.name
        }))
        .update('dashboard-local', (local: any) => ({
          ...local,
          project_for_edit: null
        }));
    }

    async watch(state: any, dispatch: any, ctx: any) {
      const params_ = {id: params.id, name: params.name};
      return rp.cmd('rename-project', params_)
        .pipe(rx.ignore());
    }
  });
}

// --- EVENT: delete-project

export function delete_project(params: any) {
  return ptk.reify('delete-project', class implements ptk.UpdateEvent, ptk.WatchEvent {
    update(state: any): any {
      return state.update('projects', (projects: any) => d.without(projects, params.id));
    }

    async watch(state: any, dispatch: any, ctx: any) {
      return rp.cmd('delete-project', {id: params.id})
        .pipe(rx.ignore());
    }
  });
}

// --- EVENT: delete-file

function file_deleted(project_id: string) {
  return ptk.reify('file-deleted', class implements ptk.UpdateEvent {
    update(state: any): any {
      return state.update_in(['projects', project_id, 'count'], (count: number) => count - 1);
    }
  });
}

export function delete_file(params: any) {
  return ptk.reify('delete-file', class implements ptk.UpdateEvent, ptk.WatchEvent {
    update(state: any): any {
      return state
        .update('files', (files: any) => d.when(files, (f: any) => d.without(f, params.id)))
        .update('shared-files', (files: any) => d.when(files, (f: any) => d.without(f, params.id)))
        .update('recent-files', (files: any) => d.when(files, (f: any) => d.without(f, params.id)));
    }

    async watch(state: any, dispatch: any, ctx: any) {
      return rp.cmd('delete-file', {id: params.id})
        .pipe(rx.map(() => file_deleted(params.project_id)));
    }
  });
}

// --- Rename File

export function rename_file(params: any) {
  return ptk.reify('rename-file', class implements ev.Event, ptk.UpdateEvent, ptk.WatchEvent {
    get data() {
      return {
        'ev/origin': 'dashboard',
        id: params.id,
        name: params.name
      };
    }

    update(state: any): any {
      return state
        .update_in(['files', params.id, 'name'], () => params.name)
        .update_in(['shared-files', params.id, 'name'], () => params.name)
        .update_in(['recent-files', params.id, 'name'], () => params.name);
    }

    async watch(state: any, dispatch: any, ctx: any) {
      const params_ = {id: params.id, name: params.name};
      return rp.cmd('rename-file', params_)
        .pipe(rx.ignore());
    }
  });
}

// --- Set File shared

export function set_file_shared(params: any) {
  return ptk.reify('set-file-shared', class implements ev.Event, ptk.UpdateEvent, ptk.WatchEvent {
    get data() {
      return {
        'ev/origin': 'dashboard',
        id: params.id,
        shared: params.is_shared
      };
    }

    update(state: any): any {
      return state
        .update_in(['files', params.id, 'is-shared'], () => params.is_shared)
        .update_in(['recent-files', params.id, 'is-shared'], () => params.is_shared)
        .update_when(!params.is_shared, 'shared-files', (files: any) => d.without(files, params.id));
    }

    async watch(state: any, dispatch: any, ctx: any) {
      const params_ = {id: params.id, is_shared: params.is_shared};

      return rx.concat(
        rp.cmd('set-file-shared', params_)
          .pipe(rx.ignore()),
        params.is_shared
          ? rp.cmd('get-file-summary', {id: params.id})
            .pipe(
              rx.map((summary: any) => {
                if (summary.variants?.count > 0) {
                  return ptk.event('ev/event', {
                    'ev/name': 'set-file-variants-shared',
                    'ev/origin': 'dashboard'
                  });
                }
                return null;
              })
            )
          : rx.empty()
      );
    }
  });
}

export function set_file_thumbnail(file_id: string, thumbnail_id: string) {
  return ptk.reify('set-file-thumbnail', class implements ptk.UpdateEvent {
    update(state: any): any {
      const update_search_files = (files: any[]) =>
        files.map((file: any) =>
          file.id === file_id ? {...file, thumbnail_id} : file
        );

      return state
        .update_in(['files', file_id], (file: any) => ({...file, thumbnail_id}))
        .update_in(['recent-files', file_id], (file: any) => ({...file, thumbnail_id}))
        .update_in(['deleted-files', file_id], (file: any) => ({...file, thumbnail_id}))
        .update_when('dashboard-search-result', 'dashboard-search-result', update_search_files);
    }
  });
}

// --- EVENT: create-file

function file_created(file: any) {
  return ptk.reify('file-created', class implements cljs.IDeref, ptk.UpdateEvent {
    async deref(): Promise<any> {
      return {file_id: file.id, file_name: file.name};
    }

    update(state: any): any {
      const file_ = {...file, data: undefined};
      return state
        .set_in(['files', file.id], file_)
        .set_in(['recent-files', file.id], file_)
        .update_in(['projects', file.project_id, 'count'], (count: number) => count + 1);
    }
  });
}

export function create_file(params: any) {
  dm.assert!(uuid.is_uuid(params.project_id));

  return ptk.reify('create-file', class implements ev.Event, ptk.WatchEvent {
    get data() {
      return {project_id: params.project_id};
    }

    async watch(it: any, state: any, dispatch: any, ctx: any) {
      const {on_success = identity, on_error = rx.throw} = params.meta || {};

      const files = dsh.lookup_team_files(state);
      const unames = cfh.get_used_names(Object.values(files));
      const base_name = i18n.tr('dashboard.new-file-prefix');
      const name = params.name || cfh.generate_unique_name(base_name, unames, {immediate_suffix: true});

      const features = set.difference(state.features || new Set(), cfeat.frontend_only_features);
      const params_ = {...params, name, features};

      return rp.cmd('create-file', params_)
        .pipe(
          rx.tap(on_success),
          rx.map((result: any) => with_meta(file_created(result), it.meta)),
          rx.catch(on_error)
        );
    }
  });
}

// --- EVENT: duplicate-file

export function duplicate_file(params: any) {
  dm.assert!(uuid.is_uuid(params.id));
  dm.assert!(typeof params.name === 'string');

  return ptk.reify('duplicate-file', class implements ptk.WatchEvent {
    async watch(state: any, dispatch: any, ctx: any) {
      const {on_success = identity, on_error = rx.throw} = params.meta || {};
      const files = state.files;
      const unames = cfh.get_used_names(Object.values(files));
      const suffix_fn = (copy_count: number) =>
        str.concat(' ', i18n.tr('dashboard.copy-suffix'), copy_count > 1 ? ` ${copy_count}` : '');
      const new_name = cfh.generate_unique_name(params.name, unames, {suffix_fn});

      return rp.cmd('duplicate-file', {file_id: params.id, name: new_name})
        .pipe(
          rx.tap(on_success),
          rx.map(file_created),
          rx.catch(on_error)
        );
    }
  });
}

// --- EVENT: move-files

export function move_files(params: any) {
  dm.assert!(uuid.is_uuid(params.project_id));
  dm.assert!(sm.check_set_of_uuid(params.ids));

  return ptk.reify('move-files', class implements ev.Event, ptk.WatchEvent {
    get data() {
      return {num_files: params.ids.size, project_id: params.project_id};
    }

    update(state: any): any {
      const origin_project = state.files[params.ids.values().next().value].project_id;
      const update_project = (project: any, delta: number, op: (a: number, b: number) => number) => ({
        ...project,
        count: op(project.count, params.ids.size),
        modified_at: ct.in_future({milliseconds: delta})
      });

      return state
        .update_in(['projects', origin_project], (p: any) => update_project(p, 0, (a, b) => a - b))
        .update_in(['projects', params.project_id], (p: any) => update_project(p, 10, (a, b) => a + b));
    }

    async watch(state: any, dispatch: any, ctx: any) {
      const {on_success = identity, on_error = rx.throw} = params.meta || {};

      return rp.cmd('move-files', {ids: Array.from(params.ids), project_id: params.project_id})
        .pipe(
          rx.tap(on_success),
          rx.catch(on_error)
        );
    }
  });
}

// --- EVENT: clone-template

export function clone_template(params: any) {
  return ptk.reify('clone-template', class implements ev.Event, ptk.WatchEvent {
    get data() {
      return {template_id: params.template_id};
    }

    async watch(state: any, dispatch: any, ctx: any) {
      const {on_success = identity, on_error = rx.throw} = params.meta || {};
      const project_id = params.project_id || state.current_project_id;

      return rp.cmd('sse/clone-template', {project_id, template_id: params.template_id})
        .pipe(
          rx.tap((event: any) => {
            const payload = sse.get_payload(event);
            const type = sse.get_type(event);
            if (type === 'progress') {
              log.dbg({hint: 'clone-template: progress', section: payload.section, name: payload.name});
            } else {
              log.dbg({hint: 'clone-template: end'});
            }
          }),
          rx.filter(sse.end_of_stream),
          rx.map(sse.get_payload),
          rx.tap(on_success),
          rx.catch(on_error)
        );
    }
  });
}

export function create_element() {
  return ptk.reify('create-element', class implements ptk.WatchEvent {
    async watch(state: any, dispatch: any, ctx: any) {
      const team_id = state.current_team_id;
      const route = state.route;
      const pparams = route.path_params;
      const in_project = 'project_id' in pparams;

      const name = in_project
        ? (() => {
          const files = dsh.lookup_team_files(state, team_id);
          const unames = cfh.get_used_names(Object.values(files));
          return cfh.generate_unique_name(i18n.tr('dashboard.new-file-prefix'), unames, {immediate_suffix: true});
        })()
        : (() => {
          const projects = dsh.lookup_team_projects(state, team_id);
          const unames = cfh.get_used_names(Object.values(projects));
          return cfh.generate_unique_name(i18n.tr('dashboard.new-project-prefix'), unames, {immediate_suffix: true});
        })();

      const params = in_project
        ? {project_id: pparams.project_id, name}
        : {name, team_id};

      const action_name = in_project ? 'create-file' : 'create-project';
      const action = in_project ? file_created : project_created;
      const can_edit = dm.get_in(state, ['teams', team_id, 'permissions', 'can-edit']);

      if (can_edit) {
        return rp.cmd(action_name, params)
          .pipe(rx.map(action));
      }

      return rx.empty();
    }
  });
}

export function open_selected_file() {
  return ptk.reify('open-selected-file', class implements ptk.WatchEvent {
    async watch(state: any, dispatch: any, ctx: any) {
      const files = state.selected_files;
      if (!files || files.size !== 1) return rx.empty();

      const file_id = files.values().next().value;
      return rx.of(dcm.go_to_workspace({file_id}));
    }
  });
}

// Notifications

function handle_change_team_role(params: any) {
  return ptk.reify('handle-change-team-role', class implements ptk.WatchEvent {
    async watch(state: any, dispatch: any, ctx: any) {
      return rx.of(dcm.change_team_role(params), modal.hide());
    }
  });
}

export function handle_change_team_org(params: any) {
  return ptk.reify('handle-change-team-org', class implements ptk.UpdateEvent {
    update(state: any): any {
      if (cf.flags.has('nitrate')) {
        return state.update_in(['teams', params.team_id], (team: any) => ({
          ...team,
          organization_id: params.organization_id,
          organization_name: params.organization_name
        }));
      }
      return state;
    }
  });
}

function process_message(msg: any) {
  switch (msg.type) {
    case 'notification':
      return dcm.handle_notification(msg);
    case 'team-role-change':
      return handle_change_team_role(msg);
    case 'team-membership-change':
      return dcm.team_membership_change(msg);
    case 'team-org-change':
      return handle_change_team_org(msg);
    default:
      return null;
  }
}

// --- Delete files immediately

function delete_files(params: any) {
  dm.assert!(uuid.is_uuid(params.team_id));
  dm.assert!(params.ids instanceof Set);
  dm.assert!(Array.from(params.ids).every(uuid.is_uuid));
  dm.assert!(typeof params.on_success === 'function');
  dm.assert!(typeof params.on_error === 'function');

  return ptk.reify('delete-files', class implements ptk.WatchEvent {
    async watch(state: any, dispatch: any, ctx: any) {
      const progress_hint = () => i18n.tr('dashboard.progress-notification.deleting-files');
      const slow_hint = () => i18n.tr('dashboard.progress-notification.slow-delete');
      const stream = rx.from(
        rp.cmd('sse/permanently-delete-team-files', {team_id: params.team_id, ids: Array.from(params.ids)})
      ).pipe(rx.share());

      return rx.merge(
        rx.of(dcm.initialize_progress({
          slow_progress_threshold: mconst.default_slow_progress_threshold,
          total: params.ids.size,
          hints: {
            progress: progress_hint,
            slow: slow_hint
          }
        })),

        rx.from(stream)
          .pipe(
            rx.filter(sse.progress),
            rx.mapcat((event: any) => {
              const payload = sse.get_payload(event);
              if (payload && payload.index !== undefined && payload.total !== undefined) {
                return rx.of(dcm.update_progress({index: payload.index, total: payload.total}));
              }
              return rx.empty();
            }),
            rx.catch(() => rx.empty())
          ),

        rx.from(stream)
          .pipe(
            rx.filter(sse.end_of_stream),
            rx.map(sse.get_payload),
            rx.merge_map(() => rx.concat(
              rx.of(dcm.clear_progress(), fetch_projects(params.team_id), fetch_deleted_files(params.team_id), fetch_projects(params.team_id)),
              rx.of(params.on_success())
            )),
            rx.catch((error: any) => rx.concat(
              rx.of(dcm.clear_progress()),
              rx.of(params.on_error(error))
            ))
          )
      );
    }
  });
}

export function delete_files_immediately(params: any) {
  dm.assert!(uuid.is_uuid(params.team_id));
  dm.assert!(params.ids instanceof Set);
  dm.assert!(Array.from(params.ids).every(uuid.is_uuid));

  return ptk.reify('delete-files-immediately', class implements ptk.WatchEvent {
    async watch(state: any, dispatch: any, ctx: any) {
      const deleted_files = state.deleted_files;

      const on_success = () => {
        if (params.ids.size === 1) {
          const fname = deleted_files[Array.from(params.ids)[0]]?.name;
          return rx.of(ntf.success(i18n.tr('dashboard.delete-success-notification', fname)));
        }
        return rx.of(ntf.success(i18n.tr('dashboard.delete-files-success-notification', params.ids.size)));
      };

      const on_error = (cause: any) => {
        if (params.ids.size === 1) {
          const fname = deleted_files[Array.from(params.ids)[0]]?.name;
          return rx.of(ntf.error(i18n.tr('dashboard.errors.error-on-delete-files', fname)));
        }
        return rx.of(ntf.error(i18n.tr('dashboard.errors.error-on-delete-files')));
      };

      return rx.concat(
        rx.of(ev.event({
          'ev/name': 'delete-files',
          'ev/origin': 'dashboard:trash',
          team_id: params.team_id,
          num_files: params.ids.size
        })),
        rx.of(delete_files({
          team_id: params.team_id,
          ids: params.ids,
          on_success,
          on_error
        }))
      );
    }
  });
}

export function delete_project_immediately(project: any) {
  dm.assert!(valid_project(project));

  return ptk.reify('delete-project-immediately', class implements ptk.WatchEvent {
    async watch(state: any, dispatch: any, ctx: any) {
      const ids = Object.entries(state.deleted_files)
        .filter(([_, file]: [string, any]) => file.project_id === project.id)
        .map(([id, _]) => id);

      const on_success = () => rx.of(ntf.success(i18n.tr('dashboard.delete-success-notification', project.name)));
      const on_error = () => rx.of(ntf.error(i18n.tr('dashboard.errors.error-on-delete-project', project.name)));

      return rx.concat(
        rx.of(ev.event({
          'ev/name': 'delete-files',
          'ev/origin': 'dashboard:trash',
          team_id: project.team_id,
          project_id: project.id,
          num_files: ids.length
        })),
        rx.of(delete_files({
          team_id: project.team_id,
          ids: new Set(ids),
          on_success,
          on_error
        }))
      );
    }
  });
}

// --- Restore deleted files immediately

function restore_files(params: any) {
  dm.assert!(uuid.is_uuid(params.team_id));
  dm.assert!(params.ids instanceof Set);
  dm.assert!(Array.from(params.ids).every(uuid.is_uuid));
  dm.assert!(typeof params.on_success === 'function');
  dm.assert!(typeof params.on_error === 'function');

  return ptk.reify('restore-files', class implements ptk.WatchEvent {
    async watch(state: any, dispatch: any, ctx: any) {
      const progress_hint = () => i18n.tr('dashboard.progress-notification.restoring-files');
      const slow_hint = () => i18n.tr('dashboard.progress-notification.slow-restore');

      const stream = rx.from(
        rp.cmd('sse/restore-deleted-team-files', {team_id: params.team_id, ids: Array.from(params.ids)})
      ).pipe(rx.share());

      return rx.merge(
        rx.of(dcm.initialize_progress({
          slow_progress_threshold: mconst.default_slow_progress_threshold,
          total: params.ids.size,
          hints: {
            progress: progress_hint,
            slow: slow_hint
          }
        })),

        rx.from(stream)
          .pipe(
            rx.filter(sse.progress),
            rx.mapcat((event: any) => {
              const payload = sse.get_payload(event);
              if (payload && payload.index !== undefined && payload.total !== undefined) {
                return rx.of(dcm.update_progress({index: payload.index, total: payload.total}));
              }
              return rx.empty();
            }),
            rx.catch(() => rx.empty())
          ),

        rx.from(stream)
          .pipe(
            rx.filter(sse.end_of_stream),
            rx.map(sse.get_payload),
            rx.merge_map(() => rx.concat(
              rx.of(dcm.clear_progress()),
              rx.of(fetch_projects(params.team_id)),
              rx.of(fetch_deleted_files(params.team_id)),
              rx.of(fetch_projects(params.team_id)),
              rx.of(params.on_success())
            )),
            rx.catch((error: any) => rx.concat(
              rx.of(dcm.clear_progress()),
              rx.of(params.on_error(error))
            ))
          )
      );
    }
  });
}

export function restore_files_immediately(params: any) {
  dm.assert!(uuid.is_uuid(params.team_id));
  dm.assert!(params.ids instanceof Set);

  return ptk.reify('restore-files-immediately', class implements ptk.WatchEvent {
    async watch(state: any, dispatch: any, ctx: any) {
      const deleted_files = state.deleted_files;

      const on_success = () => {
        if (params.ids.size === 1) {
          const fname = deleted_files[Array.from(params.ids)[0]]?.name;
          return rx.of(ntf.success(i18n.tr('dashboard.restore-success-notification', fname)));
        }
        return rx.of(ntf.success(i18n.tr('dashboard.restore-files-success-notification', params.ids.size)));
      };

      const on_error = (cause: any) => {
        if (params.ids.size === 1) {
          const fname = deleted_files[Array.from(params.ids)[0]]?.name;
          return rx.of(ntf.error(i18n.tr('dashboard.errors.error-on-restore-file', fname)));
        }
        return rx.of(ntf.error(i18n.tr('dashboard.errors.error-on-restore-files')));
      };

      return rx.concat(
        rx.of(ev.event({
          'ev/name': 'restore-files',
          'ev/origin': 'dashboard:trash',
          team_id: params.team_id,
          num_files: params.ids.size
        })),
        rx.of(restore_files({
          team_id: params.team_id,
          ids: params.ids,
          on_success,
          on_error
        }))
      );
    }
  });
}

export function restore_project_immediately(project: any) {
  dm.assert!(valid_project(project));

  return ptk.reify('restore-project-immediately', class implements ptk.WatchEvent {
    async watch(state: any, dispatch: any, ctx: any) {
      const ids = Object.entries(state.deleted_files)
        .filter(([_, file]: [string, any]) => file.project_id === project.id)
        .map(([id, _]) => id);

      const on_success = () => st.emit!(ntf.success(i18n.tr('dashboard.restore-success-notification', project.name)));
      const on_error = () => st.emit!(ntf.error(i18n.tr('dashboard.errors.error-on-restoring-project', project.name)));

      return rx.concat(
        rx.of(ev.event({
          'ev/name': 'restore-files',
          'ev/origin': 'dashboard:trash',
          team_id: project.team_id,
          project_id: project.id,
          num_files: ids.length
        })),
        rx.of(restore_files({
          team_id: project.team_id,
          ids: new Set(ids),
          on_success,
          on_error
        }))
      );
    }
  });
}