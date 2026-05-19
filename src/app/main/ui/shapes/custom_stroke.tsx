// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from 'app/common/data';
import * as dm from 'app/common/data/macros';
import * as cfh from 'app/common/files/helpers';
import * as grc from 'app/common/geom/rect';
import * as gsh from 'app/common/geom/shapes';
import * as gsb from 'app/common/geom/shapes/bounds';
import * as gst from 'app/common/geom/shapes/text';
import * as path from 'app/common/types/path';
import * as uuid from 'app/common/uuid';
import * as cf from 'app/config';
import * as muc from 'app/main/ui/context';
import * as attrs from 'app/main/ui/shapes/attrs';
import * as embed from 'app/main/ui/shapes/embed';
import * as grad from 'app/main/ui/shapes/gradients';
import * as obj from 'app/util/object';
import * as str from 'cuerdas.core';
import React from 'react';

// FIXME: this clearly should be renamed to something different, this
// namespace has also fill related code

interface InnerStrokeClipPathProps {
  shape: any;
  renderId: string;
  index?: number;
}

export const InnerStrokeClipPath: React.FC<InnerStrokeClipPathProps> = ({
  shape,
  renderId,
  index,
}) => {
  const shapeId = dm.getProp(shape, 'id');
  const suffix = index !== null && index !== undefined ? dm.str('-', index) : '';
  const clipId = dm.str('inner-stroke-', renderId, '-', shapeId, suffix);
  const href = dm.str('#stroke-shape-', renderId, '-', shapeId, suffix);

  return (
    <clipPath id={clipId}>
      <use href={href} />
    </clipPath>
  );
};

interface OuterStrokeMaskProps {
  shape: any;
  stroke: any;
  renderId: string;
  index?: number;
}

export const OuterStrokeMask: React.FC<OuterStrokeMaskProps> = ({
  shape,
  stroke,
  renderId,
  index,
}) => {
  const shapeId = dm.getProp(shape, 'id');
  const suffix = index !== null && index !== undefined ? dm.str('-', index) : '';
  const maskId = dm.str('outer-stroke-', renderId, '-', shapeId, suffix);
  const shapeIdWithSuffix = dm.str('stroke-shape-', renderId, '-', shapeId, suffix);
  const href = dm.str('#', shapeIdWithSuffix);

  const strokeAlignment = stroke?.strokeAlignment || 'center';
  const strokeWidth = stroke?.strokeWidth || 0;
  const actualStrokeWidth =
    strokeAlignment === 'center'
      ? strokeWidth / 2
      : strokeAlignment === 'outer'
      ? strokeWidth
      : 0;
  const strokeMargin = gsb.shapeStrokeMargin!(shape, actualStrokeWidth);

  const selrect = cfh.textShape!(shape)
    ? gst.shapeToRect!(shape)
    : grc.pointsToRect!(shape.points);

  const x = dm.getProp(selrect, 'x') - strokeMargin;
  const y = dm.getProp(selrect, 'y') - strokeMargin;
  const w = dm.getProp(selrect, 'width') + strokeMargin * 2;
  const h = dm.getProp(selrect, 'height') + strokeMargin * 2;

  return (
    <mask
      id={maskId}
      x={x}
      y={y}
      width={w}
      height={h}
      maskUnits="userSpaceOnUse"
    >
      <use
        href={href}
        style={{
          fill: 'none',
          stroke: 'white',
          strokeWidth: actualStrokeWidth * 2,
        }}
      />
      <use href={href} style={{ fill: 'black', stroke: 'none' }} />
    </mask>
  );
};

interface CapMarkersProps {
  stroke: any;
  renderId: string;
  index?: number;
}

