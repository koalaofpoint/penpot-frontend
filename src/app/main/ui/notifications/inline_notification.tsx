// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from 'react';
import * as d from '@app/common/data';
import * as dm from '@app/common/data/macros';
import { linkButton } from '@app/main/ui/components/link-button';
import { actionable as actionableComp } from '@app/main/ui/ds/notifications/actionable';

interface InlineNotificationProps {
  content?: React.ReactNode;
  accept?: { label?: string; callback?: () => void };
  cancel?: { label?: string; callback?: () => void };
  links?: Array<{ label?: string; callback?: () => void }>;
}

export const InlineNotification: React.FC<InlineNotificationProps> = ({
  content,
  accept,
  cancel,
  links
}) => {
  return React.createElement(actionableComp, {
    class: styles.newInline,
    cancelLabel: cancel?.label,
    onCancel: cancel?.callback,
    acceptLabel: accept?.label,
    onAccept: accept?.callback
  },
    content,
    links && (
      <nav className={styles.linkNav}>
        {d.enumerate(links).map(([index, link]) => (
          linkButton({
            key: dm.str('link-', index),
            class: styles.link,
            onClick: link.callback,
            value: link.label
          })
        ))}
      </nav>
    )
  );
};
