/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (c) KALEIDOS INC
 */

import { ptk, ev } from "../../potok";
import { d } from "../../../common/data";
import { dm } from "../../../common/data/macros";
import { ch } from "../../../common/files/changes";
import { pcb } from "../../../common/files/changes-builder";
import { cfh } from "../../../common/files/helpers";
import { cfsh } from "../../../common/files/shapes-helpers";
import { gpt } from "../../../common/geom/point";
import { log } from "../../../common/logging";
import { cll } from "../../../common/libraries";
import { cls } from "../../../common/logic/shapes";
import { clv } from "../../../common/logic/variants";
import { cpn } from "../../../common/path-names";
import { ct } from "../../../common/time";
import { ctc } from "../../../common/types/color";
import { ctk } from "../../../common/types/component";
import { ctkl } from "../../../common/types/components-list";
import { ctn } from "../../../common/types/container";
import { ctf } from "../../../common/types/file";
import { ctl } from "../../../common/types/library";
import { ctsl } from "../../../common/types/shape/layout";
import { ctt } from "../../../common/types/typography";
import { uuid } from "../../../common/uuid";
import { cf } from "../../../config";
import { dch } from "../../changes";
import { dc } from "../../comments";
import { dcm } from "../../common";
import { dsh } from "../../helpers";
import { modal } from "../../modal";
import { ntf } from "../../notifications";
import { dw } from "../workspace";
import { dwg } from "./groups";
import { dwn } from "./notifications";
import { dwpg } from "./pages";
import { dws } from "./selection";
import { dwsh } from "./shapes";
import { dwsp } from "./specialized-panel";
import { dwt } from "./thumbnails";
import { dwtr } from "./transforms";
import { dwu } from "./undo";
import { dwwt } from "./wasm-text";
import { dwz } from "./zoom";
import { features } from "../../features";
import { fpmap } from "../../features/pointer-map";
import { refs } from "../../refs";
import { rp } from "../../repo";
import { rt } from "../../router";
import { st } from "../../store";
import { uc } from "../../color";
import { tr } from "../../i18n";
import { rx } from "../../../rx";

log.setLevel("warn");

function debugPrettyFile(fileId: string, state: any): string {
  if (fileId === state.currentFileId) {
    return "<local>";
  }
  return `<${state.files[fileId]?.name}>`;
}

function logChanges(changes: any[], file: any): any[] {
  const extractChange = (change: any) => {
    const shape = change.id
      ? change.pageId
        ? file.pagesIndex?.[change.pageId]?.objects?.[change.id]
        : change.componentId
        ? file.components?.[change.componentId]?.objects?.[change.id]
        : null
      : null;

    const prefix = change.componentId ? "[C] " : "[P] ";

    const extract = {
      type: change.type,
      rawChange: change,
    };

    if (shape) {
      extract.shape = `${prefix}${shape.name}`;
      extract.shapeId = `${shape.id}`;
    }

    if (change.obj) {
      extract.obj = change.obj.name;
      extract.objId = change.obj.id;
    }

    if (change.operations) {
      extract.operations = change.operations;
    }

    return extract;
  };

  return changes.map(extractChange);
}

declare let syncFile: (fileId: string, libraryId: string, assetType?: string, assetId?: string, undoGroup?: string) => any;

const extractPathIfMissing = (item: any): any => {
  const [path, name] = cpn.splitGroupName(item.name);
  if (item.name === name && item.path !== undefined) {
    return item;
  }
  return { ...item, path, name };
};

// Color operations
export const addColor = (color: any, options?: { rename?: boolean }) => {
  const { rename = true } = options || {};
  const color = {
    ...color,
    id: color.id || uuid.next(),
    name: color.image?.name || color.color || uc.gradientTypeToString(color.gradient?.type),
  };
  ctc.checkLibraryColor(color);

  return ptk.reify("add-color", {
    ptk: {
      Event: {
        data: color,
      },
      WatchEvent: {
        watch(it, _state) {
          const changes = pcb.emptyChanges(it).addColor(color);
          return [
            rename && (() => (state: any) => ({
              ...state,
              workspaceLocal: { ...state.workspaceLocal, colorForRename: color.id },
            })),
            dch.commitChanges(changes),
          ];
        },
      },
    },
  });
};

export const clearColorForRename = () => {
  return ptk.reify("clear-color-for-rename", {
    ptk: {
      UpdateEvent: {
        update(_ctx, state) {
          return {
            ...state,
            workspaceLocal: { ...state.workspaceLocal, colorForRename: null },
          };
        },
      },
    },
  });
};

function updateColor*(it: any, state: any, color: any, fileId: string) {
  const data = dsh.lookupFileData(state);
  const [path, name] = cpn.splitGroupName(color.name);
  const color = { ...color, path, name };
  const changes = pcb.emptyChanges(it)
    .withLibraryData(data)
    .updateColor(color);
  const undoId = Symbol();

  return [
    dwu.startUndoTransaction(undoId),
    dch.commitChanges(changes),
    syncFile(data.id, fileId, "colors", color.id),
    dwu.commitUndoTransaction(undoId),
  ];
}

export const updateColor = (color: any, fileId: string) => {
  dm.assert("expected a uuid instance for `file-id`", uuid.isUUID(fileId));
  const color = ctc.checkLibraryColor(d.withoutNils(color));

  return ptk.reify("update-color", {
    ptk: {
      WatchEvent: {
        watch(it, state) {
          return updateColor*(it, state, color, fileId);
        },
      },
    },
  });
};

export const updateColorData = (color: any, fileId: string) => {
  dm.assert("expected a uuid instance for `file-id`", uuid.isUUID(fileId));
  const color = ctc.checkLibraryColor(d.withoutNils(color));

  return ptk.reify("update-color-data", {
    ptk: {
      WatchEvent: {
        watch(it, state) {
          const color = { ...color, name: `${color.path}/${color.name}` };
          return updateColor*(it, state, color, fileId);
        },
      },
    },
  });
};

export const renameColor = (fileId: string, id: string, newName: string) => {
  dm.assert("expected valid uuid instance for `id`", uuid.isUUID(id));
  dm.assert("expected a uuid instance for `file-id`", uuid.isUUID(fileId));
  dm.assert("expected a string instance for `new-name`", typeof newName === "string");

  return ptk.reify("rename-color", {
    ptk: {
      WatchEvent: {
        watch(it, state) {
          const newName = newName.trim();
          if (newName === "") {
            return rx.empty();
          }

          const data = dsh.lookupFileData(state);
          const color = ctl.getColor(data, id);
          const color = { ...color, name: newName };
          ctc.checkLibraryColor(color);

          return updateColor*(it, state, color, fileId);
        },
      },
    },
  });
};

