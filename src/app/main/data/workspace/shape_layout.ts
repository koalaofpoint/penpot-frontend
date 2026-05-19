// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from 'app/common/data'
import * as dm from 'app/common/data/macros'
import * as pcb from 'app/common/files/changes-builder'
import * as cfh from 'app/common/files/helpers'
import * as cfsh from 'app/common/files/shapes-helpers'
import * as gpt from 'app/common/geom/point'
import * as flex from 'app/common/geom/shapes/flex-layout'
import * as grid from 'app/common/geom/shapes/grid-layout'
import * as cll from 'app/common/logic/libraries'
import * as clr from 'app/common/types/color'
import * as ctc from 'app/common/types/component'
import * as ctm from 'app/common/types/modifiers'
import * as ctl from 'app/common/types/shape/layout'
import * as uuid from 'app/common/uuid'
import * as dch from 'app/main/data/changes'
import * as ev from 'app/main/data/event'
import * as dsh from 'app/main/data/helpers'
import * as cl from 'app/main/data/workspace/colors'
import * as dwge from 'app/main/data/workspace/grid-layout/editor'
import * as dwm from 'app/main/data/workspace/modifiers'
import * as dwse from 'app/main/data/workspace/selection'
import * as dwsh from 'app/main/data/workspace/shapes'
import * as dwu from 'app/main/data/workspace/undo'
import * as features from 'app/main/features'
import * as rx from 'beicon.v2.core'
import * as ptk from 'potok.v2.core'

import type { Event } from 'potok.v2.core'

export const layoutKeys = [
  'layout',
  'layoutFlexDir',
  'layoutGapType',
  'layoutGap',
  'layoutAlignItems',
  'layoutJustifyContent',
  'layoutAlignContent',
  'layoutWrapType',
  'layoutPaddingType',
  'layoutPadding',
  'layoutGapType'
]

export const initialFlexLayout = {
  layout: 'flex' as const,
  layoutFlexDir: 'row' as const,
  layoutGapType: 'multiple' as const,
  layoutGap: { rowGap: 0, columnGap: 0 },
  layoutAlignItems: 'start' as const,
  layoutJustifyContent: 'start' as const,
  layoutAlignContent: 'stretch' as const,
  layoutWrapType: 'nowrap' as const,
  layoutPaddingType: 'simple' as const,
  layoutPadding: { p1: 0, p2: 0, p3: 0, p4: 0 }
}

export const initialGridLayout = {
  layout: 'grid' as const,
  layoutGridDir: 'row' as const,
  layoutGapType: 'multiple' as const,
  layoutGap: { rowGap: 0, columnGap: 0 },
  layoutAlignItems: 'start' as const,
  layoutJustifyItems: 'start' as const,
  layoutAlignContent: 'stretch' as const,
  layoutJustifyContent: 'stretch' as const,
  layoutPaddingType: 'simple' as const,
  layoutPadding: { p1: 0, p2: 0, p3: 0, p4: 0 },
  layoutGridCells: {},
  layoutGridRows: [],
  layoutGridColumns: []
}

function getLayoutInitializer(
  type: 'flex' | 'grid',
  fromFrame: boolean,
  calculateParams: boolean
): (shape: any, objects: any) => any {
  const [initialLayoutData, calculateParamsFn] =
    type === 'flex'
      ? [initialFlexLayout, flex.calculateParams]
      : [initialGridLayout, grid.calculateParams]

  return (shape: any, objects: any) => {
    let result = {
      ...shape,
      ...initialLayoutData,
      ...(fromFrame ? {} : { showContent: true, hideInViewer: true })
    }

    if (calculateParams && calculateParamsFn) {
      const children = cfh.getImmediateChildren(objects, shape.id)
      const params = calculateParamsFn(objects, children, shape)
      result = { ...result, ...params }
    }

    if (type === 'grid') {
      result = ctl.assignCells(result, objects)
      result = ctl.reorderGridChildren(result)
    }

    return result
  }
}

