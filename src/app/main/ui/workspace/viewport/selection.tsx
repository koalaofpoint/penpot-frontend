// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as DM from 'app/common/data/macros'
import * as CFH from 'app/common/files/helpers'
import * as GMT from 'app/common/geom/matrix'
import * as GPT from 'app/common/geom/point'
import * as GSH from 'app/common/geom/shapes'
import * as CTK from 'app/common/types/component'
import * as CTN from 'app/common/types/container'
import * as CTS from 'app/common/types/shape'
import * as DSH from 'app/main/data/helpers'
import * as DW from 'app/main/data/workspace'
import * as DWSH from 'app/main/data/workspace/shapes'
import * as Refs from 'app/main/refs'
import { Store } from 'app/main/store'
import * as Ctx from 'app/main/ui/context'
import * as Cur from 'app/main/ui/css-cursors'
import * as Array from 'app/util/array'
import * as DBG from 'app/util/debug'
import * as DOM from 'app/util/dom'
import * as Obj from 'app/util/object'
import * as MF from 'rumext.v2'
import React from 'react'

const ROTATION_HANDLER_SIZE = 20
const RESIZE_POINT_RADIUS = 4
const RESIZE_POINT_CIRCLE_RADIUS = 10
const RESIZE_POINT_RECT_SIZE = 8
const RESIZE_SIDE_HEIGHT = 8
const SELECTION_RECT_COLOR_NORMAL = 'var(--color-accent-tertiary)'
const SELECTION_RECT_COLOR_COMPONENT = 'var(--assets-component-hightlight)'
const SELECTION_RECT_WIDTH = 1
const MIN_SELRECT_SIDE = 10
const SMALL_SELRECT_SIDE = 30
const MIN_SELRECT_WIDTH = 10
const MIN_SELRECT_HEIGHT = 10

interface SelectionRectProps {
  transform: any
  rect: any
  zoom: number
  color: string
  onMoveSelected: (event: any) => void
  onContextMenu: (event: any) => void
}

export const SelectionRect: React.FC<SelectionRectProps> = ({
  transform,
  rect,
  zoom,
  color,
  onMoveSelected,
  onContextMenu,
}) => {
  let x = DM.getProp(rect, 'x')
  let y = DM.getProp(rect, 'y')
  let width = DM.getProp(rect, 'width')
  let height = DM.getProp(rect, 'height')

  // This is a calculation to create a "minimum" interactable rect
  // Is necessary so that small shapes in x/y (like lines) can be moved better
  if (width < MIN_SELRECT_WIDTH / zoom) {
    const newWidth = MIN_SELRECT_WIDTH / zoom
    x = x - (newWidth - width) / 2
    width = newWidth
  }

  if (height < MIN_SELRECT_HEIGHT / zoom) {
    const newHeight = MIN_SELRECT_HEIGHT / zoom
    y = y - (newHeight - height) / 2
    height = newHeight
  }

  return (
    <rect
      className='main viewport-selrect'
      x={x}
      y={y}
      width={Math.max(width, 10 / zoom)}
      height={Math.max(height, 10 / zoom)}
      transform={String(transform)}
      onPointerDown={onMoveSelected}
      onContextMenu={onContextMenu}
      style={{
        stroke: color,
        strokeWidth: SELECTION_RECT_WIDTH / zoom,
        fill: 'none',
      }}
    />
  )
}

interface Handler {
  type: 'rotation' | 'resize-side' | 'resize-point'
  position: string
  props: any
}

