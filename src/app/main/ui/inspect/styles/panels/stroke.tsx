// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from 'react';
import { PropertiesRow } from 'app/main/ui/inspect/styles/rows/properties-row';
import { ColorPropertiesRow } from 'app/main/ui/inspect/styles/rows/color-properties-row';
import { getCssRuleHumanized } from 'app/main/ui/inspect/attributes/common';
import * as css from 'app/util/code-gen/style-css';
import * as colorTypes from 'app/common/types/color';
import * as cfg from 'app/config';
import * as color from 'app/util/color';
import { name } from 'app/common/data';

const properties: (string | symbol)[] = ['borderColor', 'borderStyle', 'borderWidth'];

const shapePropToStrokeProp: Record<string, string> = {
  borderStyle: 'strokeStyle',
  borderWidth: 'strokeWidth',
  borderColor: 'strokeColor'
};

function generateStrokeShorthand(shapes: any[], colorSpace: string): string | undefined {
  if (shapes.length !== 1) return undefined;

  const shape = shapes[0];
  return (shape.strokes || []).reduce((acc: string, stroke: any) => {
    const strokeType = colorTypes.strokeToColor(stroke);
    const strokeWidth = stroke.strokeWidth;
    const strokeStyle = stroke.strokeStyle;
    const colorValue = strokeType.color;
    const formattedColorValue = color.colorToFormatBackground(strokeType, colorSpace);
    const colorGradient = strokeType.gradient;
    const gradientData = colorGradient ? {
      type: colorGradient.type,
      stops: colorGradient.stops
    } : null;
    const colorImage = strokeType.image;

    let value = '';
    if (colorValue) {
      value = `border: ${strokeWidth}px ${name(strokeStyle)} ${formattedColorValue};`;
    } else if (colorGradient) {
      value = `border-image: ${color.gradientToCss(gradientData)} 100 / ${strokeWidth}px;`;
    } else if (colorImage) {
      value = `border-image: url(${cfg.resolveFileMedia(colorImage)}) 100 / ${strokeWidth}px;`;
    }

    return acc ? `${acc} ${value}` : value;
  }, '');
}

interface StrokePanelProps {
  shapes: any[];
  objects: any;
  resolvedTokens?: any;
  colorSpace?: string;
  onStrokeShorthand?: (shorthand: { panel: string; property: string }) => void;
}

export function StrokePanel({
  shapes,
  objects,
  resolvedTokens,
  colorSpace = 'hex',
  onStrokeShorthand
}: StrokePanelProps) {
  const shorthand = React.useMemo(
    () => generateStrokeShorthand(shapes, colorSpace),
    [shapes, colorSpace]
  );

  React.useEffect(() => {
    if (onStrokeShorthand) {
      onStrokeShorthand({ panel: 'stroke', property: shorthand || '' });
    }
  }, [shorthand, onStrokeShorthand]);

  return (
    <div className="stroke-panel">
      {shapes.map(shape => (
        <div key={shape.id} className="stroke-shape">
          {(shape.strokes || []).map((stroke: any, idx: number) =>
            properties.map(property => {
              const value = css.getCssValue(objects, stroke, property);
              const strokeType = colorTypes.strokeToColor(stroke);
              const propertyName = getCssRuleHumanized(property);
              const propertyValue = css.getCssProperty(objects, stroke, property);
              const resolvedToken = idx === 0 ? resolvedTokens?.[shape.appliedTokens?.[shapePropToStrokeProp[property as string] || property]] : undefined;
              const hasColorToken = resolvedToken &&
                resolvedToken.resolvedValue === strokeType.color &&
                idx === 0;

              if (property === 'borderColor') {
                return (
                  <ColorPropertiesRow
                    key={`${idx}${property}`}
                    term={propertyName}
                    color={strokeType}
                    token={hasColorToken ? resolvedToken : undefined}
                    format={colorSpace}
                    copiable={true}
                  />
                );
              }

              return (
                <PropertiesRow
                  key={`${idx}${property}`}
                  term={name(propertyName)}
                  detail={String(value)}
                  token={resolvedToken}
                  property={propertyValue}
                  copiable={true}
                />
              );
            })
          )}
        </div>
      ))}
    </div>
  );
}
