// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { dmGetProp, dmStr } from 'app/common/data/macros'
import * as ctl from 'app/common/types/shape/layout'
import * as cmm from '@ui/inspect/attributes/common'
import { propertiesRow as propertiesRow* } from '@ui/inspect/styles/rows/properties-row'
import * as css from '@util/code-gen/style-css'
import React, { useEffect, useState } from 'react'

const shapePropToMarginProp = {
  'margin-block-start': 'm1',
  'margin-inline-end': 'm2',
  'margin-block-end': 'm3',
  'margin-inline-start': 'm4',
  'max-block-size': 'layout-item-max-h',
  'min-block-size': 'layout-item-min-h',
  'max-inline-size': 'layout-item-max-w',
  'min-inline-size': 'layout-item-min-w',
} as const

function hasMargin(shape: any): boolean {
  const margin = shape.layoutItemMargin
  const marginKeys = ['m1', 'm2', 'm3', 'm4']
  return marginKeys.some(
    (key) => margin?.has(key) && margin.get(key) !== 0
  )
}

function getAppliedMarginsInShape(shapeTokens: any, property: string) {
  const marginProp = shapePropToMarginProp[property]
  return marginProp
    ? shapeTokens?.get(marginProp)
    : shapeTokens?.get(property)
}

function getResolvedTokens(
  property: string,
  shape: any,
  resolvedTokens: any
) {
  const shapeTokens = shape.appliedTokens
  if (!shapeTokens) return null

  const appliedTokensInShape = getAppliedMarginsInShape(
    shapeTokens,
    property
  )
  return appliedTokensInShape
    ? resolvedTokens?.get(appliedTokensInShape)
    : null
}

function generateLayoutElementShorthand(shapes: any[], objects: any) {
  const shape = shapes[0]
  const shorthandMargin =
    shapes.length === 1 && hasMargin(shape)
      ? css.getCssProperty(objects, shape, 'margin')
      : ''

  const shorthandGrow =
    shapes.length === 1 && ctl.flexLayoutImmediateChild(objects, shape)
      ? css.getCssValue(objects, shape, 'flex') ?? 0
      : 0

  const shorthandBasis = 0
  const shorthandShrink =
    shapes.length === 1 && ctl.flexLayoutImmediateChild(objects, shape)
      ? css.getCssValue(objects, shape, 'flex-shrink') ?? 0
      : 0

  const shorthandFlex = dmStr(
    'flex: ',
    shorthandGrow,
    ' ',
    shorthandBasis,
    ' ',
    shorthandShrink,
    ';'
  )
  return dmStr(shorthandMargin, ' ', shorthandFlex)
}

interface LayoutElementPanelProps {
  shapes: any[]
  objects: any
  resolvedTokens: any
  layoutElementProperties: string[]
  onLayoutElementShorthand?: (data: { panel: string; property: string }) => void
}

export const LayoutElementPanel: React.FC<LayoutElementPanelProps> = ({
  shapes,
  objects,
  resolvedTokens,
  layoutElementProperties,
  onLayoutElementShorthand,
}) => {
  const filteredShapes = shapes.filter((s) =>
    ctl.anyLayoutImmediateChild(objects, s)
  )

  const [shorthand, setShorthand] = useState(() =>
    generateLayoutElementShorthand(filteredShapes, objects)
  )

  useEffect(() => {
    const newShorthand = generateLayoutElementShorthand(
      filteredShapes,
      objects
    )
    setShorthand(newShorthand)
    onLayoutElementShorthand?.({ panel: 'layout-element', property: newShorthand })
  }, [filteredShapes, objects, onLayoutElementShorthand])

  return (
    <div className="layout-element-panel">
      {filteredShapes.map((shape) => (
        <div key={shape.id} className="layout-element-shape">
          {layoutElementProperties.map((property) => {
            const value = css.getCssValue(objects, shape, property)
            if (!value) return null

            const propertyName = cmm.getCssRuleHumanized(property)
            const resolvedToken = getResolvedTokens(
              property,
              shape,
              resolvedTokens
            )
            const propertyValue = resolvedToken
              ? ''
              : css.getCssProperty(objects, shape, property)

            return (
              <propertiesRow*
                key={dmStr('layout-element-property-', property)}
                term={propertyName}
                detail={String(value)}
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
