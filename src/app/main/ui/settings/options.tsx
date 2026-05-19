// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as ntf from '@main/data/notifications'
import * as du from '@main/data/profile'
import * as refs from '@main/refs'
import * as store from '@main/store'
import * as fm from '@ui/components/forms'
import * as dom from '@util/dom'
import { tr } from '@util/i18n'
import * as i18n from '@util/i18n'
import * as theme from '@util/theme'
import React, { useEffect, useMemo } from 'react'

const schemaOptionsForm = {
  title: 'OptionsForm',
  lang: { optional: true, type: 'string', max: 20 },
  theme: { optional: true, type: 'string', max: 250 },
}

function onSuccess() {
  store.emit(ntf.success(tr('notifications.profile-saved')))
}

function onSubmit(form: any, _event: any) {
  const data = form.cleanData
  store.emit(
    du.updateProfile(data),
    du.persistProfile({ onSuccess })
  )
}

export const OptionsForm: React.FC = () => {
  const profile = refs.profile

  const initial = useMemo(() => {
    const p = profile
    return {
      ...p,
      lang: p?.lang ?? '',
      theme: p?.theme === 'default' ? 'dark' : (p?.theme ?? 'dark'),
    }
  }, [profile])

  const form = fm.useForm({ schema: schemaOptionsForm, initial })

  return (
    <fm.form
      className="options-form"
      onSubmit={(e) => onSubmit(form, e)}
      form={form}
    >
      <h3>{tr('labels.language')}</h3>

      <div className="fields-row">
        <fm.select
          options={[
            { label: 'Auto (browser)', value: '' },
            ...i18n.supportedLocales.map((l) => ({ label: l, value: l })),
          ]}
          label={tr('dashboard.select-ui-language')}
          default=""
          name="lang"
          data-testid="setting-lang"
        />
      </div>

      <h3>{tr('dashboard.theme-change')}</h3>
      <div className="fields-row">
        <fm.select
          label={tr('dashboard.select-ui-theme')}
          name="theme"
          default={theme.default}
          options={[
            { label: tr('dashboard.select-ui-theme.dark'), value: 'dark' },
            { label: tr('dashboard.select-ui-theme.light'), value: 'light' },
            { label: tr('dashboard.select-ui-theme.system'), value: 'system' },
          ]}
          data-testid="setting-theme"
        />
      </div>

      <fm.submitButton
        label={tr('dashboard.update-settings')}
        data-testid="submit-lang-change"
        className="btn-primary"
      />
    </fm.form>
  )
}

export const OptionsPage: React.FC = () => {
  useEffect(() => {
    dom.setHtmlTitle(tr('title.settings.options'))
  }, [])

  return (
    <div className="dashboard-settings">
      <div className="form-container" data-testid="settings-form">
        <h2>{tr('labels.settings')}</h2>
        <OptionsForm />
      </div>
    </div>
  )
}
