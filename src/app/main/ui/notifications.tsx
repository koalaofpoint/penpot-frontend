// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as ntf from '@main/data/notifications'
import * as store from '@main/store'
import { toast as toast* } from '@ui/ds/notifications/toast'
import { contextNotification as contextNotification* } from '@ui/notifications/context-notification'
import { inlineNotification as inlineNotification* } from '@ui/notifications/inline-notification'
import { derived } from 'okulary/core'
import React, { useCallback, useState } from 'react'

const refNotification = derived('notification', (state) => state.notification, store.state)

export const CurrentNotification: React.FC = () => {
  const notification = refNotification
  const onClose = useCallback(() => store.emit(ntf.hide()), [])

  const actionable = notification &&
    notification.timeout === null &&
    notification.actions === null

  const isInline =
    notification?.type === 'inline' ||
    notification?.position === 'floating'

  const isToast =
    notification?.type === 'toast' ||
    notification?.timeout !== null

  const content = notification?.content ?? ''

  const [showDetail, setShowDetail] = useState(false)

  const handleToggleDetail = useCallback(
    () => setShowDetail((prev) => !prev),
    []
  )

  if (!notification) return null

  if (isToast) {
    return (
      <toast*
        level={notification.level ?? 'info'}
        type={notification.type}
        detail={notification.detail}
        onClose={onClose}
        showDetail={showDetail}
        onToggleDetail={handleToggleDetail}
      >
        {content}
      </toast*>
    )
  }

  if (isInline) {
    return (
      <inlineNotification*
        accept={notification.accept}
        cancel={notification.cancel}
        links={notification.links}
        content={notification.content}
      />
    )
  }

  if (actionable) {
    return (
      <contextNotification*
        level={notification.level ?? 'info'}
        links={notification.links}
        content={notification.content}
      />
    )
  }

  return (
    <toast*
      level={notification.level ?? 'info'}
      type={notification.type}
      detail={notification.detail}
      onClose={onClose}
    >
      {content}
    </toast*>
  )
}
