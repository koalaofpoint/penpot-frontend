// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from 'app/common/data'
import * as dm from 'app/common/data/macros'
import * as pcb from 'app/common/files/changes-builder'
import * as cfh from 'app/common/files/helpers'
import * as gmt from 'app/common/geom/matrix'
import * as gm from 'app/common/geom/modifiers'
import * as gpt from 'app/common/geom/point'
import * as grc from 'app/common/geom/rect'
import * as gsh from 'app/common/geom/shapes'
import * as gslf from 'app/common/geom/shapes/flex-layout'
import * as gslg from 'app/common/geom/shapes/grid-layout'
import * as cls from 'app/common/logic/shapes'
import * as mth from 'app/common/math'
import * as ctk from 'app/common/types/component'
import * as ctn from 'app/common/types/container'
import * as ctm from 'app/common/types/modifiers'
import * as ctst from 'app/common/types/shape-tree'
import { editableAttrs } from 'app/common/types/shape/attrs'
import * as ctl from 'app/common/types/shape/layout'
import * as uuid from 'app/common/uuid'
import * as dch from 'app/main/data/changes'
import * as ev from 'app/main/data/event'
import * as dsh from 'app/main/data/helpers'
import * as dwc from 'app/main/data/workspace/collapse'
import * as dwm from 'app/main/data/workspace/modifiers'
import * as dws from 'app/main/data/workspace/selection'
import * as dwu from 'app/main/data/workspace/undo'
import * as features from 'app/main/features'
import * as snap from 'app/main/snap'
import * as st from 'app/main/store'
import * as ms from 'app/main/streams'
import * as wasmApi from 'app/render-wasm/api'
import * as array from 'app/util/array'
import * as dom from 'app/util/dom'
import * as kbd from 'app/util/keyboard'
import * as mse from 'app/util/mouse'
import * as rx from 'beicon.v2.core'
import * as ptk from 'potok.v2.core'

import type { Event } from 'potok.v2.core'

// -- Helpers --------------------------------------------------------

export function getHandlerMultiplier(handler: string): { x: number; y: number } {
  switch (handler) {
    case 'right': return gpt.point(1, 0)
    case 'bottom': return gpt.point(0, 1)
    case 'left': return gpt.point(-1, 0)
    case 'top': return gpt.point(0, -1)
    case 'top-right': return gpt.point(1, -1)
    case 'top-left': return gpt.point(-1, -1)
    case 'bottom-right': return gpt.point(1, 1)
    case 'bottom-left': return gpt.point(-1, 1)
    default: return gpt.point(0, 0)
  }
}

function getHandlerResizeOrigin(
  selrect: { x: number; y: number; width: number; height: number },
  handler: string
): { x: number; y: number } {
  const sx = dm.getProp(selrect, 'x')
  const sy = dm.getProp(selrect, 'y')
  const width = dm.getProp(selrect, 'width')
  const height = dm.getProp(selrect, 'height')
  const mx = sx + width / 2
  const my = sy + height / 2
  const ex = sx + width
  const ey = sy + height

  switch (handler) {
    case 'right': return gpt.point(sx, my)
    case 'bottom': return gpt.point(mx, sy)
    case 'left': return gpt.point(ex, my)
    case 'top': return gpt.point(mx, ey)
    case 'top-right': return gpt.point(sx, ey)
    case 'top-left': return gpt.point(ex, ey)
    case 'bottom-right': return gpt.point(sx, sy)
    case 'bottom-left': return gpt.point(ex, sy)
    default: return gpt.point(0, 0)
  }
}

function fixInitPoint(
  initial: { x: number; y: number },
  handler: string,
  shape: any
): { x: number; y: number } {
  const selrect = dm.getProp(shape, 'selrect')
  const x = dm.getProp(selrect, 'x')
  const y = dm.getProp(selrect, 'y')
  const width = dm.getProp(selrect, 'width')
  const height = dm.getProp(selrect, 'height')

  switch (handler) {
    case 'left':
      return { ...initial, x }
    case 'top':
      return { ...initial, y }
    case 'top-left':
      return { ...initial, x, y }
    case 'bottom-left':
      return { ...initial, x, y: y + height }
    case 'right':
      return { ...initial, x: x + width }
    case 'top-right':
      return { ...initial, x: x + width, y }
    case 'bottom-right':
      return { ...initial, x: x + width, y: y + height }
    case 'bottom':
      return { ...initial, y: y + height }
    default:
      return initial
  }
}

export function finishTransform(): Event {
  return {
    type: 'finish-transform',
    execute: 'update',
    update: function(_: any, state: any) {
      return d.update(
        d.update(state, 'workspace-local', (s: any) => d.dissoc(d.dissoc(s, 'transform'), 'duplicate-move-started')),
        d.dissoc,
        'workspace-selrect',
        'workspace-wasm-modifiers'
      )
    }
  }
}

// -- Resize --------------------------------------------------------