export const deleteColor = ({ id }: { id: string }) => {
  dm.assert("expected valid uuid instance for `id`", uuid.isUUID(id));

  return ptk.reify("delete-color", {
    ptk: {
      Event: {
        data: { id },
      },
      WatchEvent: {
        watch(it, state) {
          const data = dsh.lookupFileData(state);
          const changes = pcb.emptyChanges(it)
            .withLibraryData(data)
            .deleteColor(id);
          return [dch.commitChanges(changes)];
        },
      },
    },
  });
};

// Media operations (deprecated)
export const addMedia = (media: any) => {
  const media = ctf.checkFileMedia(media);

  return ptk.reify("add-media", {
    ptk: {
      Event: {
        data: media,
      },
      WatchEvent: {
        watch(it, _state) {
          const obj = {
            id: media.id,
            name: media.name,
            width: media.width,
            height: media.height,
            mtype: media.mtype,
          };
          const changes = pcb.emptyChanges(it).addMedia(obj);
          return [dch.commitChanges(changes)];
        },
      },
    },
  });
};

export const renameMedia = (id: string, newName: string) => {
  dm.assert("expected valid uuid for `id`", uuid.isUUID(id));
  dm.assert("expected valid string for `new-name`", typeof newName === "string");

  return ptk.reify("rename-media", {
    ptk: {
      WatchEvent: {
        watch(it, state) {
          const newName = newName.trim();
          if (newName === "") {
            return rx.empty();
          }

          const [path, name] = cpn.splitGroupName(newName);
          const data = dsh.lookupFileData(state);
          const object = data.media[id];
          const newObject = { ...object, path, name };
          const changes = pcb.emptyChanges(it)
            .withLibraryData(data)
            .updateMedia(newObject);
          return [dch.commitChanges(changes)];
        },
      },
    },
  });
};

export const deleteMedia = ({ id }: { id: string }) => {
  dm.assert("expected valid uuid for `id`", uuid.isUUID(id));

  return ptk.reify("delete-media", {
    ptk: {
      Event: {
        data: { id },
      },
      WatchEvent: {
        watch(it, state) {
          const data = dsh.lookupFileData(state);
          const changes = pcb.emptyChanges(it)
            .withLibraryData(data)
            .deleteMedia(id);
          return [dch.commitChanges(changes)];
        },
      },
    },
  });
};

// Typography operations
export const addTypography = (typography: any, edit?: boolean) => {
  const edit = edit ?? true;
  const typography = {
    ...typography,
    id: typography.id || uuid.next(),
  };
  ctt.checkTypography(typography);

  return ptk.reify("add-typography", {
    ptk: {
      Event: {
        data: typography,
      },
      WatchEvent: {
        watch(it, _state) {
          const changes = pcb.emptyChanges(it).addTypography(typography);
          return [
            dch.commitChanges(changes),
            edit && (() => (state: any) => ({
              ...state,
              workspaceGlobal: {
                ...state.workspaceGlobal,
                editTypography: typography.id,
              },
            })),
          ];
        },
      },
    },
  });
};

function doUpdateTypography(it: any, state: any, typography: any, fileId: string) {
  const data = dsh.lookupFileData(state);
  const typography = extractPathIfMissing(typography);
  const changes = pcb.emptyChanges(it)
    .withLibraryData(data)
    .updateTypography(typography);
  const undoId = Symbol();

  return [
    dwu.startUndoTransaction(undoId),
    dch.commitChanges(changes),
    syncFile(state.currentFileId, fileId, "typographies", typography.id),
    dwu.commitUndoTransaction(undoId),
  ];
}

export const updateTypography = (typography: any, fileId: string) => {
  dm.assert("expected valid uuid for `file-id`", uuid.isUUID(fileId));
  const typography = ctt.checkTypography(typography);

  return ptk.reify("update-typography", {
    ptk: {
      WatchEvent: {
        watch(it, state) {
          return doUpdateTypography(it, state, typography, fileId);
        },
      },
    },
  });
};

export const renameTypography = (fileId: string, id: string, newName: string) => {
  dm.assert(uuid.isUUID(fileId), "expected uuid for file-id");
  dm.assert(uuid.isUUID(id), "expected uuid for id");
  dm.assert(typeof newName === "string", "expected string for new-name");

  return ptk.reify("rename-typography", {
    ptk: {
      Event: {
        data: { id, name: newName },
      },
      WatchEvent: {
        watch(it, state) {
          if (!newName || newName === "") {
            return rx.empty();
          }

          const data = dsh.lookupFileData(state);
          const [path, name] = cpn.splitGroupName(newName);
          const object = data.typographies[id];
          const newObject = { ...object, path, name };
          return doUpdateTypography(it, state, newObject, fileId);
        },
      },
    },
  });
};

export const deleteTypography = (id: string) => {
  dm.assert(uuid.isUUID(id), "expected uuid for id");

  return ptk.reify("delete-typography", {
    ptk: {
      Event: {
        data: { id },
      },
      WatchEvent: {
        watch(it, state) {
          const data = dsh.lookupFileData(state);
          const changes = pcb.emptyChanges(it)
            .withLibraryData(data)
            .deleteTypography(id);
          return [dch.commitChanges(changes)];
        },
      },
    },
  });
};

// Component operations
function addComponent2(selected: string[], idRef?: any) {
  return ptk.reify("add-component2", {
    ptk: {
      Event: {
        data: {
          name: "add-component",
          shapes: selected.length,
        },
      },
      WatchEvent: {
        watch(it, state) {
          const fileId = state.currentFileId;
          const pageId = state.currentPageId;
          const objects = dsh.lookupPageObjects(state, fileId, pageId);
          const shapes = dwg.shapesForGrouping(objects, selected);
          const parents = new Set(shapes.map(shape => shape.parentId));

          if (shapes.length === 0) {
            return rx.empty();
          }

          const [root, componentId, changes] = cll.generateAddComponent(
            pcb.emptyChanges(it),
            shapes,
            objects,
            pageId,
            fileId,
            cfsh.prepareCreateArtboardFromSelection
          );

          if (idRef) {
            idRef.current = componentId;
          }

          if (changes.redoChanges.length === 0) {
            return rx.empty();
          }

          return [
            dch.commitChanges(changes),
            dws.selectShapes(d.orderedSet(root.id)),
            ptk.dataEvent("layout/update", { ids: Array.from(parents) }),
          ];
        },
      },
    },
  });
}

