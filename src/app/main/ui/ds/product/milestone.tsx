// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as sm from 'app/common/schema'
import * as ct from 'app/common/time'
import { schemaProfile } from 'app/common/types/profile'
import { iconButton as icon-button* } from '@ui/ds/buttons/icon-button'
import { input as input* } from '@ui/ds/controls/input'
import { icon as icon*, iconList } from '@ui/ds/foundations/assets/icon'
import * as t from '@ui/ds/foundations/typography'
import { text as text* } from '@ui/ds/foundations/typography/text'
import { avatar as avatar* } from '@ui/ds/product/avatar'
import { tr } from '@util/i18n'
import React from 'react'

interface MilestoneProps {
  className?: string
  active?: boolean
  editing?: boolean
  locked?: boolean
  profile?: any
  label: string
  createdAt: ct.Inst
  onOpenMenu?: () => void
  onFocusInput?: () => void
  onBlurInput?: () => void
  onKeyDownInput?: () => void
}

export const Milestone: React.FC<MilestoneProps> = ({
  class: className,
  active,
  editing,
  locked,
  profile,
  label,
  createdAt,
  onOpenMenu,
  onFocusInput,
  onBlurInput,
  onKeyDownInput,
}) => {
  const classStr = [
    'milestone',
    active ? 'is-selected' : '',
  ].filter(Boolean).join(' ')

  const resolvedCreatedAt = ct.inst(createdAt)

  return (
    <div className={classStr} data-testid="milestone">
      <avatar* profile={profile} variant="S" className="avatar" />

      {editing ? (
        <input*
          className="name-input"
          variant="seamless"
          defaultValue={label}
          autoFocus={true}
          onFocus={onFocusInput}
          onBlur={onBlurInput}
          onKeyDown={onKeyDownInput}
        />
      ) : (
        <div className="name-wrapper">
          <text* as="span" typography={t.bodySmall} className="name">
            {label}
          </text*>
          {locked && (
            <icon* iconId={iconList.lock} className="lock-icon" />
          )}
        </div>
      )}

      <time
        dateTime={ct.formatInst(resolvedCreatedAt, 'iso')}
        className="date"
      >
        {ct.timeago(resolvedCreatedAt)}
      </time>

      <div className="milestone-buttons">
        <icon-button*
          className="menu-button"
          variant="ghost"
          icon={iconList.menu}
          aria-label={tr('workspace.versions.version-menu')}
          onClick={onOpenMenu}
        />
      </div>
    </div>
  )
}
