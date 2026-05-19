import * as d from '@app/common/data';
import { dm} from '@app/common/data.macros';
import * as cfh from '@app/common/files.helpers';
import * as grc from '@app/common/geom.rect';
import * as gsh from '@app/common/geom.shapes';
import * as gsb from '@app/common/geom.shapes.bounds';
import * as gst from '@app/common/geom.shapes.text';
import * as path from '@app/common.types.path';
import * as uuid from '@app/common.uuid';
import * as cf from '@app/config';
import * as muc from '@app/main/ui/context';
import * as attrs from '@app/main/ui/shapes/attrs';
import * as embed from '@app/main/ui/shapes/embed';
import * as grad from '@app/main/ui/shapes/gradients';
import * as obj from '@app/util.object';
import * as str from 'cuerdas';
import React, { useMemo } from 'react';

interface InnerStrokeClipPathProps {
  shape: any;
  renderId: string;
  index?: number;
}

export function InnerStrokeClipPath(props: InnerStrokeClipPathProps) {
  const { shape, renderId, index } = props;

  const shapeId = dm.getProp(shape, 'id');
  const suffix = index != null ? dm.str('-', index) : '';
  const clipId = dm.str('inner-stroke-', renderId, '-', shapeId, suffix);
  const href = dm.str('#stroke-shape-', renderId, '-', shapeId, suffix);

  return (
    <clipPath id={clipId}>
      <use href={href} />
    </clipPath>
  );
}

interface OuterStrokeMaskProps {
  shape: any;
  stroke: any;
  renderId: string;
  index?: number;
}

export function OuterStrokeMask(props: OuterStrokeMaskProps) {
  const { shape, stroke, renderId, index } = props;

  const shapeId = dm.getProp(shape, 'id');
  const suffix = index != null ? dm.str('-', index) : '';
  const maskId = dm.str('outer-stroke-', renderId, '-', shapeId, suffix);
  const shapeIdWithSuffix = dm.str('stroke-shape-', renderId, '-', shapeId, suffix);
  const href = dm.str('#', shapeIdWithSuffix);

  const strokeWidth =
    stroke.strokeAlignment === 'center'
      ? (stroke.strokeWidth ?? 0) / 2
      : stroke.strokeAlignment === 'outer'
      ? stroke.strokeWidth ?? 0
      : 0;

  const strokeMargin = gsb.shapeStrokeMargin(shape, strokeWidth);

  const selrect = useMemo(() => {
    if (cfh.textShape(shape)) {
      return gst.shapeToRect(shape);
    }
    return grc.pointsToRect(shape.points);
  }, [shape]);

  const x = dm.getProp(selrect, 'x') - strokeMargin;
  const y = dm.getProp(selrect, 'y') - strokeMargin;
  const w = dm.getProp(selrect, 'width') + 2 * strokeMargin;
  const h = dm.getProp(selrect, 'height') + 2 * strokeMargin;

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
          strokeWidth: strokeWidth * 2,
        }}
      />
      <use
        href={href}
        style={{
          fill: 'black',
          stroke: 'none',
        }}
      />
    </mask>
  );
}

interface CapMarkersProps {
  stroke: any;
  renderId: string;
  index: number;
}

export function CapMarkers(props: CapMarkersProps) {
  const { stroke, renderId, index } = props;

  const idPrefix = dm.str('marker-', renderId);
  const gradient = stroke.strokeColorGradient;
  const image = stroke.strokeImage;
  const capStart = stroke.strokeCapStart;
  const capEnd = stroke.strokeCapEnd;

  let color: string;
  if (gradient != null) {
    color = `url(#stroke-color-gradient-${renderId}-${index})`;
  } else if (image != null) {
    color = `url(#stroke-fill-${renderId}-${index})`;
  } else {
    color = stroke.strokeColor;
  }

  const opacity =
    gradient == null ? stroke.strokeOpacity : undefined;

  return (
    <>
      {(capStart === 'line-arrow' || capEnd === 'line-arrow') && (
        <marker
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
      )}

      {(capStart === 'triangle-arrow' || capEnd === 'triangle-arrow') && (
        <marker
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
      )}

      {(capStart === 'square-marker' || capEnd === 'square-marker') && (
        <marker
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
      )}

      {(capStart === 'circle-marker' || capEnd === 'circle-marker') && (
        <marker
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
      )}

      {(capStart === 'diamond-marker' || capEnd === 'diamond-marker') && (
        <marker
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
      )}

      {(capStart === 'round' || capEnd === 'round') &&
        capStart !== capEnd && (
          <marker
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
        )}

      {(capStart === 'square' || capEnd === 'square') &&
        capStart !== capEnd && (
          <marker
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
        )}
    </>
  );
}