export const addComponent = (ids?: string[], idRef?: any) => {
  return ptk.reify("add-component", {
    ptk: {
      WatchEvent: {
        watch(_ctx, state) {
          const objects = dsh.lookupPageObjects(state);
          const selected = cfh.cleanLoops(objects, ids ?? dsh.lookupSelected(state));
          const selectedObjects = selected.map(id => objects[id]);
          const canMakeComponent = selectedObjects.every(obj => ctn.validShapeForComponent?(objects, obj));

          if (!canMakeComponent) {
            return rx.empty();
          }

          return [addComponent2(idRef ? [idRef] : selected, idRef)];
        },
      },
    },
  });
};

export const addMultipleComponents = () => {
  return ptk.reify("add-multiple-components", {
    ptk: {
      WatchEvent: {
        watch(_ctx, state) {
          const objects = dsh.lookupPageObjects(state);
          const selected = cfh.cleanLoops(objects, dsh.lookupSelected(state));
          const selectedObjects = selected.map(id => objects[id]);
          const canMakeComponent = selectedObjects.every(obj => ctn.validShapeForComponent?(objects, obj));
          const undoId = Symbol();

          if (!canMakeComponent) {
            return rx.empty();
          }

          const addedComponents = selected.map(id => {
            const component = addComponent2([id]);
            return { ...component, multiple: true };
          });

          return [
            dwu.startUndoTransaction(undoId),
            rx.from(addedComponents),
            dwu.commitUndoTransaction(undoId),
          ];
        },
      },
    },
  });
};

export const renameComponent = (id: string, newName: string) => {
  dm.assert("expected an uuid instance", uuid.isUUID(id));
  dm.assert("expected string for new-name", typeof newName === "string");

  return ptk.reify("rename-component", {
    ptk: {
      WatchEvent: {
        watch(it, state) {
          const newName = newName.trim();
          if (newName === "") {
            return rx.empty();
          }

          const data = dsh.lookupFileData(state);
          const changes = cll.generateRenameComponent(id, newName, data);
          return [dch.commitChanges(changes)];
        },
      },
    },
  });
};

export const renameComponentAndMainInstance = (componentId: string, name: string) => {
  return ptk.reify("rename-component-and-main-instance", {
    ptk: {
      WatchEvent: {
        watch(_ctx, state) {
          const name = name.trim();
          const cleanName = cpn.cleanPath(name);
          const valid = name.endsWith("/") || typeof cleanName !== "string" || cleanName === "";
          const data = dsh.lookupFileData(state);
          const component = dm.getIn(data, ["components", componentId]);

          if (!valid || !component) {
            return rx.empty();
          }

          const shapeId = component.mainInstanceId;
          const pageId = component.mainInstancePage;

          return [
            renameComponent(componentId, cleanName),
            shapeId && pageId &&
              dwsh.updateShapes([shapeId], (shape) => ({ ...shape, name: cleanName }), { pageId, stackUndo: true }),
          ].filter(Boolean);
        },
      },
    },
  });
};

export const duplicateComponent = (libraryId: string, componentId: string, newComponentId?: string) => {
  newComponentId = newComponentId || uuid.next();

  return ptk.reify("duplicate-component", {
    ptk: {
      WatchEvent: {
        watch(it, state) {
          const libraries = dsh.lookupLibraries(state);
          const library = libraries[libraryId];

          const [mainInstance, changes] = pcb.emptyChanges(it, null)
            .generateDuplicateComponent(library, componentId, newComponentId);

          return [
            ptk.dataEvent("layout/update", { ids: [mainInstance.id] }),
            dch.commitChanges(changes),
          ];
        },
      },
    },
  });
};

export const deleteComponent = ({ id }: { id: string }) => {
  dm.assert("expected valid uuid for `id`", uuid.isUUID(id));

  return ptk.reify("delete-component", {
    ptk: {
      WatchEvent: {
        watch(it, state) {
          const fileId = state.currentFileId;
          const fdata = dsh.lookupFileData(state, fileId);
          const component = ctkl.getComponent(fdata, id);
          const pageId = component.mainInstancePage;
          const rootId = component.mainInstanceId;
          const page = dsh.getPage(fdata, pageId);
          const objects = page.objects;
          const undoGroup = uuid.next();
          const undoId = Symbol();

          const [allParents, changes] = pcb.emptyChanges(it, pageId)
            .generateDeleteShapes(fdata, page, objects, new Set([rootId]), { undoGroup, undoId });

          return [
            dwu.startUndoTransaction(undoId),
            dwt.clearThumbnail(state.currentFileId, pageId, rootId, "component"),
            dc.detachCommentThread(new Set([rootId])),
            dch.commitChanges(changes),
            ptk.dataEvent("layout/update", { ids: allParents, undoGroup }),
            dwu.commitUndoTransaction(undoId),
          ];
        },
      },
    },
  });
};

export const restoreComponent = (libraryId: string, componentId: string) => {
  dm.assert(uuid.isUUID(libraryId), "expected uuid for library-id");
  dm.assert(uuid.isUUID(componentId), "expected uuid for component-id");

  return ptk.reify("restore-component", {
    ptk: {
      WatchEvent: {
        watch(it, state) {
          const currentFileId = state.currentFileId;
          const local = currentFileId === libraryId;

          const ldata = dsh.lookupFileData(state, libraryId);
          const component = ldata.components[componentId];
          const compPageId = component.mainInstancePage;
          const compPage = dsh.getPage(ldata, compPageId);
          const objects = compPage.objects;

          const changes = pcb.emptyChanges(it)
            .generateRestoreComponent(ldata, componentId, libraryId, compPage, objects);

          const pageId = changes.redoChanges
            .filter(c => c.pageId)
            .map(c => c.pageId)[0];

          const frames = changes.redoChanges
            .filter(c => c.frameId)
            .map(c => c.frameId);

          return [
            dch.commitChanges(changes),
            local && ptk.dataEvent("layout/update", { pageId, ids: frames }),
          ].filter(Boolean);
        },
      },
    },
  });
};

export const restoreComponents = (componentsData: Record<string, string>) => {
  dm.assert(typeof componentsData === "object" && componentsData !== null, "expected map for components-data");

  return ptk.reify("restore-components", {
    ptk: {
      WatchEvent: {
        watch(_ctx, _state) {
          const undoId = Symbol();

          return [
            dwu.startUndoTransaction(undoId),
            rx.from(Object.entries(componentsData))
              .map(([libraryId, componentId]) => restoreComponent(libraryId, componentId)),
            dwu.commitUndoTransaction(undoId),
          ];
        },
      },
    },
  });
};

