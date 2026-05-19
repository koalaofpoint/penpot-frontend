import * as d from '@app/common/data';
import { dm} from '@app/common/data.macros';
import * as legacyTxt from '@app/common.text';
import * as sts from '@app/main/ui/shapes/text/styles';
import * as obj from '@app/util.object';
import React from 'react';

interface RenderTextProps {
  node: any;
  parent?: any;
  shape: any;
  code?: boolean;
}

function RenderText(props: RenderTextProps) {
  const { node, parent, shape, code } = props;
  const text = node.text;

  const style = text === ''
    ? sts.generateTextStyles(shape, parent)
    : sts.generateTextStyles(shape, node);

  const className = code ? node.$id : undefined;

  return (
    <span className={`text-node ${className || ''}`} style={style}>
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

interface TextShapeProps {
  shape: any;
  growType?: string;
  code?: boolean;
}

export function TextShape(props: TextShapeProps, ref: React.Ref<any>) {
  const shape = props.shape;
  const growType = props.growType;
  const code = props.code;

  const { id, x, y, width, height, content } = shape;

  let processedContent = code
    ? legacyTxt.indexContent(content)
    : content;

  const style = code
    ? undefined
    : {
        position: 'fixed',
        left: 0,
        top: 0,
        background: 'white',
        width: growType === 'auto-width' ? 100000 : width,
        height: ['auto-height', 'auto-width'].includes(growType ?? '')
          ? 100000
          : height,
      };

  return (
    <div
      id={`html-text-node-${id}`}
      ref={ref}
      data-x={x}
      data-y={y}
      style={style}
    >
      {!code && (
        <style>
          {'.text-node { background-clip: text; -webkit-background-clip: text; }'}
        </style>
      )}
      <RenderNode
        index={0}
        shape={shape}
        node={processedContent}
        code={code}
      />
    </div>
  );
}
