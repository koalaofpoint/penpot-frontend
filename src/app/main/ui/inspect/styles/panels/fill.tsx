// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as typesFills from 'app/common/types/fills'
import * as cfg from 'app/config'
import * as cmm from '@ui/inspect/attributes/common'
import { colorPropertiesRow as colorPropertiesRow* } from '@ui/inspect/styles/rows/color-properties-row'
import * as css from '@util/code-gen/style-css'
import { colorToFormatBackground } from '@util/color'
import { str } from 'cuerdas'
import React, { useEffect, useState } from 'react'

function getAppliedTokensInShape(shapeTokens: any, property: string) {
  return shapeTokens?.get(property)
}

function getResolvedToken(shape: any, resolvedTokens: any) {
  const shapeTokens = shape.appliedTokens
  const appliedTokensInShape = getAppliedTokensInShape(shapeTokens, 'fill')
  return appliedTokensInShape
    ? resolvedTokens?.get(appliedTokensInShape)
    : null
}

function hasToken(resolvedToken: any, colorType: any, idx: number): boolean {
  return (
    resolvedToken?.resolvedValue === colorType?.color && idx === 0
  )
}

function generateFillShorthand(shape: any, colorSpace: string) {
  if (!shape?.fills?.length) return ''

  return shape.fills.reduce((acc: string, fill: any) => {
    const color = typesFills.fillToColor(fill)
    const prefix = color?.color || color?.gradient
      ? 'background-color: '
      : 'background-image: '
    let value = ''

    if (color?.color || color?.gradient) {
      value = colorToFormatBackground(color, colorSpace as any)
    } else if (color?.image) {
      value = str("url('", cfg.resolveFileMedia(color.image), "')")
    }

    const fullValue = str(prefix, value, ';')
    return acc === '' ? fullValue : str(acc, ' ', fullValue)
  }, '')
}

interface FillPanelProps {
  shapes: any[]
  resolvedTokens: any
  colorSpace?: string
  onFillShorthand?: (data: { panel: string; property: string }) => void
}

export const FillPanel: React.FC<FillPanelProps> = ({
  shapes,
  resolvedTokens,
  colorSpace,
  onFillShorthand,
}) => {
  const [shorthand, setShorthand] = useState(() =>
    generateFillShorthand(shapes[0], colorSpace ?? 'hex')
  )

  useEffect(() => {
    const newShorthand = generateFillShorthand(shapes[0], colorSpace ?? 'hex')
    setShorthand(newShorthand)
    onFillShorthand?.({ panel: 'fill', property: newShorthand })
  }, [shapes, colorSpace, onFillShorthand])

  return (
    <div className="fill-panel">
      {shapes.map((shape) => (
        <div key={shape.id} className="fill-shape">
          {(shape.fills ?? []).map((fill: any, idx: number) => {
            const property = 'background'
            const colorType = typesFills.fillToColor(fill)
            const propertyName = cmm.getCssRuleHumanized(property)
            const resolvedToken = getResolvedToken(shape, resolvedTokens)
            const hasTokenFlag = hasToken(resolvedToken, colorType, idx)

            return colorType?.color ? (
              <colorPropertiesRow*
                key={idx}
                term={propertyName}
                color={colorType}
                token={hasTokenFlag ? resolvedToken : null}
                format={colorSpace}
                copiable={true}
              />
            ) : (
              <colorPropertiesRow*
                key={idx}
                term={propertyName}
                color={colorType}
                copiable={true}
              />
            )
          })}
        </div>
      ))}
    </div>
  )
}
