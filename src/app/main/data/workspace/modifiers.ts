// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from "../../../common/data";
import { assert, getIn } from "../../../common/data/macros";
import * as cfh from "../../../common/files/helpers";
import * as gmt from "../../../common/geom/matrix";
import * as gm from "../../../common/geom/modifiers";
import * as gpt from "../../../common/geom/point";
import * as grc from "../../../common/geom/rect";
import * as gsh from "../../../common/geom/shapes";
import * as mth from "../../../common/math";
import * as ctk from "../../../common/types/component";
import * as ctn from "../../../common/types/container";
import * as ctm from "../../../common/types/modifiers";
import * as path from "../../../common/types/path";
import * as ctst from "../../../common/types/shape-tree";
import { editableAttrs } from "../../../common/types/shape/attrs";
import * as ctl from "../../../common/types/shape/layout";
import { UUID, zero as uuidZero } from "../../../common/uuid";
import * as dsh from "../helpers";
import * as dwcm from "./comments";
import * as dwg from "./guides";
import * as dwsh from "./shapes";
import * as dwu from "./undo";
import * as features from "../../features";
import * as wasmApi from "../../../render-wasm/api";
import * as wasmShape from "../../../render-wasm/shape";
import { Observable, of, concat } from "rxjs";
import * as ptk from "../../../potok/v2/ptk";

const WITHOUT_UUID_ZERO = (ids: UUID[]) => ids.filter((id) => id !== uuidZero);

const TRANSFORM_ATTRS = new Set([
  "selrect",
  "points",
  "x",
  "y",
  "r1",
  "r2",
  "r3",
  "r4",
  "shadow",
  "blur",
  "strokes",
  "width",
  "height",
  "content",
  "transform",
  "transform-inverse",
  "rotation",
  "flip-x",
  "flip-y",
  "grow-type",
  "position-data",
  "layout-gap",
  "layout-padding",
  "layout-item-h-sizing",
  "layout-item-max-h",
  "layout-item-max-w",
  "layout-item-min-h",
  "layout-item-min-w",
  "layout-item-v-sizing",
  "layout-padding-type",
  "layout-item-margin",
  "layout-item-margin-type",
  "layout-grid-cells",
  "layout-grid-columns",
  "layout-grid-rows",
]);

// -- temporary modifiers -------------------------------------------

function checkDelta(
  shape: any,
  root: any,
  transformedShape: any,
  transformedRoot: any
): boolean {
  const shapeDelta = root
    ? gpt.point(
        gsh.leftBound(shape) - gsh.leftBound(root),
        gsh.topBound(shape) - gsh.topBound(root)
      )
    : null;

  const transformedShapeDelta = transformedRoot
    ? gpt.point(
        gsh.leftBound(transformedShape) - gsh.leftBound(transformedRoot),
        gsh.topBound(transformedShape) - gsh.topBound(transformedRoot)
      )
    : null;

  const distance = shapeDelta && transformedShapeDelta
    ? gpt.distanceVector(shapeDelta, transformedShapeDelta)
    : gpt.point(0, 0);

  const rotationDelta =
    shape.rotation !== undefined && transformedShape.rotation !== undefined
      ? transformedShape.rotation - shape.rotation
      : 0;

  const selrect = shape.selrect;
  const transformedSelrect = transformedShape.selrect;

  return (
    Math.abs(distance.x) < 1 &&
    Math.abs(distance.y) < 1 &&
    mth.close(selrect.width, transformedSelrect.width) &&
    mth.close(selrect.height, transformedSelrect.height) &&
    mth.close(rotationDelta, 0)
  );
}