export const CapMarkers: React.FC<CapMarkersProps> = ({ stroke, renderId, index }) => {
  const idPrefix = dm.str('marker-', renderId);

  const gradient = stroke?.strokeColorGradient;
  const image = stroke?.strokeImage;
  const capStart = stroke?.strokeCapStart;
  const capEnd = stroke?.strokeCapEnd;

  const color = gradient
    ? str.ffmt!('url(#stroke-color-gradient-%-%)', renderId, index)
    : image
    ? str.ffmt!('url(#stroke-fill-%-%)', renderId, index)
    : stroke?.strokeColor;

  const opacity = !gradient ? stroke?.strokeOpacity : undefined;

  const markers: React.ReactNode[] = [];

  if (capStart === 'line-arrow' || capEnd === 'line-arrow') {
    markers.push(
      <marker
        key="line-arrow"
        id={dm.str(idPrefix, '-line-arrow')}
        viewBox="0 0 3 6"
        refX="2"
        refY="3"
        markerWidth="8.5"
        markerHeight="8.5"
        orient="auto-start-reverse"
        fill={color}
        fillOpacity={opacity}
      >
        <path d="M 0.5 0.5 L 3 3 L 0.5 5.5 L 0 5 L 2 3 L 0 1 z" />
      </marker>
    );
  }

  if (capStart === 'triangle-arrow' || capEnd === 'triangle-arrow') {
    markers.push(
      <marker
        key="triangle-arrow"
        id={dm.str(idPrefix, '-triangle-arrow')}
        viewBox="0 0 3 6"
        refX="2"
        refY="3"
        markerWidth="8.5"
        markerHeight="8.5"
        orient="auto-start-reverse"
        fill={color}
        fillOpacity={opacity}
      >
        <path d="M 0 0 L 3 3 L 0 6 z" />
      </marker>
    );
  }

  if (capStart === 'square-marker' || capEnd === 'square-marker') {
    markers.push(
      <marker
        key="square-marker"
        id={dm.str(idPrefix, '-square-marker')}
        viewBox="0 0 6 6"
        refX="3"
        refY="3"
        markerWidth="4.2426"
        markerHeight="4.2426"
        orient="auto-start-reverse"
        fill={color}
        fillOpacity={opacity}
      >
        <rect x={0} y={0} width={6} height={6} />
      </marker>
    );
  }

  if (capStart === 'circle-marker' || capEnd === 'circle-marker') {
    markers.push(
      <marker
        key="circle-marker"
        id={dm.str(idPrefix, '-circle-marker')}
        viewBox="0 0 6 6"
        refX="3"
        refY="3"
        markerWidth="4"
        markerHeight="4"
        orient="auto-start-reverse"
        fill={color}
        fillOpacity={opacity}
      >
        <circle cx="3" cy="3" r="3" />
      </marker>
    );
  }

  if (capStart === 'diamond-marker' || capEnd === 'diamond-marker') {
    markers.push(
      <marker
        key="diamond-marker"
        id={dm.str(idPrefix, '-diamond-marker')}
        viewBox="0 0 6 6"
        refX="3"
        refY="3"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
        fill={color}
        fillOpacity={opacity}
      >
        <path d="M 3 0 L 6 3 L 3 6 L 0 3 z" />
      </marker>
    );
  }

  // Simulate different line caps with markers
  if (
    (capStart === 'round' || capEnd === 'round') &&
    capStart !== capEnd
  ) {
    markers.push(
      <marker
        key="round"
        id={dm.str(idPrefix, '-round')}
        viewBox="0 0 6 6"
        refX="3"
        refY="3"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
        fill={color}
        fillOpacity={opacity}
      >
        <path d="M 3 2.5 A 0.5 0.5 0 0 1 3 3.5 " />
      </marker>
    );
  }

  if (
    (capStart === 'square' || capEnd === 'square') &&
    capStart !== capEnd
  ) {
    markers.push(
      <marker
        key="square"
        id={dm.str(idPrefix, '-square')}
        viewBox="0 0 6 6"
        refX="3"
        refY="3"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
        fill={color}
        fillOpacity={opacity}
      >
        <rect x={3} y={2.5} width={0.5} height={1} />
      </marker>
    );
  }

  return <>{markers}</>;
};

