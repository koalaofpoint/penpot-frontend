// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react"
import * as GPT from "app/common/geom/point"
import * as EV from "app/main/data/event"
import * as Modal from "app/main/data/modal"
import * as DW from "app/main/data/workspace"
import * as DWC from "app/main/data/workspace/common"
import * as DWM from "app/main/data/workspace/media"
import * as SC from "app/main/data/workspace/shortcuts"
import * as Features from "app/main/features"
import {refs} from "app/main/refs"
import {store} from "app/main/store"
import {FileUploader} from "app/main/ui/components/file-uploader"
import {Ctx} from "app/main/ui/context"
import * as DeprecatedIcon from "app/main/ui/icons"
import {_tr} from "app/util/i18n"
import * as TS from "app/util/timers"
import * as L from "okulary.core"
import * as PTK from "potok.v2/core"

const ImageUpload: React.FC = React.memo(() => {
  const ref = React.useRef<HTMLInputElement>(null)
  const fileId = React.useContext(Ctx.CurrentFileIdContext)

  const onClick = React.useCallback(
    () => {
      store.emit(":interrupt", DW.clearEditionMode())
      DOM.click(ref.current)
    },
    []
  )

  const onSelected = React.useCallback(
    (blobs: any) => {
      const vbox = refs.vbox
      const x = vbox.x + vbox.width / 2
      const y = vbox.y + vbox.height / 2
      const params = {
        fileId,
        blobs: Array.from(blobs),
        position: GPT.point(x, y),
      }
      store.emit(DWM.uploadMediaWorkspace(params))
    },
    [fileId]
  )

  return (
    <li>
      <button
        title={_tr("workspace.toolbar.image", SC.getTooltip(":insert-image"))}
        aria-label={_tr("workspace.toolbar.image", SC.getTooltip(":insert-image"))}
        onClick={onClick}
        className="main-toolbar-options-button"
      >
        {DeprecatedIcon.img}
        <FileUploader
          inputId="image-upload"
          accept={DWM.acceptImageTypes}
          multi={true}
          ref={ref}
          onSelected={onSelected}
        />
      </button>
    </li>
  )
})

const toolbarHiddenRef = L.derived(
  (state: any) => {
    const visibility = state?.["hide-toolbar"]
    const pathEditState = state?.["edit-path"]
    const selected = state?.["selected"]
    const edition = state?.["edition"]
    const single = selected?.size === 1
    const pathEditing = single && pathEditState?.has(edition)

    return pathEditing ? true : visibility
  },
  refs.workspaceLocal
)

interface TopToolbarProps {
  layout: any
}