export const instantiateComponent = (
  fileId: string,
  componentId: string,
  position: any,
  options?: {
    startMove?: boolean;
    initialPoint?: any;
    idRef?: any;
    origin?: any;
  }
) => {
  const { startMove = false, initialPoint, idRef, origin } = options || {};
  dm.assert(uuid.isUUID(fileId), "expected uuid for file-id");
  dm.assert(uuid.isUUID(componentId), "expected uuid for component-id");
  dm.assert(gpt.isPoint?(position), "expected point for position");

  return ptk.reify("instantiate-component", {
    ptk: {
      WatchEvent: {
        watch(it, state) {
          const page = dsh.lookupPage(state);
          const libraries = dsh.lookupLibraries(state);
          const objects = page.objects;
          const changes = pcb.emptyChanges(it, page.id)
            .withObjects(objects);
          const currentFileId = state.currentFileId;

          const [newShape, changes] = cll.generateInstantiateComponent(
            changes,
            objects,
            fileId,
            componentId,
            position,
            page,
            libraries
          );

          const component = ctn.getComponentFromShape(newShape, libraries);

          if (idRef) {
            idRef.current = newShape.id;
          }

          return [
            ptk.event(ev.event, {
              name: "use-library-component",
              origin,
              externalLibrary: currentFileId !== fileId,
              isVariant: ctk.isVariant?(component),
            }),
            dwu.startUndoTransaction(Symbol()),
            dch.commitChanges(changes),
            ptk.dataEvent("layout/update", { ids: [newShape.id] }),
            dws.selectShapes(d.orderedSet(newShape.id)),
            startMove && dwtr.startMove(initialPoint, new Set([newShape.id])),
            dwu.commitUndoTransaction(Symbol()),
          ];
        },
      },
    },
  });
};

export const detachComponent = (id: string) => {
  dm.assert(uuid.isUUID(id), "expected uuid for id");

  return ptk.reify("detach-component", {
    ptk: {
      WatchEvent: {
        watch(it, state) {
          const pageId = state.currentPageId;
          const fileId = state.currentFileId;
          const fdata = dsh.lookupFileData(state, fileId);
          const libraries = dsh.lookupLibraries(state);

          const changes = pcb.emptyChanges(it)
            .generateDetachComponent(id, fdata, pageId, libraries);

          return [dch.commitChanges(changes)];
        },
      },
    },
  });
};

export const detachComponents = (ids: string[]) => {
  dm.assert(Array.isArray(ids) && ids.length > 0, "expected non-empty array for ids");

  return ptk.reify("detach-components", {
    ptk: {
      WatchEvent: {
        watch(_ctx, _state) {
          const undoId = Symbol();

          return [
            dwu.startUndoTransaction(undoId),
            rx.from(ids).map(detachComponent),
            dwu.commitUndoTransaction(undoId),
          ];
        },
      },
    },
  });
};

export const detachSelectedComponents = () => {
  return ptk.reify("detach-selected-components", {
    ptk: {
      WatchEvent: {
        watch(it, state) {
          const pageId = state.currentPageId;
          const fileId = state.currentFileId;
          const objects = dsh.lookupPageObjects(state, pageId);
          const libraries = dsh.lookupLibraries(state);
          const fdata = dsh.lookupFileData(state, fileId);

          const selected = cfh.cleanLoops(objects, dsh.lookupSelected(state));
          const selectedObjects = selected.map(id => objects[id]);
          const copies = selectedObjects.filter(ctk.inComponentCopy);
          const canDetach = copies.length > 0 && selectedObjects.every(obj => !ctn.hasAnyCopyParent?(objects, obj));

          if (!canDetach) {
            return rx.empty();
          }

          const changes = selected.reduce((changes, id) =>
            cll.generateDetachComponent(changes, id, fdata, pageId, libraries),
            pcb.emptyChanges(it)
          );

          return [dch.commitChanges(changes)];
        },
      },
    },
  });
};

export const goToComponentFile = (fileId: string, component: any, updateLayout?: boolean) => {
  dm.assert(uuid.isUUID(fileId), "expected an uuid for file-id");
  dm.assert(ctk.checkComponent(component), "expected a valid component");

  return ptk.reify("nav-to-component-file", {
    ptk: {
      WatchEvent: {
        watch(_ctx, state) {
          const params = {
            ...rt.getParams(state),
            fileId,
            pageId: component.mainInstancePage,
            componentId: component.id,
            updateLayout: updateLayout ?? false,
          };
          return [rt.nav("workspace", params, rt.newWindow, true)];
        },
      },
    },
  });
};

export const goToLocalComponent = (
  options: {
    id: string;
    additionalIds?: string[];
    updateLayout?: boolean;
    retries?: number;
  } = { retries: 0 }
) => {
  const { id, additionalIds = [], updateLayout = false, retries = 0 } = options;

  return ptk.reify("go-to-local-component", {
    ptk: {
      WatchEvent: {
        watch(_ctx, state, stream) {
          const currentPageId = state.currentPageId;
          const data = dsh.lookupFileData(state);
          const objects = dsh.lookupPageObjects(state, currentPageId);

          const selectAndZoom = (ids: string[]) => {
            const parentIds = updateLayout
              ? ids.map(id => objects[id]?.parentId).filter(Boolean)
              : [];

            if (updateLayout && parentIds.length === 0 && retries < 8) {
              // The objects are not loaded yet, wait and try again
              return rx.of(goToLocalComponent({ ...options, retries: retries + 1 }))
                .delay(250);
            }

            return [
              dws.selectShapes(ids),
              dwz.zoomToSelectedShape,
              updateLayout &&
                ptk.dataEvent("layout/update", { ids: parentIds }),
            ].filter(Boolean);
          };

          const redirectToPage = (pageId: string, ids: string[]) => {
            return rx.merge(
              stream
                .filter(ptk.is(dwpg.initializePage))
                .take(1)
                .observeOn("async")
                .flatMap(() => selectAndZoom(ids)),
              dcm.goToWorkspace({ pageId })
            );
          };

          const getMainInstanceId = (id: string, pageId: string) => {
            const component = dm.getIn(data, ["components", id]);
            if (component?.mainInstancePage === pageId) {
              return component.mainInstanceId;
            }
            return null;
          };

          const component = dm.getIn(data, ["components", id]);
          if (!component) {
            return rx.empty();
          }

          const pageId = component.mainInstancePage;
          const shapeId = component.mainInstanceId;
          const additionalShapeIds = additionalIds
            .map(id => getMainInstanceId(id, pageId))
            .filter(Boolean);
          const ids = [shapeId, ...additionalShapeIds];

          if (!pageId) {
            return rx.empty();
          }

          if (pageId === currentPageId) {
            return selectAndZoom(ids);
          }
          return redirectToPage(pageId, ids);
        },
      },
    },
  });
};