function calculateIgnoreTree(
  modifTree: Map<UUID, any>,
  objects: Map<UUID, any>
): Map<UUID, boolean> {
  function getIgnoreTree(
    ignoreTree: Map<UUID, boolean> | null,
    shape: any
  ): Map<UUID, boolean> {
    const shapeId = shape.id;
    const modifiers = modifTree.get(shapeId)?.modifiers;
    const transformedShape = gsh.transformShape(shape, modifiers);

    const root = shape.componentRoot
      ? shape
      : ctn.getComponentShape(objects, shape, { allowMain: true });

    const transformedRoot = shape.componentRoot
      ? transformedShape
      : gsh.transformShape(root, modifTree.get(root.id)?.modifiers);

    return getIgnoreTree2(ignoreTree, shape, transformedShape, root, transformedRoot);
  }

  function getIgnoreTree2(
    ignoreTree: Map<UUID, boolean> | null,
    shape: any,
    transformedShape: any,
    root: any,
    transformedRoot: any
  ): Map<UUID, boolean> {
    const shapeId = shape.id;
    let newIgnoreTree = ignoreTree || new Map();

    if (root && ctk.inComponentCopy(shape)) {
      newIgnoreTree.set(
        shapeId,
        checkDelta(shape, root, transformedShape, transformedRoot)
      );
    }

    function setChild(
      acc: Map<UUID, boolean>,
      child: any
    ): Map<UUID, boolean> {
      return getIgnoreTree2(acc, child, transformedShape, root, transformedRoot);
    }

    const shapes = shape.shapes || [];
    return shapes.map((id: UUID) => objects.get(id)).reduce(setChild, newIgnoreTree);
  }

  const result = new Map<UUID, boolean>();
  for (const id of modifTree.keys()) {
    const shape = objects.get(id);
    if (shape) {
      const tree = getIgnoreTree(result, shape);
      tree.forEach((v, k) => result.set(k, v));
    }
  }

  return result;
}

function calculateIgnoreTreeWasm(
  transforms: Map<UUID, any>,
  objects: Map<UUID, any>
): Map<UUID, boolean> {
  function getIgnoreTree(
    ignoreTree: Map<UUID, boolean> | null,
    shape: any
  ): Map<UUID, boolean> {
    const shapeId = shape.id;
    const transform = transforms.get(shapeId);
    const transformedShape = gsh.applyTransform(shape, transform);

    const root = shape.componentRoot
      ? shape
      : ctn.getComponentShape(objects, shape, { allowMain: true });

    const transformedRoot = shape.componentRoot
      ? transformedShape
      : gsh.applyTransform(root, transforms.get(root.id));

    return getIgnoreTree2(ignoreTree, shape, transformedShape, root, transformedRoot);
  }

  function getIgnoreTree2(
    ignoreTree: Map<UUID, boolean> | null,
    shape: any,
    transformedShape: any,
    root: any,
    transformedRoot: any
  ): Map<UUID, boolean> {
    const shapeId = shape.id;
    let newIgnoreTree = ignoreTree || new Map();

    if (root && ctk.inComponentCopy(shape)) {
      newIgnoreTree.set(
        shapeId,
        checkDelta(shape, root, transformedShape, transformedRoot)
      );
    }

    function setChild(
      acc: Map<UUID, boolean>,
      child: any
    ): Map<UUID, boolean> {
      return getIgnoreTree2(acc, child, transformedShape, root, transformedRoot);
    }

    const shapes = shape.shapes || [];
    return shapes.map((id: UUID) => objects.get(id)).reduce(setChild, newIgnoreTree);
  }

  const result = new Map<UUID, boolean>();
  for (const id of transforms.keys()) {
    const shape = objects.get(id);
    if (shape) {
      const tree = getIgnoreTree(result, shape);
      tree.forEach((v, k) => result.set(k, v));
    }
  }

  return result;
}

export function assocPositionData(
  shape: any,
  positionData: any,
  oldShape: any
): any {
  const deltav = gpt.toVec(
    gpt.point(oldShape.selrect),
    gpt.point(shape.selrect)
  );
  const movedPositionData = gsh.movePositionData(positionData, deltav);

  if (d.notEmpty(movedPositionData)) {
    return { ...shape, positionData: movedPositionData };
  }

  return shape;
}

function setWasmProps(
  objects: Map<UUID, any>,
  prevWasmProps: any[],
  wasmProps: any[]
): void {
  const cleanProps = prevWasmProps.map(([id, change]: [UUID, any]) => {
    const shape = objects.get(id);
    return [id, { ...change, value: shape[change.property] }];
  });

  const allProps = [...cleanProps, ...wasmProps];

  const shapeChanges = d.groupBy(
    allProps.map(([id]) => id),
    ([id, change]: [UUID, any]) => change.property
  );

  const objectsChanged = allProps.reduce((acc, [id, operation]: [UUID, any]) => {
    const shape = acc.get(id);
    if (!shape) return acc;

    const updatedShape = ctm.applyModifier(shape, operation);
    return acc.set(id, updatedShape);
  }, objects);

  wasmShape.processShapeChanges(objectsChanged, shapeChanges);
}

