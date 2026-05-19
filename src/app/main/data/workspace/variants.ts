// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from 'app/common/data'
import * as dm from 'app/common/data/macros'
import * as pcb from 'app/common/files/changes-builder'
import * as cfh from 'app/common/files/helpers'
import * as cfv from 'app/common/files/variant'
import * as gpt from 'app/common/geom/point'
import * as clvp from 'app/common/logic/variant-properties'
import * as clv from 'app/common/logic/variants'
import * as cpn from 'app/common/path-names'
import * as clr from 'app/common/types/color'
import * as ctc from 'app/common/types/component'
import * as ctkl from 'app/common/types/components-list'
import * as ctf from 'app/common/types/file'
import * as ctsl from 'app/common/types/shape/layout'
import * as ctv from 'app/common/types/variant'
import * as uuid from 'app/common/uuid'
import * as dch from 'app/main/data/changes'
import * as dcm from 'app/main/data/common'
import * as ev from 'app/main/data/event'
import * as dsh from 'app/main/data/helpers'
import * as cl from 'app/main/data/workspace/colors'
import * as dwl from 'app/main/data/workspace/libraries'
import * as dwpg from 'app/main/data/workspace/pages'
import * as dws from 'app/main/data/workspace/selection'
import * as dwsl from 'app/main/data/workspace/shape-layout'
import * as dwsh from 'app/main/data/workspace/shapes'
import * as dwt from 'app/main/data/workspace/transforms'
import * as dwu from 'app/main/data/workspace/undo'
import * as dom from 'app/util/dom'
import * as rx from 'beicon.v2.core'
import * as ptk from 'potok.v2.core'

import type { Event, UpdateEvent, WatchEvent, EffectEvent } from 'potok.v2.core'

export function updatePropertiesNamesAndValues(
  componentId: string,
  variantId: string,
  previousProperties: any[],
  updatedProperties: any[]
): Event {
  return {
    type: 'update-properties-names-and-values',
    execute: 'update-watch',
    update: function(_: any, state: any) {
      return d.update(state, 'workspace-local', s => d.dissoc(s, 'shape-for-rename'))
    },
    watch: function(it: any, state: any, _: any) {
      const pageId = state.currentPageId
      const data = dsh.lookupFileData(state)
      const objects = dsh.getPage(data, pageId)?.objects

      const updatedProps = ctv.updateNumberInRepeatedPropNames(updatedProperties)

      const propertiesToRemove = ctv.findPropertiesToRemove(previousProperties, updatedProps)
      const propertiesToAdd = ctv.findPropertiesToAdd(previousProperties, updatedProps)
      const propertiesToUpdate = ctv.findPropertiesToUpdate(previousProperties, updatedProps)

      let changes = pcb.emptyChanges(it, pageId)
      changes = pcb.withObjects(changes, objects)
      changes = pcb.withLibraryData(changes, data)

      changes = propertiesToRemove.reduce(
        (chs: any, { name }: any) =>
          clvp.generateUpdatePropertyValue(chs, componentId, ctv.findIndexForPropertyName(previousProperties, name), ''),
        changes
      )

      changes = propertiesToUpdate.reduce(
        (chs: any, { name, value }: any) =>
          clvp.generateUpdatePropertyValue(chs, componentId, ctv.findIndexForPropertyName(previousProperties, name), value),
        changes
      )

      changes = propertiesToAdd.reduce(
        (chs: any, [idx, { name, value }]: [number, any]) => {
          chs = clvp.generateAddNewProperty(chs, variantId, { propertyName: name })
          return clvp.generateUpdatePropertyValue(chs, componentId, idx + previousProperties.length, value)
        },
        changes
      )

      const undoId = Symbol()

      return rx.of(
        (propertiesToRemove.length > 0 || propertiesToUpdate.length > 0) ?
          ev.event({ [ev.evName]: 'variant-edit-property-value', [ev.evOrigin]: 'workspace:rename-in-layers' }) : null,
        propertiesToAdd.length > 0 ?
          ev.event({ [ev.evName]: 'variant-add-property', [ev.evOrigin]: 'workspace:rename-in-layers' }) : null,
        dwu.startUndoTransaction(undoId),
        dch.commitChanges(changes),
        dwu.commitUndoTransaction(undoId)
      )
    }
  }
}

