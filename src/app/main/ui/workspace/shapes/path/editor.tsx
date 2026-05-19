// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react"
import * as D from "app/common/data"
import * as DM from "app/common/data/macros"
import * as GPT from "app/common/geom/point"
import * as Path from "app/common/types/path"
import * as PathHelpers from "app/common/types/path/helpers"
import * as DRP from "app/main/data/workspace/path"
import * as Snap from "app/main/snap"
import {store} from "app/main/store"
import * as MS from "app/main/streams"
import * as CUR from "app/main/ui/css-cursors"
import * as Hooks from "app/main/ui/hooks"
import * as DOM from "app/util/dom"
import * as KBD from "app/util/keyboard"
import {mapInvert} from "clojure.set"

const pointRadius = 5
const pointRadiusSelected = 4
const pointRadiusActiveArea = 15
const pointRadiusStrokeWidth = 1

const handlerSide = 6
const handlerStrokeWidth = 1

const pathPreviewDasharray = 4
const pathSnapStrokeWidth = 1

const accentColor = "var(--color-accent-tertiary)"
const secondaryColor = "var(--color-accent-quaternary)"
const blackColor = "var(--app-black)"
const whiteColor = "var(--app-white)"
const grayColor = "var(--df-secondary)"

interface PathPointProps {
  position: { x: number; y: number }
  zoom: number
  editMode: "draw" | "move"
  isHover?: boolean
  isSelected?: boolean
  isPreview?: boolean
  isStartPath?: boolean
  isLast?: boolean
  isNew?: boolean
  isCurve?: boolean
}

const PathPoint: React.FC<PathPointProps> = (props) => {
  const {
    position,
    zoom,
    editMode,
    isHover,
    isSelected,
    isPreview,
    isStartPath,
    isLast,
    isNew,
    isCurve,
  } = props

  const {x, y} = position
  const isDraw = editMode === "draw"
  const isMove = editMode === "move"

  const isActive = isSelected || isHover

  const onEnter = React.useCallback(
    () => store.emit(DRP.pathPointerEnter(position)),
    [position]
  )

  const onLeave = React.useCallback(
    () => store.emit(DRP.pathPointerLeave(position)),
    [position]
  )

  const onPointerDown = React.useCallback(
    (event: any) => {
      if (!DOM.leftMouse(event)) return
      DOM.stopPropagation(event)
      DOM.preventDefault(event)

      if (isNew && position != null) {
        store.emit(DRP.createNodeAtPosition((position as any).meta))
      }

      const isShift = KBD.shift(event)
      const isMod = KBD.mod(event)

      if (isLast) {
        store.emit(DRP.resetLastHandler())
      } else if (isMove && isMod && !isCurve) {
        store.emit(DRP.makeCurve(position))
      } else if (isMove && isMod && isCurve) {
        store.emit(DRP.makeCorner(position))
      } else if (isMove) {
        store.emit(DRP.startMovePathPoint(position, isShift))
      } else if (isDraw && isStartPath) {
        store.emit(DRP.startPathFromPoint(position))
      } else if (isDraw && !isStartPath) {
        store.emit(DRP.closePathDragStart(position))
      }
    },
    [isNew, isLast, isMove, isMod, isCurve, isDraw, isStartPath, position]
  )

  const strokeColor = isActive ? blackColor : isPreview ? secondaryColor : accentColor
  const fillColor = isSelected ? accentColor : whiteColor
  const r = isActive ? pointRadius / zoom : pointRadiusSelected / zoom

  const cursorClass = isDraw
    ? CUR.getStatic("pen-node")
    : isMove
    ? CUR.getStatic("pointer-node")
    : ""

  return (
    <g className="path-point">
      <circle
        cx={x}
        cy={y}
        r={r}
        style={{
          strokeWidth: pointRadiusStrokeWidth / zoom,
          stroke: strokeColor,
          fill: fillColor,
        }}
      />
      <circle
        cx={x}
        cy={y}
        r={pointRadiusActiveArea / zoom}
        onPointerDown={onPointerDown}
        onPointerEnter={onEnter}
        onPointerLeave={onLeave}
        pointerEvents={isPreview ? "visible" : undefined}
        className={cursorClass}
        style={{
          strokeWidth: 0,
          fill: "none",
        }}
      />
    </g>
  )
}

