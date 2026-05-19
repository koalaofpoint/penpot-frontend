// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react"
import * as DM from "app/common/data/macros"
import * as DCM from "app/main/data/common"
import * as DSH from "app/main/data/helpers"
import * as DPS from "app/main/data/persistence"
import * as DPL from "app/main/data/plugins"
import * as DW from "app/main/data/workspace"
import * as Features from "app/main/features"
import {refs} from "app/main/refs"
import * as RT from "app/main/router"
import {store} from "app/main/store"
import {Ctx} from "app/main/ui/context"
import {Loader} from "app/main/ui/ds/product/loader"
import * as Hooks from "app/main/ui/hooks"
import {useResizeObserver} from "app/main/ui/hooks/resize"
import {ModalContainer} from "app/main/ui/modal"
import {WorkspaceColorpicker} from "app/main/ui/workspace/colorpicker"
import {ContextMenu} from "app/main/ui/workspace/context-menu"
import {Coordinates} from "app/main/ui/workspace/coordinates"
import {WorkspaceLibraries} from "app/main/ui/workspace/libraries"
import {Nudge} from "app/main/ui/workspace/nudge"
import {Palette} from "app/main/ui/workspace/palette"
import {Plugins} from "app/main/ui/workspace/plugins"
import {Sidebar} from "app/main/ui/workspace/sidebar"
import {HistoryToolbox} from "app/main/ui/workspace/sidebar/history"
import {TokensExport} from "app/main/ui/workspace/tokens/export"
import {TokensExportModal} from "app/main/ui/workspace/tokens/export/modal"
import {TokensImport} from "app/main/ui/workspace/tokens/import"
import {TokensImportModal} from "app/main/ui/workspace/tokens/import/modal"
import {ManagementFormsModals} from "app/main/ui/workspace/tokens/management/forms/modals"
import {RemappingModal} from "app/main/ui/workspace/tokens/remapping-modal"
import {TokensSettings} from "app/main/ui/workspace/tokens/settings"
import {ThemesCreateModal} from "app/main/ui/workspace/tokens/themes/create-modal"
import {Viewport} from "app/main/ui/workspace/viewport"
import * as DBG from "app/util/debug"
import * as DOM from "app/util/dom"
import * as Globals from "app/util/globals"
import {_tr} from "app/util/i18n"
import * as Events from "goog.events"
import * as L from "okulary.core"

interface WorkspaceContentProps {
  file: any
  layout: any
  page: any
  wglobal: any
}

const WorkspaceContent: React.FC<WorkspaceContentProps> = (props) => {
  const {file, layout, page, wglobal} = props

  const [paletteSize, setPaletteSize] = React.useState<any>(null)
  const selected = refs.selectedShapes
  const pageId = page?.id

  const vport = refs.workspaceVport
  const {optionsMode} = wglobal || {}

  const drawing = refs.workspaceDrawing

  const colorpalette = layout?.colorpalette
  const textpalette = layout?.textpalette
  const hideUi = layout?.hideUi

  const onResize = React.useCallback(
    (resizeType: any, size: any) => {
      if (vport && size !== vport) {
        store.emit(DW.updateViewportSize(resizeType, size))
      }
    },
    [vport]
  )

  const onResizePalette = React.useCallback(
    (size: any) => setPaletteSize(size),
    []
  )

  const nodeRef = useResizeObserver(onResize)

  const colorpaletteEnabled = !!colorpalette
  const textpaletteEnabled = !!textpalette
  const hideUiBool = !!hideUi

  return (
    <>
      {!hideUiBool && (
        <Palette
          layout={layout}
          onChangeSize={onResizePalette}
        />
      )}

      <section
        key={`workspace-${pageId}`}
        className="workspace-content"
        ref={nodeRef}
      >
        <section className="workspace-viewport">
          {DBG.enabled(":coordinates") && (
            <Coordinates.Coordinates colorpalette={colorpaletteEnabled}/>
          )}

          {DBG.enabled(":history-overlay") && (
            <div className="history-debug-overlay">
              <button onClick={() => store.emit(DW.reinitializeUndo())}>CLEAR</button>
              <HistoryToolbox/>
            </div>
          )}

          <Viewport
            file={file}
            page={page}
            wglobal={wglobal}
            selected={selected}
            layout={layout}
            paletteSize={
              (colorpaletteEnabled || textpaletteEnabled) && !hideUiBool
                ? paletteSize
                : undefined
            }
          />
        </section>

        {!hideUiBool && (
          <Sidebar
            layout={layout}
            fileId={file?.id}
            pageId={pageId}
            file={file}
            selected={selected}
            section={optionsMode}
            drawingTool={drawing?.tool}
          />
        )}
      </section>
    </>
  )
}

const WorkspaceLoader: React.FC = () => {
  return (
    <Loader
      title={_tr("labels.loading")}
      className="workspace-loader"
      overlay={true}
      fileLoading={true}
    />
  )
}

function makeTeamRef(teamId: string) {
  return L.derived(
    (state: any) => {
      const teams = state?.teams
      return teams?.get(teamId)
    },
    store.state
  )
}

function makeFileRef(fileId: string) {
  return L.derived(
    (state: any) => {
      if (state?.currentFileId !== fileId) return null
      const files = state?.files
      const file = files?.get(fileId)
      if (!file) return null
      return file.set("::has-data", file.has("data"))
    },
    store.state,
    (a: any, b: any) => a === b
  )
}

