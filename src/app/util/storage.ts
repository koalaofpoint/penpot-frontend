// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { debounce } from 'lodash-es';

/**
 * Using ex/ignoring because can receive a DOMException when
 * importing code as a library: Failed to read the 'localStorage'
 * property from 'Window': Storage is disabled inside 'data:' URLs.
 */
const localStorage_ = (() => {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
})();

const sessionStorage_ = (() => {
  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
})();

/**
 * Dynamic variable which determines the mode of operation of
 * storage mutation actions. By default is asynchronous.
 */
let sync = false;

/**
 * Set sync mode for storage operations
 */
export function setSyncMode(value: boolean): void {
  sync = value;
}

/**
 * Get current sync mode
 */
export function getSyncMode(): boolean {
  return sync;
}

/**
 * Encode a keyword key with prefix
 */
function encodeKey(prefix: string, k: string): string {
  if (!k.includes('/')) {
    return `${prefix}:${k}`;
  }
  const parts = k.split('/');
  return `${prefix}:${parts[0]}/${parts.slice(1).join('/')}`;
}

/**
 * Decode a key with prefix
 */
function decodeKey(prefix: string, k: string): string | null {
  if (!k.startsWith(prefix)) {
    return null;
  }
  const start = prefix.length + 1;
  const rest = k.substring(start);
  if (rest.startsWith('/')) {
    return rest.substring(1);
  }
  return rest;
}

/**
 * Lookup storage item by index
 */
function lookupByIndex(backend: Storage | null, prefix: string, result: Record<string, unknown>, index: number): Record<string, unknown> {
  try {
    if (!backend) {
      return result;
    }

    const key = backend.key(index);
    if (!key) {
      return result;
    }

    const decodedKey = decodeKey(prefix, key);
    if (!decodedKey) {
      return result;
    }

    const value = backend.getItem(key);
    if (value) {
      // TODO: Implement transit decoding
      // result[decodedKey] = decodeStr(value);
      result[decodedKey] = JSON.parse(value);
    }

    return result;
  } catch {
    return result;
  }
}

/**
 * Load all data from storage backend
 */
function loadData(backend: Storage | null, prefix: string): Record<string, unknown> {
  if (!backend) {
    return {};
  }

  const length = backend.length;
  const result: Record<string, unknown> = {};

  for (let index = 0; index < length; index++) {
    lookupByIndex(backend, prefix, result, index);
  }

  return result;
}

/**
 * Set item in storage
 */
function setItem(backend: Storage | null, key: string, val: string): void {
  if (backend && typeof key === 'string') {
    backend.setItem(key, val);
  }
}

/**
 * Get item from storage
 */
function getItem(backend: Storage | null, key: string): string | null {
  if (!backend) {
    return null;
  }
  return backend.getItem(key);
}

/**
 * Watch callback type
 */
export type WatchCallback = (key: string, ref: StorageRef, oldval: unknown, newval: unknown) => void;

/**
 * Storage reference interface
 */
export interface StorageRef extends Map<string, unknown> {
  readonly size: number;
  get(key: string): unknown | undefined;
  set(key: string, value: unknown): this;
  has(key: string): boolean;
  delete(key: string): boolean;
  clear(): void;
  keys(): string[];
  values(): unknown[];
  entries(): [string, unknown][];
  forEach(callback: (value: unknown, key: string, map: Map<string, unknown>) => void): void;
  reset(value: Record<string, unknown>): void;
  swap(fn: (state: Record<string, unknown>) => Record<string, unknown>): void;
  addWatch(key: string, callback: WatchCallback): void;
  removeWatch(key: string): void;
}

/**
 * Create a storage reference
 */
