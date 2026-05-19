// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { uw } from 'app.util.worker';
import { rx } from 'beicon.v2';

// Injected from `app.main.errors` to remove circular dependency
export let onError: any = null;

export let instance: any = null;

export const init = () => {
  const worker = uw.init(cf.workerUri, onError);

  uw.ask(worker, { cmd: 'configure', config: { publicUri: cf.publicUri, buildData: cf.buildDate, version: cf.version } });

  instance = worker;
};

export const ask = (message: any, transfer?: any) => {
  if (instance) {
    return uw.ask(instance, message, transfer);
  }
  return rx.empty();
};

export const emit = (message: any, transfer?: any) => {
  if (instance) {
    return uw.emit(instance, message, transfer);
  }
  return rx.empty();
};

export const askBuffered = (message: any, transfer?: any) => {
  if (instance) {
    return uw.askBuffered(instance, message, transfer);
  }
  return rx.empty();
};

export const askMany = (message: any, transfer?: any) => {
  if (instance) {
    return uw.askMany(instance, message, transfer);
  }
  return rx.empty();
};