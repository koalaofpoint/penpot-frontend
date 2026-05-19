// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react"
import * as rxjs from "rxjs"
import * as D from "app/common/data"
import * as EX from "app/common/exceptions"
import * as PP from "app/common/pprint"
import * as UUID from "app/common/uuid"
import * as CF from "app/config"
import {isAuthenticated} from "app/main/data/auth"
import * as DCM from "app/main/data/common"
import * as Errors from "app/main/errors"
import {refs} from "app/main/refs"
import * as RP from "app/main/repo"
import * as RT from "app/main/router"
import {store} from "app/main/store"
import {LoginDialog} from "app/main/ui/auth/login"
import {RecoveryRequestPage, RecoverySentPage} from "app/main/ui/auth/recovery-request"
import * as Register from "app/main/ui/auth/register"
import {Sidebar} from "app/main/ui/dashboard/sidebar"
import {Button} from "app/main/ui/ds/buttons/button"
import {Icon} from "app/main/ui/ds/foundations/assets/icon"
import * as I from "app/main/ui/ds/foundations/assets/icon"
import {RawSVG} from "app/main/ui/ds/foundations/assets/raw-svg"
import * as DeprecatedIcon from "app/main/ui/icons"
import {ViewerHeader} from "app/main/ui/viewer/header"
import * as DOM from "app/util/dom"
import {_tr} from "app/util/i18n"
import * as TM from "app/util/timers"
import * as WAPI from "app/util/webapi"
import * as RX from "beicon.v2/core"
import * as STR from "cuerdas.core"

// FIXME: workaround until we export this class on beicon library
const TimeoutError = rxjs.TimeoutError

interface ErrorContainerProps {
  children?: React.ReactNode
}

const ErrorContainer: React.FC<ErrorContainerProps> = (props) => {
  const {children} = props
  const profileId = store.getState()?.profileId

  const onNavRoot = React.useCallback(
    () => store.emit(RT.navRoot()),
    []
  )

  return (
    <section className="exception-layout">
      <button className="exception-header" onClick={onNavRoot}>
        <RawSVG id="penpot-logo-icon" className="penpot-logo"/>
        {profileId && (
          <div className="go-back-wrapper">
            <Icon iconId={I.arrow} className="back-arrow"/>
            <span>{_tr("not-found.no-permission.go-dashboard")}</span>
          </div>
        )}
      </button>
      <div className="deco-before">{DeprecatedIcon.logoErrorScreen}</div>

      {!profileId && (
        <button className="login-header" onClick={onNavRoot}>
          {_tr("labels.login")}
        </button>
      )}

      <div className="exception-content">
        <div className="container">{children}</div>
      </div>

      <div className="deco-after2">
        <span>{_tr("labels.copyright-period")}</span>
        {DeprecatedIcon.logoErrorScreen}
        <span>{_tr("not-found.made-with-love")}</span>
      </div>
    </section>
  )
}

export const InvalidToken: React.FC = () => {
  return (
    <ErrorContainer>
      <div className="main-message">{_tr("errors.invite-invalid")}</div>
      <div className="desc-message">{_tr("errors.invite-invalid.info")}</div>
    </ErrorContainer>
  )
}

