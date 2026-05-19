// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useCallback, useMemo } from "react";
import * as Data from "app/common/data";
import * as FileHelpers from "app/common/files/helpers";
import * as DWB from "app/main/data/workspace/bool";
import * as DWPS from "app/main/data/workspace/path/shapes-to-path";
import * as SC from "app/main/data/workspace/shortcuts";
import * as Features from "app/main/features";
import { store } from "app/main/store";
import { RadioButtons, RadioButton } from "app/main/ui/components/radio-buttons";
import * as Icons from "app/main/ui/ds/foundations/assets/icon";
import * as DeprecatedIcon from "app/main/ui/icons";
import { tr } from "app/util/i18n";
import * as styles from "./bool.module.css";

interface BoolOptionsProps {
  totalSelected: number;
  shapes: any[];
  shapesWithChildren: any[];
}

export const BoolOptions: React.FC<BoolOptionsProps> = ({
  totalSelected,
  shapes,
  shapesWithChildren,
}) => {
  const head = shapes[0];
  const headId = head?.id;

  const isGroup = FileHelpers.groupShape(head);
  const isBool = FileHelpers.boolShape(head);
  const headBoolType = isBool ? head.boolType : null;

  const renderWasmEnabled = Features.useFeature("render-wasm/v1");

  const hasInvalidShapes = useMemo(() => {
    const invalidChecker = renderWasmEnabled
      ? FileHelpers.frameShape
      : (shape: any) => FileHelpers.frameShape(shape) || FileHelpers.textShape(shape);
    return shapesWithChildren.some(invalidChecker);
  }, [shapesWithChildren, renderWasmEnabled]);

  const headNotGroupLike =
    totalSelected === 1 && !isGroup && !isBool;

  const disabledBoolBtns =
    totalSelected === 0 || hasInvalidShapes || headNotGroupLike;
  const disabledFlatten = totalSelected === 0 || hasInvalidShapes;

  const onChange = useCallback(
    (boolType: string) => {
      const boolTypeKeyword = boolType as "union" | "difference" | "intersection" | "exclude";

      if (totalSelected > 1) {
        store.emit(DWB.createBool(boolTypeKeyword));
      } else if (totalSelected === 1 && isGroup) {
        store.emit(DWB.groupToBool(headId, boolTypeKeyword));
      } else if (totalSelected === 1 && isBool) {
        if (headBoolType === boolTypeKeyword) {
          store.emit(DWB.boolToGroup(headId));
        } else {
          store.emit(DWB.changeBoolType(headId, boolTypeKeyword));
        }
      }
    },
    [totalSelected, isGroup, isBool, headId, headBoolType]
  );

  const flattenObjects = useCallback(() => {
    store.emit(DWPS.convertSelectedToPath());
  }, []);

  if (disabledBoolBtns && disabledFlatten) {
    return null;
  }

  return (
    <div className={styles.booleanOptions}>
      <div className={styles.boolGroup}>
        <RadioButtons
          selected={headBoolType || ""}
          className={styles.booleanRadioBtn}
          onChange={onChange}
          name="bool-options"
        >
          <RadioButton
            icon={Icons.booleanUnion}
            value="union"
            disabled={disabledBoolBtns}
            title={`${tr("workspace.shape.menu.union")} (${SC.getTooltip("bool-union")})`}
            id="bool-opt-union"
          />
          <RadioButton
            icon={Icons.booleanDifference}
            value="difference"
            disabled={disabledBoolBtns}
            title={`${tr("workspace.shape.menu.difference")} (${SC.getTooltip("bool-difference")})`}
            id="bool-opt-differente"
          />
          <RadioButton
            icon={Icons.booleanIntersection}
            value="intersection"
            disabled={disabledBoolBtns}
            title={`${tr("workspace.shape.menu.intersection")} (${SC.getTooltip("bool-intersection")})`}
            id="bool-opt-intersection"
          />
          <RadioButton
            icon={Icons.booleanExclude}
            value="exclude"
            disabled={disabledBoolBtns}
            title={`${tr("workspace.shape.menu.exclude")} (${SC.getTooltip("bool-exclude")})`}
            id="bool-opt-exclude"
          />
        </RadioButtons>
      </div>

      <button
        className={`${styles.flattenButton} ${disabledFlatten ? styles.disabled : ""}`}
        title={tr("workspace.shape.menu.flatten")}
        disabled={disabledFlatten}
        onClick={flattenObjects}
      >
        {DeprecatedIcon.booleanFlatten}
      </button>
    </div>
  );
};