interface StrokeDefsProps {
  shape: any;
  stroke: any;
  renderId: string;
  index?: number;
}

export const StrokeDefs: React.FC<StrokeDefsProps> = ({
  shape,
  stroke,
  renderId,
  index,
}) => {
  const openPath = cfh.pathShape!(shape) && path.shapeWithOpenPath!(shape);
  const gradient = stroke?.strokeColorGradient;
  const alignment = stroke?.strokeAlignment || 'center';
  const width = stroke?.strokeWidth || 0;

  const props = {
    id: dm.str('stroke-color-gradient-', renderId, '-', index),
    gradient,
    shape,
    forceTransform: cfh.pathShape!(shape),
  };

  const strokeImage = stroke?.strokeImage;
  const uri = strokeImage ? cf.resolveFileMedia!(strokeImage) : undefined;
  const embedData = embed.useDataUris!([uri]);

  const actualStrokeWidth =
    alignment === 'center'
      ? (stroke?.strokeWidth || 0) / 2
      : alignment === 'outer'
      ? stroke?.strokeWidth || 0
      : 0;
  const margin = gsb.shapeStrokeMargin!(stroke, actualStrokeWidth);

  const selrect = cfh.textShape!(shape)
    ? gst.shapeToRect!(shape)
    : grc.pointsToRect!(shape.points);

  const strokeMargin = actualStrokeWidth + margin;
  const w = dm.getProp(selrect, 'width') + strokeMargin * 2;
  const h = dm.getProp(selrect, 'height') + strokeMargin * 2;

  const imageProps = {
    href: embedData?.[uri] || uri,
    preserveAspectRatio: 'xMidYMid slice',
    width: 1,
    height: 1,
    id: dm.str('stroke-image-', renderId, '-', index),
  };

  return (
    <>
      {gradient && (
        gradient.type === 'linear' ? (
          <grad.LinearGradient {...props} />
        ) : (
          <grad.RadialGradient {...props} />
        )
      )}

      {stroke?.strokeImage && (
        <pattern
          id={dm.str('stroke-fill-', renderId, '-', index)}
          patternContentUnits="objectBoundingBox"
          x={-strokeMargin / dm.getProp(selrect, 'width')}
          y={-strokeMargin / dm.getProp(selrect, 'height')}
          width={w / dm.getProp(selrect, 'width')}
          height={h / dm.getProp(selrect, 'height')}
          viewBox="0 0 1 1"
          preserveAspectRatio="xMidYMid slice"
          patternTransform={cfh.pathShape!(shape) ? gsh.transformStr!(shape) : undefined}
        >
          <image {...imageProps} />
        </pattern>
      )}

      {!openPath && alignment === 'inner' && width > 0 && (
        <InnerStrokeClipPath shape={shape} renderId={renderId} index={index} />
      )}

      {!openPath && alignment === 'outer' && width > 0 && (
        <OuterStrokeMask shape={shape} stroke={stroke} renderId={renderId} index={index} />
      )}

      {stroke?.strokeCapStart || stroke?.strokeCapEnd ? (
        <CapMarkers stroke={stroke} renderId={renderId} index={index} />
      ) : null}
    </>
  );
};

interface OuterStrokeProps {
  children: any;
  shape: any;
  stroke: any;
  index?: number;
}

