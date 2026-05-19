// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react"
import * as dm from "app/common/data/macros"
import {store} from "app/main/store"
import {ContextNotification} from "app/main/ui/ds/notifications/context-notification"
import * as DeprecatedIcon from "app/main/ui/icons"
import {tr} from "app/util/i18n"
import * as modal from "app/main/data/modal"
import * as rx from "beicon.v2/core"
import * as rp from "app/main/repo"

const noop = () => null

interface DeleteSharedDialogProps {
  ids: string[]
  onAccept?: () => void
  onCancel?: () => void
  acceptStyle?: "danger" | "primary"
  origin?: "delete" | "unpublish" | "move"
  countLibraries?: number
}

export const DeleteSharedDialog: React.FC<DeleteSharedDialogProps> = (props) => {
  const {
    ids,
    onAccept = noop,
    onCancel = noop,
    acceptStyle = "danger",
    origin = "delete",
    countLibraries = 0,
  } = props

  const [references, setReferences] = React.useState<Array<[string, string]>>([])

  const cancelLabel = tr("labels.cancel")
  const countFiles = references.length

  const title = React.useMemo(() => {
    switch (origin) {
      case ":delete":
        return tr("modals.delete-shared-confirm.title", countLibraries)
      case ":unpublish":
        return tr("modals.unpublish-shared-confirm.title", countLibraries)
      case ":move":
        return tr("modals.move-shared-confirm.title", countLibraries)
      default:
        return tr("modals.delete-shared-confirm.title", countLibraries)
    }
  }, [origin, countLibraries])

  const subtitle = React.useMemo(() => {
    switch (origin) {
      case ":delete":
        return tr("modals.delete-shared-confirm.message", countLibraries)
      case ":unpublish":
        return tr("modals.unpublish-shared-confirm.message", countLibraries)
      case ":move":
        return tr("modals.move-shared-confirm.message", countLibraries)
      default:
        return ""
    }
  }, [origin, countLibraries])

  const acceptLabel = React.useMemo(() => {
    switch (origin) {
      case ":delete":
        return tr("modals.delete-shared-confirm.accept", countLibraries)
      case ":unpublish":
        return tr("modals.unpublish-shared-confirm.accept", countLibraries)
      case ":move":
        return tr("modals.move-shared-confirm.accept", countLibraries)
      default:
        return tr("ds.confirm-ok")
    }
  }, [origin, countLibraries])

  const noFilesMsg = React.useMemo(() => {
    return tr("modals.delete-shared-confirm.activated.no-files-message", countLibraries)
  }, [countLibraries])

  const scdMsg = React.useMemo(() => {
    return tr("modals.delete-shared-confirm.activated.scd-message", countLibraries)
  }, [countLibraries])

  const hint = React.useMemo(() => {
    return tr("modals.delete-unpublish-shared-confirm.activated.hint", countFiles)
  }, [countFiles])

  const acceptFn = React.useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault()
      store.emit(modal.hide())
      onAccept()
    },
    [onAccept]
  )

  const cancelFn = React.useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault()
      store.emit(modal.hide())
      onCancel()
    },
    [onCancel]
  )

  React.useEffect(() => {
    const subscription = rx.from(ids)
      .pipe(
        rx.filter((id) => id != null),
        rx.mapconcat((fileId) =>
          rx.from(rp.cmd(":get-library-file-references", {fileId}))
        ),
        rx.mapconcat((result) => rx.of(result)),
        rx.map((ref: any) => [ref.id, ref.name] as [string, string]),
        rx.reduce((acc, item) => [...acc, item], [])
      )
      .subscribe((result) => {
        setReferences(result)
      })

    return () => subscription.unsubscribe()
  }, [ids])

  React.useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault()
        event.stopPropagation()
        acceptFn(event as any)
      }
    }

    const key = document.addEventListener("keydown", handleKeydown)
    return () => document.removeEventListener("keydown", handleKeydown)
  }, [acceptFn])

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button className="modal-close-btn" onClick={cancelFn}>
            {DeprecatedIcon.close}
          </button>
        </div>

        <div className="modal-content">
          {subtitle && subtitle !== "" && (
            <h3 className="modal-subtitle">{subtitle}</h3>
          )}

          {countLibraries !== 0 && (
            <>
              {references.length > 0 ? (
                <>
                  {scdMsg && scdMsg !== "" && (
                    <p className="modal-scd-msg">{scdMsg}</p>
                  )}

                  <ul className="element-list">
                    {references.map(([fileId, fileName]) => (
                      <li key={fileId} className="list-item">
                        <span>- {fileName}</span>
                      </li>
                    ))}
                  </ul>

                  {hint && hint !== "" && (
                    <ContextNotification level="info" appearance="ghost">
                      {hint}
                    </ContextNotification>
                  )}
                </>
              ) : (
                <>
                  <h3 className="modal-msg">{noFilesMsg}</h3>
                </>
              )}
            </>
          )}
        </div>

        <div className="modal-footer">
          <div className="action-buttons">
            {cancelLabel !== ":omit" && (
              <input
                className="cancel-button"
                type="button"
                value={cancelLabel}
                onClick={cancelFn}
              />
            )}

            <input
              className={["accept-btn", acceptStyle === "danger" ? "danger" : "primary"].filter(Boolean).join(" ")}
              type="button"
              value={acceptLabel}
              onClick={acceptFn}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

modal.register(DeleteSharedDialog, ":delete-shared-libraries")