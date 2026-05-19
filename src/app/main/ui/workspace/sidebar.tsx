// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react"
import { useCallback, useState, useMemo, useRef, useEffect } from "react"
import * as dm from "app.common.data.macros"
import * as ctob from "app.common.types.tokens-lib"
import * as cf from "app.config"
import { leftSidebarDefaultMaxWidth, leftSidebarDefaultWidth, rightSidebarDefaultMaxWidth, rightSidebarDefaultWidth } from "app.main.constants"
import * as dcm from "app.main.data.common"
import * as ev from "app.main.data.event"
import * as sd from "app.main.data.style-dictionary"
import * as ts from "app.main.data.tokenscript"
import * as dw from "app.main.data.workspace"
import * as features from "app.main.features"
import * as refs from "app.main.refs"
import * as st from "app.main.store"
import { sidebar as sidebarContext, activeTokensByType as activeTokensByTypeContext } from "app.main.ui.context"
import { IconButton } from "app.main.ui.ds.buttons.icon-button"
import * as i from "app.main.ui.ds.foundations.assets.icon"
import { TabSwitcher } from "app.main.ui.ds.layout.tab-switcher"
import { usePersistedState, useResizeHook } from "app.main.ui.hooks"
import { CommentsSidebar } from "app.main.ui.workspace.comments"
import { LeftHeader } from "app.main.ui.workspace.left-header"
import { RightHeader } from "app.main.ui.workspace.right-header"
import { AssetsToolbox } from "app.main.ui.workspace.sidebar.assets"
import { DebugPanel } from "app.main.ui.workspace.sidebar.debug"
import { DebugShapeInfo } from "app.main.ui.workspace.sidebar.debug-shape-info"
import { HistoryToolbox } from "app.main.ui.workspace.sidebar.history"
import { LayersToolbox } from "app.main.ui.workspace.sidebar.layers"
import { OptionsToolbox } from "app.main.ui.workspace.sidebar.options"
import { ShortcutsContainer } from "app.main.ui.workspace.sidebar.shortcuts"
import { Sitemap } from "app.main.ui.workspace.sidebar.sitemap"
import { VersionsToolbox } from "app.main.ui.workspace.sidebar.versions"
import { TokensSidebarTab } from "app.main.ui.workspace.tokens.sidebar"
import { tr } from "app.util.i18n"
import * as ptk from "potok.v2/core"

const toggleCollapseLeftSidebar = () => st.emit!(dw.toggleLayoutFlag("collapse-left-sidebar"))

interface CollapseButtonProps {
  // No props needed
}

export const CollapseButton: React.FC<CollapseButtonProps> = () => {
  return (
    <button
      className={css("collapse-sidebar-button")}
      onClick={toggleCollapseLeftSidebar}
    >
      <Icon iconId={i.arrow} size="s" ariaLabel={tr("workspace.sidebar.collapse")} />
    </button>
  )
}

interface CollapsedButtonProps {
  // No props needed
}

export const CollapsedButton: React.FC<CollapsedButtonProps> = () => {
  return (
    <div id="left-sidebar-aside" data-width="0" className={css("collapsed-sidebar")}>
      <div className={css("collapsed-title")}>
        <button
          className={css("collapsed-button")}
          title={tr("workspace.sidebar.expand")}
          onClick={toggleCollapseLeftSidebar}
        >
          <Icon iconId={i.arrow} size="s" ariaLabel={tr("workspace.sidebar.expand")} />
        </button>
      </div>
    </div>
  )
}

interface LayersContentProps {
  width: number
  layout: any
}

export const LayersContent: React.FC<LayersContentProps> = ({ width, layout }) => {
  const { onPointerDown, onLostPointerCapture, onPointerMove, height } = useResizeHook("sitemap", 200, 38, "0.6", "y", false, null)

  const sitemapCollapsedRef = usePersistedState<boolean>("sitemap-collapsed", false)
  const sitemapCollapsed = sitemapCollapsedRef.current
  const onToggleSitemapCollapsed = useCallback(() => {
    sitemapCollapsedRef.current = !sitemapCollapsedRef.current
  }, [sitemapCollapsedRef])

  const sitemapHeight = sitemapCollapsed ? 32 : height

  return (
    <article className={css("layers-tab")} style={{ "--height": `${height}px` } as any}>
      <Sitemap layout={layout} height={sitemapHeight} collapsed={sitemapCollapsed} onToggleCollapsed={onToggleSitemapCollapsed} />

      {!sitemapCollapsed && (
        <div
          className={css("resize-area-horiz")}
          onPointerDown={onPointerDown}
          onLostPointerCapture={onLostPointerCapture}
          onPointerMove={onPointerMove}
        >
          <div className={css("resize-handle-horiz")} />
        </div>
      )}

      <LayersToolbox sizeParent={width} />
    </article>
  )
}

interface IconProps {
  iconId: any
  size: string
  ariaLabel: string
}

