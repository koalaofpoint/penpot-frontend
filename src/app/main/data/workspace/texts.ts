// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as editorV2 from '@penpot/text-editor'
import * as attrs from 'app/common/attrs'
import * as d from 'app/common/data'
import * as dm from 'app/common/data/macros'
import * as cfh from 'app/common/files/helpers'
import * as gpt from 'app/common/geom/point'
import * as gsh from 'app/common/geom/shapes'
import * as mth from 'app/common/math'
import * as typesFills from 'app/common/types/fills'
import * as ctm from 'app/common/types/modifiers'
import * as ctl from 'app/common/types/shape/layout'
import * as txt from 'app/common/types/text'
import * as uuid from 'app/common/uuid'
import * as ev from 'app/main/data/event'
import * as dsh from 'app/main/data/helpers'
import * as dwc from 'app/main/data/workspace/common'
import * as dwl from 'app/main/data/workspace/libraries'
import * as dwm from 'app/main/data/workspace/modifiers'
import * as dws from 'app/main/data/workspace/selection'
import * as dwsh from 'app/main/data/workspace/shapes'
import * as dwt from 'app/main/data/workspace/transforms'
import * as dwu from 'app/main/data/workspace/undo'
import * as dwwt from 'app/main/data/workspace/wasm-text'
import * as features from 'app/main/features'
import * as fonts from 'app/main/fonts'
import * as rt from 'app/main/router'
import * as wasmApi from 'app/render-wasm/api'
import * as ted from 'app/util/text-editor'
import * as styles from 'app/util/text/content/styles'
import * as ts from 'app/util/timers'
import * as rx from 'beicon.v2.core'
import * as str from 'cuerdas.core'
import * as ptk from 'potok.v2.core'

import type { Event } from 'potok.v2.core'

// -- V2 Editor Helpers
const createRootFromString = editorV2.createRootFromString
const createRootFromHTML = editorV2.createRootFromHTML
const createEditor = editorV2.create
const setEditorRoot = editorV2.setRoot
const getEditorRoot = editorV2.getRoot
const isEmpty = editorV2.isEmpty
const dispose = editorV2.dispose

// -- Content helpers

function v2ContentHasText(content: any): boolean {
  if (!content) return false
  return txt.nodeSeq(txt.isTextNode, content).some((node: any) =>
    !str.blank(node.text ?? '')
  )
}

// -- Editor

export function updateEditor(editor: any): Event {
  return {
    type: 'update-editor',
    execute: 'update',
    update: function(_: any, state: any) {
      return editor ? d.assoc(state, 'workspace-editor', editor) : d.dissoc(state, 'workspace-editor')
    }
  }
}

export function focusEditor(): Event {
  return {
    type: 'focus-editor',
    execute: 'effect',
    effect: function(_: any, state: any, __: any) {
      const editor = state['workspace-editor']
      const element = editor?.element

      if ((editor as any).focus) {
        ts.schedule(() => ((editor as any).focus()))
      } else if (element && (element as any).focus) {
        ts.schedule(() => ((element as any).focus()))
      }
    }
  }
}

function genName(editor: any): string | null {
  if (!editor) return null
  const result = ted.getEditorCurrentPlainText(editor)
  const name = txt.generateShapeName(result)
  return name !== '' ? name : null
}

export function updateEditorState(shape: { id: string }, editorState: any): Event {
  return {
    type: 'update-editor-state',
    execute: 'update',
    update: function(_: any, state: any) {
      if (editorState) {
        return d.update(state, 'workspace-editor-state', (s: any) => d.assoc(s, shape.id, editorState))
      }
      return d.update(state, 'workspace-editor-state', (s: any) => d.dissoc(s, shape.id))
    }
  }
}

export function finalizeEditorState(id: string, updateName: boolean): Event {
  return {
    type: 'finalize-editor-state',
    execute: 'watch',
    watch: function(_: any, state: any, __: any) {
      if (!dwc.initialized(state)) return rx.empty()

      const objects = dsh.lookupPageObjects(state)
      const shape = objects[id]
      const editorState = d.getIn(state, ['workspace-editor-state', id])
      const content = ted.getEditorCurrentContent(editorState)
      const name = genName(editorState)
      const newShape = shape?.content === null || shape?.content === undefined

      if (ted.contentHasText(content)) {
        if (features.activeFeature(state, 'render-wasm/v1')) {
          const merged = d.merge(
            ted.exportContent(content),
            d.dissoc(shape.content, 'children')
          )
          return rx.merge(
            rx.of(updateEditorState(shape, null)),
            !!(content !== shape.content && state.currentPageId && shape) ?
              rx.of(
                dwsh.updateShapes([id], (s: any) =>
                  d.assoc(
                    d.assoc(s, 'content', merged),
                    'name', name
                  ),
                  { undoGroup: newShape ? id : undefined }
                ),
                dwm.applyWasmModifiers(
                  dwwt.resizeWasmTextModifiers(shape, merged),
                  { undoGroup: newShape ? id : undefined }
                )
              ) : rx.empty()
          )
        }

        const merged = d.merge(
          ted.exportContent(content),
          d.dissoc(shape.content, 'children')
        )
        const modifiers = d.getIn(state, ['workspace-text-modifier', id])

        return rx.merge(
          rx.of(updateEditorState(shape, null)),
          !!(content !== shape.content && state.currentPageId && shape) ?
            rx.of(
              dwsh.updateShapes([id], (s: any) => {
                const { width, height, positionData } = modifiers
                let result = d.assoc(s, 'content', merged)
                if (positionData) result = d.assoc(result, 'position-data', positionData)
                if (updateName && name) result = d.assoc(result, 'name', name)
                if (width || height) {
                  result = gsh.transformShape(result, ctm.changeSize(s, width, height))
                }
                return result
              }, { undoGroup: newShape ? id : undefined })
            ) : rx.empty()
        )
      }

      if (id) {
        return rx.of(
          dws.deselectShape(id),
          dwsh.deleteShapes(new Set([id]))
        )
      }
      return rx.empty()
    }
  }
}

