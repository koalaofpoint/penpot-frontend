// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useMemo } from "react"
import * as dm from "app/common/data/macros"
import * as ctl from "app/common/types/shape/layout"
import * as refs from "app/main/refs"
import { BlurMenu } from "app/main/ui/workspace/sidebar/options/menus/blur"
import { ConstraintAttrs, ConstraintsMenu } from "app/main/ui/workspace/sidebar/options/menus/constraints"
import { ExportsMenu, ExportsAttrs } from "app/main/ui/workspace/sidebar/options/menus/exports"
import { FillMenu } from "app/main/ui/workspace/sidebar/options/menus/fill"
import { GridCell } from "app/main/ui/workspace/sidebar/options/menus/grid-cell"
import { LayerAttrs, LayerMenu } from "app/main/ui/workspace/sidebar/options/menus/layer"
import { LayoutContainerFlexAttrs, LayoutContainerMenu } from "app/main/ui/workspace/sidebar/options/menus/layout-container"
import { LayoutItemAttrs, LayoutItemMenu } from "app/main/ui/workspace/sidebar/options/menus/layout-item"
import { MeasureAttrs, MeasuresMenu } from "app/main/ui/workspace/sidebar/options/menus/measures"
import { ShadowMenu } from "app/main/ui/workspace/sidebar/options/menus/shadow"
import { StrokeAttrs, StrokeMenu } from "app/main/ui/workspace/sidebar/options/menus/stroke"
import { SvgAttrsMenu } from "app/main/ui/workspace/sidebar/options/menus/svg-attrs"

interface CircleOptionsProps {
  shape: any
  fileId?: string
  pageId?: string
}

export const CircleOptions: React.FC<CircleOptionsProps> = ({ shape, fileId, pageId }) => {
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

  const constraintValues = {
    constraints: shape.constraints,
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
        ids={[shape.id]}
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
          isLayoutContainer={false}
          isFlexParent={isFlexParent}
          isGridParent={isGridParent}
          appliedTokens={appliedTokens}
          shape={shape}
        />
      )}

      {!isLayoutChild || isLayoutChildAbsolute ? (
        <ConstraintsMenu ids={ids} values={constraintValues} />
      ) : null}

      <FillMenu
        ids={ids}
        type={type}
        values={shape}
        appliedTokens={appliedTokens}
      />

      <StrokeMenu
        ids={ids}
        type={type}
        values={strokeValues}
        appliedTokens={appliedTokens}
      />

      <ShadowMenu ids={ids} values={shape.shadow} />

      <BlurMenu ids={ids} values={{ blur: shape.blur }} />

      <SvgAttrsMenu ids={ids} values={{ svgAttrs: shape.svgAttrs }} />

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
