// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as D from 'app/common/data'
import * as DM from 'app/common/data/macros'
import * as GMT from 'app/common/geom/matrix'
import * as GPT from 'app/common/geom/point'
import * as GSH from 'app/common/geom/shapes'
import * as GSP from 'app/common/geom/shapes/points'
import * as Mth from 'app/common/math'
import * as CC from 'app/common/types/color'
import * as TypesFills from 'app/common/types/fills'
import * as DC from 'app/main/data/workspace/colors'
import * as Features from 'app/main/features'
import * as Refs from 'app/main/refs'
import { Store } from 'app/main/store'
import * asuwvv from 'app/main/ui/workspace/viewport/viewport-ref'
import * as DOM from 'app/util/dom'
import * as Mse from 'app/util/mouse'
import * as RX from 'beicon.v2.core'
import * as STR from 'cuerdas.core'
import * as MF from 'rumext.v2'
import React from 'react'

const GRADIENT_LINE_STROKE_WIDTH = 2
const GRADIENT_LINE_STROKE_COLOR = 'var(--app-white)'
const GRADIENT_SQUARE_WIDTH = 20.5
const GRADIENT_SQUARE_RADIUS = 4
const GRADIENT_SQUARE_STROKE_WIDTH = 2
const GRADIENT_WIDTH_HANDLER_RADIUS = 4
const GRADIENT_WIDTH_HANDLER_RADIUS_SELECTED = 6
const GRADIENT_WIDTH_HANDLER_RADIUS_HANDLER = 15
const GRADIENT_WIDTH_HANDLER_COLOR = 'var(--app-white)'
const GRADIENT_SQUARE_STROKE_COLOR = 'var(--app-white)'
const GRADIENT_SQUARE_STROKE_COLOR_SELECTED = 'var(--color-accent-tertiary)'

const GRADIENT_ENDPOINT_RADIUS = 4
const GRADIENT_ENDPOINT_RADIUS_SELECTED = 6
const GRADIENT_ENDPOINT_RADIUS_HANDLER = 20

const CHECKERBOARD =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAIAAAC0tAIdAAACvUlEQVQoFQGyAk39AeLi4gAAAAAAAB0dHQAAAAAAAOPj4wAAAAAAAB0dHQAAAAAAAOPj4wAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////AAAAAAAA4+PjAAAAAAAAHR0dAAAAAAAA4+PjAAAAAAAAHR0dAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATj4+MAAAAAAAAdHR0AAAAAAADj4+MAAAAAAAAdHR0AAAAAAADj4+MAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjScaa0cU7nIAAAAASUVORK5CYII='

interface ShadowProps {
  id: string
  offset: number
}

export const Shadow: React.FC<ShadowProps> = ({ id, offset }) => {
  return (
    <filter
      id={id}
      x='-10%'
      y='-10%'
      width='120%'
      height='120%'
      filterUnits='objectBoundingBox'
      colorInterpolationFilters='sRGB'
    >
      <feFlood floodOpacity='0' result='BackgroundImageFix' />
      <feColorMatrix
        in='SourceAlpha'
        type='matrix'
        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
      />
      <feOffset dy={offset} />
      <feGaussianBlur stdDeviation='1' />
      <feColorMatrix
        type='matrix'
        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0'
      />
      <feBlend mode='normal' in2='BackgroundImageFix' result={id} />
      <feBlend mode='normal' in='SourceGraphic' in2={id} result='shape' />
    </filter>
  )
}

interface GradientColorHandlerProps {
  zoom: number
  point: any
  color: { value: string; opacity: number }
  angle: number
  selected: boolean
  index: number
  onClick: () => void
  onPointerDown: () => void
  onPointerUp: () => void
  onPointerMove: () => void
  onLostPointerCapture: () => void
}

