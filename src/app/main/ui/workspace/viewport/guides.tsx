// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as DM from 'app/common/data/macros'
import * as CFH from 'app/common/files/helpers'
import * as GPT from 'app/common/geom/point'
import * as GSH from 'app/common/geom/shapes'
import * as MTH from 'app/common/math'
import * as COLORS from 'app/common/types/color'
import * as CTST from 'app/common/types/shape-tree'
import * as UUID from 'app/common/uuid'
import * as DW from 'app/main/data/workspace'
import * as Refs from 'app/main/refs'
import { Store } from 'app/main/store'
import { formatNumber } from 'app/main/ui/formats'
import { Rulers } from 'app/main/ui/workspace/viewport/rulers'
import * as Ctx from 'app/main/ui/context'
import * as CUR from 'app/main/ui/css-cursors'
import * as DOM from 'app/util/dom'
import * as MF from 'rumext.v2'
import React from 'react'

const GUIDE_WIDTH = 1
const GUIDE_OPACITY = 0.7
const GUIDE_OPACITY_HOVER = 1
const GUIDE_COLOR = COLORS.newDanger
const GUIDE_PILL_WIDTH = 34
const GUIDE_PILL_HEIGHT = 20
const GUIDE_PILL_CORNER_RADIUS = 4
const GUIDE_ACTIVE_AREA = 16

const GUIDE_CREATION_MARGIN_LEFT = 8
const GUIDE_CREATION_MARGIN_TOP = 28
const GUIDE_CREATION_WIDTH = 16
const GUIDE_CREATION_HEIGHT = 24

interface UseGuideProps {
  onGuideChange: (guide: any) => void
  getHoverFrame: () => any
  zoom: number
  guide: any
}

function useGuide(
  { onGuideChange, getHoverFrame, zoom, guide }: UseGuideProps,
  deps: any[]
) {
  const draggingRef = MF.useRef(false)
  const startRef = MF.useRef(null)
  const startPosRef = MF.useRef(null)

  const [state, setState] = React.useState({
    hover: false,
    newPosition: null,
    newFrameId: guide?.frameId,
  })

  const frameId = state.newFrameId
  const frameRef = React.useMemo(() => {
    return Refs.objectById(frameId)
  }, [frameId])

  const frame = MF.useDeref(frameRef)
  const snapPixel = MF.useDeref(Refs.snapPixel)
  const readOnly = Ctx.useContext(Ctx.workspaceReadOnlyContext)

  const onPointerEnter = React.useCallback(() => {
    if (!readOnly) {
      Store.emit(DW.setHoverGuide(guide?.id, true))
      setState((s) => ({ ...s, hover: true }))
    }
  }, [guide?.id, readOnly])

  const onPointerLeave = React.useCallback(() => {
    if (!readOnly) {
      Store.emit(DW.setHoverGuide(guide?.id, false))
      setState((s) => ({ ...s, hover: false }))
    }
  }, [guide?.id, readOnly])

  const onPointerDown = React.useCallback(
    (event: any) => {
      if (!readOnly) {
        if ((event as any).button === 0) {
          DOM.capturePointer(event)
          MF.setRefVal!(draggingRef, true)
          MF.setRefVal!(startRef, DOM.getClientPosition(event))
          const mousePos = (Refs.mousePosition as any).deref()
          MF.setRefVal!(startPosRef, mousePos?.[guide?.axis])
        }
      }
    },
    [guide?.axis, readOnly]
  )

  const onPointerUp = React.useCallback(() => {
    if (!readOnly && onGuideChange && state.newPosition !== null) {
      onGuideChange({
        position: state.newPosition,
        frameId: state.newFrameId,
      })
    }
  }, [state.newPosition, state.newFrameId, onGuideChange, readOnly])

  const onLostPointerCapture = React.useCallback(
    (event: any) => {
      if (!readOnly) {
        DOM.releasePointer(event)
        MF.setRefVal!(draggingRef, false)
        MF.setRefVal!(startRef, null)
        MF.setRefVal!(startPosRef, null)
        setState((s) => ({ ...s, newPosition: null }))
      }
    },
    [readOnly]
  )

  const onPointerMove = React.useCallback(
    (event: any) => {
      if (!readOnly && MF.refVal(draggingRef)) {
        const startPt = MF.refVal(startRef)
        const startPos = MF.refVal(startPosRef)
        const currentPt = DOM.getClientPosition(event)
        const delta = ((currentPt as any)[guide?.axis] - (startPt as any)[guide?.axis]) / zoom

        let newPosition =
          guide?.position !== null
            ? guide.position + delta
            : startPos + delta

        if (snapPixel) {
          newPosition = MTH.round(newPosition)
        }

        const newFrame = getHoverFrame()

        setState((s) => ({
          ...s,
          newPosition,
          newFrameId: newFrame?.id,
        }))
      }
    },
    [guide?.position, guide?.axis, zoom, snapPixel, readOnly, getHoverFrame]
  )

  return {
    onPointerEnter,
    onPointerLeave,
    onPointerDown,
    onPointerUp,
    onLostPointerCapture,
    onPointerMove,
    state,
    frame,
  }
}

