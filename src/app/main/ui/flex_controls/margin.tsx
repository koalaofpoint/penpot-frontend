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

interface MarginDisplayProps {
  shapeId: string
  zoom: number
  hoverAll?: boolean
  hoverV?: boolean
  hoverH?: boolean
  marginNum: string
  margin: any
  onPointerEnter: (type: string, value: number) => void
  onPointerLeave: () => void
  onChange: (modifiers: any) => void
  rectData: any
  hover?: boolean
  selected?: boolean
  mousePos: React.MutableRefObject<any>
  hoverValue: React.MutableRefObject<number>
}

const MarginDisplay: React.FC<MarginDisplayProps> = (props) => {
  const {
    shapeId,
    zoom,
    hoverAll,
    hoverV,
    hoverH,
    marginNum,
    margin,
    onPointerEnter,
    onPointerLeave,
    onChange,
    rectData,
    hover,
    selected,
    mousePos,
    hoverValue,
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

      let layoutItemMargin: any
      if (hoverAll) {
        layoutItemMargin = {...margin, m1: val, m2: val, m3: val, m4: val}
      } else if (hoverV) {
        layoutItemMargin = {...margin, m1: val, m3: val}
      } else if (hoverH) {
        layoutItemMargin = {...margin, m2: val, m4: val}
      } else {
        layoutItemMargin = {...margin, [marginNum]: val}
      }

      const layoutItemMarginType =
        margin.m1 === margin.m2 && margin.m2 === margin.m3 && margin.m3 === margin.m4
          ? "simple"
          : "multiple"

      return [
        val,
        DWM.createModifTree(
          [shapeId],
          CTM.empty()
            |> CTM.changeProperty(":layout-item-margin", layoutItemMargin)
            |> CTM.changeProperty(":layout-item-margin-type", layoutItemMarginType)
        ),
      ]
    },
    [shapeId, marginNum, margin, hoverAll, hoverV, hoverH, negate, axis, zoom]
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

  const cursorClass = (hover || selected)
    ? (rectData?.["resize-axis"] === "x"
        ? CUR.getDynamic("resize-ew", 0)
        : CUR.getDynamic("resize-ew", 90))
    : ""

  return (
    <rect
      className={cursorClass}
      x={rectData?.x}
      y={rectData?.y}
      width={Math.max(0, rectData?.width || 0)}
      height={Math.max(0, rectData?.height || 0)}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onPointerDown={onPointerDown}
      onLostPointerCapture={onLostPointerCapture}
      onPointerMove={onPointerMove}
      style={{
        fill: (hover || selected) ? FCC.warningColor : "none",
        opacity: selected ? 0.5 : 0.25,
      }}
    />
  )
}

interface MarginRectsProps {
  shape: any
  frame: any
  zoom: number
  alt?: boolean
  shift?: boolean
}

const MarginRects: React.FC<MarginRectsProps> = (props) => {
  const {shape, frame, zoom, alt, shift} = props

  const shapeId = shape?.["id"]
  const pillWidth = FCC.flexDisplayPillWidth / zoom
  const pillHeight = FCC.flexDisplayPillHeight / zoom
  const marginsSelected = refs.workspaceMarginsSelected

  const [currentModifiers, setCurrentModifiers] = React.useState<any>(null)

  const shapeWithModifiers = CTM.applyStructureModifiers(shape, DM.getIn(currentModifiers, [shapeId, "modifiers"]))

  const [hoverValue, setHoverValue] = React.useState(0)
  const [mousePos, setMousePos] = React.useState<any>(null)
  const [hover, setHover] = React.useState<any>(null)

  const hoverAll = hover != null && alt
  const hoverV = (hover === "m1" || hover === "m3") && shift
  const hoverH = (hover === "m2" || hover === "m4") && shift

  const margin = shapeWithModifiers?.["layout-item-margin"]
  const {width, height, x1, x2, y1, y2} = shapeWithModifiers?.["selrect"] || {}

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
      ((value === "m1" || value === "m3") && hoverV) ||
      ((value === "m2" || value === "m4") && hoverH) ||
      hover === value,
    [hoverAll, hoverV, hoverH, hover]
  )

  const marginDisplayData: Record<string, any> = {
    m1: {
      key: `${shapeId}-m1`,
      x: x1,
      y: frame?.["flip-y"] ? y2 : y1 - margin?.m1,
      width,
      height: margin?.m1,
      initialValue: margin?.m1,
      resizeType: "top",
      resizeAxis: "y",
      resizeNegate: frame?.["flip-y"],
    },
    m2: {
      key: `${shapeId}-m2`,
      x: frame?.["flip-x"] ? x1 - margin?.m2 : x2,
      y: y1,
      width: margin?.m2,
      height,
      initialValue: margin?.m2,
      resizeType: "left",
      resizeAxis: "x",
      resizeNegate: frame?.["flip-x"],
    },
    m3: {
      key: `${shapeId}-m3`,
      x: x1,
      y: frame?.["flip-y"] ? y1 - margin?.m3 : y2,
      width,
      height: margin?.m3,
      initialValue: margin?.m3,
      resizeType: "top",
      resizeAxis: "y",
      resizeNegate: frame?.["flip-y"],
    },
    m4: {
      key: `${shapeId}-m4`,
      x: frame?.["flip-x"] ? x2 : x1 - margin?.m4,
      y: y1,
      width: margin?.m4,
      height,
      initialValue: margin?.m4,
      resizeType: "left",
      resizeAxis: "x",
      resizeNegate: frame?.["flip-x"],
    },
  }

  const hoverValueRef = React.useRef(hoverValue)
  hoverValueRef.current = hoverValue

  const mousePosRef = React.useRef(mousePos)
  mousePosRef.current = mousePos

  return (
    <g className="margins" pointerEvents="visible">
      {Object.entries(marginDisplayData).map(([marginNum, rectData]) => (
        <MarginDisplay
          key={rectData.key}
          shapeId={shapeId}
          zoom={zoom}
          hoverAll={hoverAll}
          hoverV={hoverV}
          hoverH={hoverH}
          marginNum={marginNum}
          margin={margin}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          onChange={onChange}
          rectData={rectData}
          hover={isHover(marginNum)}
          selected={marginsSelected?.[marginNum]}
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
          color={FCC.warningColor}
          x={mousePos?.x}
          y={mousePos?.y - pillWidth}
          value={hoverValue}
        />
      )}
    </g>
  )
}

interface MarginControlProps {
  shape: any
  parent: any
  zoom: number
  alt?: boolean
  shift?: boolean
}

export const MarginControl: React.FC<MarginControlProps> = (props) => {
  const {shape, parent, zoom, alt, shift} = props

  if (!shape) return null

  return (
    <g className="measurement-gaps" pointerEvents="none">
      <g className="hover-shapes">
        <MarginRects
          shape={shape}
          frame={parent}
          zoom={zoom}
          alt={alt}
          shift={shift}
        />
      </g>
    </g>
  )
}