export function clearLocalTransform(): ptk.Event {
  return {
    type: "app.main.data.workspace.modifiers/clear-local-transform",
    effect(state: any): void {
      if (features.activeFeature(state, "render-wasm/v1")) {
        wasmApi.cleanModifiers();
        setWasmProps(
          dsh.lookupPageObjects(state),
          state.wasmProps || [],
          []
        );
      }
    },
    update(state: any): any {
      const { "workspace-modifiers": _, "wasm-props": __, "prev-wasm-props": ___, ...rest1 } = state;
      const { "app.main.data.workspace.transforms/current-move-selected": ____, ...rest2 } = rest1;
      return rest2;
    },
  };
}

export function createModifTree(
  ids: UUID[],
  modifiers: any
): Map<UUID, any> {
  assert(ids.every((id) => typeof id === "string" && id.length > 0));
  return new Map(ids.map((id) => [id, { modifiers }]));
}

export function buildModifTree(
  ids: UUID[],
  objects: Map<UUID, any>,
  getModifier: (shape: any) => any
): Map<UUID, any> {
  assert(ids.every((id) => typeof id === "string" && id.length > 0));
  return new Map(
    ids.map((id) => {
      const shape = objects.get(id);
      return [id, { modifiers: getModifier(shape) }];
    })
  );
}

export function modifierRemoveFromParent(
  modifTree: Map<UUID, any>,
  objects: Map<UUID, any>,
  shapes: UUID[]
): Map<UUID, any> {
  return shapes.reduce((acc, childId) => {
    const parentId = objects.get(childId)?.parentId;
    const current = acc.get(parentId)?.modifiers || ctm.createEmptyModifiers();
    const updated = ctm.removeChildren(current, [childId]);
    return acc.set(parentId, { modifiers: updated });
  }, modifTree);
}

export function addGridChildrenModifiers(
  modifiers: any,
  frameId: UUID,
  shapes: UUID[],
  objects: Map<UUID, any>,
  cell: [number, number]
): any {
  const frame = objects.get(frameId);
  const idsSet = new Set(shapes);

  let updatedFrame = {
    ...frame,
    shapes: frame.shapes.filter((id: UUID) => !idsSet.has(id)),
  };
  updatedFrame = ctl.assignCells(updatedFrame, objects);

  const sortedIds = idsSet
    .filter((id) => !ctl.positionAbsolute(objects, id))
    .sort((a, b) => ctst.sortZIndex(objects, a, b))
    .reverse();

  updatedFrame = {
    ...updatedFrame,
    shapes: [...updatedFrame.shapes, ...sortedIds],
  };

  if (cell) {
    updatedFrame = ctl.pushIntoCell(updatedFrame, sortedIds, cell[0], cell[1]);
    updatedFrame = ctl.assignCells(updatedFrame, objects);
  }

  let result = ctm.changeProperty(modifiers, "layout-grid-rows", updatedFrame.layoutGridRows);
  result = ctm.changeProperty(result, "layout-grid-columns", updatedFrame.layoutGridColumns);
  result = ctm.changeProperty(result, "layout-grid-cells", updatedFrame.layoutGridCells);

  return result;
}

