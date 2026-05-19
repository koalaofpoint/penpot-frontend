// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useEffect, useCallback } from 'react';
import * as modal from '@app/main/data/modal';
import * as dw from '@app/main/data/workspace';
import * as refs from '@app/main/refs';
import * as st from '@app/main/store';
import { numericInput as numericInputComp } from '@app/main/ui/components/numeric-input';
import * as deprecatedIcon from '@app/main/ui/icons';
import * as dom from '@app/util/dom';
import { tr } from '@app/util/i18n';
import * as k from '@app/util/keyboard';
import * as events from 'goog:events';

function onKeydown(event: KeyboardEvent): void {
  if (k.enter(event)) {
    dom.preventDefault(event);
    dom.stopPropagation(event);
    modal.hide();
  }
}

export const NudgeModal: React.FC = () => {
  const profile = (refs.profile as any)?.deref?.() || refs.profile;
  const nudge = profile?.props?.nudge || { big: 10, small: 1 };
  const updateBig = useCallback((value: number) => st.emit(dw.updateNudge({ big: value })), []);
  const updateSmall = useCallback((value: number) => st.emit(dw.updateNudge({ small: value })), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => onKeydown(e);
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{tr('modals.nudge-title')}</h2>
          <button
            className={styles.modalCloseBtn}
            onClick={modal.hide}
          >
            {deprecatedIcon.close}
          </button>
        </div>
        <div className={styles.modalContent}>
          <div className={styles.inputWrapper}>
            <label className={styles.modalMsg} htmlFor="nudge-small">
              {tr('modals.small-nudge')}
            </label>
            <numericInputComp
              min={0.01}
              id="nudge-small"
              value={nudge.small}
              onChange={updateSmall}
            />
          </div>
          <div className={styles.inputWrapper}>
            <label className={styles.modalMsg} htmlFor="nudge-big">
              {tr('modals.big-nudge')}
            </label>
            <numericInputComp
              min={0.01}
              id="nudge-big"
              value={nudge.big}
              onChange={updateBig}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
