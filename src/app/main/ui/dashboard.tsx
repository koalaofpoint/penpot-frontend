// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react"
import * as DM from "app/common/data/macros"
import * as CF from "app/config"
import * as DD from "app/main/data/dashboard"
import * as DDSC from "app/main/data/dashboard/shortcuts"
import * as EV from "app/main/data/event"
import * as Modal from "app/main/data/modal"
import * as Notif from "app/main/data/notifications"
import * as DP from "app/main/data/plugins"
import * as DPJ from "app/main/data/project"
import {refs} from "app/main/refs"
import * as RT from "app/main/router"
import {store} from "app/main/store"
import {ProgressNotificationWidget} from "app/main/ui/components/progress"
import {Ctx} from "app/main/ui/context"
import {DeletedSection} from "app/main/ui/dashboard/deleted"
import {FilesSection} from "app/main/ui/dashboard/files"
import {FontsPage, FontProvidersPage} from "app/main/ui/dashboard/fonts"
import {DashboardImport} from "app/main/ui/dashboard/import"
import {LibrariesPage} from "app/main/ui/dashboard/libraries"
import {ProjectsSection} from "app/main/ui/dashboard/projects"
import {SearchPage} from "app/main/ui/dashboard/search"
import {Sidebar} from "app/main/ui/dashboard/sidebar"
import {TeamSettingsPage, TeamMembersPage, TeamInvitationsPage, WebhooksPage} from "app/main/ui/dashboard/team"
import {TemplatesSection} from "app/main/ui/dashboard/templates"
import * as Hooks from "app/main/ui/hooks"
import {ModalContainer} from "app/main/ui/modal"
import {Plugins} from "app/main/ui/workspace/plugins"
import {installPlugin} from "app/plugins/register"
import * as DOM from "app/util/dom"
import {_tr} from "app/util/i18n"
import * as KBD from "app/util/keyboard"
import * as OBJ from "app/util/object"
import * as Storage from "app/util/storage"
import * as RX from "beicon.v2/core"
import * as STR from "cuerdas.core"
import * as Events from "goog.events"
import * as L from "okulary.core"
import * as PTK from "potok.v2/core"

interface DashboardContentProps {
  team: any
  projects: any
  project: any
  section: string
  searchTerm: string
  profile: any
  defaultProject: any
}