function updateLayoutPositions({ pageId, ids, undoGroup }: { pageId?: string; ids: string[]; undoGroup?: string }): Event {
  return {
    type: 'update-layout-positions',
    execute: 'watch',
    watch: function(_: any, state: any, __: any) {
      const resolvedPageId = pageId || state.currentPageId
      const objects = dsh.lookupPageObjects(state, resolvedPageId)
      const validIds = ids.filter((id: string) => !uuid.isZero(id) && objects.hasOwnProperty(id))

      if (d.notEmpty(validIds)) {
        const modifTree = dwm.createModifTree(validIds, ctm.reflowModifiers)

        if (features.activeFeature(state, 'render-wasm/v1')) {
          return rx.of(dwm.applyWasmModifiers(modifTree, {
            stackUndo: true,
            undoGroup,
            ignoreTouched: true
          }))
        }

        return rx.of(dwm.applyModifiers({
          pageId: resolvedPageId,
          modifiers: modifTree,
          stackUndo: true,
          ignoreTouched: true,
          undoGroup
        }))
      }
      return rx.empty()
    }
  }
}

export function initializeShapeLayout(): Event {
  return {
    type: 'initialize-shape-layout',
    execute: 'watch',
    watch: function(_: any, __: any, stream: any) {
      const stopper = stream.pipe(rx.filter((e: any) => ptk.type(e) === 'finalize-shape-layout'))

      return stream.pipe(
        rx.filter((e: any) => ptk.type(e) === 'layout/update'),
        rx.map((e: any) => (e as any).data),
        rx.bufferTime(100),
        rx.filter((buff: any[]) => d.notEmpty(buff)),
        rx.mapcat((buff: any[]) => {
          const byPageId = d.groupBy(buff, 'pageId')
          return Array.from(byPageId.entries()).map(([pageId, items]: [string, any[]]) => {
            const ids = items.reduce((acc: Set<string>, item: any) => {
              item.ids.forEach((id: string) => acc.add(id))
              return acc
            }, new Set())
            return updateLayoutPositions({ pageId, ids: Array.from(ids) })
          })
        }),
        rx.takeUntil(stopper)
      )
    }
  }
}

export function finalizeShapeLayout(): Event {
  return ptk.dataEvent('finalize-shape-layout')
}

export function createLayoutFromId(
  id: string,
  type: 'flex' | 'grid',
  { fromFrame = false, calculateParams = true }: { fromFrame?: boolean; calculateParams?: boolean } = {}
): Event {
  return {
    type: 'create-layout-from-id',
    execute: 'watch',
    watch: function(_: any, state: any, __: any) {
      const objects = dsh.lookupPageObjects(state)
      const parent = objects[id]
      const undoId = Symbol()
      const layoutInitializer = getLayoutInitializer(type, fromFrame, calculateParams)

      return rx.of(
        dwu.startUndoTransaction(undoId),
        dwsh.updateShapes([id], layoutInitializer, { withObjects: true }),
        dwsh.updateShapes(parent?.shapes || [], (s: any) => {
          const { constraintsH, constraintsV, ...rest } = s
          return rest
        }),
        ptk.dataEvent('layout/update', { ids: [id] }),
        dwu.commitUndoTransaction(undoId)
      )
    }
  }
}

