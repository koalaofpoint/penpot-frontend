// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useMemo } from "react"
import * as d from "app/common/data"
import * as dm from "app/common/data/macros"
import * as ctl from "app/common/types/shape/layout"
import * as refs from "app/main/refs"
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
import { SvgAttrsMenu } from "app/main/ui/workspace/sidebar/options/menus/svg-attrs"
import { TextMenu } from "app/main/ui/workspace/sidebar/options/menus/text"
import { getAttrs } from "app/main/ui/workspace/sidebar/options/shapes/multiple"

interface GroupOptionsProps {
  shape: any
  shapesWithChildren?: any[]
  libraries?: any
  fileId?: string
  pageId?: string
}

export const GroupOptions: React.FC<GroupOptionsProps> = React.memo(({
  shape,
  shapesWithChildren,
  libraries,
  fileId,
  pageId,
}) => {
  const id = dm.getProp(shape, "id")
  const type = dm.getProp(shape, "type")
  const ids = useMemo(() => [id], [id])
  const shapes = useMemo(() => [shape], [shape])

  const appliedTokens = shape.appliedTokens

  const objects = useMemo(() => {
    if (!shapesWithChildren) return {}
    return d.indexBy(shapesWithChildren, "id")
  }, [shapesWithChildren])

  const layoutContainerValues = {
    layoutContainer: shape.layoutContainer,
  }

  const svgValues = {
    svgAttrs: shape.svgAttrs,
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

  const [measureIds, measureValues] = getAttrs(shapes, objects, "measure")
  const [layerIds, layerValues] = getAttrs(shapes, objects, "layer")
  const [constraintIds, constraintValues] = getAttrs(shapes, objects, "constraint")
  const [fillIds, fillValues, fillTokens] = getAttrs(shapes, objects, "fill")
  const [shadowIds] = getAttrs(shapes, objects, "shadow")
  const [blurIds, blurValues] = getAttrs(shapes, objects, "blur")
  const [strokeIds, strokeValues, strokeTokens] = getAttrs(shapes, objects, "stroke")
  const [textIds, textValues] = getAttrs(shapes, objects, "text")
  const [layoutItemIds, layoutItemValues] = getAttrs(shapes, objects, "layout-item")

  return (
    <div className="options">
      <LayerMenu
        type={type}
        ids={layerIds}
        appliedTokens={appliedTokens}
        values={layerValues}
      />

      <MeasuresMenu
        type={type}
        ids={measureIds}
        appliedTokens={appliedTokens}
        values={measureValues}
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
          type={type}
          ids={layoutItemIds}
          isLayoutChild={true}
          isLayoutContainer={false}
          isFlexParent={isFlexParent}
          isGridParent={isGridParent}
          appliedTokens={appliedTokens}
          values={layoutItemValues}
        />
      )}

      {!isLayoutChild || isLayoutChildAbsolute ? (
        <ConstraintsMenu ids={constraintIds} values={constraintValues} />
      ) : null}

      {fillIds.length > 0 && (
        <FillMenu
          type={type}
          ids={fillIds}
          values={fillValues}
          appliedTokens={fillTokens}
        />
      )}

      {strokeIds.length > 0 && (
        <StrokeMenu
          type={type}
          ids={strokeIds}
          values={strokeValues}
          appliedTokens={strokeTokens}
        />
      )}

      <ColorSelectionMenu
        type={type}
        shapes={Object.values(objects)}
        fileId={fileId}
        libraries={libraries}
      />

      {shadowIds.length > 0 && (
        <ShadowMenu ids={ids} values={shape.shadow} type={type} />
      )}

      {blurIds.length > 0 && (
        <BlurMenu type={type} ids={blurIds} values={blurValues} />
      )}

      {textIds.length > 0 && (
        <TextMenu type={type} ids={textIds} values={textValues} />
      )}

      {svgValues && (
        <SvgAttrsMenu ids={ids} values={svgValues} />
      )}

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
    </div>
  )
})
