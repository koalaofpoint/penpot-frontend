// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useCallback, useMemo, useState } from "react"
import * as d from "app/common/data"
import * as sm from "app/common/schema"
import * as ctl from "app/common/types/shape/layout"
import * as udw from "app/main/data/workspace"
import * as dwsl from "app/main/data/workspace/shape-layout"
import * as dwta from "app/main/data/workspace/tokens/application"
import * as features from "app/main/features"
import { refs } from "app/main/refs"
import { store } from "app/main/store"
import { NumericInput } from "app/main/ui/components/numeric-input"
import { RadioButton, RadioButtons } from "app/main/ui/components/radio-buttons"
import { TitleBar } from "app/main/ui/components/title-bar"
import * as i from "app/main/ui/ds/foundations/assets/icon"
import * as deprecatedIcon from "app/main/ui/icons"
import { NumericInputWrapper } from "app/main/ui/workspace/sidebar/options/menus/input-wrapper-tokens"
import { getLayoutFlexIcon } from "app/main/ui/workspace/sidebar/options/menus/layout-container"
import * as dom from "app/util/dom"
import { tr } from "app/util/i18n"
import * as stl from "app/main/style"

const layoutItemAttrs = [
  "layout-item-margin",
  "layout-item-margin-type",
  "layout-item-h-sizing",
  "layout-item-v-sizing",
  "layout-item-max-h",
  "layout-item-min-h",
  "layout-item-max-w",
  "layout-item-min-w",
  "layout-item-align-self",
  "layout-item-absolute",
  "layout-item-z-index",
]

function selectMargins(m1: boolean, m2: boolean, m3: boolean, m4: boolean) {
  store.emit(udw.setMarginsSelected({ m1, m2, m3, m4 }))
}

function selectMargin(prop: "m1" | "m2" | "m3" | "m4") {
  selectMargins(prop === "m1", prop === "m2", prop === "m3", prop === "m4")
}

interface MarginSimpleProps {
  value: any
  onChange: (type: string, attr: string, val: any) => void
  onBlur: () => void
  appliedTokens: any
  ids: string[]
}