function guideAreaAxis(
  pos: number,
  vbox: any,
  zoom: number,
  frame: any,
  axis: 'x' | 'y'
) {
  const rulersPos = Rulers.rulersPos / zoom
  const guideActiveArea = GUIDE_ACTIVE_AREA / zoom

  if (frame && axis === 'x') {
    return {
      x: pos - guideActiveArea / 2,
      y: (frame as any).y,
      width: guideActiveArea,
      height: (frame as any).height,
    }
  }

  if (frame) {
    return {
      x: (frame as any).x,
      y: pos - guideActiveArea / 2,
      width: (frame as any).width,
      height: guideActiveArea,
    }
  }

  if (axis === 'x') {
    return {
      x: pos - guideActiveArea / 2,
      y: (vbox as any).y + rulersPos,
      width: guideActiveArea,
      height: (vbox as any).height,
    }
  }

  return {
    x: (vbox as any).x + rulersPos,
    y: pos - guideActiveArea / 2,
    width: (vbox as any).width,
    height: guideActiveArea,
  }
}

function guideLineAxis(pos: number, vbox: any, frame: any, axis: 'x' | 'y') {
  if (axis === 'x') {
    if (frame) {
      return {
        l1x1: pos,
        l1y1: (vbox as any).y,
        l1x2: pos,
        l1y2: (frame as any).y,
        l2x1: pos,
        l2y1: (frame as any).y,
        l2x2: pos,
        l2y2: (frame as any).y + (frame as any).height,
        l3x1: pos,
        l3y1: (frame as any).y + (frame as any).height,
        l3x2: pos,
        l3y2: (vbox as any).y + (vbox as any).height,
      }
    }
    return {
      x1: pos,
      y1: (vbox as any).y,
      x2: pos,
      y2: (vbox as any).y + (vbox as any).height,
    }
  }

  if (frame) {
    return {
      l1x1: (vbox as any).x,
      l1y1: pos,
      l1x2: (frame as any).x,
      l1y2: pos,
      l2x1: (frame as any).x,
      l2y1: pos,
      l2x2: (frame as any).x + (frame as any).width,
      l2y2: pos,
      l3x1: (frame as any).x + (frame as any).width,
      l3y1: pos,
      l3x2: (vbox as any).x + (vbox as any).width,
      l3y2: pos,
    }
  }

  return {
    x1: (vbox as any).x,
    y1: pos,
    x2: (vbox as any).x + (vbox as any).width,
    y2: pos,
  }
}

function guidePillAxis(pos: number, vbox: any, zoom: number, axis: 'x' | 'y') {
  const rulersPos = Rulers.rulersPos / zoom
  const pillWidth = GUIDE_PILL_WIDTH / zoom
  const pillHeight = GUIDE_PILL_HEIGHT / zoom

  if (axis === 'x') {
    return {
      rectX: pos - pillWidth / 2,
      rectY: (vbox as any).y + rulersPos - pillWidth / 2 + 3 / zoom,
      rectWidth: pillWidth,
      rectHeight: pillHeight,
      textX: pos,
      textY: (vbox as any).y + rulersPos - 3 / zoom,
    }
  }

  return {
    rectX: (vbox as any).x + rulersPos - pillHeight / 2 - 4 / zoom,
    rectY: pos - pillWidth / 2,
    rectWidth: pillHeight,
    rectHeight: pillWidth,
    textX: (vbox as any).x + rulersPos - 3 / zoom,
    textY: pos,
  }
}

