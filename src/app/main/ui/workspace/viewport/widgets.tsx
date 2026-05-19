// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as D from 'app/common/data'
import * as DM from 'app/common/data/macros'
import * as GPT from 'app/common/geom/point'
import * as CTK from 'app/common/types/component'
import * as CTN from 'app/common/types/container'
import * as CTT from 'app/common/types/shape-tree'
import * as CTL from 'app/common/types/shape/layout'
import * as UUID from 'app/common/uuid'
import * as DCM from 'app/main/data/common'
import * as DW from 'app/main/data/workspace'
import * as Refs from 'app/main/refs'
import { Store } from 'app/main/store'
import { textTransform, titleTransform } from 'app/main/ui/workspace/viewport/utils'
import * as Ctx from 'app/main/ui/context'
import { Icon, icon } from 'app/main/ui/ds/foundations/assets/icon'
import * as Hooks from 'app/main/ui/hooks'
import * as DBG from 'app/util/debug'
import * as DOM from 'app/util/dom'
import * as STR from 'cuerdas.core'
import * as MF from 'rumext.v2'
import React from 'react'

interface PixelGridProps {
  vbox: any
  zoom: number
}

export const PixelGrid: React.FC<PixelGridProps> = ({ vbox, zoom }) => {
  const strokeColor = DBG.enabled('pixel-grid')
    ? 'red'
    : 'var(--status-color-info-500)'
  const strokeOpacity = DBG.enabled('pixel-grid') ? 1 : 0.2

  return (
    <g className='pixel-grid'>
      <defs>
        <pattern
          id='pixel-grid'
          viewBox='0 0 1 1'
          width={1}
          height={1}
          patternUnits='userSpaceOnUse'
        >
          <path
            d='M 1 0 L 0 0 0 1'
            style={{
              fill: 'none',
              stroke: strokeColor,
              strokeOpacity,
              strokeWidth: String(1 / zoom),
            }}
          />
        </pattern>
      </defs>
      <rect
        x={(vbox as any).x}
        y={(vbox as any).y}
        width={(vbox as any).width}
        height={(vbox as any).height}
        fill='url(#pixel-grid)'
        style={{ pointerEvents: 'none' }}
      />
    </g>
  )
}

interface CursorTooltipProps {
  zoom: number
  tooltip: any
}

export const CursorTooltip: React.FC<CursorTooltipProps> = ({ zoom, tooltip }) => {
  const coords = Hooks.useRxSubject(Refs.mousePosition, (pos) =>
    GPT.divide(pos, GPT.point(zoom, zoom))
  )

  if (!coords) return null

  const posX = (coords as any).x - 100
  const posY = (coords as any).y + 30

  return (
    <g transform={`translate(${posX}, ${posY})`}>
      <foreignObject width={200} height={100} style={{ textAlign: 'center' }}>
        <span>{tooltip}</span>
      </foreignObject>
    </g>
  )
}

interface SelectionRectProps {
  data: any
  zoom: number
}

export const SelectionRect: React.FC<SelectionRectProps> = ({ data, zoom }) => {
  if (!data) return null

  return (
    <rect
      className='selection-rect'
      x={(data as any).x}
      y={(data as any).y}
      data-testid='workspace-selection-rect'
      width={(data as any).width}
      height={(data as any).height}
      style={{
        fill: 'var(--color-accent-tertiary-muted)',
        stroke: 'var(--color-accent-tertiary)',
        strokeWidth: 1 / zoom,
      }}
    />
  )
}

interface FrameTitleProps {
  frame: any
  zoom: number
  isSelected: boolean
  isShowArtboardNames: boolean
  isShowId: boolean
  isGridEdition: boolean
  onFrameEnter: (id: string) => void
  onFrameLeave: (id: string) => void
  onFrameSelect: (event: any, id: string) => void
}

