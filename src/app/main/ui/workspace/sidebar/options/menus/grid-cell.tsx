// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useCallback, useMemo, useState } from "react";
import * as Data from "app/common/data";
import * as GMath from "app/common/math";
import * as CTL from "app/common/types/shape/layout";
import * as DW from "app/main/data/workspace";
import * as DWGE from "app/main/data/workspace/grid-layout/editor";
import * as DWSL from "app/main/data/workspace/shape-layout";
import { store } from "app/main/store";
import { NumericInput } from "app/main/ui/components/numeric-input";
import { RadioButtons, RadioButton } from "app/main/ui/components/radio-buttons";
import { TitleBar } from "app/main/ui/components/title-bar";
import * as Icons from "app/main/ui/ds/foundations/assets/icon";
import * as DeprecatedIcon from "app/main/ui/icons";
import * as DOM from "app/util/dom";
import { tr } from "app/util/i18n";
import * as styles from "./grid-cell.module.css";

interface SetSelfAlignmentProps {
  isCol?: boolean;
  alignment: string;
  setAlignment: (value: string) => void;
}

const SetSelfAlignment: React.FC<SetSelfAlignmentProps> = ({
  isCol,
  alignment,
  setAlignment,
}) => {
  const alignmentOrDefault = alignment || "auto";
  const type = isCol ? "col" : "row";

  const handleSetAlignment = useCallback(
    (value: string) => {
      setAlignment(value as any);
    },
    [setAlignment]
  );

  return (
    <div className={styles.selfAlignMenu}>
      <RadioButtons
        selected={alignmentOrDefault}
        onChange={handleSetAlignment}
        allowEmpty={true}
        name={`flex-align-items-${type}`}
      >
        <RadioButton
          value="start"
          icon={isCol ? Icons.alignSelfRowLeft : Icons.alignSelfColumnTop}
          title="Align self start"
          id={`align-self-start-${type}`}
        />
        <RadioButton
          value="center"
          icon={isCol ? Icons.alignSelfRowCenter : Icons.alignSelfColumnCenter}
          title="Align self center"
          id={`align-self-center-${type}`}
        />
        <RadioButton
          value="end"
          icon={isCol ? Icons.alignSelfRowRight : Icons.alignSelfColumnBottom}
          title="Align self end"
          id={`align-self-end-${type}`}
        />
        <RadioButton
          value="stretch"
          icon={isCol ? Icons.alignSelfRowStretch : Icons.alignSelfColumnStretch}
          title="Align self stretch"
          id={`align-self-stretch-${type}`}
        />
      </RadioButtons>
    </div>
  );
};

interface GridCellOptionsProps {
  shape: any;
  cell: any;
  cells: any[];
}