export const OuterStroke: React.FC<OuterStrokeProps> = ({
  children,
  shape,
  stroke,
  index,
}) => {
  const shapeId = dm.getProp(shape, 'id');
  const renderId = muc.useRenderId();

  const childProps = children?.props || {};
  const style = childProps?.style || {};

  const strokeWidth = stroke?.strokeWidth || 0;
  const suffix = index !== null && index !== undefined ? dm.str('-', index) : '';
  const maskId = dm.str('outer-stroke-', renderId, '-', shapeId, suffix);
  const shapeIdWithSuffix = dm.str('stroke-shape-', renderId, '-', shapeId, suffix);
  const href = dm.str('#', shapeIdWithSuffix);

  const clonedStyle = { ...style };
  const fillProps = ['fill', 'fillOpacity', 'stroke', 'strokeWidth', 'strokeOpacity', 'strokeStyle', 'strokeDasharray'];
  fillProps.forEach((prop) => delete clonedStyle[prop]);

  const newProps = {
    ...childProps,
    id: shapeIdWithSuffix,
    style: clonedStyle,
  };

  const strokeStyle = { ...style };
  delete strokeStyle['fill'];
  delete strokeStyle['fillOpacity'];

  const type = children?.type;

  return (
    <g className="outer-stroke-shape">
      <defs>
        <StrokeDefs shape={shape} stroke={stroke} renderId={renderId} index={index} />
        {type && React.createElement(type, newProps)}
      </defs>

      <use
        href={href}
        mask={dm.str('url(#', maskId, ')')}
        style={{
          ...strokeStyle,
          strokeWidth: strokeWidth * 2,
          fill: 'none',
        }}
      />

      <use href={href} style={{ ...strokeStyle, stroke: 'none' }} />
    </g>
  );
};

interface InnerStrokeProps {
  children: any;
  shape: any;
  stroke: any;
  index?: number;
}

export const InnerStroke: React.FC<InnerStrokeProps> = ({
  children,
  shape,
  stroke,
  index,
}) => {
  const shapeId = dm.getProp(shape, 'id');
  const renderId = muc.useRenderId();

  const child = children;
  const type = child?.type;
  const props = { ...(child?.props || {}) };
  const style = props.style ? { ...props.style } : {};
  const transform = style?.transform;

  const strokeWidth = stroke?.strokeWidth || 0;
  const suffix = index !== null && index !== undefined ? dm.str('-', index) : '';
  const clipId = dm.str('inner-stroke-', renderId, '-', shapeId, suffix);
  const shapeIdWithSuffix = dm.str('stroke-shape-', renderId, '-', shapeId, suffix);
  const clipPath = dm.str("url('#", clipId, "')");

  style.strokeWidth = strokeWidth * 2;

  const newProps = {
    ...props,
    id: shapeIdWithSuffix,
    style,
  };
  delete newProps.transform;

  return (
    <g className="inner-stroke-shape" transform={transform}>
      <defs>
        <StrokeDefs shape={shape} stroke={stroke} renderId={renderId} index={index} />
        {type && React.createElement(type, newProps)}
      </defs>

      <use href={dm.str('#', shapeIdWithSuffix)} clipPath={clipPath} />
    </g>
  );
};

interface ShapeCustomStrokeProps {
  children: any;
  shape: any;
  stroke: any;
  index?: number;
  renderId?: string;
}

export const ShapeCustomStroke: React.FC<ShapeCustomStrokeProps> = ({
  children,
  shape,
  stroke,
  index,
  renderId: providedRenderId,
}) => {
  const renderId = providedRenderId || muc.useRenderId();

  const strokeWidth = stroke?.strokeWidth || 0;
  const strokeStyle = stroke?.strokeStyle || 'none';
  const strokePosition = stroke?.strokeAlignment || 'center';

  const hasStroke = strokeWidth > 0 && strokeStyle !== 'none';
  const closed = !cfh.pathShape!(shape) || !path.shapeWithOpenPath!(shape);
  const inner = strokePosition === 'inner';
  const outer = strokePosition === 'outer';

  if (hasStroke && inner && closed) {
    return <InnerStroke shape={shape} stroke={stroke} index={index}>{children}</InnerStroke>;
  }

  if (hasStroke && outer && closed) {
    return <OuterStroke shape={shape} stroke={stroke} index={index}>{children}</OuterStroke>;
  }

  return (
    <g className="stroke-shape">
      <defs>
        <StrokeDefs shape={shape} stroke={stroke} renderId={renderId} index={index} />
      </defs>
      {children}
    </g>
  );
};

