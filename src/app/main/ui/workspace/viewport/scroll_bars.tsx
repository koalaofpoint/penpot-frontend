// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as CFH from 'app/common/files/helpers'
import * as GRC from 'app/common/geom/rect'
import * as GSH from 'app/common/geom/shapes'
import * as CLR from 'app/common/types/color'
import * as DW from 'app/main/data/workspace'
import { Store } from 'app/main/store'
import { pointToViewport } from 'app/main/ui/workspace/viewport/viewport_ref'
import * as DOM from 'app/util/dom'
import * as MF from 'rumext.v2'
import React from 'react'

const SCROLL_X = 10
const SCROLL_Y = 10
const SCROLL_HEIGHT = SCROLL_X + 4
const SCROLL_WIDTH = SCROLL_Y + 4
const OTHER_X = 26
const OTHER_Y = 26
const OTHER_WIDTH = 100
const OTHER_HEIGHT = 100

interface ViewportScrollbarsProps {
  objects: any
  zoom: number
  vbox: any
  bottomPadding?: number
}

export const ViewportScrollbars: React.FC<ViewportScrollbarsProps> = ({
  objects,
  zoom,
  vbox,
  bottomPadding,
}) => {
  const [vScrolling, setVScrolling] = React.useState(false)
  const [hScrolling, setHScrolling] = React.useState(false)

  const startRef = MF.useRef(null)
  const vScrollbarYRef = MF.useRef(null)
  const hScrollbarXRef = MF.useRef(null)
  const vScrollbarYPaddingRef = MF.useRef(null)
  const hScrollbarXPaddingRef = MF.useRef(null)
  const scrollbarHeightRef = MF.useRef(null)
  const scrollbarWidthRef = MF.useRef(null)
  const heightFactorRef = MF.useRef(null)
  const widthFactorRef = MF.useRef(null)
  const vboxYRef = MF.useRef(null)
  const vboxXRef = MF.useRef(null)

  const vboxX = (vbox as any).x
  const vboxY = (vbox as any).y

  const baseObjectsRect = React.useMemo(() => {
    const children = CFH.getImmediateChildren(objects)
    return GSH.shapesIntoRect(children)
  }, [objects])

  const vboxWithPadding = bottomPadding
    ? { ...vbox, height: (vbox as any).height - bottomPadding / zoom }
    : vbox

  const invZoom = 1 / zoom
  const vboxHeight = (vboxWithPadding as any).height - invZoom * SCROLL_HEIGHT
  const vboxWidth = (vboxWithPadding as any).width - invZoom * SCROLL_WIDTH

  const topOffset = Math.max(
    0,
    (-vboxY - (baseObjectsRect as any).y) * vboxHeight / (baseObjectsRect as any).height
  )

  const leftOffset = Math.max(
    0,
    (-vboxX - (baseObjectsRect as any).x) * vboxWidth / (baseObjectsRect as any).width
  )

  const bottomOffset = Math.max(
    0,
    ((baseObjectsRect as any).y2 - (vboxY + vboxHeight)) * vboxHeight / (baseObjectsRect as any).height
  )

  const rightOffset = Math.max(
    0,
    ((baseObjectsRect as any).x2 - (vboxX + vboxWidth)) * vboxWidth / (baseObjectsRect as any).width
  )

  const showVScroll =
    vScrolling || topOffset > 0 || bottomOffset > 0
  const showHScroll =
    hScrolling || leftOffset > 0 || rightOffset > 0

  const vScrollbarX = vboxX + (vbox as any).width - invZoom * SCROLL_X
  let vScrollbarY = vboxY + topOffset

  let scrollbarHeight = vboxY + vboxHeight - bottomOffset - vScrollbarY
  scrollbarHeight = vScrolling
    ? MF.refVal(scrollbarHeightRef) ?? scrollbarHeight
    : scrollbarHeight
  scrollbarHeight = Math.max(scrollbarHeight, invZoom * OTHER_HEIGHT)

  let hScrollbarY = vboxY + (vbox as any).height - invZoom * SCROLL_Y
  let scrollbarWidth = vboxX + vboxWidth - rightOffset - vScrollbarX - leftOffset
  scrollbarWidth = hScrolling
    ? MF.refVal(scrollbarWidthRef) ?? scrollbarWidth
    : scrollbarWidth
  scrollbarWidth = Math.max(scrollbarWidth, invZoom * OTHER_WIDTH)

  const onPointerMove = React.useCallback(
    (event: any, axis: 'x' | 'y') => {
      const startPt = MF.refVal(startRef)
      if (!startPt) return

      const currentPt = DOM.getClientPosition(event)
      const currentPtViewport = pointToViewport(currentPt)
      const yDelta =
        ((MF.refVal(heightFactorRef) as number) *
          ((currentPt as any).y - (startPt as any).y)) /
        zoom
      const xDelta =
        ((MF.refVal(widthFactorRef) as number) *
          ((currentPt as any).x - (startPt as any).x)) /
        zoom

      const newVScrollbarY = (currentPtViewport as any).y + (MF.refVal(vScrollbarYPaddingRef) as number)
      const newHScrollbarX = (currentPtViewport as any).x + (MF.refVal(hScrollbarXPaddingRef) as number)

      const viewportUpdate: any = {}
      if (axis === 'y') {
        viewportUpdate.y = (y: number) => y + yDelta
      } else {
        viewportUpdate.x = (x: number) => x + xDelta
      }

      MF.setRefVal!(vboxYRef, vboxY)
      MF.setRefVal!(vboxXRef, vboxX)
      Store.emit(DW.updateViewportPosition(viewportUpdate))
      MF.setRefVal!(vScrollbarYRef, newVScrollbarY)
      MF.setRefVal!(hScrollbarXRef, newHScrollbarX)
      MF.setRefVal!(startRef, currentPt)
    },
    [zoom, vboxY, vboxX]
  )

  const onPointerDown = React.useCallback(
    (event: any, axis: 'x' | 'y') => {
      const startPt = DOM.getClientPosition(event)
      const viewportPoint = pointToViewport(startPt)
      const newHScrollbarX = (viewportPoint as any).x
      const newVScrollbarY = (viewportPoint as any).y

      const vScrollbarYPadding = vScrollbarY - newVScrollbarY
      const hScrollbarXPadding = vScrollbarX - newHScrollbarX

      const vboxRect = {
        x: vboxX,
        y: vboxY,
        x1: vboxX,
        y1: vboxY,
        x2: vboxX + (vbox as any).width,
        y2: vboxY + (vbox as any).height,
        width: (vbox as any).width,
        height: (vbox as any).height,
      }

      const containingRect = GRC.joinRects([baseObjectsRect, vboxRect])
      const heightFactor = (containingRect as any).height / vboxHeight
      const widthFactor = (containingRect as any).width / vboxWidth

      MF.setRefVal!(startRef, startPt)
      MF.setRefVal!(vScrollbarYPaddingRef, vScrollbarYPadding)
      MF.setRefVal!(hScrollbarXPaddingRef, hScrollbarXPadding)
      MF.setRefVal!(vScrollbarYRef, newVScrollbarY + vScrollbarYPadding)
      MF.setRefVal!(hScrollbarXRef, newHScrollbarX + hScrollbarXPadding)
      MF.setRefVal!(vboxYRef, vboxY)
      MF.setRefVal!(vboxXRef, vboxX)
      MF.setRefVal!(scrollbarHeightRef, scrollbarHeight)
      MF.setRefVal!(scrollbarWidthRef, scrollbarWidth)
      MF.setRefVal!(heightFactorRef, heightFactor)
      MF.setRefVal!(widthFactorRef, widthFactor)

      if (axis === 'y') {
        setVScrolling(true)
      } else {
        setHScrolling(true)
      }
    },
    [vbox, vboxX, vboxY, vboxHeight, vboxWidth, scrollbarHeight, scrollbarWidth]
  )

  const onPointerUp = React.useCallback(() => {
    setVScrolling(false)
    setHScrolling(false)
  }, [])

  return (
    <>
      {showVScroll && (
        <g
          className='v-scroll'
          fill={CLR.black}
          data-testid='vertical-scrollbar'
        >
          <rect
            onPointerMove={(e) => onPointerMove(e, 'y')}
            onPointerDown={(e) => onPointerDown(e, 'y')}
            onPointerUp={onPointerUp}
            width={invZoom * 7}
            rx={invZoom * 3}
            ry={invZoom * 3}
            height={scrollbarHeight}
            fillOpacity={0.4}
            x={vScrollbarX}
            y={vScrollbarY}
            style={{ stroke: 'white', strokeWidth: 0.15 / zoom }}
          />
        </g>
      )}

      {showHScroll && (
        <g
          className='h-scroll'
          fill={CLR.black}
          data-testid='horizontal-scrollbar'
        >
          <rect
            onPointerMove={(e) => onPointerMove(e, 'x')}
            onPointerDown={(e) => onPointerDown(e, 'x')}
            onPointerUp={onPointerUp}
            width={scrollbarWidth}
            rx={invZoom * 3}
            ry={invZoom * 3}
            height={invZoom * 7}
            fillOpacity={0.4}
            x={hScrollbarX}
            y={hScrollbarY}
            style={{ stroke: 'white', strokeWidth: 0.15 / zoom }}
          />
        </g>
      )}
    </>
  )
}
