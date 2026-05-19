// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper location
// import { ZipReader, ZipWriter, BlobReader, Uint8ArrayReader, TextReader, BlobWriter, Uint8ArrayWriter } from '@zip.js/zip.js';

/**
 * Create zip reader from blob
 */
export function reader(blob: Blob | Uint8Array | ArrayBuffer): unknown {
  // TODO: Implement with zip.js
  // if (blob instanceof Blob) {
  //   const breader = new BlobReader(blob);
  //   return new ZipReader(breader);
  // }
  // if (blob instanceof Uint8Array) {
  //   const breader = new Uint8ArrayReader(blob);
  //   const zreader = new ZipReader(breader, { useWebWorkers: false });
  //   return zreader;
  // }
  // if (blob instanceof ArrayBuffer) {
  //   return reader(new Uint8Array(blob));
  // }
  // throw new Error('invalid-type', 'invalid-type', 'invalid data received for zip/reader');
  return {};
}

/**
 * Create blob writer
 */
export function blobWriter(options?: { mtype?: string }): unknown {
  // TODO: Implement with zip.js
  // return new BlobWriter(options?.mtype ?? 'application/octet-stream');
  return {};
}

/**
 * Create Uint8Array writer
 */
export function bytesWriter(): unknown {
  // TODO: Implement with zip.js
  // return new Uint8ArrayWriter();
  return {};
}

/**
 * Create zip writer with stream
 */
export function writer(streamWriter: unknown): unknown {
  // TODO: Implement with zip.js
  // assert(instance of streamWriter, 'expected ZipWriter');
  // return new ZipWriter(streamWriter);
  return {};
}

/**
 * Add content to zip writer
 */
export function add(writer: unknown, path: string, content: Uint8Array | ArrayBuffer | Blob | string): void {
  // TODO: Implement with zip.js
  // assert(instance of writer, 'expected ZipWriter');
  //
  // if (content instanceof Uint8Array) {
  //   writer.add(path, new Uint8ArrayReader(content));
  // } else if (content instanceof ArrayBuffer) {
  //   writer.add(path, new Uint8ArrayReader(new Uint8Array(content)));
  // } else if (content instanceof Blob) {
  //   writer.add(path, new BlobReader(content));
  // } else if (typeof content === 'string') {
  //   writer.add(path, new TextReader(content));
  // } else {
  //   throw new Error('invalid-type', 'invalid-type', 'invalid data received for zip/add fn');
  // }
}

/**
 * Get entry from zip reader
 */
export function getEntry(reader: unknown, path: string): Promise<unknown> {
  // TODO: Implement with zip.js
  // assert(instance of reader, 'expected ZipReader');
  // const entries = await reader.getEntries();
  // return entries.find(entry => entry.filename === path);
  return Promise.resolve(null);
}

/**
 * Get all entries from zip reader
 */
export function getEntries(reader: unknown): Promise<unknown[]> {
  // TODO: Implement with zip.js
  // assert(instance of reader, 'expected ZipReader');
  // return reader.getEntries();
  return Promise.resolve([]);
}

/**
 * Read entry as text
 */
export function readAsText(entry: unknown): Promise<string> {
  // TODO: Implement with zip.js
  // const writer = new TextWriter();
  // return entry.getData(writer);
  return Promise.resolve('');
}

/**
 * Close zip reader or writer
 */
export function close(closeable: unknown): Promise<void> {
  // TODO: Implement with zip.js
  // assert(instance of reader, 'expected ZipReader') || assert(instance of writer, 'expected ZipWriter');
  // return closeable.close();
  return Promise.resolve();
}