interface StrokeDefsProps {
  shape: any;
  stroke: any;
  renderId: string;
  index: number;
}

export function StrokeDefs(props: StrokeDefsProps) {
  const { shape, stroke, renderId, index } = props;

  const openPath =
    cfh.pathShape(shape) && path.shapeWithOpenPath(shape);

  const gradient = stroke.strokeColorGradient;
  const alignment = stroke.strokeAlignment ?? 'center';
  const width = stroke.strokeWidth ?? 0;

  const strokeImage = stroke.strokeImage;
  const uri = strokeImage ? cf.resolveFileMedia(strokeImage) : null;
  const embedData = embed.useDataUris(uri ? [uri] : []);

  const strokeWidthPx =
    alignment === 'center'
      ? (stroke.strokeWidth ?? 0) / 2
      : alignment === 'outer'
      ? stroke.strokeWidth ?? 0
      : 0;

  const margin = gsb.shapeStrokeMargin(stroke, strokeWidthPx);

  const selrect = useMemo(() => {
    if (cfh.textShape(shape)) {
      return gst.shapeToRect(shape);
    }
    return grc.pointsToRect(shape.points);
  }, [shape]);

  const strokeMargin = strokeWidthPx + margin;
  const w = dm.getProp(selrect, 'width') + 2 * strokeMargin;
  const h = dm.getProp(selrect, 'height') + 2 * strokeMargin;

  const imageProps = {
    href: uri ? embedData[uri] || uri : '',
    preserveAspectRatio: 'xMidYMid slice',
    width: 1,
    height: 1,
    id: dm.str('stroke-image-', renderId, '-', index),
  };

  return (
    <>
      {gradient != null && (() => {
        const gradientProps = {
          id: dm.str('stroke-color-gradient-', renderId, '-', index),
          gradient,
          shape,
          forceTransform: cfh.pathShape(shape),
        };
        return gradient.type === 'linear' ? (
          <grad.LinearGradient {...gradientProps} />
        ) : (
          <grad.RadialGradient {...gradientProps} />
        );
      })()}

      {stroke.strokeImage && (
        <pattern
          id={dm.str('stroke-fill-', renderId, '-', index)}
          patternContentUnits="objectBoundingBox"
          x={-strokeMargin / dm.getProp(selrect, 'width')}
          y={-strokeMargin / dm.getProp(selrect, 'height')}
          width={w / dm.getProp(selrect, 'width')}
          height={h / dm.getProp(selrect, 'height')}
          viewBox="0 0 1 1"
          preserveAspectRatio="xMidYMid slice"
          patternTransform={cfh.pathShape(shape) ? gsh.transformStr(shape) : undefined}
        >
          <image {...imageProps} />
        </pattern>
      )}

      {!openPath && alignment === 'inner' && width > 0 && (
        <InnerStrokeClipPath
          shape={shape}
          renderId={renderId}
          index={index}
        />
      )}

      {!openPath && alignment === 'outer' && width > 0 && (
        <OuterStrokeMask
          shape={shape}
          stroke={stroke}
          renderId={renderId}
          index={index}
        />
      )}

      {stroke.strokeCapStart != null || stroke.strokeCapEnd != null ? (
        <CapMarkers
          stroke={stroke}
          renderId={renderId}
          index={index}
        />
      ) : null}
    </>
  );
}

interface OuterStrokeProps {
  children: React.ReactNode;
  shape: any;
  stroke: any;
  index: number;
}