export function initializeEditorState(
  shape: { id: string; name: string; content?: any },
  decorator: any
): Event {
  return {
    type: 'initialize-editor-state',
    execute: 'update-watch',
    update: function(_: any, state: any) {
      const textState = shape.content ? ted.importContent(shape.content) : null
      const defaultAttrs = txt.getDefaultTextAttrs()
      const globalDefaults = d.getIn(state, ['workspace-global', 'default-font'])
      const mergedAttrs = { ...defaultAttrs, ...globalDefaults }
      let editor = ted.createEditorState(textState, decorator)
      if (!shape.content && mergedAttrs) {
        editor = ted.updateEditorCurrentBlockData(editor, mergedAttrs)
      }
      return d.assocIn(state, ['workspace-editor-state', shape.id], editor)
    },
    watch: function(_: any, state: any, stream: any) {
      const editor = d.getIn(state, ['workspace-editor-state', shape.id])
      const updateName = !shape.content || shape.name === genName(editor)

      return stream.pipe(
        rx.merge(
          stream.pipe(rx.filter((e: any) => ptk.type(e) === rt.navigate)),
          stream.pipe(rx.filter((e: any) => e === 'finalize-editor-state'))
        ),
        rx.take(1),
        rx.map(() => finalizeEditorState(shape.id, updateName))
      )
    }
  }
}

export function selectAll(shape: { id: string }): Event {
  return {
    type: 'editor-select-all',
    execute: 'update',
    update: function(_: any, state: any) {
      return d.updateInWhen(state, ['workspace-editor-state', shape.id], ted.editorSelectAll)
    }
  }
}

export function cursorToEnd(shape: { id: string }): Event {
  return {
    type: 'cursor-to-end',
    execute: 'update',
    update: function(_: any, state: any) {
      return d.updateInWhen(state, ['workspace-editor-state', shape.id], ted.cursorToEnd)
    }
  }
}

// --- Helpers

function toNewFills(data: any): any {
  return typesFills.create(d.withoutNils(d.selectKeys(data, typesFills.fillAttrs)))
}

function shapeCurrentValues(shape: any, pred: any, attrsList: string[]): any {
  const root = shape.content
  const nodes = txt.nodeSeq(pred, root)
    .map((node: any) => {
      if (txt.isTextNode(node)) {
        const defaultTextAttrs = txt.getDefaultTextAttrs()
        let fills: any

        if (typesFills.hasValidFillAttrs(node)) {
          fills = toNewFills(node)
        } else if (node.fills) {
          fills = node.fills
        } else {
          fills = defaultTextAttrs.fills
        }

        return { ...defaultTextAttrs, ...node, fills }
      }
      return node
    })
  return attrs.getAttrsMulti(nodes, attrsList)
}

export function currentRootValues({ attrs, shape }: { attrs: string[]; shape: any }): any {
  return shapeCurrentValues(shape, txt.isRootNode, attrs)
}

export function v2CurrentTextValues({ editorInstance, attrs }: { editorInstance: any; attrs: string[] }): any {
  const result = d.selectKeys((editorInstance as any).currentStyle, attrs)
  return Object.keys(result).length === 0 ? txt.defaultTextAttrs : result
}

export function v1CurrentParagraphValues({ editorState, attrs, shape }: { editorState: any; attrs: string[]; shape: any }): any {
  if (editorState) {
    return d.selectKeys(ted.getEditorCurrentBlockData(editorState), attrs)
  }
  return shapeCurrentValues(shape, txt.isParagraphNode, attrs)
}

export function currentParagraphValues({ editorState, editorInstance, attrs, shape }: any): any {
  if (editorInstance) return v2CurrentTextValues({ editorInstance, attrs })
  if (editorState) return v1CurrentParagraphValues({ editorState, attrs, shape })
  return shapeCurrentValues(shape, txt.isParagraphNode, attrs)
}