function isGuideInsideFrame(guide: any, frame: any) {
  if (guide.axis === 'x') {
    return guide.position >= (frame as any).x && guide.position <= (frame as any).x + (frame as any).width
  }

  return guide.position >= (frame as any).y && guide.position <= (frame as any).y + (frame as any).height
}

interface GuideProps {
  guide: any
  isHover: boolean
  onGuideChange: (guide: any) => void
  getHoverFrame: () => any
  vbox: any
  zoom: number
  hoverFrame: any
  disabledGuides: boolean
  frameModifier: any
  frameTransform: any
}

export const Guide: React.FC<GuideProps> = ({
  guide,
  isHover,
  onGuideChange,
  getHoverFrame,
  vbox,
  zoom,
  hoverFrame,
  disabledGuides,
  frameModifier,
  frameTransform,
}) => {
  const axis = guide.axis

  const handleChangePosition = React.useCallback(
    (changes: any) => {
      if (onGuideChange) {
        onGuideChange({ ...guide, ...changes })
      }
    },
    [onGuideChange, guide]
  )

  const { onPointerEnter, onPointerLeave, onPointerDown, onPointerUp, onLostPointerCapture, onPointerMove, state, frame } = useGuide(
    { onGuideChange: handleChangePosition, getHoverFrame, zoom, guide },
    []
  )

  const baseFrame = frame || hoverFrame
  let transformedFrame = baseFrame

  if (frameModifier && baseFrame) {
    transformedFrame = GSH.transformShape(baseFrame, frameModifier)
  }

  if (frameTransform && transformedFrame) {
    transformedFrame = GSH.applyTransform(transformedFrame, frameTransform)
  }

  const moveVec = transformedFrame && baseFrame
    ? GPT.toVec(GPT.point((baseFrame as any).x, (baseFrame as any).y), GPT.point((transformedFrame as any).x, (transformedFrame as any).y))
    : null

  const pos =
    ((state.newPosition ?? guide.position) + (moveVec ? moveVec[axis] : 0))

  const guideWidthPx = GUIDE_WIDTH / zoom
  const pillCornerRadius = GUIDE_PILL_CORNER_RADIUS / zoom

  const frameGuideOutside =
    transformedFrame && !isGuideInsideFrame({ ...guide, position: pos }, transformedFrame)

  if (!transformedFrame || (CFH.rootFrame(transformedFrame) && CTST.rotatedFrame(transformedFrame))) {
    return null
  }

  return (
    <g className='guide-area' opacity={frameGuideOutside ? 0 : undefined}>
      {!disabledGuides && (() => {
        const { x, y, width, height } = guideAreaAxis(pos, vbox, zoom, transformedFrame, axis)
        const cursorClass =
          axis === 'x'
            ? CUR.getDynamic('resize-ew', 0)
            : CUR.getDynamic('resize-ns', 0)

        return (
          <rect
            x={x}
            y={y}
            width={width}
            height={height}
            className={cursorClass}
            style={{
              fill: 'none',
              pointerEvents: frameGuideOutside ? 'none' : 'fill',
            }}
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onLostPointerCapture={onLostPointerCapture}
            onPointerMove={onPointerMove}
          />
        )
      })()}

      {transformedFrame ? (() => {
        const lines = guideLineAxis(pos, vbox, transformedFrame, axis)
        const isHovering = isHover || state.hover

        return (
          <g>
            {isHovering && (
              <line
                x1={lines.l1x1}
                y1={lines.l1y1}
                x2={lines.l1x2}
                y2={lines.l1y2}
                style={{
                  stroke: GUIDE_COLOR,
                  strokeOpacity: GUIDE_OPACITY_HOVER,
                  strokeDasharray: `0, ${6 / zoom}`,
                  strokeLinecap: 'round',
                  strokeWidth: guideWidthPx,
                }}
              />
            )}
            <line
              x1={lines.l2x1}
              y1={lines.l2y1}
              x2={lines.l2x2}
              y2={lines.l2y2}
              style={{
                stroke: GUIDE_COLOR,
                strokeWidth: guideWidthPx,
                strokeOpacity: isHovering ? GUIDE_OPACITY_HOVER : GUIDE_OPACITY,
              }}
            />
            {isHovering && (
              <line
                x1={lines.l3x1}
                y1={lines.l3y1}
                x2={lines.l3x2}
                y2={lines.l3y2}
                style={{
                  stroke: GUIDE_COLOR,
                  strokeOpacity: GUIDE_OPACITY_HOVER,
                  strokeDasharray: `0, ${6 / zoom}`,
                  strokeLinecap: 'round',
                  strokeWidth: guideWidthPx,
                }}
              />
            )}
          </g>
        )
      })() : (() => {
        const lines = guideLineAxis(pos, vbox, null, axis)
        const isHovering = isHover || state.hover

        return (
          <line
            x1={lines.x1}
            y1={lines.y1}
            x2={lines.x2}
            y2={lines.y2}
            style={{
              stroke: GUIDE_COLOR,
              strokeWidth: guideWidthPx,
              strokeOpacity: isHovering ? GUIDE_OPACITY_HOVER : GUIDE_OPACITY,
            }}
          />
        )
      })()}

      {(isHover || state.hover) && (() => {
        const { rectX, rectY, rectWidth, rectHeight, textX, textY } = guidePillAxis(
          pos,
          vbox,
          zoom,
          axis
        )

        return (
          <g className='guide-pill'>
            <rect
              x={rectX}
              y={rectY}
              width={rectWidth}
              height={rectHeight}
              rx={pillCornerRadius}
              ry={pillCornerRadius}
              style={{ fill: GUIDE_COLOR }}
            />
            <text
              x={textX}
              y={textY}
              textAnchor='middle'
              dominantBaseline='middle'
              transform={axis === 'y' ? `rotate(-90 ${textX},${textY})` : undefined}
              style={{
                fontSize: Rulers.fontSize / zoom,
                fontFamily: Rulers.fontFamily,
                fill: 'white',
              }}
            >
              {formatNumber(pos - (transformedFrame ? (axis === 'x' ? (transformedFrame as any).x : (transformedFrame as any).y) : 0))}
            </text>
          </g>
        )
      })()}
    </g>
  )
}

