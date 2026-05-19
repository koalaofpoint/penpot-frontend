// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from "react"
import * as config from "../../config"
import * as authData from "../data/auth"
import * as notifications from "../data/notifications"
import * as repo from "../../repo"
import * as router from "../../router"
import * as store from "../../store"
import * as loginModule from "./login"
import * as forms from "../components/forms"
import { Link } from "../components/link"
import * as i18n from "../../util/i18n"
import * as storage from "../../util/storage"
import { rx } from "beicon"

function cssClass(classes: Record<string, boolean>): string {
  return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ")
}

interface NewsletterOptionsProps {}

export function NewsletterOptions(props: NewsletterOptionsProps) {
  const updatesLabel = i18n.trHtml("onboarding-v2.newsletter.updates", {
    tagName: "div"
  })

  return (
    <div className={cssClass({ "fields-row": true, "input-visible": true, "newsletter-option-wrapper": true })}>
      <forms.Input
        name="accept-newsletter-updates"
        className={cssClass({ "checkbox-newsletter-updates": true })}
        type="checkbox"
        defaultChecked={false}
        label={updatesLabel}
      />
    </div>
  )
}

interface TermsAndPrivacyProps {}

export function TermsAndPrivacy(props: TermsAndPrivacyProps) {
  const termsLabel = i18n.trHtml("auth.terms-and-privacy-agreement", {
    tagName: "div",
    content: i18n.tr("auth.terms-and-privacy-agreement", config.termsOfServiceUri, config.privacyPolicyUri)
  })

  return (
    <div className={cssClass({ "fields-row": true, "input-visible": true, "accept-terms-and-privacy-wrapper": true })}>
      <forms.Input
        name="accept-terms-and-privacy"
        showError={false}
        className={cssClass({ "checkbox-terms-and-privacy": true })}
        type="checkbox"
        defaultChecked={false}
        label={termsLabel}
      />
    </div>
  )
}

interface RegisterFormProps {
  params?: any
  onSuccessCallback?: (email: string) => void
}

export function RegisterForm(props: RegisterFormProps) {
  const { params = {}, onSuccessCallback } = props

  const initial = React.useMemo(() => params, [params])
  const form = forms.useForm({
    schema: {
      type: "object",
      title: "RegisterForm",
      properties: {
        password: { type: "string" },
        fullname: { type: "string", maxLength: 250 },
        email: { type: "string", format: "email" },
        acceptTermsAndPrivacy: { type: "boolean" },
        acceptNewsletterUpdates: { type: "boolean" },
        token: { type: "string" }
      }
    },
    initial
  })

  const [submitted, setSubmitted] = React.useState(false)

  const onError = React.useCallback((cause: any) => {
    const edata = cause?.data || cause
    const { type, code } = edata

    switch ([type, code]) {
      case ["restriction", "email-does-not-match-invitation"]:
        store.emit(notifications.error(i18n.tr("errors.email-does-not-match-invitation")))
        break
      case ["restriction", "registration-disabled"]:
        store.emit(notifications.error(i18n.tr("errors.registration-disabled")))
        break
      case ["restriction", "email-domain-is-not-allowed"]:
        store.emit(notifications.error(i18n.tr("errors.email-domain-not-allowed")))
        break
      case ["restriction", "email-has-permanent-bounces"]:
        store.emit(notifications.error(i18n.tr("errors.email-has-permanent-bounces", edata.email)))
        break
      case ["restriction", "email-has-complaints"]:
        store.emit(notifications.error(i18n.tr("errors.email-has-permanent-bounces", edata.email)))
        break
      case ["validation", "email-as-password"]:
        form.value = { ...form.value, errors: { ...form.value.errors, password: { message: i18n.tr("errors.email-as-password") } } }
        break
      default:
        if (edata.explain) {
          console.log(edata.explain)
        }
        store.emit(notifications.error(i18n.tr("errors.generic")))
    }
  }, [form])

  const onSuccess = React.useCallback(
    (params: any) => {
      if (typeof onSuccessCallback === "function") {
        onSuccessCallback(params.email)
      } else if (params.invitationToken) {
        const token = params.invitationToken
        store.emit(router.nav("auth-verify-token", { token }))
      } else if (params.isActive) {
        store.emit(authData.loginFromRegister())
      } else {
        storage.user.value = { ...storage.user.value, email: params.email }
        store.emit(router.nav("auth-register-success"))
      }
    },
    [onSuccessCallback]
  )

  const onRegisterProfile = React.useCallback(
    (params: any) => {
      setSubmitted(true)
      repo.cmd!["register-profile"](params).subscribe({
        next: onSuccess,
        error: onError,
        complete: () => setSubmitted(false)
      })
    },
    [onSuccess, onError]
  )

  const onSubmit = React.useCallback(
    (form: any, _event: any) => {
      setSubmitted(true)
      const createWelcomeFile = config.externalFeatureFlag("onboarding-03", "test")

      let cdata = form.cleanData
      if (createWelcomeFile) {
        cdata = { ...cdata, createWelcomeFile: true }
      }

      repo.cmd!["prepare-register-profile"](cdata).subscribe({
        next: onRegisterProfile,
        error: onError,
        complete: () => setSubmitted(false)
      })
    },
    [onRegisterProfile, onError]
  )

  return (
    <forms.Form onSubmit={onSubmit} form={form}>
      <div className={cssClass({ "fields-row": true })}>
        <forms.Input
          name="fullname"
          label={i18n.tr("auth.fullname")}
          type="text"
          showSuccess
          className={cssClass({ "form-field": true })}
        />
      </div>

      <div className={cssClass({ "fields-row": true })}>
        <forms.Input
          type="text"
          name="email"
          label={i18n.tr("auth.work-email")}
          dataTestId="email-input"
          showSuccess
          className={cssClass({ "form-field": true })}
        />
      </div>

      <div className={cssClass({ "fields-row": true })}>
        <forms.Input
          name="password"
          hint={i18n.tr("auth.password-length-hint")}
          label={i18n.tr("auth.password")}
          showSuccess
          type="password"
          className={cssClass({ "form-field": true })}
        />
      </div>

      {config.flags.includes("terms-and-privacy-checkbox") && <TermsAndPrivacy />}

      <NewsletterOptions />

      <forms.SubmitButton
        label={i18n.tr("auth.register-submit")}
        disabled={submitted}
        dataTestId="register-form-submit"
        className={cssClass({ "register-btn": true })}
      />
    </forms.Form>
  )
}

