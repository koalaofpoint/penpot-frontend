// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useMemo } from "react"
import * as dm from "app/common/data/macros"
import * as ctk from "app/common/types/component"
import * as ctl from "app/common/types/shape/layout"
import * as refs from "app/main/refs"
import { BlurMenu } from "app/main/ui/workspace/sidebar/options/menus/blur"
import { ColorSelectionMenu } from "app/main/ui/workspace/sidebar/options/menus/color-selection"
import { ComponentMenu, ComponentVariantMain } from "app/main/ui/workspace/sidebar/options/menus/component"
import { ConstraintsMenu } from "app/main/ui/workspace/sidebar/options/menus/constraints"
import { ExportsMenu } from "app/main/ui/workspace/sidebar/options/menus/exports"
import { FillMenu } from "app/main/ui/workspace/sidebar/options/menus/fill"
import { FrameGrid } from "app/main/ui/workspace/sidebar/options/menus/frame-grid"
import { GridCell } from "app/main/ui/workspace/sidebar/options/menus/grid-cell"
import { LayerMenu } from "app/main/ui/workspace/sidebar/options/menus/layer"
import { LayoutContainerMenu } from "app/main/ui/workspace/sidebar/options/menus/layout-container"
import { LayoutItemMenu } from "app/main/ui/workspace/sidebar/options/menus/layout-item"
import { selectMeasureKeys, MeasuresMenu } from "app/main/ui/workspace/sidebar/options/menus/measures"
import { ShadowMenu } from "app/main/ui/workspace/sidebar/options/menus/shadow"
import { StrokeMenu } from "app/main/ui/workspace/sidebar/options/menus/stroke"

interface FrameOptionsProps {
  shape: any
  shapesWithChildren?: any[]
  libraries?: any
  fileId?: string
  pageId?: string
}

export const FrameOptions: React.FC<FrameOptionsProps> = ({
  shape,
  shapesWithChildren,
  libraries,
  fileId,
  pageId,
}) => {
  const shapeId = dm.getProp(shape, "id")
  const shapeType = dm.getProp(shape, "type")
  const ids = useMemo(() => [shapeId], [shapeId])
  const shapes = useMemo(() => [shape], [shape])

  const appliedTokens = shape.appliedTokens

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

  const measureValues = selectMeasureKeys(shape)

  const constraintValues = {
    constraints: shape.constraints,
  }

  const layoutContainerValues = {
    layoutContainer: shape.layoutContainer,
  }

  const layoutItemValues = {
    layoutItem: shape.layoutItem,
  }

  const isLayoutChildRef = useMemo(() => refs.isLayoutChild(ids), [ids])
  const isLayoutChild = isLayoutChildRef?.deref()

  const isFlexParentRef = useMemo(() => refs.flexLayoutChild(ids), [ids])
  const isFlexParent = isFlexParentRef?.deref()

  const isGridParentRef = useMemo(() => refs.gridLayoutChild(ids), [ids])
  const isGridParent = isGridParentRef?.deref()

  const parentsByIdsRef = useMemo(() => refs.parentsByIds(ids), [ids])
  const parents = parentsByIdsRef?.deref()

  const isLayoutContainer = ctl.anyLayout(shape)
  const isFlexLayout = ctl.flexLayout(shape)
  const isGridLayout = ctl.gridLayout(shape)
  const isLayoutChildAbsolute = ctl.itemAbsolute(shape)
  const isVariant = ctk.isVariantContainer(shape)

  return (
    <>
      <LayerMenu
        ids={ids}
        type={shapeType}
        appliedTokens={appliedTokens}
        values={layerValues}
      />

      <MeasuresMenu
        ids={ids}
        appliedTokens={appliedTokens}
        values={measureValues}
        type={shapeType}
        shapes={shapes}
      />

      <ComponentMenu shapes={shapes} />

      {isVariant && <ComponentVariantMain shapes={shapes} />}

      <LayoutContainerMenu
        type={shapeType}
        ids={ids}
        appliedTokens={appliedTokens}
        values={layoutContainerValues}
        multiple={false}
      />

      {ids.length === 1 && isLayoutChild && isGridParent && (
        <GridCell.Options
          shape={parents[0]}
          cell={ctl.getCellByShapeId(parents[0], ids[0])}
        />
      )}

      {(isLayoutChild || isLayoutContainer) && (
        <LayoutItemMenu
          ids={ids}
          type={shapeType}
          values={layoutItemValues}
          isFlexParent={isFlexParent}
          isGridParent={isGridParent}
          isFlexLayout={isFlexLayout}
          isGridLayout={isGridLayout}
          isLayoutChild={isLayoutChild}
          appliedTokens={appliedTokens}
          isLayoutContainer={isLayoutContainer}
          shape={shape}
        />
      )}

      {!isLayoutChild || isLayoutChildAbsolute ? (
        <ConstraintsMenu ids={ids} values={constraintValues} />
      ) : null}

      <FillMenu
        ids={ids}
        type={shapeType}
        values={shape}
        appliedTokens={appliedTokens}
      />

      <StrokeMenu
        ids={ids}
        type={shapeType}
        values={strokeValues}
        appliedTokens={appliedTokens}
      />

      <ColorSelectionMenu
        type={shapeType}
        shapes={shapesWithChildren}
        fileId={fileId}
        libraries={libraries}
      />

      <ShadowMenu ids={ids} values={shape.shadow} />

      <BlurMenu ids={ids} values={{ blur: shape.blur }} />

      <FrameGrid shape={shape} />

      <ExportsMenu
        type={shapeType}
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
