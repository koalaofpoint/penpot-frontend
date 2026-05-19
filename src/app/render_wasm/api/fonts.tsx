// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from "app.common.data"
import * as dm from "app.common.data.macros"
import * as log from "app.common.logging"
import * as txt from "app.common.types.text"
import * as uuid from "app.common.uuid"
import * as cf from "app.config"
import * as fonts from "app.main.fonts"
import * as st from "app.main.store"
import * as h from "app.render-wasm.helpers"
import * as wasm from "app.render-wasm.wasm"
import * as http from "app.util.http"
import * as rx from "beicon.v2/core"
import * as str from "cuerdas.core"
import * as gobj from "goog.object"
import * as u from "lambdaisland.uri"
import * as l from "okulary.core"

const fontsDerived = l.derived("fonts", st.state)

const defaultFontSize = 14
const defaultLineHeight = 1.2
const defaultLetterSpacing = 0.0

function googleFontIdToUuid(fontId: string) {
  const font = fonts.getFontData(fontId)
  return font?.uuid || uuid.zero
}

function customFontIdToUuid(fontId: string) {
  return uuid.uuid(fontId.substring(fontId.indexOf("-") + 1))
}

function fontBackend(fontId: string) {
  if (str.startsWith(fontId, "gfont-")) return ":google"
  if (str.startsWith(fontId, "custom-")) return ":custom"
  return ":builtin"
}

function fontDbData(fontId: string, fontVariantId: string, fontWeightFallback: number, fontStyleFallback: string) {
  const font = fonts.getFontData(fontId)
  const closestVariant = fonts.findClosestVariant(font, fontWeightFallback, fontStyleFallback)
  const variant = fonts.getVariant(font, fontVariantId)
  if (!closestVariant || closestVariant === variant) return variant
  return closestVariant
}

function fontIdToUuid(fontId: string) {
  switch (fontBackend(fontId)) {
    case ":google": return googleFontIdToUuid(fontId)
    case ":custom": return customFontIdToUuid(fontId)
    case ":builtin": return uuid.zero
  }
}

function fontIdToAssetId(fontId: string, fontVariantId: string, fontWeight: number, fontStyle: string) {
  switch (fontBackend(fontId)) {
    case ":google": return fontId
    case ":custom": {
      const fontUuid = customFontIdToUuid(fontId)
      const matchingFont = Array.from(fonts).find(([, font]) =>
        font.fontId === fontUuid &&
        str(font.fontWeight) === str(fontWeight) &&
        font
      )
      return matchingFont?.ttfFileId
    }
    case ":builtin": {
      const variant = fontDbData(fontId, fontVariantId, fontWeight, fontStyle)
      return variant?.ttfUrl
    }
  }
}

export function updateTextLayout(id: string) {
  if (!wasm.contextInitialized) return
  const shapeIdBuffer = uuid.getU32(id)
  h.call(wasm.internalModule, "_update_shape_text_layout_for",
    shapeIdBuffer[0], shapeIdBuffer[1], shapeIdBuffer[2], shapeIdBuffer[3])
}

function storeFontBuffer(fontData: any, fontArrayBuffer: ArrayBuffer, emoji: boolean, fallback: boolean) {
  const fontIdBuffer = fontData.familyIdBuffer
  const size = fontArrayBuffer.byteLength
  const ptr = h.call(wasm.internalModule, "_alloc_bytes", size)
  const heap = gobj.get(wasm.internalModule, "HEAPU8")
  const mem = new Uint8Array(heap.buffer, ptr, size)

  mem.set(new Uint8Array(fontArrayBuffer))
  h.call(wasm.internalModule, "_store_font",
    fontIdBuffer[0], fontIdBuffer[1], fontIdBuffer[2], fontIdBuffer[3],
    fontData.weight, fontData.style, emoji, fallback)
  return true
}

const fetching = new Set<string>()

