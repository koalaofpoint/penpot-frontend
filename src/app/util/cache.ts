// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { Observable, of, Subject } from 'rxjs';

interface CacheEntry<T> {
  createdAt: number;
  data: T;
}

/**
 * Cache storage
 */
const cache = new Map<string, CacheEntry<unknown>>();

/**
 * Pending observable storage for in-flight requests
 */
const pending = new Map<string, Subject<unknown>>();

/**
 * Gets current timestamp.
 */
function now(): number {
  return Date.now();
}

/**
 * Creates a cached version of an observable.
 *
 * @param options - Cache options with key and maxAge
 * @param observable - The observable to cache
 * @returns Observable that may be cached or a new request
 */
export function withCache<T>(
  options: { key: string; maxAge: number },
  observable: Observable<T>
): Observable<T> {
  const { key, maxAge } = options;
  const entry = cache.get(key) as CacheEntry<T> | undefined;
  const pendingEntry = pending.get(key) as Subject<T> | undefined;

  if (entry) {
    const age = now() - entry.createdAt;
    if (age < maxAge) {
      return of(entry.data);
    }
  }

  if (pendingEntry) {
    return pendingEntry.asObservable();
  }

  const subject = new Subject<T>();
  pending.set(key, subject);

  observable.subscribe({
    next: (data) => {
      cache.set(key, { createdAt: now(), data });
      pending.delete(key);
      subject.next(data);
      subject.complete();
    },
    error: (error) => {
      pending.delete(key);
      subject.error(error);
    }
  });

  return subject.asObservable();
}
