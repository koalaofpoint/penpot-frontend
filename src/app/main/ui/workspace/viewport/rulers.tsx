// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as D from 'app/common/data'
import * as DM from 'app/common/data/macros'
import * as GSH from 'app/common/geom/shapes'
import * as MTH from 'app/common/math'
import { formatNumber } from 'app/main/ui/formats'
import * as Hooks from 'app/main/ui/hooks'
import * as OBJ from 'app/util/object'
import * as MF from 'rumext.v2'
import React from 'react'

const RULERS_POS = 15
const RULERS_SIZE = 4
const RULERS_WIDTH = 1
const RULER_AREA_SIZE = 22
const RULER_AREA_HALF_SIZE = RULER_AREA_SIZE / 2
const RULERS_BACKGROUND = 'var(--panel-background-color)'
const SELECTION_AREA_COLOR = 'var(--color-accent-tertiary)'
const SELECTION_AREA_OPACITY = 0.3
const OVER_NUMBER_SIZE = 100
const OVER_NUMBER_OPACITY = 0.8
const OVER_NUMBER_PERCENT = 0.75

const FONT_SIZE = 12
const FONT_FAMILY = 'worksans'
const FONT_COLOR = 'var(--layer-row-foreground-color)'
const CANVAS_BORDER_RADIUS = 12

function calculateStepSize(zoom: number): number {
  if (zoom > 0 && zoom < 0.008) return 10000
  if (zoom >= 0.008 && zoom < 0.015) return 5000
  if (zoom >= 0.015 && zoom < 0.04) return 2500
  if (zoom >= 0.04 && zoom < 0.07) return 1000
  if (zoom >= 0.07 && zoom < 0.2) return 500
  if (zoom >= 0.2 && zoom < 0.5) return 250
  if (zoom >= 0.5 && zoom < 1) return 100
  if (zoom >= 1 && zoom <= 2) return 50
  if (zoom > 2 && zoom < 4) return 25
  if (zoom >= 4 && zoom < 6) return 10
  if (zoom >= 6 && zoom < 15) return 5
  if (zoom >= 15 && zoom < 25) return 2
  if (zoom >= 25) return 1
  return 1
}

function getClipArea(vbox: any, zoomInverse: number, axis: 'x' | 'y') {
  if (axis === 'x') {
    const x = (vbox as any).x + 25 * zoomInverse
    const y = (vbox as any).y
    const width = (vbox as any).width - 21 * zoomInverse
    const height = 25 * zoomInverse
    return { x, y, width, height }
  } else {
    const x = (vbox as any).x
    const y = (vbox as any).y + 25 * zoomInverse
    const width = 25 * zoomInverse
    const height = (vbox as any).height - 21 * zoomInverse
    return { x, y, width, height }
  }
}

function getBackgroundArea(vbox: any, zoomInverse: number, axis: 'x' | 'y') {
  if (axis === 'x') {
    return {
      x: (vbox as any).x,
      y: (vbox as any).y,
      width: (vbox as any).width,
      height: RULER_AREA_SIZE * zoomInverse,
    }
  } else {
    return {
      x: (vbox as any).x,
      y: (vbox as any).y + RULER_AREA_SIZE * zoomInverse,
      width: RULER_AREA_SIZE * zoomInverse,
      height: (vbox as any).height - 21 * zoomInverse,
    }
  }
}

function getRulerParams(vbox: any, axis: 'x' | 'y') {
  if (axis === 'x') {
    return { start: (vbox as any).x, end: (vbox as any).x + (vbox as any).width }
  } else {
    return { start: (vbox as any).y, end: (vbox as any).y + (vbox as any).height }
  }
}

