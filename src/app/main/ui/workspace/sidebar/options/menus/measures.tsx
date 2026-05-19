// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useState, useCallback, useMemo } from "react"
import * as d from "app.common.data"
import * as dm from "app.common.data.macros"
import * as grc from "app.common.geom.rect"
import * as gsh from "app.common.geom.shapes"
import * as cls from "app.common.logic.shapes"
import * as ctl from "app.common.types.shape.layout"
import {sizePresets} from "app/main/constants"
import * as udw from "app/main/data/workspace"
import * as dwi from "app/main/data/workspace/interactions"
import * as dwsh from "app/main/data/workspace/shapes"
import * as dwta from "app/main/data/workspace/tokens/application"
import * as dwt from "app/main/data/workspace/transforms"
import * as dwu from "app/main/data/workspace/undo"
import * as features from "app/main/features"
import {refs} from "app/main/refs"
import {store} from "app/main/store"
import {Dropdown} from "app/main/ui/components/dropdown"
import {NumericInput} from "app/main/ui/components/numeric-input"
import {RadioButton, RadioButtons} from "app/main/ui/components/radio-buttons"
import {IconButton} from "app/main/ui/ds/buttons/icon-button"
import * as i from "app/main/ui/ds/foundations/assets/icon"
import * as deprecatedIcon from "app/main/ui/icons"
import {BorderRadiusMenu} from "app/main/ui/workspace/sidebar/options/menus/border-radius"
import {NumericInputWrapper} from "app/main/ui/workspace/sidebar/options/menus/input-wrapper-tokens"
import * as dom from "app/util/dom"
import {tr} from "app/util/i18n"
import * as set from "clojure.set"

const measureAttrs = [
  "proportion-lock",
  "width",
  "height",
  "x",
  "y",
  "ox",
  "oy",
  "rotation",
  "r1",
  "r2",
  "r3",
  "r4",
  "selrect",
  "points",
  "show-content",
  "hide-in-viewer",
]

const genericOptions = new Set(["size", "position", "rotation"])
const rectOptions = new Set(["size", "position", "rotation", "radius"])
const frameOptions = new Set([
  "presets",
  "size",
  "position",
  "rotation",
  "radius",
  "clip-content",
  "show-in-viewer",
])

function typeToOptions(type: string): Set<string> {
  switch (type) {
    case "bool":
    case "circle":
    case "group":
    case "path":
    case "svg-raw":
    case "text":
      return genericOptions
    case "frame":
      return frameOptions
    case "rect":
      return rectOptions
    default:
      return genericOptions
  }
}

function selectMeasureKeys(shape: any): any {
  let result = { ...shape }

  if (shape["flip-x"] && shape["flip-y"]) {
    result = set.renameKeys(result, { r1: "r3", r2: "r4", r3: "r1", r4: "r2" })
  } else if (shape["flip-x"]) {
    result = set.renameKeys(result, { r1: "r2", r2: "r1", r3: "r4", r4: "r3" })
  } else if (shape["flip-y"]) {
    result = set.renameKeys(result, { r1: "r4", r2: "r3", r3: "r2", r4: "r1" })
  }

  return Object.keys(result)
    .filter((key) => measureAttrs.includes(key))
    .reduce((acc, key) => {
      acc[key] = result[key]
      return acc
    }, {} as any)
}

interface MeasuresMenuProps {
  ids: string[]
  values: any
  appliedTokens?: any
  type: string
  shapes?: any[]
}

