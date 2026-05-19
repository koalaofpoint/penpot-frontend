// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from 'app/common/data'
import * as typesFills from 'app/common/types/fills'
import * as cfg from 'app/config'
import { inspectTitleBar as inspectTitleBar* } from '@ui/components/title-bar'
import { colorRow } from '@ui/inspect/attributes/common'
import * as css from '@util/code-gen/style-css'
import { tr } from '@util/i18n'
import React, { useState } from 'react'

const properties = ['background', 'background-color', 'background-image']

function hasFill(shape: any): boolean {
  return (
    !['text', 'group'].includes(shape.type) &&
    (shape.fillColor || shape.fillColorGradient || (shape.fills?.length ?? 0) > 0)
  )
}

interface FillBlockProps {
  objects: any
  shape: any
}

const FillBlock: React.FC<FillBlockProps> = ({ objects, shape }) => {
  const [format, setFormat] = useState<'hex' | 'rgb' | 'hsl'>('hex')
  const color = typesFills.fillToColor(shape)

  return (
    <div className="attributes-fill-block">
      <colorRow
        color={color}
        format={format}
        property="Background"
        onChangeFormat={setFormat}
        copyData={css.getShapePropertiesCss(objects, { fills: [shape] }, properties, { format })}
      />
    </div>
  )
}

interface FillBlockStylesProps {
  objects: any
  shape: any
  colorSpace?: string
}

const FillBlockStyles: React.FC<FillBlockStylesProps> = ({
  objects,
  shape,
  colorSpace,
}) => {
  const color = typesFills.fillToColor(shape)
  const format = d.nilv(colorSpace?.toLowerCase() === 'keyword' ? 'hex' : colorSpace, 'hex')

  return (
    <div className="attributes-fill-block">
      <colorRow
        color={color}
        property="Background"
        format={format}
        copyData={css.getShapePropertiesCss(objects, { fills: [shape] }, properties, { format: colorSpace as any })}
      />
    </div>
  )
}

interface FillPanelProps {
  shapes: any[]
  colorSpace?: string
}

export const FillPanel: React.FC<FillPanelProps> = ({ shapes, colorSpace }) => {
  const filteredShapes = shapes.filter(hasFill)

  if (filteredShapes.length === 0) return null

  return (
    <div className="attributes-block">
      <inspectTitleBar*
        title={tr('inspect.attributes.fill')}
        className="title-wrapper"
        classTitle="fill-attr-title"
      />

      <div className="attributes-content">
        {filteredShapes.map((shape) => {
          if (cfg.flags.has('inspect-styles')) {
            if (shape.fills?.length) {
              return shape.fills.map((fill: any, index: number) => (
                <FillBlockStyles
                  key={`fill-block-${shape.id}${fill}`}
                  colorSpace={colorSpace}
                  shape={fill}
                />
              ))
            }
            return (
              <FillBlockStyles
                key={`fill-block-only${shape.id}`}
                colorSpace={colorSpace}
                shape={shape}
              />
            )
          }

          if (shape.fills?.length) {
            return shape.fills.map((fill: any, index: number) => (
              <FillBlock
                key={`fill-block-${shape.id}${fill}`}
                shape={fill}
              />
            ))
          }
          return (
            <FillBlock
              key={`fill-block-only${shape.id}`}
              shape={shape}
            />
          )
        })}
      </div>
    </div>
  )
}
