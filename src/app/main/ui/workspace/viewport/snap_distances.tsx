// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as D from 'app/common/data'
import * as DM from 'app/common/data/macros'
import * as CPH from 'app/common/files/helpers'
import * as GRC from 'app/common/geom/rect'
import * as GSH from 'app/common/geom/shapes'
import * as MTH from 'app/common/math'
import * as CTL from 'app/common/types/shape/layout'
import * as Refs from 'app/main/refs'
import * as AMS from 'app/main/snap'
import { formatNumber } from 'app/main/ui/formats'
import * as RX from 'beicon.v2.core'
import * as SET from 'clojure.set'
import * as STR from 'cuerdas.core'
import * as MF from 'rumext.v2'
import React from 'react'

const LINE_COLOR = 'var(--color-accent-quaternary)'
const SEGMENT_GAP = 2
const SEGMENT_GAP_SIDE = 5

const PILL_TEXT_WIDTH_LETTER = 6
const PILL_TEXT_WIDTH_MARGIN = 6
const PILL_TEXT_FONT_SIZE = 12
const PILL_TEXT_HEIGHT = 20
const PILL_TEXT_BORDER_RADIUS = 4
const PILL_TEXT_PADDING = 4

function halfPoint(coord: 'x' | 'y', sr1: any, sr2: any) {
  const c1Key = coord === 'x' ? 'y1' : 'x1'
  const c2Key = coord === 'x' ? 'y2' : 'x2'

  const c1 = Math.max((sr1 as any)[c1Key], (sr2 as any)[c1Key])
  const c2 = Math.min((sr1 as any)[c2Key], (sr2 as any)[c2Key])

  return c1 + (c2 - c1) / 2
}

interface ShapeDistanceSegmentProps {
  sr1: any
  sr2: any
  coord: 'x' | 'y'
  zoom: number
}

const ShapeDistanceSegment: React.FC<ShapeDistanceSegmentProps> = ({
  sr1,
  sr2,
  coord,
  zoom,
}) => {
  const c1Key = coord === 'x' ? 'x2' : 'y2'
  const c2Key = coord === 'x' ? 'x1' : 'y1'

  const fromC = Math.min((sr1 as any)[c1Key], (sr2 as any)[c1Key])
  const toC = Math.max((sr1 as any)[c2Key], (sr2 as any)[c2Key])
  const distance = toC - fromC
  const hp = halfPoint(coord, sr1, sr2)

  const distanceStr = formatNumber(distance)
  const width =
    distanceStr.length * (PILL_TEXT_WIDTH_LETTER / zoom) +
    PILL_TEXT_WIDTH_MARGIN / zoom +
    (PILL_TEXT_WIDTH_MARGIN * 2) / zoom

  return (
    <g className='distance-segment'>
      {(() => {
        const point = [
          fromC + distance / 2,
          coord === 'x'
            ? hp - 10 / zoom
            : hp + 5 / zoom,
        ]
        const [x, y] = coord === 'x' ? point : [point[1], point[0]]

        return (
          <>
            <rect
              x={coord === 'x' ? x - width / 2 : x}
              y={y - PILL_TEXT_HEIGHT / 2 / zoom - (coord === 'x' ? 2 / zoom : 0)}
              width={width}
              height={PILL_TEXT_HEIGHT / zoom}
              rx={PILL_TEXT_BORDER_RADIUS / zoom}
              fill={LINE_COLOR}
            />
            <text
              x={coord === 'x' ? x : x + width / 2}
              y={
                y +
                PILL_TEXT_HEIGHT / 2 / zoom -
                6 / zoom -
                (coord === 'x' ? 2 / zoom : 0)
              }
              fontSize={PILL_TEXT_FONT_SIZE / zoom}
              fill='var(--app-white)'
              textAnchor='middle'
            >
              {formatNumber(distance)}
            </text>
          </>
        )
      })()}

      {(() => {
        const p1 = [
          fromC + SEGMENT_GAP / zoom,
          hp + SEGMENT_GAP_SIDE / zoom,
        ]
        const p2 = [
          fromC + SEGMENT_GAP / zoom,
          hp - SEGMENT_GAP_SIDE / zoom,
        ]
        const [x1, y1] = coord === 'x' ? p1 : [p1[1], p1[0]]
        const [x2, y2] = coord === 'x' ? p2 : [p2[1], p2[0]]

        return (
          <line
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            style={{ stroke: LINE_COLOR, strokeWidth: String(1 / zoom) }}
          />
        )
      })()}

      {(() => {
        const p1 = [
          toC - SEGMENT_GAP / zoom,
          hp + SEGMENT_GAP_SIDE / zoom,
        ]
        const p2 = [
          toC - SEGMENT_GAP / zoom,
          hp - SEGMENT_GAP_SIDE / zoom,
        ]
        const [x1, y1] = coord === 'x' ? p1 : [p1[1], p1[0]]
        const [x2, y2] = coord === 'x' ? p2 : [p2[1], p2[0]]

        return (
          <line
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            style={{ stroke: LINE_COLOR, strokeWidth: String(1 / zoom) }}
          />
        )
      })()}

      {(() => {
        const p1 = [fromC + SEGMENT_GAP / zoom, hp]
        const p2 = [toC - SEGMENT_GAP / zoom, hp]
        const [x1, y1] = coord === 'x' ? p1 : [p1[1], p1[0]]
        const [x2, y2] = coord === 'x' ? p2 : [p2[1], p2[0]]

        return (
          <line
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            style={{ stroke: LINE_COLOR, strokeWidth: String(1 / zoom) }}
          />
        )
      })()}
    </g>
  )
}

