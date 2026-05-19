// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper location
// import { event } from '../../main/data/event';
// import { getState } from '../../main/store';

/**
 * Plugin event type
 */
export type PluginEventType =
  | 'finish'
  | 'filechange'
  | 'pagechange'
  | 'selectionchange'
  | 'shapechange'
  | 'contentsave'
  | 'themechange';

/**
 * Event data interface
 */
export interface PluginEventData {
  type: PluginEventType;
  [key: string]: any;
  oldValue?: unknown;
  newValue?: unknown;
  props?: Record<string, unknown>;
}

/**
 * Create event from plugin system
 */
export function pluginEvent(
  pluginId: string,
  name: string,
  props?: Record<string, unknown>
): PluginEventData {
  // TODO: Get plugin data from store
  // const pluginData = getIn(state, ['profile', 'props', 'plugins', 'data', pluginId]);
  const name = pluginData?.name;

  return {
    type: name,
    ...props,
    [Symbol('origin')]: 'plugin',
    [Symbol('context')]: {
      [Symbol('plugin-name')]: name,
      [Symbol('plugin-url')]: pluginData?.url
    }
  };
}
