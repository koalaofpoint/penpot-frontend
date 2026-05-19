// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react"
import { useCallback, useState, useMemo, useRef, useEffect } from "react"
import * as d from "app.common.data"
import * as dm from "app.common.data.macros"
import * as cpn from "app.common.path-names"
import * as ev from "app.main.data.event"
import * as modal from "app.main.data.modal"
import * as dw from "app.main.data.workspace"
import * as dwl from "app.main.data.workspace.libraries"
import * as dwt from "app.main.data.workspace.texts"
import * as dwu from "app.main.data.workspace.undo"
import * as refs from "app.main.refs"
import * as st from "app.main.store"
import * as ctx from "app.main.ui.context"
import { IconButton } from "app.main.ui.ds.buttons.icon-button"
import * as i from "app.main.ui.ds.foundations.assets.icon"
import * as cmm from "app.main.ui.workspace.sidebar.assets.common"
import * as grp from "app.main.ui.workspace.sidebar.assets.groups"
import { TypographyEntry } from "app.main.ui.workspace.sidebar.options.menus.typography"
import * as dom from "app.util.dom"
import { useTranslation } from "app.util.i18n"
import * as str from "cuerdas.core"
import * as l from "okulary.core"
import * as ptk from "potok.v2.core"

interface TypographyItemProps {
  typography: any
  fileId: string
  local?: boolean
  handleChange?: (typography: any, changes: any) => void
  selected: Set<string>
  editingId: string | null
  renamingId: string | null
  onAssetClick?: (event: any, id: string) => void
  onContextMenu?: (id: string, event: any) => void
  selectedFull: Set<any>
  selectedPaths: Set<string>
  moveTypography?: (fileId: string, id: string, name: string) => void
  rename?: boolean
}

export const TypographyItem: React.FC<TypographyItemProps> = ({
  typography,
  fileId,
  local = false,
  handleChange,
  selected,
  editingId,
  renamingId,
  onAssetClick,
  onContextMenu,
  selectedFull,
  selectedPaths,
  moveTypography,
  rename,
}) => {
  const itemRef = useRef<HTMLDivElement>(null)
  const typographyId = typography.id

  const [dragging, setDragging] = useState(false)

  const readOnly = React.useContext(ctx.workspaceReadOnlyContext)
  const editing = editingId === typography.id
  const renaming = renamingId === typography.id

  const [open, setOpen] = useState(editing)

  const onDrop = useCallback(
    (event: DragEvent) => {
      cmm.onDropAsset(
        event,
        typography,
        [dragging, setDragging],
        selected,
        selectedFull,
        selectedPaths,
        moveTypography
      )
    },
    [typography, dragging, selected, selectedFull, selectedPaths, moveTypography]
  )

  const onDragEnter = useCallback(
    (event: DragEvent) => {
      cmm.onDragEnterAsset(event, typography, [dragging, setDragging], selected, selectedPaths)
    },
    [typography, dragging, selected, selectedPaths]
  )

  const onDragLeave = useCallback(
    (event: DragEvent) => {
      cmm.onDragLeaveAsset(event, [dragging, setDragging])
    },
    [dragging]
  )

  const onTypographyDragStart = useCallback(
    (event: DragEvent) => {
      if (readOnly || renaming || open) {
        dom.preventDefault(event)
        return
      }
      cmm.onAssetDragStart(
        event,
        fileId,
        typography,
        selected,
        itemRef,
        "typographies",
        (x: any) => x
      )
    },
    [readOnly, renaming, open, fileId, typography, selected, itemRef]
  )

  const onContextMenuHandler = useCallback(
    (event: React.MouseEvent) => {
      if (onContextMenu) {
        onContextMenu(typographyId, event as any)
      }
    },
    [onContextMenu, typographyId]
  )

  const handleChangeHandler = useCallback(
    (changes: any) => {
      if (handleChange) {
        handleChange(typography, changes)
      }
    },
    [handleChange, typography]
  )

  const onAssetClickHandler = useCallback(
    (event: React.MouseEvent) => {
      if (readOnly) return

      st.emit!(
        ptk.dataEvent(ev.event, {
          name: "use-library-typography",
          origin: "sidebar",
          "external-library": !local,
        })
      )

      if (onAssetClick) {
        if (!onAssetClick(event as any, typography.id)) {
          st.emit!(dwt.applyTypography(typography, fileId))
        }
      }
    },
    [readOnly, local, onAssetClick, typography, fileId]
  )

  return (
    <div
      ref={itemRef}
      className={css("typography-item")}
      draggable={!readOnly && !open}
      onDragStart={onTypographyDragStart}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={dom.preventDefault}
      onDrop={onDrop}
    >
      <TypographyEntry
        fileId={fileId}
        typography={typography}
        local={local}
        selected={selected.has(typographyId)}
        onClick={onAssetClickHandler}
        onChange={handleChangeHandler}
        onContextMenu={onContextMenuHandler}
        editing={editing}
        renaming={renaming}
        focusName={rename}
        externalOpen={[open, setOpen]}
      />
      {dragging && <div className={css("dragging")} />}
    </div>
  )
}

