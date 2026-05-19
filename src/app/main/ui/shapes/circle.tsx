import { dm} from '@app/common/data.macros';
import * as gsh from '@app/common/geom/shapes';
import { ShapeCustomStrokes } from '@app/main/ui/shapes/custom-stroke';
import * as obj from '@app/util/object';
import React, { useMemo } from 'react';

interface CircleShapeProps {
  shape: any;
}

export function CircleShape(props: CircleShapeProps) {
  const { shape } = props;

  const x = dm.getProp(shape, 'x');
  const y = dm.getProp(shape, 'y');
  const w = dm.getProp(shape, 'width');
  const h = dm.getProp(shape, 'height');

  const t = gsh.transformStr(shape);

  const cx = x + w / 2;
  const cy = y + h / 2;
  const rx = w / 2;
  const ry = h / 2;

  const shapeProps = useMemo(() => {
    return obj.merge(
      { cx, cy, rx, ry, transform: t } as Record<string, any>,
      {}
    );
  }, [cx, cy, rx, ry, t]);

  return (
    <ShapeCustomStrokes shape={shape}>
      <ellipse {...shapeProps} />
    </ShapeCustomStrokes>
  );
}