interface PathHandlerProps {
  index: number
  prefix: string
  point: { x: number; y: number }
  handler: { x: number; y: number }
  zoom: number
  isSelected?: boolean
  isHover?: boolean
  editMode: "draw" | "move"
  snapAngle?: boolean
}

const PathHandler: React.FC<PathHandlerProps> = (props) => {
  const {
    index,
    prefix,
    point,
    handler,
    zoom,
    isSelected,
    isHover,
    editMode,
    snapAngle,
  } = props

  const x = DM.getProp(handler, "x")
  const y = DM.getProp(handler, "y")
  const isDraw = editMode === "draw"
  const isMove = editMode === "move"

  const isActive = isSelected || isHover

  const onEnter = React.useCallback(
    () => store.emit(DRP.pathHandlerEnter(index, prefix)),
    [index, prefix]
  )

  const onLeave = React.useCallback(
    () => store.emit(DRP.pathHandlerLeave(index, prefix)),
    [index, prefix]
  )

  const onPointerDown = React.useCallback(
    (event: any) => {
      if (!DOM.leftMouse(event)) return
      DOM.stopPropagation(event)
      DOM.preventDefault(event)

      if (isMove) {
        store.emit(DRP.startMoveHandler(index, prefix))
      }
    },
    [isMove, index, prefix]
  )

  const strokeColor = isHover ? blackColor : grayColor

  return (
    <g className="handler" pointerEvents={isDraw ? "none" : "visible"}>
      <line
        x1={point.x}
        y1={point.y}
        x2={x}
        y2={y}
        style={{
          stroke: strokeColor,
          strokeWidth: pointRadiusStrokeWidth / zoom,
        }}
      />
      {snapAngle && (
        <line
          x1={point.x}
          y1={point.y}
          x2={x}
          y2={y}
          style={{
            stroke: secondaryColor,
            strokeWidth: pointRadiusStrokeWidth / zoom,
          }}
        />
      )}
      <rect
        x={x - handlerSide / 2 / zoom}
        y={y - handlerSide / 2 / zoom}
        width={handlerSide / zoom}
        height={handlerSide / zoom}
        style={{
          strokeWidth: handlerStrokeWidth / zoom,
          stroke: isActive ? blackColor : accentColor,
          fill: isSelected ? accentColor : whiteColor,
        }}
      />
      <circle
        cx={x}
        cy={y}
        r={pointRadiusActiveArea / zoom}
        onPointerDown={onPointerDown}
        onPointerEnter={onEnter}
        onPointerLeave={onLeave}
        className={isMove ? CUR.getStatic("pointer-move") : ""}
        style={{
          fill: "none",
          strokeWidth: 0,
        }}
      />
    </g>
  )
}

interface PathPreviewProps {
  zoom: number
  segment: any
  from: { x: number; y: number }
}

const PathPreview: React.FC<PathPreviewProps> = (props) => {
  const {zoom, segment, from} = props

  const path = React.useMemo(() => {
    if (segment?.command === ":move-to") return null
    const segments = [{command: ":move-to", params: from}, segment]
    return Path.content(segments)
  }, [segment, from])

  const position = React.useMemo(
    () => GPT.point(segment?.params),
    [segment]
  )

  return (
    <g className="preview" style={{pointerEvents: "none"}}>
      {path && (
        <path
          style={{
            fill: "none",
            stroke: blackColor,
            strokeWidth: handlerStrokeWidth / zoom,
            strokeDasharray: pathPreviewDasharray / zoom,
          }}
          d={String(path)}
        />
      )}
      <PathPoint position={position} isPreview={true} zoom={zoom}/>
    </g>
  )
}

