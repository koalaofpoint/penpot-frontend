// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as mth from '@app/common/math';

export function hexToU32argb(hex: string, opacity?: number): number {
  const rgb = parseInt(hex.slice(1), 16);
  const a = Math.floor((opacity ?? 1) * 0xff);
  return ((a << 24) | rgb) >>> 0;
}
