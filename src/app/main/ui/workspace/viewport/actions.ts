// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from "app/common/data"
import * as cfh from "app/common/files/helpers"
import * as gpt from "app/common/geom/point"
import * as mth from "app/common/math"
import * as ctl from "app/common/types/shape/layout"
import * as uuid from "app/common/uuid"
import * as cfg from "app/config"
import * as dw from "app/main/data/workspace"
import * as dd from "app/main/data/workspace/drawing"
import * as dwl from "app/main/data/workspace/libraries"
import * as dwm from "app/main/data/workspace/media"
import * as dwdp from "app/main/data/workspace/path"
import * as dwsp from "app/main/data/workspace/specialized-panel"
import * as dwt from "app/main/data/workspace/texts"
import * as features from "app/main/features"
import * as refs from "app/main/refs"
import { store } from "app/main/store"
import * as wsac from "app/main/ui/workspace/sidebar/assets/components"
import * as uwvv from "app/main/ui/workspace/viewport/viewport-ref"
import * as wasm from "app/render-wasm/api"
import * as wasmWasm from "app/render-wasm/wasm"
import * as dom from "app/util/dom"
import * as dnd from "app/util/dom/dnd"
import * as nw from "app/util/dom/normalize-wheel"
import * as kbd from "app/util/keyboard"
import * as mse from "app/util/mouse"
import * as obj from "app/util/object"
import { throttleFn } from "app/util/rxops"
import * as txu from "app/util/text/ui"
import * as ts from "app/util/timers"
import * as wapi from "app/util/webapi"
import * as rx from "beicon.v2.core"
import * as str from "cuerdas.core"
import { useCallback, useRef } from "react"

export const SCALE_PER_PIXEL = -0.0057

export function useOnPointerDown({
  id,
  blocked,
  hidden,
  type,
  selected,
  edition,
  drawingTool,
  textEditing,
  nodeEditing,
  gridEditing,
  drawingPath,
  createComment,
  space,
  panning,
  z,
  readOnly,
}: {
  id: string | null
  blocked: boolean
  hidden: boolean
  type: string
  selected: Set<string>
  edition: string | null
  drawingTool: any
  textEditing: boolean
  nodeEditing: boolean
  gridEditing: boolean
  drawingPath: boolean
  createComment: boolean
  space: React.MutableRefObject<boolean>
  panning: boolean
  z: React.MutableRefObject<boolean>
  readOnly: boolean
}) {
  return useCallback(
    (bevent: any) => {
      const target = dom.getTarget(bevent)
      const editor = txu.closestTextEditorContent(target)

      if (editor) {
        editor.setPointerCapture((bevent as any).pointerId)
      } else {
        target.setPointerCapture((bevent as any).pointerId)
      }

      if (
        dom.classList.contains(dom.getTarget(bevent), "viewport-controls") ||
        dom.classList.contains(dom.getTarget(bevent), "viewport-selrect") ||
        dom.isChild(dom.getTarget(bevent), dom.query(".grid-layout-editor"))
      ) {
        dom.stopPropagation(bevent)

        if (!z.current) {
          const event = dom.eventToNativeEvent(bevent)
          const ctrl = kbd.ctrl(event)
          const meta = kbd.meta(event)
          const shift = kbd.shift(event)
          const alt = kbd.alt(event)
          const mod = kbd.mod(event)

          const leftClick = !panning && dom.leftMouse(bevent)
          const middleClick = !panning && dom.middleMouse(bevent)

          if (middleClick || (leftClick && space.current)) {
            dom.preventDefault(bevent)
            if (mod) {
              const rawPt = dom.getClientPosition(event)
              const pt = uwvv.pointToViewport(rawPt)
              store.emit(dw.startZooming(pt))
            } else {
              store.emit(dw.startPanning())
            }
          } else if (leftClick) {
            store.emit(mse.mouseEvent("down", ctrl, shift, alt, meta), dwsp.interrupt as any)

            if (edition !== id && (textEditing || gridEditing)) {
              store.emit(dw.clearEditionMode())

              if (
                textEditing &&
                features.activeFeature(store.getState(), "render-wasm/v1") &&
                wasmWasm.contextInitialized
              ) {
                const result = wasm.textEditorSyncContent()
                if (result) {
                  const { shapeId, content } = result
                  store.emit(
                    dwt.v2UpdateTextShapeContent(shapeId, content, {
                      updateName: true,
                      finalize: true,
                    })
                  )
                }
                wasm.textEditorStop()
              }
            }

            if (!textEditing && !blocked && !hidden && !createComment && !drawingPath) {
              if (nodeEditing) {
                if (!readOnly) {
                  store.emit(dwdp.handleAreaSelection(shift, shift && mod))
                }
              } else if (drawingTool) {
                if (!readOnly) {
                  store.emit(dd.startDrawing(drawingTool))
                }
              } else if (!id || mod) {
                store.emit(dw.handleAreaSelection(shift, shift && mod, mod))
              } else if (!drawingTool) {
                if (!readOnly) {
                  store.emit(dw.startMoveSelected(id, shift))
                }
              }
            }
          }
        }
      }
    },
    [
      id,
      blocked,
      hidden,
      type,
      selected,
      edition,
      drawingTool,
      textEditing,
      nodeEditing,
      gridEditing,
      drawingPath,
      createComment,
      space,
      panning,
      z,
      readOnly,
    ]
  )
}

