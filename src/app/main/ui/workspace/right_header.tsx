// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react"
import * as DCM from "app/main/data/common"
import * as EV from "app/main/data/event"
import * as Modal from "app/main/data/modal"
import * as SCD from "app/main/data/shortcuts"
import * as DW from "app/main/data/workspace"
import * as DWC from "app/main/data/workspace/drawing/common"
import * as DWH from "app/main/data/workspace/history"
import * as SC from "app/main/data/workspace/shortcuts"
import {refs} from "app/main/refs"
import {store} from "app/main/store"
import {Dropdown} from "app/main/ui/components/dropdown"
import {Ctx} from "app/main/ui/context"
import {DashboardTeam} from "app/main/ui/dashboard/team"
import {IconButton} from "app/main/ui/ds/buttons/icon-button"
import * as I from "app/main/ui/ds/foundations/assets/icon"
import {ProgressWidget} from "app/main/ui/exports/assets"
import * as Formats from "app/main/ui/formats"
import * as DeprecatedIcon from "app/main/ui/icons"
import {ActiveSessions} from "app/main/ui/workspace/presence"
import * as DOM from "app/util/dom"
import {_tr} from "app/util/i18n"
import * as L from "okulary.core"

const refPersistenceStatus = L.derived(":status", refs.persistence)

interface ZoomWidgetWorkspaceProps {
  zoom: number
  onIncrease: () => void
  onDecrease: () => void
  onZoomReset: () => void
  onZoomFit: () => void
  onZoomSelected: () => void
}

const ZoomWidgetWorkspace: React.FC<ZoomWidgetWorkspaceProps> = React.memo((props) => {
  const {
    zoom,
    onIncrease,
    onDecrease,
    onZoomReset,
    onZoomFit,
    onZoomSelected,
  } = props

  const [open, setOpen] = React.useState(false)

  const openDropdown = React.useCallback(
    (event: any) => {
      DOM.stopPropagation(event)
      setOpen(true)
    },
    []
  )

  const closeDropdown = React.useCallback(
    (event: any) => {
      DOM.stopPropagation(event)
      setOpen(false)
    },
    []
  )

  const handleIncrease = React.useCallback(
    (event: any) => {
      DOM.stopPropagation(event)
      onIncrease()
    },
    [onIncrease]
  )

  const handleDecrease = React.useCallback(
    (event: any) => {
      DOM.stopPropagation(event)
      onDecrease()
    },
    [onDecrease]
  )

  const formattedZoom = Formats.formatPercent(zoom, {precision: 0})

  return (
    <>
      <div
        onClick={openDropdown}
        className={["zoom-widget", open ? "selected" : ""].filter(Boolean).join(" ")}
        title={_tr("workspace.header.zoom")}
      >
        <span className="label">{formattedZoom}</span>
      </div>
      <Dropdown show={open} onClose={closeDropdown}>
        <ul className="dropdown">
          <li className="basic-zoom-bar">
            <span className="zoom-btns">
              <IconButton
                variant="ghost"
                aria-label={_tr("shortcuts.decrease-zoom")}
                onClick={handleDecrease}
                icon={I.remove}
              />
              <p className="zoom-text">{formattedZoom}</p>
              <IconButton
                variant="ghost"
                aria-label={_tr("shortcuts.increase-zoom")}
                onClick={handleIncrease}
                icon={I.add}
              />
            </span>
            <button className="reset-btn" onClick={onZoomReset}>
              {_tr("workspace.header.reset-zoom")}
            </button>
          </li>
          <li className="zoom-option" onClick={onZoomFit}>
            {_tr("workspace.header.zoom-fit-all")}
            <span className="shortcuts">
              {SCD.splitSc(SC.getTooltip(":fit-all")).map((sc, idx) => (
                <span className="shortcut-key" key={`zoom-fit-${idx}`}>{sc}</span>
              ))}
            </span>
          </li>
          <li className="zoom-option" onClick={onZoomSelected}>
            {_tr("workspace.header.zoom-selected")}
            <span className="shortcuts">
              {SCD.splitSc(SC.getTooltip(":zoom-selected")).map((sc, idx) => (
                <span className="shortcut-key" key={`zoom-selected-${idx}`}>{sc}</span>
              ))}
            </span>
          </li>
        </ul>
      </Dropdown>
    </>
  )
})

interface RightHeaderProps {
  file: any
  layout: any
  pageId: string
}

