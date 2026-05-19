import * as path from '@app/common/types/path';
import { ShapeCustomStrokes } from '@app/main/ui/shapes/custom-stroke';
import React, { useMemo } from 'react';

function contentToString(content: any): string {
  if (content == null) {
    return '';
  }

  if (path.content(content)) {
    return content.toString();
  }

  const contentStr = path.content(content);
  return contentStr.toString();
}

interface PathShapeProps {
  shape: any;
}

export function PathShape(props: PathShapeProps) {
  const { shape } = props;
  const content = shape.content;

  const pdata = useMemo(() => {
    try {
      return contentToString(content);
    } catch (cause) {
      console.error('unexpected error on formatting path', {
        shapeName: shape.name,
        shapeId: shape.id,
        cause,
      });
      return '';
    }
  }, [content, shape.name, shape.id]);

  return (
    <ShapeCustomStrokes shape={shape}>
      <path d={pdata} />
    </ShapeCustomStrokes>
  );
}
