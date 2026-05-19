// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { Observable } from 'rxjs';

/**
 * NOTE: this operation is necessary because some versions of safari/webkit,
 * returns something like "data:image/png, image/png;base64,iVBOR" (repeated
 * mimetype). The regex replacement strips the repeated mimetype.
 */
const WEBKIT_DATAURI_FIX_RE = /^(data:image\/\w+)(,\s*image\/\w+)?(;base64.*)$/;

/**
 * Fix webkit data URI format
 */
function fixWebkitDataUri(duri: string): string {
  if (typeof duri !== 'string') {
    return duri;
  }
  return duri.replace(WEBKIT_DATAURI_FIX_RE, '$1$3');
}

/**
 * Create a file reader observable
 */
function fileReader(f: (reader: FileReader) => void): Observable<string> {
  return new Observable(subscriber => {
    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result as string;
      const fixed = fixWebkitDataUri(result);
      subscriber.next(fixed);
      subscriber.complete();
    };

    reader.onerror = error => {
      subscriber.error(error);
    };

    reader.onabort = () => {
      subscriber.error(new Error('Operation aborted'));
    };

    f(reader);

    return () => {
      reader.abort();
    };
  });
}

/**
 * Read file as text
 */
export function readFileAsText(file: File): Observable<string> {
  return fileReader(reader => reader.readAsText(file));
}

/**
 * Read file as array buffer
 */
export function readFileAsArrayBuffer(file: File): Observable<ArrayBuffer> {
  return new Observable(subscriber => {
    const reader = new FileReader();

    reader.onload = () => {
      subscriber.next(reader.result as ArrayBuffer);
      subscriber.complete();
    };

    reader.onerror = error => {
      subscriber.error(error);
    };

    reader.readAsArrayBuffer(file);

    return () => {
      reader.abort();
    };
  });
}

/**
 * Read file as data URL
 */
export function readFileAsDataURL(file: File): Observable<string> {
  return fileReader(reader => reader.readAsDataURL(file));
}

/**
 * Check if value is a Blob
 */
export function isBlob(v: unknown): v is Blob {
  return v instanceof Blob;
}

/**
 * Create a blob from content
 */
export function createBlob(content: unknown): Blob;
export function createBlob(content: unknown, mtype: string): Blob;
export function createBlob(content: unknown, mtype = 'application/octet-stream'): Blob {
  return new Blob([content], { type: mtype });
}

/**
 * Create blob from canvas
 */
export function createBlobFromCanvas(canvas: HTMLCanvasElement): Promise<Blob>;
export function createBlobFromCanvas(canvas: HTMLCanvasElement, options: BlobPropertyBag): Promise<Blob>;
export async function createBlobFromCanvas(
  canvas: HTMLCanvasElement,
  options?: BlobPropertyBag
): Promise<Blob> {
  if ('convertToBlob' in canvas) {
    return (canvas as OffscreenCanvas).convertToBlob(options);
  }

  return new Promise((resolve) => {
    canvas.toBlob(blob => {
      resolve(blob!);
    }, options);
  });
}

/**
 * Revoke object URL
 */
export function revokeUri(url: string): void {
  if (url.startsWith('blob:')) {
    URL.revokeObjectURL(url);
  }
}

/**
 * Create URL from blob
 */
export function createUri(b: Blob): string {
  if (!isBlob(b)) {
    throw new Error('invalid arguments: expected Blob');
  }
  return URL.createObjectURL(b);
}

/**
 * Check if string is a data URI
 */
export function isDataUri(s: string): boolean {
  return s.startsWith('data:');
}

/**
 * Convert data URI to blob
 */
export function dataUriToBlob(dataUri: string): Blob {
  const [mtypePart, b64Data] = dataUri.split(';base64,', 2);
  const mtype = mtypePart.substring(mtypePart.indexOf(':') + 1);
  const decoded = atob(b64Data);
  const size = decoded.length;
  const content = new Uint8Array(size);

  for (let i = 0; i < size; i++) {
    content[i] = decoded.charCodeAt(i);
  }

  return createBlob(content, mtype);
}