const DashboardContent: React.FC<DashboardContentProps> = (props) => {
  const {
    team,
    projects,
    project,
    section,
    searchTerm,
    profile,
    defaultProject,
  } = props

  const containerRef = React.useRef<HTMLDivElement>(null)
  const [contentWidth, setContentWidth] = React.useState(0)

  const projectId = project?.id
  const teamId = team?.id

  const permissions = team?.permissions
  const defaultProjectId = defaultProject?.id

  const onResize = React.useCallback(
    () => {
      const dom = containerRef.current
      const width = OBJ.get(dom, "clientWidth")
      setContentWidth(width)
    },
    []
  )

  const clearSelected = React.useCallback(
    () => store.emit(DD.clearSelectedFiles()),
    []
  )

  const showTemplates = CF.flags.has(":dashboard-templates-section") && permissions?.canEdit
  const showDeleted = permissions?.canEdit

  let resolvedSection = section
  if (!showDeleted && section === ":dashboard-deleted") {
    resolvedSection = ":dashboard-recent"
  }

  React.useEffect(() => {
    const handleResize = () => onResize()
    const key = Events.listen(window, "resize", handleResize)
    return () => Events.unlistenByKey(key)
  }, [onResize])

  React.useEffect(() => {
    onResize()
  }, [onResize])

  return (
    <div
      className="dashboard-content"
      onClick={clearSelected}
      ref={containerRef}
    >
      <ProgressNotificationWidget/>

      {resolvedSection === ":dashboard-recent" && projects && projects.length > 0 && (
        <>
          <ProjectsSection
            team={team}
            projects={projects}
            profile={profile}
          />

          {showTemplates && (
            <TemplatesSection
              profile={profile}
              projectId={projectId}
              teamId={teamId}
              defaultProjectId={defaultProjectId}
              contentWidth={contentWidth}
            />
          )}
        </>
      )}

      {resolvedSection === ":dashboard-fonts" && (
        <FontsPage team={team}/>
      )}

      {resolvedSection === ":dashboard-font-providers" && (
        <FontProvidersPage team={team}/>
      )}

      {resolvedSection === ":dashboard-files" && project && (
        <>
          <FilesSection team={team} project={project}/>

          {showTemplates && (
            <TemplatesSection
              profile={profile}
              teamId={teamId}
              projectId={projectId}
              defaultProjectId={defaultProjectId}
              contentWidth={contentWidth}
            />
          )}
        </>
      )}

      {resolvedSection === ":dashboard-search" && (
        <SearchPage team={team} searchTerm={searchTerm}/>
      )}

      {resolvedSection === ":dashboard-libraries" && (
        <LibrariesPage team={team} defaultProject={defaultProject}/>
      )}

      {resolvedSection === ":dashboard-members" && (
        <TeamMembersPage team={team} profile={profile}/>
      )}

      {resolvedSection === ":dashboard-invitations" && (
        <TeamInvitationsPage team={team} profile={profile}/>
      )}

      {resolvedSection === ":dashboard-webhooks" && (
        <WebhooksPage team={team}/>
      )}

      {resolvedSection === ":dashboard-settings" && (
        <TeamSettingsPage team={team} profile={profile}/>
      )}

      {resolvedSection === ":dashboard-deleted" && (
        <DeletedSection
          team={team}
          projects={projects}
          profile={profile}
        />
      )}
    </div>
  )
}

const refDashboardInitialized = L.derived(":team-initialized", store.state)

function usePluginRegister(pluginUrl: string | null, teamId: string, projectId: string) {
  React.useLayoutEffect(() => {
    if (!pluginUrl) return

    const navigateFile = (plugin: any, data: any) => {
      store.emit(
        DP.delayOpenPlugin(plugin),
        RT.nav(":workspace", {
          pageId: DM.getIn(data, ["pages", 0]),
          projectId,
          fileId: data?.id,
          teamId,
        })
      )
    }

    const createFile = (plugin: any) => {
      store.emit(Modal.hide())

      const data = {
        projectId,
        name: `${_tr("dashboard.plugins.try-plugin")} ${plugin?.name}`,
      }
      // Would need proper implementation with on-success callback
    }

    const openTryOutDialog = (plugin: any) => {
      Modal.show(":plugin-try-out", {
        plugin,
        onAccept: () => createFile(plugin),
        onClose: Modal.hide,
      })
    }

    const openPermissionsDialog = (plugin: any) => {
      Modal.show(":plugin-permissions", {
        plugin,
        onAccept: () => {
          installPlugin(plugin)
          store.emit(
            Modal.hide(),
            RT.nav(":dashboard-recent", {teamId}),
            openTryOutDialog(plugin)
          )
        },
        onClose: () => store.emit(Modal.hide(), RT.nav(":dashboard-recent", {teamId})),
      })
    }

    DP.fetchManifest(pluginUrl).subscribe(
      (plugin: any) => {
        if (plugin) {
          store.emit(PTK.event(EV.event("install-plugin", {name: plugin.name, url: pluginUrl})))
          openPermissionsDialog(plugin)
        } else {
          store.emit(Notif.error(_tr("dashboard.plugins.parse-error")))
        }
      },
      () => {
        store.emit(Notif.error(_tr("dashboard.plugins.bad-url")))
      }
    )

    // Sync storage cleanup
    const session = Storage.session.get()
    if (session) {
      Storage.session.set({...session, pluginUrl: undefined})
    }
  }, [pluginUrl, teamId, projectId])
}

