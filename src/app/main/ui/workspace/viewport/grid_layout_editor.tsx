// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as D from 'app/common/data'
import * as DM from 'app/common/data/macros'
import * as CFH from 'app/common/files/helpers'
import * as GL from 'app/common/geom/line'
import * as GMT from 'app/common/geom/matrix'
import * as GPT from 'app/common/geom/point'
import * as GSH from 'app/common/geom/shapes'
import * as GSG from 'app/common/geom/shapes/grid-layout'
import * as GPO from 'app/common/geom/shapes/points'
import * as Mth from 'app/common/math'
import * as CTM from 'app/common/types/modifiers'
import * as CTL from 'app/common/types/shape/layout'
import * as DW from 'app/main/data/workspace'
import * as DWGE from 'app/main/data/workspace/grid-layout/editor'
import * as DWM from 'app/main/data/workspace/modifiers'
import * as DWSL from 'app/main/data/workspace/shape-layout'
import * as DWT from 'app/main/data/workspace/transforms'
import * as Features from 'app/main/features'
import * as Refs from 'app/main/refs'
import { Store } from 'app/main/store'
import * as Cur from 'app/main/ui/css-cursors'
import * as Fmt from 'app/main/ui/formats'
import * as DeprecatedIcon from 'app/main/ui/icons'
import * asuwvv from 'app/main/ui/workspace/viewport/viewport-ref'
import * as DBG from 'app/util/debug'
import * as DOM from 'app/util/dom'
import { tr } from 'app/util/i18n'
import * as Kbd from 'app/util/keyboard'
import * as Obj from 'app/util/object'
import * as STR from 'cuerdas.core'
import * as MF from 'rumext.v2'
import React from 'react'

const SMALL_SIZE_LIMIT = 60
const MEDIUM_SIZE_LIMIT = 110

function applyToPoint(result: any[], nextFn: (x: any) => any): any[] {
  return [...result, nextFn(result[result.length - 1])]
}

function formatSize(size: { type: string; value: number }): string {
  switch (size.type) {
    case 'fixed':
      return `${Fmt.formatNumber(size.value)}PX`
    case 'percent':
      return `${Fmt.formatNumber(size.value)}%`
    case 'flex':
      return `${Fmt.formatNumber(size.value)}FR`
    case 'auto':
      return 'AUTO'
    default:
      return ''
  }
}

interface GridEditionActionsProps {
  shape: any
}

export const GridEditionActions: React.FC<GridEditionActionsProps> = ({
  shape,
}) => {
  const handleLocate = () => {
    Store.emit(DWGE.locateBoard(shape.id))
  }

  const handleDone = () => {
    Store.emit(DW.clearEditionMode())
  }

  return (
    <div className='grid-actions'>
      <div className='grid-actions-container'>
        <div className='grid-actions-title'>
          {tr('workspace.layout-grid.editor.title')}{' '}
          <span className='board-name'>{shape.name}</span>
        </div>
        <button className='locate-btn' onClick={handleLocate}>
          {tr('workspace.layout-grid.editor.top-bar.locate')}
        </button>
        <button className='done-btn' onClick={handleDone}>
          {tr('workspace.layout-grid.editor.top-bar.done')}
        </button>
      </div>
    </div>
  )
}

interface GridEditorFrameProps {
  bounds: any
  width: number
  height: number
  zoom: number
}

export const GridEditorFrame: React.FC<GridEditorFrameProps> = ({
  bounds,
  width,
  height,
  zoom,
}) => {
  const hv = (v: number) => GPO.startHv(bounds, v)
  const vv = (v: number) => GPO.startVv(bounds, v)
  const origin = GPO.origin(bounds)

  const framePoints = [
    origin,
    GPT.add(origin, hv(width + 70 / zoom)),
    GPT.subtract(GPT.add(origin, hv(width + 70 / zoom)), vv(40 / zoom)),
    GPT.subtract(
      GPT.subtract(GPT.add(origin, hv(width + 70 / zoom)), vv(40 / zoom)),
      hv(width + 110 / zoom)
    ),
    GPT.add(
      GPT.subtract(
        GPT.subtract(GPT.add(origin, hv(width + 70 / zoom)), vv(40 / zoom)),
        hv(width + 110 / zoom)
      ),
      vv(height + 110 / zoom)
    ),
    GPT.add(
      GPT.subtract(
        GPT.subtract(GPT.add(origin, hv(width + 70 / zoom)), vv(40 / zoom)),
        hv(width + 110 / zoom)
      ),
      GPT.add(vv(height + 110 / zoom), hv(40 / zoom))
    ),
  ]

  return (
    <polygon
      className='grid-frame'
      points={framePoints
        .map((p) => `${(p as any).x},${(p as any).y}`)
        .join(' ')}
    />
  )
}

interface PlusBtnProps {
  startP: any
  zoom: number
  type: 'column' | 'row'
  onClick?: () => void
}

export const PlusBtn: React.FC<PlusBtnProps> = ({
  startP,
  zoom,
  type,
  onClick,
}) => {
  let rectX: number
  let rectY: number
  let iconX: number
  let iconY: number

  if (type === 'column') {
    rectX = (startP as any).x
    rectY = (startP as any).y - 40 / zoom
    iconX = (startP as any).x + 9 / zoom
    iconY = (startP as any).y - 31 / zoom
  } else {
    rectX = (startP as any).x - 40 / zoom
    rectY = (startP as any).y
    iconX = (startP as any).x - 31 / zoom
    iconY = (startP as any).y + 9 / zoom
  }

  const handleClick = () => {
    onClick?.()
  }

  return (
    <g className='grid-plus-button' onClick={handleClick}>
      <rect
        className='grid-plus-shape'
        x={rectX + 6 / zoom}
        y={rectY + 6 / zoom}
        width={28 / zoom}
        height={28 / zoom}
        rx={4 / zoom}
        ry={4 / zoom}
      />
      <use
        className='grid-plus-icon'
        x={iconX}
        y={iconY}
        width={22 / zoom}
        height={22 / zoom}
        href='#icon-add'
      />
    </g>
  )
}

interface UseDragOptions {
  onDragStart?: (event: any, position: any) => void
  onDragEnd?: (event: any, position: any, delta: any) => void
  onDragDelta?: (event: any, delta: any) => void
  onDragPosition?: (event: any, position: any) => void
}

