// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from '../common/data/index.js';
import * as dm from '../common/data/macros.js';
import * as cpf from '../common/files/focus.js';
import * as cfh from '../common/files/helpers.js';
import * as gpt from '../common/geom/point.js';
import * as grc from '../common/geom/rect.js';
import * as gsh from '../common/geom/shapes/index.js';
import * as sp from '../common/geom/snap/index.js';
import * as mth from '../common/math/index.js';
import { zero } from '../common/uuid/index.js';
import * as refs from './refs.js';
import * as mw from './worker/index.js';
import * as rt from '../util/range-tree/index.js';
import { Observable } from '../vendor/beicon/v2/index.js';
import { union } from '../vendor/clojure.set/index.js';

const SNAP_ACCURACY = 10;
const SNAP_PATH_ACCURACY = 10;
const SNAP_DISTANCE_ACCURACY = 20;

const removeFromSnapPoints = (removeSnap: any) => {
  return (queryResult: any) => {
    return queryResult
      .map(([value, data]: [any, any[]]) => [value, data.filter(removeSnap)])
      .filter(([_, data]: [any, any[]]) => data.length > 0);
  };
};

export const makeRemoveSnap = (
  layout: any,
  filterShapes: Set<string>,
  objects: any,
  focus: any
) => {
  return ({ type, id, frameId }: any) => {
    if (type === 'layout') {
      return !layout?.displayGuides ||
             !layout?.snapGuides ||
             (focus.size > 0 && !focus.has(id));
    }

    if (type === 'guide') {
      return !layout?.rulers ||
             !layout?.snapRulerGuides ||
             (focus.size > 0 && !focus.has(frameId));
    }

    return filterShapes.has(id) ||
           !layout?.dynamicAlignment ||
           (focus.size > 0 && !cpf.isInFocus(objects, focus, id));
  };
};

const calculateDistance = (queryResult: any, point: any, coord: 'x' | 'y') => {
  return queryResult
    .map(([value, _]: [number, any]) => [
      Math.abs(value - point[coord]),
      [point[coord], value]
    ]);
};

const getMinDistanceSnap = (points: any[], coord: 'x' | 'y') => {
  return (queryResult: any) => {
    const distances = points
      .flatMap(point => calculateDistance(queryResult, point, coord))
      .reduce((min, current) => min[0] < current[0] ? min : current);
    return distances[1];
  };
};

export const snapFrameId = (shapes: any[]) => {
  const frames = new Set(shapes.map(shape => shape.frameId));

  if (frames.size === 0) {
    return shapes[0]?.frameId;
  }

  if (!frames.has(zero)) {
    return shapes[0].frameId;
  }

  return zero;
};

export const getSnapPoints = (
  pageId: string,
  frameId: string,
  removeSnap: any,
  zoom: number,
  point: any,
  coord: 'x' | 'y'
) => {
  const value = point[coord];
  const vbox = refs.vbox.deref();
  const ranges = [[value - (0.5 / zoom), value + (0.5 / zoom)]];

  return mw.ask({
    cmd: 'index/query-snap',
    pageId,
    frameId,
    axis: coord,
    bounds: vbox,
    ranges
  })
    .pipe(
      take(1),
      map(removeFromSnapPoints(removeSnap))
    );
};

const searchSnap = (
  pageId: string,
  frameId: string,
  points: any[],
  coord: 'x' | 'y',
  removeSnap: any,
  zoom: number
) => {
  const snapAccuracy = SNAP_ACCURACY / zoom;
  const ranges = points
    .map(point => point[coord])
    .map(coordValue => [coordValue - snapAccuracy, coordValue + snapAccuracy]);
  const vbox = refs.vbox.deref();

  return mw.ask({
    cmd: 'index/query-snap',
    pageId,
    frameId,
    axis: coord,
    bounds: vbox,
    ranges
  })
    .pipe(
      take(1),
      map(removeFromSnapPoints(removeSnap)),
      map(getMinDistanceSnap(points, coord))
    );
};

