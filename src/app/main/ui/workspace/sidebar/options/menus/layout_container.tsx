// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useState, useCallback, useMemo, useEffect, useRef } from "react"
import * as d from "app/common/data"
import * as dm from "app/common/data/macros"
import * as mth from "app/common/math"
import * as ctl from "app/common/types/shape/layout"
import * as cf from "app/config"
import * as ev from "app/main/data/event"
import * as udw from "app/main/data/workspace"
import * as dwge from "app/main/data/workspace/grid-layout/editor"
import * as dwsl from "app/main/data/workspace/shape-layout"
import * as dwta from "app/main/data/workspace/tokens/application"
import * as Features from "app/main/features"
import { refs } from "app/main/refs"
import { store } from "app/main/store"
import { Dropdown, DropdownContent } from "app/main/ui/components/dropdown"
import { NumericInput } from "app/main/ui/components/numeric-input"
import { RadioButton, RadioButtons } from "app/main/ui/components/radio-buttons"
import { Select } from "app/main/ui/components/select"
import { TitleBar } from "app/main/ui/components/title-bar"
import { IconButton } from "app/main/ui/ds/buttons/icon-button"
import * as I from "app/main/ui/ds/foundations/assets/icon"
import * as DeprecatedIcon from "app/main/ui/icons"
import { NumericInputWrapper } from "app/main/ui/workspace/sidebar/options/menus/input-wrapper-tokens"
import * as dom from "app/util/dom"
import { tr } from "app/util/i18n"
import * as kbd from "app/util/keyboard"
import * as Str from "cuerdas.core"
import { SortableContainer, useSortable } from "app/main/ui/hooks"

const LAYOUT_CONTAINER_FLEX_ATTRS = [
  "layout",
  "layout-flex-dir",
  "layout-gap-type",
  "layout-gap",
  "layout-align-items",
  "layout-justify-content",
  "layout-align-content",
  "layout-wrap-type",
  "layout-padding-type",
  "layout-padding",
  "layout-grid-dir",
  "layout-justify-items",
  "layout-grid-columns",
  "layout-grid-rows",
]

function dirIconsRefactor(val: any): any {
  switch (val) {
    case "row": return I.gridRow
    case "row-reverse": return I.rowReverse
    case "column": return I.column
    case "column-reverse": return I.columnReverse
    default: return null
  }
}

function getLayoutFlexIcon(type: string, val: any, column: boolean): any {
  switch (type) {
    case "align-items":
      if (column) {
        switch (val) {
          case "start": return I.alignItemsColumnStart
          case "end": return I.alignItemsColumnEnd
          case "center": return I.alignItemsColumnCenter
        }
      } else {
        switch (val) {
          case "start": return I.alignItemsRowStart
          case "end": return I.alignItemsRowEnd
          case "center": return I.alignItemsRowCenter
        }
      }
      break
    case "justify-content":
      if (column) {
        switch (val) {
          case "start": return I.justifyContentColumnStart
          case "end": return I.justifyContentColumnEnd
          case "center": return I.justifyContentColumnCenter
          case "space-around": return I.justifyContentColumnAround
          case "space-evenly": return I.justifyContentColumnEvenly
          case "space-between": return I.justifyContentColumnBetween
        }
      } else {
        switch (val) {
          case "start": return I.justifyContentRowStart
          case "end": return I.justifyContentRowEnd
          case "center": return I.justifyContentRowCenter
          case "space-around": return I.justifyContentRowAround
          case "space-evenly": return I.justifyContentRowEvenly
          case "space-between": return I.justifyContentRowBetween
        }
      }
      break
    case "align-content":
      if (column) {
        switch (val) {
          case "start": return I.alignContentColumnStart
          case "end": return I.alignContentColumnEnd
          case "center": return I.alignContentColumnCenter
          case "space-around": return I.alignContentColumnAround
          case "space-evenly": return I.alignContentColumnEvenly
          case "space-between": return I.alignContentColumnBetween
          case "stretch": return null
        }
      } else {
        switch (val) {
          case "start": return I.alignContentRowStart
          case "end": return I.alignContentRowEnd
          case "center": return I.alignContentRowCenter
          case "space-around": return I.alignContentRowAround
          case "space-evenly": return I.alignContentRowEvenly
          case "space-between": return I.alignContentRowBetween
          case "stretch": return null
        }
      }
      break
    case "align-self":
      if (column) {
        switch (val) {
          case "auto": return I.remove
          case "start": return I.alignSelfRowLeft
          case "end": return I.alignSelfRowRight
          case "center": return I.alignSelfRowCenter
        }
      } else {
        switch (val) {
          case "auto": return I.remove
          case "start": return I.alignSelfColumnTop
          case "end": return I.alignSelfColumnBottom
          case "center": return I.alignSelfColumnCenter
        }
      }
      break
  }
  return null
}

function getLayoutGridIcon(type: string, val: any, column: boolean): any {
  switch (type) {
    case "align-items":
      if (column) {
        switch (val) {
          case "auto": return I.remove
          case "start": return I.alignSelfRowLeft
          case "end": return I.alignSelfRowRight
          case "center": return I.alignSelfRowCenter
        }
      } else {
        switch (val) {
          case "auto": return I.remove
          case "start": return I.alignSelfColumnTop
          case "end": return I.alignSelfColumnBottom
          case "center": return I.alignSelfColumnCenter
        }
      }
      break
    case "justify-items":
      if (!column) {
        switch (val) {
          case "start": return I.alignContentColumnStart
          case "center": return I.alignContentColumnCenter
          case "end": return I.alignContentColumnEnd
          case "space-around": return I.alignContentColumnAround
          case "space-between": return I.alignContentColumnBetween
          case "stretch": return I.alignContentColumnStretch
        }
      } else {
        switch (val) {
          case "start": return I.alignContentRowStart
          case "center": return I.alignContentRowCenter
          case "end": return I.alignContentRowEnd
          case "space-around": return I.alignContentRowAround
          case "space-between": return I.alignContentRowBetween
          case "stretch": return I.alignContentRowStretch
        }
      }
      break
  }
  return null
}

// Direction Row Flex Component
interface DirectionRowFlexProps {
  value: any
  onChange: (value: string) => void
}

export const DirectionRowFlex: React.FC<DirectionRowFlexProps> = ({ value, onChange }) => {
  return (
    <div className={(stl as any).css("direction-row-flex")}>
      <RadioButtons
        selected={d.name(value)}
        decodeFn={(v: string) => v as any}
        onChange={onChange}
        name="flex-direction"
      >
        <RadioButton
          value="row"
          id="flex-direction-row"
          title="Row"
          icon={dirIconsRefactor("row")}
        />
        <RadioButton
          value="row-reverse"
          id="flex-direction-row-reverse"
          title="Row reverse"
          icon={dirIconsRefactor("row-reverse")}
        />
        <RadioButton
          value="column"
          id="flex-direction-column"
          title="Column"
          icon={dirIconsRefactor("column")}
        />
        <RadioButton
          value="column-reverse"
          id="flex-direction-column-reverse"
          title="Column reverse"
          icon={dirIconsRefactor("column-reverse")}
        />
      </RadioButtons>
    </div>
  )
}

// Wrap Row Component
interface WrapRowProps {
  wrapType: any
  onClick: () => void
}

export const WrapRow: React.FC<WrapRowProps> = ({ wrapType, onClick }) => {
  return (
    <button
      className={(stl as any).cssCase("wrap-button", true, { selected: wrapType === "wrap" })}
      title={wrapType === "wrap" ? "No wrap" : "Wrap"}
      onClick={onClick}
    >
      {DeprecatedIcon.wrap}
    </button>
  )
}

// Align Row Component
interface AlignRowProps {
  isColumn: boolean
  value: any
  onChange: (value: string) => void
}

