// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as dcm from '@app/main/data/common';
import * as ds from '@app/main/data/shortcuts';
import * as dv from '@app/main/data/viewer';
import * as st from '@app/main/store';

interface Shortcut {
  tooltip: string;
  command: string | string[];
  subsections: string[];
  fn: () => void;
}

export const shortcuts: Record<string, Shortcut> = {
  'increase-zoom': {
    tooltip: '+',
    command: '+',
    subsections: ['zoom-viewer'],
    fn: () => st.emit(dv.increaseZoom)
  },

  'decrease-zoom': {
    tooltip: '-',
    command: '-',
    subsections: ['zoom-viewer'],
    fn: () => st.emit(dv.decreaseZoom)
  },

  'select-all': {
    tooltip: ds.meta('A'),
    command: ds.cMod('a'),
    subsections: ['general-viewer'],
    fn: () => st.emit(dv.selectAll())
  },

  'reset-zoom': {
    tooltip: ds.shift('0'),
    command: 'shift+0',
    subsections: ['zoom-viewer'],
    fn: () => st.emit(dv.resetZoom)
  },

  'toggle-zoom-style': {
    tooltip: 'F',
    command: 'f',
    subsections: ['zoom-viewer'],
    fn: () => st.emit(dv.toggleZoomStyle)
  },

  'toggle-fullscreen': {
    tooltip: ds.shift('F'),
    command: ['shift+f', 'alt+enter'],
    subsections: ['zoom-viewer'],
    fn: () => st.emit(dv.toggleFullscreen)
  },

  'prev-frame': {
    tooltip: ds.leftArrow,
    command: ['left', 'up', 'shift+enter', 'pageup', 'shift+space'],
    subsections: ['general-viewer'],
    fn: () => st.emit(dv.selectPrevFrame)
  },

  'next-frame': {
    tooltip: ds.rightArrow,
    command: ['right', 'down', 'enter', 'pagedown', 'space'],
    subsections: ['general-viewer'],
    fn: () => st.emit(dv.selectNextFrame)
  },

  'open-inspect': {
    tooltip: 'G I',
    command: 'g i',
    subsections: ['navigation-viewer'],
    fn: () => st.emit(dv.goToSection('inspect'))
  },

  'open-comments': {
    tooltip: 'G C',
    command: 'g c',
    subsections: ['navigation-viewer'],
    fn: () => st.emit(dv.goToSection('comments'))
  },

  'open-interactions': {
    tooltip: 'G V',
    command: 'g v',
    subsections: ['navigation-viewer'],
    fn: () => st.emit(dv.goToSection('interactions'))
  },

  'open-workspace': {
    tooltip: 'G W',
    command: 'g w',
    subsections: ['navigation-viewer'],
    fn: () => st.emit(dcm.goToWorkspace())
  }
};

export function getTooltip(shortcut: string): string {
  console.assert(shortcuts[shortcut] !== undefined, shortcut);
  return shortcuts[shortcut]?.tooltip ?? '';
}
