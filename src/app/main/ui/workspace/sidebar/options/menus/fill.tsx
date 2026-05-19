// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useState, useCallback, useMemo, useRef, useEffect } from "react"
import * as clr from "app/common/types/color"
import * as typesFills from "app/common/types/fills"
import { defaultColor } from "app/common/types/shape/attrs"
import * as udw from "app/main/data/workspace"
import * as dc from "app/main/data/workspace/colors"
import * as dwta from "app/main/data/workspace/tokens/application"
import * as feat from "app/main/features"
import {store} from "app/main/store"
import {TitleBar} from "app/main/ui/components/title-bar"
import {IconButton} from "app/main/ui/ds/buttons/icon-button"
import * as i from "app/main/ui/ds/foundations/assets/icon"
import * as h from "app/main/ui/hooks"
import * as deprecatedIcon from "app/main/ui/icons"
import {ColorRow} from "app/main/ui/workspace/sidebar/options/rows/color-row"
import * as dom from "app/util/dom"
import {tr} from "app/util/i18n"

const fillAttrs = new Set(["fills", "hide-fill-on-export"])

function processFills(fills: any[]): any[] {
  if (!fills) return fills
  return fills
    .map((item: any, index: number) => {
      const color = typesFills.fillToColor(item)
      return { ...item, color, index }
    })
    .filter((item: any) => item.color)
}

function checkProps(nProps: any, oProps: any): boolean {
  if (nProps?.["ids"] !== oProps?.["ids"]) return false

  const oVals = oProps?.["values"]
  const nVals = nProps?.["values"]

  const oFills = oVals?.fills
  const nFills = nVals?.fills
  const oAppliedTokens = oVals?.["applied-tokens"]
  const nAppliedTokens = nVals?.["applied-tokens"]
  const oHide = oVals?.["hide-fill-on-export"]
  const nHide = nVals?.["hide-fill-on-export"]

  return (
    oHide === nHide &&
    oAppliedTokens === nAppliedTokens &&
    oFills === nFills
  )
}

interface FillMenuProps {
  ids: string[]
  type: string
  values: any
  appliedTokens?: any
}

