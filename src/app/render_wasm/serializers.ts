// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from "app/common/data"
import * as dm from "app/common/data/macros"
import * as uuid from "app/common/uuid"
import * as wasm from "app/render_wasm/wasm"
import * as str from "cuerdas/core"

export function u8(value: number): Uint8Array {
  const u8Arr = new Uint8Array(1)
  u8Arr[0] = value
  return u8Arr
}

export function f32ToU8(value: number): Uint8Array {
  const f32Arr = new Float32Array(1)
  f32Arr[0] = value
  return new Uint8Array(f32Arr.buffer)
}

export function i32ToU8(value: number): Uint8Array {
  const i32Arr = new Int32Array(1)
  i32Arr[0] = value
  return new Uint8Array(i32Arr.buffer)
}

export function boolToU8(value: boolean): Uint8Array {
  const result = new Uint8Array(1)
  result[0] = value ? 1 : 0
  return result
}

export function uuidToU8(id: any): Uint8Array {
  const buffer = uuid.getU32(id)
  const u32Arr = new Uint32Array(4)
  u32Arr[0] = buffer[0]
  u32Arr[1] = buffer[1]
  u32Arr[2] = buffer[2]
  u32Arr[3] = buffer[3]
  return new Uint8Array(u32Arr.buffer)
}

export function serializeUuid(id: any): number[] {
  try {
    if (id === null || id === undefined) {
      return uuid.zero
    }
    const asUuid = uuid.uuid(id)
    return uuid.getU32(asUuid)
  } catch (e) {
    return uuid.zero
  }
}

export function translateShapeType(type: string): number {
  const values = (wasm as any).serializers["shape-type"]
  const defaultVal = values ? values["rect"] : 0
  return d.nilv(values?.[d.name(type)], defaultVal)
}

export function translateStrokeLinecap(strokeLinecap: string): number {
  const values = (wasm as any).serializers["stroke-linecap"]
  const defaultVal = values ? values["butt"] : 0
  return d.nilv(values?.[d.name(strokeLinecap)], defaultVal)
}

export function translateStrokeLinejoin(strokeLinejoin: string): number {
  const values = (wasm as any).serializers["stroke-linejoin"]
  const defaultVal = values ? values["miter"] : 0
  return d.nilv(values?.[d.name(strokeLinejoin)], defaultVal)
}

export function translateFillRule(fillRule: string): number {
  const values = (wasm as any).serializers["fill-rule"]
  const defaultVal = values ? values["nonzero"] : 0
  return d.nilv(values?.[d.name(fillRule)], defaultVal)
}

export function translateStrokeStyle(strokeStyle: string): number {
  const values = (wasm as any).serializers["stroke-style"]
  const defaultVal = values ? values["solid"] : 0
  return d.nilv(values?.[d.name(strokeStyle)], defaultVal)
}

export function translateStrokeCap(strokeCap: string): number {
  const values = (wasm as any).serializers["stroke-cap"]
  const defaultVal = values ? values["none"] : 0
  return d.nilv(values?.[d.name(strokeCap)], defaultVal)
}

export function serializePathAttrs(svgAttrs: Record<string, any>): string {
  return Object.entries(svgAttrs).reduce((acc, [key, value]) => {
    return acc + str.kebab(key) + "\0" + value + "\0"
  }, "")
}

export function translateBlendMode(blendMode: string): number {
  const values = (wasm as any).serializers["blend-mode"]
  const defaultVal = values ? values["normal"] : 0
  return d.nilv(values?.[d.name(blendMode)], defaultVal)
}

export function translateConstraintH(type: string): number {
  const values = (wasm as any).serializers["constraint-h"]
  const defaultVal = 5
  return d.nilv(values?.[d.name(type)], defaultVal)
}

export function translateConstraintV(type: string): number {
  const values = (wasm as any).serializers["constraint-v"]
  const defaultVal = 5
  return d.nilv(values?.[d.name(type)], defaultVal)
}

export function translateBoolType(boolType: string): number {
  const values = (wasm as any).serializers["bool-type"]
  const defaultVal = values ? values["union"] : 0
  return d.nilv(values?.[d.name(boolType)], defaultVal)
}

export function translateBlurType(blurType: string): number {
  const values = (wasm as any).serializers["blur-type"]
  const defaultVal = values ? values["layer-blur"] : 0
  return d.nilv(values?.[d.name(blurType)], defaultVal)
}

export function translateLayoutFlexDir(flexDir: string): number {
  const values = (wasm as any).serializers["flex-direction"]
  return values?.[d.name(flexDir)] ?? 0
}

export function translateLayoutGridDir(gridDir: string): number {
  const values = (wasm as any).serializers["grid-direction"]
  return values?.[d.name(gridDir)] ?? 0
}

