// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useState, useCallback, useEffect } from "react"
import * as dm from "app/common/data/macros"
import * as ctob from "app/common/types/tokens-lib"
import * as dwtl from "app/main/data/workspace/tokens/library-edit"
import { store } from "app/main/store"
import * as ctx from "app/main/ui/context"
import { IconButton } from "app/main/ui/ds/buttons/icon-button"
import { Icon } from "app/main/ui/ds/foundations/assets/icon"
import { Text } from "app/main/ui/ds/foundations/typography/text"
import * as h from "app/main/ui/hooks"
import * as setsHelpers from "app/main/ui/workspace/tokens/sets/helpers"
import * as dom from "app/util/dom"
import { tr } from "app/util/i18n"
import * as kbd from "app/util/keyboard"
import * as rx from "beicon.v2/core"
import * as str from "cuerdas.core"
import * as ptk from "potok.v2.core"

function onStartCreation() {
  store.emit(dwtl.startTokenSetCreation([]))
}

interface EditingLabelProps {
  defaultValue: string
  onCancel: () => void
  onSubmit: (value: string) => void
}

const EditingLabel: React.FC<EditingLabelProps> = ({
  defaultValue,
  onCancel,
  onSubmit,
}) => {
  const onSubmitHandler = useCallback(
    (event: React.FocusEvent | React.KeyboardEvent) => {
      const value = dom.getTargetVal(event.target as HTMLInputElement)
      if (str.empty(value) || value === defaultValue) {
        onCancel()
      } else {
        onSubmit(value)
      }
    },
    [defaultValue, onCancel, onSubmit]
  )

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (kbd.enter(event)) {
        onSubmitHandler(event)
      } else if (kbd.esc(event)) {
        onCancel()
      }
    },
    [onSubmitHandler, onCancel]
  )

  return (
    <input
      className={(stl as any).css("editing-node")}
      type="text"
      onBlur={onSubmitHandler}
      onKeyDown={onKeyDown}
      maxLength={256}
      autoFocus
      placeholder={tr("workspace.tokens.set-edit-placeholder")}
      defaultValue={defaultValue}
    />
  )
}

interface CheckboxProps {
  checked?: boolean | "mixed"
  ariaLabel?: string
  onClick?: () => void
  disabled?: boolean
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  ariaLabel,
  onClick,
  disabled,
}) => {
  const all = checked === true
  const mixed = checked === "mixed"
  const checkedFinal = all || mixed

  return (
    <div
      role="checkbox"
      aria-checked={dm.str(checked)}
      disabled={disabled}
      title={disabled ? tr("workspace.tokens.no-permisions-set") : undefined}
      tabIndex={0}
      className={(stl as any).cssCase({
        "checkbox-style": true,
        "checkbox-checked-style": checkedFinal,
        "checkbox-disabled-checked": checkedFinal && disabled,
        "checkbox-disabled": disabled,
      })}
      onClick={disabled ? undefined : onClick}
    >
      {checkedFinal && (
        <Icon
          aria-label={ariaLabel}
          className={(stl as any).css("check-icon")}
          size="s"
          iconId={mixed ? "remove" : "tick"}
        />
      )}
    </div>
  )
}

const InlineAddButton: React.FC = () => {
  const canEdit = React.useContext(ctx.canEditContext)

  if (canEdit) {
    return (
      <div className={(stl as any).css("empty-sets-wrapper")}>
        <Text
          as="span"
          typography="body-small"
          className={(stl as any).css("empty-state-message")}
        >
          {tr("workspace.tokens.no-sets-yet")}
        </Text>
        <button
          onClick={onStartCreation}
          className={(stl as any).css("create-set-button")}
        >
          {tr("workspace.tokens.create-one")}
        </button>
      </div>
    )
  }

  return (
    <div className={(stl as any).css("empty-sets-wrapper")}>
      <Text
        as="span"
        typography="body-small"
        className={(stl as any).css("empty-state-message")}
      >
        {tr("workspace.tokens.no-sets-yet")}
      </Text>
    </div>
  )
}

const AddButton: React.FC = () => {
  return (
    <IconButton
      variant="ghost"
      icon={Icon}
      onClick={onStartCreation}
      aria-label={tr("workspace.tokens.add set")}
    />
  )
}

interface SetsTreeSetGroupProps {
  id: string
  label: string
  isEditing: boolean
  isActive: boolean | "mixed"
  isSelected: boolean
  isDraggable: boolean
  isCollapsed: boolean
  path: any[]
  depth: number
  index: number
  onToggle: (path: any[]) => void
  onDrop: (index: number, position: any, data: any) => void
  onStartEdition: (id: string) => void
  onResetEdition: () => void
  onEditSubmit: (path: any[], value: string) => void
  onToggleCollapse: (path: any[]) => void
}

