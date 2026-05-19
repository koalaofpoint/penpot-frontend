// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as D from 'app/common/data'
import * as DM from 'app/common/data/macros'
import * as CPF from 'app/common/files/focus'
import * as CFH from 'app/common/files/helpers'
import * as GRC from 'app/common/geom/rect'
import * as GSH from 'app/common/geom/shapes'
import * as CTK from 'app/common/types/component'
import * as CTT from 'app/common/types/shape-tree'
import * as UUID from 'app/common/uuid'
import * as DSC from 'app/main/data/shortcuts'
import * as DW from 'app/main/data/workspace'
import * as DWE from 'app/main/data/workspace/edition'
import * as GSC from 'app/main/data/workspace/grid-layout/shortcuts'
import * as PSC from 'app/main/data/workspace/path/shortcuts'
import * as WSC from 'app/main/data/workspace/shortcuts'
import * as TSC from 'app/main/data/workspace/text/shortcuts'
import * as Features from 'app/main/features'
import { Store } from 'app/main/store'
import * as MS from 'app/main/streams'
import * as Hooks from 'app/main/ui/hooks'
import * as SFD from 'app/main/ui/workspace/shapes/frame/dynamic-modifiers'
import * as Actions from 'app/main/ui/workspace/viewport/actions'
import * as Utils from 'app/main/ui/workspace/viewport/utils'
import * as MW from 'app/main/worker'
import * as WasmApi from 'app/render-wasm/api'
import * as DBG from 'app/util/debug'
import * as DOM from 'app/util/dom'
import * as Globals from 'app/util/globals'
import * as Kbd from 'app/util/keyboard'
import * as Mse from 'app/util/mouse'
import * as RX from 'beicon.v2.core'
import * as RXO from 'beicon.v2.operators'
import * as Events from 'goog.events'
import * as MF from 'rumext.v2'
import React from 'react'

type DrawingTool = 'comments' | 'frame' | 'rect' | 'circle' | 'path' | 'curve' | null

interface SetupDomEventsOptions {
  zoom: number
  disablePasteRef: React.MutableRefObject<boolean>
  inViewportRef: React.MutableRefObject<boolean>
  workspaceReadOnly: boolean
  drawingTool: DrawingTool
  drawingPath: boolean
}

export const setupDomEvents: React.FC<SetupDomEventsOptions> = ({
  zoom,
  disablePasteRef,
  inViewportRef,
  workspaceReadOnly,
  drawingTool,
  drawingPath,
}) => {
  const zoomRef = MF.useRef(zoom)

  MF.useEffect(() => {
    MF.setRefVal(zoomRef, zoom)
  }, [zoom])

  const onKeyDown = Actions.onKeyDown()
  const onKeyUp = Actions.onKeyUp()
  const onMouseWheel = Actions.onMouseWheel(zoomRef)
  const onPaste = Actions.onPaste(disablePasteRef, inViewportRef, workspaceReadOnly)

  const onPointerDown = React.useCallback(
    (e: any) => {
      const target = DOM.getTarget(e)
      const parent = DOM.getParentWithData(target, 'dont-clear-path')
      if (drawingPath && !parent) {
        Store.emit(DWE.clearEditionMode())
      }
    },
    [drawingPath]
  )

  const onBlur = React.useCallback(() => {
    Store.emit(Mse.toBlurEvent())
  }, [])

  MF.useEffect(() => {
    const key = Events.listen(
      window as any,
      Events.EventType.POINTERDOWN,
      onPointerDown
    )

    // We need to disable workspace paste when we on comments
    if (drawingTool === 'comments') {
      MF.setRefVal(disablePasteRef, true)
    } else {
      MF.setRefVal(disablePasteRef, false)
    }

    return () => {
      Events.unlistenByKey(key)
    }
  }, [drawingTool, drawingPath])

  MF.useLayoutEffect(() => {
    const keys = [
      Events.listen(document as any, Events.EventType.KEYDOWN, onKeyDown),
      Events.listen(document as any, Events.EventType.KEYUP, onKeyUp),
      // bind with passive=false to allow the event to be cancelled
      // https://stackoverflow.com/a/57582286/3219895
      Events.listen(window as any, Events.EventType.WHEEL, onMouseWheel, { passive: false }),
      Events.listen(window as any, Events.EventType.PASTE, onPaste),
      Events.listen(window as any, Events.EventType.BLUR, onBlur),
    ]
    return () => {
      keys.forEach((key) => Events.unlistenByKey(key))
    }
  }, [onKeyDown, onKeyUp, onPaste, workspaceReadOnly])
}

