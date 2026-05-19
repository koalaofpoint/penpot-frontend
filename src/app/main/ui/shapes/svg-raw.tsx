import { dm} from '@app/common/data.macros';
import * as gsh from '@app/common/geom.shapes';
import * as csvg from '@app/common.svg';
import * as muc from '@app/main/ui/context';
import * as attrs from '@app/main/ui/shapes/attrs';
import * as obj from '@app/util/object';
import * as str from 'cuerdas';
import React, { useContext, useMemo } from 'react';

const graphicElement = new Set([
  'svg', 'circle', 'ellipse', 'image', 'line', 'path',
  'polygon', 'polyline', 'rect', 'symbol', 'text', 'textPath', 'use',
]);

const svgIdsCtx = React.createContext<Record<string, string> | null>(null);

interface SvgRootProps {
  shape: any;
  children?: React.ReactNode;
}

function SvgRoot(props: SvgRootProps) {
  const { shape, children } = props;

  const x = dm.getProp(shape, 'x');
  const y = dm.getProp(shape, 'y');
  const w = dm.getProp(shape, 'width');
  const h = dm.getProp(shape, 'height');

  const idsMapping = useMemo(() => {
    return csvg.generateIdMapping(shape.content);
  }, [shape.content]);

  const renderId = useContext(muc.renderId);

  const svgProps = useMemo(() => {
    const props: Record<string, any> = {};
    attrs.addFillProps(props, shape, renderId);
    obj.unset(props, 'transform');
    props.x = x;
    props.y = y;
    props.width = w;
    props.height = h;
    props.preserveAspectRatio = 'none';
    return props;
  }, [shape, x, y, w, h, renderId]);

  return (
    <svgIdsCtx.Provider value={idsMapping}>
      <g className="svg-raw" transform={gsh.transformStr(shape)}>
        <svg {...svgProps}>{children}</svg>
      </g>
    </svgIdsCtx.Provider>
  );
}

interface SvgElementProps {
  shape: any;
  children?: React.ReactNode;
}

function SvgElement(props: SvgElementProps) {
  const { shape, children } = props;

  const idsMapping = useContext(svgIdsCtx);
  const renderId = useContext(muc.renderId);

  const tag = shape.content?.tag;

  const processedShape = useMemo(() => {
    const tag = shape.content?.tag;
    let result = shape;

    result = {
      ...result,
      svgAttrs: csvg.replaceAttrsIds(result.svgAttrs, idsMapping),
    };

    if (graphicElement.has(tag)) {
      const svgTransform = csvg.svgTransformMatrix(shape);
      const existingTransform = result.svgAttrs?.transform || '';
      result = {
        ...result,
        svgAttrs: {
          ...result.svgAttrs,
          transform: `${svgTransform} ${existingTransform}`,
        },
      };
    } else {
      result = {
        ...result,
        svgAttrs: {
          ...result.svgAttrs,
          transform: undefined,
        },
      };
    }

    return result;
  }, [shape, idsMapping]);

  const elementProps = useMemo(() => {
    const elementId = processedShape.svgAttrs?.id;
    const props: Record<string, any> = {};
    attrs.addFillProps(props, processedShape, renderId);

    if (elementId != null && idsMapping?.[elementId] != null) {
      props.id = idsMapping[elementId];
    }

    return props;
  }, [processedShape, renderId, idsMapping]);

  return React.createElement(tag, elementProps, children);
}

interface SvgRawShapeProps {
  shape: any;
  childs: any[];
}

export function SvgRawShape(props: SvgRawShapeProps) {
  const { shape, childs } = props;

  const content = shape.content;
  const tag = content?.tag;

  const svgRoot = content != null && typeof content === 'object' && tag === 'svg';
  const svgTag = content != null && typeof content === 'object';
  const svgLeaf = typeof content === 'string';
  const validTag = csvg.svgTags.has(tag);

  const currentSvgRootId = useContext(muc.currentSvgRootId);

  let styleContent: string | null = null;
  if (tag === 'style') {
    styleContent = `#shape-${currentSvgRootId}{ ${(shape.content.content as string[]).join('\n')} }`;
  }

  if (tag === 'style') {
    return <style>{styleContent}</style>;
  }

  if (svgRoot) {
    return (
      <SvgRoot shape={shape}>
        {childs.map((item: any) => (
          <SvgRawShapeWrapper
            key={dm.str(item.id)}
            shape={item}
            childs={[]}
          />
        ))}
      </SvgRoot>
    );
  }

  if (svgTag && validTag) {
    return (
      <SvgElement shape={shape}>
        {childs.map((item: any) => (
          <SvgRawShapeWrapper
            key={dm.str(item.id)}
            shape={item}
            childs={[]}
          />
        ))}
      </SvgElement>
    );
  }

  if (svgLeaf) {
    return content;
  }

  return null;
}

interface SvgRawShapeWrapperProps {
  shape: any;
  childs: any[];
}

function SvgRawShapeWrapper(props: SvgRawShapeProps) {
  return <SvgRawShape {...props} />;
}
