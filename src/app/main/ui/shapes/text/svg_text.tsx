// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useMemo, useContext } from 'react';
import * as d from '@app/common/data';
import * as dm from '@app/common/data/macros';
import * as gsh from '@app/common/geom/shapes';
import * as cf from '@app/config';
import { renderId as renderIdContext } from '@app/main/ui/context';
import * as attrs from '@app/main/ui/shapes/attrs';
import { shapeCustomStrokes } from '@app/main/ui/shapes/custom-stroke';
import * as fills from '@app/main/ui/shapes/fills';
import * as grad from '@app/main/ui/shapes/gradients';
import * as obj from '@app/util/object';

const fillAttrs = ['fill-color', 'fill-color-gradient', 'fill-opacity'];

function setWhiteFill(shape: any): any {
  const updateColor = (data: any) => ({
    ...data,
    fillColor: undefined,
    fillOpacity: undefined,
    fillColorGradient: undefined,
    fills: [{ fillColor: '#FFFFFF', fillOpacity: 1 }]
  });

  return {
    ...shape,
    positionData: shape.positionData?.map(updateColor),
    strokeColor: '#FFFFFF',
    strokeOpacity: 1
  };
}

interface TextShapeProps {
  shape: any;
}

export const TextShape: React.FC<TextShapeProps> = React.memo(({ shape }) => {
  const renderId = useContext(renderIdContext);
  let processedShape = shape.isMask ? setWhiteFill(shape) : shape;

  const { x, y, width, height, positionData } = processedShape;
  const transform = gsh.transformStr(processedShape);

  const groupProps = useMemo(() => {
    const props = {
      transform,
      className: 'text-container',
      x,
      y,
      width,
      height
    };
    return attrs.addBorderProps(attrs.addFillProps(processedShape, renderId, props));
  }, [processedShape, renderId, transform, x, y, width, height]);

  const getGradientId = (index: number) => `${renderId}-${processedShape.id}-${index}`;

  return React.createElement(React.Fragment, null,
    positionData && d.seek((p: any) => p['fill-color-gradient'], positionData) &&
      React.createElement('defs', null,
        d.enumerate(positionData).map(([index, data]: [number, any]) => {
          if (!data['fill-color-gradient']) return null;
          const id = dm.str('fill-color-gradient-', getGradientId(index));
          return React.createElement(grad.Gradient, { id, key: id, attr: 'fill-color-gradient', shape: data });
        })
      ),
    React.createElement('g', groupProps,
      d.enumerate(positionData).map(([index, data]: [number, any]) => {
        const rtl = data.direction === 'rtl';
        const browserProps = cf.checkBrowser('safari') ? {
          dominantBaseline: 'hanging',
          dy: '0.2em',
          y: data.y - data.height
        } : undefined;

        const props = obj.set({
          key: dm.str('text-', processedShape.id, '-', index),
          x: rtl ? data.x + data.width : data.x,
          y: data.y,
          dominantBaseline: 'ideographic',
          textLength: data.width,
          lengthAdjust: 'spacingAndGlyphs',
          style: obj.set({
            fontFamily: data['font-family'],
            fontSize: data['font-size'],
            fontWeight: data['font-weight'],
            textTransform: data['text-transform'],
            textDecoration: data['text-decoration'],
            letterSpacing: data['letter-spacing'],
            fontStyle: data['font-style'],
            direction: data.direction,
            whiteSpace: 'pre'
          }, 'fill', `url(#fill-${index}-${renderId})`)
        }, browserProps);

        const textShape = obj.set(
          obj.dissoc(processedShape, ['shadow', 'blur']),
          'fills', data.fills
        );

        const blockRenderId = dm.str(renderId, '-', index);

        return React.createElement(React.Fragment, { key: index },
          React.createElement(renderIdContext.Provider, { value: blockRenderId },
            React.createElement('defs', null,
              React.createElement(fills.Fills, { shape: textShape, renderId: blockRenderId })
            ),
            React.createElement(shapeCustomStrokes, { shape: textShape, position: index, renderId: blockRenderId },
              React.createElement('text', props, data.text)
            )
          )
        );
      })
    )
  );
});
