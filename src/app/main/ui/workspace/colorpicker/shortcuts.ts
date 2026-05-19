// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as ds from 'app/main/data/shortcuts';
import * as dwc from 'app/main/data/workspace/colors';
import * as wsc from 'app/main/data/workspace/shortcuts';
import { emit } from 'app/main/store';

//////////////////////////////////////////////////////////////////////////////
// Shortcuts
//////////////////////////////////////////////////////////////////////////////

// Shortcuts format https://github.com/ccampbell/mousetrap

export const shortcuts = {
  ...wsc.shortcuts,

  delete_stop: {
    tooltip: ds.supr(),
    command: ["del", "backspace"],
    subsections: ["edit" as const],
    overwrite: true,
    fn: () => emit(dwc.removeGradientStop()),
  },
};
