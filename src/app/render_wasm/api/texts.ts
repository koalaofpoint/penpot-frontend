// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from "app/common/data"
import * as typesFillsImpl from "app/common/types/fills/impl"
import * as uuid from "app/common/uuid"
import * as f from "app/render_wasm/api/fonts"
import * as h from "app/render_wasm/helpers"
import * as mem from "app/render_wasm/mem"
import * as sr from "app/render_wasm/serializers"
import * as wasm from "app/render_wasm/wasm"

const PARAGRAPH_ATTR_U8_SIZE = 12
const SPAN_ATTR_U8_SIZE = 64
const MAX_TEXT_FILLS = typesFillsImpl.MAX_FILLS

function encodeText(text: string): Uint8Array {
  const encoder = new TextEncoder()
  return encoder.encode(text)
}

function writeSpanFills(offset: number, dview: DataView, fills: any[]): number {
  let newOffset = fills.reduce((offset, fill) => {
    const opacity = fill["fill-opacity"] ?? 1.0
    const color = fill["fill-color"]
    const gradient = fill["fill-color-gradient"]
    const image = fill["fill-image"]

    if (color !== undefined) {
      return typesFillsImpl.writeSolidFill(offset, dview, opacity, color)
    }
    if (gradient !== undefined) {
      return typesFillsImpl.writeGradientFill(offset, dview, opacity, gradient)
    }
    if (image !== undefined) {
      return typesFillsImpl.writeImageFill(offset, dview, opacity, image)
    }
    return offset
  }, offset)

  const paddingFills = Math.max(0, MAX_TEXT_FILLS - fills.length)
  return newOffset + paddingFills * typesFillsImpl.FILL_U8_SIZE
}

function writeParagraph(offset: number, dview: DataView, paragraph: any): number {
  const textAlign = sr.translateTextAlign(paragraph["text-align"])
  const textDirection = sr.translateTextDirection(paragraph["text-direction"])
  const textDecoration = sr.translateTextDecoration(paragraph["text-decoration"])
  const textTransform = sr.translateTextTransform(paragraph["text-transform"])
  const lineHeight = f.serializeLineHeight(paragraph["line-height"])
  const letterSpacing = f.serializeLetterSpacing(paragraph["letter-spacing"])

  let result = offset
  result = mem.writeU8(result, dview, textAlign)
  result = mem.writeU8(result, dview, textDirection)
  result = mem.writeU8(result, dview, textDecoration)
  result = mem.writeU8(result, dview, textTransform)
  result = mem.writeF32(result, dview, lineHeight)
  result = mem.writeF32(result, dview, letterSpacing)
  mem.assertWritten(result, offset, PARAGRAPH_ATTR_U8_SIZE)
  return result
}

function writeSpans(offset: number, dview: DataView, spans: any[], paragraph: any): number {
  const paragraphFontSize = paragraph["font-size"]
  const paragraphFontWeight = f.serializeFontWeight(paragraph["font-weight"])
  const paragraphLineHeight = f.serializeLineHeight(paragraph["line-height"])

  return spans.reduce((offset, span) => {
    const fontStyle = sr.translateFontStyle(span["font-style"] ?? "normal")
    let fontSize = span["font-size"] ?? paragraphFontSize
    fontSize = f.serializeFontSize(fontSize)

    const lineHeight = f.serializeLineHeight(span["line-height"] ?? paragraphLineHeight, paragraphLineHeight)
    const letterSpacing = f.serializeLetterSpacing(span["letter-spacing"])

    let fontWeight = span["font-weight"] ?? paragraphFontWeight
    fontWeight = f.serializeFontWeight(fontWeight)

    const fontId = f.normalizeFontId(span["font-id"] ?? "sourcesanspro")
    const fontFamily = 0

    const textBuffer = encodeText(span["text"] ?? "")
    const textLength = mem.size(textBuffer)
    const fills = (span["fills"] ?? []).slice(0, MAX_TEXT_FILLS)

    let fontVariantId = span["font-variant-id"]
    if (uuid.isUuid(fontVariantId)) {
      fontVariantId = fontVariantId
    } else {
      fontVariantId = uuid.zero
    }

    const textDecoration =
      sr.translateTextDecoration(span["text-decoration"]) ||
      sr.translateTextDecoration(paragraph["text-decoration"]) ||
      sr.translateTextDecoration("none")

    const textTransform =
      sr.translateTextTransform(span["text-transform"]) ||
      sr.translateTextTransform(paragraph["text-transform"]) ||
      sr.translateTextTransform("none")

    const textDirection =
      sr.translateTextDirection(span["text-direction"]) ||
      sr.translateTextDirection(paragraph["text-direction"]) ||
      sr.translateTextDirection("ltr")

    let result = offset
    result = mem.writeU8(result, dview, fontStyle)
    result = mem.writeU8(result, dview, textDecoration)
    result = mem.writeU8(result, dview, textTransform)
    result = mem.writeU8(result, dview, textDirection)
    result = mem.writeF32(result, dview, fontSize)
    result = mem.writeF32(result, dview, lineHeight)
    result = mem.writeF32(result, dview, letterSpacing)
    result = mem.writeU32(result, dview, fontWeight)
    result = mem.writeUuid(result, dview, fontId)
    result = mem.writeI32(result, dview, fontFamily)
    result = mem.writeUuid(result, dview, fontVariantId ?? uuid.zero)
    result = mem.writeI32(result, dview, textLength)
    result = mem.writeI32(result, dview, fills.length)
    mem.assertWritten(result, offset, SPAN_ATTR_U8_SIZE)

    return writeSpanFills(result, dview, fills)
  }, offset)
}

