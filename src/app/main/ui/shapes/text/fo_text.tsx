// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useMemo } from 'react';
import * as d from '@app/common/data';
import * as dm from '@app/common/data/macros';
import * as gsh from '@app/common/geom/shapes';
import * as cc from '@app/common/types/color';
import * as sts from '@app/main/ui/shapes/text/styles';
import * as obj from '@app/util/object';
import * as str from 'cuerdas/core';

interface RenderTextProps {
  node: any;
  parent?: any;
  shape: any;
}

const RenderText: React.FC<RenderTextProps> = React.memo(({ node, parent, shape }) => {
  const text = node.text;
  const style = text === ''
    ? sts.generateTextStyles(shape, parent)
    : sts.generateTextStyles(shape, node);

  return React.createElement('span', { className: 'text-node', style },
    text === '' ? '\u00A0' : text
  );
});

interface RenderRootProps {
  node: any;
  children?: React.ReactNode;
  shape: any;
}

const RenderRoot: React.FC<RenderRootProps> = React.memo(({ node, children, shape }) => {
  const style = sts.generateRootStyles(shape, node);

  return React.createElement('div', {
    className: 'root rich-text',
    style,
    xmlns: 'http://www.w3.org/1999/xhtml'
  }, children);
});

interface RenderParagraphSetProps {
  children?: React.ReactNode;
  shape: any;
}

const RenderParagraphSet: React.FC<RenderParagraphSetProps> = React.memo(({ children, shape }) => {
  const style = sts.generateParagraphSetStyles(shape);

  return React.createElement('div', { className: 'paragraph-set', style }, children);
});

interface RenderParagraphProps {
  node: any;
  shape: any;
  children?: React.ReactNode;
}

const RenderParagraph: React.FC<RenderParagraphProps> = React.memo(({ node, shape, children }) => {
  const style = sts.generateParagraphStyles(shape, node);
  const dir = node['text-direction'] || 'auto';

  return React.createElement('p', { className: 'paragraph', style, dir }, children);
});

interface RenderNodeProps {
  node: any;
  shape: any;
}

const RenderNode: React.FC<RenderNodeProps> = React.memo(({ node, shape }) => {
  const { type, text, children } = node;

  if (typeof text === 'string') {
    return React.createElement(RenderText, { node, parent: node, shape });
  }

  let component: React.ComponentType<any> | null = null;
  switch (type) {
    case 'root': component = RenderRoot; break;
    case 'paragraph-set': component = RenderParagraphSet; break;
    case 'paragraph': component = RenderParagraph; break;
  }

  if (!component) return null;

  return React.createElement(component, { node, children, shape },
    d.enumerate(children || []).map(([index, childNode]: [number, any]) => {
      const newProps = obj.clone({ ...arguments[2], node: childNode, index, key: index });
      obj.set(newProps, 'node', childNode);
      obj.set(newProps, 'index', index);
      obj.set(newProps, 'key', index);
      return React.createElement(RenderNode, newProps);
    })
  );
});

function nextColor(colors: Set<string>): string {
  console.assert(colors instanceof Set);
  let currentRgb = [0, 0, 0];
  while (true) {
    const currentHex = cc.rgbToHex(currentRgb as any);
    if (!colors.has(currentHex)) return currentHex;
    currentRgb = cc.nextRgb(currentRgb as any);
  }
}

function fillToColor(fill: any): { type: 'gradient'; gradient: any } | { type: 'transparent'; hex: string; opacity: number } | { type: 'solid'; hex: string; mapTo: string } | null {
  if (fill.fillColorGradient) {
    return { type: 'gradient', gradient: fill.fillColorGradient };
  }
  if (typeof fill.fillColor === 'string' && fill.fillOpacity != null && fill.fillOpacity !== 1) {
    return { type: 'transparent', hex: fill.fillColor, opacity: fill.fillOpacity };
  }
  if (typeof fill.fillColor === 'string') {
    return { type: 'solid', hex: fill.fillColor, mapTo: fill.fillColor };
  }
  return null;
}

function retrieveColors(shape: any): [Set<string>, Record<string, string>, Record<string, string>] {
  const colorData = (shape.content ? d.treeSeq((n: any) => n.children, shape.content) : [])
    .map((node: any) => fillToColor(node))
    .filter((c: any) => c != null);

  let colors = new Set(colorData
    .filter((c: any) => c.type === 'solid')
    .map((c: any) => c.hex));
  colors.add(cc.black);

  let result: any[] = [];
  for (const head of colorData) {
    if (head.type === 'solid') {
      result.push(head);
    } else {
      const next = nextColor(colors);
      const mapped = { ...head, mapTo: next };
      colors.add(next);
      result.push(mapped);
    }
  }

  const colorMappingInverse: Record<string, string> = {};
  for (const item of result) {
    if (item.type !== 'solid') {
      colorMappingInverse[item.mapTo] = item.type;
    }
  }

  const colorMapping: Record<string, string> = {};
  for (const item of result) {
    if (item.type === 'transparent') {
      colorMapping[[item.hex, item.opacity]] = item.mapTo;
    } else if (item.type === 'gradient') {
      colorMapping[item.gradient] = item.mapTo;
    }
  }

  return [colors, colorMapping, colorMappingInverse];
}

interface TextShapeProps {
  shape: any;
  growType?: string;
}

export const TextShape = React.forwardRef<SVGForeignObjectElement, TextShapeProps>(({ shape, growType }, ref) => {
  const transform = gsh.transformStr(shape);
  const id = dm.getProp(shape, 'id');
  const x = dm.getProp(shape, 'x');
  const y = dm.getProp(shape, 'y');
  const width = dm.getProp(shape, 'width');
  const height = dm.getProp(shape, 'height');
  const content = shape.content;

  const [colors, _colorMapping, colorMappingInverse] = useMemo(() => retrieveColors(shape), [shape]);

  return React.createElement('foreignObject', {
    x,
    y,
    id,
    'data-colors': str.join(',', Array.from(colors)),
    'data-mapping': JSON.stringify(colorMappingInverse),
    transform,
    width: growType === 'auto-width' ? 100000 : width,
    height: ['auto-height', 'auto-width'].includes(growType || '') ? 100000 : height,
    ref
  },
    React.createElement('style', null, '.text-node { background-clip: text; -webkit-background-clip: text; }'),
    React.createElement(RenderNode, { index: 0, shape, node: content })
  );
});
