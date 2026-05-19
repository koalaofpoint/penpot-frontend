// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from "app/common/data";
import * as dm from "app/common/data/macros";
import * as ex from "app/common/exceptions";
import * as log from "app/common/logging";
import * as sm from "app/common/schema";
import * as ctt from "app/common/types/team";
import * as u from "app/common/uri";
import * as cf from "app/config";
import * as ev from "app/main/data/event";
import * as di from "app/main/data/media";
import * as dp from "app/main/data/profile";
import * as features from "app/main/features";
import * as rp from "app/main/repo";
import * as rt from "app/main/router";
import * as clipboard from "app/util/clipboard";
import * as storage from "app/util/storage";
import * as rx from "rxjs";
import * as str from "app/util/strings";

log.setLevel("warn");

export const TEAMS_FETCHED = "app.main.data.team/teams-fetched";
export const FETCH_TEAMS = "app.main.data.team/fetch-teams";
export const MEMBERS_FETCHED = "app.main.data.team/members-fetched";
export const FETCH_MEMBERS = "app.main.data.team/fetch-members";
export const INVITATIONS_FETCHED = "app.main.data.team/invitations-fetched";
export const FETCH_INVITATIONS = "app.main.data.team/fetch-invitations";
export const TEAM_INITIALIZED = "app.main.data.team/team-initialized";
export const INITIALIZE_TEAM = "app.main.data.team/initialize-team";
export const FINALIZE_TEAM = "app.main.data.team/finalize-team";
export const UPDATE_MEMBER_ROLE = "app.main.data.team/update-member-role";
export const DELETE_MEMBER = "app.main.data.team/delete-member";
export const STATS_FETCHED = "app.main.data.team/stats-fetched";
export const FETCH_STATS = "app.main.data.team/fetch-stats";
export const WEBHOOKS_FETCHED = "app.main.data.team/webhooks-fetched";
export const FETCH_WEBHOOKS = "app.main.data.team/fetch-webhooks";
export const UPDATE_TEAM_PHOTO = "app.main.data.team/update-team-photo";
export const TEAM_CREATED = "app.main.data.team/team-created";
export const CREATE_TEAM = "app.main.data.team/create-team";
export const CREATE_TEAM_WITH_INVITATIONS = "app.main.data.team/create-team-with-invitations";
export const UPDATE_TEAM = "app.main.data.team/update-team";
export const TEAM_LEAVED = "app.main.data.team/team-leaved";
export const LEAVE_CURRENT_TEAM = "app.main.data.team/leave-current-team";
export const CREATE_INVITATIONS = "app.main.data.team/create-invitations";
export const COPY_INVITATION_LINK = "app.main.data.team/copy-invitation-link";
export const UPDATE_INVITATION_ROLE = "app.main.data.team/update-invitation-role";
export const DELETE_INVITATION = "app.main.data.team/delete-invitation";
export const TEAM_DELETED = "app.main.data.team/team-deleted";
export const DELETE_TEAM = "app.main.data.team/delete-team";
export const DELETE_WEBHOOK = "app.main.data.team/delete-webhook";
export const UPDATE_WEBHOOK = "app.main.data.team/update-webhook";
export const CREATE_WEBHOOK = "app.main.data.team/create-webhook";
export const SHARED_FILES_FETCHED = "app.main.data.team/shared-files-fetched";
export const FETCH_SHARED_FILES = "app.main.data.team/fetch-shared-files";

export function getLastTeamId(): string | undefined {
  return storage.global[":app.main.data.team/current-team-id" as keyof typeof storage.global] as string | undefined;
}

export interface Team {
  id: string;
  name: string;
  members?: unknown[];
  invitations?: unknown[];
  stats?: unknown;
  webhooks?: unknown[];
  permissions?: unknown;
  features?: string[];
}

export function teamsFetched(teams: Team[]) {
  return {
    type: TEAMS_FETCHED,
    teams,
    [Symbol.iterator]: function* (): Generator<unknown> {
      yield teams;
    },
  };
}

export function fetchTeams() {
  return {
    type: FETCH_TEAMS,
    [Symbol.iterator]: function* (): Generator<unknown> {
      const teams = yield* rp.cmd("get-teams").toPromise();
      return teamsFetched(teams as Team[]);
    },
  };
}

export function membersFetched(teamId: string, members: unknown[]) {
  return {
    type: MEMBERS_FETCHED,
    teamId,
    members,
    [Symbol.iterator]: function* (): Generator<unknown> {
      yield {
        teams: {
          [teamId]: {members},
        },
        profiles: d.indexBy(members as {id: string}[], "id"),
      };
    },
  };
}