export const GradientColorHandler: React.FC<GradientColorHandlerProps> = ({
  zoom,
  point,
  color,
  angle,
  selected,
  index,
  onClick,
  onPointerDown,
  onPointerUp,
  onPointerMove,
  onLostPointerCapture,
}) => {
  const x = (point as any).x
  const y = (point as any).y

  return (
    <g
      filter='url(#gradient-drop-shadow)'
      style={{ cursor: 'pointer' }}
      transform={GMT.rotateMatrix(angle, point)}
    >
      <image
        href={CHECKERBOARD}
        x={x - GRADIENT_SQUARE_WIDTH / 2 / zoom + 12 / zoom}
        y={y - GRADIENT_SQUARE_WIDTH / 2 / zoom}
        width={GRADIENT_SQUARE_WIDTH / zoom}
        height={GRADIENT_SQUARE_WIDTH / zoom}
      />

      <rect
        x={x - GRADIENT_SQUARE_WIDTH / 2 / zoom + 12 / zoom}
        y={y - GRADIENT_SQUARE_WIDTH / 2 / zoom}
        rx={GRADIENT_SQUARE_RADIUS / zoom}
        width={GRADIENT_SQUARE_WIDTH / zoom / 2}
        height={GRADIENT_SQUARE_WIDTH / zoom}
        fill={color.value}
        onClick={() => onClick()}
        onPointerDown={() => onPointerDown()}
        onPointerUp={() => onPointerUp()}
      />

      {selected && (
        <rect
          pointerEvents='none'
          x={x - GRADIENT_SQUARE_WIDTH / 2 / zoom + 12 / zoom - 2 / zoom}
          y={y - GRADIENT_SQUARE_WIDTH / 2 / zoom - 2 / zoom}
          rx={GRADIENT_SQUARE_RADIUS / zoom + 2 / zoom}
          width={GRADIENT_SQUARE_WIDTH / zoom + 4 / zoom}
          height={GRADIENT_SQUARE_WIDTH / zoom + 4 / zoom}
          stroke='var(--color-accent-tertiary)'
          strokeWidth={GRADIENT_SQUARE_STROKE_WIDTH / zoom}
          fill='transparent'
        />
      )}

      <rect
        data-allow-click-modal='colorpicker'
        data-index={index}
        pointerEvents='all'
        x={x - GRADIENT_SQUARE_WIDTH / 2 / zoom + 12 / zoom}
        y={y - GRADIENT_SQUARE_WIDTH / 2 / zoom}
        rx={GRADIENT_SQUARE_RADIUS / zoom}
        width={GRADIENT_SQUARE_WIDTH / zoom}
        height={GRADIENT_SQUARE_WIDTH / zoom}
        stroke='var(--app-white)'
        strokeWidth={GRADIENT_SQUARE_STROKE_WIDTH / zoom}
        fill={color.value}
        fillOpacity={color.opacity}
        onClick={onClick}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerMove={onPointerMove}
        onLostPointerCapture={onLostPointerCapture}
      />

      <circle cx={x} cy={y} r={2 / zoom} fill='var(--app-white)' />
    </g>
  )
}

interface GradientHandlerTransformedProps {
  fromP: any
  toP: any
  widthP?: any
  zoom: number
  editing: number | null
  stops: any[]
  onChangeStart?: (point: any) => void
  onChangeFinish?: (point: any) => void
  onChangeWidth?: (point: any) => void
}

