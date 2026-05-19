// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react"
import { useCallback, useRef, useEffect, useMemo } from "react"
import * as d from "app.common.data"
import * as dm from "app.common.data.macros"
import * as cfh from "app.common.files.helpers"
import * as grc from "app.common.geom.rect"
import * as gsh from "app.common.geom.shapes"
import * as gst from "app.common.geom.shapes.text"
import * as mth from "app.common.math"
import * as color from "app.common.types.color"
import * as txt from "app.common.types.text"
import * as cf from "app.config"
import * as dsh from "app.main.data.helpers"
import * as dw from "app.main.data.workspace"
import * as dwt from "app.main.data.workspace.texts"
import * as features from "app.main.features"
import * as fonts from "app.main.fonts"
import * as refs from "app.main.refs"
import * as st from "app.main.store"
import * as cur from "app.main.ui.css-cursors"
import * as h from "app.main.ui.hooks"
import * as wasmApi from "app.render-wasm.api"
import * as dom from "app.util.dom"
import * as globals from "app.util.globals"
import * as kbd from "app.util.keyboard"
import * as obj from "app.util.object"
import * as content from "app.util.text.content"
import * as styles from "app.util.text.content.styles"
import * as str from "cuerdas.core"

function getContrastColor(backgroundColor: string | null) {
  if (!backgroundColor) return null
  const luminance = color.hexToLum(backgroundColor)
  return luminance > 0.5 ? "#000000" : "#ffffff"
}

function genName(editor: any) {
  if (!editor) return null
  const editorRoot = editor.root
  const result = editorRoot.textContent
  if (result === "") return null
  return result
}

function getFonts(contentVal: any) {
  const extractFn = (node: any) => [node.fontId, node.fontVariantId]
  const defaultFont = extractFn(txt.defaultTypography)
  const fontsInContent = new Set<any>()
  fontsInContent.add(defaultFont)

  function traverse(node: any) {
    if (node.children) {
      for (const child of node.children) {
        traverse(child)
      }
    }
    const fontId = node.fontId
    const fontVariantId = node.fontVariantId
    if (fontId) {
      fontsInContent.add([fontId, fontVariantId])
    }
  }

  traverse(contentVal)
  return fontsInContent
}

function loadFonts(fontsSet: Set<any>) {
  for (const [fontId, variantId] of fontsSet) {
    if (fontId) {
      fonts.ensureLoaded(fontId, variantId)
    }
  }
}

function initializeEventHandlers(
  shapeId: string,
  contentVal: any,
  editorRef: React.RefObject<any>,
  canvasRef: React.RefObject<any>,
  containerRef: React.RefObject<any>,
  textColor: string
) {
  const editorNode = editorRef.current
  const canvasNode = canvasRef.current
  const defaultFont = refs.defaultFont.deref()

  const styleDefaults = styles.getStyleDefaults({
    ...txt.getDefaultTextAttrs(),
    fills: [{ fillColor: textColor, fillOpacity: 1 }],
    ...txt.defaultRootAttrs,
    ...defaultFont,
  })

  const options = {
    styleDefaults,
    allowHTMLPaste: features.activeFeature(st.state, "text-editor/v2-html-paste"),
  }

  const instance = dwt.createEditor(editorNode, canvasNode, options)

  let originalContent = contentVal

  const onKeyUp = (event: KeyboardEvent) => {
    dom.stopPropagation(event)
    if (kbd.esc(event)) {
      st.emit("interrupt", dw.clearEditionMode())
    }
  }

  const onBlur = () => {
    const contentFromDom = content.domToCljs(dwt.getEditorRoot(instance))
    if (contentFromDom) {
      const state = st.state
      const objects = dsh.lookupPageObjects(state)
      const shape = objects[shapeId]
      const currentName = shape?.name
      const generatedName = genName(instance)
      const updateName =
        !originalContent ||
        (currentName && originalContent && currentName === txt.generateShapeName(txt.contentToText(originalContent)))

      st.emit(
        dwt.v2UpdateTextShapeContent(shapeId, contentFromDom, {
          updateName,
          name: generatedName,
          finalize: true,
          saveUndo: false,
        })
      )
    }

    const containerNode = containerRef.current
    dom.setStyle(containerNode, "opacity", "0")
  }

  const onFocus = () => {
    const containerNode = containerRef.current
    dom.setStyle(containerNode, "opacity", "1")
  }

  const onStyleChange = (event: Event) => {
    const eventStyles = styles.getStylesFromEvent(event)
    st.emit(dwt.v2UpdateTextEditorStyles(shapeId, eventStyles))
  }

  const onNeedsLayout = () => {
    const contentFromDom = content.domToCljs(dwt.getEditorRoot(instance))
    if (contentFromDom) {
      st.emit(
        dwt.v2UpdateTextShapeContent(shapeId, contentFromDom, {
          updateName: true,
          saveUndo: false,
        })
      )
    }
  }

  const onChange = () => {
    const isEmpty = dwt.isEmpty(instance)
    const saveUndo = !isEmpty
    const contentFromDom = content.domToCljs(dwt.getEditorRoot(instance))
    if (contentFromDom) {
      st.emit(
        dwt.v2UpdateTextShapeContent(shapeId, contentFromDom, {
          updateName: true,
          saveUndo,
        })
      )
    }
  }

  const onClipboardChange = (event: Event) => {
    const style = (event as any).detail
    st.emit(dw.setClipboardStyle(style))
  }

  globals.document.addEventListener("keyup", onKeyUp)
  instance.addEventListener("focus", onFocus)
  instance.addEventListener("needslayout", onNeedsLayout)
  instance.addEventListener("stylechange", onStyleChange)
  instance.addEventListener("change", onChange)
  instance.addEventListener("clipboardchange", onClipboardChange)

  st.emit(dwt.updateEditor(instance))
  if (contentVal) {
    dwt.setEditorRoot(instance, content.cljsToDom(contentVal))
  }
  if (instance) {
    st.emit(dwt.focusEditor())
  }

  return () => {
    onBlur()
    globals.document.removeEventListener("keyup", onKeyUp)
    instance.removeEventListener("focus", onFocus)
    instance.removeEventListener("needslayout", onNeedsLayout)
    instance.removeEventListener("stylechange", onStyleChange)
    instance.removeEventListener("change", onChange)
    instance.removeEventListener("clipboardchange", onClipboardChange)
    dwt.dispose(instance)
    st.emit(dwt.updateEditor(null))
  }
}

