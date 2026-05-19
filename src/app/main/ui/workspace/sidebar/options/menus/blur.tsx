// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useCallback, useState } from "react";
import * as DWU from "app/main/data/workspace";
import * as DWSh from "app/main/data/workspace/shapes";
import { store } from "app/main/store";
import { NumericInput } from "app/main/ui/components/numeric-input";
import { TitleBar } from "app/main/ui/components/title-bar";
import { IconButton } from "app/main/ui/ds/buttons/icon-button";
import * as Icons from "app/main/ui/ds/foundations/assets/icon";
import * as DeprecatedIcon from "app/main/ui/icons";
import { tr } from "app/util/i18n";
import * as styles from "./blur.module.css";

const blurAttrs = ["blur"];

function createBlur() {
  return {
    id: crypto.randomUUID(),
    type: "layer-blur" as const,
    value: 4,
    hidden: false,
  };
}

interface BlurMenuProps {
  ids: string[];
  type: string;
  values: any;
}

export const BlurMenu: React.FC<BlurMenuProps> = ({ ids, type, values }) => {
  const blur = values.blur;
  const hasValue = blur !== undefined && blur !== null;

  const [state, setState] = useState({
    showContent: true,
    showMoreOptions: false,
  });

  const toggleContent = useCallback(() => {
    setState((prev) => ({ ...prev, showContent: !prev.showContent }));
  }, []);

  const toggleMoreOptions = useCallback(() => {
    setState((prev) => ({ ...prev, showMoreOptions: !prev.showMoreOptions }));
  }, []);

  const hidden = blur?.hidden ?? false;

  const change = useCallback(
    (updateFn: (shape: any) => any) => {
      store.emit(DWSh.updateShapes(ids, updateFn));
    },
    [ids]
  );

  const handleAdd = useCallback(() => {
    store.emit(DWU.triggerBoundingBoxCloaking(ids));
    change((shape) => ({ ...shape, blur: createBlur() }));
  }, [ids, change]);

  const handleDelete = useCallback(() => {
    store.emit(DWU.triggerBoundingBoxCloaking(ids));
    change((shape) => {
      const { blur: _blur, ...rest } = shape;
      return rest;
    });
  }, [ids, change]);

  const handleChange = useCallback(
    (value: number) => {
      store.emit(DWU.triggerBoundingBoxCloaking(ids));
      change((shape) => {
        if (!("blur" in shape)) {
          return { ...shape, blur: createBlur() };
        }
        return {
          ...shape,
          blur: { ...shape.blur, value },
        };
      });
    },
    [ids, change]
  );

  const handleToggleVisibility = useCallback(() => {
    store.emit(DWU.triggerBoundingBoxCloaking(ids));
    change((shape) => ({
      ...shape,
      blur: { ...shape.blur, hidden: !shape.blur.hidden },
    }));
  }, [ids, change]);

  const getTitle = () => {
    switch (type) {
      case "multiple":
        return tr("workspace.options.blur-options.title.multiple");
      case "group":
        return tr("workspace.options.blur-options.title.group");
      default:
        return tr("workspace.options.blur-options.title");
    }
  };

  return (
    <div className={styles.elementSet}>
      <div className={styles.elementTitle}>
        <TitleBar
          collapsable={hasValue}
          collapsed={!state.showContent}
          onCollapsed={toggleContent}
          title={getTitle()}
          className={`${styles.titleSpacingBlur} ${!hasValue ? styles.hideTitleSpacing : ""}`}
        >
          {!hasValue && (
            <IconButton
              variant="ghost"
              aria-label={tr("workspace.options.blur-options.add-blur")}
              onClick={handleAdd}
              icon={<Icons.AddIcon />}
              data-testid="add-blur"
            />
          )}
        </TitleBar>
      </div>
      {state.showContent && hasValue && (
        <div className={styles.elementSetContent}>
          <div
            className={`${styles.firstRow} ${hidden ? styles.hidden : ""}`}
          >
            <div className={styles.blurInfo}>
              <button
                className={`${styles.showMore} ${state.showMoreOptions ? styles.selected : ""}`}
                onClick={toggleMoreOptions}
              >
                {DeprecatedIcon.menu}
              </button>
              <span className={styles.label}>
                {tr("workspace.options.blur-options.title")}
              </span>
            </div>
            <div className={styles.actions}>
              <IconButton
                variant="ghost"
                aria-label={tr("workspace.options.blur-options.toggle-blur")}
                onClick={handleToggleVisibility}
                icon={hidden ? <Icons.HideIcon /> : <Icons.ShownIcon />}
              />
              <IconButton
                variant="ghost"
                aria-label={tr("workspace.options.blur-options.remove-blur")}
                onClick={handleDelete}
                icon={<Icons.RemoveIcon />}
              />
            </div>
          </div>
          {state.showMoreOptions && (
            <div className={styles.secondRow}>
              <label
                className={styles.label}
                htmlFor="blur-input-sidebar"
              >
                {tr("inspect.attributes.blur.value")}
              </label>
              <NumericInput
                className={styles.numericInput}
                placeholder="--"
                id="blur-input-sidebar"
                min={0}
                onChange={handleChange}
                value={blur.value}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};