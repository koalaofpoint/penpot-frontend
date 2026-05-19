// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useMemo } from "react"
import * as d from "app/common/data"
import * as dm from "app/common/data/macros"
import * as cc from "app/common/types/color"
import * as ctl from "app/common/types/shape/layout"
import * as refs from "app/main/refs"
import { BlurMenu } from "app/main/ui/workspace/sidebar/options/menus/blur"
import { ConstraintsMenu } from "app/main/ui/workspace/sidebar/options/menus/constraints"
import { ExportsMenu } from "app/main/ui/workspace/sidebar/options/menus/exports"
import { FillMenu } from "app/main/ui/workspace/sidebar/options/menus/fill"
import { GridCell } from "app/main/ui/workspace/sidebar/options/menus/grid-cell"
import { LayoutContainerMenu } from "app/main/ui/workspace/sidebar/options/menus/layout-container"
import { LayoutItemMenu } from "app/main/ui/workspace/sidebar/options/menus/layout-item"
import { MeasuresMenu } from "app/main/ui/workspace/sidebar/options/menus/measures"
import { ShadowMenu } from "app/main/ui/workspace/sidebar/options/menus/shadow"
import { StrokeMenu } from "app/main/ui/workspace/sidebar/options/menus/stroke"
import { SvgAttrsMenu } from "app/main/ui/workspace/sidebar/options/menus/svg-attrs"
import * as str from "cuerdas/core"

const SVG_ELEMENTS = new Set([
  "svg",
  "g",
  "circle",
  "ellipse",
  "image",
  "line",
  "path",
  "polygon",
  "polyline",
  "rect",
  "symbol",
  "text",
  "textPath",
])

function parseColor(color: string | null | undefined): { color: any; opacity: number } | null {
  try {
    if (!color || color === "none") return null

    if (str.startsWith(color || "", "url")) {
      return { color: "multiple", opacity: "multiple" }
    }

    return { color: cc.parse(color), opacity: 1 }
  } catch (e) {
    console.error("Error parsing color", e)
    return null
  }
}

function getFillValues(shape: any) {
  const fillAttrs = ["fillColor", "fillOpacity", "fillColorGradient"]
  const fillValues: any = {}
  fillAttrs.forEach((attr) => {
    if (shape[attr] !== undefined) {
      fillValues[attr] = shape[attr]
    }
  })

  const contentFill = shape.content?.attrs?.fill
  const styleFill = shape.content?.attrs?.style?.fill
  const color = parseColor(contentFill || styleFill)

  if (Object.keys(fillValues).length === 0 && color) {
    return {
      fillColor: color.color,
      fillOpacity: color.opacity,
    }
  }

  return fillValues
}

function getStrokeValues(shape: any) {
  const strokeAttrs = [
    "strokeColor",
    "strokeOpacity",
    "strokeWidth",
    "strokeColorGradient",
    "strokeStyle",
    "strokeAlignment",
  ]
  const strokeValues: any = {}
  strokeAttrs.forEach((attr) => {
    if (shape[attr] !== undefined) {
      strokeValues[attr] = shape[attr]
    }
  })

  const contentStroke = shape.content?.attrs?.stroke
  const styleStroke = shape.content?.attrs?.style?.stroke
  const color = parseColor(contentStroke || styleStroke)

  const strokeColor = color?.color || cc.black
  const strokeOpacity = color?.opacity ?? 1

  const strokeStyleRaw =
    shape.content?.attrs?.["stroke-style"] ||
    shape.content?.attrs?.style?.["stroke-style"] ||
    (color ? "solid" : "none")
  const strokeStyle = typeof strokeStyleRaw === "string" ? strokeStyleRaw : "none"

  const strokeAlignment = "center"

  const strokeWidthRaw =
    shape.content?.attrs?.["stroke-width"] ||
    shape.content?.attrs?.style?.["stroke-width"] ||
    "1"
  const strokeWidth = d.parseInteger(strokeWidthRaw) || 1

  if (Object.keys(strokeValues).length === 0) {
    return {
      strokeColor,
      strokeOpacity,
      strokeStyle,
      strokeAlignment,
      strokeWidth,
    }
  }

  return strokeValues
}