export const GridCellOptions: React.FC<GridCellOptionsProps> = ({
  shape,
  cell,
  cells,
}) => {
  const [state, setState] = useState({ open: true });
  const open = state.open;

  const multiple = cell?.id === ":multiple";
  const cellIds = multiple ? cells.map((c) => c.id) : [cell?.id];

  const {
    position,
    areaName,
    alignSelf,
    justifySelf,
    column,
    columnSpan,
    row,
    rowSpan,
  } = cell || {};

  const columnEnd =
    typeof column === "number" && typeof columnSpan === "number"
      ? column + columnSpan
      : undefined;
  const rowEnd =
    typeof row === "number" && typeof rowSpan === "number"
      ? row + rowSpan
      : undefined;

  const cellMode = position || "auto";
  const effectiveCellMode =
    cellMode === "auto" && (columnSpan > 1 || rowSpan > 1) ? "manual" : cellMode;

  const validAreaCells = useMemo(() => CTL.validAreaCells(cells), [cells]);

  const setAlignment = useCallback(
    (value: string) => {
      if (alignSelf === value) {
        store.emit(DWSL.updateGridCells(shape.id, cellIds, { "align-self": null }));
      } else {
        store.emit(DWSL.updateGridCells(shape.id, cellIds, { "align-self": value }));
      }
    },
    [shape.id, cellIds, alignSelf]
  );

  const setJustifySelf = useCallback(
    (value: string) => {
      if (justifySelf === value) {
        store.emit(DWSL.updateGridCells(shape.id, cellIds, { "justify-self": null }));
      } else {
        store.emit(DWSL.updateGridCells(shape.id, cellIds, { "justify-self": value }));
      }
    },
    [shape.id, cellIds, justifySelf]
  );

  const onGridCoordinates = useCallback(
    (field: string, type: string, value: number) => {
      if (multiple) return;

      const roundedValue = GMath.round(value);
      const roundedColumn = GMath.round(column);
      const roundedRow = GMath.round(row);

      let property: string;
      let newValue: number;

      if (type === "column") {
        if (field === "all" || field === "start") {
          property = "column";
          newValue = roundedValue;
        } else {
          property = "column-span";
          newValue = Math.max(1, roundedValue - roundedColumn);
        }
      } else {
        if (field === "all" || field === "start") {
          property = "row";
          newValue = roundedValue;
        } else {
          property = "row-span";
          newValue = Math.max(1, roundedValue - roundedRow);
        }
      }

      store.emit(
        DWSL.updateGridCellPosition(shape.id, cell?.id, { [property]: newValue })
      );
    },
    [multiple, column, row, shape.id, cell?.id]
  );

  const onAreaNameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = DOM.getValue(event.target);
      if (value === "") {
        store.emit(DWSL.updateGridCells(shape.id, cellIds, { areaName: null }));
      } else {
        store.emit(DWSL.updateGridCells(shape.id, cellIds, { areaName: value }));
      }
    },
    [shape.id, cellIds]
  );

  const setCellMode = useCallback(
    (mode: string) => {
      const modeKeyword = mode as "auto" | "manual" | "area";
      store.emit(DWSL.changeCellsMode(shape.id, cellIds, modeKeyword));
    },
    [shape.id, cellIds]
  );

  const toggleEditMode = useCallback(() => {
    store.emit(DW.startEditionMode(shape.id));
    store.emit(DWGE.clearSelection(shape.id));
  }, [shape.id]);

  return (
    <div className={styles.gridCellMenu}>
      <div className={styles.gridCellMenuTitle}>
        <TitleBar
          collapsable={true}
          collapsed={!open}
          onCollapsed={() => setState((s) => ({ open: !s.open }))}
          title="Grid cell"
        />
      </div>

      {open && (
        <div className={styles.gridCellMenuContainer}>
          <div className={`${styles.cellMode} ${styles.row}`}>
            <RadioButtons
              selected={effectiveCellMode}
              onChange={setCellMode}
              name="cell-mode"
              wide={true}
            >
              <RadioButton value="auto" id="auto" />
              <RadioButton value="manual" id="manual" />
              <RadioButton value="area" id="area" disabled={!validAreaCells} />
            </RadioButtons>
          </div>

          {effectiveCellMode === "area" && (
            <div className={styles.row}>
              <input
                className={styles.areaInput}
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

          {!multiple && effectiveCellMode === "auto" && (
            <div className={styles.row}>
              <div className={styles.gridCoordGroup}>
                <span className={styles.icon}>{DeprecatedIcon.flexVertical}</span>
                <div className={styles.coordInput}>
                  <NumericInput
                    placeholder="--"
                    title="Column"
                    onChange={(val) => onGridCoordinates("all", "column", val)}
                    integer={true}
                    value={column}
                  />
                </div>
              </div>

              <div className={styles.gridCoordGroup}>
                <span className={styles.icon}>{DeprecatedIcon.flexHorizontal}</span>
                <div className={styles.coordInput}>
                  <NumericInput
                    placeholder="--"
                    title="Row"
                    onChange={(val) => onGridCoordinates("all", "row", val)}
                    integer={true}
                    value={row}
                  />
                </div>
              </div>
            </div>
          )}

          {!multiple &&
            (effectiveCellMode === "manual" || effectiveCellMode === "area") && (
              <div className={styles.row}>
                <div className={styles.gridCoordGroup}>
                  <span className={styles.icon}>{DeprecatedIcon.flexVertical}</span>
                  <div className={styles.coordInput}>
                    <NumericInput
                      placeholder="--"
                      onChange={(val) => onGridCoordinates("start", "column", val)}
                      integer={true}
                      value={column}
                    />
                  </div>
                  <div className={styles.coordInput}>
                    <NumericInput
                      placeholder="--"
                      onChange={(val) => onGridCoordinates("end", "column", val)}
                      integer={true}
                      value={columnEnd}
                    />
                  </div>
                </div>

                <div className={styles.gridCoordGroup}>
                  <span className={styles.icon}>{DeprecatedIcon.flexHorizontal}</span>
                  <div className={`${styles.coordInput} ${styles.double}`}>
                    <NumericInput
                      placeholder="--"
                      onChange={(val) => onGridCoordinates("start", "row", val)}
                      integer={true}
                      value={row}
                    />
                  </div>
                  <div className={styles.coordInput}>
                    <NumericInput
                      placeholder="--"
                      onChange={(val) => onGridCoordinates("end", "row", val)}
                      integer={true}
                      value={rowEnd}
                    />
                  </div>
                </div>
              </div>
            )}

          <div className={styles.row}>
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

          <div className={styles.row}>
            <button
              className={styles.editGridBtn}
              onClick={toggleEditMode}
            >
              {tr("workspace.layout-grid.editor.options.edit-grid")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};