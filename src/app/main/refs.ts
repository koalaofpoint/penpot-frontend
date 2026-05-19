// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from '../common/data/index.js';
import * as dm from '../common/data/macros.js';
import * as cph from '../common/files/helpers.js';
import * as ctt from '../common/types/shape-tree.js';
import * as ctl from '../common/types/shape/layout.js';
import * as ctob from '../common/types/tokens-lib.js';
import * as cf from '../config.js';
import * as dsh from './data/helpers.js';
import * as dwts from './data/workspace/tokens/selected-set.js';
import * as st from './store.js';
import { derived } from '../vendor/okulary/core.js';

// ---- Global refs

export const route = derived((state: any) => state.route, st.state);

export const router = derived((state: any) => state.router, st.state);

export const profile = derived((state: any) => state.profile, st.state);

export const currentPageId = derived((state: any) => state.currentPageId, st.state);

export const team = derived((state: any) => {
  const teamId = state.currentTeamId;
  const teams = state.teams;
  return teams[teamId];
}, st.state);

export const project = derived((state: any) => {
  const projectId = state.currentProjectId;
  const projects = state.projects;
  return projects[projectId];
}, st.state);

export const permissions = derived((state: any) => state.permissions, team);

export const teams = derived((state: any) => state.teams, st.state);

export const exception = derived((state: any) => state.exception, st.state);

export const threads = derived((state: any) => state.commentThreads, st.state);

export const shareLinks = derived((state: any) => state.shareLinks, st.state);

export const exportInfo = derived((state: any) => state.export, st.state);

export const persistence = derived((state: any) => state.persistence, st.state);

export const projects = derived((state: any) => state.projects, st.state);

export const files = derived((state: any) => state.files, st.state);

export const file = derived((state: any) => {
  const fileId = state.currentFileId;
  const files = state.files;
  return files[fileId];
}, st.state);

export const sharedFiles = derived((state: any) => state.sharedFiles, st.state);

export const selectLibraries = (files: any, fileId: string) => {
  return Object.entries(files)
    .reduce((result: Record<string, any>, [id, file]) => {
      if (id === fileId || file.libraryOf === fileId) {
        result[id] = file;
      }
      return result;
    }, {});
};

export const libraries = derived((state: any) => {
  const files = state.files;
  const fileId = state.currentFileId;
  return selectLibraries(files, fileId);
}, st.state);

export const extractSelectedFiles = (files: any, selected: any) => {
  const getFile = (id: string) => files[id];
  const simFile = (file: any) => ({
    id: file.id,
    name: file.name,
    projectId: file.projectId,
    isShared: file.isShared
  });

  return Array.from(selected)
    .map(getFile)
    .filter(Boolean)
    .map(simFile)
    .reduce((acc: Record<string, any>, file) => {
      acc[file.id] = file;
      return acc;
    }, {});
};

export const selectedFiles = derived((state: any) => {
  const selected = state.selectedFiles;
  const files = state.files;
  return extractSelectedFiles(files, selected);
}, st.state);

export const selectedProject = derived((state: any) => state.selectedProject, st.state);

export const dashboardLocal = derived((state: any) => state.dashboardLocal, st.state);

export const renderState = derived((state: any) => state.renderState, st.state);

export const renderContextLost = derived((state: any) => state.renderState?.lost, renderState);

export const workspaceLocal = derived((state: any) => state.workspaceLocal, st.state);

export const workspaceGlobal = derived((state: any) => state.workspaceGlobal, st.state);

export const workspaceDrawing = derived((state: any) => state.workspaceDrawing, st.state);

export const workspaceTokens = derived((state: any) => state.workspaceTokens, st.state);

export const workspaceSelrect = derived((state: any) => state.workspaceSelrect, st.state);

const selectedShapesData = derived((state: any) => {
  const objects = dsh.lookupPageObjects(state);
  const selected = dm.getIn(state, ['workspaceLocal', 'selected']);
  return { objects, selected };
}, st.state, (v1, v2) =>
  v1.objects === v2.objects && v1.selected === v2.selected
);

export const selectedShapes = derived((data: any) => {
  return dsh.processSelected(data.objects, data.selected);
}, selectedShapesData);

export const makeSelectedRef = (id: string) => {
  return derived((state: any) => state.includes(id), selectedShapes);
};

export const highlightedShapes = derived((state: any) => state.highlighted, workspaceLocal);

export const exportInProgress = derived((state: any) => state.export?.inProgress, exportInfo);

export const exportError = derived((state: any) => state.export?.error, exportInfo);

