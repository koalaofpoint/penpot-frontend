// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react"
import { useCallback, useRef, useEffect, useState, useMemo } from "react"
import * as d from "app.common.data"
import * as dm from "app.common.data.macros"
import * as gpt from "app.common.geom.point"
import * as gsh from "app.common.geom.shapes"
import * as gst from "app.common.geom.shapes.text"
import * as mth from "app.common.math"
import * as legacyTxt from "app.common.text"
import * as cf from "app.config"
import * as dw from "app.main.data.workspace"
import * as dwt from "app.main.data.workspace.texts"
import * as refs from "app.main.refs"
import * as st from "app.main.store"
import * as cur from "app.main.ui.css-cursors"
import * as sts from "app.main.ui.shapes.text.styles"
import * as dom from "app.util.dom"
import * as kbd from "app.util.keyboard"
import * as obj from "app.util.object"
import * as ted from "app.util.text-editor"
import * as events from "goog.events"
import * as draft from "@penpot/draft-js"

// Block Component
interface BlockComponentProps {
  blockProps: any
}

const BlockComponent: React.FC<BlockComponentProps> = ({ blockProps }) => {
  const data = blockProps?.data
  const style = sts.generateParagraphStyles(blockProps?.shape, data)
  const dir = data?.textDirection || "auto"

  return (
    <div style={style} dir={dir}>
      <draft.EditorBlock {...blockProps} />
    </div>
  )
}

// Selection Component
interface SelectionComponentProps {
  children: React.ReactNode
}

const SelectionComponent: React.FC<SelectionComponentProps> = ({ children }) => {
  return (
    <span style={{ background: "#ccc", display: "inline-block" }}>
      {children}
    </span>
  )
}

function renderBlock(block: any, shape: any) {
  const type = ted.getEditorBlockType(block)
  if (type === "unstyled") {
    return {
      editable: true,
      component: BlockComponent,
      props: {
        data: ted.getEditorBlockData(block),
        shape: shape,
      },
    }
  }
  return null
}

function stylesFn(shape: any, styles: any, content: any) {
  const text = content.getText?.() || ""
  const data = text === ""
    ? content.getData?.()?.toJS?.() || {}
    : legacyTxt.stylesToAttrs(styles)
  return sts.generateTextStyles(shape, data, { showText: false })
}

const defaultDecorator = ted.createDecorator("PENPOT_SELECTION", SelectionComponent)
const emptyEditorState = ted.createEditorState(null, defaultDecorator)

function getBlocksToSetup(blockChanges: any[]) {
  return blockChanges.filter(([, v]) => v.old === undefined).map(([k]) => k)
}

function getBlocksToAddStyles(blockChanges: any[]) {
  return blockChanges.filter(([, v]) => v.old !== v.new && v.old === "").map(([k]) => k)
}

function shapeToJustify({ content }: any) {
  switch (d.nilm(content?.verticalAlign || "top")) {
    case "center": return "center"
    case "top": return "flex-start"
    case "bottom": return "flex-end"
    default: return nil
  }
}

interface TextShapeEditHtmlProps {
  shape: any
}