const SetsTreeSetGroup: React.FC<SetsTreeSetGroupProps> = ({
  id,
  label,
  isEditing,
  isActive,
  isSelected,
  isDraggable,
  isCollapsed,
  path,
  depth,
  index,
  onToggle,
  onDrop,
  onStartEdition,
  onResetEdition,
  onEditSubmit,
  onToggleCollapse,
}) => {
  const canEdit = React.useContext(ctx.canEditContext)

  const labelId = str(id, "-label")

  const onContextMenu = useCallback(
    (event: React.MouseEvent) => {
      dom.preventDefault(event)
      dom.stopPropagation(event)
      if (canEdit && !isEditing) {
        store.emit(
          dwtl.assignTokenSetContextMenu({
            position: dom.getClientPosition(event),
            isGroup: true,
            id,
            path,
          })
        )
      }
    },
    [isEditing, id, path, canEdit]
  )

  const onCollapseClick = useCallback(
    (event: React.MouseEvent) => {
      dom.preventDefault(event)
      dom.stopPropagation(event)
      onToggleCollapse(path)
    },
    [path, onToggleCollapse]
  )

  const onDoubleClick = useCallback(() => {
    onStartEdition(id)
  }, [id, onStartEdition])

  const onCheckboxClick = useCallback(() => {
    onToggle(path)
  }, [path, onToggle])

  const onEditSubmitHandler = useCallback(
    (value: string) => {
      onEditSubmit(path, value)
    },
    [path, onEditSubmit]
  )

  const onDropHandler = useCallback(
    (position: any, data: any) => {
      onDrop(index, position, data)
    },
    [index, onDrop]
  )

  const [{ over }, dref] = h.useSortable({
    dataType: "penpot/token-set",
    onDrop: onDropHandler,
    data: { index, isGroup: true },
    detectCenter: true,
    draggable: isDraggable && !isEditing,
  })

  return (
    <div
      ref={dref}
      data-testid="tokens-set-group-item"
      style={{ "--tree-depth": depth }}
      className={(stl as any).cssCase({
        "set-item-container": true,
        "set-item-group": true,
        "selected-set": isSelected,
        "dnd-over": over === "center",
        "dnd-over-top": over === "top",
        "dnd-over-bot": over === "bot",
      })}
      onContextMenu={onContextMenu}
    >
      <IconButton
        className={(stl as any).css("set-item-group-collapse-button")}
        onClick={onCollapseClick}
        data-testid="tokens-set-group-collapse"
        aria-label={tr("labels.collapse")}
        icon={isCollapsed ? "arrow-right" : "arrow-down"}
        variant="action"
      />
      {isEditing ? (
        <EditingLabel
          defaultValue={label}
          onCancel={onResetEdition}
          onSubmit={onEditSubmitHandler}
        />
      ) : (
        <>
          <div
            className={(stl as any).css("set-name")}
            role="button"
            title={label}
            tabIndex={0}
            onDoubleClick={onDoubleClick}
            id={labelId}
          >
            {label}
          </div>
          <Checkbox
            onClick={onCheckboxClick}
            disabled={!canEdit}
            checked={
              isActive === "all"
                ? true
                : isActive === "partial"
                ? "mixed"
                : false
            }
            ariaLabel={tr("workspace.tokens.select-set")}
          />
        </>
      )}
    </div>
  )
}

interface SetsTreeSetProps {
  id: string
  set: any
  label: string
  isEditing: boolean
  isActive: boolean
  isSelected: boolean
  isDraggable: boolean
  isNew: boolean
  path: any[]
  depth: number
  index: number
  onSelect: (id: string) => void
  onToggle: (name: string) => void
  onDrop: (index: number, position: any, data: any) => void
  onStartEdition: (id: string) => void
  onResetEdition: () => void
  onEditSubmit: (set: any, value: string) => void
}

