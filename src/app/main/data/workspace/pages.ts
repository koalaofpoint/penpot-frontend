// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { assert, getIn } from "../../../common/data/macros";
import * as pcb from "../../../common/files/changes-builder";
import * as cfh from "../../../common/files/helpers";
import * as gpt from "../../../common/geom/point";
import * as ctc from "../../../common/types/component";
import * as ctkl from "../../../common/types/components-list";
import * as ctn from "../../../common/types/container";
import * as ctp from "../../../common/types/page";
import * as ctst from "../../../common/types/shape-tree";
import { UUID, zero as uuidZero, next as uuidNext } from "../../../common/uuid";
import * as cf from "../../../config";
import * as dch from "../changes";
import * as dcm from "../common";
import * as ev from "../event";
import * as dsh from "../helpers";
import * as dps from "../persistence";
import * as dwd from "./drawing";
import * as fdf from "./fix-deleted-fonts";
import * as layout from "./layout";
import * as dwl from "./libraries";
import * as dwth from "./thumbnails";
import * as features from "../../features";
import * as rt from "../../router";
import * as mw from "../../worker";
import * as wasmShape from "../../../render-wasm/shape";
import * as http from "../../../util/http";
import { tr, translate as t } from "../../../util/i18n";
import { Observable, of, from, merge, concat, filter, map, ignoreElements, tap } from "rxjs";
import * as ptk from "../../../potok/v2/ptk";

export const DEFAULT_WORKSPACE_LOCAL = { zoom: 1 };

function selectFrameTool(
  fileId: UUID,
  pageId: UUID
): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace.pages/select-frame-tool",
    watch(_: any, state: any, _stream: any): Observable<any> {
      const page = dsh.lookupPage(state, fileId, pageId);

      if (ctp.isEmpty(page)) {
        return of(dwd.selectForDrawing("frame"));
      }

      return of();
    },
  };
}

function getPageCache(
  state: any,
  fileId: UUID,
  pageId: UUID
): any {
  return getIn(state, ["workspace-cache", [fileId, pageId]]);
}

function initializePageStar(
  fileId: UUID,
  pageId: UUID
): ptk.Event {
  return {
    type: "app.main.data.workspace.pages/initialize-page*",
    update(state: any): any {
      const stateAfterUpdate = dsh.updatePage(
        state,
        fileId,
        pageId,
        (page: any) => ctst.startPageIndex(page.objects)
      );

      const page = dsh.lookupPage(stateAfterUpdate, fileId, pageId);
      const local =
        getPageCache(stateAfterUpdate, fileId, pageId) ||
        DEFAULT_WORKSPACE_LOCAL;

      return {
        ...stateAfterUpdate,
        currentPageId: pageId,
        workspaceLocal: {
          ...local,
          selected: d.orderedSet(),
        },
        workspaceTrimmedPage: {
          id: page.id,
          name: page.name,
        },
        workspaceLayout: layout.loadLayoutFlags(state),
        workspaceGlobal: layout.loadLayoutState(state),
      };
    },
    watch(_: any, state: any, _stream: any): Observable<any> {
      const page = dsh.lookupPage(state, fileId, pageId);
      const objects = page.objects;

      const uris = new Set<string>();
      for (const obj of Object.values(objects)) {
        const metadata = (obj as any).metadata;
        const fillImage = (obj as any).fillImage;
        if (metadata) {
          const resolved = cf.resolveFileMedia(metadata);
          if (resolved) uris.add(resolved);
        }
        if (fillImage) {
          const resolved = cf.resolveFileMedia(fillImage);
          if (resolved) uris.add(resolved);
        }
      }

      const fetchUris = from(Array.from(uris)).pipe(
        map((uri) => http.fetchDataUri(uri, false)),
        ignoreElements()
      );

      const initIndex = mw.ask!({ cmd: "index/initialize", page }).pipe(
        ignoreElements()
      );

      return merge(fetchUris, initIndex);
    },
  };
}

export function initializePage(
  fileId: UUID,
  pageId: UUID
): ptk.WatchEvent {
  assert(typeof fileId === "string" && fileId.length > 0, "expected valid uuid for `file-id`");
  assert(typeof pageId === "string" && pageId.length > 0, "expected valid uuid for `page-id`");

  return {
    type: "app.main.data.workspace.pages/initialize-page",
    watch(_: any, state: any, _stream: any): Observable<any> {
      const page = dsh.lookupPage(state, fileId, pageId);

      if (page) {
        const initPage = of(
          initializePageStar(fileId, pageId),
          fdf.fixDeletedFontsForPage(fileId, pageId)
        );

        const thumbnails = features.activeFeature(state, "render-wasm/v1")
          ? of()
          : of(dwth.watchStateChanges(fileId, pageId));

        const componentChanges = of(dwl.watchComponentChanges());

        const profile = state.profile;
        const props = profile?.props || {};
        const selectFrame =
          !props.workspaceVisited
            ? of(selectFrameTool(fileId, pageId))
            : of();

        return concat(
          initPage,
          thumbnails,
          componentChanges,
          selectFrame
        );
      }

      return of(dcm.goToWorkspace({ fileId, [rt.REPLACE]: true }));
    },
  };
}