interface RegisterMethodsProps {
  params?: any
  hideSeparator?: boolean
  onSuccessCallback?: (email: string) => void
}

export function RegisterMethods(props: RegisterMethodsProps) {
  const { params, hideSeparator, onSuccessCallback } = props

  return (
    <>
      {loginModule.showSsoLoginButtons && (
        <loginModule.LoginSsoButtons params={params} />
      )}

      {(loginModule.showSsoLoginButtons || hideSeparator === false) && (
        <hr className={cssClass({ separator: true })} />
      )}

      {config.flags.includes("login-with-password") && (
        <RegisterForm params={params} onSuccessCallback={onSuccessCallback} />
      )}
    </>
  )
}

interface RegisterPageProps {
  params?: any
}

export function RegisterPage(props: RegisterPageProps) {
  const { params = {} } = props

  return (
    <div className={cssClass({ "auth-form-wrapper": true, "register-form": true })}>
      <h1
        className={cssClass({ "auth-title": true })}
        data-testid="registration-title"
      >
        {i18n.tr("auth.register-title")}
      </h1>

      {config.flags.includes("demo-warning") && <loginModule.DemoWarning />}

      <RegisterMethods params={params} />

      <div className={cssClass({ links: true })}>
        <div className={cssClass({ account: true })}>
          <span className={cssClass({ "account-text": true })}>
            {i18n.tr("auth.already-have-account")}{" "}
          </span>
          <Link
            action={() => store.emit(router.nav("auth-login", params))}
            className={cssClass({ "account-link": true })}
            dataTestId="login-here-link"
          >
            {i18n.tr("auth.login-here")}
          </Link>
        </div>

        {config.flags.includes("demo-users") && (
          <>
            <hr className={cssClass({ separator: true })} />
            <div className={cssClass({ "demo-account": true })}>
              <Link
                action={loginModule.createDemoProfile}
                className={cssClass({ "demo-account-link": true })}
              >
                {i18n.tr("auth.create-demo-account")}
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

interface RegisterSuccessPageProps {
  params?: any
}

export function RegisterSuccessPage(props: RegisterSuccessPageProps) {
  const { params = {} } = props
  const email = params.email || storage.user.value?.email

  return (
    <div className={cssClass({ "auth-form-wrapper": true, "register-success": true })}>
      <div className={cssClass({ "auth-title-wrapper": true })}>
        <h2 className={cssClass({ "auth-title": true })}>{i18n.tr("auth.check-mail")}</h2>
        <div className={cssClass({ "notification-text": true })}>
          {i18n.tr("auth.verification-email-sent")}
        </div>
      </div>
      <div className={cssClass({ "notification-text-email": true })}>{email}</div>
    </div>
  )
}

interface TermsRegisterProps {}

export function TermsRegister(props: TermsRegisterProps) {
  const showAll = config.termsOfServiceUri && config.privacyPolicyUri
  const showTerms = config.termsOfServiceUri !== null
  const showPrivacy = config.privacyPolicyUri !== null

  if (!showAll) {
    return null
  }

  return (
    <div className={cssClass({ "terms-register": true })}>
      {showTerms && (
        <a
          href={config.termsOfServiceUri!}
          target="_blank"
          className={cssClass({ "auth-link": true })}
        >
          {i18n.tr("auth.terms-of-service")}
        </a>
      )}

      {showAll && (
        <span className={cssClass({ "and-text": true })}>
          {" "}{i18n.tr("labels.and")}{"  "}
        </span>
      )}

      {showPrivacy && (
        <a
          href={config.privacyPolicyUri!}
          target="_blank"
          className={cssClass({ "auth-link": true })}
        >
          {i18n.tr("auth.privacy-policy")}
        </a>
      )}
    </div>
  )
}

interface RegisterValidateFormProps {
  params?: any
  onSuccessCallback?: (email: string) => void
}

export function RegisterValidateForm(props: RegisterValidateFormProps) {
  const { params = {}, onSuccessCallback } = props

  const form = forms.useForm({
    schema: {
      type: "object",
      title: "RegisterValidateForm",
      properties: {
        token: { type: "string" },
        fullname: { type: "string", maxLength: 250 },
        acceptTermsAndPrivacy: { type: "boolean" },
        acceptNewsletterUpdates: { type: "boolean" }
      }
    },
    initial: params
  })

  const [submitted, setSubmitted] = React.useState(false)

  const onSuccess = React.useCallback(
    (params: any) => {
      config.externalNotifyRegisterSuccess(params.id)

      if (typeof onSuccessCallback === "function") {
        onSuccessCallback(params.email)
      } else if (params.invitationToken) {
        const token = params.invitationToken
        store.emit(router.nav("auth-verify-token", { token }))
      } else if (params.isActive) {
        store.emit(authData.loginFromRegister())
      } else {
        storage.user.value = { ...storage.user.value, email: params.email }
        store.emit(router.nav("auth-register-success"))
      }
    },
    [onSuccessCallback]
  )

  const onError = React.useCallback((_cause: any) => {
    store.emit(notifications.error(i18n.tr("errors.generic")))
  }, [])

  const onSubmit = React.useCallback(
    (form: any, _event: any) => {
      setSubmitted(true)
      const createWelcomeFile = config.externalFeatureFlag("onboarding-03", "test")

      let formParams = form.cleanData
      if (createWelcomeFile) {
        formParams = { ...formParams, createWelcomeFile: true }
      }

      repo.cmd!["register-profile"](formParams)
        .finally(() => setSubmitted(false))
        .subscribe({
          next: onSuccess,
          error: onError
        })
    },
    [onSuccess, onError]
  )

  return (
    <forms.Form
      onSubmit={onSubmit}
      form={form}
      className={cssClass({ "register-validate-form": true })}
    >
      <div className={cssClass({ "fields-row": true })}>
        <forms.Input
          name="fullname"
          label={i18n.tr("auth.fullname")}
          type="text"
          showSuccess
          className={cssClass({ "form-field": true })}
        />
      </div>

      {config.flags.includes("terms-and-privacy-checkbox") && <TermsAndPrivacy />}

      <NewsletterOptions />

      <forms.SubmitButton
        label={i18n.tr("auth.register-submit")}
        disabled={submitted}
        className={cssClass({ "register-btn": true })}
      />
    </forms.Form>
  )
}

interface RegisterValidatePageProps {
  params?: any
}

export function RegisterValidatePage(props: RegisterValidatePageProps) {
  const { params = {} } = props

  return (
    <div className={cssClass({ "auth-form-wrapper": true, "register-form": true })}>
      <div className={cssClass({ "auth-title-wrapper": true })}>
        <h2
          className={cssClass({ "auth-title": true })}
          data-testid="register-title"
        >
          {i18n.tr("auth.register-account-title")}
        </h2>
        <div className={cssClass({ "auth-subtitle": true })}>
          {i18n.tr("auth.register-account-tagline")}
        </div>
      </div>

      <RegisterValidateForm params={params} />

      <div className={cssClass({ links: true })}>
        <div className={cssClass({ "go-back": true })}>
          <Link
            action={() => store.emit(router.nav("auth-register", {}))}
            className={cssClass({ "go-back-link": true })}
          >
            {i18n.tr("labels.go-back")}
          </Link>
        </div>
      </div>
    </div>
  )
}
