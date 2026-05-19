// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from 'app/common/data'
import { dmStr } from 'app/common/data/macros'
import * as lb from '@ui/components/link-button'
import * as deprecatedIcon from '@ui/icons'
import React from 'react'

const neutralIcon = deprecatedIcon.iconXref('msg-neutral', 'icon')
const errorIcon = deprecatedIcon.iconXref('delete-text', 'icon')
const successIcon = deprecatedIcon.iconXref('status-tick', 'icon')
const infoIcon = deprecatedIcon.iconXref('help', 'icon')

function getIconByLevel(level: string) {
  switch (level) {
    case 'warning':
      return neutralIcon
    case 'error':
      return errorIcon
    case 'success':
      return successIcon
    case 'info':
      return infoIcon
    default:
      return neutralIcon
  }
}

interface ContextNotificationProps {
  level?: 'warning' | 'error' | 'success' | 'info'
  content?: string
  links?: Array<{
    label: string
    callback: () => void
  }>
  isHtml?: boolean
  className?: string
}

export const ContextNotification: React.FC<ContextNotificationProps> = ({
  level = 'warning',
  content = '',
  links,
  isHtml = false,
  className,
}) => {
  const classStr = [
    className,
    '',
    'context-notification',
    isHtml ? 'contain-html' : '',
    level === 'warning' ? 'warning' : '',
    level === 'error' ? 'error' : '',
    level === 'success' ? 'success' : '',
    level === 'info' ? 'info' : '',
  ].filter(Boolean).join(' ')

  return (
    <aside className={classStr}>
      {getIconByLevel(level)}

      <div
        className="context-text"
        dangerouslySetInnerHTML={isHtml ? { __html: content } : undefined}
      >
        {!isHtml && (
          <>
            {content}
            {links?.map((link, index) => (
              <lb.linkButton
                key={dmStr('link-', index)}
                class="link"
                onClick={link.callback}
                value={link.label}
              />
            ))}
          </>
        )}
      </div>
    </aside>
  )
}
