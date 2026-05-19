// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as log from '../common/logging.js';
import * as obj from '../util/object/index.js';
import * as tm from '../util/timers/index.js';
import { Observable } from '../vendor/beicon/v2/index.js';
import { distinctContiguous } from '../vendor/beicon/v2/operators.js';
import { str as strLib } from '../vendor/cuerdas/index.js';
import { atom } from '../vendor/okulary/core.js';
import { PotokV2 } from '../vendor/potok/v2/index.js';

log.setLevel('info');

enableConsolePrint();

const loader = atom(false);
const onError = atom((cause: any) => {});

PotokV2.addResolver('default', (type: string, data: any) => {
  return PotokV2.dataEvent(type, data);
});

let onEvent = (e: any) => {};

let debugEvents = false;
let debugEventsTime = false;

const currentMeasure = atom<any>(null);

const measureTimeToRender = (event: any) => {
  if (currentMeasure.deref()) {
    currentMeasure.update(measure => [...measure, event]);
  } else {
    const start = performance.now();
    currentMeasure.reset([event]);

    tm.raf(() => {
      scheduler.postTask(() => {
        const time = performance.now() - start;
        // Only print sets that last over 1second
        if (time > 1000) {
          console.log(`${time}|${currentMeasure.deref().join(',')}`);
        }
        currentMeasure.reset(null);
      }, { priority: 'user-blocking' });
    });
  }
};

// Only created in development build
if (process.env.NODE_ENV === 'development') {
  const debugExcludeEvents = new Set([
    'app.main.data.workspace.notifications.handle-pointer-update',
    'app.main.data.workspace.notifications.handle-pointer-send',
    'app.main.data.websocket.send-message',
    'app.main.data.workspace.selection.change-hover-state'
  ]);

  onEvent = (e: any) => {
    if (debugEventsTime && PotokV2.isEvent(e)) {
      measureTimeToRender(PotokV2.type(e));
    }

    if (debugEvents && PotokV2.isEvent(e) && !debugExcludeEvents.has(PotokV2.type(e))) {
      console.log(`[stream]: ${PotokV2.reprEvent(e)}`);
    }
  };
}

const state = PotokV2.store({
  resolve: PotokV2.defaultResolver,
  onEvent,
  onError: (cause: any) => {
    if (cause) {
      // log.error('unexpected exception on store', { cause });
      onError.deref()(cause);
    }
  }
});

const stream = PotokV2.inputStream(state);

const lastEvents = (() => {
  const buffer = atom<any[]>([]);
  const omitSet = new Set([
    'potok.v2.core/undefined',
    'app.main.data.workspace.persistence.update-persistence-status',
    'app.main.data.websocket.send-message',
    'app.main.data.workspace.notifications.handle-pointer-send',
    'app.main.router.assign-exception'
  ]);

  const streamObservable = Observable.merge(
    stream
      .filter(PotokV2.isType('app.main.data.changes/commit'))
      .map(event => (event as any).deref().hintOrigin),
    stream.pipe(map(PotokV2.type))
  )
    .filter(eventType => !omitSet.has(eventType))
    .map(String)
    .pipe(distinctContiguous())
    .scan((buffer: any[], event: any) => {
      const newBuffer = [...buffer, event];
      if (newBuffer.length > 50) {
        newBuffer.shift();
      }
      return newBuffer;
    }, [])
    .subscribe(events => buffer.reset(events));

  return buffer;
})();

export const emit = (...events: any[]) => {
  if (events.length === 0) {
    return undefined;
  }
  if (events.length === 1) {
    PotokV2.emit(state, events[0]);
    return undefined;
  }
  PotokV2.emit(state, ...events);
  return undefined;
};

export const asyncEmit = (...events: any[]) => {
  tm.schedule(() => emit(...events));
};

const ongoingTasks = atom(new Set<string>());

ongoingTasks.addWatch('ongoing-tasks', () => {
  const events = ongoingTasks.deref();
  if (events.size === 0) {
    obj.set(window, 'onbeforeunload', null);
  } else {
    obj.set(window, 'onbeforeunload', () => false);
  }
});