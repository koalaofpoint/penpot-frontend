// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useState, useCallback, useMemo, useRef } from "react"
import * as d from "app.common.data"
import * as dwc from "app/main/data/workspace/colors"
import * as dws from "app/main/data/workspace/selection"
import * as dwta from "app/main/data/workspace/tokens/application"
import {store} from "app/main/store"
import {TitleBar} from "app/main/ui/components/title-bar"
import {ColorRow} from "app/main/ui/workspace/sidebar/options/rows/color-row"
import {tr} from "app/util/i18n"

interface ColorSelectionMenuProps {
  shapes: any[]
  fileId: string
  libraries: any
}

interface ColorAttrs {
  color?: string
  opacity?: number
  refId?: string
  refFile?: string
  tokenName?: string
  hasTokenApplied?: boolean
}

interface ColorOperation {
  prop: string
  shapeId: string
  index: number
}

interface ColorGroup {
  groups: Record<string, ColorOperation[]>
  allColors: ColorAttrs[]
  colors: ColorAttrs[]
  tokenColors: ColorAttrs[]
  libraryColors: ColorAttrs[]
}

function prepareColors(
  shapes: any[],
  fileId: string,
  libraries: any
): ColorGroup {
  const data = dwc.extractAllColors(shapes, fileId, libraries)
  const groups = d.groupBy(
    (x: any) => x.attrs,
    (x: any) => d.dissoc(x.attrs, "attrs"),
    data
  ) as Record<string, ColorOperation[]>

  const allColors = d.distinct(data.map((x: any) => x.attrs)) as ColorAttrs[]

  const libraryColors = allColors.filter((c) => c.refId)
  const tokenColors = allColors.filter((c) => c.tokenName)
  const colors = allColors.filter(
    (c) => !c.refId && !c.tokenName
  )

  return {
    groups,
    allColors,
    colors,
    tokenColors,
    libraryColors,
  }
}

const xfMapShapeId = (colorOps: ColorOperation[]) => colorOps.map((op) => op.shapeId)

function retrieveColorOperations(
  groups: Record<string, ColorOperation[]>,
  oldColor: ColorAttrs,
  prevColors: ColorAttrs[]
): [ColorOperation[] | null, ColorAttrs] {
  const oldColorClean = d.withoutNils(d.dissoc(oldColor, "name", "path"))
  const prevColor = d.seek(
    (c: ColorAttrs) => groups[d.to-string(c)],
    prevColors
  )
  const colorOperationsOld = groups[d.to-string(oldColorClean)]
  const colorOperationsPrev = groups[d.to-string(prevColor)]
  const colorOperations = colorOperationsPrev || colorOperationsOld
  const oldColorResult = prevColor || oldColorClean

  return [colorOperations ?? null, oldColorResult]
}

