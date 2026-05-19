// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { d, dm, sm, ct } from 'app.common.data';
import { ctt } from 'app.common.types.team';
import * as dsh from 'app.main.data.helpers';
import * as modal from 'app.main.data.modal';
import * as ntf from 'app.main.data.notifications';
import * as dps from 'app.main.data.persistence';
import { rp } from 'app.main.repo';
import * as rt from 'app.main.router';
import { st } from 'app.main.store';
import { tr } from 'app.util.i18n';
import { rx } from 'beicon.v2';
import { ptk } from 'potok.v2.core';

// --- SHARE LINK

export const shareLinkCreated = (link: any) => {
  return ptk.reify({
    type: '::share-link-created',
    event: 'UpdateEvent',
    update: (state: any) => {
      return d.update(state, 'share-links', (links: any[]) => d.nilv(links, []).concat([link]));
    }
  });
};

export const createShareLink = (params: any) => {
  return ptk.reify({
    type: '::create-share-link',
    event: 'WatchEvent',
    watch: () => {
      return rx.from(rp.cmd!({ cmd: 'create-share-link', data: params }))
        .pipe(rx.map(shareLinkCreated));
    }
  });
};

export const deleteShareLink = (link: any) => {
  const { id } = link;
  return ptk.reify({
    type: '::delete-share-link',
    event: 'UpdateEvent',
    update: (state: any) => {
      return d.update(state, 'share-links', (links: any[]) => {
        return links.filter((link: any) => link.id !== id);
      });
    },
    event: 'WatchEvent',
    watch: () => {
      return rx.from(rp.cmd!({ cmd: 'delete-share-link', data: { id } }))
        .pipe(rx.ignore());
    }
  });
};

// --- NOTIFICATIONS

export const forceReload = () => {
  window.location.reload();
};

export const hideNotifications = () => {
  st.emit!(ntf.hide());
};

export const handleNotification = (params: any) => {
  const { message, code } = params;
  return ptk.reify({
    type: '::show-notification',
    event: 'WatchEvent',
    watch: () => {
      switch (code) {
        case 'upgrade-version':
          return rx.of(ntf.dialog({
            content: tr('notifications.by-code.upgrade-version'),
            accept: { label: tr('labels.refresh'), callback: forceReload },
            tag: 'notification'
          }));

        case 'maintenance':
          return rx.of(ntf.dialog({
            content: tr('notifications.by-code.maintenance'),
            accept: { label: tr('labels.accept'), callback: hideNotifications },
            tag: 'notification'
          }));

        default:
          return rx.of(ntf.dialog({
            content: message,
            accept: { label: tr('labels.close'), callback: hideNotifications },
            tag: 'notification'
          }));
      }
    }
  });
};

// --- SHARED LIBRARY

export const showSharedDialog = (fileId: string, addShared: any) => {
  return ptk.reify({
    type: '::show-shared-dialog',
    event: 'WatchEvent',
    watch: () => {
      return rx.from(rp.cmd!({ cmd: 'get-file-summary', data: { id: fileId } }))
        .pipe(rx.map((summary: any) => {
          const count = (summary.components?.count || 0) +
                       (summary.graphics?.count || 0) +
                       (summary.colors?.count || 0) +
                       (summary.typographies?.count || 0);

          return modal.show({
            type: 'confirm',
            title: tr('modals.add-shared-confirm.message', summary.name),
            message: count === 0 ? tr('modals.add-shared-confirm-empty.hint') : tr('modals.add-shared-confirm.hint'),
            cancelLabel: count === 0 ? tr('labels.cancel') : undefined,
            acceptLabel: tr('modals.add-shared-confirm.accept'),
            acceptStyle: 'primary',
            onAccept: addShared
          });
        }));
    }
  });
};

// --- Exportations

const schemaExportFiles = sm.checkFn({
  title: 'Files',
  type: 'sequential',
  schema: [{
    type: 'map',
    title: 'FileParam',
    schema: {
      id: sm.uuid,
      name: 'string',
      projectId: sm.uuid,
      isShared: sm.boolean
    }
  }]
});

const validExportFormats = new Set(['binfile-v1', 'binfile-v3', 'legacy-zip']);

