// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as dm from 'app/common/data/macros';
import * as log from 'app/common/logging';
import 'app/common/types/objects-map';
import * as uuid from 'app/common/uuid';
import * as cf from 'app/config';
import * as da from 'app/main/data/auth';
import * as ev from 'app/main/data/event';
import * as dp from 'app/main/data/profile';
import * as ws from 'app/main/data/websocket';
import 'app/main/errors';
import * as feat from 'app/main/features';
import * as thr from 'app/main/rasterizer';
import { emit, store } from 'app/main/store';
import * as ui from 'app/main/ui';
import 'app/main/ui/alert';
import 'app/main/ui/confirm';
import * as cur from 'app/main/ui/css-cursors';
import 'app/main/ui/delete-shared';
import * as rt from 'app/main/ui/routes';
import * as mw from 'app/main/worker';
import * as plugins from 'app/plugins';
import * as dom from 'app/util/dom';
import * as i18n from 'app/util/i18n';
import * as rx from 'beicon.v2.core';
import * as str from 'cuerdas.core';
import * as ptk from 'potok.v2.core';
import * as mf from 'rumext.v2';

log.setup({ app: 'info' });
log.setLevel!('debug');

declare const debug: any;
declare const features: any;

if (cf.target === 'browser') {
  log.info({
    version: cf.version!.full,
    asserts: typeof assert !== 'undefined' ? assert : false,
    buildDate: cf.buildDate,
    publicUri: dm.str(cf.publicUri),
  });
  log.info({
    hint: 'enabled flags',
    flags: str.join(' ', Object.keys(cf.flags).map((k) => k)),
  });
}

let appRoot: any;

const initUI = () => {
  const el = dom.getElement('app');
  appRoot = mf.createRoot!(el);
  mf.render!(appRoot, mf.element(ui.app));
};

interface InitializeEvent extends ptk.UpdateEvent {
  [ptk.type]: 'initialize';
}

const initialize = (): InitializeEvent => {
  return {
    [ptk.type]: 'initialize',
    [ptk/update](state: any) {
      return { ...state, sessionId: uuid.next!() };
    },
    [ptk/watch](_stream: any) {
      return rx.merge(
        cf.flags.includes('audit-log') ? rx.of(ev.initialize!()) : rx.empty!(),
        rx.of(dp.refreshProfile!()),
        _stream.pipe(
          rx.filter(dp.profileDeletedEvent),
          rx.map((e: any) => da.loggedOut!(e))
        ),
        _stream.pipe(
          rx.filter(dp.profileFetched),
          rx.take(1),
          rx.map(() => rt.initRoutes!())
        ),
        _stream.pipe(
          rx.filter(dp.profileFetched),
          rx.map((e: any) => e),
          rx.filter(dp.isAuthenticated),
          rx.take(1),
          rx.map(() => ws.initialize!())
        )
      );
    },
    [ptk/effect](state: any) {
      if (!feat.activeFeature!(state, 'render-wasm/v1')) {
        thr.init!();
      }
    },
  } as InitializeEvent;
};

export const init = (options: any) => {
  if (cf.staleBuild!()) {
    cf.throttledReload!({
      reason: `stale JS: compiled=${cf.compiledVersionTag} expected=${cf.versionTag}`,
    });
  } else {
    if (options && options.defaultTranslations) {
      i18n.setDefaultTranslations!(options.defaultTranslations);
    }

    mw.init!();
    i18n.init!();
    cur.initStyles!();

    initUI();
    emit(
      plugins.initialize!(),
      initialize()
    );
  }
};

export const reinit = (hard?: boolean) => {
  if (hard) {
    mf.unmount!(appRoot);
    appRoot = mf.createRoot!(dom.getElement('app'));
  }
  emit(ev.initialize!());
  initUI();
};

// For hot reload support
export const afterLoad = () => {
  reinit(false);
};

// Increase error stack trace limit
(js as any).Error.stackTraceLimit = 50;

// Entry point for the application
(window as any).Penpot = { init, reinit, afterLoad };