function getRulerAxis(val: number, vbox: any, zoomInverse: number, axis: 'x' | 'y') {
  const rulersPos = RULERS_POS * zoomInverse
  const rulersSize = RULERS_SIZE * zoomInverse

  if (axis === 'x') {
    return {
      textX: val,
      textY: (vbox as any).y + rulersPos - zoomInverse,
      lineX1: val,
      lineY1: (vbox as any).y + rulersPos + 2 * zoomInverse,
      lineX2: val,
      lineY2: (vbox as any).y + rulersPos + 2 * zoomInverse + rulersSize,
    }
  } else {
    return {
      textX: (vbox as any).x + rulersPos - zoomInverse,
      textY: val,
      lineX1: (vbox as any).x + rulersPos + 2 * zoomInverse,
      lineY1: val,
      lineX2: (vbox as any).x + rulersPos + 2 * zoomInverse + rulersSize,
      lineY2: val,
    }
  }
}

function rulersOutsidePath(x1: number, y1: number, x2: number, y2: number) {
  return `M${x1},${y1}L${x2},${y1}L${x2},${y2}L${x1},${y2}Z`
}

function rulersInsidePath(x1: number, y1: number, x2: number, y2: number, br: number, bw: number) {
  return (
    `M${x1 + bw},${y1 + bw + br}` +
    `Q${x1 + bw},${y1 + bw},${x1 + bw + br},${y1 + bw}` +
    `L${x2 - br},${y1 + bw}` +
    `Q${x2},${y1 + bw},${x2},${y1 + bw + br}` +
    `L${x2},${y2 - br}` +
    `Q${x2},${y2},${x2 - br},${y2}` +
    `L${x1 + bw + br},${y2}` +
    `Q${x1 + bw},${y2},${x1 + bw},${y2 - br}` +
    `Z`
  )
}

interface RulersTextProps {
  vbox: any
  step: number
  offset: number
  axis: 'x' | 'y'
  zoomInverse: number
}

const RulersText: React.FC<RulersTextProps> = ({
  vbox,
  step,
  offset,
  axis,
  zoomInverse,
}) => {
  const clipId = `clip-ruler-${D.name(axis)}`
  const { start, end } = getRulerParams(vbox, axis)

  let minv = Math.max(start, -100000)
  minv = MTH.ceil(minv / step) * step
  let maxv = Math.min(end, 100000)
  maxv = MTH.floor(maxv / step) * step

  minv += offset % step
  maxv += offset % step

  const rulersWidthVal = RULERS_WIDTH * zoomInverse

  return (
    <g className='rulers' clipPath={`url(#${clipId})`}>
      <defs>
        <clipPath id={clipId}>
          <rect {...getClipArea(vbox, zoomInverse, axis)} />
        </clipPath>
      </defs>

      {D.range(minv, maxv + step, step).map((stepVal: number) => {
        const { textX, textY, lineX1, lineY1, lineX2, lineY2 } = getRulerAxis(
          stepVal,
          vbox,
          zoomInverse,
          axis
        )

        return (
          <React.Fragment key={`text-${D.name(axis)}-${stepVal}`}>
            <text
              x={textX}
              y={textY}
              textAnchor='middle'
              transform={axis === 'y' ? `rotate(-90 ${textX},${textY})` : undefined}
              style={{
                fontSize: FONT_SIZE * zoomInverse,
                fontFamily: FONT_FAMILY,
                fill: FONT_COLOR,
              }}
            >
              {formatNumber(stepVal - offset)}
            </text>
            <line
              key={`line-${D.name(axis)}-${stepVal}`}
              x1={lineX1}
              y1={lineY1}
              x2={lineX2}
              y2={lineY2}
              style={{ stroke: FONT_COLOR, strokeWidth: rulersWidthVal }}
            />
          </React.Fragment>
        )
      })}
    </g>
  )
}

interface ViewportFrameProps {
  showRulers?: boolean
  zoom: number
  zoomInverse: number
  vbox: any
  offsetX: number
  offsetY: number
}

