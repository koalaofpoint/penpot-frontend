import * as d from '@app/common/data';
import { dm} from '@app/common/data.macros';
import * as gsh from '@app/common/geom.shapes';
import * as cc from '@app/common.types.color';
import * as sts from '@app/main/ui/shapes/text/styles';
import * as obj from '@app/util.object';
import * as str from 'cuerdas';
import React from 'react';

interface RenderTextProps {
  node: any;
  parent?: any;
  shape: any;
  code?: boolean;
}

function RenderText(props: RenderTextProps) {
  const { node, parent, shape } = props;
  const text = node.text;

  const style = text === ''
    ? sts.generateTextStyles(shape, parent)
    : sts.generateTextStyles(shape, node);

  const className = props.code ? node.$id : undefined;

  return (
    <span className="text-node" style={style}>
      {text === '' ? '\u00A0' : text}
    </span>
  );
}

interface RenderRootProps {
  node: any;
  children?: React.ReactNode;
  shape: any;
  code?: boolean;
}

function RenderRoot(props: RenderRootProps) {
  const { node, children, shape, code } = props;
  const style = sts.generateRootStyles(shape, node, code);
  const className = code ? node.$id : undefined;

  return (
    <div
      className={`root rich-text ${className || ''}`}
      style={style}
      xmlns="http://www.w3.org/1999/xhtml"
    >
      {children}
    </div>
  );
}

interface RenderParagraphSetProps {
  node?: any;
  children?: React.ReactNode;
  shape: any;
  code?: boolean;
}

function RenderParagraphSet(props: RenderParagraphSetProps) {
  const { children, shape, code } = props;
  const style = code ? undefined : sts.generateParagraphSetStyles(shape);
  const className = code ? props.node?.$id : undefined;

  return (
    <div className={`paragraph-set ${className || ''}`} style={style}>
      {children}
    </div>
  );
}

interface RenderParagraphProps {
  node: any;
  children?: React.ReactNode;
  shape: any;
  code?: boolean;
}

function RenderParagraph(props: RenderParagraphProps) {
  const { node, children, shape, code } = props;
  const style = code ? undefined : sts.generateParagraphStyles(shape, node);
  const className = code ? node.$id : undefined;
  const dir = node.textDirection || 'auto';

  return (
    <p className={`paragraph ${className || ''}`} style={style} dir={dir}>
      {children}
    </p>
  );
}

interface RenderNodeProps {
  node: any;
  parent?: any;
  shape: any;
  code?: boolean;
  index?: number;
}

function RenderNode(props: RenderNodeProps) {
  const { node, shape, code } = props;
  const { type, text, children } = node;

  if (typeof text === 'string') {
    return <RenderText {...props} />;
  }

  let component: React.ComponentType<any> | null = null;

  switch (type) {
    case 'root':
      component = RenderRoot;
      break;
    case 'paragraph-set':
      component = RenderParagraphSet;
      break;
    case 'paragraph':
      component = RenderParagraph;
      break;
  }

  if (!component) {
    return null;
  }

  return (
    <component {...props}>
      {(children || []).map((childNode: any, index: number) => (
        <RenderNode
          key={index}
          node={childNode}
          parent={node}
          shape={shape}
          code={code}
          index={index}
        />
      ))}
    </component>
  );
}

function nextColor(colors: Set<string>): string {
  let currentRgb = [0, 0, 0];

  while (true) {
    const currentHex = cc.rgbToHex(currentRgb as [number, number, number]);
    if (!colors.has(currentHex)) {
      return currentHex;
    }
    currentRgb = cc.nextRgb(currentRgb as [number, number, number]);
  }
}

function fillToColor(data: any): { type: string; gradient?: any; hex?: string; opacity?: number; mapTo?: string } | null {
  if (data.fillColorGradient != null) {
    return { type: 'gradient', gradient: data.fillColorGradient };
  }

  if (typeof data.fillColor === 'string' && data.fillOpacity != null && data.fillOpacity !== 1) {
    return { type: 'transparent', hex: data.fillColor, opacity: data.fillOpacity };
  }

  if (typeof data.fillColor === 'string') {
    return { type: 'solid', hex: data.fillColor, mapTo: data.fillColor };
  }

  return null;
}

function retrieveColors(shape: any): [Set<string>, Record<string, any>, Record<string, any>] {
  const colorData: any[] = [];

  const traverse = (node: any) => {
    if (!node) return;
    const result = fillToColor(node);
    if (result) {
      colorData.push(result);
    }
    if (node.children) {
      node.children.forEach(traverse);
    }
  };

  traverse(shape.content);

  let colors: Set<string> = new Set([cc.black]);
  for (const data of colorData) {
    if (data.type === 'solid') {
      colors.add(data.hex!);
    }
  }

  const processedColorData: any[] = [];
  const remainingColorData = [...colorData];

  while (remainingColorData.length > 0) {
    const head = remainingColorData.shift();
    if (head.type === 'solid') {
      processedColorData.push(head);
    } else {
      const next = nextColor(colors);
      const mappedHead = { ...head, mapTo: next };
      colors.add(next);
      processedColorData.push(mappedHead);
    }
  }

  const colorMappingInverse: Record<string, any> = {};
  for (const data of processedColorData) {
    if (data.type !== 'solid') {
      const key = data.mapTo!;
      if (!colorMappingInverse[key]) {
        colorMappingInverse[key] = data;
      }
    }
  }

  const colorMapping: Record<string, any> = {};

  for (const data of processedColorData) {
    if (data.type === 'transparent') {
      colorMapping[[data.hex, data.opacity]] = data.mapTo;
    } else if (data.type === 'gradient') {
      colorMapping[data.gradient] = data.mapTo;
    }
  }

  return [colors, colorMapping, colorMappingInverse];
}

interface TextShapeProps {
  shape: any;
  growType?: string;
}

export function TextShape(props: TextShapeProps, ref: React.Ref<any>) {
  const { shape, growType } = props;

  const transform = gsh.transformStr(shape);
  const id = dm.getProp(shape, 'id');
  const x = dm.getProp(shape, 'x');
  const y = dm.getProp(shape, 'y');
  const width = dm.getProp(shape, 'width');
  const height = dm.getProp(shape, 'height');
  const content = shape.content;

  const [colors, _colorMapping, colorMappingInverse] = retrieveColors(shape);

  const growTypeValue = growType || shape.growType;
  const finalWidth = growTypeValue === 'auto-width' ? 100000 : width;
  const finalHeight = ['auto-height', 'auto-width'].includes(growTypeValue) ? 100000 : height;

  return (
    <foreignObject
      x={x}
      y={y}
      id={id}
      data-colors={Array.from(colors).join(',')}
      data-mapping={JSON.stringify(colorMappingInverse)}
      transform={transform}
      width={finalWidth}
      height={finalHeight}
      ref={ref}
    >
      <style>{'.text-node { background-clip: text; -webkit-background-clip: text; }'}</style>
      <RenderNode
        index={0}
        shape={shape}
        node={content}
      />
    </foreignObject>
  );
}
