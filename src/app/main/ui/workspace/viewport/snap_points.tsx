// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as D from 'app/common/data'
import * as DM from 'app/common/data/macros'
import * as CFH from 'app/common/files/helpers'
import * as GSH from 'app/common/geom/shapes'
import * as SP from 'app/common/geom/snap'
import * as CTL from 'app/common/types/shape/layout'
import * as SNAP from 'app/main/snap'
import * as RX from 'beicon.v2.core'
import * as MF from 'rumext.v2'
import React from 'react'

const LINE_COLOR = 'var(--color-accent-quaternary)'
const LINE_OPACITY = 0.6
const LINE_WIDTH = 1

interface SnapPointProps {
  point: any
  zoom: number
}

const SnapPoint: React.FC<SnapPointProps> = ({ point, zoom }) => {
  const { x, y } = point
  const crossWidth = 3 / zoom

  return (
    <g>
      <line
        x1={x - crossWidth}
        y1={y - crossWidth}
        x2={x + crossWidth}
        y2={y + crossWidth}
        style={{ stroke: LINE_COLOR, strokeWidth: String(LINE_WIDTH / zoom) }}
      />
      <line
        x1={x - crossWidth}
        y1={y + crossWidth}
        x2={x + crossWidth}
        y2={y - crossWidth}
        style={{ stroke: LINE_COLOR, strokeWidth: String(LINE_WIDTH / zoom) }}
      />
    </g>
  )
}

interface SnapLineProps {
  snap: any
  point: any
  zoom: number
}

const SnapLine: React.FC<SnapLineProps> = ({ snap, point, zoom }) => {
  return (
    <line
      x1={(snap as any).x}
      y1={(snap as any).y}
      x2={(point as any).x}
      y2={(point as any).y}
      style={{ stroke: LINE_COLOR, strokeWidth: String(LINE_WIDTH / zoom) }}
      opacity={LINE_OPACITY}
    />
  )
}

function getSnap(coord: 'x' | 'y', { shapes, pageId, removeSnap, zoom }: any) {
  const bounds = GSH.shapesIntoRect(shapes)
  const frameId = SNAP.snapFrameId(shapes)

  return RX.pipe(
    RX.of(bounds),
    RX.mergeMap((bounds: any) =>
      SP.rectToSnapPoints(bounds).map((pt: any) => [frameId, pt])
    ),
    RX.mergeMap(([frameId, point]: [any, any]) =>
      SNAP.getSnapPoints(pageId, frameId, removeSnap, zoom, point, coord).pipe(
        RX.map((result: any) => result.map((r: any) => r.pt)),
        RX.map((pts: any) => [point, pts, coord])
      )
    ),
    RX.reduce((acc: any, item: any) => [...acc, item], [])
  )
}

function flipCoord(coord: 'x' | 'y'): 'x' | 'y' {
  return coord === 'x' ? 'y' : 'x'
}

function addPointToSnaps([point, snaps, coord]: [any, any[], 'x' | 'y']) {
  const normalizeCoord = (p: any) => ({ ...p, [coord]: (point as any)[coord] })
  return [point, ...snaps.map(normalizeCoord)]
}

function processSnapLines(snaps: any[], coord: 'x' | 'y') {
  return snaps
    .filter((s) => s[2] === coord)
    .flatMap(addPointToSnaps)
    .flat()
    .reduce((groups, item) => {
      const key = item[coord]
      if (!groups[key]) groups[key] = []
      groups[key].push(item[flipCoord(coord)])
      return groups
    }, {})
}

interface SnapFeedbackProps {
  shapes: any[]
  removeSnap?: any
  zoom: number
  modifiers?: any
}

const SnapFeedback: React.FC<SnapFeedbackProps> = ({
  shapes,
  removeSnap,
  zoom,
  modifiers,
}) => {
  const [state, setState] = React.useState<any[]>([])
  const subject = React.useMemo(() => RX.subject(), [])

  const snapPoints = React.useMemo(() => {
    const allPoints = state.flatMap(addPointToSnaps)
    return new Set(allPoints)
  }, [state])

  const snapLines = React.useMemo(() => {
    const linesX = processSnapLines(state, 'x')
    const linesY = processSnapLines(state, 'y')
    return new Set([...Object.entries(linesX), ...Object.entries(linesY)])
  }, [state])

  React.useEffect(() => {
    const sub = RX.pipe(
      RX.switchMap((props: any) =>
        RX.combineLatest(getSnap('y', props), getSnap('x', props))
      ),
      RX.map((result: any) => D.concatVec(...result)),
      RX.subscribe((data: any) => {
        const filtered = data.filter(([, snaps]: [any, any]) => snaps.length > 0)
        setState(filtered)
      })
    )((subject as any), { shapes, removeSnap, zoom, modifiers })

    return () => RX.dispose(sub)
  }, [subject, shapes, removeSnap, zoom, modifiers])

  React.useEffect(() => {
    RX.push(subject, { shapes, removeSnap, zoom, modifiers })
  }, [subject, shapes, removeSnap, modifiers])

  return (
    <g className='snap-feedback'>
      {[...snapLines].map(([fixedv, minv, maxv]) => {
        const fromPoint = { [fixedv]: minv, [flipCoord(fixedv)]: Math.min(minv, maxv) }
        const toPoint = { [fixedv]: minv, [flipCoord(fixedv)]: Math.max(minv, maxv) }
        return (
          <SnapLine
            key={`line-${fromPoint.x}-${fromPoint.y}-${toPoint.x}-${toPoint.y}`}
            snap={fromPoint}
            point={toPoint}
            zoom={zoom}
          />
        )
      })}

      {[...snapPoints].map((point: any) => (
        <SnapPoint
          key={`point-${(point as any).x}-${(point as any).y}`}
          point={point}
          zoom={zoom}
        />
      ))}
    </g>
  )
}

interface SnapPointsProps {
  layout: any
  zoom: number
  objects: any
  selected: Set<any>
  pageId: string
  drawing?: any
  focus?: Set<any>
}

export const SnapPoints: React.FC<SnapPointsProps> = ({
  layout,
  zoom,
  objects,
  selected,
  pageId,
  drawing,
  focus,
}) => {
  const shapes = React.useMemo(() => {
    return [...selected].map((id) => objects[id]).filter(Boolean)
  }, [objects, selected])

  const filterShapes = React.useMemo(() => {
    const children = selected.flatMap((id) => CFH.getChildrenIds(objects, id))
    return new Set([...selected, ...children])
  }, [objects, selected])

  const removeSnapBase = React.useMemo(() => {
    return SNAP.makeRemoveSnap(layout, filterShapes, objects, focus)
  }, [layout, filterShapes, objects, focus])

  const removeSnap = React.useCallback(
    ({ type, grid }: any) => {
      return (
        removeSnapBase({ type, grid }) ||
        (type === 'layout' && grid === 'square') ||
        type === 'guide'
      )
    },
    [removeSnapBase]
  )

  const shapesToUse = drawing ? [drawing] : shapes
  const frameId = SNAP.snapFrameId(shapesToUse)

  if (CTL.anyLayout(objects, frameId)) {
    return null
  }

  return (
    <SnapFeedback
      shapes={shapesToUse}
      pageId={pageId}
      removeSnap={removeSnap}
      zoom={zoom}
    />
  )
}
