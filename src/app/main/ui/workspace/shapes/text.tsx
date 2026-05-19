// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as dm from 'app/common/data/macros';
import * as dwt from 'app/main/data/workspace/texts';
import * as refs from 'app/main/refs';
import { ShapeContainer } from 'app/main/ui/shapes/shape';
import { TextShape } from 'app/main/ui/shapes/text';
import { ShapeDebug } from 'app/main/ui/workspace/shapes/debug';
import React, { useMemo } from 'react';

interface TextWrapperProps {
  shape: any;
}

export const TextWrapper: React.FC<TextWrapperProps> = ({ shape }) => {
  const shapeId = dm.getProp(shape, 'id');

  const textModifierRef = useMemo(
    () => refs.workspaceTextModifierById(shapeId),
    [shapeId]
  );

  const textModifier = textModifierRef?.current ?? textModifierRef;

  const finalShape = useMemo(() => {
    if (shape && textModifier) {
      return dwt.applyTextModifier(shape, textModifier);
    }
    return shape;
  }, [shape, textModifier]);

  return (
    <ShapeContainer shape={finalShape}>
      <g className="text-shape" key={dm.str(shapeId)}>
        <TextShape shape={finalShape} />
      </g>
      {process.env.NODE_ENV === 'development' && (
        <ShapeDebug shape={finalShape} />
      )}
    </ShapeContainer>
  );
};