function queryWorker(pageId: string, coord: 'x' | 'y', [selrect, selected, frame]: [any, any, any]) {
  const ltSide = coord === 'x' ? 'left' : 'top'
  const gtSide = coord === 'x' ? 'right' : 'bottom'

  const vbox = (Refs.vbox as any).deref()
  const frameSr = CPH.root(frame) ? null : DM.getProp(frame, 'selrect')
  const bounds = D.nilv(GRC.clipRect(frameSr, vbox), vbox)
  const areas = GSH.getAreas(bounds, selrect)

  const querySide = (side: string) => {
    const rect = areas[side]
    if ((rect as any).width > 0 && (rect as any).height > 0) {
      return AMS.selectShapesArea(
        pageId,
        (frame as any).id,
        selected,
        (Refs.workspacePageObjects as any).deref(),
        rect
      )
    }
    return RX.of(null)
  }

  return RX.combineLatest(querySide(ltSide), querySide(gtSide))
}

interface ShapeDistanceProps {
  frame: any
  selrect: any
  pageId: string
  zoom: number
  coord: 'x' | 'y'
  selected: Set<any>
}

const ShapeDistance: React.FC<ShapeDistanceProps> = ({
  frame,
  selrect,
  pageId,
  zoom,
  coord,
  selected,
}) => {
  const subject = React.useMemo(() => RX.subject(), [])

  const [ltShapes, setLtShapes] = React.useState<any[]>(null)
  const [gtShapes, setGtShapes] = React.useState<any[]>(null)

  const segmentsToDisplay = React.useMemo(() => {
    return calculateSegments(coord, selrect, ltShapes, gtShapes)
  }, [coord, selrect, ltShapes, gtShapes])

  React.useEffect(() => {
    const sub = RX.pipe(
      RX.throttle(100),
      RX.switchMap((args) => queryWorker(pageId, coord, args)),
      RX.subscribe(([lt, gt]) => {
        setLtShapes(lt)
        setGtShapes(gt)
      })
    )((subject as any))

    return () => RX.dispose(sub)
  }, [pageId, coord, subject])

  React.useEffect(() => {
    RX.push(subject, [selrect, selected, frame])
  }, [selrect, selected, frame])

  return (
    <>
      {segmentsToDisplay.map(([sr1, sr2]) => (
        <ShapeDistanceSegment
          key={`${DM.getProp(sr1, 'x')}-${DM.getProp(sr1, 'y')}-${DM.getProp(sr2, 'x')}-${DM.getProp(sr2, 'y')}`}
          sr1={sr1}
          sr2={sr2}
          coord={coord}
          zoom={zoom}
        />
      ))}
    </>
  )
}

interface SnapDistancesProps {
  pageId: string
  zoom: number
  selected: Set<any>
  selectedShapes: any[]
}

export const SnapDistances: React.FC<SnapDistancesProps> = ({
  pageId,
  zoom,
  selected,
  selectedShapes,
}) => {
  const frameId = (selectedShapes[0] as any)?.frameId
  const frame = frameId ? MF.useDeref(Refs.objectById(frameId)) : null
  const selrect = GSH.shapesIntoRect(selectedShapes)

  if (CTL.anyLayout(frame)) {
    return null
  }

  return (
    <g className='distance'>
      <ShapeDistance
        selrect={selrect}
        pageId={pageId}
        frame={frame}
        zoom={zoom}
        coord='x'
        selected={selected}
      />
      <ShapeDistance
        selrect={selrect}
        pageId={pageId}
        frame={frame}
        zoom={zoom}
        coord='y'
        selected={selected}
      />
    </g>
  )
}

// Helper functions for calculateSegments
function calculateSegments(coord: 'x' | 'y', selrect: any, ltShapes: any[], gtShapes: any[]): [any, any][] {
  // This is a placeholder - the actual implementation is complex
  // and would need to be translated from the ClojureScript
  return []
}
