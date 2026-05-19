// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import {
  assertIsArray,
  assertIsObject,
  getIn,
  mapcat,
  orderedSet,
  removeAt,
  replace,
} from "../../../../common/data/macros";
import { cleanLoops, getFirstParent, getIndexedShapes, getOnPositionParent, orderIndexedShapes } from "../../../../common/files/helpers";
import { setupShape } from "../../../../common/types/shape";
import { removeLayoutItemData } from "../../../../common/types/shape/layout";
import { nextId } from "../../../../common/uuid";
import { commitChanges } from "../../changes";
import { getFirstParent as lookupPage, lookupPageObjects, lookupSelected } from "../../helpers";
import { ptfx } from "../../fx";
import { selectShapes } from "./selection";
import { startUndoTransaction, commitUndoTransaction } from "./undo";
import type { State } from "../types";
import type { ChangesBuilder } from "../../../../common/files/changes-builder";
import type { Point } from "../../../../common/geom/point";
import type { Shape } from "../../../../common/types/shape";
import type { LayoutGridCell } from "../../../../common/types/container";

export function shapesForGrouping(objects: Map<string, Shape>, selected: string[]) {
  return selected
    .pipe(orderIndexedShapes(objects))
    .pipe(reverse)
    .pipe(map((id) => objects.get(id)!));
}

export function getEmptyGroupsAfterGroupCreation(
  objects: Map<string, Shape>,
  parentId: string,
  shapes: Shape[]
) {
  const ids = cleanLoops(objects, shapes.map((s) => s.id));
  const parents = new Set(ids.map((id) => getFirstParent(objects, id)));

  const result = new Set<string>();
  const removedIds = new Set<string>();
  const toCheck = [...parents];

  while (toCheck.length > 0) {
    const currentId = toCheck.shift()!;
    if (!currentId) continue;

    const group = objects.get(currentId);
    if (
      group &&
      group.type !== "frame" &&
      currentId !== parentId &&
      group.shapes.every((id) => removedIds.has(id))
    ) {
      const nextParent = getFirstParent(objects, currentId);
      if (nextParent) {
        toCheck.push(nextParent);
      }
      removedIds.add(currentId);
      result.add(currentId);
    }
  }

  return result;
}

export function prepareCreateGroup(
  changes: ChangesBuilder,
  id: string,
  objects: Map<string, Shape>,
  pageId: string,
  shapes: Shape[],
  baseName: string,
  keepName: boolean
): [Shape, ChangesBuilder] {
  const frameId = shapes[0]?.frameId;
  const parentId = shapes[0]?.parentId;

  const gname = keepName && shapes.length === 1 && shapes[0].type === "group"
    ? shapes[0].name
    : baseName;

  const selrect = shapesToRect(shapes);
  const groupIdx = shapes
    .slice(-1)[0]
    .id.pipe(getOnPositionParent(objects))
    .pipe((idx) => idx + 1);

  const group = setupShape({
    id,
    type: "group",
    name: gname,
    shapes: shapes.map((s) => s.id),
    selrect,
    x: selrect.x,
    y: selrect.y,
    width: selrect.width,
    height: selrect.height,
    parentId,
    frameId,
    index: groupIdx,
  });

  const shapesToDetach = shapes.filter((s) => inComponentCopyNotHead(s));
  const idsToDelete = getEmptyGroupsAfterGroupCreation(objects, parentId, shapes);

  const targetCell = gridLayoutParent(objects, parentId)
    ? getCellByShapeId(objects.get(parentId)!, shapes.slice(-1)[0].id)
    : undefined;

  const gridParents = shapes
    .filter((s) => gridLayoutParent(objects, s.parentId))
    .map((s) => s.parentId);

  const finalChanges = changes
    .pipe(withPageId(pageId))
    .pipe(withObjects(objects))
    .pipe(addObject(group, { index: groupIdx }))
    .pipe(
      updateShapes(shapes.map((s) => s.id), (shape) => ({
        ...shape,
        constraintsH: "scale",
        constraintsV: "scale",
      }))
    )
    .pipe(updateShapes(shapes.map((s) => s.id), removeLayoutItemData))
    .pipe(changeParent(group.id, reverse(shapes)))
    .pipe(updateShapes(shapesToDetach.map((s) => s.id), detachShape))
    .pipe(
      cond(
        !!targetCell,
        updateShapes([parentId], (parent) => ({
          ...parent,
          ["layoutGridCells", targetCell.id, "shapes"]: [group.id],
        }))
      )
    )
    .pipe(updateShapes(gridParents, assignCells({ withObjects: true })))
    .pipe(removeObjects([...idsToDelete]));

  return [group, finalChanges];
}