export function OuterStroke(props: OuterStrokeProps) {
  const { children, shape, stroke, index } = props;

  const renderId = React.useContext(muc.renderId);
  const shapeId = dm.getProp(shape, 'id');
  const strokeWidth = stroke.strokeWidth ?? 0;

  const suffix = index != null ? dm.str('-', index) : '';
  const maskId = dm.str('outer-stroke-', renderId, '-', shapeId, suffix);
  const shapeIdWithSuffix = dm.str('stroke-shape-', renderId, '-', shapeId, suffix);
  const href = dm.str('#', shapeIdWithSuffix);

  const childProps = (children as any)?.props || {};
  const childStyle = obj.get(childProps, 'style') || {};

  const newStyle1: Record<string, any> = {};
  obj.unset(newStyle1, 'fill');
  obj.unset(newStyle1, 'fillOpacity');
  obj.unset(newStyle1, 'stroke');
  obj.unset(newStyle1, 'strokeWidth');
  obj.unset(newStyle1, 'strokeOpacity');
  obj.unset(newStyle1, 'strokeStyle');
  obj.unset(newStyle1, 'strokeDasharray');

  const styleClone = { ...childStyle };
  Object.keys(newStyle1).forEach((k) => {
    (styleClone as any)[k] = undefined;
  });

  const propsClone = { ...childProps, style: styleClone };
  obj.set(propsClone, 'id', shapeIdWithSuffix);

  const childType = childProps.type || 'g';

  const styleForUse1 = {
    ...childStyle,
    strokeWidth: strokeWidth * 2,
    fill: 'none',
  };
  obj.unset(styleForUse1, 'fillOpacity');

  const styleForUse2 = {
    ...childStyle,
    stroke: 'none',
  };

  return (
    <g className="outer-stroke-shape">
      <defs>
        <StrokeDefs
          shape={shape}
          stroke={stroke}
          renderId={renderId}
          index={index}
        />
        {React.createElement(childType, propsClone)}
      </defs>

      <use
        href={href}
        mask={dm.str('url(#', maskId, ')')}
        style={styleForUse1}
      />

      <use href={href} style={styleForUse2} />
    </g>
  );
}

interface InnerStrokeProps {
  children: React.ReactNode;
  shape: any;
  stroke: any;
  index: number;
}

export function InnerStroke(props: InnerStrokeProps) {
  const { children, shape, stroke, index } = props;

  const renderId = React.useContext(muc.renderId);
  const shapeId = dm.getProp(shape, 'id');
  const strokeWidth = stroke.strokeWidth ?? 0;

  const suffix = index != null ? dm.str('-', index) : '';
  const clipId = dm.str('inner-stroke-', renderId, '-', shapeId, suffix);
  const shapeIdWithSuffix = dm.str('stroke-shape-', renderId, '-', shapeId, suffix);
  const clipPath = dm.str("url('#", clipId, "')");

  const childProps = (children as any)?.props || {};
  const propsClone = obj.clone(childProps);
  const styleClone = obj.clone(obj.get(propsClone, 'style') || {});
  const transform = obj.get(propsClone, 'transform');

  obj.set(styleClone, 'strokeWidth', strokeWidth * 2);
  obj.set(propsClone, 'id', dm.str(shapeIdWithSuffix));
  obj.set(propsClone, 'style', styleClone);
  obj.unset(propsClone, 'transform');

  const childType = childProps.type || 'g';

  return (
    <g className="inner-stroke-shape" transform={transform}>
      <defs>
        <StrokeDefs
          shape={shape}
          stroke={stroke}
          renderId={renderId}
          index={index}
        />
        {React.createElement(childType, propsClone)}
      </defs>

      <use
        href={dm.str('#', shapeIdWithSuffix)}
        clipPath={clipPath}
      />
    </g>
  );
}

interface ShapeCustomStrokeProps {
  children: React.ReactNode;
  shape: any;
  stroke?: any;
  index?: number;
  renderId?: string;
}

export function ShapeCustomStroke(props: ShapeCustomStrokeProps) {
  const { children, shape, stroke: strokeProp, index: indexProp } = props;

  const renderIdCtx = React.useContext(muc.renderId);
  const renderId = props.renderId ?? renderIdCtx;

  const stroke = strokeProp || (shape as any).strokes?.[0];
  const index = indexProp ?? 0;

  const strokeWidth = stroke?.strokeWidth ?? 0;
  const strokeStyle = stroke?.strokeStyle ?? 'none';
  const strokePosition = stroke?.strokeAlignment ?? 'center';

  const hasStroke =
    strokeWidth > 0 && strokeStyle !== 'none';

  const closed =
    !cfh.pathShape(shape) || !path.shapeWithOpenPath(shape);

  const inner = strokePosition === 'inner';
  const outer = strokePosition === 'outer';

  if (hasStroke && inner && closed) {
    return (
      <InnerStroke
        shape={shape}
        stroke={stroke}
        index={index}
      >
        {children}
      </InnerStroke>
    );
  }

  if (hasStroke && outer && closed) {
    return (
      <OuterStroke
        shape={shape}
        stroke={stroke}
        index={index}
      >
        {children}
      </OuterStroke>
    );
  }

  return (
    <g className="stroke-shape">
      <defs>
        <StrokeDefs
          shape={shape}
          stroke={stroke}
          renderId={renderId}
          index={index}
        />
      </defs>
      {children}
    </g>
  );
}

