// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as csvg from 'app/common/svg';
import * as refs from 'app/main/refs';
import { ShapeContainer } from 'app/main/ui/shapes/shape';
import { SVGRawShape } from 'app/main/ui/shapes/svg-raw';
import { ShapeDebug } from 'app/main/ui/workspace/shapes/debug';
import React, { useMemo } from 'react';

interface SVGRawWrapperProps {
  shape: any;
  shapeWrapper: React.ComponentType<{ shape: any }>;
}

export function svgRawWrapperFactory(
  shapeWrapper: React.ComponentType<{ shape: any }>
): React.FC<SVGRawWrapperProps> {
  const SVGRawShapeComponent = SVGRawShape(shapeWrapper);

  const SVGRawWrapper: React.FC<SVGRawWrapperProps> = ({ shape }) => {
    const childsRef = useMemo(
      () => refs.childrenObjects(shape.id),
      [shape.id]
    );

    const childs = childsRef?.current ?? childsRef;
    const svgTag = shape.content?.tag;
    const isGroupSafe = csvg.svgGroupSafeTags.has(svgTag);

    return (
      <>
        <SVGRawShapeComponent shape={shape} childs={childs} />
        {process.env.NODE_ENV === 'development' && (
          <ShapeDebug shape={shape} />
        )}
      </>
    );
  };

  return React.memo(SVGRawWrapper, (prev, next) =>
    prev.shape === next.shape
  ) as unknown as React.FC<SVGRawWrapperProps>;
}
