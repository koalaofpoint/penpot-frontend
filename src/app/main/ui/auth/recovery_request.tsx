// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from "react"
import * as router from "../../router"
import * as store from "../../store"
import * as profileData from "../data/profile"
import * as notifications from "../data/notifications"
import * as forms from "../components/forms"
import { Link } from "../components/link"
import * as i18n from "../../util/i18n"
import { rx } from "beicon"

function cssClass(classes: Record<string, boolean>): string {
  return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ")
}

interface RecoveryFormProps {
  onSuccessCallback?: (email: string) => void
}

export function RecoveryForm(props: RecoveryFormProps) {
  const { onSuccessCallback } = props
  const form = forms.useForm({
    schema: {
      type: "object",
      title: "RecoverRequestForm",
      properties: {
        email: { type: "string", format: "email" }
      }
    },
    initial: {}
  })
  const [submitted, setSubmitted] = React.useState(false)

  const defaultSuccessFinish = React.useCallback(
    () => store.emit(notifications.info(i18n.tr("auth.notifications.recovery-token-sent"))),
    []
  )

  const onSuccess = React.useCallback(
    (cdata: any, _response: any) => {
      setSubmitted(false)
      if (onSuccessCallback === null) {
        defaultSuccessFinish()
      } else if (typeof onSuccessCallback === "function") {
        onSuccessCallback(cdata.email)
      }
    },
    [onSuccessCallback, defaultSuccessFinish]
  )

  const onError = React.useCallback((data: any, cause: any) => {
    setSubmitted(false)
    const code = cause?.data?.code

    switch (code) {
      case "profile-not-verified":
        return rx.of(notifications.error(i18n.tr("auth.notifications.profile-not-verified")))
      case "profile-is-muted":
        return rx.of(notifications.error(i18n.tr("errors.profile-is-muted")))
      case "email-has-permanent-bounces":
      case "email-has-complaints":
        return rx.of(notifications.error(i18n.tr("errors.email-has-permanent-bounces", data.email)))
      default:
        return rx.throw(cause)
    }
  }, [])

  const onSubmit = React.useCallback(
    (_event: React.FormEvent) => {
      setSubmitted(true)
      const cdata = form.cleanData
      const params = Object.assign(cdata, {
        meta: {
          onSuccess: (response: any) => onSuccess(cdata, response),
          onError: (cause: any) => onError(cdata, cause)
        }
      })
      form.value = null
      store.emit(profileData.requestProfileRecovery(params))
    },
    [form, onSuccess, onError]
  )

  return (
    <forms.Form
      onSubmit={onSubmit}
      className={cssClass({ "recovery-request-form": true })}
      form={form}
    >
      <div className={cssClass({ "fields-row": true })}>
        <forms.Input
          name="email"
          label={i18n.tr("auth.work-email")}
          type="text"
          className={cssClass({ "form-field": true })}
        />
      </div>

      <forms.SubmitButton
        label={i18n.tr("auth.recovery-request-submit")}
        dataTestId="recovery-request-submit"
        className={cssClass({ "recover-btn": true })}
      />
    </forms.Form>
  )
}

interface RecoveryRequestPageProps {
  params?: any
  onSuccessCallback?: (email: string) => void
  goBackCallback?: () => void
}

export function RecoveryRequestPage(props: RecoveryRequestPageProps) {
  const { params, onSuccessCallback, goBackCallback } = props

  const defaultGoBack = React.useCallback(
    () => store.emit(router.nav("auth-login")),
    []
  )

  const goBack = goBackCallback || defaultGoBack

  return (
    <div className={cssClass({ "auth-form-wrapper": true })}>
      <h1 className={cssClass({ "auth-title": true })}>{i18n.tr("auth.recovery-request-title")}</h1>
      <div className={cssClass({ "auth-subtitle": true })}>{i18n.tr("auth.recovery-request-subtitle")}</div>
      <hr className={cssClass({ separator: true })} />

      <RecoveryForm params={params} onSuccessCallback={onSuccessCallback} />

      <hr className={cssClass({ separator: true })} />

      <div className={cssClass({ "go-back": true })}>
        <Link action={goBack} className={cssClass({ "go-back-link": true })} dataTestId="go-back-link">
          {i18n.tr("labels.go-back")}
        </Link>
      </div>
    </div>
  )
}

interface RecoverySentPageProps {
  email: string
}

export function RecoverySentPage(props: RecoverySentPageProps) {
  const { email } = props

  return (
    <div className={cssClass({ "auth-form-wrapper": true, "register-success": true })}>
      <div className={cssClass({ "auth-title-wrapper": true })}>
        <h2 className={cssClass({ "auth-title": true })}>{i18n.tr("auth.check-mail")}</h2>
        <div className={cssClass({ "notification-text": true })}>
          {i18n.tr("not-found.login.sent-recovery")}
        </div>
      </div>
      <div className={cssClass({ "notification-text-email": true })}>{email}</div>
      <div className={cssClass({ "notification-text": true })}>
        {i18n.tr("not-found.login.sent-recovery-check")}
      </div>
    </div>
  )
}