export const FillMenu: React.FC<FillMenuProps> = React.memo(
  ({ ids, type, values, appliedTokens }) => {
    const fills = values?.fills
    const hideOnExport = values?.["hide-fill-on-export"] || false
    const fillTokenApplied = appliedTokens?.fill

    const renderWasm = feat.useFeature("render-wasm/v1")

    const multiple = fills === "multiple"

    const processedFills = useMemo(() => {
      if (fills === "multiple") return fills
      return processFills(fills)
    }, [fills])

    const hasFills = multiple || !!processedFills
    const emptyFills = !multiple && (!fills || fills.length === 0)

    const [open, setOpen] = useState(hasFills)
    const toggleContent = useCallback(() => setOpen((prev) => !prev), [])
    const openContent = useCallback(() => setOpen(true), [])
    const closeContent = useCallback(() => setOpen(false), [])

    const checkboxRef = useRef<HTMLInputElement>(null)

    const canAddFills = renderWasm
      ? !multiple && fills?.length < typesFills.MAX_FILLS
      : !multiple

    const label =
      type === "multiple"
        ? tr("workspace.options.selection-fill")
        : type === "group"
        ? tr("workspace.options.group-fill")
        : tr("workspace.options.fill")

    const onAdd = useCallback(
      (_: any) => {
        if (!canAddFills) return
        store.emit(udw.triggerBoundingBoxCloaking(ids))
        store.emit(
          dc.addFill(ids, {
            color: defaultColor,
            opacity: 1,
          })
        )
        if (multiple || emptyFills) {
          openContent()
        }
      },
      [ids, multiple, emptyFills, canAddFills, openContent]
    )

    const onChange = useCallback(
      (color: any, index: number) => {
        const colorAttrs = Object.keys(color).filter((k) =>
          clr.colorAttrs.includes(k)
        )
        const selectedColor: any = {}
        colorAttrs.forEach((k) => {
          selectedColor[k] = color[k]
        })
        store.emit(dc.changeFill(ids, selectedColor, index))
      },
      [ids]
    )

    const onReorder = useCallback(
      (fromPos: number, toSpaceBetweenPos: number) => {
        store.emit(dc.reorderFills(ids, fromPos, toSpaceBetweenPos))
      },
      [ids]
    )

    const onRemove = useCallback(
      (index: number, _event: any) => {
        store.emit(dc.removeFill(ids, index))
        if (multiple || emptyFills) {
          closeContent()
        }
      },
      [ids, multiple, emptyFills, closeContent]
    )

    const onRemoveAll = useCallback(() => {
      store.emit(dc.removeAllFills(ids))
    }, [ids])

    const onDetach = useCallback(
      (index: number, _event: any) => {
        store.emit(dc.detachFill(ids, index))
      },
      [ids]
    )

    const onChangeShowOnExport = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = dom.getChecked(event.target)
        store.emit(dc.changeHideFillOnExport(ids, !value))
      },
      [ids]
    )

    const [disableDrag, setDisableDrag] = useState(false)

    const onFocus = useCallback(() => setDisableDrag(true), [])
    const onBlur = useCallback(() => setDisableDrag(false), [])

    const onTokenChange = useCallback(
      (_: any, token: any) => {
        store.emit(
          dwta.toggleToken({
            token,
            attrs: new Set(["fill"]),
            shapeIds: ids,
            expandWithChildren: true,
          })
        )
      },
      [ids]
    )

    const onDetachToken = useCallback(
      (tokenName: string) => {
        store.emit(
          dwta.unapplyToken({
            tokenName,
            attributes: new Set(["fill"]),
            shapeIds: ids,
          })
        )
      },
      [ids]
    )

    useEffect(() => {
      const checkbox = checkboxRef.current
      if (!checkbox) return

      if (hideOnExport === "multiple") {
        dom.setAttribute(checkbox, "indeterminate", "true")
      } else {
        dom.removeAttribute(checkbox, "indeterminate")
      }
    }, [hideOnExport])

    const isMultiple = (val: any) => val === "multiple"

    return (
      <div className={(stl as any).css("fill-section")}>
        <div className={(stl as any).css("fill-title")}>
          <TitleBar
            collapsable={hasFills}
            collapsed={!open}
            onCollapsed={toggleContent}
            title={label}
            className={(stl as any).cssCase("fill-title-bar", !hasFills)}
          >
            {fills !== "multiple" && (
              <IconButton
                variant="ghost"
                ariaLabel={tr("workspace.options.fill.add-fill")}
                onClick={onAdd}
                data-testid="add-fill"
                disabled={!canAddFills}
                icon={i.add}
              />
            )}
          </TitleBar>
        </div>

        {open && (
          <div className={(stl as any).css("fill-content")}>
            {isMultiple(fills) || isMultiple(fillTokenApplied) ? (
              <div className={(stl as any).css("fill-multiple")}>
                <div className={(stl as any).css("fill-multiple-label")}>
                  {tr("settings.multiple")}
                </div>
                <IconButton
                  variant="ghost"
                  ariaLabel={tr("workspace.options.fill.remove-fill")}
                  onClick={onRemoveAll}
                  icon={i.remove}
                />
              </div>
            ) : (
              <h.SortableContainer>
                {processedFills?.map((value: any) => {
                  const { index, color } = value
                  return (
                    <ColorRow
                      color={color}
                      key={index}
                      index={index}
                      title={tr("workspace.options.fill")}
                      onChange={onChange}
                      onReorder={onReorder}
                      onDetach={onDetach}
                      onDetachToken={onDetachToken}
                      onRemove={onRemove}
                      disableDrag={disableDrag}
                      onFocus={onFocus}
                      appliedToken={index === 0 ? fillTokenApplied : null}
                      onTokenChange={onTokenChange}
                      origin="fill"
                      selectOnFocus={!disableDrag}
                      onBlur={onBlur}
                    />
                  )
                })}
              </h.SortableContainer>
            )}

            {(type === "frame" ||
              (type === "multiple" && hideOnExport !== undefined)) && (
              <div className={(stl as any).css("fill-checkbox")}>
                <label
                  htmlFor="show-fill-on-export"
                  className={(stl as any).cssCase("global/checked", !hideOnExport)}
                >
                  <span
                    className={(stl as any).cssCase("check-mark", true, "checked", !hideOnExport)}
                  >
                    {!hideOnExport && deprecatedIcon.statusTick}
                  </span>
                  {tr("workspace.options.show-fill-on-export")}
                  <input
                    type="checkbox"
                    id="show-fill-on-export"
                    ref={checkboxRef}
                    checked={!hideOnExport}
                    onChange={onChangeShowOnExport}
                  />
                </label>
              </div>
            )}
          </div>
        )}
      </div>
    )
  },
  checkProps
)
