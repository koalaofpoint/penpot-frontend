// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as DM from "app/common/data.macros"
import { getStatic } from "app/main/ui/css-cursors"
import { formatNumber } from "app/main/ui/formats"
import * as GPT from "app/common/geom/point"

export function formatViewbox(vbox: any): string {
  return DM.str(
    formatNumber(vbox.x || 0),
    " ",
    formatNumber(vbox.y || 0),
    " ",
    formatNumber(vbox.width || 0),
    " ",
    formatNumber(vbox.height || 0)
  )
}

export function getCursor(cursor: string): string {
  switch (cursor) {
    case "hand": return getStatic("hand")
    case "comments": return getStatic("comments")
    case "create-artboard": return getStatic("create-artboard")
    case "create-rectangle": return getStatic("create-rectangle")
    case "create-ellipse": return getStatic("create-ellipse")
    case "pen": return getStatic("pen")
    case "pencil": return getStatic("pencil")
    case "create-shape": return getStatic("create-shape")
    case "duplicate": return getStatic("duplicate")
    case "zoom": return getStatic("zoom")
    case "zoom-in": return getStatic("zoom-in")
    case "zoom-out": return getStatic("zoom-out")
    default: return getStatic("pointer-inner")
  }
}

export function textTransform(point: { x: number, y: number }, zoom: number): string {
  const invZoom = 1 / zoom
  return DM.str("scale(" + invZoom + ", " + invZoom + ") translate(" + (zoom * point.x) + ", " + (zoom * point.y) + ")")
}

function closeX(cand: GPT.Point, cur: GPT.Point, tolerance = 0.01): boolean {
  return Math.abs(cand.x - cur.x) < tolerance
}

function closeY(cand: GPT.Point, cur: GPT.Point, tolerance = 0.01): boolean {
  return Math.abs(cand.y - cur.y) < tolerance
}

export function left(cur: GPT.Point, cand: GPT.Point): GPT.Point {
  if (closeX(cand, cur) && cand.y < cur.y) return cand
  if (closeX(cand, cur)) return cur
  if (cand.x < cur.x) return cand
  return cur
}

export function top(cur: GPT.Point, cand: GPT.Point): GPT.Point {
  if (closeY(cand, cur) && cand.x < cur.x) return cand
  if (closeY(cand, cur)) return cur
  if (cand.y < cur.y) return cand
  return cur
}

export function right(cur: GPT.Point, cand: GPT.Point): GPT.Point {
  if (closeX(cand, cur) && cand.y < cur.y) return cand
  if (closeX(cand, cur)) return cur
  if (cand.x > cur.x) return cand
  return cur
}

export function titleTransform(shape: any, zoom: number, gridEdition?: boolean): string | null {
  const points = shape.points
  if (!points || points.length === 0) return null

  let leftmost = points.reduce(left)
  let topmost = points.filter((p: GPT.Point) => p !== leftmost).reduce(top)
  let rightmost = points.filter((p: GPT.Point) => p !== leftmost && p !== topmost).reduce(right)

  if (!leftmost || !topmost || !rightmost) return null

  const leftTop = GPT.toVec(leftmost, topmost)
  const leftTopAngle = GPT.angle(leftTop)

  const topRight = GPT.toVec(topmost, rightmost)
  const topRightAngle = GPT.angle(topRight)

  let labelPos: GPT.Point
  let angle: number
  let hPos: GPT.Point
  let vPos: GPT.Point

  if (Math.abs(leftTopAngle) < Math.abs(topRightAngle)) {
    labelPos = leftmost
    angle = leftTopAngle
    hPos = leftTop
    vPos = GPT.perpendicular(leftTop)
  } else {
    labelPos = topmost
    angle = topRightAngle
    hPos = topRight
    vPos = GPT.perpendicular(topRight)
  }

  const deltaX = gridEdition ? 40 : 0
  const deltaY = gridEdition ? 50 : 10

  labelPos = GPT.subtract(
    labelPos,
    GPT.subtract(
      GPT.scale(GPT.unit(vPos), deltaY / zoom),
      GPT.scale(GPT.unit(hPos), deltaX / zoom)
    )
  )

  return "rotate(" + angle + " " + labelPos.x + "," + labelPos.y + ") scale(" + (1 / zoom) + ", " + (1 / zoom) + ") translate(" + (zoom * labelPos.x) + ", " + (zoom * labelPos.y) + ")"
}