const MarginSimple: React.FC<MarginSimpleProps> = ({
  value,
  onChange,
  onBlur,
  appliedTokens,
  ids,
}) => {
  const tokenNumericInputs = features.useFeature("tokens/numeric-input")

  let m1 = value?.m1
  let m2 = value?.m2
  const m3 = value?.m3
  const m4 = value?.m4

  if (value !== ":multiple") {
    if (m1 === m3) m1 = m1
    if (m2 === m4) m2 = m2
  }

  let tokenAppliedM1 = appliedTokens?.m1
  let tokenAppliedM2 = appliedTokens?.m2
  const tokenAppliedM3 = appliedTokens?.m3
  const tokenAppliedM4 = appliedTokens?.m4

  if (appliedTokens !== ":multiple" && tokenAppliedM1 === tokenAppliedM3) {
    tokenAppliedM1 = tokenAppliedM1
  } else {
    tokenAppliedM1 = ":multiple"
  }

  if (appliedTokens !== ":multiple" && tokenAppliedM2 === tokenAppliedM4) {
    tokenAppliedM2 = tokenAppliedM2
  } else {
    tokenAppliedM2 = ":multiple"
  }

  const m1Placeholder =
    value !== ":multiple" && m1 === m3 && tokenAppliedM1 === tokenAppliedM3
      ? "--"
      : tr("settings.multiple")

  const m2Placeholder =
    value !== ":multiple" && m2 === m4 && tokenAppliedM2 === tokenAppliedM4
      ? "--"
      : tr("settings.multiple")

  const onFocus = useCallback(
    (attr: string, event: React.FocusEvent) => {
      if (attr === "m1") selectMargins(true, false, true, false)
      if (attr === "m2") selectMargins(false, true, false, true)
      dom.selectTarget(event)
    },
    []
  )

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

  const onDetachHorizontal = useCallback(
    (token: string) => {
      onDetachToken(token, "m2")
      onDetachToken(token, "m4")
    },
    [onDetachToken]
  )

  const onDetachVertical = useCallback(
    (token: string) => {
      onDetachToken(token, "m1")
      onDetachToken(token, "m3")
    },
    [onDetachToken]
  )

  const onChangeFn = useCallback(
    (val: any, attr: string) => {
      if (typeof val === "string" || typeof val === "number") {
        onChange("simple", attr, val)
      } else {
        store.emit(
          dwta.toggleToken({
            token: val[0],
            attrs: attr === "m1" ? new Set(["m1", "m3"]) : new Set(["m2", "m4"]),
            shapeIds: ids,
          })
        )
      }
    },
    [onChange, ids]
  )

  const onFocusM1 = useCallback((e: React.FocusEvent) => onFocus("m1", e), [onFocus])
  const onFocusM2 = useCallback((e: React.FocusEvent) => onFocus("m2", e), [onFocus])
  const onM1Change = useCallback((val: any) => onChangeFn(val, "m1"), [onChangeFn])
  const onM2Change = useCallback((val: any) => onChangeFn(val, "m2"), [onChangeFn])

  return (
    <div className={stl.css("margin-simple")}>
      {tokenNumericInputs ? (
        <NumericInputWrapper
          onChange={onM1Change}
          onDetach={onDetachVertical}
          className={stl.css("vertical-margin-wrapper")}
          onBlur={onBlur}
          onFocus={onFocusM1}
          placeholder={m1Placeholder}
          icon={i.marginTopBottom}
          min={0}
          attr="m1"
          inputType="vertical-margin"
          property="Vertical margin "
          nillable={true}
          appliedToken={tokenAppliedM1}
          value={m1}
        />
      ) : (
        <div className={stl.css("vertical-margin")} title="Vertical margin">
          <span className={stl.css("icon")}>{deprecatedIcon.marginTopBottom}</span>
          <NumericInput
            className={stl.css("numeric-input")}
            placeholder={m1Placeholder}
            data-name="m1"
            onFocus={onFocusM1}
            onChange={onM1Change}
            onBlur={onBlur}
            nillable={true}
            value={m1}
          />
        </div>
      )}

      {tokenNumericInputs ? (
        <NumericInputWrapper
          onChange={onM2Change}
          onDetach={onDetachHorizontal}
          onBlur={onBlur}
          onFocus={onFocusM2}
          placeholder={m2Placeholder}
          icon={i.marginLeftRight}
          className={stl.css("horizontal-margin-wrapper")}
          min={0}
          attr="m2"
          align="right"
          inputType="horizontal-margin"
          property="Horizontal margin"
          nillable={true}
          appliedToken={tokenAppliedM2}
          value={m2}
        />
      ) : (
        <div className={stl.css("horizontal-margin")} title="Horizontal margin">
          <span className={stl.css("icon")}>{deprecatedIcon.marginLeftRight}</span>
          <NumericInput
            className={stl.css("numeric-input")}
            placeholder={m2Placeholder}
            data-name="m2"
            onFocus={onFocusM2}
            onChange={onM2Change}
            onBlur={onBlur}
            nillable={true}
            value={m2}
          />
        </div>
      )}
    </div>
  )
}

interface MarginMultipleProps {
  value: any
  onChange: (type: string, attr: string, val: any) => void
  onBlur: () => void
  appliedTokens: any
  ids: string[]
}