export function translateLayoutAlignItems(alignItems: string): number {
  const values = (wasm as any).serializers["align-items"]
  const defaultVal = values ? values["start"] : 0
  return d.nilv(values?.[d.name(alignItems)], defaultVal)
}

export function translateLayoutAlignContent(alignContent: string): number {
  const values = (wasm as any).serializers["align-content"]
  const defaultVal = values ? values["stretch"] : 0
  return d.nilv(values?.[d.name(alignContent)], defaultVal)
}

export function translateLayoutJustifyItems(justifyItems: string): number {
  const values = (wasm as any).serializers["justify-items"]
  const defaultVal = values ? values["start"] : 0
  return d.nilv(values?.[d.name(justifyItems)], defaultVal)
}

export function translateLayoutJustifyContent(justifyContent: string): number {
  const values = (wasm as any).serializers["justify-content"]
  const defaultVal = values ? values["stretch"] : 0
  return d.nilv(values?.[d.name(justifyContent)], defaultVal)
}

export function translateLayoutWrapType(wrapType: string): number {
  const values = (wasm as any).serializers["wrap-type"]
  const defaultVal = values ? values["nowrap"] : 0
  return d.nilv(values?.[d.name(wrapType)], defaultVal)
}

export function translateGridTrackType(type: string): number {
  const values = (wasm as any).serializers["grid-track-type"]
  return values?.[d.name(type)] ?? 0
}

export function translateLayoutSizing(sizing: string): number {
  const values = (wasm as any).serializers["sizing"]
  const defaultVal = values ? values["fix"] : 0
  return d.nilv(values?.[d.name(sizing)], defaultVal)
}

export function translateAlignSelf(alignSelf: string): number {
  const values = (wasm as any).serializers["align-self"]
  const defaultVal = values ? values["none"] : 0
  return d.nilv(values?.[d.name(alignSelf)], defaultVal)
}

export function translateJustifySelf(justifySelf: string): number {
  const values = (wasm as any).serializers["justify-self"]
  const defaultVal = values ? values["none"] : 0
  return d.nilv(values?.[d.name(justifySelf)], defaultVal)
}

export function translateShadowStyle(style: string): number {
  const values = (wasm as any).serializers["shadow-style"]
  const defaultVal = values ? values["drop-shadow"] : 0
  return d.nilv(values?.[d.name(style)], defaultVal)
}

export function translateStructureModifierType(type: string): number {
  switch (type) {
    case "remove-children":
      return 1
    case "add-children":
      return 2
    case "scale-content":
      return 3
    default:
      return 0
  }
}

export function translateGrowType(growType: string): number {
  const values = (wasm as any).serializers["grow-type"]
  const defaultVal = values ? values["fixed"] : 0
  return d.nilv(values?.[d.name(growType)], defaultVal)
}

export function translateVerticalAlign(verticalAlign: string): number {
  const values = (wasm as any).serializers["vertical-align"]
  const defaultVal = values ? values["top"] : 0
  return d.nilv(values?.[d.name(verticalAlign)], defaultVal)
}

export function translateTextAlign(textAlign: string): number {
  const values = (wasm as any).serializers["text-align"]
  const defaultVal = values ? values["left"] : 0
  return d.nilv(values?.[d.name(textAlign)], defaultVal)
}

export function translateTextTransform(textTransform: string): number {
  const values = (wasm as any).serializers["text-transform"]
  const defaultVal = values ? values["none"] : 0
  return d.nilv(values?.[d.name(textTransform)], defaultVal)
}

export function translateTextDecoration(textDecoration: string): number {
  const values = (wasm as any).serializers["text-decoration"]
  const defaultVal = values ? values["none"] : 0
  return d.nilv(values?.[d.name(textDecoration)], defaultVal)
}

export function translateTextDirection(textDirection: string): number {
  const values = (wasm as any).serializers["text-direction"]
  const defaultVal = values ? values["ltr"] : 0
  return d.nilv(values?.[d.name(textDirection)], defaultVal)
}

export function translateFontStyle(fontStyle: string): number {
  const values = (wasm as any).serializers["font-style"]
  const defaultVal = values ? values["normal"] : 0
  if (fontStyle === "normal" || fontStyle === "regular") {
    return values?.["normal"] ?? defaultVal
  }
  if (fontStyle === "italic") {
    return values?.["italic"] ?? defaultVal
  }
  return defaultVal
}

export function translateBrowser(browser: string): number {
  switch (browser) {
    case "firefox":
      return 0
    case "chrome":
      return 1
    case "safari":
      return 2
    case "edge":
      return 3
    case "unknown":
    default:
      return 4
  }
}

export function translateTransformEntryKind(kind: string): number {
  const values = (wasm as any).serializers["transform-entry-kind"]
  const defaultVal = values ? values["parent"] : 0
  return d.nilv(values?.[d.name(kind)], defaultVal)
}