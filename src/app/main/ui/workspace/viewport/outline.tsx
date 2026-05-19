// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as D from 'app/common/data'
import * as DM from 'app/common/data/macros'
import * as CFH from 'app/common/files/helpers'
import * as GSH from 'app/common/geom/shapes'
import * as CTK from 'app/common/types/component'
import * as CTN from 'app/common/types/container'
import * as Refs from 'app/main/refs'
import * as Hooks from 'app/main/ui/hooks'
import * as Attrs from 'app/main/ui/shapes/attrs'
import * as OBJ from 'app/util/object'
import * as MF from 'rumext.v2'
import React from 'react'

interface OutlineProps {
  shape: any
  modifier?: any
  zoom?: number
}

export const Outline: React.FC<OutlineProps> = ({ shape, modifier, zoom = 1 }) => {
  const transformedShape = GSH.transformShape(shape, modifier?.modifiers)
  const transform = GSH.transformStr(transformedShape)

  // NOTE: we don't use mf/deref to avoid a repaint dependency here
  const objects = (Refs.workspacePageObjects as any).deref()

  const color = CTN.inAnyComponent(objects, shape) ||
    CTK.isVariantContainer(shape)
    ? 'var(--assets-component-hightlight)'
    : 'var(--color-accent-tertiary)'

  const x = DM.getProp(shape, 'x')
  const y = DM.getProp(shape, 'y')
  const width = DM.getProp(shape, 'width')
  const height = DM.getProp(shape, 'height')
  const selrect = DM.getProp(shape, 'selrect')
  const type = DM.getProp(shape, 'type')
  const content = shape.content

  const pathDefined = CFH.pathShape(shape)
  const pathData = React.useMemo(() => {
    if (pathDefined && content !== null) {
      return content.toString()
    }
    return null
  }, [pathDefined, content])

  const borderAttrs = Attrs.getBorderProps(shape)

  const outlineType =
    type === 'circle'
      ? 'ellipse'
      : type === 'path'
      ? 'path'
      : OBJ.get(borderAttrs, 'd') !== null
      ? 'path'
      : 'rect'

  const props: any = {
    fill: 'none',
    stroke: color,
    strokeWidth: 1 / zoom,
    pointerEvents: 'none',
    transform,
  }

  if (type === 'circle') {
    props.cx = x + width / 2
    props.cy = y + height / 2
    props.rx = width / 2
    props.ry = height / 2
  } else if (type === 'path') {
    props.d = pathData
    props.transform = null
  } else {
    const selX = DM.getProp(selrect, 'x')
    const selY = DM.getProp(selrect, 'y')
    const selW = DM.getProp(selrect, 'width')
    const selH = DM.getProp(selrect, 'height')

    props.x = selX
    props.y = selY
    props.width = selW
    props.height = selH
    props.rx = OBJ.get(borderAttrs, 'rx')
    props.ry = OBJ.get(borderAttrs, 'ry')
    props.d = OBJ.get(borderAttrs, 'd')
  }

  return React.createElement(outlineType, props)
}

interface ShapeOutlinesRenderProps {
  shapes: any[]
  zoom: number
  modifiers: any
}

const ShapeOutlinesRender: React.FC<ShapeOutlinesRenderProps> = ({
  shapes,
  zoom,
  modifiers,
}) => {
  return (
    <>
      {shapes.map((shape) => {
        const shapeId = DM.getProp(shape, 'id')
        const modifier = modifiers[shapeId]

        return (
          <Outline
            key={`outline-${shapeId}`}
            shape={shape}
            modifier={modifier}
            zoom={zoom}
          />
        )
      })}
    </>
  )
}

interface ShapeOutlinesProps {
  selected?: Set<any>
  hover?: Set<any>
  highlighted?: Set<any>
  objects: any
  edition?: any
  zoom: number
  modifiers: any
}

export const ShapeOutlines: React.FC<ShapeOutlinesProps> = ({
  selected = new Set(),
  hover = new Set(),
  highlighted = new Set(),
  objects,
  edition,
  zoom,
  modifiers,
}) => {
  const lookup = D.getf(objects)
  const editionCheck = (o: any) => edition === o

  const shapes = React.useMemo(() => {
    const union = new Set([...selected, ...hover])
    const fromUnion = [...union].filter((id) => !editionCheck(id)).map(lookup).filter(Boolean)

    const fromHighlighted = [...highlighted]
      .filter((id) => !editionCheck(id))
      .map(lookup)
      .filter(Boolean)

    return new Set([...fromUnion, ...fromHighlighted])
  }, [selected, hover, highlighted, objects, edition, lookup])

  const modifiersForShapes = React.useMemo(() => {
    return Object.fromEntries(
      (shapes as Set<any>).map((s: any) => [(s as any).id, modifiers[(s as any).id]])
    )
  }, [shapes, modifiers])

  const memoizedShapes = Hooks.useEqualMemo(shapes)
  const memoizedModifiers = Hooks.useEqualMemo(modifiersForShapes)

  return (
    <g className='outlines blurrable'>
      <ShapeOutlinesRender
        shapes={[...memoizedShapes]}
        zoom={zoom}
        modifiers={memoizedModifiers}
      />
    </g>
  )
}
