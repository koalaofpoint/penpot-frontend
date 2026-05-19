// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

/**
 * Decodes JSON data with keywordized keys (ClojureScript compatibility).
 * In TypeScript, this simply parses JSON as an unknown object.
 */
export function decode(data: string): unknown {
  return JSON.parse(data);
}

/**
 * Decodes JSON data and casts to a specific type.
 */
export function decodeAs<T>(data: string): T {
  return JSON.parse(data) as T;
}

/**
 * Encodes data to JSON string.
 */
export function encode(data: unknown): string {
  return JSON.stringify(data);
}