function fetchFont(fontData: any, fontUrl: string, emoji: boolean, fallback: boolean) {
  if (fetching.has(fontUrl)) return null
  fetching.add(fontUrl)

  return {
    key: fontUrl,
    callback: () =>
      http.send({ method: "get", uri: fontUrl, responseType: "buffer" }).pipe(
        rx.map(({ body }: any) => {
          fetching.delete(fontUrl)
          storeFontBuffer(fontData, body, emoji, fallback)
        }),
        rx.catch((cause: any) => {
          fetching.delete(fontUrl)
          log.error("Could not fetch font", { fontUrl, cause })
          return rx.empty()
        })
      )
  }
}

function googleFontTtfUrl(fontId: string, fontVariantId: string, fontWeight: number, fontStyle: string) {
  const variant = fontDbData(fontId, fontVariantId, fontWeight, fontStyle)
  if (!variant?.ttfUrl) return null
  return str.replace(variant.ttfUrl, "https://fonts.gstatic.com/s/", u.join(cf.publicUri, "internal/gfonts/font/"))
}

function fontIdToTtfUrl(fontId: string, assetId: string, fontVariantId: string, fontWeight: number, fontStyle: string) {
  switch (fontBackend(fontId)) {
    case ":google": return googleFontTtfUrl(fontId, fontVariantId, fontWeight, fontStyle)
    case ":custom": return u.join(cf.publicUri, "assets/by-id/", assetId)
    case ":builtin": return u.join(cf.publicUri, "fonts/", assetId)
  }
}

export function fontStored(fontData: any, emoji: boolean) {
  const idBuffer = uuid.getU32(fontData.wasmId)
  if (!idBuffer) return false
  return h.call(wasm.internalModule, "_is_font_uploaded",
    idBuffer[0], idBuffer[1], idBuffer[2], idBuffer[3],
    fontData.weight, fontData.style, emoji) !== 0
}

function storeFontId(fontData: any, assetId: string, emoji: boolean, fallback: boolean) {
  if (!assetId) return
  const uri = fontIdToTtfUrl(
    fontData.fontId, assetId, fontData.fontVariantId,
    fontData.weight, fontData.styleName
  )
  const idBuffer = uuid.getU32(fontData.wasmId)
  const fontDataWithBuffer = { ...fontData, familyIdBuffer: idBuffer }
  if (!fontStored(fontDataWithBuffer, emoji)) {
    fetchFont(fontDataWithBuffer, uri, emoji, fallback)
  }
}

export function serializeFontStyle(fontStyle: string) {
  switch (fontStyle) {
    case "normal": return 0
    case "regular": return 0
    case "italic": return 1
    default: return 0
  }
}

export function normalizeFontId(fontId: string) {
  try {
    if (str.startsWith(fontId, "gfont-")) {
      return googleFontIdToUuid(fontId)
    }
    const noPrefix = fontId.substring(fontId.indexOf("-") + 1)
    if (!noPrefix || typeof noPrefix !== "string" || str.isBlank(noPrefix)) {
      return uuid.zero
    }
    return uuid.parse(noPrefix)
  } catch {
    return uuid.zero
  }
}

export function normalizeSpanFont(span: any, paragraph: any) {
  const fontId = span.fontId
  const fontVariantId = span.fontVariantId
  const fontWeightFallback = span.fontWeight || paragraph.fontWeight
  const fontStyleFallback = span.fontStyle || paragraph.fontStyle
  const fontData = fontDbData(fontId, fontVariantId, fontWeightFallback, fontStyleFallback)
  return {
    ...span,
    fontVariantId: fontData?.id || fontVariantId,
    fontWeight: fontData?.weight || fontWeightFallback,
    fontStyle: fontData?.style || fontStyleFallback,
  }
}

export function normalizeParagraphFont(paragraph: any) {
  const fontId = paragraph.fontId
  const fontVariantId = paragraph.fontVariantId
  const fontWeightFallback = paragraph.fontWeight
  const fontStyleFallback = paragraph.fontStyle
  const fontData = fontDbData(fontId, fontVariantId, fontWeightFallback, fontStyleFallback)
  return {
    ...paragraph,
    fontVariantId: fontData?.id || fontVariantId,
    fontWeight: fontData?.weight || fontWeightFallback,
    fontStyle: fontData?.style || fontStyleFallback,
  }
}