/**
 * Get current selected text
 */
export function getCurrentSelectedText(): string {
  return window.getSelection()?.toString() ?? '';
}

/**
 * Create canvas element
 */
export function createCanvasElement(width: number, height: number): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
}

/**
 * Create offscreen canvas
 */
export function createOffscreenCanvas(width: number, height: number): OffscreenCanvas | HTMLCanvasElement {
  if ('OffscreenCanvas' in window) {
    return new OffscreenCanvas(width, height);
  }
  return createCanvasElement(width, height);
}

/**
 * Create image bitmap
 */
export function createImageBitmap(image: ImageBitmapSource): Promise<ImageBitmap>;
export function createImageBitmap(image: ImageBitmapSource, options: ImageBitmapOptions): Promise<ImageBitmap>;
export function createImageBitmap(
  image: ImageBitmapSource,
  options?: ImageBitmapOptions
): Promise<ImageBitmap> {
  if (options) {
    return window.createImageBitmap(image, options);
  }
  return window.createImageBitmap(image);
}

/**
 * Create image element
 */
export function createImage(src: string): Promise<HTMLImageElement>;
export function createImage(src: string, width: number, height: number): Promise<HTMLImageElement>;
export function createImage(src: string, width?: number, height?: number): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    if (width !== undefined) {
      img.width = width;
    }
    if (height !== undefined) {
      img.height = height;
    }
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
}

/**
 * Create image bitmap with workaround for premultiplied alpha issue
 *
 * Why this? Because as described in https://bugs.chromium.org/p/chromium/issues/detail?id=1463435
 * createImageBitmap seems to apply premultiplied alpha multiples times on the same image
 * which results in harsh borders around text being rendered. This is a workaround to avoid this issue.
 */
export async function createImageBitmapWithWorkaround(
  image: ImageBitmapSource
): Promise<ImageBitmap>;
export async function createImageBitmapWithWorkaround(
  image: ImageBitmapSource,
  options?: ImageBitmapOptions
): Promise<ImageBitmap> {
  const offscreenCanvas = createOffscreenCanvas(
    (image as ImageBitmap).width,
    (image as ImageBitmap).height
  );
  const offscreenContext = offscreenCanvas.getContext('2d');
  if (!offscreenContext) {
    throw new Error('Failed to get offscreen canvas context');
  }
  offscreenContext.drawImage(image as CanvasImageSource, 0, 0);
  return createImageBitmap(offscreenCanvas, options);
}

/**
 * Request fullscreen
 */
export function requestFullscreen(el: Element): boolean | void {
  if ('requestFullscreen' in el) {
    return el.requestFullscreen();
  }
  if ('webkitRequestFullscreen' in el) {
    return (el as any).webkitRequestFullscreen();
  }
  console.error('Seems like current browser does not support fullscreen api.');
  return false;
}

/**
 * Exit fullscreen
 */
export function exitFullscreen(): boolean | void {
  if ('exitFullscreen' in document) {
    return document.exitFullscreen();
  }
  if ('webkitExitFullscreen' in document) {
    return (document as any).webkitExitFullscreen();
  }
  console.error('Seems like current browser does not support fullscreen api.');
  return false;
}

/**
 * Observe resize of a node
 */
export function observeResize(node: Element): Observable<ResizeObserverEntry[]> {
  return new Observable(subscriber => {
    const obs = new ResizeObserver(entries => {
      subscriber.next(entries);
    });
    obs.observe(node);
    return () => {
      obs.disconnect();
    };
  });
}

/**
 * Create empty PNG data URL for given size
 */
const emptyPngCache = new Map<string, Promise<string>>();

async function emptyPngSize(width: number, height: number): Promise<string> {
  const key = `${width}x${height}`;

  if (emptyPngCache.has(key)) {
    return emptyPngCache.get(key)!;
  }

  const promise = new Promise<string>((resolve, reject) => {
    try {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;

      const canvasContext = canvas.getContext('2d');
      if (!canvasContext) {
        reject(new Error('Failed to get canvas context'));
        return;
      }

      canvasContext.fillStyle = 'white';
      canvasContext.fillRect(0, 0, width, height);

      canvas.toBlob(
        blob => {
          if (!blob) {
            reject(new Error('Failed to create blob'));
            return;
          }
          readFileAsDataURL(blob).subscribe({
            next: resolve,
            error: reject
          });
        }
      );
    } catch (e) {
      reject(e);
    }
  });

  emptyPngCache.set(key, promise);
  return promise;
}