function calculateHandlers(
  selection: any,
  shape: any,
  zoom: number
): Handler[] {
  const x = DM.getProp(selection, 'x')
  const y = DM.getProp(selection, 'y')
  const width = DM.getProp(selection, 'width')
  const height = DM.getProp(selection, 'height')

  const thresholdSmall = 25 / zoom
  const thresholdTiny = 10 / zoom

  const smallWidth = width <= thresholdSmall
  const tinyWidth = width <= thresholdTiny

  const smallHeight = height <= thresholdSmall
  const tinyHeight = height <= thresholdTiny

  const path = CFH.pathShape(shape)
  const verticalLine = path && tinyWidth
  const horizontalLine = path && tinyHeight

  const align = smallWidth || smallHeight ? 'outside' : 'inside'

  const result: Handler[] = [
    {
      type: 'rotation',
      position: 'top-left',
      props: { cx: x, cy: y },
    },
    {
      type: 'rotation',
      position: 'top-right',
      props: { cx: x + width, cy: y },
    },
    {
      type: 'rotation',
      position: 'bottom-right',
      props: { cx: x + width, cy: y + height },
    },
    {
      type: 'rotation',
      position: 'bottom-left',
      props: { cx: x, cy: y + height },
    },
  ]

  if (!horizontalLine) {
    result.push(
      {
        type: 'resize-side',
        position: 'top',
        props: {
          x: smallWidth ? x + (width - thresholdSmall) / 2 : x,
          y: y,
          length: smallWidth ? thresholdSmall : width,
          angle: 0,
          align,
          showHandler: tinyWidth,
        },
      },
      {
        type: 'resize-side',
        position: 'bottom',
        props: {
          x: smallWidth ? x + (width + thresholdSmall) / 2 : x + width,
          y: y + height,
          length: smallWidth ? thresholdSmall : width,
          angle: 180,
          align,
          showHandler: tinyWidth,
        },
      }
    )
  }

  if (!verticalLine) {
    result.push(
      {
        type: 'resize-side',
        position: 'right',
        props: {
          x: x + width,
          y: smallHeight ? y + (height - thresholdSmall) / 2 : y,
          length: smallHeight ? thresholdSmall : height,
          angle: 90,
          align,
          showHandler: tinyHeight,
        },
      },
      {
        type: 'resize-side',
        position: 'left',
        props: {
          x: x,
          y: smallHeight ? y + (height + thresholdSmall) / 2 : y + height,
          length: smallHeight ? thresholdSmall : height,
          angle: 270,
          align,
          showHandler: tinyHeight,
        },
      }
    )
  }

  if (!tinyWidth && !tinyHeight) {
    result.push(
      {
        type: 'resize-point',
        position: 'top-left',
        props: { cx: x, cy: y, align },
      },
      {
        type: 'resize-point',
        position: 'top-right',
        props: { cx: x + width, cy: y, align },
      },
      {
        type: 'resize-point',
        position: 'bottom-right',
        props: { cx: x + width, cy: y + height, align },
      },
      {
        type: 'resize-point',
        position: 'bottom-left',
        props: { cx: x, cy: y + height, align },
      }
    )
  }

  return result
}

interface RotationHandlerProps {
  cx: number
  cy: number
  transform: any
  position: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left'
  rotation: number
  zoom: number
  onRotate: (event: any) => void
}

export const RotationHandler: React.FC<RotationHandlerProps> = ({
  cx,
  cy,
  transform,
  position,
  rotation,
  zoom,
  onRotate,
}) => {
  const size = ROTATION_HANDLER_SIZE / zoom
  const deltaX =
    position === 'top-left' || position === 'bottom-left' ? size : 0
  const deltaY =
    position === 'top-left' || position === 'top-right' ? size : 0

  const x = cx - deltaX
  const y = cy - deltaY
  const angle =
    position === 'top-left'
      ? 0
      : position === 'top-right'
      ? 90
      : position === 'bottom-right'
      ? 180
      : 270

  return (
    <rect
      x={x}
      y={y}
      className={Cur.getDynamic('rotate', rotation + angle)}
      width={size}
      height={size}
      fill={DBG.enabled('handlers') ? 'blue' : 'none'}
      strokeWidth={0}
      transform={String(transform)}
      onPointerDown={onRotate}
    />
  )
}

interface ResizePointHandlerProps {
  cx: number
  cy: number
  zoom: number
  position: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left'
  onResize: (event: any) => void
  transform: any
  rotation: number
  color: string
  align: 'inside' | 'outside'
  scaleText: boolean
}