export function v1CurrentTextValues({ editorState, attrs }: { editorState: any; attrs: string[] }): any {
  const result = d.selectKeys(ted.getEditorCurrentInlineStyles(editorState), attrs)
  return Object.keys(result).length === 0 ? txt.getDefaultTextAttrs() : result
}

export function currentTextValues({ editorState, editorInstance, attrs, shape }: any): any {
  if (editorInstance) return v2CurrentTextValues({ editorInstance, attrs })
  if (editorState) return v1CurrentTextValues({ editorState, attrs })
  return shapeCurrentValues(shape, txt.isTextNode, attrs)
}

// --- TEXT EDITION IMPL

function countNodeChars(node: any, last = false): number {
  switch (node.type) {
    case 'root':
    case 'paragraph-set':
      return node.children.slice(0, -1).reduce((acc: number, c: any) => acc + countNodeChars(c), 0) +
        countNodeChars(node.children[node.children.length - 1], true)
    case 'paragraph':
      return node.children.reduce((acc: number, c: any) => acc + countNodeChars(c), 0) + (last ? 0 : 1)
    default:
      return node.text?.length ?? 0
  }
}

function decorateRangeInfo(content: any): any {
  const decorated = { ...content, meta: { start: 0, end: countNodeChars(content) } }
  return txt.transformNodes(decorated, (node: any) => {
    const start = node.meta?.start ?? 0
    return d.updateWhen(
      node,
      'children',
      (children: any[]) => {
        const [, result] = children.reduce(
          ([res, start]: [any[], number], child: any) => {
            const end = start + countNodeChars(child)
            return [res.concat({ ...child, meta: { start, end } }), end] as [any[], number]
          },
          [[], start]
        )
        return result
      }
    )
  })
}

function splitContentAt(content: any, position: number): any {
  return txt.transformNodes(
    content,
    (node: any) => txt.isParagraphNode(node) &&
      node.meta?.start < position && node.meta?.end > position,
    (node: any) => {
      const processNode = (child: any): any[] => {
        const start = child.meta?.start
        const end = child.meta?.end
        if (start < position && end > position) {
          return [
            d.assoc(d.assoc(child, 'meta', { ...child.meta, end: position }), 'text', child.text.slice(0, position - start)),
            d.assoc(d.assoc(child, 'meta', { ...child.meta, start: position }), 'text', child.text.slice(position - start))
          ]
        }
        return [child]
      }
      return d.updateWhen(node, 'children', (children: any[]) => children.flatMap(processNode))
    }
  )
}

function updateContentRange(content: any, start: number, end: number, attrs: any): any {
  return txt.transformNodes(
    content,
    (node: any) => txt.isTextNode(node) &&
      node.meta?.start >= start && node.meta?.end <= end,
    (node: any) => d.patchObject(node, attrs)
  )
}

function updateTextRangeAttrs(shape: any, start: number, end: number, attrs: any): any {
  const newContent = updateContentRange(
    splitContentAt(decorateRangeInfo(shape.content), start),
    start, end, attrs
  )
  return d.assoc(shape, 'content', newContent)
}

export function updateTextRange(id: string, start: number, end: number, attrs: any): Event {
  return {
    type: 'update-text-range',
    execute: 'watch',
    watch: function(_: any, state: any, __: any) {
      const objects = dsh.lookupPageObjects(state)
      const shape = objects[id]

      const updateFn = (s: any) =>
        cfh.textShape(s) ? updateTextRangeAttrs(s, start, end, attrs) : s

      const shapeIds = cfh.textShape(shape) ? [id] : cfh.groupShape(shape) ? cfh.getChildrenIds(objects, id) : []

      return rx.of(dwsh.updateShapes(shapeIds, updateFn))
    }
  }
}

export function updateRootAttrs({ id, attrs: attrsList }: { id: string; attrs: any }): Event {
  return {
    type: 'update-root-attrs',
    execute: 'watch',
    watch: function(_: any, state: any, __: any) {
      const objects = dsh.lookupPageObjects(state)
      const shape = objects[id]

      const updateFn = (s: any) =>
        s.content
          ? txt.updateTextContent(s, txt.isRootNode, d.txtMerge, attrsList)
          : d.assoc(s, 'content', d.txtMerge({ type: 'root' }, attrsList))

      const shapeIds = cfh.textShape(shape) ? [id] : cfh.groupShape(shape) ? cfh.getChildrenIds(objects, id) : []

      return rx.of(dwsh.updateShapes(shapeIds, updateFn))
    }
  }
}

