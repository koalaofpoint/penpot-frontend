// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from 'app/common/data'
import { dmStr } from 'app/common/data/macros'
import * as deprecatedIcon from '@ui/icons'
import * as array from '@util/array'
import * as dom from '@util/dom'
import { tr } from '@util/i18n'
import { concat, name as nameFn } from 'cuerdas'
import React, { useCallback, useMemo, useState } from 'react'

interface TabElementProps {
  children?: React.ReactNode
}

export const TabElement: React.FC<TabElementProps> = ({ children }) => children

interface TabContainerProps {
  children?: React.ReactNode
  selected?: string
  onChangeTab?: (id: string) => void
  collapsable?: boolean
  handleCollapse?: () => void
  headerClass?: string
  contentClass?: string
}

export const TabContainer: React.FC<TabContainerProps> = ({
  children,
  selected,
  onChangeTab,
  collapsable,
  handleCollapse,
  headerClass = '',
  contentClass = '',
}) => {
  const normalizedChildren = array.withoutNils(
    array.normalizeToArray(children)
  )

  const [selectedState, setSelectedState] = useState(() =>
    selected ?? normalizedChildren[0]?.props?.id
  )

  const resolvedSelected = selected ?? selectedState

  const onClick = useCallback(
    (event: React.MouseEvent) => {
      const id = dom.getData(event.currentTarget as HTMLElement, 'id')
      setSelectedState(id)
      onChangeTab?.(id)
    },
    [onChangeTab]
  )

  return (
    <section className="tab-container">
      <header
        className={dmStr(headerClass, ' ', 'tab-container-tabs')}
      >
        {collapsable && (
          <button
            onClick={handleCollapse}
            className="collapse-sidebar"
            aria-label={tr('workspace.sidebar.collapse')}
          >
            {deprecatedIcon.arrow}
          </button>
        )}
        <div className="tab-container-tab-wrapper">
          {normalizedChildren.map((tab: any) => {
            const props = tab?.props ?? {}
            const id = props.id
            const title = props.title
            const sid = nameFn(id)
            const tooltip = typeof title === 'string' ? title : null

            return (
              <div
                key={concat('tab-', sid)}
                title={tooltip ?? undefined}
                data-id={sid}
                data-testid={sid}
                onClick={onClick}
                className={[
                  'tab-container-tab-title',
                  resolvedSelected === id ? 'current' : '',
                ].filter(Boolean).join(' ')}
              >
                <span className="content">{title}</span>
              </div>
            )
          })}
        </div>
      </header>

      <div className={dmStr(contentClass, ' ', 'tab-container-content')}>
        {normalizedChildren.find(
          (tab: any) => tab?.props?.id === resolvedSelected
        )}
      </div>
    </section>
  )
}
