// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from "app/common/data";
import * as cfh from "app/common/files/helpers";
import * as diff from "app/common/files/page-diff";
import * as gg from "app/common/geom/grid";
import * as snap from "app/common/geom/snap";
import * as ctst from "app/common/types/shape-tree";
import * as ctl from "app/common/types/shape/layout";
import * as uuid from "app/common/uuid";
import * as rt from "app/util/range-tree";

const snapAttrs = [":frame-id", ":x", ":y", ":width", ":height", ":hidden", ":selrect", ":grids"];

// PRIVATE FUNCTIONS

function makeInsertTreeData(shapeData: any[], axis: string): (tree: any) => any {
  return (tree: any) => {
    const t = tree || rt.makeTree();
    return shapeData.reduce(
      (acc, data) => rt.insert(acc, data["pt"][axis], data),
      t
    );
  };
}

function makeDeleteTreeData(shapeData: any[], axis: string): (tree: any) => any {
  return (tree: any) => {
    const t = tree || rt.makeTree();
    return shapeData.reduce(
      (acc, data) => rt.remove(acc, data["pt"][axis], data),
      t
    );
  };
}

function addRootFrame(pageData: any): any {
  const frameId = uuid.zero;
  return {
    ...pageData,
    [frameId]: { ...pageData[frameId], x: rt.makeTree(), y: rt.makeTree() },
  };
}

export function getGridsSnapPoints(frame: any, coord: string): any[] {
  if (ctst.rotatedFrame(frame)) return [];

  const gridSnap = ([gridType, position]: [string, any]) => ({
    type: ":layout",
    id: frame.id,
    grid: gridType,
    pt: position,
  });

  return Object.entries(frame.grids || {})
    .flatMap(([gridType, grid]: [string, any]) =>
      gg.gridSnapPoints(frame, grid, coord).map((pt: any) => [gridType, pt])
    )
    .map(gridSnap);
}

function addFrame(objects: any, pageData: any, frame: any): any {
  const frameId = frame.id;
  const parentId = frame["parent-id"];

  const frameData = frame.blocked
    ? []
    : snap.shapeToSnapPoints(frame).map((pt: any) => ({
        type: ":shape",
        id: frameId,
        pt,
      }));

  const gridXData = getGridsSnapPoints(frame, ":x");
  const gridYData = getGridsSnapPoints(frame, ":y");

  let result = pageData;

  if (!ctl.anyLayoutDescent(objects, frame) && !frame.hidden && !cfh.hiddenParent(objects, frameId)) {
    result = {
      ...result,
      [uuid.zero]: {
        ...result[uuid.zero],
        ["objects-data"]: { ...result[uuid.zero]?.["objects-data"], [frameId]: frameData },
      },
    };
    result = d.updateIn(result, [parentId, ":x"], makeInsertTreeData(frameData, ":x"));
    result = d.updateIn(result, [parentId, ":y"], makeInsertTreeData(frameData, ":y"));

    result = {
      ...result,
      [frameId]: {
        ...result[frameId],
        ["objects-data"]: { ...result[frameId]?.["objects-data"], [frameId]: d.concatVec(frameData, gridXData, gridYData) },
      },
    };
    result = d.updateIn(result, [frameId, ":x"], (v: any) => v || rt.makeTree());
    result = d.updateIn(result, [frameId, ":y"], (v: any) => v || rt.makeTree());
    result = d.updateIn(result, [frameId, ":x"], makeInsertTreeData(d.concatVec(frameData, gridXData), ":x"));
    result = d.updateIn(result, [frameId, ":y"], makeInsertTreeData(d.concatVec(frameData, gridYData), ":y"));
  }

  return result;
}

function addShape(objects: any, pageData: any, shape: any): any {
  const frameId = shape["frame-id"];
  const snapPoints = shape.blocked ? [] : snap.shapeToSnapPoints(shape);
  const shapeData = snapPoints.map((pt: any) => ({
    type: ":shape",
    id: shape.id,
    pt,
  }));

  if (ctl.anyLayoutDescent(objects, shape) || shape.hidden || cfh.hiddenParent(objects, shape.id)) {
    return pageData;
  }

  return d.updateIn(
    {
      ...pageData,
      [frameId]: {
        ...pageData[frameId],
        ["objects-data"]: { ...pageData[frameId]?.["objects-data"], [shape.id]: shapeData },
      },
    },
    [frameId, ":x"],
    makeInsertTreeData(shapeData, ":x")
  ).pipe(
    d.updateIn([frameId, ":y"], makeInsertTreeData(shapeData, ":y"))
  );
}

