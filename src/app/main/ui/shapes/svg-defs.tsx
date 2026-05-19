import * as d from '@app/common/data';
import { dm} from '@app/common/data.macros';
import * as gmt from '@app/common/geom.matrix';
import * as grc from '@app/common/geom.rect';
import * as gsh from '@app/common/geom.shapes';
import * as gsb from '@app/common/geom.shapes.bounds';
import * as json from '@app/common.json';
import * as csvg from '@app/common.svg';
import React, { useMemo } from 'react';

function addMatrix(
  attrs: Record<string, any>,
  transformKey: string,
  transformMatrix: any
): Record<string, any> {
  const val = attrs[transformKey];
  const newVal = val
    ? `${transformMatrix} ${val}`
    : `${transformMatrix}`;
  return { ...attrs, [transformKey]: newVal };
}

interface SvgNodeProps {
  type: string;
  node: any;
  prefixId: (id: string) => string;
  transform?: any;
  bounds?: any;
}

function SvgNode(props: SvgNodeProps) {
  const { type, node, prefixId, transform, bounds } = props;

  if (typeof node === 'string') {
    return node;
  }

  const { tag, attrs: nodeAttrs, content } = node;

  const transformGradient =
    csvg.gradientTags.has(tag) &&
    nodeAttrs?.gradientUnits === 'userSpaceOnUse';

  const transformPattern =
    tag === 'pattern' &&
    nodeAttrs?.patternContentUnits === 'userSpaceOnUse' &&
    nodeAttrs?.patternUnits === 'userSpaceOnUse';

  const transformClipPath =
    tag === 'clipPath' &&
    nodeAttrs?.clipPathUnits === 'userSpaceOnUse';

  const transformFilter =
    csvg.filterTags.has(tag) &&
    nodeAttrs?.filterUnits === 'objectBoundingBox';

  const transformMask =
    tag === 'mask' && nodeAttrs?.maskUnits === 'objectBoundingBox';

  let attrs = csvg.updateAttrIds(prefixId, nodeAttrs);

  if (
    (transformGradient ||
      transformPattern ||
      transformClipPath ||
      transformFilter ||
      transformMask) &&
    type === 'group'
  ) {
    const className = attrs.className
      ? `${attrs.className} svg-def`
      : 'svg-def';
    attrs = { ...attrs, className };
  }

  if (transformGradient) {
    attrs = addMatrix(attrs, 'gradientTransform', transform);
  }
  if (transformPattern) {
    attrs = addMatrix(attrs, 'patternTransform', transform);
  }
  if (transformClipPath) {
    attrs = addMatrix(attrs, 'transform', transform);
  }
  if (transformFilter || transformMask) {
    attrs = { ...attrs, ...bounds };
  }

  if (tag === 'filter' || tag === 'mask') {
    attrs = {
      ...attrs,
      'data-old-x': attrs.x,
      'data-old-y': attrs.y,
      'data-old-width': attrs.width,
      'data-old-height': attrs.height,
    };
  }

  let wrapper: string | null = null;
  let wrapperProps: Record<string, any> = {};

  if (tag === 'mask') {
    wrapper = 'g';
    wrapperProps = {
      className: 'svg-mask-wrapper',
      transform: `${transform}`,
    };
  }

  const jsProps = json.toJs(attrs, { keyFn: (k: string) => k });

  return React.createElement(
    tag,
    jsProps,
    <>
      {wrapper === 'g' && React.createElement(wrapper, wrapperProps)}
      {(content || []).map((childNode: any, index: number) => (
        <SvgNode
          key={`node-${index}`}
          type={type}
          node={childNode}
          prefixId={prefixId}
          transform={transform}
          bounds={bounds}
        />
      ))}
      {wrapper === 'g' && '</g>'}
    </>
  );
}

function getSvgDefBounds(node: any, shape: any, transform: any): any {
  const { tag, attrs: nodeAttrs } = node;

  if (tag === 'mask' || csvg.filterTags.has(tag)) {
    const rect = grc.makeRect(
      d.parseDouble(nodeAttrs?.x),
      d.parseDouble(nodeAttrs?.y),
      d.parseDouble(nodeAttrs?.width),
      d.parseDouble(nodeAttrs?.height)
    );
    if (rect) {
      return gsh.transformRect(rect, transform);
    }
  }

  return gsb.getShapeFilterBounds(shape);
}

interface SvgDefsProps {
  shape: any;
  renderId: string;
}

export function SvgDefs(props: SvgDefsProps) {
  const { shape, renderId } = props;

  const defs = shape.svgDefs;

  const transform = useMemo(() => {
    if (shape.type === 'svg-raw') {
      return gmt.matrix();
    }
    return csvg.svgTransformMatrix(shape);
  }, [shape]);

  const finalTransform = shape.svgTransform
    ? gmt.multiply(transform, shape.svgTransform)
    : transform;

  const prefixId = React.useCallback(
    (id: string) => {
      if (defs && defs[id]) {
        return `${renderId}-${id}`;
      }
      return id;
    },
    [renderId, defs]
  );

  return (
    <>
      {Object.entries(defs || {}).map(([key, node]) => {
        const bounds = getSvgDefBounds(node, shape, finalTransform);
        return (
          <SvgNode
            key={dm.str(key)}
            type={shape.type}
            node={node}
            prefixId={prefixId}
            transform={finalTransform}
            bounds={bounds}
          />
        );
      })}
    </>
  );
}