function useDrag({
  onDragStart,
  onDragEnd,
  onDragDelta,
  onDragPosition,
}: UseDragOptions) {
  const draggingRef = MF.useRef(false)
  const startPosRef = MF.useRef(null)
  const currentPosRef = MF.useRef(null)

  const handlePointerDown = React.useCallback(
    (event: any) => {
      const rawPt = DOM.getClientPosition(event)
      const position =uwvv.pointToViewport(rawPt)
      DOM.capturePointer(event)
      draggingRef.current = true
      startPosRef.current = rawPt
      currentPosRef.current = rawPt
      onDragStart?.(event, position)
    },
    [onDragStart]
  )

  const handleLostPointerCapture = React.useCallback(
    (event: any) => {
      const rawPt = currentPosRef.current
      const position =uwvv.pointToViewport(rawPt)
      const start = startPosRef.current
      const delta = GPT.toVec(start, DOM.getClientPosition(event))
      DOM.releasePointer(event)
      draggingRef.current = false
      startPosRef.current = null
      onDragEnd?.(event, position, delta)
    },
    [onDragEnd]
  )

  const handlePointerMove = React.useCallback(
    (event: any) => {
      if (!draggingRef.current) return
      const start = startPosRef.current
      const pos = DOM.getClientPosition(event)
      const pt =uwvv.pointToViewport(pos)
      currentPosRef.current = pos
      onDragDelta?.(event, GPT.toVec(start, pos))
      onDragPosition?.(event, pt)
    },
    [onDragDelta, onDragPosition]
  )

  return {
    handlePointerDown,
    handleLostPointerCapture,
    handlePointerMove,
  }
}

interface ResizeCellHandlerProps {
  shape: any
  x: number
  y: number
  width: number
  height: number
  handler: 'top' | 'left' | 'bottom' | 'right'
  cell: any
  layoutData: any
  onSetModifiers?: (modifiers: any) => void
  onClearModifiers?: (modifiers: any) => void
}

export const ResizeCellHandler: React.FC<ResizeCellHandlerProps> = ({
  shape,
  x,
  y,
  width,
  height,
  handler,
  cell,
  layoutData,
  onSetModifiers,
  onClearModifiers,
}) => {
  const objects = MF.useDeref(Refs.workspacePageObjects)
  const cellId = cell.id
  const { row, column, rowSpan, columnSpan } = shape['layout-grid-cells'][cellId]

  const calculateDragModifiers = React.useCallback(
    (position: any) => {
      const [dragRow, dragColumn] = GSG.getPositionGridCoord(
        layoutData,
        position
      )

      let newRow = row
      let newColumn = column
      let newRowSpan = rowSpan
      let newColumnSpan = columnSpan

      switch (handler) {
        case 'top':
          newRow = Math.min(row + rowSpan - 1, dragRow)
          newRowSpan = rowSpan - (newRow - row)
          break
        case 'left':
          newColumn = Math.min(column + columnSpan - 1, dragColumn)
          newColumnSpan = columnSpan - (newColumn - column)
          break
        case 'bottom':
          newRowSpan = Math.max(1, 1 + (dragRow - row))
          break
        case 'right':
          newColumnSpan = Math.max(1, 1 + (dragColumn - column))
          break
      }

      const newShape = CTL.assignCells(
        CTL.resizeCellArea(
          shape,
          row,
          column,
          newRow,
          newColumn,
          newRowSpan,
          newColumnSpan
        ),
        objects
      )

      return CTM.empty()
        .set('layout-grid-rows', shape['layout-grid-rows'])
        .set('layout-grid-columns', shape['layout-grid-columns'])
        .set('layout-grid-cells', shape['layout-grid-cells'])
    },
    [shape, row, column, rowSpan, columnSpan, handler, layoutData, objects]
  )

  const handleDragPosition = React.useCallback(
    (_position: any) => {
      const modifiers = calculateDragModifiers(_position)
      const modifTree = DWM.createModifTree([shape.id], modifiers)
      if (Features.activeFeature(Store.getState(), 'render-wasm/v1')) {
        onSetModifiers?.(modifiers)
        Store.emit(DWM.setWasmModifiers(modifTree))
      } else {
        Store.emit(DWM.setModifiers(modifTree))
      }
    },
    [calculateDragModifiers, onSetModifiers, shape.id]
  )

  const handleDragEnd = React.useCallback(
    (_position: any) => {
      if (Features.activeFeature(Store.getState(), 'render-wasm/v1')) {
        const modifiers = calculateDragModifiers(_position)
        const modifTree = DWM.createModifTree([shape.id], modifiers)
        onClearModifiers?.(modifiers)
        Store.emit(
          DWM.applyWasmModifiers(modifTree),
          DWT.finishTransform()
        )
      } else {
        Store.emit(DWM.applyModifiers())
      }
    },
    [calculateDragModifiers, onClearModifiers, shape.id]
  )

  const { handlePointerDown, handleLostPointerCapture, handlePointerMove } =
    useDrag({
      onDragPosition: handleDragPosition,
      onDragEnd: handleDragEnd,
    })

  return (
    <rect
      x={x}
      y={y}
      height={height}
      width={width}
      className={
        handler === 'row'
          ? Cur.getDynamic('scale-ns', shape.rotation)
          : Cur.getDynamic('scale-ew', shape.rotation)
      }
      style={{ fill: 'transparent', strokeWidth: 0 }}
      onPointerDown={handlePointerDown}
      onLostPointerCapture={handleLostPointerCapture}
      onPointerMove={handlePointerMove}
    />
  )
}

interface GridCellAreaLabelProps {
  origin: any
  width: number
  zoom: number
  text: string
}

export const GridCellAreaLabel: React.FC<GridCellAreaLabelProps> = ({
  origin,
  width,
  zoom,
  text,
}) => {
  const areaWidth = (10 * text.length) / zoom
  const areaHeight = 25 / zoom
  const areaX = (origin as any).x + width - areaWidth
  const areaY = (origin as any).y

  const areaTextX = areaX + areaWidth / 2
  const areaTextY = areaY + areaHeight / 2

  return (
    <g pointerEvents='none'>
      <rect
        x={areaX}
        y={areaY}
        width={areaWidth}
        height={areaHeight}
        style={{
          fill: 'var(--grid-editor-area-background)',
          fillOpacity: 0.3,
        }}
      />
      <text
        x={areaTextX}
        y={areaTextY}
        style={{
          fill: 'var(--grid-editor-area-text)',
          fontFamily: 'worksans',
          fontWeight: 600,
          fontSize: 14 / zoom,
          alignmentBaseline: 'central',
          textAnchor: 'middle',
        }}
      >
        {text}
      </text>
    </g>
  )
}