export function startResize(
  handler: string,
  ids: string[],
  shape: any
): Event {
  return {
    type: 'start-resize',
    execute: 'update-watch',
    update: function(_: any, state: any) {
      return d.assocIn(state, ['workspace-local', 'transform'], 'resize')
    },
    watch: function(_: any, state: any, stream: any) {
      if (shape.blocked) return rx.empty()

      const initialPosition = ms.mousePosition
      const stopper = mse.dragStopper(stream)
      const layout = state.workspaceLayout
      const pageId = state.currentPageId
      const focus = state.workspaceFocusSelected
      const zoom = dm.getIn(state, ['workspace-local', 'zoom'], 1)
      const objects = dsh.lookupPageObjects(state, pageId)
      const shapeIds = ids.filter((id: string) => !objects[id]?.blocked)

      if (shapeIds.length === 0) return rx.empty()

      const shapes = shapeIds.map((id: string) => objects[id])

      const resize = (shape: any, initial: any, layout: any, objects: any, [point, lock, center, pointSnap]: [any, boolean, boolean, any]) => {
        const selrect = dm.getProp(shape, 'selrect')
        const width = dm.getProp(selrect, 'width')
        const height = dm.getProp(selrect, 'height')
        const rotation = dm.getProp(shape, 'rotation') || 0

        const shapeCenter = gsh.shapeToCenter(shape)
        const shapeTransform = shape.transform
        const shapeTransformInverse = shape.transformInverse

        const transformedInitial = gmt.transformPointCenter(initial, shapeCenter, shapeTransformInverse)
        const fixedInitial = fixInitPoint(transformedInitial, handler, shape)

        const transformedPoint = gmt.transformPointCenter(
          rotation === 0 ? pointSnap : point,
          shapeCenter,
          shapeTransformInverse
        )

        const shapev = gpt.point(width, height)
        const scaleText = layout?.has?.('scale-text')
        const forceLock = lock || scaleText

        const deltav = gpt.multiply(gpt.toVec(fixedInitial, transformedPoint), getHandlerMultiplier(handler))

        let scalev = gpt.divide(gpt.add(shapev, deltav), shapev)
        scalev = gpt.noZeros(scalev)

        if (forceLock) {
          let v: number
          if (handler === 'right' || handler === 'left') {
            v = dm.getProp(scalev, 'x')
          } else if (handler === 'top' || handler === 'bottom') {
            v = dm.getProp(scalev, 'y')
          } else {
            v = Math.max(dm.getProp(scalev, 'x'), dm.getProp(scalev, 'y'))
          }
          scalev = gpt.point(v, v)
        }

        const handlerOrigin = getHandlerResizeOrigin(selrect, handler)

        let displacement = null
        if (center) {
          displacement = gpt.transform(
            gpt.multiply(
              gpt.subtract(
                gpt.add(handlerOrigin, gpt.multiply(gpt.subtract(shapeCenter, handlerOrigin), scalev)),
                handlerOrigin
              ),
              gpt.point(-1, -1)
            ),
            shapeTransform
          )
        }

        let resizeOrigin = gmt.transformPointCenter(handlerOrigin, shapeCenter, shapeTransform)
        if (displacement) {
          resizeOrigin = gpt.add(resizeOrigin, displacement)
        }

        const newGrowType = cfh.textShape(shape)
          ? dwm.nextGrowType(dm.getProp(shape, 'growType'), scalev)
          : null

        const changeWidth = !mth.close(dm.getProp(scalev, 'x'), 1)
        const changeHeight = !mth.close(dm.getProp(scalev, 'y'), 1)

        let modifiers = ctm.empty()

        if (displacement) {
          modifiers = ctm.move(displacement, modifiers)
        }

        modifiers = ctm.resize(
          scalev,
          resizeOrigin,
          shapeTransform,
          shapeTransformInverse,
          modifiers
        )

        if (
          (ctl.anyLayoutImmediateChild(objects, shape) || ctl.anyLayout(shape)) &&
          shape['layout-item-h-sizing'] !== 'fix' &&
          changeWidth
        ) {
          modifiers = ctm.changeProperty(modifiers, 'layout-item-h-sizing', 'fix')
        }

        if (
          (ctl.anyLayoutImmediateChild(objects, shape) || ctl.anyLayout(shape)) &&
          shape['layout-item-v-sizing'] !== 'fix' &&
          changeHeight
        ) {
          modifiers = ctm.changeProperty(modifiers, 'layout-item-v-sizing', 'fix')
        }

        if (newGrowType && newGrowType !== dm.getProp(shape, 'growType')) {
          modifiers = ctm.changeProperty(modifiers, 'grow-type', newGrowType)
        }

        if (scaleText) {
          modifiers = ctm.scaleContent(dm.getProp(scalev, 'x'), modifiers)
        }

        return modifiers
      }

      const normalizeProportionLock = ([[point, shift, alt]]: [any, boolean, boolean]) => {
        const proportionLock = shape['proportion-lock']
        return [point, proportionLock || shift, alt]
      }

      const resizeEventsStream = ms.mousePosition.pipe(
        rx.filter(Boolean),
        rx.withLatestFrom(ms.mousePositionShift, ms.mousePositionAlt),
        rx.map(normalizeProportionLock),
        rx.switchMap(([current]) =>
          snap.closestSnapPoint(pageId, shapes, objects, layout, zoom, focus, current[0]).pipe(
            rx.map((snapPoint: any) => [...current, snapPoint])
          )
        ),
        rx.map((current: any) => resize(shape, initialPosition, layout, objects, current)),
        rx.share()
      )

      const modifiersStream = features.activeFeature(state, 'render-wasm/v1')
        ? rx.merge(
            resizeEventsStream.pipe(
              rx.takeUntil(stopper),
              rx.mapcat((modifiers: any) => {
                const modifTree = dwm.createModifTree(shapeIds, modifiers)
                return rx.of(dwm.setWasmModifiers(modifTree, {
                  ignoreConstraints: layout?.has?.('scale-text')
                }))
              })
            ),
            resizeEventsStream.pipe(
              rx.takeUntil(stopper),
              rx.last(),
              rx.mapcat((modifiers: any) =>
                dwm.applyWasmModifiers(
                  dwm.createModifTree(shapeIds, modifiers),
                  { ignoreConstraints: layout?.has?.('scale-text') }
                )
              )
            )
          )
        : resizeEventsStream.pipe(
            rx.takeUntil(stopper),
            rx.mapcat((modifiers: any) => {
              const modifTree = dwm.createModifTree(shapeIds, modifiers)
              return rx.of(dwm.setModifiers(modifTree, layout?.has?.('scale-text')))
            })
          )

      return rx.concat(
        ms.mousePosition.pipe(
          rx.map((pos: any) => gpt.toVec(initialPosition, pos)),
          rx.map((vec: any) => gpt.length(vec)),
          rx.filter((len: number) => len > 10 / zoom),
          rx.take(1),
          rx.takeUntil(stopper),
          rx.mapcat(() => modifiersStream)
        ),
        features.activeFeature(state, 'render-wasm/v1')
          ? rx.of(finishTransform())
          : rx.of(dwm.applyModifiers(), finishTransform())
      )
    }
  }
}