export const libraryThumbnailsFetched = (thumbnails: any) => {
  return ptk.reify("library-thumbnails-fetched", {
    ptk: {
      UpdateEvent: {
        update(_ctx, state) {
          return {
            ...state,
            thumbnails: { ...state.thumbnails, ...thumbnails },
          };
        },
      },
    },
  });
};

export const fetchLibraryThumbnails = (libraryId: string) => {
  return ptk.reify("fetch-library-thumbnails", {
    ptk: {
      WatchEvent: {
        watch(_ctx, _state) {
          return rp
            .cmd("get-file-object-thumbnails", { fileId: libraryId, tag: "component" })
            .map(libraryThumbnailsFetched);
        },
      },
    },
  });
};

export const extLibraryChanged = (libraryId: string, modifiedAt: number, revn: number, changes: any[]) => {
  dm.assert(uuid.isUUID(libraryId), "expected valid uuid for library-id");
  dm.assert(ch.checkChanges(changes), "expected valid changes vector");

  return ptk.reify("ext-library-changed", {
    ptk: {
      UpdateEvent: {
        update(_ctx, state) {
          return {
            ...state,
            files: {
              ...state.files,
              [libraryId]: {
                ...state.files[libraryId],
                modifiedAt,
                revn,
                data: ch.processChanges(
                  state.files[libraryId]?.data,
                  changes
                ),
              },
            },
          };
        },
      },
      WatchEvent: {
        watch(_ctx, _state, stream) {
          const stopperS = stream.filter(ptk.is("ext-library-changed"));

          return rx.merge(
            rx.of(libraryId)
              .delay(5000)
              .map(fetchLibraryThumbnails)
          ).takeUntil(stopperS);
        },
      },
    },
  });
};

export const resetComponent = (id: string) => {
  dm.assert(uuid.isUUID(id), "expected uuid for id");

  return ptk.reify("reset-component", {
    ptk: {
      WatchEvent: {
        watch(it, state) {
          log.info({ msg: "RESET-COMPONENT of shape", id: String(id) });
          const libraries = state.files;
          const pageId = state.currentPageId;
          const file = dsh.lookupFile(state);
          const data = file.data;
          const container = ctn.getContainer(data, "page", pageId);
          const undoId = Symbol();

          const changes = pcb.emptyChanges(it)
            .generateResetComponent(file, libraries, container, id);

          log.debug({
            msg: "RESET-COMPONENT finished",
            js: { rchanges: logChanges(changes.redoChanges, file) },
          });

          return [
            dwu.startUndoTransaction(undoId),
            dch.commitChanges(changes),
            dwu.commitUndoTransaction(undoId),
          ];
        },
      },
    },
  });
};

export const resetComponents = (ids: string[]) => {
  dm.assert(Array.isArray(ids) && ids.length > 0, "expected non-empty array for ids");

  return ptk.reify("reset-components", {
    ptk: {
      WatchEvent: {
        watch(_ctx, _state) {
          const undoId = Symbol();

          return [
            dwu.startUndoTransaction(undoId),
            rx.from(ids).map(resetComponent),
            dwu.commitUndoTransaction(undoId),
          ];
        },
      },
    },
  });
};

export const updateComponent = (id: string, undoGroup?: string) => {
  dm.assert(uuid.isUUID(id), "expected uuid for id");

  return ptk.reify("update-component", {
    ptk: {
      WatchEvent: {
        watch(it, state) {
          log.info({ msg: "UPDATE-COMPONENT of shape", id: String(id), undoGroup });

          const pageId = state.currentPageId;
          const libraries = dsh.lookupLibraries(state);
          const file = dsh.lookupFile(state);
          const fdata = file.data;
          const container = ctn.getContainer(fdata, "page", pageId);
          const shape = ctn.getShape(container, id);

          if (!ctk.instanceHead?(shape)) {
            return rx.empty();
          }

          const changes = pcb.emptyChanges(it)
            .setUndoGroup(undoGroup)
            .withContainer(container)
            .generateSyncShapeInverse(fdata, libraries, container, id);

          const ldata = shape.componentFile
            ? dsh.lookupFileData(state, shape.componentFile)
            : null;

          const xfFilter = (change: any) =>
            change.localChange
              ? { ...change, localChange: undefined }
              : null;

          const xfRemove = (change: any) =>
            change.localChange
              ? null
              : { ...change, localChange: undefined };

          const localChanges = {
            ...changes,
            redoChanges: changes.redoChanges
              .map(xfFilter)
              .filter(Boolean),
            undoChanges: changes.undoChanges
              .map(xfFilter)
              .filter(Boolean),
          };

          const nonlocalChanges = {
            ...changes,
            redoChanges: changes.redoChanges
              .map(xfRemove)
              .filter(Boolean),
            undoChanges: changes.undoChanges
              .map(xfRemove)
              .filter(Boolean),
          };

          log.debug({
            msg: "UPDATE-COMPONENT finished",
            js: {
              localChanges: logChanges(localChanges.redoChanges, fdata),
              nonlocalChanges: logChanges(nonlocalChanges.redoChanges, fdata),
            },
          });

          return [
            localChanges.redoChanges.length > 0 &&
              dch.commitChanges({
                ...localChanges,
                fileId: file.id,
              }),
            nonlocalChanges.redoChanges.length > 0 &&
              dch.commitChanges({
                ...nonlocalChanges,
                fileId: ldata?.id,
              }),
          ].filter(Boolean);
        },
      },
    },
  });
};

function updateComponentThumbnailSync(state: any, componentId: string, fileId: string, tag: string) {
  const data = dsh.lookupFileData(state, fileId);
  const component = ctkl.getComponent(data, componentId);
  const pageId = component.mainInstancePage;
  const rootId = component.mainInstanceId;
  dwt.updateThumbnail(fileId, pageId, rootId, tag, "update-component-thumbnail-sync");
}

