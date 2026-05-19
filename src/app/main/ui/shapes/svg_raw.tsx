// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { createContext, useContext, useMemo } from "react"
import * as dm from "app/common/data/macros"
import * as gsh from "app/common/geom/shapes"
import * as csvg from "app/common/svg"
import { RenderId } from "app/main/ui/context"
import * as attrs from "app/main/ui/shapes/attrs"
import * as obj from "app/util/object"
import * as str from "cuerdas/core"

const GRAPHIC_ELEMENT = new Set([
  "svg",
  "circle",
  "ellipse",
  "image",
  "line",
  "path",
  "polygon",
  "polyline",
  "rect",
  "symbol",
  "text",
  "textPath",
  "use",
])

export const SvgIdsContext = createContext<Record<string, string> | null>(null)

interface SvgRootProps {
  shape: any
  children?: React.ReactNode
}

const SvgRoot: React.FC<SvgRootProps> = ({ shape, children }) => {
  const x = dm.getProp(shape, "x")
  const y = dm.getProp(shape, "y")
  const w = dm.getProp(shape, "width")
  const h = dm.getProp(shape, "height")

  const idsMapping = useMemo(
    () => csvg.generateIdMapping(shape.content),
    [shape]
  )

  const renderId = useContext(RenderId)

  const props = useMemo(() => {
    const p = attrs.addFillProps!(shape, renderId)
    obj.unset!(p, "transform")
    obj.set!(p, "x", x)
    obj.set!(p, "y", y)
    obj.set!(p, "width", w)
    obj.set!(p, "height", h)
    obj.set!(p, "preserveAspectRatio", "none")
    return p
  }, [shape, renderId, x, y, w, h])

  return (
    <SvgIdsContext.Provider value={idsMapping}>
      <g className="svg-raw" transform={gsh.transformStr(shape)}>
        <svg {...obj.toJs(props)}>{children}</svg>
      </g>
    </SvgIdsContext.Provider>
  )
}

interface SvgElementProps {
  shape: any
  children?: React.ReactNode
}

const SvgElement: React.FC<SvgElementProps> = ({ shape, children }) => {
  const idsMapping = useContext(SvgIdsContext)
  const renderId = useContext(RenderId)

  const tag = shape.content?.tag

  const updatedShape = useMemo(() => {
    const shapeTag = shape.content?.tag
    let updatedSvgAttrs = csvg.replaceAttrsIds(shape.svgAttrs, idsMapping)

    if (GRAPHIC_ELEMENT.has(shapeTag)) {
      updatedSvgAttrs = {
        ...updatedSvgAttrs,
        transform: str.ffmt("% %", csvg.svgTransformMatrix(shape), updatedSvgAttrs.transform || ""),
      }
    } else {
      updatedSvgAttrs = obj.without(updatedSvgAttrs, "transform")
    }

    return { ...shape, svgAttrs: updatedSvgAttrs }
  }, [shape, idsMapping])

  const props = useMemo(() => {
    const elementId = dm.getIn(updatedShape, ["svgAttrs", "id"])
    const p = attrs.addFillProps!({}, updatedShape, renderId)

    if (elementId && idsMapping?.has(elementId)) {
      obj.set!(p, "id", idsMapping.get(elementId))
    }

    return p
  }, [updatedShape, renderId, idsMapping])

  return React.createElement(tag, obj.toJs(props), children)
}

interface SvgRawShapeProps {
  shape: any
  childs?: any[]
}

export const SvgRawShape: React.FC<SvgRawShapeProps> = ({ shape, childs = [] }) => {
  const content = shape.content
  const tag = content?.tag

  const svgRoot = content && typeof content === "object" && tag === "svg"
  const svgTag = typeof content === "object"
  const svgLeaf = typeof content === "string"
  const validTag = csvg.svgTags.has(tag)

  const currentSvgRootId = useContext(RenderId)

  let styleContent: string | null = null
  if (tag === "style") {
    styleContent = `#shape-${currentSvgRootId}{ ${content.content?.join("\n") || ""} }`
  }

  if (tag === "style") {
    return <style>{styleContent}</style>
  }

  if (svgRoot) {
    return (
      <SvgRoot shape={shape}>
        {childs.map((item: any) => (
          <ShapeWrapper key={item.id} shape={item} />
        ))}
      </SvgRoot>
    )
  }

  if (svgTag && validTag) {
    return (
      <SvgElement shape={shape}>
        {childs.map((item: any) => (
          <ShapeWrapper key={item.id} shape={item} />
        ))}
      </SvgElement>
    )
  }

  if (svgLeaf) {
    return <>{content}</>
  }

  return null
}

interface ShapeWrapperProps {
  shape: any
}

const ShapeWrapper: React.FC<ShapeWrapperProps> = ({ shape }) => {
  return <SvgRawShape shape={shape} />
}