interface GridCellProps {
  shape: any
  cell: any
  layoutData: any
  zoom: number
  hover: boolean
  selected: boolean
  onSetModifiers?: (modifiers: any) => void
  onClearModifiers?: (modifiers: any) => void
}

export const GridCell: React.FC<GridCellProps> = MF.memo(
  ({
    shape,
    cell,
    layoutData,
    zoom,
    hover,
    selected,
    onSetModifiers,
    onClearModifiers,
  }) => {
    const cellBounds = GSG.cellBounds(layoutData, cell)
    const cellOrigin = GPO.origin(cellBounds)
    const cellWidth = GPO.widthPoints(cellBounds)
    const cellHeight = GPO.heightPoints(cellBounds)
    const cellCenter = GSH.pointsToCenter(cellBounds)
    const cellOriginTransformed = GPT.transform(
      cellOrigin,
      GMT.transformIn(cellCenter, shape.transformInverse)
    )

    const handlePointerEnter = () => {
      Store.emit(DWGE.hoverGridCell(shape.id, cell.id, true))
    }

    const handlePointerLeave = () => {
      Store.emit(DWGE.hoverGridCell(shape.id, cell.id, false))
    }

    const handlePointerDown = (event: any) => {
      if (DOM.leftMouse(event)) {
        if (selected && (Kbd.mod(event) || Kbd.shift(event))) {
          Store.emit(DWGE.removeSelection(shape.id, cell.id))
        } else if (!selected && Kbd.mod(event)) {
          Store.emit(DWGE.addToSelection(shape.id, cell.id))
        } else if (!selected && Kbd.shift(event)) {
          Store.emit(DWGE.addToSelection(shape.id, cell.id, true))
        } else {
          Store.emit(DWGE.setSelection(shape.id, cell.id))
        }
      }
    }

    const handleContextMenu = (event: any) => {
      DOM.preventDefault(event)
      DOM.stopPropagation(event)
      const position = DOM.getClientPosition(event)
      if (selected) {
        Store.emit(
          DW.showGridCellContextMenu({
            position,
            gridId: shape.id,
          })
        )
      } else {
        Store.emit(
          DWGE.setSelection(shape.id, cell.id),
          DW.showGridCellContextMenu({
            position,
            gridId: shape.id,
          })
        )
      }
    }

    const handlers = [
      [
        'top',
        (cellOrigin as any).x,
        (cellOrigin as any).y - 10 / zoom,
        cellWidth,
        20 / zoom,
        'row',
      ] as const,
      [
        'right',
        (cellOrigin as any).x + cellWidth - 10 / zoom,
        (cellOrigin as any).y,
        20 / zoom,
        cellHeight,
        'column',
      ] as const,
      [
        'bottom',
        (cellOrigin as any).x,
        (cellOrigin as any).y + cellHeight - 10 / zoom,
        cellWidth,
        20 / zoom,
        'row',
      ] as const,
      [
        'left',
        (cellOrigin as any).x - 10 / zoom,
        (cellOrigin as any).y,
        20 / zoom,
        cellHeight,
        'column',
      ] as const,
    ]

    return (
      <g className='cell-editor'>
        {DBG.enabled('grid-cells') && (
          <g
            className='debug-cell'
            pointerEvents='none'
            transform={String(
              GMT.transformIn(cellCenter, shape.transform)
            )}
          >
            <rect
              x={(cellOrigin as any).x}
              y={(cellOrigin as any).y}
              width={cellWidth}
              height={cellHeight}
              fill={
                cell.position === 'auto'
                  ? 'green'
                  : cell.position === 'manual'
                  ? 'red'
                  : cell.position === 'area'
                  ? 'yellow'
                  : 'black'
              }
              fillOpacity={0.2}
            />
            {cell.shapes && (
              <circle
                cx={(cellOrigin as any).x + cellWidth - 7 / zoom}
                cy={(cellOrigin as any).y + 7 / zoom}
                r={5 / zoom}
                fill='red'
              />
            )}
          </g>
        )}
        <rect
          transform={String(
            GMT.transformIn(cellCenter, shape.transform)
          )}
          className={`grid-cell-outline${hover ? ' hover' : ''}${
            selected ? ' selected' : ''
          }`}
          x={(cellOrigin as any).x}
          y={(cellOrigin as any).y}
          width={cellWidth}
          height={cellHeight}
          onContextMenu={handleContextMenu}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
          onPointerDown={handlePointerDown}
        />
        {cell['area-name'] && (
          <GridCellAreaLabel
            origin={cellOrigin}
            width={cellWidth}
            zoom={zoom}
            text={cell['area-name']}
          />
        )}
        {selected && (
          <g
            transform={String(
              GMT.transformIn(cellCenter, shape.transform)
            )}
          >
            {handlers.map(([handler, hx, hy, hwidth, hheight, dir]) => (
              <ResizeCellHandler
                key={`resize-${handler}-${cell.id}`}
                shape={shape}
                handler={handler}
                x={hx}
                y={hy}
                cell={cell}
                width={hwidth}
                height={hheight}
                direction={dir}
                layoutData={layoutData}
                onSetModifiers={onSetModifiers}
                onClearModifiers={onClearModifiers}
              />
            ))}
          </g>
        )}
      </g>
    )
  }
)

interface UseResizeTrackOptions {
  type: 'column' | 'row'
  shape: any
  index: number
  trackBefore: any
  trackAfter: any
  zoom: number
  snapPixel: boolean
  onSetModifiers?: (modifiers: any) => void
  onClearModifiers?: (modifiers: any) => void
}