const MarginMultiple: React.FC<MarginMultipleProps> = ({
  value,
  onChange,
  onBlur,
  appliedTokens,
  ids,
}) => {
  const tokenNumericInputs = features.useFeature("tokens/numeric-input")

  const m1 = value?.m1
  const m2 = value?.m2
  const m3 = value?.m3
  const m4 = value?.m4

  const appliedTokenToM1 = appliedTokens?.m1
  const appliedTokenToM2 = appliedTokens?.m2
  const appliedTokenToM3 = appliedTokens?.m3
  const appliedTokenToM4 = appliedTokens?.m4

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

  const onFocus = useCallback(
    (attr: string, event: React.FocusEvent) => {
      selectMargin(attr as "m1" | "m2" | "m3" | "m4")
      dom.selectTarget(event)
    },
    []
  )

  const onFocusM1 = useCallback((e: React.FocusEvent) => onFocus("m1", e), [onFocus])
  const onFocusM2 = useCallback((e: React.FocusEvent) => onFocus("m2", e), [onFocus])
  const onFocusM3 = useCallback((e: React.FocusEvent) => onFocus("m1", e), [onFocus])
  const onFocusM4 = useCallback((e: React.FocusEvent) => onFocus("m2", e), [onFocus])

  const onChangeFn = useCallback(
    (val: any, attr: string) => {
      if (typeof val === "string" || typeof val === "number") {
        onChange("multiple", attr, val)
      } else {
        store.emit(
          dwta.toggleToken({
            token: val[0],
            attrs: new Set([attr]),
            shapeIds: ids,
          })
        )
      }
    },
    [onChange, ids]
  )

  const onM1Change = useCallback((val: any) => onChangeFn(val, "m1"), [onChangeFn])
  const onM2Change = useCallback((val: any) => onChangeFn(val, "m2"), [onChangeFn])
  const onM3Change = useCallback((val: any) => onChangeFn(val, "m3"), [onChangeFn])
  const onM4Change = useCallback((val: any) => onChangeFn(val, "m4"), [onChangeFn])

  return (
    <div className={stl.css("margin-multiple")}>
      {tokenNumericInputs ? (
        <NumericInputWrapper
          onChange={onM1Change}
          onDetach={onDetachToken}
          onBlur={onBlur}
          onFocus={onFocusM1}
          icon={i.marginTop}
          className={stl.css("top-margin-wrapper")}
          min={0}
          attr="m1"
          inputType="vertical-margin"
          property="Top margin"
          nillable={true}
          appliedToken={appliedTokenToM1}
          value={m1}
        />
      ) : (
        <div className={stl.css("top-margin")} title="Top margin">
          <span className={stl.css("icon")}>{deprecatedIcon.marginTop}</span>
          <NumericInput
            className={stl.css("numeric-input")}
            placeholder="--"
            data-name="m1"
            onFocus={onFocusM1}
            onChange={onM1Change}
            onBlur={onBlur}
            nillable={true}
            value={m1}
          />
        </div>
      )}

      {tokenNumericInputs ? (
        <NumericInputWrapper
          onChange={onM2Change}
          onDetach={onDetachToken}
          onBlur={onBlur}
          onFocus={onFocusM2}
          icon={i.marginRight}
          className={stl.css("right-margin-wrapper")}
          min={0}
          attr="m2"
          align="right"
          inputType="horizontal-margin"
          property="Right margin"
          nillable={true}
          appliedToken={appliedTokenToM2}
          value={m2}
        />
      ) : (
        <div className={stl.css("right-margin")} title="Right margin">
          <span className={stl.css("icon")}>{deprecatedIcon.marginRight}</span>
          <NumericInput
            className={stl.css("numeric-input")}
            placeholder="--"
            data-name="m2"
            onFocus={onFocusM2}
            onChange={onM2Change}
            onBlur={onBlur}
            nillable={true}
            value={m2}
          />
        </div>
      )}

      {tokenNumericInputs ? (
        <NumericInputWrapper
          onChange={onM3Change}
          onDetach={onDetachToken}
          onBlur={onBlur}
          onFocus={onFocusM3}
          icon={i.marginBottom}
          className={stl.css("bottom-margin-wrapper")}
          min={0}
          attr="m3"
          align="right"
          inputType="vertical-margin"
          property="Bottom margin"
          nillable={true}
          appliedToken={appliedTokenToM3}
          value={m3}
        />
      ) : (
        <div className={stl.css("bottom-margin")} title="Bottom margin">
          <span className={stl.css("icon")}>{deprecatedIcon.marginBottom}</span>
          <NumericInput
            className={stl.css("numeric-input")}
            placeholder="--"
            data-name="m3"
            onFocus={onFocusM3}
            onChange={onM3Change}
            onBlur={onBlur}
            nillable={true}
            value={m3}
          />
        </div>
      )}

      {tokenNumericInputs ? (
        <NumericInputWrapper
          onChange={onM4Change}
          onDetach={onDetachToken}
          onBlur={onBlur}
          onFocus={onFocusM4}
          icon={i.marginLeft}
          className={stl.css("left-margin-wrapper")}
          min={0}
          attr="m4"
          property="Left margin"
          inputType="horizontal-margin"
          nillable={true}
          appliedToken={appliedTokenToM4}
          value={m4}
        />
      ) : (
        <div className={stl.css("left-margin")} title="Left margin">
          <span className={stl.css("icon")}>{deprecatedIcon.marginLeft}</span>
          <NumericInput
            className={stl.css("numeric-input")}
            placeholder="--"
            data-name="m4"
            onFocus={onFocusM4}
            onChange={onM4Change}
            onBlur={onBlur}
            nillable={true}
            value={m4}
          />
        </div>
      )}
    </div>
  )
}

