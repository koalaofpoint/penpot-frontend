// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useState, useCallback } from "react"
import * as d from "app.common.data"
import * as dm from "app.common.data.macros"
import * as cts from "app.common.types.stroke"
import * as udw from "app/main/data/workspace"
import * as dc from "app/main/data/workspace/colors"
import * as dwta from "app/main/data/workspace/tokens/application"
import {store} from "app/main/store"
import {TitleBar} from "app/main/ui/components/title-bar"
import {IconButton} from "app/main/ui/ds/buttons/icon-button"
import * as i from "app/main/ui/ds/foundations/assets/icon"
import * as h from "app/main/ui/hooks"
import {StrokeRow} from "app/main/ui/workspace/sidebar/options/rows/stroke-row"
import * as dom from "app/util/dom"
import {tr} from "app/util/i18n"
import * as str from "cuerdas.core"

const strokeAttrs = [
  "strokes",
  "stroke-style",
  "stroke-alignment",
  "stroke-width",
  "stroke-color",
  "stroke-color-ref-id",
  "stroke-color-ref-file",
  "stroke-opacity",
  "stroke-color-gradient",
  "stroke-cap-start",
  "stroke-cap-end",
]

interface StrokeMenuProps {
  ids: string[]
  type: string
  values: any
  showCaps?: boolean
  disableStrokeStyle?: boolean
  appliedTokens?: any
  shapes?: any[]
  objects?: any
}

