// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { useCallback } from "react";
import * as Data from "app/common/data";
import * as DW from "app/main/data/workspace";
import * as SC from "app/main/data/workspace/shortcuts";
import { store } from "app/main/store";
import * as DeprecatedIcon from "app/main/ui/icons";
import * as DOM from "app/util/dom";
import { tr } from "app/util/i18n";
import * as styles from "./align.module.css";

interface AlignOptionsProps {
  shapes: any[];
  objects: any;
}

export const AlignOptions: React.FC<AlignOptionsProps> = ({
  shapes,
  objects,
}) => {
  const disabledAlign = !DW.canAlign(shapes, objects);
  const disabledDistribute = !DW.canDistribute(shapes);

  const alignObjects = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const value = Data.parse(
        DOM.getData(event.currentTarget, "value"),
        "keyword"
      ) as string;
      store.emit(DW.alignObjects(value));
    },
    []
  );

  const distributeObjects = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const value = Data.parse(
        DOM.getData(event.currentTarget, "value"),
        "keyword"
      ) as string;
      store.emit(DW.distributeObjects(value));
    },
    []
  );

  if (disabledAlign && disabledDistribute) {
    return null;
  }

  return (
    <div className={styles.alignOptions}>
      <div className={styles.alignGroupHorizontal}>
        <button
          className={`${styles.alignButton} ${disabledAlign ? styles.disabled : ""}`}
          disabled={disabledAlign}
          title={tr("workspace.align.hleft", SC.getTooltip("align-left"))}
          data-value="hleft"
          onClick={alignObjects}
        >
          {DeprecatedIcon.alignLeft}
        </button>

        <button
          className={`${styles.alignButton} ${disabledAlign ? styles.disabled : ""}`}
          disabled={disabledAlign}
          title={tr("workspace.align.hcenter", SC.getTooltip("align-hcenter"))}
          data-value="hcenter"
          onClick={alignObjects}
        >
          {DeprecatedIcon.alignHorizontalCenter}
        </button>

        <button
          className={`${styles.alignButton} ${disabledAlign ? styles.disabled : ""}`}
          disabled={disabledAlign}
          title={tr("workspace.align.hright", SC.getTooltip("align-right"))}
          data-value="hright"
          onClick={alignObjects}
        >
          {DeprecatedIcon.alignRight}
        </button>

        <button
          className={`${styles.alignButton} ${disabledDistribute ? styles.disabled : ""}`}
          disabled={disabledDistribute}
          title={tr(
            "workspace.align.hdistribute",
            SC.getTooltip("h-distribute")
          )}
          data-value="horizontal"
          onClick={distributeObjects}
        >
          {DeprecatedIcon.distributeHorizontally}
        </button>
      </div>

      <div className={styles.alignGroupVertical}>
        <button
          className={`${styles.alignButton} ${disabledAlign ? styles.disabled : ""}`}
          disabled={disabledAlign}
          title={tr("workspace.align.vtop", SC.getTooltip("align-top"))}
          data-value="vtop"
          onClick={alignObjects}
        >
          {DeprecatedIcon.alignTop}
        </button>

        <button
          className={`${styles.alignButton} ${disabledAlign ? styles.disabled : ""}`}
          disabled={disabledAlign}
          title={tr("workspace.align.vcenter", SC.getTooltip("align-vcenter"))}
          data-value="vcenter"
          onClick={alignObjects}
        >
          {DeprecatedIcon.alignVerticalCenter}
        </button>

        <button
          className={`${styles.alignButton} ${disabledAlign ? styles.disabled : ""}`}
          disabled={disabledAlign}
          title={tr("workspace.align.vbottom", SC.getTooltip("align-bottom"))}
          data-value="vbottom"
          onClick={alignObjects}
        >
          {DeprecatedIcon.alignBottom}
        </button>

        <button
          className={`${styles.alignButton} ${disabledDistribute ? styles.disabled : ""}`}
          disabled={disabledDistribute}
          title={tr(
            "workspace.align.vdistribute",
            SC.getTooltip("v-distribute")
          )}
          data-value="vertical"
          onClick={distributeObjects}
        >
          {DeprecatedIcon.distributeVerticalSpacing}
        </button>
      </div>
    </div>
  );
};