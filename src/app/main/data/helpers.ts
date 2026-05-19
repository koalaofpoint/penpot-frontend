// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { d, dm } from "../../common/data";
import { cfh } from "../../common/files/helpers";
import { gmt } from "../../common/geom/matrix";
import { gpt } from "../../common/geom/point";
import { gsh } from "../../common/geom/shapes";
import { path } from "../../common/types/path";

export interface State {
  profile?: any;
  files: Record<string, any>;
  currentFileId?: string;
  currentPageId?: string;
  workspaceLocal: {
    selected?: any[];
    editPath?: Record<string, any>;
    modifiers?: Record<string, any>;
    vbox?: { x: number; y: number; width: number; height: number };
  };
  projects: Record<string, any>;
  currentTeamId?: string;
}

// Profile lookup
export const lookupProfile = (state: State): any | undefined => state.profile;
export const lookupProfileById = (state: State, profileId: string): any | undefined =>
  dm.getIn(state, ["profiles", profileId]);

// Libraries and files
export const lookupLibraries = (state: State): Record<string, any> => state.files;

// File lookup
export const lookupFile = (state: State): any | undefined => {
  if (!state.currentFileId) return undefined;
  return lookupFileById(state, state.currentFileId);
};

export const lookupFileById = (state: State, fileId: string): any | undefined =>
  dm.getIn(state, ["files", fileId]);

export const lookupFileData = (state: State): any | undefined => {
  if (!state.currentFileId) return undefined;
  return lookupFileDataById(state, state.currentFileId);
};

export const lookupFileDataById = (state: State, fileId: string): any | undefined =>
  dm.getIn(state, ["files", fileId, "data"]);

// Page lookup
export const getPage = (fdata: any, pageId: string): any | undefined =>
  dm.getIn(fdata, ["pages-index", pageId]);

export const lookupPage = (state: State): any | undefined => {
  if (!state.currentFileId || !state.currentPageId) return undefined;
  return lookupPageById(state, state.currentFileId, state.currentPageId);
};

export const lookupPageById = (state: State, pageId: string): any | undefined => {
  if (!state.currentFileId) return undefined;
  return lookupPageByIdInFile(state, state.currentFileId, pageId);
};

export const lookupPageByIdInFile = (state: State, fileId: string, pageId: string): any | undefined =>
  dm.getIn(state, ["files", fileId, "data", "pages-index", pageId]);

// Page objects lookup
export const lookupPageObjects = (state: State): any | undefined => {
  if (!state.currentFileId || !state.currentPageId) return undefined;
  return lookupPageObjectsById(state, state.currentFileId, state.currentPageId);
};

export const lookupPageObjectsById = (state: State, pageId: string): any | undefined => {
  if (!state.currentFileId) return undefined;
  return lookupPageObjectsByIdInFile(state, state.currentFileId, pageId);
};

export const lookupPageObjectsByIdInFile = (state: State, fileId: string, pageId: string): any | undefined => {
  const page = lookupPageByIdInFile(state, fileId, pageId);
  return page ? page.objects : undefined;
};

// Selected objects processing
export const processSelected = (
  objects: Record<string, any>,
  selected: any[],
  options: { omitBlocked?: boolean } = {}
): any[] => {
  const { omitBlocked = false } = options;

  const selectable = (id: string): boolean => {
    const hasObject = objects.hasOwnProperty(id);
    const isBlocked = dm.getIn(objects, [id, "blocked"], false);
    return hasObject && (!omitBlocked || !isBlocked);
  };

  const cleanedSelected = cfh.cleanLoops(objects, selected);

  return cleanedSelected.filter(selectable);
};

export const splitTextShapes = (objects: Record<string, any>, ids: string[]): [string[], string[]] => {
  let textIds: string[] = [];
  let shapeIds: string[] = [];

  for (const id of ids) {
    const shape = objects[id];
    if (cfh.isTextShape(shape)) {
      textIds.push(id);
    } else {
      shapeIds.push(id);
    }
  }

  return [textIds, shapeIds];
};

// DEPRECATED
export const lookupSelectedRaw = (state: State): any | undefined =>
  dm.getIn(state, ["workspace-local", "selected"]);

export const getSelectedIds = (state: State): any | undefined =>
  dm.getIn(state, ["workspace-local", "selected"]);

export const lookupSelected = (
  state: State,
  pageId?: string,
  options?: { omitBlocked?: boolean }
): any[] => {
  const targetPageId = pageId || state.currentPageId;
  if (!targetPageId) return [];

  const objects = lookupPageObjectsByIdInFile(state, state.currentFileId || "", targetPageId);
  if (!objects) return [];

  const selected = dm.getIn(state, ["workspace-local", "selected"], []);
  return processSelected(objects, selected, options);
};

// Shape lookup
export const lookupShape = (state: State, id: string): any | undefined => {
  const pageId = state.currentPageId;
  if (!pageId) return undefined;
  return lookupShapeById(state, pageId, id);
};

