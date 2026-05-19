// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from "app/common/data";
import * as dm from "app/common/data/macros";
import * as cfh from "app/common/files/helpers";
import * as cfi from "app/common/files/indices";
import * as gpt from "app/common/geom/point";
import * as grc from "app/common/geom/rect";
import * as gsh from "app/common/geom/shapes";
import * as gst from "app/common/geom/shapes/text";
import * as ctm from "app/common/types/modifiers";
import * as uuid from "app/common/uuid";
import * as qdt from "app/util/quadtree";
import * as set from "clojure.set";

////////////////////////////////////////////////////////////////;
// IMPL
////////////////////////////////////////////////////////////////;

const paddingPercent = 0.10;

function indexShape(
  objects: any,
  parentsIndex: any,
  clipIndex: any,
  index: any,
  shape: any
): any {
  const bounds = (cfh.textShape(shape) && shape["position-data"] !== null && d.notEmpty(shape["position-data"]))
    ? gst.shapeBounds(shape)
    : grc.pointsRect(shape["points"]);

  const bound = {
    x: dm.getProp(bounds, "x"),
    y: dm.getProp(bounds, "y"),
    width: dm.getProp(bounds, "width"),
    height: dm.getProp(bounds, "height"),
  };

  const shapeId = dm.getProp(shape, "id");
  const frameId = dm.getProp(shape, "frame-id");
  const shapeType = dm.getProp(shape, "type");

  const parents = parentsIndex[shapeId];
  const clipParents = clipIndex[shapeId];

  const frame = shapeType !== ":frame" && frameId !== uuid.zero
    ? objects[frameId]
    : null;

  return qdt.insert(
    index,
    shapeId,
    bound,
    { ...shape, frame, clipParents, parents }
  );
}

function objectsBounds(objects: any): any {
  return gsh.shapesRect(Object.values(objects).filter((v: any) => v !== uuid.zero));
}

function addPaddingBounds(bounds: any): any {
  const widthPad = bounds.width * paddingPercent;
  const heightPad = bounds.height * paddingPercent;
  return {
    ...bounds,
    x: bounds.x - widthPad,
    x1: bounds.x1 - widthPad,
    x2: bounds.x2 + widthPad,
    y1: bounds.y1 - heightPad,
    y2: bounds.y2 + heightPad,
    width: bounds.width + widthPad + widthPad,
    height: bounds.height + heightPad + heightPad,
  };
}

function createIndex(objects: any): any {
  const parentsIndex = cfi.generateChildAllParentsIndex(objects);
  const clipIndex = cfi.createClipIndex(objects, parentsIndex);
  const rootShapes = cfh.getImmediateChildren(objects, uuid.zero);
  const bounds = addPaddingBounds(gsh.shapesRect(rootShapes));

  const index = Object.entries(objects)
    .filter(([k]) => k !== uuid.zero)
    .reduce(
      (acc, [k, shape]) => indexShape(objects, parentsIndex, clipIndex, acc, shape),
      qdt.create(bounds)
    );

  return { index, bounds, parentsIndex, clipIndex };
}

// FIXME: optimize
function updateIndex(data: any, oldObjects: any, newObjects: any): any {
  const objectChanged = (id: any) => oldObjects[id] !== newObjects[id];

  const changedIds = set.union(
    new Set(Object.keys(oldObjects)),
    new Set(Object.keys(newObjects))
  ).filter((id) => id !== uuid.zero && objectChanged(id))
    .flatMap((id) => [id, ...cfh.getChildrenIds(newObjects, id)]);

  const shapes = changedIds
    .map((id) => newObjects[id])
    .filter((shape) => shape !== undefined);

  const parentsIndex = cfi.generateChildAllParentsIndex(newObjects, shapes);
  const clipIndex = cfi.createClipIndex(newObjects, parentsIndex);

  const index = shapes.reduce(
    (acc, shape) => indexShape(newObjects, parentsIndex, clipIndex, acc, shape),
    qdt.removeAll(data.index, changedIds)
  );

  return { ...data, index, parentsIndex, clipIndex };
}

export function updateIndexSingle(data: any, objects: any, shape: any): any {
  let index = qdt.removeAll(data.index, [shape.id]);
  index = indexShape(objects, data.parentsIndex, data.clipIndex, index, shape);
  return { ...data, index };
}