// Dummy Icon component - imported from design system
const Icon: React.FC<IconProps> = ({ iconId, size, ariaLabel }) => {
  return <span aria-label={ariaLabel}>{iconId}</span>
}

interface LeftSidebarProps {
  layout: any
  file: any
  pageId: string
  tokensLib: any
  activeTokens: any
  resolvedActiveTokens: any
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({ layout, file, pageId, tokensLib, activeTokens, resolvedActiveTokens }) => {
  const optionsMode = refs.optionsModeGlobal.deref()
  const project = refs.project.deref()
  const fileId = file.id

  const designTokens = features.useFeature("design-tokens/v1")
  const modeInspect = optionsMode === ":inspect"
  const shortcuts = layout?.hasOwnProperty("shortcuts")
  const showDebug = layout?.hasOwnProperty("debug-panel")

  const section = (() => {
    if (modeInspect || layout?.hasOwnProperty("layers")) return "layers"
    if (layout?.hasOwnProperty("assets")) return "assets"
    if (layout?.hasOwnProperty("tokens")) return "tokens"
    return "layers"
  })()

  const { onPointerDown, onLostPointerCapture, onPointerMove, parentRef, width } = useResizeHook(
    "left-sidebar",
    leftSidebarDefaultWidth,
    leftSidebarDefaultWidth,
    leftSidebarDefaultMaxWidth,
    "x",
    false,
    "left"
  )

  const onTabChange = useCallback((id: string) => {
    st.emit!(dcm.goToWorkspace("layout", id))
    if (id === "tokens") {
      st.emit!(ptk.event(ev.event, { name: "open-tokens-tab" }))
    }
  }, [])

  const tabs = useMemo(() => {
    if (modeInspect) {
      return [{ label: tr("workspace.sidebar.layers"), id: "layers" }]
    }
    if (designTokens) {
      return [
        { label: tr("workspace.sidebar.layers"), id: "layers" },
        { label: tr("workspace.toolbar.assets"), id: "assets" },
        { label: "Tokens", id: "tokens" }
      ]
    }
    return [
      { label: tr("workspace.sidebar.layers"), id: "layers" },
      { label: tr("workspace.toolbar.assets"), id: "assets" }
    ]
  }, [modeInspect, designTokens])

  const asideClass = css(
    "left-settings-bar",
    "global/two-row" as any,
    width <= 300 ? true : undefined,
    "global/three-row" as any,
    width > 300 && width <= 400 ? true : undefined,
    "global/four-row" as any,
    width > 400 ? true : undefined
  )

  const tabsActionButton = useMemo(() => <CollapseButton />, [])

  return (
    <sidebarContext.Provider value="left">
      <aside
        ref={parentRef as any}
        id="left-sidebar-aside"
        data-testid="left-sidebar"
        data-width={String(width)}
        className={asideClass}
        style={{ "--left-sidebar-width": `${width}px` } as any}
      >
        <LeftHeader file={file} layout={layout} project={project} pageId={pageId} className={css("left-header")} />

        <div
          onPointerDown={onPointerDown}
          onLostPointerCapture={onLostPointerCapture}
          onPointerMove={onPointerMove}
          className={css("resize-area")}
        />

        {shortcuts ? (
          <ShortcutsContainer className={css("settings-bar-content")} />
        ) : showDebug ? (
          <DebugPanel className={css("settings-bar-content")} />
        ) : (
          <div className={css("settings-bar-content")}>
            <TabSwitcher
              tabs={tabs}
              default="layers"
              selected={section}
              onChange={onTabChange}
              className={css("left-sidebar-tabs")}
              actionButtonPosition="start"
              actionButton={tabsActionButton}
            />

            {section === "assets" && <AssetsToolbox size={width - 58} fileId={fileId} />}
            {section === "tokens" && (
              <TokensSidebarTab
                tokensLib={tokensLib}
                activeTokens={activeTokens}
                resolvedActiveTokens={resolvedActiveTokens}
              />
            )}
            {section === "layers" && <LayersContent layout={layout} width={width} />}
          </div>
        )}
      </aside>
    </sidebarContext.Provider>
  )
}

const onCloseDocumentHistory = () => {
  st.emit!(dw.removeLayoutFlag("document-history"))
}

interface HistoryContentProps {
  // No props needed
}

export const HistoryContent: React.FC<HistoryContentProps> = () => {
  const selectedRef = usePersistedState<string>("history-sidebar", "history")
  const selected = selectedRef.current

  const onChangeTab = useCallback((tab: string) => {
    selectedRef.current = tab
  }, [selectedRef])

  const tabs = useMemo(() => [
    { label: tr("workspace.versions.tab.history"), id: "history" },
    { label: tr("workspace.versions.tab.actions"), id: "actions" }
  ], [])

  const button = useMemo(() => (
    <IconButton variant="ghost" ariaLabel={tr("labels.close")} onClick={onCloseDocumentHistory} icon={i.close} />
  ), [])

  return (
    <TabSwitcher
      tabs={tabs}
      selected={selected}
      onChange={onChangeTab}
      className={css("left-sidebar-tabs")}
      actionButtonPosition="end"
      actionButton={button}
    >
      {selected === "history" && (
        <article className={css("history-tab")}>
          <VersionsToolbox />
        </article>
      )}

      {selected === "actions" && (
        <article className={css("versions-tab")}>
          <HistoryToolbox />
        </article>
      )}
    </TabSwitcher>
  )
}

interface RightSidebarProps {
  layout: any
  section: string
  file: any
  pageId: string
  drawingTool: any
  activeTokens: any
}

export const RightSidebar: React.FC<RightSidebarProps> = ({ layout, section, file, pageId, drawingTool, activeTokens }) => {
  const isComments = drawingTool === ":comments"
  const isHistory = layout?.hasOwnProperty("document-history")
  const isInspect = section === ":inspect"
  const dbgShapePanel = false // dbg/enabled? :shape-panel

  const [currentSection, setCurrentSection] = useState("info")

  const canBeExpanded = dbgShapePanel || (!isComments && !isHistory && isInspect && currentSection === ":code")

  const { onPointerDown, onLostPointerCapture, onPointerMove, setWidth, width } = useResizeHook(
    "code",
    rightSidebarDefaultWidth,
    rightSidebarDefaultWidth,
    rightSidebarDefaultMaxWidth,
    "x",
    true,
    "right"
  )

  const onChangeSection = useCallback((s: string) => setCurrentSection(s), [])

  const onExpand = useCallback(() => {
    setWidth(width > rightSidebarDefaultWidth ? rightSidebarDefaultWidth : rightSidebarDefaultMaxWidth)
  }, [width, setWidth])

  const activeTokensByType = useMemo(() => {
    return ctob.groupByType(activeTokens)
  }, [activeTokens])

  return (
    <sidebarContext.Provider value="right">
      <activeTokensByTypeContext.Provider value={activeTokensByType}>
        <aside
          className={css("right-settings-bar", "not-expand" as any, !canBeExpanded, "expanded" as any, width > rightSidebarDefaultWidth)}
          id="right-sidebar-aside"
          data-testid="right-sidebar"
          data-size={String(width)}
          style={{ "--right-sidebar-width": canBeExpanded ? `${width}px` : `${rightSidebarDefaultWidth}px` } as any}
        >
          {canBeExpanded && (
            <div
              className={css("resize-area")}
              onPointerDown={onPointerDown}
              onLostPointerCapture={onLostPointerCapture}
              onPointerMove={onPointerMove}
            />
          )}

          <RightHeader file={file} layout={layout} pageId={pageId} />

          <div className={css("settings-bar-inside")}>
            {dbgShapePanel ? (
              <DebugShapeInfo />
            ) : isComments ? (
              <CommentsSidebar />
            ) : isHistory ? (
              <HistoryContent />
            ) : (
              <OptionsToolbox
                onChangeSection={onChangeSection}
                onExpand={onExpand}
                section={section}
                file={file}
                pageId={pageId}
                layout={layout}
              />
            )}
          </div>
        </aside>
      </activeTokensByTypeContext.Provider>
    </sidebarContext.Provider>
  )
}

interface SidebarProps {
  layout: any
  file: any
  fileId: string
  pageId: string
  section: string
  drawingTool: any
  selected: any
}

export const Sidebar: React.FC<SidebarProps> = ({ layout, file, fileId, pageId, section, drawingTool, selected }) => {
  const tokensLib = refs.tokensLib.deref()

  const activeTokens = useMemo(() => {
    if (tokensLib) {
      return ctob.getTokensInActiveSets(tokensLib)
    }
    return {}
  }, [tokensLib])

  const tokenscript = cf.flags?.has("tokenscript")
  const tokenscriptResolvedActiveTokens = useMemo(() => {
    if (tokenscript) return ts.resolveTokens(activeTokens)
    return null
  }, [tokensLib, tokenscript])

  const resolvedActiveTokens = activeTokens // sd/useResolvedTokens* (activeTokens)

  const collapseLeft = layout?.hasOwnProperty("collapse-left-sidebar")

  return (
    <>
      {collapseLeft ? (
        <CollapsedButton />
      ) : (
        <LeftSidebar
          layout={layout}
          file={file}
          pageId={pageId}
          tokensLib={tokensLib}
          activeTokens={activeTokens}
          resolvedActiveTokens={cf.flags?.has("tokenscript") ? tokenscriptResolvedActiveTokens : resolvedActiveTokens}
        />
      )}
      <RightSidebar
        section={section}
        selected={selected}
        drawingTool={drawingTool}
        layout={layout}
        file={file}
        fileId={fileId}
        pageId={pageId}
        tokensLib={tokensLib}
        activeTokens={resolvedActiveTokens}
      />
    </>
  )
}

function css(className: string, ...rest: any[]): string {
  return className
}