export { emptyPngSize };

/**
 * Create range
 */
export function createRange(): Range {
  return document.createRange();
}

/**
 * Select contents of node with range
 */
export function selectContents(range: Range | null, node: Node): Range | null {
  if (range && node) {
    range.selectNodeContents(node);
  }
  return range;
}

/**
 * Select all children
 */
export function selectAllChildren(selection: Selection | null, node: Node): Selection | null {
  if (selection && node) {
    selection.selectAllChildren(node);
  }
  return selection;
}

/**
 * Get selection (only returns valid selection)
 */
export function getSelection(): Selection | null {
  const selection = window.getSelection();
  if (selection && selection.type !== 'None') {
    return selection;
  }
  return null;
}

/**
 * Get anchor node from selection
 */
export function getAnchorNode(selection: Selection | null): Node | null {
  if (!selection) {
    return null;
  }
  return selection.anchorNode;
}

/**
 * Get anchor offset from selection
 */
export function getAnchorOffset(selection: Selection | null): number | null {
  if (!selection) {
    return null;
  }
  return selection.anchorOffset;
}

/**
 * Remove all ranges from selection
 */
export function removeAllRanges(sel: Selection | null): Selection | null {
  if (!sel) {
    return null;
  }
  sel.removeAllRanges();
  return sel;
}

/**
 * Add range to selection
 */
export function addRange(sel: Selection | null, range: Range | null): Selection | null {
  if (!sel || !range) {
    return sel;
  }
  sel.addRange(range);
  return sel;
}

/**
 * Collapse selection to end
 */
export function collapseEnd(sel: Selection | null): Selection | null {
  if (!sel) {
    return null;
  }
  sel.collapseToEnd();
  return sel;
}

/**
 * Set cursor position at node
 */
export function setCursor(node: Node | null): void;
export function setCursor(node: Node | null, offset: number): void;
export function setCursor(node: Node | null, offset = 0): void {
  if (!node) {
    return;
  }

  const childNodes = node.childNodes;
  const sel = getSelection();
  const r = createRange();

  if (childNodes.length === 0) {
    r.setStart(node, offset);
    r.setEnd(node, offset);
    removeAllRanges(sel);
    addRange(sel, r);
  } else {
    const textNode = childNodes[0];
    r.setStart(textNode, offset);
    r.setEnd(textNode, offset);
    removeAllRanges(sel);
    addRange(sel, r);
  }
}

/**
 * Set cursor before node
 */
export function setCursorBefore(node: Node | null): void {
  setCursor(node, 1);
}

/**
 * Set cursor after node
 */
export function setCursorAfter(node: Node | null): void {
  if (!node) {
    return;
  }
  const childNodes = node.childNodes;
  const firstChild = childNodes[0] as Text | null;
  const offset = firstChild ? firstChild.length : 0;
  setCursor(node, offset);
}

/**
 * Get range at index from selection
 */
export function getRange(selection: Selection | null, idx: number): Range | null {
  if (!selection) {
    return null;
  }
  return selection.getRangeAt(idx);
}

/**
 * Get range start container
 */
export function rangeStartContainer(range: Range | null): Node | null {
  if (!range) {
    return null;
  }
  return range.startContainer;
}

/**
 * Get range start offset
 */
export function rangeStartOffset(range: Range | null): number | null {
  if (!range) {
    return null;
  }
  return range.startOffset;
}

/**
 * Get range end container
 */
export function rangeEndContainer(range: Range | null): Node | null {
  if (!range) {
    return null;
  }
  return range.endContainer;
}

/**
 * Get range end offset
 */
export function rangeEndOffset(range: Range | null): number | null {
  if (!range) {
    return null;
  }
  return range.endOffset;
}