export const snapToVector = ([[fromX, toX], [fromY, toY]]: any) => {
  if (!fromX && !toX && !fromY && !toY) {
    return undefined;
  }

  const from = gpt.point(fromX || 0, fromY || 0);
  const to = gpt.point(toX || 0, toY || 0);
  return gpt.toVec(from, to);
};

const closestSnap = (
  pageId: string,
  frameId: string,
  points: any[],
  removeSnap: any,
  zoom: number
) => {
  const snapX = searchSnap(pageId, frameId, points, 'x', removeSnap, zoom);
  const snapY = searchSnap(pageId, frameId, points, 'y', removeSnap, zoom);

  return combineLatest([snapX, snapY])
    .pipe(map(snapToVector));
};

const srDistance = (coord: 'x' | 'y', sr1: any, sr2: any) => {
  const c1 = coord === 'x' ? 'x1' : 'y1';
  const c2 = coord === 'x' ? 'x2' : 'y2';
  return sr2[c1] - sr2[c2];
};

const overlap = (coord: 'x' | 'y', sr1: any, sr2: any) => {
  const c1 = coord === 'x' ? 'y1' : 'x1';
  const c2 = coord === 'x' ? 'y2' : 'x2';
  const s1c1 = sr1[c1];
  const s1c2 = sr1[c2];
  const s2c1 = sr2[c1];
  const s2c2 = sr2[c2];

  return (s2c1 >= s1c1 && s2c1 <= s1c2) ||
         (s2c2 >= s1c1 && s2c2 <= s1c2) ||
         (s1c1 >= s2c1 && s1c1 <= s2c2) ||
         (s1c2 >= s2c1 && s1c2 <= s2c2);
};

const calculateSnap = (
  coord: 'x' | 'y',
  selrect: any,
  shapesLt: any[],
  shapesGt: any[],
  zoom: number
) => {
  const snapDistanceAccuracy = SNAP_DISTANCE_ACCURACY / zoom;

  const distLt = (other: any) => srDistance(coord, other.selrect, selrect);
  const distGt = (other: any) => srDistance(coord, selrect, other.selrect);

  const innerDistance = (selrects: any[]) => {
    const sorted = selrects.sort((a, b) => a[coord] - b[coord]);
    const result: number[] = [];

    for (let i = 0; i < sorted.length - 1; i++) {
      const current = sorted[i];
      const next = sorted[i + 1];

      if (overlap(coord, current, next)) {
        const distance = srDistance(coord, current, next);
        result.push(distance);
      }
    }

    return result;
  };

  const ltCand = innerDistance(shapesLt.map(shape => shape.selrect));
  const gtCand = innerDistance(shapesGt.map(shape => shape.selrect));
  const ltDist = new Set(shapesLt.map(distLt));
  const gtDist = new Set(shapesGt.map(distGt));

  const getSideSnaps = (candidates: number[], distances: Set<number>) => {
    const rangeTree = rt.makeTree();
    const populatedTree = candidates.reduce((tree, value) =>
      rt.insert(tree, value, value), rangeTree
    );

    return Array.from(distances).flatMap(cd => {
      const matches = rt.rangeQuery(
        populatedTree,
        cd - snapDistanceAccuracy,
        cd + snapDistanceAccuracy
      );
      return matches.map(([value, _]) => value - cd);
    });
  };

  const getMiddleSnaps = (ltDist: Set<number>, gtDist: Set<number>) => {
    const rangeTree = rt.makeTree();
    const populatedTree = Array.from(ltDist).reduce((tree, value) =>
      rt.insert(tree, value, value), rangeTree
    );

    return Array.from(gtDist).flatMap(cd => {
      const matches = rt.rangeQuery(
        rangeTree,
        cd - snapDistanceAccuracy * 2,
        cd + snapDistanceAccuracy * 2
      );
      return matches.map(([value, _]) => (cd - value) / 2);
    });
  };

  const ltSnap = getSideSnaps(ltCand, ltDist);
  const gtSnap = getSideSnaps(Array.from(gtDist), gtCand);
  const mdSnap = getMiddleSnaps(ltDist, gtDist);

  const snapList = [...ltSnap, ...gtSnap, ...mdSnap];
  const minSnap = Math.min(...snapList);

  return Number.isFinite(minSnap) ? [0, minSnap] : null;
};

