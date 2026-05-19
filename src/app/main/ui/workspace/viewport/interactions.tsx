// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as D from 'app/common/data'
import * as DM from 'app/common/data/macros'
import * as CFH from 'app/common/files/helpers'
import * as GMT from 'app/common/geom/matrix'
import * as GPT from 'app/common/geom/point'
import * as CTSI from 'app/common/types/shape/interactions'
import * as DW from 'app/main/data/workspace'
import * as Refs from 'app/main/refs'
import * as Render from 'app/main/render'
import { Store } from 'app/main/store'
import * as Muc from 'app/main/ui/context'
import * as Embed from 'app/main/ui/shapes/embed'
import { Outline } from 'app/main/ui/workspace/viewport/outline'
import * as DOM from 'app/util/dom'
import * as STR from 'cuerdas.core'
import * as L from 'okulary.core'
import * as MF from 'rumext.v2'
import React from 'react'

const interactionsRef = L.derived(
  (state: any) =>
    DM.selectKeys(state, [
      'editing-interaction-index',
      'draw-interaction-to',
      'draw-interaction-to-frame',
      'move-overlay-to',
      'move-overlay-index',
    ]),
  Refs.workspaceLocal
)

function onPointerDown(event: any, index: number, shape: any) {
  DOM.stopPropagation(event)
  Store.emit(DW.selectShape((shape as any).id))
  Store.emit(DW.startEditInteraction(index))
}

function connectToShape(
  origShape: any,
  destShape: any
): ['right' | 'left', number, number, 'right' | 'left', number, number] {
  const origRect = (origShape as any).selrect
  const destRect = (destShape as any).selrect

  const origXLeft = (origRect as any).x
  const origXRight = origXLeft + (origRect as any).width
  const origXCenter = origXLeft + (origRect as any).width / 2

  const destXLeft = (destRect as any).x
  const destXRight = destXLeft + (destRect as any).width
  const destXCenter = destXLeft + (destRect as any).width / 2

  const origPos: 'right' | 'left' =
    origXRight <= destXLeft
      ? 'right'
      : origXLeft >= destXRight
      ? 'left'
      : origXCenter <= destXCenter
      ? 'left'
      : 'right'

  const destPos: 'right' | 'left' =
    origXRight <= destXLeft
      ? 'left'
      : origXLeft >= destXRight
      ? 'right'
      : origXCenter <= destXCenter
      ? 'left'
      : 'right'

  const origX = origPos === 'right' ? origXRight : origXLeft
  const destX = destPos === 'right' ? destXRight : destXLeft

  const origY = (origRect as any).y + (origRect as any).height / 2
  const destY = (destRect as any).y + (destRect as any).height / 2

  return [origPos, origX, origY, destPos, destX, destY]
}

function connectToPoint(
  origShape: any,
  destPoint: any
): ['right' | 'left', number, number, 'right' | 'left', number, number] {
  const origRect = (origShape as any).selrect

  const origXLeft = (origRect as any).x
  const origXRight = origXLeft + (origRect as any).width
  const origXCenter = origXLeft + (origRect as any).width / 2

  const destX = (destPoint as any).x
  const destY = (destPoint as any).y

  const origPos: 'right' | 'left' =
    origXRight <= destX
      ? 'right'
      : origXLeft >= destX
      ? 'left'
      : origXCenter <= destX
      ? 'right'
      : 'left'

  const destPos: 'right' | 'left' =
    origXRight <= destX
      ? 'left'
      : origXLeft >= destX
      ? 'right'
      : origXCenter <= destX
      ? 'right'
      : 'left'

  const origX = origPos === 'right' ? origXRight : origXLeft
  const origY = (origRect as any).y + (origRect as any).height / 2

  return [origPos, origX, origY, destPos, destX, destY]
}

interface InteractionMarkerProps {
  x: number
  y: number
  stroke: string
  actionType?: string
  arrowDir?: 'left' | 'right'
  zoom: number
}