export function fetchMembers(teamId?: string) {
  return {
    type: FETCH_MEMBERS,
    [Symbol.iterator]: function* (state): Generator<unknown> {
      const actualTeamId = teamId || (state as {currentTeamId?: string}).currentTeamId;
      if (!actualTeamId) return;
      const members = yield* rp.cmd("get-team-members", {teamId: actualTeamId}).toPromise();
      return membersFetched(actualTeamId, members as unknown[]);
    },
  };
}

export function invitationsFetched(teamId: string, invitations: unknown[]) {
  return {
    type: INVITATIONS_FETCHED,
    teamId,
    invitations,
    [Symbol.iterator]: function* (): Generator<unknown> {
      yield {
        teams: {
          [teamId]: {invitations},
        },
      };
    },
  };
}

export function fetchInvitations() {
  return {
    type: FETCH_INVITATIONS,
    [Symbol.iterator]: function* (state): Generator<unknown> {
      const teamId = (state as {currentTeamId: string}).currentTeamId;
      const invitations = yield* rp.cmd("get-team-invitations", {teamId}).toPromise();
      return invitationsFetched(teamId, invitations as unknown[]);
    },
  };
}

export function teamInitialized(teamId: string) {
  return {
    type: TEAM_INITIALIZED,
    teamId,
    [Symbol.iterator]: function* (state): Generator<unknown> {
      const teams = (state as {teams: Record<string, Team>}).teams;
      const team = teams?.[teamId];
      if (!team) {
        throw ex.createError({type: "authentication"});
      }
      const permissions = team.permissions;
      const teamFeatures = team.features;
      return [
        (state: unknown) => ({...state as object, permissions}),
        features.initialize(teamFeatures),
        fetchMembers(teamId),
      ];
    },
  };
}

export function initializeTeam(teamId: string) {
  return {
    type: INITIALIZE_TEAM,
    teamId,
    [Symbol.iterator]: function* (state, stream): Generator<unknown> {
      state = {...state, currentTeamId: teamId};
      const stopper = rx.filter((e) => (e as {type: string}).type === FINALIZE_TEAM, stream);
      return rx.takeUntil(
        rx.merge(
          rx.of(fetchTeams()),
          rx.pipe(
            rx.filter((e) => (e as {type: string}).type === TEAMS_FETCHED, stream),
            rx.map((e) => teamInitialized(teamId)),
          ),
        ),
        stopper,
      );
    },
  };
}

export function finalizeTeam(teamId: string) {
  return {
    type: FINALIZE_TEAM,
    teamId,
    [Symbol.iterator]: function* (state): Generator<unknown> {
      const teamId_ = (state as {currentTeamId: string}).currentTeamId;
      if (teamId_ === teamId) {
        return {
          ...state,
          currentTeamId: undefined,
          sharedFiles: undefined,
          fonts: undefined,
        };
      }
      return state;
    },
  };
}

export function updateMemberRole(params: {role: string; memberId: string}) {
  return {
    type: UPDATE_MEMBER_ROLE,
    params,
    [Symbol.iterator]: function* (state): Generator<unknown> {
      const teamId = (state as {currentTeamId: string}).currentTeamId;
      const fullParams = {...params, teamId};
      yield* rp.cmd("update-team-member-role", fullParams).toPromise();
      return [
        dp.refreshProfile(),
        fetchMembers(teamId),
        fetchTeams(),
        ev.event({
          name: "update-team-member-role",
          teamId,
          role: params.role,
          memberId: params.memberId,
        }),
      ];
    },
  };
}

export function deleteMember(params: {memberId: string}) {
  dm.assert!(params.memberId != null && typeof params.memberId === "string");
  return {
    type: DELETE_MEMBER,
    params,
    [Symbol.iterator]: function* (state): Generator<unknown> {
      const teamId = (state as {currentTeamId: string}).currentTeamId;
      const fullParams = {...params, teamId};
      yield* rp.cmd("delete-team-member", fullParams).toPromise();
      return [
        dp.refreshProfile(),
        fetchMembers(teamId),
        fetchTeams(),
        ev.event({
          name: "delete-team-member",
          teamId,
          memberId: params.memberId,
        }),
      ];
    },
  };
}

export function statsFetched(teamId: string, stats: unknown) {
  return {
    type: STATS_FETCHED,
    teamId,
    stats,
    [Symbol.iterator]: function* (): Generator<unknown> {
      yield {
        teams: {
          [teamId]: {stats},
        },
      };
    },
  };
}