export const exportFiles = (files: any[], format: string) => {
  dm.assert!('expected valid files param', schemaExportFiles(files));
  dm.assert!('expected valid format', validExportFormats.has(format));

  return ptk.reify({
    type: '::export-files',
    event: 'WatchEvent',
    watch: (state: any) => {
      const features = state.features;
      const teamId = state.current-team-id;

      return rx.from(files)
        .pipe(
          rx.mapcat((file: any) => {
            return rx.from(rp.cmd!({ cmd: 'has-file-libraries', data: { file-id: file.id } }))
              .pipe(rx.map((hasLibraries: boolean) => ({ ...file, has-libraries: hasLibraries })));
          }),
          rx.reduce((acc: any[], file: any) => [...acc, file], []),
          rx.map((files: any[]) => {
            return modal.show({
              type: 'export',
              features,
              team-id: teamId,
              files,
              format
            });
          })
        );
    }
  });
};

// --- Team Request

export const createTeamAccessRequest = (params: any) => {
  const { onSuccess = identity, onError = rx.throw } = params.meta || {};

  return ptk.reify({
    type: '::create-team-access-request',
    event: 'WatchEvent',
    watch: () => {
      return rx.from(rp.cmd!({ cmd: 'create-team-access-request', data: params }))
        .pipe(
          rx.tap(onSuccess),
          rx.catch(onError)
        );
    }
  });
};

const getChangeRoleMsg = (role: string) => {
  switch (role) {
    case 'viewer': return tr('dashboard.permissions-change.viewer');
    case 'editor': return tr('dashboard.permissions-change.editor');
    case 'admin': return tr('dashboard.permissions-change.admin');
    case 'owner': return tr('dashboard.permissions-change.owner');
    default: return '';
  }
};

export const changeTeamRole = ({ teamId, role }: { teamId: string; role: string }) => {
  dm.assert!(d.uuid(teamId));
  dm.assert!(ctt.validRoles.has(role));

  return ptk.reify({
    type: '::change-team-role',
    event: 'WatchEvent',
    watch: () => {
      return rx.of(ntf.info(getChangeRoleMsg(role)));
    },
    event: 'UpdateEvent',
    update: (state: any) => {
      const permissions = ctt.getPermissionsForRole(role);
      return state
        .update('permissions', (perms: any) => d.merge(perms, permissions))
        .updateIn(['team', 'permissions'], (perms: any) => d.merge(perms, permissions))
        .dUpdateInWhen(['teams', teamId, 'permissions'], (perms: any) => d.merge(perms, permissions));
    }
  });
};

export const teamMembershipChange = ({ teamId, teamName, change }: { teamId: string; teamName: string; change: string }) => {
  dm.assert!(d.uuid(teamId));

  return ptk.reify({
    type: '::team-membership-change',
    event: 'UpdateEvent',
    update: (state: any) => {
      // FIXME: Remove on 2.5
      return d.assoc(state, 'current-team-id', dm.getIn(state, ['profile', 'default-team-id']));
    },
    event: 'WatchEvent',
    watch: (state: any) => {
      if (change === 'removed') {
        const message = tr('dashboard.removed-from-team', teamName);
        const teamId = dm.getIn(state, ['profile', 'default-team-id']);

        return rx.concat(
          rx.of(goToDashboardRecent({ team-id: teamId })),
          rx.of(ntf.info(message))
            .pipe(rx.delay(250)) // Delay so the navigation can finish
        );
      }
      return rx.empty();
    }
  });
};

// --- PROGRESS EVENTS

const noopFn = () => null;

const schemaProgressParams = sm.checkFn({
  title: 'Progress',
  type: 'map',
  schema: {
    key: { type: 'optional', schema: sm.text },
    index: { type: 'optional', schema: sm.int },
    total: sm.int,
    hints: {
      type: 'map-of',
      key: sm.keyword,
      value: { type: 'function' }
    },
    slowProgressThreshold: { type: 'optional', schema: sm.int }
  }
});

const checkProgressParams = sm.checkFn(schemaProgressParams);

