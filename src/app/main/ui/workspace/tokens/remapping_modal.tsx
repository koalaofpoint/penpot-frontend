// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as modal from '@store/modal'
import * as store from '@store/store'
import { button as button* } from '@ui/ds/buttons/button'
import { iconButton as icon-button* } from '@ui/ds/buttons/icon-button'
import * as i from '@ui/ds/foundations/assets/icon'
import * as t from '@ui/ds/foundations/typography'
import { heading as heading* } from '@ui/ds/foundations/typography/heading'
import { text as text* } from '@ui/ds/foundations/typography/text'
import { tr } from '@util/i18n'
import * as kbd from '@util/keyboard'
import React, { useCallback } from 'react'

function hideRemappingModal() {
  store.default.emit(modal.hide)
}

interface TokenRemappingModalProps {
  oldTokenName?: string
  newTokenName?: string
  onRemap?: () => void
  onRename?: () => void
}

export const TokenRemappingModal: React.FC<TokenRemappingModalProps> = ({
  oldTokenName,
  newTokenName,
  onRemap,
  onRename,
}) => {
  const remapModal = store.default.state.get('remapModal')

  const confirmRemap = useCallback(() => {
    const oldTokenName = remapModal?.oldTokenName
    const newTokenName = remapModal?.newTokenName
    store.default.emit(['tokens/remap-tokens', oldTokenName, newTokenName])
    if (typeof onRemap === 'function') {
      onRemap()
    }
  }, [onRemap, remapModal])

  const renameToken = useCallback(() => {
    if (typeof onRename === 'function') {
      onRename()
    }
  }, [onRename])

  const cancelAction = useCallback(() => {
    hideRemappingModal()
  }, [])

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (kbd.enter(event)) {
        cancelAction()
      }
    },
    [cancelAction]
  )

  return (
    <div
      className="modal-overlay"
      onKeyDown={onKeyDown}
      role="alertdialog"
      aria-modal={true}
      aria-labelledby="modal-title"
    >
      <div className="modal-dialog" data-testid="token-remapping-modal">
        <icon-button*
          onClick={cancelAction}
          className="close-btn"
          icon={i.close}
          variant="action"
          aria-label={tr('labels.close')}
        />

        <div className="modal-header">
          <heading*
            level={2}
            id="modal-title"
            typography="headline-large"
            className="modal-title"
          >
            {tr('workspace.tokens.remap-token-references-title', oldTokenName, newTokenName)}
          </heading*>
        </div>
        <div className="modal-content">
          <text* as="p" typography={t.bodyMedium}>
            {tr('workspace.tokens.remap-warning-effects')}
          </text*>
          <text* as="p" typography={t.bodyMedium}>
            {tr('workspace.tokens.remap-warning-time')}
          </text*>
        </div>
        <div className="modal-footer">
          <div className="action-buttons">
            <button*
              onClick={renameToken}
              type="button"
              variant="secondary"
            >
              {tr('workspace.tokens.not-remap')}
            </button*>
            <button*
              onClick={confirmRemap}
              type="button"
              variant="primary"
            >
              {tr('workspace.tokens.remap')}
            </button*>
          </div>
        </div>
      </div>
    </div>
  )
}