export function updateParagraphAttrs({ id, attrs: attrsList }: { id: string; attrs: any }): Event {
  const attrsClean = d.withoutNils(attrsList)

  return {
    type: 'update-paragraph-attrs',
    execute: 'update-watch',
    update: function(_: any, state: any) {
      return d.updateInWhen(state, ['workspace-editor-state', id], ted.updateEditorCurrentBlockData, attrsClean)
    },
    watch: function(_: any, state: any, __: any) {
      if (!d.getIn(state, ['workspace-editor-state', id])) {
        const objects = dsh.lookupPageObjects(state)
        const shape = objects[id]

        const mergeFn = (node: any, a: any) => Object.assign({}, node, a)
        const updateFn = (s: any) => txt.updateTextContent(s, txt.isParagraphNode, mergeFn, attrsClean)
        const shapeIds = cfh.textShape(shape) ? [id] : cfh.groupShape(shape) ? cfh.getChildrenIds(objects, id) : []

        return rx.of(dwsh.updateShapes(shapeIds, updateFn))
      }
      return rx.empty()
    }
  }
}

export function updateTextAttrs({ id, attrs: attrsList }: { id: string; attrs: any }): Event {
  return {
    type: 'update-text-attrs',
    execute: 'update-watch',
    update: function(_: any, state: any) {
      return d.updateInWhen(state, ['workspace-editor-state', id], ted.updateEditorCurrentInlineStyles, attrsList)
    },
    watch: function(_: any, state: any, __: any) {
      if (!d.getIn(state, ['workspace-editor-state', id])) {
        const objects = dsh.lookupPageObjects(state)
        const shape = objects[id]
        const updateNode = (node: any) => txt.isTextNode(node) || txt.isParagraphNode(node)
        const shapeIds = cfh.textShape(shape) ? [id] : cfh.groupShape(shape) ? cfh.getChildrenIds(objects, id) : []

        return rx.of(dwsh.updateShapes(shapeIds, (s: any) => txt.updateTextContent(s, updateNode, d.txtMerge, attrsList)))
      }
      return rx.empty()
    }
  }
}

export function migrateNode(node: any): any {
  const colorAttrs = d.notEmpty(d.selectKeys(node, typesFills.fillAttrs))

  let result = node

  if (!node.fills) {
    result = d.assoc(result, 'fills', typesFills.create())
  }

  if (colorAttrs) {
    result = d.dissoc(result, 'fill-color', 'fill-opacity', 'fill-color-ref-id', 'fill-color-ref-file', 'fill-color-gradient')
    result = d.update(result, 'fills', (fills: any) => typesFills.update(fills, 'concat', colorAttrs))
  }

  if (!node.fills && !colorAttrs) {
    result = d.assoc(result, 'fills', txt.getDefaultTextFills())
  }

  return result
}

export function migrateContent(content: any): any {
  return txt.transformNodes(
    (node: any) => txt.isTextNode(node) || txt.isParagraphNode(node),
    migrateNode,
    content
  )
}

export function updateTextWithFunction(
  id: string,
  updateNodeFn: (node: any) => any,
  options?: any
): Event {
  return {
    type: 'update-text-with-function',
    execute: 'update-watch-effect',
    update: function(_: any, state: any) {
      return d.updateInWhen(
        state,
        ['workspace-editor-state', id],
        ted.updateEditorCurrentInlineStylesFn,
        (fn: any) => (node: any) => updateNodeFn(migrateNode(fn(node)))
      )
    },
    watch: function(_: any, state: any, __: any) {
      const isV2 = features.activeFeature(state, 'text-editor/v2')
      const noEditor = isV2
        ? !state['workspace-editor']
        : !d.getIn(state, ['workspace-editor-state', id])

      if (noEditor) {
        const pageId = options?.pageId || state.currentPageId
        const objects = dsh.lookupPageObjects(state, pageId)
        const shape = objects[id]
        const updateNode = (node: any) => txt.isTextNode(node) || txt.isParagraphNode(node)

        const shapeIds = cfh.textShape(shape) ? [id] : cfh.groupShape(shape) ? cfh.getChildrenIds(objects, id) : []

        const updateContent = (content: any) =>
          txt.transformNodes(updateNode, updateNodeFn, migrateContent(content))

        const updateShape = (s: any) =>
          d.updateWhen(d.dissoc(s, 'fills'), 'content', updateContent)

        return rx.of(dwsh.updateShapes(shapeIds, updateShape, options))
      }
      return rx.empty()
    },
    effect: function(_: any, state: any, __: any) {
      if (features.activeFeature(state, 'text-editor/v2')) {
        const instance = state['workspace-editor']
        if (instance) {
          const currentStyle = editorV2.getCurrentStyle(instance)
          const newStyles = styles.getStylesFromStyleDeclaration(currentStyle, { removedMixed: true })
          const migrated = (updateNodeFn: any) => (node: any) => updateNodeFn(migrateNode(node))(newStyles)
          const attrsStyles = styles.attrsToStyles(migrated)
          editorV2.applyStylesToSelection(instance, attrsStyles)
        }
      }
    }
  }
}

// --- RESIZE UTILS