const buildFillElement = (shape: any, child: any, position: number, renderId: string) => {
  const type = child?.type;
  const props = attrs.addFillProps!({ ...child?.props }, shape, position, renderId);
  return React.createElement(type, props);
};

const buildStrokeElement = (
  child: any,
  value: any,
  position: number,
  renderId: string,
  openPath: boolean
) => {
  const props = child?.props || {};
  const style = { ...(props.style || {}) };

  style.fill = 'none';
  style.fillOpacity = 'none';
  attrs.addStroke!(style, value, renderId, position, openPath);

  if (value?.strokeImage) {
    style.stroke = dm.fmt!('url(#stroke-fill-%-%)', renderId, position);
  }

  const newProps = { ...props };
  delete newProps.fill;
  delete newProps.fillOpacity;
  newProps.style = style;

  const type = child?.type;
  return React.createElement(type, newProps);
};

interface ShapeFillsProps {
  children: any;
  shape: any;
  position?: number;
  renderId?: string;
}

export const ShapeFills: React.FC<ShapeFillsProps> = ({
  children,
  shape,
  position = 0,
  renderId: providedRenderId,
}) => {
  const shapeId = dm.getProp(shape, 'id');
  const renderId = providedRenderId || muc.useRenderId();

  return (
    <g className="fills" id={dm.fmt('fills-%', shapeId)}>
      {buildFillElement(shape, children, position, renderId)}
    </g>
  );
};

interface ShapeStrokesProps {
  children: any;
  shape: any;
  position?: number;
  renderId?: string;
}

export const ShapeStrokes: React.FC<ShapeStrokesProps> = ({
  children,
  shape,
  position = 0,
  renderId: providedRenderId,
}) => {
  const shapeId = dm.getProp(shape, 'id');
  const renderId = providedRenderId || muc.useRenderId();

  const strokes = shape?.strokes;

  const prefix = uuid.next!();
  const strokeId = dm.str(dm.fmt('strokes-%-%', prefix, shapeId));

  const shapeBlur = shape?.blur;
  const shapeFills = shape?.fills;
  const shapeShadow = shape?.shadow;
  const shapeStrokes = strokes && strokes.length > 0;

  const svgAttrs = attrs.getSvgProps!(shape, renderId);

  const props = children?.props || {};
  const style = { ...(props.style || {}), ...((svgAttrs?.style as Record<string, any>) || {}) };

  const svgProps = {
    ...svgAttrs,
    id: strokeId,
    className: 'strokes',
    style,
  };

  const openPath = cfh.pathShape!(shape) && path.shapeWithOpenPath!(shape);

  if (cfh.frameShape!(shape)) return null;

  if (shapeBlur && !(shapeBlur as any).hidden) {
    svgProps.filter = dm.fmt('url(#filter-blur-%)', renderId);
  }

  if (
    (!shapeFills || shapeFills.length === 0) &&
    shapeShadow &&
    (shapeShadow as any[]).filter((s: any) => !(s as any).hidden).length > 0
  ) {
    svgProps.filter = dm.fmt('url(#filter-%)', renderId);
  }

  if (!shapeStrokes) return null;

  const strokeElements = (strokes as any[]).map((strokeValue, idx) => [
    idx,
    strokeValue,
  ]).reverse();

  return (
    <g {...svgProps}>
      {strokeElements.map(([idx, strokeValue]) => (
        <ShapeCustomStroke
          key={dm.str(idx, '-', strokeId)}
          shape={shape}
          stroke={strokeValue}
          index={idx}
        >
          {buildStrokeElement(children, strokeValue, idx, renderId, openPath)}
        </ShapeCustomStroke>
      ))}
    </g>
  );
};

interface ShapeCustomStrokesProps {
  children: any;
  shape: any;
  position?: number;
  renderId?: string;
}

export const ShapeCustomStrokes: React.FC<ShapeCustomStrokesProps> = (props) => {
  return (
    <>
      <ShapeFills {...props} />
      <ShapeStrokes {...props} />
    </>
  );
};