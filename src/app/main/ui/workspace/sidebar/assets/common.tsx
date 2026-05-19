// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useCallback, useMemo, useRef, useState } from "react"
import * as dm from "app.common.data.macros"
import * as cfh from "app.common.files.helpers"
import * as cpn from "app.common.path-names"
import * as thc from "app.common.thumbnails"
import * as ctk from "app.common.types.component"
import * as ctn from "app.common.types.container"
import * as ctf from "app.common.types.file"
import * as ctv from "app.common.types.variant"
import * as cf from "app.config"
import * as ev from "app.main.data.event"
import * as dsh from "app.main.data.helpers"
import * as modal from "app.main.data.modal"
import * as dw from "app.main/data/workspace"
import * as dwl from "app.main.data.workspace.libraries"
import * as dwu from "app/main/data/workspace.undo"
import * as dwv from "app/main/data/workspace/variants"
import * as refs from "app.main.refs"
import { componentSvg, componentSvgThumbnail } from "app.main.render"
import * as st from "app.main.store"
import { ContextMenu } from "app.main.ui.components.context-menu-a11y"
import { TitleBar } from "app.main.ui.components.title-bar"
import { currentFileId, currentPageId } from "app.main.ui.context"
import { Icon } from "app.main.ui.ds.foundations.assets.icon"
import * as array from "app.util.array"
import * as dom from "app.util.dom"
import * as dnd from "app.util.dom.dnd"
import { c, tr } from "app.util.i18n"
import { matchesSearch } from "app.util.strings"
import * as ts from "app.util.timers"
import * as str from "cuerdas/core"

// Contexts
export const AssetsFiltersContext = React.createContext<any>(null)
export const AssetsToggleOrderingContext = React.createContext<any>(null)
export const AssetsToggleListStyleContext = React.createContext<any>(null)

// CSS helpers
const CSS = {
  assetSection: "asset-section",
  opened: "opened",
  assetList: "asset-list",
  assetListItem: "asset-list-item",
  bulletBlock: "bullet-block",
  nameBlock: "name-block",
  defaultName: "default-name",
  defaultNameWithColor: "default-name-with-color",
  titleSpacing: "title-spacing",
  dragCounter: "drag-counter",
  titleName: "title-name",
  titleTokens: "title-tokens",
  titleTokensActive: "title-tokens-active",
  sectionIcon: "section-icon",
  sectionName: "section-name",
  numAssets: "num-assets",
  gridPlaceholder: "grid-placeholder",
  dropSpace: "drop-space",
  colorsGroup: "colors-group",
  componentGroup: "component-group",
  componentItem: "component-item",
  componentItemGrid: "component-item-grid",
  componentItemList: "component-item-list",
  componentItemSelected: "component-item-selected",
  componentItemGridName: "component-item-grid-name",
  componentItemListName: "component-item-list-name",
  componentItemEditing: "component-item-editing",
  componentItemThumbnail: "component-item-thumbnail",
  componentItemListThumbnail: "component-item-list-thumbnail",
  componentItemVariantMark: "component-item-variant-mark",
  componentItemGridVariantMark: "component-item-grid-variant-mark",
  componentItemDraging: "component-item-dragging",
  componentGroupGrid: "component-group-grid",
  componentGroupList: "component-group-list",
  componentGroupPlaceholder: "component-group-placeholder",
  componentGroupDropSpace: "component-group-drop-space",
  componentGroupDropSpaceSmall: "component-group-drop-space-small",
  libraryTitle: "library-title",
  open: "open",
  specialTitle: "special-title",
  fileLink: "file-link",
  typographyItem: "typography-item",
  typographiesGroup: "typographies-group",
  assetsList: "assets-list",
  groupTitleWrapper: "group-title-wrapper",
  groupTitle: "group-title",
  prePath: "pre-path",
  path: "path",
  titleMenu: "title-menu",
  modalOverlay: "modal-overlay",
  modalContainer: "modal-container",
  modalHeader: "modal-header",
  modalTitle: "modal-title",
  modalCloseBtn: "modal-close-btn",
  modalContent: "modal-content",
  inputWrapper: "input-wrapper",
  modalFooter: "modal-footer",
  actionButtons: "action-buttons",
  cancelButton: "cancel-button",
  acceptBtn: "accept-btn",
  globalDisabled: "global/disabled",
  elementName: "element-name",
  dragging: "dragging",
  lazyLoadSentinel: "lazy-load-sentinel",
}