export const RightHeader: React.FC<RightHeaderProps> = (props) => {
  const {file, layout, pageId} = props

  const fileId = file?.id

  const threadsMap = refs.commentThreads?.deref()
  const zoom = refs.selectedZoom?.deref()
  const readOnly = React.useContext(Ctx.WorkspaceReadOnlyContext)
  const selectedDrawtool = refs.selectedDrawingTool?.deref()

  const onIncrease = React.useCallback(() => store.emit(DW.increaseZoom(null)), [])
  const onDecrease = React.useCallback(() => store.emit(DW.decreaseZoom(null)), [])
  const onZoomReset = React.useCallback(() => store.emit(DW.resetZoom()), [])
  const onZoomFit = React.useCallback(() => store.emit(DW.zoomToFitAll()), [])
  const onZoomSelected = React.useCallback(() => store.emit(DW.zoomToSelectedShape()), [])

  const [editing, setEditing] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const team = refs.team?.deref()
  const permissions = team?.permissions

  const hasUnreadComments = React.useMemo(() => {
    if (!threadsMap || !fileId) return false
    return Object.values(threadsMap).some((thread: any) =>
      thread?.fileId === fileId && (thread?.countUnreadComments || 0) > 0
    )
  }, [threadsMap, fileId])

  const displayShareButton = !team?.isDefault && (permissions?.isAdmin || permissions?.isOwner)

  const navToViewer = React.useCallback(
    () => {
      const params = {
        pageId,
        fileId,
        section: "interactions",
      }
      store.emit(DCM.goToViewer(params))
    },
    [fileId, pageId]
  )

  const activeComments = React.useCallback(
    () => {
      store.emit(
        ":interrupt",
        DW.clearEditionMode(),
        DW.removeLayoutFlag(":document-history"),
        EV.withMeta({origin: "workspace-header"}),
        DW.selectForDrawing(":comments")
      )
    },
    []
  )

  const toggleComments = React.useCallback(
    () => {
      if (selectedDrawtool === ":comments") {
        store.emit(DWC.clearDrawing())
      } else {
        activeComments()
      }
    },
    [selectedDrawtool, activeComments]
  )

  const toggleHistory = React.useCallback(
    () => {
      if (selectedDrawtool === ":comments") {
        store.emit(":interrupt", DW.clearEditionMode())
      }
      store.emit(DWH.initializeHistory(), EV.withMeta({origin: "workspace-header"}))
    },
    [selectedDrawtool]
  )

  const openShareDialog = React.useCallback(
    () => {
      store.emit(Modal.show({
        type: ":invite-members",
        team,
        origin: ":workspace",
      }))
    },
    [team]
  )

  React.useEffect(() => {
    if (editing && inputRef.current) {
      DOM.selectText(inputRef.current)
    }
  }, [editing])

  return (
    <div className="workspace-header-right">
      <div className="users-section">
        <ActiveSessions/>
      </div>

      <ProgressWidget/>

      <div className="separator"/>

      <div className="zoom-section">
        <ZoomWidgetWorkspace
          zoom={zoom}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onZoomReset={onZoomReset}
          onZoomFit={onZoomFit}
          onZoomSelected={onZoomSelected}
        />
      </div>

      <div className="comments-section">
        <button
          title={_tr("workspace.toolbar.comments", SC.getTooltip(":add-comment"))}
          aria-label={_tr("workspace.toolbar.comments", SC.getTooltip(":add-comment"))}
          className={["comments-btn", selectedDrawtool === ":comments" ? "selected" : ""].filter(Boolean).join(" ")}
          onClick={toggleComments}
          data-tool=":comments"
          style={{position: "relative"}}
        >
          <DeprecatedIcon.comments/>
          {hasUnreadComments && <div className="unread"/>}
        </button>
      </div>

      {!readOnly && (
        <div className="history-section">
          <button
            title={_tr("workspace.sidebar.history")}
            aria-label={_tr("workspace.sidebar.history")}
            className={[
              layout?.has(":document-history") ? "selected" : "",
              "history-button",
            ].filter(Boolean).join(" ")}
            onClick={toggleHistory}
          >
            <DeprecatedIcon.history/>
          </button>
        </div>
      )}

      {displayShareButton && (
        <a
          className="viewer-btn"
          title={_tr("workspace.header.share")}
          onClick={openShareDialog}
        >
          <DeprecatedIcon.share/>
        </a>
      )}

      <a
        className="viewer-btn"
        title={_tr("workspace.header.viewer", SC.getTooltip(":open-viewer"))}
        onClick={navToViewer}
      >
        <DeprecatedIcon.play/>
      </a>
    </div>
  )
}