export const InteractionMarker: React.FC<InteractionMarkerProps> = ({
  x,
  y,
  stroke,
  actionType,
  arrowDir,
  zoom,
}) => {
  let iconPdata: string | null = null

  if (actionType === 'navigate') {
    if (arrowDir === 'right') {
      iconPdata = 'M -6.5 0 L 5.5 0 M 6.715 0.715 L -0.5 -6.5 M 6.715 -0.715 L -0.365 6.635'
    } else if (arrowDir === 'left') {
      iconPdata = 'M 6.5 0 l -12 0 m -0.715 0.715 l 6.5 -6.9 m -6 6 l 6 6.35'
    }
  } else if (actionType === 'open-overlay') {
    iconPdata = 'M-5 -5 h7 v7 h-7 z M2 -2 h3.5 v7 h-7 v-2.5'
  } else if (actionType === 'toggle-overlay') {
    iconPdata = 'M-5 -5 h7 v7 h-7 z M2 -2 h3.5 v7 h-7 v-2.5'
  } else if (actionType === 'close-overlay') {
    iconPdata = 'M -5 -5 L 5 5 M -5 5 L 5 -5'
  } else if (actionType === 'prev-screen') {
    if (arrowDir === 'left') {
      iconPdata = 'M -6.5 0 l 12 0 l -6 -6 m 6 6 l -6 6'
    } else if (arrowDir === 'right') {
      iconPdata = 'M 6.5 0 l -12 0 l 6 -6 m -6 6 l 6 6'
    }
  } else if (actionType === 'open-url') {
    iconPdata = `M1 -5 L 3 -7 L 7 -3 L 1 3 L -1 1 M-1 5 L -3 7 L -7 3 L -1 -3 L 1 -1`
  }

  const invZoom = 1 / zoom

  return (
    <>
      <circle
        cx={0}
        cy={0}
        r={actionType != null ? 11 : 4}
        fill={stroke}
        transform={`scale(${invZoom}, ${invZoom}) translate(${zoom * x}, ${zoom * y})`}
      />
      {iconPdata && (
        <path
          fill={stroke}
          strokeWidth={2}
          stroke='var(--app-white)'
          d={iconPdata}
          transform={`scale(${invZoom}, ${invZoom}) translate(${zoom * x}, ${zoom * y})`}
        />
      )}
    </>
  )
}

interface InteractionPathProps {
  index: number
  level: number
  origShape: any
  destShape?: any
  destPoint?: any
  selected: Set<any>
  selected?: boolean
  actionType?: string
  zoom: number
}

export const InteractionPath: React.FC<InteractionPathProps> = ({
  index,
  level,
  origShape,
  destShape,
  destPoint,
  selected,
  selected: isSelected,
  actionType,
  zoom,
}) => {
  let origPos: 'right' | 'left'
  let origX: number
  let origY: number
  let destPos: 'right' | 'left'
  let destX: number
  let destY: number

  if (destShape) {
    ;[origPos, origX, origY, destPos, destX, destY] = connectToShape(
      origShape,
      destShape
    )
  } else if (destPoint) {
    ;[origPos, origX, origY, destPos, destX, destY] = connectToPoint(
      origShape,
      destPoint
    )
  } else {
    const origSelrect = (origShape as any).selrect
    ;[origPos, origX, origY, destPos, destX, destY] = connectToPoint(origShape, {
      x: origSelrect.x2 + 100 / zoom,
      y: origSelrect.y1 - 50 / zoom + (level * 32) / zoom,
    })
  }

  const origDx = (origPos === 'right' ? 100 : -100) / zoom
  const destDx = (destPos === 'right' ? 100 : -100) / zoom

  const path = `M ${origX} ${origY} C ${origX + origDx} ${origY} ${
    destX + destDx
  } ${destY} ${destX} ${destY}`
  const arrowDir = destPos === 'left' ? 'right' : 'left'

  const handlePointerDown = (e: any) => onPointerDown(e, index, origShape)

  if (!isSelected) {
    return (
      <g onPointerDown={handlePointerDown}>
        <path
          stroke='var(--df-secondary)'
          fill='none'
          pointerEvents='visible'
          strokeWidth={2 / zoom}
          d={path}
        />
        {!destShape && (
          <InteractionMarker
            index={index}
            x={destX}
            y={destY}
            stroke='var(--df-secondary)'
            actionType={actionType}
            arrowDir={arrowDir}
            zoom={zoom}
          />
        )}
      </g>
    )
  }

  return (
    <g onPointerDown={handlePointerDown}>
      <path
        stroke='var(--color-accent-tertiary)'
        fill='none'
        pointerEvents='visible'
        strokeWidth={2 / zoom}
        d={path}
      />
      {destShape && <Outline zoom={zoom} shape={destShape} color='var(--color-accent-tertiary)' />}
      <InteractionMarker
        index={index}
        x={origX}
        y={origY}
        stroke='var(--color-accent-tertiary)'
        zoom={zoom}
      />
      <InteractionMarker
        index={index}
        x={destX}
        y={destY}
        stroke='var(--color-accent-tertiary)'
        actionType={actionType}
        arrowDir={arrowDir}
        zoom={zoom}
      />
    </g>
  )
}

