// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react"
import * as D from "app/common/data"
import * as CTC from "app/common/types/color"
import * as DWTA from "app/main/data/workspace/tokens/application"
import * as Features from "app/main/features"
import {store} from "app/main/store"
import {NumericInput} from "app/main/ui/components/numeric-input"
import {ReorderHandler} from "app/main/ui/components/reorder-handler"
import {Select} from "app/main/ui/components/select"
import {IconButton} from "app/main/ui/ds/buttons/icon-button"
import {Icon} from "app/main/ui/ds/foundations/assets/icon"
import * as I from "app/main/ui/ds/foundations/assets/icon"
import * as H from "app/main/ui/hooks"
import {NumericInputWrapper} from "app/main/ui/workspace/sidebar/options/menus/input-wrapper-tokens"
import {ColorRow} from "app/main/ui/workspace/sidebar/options/rows/color-row"
import {_tr} from "app/util/i18n"

interface StrokeRowProps {
  index: number
  stroke: any
  title: string
  showCaps: boolean
  onColorChange: (index: number, color: any) => void
  onReorder?: (fromPos: number, toPos: number) => void
  onColorDetach: (index: number, color: any) => void
  onRemove: (index: number) => void
  onStrokeWidthChange: (index: number, value: any) => void
  onStrokeStyleChange: (index: number, value: any) => void
  onStrokeAlignmentChange: (index: number, value: any) => void
  onStrokeCapStartChange: (index: number, value: any) => void
  onStrokeCapEndChange: (index: number, value: any) => void
  onStrokeCapSwitch: (index: number) => void
  disableDrag: React.MutableRefObject<boolean>
  onFocus: () => void
  onBlur: () => void
  appliedTokens: any
  onDetachToken: (token: any, attrs: Set<string>) => void
  disableStrokeStyle: boolean
  selectOnFocus: boolean
  ids: string[]
}

