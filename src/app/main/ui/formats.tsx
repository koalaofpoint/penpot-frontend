// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from "app/common/data"
import * as dm from "app/common/data/macros"
import * as mth from "app/common/math"
import * as str from "cuerdas.core"

export function formatPercent(value: number | string, opts?: {precision?: number}): string {
  const options = opts || {precision: 2}
  const numValue = typeof value === "string" ? d.parseDouble(value) : value
  if (!d.num(numValue)) return ""

  const percentVal = mth.precision(numValue * 100, options.precision || 2)
  return `${percentVal}%`
}

export function formatFrs(value: number | string, opts?: {precision?: number}): string {
  const options = opts || {precision: 2}
  const numValue = typeof value === "string" ? d.parseDouble(value) : value
  if (!d.num(numValue)) return ""

  const formattedValue = mth.precision(numValue, options.precision || 2)
  return `${formattedValue}fr`
}

export function formatNumber(value: number | string, opts?: {precision?: number}): string {
  const options = opts || {precision: 2}
  const numValue = typeof value === "string" ? d.parseDouble(value) : value
  if (!d.num(numValue)) return ""

  const formattedValue = mth.precision(numValue, options.precision || 2)
  return `${formattedValue}`
}

export function formatPixels(value: number | string, opts?: {precision?: number}): string {
  const options = opts || {precision: 2}
  const numValue = typeof value === "string" ? d.parseDouble(value) : value
  if (!d.num(numValue)) return ""

  const formattedValue = mth.precision(numValue, options.precision || 2)
  return `${formattedValue}px`
}

export function formatInt(value: number | string): string {
  const numValue = typeof value === "string" ? d.parseDouble(value) : value
  if (!d.num(numValue)) return ""

  const formattedValue = mth.precision(numValue, 0)
  return `${formattedValue}`
}

interface PaddingMarginShorthandResult {
  p1?: string
  p2?: string
  p3?: string
  p4?: string
}

export function formatPaddingMarginShorthand(values: string[]): PaddingMarginShorthandResult {
  const [p1, p2, p3, p4] = values
  const formatted = values.map(formatNumber)

  if (formatted[0] === formatted[1] && formatted[1] === formatted[2] && formatted[2] === formatted[3]) {
    return {p1: formatted[0]}
  }

  const uniqueCount = new Set(formatted).size
  if (uniqueCount === 4) {
    return {p1: formatted[0], p2: formatted[1], p3: formatted[2], p4: formatted[3]}
  }

  if (formatted[0] === formatted[2] && formatted[1] === formatted[3]) {
    return {p1: formatted[0], p2: formatted[1]}
  }

  if (formatted[0] !== formatted[2] && formatted[1] === formatted[3]) {
    return {p1: formatted[0], p2: formatted[1], p3: formatted[2]}
  }

  return {p1: formatted[0], p2: formatted[1], p3: formatted[2], p4: formatted[3]}
}

export function formatSize(type: "width" | "height", value: number, shape: any): string {
  const sizing = type === "width"
    ? shape?.layoutItemHSizing
    : shape?.layoutItemVSizing

  if (sizing === "fill") return "100%"
  if (sizing === "auto") return "auto"
  if (typeof value === "number") return formatPixels(value)
  return String(value)
}

export function formatPadding(paddingValues: any, type: "padding" | "margin"): string {
  const newPadding = type === "margin"
    ? {m1: 0, m2: 0, m3: 0, m4: 0}
    : {p1: 0, p2: 0, p3: 0, p4: 0}

  const mergedPadding = {...newPadding, ...paddingValues}
  const shorthand = formatPaddingMarginShorthand(Object.values(mergedPadding) as string[])
  const parsedValues = Object.values(shorthand).map((v) => `${v}px`)

  return str.join(" ", parsedValues)
}

export function formatMargin(marginValues: any): string {
  return formatPadding(marginValues, "margin")
}

export function formatGap(gapValues: any): string {
  const rowGap = gapValues?.rowGap
  const columnGap = gapValues?.columnGap

  if (rowGap === columnGap) {
    return `${formatNumber(rowGap)}px`
  }
  return `${formatNumber(rowGap)}px ${formatNumber(columnGap)}px`
}

interface Matrix {
  a: number
  b: number
  c: number
  d: number
  e: number
  f: number
}

export function formatMatrix(mtx: Matrix, precision: number = 2): string {
  return `matrix(${mth.toFixed(mtx.a, precision)}, ${mth.toFixed(mtx.b, precision)}, ${mth.toFixed(mtx.c, precision)}, ${mth.toFixed(mtx.d, precision)}, ${mth.toFixed(mtx.e, precision)}, ${mth.toFixed(mtx.f, precision)})`
}