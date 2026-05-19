// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as DM from 'app/common/data/macros'
import * as Mth from 'app/common/math'
import * as cfg from 'app/config'
import * as Modal from 'app/main/data/modal'
import * as DWC from 'app/main/data/workspace/colors'
import * as DWU from 'app/main/data/workspace/undo'
import * as Fonts from 'app/main/fonts'
import * as THR from 'app/main/rasterizer'
import { Store } from 'app/main/store'
import * as Cur from 'app/main/ui/css-cursors'
import * as WasmApi from 'app/render-wasm/api'
import * as DOM from 'app/util/dom'
import * as UG from 'app/util/globals'
import * as Kbd from 'app/util/keyboard'
import * as Obj from 'app/util/object'
import * as RX from 'beicon.v2.core'
import * as Events from 'goog.events'
import * as MF from 'rumext.v2'
import React from 'react'

function createOffscreenCanvas(width: number, height: number): any {
  return new OffscreenCanvas(width, height)
}

function resizeOffscreenCanvas(
  canvas: any,
  width: number,
  height: number
): any {
  let resized = false
  if (canvas.width !== width) {
    canvas.width = width
    resized = true
  }
  if (canvas.height !== height) {
    canvas.height = height
    resized = true
  }
  return canvas
}

const getOffscreenCanvas = (() => {
  let internalState: any = { canvas: null }
  return (width: number, height: number) => {
    let canvas = internalState.canvas
    if (canvas) {
      return resizeOffscreenCanvas(canvas, width, height)
    } else {
      const newCanvas = createOffscreenCanvas(width, height)
      internalState.canvas = newCanvas
      return newCanvas
    }
  }
})()

function processPointerMove(
  viewportNode: any,
  canvas: any,
  canvasImageData: React.MutableRefObject<any>,
  zoomViewContext: React.MutableRefObject<any>,
  clientX: number,
  clientY: number
) {
  const imageData = canvasImageData.current
  if (!imageData) return

  const zoomViewNode = DOM.getElement('picker-detail')
  if (!zoomViewNode) return

  if (!zoomViewContext.current) {
    zoomViewContext.current = zoomViewNode.getContext('2d')
  }

  const canvasWidth = 260
  const canvasHeight = 140
  const { left: brx, top: bry } = DOM.getBoundingRect(viewportNode)

  const x = Math.floor(clientX - brx)
  const y = Math.floor(clientY - bry)

  const zoomContext = zoomViewContext.current
  const offset = (y * imageData.width + x) * 4
  const rgba = imageData.data

  const r = rgba[offset]
  const g = rgba[offset + 1]
  const b = rgba[offset + 2]
  const a = rgba[offset + 3]

  const sx = x - 32
  const sy = cfg.checkBrowser('safari') ? y : y - 17
  const sw = 65
  const sh = 35
  const dx = 0
  const dy = 0
  const dw = canvasWidth
  const dh = canvasHeight

  if (zoomContext.imageSmoothingEnabled) {
    zoomContext.imageSmoothingEnabled = false
  }
  zoomContext.clearRect(0, 0, canvasWidth, canvasHeight)
  zoomContext.drawImage(canvas, sx, sy, sw, sh, dx, dy, dw, dh)

  requestAnimationFrame(() => {
    Store.emit(DWC.pickColor([r, g, b, a]))
  })
}

interface PixelOverlayProps {
  vport: any
  viewportRef: React.RefObject<any>
}