const ViewportFrame: React.FC<ViewportFrameProps> = ({
  showRulers = true,
  zoom,
  zoomInverse,
  vbox,
  offsetX,
  offsetY,
}) => {
  const { width, height, x: x1, y: y1 } = vbox
  const x2 = x1 + width
  const y2 = y1 + height
  const bw = showRulers ? RULER_AREA_SIZE * zoomInverse : 0
  const br = CANVAS_BORDER_RADIUS / zoom
  const bs = 4 * zoomInverse

  return (
    <>
      <g className='viewport-frame-background'>
        <rect
          x={0}
          y={0}
          width={1}
          height={1}
          fill='none'
          strokeWidth={0.1}
          stroke='rgba(0,0,0,0)'
        />
        <path
          d={rulersInsidePath(x1, y1, x2, y2, br, bw)}
          fill='none'
          strokeWidth={bs}
          stroke='var(--panel-border-color)'
        />
        <path
          d={rulersOutsidePath(x1, y1, x2, y2) + rulersInsidePath(x1, y1, x2, y2, br, bw)}
          fillRule='evenodd'
          fill={RULERS_BACKGROUND}
        />
      </g>

      {showRulers && (
        <g className='viewport-frame-rulers'>
          <RulersText
            vbox={vbox}
            offset={offsetX}
            step={calculateStepSize(zoom)}
            zoomInverse={zoomInverse}
            axis='x'
          />
          <RulersText
            vbox={vbox}
            offset={offsetY}
            step={calculateStepSize(zoom)}
            zoomInverse={zoomInverse}
            axis='y'
          />
        </g>
      )}
    </>
  )
}

interface SelectionAreaProps {
  vbox: any
  zoomInverse: number
  selectionRect: any
  offsetX: number
  offsetY: number
}

