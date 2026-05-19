// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react"
import * as DM from "app/common/data/macros"
import * as CTSR from "app/common/types/shape/radius"
import * as DWSH from "app/main/data/workspace/shapes"
import * as DWTA from "app/main/data/workspace/tokens/application"
import * as Features from "app/main/features"
import {store} from "app/main/store"
import {NumericInput} from "app/main/ui/components/numeric-input"
import {IconButton} from "app/main/ui/ds/buttons/icon-button"
import {Icon} from "app/main/ui/ds/foundations/assets/icon"
import * as I from "app/main/ui/ds/foundations/assets/icon"
import * as Hooks from "app/main/ui/hooks"
import {NumericInputWrapper} from "app/main/ui/workspace/sidebar/options/menus/input-wrapper-tokens"
import {_tr} from "app/util/i18n"
import * as RX from "beicon.v2/core"
import * as PTK from "potok.v2/core"

function allEqual(shape: any): boolean {
  return shape.r1 === shape.r2 && shape.r2 === shape.r3 && shape.r3 === shape.r4
}

function checkBorderRadiusMenuProps(oldProps: any, newProps: any): boolean {
  const oldValues = oldProps["values"]
  const newValues = newProps["values"]
  const oldAppliedTokens = oldProps["appliedTokens"]
  const newAppliedTokens = newProps["appliedTokens"]

  return (
    oldProps["class"] === newProps["class"] &&
    oldProps["ids"] === newProps["ids"] &&
    oldProps["shapes"] === newProps["shapes"] &&
    oldAppliedTokens === newAppliedTokens &&
    oldValues?.["r1"] === newValues?.["r1"] &&
    oldValues?.["r2"] === newValues?.["r2"] &&
    oldValues?.["r3"] === newValues?.["r3"] &&
    oldValues?.["r4"] === newValues?.["r4"]
  )
}

interface BorderRadiusMenuProps {
  className?: string
  ids: string[]
  values: any
  appliedTokens?: any
}