export function triggerBoundingBoxCloaking(ids: string[]): Event {
  return {
    type: 'trigger-bounding-box-cloaking',
    execute: 'watch',
    watch: function(_: any, __: any, stream: any) {
      return rx.concat(
        rx.of((state: any) => d.assocIn(state, ['workspace-local', 'transform'], 'move')),
        rx.timer(1000).pipe(
          rx.map(() => (state: any) => d.assocIn(state, ['workspace-local', 'transform'], null)),
          rx.takeUntil(
            stream.pipe(rx.filter((e: any) => ptk.type(e) === 'trigger-bounding-box-cloaking'))
          )
        )
      )
    }
  }
}

export function updateDimensions(
  ids: string[],
  attr: 'width' | 'height',
  value: number,
  options?: any
): Event {
  return {
    type: 'update-dimensions',
    execute: 'watch',
    watch: function(_: any, state: any, __: any) {
      const pageId = options?.pageId || state.currentPageId
      const objects = dsh.lookupPageObjects(state, pageId)

      const getModifier = (shape: any) => {
        let modifiers = ctm.changeDimensionsModifiers(shape, attr, value)

        if (cfh.textShape(shape)) {
          const { width: srWidth, height: srHeight } = shape.selrect
          const newWidth = attr === 'width' ? value : srWidth
          const newHeight = attr === 'height' ? value : srHeight
          const scaleV = gpt.point(newWidth / srWidth, newHeight / srHeight)
          const currentGrowType = dm.getProp(shape, 'growType')
          const newGrowType = dwm.nextGrowType(currentGrowType, scaleV)

          if (newGrowType !== currentGrowType) {
            modifiers = ctm.changeProperty(modifiers, 'grow-type', newGrowType)
          }
        }

        return modifiers
      }

      const modifTree = dwm.buildModifTree(ids, objects, getModifier)

      if (features.activeFeature(state, 'render-wasm/v1')) {
        return rx.of(dwm.applyWasmModifiers(modifTree, { ...options, ignoreSnapPixel: true }))
      }

      const finalModifTree = gm.setObjectsModifiers(modifTree, objects)
      return rx.of(dwm.applyModifiers(objects, finalModifTree, null, options))
    }
  }
}

export function changeOrientation(
  ids: string[],
  orientation: 'horiz' | 'vert'
): Event {
  return {
    type: 'change-orientation',
    execute: 'update-watch',
    update: function(_: any, state: any) {
      if (features.activeFeature(state, 'render-wasm/v1')) {
        return state
      }

      const objects = dsh.lookupPageObjects(state)
      const getModifier = (shape: any) => ctm.changeOrientationModifiers(shape, orientation)
      const modifTree = gm.setObjectsModifiers(dwm.buildModifTree(ids, objects, getModifier), objects)

      return d.assoc(state, 'workspace-modifiers', modifTree)
    },
    watch: function(_: any, state: any, __: any) {
      if (features.activeFeature(state, 'render-wasm/v1')) {
        const objects = dsh.lookupPageObjects(state)
        const getModifier = (shape: any) => ctm.changeOrientationModifiers(shape, orientation)
        const modifTree = gm.setObjectsModifiers(dwm.buildModifTree(ids, objects, getModifier), objects)
        return rx.of(dwm.applyWasmModifiers(modifTree))
      }

      return rx.of(dwm.applyModifiers())
    }
  }
}

// -- Rotate --------------------------------------------------------

export function rotationModifiers(
  angle: number,
  shapes: any[],
  center: { x: number; y: number }
): Record<string, { modifiers: any }> {
  const result: Record<string, { modifiers: any }> = {}
  shapes.forEach((shape: any) => {
    if (shape.blocked) return
    const shapeType = shape.type
    const editable = editableAttrs[shapeType]
    if (!editable?.rotation) return
    result[shape.id] = { modifiers: ctm.rotationModifiers(shape, center, angle) }
  })
  return result
}

export function startRotate(shapes: any[]): Event {
  return {
    type: 'start-rotate',
    execute: 'update-watch',
    update: function(_: any, state: any) {
      return d.assocIn(state, ['workspace-local', 'transform'], 'rotate')
    },
    watch: function(_: any, state: any, stream: any) {
      const stopper = mse.dragStopper(stream)
      const group = gsh.shapesToRect(shapes)
      const groupCenter = grc.rectToCenter(group)
      const initialAngle = gpt.angle(ms.mousePosition, groupCenter)

      const calculateAngle = (pos: any, mod: boolean, shift: boolean) => {
        let angle = gpt.angle(pos, groupCenter) - initialAngle
        if (angle < 0) angle += 360
        if (angle === 360) angle = 0
        if (mod) angle = Math.floor(angle / 45) * 45
        if (shift) angle = Math.floor(angle / 15) * 15
        return angle
      }

      const angleStream = ms.mousePosition.pipe(
        rx.withLatestFrom(ms.mousePositionMod, ms.mousePositionShift),
        rx.map(([pos, mod, shift]) => calculateAngle(pos, mod, shift)),
        rx.share()
      )

      if (features.activeFeature(state, 'render-wasm/v1')) {
        return rx.concat(
          rx.merge(
            angleStream.pipe(
              rx.takeUntil(stopper),
              rx.map((angle: number) => dwm.setWasmModifiers(rotationModifiers(angle, shapes, groupCenter)))
            ),
            angleStream.pipe(
              rx.takeUntil(stopper),
              rx.last(),
              rx.map((angle: number) => dwm.applyWasmModifiers(rotationModifiers(angle, shapes, groupCenter)))
            )
          ),
          rx.of(finishTransform())
        )
      }

      return rx.concat(
        rx.merge(
          angleStream.pipe(
            rx.takeUntil(stopper),
            rx.map((angle: number) => dwm.setRotationModifiers(angle, shapes, groupCenter))
          )
        ),
        rx.of(dwm.applyModifiers(), finishTransform())
      )
    }
  }
}

