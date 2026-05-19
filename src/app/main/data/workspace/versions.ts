// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { assert, getIn } from "../../../common/data/macros";
import * as sm from "../../../common/schema";
import * as ct from "../../../common/time";
import * as ev from "../event";
import * as dsh from "../helpers";
import * as dwp from "../persistence";
import * as dw from "./workspace";
import * as th from "./thumbnails";
import * as refs from "../../../refs";
import * as rp from "../../../repo";
import {
  Observable,
  concat,
  of,
  from,
  filter,
  take,
  map,
  mergeMap,
  tap,
  catchError,
} from "rxjs";
import * as ptk from "../../../potok/v2/ptk";

export interface VersionState {
  status: "loading" | "loaded" | "error";
  data: any[];
  editing: string | null;
}

const DEFAULT_STATE: VersionState = {
  status: "loading",
  data: null as any,
  editing: null,
};

export function initVersionsState(): ptk.Event {
  return {
    type: "app.main.data.workspace.versions/init-versions-state",
    update(state: any): any {
      return {
        ...state,
        workspaceVersions: DEFAULT_STATE,
      };
    },
    watch(): Observable<any> {
      return of(fetchVersions());
    },
  };
}

export function updateVersionsState(versionState: Partial<VersionState>): ptk.UpdateEvent {
  return {
    type: "app.main.data.workspace.versions/update-versions-state",
    update(state: any): any {
      return {
        ...state,
        workspaceVersions: {
          ...state.workspaceVersions,
          ...versionState,
        },
      };
    },
  };
}

export function fetchVersions(): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace.versions/fetch-versions",
    watch(_: any, state: any, _stream: any): Observable<any> {
      const fileId = state.currentFileId;

      if (!fileId) {
        return of();
      }

      return from(rp.cmd!("get-file-snapshots", { fileId })).pipe(
        map((data: any[]) =>
          updateVersionsState({ status: "loaded", data })
        )
      );
    },
  };
}

export function createVersion(): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace.versions/create-version",
    watch(_: any, state: any, _stream: any): Observable<any> {
      const label = ct.formatInst(ct.now(), "localized-date");
      const fileId = state.currentFileId;

      const forcePersist = of(dwp.forcePersist);
      const event = of(
        ptk.event(ev.event, {
          [ev.NAME]: "create-version",
        })
      );

      const waitForPersistence = from(refs.persistenceState).pipe(
        filter((s) => s === null || s === "saved"),
        take(1),
        mergeMap(() =>
          from(rp.cmd!("create-file-snapshot", { fileId, label }))
        ),
        mergeMap(({ id }: { id: string }) =>
          of(
            updateVersionsState({ editing: id }),
            fetchVersions()
          )
        )
      );

      return concat(forcePersist, event, waitForPersistence);
    },
  };
}

export function renameVersion(id: string, label: string): ptk.WatchEvent {
  assert(typeof id === "string" && id.length > 0, "expected valid uuid for `id`");
  assert(sm.validText(label), "expected not empty string for `label`");

  return {
    type: "app.main.data.workspace.versions/rename-version",
    watch(_: any, state: any, _stream: any): Observable<any> {
      const fileId = state.currentFileId;

      const updateState = of(
        updateVersionsState({ editing: null }),
        ptk.event(ev.event, {
          [ev.NAME]: "rename-version",
          fileId,
        })
      );

      const fetch = from(rp.cmd!("update-file-snapshot", { id, label })).pipe(
        map(() => fetchVersions())
      );

      return merge(updateState, fetch);
    },
  };
}

export function restoreVersion(
  id: string,
  origin: "version" | "snapshot" | "plugin"
): ptk.WatchEvent {
  assert(typeof id === "string" && id.length > 0, "expected valid uuid for `id`");

  return {
    type: "app.main.data.workspace.versions/restore-version",
    watch(_: any, state: any, _stream: any): Observable<any> {
      const fileId = state.currentFileId;
      const teamId = state.currentTeamId;

      const forcePersist = of(dwp.forcePersist);
      const removeHistoryFlag = of(dw.removeLayoutFlag("document-history"));

      const waitForPersistence = from(refs.persistenceState).pipe(
        filter((s) => s === null || s === "saved"),
        take(1),
        mergeMap(() =>
          from(rp.cmd!("restore-file-snapshot", { fileId, id }))
        ),
        tap(() => th.clearQueue()),
        map(() => dw.initializeWorkspace(teamId, fileId))
      );

      let event: Observable<any>;
      switch (origin) {
        case "version":
          event = of(
            ptk.event(ev.event, { [ev.NAME]: "restore-pin-version" })
          );
          break;
        case "snapshot":
          event = of(
            ptk.event(ev.event, { [ev.NAME]: "restore-autosave" })
          );
          break;
        case "plugin":
          event = of(
            ptk.event(ev.event, { [ev.NAME]: "restore-version-plugin" })
          );
          break;
        default:
          event = of();
      }

      return concat(forcePersist, removeHistoryFlag, waitForPersistence, event);
    },
  };
}