export function writeShapeText(spans: any[], paragraph: any, text: string): void {
  const normalizedParagraph = f.normalizeParagraphFont(paragraph)
  const normalizedSpans = spans.map((s) => f.normalizeSpanFont(s, normalizedParagraph))
  const numSpans = normalizedSpans.length
  const fillsSize = typesFillsImpl.FILL_U8_SIZE * MAX_TEXT_FILLS
  const metadataSize = PARAGRAPH_ATTR_U8_SIZE + numSpans * (SPAN_ATTR_U8_SIZE + fillsSize)

  const textBuffer = encodeText(text)
  const textSize = mem.size(textBuffer)

  const totalSize = 4 + metadataSize + textSize
  const heapu8 = mem.getHeapU8()
  const dview = mem.getDataView()
  const offset = mem.alloc(totalSize)

  let result = offset
  result = mem.writeU32(result, dview, numSpans)
  result = writeParagraph(result, dview, normalizedParagraph)
  result = writeSpans(result, dview, normalizedSpans, normalizedParagraph)
  mem.writeBuffer(result, heapu8, textBuffer)

  h.call(wasm.internalModule, "_set_shape_text_content")
}

const emojiPattern = new RegExp(
  "(?:\\uD83C[\\uDDE6-\\uDDFF]\\uD83C[\\uDDE6-\\uDDFF])|(?:\\uD83C[\\uDF00-\\uDFFF]|\\uD83D[\\uDC00-\\uDEFF])|(?:\\uD83E[\\uDD00-\\uDDFF])|(?:\\uD83D[\\uDE80-\\uDEFF]|\\uD83E[\\uDC00-\\uDCFF])|(?:\\uD83E[\\uDE70-\\uDEFF])|[\\u2600-\\u26FF\\u2700-\\u27BF\\u2300-\\u23FF\\u2B00-\\u2BFF]"
)

const unicodeRanges: Record<string, RegExp> = {
  japanese: /[\u3040-\u30FF\u31F0-\u31FF\uFF66-\uFF9F]/,
  chinese: /[\u4E00-\u9FFF\u3400-\u4DBF]/,
  korean: /[\uAC00-\uD7AF]/,
  arabic: /[\u0600-\u06FF\u0750-\u077F\u0870-\u089F\u08A0-\u08FF]/,
  cyrillic: /[\u0400-\u04FF\u0500-\u052F\u2DE0-\u2DFF\uA640-\uA69F]/,
  greek: /[\u0370-\u03FF\u1F00-\u1FFF]/,
  hebrew: /[\u0590-\u05FF\uFB1D-\uFB4F]/,
  thai: /[\u0E00-\u0E7F]/,
  devanagari: /[\u0900-\u097F\uA8E0-\uA8FF]/,
  tamil: /[\u0B80-\u0BFF]/,
  latinExt: /[\u0100-\u017F\u0180-\u024F]/,
  vietnamese: /[\u1EA0-\u1EF9]/,
  armenian: /[\u0530-\u058F\uFB13-\uFB17]/,
  bengali: /[\u0980-\u09FF]/,
  cherokee: /[\u13A0-\u13FF]/,
  ethiopic: /[\u1200-\u137F]/,
  georgian: /[\u10A0-\u10FF]/,
  gujarati: /[\u0A80-\u0AFF]/,
  gurmukhi: /[\u0A00-\u0A7F]/,
  khmer: /[\u1780-\u17FF\u19E0-\u19FF]/,
  lao: /[\u0E80-\u0EFF]/,
  malayalam: /[\u0D00-\u0D7F]/,
  myanmar: /[\u1000-\u109F\uAA60-\uAA7F]/,
  sinhala: /[\u0D80-\u0DFF]/,
  telugu: /[\u0C00-\u0C7F]/,
  tibetan: /[\u0F00-\u0FFF]/,
  javanese: /[\uA980-\uA9DF]/,
  kannada: /[\u0C80-\u0CFF]/,
  oriya: /[\u0B00-\u0B7F]/,
  mongolian: /[\u1800-\u18AF]/,
  syriac: /[\u0700-\u074F]/,
  tifinagh: /[\u2D30-\u2D7F]/,
  coptic: /[\u2C80-\u2CFF]/,
  olChiki: /[\u1C50-\u1C7F]/,
  vai: /[\uA500-\uA63F]/,
  shavian: /\uD801[\uDC50-\uDC7F]/,
  osmanya: /\uD801[\uDC80-\uDCAF]/,
  runic: /[\u16A0-\u16FF]/,
  oldItalic: /\uD800[\uDF00-\uDF2F]/,
  brahmi: /\uD804[\uDC00-\uDC7F]/,
  modi: /\uD805[\uDE00-\uDE5F]/,
  soraSompeng: /\uD804[\uDCD0-\uDCFF]/,
  bamum: /[\uA6A0-\uA6FF]/,
  meroitic: /\uD802[\uDD80-\uDD9F]/,
  symbols: /[\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\u2B00-\u2BFF]/,
  symbols2: /[\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\u2B00-\u2BFF]/,
  music: /[\u2669-\u267B]|\uD834[\uDD00-\uDD1F]/,
}

export function containsEmoji(text: string): boolean {
  return emojiPattern.test(text)
}

export function collectUsedLanguages(used: Set<string>, text: string): Set<string> {
  const result = new Set(used)
  for (const [lang, pattern] of Object.entries(unicodeRanges)) {
    if (result.has(lang)) continue
    if (pattern.test(text)) {
      result.add(lang)
    }
  }
  return result
}