interface MarginSectionProps {
  value: any
  type: string
  onTypeChange: (type: string) => void
  onChange: (type: string, attr: string, val: any) => void
  appliedTokens: any
  ids: string[]
}

const MarginSection: React.FC<MarginSectionProps> = ({
  value,
  type,
  onTypeChange,
  onChange,
  appliedTokens,
  ids,
}) => {
  const marginType = d.nilv(type, "simple")

  const onBlur = useCallback(() => {
    selectMargins(false, false, false, false)
  }, [])

  const onTypeChangeFn = useCallback(() => {
    if (marginType === "multiple") {
      onTypeChange("simple")
    } else {
      onTypeChange("multiple")
    }
  }, [marginType, onTypeChange])

  React.useEffect(() => {
    return () => {
      onBlur()
    }
  }, [onBlur])

  return (
    <div className={stl.css("margin-row")}>
      <div className={stl.css("inputs-wrapper")}>
        {marginType === "simple" ? (
          <MarginSimple
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            appliedTokens={appliedTokens}
            ids={ids}
          />
        ) : (
          <MarginMultiple
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            appliedTokens={appliedTokens}
            ids={ids}
          />
        )}
      </div>
      <button
        className={stl.cssCase("margin-mode", true, "selected", marginType === "multiple")}
        title="Margin - multiple"
        onClick={onTypeChangeFn}
      >
        {deprecatedIcon.margin}
      </button>
    </div>
  )
}

interface ElementBehaviourHorizontalProps {
  isAuto: boolean
  hasFill: boolean
  value: string
  onChange: (value: string) => void
}

const ElementBehaviourHorizontal: React.FC<ElementBehaviourHorizontalProps> = ({
  isAuto,
  hasFill,
  value,
  onChange,
}) => {
  return (
    <div
      className={stl.cssCase(
        "horizontal-behaviour",
        true,
        "one-element",
        !hasFill && !isAuto,
        "two-element",
        hasFill || isAuto,
        "three-element",
        hasFill && isAuto
      )}
    >
      <RadioButtons
        selected={d.name(value)}
        decodeFn={keyword}
        onChange={onChange}
        name="flex-behaviour-h"
      >
        <RadioButton value="fix" icon={i.fixedWidth} title="Fix width" id="behaviour-h-fix" />
        {hasFill && (
          <RadioButton
            value="fill"
            icon={i.fillContent}
            title="Width 100%"
            id="behaviour-h-fill"
          />
        )}
        {isAuto && (
          <RadioButton
            value="auto"
            icon={i.hugContent}
            title="Fit content (Horizontal)"
            id="behaviour-h-auto"
          />
        )}
      </RadioButtons>
    </div>
  )
}

