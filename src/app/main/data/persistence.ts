// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { d, dm } from "../../common/data";
import { log } from "../../common/logging";
import { uuid } from "../../common/uuid";
import { dch } from "./changes";
import { dsh } from "./helpers";
import { rp } from "./repo";
import { rx } from "../../beicon/v2";
import { ptk } from "../../potok/v2";

export interface Commit {
  id: string;
  fileId: string;
  fileRevn: number;
  fileVern: number;
  changes: any[];
  features: any;
  origin?: string;
  createdAt?: Date;
}

export interface PersistenceState {
  status: "idle" | "pending" | "saving" | "saved" | "error";
  runId?: string;
  queue: string[];
  index: Record<string, Commit>;
}

export interface State {
  persistence?: PersistenceState;
  sessionID?: string;
  permissions?: { canEdit: boolean };
}

const FORCE_PERSIST = Symbol("force-persist");

const running = false;
const revnData = new Map<string, number>();
const queueConj = (queue: string[], id: string): string[] => [...queue, id];

// Private helper functions

const updateStatus = (status: PersistenceState["status"]) => {
  return ptk.reify("update-status", {
    update(state: State): State {
      if (!state.persistence) return state;

      const pstate = state.persistence;
      log.trc("update-status", { from: pstate.status, to: status });

      let newStatus = status;
      if (status === "pending" && pstate.status === "saving") {
        newStatus = pstate.status;
      }

      const newPstate = {
        ...pstate,
        status: newStatus,
      };

      if (status === "error") {
        delete newPstate.runId;
      } else if (status === "saved") {
        delete newPstate.runId;
      }

      return {
        ...state,
        persistence: newPstate,
      };
    },
  });
};

const updateFileRevn = (fileId: string, revn: number) => {
  return ptk.reify("update-file-revn", {
    update(state: State): State {
      log.dbg("update-file-revn", { fileId, revn });
      return dsh.updateFile(state, fileId, (file) => ({
        ...file,
        revn: Math.max(file.revn || 0, revn),
      }));
    },

    effect(_state: State, _prevState: State, _dispatch: ptk.Dispatch) => {
      revnData.set(fileId, Math.max(revnData.get(fileId) || 0, revn));
    },
  });
};

const discardCommit = (commitId: string) => {
  return ptk.reify("discard-commit", {
    update(state: State): State {
      if (!state.persistence) return state;

      const pstate = state.persistence;
      const queue = pstate.queue;

      if (queue.length > 0 && queue[queue.length - 1] === commitId) {
        const newQueue = queue.slice(0, -1);
        const newIndex = { ...pstate.index };
        delete newIndex[commitId];

        return {
          ...state,
          persistence: {
            ...pstate,
            queue: newQueue,
            index: newIndex,
          },
        };
      }

      throw new Error("invalid state");
    },
  });
};

const appendCommit = (commit: Commit) => {
  const runId = uuid.next();

  return ptk.reify("append-commit", {
    update(state: State): State {
      if (!state.persistence) {
        state.persistence = {
          status: "idle",
          queue: [],
          index: {},
        };
      }

      log.trc("append-commit", { method: "update", commitId: commit.id });

      return {
        ...state,
        persistence: {
          ...state.persistence,
          runId,
          queue: queueConj(state.persistence.queue, commit.id),
          index: {
            ...state.persistence.index,
            [commit.id]: commit,
          },
        },
      };
    },

    watch(state: State, _prevState: State, _dispatch: ptk.Dispatch) {
      if (!state.persistence) return rx.empty();

      if (state.persistence.runId === runId) {
        return rx.of(
          runPersistenceTask(),
          updateStatus("saving")
        );
      }

      return rx.empty();
    },
  });
};

const discardPersistenceState = () => {
  return ptk.reify("discard-persistence-state", {
    update(state: State): State {
      const { persistence: _, ...rest } = state;
      return rest;
    },
  });
};

const persistCommit = (commitId: string) => {
  return ptk.reify("persist-commit", {
    watch(state: State, _prevState: State, _dispatch: ptk.Dispatch) {
      const commit = state.persistence?.index[commitId];
      if (!commit) return rx.empty();

      log.dbg("persist-commit", { commitId });

      const { fileId, fileRevn, fileVern, changes, features } = commit;
      const sessionID = state.sessionID;
      const permissions = state.permissions;

      const revn = Math.max(fileRevn, revnData.get(fileId) || 0);
      const params = {
        id: fileId,
        revn,
        vern: fileVern,
        sessionID,
        origin: commit.origin,
        createdAt: commit.createdAt,
        commitId,
        changes: Array.from(changes),
        features,
      };

      // Prevent commit changes by a team member without edition permission
      if (!permissions?.canEdit) {
        return rx.empty();
      }

      return rx.pipe(
        rp.cmd("update-file", params),
        rx.flatMap((response: { revn: number; lagged: any[] }) => {
          log.debug("changes persisted", { commitId, lagged: response.lagged.length });
          return rx.of(
            ptk.dataEvent("commit-persisted", commit),
            updateFileRevn(fileId, response.revn)
          );
        }),
        rx.catchError((cause: any) => {
          const authError = cause.type === "authentication";
          const errorEvent = authError ? rx.empty() : rx.of(updateStatus("error"));

          return rx.concat(
            errorEvent,
            rx.of(discardPersistenceState()),
            rx.throwError(cause)
          );
        })
      );
    },
  });
};

