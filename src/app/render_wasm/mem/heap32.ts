// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as uuid fromapp.common.uuid

export function writeU32(offset: number, heap: Uint32Array, value: number): number {
  if (!(heap instanceof Uint32Array)) {
    throw new Error("expected Uint32Array instance for `heap`")
  }
  heap[offset] = value
  return offset + 1
}

export function writeF32(offset: number, heap: Float32Array, value: number): number {
  if (!(heap instanceof Float32Array)) {
    throw new Error("expected Float32Array instance for `heap`")
  }
  heap[offset] = value
  return offset + 1
}

export function writeUuid(offset: number, heap: Uint32Array, id: any): number {
  if (!(heap instanceof Uint32Array)) {
    throw new Error("expected Uint32Array instance for `heap`")
  }
  const buffer = uuid.getU32(id)
  heap.set(buffer, offset)
  return offset + 4
}

export function writeMatrix(offset: number, heap: Float32Array, matrix: any): number {
  if (!(heap instanceof Float32Array)) {
    throw new Error("expected Float32Array instance for `heap`")
  }
  const a = matrix.a
  const b = matrix.b
  const c = matrix.c
  const d = matrix.d
  const e = matrix.e
  const f = matrix.f
  heap[offset + 0] = a
  heap[offset + 1] = b
  heap[offset + 2] = c
  heap[offset + 3] = d
  heap[offset + 4] = e
  heap[offset + 5] = f
  return offset + 6
}
