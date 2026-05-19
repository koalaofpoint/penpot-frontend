// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from "../../../common/data";
import { assert, getIn } from "../../../common/data/macros";
import * as cpc from "../../../common/files/changes";
import * as sm from "../../../common/schema";
import * as ct from "../../../common/time";
import { UUID, zero as uuidZero } from "../../../common/uuid";
import * as dch from "../changes";
import * as dc from "../common";
import * as dsh from "../helpers";
import * as modal from "../modal";
import * as dpl from "../plugins";
import * as dws from "../websocket";
import * as dw from "./workspace";
import * as dwc from "./common";
import * as dwe from "./edition";
import * as dwly from "./layout";
import * as dwl from "./libraries";
import * as dwt from "./texts";
import * as rt from "../../router";
import { global } from "../../../util/globals";
import * as mse from "../../../util/mouse";
import * as obj from "../../../util/object";
import * as rxs from "../../../util/rxops";
import { Observable, merge, of, from, filter, map, takeUntil, throttleTime, concat, delay } from "rxjs";
import * as ptk from "../../../potok/v2/ptk";

// FIXME: this ns should be renamed to something different

const FINALIZE = "app.main.data.workspace.notifications/finalize";

export function finalize(): ptk.Event {
  return {
    type: FINALIZE,
  };
}

const PRESENCE_PALETTE = [
  "#f49ef7", // pink
  "#75cafc", // blue
  "#fdcf79", // gold
  "#a9bdfa", // indigo
  "#faa6b7", // red
  "#cbaaff", // purple
  "#f9b489", // orange
  "#dee563", // yellow -> default presence color
  "#b1e96f", // lemon
];

export function initialize(
  teamId: UUID,
  fileId: UUID
): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace.notifications/initialize",
    watch(_: any, state: any, stream: any): Observable<any> {
      const stopper = stream.pipe(
        filter((e: any) => ptk.type(e) === FINALIZE)
      );

      const profileId = state.profileId;

      const initMsg = [
        { type: "subscribe-file", fileId, version: (global as any).penpotVersion },
        { type: "subscribe-team", teamId },
      ];

      const endMsg = { type: "unsubscribe-file", fileId };

      const sendSubscription = from(initMsg).pipe(
        map((msg) => dws.send(msg))
      );

      const receiveMessages = stream.pipe(
        filter((e: any) => ptk.type(e) === `${dws.MESSAGE}`),
        map((e: any) => (e as any).data),
        filter((msg: any) => {
          const topic = msg.topic;
          return (
            topic === uuidZero ||
            topic === profileId ||
            topic === teamId ||
            topic === fileId
          );
        }),
        map((msg: any) => processMessage(msg))
      );

      const reconnect = stream.pipe(
        filter((e: any) => ptk.type(e) === `${dws.OPENED}`),
        map(() => initMsg.map((msg) => dws.send(msg)))
      );

      const presence = of(
        handlePresence({
          type: "connect",
          sessionId: state.sessionId,
          profileId: state.profileId,
        })
      );

      const pointerSend = stream.pipe(
        filter(mse.isPointerEvent),
        filter((e: any) => mse.getPointerSource(e) === "viewport"),
        throttleTime(50),
        map((e: any) => handlePointerSend(fileId, e.pt))
      );

      const merged = merge(
        sendSubscription,
        receiveMessages,
        reconnect,
        presence,
        pointerSend
      ).pipe(takeUntil(stopper));

      return concat(merged, of(dws.send(endMsg)));
    },
  };
}

function handleChangeTeamRole(msg: any): ptk.Event {
  const { role } = msg;

  return {
    type: "app.main.data.workspace.notifications/handle-change-team-role",
    watch(): Observable<any> {
      const interrupt = of(
        "interrupt" as const,
        dwe.clearEditionMode(),
        dwc.setWorkspaceReadOnly(false)
      );

      const changeRole = of(
        dc.changeTeamRole(msg),
        dwt.updateEditorState()
      ).pipe(delay(100));

      const setMode =
        role === "viewer"
          ? of(modal.hide(), dwly.setOptionsMode("inspect"), dpl.closeCurrentPlugin({ closeOnlyEditionPlugins: true }))
          : of(dwly.setOptionsMode("design"));

      return concat(interrupt, changeRole, setMode);
    },
  };
}

export function processMessage(msg: any): any {
  const { type } = msg;

  switch (type) {
    case "join-file":
      return handlePresence(msg);
    case "leave-file":
      return handlePresence(msg);
    case "presence":
      return handlePresence(msg);
    case "disconnect":
      return handlePresence(msg);
    case "pointer-update":
      return handlePointerUpdate(msg);
    case "file-change":
      return handleFileChange(msg);
    case "file-deleted":
      return handleFileDeleted(msg);
    case "file-restore":
      return handleFileRestore(msg);
    case "library-change":
      return handleLibraryChange(msg);
    case "notification":
      return dc.handleNotification(msg);
    case "team-role-change":
      return handleChangeTeamRole(msg);
    case "team-membership-change":
      return dc.teamMembershipChange(msg);
    default:
      return null;
  }
}

