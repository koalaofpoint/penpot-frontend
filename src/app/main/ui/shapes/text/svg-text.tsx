import * as d from '@app/common/data';
import { dm} from '@app/common/data.macros';
import * as gsh from '@app/common/geom.shapes';
import * as cf from '@app/config';
import * as muc from '@app/main/ui/context';
import * as attrs from '@app/main/ui/shapes/attrs';
import { ShapeCustomStrokes } from '@app/main/ui/shapes/custom-stroke';
import * as fills from '@app/main/ui/shapes/fills';
import * as grad from '@app/main/ui/shapes/gradients';
import * as obj from '@app/util.object';
import React, { useMemo } from 'react';

const fillAttrs = ['fillColor', 'fillColorGradient', 'fillOpacity'];

function setWhiteFill(shape: any): any {
  const updateColor = (data: any) => ({
    ...data,
    fills: [{ fillColor: '#FFFFFF', fillOpacity: 1 }],
  });

  let result = shape;
  if (shape.positionData) {
    result = {
      ...result,
      positionData: shape.positionData.map(updateColor),
    };
  }
  return {
    ...result,
    strokeColor: '#FFFFFF',
    strokeOpacity: 1,
  };
}

interface TextShapeProps {
  shape: any;
}

export function TextShape(props: TextShapeProps) {
  const renderId = React.useContext(muc.renderId);
  let shape = props.shape;

  if (shape.isMask) {
    shape = setWhiteFill(shape);
  }

  const { x, y, width, height, positionData } = shape;

  const transform = gsh.transformStr(shape);

  const groupProps = useMemo(() => {
    const base: Record<string, any> = {
      transform,
      className: 'text-container',
      x,
      y,
      width,
      height,
    };
    attrs.addFillProps(base, shape, renderId);
    attrs.addBorderProps(base, shape);
    return base;
  }, [shape, x, y, width, height, transform, renderId]);

  const getGradientId = (index: number) =>
    `${renderId}-${shape.id}-${index}`;

  const hasGradient = positionData?.some(
    (data: any) => data.fillColorGradient
  );

  return (
    <>
      {hasGradient && (
        <defs>
          {positionData.map((data: any, index: number) => {
            if (!data.fillColorGradient) return null;
            const id = `fill-color-gradient-${getGradientId(index)}`;
            return (
              <grad.Gradient
                id={id}
                key={id}
                attr="fillColorGradient"
                shape={data}
              />
            );
          })}
        </defs>
      )}

      <g {...groupProps}>
        {positionData.map((data: any, index: number) => {
          const rtl = data.direction === 'rtl';

          const browserProps = cf.checkBrowser('safari')
            ? {
                dominantBaseline: 'hanging',
                dy: '0.2em',
                y: data.y - data.height,
              }
            : {};

          const textStyle: Record<string, any> = {
            fontFamily: data.fontFamily,
            fontSize: data.fontSize,
            fontWeight: data.fontWeight,
            textTransform: data.textTransform,
            textDecoration: data.textDecoration,
            letterSpacing: data.letterSpacing,
            fontStyle: data.fontStyle,
            direction: data.direction,
            whiteSpace: 'pre',
          };
          obj.set(textStyle, 'fill', `url(#fill-${index}-${renderId})`);

          const textProps: Record<string, any> = {
            key: `text-${shape.id}-${index}`,
            x: rtl ? data.x + data.width : data.x,
            y: data.y,
            dominantBaseline: 'ideographic',
            textLength: data.width,
            lengthAdjust: 'spacingAndGlyphs',
            style: textStyle,
          };
          obj.merge(textProps, browserProps);

          const textShapeData = {
            ...shape,
            fills: data.fills,
            shadow: undefined,
            blur: undefined,
          };

          const textRenderId = `${renderId}-${index}`;

          const fillShape = {
            ...textShapeData,
            fills: data.fills,
          };

          return (
            <muc.renderId.Provider key={index} value={textRenderId}>
              <defs>
                <fills.Fills shape={fillShape} renderId={textRenderId} />
              </defs>

              <ShapeCustomStrokes
                shape={textShapeData}
                position={index}
                renderId={textRenderId}
              >
                <text {...textProps}>{data.text}</text>
              </ShapeCustomStrokes>
            </muc.renderId.Provider>
          );
        })}
      </g>
    </>
  );
}