export function createLayoutFromSelection(type: 'flex' | 'grid'): Event {
  return {
    type: 'create-layout-from-selection',
    execute: 'watch',
    watch: function(_: any, state: any, __: any) {
      const pageId = state.currentPageId
      const objects = dsh.lookupPageObjects(state, pageId)
      const selected = dsh.lookupSelected(state)
      const selectedShapes = selected.map((id: string) => objects[id])
      const single = selectedShapes.length === 1
      const hasGroup = selectedShapes.some((s: any) => cfh.groupShape(s))
      const isGroup = single && hasGroup
      const hasMask = selectedShapes.some((s: any) => cfh.maskShape(s))
      const isMask = single && hasMask
      const hasComponent = selectedShapes.some((s: any) => ctc.instanceRoot(s))
      const isComponent = single && hasComponent
      const hasVariant = selectedShapes.some((s: any) => ctc.isVariant(s))
      const hasLayout = single && ctl.anyLayout(selectedShapes[0])

      const newShapeId = uuid.next()
      const undoId = Symbol()

      if (hasVariant) {
        return rx.empty()
      }

      return rx.concat(
        rx.of(dwu.startUndoTransaction(undoId)),
        (() => {
          if (isGroup && !isComponent && !isMask) {
            const parentId = selectedShapes[0].parentId
            const shapesIds = selectedShapes[0].shapes
            const orderedIds = d.orderedSet(shapesIds)
            const groupIndex = cfh.getIndexReplacement(selected, objects)

            return rx.of(
              dwse.selectShapes(orderedIds),
              dwsh.createArtboardFromSelection(newShapeId, parentId, groupIndex, selectedShapes[0].name),
              cl.removeAllFills([newShapeId], { color: clr.black, opacity: 1 }),
              createLayoutFromId(newShapeId, type),
              dwsh.updateShapes([newShapeId], (s: any) => ({
                ...s,
                layoutItemHSizing: 'auto',
                layoutItemVSizing: 'auto'
              })),
              dwsh.updateShapes(selected, ctl.toggleFixIfAuto),
              dwsh.deleteShapes(pageId, selected),
              ptk.dataEvent('layout/update', { ids: [newShapeId] }),
              dwu.commitUndoTransaction(undoId)
            )
          }

          if (hasLayout) {
            return rx.of(
              createLayoutFromId(selected[0], type),
              ptk.dataEvent('layout/update', { ids: selected }),
              dwu.commitUndoTransaction(undoId)
            )
          }

          return rx.of(
            dwsh.createArtboardFromSelection(newShapeId),
            cl.removeAllFills([newShapeId], { color: clr.black, opacity: 1 }),
            createLayoutFromId(newShapeId, type),
            dwsh.updateShapes([newShapeId], (s: any) => ({
              ...s,
              layoutItemHSizing: 'auto',
              layoutItemVSizing: 'auto'
            })),
            dwsh.updateShapes(selected, ctl.toggleFixIfAuto)
          )
        })(),
        rx.of(
          ptk.dataEvent('layout/update', { ids: [newShapeId] }),
          dwu.commitUndoTransaction(undoId)
        )
      )
    }
  }
}

export function removeLayout(ids: string[]): Event {
  return {
    type: 'remove-shape-layout',
    execute: 'watch',
    watch: function(_: any, __: any, ___: any) {
      const undoId = Symbol()

      return rx.of(
        dwu.startUndoTransaction(undoId),
        dwsh.updateShapes(ids, (s: any) => {
          const result = { ...s }
          layoutKeys.forEach((k: string) => delete result[k])
          return result
        }),
        ptk.dataEvent('layout/update', { ids }),
        dwu.commitUndoTransaction(undoId)
      )
    }
  }
}

export function createLayout(type: 'flex' | 'grid'): Event {
  return {
    type: 'create-shape-layout',
    execute: 'update-watch',
    update: function(_: any, state: any) {
      return d.assoc(state, 'layout', d.name(type))
    },
    watch: function(_: any, state: any, __: any) {
      const pageId = state.currentPageId
      const objects = dsh.lookupPageObjects(state, pageId)
      const selected = dsh.lookupSelected(state)
      const selectedShapes = selected.map((id: string) => objects[id])
      const single = selectedShapes.length === 1
      const isFrame = single && selectedShapes[0]?.type === 'frame'
      const hasLayout = single && ctl.anyLayout(selectedShapes[0])

      const undoId = Symbol()

      return rx.of(
        dwu.startUndoTransaction(undoId),
        single && isFrame && !hasLayout
          ? createLayoutFromId(selected[0], type, { fromFrame: true })
          : createLayoutFromSelection(type),
        dwu.commitUndoTransaction(undoId)
      )
    }
  }
}

