// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from 'react';
import { PropertiesRow } from 'app/main/ui/inspect/styles/rows/properties-row';
import { getCssRuleHumanized } from 'app/main/ui/inspect/attributes/common';
import * as css from 'app/util/code-gen/style-css';

const properties: (string | symbol)[] = ['opacity', 'blendMode'];

interface VisibilityPanelProps {
  shapes: any[];
  objects: any;
  resolvedTokens?: any;
}

export function VisibilityPanel({
  shapes,
  objects,
  resolvedTokens
}: VisibilityPanelProps) {
  return (
    <div className="visibility-panel">
      {shapes.map(shape => (
        <div key={shape.id} className="visibility-shape">
          {properties.map(property => {
            const value = css.getCssValue(objects, shape, property);
            if (!value) return null;

            const propertyName = getCssRuleHumanized(property);
            const resolvedToken = resolvedTokens?.[shape.appliedTokens?.[property]];
            const propertyValue = resolvedToken ? '' : css.getCssProperty(objects, shape, property);

            return (
              <PropertiesRow
                key={`visibility-property-${property}`}
                term={propertyName}
                detail={String(value)}
                token={resolvedToken}
                property={propertyValue}
                copiable={true}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
