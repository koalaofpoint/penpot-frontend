// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react"
import {store} from "app/main/store"
import {ContextNotification} from "app/main/ui/ds/notifications/context-notification"
import * as DeprecatedIcon from "app/main/ui/icons"
import {tr} from "app/util/i18n"
import * as modal from "app/main/data/modal"

interface ConfirmDialogProps {
  message?: string
  scdMessage?: string
  title?: string
  onAccept?: () => void
  onCancel?: () => void
  hint?: string
  items?: Array<{name: string}>
  cancelLabel?: string
  acceptLabel?: string
  acceptStyle?: "danger" | "primary"
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = (props) => {
  const {
    message,
    scdMessage,
    title,
    onAccept,
    onCancel,
    hint,
    items = [],
    cancelLabel,
    acceptLabel,
    acceptStyle = "danger",
  } = props

  const onAcceptFinal = onAccept || (() => {})
  const onCancelFinal = onCancel || (() => {})
  const messageFinal = message || tr("ds.confirm-title")
  const cancelLabelFinal = cancelLabel || tr("ds.confirm-cancel")
  const acceptLabelFinal = acceptLabel || tr("ds.confirm-ok")
  const titleFinal = title || tr("ds.confirm-title")

  const acceptFn = React.useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault()
      store.emit(modal.hide())
      onAcceptFinal(props)
    },
    [onAcceptFinal, props]
  )

  const cancelFn = React.useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault()
      store.emit(modal.hide())
      onCancelFinal(props)
    },
    [onCancelFinal, props]
  )

  React.useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault()
        event.stopPropagation()
        store.emit(modal.hide())
        onAcceptFinal(props)
      }
    }

    const key = document.addEventListener("keydown", handleKeydown)
    return () => document.removeEventListener("keydown", handleKeydown)
  }, [onAcceptFinal, props])

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2 className="modal-title">{titleFinal}</h2>
          <button className="modal-close-btn" onClick={cancelFn}>
            {DeprecatedIcon.close}
          </button>
        </div>

        <div className="modal-content">
          {message && message !== "" && (
            <h3 className="modal-msg">{message}</h3>
          )}
          {scdMessage && scdMessage !== "" && (
            <h3 className="modal-scd-msg">{scdMessage}</h3>
          )}
          {hint && typeof hint === "string" && (
            <ContextNotification level="info" appearance="ghost">
              {hint}
            </ContextNotification>
          )}
          {items.length > 0 && (
            <>
              <p className="modal-subtitle">{tr("ds.component-subtitle")}</p>
              <ul className="component-list">
                {items.map((item) => (
                  <li key={item.name} className="modal-item-element">
                    <span className="modal-component-icon">{DeprecatedIcon.component}</span>
                    <span className="modal-component-name">{item.name}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        <div className="modal-footer">
          <div className="action-buttons">
            {cancelLabelFinal !== ":omit" && (
              <input
                className="cancel-button"
                type="button"
                value={cancelLabelFinal}
                onClick={cancelFn}
              />
            )}
            <input
              className={["accept-btn", acceptStyle === "danger" ? "danger" : "primary"].filter(Boolean).join(" ")}
              type="button"
              value={acceptLabelFinal}
              onClick={acceptFn}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

modal.register(ConfirmDialog, ":confirm")