export const AlignRow: React.FC<AlignRowProps> = ({ isColumn, value, onChange }) => {
  return (
    <div className={(stl as any).css("align-row")}>
      <RadioButtons
        selected={d.name(value)}
        decodeFn={(v: string) => v as any}
        onChange={onChange}
        name="flex-align-items"
      >
        <RadioButton
          value="start"
          icon={getLayoutFlexIcon("align-items", "start", isColumn)}
          title="Align items start"
          id="align-items-start"
        />
        <RadioButton
          value="center"
          icon={getLayoutFlexIcon("align-items", "center", isColumn)}
          title="Align items center"
          id="align-items-center"
        />
        <RadioButton
          value="end"
          icon={getLayoutFlexIcon("align-items", "end", isColumn)}
          title="Align items end"
          id="align-items-end"
        />
      </RadioButtons>
    </div>
  )
}

// Align Content Row Component
interface AlignContentRowProps {
  isColumn: boolean
  value: any
  onChange: (value: string) => void
}

export const AlignContentRow: React.FC<AlignContentRowProps> = ({ isColumn, value, onChange }) => {
  return (
    <div className={(stl as any).css("align-content-row")}>
      <RadioButtons
        selected={d.name(value)}
        decodeFn={(v: string) => v as any}
        onChange={onChange}
        name="flex-align-content"
      >
        <RadioButton
          value="start"
          icon={getLayoutFlexIcon("align-content", "start", isColumn)}
          title="Align content start"
          id="align-content-start"
        />
        <RadioButton
          value="center"
          icon={getLayoutFlexIcon("align-content", "center", isColumn)}
          title="Align content center"
          id="align-content-center"
        />
        <RadioButton
          value="end"
          icon={getLayoutFlexIcon("align-content", "end", isColumn)}
          title="Align content end"
          id="align-content-end"
        />
        <RadioButton
          value="space-between"
          icon={getLayoutFlexIcon("align-content", "space-between", isColumn)}
          title="Align content space-between"
          id="align-content-space-between"
        />
        <RadioButton
          value="space-around"
          icon={getLayoutFlexIcon("align-content", "space-around", isColumn)}
          title="Align content space-around"
          id="align-content-space-around"
        />
        <RadioButton
          value="space-evenly"
          icon={getLayoutFlexIcon("align-content", "space-evenly", isColumn)}
          title="Align content space-evenly"
          id="align-content-space-evenly"
        />
      </RadioButtons>
    </div>
  )
}

// Justify Content Row Component
interface JustifyContentRowProps {
  isColumn: boolean
  justifyContent: any
  onChange: (value: string) => void
}

export const JustifyContentRow: React.FC<JustifyContentRowProps> = ({ isColumn, justifyContent, onChange }) => {
  return (
    <div className={(stl as any).css("justify-content-row")}>
      <RadioButtons
        selected={d.name(justifyContent)}
        onChange={onChange}
        name="flex-justify"
      >
        <RadioButton
          value="start"
          icon={getLayoutFlexIcon("justify-content", "start", isColumn)}
          title="Justify content start"
          id="justify-content-start"
        />
        <RadioButton
          value="center"
          icon={getLayoutFlexIcon("justify-content", "center", isColumn)}
          title="Justify content center"
          id="justify-content-center"
        />
        <RadioButton
          value="end"
          icon={getLayoutFlexIcon("justify-content", "end", isColumn)}
          title="Justify content end"
          id="justify-content-end"
        />
        <RadioButton
          value="space-between"
          icon={getLayoutFlexIcon("justify-content", "space-between", isColumn)}
          title="Justify content space-between"
          id="justify-content-space-between"
        />
        <RadioButton
          value="space-around"
          icon={getLayoutFlexIcon("justify-content", "space-around", isColumn)}
          title="Justify content space-around"
          id="justify-content-space-around"
        />
        <RadioButton
          value="space-evenly"
          icon={getLayoutFlexIcon("justify-content", "space-evenly", isColumn)}
          title="Justify content space-evenly"
          id="justify-content-space-evenly"
        />
      </RadioButtons>
    </div>
  )
}

// Padding functions
function selectPadding(p1?: boolean, p2?: boolean, p3?: boolean, p4?: boolean) {
  store.emit(udw.setPaddingsSelected({ p1: p1 || false, p2: p2 || false, p3: p3 || false, p4: p4 || false }))
}

function onPaddingBlur() {
  selectPadding(false, false, false, false)
}

// Simple Padding Selection Component
interface SimplePaddingSelectionProps {
  value: any
  onChange: (type: string, attr: string, val: any, event?: any) => void
  appliedTokens?: any
  ids: string[]
}

export const SimplePaddingSelection: React.FC<SimplePaddingSelectionProps> = ({
  value,
  onChange,
  appliedTokens,
  ids,
}) => {
  const tokenNumericInputs = Features.useFeature("tokens/numeric-input")

  const p1 = value?.p1
  const p2 = value?.p2
  const p3 = value?.p3
  const p4 = value?.p4

  const p1Simplified = !value || value === "multiple" || (p1 !== undefined && p1 === p3) ? p1 : null
  const p2Simplified = !value || value === "multiple" || (p2 !== undefined && p2 === p4) ? p2 : null

  const appliedToP1 = appliedTokens?.p1
  const appliedToP2 = appliedTokens?.p2
  const appliedToP3 = appliedTokens?.p3
  const appliedToP4 = appliedTokens?.p4

  const appliedToP1Simplified = appliedToP1 === appliedToP3 ? appliedToP1 : null
  const appliedToP2Simplified = appliedToP2 === appliedToP4 ? appliedToP2 : null

  const onChangeFn = useCallback(
    (val: any, attr: string, event?: any) => {
      if (typeof val === "string" || typeof val === "number") {
        onChange("simple", attr, val, event)
      } else if (Array.isArray(val)) {
        store.emit(dwta.toggleToken({
          token: val[0],
          attrs: attr === "p1" ? new Set(["p1", "p3"]) : new Set(["p2", "p4"]),
          shapeIds: ids,
        }))
      }
    },
    [onChange, ids]
  )

  const onDetachToken = useCallback(
    (tokenName: string, attr: string) => {
      store.emit(dwta.unapplyToken({
        tokenName,
        attributes: new Set([attr]),
        shapeIds: ids,
      }))
    },
    [ids]
  )

  const onFocus = useCallback(
    (attr: string, event: any) => {
      if (attr === "p1") selectPadding(true, false, true, false)
      else if (attr === "p2") selectPadding(false, true, false, true)
      dom.selectTarget(event)
    },
    []
  )

  const onFocusP1 = useCallback((e: any) => onFocus("p1", e), [onFocus])
  const onFocusP2 = useCallback((e: any) => onFocus("p2", e), [onFocus])
  const onP1Change = useCallback((val: any, e?: any) => onChangeFn(val, "p1", e), [onChangeFn])
  const onP2Change = useCallback((val: any, e?: any) => onChangeFn(val, "p2", e), [onChangeFn])

  const multiplePlaceholder = tr("settings.multiple")

  return (
    <div className={(stl as any).css("paddings-simple")}>
      {tokenNumericInputs ? (
        <NumericInputWrapper
          onChange={onP1Change}
          onDetach={onDetachToken}
          onBlur={onPaddingBlur}
          onFocus={onFocusP1}
          icon={I.paddingTopBottom}
          min={0}
          attr="p1"
          inputType="vertical-padding"
          property={tr("workspace.layout-grid.editor.padding.vertical")}
          nillable={true}
          placeholder={appliedToP1Simplified === "multiple" || p1Simplified === "multiple" || p1 === undefined ? multiplePlaceholder : "--"}
          appliedToken={appliedToP1Simplified}
          value={p1Simplified}
        />
      ) : (
        <div className={(stl as any).css("padding-simple")} title={tr("workspace.layout-grid.editor.padding.vertical")}>
          <span className={(stl as any).css("icon")}>{DeprecatedIcon.paddingTopBottom}</span>
          <NumericInput
            className={(stl as any).css("numeric-input")}
            placeholder={multiplePlaceholder}
            aria-label={tr("workspace.layout-grid.editor.padding.vertical")}
            onChange={onP1Change}
            onFocus={onFocusP1}
            onBlur={onPaddingBlur}
            nillable={true}
            min={0}
            value={p1Simplified}
          />
        </div>
      )}

      {tokenNumericInputs ? (
        <NumericInputWrapper
          onChange={onP2Change}
          onDetach={onDetachToken}
          onBlur={onPaddingBlur}
          onFocus={onFocusP2}
          icon={I.paddingLeftRight}
          min={0}
          attr="p2"
          inputType="horizontal-padding"
          align="right"
          property={tr("workspace.layout-grid.editor.padding.horizontal")}
          nillable={true}
          placeholder={appliedToP2Simplified === "multiple" || p2Simplified === "multiple" || p2 === undefined ? multiplePlaceholder : "--"}
          appliedToken={appliedToP2Simplified}
          value={p2Simplified}
        />
      ) : (
        <div className={(stl as any).css("padding-simple")} title={tr("workspace.layout-grid.editor.padding.horizontal")}>
          <span className={(stl as any).css("icon")}>{DeprecatedIcon.paddingLeftRight}</span>
          <NumericInput
            className={(stl as any).css("numeric-input")}
            placeholder={multiplePlaceholder}
            aria-label={tr("workspace.layout-grid.editor.padding.horizontal")}
            onChange={onP2Change}
            onFocus={onFocusP2}
            onBlur={onPaddingBlur}
            nillable={true}
            min={0}
            value={p2Simplified}
          />
        </div>
      )}
    </div>
  )
}