interface InteractionHandleProps {
  index: number
  shape: any
  zoom: number
}

export const InteractionHandle: React.FC<InteractionHandleProps> = ({
  index,
  shape,
  zoom,
}) => {
  const shapeRect = (shape as any).selrect
  const handleX = shapeRect.x + shapeRect.width
  const handleY = shapeRect.y + shapeRect.height / 2

  const handlePointerDown = (e: any) => onPointerDown(e, index, shape)

  return (
    <g onPointerDown={handlePointerDown}>
      <InteractionMarker
        x={handleX}
        y={handleY}
        stroke='var(--color-accent-tertiary)'
        actionType='navigate'
        arrowDir='right'
        zoom={zoom}
      />
    </g>
  )
}

interface OverlayMarkerProps {
  pageId: string
  index: number
  origShape: any
  destShape: any
  position: any
  objects: any
  hoverDisabled: React.MutableRefObject<boolean>
}

export const OverlayMarker: React.FC<OverlayMarkerProps> = ({
  pageId,
  index,
  origShape,
  destShape,
  position,
  objects,
  hoverDisabled,
}) => {
  const startMovePosition = () => {
    Store.emit(DW.startMoveOverlayPos(index))
  }

  if (!destShape) return null

  const origFrame = CFH.getFrame(objects, origShape)
  const markerX = origFrame.x + position.x
  const markerY = origFrame.y + position.y
  const width = (destShape as any).width
  const height = (destShape as any).height
  const destX = (destShape as any).x
  const destY = (destShape as any).y

  const shapeWrapper = React.useMemo(
    () => Render.shapeWrapperFactory(objects),
    [objects]
  )

  const destShapeId = (destShape as any).id

  const thumbnailDataRef = React.useMemo(
    () => Refs.workspaceThumbnailById(destShapeId),
    [pageId, destShapeId]
  )
  const thumbnailData = MF.useDeref(thumbnailDataRef)

  let finalDestShape = destShape
  if (thumbnailData != null) {
    finalDestShape = { ...destShape, thumbnail: thumbnailData }
  }

  const handlePointerEnter = () => {
    hoverDisabled.current = true
  }

  const handlePointerLeave = () => {
    hoverDisabled.current = false
  }

  return (
    <g
      onPointerDown={startMovePosition}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <g
        transform={GMT.translateMatrix(GPT.point(-markerX + destX, -markerY + destY))}
      >
        <MF.Provider
          provide={Muc.renderThumbnails}
          value={true}
        >
          <MF.Provider provide={Embed.context} value={false}>
            {shapeWrapper({ shape: finalDestShape })}
          </MF.Provider>
        </MF.Provider>
      </g>
      <path
        stroke='var(--color-accent-tertiary)'
        fill='var(--app-black)'
        fillOpacity={0.5}
        strokeWidth={1}
        d={`M ${markerX} ${markerY} h ${width} v ${height} h -${width} z M ${markerX} ${markerY} l ${width} ${height} M ${markerX} ${markerY + height} l ${width} -${height}`}
      />
      <circle
        cx={markerX + width / 2}
        cy={markerY + height / 2}
        r={8}
        fill='var(--color-accent-tertiary)'
      />
    </g>
  )
}