const LoginModal: React.FC = () => {
  const [currentSection, setCurrentSection] = React.useState<string>(":login")
  const [userEmail, setUserEmail] = React.useState("")
  const [registerToken, setRegisterToken] = React.useState("")

  const setSection = React.useCallback(
    (event: any) => {
      const section = DOM.getData(DOM.getCurrentTarget(event), "section")
      setCurrentSection(D.keyword(section))
    },
    []
  )

  const setSectionRecovery = React.useCallback(
    () => setCurrentSection(":recovery-request"),
    []
  )

  const setSectionLogin = React.useCallback(
    () => setCurrentSection(":login"),
    []
  )

  const successLogin = React.useCallback(
    () => store.emit(RT.reload(true)),
    []
  )

  const successRegister = React.useCallback(
    (data: any) => {
      setRegisterToken(data?.token)
      setCurrentSection(":register-validate")
    },
    []
  )

  const registerEmailSent = React.useCallback(
    (email: string) => {
      setUserEmail(email)
      setCurrentSection(":register-email-sent")
    },
    []
  )

  const recoveryEmailSent = React.useCallback(
    (email: string) => {
      setUserEmail(email)
      setCurrentSection(":recovery-email-sent")
    },
    []
  )

  const onNavRoot = React.useCallback(
    () => store.emit(RT.nav(":auth-login", {})),
    []
  )

  return (
    <div className="overlay">
      <div className="dialog-login">
        <div className="modal-close">
          <button className="modal-close-button" onClick={onNavRoot}>
            <DeprecatedIcon.close/>
          </button>
        </div>

        <div className="login">
          <div className="logo">{DeprecatedIcon.logo}</div>

          {currentSection === ":login" && (
            <>
              <div className="logo-title">{_tr("labels.login")}</div>
              <div className="logo-subtitle">{_tr("not-found.login.free")}</div>
              <LoginDialog
                onRecoveryRequest={setSectionRecovery}
                onSuccessCallback={successLogin}
                handleRedirect={true}
              />
              <hr className="separator"/>
              <div className="change-section">
                {_tr("auth.register")}
                {" "}
                <a data-section=":register" onClick={setSection}>
                  {_tr("auth.register-submit")}
                </a>
              </div>
            </>
          )}

          {currentSection === ":register" && (
            <>
              <div className="logo-title">{_tr("not-found.login.signup-free")}</div>
              <div className="logo-subtitle">{_tr("not-found.login.start-using")}</div>
              <Register.RegisterMethods
                onSuccessCallback={successRegister}
                hideSeparator={true}
              />
              <div className="separator"/>
              <div className="change-section">
                {_tr("auth.already-have-account")}
                {" "}
                <a data-section=":login" onClick={setSection}>
                  {_tr("auth.login-here")}
                </a>
              </div>
              <div className="links">
                <hr className="separator"/>
                <Register.TermsRegister/>
              </div>
            </>
          )}

          {currentSection === ":register-validate" && (
            <div className="form-container">
              <Register.RegisterForm
                params={{token: registerToken}}
                onSuccessCallback={registerEmailSent}
              />
              <div className="links">
                <div className="register">
                  <a data-section=":register" onClick={setSection}>
                    {_tr("labels.go-back")}
                  </a>
                </div>
              </div>
            </div>
          )}

          {currentSection === ":register-email-sent" && (
            <div className="form-container">
              <Register.RegisterSuccessPage
                params={{email: userEmail, hideLogo: true}}
              />
            </div>
          )}

          {currentSection === ":recovery-request" && (
            <RecoveryRequestPage
              goBackCallback={setSectionLogin}
              onSuccessCallback={recoveryEmailSent}
            />
          )}

          {currentSection === ":recovery-email-sent" && (
            <div className="form-container">
              <RecoverySentPage email={userEmail}/>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

interface RequestDialogProps {
  title: string
  content: string[]
  buttonText: string
  onButtonClick?: () => void
  cancelText?: string
  onClose: () => void
}

const RequestDialog: React.FC<RequestDialogProps> = (props) => {
  const {
    title,
    content,
    buttonText,
    onButtonClick,
    cancelText,
    onClose,
  } = props

  const onClick = onButtonClick || onClose

  return (
    <div className="overlay">
      <div className="dialog">
        <div className="modal-close">
          <button className="modal-close-button" onClick={onClose}>
            <DeprecatedIcon.close/>
          </button>
        </div>
        <div className="dialog-title">{title}</div>
        {content.map((c, idx) => <div key={idx}>{c}</div>)}
        <div className="sign-info">
          {cancelText && (
            <button className="cancel-button" onClick={onClose}>
              {cancelText}
            </button>
          )}
          <button onClick={onClick}>{buttonText}</button>
        </div>
      </div>
    </div>
  )
}

interface RequestAccessProps {
  fileId?: string
  teamId?: string
  isDefault?: boolean
  isWorkspace?: boolean
  profile: any
}

const RequestAccess: React.FC<RequestAccessProps> = (props) => {
  const {
    fileId,
    teamId,
    isDefault,
    isWorkspace,
    profile,
  } = props

  const [requested, setRequested] = React.useState({sent: false, alreadyRequested: false})

  const onClose = React.useCallback(
    () => {
      const defaultTeamId = profile?.defaultTeamId
      store.emit(DCM.goToDashboardRecent({teamId: defaultTeamId}))
    },
    [profile]
  )

  const onSuccess = React.useCallback(
    () => setRequested({sent: true, alreadyRequested: false}),
    []
  )

  const onError = React.useCallback(
    () => setRequested({sent: true, alreadyRequested: true}),
    []
  )

  const onRequestAccess = React.useCallback(
    () => {
      const params = fileId
        ? {fileId, isViewer: !isWorkspace}
        : {teamId}
      const metadata = {onSuccess, onError}
      store.emit(DCM.createTeamAccessRequest({...params, ...metadata}))
    },
    [fileId, teamId, isWorkspace, onSuccess, onError]
  )

  if (isDefault) {
    return (
      <RequestDialog
        title={_tr("not-found.no-permission.project")}
        buttonText={_tr("not-found.no-permission.go-dashboard")}
        onClose={onClose}
      />
    )
  }

  if (fileId && requested.alreadyRequested) {
    return (
      <RequestDialog
        title={_tr("not-found.no-permission.already-requested.file")}
        content={[_tr("not-found.no-permission.already-requested.or-others.file")]}
        buttonText={_tr("not-found.no-permission.go-dashboard")}
        onClose={onClose}
      />
    )
  }

  if (requested.alreadyRequested) {
    return (
      <RequestDialog
        title={_tr("not-found.no-permission.already-requested.project")}
        content={[_tr("not-found.no-permission.already-requested.or-others.project")]}
        buttonText={_tr("not-found.no-permission.go-dashboard")}
        onClose={onClose}
      />
    )
  }

  if (requested.sent) {
    return (
      <RequestDialog
        title={_tr("not-found.no-permission.done.success")}
        content={[_tr("not-found.no-permission.done.remember")]}
        buttonText={_tr("not-found.no-permission.go-dashboard")}
        onClose={onClose}
      />
    )
  }

  if (fileId) {
    return (
      <RequestDialog
        title={_tr("not-found.no-permission.file")}
        content={[
          _tr("not-found.no-permission.you-can-ask.file"),
          _tr("not-found.no-permission.if-approves"),
        ]}
        buttonText={_tr("not-found.no-permission.ask")}
        onButtonClick={onRequestAccess}
        cancelText={_tr("not-found.no-permission.go-dashboard")}
        onClose={onClose}
      />
    )
  }

  if (teamId) {
    return (
      <RequestDialog
        title={_tr("not-found.no-permission.project")}
        content={[
          _tr("not-found.no-permission.you-can-ask.project"),
          _tr("not-found.no-permission.if-approves"),
        ]}
        buttonText={_tr("not-found.no-permission.ask")}
        onButtonClick={onRequestAccess}
        cancelText={_tr("not-found.no-permission.go-dashboard")}
        onClose={onClose}
      />
    )
  }

  return null
}

export const NotFound: React.FC = () => {
  return (
    <ErrorContainer>
      <div className="main-message">{_tr("labels.not-found.main-message")}</div>
      <div className="desc-message">{_tr("not-found.desc-message.error")}</div>
      <div className="desc-message">{_tr("not-found.desc-message.doesnt-exist")}</div>
    </ErrorContainer>
  )
}

export const BadGateway: React.FC = () => {
  const handleRetry = React.useCallback(
    () => store.emit(RT.assignException(null)),
    []
  )

  return (
    <ErrorContainer>
      <div className="main-message">{_tr("labels.bad-gateway.main-message")}</div>
      <div className="desc-message">{_tr("labels.bad-gateway.desc-message")}</div>
      <div className="sign-info">
        <button onClick={handleRetry}>{_tr("labels.retry")}</button>
      </div>
    </ErrorContainer>
  )
}

export const ServiceUnavailable: React.FC = () => {
  const onClick = React.useCallback(
    () => store.emit(RT.assignException(null)),
    []
  )

  return (
    <ErrorContainer>
      <div className="main-message">{_tr("labels.service-unavailable.main-message")}</div>
      <div className="desc-message">{_tr("labels.service-unavailable.desc-message")}</div>
      <div className="sign-info">
        <button onClick={onClick}>{_tr("labels.retry")}</button>
      </div>
    </ErrorContainer>
  )
}

export const WebGLContextLost: React.FC = () => {
  const onReload = React.useCallback(() => location.reload(), [])

  return (
    <ErrorContainer>
      <div className="main-message">{_tr("errors.webgl-context-lost.main-message")}</div>
      <div className="desc-message">{_tr("errors.webgl-context-lost.desc-message")}</div>
      <div className="buttons-container">
        <Button variant="primary" onClick={onReload}>
          {_tr("labels.reload-page")}
        </Button>
      </div>
    </ErrorContainer>
  )
}

function generateReport(data: any): string | null {
  try {
    const teamId = store.getState()?.currentTeamId
    const profileId = store.getState()?.profileId
    const trace = data?.["app.main.errors/trace"]
    const instance = data?.["app.main.errors/instance"]

    let output = ""
    output += `Hint: ${data?.hint || EX.exceptionMessage(instance) || "--"}\n`
    output += `Prof ID: ${profileId || "--"}\n`
    output += `Team ID: ${teamId || "--"}\n`
    output += `URI: ${CF.publicUri}\n`

    if (data?.fileId) {
      output += `File ID: ${data.fileId}\n`
    }

    output += "\nData:\n"
    const cleanedData = D.withoutQualified(D.dissoc(data, ":explain"))
    delete (cleanedData as any)["data"]
    output += PP.pprint(cleanedData, {level: 8, length: 10})
    output += "\n"

    if (data?.explain) {
      output += `${data.explain}\n`
    }

    if (data?.type === ":server-error" && data?.data) {
      // Recursive call for nested data
    }

    output += "Trace:\n"
    output += `${trace}\n`
    output += "\n"
    output += "Last events:\n"
    output += PP.pprint(store.lastEvents, {length: 200})

    return output
  } catch (cause) {
    console.error("error on generating report.txt", cause)
    return null
  }
}

interface InternalErrorProps {
  onReset?: () => void
  report?: string | null
}

export const InternalError: React.FC<InternalErrorProps> = (props) => {
  const {onReset, report} = props
  const reportUriRef = React.useRef<string | null>(null)

  const handleReset = onReset || (() => store.emit(RT.assignException(null)))

  const supportContactClick = React.useCallback(
    () => {
      TM.schedule(handleReset)
      const errorReportId = UUID.next()
      const errorHref = RT.getCurrentHref()
      Errors.lastReport = {id: errorReportId, content: report}
      store.emit(RT.nav(":settings-feedback", {
        type: "issue",
        errorReportId,
        errorHref,
      }))
    },
    [handleReset, report]
  )

  const onDownload = React.useCallback(
    (event: any) => {
      DOM.preventDefault(event)
      const uri = reportUriRef.current
      if (uri) {
        DOM.triggerDownloadUri("report", "text/plain", uri)
      }
    },
    []
  )

  React.useEffect(() => {
    if (report) {
      Errors.lastReport = {id: UUID.next(), content: report}
      const blob = WAPI.createBlob(report, "text/plain")
      const uri = WAPI.createUri(blob)
      reportUriRef.current = uri
      return () => {
        WAPI.revokeUri(uri)
      }
    }
  }, [report])

  return (
    <ErrorContainer>
      <div className="main-message">{_tr("labels.internal-error.main-message")}</div>

      <div className="desc-message">
        <p className="desc-text">{_tr("labels.internal-error.desc-message-first")}</p>
        <p className="desc-text">{_tr("labels.internal-error.desc-message-second")}</p>
      </div>

      {report && (
        <a className="download-link" onClick={onDownload}>
          {_tr("labels.download", "report.txt")}
        </a>
      )}

      <div className="buttons-container">
        <Button variant="secondary" type="button" className="support-btn" onClick={supportContactClick}>
          {_tr("labels.contact-support")}
        </Button>
        <Button variant="primary" type="button" className="retry-btn" onClick={handleReset}>
          {_tr("labels.retry")}
        </Button>
      </div>
    </ErrorContainer>
  )
}

function loadInfo(pathParams: any) {
  const defaultResult = {loaded: true}
  let stream: any

  if (pathParams?.fileId) {
    stream = RP.cmd(":get-file-info", {id: pathParams.fileId}).pipe(
      RX.map((info: any) => ({loaded: true, fileId: info?.id}))
    )
  } else if (pathParams?.teamId) {
    stream = RP.cmd(":get-team-info", {id: pathParams.teamId}).pipe(
      RX.map((info: any) => ({
        loaded: true,
        teamId: info?.id,
        teamDefault: info?.isDefault,
      }))
    )
  } else {
    stream = RX.of(defaultResult)
  }

  return stream.pipe(
    RX.timeout(3000),
    RX.catch((cause: any) => {
      if (cause instanceof TimeoutError) {
        return RX.of(defaultResult)
      }
      return RX.throwError(cause)
    })
  )
}

interface ExceptionSectionProps {
  data: any
}

const ExceptionSection: React.FC<ExceptionSectionProps> = (props) => {
  const {data} = props
  const type = data?.type
  const cause = data?.["app.main.errors/instance"]

  const report = React.useMemo(
    () => {
      if (EX.exception(cause)) {
        return generateReport(cause)
      }
      return null
    },
    [cause]
  )

  React.useEffect(() => {
    if (EX.exception(cause) && !new Set([":not-found", ":authentication"]).has(type)) {
      Errors.submitReport({
        eventName: "exception-page",
        report,
        hint: EX.getHint(cause),
      })
    }
  }, [report, type, cause])

  if (type === ":not-found" || type === ":authentication") {
    return <NotFound/>
  }

  if (type === ":bad-gateway") {
    return <BadGateway/>
  }

  if (type === ":service-unavailable") {
    return <ServiceUnavailable/>
  }

  if (type === ":webgl-context-lost") {
    return <WebGLContextLost/>
  }

  return <InternalError report={report}/>
}

interface ContextWrapperProps {
  isWorkspace?: boolean
  isDashboard?: boolean
  isViewer?: boolean
  profile?: any
  children?: React.ReactNode
}

const ContextWrapper: React.FC<ContextWrapperProps> = (props) => {
  const {
    isWorkspace,
    isDashboard,
    isViewer,
    profile,
    children,
  } = props

  return (
    <>
      {isWorkspace && (
        <div className="workspace">
          <div className="workspace-left">
            {DeprecatedIcon.logoIcon}
            <div>
              <div className="project-name">{_tr("not-found.no-permission.project-name")}</div>
              <div className="file-name">{_tr("not-found.no-permission.penpot-file")}</div>
            </div>
          </div>
          <div className="workspace-right"/>
        </div>
      )}

      {isViewer && (
        <div className="viewer">
          <ViewerHeader
            project={{name: _tr("not-found.no-permission.project-name")}}
            index={0}
            file={{name: _tr("not-found.no-permission.penpot-file")}}
            page={null}
            frame={null}
            permissions={{isLogged: true}}
            zoom={1}
            section=":interactions"
            shownThumbnails={false}
            interactionsMode={null}
          />
        </div>
      )}

      {isDashboard && (
        <div className="dashboard">
          <div className="dashboard-sidebar">
            <Sidebar
              team={null}
              projects={[]}
              project={profile?.defaultProjectId}
              profile={profile}
              section=":dashboard-projects"
              searchTerm=""
            />
          </div>
        </div>
      )}

      {children}
    </>
  )
}

interface ExceptionPageProps {
  data: any
  route: any
}

export const ExceptionPage: React.FC<ExceptionPageProps> = (props) => {
  const {data, route} = props
  const type = data?.type
  const path = route?.path
  const params = route?.queryParams

  const workspace = path?.includes("workspace")
  const dashboard = path?.includes("dashboard")
  const viewer = path?.includes("view")

  const [info, setInfo] = React.useState<any>(null)
  const profile = refs.profile?.deref()

  const authError = type === ":authentication"
  const notFound = type === ":not-found"
  const authenticated = isAuthenticated(profile)

  const requestAccess = workspace || dashboard || viewer

  React.useEffect(() => {
    if (!info?.loaded) {
      loadInfo(params).subscribe(
        (result: any) => setInfo(result),
        () => setInfo({loaded: true})
      )
    }
  }, [params, info])

  if (authError || notFound) {
    if (!authenticated) {
      return (
        <ContextWrapper
          isWorkspace={workspace}
          isDashboard={dashboard}
          isViewer={viewer}
          profile={profile}
        >
          <LoginModal/>
        </ContextWrapper>
      )
    }

    if (info?.loaded) {
      if (requestAccess) {
        return (
          <ContextWrapper
            isWorkspace={workspace}
            isDashboard={dashboard}
            isViewer={viewer}
            profile={profile}
          >
            <RequestAccess
              fileId={info?.fileId}
              teamId={info?.teamId}
              isDefault={info?.teamDefault}
              profile={profile}
              isWorkspace={workspace}
            />
          </ContextWrapper>
        )
      }

      return <ExceptionSection data={data}/>
    }

    return null
  }

  return <ExceptionSection data={data}/>
}