export function buildChangeFrameModifiers(
  modifTree: Map<UUID, any>,
  objects: Map<UUID, any>,
  selected: UUID[],
  targetFrameId: UUID,
  dropIndex: number,
  cellData: any
): Map<UUID, any> {
  const originFrameIds = d.groupBy(
    selected,
    (id) => objects.get(id)?.frameId
  );

  const childSet = new Set(objects.get(targetFrameId)?.shapes || []);

  const targetFrame = objects.get(targetFrameId);
  const targetFlexLayout = ctl.flexLayout(targetFrame);
  const targetGridLayout = ctl.gridLayout(targetFrame);

  const childrenIds = [...targetFrame.shapes, ...selected];

  function setParentIds(
    acc: Map<UUID, any>,
    shapes: UUID[],
    targetFrameId: UUID
  ): Map<UUID, any> {
    return shapes.reduce((modTree, id) => {
      const current = modTree.get(id)?.modifiers || ctm.createEmptyModifiers();
      const updated = ctm.changeProperty(current, "frame-id", targetFrameId);
      const finalUpdated = ctm.changeProperty(updated, "parent-id", targetFrameId);
      const existing = modTree.get(id) || {};
      return modTree.set(id, { ...existing, modifiers: finalUpdated });
    }, acc);
  }

  function updateFrameModifiers(
    acc: Map<UUID, any>,
    [originalFrame, shapes]: [UUID, UUID[]]
  ): Map<UUID, any> {
    let filteredShapes = shapes.filter((id) => id !== targetFrameId);

    if (
      (targetGridLayout || targetFlexLayout) &&
      originalFrame === targetFrameId
    ) {
      filteredShapes = filteredShapes.filter((id) => childSet.has(id));
    }

    const frameShapes = (objects.get(originalFrame)?.shapes || []).filter(
      (id: UUID) => !selected.includes(id)
    );

    const hSizing =
      ctl.flexLayout(objects.get(originalFrame)) &&
      ctl.changeHSizing(originalFrame, objects, frameShapes);

    const vSizing =
      ctl.flexLayout(objects.get(originalFrame)) &&
      ctl.changeVSizing(originalFrame, objects, frameShapes);

    let result = acc;

    if (originalFrame !== targetFrameId) {
      result = modifierRemoveFromParent(result, objects, filteredShapes);
      result = updateIn(result, [targetFrameId, "modifiers"], (m: any) =>
        ctm.addChildren(m, filteredShapes, dropIndex)
      );
      result = setParentIds(result, filteredShapes, targetFrameId);

      if (hSizing) {
        result = updateIn(result, [originalFrame, "modifiers"], (m: any) =>
          ctm.changeProperty(m, "layout-item-h-sizing", "fix")
        );
      }

      if (vSizing) {
        result = updateIn(result, [originalFrame, "modifiers"], (m: any) =>
          ctm.changeProperty(m, "layout-item-v-sizing", "fix")
        );
      }
    }

    if (targetFlexLayout && originalFrame === targetFrameId) {
      result = updateIn(result, [targetFrameId, "modifiers"], (m: any) =>
        ctm.addChildren(m, filteredShapes, dropIndex)
      );
    }

    if (targetGridLayout) {
      result = updateIn(result, [targetFrameId, "modifiers"], (m: any) =>
        addGridChildrenModifiers(m, targetFrameId, filteredShapes, objects, cellData)
      );
    }

    return result;
  }

  let result = modifTree;

  for (const entry of Object.entries(originFrameIds)) {
    result = updateFrameModifiers(result, entry as [UUID, UUID[]]);
  }

  if (
    ctl.flexLayout(objects.get(targetFrameId)) &&
    ctl.changeHSizing(targetFrameId, objects, childrenIds)
  ) {
    result = updateIn(result, [targetFrameId, "modifiers"], (m: any) =>
      ctm.changeProperty(m, "layout-item-h-sizing", "fix")
    );
  }

  if (
    ctl.flexLayout(objects.get(targetFrameId)) &&
    ctl.changeVSizing(targetFrameId, objects, childrenIds)
  ) {
    result = updateIn(result, [targetFrameId, "modifiers"], (m: any) =>
      ctm.changeProperty(m, "layout-item-v-sizing", "fix")
    );
  }

  return result;
}

export function modifToJs(
  modifTree: Map<UUID, any>,
  objects: Map<UUID, any>
): any {
  const result: Record<string, any> = {};
  modifTree.forEach((value, key) => {
    const name = objects.get(key)?.name;
    if (name) {
      result[name] = value;
    }
  });
  return result;
}

export function applyTextModifier(
  shape: any,
  { width, height }: { width?: number; height?: number }
): any {
  let result = shape;

  if (width !== undefined && width !== null) {
    result = gsh.transformShape(
      result,
      ctm.changeDimensionsModifiers(shape, "width", width, { ignoreLock: true })
    );
  }

  if (height !== undefined && height !== null) {
    result = gsh.transformShape(
      result,
      ctm.changeDimensionsModifiers(shape, "height", height, { ignoreLock: true })
    );
  }

  return result;
}

export function applyTextModifiers(
  objects: Map<UUID, any>,
  textModifiers: Map<UUID, any>
): Map<UUID, any> {
  const result = new Map(objects);
  textModifiers.forEach((modifier, id) => {
    const shape = result.get(id);
    if (shape) {
      result.set(id, applyTextModifier(shape, modifier));
    }
  });
  return result;
}

