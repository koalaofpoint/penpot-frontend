// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from "../../../common/data";
import * as pcb from "../../../common/files/changes-builder";
import * as cph from "../../../common/files/helpers";
import * as gsh from "../../../common/geom/shapes";
import * as ctc from "../../../common/types/component";
import * as ctn from "../../../common/types/container";
import * as path from "../../../common/types/path";
import * as bool from "../../../common/types/path/bool";
import * as cts from "../../../common/types/shape";
import * as ctl from "../../../common/types/shape/layout";
import { UUID, next as uuidNext } from "../../../common/uuid";
import * as dch from "../changes";
import * as dsh from "../helpers";
import * as dws from "./selection";
import * as dwsh from "./shapes";
import { Observable, of, map, filter, mergeMap } from "rxjs";
import * as ptk from "../../../potok/v2/ptk";
import * as str from "cuerdas/core";

type BoolType = "union" | "difference" | "intersection" | "exclude";

function createBoolShape(
  id: UUID | null,
  type: BoolType,
  name: string,
  shapes: any[],
  objects: Map<UUID, any>
): [any, number] {
  const shapeId = id || uuidNext();

  const head = type === "difference" ? shapes[0] : shapes[shapes.length - 1];

  const updatedHead =
    head.svgAttrs && head.fills?.length === 0
      ? { ...head, fills: path.getDefaultBoolFills() }
      : head;

  const shape: any = {
    id: shapeId,
    type: "bool",
    boolType: type,
    frameId: head.frameId,
    parentId: head.parentId,
    name,
    shapes: d.mapId(shapes),
  };

  const mergedShape = cts.setupShape({
    ...shape,
    ...d.selectKeys(head, path.boolStyleProperties),
  });

  const finalShape = path.updateBoolShape(mergedShape, objects);
  const position = cph.getPositionOnParent(objects, head.id);

  return [finalShape, position];
}

function groupToBool(
  type: BoolType,
  group: any,
  objects: Map<UUID, any>
): any {
  const shapes = group.shapes.map((id: UUID) => objects.get(id));
  let head = type === "difference" ? shapes[0] : shapes[shapes.length - 1];

  if (head.svgAttrs && head.fills?.length === 0) {
    head = { ...head, fills: path.getDefaultBoolFills() };
  }

  return cts.setupShape({
    ...group,
    type: "bool",
    boolType: type,
    ...d.selectKeys(head, bool.styleProperties),
  });
}

export function createBool(
  type: BoolType,
  options: { ids?: UUID[]; forceShapeId?: UUID } = {}
): ptk.WatchEvent {
  const { ids, forceShapeId } = options;

  return {
    type: "app.main.data.workspace/create-bool-union",
    watch(it: any, state: any, _stream: any): Observable<any> {
      const pageId = state.currentPageId;
      const objects = dsh.lookupPageObjects(state, pageId);

      const name = str.capital(d.name(type));

      const selectedIds = ids || dsh.getSelectedIds(state);
      const processedIds = dsh.processSelected(objects, selectedIds);

      const xform = (source: Observable<UUID>) =>
        source.pipe(
          map((id) => objects.get(id)),
          filter((shape) => !cph.frameShape(shape)),
          filter((shape) => !ctc.isVariant(shape)),
          filter((shape) => !ctn.hasAnyCopyParent(objects, shape))
        );

      const orderedShapes = cph.orderByIndexedShapes(objects, processedIds);
      const filteredShapes = xform(d.from(orderedShapes)).pipe();

      if (!filteredShapes || filteredShapes.length === 0) {
        return of();
      }

      const [shape, index] = createBoolShape(
        forceShapeId,
        type,
        name,
        filteredShapes.reverse(),
        objects
      );

      const shapeId = shape.id;

      const changes = pcb.emptyChanges(it, pageId)
        .withObjects(objects)
        .addObject(shape, { index: index + 1 })
        .updateShapes(
          filteredShapes.map((s: any) => s.id),
          ctl.removeLayoutItemData
        )
        .changeParent(shapeId, filteredShapes.map((s: any) => s.id));

      return of(
        dch.commitChanges(changes),
        dws.selectShapes(d.orderedSet(shapeId))
      );
    },
  };
}

export function groupToBool(
  shapeId: UUID,
  type: BoolType
): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace/group-to-bool",
    watch(_: any, state: any, _stream: any): Observable<any> {
      const objects = dsh.lookupPageObjects(state);
      const shape = objects.get(shapeId);

      if (ctn.hasAnyCopyParent(objects, shape)) {
        return of();
      }

      const updateFn = (s: any) => groupToBool(type, s, objects);

      return of(
        dwsh.updateShapes([shapeId], updateFn, {
          withObjects: true,
          regObjects: true,
        })
      );
    },
  };
}

function boolToGroup(shape: any, objects: Map<UUID, any>): any {
  const groupShapes = d.mapId(shape.shapes.map((id: UUID) => objects.get(id)));

  return gsh.updateGroupSelrect(
    {
      ...shape,
      type: "group",
      ...d.withoutKeys(shape, path.boolGroupStyleProperties),
    },
    groupShapes
  );
}

export function boolToGroup(shapeId: UUID): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace/bool-to-group",
    watch(_: any, state: any, _stream: any): Observable<any> {
      const objects = dsh.lookupPageObjects(state);
      const shape = objects.get(shapeId);

      if (ctn.hasAnyCopyParent(objects, shape)) {
        return of();
      }

      const updateFn = (s: any) => boolToGroup(s, objects);

      return of(
        dwsh.updateShapes([shapeId], updateFn, {
          withObjects: true,
          regObjects: true,
        })
      );
    },
  };
}

export function changeBoolType(
  shapeId: UUID,
  type: BoolType
): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace/change-bool-type",
    watch(_: any, state: any, _stream: any): Observable<any> {
      const objects = dsh.lookupPageObjects(state);
      const shape = objects.get(shapeId);

      if (ctn.hasAnyCopyParent(objects, shape)) {
        return of();
      }

      const updateFn = (s: any) => ({ ...s, boolType: type });

      return of(
        dwsh.updateShapes([shapeId], updateFn, { regObjects: true })
      );
    },
  };
}
