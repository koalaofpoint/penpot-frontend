import * as d from '@app/common/data';
import { dm} from '@app/common/data.macros';
import * as cfh from '@app/common/files.helpers';
import * as gsh from '@app/common/geom.shapes';
import * as json from '@app/common.json';
import * as csvg from '@app/common.svg';
import * as clr from '@app/common.types.color';
import { strokeCapsLine, strokeCapsMarker } from '@app/common.types.shape';
import * as ctsr from '@app/common.types.shape.radius';
import * as obj from '@app/util/object';
import * as str from 'cuerdas';

function calculateDasharray(style: string, width: number): string {
  const w5 = 5 + width;
  const w1 = 1 + width;
  const w10 = 10 + width;

  switch (style) {
    case 'mixed':
      return `${w5},${w5},${w1},${w5}`;
    case 'dotted':
      return `0,${w5}`;
    case 'dashed':
      return `${w10},${w10}`;
    default:
      return '';
  }
}

export function getBorderProps(shape: any): Record<string, any> {
  const mode = ctsr.radiusMode(shape);

  if (mode === 'radius-1') {
    const radius = gsh.shapeCorners1(shape);
    return { rx: radius, ry: radius };
  }

  if (mode === 'radius-4') {
    const [r1, r2, r3, r4] = gsh.shapeCorners4(shape);
    const x = dm.getProp(shape, 'x');
    const y = dm.getProp(shape, 'y');
    const width = dm.getProp(shape, 'width');
    const height = dm.getProp(shape, 'height');

    const top = width - r1 - r2;
    const right = height - r2 - r3;
    const bottom = width - r3 - r4;
    const left = height - r4 - r1;

    const d = [
      'M', x + r1, y,
      'h', top,
      'a', r2, r2, 0, 0, 1, r2, r2,
      'v', right,
      'a', r3, r3, 0, 0, 1, -r3, r3,
      'h', -bottom,
      'a', r4, r4, 0, 0, 1, -r4, -r4,
      'v', -left,
      'a', r1, r1, 0, 0, 1, r1, -r1,
      'z',
    ].join(' ');

    return { d };
  }

  return {};
}

export function addBorderProps(props: Record<string, any>, shape: any): Record<string, any> {
  const borderProps = getBorderProps(shape);
  return obj.merge(props, borderProps);
}

export function addFill(
  attrs: Record<string, any>,
  fillData: any,
  renderId: string,
  index: number | null,
  type: string,
  fillDefault = 'none'
): Record<string, any> {
  const suffix = index != null ? dm.str('-', index) : '';

  if (fillData.fillImage !== undefined) {
    const id = dm.str('fill-image-', renderId);
    attrs.fill = dm.str('url(#', id, ')');
  } else if (fillData.fillColorGradient != null) {
    const id = dm.str('fill-color-gradient-', renderId, suffix);
    attrs.fill = dm.str('url(#', id, ')');
  } else if (fillData.fillColor !== undefined) {
    attrs.fill = fillData.fillColor;
  } else {
    attrs.fill = fillDefault;
  }

  if (fillData.fillOpacity !== undefined) {
    attrs.fillOpacity = fillData.fillOpacity;
  }

  if (type === 'text' && !fillData.fillColorGradient && !fillData.fillColor) {
    attrs.fill = 'black';
  }

  return attrs;
}

export function addStroke(
  attrs: Record<string, any>,
  data: any,
  renderId: string,
  index: number,
  openPath: boolean
): Record<string, any> {
  const style = data.strokeStyle || 'solid';

  if (style === 'none') {
    return attrs;
  }

  const width = data.strokeWidth ?? 1;
  const gradient = data.strokeColorGradient;
  const color = data.strokeColor;
  const opacity = data.strokeOpacity;

  attrs.strokeWidth = width;

  if (gradient != null) {
    const gradientId = dm.str('stroke-color-gradient-', renderId, '-', index);
    attrs.stroke = `url(#${gradientId})`;
  } else if (color != null) {
    attrs.stroke = color;
  }

  if (opacity != null) {
    attrs.strokeOpacity = opacity;
  }

  if (style !== 'svg') {
    attrs.strokeDasharray = calculateDasharray(style, width);
  }

  const capsStart = data.strokeCapStart;
  const capsEnd = data.strokeCapEnd;
  const alignment = data.strokeAlignment;

  if (
    strokeCapsLine.has(capsStart) &&
    capsStart === capsEnd &&
    (openPath || (alignment !== 'inner' && alignment !== 'outer')) &&
    style !== 'dotted'
  ) {
    attrs.strokeLinecap = capsStart;
  } else if (style === 'dotted') {
    attrs.strokeLinecap = 'round';
  }

  if (openPath || (alignment !== 'inner' && alignment !== 'outer')) {
    if (
      strokeCapsMarker.has(capsStart) ||
      (strokeCapsLine.has(capsStart) && capsStart !== capsEnd)
    ) {
      attrs.markerStart = `url(#marker-${renderId}-${capsStart})`;
    }

    if (
      strokeCapsMarker.has(capsEnd) ||
      (strokeCapsLine.has(capsEnd) && capsStart !== capsEnd)
    ) {
      attrs.markerEnd = `url(#marker-${renderId}-${capsEnd})`;
    }
  }

  return attrs;
}

