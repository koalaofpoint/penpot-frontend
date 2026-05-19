// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from "app/common/data"
import * as dm from "app/common/data/macros"
import * as ex from "app/common/exceptions"
import * as cfr from "app/common/files/repair"
import * as cfv from "app/common/files/validate"
import * as json from "app/common/json"
import * as l from "app/common/logging"
import * as pp from "app/common/pprint"
import * as t from "app/common/transit"
import * as ctf from "app/common/types/file"
import * as uuid from "app/common/uuid"
import * as dwc from "app/main/data/changes"
import * as dcm from "app/main/data/common"
import "app/main/data/dashboard/shortcuts"
import * as dsh from "app/main/data/helpers"
import * as dp from "app/main/data/preview"
import "app/main/data/viewer/shortcuts"
import * as dw from "app/main/data/workspace"
import * as dwcm from "app/main/data/workspace/common"
import "app/main/data/workspace/path/shortcuts"
import * as dws from "app/main/data/workspace/selection"
import "app/main/data/workspace/shortcuts"
import * as errors from "app/main/errors"
import * as rp from "app/main/repo"
import { store } from "app/main/store"
import * as dbg from "app/util/debug"
import * as dom from "app/util/dom"
import * as http from "app/util/http"
import * as obj from "app/util/object"
import * as timers from "app/util/timers"
import * as rx from "beicon.v2/core"
import { pprint } from "cljs.pprint"
import * as str from "cuerdas.core"
import * as ptk from "potok.v2.core"
import * as p from "promesa.core"

l.setLevel("debug")

export function setLogging(level: string): void
export function setLogging(ns: string, level: string): void
export function setLogging(nsOrLevel: string, level?: string): void {
  if (level === undefined) {
    l.setLevel("app", nsOrLevel as any)
  } else {
    l.setLevel(nsOrLevel as any, level as any)
  }
}

const debugExcludeEvents = new Set([
  "app.main.data.workspace.notifications/handle-pointer-update",
  "app.main.data.workspace.notifications/handle-pointer-send",
  "app.main.data.websocket/send-message",
  "app.main.data.workspace.selection/change-hover-state",
])

export function enable(option: string) {
  dbg.enable!(option as any)
  switch (option) {
    case "events":
      store.debugEvents = true
      break
    case "events-times":
      store.debugEventsTime = true
      break
  }
  ;(window as any).app.main.reinit()
}

export function disable(option: string) {
  dbg.disable!(option as any)
  switch (option) {
    case "events":
      store.debugEvents = false
      break
    case "events-times":
      store.debugEventsTime = false
      break
  }
  ;(window as any).app.main.reinit()
}

export function toggleDebug(name: string) {
  const option = name as any
  if (dbg.enabled?(option)) {
    disable(name)
  } else {
    enable(name)
  }
}

export function debugAll() {
  dbg.state = dbg.options
  ;(window as any).app.main.reinit()
}

export function debugNone() {
  dbg.state = new Set()
  ;(window as any).app.main.reinit()
}

export function tap(
  effectFn: (input: any) => void
): (rf: (result: any, input?: any) => any) => any {
  return (rf: any) => {
    return (result: any, input?: any) => {
      effectFn(input)
      return rf(result, input)
    }
  }
}

export function logjs(str: string, val?: any): any {
  console.log(str, json.toJs(val))
  return val
}

if (typeof window !== "undefined") {
  ;(window as any).dbg = json.toJs
  ;(window as any).pp = pprint
}

const widgetStyle = `
  background: black;
  bottom: 10px;
  color: white;
  height: 20px;
  padding-left: 8px;
  position: absolute;
  right: 10px;
  width: 40px;
  z-index: 99999;
  opacity: 0.5;
`

export function fps() {
  let last = { current: performance.now() }
  let avg = { current: 0 }
  const node = Object.assign(document.createElement("div"), {
    id: "fps",
    style: widgetStyle,
  })
  const body = document.body

  const doThing = () => {
    timers.raf(() => {
      const cur = performance.now()
      const ts = 1000 / (cur - last.current)
      const val = avg.current + (ts - avg.current) * 0.1

      node.innerText = val.toString()
      last.current = cur
      avg.current = val
      doThing()
    })
  }

  body.appendChild(node)
  doThing()
}

export function dumpState() {
  logjs("state", store.getState())
  return null
}

