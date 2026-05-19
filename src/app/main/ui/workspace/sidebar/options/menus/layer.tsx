// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useState, useCallback, useMemo } from "react"
import * as d from "app/common/data"
import * as dm from "app/common/data/macros"
import * as dw from "app/main/data/workspace"
import * as dwsh from "app/main/data/workspace/shapes"
import * as dwta from "app/main/data/workspace/tokens/application"
import * as features from "app/main/features"
import {store} from "app/main/store"
import {NumericInput} from "app/main/ui/components/numeric-input"
import {Select} from "app/main/ui/components/select"
import {IconButton} from "app/main/ui/ds/buttons/icon-button"
import * as i from "app/main/ui/ds/foundations/assets/icon"
import * as wasmApi from "app/render-wasm/api"
import {tr} from "app/util/i18n"

const layerAttrs = ["opacity", "blend-mode", "blocked", "hidden"]

function opacityToString(opacity: any): any {
  if (opacity !== "multiple") {
    return dm.str(d.coalesce(opacity, 1) * 100)
  }
  return "multiple"
}

function onChange(ids: string[], prop: string, value: any) {
  store.emit(dwsh.updateShapes(ids, (shape: any) => ({ ...shape, [prop]: value })))
}

function checkLayerMenuProps(oldProps: any, newProps: any): boolean {
  const oldValues = oldProps?.["values"]
  const newValues = newProps?.["values"]

  const oldAppliedTokens = oldProps?.["appliedTokens"]
  const newAppliedTokens = newProps?.["appliedTokens"]

  return (
    oldProps?.["class"] === newProps?.["class"] &&
    oldProps?.["ids"] === newProps?.["ids"] &&
    oldAppliedTokens === newAppliedTokens &&
    oldValues?.opacity === newValues?.opacity &&
    oldValues?.["blend-mode"] === newValues?.["blend-mode"] &&
    oldValues?.blocked === newValues?.blocked &&
    oldValues?.hidden === newValues?.hidden
  )
}

interface LayerMenuProps {
  ids: string[]
  values: any
  appliedTokens?: any
}

