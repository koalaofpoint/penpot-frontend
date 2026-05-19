// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useMemo } from 'react';
import * as d from '@app/common/data';
import * as dm from '@app/common/data/macros';
import * as legacyTxt from '@app/common/text';
import * as sts from '@app/main/ui/shapes/text/styles';
import * as obj from '@app/util/object';

interface RenderTextProps {
  node: any;
  parent?: any;
  shape: any;
  code?: boolean;
}

const RenderText: React.FC<RenderTextProps> = React.memo(({ node, parent, shape, code: codeProp }) => {
  const text = node.text;
  const style = text === ''
    ? sts.generateTextStyles(shape, parent)
    : sts.generateTextStyles(shape, node);
  const className = codeProp ? node['$id'] : undefined;

  return React.createElement('span', { className: `text-node ${className || ''}`, style },
    text === '' ? '\u00A0' : text
  );
});

interface RenderRootProps {
  node: any;
  children?: React.ReactNode;
  shape: any;
  code?: boolean;
}

const RenderRoot: React.FC<RenderRootProps> = React.memo(({ node, children, shape, code: codeProp }) => {
  const style = sts.generateRootStyles(shape, node, codeProp);
  const className = codeProp ? node['$id'] : undefined;

  return React.createElement('div', {
    className: `root rich-text ${className || ''}`,
    style,
    xmlns: 'http://www.w3.org/1999/xhtml'
  }, children);
});

interface RenderParagraphSetProps {
  node: any;
  children?: React.ReactNode;
  shape: any;
  code?: boolean;
}

const RenderParagraphSet: React.FC<RenderParagraphSetProps> = React.memo(({ node, children, shape, code: codeProp }) => {
  const style = codeProp ? undefined : sts.generateParagraphSetStyles(shape);
  const className = codeProp ? node['$id'] : undefined;

  return React.createElement('div', { className: `paragraph-set ${className || ''}`, style }, children);
});

interface RenderParagraphProps {
  node: any;
  shape: any;
  children?: React.ReactNode;
  code?: boolean;
}

const RenderParagraph: React.FC<RenderParagraphProps> = React.memo(({ node, shape, children, code: codeProp }) => {
  const style = codeProp ? undefined : sts.generateParagraphStyles(shape, node);
  const className = codeProp ? node['$id'] : undefined;
  const dir = node['text-direction'] || 'auto';

  return React.createElement('p', { className: `paragraph ${className || ''}`, style, dir }, children);
});

interface RenderNodeProps {
  node: any;
  shape: any;
  code?: boolean;
}

const RenderNode: React.FC<RenderNodeProps> = React.memo(({ node, shape, code: codeProp }) => {
  const { type, text, children } = node;

  if (typeof text === 'string') {
    return React.createElement(RenderText, { node, parent: node, shape, code: codeProp });
  }

  let component: React.ComponentType<any> | null = null;
  switch (type) {
    case 'root': component = RenderRoot; break;
    case 'paragraph-set': component = RenderParagraphSet; break;
    case 'paragraph': component = RenderParagraph; break;
  }

  if (!component) return null;

  const parent = node;
  return React.createElement(component, { node, children, shape, code: codeProp },
    d.enumerate(children || []).map(([index, childNode]: [number, any]) => {
      const newProps = obj.clone({ node: childNode, parent, index, key: index, code: codeProp });
      obj.set(newProps, 'node', childNode);
      obj.set(newProps, 'parent', parent);
      obj.set(newProps, 'index', index);
      obj.set(newProps, 'key', index);
      obj.set(newProps, 'code', codeProp);
      return React.createElement(RenderNode, newProps);
    })
  );
});

interface TextShapeProps {
  shape: any;
  growType?: string;
  code?: boolean;
}

export const TextShape = React.forwardRef<HTMLDivElement, TextShapeProps>((props, ref) => {
  const { shape, growType, code: codeProp } = props;
  const { id, x, y, width, height, content } = shape;

  const processedContent = codeProp ? legacyTxt.indexContent(content) : content;

  const style = useMemo(() => {
    if (codeProp) return undefined;
    return {
      position: 'fixed',
      left: 0,
      top: 0,
      background: 'white',
      width: growType === 'auto-width' ? 100000 : width,
      height: ['auto-height', 'auto-width'].includes(growType || '') ? 100000 : height
    };
  }, [codeProp, growType, width, height]);

  return React.createElement('div', {
    id: dm.str('html-text-node-', id),
    ref,
    'data-x': x,
    'data-y': y,
    style
  },
    !codeProp && React.createElement('style', null, '.text-node { background-clip: text; -webkit-background-clip: text; }'),
    React.createElement(RenderNode, { index: 0, shape, node: processedContent, code: codeProp })
  );
});