interface NewGuideAreaProps {
  vbox: any
  zoom: number
  axis: 'x' | 'y'
  getHoverFrame: () => any
  disabledGuides: boolean
}

export const NewGuideArea: React.FC<NewGuideAreaProps> = ({
  vbox,
  zoom,
  axis,
  getHoverFrame,
  disabledGuides,
}) => {
  const onGuideChange = React.useCallback(
    (guide: any) => {
      const newGuide = {
        ...guide,
        id: UUID.next(),
        axis,
      }

      if (isGuideInsideVbox(zoom, vbox, newGuide)) {
        Store.emit(DW.updateGuides(newGuide))
      }
    },
    [vbox, zoom, axis]
  )

  const { onPointerEnter, onPointerLeave, onPointerDown, onPointerUp, onLostPointerCapture, onPointerMove, state, frame } = useGuide(
    { onGuideChange, getHoverFrame, zoom, guide: { axis } },
    [vbox]
  )

  const readOnly = Ctx.useContext(Ctx.workspaceReadOnlyContext)

  return (
    <g className='new-guides'>
      {!disabledGuides && (() => {
        const rulersPos = Rulers.rulersPos / zoom
        const creationWidth = GUIDE_CREATION_WIDTH / zoom
        const creationHeight = GUIDE_CREATION_HEIGHT / zoom

        const x = axis === 'x'
          ? (vbox as any).x + GUIDE_CREATION_MARGIN_LEFT / zoom
          : (vbox as any).x + GUIDE_CREATION_MARGIN_TOP / zoom

        const y = axis === 'x' ? (vbox as any).y : (vbox as any).y

        const width = axis === 'x' ? creationWidth : (vbox as any).width
        const height = axis === 'x' ? (vbox as any).height : creationHeight

        const cursorClass = !readOnly
          ? axis === 'x'
            ? CUR.getDynamic('resize-ew', 0)
            : CUR.getDynamic('resize-ns', 0)
          : undefined

        return (
          <rect
            x={x}
            y={y}
            width={width}
            height={height}
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onLostPointerCapture={onLostPointerCapture}
            onPointerMove={onPointerMove}
            className={cursorClass}
            style={{
              fill: 'none',
              pointerEvents: 'fill',
            }}
          />
        )
      })()}

      {state.newPosition && (
        <Guide
          guide={{ axis, position: state.newPosition }}
          isHover
          onGuideChange={() => {}}
          getHoverFrame={() => frame}
          vbox={vbox}
          zoom={zoom}
          hoverFrame={frame}
          disabledGuides={disabledGuides}
          frameModifier={null}
          frameTransform={null}
        />
      )}
    </g>
  )
}