function css(className: string, ..._rest: any[]): string {
  return className
}

function cssCase(classMap: Record<string, boolean | undefined>): string {
  return Object.entries(classMap)
    .filter(([, v]) => v)
    .map(([k]) => k)
    .join(" ")
}

// Apply filters to collection
export function applyFilters(coll: any[], filters: { ordering?: string; term?: string }): any[] {
  const reverse = filters.ordering === "desc"

  let result = [...coll]

  // Filter by term
  if (filters.term && !str.isEmpty(filters.term)) {
    result = result.filter((item) =>
      matchesSearch(item.name || "", filters.term || "") ||
      matchesSearch(item.path || "", filters.term || "") ||
      matchesSearch(item.value || "", filters.term || "")
    )
  }

  // Sort
  result.sort((a, b) => {
    const pathA = str.isEmpty(a.path) ? (reverse ? "z" : "a") : a.path
    const pathB = str.isEmpty(b.path) ? (reverse ? "z" : "a") : b.path

    const nameA = cpn.mergePathItem(pathA, a.name || "")
    const nameB = cpn.mergePathItem(pathB, b.name || "")

    const cmp = str.lower(nameA).localeCompare(str.lower(nameB))
    return reverse ? -cmp : cmp
  })

  return result
}

// Group operations
export function addGroup(asset: any, groupName: string): string {
  return cpn.mergePathItem(cpn.mergePathItem(asset.path, groupName), asset.name)
}

export function renameGroup(asset: any, path: string, lastPath: string): string {
  const basePath = str.slice(asset.path, 0, path.length)
  const splitPath = cpn.splitPath(basePath)
  const newPath = [...splitPath.slice(0, -1), lastPath]
  const joinedPath = cpn.joinPath(newPath)
  const remainingPath = str.slice(asset.path, path.length)
  return cpn.mergePathItem(joinedPath + remainingPath, asset.name)
}

export function ungroup(asset: any, path: string): string {
  const basePath = str.slice(asset.path, 0, path.length)
  const splitPath = cpn.splitPath(basePath)
  const joinedPath = cpn.joinPath(splitPath.slice(0, -1))
  const remainingPath = str.slice(asset.path, path.length)
  return cpn.mergePathItem(joinedPath + remainingPath, asset.name)
}

// Context menu state
export const initialContextMenuState = { open: false, top: 0, left: 0 }

export function openContextMenu(state: any, pos: { x: number; y: number }) {
  return {
    ...state,
    open: true,
    top: pos.y,
    left: pos.x + 10,
  }
}

export function closeContextMenu(state: any) {
  return { ...state, open: false }
}

// Assets Context Menu
interface AssetsContextMenuProps {
  options: Array<{ name: string; id: string; handler?: () => void; title?: string; disabled?: boolean }>
  state: { open: boolean; top: number; left: number }
  onClose: () => void
}

export const AssetsContextMenu: React.FC<AssetsContextMenuProps> = ({ options, state, onClose }) => {
  return (
    <ContextMenu
      show={state.open}
      fixed={state.top !== 0 || state.left !== 0}
      onClose={onClose}
      top={state.top}
      left={state.left}
      options={options}
    />
  )
}

// Section icon helper
export function sectionIcon(section: string): string {
  switch (section) {
    case "colors": return "drop"
    case "components": return "component"
    case "typographies": return "text-palette"
    default: return "add"
  }
}

export function shouldDisplayAssetCount(section: string, assetsCount: number): boolean {
  return section !== "tokens" || (assetsCount > 0 && section === "tokens")
}

