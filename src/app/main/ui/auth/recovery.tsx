// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as sm from 'app/common/schema'
import * as ntf from '@main/data/notifications'
import * as du from '@main/data/profile'
import * as rt from '@main/router'
import * as store from '@main/store'
import * as fm from '@ui/components/forms'
import { tr } from '@util/i18n'
import React, { useCallback } from 'react'

const schemaRecoveryForm = {
  title: 'RecoveryForm',
  token: sm.text,
  'password-1': sm.password,
  'password-2': sm.password,
  __validation: {
    errorCode: 'errors.password-invalid-confirmation',
    errorField: 'password-2',
    fn: ({ 'password-1': password1, 'password-2': password2 }: any) =>
      password1 === password2,
  },
}

function onError() {
  store.emit(ntf.error(tr('errors.invalid-recovery-token')))
}

function onSuccess() {
  store.emit(
    ntf.info(tr('auth.notifications.password-changed-successfully')),
    rt.nav('auth-login')
  )
}

function onSubmit(form: any, _event: any) {
  const mdata = { onError, onSuccess }
  const params = {
    token: form.cleanData.token,
    password: form.cleanData['password-2'],
  }
  store.emit(du.recoverProfile({ ...params, ...mdata }))
}

interface RecoveryFormProps {
  params?: any
}

export const RecoveryForm: React.FC<RecoveryFormProps> = ({ params }) => {
  const form = fm.useForm({ schema: schemaRecoveryForm, initial: params })

  return (
    <fm.form
      onSubmit={(e) => onSubmit(form, e)}
      className="recovery-form"
      form={form}
    >
      <div className="fields-row">
        <fm.input
          type="password"
          name="password-1"
          showSuccess={true}
          label={tr('auth.new-password')}
          className="form-field"
        />
      </div>

      <div className="fields-row">
        <fm.input
          type="password"
          name="password-2"
          showSuccess={true}
          label={tr('auth.confirm-password')}
          className="form-field"
        />
      </div>

      <fm.submitButton
        label={tr('auth.recovery-submit')}
        className="submit-btn"
      />
    </fm.form>
  )
}

interface RecoveryPageProps {
  params?: any
}

export const RecoveryPage: React.FC<RecoveryPageProps> = ({ params }) => {
  return (
    <div className="auth-form-wrapper">
      <h1 className="auth-title">Forgot your password?</h1>
      <div className="auth-subtitle">Please enter your new password</div>
      <hr className="separator" />
      <RecoveryForm params={params} />

      <div className="links">
        <div className="go-back">
          <a
            onClick={() => store.emit(rt.nav('auth-login'))}
            className="go-back-link"
          >
            {tr('profile.recovery.go-to-login')}
          </a>
        </div>
      </div>
    </div>
  )
}