export function serializeFontSize(fontSize: number | string) {
  if (typeof fontSize === "number") return fontSize
  if (typeof fontSize === "string") return d.parseDouble(fontSize) || defaultFontSize
  return defaultFontSize
}

export function serializeFontWeight(fontWeight: number | string) {
  if (typeof fontWeight === "number") return fontWeight
  const fontWeightStr = str(fontWeight)
  if (/\d+/.test(fontWeightStr)) {
    return Number(fontWeightStr)
  }
  if (str.includes(fontWeightStr, "bold")) return 700
  if (str.includes(fontWeightStr, "black")) return 900
  if (str.includes(fontWeightStr, "extrabold")) return 800
  if (str.includes(fontWeightStr, "extralight")) return 200
  if (str.includes(fontWeightStr, "light")) return 300
  if (str.includes(fontWeightStr, "medium")) return 500
  if (str.includes(fontWeightStr, "semibold")) return 600
  if (str.includes(fontWeightStr, "thin")) return 100
  return 400
}

export function serializeLineHeight(lineHeight: number | string, defaultValue = defaultLineHeight) {
  if (typeof lineHeight === "number") return lineHeight
  if (typeof lineHeight === "string") return d.parseDouble(lineHeight) || defaultValue
  return defaultValue
}

export function serializeLetterSpacing(letterSpacing: number | string) {
  if (typeof letterSpacing === "number") return letterSpacing
  if (typeof letterSpacing === "string") return d.parseDouble(letterSpacing) || defaultLetterSpacing
  return defaultLetterSpacing
}

export function normalizeFontVariant(fontVariantId: string | null) {
  if (!fontVariantId || str.isBlank(fontVariantId)) return "regular"
  return fontVariantId
}

export function makeFontData(font: any) {
  const fontId = font.fontId
  const fontVariantId = font.fontVariantId
  const normalizedVariantId = fontVariantId
    ? str.lower(fontVariantId).replace(/\s+/g, "")
    : null
  const fontWeightFallback = font.fontWeight || 400
  const fontStyleFallback = font.fontStyle || "normal"
  const emoji = font.isEmoji || false
  const fallback = font.isFallback || false
  const fontData = fontDbData(fontId, normalizedVariantId, fontWeightFallback, fontStyleFallback)
  const wasmId = fontIdToUuid(fontId)
  const rawWeight = fontData?.weight || fontWeightFallback
  const weight = serializeFontWeight(rawWeight)
  const style = str.includes(normalizedVariantId || "", "italic")
    ? "italic"
    : str.includes(rawWeight, "italic")
      ? "italic"
      : fontStyleFallback
  const variantId = fontData?.id || normalizedVariantId
  const assetId = fontIdToAssetId(fontId, variantId, rawWeight, style)

  return {
    wasmId,
    fontId,
    fontVariantId: variantId,
    style: serializeFontStyle(style),
    styleName: style,
    weight,
    emoji,
    fallback,
    assetId,
  }
}

export function storeFont(font: any) {
  const { assetId, emoji, fallback } = makeFontData(font)
  storeFontId(makeFontData(font), assetId, emoji, fallback)
}

export function loadFallbackFontsForEditor(fontsList: any[]) {
  fontsList.forEach((font) => {
    fonts.ensureLoaded(font.fontId, font.fontVariantId)
  })
}

export function getContentFonts(content: any) {
  const paragraphSet = content.children?.[0]
  const paragraphs = paragraphSet?.children

  const result = new Set<any>()
  for (const paragraph of paragraphs) {
    for (const child of paragraph.children) {
      if (!txt.isTextNode(child)) continue

      const resolvedFontId = child.fontId || txt.defaultTypography.fontId
      const resolvedVariantId = child.fontVariantId || txt.defaultTypography.fontVariantId
      const fontWeightFallback = child.fontWeight || txt.defaultTypography.fontWeight || 400
      const fontStyleFallback = child.fontStyle || txt.defaultTypography.fontStyle || "normal"
      const fontData = fontDbData(resolvedFontId, resolvedVariantId, fontWeightFallback, fontStyleFallback)

      result.add({
        fontId: resolvedFontId,
        fontVariantId: fontData?.id || fontData?.name || resolvedVariantId,
        fontWeight: fontData?.weight || fontWeightFallback,
        fontStyle: fontData?.style || fontStyleFallback,
      })
    }
  }
  return result
}

