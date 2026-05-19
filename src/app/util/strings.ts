// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

const TRAIL_ZEROS_REGEX_1 = /\.0+$/;
const TRAIL_ZEROS_REGEX_2 = /(\.\d*[^0])0+$/;

/**
 * Formats a number with predetermined precision and then removes the trailing 0.
 *
 * Examples:
 *   12.0123, 0 => 12
 *   12.0123, 1 => 12
 *   12.0123, 2 => 12.01
 *
 * @param num - The number to format
 * @param precision - The precision to use
 * @returns Formatted number string
 */
export function formatPrecision(num: number | string, precision: number): string {
  try {
    if (typeof num === 'number') {
      let numStr = num.toFixed(precision);

      // Remove all trailing zeros after the comma 100.00000
      numStr = numStr.replace(TRAIL_ZEROS_REGEX_1, '');

      // Remove trailing zeros after a decimal number: 0.001|00|
      const match = numStr.match(TRAIL_ZEROS_REGEX_2);
      if (match) {
        numStr = numStr.replace(match[0], match[1]);
      }

      return numStr;
    }
    return String(num);
  } catch (_err) {
    return String(num);
  }
}

/**
 * Checks if a name matches a search term.
 *
 * @param name - The name to check
 * @param searchTerm - The search term to match against
 * @returns True if the search term is empty or if the name contains it (case-insensitive)
 */
export function matchesSearch(name: string, searchTerm: string): boolean {
  if (searchTerm === '') {
    return true;
  }
  const st = searchTerm.trim().toLowerCase();
  const nm = name.trim().toLowerCase();
  return nm.includes(st);
}
