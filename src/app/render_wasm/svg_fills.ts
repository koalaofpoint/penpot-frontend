// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from "app/common/data"
import * as dm from "app/common/data/macros"
import * as gpt from "app/common/geom/point"
import * as grc from "app/common/geom/rect"
import * as csvg from "app/common/svg"
import * as clr from "app/common/types/color"
import * as str from "cuerdas/core"

const urlFillPattern = /url\(\s*['"]?#([^)'\"]+)['"]?\s*\)/

function trimFillValue(value: any): string | null {
  let stringValue: string | null = null

  if (typeof value === "string") {
    stringValue = value
  } else if (typeof value === "number") {
    stringValue = String(value)
  } else if (value !== null && value !== undefined) {
    stringValue = String(value)
  }

  if (stringValue === null) return null

  const trimmed = str.trim(stringValue)
  if (!trimmed) return null

  return trimmed
}

function parseLength(value: any): number | null {
  if (value === null || value === undefined) return null
  if (typeof value === "number") return value

  const stringValue = trimFillValue(value)
  if (!stringValue) return null

  const percent = str.endsWith(stringValue, "%")
  const px = str.endsWith(stringValue, "px")
  let numeric: string

  if (percent) {
    numeric = stringValue.substring(0, stringValue.length - 1)
  } else if (px) {
    numeric = stringValue.substring(0, stringValue.length - 2)
  } else {
    numeric = stringValue
  }

  const parsed = d.parseDouble(numeric)
  if (parsed === null) return null

  if (percent) {
    return parsed / 100.0
  }
  return parsed
}

function parseOffset(value: any): number {
  const length = parseLength(value || 0) ?? 0
  return Math.max(0.0, Math.min(1.0, length))
}

function parseOpacity(value: any): number {
  const parsed = parseLength(value)
  return parsed !== null ? parsed : 1.0
}

function shapeToSelrect(shape: any): any {
  const selrect = dm.getProp(shape, "selrect")

  if (grc.rect(selrect)) return selrect
  if (typeof selrect === "object" && selrect !== null) {
    return grc.makeRect(selrect)
  }

  const x = dm.getProp(shape, "x") ?? 0
  const y = dm.getProp(shape, "y") ?? 0
  const width = Math.max(0.01, dm.getProp(shape, "width") ?? 1)
  const height = Math.max(0.01, dm.getProp(shape, "height") ?? 1)

  return grc.makeRect({ x, y, width, height })
}

function applySvgTransform(pt: any, svgTransform: any): any {
  if (!svgTransform) return pt
  return gpt.transform(pt, svgTransform)
}

function applyViewboxTransform(pt: any, viewbox: any, rect: any): any {
  if (!viewbox) return pt

  const svgX = viewbox.x
  const svgY = viewbox.y
  const svgWidth = viewbox.width
  const svgHeight = viewbox.height
  const rectWidth = Math.max(0.01, dm.getProp(rect, "width"))
  const rectHeight = Math.max(0.01, dm.getProp(rect, "height"))
  const originX = dm.getProp(rect, "x") ?? dm.getProp(rect, "x1") ?? 0
  const originY = dm.getProp(rect, "y") ?? dm.getProp(rect, "y1") ?? 0
  const scaleX = rectWidth / svgWidth
  const scaleY = rectHeight / svgHeight

  const transformedX = originX + (dm.getProp(pt, "x") - svgX) * scaleX
  const transformedY = originY + (dm.getProp(pt, "y") - svgY) * scaleY

  return gpt.point(transformedX, transformedY)
}

function normalizePoint(pt: any, units: string, shape: any): any {
  if (units !== "userspaceonuse") return pt

  const rect = shapeToSelrect(shape)
  const width = Math.max(0.01, dm.getProp(rect, "width"))
  const height = Math.max(0.01, dm.getProp(rect, "height"))
  const originX = dm.getProp(rect, "x") ?? dm.getProp(rect, "x1") ?? 0
  const originY = dm.getProp(rect, "y") ?? dm.getProp(rect, "y1") ?? 0
  const svgTransform = shape.svgTransform
  const viewbox = shape.svgViewbox

  const ptAfterSvgTransform = applySvgTransform(pt, svgTransform)
  const transformedPt = applyViewboxTransform(ptAfterSvgTransform, viewbox, rect)

  const normalizedX = (dm.getProp(transformedPt, "x") - originX) / width
  const normalizedY = (dm.getProp(transformedPt, "y") - originY) / height

  return gpt.point(normalizedX, normalizedY)
}

function normalizeAttrs(attrs: any): Record<string, any> {
  if (!attrs) return {}

  const result: Record<string, any> = {}
  for (const [k, v] of Object.entries(attrs)) {
    let key: string
    if (typeof k === "string") {
      key = k.toLowerCase()
    } else {
      key = String(k)
    }
    result[key] = v
  }
  return result
}

