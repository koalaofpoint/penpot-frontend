// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react"
import { useCallback, useState, useRef, useEffect } from "react"
import * as d from "app.common.data"
import * as dm from "app.common.data.macros"
import * as cfh from "app.common.files.helpers"
import * as gpt from "app.common.geom.point"
import * as gsh from "app.common.geom.shapes"
import * as gsl from "app.common.geom.shapes.flex-layout"
import * as gpo from "app.common.geom.shapes.points"
import * as ctm from "app.common.types.modifiers"
import * as ctl from "app.common.types.shape.layout"
import * as dsh from "app.main.data.helpers"
import * as dwm from "app.main.data.workspace.modifiers"
import * as dwt from "app.main.data.workspace.transforms"
import * as features from "app.main.features"
import * as refs from "app.main.refs"
import * as st from "app.main.store"
import * as cur from "app.main.ui.css-cursors"
import * as fcc from "app.main.ui.flex-controls.common"
import { pointToViewport } from "app.main.ui.workspace.viewport.viewport-ref"
import * as dom from "app.util.dom"

interface GapDisplayProps {
  frameId: string
  zoom: number
  gapType: "row-gap" | "column-gap"
  gap: any
  onPointerEnter?: (type: string, val: any) => void
  onPointerLeave?: () => void
  rectData: any
  hover?: boolean
  selected?: boolean
  mousePos?: any
  hoverValue?: number
  onMoveSelected?: (event: any) => void
  onContextMenu?: (event: any) => void
  onChange?: (modifiers: any) => void
}

export const GapDisplay: React.FC<GapDisplayProps> = ({
  frameId,
  zoom,
  gapType,
  gap,
  onPointerEnter,
  onPointerLeave,
  rectData,
  hover,
  selected,
  mousePos,
  hoverValue,
  onMoveSelected,
  onContextMenu,
  onChange,
}) => {
  const resizingRef = useRef<string | null>(null)
  const startRef = useRef<any>(null)
  const originalValueRef = useRef<number>(0)
  const lastPosRef = useRef<any>(null)

  const negate = rectData?.resizeNegat
  const axis = rectData?.resizeAxis

  const onPointerDown = useCallback(
    (event: React.PointerEvent) => {
      dom.capturePointer(event.nativeEvent)
      resizingRef.current = gapType
      startRef.current = dom.getClientPosition(event.nativeEvent)
      originalValueRef.current = rectData?.initialValue || 0
    },
    [gapType, rectData]
  )

  const calcModifiers = useCallback(
    (pos: any) => {
      const delta = gpt.toVec(startRef.current, pos)
      const adjustedDelta = negate ? gpt.negate(delta) : delta
      const axisDelta = axis === "x" ? adjustedDelta.x : adjustedDelta.y
      const val = Math.max(
        Math.floor(originalValueRef.current + axisDelta / zoom),
        0
      )

      const layoutGap = { ...gap, [gapType]: val }
      const modifiers = dwm.createModifTree(
        [frameId],
        ctm.changeProperty(ctm.empty(), "layout-gap", layoutGap)
      )

      return [val, modifiers]
    },
    [frameId, gapType, gap, negate, axis, zoom]
  )

  const onLostPointerCapture = useCallback(
    (event: React.PointerEvent) => {
      dom.releasePointer(event.nativeEvent)

      if (
        features.activeFeature(st.state, "render-wasm/v1") &&
        resizingRef.current === gapType
      ) {
        const [, modifiers] = calcModifiers(lastPosRef.current)
        st.emit!(
          dwm.applyWasmModifiers(modifiers),
          dwt.finishTransform()
        )
      }

      resizingRef.current = null
      startRef.current = null
      originalValueRef.current = 0

      if (!features.activeFeature(st.state, "render-wasm/v1")) {
        st.emit!(dwm.applyModifiers())
      }
    },
    [gapType, calcModifiers]
  )

  const onPointerMove = useCallback(
    (event: React.PointerEvent) => {
      const pos = dom.getClientPosition(event.nativeEvent)
      lastPosRef.current = pos

      if (mousePos) {
        // Not using mousePos state here
      }

      if (resizingRef.current === gapType) {
        const [val, modifiers] = calcModifiers(pos)

        if (features.activeFeature(st.state, "render-wasm/v1")) {
          st.emit!(dwm.setWasmModifiers(modifiers))
        } else {
          st.emit!(dwm.setModifiers(modifiers))
        }

        if (onChange) {
          onChange(modifiers)
        }
      }
    },
    [gapType, calcModifiers, onChange]
  )

  const handleX =
    axis === "x"
      ? 2 / zoom
      : Math.min((rectData?.width || 0) * 0.5, 20 / zoom)

  const handleY =
    axis === "y"
      ? 2 / zoom
      : Math.min((rectData?.height || 0) * 0.5, 30 / zoom)

  return (
    <g className="gap-rect">
      <rect
        className="info-area"
        x={rectData?.x}
        y={rectData?.y}
        width={rectData?.width}
        height={rectData?.height}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        onPointerDown={onMoveSelected}
        onContextMenu={onContextMenu}
        style={{
          fill:
            hover || selected ? fcc.distanceColor : "none",
          opacity: selected ? 0.5 : 0.25,
        }}
      />

      <rect
        className="handle"
        x={rectData?.x + ((rectData?.width || 0) - handleX) / 2}
        y={rectData?.y + ((rectData?.height || 0) - handleY) / 2}
        width={handleX}
        height={handleY}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerDown={onPointerDown}
        onLostPointerCapture={onLostPointerCapture}
        onPointerMove={onPointerMove}
        onContextMenu={onContextMenu}
        style={{
          fill: hover || selected ? fcc.distanceColor : "none",
          opacity: selected ? 0 : 1,
        }}
      />
    </g>
  )
}