export const startEditIfSelected: Event = {
  type: 'start-edit-if-selected',
  execute: 'update',
  update: function(_: any, state: any) {
    const objects = dsh.lookupPageObjects(state)
    const selected = dsh.lookupSelected(state).map((id: string) => objects[id])
    if (selected.length === 1 && selected[0]?.type === 'text') {
      return d.assocIn(state, ['workspace-local', 'edition'], selected[0].id)
    }
    return state
  }
}

export function notChanged(oldDim: number, newDim: number): boolean {
  return mth.abs(oldDim - newDim) > 0.1
}

export function commitResizeText(): Event {
  return {
    type: 'commit-resize-text',
    execute: 'watch',
    watch: function(_: any, state: any, __: any) {
      const props = d.getIn(state, ['resize-text-debounce-props']) as Record<string, [number, number]>
      const objects = dsh.lookupPageObjects(state)
      const undoId = Symbol()

      const changedText = (id: string): boolean => {
        const shape = objects[id]
        const [newWidth, newHeight] = props[id]
        return (
          (notChanged(shape.width, newWidth) && shape.growType === 'auto-width') ||
          (notChanged(shape.height, newHeight) &&
            (shape.growType === 'auto-height' || shape.growType === 'auto-width'))
        )
      }

      const updateFn = (shape: any) => {
        const { id, selrect, growType } = shape
        const { width: shapeWidth, height: shapeHeight } = selrect
        const [newWidth, newHeight] = props[id]

        let result = { ...shape }

        if (
          (!ctl.anyLayoutImmediateChild(objects, shape) || !ctl.fillWidth(shape)) &&
          notChanged(shapeWidth, newWidth) &&
          growType === 'auto-width'
        ) {
          result = gsh.transformShape(result, ctm.changeDimensionsModifiers(shape, 'width', newWidth, { ignoreLock: true }))
        }

        if (
          (!ctl.anyLayoutImmediateChild(objects, shape) || !ctl.fillHeight(shape)) &&
          notChanged(shapeHeight, newHeight) &&
          (growType === 'auto-height' || growType === 'auto-width')
        ) {
          result = gsh.transformShape(result, ctm.changeDimensionsModifiers(shape, 'height', newHeight, { ignoreLock: true }))
        }

        return result
      }

      const ids = Object.keys(props).filter(changedText)

      return rx.of(
        dwu.startUndoTransaction(undoId),
        dwsh.updateShapes(ids, updateFn, {
          withObjects: true,
          regObjects: true,
          stackUndo: true,
          ignoreTouched: true
        }),
        ptk.dataEvent('layout/update', { ids }),
        dwu.commitUndoTransaction(undoId)
      )
    }
  }
}

export function resizeText(id: string, newWidth: number, newHeight: number): Event {
  const curEvent = Symbol()

  return {
    type: 'resize-text',
    execute: 'update-watch',
    update: function(_: any, state: any) {
      let result = d.update(state, 'resize-text-debounce-props', (p: any) => d.assoc(p || {}, id, [newWidth, newHeight]))
      if (!d.getIn(result, ['resize-text-debounce-event'])) {
        result = d.assoc(result, 'resize-text-debounce-event', curEvent)
      }
      return result
    },
    watch: function(_: any, state: any, stream: any) {
      if (d.getIn(state, ['resize-text-debounce-event']) === curEvent) {
        const stopper = stream.pipe(rx.filter((e: any) => ptk.type(e) === 'app.main.data.workspace/finalize'))

        return rx.concat(
          rx.merge(
            stream.pipe(
              rx.filter((e: any) => ptk.type(e) === 'resize-text'),
              rx.debounce(50),
              rx.take(1),
              rx.map(() => commitResizeText()),
              rx.takeUntil(stopper)
            )
          ),
          rx.of(resizeText(id, newWidth, newHeight)),
          rx.of((state: any) => d.dissoc(d.dissoc(state, 'resize-text-debounce-props', 'resize-text-debounce-event')))
        )
      }
      return rx.empty()
    }
  }
}

export function saveFont(data: any): Event {
  return {
    type: 'save-font',
    execute: 'update',
    update: function(_: any, state: any) {
      const multiple = Object.values(data).some((v: any) => v === 'multiple')
      if (!multiple) {
        return d.assocIn(state, ['workspace-global', 'default-font'], data)
      }
      return state
    }
  }
}

export function applyTextModifier(shape: any, textModifier: any): any {
  if (!textModifier) return shape

  const { width, height, positionData } = textModifier
  let newShape = { ...shape }

  if (width !== undefined && width !== null) {
    newShape = gsh.transformShape(newShape, ctm.changeDimensionsModifiers(shape, 'width', width, { ignoreLock: true }))
  }

  if (height !== undefined && height !== null) {
    newShape = gsh.transformShape(newShape, ctm.changeDimensionsModifiers(shape, 'height', height, { ignoreLock: true }))
  }

  if (positionData !== undefined && positionData !== null) {
    newShape = d.assoc(newShape, 'position-data', positionData)
  }

  const deltaMove = gpt.subtract(
    gpt.point(ctm.safeSizeRect(newShape)),
    gpt.point(ctm.safeSizeRect(shape))
  )

  newShape = d.update(newShape, 'position-data', (pd: any) => gsh.movePositionData(pd, deltaMove))

  return newShape
}