export function toggleLayout(type: 'flex' | 'grid'): Event {
  return {
    type: 'toggle-shape-layout',
    execute: 'watch',
    watch: function(it: any, state: any, __: any) {
      const objects = dsh.lookupPageObjects(state)
      const selected = dsh.lookupSelected(state)
      const selectedShapes = selected.map((id: string) => objects[id])
      const single = selectedShapes.length === 1
      const hasLayout = single && ctl.anyLayout(objects, selectedShapes[0]?.id)

      if (selected.length !== 0) {
        const event = hasLayout ? removeLayout(selected) : createLayout(type)
        return rx.of(Object.assign(event, { meta: (it as any).meta }))
      }
      return rx.empty()
    }
  }
}

export function updateLayout(
  ids: string[],
  changes: any,
  options?: any
): Event {
  return {
    type: 'update-layout',
    execute: 'watch',
    watch: function(_: any, __: any, ___: any) {
      const undoId = Symbol()
      const paddingAttrs = changes.layoutPadding ? Object.keys(changes.layoutPadding) : []

      return rx.of(
        dwu.startUndoTransaction(undoId),
        dwsh.updateShapes(ids, d.patchObject(changes),
          options && paddingAttrs.length > 0 ? { ...options, changedSubAttr: new Set(paddingAttrs) } : options),
        ptk.dataEvent('layout/update', { ids }),
        dwu.commitUndoTransaction(undoId),
        changes.layoutAlignContent || changes.layoutJustifyContent ?
          ptk.event(ev as any, { [ev.evName]: 'layout-change-alignment' }) : null,
        changes.layoutPadding || changes.layoutGap ?
          ptk.event(ev as any, { [ev.evName]: 'layout-change-margin' }) : null
      )
    }
  }
}

export function addLayoutTrack(
  ids: string[],
  type: 'row' | 'column',
  value: any,
  index?: number
): Event {
  return {
    type: 'add-layout-track',
    execute: 'watch',
    watch: function(_: any, __: any, ___: any) {
      const undoId = Symbol()

      return rx.of(
        dwu.startUndoTransaction(undoId),
        dwsh.updateShapes(ids, (shape: any) =>
          type === 'row'
            ? ctl.addGridRow(shape, value, index)
            : ctl.addGridColumn(shape, value, index)
        ),
        ptk.dataEvent('layout/update', { ids }),
        dwu.commitUndoTransaction(undoId)
      )
    }
  }
}

export function removeLayoutTrack(
  ids: string[],
  type: 'row' | 'column',
  index: number,
  { withShapes = false }: { withShapes?: boolean } = {}
): Event {
  return {
    type: 'remove-layout-track',
    execute: 'watch',
    watch: function(_: any, state: any, __: any) {
      const objects = dsh.lookupPageObjects(state)
      const undoId = Symbol()

      const shapesToDelete = withShapes ?
        new Set(ids.flatMap((id: string) => {
          const shape = objects[id]
          return type === 'column'
            ? ctl.shapesByColumn(shape, index)
            : ctl.shapesByRow(shape, index)
        })) : null

      return rx.of(
        dwu.startUndoTransaction(undoId),
        shapesToDelete ? dwsh.deleteShapes(shapesToDelete) : rx.empty(),
        dwsh.updateShapes(ids, (shape: any, objs: any) =>
          type === 'row'
            ? ctl.removeGridRow(shape, index, objs)
            : ctl.removeGridColumn(shape, index, objs),
          { withObjects: true }),
        ptk.dataEvent('layout/update', { ids }),
        dwu.commitUndoTransaction(undoId)
      )
    }
  }
}