function makePageRef(fileId: string, pageId: string) {
  return L.derived(
    (state: any) => {
      const currentPageId = state?.currentPageId
      if (currentPageId !== pageId) return null
      return DSH.lookupPage(state, fileId, pageId)
    },
    store.state
  )
}

interface WorkspaceInnerProps {
  pageId: string
  fileId: string
  file: any
  layout: any
  wglobal: any
}

const WorkspaceInner: React.FC<WorkspaceInnerProps> = (props) => {
  const {pageId, fileId, file, layout, wglobal} = props

  const pageRef = React.useMemo(
    () => makePageRef(fileId, pageId),
    [fileId, pageId]
  )
  const page = pageRef?.deref()

  React.useEffect(() => {
    const focusOut = () => store.emit(DW.workspaceFocusLost())
    const key = Events.listen(Globals.window, "blur", focusOut)
    return () => Events.unlistenByKey(key)
  }, [])

  React.useEffect(() => {
    store.emit(DW.initializePage(fileId, pageId))
    return () => store.emit(DW.finalizePage(fileId, pageId))
  }, [fileId, pageId])

  if (page != null) {
    return (
      <WorkspaceContent
        file={file}
        page={page}
        wglobal={wglobal}
        layout={layout}
      />
    )
  }

  return <WorkspaceLoader/>
}

interface WorkspaceProps {
  teamId: string
  projectId: string
  fileId: string
  pageId: string
  layoutName: string
}

export const Workspace: React.FC<WorkspaceProps> = React.memo((props) => {
  const {teamId, projectId, fileId, pageId, layoutName} = props

  const fileIdMemo = Hooks.useEqualMemo(fileId)
  const pageIdMemo = Hooks.useEqualMemo(pageId)

  const layout = refs.workspaceLayout?.deref()
  const wglobal = refs.workspaceGlobal?.deref()

  const teamRef = React.useMemo(
    () => makeTeamRef(teamId),
    [teamId]
  )
  const fileRef = React.useMemo(
    () => makeFileRef(fileId),
    [fileId]
  )

  const team = teamRef?.deref()
  const file = fileRef?.deref()

  const fileLoaded = file?.get ? file.get("::has-data") : file?.["::has-data"]

  const fileName = file?.name
  const permissions = team?.permissions

  const readOnlyRef = refs.workspaceReadOnly?.deref()
  const readOnly = readOnlyRef || !(permissions?.canEdit)

  const designTokens = Features.useFeature("design-tokens/v1")

  const wasmRendererEnabled = Features.useFeature("render-wasm/v1")

  const [firstFrameRendered, setFirstFrameRendered] = React.useState(false)

  const backgroundColor = wglobal?.backgroundColor

  React.useEffect(() => {
    store.emit(DPS.initializePersistence(), DPL.updatePluginsPermissionsPeek())
  }, [])

  React.useEffect(() => {
    store.emit(DW.initializeWorkspaceLayout(layoutName))
  }, [layoutName])

  React.useEffect(() => {
    if (fileName) {
      DOM.setHtmlTitle(_tr("title.workspace", fileName))
    }
  }, [fileName])

  React.useEffect(() => {
    store.emit(DW.initializeWorkspace(teamId, fileId))
    return () => store.emit(DPS.forcePersist(), DW.finalizeWorkspace(teamId, fileId))
  }, [teamId, fileId])

  React.useEffect(() => {
    if (fileLoaded && !pageId) {
      store.emit(DCM.goToWorkspace({fileId, [RT.replace]: true}))
    }
  }, [fileId, pageId, fileLoaded])

  React.useEffect(() => {
    setFirstFrameRendered(false)
  }, [fileId, pageId])

  React.useEffect(() => {
    const handleWasmRender = () => setFirstFrameRendered(true)
    const listenerKey = Events.listen(Globals.document, "penpot:wasm:render", handleWasmRender)
    return () => Events.unlistenByKey(listenerKey)
  }, [])

  return (
    <Ctx.CurrentProjectIdContext.Provider value={projectId}>
      <Ctx.CurrentFileIdContext.Provider value={fileId}>
        <Ctx.CurrentPageIdContext.Provider value={pageId}>
          <Ctx.DesignTokensContext.Provider value={designTokens}>
            <Ctx.WorkspaceReadOnlyContext.Provider value={readOnly}>
              <ModalContainer/>
              <section
                className="workspace"
                style={{
                  backgroundColor,
                  touchAction: "none",
                  position: "relative",
                }}
              >
                <ContextMenu/>

                {fileLoaded && pageId && (
                  <WorkspaceInner
                    pageId={pageId}
                    fileId={fileId}
                    file={file}
                    wglobal={wglobal}
                    layout={layout}
                  />
                )}

                {(!fileLoaded || !pageId) && (
                  <WorkspaceLoader/>
                )}

                {wasmRendererEnabled && !fileLoaded && !firstFrameRendered && (
                  <WorkspaceLoader/>
                )}
              </section>
            </Ctx.WorkspaceReadOnlyContext.Provider>
          </Ctx.DesignTokensContext.Provider>
        </Ctx.CurrentPageIdContext.Provider>
      </Ctx.CurrentFileIdContext.Provider>
    </Ctx.CurrentProjectIdContext.Provider>
  )
})

export const WorkspacePage: React.FC<any> = (props) => {
  return <Workspace {...props}/>
}