export function useOnMoveSelected({
  hover,
  hoverIds,
  selected,
  space,
  z,
  readOnly,
}: {
  hover: React.MutableRefObject<any>
  hoverIds: React.MutableRefObject<string[]>
  selected: Set<string>
  space: React.MutableRefObject<boolean>
  z: React.MutableRefObject<boolean>
  readOnly: boolean
}) {
  return useCallback(
    (bevent: any) => {
      const event = dom.eventToNativeEvent(bevent)
      const shift = kbd.shift(event)
      const mod = kbd.mod(event)

      if (dom.leftMouse(bevent) && !mod && !shift && !space.current) {
        dom.preventDefault(bevent)
        dom.stopPropagation(bevent)
        if (!readOnly && !z.current) {
          store.emit(dw.startMoveSelected())
        }
      }
    },
    [hover, hoverIds, selected, space, z, readOnly]
  )
}

export function useOnFrameSelect({
  selected,
  readOnly,
}: {
  selected: Set<string>
  readOnly: boolean
}) {
  return useCallback(
    (event: any, id: string) => {
      const shift = kbd.shift(event)
      const selectedShape = selected.has(id)
      const selectedDrawtool = refs.selectedDrawingTool.current

      store.emit(
        (!shift || !selectedShape ? dw.selectShape(id, shift) : null) as any,
        selectedDrawtool === null && !shift && !readOnly ? dw.startMoveSelected() : null
      )
    },
    [selected, readOnly]
  )
}

export function useOnFrameEnter(frameHover: React.MutableRefObject<string | null>) {
  return useCallback((id: string) => {
    frameHover.current = id
  }, [frameHover])
}

export function useOnFrameLeave(frameHover: React.MutableRefObject<string | null>) {
  return useCallback(() => {
    frameHover.current = null
  }, [frameHover])
}

export function useOnClick({
  hover,
  selected,
  edition,
  drawingPath,
  drawingTool,
  space,
  selrect,
  z,
}: {
  hover: React.MutableRefObject<any>
  selected: Set<string>
  edition: string | null
  drawingPath: boolean
  drawingTool: any
  space: React.MutableRefObject<boolean>
  selrect: any
  z: React.MutableRefObject<boolean>
}) {
  return useCallback(
    (event: any) => {
      if (
        selrect == null &&
        (dom.classList.contains(dom.getTarget(event), "viewport-controls") ||
          dom.isChild(dom.getTarget(event), dom.query(".grid-layout-editor")) ||
          dom.classList.contains(dom.getTarget(event), "viewport-selrect"))
      ) {
        const ctrl = kbd.ctrl(event)
        const shift = kbd.shift(event)
        const alt = kbd.alt(event)
        const meta = kbd.meta(event)
        const hovering = hover.current != null
        const rawPt = dom.getClientPosition(event)
        const pt = uwvv.pointToViewport(rawPt)

        store.emit(mse.mouseEvent("click", ctrl, shift, alt, meta))

        if (hovering && !space.current && !edition && !drawingPath && !drawingTool) {
          store.emit(dw.selectShape(hover.current.id, shift))
        }

        if (
          hovering &&
          !space.current &&
          edition &&
          !drawingPath &&
          !drawingTool
        ) {
          const hoverShape = hover.current
          if (
            hoverShape.type === "text" &&
            features.activeFeature(store.getState(), "text-editor-wasm/v1") &&
            wasmWasm.contextInitialized
          ) {
            const rawPt = dom.getClientPosition(event)
            wasm.textEditorSetCursorFromPoint(rawPt.x, rawPt.y)
          }
        }

        if (z.current && !space.current && !edition && !drawingPath && !drawingTool) {
          if (alt) {
            store.emit(dw.decreaseZoom(pt))
          } else {
            store.emit(dw.increaseZoom(pt))
          }
        }
      }
    },
    [hover, selected, edition, drawingPath, drawingTool, space, selrect, z]
  )
}

