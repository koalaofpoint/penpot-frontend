// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react"
import { useCallback, useState, useRef, useEffect, useMemo } from "react"
import * as d from "app.common.data"
import * as dm from "app.common.data.macros"
import * as cfh from "app.common.files.helpers"
import * as gpt from "app.common.geom.point"
import * as gsh from "app.common.geom.shapes"
import * as gsht from "app.common.geom.shapes.text"
import * as mth from "app.common.math"
import * as ctm from "app.common.types.modifiers"
import * as txt from "app.common.types.text"
import * as uuid from "app.common.uuid"
import * as dwt from "app.main.data.workspace.texts"
import * as fonts from "app.main.fonts"
import * as refs from "app.main.refs"
import * as st from "app.main.store"
import * as hooks from "app.main.ui.hooks"
import { HtmlTextShape } from "app.main.ui.shapes.text.html-text"
import * as dom from "app.util.dom"
import * as obj from "app.util.object"
import * as ted from "app.util.text-editor"
import * as tsp from "app.util.text-svg-position"
import * as content from "app.util.text.content"
import * as p from "promesa.core"

function fixPosition(shape: any) {
  if (!shape?.modifiers) return shape

  const shapePrime = gsh.transformShape(shape, shape.modifiers)
  const oldSr = dm.getProp(shape, "selrect")
  const newSr = dm.getProp(shapePrime, "selrect")

  const deltaV = gpt.toVec(gpt.point(newSr), gpt.point(oldSr))
  return gsh.transformShape(shape, ctm.move(shape.modifiers, deltaV)).remove?.("modifiers") || gsh.transformShape(shape, ctm.move(shape.modifiers, deltaV))
}

function updateShapeWithContent(shape: any, contentVal: any, editorContent: any) {
  if (!shape || !editorContent) return shape
  return { ...shape, content: d.txtMerge(contentVal, editorContent) }
}

function updateWithEditorState(shape: any, editorState: any) {
  const contentVal = shape.content
  const editorContent = editorState ? ted.getEditorCurrentContent(editorState).then(ted.exportContent) : null
  return updateShapeWithContent(shape, contentVal, editorContent)
}

function updateWithEditorV2(shape: any, editor: any) {
  const contentVal = shape.content
  const editorContent = content.domToCljs(editor.root)
  return updateShapeWithContent(shape, contentVal, editorContent)
}

function updateTextShape({ growType, id, migrate }: any, node: any) {
  return tsp.calcPositionData(id).then((positionData: any) => {
    if (gsht.overlapsPositionData(shape, positionData)) {
      st.emit(dwt.updatePositionData(id, positionData))
    }

    if (growType === ":auto-height" || growType === ":auto-width") {
      const rect = dom.query(node, ".paragraph-set").getBoundingRect()
      const width = mth.ceil(rect.width)
      const height = mth.ceil(rect.height)

      if (!mth.almostZero(width) && !mth.almostZero(height) && !migrate) {
        st.emit(dwt.resizeText(id, width, height))
      }
    }

    st.emit(dwt.cleanTextModifier(id))
  })
}

function updateTextModifier({ growType, id }: any, node: any) {
  return tsp.calcPositionData(id).then((positionData: any) => {
    const props: any = { positionData }

    if (growType === ":auto-height" || growType === ":auto-width") {
      const size = dom.query(node, ".paragraph-set").getBoundingRect()
      const width = mth.ceil(size.width)
      const height = mth.ceil(size.height)

      if (!mth.almostZero(width) && !mth.almostZero(height)) {
        if (growType === ":auto-width") {
          props.width = width
        }
        if (growType === ":auto-height" || growType === ":auto-width") {
          props.height = height
        }
      }
    }

    st.emit(dwt.updateTextModifier(id, props))
  })
}

interface TextContainerProps {
  shape: any
  onUpdate: (shape: any, node: HTMLElement) => void
}

const TextContainer: React.FC<TextContainerProps> = ({ shape, onUpdate }) => {
  const handleUpdate = useCallback(
    (node: HTMLElement | null) => {
      if (node) {
        onUpdate(shape, node)
      }
    },
    [shape, onUpdate]
  )

  return <HtmlTextShape shape={shape} ref={handleUpdate} growType={shape.growType} />
}

function textPropertiesEqual(shape: any, other: any) {
  if (shape === other) return true
  return (
    shape.growType === other.growType &&
    shape.content === other.content &&
    mth.close(dm.getProp(shape, "x"), dm.getProp(other, "x")) &&
    mth.close(dm.getProp(shape, "y"), dm.getProp(other, "y")) &&
    mth.close(dm.getProp(shape, "width"), dm.getProp(other, "width")) &&
    mth.close(dm.getProp(shape, "height"), dm.getProp(other, "height"))
  )
}

interface TextChangesRendererProps {
  textShapes: any
}

