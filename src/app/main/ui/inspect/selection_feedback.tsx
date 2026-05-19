// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from 'app/common/data'
import * as gsh from 'app/common/geom/shapes'
import { sizeDisplay, measurement } from '@ui/measurements'
import React, { useMemo } from 'react'

const selectColor = 'var(--color-accent-tertiary)'
const selectionRectWidth = 1
const selectGuideWidth = 1
const selectGuideDasharray = 5

function resolveShapes(objects: any, ids: string[]): any[] {
  return ids.map((id) => d.getf(objects, id)).filter(Boolean)
}

function frameToBounds(frame: any) {
  return {
    x: 0,
    y: 0,
    width: frame.width,
    height: frame.height,
  }
}

interface SelectionRectProps {
  selrect: any
  zoom: number
}

const SelectionRect: React.FC<SelectionRectProps> = ({ selrect, zoom }) => {
  const { x, y, width, height } = selrect
  const widthScaled = selectionRectWidth / zoom

  return (
    <g className="selection-rect">
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: 'none',
          stroke: selectColor,
          strokeWidth: widthScaled,
        }}
      />
    </g>
  )
}

interface SelectionFeedbackProps {
  frame: any
  local: any
  objects: any
  size: any
}

export const SelectionFeedback: React.FC<SelectionFeedbackProps> = ({
  frame,
  local,
  objects,
  size,
}) => {
  const { hover, selected, zoom } = local

  const shapes = useMemo(
    () => resolveShapes(objects, [hover]),
    [objects, hover]
  )
  const hoverShape = shapes[0] ?? frame

  const selectedShapes = useMemo(
    () => resolveShapes(objects, selected),
    [objects, selected]
  )

  const selrect = useMemo(
    () => gsh.shapesToRect(selectedShapes),
    [selectedShapes]
  )

  if (!d.notEmpty(selectedShapes)) return null

  return (
    <g className="selection-feedback" pointerEvents="none">
      <g className="selected-shapes">
        <SelectionRect selrect={selrect} zoom={zoom} />
        <sizeDisplay selrect={selrect} zoom={zoom} />
      </g>

      <measurement
        bounds={{ ...size, x: 0, y: 0 }}
        selectedShapes={selectedShapes}
        hoverShape={hoverShape}
        zoom={zoom}
      />
    </g>
  )
}