// Multiple Padding Selection Component
interface MultiplePaddingSelectionProps {
  value: any
  onChange: (type: string, attr: string, val: any, event?: any) => void
  appliedTokens?: any
  ids: string[]
}

export const MultiplePaddingSelection: React.FC<MultiplePaddingSelectionProps> = ({
  value,
  onChange,
  appliedTokens,
  ids,
}) => {
  const tokenNumericInputs = Features.useFeature("tokens/numeric-input")

  const p1 = value?.p1
  const p2 = value?.p2
  const p3 = value?.p3
  const p4 = value?.p4

  const appliedToP1 = appliedTokens?.p1
  const appliedToP2 = appliedTokens?.p2
  const appliedToP3 = appliedTokens?.p3
  const appliedToP4 = appliedTokens?.p4

  const onChangeFn = useCallback(
    (val: any, attr: string, event?: any) => {
      if (typeof val === "string" || typeof val === "number") {
        onChange("multiple", attr, val, event)
      } else if (Array.isArray(val)) {
        store.emit(dwta.toggleToken({
          token: val[0],
          attrs: new Set([attr]),
          shapeIds: ids,
        }))
      }
    },
    [onChange, ids]
  )

  const onDetachToken = useCallback(
    (tokenName: string, attr: string) => {
      store.emit(dwta.unapplyToken({
        tokenName,
        attributes: new Set([attr]),
        shapeIds: ids,
      }))
    },
    [ids]
  )

  const onFocus = useCallback(
    (attr: string, event: any) => {
      selectPadding(attr)
      dom.selectTarget(event)
    },
    []
  )

  const onFocusP1 = useCallback((e: any) => onFocus("p1", e), [onFocus])
  const onFocusP2 = useCallback((e: any) => onFocus("p2", e), [onFocus])
  const onFocusP3 = useCallback((e: any) => onFocus("p3", e), [onFocus])
  const onFocusP4 = useCallback((e: any) => onFocus("p4", e), [onFocus])
  const onP1Change = useCallback((val: any, e?: any) => onChangeFn(val, "p1", e), [onChangeFn])
  const onP2Change = useCallback((val: any, e?: any) => onChangeFn(val, "p2", e), [onChangeFn])
  const onP3Change = useCallback((val: any, e?: any) => onChangeFn(val, "p3", e), [onChangeFn])
  const onP4Change = useCallback((val: any, e?: any) => onChangeFn(val, "p4", e), [onChangeFn])

  const multiplePlaceholder = tr("settings.multiple")

  return (
    <div className={(stl as any).css("paddings-multiple")}>
      {tokenNumericInputs ? (
        <NumericInputWrapper
          onChange={onP1Change}
          onDetach={onDetachToken}
          onBlur={onPaddingBlur}
          onFocus={onFocusP1}
          icon={I.paddingTop}
          min={0}
          attr="p1"
          inputType="vertical-padding"
          property={tr("workspace.layout-grid.editor.padding.top")}
          placeholder={appliedToP1 === "multiple" || p1 === "multiple" || p1 === undefined ? multiplePlaceholder : "--"}
          appliedToken={appliedToP1}
          value={p1}
        />
      ) : (
        <div className={(stl as any).css("padding-multiple")} title={tr("workspace.layout-grid.editor.padding.top")}>
          <span className={(stl as any).css("icon")}>{DeprecatedIcon.paddingTop}</span>
          <NumericInput
            className={(stl as any).css("numeric-input")}
            placeholder="--"
            aria-label={tr("workspace.layout-grid.editor.padding.top")}
            dataAttr="p1"
            onChange={onP1Change}
            onFocus={onFocusP1}
            onBlur={onPaddingBlur}
            min={0}
            value={p1}
          />
        </div>
      )}

      {tokenNumericInputs ? (
        <NumericInputWrapper
          onChange={onP2Change}
          onDetach={onDetachToken}
          onBlur={onPaddingBlur}
          onFocus={onFocusP2}
          icon={I.paddingRight}
          min={0}
          attr="p2"
          inputType="horizontal-padding"
          align="right"
          property={tr("workspace.layout-grid.editor.padding.right")}
          placeholder={appliedToP2 === "multiple" || p2 === "multiple" || p2 === undefined ? multiplePlaceholder : "--"}
          appliedToken={appliedToP2}
          value={p2}
        />
      ) : (
        <div className={(stl as any).css("padding-multiple")} title={tr("workspace.layout-grid.editor.padding.right")}>
          <span className={(stl as any).css("icon")}>{DeprecatedIcon.paddingRight}</span>
          <NumericInput
            className={(stl as any).css("numeric-input")}
            placeholder="--"
            aria-label={tr("workspace.layout-grid.editor.padding.right")}
            dataAttr="p2"
            onChange={onP2Change}
            onFocus={onFocusP2}
            onBlur={onPaddingBlur}
            min={0}
            value={p2}
          />
        </div>
      )}

      {tokenNumericInputs ? (
        <NumericInputWrapper
          onChange={onP3Change}
          onDetach={onDetachToken}
          onBlur={onPaddingBlur}
          onFocus={onFocusP3}
          icon={I.paddingBottom}
          min={0}
          attr="p3"
          inputType="vertical-padding"
          property={tr("workspace.layout-grid.editor.padding.bottom")}
          placeholder={appliedToP3 === "multiple" || p3 === "multiple" || p3 === undefined ? multiplePlaceholder : "--"}
          appliedToken={appliedToP3}
          value={p3}
        />
      ) : (
        <div className={(stl as any).css("padding-multiple")} title={tr("workspace.layout-grid.editor.padding.bottom")}>
          <span className={(stl as any).css("icon")}>{DeprecatedIcon.paddingBottom}</span>
          <NumericInput
            className={(stl as any).css("numeric-input")}
            placeholder="--"
            aria-label={tr("workspace.layout-grid.editor.padding.bottom")}
            dataAttr="p3"
            onChange={onP3Change}
            onFocus={onFocusP3}
            onBlur={onPaddingBlur}
            min={0}
            value={p3}
          />
        </div>
      )}

      {tokenNumericInputs ? (
        <NumericInputWrapper
          onChange={onP4Change}
          onDetach={onDetachToken}
          onBlur={onPaddingBlur}
          onFocus={onFocusP4}
          icon={I.paddingLeft}
          min={0}
          align="right"
          attr="p4"
          inputType="horizontal-padding"
          property={tr("workspace.layout-grid.editor.padding.left")}
          placeholder={appliedToP4 === "multiple" || p4 === "multiple" || p4 === undefined ? multiplePlaceholder : "--"}
          appliedToken={appliedToP4}
          value={p4}
        />
      ) : (
        <div className={(stl as any).css("padding-multiple")} title={tr("workspace.layout-grid.editor.padding.left")}>
          <span className={(stl as any).css("icon")}>{DeprecatedIcon.paddingLeft}</span>
          <NumericInput
            className={(stl as any).css("numeric-input")}
            placeholder="--"
            aria-label={tr("workspace.layout-grid.editor.padding.left")}
            dataAttr="p4"
            onChange={onP4Change}
            onFocus={onFocusP4}
            onBlur={onPaddingBlur}
            min={0}
            value={p4}
          />
        </div>
      )}
    </div>
  )
}

