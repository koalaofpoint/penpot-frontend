// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react"
import * as D from "app/common/data"
import * as DW from "app/main/data/workspace"
import * as DWU from "app/main/data/workspace/undo"
import {store} from "app/main/store"
import {NumericInput} from "app/main/ui/components/numeric-input"
import {ReorderHandler} from "app/main/ui/components/reorder-handler"
import {Select} from "app/main/ui/components/select"
import {IconButton} from "app/main/ui/ds/buttons/icon-button"
import * as I from "app/main/ui/ds/foundations/assets/icon"
import * as H from "app/main/ui/hooks"
import {AdvancedOptions} from "app/main/ui/workspace/sidebar/options/common"
import {ColorRow} from "app/main/ui/workspace/sidebar/options/rows/color-row"
import {_tr} from "app/util/i18n"

interface ShadowRowProps {
  index: number
  shadow: any
  isOpen: boolean
  onReorder?: (fromPos: number, toPos: number) => void
  onToggleOpen: (shadowId: string) => void
  onDetachColor: (index: number) => void
  onUpdate: (index: number, property: string, value: any) => void
  onRemove: (index: number) => void
  onToggleVisibility: (index: number) => void
}

export const ShadowRow: React.FC<ShadowRowProps> = (props) => {
  const {
    index,
    shadow,
    isOpen,
    onReorder,
    onToggleOpen,
    onDetachColor,
    onUpdate,
    onRemove,
    onToggleVisibility,
  } = props

  const shadowStyle = shadow["style"]
  const shadowId = shadow["id"]
  const hidden = shadow["hidden"]

  const onDrop = React.useCallback(
    (relativePos: any, data: any) => {
      if (!onReorder) return
      const fromPos = data["index"]
      const toSpaceBetweenPos = relativePos === "bot" ? index + 1 : index
      onReorder(fromPos, toSpaceBetweenPos)
    },
    [onReorder, index]
  )

  const dprops = H.useSortable({
    dataType: "penpot/shadow-entry",
    onDrop,
    detectCenter: false,
    data: {index},
  })

  const onRemoveCallback = React.useCallback(
    () => onRemove(index),
    [index, onRemove]
  )

  const triggerBoundingBoxCloaking = React.useCallback(() => {
    if (shadowId) {
      store.emit(DW.triggerBoundingBoxCloaking([shadowId]))
    }
  }, [shadowId])

  const onUpdateOffsetX = React.useCallback(
    (value: any) => {
      triggerBoundingBoxCloaking()
      onUpdate(index, "offset-x", value)
    },
    [index, onUpdate, triggerBoundingBoxCloaking]
  )

  const onUpdateOffsetY = React.useCallback(
    (value: any) => {
      triggerBoundingBoxCloaking()
      onUpdate(index, "offset-y", value)
    },
    [index, onUpdate, triggerBoundingBoxCloaking]
  )

  const onUpdateSpread = React.useCallback(
    (value: any) => {
      triggerBoundingBoxCloaking()
      onUpdate(index, "spread", value)
    },
    [index, onUpdate, triggerBoundingBoxCloaking]
  )

  const onUpdateBlur = React.useCallback(
    (value: any) => {
      triggerBoundingBoxCloaking()
      onUpdate(index, "blur", value)
    },
    [index, onUpdate, triggerBoundingBoxCloaking]
  )

  const onUpdateColor = React.useCallback(
    (color: any) => {
      triggerBoundingBoxCloaking()
      onUpdate(index, "color", color)
    },
    [index, onUpdate, triggerBoundingBoxCloaking]
  )

  const onDetachColorCallback = React.useCallback(
    () => onDetachColor(index),
    [index, onDetachColor]
  )

  const onStyleChange = React.useCallback(
    (value: any) => {
      triggerBoundingBoxCloaking()
      onUpdate(index, "style", D.keyword(value))
    },
    [index, onUpdate, triggerBoundingBoxCloaking]
  )

  const onToggleVisibilityCallback = React.useCallback(() => {
    triggerBoundingBoxCloaking()
    onToggleVisibility(index)
  }, [index, onToggleVisibility, triggerBoundingBoxCloaking])

  const onToggleOpenCallback = React.useCallback(
    () => onToggleOpen(shadowId),
    [shadowId, onToggleOpen]
  )

  const typeOptions = React.useMemo(() => [
    {value: "drop-shadow", label: _tr("workspace.options.shadow-options.drop-shadow")},
    {value: "inner-shadow", label: _tr("workspace.options.shadow-options.inner-shadow")},
  ], [])

  const onOpenRow = React.useCallback(
    () => store.emit(DWU.startUndoTransaction(":color-row")),
    []
  )

  const onCloseRow = React.useCallback(
    () => store.emit(DWU.commitUndoTransaction(":color-row")),
    []
  )

  const className = [
    "global/shadow-option",
    "shadow-element",
    dprops["over"] === "top" ? "dnd-over-top" : "",
    dprops["over"] === "bot" ? "dnd-over-bot" : "",
  ].filter(Boolean).join(" ")

  return (
    <div className={className}>
      {onReorder && <ReorderHandler/>}

      <div className="shadow-basic">
        <div className="shadow-basic-info">
          <IconButton
            variant="secondary"
            icon={I.menu}
            className={["shadow-basic-button", isOpen ? "selected" : ""].filter(Boolean).join(" ")}
            aria-label="open more options"
            disabled={hidden}
            onClick={onToggleOpenCallback}
          />
          <Select
            className="shadow-basic-select"
            defaultValue={D.name(shadowStyle)}
            options={typeOptions}
            disabled={hidden}
            onChange={onStyleChange}
          />
        </div>

        <div className="shadow-basic-actions">
          <IconButton
            variant="ghost"
            aria-label={_tr("workspace.options.shadow-options.toggle-shadow")}
            onClick={onToggleVisibilityCallback}
            icon={hidden ? "hide" : "shown"}
          />
          <IconButton
            variant="ghost"
            aria-label={_tr("workspace.options.shadow-options.remove-shadow")}
            onClick={onRemoveCallback}
            icon={I.remove}
          />
        </div>
      </div>

      {isOpen && (
        <AdvancedOptions
          className="shadow-advanced"
          isVisible={isOpen}
          onClose={onToggleOpenCallback}
        >
          <div className="shadow-advanced-row">
            <div className="shadow-advanced-offset-x" title={_tr("workspace.options.shadow-options.offsetx")}>
              <span className="shadow-advanced-label">X</span>
              <NumericInput
                noValidate={true}
                placeholder="--"
                onChange={onUpdateOffsetX}
                value={shadow["offset-x"]}
              />
            </div>

            <div className="shadow-advanced-blur" title={_tr("workspace.options.shadow-options.blur")}>
              <span className="shadow-advanced-label">
                {_tr("workspace.options.shadow-options.blur")}
              </span>
              <NumericInput
                noValidate={true}
                placeholder="--"
                onChange={onUpdateBlur}
                min={0}
                value={shadow["blur"]}
              />
            </div>

            <div className="shadow-advanced-spread" title={_tr("workspace.options.shadow-options.spread")}>
              <span className="shadow-advanced-label">
                {_tr("workspace.options.shadow-options.spread")}
              </span>
              <NumericInput
                noValidate={true}
                placeholder="--"
                onChange={onUpdateSpread}
                value={shadow["spread"]}
              />
            </div>
          </div>

          <div className="shadow-advanced-row">
            <div className="shadow-advanced-offset-y" title={_tr("workspace.options.shadow-options.offsety")}>
              <span className="shadow-advanced-label">Y</span>
              <NumericInput
                noValidate={true}
                placeholder="--"
                onChange={onUpdateOffsetY}
                value={shadow["offset-y"]}
              />
            </div>

            <ColorRow
              className="shadow-advanced-color"
              color={shadow["color"]}
              title={_tr("workspace.options.shadow-options.color")}
              disableGradient={true}
              disableImage={true}
              origin="shadow"
              onChange={onUpdateColor}
              onDetach={onDetachColorCallback}
              onOpen={onOpenRow}
              onClose={onCloseRow}
            />
          </div>
        </AdvancedOptions>
      )}
    </div>
  )
}
