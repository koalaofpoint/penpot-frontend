// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from 'react';
import { PropertiesRow } from 'app/main/ui/inspect/styles/rows/properties-row';
import { name } from 'app/common/data';

function mapToCss(attr: Record<string, any>): string {
  return Object.entries(attr)
    .map(([attrKey, attrValue]) => `${name(attrKey)}:${attrValue}`)
    .join('; ');
}

interface SvgPanelProps {
  shape: any;
  objects?: any;
}

export function SvgPanel({ shape, objects }: SvgPanelProps) {
  return (
    <div className="svg-panel">
      <div key={shape.id} className="svg-shape">
        {Object.entries(shape.svgAttrs || {}).map(([attrKey, attrValue]) => {
          if (typeof attrValue === 'object' && attrValue !== null) {
            return Object.entries(attrValue).map(([subAttrKey, subAttrValue]) => {
              const propertyValue = mapToCss(subAttrValue);
              return (
                <PropertiesRow
                  key={`svg-property-${name(subAttrKey)}`}
                  term={name(subAttrKey)}
                  detail={String(subAttrValue)}
                  property={propertyValue}
                  copiable={true}
                />
              );
            });
          }

          return (
            <PropertiesRow
              key={`svg-property-${attrKey}`}
              term={name(attrKey)}
              detail={String(attrValue)}
              property={`${name(attrKey)}: ${attrValue};`}
              copiable={true}
            />
          );
        })}
      </div>
    </div>
  );
}