function calculateModifiers(
  state: any,
  modifTree: Map<UUID, any>,
  ignoreConstraints: boolean = false,
  ignoreSnapPixel: boolean = false,
  pageId?: UUID,
  params?: any
): Map<UUID, any> {
  const pid = pageId || state.currentPageId;
  const objects = dsh.lookupPageObjects(state, pid);

  const snapPixel =
    !ignoreSnapPixel && (state.workspaceLayout || new Set()).has("snap-pixel-grid");

  let result = objects;

  if (state.workspaceTextModifier) {
    result = applyTextModifiers(result, state.workspaceTextModifier);
  }

  return gm.setObjectsModifiers(modifTree, result, {
    ignoreConstraints,
    snapPixel,
    ...params,
  });
}

function calculateUpdateModifiers(
  oldModifTree: Map<UUID, any>,
  state: any,
  ignoreConstraints: boolean,
  ignoreSnapPixel: boolean,
  modifTree: Map<UUID, any>
): Map<UUID, any> {
  const objects = dsh.lookupPageObjects(state);
  const snapPixel =
    !ignoreSnapPixel && (state.workspaceLayout || new Set()).has("snap-pixel-grid");

  let result = objects;
  if (state.workspaceTextModifier) {
    result = applyTextModifiers(result, state.workspaceTextModifier);
  }

  return gm.setObjectsModifiers(oldModifTree, modifTree, result, {
    ignoreConstraints,
    snapPixel,
  });
}

export function updateModifiers(
  modifTree: Map<UUID, any>,
  ignoreConstraints: boolean = false,
  ignoreSnapPixel: boolean = false
): ptk.UpdateEvent {
  return {
    type: "app.main.data.workspace.modifiers/update-modifiers",
    update(state: any): any {
      const updated = calculateUpdateModifiers(
        state.workspaceModifiers,
        state,
        ignoreConstraints,
        ignoreSnapPixel,
        modifTree
      );
      return { ...state, workspaceModifiers: updated };
    },
  };
}

export function setModifiers(
  modifTree: Map<UUID, any>,
  ignoreConstraints: boolean = false,
  ignoreSnapPixel: boolean = false,
  params?: any
): ptk.UpdateEvent {
  return {
    type: "app.main.data.workspace.modifiers/set-modifiers",
    update(state: any): any {
      const modifiers = calculateModifiers(
        state,
        modifTree,
        ignoreConstraints,
        ignoreSnapPixel,
        undefined,
        params
      );
      return { ...state, workspaceModifiers: modifiers };
    },
  };
}

function parseStructureModifiers(
  modifTree: Map<UUID, any>
): any[] {
  const result: any[] = [];

  modifTree.forEach((data, parentId) => {
    const modifiers = data.modifiers;
    if (!ctm.hasStructure(modifiers)) return;

    const structureParent = modifiers.structureParent || [];
    const structureChild = modifiers.structureChild || [];

    [...structureParent, ...structureChild].forEach((modifier: any) => {
      switch (modifier.type) {
        case "remove-children":
          modifier.value.forEach((childId: UUID) => {
            result.push({
              type: "remove-children",
              parent: parentId,
              id: childId,
              index: 0,
              value: 0,
            });
          });
          break;

        case "add-children":
          modifier.value.forEach((childId: UUID) => {
            result.push({
              type: "add-children",
              parent: parentId,
              id: childId,
              index: modifier.index || 0,
              value: 0,
            });
          });
          break;

        case "scale-content":
          result.push({
            type: "scale-content",
            parent: parentId,
            id: parentId,
            index: 0,
            value: modifier.value,
          });
          break;
      }
    });
  });

  return result;
}

const DEFAULT_TRANSFORM = gmt.matrix();

function parseGeometryModifiers(
  modifTree: Map<UUID, any>
): any[] {
  const result: any[] = [];

  modifTree.forEach((data, id) => {
    if (id === uuidZero) return;

    const modifiers = data.modifiers;
    if (!ctm.hasGeometry(modifiers)) {
      result.push({
        id,
        transform: DEFAULT_TRANSFORM,
        kind: "parent",
      });
      return;
    }

    const parent = modifiers.geometryParent;
    const kind = d.notEmpty(parent) ? "parent" : "child";
    const transform = ctm.modifiersToTransform(modifiers);

    result.push({
      id,
      transform,
      kind,
    });
  });

  return result;
}