export const updateComponentSync = (shapeId: string, fileId: string, undoGroup?: string) => {
  return ptk.reify("update-component-sync", {
    ptk: {
      WatchEvent: {
        watch(_ctx, state) {
          const currentFileId = state.currentFileId;
          const currentFile = currentFileId === fileId;

          const page = dsh.lookupPage(state);
          const shape = ctn.getShape(page, shapeId);
          const componentId = shape.componentId;
          const undoId = Symbol();

          return [
            dwu.startUndoTransaction(undoId),
            updateComponent(shapeId, undoGroup),
            updateComponentThumbnailSync(state, componentId, fileId, "frame"),
            updateComponentThumbnailSync(state, componentId, fileId, "component"),
            syncFile(currentFileId, fileId, "components", componentId, undoGroup),
            !currentFile &&
              syncFile(fileId, fileId, "components", componentId, undoGroup),
            dwu.commitUndoTransaction(undoId),
          ];
        },
      },
    },
  });
};

export const launchComponentSync = (componentId: string, fileId: string, undoGroup?: string) => {
  return ptk.reify("launch-component-sync", {
    ptk: {
      WatchEvent: {
        watch(_ctx, state) {
          const currentFileId = state.currentFileId;
          const undoId = Symbol();

          return [
            dwu.startUndoTransaction(undoId),
            syncFile(currentFileId, fileId, "components", componentId, undoGroup),
            currentFileId !== fileId &&
              syncFile(fileId, fileId, "components", componentId, undoGroup),
            dwu.commitUndoTransaction(undoId),
          ];
        },
      },
    },
  });
};

export const updateComponentThumbnail = (componentId: string, fileId: string) => {
  return ptk.reify("update-component-thumbnail", {
    ptk: {
      WatchEvent: {
        watch(_ctx, state) {
          return rx.of(updateComponentThumbnailSync(state, componentId, fileId, "component"));
        },
      },
    },
  });
};

function findShapeIndex(objects: any, id: string, shapeId: string) {
  const object = objects[id];
  if (!object) {
    return 0;
  }

  const shapes = object.shapes;
  const index = shapes
    .map((shape: any, idx: number) => [shape, idx])
    .find(([shape]) => shape.id === shapeId)?.[1];

  return index ?? 0;
}

export const componentSwap = (
  shape: any,
  fileId: string,
  idNewComponent: string,
  keepTouched?: boolean
) => {
  dm.assert(uuid.isUUID(idNewComponent), "expected uuid for id-new-component");
  dm.assert(uuid.isUUID(fileId), "expected uuid for file-id");

  return ptk.reify("component-swap", {
    ptk: {
      WatchEvent: {
        watch(it, state) {
          const libraries = dsh.lookupLibraries(state);
          const page = dsh.lookupPage(state);
          const objects = page.objects;
          const parent = objects[shape.parentId];

          const ldata = dsh.lookupFileData(state, fileId);
          const origShapes = keepTouched
            ? cfh.getChildrenWithSelf(objects, shape.id)
            : null;

          const targetCell = ctsl.gridLayout?(parent)
            ? ctsl.getCellByShapeId(parent, shape.id)
            : null;

          const index = findShapeIndex(objects, shape.parentId, shape.id);
          const keepPropsValues = {
            id: shape.id,
            name: shape.name,
            x: shape.x,
            y: shape.y,
          };

          const undoId = Symbol();
          const undoGroup = uuid.next();

          const [newShape, allParents, changes] = pcb.emptyChanges(it, page.id)
            .setUndoGroup(undoGroup)
            .generateComponentSwap(
              objects,
              shape,
              ldata,
              page,
              libraries,
              idNewComponent,
              index,
              targetCell,
              keepPropsValues,
              keepTouched ?? false
            );

          const updatedObjects = pcb.getObjects(changes);
          const newChildrenIds = cfh.getChildrenIdsWithSelf(updatedObjects, newShape.id);
          const newTextIds = newChildrenIds
            .map(id => updatedObjects[id])
            .filter(child => cfh.textShape?(child) && child.growType !== "fixed")
            .map(child => child.id);

          const [changes, parentsOfSwapped] = keepTouched
            ? clv.generateKeepTouched(changes, newShape, shape, origShapes, page, libraries, ldata)
            : [changes, []];

          const updateLayoutIds = [...allParents, ...parentsOfSwapped, ...newChildrenIds];

          return [
            dwu.startUndoTransaction(undoId),
            dch.commitChanges(changes),
            features.activeFeature?(state, "render-wasm/v1") && newTextIds.length > 0 &&
              dwwt.resizeWasmTextAll(newTextIds),
            ptk.dataEvent("layout/update", { ids: updateLayoutIds, undoGroup }),
            dwu.commitUndoTransaction(undoId),
            dws.selectShape(newShape.id, false),
          ];
        },
      },
    },
  });
};

export const componentMultiSwap = (shapes: any[], fileId: string, idNewComponent: string) => {
  dm.assert(Array.isArray(shapes) && shapes.length > 0, "expected non-empty array for shapes");
  dm.assert(uuid.isUUID(idNewComponent), "expected uuid for id-new-component");
  dm.assert(uuid.isUUID(fileId), "expected uuid for file-id");

  return ptk.reify("component-multi-swap", {
    ptk: {
      Event: {
        data: {
          name: "component-swap",
        },
      },
      WatchEvent: {
        watch(_ctx, state) {
          const undoId = Symbol();

          log.info({
            msg: "COMPONENT-SWAP",
            file: debugPrettyFile(fileId, state),
            idNewComponent,
            undoId,
          });

          return [
            dwu.startUndoTransaction(undoId),
            rx.from(shapes).map(shape => componentSwap(shape, fileId, idNewComponent, false)),
            dwu.commitUndoTransaction(undoId),
            dwsp.openSpecializedPanel("component-swap"),
          ];
        },
      },
    },
  });
};

export const validAssetTypes = {
  colors: true,
  components: true,
  typographies: true,
};

export const setUpdatingLibrary = (updating: boolean) => {
  return ptk.reify("set-updating-library", {
    ptk: {
      UpdateEvent: {
        update(_ctx, state) {
          return {
            ...state,
            updatingLibrary: updating,
          };
        },
      },
    },
  });
};