interface SetupViewportSizeProps {
  vport: any
  viewportRef: React.RefObject<any>
}

export const SetupViewportSize: React.FC<SetupViewportSizeProps> = ({
  vport,
  viewportRef,
}) => {
  MF.useEffect(() => {
    const node = MF.refVal(viewportRef)
    const prnt = DOM.getParent(node)
    const size = DOM.getClientSize(prnt)

    if (!D.equals(size, vport)) {
      Store.emit(DW.initializeViewport(DOM.getClientSize(prnt)))
    }
  }, [vport])
  return null
}

interface SetupCursorProps {
  cursor: React.MutableRefObject<any>
  alt: React.MutableRefObject<boolean>
  mod: React.MutableRefObject<boolean>
  space: React.MutableRefObject<boolean>
  panning: boolean
  drawingTool: DrawingTool
  drawingPath: boolean
  pathEditing: boolean
  z: React.MutableRefObject<boolean>
  workspaceReadOnly: boolean
}

export const SetupCursor: React.FC<SetupCursorProps> = ({
  cursor,
  alt,
  mod,
  space,
  panning,
  drawingTool,
  drawingPath,
  pathEditing,
  z,
  workspaceReadOnly,
}) => {
  React.useEffect(() => {
    const showPen =
      drawingTool === 'path' ||
      (drawingPath && drawingTool !== 'curve')

    const showZoom =
      z.current &&
      !space.current &&
      !mod.current &&
      !drawingPath &&
      !drawingTool

    let newCursor: string

    if (mod.current && space.current) {
      newCursor = Utils.getCursor('zoom')
    } else if (panning || space.current) {
      newCursor = Utils.getCursor('hand')
    } else if (drawingTool === 'comments') {
      newCursor = Utils.getCursor('comments')
    } else if (drawingTool === 'frame') {
      newCursor = Utils.getCursor('create-artboard')
    } else if (drawingTool === 'rect') {
      newCursor = Utils.getCursor('create-rectangle')
    } else if (drawingTool === 'circle') {
      newCursor = Utils.getCursor('create-ellipse')
    } else if (showZoom && !alt.current) {
      newCursor = Utils.getCursor('zoom-in')
    } else if (showZoom && alt.current) {
      newCursor = Utils.getCursor('zoom-out')
    } else if (showPen) {
      newCursor = Utils.getCursor('pen')
    } else if (drawingTool === 'curve') {
      newCursor = Utils.getCursor('pencil')
    } else if (drawingTool) {
      newCursor = Utils.getCursor('create-shape')
    } else if (alt.current && !pathEditing && !workspaceReadOnly) {
      newCursor = Utils.getCursor('duplicate')
    } else {
      newCursor = Utils.getCursor('pointer-inner')
    }

    if (cursor.current !== newCursor) {
      cursor.current = newCursor
    }
  }, [
    cursor,
    alt,
    mod,
    space,
    panning,
    drawingTool,
    drawingPath,
    pathEditing,
    z,
    workspaceReadOnly,
  ])
  return null
}

interface SetupKeyboardProps {
  alt: React.MutableRefObject<boolean>
  mod: React.MutableRefObject<boolean>
  space: React.MutableRefObject<boolean>
  z: React.MutableRefObject<boolean>
  shift: React.MutableRefObject<boolean>
}

