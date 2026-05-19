// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { d } from "../../common/data";
import { log } from "../../common/logging";
import { uuid } from "../../common/uuid";
import { rp } from "./repo";
import { rx } from "../../beicon/v2";
import { ptk } from "../../potok/v2";

export interface Project {
  id: string;
  name: string;
  description?: string;
  teamId?: string;
  count?: number;
}

export interface State {
  projects: Record<string, Project>;
  files: Record<string, any>;
  currentProjectId?: string;
}

// Set log level
log.setLevel("warn");

const projectFetched = (project: Project) => {
  return ptk.reify("project-fetched", {
    update(state: State): State {
      return {
        ...state,
        projects: {
          ...state.projects,
          [project.id]: {
            ...state.projects[project.id],
            ...project,
          },
        },
      };
    },
  });
};

export const fetchProject = (projectId?: string) => {
  return ptk.reify("fetch-project", {
    watch(_state: State, _prevState: State, _dispatch: ptk.Dispatch) {
      const targetProjectId = projectId || _state.currentProjectId;
      if (!targetProjectId) return rx.empty();

      return rx.pipe(
        rp.cmd("get-project", { id: targetProjectId }),
        rx.map(projectFetched)
      );
    },
  });
};

export const initializeProject = (projectId: string) => {
  return ptk.reify("initialize-project", {
    update(state: State): State {
      return {
        ...state,
        currentProjectId: projectId,
      };
    },

    watch(_state: State, _prevState: State, _dispatch: ptk.Dispatch) {
      return rx.of(fetchProject(projectId));
    },
  });
};

export const finalizeProject = (projectId: string) => {
  return ptk.reify("finalize-project", {
    update(state: State): State {
      const currentProjectId = state.currentProjectId;
      if (currentProjectId === projectId) {
        const { currentProjectId: _, ...rest } = state;
        return rest;
      }
      return state;
    },
  });
};

const filesFetched = (projectId: string, files: any[]) => {
  return ptk.reify("files-fetched", {
    update(state: State): State {
      const indexedFiles = d.indexBy("id", files);
      return {
        ...state,
        files: {
          ...state.files,
          ...indexedFiles,
        },
        projects: {
          ...state.projects,
          [projectId]: {
            ...state.projects[projectId],
            count: files.length,
          },
        },
      };
    },
  });
};

export const fetchFiles = (projectId?: string) => {
  return ptk.reify("fetch-files", {
    watch(_state: State, _prevState: State, _dispatch: ptk.Dispatch) {
      const targetProjectId = projectId || _state.currentProjectId;
      if (!targetProjectId) return rx.empty();

      return rx.pipe(
        rp.cmd("get-project-files", { project_id: targetProjectId }),
        rx.map((files: any[]) => filesFetched(targetProjectId, files))
      );
    },
  });
};