export function finalizePage(
  fileId: UUID,
  pageId: UUID
): ptk.UpdateEvent {
  assert(typeof fileId === "string" && fileId.length > 0, "expected valid uuid for `file-id`");
  assert(typeof pageId === "string" && pageId.length > 0, "expected valid uuid for `page-id`");

  return {
    type: "app.main.data.workspace.pages/finalize-page",
    update(state: any): any {
      const local = state.workspaceLocal || {};
      const { edition, editPath, selected, ...restLocal } = local;

      const isExit = rt.lookupName(state) !== "workspace";

      const workspaceCache = new Map(state.workspaceCache || {});
      workspaceCache.set([fileId, pageId], restLocal);

      let newState: any = {
        ...state,
        workspaceCache,
      };

      delete newState.currentPageId;
      delete newState.workspaceLocal;
      delete newState.workspaceTrimmedPage;
      delete newState.workspaceFocusSelected;

      if (isExit) {
        delete newState.workspaceDrawing;
      }

      return newState;
    },
  };
}

export function updatePageRoot(
  fileId: UUID,
  pageId: UUID
): ptk.UpdateEvent {
  return {
    type: "app.main.data.workspace.pages/update-page-root",
    update(state: any): any {
      return dsh.updateIn(
        state,
        ["files", fileId, "data", "pages-index", pageId, "objects", uuidZero],
        (obj: any) => wasmShape.createShape(obj)
      );
    },
  };
}

export function createPage(params: {
  pageId?: UUID;
  fileId: UUID;
}): ptk.Event {
  const { pageId, fileId } = params;
  const id = pageId || uuidNext();

  return {
    type: "app.main.data.workspace.pages/create-page",
    data: { id, fileId },

    watch(it: any, state: any, _stream: any): Observable<any> {
      const fileData = dsh.lookupFileData(state);
      const pagesIndex = fileData.pagesIndex;
      const unames = cfh.getUsedNames(Object.values(pagesIndex));
      const name = cfh.generateUniqueName("Page", unames, { immediateSuffix: true });

      const changes = pcb
        .emptyChanges(it)
        .addEmptyPage(id, name);

      const commit = of(dch.commitChanges(changes));
      const updateRoot = features.activeFeature(state, "render-wasm/v1")
        ? of(updatePageRoot(fileId, id))
        : of();

      return concat(commit, updateRoot);
    },
  };
}