export function duplicateLayoutTrack(
  ids: string[],
  type: 'row' | 'column',
  index: number
): Event {
  return {
    type: 'duplicate-layout-track',
    execute: 'watch',
    watch: function(it: any, state: any, __: any) {
      const fileId = state.currentFileId
      const page = dsh.lookupPage(state)
      const objects = page?.objects
      const libraries = dsh.lookupLibraries(state)
      const libraryData = dsh.lookupFile(state, fileId)
      const shapeId = ids[0]
      const baseShape = objects[shapeId]

      const shapesByTrack = type === 'column'
        ? ctl.shapesByColumn(baseShape, index, false)
        : ctl.shapesByRow(baseShape, index, false)

      const selected = new Set(shapesByTrack)

      let changes = pcb.emptyChanges(it)
      changes = cll.generateDuplicateChanges(changes, objects, page, selected, gpt.point(0, 0), libraries, libraryData, fileId)
      changes = cll.generateDuplicateChangesUpdateIndices(changes, objects, selected)

      const idsMap: Record<string, string> = {}
      changes.redoChanges
        .filter((c: any) => c.type === 'add-obj' && selected.has(c.oldId))
        .forEach((c: any) => {
          idsMap[c.oldId] = c.obj.id
        })

      changes = pcb.updateShapes(changes, ids, (shape: any, objs: any) => {
        const restored = {
          ...shape,
          layoutGridCells: baseShape.layoutGridCells,
          layoutGridColumns: baseShape.layoutGridColumns,
          layoutGridRows: baseShape.layoutGridRows
        }
        return type === 'row'
          ? ctl.duplicateRow(restored, objs, index, idsMap)
          : ctl.duplicateColumn(restored, objs, index, idsMap)
      }, { withObjects: true })

      const undoId = Symbol()

      return rx.of(
        dwu.startUndoTransaction(undoId),
        dch.commitChanges(changes),
        ptk.dataEvent('layout/update', { ids }),
        dwu.commitUndoTransaction(undoId)
      )
    }
  }
}

export function reorderLayoutTrack(
  ids: string[],
  type: 'row' | 'column',
  fromIndex: number,
  toIndex: number,
  moveContent: boolean
): Event {
  return {
    type: 'reorder-layout-track',
    execute: 'watch',
    watch: function(_: any, __: any, ___: any) {
      const undoId = Symbol()

      return rx.of(
        dwu.startUndoTransaction(undoId),
        dwsh.updateShapes(ids, (shape: any) =>
          type === 'row'
            ? ctl.reorderGridRow(shape, fromIndex, toIndex, moveContent)
            : ctl.reorderGridColumn(shape, fromIndex, toIndex, moveContent)
        ),
        ptk.dataEvent('layout/update', { ids }),
        dwu.commitUndoTransaction(undoId)
      )
    }
  }
}

export function hoverLayoutTrack(
  ids: string[],
  type: 'row' | 'column',
  index: number,
  hover: boolean
): Event {
  return {
    type: 'hover-layout-track',
    execute: 'update',
    update: function(_: any, state: any) {
      const objects = dsh.lookupPageObjects(state)
      const shape = objects[ids[0]]

      let highlighted: Set<string> | null = null
      if (hover) {
        const trackShapes = type === 'row'
          ? ctl.shapesByRow(shape, index)
          : ctl.shapesByColumn(shape, index)
        highlighted = new Set(trackShapes)
      }

      let result = state
      if (hover) {
        result = d.updateIn(result, ['workspace-grid-edition', ids[0], 'hoverTrack'], (v: any) =>
          (v || new Set()).add([type, index])
        )
      } else {
        result = d.updateIn(result, ['workspace-grid-edition', ids[0], 'hoverTrack'], (v: any) =>
          (v || new Set()).delete([type, index])
        )
      }
      return d.assoc(result, 'highlighted', highlighted)
    }
  }
}

export function changeLayoutTrack(
  ids: string[],
  type: 'row' | 'column',
  index: number,
  props: any
): Event {
  return {
    type: 'change-layout-track',
    execute: 'watch',
    watch: function(_: any, __: any, ___: any) {
      const undoId = Symbol()
      const property = type === 'row' ? 'layoutGridRows' : 'layoutGridColumns'

      return rx.of(
        dwu.startUndoTransaction(undoId),
        dwsh.updateShapes(ids, (shape: any) =>
          d.updateIn(shape, [property, index], (v: any) => ({ ...v, ...props }))
        ),
        ptk.dataEvent('layout/update', { ids }),
        dwu.commitUndoTransaction(undoId)
      )
    }
  }
}

