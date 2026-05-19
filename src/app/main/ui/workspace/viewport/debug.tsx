// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as D from 'app/common/data'
import * as DM from 'app/common/data/macros'
import * as CFH from 'app/common/files/helpers'
import * as GPT from 'app/common/geom/point'
import * as GSH from 'app/common/geom/shapes'
import * as GSL from 'app/common/geom/shapes/flex-layout'
import * as GSG from 'app/common/geom/shapes/grid-layout'
import * as GPO from 'app/common/geom/shapes/points'
import * as CTL from 'app/common/types/shape/layout'
import * as UUID from 'app/common/uuid'
import * as WasmApi from 'app/render-wasm/api'
import * as STR from 'cuerdas.core'
import * as MF from 'rumext.v2'
import React from 'react'

interface DebugContentBoundsProps {
  objects: any
  zoom: number
  selectedShapes: any[]
  hoverTopFrameId: any
}

export const DebugContentBounds: React.FC<DebugContentBoundsProps> = ({
  objects,
  zoom,
  selectedShapes,
  hoverTopFrameId,
}) => {
  const selectedFrame =
    selectedShapes.length === 1 && (selectedShapes[0] as any).type === 'frame'
      ? selectedShapes[0]
      : null

  const shape = selectedFrame || objects[hoverTopFrameId]

  if (!shape?.layout) return null

  const children = CFH.getImmediateChildren(objects, (shape as any).id).filter(
    (c: any) => !c.hidden
  )

  const bounds = D.lazyMap(Object.keys(objects), (id) =>
    DM.getIn(objects, [id, 'points'])
  )

  const childrenWithBounds = children.map((child: any) => [
    bounds[(child as any).id],
    child,
  ])

  let gridLayoutData = null
  if (CTL.gridLayout(shape)) {
    gridLayoutData = GSG.calcLayoutData(
      shape,
      (shape as any).points,
      childrenWithBounds,
      bounds,
      objects
    )
  }

  let layoutBounds = null
  let layoutPoints = null

  if (CTL.flexLayout(shape)) {
    layoutBounds = GSL.layoutContentBounds(bounds, shape, children, objects)
    layoutPoints = GSL.layoutContentPoints(bounds, shape, children, objects).flat()
  } else if (CTL.gridLayout(shape)) {
    layoutBounds = GSG.layoutContentBounds(bounds, shape, gridLayoutData)
    layoutPoints = GSG.layoutContentPoints(bounds, shape, gridLayoutData).flat()
  }

  return (
    <g className='debug-layout' pointerEvents='none'>
      <polygon
        points={layoutBounds.map((p: any) => `${(p as any).x}, ${(p as any).y}`).join(' ')}
        style={{ stroke: 'red', fill: 'none' }}
      />

      {layoutPoints.map((p: any, i: number) => (
        <circle
          key={i}
          cx={(p as any).x}
          cy={(p as any).y}
          r={4 / zoom}
          style={{ fill: 'red' }}
        />
      ))}
    </g>
  )
}

interface DebugLayoutLinesProps {
  objects: any
  zoom: number
  selectedShapes: any[]
  hoverTopFrameId: any
}

export const DebugLayoutLines: React.FC<DebugLayoutLinesProps> = ({
  objects,
  zoom,
  selectedShapes,
  hoverTopFrameId,
}) => {
  const selectedFrame =
    selectedShapes.length === 1 && (selectedShapes[0] as any).type === 'frame'
      ? selectedShapes[0]
      : null

  const shape = selectedFrame || objects[hoverTopFrameId]

  if (!shape || !CTL.flexLayout(shape)) return null

  const row = CTL.row(shape)
  const col = CTL.col(shape)

  const children = CFH.getImmediateChildren(objects, (shape as any).id)
    .filter((c: any) => !c.hidden)
    .map((child: any) => [
      GPO.parentCoordsBounds((child as any).points, (shape as any).points),
      child,
    ])

  const bounds = D.lazyMap(Object.keys(objects), (id) =>
    DM.getIn(objects, [id, 'points'])
  )

  const layoutData = GSL.calcLayoutData(shape, (shape as any).points, children, bounds, objects)
  const { layoutBounds } = layoutData

  const xv = (v: number) => GPO.startHv(layoutBounds, v)
  const yv = (v: number) => GPO.startVv(layoutBounds, v)

  return (
    <g className='debug-layout' pointerEvents='none'>
      {D.enumerate(layoutData.layoutLines).map(([idx, line]: [number, any]) => {
        const lineWidth = row
          ? line.lineWidth + (line.numChildren - 1) * line.layoutGapRow
          : line.lineWidth
        const lineHeight = col
          ? line.lineHeight + (line.numChildren - 1) * line.layoutGapCol
          : line.lineHeight

        const points = [
          line.startP,
          GPT.add(line.startP, xv(lineWidth)),
          GPT.add(line.startP, xv(lineWidth), yv(lineHeight)),
          GPT.add(line.startP, yv(lineHeight)),
        ]

        return (
          <g key={`line-${idx}`}>
            <polygon
              points={points.map((p) => `${(p as any).x}, ${(p as any).y}`).join(' ')}
              style={{
                stroke: 'red',
                strokeWidth: 2 / zoom,
                strokeDasharray: `${10 / zoom} ${5 / zoom}`,
              }}
            />
          </g>
        )
      })}
    </g>
  )
}