export function duplicatePage(pageId: UUID): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace.pages/duplicate-page",
    watch(it: any, state: any, _stream: any): Observable<any> {
      const newPageId = uuidNext();
      const fdata = dsh.lookupFileData(state);
      const pagesIndex = fdata.pagesIndex;
      const page = pagesIndex[pageId];

      const unames = cfh.getUsedNames(Object.values(pagesIndex));

      const suffixFn = (copyCount: number) => {
        const suffix = copyCount > 1 ? ` ${copyCount}` : "";
        return ` ${tr("dashboard.copy-suffix")}${suffix}`;
      };

      const baseName = page.name;
      const name = cfh.generateUniqueName(baseName, unames, { suffixFn });

      const objects = Object.fromEntries(
        Object.entries(page.objects).map(([id, obj]: [string, any]) => [
          id,
          { ...obj, useForThumbnail: undefined },
        ])
      );

      const mainNotVariantIds = new Set<string>();
      for (const [id, shape] of Object.entries(objects)) {
        if (
          ctc.mainInstance(shape as any) &&
          !ctc.isVariant(shape as any)
        ) {
          mainNotVariantIds.add(id);
        }
      }

      const idsToRemove = new Set<string>();
      for (const id of mainNotVariantIds) {
        const childrenIds = cfh.getChildrenIds(objects, id);
        childrenIds.forEach((childId) => idsToRemove.add(childId));
      }

      const variantMains = Object.values(objects).filter((shape) =>
        ctc.isVariant(shape as any)
      );

      const variantsIdsMap: Record<string, UUID> = {};
      for (const shape of variantMains as any[]) {
        const oldId = shape.id;
        variantsIdsMap[oldId] = uuidNext();
        variantsIdsMap[shape.componentId] = uuidNext();
        variantsIdsMap[shape.variantId] = uuidNext();
      }

      const addComponentCopy = (
        objs: Record<string, any>,
        id: string,
        shape: any
      ): Record<string, any> => {
        const component = ctkl.getComponent(fdata, shape.componentId);
        const parentId =
          shape.parentId !== uuidZero ? shape.parentId : undefined;

        const [newShape, newShapes] = ctn.makeComponentInstance(
          page,
          component,
          fdata,
          gpt.point(shape.x, shape.y),
          {
            keepIds: true,
            forceFrameId: shape.frameId,
            forceParentId: parentId,
          }
        );

        const children = Object.fromEntries(
          newShapes.map((s: any) => [s.id, s])
        );

        return { ...objs, [id]: newShape, ...children };
      };

      const updateVariantValues = (shape: any): any => {
        let newShape = { ...shape };
        if (shape.componentId) {
          newShape.componentId = variantsIdsMap[shape.componentId];
        }
        if (shape.variantId) {
          newShape.variantId = variantsIdsMap[shape.variantId];
        }
        return newShape;
      };

      let newObjects: Record<string, any> = {};

      for (const [id, shape] of Object.entries(objects)) {
        if (mainNotVariantIds.has(id)) {
          newObjects = addComponentCopy(newObjects, id, shape);
        } else if (idsToRemove.has(id)) {
          // Skip
        } else if (variantsIdsMap[id]) {
          newObjects[id] = updateVariantValues(shape);
        } else {
          newObjects[id] = shape;
        }
      }

      const remappedObjects: Record<string, any> = {};
      for (const [id, shape] of Object.entries(newObjects)) {
        const newId = variantsIdsMap[id] || id;
        const newParentId = variantsIdsMap[shape.parentId] || shape.parentId;
        const newFrameId = variantsIdsMap[shape.frameId] || shape.frameId;

        let updatedShape: any = {
          ...shape,
          id: newId,
          parentId: newParentId,
          frameId: newFrameId,
        };

        if (shape.shapes) {
          updatedShape.shapes = shape.shapes.map(
            (childId: string) => variantsIdsMap[childId] || childId
          );
        }

        remappedObjects[newId] = updatedShape;
      }

      const newPage = {
        ...page,
        name,
        id: newPageId,
        objects: remappedObjects,
      };

      const addComp = (changes: any, main: any): any => {
        const newComponentId = variantsIdsMap[main.componentId];
        const newVariantId = variantsIdsMap[main.variantId];
        const mainInstanceId = variantsIdsMap[main.id];
        const component = ctkl.getComponent(fdata, main.componentId);

        return pcb.addComponent(
          changes,
          newComponentId,
          component.path,
          component.name,
          [],
          mainInstanceId,
          newPageId,
          component.annotation,
          newVariantId,
          component.variantProperties
        );
      };

      let changes = pcb.emptyChanges(it);
      changes = pcb.addPage(changes, newPageId, newPage);
      changes = changes.withPage(newPage);
      changes = changes.withObjects(newObjects);

      for (const main of variantMains) {
        changes = addComp(changes, main);
      }

      return of(dch.commitChanges(changes));
    },
  };
}

export function renamePage(id: UUID, name: string): ptk.WatchEvent {
  assert(typeof id === "string" && id.length > 0);
  assert(typeof name === "string" && name.length > 0);

  return {
    type: "app.main.data.workspace.pages/rename-page",
    watch(it: any, state: any, _stream: any): Observable<any> {
      const page = dsh.lookupPage(state, id);
      const changes = pcb
        .emptyChanges(it)
        .withPage(page)
        .modPage(page, { name });

      return of(dch.commitChanges(changes));
    },
  };
}

function deletePageComponents(
  changes: any,
  page: any
): any {
  const componentsToDelete: UUID[] = [];

  for (const shape of Object.values(page.objects)) {
    if ((shape as any).mainInstance === true) {
      componentsToDelete.push((shape as any).componentId);
    }
  }

  for (const componentId of componentsToDelete) {
    changes = pcb.deleteComponent(changes, componentId, page.id);
  }

  return changes;
}

export function deletePage(id: UUID): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace.pages/delete-page",
    watch(it: any, state: any, _stream: any): Observable<any> {
      const fileId = state.currentFileId;
      const fdata = dsh.lookupFileData(state, fileId);
      const pindex = fdata.pagesIndex;
      const pages = fdata.pages;

      const index = pages.indexOf(id);
      const page = pindex[id];
      const pageWithIndex = { ...page, index };
      const remainingPages = pages.filter((p: UUID) => p !== id);

      let changes = pcb.emptyChanges(it);
      changes = changes.withLibraryData(fdata);
      changes = deletePageComponents(changes, pageWithIndex);
      changes = pcb.delPage(changes, pageWithIndex);

      const commit = dch.commitChanges(changes);
      const redirect =
        id === state.currentPageId
          ? of(dcm.goToWorkspace({ pageId: remainingPages[0] }))
          : of();

      return of(commit, redirect);
    },
  };
}
