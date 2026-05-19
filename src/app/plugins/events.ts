// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { addWatch, removeWatch } from '../../main/store';
// import { lookupShape, lookupFile, lookupPage } from '../../main/data/helpers';
// import { fileProxy } from './file';
// import { pageProxy } from './page';
// import { shapeProxy } from './shape';
// import { parseId } from './parser';
// import { getSystemTheme } from '../../util/theme';
// import { debounce } from '../../util/functions';

/**
 * Plugin event types
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
 * Event callback result
 */
type EventResult = unknown | 'not-changed' | void;

/**
 * Listener key returned from addListener
 */
export interface ListenerKey {
  readonly type: string;
  readonly pluginId: string;
  readonly key: symbol;
}

/**
 * Handle state change for finish event
 */
function handleFinishChange(
  pluginId: string,
  oldVal: unknown,
  newVal: unknown
): EventResult {
  const oldFileId = (oldVal as { currentFileId?: string })?.currentFileId;
  const newFileId = (newVal as { currentFileId?: string })?.currentFileId;

  if (oldFileId && !newFileId) {
    return oldFileId;
  }

  return 'not-changed';
}

/**
 * Handle state change for filechange event
 */
function handleFileChange(
  pluginId: string,
  oldVal: unknown,
  newVal: unknown
): EventResult {
  const oldFileId = (oldVal as { currentFileId?: string })?.currentFileId;
  const newFileId = (newVal as { currentFileId?: string })?.currentFileId;

  if (oldFileId === newFileId) {
    return 'not-changed';
  }

  return fileProxy(pluginId, newFileId);
}

/**
 * Handle state change for pagechange event
 */
function handlePageChange(
  pluginId: string,
  oldVal: unknown,
  newVal: unknown
): EventResult {
  const oldPageId = (oldVal as { currentPageId?: string })?.currentPageId;
  const newPageId = (newVal as { currentPageId?: string })?.currentPageId;

  if (oldPageId === newPageId) {
    return 'not-changed';
  }

  const currentFileId = (newVal as { currentFileId?: string })?.currentFileId;

  return pageProxy(pluginId, currentFileId, newPageId);
}

/**
 * Handle state change for selectionchange event
 */
function handleSelectionChange(
  pluginId: string,
  oldVal: unknown,
  newVal: unknown
): EventResult {
  const oldSelection = (oldVal as { workspaceLocal?: { selected?: string[] } })?.workspaceLocal?.selected;
  const newSelection = (newVal as { workspaceLocal?: { selected?: string[] } })?.workspaceLocal?.selected;

  if (JSON.stringify(oldSelection) === JSON.stringify(newSelection)) {
    return 'not-changed';
  }

  return newSelection.map(String);
}

/**
 * Get theme from state
 */
function getTheme(state: { profile?: { theme?: string } }): string {
  const theme = state?.profile?.theme;

  if (!theme || theme === 'system') {
    return getSystemTheme();
  }

  if (theme === 'default') {
    return 'dark';
  }

  return theme;
}

/**
 * Handle state change for themechange event
 */
function handleThemeChange(
  pluginId: string,
  oldVal: unknown,
  newVal: unknown
): EventResult {
  const oldTheme = getTheme(oldVal as { profile?: any } | undefined);
  const newTheme = getTheme(newVal as { profile?: any } | undefined);

  if (oldTheme === newTheme) {
    return 'not-changed';
  }

  if (newTheme === 'default') {
    return 'dark';
  }

  return newTheme;
}

/**
 * Handle state change for shapechange event
 */