function queryIndex(
  { index }: { index: any },
  rect: any,
  frameId: any,
  fullFrame: boolean,
  includeFrames: boolean,
  ignoreGroups: boolean,
  clipChildren: boolean,
  usingSelrect: boolean
): any {
  const result = es6IteratorSeq(qdt.search(index, rect));

  const matchCriteria = (shape: any) => {
    if (shape.hidden) return false;
    if (!cfh.frameShape(shape) && shape.blocked) return false;
    if (frameId && shape["frame-id"] !== frameId) return false;

    const type = shape.type;
    if (type === ":frame" && !includeFrames) return false;
    if ((type === ":bool" || type === ":group") && ignoreGroups) return false;

    if (!fullFrame) return true;
    if (!ignoreGroups && shape["component-id"]) return true;
    if (!ignoreGroups && !cfh.rootFrame(shape)) return true;
    if (d.notEmpty(shape.shapes) && gsh.rectContainsShape(rect, shape)) return true;
    if (d.empty(shape.shapes) && gsh.overlaps(shape, rect)) return true;
    return false;
  };

  const overlapsOuterShape = (shape: any) => {
    const padding = shape.strokes
      .map((s: any) => {
        const alignment = s["stroke-alignment"] || ":center";
        if (alignment === ":center") return s["stroke-width"] || 0;
        if (alignment === ":outer") return 2 * (s["stroke-width"] || 0);
        return 0;
      })
      .reduce(d.max, 0);

    const scalev = gpt.point(
      (shape.width + padding) / shape.width,
      (shape.height + padding) / shape.height
    );

    const outerShape = gsh.transformShape(
      shape,
      ctm.resize(scalev, gsh.shapeCenter(shape))
    );

    return gsh.overlaps(outerShape, rect);
  };

  const overlapsInnerShape = (shape: any) => {
    const padding = shape.strokes
      .map((s: any) => {
        const alignment = s["stroke-alignment"] || ":center";
        if (alignment === ":center") return s["stroke-width"] || 0;
        if (alignment === ":outer") return 0;
        return 2 * (s["stroke-width"] || 0);
      })
      .reduce(d.max, 0);

    const scalev = gpt.point(
      (shape.width - padding) / shape.width,
      (shape.height - padding) / shape.height
    );

    const innerShape = gsh.transformShape(
      shape,
      ctm.resize(scalev, gsh.shapeCenter(shape))
    );

    return gsh.overlaps(innerShape, rect);
  };

  const overlapsPath = (shape: any) => {
    let padding = shape.strokes
      .map((s: any) => s["stroke-width"])
      .reduce(d.max, 5);

    const width = dm.getIn(shape, ["selrect", "width"], 1);
    const height = dm.getIn(shape, ["selrect", "height"], 1);
    padding = Math.min(padding, Math.max(width, height) / 2);

    const center = grc.rectCenter(rect);
    const newRect = grc.centerRect(center, padding);
    return gsh.overlapsPath(shape, newRect, false);
  };

  const overlaps = (shape: any) => {
    if (!usingSelrect && d.empty(shape.fills) &&
        !Object.prototype.hasOwnProperty.call(shape["svg-attrs"], "fill") &&
        !Object.prototype.hasOwnProperty.call(shape["svg-attrs"]?.["style"], "fill")) {
      switch (shape.type) {
        case ":rect":
          return overlapsOuterShape(shape) && !overlapsInnerShape(shape);
        case ":circle":
          return overlapsOuterShape(shape) && !overlapsInnerShape(shape);
        case ":bool":
        case ":path":
          return overlapsPath(shape);
        default:
          return gsh.overlaps(shape, rect);
      }
    }
    return gsh.overlaps(shape, rect);
  };

  const overlapsParent = (clipParents: any) => {
    return !clipParents.some((p: any) => !overlaps(p));
  };

  const resultSet = d.orderedSet();
  for (const item of result) {
    const shape = item["data"];
    if (!matchCriteria(shape)) continue;
    if (!overlaps(shape)) continue;
    if (clipChildren && !overlapsParent(shape.clipParents || [])) continue;
    resultSet.add(shape.id);
  }
  return resultSet;
}

////////////////////////////////////////////////////////////////;
// PUBLIC API
////////////////////////////////////////////////////////////////;

export function addPage(state: any, page: { id: any; objects: any }): any {
  return { ...state, [page.id]: createIndex(page.objects) };
}

export function updatePage(state: any, oldPage: any, newPage: any): any {
  const pageId = oldPage.id;
  const updater = (index: any) => {
    const oldObjects = oldPage.objects;
    const newObjects = newPage.objects;
    const oldBounds = index?.bounds;
    const newBounds = objectsBounds(newObjects);

    if (index !== null && grc.containsRect(oldBounds, newBounds)) {
      return updateIndex(index, oldObjects, newObjects);
    }
    return createIndex(newObjects);
  };
  return { ...state, [pageId]: updater(state[pageId]) };
}

export function query(
  index: any,
  {
    pageId,
    rect,
    frameId,
    fullFrame = false,
    includeFrames = false,
    ignoreGroups = false,
    clipChildren = true,
    usingSelrect = false,
  }: {
    pageId: any;
    rect: any;
    frameId?: any;
    fullFrame?: boolean;
    includeFrames?: boolean;
    ignoreGroups?: boolean;
    clipChildren?: boolean;
    usingSelrect?: boolean;
  }
): any {
  const pageIndex = index[pageId];
  if (!pageIndex) return null;
  return queryIndex(
    pageIndex,
    rect,
    frameId,
    fullFrame,
    includeFrames,
    ignoreGroups,
    clipChildren,
    usingSelrect
  );
}