interface DebugDropZonesProps {
  objects: any
  zoom: number
  selectedShapes: any[]
  hoverTopFrameId: any
}

export const DebugDropZones: React.FC<DebugDropZonesProps> = ({
  objects,
  zoom,
  selectedShapes,
  hoverTopFrameId,
}) => {
  const selectedFrame =
    selectedShapes.length === 1 && (selectedShapes[0] as any).type === 'frame'
      ? selectedShapes[0]
      : null

  const shape = selectedFrame || objects[hoverTopFrameId]
  const bounds = D.lazyMap(Object.keys(objects), (id) =>
    DM.getIn(objects, [id, 'points'])
  )

  if (!shape?.layout) return null

  const dropAreas = GSL.getDropAreas(shape, objects, bounds)

  return (
    <g
      className='debug-layout'
      pointerEvents='none'
      transform={GSH.transformStr(shape)}
    >
      {dropAreas.map((area: any, idx: number) => (
        <g key={`drop-area-${idx}`}>
          <rect
            x={(area as any).x}
            y={(area as any).y}
            width={(area as any).width}
            height={(area as any).height}
            style={{
              fill: 'blue',
              fillOpacity: 0.3,
              stroke: 'red',
              strokeWidth: 1 / zoom,
              strokeDasharray: `${3 / zoom} ${6 / zoom}`,
            }}
          />
          <text
            x={(area as any).x}
            y={(area as any).y}
            width={(area as any).width}
            height={(area as any).height}
            alignmentBaseline='hanging'
            fill='black'
          >
            {(area as any).index}
          </text>
        </g>
      ))}
    </g>
  )
}

interface ShapeParentBoundProps {
  shape: any
  parent: any
  zoom: number
}

const ShapeParentBound: React.FC<ShapeParentBoundProps> = ({
  shape,
  parent,
  zoom,
}) => {
  const [i1, i2, i3, i4] = GPO.parentCoordsBounds(
    (shape as any).points,
    (parent as any).points
  )

  return (
    <>
      <polygon
        points={[i1, i2, i3, i4].map((p) => `${(p as any).x}, ${(p as any).y}`).join(',')}
        style={{ fill: 'none', stroke: 'red', strokeWidth: 1 / zoom }}
      />
      <line
        x1={(i1 as any).x}
        y1={(i1 as any).y}
        x2={(i2 as any).x}
        y2={(i2 as any).y}
        style={{ stroke: 'green', strokeWidth: 1 / zoom }}
      />
      <line
        x1={(i1 as any).x}
        y1={(i1 as any).y}
        x2={(i4 as any).x}
        y2={(i4 as any).y}
        style={{ stroke: 'blue', strokeWidth: 1 / zoom }}
      />
    </>
  )
}

interface DebugParentBoundsProps {
  objects: any
  zoom: number
  selectedShapes: any[]
  hoverTopFrameId: any
}

