// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper location
// import { create, setup, nearest } from './kdtree-impl';

/**
 * Point type for kd-tree
 */
export type Point = number[];

/**
 * Create an empty or initialized kd-tree instance.
 */
export function create(): unknown;
export function create(points: Point[]): unknown;
export function create(points?: Point[]): unknown {
  // TODO: Implement with kdtree-impl
  // if (points) {
  //   return impl.create(cljToJs(points));
  // }
  // return impl.create();
  return {};
}

/**
 * Generate new kd-tree instance with provided generation parameters
 * or just return a previously created from internal LRU cache.
 */
export function setup(t: unknown, w: number, h: number, ws: number, hs: number): unknown {
  // TODO: Implement with kdtree-impl
  // return impl.setup(t, w, h, ws, hs);
  return {};
}

/**
 * Search nearest points to provided point
 * and return `n` maximum results.
 */
export function nearest(t: unknown, p: Point | number[], n?: number): Point[] {
  const numResults = n ?? 10;

  // TODO: Implement with kdtree-impl
  // const point = Array.isArray(p) ? p : intoArray(p);
  // const result = impl.nearest(t, point, numResults);
  // return result.map(jsToClj);
  return [];
}
