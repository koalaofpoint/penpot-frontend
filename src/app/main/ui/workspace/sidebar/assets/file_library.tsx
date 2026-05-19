// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react"
import { useCallback, useMemo } from "react"
import * as d from "app.common.data"
import * as dm from "app.common.data.macros"
import * as cfv from "app.common.files.variant"
import * as ctc from "app.common.types.component"
import * as ctkl from "app.common.types.components-list"
import * as ev from "app.main.data.event"
import * as dw from "app.main.data.workspace"
import * as dwl from "app.main.data.workspace.libraries"
import * as dwsh from "app.main.data.workspace.shapes"
import * as dwu from "app.main.data.workspace.undo"
import * as refs from "app.main.refs"
import * as rt from "app.main.router"
import * as st from "app.main.store"
import { TitleBar } from "app.main.ui.components.title-bar"
import { currentTeamId } from "app.main.ui.context"
import * as deprecatedIcon from "app.main.ui.icons"
import { ColorsSection } from "app.main.ui.workspace.sidebar.assets.colors"
import * as cmm from "app.main.ui.workspace.sidebar.assets.common"
import { ComponentsSection } from "app.main.ui.workspace.sidebar.assets.components"
import { TypographiesSection } from "app.main.ui.workspace.sidebar.assets.typographies"
import * as dom from "app.util.dom"
import { tr } from "app.util.i18n"
import * as kbd from "app.util.keyboard"
import * as str from "cuerdas.core"
import * as l from "okulary.core"
import * as ptk from "potok.v2/core"

const openStatusRef = l.derived(l.in(["workspace-assets", "open-status"]), st.state)
const selectedRef = l.in(["workspace-assets", "selected"]).derive(st.state)

function createFileRef(libraryId: string) {
  return l.derived((state: any) => dm.getIn(state, ["files", libraryId, "data"]), st.state)
}

interface UseLibraryRefResult {
  library: any
}

function useLibraryRef(fileId: string): UseLibraryRefResult {
  const libraryRef = useMemo(() => createFileRef(fileId), [fileId])
  return { library: libraryRef.deref() }
}

function useSelected(fileId: string) {
  const selectedRef = useMemo(() => l.key(fileId).derive(selectedRef), [fileId])
  return selectedRef.deref()
}

interface FileLibraryTitleProps {
  isOpen: boolean
  isLocal: boolean
  fileId: string
  pageId: string
  fileName: string
}

export const FileLibraryTitle: React.FC<FileLibraryTitleProps> = ({ isOpen, isLocal, fileId, pageId, fileName }) => {
  const router = refs.router.deref()
  const teamId = React.useContext(currentTeamId)
  const url = rt.resolve(router, "workspace", { "team-id": teamId, "file-id": fileId, "page-id": pageId })

  const toggleOpen = useCallback(() => {
    st.emit!(dw.setAssetsSectionOpen(fileId, "library", !isOpen))
  }, [fileId, isOpen])

  const onClick = useCallback((ev: React.MouseEvent) => {
    dom.stopPropagation(ev)
    st.emit!(ptk.dataEvent(ev.event, { name: "navigate-to-library-file" }))
  }, [])

  return (
    <div className={css("library-title", isOpen ? "open" : undefined)}>
      <TitleBar
        collapsable
        collapsed={!isOpen}
        allClickable
        onCollapsed={toggleOpen}
        title={isLocal ? (
          <div className={css("special-title")}>{tr("workspace.assets.local-library")}</div>
        ) : (
          <div className={css("special-title")}>{fileName}</div>
        )}
      />
      {!isLocal && (
        <span title={tr("workspace.assets.open-library")}>
          <a
            className={css("file-link")}
            href={`#${url}`}
            target="_blank"
            onClick={onClick}
          >
            {deprecatedIcon.openLink}
          </a>
        </span>
      )}
    </div>
  )
}

function extendSelected(selected: any, type: string, assetGroups: any, assetId: string, fileId: string) {
  const flattenGroups = (groups: any): any[] => {
    const result: any[] = []
    const rootItems = groups[""] || []
    result.push(...rootItems)

    const nested = Object.entries(groups).filter(([key]) => key !== "")
    for (const [, value] of nested) {
      result.push(...flattenGroups(value))
    }
    return result
  }

  const selectedType = selected[type]
  if (selectedType.length === 0) {
    st.emit!(dw.selectSingleAsset(fileId, assetId, type))
  } else {
    const allAssets = flattenGroups(assetGroups)
    const clickIndex = allAssets.findIndex((a: any) => a.id === assetId)
    const firstIndex = selectedType.map((asset: any) => allAssets.findIndex((a: any) => a.id === asset)).sort()[0]

    const minIndex = Math.min(firstIndex, clickIndex)
    const maxIndex = Math.max(firstIndex, clickIndex)
    const ids = new Set(
      allAssets
        .slice(minIndex, maxIndex + 1)
        .map((a: any) => a.id)
    )

    st.emit!(dw.selectAssets(fileId, ids, type))
  }
}