function useResizeTrack({
  type,
  shape,
  index,
  trackBefore,
  trackAfter,
  zoom,
  snapPixel,
  onSetModifiers,
  onClearModifiers,
}: UseResizeTrackOptions) {
  const startSizeBefore = MF.useVar(null)
  const startSizeAfter = MF.useVar(null)

  const handleDragStart = React.useCallback(() => {
    startSizeBefore.current = trackBefore?.size
    startSizeAfter.current = trackAfter?.size

    const tracksProp =
      type === 'column' ? 'layout-grid-columns' : 'layout-grid-rows'

    let updatedShape = shape
    if (trackBefore != null) {
      updatedShape = DWM.updateIn(
        updatedShape,
        [tracksProp, index - 1],
        (track) => ({ ...track, type: 'fixed', value: trackBefore.size })
      )
    }
    if (trackAfter != null) {
      updatedShape = DWM.updateIn(updatedShape, [tracksProp, index], (track) => ({
        ...track,
        type: 'fixed',
        value: trackAfter.size,
      }))
    }

    const modifiers = CTM.empty().set(
      tracksProp,
      updatedShape[tracksProp]
    )
    const modifTree = DWM.createModifTree([shape.id], modifiers)

    if (Features.activeFeature(Store.getState(), 'render-wasm/v1')) {
      Store.emit(DWM.setWasmModifiers(modifTree))
    } else {
      Store.emit(DWM.setModifiers(modifTree))
    }
  }, [type, shape, trackBefore, trackAfter, index])

  const calculateModifiers = React.useCallback(
    (position: any) => {
      const [tracksProp, axis] =
        type === 'column' ? ['layout-grid-columns', 'x'] : ['layout-grid-rows', 'y']

      const precision = snapPixel ? Mth.round : (x: number) => x
      const delta = (position as any)[axis] / zoom

      const newSizeBefore = Math.max(
        0,
        precision((startSizeBefore.current ?? 0) + delta)
      )
      const newSizeAfter = Math.max(
        0,
        precision((startSizeAfter.current ?? 0) - delta)
      )

      let updatedShape = shape
      if (trackBefore != null) {
        updatedShape = DWM.updateIn(
          updatedShape,
          [tracksProp, index - 1],
          (track) => ({ ...track, type: 'fixed', value: newSizeBefore })
        )
      }
      if (trackAfter != null) {
        updatedShape = DWM.updateIn(updatedShape, [tracksProp, index], (track) => ({
          ...track,
          type: 'fixed',
          value: newSizeAfter,
        }))
      }

      return CTM.empty().set(tracksProp, updatedShape[tracksProp])
    },
    [type, shape, trackBefore, trackAfter, index, zoom, snapPixel]
  )

  const handleDragPosition = React.useCallback(
    (_position: any) => {
      const modifiers = calculateModifiers(_position)
      const modifTree = DWM.createModifTree([shape.id], modifiers)
      if (Features.activeFeature(Store.getState(), 'render-wasm/v1')) {
        onSetModifiers?.(modifiers)
        Store.emit(DWM.setWasmModifiers(modifTree))
      } else {
        Store.emit(DWM.setModifiers(modifTree))
      }
    },
    [calculateModifiers, onSetModifiers, shape.id]
  )

  const handleDragEnd = React.useCallback(
    (_position: any) => {
      if (Features.activeFeature(Store.getState(), 'render-wasm/v1')) {
        const modifiers = calculateModifiers(_position)
        const modifTree = DWM.createModifTree([shape.id], modifiers)
        onClearModifiers?.()
        Store.emit(
          DWM.applyWasmModifiers(modifTree),
          DWT.finishTransform()
        )
      } else {
        Store.emit(DWM.applyModifiers())
      }
      startSizeBefore.current = null
      startSizeAfter.current = null
    },
    [calculateModifiers, onClearModifiers, shape.id]
  )

  return useDrag({
    onDragStart: handleDragStart,
    onDragDelta: handleDragPosition,
    onDragEnd: handleDragEnd,
  })
}

interface ResizeTrackHandlerProps {
  shape: any
  index: number
  last: boolean
  drop: boolean
  trackBefore: any
  trackAfter: any
  snapPixel: boolean
  onSetModifiers?: (modifiers: any) => void
  onClearModifiers?: (modifiers: any) => void
  layoutData: {
    columnTotalSize: number
    columnTotalGap: number
    rowTotalSize: number
    rowTotalGap: number
  }
  startP: any
  type: 'column' | 'row'
  zoom: number
}

export const ResizeTrackHandler: React.FC<ResizeTrackHandlerProps> = ({
  shape,
  index,
  last,
  drop,
  trackBefore,
  trackAfter,
  snapPixel,
  onSetModifiers,
  onClearModifiers,
  layoutData,
  startP,
  type,
  zoom,
}) => {
  const bounds = shape.points
  const hv = (v: number) => GPO.startHv(bounds, v)
  const vv = (v: number) => GPO.startVv(bounds, v)

  const [layoutGapRow, layoutGapCol] = CTL.gaps(shape)

  const { handlePointerDown, handleLostPointerCapture, handlePointerMove } =
    useResizeTrack(
      type,
      shape,
      index,
      trackBefore,
      trackAfter,
      zoom,
      snapPixel,
      onSetModifiers,
      onClearModifiers
    )

  let width: number
  let height: number

  if (type === 'column') {
    width = Math.max(0, layoutGapCol - 10 / zoom) + 8 / zoom
    height = layoutData.rowTotalSize + layoutData.rowTotalGap
  } else {
    width = layoutData.columnTotalSize + layoutData.columnTotalGap
    height = Math.max(0, layoutGapRow - 10 / zoom) + 8 / zoom
  }

  let startPResize = startP
  if (type === 'column' && index === 0) {
    startPResize = GPT.subtract(startPResize, hv(width / 2))
  }
  if (type === 'row' && index === 0) {
    startPResize = GPT.subtract(startPResize, vv(height / 2))
  }
  if (type === 'column' && index !== 0 && !last) {
    startPResize = GPT.subtract(
      GPT.subtract(startPResize, hv(layoutGapCol / 2)),
      hv(width / 2)
    )
  }
  if (type === 'row' && index !== 0 && !last) {
    startPResize = GPT.subtract(
      GPT.subtract(startPResize, vv(layoutGapRow / 2)),
      vv(height / 2)
    )
  }

  let startPDrop = startP
  if (type === 'column' && index === 0) {
    startPDrop = GPT.subtract(startPDrop, hv(width / 2))
  }
  if (type === 'row' && index === 0) {
    startPDrop = GPT.subtract(startPDrop, vv(height / 2))
  }
  if (type === 'column' && last) {
    startPDrop = GPT.add(startPDrop, hv(width / 2))
  }
  if (type === 'row' && last) {
    startPDrop = GPT.add(startPDrop, vv(height / 2))
  }
  if (type === 'column' && index !== 0 && !last) {
    startPDrop = GPT.subtract(
      GPT.subtract(startPDrop, hv(layoutGapCol / 2)),
      hv(5 / zoom)
    )
  }
  if (type === 'row' && index !== 0 && !last) {
    startPDrop = GPT.subtract(
      GPT.subtract(startPDrop, vv(layoutGapRow / 2)),
      vv(5 / zoom)
    )
  }

  return (
    <>
      {drop && (
        <rect
          className='drop'
          x={(startPDrop as any).x}
          y={(startPDrop as any).y}
          width={type === 'column' ? 10 / zoom : width}
          height={type === 'row' ? 10 / zoom : height}
          fill='var(--grid-editor-area-background)'
        />
      )}
      <rect
        className={`resize-track-handler ${
          type === 'column'
            ? Cur.getDynamic('resize-ew', shape.rotation)
            : Cur.getDynamic('resize-ns', shape.rotation)
        }`}
        x={(startPResize as any).x}
        y={(startPResize as any).y}
        height={height}
        width={width}
        onPointerDown={handlePointerDown}
        onLostPointerCapture={handleLostPointerCapture}
        onPointerMove={handlePointerMove}
        transform={String(GMT.transformIn(startP, shape.transform))}
        style={{ fill: 'transparent', strokeWidth: 0 }}
      />
    </>
  )
}

