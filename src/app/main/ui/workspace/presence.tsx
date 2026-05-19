// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from 'app/common/data'
import { dmGetProp, dmStr } from 'app/common/data/macros'
import * as cfg from 'app/config'
import * as refs from '@main/refs'
import * as dom from '@util/dom'
import * as tm from '@util/timers'
import React, { useCallback, useState } from 'react'

interface SessionWidgetProps {
  color: string
  profile: any
  index: number
}

const SessionWidget: React.FC<SessionWidgetProps> = ({
  color,
  profile,
  index,
}) => {
  const profileWithColor = { ...profile, color }
  const fullName = profile.fullname

  return (
    <li
      className="session-icon"
      style={{
        zIndex: dmStr(2 + -1 * index),
        backgroundColor: color,
      }}
      title={fullName}
    >
      <img
        alt={fullName}
        style={{ backgroundColor: color }}
        src={cfg.resolveProfilePhotoUrl(profileWithColor)}
      />
    </li>
  )
}

export const ActiveSessions: React.FC = () => {
  const profiles = refs.profiles
  const presence = refs.workspacePresence

  const sessions = presence ? Object.values(presence) : []
  const numSessions = sessions.length
  const maxAvatarCount = 3
  const avatarCount =
    numSessions === maxAvatarCount
      ? maxAvatarCount
      : maxAvatarCount - 1

  const [isOpen, setIsOpen] = useState(false)
  const openFlag = isOpen && numSessions > maxAvatarCount

  const onOpen = useCallback(() => {
    setIsOpen(true)
    tm.scheduleOnIdle(() => dom.focus(dom.getElement('users-close')))
  }, [])

  const onClose = useCallback(() => setIsOpen(false), [])

  return (
    <>
      {openFlag && (
        <button
          id="users-close"
          className="active-users-opened"
          onClick={onClose}
          onBlur={onClose}
        >
          <ul
            className="active-users-list"
            data-testid="active-users-list"
          >
            {sessions.map((session: any) => (
              <SessionWidget
                key={session.id}
                color={session.color}
                index={0}
                profile={profiles?.[session.profileId]}
              />
            ))}
          </ul>
        </button>
      )}

      <button
        className={['active-users', ''].filter(Boolean).join(' ')}
        onClick={onOpen}
      >
        <ul
          className="active-users-list"
          data-testid="active-users-list"
        >
          {numSessions > maxAvatarCount && (
            <li className="users-num">
              {dmStr('+', 1 + (numSessions - maxAvatarCount))}
            </li>
          )}

          {d.take(avatarCount, sessions).map((session: any, index: number) => (
            <SessionWidget
              key={session.id}
              color={session.color}
              index={index}
              profile={profiles?.[session.profileId]}
            />
          ))}
        </ul>
      </button>
    </>
  )
}
