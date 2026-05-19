// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useState, useCallback, useMemo, useRef, useEffect } from "react"
import * as d from "app/common/data"
import * as dm from "app.common.data.macros"
import * as cpn from "app.common.path-names"
import { maxInputLength } from "app.main.constants"
import * as ev from "app/main.data.event"
import * as modal from "app.main.data.modal"
import * as dw from "app/main/data/workspace"
import * as dc from "app/main/data/workspace.colors"
import * as dwl from "app/main/data/workspace.libraries"
import * as dwu from "app/main/data/workspace.undo"
import * as refs from "app.main.refs"
import * as st from "app/main.store"
import { ColorBullet } from "app/main.ui.components.color-bullet"
import { currentWorkspaceReadOnly } from "app.main.ui.context"
import { IconButton } from "app.main.ui.ds.buttons.icon-button"
import { Icon, icons } from "app.main.ui.ds.foundations.assets.icon"
import {
  AssetSection,
  AssetSectionBlock,
  AssetsContextMenu,
  closeContextMenu,
  initialContextMenuState,
  onDragEnterAsset,
  onDragLeaveAsset,
  onDropAsset,
  onAssetDragStart,
  openContextMenu,
} from "app.main.ui.workspace.sidebar.assets.common"
import { AssetGroupTitle } from "app.main.ui.workspace.sidebar.assets.groups"
import * as uc from "app/util.color"
import * as dom from "app/util.dom"
import { tr } from "app.util.i18n"
import * as kbd from "app.util.keyboard"
import * as str from "cuerdas/core"
import * as ptk from "potok.v2/core"