export function fetchStats() {
  return {
    type: FETCH_STATS,
    [Symbol.iterator]: function* (state): Generator<unknown> {
      const teamId = (state as {currentTeamId: string}).currentTeamId;
      const stats = yield* rp.cmd("get-team-stats", {teamId}).toPromise();
      return statsFetched(teamId, stats);
    },
  };
}

export function webhooksFetched(teamId: string, webhooks: unknown[]) {
  return {
    type: WEBHOOKS_FETCHED,
    teamId,
    webhooks,
    [Symbol.iterator]: function* (): Generator<unknown> {
      yield {
        teams: {
          [teamId]: {webhooks},
        },
      };
    },
  };
}

export function fetchWebhooks() {
  return {
    type: FETCH_WEBHOOKS,
    [Symbol.iterator]: function* (state): Generator<unknown> {
      const teamId = (state as {currentTeamId: string}).currentTeamId;
      const webhooks = yield* rp.cmd("get-webhooks", {teamId}).toPromise();
      return webhooksFetched(teamId, webhooks as unknown[]);
    },
  };
}

export function updateTeamPhoto(file: Blob) {
  dm.assert!("expected a valid blob for `file` param", di.blob(file));
  return {
    type: UPDATE_TEAM_PHOTO,
    [Symbol.iterator]: function* (state): Generator<unknown> {
      const onSuccess = di.notifyFinishedLoading;
      const onError = (err: unknown) => {
        di.notifyFinishedLoading();
        di.processError(err);
      };
      const teamId = (state as {currentTeamId: string}).currentTeamId;
      const prepare = (file: Blob) => ({file, teamId});

      di.notifyStartLoading();
      return rx.pipe(
        rx.of(file),
        rx.map(di.validateFile),
        rx.map(prepare),
        rx.mapcat((params) => rp.cmd("update-team-photo", params)),
        rx.tap(onSuccess),
        rx.mapcat(() => [
          fetchTeams(),
          ev.event({
            name: "update-team-photo",
            teamId,
          }),
        ]),
        rx.catchError(onError),
      );
    },
  };
}

export function teamCreated(team: Team) {
  return {
    type: TEAM_CREATED,
    team,
    [Symbol.iterator]: function* (): Generator<unknown> {
      yield team;
    },
  };
}

export interface CreateTeamParams {
  name: string;
  onSuccess?: (value: unknown) => void;
  onError?: (err: unknown) => void;
}

export function createTeam(params: CreateTeamParams) {
  dm.assert!("string?" , params.name);
  return {
    type: CREATE_TEAM,
    params,
    [Symbol.iterator]: function* (): Generator<unknown> {
      const onSuccess = params.onSuccess || identity;
      const onError = params.onError || rx.throwError;
      const teamFeatures = features.globalEnabledFeatures;
      const rpcParams = {name: params.name, features: teamFeatures};
      return rx.pipe(
        rp.cmd("create-team", rpcParams),
        rx.tap(onSuccess),
        rx.map(teamCreated),
        rx.catchError(onError),
      );
    },
  };
}

export function createTeamWithInvitations(params: {name: string; emails?: string[]; role?: string; invitations?: Array<{email: string; role: string}>}) {
  return {
    type: CREATE_TEAM_WITH_INVITATIONS,
    params,
    [Symbol.iterator]: function* (): Generator<unknown> {
      const onSuccess = params.onSuccess || identity;
      const onError = params.onError || rx.throwError;
      const teamFeatures = features.globalEnabledFeatures;
      const rpcParams = {
        name: params.name,
        emails: params.emails,
        role: params.role,
        invitations: params.invitations,
        features: teamFeatures,
      };
      return rx.pipe(
        rp.cmd("create-team-with-invitations", rpcParams),
        rx.tap(onSuccess),
        rx.map(teamCreated),
        rx.catchError(onError),
      );
    },
  };
}

export function updateTeam(params: {id: string; name: string}) {
  return {
    type: UPDATE_TEAM,
    params,
    [Symbol.iterator]: function* (state): Generator<unknown> {
      state = {
        ...state,
        teams: {
          ...(state as {teams: Record<string, Team>}).teams,
          [params.id]: {
            ...((state as {teams: Record<string, Team>}).teams?.[params.id] || {}),
            name: params.name,
          },
        },
      };
      yield* rp.cmd("update-team", params).toPromise();
      return state;
    },
  };
}