export const syncFile = (
  fileId: string,
  libraryId: string,
  assetType?: string,
  assetId?: string,
  undoGroup?: string
) => {
  dm.assert(uuid.isUUID(fileId), "expected uuid for file-id");
  dm.assert(uuid.isUUID(libraryId), "expected uuid for library-id");
  dm.assert(
    !assetType || validAssetTypes[assetType],
    "expected valid asset-type"
  );
  dm.assert(!assetId || uuid.isUUID(assetId), "expected uuid for asset-id");

  return ptk.reify("sync-file", {
    ptk: {
      UpdateEvent: {
        update(_ctx, state) {
          if (libraryId !== state.currentFileId && !assetId) {
            return {
              ...state,
              files: {
                ...state.files,
                [libraryId]: {
                  ...state.files[libraryId],
                  syncedAt: ct.now(),
                },
              },
            };
          }
          return state;
        },
      },
      WatchEvent: {
        watch(it, state) {
          if (!fileId || !libraryId) {
            return rx.empty();
          }

          log.info({
            msg: "SYNC-FILE",
            file: debugPrettyFile(fileId, state),
            library: debugPrettyFile(libraryId, state),
            assetType,
            assetId,
            undoGroup,
          });

          const ldata = dsh.lookupFileData(state, fileId);
          const libraries = dsh.lookupLibraries(state);
          const currentFileId = state.currentFileId;

          const changes = cll.generateSyncFileChanges(
            pcb.emptyChanges(it),
            undoGroup,
            assetType,
            fileId,
            assetId,
            libraryId,
            libraries,
            currentFileId
          );

          const findFrames = (change: any) => {
            return ch.framesChanged(ldata, change).map(frame => ({
              ...frame,
              pageId: change.pageId,
            }));
          };

          const updatedFrames = changes.redoChanges
            .flatMap(findFrames)
            .filter((value, index, self) => self.indexOf(value) === index);

          log.debug({
            msg: "SYNC-FILE finished",
            js: { rchanges: logChanges(changes.redoChanges, ldata) },
          });

          return [
            setUpdatingLibrary(false),
            ntf.hide({ tag: "sync-dialog" }),
            changes.redoChanges.length > 0 &&
              dch.commitChanges(changes),
            updatedFrames.length > 0 && (() => {
              const framesByPage = updatedFrames.reduce((acc, frame) => {
                acc[frame.pageId] = acc[frame.pageId] || [];
                acc[frame.pageId].push(frame);
                return acc;
              }, {});

              return rx.from(Object.entries(framesByPage)).map(([pageId, frames]) =>
                ptk.dataEvent("layout/update", {
                  pageId,
                  ids: frames.map(f => f.id),
                  undoGroup,
                })
              );
            })(),
            fileId !== libraryId &&
              rx.timer(3000).flatMap(() =>
                rp.cmd("update-file-library-sync-status", {
                  fileId,
                  libraryId,
                })
              ),
          ].filter(Boolean);
        },
      },
    },
  });
};

export const ignoreSync = () => {
  return ptk.reify("ignore-sync", {
    ptk: {
      UpdateEvent: {
        update(_ctx, state) {
          const fileId = state.currentFileId;
          return {
            ...state,
            files: {
              ...state.files,
              [fileId]: {
                ...state.files[fileId],
                ignoreSyncUntil: ct.now(),
              },
            },
          };
        },
      },
      WatchEvent: {
        watch(_ctx, state) {
          const fileId = state.currentFileId;
          return rx.of(
            rp.cmd("ignore-file-library-sync-status", {
              fileId,
              date: ct.now(),
            })
          ).ignore();
        },
      },
    },
  });
};

export const assetsNeedSync = (library: any, fileData: any, ignoreUntil?: number) => {
  if (library.id === fileData.id) {
    return null;
  }

  const syncDate = Math.max(library.syncedAt || 0, ignoreUntil || 0);
  if (library.modifiedAt <= syncDate) {
    return null;
  }

  return ctf.usedAssetsChangedSince(fileData, library, syncDate);
};

export const notifySyncFile = () => {
  return ptk.reify("notify-sync-file", {
    ptk: {
      WatchEvent: {
        watch(_ctx, state) {
          const fileId = state.currentFileId;
          const file = dsh.lookupFile(state, fileId);
          const fileData = file.data;
          const ignoreUntil = file.ignoreSyncUntil;
          const permissions = state.permissions;

          const librariesNeedSync = Object.values(state.files)
            .filter(lib => lib.libraryOf === fileId)
            .filter(lib => assetsNeedSync(lib, fileData, ignoreUntil)?.length > 0);

          const doMoreInfo = () =>
            modal.show("libraries-dialog", {
              startingTab: "updates",
              fileId,
            });

          const doUpdate = () => {
            const syncCommands = librariesNeedSync.map(library =>
              syncFile(state.currentFileId, library.id)
            );
            st.emit(...syncCommands);
            st.emit(ntf.hide());
          };

          const doDismiss = () => {
            st.emit(ignoreSync(), ntf.hide());
          };

          if (permissions.canEdit && librariesNeedSync.length > 0) {
            return rx.of(
              ntf.dialog({
                content: tr("workspace.updates.there-are-updates"),
                controls: "inline-actions",
                links: [
                  {
                    label: tr("workspace.updates.more-info"),
                    callback: doMoreInfo,
                  },
                ],
                cancel: {
                  label: tr("workspace.updates.dismiss"),
                  callback: doDismiss,
                },
                accept: {
                  label: tr("workspace.updates.update"),
                  callback: doUpdate,
                },
                tag: "sync-dialog",
              })
            );
          }

          return rx.empty();
        },
      },
    },
  });
};

export const touchComponent = (id: string) => {
  dm.assert(uuid.isUUID(id), "expected uuid for id");

  return ptk.reify("touch-component", {
    ptk: {
      IDeref: {
        deref(): [string] {
          return [id];
        },
      },
      WatchEvent: {
        watch(it, state) {
          const data = dsh.lookupFileData(state);
          const changes = pcb.emptyChanges(it)
            .withLibraryData(data)
            .updateComponent(id, (component: any) => ({
              ...component,
              modifiedAt: ct.now(),
            }));

          return [
            dch.commitChanges({
              origin: it,
              redoChanges: changes.redoChanges,
              undoChanges: [],
              saveUndo: false,
            }),
          ];
        },
      },
    },
  });
};

export const componentChanged = (componentId: string, fileId: string, undoGroup?: string) => {
  return ptk.reify("component-changed", {
    ptk: {
      IDeref: {
        deref(): [string, string] {
          return [componentId, fileId];
        },
      },
      WatchEvent: {
        watch(_ctx, _state) {
          return [
            touchComponent(componentId),
            launchComponentSync(componentId, fileId, undoGroup),
          ];
        },
      },
    },
  });
};