export function useOnDoubleClick({
  hover,
  hoverIds,
  hoverTopFrameId,
  drawingPath,
  objects,
  edition,
  drawingTool,
  z,
  readOnly,
}: {
  hover: React.MutableRefObject<any>
  hoverIds: React.MutableRefObject<string[]>
  hoverTopFrameId: React.MutableRefObject<string | null>
  drawingPath: boolean
  objects: any
  edition: string | null
  drawingTool: any
  z: React.MutableRefObject<boolean>
  readOnly: boolean
}) {
  return useCallback(
    (event: any) => {
      dom.stopPropagation(event)

      if (!z.current) {
        const ctrl = kbd.ctrl(event)
        const shift = kbd.shift(event)
        const alt = kbd.alt(event)
        const meta = kbd.meta(event)

        const shape = hover.current || objects[hoverIds.current[0]]
        const { id, type } = shape || {}

        const editable = ["text", "rect", "path", "image", "circle"].includes(type)

        const hoverShape = hoverIds.current
          .filter((childId) => cfh.isChild(objects, id, childId))
          .find(() => true)
        const selectedShape = hoverShape ? objects[hoverShape] : null

        const gridLayoutId = [...hoverIds.current].reverse().find((id) => ctl.gridLayout(objects[id])) || null

        store.emit(mse.mouseEvent("double-click", ctrl, shift, alt, meta))

        ts.schedule(() => {
          if (!drawingPath && shape) {
            if (editable && id !== edition && !readOnly) {
              store.emit(dw.selectShape(id) as any)
              store.emit(dw.startEditingSelected() as any)

              if (
                type === "text" &&
                features.activeFeature(store.getState(), "text-editor-wasm/v1") &&
                wasmWasm.contextInitialized
              ) {
                wasm.textEditorStart(id)
              }
            } else if (selectedShape) {
              hover.current = selectedShape
              store.emit(dw.selectShape(selectedShape.id) as any)
            } else if (!selectedShape && gridLayoutId && !readOnly) {
              store.emit(dw.startEditionMode(gridLayoutId) as any)
            }
          }
        })
      }
    },
    [hover, hoverIds, hoverTopFrameId, drawingPath, objects, edition, drawingTool, z, readOnly]
  )
}

export function useOnContextMenu({
  hover,
  hoverIds,
  readOnly,
}: {
  hover: React.MutableRefObject<any>
  hoverIds: React.MutableRefObject<string[]>
  readOnly: boolean
}) {
  return useCallback(
    (event: any) => {
      dom.preventDefault(event)

      if (
        dom.classList.contains(dom.getTarget(event), "viewport-controls") ||
        dom.isChild(dom.getTarget(event), dom.query(".grid-layout-editor")) ||
        dom.classList.contains(dom.getTarget(event), "viewport-selrect")
      ) {
        const position = dom.getClientPosition(event)

        ts.schedule(() => {
          if (!readOnly && hover.current) {
            store.emit(
              dw.showShapeContextMenu({
                position,
                shape: hover.current,
                hoverIds: hoverIds.current,
              }) as any
            )
          } else {
            store.emit(dw.showContextMenu({ position }) as any)
          }
        })
      }
    },
    [hover, hoverIds, readOnly]
  )
}

