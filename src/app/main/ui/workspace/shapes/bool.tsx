// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as dm from 'app/common/data/macros';
import * as refs from 'app/main/refs';
import { BoolShape } from 'app/main/ui/shapes/bool';
import { ShapeContainer } from 'app/main/ui/shapes/shape';
import { checkShapeProps } from 'app/main/ui/workspace/shapes/common';
import { ShapeDebug } from 'app/main/ui/workspace/shapes/debug';
import React, { useMemo } from 'react';

interface BoolWrapperProps {
  shape: any;
  shapeWrapper: React.ComponentType<{ shape: any }>;
}

export function boolWrapperFactory(
  shapeWrapper: React.ComponentType<{ shape: any }>
): React.FC<BoolWrapperProps> {
  const BoolShapeComponent = BoolShape(shapeWrapper);

  const BoolWrapper: React.FC<BoolWrapperProps> = ({ shape }) => {
    const shapeId = dm.getProp(shape, 'id');

    const childSelRef = useMemo(
      () => refs.isChildSelected(shapeId),
      [shapeId]
    );

    const childsRef = useMemo(
      () => refs.selectBoolChildren(shapeId),
      [shapeId]
    );

    const childSel = childSelRef?.current ?? childSelRef;
    const childs = childsRef?.current ?? childsRef;

    const finalShape = childSel ? { ...shape, content: undefined } : shape;

    return (
      <ShapeContainer shape={finalShape}>
        <BoolShapeComponent shape={finalShape} childs={childs} />
        {process.env.NODE_ENV === 'development' && (
          <ShapeDebug shape={finalShape} />
        )}
      </ShapeContainer>
    );
  };

  return React.memo(BoolWrapper, (prev, next) =>
    checkShapeProps(
      { shape: prev.shape },
      { shape: next.shape }
    )
  ) as unknown as React.FC<BoolWrapperProps>;
}
