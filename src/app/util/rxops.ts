// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { Observable, OperatorFunction, Subscriber } from 'rxjs';

/**
 * Creates a throttled function that executes at most once every delay milliseconds.
 * High performance throttle that doesn't saturate the macro-task queue of JS runtime
 * on long bursts of mouse movements.
 *
 * @param delay - Throttle delay in milliseconds
 * @param fn - Function to throttle
 * @returns Throttled function with dispose method
 */
export function throttleFn<T extends (...args: any[]) => void>(
  delay: number,
  fn: T
): T & { dispose: () => void } {
  const state = {
    lastExecTime: 0,
    timeoutId: null as ReturnType<typeof setTimeout> | null,
    context: null as unknown,
    args: null as unknown as IArguments | null
  };

  const executeFn = () => {
    const context = state.context as unknown;
    const args = state.args;
    fn.apply(context, args as unknown as Parameters<T>);
    state.lastExecTime = Date.now();
    state.timeoutId = null;
  };

  const wrappedFn = function (this: unknown) {
    const ctime = Date.now();
    const ltime = state.lastExecTime;

    state.context = this;
    state.args = arguments;

    if (ctime - ltime >= delay) {
      if (state.timeoutId !== null) {
        clearTimeout(state.timeoutId);
        state.timeoutId = null;
      }
      executeFn();
    } else if (state.timeoutId === null) {
      state.timeoutId = setTimeout(executeFn, delay - (ctime - ltime));
    }
  };

  const disposable = wrappedFn as T & { dispose: () => void };
  disposable.dispose = () => {
    if (state.timeoutId !== null) {
      clearTimeout(state.timeoutId);
    }
    state.lastExecTime = 0;
    state.timeoutId = null;
  };

  return disposable;
}

/**
 * RxJS throttle operator.
 * High performance rxjs throttle operation. It does not saturate the
 * macro-task queue of JS runtime on long bursts of mouse movements.
 *
 * @param delay - Throttle delay in milliseconds
 * @returns RxJS operator function
 */
export function throttle<T>(delay: number): OperatorFunction<T, T> {
  return (source: Observable<T>) =>
    new Observable<T>((subscriber) => {
      const nextFn = throttleFn(delay, (value: T) => {
        subscriber.next(value);
      });

      const errorFn = (error: unknown) => {
        nextFn.dispose();
        subscriber.error(error);
      };

      const completeFn = () => {
        nextFn.dispose();
        subscriber.complete();
      };

      const subscription = source.subscribe({
        next: (value) => nextFn(value),
        error: errorFn,
        complete: completeFn
      });

      return () => {
        nextFn.dispose();
        subscription.unsubscribe();
      };
    });
}
