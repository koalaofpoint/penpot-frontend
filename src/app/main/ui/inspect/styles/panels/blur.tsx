// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from 'react';
import { PropertiesRow } from 'app/main/ui/inspect/styles/rows/properties-row';
import { getCssRuleHumanized } from 'app/main/ui/inspect/attributes/common';
import * as css from 'app/util/code-gen/style-css';

interface BlurPanelProps {
  shapes: any[];
  objects: any;
}

export function BlurPanel({ shapes, objects }: BlurPanelProps) {
  return (
    <div className="blur-panel">
      {shapes.map(shape => (
        <div key={shape.id} className="blur-shape">
          {(() => {
            const property = 'filter';
            const value = css.getCssValue(objects, shape, property);
            const propertyName = getCssRuleHumanized(property);
            const propertyValue = css.getCssProperty(objects, shape, property);

            return (
              <PropertiesRow
                key={`blur-property-${property}`}
                term={propertyName}
                detail={String(value)}
                property={propertyValue}
                copiable={true}
              />
            );
          })()}
        </div>
      ))}
    </div>
  );
}
