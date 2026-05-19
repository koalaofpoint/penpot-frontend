import * as txt from '@app/common/types.text';
import * as fonts from '@app/main/fonts';
import * as ctx from '@app/main/ui/context';
import { TextShape as FoTextShape } from '@app/main/ui/shapes/text/fo-text';
import { TextShape as SvgTextShape } from '@app/main/ui/shapes/text/svg-text';
import * as obj from '@app/util/object';
import React, { useEffect } from 'react';

function loadFonts(content: any) {
  const extractFn = (node: any) => [node.fontId, node.fontVariantId];
  const defaultFont = extractFn(txt.defaultTypography);

  const processNode = (node: any): Array<[string | null, string | null]> => {
    const result: Array<[string | null, string | null]> = [defaultFont];
    if (node && typeof node === 'object') {
      if (node.fontId || node.fontVariantId) {
        result.push(extractFn(node));
      }
      if (node.children) {
        node.children.forEach((child: any) => {
          result.push(...processNode(child));
        });
      }
    }
    return result;
  };

  const allFonts = processNode(content);
  const uniqueFonts = new Set(allFonts);

  uniqueFonts.forEach(([fontId, variantId]) => {
    if (fontId) {
      fonts.ensureLoaded(fontId, variantId);
    }
  });
}

interface TextShapeProps {
  shape: any;
}

export function TextShape(props: TextShapeProps) {
  const shape = obj.get(props, 'shape') as any;
  const positionData = shape?.positionData;
  const content = shape?.content;

  const isRender = React.useContext(ctx.isRender);
  const isComponent = React.useContext(ctx.isComponent);

  useEffect(() => {
    loadFonts(content);
  }, [content]);

  if (positionData != null) {
    return <SvgTextShape shape={props.shape} />;
  }

  if (positionData == null && (isComponent || isRender)) {
    return <FoTextShape shape={props.shape} />;
  }

  return null;
}