const MARKER_WIDTH = 24
const MARKER_H1 = 20
const MARKER_H2 = 10
const MARKER_B_RADIUS = 2

function markerShapeD(center: any, zoom: number): string {
  const markerWidth = MARKER_WIDTH / zoom
  const markerH1 = MARKER_H1 / zoom
  const markerH2 = MARKER_H2 / zoom
  const markerBradius = MARKER_B_RADIUS / zoom
  const markerHalfWidth = markerWidth / 2
  const markerHalfHeight = (markerH1 + markerH2) / 2

  const startP = GPT.subtract(
    center,
    GPT.point(markerHalfWidth, markerHalfHeight)
  )

  const points = [
    startP,
    GPT.add(startP, GPT.point(markerWidth, 0)),
    GPT.add(startP, GPT.point(markerWidth, markerH1)),
    GPT.add(startP, GPT.point(markerWidth - markerHalfWidth, markerH2)),
    GPT.subtract(startP, GPT.point(markerHalfWidth, markerH2)),
  ]

  const [a, b, c, d, e] = points

  const vea = GPT.toVec(e, a)
  const vab = GPT.toVec(a, b)
  const vbc = GPT.toVec(b, c)
  const vcd = GPT.toVec(c, d)
  const vde = GPT.toVec(d, e)

  const lea = GPT.length(vea)
  const lab = GPT.length(vab)
  const lbc = GPT.length(vbc)
  const lcd = GPT.length(vcd)
  const lde = GPT.length(vde)

  const a1 = GPT.add(e, GPT.resize(vea, lea - markerBradius))
  const a2 = GPT.add(a, GPT.resize(vab, markerBradius))

  const b1 = GPT.add(a, GPT.resize(vab, lab - markerBradius))
  const b2 = GPT.add(b, GPT.resize(vbc, markerBradius))

  const c1 = GPT.add(b, GPT.resize(vbc, lbc - markerBradius))
  const c2 = GPT.add(c, GPT.resize(vcd, markerBradius))

  const d1 = GPT.add(c, GPT.resize(vcd, lcd - markerBradius))
  const d2 = GPT.add(d, GPT.resize(vde, markerBradius))

  const e1 = GPT.add(d, GPT.resize(vde, lde - markerBradius))
  const e2 = GPT.add(e, GPT.resize(vea, markerBradius))

  return [
    `M${(a1 as any).x},${(a1 as any).y}`,
    `Q${(a as any).x},${(a as any).y},${(a2 as any).x},${(a2 as any).y}`,
    `L${(b1 as any).x},${(b1 as any).y}`,
    `Q${(b as any).x},${(b as any).y},${(b2 as any).x},${(b2 as any).y}`,
    `L${(c1 as any).x},${(c1 as any).y}`,
    `Q${(c as any).x},${(c as any).y},${(c2 as any).x},${(c2 as any).y}`,
    `L${(d1 as any).x},${(d1 as any).y}`,
    `Q${(d as any).x},${(d as any).y},${(d2 as any).x},${(d2 as any).y}`,
    `L${(e1 as any).x},${(e1 as any).y}`,
    `Q${(e as any).x},${(e as any).y},${(e2 as any).x},${(e2 as any).y`,
    `L${(a1 as any).x},${(a1 as any).y}`,
    'Z',
  ].join(' ')
}

interface TrackMarkerProps {
  center: any
  value: string
  zoom: number
  shape: any
  index: number
  type: 'column' | 'row'
  trackBefore: any
  trackAfter: any
  snapPixel: boolean
  onSetModifiers?: (modifiers: any) => void
  onClearModifiers?: (modifiers: any) => void
}

export const TrackMarker: React.FC<TrackMarkerProps> = ({
  center,
  value,
  zoom,
  shape,
  index,
  type,
  trackBefore,
  trackAfter,
  snapPixel,
  onSetModifiers,
  onClearModifiers,
}) => {
  const { handlePointerDown, handleLostPointerCapture, handlePointerMove } =
    useResizeTrack(
      type,
      shape,
      index,
      trackBefore,
      trackAfter,
      zoom,
      snapPixel,
      onSetModifiers,
      onClearModifiers
    )

  return (
    <g
      onPointerDown={handlePointerDown}
      onLostPointerCapture={handleLostPointerCapture}
      onPointerMove={handlePointerMove}
      className={`grid-track-marker ${
        type === 'column'
          ? Cur.getDynamic('resize-ew', shape.rotation)
          : Cur.getDynamic('resize-ns', shape.rotation)
      }`}
      transform={String(GMT.transformIn(center, shape.transform))}
    >
      <path className='marker-shape' d={markerShapeD(center, zoom)} />
      <text
        className='marker-text'
        x={(center as any).x}
        y={(center as any).y}
        width={26.26 / zoom}
        height={36 / zoom}
        textAnchor='middle'
        dominantBaseline='middle'
      >
        {value}
      </text>
    </g>
  )
}

interface TrackProps {
  shape: any
  zoom: number
  type: 'column' | 'row'
  index: number
  snapPixel: boolean
  trackData: any
  layoutData: any
  hovering: boolean
  drop: boolean
  onStartReorderTrack?: (type: 'column' | 'row', index: number) => void
  onMoveReorderTrack?: (
    type: 'column' | 'row',
    index: number,
    position: any
  ) => void
  onEndReorderTrack?: (
    type: 'column' | 'row',
    index: number,
    position: any,
    moveContent: boolean
  ) => void
  onSetModifiers?: (modifiers: any) => void
  onClearModifiers?: (modifiers: any) => void
}

