// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as D from 'app/common/data'
import * as DM from 'app/common/data/macros'
import * as CFH from 'app/common/files/helpers'
import * as GG from 'app/common/geom/grid'
import * as GRC from 'app/common/geom/rect'
import * as MTH from 'app/common/math'
import * as CTST from 'app/common/types/shape-tree'
import * as UUID from 'app/common/uuid'
import * as Refs from 'app/main/refs'
import * as MF from 'rumext.v2'
import React from 'react'

interface SquareGridProps {
  frame: any
  zoom: number
  grid: any
}

const SquareGrid: React.FC<SquareGridProps> = ({ frame, zoom, grid }) => {
  const gridId = React.useMemo(() => UUID.next(), [])

  const params = grid.params
  const size = params.size
  const colorValue =
    params.color?.color ?? params.color?.value
  const colorOpacity = params.color?.opacity

  return (
    <g className='grid'>
      <defs>
        <pattern
          id={gridId}
          x={(frame as any).x}
          y={(frame as any).y}
          width={size}
          height={size}
          patternUnits='userSpaceOnUse'
        >
          <path
            d={`M ${size} 0 L 0 0 0 ${size}`}
            style={{
              fill: 'none',
              stroke: colorValue,
              strokeOpacity: colorOpacity,
              strokeWidth: String(1 / zoom),
            }}
          />
        </pattern>
      </defs>

      <rect
        x={(frame as any).x}
        y={(frame as any).y}
        width={(frame as any).width}
        height={(frame as any).height}
        fill={`url(#${gridId})`}
      />
    </g>
  )
}

interface LayoutGridProps {
  key?: string
  frame: any
  grid: any
  zoom: number
}

const LayoutGrid: React.FC<LayoutGridProps> = ({ key, frame, grid, zoom }) => {
  const colorValue = grid.params.color?.color ?? grid.params.color?.value
  const colorOpacity = grid.params.color?.opacity
  const gutter = GG.gridGutter(frame, grid)
  const gutterDefined = gutter !== null && !MTH.almostZero(gutter)

  return (
    <g className='grid'>
      {D.enumerate(GG.gridAreas(frame, grid)).map(([idx, area]: [number, any]) => {
        const { x, y, width, height } = area

        if (gutterDefined) {
          return (
            <rect
              key={`${key}-${x}-${y}`}
              x={x}
              y={y}
              width={width - x}
              height={height - y}
              style={{
                fill: colorValue,
                strokeWidth: 0,
                opacity: colorOpacity,
              }}
            />
          )
        }

        if (!gutterDefined && grid.type === 'column') {
          return (
            <React.Fragment key={`${key}-${x}-${y}`}>
              {idx === 0 && (
                <line
                  x1={x}
                  y1={y}
                  x2={x}
                  y2={y + height}
                  style={{
                    stroke: colorValue,
                    strokeWidth: 1 / zoom,
                    strokeOpacity: colorOpacity,
                    fill: 'none',
                  }}
                />
              )}
              <line
                x1={x + width}
                y1={y}
                x2={x + width}
                y2={y + height}
                style={{
                  stroke: colorValue,
                  strokeWidth: 1 / zoom,
                  strokeOpacity: colorOpacity,
                  fill: 'none',
                }}
              />
            </React.Fragment>
          )
        }

        if (!gutterDefined && grid.type === 'row') {
          return (
            <React.Fragment key={`${key}-${x}-${y}`}>
              {idx === 0 && (
                <line
                  x1={x}
                  y1={y}
                  x2={x + width}
                  y2={y}
                  style={{
                    stroke: colorValue,
                    strokeWidth: 1 / zoom,
                    strokeOpacity: colorOpacity,
                    fill: 'none',
                  }}
                />
              )}
              <line
                x1={x}
                y1={y + height}
                x2={x + width}
                y2={y + height}
                style={{
                  stroke: colorValue,
                  strokeWidth: 1 / zoom,
                  strokeOpacity: colorOpacity,
                  fill: 'none',
                }}
              />
            </React.Fragment>
          )
        }

        return null
      })}
    </g>
  )
}

function frameClipArea({ selrect }: any, parents: any[]): any {
  return parents.reduce((sr, parent) => {
    if (
      !CFH.root(parent) &&
      CFH.frameShape(parent) &&
      !parent.showContent
    ) {
      return GRC.clipRect(sr, (parent as any).selrect)
    }
    return sr
  }, selrect)
}

interface GridDisplayFrameProps {
  frame: any
  zoom: number
  transforming: Set<any>
}

const GridDisplayFrame: React.FC<GridDisplayFrameProps> = ({
  frame,
  zoom,
  transforming,
}) => {
  const frameId = (frame as any).id

  const parentsRef = React.useMemo(() => {
    return Refs.shapeParents(frameId)
  }, [frameId])

  const parents = MF.useDeref(parentsRef)
  const clipArea = frameClipArea(frame, parents)
  const clipId = DM.str((frame as any).id, '-grid-clip')

  const transformDefined =
    transforming.has(frameId) ||
    parents.some((p: any) => transforming.has((p as any).id))

  if (transformDefined) {
    return null
  }

  return (
    <g clipPath={`url(#${clipId})`}>
      <defs>
        <clipPath id={clipId}>
          <rect
            x={(clipArea as any).x}
            y={(clipArea as any).y}
            width={(clipArea as any).width}
            height={(clipArea as any).height}
          />
        </clipPath>
      </defs>

      {(frame as any).grids
        .filter((g: any) => g.display)
        .map((grid: any, index: number) => {
          const props = {
            key: `${(frame as any).id}-grid-${index}`,
            frame,
            zoom,
            grid,
          }

          switch (grid.type) {
            case 'square':
              return <SquareGrid {...props} />
            case 'column':
            case 'row':
              return <LayoutGrid {...props} />
            default:
              return null
          }
        })}
    </g>
  )
}

function hasGrid({ grids }: any): boolean {
  return grids !== null && D.notEmpty(grids?.filter((g: any) => g.display))
}

interface FrameGridProps {
  zoom: number
  transform: any
  selected: Set<any>
  focus: Set<any>
}

export const FrameGrid: React.FC<FrameGridProps> = ({
  zoom,
  transform,
  selected,
  focus,
}) => {
  const frames = React.useMemo(() => {
    return (Refs.workspaceFrames as any).deref().filter(hasGrid)
  }, [])

  const transforming = transform && selected ? selected : null

  return (
    <g className='grid-display' style={{ pointerEvents: 'none' }}>
      {frames.map((frame: any) => {
        if (
          CTST.rotatedFrame(frame) ||
          (focus && !focus.isEmpty && !focus.has((frame as any).id))
        ) {
          return null
        }

        return (
          <GridDisplayFrame
            key={`grid-${(frame as any).id}`}
            frame={frame}
            zoom={zoom}
            transforming={transforming ?? new Set()}
          />
        )
      })}
    </g>
  )
}
