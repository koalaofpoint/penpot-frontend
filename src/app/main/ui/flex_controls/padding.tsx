// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react"
import * as DM from "app/common/data/macros"
import * as GPT from "app/common/geom/point"
import * as CTM from "app/common/types/modifiers"
import * as DWM from "app/main/data/workspace/modifiers"
import * as DWT from "app/main/data/workspace/transforms"
import * as Features from "app/main/features"
import {refs} from "app/main/refs"
import {store} from "app/main/store"
import * as CUR from "app/main/ui/css-cursors"
import * as FCC from "app/main/ui/flex-controls/common"
import {pointToViewport} from "app/main/ui/workspace/viewport/viewport-ref"
import * as DOM from "app/util/dom"

interface PaddingDisplayProps {
  frameId: string
  zoom: number
  hoverAll?: boolean
  hoverV?: boolean
  hoverH?: boolean
  paddingNum: string
  padding: any
  onPointerEnter: (type: string, value: number) => void
  onPointerLeave: () => void
  rectData: any
  hover?: boolean
  selected?: boolean
  mousePos: React.MutableRefObject<any>
  hoverValue: React.MutableRefObject<number>
  onMoveSelected: (event: any) => void
  onContextMenu: (event: any) => void
  onChange: (modifiers: any) => void
}

const PaddingDisplay: React.FC<PaddingDisplayProps> = (props) => {
  const {
    frameId,
    zoom,
    hoverAll,
    hoverV,
    hoverH,
    paddingNum,
    padding,
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
  } = props

  const resizing = React.useRef(false)
  const start = React.useRef<any>(null)
  const originalValue = React.useRef(0)
  const lastPos = React.useRef<any>(null)

  const negate = rectData?.["resize-negate?"] === true
  const axis = rectData?.["resize-axis"]

  const onPointerDown = React.useCallback(
    (event: any) => {
      DOM.capturePointer(event)
      resizing.current = true
      start.current = DOM.getClientPosition(event)
      originalValue.current = rectData?.["initial-value"] || 0
    },
    [rectData]
  )

  const calcModifiers = React.useCallback(
    (pos: any) => {
      const delta = GPT.toVec(start.current, pos)
      const negatedDelta = negate ? GPT.negate(delta) : delta
      const axisDelta = negatedDelta[axis]

      const val = Math.max(Math.round(originalValue.current + axisDelta / zoom), 0)

      let layoutPadding: any
      if (hoverAll) {
        layoutPadding = {...padding, p1: val, p2: val, p3: val, p4: val}
      } else if (hoverV) {
        layoutPadding = {...padding, p1: val, p3: val}
      } else if (hoverH) {
        layoutPadding = {...padding, p2: val, p4: val}
      } else {
        layoutPadding = {...padding, [paddingNum]: val}
      }

      const layoutPaddingType =
        padding.p1 === padding.p2 && padding.p2 === padding.p3 && padding.p3 === padding.p4
          ? "simple"
          : "multiple"

      return [
        val,
        DWM.createModifTree(
          [frameId],
          CTM.empty()
            |> CTM.changeProperty(":layout-padding", layoutPadding)
            |> CTM.changeProperty(":layout-padding-type", layoutPaddingType)
        ),
      ]
    },
    [frameId, paddingNum, padding, hoverAll, hoverV, hoverH, negate, axis, zoom]
  )

  const onLostPointerCapture = React.useCallback(
    (event: any) => {
      DOM.releasePointer(event)

      if (Features.activeFeature(store.getState(), "render-wasm/v1")) {
        const [, modifiers] = calcModifiers(lastPos.current)
        store.emit(DWM.applyWasmModifiers(modifiers), DWT.finishTransform())
      }

      resizing.current = false
      start.current = null
      originalValue.current = 0

      if (!Features.activeFeature(store.getState(), "render-wasm/v1")) {
        store.emit(DWM.applyModifiers())
      }
    },
    [calcModifiers]
  )

  const onPointerMove = React.useCallback(
    (event: any) => {
      const pos = DOM.getClientPosition(event)
      mousePos.current = pointToViewport(pos)
      lastPos.current = pos

      if (resizing.current) {
        const [val, modifiers] = calcModifiers(pos)
        hoverValue.current = val

        if (Features.activeFeature(store.getState(), "render-wasm/v1")) {
          store.emit(DWM.setWasmModifiers(modifiers))
        } else {
          store.emit(DWM.setModifiers(modifiers))
        }

        if (onChange) {
          onChange(modifiers)
        }
      }
    },
    [calcModifiers, onChange, mousePos, hoverValue]
  )

  const handleWidth = axis === "x"
    ? 2 / zoom
    : Math.min((rectData?.width || 0) * 0.5, 20 / zoom)

  const handleHeight = axis === "y"
    ? 2 / zoom
    : Math.min((rectData?.height || 0) * 0.5, 30 / zoom)

  const cursorClass = (hover || selected)
    ? (rectData?.["resize-axis"] === "x"
        ? CUR.getDynamic("resize-ew", 0)
        : CUR.getDynamic("resize-ew", 90))
    : ""

  return (
    <g className="padding-rect">
      <rect
        className="info-area"
        x={rectData?.x}
        y={rectData?.y}
        width={Math.max(0, rectData?.width || 0)}
        height={Math.max(0, rectData?.height || 0)}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        onPointerDown={onMoveSelected}
        onContextMenu={onContextMenu}
        style={{
          fill: (hover || selected) ? FCC.distanceColor : "none",
          opacity: selected ? 0.5 : 0.25,
        }}
      />

      <rect
        className={cursorClass}
        x={(rectData?.x || 0) + ((rectData?.width || 0) - handleWidth) / 2}
        y={(rectData?.y || 0) + ((rectData?.height || 0) - handleHeight) / 2}
        width={handleWidth}
        height={handleHeight}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerDown={onPointerDown}
        onLostPointerCapture={onLostPointerCapture}
        onPointerMove={onPointerMove}
        onContextMenu={onContextMenu}
        style={{
          fill: (hover || selected) ? FCC.distanceColor : "none",
          opacity: selected ? 0 : 1,
        }}
      />
    </g>
  )
}