export const ResizePointHandler: React.FC<ResizePointHandlerProps> = ({
  cx,
  cy,
  zoom,
  position,
  onResize,
  transform,
  rotation,
  color,
  align,
  scaleText,
}) => {
  const cursor =
    position === 'top-left' || position === 'bottom-right'
      ? scaleText
        ? Cur.getDynamic('scale-nesw', rotation)
        : Cur.getDynamic('resize-nesw', rotation)
      : scaleText
      ? Cur.getDynamic('scale-nwse', rotation)
      : Cur.getDynamic('resize-nwse', rotation)

  const pt = GPT.transform(GPT.point(cx, cy), transform)
  const cxPrime = DM.getProp(pt, 'x')
  const cyPrime = DM.getProp(pt, 'y')

  if (align === 'outside') {
    const resizePointCircleRadius = RESIZE_POINT_CIRCLE_RADIUS / zoom
    const offsetX =
      position === 'top-right' || position === 'bottom-right' ? 0 : -resizePointCircleRadius
    const offsetY =
      position === 'bottom-left' || position === 'bottom-right' ? 0 : -resizePointCircleRadius
    const newCx = cx + offsetX
    const newCy = cy + offsetY
    const newPt = GPT.transform(GPT.point(newCx, newCy), transform)
    const newCxPrime = DM.getProp(newPt, 'x')
    const newCyPrime = DM.getProp(newPt, 'y')

    return (
      <g className='resize-handler'>
        <circle
          r={RESIZE_POINT_RADIUS / zoom}
          style={{
            fillOpacity: 1,
            strokeWidth: 1,
            vectorEffect: 'non-scaling-stroke',
          }}
          fill='var(--app-white)'
          stroke={color}
          cx={cxPrime}
          cy={cyPrime}
        />
        <rect
          x={newCxPrime}
          y={newCyPrime}
          data-position={position}
          className={cursor}
          style={{
            fill: DBG.enabled('handlers') ? 'red' : 'none',
            strokeWidth: 0,
          }}
          width={resizePointCircleRadius}
          height={resizePointCircleRadius}
          transform={
            rotation != null
              ? `rotate(${rotation}, ${newCxPrime}, ${newCyPrime})`
              : undefined
          }
          onPointerDown={onResize}
        />
      </g>
    )
  }

  return (
    <g className='resize-handler'>
      <circle
        r={RESIZE_POINT_RADIUS / zoom}
        style={{
          fillOpacity: 1,
          strokeWidth: 1,
          vectorEffect: 'non-scaling-stroke',
        }}
        fill='var(--app-white)'
        stroke={color}
        cx={cxPrime}
        cy={cyPrime}
      />
      <circle
        onPointerDown={onResize}
        r={RESIZE_POINT_CIRCLE_RADIUS / zoom}
        data-position={position}
        cx={cxPrime}
        cy={cyPrime}
        data-x={cxPrime}
        data-y={cyPrime}
        className={cursor}
        style={{
          fill: DBG.enabled('handlers') ? 'red' : 'none',
          strokeWidth: 0,
        }}
      />
    </g>
  )
}

interface ResizeSideHandlerProps {
  x: number
  y: number
  length: number
  align: 'inside' | 'outside'
  angle: number
  zoom: number
  position: 'top' | 'bottom' | 'right' | 'left'
  rotation: number
  transform: any
  onResize: (event: any) => void
  color: string
  showHandler: boolean
  scaleText: boolean
  shapeId: string
  shapeType: string
}

export const ResizeSideHandler: React.FC<ResizeSideHandlerProps> = ({
  x,
  y,
  length,
  align,
  angle,
  zoom,
  position,
  rotation,
  transform,
  onResize,
  color,
  showHandler,
  scaleText,
  shapeId,
  shapeType,
}) => {
  const height = RESIZE_SIDE_HEIGHT / zoom
  const offsetY = align === 'outside' ? -height : -height / 2
  const targetY = y + offsetY
  const transformStr = String(
    GMT.multiply(transform, GMT.rotateMatrix(angle, GPT.point(x, y)))
  )

  const cursor =
    position === 'left' || position === 'right'
      ? scaleText
        ? Cur.getDynamic('scale-ew', rotation)
        : Cur.getDynamic('resize-ew', rotation)
      : scaleText
      ? Cur.getDynamic('scale-ns', rotation)
      : Cur.getDynamic('resize-ns', rotation)

  const onDoubleClick = React.useCallback(
    (_event: any) => {
      if (shapeType === 'text') {
        if (position === 'right') {
          Store.emit(
            DWSH.updateShapes([shapeId], (shape: any) => ({
              ...shape,
              growType: 'auto-width',
            }))
          )
        } else if (position === 'bottom') {
          Store.emit(
            DWSH.updateShapes([shapeId], (shape: any) => ({
              ...shape,
              growType: 'auto-height',
            }))
          )
        }
      }
    },
    [shapeId, position, shapeType]
  )

  return (
    <g className='resize-handler'>
      {showHandler && (
        <circle
          r={RESIZE_POINT_RADIUS / zoom}
          style={{
            fillOpacity: 1,
            stroke: color,
            strokeWidth: 1,
            fill: 'var(--app-white)',
            vectorEffect: 'non-scaling-stroke',
          }}
          data-position={position}
          cx={x + length / 2}
          cy={y}
          transform={transformStr}
        />
      )}
      <rect
        x={x}
        y={targetY}
        width={length}
        height={height}
        className={cursor}
        data-position={position}
        transform={transformStr}
        onPointerDown={onResize}
        onDoubleClick={onDoubleClick}
        style={{
          fill: DBG.enabled('handlers') ? 'yellow' : 'none',
          strokeWidth: 0,
        }}
      />
    </g>
  )
}

