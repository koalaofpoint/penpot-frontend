// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from 'react';
import { getCssRuleHumanized } from 'app/main/ui/inspect/attributes/common';
import { InspectTitleBar } from 'app/main/ui/components/title-bar';
import { CopyButton } from 'app/main/ui/components/copy-button';
import * as css from 'app/util/code-gen/style-css';
import { name } from 'app/common/data';

const properties: (string | symbol)[] = ['opacity', 'blendMode', 'visibility'];

function hasVisibilityProps(shape: any): boolean {
  const shapeType = shape.type;
  return (
    shapeType !== 'text' &&
    shapeType !== 'group' &&
    (shape.opacity || shape.blendMode || shape.visibility)
  );
}

interface VisibilityBlockProps {
  objects: any;
  shape: any;
}

function VisibilityBlock({ objects, shape }: VisibilityBlockProps) {
  return (
    <>
      {properties.map(property => {
        const value = css.getCssValue(objects, shape, property);
        if (!value) return null;

        const propertyName = getCssRuleHumanized(property);
        return (
          <div
            key={name(property)}
            className="visibility-row"
          >
            <div title={propertyName} className="global-attr-label">
              {propertyName}
            </div>
            <div className="global-attr-value">
              <CopyButton data={css.getCssProperty(objects, shape, property)}>
                <div className="button-children">{value}</div>
              </CopyButton>
            </div>
          </div>
        );
      })}
    </>
  );
}

interface VisibilityPanelProps {
  objects: any;
  shapes: any[];
}

export function VisibilityPanel({ objects, shapes }: VisibilityPanelProps) {
  const filteredShapes = React.useMemo(
    () => shapes.filter(hasVisibilityProps),
    [shapes]
  );

  if (filteredShapes.length === 0) {
    return null;
  }

  return (
    <div className="attributes-block">
      <InspectTitleBar
        title="Visibility"
        titleClass="visibility-attr-title"
      />
      {filteredShapes.length === 1 && (
        <CopyButton
          data={css.getShapePropertiesCss(objects, filteredShapes[0], properties)}
          className="copy-btn-title"
        />
      )}
      <div className="attributes-content">
        {filteredShapes.map(shape => (
          <VisibilityBlock
            key={shape.id}
            objects={objects}
            shape={shape}
          />
        ))}
      </div>
    </div>
  );
}
