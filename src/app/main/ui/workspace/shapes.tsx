// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useContext, useMemo } from "react"
import * as d from "app/common/data"
import * as dm from "app/common/data/macros"
import * as cfh from "app/common/files/helpers"
import * as grc from "app/common/geom/rect"
import * as gsh from "app/common/geom/shapes"
import * as uuid from "app/common/uuid"
import { ActiveFrames } from "app/main/ui/context"
import * as circle from "app/main/ui/shapes/circle"
import * as image from "app/main/ui/shapes/image"
import * as rect from "app/main/ui/shapes/rect"
import * as ff from "app/main/ui/shapes/text/fontfaces"
import * as bool from "app/main/ui/workspace/shapes/bool"
import * as common from "app/main/ui/workspace/shapes/common"
import * as frame from "app/main/ui/workspace/shapes/frame"
import * as group from "app/main/ui/workspace/shapes/group"
import * as path from "app/main/ui/workspace/shapes/path"
import * as svgRaw from "app/main/ui/workspace/shapes/svg-raw"
import * as text from "app/main/ui/workspace/shapes/text"
import * as obj from "app/util/object"

const circleWrapper = common.genericWrapperFactory(circle.circleShape)
const imageWrapper = common.genericWrapperFactory(image.imageShape)
const rectWrapper = common.genericWrapperFactory(rect.rectShape)

function makeIsFrameOverlap(vbox: any, objects: any) {
  return (shape: any) => {
    const bounds = cfh.getProp(shape, "showContent")
      ? (() => {
          const children = cfh.getChildrenIds(objects, cfh.getProp(shape, "id"))
            .map((id: string) => d.getf(objects, id))
          return gsh.shapesToRect([shape, ...children])
        })()
      : cfh.getProp(shape, "selrect")
    return grc.overlapsRects(vbox, bounds)
  }
}

interface RootShapeProps {
  objects: any
  activeFrames: Set<string>
}

export const RootShape: React.FC<RootShapeProps> = React.memo(({ objects, activeFrames }) => {
  const vbox = useContext(ActiveFrames)

  const shapes = useMemo(() => cfh.getImmediateChildren(objects), [objects])

  const frameOverlap = useMemo(() => {
    if (!vbox) return () => true
    return makeIsFrameOverlap(vbox, objects)
  }, [vbox, objects])

  const filteredShapes = useMemo(() => {
    if (!vbox) return shapes
    return shapes.filter(frameOverlap)
  }, [shapes, vbox, frameOverlap])

  const xform = (shape: any) => {
    const removeFrameShapes = (s: any) => !cfh.frameShape(s)
    const getChildrenWithSelf = (s: any) => cfh.getChildrenWithSelf(objects, cfh.getId(s))
    return removeFrameShapes(shape) ? getChildrenWithSelf(shape) : []
  }

  return (
    <g id={`shape-${uuid.zero}`}>
      <ActiveFrames.Provider value={activeFrames}>
        <ff.FontfacesStyle
          shapes={filteredShapes
            .filter((s: any) => !cfh.frameShape(s))
            .flatMap((s: any) => cfh.getChildrenWithSelf(objects, cfh.getId(s)))
          }
        />

        <g className="frame-children">
          {filteredShapes.map((shape: any) => {
            const shapeId = cfh.getId(shape)
            return (
              <g key={shapeId} className="ws-shape-wrapper">
                {cfh.frameShape(shape) ? (
                  <frame.RootFrameWrapper
                    shape={shape}
                    objects={objects}
                    thumbnail={!activeFrames.has(shapeId)}
                  />
                ) : (
                  <ShapeWrapper shape={shape} />
                )}
              </g>
            )
          })}
        </g>
      </ActiveFrames.Provider>
    </g>
  )
})

interface ShapeWrapperProps {
  shape: any
  thumbnail?: boolean
}

export const ShapeWrapper: React.FC<ShapeWrapperProps> = React.memo(({ shape, thumbnail: thumbnailProp }) => {
  const shapeType = dm.getProp(shape, "type")
  const shapeId = dm.getProp(shape, "id")

  const activeFrames = cfh.rootFrame(shape) ? useContext(ActiveFrames) : null
  const thumbnail = activeFrames ? !activeFrames.has(shapeId) : thumbnailProp

  if (!shape || shape.hidden) return null

  const props = { shape, thumbnail }

  switch (shapeType) {
    case "path":
      return <path.PathWrapper {...props} />
    case "text":
      return <text.TextWrapper {...props} />
    case "group":
      return <GroupWrapper {...props} />
    case "rect":
      return <rectWrapper {...props} />
    case "image":
      return <imageWrapper {...props} />
    case "circle":
      return <circleWrapper {...props} />
    case "svg-raw":
      return <SvgRawWrapper {...props} />
    case "bool":
      return <BoolWrapper {...props} />
    case "frame":
      return <NestedFrameWrapper {...props} />
    default:
      return null
  }
}, common.checkShapeProps)

const GroupWrapper = group.groupWrapperFactory(ShapeWrapper)
const SvgRawWrapper = svgRaw.svgRawWrapperFactory(ShapeWrapper)
const BoolWrapper = bool.boolWrapperFactory(ShapeWrapper)
const NestedFrameWrapper = frame.nestedFrameWrapperFactory(ShapeWrapper)
const RootFrameWrapper = frame.rootFrameWrapperFactory(ShapeWrapper)
