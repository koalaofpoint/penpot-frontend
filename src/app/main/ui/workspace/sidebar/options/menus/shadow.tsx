// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useCallback, useMemo, useRef, useState } from "react";
import * as Data from "app/common/data";
import * as ShadowTypes from "app/common/types/shape/shadow";
import { v4 as uuidv4 } from "uuid";
import * as DW from "app/main/data/workspace";
import * as DC from "app/main/data/workspace/colors";
import * as DWSh from "app/main/data/workspace/shapes";
import { store } from "app/main/store";
import { TitleBar } from "app/main/ui/components/title-bar";
import { IconButton } from "app/main/ui/ds/buttons/icon-button";
import * as Icons from "app/main/ui/ds/foundations/assets/icon";
import { tr } from "app/util/i18n";
import * as styles from "./shadow.module.css";

const shadowAttrs = ["shadow"];

function createShadow() {
  return {
    id: uuidv4(),
    style: "drop-shadow" as const,
    color: {
      color: "#000000",
      opacity: 0.2,
    },
    offsetX: 4,
    offsetY: 4,
    blur: 4,
    spread: 0,
    hidden: false,
  };
}

function removeShadowByIndex(values: any[], index: number) {
  return values
    .map((shadow, idx) => [idx, shadow] as [number, any])
    .filter(([idx, _]) => idx !== index)
    .map(([_, shadow]) => shadow);
}

interface ShadowMenuProps {
  ids: string[];
  type: string;
  values: any;
}

export const ShadowMenu: React.FC<ShadowMenuProps> = ({
  ids,
  type,
  values,
}) => {
  const idsRef = useRef(ids);
  idsRef.current = ids;

  const shadows = useMemo(() => {
    if (values === ":multiple") return values;
    const result: any[] = [];
    (values || []).forEach((shadow: any, index: number) => {
      result.push({ ...shadow, index });
    });
    return result.length > 0 ? result : null;
  }, [values]);

  const hasShadows =
    values === ":multiple" || (shadows && shadows.length > 0);

  const [openState, setOpenState] = useState<Record<string, boolean>>({});
  const [showContent, setShowContent] = useState(true);

  const toggleContent = useCallback(() => {
    setShowContent((prev) => !prev);
  }, []);

  const onToggleOpen = useCallback((id: string) => {
    setOpenState((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const handleRemoveAll = useCallback(() => {
    store.emit(DW.triggerBoundingBoxCloaking(idsRef.current));
    store.emit(DWSh.updateShapes(idsRef.current, (shape: any) => {
      const { shadow: _shadow, ...rest } = shape;
      return rest;
    }));
  }, []);

  const handleReorder = useCallback(
    (fromPos: number, toSpaceBetweenPos: number) => {
      store.emit(DW.triggerBoundingBoxCloaking(idsRef.current));
      store.emit(DC.reorderShadows(idsRef.current, fromPos, toSpaceBetweenPos));
    },
    []
  );

  const onAddShadow = useCallback(() => {
    store.emit(DW.triggerBoundingBoxCloaking(idsRef.current));
    store.emit(DC.addShadow(idsRef.current, createShadow()));
  }, []);

  const onDetachColor = useCallback((index: number) => {
    const f = (shape: any) => {
      const shadow = shape.shadow ? [...shape.shadow] : [];
      if (shadow[index]) {
        const { id, fileId, refId, refFile, ...color } = shadow[index].color;
        shadow[index] = { ...shadow[index], color };
      }
      return { ...shape, shadow };
    };
    store.emit(DW.triggerBoundingBoxCloaking(idsRef.current));
    store.emit(DWSh.updateShapes(idsRef.current, f));
  }, []);

  const onToggleVisibility = useCallback((index: number) => {
    store.emit(DW.triggerBoundingBoxCloaking(idsRef.current));
    store.emit(DWSh.updateShapes(idsRef.current, (shape: any) => {
      const shadow = shape.shadow ? [...shape.shadow] : [];
      if (shadow[index]) {
        shadow[index] = { ...shadow[index], hidden: !shadow[index].hidden };
      }
      return { ...shape, shadow };
    }));
  }, []);

  const onRemove = useCallback((index: number) => {
    store.emit(DW.triggerBoundingBoxCloaking(idsRef.current));
    store.emit(DWSh.updateShapes(idsRef.current, (shape: any) => ({
      ...shape,
      shadow: removeShadowByIndex(shape.shadow || [], index),
    })));
  }, []);

  const onUpdate = useCallback(
    (index: number, attr: string, value: any) => {
      store.emit(DWSh.updateShapes(idsRef.current, (shape: any) => {
        const shadow = shape.shadow ? [...shape.shadow] : [];
        if (shadow[index]) {
          shadow[index] = ShadowTypes.checkShadow({
            ...shadow[index],
            [attr]: value,
          });
        }
        return { ...shape, shadow };
      }));
    },
    []
  );

  const getTitle = () => {
    switch (type) {
      case "multiple":
        return tr("workspace.options.shadow-options.title.multiple");
      case "group":
        return tr("workspace.options.shadow-options.title.group");
      default:
        return tr("workspace.options.shadow-options.title");
    }
  };

  return (
    <div className={styles.shadowSection} data-testid="shadow-section">
      <div className={styles.shadowTitle}>
        <TitleBar
          collapsable={hasShadows}
          collapsed={!showContent}
          onCollapsed={toggleContent}
          title={getTitle()}
        >
          {values !== ":multiple" && (
            <IconButton
              variant="ghost"
              aria-label={tr("workspace.options.shadow-options.add-shadow")}
              onClick={onAddShadow}
              icon={<Icons.AddIcon />}
              data-testid="add-shadow"
            />
          )}
        </TitleBar>
      </div>

      {showContent && (
        <div className={styles.shadowContent}>
          {values === ":multiple" && (
            <div className={styles.shadowMultiple}>
              <div className={styles.shadowMultipleLabel}>
                {tr("settings.multiple")}
              </div>
              <IconButton
                variant="ghost"
                aria-label={tr("workspace.options.shadow-options.remove-shadow")}
                onClick={handleRemoveAll}
                icon={<Icons.RemoveIcon />}
              />
            </div>
          )}

          {hasShadows && values !== ":multiple" && (
            <div className={styles.shadowContent}>
              {shadows.map(({ index, id, ...shadow }: any) => (
                <div key={`shadow-${index}`}>
                  {index}: {shadow.color?.color}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};