interface ControlsSelectionProps {
  shape: any
  zoom: number
  color: string
  onMoveSelected: (event: any) => void
  onContextMenu: (event: any) => void
  disabled?: boolean
}

export const ControlsSelection: React.FC<ControlsSelectionProps> = ({
  shape,
  zoom,
  color,
  onMoveSelected,
  onContextMenu,
  disabled,
}) => {
  const selrectTransform = MF.useDeref(Refs.workspaceSelrect)
  const transformType = MF.useDeref(Refs.currentTransform)
  const [selrect, transform] = DSH.getSelrect(selrectTransform, shape)

  if (selrect == null || transformType === 'move' || transformType === 'rotate') {
    return null
  }

  return (
    <g
      className='controls'
      pointerEvents={disabled ? 'none' : 'visible'}
    >
      <SelectionRect
        rect={selrect}
        transform={transform}
        zoom={zoom}
        color={color}
        onMoveSelected={onMoveSelected}
        onContextMenu={onContextMenu}
      />
    </g>
  )
}

interface ControlsHandlersProps {
  shape: any
  zoom: number
  color: string
  onResize: (event: any) => void
  onRotate: (event: any) => void
  disabled?: boolean
}

export const ControlsHandlers: React.FC<ControlsHandlersProps> = ({
  shape,
  zoom,
  color,
  onResize,
  onRotate,
  disabled,
}) => {
  const selrectTransform = MF.useDeref(Refs.workspaceSelrect)
  const transformType = MF.useDeref(Refs.currentTransform)

  const readOnly = MF.useContext(Ctx.workspaceReadOnlyContext)

  const layout = MF.useDeref(Refs.workspaceLayout)
  const scaleText = layout?.has('scale-text')

  const [selrect, transform] = DSH.getSelrect(selrectTransform, shape)

  const rotation = GPT.transform(GPT.point(1, 0), shape.transform ?? GMT.create())
  const rotationAngle = rotation?.angle ?? 0

  const flipX = shape?.flipX
  const flipY = shape?.flipY
  const halfFlip =
    (flipX && !flipY) || (flipY && !flipX)

  if (
    readOnly ||
    shape?.blocked ||
    transformType === 'move' ||
    transformType === 'rotate'
  ) {
    return null
  }

  const handlers = calculateHandlers(selrect, shape, zoom)

  return (
    <g
      className='controls'
      pointerEvents={disabled ? 'none' : 'visible'}
    >
      {handlers.map((handler) => {
        const position = handler.position
        let handlerRotation = rotationAngle

        if (
          halfFlip &&
          (position === 'top-left' || position === 'bottom-right')
        ) {
          handlerRotation = rotationAngle - 90
        }

        if (
          halfFlip &&
          (position === 'top-right' || position === 'bottom-left')
        ) {
          handlerRotation = rotationAngle + 90
        }

        if (handler.type === 'rotation') {
          return (
            <RotationHandler
              key={`rotation-${position}`}
              cx={handler.props.cx}
              cy={handler.props.cy}
              transform={transform}
              position={position as any}
              rotation={handlerRotation}
              zoom={zoom}
              onRotate={onRotate}
            />
          )
        } else if (handler.type === 'resize-point') {
          return (
            <ResizePointHandler
              key={`resize-point-${position}`}
              cx={handler.props.cx}
              cy={handler.props.cy}
              zoom={zoom}
              position={position as any}
              onResize={onResize}
              transform={transform}
              rotation={handlerRotation}
              color={color}
              align={handler.props.align}
              scaleText={scaleText}
            />
          )
        } else if (handler.type === 'resize-side') {
          return (
            <ResizeSideHandler
              key={`resize-side-${position}`}
              x={handler.props.x}
              y={handler.props.y}
              length={handler.props.length}
              align={handler.props.align}
              angle={handler.props.angle}
              zoom={zoom}
              position={position as any}
              rotation={handlerRotation}
              transform={transform}
              onResize={onResize}
              color={color}
              showHandler={handler.props.showHandler}
              scaleText={scaleText}
              shapeId={DM.getProp(shape, 'id')}
              shapeType={DM.getProp(shape, 'type')}
            />
          )
        }
        return null
      })}
    </g>
  )
}

