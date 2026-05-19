// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { getState } from '../../main/store';
// import { displayNotValid } from './utils';

/**
 * Plugin flags interface
 */
export interface PluginFlags {
  naturalChildOrdering?: boolean;
}

/**
 * Get natural child ordering flag for a plugin
 */
export function naturalChildOrdering(pluginId: string): boolean {
  // TODO: Get from state
  // const state = getState();
  // const flags = state.plugins?.flags?.[pluginId];
  // return flags?.naturalChildOrdering === true;
  return false;
}

/**
 * Set flag event type
 */
export interface SetFlagEvent {
  type: 'set-flag';
  pluginId: string;
  key: keyof PluginFlags;
  value: unknown;
}

/**
 * Clear plugin flags event type
 */
export interface ClearFlagsEvent {
  type: 'clear-flags';
  pluginId: string;
}

/**
 * Create a set flag event
 */
export function setFlag(pluginId: string, key: keyof PluginFlags, value: unknown): SetFlagEvent {
  return {
    type: 'set-flag',
    pluginId,
    key,
    value
  };
}

/**
 * Create a clear flags event
 */
export function clearFlags(pluginId: string): ClearFlagsEvent {
  return {
    type: 'clear-flags',
    pluginId
  };
}

/**
 * Flags proxy interface
 */
export interface FlagsProxy {
  pluginId: string;

  naturalChildOrdering: boolean;
  setNaturalChildOrdering(value: boolean): void;
}

/**
 * Create a flags proxy for a plugin
 */
export function flagsProxy(pluginId: string): FlagsProxy {
  const self = {} as FlagsProxy;

  self.pluginId = pluginId;

  // Natural child ordering property
  Object.defineProperty(self, 'naturalChildOrdering', {
    get(): boolean {
      return naturalChildOrdering(pluginId);
    },
    set(value: boolean): void {
      if (typeof value !== 'boolean') {
        // displayNotValid('naturalChildOrdering', value);
        console.error('[PENPOT PLUGIN] naturalChildOrdering must be a boolean');
        return;
      }

      // TODO: Emit set flag event
      // emit(setFlag(pluginId, 'naturalChildOrdering', value));
    },
    enumerable: true,
    configurable: true
  });

  // Method to set natural child ordering
  self.setNaturalChildOrdering = function(value: boolean): void {
    if (typeof value !== 'boolean') {
      // displayNotValid('naturalChildOrdering', value);
      console.error('[PENPOT PLUGIN] naturalChildOrdering must be a boolean');
      return;
    }

    // TODO: Emit set flag event
    // emit(setFlag(pluginId, 'naturalChildOrdering', value));
  };

  return self;
}

/**
 * Check if value is a FlagsProxy
 */
export function isFlagsProxy(p: unknown): p is FlagsProxy {
  if (typeof p !== 'object' || p === null) {
    return false;
  }

  const proxy = p as Record<string, unknown>;

  return (
    typeof proxy.pluginId === 'string' &&
    typeof proxy.setNaturalChildOrdering === 'function' &&
    Object.hasOwn(proxy, 'naturalChildOrdering')
  );
}