export const FrameTitle: React.FC<FrameTitleProps> = ({
  frame,
  zoom,
  isSelected,
  isShowArtboardNames,
  isShowId,
  isGridEdition,
  onFrameEnter,
  onFrameLeave,
  onFrameSelect,
}) => {
  const workspaceReadOnly = Ctx.useContext(Ctx.workspaceReadOnlyContext)
  const objects = (Refs.workspacePageObjects as any).deref()

  const color = isSelected
    ? CTN.inAnyComponent(objects, frame) || CTK.isVariantContainer(frame)
      ? 'var(--assets-component-hightlight)'
      : 'var(--color-accent-tertiary)'
    : '#8f9da3'

  const blocked = frame.blocked

  const onPointerDown = React.useCallback(
    (event: any) => {
      if (DOM.leftMouse(event) && !blocked) {
        DOM.preventDefault(event)
        DOM.stopPropagation(event)
        onFrameSelect(event, (frame as any).id)
      }
    },
    [frame, onFrameSelect, blocked]
  )

  const onContextMenu = React.useCallback(
    (event: any) => {
      const e = DOM.eventToNativeEvent(event)
      const position = DOM.getClientPosition(e)
      DOM.preventDefault(event)
      DOM.stopPropagation(event)
      if (!workspaceReadOnly) {
        Store.emit(DW.showShapeContextMenu({ position, shape: frame }))
      }
    },
    [frame, workspaceReadOnly]
  )

  const onPointerEnter = React.useCallback(() => {
    onFrameEnter((frame as any).id)
  }, [frame, onFrameEnter])

  const onPointerLeave = React.useCallback(() => {
    onFrameLeave((frame as any).id)
  }, [frame, onFrameLeave])

  const mainInstance = CTK.mainInstance(frame)
  const isVariant = frame.isVariantContainer

  const textWidth = (frame as any).width * zoom
  const showIcon =
    ((frame as any).useForThumbnail || isGridEdition || mainInstance || isVariant) &&
    textWidth > 15
  const textPosX = showIcon ? 15 : 0

  const [edition, setEdition] = React.useState(false)
  const localRef = MF.useRef(null)
  const ref = localRef

  const startEdit = React.useCallback(() => {
    if (!blocked && !workspaceReadOnly) {
      if (!edition) {
        setEdition(true)
      } else {
        Store.emit(DW.startRenameShape((frame as any).id))
      }
    }
  }, [blocked, workspaceReadOnly, edition, frame])

  const acceptEdit = React.useCallback(() => {
    const nameInput = MF.refVal(ref)
    const name = STR.trim(DOM.getValue(nameInput))
    setEdition(false)
    Store.emit(DW.endRenameShape((frame as any).id, name))
    onFrameLeave((frame as any).id)
  }, [ref, frame, onFrameLeave])

  const cancelEdit = React.useCallback(() => {
    setEdition(false)
    Store.emit(DW.endRenameShape((frame as any).id, null))
    onFrameLeave((frame as any).id)
  }, [frame, onFrameLeave])

  const onKeyDown = React.useCallback(
    (event: any) => {
      if (DOM.enter(event)) acceptEdit()
      if (DOM.esc(event)) cancelEdit()
    },
    [acceptEdit, cancelEdit]
  )

  if ((frame as any).hidden) return null

  return (
    <g
      className='frame-title'
      id={`frame-title-${(frame as any).id}`}
      data-edit-grid={isGridEdition}
      transform={titleTransform(frame, zoom, isGridEdition)}
      pointerEvents={(frame as any).blocked ? 'none' : undefined}
    >
      {showIcon && (
        <svg
          x={0}
          y={-9}
          width={12}
          height={12}
          className='workspace-frame-icon'
          style={{ stroke: color, fill: 'none' }}
          visibility={isShowArtboardNames ? 'visible' : 'hidden'}
        >
          {(frame as any).useForThumbnail && <use href='#icon-boards-thumbnail' />}
          {isGridEdition && <use href='#icon-grid' />}
          {mainInstance && <use href='#icon-component' />}
          {isVariant && <use href='#icon-component' />}
        </svg>
      )}

      {edition ? (
        <foreignObject
          x={textPosX}
          y={-15}
          width={Math.max(0, textWidth - textPosX)}
          height={22}
          className='frame-title-wrapper'
          style={{ fill: color }}
          visibility={isShowArtboardNames ? 'visible' : 'hidden'}
        >
          <input
            type='text'
            className='frame-title-label frame-title-input'
            style={{ color }}
            autoFocus
            onKeyDown={onKeyDown}
            ref={ref}
            defaultValue={(frame as any).name}
            onBlur={acceptEdit}
          />
        </foreignObject>
      ) : (
        <foreignObject
          x={textPosX}
          y={-11}
          width={Math.max(0, textWidth - textPosX)}
          height={20}
          className='frame-title-wrapper'
          style={{ fill: color }}
          visibility={isShowArtboardNames ? 'visible' : 'hidden'}
        >
          <div
            className='frame-title-label'
            style={{ color }}
            ref={ref}
            onPointerDown={onPointerDown}
            onDoubleClick={startEdit}
            onContextMenu={onContextMenu}
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
          >
            {isShowId
              ? `${(frame as any).id} - ${(frame as any).name}`
              : (frame as any).name}
          </div>
        </foreignObject>
      )}
    </g>
  )
}

interface FrameTitlesProps {
  objects: any
  zoom: number
  selected: Set<any>
  focus: Set<any>
  isShowArtboardNames: boolean
  onFrameEnter: (id: string) => void
  onFrameLeave: (id: string) => void
  onFrameSelect: (event: any, id: string) => void
}