export function increaseRotation(
  ids: string[],
  rotation: number,
  params?: { center?: { x: number; y: number }; delta?: boolean },
  options?: any
): Event {
  return {
    type: 'increase-rotation',
    execute: 'watch',
    watch: function(_: any, state: any, __: any) {
      if (features.activeFeature(state, 'render-wasm/v1')) {
        const objects = dsh.lookupPageObjects(state)
        const getModifier = (shape: any) => {
          const delta = params?.delta ? rotation : rotation - (shape.rotation || 0)
          const center = params?.center || gsh.shapeToCenter(shape)
          return ctm.rotationModifiers(shape, center, delta)
        }
        const modifTree = dwm.buildModifTree(ids, objects, getModifier)
        return rx.of(dwm.applyWasmModifiers(modifTree))
      }

      const pageId = options?.pageId || state.currentPageId
      const objects = dsh.lookupPageObjects(state, pageId)
      const shapes = ids.map((id: string) => objects[id])
      const finalOptions = { ...options, pageId }

      return rx.concat(
        rx.of(dwm.setDeltaRotationModifiers(rotation, shapes, { ...params, pageId })),
        rx.of(dwm.applyModifiers(finalOptions))
      )
    }
  }
}

// -- Move ----------------------------------------------------------

export function startMoveSelected(id?: string | null, shift?: boolean): Event {
  return {
    type: 'start-move-selected',
    execute: 'watch',
    watch: function(_: any, state: any, stream: any) {
      const initial = ms.mousePosition
      const stopper = mse.dragStopper(stream, { interrupt: false })
      const zoom = state['workspace-local']?.zoom || 1

      let selected = dsh.lookupSelected(state, { omitBlocked: true })
      if (id !== undefined && id !== null) {
        selected = d.toggleSelection(selected, id, shift)
      }

      if (!d.notEmpty(selected) && id === undefined) {
        return rx.empty()
      }

      return ms.mousePosition.pipe(
        rx.map((pos: any) => gpt.toVec(initial, pos)),
        rx.map((vec: any) => gpt.length(vec)),
        rx.filter((len: number) => len > 10 / zoom),
        rx.take(1),
        rx.withLatestFrom(ms.mousePositionAlt),
        rx.mapcat(([_, alt]) =>
          rx.concat(
            id !== undefined && id !== null ? rx.of(dws.selectShape(id, shift)) : rx.empty(),
            alt
              ? rx.of(startMoveDuplicate(initial), dws.duplicateSelected(false, true))
              : rx.of(startMove(initial, selected))
          )
        ),
        rx.takeUntil(stopper)
      )
    }
  }
}

export function startMoveDuplicate(fromPosition: any): Event {
  return {
    type: 'start-move-duplicate',
    execute: 'update-watch',
    update: function(_: any, state: any) {
      return d.assocIn(
        d.assocIn(state, ['workspace-local', 'transform'], 'move'),
        ['workspace-local', 'duplicate-move-started'],
        true
      )
    },
    watch: function(_: any, __: any, stream: any) {
      return stream.pipe(
        rx.filter((e: any) => ptk.type(e) === dws.duplicateSelected),
        rx.take(1),
        rx.map(() => startMove(fromPosition, null, true))
      )
    }
  }
}

export function getDropCell(targetFrame: any, objects: any, position: any): [number, number] | null {
  if (features.activeFeature(st.state, 'render-wasm/v1')) {
    wasmApi.useShape(targetFrame)
    const cell = wasmApi.getGridCoords(position)
    if (cell[0] !== -1 || cell[1] !== -1) return cell
    return null
  }
  return gslg.getDropCell(targetFrame, objects, position)
}

export function setGhostDisplacement(moveVector: any): Event {
  return {
    type: 'set-ghost-displacement',
    execute: 'effect',
    effect: function(_: any, __: any, ___: any) {
      const node = dom.getElementByClass('ghost-outline')
      if (node) {
        dom.setProperty(node, 'transform', gmt.translateMatrix(moveVector))
      }
    }
  }
}