interface PathSnapProps {
  selected: any
  points: any
  zoom: number
}

const PathSnap: React.FC<PathSnapProps> = (props) => {
  const {selected, points, zoom} = props

  const ranges = React.useMemo(
    () => Snap.createRanges(points, selected),
    [points, selected]
  )

  const snapMatches = Snap.getSnapDeltaMatch(selected, ranges, 1 / zoom)
  const xMatches = Snap.matchesX(snapMatches)
  const yMatches = Snap.matchesY(snapMatches)
  const matches = [...xMatches, ...yMatches]

  return (
    <g className="snap-paths">
      {matches.map(([from, to], idx) => (
        <line
          key={`snap-${idx}-${from}-${to}`}
          x1={from.x}
          y1={from.y}
          x2={to.x}
          y2={to.y}
          style={{
            stroke: secondaryColor,
            strokeWidth: pathSnapStrokeWidth / zoom,
          }}
        />
      ))}
    </g>
  )
}

function matchingHandler(content: any, node: any, handlers: any): boolean {
  if (handlers.length !== 2) return false
  const [[i1, p1], [i2, p2]] = handlers
  const handlerPoint1 = Path.getHandlerPoint(content, i1, p1)
  const handlerPoint2 = Path.getHandlerPoint(content, i2, p2)

  const v1 = GPT.toVec(node, handlerPoint1)
  const v2 = GPT.toVec(node, handlerPoint2)

  const angle = GPT.angleWithOther(v1, v2)
  return 180 - angle <= 0.1
}

interface PathEditorProps {
  shape: any
  zoom: number
  state: any
}

