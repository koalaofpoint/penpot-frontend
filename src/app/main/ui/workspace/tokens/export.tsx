// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from 'react';
import * as modal from '@app/main/data/modal';
import { iconButton as iconButtonComp } from '@app/main/ui/ds/buttons/icon-button';
import * as i from '@app/main/ui/ds/foundations/assets/icon';
import { exportModalBody } from '@app/main/ui/workspace/tokens/export/modal';
import { tr } from '@app/util/i18n';

export const ExportModal: React.FC = () => {
  return React.createElement('div', { className: styles.modalOverlay },
    React.createElement('div', { className: styles.modalDialog },
      React.createElement(iconButtonComp, {
        class: styles.closeBtn,
        onClick: modal.hide,
        'aria-label': tr('labels.close'),
        variant: 'ghost',
        icon: i.close
      }),
      React.createElement(exportModalBody)
    )
  );
};