export const TopToolbar: React.FC<TopToolbarProps> = (props) => {
  const {layout} = props

  const drawtool = refs.selectedDrawingTool?.deref()
  const edition = refs.selectedEdition?.deref()
  const profile = refs.profile?.deref()
  const props_ = profile?.props
  const readOnly = React.useContext(Ctx.WorkspaceReadOnlyContext)
  const rulers = refs.rulers?.deref()
  const hideToolbar = toolbarHiddenRef?.deref()

  const interrupt = React.useCallback(
    () => store.emit(":interrupt", DW.clearEditionMode()),
    []
  )

  const selectDrawtool = React.useCallback(
    (event: React.MouseEvent) => {
      const tool = DOM.getData(DOM.getCurrentTarget(event), "tool")
      store.emit(":interrupt", DW.clearEditionMode())

      TS.schedule(100, () => {
        store.emit(DW.selectForDrawing(D.keyword(tool)))
      })
    },
    []
  )

  const toggleDebugPanel = React.useCallback(
    () => {
      const isSidebarClosed = layout?.has(":collapse-left-sidebar")
      if (isSidebarClosed) {
        store.emit(DW.toggleLayoutFlag(":collapse-left-sidebar"))
      }
      store.emit(
        DW.removeLayoutFlag(":shortcuts"),
        EV.withMeta(DW.toggleLayoutFlag(":debug-panel"), {origin: "workspace-left-toolbar"})
      )
    },
    [layout]
  )

  const toggleToolbar = React.useCallback(
    (event: React.MouseEvent) => {
      DOM.blur(DOM.getTarget(event))
      store.emit(DWC.toggleToolbarVisibility())
    },
    []
  )

  const testTooltipBoardText = !props_?.["workspace-visited"]
    ? _tr("workspace.toolbar.frame-first-time", SC.getTooltip(":draw-frame"))
    : _tr("workspace.toolbar.frame", SC.getTooltip(":draw-frame"))

  if (readOnly) return null

  return (
    <aside
      className={[
        "main-toolbar",
        !rulers ? "main-toolbar-no-rulers" : "",
        hideToolbar ? "main-toolbar-hidden" : "",
      ].filter(Boolean).join(" ")}
    >
      <ul className="main-toolbar-options" data-testid="toolbar-options">
        <li>
          <button
            title={_tr("workspace.toolbar.move", SC.getTooltip(":move"))}
            aria-label={_tr("workspace.toolbar.move", SC.getTooltip(":move"))}
            className={[
              "main-toolbar-options-button",
              !drawtool && !edition ? "selected" : "",
            ].filter(Boolean).join(" ")}
            onClick={interrupt}
          >
            {DeprecatedIcon.move}
          </button>
        </li>

        <li>
          <button
            title={testTooltipBoardText}
            aria-label={_tr("workspace.toolbar.frame", SC.getTooltip(":draw-frame"))}
            className={["main-toolbar-options-button", drawtool === ":frame" ? "selected" : ""].filter(Boolean).join(" ")}
            onClick={selectDrawtool}
            data-tool=":frame"
            data-testid="artboard-btn"
          >
            {DeprecatedIcon.board}
          </button>
        </li>

        <li>
          <button
            title={_tr("workspace.toolbar.rect", SC.getTooltip(":draw-rect"))}
            aria-label={_tr("workspace.toolbar.rect", SC.getTooltip(":draw-rect"))}
            className={["main-toolbar-options-button", drawtool === ":rect" ? "selected" : ""].filter(Boolean).join(" ")}
            onClick={selectDrawtool}
            data-tool=":rect"
            data-testid="rect-btn"
          >
            {DeprecatedIcon.rectangle}
          </button>
        </li>

        <li>
          <button
            title={_tr("workspace.toolbar.ellipse", SC.getTooltip(":draw-ellipse"))}
            aria-label={_tr("workspace.toolbar.ellipse", SC.getTooltip(":draw-ellipse"))}
            className={["main-toolbar-options-button", drawtool === ":circle" ? "selected" : ""].filter(Boolean).join(" ")}
            onClick={selectDrawtool}
            data-tool=":circle"
            data-testid="ellipse-btn"
          >
            {DeprecatedIcon.elipse}
          </button>
        </li>

        <li>
          <button
            title={_tr("workspace.toolbar.text", SC.getTooltip(":draw-text"))}
            aria-label={_tr("workspace.toolbar.text", SC.getTooltip(":draw-text"))}
            className={["main-toolbar-options-button", drawtool === ":text" ? "selected" : ""].filter(Boolean).join(" ")}
            onClick={selectDrawtool}
            data-tool=":text"
          >
            {DeprecatedIcon.text}
          </button>
        </li>

        <ImageUpload/>

        <li>
          <button
            title={_tr("workspace.toolbar.curve", SC.getTooltip(":draw-curve"))}
            aria-label={_tr("workspace.toolbar.curve", SC.getTooltip(":draw-curve"))}
            className={["main-toolbar-options-button", drawtool === ":curve" ? "selected" : ""].filter(Boolean).join(" ")}
            onClick={selectDrawtool}
            data-tool=":curve"
            data-testid="curve-btn"
          >
            {DeprecatedIcon.curve}
          </button>
        </li>

        <li>
          <button
            title={_tr("workspace.toolbar.path", SC.getTooltip(":draw-path"))}
            aria-label={_tr("workspace.toolbar.path", SC.getTooltip(":draw-path"))}
            className={["main-toolbar-options-button", drawtool === ":path" ? "selected" : ""].filter(Boolean).join(" ")}
            onClick={selectDrawtool}
            data-tool=":path"
            data-testid="path-btn"
          >
            {DeprecatedIcon.path}
          </button>
        </li>

        {Features.activeFeature(store.getState(), "plugins/runtime") && (
          <li>
            <button
              title={_tr("workspace.toolbar.plugins", SC.getTooltip(":plugins"))}
              aria-label={_tr("workspace.toolbar.plugins", SC.getTooltip(":plugins"))}
              className="main-toolbar-options-button"
              onClick={() => {
                store.emit(
                  PTK.dataEvent(EV.event("open-plugins-manager", {name: "open-plugins-manager", origin: "workspace:toolbar"})),
                  Modal.show(":plugin-management", {})
                )
              }}
              data-tool=":plugins"
              data-testid="plugins-btn"
            >
              {DeprecatedIcon.puzzle}
            </button>
          </li>
        )}

        {typeof process !== "undefined" && process.env && process.env.NODE_ENV === "development" && (
          <li>
            <button
              title="Debugging tool"
              className={["main-toolbar-options-button", layout?.has(":debug-panel") ? "selected" : ""].filter(Boolean).join(" ")}
              onClick={toggleDebugPanel}
            >
              {DeprecatedIcon.bug}
            </button>
          </li>
        )}
      </ul>

      <button
        title={_tr("workspace.toolbar.toggle-toolbar")}
        aria-label={_tr("workspace.toolbar.toggle-toolbar")}
        className="toolbar-handler"
        onClick={toggleToolbar}
      >
        <div className="toolbar-handler-btn"/>
      </button>
    </aside>
  )
}
