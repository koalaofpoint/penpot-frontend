// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { dmGetProp, dmStr } from 'app/common/data/macros'
import * as cmm from '@ui/inspect/attributes/common'
import { propertiesRow as propertiesRow* } from '@ui/inspect/styles/rows/properties-row'
import * as css from '@util/code-gen/style-css'
import React, { useEffect, useState } from 'react'

const properties = [
  'width',
  'height',
  'left',
  'top',
  'border-start-start-radius',
  'border-start-end-radius',
  'border-end-start-radius',
  'border-end-end-radius',
  'transform',
]

const shapePropToBorderRadiusProp = {
  'border-start-start-radius': 'r1',
  'border-start-end-radius': 'r2',
  'border-end-start-radius': 'r3',
  'border-end-end-radius': 'r4',
} as const

function hasBorderRadius(shape: any): boolean {
  const radiusKeys = ['r1', 'r2', 'r3', 'r4']
  return radiusKeys.some(
    (key) => shape?.has(key) && shape.get(key) !== 0
  )
}

function getAppliedTokensInShape(shapeTokens: any, property: string) {
  const borderProp = shapePropToBorderRadiusProp[property]
  return borderProp
    ? shapeTokens?.get(borderProp)
    : shapeTokens?.get(property)
}

function getResolvedToken(
  property: string,
  shape: any,
  resolvedTokens: any
) {
  const shapeTokens = shape.appliedTokens
  const appliedTokensInShape = getAppliedTokensInShape(shapeTokens, property)
  return appliedTokensInShape
    ? resolvedTokens?.get(appliedTokensInShape)
    : null
}

function generateGeometryShorthand(shapes: any[], objects: any) {
  if (shapes.length === 1 && hasBorderRadius(shapes[0])) {
    return css.getCssProperty(objects, shapes[0], 'border-radius')
  }
  return ''
}

interface GeometryPanelProps {
  shapes: any[]
  objects: any
  resolvedTokens: any
  onGeometryShorthand?: (data: { panel: string; property: string }) => void
}

export const GeometryPanel: React.FC<GeometryPanelProps> = ({
  shapes,
  objects,
  resolvedTokens,
  onGeometryShorthand,
}) => {
  const [shorthand, setShorthand] = useState(() =>
    generateGeometryShorthand(shapes, objects)
  )

  useEffect(() => {
    const newShorthand = generateGeometryShorthand(shapes, objects)
    setShorthand(newShorthand)
    onGeometryShorthand?.({ panel: 'geometry', property: newShorthand })
  }, [shapes, objects, onGeometryShorthand])

  return (
    <div className="geometry-panel">
      {shapes.map((shape) => (
        <div key={shape.id} className="geometry-shape">
          {properties.map((property) => {
            const value = css.getCssValue(objects, shape, property)
            if (!value) return null

            const propertyName = cmm.getCssRuleHumanized(property)
            const resolvedToken = getResolvedToken(
              property,
              shape,
              resolvedTokens
            )
            const propertyValue = resolvedToken
              ? ''
              : css.getCssProperty(objects, shape, property)

            return (
              <propertiesRow*
                key={dmStr('geometry-property-', property)}
                term={propertyName}
                detail={value}
                token={resolvedToken}
                property={propertyValue}
                copiable={true}
              />
            )
          })}
        </div>
      ))}
    </div>
  )
}