export const DebugParentBounds: React.FC<DebugParentBoundsProps> = ({
  objects,
  zoom,
  selectedShapes,
  hoverTopFrameId,
}) => {
  const selectedFrame =
    selectedShapes.length === 1 && (selectedShapes[0] as any).type === 'frame'
      ? selectedShapes[0]
      : null

  const parent = selectedFrame || objects[hoverTopFrameId]
  const parentBounds = (parent as any)?.points

  const bounds = D.lazyMap(Object.keys(objects), (id) =>
    DM.getIn(objects, [id, 'points'])
  )

  if (!parent || (parent as any).id === UUID.zero) return null

  const children = CFH.getImmediateChildren(objects, (parent as any).id).filter(
    (c: any) => !c.hidden
  )

  return (
    <g className='debug-parent-bounds' pointerEvents='none'>
      {children.map((child: any, idx: number) => {
        const childBounds = (child as any).points
        const points =
          CTL.fillHeight(child) || CTL.fillHeight(child)
            ? GSL.childLayoutBoundPoints(parent, child, parentBounds, childBounds, bounds, objects)
            : childBounds

        return (
          <React.Fragment key={`bound-${idx}`}>
            <ShapeParentBound shape={child} parent={parent} zoom={zoom} />
            {points.map((point: any, i: number) => (
              <circle
                key={`point-${idx}-${i}`}
                cx={(point as any).x}
                cy={(point as any).y}
                r={2 / zoom}
                style={{ fill: 'red' }}
              />
            ))}
          </React.Fragment>
        )
      })}
    </g>
  )
}

interface DebugGridLayoutProps {
  objects: any
  zoom: number
  selectedShapes: any[]
  hoverTopFrameId: any
}

export const DebugGridLayout: React.FC<DebugGridLayoutProps> = ({
  objects,
  zoom,
  selectedShapes,
  hoverTopFrameId,
}) => {
  const selectedFrame =
    selectedShapes.length === 1 && (selectedShapes[0] as any).type === 'frame'
      ? selectedShapes[0]
      : null

  const parent = selectedFrame || objects[hoverTopFrameId]
  const parentBounds = (parent as any)?.points

  const bounds = D.lazyMap(Object.keys(objects), (id) =>
    DM.getIn(objects, [id, 'points'])
  )

  if (!parent || (parent as any).id === UUID.zero) return null

  const children = CFH.getImmediateChildren(objects, (parent as any).id)
    .filter((c: any) => !c.hidden)
    .map((child: any) => [
      GPO.parentCoordsBounds((child as any).points, parentBounds),
      child,
    ])

  const hv = (v: number) => GPO.startHv(parentBounds, v)
  const vv = (v: number) => GPO.startVv(parentBounds, v)

  const width = GPO.widthPoints(parentBounds)
  const height = GPO.heightPoints(parentBounds)
  const origin = GPO.origin(parentBounds)

  const { rowTracks, columnTracks } = GSG.calcLayoutData(
    parent,
    parentBounds,
    children,
    bounds,
    objects
  )

  return (
    <>
      {rowTracks.map((rowData: any, idx: number) => {
        const startP = GPT.add(origin, vv((rowData as any).distance))
        const endP = GPT.add(startP, hv(width))
        return (
          <line
            key={`row-${idx}`}
            x1={(startP as any).x}
            y1={(startP as any).y}
            x2={(endP as any).x}
            y2={(endP as any).y}
            style={{ stroke: 'red', strokeWidth: 1 / zoom }}
          />
        )
      })}

      {columnTracks.map((colData: any, idx: number) => {
        const startP = GPT.add(origin, hv((colData as any).distance))
        const endP = GPT.add(startP, vv(height))
        return (
          <line
            key={`col-${idx}`}
            x1={(startP as any).x}
            y1={(startP as any).y}
            x2={(endP as any).x}
            y2={(endP as any).y}
            style={{ stroke: 'red', strokeWidth: 1 / zoom }}
          />
        )
      })}
    </>
  )
}

interface DebugTextWasmPositionDataProps {
  objects: any
  zoom: number
  selectedShapes: any[]
}

export const DebugTextWasmPositionData: React.FC<DebugTextWasmPositionDataProps> = ({
  objects,
  zoom,
  selectedShapes,
}) => {
  const selectedText =
    selectedShapes.length === 1 && (selectedShapes[0] as any).type === 'text'
      ? selectedShapes[0]
      : null

  const positionData = selectedText
    ? WasmApi.calculatePositionData(selectedText)
    : null

  return (
    <>
      {positionData?.map((rect: any, idx: number) => (
        <rect
          key={idx}
          x={rect.x}
          y={rect.y - rect.height}
          width={rect.width}
          height={rect.height}
          fill='none'
          strokeWidth={1 / zoom}
          stroke='red'
        />
      ))}
    </>
  )
}