export function updatePropertyName(
  variantId: string,
  pos: number,
  newName: string,
  { trigger }: { trigger?: string } = {}
): Event {
  return {
    type: 'update-property-name',
    execute: 'update-watch',
    update: function(_: any, state: any) {
      const fileId = state.currentFileId
      const data = dsh.lookupFileData(state)
      const objects = dsh.lookupPageObjects(state)

      const relatedComponents = cfv.findVariantComponents(data, objects, variantId)

      return relatedComponents.reduce(
        (s: any, relatedComponent: any) =>
          d.updateIn(s, ['files', fileId, 'data', 'components', relatedComponent.id, 'variant-properties'],
            (props: any[]) => props.map((p: any) => Object.assign({}, p))),
        state
      )
    },
    watch: function(it: any, state: any, _: any) {
      const pageId = state.currentPageId
      const data = dsh.lookupFileData(state)
      const objects = dsh.getPage(data, pageId)?.objects

      const relatedComponents = cfv.findVariantComponents(data, objects, variantId)

      const props = relatedComponents[relatedComponents.length - 1]?.variantProperties
      const validPos = props && props.length > pos
      const propName = validPos ? props[pos]?.name : null

      const changes = validPos && propName !== newName ?
        (() => {
          let chs = pcb.emptyChanges(it, pageId)
          chs = pcb.withObjects(chs, objects)
          chs = pcb.withLibraryData(chs, data)
          return clvp.generateUpdatePropertyName(chs, variantId, pos, newName)
        })() : null

      const undoId = Symbol()

      if (validPos && propName !== newName) {
        return rx.of(
          dwu.startUndoTransaction(undoId),
          dch.commitChanges(changes),
          dwu.commitUndoTransaction(undoId),
          ev.event({ [ev.evName]: 'variant-edit-property-name', [ev.evOrigin]: trigger })
        )
      }
      return rx.empty()
    }
  }
}

export function updatePropertyValue(
  componentId: string,
  pos: number,
  value: string
): Event {
  return {
    type: 'update-property-value',
    execute: 'watch',
    watch: function(it: any, state: any, _: any) {
      const pageId = state.currentPageId
      const data = dsh.lookupFileData(state)
      const objects = dsh.getPage(data, pageId)?.objects

      let changes = pcb.emptyChanges(it, pageId)
      changes = pcb.withLibraryData(changes, data)
      changes = pcb.withObjects(changes, objects)
      changes = clvp.generateUpdatePropertyValue(changes, componentId, pos, value)

      const undoId = Symbol()

      return rx.of(
        dwu.startUndoTransaction(undoId),
        dch.commitChanges(changes),
        dwu.commitUndoTransaction(undoId)
      )
    }
  }
}

export function updateError(componentId: string, value?: boolean): Event {
  return {
    type: 'update-error',
    execute: 'watch',
    watch: function(it: any, state: any, _: any) {
      const pageId = state.currentPageId
      const data = dsh.lookupFileData(state)
      const objects = dsh.getPage(data, pageId)?.objects

      let changes = pcb.emptyChanges(it, pageId)
      changes = pcb.withLibraryData(changes, data)
      changes = pcb.withObjects(changes, objects)
      changes = clvp.generateSetVariantError(changes, componentId, value ?? null)

      const undoId = Symbol()

      return rx.of(
        dwu.startUndoTransaction(undoId),
        dch.commitChanges(changes),
        dwu.commitUndoTransaction(undoId)
      )
    }
  }
}

export function removeProperty(variantId: string, pos: number): Event {
  return {
    type: 'remove-property',
    execute: 'watch',
    watch: function(it: any, state: any, _: any) {
      const pageId = state.currentPageId
      const data = dsh.lookupFileData(state)
      const objects = dsh.getPage(data, pageId)?.objects

      let changes = pcb.emptyChanges(it, pageId)
      changes = pcb.withLibraryData(changes, data)
      changes = pcb.withObjects(changes, objects)
      changes = clvp.generateRemoveProperty(changes, variantId, pos)

      const undoId = Symbol()

      return rx.of(
        dwu.startUndoTransaction(undoId),
        dch.commitChanges(changes),
        dwu.commitUndoTransaction(undoId)
      )
    }
  }
}

