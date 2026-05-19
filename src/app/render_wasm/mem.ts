// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as buf from/app.common.buffer
import * as h fromapp.render-wasm.helpers
import * as wasm fromapp.render-wasm.wasm

export function->offset32(value: number): number {
  return value >> 2
}

export function getAllocSize<T>(coll: ArrayLike<T> & {length: number}, itemSize: number): number {
  return itemSize * coll.length
}

export function alloc(size: number): number {
  if (size === 0) {
    console.trace("Tried to allocate 0 bytes")
  }
  return h.call(wasm.internalModule, "_alloc_bytes", size)
}

export function allocToOffset32(size: number): number {
  return (alloc(size) as number) |> (->offset32)
}

export function getHeapU8(): Uint8Array {
  return (wasm.internalModule as any).HEAPU8 as Uint8Array
}

export function getHeapU32(): Uint32Array {
  return (wasm.internalModule as any).HEAPU32 as Uint32Array
}

export function getHeapI32(): Int32Array {
  return (wasm.internalModule as any).HEAP32 as Int32Array
}

export function getHeapF32(): Float32Array {
  return (wasm.internalModule as any).HEAPF32 as Float32Array
}

export function free(): void {
  h.call(wasm.internalModule, "_free_bytes")
}

export function readString(ptr: number): string {
  return h.call(wasm.internalModule, "UTF8ToString", ptr)
}

export function readNullTerminatedString(ptr: number): string | null {
  if (!ptr || ptr === 0) return null
  const heap = getHeapU8()
  let endIdx = ptr
  while ((heap[endIdx] as number) !== 0) {
    endIdx++
  }
  const bytes = heap.slice(ptr, endIdx)
  const decoder = new TextDecoder("utf-8")
  return decoder.decode(bytes)
}

export function slice(heap: ArrayLike<number>, offset: number, size: number): Uint8Array {
  const array = heap as Uint8Array
  return array.slice(offset, offset + size) as Uint8Array
}

export function getDataView(): DataView {
  return buf.wrap(getHeapU8())
}

export function writeU8(offset: number, target: DataView, value: number): number {
  buf.writeU8(target, offset, value)
  return offset + 1
}

export function writeF32(offset: number, target: DataView, value: number): number {
  buf.writeF32(target, offset, value)
  return offset + 4
}

export function writeI32(offset: number, target: DataView, value: number): number {
  buf.writeI32(target, offset, value)
  return offset + 4
}

export function writeU32(offset: number, target: DataView, value: number): number {
  buf.writeI32(target, offset, value)
  return offset + 4
}

export function writeBool(offset: number, target: DataView, value: boolean): number {
  buf.writeBool(target, offset, value)
  return offset + 1
}

export function writeUuid(offset: number, target: DataView, value: any): number {
  buf.writeUuid(target, offset, value)
  return offset + 16
}

export function writeBuffer(offset: number, target: Uint8Array, value: ArrayBuffer | Uint8Array): number {
  if (!(target instanceof Uint8Array)) {
    throw new Error("target should be u8 addressable heap")
  }

  const valueToWrite = value instanceof ArrayBuffer
    ? new Uint8Array(value)
    : value instanceof Uint8Array
      ? value
      : (() => { throw new Error("unexpected type") })()

  target.set(valueToWrite, offset)
  return offset + valueToWrite.byteLength
}

export function assertWritten(finalOffset: number, prevOffset: number, expected: number): number {
  const actual = finalOffset - prevOffset
  if (actual !== expected) {
    throw new Error(`expected to be written ${expected} but finally writted ${actual}`)
  }
  return finalOffset
}

export function size(o: ArrayBuffer | ArrayLike<number>): number {
  return (o as ArrayBuffer).byteLength ?? (o as ArrayLike<number>).length
}