export const SetupKeyboard: React.FC<SetupKeyboardProps> = ({
  alt,
  mod,
  space,
  z,
  shift,
}) => {
  const kbdZoomS = React.useMemo(() => {
    return RX.pipe(
      RX.filter(Kbd.keyDownEvent),
      RX.filter(Kbd.modEvent),
      RX.filter((kevent: any) =>
        Kbd.minus(kevent) ||
        Kbd.underscore(kevent) ||
        Kbd.equals(kevent) ||
        Kbd.plus(kevent)
      ),
      RXO.distinctContiguous
    )(MS.keyboard)
  }, [])

  const kbdShiftS = React.useMemo(() => {
    return RX.pipe(
      RX.filter(Kbd.shiftKey),
      RX.filter((e) => !Kbd.editingEvent(e)),
      RX.map(Kbd.keyDownEvent),
      RXO.distinctContiguous
    )(MS.keyboard)
  }, [])

  const kbdZS = React.useMemo(() => {
    return RX.pipe(
      RX.filter(Kbd.z),
      RX.filter((e) => !Kbd.editingEvent(e)),
      RX.map(Kbd.keyDownEvent),
      RXO.distinctContiguous
    )(MS.keyboard)
  }, [])

  Hooks.useStream(MS.keyboardAlt, (value: any) => {
    alt.current = value
  })

  Hooks.useStream(MS.keyboardSpace, (value: any) => {
    space.current = value
  })

  Hooks.useStream(kbdZS, (value: any) => {
    z.current = value
  })

  Hooks.useStream(kbdShiftS, (value: any) => {
    shift.current = value
  })

  Hooks.useStream(
    MS.keyboardMod,
    (value: any) => {
      mod.current = value
      // In mac after command+z there is no event
      // for the release of the z key
      if (!value) {
        z.current = false
      }
    }
  )

  Hooks.useStream(
    kbdZoomS,
    (kevent: any) => {
      DOM.preventDefault(kevent)
      Store.emit(
        Kbd.minus(kevent) || Kbd.underscore(kevent)
          ? DW.decreaseZoom()
          : DW.increaseZoom()
      )
    }
  )

  return null
}

interface SetupHoverShapesProps {
  pageId: string
  moveStream: any
  objects: any
  transform: any
  selected: Set<any>
  mod: React.MutableRefObject<boolean>
  hover: React.MutableRefObject<any>
  measureHover: React.MutableRefObject<any>
  hoverIds: React.MutableRefObject<any[]>
  hoverTopFrameId: React.MutableRefObject<any>
  hoverDisabled: React.MutableRefObject<boolean>
  focus: any
  zoom: number
  showMeasures: boolean
}

