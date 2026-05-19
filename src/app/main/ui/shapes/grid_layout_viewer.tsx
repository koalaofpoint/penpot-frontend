// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useMemo } from "react"
import * as d from "app/common/data"
import * as dm from "app/common/data/macros"
import * as cfh from "app/common/files/helpers"
import * as gmt from "app/common/geom/matrix"
import * as gpt from "app/common/geom/point"
import * as gsh from "app/common/geom/shapes"
import * as gsg from "app/common/geom/shapes/grid-layout"
import * as gpo from "app/common/geom/shapes/points"
import * as ctl from "app/common/types/shape/layout"

interface GridCellAreaLabelProps {
  origin: any
  width: number
  text: string
}

const GridCellAreaLabel: React.FC<GridCellAreaLabelProps> = ({
  origin,
  width,
  text,
}) => {
  const areaWidth = 10 * text.length
  const areaHeight = 25
  const areaX = origin.x + width - areaWidth
  const areaY = origin.y

  const areaTextX = areaX + areaWidth / 2
  const areaTextY = areaY + areaHeight / 2

  return (
    <g pointerEvents="none">
      <rect
        x={areaX}
        y={areaY}
        width={areaWidth}
        height={areaHeight}
        style={{
          fill: "var(--color-accent-quaternary)",
          fillOpacity: 0.3,
        }}
      />
      <text
        x={areaTextX}
        y={areaTextY}
        style={{
          fill: "var(--color-accent-quaternary)",
          fontFamily: "worksans",
          fontWeight: 600,
          fontSize: 14,
          alignmentBaseline: "central",
          textAnchor: "middle",
        }}
      >
        {text}
      </text>
    </g>
  )
}

interface GridCellProps {
  shape: any
  cell: any
  layoutData: any
}

const GridCell: React.FC<GridCellProps> = ({ shape, cell, layoutData }) => {
  const cellBounds = gsg.cellBounds(layoutData, cell)
  const cellOrigin = gpo.origin(cellBounds)
  const cellWidth = gpo.widthPoints(cellBounds)
  const cellHeight = gpo.heightPoints(cellBounds)
  const cellCenter = gsh.pointsToCenter(cellBounds)
  const transformedOrigin = gpt.transform(cellOrigin, gmt.transformIn(cellCenter, shape.transformInverse))

  return (
    <g className="cell">
      <rect
        transform={gmt.transformIn(cellCenter, shape.transform)}
        x={transformedOrigin.x}
        y={transformedOrigin.y}
        width={cellWidth}
        height={cellHeight}
        style={{
          stroke: "var(--color-accent-quaternary)",
          strokeWidth: 1.5,
          fill: "none",
        }}
      />

      {cell.areaName && (
        <GridCellAreaLabel
          origin={transformedOrigin}
          width={cellWidth}
          text={cell.areaName}
        />
      )}
    </g>
  )
}

interface GridLayoutViewerProps {
  shape: any
  objects: any
}

export const GridLayoutViewer: React.FC<GridLayoutViewerProps> = ({
  shape,
  objects,
}) => {
  const bounds = d.lazyMap(Object.keys(objects), (k) => gsh.shapeToPoints(objects[k]))

  const children = useMemo(() => {
    return cfh.getImmediateChildren(objects, shape.id)
      .filter((child: any) => !child.hidden)
      .map((child: any) => {
        const childPoints = gpo.parentCoordsBounds(child.points, shape.points)
        return [childPoints, child]
      })
  }, [objects, shape.id, shape.points])

  const layoutData = gsg.calcLayoutData(shape, shape.points, children, bounds, objects)

  const cells = ctl.getCells(shape, { sort: true })

  return (
    <g className="cells">
      {cells.map((cell: any) => (
        <GridCell
          key={`cell-${cell.id}`}
          shape={shape}
          layoutData={layoutData}
          cell={cell}
        />
      ))}
    </g>
  )
}