function isGuideInsideVbox(zoom: number, vbox: any, guide: any) {
  const ruleAreaSize = Rulers.rulerAreaSize / zoom
  const { x, y, width, height } = vbox

  if (guide.axis === 'x') {
    return guide.position >= x + ruleAreaSize && guide.position <= x + width
  }

  return guide.position >= y + ruleAreaSize && guide.position <= y + height
}

interface ViewportGuidesProps {
  zoom: number
  vbox: any
  hoverFrame: any
  disabledGuides: boolean
  modifiers: any
  guides: any
}

export const ViewportGuides: React.FC<ViewportGuidesProps> = ({
  zoom,
  vbox,
  hoverFrame,
  disabledGuides,
  modifiers,
  guides,
}) => {
  const filteredGuides = React.useMemo(() => {
    return Object.values(guides).filter((guide: any) =>
      isGuideInsideVbox(zoom, vbox, guide)
    )
  }, [guides, zoom, vbox])

  const focus = MF.useDeref(Refs.workspaceFocusSelected)
  const hoverFrameRef = MF.useRef(null)

  const getHoverFrame = React.useCallback(() => {
    return MF.refVal(hoverFrameRef)
  }, [])

  React.useEffect(() => {
    MF.setRefVal!(hoverFrameRef, hoverFrame)
  }, [hoverFrame])

  const onGuideChange = React.useCallback(
    (guide: any) => {
      if (isGuideInsideVbox(zoom, vbox, guide)) {
        Store.emit(DW.updateGuides(guide))
      } else {
        Store.emit(DW.removeGuide(guide))
      }
    },
    [zoom, vbox]
  )

  const frameModifiers = React.useMemo(() => {
    const byId = new Map(Object.entries(modifiers).map(([k, v]: [any, any]) => [k, v]))
    return new Map(
      [...byId.entries()].map(([k, v]) => [k, v?.transform])
    )
  }, [modifiers])

  return (
    <g className='guides' pointerEvents='none'>
      <NewGuideArea
        vbox={vbox}
        zoom={zoom}
        axis='x'
        getHoverFrame={getHoverFrame}
        disabledGuides={disabledGuides}
      />

      <NewGuideArea
        vbox={vbox}
        zoom={zoom}
        axis='y'
        getHoverFrame={getHoverFrame}
        disabledGuides={disabledGuides}
      />

      {filteredGuides.map((guide: any) => {
        if (
          guide.frameId === null ||
          guide.frameId === undefined ||
          (focus && !focus.isEmpty && !focus.has(guide.frameId))
        ) {
          return null
        }

        return (
          <Guide
            key={`guide-${guide.id}`}
            guide={guide}
            vbox={vbox}
            zoom={zoom}
            frameTransform={frameModifiers.get(guide.frameId)}
            getHoverFrame={getHoverFrame}
            onGuideChange={onGuideChange}
            disabledGuides={disabledGuides}
            isHover={false}
            hoverFrame={null}
            frameModifier={null}
          />
        )
      })}
    </g>
  )
}