export const watchComponentChanges = () => {
  return ptk.reify("watch-component-changes", {
    ptk: {
      WatchEvent: {
        watch(_ctx, _state, stream) {
          const stopperS = stream
            .filter(ptk.is(["dwpg/finalize-page", "watch-component-changes"]));

          const workspaceDataS = rx
            .fromAtom(refs.workspaceData, { emitCurrentValue: true })
            .share();

          const workspaceBufferS = rx
            .concat(
              workspaceDataS.take(1),
              workspaceDataS.take(1),
              workspaceDataS
            )
            .buffer(3, 1);

          const changesS = stream
            .filter(dch.commit)
            .map(deref)
            .filter(change => change.source === "local")
            .observeOn("async");

          const checkChanges = ([event, [oldData, _midData, newData]]: any) => {
            if (!oldData) {
              return rx.empty();
            }

            const { fileId, changes, saveUndo, undoGroup } = event;
            const changedComponents = (!fileId || fileId === oldData.id)
              ? changes.flatMap((change: any) => ch.componentsChanged(oldData, change))
              : [];

            if (!d.notEmpty(changedComponents)) {
              return rx.empty();
            }

            if (saveUndo) {
              log.info({
                hint: "detected component changes",
                ids: changedComponents.map(String),
                undoGroup,
              });

              return rx
                .from(changedComponents)
                .map(id => componentChanged(id, oldData.id, undoGroup));
            }

            return rx.from(changedComponents).map(touchComponent);
          };

          const changesS = changesS
            .withLatestFrom(workspaceBufferS)
            .flatMap(checkChanges)
            .share();

          const notifierS = changesS.debounce(5000).tap(() =>
            log.trc({ hint: "buffer initialized" })
          );

          if (cf.flags.componentThumbnails) {
            return rx.merge(
              changesS,
              changesS
                .map(deref)
                .bufferUntil(notifierS)
                .map(changes => new Set(changes))
                .map(([componentId, fileId]: [string, string]) =>
                  updateComponentThumbnail(componentId, fileId)
                )
            ).takeUntil(stopperS);
          }

          return rx.empty();
        },
      },
    },
  });
};

// Backend interactions
export const setFileShared = (id: string, isShared: boolean) => {
  dm.assert(uuid.isUUID(id), "expected uuid for id");
  dm.assert(typeof isShared === "boolean", "expected boolean for is-shared");

  return ptk.reify("set-file-shared", {
    ptk: {
      Event: {
        data: {
          origin: "workspace",
          id,
          shared: isShared,
        },
      },
      UpdateEvent: {
        update(_ctx, state) {
          return {
            ...state,
            files: {
              ...state.files,
              [id]: {
                ...state.files[id],
                isShared,
              },
            },
          };
        },
      },
      WatchEvent: {
        watch(_ctx, state) {
          const params = { id, isShared };
          const hasVariants = Object.values(
            dsh.lookupFileData(state).components
          ).some(ctk.isVariant?);

          return rx.merge(
            rp.cmd("set-file-shared", params).ignore(),
            isShared &&
              hasVariants &&
              ev.event({
                name: "set-file-variants-shared",
                origin: "workspace",
              })
          );
        },
      },
    },
  });
};

// Link and unlink files
export const librariesFetched = (fileId: string, libraries: any[]) => {
  return ptk.reify("libraries-fetched", {
    ptk: {
      UpdateEvent: {
        update(_ctx, state) {
          const librariesWithFlag = libraries.map(lib => ({
            ...lib,
            libraryOf: fileId,
          }));

          return {
            ...state,
            files: {
              ...state.files,
              ...d.indexBy(librariesWithFlag, "id"),
            },
          };
        },
      },
    },
  });
};

function loadLibraryFile(fileId: string, libraryId: string) {
  return ptk.reify("load-library-file", {
    ptk: {
      WatchEvent: {
        watch(_ctx, state) {
          const features = state.features;

          return rx.merge(
            rp
              .cmd("get-file", { id: libraryId, features })
              .mergeMap(fpmap.resolveFile)
              .map(file => librariesFetched(fileId, [file])),
            rp
              .cmd("get-file-object-thumbnails", { fileId: libraryId, tag: "component" })
              .map(thumbnails => (state: any) => ({
                ...state,
                thumbnails: { ...state.thumbnails, ...thumbnails },
              }))
          );
        },
      },
    },
  });
}

export const linkFileToLibrary = (fileId: string, libraryId: string) => {
  return ptk.reify("attach-library", {
    ptk: {
      Event: {
        data: {
          name: "attach-library",
          fileId,
          libraryId,
        },
      },
      WatchEvent: {
        watch(_ctx, state) {
          const libraries = state.sharedFiles;
          const library = libraries[libraryId];
          const variantsCount = library.librarySummary?.variants?.length || 0;

          const loadedLibraries = Object.entries(dsh.lookupLibraries(state))
            .filter(([, lib]) => lib.data && Object.keys(lib.data).length > 0)
            .map(([id]) => id)
            .set();

          return rx.merge(
            rp
              .cmd("link-file-to-library", { fileId, libraryId })
              .mergeMap(librariesToLoad => {
                const librariesToLoad = Array.from(
                  new Set([...librariesToLoad, libraryId])
                );
                return rx.from(librariesToLoad).map(id =>
                  loadLibraryFile(fileId, id)
                );
              }),
            rx.of(ptk.reify("attach-library-finished")),
            variantsCount > 0 &&
              rp
                .cmd("get-library-usage", { fileId: libraryId })
                .map(libraryUsage =>
                  ev.event({
                    name: "attach-library-variants",
                    fileId,
                    libraryId,
                    variantsCount,
                    libraryUsedIn: libraryUsage.usedIn,
                  })
                )
          );
        },
      },
    },
  });
};

export const unlinkFileFromLibrary = (fileId: string, libraryId: string) => {
  return ptk.reify("detach-library", {
    ptk: {
      Event: {
        data: {
          name: "detach-library",
          fileId,
          libraryId,
        },
      },
      UpdateEvent: {
        update(_ctx, state) {
          return {
            ...state,
            files: {
              ...state.files,
              [libraryId]: undefined,
            },
          };
        },
      },
      WatchEvent: {
        watch(_ctx, _state) {
          const params = { fileId, libraryId };
          return rx.of(rp.cmd("unlink-file-from-library", params)).ignore();
        },
      },
    },
  });
};