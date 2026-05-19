import * as d from '@app/common/data';
import { dm} from '@app/common/data.macros';
import * as cfh from '@app/common/files.helpers';
import * as gpt from '@app/common/geom.point';
import * as gsh from '@app/common/geom.shapes';
import * as gst from '@app/common/geom.shapes.text';
import * as cf from '@app/config';
import * as attrs from '@app/main/ui/shapes/attrs';
import * as embed from '@app/main/ui/shapes/embed';
import * as grad from '@app/main/ui/shapes/gradients';
import * as obj from '@app/util/object';
import React from 'react';

const noRepeatPadding = 1.05;

interface InternalFillsProps {
  shape: any;
  renderId: string;
}

function InternalFills(props: InternalFillsProps) {
  const { shape, renderId } = props;

  const type = dm.getProp(shape, 'type');
  const image = shape.fillImage;
  const fills = shape.fills || [];

  const selrect = dm.getProp(shape, 'selrect');

  const bounds = cfh.textShape(shape)
    ? gst.shapeToRect(shape)
    : null;

  const metadata = shape.metadata;

  const x = dm.getProp(selrect, 'x');
  const y = dm.getProp(selrect, 'y');
  const width = dm.getProp(selrect, 'width');
  const height = dm.getProp(selrect, 'height');

  const hasImage = metadata != null || image != null;

  let uri: string | null = null;
  if (metadata != null) {
    uri = cf.resolveFileMedia(metadata);
  } else if (image != null) {
    uri = cf.resolveFileMedia(image);
  }

  const allUris = [uri, ...fills
    .map((f: any) => f.fillImage)
    .filter(Boolean)
    .map((img: any) => cf.resolveFileMedia(img))];

  const embedData = embed.useDataUris(allUris.filter(Boolean) as string[]);
  const transform = gsh.transformStr(shape);

  const patProps: any = {
    patternUnits: type === 'text' ? 'objectBoundingBox' : 'userSpaceOnUse',
    x: type !== 'text' ? x : undefined,
    y: type !== 'text' ? y : undefined,
    width,
    height,
  };

  if (type === 'path' || type === 'bool') {
    obj.set(patProps, 'patternTransform', transform);
  }

  const positionData = shape.positionData || [shape];

  return (
    <>
      {positionData.map((objData: any, objIndex: number) => {
        const objFills = objData.fills || [];
        return (
          <g key={dm.str(objIndex)}>
            {objFills
              .slice()
              .reverse()
              .map((value: any, fillIndex: number) => {
                if (!value.fillColorGradient) return null;

                const gradient = value.fillColorGradient;

                const fromP = gpt.point(
                  x + width * gradient.startX,
                  y + height * gradient.startY
                );
                const toP = gpt.point(
                  x + width * gradient.endX,
                  y + height * gradient.endY
                );

                let finalGradient = gradient;
                if (bounds != null) {
                  finalGradient = {
                    ...gradient,
                    startX: (fromP.x - bounds.x) / bounds.width,
                    startY: (fromP.y - bounds.y) / bounds.height,
                    endX: (toP.x - bounds.x) / bounds.width,
                    endY: (toP.y - bounds.y) / bounds.height,
                  };
                }

                const gradientProps = {
                  id: dm.str('fill-color-gradient-', renderId, '-', fillIndex),
                  key: dm.str(fillIndex),
                  gradient: finalGradient,
                  shape: objData,
                };

                if (gradient.type === 'linear') {
                  return <grad.LinearGradient {...gradientProps} />;
                }
                if (gradient.type === 'radial') {
                  return <grad.RadialGradient {...gradientProps} />;
                }
                return null;
              })}

            <pattern
              id={`fill-${objIndex}-${renderId}`}
              {...obj.clone(patProps)}
              {...(hasImage && bounds == null
                ? {
                    width: width * noRepeatPadding,
                    height: height * noRepeatPadding,
                  }
                : {})}
              {...(bounds != null
                ? { width: bounds.width, height: bounds.height }
                : {})}
            >
              <g>
                {objFills
                  .slice()
                  .reverse()
                  .map((value: any, fillIndex: number) => {
                    const style = attrs.getFillStyle(value, fillIndex, renderId, type);
                    const fillProps = {
                      width: d.nilv(bounds?.width, width),
                      height: d.nilv(bounds?.height, height),
                      style,
                    };

                    if (value.fillImage) {
                      const imgUri = cf.resolveFileMedia(value.fillImage);
                      const keepAr = value.fillImage.keepAspectRatio;
                      return (
                        <image
                          id={dm.str('fill-image-', renderId, '-', fillIndex)}
                          href={embedData[imgUri] || imgUri}
                          preserveAspectRatio={keepAr ? 'xMidYMid slice' : 'none'}
                          width={width}
                          height={height}
                          opacity={value.fillOpacity}
                        />
                      );
                    }
                    return <rect {...fillProps} />;
                  })}

                {hasImage && (
                  <g>
                    <rect
                      x={0}
                      y={0}
                      width={width * noRepeatPadding}
                      height={height * noRepeatPadding}
                      fill="none"
                    />
                    <image
                      href={uri || ''}
                      preserveAspectRatio="none"
                      x={0}
                      y={0}
                      width={width}
                      height={height}
                    />
                  </g>
                )}
              </g>
            </pattern>
          </g>
        );
      })}
    </>
  );
}

interface FillsProps {
  shape: any;
  renderId?: string;
}

export function Fills(props: FillsProps) {
  const { shape } = props;

  const type = dm.getProp(shape, 'type');
  const image = shape.fillImage;
  const fills = shape.fills || [];

  const hasImage = image != null;
  const isImageType = type === 'image' || type === 'text';
  const hasMultipleFills = fills.length > 1;
  const hasGradient = fills.some((f: any) => f.fillColorGradient);
  const hasFillImage = fills.some((f: any) => f.fillImage);

  if (
    hasImage ||
    isImageType ||
    hasMultipleFills ||
    hasGradient ||
    hasFillImage
  ) {
    return <InternalFills shape={shape} renderId={props.renderId || ''} />;
  }

  return null;
}