export const SetupHoverShapes: React.FC<SetupHoverShapesProps> = ({
  pageId,
  moveStream,
  objects,
  transform,
  selected,
  mod,
  hover,
  measureHover,
  hoverIds,
  hoverTopFrameId,
  hoverDisabled,
  focus,
  zoom,
  showMeasures,
}) => {
  const zoomRef = MF.useRef(zoom)
  const modRef = MF.useRef(mod.current)
  const transformRef = MF.useRef(transform)
  const selectedRef = MF.useRef(selected)
  const hoverDisabledRef = MF.useRef(hoverDisabled.current)
  const focusRef = MF.useRef(focus)

  const lastPointRef = MF.useVar(null)
  const modStr = React.useMemo(() => RX.subject(), [])

  const queryPoint = React.useCallback(
    (point: any) => {
      const zoomVal = MF.refVal(zoomRef)
      const rect = GRC.centerToRect(point, 5 / zoomVal)

      if (MF.refVal(hoverDisabledRef)) {
        return RX.of(null)
      }

      return RX.pipe(
        RX.filter((x: any) => x != null)
      )(
        MW.askBuffered({
          cmd: 'index/query-selection',
          pageId,
          rect,
          includeFrames: true,
          clipChildren: !MF.refVal(modRef),
          usingSelrect: false,
        })
      )
    },
    [pageId]
  )

  const overShapesStream = React.useMemo(() => {
    const modRefreshStream = RX.pipe(
      RX.observeOn(moveStream, 'async'),
      RX.map(() => MF.varVal(lastPointRef)),
      RX.filter((p: any) => p != null),
      RX.mergeMap(queryPoint)
    )

    const moveQueryStream = RX.pipe(
      RX.tap((p: any) => {
        lastPointRef.current = p
      }),
      RX.mergeMap(queryPoint)
    )(moveStream)

    return RX.share(RX.merge(modRefreshStream, moveQueryStream))
  }, [queryPoint, moveStream, modStr])

  const overShapesStreamDebounced = RX.pipe(
    RX.debounce(50)
  )(overShapesStream)

  React.useEffect(() => {
    transformRef.current = transform
  }, [transform])

  React.useEffect(() => {
    zoomRef.current = zoom
  }, [zoom])

  React.useEffect(() => {
    RX.push(modStr, 'update')
    modRef.current = mod.current
  }, [mod.current])

  React.useEffect(() => {
    selectedRef.current = selected
  }, [selected])

  React.useEffect(() => {
    hoverDisabledRef.current = hoverDisabled.current
  }, [hoverDisabled.current])

  React.useEffect(() => {
    focusRef.current = focus
  }, [focus])

  Hooks.useStream(
    overShapesStreamDebounced,
    () => {
      const point = MF.varVal(lastPointRef)
      hoverTopFrameId.current = CTT.topNestedFrame(objects, point)
    },
    [objects]
  )

  const sortedIdsCache = MF.useRef({})

  Hooks.useStream(
    overShapesStream,
    (
      ids: any[]
    ) => {
      const selectedVal = MF.refVal(selectedRef)
      const focusVal = MF.refVal(focusRef)
      const modVal = MF.refVal(modRef)
      const cachedIds = MF.refVal(sortedIdsCache)

      const makeSortedIds = (modVal: boolean, ids: any[]): any[] => {
        const sortedIds = D.toOrderedSet(
          ids
            .filter((id) => !CFH.hiddenParent(objects, id))
            .filter((id) => !DM.getIn(objects, [id, 'blocked']))
            .filter((id) => !CFH.svgRawShape(objects, id))
        )
        const sorted = CTT.sortZIndex(objects, sortedIds, { bottomFrames: modVal })
        MF.setRefVal(sortedIdsCache, { ...cachedIds, [[modVal, ids]]: sorted })
        return sorted
      }

      const cached = cachedIds[[modVal, ids]]
      const finalIds = cached || makeSortedIds(modVal, ids)

      const grouped = (id: any) =>
        CFH.groupLikeShape(objects, id) && !CFH.maskShape(objects, id)

      const selectedWithParents = new Set(
        selectedVal.flatMap((id: any) => CFH.getParentIds(objects, id))
      )

      const rootFrameWithData = (id: any) => {
        const obj = objects[id]
        return (
          CFH.rootFrame(obj) &&
          D.notEmpty(obj.shapes) &&
          !CTK.instanceHead(obj) &&
          !CTK.mainInstance(obj)
        )
      }

      const childParent = new Set(
        ids
          .filter((id) => !CFH.groupShape(objects, id))
          .flatMap((id: any) => CFH.getParentIds(objects, id))
      )

      const removeHoverFilter = modVal
        ? grouped
        : (id: any) =>
            rootFrameWithData(id) ||
            (CFH.groupShape(objects, id) && !childParent.has(id)) ||
            (Features.activeFeature(Store.getState(), 'render-wasm/v1') &&
              CFH.textShape(objects[id]) &&
              !WasmApi.intersectPositionInShape(id, MF.varVal(lastPointRef)))

      const removeMeasureFilter = modVal
        ? grouped
        : (id: any) =>
            CFH.groupShape(objects, id) && !childParent.has(id)

      const removeHover = new Set([
        ...selectedWithParents,
        ...finalIds.filter(removeHoverFilter),
      ])

      const removeMeasure = new Set([
        ...selectedWithParents,
        ...finalIds.filter(removeMeasureFilter),
      ])

      const noFillNestedFrames = (id: any) => {
        const shape = objects[id]
        return (
          CFH.frameShape(shape) &&
          !CFH.isDirectChildOfRoot(shape) &&
          D.isEmpty(shape.fills)
        )
      }

      const hoverShape = finalIds
        .filter((id) => !removeHover.has(id))
        .filter((id) => !(modVal && noFillNestedFrames(id)))
        .filter((id) => D.isEmpty(focusVal) || CPF.isInFocus(objects, focusVal, id))
        .map((id) => objects[id])
        .find((s: any) => s != null)

      const measureHoverShape = showMeasures
        ? finalIds
            .filter((id) => !removeMeasure.has(id))
            .filter((id) => !(modVal && noFillNestedFrames(id)))
            .filter((id) => D.isEmpty(focusVal) || CPF.isInFocus(objects, focusVal, id))
            .map((id) => objects[id])
            .find((s: any) => s != null)
        : null

      hover.current = hoverShape
      measureHover.current = measureHoverShape
      hoverIds.current = ids
    },
    [pageId, objects, showMeasures]
  )

  React.useEffect(() => {
    return () => {
      MF.setRefVal(sortedIdsCache, {})
    }
  }, [])

  return null
}

interface SetupViewportModifiersProps {
  modifiers: any
  objects: any
}

