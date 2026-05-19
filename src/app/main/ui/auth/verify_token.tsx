// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from "react"
import * as repo from "../../repo"
import * as router from "../../router"
import * as store from "../../store"
import * as authData from "../data/auth"
import * as profileData from "../data/profile"
import * as notifications from "../data/notifications"
import * as dataCommon from "../data/common"
import * as timers from "../../util/timers"
import * as dom from "../../util/dom"
import * as i18n from "../../util/i18n"
import { config } from "../../config"

type TokenData = {
  iss: string
  profileId?: string
  teamId?: string
  state?: string
  invitationToken?: string
  redirectTo?: string
  [key: string]: any
}

type VerifyTokenProps = {
  route: {
    queryParams: {
      token?: string
    }
  }
}

function cssClass(classes: Record<string, boolean>): string {
  return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ")
}

function handleToken(token: TokenData) {
  switch (token.iss) {
    case "verify-email": {
      config.externalNotifyRegisterSuccess(token.profileId!)
      const msg = i18n.tr("dashboard.notifications.email-verified-successfully")
      timers.schedule(1000, () => store.emit(notifications.success(msg)))
      store.emit(authData.loginFromToken(token))
      break
    }

    case "change-email": {
      const msg = i18n.tr("dashboard.notifications.email-changed-successfully")
      timers.schedule(100, () => store.emit(notifications.success(msg)))
      store.emit(router.nav("settings-profile"), profileData.refreshProfile())
      break
    }

    case "auth": {
      store.emit(authData.loginFromToken(token))
      break
    }

    case "team-invitation": {
      switch (token.state) {
        case "created": {
          const teamId = token.teamId
          store.emit(
            notifications.success(i18n.tr("auth.notifications.team-invitation-accepted")),
            profileData.refreshProfile(),
            dataCommon.goToDashboardRecent({ teamId })
          )
          break
        }

        case "pending": {
          const invitationToken = token.invitationToken
          const routeId = token.redirectTo || "auth-register"
          store.emit(router.nav(routeId, { invitationToken }))
          break
        }
      }
      break
    }

    default: {
      store.emit(
        router.nav("auth-login"),
        notifications.warn(i18n.tr("errors.unexpected-token"))
      )
    }
  }
}

interface InvalidTokenProps {}

export function InvalidToken(props: InvalidTokenProps) {
  return (
    <section className={cssClass({ "exception-layout": true })}>
      <div className={cssClass({ "exception-content": true })}>
        <div className={cssClass({ container: true })}>
          <div className={cssClass({ "main-message": true })}>{i18n.tr("errors.invite-invalid")}</div>
          <div className={cssClass({ "desc-message": true })}>{i18n.tr("errors.invite-invalid.info")}</div>
        </div>
      </div>
    </section>
  )
}

export function VerifyToken(props: VerifyTokenProps) {
  const { route } = props
  const token = route.queryParams?.token
  const [badToken, setBadToken] = React.useState(false)

  React.useEffect(() => {
    dom.setHtmlTitle(i18n.tr("title.default"))

    if (!token) {
      setBadToken(true)
      return
    }

    repo.cmd!({ cmd: "verify-token", params: { token } })
      .then((tdata: TokenData) => {
        handleToken(tdata)
      })
      .catch((cause: any) => {
        const error = cause?.data
        const type = error?.type
        const code = error?.code
        const reason = error?.reason

        if (type === "validation" || code === "invalid-token" || reason === "token-expired") {
          setBadToken(true)
        } else if (code === "email-already-exists") {
          const msg = i18n.tr("errors.email-already-exists")
          timers.schedule(100, () => store.emit(notifications.error(msg)))
          store.emit(router.nav("auth-login"))
        } else if (code === "email-already-validated") {
          const msg = i18n.tr("errors.email-already-validated")
          timers.schedule(100, () => store.emit(notifications.warn(msg)))
          store.emit(router.nav("auth-login"))
        } else {
          const msg = i18n.tr("errors.generic")
          timers.schedule(100, () => store.emit(notifications.error(msg)))
          store.emit(router.nav("auth-login"))
        }
      })
  }, [token])

  if (badToken) {
    return <InvalidToken />
  }

  return (
    <div className={cssClass({ "auth-loader": true })}>
      <div className={cssClass({ "loader-title": true })}>{i18n.tr("labels.loading")}</div>
    </div>
  )
}

interface VerifyTokenPageProps {
  route?: any
}

export function VerifyTokenPage(props: VerifyTokenPageProps) {
  return <VerifyToken route={props.route} />
}