export function commitUpdateTextModifier(): Event {
  return {
    type: 'commit-update-text-modifier',
    execute: 'watch',
    watch: function(_: any, state: any, __: any) {
      const ids = d.getIn(state, ['update-text-modifier-debounce-ids']) || []
      const modifTree = dwm.createModifTree(ids, ctm.reflowModifiers)
      return rx.of(dwm.updateModifiers(modifTree, false, true))
    }
  }
}

export function updateTextModifier(id: string, props: any): Event {
  const curEvent = Symbol()

  return {
    type: 'update-text-modifier',
    execute: 'update-watch',
    update: function(_: any, state: any) {
      let result = d.updateIn(state, ['workspace-text-modifier', id], (m: any) => d.merge(m || {}, props))
      result = d.update(result, 'update-text-modifier-debounce-ids', (ids: any) => (ids || []).concat([id]))
      if (!d.getIn(result, ['update-text-modifier-debounce-event'])) {
        result = d.assoc(result, 'update-text-modifier-debounce-event', curEvent)
      }
      return result
    },
    watch: function(_: any, state: any, stream: any) {
      if (d.getIn(state, ['update-text-modifier-debounce-event']) === curEvent) {
        const stopper = stream.pipe(rx.filter((e: any) => ptk.type(e) === 'app.main.data.workspace/finalize'))

        return rx.concat(
          rx.merge(
            stream.pipe(
              rx.filter((e: any) => ptk.type(e) === 'update-text-modifier'),
              rx.debounce(50),
              rx.take(1),
              rx.map(() => commitUpdateTextModifier()),
              rx.takeUntil(stopper)
            )
          ),
          rx.of(updateTextModifier(id, props)),
          rx.of((state: any) => d.dissoc(state, 'update-text-modifier-debounce-event', 'update-text-modifier-debounce-ids'))
        )
      }
      return rx.empty()
    }
  }
}

export function cleanTextModifier(id: string): Event {
  return {
    type: 'clean-text-modifier',
    execute: 'watch',
    watch: function(_: any, state: any, __: any) {
      const currentValue = d.getIn(state, ['workspace-text-modifier', id])

      return rx.of((state: any) =>
        d.cond(
          d.equals(d.getIn(state, ['workspace-text-modifier', id]), currentValue),
          d.update(state, 'workspace-text-modifier', (m: any) => d.dissoc(m, id)),
          d.Constant(state)
        )
      ).pipe(rx.delay(100))
    }
  }
}

export function removeTextModifier(id: string): Event {
  return {
    type: 'remove-text-modifier',
    execute: 'update-watch',
    update: function(_: any, state: any) {
      return d.dissocIn(state, ['workspace-text-modifier', id])
    },
    watch: function(_: any, __: any, ___: any) {
      return rx.of(dwm.applyModifiers({ stackUndo: true }))
    }
  }
}

export function commitPositionData(): Event {
  return {
    type: 'commit-position-data',
    execute: 'update-watch',
    update: function(_: any, state: any) {
      const ids = Object.keys(d.getIn(state, ['update-position-data']) || {})
      return d.update(state, 'workspace-text-modifier', (m: any) => ids.reduce((acc: any, id: string) => d.dissoc(acc, id), m))
    },
    watch: function(_: any, state: any, __: any) {
      const positionData = d.getIn(state, ['update-position-data']) || {}

      return rx.concat(
        rx.of(dwsh.updateShapes(
          Object.keys(positionData),
          (shape: any) => d.assoc(shape, 'position-data', positionData[shape.id]),
          { stackUndo: true, regObjects: false }
        )),
        rx.of((state: any) => d.dissoc(state, 'update-position-data-debounce', 'update-position-data'))
      )
    }
  }
}

export function updatePositionData(id: string, positionData: any): Event {
  const curEvent = Symbol()

  return {
    type: 'update-position-data',
    execute: 'update-watch',
    update: function(_: any, state: any) {
      let result = d.assocIn(state, ['workspace-text-modifier', id, 'position-data'], positionData)
      if (!d.getIn(result, ['update-position-data-debounce'])) {
        result = d.assoc(result, 'update-position-data-debounce', curEvent)
      } else {
        result = d.assocIn(result, ['update-position-data', id], positionData)
      }
      return result
    },
    watch: function(_: any, state: any, stream: any) {
      if (d.getIn(state, ['update-position-data-debounce']) === curEvent) {
        const stopper = stream.pipe(rx.filter((e: any) => ptk.type(e) === 'app.main.data.workspace/finalize'))

        return rx.merge(
          stream.pipe(
            rx.filter((e: any) => ptk.type(e) === 'update-position-data'),
            rx.debounce(50),
            rx.take(1),
            rx.map(() => commitPositionData()),
            rx.takeUntil(stopper)
          ),
          rx.of(updatePositionData(id, positionData))
        )
      }
      return rx.empty()
    }
  }
}

