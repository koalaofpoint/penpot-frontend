// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from 'react';
import { PropertiesRow } from 'app/main/ui/inspect/styles/rows/properties-row';
import { tr } from 'app/util/i18n';
import { join } from 'cuerdas/core';

interface TokensPanelProps {
  themePaths?: string[];
  setNames?: string[];
}

export function TokensPanel({ themePaths, setNames }: TokensPanelProps) {
  return (
    <div className="tokens-panel">
      {themePaths && themePaths.length > 0 && (
        <PropertiesRow
          className="token-theme"
          term={tr('inspect.tabs.styles.active-themes')}
          detail={join(', ', themePaths)}
        />
      )}
      {setNames && setNames.length > 0 && (
        <PropertiesRow
          className="token-sets"
          term={tr('inspect.tabs.styles.active-sets')}
          detail={join(', ', setNames)}
        />
      )}
    </div>
  );
}