export function getSvgProps(shape: any, renderId: string): Record<string, any> {
  const attrs_data = shape.svgAttrs || {};
  const defs = shape.svgDefs || {};

  if (d.empty(attrs_data) && d.empty(defs)) {
    return {};
  }

  const result: Record<string, any> = {};
  Object.entries(attrs_data).forEach(([key, value]) => {
    const newKey = csvg.updateAttrIds((id: string) => {
      if (defs[id] != null) {
        return dm.str(renderId, '-', id);
      }
      return id;
    }, key);
    result[newKey] = value;
  });

  delete result.id;
  return json.toJs(result, { keyFn: (k: string) => k });
}

export function getFillStyle(
  fillData: any,
  index: number,
  renderId: string,
  type: string,
  fillDefault?: string
): Record<string, any> {
  return addFill({}, fillData, renderId, index, type, fillDefault);
}

export function addFillProps(
  props: Record<string, any>,
  shape: any,
  renderId: string,
  position = 0
): Record<string, any> {
  const shapeFills = shape.fills;
  const shapeShadow = shape.shadow;
  const shapeBlur = shape.blur;

  const svgProps = getSvgProps(shape, renderId);
  const svgStyles = (svgProps as any).style;

  const shapeType = dm.getProp(shape, 'type');

  const style = obj.clone((props as any).style || {});
  obj.merge(style, svgStyles);

  const urlFill =
    shape.fillImage != null ||
    cfh.imageShape(shape) ||
    (shapeFills && shapeFills.length > 1) ||
    shapeFills?.some((f: any) => f.fillColorGradient) ||
    shapeFills?.some((f: any) => f.fillImage);

  let result = { ...props };

  if (cfh.frameShape(shape)) {
    // No-op
  } else if (
    (shapeShadow && shapeShadow.filter((s: any) => !s.hidden).length > 0) ||
    (shapeBlur && !shapeBlur.hidden)
  ) {
    result.filter = `url(#filter-${renderId})`;
  }

  // SVG imported shapes with no fill get default black
  if (
    shape.svgAttrs !== undefined &&
    (shapeType === 'svg-raw' || shapeType === 'group') &&
    (!shapeFills || shapeFills.length === 0)
  ) {
    const wstyle = shape.wrapperStyles || {};
    let fill = (wstyle as any).fill;
    fill = d.nilv(fill, clr.black);
    (style as any).fill = fill;
  } else if (urlFill) {
    obj.unset(style, 'fill');
    obj.unset(style, 'fillOpacity');
    result.fill = `url(#fill-${position}-${renderId})`;
  } else if (svgStyles && (svgStyles as any).fill !== undefined) {
    const fill = (svgStyles as any).fill;
    const opacity = (svgStyles as any).fillOpacity;
    if (fill != null) (style as any).fill = fill;
    if (opacity != null) (style as any).fillOpacity = opacity;
  } else if (svgProps && (!shapeFills || shapeFills.length === 0)) {
    const fill = (svgProps as any).fill;
    const opacity = (svgProps as any).fillOpacity;
    if (fill != null) (style as any).fill = fill;
    if (opacity != null) (style as any).fillOpacity = opacity;
  } else if (d.notEmpty(shapeFills)) {
    const fill = shapeFills[0];
    const svgFill = (svgProps as any).fill;
    const fillDefault = d.nilv(svgFill, 'none');
    obj.merge(style, getFillStyle(fill, renderId, 0, shapeType, fillDefault));
  } else if (cfh.pathShape(shape) && (!shapeFills || shapeFills.length === 0)) {
    (style as any).fill = 'none';
  }

  result = obj.merge(result, svgProps);
  result.style = style;

  return result;
}
