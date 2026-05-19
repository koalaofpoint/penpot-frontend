// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from 'app/common/data'
import * as sm from 'app/common/schema'
import * as dp from '@main/data/profile'
import * as store from '@main/store'
import * as fm from '@ui/components/forms'
import * as dom from '@util/dom'
import { tr } from '@util/i18n'
import React, { useEffect, useMemo } from 'react'

const defaultNotificationSettings = {
  'dashboard-comments': 'all',
  'email-comments': 'partial',
  'email-invites': 'all',
}

function onSubmit(form: any, _event: any) {
  const params = form.cleanData
  store.emit(dp.updateNotifications(params))
}

const schemaNotificationsForm = {
  title: 'NotificationsForm',
  'dashboard-comments': sm.oneOf(['all', 'partial', 'none']),
  'email-comments': sm.oneOf(['all', 'partial', 'none']),
  'email-invites': sm.oneOf(['all', 'partial', 'none']),
}

interface NotificationsPageProps {
  profile: any
}

export const NotificationsPage: React.FC<NotificationsPageProps> = ({
  profile,
}) => {
  const settings = useMemo(() => {
    return d.updateVals(
      { ...defaultNotificationSettings, ...profile?.props?.notifications },
      d.name
    )
  }, [profile])

  const form = fm.useForm({ schema: schemaNotificationsForm, initial: settings })

  useEffect(() => {
    dom.setHtmlTitle(tr('title.settings.notifications'))
  }, [])

  return (
    <section className="notifications-page">
      <fm.form
        className="notifications-form"
        onSubmit={(e) => onSubmit(form, e)}
        form={form}
      >
        <div className="form-container">
          <h2>{tr('dashboard.settings.notifications.title')}</h2>
          <h3>{tr('dashboard.settings.notifications.dashboard.title')}</h3>
          <h4>{tr('dashboard.settings.notifications.dashboard-comments.title')}</h4>
          <div className="fields-row">
            <fm.radioButtons
              options={[
                { label: tr('dashboard.settings.notifications.dashboard-comments.all'), value: 'all' },
                { label: tr('dashboard.settings.notifications.dashboard-comments.partial'), value: 'partial' },
                { label: tr('dashboard.settings.notifications.dashboard-comments.none'), value: 'none' },
              ]}
              name="dashboard-comments"
              className="radio-btns"
            />
          </div>

          <h3>{tr('dashboard.settings.notifications.email.title')}</h3>
          <h4>{tr('dashboard.settings.notifications.email-comments.title')}</h4>
          <div className="fields-row">
            <fm.radioButtons
              options={[
                { label: tr('dashboard.settings.notifications.email-comments.all'), value: 'all' },
                { label: tr('dashboard.settings.notifications.email-comments.partial'), value: 'partial' },
                { label: tr('dashboard.settings.notifications.email-comments.none'), value: 'none' },
              ]}
              name="email-comments"
              className="radio-btns"
            />
          </div>

          <h4>{tr('dashboard.settings.notifications.email-invites.title')}</h4>
          <div className="fields-row">
            <fm.radioButtons
              options={[
                { label: tr('dashboard.settings.notifications.email-invites.all'), value: 'all' },
                { label: tr('dashboard.settings.notifications.email-invites.none'), value: 'none' },
              ]}
              name="email-invites"
              className="radio-btns"
            />
          </div>

          <fm.submitButton
            label={tr('dashboard.settings.notifications.submit')}
            data-testid="submit-settings"
            className="update-btn"
          />
        </div>
      </fm.form>
    </section>
  )
}