const CSS = {
  assetListItem: "asset-list-item",
  selected: "selected",
  editing: "editing",
  bulletBlock: "bullet-block",
  elementName: "element-name",
  nameBlock: "name-block",
  defaultName: "default-name",
  defaultNameWithColor: "default-name-with-color",
  dragging: "dragging",
  colorsGroup: "colors-group",
  assetList: "asset-list",
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

// Color Item Component
interface ColorItemProps {
  color: any
  local?: boolean
  fileId: string
  selected: Set<string>
  multiColors?: boolean
  multiAssets?: boolean
  onAssetClick?: (event: React.MouseEvent, id: string) => boolean
  onAssetsDelete?: () => void
  onClearSelection?: () => void
  onGroup?: (id: string) => (groupName: string) => void
  selectedFull?: any[]
  selectedPaths?: Set<string>
  moveColor?: (id: string, newName: string) => void
  colors?: any[]
}

export const ColorItem: React.FC<ColorItemProps> = React.memo(({
  color,
  local = false,
  fileId,
  selected,
  multiColors = false,
  multiAssets = false,
  onAssetClick,
  onAssetsDelete,
  onClearSelection,
  onGroup,
  selectedFull,
  selectedPaths,
  moveColor,
  colors,
}) => {
  const processedColor = useMemo(() => {
    if (!color) return color
    if (color.value) {
      return { ...color, color: color.value, opacity: 1, value: undefined }
    }
    return color
  }, [color, fileId])

  const colorId = processedColor.id
  const itemRef = useRef<HTMLDivElement>(null)

  const [dragging, setDragging] = useState(false)

  const renameState = refs.workspaceLocal.deref()
  const isRenaming = renameState?.colorForRename === colorId
  const inputRef = useRef<HTMLInputElement>(null)

  const [editing, setEditing] = useState(isRenaming)
  const readOnly = React.useContext(currentWorkspaceReadOnly)
  const [menuState, setMenuState] = useState(initialContextMenuState)

  const defaultName = processedColor.gradient
    ? uc.gradientTypeToString(dm.getIn(processedColor, ["gradient", "type"]))
    : processedColor.color || processedColor.value

  const renameColor = useCallback(
    (name: string) => {
      st.emit!(dwl.renameColor(fileId, colorId, name))
    },
    [fileId, colorId]
  )

  const editColor = useCallback(
    (attrs: any) => {
      const name = cpn.mergePathItem(processedColor.path, processedColor.name)
      const updatedColor = { ...attrs, id: processedColor.id, name }
      st.emit!(dwl.updateColor(updatedColor, fileId))
    },
    [processedColor, fileId]
  )

  const deleteColor = useCallback(() => {
    if (multiColors || multiAssets) {
      onAssetsDelete?.()
    } else {
      const undoId = Symbol()
      st.emit!(
        dwu.startUndoTransaction(undoId),
        dwl.deleteColor(processedColor),
        dwl.syncFile(fileId, fileId, "colors", colorId),
        dwu.commitUndoTransaction(undoId)
      )
    }
  }, [multiColors, multiAssets, onAssetsDelete, processedColor, fileId, colorId])

  const renameColorClicked = useCallback(
    (event: React.MouseEvent) => {
      if (local && !readOnly) {
        dom.preventDefault(event)
        setEditing(true)
      }
    },
    [local, readOnly]
  )

  const inputBlur = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      const name = dom.getTargetValue(event as any)
      renameColor(name)
      st.emit!(dwl.clearColorForRename)
      setEditing(false)
    },
    [renameColor]
  )

  const inputKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (kbd.esc(event)) {
        st.emit!(dwl.clearColorForRename)
        setEditing(false)
      }
      if (kbd.enter(event)) {
        inputBlur(event as any)
      }
    },
    [inputBlur]
  )

  const editColorClicked = useCallback(
    (event: React.MouseEvent) => {
      modal.show!("colorpicker", {
        x: (event as any).clientX,
        y: (event as any).clientY,
        onAccept: editColor,
        origin: "assets",
        data: processedColor,
        position: "right",
      })
    },
    [processedColor, editColor]
  )

  const onContextMenu = useCallback(
    (event: React.MouseEvent) => {
      dom.preventDefault(event)
      const pos = dom.getClientPosition(event)

      if (local && !readOnly) {
        if (!selected.has(colorId)) {
          onClearSelection?.()
        }
        setMenuState(openContextMenu(menuState, pos))
      }
    },
    [local, readOnly, selected, colorId, onClearSelection, menuState]
  )

  const onCloseMenu = useCallback(() => {
    setMenuState(closeContextMenu(menuState))
  }, [menuState])

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      onDropAsset(
        event,
        processedColor,
        { current: dragging } as any,
        selected,
        selectedFull || [],
        selectedPaths || new Set(),
        moveColor || (() => {})
      )
    },
    [processedColor, dragging, selected, selectedFull, selectedPaths, moveColor]
  )

  const onDragEnter = useCallback(
    (event: React.DragEvent) => {
      onDragEnterAsset(
        event,
        processedColor,
        { current: setDragging } as any,
        selected,
        selectedPaths || new Set()
      )
    },
    [processedColor, selected, selectedPaths]
  )

  const onDragLeave = useCallback(
    (event: React.DragEvent) => {
      onDragLeaveAsset(event, { current: setDragging } as any)
    },
    []
  )

  const onColorDragStart = useCallback(
    (event: React.DragEvent) => {
      if (readOnly || editing) {
        dom.preventDefault(event)
        return
      }
      onAssetDragStart(event, fileId, processedColor, selected, itemRef, "colors", () => {})
    },
    [readOnly, editing, fileId, processedColor, selected]
  )

  const onClick = useCallback(
    (event: React.MouseEvent) => {
      if (editing) return

      st.emit!(
        ptk.dataEvent(ev.event, {
          name: "use-library-color",
          origin: "sidebar",
          externalLibrary: !local,
        })
      )

      const clicked = onAssetClick?.(event, colorId)
      if (!clicked) {
        st.emit!(dc.applyColorFromAssets(fileId, processedColor, kbd.alt(event)))
      }
    },
    [editing, local, onAssetClick, colorId, processedColor, fileId]
  )

  useEffect(() => {
    if (editing && inputRef.current) {
      dom.selectText!(inputRef.current)
    }
  }, [editing])

  const showMenuOptions = [
    ...((!multiColors && !multiAssets) ? [{
      name: tr("workspace.assets.rename"),
      id: "assets-rename-color",
      handler: renameColorClicked,
    }] : []),
    ...((!multiColors && !multiAssets) ? [{
      name: tr("workspace.assets.edit"),
      id: "assets-edit-color",
      handler: editColorClicked,
    }] : []),
    {
      name: tr("workspace.assets.delete"),
      id: "assets-delete-color",
      handler: deleteColor,
    },
    ...(!multiAssets ? [{
      name: tr("workspace.assets.group"),
      id: "assets-group-color",
      handler: onGroup?.(colorId) || (() => {}),
    }] : []),
  ]

  return (
    <div
      className={cssCase({
        [CSS.assetListItem]: true,
        [CSS.selected]: selected.has(colorId),
        [CSS.editing]: editing,
      })}
      style={{ "--bullet-size": "16px" } as React.CSSProperties}
      onContextMenu={onContextMenu}
      onClick={onClick}
      ref={itemRef}
      draggable={!readOnly && !editing}
      onDragStart={onColorDragStart}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={(e) => dom.preventDefault(e)}
      onDrop={onDrop}
    >
      <div className={css(CSS.bulletBlock)}>
        <ColorBullet color={processedColor} mini />
      </div>

      {editing ? (
        <input
          type="text"
          className={css(CSS.elementName)}
          ref={inputRef}
          onBlur={inputBlur}
          onKeyDown={inputKeyDown}
          autoFocus
          maxLength={maxInputLength}
          defaultValue={cpn.mergePathItem(processedColor.path, processedColor.name)}
        />
      ) : (
        <div
          title={processedColor.name === defaultName ? defaultName : `${processedColor.name} (${defaultName})`}
          className={css(CSS.nameBlock)}
          onDoubleClick={renameColorClicked}
        >
          {processedColor.name === defaultName ? (
            <span className={css(CSS.defaultName)}>{defaultName}</span>
          ) : (
            <>
              {processedColor.name}
              <span className={css(CSS.defaultName, CSS.defaultNameWithColor)}>{defaultName}</span>
            </>
          )}
        </div>
      )}

      {local && (
        <AssetsContextMenu
          onClose={onCloseMenu}
          state={menuState}
          options={showMenuOptions}
        />
      )}

      {dragging && <div className={css(CSS.dragging)} />}
    </div>
  )
}, (prev, next) => prev.color?.id === next.color?.id && prev.selected === next.selected)

