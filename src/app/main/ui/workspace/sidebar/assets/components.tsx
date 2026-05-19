// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useState, useCallback, useMemo, useRef } from "react"
import * as d from "app/common/data"
import * as dm from "app.common.data.macros"
import * as cpn from "app.common.path-names"
import * as ctc from "app/common.types.component"
import * as ctf from "app/common.types.file"
import * as ev from "app/main.data.event"
import * as modal from "app.main.data.modal"
import * as dw from "app/main/data/workspace"
import * as dwl from "app/main.data.workspace.libraries"
import * as dwm from "app/main.data.workspace.media"
import * as dwu from "app/main/data.workspace.undo"
import * as dwv from "app/main.data.workspace.variants"
import * as refs from "app.main.refs"
import * as st from "app/main.store"
import { EditableLabel } from "app.main.ui.components.editable-label"
import { FileUploader } from "app.main.ui.components.file-uploader"
import { RadioButton, RadioButtons } from "app.main.ui.components.radio-buttons"
import { currentWorkspaceReadOnly, AssetsToggleListStyleContext } from "app.main.ui.context"
import { IconButton } from "app.main.ui.ds.buttons.icon-button"
import { Icon, icons } from "app.main.ui.ds.foundations.assets.icon"
import { useVisible } from "app.main.ui.hooks"
import {
  AssetSection,
  AssetSectionBlock,
  AssetsContextMenu,
  closeContextMenu,
  ComponentItemThumbnail,
  initialContextMenuState,
  onDragEnterAsset,
  onDragEnterAssetGroup,
  onDragLeaveAsset,
  onDropAsset,
  onDropAssetGroup,
  onAssetDragStart,
  openContextMenu,
} from "app.main.ui.workspace.sidebar.assets.common"
import { AssetGroupTitle } from "app.main.ui.workspace.sidebar.assets.groups"
import * as dom from "app.util.dom"
import * as dnd from "app.util.dom.dnd"
import { tr } from "app.util.i18n"
import * as str from "cuerdas/core"
import * as l from "okulary.core"
import * as ptk from "potok.v2/core"