function fixChildSizing(objects: any, parentChanges: any, shape: any): any {
  const parent = cfh.getParent(objects, shape.id)
  const mergedParent = d.deepMerge(parent, parentChanges)

  const autoWidth = ctl.autoWidth(mergedParent)
  const autoHeight = ctl.autoHeight(mergedParent)
  const col = ctl.col(mergedParent)
  const row = ctl.row(mergedParent)

  const allChildren = parent.shapes
    .map((id: string) => objects[id])
    .filter((s: any) => !ctl.positionAbsolute(s))

  let result = { ...shape }

  if (col && autoWidth && allChildren.every((c: any) => ctl.fillWidth(c))) {
    result.layoutItemHSizing = 'fix'
  }

  if (col && autoHeight && ctl.fillHeight(shape)) {
    result.layoutItemVSizing = 'fix'
  }

  if (row && autoWidth && ctl.fillWidth(shape)) {
    result.layoutItemHSizing = 'fix'
  }

  if (row && autoHeight && allChildren.every((c: any) => ctl.fillHeight(c))) {
    result.layoutItemVSizing = 'fix'
  }

  return result
}

function fixParentSizing(parent: any, objects: any, idsSet: Set<string>, changes: any): any {
  const autoWidth = ctl.autoWidth(parent)
  const autoHeight = ctl.autoHeight(parent)
  const col = ctl.col(parent)
  const row = ctl.row(parent)

  const allChildren = parent.shapes.map((id: string) => objects[id]).map((shape: any) =>
    idsSet.has(shape.id) ? d.deepMerge(shape, changes) : shape
  )

  let result = { ...parent }

  if (col && autoWidth && allChildren.every((c: any) => ctl.fillWidth(c))) {
    result.layoutItemHSizing = 'fix'
  }

  if (col && autoHeight && allChildren.some((c: any) => ctl.fillHeight(c))) {
    result.layoutItemVSizing = 'fix'
  }

  if (row && autoWidth && allChildren.some((c: any) => ctl.fillWidth(c))) {
    result.layoutItemHSizing = 'fix'
  }

  if (row && autoHeight && allChildren.every((c: any) => ctl.fillHeight(c))) {
    result.layoutItemVSizing = 'fix'
  }

  return result
}

export function updateLayoutChild(
  ids: string[],
  changes: any,
  options?: any
): Event {
  return {
    type: 'update-layout-child',
    execute: 'watch',
    watch: function(_: any, state: any, __: any) {
      const pageId = options?.pageId || state.currentPageId
      const objects = dsh.lookupPageObjects(state, pageId)
      const childrenIds = ids.flatMap((id: string) => cfh.getChildrenIds(objects, id))
      const parentIds = ids.map((id: string) => cfh.getParentId(objects, id))
      const undoId = Symbol()
      const marginAttrs = changes.layoutItemMargin ? Object.keys(changes.layoutItemMargin) : []

      return rx.of(
        dwu.startUndoTransaction(undoId),
        dwsh.updateShapes(ids, d.patchObject(changes),
          marginAttrs.length > 0 ? { ...options, changedSubAttr: new Set(marginAttrs) } : options),
        dwsh.updateShapes(childrenIds, (s: any) => fixChildSizing(objects, changes, s), options),
        dwsh.updateShapes(parentIds,
          (parent: any, objs: any) => {
            let result = fixParentSizing(parent, objs, new Set(ids), changes)
            if (ctl.gridLayout(result)) {
              result = ctl.assignCells(result, objs)
            }
            return result
          },
          { ...options, withObjects: true }),
        ptk.dataEvent('layout/update', { ids }),
        dwu.commitUndoTransaction(undoId)
      )
    }
  }
}

