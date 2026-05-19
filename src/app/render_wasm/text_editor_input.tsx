// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useRef, useState, useEffect, useCallback } from "react"
import * as gsh from "app/common/geom/shapes"
import * as dwt from "app/main/data/workspace/texts"
import { store } from "app/main/store"
import * as wasmApi from "app/render_wasm/api"
import * as textEditor from "app/render_wasm/text-editor"
import * as dom from "app/util/dom"
import * as str from "cuerdas/core"
import * as events from "goog.events"
import { EventType } from "goog.events"

interface TextEditorInputProps {
  shape: any
  zoom: number
  vbox: { x: number; y: number; width: number; height: number }
}

function syncWasmTextEditorContent(finalize?: boolean) {
  const result = textEditor.textEditorSyncContent()
  if (result) {
    const { shapeId, content } = result
    store.emit(dwt.v2UpdateTextShapeContent(shapeId, content, { updateName: true, finalize }))
  }
}

export const TextEditorInput: React.FC<TextEditorInputProps> = ({ shape, zoom, vbox }) => {
  const contenteditableRef = useRef<HTMLDivElement>(null)
  const [composing, setComposing] = useState(false)

  const shapeBounds = gsh.shapeToRect(shape)
  const screenX = (shapeBounds.x - vbox.x) * zoom
  const screenY = (shapeBounds.y - vbox.y) * zoom
  const screenW = shapeBounds.width * zoom
  const screenH = shapeBounds.height * zoom

  useEffect(() => {
    const node = contenteditableRef.current
    if (node) {
      node.focus()
    }
  }, [])

  useEffect(() => {
    let rafId: number | null = null
    const animate = () => {
      if (textEditor.textEditorIsActive()) {
        wasmApi.requestRender("cursor-blink")
        rafId = requestAnimationFrame(animate)
      }
    }
    animate()

    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [])

  useEffect(() => {
    const onDocKeydown = (e: KeyboardEvent) => {
      if (!textEditor.textEditorIsActive() || composing) return

      const key = e.key
      const ctrl = e.ctrlKey || e.metaKey
      const shift = e.shiftKey

      if (key === "Escape") {
        dom.preventDefault(e)
        syncWasmTextEditorContent(true)
        textEditor.textEditorStop()
        return
      }

      if (ctrl && str.lower(key) === "a") {
        dom.preventDefault(e)
        textEditor.textEditorSelectAll()
        wasmApi.requestRender("text-select-all")
        return
      }

      if (key === "Enter") {
        dom.preventDefault(e)
        textEditor.textEditorInsertParagraph()
        syncWasmTextEditorContent()
        wasmApi.requestRender("text-paragraph")
        return
      }

      if (key === "Backspace") {
        dom.preventDefault(e)
        textEditor.textEditorDeleteBackward()
        syncWasmTextEditorContent()
        wasmApi.requestRender("text-delete-backward")
        return
      }

      if (key === "Delete") {
        dom.preventDefault(e)
        textEditor.textEditorDeleteForward()
        syncWasmTextEditorContent()
        wasmApi.requestRender("text-delete-forward")
        return
      }

      if (key === "ArrowLeft") {
        dom.preventDefault(e)
        textEditor.textEditorMoveCursor(0, shift)
        wasmApi.requestRender("text-cursor-move")
        return
      }

      if (key === "ArrowRight") {
        dom.preventDefault(e)
        textEditor.textEditorMoveCursor(1, shift)
        wasmApi.requestRender("text-cursor-move")
        return
      }

      if (key === "ArrowUp") {
        dom.preventDefault(e)
        textEditor.textEditorMoveCursor(2, shift)
        wasmApi.requestRender("text-cursor-move")
        return
      }

      if (key === "ArrowDown") {
        dom.preventDefault(e)
        textEditor.textEditorMoveCursor(3, shift)
        wasmApi.requestRender("text-cursor-move")
        return
      }

      if (key === "Home") {
        dom.preventDefault(e)
        textEditor.textEditorMoveCursor(4, shift)
        wasmApi.requestRender("text-cursor-move")
        return
      }

      if (key === "End") {
        dom.preventDefault(e)
        textEditor.textEditorMoveCursor(5, shift)
        wasmApi.requestRender("text-cursor-move")
        return
      }
    }

    events.listen(document, EventType.KEYDOWN, onDocKeydown, true)

    return () => {
      events.unlisten(document, EventType.KEYDOWN, onDocKeydown, true)
    }
  }, [composing])

  const onCompositionStart = useCallback(() => {
    setComposing(true)
  }, [])

  const onCompositionEnd = useCallback(
    (event: CompositionEvent) => {
      setComposing(false)
      const data = event.data
      if (data) {
        textEditor.textEditorInsertText(data)
        syncWasmTextEditorContent()
        wasmApi.requestRender("text-composition")
      }
      const node = contenteditableRef.current
      if (node) {
        node.textContent = ""
      }
    },
    []
  )

  const onPaste = useCallback(
    (event: ClipboardEvent) => {
      dom.preventDefault(event)
      const clipboardData = event.clipboardData
      const text = clipboardData?.getData("text/plain")
      if (text && text.length > 0) {
        textEditor.textEditorInsertText(text)
        syncWasmTextEditorContent()
        wasmApi.requestRender("text-paste")
      }
      const node = contenteditableRef.current
      if (node) {
        node.textContent = ""
      }
    },
    []
  )

  const onCopy = useCallback(
    (event: ClipboardEvent) => {
      if (textEditor.textEditorIsActive()) {
        dom.preventDefault(event)
        const selection = textEditor.textEditorGetSelection()
        if (selection) {
          const text = textEditor.textEditorExportSelection()
          if (text) {
            event.clipboardData?.setData("text/plain", text)
          }
        }
      }
    },
    []
  )

  const onInput = useCallback(
    (event: React.FormEvent<HTMLDivElement>) => {
      const nativeEvent = event.nativeEvent as InputEvent
      const inputType = nativeEvent.inputType
      const data = nativeEvent.data

      if (composing || inputType === "insertCompositionText") return

      if (data && data.length > 0) {
        textEditor.textEditorInsertText(data)
        syncWasmTextEditorContent()
        wasmApi.requestRender("text-input")
      }

      const node = contenteditableRef.current
      if (node) {
        node.textContent = ""
      }
    },
    [composing]
  )

  return (
    <div
      ref={contenteditableRef}
      contentEditable
      suppressContentEditableWarning
      onCompositionStart={onCompositionStart}
      onCompositionEnd={onCompositionEnd}
      onInput={onInput}
      onPaste={onPaste}
      onCopy={onCopy}
      id="text-editor-wasm-input"
      style={{
        position: "absolute",
        left: `${screenX}px`,
        top: `${screenY}px`,
        width: `${screenW}px`,
        height: `${screenH}px`,
        opacity: 0,
        overflow: "hidden",
        whiteSpace: "pre",
        cursor: "text",
        zIndex: 10,
      }}
    />
  )
}