export const ColorSelectionMenu: React.FC<ColorSelectionMenuProps> = React.memo(
  ({ shapes, fileId, libraries }) => {
    const { groups, libraryColors, colors, tokenColors } = useMemo(
      () => prepareColors(shapes, fileId, libraries),
      [shapes, fileId, libraries]
    )

    const [open, setOpen] = useState(true)
    const hasColors = colors.length > 0 || libraryColors.length > 0

    const toggleContent = useCallback(() => setOpen((prev) => !prev), [])

    const [expandLibColor, setExpandLibColor] = useState(false)
    const [expandColor, setExpandColor] = useState(false)
    const [expandTokenColor, setExpandTokenColor] = useState(false)

    const prevColorsRef = useRef<ColorAttrs[]>([])

    const onChange = useCallback(
      (oldColor: ColorAttrs, newColor: ColorAttrs, fromPicker: boolean) => {
        const prevColors = prevColorsRef.current
        const [colorOperations] = retrieveColorOperations(
          groups,
          oldColor,
          prevColors
        )

        if (fromPicker) {
          const color = d.withoutNils(d.dissoc(newColor, "name", "path"))
          prevColorsRef.current = [...prevColors, color]
        }

        if (colorOperations) {
          store.emit(
            dwc.changeColorInSelected(
              colorOperations,
              newColor,
              d.withoutNils(d.dissoc(oldColor, "tokenName", "hasTokenApplied"))
            )
          )
        }
      },
      [groups]
    )

    const onOpen = useCallback(() => {
      prevColorsRef.current = []
    }, [])

    const onClose = useCallback(() => {
      prevColorsRef.current = []
    }, [])

    const onDetach = useCallback(
      (color: ColorAttrs) => {
        const colorOperations = groups[d.to-string(color)]
        const colorClean = d.dissoc(color, "refId", "refFile")
        store.emit(dwc.changeColorInSelected(colorOperations, colorClean, color))
      },
      [groups]
    )

    const onDetachToken = useCallback(
      (tokenName: string) => {
        const prevColors = prevColorsRef.current
        const tokenColor = tokenColors.find(
          (c) => c.tokenName === tokenName
        )

        if (!tokenColor) return

        const [colorOperations] = retrieveColorOperations(
          groups,
          tokenColor,
          prevColors
        )

        if (colorOperations) {
          colorOperations.forEach((op) => {
            const attr = op.prop === "stroke" ? ["stroke-color"] : ["fill"]
            const color = d.withoutNils(
              d.dissoc(tokenColor, "tokenName", "hasTokenApplied")
            )
            prevColorsRef.current = [...prevColors, color]
            store.emit(
              dwta.unapplyToken({
                tokenName,
                attributes: new Set(attr),
                shapeIds: [op.shapeId],
              })
            )
          })
        }
      },
      [groups, tokenColors]
    )

    const selectOnly = useCallback(
      (color: ColorAttrs) => {
        const colorOperations = groups[d.to-string(color)]
        const ids = colorOperations.reduce(
          (acc: d.OrderedSet<string>, op) => acc.add(op.shapeId),
          new d.OrderedSet<string>()
        )
        store.emit(dws.selectShapes(ids))
      },
      [groups]
    )

    const onTokenChange = useCallback(
      (token: any, resolvedValue: any, oldColor: ColorAttrs) => {
        const prevColors = prevColorsRef.current
        const newColor = dwta.valueToColor(resolvedValue)
        const color = d.withoutNils(d.dissoc(newColor, "name", "path"))
        const [colorOperations] = retrieveColorOperations(
          groups,
          oldColor,
          prevColors
        )
        prevColorsRef.current = [...prevColors, color]
        if (colorOperations) {
          store.emit(dwta.applyTokenOnSelected(colorOperations, token))
        }
      },
      [groups]
    )

    const libraryColorsExtract = !expandLibColor
      ? libraryColors.slice(0, 3)
      : libraryColors

    const colorsExtract = !expandColor ? colors.slice(0, 3) : colors

    const tokenColorExtract = !expandTokenColor
      ? tokenColors.slice(0, 3)
      : tokenColors

    return (
      <div className={(stl as any).css("element-set")}>
        <div className={(stl as any).css("element-title")}>
          <TitleBar
            collapsable={hasColors}
            collapsed={!open}
            onCollapsed={toggleContent}
            title={tr("workspace.options.selection-color")}
            className={(stl as any).cssCase(
              "title-spacing-selected-colors",
              !hasColors
            )}
          />
        </div>

        {open && (
          <div className={(stl as any).css("element-content")}>
            <div className={(stl as any).css("selected-color-group")}>
              {libraryColorsExtract.map((color, index) => (
                <ColorRow
                  key={index}
                  color={color}
                  index={index}
                  onDetach={(e: any) => onDetach(color)}
                  selectOnly={selectOnly}
                  onChange={(c: any) => onChange(color, c, false)}
                  onTokenChange={(t: any, v: any) =>
                    onTokenChange(t, v, color)
                  }
                  onOpen={onOpen}
                  origin="color-selection"
                  onClose={onClose}
                />
              ))}
              {!expandLibColor && libraryColors.length > 3 && (
                <button
                  className={(stl as any).css("more-colors-btn")}
                  onClick={() => setExpandLibColor(true)}
                >
                  {tr("workspace.options.more-lib-colors")}
                </button>
              )}
            </div>

            <div className={(stl as any).css("selected-color-group")}>
              {colorsExtract.map((color, index) => (
                <ColorRow
                  key={index}
                  color={color}
                  index={index}
                  selectOnly={selectOnly}
                  onChange={(c: any) => onChange(color, c, false)}
                  origin="color-selection"
                  onTokenChange={(t: any, v: any) =>
                    onTokenChange(t, v, color)
                  }
                  onOpen={onOpen}
                  onClose={onClose}
                />
              ))}
              {!expandColor && colors.length > 3 && (
                <button
                  className={(stl as any).css("more-colors-btn")}
                  onClick={() => setExpandColor(true)}
                >
                  {tr("workspace.options.more-colors")}
                </button>
              )}
            </div>

            <div className={(stl as any).css("selected-color-group")}>
              {tokenColorExtract.map((tokenColor, index) => {
                const color: ColorAttrs = {
                  color: tokenColor.color,
                  opacity: tokenColor.opacity,
                }
                return (
                  <ColorRow
                    key={index}
                    color={color}
                    index={index}
                    selectOnly={selectOnly}
                    onChange={(c: any) => onChange(tokenColor, c, false)}
                    origin="color-selection"
                    appliedToken={tokenColor.tokenName}
                    onDetachToken={onDetachToken}
                    onTokenChange={(t: any, v: any) =>
                      onTokenChange(t, v, tokenColor)
                    }
                    onOpen={onOpen}
                    onClose={onClose}
                  />
                )
              })}
              {!expandTokenColor && tokenColors.length > 3 && (
                <button
                  className={(stl as any).css("more-colors-btn")}
                  onClick={() => setExpandTokenColor(true)}
                >
                  {tr("workspace.options.more-token-colors")}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    )
  },
  (prevProps, nextProps) => {
    const prevShapes = prevProps.shapes
    const nextShapes = nextProps.shapes
    if (prevShapes === nextShapes) return true
    if (!prevShapes || !nextShapes) return false
    if (prevShapes.length !== nextShapes.length) return false
    return true
  }
)
