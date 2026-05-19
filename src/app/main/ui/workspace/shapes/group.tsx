// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain One at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as dm from 'app/common/data/macros';
import * as refs from 'app/main/refs';
import { GroupShape } from 'app/main/ui/shapes/group';
import { ShapeContainer } from 'app/main/ui/shapes/shape';
import { checkShapeProps } from 'app/main/ui/workspace/shapes/common';
import { ShapeDebug } from 'app/main/ui/workspace/shapes/debug';
import React, { useMemo } from 'react';

interface GroupWrapperProps {
  shape: any;
  shapeWrapper: React.ComponentType<{ shape: any }>;
}

export function groupWrapperFactory(
  shapeWrapper: React.ComponentType<{ shape: any }>
): React.FC<GroupWrapperProps> {
  const GroupShapeComponent = GroupShape(shapeWrapper);

  const GroupWrapper: React.FC<GroupWrapperProps> = ({ shape }) => {
    const shapeId = dm.getProp(shape, 'id');

    const childsRef = useMemo(
      () => refs.childrenObjects(shapeId),
      [shapeId]
    );

    const childs = childsRef?.current ?? childsRef;

    return (
      <ShapeContainer shape={shape}>
        <GroupShapeComponent shape={shape} childs={childs} />
        {process.env.NODE_ENV === 'development' && (
          <ShapeDebug shape={shape} />
        )}
      </ShapeContainer>
    );
  };

  return React.memo(GroupWrapper, (prev, next) =>
    checkShapeProps(
      { shape: prev.shape },
      { shape: next.shape }
    )
  ) as unknown as React.FC<GroupWrapperProps>;
}
