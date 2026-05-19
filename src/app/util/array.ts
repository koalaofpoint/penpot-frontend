// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

/**
 * A collection of helpers for work with javascript arrays.
 */

/**
 * A conj like function for js arrays.
 * Returns a new array with the value appended.
 */
export function conj<T>(array: T[], value: T): T[] {
  return [...array, value];
}

/**
 * A conj! like function for js arrays.
 * Mutates the array by pushing values and returns the array.
 */
export function conj!<T>(array: T[], value: T): T[];
export function conj!<T>(array: T[], v1: T, v2: T): T[];
export function conj!<T>(array: T[], v1: T, v2: T, v3: T): T[];
export function conj!<T>(array: T[], v1: T, v2: T, v3: T, v4: T): T[];
export function conj!<T>(array: T[], v1: T, v2: T, v3: T, v4: T, v5: T): T[];
export function conj!<T>(array: T[], v1: T, v2: T, v3: T, v4: T, v5: T, v6: T): T[];
export function conj!<T>(array: T[], ...values: T[]): T[] {
  array.push(...values);
  return array;
}

/**
 * If `o` is an array, returns it as-is, if not, wrap into an array.
 */
export function normalizeToArray<T>(o: T | T[]): T[] {
  if (Array.isArray(o)) {
    return o;
  }
  return [o];
}

/**
 * Returns a new array with all null/undefined values removed.
 */
export function withoutNils<T>(array: T[]): NonNullable<T>[] {
  return array.filter((v): v is NonNullable<T> => v != null);
}

/**
 * A specific filter for js arrays.
 */
export function filter<T>(pred: (value: T, index: number, array: T[]) => boolean, array: T[]): T[] {
  return array.filter(pred);
}

/**
 * Maps over an array and returns a new array with the results.
 */
export function map<T, U>(f: (value: T, index: number, array: T[]) => U, array: T[]): U[] {
  return array.map(f);
}

/**
 * Reduces an array to a single value.
 */
export function reduce<T, U>(f: (acc: U, value: T, index: number, array: T[]) => U, init: U, array: T[]): U {
  return array.reduce(f, init);
}

/**
 * Finds the index of the first element that satisfies the predicate.
 */
export function findIndex<T>(f: (value: T, index: number, obj: T[]) => boolean, array: T[]): number {
  return array.findIndex(f);
}

/**
 * Finds the first element that satisfies the predicate.
 */
export function find<T>(f: (value: T, index: number, obj: T[]) => boolean, array: T[]): T | undefined {
  return array.find(f);
}

/**
 * Sorts the array in place using the provided compare function.
 */
export function sort<T>(array: T[], compareFn?: (a: T, b: T) => number): T[] {
  array.sort(compareFn);
  return array;
}
