// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react"
import * as GG from "app/common/geom/grid"
import * as CTG from "app/common/types/grid"
import * as DW from "app/main/data/workspace/grid"
import {refs} from "app/main/refs"
import {store} from "app/main/store"
import {EditableSelect} from "app/main/ui/components/editable-select"
import {NumericInput} from "app/main/ui/components/numeric-input"
import {Select} from "app/main/ui/components/select"
import {TitleBar} from "app/main/ui/components/title-bar"
import {IconButton} from "app/main/ui/ds/buttons/icon-button"
import * as I from "app/main/ui/ds/foundations/assets/icon"
import * as DeprecatedIcon from "app/main/ui/icons"
import {AdvancedOptions} from "app/main/ui/workspace/sidebar/options/common"
import {ColorRow} from "app/main/ui/workspace/sidebar/options/rows/color-row"
import {_tr} from "app/util/i18n"
import * as L from "okulary.core"

const lensDefaultGrids = L.derived(":default-grids", refs.workspacePage)

function getSizeOptions() {
  return [
    {value: null, label: _tr("workspace.options.grid.auto")},
    ":separator",
    18, 12, 10, 8, 6, 4, 3, 2,
  ]
}

interface GridOptionsProps {
  shapeId: string
  index: number
  grid: any
  frameWidth: number
  frameHeight: number
  defaultGridParams: any
}