export function startMove(
  fromPosition: any,
  ids?: string[] | null,
  fromDuplicate?: boolean
): Event {
  return {
    type: 'start-move',
    execute: 'update-watch',
    update: function(_: any, state: any) {
      return d.assocIn(state, ['workspace-local', 'transform'], 'move')
    },
    watch: function(_: any, state: any, stream: any) {
      const prevCellData = { current: null as any }
      const pageId = state.currentPageId
      const libraries = dsh.lookupLibraries(state)
      const objects = dsh.lookupPageObjects(state, pageId)
      const selected = dsh.lookupSelected(state, { omitBlocked: true })
      const resolvedIds = ids === null || ids === undefined ? selected : ids

      const shapes = resolvedIds
        .map((id: string) => objects[id])
        .filter((shape: any) => {
          const parent = objects[shape.parentId]
          return !(ctk.inComponentCopy(parent) && ctl.anyLayout(parent))
        })

      const duplicateMoveStarted = state['workspace-local']?.['duplicate-move-started']
      const stopper = mse.dragStopper(stream)
      const layout = state.workspaceLayout
      const zoom = state['workspace-local']?.zoom || 1
      const focus = state.workspaceFocusSelected

      const excludeFrames = new Set(
        cfh.selectedWithChildren(objects, selected)
          .filter((id: string) => cfh.frameShape(objects, id))
      )

      const excludeFramesSiblings = new Set([
        ...excludeFrames,
        ...resolvedIds.flatMap((id: string) =>
          cfh.getSiblingsIds(objects, id)
            .filter((sid: string) => ctl.anyLayoutImmediateChildId(objects, sid))
        )
      ])

      const position = ms.mousePosition.pipe(
        rx.map((pos: any) => gpt.toVec(fromPosition, pos))
      )

      const snapDelta = rx.concat(
        rx.of(null),
        position.pipe(
          rx.throttle(20),
          rx.switchMap((pos: any) =>
            snap.closestSnapMove(pageId, shapes, objects, layout, zoom, focus, pos).pipe(
              rx.map((delta: any) => array.conj([pos], delta))
            )
          ))
        )
      )

      if (shapes.length === 0) {
        return rx.of(finishTransform())
      }

      const moveStream = position.pipe(
        rx.withLatestFrom(snapDelta),
        rx.map(([moveVector, delta]) => snap.correctSnapPoint(moveVector, delta)),
        rx.withLatestFrom(ms.mousePositionMod),
        rx.map(([[moveVector, mod]]) => {
          const position = gpt.add(fromPosition, moveVector)
          const exclude = mod ? excludeFrames : excludeFramesSiblings
          const targetFrame = ctst.topNestedFrame(objects, position, exclude)
          const [validTargetFrame] = ctn.findValidParentAndFrameIds(targetFrame, objects, shapes, false, libraries)
          const flexLayout = ctl.flexLayout(objects, validTargetFrame)
          const gridLayout = ctl.gridLayout(objects, validTargetFrame)
          const dropIndex = flexLayout ? gslf.getDropIndex(validTargetFrame, objects, position) : null
          const cellData = gridLayout && !mod ? getDropCell(validTargetFrame, objects, position) : null

          return [moveVector, validTargetFrame, dropIndex, cellData]
        }),
        rx.takeUntil(stopper)
      )

      const modifiersStream = moveStream.pipe(
        rx.withLatestFrom(array.conj, ms.mousePositionShift),
        rx.tap(([_, __, ___, cellData]) => {
          if (cellData) prevCellData.current = cellData
        }),
        rx.map(([moveVector, targetFrame, dropIndex, cellData, shift]) => {
          const resolvedCellData = cellData || prevCellData.current
          const xDisp = Math.abs(moveVector.x) > Math.abs(moveVector.y)
          const [snapIgnoreAxis, axis] = shift && xDisp
            ? [gpt.assoc(moveVector, 'y', 0), 'y']
            : shift
              ? [gpt.assoc(moveVector, 'x', 0), 'x']
              : [moveVector, null]

          const modifiers = dwm.buildChangeFrameModifiers(
            dwm.createModifTree(resolvedIds, ctm.moveModifiers(moveVector)),
            objects,
            selected,
            targetFrame,
            dropIndex,
            resolvedCellData
          )

          return [modifiers, axis]
        }),
        rx.share()
      )

      if (features.activeFeature(state, 'render-wasm/v1')) {
        const duplicateStopper = ms.mousePositionAlt.pipe(
          rx.mapcat((alt: boolean) => alt && !fromDuplicate ? rx.of(true) : rx.empty())
        )

        return rx.merge(
          modifiersStream.pipe(
            rx.takeUntil(duplicateStopper),
            rx.map(([modifiers, snapIgnoreAxis]) =>
              dwm.setWasmModifiers(modifiers, { snapIgnoreAxis })
            )
          ),
          moveStream.pipe(
            rx.withLatestFrom(ms.mousePositionAlt),
            rx.filter(([, alt]) => alt),
            rx.take(1),
            rx.mapcat(() =>
              !fromDuplicate
                ? rx.of(startMoveDuplicate(fromPosition), dws.duplicateSelected(false, true))
                : rx.empty()
            )
          ),
          moveStream.pipe(
            rx.last(),
            rx.takeUntil(duplicateStopper),
            rx.withLatestFrom(modifiersStream),
            rx.mapcat(([[moveVector, targetFrame, dropIndex, dropCell], [modifiers, snapIgnoreAxis]]) => {
              const undoId = Symbol()
              return rx.of(
                dwu.startUndoTransaction(undoId),
                dwm.applyWasmModifiers(modifiers, { snapIgnoreAxis, undoTransaction: false }),
                moveShapesToFrame(resolvedIds, targetFrame, dropIndex, dropCell),
                finishTransform(),
                dwu.commitUndoTransaction(undoId)
              )
            })
          )
        )
      }

      return rx.merge(
        modifiersStream.pipe(
          rx.map(([modifiers, snapIgnoreAxis]) =>
            dwm.setModifiers(modifiers, false, false, { snapIgnoreAxis })
          )
        ),
        moveStream.pipe(
          rx.withLatestFrom(ms.mousePositionAlt),
          rx.filter(([, alt]) => alt),
          rx.take(1),
          rx.mapcat(() =>
            !duplicateMoveStarted
              ? rx.of(startMoveDuplicate(fromPosition), dws.duplicateSelected(false, true))
              : rx.empty()
          )
        ),
        moveStream.pipe(rx.map(([moveVector]) => setGhostDisplacement(moveVector))),
        moveStream.pipe(
          rx.last(),
          rx.mapcat(([, targetFrame, dropIndex, dropCell]) => {
            const undoId = Symbol()
            return rx.of(
              dwu.startUndoTransaction(undoId),
              dwm.applyModifiers({ undoTransaction: false }),
              moveShapesToFrame(resolvedIds, targetFrame, dropIndex, dropCell),
              finishTransform(),
              dwu.commitUndoTransaction(undoId)
            )
          })
        )
      )
    }
  }
}

export const validDirections = new Set(['up', 'down', 'right', 'left'])