function extractPropertyChanges(
  modifTree: Map<UUID, any>
): [UUID, any][] {
  const result: [UUID, any][] = [];

  modifTree.forEach((data, id) => {
    const structureParent = data.modifiers?.structureParent || [];
    structureParent.forEach((change: any) => {
      if (change.type === "change-property") {
        result.push([id, change]);
      }
    });
  });

  return result;
}

export function setTemporarySelrect(selrect: any): ptk.UpdateEvent {
  return {
    type: "app.main.data.workspace.modifiers/set-temporary-selrect",
    update(state: any): any {
      return { ...state, workspaceSelrect: selrect };
    },
  };
}

export function setTemporaryModifiers(modifiers: any): ptk.UpdateEvent {
  return {
    type: "app.main.data.workspace.modifiers/set-temporary-modifiers",
    update(state: any): any {
      return { ...state, workspaceWasmModifiers: modifiers };
    },
  };
}

export function setWasmModifiers(
  modifTree: Map<UUID, any>,
  options: {
    ignoreConstraints?: boolean;
    ignoreSnapPixel?: boolean;
  } = {}
): ptk.Event {
  const { ignoreConstraints = false, ignoreSnapPixel = false } = options;

  return {
    type: "app.main.data.workspace.modifiers/set-wasm-modifiers",
    update(state: any): any {
      const propertyChanges = extractPropertyChanges(modifTree);
      return {
        ...state,
        prevWasmProps: state.wasmProps,
        wasmProps: propertyChanges,
      };
    },
    watch(_: any, state: any, _stream: any): Observable<any> {
      wasmApi.cleanModifiers();

      const prevWasmProps = state.prevWasmProps || [];
      const wasmProps = state.wasmProps || [];
      const objects = dsh.lookupPageObjects(state);

      setWasmProps(objects, prevWasmProps, wasmProps);

      const structureEntries = parseStructureModifiers(modifTree);
      wasmApi.setStructureModifiers(structureEntries);

      const geometryEntries = parseGeometryModifiers(modifTree);
      const modifiers = wasmApi.propagateModifiers(geometryEntries, false);

      wasmApi.setModifiers(modifiers);

      const ids = geometryEntries.map((e: any) => e.id);
      const selrect = wasmApi.getSelectionRect(ids);

      return of(
        setTemporarySelrect(selrect),
        setTemporaryModifiers(modifiers)
      );
    },
  };
}

export function propagateStructureModifiers(
  modifTree: Map<UUID, any>,
  objects: Map<UUID, any>
): Map<UUID, any> {
  function propagateChildren(
    acc: Map<UUID, any>,
    parentId: UUID,
    modifiers: any
  ): Map<UUID, any> {
    const newModifiers = ctm.selectChildStructureModifiers(modifiers);
    const children = objects.get(parentId)?.shapes || [];

    return children.reduce((acc2, childId: UUID) => {
      const existing = acc2.get(childId)?.modifiers || ctm.createEmptyModifiers();
      return acc2.set(childId, { modifiers: ctm.addModifiers(existing, newModifiers) });
    }, acc);
  }

  let pending = Array.from(modifTree.keys());
  let result = modifTree;

  while (pending.length > 0) {
    const next = pending.shift()!;
    const modifiers = result.get(next)?.modifiers;

    if (ctm.hasStructureChild(modifiers)) {
      const children = objects.get(next)?.shapes || [];
      pending = [...pending, ...children];
      result = propagateChildren(result, next, modifiers);
    }
  }

  return result;
}