const CSS = {
  componentItem: "component-item",
  componentItemGrid: "component-item-grid",
  componentItemList: "component-item-list",
  componentItemSelected: "component-item-selected",
  componentItemGridName: "component-item-grid-name",
  componentItemListName: "component-item-list-name",
  componentItemEditing: "component-item-editing",
  componentItemGridInput: "component-item-grid-input",
  componentItemListInput: "component-item-list-input",
  componentItemGridLabel: "component-item-grid-label",
  componentItemListLabel: "component-item-list-label",
  componentItemThumbnail: "component-item-thumbnail",
  componentItemListThumbnail: "component-item-list-thumbnail",
  componentItemVariantMark: "component-item-variant-mark",
  componentItemGridVariantMark: "component-item-grid-variant-mark",
  componentItemDraging: "component-item-dragging",
  componentGroup: "component-group",
  componentGroupGrid: "component-group-grid",
  componentGroupList: "component-group-list",
  componentGroupPlaceholder: "component-group-placeholder",
  componentGroupDropSpace: "component-group-drop-space",
  componentGroupDropSpaceSmall: "component-group-drop-space-small",
  dragging: "dragging",
  gridPlaceholder: "grid-placeholder",
  dropSpace: "drop-space",
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

// Drag data for component copy tracking
const dragData: { isLocal: boolean; fileId?: string; component?: any; shape?: any } = { isLocal: false }

function setDragData(data: typeof dragData) {
  Object.assign(dragData, data)
}

// Get component root and container
function getComponentRootAndContainer(fileId: string, component: any): [any, any] {
  const data = dm.getIn(refs.files.deref(), [fileId, "data"])
  const rootShape = ctf.getComponentRoot(data, component)
  const container = ctf.getComponentPage(data, component)
  return [rootShape, container]
}

// Count leaves in nested structure
function countLeaves(m: any): number {
  let count = 0
  const traverse = (obj: any) => {
    if (!obj) return
    if (typeof obj === "object") {
      if (Array.isArray(obj)) {
        count += obj.length
      } else {
        Object.values(obj).forEach(traverse)
      }
    }
  }
  traverse(m)
  return count
}

// Components Item Component
interface ComponentsItemProps {
  component: any
  renaming?: string
  isListingThumbs?: boolean
  selected: Set<string>
  fileId: string
  onAssetClick?: (event: React.MouseEvent, id: string) => boolean
  onContextMenu?: (id: string, event: React.MouseEvent) => void
  onDragStart?: (component: any, event: React.DragEvent) => void
  doRename?: (newName: string) => void
  cancelRename?: () => void
  selectedFull?: any[]
  selectedPaths?: Set<string>
  isLocal?: boolean
  numVariants?: number
}

export const ComponentsItem: React.FC<ComponentsItemProps> = React.memo(({
  component,
  renaming,
  isListingThumbs = false,
  selected,
  fileId,
  onAssetClick,
  onContextMenu,
  onDragStart,
  doRename,
  cancelRename,
  selectedFull,
  selectedPaths,
  isLocal = false,
  numVariants,
}) => {
  const itemRef = useRef<HTMLDivElement>(null)
  const [dragging, setDragging] = useState(false)
  const readOnly = React.useContext(currentWorkspaceReadOnly)
  const componentId = component.id

  const visible = useVisible(itemRef, { once: true })
  const isRenaming = renaming === componentId

  const [rootShape, container] = useMemo(
    () => getComponentRootAndContainer(fileId, component),
    [fileId, component]
  )

  const onComponentClick = useCallback(
    (event: React.MouseEvent) => {
      dom.stopPropagation(event)
      if (onAssetClick && !onAssetClick(event, componentId)) {
        st.emit!(dw.unselectAllAssets())
      }
    },
    [componentId, onAssetClick]
  )

  const onComponentDoubleClick = useCallback(
    (event: React.MouseEvent) => {
      dom.stopPropagation(event)
      if (isRenaming) return

      if (isLocal) {
        st.emit!(dwl.goToLocalComponent("id", componentId))
      } else {
        st.emit!(dwl.goToComponentFile(fileId, component, false))
      }
    },
    [isLocal, isRenaming, fileId, component, componentId]
  )

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      if (!isLocal || !dragData.isLocal) return
      onDropAsset(
        event,
        component,
        { current: setDragging } as any,
        selected,
        selectedFull || [],
        selectedPaths || new Set(),
        dwv.renameCompOrVariantAndMain
      )
    },
    [isLocal, component, selected, selectedFull, selectedPaths]
  )

  const onDragEnter = useCallback(
    (event: React.DragEvent) => {
      if (!isLocal || !dragData.isLocal) return
      onDragEnterAsset(
        event,
        component,
        { current: setDragging } as any,
        selected,
        selectedPaths || new Set()
      )
    },
    [isLocal, component, selected, selectedPaths]
  )

  const onDragLeave = useCallback(
    (event: React.DragEvent) => {
      if (!isLocal || !dragData.isLocal) return
      onDragLeaveAsset(event, { current: setDragging } as any)
    },
    [isLocal]
  )

  const onComponentDragStart = useCallback(
    (event: React.DragEvent) => {
      if (readOnly || isRenaming) {
        dom.preventDefault(event)
        return
      }
      onAssetDragStart(event, fileId, component, selected, itemRef, "components", onDragStart || (() => {}))
    },
    [readOnly, isRenaming, fileId, component, selected, onDragStart]
  )

  const onContextMenuHandler = useCallback(
    (event: React.MouseEvent) => {
      onContextMenu?.(componentId, event)
    },
    [componentId, onContextMenu]
  )

  return (
    <div
      ref={itemRef}
      className={cssCase({
        [CSS.componentItem]: true,
        [CSS.componentItemGrid]: isListingThumbs,
        [CSS.componentItemList]: !isListingThumbs,
        [CSS.componentItemSelected]: selected.has(componentId),
      })}
      id={`component-shape-id-${componentId}`}
      draggable={!readOnly && !isRenaming}
      onClick={onComponentClick}
      onDoubleClick={onComponentDoubleClick}
      onContextMenu={onContextMenuHandler}
      onDragStart={onComponentDragStart}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={(e) => dom.preventDefault(e)}
      onDrop={onDrop}
    >
      {rootShape && container && (
        <>
          <div
            className={cssCase({
              [CSS.componentItemGridName]: isListingThumbs,
              [CSS.componentItemListName]: !isListingThumbs,
              [CSS.componentItemEditing]: isRenaming,
            })}
          >
            <EditableLabel
              classInput={cssCase({
                [CSS.componentItemGridInput]: isListingThumbs,
                [CSS.componentItemListInput]: !isListingThumbs,
              })}
              classLabel={cssCase({
                [CSS.componentItemGridLabel]: isListingThumbs,
                [CSS.componentItemListLabel]: !isListingThumbs,
              })}
              value={cpn.mergePathItem(component.path, component.name)}
              tooltip={cpn.mergePathItem(component.path, component.name)}
              displayValue={component.name}
              isEditing={isRenaming}
              onChange={doRename || (() => {})}
              onCancel={cancelRename || (() => {})}
            />
          </div>

          {dragging && <div className={css(CSS.componentItemDraging)} />}

          <ComponentItemThumbnail
            fileId={fileId}
            className={cssCase({
              [CSS.componentItemThumbnail]: true,
              [CSS.componentItemListThumbnail]: !isListingThumbs,
            })}
            rootShape={rootShape}
            component={component}
            container={container}
            isHidden={!visible}
          />

          {ctc.isVariant(component) && (
            <span
              className={cssCase({
                [CSS.componentItemVariantMark]: true,
                [CSS.componentItemGridVariantMark]: isListingThumbs,
              })}
              title={tr("workspace.assets.components.num-variants", numVariants || 0)}
            >
              <Icon iconId={icons.variant} size="s" />
            </span>
          )}
        </>
      )}
    </div>
  )
}, (prev, next) => {
  return prev.component?.id === next.component?.id &&
         prev.renaming === next.renaming &&
         prev.selected === next.selected
})