interface ElementBehaviourVerticalProps {
  isAuto: boolean
  hasFill: boolean
  value: string
  onChange: (value: string) => void
}

const ElementBehaviourVertical: React.FC<ElementBehaviourVerticalProps> = ({
  isAuto,
  hasFill,
  value,
  onChange,
}) => {
  return (
    <div
      className={stl.cssCase(
        "vertical-behaviour",
        true,
        "one-element",
        !hasFill && !isAuto,
        "two-element",
        hasFill || isAuto,
        "three-element",
        hasFill && isAuto
      )}
    >
      <RadioButtons
        selected={d.name(value)}
        decodeFn={keyword}
        onChange={onChange}
        name="flex-behaviour-v"
      >
        <RadioButton
          value="fix"
          icon={i.fixedWidth}
          iconClass={stl.css("rotated")}
          title="Fix height"
          id="behaviour-v-fix"
        />
        {hasFill && (
          <RadioButton
            value="fill"
            icon={i.fillContent}
            iconClass={stl.css("rotated")}
            title="Height 100%"
            id="behaviour-v-fill"
          />
        )}
        {isAuto && (
          <RadioButton
            value="auto"
            icon={i.hugContent}
            iconClass={stl.css("rotated")}
            title="Fit content (Vertical)"
            id="behaviour-v-auto"
          />
        )}
      </RadioButtons>
    </div>
  )
}

interface AlignSelfRowProps {
  isCol: boolean
  value: string
  onChange: (value: string) => void
}

const AlignSelfRow: React.FC<AlignSelfRowProps> = ({ isCol, value, onChange }) => {
  return (
    <RadioButtons
      selected={d.name(value)}
      decodeFn={keyword}
      onChange={onChange}
      name="flex-align-self"
      allowEmpty={true}
    >
      <RadioButton
        value="start"
        icon={getLayoutFlexIcon("align-self", "start", isCol)}
        title="Align self start"
        id="align-self-start"
      />
      <RadioButton
        value="center"
        icon={getLayoutFlexIcon("align-self", "center", isCol)}
        title="Align self center"
        id="align-self-center"
      />
      <RadioButton
        value="end"
        icon={getLayoutFlexIcon("align-self", "end", isCol)}
        title="Align self end"
        id="align-self-end"
      />
    </RadioButtons>
  )
}

interface LayoutSizeConstraintsProps {
  values: any
  ids: string[]
  appliedTokens: any
}