interface FileLibraryContentProps {
  file: any
  isLocal: boolean
  isLoaded: boolean
  openStatusRef: any
  onClearSelection: () => void
  filters: any
  colors: any[]
  typographies: any[]
  components: any[]
  countVariants: (variantId: string) => number
}

export const FileLibraryContent: React.FC<FileLibraryContentProps> = ({
  file,
  isLocal,
  isLoaded,
  openStatusRef,
  onClearSelection,
  filters,
  colors,
  typographies,
  components,
  countVariants,
}) => {
  const openStatus = openStatusRef.deref()
  const fileId = file.id

  const filtersSection = filters?.section
  const hasFiltersTerm = !str.isEmpty(filters?.term)

  const reverseSort = filters?.ordering === ":desc"
  const listingThumbs = filters?.listStyle === ":thumbs"

  const selected = useSelected(fileId)

  const showComponents =
    (filtersSection === "all" || filtersSection === "components") &&
    (components.length > 0 || !hasFiltersTerm)

  const showColors =
    (filtersSection === "all" || filtersSection === "colors") &&
    (colors.length > 0 || !hasFiltersTerm)

  const showTypography =
    (filtersSection === "all" || filtersSection === "typographies") &&
    (typographies.length > 0 || !hasFiltersTerm)

  const forceOpenComponents = hasFiltersTerm && components.length > 60
  const forceOpenColors = hasFiltersTerm && colors.length > 60
  const forceOpenTypographies = hasFiltersTerm && typographies.length > 60

  const onAssetClick = useCallback(
    (assetType: string, assetGroups: any, event: React.MouseEvent, assetId: string) => {
      if (kbd.mod(event)) {
        dom.stopPropagation(event)
        st.emit!(dw.toggleSelectedAssets(fileId, assetId, assetType))
        return true
      }

      if (kbd.shift(event)) {
        dom.stopPropagation(event)
        extendSelected(selected, assetType, assetGroups, assetId, fileId)
        return true
      }
      return false
    },
    [fileId, selected]
  )

  const onComponentClick = useCallback(
    (assetGroups: any, event: React.MouseEvent, assetId: string) => onAssetClick("components", assetGroups, event, assetId),
    [onAssetClick]
  )

  const onColorsClick = useCallback(
    (assetGroups: any, event: React.MouseEvent, assetId: string) => onAssetClick("colors", assetGroups, event, assetId),
    [onAssetClick]
  )

  const onTypographyClick = useCallback(
    (assetGroups: any, event: React.MouseEvent, assetId: string) => onAssetClick("typographies", assetGroups, event, assetId),
    [onAssetClick]
  )

  const deleteComponent = useCallback(
    (componentId: string) => {
      const component = components.find((c) => c.id === componentId)
      if (ctc.isVariant(component)) {
        dwsh.deleteShapes(component.mainInstancePage, new Set([component.variantId]))
      } else {
        dwl.deleteComponent({ id: componentId })
      }
    },
    [components]
  )

  const onAssetsDelete = useCallback(() => {
    const undoId = Symbol()
    st.emit!(dwu.startUndoTransaction(undoId))
    selected.components?.forEach((id: string) => deleteComponent(id))
    selected.graphics?.forEach((id: string) => st.emit!(dwl.deleteMedia({ id })))
    selected.colors?.forEach((id: string) => st.emit!(dwl.deleteColor({ id })))
    selected.typographies?.forEach((id: string) => st.emit!(dwl.deleteTypography(id)))

    if (selected.components?.length || selected.colors?.length || selected.typographies?.length) {
      st.emit!(dwl.syncFile(fileId, fileId))
    }

    st.emit!(dwu.commitUndoTransaction(undoId))
  }, [fileId, selected, deleteComponent])

  return (
    <div className={css("library-content")}>
      {!isLoaded ? (
        <span className={css("loading")}>{tr("labels.loading")}</span>
      ) : (
        <>
          {showComponents && (
            <ComponentsSection
              fileId={fileId}
              isLocal={isLocal}
              components={components}
              isListingThumbs={listingThumbs}
              isOpen={forceOpenComponents || !!openStatus?.components}
              isForceOpen={forceOpenComponents}
              openStatusRef={openStatusRef}
              isReverseSort={reverseSort}
              selected={selected}
              onAssetClick={onComponentClick}
              onAssetsDelete={onAssetsDelete}
              onClearSelection={onClearSelection}
              deleteComponent={deleteComponent}
              countVariants={countVariants}
            />
          )}

          {showColors && (
            <ColorsSection
              fileId={fileId}
              isLocal={isLocal}
              colors={colors}
              isOpen={forceOpenColors || !!openStatus?.colors}
              isForceOpen={forceOpenColors}
              openStatusRef={openStatusRef}
              isReverseSort={reverseSort}
              selected={selected}
              onAssetClick={onColorsClick}
              onAssetsDelete={onAssetsDelete}
              onClearSelection={onClearSelection}
            />
          )}

          {showTypography && (
            <TypographiesSection
              file={file}
              fileId={file.id}
              isLocal={isLocal}
              typographies={typographies}
              isOpen={forceOpenTypographies || !!openStatus?.typographies}
              isForceOpen={forceOpenTypographies}
              openStatusRef={openStatusRef}
              isReverseSort={reverseSort}
              selected={selected}
              onAssetClick={onTypographyClick}
              onAssetsDelete={onAssetsDelete}
              onClearSelection={onClearSelection}
            />
          )}

          {!showComponents && !showColors && !showTypography && (
            <div className={css("asset-title")}>
              <span className={css("no-found-icon")}>{deprecatedIcon.search}</span>
              <span className={css("no-found-text")}>{tr("workspace.assets.not-found")}</span>
            </div>
          )}
        </>
      )}
    </div>
  )
}

