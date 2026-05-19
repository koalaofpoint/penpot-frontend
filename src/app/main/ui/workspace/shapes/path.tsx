// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as dm from 'app/common/data/macros';
import * as typesPath from 'app/common/types/path';
import * as refs from 'app/main/refs';
import { PathShape } from 'app/main/ui/shapes/path';
import { ShapeContainer } from 'app/main/ui/shapes/shape';
import { ShapeDebug } from 'app/main/ui/workspace/shapes/debug';
import * as l from 'okulary.core';
import React, { useMemo } from 'react';

interface ContentModifiersRef {
  contentModifiers?: any;
}

const makeContentModifiersRef = (id: string) => {
  return l.derived((local: any) => dm.getIn(local, ['edit-path', id, 'content-modifiers']), refs.workspaceLocal);
};

const applyContentModifiers = (shape: any, contentModifiers: any): any => {
  if (!contentModifiers) return shape;
  const updatedShape = {
    ...shape,
    content: typesPath.applyContentModifiers(shape.content, contentModifiers),
  };
  return typesPath.updateGeometry(updatedShape);
};

interface PathWrapperProps {
  shape: any;
}

export const PathWrapper: React.FC<PathWrapperProps> = ({ shape }) => {
  const shapeId = dm.getProp(shape, 'id');

  const contentModifiersRef = useMemo(
    () => makeContentModifiersRef(shapeId),
    [shapeId]
  );

  const contentModifiers = contentModifiersRef?.contentModifiers;

  const editingId = refs.selectedEdition;
  const editing = editingId === shapeId;

  const finalShape = useMemo(() => {
    if (!contentModifiers) return shape;
    return applyContentModifiers(shape, contentModifiers);
  }, [shape, contentModifiers]);

  return (
    <ShapeContainer
      shape={finalShape}
      pointerEvents={editing ? 'none' : undefined}
    >
      <PathShape shape={finalShape} />
      {process.env.NODE_ENV === 'development' && (
        <ShapeDebug shape={finalShape} />
      )}
    </ShapeContainer>
  );
};