export const lookupShapeById = (state: State, pageId: string, id: string): any | undefined => {
  const objects = lookupPageObjectsByIdInFile(state, state.currentFileId || "", pageId);
  return objects ? objects[id] : undefined;
};

export const lookupShapes = (state: State, ids: string[]): any[] => {
  const pageId = state.currentPageId;
  if (!pageId) return [];
  return lookupShapesById(state, pageId, ids);
};

export const lookupShapesById = (state: State, pageId: string, ids: string[]): any[] => {
  const objects = lookupPageObjectsByIdInFile(state, state.currentFileId || "", pageId);
  if (!objects) return [];

  return ids.map((id) => objects[id]).filter(Boolean);
};

// File and page updates
export const updateFile = (state: State, f: any): State => {
  const fileId = state.currentFileId;
  if (!fileId) return state;
  return updateFileById(state, fileId, f);
};

export const updateFileById = (state: State, fileId: string, f: any): State => {
  return d.updateInWhen(state, ["files", fileId], f);
};

export const updatePage = (state: State, f: any): State => {
  const fileId = state.currentFileId;
  const pageId = state.currentPageId;
  if (!fileId || !pageId) return state;
  return updatePageById(state, fileId, pageId, f);
};

export const updatePageById = (state: State, pageId: string, f: any): State => {
  const fileId = state.currentFileId;
  if (!fileId) return state;
  return updatePageByIdInFile(state, fileId, pageId, f);
};

export const updatePageByIdInFile = (state: State, fileId: string, pageId: string, f: any): State =>
  d.updateInWhen(state, ["files", fileId, "data", "pages-index", pageId], f);

// Shape filtering
export const filterShapes = (state: State, filterFn: (shape: any) => boolean): any[] => {
  const pageId = state.currentPageId;
  if (!pageId) return [];
  return filterShapesById(state, pageId, filterFn);
};

export const filterShapesById = (state: State, pageId: string, filterFn: (shape: any) => boolean): any[] => {
  const objects = lookupPageObjectsByIdInFile(state, state.currentFileId || "", pageId);
  if (!objects) return [];

  return Object.values(objects).filter(filterFn);
};

// Select boolean children
export const selectBoolChildren = (state: State, parentId: string): Record<string, any> => {
  const objects = lookupPageObjectsById(state) || {};

  const shapeModifiers = state.workspaceModifiers || {};
  const contentModifiers = dm.getIn(state, ["workspace-local", "edit-path"], {});

  const result: Record<string, any> = {};

  const childrenIds = cfh.getChildrenIds(objects, parentId);

  for (const id of childrenIds) {
    const shape = objects[id];
    if (!shape) continue;

    let currentShape = shape;
    const shapeModifier = dm.getIn(shapeModifiers, [id, "modifiers"]);
    if (shapeModifier) {
      currentShape = gsh.transformShape(currentShape, shapeModifier);
    }

    const contentModifier = dm.getIn(contentModifiers, [id, "content-modifiers"]);
    if (contentModifier) {
      currentShape = {
        ...currentShape,
        content: path.applyContentModifiers(currentShape.content, contentModifier),
      };
    }

    result[id] = currentShape;
  }

  return result;
};

// Viewport center
export const getViewportCenter = (state: State): any | undefined => {
  const vbox = dm.getIn(state, ["workspace-local", "vbox"]);
  if (!vbox) return undefined;

  const { x, y, width, height } = vbox;
  return gpt.point(x + width / 2, y + height / 2);
};

// Team lookup
export const lookupTeamFiles = (state: State): Record<string, any> => {
  if (!state.currentTeamId) return {};
  return lookupTeamFilesById(state, state.currentTeamId);
};

export const lookupTeamFilesById = (state: State, teamId: string): Record<string, any> => {
  return Object.entries(state.files).reduce((acc, [id, file]: [string, any]) => {
    if (file.teamId === teamId) {
      acc[id] = file;
    }
    return acc;
  }, {} as Record<string, any>);
};

export const lookupTeamProjects = (state: State): Record<string, any> => {
  if (!state.currentTeamId) return {};
  return lookupTeamProjectsById(state, state.currentTeamId);
};

export const lookupTeamProjectsById = (state: State, teamId: string): Record<string, any> => {
  return Object.entries(state.projects).reduce((acc, [id, project]: [string, any]) => {
    if (project.teamId === teamId) {
      acc[id] = project;
    }
    return acc;
  }, {} as Record<string, any>);
};

// Selection rectangle
export const getSelrect = (selrectTransform: any, shape: any): any[] => {
  if (selrectTransform) {
    const { center, width, height, transform } = selrectTransform;
    return [
      gsh.centerToRect(center, width, height),
      gmt.transformIn(center, transform),
    ];
  }

  const selrect = dm.getProp(shape, "selrect");
  const matrix = gsh.transformMatrix(shape);
  return [selrect, matrix];
};