const runPersistenceTask = () => {
  return ptk.reify("run-persistence-task", {
    watch(state: State, _prevState: State, stream: rx.Observable<any>) {
      const queue = state.persistence?.queue || [];
      const commitId = queue.length > 0 ? queue[queue.length - 1] : null;

      if (!commitId) {
        return rx.of(updateStatus("saved"));
      }

      const stopperS = rx.merge(
        rx.filter(ptk.is("run-persistence-task"), stream),
        rx.filter(ptk.is("error"), stream)
      );

      log.dbg("run-persistence-task", { commitId });

      return rx.pipe(
        rx.merge(
          rx.of(persistCommit(commitId)),
          rx.pipe(
            stream,
            rx.filter(ptk.is("commit-persisted")),
            rx.map((event) => event.value),
            rx.filter((persistedCommit) => persistedCommit.id === commitId),
            rx.take(1),
            rx.flatMap(() => rx.of(discardCommit(commitId), runPersistenceTask()))
          )
        ),
        rx.takeUntil(stopperS)
      );
    },
  });
};

const mergeCommit = (buffer: Commit[]) => {
  return rx.pipe(
    rx.from(Object.entries(groupBy(buffer, "fileId"))),
    rx.flatMap(([_, commits]) => {
      const undoChanges = commits.flatMap((commit) => commit.undoChanges || []);
      const redoChanges = commits.flatMap((commit) => commit.redoChanges || []);
      const commit = commits[0];

      return rx.of({
        ...commit,
        undoChanges,
        redoChanges,
        changes: redoChanges,
      });
    })
  );
};

const groupBy = <T>(array: T[], key: keyof T): Record<string, T[]> => {
  return array.reduce((acc, item) => {
    const keyValue = String(item[key]);
    if (!acc[keyValue]) {
      acc[keyValue] = [];
    }
    acc[keyValue].push(item);
    return acc;
  }, {} as Record<string, T[]>);
};

export const initializePersistence = () => {
  return ptk.reify("initialize-persistence", {
    watch(_state: State, _prevState: State, stream: rx.Observable<any>) {
      log.debug("initialize persistence");

      const stopperS = rx.filter(ptk.is("initialize-persistence"), stream);

      const localCommitsS = rx.pipe(
        stream,
        rx.filter(dch.isCommit),
        rx.map((event) => event.value),
        rx.filter((commit) => commit.source === "local"),
        rx.filter((commit) => commit.undoChanges && commit.undoChanges.length > 0),
        rx.share()
      );

      const notifierS = rx.merge(
        rx.pipe(
          localCommitsS,
          rx.debounceTime(3000),
          rx.tap(() => log.trc("persistence beat"))
        ),
        rx.filter((event) => event === FORCE_PERSIST)
      );

      return rx.merge(
        rx.pipe(
          notifierS,
          rx.map(() => ptk.dataEvent("persistence-notification"))
        ),

        rx.pipe(
          localCommitsS,
          rx.debounceTime(200),
          rx.map(() => updateStatus("pending")),
          rx.takeUntil(stopperS)
        ),

        // Buffer and merge local commits
        rx.pipe(
          localCommitsS,
          rx.bufferUntil(notifierS),
          rx.flatMap(mergeCommit),
          rx.flatMap((commit) => rx.of(appendCommit(commit))),
          rx.takeUntil(rx.delay(100, stopperS)),
          rx.finalize(() => log.debug("finalize persistence: changes watcher"))
        ),

        // Track remote commits for updating file revn
        rx.pipe(
          stream,
          rx.filter(dch.isCommit),
          rx.map((event) => event.value),
          rx.filter((commit) => commit.source === "remote"),
          rx.flatMap((commit) => {
            if (commit.fileId && commit.fileRevn) {
              return rx.of(updateFileRevn(commit.fileId, commit.fileRevn));
            }
            return rx.empty();
          }),
          rx.takeUntil(stopperS)
        )
      );
    },
  });
};