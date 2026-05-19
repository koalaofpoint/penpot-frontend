// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from "react"
import { useCallback, useState, useRef, useEffect } from "react"
import * as d from "app/common/data"
import * as dm from "app/common/data/macros"
import * as ctv from "app/common/types/variant"
import * as dw from "app/main/data/workspace"
import * as st from "app/main/store"
import * as dbg from "app/util/debug"
import * as dom from "app/util/dom"
import * as kbd from "app/util/keyboard"
import * as str from "cuerdas/core"

const SPACE_FOR_ICONS = 110

interface LayerNameProps {
  shapeId: string
  shapeName: string
  isShapeTouched?: boolean
  disabledDoubleClick?: boolean
  onStartEdit?: () => void
  onStopEdit?: () => void
  depth: number
  parentSize: number
  isSelected?: boolean
  typeComp?: boolean
  typeFrame?: boolean
  componentId?: string
  isHidden?: boolean
  isBlocked?: boolean
  variantId?: string
  variantName?: string
  variantProperties?: any
  variantError?: string
}

export const LayerName: React.FC<LayerNameProps> = (props) => {
  const {
    shapeId,
    shapeName,
    isShapeTouched = false,
    disabledDoubleClick = false,
    onStartEdit,
    onStopEdit,
    depth,
    parentSize,
    isSelected = false,
    typeComp = false,
    typeFrame = false,
    componentId,
    isHidden = false,
    isBlocked = false,
    variantId,
    variantName,
    variantProperties,
    variantError,
  } = props

  const [edition, setEdition] = useState(false)
  const localRef = useRef<HTMLInputElement | null>(null)
  const ref = localRef

  const shapeName_ = variantId
    ? d.nilv(variantError, variantName)
    : shapeName

  const defaultValue = variantId
    ? (variantError || ctv.propertiesMapToFormula(variantProperties))
    : shapeName

  const hasPath = str.includes(shapeName, "/")

  const startEdit = useCallback(() => {
    if (!isBlocked && !disabledDoubleClick) {
      onStartEdit?.()
      setEdition(true)
      st.emit!(dw.startRenameShape(shapeId))
    }
  }, [isBlocked, disabledDoubleClick, onStartEdit, shapeId])

  const acceptEdit = useCallback(() => {
    const nameInput = ref.current
    const name = str.trim(dom.getValue(nameInput as HTMLInputElement))
    onStopEdit?.()
    setEdition(false)
    st.emit!(dw.renameShapeOrVariant(shapeId, name))
  }, [ref, onStopEdit, shapeId])

  const cancelEdit = useCallback(() => {
    onStopEdit?.()
    setEdition(false)
    st.emit!(dw.endRenameShape(shapeId, null))
  }, [onStopEdit, shapeId])

  const onKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (kbd.enter(event)) acceptEdit()
    if (kbd.esc(event)) cancelEdit()
  }, [acceptEdit, cancelEdit])

  const parentSizePx = `${parentSize - SPACE_FOR_ICONS}px`

  useEffect(() => {
    if (shapeId && !edition) {
      startEdit()
    }
  }, [shapeId, edition, startEdit])

  useEffect(() => {
    if (edition && ref.current) {
      dom.selectText!(ref.current)
    }
  }, [edition, ref])

  if (edition) {
    return (
      <input
        className={`element-name element-name-input ${isSelected ? "selected" : ""}`}
        style={{ "--depth": depth, "--parent-size": parentSizePx } as any}
        type="text"
        ref={ref}
        onBlur={acceptEdit}
        onKeyDown={onKeyDown}
        autoFocus
        id={`layer-name-${shapeId}`}
        defaultValue={d.nilv(defaultValue, "")}
      />
    )
  }

  return (
    <>
      <span
        className={`element-name ${hasPath ? "left-ellipsis" : ""} ${isSelected ? "selected" : ""} ${isHidden ? "hidden" : ""} ${typeComp ? "type-comp" : ""} ${typeFrame ? "type-frame" : ""}`}
        id={`layer-name-${shapeId}`}
        style={{ "--depth": depth, "--parent-size": parentSizePx } as any}
        ref={ref as any}
        onDoubleClick={startEdit}
      >
        {dbg.enabled("show-ids")
          ? `${d.nilv(shapeName, "")} | ${str.slice(String(shapeId), 24)}`
          : d.nilv(shapeName, "")}
      </span>
      {dbg.enabled("show-touched") && isShapeTouched && (
        <span className="element-name-touched">*</span>
      )}
    </>
  )
}