export const FrameTitles: React.FC<FrameTitlesProps> = ({
  objects,
  zoom,
  selected,
  focus,
  isShowArtboardNames,
  onFrameEnter,
  onFrameLeave,
  onFrameSelect,
}) => {
  const selectedSet = selected || new Set()
  let shapes = CTT.getFrames(objects, { skipCopies: true })

  if (DBG.enabled('shape-titles')) {
    shapes = new Set([
      ...shapes,
      ...[...selectedSet].map((id) => objects[id]).filter(Boolean),
    ])
  }

  const edition = MF.useDeref(Refs.selectedEdition)
  const gridEdition = CTL.gridLayout(objects, edition)

  return (
    <g className='frame-titles blurrable'>
      {shapes.map((shape: any) => {
        if (
          (shape as any).id === UUID.zero ||
          (!DBG.enabled('shape-titles') && (shape as any).parentId !== UUID.zero) ||
          (focus && !focus.isEmpty && !focus.has((shape as any).id))
        ) {
          return null
        }

        return (
          <FrameTitle
            key={`frame-title-${(shape as any).id}`}
            frame={shape}
            zoom={zoom}
            isSelected={selectedSet.has((shape as any).id)}
            isShowArtboardNames={isShowArtboardNames}
            isShowId={DBG.enabled('shape-titles')}
            isGridEdition={(shape as any).id === edition && gridEdition}
            onFrameEnter={onFrameEnter}
            onFrameLeave={onFrameLeave}
            onFrameSelect={onFrameSelect}
          />
        )
      })}
    </g>
  )
}

interface FrameFlowProps {
  flow: any
  frame: any
  isSelected: boolean
  zoom: number
  onFrameEnter: (id: string) => void
  onFrameLeave: (id: string) => void
  onFrameSelect: (event: any, id: string) => void
}

const FrameFlow: React.FC<FrameFlowProps> = ({
  flow,
  frame,
  isSelected,
  zoom,
  onFrameEnter,
  onFrameLeave,
  onFrameSelect,
}) => {
  const x = DM.getProp(frame, 'x')
  const y = DM.getProp(frame, 'y')
  const pos = GPT.point(x, y - 35 / zoom)
  const frameId = (frame as any).id
  const flowName = (flow as any).name

  const onPointerDown = React.useCallback(
    (event: any) => {
      const params = { section: 'interactions', frameId }
      if (DOM.leftMouse(event)) {
        DOM.preventDefault(event)
        DOM.stopPropagation(event)
        Store.emit(DCM.goToViewer(params))
      }
    },
    [frameId]
  )

  const onPointerEnter = React.useCallback(() => {
    if (onFrameEnter) onFrameEnter(frameId)
  }, [frameId, onFrameEnter])

  const onPointerLeave = React.useCallback(() => {
    if (onFrameLeave) onFrameLeave(frameId)
  }, [frameId, onFrameLeave])

  return (
    <foreignObject x={0} y={-15} width={100000} height={24} transform={textTransform(pos, zoom)}>
      <div className='frame-flow-badge-wrapper'>
        <div
          className={`frame-flow-badge-content ${isSelected ? 'selected' : ''}`}
          onPointerDown={onPointerDown}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
        >
          <Icon size='s'>{icon('play')}</Icon>
          <span>{flowName}</span>
        </div>
      </div>
    </foreignObject>
  )
}

interface FrameFlowsProps {
  flows: any
  objects: any
  zoom: number
  selected: Set<any>
  onFrameEnter: (id: string) => void
  onFrameLeave: (id: string) => void
  onFrameSelect: (event: any, id: string) => void
}

export const FrameFlows: React.FC<FrameFlowsProps> = ({
  flows,
  objects,
  zoom,
  selected,
  onFrameEnter,
  onFrameLeave,
  onFrameSelect,
}) => {
  return (
    <g className='frame-flows'>
      {Object.entries(flows).map(([flowId, flow]: [any, any]) => {
        const frame = objects[(flow as any).startingFrame]
        const frameId = DM.getProp(frame, 'id')

        return (
          <FrameFlow
            key={`${frameId}-${flowId}`}
            flow={flow}
            frame={frame}
            isSelected={selected.has(frameId)}
            zoom={zoom}
            onFrameEnter={onFrameEnter}
            onFrameLeave={onFrameLeave}
            onFrameSelect={onFrameSelect}
          />
        )
      })}
    </g>
  )
}

interface ButtonAddProps {
  shape: any
  zoom: number
  onClick?: () => void
}

export const ButtonAdd: React.FC<ButtonAddProps> = ({ shape, zoom, onClick }) => {
  const { x2, y2, height } = (shape as any).selrect

  const centerX = x2 + 22 / zoom
  const centerY = y2 - height / 2

  const rectX = centerX - 16 / zoom
  const rectY = centerY - 16 / zoom
  const rectSz = 32 / zoom
  const rectR = 8 / zoom

  const iconX = centerX - 8 / zoom
  const iconY = centerY - 8 / zoom
  const iconSz = 16 / zoom

  const handleClick = React.useCallback(() => {
    if (onClick) onClick()
  }, [onClick])

  return (
    <g className='button-add-wrapper' onClick={handleClick}>
      <rect x={rectX} y={rectY} width={rectSz} height={rectSz} rx={rectR} ry={rectR} />
      <use
        className='button-add-icon'
        x={iconX}
        y={iconY}
        width={iconSz}
        height={iconSz}
        href='#icon-add'
      />
    </g>
  )
}