const SelectionArea: React.FC<SelectionAreaProps> = ({
  vbox,
  zoomInverse,
  selectionRect,
  offsetX,
  offsetY,
}) => {
  return (
    <g className='selection-area'>
      <defs>
        <linearGradient id='selection-gradient-start'>
          <stop offset='0%' stopColor={RULERS_BACKGROUND} stopOpacity={0} />
          <stop offset='40%' stopColor={RULERS_BACKGROUND} stopOpacity={1} />
          <stop offset='100%' stopColor={RULERS_BACKGROUND} stopOpacity={1} />
        </linearGradient>
        <linearGradient id='selection-gradient-end'>
          <stop offset='0%' stopColor={RULERS_BACKGROUND} stopOpacity={1} />
          <stop offset='60%' stopColor={RULERS_BACKGROUND} stopOpacity={1} />
          <stop offset='100%' stopColor={RULERS_BACKGROUND} stopOpacity={0} />
        </linearGradient>
      </defs>

      <g>
        <rect
          x={(selectionRect as any).x - OVER_NUMBER_SIZE * OVER_NUMBER_PERCENT * zoomInverse}
          y={(vbox as any).y}
          width={OVER_NUMBER_SIZE * zoomInverse}
          height={RULER_AREA_SIZE * zoomInverse}
          fill="url('#selection-gradient-start')"
        />

        <rect
          x={(selectionRect as any).x2 - OVER_NUMBER_SIZE * (1 - OVER_NUMBER_PERCENT)}
          y={(vbox as any).y}
          width={OVER_NUMBER_SIZE * zoomInverse}
          height={RULER_AREA_SIZE * zoomInverse}
          fill="url('#selection-gradient-end')"
        />

        <rect
          x={(selectionRect as any).x}
          y={(vbox as any).y}
          width={(selectionRect as any).width}
          height={RULER_AREA_SIZE * zoomInverse}
          style={{
            fill: SELECTION_AREA_COLOR,
            fillOpacity: SELECTION_AREA_OPACITY,
          }}
        />

        <text
          x={(selectionRect as any).x1 - 4 * zoomInverse}
          y={(vbox as any).y + 13.6 * zoomInverse}
          textAnchor='end'
          style={{
            fontSize: FONT_SIZE * zoomInverse,
            fontFamily: FONT_FAMILY,
            fill: SELECTION_AREA_COLOR,
          }}
        >
          {formatNumber((selectionRect as any).x1 - offsetX)}
        </text>

        <text
          x={(selectionRect as any).x2 + 4 * zoomInverse}
          y={(vbox as any).y + 13.6 * zoomInverse}
          textAnchor='start'
          style={{
            fontSize: FONT_SIZE * zoomInverse,
            fontFamily: FONT_FAMILY,
            fill: SELECTION_AREA_COLOR,
          }}
        >
          {formatNumber((selectionRect as any).x2 - offsetX)}
        </text>
      </g>

      {(() => {
        const centerX = (vbox as any).x + RULER_AREA_HALF_SIZE * zoomInverse
        const centerY =
          (selectionRect as any).y +
          (selectionRect as any).height / 2 -
          RULER_AREA_HALF_SIZE * zoomInverse

        return (
          <g transform={`rotate(-90 ${centerX},${centerY})`}>
            <rect
              x={centerX - (selectionRect as any).height / 2 - RULER_AREA_HALF_SIZE * zoomInverse}
              y={centerY - RULER_AREA_HALF_SIZE * zoomInverse}
              width={(selectionRect as any).height}
              height={RULER_AREA_SIZE * zoomInverse}
              style={{
                fill: SELECTION_AREA_COLOR,
                fillOpacity: SELECTION_AREA_OPACITY,
              }}
            />

            <rect
              x={
                centerX -
                (selectionRect as any).height / 2 -
                RULER_AREA_HALF_SIZE * zoomInverse -
                OVER_NUMBER_SIZE * zoomInverse
              }
              y={centerY - RULER_AREA_HALF_SIZE * zoomInverse}
              width={OVER_NUMBER_SIZE * zoomInverse}
              height={RULER_AREA_SIZE * zoomInverse}
              style={{
                fill: RULERS_BACKGROUND,
                fillOpacity: OVER_NUMBER_OPACITY,
              }}
            />

            <rect
              x={centerX - (selectionRect as any).height / 2 - RULER_AREA_HALF_SIZE * zoomInverse + (selectionRect as any).height}
              y={centerY - RULER_AREA_HALF_SIZE * zoomInverse}
              width={OVER_NUMBER_SIZE * zoomInverse}
              height={RULER_AREA_SIZE * zoomInverse}
              style={{
                fill: RULERS_BACKGROUND,
                fillOpacity: OVER_NUMBER_OPACITY,
              }}
            />

            <text
              x={centerX - (selectionRect as any).height / 2 - 15 * zoomInverse}
              y={centerY + 4 * zoomInverse}
              textAnchor='end'
              style={{
                fontSize: FONT_SIZE * zoomInverse,
                fontFamily: FONT_FAMILY,
                fill: SELECTION_AREA_COLOR,
              }}
            >
              {formatNumber((selectionRect as any).y2 - offsetY)}
            </text>

            <text
              x={centerX + (selectionRect as any).height / 2}
              y={centerY + 4 * zoomInverse}
              textAnchor='start'
              style={{
                fontSize: FONT_SIZE * zoomInverse,
                fontFamily: FONT_FAMILY,
                fill: SELECTION_AREA_COLOR,
              }}
            >
              {formatNumber((selectionRect as any).y1 - offsetY)}
            </text>
          </g>
        )
      })()}
    </g>
  )
}

interface RulersProps {
  zoom: number
  zoomInverse: number
  vbox: any
  offsetX: number
  offsetY: number
  selectedShapes: any[]
  showRulers?: boolean
}

export const Rulers: React.FC<RulersProps> = ({
  zoom,
  zoomInverse,
  vbox,
  offsetX,
  offsetY,
  selectedShapes,
  showRulers = true,
}) => {
  const selectionRect = React.useMemo(() => {
    if (D.notEmpty(selectedShapes)) {
      return GSH.shapesIntoRect(selectedShapes)
    }
    return null
  }, [selectedShapes])

  if (!vbox) return null

  return (
    <g className='viewport-frame' pointerEvents='none'>
      <ViewportFrame
        showRulers={showRulers}
        zoom={zoom}
        zoomInverse={zoomInverse}
        vbox={vbox}
        offsetX={offsetX}
        offsetY={offsetY}
      />

      {showRulers && selectionRect && (
        <SelectionArea
          zoom={zoom}
          zoomInverse={zoomInverse}
          vbox={vbox}
          selectionRect={selectionRect}
          offsetX={offsetX}
          offsetY={offsetY}
        />
      )}
    </g>
  )
}
