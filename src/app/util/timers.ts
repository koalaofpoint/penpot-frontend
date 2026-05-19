// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { Observable, Subscriber, SchedulerAction } from 'rxjs';

/**
 * Disposable interface for cleanup
 */
export interface IDisposable {
  dispose(): void;
}

/**
 * Closeable interface for cleanup
 */
export interface ICloseable {
  close(): void;
}

/**
 * Schedule a function to run after a delay
 */
export function schedule(func: () => void): IDisposable;
export function schedule(ms: number, func: () => void): IDisposable;
export function schedule(msOrFunc: number | (() => void), func?: () => void): IDisposable {
  const actualFunc = typeof msOrFunc === 'function' ? msOrFunc : func!;
  const ms = typeof msOrFunc === 'number' ? msOrFunc : 0;

  const timeoutId = setTimeout(actualFunc, ms);

  return {
    dispose() {
      clearTimeout(timeoutId);
    },
    close() {
      clearTimeout(timeoutId);
    }
  };
}

/**
 * Dispose a disposable object
 */
export function dispose!(v: IDisposable | ICloseable | null | undefined): void {
  if (!v) return;

  if ('dispose' in v && typeof v.dispose === 'function') {
    v.dispose();
  } else if ('close' in v && typeof v.close === 'function') {
    v.close();
  }
}

/**
 * Run function on next tick
 */
export function asap<T>(f: () => T): Promise<T> {
  return Promise.resolve().then(() => f());
}

/**
 * Create an interval that runs a function periodically
 */
export function interval(ms: number, func: () => void): IDisposable {
  const intervalId = setInterval(func, ms);

  return {
    dispose() {
      clearInterval(intervalId);
    }
  };
}

/**
 * Request idle callback with fallback to setTimeout
 */
const requestIdleCallback =
  typeof window !== 'undefined' && 'requestIdleCallback' in window
    ? (callback: IdleRequestCallback, options?: IdleRequestOptions) =>
        window.requestIdleCallback(callback, { timeout: 30000, ...options })
    : (callback: IdleRequestCallback) => setTimeout(callback, 250);

const cancelIdleCallback =
  typeof window !== 'undefined' && 'cancelIdleCallback' in window
    ? (handle: number) => window.cancelIdleCallback(handle)
    : (handle: number) => clearTimeout(handle);

/**
 * Schedule a function to run on idle after delay
 */
export function scheduleOnIdle(ms: number, func: () => void): IDisposable;
export function scheduleOnIdle(func: () => void): IDisposable;
export function scheduleOnIdle(msOrFunc: number | (() => void), func?: () => void): IDisposable {
  const actualFunc = typeof msOrFunc === 'function' ? msOrFunc : func!;

  if (typeof msOrFunc === 'number') {
    return schedule(msOrFunc, () => scheduleOnIdle(actualFunc));
  }

  const handle = requestIdleCallback(() => actualFunc());

  return {
    dispose() {
      cancelIdleCallback(handle);
    }
  };
}

/**
 * Request animation frame with fallback
 */
const requestAnimationFrame =
  typeof globalThis !== 'undefined' && 'requestAnimationFrame' in globalThis
    ? (callback: FrameRequestCallback) => globalThis.requestAnimationFrame(callback)
    : (callback: FrameRequestCallback) => setTimeout(callback, 16);

/**
 * Request animation frame
 */
export function raf(f: () => void): IDisposable {
  const handle = requestAnimationFrame(f);
  return {
    dispose() {
      cancelAnimationFrame(handle);
    }
  };
}

/**
 * Schedule on idle then request animation frame
 */
export function idleThenRaf(f: () => void): IDisposable {
  return scheduleOnIdle(() => raf(f));
}
