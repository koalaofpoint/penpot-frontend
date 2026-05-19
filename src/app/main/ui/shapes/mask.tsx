import * as d from '@app/common/data';
import { dm} from '@app/common/data.macros';
import * as cfh from '@app/common/files.helpers';
import * as grc from '@app/common/geom.rect';
import * as muc from '@app/main/ui/context';
import * as str from 'cuerdas';
import React from 'react';

export function maskId(renderId: string, mask: any): string {
  return dm.str(renderId, '-', mask.id, '-mask');
}

export function maskUrl(renderId: string, mask: any): string {
  return dm.str('url(#', maskId(renderId, mask), ')');
}

export function clipId(renderId: string, mask: any): string {
  return dm.str(renderId, '-', mask.id, '-clip');
}

export function clipUrl(renderId: string, mask: any): string {
  return dm.str('url(#', clipId(renderId, mask), ')');
}

export function filterId(renderId: string, mask: any): string {
  return dm.str(renderId, '-', mask.id, '-filter');
}

export function filterUrl(renderId: string, mask: any): string {
  return dm.str('url(#', filterId(renderId, mask), ')');
}

function setWhiteFill(shape: any): any {
  const updateColor = (data: any) => ({
    ...data,
    fillColor: undefined,
    fillOpacity: undefined,
    fillColorGradient: undefined,
    fills: [{ fillColor: '#FFFFFF', fillOpacity: 1 }],
  });

  let result = shape;
  if (shape.positionData) {
    result = {
      ...result,
      positionData: shape.positionData.map(updateColor),
    };
  }
  return {
    ...result,
    strokeColor: '#FFFFFF',
    strokeOpacity: 1,
  };
}

function pointToStr(point: any): string {
  return dm.str(dm.getProp(point, 'x'), ',', dm.getProp(point, 'y'));
}

export function maskFactory(shapeWrapper: React.ComponentType<any>) {
  return function MaskShape(props: { mask: any }) {
    const { mask } = props;

    const renderId = React.useContext(muc.renderId);

    const svgText =
      cfh.textShape(mask) && mask.positionData != null;

    const points = dm.getProp(mask, 'points');

    const pointsStr = React.useMemo(() => {
      return points.map(pointToStr).join(' ');
    }, [points]);

    const bounds = React.useMemo(() => {
      return grc.pointsToRect(points);
    }, [points]);

    const bx = dm.getProp(bounds, 'x');
    const by = dm.getProp(bounds, 'y');
    const bw = dm.getProp(bounds, 'width');
    const bh = dm.getProp(bounds, 'height');

    const shape = React.useMemo(() => {
      return {
        ...mask,
        shadow: undefined,
        blur: undefined,
        isMask: true,
      };
    }, [mask]);

    return (
      <defs>
        <filter id={filterId(renderId, mask)}>
          <feFlood flood-color="white" result="FloodResult" />
          <feComposite
            in="FloodResult"
            in2="SourceGraphic"
            operator="in"
            result="comp"
          />
        </filter>

        <clipPath className="mask-clip-path" id={clipId(renderId, mask)}>
          <polyline points={pointsStr} />
        </clipPath>

        <mask
          className="mask-shape"
          id={maskId(renderId, mask)}
          x={bx}
          y={by}
          width={bw}
          height={bh}
          data-old-x={bx}
          data-old-y={by}
          data-old-width={bw}
          data-old-height={bh}
          maskUnits="userSpaceOnUse"
        >
          <g filter={!svgText ? filterUrl(renderId, mask) : undefined}>
            <shapeWrapper shape={shape} />
          </g>
        </mask>
      </defs>
    );
  };
}
