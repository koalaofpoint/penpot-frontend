// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as cfg from '../config.js';
import * as st from './store.js';
import * as globals from '../util/globals/index.js';
import * as kbd from '../util/keyboard/index.js';
import * as mse from '../util/mouse/index.js';
import { Observable } from '../vendor/beicon/v2/index.js';
import { distinctContiguous } from '../vendor/beicon/v2/operators.js';

// --- User Events

export const interactionEvent = (event: any) => {
  return kbd.isKeyboardEvent(event) || mse.isMouseEvent(event);
};

// --- Derived streams

const pointer = st.stream.pipe(
  mse.filterPointerEvent,
  share()
);

export const mousePosition = (() => {
  const sub = new BehaviorSubject<any>(null);
  const ob = pointer.pipe(
    filter(event => mse.getPointerSource(event) === 'viewport'),
    map(mse.getPointerPosition)
  );

  ob.subscribe(sub);
  return sub;
})();

export const mousePositionCtrl = (() => {
  const sub = new BehaviorSubject<any>(null);
  const ob = pointer.pipe(
    map(mse.getPointerCtrlMod),
    pipe(distinctContiguous())
  );

  ob.subscribe(sub);
  return sub;
})();

export const mousePositionMeta = (() => {
  const sub = new BehaviorSubject<any>(null);
  const ob = pointer.pipe(
    map(mse.getPointerMetaMod),
    pipe(distinctContiguous())
  );

  ob.subscribe(sub);
  return sub;
})();

export const mousePositionMod = cfg.checkPlatform('macos') ?
  mousePositionMeta :
  mousePositionCtrl;

export const mousePositionShift = (() => {
  const sub = new BehaviorSubject<any>(null);
  const ob = pointer.pipe(
    map(mse.getPointerShiftMod),
    pipe(distinctContiguous())
  );

  ob.subscribe(sub);
  return sub;
})();

export const mousePositionAlt = (() => {
  const sub = new BehaviorSubject<any>(null);
  const ob = pointer.pipe(
    map(mse.getPointerAltMod),
    pipe(distinctContiguous())
  );

  ob.subscribe(sub);
  return sub;
})();

const windowBlur = fromEvent(globals.window, 'blur').pipe(
  map(() => false),
  share()
);

export const keyboard = st.stream.pipe(
  kbd.filterKeyboardEvent,
  share()
);

export const keyboardAlt = (() => {
  const sub = new BehaviorSubject<any>(null);
  const ob = keyboard.pipe(
    filter(kbd.isAltKey),
    map(kbd.isKeyDownEvent),
    merge(windowBlur),
    pipe(distinctContiguous())
  );

  ob.subscribe(sub);
  return sub;
})();

export const keyboardCtrl = (() => {
  const sub = new BehaviorSubject<any>(null);
  const ob = keyboard.pipe(
    filter(kbd.isCtrlKey),
    map(kbd.isKeyDownEvent),
    merge(windowBlur),
    pipe(distinctContiguous())
  );

  ob.subscribe(sub);
  return sub;
})();

export const keyboardShift = (() => {
  const sub = new BehaviorSubject<any>(null);
  const ob = keyboard.pipe(
    filter(kbd.isShiftKey),
    map(kbd.isKeyDownEvent),
    merge(windowBlur),
    pipe(distinctContiguous())
  );

  ob.subscribe(sub);
  return sub;
})();

export const keyboardMeta = (() => {
  const sub = new BehaviorSubject<any>(null);
  const ob = keyboard.pipe(
    filter(kbd.isMetaKey),
    map(kbd.isKeyDownEvent),
    merge(windowBlur),
    pipe(distinctContiguous())
  );

  ob.subscribe(sub);
  return sub;
})();

export const keyboardMod = cfg.checkPlatform('macos') ?
  keyboardMeta :
  keyboardCtrl;

export const keyboardSpace = (() => {
  const sub = new BehaviorSubject<any>(null);
  const ob = keyboard.pipe(
    filter(kbd.isSpace),
    filter(event => !kbd.isEditingEvent(event)),
    map(kbd.isKeyDownEvent),
    merge(windowBlur),
    pipe(distinctContiguous())
  );

  ob.subscribe(sub);
  return sub;
})();