export function updateAttrs(id: string, attrs: any): Event {
  return {
    type: 'update-attrs',
    execute: 'watch-effect',
    watch: function(_: any, state: any, __: any) {
      const textEditorInstance = state['workspace-editor']

      if (features.activeFeature(state, 'text-editor/v2') && textEditorInstance) {
        return rx.empty()
      }

      const rootAttrs = d.selectKeys(attrs, txt.rootAttrs)
      const paragraphAttrs = d.selectKeys(attrs, txt.paragraphAttrs)
      const textNodeAttrs = d.selectKeys(attrs, txt.textNodeAttrs)

      return rx.concat(
        !d.notEmpty(rootAttrs) ? rx.empty() : rx.of(updateRootAttrs({ id, attrs: rootAttrs })),
        !d.notEmpty(paragraphAttrs) ? rx.empty() : rx.of(updateParagraphAttrs({ id, attrs: paragraphAttrs })),
        !d.notEmpty(textNodeAttrs) ? rx.empty() : rx.of(updateTextAttrs({ id, attrs: textNodeAttrs })),
        features.activeFeature(state, 'text-editor/v2') ? rx.of(v2UpdateTextEditorStyles(id, attrs)) : rx.empty(),
        features.activeFeature(state, 'render-wasm/v1') ?
          rx.concat(
            wasmApi.textEditorIsActive() ?
              (() => {
                const spanAttrs = d.selectKeys(textNodeAttrs, txt.textNodeAttrs)
                if (!d.notEmpty(spanAttrs)) return rx.empty()
                const result = wasmApi.applyStyleToSelection(spanAttrs)
                return result ?
                  rx.of(v2UpdateTextShapeContent(result.shapeId, result.content, { updateName: true })) :
                  rx.empty()
              })() :
              rx.empty(),
            attrs.fontId ? rx.of(dwwt.resizeWasmText(id)).pipe(rx.delay(200)) : rx.empty()
          ) :
          rx.empty()
      )
    },
    effect: function(_: any, state: any, __: any) {
      if (features.activeFeature(state, 'text-editor/v2')) {
        const instance = state['workspace-editor']
        if (instance) {
          const attrsToOverride = styles.getStylesFromStyleDeclaration(editorV2.getCurrentStyle(instance))
          const overridenAttrs = { ...attrsToOverride, ...attrs }
          const stylesAttrs = styles.attrsToStyles(overridenAttrs)
          editorV2.applyStylesToSelection(instance, stylesAttrs)
        }
      }
    }
  }
}

export function updateAllAttrs(ids: string[], attrs: any): Event {
  return {
    type: 'update-all-attrs',
    execute: 'watch',
    watch: function(_: any, __: any, ___: any) {
      const undoId = Symbol()
      return rx.concat(
        rx.of(dwu.startUndoTransaction(undoId)),
        rx.from(ids).pipe(rx.map((id: string) => updateAttrs(id, attrs))),
        rx.of(dwu.commitUndoTransaction(undoId))
      )
    }
  }
}

export function applyTypography(
  ids: Set<string> | null,
  typography: any,
  fileId: string
): Event {
  return {
    type: 'apply-typography',
    execute: 'watch',
    watch: function(_: any, state: any, __: any) {
      const editorState = d.getIn(state, ['workspace-editor-state'])
      const resolvedIds = d.nilv(ids, dsh.lookupSelected(state))
      const attrs = d.dissoc(d.assoc(typography, 'typography-ref-file', fileId, 'typography-ref-id', typography.id), 'id', 'name')
      const undoId = Symbol()

      return rx.concat(
        rx.of(dwu.startUndoTransaction(undoId)),
        rx.from(resolvedIds).pipe(
          rx.map((id: string) => {
            const editor = editorState[id]
            return updateTextAttrs({ id, editor, attrs })
          })
        ),
        rx.of(dwu.commitUndoTransaction(undoId))
      )
    }
  }
}

export function generateTypographyName({ fontId, fontVariantId }: { fontId: string; fontVariantId: string }): any {
  const { name } = fonts.getFontData(fontId)
  return { name: `${name} ${str.title(fontVariantId)}` }
}

