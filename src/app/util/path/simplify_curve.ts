// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

/**
 * Point type for path
 */
export type Point = [number, number];

/**
 * Simplifies a drawing done with pen tool
 */
export function simplify(points: Point[]): Point[];
export function simplify(points: Point[], tolerance: number): Point[];
export function simplify(points: Point | Point[], tolerance?: number): Point[] {
  const actualPoints = Array.isArray(points) ? points : [points];
  const actualTolerance = tolerance ?? 0.1;

  // TODO: Implement with path-impl-simplify
  // return implSimplify.simplify(actualPoints, actualTolerance, true);
  return [...actualPoints];
}