export function createStorage(backend: Storage | null, prefix: string): StorageRef {
  const initial = loadData(backend, prefix);
  let currentData: Record<string, unknown> = { ...initial };
  let lastData: Record<string, unknown> = { ...initial };
  const watches = new Map<string, WatchCallback>();

  const updateKey = (key: string, value: unknown): void => {
    if (backend) {
      if (value !== undefined && value !== null) {
        // TODO: Implement transit encoding
        // setItem(backend, encodeKey(prefix, key), encodeStr(value));
        setItem(backend, encodeKey(prefix, key), JSON.stringify(value));
      } else {
        backend.removeItem(encodeKey(prefix, key));
      }
    }
  };

  const onChangeImpl = (currState: Record<string, unknown>): void => {
    const prevState = lastData;
    try {
      const allKeys = new Set([...Object.keys(currState), ...Object.keys(prevState)]);

      allKeys.forEach(key => {
        const prevVal = prevState[key];
        const currVal = currState[key];
        if (currVal !== prevVal) {
          updateKey(key, currVal);
        }
      });
    } finally {
      lastData = { ...currState };
    }
  };

  const onChange = debounce(onChangeImpl, 2000);

  const notifyWatches = (oldval: unknown, newval: unknown): void => {
    watches.forEach((callback, key) => {
      callback(key, ref, oldval, newval);
    });
  };

  const ref: StorageRef = new Proxy(new Map(), {
    get(target, prop) {
      // Handle special methods
      if (prop === 'size') {
        return Object.keys(currentData).length;
      }
      if (prop === 'get') {
        return (key: string) => currentData[key];
      }
      if (prop === 'set') {
        return (key: string, value: unknown) => {
          const oldval = currentData[key];
          currentData[key] = value;
          if (sync) {
            onChangeImpl(currentData);
          } else {
            onChange(currentData);
          }
          if (watches.size > 0) {
            notifyWatches(oldval, value);
          }
        };
      }
      if (prop === 'has') {
        return (key: string) => key in currentData;
      }
      if (prop === 'delete') {
        return (key: string) => {
          const oldval = currentData[key];
          delete currentData[key];
          if (sync) {
            onChangeImpl(currentData);
          } else {
            onChange(currentData);
          }
          if (watches.size > 0) {
            notifyWatches(oldval, undefined);
          }
        };
      }
      if (prop === 'clear') {
        return () => {
          const oldval = { ...currentData };
          currentData = {};
          if (sync) {
            onChangeImpl(currentData);
          } else {
            onChange(currentData);
          }
          if (watches.size > 0) {
            notifyWatches(oldval, currentData);
          }
        };
      }
      if (prop === 'keys') {
        return () => Object.keys(currentData);
      }
      if (prop === 'values') {
        return () => Object.values(currentData);
      }
      if (prop === 'entries') {
        return () => Object.entries(currentData);
      }
      if (prop === 'forEach') {
        return (callback: (value: unknown, key: string, map: Map<string, unknown>) => void) => {
          Object.entries(currentData).forEach(([key, value]) => {
            callback(value, key, target);
          });
        };
      }
      if (prop === 'reset') {
        return (value: Record<string, unknown>) => {
          const oldval = currentData;
          currentData = value;
          if (sync) {
            onChangeImpl(currentData);
          } else {
            onChange(currentData);
          }
          if (watches.size > 0) {
            notifyWatches(oldval, value);
          }
        };
      }
      if (prop === 'swap') {
        return (fn: (state: Record<string, unknown>) => Record<string, unknown>) => {
          const oldval = currentData;
          currentData = fn(currentData);
          if (sync) {
            onChangeImpl(currentData);
          } else {
            onChange(currentData);
          }
          if (watches.size > 0) {
            notifyWatches(oldval, currentData);
          }
        };
      }
      if (prop === 'addWatch') {
        return (key: string, callback: WatchCallback) => {
          watches.set(key, callback);
        };
      }
      if (prop === 'removeWatch') {
        return (key: string) => {
          watches.delete(key);
        };
      }

      // Default Map behavior
      const value = (target as any)[prop];
      return typeof value === 'function' ? value.bind(target) : value;
    }
  });

  return ref;
}

/**
 * Global storage instance
 */
export const global = createStorage(localStorage_, 'penpot-global');

/**
 * User storage instance
 */
export const user = createStorage(localStorage_, 'penpot-user');

/**
 * Main storage instance
 */
export const storage = createStorage(localStorage_, 'penpot');

/**
 * Session storage instance
 */
export const session = createStorage(sessionStorage_, 'penpot');

// Set up before unload handler to flush pending changes
const onBeforeUnload = (): void => {
  const prevSync = sync;
  sync = true;
  // TODO: Import from proper location
  // global.reset({ ...global.get(), lastRefresh: now() });
  // user.reset({ ...user.get(), lastRefresh: now() });
  sync = prevSync;
};

window.addEventListener('beforeunload', onBeforeUnload);
