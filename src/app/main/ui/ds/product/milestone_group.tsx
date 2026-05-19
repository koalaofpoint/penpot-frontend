// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from 'app/common/data'
import { dmGetProp, dmStr } from 'app/common/data/macros'
import * as sm from 'app/common/schema'
import * as cm from 'app/common/time'
import { iconButton as icon-button* } from '@ui/ds/buttons/icon-button'
import { icon as icon*, iconList } from '@ui/ds/foundations/assets/icon'
import * as t from '@ui/ds/foundations/typography'
import { text as text* } from '@ui/ds/foundations/typography/text'
import { date as date* } from '@ui/ds/utilities/date'
import * as dom from '@util/dom'
import { tr } from '@util/i18n'
import React, { useCallback, useMemo, useState } from 'react'

interface MilestoneGroupProps {
  className?: string
  active?: boolean
  label: string
  snapshots: cm.Inst[]
  onMenuClick?: (index: number, event: React.MouseEvent) => void
}

const schemaMilestoneGroup = sm.schema({
  class: { optional: true, type: 'string' },
  active: { optional: true, type: 'boolean' },
  label: 'string',
  snapshots: { type: 'array', items: cm.inst },
})

export const MilestoneGroup: React.FC<MilestoneGroupProps> = ({
  class: className,
  active,
  label,
  snapshots,
  onMenuClick,
}) => {
  const classStr = d.classCase(
    { milestone: true, 'is-selected': active },
    className
  )

  const [isOpen, setIsOpen] = useState(false)

  const onToggleVisibility = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const handleMenuClick = useCallback(
    (event: React.MouseEvent) => {
      const index = parseInt(
        dom.getData(event.currentTarget as HTMLElement, 'index'),
        10
      )
      onMenuClick?.(index, event)
    },
    [onMenuClick]
  )

  const snapshotList = useMemo(
    () => snapshots.map((date, index) => [date, index]),
    [snapshots]
  )

  return (
    <div className={classStr} data-testid="milestone">
      <text* as="span" typography={t.bodySmall} className="name">
        {label}
      </text*>

      <div className="snapshots">
        <button
          className="toggle-snapshots"
          aria-label={tr('workspace.versions.expand-snapshot')}
          onClick={onToggleVisibility}
        >
          <icon* iconId={iconList.clock} className="icon-clock" />
          <text* as="span" typography={t.bodyMedium} className="toggle-message">
            {tr('workspace.versions.autosaved.entry', snapshots.length)}
          </text*>
          <icon*
            iconId={iconList.arrow}
            className={d.classCase({ 'icon-arrow': true, 'icon-arrow-toggled': isOpen })}
          />
        </button>

        {isOpen &&
          snapshotList.map(([date, index]) => (
            <div key={dmStr('entry-', index)} className="version-entry">
              <date* date={date} className="date" typography={t.bodySmall} />
              <icon-button*
                className="entry-button"
                variant="ghost"
                icon={iconList.menu}
                aria-label={tr('workspace.versions.version-menu')}
                dataIndex={index}
                onClick={handleMenuClick}
              />
            </div>
          ))}
      </div>
    </div>
  )
}