export const Track: React.FC<TrackProps> = MF.memo(
  ({
    shape,
    zoom,
    type,
    index,
    snapPixel,
    trackData,
    layoutData,
    hovering,
    drop,
    onStartReorderTrack,
    onMoveReorderTrack,
    onEndReorderTrack,
    onSetModifiers,
    onClearModifiers,
  }) => {
    const trackInputRef = MF.useRef()
    const [layoutGapRow, layoutGapCol] = CTL.gaps(shape)

    const bounds = shape.points
    const vv = (v: number) => GPO.startVv(bounds, v)
    const hv = (v: number) => GPO.startHv(bounds, v)

    const startP = trackData['start-p']

    const hpt = GPO.projectPoint(bounds, 'h', startP)
    const vpt = GPO.projectPoint(bounds, 'v', startP)

    let markerP = type === 'column'
      ? GPT.subtract(GPT.subtract(hpt, vv(20 / zoom)), index !== 0 ? hv(layoutGapCol / 2) : GPT.point(0, 0))
      : GPT.subtract(GPT.subtract(vpt, hv(20 / zoom)), index !== 0 ? vv(layoutGapRow / 2) : GPT.point(0, 0))

    const textP = type === 'column' ? hpt : vpt

    const handleBlurTrackInput = (event: any) => {
      const target = DOM.getTarget(event)
      let value = DOM.getInputValue(target).toUpperCase()
      let valueInt = D.parseInteger(value)
      valueInt = valueInt != null ? Math.max(0, valueInt) : null

      let [trackType, trackValue] = ['auto', null] as [string, number | null]

      if (STR.endsWith(value, '%')) {
        trackType = 'percent'
        trackValue = valueInt ?? 50
      } else if (STR.endsWith(value, 'FR')) {
        trackType = 'flex'
        trackValue = valueInt ?? 1
      } else if (valueInt != null) {
        trackType = 'fixed'
        trackValue = valueInt ?? 100
      }

      const trackDataNew = trackType !== 'auto' ? { type: trackType, value: trackValue } : null

      DOM.setValue(MF.refVal(trackInputRef), formatSize(trackDataNew || { type: 'auto', value: 0 }))
      if (trackType !== 'auto') {
        Store.emit(DWSL.changeLayoutTrack([shape.id], type, index, trackDataNew))
        DOM.setData(target, 'default-value', formatSize(trackDataNew))
      } else {
        Obj.set(target, 'value', DOM.getAttribute(target, 'data-default-value'))
      }
    }

    const handleKeydownTrackInput = (event: any) => {
      const enter = Kbd.enter(event)
      const esc = Kbd.esc(event)
      if (enter) {
        DOM.blur(DOM.getTarget(event))
      }
      if (esc) {
        DOM.blur(DOM.getTarget(event))
      }
    }

    const handlePointerEnter = () => {
      Store.emit(DWSL.hoverLayoutTrack([shape.id], type, index, true))
    }

    const handlePointerLeave = () => {
      Store.emit(DWSL.hoverLayoutTrack([shape.id], type, index, false))
    }

    const trackListProp = type === 'column' ? 'column-tracks' : 'row-tracks'
    const trackBefore = layoutData[trackListProp]?.[index - 1]

    let textX: number
    let textY: number
    let textWidth: number
    let textHeight: number

    if (type === 'column') {
      textX = (textP as any).x
      textY = (textP as any).y - 36 / zoom
      textWidth = Math.max(0, trackData.size)
      textHeight = 36 / zoom
    } else {
      textX = (textP as any).x - Math.max(0, trackData.size)
      textY = (textP as any).y - 36 / zoom
      textWidth = Math.max(0, trackData.size)
      textHeight = 36 / zoom
    }

    const handleDragStart = () => {
      onStartReorderTrack?.(type, index)
    }

    const handleDragEnd = (event: any, position: any) => {
      onEndReorderTrack?.(type, index, position, !Kbd.mod(event))
    }

    const handleDragPosition = (_position: any) => {
      onMoveReorderTrack?.(type, index, _position)
    }

    const handleShowTrackMenu = (event: any) => {
      DOM.stopPropagation(event)
      DOM.preventDefault(event)
      let position = DOM.getClientPosition(event)
      if (type === 'column') {
        position = { ...position, y: position.y + 40 }
      } else {
        position = { ...position, x: position.x + 30 }
      }
      Store.emit(
        DW.showTrackContextMenu({
          position,
          gridId: shape.id,
          type,
          index,
        })
      )
    }

    const trackWidth = textWidth * zoom
    const medium = trackWidth >= SMALL_SIZE_LIMIT && trackWidth < MEDIUM_SIZE_LIMIT
    const small = trackWidth < SMALL_SIZE_LIMIT

    const { handlePointerDown, handleLostPointerCapture, handlePointerMove } =
      useDrag({
        onDragStart: handleDragStart,
        onDragEnd: handleDragEnd,
        onDragPosition: handleDragPosition,
      })

    React.useEffect(() => {
      DOM.setValue(MF.refVal(trackInputRef), formatSize(trackData))
    }, [trackData])

    return (
      <g className='track'>
        <g
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
          transform={
            type === 'column'
              ? String(GMT.transformIn(textP, shape.transform))
              : String(
                  GMT.transformIn(
                    textP,
                    GMT.rotate(shape.transform, -90)
                  )
                )
          }
        >
          <rect
            className='grid-editor-header-hover'
            x={textX + 18 / zoom}
            y={textY}
            width={textWidth - 36 / zoom}
            height={textHeight - 5 / zoom}
            rx={3 / zoom}
            style={{ cursor: 'pointer' }}
            opacity={hovering && !small ? 0.2 : 0}
          />
          {!small && (
            <foreignObject x={textX} y={textY} width={textWidth} height={textHeight}>
              <div
                className='grid-editor-wrapper'
                onContextMenu={handleShowTrackMenu}
                onPointerDown={handlePointerDown}
                onLostPointerCapture={handleLostPointerCapture}
                onPointerMove={handlePointerMove}
              >
                <input
                  ref={trackInputRef}
                  className='grid-editor-label'
                  type='text'
                  defaultValue={formatSize(trackData)}
                  data-default-value={formatSize(trackData)}
                  onKeyDown={handleKeydownTrackInput}
                  onBlur={handleBlurTrackInput}
                />
                {hovering && !medium && !small && (
                  <button
                    className='grid-editor-button'
                    onClick={handleShowTrackMenu}
                  >
                    {DeprecatedIcon.menu}
                  </button>
                )}
              </div>
            </foreignObject>
          )}
        </g>

        <g
          transform={
            type === 'row'
              ? `rotate(-90, ${(markerP as any).x}, ${(markerP as any).y})`
              : undefined
          }
        >
          <TrackMarker
            center={markerP}
            index={index}
            shape={shape}
            snapPixel={snapPixel}
            trackAfter={trackData}
            trackBefore={trackBefore}
            type={type}
            value={String(index + 1)}
            zoom={zoom}
            onSetModifiers={onSetModifiers}
            onClearModifiers={onClearModifiers}
          />
        </g>

        <ResizeTrackHandler
          index={index}
          layoutData={layoutData}
          shape={shape}
          snapPixel={snapPixel}
          drop={drop}
          startP={startP}
          trackAfter={trackData}
          trackBefore={trackBefore}
          type={type}
          zoom={zoom}
          onSetModifiers={onSetModifiers}
          onClearModifiers={onClearModifiers}
        />
      </g>
    )
  }
)