export const LayerMenu: React.FC<LayerMenuProps> = React.memo(
  ({ ids, values, appliedTokens }) => {
    const tokenNumericInputs = features.useFeature("tokens/numeric-input")

    const hidden = values?.hidden
    const blocked = values?.blocked

    const onDetachToken = useCallback(
      (tokenName: string, attr: string) => {
        store.emit(
          dwta.unapplyToken({
            tokenName,
            attributes: new Set([attr]),
            shapeIds: ids,
          })
        )
      },
      [ids]
    )

    const currentBlendMode = values?.["blend-mode"] || "normal"
    const currentOpacity = opacityToString(values?.opacity)

    const [selectedBlendMode, setSelectedBlendMode] = useState(currentBlendMode)
    const [optionHighlighted, setOptionHighlighted] = useState(false)
    const [previewComplete, setPreviewComplete] = useState(true)

    const wasmRendererEnabled = features.useFeature("render-wasm/v1")

    const handleChangeBlendMode = useCallback(
      (value: any) => {
        setSelectedBlendMode(value)
        setOptionHighlighted(false)
        setPreviewComplete(true)
        store.emit(dw.unsetPreviewBlendMode(ids))
        onChange(ids, "blend-mode", value)
      },
      [ids]
    )

    const handleBlendModeEnter = useCallback(
      (value: any) => {
        setPreviewComplete(false)
        setOptionHighlighted(true)

        if (wasmRendererEnabled) {
          ids.forEach((id) => {
            wasmApi.useShape(id)
            wasmApi.setShapeBlendMode(value)
            wasmApi.requestRender("preview-blend-mode")
          })
        }

        store.emit(dw.triggerBoundingBoxCloaking(ids))
        store.emit(dw.setPreviewBlendMode(ids, value))
      },
      [ids, wasmRendererEnabled]
    )

    const handleBlendModeLeave = useCallback(
      (_value: any) => {
        setPreviewComplete(true)
        store.emit(dw.unsetPreviewBlendMode(ids))
      },
      [ids]
    )

    const handleOpacityChange = useCallback(
      (value: number) => {
        store.emit(dw.triggerBoundingBoxCloaking(ids))
        const newValue = value / 100
        onChange(ids, "opacity", newValue)
      },
      [ids]
    )

    const onOpacityChange = useCallback(
      (value: any) => {
        if (typeof value === "string" || typeof value === "number") {
          handleOpacityChange(value as number)
        } else {
          store.emit(
            dwta.toggleToken({
              token: value[0],
              attrs: new Set(["opacity"]),
              shapeIds: ids,
            })
          )
        }
      },
      [handleOpacityChange, ids]
    )

    const handleSetHidden = useCallback(() => {
      store.emit(dw.triggerBoundingBoxCloaking(ids))
      onChange(ids, "hidden", true)
    }, [ids])

    const handleSetVisible = useCallback(() => {
      store.emit(dw.triggerBoundingBoxCloaking(ids))
      onChange(ids, "hidden", false)
    }, [ids])

    const handleSetBlocked = useCallback(() => {
      store.emit(dw.triggerBoundingBoxCloaking(ids))
      onChange(ids, "blocked", true)
    }, [ids])

    const handleSetUnblocked = useCallback(() => {
      store.emit(dw.triggerBoundingBoxCloaking(ids))
      onChange(ids, "blocked", false)
    }, [ids])

    const options = useMemo(() => {
      const result = []

      if (currentBlendMode === "multiple") {
        result.push({ value: "multiple", label: "--" })
      }

      result.push(
        { value: "normal", label: tr("workspace.options.layer-options.blend-mode.normal") },
        { value: "darken", label: tr("workspace.options.layer-options.blend-mode.darken") },
        { value: "multiply", label: tr("workspace.options.layer-options.blend-mode.multiply") },
        { value: "color-burn", label: tr("workspace.options.layer-options.blend-mode.color-burn") },
        { value: "lighten", label: tr("workspace.options.layer-options.blend-mode.lighten") },
        { value: "screen", label: tr("workspace.options.layer-options.blend-mode.screen") },
        { value: "color-dodge", label: tr("workspace.options.layer-options.blend-mode.color-dodge") },
        { value: "overlay", label: tr("workspace.options.layer-options.blend-mode.overlay") },
        { value: "soft-light", label: tr("workspace.options.layer-options.blend-mode.soft-light") },
        { value: "hard-light", label: tr("workspace.options.layer-options.blend-mode.hard-light") },
        { value: "difference", label: tr("workspace.options.layer-options.blend-mode.difference") },
        { value: "exclusion", label: tr("workspace.options.layer-options.blend-mode.exclusion") },
        { value: "hue", label: tr("workspace.options.layer-options.blend-mode.hue") },
        { value: "saturation", label: tr("workspace.options.layer-options.blend-mode.saturation") },
        { value: "color", label: tr("workspace.options.layer-options.blend-mode.color") },
        { value: "luminosity", label: tr("workspace.options.layer-options.blend-mode.luminosity") }
      )

      return result
    }, [currentBlendMode])

    React.useEffect(() => {
      if (!optionHighlighted || previewComplete) {
        setSelectedBlendMode(currentBlendMode)
      }
    }, [currentBlendMode, optionHighlighted, previewComplete])

    const isMultiple = (val: any) => val === "multiple"
    const opacityValue = (values?.opacity !== undefined ? values?.opacity : 1) * 100
    const opacityPlaceholder =
      isMultiple(appliedTokens?.opacity) || isMultiple(values?.opacity)
        ? tr("settings.multiple")
        : "--"

    return (
      <section
        className={(stl as any).cssCase("element-set-content", true, "hidden", hidden)}
        aria-label="layer-menu-section"
      >
        <div className={(stl as any).css("select")}>
          <Select
            defaultValue={selectedBlendMode}
            options={options}
            onChange={handleChangeBlendMode}
            isOpen={optionHighlighted}
            className={(stl as any).cssCase("hidden-select", hidden)}
            onPointerEnterOption={handleBlendModeEnter}
            onPointerLeaveOption={handleBlendModeLeave}
          />
        </div>

        {tokenNumericInputs ? (
          <NumericInputWrapper
            onChange={onOpacityChange}
            onDetach={onDetachToken}
            icon={i.percentage}
            min={0}
            max={100}
            attr="opacity"
            property={tr("workspace.options.opacity")}
            appliedToken={appliedTokens?.opacity}
            placeholder={opacityPlaceholder}
            align="right"
            className={(stl as any).css("numeric-input-wrapper")}
            value={opacityValue}
          />
        ) : (
          <div className={(stl as any).css("input")} title={tr("workspace.options.opacity")}>
            <span className={(stl as any).css("icon")}>%</span>
            <NumericInput
              value={currentOpacity}
              placeholder="--"
              onChange={handleOpacityChange}
              min={0}
              max={100}
              className={(stl as any).css("numeric-input")}
            />
          </div>
        )}

        <div className={(stl as any).css("actions")}>
          {isMultiple(hidden) || !hidden ? (
            <IconButton
              variant="ghost"
              ariaLabel={tr("workspace.options.layer-options.toggle-layer")}
              onClick={handleSetHidden}
              icon={i.shown}
            />
          ) : (
            <IconButton
              variant="ghost"
              ariaLabel={tr("workspace.options.layer-options.toggle-layer")}
              onClick={handleSetVisible}
              icon={i.hide}
            />
          )}

          {isMultiple(blocked) || !blocked ? (
            <IconButton
              variant="ghost"
              ariaLabel={tr("workspace.shape.menu.lock")}
              onClick={handleSetBlocked}
              icon={i.unlock}
            />
          ) : (
            <IconButton
              variant="ghost"
              ariaLabel={tr("workspace.shape.menu.unlock")}
              onClick={handleSetUnblocked}
              icon={i.lock}
            />
          )}
        </div>
      </section>
    )
  },
  checkLayerMenuProps
)
