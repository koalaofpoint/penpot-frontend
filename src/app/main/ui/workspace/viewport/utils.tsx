// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as DM from 'app/common/data/macros'
import * as GPT from 'app/common/geom/point'
import * as MTH from 'app/common/math'
import * as CUR from 'app/main/ui/css-cursors'
import { formatNumber } from 'app/main/ui/formats'

export function formatViewbox(vbox: any): string {
  return `${formatNumber(vbox.x ?? 0)} ${formatNumber(vbox.y ?? 0)} ${formatNumber(vbox.width ?? 0)} ${formatNumber(vbox.height ?? 0)}`
}

export function getCursor(cursor: string): string {
  switch (cursor) {
    case 'hand': return CUR.getStatic('hand')
    case 'comments': return CUR.getStatic('comments')
    case 'create-artboard': return CUR.getStatic('create-artboard')
    case 'create-rectangle': return CUR.getStatic('create-rectangle')
    case 'create-ellipse': return CUR.getStatic('create-ellipse')
    case 'pen': return CUR.getStatic('pen')
    case 'pencil': return CUR.getStatic('pencil')
    case 'create-shape': return CUR.getStatic('create-shape')
    case 'duplicate': return CUR.getStatic('duplicate')
    case 'zoom': return CUR.getStatic('zoom')
    case 'zoom-in': return CUR.getStatic('zoom-in')
    case 'zoom-out': return CUR.getStatic('zoom-out')
    default: return CUR.getStatic('pointer-inner')
  }
}

// Ensure that the label has always the same font
// size, regardless of zoom
// https://css-tricks.com/transforms-on-svg-elements/
export function textTransform({ x, y }: any, zoom: number): string {
  const invZoom = 1 / zoom
  return DM.fmt('scale(%, %) translate(%, %)', invZoom, invZoom, zoom * x, zoom * y)
}

function left(cur: any, cand: any): any {
  const closex = MTH.close((cand as any).x, (cur as any).x, 0.01)
  if (closex && (cand as any).y < (cur as any).y) return cand
  if (closex) return cur
  if ((cand as any).x < (cur as any).x) return cand
  return cur
}

function top(cur: any, cand: any): any {
  const closey = MTH.close((cand as any).y, (cur as any).y)
  if (closey && (cand as any).x < (cur as any).x) return cand
  if (closey) return cur
  if ((cand as any).y < (cur as any).y) return cand
  return cur
}

function right(cur: any, cand: any): any {
  const closex = MTH.close((cand as any).x, (cur as any).x)
  if (closex && (cand as any).y < (cur as any).y) return cand
  if (closex) return cur
  if ((cand as any).x > (cur as any).x) return cand
  return cur
}

export function titleTransform(shape: any, zoom: number, gridEdition?: boolean): string | null {
  const points = shape.points
  if (!points) return null

  const leftmost = points.reduce(left)
  const topmost = points.filter((p: any) => p !== leftmost).reduce(top)
  const rightmost = points.filter((p: any) => p !== leftmost && p !== topmost).reduce(right)

  if (!leftmost || !topmost || !rightmost) return null

  const leftTop = GPT.toVec(leftmost, topmost)
  const leftTopAngle = GPT.angle(leftTop)

  const topRight = GPT.toVec(topmost, rightmost)
  const topRightAngle = GPT.angle(topRight)

  // Choose the position that creates the less angle between left-side and top-side
  let [labelPos, angle, hPos, vPos] =
    Math.abs(leftTopAngle) < Math.abs(topRightAngle)
      ? [leftmost, leftTopAngle, leftTop, GPT.perpendicular(leftTop)]
      : [topmost, topRightAngle, topRight, GPT.perpendicular(topRight)]

  const deltaX = gridEdition ? 40 : 0
  const deltaY = gridEdition ? 50 : 10

  labelPos = GPT.subtract(
    GPT.subtract(labelPos, GPT.scale(GPT.unit(vPos), deltaY / zoom)),
    GPT.scale(GPT.unit(hPos), deltaX / zoom)
  )

  return DM.fmt(
    'rotate(% %,%) scale(%, %) translate(%, %)',
    angle,
    (labelPos as any).x,
    (labelPos as any).y,
    1 / zoom,
    1 / zoom,
    zoom * (labelPos as any).x,
    zoom * (labelPos as any).y
  )
}