export function teamLeaved(params: {id: string}) {
  return {
    type: TEAM_LEAVED,
    params,
    [Symbol.iterator]: function* (state): Generator<unknown> {
      const teams = (state as {teams: Record<string, Team>}).teams;
      const ctid = storage.user?.[":app.main.data.team/current-team-id" as keyof typeof storage.user];
      if (ctid && !teams?.[ctid as string]) {
        storage.user = {...storage.user, [":app.main.data.team/current-team-id" as keyof typeof storage.user]: undefined};
      }
      yield {
        ...state,
        teams: {
          ...teams,
          [params.id]: undefined,
        },
      };
    },
  };
}

export function leaveCurrentTeam(params: {reassignTo?: string; onSuccess?: () => void; onError?: (err: unknown) => void}) {
  if (params.reassignTo) {
    dm.assert!("expect a valid uuid for `reassign-to`", params.reassignTo);
  }
  return {
    type: LEAVE_CURRENT_TEAM,
    params,
    [Symbol.iterator]: function* (state): Generator<unknown> {
      const teamId = (state as {currentTeamId: string}).currentTeamId;
      const fullParams = {...params, id: teamId};
      const onSuccess = params.onSuccess || (() => {});
      const onError = params.onError || rx.throwError;

      return rx.pipe(
        rp.cmd("leave-team", fullParams),
        rx.mapcat(() => [
          teamLeaved(fullParams),
          fetchTeams(),
          ev.event({
            name: "leave-team",
            reassignTo: params.reassignTo,
            teamId,
          }),
          onSuccess(),
        ]),
        rx.catchError(onError),
      );
    },
  };
}

const SCHEMA_CREATE_INVITATION = {};
const CHECK_CREATE_INVITATIONS_PARAMS = sm.checkFn(SCHEMA_CREATE_INVITATION);

export function createInvitations(params: {emails?: string[]; role?: string; teamId?: string; invitations?: Array<{email: string; role: string}>; resend?: boolean; onSuccess?: () => void; onError?: (err: unknown) => void}) {
  CHECK_CREATE_INVITATIONS_PARAMS(params);

  return {
    type: CREATE_INVITATIONS,
    params,
    [Symbol.iterator]: function* (): Generator<unknown> {
      const onSuccess = params.onSuccess || identity;
      const onError = params.onError || rx.throwError;

      const rpcParams = (() => {
        if (params.emails && params.role) {
          return {emails: params.emails, role: params.role, teamId: params.teamId};
        }
        if (params.invitations) {
          return {invitations: params.invitations, teamId: params.teamId};
        }
        throw ex.createError({type: "error", message: "Invalid parameters"});
      })();

      return rx.pipe(
        rp.cmd("create-team-invitations", rpcParams),
        rx.tap(onSuccess),
        rx.catchError(onError),
      );
    },
  };
}

export function copyInvitationLink(params: {email: string; teamId: string}) {
  sm.checkEmail(params.email);
  dm.assert!(params.teamId);

  return {
    type: COPY_INVITATION_LINK,
    params,
    [Symbol.iterator]: function* (state): Generator<unknown> {
      const onSuccess = params.onSuccess || identity;
      const onError = params.onError || rx.throwError;
      const router = (state as {router: rt.Router}).router;

      return rx.pipe(
        rp.cmd("get-team-invitation-token", params),
        rx.map((tokenParams) => rt.resolve(router, "auth-verify-token", tokenParams)),
        rx.map((fragment) => ({...cf.publicUri, fragment})),
        rx.tap((uri) => clipboard.toClipboard(String(uri))),
        rx.tap(onSuccess),
        rx.catchError(onError),
      );
    },
  };
}

export function updateInvitationRole(params: {email: string; teamId: string; role: string}) {
  sm.checkEmail(params.email);
  dm.assert!(params.teamId);
  dm.assert!(ctt.validRoles.includes(params.role));

  return {
    type: UPDATE_INVITATION_ROLE,
    params,
    [Symbol.iterator]: function* (): Generator<unknown> {
      const onSuccess = params.onSuccess || identity;
      const onError = params.onError || rx.throwError;

      return rx.pipe(
        rp.cmd("update-team-invitation-role", params),
        rx.tap(onSuccess),
        rx.catchError(onError),
      );
    },
  };
}

export function deleteInvitation(params: {email: string; teamId: string}) {
  sm.checkEmail(params.email);
  dm.assert!(params.teamId);

  return {
    type: DELETE_INVITATION,
    params,
    [Symbol.iterator]: function* (): Generator<unknown> {
      const onSuccess = params.onSuccess || identity;
      const onError = params.onError || rx.throwError;

      return rx.pipe(
        rp.cmd("delete-team-invitation", params),
        rx.tap(onSuccess),
        rx.catchError(onError),
      );
    },
  };
}

