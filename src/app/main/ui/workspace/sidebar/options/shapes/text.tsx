// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useMemo } from "react"
import * as dm from "app/common/data/macros"
import * as ctl from "app/common/types/shape/layout"
import * as txt from "app/common/types/text"
import * as dwt from "app/main/data/workspace/texts"
import * as features from "app/main/features"
import * as refs from "app/main/refs"
import * as st from "app/main/store"
import { BlurMenu } from "app/main/ui/workspace/sidebar/options/menus/blur"
import { ColorSelectionMenu } from "app/main/ui/workspace/sidebar/options/menus/color-selection"
import { ConstraintsMenu } from "app/main/ui/workspace/sidebar/options/menus/constraints"
import { ExportsMenu } from "app/main/ui/workspace/sidebar/options/menus/exports"
import { FillMenu } from "app/main/ui/workspace/sidebar/options/menus/fill"
import { GridCell } from "app/main/ui/workspace/sidebar/options/menus/grid-cell"
import { LayerMenu } from "app/main/ui/workspace/sidebar/options/menus/layer"
import { LayoutContainerMenu } from "app/main/ui/workspace/sidebar/options/menus/layout-container"
import { LayoutItemMenu } from "app/main/ui/workspace/sidebar/options/menus/layout-item"
import { MeasuresMenu } from "app/main/ui/workspace/sidebar/options/menus/measures"
import { ShadowMenu } from "app/main/ui/workspace/sidebar/options/menus/shadow"
import { StrokeMenu } from "app/main/ui/workspace/sidebar/options/menus/stroke"
import { TextMenu } from "app/main/ui/workspace/sidebar/options/menus/text"

interface TextOptionsProps {
  shape: any
  libraries?: any
  fileId?: string
  pageId?: string
}

export const TextOptions: React.FC<TextOptionsProps> = ({
  shape,
  libraries,
  fileId,
  pageId,
}) => {
  const id = dm.getProp(shape, "id")
  const type = dm.getProp(shape, "type")
  const ids = useMemo(() => [id], [id])
  const shapes = useMemo(() => [shape], [shape])

  const appliedTokens = shape.appliedTokens

  const measureValues = {
    x: shape.x,
    y: shape.y,
    width: shape.width,
    height: shape.height,
    rotation: shape.rotation,
  }

  const strokeValues = {
    strokeColor: shape.strokeColor,
    strokeOpacity: shape.strokeOpacity,
    strokeWidth: shape.strokeWidth,
    strokeColorGradient: shape.strokeColorGradient,
  }

  const layerValues = {
    name: shape.name,
    visible: shape.visible,
    locked: shape.locked,
  }

  const layoutItemValues = {
    layoutItem: shape.layoutItem,
  }

  const layoutContainerValues = {
    layoutContainer: shape.layoutContainer,
  }

  const isLayoutChildRef = useMemo(() => refs.isLayoutChild(ids), [ids])
  const isLayoutChild = isLayoutChildRef?.deref()

  const isFlexParentRef = useMemo(() => refs.flexLayoutChild(ids), [ids])
  const isFlexParent = isFlexParentRef?.deref()

  const isGridParentRef = useMemo(() => refs.gridLayoutChild(ids), [ids])
  const isGridParent = isGridParentRef?.deref()

  const isLayoutChildAbsolute = ctl.itemAbsolute(shape)

  const parentsByIdsRef = useMemo(() => refs.parentsByIds(ids), [ids])
  const parents = parentsByIdsRef?.deref()

  const stateMap = features.activeFeature(st.state, "text-editor/v2")
    ? refs.workspaceV2EditorState.deref()
    : refs.workspaceEditorState.deref()

  const editorState = !features.activeFeature(st.state, "text-editor/v2")
    ? stateMap?.[id]
    : null

  const editorInstance = features.activeFeature(st.state, "text-editor/v2")
    ? refs.workspaceEditor.deref()
    : null

  const fillValues = dwt.currentTextValues({
    editorState,
    editorInstance,
    shape,
    attrs: [...txt.textFillAttrs, "fills"],
  })

  const textValues = {
    ...{ growType: shape.growType },
    ...{
      fillColor: shape.fillColor,
      fillOpacity: shape.fillOpacity,
      fillColorGradient: shape.fillColorGradient,
    },
    ...dwt.currentRootValues({
      shape,
      attrs: txt.rootAttrs,
    }),
    ...dwt.currentParagraphValues({
      editorState,
      editorInstance,
      shape,
      attrs: txt.paragraphAttrs,
    }),
    ...dwt.currentTextValues({
      editorState,
      editorInstance,
      shape,
      attrs: txt.textNodeAttrs,
    }),
  }

  return (
    <>
      <LayerMenu
        ids={ids}
        type={type}
        appliedTokens={appliedTokens}
        values={layerValues}
      />

      <MeasuresMenu
        ids={ids}
        type={type}
        values={measureValues}
        appliedTokens={appliedTokens}
        shapes={shapes}
      />

      <LayoutContainerMenu
        type={type}
        ids={ids}
        values={layoutContainerValues}
        appliedTokens={appliedTokens}
        multiple={false}
      />

      {ids.length === 1 && isLayoutChild && isGridParent && (
        <GridCell.Options
          shape={parents[0]}
          cell={ctl.getCellByShapeId(parents[0], ids[0])}
        />
      )}

      {isLayoutChild && (
        <LayoutItemMenu
          ids={ids}
          type={type}
          values={layoutItemValues}
          isLayoutChild={true}
          isFlexParent={isFlexParent}
          isGridParent={isGridParent}
          appliedTokens={appliedTokens}
          shape={shape}
        />
      )}

      {!isLayoutChild || isLayoutChildAbsolute ? (
        <ConstraintsMenu
          ids={ids}
          values={{
            constraints: shape.constraints,
          }}
        />
      ) : null}

      <TextMenu
        ids={ids}
        type={type}
        values={textValues}
      />

      <FillMenu
        ids={ids}
        type={type}
        values={fillValues}
        appliedTokens={appliedTokens}
      />

      <StrokeMenu
        ids={ids}
        type={type}
        values={strokeValues}
        disableStrokeStyle
        appliedTokens={appliedTokens}
      />

      {fillValues.fills === "multiple" && (
        <ColorSelectionMenu
          type={type}
          shapes={shapes}
          fileId={fileId}
          libraries={libraries}
        />
      )}

      <ShadowMenu ids={ids} values={shape.shadow} />

      <BlurMenu
        ids={ids}
        values={{ blur: shape.blur }}
      />

      <ExportsMenu
        type={type}
        ids={ids}
        shapes={shapes}
        values={{
          width: shape.width,
          height: shape.height,
          exportType: shape.exportType,
          preserveAspectRatio: shape.preserveAspectRatio,
        }}
        pageId={pageId}
        fileId={fileId}
      />
    </>
  )
}
