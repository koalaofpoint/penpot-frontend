// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useMemo } from "react"
import * as d from "app/common/data"
import * as dm from "app/common/data/macros"
import * as gmt from "app/common/geom/matrix"
import * as grc from "app/common/geom/rect"
import * as gsh from "app/common/geom/shapes"
import * as gsb from "app/common/geom/shapes/bounds"
import * as json from "app/common/json"
import * as csvg from "app/common/svg"

function addMatrix(
  attrs: Record<string, any>,
  transformKey: string,
  transformMatrix: string
): Record<string, any> {
  return {
    ...attrs,
    [transformKey]: attrs[transformKey]
      ? `${transformMatrix} ${attrs[transformKey]}`
      : transformMatrix,
  }
}

interface SvgNodeProps {
  type: string
  node: any
  prefixId: string
  transform: string
  bounds: any
}

const SvgNode: React.FC<SvgNodeProps> = ({ type, node, prefixId, transform, bounds }) => {
  if (typeof node === "string") {
    return <>{node}</>
  }

  const { tag, attrs, content } = node

  const transformGradient =
    csvg.gradientTags.has(tag) &&
    attrs?.gradientUnits === "userSpaceOnUse"

  const transformPattern =
    tag === "pattern" &&
    attrs?.patternContentUnits === "userSpaceOnUse" &&
    attrs?.patternUnits === "userSpaceOnUse"

  const transformClippath =
    tag === "clipPath" && attrs?.clipPathUnits === "userSpaceOnUse"

  const transformFilter =
    csvg.filterTags.has(tag) && attrs?.filterUnits === "objectBoundingBox"

  const transformMask = tag === "mask" && attrs?.maskUnits === "userSpaceOnUse"

  let updatedAttrs = csvg.updateAttrIds(attrs, prefixId)
  updatedAttrs = csvg.attrsToProps(updatedAttrs)

  if (
    (transformGradient ||
      transformPattern ||
      transformClippath ||
      transformFilter ||
      transformMask) &&
    type === "group"
  ) {
    updatedAttrs.className = updatedAttrs.className
      ? `${updatedAttrs.className} svg-def`
      : "svg-def"
  }

  if (transformGradient) {
    updatedAttrs = addMatrix(updatedAttrs, "gradientTransform", transform)
  }
  if (transformPattern) {
    updatedAttrs = addMatrix(updatedAttrs, "patternTransform", transform)
  }
  if (transformClippath) {
    updatedAttrs = addMatrix(updatedAttrs, "transform", transform)
  }
  if (transformFilter || transformMask) {
    updatedAttrs = { ...updatedAttrs, ...bounds }
  }

  if (tag === "filter" || tag === "mask") {
    updatedAttrs = {
      ...updatedAttrs,
      "data-old-x": updatedAttrs.x,
      "data-old-y": updatedAttrs.y,
      "data-old-width": updatedAttrs.width,
      "data-old-height": updatedAttrs.height,
    }
  }

  const [wrapper, wrapperProps] =
    tag === "mask" ? ["g", { className: "svg-mask-wrapper", transform }] : ["div", {}]

  const jsAttrs = json.toJs(updatedAttrs, { keyFn: (k: string) => k }) as Record<string, any>

  return (
    <>
      {React.createElement(
        tag,
        jsAttrs,
        <wrapper {...wrapperProps}>
          {content?.map((childNode: any, index: number) => (
            <SvgNode
              key={`node-${index}`}
              type={type}
              node={childNode}
              prefixId={prefixId}
              transform={transform}
              bounds={bounds}
            />
          ))}
        </wrapper>
      )}
    </>
  )
}

function getSvgDefBounds(node: any, shape: any, transform: string): any {
  const { tag, attrs } = node

  if (tag === "mask" || csvg.filterTags.has(tag)) {
    const rect = grc.makeRect(
      d.parseDouble(attrs?.x),
      d.parseDouble(attrs?.y),
      d.parseDouble(attrs?.width),
      d.parseDouble(attrs?.height)
    )
    return rect ? gsh.transformRect(rect, transform) : null
  }

  return gsb.getShapeFilterBounds(shape)
}

interface SvgDefsProps {
  shape: any
  renderId: string
}

export const SvgDefs: React.FC<SvgDefsProps> = ({ shape, renderId }) => {
  const defs = shape.svgDefs

  const transform = useMemo(() => {
    if (shape.type === "svg-raw") {
      return gmt.matrix()
    }
    return csvg.svgTransformMatrix(shape)
  }, [shape])

  const finalTransform = shape.svgTransform
    ? gmt.multiply(transform, shape.svgTransform)
    : transform

  const prefixId = (id: string) => {
    if (defs && defs.has(id)) {
      return `${renderId}-${id}`
    }
    return id
  }

  return (
    <>
      {Object.entries(defs || {}).map(([key, node]) => (
        <SvgNode
          key={key}
          type={shape.type}
          node={node}
          prefixId={prefixId(key)}
          transform={finalTransform}
          bounds={getSvgDefBounds(node, shape, finalTransform)}
        />
      ))}
    </>
  )
}
