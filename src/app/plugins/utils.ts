// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { lookupFile, lookupPage, lookupFileData, getIn, getPluginLibraryColor, getPluginLibraryTypography, getIn as dmGetIn } from '../../main/data/helpers';
// import { jsonToClj, withoutNils } from '../../common/json';
// import { decoder, explainer } from '../../common/schema';
// import { getInstanceRoot } from '../../common/types/container';
// import { resolveComponent } from '../../common/types/file';
// import { getTheme, getSet, getToken } from '../../common/types/tokens-lib';
// import { getState } from '../../main/store';
// import { get } from '../../util/object';

// TODO: Import from config
// const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

/**
 * Get data from proxy internal storage
 */
export function getData(self: Record<string, unknown>, attr: string): unknown {
  const internalData = self[Symbol('_data')] as Record<string, unknown> | undefined;
  return internalData?.[attr];
}

/**
 * Get data from proxy and apply transform function
 */
export function getDataWithTransform<T>(
  self: Record<string, unknown>,
  attr: string,
  transformFn: (value: unknown) => T
): T | undefined {
  const value = getData(self, attr);
  return transformFn(value);
}

/**
 * Create a getter function for proxy data
 */
export function getDataFn(attr: string): (self: Record<string, unknown>) => unknown {
  return (self: Record<string, unknown>) => getData(self, attr);
}

/**
 * Create a getter function with transform for proxy data
 */
export function getDataFnWithTransform<T>(
  attr: string,
  transformFn: (value: unknown) => T
): (self: Record<string, unknown>) => T | undefined {
  return (self: Record<string, unknown>) => getDataWithTransform(self, attr, transformFn);
}

/**
 * Get state value for a shape attribute
 */
export function getState(
  self: Record<string, unknown>,
  attr: string
): unknown {
  // TODO: Get id and page-id from self
  const id = getData(self, 'id') as string | undefined;
  const pageId = (getData(self, 'page-id') as string | undefined)
    ?? getCurrentPageId();

  // TODO: Get from page objects
  // const objects = lookupPageObjects(getState(), pageId);
  // return getIn(objects, ['objects', id, attr]);
  return undefined;
}

/**
 * Get state value with transform function
 */
export function getStateWithTransform<T>(
  self: Record<string, unknown>,
  attr: string,
  mapFn: (value: unknown) => T
): T | undefined {
  const value = getState(self, attr);
  return mapFn(value);
}

/**
 * Check if value is a valid UUID
 */
export function isUUID(value: unknown): value is string {
  return typeof value === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}

/**
 * Result promise type - atom+promise pair
 */
export interface ResultP<T = unknown> {
  atom: { value: T | null };
  promise: Promise<T>;
}

/**
 * Creates a pair of atom+promise. The promise resolves when the atom gets a value.
 */
export function resultP<T = unknown>(): ResultP<T> {
  let resolveFn: ((value: T) => void) | null = null;

  const atom: { value: T | null } = { value: null };

  const promise = new Promise<T>((resolve) => {
    resolveFn = resolve;
  });

  // TODO: Implement atom watcher for promise resolution
  // add-watch(atom, ::watcher, (key, ref, oldVal, newVal) => {
  //   if (newVal !== null) {
  //     remove-watch(atom, ::watcher);
  //     resolveFn(newVal);
  //   }
  // });

  return { atom, promise };
}

/**
 * Display not valid error to console
 */
export function displayNotValid(code: string | number, value?: unknown): null {
  if (value !== undefined && value !== null) {
    console.error(`[PENPOT PLUGIN] Value not valid: ${value}. Code: ${code}`);
  } else {
    console.error(`[PENPOT PLUGIN] Value not valid. Code: ${code}`);
  }
  return null;
}

/**
 * Reject not valid error with promise rejection
 */
export function rejectNotValid(
  reject: (reason?: unknown) => void,
  code: string | number,
  value?: unknown
): void {
  const msg = value !== undefined
    ? `[PENPOT PLUGIN] Value not valid: ${value}. Code: ${code}`
    : `[PENPOT PLUGIN] Value not valid. Code: ${code}`;

  console.error(msg);
  reject(msg);
}

/**
 * Validate data against schema
 */
export function coerce<T = unknown>(
  attrs: unknown,
  // TODO: Schema type
  schema: unknown,
  code: string | number,
  hint: string
): T | null {
  // TODO: Implement schema validation
  // const decoder = createDecoder(schema, jsonTransformer);
  // const explainer = createExplainer(schema);
  // const decoded = jsonToClj(attrs);
  // const result = decoder(decoded);
  //
  // const explain = explainer(result);
  // if (explain) {
  //   displayNotValid(code, `${hint} ${humanizeExplain(explain)}`);
  //   return null;
  // }
  //
  // return result as T;

  return null;
}

/**
 * Get mixed value from array of values
 * Returns single value if all same, or "mixed" string
 */
export function mixedValue(values: unknown[]): unknown {
  const unique = new Set(values);
  return unique.size === 1 ? values[0] : 'mixed';
}

/**
 * Handle error from plugin proxy methods
 */
export function handleError(cause: Error): void {
  displayNotValid(cause.message, null);

  // TODO: Log schema explanation if available
  // const explain = cause.explain;
  // if (explain) {
  //   console.log(humanizeExplain(explain));
  // } else {
  //   console.log(cause.cause);
  // }

  console.log(cause.stack);
}

/**
 * Get current page ID from state
 */
function getCurrentPageId(): string {
  // TODO: Get from state
  // return getState().current-page-id;
  return '';
}

/**
 * Get proxy internal value by key
 */