// Padding Section Component
interface PaddingSectionProps {
  type: any
  onTypeChange: (type: any) => void
  onChange: (type: string, prop: string, val: any, event?: any) => void
  value: any
  appliedTokens?: any
  ids: string[]
}

export const PaddingSection: React.FC<PaddingSectionProps> = ({
  type,
  onTypeChange,
  onChange,
  value,
  appliedTokens,
  ids,
}) => {
  const onTypeChangeFn = useCallback(
    (event: any) => {
      const target = dom.getCurrentTarget(event)
      const targetType = dom.getData(target, "type")
      const newType = targetType === "multiple" ? "simple" : "multiple"
      onTypeChange(newType)
    },
    [onTypeChange]
  )

  useEffect(() => {
    return () => {
      onPaddingBlur()
    }
  }, [])

  return (
    <div className={(stl as any).css("padding-group")}>
      <div className={(stl as any).css("padding-inputs")}>
        {type === "simple" && (
          <SimplePaddingSelection
            value={value}
            onChange={onChange}
            appliedTokens={appliedTokens}
            ids={ids}
          />
        )}
        {type === "multiple" && (
          <MultiplePaddingSelection
            value={value}
            onChange={onChange}
            appliedTokens={appliedTokens}
            ids={ids}
          />
        )}
      </div>
      <button
        className={(stl as any).cssCase("padding-toggle", true, { selected: type === "multiple" })}
        title={tr("workspace.layout-grid.editor.padding.expand")}
        aria-label={tr("workspace.layout-grid.editor.padding.expand")}
        data-type={d.name(type)}
        onClick={onTypeChangeFn}
      >
        {DeprecatedIcon.paddingExtended}
      </button>
    </div>
  )
}

// Gap functions
function selectGap(value: any) {
  store.emit(udw.setGapSelected(value))
}

function onGapFocus(type: string) {
  selectGap(type)
}

function onGapBlur() {
  selectGap(null)
}

// Gap Section Component
interface GapSectionProps {
  isColumn?: boolean
  wrapType?: any
  onChange: (multiple: boolean, type: string, val: any, event?: any) => void
  value: any
  appliedTokens?: any
  ids: string[]
}

export const GapSection: React.FC<GapSectionProps> = ({
  isColumn = false,
  wrapType,
  onChange,
  value,
  appliedTokens,
  ids,
}) => {
  const tokenNumericInputs = Features.useFeature("tokens/numeric-input")
  const nowrap = wrapType === "nowrap"

  const rowGapDisabled = nowrap && !isColumn
  const colGapDisabled = nowrap && isColumn

  const onChangeFn = useCallback(
    (val: any, event: any, attr: string) => {
      if (typeof val === "string" || typeof val === "number") {
        onChange(wrapType === "nowrap", attr, val, event)
      } else if (Array.isArray(val)) {
        store.emit(dwta.toggleToken({
          token: val[0],
          attrs: wrapType === "nowrap" ? new Set(["row-gap", "colum-gap"]) : new Set([attr]),
          shapeIds: ids,
        }))
      }
    },
    [onChange, wrapType, ids]
  )

  const onDetachToken = useCallback(
    (token: string, attr: string) => {
      store.emit(dwta.unapplyToken({
        tokenName: token,
        attributes: new Set([attr]),
        shapeIds: ids,
      }))
    },
    [ids]
  )

  const onRowGapChange = useCallback((val: any, e?: any) => onChangeFn(val, e, "row-gap"), [onChangeFn])
  const onColumnGapChange = useCallback((val: any, e?: any) => onChangeFn(val, e, "column-gap"), [onChangeFn])
  const onFocusRowGap = useCallback(() => onGapFocus("row-gap"), [])
  const onFocusColumnGap = useCallback(() => onGapFocus("column-gap"), [])

  useEffect(() => {
    return () => {
      onGapBlur()
    }
  }, [])

  const multiplePlaceholder = tr("settings.multiple")

  return (
    <div className={(stl as any).css("gap-group")}>
      {tokenNumericInputs ? (
        <NumericInputWrapper
          onChange={onRowGapChange}
          onDetach={onDetachToken}
          onFocus={onFocusRowGap}
          onBlur={onGapBlur}
          icon={I.gapVertical}
          nillable={true}
          min={0}
          attr="row-gap"
          property="Row gap"
          values={{ "row-gap": value?.["row-gap"] }}
          disabled={rowGapDisabled}
          placeholder={appliedTokens?.["row-gap"] === "multiple" || value?.["row-gap"] === "multiple" ? multiplePlaceholder : "--"}
          appliedToken={appliedTokens?.["row-gap"]}
          value={value?.["row-gap"]}
        />
      ) : (
        <div
          className={(stl as any).cssCase("row-gap", true, { disabled: rowGapDisabled })}
          title="Row gap"
        >
          <span className={(stl as any).css("icon")}>{DeprecatedIcon.gapVertical}</span>
          <NumericInput
            className={(stl as any).cssCase("numeric-input", true)}
            noValidate={true}
            placeholder="--"
            dataType="row-gap"
            dataWrapType={d.name(wrapType)}
            onFocus={onFocusRowGap}
            onChange={onRowGapChange}
            onBlur={onGapBlur}
            nillable={true}
            min={0}
            value={value?.["row-gap"]}
            disabled={rowGapDisabled}
          />
        </div>
      )}

      {tokenNumericInputs ? (
        <NumericInputWrapper
          onChange={onColumnGapChange}
          onDetach={onDetachToken}
          onFocus={onFocusColumnGap}
          onBlur={onGapBlur}
          icon={I.gapHorizontal}
          nillable={true}
          min={0}
          attr="column-gap"
          align="right"
          property="Column gap"
          placeholder={appliedTokens?.["column-gap"] === "multiple" || value?.["column-gap"] === "multiple" ? multiplePlaceholder : "--"}
          appliedToken={appliedTokens?.["column-gap"]}
          value={value?.["column-gap"]}
          disabled={colGapDisabled}
        />
      ) : (
        <div
          className={(stl as any).cssCase("column-gap", true, { disabled: colGapDisabled })}
          title="Column gap"
        >
          <span className={(stl as any).css("icon")}>{DeprecatedIcon.gapHorizontal}</span>
          <NumericInput
            className={(stl as any).cssCase("numeric-input", true)}
            noValidate={true}
            placeholder="--"
            dataType="column-gap"
            dataWrapType={d.name(wrapType)}
            onFocus={onFocusColumnGap}
            onChange={onColumnGapChange}
            onBlur={onGapBlur}
            nillable={true}
            min={0}
            value={value?.["column-gap"]}
            disabled={colGapDisabled}
          />
        </div>
      )}
    </div>
  )
}

// Grid Components

// Direction Row Grid Component
interface DirectionRowGridProps {
  value: any
  onChange: (value: string) => void
}