export function removeEmptyProperties(variantId: string): Event {
  return {
    type: 'remove-empty-properties',
    execute: 'watch',
    watch: function(it: any, state: any, _: any) {
      const pageId = state.currentPageId
      const data = dsh.lookupFileData(state)
      const objects = dsh.getPage(data, pageId)?.objects

      const variantComponents = cfv.findVariantComponents(data, objects, variantId)

      const propertiesEmptyPos = (variantComponents
        .flatMap((c: any) => c.variantProperties)
        .groupBy((p: any) => p.name) as any)
        .entries()
        .map(([i, [_, v]]: [number, [any, any[]]]) => [i, v.every((p: any) => !p.value)] as [number, boolean])
        .toSeq()
        .reverse()

      let changes = pcb.emptyChanges(it, pageId)
      changes = pcb.withLibraryData(changes, data)
      changes = pcb.withObjects(changes, objects)

      changes = propertiesEmptyPos.reduce(
        (chs: any, [pos, propertyEmpty]: [number, boolean]) =>
          propertyEmpty ? clvp.generateRemoveProperty(chs, variantId, pos) : chs,
        changes
      )

      const undoId = Symbol()

      if (changes.redoChanges?.length > 0) {
        return rx.of(
          ev.event({ [ev.evName]: 'variant-remove-property', [ev.evOrigin]: 'workspace:rename-in-layers' }),
          dwu.startUndoTransaction(undoId),
          dch.commitChanges(changes),
          dwu.commitUndoTransaction(undoId)
        )
      }
      return rx.empty()
    }
  }
}

export function addNewProperty(variantId: string, options?: any): Event {
  return {
    type: 'add-new-property',
    execute: 'watch',
    watch: function(it: any, state: any, _: any) {
      const pageId = state.currentPageId
      const data = dsh.lookupFileData(state)
      const objects = dsh.getPage(data, pageId)?.objects

      let changes = pcb.emptyChanges(it, pageId)
      changes = pcb.withLibraryData(changes, data)
      changes = pcb.withObjects(changes, objects)
      changes = clvp.generateAddNewProperty(changes, variantId, options)

      const undoId = Symbol()

      return rx.of(
        dwu.startUndoTransaction(undoId),
        dch.commitChanges(changes),
        dwu.commitUndoTransaction(undoId)
      )
    }
  }
}

export function reorderVariantPoperties(
  variantId: string,
  fromPos: number,
  toSpaceBetweenPos: number
): Event {
  return {
    type: 'reorder-variant-properties',
    execute: 'watch',
    watch: function(it: any, state: any, _: any) {
      const pageId = state.currentPageId
      const data = dsh.lookupFileData(state)
      const objects = dsh.getPage(data, pageId)?.objects

      let changes = pcb.emptyChanges(it, pageId)
      changes = pcb.withLibraryData(changes, data)
      changes = pcb.withObjects(changes, objects)
      changes = clvp.generateReorderVariantPoperties(changes, variantId, fromPos, toSpaceBetweenPos)

      const undoId = Symbol()

      return rx.of(
        dwu.startUndoTransaction(undoId),
        dch.commitChanges(changes),
        dwu.commitUndoTransaction(undoId)
      )
    }
  }
}

function setVariantId(componentId: string, variantId: string): Event {
  return {
    type: 'set-variant-id',
    execute: 'watch',
    watch: function(it: any, state: any, _: any) {
      const pageId = state.currentPageId
      const data = dsh.lookupFileData(state)

      let changes = pcb.emptyChanges(it, pageId)
      changes = pcb.withLibraryData(changes, data)
      changes = pcb.updateComponent(changes, componentId, (c: any) => ({ ...c, variantId }))

      const undoId = Symbol()

      return rx.of(
        dwu.startUndoTransaction(undoId),
        dch.commitChanges(changes),
        dwu.commitUndoTransaction(undoId)
      )
    }
  }
}

function focusProperty(variantId: string): Event {
  return {
    type: 'focus-property',
    execute: 'effect',
    effect: function(_: any, __: any, ___: any) {
      dom.focus(dom.getElement(`variant-prop-${variantId}-0`))
    }
  }
}