export const initializeProgress = (params: any) => {
  const { key, index, total, hints = {}, slowProgressThreshold } = params;

  dm.assert!(checkProgressParams(params));

  return ptk.reify({
    type: '::initialize-progress',
    event: 'UpdateEvent',
    update: (state: any) => {
      const hint = hints.normal ? hints.normal(params) : noopFn();
      return d.update(state, 'progress', (_: any) => ({
        threshold: slowProgressThreshold || 5000,
        key,
        lastUpdate: ct.now(),
        healthy: true,
        visible: true,
        hints,
        progress: d.nilv(index, 0),
        total,
        hint
      }));
    }
  });
};

export const updateProgress = (params: any) => {
  const { index, total } = params;

  dm.assert!(checkProgressParams(params));

  return ptk.reify({
    type: '::update-progress',
    event: 'UpdateEvent',
    update: (state: any) => {
      const progressState = d.getIn(state, 'progress') || {};
      const { lastUpdate, hints = {}, threshold } = progressState;

      const timeDiff = ct.diffMs(lastUpdate, ct.now());
      const healthy = timeDiff < threshold;

      const hint = healthy
        ? (hints.normal ? hints.normal(params) : noopFn())
        : (hints.slow ? hints.slow(params) : noopFn());

      return d.update(state, 'progress', (prevState: any) => ({
        ...prevState,
        progress: index,
        total,
        lastUpdate: ct.now(),
        healthy,
        hint
      }));
    }
  });
};

export const toggleProgressVisibility = () => {
  return ptk.reify({
    type: '::toggle-progress-visibility',
    event: 'UpdateEvent',
    update: (state: any) => {
      return d.update(state, 'progress', (progress: any) => {
        return d.update(progress, 'visible', (visible: boolean) => !visible);
      });
    }
  });
};

export const clearProgress = () => {
  return ptk.reify({
    type: '::clear-progress',
    event: 'UpdateEvent',
    update: (state: any) => {
      return d.dissoc(state, 'progress');
    }
  });
};

// --- NAVIGATION EVENTS

export const goToFeedback = () => {
  return ptk.reify({
    type: '::go-to-feedback',
    event: 'WatchEvent',
    watch: () => {
      return rx.of(rt.nav('settings-feedback', {}, {
        '::rt/new-window': true,
        '::rt/window-name': 'penpot-feedback'
      }));
    }
  });
};

export const goToDashboardFiles = (options: any = {}) => {
  const { project-id, team-id } = options;

  return ptk.reify({
    type: '::go-to-dashboard-files',
    event: 'WatchEvent',
    watch: (state: any) => {
      const profile = d.get(state, 'profile');
      const teamId = team-id || d.get(state, 'current-team-id');
      const projectId = project-id === 'default' ? dm.getIn(profile, 'default-project-id') : project-id;

      const params = {
        team-id: teamId,
        project-id: projectId
      };

      return rx.of(rt.nav('dashboard-files', params, options));
    }
  });
};

export const goToDashboardSearch = (options: any = {}) => {
  const { term } = options;

  return ptk.reify({
    type: '::go-to-dashboard-search',
    event: 'WatchEvent',
    watch: (state: any, stream: any) => {
      const teamId = d.get(state, 'current-team-id');

      return rx.merge(
        rx.of(rt.nav('dashboard-search', { team-id: teamId, search-term: term }, (modal.hide() as any)))
          .pipe(rx.observeOn('async')),

        rx.from(stream)
          .pipe(
            rx.filter((ptk: any) => ptk.type === '::rt/navigated'),
            rx.take(1),
            rx.map(() => ptk.event({
              type: '::dom/focus-element',
              data: { name: 'search-input' }
            }))
          )
      );
    }
  });
};

export const goToDashboardLibraries = (options: any = {}) => {
  const { team-id } = options;

  return ptk.reify({
    type: '::go-to-dashboard-libraries',
    event: 'WatchEvent',
    watch: (state: any) => {
      const teamId = team-id || d.get(state, 'current-team-id');
      return rx.of(rt.nav('dashboard-libraries', { team-id: teamId }));
    }
  });
};

export const goToDashboardFonts = (options: any = {}) => {
  const { team-id } = options;

  return ptk.reify({
    type: '::go-to-dashboard-fonts',
    event: 'WatchEvent',
    watch: (state: any) => {
      const teamId = team-id || d.get(state, 'current-team-id');
      return rx.of(rt.nav('dashboard-fonts', { team-id: teamId }));
    }
  });
};

