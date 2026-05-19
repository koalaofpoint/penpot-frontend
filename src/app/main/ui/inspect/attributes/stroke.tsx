// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from 'react';
import { ColorRow, getCssRuleHumanized } from 'app/main/ui/inspect/attributes/common';
import { InspectTitleBar } from 'app/main/ui/components/title-bar';
import { CopyButton } from 'app/main/ui/components/copy-button';
import * as css from 'app/util/code-gen/style-css';
import * as cf from 'app/config';
import { name } from 'app/common/data';

const properties: (string | symbol)[] = ['borderStyle', 'borderWidth'];

interface StrokeColor {
  color?: string;
  opacity?: number;
  gradient?: any;
  id?: string;
  fileId?: string;
  image?: any;
}

function strokeToColor(stroke: any): StrokeColor {
  return {
    color: stroke.strokeColor,
    opacity: stroke.strokeOpacity,
    gradient: stroke.strokeColorGradient,
    id: stroke.strokeColorRefId,
    fileId: stroke.strokeColorRefFile,
    image: stroke.strokeImage
  };
}

function hasStroke(shape: any): boolean {
  return !!(shape.strokes && shape.strokes.length > 0);
}

interface StrokeBlockProps {
  objects: any;
  shape: any;
  stroke: any;
}

function StrokeBlock({ objects, shape, stroke }: StrokeBlockProps) {
  const [format, setFormat] = React.useState('hex');
  const color = strokeToColor(stroke);

  return (
    <div className="attributes-fill-block">
      {properties.map(property => {
        const propertyName = getCssRuleHumanized(property);
        const propertyValue = css.getCssValue(objects, stroke, property);
        return (
          <div key={`stroke-${shape.id}-${property}`} className="stroke-row">
            <div className="global-attr-label">{propertyName}</div>
            <div className="global-attr-value">
              <CopyButton data={css.getCssProperty(objects, stroke, property)}>
                <div className="button-children">{propertyValue}</div>
              </CopyButton>
            </div>
          </div>
        );
      })}
      <ColorRow
        color={color}
        property="Border color"
        format={format}
        onChangeFormat={setFormat}
        copyData={css.getShapePropertiesCss(objects, { strokes: [shape] }, properties)}
      />
    </div>
  );
}

interface StrokePanelProps {
  shapes: any[];
  colorSpace?: string;
}

export function StrokePanel({ shapes, colorSpace }: StrokePanelProps) {
  const filteredShapes = shapes.filter(hasStroke);

  if (filteredShapes.length === 0) {
    return null;
  }

  return (
    <div className="attributes-block">
      <InspectTitleBar
        title={tr('inspect.attributes.stroke')}
        titleClass="stroke-attr-title"
      />
      <div className="attributes-content">
        {filteredShapes.map(shape =>
          shape.strokes.map((stroke: any, idx: number) => (
            <StrokeBlock
              key={`stroke-color-${shape.id}-${idx}`}
              objects={{}}
              shape={shape}
              stroke={stroke}
            />
          ))
        )}
      </div>
    </div>
  );
}
