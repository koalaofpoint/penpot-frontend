// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { d, ex, sm, uuid, cf } from 'app.common.data';
import * as dcm from 'app.main.data.common';
import * as ev from 'app.main.data.event';
import * as ntf from 'app.main.data.notifications';
import * as dp from 'app.main.data.profile';
import * as dtm from 'app.main.data.team';
import * as ws from 'app.main.data.websocket';
import { rp } from 'app.main.repo';
import * as rt from 'app.main.router';
import { tr } from 'app.util.i18n';
import { storage } from 'app.util.storage';
import { rx } from 'beicon.v2';
import { ptk } from 'potok.v2.core';

// --- HELPERS

export const isAuthenticated = (profile: any) => {
  const { id } = profile;
  return d.uuid(id) && id !== uuid.zero;
};

// --- EVENT: login

const getRedirectEvents = (teams: any[], profile: any) => {
  const { invitation-token } = profile;
  if (invitation-token) {
    return rx.of(rt.nav('auth-verify-token', { token: invitation-token }));
  }

  if (storage.session?.login-redirect) {
    const redirectHref = storage.session.login-redirect;
    delete storage.session.login-redirect;

    if (redirectHref === rt.getCurrentHref()) {
      return rx.of(rt.reload(true));
    } else {
      return rx.of(rt.navRaw({ href: redirectHref }));
    }
  }

  if (profile.props?.welcome-file-id) {
    return rx.of(
      dcm.goToWorkspace({ file-id: profile.props.welcome-file-id, team-id: profile.default-team-id }),
      dp.updateProfileProps({ welcome-file-id: null })
    );
  }

  const teamIds = new Set(teams.map((team: any) => team.id));
  const lastTeamId = dtm.getLastTeamId();
  const teamId = (lastTeamId && teamIds.has(lastTeamId)) ? lastTeamId : profile.default-team-id;

  return rx.of(dcm.goToDashboardRecent({ team-id: teamId }));
};

export const loggedIn = (profile: any) => {
  return ptk.reify({
    type: '::logged-in',
    event: 'Event',
    data: () => ({
      [ev.name]: 'signin',
      [ev.type]: 'identify',
      email: profile.email,
      'auth-backend': profile['auth-backend'],
      fullname: profile.fullname,
      'is-muted': profile['is-muted'],
      'default-team-id': profile['default-team-id'],
      'default-project-id': profile['default-project-id']
    }),
    event: 'WatchEvent',
    watch: (_: any, __: any, stream: any) => {
      cf.initializeExternalContextInfo();

      return rx.merge(
        rx.of(
          dp.setProfile(profile),
          ws.initialize(),
          dtm.fetchTeams()
        ),

        rx.from(stream)
          .pipe(
            rx.filter((ptk: any) => ptk.type === '::dtm/teams-fetched'),
            rx.take(1),
            rx.map((ptk: any) => ptk.deref()),
            rx.map((teams: any[]) => getRedirectEvents(teams, profile))
          )
      ).pipe(rx.observeOn('async'));
    }
  });
};

export const login = (data: any) => {
  const { email, password, invitation-token } = data;
  const { on-error = rx.throw, on-success = identity } = data.meta || {};

  const params = { email, password, invitation-token };

  return ptk.reify({
    type: '::login',
    event: 'WatchEvent',
    watch: (_: any, __: any, stream: any) => {
      return rx.from(rp.cmd!({ cmd: 'login-with-password', data: d.withoutNils(params) }))
        .pipe(
          rx.mergeMap((data: any) => {
            return rx.merge(
              rx.of(dp.fetchProfile()),

              rx.from(stream)
                .pipe(
                  rx.filter((ptk: any) => dp.profileFetched(ptk)),
                  rx.take(1),
                  rx.map((ptk: any) => ptk.deref()),
                  rx.filter((profile: any) => !isAuthenticated(profile)),
                  rx.tap(on-error),
                  rx.map(() => ex.raise({ type: 'authentication' })),
                  rx.observeOn('async')
                ),

              rx.from(stream)
                .pipe(
                  rx.filter((ptk: any) => dp.profileFetched(ptk)),
                  rx.take(1),
                  rx.map((ptk: any) => ptk.deref()),
                  rx.filter(isAuthenticated),
                  rx.map((profile: any) => {
                    return { ...data, ...profile, [ev.source]: 'login' };
                  }),
                  rx.tap(on-success),
                  rx.map(loggedIn),
                  rx.observeOn('async')
                )
            );
          }),
          rx.catch(on-error)
        );
    }
  });
};

const schemaLoginWithLdap = sm.checkFn({
  type: 'map',
  title: 'login-with-ldap',
  schema: {
    email: sm.email,
    password: 'string'
  }
});

export const loginWithLdap = (params: any) => {
  dm.assert!(schemaLoginWithLdap(params));

  const { on-error = rx.throw, on-success = identity } = params.meta || {};

  return ptk.reify({
    type: '::login-with-ldap',
    event: 'WatchEvent',
    watch: () => {
      return rx.from(rp.cmd!({ cmd: 'login-with-ldap', data: params }))
        .pipe(
          rx.tap(on-success),
          rx.map((profile: any) => {
            return loggedIn({ ...profile, [ev.source]: 'login-with-ldap' });
          }),
          rx.catch(on-error)
        );
    }
  });
};

const schemaLoginWithSso = sm.checkFn({
  type: 'map',
  title: 'login-with-sso',
  schema: {
    provider: ['string', sm.uuid]
  }
});