export function useOnMenuSelected({
  hover,
  hoverIds,
  selected,
  readOnly,
}: {
  hover: React.MutableRefObject<any>
  hoverIds: React.MutableRefObject<string[]>
  selected: Set<string>
  readOnly: boolean
}) {
  return useCallback(
    (event: any) => {
      dom.preventDefault(event)
      dom.stopPropagation(event)

      if (!readOnly) {
        const position = dom.getClientPosition(event)
        store.emit(
          dw.showShapeContextMenu({
            position,
            hoverIds: hoverIds.current,
          }) as any
        )
      }
    },
    [hover, hoverIds, selected, readOnly]
  )
}

export function useOnPointerUp(disablePasteRef: React.MutableRefObject<boolean>) {
  return useCallback(
    (event: any) => {
      dom.stopPropagation(event)

      const target = dom.getTarget(event)
      target.releasePointerCapture((event as any).pointerId)

      const evt = dom.eventToNativeEvent(event)
      const ctrl = kbd.ctrl(evt)
      const shift = kbd.shift(evt)
      const alt = kbd.alt(evt)
      const meta = kbd.meta(evt)

      const leftClick = event.which === 1
      const middleClick = event.which === 2

      if (leftClick) {
        store.emit(mse.mouseEvent("up", ctrl, shift, alt, meta))
      }

      if (middleClick) {
        dom.preventDefault(event)
        disablePasteRef.current = true
        ts.schedule(() => {
          disablePasteRef.current = false
        })
      }

      store.emit(dw.finishPanning() as any, dw.finishZooming() as any)
    },
    [disablePasteRef]
  )
}

export function useOnPointerEnter(inViewportRef: React.MutableRefObject<boolean>) {
  return useCallback(() => {
    inViewportRef.current = true
  }, [inViewportRef])
}

export function useOnPointerLeave(inViewportRef: React.MutableRefObject<boolean>) {
  return useCallback(() => {
    inViewportRef.current = false
  }, [inViewportRef])
}

export function useOnKeyDown() {
  return useCallback((event: any) => {
    const bevent = (event as any).getBrowserEvent()
    const key = bevent.key
    const ctrl = kbd.ctrl(event)
    const shift = kbd.shift(event)
    const alt = kbd.alt(event)
    const meta = kbd.meta(event)
    const mod = kbd.mod(event)
    const target = dom.getTarget(event)

    const editing =
      txu.someTextEditorContent(target) ||
      obj.get(target, "className") === "rich-text" ||
      obj.get(target, "tagName") === "INPUT" ||
      obj.get(target, "tagName") === "TEXTAREA"

    if (!bevent.repeat) {
      store.emit(kbd.keyboardEvent("down", key, shift, ctrl, alt, meta, mod, editing, event))
    }
  }, [])
}

export function useOnKeyUp() {
  return useCallback((event: any) => {
    const key = event.key
    const ctrl = kbd.ctrl(event)
    const shift = kbd.shift(event)
    const alt = kbd.alt(event)
    const meta = kbd.meta(event)
    const mod = kbd.mod(event)
    const target = dom.getTarget(event)

    const editing =
      txu.someTextEditorContent(target) ||
      obj.get(target, "className") === "rich-text" ||
      obj.get(target, "tagName") === "INPUT" ||
      obj.get(target, "tagName") === "TEXTAREA"

    store.emit(kbd.keyboardEvent("up", key, shift, ctrl, alt, meta, mod, editing, event))
  }, [])
}

export function useOnPointerMove(moveStream: any) {
  const lastPosition = useRef<any>(null)

  return useCallback(
    (event: any) => {
      const rawPt = dom.getClientPosition(event)
      const pt = uwvv.pointToViewport(rawPt)

      const delta = lastPosition.current
        ? gpt.subtract(rawPt, lastPosition.current)
        : gpt.point(0, 0)

      rx.push(moveStream, pt)
      lastPosition.current = rawPt

      store.emit(
        mse.pointerEvent("delta", delta, kbd.ctrl(event), kbd.shift(event), kbd.alt(event), kbd.meta(event))
      )
      store.emit(
        mse.pointerEvent("viewport", pt, kbd.ctrl(event), kbd.shift(event), kbd.alt(event), kbd.meta(event))
      )
    },
    [moveStream]
  )
}