const SetsTreeSet: React.FC<SetsTreeSetProps> = ({
  id,
  set,
  label,
  isEditing,
  isActive,
  isSelected,
  isDraggable,
  isNew,
  path,
  depth,
  index,
  onSelect,
  onToggle,
  onDrop,
  onStartEdition,
  onResetEdition,
  onEditSubmit,
}) => {
  const canEdit = React.useContext(ctx.canEditContext)

  const onClick = useCallback(
    (event: React.MouseEvent) => {
      dom.stopPropagation(event)
      if (!isEditing && onSelect) {
        onSelect(id)
      }
    },
    [isEditing, onSelect, id]
  )

  const onContextMenu = useCallback(
    (event: React.MouseEvent) => {
      dom.preventDefault(event)
      dom.stopPropagation(event)
      if (canEdit && !isEditing) {
        store.emit(
          dwtl.assignTokenSetContextMenu({
            position: dom.getClientPosition(event),
            isGroup: false,
            id,
            path,
          })
        )
      }
    },
    [isEditing, id, path, canEdit]
  )

  const onDoubleClick = useCallback(() => {
    if (!isNew) {
      onStartEdition(id)
    }
  }, [id, isNew, onStartEdition])

  const onCheckboxClick = useCallback(
    (event: React.MouseEvent) => {
      dom.stopPropagation(event)
      if (onToggle) {
        onToggle(ctob.getName(set))
      }
    },
    [set, onToggle]
  )

  const onEditSubmitHandler = useCallback(
    (value: string) => {
      onEditSubmit(set, value)
    },
    [set, onEditSubmit]
  )

  const onDrag = useCallback(
    (_: any) => {
      if (!isSelected && onSelect) {
        onSelect(path)
      }
    },
    [isSelected, onSelect, path]
  )

  const onDropHandler = useCallback(
    (position: any, data: any) => {
      onDrop(index, position, data)
    },
    [index, onDrop]
  )

  const [{ over }, dref] = h.useSortable({
    dataType: "penpot/token-set",
    onDrag,
    onDrop: onDropHandler,
    data: { index, isGroup: false },
    draggable: isDraggable && !isEditing,
  })

  return (
    <div
      ref={dref}
      role="button"
      data-testid="tokens-set-item"
      id={str("token-set-item-", str.join("/", path))}
      style={{ "--tree-depth": depth }}
      className={(stl as any).cssCase({
        "set-item-container": true,
        "selected-set": isSelected,
        "dnd-over": over === "center",
        "dnd-over-top": over === "top",
        "dnd-over-bot": over === "bot",
      })}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      onContextMenu={onContextMenu}
      aria-checked={isActive}
    >
      <Icon
        iconId={Icon}
        className={(stl as any).cssCase({
          icon: true,
          "root-icon": !depth,
        })}
      />
      {isEditing ? (
        <EditingLabel
          defaultValue={label}
          onCancel={onResetEdition}
          onSubmit={onEditSubmitHandler}
        />
      ) : (
        <>
          <div className={(stl as any).css("set-name")}>{label}</div>
          <Checkbox
            onClick={onCheckboxClick}
            disabled={!canEdit}
            ariaLabel={tr("workspace.tokens.select-set")}
            checked={isActive}
          />
        </>
      )}
    </div>
  )
}

interface TokenSetsTreeProps {
  isDraggable: boolean
  selected: string
  isTokenSetGroupActive: (path: any[]) => boolean
  isTokenSetActive: (name: string) => boolean
  onStartEdition: (id: string) => void
  onResetEdition: (v: any) => void
  onEditSubmitSet: (set: any, value: string) => void
  onEditSubmitGroup: (path: any[], value: string) => void
  onSelect: (id: string) => void
  onToggleSet: (name: string) => void
  onToggleSetGroup: (path: any[]) => void
  tokensLib: any
  tokenSets: any
  newPath: any[]
  editionId: string
}