export function getProxyValue<T = unknown>(proxy: unknown, key: string): T | undefined {
  if (typeof proxy === 'object' && proxy !== null) {
    const symbol = Symbol(key);
    return (proxy as Record<symbol, unknown>)[symbol] as T | undefined;
  }
  return undefined;
}

/**
 * Convert proxy to file object
 */
export function proxyToFile(proxy: Record<string, unknown>): unknown {
  const id = getProxyValue<string>(proxy, '$id');
  if (id) {
    // TODO: locate-file
    // return locate-file(id);
  }
  return undefined;
}

/**
 * Convert proxy to page object
 */
export function proxyToPage(proxy: Record<string, unknown>): unknown {
  const fileId = getProxyValue<string>(proxy, '$file');
  const id = getProxyValue<string>(proxy, '$id');
  if (fileId && id) {
    // TODO: locate-page
    // return locate-page(fileId, id);
  }
  return undefined;
}

/**
 * Convert proxy to shape object
 */
export function proxyToShape(proxy: Record<string, unknown>): unknown {
  const fileId = getProxyValue<string>(proxy, '$file');
  const pageId = getProxyValue<string>(proxy, '$page');
  const id = getProxyValue<string>(proxy, '$id');
  if (fileId && pageId && id) {
    // TODO: locate-shape
    // return locate-shape(fileId, pageId, id);
  }
  return undefined;
}

/**
 * Convert proxy to library color
 */
export function proxyToLibraryColor(proxy: Record<string, unknown>): unknown {
  const fileId = getProxyValue<string>(proxy, '$file');
  const id = getProxyValue<string>(proxy, '$id');
  if (fileId && id) {
    // TODO: locate-library-color
    // return locate-library-color(fileId, id);
  }
  return undefined;
}

/**
 * Convert proxy to library typography
 */
export function proxyToLibraryTypography(proxy: Record<string, unknown>): unknown {
  const fileId = getProxyValue<string>(proxy, '$file');
  const id = getProxyValue<string>(proxy, '$id');
  if (fileId && id) {
    // TODO: locate-library-typography
    // return locate-library-typography(fileId, id);
  }
  return undefined;
}

/**
 * Convert proxy to library component
 */
export function proxyToLibraryComponent(proxy: Record<string, unknown>): unknown {
  const fileId = getProxyValue<string>(proxy, '$file');
  const id = getProxyValue<string>(proxy, '$id');
  if (fileId && id) {
    // TODO: locate-library-component
    // return locate-library-component(fileId, id);
  }
  return undefined;
}

/**
 * Convert proxy to flow
 */
export function proxyToFlow(proxy: Record<string, unknown>): unknown {
  const fileId = getProxyValue<string>(proxy, '$file');
  const pageId = getProxyValue<string>(proxy, '$page');
  const flowId = getProxyValue<string>(proxy, '$id');
  if (fileId && pageId && flowId) {
    // TODO: locate flow from page
    // const page = locate-page(fileId, pageId);
    // if (page) {
    //   return page.flows?.[flowId];
    // }
  }
  return undefined;
}

/**
 * Convert proxy to ruler guide
 */
export function proxyToRulerGuide(proxy: Record<string, unknown>): unknown {
  const fileId = getProxyValue<string>(proxy, '$file');
  const pageId = getProxyValue<string>(proxy, '$page');
  const rulerId = getProxyValue<string>(proxy, '$id');
  if (fileId && pageId && rulerId) {
    // TODO: locate ruler guide
    // return locate-ruler-guide(fileId, pageId, rulerId);
  }
  return undefined;
}

/**
 * Convert proxy to interaction
 */
export function proxyToInteraction(proxy: Record<string, unknown>): unknown {
  const fileId = getProxyValue<string>(proxy, '$file');
  const pageId = getProxyValue<string>(proxy, '$page');
  const shapeId = getProxyValue<string>(proxy, '$shape');
  const index = getProxyValue<number>(proxy, '$index');
  if (fileId && pageId && shapeId && index !== undefined) {
    // TODO: locate interaction
    // const shape = locate-shape(fileId, pageId, shapeId);
    // if (shape) {
    //   return shape.interactions?.[index];
    // }
  }
  return undefined;
}

/**
 * Convert proxy to token theme
 */
export function proxyToTokenTheme(proxy: Record<string, unknown>): unknown {
  const fileId = getProxyValue<string>(proxy, '$file');
  const id = getProxyValue<string>(proxy, '$id');
  if (fileId && id) {
    // TODO: locate token theme
    // const tokensLib = locate-tokens-lib(fileId);
    // if (tokensLib) {
    //   return getTheme(tokensLib, id);
    // }
  }
  return undefined;
}

/**
 * Convert proxy to token set
 */
export function proxyToTokenSet(proxy: Record<string, unknown>): unknown {
  const fileId = getProxyValue<string>(proxy, '$file');
  const setId = getProxyValue<string>(proxy, '$id');
  if (fileId && setId) {
    // TODO: locate token set
    // const tokensLib = locate-tokens-lib(fileId);
    // if (tokensLib) {
    //   return getSet(tokensLib, setId);
    // }
  }
  return undefined;
}

/**
 * Convert proxy to token
 */
export function proxyToToken(proxy: Record<string, unknown>): unknown {
  const fileId = getProxyValue<string>(proxy, '$file');
  const setId = getProxyValue<string>(proxy, '$set');
  const tokenId = getProxyValue<string>(proxy, '$id');
  if (fileId && setId && tokenId) {
    // TODO: locate token
    // const tokensLib = locate-tokens-lib(fileId);
    // if (tokensLib) {
    //   return getToken(tokensLib, setId, tokenId);
    // }
  }
  return undefined;
}