export const exportProgress = derived((state: any) => state.export?.progress, exportInfo);

export const exports = derived((state: any) => state.export?.exports, exportInfo);

export const exportDetailVisibility = derived((state: any) => state.export?.detailVisibility, exportInfo);

export const exportWidgetVisibility = derived((state: any) => state.export?.widgetVisibility, exportInfo);

export const exportHealth = derived((state: any) => state.export?.health, exportInfo);

export const selectedZoom = derived((state: any) => state.zoom, workspaceLocal);

export const selectedDrawingTool = derived((state: any) => state.tool, workspaceDrawing);

export const currentDrawingShape = derived((state: any) => state.object, workspaceDrawing);

export const selectedEdition = derived((state: any) => state.edition, workspaceLocal);

export const currentTransform = derived((state: any) => state.transform, workspaceLocal);

export const optionsMode = derived((state: any) => state.optionsMode, workspaceLocal);

export const optionsModeGlobal = derived((state: any) => state.optionsMode, workspaceGlobal);

export const defaultFont = derived((state: any) => state.defaultFont, workspaceGlobal);

export const inspectExpanded = derived((state: any) => state.inspectExpanded, workspaceLocal);

export const workspaceVport = derived((state: any) => state.vport, workspaceLocal);

export const vbox = derived((state: any) => state.vbox, workspaceLocal);

export const currentHover = derived((state: any) => state.hover, workspaceLocal);

export const contextMenu = derived((state: any) => state.contextMenu, workspaceLocal);

export const tokenContextMenu = derived((state: any) => state.tokenContextMenu, workspaceLocal);

export const editingPageItem = derived((state: any) => state.pageItem, workspaceLocal);

export const currentHoverIds = derived((state: any) => state.hoverIds, contextMenu);

export const workspaceLayout = derived((state: any) => state.workspaceLayout, st.state);

export const snapPixel = derived((state: any) => state.workspaceLayout?.snapPixelGrid, workspaceLayout);

export const rulers = derived((state: any) => state.workspaceLayout?.rulers, workspaceLayout);

export const workspaceData = derived((state: any) => dsh.lookupFileData(state), st.state);

export const workspaceFileColors = derived((data: any) => {
  if (!data?.colors) return undefined;
  return Object.entries(data.colors).reduce((acc: Record<string, any>, [key, value]) => {
    acc[key] = { ...value, fileId: data.id };
    return acc;
  }, {});
}, workspaceData);

export const recentColors = derived((state: any) => {
  const fileId = state.currentFileId;
  return dm.getIn(state, ['recentColors', fileId]);
}, st.state);

export const recentFonts = derived((state: any) => {
  const fileId = state.currentFileId;
  return dm.getIn(state, ['recentFonts', fileId]);
}, st.state);

export const workspaceFileTypography = derived((state: any) => state.typographies, workspaceData);

export const workspacePresence = derived((state: any) => state.workspacePresence, st.state);

export const workspacePage = derived((state: any) => dsh.lookupPage(state), st.state);

export const workspacePageFlows = derived((state: any) => state.flows?.length > 0, workspacePage);

export const workspacePageObjectById = (pageId: string, shapeId: string) => {
  return derived((state: any) => dsh.lookupShape(state, pageId, shapeId), st.state);
};

export const workspacePageObjects = derived((state: any) => dsh.lookupPageObjects(state), st.state);

export const workspaceReadOnly = derived((state: any) => state.readOnly, workspaceGlobal);

export const workspacePaddingsSelected = derived((state: any) => state.paddingsSelected, workspaceGlobal);

export const workspaceGapSelected = derived((state: any) => state.gapSelected, workspaceGlobal);

export const workspaceMarginsSelected = derived((state: any) => state.marginsSelected, workspaceGlobal);

export const objectById = (id: string) => {
  return derived((state: any) => state[id], workspacePageObjects);
};

export const objectsByIds = (ids: any[]) => {
  return derived((state: any) => ids.map(id => state[id]).filter(Boolean), workspacePageObjects);
};

export const parentsByIds = (ids: any[]) => {
  return derived((state: any) => {
    const parentIds = new Set(ids.map(id => state[id]?.parentId).filter(Boolean));
    return Array.from(parentIds).map(id => state[id]).filter(Boolean);
  }, workspacePageObjects);
};

export const shapeParents = (id: string) => {
  return derived((state: any) => {
    const parentIds = cph.getParentIds(state, id);
    return parentIds.map(parentId => state[parentId]).filter(Boolean);
  }, workspacePageObjects);
};

