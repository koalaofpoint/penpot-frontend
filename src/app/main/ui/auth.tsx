// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { dmGetIn } from 'app/common/data/macros'
import * as da from '@main/data/auth'
import * as store from '@main/store'
import { loginPage } from '@ui/auth/login'
import { recoveryPage } from '@ui/auth/recovery'
import { recoveryRequestPage } from '@ui/auth/recovery-request'
import {
  registerPage as registerPage*,
  registerSuccessPage as registerSuccessPage*,
  registerValidatePage as registerValidatePage*,
  termsRegister as termsRegister*,
} from '@ui/auth/register'
import * as deprecatedIcon from '@ui/icons'
import * as dom from '@util/dom'
import { tr } from '@util/i18n'
import React, { useEffect } from 'react'

interface AuthProps {
  route: any
}

export const Auth: React.FC<AuthProps> = ({ route }) => {
  const section = dmGetIn(route, ['data', 'name'])

  const isRegister =
    section === 'auth-register' ||
    section === 'auth-register-validate' ||
    section === 'register-validate-page' ||
    section === 'auth-register-success'

  const params = route?.queryParams
  const error = params?.error

  useEffect(() => {
    dom.setHtmlTitle(tr('title.default'))
  }, [])

  useEffect(() => {
    if (error) {
      store.emit(da.showRedirectError(error))
    }
  }, [error])

  return (
    <main
      className={[
        'auth-section',
        isRegister ? 'register' : '',
      ].filter(Boolean).join(' ')}
    >
      <h1 className="logo-container">
        <a href="#/" title="Penpot" className="logo-btn">
          {deprecatedIcon.logo}
        </a>
      </h1>
      <div className="login-illustration">
        <img src="images/registration-illustration.png" />
      </div>

      <section className="auth-content">
        {section === 'auth-register' && <registerPage* params={params} />}

        {section === 'auth-register-success' && (
          <registerSuccessPage* params={params} />
        )}

        {section === 'auth-register-validate' && (
          <registerValidatePage* params={params} />
        )}

        {section === 'auth-login' && <loginPage params={params} />}

        {section === 'auth-recovery-request' && <recoveryRequestPage />}

        {section === 'auth-recovery' && <recoveryPage params={params} />}

        {section === 'auth-register' && <termsRegister* />}
      </section>
    </main>
  )
}

export const AuthPage: React.FC<any> = (props) => <Auth {...props} />