export const PathEditor: React.FC<PathEditorProps> = (props) => {
  const {shape, zoom, state} = props

  const [hoverPoint, setHoverPoint] = React.useState<any>(null)
  const editorRef = React.useRef<SVGGElement>(null)

  const {
    editMode,
    dragHandler,
    prevHandler,
    preview,
    contentModifiers,
    lastPoint,
    selectedPoints,
    movingNodes,
    movingHandler,
    hoverHandlers,
    hoverPoints,
    snapToggled,
  } = state

  const selectedPointsSet = selectedPoints || new Set()

  const baseContent = shape?.content

  const basePoints = React.useMemo(
    () => Path.getPoints(baseContent),
    [baseContent]
  )

  const content = React.useMemo(
    () => Path.applyContentModifiers(baseContent, contentModifiers),
    [baseContent, contentModifiers]
  )

  const contentPoints = React.useMemo(
    () => Path.getPoints(content),
    [content]
  )

  const pointToBase = React.useMemo(() => {
    const result: Record<string, any> = {}
    contentPoints.forEach((cp: any, idx: number) => {
      result[String(cp)] = basePoints[idx]
    })
    return result
  }, [contentPoints, basePoints])

  const baseToPoint = React.useMemo(
    () => mapInvert(pointToBase),
    [pointToBase]
  )

  const points = React.useMemo(
    () => new Set(contentPoints),
    [contentPoints]
  )

  const lastP = React.useMemo(
    () => PathHelpers.segmentToPoint(D.last(content)),
    [content]
  )

  const handlers = React.useMemo(
    () => Path.getHandlers(content),
    [content]
  )

  const isPathStart = !lastPoint

  const showSnap = snapToggled && (dragHandler || preview || movingHandler || movingNodes)

  React.useLayoutEffect(() => {
    const handleDblClick = () => {
      if (editMode === "move") {
        store.emit(":interrupt")
      }
    }
    const root = DOM.getRoot()
    if (root) {
      root.addEventListener("dblclick", handleDblClick)
      return () => root.removeEventListener("dblclick", handleDblClick)
    }
  }, [editMode])

  Hooks.useStream(
    MS.mousePosition,
    (position: any) => {
      const point = Path.closestPoint(baseContent, position, 0.01 / zoom)
      if (point) {
        const dist = GPT.distance(position, point)
        setHoverPoint(dist < 10 / zoom ? point : null)
      }
    }
  )

  return (
    <g className="path-editor" ref={editorRef}>
      <path
        d={content.toString()}
        style={{
          fill: "none",
          stroke: accentColor,
          strokeWidth: 1 / zoom,
        }}
      />

      {preview && !dragHandler && (
        <PathPreview segment={preview} from={lastP} zoom={zoom}/>
      )}

      {dragHandler && lastP && (
        <g className="drag-handler" pointerEvents="none">
          <PathHandler
            point={lastP}
            handler={dragHandler}
            editMode={editMode}
            zoom={zoom}
          />
        </g>
      )}

      {hoverPoint && (
        <g className="hover-point">
          <PathPoint
            position={hoverPoint}
            editMode={editMode}
            isNew={true}
            isStartPath={isPathStart}
            zoom={zoom}
          />
        </g>
      )}

      {Array.from(points).map((position: any) => {
        const posX = DM.getProp(position, "x")
        const posY = DM.getProp(position, "y")

        const showHandler = ([index, prefix]: [number, string]) => {
          const handlerPosition = Path.getHandlerPoint(content, index, prefix)
          return position !== handlerPosition
        }

        const positionHandlers = (handlers.get(position) || [])
          .filter(showHandler)

        const pointSelected = selectedPointsSet.has(baseToPoint[position])
        const pointHover = hoverPoints?.has(baseToPoint[position])
        const isLast = lastPoint === baseToPoint[position]
        const isCurve = positionHandlers.length > 0

        return (
          <g className="path-node" key={`${posX}-${posY}`}>
            <g className="point-handlers" pointerEvents={editMode === "draw" ? "none" : "visible"}>
              {positionHandlers.map(([hIndex, prefix]) => {
                const handlerPosition = Path.getHandlerPoint(content, hIndex, prefix)
                const handlerHover = hoverHandlers?.has(`${hIndex}-${prefix}`)
                const movingHandlerTest = handlerPosition === movingHandler
                const matchingHandlerTest = matchingHandler(content, position, positionHandlers)

                if (!position || !handlerPosition) return null

                return (
                  <PathHandler
                    key={`${hIndex}-${D.name(prefix)}`}
                    point={position}
                    handler={handlerPosition}
                    index={hIndex}
                    prefix={prefix}
                    zoom={zoom}
                    isHover={handlerHover}
                    snapAngle={movingHandlerTest && matchingHandlerTest}
                    editMode={editMode}
                  />
                )
              })}
            </g>

            <PathPoint
              position={position}
              zoom={zoom}
              editMode={editMode}
              isSelected={pointSelected}
              isHover={pointHover}
              isLast={isLast}
              isStartPath={isPathStart}
              isCurve={isCurve}
            />
          </g>
        )
      })}

      {prevHandler && lastP && (
        <g className="prev-handler" pointerEvents="none">
          <PathHandler
            point={lastP}
            editMode={editMode}
            handler={prevHandler}
            zoom={zoom}
          />
        </g>
      )}

      {showSnap && (
        (() => {
          let snapSelected: any
          let snapPoints: any

          if (dragHandler) {
            snapSelected = new Set([dragHandler])
            snapPoints = points
          } else if (preview) {
            snapSelected = new Set([PathHelpers.segmentToPoint(preview)])
            snapPoints = points
          } else if (movingHandler) {
            snapSelected = new Set([movingHandler])
            snapPoints = points
          } else {
            snapSelected = new Set(Array.from(selectedPointsSet).map((bp: any) => baseToPoint[bp]))
            snapPoints = new Set(Array.from(points).filter((p: any) => !selectedPointsSet.has(baseToPoint[p])))
          }

          return (
            <g className="path-snap" pointerEvents="none">
              <PathSnap
                selected={snapSelected}
                points={snapPoints}
                zoom={zoom}
              />
            </g>
          )
        })()
      )}
    </g>
  )
}