const GridOptions: React.FC<GridOptionsProps> = React.memo((props) => {
  const {
    shapeId,
    index,
    grid,
    frameWidth,
    frameHeight,
    defaultGridParams,
  } = props

  const onChange = React.useCallback(
    (newGrid: any) => store.emit(DW.setFrameGrid(shapeId, index, newGrid)),
    [shapeId, index]
  )

  const onRemove = React.useCallback(
    () => store.emit(DW.removeFrameGrid(shapeId, index)),
    [shapeId, index]
  )

  const onSaveDefault = React.useCallback(
    (grid: any) => store.emit(DW.setDefaultGrid(grid.type, grid.params)),
    []
  )

  const sizeOptions = React.useMemo(getSizeOptions, [])

  const [state, setState] = React.useState({
    showAdvancedOptions: false,
    showMoreOptions: false,
  })

  const open = state.showAdvancedOptions
  const showMoreOptions = state.showMoreOptions

  const isHidden = !grid?.display

  const {type, display, params} = grid || {}

  const toggleAdvancedOptions = React.useCallback(
    () => setState(prev => ({...prev, showAdvancedOptions: !prev.showAdvancedOptions})),
    []
  )

  const toggleMoreOptions = React.useCallback(
    () => setState(prev => ({...prev, showMoreOptions: !prev.showMoreOptions})),
    []
  )

  const closeMoreOptions = React.useCallback(
    () => setState(prev => ({...prev, showMoreOptions: false})),
    []
  )

  const handleToggleVisibility = React.useCallback(
    () => {
      const newDisplay = grid.display === null ? false : !grid.display
      onChange({...grid, display: newDisplay})
    },
    [grid, onChange]
  )

  const handleChangeType = React.useCallback(
    (gridType: string) => {
      const defaults = defaultGridParams[gridType]
      onChange({...grid, type: gridType, params: defaults})
    },
    [grid, defaultGridParams, onChange]
  )

  const handleChange = (...keysPath: string[]) => {
    return (value: any) => {
      let newGrid = {...grid}
      let current = newGrid
      for (let i = 0; i < keysPath.length - 1; i++) {
        current = current[keysPath[i]]
      }
      current[keysPath[keysPath.length - 1]] = value
      onChange(newGrid)
    }
  }

  const handleChangeSize = React.useCallback(
    (size: number) => {
      const {margin, gutter, itemLength} = params
      const frameLength = type === ":column" ? frameWidth : frameHeight
      let newItemLength = itemLength
      if (size == null) {
        newItemLength = GG.calculateDefaultItemLength(frameLength, margin, gutter)
      }
      onChange({
        ...grid,
        params: {...params, size, itemLength: newItemLength},
      })
    },
    [grid, params, type, frameWidth, frameHeight, onChange]
  )

  const handleChangeItemLength = React.useCallback(
    (itemLength: number) => {
      itemLength = itemLength === 0 ? null : itemLength
      let size = params?.size
      if (itemLength == null && size == null) {
        size = 12
      }
      onChange({
        ...grid,
        params: {...params, size, itemLength},
      })
    },
    [grid, params, onChange]
  )

  const handleChangeColor = React.useCallback(
    (color: any) => {
      const {id, fileId, ...rest} = color
      onChange({
        ...grid,
        params: {...params, color: rest},
      })
    },
    [grid, params, onChange]
  )

  const handleDetachColor = React.useCallback(
    () => {
      const {id, fileId, ...rest} = params?.color || {}
      onChange({
        ...grid,
        params: {...params, color: rest},
      })
    },
    [grid, params, onChange]
  )

  const handleUseDefault = React.useCallback(
    () => {
      const defaultParams = defaultGridParams[type]
      const color = defaultParams?.color?.value || defaultParams?.color?.color
      const newParams = {
        ...defaultParams,
        color: {...defaultParams.color, color},
      }
      delete newParams.color.value
      onChange({...grid, params: newParams})
      closeMoreOptions()
    },
    [grid, defaultGridParams, type, onChange, closeMoreOptions]
  )

  const handleSetAsDefault = React.useCallback(
    () => {
      onSaveDefault(grid)
      closeMoreOptions()
    },
    [grid, onSaveDefault, closeMoreOptions]
  )

  const isDefault = grid?.params === defaultGridParams?.[type]

  return (
    <div className="grid-option">
      <div className="grid-title">
        <div className={["option-row", isHidden ? "hidden" : ""].filter(Boolean).join(" ")}>
          <button
            className={["show-options", open ? "selected" : ""].filter(Boolean).join(" ")}
            onClick={toggleAdvancedOptions}
          >
            <DeprecatedIcon.menu/>
          </button>

          <div className="type-select-wrapper">
            <Select
              className="grid-type-select"
              defaultValue={type}
              options={[
                {value: ":square", label: _tr("workspace.options.grid.square")},
                {value: ":column", label: _tr("workspace.options.grid.column")},
                {value: ":row", label: _tr("workspace.options.grid.row")},
              ]}
              onChange={handleChangeType}
            />
          </div>

          {type === ":square" ? (
            <div className="grid-size" title={_tr("workspace.options.size")}>
              <NumericInput
                min={0.01}
                value={params?.size || ""}
                noValidate={true}
                className="numeric-input"
                onChange={handleChange("params", "size")}
              />
            </div>
          ) : (
            <div className="editable-select-wrapper">
              <EditableSelect
                value={params?.size}
                type="number"
                className="column-select"
                inputClass="numeric-input"
                min={1}
                options={sizeOptions}
                placeholder="Auto"
                onChange={handleChangeSize}
              />
            </div>
          )}

          <div className="actions">
            <IconButton
              variant="ghost"
              aria-label={_tr("workspace.options.guides.toggle-guide")}
              onClick={handleToggleVisibility}
              icon={display ? "shown" : "hide"}
            />
            <IconButton
              variant="ghost"
              aria-label={_tr("workspace.options.guides.remove-guide")}
              onClick={onRemove}
              icon={I.remove}
            />
          </div>
        </div>
      </div>

      {grid?.display && (
        <AdvancedOptions
          className="grid-advanced-options"
          isVisible={open}
          onClose={toggleAdvancedOptions}
        >
          {type === ":square" && (
            <div className="square-row">
              <div className="advanced-row">
                <ColorRow
                  color={params?.color}
                  title={_tr("workspace.options.grid.params.color")}
                  disableGradient={true}
                  disableImage={true}
                  origin=":guides"
                  onChange={handleChangeColor}
                  onDetach={handleDetachColor}
                />
                <button
                  className={["show-more-options", showMoreOptions ? "selected" : ""].filter(Boolean).join(" ")}
                  onClick={toggleMoreOptions}
                >
                  <DeprecatedIcon.menu/>
                </button>
              </div>

              {showMoreOptions && (
                <div className="second-row">
                  <button
                    className={["btn-options", isDefault ? "disabled" : ""].filter(Boolean).join(" ")}
                    disabled={isDefault}
                    onClick={handleUseDefault}
                  >
                    <span>{_tr("workspace.options.grid.params.use-default")}</span>
                  </button>
                  <button
                    className={["btn-options", isDefault ? "disabled" : ""].filter(Boolean).join(" ")}
                    disabled={isDefault}
                    onClick={handleSetAsDefault}
                  >
                    <span>{_tr("workspace.options.grid.params.set-default")}</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {(type === ":column" || type === ":row") && (
            <div className="column-row">
              <div className="advanced-row">
                <div className="orientation-select-wrapper">
                  <Select
                    data-mousetrap-dont-stop={true}
                    defaultValue={params?.type}
                    className="orientation-select"
                    options={[
                      {value: ":stretch", label: _tr("workspace.options.grid.params.type.stretch")},
                      {value: ":left", label: type === ":row" ? _tr("workspace.options.grid.params.type.top") : _tr("workspace.options.grid.params.type.left")},
                      {value: ":center", label: _tr("workspace.options.grid.params.type.center")},
                      {value: ":right", label: type === ":row" ? _tr("workspace.options.grid.params.type.bottom") : _tr("workspace.options.grid.params.type.right")},
                    ]}
                    onChange={handleChange("params", "type")}
                  />
                </div>

                <div className="color-wrapper">
                  <ColorRow
                    color={params?.color}
                    title={_tr("workspace.options.grid.params.color")}
                    disableGradient={true}
                    disableImage={true}
                    origin=":guides"
                    onChange={handleChangeColor}
                    onDetach={handleDetachColor}
                  />
                </div>
              </div>

              <div className="advanced-row">
                <div
                  className="height"
                  title={type === ":row" ? _tr("workspace.options.grid.params.height") : _tr("workspace.options.grid.params.width")}
                >
                  <span className="icon-text">
                    {type === ":row" ? "H" : "W"}
                  </span>
                  <NumericInput
                    placeholder="Auto"
                    onChange={handleChangeItemLength}
                    nillable={true}
                    className="numeric-input"
                    value={params?.itemLength || ""}
                  />
                </div>

                <div className="gutter" title={_tr("workspace.options.grid.params.gutter")}>
                  <span className={["icon", type === ":row" ? "rotated" : ""].filter(Boolean).join(" ")}>
                    <DeprecatedIcon.gapHorizontal/>
                  </span>
                  <NumericInput
                    placeholder="0"
                    onChange={handleChange("params", "gutter")}
                    nillable={true}
                    className="numeric-input"
                    value={params?.gutter || 0}
                  />
                </div>

                <div className="margin" title={_tr("workspace.options.grid.params.margin")}>
                  <span className={["icon", type === ":column" ? "rotated" : ""].filter(Boolean).join(" ")}>
                    <DeprecatedIcon.gridMargin/>
                  </span>
                  <NumericInput
                    placeholder="0"
                    onChange={handleChange("params", "margin")}
                    nillable={true}
                    className="numeric-input"
                    value={params?.margin || 0}
                  />
                </div>

                <button
                  className={["show-more-options", showMoreOptions ? "selected" : ""].filter(Boolean).join(" ")}
                  onClick={toggleMoreOptions}
                  disabled={isDefault}
                >
                  <DeprecatedIcon.menu/>
                </button>

                {showMoreOptions && (
                  <div className="more-options">
                    <button className="option-btn" onClick={handleUseDefault}>
                      {_tr("workspace.options.grid.params.use-default")}
                    </button>
                    <button className="option-btn" onClick={handleSetAsDefault}>
                      {_tr("workspace.options.grid.params.set-default")}
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </AdvancedOptions>
      )}
    </div>
  )
})

interface FrameGridProps {
  shape: any
}

export const FrameGrid: React.FC<FrameGridProps> = (props) => {
  const {shape} = props

  const [open, setOpen] = React.useState(true)
  const frameGrids = shape?.grids
  const hasFrameGrids = frameGrids === ":multiple" || (frameGrids && frameGrids.length > 0)

  const toggleContent = React.useCallback(() => setOpen(prev => !prev), [])

  const id = shape?.id

  // Note: In Clojure, lensDefaultGrids is a derived lens
  // This would need proper integration with the store system
  const defaultGrids = React.useMemo(() => {
    return {}
  }, [])

  const defaultGridParams = React.useMemo(
    () => ({...CTG.defaultGridParams, ...defaultGrids}),
    [defaultGrids]
  )

  const handleCreateGrid = React.useCallback(
    () => store.emit(DW.addFrameGrid(id)),
    [id]
  )

  return (
    <div className="element-set">
      <div className="element-title">
        <TitleBar
          collapsable={hasFrameGrids}
          collapsed={!open}
          onCollapsed={toggleContent}
          className={!hasFrameGrids ? "title-spacing-board-grid" : ""}
          title={_tr("workspace.options.guides.title")}
        >
          <IconButton
            variant="ghost"
            aria-label={_tr("workspace.options.guides.add-guide")}
            onClick={handleCreateGrid}
            icon={I.add}
          />
        </TitleBar>
      </div>

      {open && frameGrids && frameGrids.length > 0 && (
        <div className="element-set-content">
          {frameGrids.map((grid: any, idx: number) => (
            <GridOptions
              key={`${id}-${idx}`}
              shapeId={id}
              grid={grid}
              index={idx}
              frameWidth={shape.width}
              frameHeight={shape.height}
              defaultGridParams={defaultGridParams}
            />
          ))}
        </div>
      )}
    </div>
  )
}
