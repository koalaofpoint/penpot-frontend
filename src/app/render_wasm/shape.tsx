// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from "app.common.data"
import * as dm from "app.common.data.macros"
import * as cfh from "app.common.files.helpers"
import * as t from "app.common.transit"
import * as shape from "app.common.types.shape"
import * as ctl from "app.common.types.shape.layout"
import * as refs from "app.main.refs"
import * as api from "app.render-wasm.api"
import * as svgFilters from "app.render-wasm.svg-filters"
import * as wasm from "app.render-wasm.wasm"
import * as rx from "beicon.v2/core"
import * as c from "cljs.core"
import * as str from "cuerdas.core"

let shapeChanges: any = null

function shapeInCurrentPage(shapeId: string) {
  const objects = refs.workspacePageObjects.deref()
  return objects.has(shapeId)
}

function mapEntry(k: any, v: any) {
  return new c.MapEntry(k, v, null)
}

class ShapeProxy {
  id: any
  type: any
  delegate: any

  constructor(id: any, type: any, delegate: any) {
    this.id = id
    this.type = type
    this.delegate = delegate
  }

  toString() {
    const entries = Array.from(this).map(([k, v]) => `${k} ${v}`).join(", ")
    return `{${entries}}`
  }

  equals(other: any) {
    return c.equiv(this, other)
  }

  withMeta(meta: any) {
    return new ShapeProxy(this.id, this.type, (this.delegate as any).withMeta?.(meta) || this.delegate)
  }

  meta() {
    return (this.delegate as any).meta?.()
  }

  conj(entry: any) {
    return implConj(this, entry)
  }

  empty() {
    return new ShapeProxy(null, null, null)
  }

  equiv(other: any) {
    return c.equivMap(this, other)
  }

  hash() {
    return c.hash(Object.fromEntries(this))
  }

  seq() {
    return c.cons(mapEntry(":id", this.id), c.cons(mapEntry(":type", this.type), c.seq(this.delegate)))
  }

  count() {
    return 1 + c.count(this.delegate)
  }

  lookup(k: any, notFound?: any) {
    if (k === ":id") return this.id
    if (k === ":type") return this.type
    return c.lookup(this.delegate, k, notFound)
  }

  find(k: any) {
    if (k === ":id") return mapEntry(":id", this.id)
    if (k === ":type") return mapEntry(":type", this.type)
    return c.find(this.delegate, k)
  }

  assoc(k: any, v: any) {
    return implAssoc(this, k, v)
  }

  containsKey(k: any) {
    return k === ":id" || k === ":type" || c.containsKey(this.delegate, k)
  }

  dissoc(k: any) {
    return implDissoc(this, k)
  }

  invoke(k: any, notFound?: any) {
    return this.lookup(k, notFound)
  }

  [c.prWriter](writer: any, _opts: any) {
    c.write(writer, `#penpot/shape ${(this.delegate as any).id}`)
  }
}

function setWasmAttr(shape: any, k: any) {
  if (!wasm.contextInitialized) return []

  let shapeToProcess = shape
  if (k === ":svg-attrs") {
    shapeToProcess = { ...shape, svgAttrs: shape.svgAttrs }
  } else if (":fills,:blur,:shadow".includes(k as string)) {
    shapeToProcess = svgFilters.applySvgDerived(shape)
  }

  const v = shapeToProcess[k]
  const id = shapeToProcess.id

  switch (k) {
    case ":parent-id":
      api.setParentId(v)
      break
    case ":type":
      api.setShapeType(v)
      if (v === ":path" || v === ":bool") {
        api.setShapePathContent(shape.content)
      }
      break
    case ":bool-type":
      api.setShapeBoolType(v)
      break
    case ":selrect":
      api.setShapeSelrect(v)
      if (cfh.svgRawShape(shape)) {
        api.setShapeSvgRawContent(api.getStaticMarkup(shape))
      }
      break
    case ":show-content":
      if (cfh.frameShape(shape)) {
        api.setShapeClipContent(!v)
      } else {
        api.setShapeClipContent(false)
      }
      break
    case ":rotation":
      api.setShapeRotation(v)
      break
    case ":transform":
      api.setShapeTransform(v)
      break
    case ":fills":
      api.setShapeFills(id, v, false)
      break
    case ":strokes":
      api.setShapeStrokes(id, v, false)
      break
    case ":blend-mode":
      api.setShapeBlendMode(v)
      break
    case ":opacity":
      api.setShapeOpacity(v)
      break
    case ":hidden":
      api.setShapeHidden(v)
      break
    case ":shapes":
      api.setShapeChildren(v)
      break
    case ":blur":
      api.setShapeBlur(v)
      break
    case ":shadow":
      api.setShapeShadows(v)
      break
    case ":constraints-h":
      api.setConstraintsH(v)
      break
    case ":constraints-v":
      api.setConstraintsV(v)
      break
    case ":r1":
      api.setShapeCorners([v, dm.getProp(shape, ":r2"), dm.getProp(shape, ":r3"), dm.getProp(shape, ":r4")])
      break
    case ":r2":
      api.setShapeCorners([dm.getProp(shape, ":r1"), v, dm.getProp(shape, ":r3"), dm.getProp(shape, ":r4")])
      break
    case ":r3":
      api.setShapeCorners([dm.getProp(shape, ":r1"), dm.getProp(shape, ":r2"), v, dm.getProp(shape, ":r4")])
      break
    case ":r4":
      api.setShapeCorners([dm.getProp(shape, ":r1"), dm.getProp(shape, ":r2"), dm.getProp(shape, ":r3"), v])
      break
    case ":svg-attrs":
      api.setShapeSvgAttrs(v)
      api.setShapeFills(id, shape.fills, false)
      api.setShapeBlur(shape.blur)
      api.setShapeShadows(shape.shadow)
      break
    case ":masked-group":
      if (cfh.groupShape(shape)) {
        api.setMasked(!!shape.maskedGroup)
      }
      break
    case ":content":
      if (cfh.pathShape(shape) || cfh.boolShape(shape)) {
        api.setShapePathContent(v)
      } else if (cfh.svgRawShape(shape)) {
        api.setShapeSvgRawContent(api.getStaticMarkup(shape))
      } else if (cfh.textShape(shape)) {
        const pendingThumbnails = api.setShapeTextContent(id, v)
        const pendingFull = api.setShapeTextImages(id, v)
        api.processPending([shape], pendingThumbnails, pendingFull, api.noopFn)
      }
      break
    case ":grow-type":
      api.setShapeGrowType(v)
      break
    case ":layout-item-align-self":
    case ":layout-item-margin":
    case ":layout-item-margin-type":
    case ":layout-item-h-sizing":
    case ":layout-item-v-sizing":
    case ":layout-item-max-h":
    case ":layout-item-min-h":
    case ":layout-item-max-w":
    case ":layout-item-min-w":
    case ":layout-item-absolute":
    case ":layout-item-z-index":
      api.setLayoutData(shape)
      break
    case ":layout-grid-rows":
      api.setGridLayoutRows(v)
      break
    case ":layout-grid-columns":
      api.setGridLayoutColumns(v)
      break
    case ":layout-grid-cells":
      api.setGridLayoutCells(v)
      break
    case ":layout":
      api.clearLayout()
      if (ctl.gridLayout(shape)) {
        api.setGridLayout(shape)
      } else if (ctl.flexLayout(shape)) {
        api.setFlexLayout(shape)
      }
      api.setLayoutData(shape)
      break
    case ":layout-flex-dir":
    case ":layout-gap-type":
    case ":layout-gap":
    case ":layout-align-items":
    case ":layout-align-content":
    case ":layout-justify-items":
    case ":layout-justify-content":
    case ":layout-wrap-type":
    case ":layout-padding-type":
    case ":layout-padding":
      if (ctl.gridLayout(shape)) {
        api.setGridLayoutData(shape)
      } else if (ctl.flexLayout(shape)) {
        api.setFlexLayout(shape)
      }
      break
  }

  return []
}