function getColorFromContent(contentVal: any) {
  const fills: any[] = []

  function traverse(node: any) {
    if (node.children) {
      for (const child of node.children) {
        traverse(child)
      }
    }
    if (node.fills) {
      fills.push(...node.fills)
    }
  }

  traverse(contentVal)
  return fills.find((f) => f.fillColor)?.fillColor
}

function getDefaultTextColor({ frame, backgroundColor }: { frame: any; backgroundColor: string | null }) {
  if (frame && !cfh.root(frame) && frame.fills?.length) {
    const fillColor = frame.fills.find((f: any) => f.fillColor)?.fillColor
    if (fillColor) {
      return getContrastColor(fillColor)
    }
    return getContrastColor(backgroundColor)
  }
  return getContrastColor(backgroundColor)
}

interface TextEditorHtmlProps {
  shape: any
  canvasRef: React.RefObject<any>
}

export const TextEditorHtml: React.FC<TextEditorHtmlProps> = ({ shape, canvasRef }) => {
  const { content: contentVal, id: shapeId } = shape
  const fillColor = getColorFromContent(contentVal)

  const editorRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const page = refs.workspacePage.deref()
  const objects = page?.objects
  const frame = cfh.getFrame(objects, shapeId)
  const backgroundColor = page?.background

  const textColor = fillColor || getDefaultTextColor({ frame, backgroundColor }) || color.black

  const fonts = useMemo(() => getFonts(contentVal), [contentVal])

  useEffect(() => {
    loadFonts(fonts)
  }, [fonts])

  useEffect(() => {
    initializeEventHandlers(shapeId, contentVal, editorRef, canvasRef, containerRef, textColor)
  }, [shapeId])

  useEffect(() => {
    const containerNode = containerRef.current
    dom.setStyle(containerNode, "--text-editor-caret-color", textColor)
  }, [textColor])

  const rotationClass = cur.getDynamic("text", shape.rotation)
  const growTypeClass =
    shape.growType === ":fixed"
      ? "grow-type-fixed"
      : shape.growType === ":auto-width"
        ? "grow-type-auto-width"
        : shape.growType === ":auto-height"
          ? "grow-type-auto-height"
          : ""

  const verticalAlign = contentVal?.verticalAlign || "top"
  const alignClass =
    verticalAlign === "center" ? "align-center" : verticalAlign === "bottom" ? "align-bottom" : "align-top"

  return (
    <div
      ref={containerRef}
      className={`${rotationClass} text-editor-container`}
      data-testid="text-editor-container"
      style={{
        width: "var(--editor-container-width)",
        height: "var(--editor-container-height)",
      }}
    >
      <div
        ref={editorRef}
        className={`mousetrap text-editor-content ${growTypeClass} ${alignClass}`}
        data-testid="text-editor-content"
        data-x={dm.getProp(shape, "x")}
        data-y={dm.getProp(shape, "y")}
        contentEditable
        role="textbox"
        aria-multiline
        aria-autocomplete="none"
      />
    </div>
  )
}

