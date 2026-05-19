// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { resolveFileMedia } from '../../config';
// import { send } from '../../util/http';

/**
 * Image data interface
 */
export interface ImageData {
  name?: string;
  width: number;
  height: number;
  mtype?: string;
  id: string;
  keepAspectRatio?: boolean;
}

/**
 * Image data proxy interface
 */
export interface ImageDataProxy extends ImageData {
  data(): Promise<Uint8Array>;
}

/**
 * Create an image data proxy
 */
export function createImageData(entry: {
  name?: string;
  width: number;
  height: number;
  mtype?: string;
  id?: string;
  keepAspectRatio?: boolean;
}): ImageDataProxy {
  const proxy = {} as ImageDataProxy;

  proxy.name = entry.name;
  proxy.width = entry.width;
  proxy.height = entry.height;
  proxy.mtype = entry.mtype;
  proxy.id = entry.id ? String(entry.id) : '';
  proxy.keepAspectRatio = entry.keepAspectRatio;

  // Data method - returns promise for image bytes
  proxy.data = function(): Promise<Uint8Array> {
    // TODO: Get URL and fetch image data
    // const url = resolveFileMedia(entry);
    // return send({ method: 'get', uri: url, responseType: 'blob' })
    //   .pipe(map(response => response.body))
    //   .pipe(mapcat(blob => blob.arrayBuffer()))
    //   .pipe(map(buffer => new Uint8Array(buffer)))
    //   .toPromise();

    return Promise.resolve(new Uint8Array());
  };

  return proxy;
}

/**
 * Check if value is an ImageDataProxy
 */
export function isImageDataProxy(p: unknown): p is ImageDataProxy {
  if (typeof p !== 'object' || p === null) {
    return false;
  }

  const proxy = p as Record<string, unknown>;

  return (
    typeof proxy.name === 'string' ||
    proxy.name === undefined
  ) && (
    typeof proxy.width === 'number'
  ) && (
    typeof proxy.height === 'number'
  ) && (
    typeof proxy.mtype === 'string' ||
    proxy.mtype === undefined
  ) && (
    typeof proxy.id === 'string'
  ) && (
    typeof proxy.keepAspectRatio === 'boolean' ||
    proxy.keepAspectRatio === undefined
  ) && (
    typeof proxy.data === 'function'
  );
}

/**
 * Convert image data proxy to plain object
 */
export function imageDataToObject(proxy: ImageDataProxy): ImageData {
  return {
    name: proxy.name,
    width: proxy.width,
    height: proxy.height,
    mtype: proxy.mtype,
    id: proxy.id,
    keepAspectRatio: proxy.keepAspectRatio
  };
}
