// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as modal from '@main/data/modal'
import * as store from '@main/store'
import { link as link* } from '@ui/components/link'
import { contextNotification as contextNotification* } from '@ui/ds/notifications/context-notification'
import * as deprecatedIcon from '@ui/icons'
import * as dom from '@util/dom'
import { tr } from '@util/i18n'
import * as k from '@util/keyboard'
import { listen } from 'goog.events'
import React, { useCallback, useEffect } from 'react'

interface AlertDialogProps {
  message?: string
  scdMessage?: string
  linkMessage?: {
    before: string
    text: string
    onClick: () => void
    after: string
  }
  title?: string
  onAccept?: (props: any) => void
  hint?: string
  acceptLabel?: string
  acceptStyle?: 'danger' | 'primary'
}

export const AlertDialog: React.FC<AlertDialogProps> = ({
  message,
  scdMessage,
  linkMessage,
  title,
  onAccept,
  hint,
  acceptLabel,
  acceptStyle,
}) => {
  const handleAccept = onAccept ?? identity
  const resolvedMessage = message ?? tr('ds.alert-title')
  const resolvedAcceptLabel = acceptLabel ?? tr('ds.alert-ok')
  const resolvedAcceptStyle = acceptStyle ?? 'danger'
  const resolvedTitle = title ?? tr('ds.alert-title')

  const acceptFn = useCallback(
    (event: React.MouseEvent) => {
      dom.preventDefault(event)
      store.emit(modal.hide)
      handleAccept({ message, scdMessage, linkMessage, title, onAccept, hint, acceptLabel, acceptStyle })
    },
    [handleAccept, message, scdMessage, linkMessage, title, onAccept, hint, acceptLabel, acceptStyle]
  )

  useEffect(() => {
    const onKeydown = (event: KeyboardEvent) => {
      if (k.enter(event)) {
        dom.preventDefault(event)
        dom.stopPropagation(event)
        store.emit(modal.hide)
        handleAccept({ message, scdMessage, linkMessage, title, onAccept, hint, acceptLabel, acceptStyle })
      }
    }

    const key = listen(document, 'keydown', onKeydown)
    return () => key.unlisten()
  }, [handleAccept, message, scdMessage, linkMessage, title, onAccept, hint, acceptLabel, acceptStyle])

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2 className="modal-title">{resolvedTitle}</h2>
          <button className="modal-close-btn" onClick={acceptFn}>
            {deprecatedIcon.close}
          </button>
        </div>

        <div className="modal-content">
          {resolvedMessage && resolvedMessage !== '' && (
            <h3 className="modal-msg">{resolvedMessage}</h3>
          )}
          {linkMessage?.length > 0 && (
            <h3 className="modal-msg">
              <span>{linkMessage.before}</span>
              <link* action={linkMessage.onClick} className="link">
                {linkMessage.text}
              </link*>
              <span>{linkMessage.after}</span>
            </h3>
          )}
          {scdMessage && scdMessage !== '' && (
            <h3 className="modal-scd-msg">{scdMessage}</h3>
          )}

          {hint && typeof hint === 'string' && (
            <contextNotification* level="info" appearance="ghost">
              {hint}
            </contextNotification*>
          )}
        </div>

        <div className="modal-footer">
          <div className="action-buttons">
            <input
              className={[
                'accept-btn',
                resolvedAcceptStyle === 'danger' ? 'danger' : '',
                resolvedAcceptStyle === 'primary' ? 'primary' : '',
              ].filter(Boolean).join(' ')}
              type="button"
              value={resolvedAcceptLabel}
              onClick={acceptFn}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
