// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useState, useCallback } from "react"
import * as cpn from "app.common.path-names"
import * as sm from "app.common/schema"
import * as modal from "app.main.data.modal"
import * as dw from "app/main/data/workspace"
import * as st from "app/main.store"
import { FormInput } from "app.main.ui.components.forms"
import { TitleBar } from "app.main.ui.components.title-bar"
import { IconButton } from "app.main.ui.ds.buttons.icon-button"
import { Icon, icons } from "app.main.ui.ds.foundations.assets.icon"
import * as deprecatedIcon from "app.main.ui.icons"
import { AssetsContextMenu, closeContextMenu, initialContextMenuState, openContextMenu } from "app.main.ui.workspace.sidebar.assets.common"
import { tr } from "app.util.i18n"
import * as dom from "app.util.dom"

const CSS = {
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
}

function css(className: string, ..._rest: any[]): string {
  return className
}

// Asset Group Title Component
interface AssetGroupTitleProps {
  fileId: string
  section: string
  path: string
  isGroupOpen: boolean
  onRename: (event: React.MouseEvent, path: string, lastPath: string) => void
  onUngroup: (path: string) => void
  onGroupCombineVariants?: (path: string) => void
  isCanCombine?: boolean
}

export const AssetGroupTitle: React.FC<AssetGroupTitleProps> = ({
  fileId,
  section,
  path,
  isGroupOpen,
  onRename,
  onUngroup,
  onGroupCombineVariants,
  isCanCombine = false,
}) => {
  if (!path || path.length === 0) return null

  const [otherPath, lastPath, truncated] = cpn.compactPath(path, 35, true)
  const [menuState, setMenuState] = useState(initialContextMenuState)

  const onFoldGroup = useCallback(
    (event: React.MouseEvent) => {
      dom.stopPropagation(event)
      st.emit!(dw.setAssetsGroupOpen(fileId, section, path, !isGroupOpen))
    },
    [fileId, section, path, isGroupOpen]
  )

  const onContextMenu = useCallback((event: React.MouseEvent) => {
    dom.preventDefault(event)
    dom.stopPropagation(event)
    const pos = dom.getClientPosition(event)
    setMenuState(openContextMenu(menuState, pos))
  }, [menuState])

  const onCloseMenu = useCallback(() => {
    setMenuState(closeContextMenu(menuState))
  }, [menuState])

  const menuOptions = [
    { name: tr("workspace.assets.rename"), id: "assets-rename-group", handler: () => onRename(null as any, path, lastPath) },
    { name: tr("workspace.assets.ungroup"), id: "assets-ungroup-group", handler: () => onUngroup(path) },
  ]

  if (isCanCombine && onGroupCombineVariants) {
    menuOptions.push({
      name: tr("workspace.shape.menu.combine-as-variants"),
      id: "assets-combine-as-variants",
      handler: () => onGroupCombineVariants(path),
    })
  }

  return (
    <div className={css(CSS.groupTitleWrapper)}>
      <div className={css(CSS.groupTitle)} onContextMenu={onContextMenu}>
        <TitleBar
          collapsable
          collapsed={!isGroupOpen}
          allClickable
          onCollapsed={onFoldGroup}
          title={
            <>
              {otherPath && otherPath.length > 0 && (
                <span className={css(CSS.prePath)} title={truncated ? path : undefined}>
                  {otherPath}\u00A0\u2022\u00A0
                </span>
              )}
              <span className={css(CSS.path)} title={truncated ? path : undefined}>
                {lastPath}
              </span>
            </>
          }
        />

        <AssetsContextMenu
          onClose={onCloseMenu}
          state={menuState}
          options={menuOptions}
        />
      </div>

      <div className={css(CSS.titleMenu)}>
        <IconButton
          variant="ghost"
          ariaLabel={tr("workspace.assets.component-group-options")}
          onClick={onContextMenu}
          icon={icons.menu}
        />
      </div>
    </div>
  )
}

// Group assets helper
export function groupAssets<T extends { path?: string }>(
  assets: T[],
  reverseSort: boolean
): Record<string, T[]> {
  if (!assets || assets.length === 0) return {}

  const sortedMap = new (Map as any)(undefined, (a: string, b: string) =>
    reverseSort ? b.localeCompare(a) : a.localeCompare(b)
  )

  const result = assets.reduce((groups, asset) => {
    const pathParts = cpn.splitPath(asset.path || "")
    let current = groups

    for (const part of pathParts) {
      if (!current[part]) {
        current[part] = {}
      }
      current = current[part] as any
    }

    if (!current[""]) {
      current[""] = []
    }
    current[""].push(asset)

    return groups
  }, {} as Record<string, any>)

  return result
}

// Schema for group form
const schemaGroupForm = sm.schema.define("GroupForm", {
  name: sm.schema.text({ max: 250 }),
})

interface NameGroupDialogProps {
  path?: string
  lastPath?: string
  accept: (path: string, name: string) => void
}

export const NameGroupDialog: React.FC<NameGroupDialogProps> = ({
  path = "",
  lastPath = "",
  accept,
}) => {
  const [name, setName] = useState(lastPath)

  const create = path.length === 0

  const onAccept = useCallback(() => {
    if (create) {
      accept(name)
    } else {
      accept(path, name)
    }
    modal.hide!()
  }, [create, path, name, accept])

  return (
    <div className={css(CSS.modalOverlay)}>
      <div className={css(CSS.modalContainer)}>
        <div className={css(CSS.modalHeader)}>
          <h2 className={css(CSS.modalTitle)}>
            {create ? tr("workspace.assets.create-group") : tr("workspace.assets.rename-group")}
          </h2>
          <button className={css(CSS.modalCloseBtn)} onClick={modal.hide!}>
            {deprecatedIcon.close}
          </button>
        </div>

        <div className={css(CSS.modalContent)}>
          <div className={css(CSS.inputWrapper)}>
            <label>{tr("workspace.assets.group-name")}</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
              maxLength={250}
            />
            <span>{tr("workspace.assets.create-group-hint")}</span>
          </div>
        </div>

        <div className={css(CSS.modalFooter)}>
          <div className={css(CSS.actionButtons)}>
            <button className={css(CSS.cancelButton)} onClick={modal.hide!}>
              {tr("labels.cancel")}
            </button>
            <button
              className={css(CSS.acceptBtn, !name ? CSS.globalDisabled : undefined)}
              onClick={onAccept}
              disabled={!name}
            >
              {create ? tr("labels.create") : tr("labels.rename")}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Register the modal component (in a real app this would be done differently)
export function registerModals() {
  modal.register("name-group-dialog", NameGroupDialog)
}