export function storeFonts(fontsList: any[]) {
  return fontsList.filter((font) => storeFont(font))
}

export function addEmojiFont(fontsList: any[]) {
  return [
    ...fontsList,
    {
      fontId: "gfont-noto-color-emoji",
      fontVariantId: "regular",
      style: 0,
      weight: 400,
      isEmoji: true,
      isFallback: true,
    },
  ]
}

const notoFonts: Record<string, any> = {
  japanese: { fontId: "gfont-noto-sans-jp", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  chinese: { fontId: "gfont-noto-sans-sc", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  korean: { fontId: "gfont-noto-sans-kr", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  arabic: { fontId: "gfont-noto-sans-arabic", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  cyrillic: { fontId: "gfont-noto-sans", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  greek: { fontId: "gfont-noto-sans", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  hebrew: { fontId: "gfont-noto-sans-hebrew", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  thai: { fontId: "gfont-noto-sans-thai", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  devanagari: { fontId: "gfont-noto-sans", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  tamil: { fontId: "gfont-noto-sans-tamil", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  latinExt: { fontId: "gfont-noto-sans", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  vietnamese: { fontId: "gfont-noto-sans", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  armenian: { fontId: "gfont-noto-sans-armenian", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  bengali: { fontId: "gfont-noto-sans-bengali", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  cherokee: { fontId: "gfont-noto-sans-cherokee", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  ethiopic: { fontId: "gfont-noto-sans-ethiopic", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  georgian: { fontId: "gfont-noto-sans-georgian", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  gujarati: { fontId: "gfont-noto-sans-gujarati", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  gurmukhi: { fontId: "gfont-noto-sans-gurmukhi", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  khmer: { fontId: "gfont-noto-sans-khmer", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  lao: { fontId: "gfont-noto-sans-lao", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  malayalam: { fontId: "gfont-noto-sans-malayalam", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  myanmar: { fontId: "gfont-noto-sans-myanmar", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  sinhala: { fontId: "gfont-noto-sans-sinhala", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  telugu: { fontId: "gfont-noto-sans-telugu", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  tibetan: { fontId: "gfont-noto-serif-tibetan", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  javanese: { fontId: "gfont-noto-sans-javanese", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  kannada: { fontId: "gfont-noto-sans-kannada", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  oriya: { fontId: "gfont-noto-sans-oriya", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  mongolian: { fontId: "gfont-noto-sans-mongolian", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  syriac: { fontId: "gfont-noto-sans-syriac", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  tifinagh: { fontId: "gfont-noto-sans-tifinagh", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  coptic: { fontId: "gfont-noto-sans-coptic", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  olChiki: { fontId: "gfont-noto-sans-ol-chiki", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  vai: { fontId: "gfont-noto-sans-vai", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  shavian: { fontId: "gfont-noto-sans-shavian", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  osmanya: { fontId: "gfont-noto-sans-osmanya", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  runic: { fontId: "gfont-noto-sans-runic", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  oldItalic: { fontId: "gfont-noto-sans-old-italic", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  brahmi: { fontId: "gfont-noto-sans-brahmi", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  modi: { fontId: "gfont-noto-sans-modi", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  soraSompeng: { fontId: "gfont-noto-sans-sora-sompeng", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  bamum: { fontId: "gfont-noto-sans-bamum", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  meroitic: { fontId: "gfont-noto-sans-meroitic", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  symbols: { fontId: "gfont-noto-sans-symbols", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  symbols2: { fontId: "gfont-noto-sans-symbols-2", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
  music: { fontId: "gfont-noto-music", fontVariantId: "regular", style: 0, weight: 400, isFallback: true },
}

export function addNotoFonts(fontsList: any[], languages: string[]) {
  return languages.reduce((acc, lang) => {
    const font = notoFonts[lang]
    if (font) {
      return [...acc, font]
    }
    return acc
  }, fontsList)
}