export function removeGroupChanges(
  it: unknown,
  pageId: string,
  group: Shape,
  objects: Map<string, Shape>
) {
  const children = orderIndexedShapes(objects, group.shapes)
    .pipe(map((id) => objects.get(id)!))
    .pipe(toArray);

  const parentId = getFirstParent(objects, group.id);
  const parent = objects.get(parentId)!;

  const indexInParent = parent.shapes
    .map((id, idx) => [id, idx] as const)
    .filter(([id]) => id === group.id)
    .map(([, idx]) => idx + 1)[0];

  return emptyChanges(it, pageId)
    .pipe(withObjects(objects))
    .pipe(changeParent(parentId, children, indexInParent))
    .pipe(removeObjects([group.id]));
}

export function removeFrameChanges(
  it: unknown,
  pageId: string,
  frame: Shape,
  objects: Map<string, Shape>
) {
  const children = orderIndexedShapes(objects, frame.shapes)
    .pipe(map((id) => objects.get(id)!))
    .pipe(toArray);

  const parentId = getFirstParent(objects, frame.id);
  const indexInParent = frame.id.pipe(getOnPositionParent(objects)).pipe((idx) => idx + 1);

  return emptyChanges(it, pageId)
    .pipe(withObjects(objects))
    .pipe(
      cond(
        anyLayout(frame),
        updateShapes(frame.shapes, removeLayoutItemData)
      )
    )
    .pipe(changeParent(parentId, children, indexInParent))
    .pipe(removeObjects([frame.id]));
}

// GROUPS

export function groupShapes(
  id: string | null,
  ids: string[],
  options: { changeSelection?: boolean } = {}
) {
  return ptfx({
    name: "group-shapes",
    watch: (it, state) => {
      const finalId = id ?? nextId();
      const pageId = state.currentPageId;
      const objects = lookupPageObjects(state, pageId);

      const shapes = ids
        .pipe(cleanLoops(objects))
        .pipe(filter((id) => !hasAnyCopyParent(objects, objects.get(id))))
        .pipe(shapesForGrouping(objects))
        .pipe(filter((s) => !isVariant(s)));

      const parents = new Set(shapes.map((s) => s.parentId));

      if (shapes.length > 0) {
        const [group, changes] = prepareCreateGroup(
          emptyChanges(it),
          finalId,
          objects,
          pageId,
          shapes,
          "Group",
          false
        );

        return of(
          commitChanges(changes),
          ...(options.changeSelection
            ? [selectShapes(orderedSet([group.id]))]
            : []),
          dataEvent("layout/update", { ids: [...parents] })
        );
      }

      return EMPTY;
    },
  });
}

export function groupSelected() {
  return ptfx({
    name: "group-selected",
    watch: (_state) => {
      const selected = lookupSelected(_state);
      return of(groupShapes(null, selected, { changeSelection: true }));
    },
  });
}