function respositionAndResizeVariant(shapeId: string): Event {
  return {
    type: 'resposition-and-resize-variant',
    execute: 'watch',
    watch: function(_: any, state: any, __: any) {
      const pageId = state.currentPageId
      const objects = dsh.lookupPageObjects(state, pageId)
      const shape = objects[shapeId]
      const container = objects[shape.parentId]
      const width = container.width + shape.width + 20 // 20 is the default gap for variants
      const x = width - shape.width - 30 // 30 is the default margin for variants

      return rx.of(
        dwt.updateDimensions([shape.parentId], 'width', width),
        dwt.updatePosition(shapeId, { x }, { absolute: false })
      )
    }
  }
}

export function addNewVariant(shapeId: string, multiselect?: boolean): Event {
  return {
    type: 'add-new-variant',
    execute: 'watch',
    watch: function(it: any, state: any, _: any) {
      const pageId = state.currentPageId
      const data = dsh.lookupFileData(state)
      const objects = dsh.getPage(data, pageId)?.objects
      let shape = objects[shapeId]

      if (ctc.isVariantContainer(shape)) {
        shape = objects[shape.shapes[shape.shapes.length - 1]]
      }

      const componentId = shape.componentId
      const component = ctkl.getComponent(data, componentId)

      const containerId = shape.parentId
      const variantContainer = objects[containerId]
      const hasLayout = ctsl.anyLayout(variantContainer)

      const newComponentId = uuid.next()
      const newShapeId = uuid.next()

      const propNum = component.variantProperties.length - 1

      let changes = pcb.emptyChanges(it, pageId)
      changes = pcb.withLibraryData(changes, data)
      changes = pcb.withObjects(changes, objects)
      changes = pcb.withPageId(changes, pageId)
      changes = clv.generateAddNewVariant(changes, shape, component.variantId, newComponentId, newShapeId, propNum)

      const undoId = Symbol()

      return rx.concat(
        rx.of(
          dwu.startUndoTransaction(undoId),
          dch.commitChanges(changes),
          !hasLayout ? respositionAndResizeVariant(newShapeId) : null,
          dwu.commitUndoTransaction(undoId),
          ptk.dataEvent('layout/update', { ids: [shape.parentId] }),
          multiselect ? dws.shiftSelectShapes(newShapeId) : dws.selectShape(newShapeId)
        ),
        rx.of(focusProperty(variantContainer.id)).pipe(rx.delay(250))
      )
    }
  }
}