export const DirectionRowGrid: React.FC<DirectionRowGridProps> = ({ value, onChange }) => {
  return (
    <div className={(stl as any).css("direction-row-grid")}>
      <RadioButtons
        selected={d.name(value)}
        decodeFn={(v: string) => v as any}
        onChange={onChange}
        name="grid-direction"
      >
        <RadioButton
          value="row"
          id="grid-direction-row"
          title="Row"
          icon={dirIconsRefactor("row")}
        />
        <RadioButton
          value="column"
          id="grid-direction-column"
          title="Column"
          icon={dirIconsRefactor("column")}
        />
      </RadioButtons>
    </div>
  )
}

// Grid Edit Mode Component
interface GridEditModeProps {
  id: string
}

export const GridEditMode: React.FC<GridEditModeProps> = ({ id }) => {
  const edition = useRxsub(refs.selectedEdition)
  const active = edition === id

  const toggleEditMode = useCallback(() => {
    if (!active) {
      store.emit(udw.startEditionMode(id))
    } else {
      store.emit("interrupt")
    }
  }, [id, active])

  return (
    <button
      className={(stl as any).css("edit-mode-btn")}
      alt="Grid edit mode"
      onClick={toggleEditMode}
    >
      {tr("workspace.layout-grid.editor.options.edit-grid")}
    </button>
  )
}

// Align Grid Row Component
interface AlignGridRowProps {
  isColumn: boolean
  value: any
  onChange: (value: string) => void
}

export const AlignGridRow: React.FC<AlignGridRowProps> = ({ isColumn, value, onChange }) => {
  const type = isColumn ? "column" : "row"

  return (
    <div className={(stl as any).css("align-grid-row")}>
      <RadioButtons
        selected={d.name(value)}
        decodeFn={(v: string) => v as any}
        onChange={onChange}
        name={dm.str("flex-align-items-", type)}
      >
        <RadioButton
          value="start"
          icon={getLayoutGridIcon("align-items", "start", isColumn)}
          title="Align items start"
          id={dm.str("align-items-start-", type)}
        />
        <RadioButton
          value="center"
          icon={getLayoutGridIcon("align-items", "center", isColumn)}
          title="Align items center"
          id={dm.str("align-items-center-", type)}
        />
        <RadioButton
          value="end"
          icon={getLayoutGridIcon("align-items", "end", isColumn)}
          title="Align items end"
          id={dm.str("align-items-end-", type)}
        />
      </RadioButtons>
    </div>
  )
}

// Justify Grid Row Component
interface JustifyGridRowProps {
  isColumn: boolean
  value: any
  onChange: (value: string) => void
}

export const JustifyGridRow: React.FC<JustifyGridRowProps> = ({ isColumn, value, onChange }) => {
  const type = isColumn ? "column" : "row"

  return (
    <div className={(stl as any).css("justify-grid-row")}>
      <RadioButtons
        selected={d.name(value)}
        onChange={onChange}
        decodeFn={(v: string) => v as any}
        name={dm.str("grid-justify-items-", type)}
      >
        <RadioButton
          key="justify-item-start"
          value="start"
          icon={getLayoutGridIcon("justify-items", "start", isColumn)}
          title="Justify items start"
          id={dm.str("justify-items-start-", type)}
        />
        <RadioButton
          key="justify-item-center"
          value="center"
          icon={getLayoutGridIcon("justify-items", "center", isColumn)}
          title="Justify items center"
          id={dm.str("justify-items-center-", type)}
        />
        <RadioButton
          key="justify-item-end"
          value="end"
          icon={getLayoutGridIcon("justify-items", "end", isColumn)}
          title="Justify items end"
          id={dm.str("justify-items-end-", type)}
        />
        <RadioButton
          key="justify-item-space-around"
          value="space-around"
          icon={getLayoutGridIcon("justify-items", "space-around", isColumn)}
          title="Justify items space-around"
          id={dm.str("justify-items-space-around-", type)}
        />
        <RadioButton
          key="justify-item-space-between"
          value="space-between"
          icon={getLayoutGridIcon("justify-items", "space-between", isColumn)}
          title="Justify items space-between"
          id={dm.str("justify-items-space-between-", type)}
        />
        <RadioButton
          key="justify-item-stretch"
          value="stretch"
          icon={getLayoutGridIcon("justify-items", "stretch", isColumn)}
          title="Justify items stretch"
          id={dm.str("justify-items-stretch-", type)}
        />
      </RadioButtons>
    </div>
  )
}

// Helper function for manage values
function manageValues(item: { type: any; value: any }): string {
  switch (item.type) {
    case "auto": return "auto"
    case "percent": return formatPercent(item.value / 100)
    case "flex": return formatFrs(item.value)
    case "fixed": return formatPixels(item.value)
    default: return String(item.value)
  }
}

function formatPercent(value: number): string {
  return `${Math.round(value * 100)}%`
}

function formatFrs(value: number): string {
  return `${value}fr`
}

function formatPixels(value: number): string {
  return `${value}px`
}

// Grid Track Info Component
interface GridTrackInfoProps {
  isColumn: boolean
  type: string
  index: number
  column: any
  setColumnValue: (type: string, index: number, value: number) => void
  setColumnType: (type: string, index: number, trackType: string) => void
  removeElement: (event: React.MouseEvent) => void
  reorderTrack: (type: string, fromIndex: number, toIndex: number, moveContent: boolean) => void
  hoverTrack: (type: string, index: number, hover: boolean) => void
  onSelectTrack?: (type: string, index: number) => void
}

export const GridTrackInfo: React.FC<GridTrackInfoProps> = ({
  isColumn,
  type,
  index,
  column,
  setColumnValue,
  setColumnType,
  removeElement,
  reorderTrack,
  hoverTrack,
  onSelectTrack,
}) => {
  const dropTrack = useCallback(
    (dropPosition: any, data: any, event: any) => {
      reorderTrack(
        type,
        (data as any).index,
        dropPosition === "top" ? index - 1 : index,
        !kbd.mod(event)
      )
    },
    [type, index, reorderTrack]
  )

  const pointerEnter = useCallback(() => {
    hoverTrack(type, index, true)
  }, [type, index, hoverTrack])

  const pointerLeave = useCallback(() => {
    hoverTrack(type, index, false)
  }, [type, index, hoverTrack])

  const handleSelectTrack = useCallback(() => {
    if (onSelectTrack) {
      onSelectTrack(type, index)
    }
  }, [type, index, onSelectTrack])

  const [sortableProps, sortableRef] = useSortable({
    dataType: "penpot/grid-track",
    onDrop: dropTrack,
    data: { isColumn, index, column },
    draggable: true,
  })

  const isDndOverTop = sortableProps.over === "top" || sortableProps.over === "center"
  const isDndOverBot = sortableProps.over === "bot"

  return (
    <div
      className={(stl as any).cssCase("track-info", true, {
        "dnd-over-top": isDndOverTop,
        "dnd-over-bot": isDndOverBot,
      })}
      ref={sortableRef}
      onPointerEnter={pointerEnter}
      onPointerLeave={pointerLeave}
    >
      <div className={(stl as any).css("track-info-container")}>
        <div className={(stl as any).css("track-info-dir-icon")} onClick={handleSelectTrack}>
          {isColumn ? DeprecatedIcon.flexVertical : DeprecatedIcon.flexHorizontal}
        </div>
        <div className={(stl as any).css("track-info-value")}>
          <NumericInput
            noValidate={true}
            value={column.value}
            onChange={(value: number) => setColumnValue(type, index, value)}
            placeholder="--"
            min={0}
            disabled={column.type === "auto"}
          />
        </div>
        <div className={(stl as any).css("track-info-unit")}>
          <Select
            className={(stl as any).css("track-info-unit-selector")}
            defaultValue={column.type}
            options={[
              { value: "flex", label: "FR" },
              { value: "auto", label: "AUTO" },
              { value: "fixed", label: "PX" },
              { value: "percent", label: "%" },
            ]}
            onChange={(value: any) => setColumnType(type, index, value)}
          />
        </div>
      </div>
      <IconButton
        variant="ghost"
        ariaLabel={tr("workspace.shape.menu.delete")}
        onClick={removeElement}
        data-type={type}
        data-index={index}
        icon={I.remove}
      />
    </div>
  )
}

