// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useState, useCallback } from "react"
import * as d from "app.common.data"
import * as grc from "app.common.geom.rect"
import * as gsh from "app.common.geom.shapes"
import * as uuid from "app.common.uuid"
import * as dwsh from "app/main/data/workspace/shapes"
import {refs} from "app/main/refs"
import {store} from "app/main/store"
import {Select} from "app/main/ui/components/select"
import {TitleBar} from "app/main/ui/components/title-bar"
import * as deprecatedIcon from "app/main/ui/icons"
import * as dom from "app/util/dom"
import {tr} from "app/util/i18n"
import * as str from "cuerdas.core"

const constraintAttrs = [
  "constraints-h",
  "constraints-v",
  "fixed-scroll",
  "parent-id",
  "frame-id",
]

interface ConstraintsMenuProps {
  ids: string[]
  values: any
}

export const ConstraintsMenu: React.FC<ConstraintsMenuProps> = ({
  ids,
  values,
}) => {
  const [open, setOpen] = useState(true)
  const toggleContent = useCallback(() => setOpen((prev) => !prev), [])

  const oldShapes = refs.objectsById(ids).map((ref: any) => ref.deref())
  const frames = oldShapes.map((shape: any) =>
    refs.objectById(shape["frame-id"]).deref()
  )

  const shapes = oldShapes.map((shape: any, i: number) =>
    gsh.translateToFrame(shape, frames[i])
  )

  const firstShape = shapes[0]
  const rect = firstShape?.points ? grc.pointsToRect(firstShape.points) : { x: 0, y: 0 }
  const selrect = firstShape?.selrect || { width: 0, height: 0 }

  values = values
    ? (() => {
        let result = { ...values }
        if (values.x !== "multiple") result.x = rect.x
        if (values.y !== "multiple") result.y = rect.y
        return result
      })()
    : values

  values = values
    ? (() => {
        let result = { ...values }
        if (values.width !== "multiple") result.width = selrect.width
        if (values.height !== "multiple") result.height = selrect.height
        return result
      })()
    : values

  const inFrame =
    ids && ids.length > 0 && values?.parentId !== uuid.zero

  const firstLevel =
    inFrame && values?.parentId === values?.frameId

  const constraintsH =
    values?.constraintsH || gsh.defaultConstraintsH(values)
  const constraintsV =
    values?.constraintsV || gsh.defaultConstraintsV(values)

  const onConstraintButtonClicked = useCallback(
    (event: React.MouseEvent) => {
      const button = dom.getData(dom.getCurrentTarget(event), "value")
      const constraintKey = button as string
      const constraintsHVal = values?.constraintsH || "scale"
      const constraintsVVal = values?.constraintsV || "scale"

      let constraint: string | null = null
      let newValue: any = null

      switch (constraintKey) {
        case "top":
          if (constraintsVVal === "top") {
            constraint = "constraints-v"
            newValue = "scale"
          } else if (constraintsVVal === "topbottom") {
            constraint = "constraints-v"
            newValue = "bottom"
          } else if (constraintsVVal === "bottom") {
            constraint = "constraints-v"
            newValue = "topbottom"
          } else {
            constraint = "constraints-v"
            newValue = "top"
          }
          break
        case "bottom":
          if (constraintsVVal === "bottom") {
            constraint = "constraints-v"
            newValue = "scale"
          } else if (constraintsVVal === "topbottom") {
            constraint = "constraints-v"
            newValue = "top"
          } else if (constraintsVVal === "top") {
            constraint = "constraints-v"
            newValue = "topbottom"
          } else {
            constraint = "constraints-v"
            newValue = "bottom"
          }
          break
        case "left":
          if (constraintsHVal === "left") {
            constraint = "constraints-h"
            newValue = "scale"
          } else if (constraintsHVal === "leftright") {
            constraint = "constraints-h"
            newValue = "right"
          } else if (constraintsHVal === "right") {
            constraint = "constraints-h"
            newValue = "leftright"
          } else {
            constraint = "constraints-h"
            newValue = "left"
          }
          break
        case "right":
          if (constraintsHVal === "right") {
            constraint = "constraints-h"
            newValue = "scale"
          } else if (constraintsHVal === "leftright") {
            constraint = "constraints-h"
            newValue = "left"
          } else if (constraintsHVal === "left") {
            constraint = "constraints-h"
            newValue = "leftright"
          } else {
            constraint = "constraints-h"
            newValue = "right"
          }
          break
        case "centerv":
          if (constraintsVVal === "center") {
            constraint = "constraints-v"
            newValue = "scale"
          } else {
            constraint = "constraints-v"
            newValue = "center"
          }
          break
        case "centerh":
          if (constraintsHVal === "center") {
            constraint = "constraints-h"
            newValue = "scale"
          } else {
            constraint = "constraints-h"
            newValue = "center"
          }
          break
      }

      if (constraint && newValue !== null) {
        store.emit(
          dwsh.updateShapes(ids, (shape: any) => ({
            ...shape,
            [constraint]: newValue,
          }))
        )
      }
    },
    [ids, values]
  )

  const onConstraintHSelectChanged = useCallback(
    (value: any) => {
      if (!str.empty(value)) {
        store.emit(
          dwsh.updateShapes(ids, (shape: any) => ({
            ...shape,
            "constraints-h": value,
          }))
        )
      }
    },
    [ids]
  )

  const onConstraintVSelectChanged = useCallback(
    (value: any) => {
      if (!str.empty(value)) {
        store.emit(
          dwsh.updateShapes(ids, (shape: any) => ({
            ...shape,
            "constraints-v": value,
          }))
        )
      }
    },
    [ids]
  )

  const onFixedScrollClicked = useCallback(() => {
    store.emit(
      dwsh.updateShapes(ids, (shape: any) => ({
        ...shape,
        "fixed-scroll": !shape["fixed-scroll"],
      }))
    )
  }, [ids])

  const optionsH = (() => {
    const result = []
    if (constraintsH === "multiple") {
      result.push({ value: "", label: tr("settings.multiple") })
    }
    result.push(
      { value: "left", label: tr("workspace.options.constraints.left") },
      { value: "right", label: tr("workspace.options.constraints.right") },
      { value: "leftright", label: tr("workspace.options.constraints.leftright") },
      { value: "center", label: tr("workspace.options.constraints.center") },
      { value: "scale", label: tr("workspace.options.constraints.scale") }
    )
    return result
  })()

  const optionsV = (() => {
    const result = []
    if (constraintsV === "multiple") {
      result.push({ value: "", label: tr("settings.multiple") })
    }
    result.push(
      { value: "top", label: tr("workspace.options.constraints.top") },
      { value: "bottom", label: tr("workspace.options.constraints.bottom") },
      { value: "topbottom", label: tr("workspace.options.constraints.topbottom") },
      { value: "center", label: tr("workspace.options.constraints.center") },
      { value: "scale", label: tr("workspace.options.constraints.scale") }
    )
    return result
  })()

  if (!inFrame) return null

  return (
    <div className={(stl as any).css("element-set")}>
      <div className={(stl as any).css("element-title")}>
        <TitleBar
          collapsable={true}
          collapsed={!open}
          onCollapsed={toggleContent}
          title={tr("workspace.options.constraints")}
        />
      </div>
      {open && (
        <div className={(stl as any).css("element-set-content")}>
          <div className={(stl as any).css("constraints-widget")}>
            <div className={(stl as any).css("constraints-top")}>
              <button
                className={(stl as any).cssCase(
                  "constraint-btn",
                  true,
                  "active",
                  constraintsV === "top" || constraintsV === "topbottom"
                )}
                data-value="top"
                onClick={onConstraintButtonClicked}
              >
                <span className={(stl as any).css("resalted-area")} />
              </button>
            </div>
            <div className={(stl as any).css("constraints-left")}>
              <button
                className={(stl as any).cssCase(
                  "constraint-btn",
                  true,
                  "constraint-btn-rotated",
                  true,
                  "active",
                  constraintsH === "left" || constraintsH === "leftright"
                )}
                data-value="left"
                onClick={onConstraintButtonClicked}
              >
                <span className={(stl as any).css("resalted-area")} />
              </button>
            </div>
            <div className={(stl as any).css("constraints-center")}>
              <button
                className={(stl as any).cssCase(
                  "constraint-btn",
                  true,
                  "active",
                  constraintsV === "center"
                )}
                data-value="centerv"
                onClick={onConstraintButtonClicked}
              >
                <span className={(stl as any).css("resalted-area")} />
              </button>
              <button
                className={(stl as any).cssCase(
                  "constraint-btn-special",
                  true,
                  "constraint-btn-rotated",
                  true,
                  "active",
                  constraintsH === "center"
                )}
                data-value="centerh"
                onClick={onConstraintButtonClicked}
              >
                <span className={(stl as any).css("resalted-area")} />
              </button>
            </div>
            <div className={(stl as any).css("constraints-right")}>
              <button
                className={(stl as any).cssCase(
                  "constraint-btn",
                  true,
                  "constraint-btn-rotated",
                  true,
                  "active",
                  constraintsH === "right" || constraintsH === "leftright"
                )}
                data-value="right"
                onClick={onConstraintButtonClicked}
              >
                <span className={(stl as any).css("resalted-area")} />
              </button>
            </div>
            <div className={(stl as any).css("constraints-bottom")}>
              <button
                className={(stl as any).cssCase(
                  "constraint-btn",
                  true,
                  "active",
                  constraintsV === "bottom" || constraintsV === "topbottom"
                )}
                data-value="bottom"
                onClick={onConstraintButtonClicked}
              >
                <span className={(stl as any).css("resalted-area")} />
              </button>
            </div>
          </div>
          <div className={(stl as any).css("constraints-selects")}>
            <div
              className={(stl as any).css("horizontal-select")}
              data-testid="constraint-h-select"
            >
              <Select
                defaultValue={
                  constraintsH !== "multiple"
                    ? d.nilm(d.name(constraintsH), "scale")
                    : ""
                }
                options={optionsH}
                onChange={onConstraintHSelectChanged}
              />
            </div>
            <div
              className={(stl as any).css("vertical-select")}
              data-testid="constraint-v-select"
            >
              <Select
                defaultValue={
                  constraintsV !== "multiple"
                    ? d.nilm(d.name(constraintsV), "scale")
                    : ""
                }
                options={optionsV}
                onChange={onConstraintVSelectChanged}
              />
            </div>
            {firstLevel && (
              <div className={(stl as any).css("checkbox")}>
                <label
                  htmlFor="fixed-on-scroll"
                  className={(stl as any).cssCase(
                    "checked",
                    values?.["fixed-scroll"]
                  )}
                >
                  <span
                    className={(stl as any).cssCase(
                      "check-mark",
                      true,
                      "checked",
                      values?.["fixed-scroll"]
                    )}
                  >
                    {values?.["fixed-scroll"] && deprecatedIcon.statusTick}
                  </span>
                  {tr("workspace.options.constraints.fix-when-scrolling")}
                  <input
                    type="checkbox"
                    id="fixed-on-scroll"
                    checked={values?.["fixed-scroll"]}
                    onChange={onFixedScrollClicked}
                  />
                </label>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
