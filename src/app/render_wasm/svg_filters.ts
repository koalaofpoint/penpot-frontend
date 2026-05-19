// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from "app/common/data"
import * as dm from "app/common/data/macros"
import * as csvg from "app/common/svg"
import * as uuid from "app/common/uuid"
import * as svgFills from "app/render_wasm/svg-fills"

const dropShadowTags = new Set(["feOffset", "feGaussianBlur", "feColorMatrix"])

function findFilterElement(filterContent: any[], tag: string): any {
  return filterContent.find((elem) => elem.tag === tag)
}

function findFilterDef(shape: any): any | null {
  const filterAttr =
    dm.getIn(shape, ["svg-attrs", "filter"]) ||
    dm.getIn(shape, ["svg-attrs", "style", "filter"])
  const svgDefs = dm.getProp(shape, "svg-defs")

  if (!filterAttr || !svgDefs) return null

  const filterIds = csvg.extractIds(filterAttr)
  return filterIds
    .map((id: string) => svgDefs[id])
    .find((def: any) => def !== undefined)
}

function buildBlur(gaussianBlur: any): any | null {
  if (!gaussianBlur) return null

  return {
    id: uuid.next(),
    type: "layer-blur",
    value: d.parseDouble(dm.getIn(gaussianBlur, ["attrs", "stdDeviation"]), 0),
    hidden: false,
  }
}

function buildDropShadow(
  filterContent: any[],
  dropShadowElements: any[]
): any[] | null {
  const offsetElem = findFilterElement(filterContent, "feOffset")

  if (!offsetElem || dropShadowElements.length === 0) return null

  const blurElem = findFilterElement(dropShadowElements, "feGaussianBlur")
  const dx = d.parseDouble(dm.getIn(offsetElem, ["attrs", "dx"]), 0)
  const dy = d.parseDouble(dm.getIn(offsetElem, ["attrs", "dy"]), 0)
  const blurValue = blurElem
    ? d.parseDouble(dm.getIn(blurElem, ["attrs", "stdDeviation"]), 0) * 2
    : 0

  return [
    {
      id: uuid.next(),
      style: "drop-shadow",
      offsetX: dx,
      offsetY: dy,
      blur: blurValue,
      spread: 0,
      hidden: false,
      color: { color: "#000000", opacity: 1 },
    },
  ]
}

export function applySvgFilters(shape: any): any {
  const existingBlur = shape.blur
  const existingShadow = shape.shadow

  const filterDef = findFilterDef(shape)
  if (!filterDef) return shape

  const content = filterDef.content
  const gaussianBlur = findFilterElement(content, "feGaussianBlur")
  const dropShadowElements = content.filter((elem: any) =>
    dropShadowTags.has(elem.tag)
  )

  const blur = existingBlur || buildBlur(gaussianBlur)
  const shadow = existingShadow?.length > 0
    ? existingShadow
    : buildDropShadow(content, dropShadowElements)

  let result = shape
  if (blur) {
    result = { ...result, blur }
  }
  if (shadow && shadow.length > 0) {
    result = { ...result, shadow }
  }

  return result
}

export function applySvgDerived(shape: any): any {
  const shapeWithFilters = applySvgFilters(shape)
  const fills = svgFills.resolveShapeFills(shapeWithFilters) || []

  return {
    ...shapeWithFilters,
    fills,
    blur: shapeWithFilters.blur,
    shadow: shapeWithFilters.shadow,
  }
}