export const StrokeMenu: React.FC<StrokeMenuProps> = React.memo(
  ({ ids, type, values, showCaps, disableStrokeStyle, appliedTokens, shapes, objects }) => {
    const label =
      type === "multiple"
        ? tr("workspace.options.selection-stroke")
        : type === "group"
        ? tr("workspace.options.group-stroke")
        : tr("labels.stroke")

    const [open, setOpen] = useState(true)
    const toggleContent = useCallback(() => setOpen((prev) => !prev), [])
    const openContent = useCallback(() => setOpen(true), [])

    const strokes = values?.strokes
    const hasStrokes = strokes === "multiple" || (strokes && strokes.length > 0)

    const onColorChange = useCallback(
      (index: number, color: any) => {
        store.emit(udw.triggerBoundingBoxCloaking(ids))
        store.emit(dc.changeStrokeColor(ids, color, index))
      },
      [ids]
    )

    const onRemove = useCallback(
      (index: number) => {
        store.emit(udw.triggerBoundingBoxCloaking(ids))
        store.emit(dc.removeStroke(ids, index))
      },
      [ids]
    )

    const handleRemoveAll = useCallback(
      (_: any) => {
        store.emit(udw.triggerBoundingBoxCloaking(ids))
        store.emit(dc.removeAllStrokes(ids))
      },
      [ids]
    )

    const onColorDetach = useCallback(
      (index: number, color: any) => {
        store.emit(udw.triggerBoundingBoxCloaking(ids))
        const colorClean = d.dissoc(color, "ref-id", "ref-file")
        store.emit(dc.changeStrokeColor(ids, colorClean, index))
      },
      [ids]
    )

    const handleReorder = useCallback(
      (fromPos: number, toSpaceBetweenPos: number) => {
        store.emit(udw.triggerBoundingBoxCloaking(ids))
        store.emit(dc.reorderStrokes(ids, fromPos, toSpaceBetweenPos))
      },
      [ids]
    )

    const onStrokeStyleChange = useCallback(
      (index: number, value: any) => {
        store.emit(udw.triggerBoundingBoxCloaking(ids))
        store.emit(dc.changeStrokeAttrs(ids, { "stroke-style": value }, index))
      },
      [ids]
    )

    const onStrokeAlignmentChange = useCallback(
      (index: number, value: any) => {
        if (!str.empty(value)) {
          store.emit(udw.triggerBoundingBoxCloaking(ids))
          store.emit(dc.changeStrokeAttrs(ids, { "stroke-alignment": value }, index))
        }
      },
      [ids]
    )

    const onStrokeWidthChange = useCallback(
      (index: number, value: any) => {
        if (!str.empty(value)) {
          store.emit(udw.triggerBoundingBoxCloaking(ids))
          store.emit(dc.changeStrokeAttrs(ids, { "stroke-width": value }, index))
        }
      },
      [ids]
    )

    const openCapsSelect = useCallback(
      (capsState: any) => (event: any) => {
        const windowSize = dom.getWindowSize()
        const target = dom.getCurrentTarget(event)
        const rect = dom.getBoundingRect(target)

        const top =
          rect.bottom + 320 < windowSize.height
            ? rect.bottom + 5
            : windowSize.height - 325

        const left =
          rect.left + 200 < windowSize.width ? rect.left : windowSize.width - 205

        capsState.open = true
        capsState.left = left
        capsState.top = top
      },
      []
    )

    const closeCapsSelect = useCallback(
      (capsState: any) => (_: any) => {
        capsState.open = false
      },
      []
    )

    const onStrokeCapStartChange = useCallback(
      (index: number, value: any) => {
        store.emit(udw.triggerBoundingBoxCloaking(ids))
        store.emit(dc.changeStrokeAttrs(ids, { "stroke-cap-start": value }, index))
      },
      [ids]
    )

    const onStrokeCapEndChange = useCallback(
      (index: number, value: any) => {
        store.emit(udw.triggerBoundingBoxCloaking(ids))
        store.emit(dc.changeStrokeAttrs(ids, { "stroke-cap-end": value }, index))
      },
      [ids]
    )

    const onStrokeCapSwitch = useCallback(
      (index: number) => {
        const strokeCapStart = d.getIn(values, ["strokes", index, "stroke-cap-start"])
        const strokeCapEnd = d.getIn(values, ["strokes", index, "stroke-cap-end"])
        if (
          strokeCapStart !== "multiple" &&
          strokeCapEnd !== "multiple"
        ) {
          store.emit(udw.triggerBoundingBoxCloaking(ids))
          store.emit(
            dc.changeStrokeAttrs(
              ids,
              { "stroke-cap-start": strokeCapEnd, "stroke-cap-end": strokeCapStart },
              index
            )
          )
        }
      },
      [ids, values]
    )

    const onAddStroke = useCallback(
      (_: any) => {
        store.emit(udw.triggerBoundingBoxCloaking(ids))
        store.emit(dc.addStroke(ids, cts.defaultStroke))
        if (!strokes || strokes.length === 0) {
          openContent()
        }
      },
      [ids, strokes, openContent]
    )

    const [disableDrag, setDisableDrag] = useState(false)
    const onFocus = useCallback(() => setDisableDrag(true), [])
    const onBlur = useCallback(() => setDisableDrag(false), [])

    const onDetachToken = useCallback(
      (tokenName: string, attrs: any) => {
        store.emit(
          dwta.unapplyToken({
            tokenName,
            attributes: attrs,
            shapeIds: ids,
          })
        )
      },
      [ids]
    )

    const strokesArray = values?.strokes || []

    return (
      <section className={(stl as any).css("stroke-section")} aria-label="stroke-section">
        <div className={(stl as any).css("stroke-title")}>
          <TitleBar
            collapsable={hasStrokes}
            collapsed={!open}
            onCollapsed={toggleContent}
            title={label}
            className={(stl as any).cssCase("stroke-title-bar", !hasStrokes)}
          >
            {strokes !== "multiple" && (
              <IconButton
                variant="ghost"
                ariaLabel={tr("workspace.options.stroke.add-stroke")}
                onClick={onAddStroke}
                icon={i.add}
                data-testid="add-stroke"
              />
            )}
          </TitleBar>
        </div>
        {open && (
          <div
            className={(stl as any).cssCase(
              "stroke-content",
              true,
              "stroke-content-empty",
              !hasStrokes
            )}
          >
            {strokes === "multiple" ? (
              <div className={(stl as any).css("stroke-multiple")}>
                <div className={(stl as any).css("stroke-multiple-label")}>
                  {tr("settings.multiple")}
                </div>
                <IconButton
                  variant="ghost"
                  ariaLabel={tr("workspace.options.stroke.remove-stroke")}
                  onClick={handleRemoveAll}
                  icon={i.remove}
                />
              </div>
            ) : strokesArray.length > 0 ? (
              <h.SortableContainer>
                {strokesArray.map((stroke: any, index: number) => (
                  <StrokeRow
                    key={dm.str("stroke-", index)}
                    stroke={stroke}
                    title={tr("workspace.options.stroke-color")}
                    index={index}
                    shapes={shapes}
                    objects={objects}
                    showCaps={showCaps}
                    onColorChange={(color: any) => onColorChange(index, color)}
                    onColorDetach={(color: any) => onColorDetach(index, color)}
                    onStrokeWidthChange={(value: any) => onStrokeWidthChange(index, value)}
                    onStrokeStyleChange={(value: any) => onStrokeStyleChange(index, value)}
                    onStrokeAlignmentChange={(value: any) =>
                      onStrokeAlignmentChange(index, value)
                    }
                    openCapsSelect={openCapsSelect}
                    closeCapsSelect={closeCapsSelect}
                    onStrokeCapStartChange={(value: any) =>
                      onStrokeCapStartChange(index, value)
                    }
                    onStrokeCapEndChange={(value: any) =>
                      onStrokeCapEndChange(index, value)
                    }
                    onStrokeCapSwitch={() => onStrokeCapSwitch(index)}
                    appliedTokens={appliedTokens}
                    onDetachToken={onDetachToken}
                    onRemove={() => onRemove(index)}
                    onReorder={handleReorder}
                    disableDrag={disableDrag}
                    onFocus={onFocus}
                    selectOnFocus={!disableDrag}
                    onBlur={onBlur}
                    ids={ids}
                    disableStrokeStyle={disableStrokeStyle}
                  />
                ))}
              </h.SortableContainer>
            ) : null}
          </div>
        )}
      </section>
    )
  },
  (prevProps, nextProps) => {
    return (
      prevProps.ids === nextProps.ids &&
      prevProps.values === nextProps.values &&
      prevProps.type === nextProps.type &&
      prevProps.showCaps === nextProps.showCaps &&
      prevProps.appliedTokens === nextProps.appliedTokens
    )
  }
)