export function dumpData() {
  const fdata = dsh.lookupFile(store.getState())?.data
  logjs("file-data", fdata)
  return null
}

export function dumpBuffer() {
  logjs("last-events", store.lastEvents)
  return null
}

export function getState(strPath: string) {
  const path = str.split(strPath, " ")
    .map((s: string) => d.readString(s))
  const state = store.getState()
  console.log(d.getIn(state, path))
  return null
}

function dumpObjects(state: any) {
  const objects = dsh.lookupPageObjects(state)
  logjs("objects", objects)
  return null
}

export function dumpObjects() {
  dumpObjects(store.getState())
}

function getObject(state: any, name: string) {
  const objects = dsh.lookupPageObjects(state)
  const result = d.seek(
    (shape: any) => shape.name === name,
    Object.values(objects)
  ) || objects[uuid.parse(name)]
  return result
}

export function dumpObject(name: string) {
  return getObject(store.getState(), name)
}

function getSelected(state: any) {
  return dsh.lookupSelected(state)
}

export function dumpSelected() {
  const objects = dsh.lookupPageObjects(store.getState())
  const result = getSelected(store.getState()).map((id: any) => objects[id])
  logjs("selected", result)
  return null
}

export function dumpSelectedEdn() {
  const objects = dsh.lookupPageObjects(store.getState())
  const result = getSelected(store.getState()).map((id: any) => objects[id])
  pprint(result, { length: 30, level: 30 })
  return null
}

export function previewSelected() {
  store.emit(dp.openPreviewSelected)
}

export function parent() {
  const objects = dsh.lookupPageObjects(store.getState())
  const selectedId = dsh.getSelectedIds(store.getState())[0]
  const parentId = dm.getIn(objects, [selectedId, "parentId"])
  if (parentId) {
    const parent = objects[parentId]
    console.log(`${parent.name} - ${parent.id}`)
  }
  return null
}

export function frame() {
  const objects = dsh.lookupPageObjects(store.getState())
  const selectedId = dsh.getSelectedIds(store.getState())[0]
  const frameId = dm.getIn(objects, [selectedId, "frameId"])
  if (frameId) {
    const frame = objects[frameId]
    console.log(`${frame.name} - ${frame.id}`)
  }
  return null
}

export function selectByObjectId(objectId: string) {
  const [, pageId, shapeId] = str.split(objectId, "/")
  store.emit(dcm.goToWorkspace({ pageId: uuid.parse(pageId) }))
  store.emit(dws.selectShape(uuid.parse(shapeId)))
}

export function selectById(shapeId: string) {
  store.emit(dws.selectShape(uuid.parse(shapeId)))
}

function dumpTree(
  state: any,
  showIds?: boolean,
  showTouched?: boolean,
  showModified?: boolean
) {
  const pageId = state.currentPageId
  const file = dsh.lookupFile(state)
  const libraries = state.files
  ctf.dumpTree(file, pageId, libraries, {
    showIds,
    showTouched,
    showModified,
  })
}

export function dumpTree(
  showIds?: boolean,
  showTouched?: boolean,
  showModified?: boolean
) {
  dumpTree(store.getState(), showIds, showTouched, showModified)
}

function dumpSubtree(
  state: any,
  shapeId?: string,
  showIds?: boolean,
  showTouched?: boolean,
  showModified?: boolean
) {
  const pageId = state.currentPageId
  const file = dsh.lookupFile(state)
  const libraries = state.files
  const resolvedShapeId = shapeId
    ? uuid.parse(shapeId)
    : dsh.lookupSelected(state)[0]

  if (resolvedShapeId) {
    ctf.dumpSubtree(file, pageId, resolvedShapeId, libraries, {
      showIds,
      showTouched,
      showModified,
    })
  } else {
    console.log("no selected shape")
  }
}

export function dumpSubtree(
  shapeId?: string,
  showIds?: boolean,
  showTouched?: boolean,
  showModified?: boolean
) {
  dumpSubtree(store.getState(), shapeId, showIds, showTouched, showModified)
}

export function applyChanges(changes: string) {
  const fileId = store.getState().currentFileId
  const changesDecoded = t.decodeStr(changes)
  store.emit(
    dwc.commitChanges({
      redoChanges: changesDecoded,
      undoChanges: [],
      saveUndo: true,
      fileId,
    })
  )
}

