// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { memo } from "react"
import { ShapeContainer } from "../../shapes/shape"
import { ShapeDebug } from "./debug"

export interface ShapeProps {
  shape: any
}

export const checkShapeProps = (np: any, op: any): boolean => {
  return np.shape === op.shape
}

export function genericWrapperFactory<P extends ShapeProps>(
  Component: React.FC<P>
): React.FC<{ shape: any }> {
  return memo(
    ({ shape }: { shape: any }) => {
      return (
        <ShapeContainer shape={shape}>
          <Component shape={shape} />
          {process.env.NODE_ENV === "development" && <ShapeDebug shape={shape} />}
        </ShapeContainer>
      )
    },
    (prevProps, nextProps) => checkShapeProps(prevProps, nextProps)
  ) as React.FC<{ shape: any }>
}