export const childrenObjects = (id: string) => {
  return derived((state: any) => {
    const children = dm.getIn(state, [id, 'shapes']);
    return children?.map((childId: string) => state[childId]).filter(Boolean) || [];
  }, workspacePageObjects);
};

export const allChildrenObjects = (id: string) => {
  return derived((state: any) => {
    const childrenIds = cph.getChildrenIds(state, id);
    return childrenIds.map(childId => state[childId]).filter(Boolean);
  }, workspacePageObjects);
};

export const workspaceFrames = derived((state: any) => ctt.getFrames(state), workspacePageObjects);

export const workspaceEditor = derived((state: any) => state.workspaceEditor, st.state);

export const workspaceEditorState = derived((state: any) => state.workspaceEditorState, st.state);

export const workspaceV2EditorState = derived((state: any) => state.workspaceV2EditorState, st.state);

export const workspaceModifiers = derived((state: any) => state.workspaceModifiers, st.state);

export const workspaceWasmModifiers = derived((state: any) => state.workspaceWasmModifiers, st.state);

const workspaceModifiersWithObjects = derived((state: any) => {
  return {
    modifiers: state.workspaceModifiers,
    objects: dsh.lookupPageObjects(state)
  };
}, st.state, (a, b) =>
  a.modifiers === b.modifiers && a.objects === b.objects
);

export const workspaceFrameModifiers = derived((state: any) => {
  const { modifiers, objects } = state;
  return Object.entries(modifiers).reduce((result: Record<string, any>, [id, frameModifiers]) => {
    const shape = objects[id];
    const frameId = shape?.frameId;

    if (cph.isFrameShape(shape)) {
      result[id] = { [id]: frameModifiers };
    } else if (frameId) {
      result[frameId] = { [id]: frameModifiers };
    }

    return result;
  }, {});
}, workspaceModifiersWithObjects);

export const workspaceModifiersByFrameId = (frameId: string) => {
  return derived((state: any) => state[frameId], workspaceFrameModifiers);
};

export const workspaceClipboardStyle = derived((state: any) => state.clipboardStyle, workspaceGlobal);

export const selectBoolChildren = (id: string) => {
  return derived((state: any) => dsh.selectBoolChildren(state, id), st.state);
};

export const isChildSelected = (id: string) => {
  return derived((state: any) => {
    const children = cph.getChildrenIds(state, id);
    return children.some(childId => state.selected.includes(childId));
  }, selectedShapesData);
};

export const workspaceFocusSelected = derived((state: any) => state.workspaceFocusSelected, st.state);

export const workspaceGetFlexChild = (ids: any[]) => {
  return derived((state: any) => {
    const objects = dsh.lookupPageObjects(state);
    return ids
      .map(id => objects[id])
      .filter(obj => ctl.isFlexLayoutImmediateChild(objects, obj));
  }, st.state);
};

// ---- Token refs

export const tokensLib = derived((state: any) => state.tokensLib, workspaceData);

export const workspaceTokenThemeGroups = derived((state: any) => ctob.getThemeGroups(state), tokensLib);

export const workspaceTokenTheme = (id: string) => {
  return derived((state: any) => {
    if (!state) return undefined;
    return ctob.getTheme(state, id);
  }, tokensLib);
};

export const workspaceTokenThemeTreeNoHidden = derived((state: any) => {
  return ctob.getThemeTree(ctob.deleteTheme(state, ctob.hiddenThemeId)) || [];
}, tokensLib);

export const workspaceTokenThemes = derived((state: any) => ctob.getThemes(state) || [], tokensLib);

export const workspaceTokenThemesNoHidden = derived((state: any) =>
  state.filter((theme: any) => !ctob.isHiddenTheme(theme)), workspaceTokenThemes
);

export const selectedTokenSetId = derived((state: any) => state.selectedTokenSetId, workspaceTokens);

export const workspaceOrderedTokenSets = derived((state: any) => ctob.getSets(state) || [], tokensLib);

export const workspaceTokenSetsTree = derived((state: any) => ctob.getSetTree(state), tokensLib);

export const workspaceActiveThemePaths = derived((state: any) => ctob.getActiveThemePaths(state), tokensLib);

export const workspaceAllTokensMap = derived((state: any) => ctob.getAllTokensMap(state), tokensLib);

export const tokenSetsAtPathAllActive = (groupPath: any) => {
  return derived((state: any) => {
    if (!state) return false;
    return ctob.setsAtPathAllActive(state, groupPath);
  }, tokensLib);
};