interface GapRectsProps {
  frame: any
  zoom: number
  onMoveSelected?: (event: any) => void
  onContextMenu?: (event: any) => void
}

export const GapRects: React.FC<GapRectsProps> = ({
  frame,
  zoom,
  onMoveSelected,
  onContextMenu,
}) => {
  const frameId = frame?.id
  const savedDir = frame?.layoutFlexDir
  const isCol = savedDir === "column" || savedDir === "column-reverse"
  const flipX = frame?.flipX
  const flipY = frame?.flipY
  const pillWidth = fcc.flexDisplayPillWidth / zoom
  const pillHeight = fcc.flexDisplayPillHeight / zoom

  const workspaceModifiers = refs.workspaceModifiers.deref()
  const workspaceWasmModifiers = refs.workspaceWasmModifiers.deref()

  const gapSelected = refs.workspaceGapSelected.deref()

  const [hover, setHover] = useState<string | null>(null)
  const [hoverValue, setHoverValue] = useState(0)
  const [mousePos, setMousePos] = useState<any>(null)
  const [currentModifiers, setCurrentModifiers] = useState<any>(null)

  const modifiedFrame = ctm.applyStructureModifiers(
    frame,
    dm.getIn(currentModifiers, [frameId, "modifiers"])
  )

  const padding = modifiedFrame?.layoutPadding
  const gap = modifiedFrame?.layoutGap
  const { width, height, x1, y1 } = modifiedFrame?.selrect || {}

  const onPointerEnter = useCallback((type: string, val: any) => {
    setHover(type)
    setHoverValue(val)
  }, [])

  const onPointerLeave = useCallback(() => {
    setHover(null)
  }, [])

  const onChange = useCallback((modifiers: any) => {
    setCurrentModifiers(modifiers)
  }, [])

  const negate = {
    "column-gap": flipX ? true : false,
    "row-gap": flipY ? true : false,
  }

  const objects = dsh.lookupPageObjects(st.state)
  const children = cfh.getImmediateChildren(objects, frameId).filter(
    (shape: any) => !ctl.positionAbsolute(shape)
  )

  const childrenToDisplay = (() => {
    let filtered =
      savedDir === "row-reverse" || savedDir === "column-reverse"
        ? children.slice(0, -1)
        : children.slice(1)

    if (features.activeFeature(st.state, "render-wasm/v1")) {
      const modifiersMap = new Map(workspaceWasmModifiers)
      return filtered.map((shape: any) =>
        gsh.applyTransform(
          shape,
          modifiersMap.get(shape.id)
        )
      )
    }

    return filtered.map((shape: any) =>
      gsh.transformShape(shape, dm.getIn(workspaceModifiers, [shape.id, "modifiers"]))
    )
  })()

  const wrapBlocks = (() => {
    const blockChildren = children.map((shape: any) => [
      gpo.parentCoordsBounds(gpo.getPoints(shape), gpo.getPoints(frame)),
      shape,
    ])

    const bounds = new Map(
      Object.keys(objects).map((k) => [k, gsh.shapeToPoints(objects[k])])
    )

    const layoutData = gsl.calcLayoutData(
      frame,
      gpo.getPoints(frame),
      blockChildren,
      bounds
    )

    const layoutBounds = layoutData.layoutBounds

    const getX = (p: any) => gpo.startHv(layoutBounds, p)
    const getY = (p: any) => gpo.startVv(layoutBounds, p)

    return layoutData.layoutLines.map(
      (line: {
        startP: any
        lineWidth: number
        lineHeight: number
        layoutGapRow: number
        layoutGapCol: number
        numChildren: number
      }) => {
        let lineWidth = line.lineWidth
        let lineHeight = line.lineHeight

        if (isCol) {
          lineWidth =
            lineWidth +
            (line.numChildren - 1) * (line.layoutGapRow || 0)
        } else {
          lineHeight =
            lineHeight +
            (line.numChildren - 1) * (line.layoutGapCol || 0)
        }

        const endP = gpt.add(
          gpt.add(line.startP, getX(lineWidth)),
          getY(lineHeight)
        )

        return {
          x1: Math.min(line.startP.x, endP.x),
          y1: Math.min(line.startP.y, endP.y),
          x2: Math.max(line.startP.x, endP.x),
          y2: Math.max(line.startP.y, endP.y),
        }
      }
    )
  })()

  const blockContains = (x: number, y: number, block: any) => {
    if (isCol) {
      return x >= block.x1 && x <= block.x2
    }
    return y >= block.y1 && y <= block.y2
  }

  const getContainerBlock = (shape: any) => {
    const selrect = shape.selrect
    const x = (selrect.x1 + selrect.x2) / 2
    const y = (selrect.y1 + selrect.y2) / 2

    return wrapBlocks.find((block) => blockContains(x, y, block))
  }

  const createCgdd = (shape: any) => {
    const block = getContainerBlock(shape)
    if (!block) return null

    const x = flipX
      ? shape.selrect.x1 - (shape.layoutItemMargin?.m2 || 0) - (gap?.["column-gap"] || 0)
      : shape.selrect.x2 + (shape.layoutItemMargin?.m2 || 0)
    const y = block.y1
    const h = block.y2 - block.y1

    return {
      x,
      y,
      height: h,
      width: gap?.["column-gap"] || 0,
      initialValue: gap?.["column-gap"] || 0,
      resizeType: "left",
      resizeAxis: "x",
      resizeNegat: negate["column-gap"],
      gapType: isCol ? "row-gap" : "column-gap",
    }
  }

  const createCgddBlock = (block: any) => {
    const x = flipX ? block.x1 - (gap?.["column-gap"] || 0) : block.x2
    const y = flipY ? y1 + (padding?.p3 || 0) : y1 + (padding?.p1 || 0)
    const h = height - ((padding?.p1 || 0) + (padding?.p3 || 0))

    return {
      x,
      y,
      width: gap?.["column-gap"] || 0,
      height: h,
      initialValue: gap?.["column-gap"] || 0,
      resizeType: "left",
      resizeAxis: "x",
      resizeNegat: negate["column-gap"],
      gapType: isCol ? "column-gap" : "row-gap",
    }
  }

  const createRgdd = (shape: any) => {
    const block = getContainerBlock(shape)
    if (!block) return null

    const x = block.x1
    const y = flipY
      ? shape.selrect.y1 -
        (shape.layoutItemMargin?.m3 || 0) -
        (gap?.["row-gap"] || 0)
      : shape.selrect.y2 + (shape.layoutItemMargin?.m3 || 0)
    const w = block.x2 - block.x1

    return {
      x,
      y,
      width: w,
      height: gap?.["row-gap"] || 0,
      initialValue: gap?.["row-gap"] || 0,
      resizeType: "bottom",
      resizeAxis: "y",
      resizeNegat: negate["row-gap"],
      gapType: isCol ? "row-gap" : "column-gap",
    }
  }

  const createRgddBlock = (block: any) => {
    const x = flipX ? x1 + (padding?.p2 || 0) : x1 + (padding?.p4 || 0)
    const y = flipY ? block.y1 - (gap?.["row-gap"] || 0) : block.y2
    const w = width - ((padding?.p2 || 0) + (padding?.p4 || 0))

    return {
      x,
      y,
      width: w,
      height: gap?.["row-gap"] || 0,
      initialValue: gap?.["row-gap"] || 0,
      resizeType: "bottom",
      resizeAxis: "y",
      resizeNegat: negate["row-gap"],
      gapType: isCol ? "column-gap" : "row-gap",
    }
  }

  const displayBlocks = isCol
    ? wrapBlocks.slice(0, -1).map(createCgddBlock)
    : wrapBlocks.slice(0, -1).map(createRgddBlock)

  const displayChildren = isCol
    ? childrenToDisplay.map(createRgdd).filter(Boolean)
    : childrenToDisplay.map(createCgdd).filter(Boolean)

  return (
    <g className="gaps" pointerEvents="visible">
      {[...displayBlocks, ...displayChildren].map((displayItem, index) => {
        if (!displayItem) return null
        const gapType = displayItem.gapType

        return (
          <GapDisplay
            key={`${frameId}-${index}`}
            frameId={frameId}
            zoom={zoom}
            gapType={gapType}
            gap={gap}
            onPointerEnter={
              onPointerEnter
                ? (type, val) =>
                    onPointerEnter(gapType, gap?.[gapType] || 0)
                : undefined
            }
            onPointerLeave={onPointerLeave}
            onMoveSelected={onMoveSelected}
            onContextMenu={onContextMenu}
            onChange={onChange}
            rectData={displayItem}
            hover={hover === gapType}
            selected={gapSelected === gapType}
            mousePos={mousePos}
            hoverValue={hoverValue}
          />
        )
      })}

      {hover && mousePos && (
        <fcc.FlexDisplayPill
          height={pillHeight}
          width={pillWidth}
          fontSize={fcc.fontSize / zoom}
          borderRadius={fcc.flexDisplayPillBorderRadius / zoom}
          color={fcc.distanceColor}
          x={mousePos.x}
          y={mousePos.y - pillWidth}
          value={hoverValue}
        />
      )}
    </g>
  )
}

interface GapControlProps {
  frame: any
  zoom: number
  onMoveSelected?: (event: any) => void
  onContextMenu?: (event: any) => void
}

export const GapControl: React.FC<GapControlProps> = ({
  frame,
  zoom,
  onMoveSelected,
  onContextMenu,
}) => {
  if (!frame) return null

  return (
    <g className="measurement-gaps" pointerEvents="none">
      <g className="hover-shapes">
        <GapRects
          frame={frame}
          zoom={zoom}
          onMoveSelected={onMoveSelected}
          onContextMenu={onContextMenu}
        />
      </g>
    </g>
  )
}