const TextChangesRenderer: React.FC<TextChangesRendererProps> = ({ textShapes }) => {
  const prevTextShapes = hooks.usePrevious(textShapes)

  const [pendingUpdate, setPendingUpdate] = useState<Record<string, string>>({})

  const textChange = useCallback(
    (id: string) => {
      const newShape = textShapes[id]
      const oldShape = prevTextShapes?.[id]
      const remote = newShape?.meta?.sessionId

      if (!remote && !textPropertiesEqual(oldShape, newShape)) return true
      if (!newShape?.positionData) return true
      return false
    },
    [textShapes, prevTextShapes]
  )

  const changedTexts = useMemo(() => {
    const pendingShapes = new Set(Object.values(pendingUpdate))
    return Object.keys(textShapes).filter((id) => pendingShapes.has(id) || textChange(id))
  }, [textShapes, pendingUpdate, textChange])

  const handleUpdateShape = useCallback((shape: any, node: HTMLElement) => {
    const uid = uuid.next()
    setPendingUpdate((prev) => ({ ...prev, [uid]: shape.id }))
    updateTextShape(shape, node).then(() => {
      setPendingUpdate((prev) => {
        const next = { ...prev }
        delete next[uid]
        return next
      })
    })
  }, [])

  return (
    <div className="text-changes-renderer">
      {changedTexts.map(({ id }: any) => (
        <TextContainer key={`text-container-${id}`} shape={textShapes[id]} onUpdate={handleUpdateShape} />
      ))}
    </div>
  )
}

interface TextModifiersRendererProps {
  textShapes: any
}

const TextModifiersRenderer: React.FC<TextModifiersRendererProps> = ({ textShapes }) => {
  const textShapesFixed = useMemo(() => {
    const result: Record<string, any> = {}
    for (const [k, v] of Object.entries(textShapes)) {
      result[k] = fixPosition(v)
    }
    return result
  }, [textShapes])

  const prevTextShapes = hooks.usePrevious(textShapesFixed)

  const textChange = useCallback(
    (id: string) => {
      const newShape = textShapesFixed[id]
      const oldShape = prevTextShapes?.[id]
      return newShape && oldShape && !textPropertiesEqual(oldShape, newShape)
    },
    [textShapesFixed, prevTextShapes]
  )

  const changedTexts = useMemo(() => {
    return Object.keys(textShapesFixed).filter(textChange)
  }, [textShapesFixed, textChange])

  const handleUpdateShape = useCallback(updateTextModifier, [])

  return (
    <div className="text-changes-renderer">
      {changedTexts.map(({ id }: any) => (
        <TextContainer key={`text-container-${id}`} shape={textShapesFixed[id]} onUpdate={handleUpdateShape} />
      ))}
    </div>
  )
}

interface ViewportTextEditingProps {
  shape: any
}

const ViewportTextEditing: React.FC<ViewportTextEditingProps> = ({ shape }) => {
  const shapeId = shape.id

  const workspaceEditorState = refs.workspaceEditorState.deref()
  const workspaceV2EditorState = refs.workspaceV2EditorState.deref()
  const workspaceEditor = refs.workspaceEditor.deref()

  const editorState = workspaceEditorState?.[shapeId]
  const v2EditorState = workspaceV2EditorState?.[shapeId]

  const textModifierRef = useMemo(() => refs.workspaceTextModifierById(shapeId), [shapeId])
  const textModifier = textModifierRef.deref()

  let shape2 = shape
  if (editorState) {
    shape2 = updateWithEditorState(shape2, editorState)
  }
  if (v2EditorState && workspaceEditor) {
    shape2 = updateWithEditorV2(shape2, workspaceEditor)
  }

  if (textModifier) {
    const { width, height } = dwt.applyTextModifier(shape2, textModifier)
    shape2 = { ...shape2, width, height }
  }

  shape2 = hooks.useEqualMemo(shape2)

  const handleUpdateShape = useCallback(updateTextModifier, [])

  useEffect(() => {
    return () => st.emit(dwt.removeTextModifier(shapeId))
  }, [shapeId])

  return <TextContainer shape={shape2} onUpdate={handleUpdateShape} />
}

interface ViewportTextsProps {
  objects: any
  edition: string
  modifiers: any
}

const ViewportTexts: React.FC<ViewportTextsProps> = ({ objects, edition, modifiers }) => {
  const textShapes = useMemo(() => {
    const result: Record<string, any> = {}
    for (const [k, v] of Object.entries(objects)) {
      if (cfh.textShape(v)) {
        result[k] = v
      }
    }
    return result
  }, [objects])

  const textShapesMemo = hooks.useEqualMemo(textShapes)

  const editingShape = useMemo(() => textShapes[edition], [textShapes, edition])
  const editingShapeMemo = hooks.useEqualMemo(editingShape)

  const textShapesChanges = useMemo(() => {
    const result: Record<string, any> = { ...textShapes }
    delete result[edition]
    return result
  }, [textShapes, edition])

  const textShapesModifiers = useMemo(() => {
    const result: Record<string, any> = {}
    for (const [id, mod] of Object.entries(modifiers || {})) {
      const shape = textShapes[id]
      if (shape) {
        result[id] = d.patchObject(shape, mod)
      }
    }
    return result
  }, [modifiers, textShapes])

  useEffect(() => {
    const textNodes: any[] = []
    for (const shape of Object.values(textShapes)) {
      for (const node of txt.nodeSeq(txt.isTextNode, shape.content)) {
        textNodes.push(node)
      }
    }
    const fontIds = new Set(textNodes.map((n) => n.fontId))
    fontIds.forEach((fontId) => fonts.ensureLoaded(fontId))
  }, [textShapes])

  return (
    <>
      {editingShape && <ViewportTextEditing shape={editingShapeMemo} />}
      <TextModifiersRenderer textShapes={textShapesModifiers} />
      <TextChangesRenderer textShapes={textShapesChanges} />
    </>
  )
}

export { TextContainer, TextChangesRenderer, TextModifiersRenderer, ViewportTextEditing, ViewportTexts }