function addGuide(objects: any, pageData: any, guide: any): any {
  const frame = objects[guide["frame-id"]];
  const guideData = snap.guideToSnapPoints(guide, frame).map((pt: any) => ({
    type: ":guide",
    id: guide.id,
    axis: guide.axis,
    "frame-id": guide["frame-id"],
    pt,
  }));

  const frameId = guide["frame-id"];
  if (frameId) {
    if (frame.hidden || cfh.hiddenParent(objects, frameId)) return pageData;
    return d.updateIn(
      {
        ...pageData,
        [frameId]: {
          ...pageData[frameId],
          ["objects-data"]: { ...pageData[frameId]?.["objects-data"], [guide.id]: guideData },
        },
      },
      [frameId, guide.axis],
      makeInsertTreeData(guideData, guide.axis)
    );
  }

  return {
    ...pageData,
    ["guides"]: {
      ...pageData["guides"],
      ["objects-data"]: { ...pageData["guides"]?.["objects-data"], [guide.id]: guideData },
    },
  }.pipe(
    d.updateIn(["guides", guide.axis], makeInsertTreeData(guideData, guide.axis))
  );
}

function removeFrame(pageData: any, frame: any): any {
  const frameId = frame.id;
  const rootData = pageData[uuid.zero]?.["objects-data"]?.[frameId];
  return d.dissocIn(
    d.updateIn(
      d.updateIn(
        {
          ...pageData,
          [uuid.zero]: {
            ...pageData[uuid.zero],
            ["objects-data"]: { ...pageData[uuid.zero]?.["objects-data"] },
          },
        },
        [uuid.zero, ":x"],
        makeDeleteTreeData(rootData, ":x")
      ).pipe(
        d.updateIn([uuid.zero, ":y"], makeDeleteTreeData(rootData, ":y"))
      ),
      [frameId]
    ),
    [uuid.zero, "objects-data", frameId]
  );
}

function removeShape(pageData: any, shape: any): any {
  const frameId = shape["frame-id"];
  const shapeData = pageData[frameId]?.["objects-data"]?.[shape.id];
  return d.updateIn(
    d.updateIn(
      {
        ...pageData,
        [frameId]: {
          ...pageData[frameId],
          ["objects-data"]: { ...pageData[frameId]?.["objects-data"] },
        },
      },
      [frameId, ":x"],
      makeDeleteTreeData(shapeData, ":x")
    ).pipe(
      d.updateIn([frameId, ":y"], makeDeleteTreeData(shapeData, ":y"))
    ),
    [frameId, "objects-data", shape.id]
  );
}

function removeGuide(pageData: any, guide: any): any {
  const frameId = guide["frame-id"];
  if (frameId) {
    const guideData = pageData[frameId]?.["objects-data"]?.[guide.id];
    return d.updateIn(
      d.updateIn(
        {
          ...pageData,
          [frameId]: {
            ...pageData[frameId],
            ["objects-data"]: { ...pageData[frameId]?.["objects-data"] },
          },
        },
        [frameId, guide.axis],
        makeDeleteTreeData(guideData, guide.axis)
      ),
      [frameId, "objects-data", guide.id]
    );
  }

  const guideData = pageData["guides"]?.["objects-data"]?.[guide.id];
  return d.updateIn(
    d.updateIn(
      {
        ...pageData,
        ["guides"]: {
          ...pageData["guides"],
          ["objects-data"]: { ...pageData["guides"]?.["objects-data"] },
        },
      },
      ["guides", guide.axis],
      makeDeleteTreeData(guideData, guide.axis)
    ),
    ["guides", "objects-data", guide.id]
  );
}

