// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useState, useRef, useEffect, useCallback } from "react"
import * as dm from "app/common/data/macros"
import * as dcm from "app/main/data/common"
import * as modal from "app/main/data/modal"
import * as dw from "app/main/data/workspace"
import * as dc from "app/main/data/workspace/colors"
import * as refs from "app/main/refs"
import * as rt from "app/main/router"
import * as st from "app/main/store"
import { WorkspaceReadOnly } from "app/main/ui/context"
import * as deprecatedIcon from "app/main/ui/icons"
import { MainMenu } from "app/main/ui/workspace/main-menu"
import * as dom from "app/util/dom"
import { tr } from "app/util/i18n"
import * as kbd from "app/util/keyboard"
import * as str from "cuerdas/core"

interface LeftHeaderProps {
  file: any
  layout: any
  project: any
  pageId: string
  className?: string
}

export const LeftHeader: React.FC<LeftHeaderProps> = ({
  file,
  layout,
  project,
  pageId,
  className = "",
}) => {
  const profile = refs.profile.deref()
  const fileId = file.id
  const fileName = file.name
  const projectId = project.id
  const teamId = project.teamId
  const shared = file.isShared

  const persistence = refs.persistence.deref()
  const persistenceStatus = persistence?.status

  const readOnly = refs.workspaceReadOnly

  const [editing, setEditing] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleBlur = useCallback((_event: React.FocusEvent) => {
    const value = str.trim(dom.getValue(inputRef.current as HTMLInputElement) as string)
    if (value !== "") {
      st.emit!(dw.renameFile(fileId, value))
    }
    setEditing(false)
  }, [fileId])

  const handleNameKeydown = useCallback((event: React.KeyboardEvent) => {
    if (kbd.enter(event)) {
      handleBlur(event as any)
    }
  }, [handleBlur])

  const startEditingName = useCallback((event: React.MouseEvent) => {
    dom.preventDefault(event)
    setEditing(true)
  }, [])

  const closeModals = useCallback(() => {
    st.emit!(dc.stopPicker(), modal.hide())
  }, [])

  const goBack = useCallback(() => {
    closeModals()
    st.emit!(
      "interrupt",
      dw.setOptionsMode("design"),
      dcm.goToDashboardRecent()
    )
  }, [closeModals])

  const navToProject = useCallback(() => {
    st.emit!(
      "interrupt",
      dcm.goToDashboardFiles(rt.newWindow, true, projectId)
    )
  }, [projectId])

  useEffect(() => {
    if (editing && inputRef.current) {
      dom.selectText!(inputRef.current)
    }
  }, [editing])

  const getStatusClass = () => {
    switch (persistenceStatus) {
      case "pending":
        return "status-notification pending-status"
      case "saving":
        return "status-notification saving-status"
      case "saved":
        return "status-notification saved-status"
      case "error":
        return "status-notification error-status"
      default:
        return "status-notification"
    }
  }

  const getStatusTitle = () => {
    switch (persistenceStatus) {
      case "pending":
        return tr("workspace.header.saving")
      case "saving":
        return tr("workspace.header.saving")
      case "saved":
        return tr("workspace.header.saved")
      case "error":
        return tr("workspace.header.save-error")
      default:
        return null
    }
  }

  const getStatusIcon = () => {
    switch (persistenceStatus) {
      case "pending":
        return deprecatedIcon.statusAlert
      case "saving":
        return deprecatedIcon.statusAlert
      case "saved":
        return deprecatedIcon.statusTick
      case "error":
        return deprecatedIcon.statusWrong
      default:
        return null
    }
  }

  return (
    <header className={`${className} workspace-header-left`}>
      <a onClick={goBack} className="main-icon">
        {deprecatedIcon.logoIcon}
      </a>

      <div alt={tr("workspace.sitemap")} className="project-tree">
        <div className="project-name" onClick={navToProject}>
          {project.name}
        </div>

        {editing ? (
          <input
            className="file-name-input"
            type="text"
            ref={inputRef}
            onBlur={handleBlur}
            onKeyDown={handleNameKeydown}
            autoFocus
            defaultValue={file.name}
          />
        ) : (
          <div
            className="file-name"
            title={fileName}
            onDoubleClick={startEditingName}
          >
            <div className={getStatusClass()} title={getStatusTitle()}>
              {getStatusIcon()}
            </div>
            <div className="file-name-label">{fileName}</div>
          </div>
        )}
      </div>

      {shared && (
        <span className="shared-badge">{deprecatedIcon.library}</span>
      )}

      <div className="menu-section">
        <MainMenu
          layout={layout}
          file={file}
          profile={profile}
          readOnly={readOnly}
          teamId={teamId}
          pageId={pageId}
        />
      </div>
    </header>
  )
}