export function applyWasmModifiers(
  modifTree: Map<UUID, any>,
  options: {
    ignoreConstraints?: boolean;
    ignoreSnapPixel?: boolean;
    snapIgnoreAxis?: any;
    undoTransation?: boolean;
  } = {}
): ptk.WatchEvent {
  const {
    ignoreConstraints = false,
    ignoreSnapPixel = false,
    snapIgnoreAxis = null,
    undoTransation = true,
  } = options;

  return {
    type: "app.main.data.workspace.modifiers/apply-wasm-modifiers",
    watch(_: any, state: any, _stream: any): Observable<any> {
      wasmApi.cleanModifiers();

      const structureEntries = parseStructureModifiers(modifTree);
      wasmApi.setStructureModifiers(structureEntries);

      const objects = dsh.lookupPageObjects(state);
      const geometryEntries = parseGeometryModifiers(modifTree);

      const snapPixel =
        !ignoreSnapPixel &&
        (state.workspaceLayout || new Set()).has("snap-pixel-grid");

      const transforms = new Map(
        wasmApi.propagateModifiers(geometryEntries, snapPixel)
      );

      const ignoreTree = calculateIgnoreTreeWasm(transforms, objects);

      const finalOptions = {
        ...options,
        regObjects: true,
        ignoreTree,
        attrs: TRANSFORM_ATTRS,
      };

      const propagatedModifTree = propagateStructureModifiers(
        modifTree,
        dsh.lookupPageObjects(state)
      );

      const ids = new Set([
        ...Array.from(modifTree.keys()),
        ...Array.from(transforms.keys()),
      ]);

      const filteredIds = Array.from(WITHOUT_UUID_ZERO(Array.from(ids)));

      function updateShape(shape: any): any {
        const shapeId = shape.id;
        const transform = transforms.get(shapeId);
        const modifiers = propagatedModifTree.get(shapeId)?.modifiers;

        let result = gsh.applyTransform(shape, transform);
        if (modifiers) {
          result = ctm.applyStructureModifiers(result, modifiers);
        }
        return result;
      }

      const boolIds = new Set(
        Array.from(ids)
          .flatMap((id) => cfh.getParentsWithSelf(objects, id))
          .filter((id) => cfh.boolShape(objects.get(id)))
          .map((s) => s.id)
      );

      const undoId = Symbol();

      const start = undoTransation
        ? of(dwu.startUndoTransaction(undoId))
        : of();

      const operations = of(
        clearLocalTransform(),
        dwg.moveFrameGuides({
          ids: filteredIds,
          transforms,
        }),
        dwcm.moveFrameCommentThreads(transforms),
        dwsh.updateShapes(filteredIds, updateShape, finalOptions),
        dwsh.updateShapes(
          Array.from(boolIds),
          path.updateBoolShape,
          { ...finalOptions, withObjects: true }
        )
      );

      const end = undoTransation
        ? of(dwu.commitUndoTransaction(undoId))
        : of();

      return concat(start, operations, end);
    },
  };
}

const ROTATION_SHAPE_IDS = (shapes: any[]) =>
  shapes
    .filter((s) => !s.blocked)
    .filter((s) => editableAttrs[s.type]?.rotation)
    .map((s) => s.id);

export function setWasmRotationModifiers(
  angle: number,
  shapes: any[],
  center?: any
): ptk.Event {
  return {
    type: "app.main.data.workspace.modifiers/set-wasm-rotation-modifiers",
    effect(state: any): void {
      const objects = dsh.lookupPageObjects(state);
      const ids = ROTATION_SHAPE_IDS(shapes);

      const modifTree = buildModifTree(ids, objects, (shape) =>
        ctm.rotationModifiers(shape, center || grc.rectToCenter(gsh.shapesToRect(shapes)), angle)
      );

      const modifiers = Array.from(modifTree.entries()).map(
        ([id, { modifiers }]) => [id, ctm.modifiersToTransform(modifiers)]
      );

      wasmApi.setModifiers(modifiers);
    },
  };
}

export function setRotationModifiers(
  angle: number,
  shapes: any[],
  center?: any
): ptk.UpdateEvent {
  return {
    type: "app.main.data.workspace.modifiers/set-rotation-modifiers",
    update(state: any): any {
      const objects = dsh.lookupPageObjects(state);
      const ids = ROTATION_SHAPE_IDS(shapes);

      const getModifier = (shape: any) =>
        ctm.rotationModifiers(
          shape,
          center || grc.rectToCenter(gsh.shapesToRect(shapes)),
          angle
        );

      const modifTree = buildModifTree(ids, objects, getModifier);
      const finalModifTree = gm.setObjectsModifiers(modifTree, objects);

      return { ...state, workspaceModifiers: finalModifTree };
    },
  };
}