// Asset Section Block - wrapper for children with role
interface AssetSectionBlockProps {
  children?: React.ReactNode
}

export const AssetSectionBlock: React.FC<AssetSectionBlockProps> = ({ children }) => {
  return <>{children}</>
}

// Asset Section Component
interface AssetSectionProps {
  fileId: string
  title: string
  section: string
  assetsCount: number
  icon?: string
  isOpen?: boolean
  onClick?: () => void
  children?: React.ReactNode
}

export const AssetSection: React.FC<AssetSectionProps> = ({
  fileId,
  title,
  section,
  assetsCount,
  icon,
  isOpen = false,
  onClick,
  children,
}) => {
  const childrenArray = array.normalizeToArray(children).filter(Boolean)

  const buttons = childrenArray.filter(
    (child: any) => (child as any)?.props?.role === "title-button"
  )
  const content = childrenArray.filter(
    (child: any) => (child as any)?.props?.role === "content"
  )

  const onCollapsed = useCallback(() => {
    if (assetsCount > 0) {
      st.emit!(dw.setAssetsSectionOpen(fileId, section, !isOpen))
    }
  }, [fileId, section, isOpen, assetsCount])

  const titleElement = (
    <span className={cssCase({
      [CSS.titleName]: true,
      [CSS.titleTokens]: section === "tokens",
      [CSS.titleTokensActive]: section === "tokens" && assetsCount > 0,
    })}>
      <span className={css(CSS.sectionIcon)}>
        <Icon iconId={icon || sectionIcon(section)} size="s" />
      </span>
      <span className={css(CSS.sectionName)}>{title}</span>
      {shouldDisplayAssetCount(section, assetsCount) && (
        <span className={css(CSS.numAssets)}>{assetsCount}</span>
      )}
    </span>
  )

  return (
    <div
      className={cssCase({
        [CSS.assetSection]: true,
        [CSS.opened]: assetsCount > 0 && isOpen,
      })}
      onClick={onClick}
    >
      <TitleBar
        collapsable={assetsCount > 0}
        collapsed={!isOpen}
        allClickable
        onCollapsed={onCollapsed}
        addIconGap={assetsCount === 0}
        title={titleElement}
      />
      {buttons}
      {assetsCount > 0 && isOpen && (
        <div className={css(CSS.titleSpacing, isOpen ? CSS.opened : undefined)}>
          {content}
        </div>
      )}
    </div>
  )
}

// Create assets group helper
export function createAssetsGroup(
  rename: (id: string, newName: string) => void,
  componentsToGroup: any[],
  groupName: string
) {
  const undoId = Symbol()
  st.emit!(dwu.startUndoTransaction(undoId))
  componentsToGroup.forEach((comp) => {
    rename(comp.id, addGroup(comp, groupName))
  })
  st.emit!(dwu.commitUndoTransaction(undoId))
}

// Drop asset handlers
export function onDropAsset(
  event: React.DragEvent,
  asset: any,
  draggingRef: React.MutableRefObject<boolean>,
  selected: Set<string>,
  selectedFull: any[],
  selectedPaths: Set<string>,
  rename: (id: string, newName: string) => void
) {
  if (dnd.fromChild(event)) return

  draggingRef.current = false

  if (selected.has(asset.id)) return
  if (!Array.from(selectedPaths).every((p) => p === asset.path)) return

  const componentsToGroup = [...selectedFull, asset]
  const createTypedAssetsGroup = (components: any[]) =>
    createAssetsGroup(rename, components, "")

  modal.show!("name-group-dialog", { accept: createTypedAssetsGroup })
}

export function onDragEnterAsset(
  event: React.DragEvent,
  asset: any,
  draggingRef: React.MutableRefObject<boolean>,
  selected: Set<string>,
  selectedPaths: Set<string>
) {
  if (dnd.fromChild(event)) return
  if (!Array.from(selectedPaths).every((p) => p === asset.path)) return
  if (selected.has(asset.id)) return

  draggingRef.current = true
}