export function handlePointerSend(
  fileId: UUID,
  point: any
): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace.notifications/handle-pointer-send",
    watch(_: any, state: any, _stream: any): Observable<any> {
      const pageId = state.currentPageId;
      const local = state.workspaceLocal || {};

      const message = {
        type: "pointer-update",
        fileId,
        pageId,
        zoom: local.zoom,
        zoomInverse: local.zoomInverse,
        vbox: local.vbox,
        vport: local.vport,
        position: point,
      };

      return of(dws.send(message));
    },
  };
}

function getNextColor(presence: Map<string, any>): string {
  const used = new Set<string>();
  for (const [, session] of presence) {
    if (session.color) {
      used.add(session.color);
    }
  }

  for (const color of PRESENCE_PALETTE) {
    if (!used.has(color)) {
      return color;
    }
  }

  return "#dee563";
}

function updateColor(color: string | null, presence: Map<string, any>): string {
  return color !== null ? color : getNextColor(presence);
}

function updateSession(
  session: any,
  sessionId: string,
  profileId: string,
  version: any,
  presence: Map<string, any>
): any {
  return {
    ...session,
    id: sessionId,
    profileId,
    updatedAt: ct.now(),
    version,
    color: updateColor(session?.color, presence),
    textColor: "#000000",
  };
}

function updatePresence(
  presence: Map<string, any>,
  sessionId: string,
  profileId: string,
  version: any
): Map<string, any> {
  const session = presence.get(sessionId);
  const updatedSession = updateSession(
    session || {},
    sessionId,
    profileId,
    version,
    presence
  );

  const newPresence = new Map(presence);
  newPresence.set(sessionId, updatedSession);
  return d.withoutNils(newPresence);
}

export function handlePresence(
  message: { type: string; sessionId: string; profileId: string; version?: any }
): ptk.UpdateEvent {
  const { type, sessionId, profileId, version } = message;

  return {
    type: "app.main.data.workspace.notifications/handle-presence",
    update(state: any): any {
      if (type === "disconnect" || type === "leave-file") {
        const presence = new Map(state.workspacePresence || {});
        presence.delete(sessionId);
        return { ...state, workspacePresence: presence };
      }

      const presence = new Map(state.workspacePresence || {});
      presence.set(
        sessionId,
        updateSession(
          presence.get(sessionId),
          sessionId,
          profileId,
          version,
          presence
        )
      );

      return { ...state, workspacePresence: d.withoutNils(presence) };
    },
  };
}

export function handlePointerUpdate(msg: {
  pageId: UUID;
  sessionId: string;
  position: any;
  zoom: number;
  zoomInverse: number;
  vbox: any;
  vport: any;
}): ptk.UpdateEvent {
  const { pageId, sessionId, position, zoom, zoomInverse, vbox, vport } = msg;

  return {
    type: "app.main.data.workspace.notifications/handle-pointer-update",
    update(state: any): any {
      const presence = new Map(state.workspacePresence || {});
      const session = presence.get(sessionId) || {};
      presence.set(sessionId, {
        ...session,
        zoom,
        zoomInverse,
        vbox,
        vport,
        point: position,
        updatedAt: ct.now(),
        pageId,
      });

      return { ...state, workspacePresence: presence };
    },
  };
}

export function handleFileChange(msg: {
  fileId: UUID;
  changes: any[];
  revn: number;
  vern: number;
}): ptk.Event {
  const { fileId, changes, revn, vern } = msg;

  return {
    type: "app.main.data.workspace.notifications/handle-file-change",
    data: { changes },

    watch(): Observable<any> {
      return of(
        dch.commit({
          fileId,
          fileRevn: revn,
          fileVern: vern,
          saveUndo: false,
          source: "remote",
          redoChanges: [...changes],
          undoChanges: [],
        })
      );
    },
  };
}

export function handleFileDeleted(msg: { fileId: UUID }): ptk.WatchEvent {
  const { fileId } = msg;

  return {
    type: "app.main.data.workspace.notifications/handle-file-deleted",
    watch(_: any, state: any, _stream: any): Observable<any> {
      const currFileId = state.currentFileId;
      const teamId = state.currentTeamId;

      if (fileId === currFileId) {
        return of(rt.nav("dashboard-recent", { teamId }));
      }

      return of();
    },
  };
}

export function handleFileRestore(msg: { fileId: UUID; vern: number }): ptk.WatchEvent {
  const { fileId, vern } = msg;

  return {
    type: "app.main.data.workspace.notifications/handle-file-restore",
    watch(_: any, state: any, _stream: any): Observable<any> {
      const currFileId = state.currentFileId;
      const file = dsh.lookupFile(state, currFileId);
      const currVern = file?.vern;

      if (fileId === currFileId && vern !== currVern) {
        return of(ptk.event(dw.reloadCurrentFile));
      }

      return of();
    },
  };
}

export function handleLibraryChange(msg: {
  fileId: UUID;
  modifiedAt: Date;
  changes: any[];
  revn: number;
}): ptk.WatchEvent {
  const { fileId, modifiedAt, changes, revn } = msg;

  return {
    type: "app.main.data.workspace.notifications/handle-library-change",
    watch(_: any, state: any, _stream: any): Observable<any> {
      const files = state.files;

      if (files && files.has(fileId)) {
        return of(
          dwl.extLibraryChanged(fileId, modifiedAt, revn, changes),
          dwl.notifySyncFile()
        );
      }

      return of();
    },
  };
}