export function setDeltaRotationModifiers(
  angle: number,
  shapes: any[],
  options: {
    center?: any;
    delta?: boolean;
    pageId?: UUID;
  } = {}
): ptk.UpdateEvent {
  const { center, delta = false, pageId } = options;

  return {
    type: "app.main.data.workspace.modifiers/set-delta-rotation-modifiers",
    update(state: any): any {
      const pid = pageId || state.currentPageId;
      const objects = dsh.lookupPageObjects(state, pid);

      const ids = shapes
        .filter((s) => !s.blocked)
        .filter((s) => editableAttrs[s.type]?.rotation)
        .map((s) => s.id);

      const getModifier = (shape: any) => {
        const actualAngle = delta ? angle : angle - shape.rotation;
        const actualCenter = center || gsh.shapeCenter(shape);
        return ctm.rotationModifiers(shape, actualCenter, actualAngle);
      };

      const modifTree = buildModifTree(ids, objects, getModifier);
      const finalModifTree = gm.setObjectsModifiers(modifTree, objects);

      return { ...state, workspaceModifiers: finalModifTree };
    },
  };
}

export function applyModifiersStar(
  objects: Map<UUID, any>,
  objectModifiers: Map<UUID, any>,
  textModifiers: Map<UUID, any>,
  options: any
): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace.modifiers/apply-modifiers*",
    watch(): Observable<any> {
      const ids = Array.from(WITHOUT_UUID_ZERO(Array.from(objectModifiers.keys())));

      const idsWithChildren = [
        ...ids,
        ...ids.flatMap((id) => cfh.getChildrenIds(objects, id)),
      ];

      const ignoreTree = calculateIgnoreTree(objectModifiers, objects);

      const finalOptions = {
        ...options,
        regObjects: true,
        ignoreTree,
        attrs: TRANSFORM_ATTRS,
      };

      function updateShape(shape: any): any {
        const shapeId = shape.id;
        const modifiers = objectModifiers.get(shapeId)?.modifiers;
        const textShape = cfh.textShape(shape);
        const posData = textShape ? textModifiers.get(shapeId)?.positionData : null;

        let result = gsh.transformShape(shape, modifiers);
        if (posData && d.notEmpty(posData)) {
          result = assocPositionData(result, posData, shape);
        }
        return result;
      }

      return of(
        dwg.moveFrameGuides({
          ids: idsWithChildren,
          modifiers: objectModifiers,
        }),
        dwcm.moveFrameCommentThreads(idsWithChildren),
        dwsh.updateShapes(ids, updateShape, finalOptions)
      );
    },
  };
}

export function applyModifiers(
  options: {
    modifiers?: Map<UUID, any>;
    undoTransation?: boolean;
    ignoreConstraints?: boolean;
    ignoreSnapPixel?: boolean;
    pageId?: UUID;
  } = {}
): ptk.WatchEvent {
  const {
    modifiers,
    undoTransation = true,
    ignoreConstraints = false,
    ignoreSnapPixel = false,
  } = options;

  return {
    type: "app.main.data.workspace.modifiers/apply-modifiers",
    watch(_: any, state: any, _stream: any): Observable<any> {
      const textModifiers = state.workspaceTextModifier || new Map();
      const pageId = options.pageId || state.currentPageId;
      const objects = dsh.lookupPageObjects(state, pageId);

      const objectModifiers = modifiers
        ? calculateModifiers(state, modifiers, ignoreConstraints, ignoreSnapPixel, pageId)
        : state.workspaceModifiers;

      const undoId = Symbol();

      const start = undoTransation
        ? of(dwu.startUndoTransaction(undoId))
        : of();

      const cleanup = (state: any) => {
        const ids = Array.from(WITHOUT_UUID_ZERO(Array.from(objectModifiers.keys())));
        const newTextModifiers = new Map(textModifiers);
        ids.forEach((id) => newTextModifiers.delete(id));
        return { ...state, workspaceTextModifier: newTextModifiers };
      };

      const applyOp = of(
        applyModifiersStar(objects, objectModifiers, textModifiers, options),
        cleanup
      );

      const clearTransform = !modifiers
        ? of(clearLocalTransform())
        : of();

      const end = undoTransation
        ? of(dwu.commitUndoTransaction(undoId))
        : of();

      return concat(start, applyOp, clearTransform, end);
    },
  };
}

// Pure function to determine next grow-type for text layers
export function nextGrowType(
  currentGrowType: string,
  scaleV: { x: number; y: number }
): string {
  if (currentGrowType === "fixed") {
    return "fixed";
  }

  if (
    !mth.close(scaleV.y, 1.0) &&
    (currentGrowType === "auto-width" || currentGrowType === "auto-height")
  ) {
    return "fixed";
  }

  if (!mth.close(scaleV.x, 1.0) && currentGrowType === "auto-width") {
    return "auto-height";
  }

  return currentGrowType;
}
