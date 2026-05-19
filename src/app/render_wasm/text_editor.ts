// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as uuid from "app/common/uuid"
import * as h from "app/render_wasm/helpers"
import * as mem from "app/render_wasm/mem"
import * as wasm from "app/render_wasm/wasm"

export function textEditorStart(id: string): void {
  if (!wasm.contextInitialized) return

  const buffer = uuid.getU32(id)
  h.call(wasm.internalModule, "_text_editor_start", buffer[0], buffer[1], buffer[2], buffer[3])
}

export function textEditorSetCursorFromPoint(x: number, y: number): void {
  if (!wasm.contextInitialized) return
  h.call(wasm.internalModule, "_text_editor_set_cursor_from_point", x, y)
}

export function textEditorUpdateBlink(timestampMs: number): void {
  if (!wasm.contextInitialized) return
  h.call(wasm.internalModule, "_text_editor_update_blink", timestampMs)
}

export function textEditorRenderOverlay(): void {
  if (!wasm.contextInitialized) return
  h.call(wasm.internalModule, "_text_editor_render_overlay")
}

export function textEditorPollEvent(): any {
  if (!wasm.contextInitialized) return null
  return h.call(wasm.internalModule, "_text_editor_poll_event")
}

export function textEditorInsertText(text: string): void {
  if (!wasm.contextInitialized) return

  const encoder = new TextEncoder()
  const buf = encoder.encode(text)
  const heapu8 = mem.getHeapU8()
  const size = mem.size(buf)
  const offset = mem.alloc(size)

  mem.writeBuffer(offset, heapu8, buf)
  h.call(wasm.internalModule, "_text_editor_insert_text")
  mem.free()
}

export function textEditorDeleteBackward(): void {
  if (!wasm.contextInitialized) return
  h.call(wasm.internalModule, "_text_editor_delete_backward")
}

export function textEditorDeleteForward(): void {
  if (!wasm.contextInitialized) return
  h.call(wasm.internalModule, "_text_editor_delete_forward")
}

export function textEditorInsertParagraph(): void {
  if (!wasm.contextInitialized) return
  h.call(wasm.internalModule, "_text_editor_insert_paragraph")
}

export function textEditorMoveCursor(direction: number, extendSelection: boolean): void {
  if (!wasm.contextInitialized) return
  h.call(wasm.internalModule, "_text_editor_move_cursor", direction, extendSelection ? 1 : 0)
}

export function textEditorSelectAll(): void {
  if (!wasm.contextInitialized) return
  h.call(wasm.internalModule, "_text_editor_select_all")
}

export function textEditorStop(): void {
  if (!wasm.contextInitialized) return
  h.call(wasm.internalModule, "_text_editor_stop")
}

export function textEditorIsActive(): boolean {
  if (!wasm.contextInitialized) return false
  return h.call(wasm.internalModule, "_text_editor_is_active") !== 0
}

export function textEditorExportContent(): any {
  if (!wasm.contextInitialized) return null

  const ptr = h.call(wasm.internalModule, "_text_editor_export_content")
  if (!ptr || ptr === 0) return null

  const jsonStr = mem.readNullTerminatedString(ptr)
  mem.free()
  return JSON.parse(jsonStr)
}

export function textEditorExportSelection(): string | null {
  if (!wasm.contextInitialized) return null

  const ptr = h.call(wasm.internalModule, "_text_editor_export_selection")
  if (!ptr || ptr === 0) return null

  const text = mem.readNullTerminatedString(ptr)
  mem.free()
  return text
}

export function textEditorGetActiveShapeId(): any {
  if (!wasm.contextInitialized) return null

  try {
    const byteOffset = mem.alloc(16)
    const u32Offset = mem.toOffset32(byteOffset)
    const heap = mem.getHeapU32()

    h.call(wasm.internalModule, "_text_editor_get_active_shape_id", byteOffset)

    const a = heap[u32Offset]
    const b = heap[u32Offset + 1]
    const c = heap[u32Offset + 2]
    const d = heap[u32Offset + 3]

    mem.free()

    if (a !== 0 || b !== 0 || c !== 0 || d !== 0) {
      return uuid.fromUnsignedParts(a, b, c, d)
    }
    return null
  } catch (e) {
    console.error("[text-editor-get-active-shape-id] Error:", e)
    return null
  }
}

export interface Selection {
  anchorPara: number
  anchorOffset: number
  focusPara: number
  focusOffset: number
}

export function textEditorGetSelection(): Selection | null {
  if (!wasm.contextInitialized) return null

  const byteOffset = mem.alloc(16)
  const u32Offset = mem.toOffset32(byteOffset)
  const heap = mem.getHeapU32()

  const active = h.call(wasm.internalModule, "_text_editor_get_selection", byteOffset)

  try {
    if (active === 1) {
      return {
        anchorPara: heap[u32Offset],
        anchorOffset: heap[u32Offset + 1],
        focusPara: heap[u32Offset + 2],
        focusOffset: heap[u32Offset + 3],
      }
    }
    return null
  } finally {
    mem.free()
  }
}

interface ShapeTextContent {
  [shapeId: string]: any
}

const shapeTextContents: { current: ShapeTextContent } = {
  current: {}
}

