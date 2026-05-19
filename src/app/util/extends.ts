// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

/**
 * A dummy namespace for closure library and other global objects extensions.
 *
 * This module extends the Promise prototype with additional methods for compatibility
 * with Closure library's Deferred implementation.
 */

// Extend Promise with Closure library Deferred support
declare global {
  interface PromiseConstructor {
    readonly deferred?: typeof Deferred;
  }
}

/**
 * Deferred interface for promise that can be resolved/rejected externally
 */
interface Deferred<T = any> {
  promise: Promise<T>;
  resolve: (value?: T) => void;
  reject: (reason?: any) => void;
}

/**
 * Initialize Deferred extension if needed
 */
export function extendPromise!(): void {
  // TODO: Implement Deferred extension
  // if (!Promise.deferred) {
  //   const googAsync = (window as any).goog.async;
  //   if (googAsync && googAsync.Deferred) {
  //     Promise.deferred = googAsync.Deferred;
  //   }
  // }
}