// Components Group Component
interface ComponentsGroupProps {
  fileId: string
  prefix: string
  groups: any
  openGroups: any
  isForceOpen?: boolean
  renaming?: string
  isListingThumbs?: boolean
  selected: any
  onAssetClick?: (event: React.MouseEvent, id: string) => boolean
  onDragStart?: (component: any, event: React.DragEvent) => void
  doRename?: (newName: string) => void
  cancelRename?: () => void
  onRenameGroup?: (event: React.MouseEvent, path: string, lastPath: string) => void
  onGroup?: (event: React.MouseEvent) => void
  onUngroup?: (path: string) => void
  onContextMenu?: (id: string, event: React.MouseEvent) => void
  onGroupCombineVariants?: (path: string) => void
  selectedFull?: any[]
  isLocal?: boolean
  countVariants?: (variantId: string) => number
}

export const ComponentsGroup: React.FC<ComponentsGroupProps> = ({
  fileId,
  prefix,
  groups,
  openGroups,
  isForceOpen = false,
  renaming,
  isListingThumbs = false,
  selected,
  onAssetClick,
  onDragStart,
  doRename,
  cancelRename,
  onRenameGroup,
  onGroup,
  onUngroup,
  onContextMenu,
  onGroupCombineVariants,
  selectedFull,
  isLocal = false,
  countVariants,
}) => {
  const groupOpen = openGroups[prefix] === false
    ? false
    : isForceOpen || openGroups[prefix] !== undefined
      ? openGroups[prefix]
      : prefix === "" || openGroups[prefix] === true

  const [dragging, setDragging] = useState(false)

  const selectedPaths = useMemo(() => {
    return new Set((selectedFull || []).map((c: any) => c.path || ""))
  }, [selectedFull])

  const components = groups?.[""]?.length ? groups[""] : []

  const canCombine = useMemo(() => {
    if (!isLocal || !groups) return false
    const leaves = countLeaves(groups)
    if (leaves <= 1) return false
    if (components.some((c: any) => ctc.isVariant(c))) return false
    if (!components.length) return false
    const firstPage = components[0]?.mainInstancePage
    return components.every((c: any) => c.mainInstancePage === firstPage)
  }, [isLocal, groups, components])

  const onDragEnter = useCallback(
    (event: React.DragEvent) => {
      if (!isLocal || !dragData.isLocal) return
      onDragEnterAssetGroup(event, { current: setDragging } as any, prefix, selectedPaths)
    },
    [isLocal, prefix, selectedPaths]
  )

  const onDragLeave = useCallback(
    (event: React.DragEvent) => {
      if (!isLocal || !dragData.isLocal) return
      onDragLeaveAsset(event, { current: setDragging } as any)
    },
    [isLocal]
  )

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      if (!isLocal || !dragData.isLocal) return
      onDropAssetGroup(
        event,
        { current: setDragging } as any,
        prefix,
        selectedPaths,
        selectedFull || [],
        dwv.renameCompOrVariantAndMain
      )
    },
    [isLocal, prefix, selectedPaths, selectedFull]
  )

  return (
    <div
      className={css(CSS.componentGroup)}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={(e) => dom.preventDefault(e)}
      onDrop={onDrop}
    >
      <AssetGroupTitle
        fileId={fileId}
        section="components"
        path={prefix}
        isGroupOpen={groupOpen}
        isCanCombine={canCombine}
        onRename={onRenameGroup || (() => {})}
        onUngroup={onUngroup || (() => {})}
        onGroupCombineVariants={onGroupCombineVariants}
      />

      {groupOpen && (
        <>
          <div
            className={cssCase({
              [CSS.componentGroupGrid]: isListingThumbs,
              [CSS.componentGroupList]: !isListingThumbs,
            })}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDragOver={(e) => dom.preventDefault(e)}
            onDrop={onDrop}
          >
            {dragging && (
              <div className={css(CSS.componentGroupPlaceholder)}>\u00A0</div>
            )}

            {components.length === 0 && groups && isLocal && (
              <div
                className={cssCase({
                  [CSS.componentGroupDropSpace]: true,
                  [CSS.componentGroupDropSpaceSmall]: !dragging,
                })}
              />
            )}

            {components.map((component: any) => (
              <ComponentsItem
                key={component.id}
                component={component}
                renaming={renaming}
                isListingThumbs={isListingThumbs}
                fileId={fileId}
                selected={selected?.components || new Set()}
                selectedFull={selectedFull}
                selectedPaths={selectedPaths}
                onAssetClick={onAssetClick}
                onContextMenu={onContextMenu}
                onDragStart={onDragStart}
                doRename={doRename}
                cancelRename={cancelRename}
                isLocal={isLocal}
                numVariants={countVariants?.(component.variantId)}
              />
            ))}
          </div>

          {Object.entries(groups || {}).map(([pathItem, content]: [string, any]) => {
            if (!pathItem || pathItem === "") return null
            return (
              <ComponentsGroup
                key={pathItem}
                fileId={fileId}
                prefix={cpn.mergePathItem(prefix, pathItem)}
                groups={content}
                openGroups={openGroups}
                isForceOpen={isForceOpen}
                renaming={renaming}
                isListingThumbs={isListingThumbs}
                selected={selected}
                onAssetClick={onAssetClick}
                onDragStart={onDragStart}
                doRename={doRename}
                cancelRename={cancelRename}
                onRenameGroup={onRenameGroup}
                onGroup={onGroup}
                onUngroup={onUngroup}
                onContextMenu={onContextMenu}
                onGroupCombineVariants={onGroupCombineVariants}
                selectedFull={selectedFull}
                isLocal={isLocal}
                countVariants={countVariants}
              />
            )
          })}
        </>
      )}
    </div>
  )
}