export function fetchApply(url: string) {
  return p.then(
    p.then(
      fetch(url),
      (response: Response) => response.text()
    ),
    applyChanges
  )
}

export function resetViewport() {
  store.emit(dw.resetZoom, dw.updateViewportPosition({ x: () => 0, y: () => 0 }))
}

export function hideUI() {
  store.emit(dw.toggleLayoutFlag("hide-ui"))
}

export function shortcuts() {
  const printShortcuts = (shortcuts: any) => {
    console.table(
      Object.fromEntries(
        Object.entries(shortcuts).map(([key, { command }]: [any, any]) => [
          d.name(key),
          Array.isArray(command) ? command.join(" | ") : command,
        ])
      )
    )
  }
  const style = "font-weight: bold; font-size: 1.25rem;"
  console.log("%c Dashboard", style)
  printShortcuts((window as any).app.main.data.dashboard.shortcuts)
  console.log("%c Workspace", style)
  printShortcuts((window as any).app.main.data.workspace.shortcuts)
  console.log("%c Path", style)
  printShortcuts((window as any).app.main.data.workspace.path.shortcuts)
  console.log("%c Viewer", style)
  printShortcuts((window as any).app.main.data.viewer.shortcuts)
  return null
}

export function nodeStats() {
  const rootNode = dom.query(".viewport .render-shapes")
  const numNodes = dom.seqNodes(rootNode).length
  return { number: numNodes }
}

function modifToJs(modifTree: any, objects: any) {
  return Object.fromEntries(
    Array.from(modifTree.entries()).map(([k, v]: [any, any]) => [
      objects[k]?.name,
      v,
    ])
  )
}

export function dumpModifiers() {
  const objects = dsh.lookupPageObjects(store.getState())
  const modifiers = store.getState().workspaceModifiers
  console.log(modifToJs(modifiers, objects))
  return null
}

export function setWorkspaceReadOnly(readOnly: boolean) {
  store.emit(dwcm.setWorkspaceReadOnly(readOnly))
}

export function validate(shapeId?: string) {
  try {
    const file = dsh.lookupFile(store.getState())
    const libraries = store.getState().files
    if (shapeId) {
      const page = dm.getIn(file, [
        "data",
        "pages-index",
        store.getState().currentPageId,
      ])
      return cfv.validateShape(uuid.parse(shapeId), file, page, libraries)
    }
    return cfv.validateFile(file, libraries)
  } catch (e) {
    ex.printThrowable(e)
  }
}

export function validateSchema() {
  try {
    const file = dsh.lookupFile(store.getState())
    cfv.validateFileSchema(file)
  } catch (e) {
    ex.printThrowable(e)
  }
}

export function repair(reload?: boolean) {
  store.emit(
    ptk.createEffectEvent((state: any) => {
      const features = state.features
      const sid = state.sessionId
      const file = dsh.lookupFile(state)
      const libs = state.files
      const errors = cfv.validateFile(file, libs)
      l.dbg("hint", "repair current file", "errors", errors.length)
      const changes = cfr.repairFile(file, libs, errors)
      const params = {
        id: file.id,
        revn: file.revn,
        vern: file.vern,
        sessionId: sid,
        changes,
        features,
        skipValidate: true,
      }
      return rp.cmd("update-file", params).pipe(
        rx.subs!(
          () => {
            if (reload) {
              dom.reloadCurrentWindow()
            }
          },
          (cause: any) => ex.printThrowable(cause)
        )
      )
    })
  )
}

export function fixOrphanShapes() {
  store.emit(dw.fixOrphanShapes)
}

export function findComponentsNorefs() {
  store.emit(dw.findComponentsNorefs)
}

function setShapeRef(id: string, shapeRef: string) {
  return ptk.createWatchEvent(() => {
    const shapeId = uuid.parse(id)
    const ref = uuid.parse(shapeRef)
    return rx.of(dw.updateShape(shapeId, { shapeRef: ref }))
  })
}

export function setShapeRef(id: string, shapeRef: string) {
  store.emit(setShapeRef(id, shapeRef))
}

export function networkAverages() {
  console.log(store.lastEvents)
  return null
}

export function printLastException() {
  if (errors.lastException) {
    ex.printThrowable(errors.lastException)
  }
}