export const GradientHandlerTransformed: React.FC<GradientHandlerTransformedProps> = ({
  fromP,
  toP,
  widthP,
  zoom,
  editing,
  stops,
  onChangeStart,
  onChangeFinish,
  onChangeWidth,
}) => {
  const movingPoint = MF.useVar<'from-p' | 'to-p' | 'width-p' | null>(null)
  const angle = 90 + GPT.angle(fromP, toP)
  const draggingRef = MF.useRef(false)
  const startOffset = MF.useRef(null)

  const [handlerState, setHandlerState] = React.useState({
    display: false,
    offset: 0,
    hover: null as 'from-p' | 'to-p' | 'width-p' | null,
  })

  const renderWasm = Features.useFeature('render-wasm/v1')
  const canAddStop = renderWasm
    ? stops.length < TypesFills.MAX_GRADIENT_STOPS
    : true

  const endpointOnPointerDown = (
    position: 'from-p' | 'to-p' | 'width-p',
    event: any
  ) => {
    DOM.stopPropagation(event)
    DOM.preventDefault(event)
    DOM.capturePointer(event)
    movingPoint.current = position
    if (position === 'from-p' || position === 'to-p') {
      Store.emit(
        DC.selectColorpickerGradientStop(position === 'from-p' ? 0 : 1)
      )
    }
  }

  const endpointOnPointerUp = (position: any, event: any) => {
    DOM.releasePointer(event)
    DOM.stopPropagation(event)
    DOM.preventDefault(event)
    movingPoint.current = null
    setHandlerState((s) => ({ ...s, hover: null }))
  }

  const endpointOnPointerEnter = (position: 'from-p' | 'to-p' | 'width-p') => {
    setHandlerState((s) => ({ ...s, hover: position }))
  }

  const endpointOnPointerLeave = () => {
    setHandlerState((s) => ({ ...s, hover: null }))
  }

  const pointsOnPointerEnter = () => {
    if (canAddStop) {
      setHandlerState((s) => ({ ...s, display: true }))
    }
  }

  const pointsOnPointerLeave = () => {
    setHandlerState((s) => ({ ...s, display: false }))
  }

  const pointsOnPointerDown = (e: any) => {
    DOM.preventDefault(e)
    DOM.stopPropagation(e)
    if (!canAddStop) return

    const rawPt = DOM.getClientPosition(e)
    const position =uwvv.pointToViewport(rawPt)
    const lv = GPT.unit(GPT.toVec(fromP, toP))
    const nv = GPT.normalLeft(lv)
    const offset = GSP.projectT(position, [fromP, toP], nv)
    const precisionOffset = Mth.precision(offset, 2)
    const newStop = CC.interpolateGradient(stops, precisionOffset)
    const newStops = [...stops, newStop].sort((a, b) => a.offset - b.offset)
    Store.emit(DC.updateColorpickerStops(newStops))
  }

  const pointsOnPointerMove = (e: any) => {
    const rawPt = DOM.getClientPosition(e)
    const position =uwvv.pointToViewport(rawPt)
    const lv = GPT.unit(GPT.toVec(fromP, toP))
    const nv = GPT.normalLeft(lv)
    const offset = GSP.projectT(position, [fromP, toP], nv)
    setHandlerState((s) => ({ ...s, offset }))
  }

  const handleMarkerPointerDown = (event: any) => {
    const index = parseInt(DOM.getData(DOM.getCurrentTarget(event), 'index'))
    const stop = stops[index]
    DOM.capturePointer(event)
    Store.emit(DC.selectColorpickerGradientStop(index))
    draggingRef.current = true
    startOffset.current = stop.offset
  }

  const handleMarkerPointerMove = (event: any) => {
    if (!draggingRef.current) return

    const index = parseInt(DOM.getData(DOM.getTarget(event), 'index'))
    const rawPt = DOM.getClientPosition(event)
    const position =uwvv.pointToViewport(rawPt)
    const lv = GPT.unit(GPT.toVec(fromP, toP))
    const nv = GPT.normalLeft(lv)
    let offset = GSP.projectT(position, [fromP, toP], nv)
    offset = Mth.precision(Mth.clamp(offset, 0, 1), 2)

    const newStops = [...stops]
    newStops[index] = { ...newStops[index], offset }
    Store.emit(DC.updateColorpickerStops(newStops))
  }

  const handleMarkerLostPointerCapture = (event: any) => {
    DOM.releasePointer(event)
    draggingRef.current = false
    startOffset.current = null
    const sortedStops = [...stops].sort((a, b) => a.offset - b.offset)
    Store.emit(DC.updateColorpickerStops(sortedStops))
  }

  React.useEffect(() => {
    const subs = RX.pipe(
      RX.filter(Mse.pointerEvent),
      RX.filter((e: any) => Mse.getPointerSource(e) === 'viewport'),
      RX.map(Mse.getPointerPosition),
      RX.subscribe((pt: any) => {
        switch (movingPoint.current) {
          case 'from-p':
            onChangeStart?.(pt)
            break
          case 'to-p':
            onChangeFinish?.(pt)
            break
          case 'width-p':
            if (onChangeWidth) {
              const widthV = GPT.unit(GPT.toVec(fromP, widthP))
              const distance = GPT.pointLineDistance(pt, fromP, toP)
              const newWidthP = GPT.add(
                fromP,
                GPT.multiply(widthV, GPT.point(distance))
              )
              onChangeWidth(newWidthP)
            }
            break
        }
      })
    )(Store.stream)

    return () => {
      RX.dispose(subs)
    }
  }, [fromP, toP, widthP])

  const lv = GPT.unit(GPT.toVec(fromP, toP))
  const nv = GPT.normalLeft(lv)
  const width = 40 / zoom
  const points = [
    GPT.add(fromP, GPT.scale(nv, -width / 2)),
    GPT.add(fromP, GPT.scale(nv, width / 2)),
    GPT.add(toP, GPT.scale(nv, width / 2)),
    GPT.add(toP, GPT.scale(nv, -width / 2)),
  ]
  const pointsStr = points.map((p) => `${(p as any).x},${(p as any).y}`).join(',')

  return (
    <g className='gradient-handlers' pointerEvents='none'>
      <defs>
        <Shadow id='gradient-drop-shadow' offset={2 / zoom} />
      </defs>

      <polygon
        points={pointsStr}
        data-allow-click-modal='colorpicker'
        fill='transparent'
        pointerEvents='all'
        onPointerEnter={pointsOnPointerEnter}
        onPointerLeave={pointsOnPointerLeave}
        onPointerDown={pointsOnPointerDown}
        onPointerMove={pointsOnPointerMove}
      />

      <g filter='url(#gradient-drop-shadow)'>
        {(() => {
          const pu = GPT.unit(GPT.normalRight(GPT.toVec(fromP, toP)))
          const sc = GRADIENT_LINE_STROKE_WIDTH / zoom / 2
          const polyPoints = [
            GPT.add(fromP, GPT.scale(pu, -sc)),
            GPT.add(fromP, GPT.scale(pu, sc)),
            GPT.add(toP, GPT.scale(pu, sc)),
            GPT.add(toP, GPT.scale(pu, -sc)),
          ]
          return (
            <polygon
              points={polyPoints.map((p) => `${(p as any).x},${(p as any).y}`).join(' ')}
              fill={GRADIENT_LINE_STROKE_COLOR}
            />
          )
        })()}
      </g>

      {widthP && (
        <g filter='url(#gradient-drop-shadow)'>
          {(() => {
            const pu = GPT.unit(GPT.normalRight(GPT.toVec(fromP, widthP)))
            const sc = GRADIENT_LINE_STROKE_WIDTH / zoom / 2
            const polyPoints = [
              GPT.add(fromP, GPT.scale(pu, -sc)),
              GPT.add(fromP, GPT.scale(pu, sc)),
              GPT.add(widthP, GPT.scale(pu, sc)),
              GPT.add(widthP, GPT.scale(pu, -sc)),
            ]
            return (
              <polygon
                points={polyPoints.map((p) => `${(p as any).x},${(p as any).y}`).join(' ')}
                fill={GRADIENT_LINE_STROKE_COLOR}
              />
            )
          })()}
        </g>
      )}

      {widthP && (
        <g filter='url(#gradient-drop-shadow)'>
          {handlerState.hover === 'width-p' && (
            <circle
              filter='url(#gradient-drop-shadow)'
              cx={(widthP as any).x}
              cy={(widthP as any).y}
              fill={GRADIENT_SQUARE_STROKE_COLOR_SELECTED}
              r={GRADIENT_WIDTH_HANDLER_RADIUS_SELECTED / zoom}
            />
          )}

          <circle
            data-allow-click-modal='colorpicker'
            cx={(widthP as any).x}
            cy={(widthP as any).y}
            r={GRADIENT_WIDTH_HANDLER_RADIUS / zoom}
            fill={GRADIENT_WIDTH_HANDLER_COLOR}
          />

          <circle
            data-allow-click-modal='colorpicker'
            pointerEvents='all'
            cx={(widthP as any).x}
            cy={(widthP as any).y}
            r={GRADIENT_WIDTH_HANDLER_RADIUS_HANDLER / zoom}
            fill='transparent'
            onPointerDown={(e: any) => endpointOnPointerDown('width-p', e)}
            onPointerEnter={() => endpointOnPointerEnter('width-p')}
            onPointerLeave={() => endpointOnPointerLeave()}
            onPointerUp={(e: any) => endpointOnPointerUp('width-p', e)}
          />
        </g>
      )}

      <g>
        {handlerState.hover === 'from-p' && (
          <circle
            filter='url(#gradient-drop-shadow)'
            cx={(fromP as any).x}
            cy={(fromP as any).y}
            fill={GRADIENT_SQUARE_STROKE_COLOR_SELECTED}
            r={GRADIENT_ENDPOINT_RADIUS_SELECTED / zoom}
          />
        )}

        <circle
          filter='url(#gradient-drop-shadow)'
          cx={(fromP as any).x}
          cy={(fromP as any).y}
          fill='var(--app-white)'
          r={GRADIENT_ENDPOINT_RADIUS / zoom}
        />

        <circle
          data-allow-click-modal='colorpicker'
          pointerEvents='all'
          cx={(fromP as any).x}
          cy={(fromP as any).y}
          fill='transparent'
          r={GRADIENT_ENDPOINT_RADIUS_HANDLER / zoom}
          onPointerDown={(e: any) => endpointOnPointerDown('from-p', e)}
          onPointerUp={(e: any) => endpointOnPointerUp('from-p', e)}
          onPointerEnter={() => endpointOnPointerEnter('from-p')}
          onPointerLeave={() => endpointOnPointerLeave()}
          onLostPointerCapture={(e: any) => endpointOnPointerUp('from-p', e)}
        />
      </g>

      <g>
        {handlerState.hover === 'to-p' && (
          <circle
            filter='url(#gradient-drop-shadow)'
            cx={(toP as any).x}
            cy={(toP as any).y}
            fill={GRADIENT_SQUARE_STROKE_COLOR_SELECTED}
            r={GRADIENT_ENDPOINT_RADIUS_SELECTED / zoom}
          />
        )}

        <circle
          filter='url(#gradient-drop-shadow)'
          cx={(toP as any).x}
          cy={(toP as any).y}
          fill='var(--app-white)'
          r={GRADIENT_ENDPOINT_RADIUS / zoom}
        />

        <circle
          data-allow-click-modal='colorpicker'
          pointerEvents='all'
          cx={(toP as any).x}
          cy={(toP as any).y}
          fill='transparent'
          r={GRADIENT_ENDPOINT_RADIUS_HANDLER / zoom}
          onPointerDown={(e: any) => endpointOnPointerDown('to-p', e)}
          onPointerUp={(e: any) => endpointOnPointerUp('to-p', e)}
          onPointerEnter={() => endpointOnPointerEnter('to-p')}
          onPointerLeave={() => endpointOnPointerLeave()}
          onLostPointerCapture={(e: any) => endpointOnPointerUp('from-p', e)}
        />
      </g>

      {stops.map((stop: any, index: number) => {
        const stopP = GPT.add(
          fromP,
          GPT.scale(GPT.toVec(fromP, toP), stop.offset)
        )
        return (
          <GradientColorHandler
            key={index}
            selected={editing === index}
            zoom={zoom}
            point={stopP}
            color={{ value: stop.color, opacity: stop.opacity }}
            angle={angle}
            index={index}
            onPointerDown={handleMarkerPointerDown}
            onPointerMove={handleMarkerPointerMove}
            onLostPointerCapture={handleMarkerLostPointerCapture}
            onClick={() => {}}
            onPointerUp={() => {}}
          />
        )
      })}

      {handlerState.display && (
        <circle
          filter='url(#gradient-drop-shadow)'
          cx={
            (GPT.add(
              fromP,
              GPT.scale(GPT.toVec(fromP, toP), handlerState.offset)
            ) as any).x
          }
          cy={
            (GPT.add(
              fromP,
              GPT.scale(GPT.toVec(fromP, toP), handlerState.offset)
            ) as any).y
          }
          r={4 / zoom}
          fill='var(--app-white)'
        />
      )}
    </g>
  )
}

