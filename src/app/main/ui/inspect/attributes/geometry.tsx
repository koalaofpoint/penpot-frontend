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
import { name, enumerate } from 'app/common/data';
import { getIn } from 'app/common/data';

const properties: (string | symbol)[] = [
  'width',
  'height',
  'left',
  'top',
  'borderRadius',
  'transform'
];

interface GeometryBlockProps {
  objects: any;
  shape: any;
}

function GeometryBlock({ objects, shape }: GeometryBlockProps) {
  return (
    <>
      {enumerate(properties).map(([idx, property]) => {
        const value = css.getCssValue(objects, shape, property);
        if (!value) return null;

        const propertyName = getCssRuleHumanized(property);
        return (
          <div
            key={`block-${idx}-${name(property)}`}
            title={propertyName}
            className="geometry-row"
          >
            <div className="global-attr-label">{propertyName}</div>
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

interface GeometryPanelProps {
  objects: any;
  shapes: any[];
}

export function GeometryPanel({ objects, shapes }: GeometryPanelProps) {
  return (
    <div className="attributes-block">
      <InspectTitleBar
        title={tr('inspect.attributes.size')}
        titleClass="geometry-attr-title"
      >
        {shapes.length === 1 && (
          <CopyButton
            data={css.getShapePropertiesCss(objects, shapes[0], properties)}
            className="copy-btn-title"
          />
        )}
      </InspectTitleBar>
      {shapes.map(shape => (
        <GeometryBlock
          key={shape.id}
          objects={objects}
          shape={shape}
        />
      ))}
    </div>
  );
}
