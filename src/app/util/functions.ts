// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import debounce from 'lodash/debounce';

/**
 * Throttle function implementation.
 * @param timeout - The throttle timeout in ms
 * @param fn - The function to throttle
 * @returns Throttled function
 */
export function throttleFn<T extends (...args: any[]) => any>(timeout: number, fn: T): T {
  let lastCall = 0;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return ((...args: Parameters<T>) => {
    const now = Date.now();
    const remaining = timeout - (now - lastCall);

    if (remaining <= 0) {
      lastCall = now;
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      fn(...args);
    } else if (!timeoutId) {
      timeoutId = setTimeout(() => {
        lastCall = Date.now();
        timeoutId = null;
        fn(...args);
      }, remaining);
    }
  }) as T;
}

/**
 * Debounce function.
 * @param f - The function to debounce
 * @param timeout - Optional timeout in ms, defaults to 0
 * @returns Debounced function
 */
export function debounceFn<T extends (...args: any[]) => any>(f: T, timeout = 0): T {
  return debounce(f, timeout, { leading: false, trailing: true }) as T;
}

/**
 * Throttle function.
 * @param f - The function to throttle
 * @param timeout - Optional timeout in ms, defaults to 0
 * @returns Throttled function
 */
export function throttle<T extends (...args: any[]) => any>(f: T, timeout?: number): T {
  return throttleFn(timeout ?? 0, f);
}