export const searchSnapDistance = (
  selrect: any,
  coord: 'x' | 'y',
  shapesLt: Observable<any[]>,
  shapesGt: Observable<any[]>,
  zoom: number
) => {
  return combineLatest([shapesLt, shapesGt]).pipe(
    map(([shapesLt, shapesGt]) =>
      calculateSnap(coord, selrect, shapesLt, shapesGt, zoom)
    )
  );
};

export const selectShapesArea = (
  pageId: string,
  frameId: string,
  selected: Set<string>,
  objects: any,
  area: any
) => {
  return mw.ask({
    cmd: 'index/query-selection',
    pageId,
    frameId,
    includeFrames: true,
    rect: area
  })
    .pipe(
      map(result => cfh.cleanLoops(objects, result)),
      map(result => set.difference(result, selected)),
      map(result => Array.from(result).map(id => objects[id]))
    );
};

export const closestDistanceSnap = (
  pageId: string,
  shapes: any[],
  objects: any,
  zoom: number,
  movev: any
) => {
  const frameId = snapFrameId(shapes);
  const frame = objects[frameId];
  const selrect = gsh.shapesToRect(
    shapes.map(shape => gsh.move(shape, movev))
  );

  return Observable.of([frame, selrect]).pipe(
    mergeMap(([frame, selrect]) => {
      const vbox = refs.vbox.deref();
      const frameId = shapes[0].frameId;
      const frameSr = !cfh.isRoot(frame) ? frame.selrect : undefined;
      const bounds = grc.clipRect(frameSr, vbox) || vbox;
      const selected = new Set(shapes.map(shape => shape.id));
      const areas = gsh.getAreas(bounds, selrect);
      const snapX = searchSnapDistance(selrect, 'x', areas.left, areas.right, zoom);
      const snapY = searchSnapDistance(selrect, 'y', areas.top, areas.bottom, zoom);

      return combineLatest([snapX, snapY]).pipe(
        map(snapToVector)
      );
    })
  );
};

export const closestSnapPoint = (
  pageId: string,
  shapes: any[],
  objects: any,
  layout: any,
  zoom: number,
  focus: Set<string>,
  point: any
) => {
  const frameId = snapFrameId(shapes);
  const filterShapes = new Set(shapes.map(shape => shape.id));
  const removeSnap = makeRemoveSnap(layout, filterShapes, objects, focus);

  return closestSnap(pageId, frameId, [point], removeSnap, zoom)
    .pipe(
      map(vector => vector || gpt.point(0, 0)),
      map(vector => gpt.add(point, vector))
    );
};

export const combineSnapsPoints = (...points: any[]) => {
  if (points.length === 0) return undefined;
  if (points.length === 1) return points[0];

  const nonNullPoints = points.filter(p => p != null);
  if (nonNullPoints.length === 0) return undefined;
  if (nonNullPoints.length === 1) return nonNullPoints[0];

  return gpt.point(
    Math.max(...nonNullPoints.map(p => Math.abs(p.x))),
    Math.max(...nonNullPoints.map(p => Math.abs(p.y)))
  );
};