interface FileLibraryProps {
  file: any
  isLocal: boolean
  isDefaultOpen: boolean
  filters: any
}

export const FileLibrary: React.FC<FileLibraryProps> = ({ file, isLocal, isDefaultOpen, filters }) => {
  const fileId = file.id
  const fileName = file.name
  const pageId = dm.getIn(file, ["data", "pages", 0])

  const { library } = useLibraryRef(fileId)

  const colors = library?.colors
  const typographies = library?.typographies

  const filtersTerm = filters?.term
  const isLoaded = library !== null

  const filteredColors = useMemo(() => {
    return cmm.applyFilters(Object.values(colors || {}), filters)
  }, [filters, colors])

  const filteredComponents = useMemo(() => {
    const comps = ctkl.componentsSeq(library)
    return cmm.applyFilters(comps, filters).filter((c: any) => !cfv.isSecondaryVariant(c, library))
  }, [filters, library])

  const filteredTypographies = useMemo(() => {
    return cmm.applyFilters(Object.values(typographies || {}), filters)
  }, [filters, typographies])

  const openStatusRef = useMemo(() => {
    return l.key(fileId).derive(openStatusRef)
  }, [fileId])

  const openStatus = openStatusRef.deref()

  const forceLibOpen =
    !str.isBlank(filtersTerm) &&
    (filteredColors.length > 60 || filteredComponents.length > 60 || filteredTypographies.length > 60)

  const open =
    openStatus?.library === false
      ? false
      : forceLibOpen || openStatus?.library !== false
        ? forceLibOpen || openStatus?.library || isDefaultOpen
        : false

  const unselectAll = useCallback(() => {
    st.emit!(dw.unselectAllAssets(fileId))
  }, [fileId])

  const variantsCounter = useMemo(() => {
    const grouped = new Map<string, number>()
    for (const comp of ctkl.componentsSeq(library)) {
      const variantId = comp.variantId
      grouped.set(variantId, (grouped.get(variantId) || 0) + 1)
    }
    return grouped
  }, [library])

  const countVariants = useCallback((variantId: string) => variantsCounter.get(variantId) || 0, [variantsCounter])

  return (
    <div className={css("tool-window")} onContextMenu={dom.preventDefault} onClick={unselectAll}>
      <FileLibraryTitle
        fileId={fileId}
        pageId={pageId}
        fileName={fileName}
        isOpen={open}
        isLocal={isLocal}
      />

      {open && (
        <FileLibraryContent
          file={file}
          isLocal={isLocal}
          isLoaded={isLoaded}
          filters={filters}
          colors={filteredColors}
          components={filteredComponents}
          typographies={filteredTypographies}
          onClearSelection={unselectAll}
          openStatusRef={openStatusRef}
          countVariants={countVariants}
        />
      )}
    </div>
  )
}

function css(className: string, ...rest: any[]): string {
  return className
}