interface ScrollState {
  dx: number
  dy: number
  rafId: number
  scale: number
  zoomPt: any
  zoomRafId: number
}

function scheduleZoom(state: ScrollState, scale: number, pt: any) {
  const pending = state.zoomRafId > 0
  state.scale = state.scale * scale
  state.zoomPt = pt

  if (!pending) {
    state.zoomRafId = ts.raf(() => {
      const s = state.scale
      const zp = state.zoomPt
      state.scale = 1
      state.zoomPt = null
      state.zoomRafId = 0
      store.emit(dw.setZoom(zp, s))
    }) as any
  }
}

function scheduleScroll(state: ScrollState, zoom: number, event: any, deltaX: number, deltaY: number) {
  const pending = state.rafId > 0

  if (!cfg.checkPlatform("macos") && kbd.shift(event)) {
    state.dx = state.dx + deltaY / zoom
  } else {
    state.dx = state.dx + deltaX / zoom
    state.dy = state.dy + deltaY / zoom
  }

  if (!pending) {
    state.rafId = ts.raf(() => {
      const dx = state.dx
      const dy = state.dy
      state.dx = 0
      state.dy = 0
      state.rafId = 0
      store.emit(
        dw.updateViewportPosition({
          x: (prev: number) => prev + dx,
          y: (prev: number) => prev + dy,
        }) as any
      )
    }) as any
  }
}

export function useOnMouseWheel(zoomRef: React.MutableRefObject<number>) {
  const scrollState = useRef<ScrollState>({
    dx: 0,
    dy: 0,
    rafId: 0,
    scale: 1,
    zoomPt: null,
    zoomRafId: 0,
  })

  return useCallback(
    (event: any) => {
      const bevent = (event as any).getBrowserEvent()
      const target = dom.getTarget(event)
      const mod = kbd.mod(event)
      const ctrl = kbd.ctrl(event)

      const pickingColor = target.id === "pixel-overlay"
      const commentsLayer = dom.isChild(dom.getElement("comments"), target)

      const rawPt = dom.getClientPosition(event)
      const pt = uwvv.pointToViewport(rawPt)

      const normEvent = nw.normalizeWheel(event) as any
      const deltaY = normEvent.pixelY
      const deltaX = normEvent.pixelX
      const deltaZoom = deltaY + deltaX

      let scale = 1 + Math.abs(SCALE_PER_PIXEL * deltaZoom)
      scale = deltaZoom > 0 ? 1 / scale : scale

      if (uwvv.insideViewport(target) || pickingColor) {
        dom.preventDefault(event)
        dom.stopPropagation(event)

        if (ctrl || mod) {
          scheduleZoom(scrollState.current, scale, pt)
        } else {
          scheduleScroll(scrollState.current, zoomRef.current, event, deltaX, deltaY)
        }
      }

      if (commentsLayer && (ctrl || mod)) {
        dom.preventDefault(event)
        dom.stopPropagation(event)
        scheduleZoom(scrollState.current, scale, pt)
      }
    },
    [zoomRef]
  )
}

export function useOnDragEnter(compInstRef: React.MutableRefObject<boolean>) {
  return useCallback(
    (e: any) => {
      const componentInst = compInstRef.current

      if (
        dnd.hasType(e, "penpot/component") &&
        dom.classList.contains(dom.getTarget(e), "viewport-controls") &&
        !componentInst
      ) {
        const point = gpt.point(e.clientX, e.clientY)
        const viewportCoord = uwvv.pointToViewport(point)
        const { component, fileId, shape } = wsac.dragData.current

        const finalX = viewportCoord.x - shape.width / 2
        const finalY = viewportCoord.y - shape.height / 2

        compInstRef.current = true
        store.emit(
          dwl.instantiateComponent(
            fileId,
            component.id,
            gpt.point(finalX, finalY),
            { startMove: true, initialPoint: viewportCoord, origin: "sidebar" }
          )
        )
      }

      if (
        dnd.hasType(e, "penpot/shape") ||
        dnd.hasType(e, "penpot/component") ||
        dnd.hasType(e, "Files") ||
        dnd.hasType(e, "text/uri-list") ||
        dnd.hasType(e, "text/asset-id")
      ) {
        dom.preventDefault(e)
      }
    },
    [compInstRef]
  )
}

