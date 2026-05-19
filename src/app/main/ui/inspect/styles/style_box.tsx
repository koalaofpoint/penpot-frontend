// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from 'app/common/data'
import { iconButton as icon-button* } from '@ui/ds/buttons/icon-button'
import { icon as icon*, iconList } from '@ui/ds/foundations/assets/icon'
import * as clipboard from '@util/clipboard'
import { tr } from '@util/i18n'
import React, { useCallback, useState } from 'react'

function panelToTitle(type: string): string | null {
  switch (type) {
    case 'variant':
      return tr('inspect.tabs.styles.variants-panel')
    case 'token':
      return tr('inspect.tabs.styles.token-panel')
    case 'geometry':
      return tr('inspect.attributes.size')
    case 'fill':
      return tr('labels.fill')
    case 'stroke':
      return tr('labels.stroke')
    case 'text':
      return tr('labels.text')
    case 'blur':
      return tr('labels.blur')
    case 'shadow':
      return tr('labels.shadow')
    case 'layout':
      return tr('labels.layout')
    case 'flex-element':
      return 'Flex Element'
    case 'grid-element':
      return 'Grid Element'
    case 'layout-element':
      return 'Layout Element'
    case 'visibility':
      return tr('labels.visibility')
    case 'svg':
      return tr('labels.svg')
    default:
      return null
  }
}

interface StyleBoxProps {
  panel: string
  shorthand?: string
  children?: React.ReactNode
}

export const StyleBox: React.FC<StyleBoxProps> = ({
  panel,
  shorthand,
  children,
}) => {
  const [expanded, setExpanded] = useState(true)

  const title = panelToTitle(panel)

  const togglePanel = useCallback(
    () => setExpanded((prev) => !prev),
    []
  )

  const copyShorthand = useCallback(() => {
    if (shorthand) {
      clipboard.toClipboard(String(shorthand))
    }
  }, [shorthand])

  return (
    <article className="style-box">
      <header className="disclosure-header">
        <button
          className="disclosure-button"
          aria-expanded={expanded}
          aria-controls={d.str('style-box-', d.name(panel))}
          onClick={togglePanel}
          aria-label={tr('inspect.tabs.styles.toggle-style', title ?? '')}
        >
          <icon*
            iconId={expanded ? 'arrow-down' : 'arrow'}
            className="disclosure-icon"
            size="s"
          />
        </button>
        <span className="panel-title">{title}</span>
        {shorthand && (
          <icon-button*
            variant="ghost"
            tooltipPlacement="top-left"
            aria-label={tr('inspect.tabs.styles.copy-shorthand')}
            onClick={copyShorthand}
            icon={iconList.clipboard}
          />
        )}
      </header>
      {expanded && (
        <div
          className="style-box-content"
          id={d.str('style-box-', d.name(panel))}
        >
          <div className="style-box-panel-wrapper">{children}</div>
        </div>
      )}
    </article>
  )
}