interface SvgRawOptionsProps {
  shape: any
  fileId?: string
  pageId?: string
}

export const SvgRawOptions: React.FC<SvgRawOptionsProps> = ({
  shape,
  fileId,
  pageId,
}) => {
  const id = dm.getProp(shape, "id")
  const type = dm.getProp(shape, "type")
  const ids = useMemo(() => [id], [id])
  const shapes = useMemo(() => [shape], [shape])

  const appliedTokens = shape.appliedTokens

  const content = shape.content
  const tag = content?.tag

  const fillValues = useMemo(() => getFillValues(shape), [shape])
  const strokeValues = useMemo(() => getStrokeValues(shape), [shape])

  const measureValues = {
    x: shape.x,
    y: shape.y,
    width: shape.width,
    height: shape.height,
    rotation: shape.rotation,
  }

  const constraintValues = {
    constraints: shape.constraints,
  }

  const layoutItemValues = {
    layoutItem: shape.layoutItem,
  }

  const layoutContainerValues = {
    layoutContainer: shape.layoutContainer,
  }

  const isLayoutChildRef = useMemo(() => refs.isLayoutChild(ids), [ids])
  const isLayoutChild = isLayoutChildRef?.deref()

  const isFlexParentRef = useMemo(() => refs.flexLayoutChild(ids), [ids])
  const isFlexParent = isFlexParentRef?.deref()

  const isGridParentRef = useMemo(() => refs.gridLayoutChild(ids), [ids])
  const isGridParent = isGridParentRef?.deref()

  const isLayoutChildAbsolute = ctl.itemAbsolute(shape)

  const parentsByIdsRef = useMemo(() => refs.parentsByIds(ids), [ids])
  const parents = parentsByIdsRef?.deref()

  if (!SVG_ELEMENTS.has(tag)) {
    return null
  }

  return (
    <>
      <MeasuresMenu
        ids={ids}
        type={type}
        appliedTokens={appliedTokens}
        values={measureValues}
        shapes={shapes}
      />

      <LayoutContainerMenu
        type={type}
        ids={[shape.id]}
        values={layoutContainerValues}
        appliedTokens={appliedTokens}
        multiple={false}
      />

      {ids.length === 1 && isLayoutChild && isGridParent && (
        <GridCell.Options
          shape={parents[0]}
          cell={ctl.getCellByShapeId(parents[0], ids[0])}
        />
      )}

      {isLayoutChild && (
        <LayoutItemMenu
          ids={ids}
          type={type}
          values={layoutItemValues}
          isLayoutChild={true}
          isFlexParent={isFlexParent}
          isGridParent={isGridParent}
          appliedTokens={appliedTokens}
          shape={shape}
        />
      )}

      {!isLayoutChild || isLayoutChildAbsolute ? (
        <ConstraintsMenu ids={ids} values={constraintValues} />
      ) : null}

      <FillMenu
        ids={ids}
        type={type}
        values={fillValues}
        appliedTokens={appliedTokens}
      />

      <StrokeMenu
        ids={ids}
        type={type}
        values={strokeValues}
        appliedTokens={appliedTokens}
      />

      <ShadowMenu ids={ids} values={shape.shadow} />

      <BlurMenu ids={ids} values={{ blur: shape.blur }} />

      <SvgAttrsMenu ids={ids} values={{ svgAttrs: shape.svgAttrs }} />

      <ExportsMenu
        type={type}
        ids={ids}
        shapes={shapes}
        values={{
          width: shape.width,
          height: shape.height,
          exportType: shape.exportType,
          preserveAspectRatio: shape.preserveAspectRatio,
        }}
        pageId={pageId}
        fileId={fileId}
      />
    </>
  )
}