interface InteractionsProps {
  currentTransform: any
  objects: any
  zoom: number
  selected: Set<any>
  hoverDisabled: React.MutableRefObject<boolean>
  pageId: string
}

export const Interactions: React.FC<InteractionsProps> = ({
  currentTransform,
  objects,
  zoom,
  selected,
  hoverDisabled,
  pageId,
}) => {
  const activeShapes = Object.values(objects).filter(
    (shape: any) => (shape as any).interactions?.length > 0
  )

  const selectedShapes = [...selected].map((id) => objects[id])

  const {
    editingInteractionIndex,
    drawInteractionTo,
    drawInteractionToFrame,
    moveOverlayTo,
    moveOverlayIndex,
  } = MF.useDeref(interactionsRef) || {}

  const firstSelected = selectedShapes[0]

  const calcLevel = (index: number, interactions: any[]) => {
    return interactions.slice(0, index).filter((i) => !i.destination).length
  }

  return (
    <g className='interactions'>
      <g className='non-selected'>
        {activeShapes.map((shape: any) =>
          (shape as any).interactions.map((interaction: any, index: number) => {
            const destShape = CTSI.destination(interaction)
              ? objects[interaction.destination]
              : null
            const isSelected = selected.has((shape as any).id)
            const level = calcLevel(index, (shape as any).interactions)

            if (isSelected) return null

            return (
              <InteractionPath
                key={`non-selected-${(shape as any).id}-${index}`}
                index={index}
                level={level}
                origShape={shape}
                destShape={destShape}
                selected={selected}
                selected={false}
                actionType={interaction['action-type']}
                zoom={zoom}
              />
            )
          })
        )}
      </g>

      <g className='selected'>
        {drawInteractionTo && firstSelected && (
          <InteractionPath
            key='interactive'
            index={0}
            origShape={firstSelected}
            destPoint={drawInteractionTo}
            destShape={drawInteractionToFrame}
            selected={selected}
            selected={true}
            actionType='navigate'
            zoom={zoom}
          />
        )}

        {selectedShapes.map((shape: any) => {
          if ((shape as any).interactions?.length > 0) {
            return (shape as any).interactions.map((interaction: any, index: number) => {
              if (index === editingInteractionIndex) return null

              const destShape = CTSI.destination(interaction)
                ? objects[interaction.destination]
                : null
              const level = calcLevel(index, (shape as any).interactions)

              return (
                <g key={`interaction-path-${(shape as any).id}-${index}`}>
                  <InteractionPath
                    index={index}
                    level={level}
                    origShape={shape}
                    destShape={destShape}
                    selected={selected}
                    selected={true}
                    actionType={interaction['action-type']}
                    zoom={zoom}
                  />
                  {(interaction['action-type'] === 'open-overlay' ||
                    interaction['action-type'] === 'toggle-overlay') &&
                    interaction['overlay-pos-type'] === 'manual' && (
                      <OverlayMarker
                        pageId={pageId}
                        index={index}
                        origShape={shape}
                        destShape={destShape}
                        position={
                          moveOverlayTo != null && moveOverlayIndex === index
                            ? moveOverlayTo
                            : interaction['overlay-position']
                        }
                        objects={objects}
                        hoverDisabled={hoverDisabled}
                      />
                    )}
                </g>
              )
            })
          }

          if (
            shape &&
            !CFH.unframedShape(shape) &&
            currentTransform !== 'move' &&
            currentTransform !== 'rotate'
          ) {
            return (
              <InteractionHandle
                key={(shape as any).id}
                index={0}
                shape={shape}
                selected={selected}
                zoom={zoom}
              />
            )
          }

          return null
        })}
      </g>
    </g>
  )
}
