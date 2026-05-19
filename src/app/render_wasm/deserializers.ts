// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from "app/common/data"
import * as gmt from "app/common/geom/matrix"
import * as gpt from "app/common/geom/point"
import * as uuid from "app/common/uuid"

export function readModifierEntry(
  heapu32: Uint32Array,
  heapf32: Float32Array,
  offset: number
): { id: any; transform: any } {
  const id1 = heapu32[offset + 0]
  const id2 = heapu32[offset + 1]
  const id3 = heapu32[offset + 2]
  const id4 = heapu32[offset + 3]

  const a = heapf32[offset + 4]
  const b = heapf32[offset + 5]
  const c = heapf32[offset + 6]
  const d = heapf32[offset + 7]
  const e = heapf32[offset + 8]
  const f = heapf32[offset + 9]

  return {
    id: uuid.fromUnsignedParts(id1, id2, id3, id4),
    transform: gmt.matrix(a, b, c, d, e, f),
  }
}

export function readSelectionRect(
  heapf32: Float32Array,
  offset: number
): {
  width: number
  height: number
  center: any
  transform: any
} {
  const width = heapf32[offset + 0]
  const height = heapf32[offset + 1]
  const cx = heapf32[offset + 2]
  const cy = heapf32[offset + 3]
  const a = heapf32[offset + 4]
  const b = heapf32[offset + 5]
  const c = heapf32[offset + 6]
  const d = heapf32[offset + 7]
  const e = heapf32[offset + 8]
  const f = heapf32[offset + 9]

  return {
    width,
    height,
    center: gpt.point(cx, cy),
    transform: gmt.matrix(a, b, c, d, e, f),
  }
}

export function readPositionDataEntry(
  heapu32: Uint32Array,
  heapf32: Float32Array,
  offset: number
): {
  paragraph: number
  span: number
  startPos: number
  endPos: number
  x: number
  y: number
  width: number
  height: number
  direction: number
} {
  const paragraph = heapu32[offset + 0]
  const span = heapu32[offset + 1]
  const startPos = heapu32[offset + 2]
  const endPos = heapu32[offset + 3]
  const x = heapf32[offset + 4]
  const y = heapf32[offset + 5]
  const width = heapf32[offset + 6]
  const height = heapf32[offset + 7]
  const direction = heapu32[offset + 8]

  return {
    paragraph,
    span,
    startPos,
    endPos,
    x,
    y,
    width,
    height,
    direction,
  }
}

export function translateDirection(direction: number): string {
  switch (direction) {
    case 0:
      return "rtl"
    default:
      return "ltr"
  }
}