export function transformInVariant(
  mainInstanceId: string,
  variantId?: string | null,
  delta?: any | null,
  prefix?: any[] | null,
  addWrapper?: boolean | null,
  duplicate?: boolean | null,
  flex?: boolean | null
): Event {
  return {
    type: 'transform-in-variant',
    execute: 'watch',
    watch: function(_: any, state: any, __: any) {
      const variantIdOrDefault = variantId ?? uuid.next()
      const variantVec = [variantIdOrDefault]
      const fileId = state.currentFileId
      const pageId = state.currentPageId
      const objects = dsh.lookupPageObjects(state, fileId, pageId)
      const main = objects[mainInstanceId]
      const parent = objects[main.parentId]
      const componentId = main.componentId
      let name = addWrapper ? `Component/${main.name}` : main.name

      // If there is a prefix, set is as first item of path
      let cpath = cpn.splitPath(name)
      if (prefix && prefix.length > 0) {
        const joined = cpn.joinPath(prefix)
        cpath = [joined, ...cpath.slice(prefix.length)]
      }

      name = cpath[0]
      const numProps = Math.max(1, cpath.length - 1)

      const baseProps = {
        isVariantContainer: true,
        name: name,
        r1: 20,
        r2: 20,
        r3: 20,
        r4: 20,
        layoutItemAbsolute: true
      }

      const flexProps = {
        layoutItemHSizing: 'auto' as const,
        layoutItemVSizing: 'auto' as const,
        layoutPadding: { p1: 30, p2: 30, p3: 30, p4: 30 },
        layoutGap: { rowGap: 0, columnGap: 20 }
      }

      const contProps = flex ? { ...baseProps, ...flexProps } : baseProps

      const mainProps = {
        name: name,
        variantId: variantIdOrDefault
      }

      const strokeProps = {
        strokeAlignment: 'inner' as const,
        strokeStyle: 'solid' as const,
        strokeColor: '#bb97d8',
        strokeOpacity: 1,
        strokeWidth: 2
      }

      // Move the position of the variant container so the main shape doesn't change its position
      const deltaOrDefault = delta ??
        (ctsl.anyLayout(parent) ? gpt.point(0, 0) : gpt.point(-30, -30))

      const undoId = Symbol()

      return rx.concat(
        rx.of(
          dwu.startUndoTransaction(undoId),

          name !== main.name ? dwl.renameComponent(componentId, name) : null,

          // Create variant container
          dwsh.createArtboardFromShapes([mainInstanceId], variantIdOrDefault, null, null, null, deltaOrDefault, flex),
          cl.removeAllFills(variantVec, { color: clr.black, opacity: 1 }),
          flex ? dwsl.createLayoutFromId(variantIdOrDefault, 'flex') : null,
          dwsh.updateShapes(variantVec, (s: any) => ({ ...s, ...contProps })),
          dwsh.updateShapes([mainInstanceId], (s: any) => ({ ...s, ...mainProps })),
          cl.addStroke(variantVec, strokeProps),
          setVariantId(componentId, variantIdOrDefault)
        ),

        rx.from(Array.from({ length: numProps }, () => addNewProperty(variantIdOrDefault, { fillValues: true }))),

        cpath.length > 1 ?
          rx.from(cpath.slice(1).map((_, i) => updatePropertyValue(componentId, i, cpath[i + 1]))) :
          rx.empty(),

        rx.of(
          duplicate ? addNewVariant(mainInstanceId) : null,
          dwsh.updateShapes(variantVec, (s: any) => {
            const { layoutItemAbsolute, ...rest } = s
            return rest
          }),
          dwu.commitUndoTransaction(undoId),
          flex ? ptk.dataEvent('layout/update', { ids: [variantIdOrDefault] }) : null
        )
      )
    }
  }
}

export function addComponentOrVariant(): Event {
  return {
    type: 'add-component-or-variant',
    execute: 'watch',
    watch: function(_: any, state: any, __: any) {
      const objects = dsh.lookupPageObjects(state)
      const selectedIds = dsh.lookupSelected(state)
      const selectedShapes = selectedIds.map((id: string) => objects[id])
      const single = selectedIds.length === 1
      const firstShape = selectedShapes[0]

      const transformInVariantFlag = single &&
        !ctc.isVariant(firstShape) &&
        ctc.mainInstance(firstShape)

      const addNewVariantFlag = selectedShapes.every((s: any) => ctc.isVariant(s))

      const undoId = Symbol()

      if (transformInVariantFlag) {
        return rx.of(
          ev.event({ [ev.evName]: 'transform-in-variant', [ev.evOrigin]: 'workspace:shortcut' }),
          transformInVariant(firstShape.id)
        )
      }

      if (addNewVariantFlag) {
        return rx.concat(
          rx.of(
            ev.event({ [ev.evName]: 'add-new-variant', [ev.evOrigin]: 'workspace:shortcut-create-component' }),
            dwu.startUndoTransaction(undoId)
          ),
          rx.from(selectedIds.map((id: string) => addNewVariant(id))),
          rx.of(dwu.commitUndoTransaction(undoId))
        )
      }

      return rx.of(dwl.addComponent())
    }
  }
}

export function duplicateOrAddVariant(): Event {
  return {
    type: 'duplicate-or-add-variant',
    execute: 'watch',
    watch: function(_: any, state: any, __: any) {
      const objects = dsh.lookupPageObjects(state)
      const selectedIds = dsh.lookupSelected(state)
      const selectedShapes = selectedIds.map((id: string) => objects[id])
      const addNewVariantFlag = selectedShapes.every((s: any) => ctc.isVariant(s))
      const undoId = Symbol()

      if (addNewVariantFlag) {
        return rx.concat(
          rx.of(
            ev.event({ [ev.evName]: 'add-new-variant', [ev.evOrigin]: 'workspace:shortcut-duplicate' }),
            dwu.startUndoTransaction(undoId),
            addNewVariant(selectedIds[0], false)
          ),
          rx.from(selectedIds.slice(1).map((id: string) => addNewVariant(id, true))),
          rx.of(dwu.commitUndoTransaction(undoId))
        )
      }

      return rx.of(dws.duplicateSelected(true))
    }
  }
}