export const SetupViewportModifiers: React.FC<SetupViewportModifiersProps> = ({
  modifiers,
  objects,
}) => {
  const rootFrameIds = React.useMemo(
    () => CTT.getRootShapesIds(objects),
    [objects]
  )

  const filteredModifiers = React.useMemo(() => {
    const keys = [...rootFrameIds, UUID.zero]
    const result: any = {}
    keys.forEach((k) => {
      if (modifiers[k] !== undefined) {
        result[k] = modifiers[k]
      }
    })
    return result
  }, [modifiers, rootFrameIds])

  return SFD.useDynamicModifiers(objects, Globals.document, filteredModifiers)
}

export const insideVbox = (
  vbox: any,
  objects: any,
  frameId: any
): boolean => {
  const frame = objects[frameId]
  return frame != null && GSH.overlaps(frame, vbox)
}

interface SetupActiveFramesProps {
  objects: any
  hoverIds: React.MutableRefObject<any[]>
  selected: Set<any>
  activeFrames: React.MutableRefObject<Set<any>>
  zoom: number
  transform: any
  vbox: any
}

export const SetupActiveFrames: React.FC<SetupActiveFramesProps> = ({
  objects,
  hoverIds,
  selected,
  activeFrames,
  zoom,
  transform,
  vbox,
}) => {
  const allFrames = React.useMemo(
    () => CTT.getRootFramesIds(objects),
    [objects]
  )

  const selectedFrames = React.useMemo(
    () => allFrames.filter((id: any) => selected.has(id)),
    [allFrames, selected]
  )

  const xfSelectedFrame = (id: any) =>
    !CFH.rootFrame(objects[id]) && CFH.getShapeIdRootFrame(objects, id)

  const selectedShapesFrames = React.useMemo(
    () => new Set(selected.filter(xfSelectedFrame)),
    [selected, objects]
  )

  const activeSelection =
    transform !== 'move' && selectedFrames.length === 1
      ? selectedFrames[0]
      : null

  const lastHoverIds = MF.useVar<Set<any> | null>(null)

  React.useEffect(() => {
    if (D.notEmpty(hoverIds.current)) {
      lastHoverIds.current = new Set(hoverIds.current)
    }
  }, [hoverIds.current])

  React.useEffect(() => {
    const hoverIdsSet = new Set(
      hoverIds.current.map((id: any) => CFH.getShapeIdRootFrame(objects, id))
    )

    const isActiveFrame = (id: any) => {
      if (zoom > 1.3) return true

      if (
        (transform === 'move' || zoom >= 0.25) &&
        (hoverIdsSet.has(id) || (lastHoverIds.current && lastHoverIds.current.has(id)))
      ) {
        return true
      }

      if (id === activeSelection) return true

      if (selectedShapesFrames.has(id)) return true

      return false
    }

    let newActiveFrames = new Set(
      allFrames.filter(isActiveFrame).filter((id: any) => insideVbox(vbox, objects, id))
    )

    // Debug only: Disable the thumbnails
    if (DBG.enabled('disable-frame-thumbnails')) {
      newActiveFrames = new Set(allFrames)
    } else if (DBG.enabled('force-frame-thumbnails')) {
      newActiveFrames = new Set()
    }

    if (!D.equals(newActiveFrames, activeFrames.current)) {
      activeFrames.current = newActiveFrames
    }
  }, [objects, hoverIds.current, selected, zoom, transform, vbox, activeFrames])

  return null
}

interface SetupShortcutsProps {
  pathEditing: boolean
  drawingPath: boolean
  textEditing: boolean
  gridEditing: boolean
}

export const SetupShortcuts: React.FC<SetupShortcutsProps> = ({
  pathEditing,
  drawingPath,
  textEditing,
  gridEditing,
}) => {
  Hooks.useShortcuts('workspace', WSC.shortcuts)

  React.useEffect(() => {
    if (gridEditing) {
      Store.emit(DSC.pushShortcuts('grid', GSC.shortcuts))
      return () => {
        Store.emit(DSC.popShortcuts('grid'))
      }
    }

    if (drawingPath || pathEditing) {
      Store.emit(DSC.pushShortcuts('path', PSC.shortcuts))
      return () => {
        Store.emit(DSC.popShortcuts('path'))
      }
    }

    if (textEditing) {
      Store.emit(DSC.pushShortcuts('text', TSC.shortcuts))
      return () => {
        Store.emit(DSC.popShortcuts('text'))
      }
    }
  }, [pathEditing, drawingPath, textEditing, gridEditing])

  return null
}