interface TextEditionSelectionProps {
  shape: any
  color: string
  zoom: number
}

export const TextEditionSelection: React.FC<TextEditionSelectionProps> = ({
  shape,
  color,
  zoom,
}) => {
  const x = DM.getProp(shape, 'x')
  const y = DM.getProp(shape, 'y')
  const width = DM.getProp(shape, 'width')
  const height = DM.getProp(shape, 'height')

  return (
    <g className='controls'>
      <rect
        className='main'
        x={x}
        y={y}
        transform={GSH.transformStr(shape)}
        width={width}
        height={height}
        pointerEvents='visible'
        style={{
          stroke: color,
          strokeWidth: 0.5 / zoom,
          strokeOpacity: 1,
          fill: 'none',
        }}
      />
    </g>
  )
}

interface MultipleHandlersProps {
  shapes: any[]
  selected: Set<any>
  zoom: number
  color: string
  disabled?: boolean
}

export const MultipleHandlers: React.FC<MultipleHandlersProps> = ({
  shapes,
  selected,
  zoom,
  color,
  disabled,
}) => {
  const shape = React.useMemo(() => {
    const rect = GSH.shapesIntoRect(shapes)
    return CTS.setupShape({ ...rect, type: 'multiple' })
  }, [shapes])

  const onResize = React.useCallback(
    (event: any) => {
      if (DOM.leftMouse(event)) {
        DOM.stopPropagation(event)
        const target = DOM.getCurrentTarget(event)
        const position = DOM.getData(target, 'position')
        Store.emit(DW.startResize(position, selected, shape))
      }
    },
    [selected, shape]
  )

  const onRotate = React.useCallback(
    (event: any) => {
      if (DOM.leftMouse(event)) {
        DOM.stopPropagation(event)
        Store.emit(DW.startRotate(shapes))
      }
    },
    [shapes]
  )

  return (
    <ControlsHandlers
      shape={shape}
      zoom={zoom}
      color={color}
      disabled={disabled}
      onResize={onResize}
      onRotate={onRotate}
    />
  )
}

interface MultipleSelectionProps {
  shapes: any[]
  zoom: number
  color: string
  disabled?: boolean
  onMoveSelected: (event: any) => void
  onContextMenu: (event: any) => void
}

export const MultipleSelection: React.FC<MultipleSelectionProps> = ({
  shapes,
  zoom,
  color,
  disabled,
  onMoveSelected,
  onContextMenu,
}) => {
  const shape = React.useMemo(() => {
    const rect = GSH.shapesIntoRect(shapes)
    return CTS.setupShape({ ...rect, type: 'multiple' })
  }, [shapes])

  return (
    <ControlsSelection
      shape={shape}
      zoom={zoom}
      color={color}
      disabled={disabled}
      onMoveSelected={onMoveSelected}
      onContextMenu={onContextMenu}
    />
  )
}

interface SingleHandlersProps {
  shape: any
  zoom: number
  color: string
  disabled?: boolean
}