export const StrokeRow: React.FC<StrokeRowProps> = (props) => {
  const {
    index,
    stroke,
    title,
    showCaps,
    onColorChange,
    onReorder,
    onColorDetach,
    onRemove,
    onStrokeWidthChange,
    onStrokeStyleChange,
    onStrokeAlignmentChange,
    onStrokeCapStartChange,
    onStrokeCapEndChange,
    onStrokeCapSwitch,
    disableDrag,
    onFocus,
    onBlur,
    appliedTokens,
    onDetachToken,
    disableStrokeStyle,
    selectOnFocus,
    ids,
  } = props

  const tokenNumericInputs = Features.useFeature("tokens/numeric-input")

  const onDrop = React.useCallback(
    (relativePos: any, data: any) => {
      if (!onReorder) return
      const fromPos = data["index"]
      const toSpaceBetweenPos = relativePos === "bot" ? index + 1 : index
      onReorder(fromPos, toSpaceBetweenPos)
    },
    [onReorder, index]
  )

  const dprops = onReorder
    ? H.useSortable({
        dataType: "penpot/stroke-row",
        onDrop,
        disabled: disableDrag.current,
        detectCenter: false,
        data: {index},
      })
    : {over: null, ref: null}

  const strokeColorToken = appliedTokens["stroke-color"]

  const onColorChangeRefactor = React.useCallback(
    (color: any) => onColorChange(index, color),
    [index, onColorChange]
  )

  const onColorDetachCallback = React.useCallback(
    (_: any, color: any) => onColorDetach(index, color),
    [index, onColorDetach]
  )

  const onRemoveCallback = React.useCallback(
    () => onRemove(index),
    [index, onRemove]
  )

  const strokeWidth = stroke["stroke-width"]

  const onWidthChange = React.useCallback(
    (value: any) => {
      if (typeof value === "string" || typeof value === "number") {
        onStrokeWidthChange(index, value)
      } else {
        store.emit(DWTA.toggleToken({
          token: value[0],
          attrs: new Set([":stroke-width"]),
          shapeIds: ids,
        }))
      }
    },
    [index, onStrokeWidthChange, ids]
  )

  const strokeAlignment = stroke["stroke-alignment"] || "center"

  const strokeAlignmentOptions = React.useMemo(() => {
    const options = []
    if (strokeAlignment === ":multiple") {
      options.push({value: ":multiple", label: "--"})
    }
    options.push(
      {value: "center", label: _tr("workspace.options.stroke.center")},
      {value: "inner", label: _tr("workspace.options.stroke.inner")},
      {value: "outer", label: _tr("workspace.options.stroke.outer")}
    )
    return options
  }, [strokeAlignment])

  const onAlignmentChange = React.useCallback(
    (value: string) => onStrokeAlignmentChange(index, D.keyword(value)),
    [index, onStrokeAlignmentChange]
  )

  const onTokenChange = React.useCallback(
    (_: any, token: any) => {
      store.emit(DWTA.toggleToken({
        token,
        attrs: new Set([":stroke-color"]),
        shapeIds: ids,
        expandWithChildren: true,
      }))
    },
    [ids]
  )

  const strokeStyle = stroke["stroke-style"] || "solid"

  const strokeStyleOptions = React.useMemo(() => {
    const options = []
    if (strokeStyle === ":multiple") {
      options.push({value: ":multiple", label: "--"})
    }
    options.push(
      {value: "solid", label: _tr("workspace.options.stroke.solid")},
      {value: "dotted", label: _tr("workspace.options.stroke.dotted")},
      {value: "dashed", label: _tr("workspace.options.stroke.dashed")},
      {value: "mixed", label: _tr("workspace.options.stroke.mixed")}
    )
    return options
  }, [strokeStyle])

  const onStyleChange = React.useCallback(
    (value: string) => onStrokeStyleChange(index, D.keyword(value)),
    [index, onStrokeStyleChange]
  )

  const onCapsStartChange = React.useCallback(
    (value: string) => onStrokeCapStartChange(index, D.keyword(value)),
    [index, onStrokeCapStartChange]
  )

  const onCapsEndChange = React.useCallback(
    (value: string) => onStrokeCapEndChange(index, D.keyword(value)),
    [index, onStrokeCapEndChange]
  )

  const onDetachTokenColor = React.useCallback(
    (token: any) => onDetachToken(token, new Set([":stroke-color"])),
    [onDetachToken]
  )

  const onDetachTokenWidth = React.useCallback(
    (token: any) => onDetachToken(token[0], new Set([":stroke-width"])),
    [onDetachToken]
  )

  const strokeCapsOptions = [
    {value: null, label: _tr("workspace.options.stroke-cap.none")},
    ":separator",
    {value: "line-arrow", label: _tr("workspace.options.stroke-cap.line-arrow-short"), icon: "stroke-arrow"},
    {value: "triangle-arrow", label: _tr("workspace.options.stroke-cap.triangle-arrow-short"), icon: "stroke-triangle"},
    {value: "square-marker", label: _tr("workspace.options.stroke-cap.square-marker-short"), icon: "stroke-rectangle"},
    {value: "circle-marker", label: _tr("workspace.options.stroke-cap.circle-marker-short"), icon: "stroke-circle"},
    {value: "diamond-marker", label: _tr("workspace.options.stroke-cap.diamond-marker-short"), icon: "stroke-diamond"},
    ":separator",
    {value: "round", label: _tr("workspace.options.stroke-cap.round"), icon: "stroke-rounded"},
    {value: "square", label: _tr("workspace.options.stroke-cap.square"), icon: "stroke-squared"},
  ]

  const onCapSwitch = React.useCallback(
    () => onStrokeCapSwitch(index),
    [index, onStrokeCapSwitch]
  )

  const className = [
    "stroke-data",
    dprops["over"] === "top" ? "dnd-over-top" : "",
    dprops["over"] === "bot" ? "dnd-over-bot" : "",
  ].filter(Boolean).join(" ")

  return (
    <div className={className} aria-label={`stroke-row-${index}`}>
      {onReorder && <ReorderHandler/>}

      <ColorRow
        color={CTC.strokeToColor(stroke)}
        index={index}
        title={title}
        onChange={onColorChangeRefactor}
        onDetach={onColorDetachCallback}
        onRemove={onRemoveCallback}
        disableDrag={disableDrag}
        appliedToken={index === 0 ? strokeColorToken : null}
        onDetachToken={onDetachTokenColor}
        onTokenChange={onTokenChange}
        onFocus={onFocus}
        origin="stroke-color"
        selectOnFocus={selectOnFocus}
        onBlur={onBlur}
      />

      <div className="stroke-options">
        {tokenNumericInputs ? (
          <NumericInputWrapper
            onChange={onWidthChange}
            onDetach={onDetachTokenWidth}
            icon={I.strokeSize}
            min={0}
            onFocus={onFocus}
            onBlur={onBlur}
            attr=":stroke-width"
            className="numeric-input-wrapper"
            property={_tr("workspace.options.stroke-width")}
            appliedToken={appliedTokens[":stroke-width"]}
            value={strokeWidth}
          />
        ) : (
          <div className="stroke-width-input" title={_tr("workspace.options.stroke-width")}>
            <Icon iconId={I.strokeSize} size="s"/>
            <NumericInput
              value={strokeWidth}
              min={0}
              placeholder={_tr("settings.multiple")}
              onChange={onWidthChange}
              onFocus={onFocus}
              selectOnFocus={selectOnFocus}
              onBlur={onBlur}
            />
          </div>
        )}

        <div className="stroke-alignment-select" data-testid="stroke.alignment">
          <Select
            defaultValue={strokeAlignment}
            options={strokeAlignmentOptions}
            onChange={onAlignmentChange}
          />
        </div>

        {!disableStrokeStyle && (
          <div className="stroke-style-select" data-testid="stroke.style">
            <Select
              defaultValue={strokeStyle}
              options={strokeStyleOptions}
              onChange={onStyleChange}
            />
          </div>
        )}
      </div>

      {showCaps && (
        <div className="stroke-caps-options">
          <Select
            defaultValue={stroke["stroke-cap-start"]}
            options={strokeCapsOptions}
            onChange={onCapsStartChange}
          />
          <IconButton
            variant="secondary"
            aria-label={_tr("labels.switch")}
            onClick={onCapSwitch}
            icon={I.switch}
          />
          <Select
            defaultValue={stroke["stroke-cap-end"]}
            options={strokeCapsOptions}
            onChange={onCapsEndChange}
          />
        </div>
      )}
    </div>
  )
}
