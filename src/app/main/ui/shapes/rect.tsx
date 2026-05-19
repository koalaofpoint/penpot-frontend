import { dm} from '@app/common/data.macros';
import * as gsh from '@app/common/geom/shapes';
import * as attrs from '@app/main/ui/shapes/attrs';
import { ShapeCustomStrokes } from '@app/main/ui/shapes/custom-stroke';
import * as obj from '@app/util/object';
import React, { useMemo } from 'react';

interface RectShapeProps {
  shape: any;
}

export function RectShape(props: RectShapeProps) {
  const { shape } = props;

  const x = dm.getProp(shape, 'x');
  const y = dm.getProp(shape, 'y');
  const w = dm.getProp(shape, 'width');
  const h = dm.getProp(shape, 'height');

  const t = gsh.transformStr(shape);

  const shapeProps = useMemo(() => {
    return obj.merge(
      obj.clone(attrs.getBorderProps(shape)),
      { x, y, transform: t, width: w, height: h } as Record<string, any>
    );
  }, [shape, x, y, t, w, h]);

  const path = (shapeProps as any).d;

  return (
    <ShapeCustomStrokes shape={shape}>
      {path ? (
        <path {...shapeProps} />
      ) : (
        <rect {...shapeProps} />
      )}
    </ShapeCustomStrokes>
  );
}