function shapeToJustify({ content: contentVal }: any) {
  switch (contentVal?.verticalAlign || "top") {
    case "center":
      return "center"
    case "top":
      return "flex-start"
    case "bottom":
      return "flex-end"
    default:
      return nil
  }
}

function fontFamilyFromFontId(fontId: string) {
  if (str.includes(fontId, "gfont-noto-sans")) {
    const lang = fontId.replace("gfont-noto-sans-", "")
    return lang.length >= 3 ? str.capital(lang) : str.upper(lang)
  }
  return "Noto Color Emoji"
}

interface TextEditorProps {
  shape: any
  modifiers: any
  canvasRef: React.RefObject<any>
}

export const TextEditor: React.FC<TextEditorProps> = ({ shape, modifiers, canvasRef }) => {
  const shapeId = dm.getProp(shape, "id")
  const modifiersForShape = dm.getIn(modifiers, [shapeId, "modifiers"])

  const fallbackFonts = wasmApi.fontsFromTextContent(shape.content, false)
  const fallbackFamilies = fallbackFonts.map((font: any) => fontFamilyFromFontId(font.fontId))

  const clipId = `text-edition-clip${shapeId}`

  const textModifierRef = useMemo(() => refs.workspaceTextModifierById(shapeId), [shapeId])
  const textModifier = textModifierRef.deref()

  const maybeZoom = cf.checkBrowser?.(":safari-16") ? refs.selectedZoom.deref() : null

  let shape2 = shape
  if (textModifier) {
    shape2 = dwt.applyTextModifier(textModifier, shape2)
  }
  if (modifiersForShape) {
    shape2 = gsh.transformShape(modifiersForShape, shape2)
  }

  const renderWasm = features.activeFeature(st.state, "render-wasm/v1")

  let [selrect, transform] = renderWasm
    ? (() => {
        const { width, height } = wasmApi.getTextDimensions(shapeId)
        const selrectTransform = refs.workspaceSelrect.deref()
        const [selrect, transform] = dsh.getSelrect(selrectTransform, shape2)
        const selrectHeight = selrect.height
        const selrectWidth = selrect.width
        const maxWidth = Math.max(width, selrectWidth)
        const maxHeight = Math.max(height, selrectHeight)
        const valign = shape2.content?.verticalAlign
        let y = selrect.y
        if (valign === "bottom") {
          y += selrectHeight - height
        } else if (valign === "center") {
          y += (selrectHeight - height) / 2
        }
        return [{ ...selrect, y, width: maxWidth, height: maxHeight }, transform]
      })()
    : (() => {
        const bounds = gst.shapeToRect(shape2)
        const x = mth.min(dm.getProp(bounds, "x"), dm.getProp(shape2, "x"))
        const y = mth.min(dm.getProp(bounds, "y"), dm.getProp(shape2, "y"))
        const width = mth.max(dm.getProp(bounds, "width"), dm.getProp(shape2, "width"))
        const height = mth.max(dm.getProp(bounds, "height"), dm.getProp(shape2, "height"))
        return [grc.makeRect(x, y, width, height), gsh.transformMatrix(shape2)]
      })()

  const style: any = { pointerEvents: "all" }

  if (renderWasm) {
    style["--editor-container-width"] = `${selrect.width}px`
    style["--editor-container-height"] = `${selrect.height}px`
    style["--fallback-families"] = fallbackFamilies.length > 0 ? fallbackFamilies.join(", ") : "sourcesanspro"
  } else {
    style["--editor-container-width"] = `${selrect.width}px`
    style["--editor-container-height"] = `${selrect.height}px`
  }

  if (!renderWasm && !cf.checkBrowser?.(":safari")) {
    style.transform = `translate(${dm.getProp(shape, "x") - selrect.x}px, ${dm.getProp(shape, "y") - selrect.y}px)`
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
    style.top = dm.getProp(shape, "y") - selrect.y
    style.transformOrigin = "top left"
    if (maybeZoom) {
      style.transform = `scale(${maybeZoom})`
    }
  }

  return (
    <g className="text-editor" clipPath={`url(#${clipId})`} transform={transform} data-testid="text-editor">
      <defs>
        <clipPath id={clipId}>
          <rect x={selrect.x} y={selrect.y} width={selrect.width} height={selrect.height} />
        </clipPath>
      </defs>

      <foreignObject x={selrect.x} y={selrect.y} width={selrect.width} height={selrect.height}>
        <div style={style}>
          <TextEditorHtml shape={shape} canvasRef={canvasRef} />
        </div>
      </foreignObject>
    </g>
  )
}