export const SingleHandlers: React.FC<SingleHandlersProps> = ({
  shape,
  zoom,
  color,
  disabled,
}) => {
  const shapeId = DM.getProp(shape, 'id')
  const growType = DM.getProp(shape, 'grow-type')
  const shapeType = DM.getProp(shape, 'type')

  const onResize = React.useCallback(
    (event: any) => {
      if (DOM.leftMouse(event)) {
        DOM.stopPropagation(event)
        const target = DOM.getCurrentTarget(event)
        const position = DOM.getData(target, 'position')

        // If text and in auto-width and the resize is horizontal, switch to auto-height and mark direction
        if (
          shapeType === 'text' &&
          growType === 'auto-width' &&
          (position === 'right' || position === 'left')
        ) {
          Store.emit(
            DWSH.updateShapes([shapeId], (s: any) => ({
              ...s,
              growType: 'auto-height',
              lastResizeDirection: 'horizontal',
            }))
          )
        }
        // If text and in auto-height and the resize is horizontal, mark direction but do not change grow-type
        else if (
          shapeType === 'text' &&
          growType === 'auto-height' &&
          (position === 'right' || position === 'left')
        ) {
          Store.emit(
            DWSH.updateShapes([shapeId], (s: any) => ({
              ...s,
              lastResizeDirection: 'horizontal',
            }))
          )
        }
        // If text and in auto-height and the resize is vertical, mark direction
        else if (
          shapeType === 'text' &&
          growType === 'auto-height' &&
          (position === 'top' || position === 'bottom')
        ) {
          Store.emit(
            DWSH.updateShapes([shapeId], (s: any) => ({
              ...s,
              lastResizeDirection: 'vertical',
            }))
          )
        }

        Store.emit(DW.startResize(position, new Set([shapeId]), shape))
      }
    },
    [shapeId, shape, growType, shapeType]
  )

  const onRotate = React.useCallback(
    (event: any) => {
      if (DOM.leftMouse(event)) {
        DOM.stopPropagation(event)
        Store.emit(DW.startRotate([shape]))
      }
    },
    [shape]
  )

  return (
    <ControlsHandlers
      shape={shape}
      zoom={zoom}
      color={color}
      disabled={disabled}
      onRotate={onRotate}
      onResize={onResize}
    />
  )
}

interface SingleSelectionProps {
  shape: any
  zoom: number
  color: string
  disabled?: boolean
  onMoveSelected: (event: any) => void
  onContextMenu: (event: any) => void
}

export const SingleSelection: React.FC<SingleSelectionProps> = ({
  shape,
  zoom,
  color,
  disabled,
  onMoveSelected,
  onContextMenu,
}) => {
  return (
    <ControlsSelection
      shape={shape}
      zoom={zoom}
      color={color}
      disabled={disabled}
      onMoveSelected={onMoveSelected}
      onContextMenu={onContextMenu}
    />
  )
}

interface AreaProps {
  shapes: any[]
  edition: any
  zoom: number
  disabled?: boolean
  onMoveSelected: (event: any) => void
  onContextMenu: (event: any) => void
}

export const Area: React.FC<AreaProps> = ({
  shapes,
  edition,
  zoom,
  disabled,
  onMoveSelected,
  onContextMenu,
}) => {
  const total = shapes.length
  const shape = shapes[0]
  const shapeId = DM.getProp(shape, 'id')

  const objects = MF.useDeref(Refs.workspacePageObjects)

  const color =
    total === 1 &&
    (CTN.inAnyComponent(objects, shape) || CTK.isVariantContainer(shape))
      ? SELECTION_RECT_COLOR_COMPONENT
      : SELECTION_RECT_COLOR_NORMAL

  if (total > 1) {
    return (
      <MultipleSelection
        shapes={shapes}
        zoom={zoom}
        color={color}
        disabled={disabled}
        onMoveSelected={onMoveSelected}
        onContextMenu={onContextMenu}
      />
    )
  }

  if (CFH.textShape(shape) && edition === shapeId) {
    return (
      <TextEditionSelection
        shape={shape}
        zoom={zoom}
        color={color}
      />
    )
  }

  if (edition === shapeId) {
    return null
  }

  return (
    <SingleSelection
      shape={shape}
      zoom={zoom}
      color={color}
      disabled={disabled}
      onMoveSelected={onMoveSelected}
      onContextMenu={onContextMenu}
    />
  )
}

interface HandlersProps {
  shapes: any[]
  selected: Set<any>
  zoom: number
  disabled?: boolean
}

export const Handlers: React.FC<HandlersProps> = ({
  shapes,
  selected,
  zoom,
  disabled,
}) => {
  const total = shapes.length
  const shape = shapes[0]

  const objects = MF.useDeref(Refs.workspacePageObjects)

  const color =
    total === 1 &&
    (CTN.inAnyComponent(objects, shape) || CTK.isVariantContainer(shape))
      ? SELECTION_RECT_COLOR_COMPONENT
      : SELECTION_RECT_COLOR_NORMAL

  if (total > 1) {
    return (
      <MultipleHandlers
        shapes={shapes}
        selected={selected}
        zoom={zoom}
        color={color}
        disabled={disabled}
      />
    )
  }

  return (
    <SingleHandlers
      shape={shape}
      zoom={zoom}
      color={color}
      disabled={disabled}
    />
  )
}