export function onDragLeaveAsset(
  event: React.DragEvent,
  draggingRef: React.MutableRefObject<boolean>
) {
  if (dnd.fromChild(event)) return
  draggingRef.current = false
}

// Counter element for drag
export function createCounterElement(assetCount: number): HTMLElement {
  const counterEl = dom.createElement("div")
  dom.setProperty!(counterEl, "class", css(CSS.dragCounter))
  dom.setText!(counterEl, tr("workspace.assets.sidebar.components", c(assetCount)))
  return counterEl
}

// Set drag image helper
export function setDragImage(event: React.DragEvent, itemRef: React.RefObject<HTMLElement>, numSelected: number) {
  const offset = dom.getOffsetPosition(dom.eventToNativeEvent(event))
  const itemEl = (itemRef as any).current
  const counterEl = createCounterElement(numSelected)

  dom.appendChild!(itemEl, counterEl)
  dnd.setDragImage!(event, itemEl, offset.x, offset.y)

  ts.raf(() => {
    if (dom.child(counterEl, itemEl)) {
      dom.removeChild!(itemEl, counterEl)
    }
  })
}

// Asset drag start handler
export function onAssetDragStart(
  event: React.DragEvent,
  fileId: string,
  asset: any,
  selected: Set<string>,
  itemRef: React.RefObject<HTMLElement>,
  assetType: string,
  onDragStart: (asset: any, event: React.DragEvent) => void
) {
  const idAsset = asset.id
  const numSelected = selected.has(idAsset) ? selected.size : 1

  if (!selected.has(idAsset)) {
    st.emit!(dw.unselectAllAssets(fileId), dw.toggleSelectedAssets(fileId, idAsset, assetType))
  }

  onDragStart(asset, event)

  if (numSelected > 1) {
    setDragImage(event, itemRef, numSelected)
  }
}

// Group drag handlers
export function onDragEnterAssetGroup(
  event: React.DragEvent,
  draggingRef: React.MutableRefObject<boolean>,
  prefix: string,
  selectedPaths: Set<string>
) {
  dom.stopPropagation(event)
  if (dnd.fromChild(event)) return
  if (!Array.from(selectedPaths).every((p) => p === prefix)) return
  draggingRef.current = true
}

export function onDropAssetGroup(
  event: React.DragEvent,
  draggingRef: React.MutableRefObject<boolean>,
  prefix: string,
  selectedPaths: Set<string>,
  selectedFull: any[],
  rename: (id: string, newName: string) => void
) {
  dom.stopPropagation(event)
  if (dnd.fromChild(event)) return

  draggingRef.current = false
  if (!Array.from(selectedPaths).every((p) => p === prefix)) return

  selectedFull.forEach((targetAsset) => {
    st.emit!(rename(targetAsset.id, cpn.mergePathItem(prefix, targetAsset.name)))
  })
}

// Component Item Thumbnail
interface ComponentItemThumbnailProps {
  fileId: string
  rootShape: any
  component: any
  container: any
  className?: string
  isHidden?: boolean
}

export const ComponentItemThumbnail: React.FC<ComponentItemThumbnailProps> = ({
  fileId,
  rootShape,
  component,
  container,
  className,
  isHidden = false,
}) => {
  const pageId = component.mainInstancePage
  const rootId = component.mainInstanceId
  const [retry, setRetry] = useState(0)

  const objectId = thc.fmtObjectId(fileId, pageId, rootId, "component")
  const thumbnailUriRef = useMemo(() => refs.workspaceThumbnailById(objectId), [fileId, pageId, rootId])
  const thumbnailUri = thumbnailUriRef?.deref()

  const onError = useCallback(() => {
    if (retry < 3) {
      setRetry((r) => r + 1)
    }
  }, [retry])

  if (thumbnailUri && cf.flags.has("component-thumbnails")) {
    return (
      <componentSvgThumbnail
        thumbnailUri={thumbnailUri}
        className={className}
        onError={onError}
        rootShape={rootShape}
        objects={container.objects}
        showGrids={true}
      />
    )
  }

  return (
    <componentSvg
      rootShape={rootShape}
      className={className}
      objects={container.objects}
      showGrids={true}
      isHidden={isHidden}
    />
  )
}