function updateFrame(objects: any, pageData: any, [_oldFrame, newFrame]: [any, any]): any {
  const frameId = newFrame.id;
  const rootData = pageData[uuid.zero]?.["objects-data"]?.[frameId];
  const frameData = pageData[frameId]?.["objects-data"]?.[frameId];

  let result = pageData;
  result = d.updateIn(result, [uuid.zero, ":x"], makeDeleteTreeData(rootData, ":x"));
  result = d.updateIn(result, [uuid.zero, ":y"], makeDeleteTreeData(rootData, ":y"));
  result = d.updateIn(result, [frameId, ":x"], makeDeleteTreeData(frameData, ":x"));
  result = d.updateIn(result, [frameId, ":y"], makeDeleteTreeData(frameData, ":y"));
  result = addFrame(objects, result, newFrame);
  return result;
}

function updateShape(objects: any, pageData: any, [oldShape, newShape]: [any, any]): any {
  return addShape(objects, removeShape(pageData, oldShape), newShape);
}

function updateGuide(objects: any, pageData: any, [oldGuide, newGuide]: [any, any]): any {
  return addGuide(objects, removeGuide(pageData, oldGuide), newGuide);
}

// PUBLIC API

export function makeSnapData(): any {
  return {};
}

export function addPage(snapData: any, page: { id: any; objects: any; guides: any }): any {
  const frames = ctst.getFrames(page.objects);
  const shapes = Object.values(page.objects).filter((o: any) => !cfh.frameShape(o));
  const guides = Object.values(page.guides || {});

  const pageData = [{}]
    .map(addRootFrame)
    .reduce((acc, pd) => frames.reduce((a, f) => addFrame(page.objects, a, f), acc))
    .reduce((acc, s) => shapes.reduce((a, sh) => addShape(page.objects, a, sh), acc))
    .reduce((acc, g) => guides.reduce((a, gu) => addGuide(page.objects, a, gu), acc));

  return { ...snapData, [page.id]: pageData };
}

export function updatePage(snapData: any, oldPage: any, page: any): any {
  if (snapData[page.id]) {
    return {
      ...snapData,
      [page.id]: ((pageData: any) => {
        const { objects } = page;
        const {
          "change-frame-shapes": changeFrameShapes,
          "change-frame-guides": changeFrameGuides,
          "removed-frames": removedFrames,
          "removed-shapes": removedShapes,
          "removed-guides": removedGuides,
          "updated-frames": updatedFrames,
          "updated-shapes": updatedShapes,
          "updated-guides": updatedGuides,
          "new-frames": newFrames,
          "new-shapes": newShapes,
          "new-guides": newGuides,
        } = diff.calculatePageDiff(oldPage, page, snapAttrs);

        let result = pageData;
        result = changeFrameShapes.reduce((acc: any, item: any) => updateShape(objects, acc, item), result);
        result = removedFrames.reduce((acc: any, f: any) => removeFrame(acc, f), result);
        result = removedShapes.reduce((acc: any, s: any) => removeShape(acc, s), result);
        result = updatedFrames.reduce((acc: any, item: any) => updateFrame(objects, acc, item), result);
        result = updatedShapes.reduce((acc: any, item: any) => updateShape(objects, acc, item), result);
        result = newFrames.reduce((acc: any, f: any) => addFrame(objects, acc, f), result);
        result = newShapes.reduce((acc: any, s: any) => addShape(objects, acc, s), result);
        result = removedGuides.reduce((acc: any, g: any) => removeGuide(acc, g), result);
        result = changeFrameGuides.reduce((acc: any, item: any) => updateGuide(objects, acc, item), result);
        result = updatedGuides.reduce((acc: any, item: any) => updateGuide(objects, acc, item), result);
        result = newGuides.reduce((acc: any, g: any) => addGuide(objects, acc, g), result);
        return result;
      })(snapData[page.id]),
    };
  }

  return addPage(snapData, page);
}

export function query(
  snapData: any,
  pageId: any,
  frameId: any,
  axis: string,
  [from, to]: [number, number]
): any[] {
  const pageFrameData = snapData[pageId]?.[frameId]?.[axis];
  const guidesData = snapData[pageId]?.["guides"]?.[axis];

  return d.concatVec(
    rt.rangeQuery(pageFrameData, from, to),
    rt.rangeQuery(guidesData, from, to)
  );
}