export function renameVariant(variantId: string, name: string): Event {
  return {
    type: 'rename-variant',
    execute: 'watch',
    watch: function(_: any, state: any, __: any) {
      const pageId = state.currentPageId
      const data = dsh.lookupFileData(state)
      const objects = dsh.getPage(data, pageId)?.objects
      const variantComponents = cfv.findVariantComponents(data, objects, variantId)
      const cleanName = cpn.cleanPath(name)
      const undoId = Symbol()

      return rx.concat(
        rx.of(
          dwu.startUndoTransaction(undoId),
          dwsh.updateShapes([variantId], (s: any) => ({ ...s, name: cleanName }))
        ),
        rx.from(variantComponents.map((c: any) => dwl.renameComponentAndMainInstance(c.id, cleanName))),
        rx.of(dwu.commitUndoTransaction(undoId))
      )
    }
  }
}

export function renameCompOrVariantAndMain(componentId: string, name: string): Event {
  return {
    type: 'rename-comp-or-variant-and-main',
    execute: 'watch',
    watch: function(_: any, state: any, __: any) {
      const data = dsh.lookupFileData(state)
      const component = ctkl.getComponent(data, componentId)

      if (ctc.isVariant(component)) {
        return rx.of(renameVariant(component.variantId, name))
      }
      return rx.of(dwl.renameComponentAndMainInstance(componentId, name))
    }
  }
}

function boundingRect(frames: any[]): { x: number; y: number; width: number; height: number } {
  const xs = frames.map((f: any) => f.x)
  const ys = frames.map((f: any) => f.y)
  const x2s = frames.map((f: any) => f.x + f.width)
  const y2s = frames.map((f: any) => f.y + f.height)
  const minX = Math.min(...xs)
  const minY = Math.min(...ys)
  const maxX = Math.max(...x2s)
  const maxY = Math.max(...y2s)

  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  }
}

function commonPrefix(paths: string[][]): string[] {
  return paths[0]?.filter((_, i) => paths.every((p: string[]) => p[i] === paths[0][i])) ?? []
}

export function combineAsVariants(
  ids: string[],
  { pageId, trigger }: { pageId?: string; trigger?: string } = {}
): Event {
  return {
    type: 'combine-as-variants',
    execute: 'watch',
    watch: function(_: any, state: any, stream: any) {
      const currentPage = state.currentPageId

      const combine = (currentPage: string) => {
        const objects = dsh.lookupPageObjects(state, currentPage)
        const cleanedIds = cfh.cleanLoops(objects, ids).filter((id: string) => {
          const shape = objects[id]
          return !(!ctc.mainInstance(shape) || ctc.isVariant(shape))
        })

        if (cleanedIds.length <= 1) return rx.empty()

        const shapes = cleanedIds.map((id: string) => objects[id])
        const rect = boundingRect(shapes)
        const splitNames = shapes.map((s: any) => cpn.splitPath(s.name))
        const prefix = commonPrefix(splitNames)
        const addWrapper = prefix.length === 0
        const firstShape = shapes[0]
        const delta = gpt.point(
          rect.x - firstShape.x - 30,
          rect.y - firstShape.y - 30
        )

        const parents = cleanedIds.map((id: string) => cfh.getParentIds(objects, id).reverse())
        const commonParent = commonPrefix(parents).pop()
        const index = (objects[commonParent]?.shapes?.length ?? 0) + 1
        const variantId = uuid.next()
        const undoId = Symbol()

        return rx.concat(
          pageId && pageId !== currentPage ?
            rx.of(dcm.goToWorkspace({ pageId })) :
            rx.empty(),

          rx.of(
            dwu.startUndoTransaction(undoId),
            transformInVariant(cleanedIds[0], variantId, delta, prefix, addWrapper, false, false),
            dwsh.relocateShapes(new Set(cleanedIds.slice(1).reverse()), variantId, 0),
            dwsh.updateShapes(cleanedIds, (s: any) => ({
              ...s,
              constraintsH: 'left',
              constraintsV: 'top',
              fixedScroll: false
            })),
            dwsh.relocateShapes(new Set([variantId]), commonParent, index),
            dwt.updateDimensions([variantId], 'width', rect.width + 60),
            dwt.updateDimensions([variantId], 'height', rect.height + 60),
            ev.event({ [ev.evName]: 'combine-as-variants', [ev.evOrigin]: trigger, numberOfCombined: cleanedIds.length })
          ),

          rx.of(dwu.commitUndoTransaction(undoId)).pipe(rx.observeOn('async'))
        )
      }

      const redirectToPage = (pageId: string) => {
        return rx.merge(
          stream.pipe(
            rx.filter((e: any) => ptk.type(e) === dwpg.initializePage),
            rx.take(1),
            rx.observeOn('async'),
            rx.mapcat((_: any) => combine(pageId))
          ),
          rx.of(dcm.goToWorkspace({ pageId }))
        )
      }

      if (pageId && pageId !== currentPage) {
        return redirectToPage(pageId)
      }
      return combine(currentPage)
    }
  }
}

