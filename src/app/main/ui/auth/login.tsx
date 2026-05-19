// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from "react"
import { config } from "../../config"
import * as authData from "../data/auth"
import * as notifications from "../data/notifications"
import * as repo from "../../repo"
import * as router from "../../router"
import * as store from "../../store"
import { ButtonLink } from "../components/button-link"
import * as forms from "../components/forms"
import { Link } from "../components/link"
import { ContextNotification } from "../ds/notifications/context-notification"
import * as deprecatedIcon from "../icons"
import * as dom from "../../util/dom"
import * as i18n from "../../util/i18n"
import * as storage from "../../util/storage"
import { rx } from "beicon"

const showSsoLoginButtons = config.flags.some((flag) =>
  ["login-with-google", "login-with-github", "login-with-gitlab", "login-with-oidc"].includes(flag)
)

function cssClass(classes: Record<string, boolean>): string {
  return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ")
}

interface DemoWarningProps {}

export function DemoWarning(props: DemoWarningProps) {
  return (
    <ContextNotification level="warning">
      {i18n.tr("auth.demo-warning")}
    </ContextNotification>
  )
}

export function createDemoProfile() {
  store.emit(authData.createDemoProfile())
}

function storeLoginRedirect() {
  storage.withSync(() => {
    storage.session.value = { ...storage.session.value, loginRedirect: router.getCurrentHref() }
  })
}

function clearLoginRedirect() {
  storage.withSync(() => {
    const { loginRedirect, ...rest } = storage.session.value
    storage.session.value = rest
  })
}

function loginWithSso(provider: string, params: any) {
  const newParams = { ...params, provider }
  store.emit(authData.loginWithSso(newParams))
}

interface LoginFormProps {
  params?: any
  handleRedirect?: boolean
  onSuccessCallback?: (data: any) => void
  onRecoveryRequest?: () => void
  origin?: "viewer" | string
}

export function LoginForm(props: LoginFormProps) {
  const { params = {}, handleRedirect, onSuccessCallback, onRecoveryRequest, origin } = props
  const initial = React.useMemo(() => params, [params])
  const [error, setError] = React.useState<string | null>(null)
  const form = forms.useForm({
    schema: {
      type: "object",
      title: "LoginForm",
      properties: {
        email: { type: "string", format: "email", errorMessage: "errors.invalid-email" },
        password: { type: "string", minLength: 1 },
        invitationToken: { type: "string", minLength: 1 }
      }
    },
    initial
  })

  const onError = React.useCallback((cause: any) => {
    const causeData = cause?.data || cause

    if (causeData.type === "restriction" && causeData.code === "profile-blocked") {
      setError(i18n.tr("errors.profile-blocked"))
    } else if (causeData.type === "restriction" && causeData.code === "ldap-not-initialized") {
      store.emit(notifications.error(i18n.tr("errors.ldap-disabled")))
    } else if (causeData.type === "restriction" && causeData.code === "admin-only-profile") {
      setError(i18n.tr("errors.profile-blocked"))
    } else if (causeData.type === "validation" && causeData.code === "wrong-credentials") {
      setError(i18n.tr("errors.wrong-credentials"))
    } else if (causeData.type === "validation" && causeData.code === "account-without-password") {
      setError(i18n.tr("errors.wrong-credentials"))
    } else {
      setError(i18n.tr("errors.generic"))
    }
  }, [])

  const [showPasswordField, setShowPasswordField] = React.useState(
    !config.flags.includes("login-with-custom-sso")
  )

  const onSuccess = React.useCallback(
    (data: any) => {
      if (typeof onSuccessCallback === "function") {
        onSuccessCallback(data)
      }
    },
    [onSuccessCallback]
  )

  const onSubmit = React.useCallback(
    (form: any, _event: any) => {
      setError(null)

      const data = form.cleanData

      if (showPasswordField) {
        const mergedParams = { ...params, ...data }
        const metaParams = Object.assign(mergedParams, {
          meta: { onError, onSuccess }
        })
        store.emit(authData.login(metaParams))
      } else {
        const mergedParams = { ...params, ...data }
        repo.cmd!["get-sso-provider"]({ email: mergedParams.email })
          .then((response: any) => response.id)
          .catch(() => null)
          .then((ssoProviderId: string | null) => {
            if (ssoProviderId) {
              store.emit(authData.loginWithSso({ provider: ssoProviderId }))
            } else {
              setShowPasswordField(true)
            }
          })
      }
    },
    [showPasswordField, params, onError, onSuccess]
  )

  const onSubmitLdap = React.useCallback(
    (event: React.FormEvent) => {
      dom.preventDefault(event)
      dom.stopPropagation(event)

      setError(null)
      const data = form.cleanData
      const metaParams = Object.assign(data, {
        meta: { onError, onSuccess }
      })
      store.emit(authData.loginWithLdap(metaParams))
    },
    [form, onError, onSuccess]
  )

  const defaultRecoveryRequest = React.useCallback(
    () => store.emit(router.nav("auth-recovery-request")),
    []
  )

  const recoveryRequestHandler = onRecoveryRequest || defaultRecoveryRequest

  React.useEffect(() => {
    if (handleRedirect) {
      storeLoginRedirect()
    } else {
      clearLoginRedirect()
    }
  }, [handleRedirect])

  return (
    <>
      {error && (
        <ContextNotification level="error">
          {error}
        </ContextNotification>
      )}

      <forms.Form onSubmit={onSubmit} className={cssClass({ "login-form": true })} form={form}>
        <div className={cssClass({ "fields-row": true })}>
          <forms.Input
            name="email"
            type="email"
            label={i18n.tr("auth.work-email")}
            className={cssClass({ "form-field": true })}
          />
        </div>

        {showPasswordField && (
          <div className={cssClass({ "fields-row": true })}>
            <forms.Input
              type="password"
              name="password"
              autoFocus
              label={i18n.tr("auth.password")}
              className={cssClass({ "form-field": true })}
            />
          </div>
        )}

        {origin !== "viewer" &&
          (config.flags.includes("login") || config.flags.includes("login-with-password")) && (
            <div className={cssClass({ "fields-row": true, "forgot-password": true })}>
              <Link action={recoveryRequestHandler} className={cssClass({ "forgot-pass-link": true })} dataTestId="forgot-password">
                {i18n.tr("auth.forgot-password")}
              </Link>
            </div>
          )}

        <div className={cssClass({ "buttons-stack": true })}>
          {(config.flags.includes("login") || config.flags.includes("login-with-password")) && (
            <forms.SubmitButton
              label={i18n.tr("labels.continue")}
              dataTestId="login-submit"
              className={cssClass({ "login-button": true })}
            />
          )}

          {config.flags.includes("login-with-ldap") && (
            <forms.SubmitButton
              label={i18n.tr("auth.login-with-ldap-submit")}
              className={cssClass({ "login-ldap-button": true })}
              onClick={onSubmitLdap}
            />
          )}
        </div>
      </forms.Form>
    </>
  )
}

