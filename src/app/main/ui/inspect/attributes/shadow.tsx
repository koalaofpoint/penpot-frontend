// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { dmGetProp, dmStr } from 'app/common/data/macros'
import { copyButton as copyButton* } from '@ui/components/copy-button'
import { inspectTitleBar as inspectTitleBar* } from '@ui/components/title-bar'
import * as cmm from '@ui/inspect/attributes/common'
import * as css from '@util/code-gen/style-css'
import { formatColorValue } from '@util/code-gen/style-css-formats'
import { tr } from '@util/i18n'
import { str } from 'cuerdas'
import React, { useState } from 'react'

function hasShadow(shape: any): boolean {
  return !!shape.shadow
}

function shadowCopyData(shadow: any): string {
  return css.shadowToCss(shadow)
}

function copyColorData(color: any, format: string): string {
  return formatColorValue(color, { format })
}

interface ShadowBlockProps {
  shadow: any
}

const ShadowBlock: React.FC<ShadowBlockProps> = ({ shadow }) => {
  const [colorFormat, setColorFormat] = useState<'hex' | 'rgb' | 'hsl'>('hex')
  const label = cmm.getCssRuleHumanized(shadow.style)

  return (
    <div className="attributes-shadow-block">
      <div className="shadow-row">
        <div className="global/attr-label">{label}</div>
        <div className="global/attr-value">
          <copyButton* data={shadowCopyData(shadow)} class="color-row-copy-btn">
            <div
              className="button-children"
              title={str(
                tr('workspace.options.shadow-options.offsetx'),
                ' ',
                tr('workspace.options.shadow-options.offsety'),
                ' ',
                tr('workspace.options.shadow-options.blur'),
                ' ',
                tr('workspace.options.shadow-options.spread')
              )}
            >
              {str(shadow.offsetX, 'px')}
              {' '}
              {str(shadow.offsetY, 'px')}
              {' '}
              {str(shadow.blur, 'px')}
              {' '}
              {str(shadow.spread, 'px')}
            </div>
          </copyButton*>
        </div>
      </div>

      <cmm.colorRow
        color={shadow.color}
        format={colorFormat}
        copyData={copyColorData(shadow.color, colorFormat)}
        onChangeFormat={setColorFormat}
      />
    </div>
  )
}

interface ShadowPanelProps {
  shapes: any[]
}

export const ShadowPanel: React.FC<ShadowPanelProps> = ({ shapes }) => {
  const filteredShapes = shapes.filter(hasShadow)

  if (!filteredShapes.length) return null

  return (
    <div className="attributes-block">
      <inspectTitleBar*
        title={tr('inspect.attributes.shadow')}
        class="title-wrapper"
        titleClass="shadow-attr-title"
      />

      <div className="attributes-content">
        {filteredShapes.map((shape) =>
          shape.shadow.map((shadow: any, idx: number) => (
            <ShadowBlock
              key={dmStr('block-', shape.id, '-shadow', idx)}
              shape={shape}
              shadow={shadow}
            />
          ))
        )}
      </div>
    </div>
  )
}
