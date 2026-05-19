import { dm} from '@app/common/data.macros';
import * as gsh from '@app/common/geom/shapes';
import * as muc from '@app/main/ui/context';
import * as attrs from '@app/main/ui/shapes/attrs';
import { ShapeCustomStrokes } from '@app/main/ui/shapes/custom-stroke';
import * as obj from '@app/util/object';
import React, { useMemo } from 'react';

interface ImageShapeProps {
  shape: any;
}

export function ImageShape(props: ImageShapeProps) {
  const { shape } = props;

  const x = dm.getProp(shape, 'x');
  const y = dm.getProp(shape, 'y');
  const w = dm.getProp(shape, 'width');
  const h = dm.getProp(shape, 'height');

  const renderId = React.useContext(muc.renderId);
  const transform = gsh.transformStr(shape);

  const shapeProps = useMemo(() => {
    const base: Record<string, any> = {};
    attrs.addFillProps(base, shape, renderId);
    attrs.addBorderProps(base, shape);
    obj.merge(base, { x, y, width: w, height: h, transform });
    return base;
  }, [shape, x, y, w, h, renderId, transform]);

  const path = (shapeProps as any).d;

  return (
    <ShapeCustomStrokes shape={shape}>
      {path ? <path {...shapeProps} /> : <rect {...shapeProps} />}
    </ShapeCustomStrokes>
  );
}
