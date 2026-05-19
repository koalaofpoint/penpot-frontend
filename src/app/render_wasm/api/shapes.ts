// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from "app/common/data"
import * as dm from "app/common/data/macros"
import * as uuid from "app/common/uuid"
import * as h from "app/render_wasm/helpers"
import * as mem from "app/render_wasm/mem"
import * as sr from "app/render_wasm/serializers"
import * as wasm from "app/render_wasm/wasm"

const BASE_PROPS_SIZE = 104
const FLAG_CLIP_CONTENT = 0x01
const FLAG_HIDDEN = 0x02
const CONSTRAINT_NONE = 0xff

function writeUuidToHeap(dview: DataView, offset: number, id: any): void {
  const buffer = uuid.getU32(id)
  dview.setUint32(offset, buffer[0], true)
  dview.setUint32(offset + 4, buffer[1], true)
  dview.setUint32(offset + 8, buffer[2], true)
  dview.setUint32(offset + 12, buffer[3], true)
}

function serializeTransform(transform: any): [number, number, number, number, number, number] {
  if (transform !== undefined && transform !== null) {
    return [
      dm.getProp(transform, "a"),
      dm.getProp(transform, "b"),
      dm.getProp(transform, "c"),
      dm.getProp(transform, "d"),
      dm.getProp(transform, "e"),
      dm.getProp(transform, "f"),
    ]
  }
  return [1.0, 0.0, 0.0, 1.0, 0.0, 0.0]
}

function serializeSelrect(selrect: any): [number, number, number, number] {
  if (selrect !== undefined && selrect !== null) {
    return [
      dm.getProp(selrect, "x1"),
      dm.getProp(selrect, "y1"),
      dm.getProp(selrect, "x2"),
      dm.getProp(selrect, "y2"),
    ]
  }
  return [0.0, 0.0, 0.0, 0.0]
}

export function setShapeBaseProps(shape: any): void {
  if (!wasm.contextInitialized) return

  const id = dm.getProp(shape, "id")
  const parentId = shape["parent-id"]
  const shapeType = dm.getProp(shape, "type")

  const clipContent = shapeType === ":frame" ? !(shape["show-content"]) : false
  const hidden = shape["hidden"] ?? false

  let flags = 0
  if (clipContent) flags |= FLAG_CLIP_CONTENT
  if (hidden) flags |= FLAG_HIDDEN

  const blendMode = sr.translateBlendMode(shape["blend-mode"])
  const constraintH = shape["constraints-h"] !== undefined && shape["constraints-h"] !== null
    ? sr.translateConstraintH(shape["constraints-h"])
    : CONSTRAINT_NONE
  const constraintV = shape["constraints-v"] !== undefined && shape["constraints-v"] !== null
    ? sr.translateConstraintV(shape["constraints-v"])
    : CONSTRAINT_NONE

  const opacity = d.nilv(shape["opacity"], 1.0)
  const rotation = d.nilv(shape["rotation"], 0.0)

  const [ta, tb, tc, td, te, tf] = serializeTransform(shape["transform"])

  const selrect = shape["selrect"]
  const [sx1, sy1, sx2, sy2] = serializeSelrect(selrect)

  const r1 = d.nilv(shape["r1"], 0.0)
  const r2 = d.nilv(shape["r2"], 0.0)
  const r3 = d.nilv(shape["r3"], 0.0)
  const r4 = d.nilv(shape["r4"], 0.0)

  const offset = mem.alloc(BASE_PROPS_SIZE)
  const heap = mem.getHeapU8()
  const dview = new DataView(heap.buffer)

  writeUuidToHeap(dview, offset, id)
  writeUuidToHeap(dview, offset + 16, d.nilv(parentId, uuid.zero))
  dview.setUint8(offset + 32, sr.translateShapeType(shapeType))
  dview.setUint8(offset + 33, flags)
  dview.setUint8(offset + 34, blendMode)
  dview.setUint8(offset + 35, constraintH)
  dview.setUint8(offset + 36, constraintV)

  dview.setFloat32(offset + 40, opacity, true)
  dview.setFloat32(offset + 44, rotation, true)

  dview.setFloat32(offset + 48, ta, true)
  dview.setFloat32(offset + 52, tb, true)
  dview.setFloat32(offset + 56, tc, true)
  dview.setFloat32(offset + 60, td, true)
  dview.setFloat32(offset + 64, te, true)
  dview.setFloat32(offset + 68, tf, true)

  dview.setFloat32(offset + 72, sx1, true)
  dview.setFloat32(offset + 76, sy1, true)
  dview.setFloat32(offset + 80, sx2, true)
  dview.setFloat32(offset + 84, sy2, true)

  dview.setFloat32(offset + 88, r1, true)
  dview.setFloat32(offset + 92, r2, true)
  dview.setFloat32(offset + 96, r3, true)
  dview.setFloat32(offset + 100, r4, true)

  h.call(wasm.internalModule, "_set_shape_base_props")
}