function idCandidates(id: any): any[] {
  const base: any = id

  const lower = typeof base === "string" ? base.toLowerCase() : null
  const kebab =
    base !== null
      ? str.replace(base, /([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
      : null

  const results: any[] = []
  if (typeof id === "string") results.push(id)
  if (typeof id === "string") results.push(id)
  results.push(base)
  if (base) results.push({}.constructor.name === "String" ? String(base) : null)
  if (lower) results.push(lower)
  if (lower) results.push(lower)
  if (kebab) results.push(kebab)
  if (kebab) results.push(kebab)

  return results.filter((v) => v !== null && v !== undefined && (typeof v !== "string" || v.length > 0))
}

function svgDefById(defs: any, id: any): any {
  for (const candidate of idCandidates(id)) {
    if (defs[candidate] !== undefined) {
      return defs[candidate]
    }
  }
  return undefined
}

function normalizeGradientId(value: any): string | null {
  const clean = trimFillValue(value)
  if (!clean) return null

  const without = clean.replace(/^#/, "")
  if (!without) return null

  return without
}

function attr(attrs: any, ...keys: string[]): any {
  for (const key of keys) {
    if (attrs[key] !== undefined) {
      return attrs[key]
    }
  }
  return undefined
}

function resolveGradientNode(shape: any, gradientId: any): any | null {
  const defs = dm.getProp(shape, "svg-defs")
  if (!defs || !gradientId) return null

  const chain: any[] = []
  const seen = new Set()

  let gid = gradientId
  while (true) {
    const normalized = normalizeGradientId(gid)
    if (!normalized || seen.has(normalized)) break
    seen.add(normalized)

    const node = svgDefById(defs, normalized)
    if (!node) break

    const attrs = normalizeAttrs(node.attrs)
    let tag: any = node.tag
    if (typeof tag === "string") {
      tag = tag
    } else if (typeof tag === "object" && tag !== null) {
      tag = tag
    }

    const content = node.content
    const href =
      attrs["xlinkhref"] ||
      attrs["xlink-href"] ||
      attrs["xlink:href"] ||
      attrs["href"]

    chain.push({ tag, attrs, content })

    if (!href) break
    gid = href
  }

  if (chain.length === 0) return null

  const combined = chain.reverse().reduce(
    (result, node) => {
      const tag = node.tag || result.tag
      const attrs = { ...result.attrs, ...node.attrs }
      const content = node.content || result.content
      return { tag, attrs, content }
    },
    { tag: null, attrs: {}, content: null }
  )

  if (!combined.tag) return null

  const validTags = ["linearGradient", "radialGradient"]
  if (!validTags.includes(combined.tag)) return null

  return {
    ...combined,
    content: combined.content || [],
  }
}

function parseGradientStop(stopNode: any): any | null {
  const attrs = normalizeAttrs(stopNode.attrs)
  const style = attrs.style ? csvg.parseStyle(attrs.style) : null

  let colorValue =
    attrs["stop-color"] ||
    attrs["stopcolor"] ||
    (style ? style["stop-color"] : null) ||
    (style ? style["stopColor"] : null)

  colorValue = trimFillValue(colorValue)
  if (colorValue === "currentcolor") colorValue = clr.black

  if (!clr.colorString(colorValue)) return null

  const color = clr.parse(colorValue)

  const opacity =
    attrs["stop-opacity"] ||
    attrs["stopopacity"] ||
    (style ? style["stop-opacity"] : null) ||
    (style ? style["stopOpacity"] : null)

  const offset = attrs.offset || "0"

  return {
    color,
    opacity: parseOpacity(opacity),
    offset: parseOffset(offset),
  }
}

function applyGradientTransform(points: any[], transform: any): any[] {
  if (!transform) return points
  const matrix = csvg.parseTransform(transform)
  return points.map((pt) => gpt.transform(pt, matrix))
}

function buildLinearGradient(shape: any, node: any): any | null {
  const units = (attr(node.attrs, "gradientunits", "gradient-units") || "objectBoundingBox").toLowerCase()
  const transform = attr(node.attrs, "gradienttransform", "gradient-transform")

  let x1 = parseLength(attr(node.attrs, "x1", "x")) ?? 0.0
  let y1 = parseLength(attr(node.attrs, "y1", "y")) ?? 0.0
  let x2 = parseLength(attr(node.attrs, "x2", "x")) ?? 1.0
  let y2 = parseLength(attr(node.attrs, "y2", "y")) ?? 0.0

  const stops = node.content
    .filter((n: any) => n.tag === "stop")
    .map((n: any) => parseGradientStop(n))
    .filter((s: any) => s !== null)

  if (stops.length === 0) return null

  const points = applyGradientTransform([gpt.point(x1, y1), gpt.point(x2, y2)], transform)
  const [start, end] = points.map((pt) => normalizePoint(pt, units, shape))

  return {
    type: "linear",
    startX: dm.getProp(start, "x"),
    startY: dm.getProp(start, "y"),
    endX: dm.getProp(end, "x"),
    endY: dm.getProp(end, "y"),
    width: 1,
    stops,
  }
}

function buildRadialGradient(shape: any, node: any): any | null {
  const units = (attr(node.attrs, "gradientunits", "gradient-units") || "objectBoundingBox").toLowerCase()
  const transform = attr(node.attrs, "gradienttransform", "gradient-transform")

  let cx = parseLength(attr(node.attrs, "cx", "fx")) ?? 0.5
  let cy = parseLength(attr(node.attrs, "cy", "fy")) ?? 0.5
  let r = parseLength(node.attrs["r"]) ?? 0.5

  const stops = node.content
    .filter((n: any) => n.tag === "stop")
    .map((n: any) => parseGradientStop(n))
    .filter((s: any) => s !== null)

  if (stops.length === 0) return null

  const points = applyGradientTransform(
    [gpt.point(cx, cy), gpt.point(cx + r, cy), gpt.point(cx, cy + r)],
    transform
  )

  const [center, pointX, pointY] = points.map((pt) => normalizePoint(pt, units, shape))

  const radiusX = gpt.distance(center, pointX)
  const radiusY = gpt.distance(center, pointY)

  const baseRadius = radiusY > 0 ? radiusY : radiusX
  const radiusPoint = radiusY > 0 ? pointY : pointX
  const width = radiusX / Math.max(baseRadius, 1.0e-6)

  return {
    type: "radial",
    startX: dm.getProp(center, "x"),
    startY: dm.getProp(center, "y"),
    endX: dm.getProp(radiusPoint, "x"),
    endY: dm.getProp(radiusPoint, "y"),
    width,
    stops,
  }
}

function svgGradientToFill(shape: any, value: any): any | null {
  const trimmed = trimFillValue(value)
  if (!trimmed) return null

  const fillStr = String(trimmed)

  const match = fillStr.match(urlFillPattern)
  if (!match) return null

  const gradientId = match[1]
  if (!gradientId) return null

  const node = resolveGradientNode(shape, gradientId)
  if (!node) return null

  if (node.tag === "linearGradient") {
    return buildLinearGradient(shape, node)
  }
  if (node.tag === "radialGradient") {
    return buildRadialGradient(shape, node)
  }

  return null
}

function parseSvgFill(shape: any, value: any): any | null {
  const trimmed = trimFillValue(value)
  if (!trimmed) return null

  const normalized = trimmed.toLowerCase() === "currentcolor" ? clr.black : trimmed

  if (normalized === "none") return null

  if (clr.colorString(normalized) || typeof value === "object") {
    return {
      type: "color",
      value: clr.parse(normalized),
    }
  }

  if (str.startsWith(normalized, "url(")) {
    const gradient = svgGradientToFill(shape, normalized)
    if (gradient) {
      return {
        type: "gradient",
        value: gradient,
      }
    }
  }

  return null
}

export function svgFillToFills(shape: any): any[] | null {
  const styleFill = parseSvgFill(shape, dm.getIn(shape, ["svg-attrs", "style", "fill"]))
  const attrFill = parseSvgFill(shape, dm.getIn(shape, ["svg-attrs", "fill"]))

  const { type, value } = styleFill || attrFill || {}
  if (!type) return null

  let opacity =
    d.parseDouble(dm.getIn(shape, ["svg-attrs", "style", "fillOpacity"]), 1) ??
    d.parseDouble(dm.getIn(shape, ["svg-attrs", "fillOpacity"]), 1) ??
    null

  let baseFill: any
  if (type === "color") {
    baseFill = { fillColor: value }
  } else if (type === "gradient") {
    baseFill = { fillColorGradient: value }
  } else {
    return null
  }

  if (opacity !== null) {
    baseFill = { ...baseFill, fillOpacity: opacity }
  }

  return [baseFill]
}

export function resolveShapeFills(shape: any): any[] {
  const baseFills = dm.getProp(shape, "fills")
  const fallback = svgFillToFills(shape)
  const type = dm.getProp(shape, "type")

  if (baseFills && baseFills.length > 0) return baseFills
  if (fallback && fallback.length > 0) return fallback

  if (shape["svg-attrs"] && (type === "svg-raw" || type === "group")) {
    return [{ fillColor: "#000000", fillOpacity: 1 }]
  }

  return []
}