// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useState, useCallback } from "react"
import * as d from "app/common/data"
import * as dm from "app/common/data/macros"
import * as dcmt from "app/main/data/comments"
import * as ev from "app/main/data/event"
import * as dw from "app/main/data/workspace"
import * as dwcm from "app/main/data/workspace/comments"
import * as refs from "app/main/refs"
import * as st from "app/main/store"
import { CommentSidebarThreadGroup } from "app/main/ui/comments"
import { Dropdown } from "app/main/ui/components/dropdown"
import { CurrentPageId } from "app/main/ui/context"
import * as i from "app/main/ui/ds/foundations/assets/icon"
import { EmptyState } from "app/main/ui/ds/product/empty-state"
import { PanelTitle } from "app/main/ui/ds/product/panel-title"
import * as deprecatedIcon from "app/main/ui/icons"
import * as dom from "app/util/dom"
import { tr } from "app/util/i18n"

interface SidebarOptionsProps {
  local: any
  fromViewer?: boolean
}

const SidebarOptions: React.FC<SidebarOptionsProps> = ({ local, fromViewer }) => {
  const { mode: cmode, show: cshow } = local

  const updateMode = useCallback((event: React.MouseEvent) => {
    const target = dom.getCurrentTarget(event)
    const value = dom.getData(target, "value")
    const mode = value as "all" | "yours" | "mentions"
    st.emit!(dcmt.updateFilters({ mode }))
  }, [])

  const updateShow = useCallback(() => {
    const mode = cshow === "pending" ? "all" : "pending"
    st.emit!(dcmt.updateFilters({ show: mode }))
  }, [cshow])

  return (
    <ul
      className={`comment-mode-dropdown ${fromViewer ? "viewer-dropdown" : ""}`}
    >
      <li
        className={`dropdown-item ${cmode === "all" || cmode === nil ? "selected" : ""}`}
        data-value="all"
        onClick={updateMode}
      >
        <span className="label">{tr("labels.show-all-comments")}</span>
        <span className="icon">{deprecatedIcon.tick}</span>
      </li>
      <li
        className={`dropdown-item ${cmode === "yours" ? "selected" : ""}`}
        data-value="yours"
        onClick={updateMode}
      >
        <span className="label">{tr("labels.show-your-comments")}</span>
        <span className="icon">{deprecatedIcon.tick}</span>
      </li>
      <li
        className={`dropdown-item ${cmode === "mentions" ? "selected" : ""}`}
        data-value="mentions"
        onClick={updateMode}
      >
        <span className="label">{tr("labels.show-mentions")}</span>
        <span className="icon">{deprecatedIcon.tick}</span>
      </li>
      <li className="separator"></li>
      <li
        className={`dropdown-item ${cshow === "pending" ? "selected" : ""}`}
        onClick={updateShow}
      >
        <span className="label">{tr("labels.hide-resolved-comments")}</span>
        <span className="icon">{deprecatedIcon.tick}</span>
      </li>
    </ul>
  )
}

interface CommentsSidebarProps {
  profiles?: any
  threads?: any
  pageId?: string
  fromViewer?: boolean
}

export const CommentsSidebar: React.FC<CommentsSidebarProps> = ({
  profiles,
  threads,
  pageId,
  fromViewer,
}) => {
  const threadsMap = refs.threads.deref()
  const profile = refs.profile.deref()
  const profilesData = refs.profiles.deref()
  const profilesFinal = profiles || profilesData
  const local = refs.commentsLocal.deref()

  const [options, setOptions] = useState(false)

  const threadsData =
    threads ||
    dcmt.applyFilters(
      local,
      profile,
      Object.values(threadsMap || {}).sort((a: any, b: any) => b.modifiedAt - a.modifiedAt)
    )

  const closeSection = useCallback(() => {
    if (fromViewer) {
      st.emit!(dcmt.updateOptions({ showSidebar: false }))
    } else {
      st.emit!(dw.clearEditionMode(), dw.deselectAll(true))
    }
  }, [fromViewer])

  const tgroups = dcmt.groupThreadsByPage(threadsData)
  const pageIdFinal = pageId || refs.currentPageId

  const toggleModeSelector = useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event)
    setOptions((o) => !o)
  }, [])

  const onThreadClick = useCallback(
    (thread: any) => {
      if (fromViewer) {
        st.emit!(dcmt.openThread(thread))
      } else {
        st.emit!(dwcm.navigateToComment(thread))
      }
    },
    [fromViewer]
  )

  const getModeLabel = () => {
    switch (local?.mode) {
      case "yours":
        return tr("labels.show-your-comments")
      case "mentions":
        return tr("labels.show-mentions")
      default:
        return tr("labels.show-all-comments")
    }
  }

  return (
    <div className={`comments-section ${fromViewer ? "from-viewer" : ""}`}>
      <PanelTitle
        className="comments-title"
        text={tr("labels.comments")}
        onClose={closeSection}
      />

      <button className="mode-dropdown-wrapper" onClick={toggleModeSelector}>
        <span className="mode-label">{getModeLabel()}</span>
        <div className="arrow-icon">{deprecatedIcon.arrow}</div>
      </button>

      <Dropdown show={options} onClose={() => setOptions(false)}>
        <SidebarOptions local={local} fromViewer={fromViewer} />
      </Dropdown>

      <div className="comments-section-content">
        {tgroups && tgroups.length > 0 ? (
          <div className="thread-groups">
            {tgroups.map((group: any, index: number) => (
              <CommentSidebarThreadGroup
                key={group.pageId || index}
                group={group}
                onThreadClick={onThreadClick}
                profiles={profilesFinal}
              />
            ))}
          </div>
        ) : (
          <div className="thread-group-placeholder">
            <EmptyState icon={i.comments} text={tr("labels.no-comments-available")} />
          </div>
        )}
      </div>
    </div>
  )
}