export function reorderSelectedLayoutChild(direction: string): Event {
  return {
    type: 'reorder-layout-child',
    execute: 'watch',
    watch: function(it: any, state: any, __: any) {
      const selected = dsh.lookupSelected(state, { omitBlocked: true })
      const objects = dsh.lookupPageObjects(state)
      const pageId = state.currentPageId

      const getMoveToIndex = (parentId: string, position: number) => {
        const parent = objects[parentId]
        if (
          (ctl.reverse(parent) && (direction === 'left' || direction === 'up')) ||
          (!ctl.reverse(parent) && (direction === 'right' || direction === 'down'))
        ) {
          return position - 1
        }
        return position + 2
      }

      const moveFlexChildren = (changes: any, parentId: string, children: string[]) => {
        return children
          .map((id: string) => {
            const position = cfh.getPositionOnParent(objects, id)
            return [id, getMoveToIndex(parentId, position)] as [string, number]
          })
          .sort((a, b) => b[1] - a[1])
          .reduce((chs: any, [childId, index]) =>
            pcb.changeParent(chs, parentId, [objects[childId]], index),
            changes
          )
      }

      const moveGridChildren = (changes: any, parentId: string, children: string[]) => {
        const parent = objects[parentId]
        const keyProp = direction === 'up' || direction === 'down' ? 'row' : 'column'
        const keyComp = direction === 'up' || direction === 'left' ? (a: number, b: number) => a < b : (a: number, b: number) => a > b

        const { layoutGridCells } = children
          .filter((id: string) => !ctk.inComponentCopyNotHead(objects[id]))
          .map((id: string) => ctl.getCellByShapeId(parent, id))
          .sort((a, b) => keyComp(a[keyProp], b[keyProp]))
          .reduce(
            (par, { id, row, column, rowSpan, columnSpan }) => {
              const [nextRow, nextColumn] = direction === 'up'
                ? [row - 1, column]
                : direction === 'right'
                  ? [row, column + columnSpan]
                  : direction === 'down'
                    ? [row + rowSpan, column]
                    : [row, column - 1]

              const nextCell = ctl.getCellByPosition(parent, nextRow, nextColumn)
              if (nextCell) {
                return ctl.swapShapes(par, id, nextCell.id)
              }
              return par
            },
            parent
          )

        return pcb.updateShapes(
          pcb.reorderGridChildren(changes, [parent.id]),
          [parent.id],
          (shape: any) => {
            let result = { ...shape, layoutGridCells }
            result = ctl.assignCells(result, objects)
            return result
          }
        )
      }

      const changes = selected
        .groupBy((id: string) => dm.getIn(objects, [id, 'parent-id']))
        .reduce(
          (chs: any, [parentId, children]) => {
            if (ctl.flexLayout(objects, parentId)) {
              chs = moveFlexChildren(chs, parentId, children)
            }
            if (ctl.gridLayout(objects, parentId)) {
              chs = moveGridChildren(chs, parentId, children)
            }
            return chs
          },
          pcb.withObjects(pcb.emptyChanges(it, pageId), objects)
        )

      const undoId = Symbol()

      return rx.of(
        dwu.startUndoTransaction(undoId),
        dch.commitChanges(changes),
        ptk.dataEvent('layout/update', { ids: selected }),
        dwu.commitUndoTransaction(undoId)
      )
    }
  }
}

export function nudgeSelectedShapes(direction: string, shift: boolean): Event {
  const sameEvent = Symbol('same-event')

  return {
    type: 'nudge-selected-shapes',
    execute: 'update-watch',
    update: function(_: any, state: any) {
      if (!state['current-move-selected']) {
        return d.assocIn(
          d.assocIn(state, ['workspace-local', 'transform'], 'move'),
          'current-move-selected',
          sameEvent
        )
      }
      return state
    },
    watch: function(_: any, state: any, stream: any) {
      if (state['current-move-selected'] !== sameEvent) return rx.empty()

      const selected = dsh.lookupSelected(state, { omitBlocked: true })
      const nudge = state.profile?.props?.nudge || { big: 10, small: 1 }
      const moveEvents = stream.pipe(
        rx.filter((e: any) => ptk.type(e) === 'nudge-selected-shapes'),
        rx.filter((e: any) => e === direction)
      )

      const stopper = moveEvents.pipe(
        rx.switchMap(() =>
          rx.merge(
            rx.timer(1000),
            stream.pipe(
              rx.filter((e: any) => kbd.keyboardEvent(e)),
              rx.filter((e: any) => kbd.keyUpEvent(e)),
              rx.delay(250)
            )
          )
        ),
        rx.take(1)
      )

      const scale = shift ? gpt.point(nudge.big || 10) : gpt.point(nudge.small || 1)
      const movVec = gpt.multiply(getDisplacement(direction), scale)

      if (features.activeFeature(state, 'render-wasm/v1')) {
        const modifStream = moveEvents.pipe(
          rx.scan((acc: any) => gpt.add(acc, movVec), gpt.point(0, 0)),
          rx.map((vec: any) => dwm.createModifTree(selected, ctm.moveModifiers(vec))),
          rx.takeUntil(stopper)
        )

        return rx.concat(
          rx.merge(
            modifStream.pipe(
              rx.map((modif: any) => dwm.setWasmModifiers(modif, { ignoreSnapPixel: true }))
            ),
            modifStream.pipe(
              rx.last(),
              rx.map((modif: any) => dwm.applyWasmModifiers(modif, { ignoreSnapPixel: true }))
            ),
            rx.of(nudgeSelectedShapes(direction, shift))
          ),
          rx.of(finishTransform())
        )
      }

      return rx.concat(
        rx.merge(
          moveEvents.pipe(
            rx.scan((acc: any) => gpt.add(acc, movVec), gpt.point(0, 0)),
            rx.map((vec: any) => dwm.createModifTree(selected, ctm.moveModifiers(vec))),
            rx.map((modif: any) => dwm.setModifiers(modif, false, true)),
            rx.takeUntil(stopper)
          ),
          rx.of(nudgeSelectedShapes(direction, shift))
        ),
        rx.of(dwm.applyModifiers(), finishTransform())
      )
    }
  } as any
}