interface PaddingRectsProps {
  frame: any
  zoom: number
  alt?: boolean
  shift?: boolean
  onMoveSelected: (event: any) => void
  onContextMenu: (event: any) => void
}

const PaddingRects: React.FC<PaddingRectsProps> = (props) => {
  const {frame, zoom, alt, shift, onMoveSelected, onContextMenu} = props

  const frameId = frame?.["id"]
  const paddingsSelected = refs.workspacePaddingsSelected

  const [currentModifiers, setCurrentModifiers] = React.useState<any>(null)

  const frameWithModifiers = CTM.applyStructureModifiers(frame, DM.getIn(currentModifiers, [frameId, "modifiers"]))

  const [hoverValue, setHoverValue] = React.useState(0)
  const [mousePos, setMousePos] = React.useState<any>(null)
  const [hover, setHover] = React.useState<any>(null)

  const hoverAll = hover != null && alt
  const hoverV = (hover === "p1" || hover === "p3") && shift
  const hoverH = (hover === "p2" || hover === "p4") && shift

  const padding = frameWithModifiers?.["layout-padding"]
  const {width, height, x1, x2, y1, y2} = frameWithModifiers?.["selrect"] || {}
  const pillWidth = FCC.flexDisplayPillWidth / zoom
  const pillHeight = FCC.flexDisplayPillHeight / zoom

  const negate = {
    p1: frame?.["flip-y"] === true,
    p2: frame?.["flip-x"] === true,
    p3: frame?.["flip-y"] === true,
    p4: frame?.["flip-x"] === true,
  }

  const finalNegate = (() => {
    let result = {...negate}
    if (frame?.["layout-item-h-sizing"] !== "auto") {
      result.p2 = !result.p2
    }
    if (frame?.["layout-item-v-sizing"] !== "auto") {
      result.p3 = !result.p3
    }
    return result
  })()

  const paddingRectData: Record<string, any> = {
    p1: {
      key: `${frameId}-p1`,
      x: x1,
      y: frame?.["flip-y"] ? y2 - padding?.p1 : y1,
      width,
      height: padding?.p1,
      initialValue: padding?.p1,
      resizeType: frame?.["flip-y"] ? "bottom" : "top",
      resizeAxis: "y",
      resizeNegate: finalNegate.p1,
    },
    p2: {
      key: `${frameId}-p2`,
      x: frame?.["flip-x"] ? x1 : x2 - padding?.p2,
      y: y1,
      width: padding?.p2,
      height,
      initialValue: padding?.p2,
      resizeType: "left",
      resizeAxis: "x",
      resizeNegate: finalNegate.p2,
    },
    p3: {
      key: `${frameId}-p3`,
      x: x1,
      y: frame?.["flip-y"] ? y1 : y2 - padding?.p3,
      width,
      height: padding?.p3,
      initialValue: padding?.p3,
      resizeType: "bottom",
      resizeAxis: "y",
      resizeNegate: finalNegate.p3,
    },
    p4: {
      key: `${frameId}-p4`,
      x: frame?.["flip-x"] ? x2 - padding?.p4 : x1,
      y: y1,
      width: padding?.p4,
      height,
      initialValue: padding?.p4,
      resizeType: frame?.["flip-x"] ? "right" : "left",
      resizeAxis: "x",
      resizeNegate: finalNegate.p4,
    },
  }

  const onPointerEnter = React.useCallback(
    (hoverType: string, val: number) => {
      setHover(hoverType)
      setHoverValue(val)
    },
    []
  )

  const onPointerLeave = React.useCallback(() => {
    setHover(null)
  }, [])

  const onChange = React.useCallback(
    (modifiers: any) => {
      setCurrentModifiers(modifiers)
    },
    []
  )

  const isHover = React.useCallback(
    (value: string) =>
      hoverAll ||
      ((value === "p1" || value === "p3") && hoverV) ||
      ((value === "p2" || value === "p4") && hoverH) ||
      hover === value,
    [hoverAll, hoverV, hoverH, hover]
  )

  const hoverValueRef = React.useRef(hoverValue)
  hoverValueRef.current = hoverValue

  const mousePosRef = React.useRef(mousePos)
  mousePosRef.current = mousePos

  return (
    <g className="paddings" pointerEvents="visible">
      {Object.entries(paddingRectData).map(([paddingNum, rectData]) => (
        <PaddingDisplay
          key={rectData.key}
          frameId={frameId}
          zoom={zoom}
          hoverAll={hoverAll}
          hoverV={hoverV}
          hoverH={hoverH}
          paddingNum={paddingNum}
          padding={padding}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          onMoveSelected={onMoveSelected}
          onContextMenu={onContextMenu}
          onChange={onChange}
          rectData={rectData}
          hover={isHover(paddingNum)}
          selected={paddingsSelected?.[paddingNum]}
          mousePos={mousePosRef}
          hoverValue={hoverValueRef}
        />
      ))}

      {hover && (
        <FCC.FlexDisplayPill
          height={pillHeight}
          width={pillWidth}
          fontSize={FCC.fontSize / zoom}
          borderRadius={FCC.flexDisplayPillBorderRadius / zoom}
          color={FCC.distanceColor}
          x={mousePos?.x}
          y={mousePos?.y - pillWidth}
          value={hoverValue}
        />
      )}
    </g>
  )
}

interface PaddingControlProps {
  frame: any
  zoom: number
  alt?: boolean
  shift?: boolean
  onMoveSelected: (event: any) => void
  onContextMenu: (event: any) => void
}

export const PaddingControl: React.FC<PaddingControlProps> = (props) => {
  const {frame, zoom, alt, shift, onMoveSelected, onContextMenu} = props

  if (!frame) return null

  return (
    <g className="measurement-gaps" pointerEvents="none">
      <g className="hover-shapes">
        <PaddingRects
          frame={frame}
          zoom={zoom}
          alt={alt}
          shift={shift}
          onMoveSelected={onMoveSelected}
          onContextMenu={onContextMenu}
        />
      </g>
    </g>
  )
}
