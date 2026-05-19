import { dm} from '@app/common/data.macros';
import * as cfh from '@app/common/files.helpers';
import * as gsh from '@app/common/geom.shapes';
import * as gsb from '@app/common/geom.shapes.bounds';
import * as ctl from '@app/common.types.shape.layout';
import * as cf from '@app/config';
import * as muc from '@app/main/ui/context';
import * as attrs from '@app/main/ui/shapes/attrs';
import { ShapeFills, ShapeStrokes } from '@app/main/ui/shapes/custom-stroke';
import * as filters from '@app/main/ui/shapes/filters';
import * as dbg from '@app/util/debug';
import * as obj from '@app/util/object';
import React, { useMemo } from 'react';

function frameClipId(shape: any, renderId: string): string {
  return dm.str('frame-clip-', dm.getProp(shape, 'id'), '-', renderId);
}

function frameClipUrl(shape: any, renderId: string): string {
  return dm.str('url(#', frameClipId(shape, renderId), ')');
}

interface FrameClipDefProps {
  shape: any;
  renderId: string;
}

function FrameClipDef(props: FrameClipDefProps) {
  const { shape, renderId } = props;

  if (!cfh.frameShape(shape) || shape.showContent) {
    return null;
  }

  const x = dm.getProp(shape, 'x');
  const y = dm.getProp(shape, 'y');
  const w = dm.getProp(shape, 'width');
  const h = dm.getProp(shape, 'height');
  const t = gsh.transformStr(shape);

  const frameProps = useMemo(() => {
    const base: Record<string, any> = {};
    attrs.addBorderProps(base, shape);
    obj.merge(base, { x, y, width: w, height: h, transform: t });
    return base;
  }, [shape, x, y, w, h, t]);

  const path = (frameProps as any).d;

  return (
    <clipPath
      id={frameClipId(shape, renderId)}
      className="frame-clip frame-clip-def"
    >
      {path ? <path {...frameProps} /> : <rect {...frameProps} />}
    </clipPath>
  );
}

interface FrameContainerProps {
  shape: any;
  children?: React.ReactNode;
}

function FrameContainer(props: FrameContainerProps) {
  const { shape, children } = props;

  const renderId = React.useContext(muc.renderId);

  const filterIdBlur = dm.str('filter-blur-', renderId);
  const filterIdShadows = dm.str('filter-shadow-', renderId);
  const filterStrBlur = filters.filterStr(
    filterIdBlur,
    Object.fromEntries(
      Object.entries(shape).filter(([k]) => k !== 'shadow')
    ) as any
  );
  const filterStrShadows = filters.filterStr(
    filterIdShadows,
    Object.fromEntries(
      Object.entries(shape).filter(([k]) => k !== 'blur')
    ) as any
  );

  const x = dm.getProp(shape, 'x');
  const y = dm.getProp(shape, 'y');
  const w = dm.getProp(shape, 'width');
  const h = dm.getProp(shape, 'height');
  const opacity = dm.getProp(shape, 'opacity');
  const transform = gsh.transformStr(shape);

  const showContent = shape.showContent;

  const containerProps = useMemo(() => {
    const base: Record<string, any> = {};
    attrs.addBorderProps(base, shape);
    obj.merge(base, {
      x,
      y,
      width: w,
      height: h,
      transform,
      className: 'frame-background',
    });
    return base;
  }, [shape, x, y, w, h, transform]);

  const path = (containerProps as any).d;

  return (
    <g className="frame-container-wrapper" opacity={opacity}>
      <g className="frame-container-blur" filter={filterStrBlur}>
        <defs>
          <filters.Filters
            shape={Object.fromEntries(
              Object.entries(shape).filter(([k]) => k !== 'blur')
            ) as any}
            filterId={filterIdShadows}
          />
          <filters.Filters
            shape={{ ...shape, shadow: [] }}
            filterId={filterIdBlur}
          />
        </defs>

        <g
          className="frame-container-shadows"
          filter={filterStrShadows}
        >
          <g
            clipPath={!showContent ? frameClipUrl(shape, renderId) : undefined}
            fill="none"
          >
            <ShapeFills shape={shape}>
              {path ? <path {...containerProps} /> : <rect {...containerProps} />}
            </ShapeFills>
            {children}
          </g>
        </g>

        <ShapeStrokes shape={shape}>
          {path ? <path {...containerProps} /> : <rect {...containerProps} />}
        </ShapeStrokes>
      </g>
    </g>
  );
}

interface FrameThumbnailImageProps {
  shape: any;
  bounds?: any;
}

function FrameThumbnailImage(props: FrameThumbnailImageProps) {
  const { shape, bounds: providedBounds } = props;

  const shapeId = dm.getProp(shape, 'id');
  const points = dm.getProp(shape, 'points');

  const bounds = useMemo(() => {
    return providedBounds ?? gsb.getFrameBounds(shape);
  }, [shape, providedBounds, points]);

  const thumb = cf.resolveMedia(shape.thumbnailId);

  const debug = dbg.enabled('thumbnails');
  const safari = cf.checkBrowser('safari');

  const bx = bounds.x;
  const by = bounds.y;
  const bh = bounds.height;
  const bw = bounds.width;

  return (
    <>
      <image
        className="frame-thumbnail"
        id={dm.str('thumbnail-', shapeId)}
        href={thumb}
        x={bx}
        y={by}
        width={bw}
        height={bh}
        decoding="async"
        style={{
          filter: safari || !debug ? undefined : 'sepia(1)',
        }}
      />

      {safari && debug && (
        <rect
          x={bx + 4}
          y={by + 4}
          width={bw - 8}
          height={bh - 8}
          stroke="red"
          strokeWidth={2}
        />
      )}
    </>
  );
}

interface FrameThumbnailProps {
  shape: any;
}

function FrameThumbnail(props: FrameThumbnailProps) {
  const { shape } = props;

  if (!shape.thumbnailId) {
    return null;
  }

  return (
    <FrameContainer shape={shape}>
      <FrameThumbnailImage shape={shape} />
    </FrameContainer>
  );
}

export function frameShape(shapeWrapper: React.ComponentType<any>) {
  return function FrameShape(props: { shape: any; childs: any[] }) {
    const { shape, childs } = props;

    const reverse = ctl.flexLayout(shape) && ctl.reverse(shape);

    const sortedChilds = ctl.anyLayout(shape)
      ? ctl.sortLayoutChildrenByZIndex(childs, reverse)
      : childs;

    return (
      <FrameContainer shape={shape}>
        <g className="frame-children">
          {sortedChilds.map((item: any) => {
            const id = dm.getProp(item, 'id');
            if (id == null) return null;
            return (
              <shapeWrapper
                key={dm.str(id)}
                shape={item}
              />
            );
          })}
        </g>
      </FrameContainer>
    );
  };
}
