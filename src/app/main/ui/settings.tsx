// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as sc from '@main/data/dashboard/shortcuts'
import * as refs from '@main/refs'
import * as rt from '@main/router'
import * as store from '@main/store'
import { useShortcuts } from '@ui/hooks'
import { modalContainer as modalContainer* } from '@ui/modal'
import { accessTokensPage } from '@ui/settings/access-tokens'
import { changeEmail } from '@ui/settings/change-email'
import { deleteAccount } from '@ui/settings/delete-account'
import { feedbackPage as feedbackPage* } from '@ui/settings/feedback'
import { notificationsPage as notificationsPage* } from '@ui/settings/notifications'
import { optionsPage } from '@ui/settings/options'
import { passwordPage } from '@ui/settings/password'
import { profilePage } from '@ui/settings/profile'
import { sidebar } from '@ui/settings/sidebar'
import { subscriptionPage as subscriptionPage* } from '@ui/settings/subscription'
import { tr } from '@util/i18n'
import React, { useEffect } from 'react'

const Header: React.FC = () => (
  <header className="dashboard-header" data-testid="dashboard-header">
    <div className="dashboard-title">
      <h1 data-testid="account-title">{tr('dashboard.your-account-title')}</h1>
    </div>
  </header>
)

interface SettingsProps {
  route: any
  type?: string
  errorReportId?: string
  errorHref?: string
}

export const Settings: React.FC<SettingsProps> = ({
  route,
  type,
  errorReportId,
  errorHref,
}) => {
  const section = route?.data?.name
  const profile = refs.profile

  useShortcuts('dashboard', sc.shortcuts)

  useEffect(() => {
    if (profile === null) {
      store.emit(rt.assignException({ type: 'authentication' }))
    }
  }, [profile])

  return (
    <>
      <modalContainer* />
      <section className="dashboard-layout-refactor dashboard">
        <sidebar profile={profile} section={section} />

        <div className="dashboard-content">
          <Header />
          <section className="dashboard-container">
            {section === 'settings-profile' && <profilePage />}

            {section === 'settings-feedback' && (
              <feedbackPage*
                type={type}
                errorReportId={errorReportId}
                errorHref={errorHref}
              />
            )}

            {section === 'settings-password' && <passwordPage />}

            {section === 'settings-options' && <optionsPage />}

            {section === 'settings-subscription' && (
              <subscriptionPage* profile={profile} />
            )}

            {section === 'settings-access-tokens' && <accessTokensPage />}

            {section === 'settings-notifications' && (
              <notificationsPage* profile={profile} />
            )}
          </section>
        </div>
      </section>
    </>
  )
}

export const SettingsPage: React.FC<any> = (props) => <Settings {...props} />