export const BorderRadiusMenu: React.FC<BorderRadiusMenuProps> = React.memo((props) => {
  const {className, ids, values, appliedTokens} = props

  const tokenNumericInputs = Features.useFeature("tokens/numeric-input")

  const allValuesEqual = allEqual(values)
  const allTokenEqual = appliedTokens && appliedTokens.length > 0 && allEqual(appliedTokens)

  const [radiusExpanded, setRadiusExpanded] = React.useState(false)

  const onDetachToken = React.useCallback(
    (tokenName: string, attr: string) => {
      store.emit(DWTA.unapplyToken({
        tokenName,
        attributes: new Set([attr]),
        shapeIds: ids,
      }))
    },
    [ids]
  )

  const onDetachAll = React.useCallback(
    (token: string) => {
      ;[":r1", ":r2", ":r3", ":r4"].forEach(attr => onDetachToken(token, attr))
      onDetachToken(token, ":r1")
      onDetachToken(token, ":r2")
      onDetachToken(token, ":r3")
      onDetachToken(token, ":r4")
    },
    [onDetachToken]
  )

  const onDetachR1 = React.useCallback(
    (token: string) => onDetachToken(token, ":r1"),
    [onDetachToken]
  )

  const onDetachR2 = React.useCallback(
    (token: string) => onDetachToken(token, ":r2"),
    [onDetachToken]
  )

  const onDetachR3 = React.useCallback(
    (token: string) => onDetachToken(token, ":r3"),
    [onDetachToken]
  )

  const onDetachR4 = React.useCallback(
    (token: string) => onDetachToken(token, ":r4"),
    [onDetachToken]
  )

  const changeRadius = React.useCallback(
    (updateFn: (shape: any) => any) => {
      DWSH.updateShapes(ids, (shape: any) => {
        if (CTSR.hasRadius(shape)) {
          return updateFn(shape)
        }
        return shape
      }, {regObjects: true, attrs: [":r1", ":r2", ":r3", ":r4"]})
    },
    [ids]
  )

  const changeOneRadius = React.useCallback(
    (updateFn: (shape: any) => any, attr: string) => {
      DWSH.updateShapes(ids, (shape: any) => {
        if (CTSR.hasRadius(shape)) {
          return updateFn(shape)
        }
        return shape
      }, {regObjects: true, attrs: [attr]})
    },
    [ids]
  )

  const toggleRadiusMode = React.useCallback(
    () => setRadiusExpanded(prev => !prev),
    []
  )

  const onAllRadiusChange = React.useCallback(
    (value: any) => {
      if (typeof value === "string" || typeof value === "number") {
        store.emit(changeRadius((shape: any) => CTSR.setRadiusToAllCorners(shape, value)))
      } else {
        store.emit(DWTA.toggleToken({
          token: value[0],
          attrs: new Set([":r1", ":r2", ":r3", ":r4"]),
          shapeIds: ids,
        }))
      }
    },
    [changeRadius, ids]
  )

  const onSingleRadiusChange = React.useCallback(
    (value: any, attr: string) => {
      if (typeof value === "string" || typeof value === "number") {
        store.emit(changeOneRadius((shape: any) => CTSR.setRadiusToSingleCorner(shape, attr, value), attr))
      } else {
        store.emit(store.emit(DWTA.toggleToken({
          token: value[0],
          attrs: new Set([attr]),
          shapeIds: ids,
        })))
      }
    },
    [changeOneRadius, ids]
  )

  const onRadiusR1Change = React.useCallback((value: any) => onSingleRadiusChange(value, ":r1"), [onSingleRadiusChange])
  const onRadiusR2Change = React.useCallback((value: any) => onSingleRadiusChange(value, ":r2"), [onSingleRadiusChange])
  const onRadiusR3Change = React.useCallback((value: any) => onSingleRadiusChange(value, ":r3"), [onSingleRadiusChange])
  const onRadiusR4Change = React.useCallback((value: any) => onSingleRadiusChange(value, ":r4"), [onSingleRadiusChange])

  const expandStream = React.useMemo(
    () => store.stream.pipe(
      RX.filter((event: any) => PTK.isType(event, ":expand-border-radius"))
    ),
    []
  )

  Hooks.useStream(expandStream, () => setRadiusExpanded(true))

  React.useEffect(() => {
    setRadiusExpanded(false)
  }, [ids])

  const getPlaceholder = (value: any) => {
    if (!allValuesEqual || !allTokenEqual) return _tr("settings.multiple")
    return "--"
  }

  const getValue = () => {
    if (!allValuesEqual) return null
    return values.r1 == null ? 0 : values.r1
  }

  const getAppliedToken = () => {
    if (!appliedTokens || appliedTokens.length === 0) return null
    if (!allValuesEqual || !allTokenEqual) return ":multiple"
    return appliedTokens.r1
  }

  const getSinglePlaceholder = (tokenVal: any, val: any) => {
    if (tokenVal === ":multiple" || val === ":multiple") return _tr("settings.multiple")
    return "--"
  }

  return (
    <section className={`${className || ""} radius`} aria-label="border-radius-section">
      {!radiusExpanded ? (
        tokenNumericInputs ? (
          <NumericInputWrapper
            onChange={onAllRadiusChange}
            onDetach={onDetachAll}
            icon={I.cornerRadius}
            min={0}
            attr=":border-radius"
            nillable={true}
            property={_tr("workspace.options.radius")}
            appliedToken={getAppliedToken()}
            align="right"
            placeholder={getPlaceholder(values)}
            value={getValue()}
          />
        ) : (
          <div className="radius-1" title={_tr("workspace.options.radius")}>
            <Icon iconId={I.cornerRadius} size="s" className="icon"/>
            <NumericInput
              placeholder={getPlaceholder(values)}
              min={0}
              nillable={true}
              onChange={onAllRadiusChange}
              value={getValue()}
            />
          </div>
        )
      ) : (
        tokenNumericInputs ? (
          <div className="radius-4">
            <NumericInputWrapper
              onChange={onRadiusR1Change}
              onDetach={onDetachR1}
              min={0}
              attr=":border-radius"
              property={_tr("workspace.options.radius-top-left")}
              appliedToken={appliedTokens?.r1}
              align="right"
              placeholder={getSinglePlaceholder(appliedTokens?.r1, values?.r1)}
              className="dropdown-offset"
              innerClass="no-icon-input"
              value={values?.r1}
            />

            <NumericInputWrapper
              onChange={onRadiusR2Change}
              onDetach={onDetachR2}
              min={0}
              attr=":border-radius"
              nillable={true}
              property={_tr("workspace.options.radius-top-right")}
              appliedToken={appliedTokens?.r2}
              align="right"
              placeholder={getSinglePlaceholder(appliedTokens?.r2, values?.r2)}
              innerClass="no-icon-input"
              value={values?.r2}
            />

            <NumericInputWrapper
              onChange={onRadiusR4Change}
              onDetach={onDetachR4}
              min={0}
              attr=":border-radius"
              nillable={true}
              property={_tr("workspace.options.radius-bottom-left")}
              appliedToken={appliedTokens?.r4}
              className="dropdown-offset"
              innerClass="no-icon-input"
              placeholder={getSinglePlaceholder(appliedTokens?.r4, values?.r4)}
              align="right"
              value={values?.r4}
            />

            <NumericInputWrapper
              onChange={onRadiusR3Change}
              onDetach={onDetachR3}
              min={0}
              attr=":border-radius"
              nillable={true}
              property={_tr("workspace.options.radius-bottom-right")}
              appliedToken={appliedTokens?.r3}
              placeholder={getSinglePlaceholder(appliedTokens?.r3, values?.r3)}
              align="right"
              className="radius-wrapper"
              innerClass="no-icon-input"
              value={values?.r3}
            />
          </div>
        ) : (
          <div className="radius-4">
            <div className="small-input">
              <NumericInput
                placeholder="--"
                title={_tr("workspace.options.radius-top-left")}
                min={0}
                onChange={onRadiusR1Change}
                value={values?.r1}
              />
            </div>

            <div className="small-input">
              <NumericInput
                placeholder="--"
                title={_tr("workspace.options.radius-top-right")}
                min={0}
                onChange={onRadiusR2Change}
                value={values?.r2}
              />
            </div>

            <div className="small-input">
              <NumericInput
                placeholder="--"
                title={_tr("workspace.options.radius-bottom-left")}
                min={0}
                onChange={onRadiusR4Change}
                value={values?.r4}
              />
            </div>

            <div className="small-input">
              <NumericInput
                placeholder="--"
                title={_tr("workspace.options.radius-bottom-right")}
                min={0}
                onChange={onRadiusR3Change}
                value={values?.r3}
              />
            </div>
          </div>
        )
      )}

      <IconButton
        className={radiusExpanded ? "selected" : ""}
        variant="ghost"
        onClick={toggleRadiusMode}
        aria-label={radiusExpanded
          ? _tr("workspace.options.radius.hide-all-corners")
          : _tr("workspace.options.radius.show-single-corners")}
        icon={I.cornerRadius}
      />
    </section>
  )
}, checkBorderRadiusMenuProps)
