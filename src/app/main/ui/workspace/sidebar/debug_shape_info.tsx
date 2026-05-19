// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from "react"
import * as d from "app/common/data"
import * as dm from "app/common/data/macros"
import * as gmt from "app/common/geom/matrix"
import * as dw from "app/main/data/workspace"
import * as refs from "app/main/refs"
import * as st from "app/main/store"
import { PanelTitle } from "app/main/ui/ds/product/panel-title"
import * as dbg from "debug"

const DISPLAY_ATTRS = [
  "type",
  "id",
  "parent-id",
  "frame-id",
  "shapes",
  "component-id",
  "component-file",
  "component-root",
  "main-instance",
  "shape-ref",
  "x",
  "y",
  "width",
  "height",
  "selrect",
  "points",
  "transform",
  "transform-inverse",
]

const REMOVE_ATTRS = new Set(["name", "remote-synced"])

const VERTICAL_LAYOUT_ATTRS = new Set<any>()

function getAttrs(shape: any): string[] {
  const shapeAttrs = Object.keys(shape)
    .filter((key) => !DISPLAY_ATTRS.includes(key))
    .filter((key) => !REMOVE_ATTRS.has(key))
    .sort((a, b) => a.localeCompare(b))

  const filteredDisplay = DISPLAY_ATTRS.filter((attr) => shape[attr] !== nil)
  return [...filteredDisplay, ...shapeAttrs]
}

const CUSTOM_RENDERER: Record<string, any> = {
  "parent-id": "shape-link",
  "frame-id": "shape-link",
  "shapes": "shape-list",
  "shape-ref": "shape-link",
  "transform": "matrix-render",
  "transform-inverse": "matrix-render",
  "selrect": "rect-render",
  "points": "points-render",
  "layout-grid-cells": "cells-render",
}

interface ShapeLinkProps {
  id: string
  objects: any
}

const ShapeLink: React.FC<ShapeLinkProps> = ({ id, objects }) => {
  const handleClick = () => {
    st.emit!(dw.selectShape(id))
  }

  return (
    <a className="shape-link" onClick={handleClick}>
      {dm.str(dm.getIn(objects, [id, "name"]), " #", id)}
    </a>
  )
}

interface CellsRenderProps {
  cells: any[]
  objects: any
}

const CellsRender: React.FC<CellsRenderProps> = ({ cells, objects }) => {
  return (
    <div className="cells-render">
      {Object.entries(cells).map(([id, cell]: [string, any]) => (
        <div key={`cell-${id}`} className="cell-container">
          <div className="cell-position">
            {dm.fmt(
              "(%, %) -> (%, %)",
              cell.row,
              cell.column,
              cell.row + (cell.rowSpan - 1),
              cell.column + (cell.columnSpan - 1)
            )}
          </div>
          <div className="cell-shape">
            {cell.shapes.length === 0 ? (
              <div>&lt;empty&gt;</div>
            ) : (
              <ShapeLink id={cell.shapes[0]} objects={objects} />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

interface DebugShapeAttrProps {
  attr: string
  value: any
  objects: any
}

const DebugShapeAttr: React.FC<DebugShapeAttrProps> = ({ attr, value, objects }) => {
  const renderer = CUSTOM_RENDERER[attr]

  switch (renderer) {
    case "shape-link":
      return <ShapeLink id={value} objects={objects} />
    case "shape-list":
      return (
        <div className="shape-list">
          {value.map((id: string, index: number) => (
            <ShapeLink key={`child-${id}`} id={id} objects={objects} />
          ))}
        </div>
      )
    case "matrix-render":
      return <div>{gmt.formatPrecision(value, 2)}</div>
    case "rect-render":
      return (
        <div>
          {dm.fmt("X:% Y:% W:% H:%", value.x, value.y, value.width, value.height)}
        </div>
      )
    case "points-render":
      return (
        <div className="point-list">
          {value.map((point: any, idx: number) => (
            <div key={`point-${idx}`}>
              {dm.fmt("(%, %)", point.x, point.y)}
            </div>
          ))}
        </div>
      )
    case "cells-render":
      return <CellsRender cells={value} objects={objects} />
    default:
      return <div className="attrs-container-value">{String(value)}</div>
  }
}

export const DebugShapeInfo: React.FC = () => {
  const objects = refs.workspacePageObjects.deref()
  const selected = refs.selectedShapes.deref().map((id: string) => d.getf(objects, id))

  return (
    <div className="shape-info">
      <PanelTitle
        className="shape-info-title"
        text="Debug"
        onClose={() => dbg.disable!("shape-panel")}
      />

      {selected.length === 0 ? (
        <div className="attrs-container">No shapes selected</div>
      ) : (
        selected.map((current: any, idx: number) => {
          const attrs = getAttrs(current)
          return (
            <div className="attrs-container" key={`shape${idx}`}>
              <div className="shape-title">
                <div className="shape-name">{current.name}</div>
                <button onClick={() => dbg.dumpObject(dm.str(current.id))}>object</button>
                <button onClick={() => dbg.dumpSubtree(dm.str(current.id), true)}>tree</button>
              </div>

              <div className="shape-attrs">
                {attrs.map((attr) => {
                  const value = current[attr]
                  if (value === nil) return null
                  return (
                    <div
                      key={`att-${idx}-${attr}`}
                      className={`attrs-container-attr ${VERTICAL_LAYOUT_ATTRS.has(attr) ? "vertical-layout" : ""}`}
                    >
                      <div className="attrs-container-name">{d.name(attr)}</div>
                      <DebugShapeAttr attr={attr} value={value} objects={objects} />
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })
      )}
    </div>
  )
}