function handleShapeChange(
  pluginId: string,
  oldVal: unknown,
  newVal: unknown,
  props: { shapeId?: string }
): EventResult {
  const shapeId = props.shapeId ? parseId(props.shapeId) : undefined;

  if (!shapeId) {
    return 'not-changed';
  }

  const currentFileId = (newVal as { currentFileId?: string })?.currentFileId;
  const currentPageId = (newVal as { currentPageId?: string })?.currentPageId;

  const oldShape = lookupShapeInternal(oldVal as any, shapeId);
  const newShape = lookupShapeInternal(newVal as any, shapeId);

  if (oldShape === newShape) {
    return 'not-changed';
  }

  if (!pluginId || !currentFileId || !currentPageId || !shapeId) {
    return 'not-changed';
  }

  return shapeProxy(pluginId, currentFileId, currentPageId, shapeId);
}

/**
 * Handle state change for contentsave event
 */
function handleContentSave(
  pluginId: string,
  oldVal: unknown,
  newVal: unknown
): EventResult {
  const oldStatus = (oldVal as { persistence?: { status?: string } })?.persistence?.status;
  const newStatus = (newVal as { persistence?: { status?: string } })?.persistence?.status;

  if (newStatus === 'saved' && newStatus !== oldStatus) {
    return; // Changed but void
  }

  return 'not-changed';
}

/**
 * Default handler for unknown event types
 */
function handleDefaultChange(): 'not-changed' {
  return 'not-changed';
}

/**
 * Add an event listener
 *
 * @param type - Event type to listen to
 * @param pluginId - Plugin ID
 * @param callback - Callback function to call when event occurs
 * @param props - Additional props for the event
 * @returns Listener key that can be used to remove the listener
 */
export function addListener(
  type: PluginEventType,
  pluginId: string,
  callback: (value: EventResult) => void,
  props?: Record<string, unknown>
): ListenerKey {
  const key = Symbol(type);

  // Debounce callback to avoid too many calls
  const debouncedCallback = debounce((value: EventResult) => {
    try {
      if (value === 'not-changed') {
        return;
      }
      callback(value);
    } catch (cause) {
      console.error('[PENPOT PLUGIN] Event handler error:', cause);
    }
  }, 10);

  // Add watch to state
  // TODO: addWatch(state, key, (keyPath, oldVal, newVal) => {
  //   const result = handleStateChange(type, pluginId, oldVal, newVal, props);
  //   if (result !== 'not-changed') {
  //     debouncedCallback(result);
  //   }
  // });

  return {
    type,
    pluginId,
    key
  };
}

/**
 * Remove an event listener
 *
 * @param key - Listener key returned from addListener
 */
export function removeListener(key: ListenerKey): void {
  // TODO: removeWatch(state, key);
}

/**
 * Handle state changes based on event type
 */
function handleStateChange(
  type: PluginEventType,
  pluginId: string,
  oldVal: unknown,
  newVal: unknown,
  props?: Record<string, unknown>
): EventResult {
  switch (type) {
    case 'finish':
      return handleFinishChange(pluginId, oldVal, newVal);

    case 'filechange':
      return handleFileChange(pluginId, oldVal, newVal);

    case 'pagechange':
      return handlePageChange(pluginId, oldVal, newVal);

    case 'selectionchange':
      return handleSelectionChange(pluginId, oldVal, newVal);

    case 'themechange':
      return handleThemeChange(pluginId, oldVal, newVal);

    case 'shapechange':
      return handleShapeChange(pluginId, oldVal, newVal, props ?? {});

    case 'contentsave':
      return handleContentSave(pluginId, oldVal, newVal);

    default:
      return handleDefaultChange();
  }
}

// Helper functions (to be replaced with actual implementations)

function lookupShapeInternal(state: unknown, id: string): unknown {
  // TODO: return lookupShape(state, id);
  return undefined;
}

function fileProxy(pluginId: string, fileId: string): unknown {
  // TODO: return fileProxy(pluginId, fileId);
  return undefined;
}

function pageProxy(pluginId: string, fileId: string, pageId: string): unknown {
  // TODO: return pageProxy(pluginId, fileId, pageId);
  return undefined;
}

function shapeProxy(pluginId: string, fileId: string, pageId: string, shapeId: string): unknown {
  // TODO: return shapeProxy(pluginId, fileId, pageId, shapeId);
  return undefined;
}