export const closestSnapMove = (
  pageId: string,
  shapes: any[],
  objects: any,
  layout: any,
  zoom: number,
  focus: Set<string>,
  movev: any
) => {
  const frameId = snapFrameId(shapes);
  const filterShapes = new Set(shapes.map(shape => shape.id));
  const removeSnap = makeRemoveSnap(layout, filterShapes, objects, focus);

  const snapPoints = gsh.shapesToRect(shapes)
    .flatMap(rect => sp.rectToSnapPoints(rect))
    .map(point => gpt.add(point, movev));

  const distanceSnap = layout?.dynamicAlignment ?
    closestDistanceSnap(pageId, shapes, objects, zoom, movev) :
    Observable.empty();

  return merge(
    closestSnap(pageId, frameId, snapPoints, removeSnap, zoom),
    distanceSnap
  )
    .pipe(
      reduce(combineSnapsPoints, undefined),
      map(vector => vector || gpt.point(0, 0))
    );
};

// PATH SNAP

export const createRanges = (points: any[], selectedPoints: Set<string> = new Set()) => {
  const intoTree = (coord: 'x' | 'y') => (tree: any, point: any) => {
    return rt.insert(tree, point[coord], point);
  };

  const makeRanges = (coord: 'x' | 'y') => {
    return points
      .filter(point => !selectedPoints.has(point.id))
      .reduce(intoTree(coord), rt.makeTree());
  };

  return {
    x: makeRanges('x'),
    y: makeRanges('y')
  };
};

export const queryDeltaPoint = (ranges: any, point: any, precision: number) => {
  const queryCoord = (coord: 'x' | 'y') => {
    const pval = point[coord];
    const matches = rt.rangeQuery(ranges[coord], pval - precision, pval + precision);

    return matches.map(([value, points]) => [
      value - pval,
      points.map((p: any) => [point, p])
    ]);
  };

  return {
    x: queryCoord('x'),
    y: queryCoord('y')
  };
};

const mergeMatches = (...matches: any[]) => {
  if (matches.length === 0) return { x: null, y: null };
  if (matches.length === 1) return matches[0];

  const mergeCoord = (current: any[], other: any[]) => {
    const currentMap = new Map(current);
    const otherMap = new Map(other);
    const allKeys = new Set([...currentMap.keys(), ...otherMap.keys()]);

    return Array.from(allKeys).map(key => [
      key,
      [...(currentMap.get(key) || []), ...(otherMap.get(key) || [])]
    ]);
  };

  return matches.reduce((acc, match) => ({
    x: mergeCoord(acc.x, match.x),
    y: mergeCoord(acc.y, match.y)
  }), matches[0]);
};

const minMatch = (defaultVal: any, matches: any) => {
  const getMin = (current: any[], other: any[]) => {
    return Math.abs(current[0]) < Math.abs(other[0]) ? current : other;
  };

  const minMatchCoord = (matches: any[]) => {
    if (matches.length > 0) {
      return matches.reduce(getMin);
    }
    return defaultVal;
  };

  return {
    x: minMatchCoord(matches.x),
    y: minMatchCoord(matches.y)
  };
};

export const getSnapDeltaMatch = (points: any[], ranges: any, accuracy: number) => {
  const pointMatches = points.map(point => queryDeltaPoint(ranges, point, accuracy));
  const merged = pointMatches.reduce(mergeMatches);
  return minMatch([0, null], merged);
};

export const getSnapDelta = (points: any[], ranges: any, accuracy: number) => {
  const match = getSnapDeltaMatch(points, ranges, accuracy);
  return gpt.point(match.x[0], match.y[0]);
};

export const correctSnapPoint = ([[position, [snapPos, snapDelta]]]: any) => {
  if (snapDelta == null) {
    return position;
  }

  const dx = snapDelta.x !== 0 ? snapPos.x + snapDelta.x - position.x : 0;
  const dy = snapDelta.y !== 0 ? snapPos.y + snapDelta.y - position.y : 0;

  const correctedDx = Math.abs(dx) > SNAP_ACCURACY ? 0 : dx;
  const correctedDy = Math.abs(dy) > SNAP_ACCURACY ? 0 : dy;

  return {
    ...position,
    x: position.x + correctedDx,
    y: position.y + correctedDy
  };
};