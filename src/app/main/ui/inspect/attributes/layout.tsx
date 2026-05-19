// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from 'app/common/data'
import { dmStr } from 'app/common/data/macros'
import * as ctl from 'app/common/types/shape/layout'
import { copyButton as copyButton* } from '@ui/components/copy-button'
import { inspectTitleBar as inspectTitleBar* } from '@ui/components/title-bar'
import * as cmm from '@ui/inspect/attributes/common'
import * as css from '@util/code-gen/style-css'
import React, { useMemo } from 'react'

const properties = [
  'display',
  'flex-direction',
  'flex-wrap',
  'grid-template-rows',
  'grid-template-columns',
  'align-items',
  'align-content',
  'justify-items',
  'justify-content',
  'row-gap',
  'column-gap',
  'gap',
  'padding-inline-start',
  'padding-inline-end',
  'padding-block-start',
  'padding-block-end',
]

interface LayoutBlockProps {
  objects: any
  shape: any
}

const LayoutBlock: React.FC<LayoutBlockProps> = ({ objects, shape }) => (
  <>
    {properties.map((property) => {
      const value = css.getCssValue(objects, shape, property)
      if (!value) return null

      const propertyName = cmm.getCssRuleHumanized(property)
      return (
        <div
          key={dmStr('layout-', shape.id, '-', d.name(property))}
          className="layout-row"
        >
          <div title={propertyName} className="global/attr-label">
            {propertyName}
          </div>
          <div className="global/attr-value">
            <copyButton* data={css.getCssProperty(objects, shape, property)}>
              <div className="button-children">{value}</div>
            </copyButton*>
          </div>
        </div>
      )
    })}
  </>
)

interface LayoutPanelProps {
  objects: any
  shapes: any[]
}

export const LayoutPanel: React.FC<LayoutPanelProps> = ({ objects, shapes }) => {
  const filteredShapes = shapes.filter((s) => ctl.anyLayout(s))

  if (!filteredShapes.length) return null

  return (
    <div className="attributes-block">
      <inspectTitleBar*
        title="Layout"
        class="title-wrapper"
        titleClass="layout-attr-title"
      >
        {filteredShapes.length === 1 && (
          <copyButton*
            data={css.getShapePropertiesCss(
              objects,
              filteredShapes[0],
              properties
            )}
            class="copy-btn-title"
          />
        )}
      </inspectTitleBar*>

      {filteredShapes.map((shape) => (
        <LayoutBlock key={shape.id} shape={shape} objects={objects} />
      ))}
    </div>
  )
}
