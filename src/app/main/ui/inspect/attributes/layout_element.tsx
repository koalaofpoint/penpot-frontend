// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from 'app/common/data'
import { dmGetProp, dmStr } from 'app/common/data/macros'
import * as ctl from 'app/common/types/shape/layout'
import { copyButton as copyButton* } from '@ui/components/copy-button'
import { titleBar as titleBar* } from '@ui/components/title-bar'
import * as cmm from '@ui/inspect/attributes/common'
import * as css from '@util/code-gen/style-css'
import React, { useMemo } from 'react'

const properties = [
  'margin',
  'max-height',
  'min-height',
  'max-width',
  'min-width',
  'align-self',
  'justify-self',
  'flex-shrink',
  'flex',
  'grid-column',
  'grid-row',
]

interface LayoutElementBlockProps {
  objects: any
  shape: any
}

const LayoutElementBlock: React.FC<LayoutElementBlockProps> = ({
  objects,
  shape,
}) => (
  <>
    {properties.map((property) => {
      const value = css.getCssValue(objects, shape, property)
      if (!value) return null

      const propertyName = cmm.getCssRuleHumanized(property)
      return (
        <div
          key={dmStr('layout-element-', shape.id, '-', d.name(property))}
          className="layout-element-row"
        >
          <div className="global/attr-label">{propertyName}</div>
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

interface LayoutElementPanelProps {
  objects: any
  shapes: any[]
}

export const LayoutElementPanel: React.FC<LayoutElementPanelProps> = ({
  objects,
  shapes,
}) => {
  const filteredShapes = shapes.filter((s) =>
    ctl.anyLayoutImmediateChild(objects, s)
  )

  const onlyFlex = filteredShapes.every((s) =>
    ctl.flexLayoutImmediateChild(objects, s)
  )
  const onlyGrid = filteredShapes.every((s) =>
    ctl.gridLayoutImmediateChild(objects, s)
  )

  const someLayoutProp = filteredShapes.some((shape) =>
    properties.some((p) => css.getCssValue(objects, shape, p))
  )

  const menuTitle = onlyFlex
    ? 'Flex element'
    : onlyGrid
    ? 'Flex element'
    : 'Layout element'

  if (!someLayoutProp) return null

  return (
    <div className="attributes-block">
      <titleBar*
        collapsable={false}
        title={menuTitle}
        class="title-wrapper"
        titleClass="layout-element-attr-title"
      >
        {filteredShapes.length === 1 && (
          <copyButton*
            data={css.getShapePropertiesCss(objects, filteredShapes[0], properties)}
            class="copy-btn-title"
          />
        )}
      </titleBar*>

      {filteredShapes.map((shape) => (
        <LayoutElementBlock
          key={shape.id}
          shape={shape}
          objects={objects}
        />
      ))}
    </div>
  )
}