function mergeExportedTextsIntoContent(content: any, exportedTexts: any[][]): any {
  const paraSet = content.children?.[0]
  if (!paraSet) return content

  const origParas = paraSet.children || []
  const numOrig = origParas.length
  const lastOrigPara = origParas.length > 0 ? origParas[origParas.length - 1] : null
  const templateSpan = lastOrigPara?.children?.length > 0
    ? lastOrigPara.children[lastOrigPara.children.length - 1]
    : null

  const newParas = exportedTexts.map((exportedSpanTexts, paraIdx) => {
    const origPara = paraIdx < numOrig
      ? origParas[paraIdx]
      : lastOrigPara ? { ...lastOrigPara, children: undefined } : null

    if (!origPara) return null

    const origSpans = origPara.children || []
    const numOrigSpans = origSpans.length
    const lastOrigSpan = origSpans.length > 0 ? origSpans[origSpans.length - 1] : null

    const newChildren = exportedSpanTexts.map((newText, spanIdx) => {
      const origSpan = spanIdx < numOrigSpans
        ? origSpans[spanIdx]
        : lastOrigSpan || templateSpan

      return { ...origSpan, text: newText }
    })

    return { ...origPara, children: newChildren }
  }).filter(Boolean)

  const newParaSet = { ...paraSet, children: newParas }
  return { ...content, children: [newParaSet] }
}

export function textEditorSyncContent(): { shapeId: any; content: any } | null {
  if (!wasm.contextInitialized || !textEditorIsActive()) return null

  const shapeId = textEditorGetActiveShapeId()
  const newTexts = textEditorExportContent()

  if (!shapeId || !newTexts) return null

  const textsClj = (newTexts as any)
  const content = shapeTextContents.current[shapeId]

  if (!content) return null

  const merged = mergeExportedTextsIntoContent(content, textsClj)
  shapeTextContents.current[shapeId] = merged

  return { shapeId, content: merged }
}

export function cacheShapeTextContent(shapeId: string, content: any): void {
  if (content === null || content === undefined) return
  shapeTextContents.current[shapeId] = content
}

export function getCachedContent(shapeId: string): any {
  return shapeTextContents.current[shapeId]
}

export function updateCachedContent(shapeId: string, content: any): void {
  shapeTextContents.current[shapeId] = content
}

interface NormalizedSelection {
  startPara: number
  startOffset: number
  endPara: number
  endOffset: number
}

function normalizeSelection(sel: Selection): NormalizedSelection {
  if (sel.anchorPara < sel.focusPara ||
      (sel.anchorPara === sel.focusPara && sel.anchorOffset <= sel.focusOffset)) {
    return {
      startPara: sel.anchorPara,
      startOffset: sel.anchorOffset,
      endPara: sel.focusPara,
      endOffset: sel.focusOffset,
    }
  }

  return {
    startPara: sel.focusPara,
    startOffset: sel.focusOffset,
    endPara: sel.anchorPara,
    endOffset: sel.anchorOffset,
  }
}

function paraCharCount(para: any): number {
  if (!para.children) return 0
  return para.children.reduce((sum: number, span: any) => sum + (span.text?.length || 0), 0)
}

function applyAttrsToParagraph(
  para: any,
  selStart: number,
  selEnd: number,
  attrs: any
): any {
  const spans = para.children || []
  const result: any[] = []
  let pos = 0

  for (const span of spans) {
    const text = span.text || ""
    const spanLen = text.length
    const spanEnd = pos + spanLen
    const olStart = Math.max(pos, selStart)
    const olEnd = Math.min(spanEnd, selEnd)
    const hasOverlap = olStart < olEnd

    if (!hasOverlap) {
      result.push(span)
    } else {
      const before = olStart > pos
        ? { ...span, text: text.substring(0, olStart - pos) }
        : null

      const selected = {
        ...span,
        ...attrs,
        text: text.substring(olStart - pos, olEnd - pos)
      }

      const after = olEnd < spanEnd
        ? { ...span, text: text.substring(olEnd - pos) }
        : null

      if (before) result.push(before)
      result.push(selected)
      if (after) result.push(after)
    }

    pos = spanEnd
  }

  return { ...para, children: result }
}

export function applyStyleToSelection(
  attrs: any,
  useShapeFn: (shapeId: string) => void,
  setShapeTextContentFn: (shapeId: string, content: any) => void
): { shapeId: any; content: any } | null {
  if (!wasm.contextInitialized || !textEditorIsActive()) return null

  const shapeId = textEditorGetActiveShapeId()
  const sel = textEditorGetSelection()

  if (!shapeId || !sel) return null

  const content = shapeTextContents.current[shapeId]
  if (!content) return null

  const { startPara, startOffset, endPara, endOffset } = normalizeSelection(sel)
  const collapsed = startPara === endPara && startOffset === endOffset

  const paraSet = content.children?.[0]
  if (!paraSet) return null

  const paras = paraSet.children || []

  if (collapsed) return null

  const newParas = paras.map((para: any, idx: number) => {
    if (idx < startPara || idx > endPara) return para
    if (startPara === endPara) {
      return applyAttrsToParagraph(para, startOffset, endOffset, attrs)
    }
    if (idx === startPara) {
      return applyAttrsToParagraph(para, startOffset, paraCharCount(para), attrs)
    }
    if (idx === endPara) {
      return applyAttrsToParagraph(para, 0, endOffset, attrs)
    }
    return applyAttrsToParagraph(para, 0, paraCharCount(para), attrs)
  })

  const newContent = {
    ...content,
    children: [{ ...paraSet, children: newParas }],
  }

  shapeTextContents.current[shapeId] = newContent
  useShapeFn(shapeId)
  setShapeTextContentFn(shapeId, newContent)

  return { shapeId, content: newContent }
}