// Colors Group Component
interface ColorsGroupProps {
  fileId: string
  prefix: string
  groups: any
  openGroups: any
  forceOpen?: boolean
  local?: boolean
  selected: any
  multiColors?: boolean
  multiAssets?: boolean
  onAssetClick?: (event: React.MouseEvent, id: string) => boolean
  onAssetsDelete?: () => void
  onClearSelection?: () => void
  onGroup?: (id: string) => (groupName: string) => void
  onRenameGroup?: (event: React.MouseEvent, path: string, lastPath: string) => void
  onUngroup?: (path: string) => void
  colors?: any[]
  selectedFull?: any[]
}

export const ColorsGroup: React.FC<ColorsGroupProps> = ({
  fileId,
  prefix,
  groups,
  openGroups,
  forceOpen = false,
  local = false,
  selected,
  multiColors = false,
  multiAssets = false,
  onAssetClick,
  onAssetsDelete,
  onClearSelection,
  onGroup,
  onRenameGroup,
  onUngroup,
  colors,
  selectedFull,
}) => {
  // Determine if group should be open
  const groupOpen = openGroups[prefix] === false
    ? false
    : forceOpen || openGroups[prefix] !== undefined
      ? openGroups[prefix]
      : prefix === "" || openGroups[prefix] === true

  const [dragging, setDragging] = useState(false)

  const selectedPaths = useMemo(() => {
    return new Set((selectedFull || []).map((c: any) => c.path || ""))
  }, [selectedFull])

  const moveColor = useCallback(
    (newName: string) => (colorId: string) => {
      st.emit!(dwl.renameColor(fileId, colorId, newName))
    },
    [fileId]
  )

  const onDragEnter = useCallback(
    (event: React.DragEvent) => {
      // Simplified - would need full implementation
      event.preventDefault()
    },
    []
  )

  const onDragLeave = useCallback(
    (event: React.DragEvent) => {
      setDragging(false)
    },
    []
  )

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault()
      setDragging(false)
    },
    []
  )

  return (
    <div
      className={css(CSS.colorsGroup)}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={(e) => dom.preventDefault(e)}
      onDrop={onDrop}
    >
      <AssetGroupTitle
        fileId={fileId}
        section="colors"
        path={prefix}
        isGroupOpen={groupOpen}
        onRename={onRenameGroup || (() => {})}
        onUngroup={onUngroup || (() => {})}
      />

      {groupOpen && (
        <>
          {(() => {
            const colorsList = groups?.[""] || []
            return (
              <div
                className={css(CSS.assetList)}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDragOver={(e) => dom.preventDefault(e)}
                onDrop={onDrop}
              >
                {dragging && <div className={css(CSS.gridPlaceholder)}>\u00A0</div>}

                {colorsList.length === 0 && groups && (
                  <div className={css(CSS.dropSpace)} />
                )}

                {colorsList.map((color: any) => (
                  <ColorItem
                    key={color.id}
                    color={color}
                    fileId={fileId}
                    local={local}
                    selected={selected?.colors || new Set()}
                    multiColors={multiColors}
                    multiAssets={multiAssets}
                    onAssetClick={onAssetClick}
                    onAssetsDelete={onAssetsDelete}
                    onClearSelection={onClearSelection}
                    onGroup={onGroup}
                    selectedFull={selectedFull}
                    selectedPaths={selectedPaths}
                    moveColor={moveColor}
                    colors={colorsList}
                  />
                ))}
              </div>
            )
          })()}

          {Object.entries(groups || {}).map(([pathItem, content]: [string, any]) => {
            if (!pathItem || pathItem === "") return null
            return (
              <ColorsGroup
                key={pathItem}
                fileId={fileId}
                prefix={cpn.mergePathItem(prefix, pathItem)}
                groups={content}
                openGroups={openGroups}
                forceOpen={forceOpen}
                local={local}
                selected={selected}
                multiColors={multiColors}
                multiAssets={multiAssets}
                onAssetClick={onAssetClick}
                onAssetsDelete={onAssetsDelete}
                onClearSelection={onClearSelection}
                onGroup={onGroup}
                onRenameGroup={onRenameGroup}
                onUngroup={onUngroup}
                colors={colors}
                selectedFull={selectedFull}
              />
            )
          })}
        </>
      )}
    </div>
  )
}

