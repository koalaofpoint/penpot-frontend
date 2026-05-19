// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as DM from "app/common/data/macros"
import * as U from "app/common/uri"
import * as UUID from "app/common/uuid"
import * as CF from "app/config"
import * as DTM from "app/main/data/team"
import * as Errors from "app/main/errors"
import * as RP from "app/main/repo"
import * as RT from "app/main/router"
import {store} from "app/main/store"
import * as Storage from "app/util/storage"
import * as RX from "beicon.v2/core"
import * as STR from "cuerdas.core"
import * as PTK from "potok.v2/core"

export interface Route {
  path: string
  name: string
  params?: Record<string, string>
}

export interface RouteDefinition {
  path: string
  children?: Route[]
}

export const routes: RouteDefinition[] = [
  {
    path: "/auth",
    children: [
      {path: "/login", name: ":auth-login"},
      {path: "/register", name: ":auth-register"},
      {path: "/register/validate", name: ":auth-register-validate"},
      {path: "/register/success", name: ":auth-register-success"},
      {path: "/recovery/request", name: ":auth-recovery-request"},
      {path: "/recovery", name: ":auth-recovery"},
      {path: "/verify-token", name: ":auth-verify-token"},
    ],
  },
  {
    path: "/settings",
    children: [
      {path: "/profile", name: ":settings-profile"},
      {path: "/password", name: ":settings-password"},
      {path: "/feedback", name: ":settings-feedback"},
      {path: "/options", name: ":settings-options"},
      {path: "/subscriptions", name: ":settings-subscription"},
      {path: "/access-tokens", name: ":settings-access-tokens"},
      {path: "/notifications", name: ":settings-notifications"},
    ],
  },
  {path: "/frame-preview", name: ":frame-preview"},
  {path: "/view", name: ":viewer"},
  {path: "/view/:file-id", name: ":viewer-legacy"},
  // Debug routes - only in development
  ...(typeof process !== "undefined" && process.env && process.env.NODE_ENV === "development"
    ? [{path: "/debug/icons-preview", name: ":debug-icons-preview"}]
    : []),
  ...(typeof process !== "undefined" && process.env && process.env.NODE_ENV === "development"
    ? [{path: "/debug/playground", name: ":debug-playground"}]
    : []),
  {path: "/render-sprite/:file-id", name: ":render-sprite"},
  {
    path: "/dashboard",
    children: [
      {path: "/members", name: ":dashboard-members"},
      {path: "/invitations", name: ":dashboard-invitations"},
      {path: "/webhooks", name: ":dashboard-webhooks"},
      {path: "/settings", name: ":dashboard-settings"},
      {path: "/recent", name: ":dashboard-recent"},
      {path: "/search", name: ":dashboard-search"},
      {path: "/fonts", name: ":dashboard-fonts"},
      {path: "/fonts/providers", name: ":dashboard-font-providers"},
      {path: "/libraries", name: ":dashboard-libraries"},
      {path: "/files", name: ":dashboard-files"},
      {path: "/deleted", name: ":dashboard-deleted"},
    ],
  },
  {
    path: "/dashboard/team/:team-id",
    children: [
      {path: "/members", name: ":dashboard-legacy-team-members"},
      {path: "/invitations", name: ":dashboard-legacy-team-invitations"},
      {path: "/webhooks", name: ":dashboard-legacy-team-webhooks"},
      {path: "/settings", name: ":dashboard-legacy-team-settings"},
      {path: "/projects", name: ":dashboard-legacy-projects"},
      {path: "/search", name: ":dashboard-legacy-search"},
      {path: "/fonts", name: ":dashboard-legacy-fonts"},
      {path: "/fonts/providers", name: ":dashboard-legacy-font-providers"},
      {path: "/libraries", name: ":dashboard-legacy-libraries"},
      {path: "/projects/:project-id", name: ":dashboard-legacy-files"},
    ],
  },
  {path: "/workspace", name: ":workspace"},
  {path: "/workspace/:project-id/:file-id", name: ":workspace-legacy"},
]

function storeSessionParams(params: {template?: string; plugin?: string}) {
  const session = Storage.session.get() || {}

  if (params.template) {
    Storage.session.set({...session, template: params.template})
  }
  if (params.plugin) {
    Storage.session.set({...session, pluginUrl: params.plugin})
  }
}

export function onNavigate(
  router: any,
  path: string,
  sendEventInfo: boolean
): void {
  const location = document.location
  const [basePath, queryString] = STR.split(path, "?")
  const locationPath = `${location.origin}${location.pathname}`
  const validLocation = locationPath === CF.publicUri
  const match = RT.match(router, path)
  const emptyPath = basePath === "" || basePath === "/"
  const queryParams = U.queryStringToMap(queryString)

  if (!validLocation) {
    store.emit(RT.assignException({type: ":not-found"}))
    return
  }

  if (match) {
    store.emit(RT.navigated(match, sendEventInfo))
    return
  }

  // Recheck with additional profile request
  RP.cmd(":get-profile", {}).pipe(
    RX.concatMap((profile: any) =>
      RP.cmd(":get-teams", {}).pipe(
        RX.map((teams: any[]) => ({
          ...profile,
          "::teams": new Set(teams.map((t) => t.id)),
        }))
      )
    )
  ).subscribe(
    (profile: any) => {
      const {id, "::teams": teams} = profile

      if (id === UUID.zero) {
        storeSessionParams(queryParams as {template?: string; plugin?: string})
        store.emit(RT.nav(":auth-login", {}))
        return
      }

      if (emptyPath) {
        const teamId = DTM.getLastTeamId()
        if (teams.has(teamId)) {
          store.emit(RT.nav(":dashboard-recent", {...queryParams, teamId}))
        } else {
          store.emit(RT.nav(":dashboard-recent", {...queryParams, teamId: profile.defaultTeamId}))
        }
        return
      }

      store.emit(RT.assignException({type: ":not-found"}))
    },
    (cause: any) => {
      Errors.onError(cause)
    }
  )
}

export function initRoutes() {
  return PTK.createEvent(":init-routes", (watch: any, state: any, stream: any) => {
    return RX.of(
      RT.initializeRouter(routes),
      RT.initializeHistory(onNavigate)
    )
  })
}