interface LoginSsoButtonsProps {
  params?: any
}

export function LoginSsoButtons(props: LoginSsoButtonsProps) {
  const { params = {} } = props

  const loginWithGoogle = React.useCallback(() => loginWithSso("google", params), [params])
  const loginWithGithub = React.useCallback(() => loginWithSso("github", params), [params])
  const loginWithGitlab = React.useCallback(() => loginWithSso("gitlab", params), [params])
  const loginWithOidc = React.useCallback(() => loginWithSso("oidc", params), [params])

  return (
    <div className={cssClass({ "auth-buttons": true })}>
      {config.flags.includes("login-with-google") && (
        <ButtonLink
          onClick={loginWithGoogle}
          icon={deprecatedIcon.brandGoogle}
          label={i18n.tr("auth.login-with-google-submit")}
          className={cssClass({ "login-btn": true, "btn-google-auth": true })}
        />
      )}

      {config.flags.includes("login-with-github") && (
        <ButtonLink
          onClick={loginWithGithub}
          icon={deprecatedIcon.brandGithub}
          label={i18n.tr("auth.login-with-github-submit")}
          className={cssClass({ "login-btn": true, "btn-github-auth": true })}
        />
      )}

      {config.flags.includes("login-with-gitlab") && (
        <ButtonLink
          onClick={loginWithGitlab}
          icon={deprecatedIcon.brandGitlab}
          label={i18n.tr("auth.login-with-gitlab-submit")}
          className={cssClass({ "login-btn": true, "btn-gitlab-auth": true })}
        />
      )}

      {config.flags.includes("login-with-oidc") && (
        <ButtonLink
          onClick={loginWithOidc}
          icon={deprecatedIcon.brandOpenid}
          label={i18n.tr("auth.login-with-oidc-submit")}
          className={cssClass({ "login-btn": true, "btn-oidc-auth": true })}
        />
      )}
    </div>
  )
}

interface LoginDialogProps {
  params?: any
}

export function LoginDialog(props: LoginDialogProps) {
  const { params } = props

  return (
    <>
      {showSsoLoginButtons && (
        <>
          <LoginSsoButtons params={params} />

          {(config.flags.includes("login") ||
            config.flags.includes("login-with-password") ||
            config.flags.includes("login-with-ldap")) && (
            <hr className={cssClass({ separator: true })} />
          )}
        </>
      )}

      {(config.flags.includes("login") ||
        config.flags.includes("login-with-password") ||
        config.flags.includes("login-with-ldap")) && <LoginForm params={params} />}
    </>
  )
}

interface LoginPageProps {
  params?: any
}

export function LoginPage(props: LoginPageProps) {
  const { params } = props

  const goRegister = React.useCallback(
    () => store.emit(router.nav("auth-register", params)),
    [params]
  )

  return (
    <div className={cssClass({ "auth-form-wrapper": true })}>
      <h1
        className={cssClass({ "auth-title": true })}
        data-testid="login-title"
      >
        {i18n.tr("auth.login-account-title")}
      </h1>

      <p className={cssClass({ "auth-tagline": true })}>{i18n.tr("auth.login-tagline")}</p>

      {config.flags.includes("demo-warning") && <DemoWarning />}

      <LoginDialog params={params} />

      <hr className={cssClass({ separator: true })} />

      <div className={cssClass({ links: true })}>
        {config.flags.includes("registration") && (
          <div className={cssClass({ register: true })}>
            <span className={cssClass({ "register-text": true })}>
              {i18n.tr("auth.register")}{" "}
            </span>
            <Link action={goRegister} className={cssClass({ "register-link": true })} dataTestId="register-submit">
              {i18n.tr("auth.register-submit")}
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