// Colors Section Component
interface ColorsSectionProps {
  fileId: string
  colors: any[]
  openStatusRef?: any
  selected?: any
  isLocal?: boolean
  isOpen?: boolean
  isForceOpen?: boolean
  isReverseSort?: boolean
  onAssetClick?: (groups: any, event: React.MouseEvent, assetId: string) => boolean
  onAssetsDelete?: () => void
  onClearSelection?: () => void
}

export const ColorsSection: React.FC<ColorsSectionProps> = ({
  fileId,
  colors,
  selected = {},
  isLocal = false,
  isOpen = false,
  isForceOpen = false,
  onAssetClick,
  onAssetsDelete,
  onClearSelection,
}) => {
  const selectedColors = selected?.colors || new Set()
  const selectedFull = useMemo(() => {
    return (colors || []).filter((c: any) => selectedColors.has(c.id))
  }, [colors, selectedColors])

  const openGroupsRef = useMemo(() => {
    return (openStatusRef as any)?.derive?.((l as any).in(["groups", "colors"]))
  }, [openStatusRef])
  const openGroups = openGroupsRef?.deref?.() || {}

  const multiColors = selectedColors.size > 1
  const multiAssets = !!(selected?.components?.length || selected?.graphics?.length || selected?.typographies?.length)

  // Group colors
  const groupedColors = useMemo(() => {
    const grouped: Record<string, any> = {}
    const reverseSort = isReverseSort

    for (const color of colors || []) {
      const pathParts = color.path ? cpn.splitPath(color.path) : []
      let current = grouped

      for (const part of pathParts) {
        if (!current[part]) {
          current[part] = {}
        }
        current = current[part]
      }

      if (!current[""]) current[""] = []
      current[""].push(color)
    }

    // Sort if needed
    if (reverseSort) {
      const sortFn = (a: string, b: string) => b.localeCompare(a)
      const sortKeys = (obj: Record<string, any>, fn: (a: string, b: string) => number): Record<string, any> => {
        const sorted: Record<string, any> = {}
        Object.keys(obj).sort(fn).forEach((k) => {
          sorted[k] = typeof obj[k] === "object" && !Array.isArray(obj[k])
            ? sortKeys(obj[k], fn)
            : obj[k]
        })
        return sorted
      }
      return sortKeys(grouped, sortFn)
    }

    return grouped
  }, [colors, isReverseSort])

  const addColor = useCallback(
    (value: string) => {
      st.emit!(dwl.addColor(value))
    },
    []
  )

  const addColorClicked = useCallback(
    (event: React.MouseEvent) => {
      const bounds = dom.getBoundingRect(dom.getCurrentTarget(event) as HTMLElement)
      const x = bounds.right
      const y = bounds.top

      st.emit!(dw.setAssetsSectionOpen(fileId, "colors", true))
      st.emit!(ptk.event(ev.event, { name: "add-asset-to-library", assetType: "color" }))
      modal.show!("colorpicker", {
        x,
        y,
        onAccept: addColor,
        origin: "assets",
        data: { color: "#406280", opacity: 1 },
        position: "right",
      })
    },
    [fileId, addColor]
  )

  const createGroup = useCallback(
    (colorId: string) => (groupName: string) => {
      onClearSelection?.()
      const undoId = Symbol()
      st.emit!(dwu.startUndoTransaction(undoId))

      ;(colors || []).forEach((color: any) => {
        if (multiColors ? selectedColors.has(color.id) : color.id === colorId) {
          st.emit!(dwl.updateColor({ ...color, name: addGroup(color, groupName) }, fileId))
        }
      })

      st.emit!(dwu.commitUndoTransaction(undoId))
    },
    [colors, multiColors, selectedColors, onClearSelection, fileId]
  )

  const renameGroup = useCallback(
    (path: string, lastPath: string) => {
      onClearSelection?.()
      const undoId = Symbol()
      st.emit!(dwu.startUndoTransaction(undoId))

      ;(colors || []).forEach((color: any) => {
        if (str.startsWith(color.path || "", path)) {
          st.emit!(dwl.updateColor({ ...color, name: renameGroup(color, path, lastPath) }, fileId))
        }
      })

      st.emit!(dwu.commitUndoTransaction(undoId))
    },
    [colors, onClearSelection, fileId]
  )

  const onGroup = useCallback(
    (colorId: string) => (event: React.MouseEvent) => {
      dom.stopPropagation(event)
      modal.show!("name-group-dialog", { accept: createGroup(colorId) })
    },
    [createGroup]
  )

  const onRenameGroup = useCallback(
    (event: React.MouseEvent, path: string, lastPath: string) => {
      dom.stopPropagation(event)
      modal.show!("name-group-dialog", {
        path,
        lastPath,
        accept: (newPath: string, name: string) => {
          const undoId = Symbol()
          st.emit!(dwu.startUndoTransaction(undoId))

          ;(colors || []).forEach((color: any) => {
            if (str.startsWith(color.path || "", path)) {
              st.emit!(dwl.updateColor({ ...color, name: renameGroup(color, path, name) }, fileId))
            }
          })

          st.emit!(dwu.commitUndoTransaction(undoId))
        },
      })
    },
    [colors, fileId]
  )

  const onUngroup = useCallback(
    (path: string) => {
      onClearSelection?.()
      const undoId = Symbol()
      st.emit!(dwu.startUndoTransaction(undoId))

      ;(colors || []).forEach((color: any) => {
        if (str.startsWith(color.path || "", path)) {
          st.emit!(dwl.renameColor(fileId, color.id, ungroup(color, path)))
        }
      })

      st.emit!(dwu.commitUndoTransaction(undoId))
    },
    [colors, onClearSelection, fileId]
  )

  const wrappedOnAssetClick = useCallback(
    (assetId: string) => (event: React.MouseEvent, id: string) => onAssetClick?.(groupedColors, event, id) || false,
    [onAssetClick, groupedColors]
  )

  return (
    <AssetSection
      fileId={fileId}
      title={tr("workspace.assets.colors")}
      section="colors"
      assetsCount={colors?.length || 0}
      isOpen={isOpen}
    >
      <AssetSectionBlock role="title-button">
        {isLocal && (
          <IconButton
            variant="ghost"
            ariaLabel={tr("workspace.assets.colors.add-color")}
            onClick={addColorClicked}
            icon={icons.add}
          />
        )}
      </AssetSectionBlock>

      <AssetSectionBlock role="content">
        <ColorsGroup
          fileId={fileId}
          prefix=""
          groups={groupedColors}
          openGroups={openGroups}
          forceOpen={isForceOpen}
          local={isLocal}
          selected={selected}
          multiColors={multiColors}
          multiAssets={multiAssets}
          onAssetClick={wrappedOnAssetClick}
          onAssetsDelete={onAssetsDelete}
          onClearSelection={onClearSelection}
          onGroup={onGroup}
          onRenameGroup={onRenameGroup}
          onUngroup={onUngroup}
          colors={colors}
          selectedFull={selectedFull}
        />
      </AssetSectionBlock>
    </AssetSection>
  )
}

// Helper function for add group
function addGroup(asset: any, groupName: string): string {
  return cpn.mergePathItem(cpn.mergePathItem(asset.path || "", groupName), asset.name)
}

// Helper function for rename group
function renameGroupFn(asset: any, path: string, lastPath: string): string {
  const basePath = str.slice(asset.path || "", 0, path.length)
  const splitPath = cpn.splitPath(basePath)
  const newPath = [...splitPath.slice(0, -1), lastPath]
  const joinedPath = cpn.joinPath(newPath)
  const remainingPath = str.slice(asset.path || "", path.length)
  return cpn.mergePathItem(joinedPath + remainingPath, asset.name)
}

// Helper function for ungroup
function ungroup(asset: any, path: string): string {
  const basePath = str.slice(asset.path || "", 0, path.length)
  const splitPath = cpn.splitPath(basePath)
  const joinedPath = cpn.joinPath(splitPath.slice(0, -1))
  const remainingPath = str.slice(asset.path || "", path.length)
  return cpn.mergePathItem(joinedPath + remainingPath, asset.name)
}