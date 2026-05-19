// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react"
import { useCallback, useState, useRef, useEffect, useMemo } from "react"
import * as d from "app.common.data"
import * as dm from "app.common.data.macros"
import * as dwu from "app.main.data.workspace.undo"
import * as refs from "app.main.refs"
import * as st from "app.main.store"
import * as i from "app.main.ui.ds.foundations.assets.icon"
import { EmptyState } from "app.main.ui.ds.product.empty-state"
import * as deprecatedIcon from "app.main.ui.icons"
import * as dom from "app.util.dom"
import { tr } from "app.util.i18n"
import * as str from "cuerdas.core"
import * as l from "okulary.core"

const workspaceUndo = l.derived("workspace-undo", st.state)

function getObject(id: string, entries: any[], objects: any) {
  const searchDeletedShape = (id: string, entries: any[]) => {
    const searchObj = (obj: any) => obj.type === ":add-obj" && obj.id === id
    const searchDeleteEntry = ({ undoChanges, redoChanges }: any) =>
      d.seek(searchObj, undoChanges) || d.seek(searchObj, redoChanges)
    const entry = d.seek(searchDeleteEntry, entries)
    return entry ? searchDeleteEntry(entry) : null
  }
  return objects[id] || searchDeletedShape(id, entries)
}

function extractOperation(change: any) {
  switch (change.type) {
    case ":add-obj":
    case ":add-page":
    case ":add-color":
    case ":add-media":
    case ":add-component":
    case ":add-typography":
      return ":new"
    case ":mod-obj":
    case ":mod-page":
    case ":mod-color":
    case ":mod-media":
    case ":mod-component":
    case ":mod-typography":
      return ":modify"
    case ":del-obj":
    case ":del-page":
    case ":del-color":
    case ":del-media":
    case ":del-component":
    case ":del-typography":
      return ":delete"
    case ":mov-objects":
      return ":move"
    default:
      return nil
  }
}

function parseChange(change: any) {
  const r = (type: string, id: any) => ({
    type,
    operation: extractOperation(change),
    detail: change.operations,
    id: Array.isArray(id) && id.length === 1 ? id[0] : Array.isArray(id) ? ":multiple" : id,
  })

  switch (change.type) {
    case ":set-option":
      return r(":page", change.pageId)
    case ":add-obj":
    case ":mod-obj":
    case ":del-obj":
      return r(":shape", change.id)
    case ":reg-objects":
      return null
    case ":mov-objects":
      return r(":shape", change.shapes)
    case ":add-page":
    case ":mod-page":
    case ":del-page":
    case ":mov-page":
      return r(":page", change.id)
    case ":add-color":
    case ":mod-color":
      return r(":color", change.color?.id)
    case ":del-color":
      return r(":color", change.id)
    case ":add-recent-color":
      return null
    case ":add-media":
    case ":mod-media":
      return r(":media", change.object?.id)
    case ":del-media":
      return r(":media", change.id)
    case ":add-component":
    case ":mod-component":
    case ":del-component":
      return r(":component", change.id)
    case ":add-typography":
    case ":mod-typography":
      return r(":typography", change.typography?.id)
    case ":del-typography":
      return r(":typography", change.id)
    default:
      return null
  }
}

function resolveShapeTypes(entries: any[], objects: any) {
  const resolveType = ({ type, id }: any) => {
    if (type !== ":shape" || id === ":multiple") return type
    const obj = getObject(id, entries, objects)
    return obj?.type
  }

  return (entries: any[]) =>
    entries.map((entry) => {
      if (entry.type === ":shape" && entry.id !== ":multiple") {
        return { ...entry, type: resolveType(entry) }
      }
      return entry
    })
}

function entryTypeToMessage(type: any, multiple: boolean) {
  const arity = multiple ? "multiple" : "single"
  const attribute = type ? type.replace(":", "") : "multiple"
  return tr(`workspace.undo.entry.${arity}.${attribute}`)
}

function entryToMessage(entry: any) {
  const value = entryTypeToMessage(entry.type, entry.id === ":multiple")
  switch (entry.operation) {
    case ":new":
      return tr("workspace.undo.entry.new", value)
    case ":modify":
      return tr("workspace.undo.entry.modify", value)
    case ":delete":
      return tr("workspace.undo.entry.delete", value)
    case ":move":
      return tr("workspace.undo.entry.move", value)
    default:
      return tr("workspace.undo.entry.unknown", value)
  }
}

function entryToIcon({ type }: any) {
  switch (type) {
    case ":page":
      return deprecatedIcon.document
    case ":shape":
      return deprecatedIcon.svg
    case ":rect":
      return deprecatedIcon.rectangle
    case ":circle":
      return deprecatedIcon.elipse
    case ":text":
      return deprecatedIcon.text
    case ":path":
      return deprecatedIcon.path
    case ":frame":
      return deprecatedIcon.board
    case ":group":
      return deprecatedIcon.group
    case ":color":
      return deprecatedIcon.dropIcon
    case ":typography":
      return deprecatedIcon.textPalette
    case ":component":
      return deprecatedIcon.component
    case ":media":
    case ":image":
      return deprecatedIcon.img
    default:
      return deprecatedIcon.svg
  }
}

function isShape(type: any) {
  return [":shape", ":rect", ":circle", ":text", ":path", ":frame", ":group"].includes(type)
}

function safeName(maybeKeyword: any) {
  return typeof maybeKeyword === "string" ? maybeKeyword : maybeKeyword?.name || ""
}