// Generate components menu entries
export function generateComponentsMenuEntries(
  shapes: any[],
  options: { forDesignTab?: boolean } = {}
): Array<{ title: string; action: () => void; shortcut?: string }> {
  const { forDesignTab = false } = options

  const multi = shapes.length > 1
  const copies = shapes.filter(ctk.inComponentCopy)

  const currentFileId = React.useContext(currentFileId)
  const currentPageId = React.useContext(currentPageId)
  const libraries = refs.files.deref()
  const currentFile = libraries[currentFileId]

  const objects = dsh.getPage(currentFile?.data, currentPageId)?.objects

  const findComponent = (shape: any, includeDeleted: boolean) =>
    ctf.resolveComponent(shape, currentFile, libraries, { includeDeleted })

  const localOrExists = (shape: any) => {
    const libraryId = shape.componentFile
    return libraryId === currentFileId || !!libraries[libraryId]
  }

  const restorableCopies = copies.filter(
    (copy) => !findComponent(copy, false) && localOrExists(copy)
  )

  const touchedNotDangling = copies.filter(
    (copy) => cfh.componentTouched(objects, copy.id) && findComponent(copy, false)
  )
  const canResetOverrides = touchedNotDangling.length > 0

  const shape = shapes[0]
  const shapeId = shape.id

  const mainInstance = ctk.mainInstance(shape)
  const variantContainer = ctk.isVariantContainer(shape)
  const componentId = shape.componentId
  const variantId = shape.variantId
  const libraryId = shape.componentFile

  const localComponent = libraryId === currentFileId
  const component = findComponent(shape, false)
  const lacksAnnotation = !component?.annotation
  const isDangling = !component

  const canShowComponent = !multi && !mainInstance && !isDangling
  const canUpdateMain = !multi && !isDangling && !mainInstance &&
    !ctn.hasAnyCopyParent(objects, shape) &&
    cfh.componentTouched(objects, shapeId)

  const canDetach = copies.length > 0 &&
    copies.every((copy) => !ctn.hasAnyCopyParent(objects, copy))

  const sameVariant = ctv.sameVariant(shapes)

  const isRestorableVariant = (shape: any) => {
    const component = findComponent(shape, true)
    const main = ctk.getDeletedComponentRoot(component)
    const objects = dm.getIn(libraries, [
      shape.componentFile,
      "data",
      "pages-index",
      component.mainInstancePage,
      "objects",
    ])
    const parent = objects?.[main?.parentId]
    return !!(component?.deleted && ctk.isVariant(component) && parent)
  }

  const restorableVariants = restorableCopies.every(isRestorableVariant)

  const doDetachComponent = () => st.emit!(dwl.detachComponents(copies.map((c) => c.id)))
  const doResetComponent = () => st.emit!(dwl.resetComponents(touchedNotDangling.map((c) => c.id)))

  const doUpdateComponentSync = () => st.emit!(dwl.updateComponentSync(shapeId, libraryId))

  const doUpdateRemoteComponent = () => {
    st.emit!(modal.show({
      type: "confirm",
      message: "",
      title: tr("modals.update-remote-component.message"),
      hint: tr("modals.update-remote-component.hint"),
      cancelLabel: tr("modals.update-remote-component.cancel"),
      acceptLabel: tr("modals.update-remote-component.accept"),
      acceptStyle: "primary",
      onAccept: doUpdateComponentSync,
    }))
  }

  const doUpdateComponent = localComponent ? doUpdateComponentSync : doUpdateRemoteComponent

  const doShowInAssets = () => {
    const compId = variantContainer
      ? shapes[0]?.shapes?.map((sId: string) => objects[sId])?.[0]?.componentId
      : componentId
    if (compId) st.emit!(dw.showComponentInAssets(compId))
  }

  const doCreateAnnotation = () => st.emit!(dw.setAnnotationsIdForCreate(shapeId))

  const doAddVariant = () => {
    if (ctk.isVariant(shape)) {
      st.emit!(ev.event({ name: "add-new-variant", origin: forDesignTab ? "workspace:design-tab-menu-variant" : "workspace:context-menu-variant" }))
      st.emit!(dwv.addNewVariant(shapeId))
    } else {
      st.emit!(ev.event({ name: "transform-in-variant", origin: forDesignTab ? "workspace:design-tab-menu" : "workspace:context-menu" }))
      st.emit!(dwv.transformInVariant(shapeId))
    }
  }

  const doAddNewProperty = () => {
    st.emit!(ev.event({ name: "add-new-property", origin: "workspace:design-tab-menu-variant" }))
    st.emit!(dwv.addNewProperty(variantId, { propertyValue: "Value 1", editing: true }))
  }

  const doShowLocalComponent = () => st.emit!(dwl.goToLocalComponent("id", componentId))

  const doShowRemoteComponent = (updateLayout?: boolean) => {
    if (component) {
      st.emit!(dwl.goToComponentFile(libraryId, component, updateLayout))
    }
  }

  const doShowComponent = (_: any, updateLayout?: boolean) => {
    st.emit!(dw.hideContextMenu)
    if (localComponent) {
      doShowLocalComponent()
    } else {
      doShowRemoteComponent(updateLayout)
    }
  }

  const doRestoreComponent = () => {
    const compsToRestore = restorableCopies.reduce((acc: Record<string, string>, { componentId, componentFile }: any) => {
      acc[componentId] = componentFile
      return acc
    }, {} as Record<string, string>)

    st.emit!(dwl.restoreComponents(compsToRestore))

    if (Object.keys(compsToRestore).length === 1) {
      ts.schedule(1000, () => doShowComponent(null, true))
    }
  }

  const menuEntries: Array<{ title?: string; action?: () => void; shortcut?: string; title?: string }> = []

  if ((!multi && (variantContainer || mainInstance)) || (multi && sameVariant)) {
    menuEntries.push({ title: tr("workspace.shape.menu.show-in-assets"), action: doShowInAssets })
  }

  if (!multi && mainInstance && localComponent && lacksAnnotation) {
    menuEntries.push({ title: tr("workspace.shape.menu.create-annotation"), action: doCreateAnnotation })
  }

  if (canDetach) {
    menuEntries.push({
      title: copies.length > 1 ? tr("workspace.shape.menu.detach-instances-in-bulk") : tr("workspace.shape.menu.detach-instance"),
      action: doDetachComponent,
      shortcut: "detach-component",
    })
  }

  if (canResetOverrides) {
    menuEntries.push({ title: tr("workspace.shape.menu.reset-overrides"), action: doResetComponent })
  }

  if (restorableCopies.length > 0) {
    menuEntries.push({
      title: restorableVariants ? tr("workspace.shape.menu.restore-variant") : tr("workspace.shape.menu.restore-main"),
      action: doRestoreComponent,
    })
  }

  if (canShowComponent) {
    menuEntries.push({ title: tr("workspace.shape.menu.show-main"), action: doShowComponent })
  }

  if (canUpdateMain) {
    menuEntries.push({ title: tr("workspace.shape.menu.update-main"), action: doUpdateComponent })
  }

  if ((!multi || sameVariant) && mainInstance) {
    menuEntries.push({
      title: tr("workspace.shape.menu.add-variant"),
      shortcut: "create-component-variant",
      action: doAddVariant,
    })
  }

  if (sameVariant && mainInstance && variantId && forDesignTab) {
    menuEntries.push({ title: tr("workspace.shape.menu.add-variant-property"), action: doAddNewProperty })
  }

  return menuEntries.filter((entry) => entry.title && entry.action)
}