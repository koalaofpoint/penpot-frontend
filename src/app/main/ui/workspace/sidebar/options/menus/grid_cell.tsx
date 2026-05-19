// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useState, useCallback, useMemo } from "react"
import * as attrs from "app/common/attrs"
import * as d from "app/common/data"
import * as dm from "app/common/data/macros"
import * as mth from "app/common/math"
import * as ctl from "app/common/types/shape/layout"
import * as dw from "app/main/data/workspace"
import * as dwge from "app/main/data/workspace/grid-layout/editor"
import * as dwsl from "app/main/data/workspace/shape-layout"
import {store} from "app/main/store"
import {NumericInput} from "app/main/ui/components/numeric-input"
import {RadioButton, RadioButtons} from "app/main/ui/components/radio-buttons"
import {TitleBar} from "app/main/ui/components/title-bar"
import * as i from "app/main/ui/ds/foundations/assets/icon"
import * as hooks from "app/main/ui/hooks"
import * as deprecatedIcon from "app/main/ui/icons"
import * as dom from "app/util/dom"
import {tr} from "app/util/i18n"

const cellProps = [
  "id",
  "position",
  "row",
  "row-span",
  "column",
  "column-span",
  "align-self",
  "justify-self",
  "area-name",
]

interface SetSelfAlignmentProps {
  isCol?: boolean
  alignment: string
  setAlignment: (value: string) => void
}

const SetSelfAlignment: React.FC<SetSelfAlignmentProps> = ({
  isCol = false,
  alignment,
  setAlignment,
}) => {
  const type = isCol ? "col" : "row"
  const alignmentValue = alignment || "auto"

  const handleSetAlignment = useCallback(
    (value: string) => {
      setAlignment(value as any)
    },
    [setAlignment]
  )

  return (
    <div className={(stl as any).css("self-align-menu")}>
      <RadioButtons
        selected={d.name(alignmentValue)}
        onChange={handleSetAlignment}
        allowEmpty={true}
        name={dm.str("flex-align-items-", type)}
      >
        <RadioButton
          value="start"
          icon={isCol ? i.alignSelfRowLeft : i.alignSelfColumnTop}
          title="Align self start"
          id={dm.str("align-self-start-", type)}
        />
        <RadioButton
          value="center"
          icon={isCol ? i.alignSelfRowCenter : i.alignSelfColumnCenter}
          title="Align self center"
          id={dm.str("align-self-center-", type)}
        />
        <RadioButton
          value="end"
          icon={isCol ? i.alignSelfRowRight : i.alignSelfColumnBottom}
          title="Align self end"
          id={dm.str("align-self-end-", type)}
        />
        <RadioButton
          value="stretch"
          icon={isCol ? i.alignSelfRowStretch : i.alignSelfColumnStretch}
          title="Align self stretch"
          id={dm.str("align-self-stretch-", type)}
        />
      </RadioButtons>
    </div>
  )
}

interface GridCellOptionsProps {
  shape: any
  cell?: any
  cells?: any[]
}