// Components Section Component
interface ComponentsSectionProps {
  fileId: string
  components: any[]
  selected?: any
  openStatusRef?: any
  isLocal?: boolean
  isListingThumbs?: boolean
  isOpen?: boolean
  isForceOpen?: boolean
  isReverseSort?: boolean
  onAssetClick?: (groups: any, event: React.MouseEvent, assetId: string) => boolean
  onAssetsDelete?: () => void
  onClearSelection?: () => void
  deleteComponent?: (id: string) => void
  countVariants?: (variantId: string) => number
}

export const ComponentsSection: React.FC<ComponentsSectionProps> = ({
  fileId,
  components,
  selected = {},
  openStatusRef,
  isLocal = false,
  isListingThumbs = false,
  isOpen = false,
  isForceOpen = false,
  onAssetClick,
  onAssetsDelete,
  onClearSelection,
  deleteComponent,
  countVariants,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [state, setState] = useState<{ componentId?: string; renaming?: boolean }>({})
  const currentComponentId = state.componentId
  const isRenaming = !!state.renaming

  const openGroupsRef = useMemo(() => {
    return (openStatusRef as any)?.derive?.((l as any).in(["groups", "components"]))
  }, [openStatusRef])
  const openGroups = openGroupsRef?.deref?.() || {}

  const [menuState, setMenuState] = useState(initialContextMenuState)
  const readOnly = React.useContext(currentWorkspaceReadOnly)
  const toggleListStyle = React.useContext(AssetsToggleListStyleContext)

  const selectedComponents = selected?.components || new Set()
  const selectedFull = useMemo(() => {
    return (components || []).filter((c: any) => selectedComponents.has(c.id))
  }, [components, selectedComponents])

  const multiComponents = selectedComponents.size > 1
  const multiAssets = !!(
    selected?.graphics?.length ||
    selected?.colors?.length ||
    selected?.typographies?.length
  )

  const selectedAndCurrent = useMemo(() => {
    const base = Array.from(selectedComponents)
    if (currentComponentId) {
      base.push(currentComponentId)
    }
    return new Set(base)
  }, [selectedComponents, currentComponentId])

  const selectedAndCurrentFull = useMemo(() => {
    return (components || []).filter((c: any) => selectedAndCurrent.has(c.id))
  }, [components, selectedAndCurrent])

  const anyVariant = useMemo(() => {
    return selectedAndCurrentFull.some(ctc.isVariant)
  }, [selectedAndCurrentFull])

  const allSamePage = useMemo(() => {
    if (selectedAndCurrentFull.length === 0) return true
    const page = selectedAndCurrentFull[0]?.mainInstancePage
    return selectedAndCurrentFull.every((c: any) => c.mainInstancePage === page)
  }, [selectedAndCurrentFull])

  // Group components
  const groupedComponents = useMemo(() => {
    const grouped: Record<string, any> = {}
    const reverseSort = isReverseSort

    for (const comp of components || []) {
      const pathParts = comp.path ? cpn.splitPath(comp.path) : []
      let current = grouped

      for (const part of pathParts) {
        if (!current[part]) {
          current[part] = {}
        }
        current = current[part]
      }

      if (!current[""]) current[""] = []
      current[""].push(comp)
    }

    return grouped
  }, [components, isReverseSort])

  const addComponent = useCallback(() => {
    st.emit!(dw.setAssetsSectionOpen(fileId, "components", true))
    if (inputRef.current) {
      dom.click!(inputRef.current)
    }
  }, [fileId])

  const onFileSelected = useCallback(
    (blobs: FileList) => {
      const params = { fileId, blobs: Array.from(blobs) }
      st.emit!(
        dwm.uploadMediaComponents(params),
        ptk.event(ev.event, { name: "add-asset-to-library", assetType: "components" })
      )
    },
    [fileId]
  )

  const onDuplicate = useCallback(() => {
    if (selectedComponents.size === 0) {
      st.emit!(dwl.duplicateComponent(fileId, currentComponentId))
    } else {
      const undoId = Symbol()
      st.emit!(dwu.startUndoTransaction(undoId))
      selectedComponents.forEach((id: string) => {
        st.emit!(dwl.duplicateComponent(fileId, id))
      })
      st.emit!(dwu.commitUndoTransaction(undoId))
    }
  }, [fileId, currentComponentId, selectedComponents])

  const onDelete = useCallback(() => {
    const undoId = Symbol()
    if (multiComponents || multiAssets) {
      onAssetsDelete?.()
    } else {
      st.emit!(
        dwu.startUndoTransaction(undoId),
        deleteComponent?.(currentComponentId),
        dwl.syncFile(fileId, fileId, "components", currentComponentId),
        dwu.commitUndoTransaction(undoId)
      )
    }
  }, [multiComponents, multiAssets, onAssetsDelete, currentComponentId, deleteComponent, fileId])

  const onCloseMenu = useCallback(() => {
    setMenuState(closeContextMenu(menuState))
  }, [menuState])

  const onRename = useCallback(() => {
    setState((s) => ({ ...s, renaming: true }))
  }, [])

  const cancelRename = useCallback(() => {
    setState((s) => ({ ...s, renaming: false }))
  }, [])

  const doRename = useCallback(
    (newName: string) => {
      setState((s) => ({ ...s, renaming: false }))
      if (!str.isBlank(newName)) {
        st.emit!(dwv.renameCompOrVariantAndMain(currentComponentId, newName))
      }
    },
    [currentComponentId]
  )

  const onContextMenu = useCallback(
    (componentId: string, event: React.MouseEvent) => {
      dom.stopPropagation(event)
      dom.preventDefault(event)
      const pos = dom.getClientPosition(event)

      if (!readOnly) {
        if (!selectedComponents.has(componentId)) {
          onClearSelection?.()
        }

        setState((s) => ({ ...s, componentId }))
        setMenuState(openContextMenu(menuState, pos))
      }
    },
    [readOnly, selectedComponents, onClearSelection, menuState]
  )

  const createGroup = useCallback(
    (groupName: string) => {
      onClearSelection?.()
      const undoId = Symbol()
      st.emit!(dwu.startUndoTransaction(undoId))

      ;(components || []).forEach((comp: any) => {
        if (multiComponents ? selectedComponents.has(comp.id) : comp.id === currentComponentId) {
          st.emit!(dwv.renameCompOrVariantAndMain(comp.id, cpn.mergePathItem(comp.path || "", groupName) + "/" + comp.name))
        }
      })

      st.emit!(dwu.commitUndoTransaction(undoId))
    },
    [components, multiComponents, selectedComponents, currentComponentId, onClearSelection]
  )

  const renameGroup = useCallback(
    (path: string, lastPath: string) => {
      onClearSelection?.()
      const undoId = Symbol()
      st.emit!(dwu.startUndoTransaction(undoId))

      ;(components || []).forEach((comp: any) => {
        if (cpn.insidePath(comp.path || "", path)) {
          st.emit!(dwv.renameCompOrVariantAndMain(comp.id, cpn.mergePathItem(cpn.splitPath(path).slice(0, -1).join("/"), lastPath) + "/" + comp.name))
        }
      })

      st.emit!(dwu.commitUndoTransaction(undoId))
    },
    [components, onClearSelection]
  )

  const onGroup = useCallback(
    (event: React.MouseEvent) => {
      dom.stopPropagation(event)
      modal.show!("name-group-dialog", { accept: createGroup })
    },
    [createGroup]
  )

  const onRenameGroup = useCallback(
    (event: React.MouseEvent, path: string, lastPath: string) => {
      dom.stopPropagation(event)
      modal.show!("name-group-dialog", {
        path,
        lastPath,
        accept: renameGroup,
      })
    },
    [renameGroup]
  )

  const onUngroup = useCallback(
    (path: string) => {
      onClearSelection?.()
      const undoId = Symbol()
      st.emit!(dwu.startUndoTransaction(undoId))

      ;(components || []).forEach((comp: any) => {
        if (cpn.insidePath(comp.path || "", path)) {
          const newPath = comp.path?.substring(0, path.lastIndexOf("/")) || ""
          st.emit!(dwv.renameCompOrVariantAndMain(comp.id, newPath + "/" + comp.name))
        }
      })

      st.emit!(dwu.commitUndoTransaction(undoId))
    },
    [components, onClearSelection]
  )

  const onGroupCombineVariants = useCallback(
    (path: string) => {
      onClearSelection?.()
      const comps = (components || []).filter((c: any) => cpn.insidePath(c.path || "", path))
      const ids = new Set(comps.map((c: any) => c.mainInstanceId))
      const pageId = comps[0]?.mainInstancePage

      st.emit!(dwv.combineAsVariants(ids, { pageId, trigger: "workspace:context-menu-assets-group" }))
    },
    [components, onClearSelection]
  )

  const onDragStart = useCallback(
    (component: any, event: React.DragEvent) => {
      const fileData = dm.getIn(refs.files.deref(), [fileId, "data"])
      const shapeMain = ctf.getComponentRoot(fileData, component)

      setDragData({
        fileId,
        component,
        shape: shapeMain,
        isLocal,
      })

      dnd.setData!(event, "penpot/component", true)
      dnd.setDragImage!(event, dnd.invisibleImage())
      dnd.setAllowedEffect!(event, "move")
    },
    [fileId, isLocal]
  )

  const onShowMain = useCallback(
    (event: React.MouseEvent) => {
      dom.stopPropagation(event)
      if (isLocal) {
        st.emit!(dwl.goToLocalComponent("id", currentComponentId))
      } else {
        const component = (components || []).find((c: any) => c.id === currentComponentId)
        st.emit!(dwl.goToComponentFile(fileId, component, false))
      }
    },
    [isLocal, currentComponentId, fileId, components]
  )

  const wrappedOnAssetClick = useCallback(
    (assetId: string) => (event: React.MouseEvent, id: string) => onAssetClick?.(groupedComponents, event, id) || false,
    [onAssetClick, groupedComponents]
  )

  const onCombineAsVariants = useCallback(
    (event: React.MouseEvent) => {
      dom.stopPropagation(event)
      const pageId = selectedAndCurrentFull[0]?.mainInstancePage
      const ids = new Set(selectedFull.map((c: any) => c.mainInstanceId))

      st.emit!(dwv.combineAsVariants(ids, { pageId, trigger: "workspace:context-menu-assets" }))
    },
    [selectedAndCurrentFull, selectedFull]
  )

  const menuOptions = [
    ...(isLocal && !multiComponents && !multiAssets && !readOnly ? [{
      name: tr("workspace.assets.rename"),
      id: "assets-rename-component",
      handler: onRename,
    }] : []),
    ...(isLocal && !multiAssets && !readOnly && !anyVariant ? [{
      name: tr("workspace.assets.duplicate-main"),
      id: "assets-duplicate-component",
      handler: onDuplicate,
    }] : []),
    ...(isLocal && !multiAssets && !readOnly ? [{
      name: tr("workspace.assets.group"),
      id: "assets-group-component",
      handler: onGroup,
    }] : []),
    ...(!multiAssets ? [{
      name: tr("workspace.shape.menu.show-main"),
      id: "assets-show-main-component",
      handler: onShowMain,
    }] : []),
    ...(isLocal && multiComponents && !anyVariant ? [{
      name: tr("workspace.shape.menu.combine-as-variants"),
      id: "assets-combine-as-variants",
      title: !allSamePage ? tr("workspace.shape.menu.combine-as-variants-error") : undefined,
      disabled: !allSamePage,
      handler: onCombineAsVariants,
    }] : []),
    ...(isLocal && !readOnly ? [{
      name: tr("workspace.assets.delete"),
      id: "assets-delete-component",
      handler: onDelete,
    }] : []),
  ]

  return (
    <AssetSection
      fileId={fileId}
      title={tr("workspace.assets.components")}
      section="components"
      assetsCount={components?.length || 0}
      isOpen={isOpen}
    >
      <AssetSectionBlock role="title-button">
        {isOpen && (
          <RadioButtons
            selected={isListingThumbs ? "grid" : "list"}
            onChange={(style: string) => toggleListStyle?.(style === "grid")}
            name="listing-style"
          >
            <RadioButton
              icon={icons.viewAsList}
              value="list"
              title={tr("workspace.assets.list-view")}
              id="opt-list"
            />
            <RadioButton
              icon={icons.flexGrid}
              value="grid"
              title={tr("workspace.assets.grid-view")}
              id="opt-grid"
            />
          </RadioButtons>
        )}

        {isLocal && !readOnly && (
          <IconButton
            variant="ghost"
            ariaLabel={tr("workspace.assets.components.add-component")}
            onClick={addComponent}
            icon={icons.add}
          >
            <FileUploader
              accept={dwm.acceptImageTypes}
              multi
              ref={inputRef}
              onSelected={onFileSelected}
            />
          </IconButton>
        )}
      </AssetSectionBlock>

      <AssetSectionBlock role="content">
        {isOpen && (
          <ComponentsGroup
            fileId={fileId}
            prefix=""
            groups={groupedComponents}
            openGroups={openGroups}
            isForceOpen={isForceOpen}
            renaming={isRenaming ? currentComponentId : undefined}
            isListingThumbs={isListingThumbs}
            selected={selected}
            onAssetClick={wrappedOnAssetClick}
            onDragStart={onDragStart}
            doRename={doRename}
            cancelRename={cancelRename}
            onRenameGroup={onRenameGroup}
            onGroup={onGroup}
            onUngroup={onUngroup}
            onContextMenu={onContextMenu}
            onGroupCombineVariants={onGroupCombineVariants}
            selectedFull={selectedFull}
            isLocal={isLocal}
            countVariants={countVariants}
          />
        )}

        <AssetsContextMenu
          onClose={onCloseMenu}
          state={menuState}
          options={menuOptions}
        />
      </AssetSectionBlock>
    </AssetSection>
  )
}