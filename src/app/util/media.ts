// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

/**
 * Supported image types
 */
export const IMAGE_TYPES = [
  'image/webp',
  'image/png',
  'image/jpeg',
  'image/svg+xml'
] as const;

export type ImageType = typeof IMAGE_TYPES[number];

/**
 * Maps media type to file extension
 */
export function mediaTypeToExtension(mtype: string): string | undefined {
  const extensionMap: Record<string, string> = {
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',
    'image/png': 'png',
    'image/gif': 'gif',
    'image/webp': 'webp',
    'image/svg+xml': 'svg',
    'image/bmp': 'bmp',
    'image/tiff': 'tiff',
    'application/pdf': 'pdf',
    'text/plain': 'txt',
    'application/json': 'json',
    'application/xml': 'xml',
    'text/xml': 'xml'
  };

  return extensionMap[mtype];
}

/**
 * Checks if a media type is supported
 */
export function isImageType(mtype: string): boolean {
  return IMAGE_TYPES.includes(mtype as ImageType);
}
