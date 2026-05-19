// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

/**
 * Dynamic ES module import.
 * @param path - The module path to import
 * @returns Promise that resolves to the imported module
 */
export async function dynamicImport<T = any>(path: string): Promise<T> {
  // Using dynamic import syntax
  return import(/* @vite-ignore */ path);
}

/**
 * Alias for dynamicImport for consistency with original ClojureScript API.
 */
export const importModule = dynamicImport;