export function moveSelected(direction: string, shift: boolean): Event {
  return {
    type: 'move-selected',
    execute: 'watch',
    watch: function(_: any, state: any, __: any) {
      const objects = dsh.lookupPageObjects(state)
      const selected = dsh.lookupSelected(state, { omitBlocked: true })
      const selectedShapes = selected.map((id: string) => objects[id])

      if (
        selectedShapes.every((s: any) =>
          ctl.anyLayoutImmediateChild(objects, s) && !ctl.positionAbsolute(s)
        )
      ) {
        return rx.of(reorderSelectedLayoutChild(direction))
      }

      return rx.of(nudgeSelectedShapes(direction, shift))
    }
  }
}

function getDisplacement(direction: string): { x: number; y: number } {
  switch (direction) {
    case 'up': return gpt.point(0, -1)
    case 'down': return gpt.point(0, 1)
    case 'left': return gpt.point(-1, 0)
    case 'right': return gpt.point(1, 0)
    default: return gpt.point(0, 0)
  }
}

function calculateDelta(
  position: any,
  bbox: any,
  relativeTo: any
): { x: number; y: number } {
  const current = gpt.point(bbox.x, bbox.y)
  const pos = gpt.point(
    position.x !== undefined ? position.x + relativeTo.x : bbox.x,
    position.y !== undefined ? position.y + relativeTo.y : bbox.y
  )
  return gpt.subtract(pos, current)
}

export function updatePosition(
  id: string,
  position: { x?: number; y?: number },
  options?: { absolute?: boolean; pageId?: string; ignoreTouched?: boolean }
): Event {
  return {
    type: 'update-position',
    execute: 'watch',
    watch: function(_: any, state: any, __: any) {
      const pageId = options?.pageId || state.currentPageId
      const objects = dsh.lookupPageObjects(state, pageId)
      const shape = objects[id]

      const bbox = grc.pointsToRect(shape.points)
      const frame = options?.absolute
        ? cfh.getFrame(objects)
        : cfh.getParentFrame(objects, shape)

      const delta = calculateDelta(position, bbox, frame)
      const modifiers = dwm.createModifTree([id], ctm.moveModifiers(delta))

      if (features.activeFeature(state, 'render-wasm/v1')) {
        return rx.of(dwm.applyWasmModifiers(modifiers, {
          ignoreConstraints: false,
          ignoreTouched: options?.ignoreTouched,
          ignoreSnapPixel: true
        }))
      }

      return rx.of(dwm.applyModifiers({
        modifiers,
        pageId,
        ignoreConstraints: false,
        ignoreTouched: options?.ignoreTouched,
        ignoreSnapPixel: true
      }))
    }
  }
}

export function updatePositions(
  ids: string[],
  position: { x?: number; y?: number },
  options?: any
): Event {
  return {
    type: 'update-positions',
    execute: 'watch',
    watch: function(_: any, __: any, ___: any) {
      return rx.from(ids.map((id: string) => updatePosition(id, position, options)))
    }
  }
}

export function positionShapes(shapes: any[]): Event {
  return {
    type: 'position-shapes',
    execute: 'watch',
    watch: function(_: any, state: any, __: any) {
      const objects = dsh.lookupPageObjects(state)
      const shapesById = d.indexBy(shapes, 'id')

      const modifTree = dwm.buildModifTree(
        Object.keys(shapesById),
        objects,
        (cshape: any) => {
          const oshape = shapesById[cshape.id]
          const cpos = gpt.point(cshape.points[0].x, cshape.points[0].y)
          const opos = gpt.point(oshape.points[0].x, oshape.points[0].y)
          return ctm.moveModifiers(gpt.subtract(opos, cpos))
        }
      )

      if (features.activeFeature(state, 'render-wasm/v1')) {
        return rx.of(dwm.applyWasmModifiers(modifTree, {
          ignoreConstraints: false,
          ignoreSnapPixel: true
        }))
      }

      return rx.of(dwm.applyModifiers({
        modifiers: modifTree,
        ignoreConstraints: false,
        ignoreSnapPixel: true
      }))
    }
  }
}

function cleanupInvalidMovingShapes(ids: string[], objects: any, frameId: string): string[] {
  const lookup = (id: string) => objects[id]
  const frame = objects[frameId]
  const layout = frame.layout

  return ids
    .filter((id: string) => lookup(id))
    .filter((id: string) => {
      const parent = objects[lookup(id).parentId]
      return !ctk.inComponentCopy(parent)
    })
    .filter((id: string) => {
      const shape = lookup(id)
      return !(ctl.positionAbsolute(shape) && frameId === shape.parentId)
    })
    .filter((id: string) => {
      const shape = lookup(id)
      if (!layout) return shape.frameId !== frameId
      if (layout) return !(shape.frameId === frameId && shape.parentId !== frameId)
      return true
    })
    .map((id: string) => lookup(id).id)
}