export function processShape(shape: any, properties: any[]) {
  const shapeId = dm.getProp(shape, "id")
  if (!shapeInCurrentPage(shapeId)) {
    return rx.empty()
  }

  api.useShape(shapeId)

  const callbacks = properties.flatMap((prop) => setWasmAttr(shape, prop))
  const callbackMap = d.indexBy(callbacks, "key", "callback")

  return rx.from(Object.values(callbackMap)).pipe(
    rx.mergeMap((cb: any) => cb()),
    rx.reduce((acc, val) => [...acc, val], []),
    rx.tap(() => {
      if (cfh.textShape(shape)) {
        api.updateTextRect(shape.id)
      }
    })
  )
}

export function processShapeChanges(objects: any, shapeChangesList: any[]) {
  return rx.from(shapeChangesList).pipe(
    rx.mergeMap(([shapeId, props]) => {
      const shape = objects[shapeId]
      return processShape(shape, props)
    }),
    rx.subscribe(() => api.requestRender("set-wasm-attrs"))
  )
}

const conjStar = (set: any, item: any) => set.add(item)

function implAssoc(self: ShapeProxy, k: any, v: any) {
  if (shapeChanges) {
    shapeChanges = shapeChanges.update(self.id, conjStar, k)
  }

  if (k === ":id") {
    return new ShapeProxy(v, (self as any).type, (self as any).delegate)
  }
  if (k === ":type") {
    return new ShapeProxy((self as any).id, v, (self as any).delegate)
  }

  const delegate = (self as any).delegate
  const delegatePrime = c.assoc(delegate, k, v)
  if (delegatePrime === delegate) {
    return self
  }
  return new ShapeProxy((self as any).id, (self as any).type, delegatePrime)
}

function implDissoc(self: ShapeProxy, k: any) {
  if (shapeChanges) {
    shapeChanges = shapeChanges.update(self.id, conjStar, k)
  }

  if (k === ":id") {
    return new ShapeProxy(null, (self as any).type, (self as any).delegate)
  }
  if (k === ":type") {
    return new ShapeProxy((self as any).id, null, (self as any).delegate)
  }

  const delegate = (self as any).delegate
  const delegatePrime = c.dissoc(delegate, k)
  if (delegatePrime === delegate) {
    return self
  }
  return new ShapeProxy((self as any).id, (self as any).type, delegatePrime)
}

function implConj(self: ShapeProxy, entry: any) {
  if (Array.isArray(entry)) {
    return c.assoc(self, entry[0], entry[1])
  }

  let result = self
  for (const e of entry) {
    if (Array.isArray(e)) {
      result = c.assoc(result, e[0], e[1])
    } else {
      throw new Error("conj on a map takes map entries or seqables of map entries")
    }
  }
  return result
}

const xfWithoutIdAndType = c.remove((kvpair: [any, any]) => {
  const k = kvpair[0]
  return k === ":id" || k === ":type"
})

export function createShape(attrs: any) {
  return new ShapeProxy(
    attrs.id,
    attrs.type,
    c.into({}, xfWithoutIdAndType, attrs)
  )
}

t.addHandlers({
  id: "shape",
  class: ShapeProxy,
  writeFn: (instance: ShapeProxy) => c.into({}, instance),
})