export function updateGridCells(layoutId: string, ids: string[], props: any): Event {
  return {
    type: 'update-grid-cells',
    execute: 'watch',
    watch: function(_: any, __: any, ___: any) {
      const undoId = Symbol()

      return rx.of(
        dwu.startUndoTransaction(undoId),
        dwsh.updateShapes([layoutId], (shape: any) =>
          ids.reduce((acc: any, cellId: string) =>
            d.updateInWhen(acc, ['layout-grid-cells', cellId], d.patchObject(props))
          , shape)
        ),
        ptk.dataEvent('layout/update', { ids: [layoutId] }),
        dwu.commitUndoTransaction(undoId)
      )
    }
  }
}

export function changeCellsMode(
  layoutId: string,
  ids: string[],
  mode: 'auto' | 'manual' | 'area'
): Event {
  return {
    type: 'change-cells-mode',
    execute: 'watch',
    watch: function(_: any, __: any, ___: any) {
      const undoId = Symbol()

      return rx.of(
        dwu.startUndoTransaction(undoId),
        dwsh.updateShapes([layoutId], (shape: any, objects: any) => {
          switch (mode) {
            case 'auto':
              return ids.reduce((acc: any, cellId: string) => {
                const cell = acc.layoutGridCells?.[cellId]
                if (!cell) return acc
                if (['area', 'manual'].includes(cell.position) || cell.rowSpan > 1 || cell.columnSpan > 1) {
                  acc = d.updateInWhen(acc, ['layout-grid-cells', cellId], (c: any) => ({
                    ...c,
                    shapes: [],
                    position: 'auto'
                  }))
                  acc = d.updateInWhen(acc, ['layout-grid-cells', cellId], (c: any) => {
                    const { areaName, ...rest } = c
                    return rest
                  })
                  acc = ctl.resizeCellArea(acc, cell.row, cell.column, cell.row, cell.column, 1, 1)
                  acc = ctl.assignCells(acc, objects)
                }
                return acc
              }, shape)

            case 'manual':
              return ids.reduce((acc: any, cellId: string) => {
                const cell = acc.layoutGridCells?.[cellId]
                if (!cell) return acc
                if (['area', 'auto'].includes(cell.position)) {
                  acc = d.assocInWhen(acc, ['layout-grid-cells', cellId, 'position'], 'manual')
                  acc = d.updateInWhen(acc, ['layout-grid-cells', cellId], (c: any) => {
                    const { areaName, ...rest } = c
                    return rest
                  })
                  acc = ctl.assignCells(acc, objects)
                }
                return acc
              }, shape)

            case 'area': {
              const cells = ids.map((id: string) => shape.layoutGridCells?.[id])
              const { firstRow, firstColumn, lastRow, lastColumn } = ctl.cellsCoordinates(cells)
              const targetCell = ctl.getCellByPosition(shape, firstRow, firstColumn)

              let result = ctl.resizeCellArea(
                shape,
                targetCell.row, targetCell.column,
                firstRow, firstColumn,
                1 + (lastRow - firstRow),
                1 + (lastColumn - firstColumn)
              )
              result = ctl.assignCells(result, objects)
              return d.updateInWhen(result, ['layout-grid-cells', targetCell.id], (c: any) => ({
                ...c,
                position: 'area'
              }))
            }
          }
        }, { withObjects: true }),
        dwge.cleanSelection(layoutId),
        ptk.dataEvent('layout/update', { ids: [layoutId] }),
        dwu.commitUndoTransaction(undoId)
      )
    }
  }
}

