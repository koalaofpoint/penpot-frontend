// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { dmGetIn } from 'app/common/data/macros'
import * as ctc from 'app/common/types/component'
import * as ctkl from 'app/common/types/components-list'
import { useEqualMemo } from '@ui/hooks'
import { Annotation } from '@ui/inspect/annotation'
import { BlurPanel } from '@ui/inspect/attributes/blur'
import { FillPanel } from '@ui/inspect/attributes/fill'
import { GeometryPanel } from '@ui/inspect/attributes/geometry'
import { LayoutPanel } from '@ui/inspect/attributes/layout'
import { LayoutElementPanel } from '@ui/inspect/attributes/layout-element'
import { ShadowPanel } from '@ui/inspect/attributes/shadow'
import { StrokePanel } from '@ui/inspect/attributes/stroke'
import { SvgPanel } from '@ui/inspect/attributes/svg'
import { TextPanel } from '@ui/inspect/attributes/text'
import { VariantPanel } from '@ui/inspect/attributes/variant'
import { VisibilityPanel } from '@ui/inspect/attributes/visibility'
import { Exports } from '@ui/inspect/exports'
import React, { useMemo } from 'react'

const typeToOptions = {
  multiple: ['fill', 'stroke', 'text', 'shadow', 'blur', 'layout-element'],
  frame: [
    'visibility',
    'geometry',
    'fill',
    'stroke',
    'shadow',
    'blur',
    'layout',
    'layout-element',
  ],
  group: ['visibility', 'geometry', 'svg', 'layout-element'],
  rect: [
    'visibility',
    'geometry',
    'fill',
    'stroke',
    'shadow',
    'blur',
    'svg',
    'layout-element',
  ],
  circle: [
    'visibility',
    'geometry',
    'fill',
    'stroke',
    'shadow',
    'blur',
    'svg',
    'layout-element',
  ],
  path: [
    'visibility',
    'geometry',
    'fill',
    'stroke',
    'shadow',
    'blur',
    'svg',
    'layout-element',
  ],
  text: ['visibility', 'geometry', 'text', 'shadow', 'blur', 'stroke', 'layout-element'],
  variant: [
    'variant',
    'geometry',
    'fill',
    'stroke',
    'shadow',
    'blur',
    'layout',
    'layout-element',
  ],
}

interface AttributesProps {
  pageId: string
  fileId: string
  shapes: any[]
  frame: any
  from: string
  libraries: any
  shareId?: string
  objects: any
  colorSpace?: string
}

export const Attributes: React.FC<AttributesProps> = ({
  pageId,
  fileId,
  shapes,
  frame,
  from,
  libraries,
  shareId,
  objects,
  colorSpace,
}) => {
  const memoizedShapes = useEqualMemo(shapes)
  const firstShape = memoizedShapes[0]

  const data = libraries?.get(fileId)?.data
  const firstComponent = ctkl.getComponent(
    data,
    firstShape?.componentId
  )

  const type = useMemo(() => {
    if (
      memoizedShapes.length === 1 &&
      (ctc.isVariantContainer(firstShape) ||
        ctc.isVariant(firstComponent))
    ) {
      return 'variant'
    }

    if (memoizedShapes.length === 1) {
      return firstShape?.type
    }

    return 'multiple'
  }, [memoizedShapes, firstShape, firstComponent])

  const options = typeToOptions[type] || []

  const annotationContent = useMemo(() => {
    if (memoizedShapes.length !== 1) return null
    return ctkl.getComponentAnnotation(firstShape, libraries)
  }, [memoizedShapes, firstShape, libraries])

  return (
    <div
      className={[
        'element-options',
        from === 'workspace' ? 'workspace-element-options' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {options.map((option, idx) => {
        const Component = {
          geometry: GeometryPanel,
          layout: LayoutPanel,
          'layout-element': LayoutElementPanel,
          fill: FillPanel,
          stroke: StrokePanel,
          shadow: ShadowPanel,
          blur: BlurPanel,
          visibility: VisibilityPanel,
          text: TextPanel,
          svg: SvgPanel,
          variant: VariantPanel,
        }[option]

        return Component ? (
          <Component
            key={idx}
            shapes={memoizedShapes}
            colorSpace={colorSpace}
            objects={objects}
            frame={frame}
            from={from}
            libraries={libraries}
            fileId={fileId}
          />
        ) : null
      })}

      {annotationContent && <Annotation content={annotationContent} />}

      <Exports
        shapes={memoizedShapes}
        type={type}
        pageId={pageId}
        fileId={fileId}
        shareId={shareId}
      />
    </div>
  )
}
