// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from "react"
import { useSubscription } from "reactzustand"
import * as gsh from "app/common/geom/shapes"
import * as mth from "app/common/math"
import * as dsh from "app/main/data/helpers"
import * as dwt from "app/main/data/workspace/texts"
import * as features from "app/main/features"
import * as refs from "app/main/refs"
import * as wasmApi from "app/render-wasm/api"

interface TextEditionOutlineProps {
  shape: any
  zoom: number
  modifiers: any
}

export const TextEditionOutline: React.FC<TextEditionOutlineProps> = ({
  shape,
  zoom,
  modifiers,
}) => {
  const state = useSubscription((s: any) => s)

  if (features.activeFeature(state, "render-wasm/v1")) {
    const selrectTransform = useSubscription(() => refs.workspaceSelrect.get())
    const [selrect, transform] = dsh.getSelrect(selrectTransform, shape)

    const [srWidth, srHeight] =
      mth.close((selrect as any).width, 0.01) || mth.close((selrect as any).height, 0.01)
        ? (() => {
            const dims = wasmApi.getTextDimensions((shape as any).id)
            return [dims.width, dims.height]
          })()
        : [(selrect as any).width, (selrect as any).height]

    return (
      <rect
        className="main viewport-selrect"
        x={(selrect as any).x}
        y={(selrect as any).y}
        width={srWidth}
        height={srHeight}
        transform={transform}
        style={{
          stroke: "var(--color-accent-tertiary)",
          strokeWidth: 1 / zoom,
          fill: "none",
        }}
      />
    )
  }

  const modifiersForShape = modifiers ? modifiers[(shape as any).id]?.modifiers : undefined

  const textModifierRef = React.useMemo(() => {
    return refs.workspaceTextModifierById((shape as any).id)
  }, [(shape as any).id])

  const textModifier = useSubscription(() => textModifierRef.get())

  let finalShape = shape
  if (modifiersForShape != null) {
    finalShape = gsh.transformShape(modifiersForShape, finalShape)
  }
  if (textModifier != null) {
    finalShape = dwt.applyTextModifier(textModifier, finalShape)
  }

  const transform = gsh.transformStr(finalShape)
  const { x, y, width, height } = finalShape

  return (
    <rect
      className="main viewport-selrect"
      x={x}
      y={y}
      width={width}
      height={height}
      transform={transform}
      style={{
        stroke: "var(--color-accent-tertiary)",
        strokeWidth: 1 / zoom,
        fill: "none",
      }}
    />
  )
}