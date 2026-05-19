// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

/**
 * Avatar generation options
 */
export interface AvatarOptions {
  name: string;
  color?: string;
  size?: number;
}

/**
 * Generate an avatar data URL from name
 */
function generate*(options: AvatarOptions): string {
  const { name, color, size = 128 } = options;

  // Split name into words and get initials
  const parts = name.toUpperCase().split(/\s+/);
  const letters =
    parts.length === 1
      ? parts[0]?.[0] ?? ''
      : (parts[0]?.[0] ?? '') + (parts[1]?.[0] ?? '');

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  if (!context) {
    throw new Error('Failed to get canvas context');
  }

  const textColor = color ? '#2e3434' : '#fff';
  const backgroundColor = color ?? '#000000';

  canvas.width = size;
  canvas.height = size;

  // Draw background
  context.fillStyle = backgroundColor;
  context.fillRect(0, 0, size, size);

  // Draw text
  context.font = `${size / 2}px Arial`;
  context.textAlign = 'center';
  context.fillStyle = textColor;
  context.fillText(letters, size / 2, size / 1.5);

  return canvas.toDataURL();
}

/**
 * Memoized cache for generated avatars
 */
const avatarCache = new Map<string, string>();

/**
 * Generate an avatar with caching
 */
export function generate(options: AvatarOptions): string {
  const key = JSON.stringify(options);

  if (!avatarCache.has(key)) {
    avatarCache.set(key, generate*(options));
  }

  return avatarCache.get(key)!;
}

/**
 * Clear avatar cache
 */
export function clearAvatarCache(): void {
  avatarCache.clear();
}
