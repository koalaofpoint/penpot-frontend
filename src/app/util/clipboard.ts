// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { Observable, from } from 'rxjs';
import { map, filter, catchError } from 'rxjs/operators';

// Re-export from clipboard.js
export * from './clipboard.js';

/**
 * Supported image types for clipboard
 */
export const IMAGE_TYPES = [
  'image/webp',
  'image/png',
  'image/jpeg',
  'image/svg+xml'
] as const;

/**
 * Clipboard options
 */
export interface ClipboardOptions {
  decodeTransit?: (str: string) => unknown;
  allowHTMLPaste?: boolean;
}

/**
 * Default clipboard options
 */
const defaultOptions: ClipboardOptions = {
  allowHTMLPaste: false
};

/**
 * Get clipboard stream from DataTransfer instance
 */
export function fromDataTransfer(dataTransfer: DataTransfer): Observable<Blob>;
export function fromDataTransfer(dataTransfer: DataTransfer, options: ClipboardOptions): Observable<Blob>;
export function fromDataTransfer(dataTransfer: DataTransfer, options?: ClipboardOptions): Observable<Blob> {
  const opts = options ?? defaultOptions;
  // TODO: Import from proper location
  return from((window as any).clipboard.fromDataTransfer(dataTransfer, opts)).pipe(
    map(items => items),
    filter(Boolean)
  );
}

/**
 * Get clipboard stream from navigator clipboard API
 */
export function fromNavigator(): Observable<Blob>;
export function fromNavigator(options: ClipboardOptions): Observable<Blob>;
export function fromNavigator(options?: ClipboardOptions): Observable<Blob> {
  const opts = options ?? defaultOptions;
  return from((window as any).clipboard.fromNavigator(opts)).pipe(
    map(items => items),
    filter(Boolean)
  );
}

/**
 * Get clipboard stream from clipboard event
 */
export function fromClipboardEvent(event: ClipboardEvent): Observable<Blob>;
export function fromClipboardEvent(event: ClipboardEvent, options: ClipboardOptions): Observable<Blob>;
export function fromClipboardEvent(event: ClipboardEvent, options?: ClipboardOptions): Observable<Blob> {
  const cdata = event.clipboardData;
  if (!cdata) {
    return from([]);
  }
  return fromDataTransfer(cdata, options);
}

/**
 * Get clipboard stream from synthetic clipboard event
 */
export function fromSyntheticClipboardEvent(event: Event, options?: ClipboardOptions): Observable<Blob> {
  // TODO: Import from proper location
  // import { getTarget, isContentEditable, getTagName } from './dom';

  // const target = getTarget(event);
  // const isContentEditable = isContentEditable(target);
  // const isInput = getTagName(target) === 'INPUT';

  // Ignore when pasting into an editable control
  // if (isContentEditable || isInput) {
  //   return from([]);
  // }

  // TODO: Convert event to browser event
  // return fromClipboardEvent(eventToBrowserEvent(event), options);
  return from([]);
}

/**
 * Get clipboard stream from drop event
 */
export function fromDropEvent(event: DragEvent): Observable<Blob>;
export function fromDropEvent(event: DragEvent, options: ClipboardOptions): Observable<Blob>;
export function fromDropEvent(event: DragEvent, options?: ClipboardOptions): Observable<Blob> {
  const dataTransfer = event.dataTransfer;
  if (!dataTransfer) {
    return from([]);
  }
  return fromDataTransfer(dataTransfer, options);
}

/**
 * Write text to clipboard
 */
export function toClipboard(data: string): Promise<void> {
  if (typeof data !== 'string') {
    throw new Error('`data` should be string');
  }
  return navigator.clipboard.writeText(data);
}

/**
 * Create a ClipboardItem from mimetype and promise
 */
function createClipboardItem(mimetype: string, promise: Promise<Blob>): ClipboardItem {
  return new ClipboardItem({
    [mimetype]: promise
  });
}

/**
 * Write blob to clipboard promise
 */
export function toClipboardPromise(mimetype: string, promise: Promise<Blob>): Promise<void> {
  const data = createClipboardItem(mimetype, promise);
  return navigator.clipboard.write([data]);
}