const TokenSetsTree: React.FC<TokenSetsTreeProps> = ({
  isDraggable,
  selected,
  isTokenSetGroupActive,
  isTokenSetActive,
  onStartEdition,
  onResetEdition,
  onEditSubmitSet,
  onEditSubmitGroup,
  onSelect,
  onToggleSet,
  onToggleSetGroup,
  tokensLib,
  tokenSets,
  newPath,
  editionId,
}) => {
  const [collapsedPaths, setCollapsedPaths] = useState<Set<any[]>>(
    new Set()
  )

  const collapsed = useCallback(
    (path: any[]) => collapsedPaths.has(path),
    [collapsedPaths]
  )

  const onDrop = useCallback(
    (index: number, position: any, data: any) => {
      const params = {
        fromIndex: data.index,
        toIndex: index,
        position,
        collapsedPaths: Array.from(collapsedPaths),
      }
      if (data.isGroup) {
        store.emit(dwtl.dropTokenSetGroup(params))
      } else {
        store.emit(dwtl.dropTokenSet(params))
      }
    },
    [collapsedPaths]
  )

  const onToggleCollapse = useCallback((path: any[]) => {
    setCollapsedPaths((prev) => {
      const next = new Set(prev)
      if (next.has(path)) {
        next.delete(path)
      } else {
        next.add(path)
      }
      return next
    })
  }, [])

  useEffect(() => {
    const sub = rx.subs!(
      (paths: any[]) => {
        setCollapsedPaths((prev) => {
          const next = new Set(prev)
          paths.forEach((p) => next.delete(p))
          return next
        })
      },
      store.stream.pipe(
        rx.filter(ptk.isType("expand-token-sets")),
        rx.map((e: any) => e.payload.paths)
      )
    )

    return () => rx.dispose!(sub)
  }, [])

  const treeNodes = ctob.setsTreeSeq(tokenSets, {
    skipChildrenPred: collapsed,
    newAtPath: newPath,
  })

  return (
    <>
      {treeNodes.map(
        ({
          tokenSet,
          id,
          index,
          isNew,
          isGroup,
          path,
          depth,
        }: any) => {
          if (isGroup) {
            return (
              <SetsTreeSetGroup
                key={index}
                id={id}
                label={path[path.length - 1]}
                isEditing={editionId === id}
                isActive={isTokenSetGroupActive(path)}
                isSelected={false}
                isDraggable={isDraggable}
                isCollapsed={collapsed(path)}
                path={path}
                depth={depth}
                index={index}
                onToggle={onToggleSetGroup}
                onDrop={onDrop}
                onStartEdition={onStartEdition}
                onResetEdition={onResetEdition}
                onEditSubmit={onEditSubmitGroup}
                onToggleCollapse={onToggleCollapse}
              />
            )
          }

          if (isNew) {
            return (
              <SetsTreeSet
                key={index}
                id={id}
                set={tokenSet}
                label=""
                isEditing={true}
                isActive={true}
                isSelected={true}
                isDraggable={false}
                isNew={true}
                path={path}
                depth={depth}
                index={index}
                onDrop={onDrop}
                onResetEdition={onResetEdition}
                onEditSubmit={setsHelpers.onCreateTokenSet(tokensLib)}
              />
            )
          }

          return (
            <SetsTreeSet
              key={index}
              id={id}
              set={tokenSet}
              label={path[path.length - 1]}
              isEditing={editionId === id}
              isActive={isTokenSetActive(ctob.getName(tokenSet))}
              isSelected={selected === id}
              isDraggable={isDraggable}
              isNew={false}
              path={path}
              depth={depth}
              index={index}
              onSelect={onSelect}
              onToggle={onToggleSet}
              onDrop={onDrop}
              onStartEdition={onStartEdition}
              onResetEdition={onResetEdition}
              onEditSubmit={onEditSubmitSet}
            />
          )
        }
      )}
    </>
  )
}

interface ControlledSetsListProps {
  tokensLib: any
  tokenSets: any
  selected: string
  onUpdateTokenSet: (set: any, value: string) => void
  onUpdateTokenSetGroup: (path: any[], value: string) => void
  isTokenSetActive: (name: string) => boolean
  isTokenSetGroupActive: (path: any[]) => boolean
  onCreateTokenSet: (set: any) => void
  onToggleTokenSet: (name: string) => void
  onToggleTokenSetGroup: (path: any[]) => void
  onStartEdition: (id: string) => void
  onResetEdition: (v: any) => void
  origin: string
  onSelect: (id: string) => void
  newPath: any[]
  editionId: string
}

const ControlledSetsList: React.FC<ControlledSetsListProps> = ({
  tokensLib,
  tokenSets,
  selected,
  onUpdateTokenSet,
  onUpdateTokenSetGroup,
  isTokenSetActive,
  isTokenSetGroupActive,
  onCreateTokenSet,
  onToggleTokenSet,
  onToggleTokenSetGroup,
  onStartEdition,
  onResetEdition,
  origin,
  onSelect,
  newPath,
  editionId,
}) => {
  const themeModal = origin === "theme-modal"
  const canEdit = React.useContext(ctx.canEditContext)
  const draggable = !themeModal && canEdit
  const emptyState =
    themeModal && (!tokenSets || tokenSets.length === 0) && !newPath

  const onResetEditionSafe = useCallback(
    (v: any) => {
      if (onResetEdition) {
        onResetEdition(v)
      }
    },
    [onResetEdition]
  )

  const onStartEditionSafe = useCallback(
    (v: any) => {
      if (onStartEdition) {
        onStartEdition(v)
      }
    },
    [onStartEdition]
  )

  return (
    <div className={(stl as any).css("sets-list")}>
      {emptyState ? (
        <Text
          as="span"
          typography="body-small"
          className={(stl as any).css("empty-state-message-sets")}
        >
          {tr("workspace.tokens.no-sets-create")}
        </Text>
      ) : (
        <TokenSetsTree
          isDraggable={draggable}
          newPath={newPath}
          editionId={editionId}
          tokensLib={tokensLib}
          tokenSets={tokenSets}
          selected={selected}
          onSelect={onSelect}
          isTokenSetActive={isTokenSetActive}
          isTokenSetGroupActive={isTokenSetGroupActive}
          onToggleSet={onToggleTokenSet}
          onToggleSetGroup={onToggleTokenSetGroup}
          onCreateTokenSet={onCreateTokenSet}
          onStartEdition={onStartEditionSafe}
          onResetEdition={onResetEditionSafe}
          onEditSubmitSet={onUpdateTokenSet}
          onEditSubmitGroup={onUpdateTokenSetGroup}
        />
      )}
    </div>
  )
}