interface EditorProps {
  shape: any
  objects: any
  modifiers: any
  zoom: number
  viewOnly?: boolean
}

export const GridLayoutEditor: React.FC<EditorProps> = ({
  shape,
  objects,
  modifiers,
  zoom,
  viewOnly,
}) => {
  const [stModif, setStModif] = React.useState(null)

  const transformedShape = React.useMemo(() => {
    let result = shape
    if (modifiers != null) {
      result = GSH.transformShape(
        result,
        DM.getIn(modifiers, [shape.id, 'modifiers'])
      )
    }
    if (stModif != null) {
      result = GSH.transformShape(result, stModif)
    }
    return result
  }, [shape, modifiers, stModif])

  const snapPixel = MF.useDeref(Refs.snapPixel)

  const gridEditionIdRef = React.useMemo(
    () => Refs.workspaceGridEditionId(shape.id),
    [shape.id]
  )
  const gridEdition = MF.useDeref(gridEditionIdRef)

  const hoverCells = gridEdition?.hover || {}
  const selectedCells = gridEdition?.selected || {}

  const hoverColumns = new Set(
    (gridEdition?.hoverTrack || [])
      .filter(([t]: [string, any]) => t === 'column')
      .map(([, idx]: [string, number]) => idx)
  )

  const hoverRows = new Set(
    (gridEdition?.hoverTrack || [])
      .filter(([t]: [string, any]) => t === 'row')
      .map(([, idx]: [string, number]) => idx)
  )

  const bounds = transformedShape.points
  const hv = (v: number) => GPO.startHv(bounds, v)
  const vv = (v: number) => GPO.startVv(bounds, v)
  const origin = GPO.origin(bounds)

  const layoutData = React.useMemo(() => {
    const modifiedObjects = GSH.applyObjectsModifiers(objects, modifiers)
    const ids = CFH.getChildrenIds(modifiedObjects, transformedShape.id)
    const updatedObjects = GSH.updateShapesGeometry(
      modifiedObjects,
      ids.reverse()
    )

    const children = CFH.getImmediateChildren(updatedObjects, transformedShape.id, {
      removeHidden: true,
    }).map((child: any) => [
      GPO.parentCoordsBounds(child.points, transformedShape.points),
      child,
    ])

    const childrenBounds = D.lazyMap(ids, (id: any) =>
      GSH.shapeToPoints(updatedObjects[id])
    )

    return GSG.calcLayoutData(
      transformedShape,
      bounds,
      children,
      childrenBounds,
      updatedObjects
    )
  }, [transformedShape, objects, modifiers])

  const { rowTracks, columnTracks, columnTotalSize, columnTotalGap, rowTotalSize, rowTotalGap } =
    layoutData

  const width = Math.max(
    GPO.widthPoints(bounds),
    columnTotalSize + columnTotalGap + CTL.hPadding(transformedShape)
  )
  const height = Math.max(
    GPO.heightPoints(bounds),
    rowTotalSize + rowTotalGap + CTL.vPadding(transformedShape)
  )

  const handlePointerDown = (event: any) => {
    if (DOM.leftMouse(event)) {
      DOM.stopPropagation(event)
    }
  }

  const handleAddColumn = () => {
    Store.emit(
      DWSL.addLayoutTrack([transformedShape.id], 'column', CTL.defaultTrackValue)
    )
  }

  const handleAddRow = () => {
    Store.emit(
      DWSL.addLayoutTrack([transformedShape.id], 'row', CTL.defaultTrackValue)
    )
  }

  const targetTracksRef = MF.useRef(null)
  const [dropTrackType, setDropTrackType] = React.useState(null)
  const [dropTrackTarget, setDropTrackTarget] = React.useState(null)

  const handleStartReorderTrack = (type: 'column' | 'row', _fromIdx: number) => {
    const lineVec = type === 'column' ? vv(1) : hv(1)
    const firstPoint = origin
    const lastPoint = type === 'column' ? bounds[1] : bounds[3]

    const midPoints =
      type === 'column'
        ? columnTracks.map((track: any) =>
            GPT.add(track['start-p'], hv(track.size / 2))
          )
        : rowTracks.map((track: any) =>
            GPT.add(track['start-p'], vv(track.size / 2))
          )

    const tracks = D.withPrev(D.concatVec([firstPoint], [...midPoints, lastPoint]))
      .map((entry: any, i: number) => {
        const [[current, prev]] = entry
        if (prev == null) return null
        return [[prev, current, lineVec], i - 1]
      })
      .filter(Boolean)

    targetTracksRef.current = tracks
    setDropTrackType(type)
  }

  const handleMoveReorderTrack = (_type: 'column' | 'row', _fromIdx: number, position: any) => {
    const index = targetTracksRef.current?.find(([[p1, p2, v]]: [any, any, any]) =>
      GL.isInsideLines([p1, v], [p2, v], position)
    )?.[1]
    if (index != null) {
      setDropTrackTarget(index)
    }
  }

  const handleEndReorderTrack = (
    type: 'column' | 'row',
    fromIndex: number,
    _position: any,
    moveContent: boolean
  ) => {
    if (dropTrackTarget != null) {
      const ids = [transformedShape.id]
      if (fromIndex < dropTrackTarget) {
        Store.emit(
          DWSL.reorderLayoutTrack(ids, type, fromIndex, dropTrackTarget - 1, moveContent)
        )
      } else if (fromIndex > dropTrackTarget) {
        Store.emit(
          DWSL.reorderLayoutTrack(ids, type, fromIndex, dropTrackTarget - 1, moveContent)
        )
      }
    }

    targetTracksRef.current = null
    setDropTrackType(null)
    setDropTrackTarget(null)
  }

  const handleSetModifiers = (modifier: any) => {
    setStModif(modifier)
  }

  const handleClearModifiers = () => {
    setStModif(null)
  }

  React.useEffect(() => {
    return () => {
      Store.emit(DWGE.stopGridLayoutEditing(transformedShape.id))
    }
  }, [])

  if (transformedShape.hidden || transformedShape.blocked) {
    return null
  }

  return (
    <g
      className='grid-editor'
      pointerEvents={viewOnly ? 'none' : undefined}
      onPointerDown={handlePointerDown}
    >
      <g className='cells'>
        {CTL.getCells(transformedShape, { sort: true }).map((cell: any) => (
          <GridCell
            key={`cell-${cell.id}`}
            shape={transformedShape}
            layoutData={layoutData}
            cell={cell}
            zoom={zoom}
            hover={hoverCells[cell.id]}
            selected={selectedCells[cell.id]}
            onSetModifiers={handleSetModifiers}
            onClearModifiers={handleClearModifiers}
          />
        ))}
      </g>

      {!viewOnly && (
        <>
          <GridEditorFrame
            zoom={zoom}
            bounds={bounds}
            width={width}
            height={height}
          />

          <g
            transform={String(
              GMT.transformIn(
                GPT.add(origin, hv(width + 30 / zoom)),
                transformedShape.transform
              )
            )}
          >
            <PlusBtn
              startP={GPT.add(origin, hv(width + 30 / zoom))}
              zoom={zoom}
              type='column'
              onClick={handleAddColumn}
            />
          </g>

          <g
            transform={String(
              GMT.transformIn(
                GPT.add(origin, vv(height + 30 / zoom)),
                transformedShape.transform
              )
            )}
          >
            <PlusBtn
              startP={GPT.add(origin, vv(height + 30 / zoom))}
              zoom={zoom}
              type='row'
              onClick={handleAddRow}
            />
          </g>

          {columnTracks.map((columnData: any, idx: number) => (
            <Track
              key={`column-track-${idx}`}
              shape={transformedShape}
              zoom={zoom}
              type='column'
              index={idx}
              layoutData={layoutData}
              snapPixel={snapPixel}
              drop={dropTrackType === 'column' && dropTrackTarget === idx}
              trackData={columnData}
              hovering={hoverColumns.has(idx)}
              onStartReorderTrack={handleStartReorderTrack}
              onMoveReorderTrack={handleMoveReorderTrack}
              onEndReorderTrack={handleEndReorderTrack}
              onSetModifiers={handleSetModifiers}
              onClearModifiers={handleClearModifiers}
            />
          ))}

          {columnTracks.length > 0 && (
            <g className='track'>
              {(() => {
                const lastTrack = columnTracks[columnTracks.length - 1]
                const startP = lastTrack['start-p']
                const endP = GPT.add(startP, hv(lastTrack.size))
                const markerP = GPT.subtract(
                  GPO.projectPoint(bounds, 'h', endP),
                  vv(20 / zoom)
                )
                return (
                  <>
                    <TrackMarker
                      center={markerP}
                      index={columnTracks.length}
                      shape={transformedShape}
                      snapPixel={snapPixel}
                      trackBefore={lastTrack}
                      type='column'
                      value={String(columnTracks.length + 1)}
                      zoom={zoom}
                      onSetModifiers={handleSetModifiers}
                      onClearModifiers={handleClearModifiers}
                    />
                    <ResizeTrackHandler
                      index={columnTracks.length}
                      last
                      drop={
                        dropTrackType === 'column' &&
                        dropTrackTarget === columnTracks.length
                      }
                      shape={transformedShape}
                      layoutData={layoutData}
                      snapPixel={snapPixel}
                      startP={endP}
                      type='column'
                      trackBefore={lastTrack}
                      zoom={zoom}
                      onSetModifiers={handleSetModifiers}
                      onClearModifiers={handleClearModifiers}
                    />
                  </>
                )
              })()}
            </g>
          )}

          {rowTracks.map((rowData: any, idx: number) => (
            <Track
              key={`row-track-${idx}`}
              shape={transformedShape}
              zoom={zoom}
              type='row'
              index={idx}
              layoutData={layoutData}
              snapPixel={snapPixel}
              drop={dropTrackType === 'row' && dropTrackTarget === idx}
              trackData={rowData}
              hovering={hoverRows.has(idx)}
              onStartReorderTrack={handleStartReorderTrack}
              onMoveReorderTrack={handleMoveReorderTrack}
              onEndReorderTrack={handleEndReorderTrack}
              onSetModifiers={handleSetModifiers}
              onClearModifiers={handleClearModifiers}
            />
          ))}

          {rowTracks.length > 0 && (
            <g className='track'>
              {(() => {
                const lastTrack = rowTracks[rowTracks.length - 1]
                const startP = lastTrack['start-p']
                const endP = GPT.add(startP, vv(lastTrack.size))
                const markerP = GPT.subtract(
                  GPO.projectPoint(bounds, 'v', endP),
                  hv(20 / zoom)
                )
                return (
                  <>
                    <TrackMarker
                      center={markerP}
                      index={rowTracks.length}
                      shape={transformedShape}
                      snapPixel={snapPixel}
                      trackBefore={lastTrack}
                      type='row'
                      value={String(rowTracks.length + 1)}
                      zoom={zoom}
                      onSetModifiers={handleSetModifiers}
                      onClearModifiers={handleClearModifiers}
                    />
                    <ResizeTrackHandler
                      index={rowTracks.length}
                      last
                      drop={
                        dropTrackType === 'row' &&
                        dropTrackTarget === rowTracks.length
                      }
                      shape={transformedShape}
                      layoutData={layoutData}
                      startP={endP}
                      type='row'
                      trackBefore={lastTrack}
                      snapPixel={snapPixel}
                      zoom={zoom}
                      onSetModifiers={handleSetModifiers}
                      onClearModifiers={handleClearModifiers}
                    />
                  </>
                )
              })()}
            </g>
          )}
        </>
      )}
    </g>
  )
}