interface TypographyGroupProps {
  fileId: string
  prefix: string
  groups: any
  openGroups: any
  forceOpen?: boolean
  file: any
  local?: boolean
  selected: any
  localData: any
  editingId: string | null
  renamingId: string | null
  onAssetClick?: (groups: any, event: any, id: string) => void
  handleChange?: (typography: any, changes: any) => void
  onRenameGroup?: (event: any, path: string, lastPath: string) => void
  onUngroup?: (path: string) => void
  onContextMenu?: (id: string, event: any) => void
  selectedFull: Set<any>
}

export const TypographyGroup: React.FC<TypographyGroupProps> = ({
  fileId,
  prefix,
  groups,
  openGroups,
  forceOpen,
  file,
  local = false,
  selected,
  localData,
  editingId,
  renamingId,
  onAssetClick,
  handleChange,
  onRenameGroup,
  onUngroup,
  onContextMenu,
  selectedFull,
}) => {
  const groupOpen =
    openGroups[prefix] === false
      ? false
      : openGroups[prefix] !== undefined
        ? openGroups[prefix]
        : true

  const [dragging, setDragging] = useState(false)

  const selectedPaths = useMemo(() => {
    const result = new Set<string>()
    selectedFull.forEach((item: any) => {
      if (item.path) {
        result.add(item.path || "")
      }
    })
    return result
  }, [selectedFull])

  const moveTypography = useCallback(
    (newName: string) => {
      if (dwl.renameTypography) {
        dwl.renameTypography(fileId, null, newName)
      }
    },
    [fileId]
  )

  const onDragEnter = useCallback(
    (event: DragEvent) => {
      cmm.onDragEnterAssetGroup(event, [dragging, setDragging], prefix, selectedPaths)
    },
    [dragging, prefix, selectedPaths]
  )

  const onDragLeave = useCallback(
    (event: DragEvent) => {
      cmm.onDragLeaveAsset(event, [dragging, setDragging])
    },
    [dragging]
  )

  const onDropHandler = useCallback(
    (event: DragEvent) => {
      cmm.onDropAssetGroup(
        event,
        [dragging, setDragging],
        prefix,
        selectedPaths,
        selectedFull,
        moveTypography
      )
    },
    [dragging, prefix, selectedPaths, selectedFull, moveTypography]
  )

  return (
    <div
      className={css("typographies-group")}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={dom.preventDefault}
      onDrop={onDropHandler}
    >
      <grp.AssetGroupTitle
        fileId={fileId}
        section="typographies"
        path={prefix}
        isGroupOpen={groupOpen}
        onRename={onRenameGroup}
        onUngroup={onUngroup}
      />

      {groupOpen && (
        <>
          {(() => {
            const typographies = groups[""] || []
            return (
              <div
                className={css("assets-list")}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDragOver={dom.preventDefault}
                onDrop={onDropHandler}
              >
                {dragging && <div className={css("grid-placeholder")}>&nbsp;</div>}

                {typographies.length === 0 && groups && (
                  <div className={css("drop-space")} />
                )}

                {typographies.map((typography: any) => (
                  <TypographyItem
                    key={`typography-${typography.id}`}
                    typography={typography}
                    fileId={fileId}
                    local={local}
                    handleChange={handleChange}
                    selected={selected.typographies}
                    editingId={editingId}
                    renamingId={renamingId}
                    rename={localData?.renameTypography === typography.id}
                    onAssetClick={onAssetClick}
                    onContextMenu={onContextMenu}
                    selectedFull={selectedFull}
                    selectedPaths={selectedPaths}
                    moveTypography={moveTypography}
                  />
                ))}
              </div>
            )
          })()}

          {Object.entries(groups).map(([pathItem, content]: [string, any]) => {
            if (!pathItem) return null
            return (
              <TypographyGroup
                key={`group-${pathItem}`}
                fileId={fileId}
                prefix={cpn.mergePathItem(prefix, pathItem)}
                groups={content}
                openGroups={openGroups}
                forceOpen={forceOpen}
                file={file}
                local={local}
                selected={selected}
                editingId={editingId}
                renamingId={renamingId}
                localData={localData}
                onAssetClick={onAssetClick}
                handleChange={handleChange}
                onRenameGroup={onRenameGroup}
                onUngroup={onUngroup}
                onContextMenu={onContextMenu}
                selectedFull={selectedFull}
              />
            )
          })}
        </>
      )}
    </div>
  )
}