export const GridCellOptions: React.FC<GridCellOptionsProps> = ({
  shape,
  cell,
  cells,
}) => {
  const [open, setOpen] = useState(true)

  const cellsMemo = hooks.useEqualMemo(cells)
  const cellData = cell || attrs.getAttrsMulti(cellsMemo, cellProps)

  const multiple = cellData?.id === "multiple"
  const cellIds = multiple
    ? cellsMemo.map((c: any) => c.id)
    : [cellData?.id]
  const cellIdsMemo = hooks.useEqualMemo(cellIds)

  const {
    position,
    areaName,
    alignSelf,
    justifySelf,
    column,
    columnSpan,
    row,
    rowSpan,
  } = cellData || {}

  const columnEnd =
    d.num(column) && d.num(columnSpan) ? column + columnSpan : null
  const rowEnd = d.num(row) && d.num(rowSpan) ? row + rowSpan : null

  let cellMode = position || "auto"
  if (
    cellMode === "auto" &&
    (columnSpan > 1 || rowSpan > 1)
  ) {
    cellMode = "manual"
  }

  const validAreaCells = useMemo(
    () => ctl.validAreaCells(cellsMemo),
    [cellsMemo]
  )

  const setAlignment = useCallback(
    (value: any) => {
      if (alignSelf === value) {
        store.emit(
          dwsl.updateGridCells(shape.id, cellIdsMemo, { "align-self": null })
        )
      } else {
        store.emit(
          dwsl.updateGridCells(shape.id, cellIdsMemo, { "align-self": value })
        )
      }
    },
    [shape?.id, cellIdsMemo, alignSelf]
  )

  const setJustifySelf = useCallback(
    (value: any) => {
      if (justifySelf === value) {
        store.emit(
          dwsl.updateGridCells(shape.id, cellIdsMemo, { "justify-self": null })
        )
      } else {
        store.emit(
          dwsl.updateGridCells(shape.id, cellIdsMemo, { "justify-self": value })
        )
      }
    },
    [shape?.id, cellIdsMemo, justifySelf]
  )

  const onGridCoordinates = useCallback(
    (field: string, type: string, value: number) => {
      if (multiple) return

      const roundedValue = mth.round(value)
      const roundedColumn = mth.round(column)
      const roundedRow = mth.round(row)

      let property: string
      let newValue: number

      if (type === "column") {
        if (field === "all" || field === "start") {
          property = "column"
          newValue = roundedValue
        } else if (field === "end") {
          property = "column-span"
          newValue = Math.max(1, roundedValue - roundedColumn)
        }
      } else if (type === "row") {
        if (field === "all" || field === "start") {
          property = "row"
          newValue = roundedValue
        } else if (field === "end") {
          property = "row-span"
          newValue = Math.max(1, roundedValue - roundedRow)
        }
      }

      if (property && newValue !== undefined) {
        store.emit(
          dwsl.updateGridCellPosition(shape.id, cellData.id, {
            [property]: newValue,
          })
        )
      }
    },
    [multiple, column, row, shape?.id, cellData?.id]
  )

  const onAreaNameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = dom.getValue(event.target)
      if (value === "") {
        store.emit(
          dwsl.updateGridCells(shape.id, cellIdsMemo, { "area-name": null })
        )
      } else {
        store.emit(
          dwsl.updateGridCells(shape.id, cellIdsMemo, { "area-name": value })
        )
      }
    },
    [shape?.id, cellIdsMemo]
  )

  const setCellMode = useCallback(
    (mode: string) => {
      store.emit(dwsl.changeCellsMode(shape.id, cellIdsMemo, mode as any))
    },
    [shape?.id, cellIdsMemo]
  )

  const toggleEditMode = useCallback(() => {
    store.emit(dw.startEditionMode(shape.id), dwge.clearSelection(shape.id))
  }, [shape?.id])

  return (
    <div className={(stl as any).css("grid-cell-menu")}>
      <div className={(stl as any).css("grid-cell-menu-title")}>
        <TitleBar
          collapsable={true}
          collapsed={!open}
          onCollapsed={() => setOpen(!open)}
          title="Grid cell"
        />
      </div>

      {open && (
        <div className={(stl as any).css("grid-cell-menu-container")}>
          <div className={(stl as any).css("cell-mode", "row")}>
            <RadioButtons
              selected={d.name(cellMode)}
              onChange={setCellMode}
              name="cell-mode"
              wide={true}
            >
              <RadioButton value="auto" id="auto" />
              <RadioButton value="manual" id="manual" />
              <RadioButton
                value="area"
                id="area"
                disabled={!validAreaCells}
              />
            </RadioButtons>
          </div>

          {cellMode === "area" && (
            <div className={(stl as any).css("row")}>
              <input
                className={(stl as any).css("area-input")}
                key={dm.str("name-", cellData?.id)}
                id="grid-area-name"
                type="text"
                aria-label="grid-area-name"
                placeholder="Area name"
                defaultValue={areaName}
                autoComplete="off"
                onChange={onAreaNameChange}
              />
            </div>
          )}

          {!multiple && cellMode === "auto" && (
            <div className={(stl as any).css("row")}>
              <div className={(stl as any).css("grid-coord-group")}>
                <span className={(stl as any).css("icon")}>
                  {deprecatedIcon.flexVertical}
                </span>
                <div className={(stl as any).css("coord-input")}>
                  <NumericInput
                    placeholder="--"
                    title="Column"
                    onClick={(e: any) => dom.selectTarget(e)}
                    onChange={(value: number) =>
                      onGridCoordinates("all", "column", value)
                    }
                    integer={true}
                    value={column}
                  />
                </div>
              </div>

              <div className={(stl as any).css("grid-coord-group")}>
                <span className={(stl as any).css("icon")}>
                  {deprecatedIcon.flexHorizontal}
                </span>
                <div className={(stl as any).css("coord-input")}>
                  <NumericInput
                    placeholder="--"
                    title="Row"
                    onClick={(e: any) => dom.selectTarget(e)}
                    onChange={(value: number) =>
                      onGridCoordinates("all", "row", value)
                    }
                    integer={true}
                    value={row}
                  />
                </div>
              </div>
            </div>
          )}

          {!multiple && (cellMode === "manual" || cellMode === "area") && (
            <div className={(stl as any).css("row")}>
              <div className={(stl as any).css("grid-coord-group")}>
                <span className={(stl as any).css("icon")}>
                  {deprecatedIcon.flexVertical}
                </span>
                <div className={(stl as any).css("coord-input")}>
                  <NumericInput
                    placeholder="--"
                    onPointerDown={(e: any) => dom.selectTarget(e)}
                    onChange={(value: number) =>
                      onGridCoordinates("start", "column", value)
                    }
                    integer={true}
                    value={column}
                  />
                </div>
                <div className={(stl as any).css("coord-input")}>
                  <NumericInput
                    placeholder="--"
                    onPointerDown={(e: any) => dom.selectTarget(e)}
                    onChange={(value: number) =>
                      onGridCoordinates("end", "column", value)
                    }
                    integer={true}
                    value={columnEnd}
                  />
                </div>
              </div>

              <div className={(stl as any).css("grid-coord-group")}>
                <span className={(stl as any).css("icon")}>
                  {deprecatedIcon.flexHorizontal}
                </span>
                <div className={(stl as any).css("coord-input", "double")}>
                  <NumericInput
                    placeholder="--"
                    onPointerDown={(e: any) => dom.selectTarget(e)}
                    onChange={(value: number) =>
                      onGridCoordinates("start", "row", value)
                    }
                    integer={true}
                    value={row}
                  />
                </div>
                <div className={(stl as any).css("coord-input")}>
                  <NumericInput
                    placeholder="--"
                    onPointerDown={(e: any) => dom.selectTarget(e)}
                    onChange={(value: number) =>
                      onGridCoordinates("end", "row", value)
                    }
                    integer={true}
                    value={rowEnd}
                  />
                </div>
              </div>
            </div>
          )}

          <div className={(stl as any).css("row")}>
            <SetSelfAlignment
              isCol={false}
              alignment={alignSelf}
              setAlignment={setAlignment}
            />
            <SetSelfAlignment
              isCol={true}
              alignment={justifySelf}
              setAlignment={setJustifySelf}
            />
          </div>

          <div className={(stl as any).css("row")}>
            <button
              className={(stl as any).css("edit-grid-btn")}
              alt={tr("workspace.layout-grid.editor.options.edit-grid")}
              onClick={toggleEditMode}
            >
              {tr("workspace.layout-grid.editor.options.edit-grid")}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