export function combineSelectedAsVariants(options: { pageId?: string; trigger?: string }): Event {
  return {
    type: 'combine-selected-as-variants',
    execute: 'watch',
    watch: function(_: any, state: any, __: any) {
      const selected = dsh.lookupSelected(state)
      return rx.of(combineAsVariants(selected, options))
    }
  }
}

function variantSwitch(
  shape: any,
  { pos, val, onError }: { pos: number; val: any; onError?: () => void } = { pos: 0, val: '' }
): Event {
  return {
    type: 'variant-switch',
    execute: 'watch',
    watch: function(_: any, state: any, __: any) {
      const libraries = dsh.lookupLibraries(state)
      const componentId = shape.componentId
      const component = ctf.getComponent(libraries, shape.componentFile, componentId, false)

      if (val === dm.getIn(component, ['variantProperties', pos, 'value'])) {
        return rx.empty()
      }

      const currentPageObjects = dsh.lookupPageObjects(state)
      const variantId = component.variantId
      const componentFileData = dm.getIn(libraries, [shape.componentFile, 'data'])
      const componentPageObjects = dsh.getPage(componentFileData, component.mainInstancePage)?.objects
      const variantComps = cfv.findVariantComponents(componentFileData, componentPageObjects, variantId)

      const targetProps = d.update(component.variantProperties, pos, (p: any) => ({ ...p, value: val }))
      const validComps = variantComps
        .filter((c: any) => c.id !== componentId)
        .filter((c: any) => dm.getIn(c, ['variantProperties', pos, 'value']) === val)
        .reverse()

      const nearestComp = validComps.reduce((min: any, c: any) => {
        const distA = ctv.distance(targetProps, min.variantProperties)
        const distB = ctv.distance(targetProps, c.variantProperties)
        return distB < distA ? c : min
      })

      const shapeParents = cfh.getParentsWithSelf(currentPageObjects, shape.parentId)
      const nearestCompChildren = cfh.getChildrenWithSelf(componentPageObjects, nearestComp.mainInstanceId)
      const compsNestingLoop = cfh.componentsNestingLoop?.(nearestCompChildren, shapeParents)

      if (!nearestComp) {
        return rx.empty()
      }

      if (compsNestingLoop) {
        if (onError) onError()
        return rx.empty()
      }

      return rx.of(
        dwl.componentSwap(shape, shape.componentFile, nearestComp.id, true),
        ev.event({ [ev.evName]: 'variant-switch', [ev.evOrigin]: 'workspace:design-tab' })
      )
    }
  }
}

export function variantsSwitch({ shapes, ...params }: { shapes: any[] }): Event {
  return {
    type: 'variants-switch',
    execute: 'watch',
    watch: function(_: any, __: any, ___: any) {
      const ids = d.orderedSet(d.xfMapId, shapes)
      const undoId = Symbol()

      return rx.concat(
        rx.of(dwu.startUndoTransaction(undoId)),
        rx.from(shapes).pipe(rx.map((s: any) => variantSwitch(s, params))),
        rx.of(
          dwu.commitUndoTransaction(undoId),
          dws.selectShapes(ids)
        )
      )
    }
  }
}