export const PixelOverlay: React.FC<PixelOverlayProps> = ({
  vport,
  viewportRef,
}) => {
  const viewportNode = MF.refVal(viewportRef)

  const canvas = getOffscreenCanvas(vport.width, vport.height)
  const canvasContext = canvas.getContext('2d', { willReadFrequently: true })
  const canvasImageData = MF.useRef(null)
  const zoomViewContext = MF.useRef(null)
  const [canvasReady, setCanvasReady] = React.useState(false)
  const [initialMousePos, setInitialMousePos] = React.useState({ x: 0, y: 0 })
  const updateStr = RX.subject()

  const handleKeydown = React.useCallback((event: any) => {
    if (Kbd.esc(event)) {
      DOM.stopPropagation(event)
      DOM.preventDefault(event)
      Store.emit(DWC.stopPicker())
      Modal.disallowClickOutside()
    }
  }, [])

  const handlePointerDownPicker = React.useCallback((event: any) => {
    DOM.preventDefault(event)
    DOM.stopPropagation(event)
    Store.emit(
      DWU.startUndoTransaction('mouse-down-picker'),
      DWC.pickColorSelect(true, Kbd.shift(event))
    )
  }, [])

  const handlePointerUpPicker = React.useCallback((event: any) => {
    DOM.preventDefault(event)
    DOM.stopPropagation(event)
    Store.emit(
      DWU.commitUndoTransaction('mouse-down-picker'),
      DWC.stopPicker()
    )
    Modal.disallowClickOutside()
  }, [])

  const handleDrawPickerCanvas = React.useCallback(() => {
    const svgNode = DOM.getElement('render')
    const fonts = Fonts.getNodeFonts(svgNode)
    const result = {
      node: svgNode,
      width: vport.width,
      result: 'image-bitmap',
    }

    RX.pipe(
      RX.map((styles: any) => ({ ...result, styles })),
      RX.mergeMap(THR.renderNode),
      RX.subscribe((imageBitmap: any) => {
        canvasContext.drawImage(imageBitmap, 0, 0)
        const width = canvas.width
        const height = canvas.height
        const imageData = canvasContext.getImageData(0, 0, width, height)
        canvasImageData.current = imageData
        setCanvasReady(true)
      })
    )(Fonts.renderFontStylesCached(fonts))
  }, [vport.width, vport.height])

  const handleSvgChange = React.useCallback(() => {
    RX.push(updateStr, 'update')
  }, [])

  const handleMouseEnter = React.useCallback((event: any) => {
    const x = event.clientX
    const y = event.clientY
    setInitialMousePos({ x, y })
  }, [])

  const handlePointerMovePicker = React.useCallback(
    (event: any) => {
      processPointerMove(
        viewportNode,
        canvas,
        canvasImageData,
        zoomViewContext,
        event.clientX,
        event.clientY
      )
    },
    [viewportNode]
  )

  if (canvasContext.imageSmoothingEnabled) {
    canvasContext.imageSmoothingEnabled = false
  }

  React.useEffect(() => {
    const listener = Events.listen(
      UG.document,
      'keydown',
      handleKeydown
    )
    return () => {
      Events.unlistenByKey(listener)
    }
  }, [handleKeydown])

  React.useEffect(() => {
    const sub = RX.pipe(
      RX.debounce(10),
      RX.subscribe(handleDrawPickerCanvas)
    )(updateStr)
    return () => {
      RX.dispose(sub)
    }
  }, [handleDrawPickerCanvas])

  React.useEffect(() => {
    const config: MutationObserverInit = {
      attributes: true,
      childList: true,
      subtree: true,
      characterData: true,
    }
    const svgNode = DOM.getElement('render')
    const observer = new MutationObserver(handleSvgChange)
    observer.observe(svgNode, config)
    handleSvgChange()

    return () => {
      observer.disconnect()
    }
  }, [handleSvgChange])

  React.useEffect(() => {
    if (canvasReady) {
      const { x, y } = initialMousePos
      processPointerMove(
        viewportNode,
        canvas,
        canvasImageData,
        zoomViewContext,
        x,
        y
      )
    }
  }, [viewportNode, canvasReady, initialMousePos])

  return (
    <div
      id='pixel-overlay'
      tabIndex={0}
      className={`${Cur.getStatic('picker')} pixel-overlay`}
      onPointerDown={handlePointerDownPicker}
      onPointerUp={handlePointerUpPicker}
      onPointerMove={handlePointerMovePicker}
      onMouseEnter={handleMouseEnter}
    />
  )
}

function processPointerMoveWasm(
  viewportNode: any,
  canvas: any,
  canvasImageData: React.MutableRefObject<any>,
  zoomViewContext: React.MutableRefObject<any>,
  clientX: number,
  clientY: number
) {
  const imageData = canvasImageData.current
  if (!imageData) return

  const zoomViewNode = DOM.getElement('picker-detail')
  if (!zoomViewNode) return

  if (!zoomViewContext.current) {
    zoomViewContext.current = zoomViewNode.getContext('2d')
  }

  const zoomViewWidth = 260
  const zoomViewHeight = 140
  const { left: brx, top: bry } = DOM.getBoundingRect(viewportNode)
  const x = Math.floor(clientX - brx)
  const y = Math.floor(clientY - bry)

  const canvasX = x * WasmApi.dpr
  const canvasY = y * WasmApi.dpr

  const zoomContext = zoomViewContext.current
  // the image-data we have is an array of pixels, starting from the
  // bottom-left corner; so we need to calculate the offset accordingly
  const invertedY = imageData.height - canvasY
  const offset = (invertedY * imageData.width + canvasX) * 4
  const rgba = imageData.data

  const r = rgba[offset]
  const g = rgba[offset + 1]
  const b = rgba[offset + 2]
  const a = rgba[offset + 3]

  const sx = canvasX - 32
  const sy = cfg.checkBrowser('safari') ? canvasY : canvasY - 17
  const sw = 65
  const sh = 35

  if (zoomContext.imageSmoothingEnabled) {
    zoomContext.imageSmoothingEnabled = false
  }
  zoomContext.clearRect(0, 0, zoomViewWidth, zoomViewHeight)
  zoomContext.drawImage(canvas, sx, sy, sw, sh, 0, 0, zoomViewWidth, zoomViewHeight)

  requestAnimationFrame(() => {
    Store.emit(DWC.pickColor([r, g, b, a]))
  })
}