export const goToDashboardRecent = (options: any = {}) => {
  const { team-id } = options;

  return ptk.reify({
    type: '::go-to-dashboard-recent',
    event: 'WatchEvent',
    watch: (state: any) => {
      const profile = d.get(state, 'profile');
      const teamId = team-id === 'default'
        ? dm.getIn(profile, 'default-team-id')
        : (d.uuid(team-id) ? team-id : d.get(state, 'current-team-id'));

      const params = { team-id: teamId };
      return rx.of((modal.hide() as any), rt.nav('dashboard-recent', params, options));
    }
  });
};

export const goToDashboardMembers = (options: any = {}) => {
  return ptk.reify({
    type: '::go-to-dashboard-members',
    event: 'WatchEvent',
    watch: (state: any) => {
      const teamId = d.get(state, 'current-team-id');
      return rx.of(rt.nav('dashboard-members', { team-id: teamId }));
    }
  });
};

export const goToDashboardInvitations = (options: any = {}) => {
  return ptk.reify({
    type: '::go-to-dashboard-invitations',
    event: 'WatchEvent',
    watch: (state: any) => {
      const teamId = d.get(state, 'current-team-id');
      return rx.of(rt.nav('dashboard-invitations', { team-id: teamId }));
    }
  });
};

export const goToDashboardWebhooks = (options: any = {}) => {
  return ptk.reify({
    type: '::go-to-dashboard-webhooks',
    event: 'WatchEvent',
    watch: (state: any) => {
      const teamId = d.get(state, 'current-team-id');
      return rx.of(rt.nav('dashboard-webhooks', { team-id: teamId }));
    }
  });
};

export const goToDashboardSettings = (options: any = {}) => {
  return ptk.reify({
    type: '::go-to-dashboard-settings',
    event: 'WatchEvent',
    watch: (state: any) => {
      const teamId = d.get(state, 'current-team-id');
      return rx.of(rt.nav('dashboard-settings', { team-id: teamId }));
    }
  });
};

export const goToWorkspace = (options: any = {}) => {
  const { team-id, file-id, page-id, layout } = options;

  return ptk.reify({
    type: '::go-to-workspace',
    event: 'WatchEvent',
    watch: (state: any) => {
      const teamId = team-id || d.get(state, 'current-team-id');
      const fileId = file-id || d.get(state, 'current-file-id');
      const pageId = page-id || d.get(state, 'current-page-id') ||
                   (dsh.lookupFileData(state, fileId)?.pages?.[0]);

      const params = d.withoutNils(
        d.update(rt.getParams(state), 'team-id', (id: any) => team-id || id)
          .update('file-id', (id: any) => fileId || id)
          .update('page-id', (id: any) => pageId || id)
          .update('layout', (l: any) => layout || l)
      );

      return rx.of((dps.forcePersist as any), rt.nav('workspace', params, options));
    }
  });
};

export const goToViewer = (options: any = {}) => {
  const { file-id, page-id, section, frame-id, index } = options;

  return ptk.reify({
    type: '::go-to-viewer',
    event: 'WatchEvent',
    watch: (state: any) => {
      const pageId = page-id || d.get(state, 'current-page-id');
      const fileId = file-id || d.get(state, 'current-file-id');
      const sectionVal = section || 'interactions';

      const params = d.withoutNils({
        file-id: fileId,
        page-id: pageId,
        section: sectionVal,
        frame-id,
        index
      });

      const name = dm.str('viewer-', fileId);
      const navOptions = {
        '::rt/new-window': true,
        '::rt/window-name': name,
        ...options
      };

      return rx.of((dps.forcePersist as any), rt.nav('viewer', params, navOptions));
    }
  });
};

export const goToDashboardDeleted = (options: any = {}) => {
  const { team-id } = options;

  return ptk.reify({
    type: '::go-to-dashboard-deleted',
    event: 'WatchEvent',
    watch: (state: any) => {
      const profile = d.get(state, 'profile');
      const teamId = team-id === 'default'
        ? dm.getIn(profile, 'default-team-id')
        : (d.uuid(team-id) ? team-id : d.get(state, 'current-team-id'));

      const params = { team-id: teamId };
      return rx.of((modal.hide() as any), rt.nav('dashboard-deleted', params, options));
    }
  });
};