function useTemplatesImport(canEdit: boolean, template: string | null, project: any) {
  React.useLayoutEffect(() => {
    if (!template || !project?.id || !project?.teamId) return

    const projectId = project.id
    const teamId = project.teamId

    if (!canEdit) {
      store.emit(Notif.error(_tr("dashboard.import.no-perms")))
      return
    }

    const validUrl = STR.endsWith(template, ".penpot")

    // Backwards compatibility
    let templateName = template
    if (STR.startsWith(template, "http")) {
      templateName = template.substring(CF.templatesUri?.length || 0)
    }

    const templateUrl = `/github/penpot-files/${templateName}`

    const onImport = () => {
      store.emit(
        DPJ.fetchFiles(projectId),
        DD.fetchRecentFiles(teamId),
        DD.fetchProjects(teamId),
        DD.clearSelectedFiles(),
        PTK.event(EV.event("install-template-from-link-finished", {
          name: templateName,
          url: templateUrl,
        }))
      )
    }

    if (validUrl) {
      store.emit(
        PTK.event(EV.event("install-template-from-link", {name: templateName, url: templateUrl})),
        Modal.show({
          type: ":import",
          projectId,
          entries: [{name: templateName, uri: templateUrl}],
          onFinishImport: onImport,
        })
      )
    } else {
      store.emit(Notif.error(_tr("dashboard.import.bad-url")))
    }

    // Sync storage cleanup
    const session = Storage.session.get()
    if (session) {
      Storage.session.set({...session, template: undefined})
    }
  }, [canEdit, template, project])
}

interface DashboardProps {
  profile: any
  projectId: string
  teamId: string
  searchTerm: string
  pluginUrl: string | null
  template: string | null
  section: string
}

export const Dashboard: React.FC<DashboardProps> = (props) => {
  const {
    profile,
    projectId,
    teamId,
    searchTerm,
    pluginUrl,
    template,
    section,
  } = props

  const team = refs.team?.deref()
  const projects = refs.projects?.deref()

  const project = projects?.get ? projects.get(projectId) : projects?.[projectId]

  const teamProjects = React.useMemo(() => {
    return Object.values(projects || {}).filter((p: any) => p?.teamId === teamId)
  }, [projects, teamId])

  const canEdit = DM.getIn(team, ["permissions", "can-edit"])

  const session = Storage.session.get()
  const resolvedTemplate = template || session?.template
  const resolvedPluginUrl = pluginUrl || session?.pluginUrl

  const defaultProject = React.useMemo(() => {
    return teamProjects.find((p: any) => p?.isDefault)
  }, [teamProjects])

  Hooks.useShortcuts(":dashboard", DDSC.shortcutsDashboard)

  React.useEffect(() => {
    store.emit(DD.initialize(teamId))
    return () => store.emit(DD.finalize(teamId))
  }, [teamId])

  React.useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (KBD.enter(event)) {
        DOM.stopPropagation(event)
        store.emit(DD.openSelectedFile())
      }
    }

    const key = Events.listen(goog.global, "keydown", handleKeydown)
    return () => Events.unlistenByKey(key)
  }, [])

  usePluginRegister(resolvedPluginUrl, teamId, defaultProject?.id)
  useTemplatesImport(canEdit, resolvedTemplate, defaultProject)

  return (
    <Ctx.CurrentProjectIdContext.Provider value={projectId}>
      <ModalContainer/>
      <main className="dashboard" key={team?.id}>
        <Sidebar
          team={team}
          projects={teamProjects}
          project={project}
          defaultProject={defaultProject}
          profile={profile}
          section={section}
          searchTerm={searchTerm}
        />
        <DashboardContent
          projects={teamProjects}
          profile={profile}
          project={project}
          defaultProject={defaultProject}
          section={section}
          searchTerm={searchTerm}
          team={team}
        />
      </main>
    </Ctx.CurrentProjectIdContext.Provider>
  )
}

export const DashboardPage: React.FC<any> = (props) => {
  return <Dashboard {...props}/>
}
