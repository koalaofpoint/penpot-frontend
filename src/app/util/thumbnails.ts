// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

/**
 * Maximum recommended thumbnail size (2^11 = 2048)
 */
export const MAX_RECOMMENDED_SIZE = Math.pow(2, 11);

/**
 * Maximum absolute thumbnail size (2^14 = 16384)
 */
export const MAX_ABSOLUTE_SIZE = Math.pow(2, 14);

/**
 * Minimum thumbnail size
 */
export const MIN_SIZE = 1;

/**
 * Default max thumbnail size
 */
export const MAX_SIZE = MAX_RECOMMENDED_SIZE;

/**
 * Minimum aspect ratio
 */
export const MIN_ASPECT_RATIO = 0.5;

/**
 * Maximum aspect ratio
 */
export const MAX_ASPECT_RATIO = 2.0;

/**
 * Returns aspect ratio of a given width and height.
 */
export function getAspectRatio(width: number, height: number): number {
  return width / height;
}

/**
 * Calculate size from reference size
 */
function getSizeFrom(refSize: number, oppSize: number, clampedSize: number): number {
  return (oppSize * clampedSize) / refSize;
}

/**
 * Get height from width maintaining aspect ratio
 */
export function getHeightFromWidth(
  width: number,
  height: number,
  clampedWidth: number
): number {
  return getSizeFrom(width, height, clampedWidth);
}

/**
 * Get width from height maintaining aspect ratio
 */
export function getWidthFromHeight(
  width: number,
  height: number,
  clampedHeight: number
): number {
  return getSizeFrom(height, width, clampedHeight);
}

/**
 * Returns a proportional size given a width and height and some size constraints.
 */
export function getProportionalSize(
  width: number,
  height: number,
  minWidth = MIN_SIZE,
  maxWidth = MAX_SIZE
): number[];
export function getProportionalSize(
  width: number,
  height: number,
  minWidth: number,
  maxWidth: number,
  minHeight: number,
  maxHeight: number
): number[];
export function getProportionalSize(
  width: number,
  height: number,
  minWidth = MIN_SIZE,
  maxWidth = MAX_SIZE,
  minHeight?: number,
  maxHeight?: number
): number[] {
  const actualMinWidth = minHeight === undefined ? minWidth : minWidth;
  const actualMaxWidth = maxHeight === undefined ? maxWidth : maxWidth;
  const actualMinHeight = minHeight ?? MIN_SIZE;
  const actualMaxHeight = maxHeight ?? MAX_SIZE;

  const clampedWidth = clamp(width, actualMinWidth, actualMaxWidth);
  const clampedHeight = clamp(height, actualMinHeight, actualMaxHeight);

  if (width > height) {
    return [clampedWidth, getHeightFromWidth(width, height, clampedWidth)];
  } else {
    return [getWidthFromHeight(width, height, clampedHeight), clampedHeight];
  }
}

/**
 * Returns a recommended size given a width and height.
 */
export function getRelativeSize(width: number, height: number): number[] {
  const aspectRatio = getAspectRatio(width, height);

  if (aspectRatio < MIN_ASPECT_RATIO || aspectRatio > MAX_ASPECT_RATIO) {
    return getProportionalSize(width, height, MIN_SIZE, MAX_ABSOLUTE_SIZE);
  }

  return getProportionalSize(width, height, MIN_SIZE, MAX_RECOMMENDED_SIZE);
}

/**
 * Clamp value between min and max
 */
function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}