// Grid Columns Row Component
interface GridColumnsRowProps {
  isColumn: boolean
  expanded: boolean
  columnValues: any[]
  toggle: () => void
  addNewElement: (type: string, value: any) => void
  setColumnValue: (type: string, index: number, value: number) => void
  setColumnType: (type: string, index: number, trackType: string) => void
  removeElement: (event: React.MouseEvent) => void
  reorderTrack: (type: string, fromIndex: number, toIndex: number, moveContent: boolean) => void
  hoverTrack: (type: string, index: number, hover: boolean) => void
  onSelectTrack?: (type: string, index: number) => void
}

export const GridColumnsRow: React.FC<GridColumnsRowProps> = ({
  isColumn,
  expanded,
  columnValues,
  toggle,
  addNewElement,
  setColumnValue,
  setColumnType,
  removeElement,
  reorderTrack,
  hoverTrack,
  onSelectTrack,
}) => {
  const columnNum = columnValues?.length || 0
  const direction = columnNum > 1 ? (isColumn ? "Columns " : "Rows ") : (isColumn ? "Column " : "Row ")
  const trackName = dm.str(direction, columnNum === 0 ? " - empty" : columnNum)
  const trackDetail = Str.join(", ", columnValues?.map(manageValues) || [])

  const type = isColumn ? "column" : "row"
  const testId = !isColumn ? "inspect-layout-rows" : undefined

  const addTrack = useCallback(() => {
    if (!expanded) toggle()
    addNewElement(type, ctl.defaultTrackValue)
  }, [expanded, toggle, addNewElement, type])

  return (
    <div className={(stl as any).css("grid-tracks")} data-testid={testId}>
      <div className={(stl as any).css("grid-track-header")}>
        <button className={(stl as any).css("expand-icon")} onClick={toggle}>
          {DeprecatedIcon.menu}
        </button>
        <div className={(stl as any).css("track-title")} onClick={toggle}>
          <div className={(stl as any).css("track-name")} title={trackName}>
            {trackName}
          </div>
          <div className={(stl as any).css("track-detail")} title={trackDetail}>
            {trackDetail}
          </div>
        </div>
        <button className={(stl as any).css("add-column")} onClick={addTrack}>
          {DeprecatedIcon.add}
        </button>
      </div>

      {expanded && (
        <SortableContainer>
          <div className={(stl as any).css("grid-tracks-info-container")}>
            {d.enumerate(columnValues || []).map(([index, column]) => (
              <GridTrackInfo
                key={dm.str(index, "-", d.name(type))}
                type={type}
                isColumn={isColumn}
                index={index}
                column={column}
                setColumnValue={setColumnValue}
                setColumnType={setColumnType}
                removeElement={removeElement}
                reorderTrack={reorderTrack}
                hoverTrack={hoverTrack}
                onSelectTrack={onSelectTrack}
              />
            ))}
          </div>
        </SortableContainer>
      )}
    </div>
  )
}

// Helper function for useRxsub
function useRxsub<T>(ob: any): T | null {
  const [state, setState] = useState<T | null>(() => {
    if (ob && typeof ob === "object" && "deref" in ob) {
      return (ob as any).deref()
    }
    return null
  })

  useEffect(() => {
    const sub = (ob as any).subscribe?.((val: T) => setState(val)) || (ob as any).sub?.((val: T) => setState(val))
    return () => {
      ;(sub as any)?.dispose?.() || (sub as any)?.unsubscribe?.()
    }
  }, [ob])

  return state
}

// Layout Container Menu Component
interface LayoutContainerMenuProps {
  ids: string[]
  values: any
  multiple?: boolean
  appliedTokens?: any
}