export function mergeCells(layoutId: string, ids: string[]): Event {
  return {
    type: 'merge-cells',
    execute: 'watch',
    watch: function(_: any, __: any, ___: any) {
      const undoId = Symbol()

      return rx.of(
        dwu.startUndoTransaction(undoId),
        dwsh.updateShapes([layoutId], (shape: any, objects: any) => {
          const cells = ids.map((id: string) => shape.layoutGridCells?.[id])
          const { firstRow, firstColumn, lastRow, lastColumn } = ctl.cellsCoordinates(cells)
          const targetCell = ctl.getCellByPosition(shape, firstRow, firstColumn)

          return ctl.assignCells(
            ctl.resizeCellArea(
              shape,
              targetCell.row, targetCell.column,
              firstRow, firstColumn,
              1 + (lastRow - firstRow),
              1 + (lastColumn - firstColumn)
            ),
            objects
          )
        }, { withObjects: true }),
        dwge.cleanSelection(layoutId),
        ptk.dataEvent('layout/update', { ids: [layoutId] }),
        dwu.commitUndoTransaction(undoId)
      )
    }
  }
}

export function updateGridCellPosition(
  layoutId: string,
  cellId: string,
  props: any
): Event {
  return {
    type: 'update-grid-cell-position',
    execute: 'watch',
    watch: function(_: any, __: any, ___: any) {
      const undoId = Symbol()

      return rx.of(
        dwu.startUndoTransaction(undoId),
        dwsh.updateShapes([layoutId], (shape: any, objects: any) => {
          const prevData = {
            row: shape.layoutGridCells?.[cellId]?.row,
            column: shape.layoutGridCells?.[cellId]?.column,
            rowSpan: shape.layoutGridCells?.[cellId]?.rowSpan,
            columnSpan: shape.layoutGridCells?.[cellId]?.columnSpan
          }
          const newData = { ...prevData, ...props }

          return ctl.assignCells(
            ctl.resizeCellArea(
              shape,
              prevData.row, prevData.column,
              newData.row, newData.column,
              newData.rowSpan, newData.columnSpan
            ),
            objects
          )
        }, { withObjects: true }),
        ptk.dataEvent('layout/update', { ids: [layoutId] }),
        dwu.commitUndoTransaction(undoId)
      )
    }
  }
}

export function createCellBoard(layoutId: string, cellIds: string[]): Event {
  return {
    type: 'create-cell-board',
    execute: 'watch',
    watch: function(it: any, state: any, __: any) {
      const pageId = state.currentPageId
      const objects = dsh.lookupPageObjects(state)
      const frameId = uuid.next()
      const undoId = Symbol()

      const shape = objects[layoutId]
      const cells = cellIds.map((id: string) => shape.layoutGridCells?.[id])
      const selected = new Set(cells.flatMap((c: any) => c?.shapes || []))

      const { firstRow, firstColumn, lastRow, lastColumn } = ctl.cellsCoordinates(cells)
      const targetCell = ctl.getCellByPosition(shape, firstRow, firstColumn)

      let changes = pcb.emptyChanges(it, pageId)
      changes = pcb.withObjects(changes, objects)

      if (d.notEmpty(selected)) {
        changes = cfsh.prepareCreateArtboardFromSelection(
          changes, frameId, layoutId, objects, selected, 0, null, true, targetCell.id
        )
      } else {
        changes = cfsh.prepareCreateEmptyArtboard(
          changes, frameId, layoutId, objects, 0, null, true, targetCell.id
        )
      }

      changes = pcb.updateShapes(changes, [frameId], (s: any) => ({
        ...s,
        layoutItemHSizing: 'fill',
        layoutItemVSizing: 'fill'
      }))

      const newRowSpan = 1 + (lastRow - firstRow)
      const newColSpan = 1 + (lastColumn - firstColumn)

      changes = pcb.updateShapes(changes, [layoutId], (s: any) =>
        ctl.resizeCellArea(
          s,
          targetCell.row, targetCell.column,
          firstRow, firstColumn,
          newRowSpan, newColSpan
        )
      )

      return rx.of(
        dwu.startUndoTransaction(undoId),
        dch.commitChanges(changes),
        ptk.dataEvent('layout/update', { ids: [layoutId] }),
        dwu.commitUndoTransaction(undoId)
      )
    }
  }
}
