// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react"
import * as sm from "app/common/schema"
import * as dcm from "app/main/data/common"
import * as ev from "app/main/data/event"
import * as du from "app/main/data/profile"
import * as dtm from "app/main/data/team"
import {store} from "app/main/store"
import * as fm from "app/main/ui/components/forms"
import * as DeprecatedIcon from "app/main/ui/icons"
import {ContextNotification} from "app/main/ui/notifications/context-notification"
import {tr} from "app/util/i18n"
import * as ptk from "potok.v2/core"

interface LeftSidebarProps {}

const LeftSidebar: React.FC<LeftSidebarProps> = () => {
  return (
    <div className="modal-left">
      <h2 className="modal-subtitle">{tr("onboarding.team-modal.team-definition")}</h2>
      <p className="modal-text">{tr("onboarding.team-modal.create-team-desc")}</p>
      <ul className="team-features">
        <li className="feature">
          <span className="icon">{DeprecatedIcon.document}</span>
          <p className="modal-desc">{tr("onboarding.team-modal.create-team-feature-1")}</p>
        </li>
        <li className="feature">
          <span className="icon">{DeprecatedIcon.move}</span>
          <p className="modal-desc">{tr("onboarding.team-modal.create-team-feature-2")}</p>
        </li>
        <li className="feature">
          <span className="icon">{DeprecatedIcon.tree}</span>
          <p className="modal-desc">{tr("onboarding.team-modal.create-team-feature-3")}</p>
        </li>
        <li className="feature">
          <span className="icon">{DeprecatedIcon.user}</span>
          <p className="modal-desc">{tr("onboarding.team-modal.create-team-feature-4")}</p>
        </li>
        <li className="feature">
          <span className="icon">{DeprecatedIcon.tick}</span>
          <p className="modal-desc">{tr("onboarding.team-modal.create-team-feature-5")}</p>
        </li>
      </ul>
    </div>
  )
}

function getAvailableRoles(): Array<{value: string; label: string}> {
  return [
    {value: "viewer", label: tr("labels.viewer")},
    {value: "editor", label: tr("labels.editor")},
    {value: "admin", label: tr("labels.admin")},
  ]
}

interface TeamFormProps {
  goToTeam?: boolean
}