interface TypographiesSectionProps {
  file: any
  fileId: string
  typographies: any[]
  openStatusRef: any
  selected: any
  isLocal: boolean
  isOpen: boolean
  isForceOpen: boolean
  isReverseSort: boolean
  onAssetClick?: (groups: any, event: any, id: string) => void
  onAssetsDelete?: () => void
  onClearSelection?: () => void
}

export const TypographiesSection: React.FC<TypographiesSectionProps> = ({
  file,
  fileId,
  typographies,
  openStatusRef,
  selected,
  isLocal,
  isOpen,
  isForceOpen,
  isReverseSort,
  onAssetClick,
  onAssetsDelete,
  onClearSelection,
}) => {
  const [state, setState] = useState<{ detailOpen: boolean; id: string | null }>({
    detailOpen: false,
    id: null,
  })

  const localData = refs.workspaceGlobal.deref()

  const readOnly = React.useContext(ctx.workspaceReadOnlyContext)
  const [menuState, setMenuState] = useState(cmm.initialContextMenuState)

  const processedTypographies = useMemo(() => {
    return typographies.map(dwl.extractPathIfMissing)
  }, [typographies])

  const groups = useMemo(() => {
    return grp.groupAssets(processedTypographies, isReverseSort)
  }, [processedTypographies, isReverseSort])

  const selectedSet = selected.typographies

  const selectedFull = useMemo(() => {
    const result: Set<any> = new Set()
    processedTypographies.forEach((t: any) => {
      if (selectedSet.has(t.id)) {
        result.add(t)
      }
    })
    return result
  }, [selectedSet, processedTypographies])

  const multiTypographies = selectedSet.size > 1
  const multiAssets =
    (selected.components && selected.components.length > 0) ||
    (selected.graphics && selected.graphics.length > 0) ||
    (selected.colors && selected.colors.length > 0)

  const openGroupsRef = useMemo(() => {
    return l.in(["groups", "typographies"]).derived(openStatusRef)
  }, [openStatusRef])

  const openGroups = openGroupsRef.deref()

  const addTypography = useCallback(
    (_: any) => {
      st.emit!(dw.setAssetsSectionOpen(fileId, "typographies", true))
      st.emit!(dwt.addTypography(fileId))
    },
    [fileId]
  )

  const handleChange = useCallback(
    (typography: any, changes: any) => {
      st.emit!(dwl.updateTypography({ ...typography, ...changes }, fileId))
    },
    [fileId]
  )

  const createGroup = useCallback(
    (groupName: string) => {
      onClearSelection?.()
      const undoId = Symbol()
      st.emit!(dwu.startUndoTransaction(undoId))

      const itemsToUpdate = processedTypographies.filter((t: any) => {
        if (multiTypographies) {
          return selectedSet.has(t.id)
        }
        return state.id === t.id
      })

      itemsToUpdate.forEach((t: any) => {
        st.emit!(
          dwl.updateTypography(
            { ...t, name: cmm.addGroup(t, groupName) },
            fileId
          )
        )
      })

      st.emit!(dwu.commitUndoTransaction(undoId))
    },
    [processedTypographies, selectedSet, state.id, fileId, multiTypographies, onClearSelection]
  )

  const renameGroup = useCallback(
    (path: string, lastPath: string) => {
      onClearSelection?.()
      const undoId = Symbol()
      st.emit!(dwu.startUndoTransaction(undoId))

      processedTypographies
        .filter((t: any) => t.path?.startsWith(path))
        .forEach((t: any) => {
          st.emit!(
            dwl.updateTypography(
              { ...t, name: cmm.renameGroup(t, path, lastPath) },
              fileId
            )
          )
        })

      st.emit!(dwu.commitUndoTransaction(undoId))
    },
    [processedTypographies, fileId, onClearSelection]
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

      processedTypographies
        .filter((t: any) => t.path?.startsWith(path))
        .forEach((t: any) => {
          st.emit!(dwl.renameTypography(fileId, t.id, cmm.ungroup(t, path)))
        })

      st.emit!(dwu.commitUndoTransaction(undoId))
    },
    [processedTypographies, fileId, onClearSelection]
  )

  const onContextMenu = useCallback(
    (id: string, event: React.MouseEvent) => {
      dom.preventDefault(event)
      const pos = dom.getClientPosition(event)

      if (!readOnly) {
        if (!selectedSet.has(id)) {
          onClearSelection?.()
        }
        setState((prev) => ({ ...prev, id }))
        setMenuState((prev) => cmm.openContextMenu(prev, pos))
      }
    },
    [selectedSet, readOnly, onClearSelection]
  )

  const onCloseMenu = useCallback(() => {
    setMenuState((prev) => cmm.closeContextMenu(prev))
  }, [])

  const handleRenameTypographyClicked = useCallback(() => {
    st.emit!((state: any) => ({
      ...state,
      workspaceGlobal: {
        ...state.workspaceGlobal,
        renameTypography: state.id,
      },
    }))
  }, [])

  const handleEditTypographyClicked = useCallback(() => {
    st.emit!((state: any) => ({
      ...state,
      workspaceGlobal: {
        ...state.workspaceGlobal,
        editTypography: state.id,
      },
    }))
  }, [])

  const handleDeleteTypography = useCallback(() => {
    const undoId = Symbol()
    if (multiTypographies || multiAssets) {
      onAssetsDelete?.()
    } else {
      st.emit!(
        dwu.startUndoTransaction(undoId),
        dwl.deleteTypography(state.id),
        dwl.syncFile(fileId, fileId, "typographies", state.id),
        dwu.commitUndoTransaction(undoId)
      )
    }
  }, [state.id, fileId, multiTypographies, multiAssets, onAssetsDelete])

  const editingId = localData?.editTypography
  const renamingId = localData?.renameTypography

  const onAssetClickHandler = useCallback(
    (groups: any, event: any, id: string) => {
      if (onAssetClick) {
        return onAssetClick(groups, event, id)
      }
      return false
    },
    [onAssetClick]
  )

  useEffect(() => {
    if (localData?.editTypography) {
      st.emit!((state: any) => ({
        ...state,
        workspaceGlobal: {
          ...state.workspaceGlobal,
          editTypography: undefined,
        },
      }))
    }
  }, [localData])

  const contextMenuOptions = isLocal
    ? [
        !(multiTypographies || multiAssets) && {
          name: "Rename",
          id: "assets-rename-typography",
          handler: handleRenameTypographyClicked,
        },
        !(multiTypographies || multiAssets) && {
          name: "Edit",
          id: "assets-edit-typography",
          handler: handleEditTypographyClicked,
        },
        {
          name: "Delete",
          id: "assets-delete-typography",
          handler: handleDeleteTypography,
        },
        !multiAssets && {
          name: "Group",
          id: "assets-group-typography",
          handler: onGroup,
        },
      ].filter(Boolean)
    : [
        {
          name: "show info",
          id: "assets-rename-typography",
          handler: handleEditTypographyClicked,
        },
      ]

  return (
    <>
      <cmm.AssetSection
        fileId={fileId}
        title="Typography"
        section="typographies"
        assetsCount={processedTypographies.length}
        isOpen={isOpen}
      >
        {isLocal && (
          <cmm.AssetSectionBlock role="title-button">
            {!readOnly && (
              <IconButton
                variant="ghost"
                aria-label="Add typography"
                onClick={addTypography}
                icon={i.add}
              />
            )}
          </cmm.AssetSectionBlock>
        )}

        <cmm.AssetSectionBlock role="content">
          <TypographyGroup
            fileId={fileId}
            prefix=""
            groups={groups}
            openGroups={openGroups}
            forceOpen={isForceOpen}
            state={state}
            file={file}
            local={isLocal}
            selected={selected}
            editingId={editingId}
            renamingId={renamingId}
            localData={localData}
            onAssetClick={onAssetClickHandler}
            handleChange={handleChange}
            onRenameGroup={onRenameGroup}
            onUngroup={onUngroup}
            onContextMenu={onContextMenu}
            selectedFull={selectedFull}
          />

          <cmm.AssetsContextMenu
            onClose={onCloseMenu}
            state={menuState}
            options={contextMenuOptions}
          />
        </cmm.AssetSectionBlock>
      </cmm.AssetSection>
    </>
  )
}

function css(className: string): string {
  return className
}