export function deleteVersion(id: string): ptk.WatchEvent {
  assert(typeof id === "string" && id.length > 0, "expected valid uuid for `id`");

  return {
    type: "app.main.data.workspace.versions/delete-version",
    watch(_: any, _state: any, _stream: any): Observable<any> {
      return from(rp.cmd!("delete-file-snapshot", { id })).pipe(
        map(() => fetchVersions())
      );
    },
  };
}

export function pinVersion(id: string): ptk.WatchEvent {
  assert(typeof id === "string" && id.length > 0, "expected valid uuid for `id`");

  return {
    type: "app.main.data.workspace.versions/pin-version",
    watch(_: any, state: any, _stream: any): Observable<any> {
      const version = state.workspaceVersions?.data?.find(
        (v: any) => v.id === id
      );

      if (!version) {
        return of();
      }

      const params = {
        id,
        label: ct.formatInst(version.createdAt, "localized-date"),
      };

      return from(rp.cmd!("update-file-snapshot", params)).pipe(
        mergeMap(() =>
          of(
            updateVersionsState({ editing: id }),
            fetchVersions(),
            ptk.event(ev.event, { [ev.NAME]: "pin-version" })
          )
        )
      );
    },
  };
}

export function lockVersion(id: string): ptk.WatchEvent {
  assert(typeof id === "string" && id.length > 0, "expected valid uuid for `id`");

  return {
    type: "app.main.data.workspace.versions/lock-version",
    watch(_: any, _state: any, _stream: any): Observable<any> {
      return from(rp.cmd!("lock-file-snapshot", { id })).pipe(
        map(() => fetchVersions())
      );
    },
  };
}

export function unlockVersion(id: string): ptk.WatchEvent {
  assert(typeof id === "string" && id.length > 0, "expected valid uuid for `id`");

  return {
    type: "app.main.data.workspace.versions/unlock-version",
    watch(_: any, _state: any, _stream: any): Observable<any> {
      return from(rp.cmd!("unlock-file-snapshot", { id })).pipe(
        map(() => fetchVersions())
      );
    },
  };
}

// --- Plugin-specific events ---

function waitPersistedStatus(): Observable<any> {
  return from(refs.persistenceState).pipe(
    filter((s) => s === null || s === "saved"),
    take(1)
  );
}

export function createVersionFromPlugins(
  fileId: string,
  label: string,
  resolve: (value: any) => void,
  reject: (error: any) => void
): ptk.WatchEvent {
  assert(typeof fileId === "string" && fileId.length > 0, "expected valid uuid for `file-id`");
  assert(sm.validText(label), "expected not empty string for `label`");

  return {
    type: "app.main.data.workspace.versions/create-version-from-plugins",
    watch(_: any, state: any, _stream: any): Observable<any> {
      const currentFileId = state.currentFileId;

      const forcePersist =
        fileId === currentFileId ? of(dwp.forcePersist) : of();

      const waitForPersistence =
        fileId === currentFileId ? waitPersistedStatus() : of("nothing");

      const createSnapshot = waitForPersistence.pipe(
        mergeMap(() =>
          from(rp.cmd!("create-file-snapshot", { fileId, label }))
        ),
        mergeMap(({ id }: { id: string }) =>
          from(rp.cmd!("get-file-snapshots", { fileId })).pipe(
            take(1),
            map((versions: any[]) =>
              versions.find((v: any) => v.id === id)
            )
          )
        ),
        tap(resolve),
        catchError((error) => {
          reject(error);
          return of();
        })
      );

      const event = of(
        ptk.event(ev.event, {
          [ev.ORIGIN]: "plugins",
          [ev.NAME]: "create-version",
        })
      );

      return concat(event, forcePersist, createSnapshot);
    },
  };
}

export function restoreVersionFromPlugin(
  fileId: string,
  id: string,
  resolve: (value: any) => void,
  _reject: (error: any) => void
): ptk.WatchEvent {
  assert(typeof id === "string" && id.length > 0, "expected valid uuid for `id`");

  return {
    type: "app.main.data.workspace.versions/restore-version-from-plugins",
    watch(_: any, state: any, _stream: any): Observable<any> {
      const file = dsh.lookupFile(state, fileId);
      const teamId = file?.teamId || state.currentFileId;

      const event = of(
        ptk.event(ev.event, { [ev.NAME]: "restore-version-plugin" }),
        dwp.forcePersist
      );

      const restore = waitPersistedStatus().pipe(
        mergeMap(() =>
          from(rp.cmd!("restore-file-snapshot", { fileId, id }))
        ),
        map(() => dw.initializeWorkspace(teamId, fileId))
      );

      const finish = of(1).pipe(
        tap(resolve),
        ignoreElements()
      );

      return concat(event, restore, finish);
    },
  };
}
