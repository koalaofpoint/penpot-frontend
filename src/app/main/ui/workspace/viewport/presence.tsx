// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { dmGetProp, dmStr } from 'app/common/data/macros'
import * as ct from 'app/common/time'
import * as refs from '@main/refs'
import * as ts from '@util/timers'
import { instMs } from 'app/common/time'
import { ffmt, slice, str } from 'cuerdas'
import React, { useEffect, useState } from 'react'

const pointerPath =
  'M11.58,-0.47L11.47,-0.35L0.34,10.77L0.30,10.96L-0.46,' +
  '15.52L4.29,14.72L15.53,3.47L11.58,-0.47ZL11.58,' +
  '-0.47ZL11.58,-0.47ZM11.58,1.3C12.31,2.05,13.02,' +
  '2.742,13.76,3.47L4.0053,13.23C3.27,12.50,2.55,' +
  '11.78,1.82,11.05L11.58,1.30ZL11.58,1.30ZM1.37,12.15L2.90,' +
  '13.68L1.67,13.89L1.165,13.39L1.37,12.15ZL1.37,12.15Z'

interface SessionCursorProps {
  session: any
  profile: any
  zoom: number
}

const SessionCursor: React.FC<SessionCursorProps> = ({
  session,
  profile,
  zoom,
}) => {
  const point = session.point
  const bgColor = session.color
  const fgColor = 'var(--app-white)'

  const transform = ffmt(
    'translate(%, %) scale(%)',
    dmGetProp(point, 'x'),
    dmGetProp(point, 'y'),
    1 / zoom
  )

  let fullname = profile.fullname
  if (fullname.length > 16) {
    fullname = dmStr(slice(fullname, 0, 12), '...')
  }

  return (
    <g
      className="multiuser-cursor"
      transform={transform}
    >
      <path fill={bgColor} d={pointerPath} />
      <g transform="translate(17 -10)">
        <foreignObject x={-0.3} y={-12.5} width={300} height={120}>
          <div
            className="profile-name"
            style={{ backgroundColor: bgColor, color: fgColor }}
          >
            {fullname}
          </div>
        </foreignObject>
      </g>
    </g>
  )
}

interface ActiveCursorsProps {
  pageId: string
}

export const ActiveCursors: React.FC<ActiveCursorsProps> = ({ pageId }) => {
  const [, setCounter] = useState(0)
  const profiles = refs.profiles
  const sessions = refs.workspacePresence
  const zoom = refs.selectedZoom

  const filteredSessions = sessions
    ? Object.values(sessions)
        .filter((s: any) => s.point)
        .filter((s: any) => s.pageId === pageId)
        .filter(
          (s: any) =>
            5000 >=
            instMs(ct.now()) - instMs(s.updatedAt)
        )
    : []

  useEffect(() => {
    const sem = ts.schedule(1000, () => setCounter((n) => n + 1))
    return () => ts.dispose(sem)
  }, [])

  return (
    <>
      {filteredSessions.map((session: any) => (
        <SessionCursor
          key={session.id}
          session={session}
          zoom={zoom}
          profile={profiles?.[session.profileId]}
        />
      ))}
    </>
  )
}