export function teamDeleted(id: string) {
  return {
    type: TEAM_DELETED,
    id,
    [Symbol.iterator]: function* (state): Generator<unknown> {
      yield {
        ...state,
        teams: {
          ...(state as {teams: Record<string, Team>}).teams,
          [id]: undefined,
        },
      };
    },
  };
}

export function deleteTeam(params: {id: string; onSuccess?: (result: unknown) => void; onError?: (err: unknown) => void}) {
  return {
    type: DELETE_TEAM,
    params,
    [Symbol.iterator]: function* (): Generator<unknown> {
      const onSuccess = params.onSuccess || rx.EMPTY;
      const onError = params.onError || rx.throwError;

      return rx.pipe(
        rp.cmd("delete-team", {id: params.id}),
        rx.mapcat((result) => rx.concat(rx.of(teamDeleted(params.id)), onSuccess(result))),
        rx.catchError(onError),
      );
    },
  };
}

export function deleteWebhook(params: {id: string; onSuccess?: () => void; onError?: (err: unknown) => void}) {
  dm.assert!(params.id);

  return {
    type: DELETE_WEBHOOK,
    params,
    [Symbol.iterator]: function* (state): Generator<unknown> {
      const teamId = (state as {currentTeamId: string}).currentTeamId;
      const fullParams = {...params, teamId};
      const onSuccess = params.onSuccess || identity;
      const onError = params.onError || rx.throwError;

      return rx.pipe(
        rp.cmd("delete-webhook", fullParams),
        rx.tap(onSuccess),
        rx.catchError(onError),
      );
    },
  };
}

export const VALID_MTYPES = new Set([
  "application/json",
  "application/x-www-form-urlencoded",
  "application/transit+json",
]);

export function updateWebhook(params: {id: string; uri: string; mtype: string; isActive: boolean; onSuccess?: () => void; onError?: (err: unknown) => void}) {
  dm.assert!(params.id);
  dm.assert!(VALID_MTYPES.has(params.mtype));
  dm.assert!(typeof params.isActive === "boolean");
  dm.assert!(u.uri(params.uri));

  return {
    type: UPDATE_WEBHOOK,
    params,
    [Symbol.iterator]: function* (state): Generator<unknown> {
      const teamId = (state as {currentTeamId: string}).currentTeamId;
      const fullParams = {...params, teamId};
      const onSuccess = params.onSuccess || rx.EMPTY;
      const onError = params.onError || rx.throwError;

      return rx.pipe(
        rp.cmd("update-webhook", fullParams),
        rx.mapcat(() => rx.concat(onSuccess(), rx.of(fetchWebhooks()))),
        rx.catchError(onError),
      );
    },
  };
}

export function createWebhook(params: {uri: string; mtype: string; isActive: boolean; onSuccess?: () => void; onError?: (err: unknown) => void}) {
  dm.assert!(VALID_MTYPES.has(params.mtype));
  dm.assert!(typeof params.isActive === "boolean");
  dm.assert!(u.uri(params.uri));

  return {
    type: CREATE_WEBHOOK,
    params,
    [Symbol.iterator]: function* (state): Generator<unknown> {
      const teamId = (state as {currentTeamId: string}).currentTeamId;
      const fullParams = {
        ...params,
        teamId,
        uri: str(params.uri),
      };
      const onSuccess = params.onSuccess || rx.EMPTY;
      const onError = params.onError || rx.throwError;

      return rx.pipe(
        rp.cmd("create-webhook", fullParams),
        rx.mapcat(() => rx.concat(onSuccess(), rx.of(fetchWebhooks()))),
        rx.catchError(onError),
      );
    },
  };
}

export function sharedFilesFetched(files: unknown[]) {
  return {
    type: SHARED_FILES_FETCHED,
    files,
    [Symbol.iterator]: function* (state): Generator<unknown> {
      const filesById = d.indexBy(files as {id: string}[], "id");
      yield {
        ...state,
        sharedFiles: {
          ...(state as {sharedFiles?: Record<string, unknown>}).sharedFiles,
          ...filesById,
        },
      };
    },
  };
}

export function fetchSharedFiles(teamId?: string) {
  return {
    type: FETCH_SHARED_FILES,
    [Symbol.iterator]: function* (state): Generator<unknown> {
      const actualTeamId = teamId || (state as {currentTeamId: string}).currentTeamId;
      if (!actualTeamId) return;
      const files = yield* rp.cmd("get-team-shared-files", {teamId: actualTeamId}).toPromise();
      return sharedFilesFetched(files as unknown[]);
    },
  };
}

function identity<T>(x: T): T {
  return x;
}
