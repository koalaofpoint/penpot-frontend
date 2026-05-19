// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from 'react';
import { PropertiesRow } from 'app/main/ui/inspect/styles/rows/properties-row';
import { getCssRuleHumanized } from 'app/main/ui/inspect/attributes/common';
import * as css from 'app/util/code-gen/style-css';
import { name } from 'app/common/data';

const properties: (string | symbol)[] = [
  'display',
  'flexDirection',
  'flexWrap',
  'gridTemplateRows',
  'gridTemplateColumns',
  'alignItems',
  'alignContent',
  'justifyItems',
  'justifyContent',
  'rowGap',
  'columnGap',
  'gap',
  'paddingInlineStart',
  'paddingInlineEnd',
  'paddingBlockStart',
  'paddingBlockEnd'
];

const shapePropToPaddingProp: Record<string, string> = {
  paddingBlockStart: 'p1',
  paddingInlineEnd: 'p2',
  paddingBlockEnd: 'p3',
  paddingInlineStart: 'p4'
};

function hasPadding(shape: any): boolean {
  const padding = shape.layoutPadding;
  const paddingKeys = ['p1', 'p2', 'p3', 'p4'];
  return paddingKeys.some(key =>
    key in padding && padding[key] !== 0
  );
}

function generateLayoutShorthand(shapes: any[], objects: any): string | undefined {
  const shape = shapes[0];
  if (!shape || shapes.length !== 1) return undefined;

  const shorthandPadding = hasPadding(shape)
    ? css.getCssProperty(objects, shape, 'padding')
    : undefined;

  const shorthandGrid = shape.layout === 'grid'
    ? `grid: ${css.getCssValue(objects, shape, 'gridTemplateRows')} / ${css.getCssValue(objects, shape, 'gridTemplateColumns')};`
    : undefined;

  if (!shorthandPadding && !shorthandGrid) return undefined;
  return `${shorthandGrid || ''} ${shorthandPadding || ''}`;
}

interface LayoutPanelProps {
  shapes: any[];
  objects: any;
  resolvedTokens?: any;
  onLayoutShorthand?: (shorthand: { panel: string; property: string }) => void;
}

export function LayoutPanel({
  shapes,
  objects,
  resolvedTokens,
  onLayoutShorthand
}: LayoutPanelProps) {
  const shorthand = React.useMemo(
    () => generateLayoutShorthand(shapes, objects),
    [shapes, objects]
  );

  React.useEffect(() => {
    if (onLayoutShorthand) {
      onLayoutShorthand({ panel: 'layout', property: shorthand || '' });
    }
  }, [shorthand, onLayoutShorthand]);

  return (
    <div className="variants-panel">
      {shapes.map(shape => (
        <div key={shape.id} className="layout-shape">
          {properties.map(property => {
            const value = css.getCssValue(objects, shape, property);
            if (!value) return null;

            const propertyName = getCssRuleHumanized(property);
            const appliedProp = shapePropToPaddingProp[property as string] || property;
            const resolvedToken = resolvedTokens?.[shape.appliedTokens?.[appliedProp]];
            const propertyValue = resolvedToken ? '' : css.getCssProperty(objects, shape, property);

            return (
              <PropertiesRow
                key={`layout-property-${property}`}
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
