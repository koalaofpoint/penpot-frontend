// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as dcm from '@app/main/data/common';
import * as dd from '@app/main/data/dashboard';
import * as ev from '@app/main/data/event';
import * as du from '@app/main/data/profile';
import * as ds from '@app/main/data/shortcuts';
import * as st from '@app/main/store';

interface Shortcut {
  tooltip: string;
  command: string | string[];
  subsections: string[];
  fn: () => void;
}

// Shortcuts definitions
export const shortcuts: Record<string, Shortcut> = {
  'toggle-theme': {
    tooltip: ds.alt('M'),
    command: ds.aMod('m'),
    subsections: ['general-dashboard'],
    fn: () => st.emit(Object.assign(du.toggleTheme, { [ev.ORIGIN]: 'dashboard:shortcuts' }))
  }
};

export const shortcutsSidebarNavigation: Record<string, Shortcut> = {
  'go-to-drafts': {
    tooltip: 'G D',
    command: 'g d',
    subsections: ['navigation-dashboard'],
    fn: () => st.emit(dcm.goToDashboardFiles(':project-id', ':default'))
  },

  'go-to-libs': {
    tooltip: 'G L',
    command: 'g l',
    subsections: ['navigation-dashboard'],
    fn: () => st.emit(dcm.goToDashboardLibraries())
  }
};

export const shortcutSearch: Record<string, Shortcut> = {
  'go-to-search': {
    tooltip: ds.meta('F'),
    command: ds.cMod('f'),
    subsections: ['navigation-dashboard'],
    fn: () => st.emit(dcm.goToDashboardSearch())
  }
};

export const shortcutCreateNewProject: Record<string, Shortcut> = {
  'create-new-project': {
    tooltip: '+',
    command: '+',
    subsections: ['general-dashboard'],
    fn: () => st.emit(dd.createElement())
  }
};

// Shortcuts combinations for files, drafts, libraries and fonts sections
export const shortcutsDashboard = {
  ...shortcuts,
  ...shortcutsSidebarNavigation
};

export const shortcutsProjects = {
  ...shortcuts,
  ...shortcutsSidebarNavigation,
  ...shortcutSearch,
  ...shortcutCreateNewProject
};

export const shortcutsDraftsLibraries = {
  ...shortcuts,
  ...shortcutsSidebarNavigation,
  ...shortcutSearch
};

export function getTooltip(shortcut: string): string {
  console.assert(shortcuts[shortcut] !== undefined, shortcut);
  return shortcuts[shortcut]?.tooltip ?? '';
}