export function useOnDragEnd(compInstRef: React.MutableRefObject<boolean>) {
  return useCallback(() => {
    compInstRef.current = false
  }, [compInstRef])
}

export function useOnDragOver(moveStream: any) {
  const onPointerMove = useOnPointerMove(moveStream)

  const throttledPointerMove = useCallback(
    (e: any) => {
      throttleFn(50, (e: any) => ts.raf(() => onPointerMove(e)))(e)
    },
    [onPointerMove]
  )

  return useCallback(
    (e: any) => {
      if (
        dnd.hasType(e, "penpot/shape") ||
        dnd.hasType(e, "penpot/component") ||
        dnd.hasType(e, "Files") ||
        dnd.hasType(e, "text/uri-list") ||
        dnd.hasType(e, "text/asset-id")
      ) {
        throttledPointerMove(e)
        dom.preventDefault(e)
      }
    },
    [moveStream, throttledPointerMove]
  )
}

export function useOnDrop(
  file: any,
  compInstRef: React.MutableRefObject<boolean>
) {
  return useCallback(
    (event: any) => {
      dom.preventDefault(event)

      const point = gpt.point(event.clientX, event.clientY)
      const viewportCoord = uwvv.pointToViewport(point)

      if (dnd.hasType(event, "penpot/shape")) {
        const shape = dnd.getData(event, "penpot/shape")
        const finalX = viewportCoord.x - shape.width / 2
        const finalY = viewportCoord.y - shape.height / 2

        store.emit(
          dw.addShape({
            ...shape,
            id: uuid.next(),
            x: finalX,
            y: finalY,
          }) as any
        )
      } else if (dnd.hasType(event, "penpot/component")) {
        const evt = dom.eventToNativeEvent(event)
        const ctrl = kbd.ctrl(evt)
        const shift = kbd.shift(evt)
        const alt = kbd.alt(evt)
        const meta = kbd.meta(evt)

        store.emit(mse.mouseEvent("up", ctrl, shift, alt, meta))
        compInstRef.current = false
      } else if (dnd.hasType(event, "Files")) {
        const files = dnd.getFiles(event)
        const params = {
          fileId: file.id,
          position: viewportCoord,
          blobs: Array.from(files),
        }
        store.emit(dwm.uploadMediaWorkspace(params) as any)
      } else if (dnd.hasType(event, "text/uri-list")) {
        const data = dnd.getData(event, "text/uri-list")
        const lines = str.lines(data)
        const uris = lines.filter((line) => str.startsWith(line, "http"))
        const dataLines = lines.filter((line) => str.startsWith(line, "data:image/"))
        const params: any = {
          fileId: file.id,
          position: viewportCoord,
        }

        if (uris.length > 0) {
          params.uris = uris
        } else {
          params.blobs = dataLines.map((line) => wapi.dataUriToBlob(line))
        }

        store.emit(dwm.uploadMediaWorkspace(params) as any)
      } else {
        const files = dnd.getFiles(event)
        const params = {
          fileId: file.id,
          position: viewportCoord,
          blobs: Array.from(files),
        }
        store.emit(dwm.uploadMediaWorkspace(params) as any)
      }
    },
    [file, compInstRef]
  )
}

const INVALID_PASTE_TARGETS = new Set(["INPUT", "TEXTAREA"])

export function useOnPaste(
  disablePasteRef: React.MutableRefObject<boolean>,
  inViewportRef: React.MutableRefObject<boolean>,
  readOnly: boolean
) {
  return useCallback(
    (event: any) => {
      const tagName = dom.getTagName(dom.getTarget(event))
      const disablePaste = disablePasteRef.current
      const inViewport = inViewportRef.current

      if (!INVALID_PASTE_TARGETS.has(tagName) && !disablePaste && !readOnly) {
        store.emit(dw.pasteFromEvent(event, inViewport) as any)
      }
    },
    [disablePasteRef, inViewportRef, readOnly]
  )
}