export const MeasuresMenu: React.FC<MeasuresMenuProps> = ({
  ids,
  values,
  appliedTokens,
  type,
  shapes,
}) => {
  const tokenNumericInputs = features.useFeature("tokens/numeric-input")

  const allTypes = useMemo(() => {
    if (type === "multiple" && shapes) {
      return new Set(shapes.map((s: any) => s.type))
    }
    return null
  }, [type, shapes])

  const options = useMemo(() => {
    if (type === "multiple" && allTypes) {
      const result = new Set<string>()
      allTypes.forEach((t: string) => {
        typeToOptions(t).forEach((opt) => result.add(opt))
      })
      return result
    }
    return typeToOptions(type)
  }, [type, allTypes])

  const objects = refs.workspacePageObjects.deref()
  const frames = useMemo(() => {
    if (!shapes) return []
    return shapes
      .map((s: any) => s["frame-id"])
      .filter((fid: any) => fid)
      .map((fid: any) => objects[fid])
  }, [shapes, objects])

  const selectionParentsRef = useMemo(() => {
    return refs.parentsByIds(ids)
  }, [ids])

  const selectionParents = selectionParentsRef.deref()

  const shape = shapes?.[0]

  const flexChild = selectionParents?.some((p: any) => ctl.flexLayout(p))
  const absolute = ctl.itemAbsolute(shape)
  const flexContainer = ctl.flexLayout(shape)
  const flexAutoWidth = ctl.autoWidth(shape)
  const flexFillWidth = ctl.fillWidth(shape)
  const flexAutoHeight = ctl.autoHeight(shape)
  const flexFillHeight = ctl.fillHeight(shape)

  const disabledPosition = flexChild && !absolute
  const disabledWidthSizing =
    (flexChild || flexContainer) &&
    (flexAutoWidth || flexFillWidth) &&
    !absolute
  const disabledHeightSizing =
    (flexChild || flexContainer) &&
    (flexAutoHeight || flexFillHeight) &&
    !absolute

  const translatedShapes = useMemo(() => {
    if (!shapes || !frames) return shapes
    return shapes.map((s: any, idx: number) =>
      gsh.translateToFrame(s, frames[idx])
    )
  }, [shapes, frames])

  const translatedShape = translatedShapes?.[0]

  const rect = translatedShape?.points
    ? grc.pointsToRect(translatedShape.points)
    : { x: 0, y: 0 }
  const selrect = translatedShape?.selrect || { width: 0, height: 0 }

  let processedValues = { ...values }
  if (values?.x !== "multiple") processedValues.x = d.getProp(rect, "x")
  if (values?.y !== "multiple") processedValues.y = d.getProp(rect, "y")
  if (values?.ox && values?.x === "multiple") processedValues.x = values.ox
  if (values?.oy && values?.y === "multiple") processedValues.y = values.oy

  const rotation = translatedShape?.rotation || 0
  if (values?.width !== "multiple")
    processedValues.width = d.getProp(selrect, "width")
  if (values?.height !== "multiple")
    processedValues.height = d.getProp(selrect, "height")
  if (values?.rotation !== "multiple") processedValues.rotation = rotation

  const proportionLock = values?.["proportion-lock"]

  const [showPresetsDropdown, setShowPresetsDropdown] = useState(false)

  const openPresets = useCallback(() => setShowPresetsDropdown(true), [])
  const closePresets = useCallback(() => setShowPresetsDropdown(false), [])

  const onPresetSelected = useCallback(
    (event: React.MouseEvent) => {
      const target = dom.getCurrentTarget(event)
      const width = parseInt(dom.getData(target, "width") || "0", 10)
      const height = parseInt(dom.getData(target, "height") || "0", 10)
      store.emit(
        udw.updateDimensions(ids, "width", width),
        udw.updateDimensions(ids, "height", height)
      )
    },
    [ids]
  )

  const orientation = useMemo(() => {
    if (type !== "frame") return null
    if ((processedValues?.width || 0) > (processedValues?.height || 0)) {
      return "horiz"
    }
    return "vert"
  }, [type, processedValues?.width, processedValues?.height])

  const onOrientationChange = useCallback(
    (value: any) => {
      store.emit(udw.changeOrientation(ids, value))
    },
    [ids]
  )

  const onSizeChange = useCallback(
    (value: any, attr: string) => {
      if (typeof value === "string" || typeof value === "number") {
        store.emit(udw.triggerBoundingBoxCloaking(ids))
        store.emit(udw.updateDimensions(ids, attr, value))
      } else {
        store.emit(udw.triggerBoundingBoxCloaking(ids))
        store.emit(
          dwta.toggleToken({
            token: value[0],
            attrs: new Set([attr]),
            shapeIds: ids,
          })
        )
      }
    },
    [ids]
  )

  const onProportionLockChange = useCallback(() => {
    const newLock =
      proportionLock === "multiple" ? true : !proportionLock
    ids.forEach((id) => {
      store.emit(udw.setShapeProportionLock(id, newLock))
    })
  }, [ids, proportionLock])

  const onPositionChange = useCallback(
    (value: any, attr: string) => {
      if (typeof value === "string" || typeof value === "number") {
        store.emit(udw.triggerBoundingBoxCloaking(ids))
        store.emit(udw.updatePositions(ids, { [attr]: value }))
      } else {
        store.emit(udw.triggerBoundingBoxCloaking(ids))
        store.emit(
          dwta.toggleToken({
            token: value[0],
            attrs: new Set([attr]),
            shapeIds: ids,
          })
        )
      }
    },
    [ids]
  )

  const onRotationChange = useCallback(
    (value: any) => {
      if (typeof value === "string" || typeof value === "number") {
        store.emit(udw.triggerBoundingBoxCloaking(ids))
        store.emit(udw.increaseRotation(ids, value))
      } else {
        store.emit(udw.triggerBoundingBoxCloaking(ids))
        store.emit(
          dwta.toggleToken({
            token: value[0],
            attrs: new Set(["rotation"]),
            shapeIds: ids,
          })
        )
      }
    },
    [ids]
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

  const onChangeClipContent = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = !dom.checked(dom.getTarget(event))
      store.emit(
        dwsh.updateShapes(ids, (shape: any) => ({
          ...shape,
          "show-content": value,
        }))
      )
    },
    [ids]
  )

  const onChangeShowInViewer = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = !dom.checked(dom.getTarget(event))
      const undoId = Symbol()
      store.emit(dwu.startUndoTransaction(undoId))
      store.emit(
        dwsh.updateShapes(ids, (shape: any) =>
          cls.changeShowInViewer(shape, value)
        )
      )

      if (!value) {
        ids.forEach((id) => {
          store.emit(dwi.removeAllInteractionsNavTo(id))
        })
      }

      store.emit(dwu.commitUndoTransaction(undoId))
    },
    [ids]
  )

  const handleFitContent = useCallback(() => {
    store.emit(dwt.selectedFitContent())
  }, [])

  const onWidthChange = useCallback(
    (value: any) => onSizeChange(value, "width"),
    [onSizeChange]
  )
  const onHeightChange = useCallback(
    (value: any) => onSizeChange(value, "height"),
    [onSizeChange]
  )
  const onPosXChange = useCallback(
    (value: any) => onPositionChange(value, "x"),
    [onPositionChange]
  )
  const onPosYChange = useCallback(
    (value: any) => onPositionChange(value, "y"),
    [onPositionChange]
  )

  const showPresets = options.has("presets")
  const onlyOneType = !allTypes || allTypes.size === 1

  return (
    <section
      className={(stl as any).css("element-set")}
      aria-label="shape-measures-section"
    >
      {showPresets && onlyOneType && (
        <div className={(stl as any).css("presets")}>
          <div
            className={(stl as any).cssCase(
              "presets-wrapper",
              true,
              "opened",
              showPresetsDropdown
            )}
            onClick={openPresets}
          >
            <span className={(stl as any).css("select-name")}>
              {tr("workspace.options.size-presets")}
            </span>
            <span className={(stl as any).css("collapsed-icon")}>
              {deprecatedIcon.arrow}
            </span>

            <Dropdown
              show={showPresetsDropdown}
              onClose={closePresets}
            >
              <ul className={(stl as any).css("custom-select-dropdown")}>
                {sizePresets.map((preset: any) => {
                  if (!preset.width) {
                    return (
                      <li
                        key={preset.name}
                        className={(stl as any).cssCase(
                          "dropdown-element",
                          true,
                          "disabled"
                        )}
                      >
                        <span className={(stl as any).css("preset-name")}>
                          {preset.name}
                        </span>
                      </li>
                    )
                  }

                  const presetMatch =
                    parseInt(preset.width) ===
                      parseInt(processedValues?.width || "0") &&
                    parseInt(preset.height) ===
                      parseInt(processedValues?.height || "0")

                  return (
                    <li
                      key={preset.name}
                      className={(stl as any).cssCase(
                        "dropdown-element",
                        true,
                        "match",
                        presetMatch
                      )}
                      data-width={preset.width}
                      data-height={preset.height}
                      onClick={onPresetSelected}
                    >
                      <div className={(stl as any).css("name-wrapper")}>
                        <span className={(stl as any).css("preset-name")}>
                          {preset.name}
                        </span>
                        <span className={(stl as any).css("preset-size")}>
                          {preset.width} x {preset.height}
                        </span>
                      </div>
                      {presetMatch && (
                        <span className={(stl as any).css("check-icon")}>
                          {deprecatedIcon.tick}
                        </span>
                      )}
                    </li>
                  )
                })}
              </ul>
            </Dropdown>
          </div>

          <RadioButtons
            selected={orientation || ""}
            onChange={onOrientationChange}
            name="frame-orientation"
            wide={true}
            className={(stl as any).css("radio-buttons")}
          >
            <RadioButton
              icon={i.sizeVertical}
              value="vert"
              id="size-vertical"
            />
            <RadioButton
              icon={i.sizeHorizontal}
              value="horiz"
              id="size-horizontal"
            />
          </RadioButtons>

          <IconButton
            variant="ghost"
            ariaLabel={tr("workspace.options.fit-content")}
            onPointerDown={handleFitContent}
            icon={i.fitContent}
          />
        </div>
      )}

      {options.has("size") && (
        <div className={(stl as any).css("size")}>
          {tokenNumericInputs ? (
            <>
              <NumericInputWrapper
                disabled={disabledWidthSizing}
                onChange={onWidthChange}
                onDetach={onDetachToken}
                icon={i.characterW}
                min={0.01}
                attr="width"
                property={tr("workspace.options.width")}
                appliedToken={appliedTokens?.width}
                placeholder={
                  appliedTokens?.width === "multiple" ||
                  values?.width === "multiple"
                    ? tr("settings.multiple")
                    : "--"
                }
                value={values?.width}
              />
              <NumericInputWrapper
                disabled={disabledHeightSizing}
                onChange={onHeightChange}
                onDetach={onDetachToken}
                min={0.01}
                icon={i.characterH}
                attr="height"
                align="right"
                property={tr("workspace.options.height")}
                appliedToken={appliedTokens?.height}
                value={values?.height}
              />
            </>
          ) : (
            <>
              <div
                className={(stl as any).cssCase(
                  "width",
                  true,
                  "disabled",
                  disabledWidthSizing
                )}
                title={tr("workspace.options.width")}
              >
                <span className={(stl as any).css("icon-text")}>W</span>
                <NumericInput
                  min={0.01}
                  noValidate={true}
                  placeholder={
                    values?.width === "multiple"
                      ? tr("settings.multiple")
                      : "--"
                  }
                  onChange={onWidthChange}
                  disabled={disabledWidthSizing}
                  className={(stl as any).css("numeric-input")}
                  value={values?.width}
                />
              </div>
              <div
                className={(stl as any).cssCase(
                  "height",
                  true,
                  "disabled",
                  disabledHeightSizing
                )}
                title={tr("workspace.options.height")}
              >
                <span className={(stl as any).css("icon-text")}>H</span>
                <NumericInput
                  min={0.01}
                  noValidate={true}
                  placeholder={
                    values?.height === "multiple"
                      ? tr("settings.multiple")
                      : "--"
                  }
                  onChange={onHeightChange}
                  disabled={disabledHeightSizing}
                  className={(stl as any).css("numeric-input")}
                  value={values?.height}
                />
              </div>
            </>
          )}

          <IconButton
            variant="ghost"
            tooltipPlacement="top-left"
            icon={proportionLock ? "lock" : "unlock"}
            className={(stl as any).cssCase("selected", proportionLock === true)}
            disabled={proportionLock === "multiple"}
            ariaLabel={
              proportionLock
                ? tr("workspace.options.size.unlock")
                : tr("workspace.options.size.lock")
            }
            onClick={onProportionLockChange}
          />
        </div>
      )}

      {options.has("position") && (
        <div className={(stl as any).css("position")}>
          {tokenNumericInputs ? (
            <>
              <NumericInputWrapper
                disabled={disabledPosition}
                onChange={onPosXChange}
                onDetach={onDetachToken}
                icon={i.characterX}
                attr="x"
                property={tr("workspace.options.x")}
                appliedToken={appliedTokens?.x}
                placeholder={
                  appliedTokens?.x === "multiple" || values?.x === "multiple"
                    ? tr("settings.multiple")
                    : "--"
                }
                value={values?.x}
              />
              <NumericInputWrapper
                disabled={disabledPosition}
                onChange={onPosYChange}
                onDetach={onDetachToken}
                icon={i.characterY}
                attr="y"
                align="right"
                property={tr("workspace.options.y")}
                appliedToken={appliedTokens?.y}
                placeholder={
                  appliedTokens?.y === "multiple" || values?.y === "multiple"
                    ? tr("settings.multiple")
                    : "--"
                }
                value={values?.y}
              />
            </>
          ) : (
            <>
              <div
                className={(stl as any).cssCase(
                  "x-position",
                  true,
                  "disabled",
                  disabledPosition
                )}
                title={tr("workspace.options.x")}
              >
                <span className={(stl as any).css("icon-text")}>X</span>
                <NumericInput
                  noValidate={true}
                  placeholder={
                    values?.x === "multiple" ? tr("settings.multiple") : "--"
                  }
                  onChange={onPosXChange}
                  disabled={disabledPosition}
                  className={(stl as any).css("numeric-input")}
                  value={values?.x}
                />
              </div>
              <div
                className={(stl as any).cssCase(
                  "y-position",
                  true,
                  "disabled",
                  disabledPosition
                )}
                title={tr("workspace.options.y")}
              >
                <span className={(stl as any).css("icon-text")}>Y</span>
                <NumericInput
                  noValidate={true}
                  placeholder={
                    values?.y === "multiple" ? tr("settings.multiple") : "--"
                  }
                  disabled={disabledPosition}
                  onChange={onPosYChange}
                  className={(stl as any).css("numeric-input")}
                  value={values?.y}
                />
              </div>
            </>
          )}
        </div>
      )}

      {(options.has("rotation") || options.has("radius")) && (
        <div className={(stl as any).css("rotation-radius")}>
          {options.has("rotation") &&
            (tokenNumericInputs ? (
              <NumericInputWrapper
                onChange={onRotationChange}
                onDetach={onDetachToken}
                icon={i.rotation}
                min={-359}
                max={359}
                attr="rotation"
                property={tr("workspace.options.rotation")}
                appliedToken={appliedTokens?.rotation}
                placeholder={
                  appliedTokens?.rotation === "multiple" ||
                  values?.rotation === "multiple"
                    ? tr("settings.multiple")
                    : "--"
                }
                value={values?.rotation}
              />
            ) : (
              <div
                className={(stl as any).css("rotation")}
                title={tr("workspace.options.rotation")}
                data-testid="rotation"
              >
                <span className={(stl as any).css("icon")}>
                  {deprecatedIcon.rotation}
                </span>
                <NumericInput
                  noValidate={true}
                  min={-359}
                  max={359}
                  dataWrap={true}
                  placeholder={
                    values?.rotation === "multiple"
                      ? tr("settings.multiple")
                      : "--"
                  }
                  onChange={onRotationChange}
                  className={(stl as any).css("numeric-input")}
                  value={values?.rotation}
                />
              </div>
            ))}

          {options.has("radius") && (
            <BorderRadiusMenu
              className={(stl as any).css("border-radius")}
              ids={ids}
              values={values}
              appliedTokens={appliedTokens}
            />
          )}
        </div>
      )}

      {(options.has("clip-content") || options.has("show-in-viewer")) && (
        <div className={(stl as any).css("clip-show")}>
          {options.has("clip-content") && (
            <div className={(stl as any).css("clip-content")}>
              <input
                type="checkbox"
                id="clip-content"
                className={(stl as any).css("clip-content-input")}
                checked={!values?.["show-content"]}
                onChange={onChangeClipContent}
              />
              <label
                htmlFor="clip-content"
                title={tr("workspace.options.clip-content")}
                className={(stl as any).cssCase(
                  "clip-content-label",
                  true,
                  "selected",
                  !values?.["show-content"]
                )}
              >
                <i iconId={i.clipContent} />
              </label>
            </div>
          )}
          {options.has("show-in-viewer") && (
            <div className={(stl as any).css("show-in-viewer")}>
              <input
                type="checkbox"
                id="show-in-viewer"
                className={(stl as any).css("clip-content-input")}
                checked={!values?.["hide-in-viewer"]}
                onChange={onChangeShowInViewer}
              />
              <label
                htmlFor="show-in-viewer"
                title={tr("workspace.options.show-in-viewer")}
                className={(stl as any).cssCase(
                  "clip-content-label",
                  true,
                  "selected",
                  !values?.["hide-in-viewer"]
                )}
              >
                <i iconId={i.play} />
              </label>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