export function addTypography(fileId: string): Event {
  return {
    type: 'add-typography',
    execute: 'watch',
    watch: function(_: any, state: any, __: any) {
      const selected = dsh.lookupSelected(state)
      const objects = dsh.lookupPageObjects(state)

      const xform = (source: any) =>
        source.pipe(
          (source: any) => source.map((id: string) => objects[id]),
          (source: any) => source.filter((s: any) => cfh.textShape(s))
        )

      const shapes = xform(rx.from(selected)).pipe(rx.reduce((acc: any[], id: string) => acc.concat([objects[id]]), []))
      const shape = shapes[0]

      const values = currentTextValues({
        editorState: d.getIn(state, ['workspace-editor-state', shape?.id]),
        shape,
        attrs: txt.textNodeAttrs
      })

      const multiple = shapes.length > 1 || Object.values(values).some((v: any) => v === 'multiple')

      const cleanedValues = d.withoutNils(d.selectKeys(values, [
        ...txt.textFontAttrs,
        ...txt.textSpacingAttrs,
        ...txt.textTransformAttrs
      ]))

      const typId = uuid.next()
      const typ = d.assoc(
        d.merge(multiple ? txt.defaultTypography : d.merge(txt.defaultTypography, cleanedValues), generateTypographyName({ fontId: cleanedValues.fontId, fontVariantId: cleanedValues.fontVariantId })),
        'id', typId
      )

      return rx.concat(
        rx.of(
          dwl.addTypography(typ),
          ptk.event(ev as any, { [ev.evName]: 'add-asset-to-library', assetType: 'typography' })
        ),
        !multiple ?
          rx.of(updateAttrs(shape.id, {
            'typography-ref-id': typId,
            'typography-ref-file': fileId
          })) :
          rx.empty()
      )
    }
  }
}

// -- New Editor

export function v2UpdateTextEditorStyles(id: string, newStyles: any): Event {
  return {
    type: 'v2-update-text-editor-styles',
    execute: 'update',
    update: function(_: any, state: any) {
      const mergedStyles = {
        ...txt.getDefaultTextAttrs(),
        ...d.getIn(state, ['workspace-global', 'default-font']),
        ...newStyles
      }
      return d.updateIn(state, ['workspace-v2-editor-state', id], (s: any) => d.merge(s || {}, mergedStyles))
    }
  }
}

export function v2UpdateTextShapePositionData(shapeId: string, positionData: any): Event {
  return {
    type: 'v2-update-text-shape-position-data',
    execute: 'update',
    update: function(_: any, state: any) {
      return d.updateIn(state, ['workspace-text-modifier', shapeId], { positionData })
    }
  }
}

export function v2UpdateTextShapeContent(
  id: string,
  content: any,
  {
    updateName = false,
    name = null,
    finalize = false,
    saveUndo = true
  }: {
    updateName?: boolean
    name?: string | null
    finalize?: boolean
    saveUndo?: boolean
  } = {}
): Event {
  return {
    type: 'v2-update-text-shape-content',
    execute: 'watch',
    watch: function(_: any, state: any, __: any) {
      if (features.activeFeature(state, 'render-wasm/v1')) {
        const objects = dsh.lookupPageObjects(state)
        const shape = objects[id]
        const newShape = shape.content === null || shape.content === undefined
        const prevContent = shape.content
        const hasPrevContent = shape.prevContent !== null && shape.prevContent !== undefined
        const hasContent = newShape ? v2ContentHasText(content) : v2ContentHasText(content)
        const didHasContent = newShape ? false : v2ContentHasText(prevContent)

        return rx.concat(
          rx.of(
            dwsh.updateShapes([id], (s: any) => {
              let result = d.assoc(s, 'content', content)
              if (hasContent && hasPrevContent) {
                result = d.dissoc(result, 'prev-content')
              }
              if (didHasContent && !hasContent) {
                result = d.assoc(result, 'prev-content', prevContent)
              }
              if (updateName && name) {
                result = d.assoc(result, 'name', name)
              }
              return result
            }, { saveUndo, undoGroup: newShape ? id : undefined }),

            (() => {
              const modifiers = dwwt.resizeWasmTextModifiers(shape, content)
              const options = { undoGroup: newShape ? id : undefined }
              if (shape.growType !== 'fixed' && finalize) {
                return dwm.applyWasmModifiers(modifiers, options)
              }
              return dwm.setWasmModifiers(modifiers, options)
            })()
          ),

          finalize ?
            rx.concat(
              !hasContent && id ?
                rx.of(
                  hasPrevContent ?
                    dwsh.updateShapes([id], (s: any) => d.assoc(s, 'content', s.prevContent), { saveUndo: false }) :
                    rx.empty(),
                  dws.deselectShape(id),
                  dwsh.deleteShapes(new Set([id]))
                ) :
                rx.empty(),
              rx.of(dwt.finishTransform())
            ) :
            rx.empty()
        )
      }

      const objects = dsh.lookupPageObjects(state)
      const shape = objects[id]
      const modifiers = d.getIn(state, ['workspace-text-modifier', id])
      const newShape = shape.content === null || shape.content === undefined

      return rx.of(
        dwsh.updateShapes([id], (s: any) => {
          const { width, height, positionData } = modifiers
          let result = d.assoc(s, 'content', content)
          if (positionData) result = d.assoc(result, 'position-data', positionData)
          if (updateName && name) result = d.assoc(result, 'name', name)
          if (width || height) {
            result = gsh.transformShape(result, ctm.changeSize(s, width, height))
          }
          return result
        }, { undoGroup: newShape ? id : undefined })
      )
    }
  }
}