interface GradientHandlersImplProps {
  zoom: number
  stops: any[]
  gradient: any
  editing: number | null
  shape: any
}

const GradientHandlersImpl: React.FC<GradientHandlersImplProps> = ({
  zoom,
  stops,
  gradient,
  editing,
  shape,
}) => {
  const transform = GSH.transformMatrix(shape)
  const transformInverse = GSH.inverseTransformMatrix(shape)

  const { x, y, width, height } = shape.selrect

  const fromP = GPT.transform(
    GPT.point(x + width * gradient['start-x'], y + height * gradient['start-y']),
    transform
  )
  const toP = GPT.transform(
    GPT.point(x + width * gradient['end-x'], y + height * gradient['end-y']),
    transform
  )

  const gradientVec = GPT.toVec(fromP, toP)
  const gradientLength = GPT.length(gradientVec)

  const widthV = GPT.multiply(
    GPT.normalRight(gradientVec),
    GPT.multiply(
      GPT.point(gradient.width * (gradientLength / (height / 2))),
      GPT.point(width / 2)
    )
  )

  const widthP = GPT.add(fromP, widthV)

  const change = (changes: any) => {
    Store.emit(DC.updateColorpickerGradient(changes))
  }

  const onChangeStart = React.useCallback(
    (point: any) => {
      const transformedPoint = GPT.transform(point, transformInverse)
      const startX = (transformedPoint.x - x) / width
      const startY = (transformedPoint.y - y) / height
      change({ 'start-x': startX, 'start-y': startY })
    },
    [transformInverse, x, y, width, height]
  )

  const onChangeFinish = React.useCallback(
    (point: any) => {
      const transformedPoint = GPT.transform(point, transformInverse)
      const endX = (transformedPoint.x - x) / width
      const endY = (transformedPoint.y - y) / height
      change({ 'end-x': endX, 'end-y': endY })
    },
    [transformInverse, x, y, width, height]
  )

  const onChangeWidth = React.useCallback(
    (point: any) => {
      const scaleFactorY = gradientLength / (height / 2)
      const normDist =
        GPT.distance(point, fromP) / ((width / 2) * scaleFactorY)
      if (D.isNum(normDist)) {
        change({ width: normDist })
      }
    },
    [gradientLength, width, height, fromP]
  )

  return (
    <GradientHandlerTransformed
      editing={editing}
      fromP={fromP}
      toP={toP}
      widthP={gradient.type === 'radial' ? widthP : undefined}
      stops={stops}
      zoom={zoom}
      onChangeStart={onChangeStart}
      onChangeFinish={onChangeFinish}
      onChangeWidth={onChangeWidth}
    />
  )
}

interface GradientHandlersProps {
  id: string
  zoom: number
}

export const GradientHandlers: React.FC<GradientHandlersProps> = MF.memo(
  ({ id, zoom }: GradientHandlersProps) => {
    const shapeRef = React.useMemo(
      () => Refs.objectById(id),
      [id]
    )
    const shape = MF.useDeref(shapeRef)
    const state = MF.useDeref(Refs.colorpicker)
    const gradient = state?.gradient
    const renderWasm = Features.useFeature('render-wasm/v1')
    let stops = state?.stops
    if (renderWasm) {
      stops = (stops || []).slice(0, TypesFills.MAX_GRADIENT_STOPS)
    }
    const editingStop = state?.['editing-stop']

    if (gradient == null || id !== gradient['shape-id']) {
      return null
    }

    return (
      <GradientHandlersImpl
        zoom={zoom}
        gradient={gradient}
        stops={stops}
        editing={editingStop}
        shape={shape}
      />
    )
  }
)
