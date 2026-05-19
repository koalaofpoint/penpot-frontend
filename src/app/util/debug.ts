// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { okulary } from 'okulary';

// TODO: Import from proper location
// import { store } from '../../main/store';

/**
 * Debug options type
 */
export type DebugOption =
  | 'bounding-boxes'
  | 'group'
  | 'events'
  | 'handlers'
  | 'selection-center'
  | 'simple-selection'
  | 'thumbnails'
  | 'show-export-metadata'
  | 'text-outline'
  | 'disable-thumbnail-cache'
  | 'disable-frame-thumbnails'
  | 'force-frame-thumbnails'
  | 'layout-drop-zones'
  | 'layout-lines'
  | 'layout-content-bounds'
  | 'pixel-grid'
  | 'parent-bounds'
  | 'html-text'
  | 'history-overlay'
  | 'shape-titles'
  | 'show-touched'
  | 'show-ids'
  | 'grid-layout'
  | 'grid-cells'
  | 'shape-panel'
  | 'display-touched'
  | 'bool-shapes'
  | 'gl-context'
  | 'wasm-viewbox'
  | 'wasm-gl-context-init-error'
  | 'events-times';

/**
 * Set of enabled debug options
 */
const state = okulary.atom(new Set<DebugOption>());

/**
 * All available debug options with descriptions
 */
export const DEBUG_OPTIONS: DebugOption[] = [
  'bounding-boxes',        // Displays the bounding box for the shapes
  'group',                // Displays an overlay over the groups
  'events',               // Displays in the console log the events through the application
  'handlers',             // Display the boxes that represent the rotation and resize handlers
  'selection-center',      // Displays the center of a selection
  'simple-selection',      // When active the single selection will not take into account previous transformations
  'thumbnails',           // When active the thumbnails will be displayed with a sepia filter
  'show-export-metadata',  // When active we can check in the browser the export values
  'text-outline',         // Show text fragments outlines
  'disable-thumbnail-cache', // Disable thumbnail cache
  'disable-frame-thumbnails', // Disable frame thumbnails
  'force-frame-thumbnails', // Force thumbnails always (independent of selection or zoom level)
  'layout-drop-zones',    // Enable a widget to show the auto-layout drop-zones
  'layout-lines',         // Display the layout lines
  'layout-content-bounds', // Display the bounds for the hug content adjust
  'pixel-grid',          // Makes the pixel grid red so its more visible
  'parent-bounds',       // Show the bounds relative to the parent
  'html-text',          // Show html text
  'history-overlay',     // Show history overlay
  'shape-titles',       // Show shape name and id
  'show-touched',       // Show an asterisk for touched copies
  'show-ids',          // Show the id with the name
  'grid-layout',        // Show grid layout
  'grid-cells',        // Show an overlay to the grid cells to know its properties
  'shape-panel',       // Show info about shapes
  'display-touched',    // Show what is touched in copies
  'bool-shapes',       // Show some visual indicators for bool shape
  'gl-context',        // Show some information about the WebGL context
  'wasm-viewbox',     // Show viewbox
  'wasm-gl-context-init-error', // Makes the GL context to fail on initialization
  'events-times'       // Event times
];

/**
 * Handle change event
 */
function handleChange(): void {
  // TODO: Update store debug events
  // store.debugEvents = state.has('events');
  // store.debugEventsTime = state.has('events-times');
}

// Initialize watchers if in debug mode
if (__DEV__) {
  handleChange();
  state.addWatch('watcher', handleChange);
}

/**
 * Enable a debug option
 */
export function enable!(option: DebugOption): void {
  state.swap(current => {
    const newState = new Set(current);
    newState.add(option);
    return newState;
  });
}

/**
 * Disable a debug option
 */
export function disable!(option: DebugOption): void {
  state.swap(current => {
    const newState = new Set(current);
    newState.delete(option);
    return newState;
  });
}

/**
 * Check if a debug option is enabled
 */
export function enabled?(option: DebugOption): boolean {
  return state.deref().has(option);
}

/**
 * Toggle a debug option
 */
export function toggle!(option: DebugOption): void {
  if (enabled?(option)) {
    disable!(option);
  } else {
    enable!(option);
  }
}

/**
 * Get current debug state
 */
export function getState(): Set<DebugOption> {
  return state.deref();
}