export const LayoutContainerMenu: React.FC<LayoutContainerMenuProps> = React.memo(({
  ids,
  values,
  multiple,
  appliedTokens,
}) => {
  const layoutType = values?.layout
  const hasLayout = layoutType !== undefined && layoutType !== null

  const [showDropdown, setShowDropdown] = useState(false)
  const [open, setOpen] = useState(layoutType ? true : false)

  const onToggleVisibility = useCallback(() => {
    setOpen((prev) => !prev)
  }, [])

  const onAddLayout = useCallback(
    (event: React.MouseEvent) => {
      const type = dom.getData(dom.getCurrentTarget(event), "type") as any
      store.emit(
        dwsl.createLayout(type as any),
        { [ev.origin]: "workspace:sidebar" }
      )
      setOpen(true)
    },
    []
  )

  const onRemoveLayout = useCallback(() => {
    store.emit(dwsl.removeLayout(ids))
    setOpen(false)
  }, [ids])

  const savedDir = values?.["layout-flex-dir"]
  const isColumn = savedDir === "column" || savedDir === "column-reverse"

  const wrapType = values?.["layout-wrap-type"]

  const toggleWrap = useCallback(() => {
    const newType = wrapType === "wrap" ? "nowrap" : "wrap"
    store.emit(dwsl.updateLayout(ids, { "layout-wrap-type": newType }))
  }, [wrapType, ids])

  const alignItems = values?.["layout-align-items"]
  const setAlignItems = useCallback(
    (value: string) => {
      store.emit(dwsl.updateLayout(ids, { "layout-align-items": value as any }))
    },
    [ids]
  )

  const justifyContent = values?.["layout-justify-content"]
  const setJustifyContent = useCallback(
    (value: string) => {
      store.emit(dwsl.updateLayout(ids, { "layout-justify-content": value as any }))
    },
    [ids]
  )

  const alignContent = values?.["layout-align-content"]
  const onAlignContentChange = useCallback(
    (value: string) => {
      if (alignContent === value) {
        store.emit(dwsl.updateLayout(ids, { "layout-align-content": "stretch" }))
      } else {
        store.emit(dwsl.updateLayout(ids, { "layout-align-content": value as any }))
      }
    },
    [alignContent, ids]
  )

  const onGapChange = useCallback(
    (multiple: boolean, type: string, val: number) => {
      const finiteVal = mth.finite(val, 0)
      if (multiple) {
        store.emit(dwsl.updateLayout(ids, { "layout-gap": { "row-gap": finiteVal, "column-gap": finiteVal } }))
      } else if (type) {
        store.emit(dwsl.updateLayout(ids, { "layout-gap": { [type]: finiteVal } }))
      }
    },
    [ids]
  )

  const onPaddingTypeChange = useCallback(
    (type: any) => {
      store.emit(dwsl.updateLayout(ids, { "layout-padding-type": type }))
    },
    [ids]
  )

  const onPaddingChange = useCallback(
    (type: string, prop: string, val: number) => {
      const finiteVal = mth.finite(val, 0)
      if (type === "simple" && prop === "p1") {
        store.emit(dwsl.updateLayout(ids, { "layout-padding": { p1: finiteVal, p3: finiteVal } }))
      } else if (type === "simple" && prop === "p2") {
        store.emit(dwsl.updateLayout(ids, { "layout-padding": { p2: finiteVal, p4: finiteVal } }))
      } else if (prop) {
        store.emit(dwsl.updateLayout(ids, { "layout-padding": { [prop]: finiteVal } }))
      }
    },
    [ids]
  )

  const savedGridDir = values?.["layout-grid-dir"]
  const onDirectionChange = useCallback(
    (dir: string) => {
      if (layoutType === "flex") {
        store.emit(dwsl.updateLayout(ids, { "layout-flex-dir": dir as any }))
      } else {
        store.emit(dwsl.updateLayout(ids, { "layout-grid-dir": dir as any }))
      }
    },
    [layoutType, ids]
  )

  const alignItemsRow = values?.["layout-align-items"]
  const alignItemsColumn = values?.["layout-justify-items"]

  const onColumnAlignChange = useCallback(
    (value: string) => {
      store.emit(dwsl.updateLayout(ids, { "layout-justify-items": value as any }))
    },
    [ids]
  )

  const onRowAlignChange = useCallback(
    (value: string) => {
      store.emit(dwsl.updateLayout(ids, { "layout-align-items": value as any }))
    },
    [ids]
  )

  const gridJustifyContentRow = values?.["layout-justify-content"]
  const gridJustifyContentColumn = values?.["layout-align-content"]

  const onColumnJustifyChange = useCallback(
    (value: string) => {
      store.emit(dwsl.updateLayout(ids, { "layout-align-content": value as any }))
    },
    [ids]
  )

  const onRowJustifyChange = useCallback(
    (value: string) => {
      store.emit(dwsl.updateLayout(ids, { "layout-justify-content": value as any }))
    },
    [ids]
  )

  const onToggleDropdownVisibility = useCallback(() => {
    setShowDropdown((prev) => !prev)
  }, [])

  const onHideDropdown = useCallback(() => {
    setShowDropdown(false)
  }, [])

  const openFlexHelp = useCallback(() => {
    dom.openNewWindow(cf.flexHelpUri)
  }, [])

  const openGridHelp = useCallback(() => {
    dom.openNewWindow(cf.gridHelpUri)
  }, [])

  const multipleLayoutType = layoutType === "multiple"

  return (
    <div className={(stl as any).css("element-set")} data-testid="inspect-layout">
      <div className={(stl as any).css("element-title")}>
        <TitleBar
          collapsable={hasLayout}
          collapsed={!open}
          onCollapsed={onToggleVisibility}
          title="Layout"
          className={(stl as any).cssCase("title-spacing-layout", !hasLayout)}
        />

        {!multiple && values?.layout ? (
          <div className={(stl as any).css("title-actions")}>
            <IconButton
              variant="ghost"
              ariaLabel={tr("workspace.shape.menu.add-layout")}
              onClick={onToggleDropdownVisibility}
              icon={I.menu}
            />
            <Dropdown show={showDropdown} onClose={onHideDropdown}>
              <DropdownContent>
                <div className={(stl as any).css("layout-options")}>
                  <button
                    className={(stl as any).css("layout-option")}
                    data-type="flex"
                    onClick={onAddLayout}
                  >
                    Flex layout
                  </button>
                  <button
                    className={(stl as any).css("layout-option")}
                    data-type="grid"
                    onClick={onAddLayout}
                  >
                    Grid layout
                  </button>
                </div>
              </DropdownContent>
            </Dropdown>

            {hasLayout && (
              <IconButton
                variant="ghost"
                ariaLabel={tr("workspace.shape.menu.remove-layout")}
                onClick={onRemoveLayout}
                icon={I.remove}
              />
            )}
          </div>
        ) : (
          <div className={(stl as any).css("title-actions")}>
            <IconButton
              variant="ghost"
              ariaLabel={tr("workspace.shape.menu.add-layout")}
              onClick={onToggleDropdownVisibility}
              icon={I.add}
            />
            <Dropdown show={showDropdown} onClose={onHideDropdown}>
              <DropdownContent>
                <div className={(stl as any).css("layout-options")}>
                  <button
                    className={(stl as any).css("layout-option")}
                    data-type="flex"
                    onClick={onAddLayout}
                  >
                    Flex layout
                  </button>
                  <button
                    className={(stl as any).css("layout-option")}
                    data-type="grid"
                    onClick={onAddLayout}
                  >
                    Grid layout
                  </button>
                </div>
              </DropdownContent>
            </Dropdown>

            {hasLayout && (
              <IconButton
                variant="ghost"
                ariaLabel={tr("workspace.shape.menu.delete")}
                onClick={onRemoveLayout}
                icon={I.remove}
              />
            )}
          </div>
        )}
      </div>

      {open && hasLayout && !multipleLayoutType && (
        <>
          {layoutType === "flex" && (
            <div className={(stl as any).css("flex-layout-menu")}>
              <div className={(stl as any).css("first-row")}>
                <AlignRow isColumn={isColumn} value={alignItems} onChange={setAlignItems} />
                <DirectionRowFlex onChange={onDirectionChange} value={savedDir} />
                <WrapRow wrapType={wrapType} onClick={toggleWrap} />
              </div>

              <div className={(stl as any).css("second-row", "help-button-wrapper")}>
                <JustifyContentRow
                  isColumn={isColumn}
                  justifyContent={justifyContent}
                  onChange={setJustifyContent}
                />
                <IconButton
                  variant="ghost"
                  ariaLabel={tr("labels.help-center")}
                  onClick={openFlexHelp}
                  icon={I.help}
                />
              </div>

              {wrapType === "wrap" && (
                <div className={(stl as any).css("third-row")}>
                  <AlignContentRow
                    isColumn={isColumn}
                    value={alignContent}
                    onChange={onAlignContentChange}
                  />
                </div>
              )}

              <div className={(stl as any).css("forth-row")}>
                <GapSection
                  isColumn={isColumn}
                  wrapType={wrapType}
                  onChange={onGapChange}
                  ids={ids}
                  appliedTokens={appliedTokens}
                  value={values?.["layout-gap"]}
                />
                <PaddingSection
                  value={values?.["layout-padding"]}
                  type={values?.["layout-padding-type"]}
                  onTypeChange={onPaddingTypeChange}
                  ids={ids}
                  appliedTokens={appliedTokens}
                  onChange={onPaddingChange}
                />
              </div>
            </div>
          )}

          {layoutType === "grid" && (
            <div className={(stl as any).css("grid-layout-menu")}>
              {ids.length === 1 && (
                <div className={(stl as any).css("edit-grid-wrapper")}>
                  <GridEditMode id={ids[0]} />
                  <IconButton
                    variant="ghost"
                    ariaLabel={tr("labels.help-center")}
                    onClick={openGridHelp}
                    icon={I.help}
                  />
                </div>
              )}

              <div className={(stl as any).css("first-row")}>
                <div className={(stl as any).css("direction-edit")}>
                  <div className={(stl as any).css("direction")}>
                    <DirectionRowGrid value={savedGridDir} onChange={onDirectionChange} />
                  </div>
                </div>

                <AlignGridRow isColumn={false} value={alignItemsRow} onChange={onRowAlignChange} />
                <AlignGridRow isColumn={true} value={alignItemsColumn} onChange={onColumnAlignChange} />
              </div>

              <div className={(stl as any).css("row", "grid-layout-align")}>
                <JustifyGridRow
                  isColumn={true}
                  value={gridJustifyContentColumn}
                  onChange={onColumnJustifyChange}
                />
                <JustifyGridRow
                  isColumn={false}
                  value={gridJustifyContentRow}
                  onChange={onRowJustifyChange}
                />
              </div>

              <div className={(stl as any).css("gap-row")}>
                <GapSection
                  onChange={onGapChange}
                  ids={ids}
                  appliedTokens={appliedTokens}
                  value={values?.["layout-gap"]}
                />
              </div>

              <div className={(stl as any).css("padding-row")}>
                <PaddingSection
                  value={values?.["layout-padding"]}
                  type={values?.["layout-padding-type"]}
                  appliedTokens={appliedTokens}
                  onTypeChange={onPaddingTypeChange}
                  onChange={onPaddingChange}
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
})

// Grid Layout Edition Component
interface GridLayoutEditionProps {
  ids: string[]
  values: any
  appliedTokens?: any
}

export const GridLayoutEdition: React.FC<GridLayoutEditionProps> = React.memo(({
  ids,
  values,
  appliedTokens,
}) => {
  const savedGridDir = values?.["layout-grid-dir"]

  const onDirectionChange = useCallback(
    (dir: string) => {
      store.emit(dwsl.updateLayout(ids, { "layout-grid-dir": dir as any }))
    },
    [ids]
  )

  const onGapChange = useCallback(
    (multiple: boolean, type: string, val: number) => {
      const finiteVal = mth.finite(val, 0)
      if (multiple) {
        store.emit(dwsl.updateLayout(ids, { "layout-gap": { "row-gap": finiteVal, "column-gap": finiteVal } }))
      } else {
        store.emit(dwsl.updateLayout(ids, { "layout-gap": { [type]: finiteVal } }))
      }
    },
    [ids]
  )

  const onPaddingTypeChange = useCallback(
    (type: any) => {
      store.emit(dwsl.updateLayout(ids, { "layout-padding-type": type }))
    },
    [ids]
  )

  const onPaddingChange = useCallback(
    (type: string, prop: string, val: number) => {
      const finiteVal = mth.finite(val, 0)
      if (type === "simple" && prop === "p1") {
        store.emit(dwsl.updateLayout(ids, { "layout-padding": { p1: finiteVal, p3: finiteVal } }))
      } else if (type === "simple" && prop === "p2") {
        store.emit(dwsl.updateLayout(ids, { "layout-padding": { p2: finiteVal, p4: finiteVal } }))
      } else {
        store.emit(dwsl.updateLayout(ids, { "layout-padding": { [prop]: finiteVal } }))
      }
    },
    [ids]
  )

  const alignItemsRow = values?.["layout-align-items"]
  const alignItemsColumn = values?.["layout-justify-items"]

  const onColumnAlignChange = useCallback(
    (value: string) => {
      store.emit(dwsl.updateLayout(ids, { "layout-justify-items": value as any }))
    },
    [ids]
  )

  const onRowAlignChange = useCallback(
    (value: string) => {
      store.emit(dwsl.updateLayout(ids, { "layout-align-items": value as any }))
    },
    [ids]
  )

  const gridJustifyContentRow = values?.["layout-justify-content"]
  const gridJustifyContentColumn = values?.["layout-align-content"]

  const onColumnJustifyChange = useCallback(
    (value: string) => {
      store.emit(dwsl.updateLayout(ids, { "layout-align-content": value as any }))
    },
    [ids]
  )

  const onRowJustifyChange = useCallback(
    (value: string) => {
      store.emit(dwsl.updateLayout(ids, { "layout-justify-content": value as any }))
    },
    [ids]
  )

  const [columnsOpen, setColumnsOpen] = useState(false)
  const [rowsOpen, setRowsOpen] = useState(false)

  const columnValues = values?.["layout-grid-columns"]
  const rowsValues = values?.["layout-grid-rows"]

  const toggleColumnsOpen = useCallback(() => {
    setColumnsOpen((prev) => !prev)
  }, [])

  const toggleRowsOpen = useCallback(() => {
    setRowsOpen((prev) => !prev)
  }, [])

  const addNewElement = useCallback(
    (type: string, value: any) => {
      store.emit(dwsl.addLayoutTrack(ids, type, value))
    },
    [ids]
  )

  const removeElement = useCallback(
    (event: React.MouseEvent) => {
      const type = d.readString(dom.getData(dom.getCurrentTarget(event), "type"))
      const index = d.parseInteger(dom.getData(dom.getCurrentTarget(event), "index"))
      store.emit(dwsl.removeLayoutTrack(ids, type, index))
    },
    [ids]
  )

  const reorderTrack = useCallback(
    (type: string, fromIndex: number, toIndex: number, moveContent: boolean) => {
      store.emit(dwsl.reorderLayoutTrack(ids, type, fromIndex, toIndex, moveContent))
    },
    [ids]
  )

  const hoverTrack = useCallback(
    (type: string, index: number, hover: boolean) => {
      store.emit(dwsl.hoverLayoutTrack(ids, type, index, hover))
    },
    [ids]
  )

  const handleSelectTrack = useCallback(
    (type: string, index: number) => {
      store.emit(dwge.selectTrackCells(ids[0], type, index))
    },
    [ids]
  )

  const setColumnValue = useCallback(
    (type: string, index: number, value: number) => {
      store.emit(dwsl.changeLayoutTrack(ids, type, index, { value }))
    },
    [ids]
  )

  const setColumnType = useCallback(
    (type: string, index: number, trackType: string) => {
      const value = trackType === "auto" ? null : trackType === "flex" ? 1 : trackType === "percent" ? 20 : 100
      store.emit(dwsl.changeLayoutTrack(ids, type, index, { value, type: trackType }))
    },
    [ids]
  )

  const handleLocateGrid = useCallback(() => {
    store.emit(dwge.locateBoard(ids[0]))
  }, [ids])

  const openGridHelp = useCallback(() => {
    dom.openNewWindow(cf.gridHelpUri)
  }, [])

  return (
    <div className={(stl as any).css("grid-layout-menu")}>
      <div className={(stl as any).css("grid-first-row")}>
        <div className={(stl as any).css("grid-layout-menu-title")}>GRID LAYOUT</div>
        <IconButton
          variant="ghost"
          className={(stl as any).css("help-button")}
          ariaLabel={tr("labels.help-center")}
          onClick={openGridHelp}
          icon={I.help}
        />
        <button
          className={(stl as any).css("exit-btn")}
          onClick={() => store.emit(udw.clearEditionMode())}
        >
          {tr("workspace.layout-grid.editor.options.exit")}
        </button>
      </div>

      <div className={(stl as any).css("row", "first-row")}>
        <div className={(stl as any).css("direction-edit")}>
          <div className={(stl as any).css("direction")}>
            <DirectionRowGrid value={savedGridDir} onChange={onDirectionChange} />
          </div>
        </div>

        <AlignGridRow isColumn={false} value={alignItemsRow} onChange={onRowAlignChange} />
        <AlignGridRow isColumn={true} value={alignItemsColumn} onChange={onColumnAlignChange} />
      </div>

      <div className={(stl as any).css("row", "grid-layout-align")}>
        <JustifyGridRow
          isColumn={true}
          value={gridJustifyContentColumn}
          onChange={onColumnJustifyChange}
        />
        <JustifyGridRow
          isColumn={false}
          value={gridJustifyContentRow}
          onChange={onRowJustifyChange}
        />

        <IconButton
          variant="ghost"
          className={(stl as any).css("locate-button")}
          ariaLabel={tr("workspace.layout-grid.editor.top-bar.locate.tooltip")}
          onClick={handleLocateGrid}
          icon={I.locate}
        />
      </div>

      <div className={(stl as any).css("gap-row")}>
        <GapSection
          onChange={onGapChange}
          ids={ids}
          appliedTokens={appliedTokens}
          value={values?.["layout-gap"]}
        />
      </div>

      <div className={(stl as any).css("padding-row", "padding-section")}>
        <PaddingSection
          value={values?.["layout-padding"]}
          type={values?.["layout-padding-type"]}
          onTypeChange={onPaddingTypeChange}
          onChange={onPaddingChange}
        />
      </div>

      <div className={(stl as any).css("grid-tracks-row")}>
        <GridColumnsRow
          isColumn={true}
          expanded={columnsOpen}
          toggle={toggleColumnsOpen}
          columnValues={columnValues}
          addNewElement={addNewElement}
          setColumnValue={setColumnValue}
          setColumnType={setColumnType}
          removeElement={removeElement}
          reorderTrack={reorderTrack}
          hoverTrack={hoverTrack}
          onSelectTrack={handleSelectTrack}
        />

        <GridColumnsRow
          isColumn={false}
          expanded={rowsOpen}
          toggle={toggleRowsOpen}
          columnValues={rowsValues}
          addNewElement={addNewElement}
          setColumnValue={setColumnValue}
          setColumnType={setColumnType}
          removeElement={removeElement}
          reorderTrack={reorderTrack}
          hoverTrack={hoverTrack}
          onSelectTrack={handleSelectTrack}
        />
      </div>
    </div>
  )
})