function selectEntry(candidates: any[]) {
  const entries = candidates
    .filter((e) => e !== null)
    .reduce((acc, entry) => {
      const key = [entry.type, entry.operation, entry.id]
      if (!acc[key]) acc[key] = []
      acc[key].push(entry)
      return acc
    }, {} as Record<string, any[]>)

  const single = (coll: any[]) => coll.length === 1
  const types = Object.keys(entries)
  const operations = Object.values(entries).map(([entry]) => [entry.type, entry.operation])

  let selectedEntry: any

  if (single(entries)) {
    selectedEntry = Object.values(entries)[0].slice(-1)[0]
  } else {
    const newOps = operations.filter(([, op]) => op === ":new")
    if (single(newOps)) {
      selectedEntry = entries[newOps[0]].slice(-1)[0]
    } else {
      const deleteOps = operations.filter(([type]) => type === ":group")
      if (single(deleteOps)) {
        selectedEntry = entries[deleteOps[0]].slice(-1)[0]
      } else {
        const moveOps = operations.filter(([, op]) => op === ":move")
        if (single(moveOps)) {
          selectedEntry = entries[moveOps[0]].slice(-1)[0]
        } else if (single(operations)) {
          selectedEntry = {
            type: Object.values(entries).every(([, e]) => isShape(e[0].type)) ? ":shape" : ":multiple",
            id: ":multiple",
            operation: operations[0][1],
          }
        } else {
          selectedEntry = { type: ":multiple", id: ":multiple", operation: ":multiple" }
        }
      }
    }
  }

  let detail: any
  switch (selectedEntry.operation) {
    case ":new":
      detail = selectedEntry.id
      break
    case ":modify":
      detail = candidates
        .filter((c) => c.operation === ":modify")
        .reduce((acc, c) => {
          const attrs = c.detail?.map((d: any) => safeName(d.attr)).filter(Boolean) || []
          return { ...acc, [c.id]: new Set(attrs) }
        }, {})
      break
    case ":delete":
      detail = candidates.filter((c) => c.operation === ":delete").map((c) => c.id)
      break
    default:
      detail = candidates
  }

  return { ...selectedEntry, detail }
}

function parseEntries(entries: any[], objects: any) {
  return entries
    .map(parseChange)
    .map(resolveShapeTypes(entries, objects))
    .map(selectEntry)
}

interface HistoryEntryDetailsProps {
  entry: any
}

const HistoryEntryDetails: React.FC<HistoryEntryDetailsProps> = ({ entry }) => {
  const { items } = workspaceUndo.deref()
  const objects = refs.workspacePageObjects.deref()

  return (
    <div className={css("history-entry-detail")}>
      {entry.operation === ":new" && items[entry.detail]?.name}
      {entry.operation === ":delete" && (
        <ul className={css("history-entry-details-list")}>
          {entry.detail?.map((id: string) => (
            <li key={id}>{items[id]?.name}</li>
          ))}
        </ul>
      )}
      {entry.operation === ":modify" && (
        <ul className={css("history-entry-details-list")}>
          {Object.entries(entry.detail || {}).map(([id, attributes]: [string, any]) => (
            <li key={id}>
              <div>{items[id]?.name}</div>
              <div>{Array.from(attributes).join(", ")}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

interface HistoryEntryProps {
  entry: any
  idxEntry: number
  disabled?: boolean
  current?: boolean
}

const HistoryEntry: React.FC<HistoryEntryProps> = ({ entry, idxEntry, disabled, current }) => {
  const [hover, setHover] = useState(false)
  const [showDetail, setShowDetail] = useState(false)

  const toggleShowDetail = useCallback(
    (event: React.MouseEvent) => {
      const hasEntry = dom.getData(dom.getCurrentTarget(event), "has-entry") === "true"
      dom.stopPropagation(event)
      if (hasEntry) {
        setShowDetail((prev) => !prev)
      }
    },
    []
  )

  return (
    <div
      className={css("history-entry", disabled, current, hover, showDetail)}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      onClick={() => st.emit!(dwu.undoToIndex(idxEntry))}
    >
      <div className={css("history-entry-summary")}>
        <div className={css("history-entry-summary-icon")}>{entryToIcon(entry)}</div>
        <div className={css("history-entry-summary-text")}>{entryToMessage(entry)}</div>
        {entry.detail && (
          <div
            className={css("history-entry-summary-button", showDetail)}
            onClick={toggleShowDetail}
            data-has-entry={String(entry.detail !== null)}
          >
            {deprecatedIcon.arrow}
          </div>
        )}
      </div>

      {showDetail && <HistoryEntryDetails entry={entry} />}
    </div>
  )
}

interface HistoryToolboxProps {
  // No props
}

export const HistoryToolbox: React.FC<HistoryToolboxProps> = () => {
  const objects = refs.workspacePageObjects.deref()
  const { items, index } = workspaceUndo.deref()
  const entries = useMemo(() => parseEntries(items, objects), [items, objects])

  if (entries.length === 0) {
    return (
      <div className={css("history-toolbox")}>
        <div className={css("history-entry-empty")}>
          <EmptyState icon={i.history} text={tr("workspace.undo.empty")} />
        </div>
      </div>
    )
  }

  return (
    <div className={css("history-toolbox")}>
      <ul className={css("history-entries")}>
        {entries
          .slice()
          .reverse()
          .map((entry, i) => (
            <HistoryEntry
              key={`entry-${i}`}
              entry={entry}
              idxEntry={entries.length - 1 - i}
              current={entries.length - 1 - i === index}
              disabled={entries.length - 1 - i > index}
            />
          ))}
      </ul>
    </div>
  )
}

function css(className: string, ...rest: any[]): string {
  return className
}