export function moveShapesToFrame(
  ids: string[],
  frameId: string,
  dropIndex: number | null,
  cell: any
): Event {
  return {
    type: 'move-shapes-to-frame',
    execute: 'watch',
    watch: function(it: any, state: any, __: any) {
      const pageId = state.currentPageId
      const objects = dsh.lookupPageObjects(state, pageId)
      const data = dsh.lookupFileData(state)
      const cleanedIds = cleanupInvalidMovingShapes(ids, objects, frameId)

      const changes = cls.generateRelocate(
        pcb.withLibraryData(
          pcb.withObjects(
            pcb.withPageId(pcb.emptyChanges(it), pageId),
            objects
          ),
          data
        ),
        frameId,
        dropIndex,
        cleanedIds,
        { cell }
      )

      const addComponentToVariant = cleanedIds.some((id: string) =>
        ctk.instanceHead(objects[id])
      ) && cfh.getParentsWithSelf(objects, frameId).some((p: any) => ctk.isVariant(p))

      const addNewVariant =
        ctk.isVariantContainer(objects[frameId]) &&
        cleanedIds.some((id: string) => ctk.mainInstance(objects[id]))

      return rx.concat(
        (() => {
          const shapes = cleanedIds.map((id: string) => objects[id])
          const movedCount = shapes.filter((s: any) => s.parentId !== frameId).length
          const emitLayoutEvent =
            cfh.hasLayout(objects, frameId) && movedCount > 0

          if (!emitLayoutEvent) return rx.empty()

          return rx.of(
            ev.event({
              [ev.evName]: 'layout-add-element',
              [ev.evOrigin]: 'workspace:move-shapes-to-frame',
              elementType: cfh.getSelectedType(objects, cleanedIds),
              moved: movedCount
            })
          )
        })(),
        frameId && d.notEmpty(changes)
          ? rx.of(dch.commitChanges(changes), dwc.expandCollapse(frameId))
          : rx.empty(),
        addComponentToVariant
          ? rx.of(ev.event({ [ev.evName]: 'add-component-to-variant' }))
          : rx.empty(),
        addNewVariant
          ? rx.of(ev.event({
              [ev.evName]: 'add-new-variant',
              [ev.evOrigin]: 'workspace:move-shapes-to-frame'
            }))
          : rx.empty()
      )
    }
  }
}

export function flipHorizontalSelected(ids?: string[] | null): Event {
  return {
    type: 'flip-horizontal-selected',
    execute: 'watch',
    watch: function(_: any, state: any, __: any) {
      const objects = dsh.lookupPageObjects(state)
      const selected = ids || dsh.lookupSelected(state, { omitBlocked: true })
      const shapes = selected
        .map((id: string) => objects[id])
        .filter((s: any) => !ctk.isVariantContainer(s))
      const shapeIds = shapes.map((s: any) => s.id)
      const selrect = gsh.shapesToRect(shapes)
      const center = grc.rectToCenter(selrect)
      const modifiers = dwm.createModifTree(shapeIds, ctm.resizeModifiers(gpt.point(-1.0, 1.0), center))

      if (features.activeFeature(state, 'render-wasm/v1')) {
        return rx.of(dwm.applyWasmModifiers(modifiers, { ignoreSnapPixel: true }))
      }

      return rx.of(dwm.applyModifiers({ modifiers, ignoreSnapPixel: true }))
    }
  }
}

export function flipVerticalSelected(ids?: string[] | null): Event {
  return {
    type: 'flip-vertical-selected',
    execute: 'watch',
    watch: function(_: any, state: any, __: any) {
      const objects = dsh.lookupPageObjects(state)
      const selected = ids || dsh.lookupSelected(state, { omitBlocked: true })
      const shapes = selected
        .map((id: string) => objects[id])
        .filter((s: any) => !ctk.isVariantContainer(s))
      const shapeIds = shapes.map((s: any) => s.id)
      const selrect = gsh.shapesToRect(shapes)
      const center = grc.rectToCenter(selrect)
      const modifiers = dwm.createModifTree(shapeIds, ctm.resizeModifiers(gpt.point(1.0, -1.0), center))

      if (features.activeFeature(state, 'render-wasm/v1')) {
        return rx.of(dwm.applyWasmModifiers(modifiers, { ignoreSnapPixel: true }))
      }

      return rx.of(dwm.applyModifiers({ modifiers, ignoreSnapPixel: true }))
    }
  }
}

function fitLayoutModifiers(objects: any, frame: any): any {
  const modifiedObjects = d.assocIn(
    d.assocIn(objects, [frame.id, 'layout-item-h-sizing'], 'auto'),
    [frame.id, 'layout-item-v-sizing'],
    'auto'
  )
  return gm.setObjectsModifiers({ [frame.id]: { modifiers: ctm.reflowModifiers } }, modifiedObjects)
}

export function selectedFitContent(): Event {
  return {
    type: 'selected-fit-content',
    execute: 'watch',
    watch: function(_: any, state: any, __: any) {
      const objects = dsh.lookupPageObjects(state)
      const selected = dsh.lookupSelected(state)
      const undoGroup = uuid.next()

      const modifiers = selected
        .map((id: string) => objects[id])
        .filter((s: any) => cfh.frameShape(s))
        .reduce((mods: any, frame: any) => {
          if (ctl.anyLayout(frame)) {
            return { ...mods, ...fitLayoutModifiers(objects, frame) }
          }
          const newModif = gsh.fitFrameModifiers(objects, frame)
          if (newModif) {
            return { ...mods, [frame.id]: { modifiers: newModif } }
          }
          return mods
        }, {})

      if (features.activeFeature(state, 'render-wasm/v1')) {
        return rx.of(dwm.applyWasmModifiers(modifiers, { undoGroup }))
      }

      return rx.of(dwm.applyModifiers({ modifiers, undoGroup }))
    }
  }
}

export function resizeTextEditor(id: string, { width, height }: { width: number; height: number }): Event {
  return {
    type: 'resize-text-editor',
    execute: 'watch',
    watch: function(_: any, state: any, __: any) {
      const objects = dsh.lookupPageObjects(state)
      const shape = objects[id]

      const resizeV = gpt.point(
        width / shape.selrect.width,
        height / shape.selrect.height
      )

      const origin = shape.points[0]

      const modifiers = {
        [id]: {
          modifiers: ctm.resizeModifiers(
            resizeV,
            origin,
            shape.transform || gmt.matrix(),
            shape.transformInverse || gmt.matrix()
          )
        }
      }

      return rx.of(dwm.setWasmModifiers(modifiers))
    }
  }
}
