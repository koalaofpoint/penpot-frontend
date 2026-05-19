// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { dmStr } from 'app/common/data/macros'
import { iconButton as icon-button* } from '@ui/ds/buttons/icon-button'
import { icon as icon*, iconList } from '@ui/ds/foundations/assets/icon'
import { tr } from '@util/i18n'
import React from 'react'

const iconsByLevel = (level: string) => {
  switch (level) {
    case 'info':
      return iconList.info
    case 'default':
      return iconList.info
    case 'warning':
      return iconList.msgNeutral
    case 'error':
      return iconList.deleteText
    case 'success':
      return iconList.statusTick
    default:
      return iconList.info
  }
}

interface NotificationPillProps {
  level: 'default' | 'info' | 'warning' | 'error' | 'success'
  type: 'toast' | 'context'
  appearance?: 'neutral' | 'ghost'
  isHtml?: boolean
  showDetail?: boolean
  onToggleDetail?: () => void
  detail?: React.ReactNode
  children?: React.ReactNode
}

export const NotificationPill: React.FC<NotificationPillProps> = ({
  level,
  type,
  appearance,
  isHtml = false,
  detail,
  showDetail,
  onToggleDetail,
  children,
}) => {
  const className = [
    appearance === 'neutral' ? 'appearance-neutral' : '',
    appearance === 'ghost' ? 'appearance-ghost' : '',
    detail ? 'with-detail' : '',
    type === 'toast' ? 'type-toast' : '',
    type === 'context' ? 'type-context' : '',
    level === 'default' ? 'level-default' : '',
    level === 'warning' ? 'level-warning' : '',
    level === 'error' ? 'level-error' : '',
    level === 'success' ? 'level-success' : '',
    level === 'info' ? 'level-info' : '',
  ].filter(Boolean).join(' ')

  const iconId = iconsByLevel(level)

  return (
    <div className={dmStr(className, ' ', 'notification-pill')}>
      <div className="error-message">
        <icon* iconId={iconId} className="icon" />
        {isHtml ? (
          <div
            className="context-text"
            dangerouslySetInnerHTML={{ __html: children as string }}
          />
        ) : (
          children
        )}
      </div>

      {detail && (
        <div className="error-detail">
          <div className="error-detail-title">
            <icon-button*
              icon={showDetail ? 'arrow-down' : 'arrow'}
              aria-label={tr('workspace.notification-pill.detail')}
              iconClass="expand-icon"
              variant="action"
              onClick={onToggleDetail}
            />
            <div onClick={onToggleDetail}>
              {tr('workspace.notification-pill.detail')}
            </div>
          </div>
          {showDetail && (
            <div
              className="error-detail-content"
              dangerouslySetInnerHTML={{ __html: detail as string }}
            />
          )}
        </div>
      )}
    </div>
  )
}