export const loginWithSso = (params: any) => {
  dm.assert!(schemaLoginWithSso(params));

  return ptk.reify({
    type: '::login-with-sso',
    event: 'WatchEvent',
    watch: () => {
      return rx.from(rp.cmd!({ cmd: 'login-with-oidc', data: params }))
        .pipe(
          rx.map(({ redirect-uri }: any) => {
            if (redirect-uri) {
              return rt.navRaw({ uri: redirect-uri });
            }
            return ex.raise({
              type: 'assertion',
              code: 'unexpected-response',
              hint: 'unexpected response from OIDC method',
              resp: JSON.stringify({ redirect-uri })
            });
          }),
          rx.catch((cause: any) => {
            const { type, code } = ex.data(cause);
            if (type === 'restriction' && code === 'provider-not-configured') {
              return rx.of(ntf.warn(tr('errors.auth-provider-not-configured')));
            }
            return rx.throw(cause);
          })
        );
    }
  });
};

export const loginFromToken = (tdata: any) => {
  const { profile } = tdata;

  return ptk.reify({
    type: '::login-from-token',
    event: 'WatchEvent',
    watch: () => {
      return rx.from(dp.onFetchProfileSuccess(profile))
        .pipe(
          rx.map((profile: any) => {
            return loggedIn({ ...profile, [ev.source]: 'login-with-token' });
          }),
          rx.observeOn('async')
        );
    }
  });
};

export const loginFromRegister = () => {
  return ptk.reify({
    type: '::login-from-register',
    event: 'WatchEvent',
    watch: (_: any, __: any, stream: any) => {
      return rx.merge(
        rx.of(dp.fetchProfile()),

        rx.from(stream)
          .pipe(
            rx.filter((ptk: any) => dp.profileFetched(ptk)),
            rx.take(1),
            rx.map((ptk: any) => ptk.deref()),
            rx.filter(isAuthenticated),
            rx.map((profile: any) => {
              return { ...profile, [ev.source]: 'register' };
            }),
            rx.map(loggedIn),
            rx.observeOn('async')
          )
      );
    }
  });
};

// --- EVENT: logout

export const loggedOut = (redirectUri?: string) => {
  return ptk.reify({
    type: '::logged-out',
    event: 'UpdateEvent',
    update: (state: any) => {
      return d.selectKeys(state, ['route', 'router', 'session-id', 'history']);
    },
    event: 'WatchEvent',
    watch: () => {
      if (redirectUri) {
        return rx.of(rt.navRaw({ uri: String(redirectUri) }))
          .pipe(rx.observeOn('async'));
      }

      return rx.merge(
        rx.of(rt.nav('auth-login'))
          .pipe(rx.observeOn('async')),
        rx.of(ws.finalize())
      );
    },
    event: 'EffectEvent',
    effect: () => {
      storage.user = {};
    }
  });
};

export const logout = () => {
  return ptk.reify({
    type: '::logout',
    event: 'Event',
    data: () => ({}),
    event: 'WatchEvent',
    watch: (state: any) => {
      const profileId = state.profileId;

      return rx.interval(500)
        .pipe(
          rx.take(1),
          rx.map(() => {
            return rx.from(rp.cmd!({ cmd: 'logout', data: { profile-id: profileId } }))
              .pipe(
                rx.delayAtLeast(300),
                rx.catch(() => rx.of(null))
              );
          }),
          rx.mergeMap((stream: any) => stream),
          rx.map(loggedOut)
        );
    }
  });
};

// --- Update Profile

const schemaRequestProfileRecovery = sm.checkFn({
  type: 'map',
  title: 'request-profile-recovery',
  closed: true,
  schema: {
    email: sm.email
  }
});

export const requestProfileRecovery = (data: any) => {
  dm.assert!(schemaRequestProfileRecovery(data));

  const { on-error = rx.throw, on-success = identity } = data.meta || {};

  return ptk.reify({
    type: '::request-profile-recovery',
    event: 'WatchEvent',
    watch: () => {
      return rx.from(rp.cmd!({ cmd: 'request-profile-recovery', data }))
        .pipe(
          rx.tap(on-success),
          rx.catch(on-error)
        );
    }
  });
};

const schemaRecoverProfile = sm.checkFn({
  type: 'map',
  title: 'recover-profile',
  closed: true,
  schema: {
    password: 'string',
    token: 'string'
  }
});

export const recoverProfile = (data: any) => {
  dm.assert!(schemaRecoverProfile(data));

  const { on-error = rx.throw, on-success = identity } = data.meta || {};

  return ptk.reify({
    type: '::recover-profile',
    event: 'WatchEvent',
    watch: () => {
      return rx.from(rp.cmd!({ cmd: 'recover-profile', data }))
        .pipe(
          rx.tap(on-success),
          rx.catch(on-error)
        );
    }
  });
};

// --- EVENT: create-demo-profile

export const createDemoProfile = () => {
  return ptk.reify({
    type: '::create-demo-profile',
    event: 'WatchEvent',
    watch: () => {
      return rx.from(rp.cmd!({ cmd: 'create-demo-profile', data: {} }))
        .pipe(rx.map(login));
    }
  });
};

// --- Helper: show-redirect-error

export const showRedirectError = (error: string) => {
  return ptk.reify({
    type: '::show-redirect-error',
    event: 'WatchEvent',
    watch: () => {
      const hintMap: Record<string, string> = {
        'registration-disabled': tr('errors.registration-disabled'),
        'profile-blocked': tr('errors.profile-blocked'),
        'auth-provider-not-allowed': tr('errors.auth-provider-not-allowed'),
        'email-domain-not-allowed': tr('errors.email-domain-not-allowed'),
        'generic': tr('errors.generic')
      };

      const hint = hintMap[error];
      if (hint) {
        return rx.of(ntf.warn(hint));
      }
      return rx.empty();
    }
  });
};