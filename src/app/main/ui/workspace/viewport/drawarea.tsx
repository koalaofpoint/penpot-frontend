// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as DM from 'app/common/data/macros'
import * as MTH from 'app/common/math'
import * as Refs from 'app/main/refs'
import { PathShape } from 'app/main/ui/shapes/path'
import { ShapeWrapper } from 'app/main/ui/workspace/shapes'
import { PathEditor } from 'app/main/ui/workspace/shapes/path/editor'
import * as L from 'okulary.core'
import * as MF from 'rumext.v2'
import React from 'react'

function makeEditPathRef(id: string) {
  const getFn = (state: any) => DM.getIn(state, ['edit-path', id])
  return L.derived(getFn, Refs.workspaceLocal)
}

interface GenericDrawAreaProps {
  shape: any
  zoom: number
}

const GenericDrawArea: React.FC<GenericDrawAreaProps> = ({ shape, zoom }) => {
  const { x, y, width, height } = shape.selrect || {}

  if (!x || !y || MTH.nan(x) || MTH.nan(y)) {
    return null
  }

  return (
    <rect
      className='main'
      x={x}
      y={y}
      width={width}
      height={height}
      style={{
        stroke: 'var(--color-accent-tertiary)',
        fill: 'none',
        strokeWidth: 1 / zoom,
      }}
    />
  )
}

interface PathDrawAreaProps {
  shape: any
  zoom: number
}

const PathDrawArea: React.FC<PathDrawAreaProps> = ({ shape, zoom }) => {
  const shapeId = DM.getProp(shape, 'id')

  const editPathRef = React.useMemo(() => {
    return makeEditPathRef(shapeId)
  }, [shapeId])

  const editPathState = MF.useDeref(editPathRef)

  const props = {
    shape,
    state: editPathState,
  }

  return <PathEditor {...props} />
}

interface DrawAreaProps {
  shape: any
  zoom: number
  tool: any
}

export const DrawArea: React.FC<DrawAreaProps> = ({ shape, zoom, tool }) => {
  return (
    <g className='draw-area'>
      <g style={{ pointerEvents: 'none' }}>
        <ShapeWrapper shape={shape} />
      </g>

      {tool === 'path' && <PathDrawArea shape={shape} zoom={zoom} />}
      {tool === 'curve' && <PathShape shape={shape} zoom={zoom} />}
      {(!tool || tool === 'default') && <GenericDrawArea shape={shape} zoom={zoom} />}
    </g>
  )
}
