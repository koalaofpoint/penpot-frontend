// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { dmGetProp, dmStr } from 'app/common/data/macros'
import * as cmm from '@ui/inspect/attributes/common'
import { colorPropertiesRow as colorPropertiesRow* } from '@ui/inspect/styles/rows/color-properties-row'
import { propertiesRow as propertiesRow* } from '@ui/inspect/styles/rows/properties-row'
import * as css from '@util/code-gen/style-css'
import * as scf from '@util/code-gen/style-css-formats'
import React, { useEffect, useState } from 'react'

function getAppliedTokensInShape(shapeTokens: any, property: string) {
  return shapeTokens?.get(property)
}

function getResolvedToken(property: string, shape: any, resolvedTokens: any) {
  const shapeTokens = shape.appliedTokens
  const appliedTokensInShape = getAppliedTokensInShape(shapeTokens, property)
  return appliedTokensInShape
    ? resolvedTokens?.get(appliedTokensInShape)
    : null
}

function generateShadowShorthand(shapes: any[]) {
  if (shapes.length !== 1) return ''

  const shape = shapes[0]
  const shadows = shape.shadow ?? []

  const value = shadows.reduce((acc: string, shadow: any) => {
    const formatted = scf.formatShadowToCss(shadow, {})
    return acc === '' ? formatted : dmStr(acc, ', ', formatted)
  }, '')

  return dmStr('box-shadow: ', value, ';')
}

interface ShadowPanelProps {
  shapes: any[]
  resolvedTokens: any
  colorSpace?: string
  onShadowShorthand?: (data: { panel: string; property: string }) => void
}

export const ShadowPanel: React.FC<ShadowPanelProps> = ({
  shapes,
  resolvedTokens,
  colorSpace,
  onShadowShorthand,
}) => {
  const [shorthand, setShorthand] = useState(() =>
    generateShadowShorthand(shapes)
  )

  useEffect(() => {
    const newShorthand = generateShadowShorthand(shapes)
    setShorthand(newShorthand)
    onShadowShorthand?.({ panel: 'shadow', property: newShorthand })
  }, [shapes, onShadowShorthand])

  return (
    <div className="shadow-panel">
      {shapes.map((shape) => {
        const compositeShadowToken = getResolvedToken('shadow', shape, resolvedTokens)

        return (shape.shadow ?? []).map((shadow: any, idx: number) => {
          const value = dmStr(
            shadow.offsetX,
            'px ',
            shadow.offsetY,
            'px ',
            shadow.blur,
            'px ',
            shadow.spread,
            'px'
          )
          const propertyName = cmm.getCssRuleHumanized(shadow.style)
          const propertyValue = css.shadowToCss(shadow)

          return (
            <div key={dmStr(idx)} className="shadow-shape">
              {compositeShadowToken && (
                <propertiesRow*
                  term="Shadow"
                  detail={compositeShadowToken.name}
                  token={compositeShadowToken}
                  property={compositeShadowToken.name}
                  copiable={true}
                />
              )}
              <colorPropertiesRow*
                term="Shadow Color"
                color={shadow.color}
                format={colorSpace}
                copiable={true}
              />

              <propertiesRow*
                term={propertyName}
                detail={dmStr(value)}
                property={propertyValue}
                copiable={true}
              />
            </div>
          )
        })
      })}
    </div>
  )
}