export function ungroupShapes(
  ids: string[],
  options: { changeSelection?: boolean } = {}
) {
  return ptfx({
    name: "ungroup-shapes",
    watch: (it, state) => {
      const pageId = state.currentPageId;
      const objects = lookupPageObjects(state, pageId);

      const prepare = (shapeId: string) => {
        const shape = objects.get(shapeId)!;
        const changes =
          groupShape(shape) || frameShape(shape)
            ? removeGroupChanges(it, pageId, shape, objects)
            : frameShape(shape)
              ? removeFrameChanges(it, pageId, shape, objects)
              : null;

        return changes?.pipe(
          cond(
            gridLayoutParent(objects, shape.parentId),
            updateShapes([shape.parentId], assignCells({ withObjects: true }))
          )
        );
      };

      const validIds = ids.filter(
        (id) => !hasAnyCopyParent(objects, objects.get(id)) &&
                 !instanceHead(objects.get(id)) &&
                 !isVariantContainer(objects.get(id))
      );

      const changesList = validIds
        .pipe(map(prepare))
        .pipe(filter(Boolean))
        .pipe(toArray);

      const parents = ids
        .pipe(map((id) => getFirstParent(objects, id)))
        .pipe(filter(Boolean))
        .pipe((ids) => new Set(ids as string[]));

      const childIds = orderedSet(
        ids.pipe(mapcat((id) => getIn(objects, [id, "shapes"]) ?? []))
      );

      const changes = {
        redoChanges: changesList.pipe(mapcat((c) => c.redoChanges)).pipe(toArray),
        undoChanges: changesList.pipe(mapcat((c) => c.undoChanges)).pipe(toArray),
        origin: it,
      };

      const undoId = Symbol();

      if (ids.length > 0) {
        return of(
          startUndoTransaction(undoId),
          commitChanges(changes),
          dataEvent("layout/update", { ids: [...parents] }),
          commitUndoTransaction(undoId),
          ...(options.changeSelection
            ? [selectShapes(childIds)]
            : [])
        );
      }

      return EMPTY;
    },
  });
}

export function ungroupSelected() {
  return ptfx({
    name: "ungroup-selected",
    watch: (_state) => {
      const selected = lookupSelected(_state);
      return of(ungroupShapes(selected, { changeSelection: true }));
    },
  });
}

export function maskGroup(ids: string[] | null = null) {
  return ptfx({
    name: "mask-group",
    watch: (it, state) => {
      const pageId = state.currentPageId;
      const objects = lookupPageObjects(state, pageId);
      const selected = ids ?? lookupSelected(state);

      const cleanSelected = selected
        .pipe(cleanLoops(objects))
        .pipe(filter((id) => !hasAnyCopyParent(objects, objects.get(id))));

      const shapes = shapesForGrouping(objects, cleanSelected);
      const firstShape = shapes[0];

      if (shapes.length > 0) {
        const [group, changes] =
          shapes.length === 1 && firstShape.type === "group"
            ? [firstShape, emptyChanges(it, pageId).pipe(withObjects(objects))]
            : prepareCreateGroup(
                emptyChanges(it),
                nextId(),
                objects,
                pageId,
                shapes,
                "Mask",
                true
              );

        const finalChanges = changes
          .pipe(
            updateShapes(group.shapes, (shape) => ({
              ...shape,
              constraintsH: "scale",
              constraintsV: "scale",
            }))
          )
          .pipe(
            updateShapes([group.id], (group) => ({
              ...group,
              maskedGroup: true,
              selrect: firstShape.selrect,
              points: firstShape.points,
              transform: firstShape.transform,
              transformInverse: firstShape.transformInverse,
            }))
          )
          .pipe(resizeParents([group.id]));

        const undoId = Symbol();

        return of(
          startUndoTransaction(undoId),
          commitChanges(finalChanges),
          selectShapes(orderedSet([group.id])),
          dataEvent("layout/update", { ids: [group.id] }),
          commitUndoTransaction(undoId)
        );
      }

      return EMPTY;
    },
  });
}

export function unmaskGroup(ids: string[] | null = null) {
  return ptfx({
    name: "unmask-group",
    watch: (it, state) => {
      const pageId = state.currentPageId;
      const objects = lookupPageObjects(state, pageId);

      const maskedGroups = (ids ?? lookupSelected(state))
        .pipe(map((id) => objects.get(id)!))
        .pipe(filter((s) => s.type === "bool" || s.type === "group"));

      const changes = maskedGroups.pipe(
        reduce((changes, mask) =>
          changes
            .pipe(
              updateShapes([mask.id], (shape) =>
                omit(shape, ["maskedGroup"])
              )
            )
            .pipe(resizeParents([mask.id]))
        ,
        emptyChanges(it, pageId).pipe(withObjects(objects))
      );

      return of(commitChanges(changes));
    },
  });
}