const TeamForm: React.FC<TeamFormProps> = (props) => {
  const {goToTeam} = props

  const initial = React.useMemo(() => ({role: "editor"}), [])

  const form = fm.useForm({
    schema: {
      title: "TeamForm",
      type: "object",
      properties: {
        name: {type: "string", maxLength: 250},
        role: {type: "keyword"},
        emails: {type: "array", items: {type: "string", format: "email"}},
      },
    },
    initial,
  })

  const roles = React.useMemo(() => getAvailableRoles(), [])

  const [error, setError] = React.useState<string | null>(null)

  const onSuccess = React.useCallback(
    (response: any) => {
      const teamId = response.id
      store.emit(
        du.updateProfileProps({
          onboardingTeamId: teamId,
          onboardingViewed: true,
        })
      )
      console.log(goToTeam)
      if (goToTeam) {
        store.emit(dcm.goToDashboardRecent({teamId}))
      }
    },
    [goToTeam]
  )

  const onError = React.useCallback((cause: any) => {
    const error = cause?.data || cause
    const {type, code} = error

    if (type === "validation" && code === "profile-is-muted") {
      setError(tr("errors.profile-is-muted"))
    } else if (type === "validation" && code === "max-invitations-by-request") {
      setError(tr("errors.maximum-invitations-by-request-reached", error.threshold))
    } else if (type === "restriction" && code === "max-quote-reached") {
      setError(tr("errors.max-quota-reached", error.target))
    } else if (code === "member-is-muted" || code === "email-has-permanent-bounces" || code === "email-has-complaints") {
      setError(tr("errors.email-spam-or-permanent-bounces", error.email))
    } else {
      setError(tr("errors.generic"))
    }
  }, [])

  const onInviteLater = React.useCallback(
    ({name}: {name: string}) => {
      const mdata = {onSuccess, onError}
      const params = {name}

      store.emit(
        dtm.createTeam.withMeta(params, mdata),
        ptk.dataEvent(ev.event("onboarding-step", {
          name: "onboarding-step",
          origin: ":onboarding-without-invitations",
          label: "team:create-team-and-invite-later",
          teamName: name,
          step: 8,
        })),
        ptk.dataEvent(ev.event("onboarding-finish", {
          name: "onboarding-finish",
        }))
      )
    },
    [onSuccess, onError]
  )

  const onInviteNow = React.useCallback(
    ({name, emails}: {name: string; emails: string[]}) => {
      const mdata = {onSuccess, onError}
      const params = {name, emails}

      store.emit(
        dtm.createTeamWithInvitations.withMeta(params, mdata),
        ptk.dataEvent(ev.event("onboarding-step", {
          name: "onboarding-step",
          origin: ":onboarding-with-invitations",
          label: "team:create-team-and-invite",
          invites: emails.length,
          teamName: name,
          role: params.role,
          step: 8,
        })),
        ptk.dataEvent(ev.event("onboarding-finish", {
          name: "onboarding-finish",
        }))
      )
    },
    [onSuccess, onError]
  )

  const onSubmit = React.useCallback(
    (form: any) => {
      const params = form.cleanData
      const emails = params.emails

      if (emails.length > 0) {
        onInviteNow(params)
      } else {
        onInviteLater(params)
      }
    },
    [onInviteNow, onInviteLater]
  )

  const onSkip = React.useCallback(() => {
    store.emit(
      du.updateProfileProps({onboardingViewed: true}),
      ptk.dataEvent(ev.event("onboarding-step", {
        name: "onboarding-step",
        origin: ":onboarding",
        label: "team:skip-team-creation",
        step: 7,
      })),
      ptk.dataEvent(ev.event("onboarding-finish", {
        name: "onboarding-finish",
      }))
    )
  }, [])

  const currentError = error

  return (
    <>
      <div className="modal-right">
        <div className="first-block">
          <fm.Form form={form} className="modal-form" onSubmit={onSubmit}>
            <h2 className="modal-subtitle">{tr("onboarding.team-modal.create-team")}</h2>
            <p className="modal-text">{tr("onboarding.choice.team-up.create-team-desc")}</p>

            <fm.Input
              type="text"
              className="team-name-input"
              name="name"
              autoFocus
              placeholder="Team name"
              label={tr("onboarding.choice.team-up.create-team-placeholder")}
            />

            <h2 className="modal-subtitle invite-subtitle">{tr("onboarding.choice.team-up.invite-members")}</h2>
            <p className="modal-text">{tr("onboarding.choice.team-up.invite-members-info")}</p>

            {currentError && (
              <ContextNotification content={currentError} level="error" />
            )}

            <div className="role-select">
              <p className="role-title">{tr("onboarding.choice.team-up.roles")}</p>
              <fm.Select name="role" options={roles} />
            </div>

            <div className="invitation-row">
              <fm.MultiInput
                type="email"
                name="emails"
                trim
                validItemFn={sm.parseEmail}
                cautionItemFn={() => false}
                label={tr("modals.invite-member.emails")}
              />
            </div>

            <div className="action-buttons">
              <fm.SubmitButton
                className="accept-button"
                label={
                  form.cleanData?.emails?.length > 0
                    ? tr("onboarding.choice.team-up.create-team-and-invite")
                    : tr("onboarding.choice.team-up.create-team-without-invite")
                }
              />
            </div>

            {form.cleanData?.emails?.length === 0 && (
              <div className="modal-hint">
                ({tr("onboarding.choice.team-up.create-team-and-send-invites-description")})
              </div>
            )}
          </fm.Form>
        </div>

        <div className="second-block">
          <h2 className="modal-subtitle">{tr("onboarding.choice.team-up.start-without-a-team")}</h2>
          <p className="modal-text">{tr("onboarding.choice.team-up.start-without-a-team-description")}</p>

          <div className="action-buttons">
            <button className="accept-button" onClick={onSkip}>
              {tr("onboarding.choice.team-up.continue-without-a-team")}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

interface OnboardingTeamModalProps {
  goToTeam?: boolean
}

export const OnboardingTeamModal: React.FC<OnboardingTeamModalProps> = (props) => {
  const {goToTeam} = props

  return (
    <div className="modal-overlay">
      <div className="modal-container animated fadeIn">
        <h1 className="modal-title">{tr("onboarding-v2.welcome.title")}</h1>
        <div className="modal-sections">
          <LeftSidebar />
          <div className="separator" />
          <TeamForm goToTeam={goToTeam} />
        </div>
      </div>
    </div>
  )
}