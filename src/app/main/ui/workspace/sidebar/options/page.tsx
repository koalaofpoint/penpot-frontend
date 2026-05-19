// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { useCallback, useEffect, useMemo, useState } from "react";
import * as Data from "app/common/data";
import * as DW from "app/main/data/workspace";
import * as DWU from "app/main/data/workspace/undo";
import { store } from "app/main/store";
import * as refs from "app/main/refs";
import { TitleBar } from "app/main/ui/components/title-bar";
import { ColorRow } from "app/main/ui/workspace/sidebar/options/rows/color-row";
import { tr } from "app/util/i18n";
import * as styles from "./page.module.css";
import { derive } from "okulary/core";

const refBackgroundColor = derive({
  key: "background",
  derive: (workspacePage: any) => (workspacePage as any).background,
});

interface PageOptionsProps {}

export const PageOptions: React.FC<PageOptionsProps> = () => {
  const background = useMemo(
    () => store.getState().workspacePage?.background,
    []
  );

  const onChange = useCallback((color: any) => {
    store.emit(DW.changeCanvasColor(color));
  }, []);

  const onOpen = useCallback(() => {
    store.emit(DWU.startUndoTransaction("options"));
  }, []);

  const onClose = useCallback(() => {
    store.emit(DWU.commitUndoTransaction("options"));
  }, []);

  const color = useMemo(
    () => ({
      color: Data.coalesce(background, "#ffffff"),
      opacity: 1,
    }),
    [background]
  );

  return (
    <div className={styles.elementSet}>
      <div className={styles.elementTitle}>
        <TitleBar
          collapsable={false}
          title={tr("workspace.options.canvas-background")}
          className={styles.titleSpacingPage}
        />
      </div>
      <div className={styles.elementContent}>
        <ColorRow
          disableGradient={true}
          disableOpacity={true}
          disableImage={true}
          title={tr("workspace.options.canvas-background")}
          color={color}
          onChange={onChange}
          origin="canvas"
          onOpen={onOpen}
          onClose={onClose}
        />
      </div>
    </div>
  );
};