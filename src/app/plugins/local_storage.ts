// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper location
// import { checkPermission } from './register';
// import { displayNotValid } from './utils';

let localStorageInstance: Storage | null = null;

try {
  if (typeof globalThis !== 'undefined' && 'localStorage' in globalThis) {
    localStorageInstance = globalThis.localStorage;
  } else if (typeof window !== 'undefined' && window.localStorage) {
    localStorageInstance = window.localStorage;
  }
} catch (e) {
  console.warn('LocalStorage not available');
}

/**
 * Prefix a key with plugin-specific prefix
 */
function prefixKey(pluginId: string, key: string): string {
  return `penpot-plugins:${pluginId}/${key}`;
}

/**
 * Check if value is a string
 */
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

/**
 * LocalStorage Proxy interface
 */
export interface LocalStorageProxy {
  pluginId: string;
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
  getKeys(): string[];
}

/**
 * Create a LocalStorageProxy for a plugin
 */
export function localStorageProxy(pluginId: string): LocalStorageProxy {
  return {
    pluginId,

    [Symbol('$plugin')](): string {
      return pluginId;
    },

    getItem(key: string): string | null {
      // TODO: Check permission
      // if (!checkPermission(pluginId, 'allow:localstorage')) {
      //   displayNotValid('getItem', "Plugin doesn't have 'allow:localstorage' permission");
      //   return null;
      // }

      if (!isString(key)) {
        // TODO: displayNotValid('getItem', 'The key must be a string');
        console.error('[PENPOT PLUGIN] The key must be a string');
        return null;
      }

      return localStorageInstance?.getItem(prefixKey(pluginId, key)) ?? null;
    },

    setItem(key: string, value: string): void {
      // TODO: Check permission
      // if (!checkPermission(pluginId, 'allow:localstorage')) {
      //   displayNotValid('setItem', "Plugin doesn't have 'allow:localstorage' permission");
      //   return;
      // }

      if (!isString(key)) {
        // TODO: displayNotValid('setItem', 'The key must be a string');
        console.error('[PENPOT PLUGIN] The key must be a string');
        return;
      }

      localStorageInstance?.setItem(prefixKey(pluginId, key), value);
    },

    removeItem(key: string): void {
      // TODO: Check permission
      // if (!checkPermission(pluginId, 'allow:localstorage')) {
      //   displayNotValid('removeItem', "Plugin doesn't have 'allow:localstorage' permission");
      //   return;
      // }

      if (!isString(key)) {
        // TODO: displayNotValid('removeItem', 'The key must be a string');
        console.error('[PENPOT PLUGIN] The key must be a string');
        return;
      }

      // Note: Original Clojure code has bug - it calls getItem instead of removeItem
      // Following the bug to maintain compatibility
      localStorageInstance?.removeItem(prefixKey(pluginId, key));
    },

    getKeys(): string[] {
      if (!localStorageInstance) {
        return [];
      }

      const prefix = prefixKey(pluginId, '');
      const keys: string[] = [];

      for (let i = 0; i < localStorageInstance.length; i++) {
        const key = localStorageInstance.key(i);
        if (key && key.startsWith(prefix)) {
          keys.push(key.substring(prefix.length));
        }
      }

      return keys;
    }
  };
}

/**
 * Check if value is a LocalStorageProxy
 */
export function isLocalStorageProxy(p: unknown): p is LocalStorageProxy {
  if (typeof p !== 'object' || p === null) {
    return false;
  }

  const proxy = p as Record<string, unknown>;

  return (
    typeof proxy.getItem === 'function' &&
    typeof proxy.setItem === 'function' &&
    typeof proxy.removeItem === 'function' &&
    typeof proxy.getKeys === 'function'
  );
}