export const workspaceActiveThemePathsNoHidden = derived((state: any) =>
  new Set([...state].filter(path => path !== ctob.hiddenThemePath)), workspaceActiveThemePaths
);

export const workspaceActiveThemeSetsTokens = derived((state: any) =>
  ctob.getTokensInActiveSets(state) || {}, tokensLib
);

export const workspaceTokenInSelectedSet = (tokenId: string) => {
  return derived((state: any) => dwts.getTokenInSelectedSet(state, tokenId), st.state);
};

export const workspaceAllTokensInSelectedSet = derived((state: any) =>
  dwts.getAllTokensInSelectedSet(state) || {}, st.state
);

export const pluginsPermissionsPeek = derived((state: any) => {
  return dm.getIn(state, ['pluginsPermissionsPeek', 'data']);
}, st.state);

// ---- Viewer refs

export const getViewerObjects = (state: any, pageId: string) => {
  return dm.getIn(state, ['viewer', 'pages', pageId, 'objects']);
};

export const lookupViewerObjectsById = (pageId: string) => {
  return derived((state: any) => getViewerObjects(state, pageId), st.state);
};

export const viewerData = derived((state: any) => state.viewer, st.state);

export const viewerFile = derived((state: any) => state.file, viewerData);

export const viewerThumbnails = derived((state: any) => state.thumbnails, viewerFile);

export const viewerProject = derived((state: any) => state.project, viewerData);

export const viewerState = derived((state: any) => state.viewer, st.state);

export const viewerLocal = derived((state: any) => state.viewerLocal, st.state);

export const viewerOverlays = derived((state: any) => state.viewerOverlays, st.state);

export const commentThreads = derived((state: any) => state.commentThreads, st.state);

export const commentsLocal = derived((state: any) => state.commentsLocal, st.state);

export const profiles = derived((state: any) => state.profiles, st.state);

export const viewerFullscreen = derived((state: any) => {
  return dm.getIn(state, ['viewerLocal', 'fullscreen']);
}, st.state);

export const viewerZoomType = derived((state: any) => {
  return dm.getIn(state, ['viewerLocal', 'zoomType']);
}, st.state);

export const workspaceThumbnailById = (objectId: string) => {
  return derived((state: any) => {
    const thumbnail = dm.getIn(state, ['thumbnails', objectId]);
    return cf.resolveMedia(thumbnail);
  }, st.state);
};

export const workspaceTextModifier = derived((state: any) => state.workspaceTextModifier, st.state);

export const workspaceTextModifierById = (id: string) => {
  return derived((state: any) => state[id], workspaceTextModifier);
};

export const isLayoutChild = (ids: any[]) => {
  return derived((state: any) => {
    const objects = state;
    return ids
      .map(id => objects[id])
      .some(obj => ctl.isAnyLayoutImmediateChild(objects, obj));
  }, workspacePageObjects);
};

export const allLayoutChild = (ids: any[]) => {
  return derived((state: any) => {
    const objects = state;
    return ids
      .map(id => objects[id])
      .every(obj => ctl.isAnyLayoutImmediateChild(objects, obj));
  }, workspacePageObjects);
};

export const flexLayoutChild = (ids: any[]) => {
  return derived((state: any) => {
    const objects = state;
    return ids
      .map(id => objects[id])
      .every(obj => ctl.isFlexLayoutImmediateChild(objects, obj));
  }, workspacePageObjects);
};

export const gridLayoutChild = (ids: any[]) => {
  return derived((state: any) => {
    const objects = state;
    return ids
      .map(id => objects[id])
      .every(obj => ctl.isGridLayoutImmediateChild(objects, obj));
  }, workspacePageObjects);
};

export const colorpicker = derived((state: any) => state.colorpicker, st.state);

export const workspaceGridEdition = derived((state: any) => state.workspaceGridEdition, st.state);

export const workspaceGridEditionId = (id: string) => {
  return derived((state: any) => state[id], workspaceGridEdition);
};

export const workspacePreviewBlend = derived((state: any) => state.workspacePreviewBlend, st.state);

export const workspacePreviewBlendById = (id: string) => {
  return derived((state: any) => state[id], workspacePreviewBlend);
};

export const specializedPanel = derived((state: any) => state.specializedPanel, st.state);

export const updatingLibrary = derived((state: any) => state.updatingLibrary, st.state);

export const persistenceState = derived((state: any) => state.persistence?.status, st.state);

export const progress = derived((state: any) => state.progress, st.state);