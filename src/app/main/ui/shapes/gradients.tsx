import * as d from '@app/common/data';
import { dm} from '@app/common/data.macros';
import * as cfh from '@app/common/files.helpers';
import * as gmt from '@app/common/geom.matrix';
import * as gpt from '@app/common/geom.point';
import * as grc from '@app/common/geom.rect';
import * as gsh from '@app/common/geom.shapes';
import * as muc from '@app/main/ui/context';
import * as ed from '@app/main/ui/shapes/export';
import * as obj from '@app/util/object';
import React from 'react';

function addMetadata(props: Record<string, any>, gradient: any): Record<string, any> {
  return {
    ...props,
    'penpot:gradient': 'true',
    'penpot:start-x': gradient.startX,
    'penpot:start-y': gradient.startY,
    'penpot:end-x': gradient.endX,
    'penpot:end-y': gradient.endY,
    'penpot:width': gradient.width,
  };
}

interface LinearGradientProps {
  id: string;
  gradient: any;
  shape: any;
  forceTransform?: boolean;
}

export function LinearGradient(props: LinearGradientProps) {
  const { id, gradient, shape, forceTransform } = props;

  const transform = React.useMemo(() => {
    if (forceTransform) {
      return gsh.transformMatrix(shape, null, gpt.point(0.5, 0.5));
    }
    return null;
  }, [shape, forceTransform]);

  const metadata = React.useContext(ed.includeMetadataCtx);

  const gradientProps: Record<string, any> = {
    id,
    x1: gradient.startX,
    y1: gradient.startY,
    x2: gradient.endX,
    y2: gradient.endY,
    gradientTransform: transform != null ? dm.str(transform) : undefined,
  };

  if (metadata) {
    obj.set(gradientProps, 'penpot:gradient', 'true');
    obj.set(gradientProps, 'penpot:start-x', gradient.startX);
    obj.set(gradientProps, 'penpot:start-y', gradient.startY);
    obj.set(gradientProps, 'penpot:end-x', gradient.endX);
    obj.set(gradientProps, 'penpot:end-y', gradient.endY);
    obj.set(gradientProps, 'penpot:width', gradient.width);
  }

  const stops = (gradient.stops || []).slice().sort((a: any, b: any) => a.offset - b.offset);

  return (
    <linearGradient {...gradientProps}>
      {stops.map((stop: any, index: number) => (
        <stop
          key={`${id}-stop-${index}`}
          offset={d.nilv(stop.offset, 0)}
          stopColor={stop.color}
          stopOpacity={stop.opacity}
        />
      ))}
    </linearGradient>
  );
}

interface RadialGradientProps {
  id: string;
  gradient: any;
  shape: any;
}

export function RadialGradient(props: RadialGradientProps) {
  const { id, gradient, shape } = props;

  const path = cfh.pathShape(shape);

  let transform = path ? dm.getProp(shape, 'transform') : null;
  transform = d.nilv(transform, gmt.base);

  const transformInv = path ? dm.getProp(shape, 'transformInverse') : null;
  const transformInvFinal = d.nilv(transformInv, gmt.base);

  const { startX, startY, endX, endY, width } = gradient;

  const gstartPt = gpt.point(startX, startY);
  const gendPt = gpt.point(endX, endY);
  const gradientVec = gpt.toVec(gstartPt, gendPt);

  const angle = gpt.angle(gradientVec) + 90;

  const points = dm.getProp(shape, 'points');

  const bounds = React.useMemo(() => {
    return grc.pointsToRect(points);
  }, [points]);

  const selrect = dm.getProp(shape, 'selrect');

  const factor = path
    ? dm.getProp(selrect, 'height') / dm.getProp(bounds, 'height')
    : 1.0;

  const transformMatrix = React.useMemo(() => {
    return gmt
      .multiply(
        gmt.translate(gstartPt),
        transform,
        gmt.rotate(angle),
        gmt.scale(gpt.point(width, factor)),
        gmt.multiply(transformInvFinal),
        gmt.translate(gpt.negate(gstartPt))
      );
  }, [gstartPt, transform, angle, width, factor, transformInvFinal]);

  const metadata = React.useContext(ed.includeMetadataCtx);

  const gradientProps: Record<string, any> = {
    id,
    cx: startX,
    cy: startY,
    r: gpt.length(gradientVec),
    gradientTransform: transformMatrix,
  };

  if (metadata) {
    obj.set(gradientProps, 'penpot:gradient', 'true');
    obj.set(gradientProps, 'penpot:start-x', gradient.startX);
    obj.set(gradientProps, 'penpot:start-y', gradient.startY);
    obj.set(gradientProps, 'penpot:end-x', gradient.endX);
    obj.set(gradientProps, 'penpot:end-y', gradient.endY);
    obj.set(gradientProps, 'penpot:width', gradient.width);
  }

  return (
    <radialGradient {...gradientProps}>
      {(gradient.stops || []).map((stop: any, index: number) => (
        <stop
          key={`${id}-stop-${index}`}
          offset={d.nilv(stop.offset, 0)}
          stopColor={stop.color}
          stopOpacity={stop.opacity}
        />
      ))}
    </radialGradient>
  );
}

interface GradientProps {
  attr: string;
  shape: any;
  id?: string;
}

export function Gradient(props: GradientProps) {
  const { attr, shape, id: providedId } = props;

  const renderId = React.useContext(muc.renderId);

  const id = providedId != null ? providedId : dm.str(attr, '-', renderId);

  const gradient = shape[attr];

  if (gradient == null) {
    return null;
  }

  const gradientProps = {
    id,
    gradient,
    shape,
  };

  if (gradient.type === 'linear') {
    return <LinearGradient {...gradientProps} />;
  }
  if (gradient.type === 'radial') {
    return <RadialGradient {...gradientProps} />;
  }

  return null;
}
