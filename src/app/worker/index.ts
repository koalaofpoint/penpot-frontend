// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from "app/common/data";
import * as dm from "app/common/data/macros";
import * as ch from "app/common/files/changes";
import * as gmt from "app/common/geom/matrix";
import * as grc from "app/common/geom/rect";
import * as gsh from "app/common/geom/shapes";
import * as log from "app/common/logging";
import * as ct from "app/common/time";
import * as impl from "app/worker/impl";
import * as selection from "app/worker/selection";
import * as snap from "app/worker/snap";
import { atom } from "app/vendor/okulary";

log.setLevel("info");

export const state = atom({ "pages-index": {} });

impl.handler[":index/initialize"] = ({ page }: { page: any }) => {
  const tpoint = ct.tpointMs();
  try {
    state.swap((s: any) => ({
      ...s,
      ["pages-index"]: { ...s["pages-index"], [page.id]: page },
    }));
    state.swap((s: any) => ({
      ...s,
      ["::selection"]: selection.addPage(s["::selection"] || {}, page),
    }));
    state.swap((s: any) => ({
      ...s,
      ["::snap"]: snap.addPage(s["::snap"] || {}, page),
    }));
  } finally {
    const elapsed = tpoint();
    log.dbg("hint", "page indexed", "id", page.id, "elapsed", elapsed, "sync?", true);
  }
  return null;
};

impl.handler[":index/update"] = ({ pageId, changes }: { pageId: any; changes: any }) => {
  const tpoint = ct.tpointMs();
  try {
    const oldPage = dm.getIn(state.deref(), ["pages-index", pageId]);

    state.swap((s: any) => ch.processChanges(s, changes, false));
    const newPage = dm.getIn(state.deref(), ["pages-index", pageId]);

    const textRects = dm.getIn(state.deref(), ["::text-rect", pageId]);

    let updatedPage = newPage;
    if (textRects) {
      updatedPage = Object.entries(textRects).reduce(
        (page: any, [id, data]: [string, any]) =>
          d.updateIn(page, ["objects", id], (obj: any) => d.patchObject(obj, data)),
        newPage
      );
    }

    state.swap((s: any) => ({
      ...s,
      ["::snap"]: snap.updatePage(s["::snap"] || {}, oldPage, updatedPage),
    }));
    state.swap((s: any) => ({
      ...s,
      ["::selection"]: selection.updatePage(s["::selection"] || {}, oldPage, updatedPage),
    }));
  } catch (cause) {
    log.error("hint", "error updating page index", "id", pageId, "cause", cause);
  } finally {
    const elapsed = tpoint();
    log.dbg("hint", "page index updated", "id", pageId, "elapsed", elapsed, "sync?", true);
  }
  return null;
};

impl.handler[":index/update-text-rect"] = ({ pageId, shapeId, dimensions }: { pageId: any; shapeId: any; dimensions: any }) => {
  const page = dm.getIn(state.deref(), ["pages-index", pageId]);
  const objects = page?.objects;
  const shape = objects?.[shapeId];
  const center = gsh.shapeCenter(shape);
  const transform = shape?.transform || gmt.matrix();
  const rect = grc.rectToPoints(grc.makeRect(dimensions));
  const points = gsh.transformPoints(rect, center, transform);
  const selrect = gsh.calculateSelrect(points, gsh.pointsToCenter(points));

  const data = {
    "position-data": null,
    points,
    selrect,
  };

  const updatedShape = d.patchObject(shape, data);
  const updatedObjects = { ...objects, [shapeId]: updatedShape };

  state.swap((s: any) => ({
    ...s,
    ["::text-rect"]: {
      ...s["::text-rect"],
      [pageId]: { ...s["::text-rect"]?.[pageId], [shapeId]: data },
    },
  }));
  state.swap((s: any) => ({
    ...s,
    ["::selection"]: s["::selection"]
      ? selection.updateIndexSingle(s["::selection"], pageId, updatedObjects, shape)
      : s["::selection"],
  }));
  return null;
};

// FIXME: schema

impl.handler[":index/query-snap"] = ({ pageId, frameId, axis, ranges, bounds }: { pageId: any; frameId: any; axis: any; ranges: any[]; bounds: any }) => {
  const index = state.deref()["::snap"];
  if (!index) return [];

  const matchBounds = ([, data]: [any, any]) =>
    data.some((item: any) => {
      if (item.type === ":guide" || item.type === ":layout") return true;
      return grc.containsPoint(bounds, item.pt);
    });

  const xform = (data: any[]) =>
    data
      .flatMap((range) => snap.query(index, pageId, frameId, axis, range))
      .filter((v, i, a) => a.indexOf(v) === i)
      .filter(matchBounds);

  return xform(ranges);
};

// FIXME: schema

impl.handler[":index/query-selection"] = (message: any) => {
  const index = state.deref()["::selection"];
  if (!index) return [];
  return selection.query(index, message);
};