interface PixelOverlayWasmProps {
  viewportRef: React.RefObject<any>
  canvasRef: React.RefObject<any>
}

export const PixelOverlayWasm: React.FC<PixelOverlayWasmProps> = ({
  viewportRef,
  canvasRef,
}) => {
  const viewportNode = MF.refVal(viewportRef)
  const canvas = MF.refVal(canvasRef)
  const canvasContext = MF.useRef(null)
  const canvasImageData = MF.useRef(null)
  const zoomViewContext = MF.useRef(null)
  const [initialMousePos, setInitialMousePos] = React.useState({ x: 0, y: 0 })
  const updateStr = RX.subject()

  const handleKeydown = React.useCallback((event: any) => {
    if (Kbd.esc(event)) {
      DOM.stopPropagation(event)
      DOM.preventDefault(event)
      Store.emit(DWC.stopPicker())
      Modal.disallowClickOutside()
    }
  }, [])

  const handlePointerDownPicker = React.useCallback((event: any) => {
    DOM.preventDefault(event)
    DOM.stopPropagation(event)
    Store.emit(
      DWU.startUndoTransaction('mouse-down-picker'),
      DWC.pickColorSelect(true, Kbd.shift(event))
    )
  }, [])

  const handlePointerUpPicker = React.useCallback((event: any) => {
    DOM.preventDefault(event)
    DOM.stopPropagation(event)
    Store.emit(
      DWU.commitUndoTransaction('mouse-down-picker'),
      DWC.stopPicker()
    )
    Modal.disallowClickOutside()
  }, [])

  const handleDrawPickerCanvas = React.useCallback(() => {
    const context = canvasContext.current
    if (!context) return

    const width = canvas.width
    const height = canvas.height
    const buffer = new Uint8ClampedArray(width * height * 4)
    context.readPixels(
      0,
      0,
      width,
      height,
      context.RGBA,
      context.UNSIGNED_BYTE,
      buffer
    )
    const imageData = new ImageData(buffer, width, height)
    canvasImageData.current = imageData
  }, [])

  const handleCanvasChanged = React.useCallback((_: any) => {
    RX.push(updateStr, 'update')
  }, [])

  const handleMouseEnter = React.useCallback((event: any) => {
    const x = event.clientX
    const y = event.clientY
    setInitialMousePos({ x, y })
  }, [])

  const handlePointerMovePicker = React.useCallback(
    (event: any) => {
      processPointerMoveWasm(
        viewportNode,
        canvas,
        canvasImageData,
        zoomViewContext,
        event.clientX,
        event.clientY
      )
    },
    [viewportNode]
  )

  React.useEffect(() => {
    const context = canvas.getContext('webgl2', {
      willReadFrequently: true,
      preserveDrawingBuffer: true,
    })
    canvasContext.current = context
  }, [canvas])

  React.useEffect(() => {
    const listener = Events.listen(
      UG.document,
      'keydown',
      handleKeydown
    )
    return () => {
      Events.unlistenByKey(listener)
    }
  }, [handleKeydown])

  React.useEffect(() => {
    const sub = RX.pipe(
      RX.debounce(10),
      RX.subscribe(handleDrawPickerCanvas)
    )(updateStr)
    return () => {
      RX.dispose(sub)
    }
  }, [handleDrawPickerCanvas])

  React.useEffect(() => {
    handleCanvasChanged(null)
    const handler = handleCanvasChanged
    UG.document.addEventListener('penpot:wasm:render', handler)
    return () => {
      UG.document.removeEventListener('penpot:wasm:render', handler)
    }
  }, [])

  React.useEffect(() => {
    if (canvas != null) {
      const { x, y } = initialMousePos
      processPointerMoveWasm(
        viewportNode,
        canvas,
        canvasImageData,
        zoomViewContext,
        x,
        y
      )
    }
  }, [viewportNode, canvas, initialMousePos])

  return (
    <div
      id='pixel-overlay'
      tabIndex={0}
      className={`${Cur.getStatic('picker')} pixel-overlay`}
      onPointerDown={handlePointerDownPicker}
      onPointerUp={handlePointerUpPicker}
      onPointerMove={handlePointerMovePicker}
      onMouseEnter={handleMouseEnter}
    />
  )
}