export const TextShapeEditHtml: React.FC<TextShapeEditHtmlProps> = ({ shape }) => {
  const { id, content } = shape

  const stateMap = refs.workspaceEditorState.deref()
  const state = stateMap[id] || emptyEditorState
  const selfRef = useRef<HTMLDivElement>(null)

  const textModifierRef = useMemo(
    () => refs.workspaceTextModifierById(id),
    [id]
  )
  const textModifier = textModifierRef.deref()

  const shape2 = textModifier ? dwt.applyTextModifier(shape, textModifier) : shape

  const [blurred, setBlurred] = useState(false)

  const onKeyUp = useCallback((event: Event) => {
    dom.stopPropagation(event)
    if (kbd.esc(event)) {
      st.emit("interrupt", dw.clearEditionMode())
    }
  }, [])

  const onMount = useCallback(() => {
    const keys = [events.listen(document, "keyup", onKeyUp)]
    st.emit(dwt.initializeEditorState(shape2, defaultDecorator), dwt.selectAll(shape2))
    return () => {
      st.emit(dwt.finalizeEditorState())
      keys.forEach((key) => events.unlistenByKey(key))
    }
  }, [shape2, onKeyUp])

  const onBlur = useCallback(
    (event: React.FocusEvent) => {
      const isEmpty = ted.isCurrentEmpty(state)
      dom.stopPropagation(event)
      dom.preventDefault(event)
      if (!isEmpty) {
        st.emit(dwt.finalizeEditorState())
        st.emit(dwt.initializeEditorState(shape2, defaultDecorator))
      }
      setBlurred(true)
    },
    [shape2, state]
  )

  const onFocus = useCallback(() => {
    setBlurred(false)
  }, [])

  const prevValue = useRef(state)

  useEffect(() => {
    prevValue.current = state
  }, [state])

  const handleChange = useCallback(
    (state: any) => {
      const oldState = prevValue.current
      if (state && oldState) {
        const blockChanges = ted.getContentChanges(oldState, state)
        const prevData = ted.getEditorCurrentInlineStyles(oldState)
        const blockToSetup = getBlocksToSetup(blockChanges)
        const blockToAddStyles = getBlocksToAddStyles(blockChanges)
        return state
          .then(ted.setupBlockStyles(blockToSetup, prevData))
          .then(ted.applyBlockStylesToContent(blockToAddStyles))
      }
      return state
    },
    []
  )

  const onChange = useCallback(
    (val: any) => {
      const prevVal = prevValue.current
      const styleOverride = ted.getStyleOverride(prevVal)
      const keepStyle =
        styleOverride &&
        ted.contentEquals(prevVal, val) &&
        ted.selectionEquals(prevVal, val)

      let newVal = handleChange(val)
      if (blurred) {
        newVal = ted.addEditorBlurSelection(newVal)
      } else {
        newVal = ted.removeEditorBlurSelection(newVal)
      }
      if (keepStyle) {
        newVal = ted.setStyleOverride(newVal, styleOverride)
      }
      st.emit(dwt.updateEditorState(shape2, newVal))
    },
    [shape2, handleChange, blurred]
  )

  const onEditor = useCallback((editor: any) => {
    st.emit(dwt.updateEditor(editor))
    if (editor) {
      dom.addClass(dom.getElementByClass("public-DraftEditor-content"), "mousetrap")
      editor.focus?.()
    }
  }, [])

  const handleReturn = useCallback(
    (_: any, state: any) => {
      const style = ted.getEditorCurrentBlockData(state)
      const newState = ted.insertText(state, "\n", style)
      st.emit(dwt.updateEditorState(shape2, handleChange(newState)))
      return "handled"
    },
    [shape2, handleChange]
  )

  const onPointerDown = useCallback(
    (event: React.PointerEvent) => {
      if (dom.classList(dom.getTarget(event), "DraftEditor-root")) {
        st.emit(dwt.cursorToEnd(shape2))
      }
      st.emit(dwt.focusEditor())
    },
    [shape2]
  )

  const handlePastedText = useCallback(
    (text: string) => {
      if (text.length === 0) return "handled"
      const currentBlockStyles = ted.getEditorCurrentBlockData(state)
      const inlineStyles = ted.getEditorCurrentInlineStyles(state)
      const style = { ...currentBlockStyles, ...inlineStyles }
      const newState = ted.insertText(state, text, style)
      st.emit(dwt.updateEditorState(shape2, handleChange(newState)))
      return "handled"
    },
    [shape2, state, handleChange]
  )

  useLayoutEffect(onMount)

  const classNames = [cur.getDynamic("text", shape.rotation), "text-editor"]

  return (
    <div
      ref={selfRef}
      className={classNames.join(" ")}
      style={{
        width: shape.width,
        height: shape.height,
        opacity: blurred ? 0 : undefined,
      }}
      onPointerDown={onPointerDown}
    >
      <draft.Editor
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        handleReturn={handleReturn}
        stripPastedStyles
        handlePastedText={handlePastedText}
        customStyleFn={(styles: any) => stylesFn(shape2, styles, draft)}
        blockRendererFn={(block: any) => renderBlock(block, shape2)}
        ref={onEditor}
        editorState={state}
        style={{ border: "1px solid red" }}
      />
    </div>
  )
}

function translatePointFromViewport(pt: any, viewport: any, zoom: number) {
  if (!viewport) return null
  const vbox = viewport.viewBox.baseVal
  const box = gpt.point(vbox.x, vbox.y)
  const zoomPt = gpt.point(zoom)
  return gpt.subtract(pt, box).multiply(zoomPt)
}

interface TextEditorSvgProps {
  shape: any
  modifiers: any
}

export const TextEditorSvg: React.FC<TextEditorSvgProps> = ({ shape, modifiers }) => {
  const shapeId = dm.getProp(shape, "id")
  const modifiersForShape = dm.getIn(modifiers, [shapeId, "modifiers"])
  const clipId = `text-edition-clip${shapeId}`

  const textModifierRef = useMemo(
    () => refs.workspaceTextModifierById(shapeId),
    [shapeId]
  )
  const textModifier = textModifierRef.deref()

  const maybeZoom = cf.checkBrowser?.(":safari-16")
    ? refs.selectedZoom.deref()
    : null

  let shape2 = shape
  if (textModifier) {
    shape2 = dwt.applyTextModifier(shape2, textModifier)
  }
  if (modifiersForShape) {
    shape2 = gsh.transformShape(shape2, modifiersForShape)
  }

  const bounds = gst.shapeToRect(shape2)
  const x = mth.min(dm.getProp(bounds, "x"), dm.getProp(shape2, "x"))
  const y = mth.min(dm.getProp(bounds, "y"), dm.getProp(shape2, "y"))
  const width = mth.max(dm.getProp(bounds, "width"), dm.getProp(shape2, "width"))
  const height = mth.max(dm.getProp(bounds, "height"), dm.getProp(shape2, "height"))

  const style: any = { pointerEvents: "all" }

  if (!cf.checkBrowser?.(":safari")) {
    style.transform = `translate(${dm.getProp(shape2, "x") - x}px, ${dm.getProp(shape2, "y") - y}px)`
  }

  if (cf.checkBrowser?.(":safari-17")) {
    style.height = "100%"
    style.display = "flex"
    style.flexDirection = "column"
    style.justifyContent = shapeToJustify(shape2)
  }

  if (cf.checkBrowser?.(":safari-16")) {
    style.position = "fixed"
    style.left = 0
    style.top = dm.getProp(shape2, "y") - y
    style.transformOrigin = "top left"
    style.transform = maybeZoom ? `scale(${maybeZoom})` : undefined
  }

  return (
    <g className="text-editor" clipPath={`url(#${clipId})`} transform={gsh.transformMatrix(shape2)}>
      <defs>
        <clipPath id={clipId}>
          <rect x={x} y={y} width={width} height={height} />
        </clipPath>
      </defs>

      <foreignObject x={x} y={y} width={width} height={height}>
        <div style={style}>
          <TextShapeEditHtml shape={shape2} />
        </div>
      </foreignObject>
    </g>
  )
}