function buildFillElement(
  shape: any,
  child: any,
  position: number,
  renderId: string
): React.ReactElement {
  const childType = (child as any).type || 'rect';
  const childProps = obj.get(child, 'props') || {};
  const propsClone = obj.clone(childProps);
  attrs.addFillProps(propsClone, shape, position, renderId);
  return React.createElement(childType, propsClone);
}

function buildStrokeElement(
  child: any,
  value: any,
  position: number,
  renderId: string,
  openPath: boolean
): React.ReactElement {
  const childProps = obj.get(child, 'props') || {};
  const childType = childProps.type || 'rect';

  const styleClone = obj.clone(childProps.style || {});
  obj.set(styleClone, 'fill', 'none');
  obj.set(styleClone, 'fillOpacity', 'none');
  attrs.addStroke(styleClone, value, renderId, position, openPath);

  if (value.strokeImage) {
    obj.set(
      styleClone,
      'stroke',
      `url(#stroke-fill-${renderId}-${position})`
    );
  }

  const propsClone = obj.clone(childProps);
  obj.unset(propsClone, 'fill');
  obj.unset(propsClone, 'fillOpacity');
  obj.set(propsClone, 'style', styleClone);

  return React.createElement(childType, propsClone);
}

interface ShapeFillsProps {
  children: React.ReactNode;
  shape: any;
  position?: number;
  renderId?: string;
}

export function ShapeFills(props: ShapeFillsProps) {
  const { children, shape, position: positionProp, renderId: renderIdProp } = props;

  const renderIdCtx = React.useContext(muc.renderId);
  const renderId = renderIdProp ?? renderIdCtx;
  const position = positionProp ?? 0;

  const shapeId = dm.getProp(shape, 'id');

  return (
    <g className="fills" id={`fills-${shapeId}`}>
      {buildFillElement(shape, children, position, renderId)}
    </g>
  );
}

interface ShapeStrokesProps {
  children: React.ReactNode;
  shape: any;
  renderId?: string;
}

export function ShapeStrokes(props: ShapeStrokesProps) {
  const { children, shape, renderId: renderIdProp } = props;

  const renderIdCtx = React.useContext(muc.renderId);
  const renderId = renderIdProp ?? renderIdCtx;

  const shapeId = dm.getProp(shape, 'id');
  const strokes = shape.strokes;

  const prefix = useMemo(() => {
    return uuid.next();
  }, [strokes]);

  const strokeId = dm.str(`strokes-${prefix}-${shapeId}`);

  const shapeBlur = shape.blur;
  const shapeFills = shape.fills;
  const shapeShadow = shape.shadow;
  const shapeStrokes = d.notEmpty(strokes);

  const svgAttrsProps = attrs.getSvgProps(shape, renderId);
  const svgStyle = obj.get(svgAttrsProps, 'style') || {};
  const style = obj.clone((children as any)?.props?.style || {});
  obj.merge(style, svgStyle);

  const strokeProps: Record<string, any> = {
    ...svgAttrsProps,
    id: strokeId,
    className: 'strokes',
    style,
  };

  const openPath =
    cfh.pathShape(shape) && path.shapeWithOpenPath(shape);

  if (!cfh.frameShape(shape)) {
    if (shapeBlur && !shapeBlur.hidden) {
      obj.set(strokeProps, 'filter', `url(#filter-blur-${renderId})`);
    }

    if (
      d.empty(shapeFills) &&
      shapeShadow &&
      shapeShadow.filter((s: any) => !s.hidden).length > 0
    ) {
      obj.set(strokeProps, 'filter', `url(#filter-${renderId})`);
    }
  }

  if (!shapeStrokes) {
    return null;
  }

  return (
    <g {...strokeProps}>
      {strokes
        .slice()
        .reverse()
        .map((value: any, index: number) => (
          <ShapeCustomStroke
            key={`${index}-${strokeId}`}
            shape={shape}
            stroke={value}
            index={index}
          >
            {buildStrokeElement(
              children,
              value,
              index,
              renderId,
              openPath
            )}
          </ShapeCustomStroke>
        ))}
    </g>
  );
}

interface ShapeCustomStrokesProps {
  children: React.ReactNode;
  shape: any;
  position?: number;
  renderId?: string;
}

export function ShapeCustomStrokes(props: ShapeCustomStrokesProps) {
  const { children, shape, position, renderId } = props;

  return (
    <>
      <ShapeFills shape={shape} position={position} renderId={renderId}>
        {children}
      </ShapeFills>
      <ShapeStrokes shape={shape} renderId={renderId}>
        {children}
      </ShapeStrokes>
    </>
  );
}