const LayoutSizeConstraints: React.FC<LayoutSizeConstraintsProps> = ({
  values,
  ids,
  appliedTokens,
}) => {
  const tokenNumericInputs = features.useFeature("tokens/numeric-input")

  const vSizing = values?.["layout-item-v-sizing"]

  const minW = values?.["layout-item-min-w"]
  const maxW = values?.["layout-item-max-w"]
  const minH = values?.["layout-item-min-h"]
  const maxH = values?.["layout-item-max-h"]

  const appliedTokenToMinW = appliedTokens?.["layout-item-min-w"]
  const appliedTokenToMaxW = appliedTokens?.["layout-item-max-w"]
  const appliedTokenToMinH = appliedTokens?.["layout-item-min-h"]
  const appliedTokenToMaxH = appliedTokens?.["layout-item-max-h"]

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

  const onSizeChange = useCallback(
    (val: any, attr: string) => {
      if (typeof val === "string" || typeof val === "number") {
        store.emit(dwsl.updateLayoutChild(ids, { [attr]: val }))
      } else {
        store.emit(
          dwta.toggleToken({
            token: val[0],
            attrs: new Set([attr]),
            shapeIds: ids,
          })
        )
      }
    },
    [ids]
  )

  const onLayoutItemMinWChange = useCallback(
    (val: any) => onSizeChange(val, "layout-item-min-w"),
    [onSizeChange]
  )
  const onLayoutItemMaxWChange = useCallback(
    (val: any) => onSizeChange(val, "layout-item-max-w"),
    [onSizeChange]
  )
  const onLayoutItemMinHChange = useCallback(
    (val: any) => onSizeChange(val, "layout-item-min-h"),
    [onSizeChange]
  )
  const onLayoutItemMaxHChange = useCallback(
    (val: any) => onSizeChange(val, "layout-item-max-h"),
    [onSizeChange]
  )

  return (
    <div className={stl.css("advanced-options")}>
      {values?.["layout-item-h-sizing"] === "fill" && (
        <div className={stl.css("horizontal-fill")}>
          {tokenNumericInputs ? (
            <NumericInputWrapper
              onChange={onLayoutItemMinWChange}
              onDetach={onDetachToken}
              min={0}
              attr="layout-item-min-w"
              property={tr("workspace.options.layout-item.layout-item-min-w")}
              textIcon="MIN W"
              inputType="min-width"
              nillable={true}
              appliedToken={appliedTokenToMinW}
              tooltipClass={stl.css("tooltip-wrapper")}
              value={minW}
            />
          ) : (
            <div
              className={stl.css("layout-item-min-w")}
              title={tr("workspace.options.layout-item.layout-item-min-w")}
            >
              <span className={stl.css("icon-text")}>MIN W</span>
              <NumericInput
                className={stl.css("numeric-input")}
                noValidate={true}
                min={0}
                dataWrap={true}
                placeholder="--"
                data-attr="layout-item-min-w"
                onFocus={dom.selectTarget}
                onChange={onLayoutItemMinWChange}
                value={values?.["layout-item-min-w"]}
                nillable={true}
              />
            </div>
          )}

          {tokenNumericInputs ? (
            <NumericInputWrapper
              onChange={onLayoutItemMaxWChange}
              onDetach={onDetachToken}
              textIcon="MAX W"
              min={0}
              align="right"
              inputType="max-width"
              attr="layout-item-max-w"
              property={tr("workspace.options.layout-item.layout-item-max-w")}
              nillable={true}
              tooltipClass={stl.css("tooltip-wrapper")}
              appliedToken={appliedTokenToMaxW}
              value={maxW}
            />
          ) : (
            <div
              className={stl.css("layout-item-max-w")}
              title={tr("workspace.options.layout-item.layout-item-max-w")}
            >
              <span className={stl.css("icon-text")}>MAX W</span>
              <NumericInput
                className={stl.css("numeric-input")}
                noValidate={true}
                min={0}
                dataWrap={true}
                placeholder="--"
                data-attr="layout-item-max-w"
                onFocus={dom.selectTarget}
                onChange={onLayoutItemMaxWChange}
                value={values?.["layout-item-max-w"]}
                nillable={true}
              />
            </div>
          )}
        </div>
      )}

      {vSizing === "fill" && (
        <div className={stl.css("vertical-fill")}>
          {tokenNumericInputs ? (
            <NumericInputWrapper
              onChange={onLayoutItemMinHChange}
              onDetach={onDetachToken}
              textIcon="MIN H"
              inputType="max-height"
              min={0}
              attr="layout-item-min-h"
              property={tr("workspace.options.layout-item.layout-item-min-h")}
              nillable={true}
              tooltipClass={stl.css("tooltip-wrapper")}
              appliedToken={appliedTokenToMinH}
              value={minH}
            />
          ) : (
            <div
              className={stl.css("layout-item-min-h")}
              title={tr("workspace.options.layout-item.layout-item-min-h")}
            >
              <span className={stl.css("icon-text")}>MIN H</span>
              <NumericInput
                className={stl.css("numeric-input")}
                noValidate={true}
                min={0}
                dataWrap={true}
                placeholder="--"
                data-attr="layout-item-min-h"
                onFocus={dom.selectTarget}
                onChange={onLayoutItemMinHChange}
                value={values?.["layout-item-min-h"]}
                nillable={true}
              />
            </div>
          )}

          {tokenNumericInputs ? (
            <NumericInputWrapper
              onChange={onLayoutItemMaxHChange}
              onDetach={onDetachToken}
              min={0}
              textIcon="MAX H"
              align="right"
              inputType="max-height"
              attr="layout-item-max-h"
              property={tr("workspace.options.layout-item.layout-item-max-h")}
              nillable={true}
              tooltipClass={stl.css("tooltip-wrapper")}
              appliedToken={appliedTokenToMaxH}
              value={maxH}
            />
          ) : (
            <div
              className={stl.css("layout-item-max-h")}
              title={tr("workspace.options.layout-item.layout-item-max-h")}
            >
              <span className={stl.css("icon-text")}>MAX H</span>
              <NumericInput
                className={stl.css("numeric-input")}
                noValidate={true}
                min={0}
                dataWrap={true}
                placeholder="--"
                data-attr="layout-item-max-h"
                onFocus={dom.selectTarget}
                onChange={onLayoutItemMaxHChange}
                value={values?.["layout-item-max-h"]}
                nillable={true}
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

interface LayoutItemMenuProps {
  ids: string[]
  values: any
  isLayoutChild: boolean
  isLayoutContainer: boolean
  isGridParent: boolean
  isFlexParent: boolean
  isFlexLayout: boolean
  isGridLayout: boolean
  appliedTokens: any
}

export const LayoutItemMenu: React.FC<LayoutItemMenuProps> = ({
  ids,
  values,
  isLayoutChild,
  isLayoutContainer,
  isGridParent,
  isFlexParent,
  isFlexLayout,
  isGridLayout,
  appliedTokens,
}) => {
  const selectionParentsRef = useMemo(() => {
    return refs.parentsByIds(ids)
  }, [ids])

  const selectionParents = selectionParentsRef.deref()

  const isAbsolute = values?.["layout-item-absolute"]
  const isCol = selectionParents?.every((p: any) => ctl.col(p))
  const isLayoutChildItem = isLayoutChild && !isAbsolute

  const [open, setOpen] = useState(true)

  const toggleContent = useCallback(() => {
    setOpen((prev) => !prev)
  }, [])

  const hasContent =
    isLayoutChild || isFlexParent || isGridParent || isLayoutContainer

  const alignSelf = values?.["layout-item-align-self"]
  const hSizing = values?.["layout-item-h-sizing"]
  const vSizing = values?.["layout-item-v-sizing"]

  let title = "Layout element"
  if (isLayoutContainer && isFlexLayout && !isLayoutChild) {
    title = "Flex board"
  } else if (isLayoutContainer && isGridLayout && !isLayoutChild) {
    title = "Grid board"
  } else if (isLayoutContainer && !isLayoutChild) {
    title = "Layout board"
  } else if (isFlexParent) {
    title = "Flex element"
  } else if (isGridParent) {
    title = "Grid element"
  }

  const onAlignSelfChange = useCallback(
    (value: string) => {
      if (alignSelf === value) {
        store.emit(dwsl.updateLayoutChild(ids, { "layout-item-align-self": null }))
      } else {
        store.emit(dwsl.updateLayoutChild(ids, { "layout-item-align-self": value }))
      }
    },
    [ids, alignSelf]
  )

  const onMarginTypeChange = useCallback(
    (type: string) => {
      store.emit(dwsl.updateLayoutChild(ids, { "layout-item-margin-type": type }))
    },
    [ids]
  )

  const onMarginChange = useCallback(
    (type: string, prop: string, val: any) => {
      if (type === "simple" && prop === "m1") {
        store.emit(dwsl.updateLayoutChild(ids, { "layout-item-margin": { m1: val, m3: val } }))
      } else if (type === "simple" && prop === "m2") {
        store.emit(dwsl.updateLayoutChild(ids, { "layout-item-margin": { m2: val, m4: val } }))
      } else {
        store.emit(dwsl.updateLayoutChild(ids, { "layout-item-margin": { [prop]: val } }))
      }
    },
    [ids]
  )

  const onBehaviourHChange = useCallback(
    (value: string) => {
      store.emit(dwsl.updateLayoutChild(ids, { "layout-item-h-sizing": value }))
    },
    [ids]
  )

  const onBehaviourVChange = useCallback(
    (value: string) => {
      store.emit(dwsl.updateLayoutChild(ids, { "layout-item-v-sizing": value }))
    },
    [ids]
  )

  const onChangePosition = useCallback(
    (value: string) => {
      if (value === "static") {
        store.emit(dwsl.updateLayoutChild(ids, { "layout-item-z-index": null }))
      }
      store.emit(dwsl.updateLayoutChild(ids, { "layout-item-absolute": value === "absolute" }))
    },
    [ids]
  )

  const onChangeZIndex = useCallback(
    (value: any) => {
      store.emit(dwsl.updateLayoutChild(ids, { "layout-item-z-index": value }))
    },
    [ids]
  )

  return (
    <section className={stl.css("element-set")} aria-label="layout item menu">
      <div className={stl.css("element-title")}>
        <TitleBar
          collapsable={hasContent}
          collapsed={!open}
          onCollapsed={toggleContent}
          title={title}
          className={stl.cssCase(
            "title-spacing-layout-element",
            true,
            "title-spacing-empty",
            !hasContent
          )}
        />
      </div>
      {open && (
        <div className={stl.css("flex-element-menu")}>
          {(isLayoutChild || isAbsolute) && (
            <div className={stl.css("position-row")}>
              <div className={stl.css("position-options")}>
                <RadioButtons
                  selected={isAbsolute ? "absolute" : "static"}
                  decodeFn={keyword}
                  onChange={onChangePosition}
                  name="layout-style"
                  wide={true}
                >
                  <RadioButton value="static" id="static-position" />
                  <RadioButton value="absolute" id="absolute-position" />
                </RadioButtons>
              </div>
              <div className={stl.css("z-index-wrapper")} title="z-index">
                <span className={stl.css("icon-text")}>Z</span>
                <NumericInput
                  className={stl.css("numeric-input")}
                  placeholder="--"
                  onFocus={dom.selectTarget}
                  onChange={onChangeZIndex}
                  nillable={true}
                  value={values?.["layout-item-z-index"]}
                />
              </div>
            </div>
          )}

          <div className={stl.css("behavior-row")}>
            <div
              className={stl.cssCase(
                "behaviour-menu",
                true,
                "wrap",
                isLayoutChild && isLayoutContainer
              )}
            >
              <ElementBehaviourHorizontal
                isAuto={!!isLayoutContainer}
                hasFill={!!isLayoutChild}
                value={values?.["layout-item-h-sizing"]}
                onChange={onBehaviourHChange}
              />
              <ElementBehaviourVertical
                isAuto={!!isLayoutContainer}
                hasFill={!!isLayoutChild}
                value={values?.["layout-item-v-sizing"]}
                onChange={onBehaviourVChange}
              />
            </div>
          </div>

          {isLayoutChild && isFlexParent && (
            <div className={stl.css("align-row")}>
              <AlignSelfRow isCol={!!isCol} value={alignSelf} onChange={onAlignSelfChange} />
            </div>
          )}

          {isLayoutChild && (
            <MarginSection
              value={values?.["layout-item-margin"]}
              type={values?.["layout-item-margin-type"]}
              onTypeChange={onMarginTypeChange}
              onChange={onMarginChange}
              appliedTokens={appliedTokens}
              ids={ids}
            />
          )}

          {(hSizing === "fill" || vSizing === "fill") && (
            <LayoutSizeConstraints
              ids={ids}
              values={values}
              appliedTokens={appliedTokens}
            />
          )}
        </div>
      )}
    </section>
  )
}