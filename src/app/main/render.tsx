// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as rds from 'react-dom/server';
import * as d from '../common/data/index.js';
import * as dm from '../common/data/macros.js';
import * as cfh from '../common/files/helpers.js';
import * as gpt from '../common/geom/point.js';
import * as grc from '../common/geom/rect.js';
import * as gsh from '../common/geom/shapes/index.js';
import * as gsb from '../common/geom/shapes/bounds.js';
import * as l from '../common/logging.js';
import * as mth from '../common/math/index.js';
import * as clr from '../common/types/color.js';
import * as ctkl from '../common/types/components-list.js';
import * as ctf from '../common/types/file.js';
import * as ctm from '../common/types/modifiers.js';
import * as ctst from '../common/types/shape-tree.js';
import * as ctl from '../common/types/shape/layout.js';
import * as cfg from '../config.js';
import * as fonts from './fonts.js';
import * as muc from './ui/context/index.js';
import * as bool from './ui/shapes/bool/index.js';
import * as circle from './ui/shapes/circle/index.js';
import * as embed from './ui/shapes/embed/index.js';
import * as exportShape from './ui/shapes/export/index.js';
import * as frame from './ui/shapes/frame/index.js';
import gridLayoutViewer from './ui/shapes/grid-layout-viewer.js';
import * as group from './ui/shapes/group/index.js';
import * as image from './ui/shapes/image/index.js';
import * as path from './ui/shapes/path/index.js';
import * as rect from './ui/shapes/rect/index.js';
import * as shapeContainer from './ui/shapes/shape/index.js';
import * as svgRaw from './ui/shapes/svg-raw/index.js';
import * as text from './ui/shapes/text/index.js';
import * as ff from './ui/shapes/text/fontfaces/index.js';
import * as dom from '../util/dom/index.js';
import * as http from '../util/http/index.js';
import * as ust from '../util/strings/index.js';
import * as th from '../util/thumbnails/index.js';
import * as ts from '../util/timers/index.js';
import { Observable } from '../vendor/beicon/v2/index.js';
import { union } from '../vendor/clojure.set/index.js';
import { str as strLib } from '../vendor/cuerdas/index.js';
import { component } from '../vendor/rumext/v2/index.js';

const VIEWBOX_DECIMAL_PRECISION = 3;
const DEFAULT_COLOR = clr.canvas;

export const Background = ({ vbox, color }: { vbox: any; color: any }) => {
  return <rect
    x={vbox.x}
    y={vbox.y}
    width={vbox.width}
    height={vbox.height}
    fill={color}
  />;
};

export const calculateDimensions = (objects: any, aspectRatio: number) => {
  const rootObjects = ctst.getRootObjects(objects);

  if (rootObjects.length === 0) {
    // Empty page, we create an arbitrary rect for the thumbnail
    const rect = grc.makeRect({ x: 0, y: 0, width: 100, height: 100 });
    const positioned = grc.updateRect(rect, 'position');
    return grc.fixAspectRatio(positioned, aspectRatio);
  }

  const bounds = rootObjects
    .map(obj => gsb.getObjectBounds(objects, obj))
    .reduce(grc.joinRects);

  const fixed = {
    ...bounds,
    x: mth.finite(bounds.x, 0),
    y: mth.finite(bounds.y, 0),
    width: mth.finite(bounds.width, 100000),
    height: mth.finite(bounds.height, 100000)
  };

  const positioned = grc.updateRect(fixed, 'position');
  return grc.fixAspectRatio(positioned, aspectRatio);
};

// Shape wrapper factory function
let shapeWrapperFactory: (objects: any) => any;

const frameWrapperFactory = (objects: any) => {
  const shapeWrapper = shapeWrapperFactory(objects);
  const frameShape = frame.frameShape(shapeWrapper);

  return component('frame-wrapper', {}, ({ shape }) => {
    const renderThumbnails = useContext(muc.renderThumbnails);
    const children = mapv((objects as any)[shape.shapes], (_, id) => id);

    if (renderThumbnails && shape.thumbnailId) {
      return frame.frameThumbnail({ shape, bounds: shape.childrenBounds });
    }

    return frameShape({ shape, children });
  });
};

const groupWrapperFactory = (objects: any) => {
  const shapeWrapper = shapeWrapperFactory(objects);
  const groupShape = group.groupShape(shapeWrapper);

  return component('group-wrapper', {}, ({ shape }) => {
    const children = ((objects as any)[shape.shapes] || []).map((id: string) => (objects as any)[id]);
    return groupShape({ shape, isChildSelected: true, children });
  });
};

const boolWrapperFactory = (objects: any) => {
  const shapeWrapper = shapeWrapperFactory(objects);
  const boolShape = bool.boolShape(shapeWrapper);

  return component('bool-wrapper', {}, ({ shape }) => {
    const children = useMemo(() => {
      const childIds = cfh.getChildrenIds(objects, shape.id);
      return Object.fromEntries(
        childIds.map(id => [id, (objects as any)[id]])
      );
    }, [shape.id, objects]);

    return boolShape({ shape, children });
  });
};

const svgRawWrapperFactory = (objects: any) => {
  const shapeWrapper = shapeWrapperFactory(objects);
  const svgRawShape = svgRaw.svgRawShape(shapeWrapper);

  return component('svg-raw-wrapper', {}, ({ shape }) => {
    const children = ((objects as any)[shape.shapes] || []).map((id: string) => (objects as any)[id]);

    if (shape.content &&
        // tspan shouldn't be contained in a group or have svg defs
        shape.content.tag !== 'tspan' &&
        (shape.content.tag === 'svg' || shape.svgAttrs)) {
      return shapeContainer.shapeContainer({ shape },
        svgRawShape({ shape, children })
      );
    }

    return svgRawShape({ shape, children });
  });
};

shapeWrapperFactory = (objects: any) => {
  return component('shape-wrapper', {}, ({ frame, shape }) => {
    const groupWrapper = useMemo(() => groupWrapperFactory(objects), [objects]);
    const svgRawWrapper = useMemo(() => svgRawWrapperFactory(objects), [objects]);
    const boolWrapper = useMemo(() => boolWrapperFactory(objects), [objects]);
    const frameWrapper = useMemo(() => frameWrapperFactory(objects), [objects]);

    if (!shape) return null;

    const opts = { shape };
    const isSvgRaw = shape.type === 'svg-raw';

    if (!isSvgRaw) {
      return shapeContainer.shapeContainer({ shape },
        (() => {
          switch (shape.type) {
            case 'text':
              return text.textShape(opts);
            case 'rect':
              return rect.rectShape(opts);
            case 'path':
              return path.pathShape(opts);
            case 'image':
              return image.imageShape(opts);
            case 'circle':
              return circle.circleShape(opts);
            case 'frame':
              return frameWrapper({ shape });
            case 'group':
              return groupWrapper({ shape, frame });
            case 'bool':
              return boolWrapper({ shape, frame });
            default:
              return null;
          }
        })()
      );
    }

    // Don't wrap svg elements inside a <g> otherwise some can break
    return svgRawWrapper({ shape, frame });
  });
};

export const formatViewbox = (rect: { x?: number; y?: number; width?: number; height?: number }) => {
  const { x = 0, y = 0, width = 100, height = 100 } = rect;
  return [x, y, width, height]
    .map(num => ust.formatPrecision(num, VIEWBOX_DECIMAL_PRECISION))
    .join(' ');
};

export const adaptRootFrame = (objects: any, object: any) => {
  const shapes = cfh.getImmediateChildren(objects);
  const srect = gsh.shapesToRect(shapes);
  return {
    ...object,
    ...srect,
    fillColor: '#f0f0f0'
  };
};

export const adaptObjectsForShape = (objects: any, objectId: string) => {
  let object = objects[objectId];

  if (cfh.isRoot(object)) {
    object = adaptRootFrame(objects, object);
  }

  // Replace the previous object with the new one
  objects = { ...objects, [objectId]: object };

  const vector = gpt.point(object.x, object.y).negate();
  const modIds = [objectId, ...cfh.getChildrenIds(objects, objectId)];

  const updateFn = (acc: any, id: string) =>
    ({ ...acc, [id]: gsh.transformShape(objects[id], ctm.moveModifiers(vector)) });

  return modIds.reduce(updateFn, objects);
};

export const PageSvg = component('page-svg', { wrap: [memo] }, (props) => {
  const {
    data,
    useThumbnails = false,
    embed = false,
    includeMetadata = false,
    aspectRatio
  } = props;

  const objects = data.objects;
  const shapes = cfh.getImmediateChildren(objects);
  const dim = calculateDimensions(objects, aspectRatio);
  const vbox = formatViewbox(dim);
  const bgColor = data.background || DEFAULT_COLOR;

  const shapeWrapper = useMemo(() => shapeWrapperFactory(objects), [objects]);

  return (
    <muc.renderThumbnails.Provider value={useThumbnails}>
      <muc.embed.Context.Provider value={embed}>
        <exportShape.includeMetadataCtx.Provider value={includeMetadata}>
          <svg
            viewBox={vbox}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns:penpot={includeMetadata ? 'https://penpot.app/xmlns' : undefined}
            style={{ width: '100%', height: '100%', background: bgColor }}
            fill="none"
          >
            {includeMetadata && (
              <exportShape.exportPage page={data} />
            )}

            {(() => {
              const filteredShapes = shapes
                .filter(shape => !cfh.isFrameShape(shape))
                .flatMap(shape => cfh.getChildrenWithSelf(objects, shape.id));
              const fonts = ff.shapesToFonts(filteredShapes);

              return <ff.fontfacesStyle fonts={fonts} />;
            })()}

            {shapes.map(item => (
              <shapeWrapper key={item.id} shape={item} />
            ))}
          </svg>
        </exportShape.includeMetadataCtx.Provider>
      </muc.embed.Context.Provider>
    </muc.renderThumbnails.Provider>
  );
});

export const FrameImposter = component('frame-imposter', { wrapProps: false }, (props) => {
  const { objects, frame, vbox, x, y, width, height, background } = props;
  const shapeWrapper = shapeWrapperFactory(objects);

  return (
    <muc.renderThumbnails.Provider value={false}>
      <svg
        viewBox={vbox}
        width={ust.formatPrecision(width, VIEWBOX_DECIMAL_PRECISION)}
        height={ust.formatPrecision(height, VIEWBOX_DECIMAL_PRECISION)}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="none"
      >
        {background && (
          <rect x={x} y={y} width={width} height={height} fill={background} />
        )}
        <shapeWrapper shape={frame} />
      </svg>
    </muc.renderThumbnails.Provider>
  );
});

export const FrameSvg = component('frame-svg', { wrap: [memo] }, (props) => {
  const {
    objects,
    frame,
    zoom = 1,
    useThumbnails = false,
    aspectRatio,
    backgroundColor
  } = props;

  const frameId = frame.id;
  const bgColor = backgroundColor || DEFAULT_COLOR;
  const includeMetadata = useContext(exportShape.includeMetadataCtx);

  const bounds = gsb.getObjectBounds(objects, frame);
  const aspectFixed = grc.fixAspectRatio(bounds, aspectRatio);

  // Bounds without shadows/blur will be the bounds of the thumbnail
  const bounds2 = gsb.getObjectBounds(objects, { ...frame, shadow: undefined, blur: undefined });

  const deltaBounds = gpt.point(bounds.x, bounds.y);
  const vector = deltaBounds.negate();

  const childIds = cfh.getChildrenIds(objects, frameId);

  const memoObjects = useMemo(() => {
    const updateFn = (acc: any, id: string) =>
      ({ ...acc, [id]: gsh.transformShape(objects[id], ctm.moveModifiers(vector)) });
    return [frameId, ...childIds].reduce(updateFn, {});
  }, [frameId, objects, vector]);

  const memoFrame = useMemo(() =>
    gsh.transformShape(frame, ctm.moveModifiers(vector))
  , [vector]);

  const finalFrame = (() => {
    let frame = memoFrame;

    if (bounds && !frame.childrenBounds) {
      frame = { ...frame, childrenBounds: bounds2 };
    }

    return {
      ...frame,
      childrenBounds: {
        ...frame.childrenBounds,
        x: frame.childrenBounds.x - deltaBounds.x,
        y: frame.childrenBounds.y - deltaBounds.y
      }
    };
  })();

  const shapeWrapper = useMemo(() => shapeWrapperFactory(memoObjects), [memoObjects]);

  const width = (bounds.width || 0) * zoom;
  const height = (bounds.height || 0) * zoom;
  const viewBox = formatViewbox({ width: bounds.width || 0, height: bounds.height || 0 });

  return (
    <muc.renderThumbnails.Provider value={useThumbnails}>
      <svg
        viewBox={viewBox}
        width={ust.formatPrecision(width, VIEWBOX_DECIMAL_PRECISION)}
        height={ust.formatPrecision(height, VIEWBOX_DECIMAL_PRECISION)}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlns:penpot={includeMetadata ? 'https://penpot.app/xmlns' : undefined}
        style={{ background: bgColor }}
        fill="none"
      >
        <shapeWrapper shape={finalFrame} />
      </svg>
    </muc.renderThumbnails.Provider>
  );
});

export const EmptyGrids = component('empty-grids', { wrapProps: false }, (props) => {
  const { rootShapeId, objects } = props;

  const emptyGrids = (() => {
    const allIds = [rootShapeId, ...cfh.getChildrenIds(objects, rootShapeId)];
    return allIds
      .filter(id => ctl.isGridLayout(objects, id))
      .map(id => objects[id])
      .filter(grid => !grid.shapes || grid.shapes.length === 0);
  })();

  return emptyGrids.map(grid => (
    <gridLayoutViewer key={grid.id} shape={grid} objects={objects} />
  ));
});

export const ComponentSvg = component('component-svg', {
  wrap: [memo, deferred(ts.idleThenRaf)]
}, (props) => {
  const {
    objects,
    rootShape,
    showGrids = false,
    isHidden = false,
    zoom = 1,
    className
  } = props;

  if (!rootShape) return null;

  const rootShapeId = rootShape.id;
  const includeMetadata = useContext(exportShape.includeMetadataCtx);

  const vector = useMemo(() =>
    gpt.point(rootShape.x, rootShape.y).negate()
  , [rootShape.x, rootShape.y]);

  const memoObjects = useMemo(() => {
    const childIds = [rootShapeId, ...cfh.getChildrenIds(objects, rootShapeId)];
    const updateFn = (acc: any, id: string) =>
      ({ ...acc, [id]: gsh.transformShape(objects[id], ctm.moveModifiers(vector)) });
    return childIds.reduce(updateFn, {});
  }, [vector, objects, rootShapeId]);

  const rootShapeData = memoObjects[rootShapeId];
  const width = (rootShapeData.width || 0) * zoom;
  const height = (rootShapeData.height || 0) * zoom;
  const viewBox = formatViewbox({
    width: rootShapeData.width || 0,
    height: rootShapeData.height || 0
  });

  const rootShapeWrapper = useMemo(() => {
    switch (rootShape.type) {
      case 'group':
        return groupWrapperFactory(memoObjects);
      case 'frame':
        return frameWrapperFactory(memoObjects);
      default:
        return null;
    }
  }, [memoObjects, rootShape]);

  return (
    <svg
      viewBox={viewBox}
      width={ust.formatPrecision(width, VIEWBOX_DECIMAL_PRECISION)}
      height={ust.formatPrecision(height, VIEWBOX_DECIMAL_PRECISION)}
      version="1.1"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns:penpot={includeMetadata ? 'https://penpot.app/xmlns' : undefined}
      fill="none"
    >
      {!isHidden && (
        <>
          <shapeContainer.shapeContainer shape={rootShape}>
            <muc.isComponent.Provider value={true}>
              <rootShapeWrapper shape={rootShape} viewBox={viewBox} />
            </muc.isComponent.Provider>
          </shapeContainer.shapeContainer>

          {showGrids && (
            <EmptyGrids rootShapeId={rootShapeId} objects={memoObjects} />
          )}
        </>
      )}
    </svg>
  );
});

export const ComponentSvgThumbnail = component('component-svg-thumbnail', {
  wrap: [memo, deferred(ts.idleThenRaf)]
}, (props) => {
  const {
    thumbnailUri,
    onError,
    showGrids = false,
    className,
    objects,
    rootShape,
    zoom = 1
  } = props;

  if (!rootShape) return null;

  const rootShapeId = rootShape.id;

  const vector = useMemo(() =>
    gpt.point(rootShape.x, rootShape.y).negate()
  , [rootShape.x, rootShape.y]);

  const memoObjects = useMemo(() => {
    const childIds = [rootShapeId, ...cfh.getChildrenIds(objects, rootShapeId)];
    const updateFn = (acc: any, id: string) =>
      ({ ...acc, [id]: gsh.transformShape(objects[id], ctm.moveModifiers(vector)) });
    return childIds.reduce(updateFn, {});
  }, [vector, objects, rootShapeId]);

  const rootShapeData = memoObjects[rootShapeId];
  const width = rootShapeData.width || 0;
  const height = rootShapeData.height || 0;
  const widthZoom = width * zoom;
  const heightZoom = height * zoom;
  const viewBox = formatViewbox({ width, height });

  return (
    <svg
      viewBox={viewBox}
      width={ust.formatPrecision(widthZoom, VIEWBOX_DECIMAL_PRECISION)}
      height={ust.formatPrecision(heightZoom, VIEWBOX_DECIMAL_PRECISION)}
      version="1.1"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="none"
    >
      <image
        x={0}
        y={0}
        width={width}
        height={height}
        href={thumbnailUri}
        onError={onError}
        loading="lazy"
        decoding="async"
      />

      {showGrids && (
        <EmptyGrids rootShapeId={rootShapeId} objects={memoObjects} />
      )}
    </svg>
  );
});

export const ObjectSvg = component('object-svg', { wrap: [memo] }, (props) => {
  const { objects, objectId, embed = false, skipChildren = false } = props;

  let object = objects[objectId];

  if (object?.hideFillOnExport) {
    object = { ...object, fills: [] };
  }

  if (skipChildren) {
    object = { ...object, shapes: [] };
  }

  const bounds = gsb.getObjectBounds(objects, object, { ignoreMargin: false });
  const viewBox = formatViewbox(bounds);
  const fonts = ff.shapeToFonts(object, objects);

  const shapeWrapper = useMemo(() => shapeWrapperFactory(objects), [objects]);

  return (
    <exportShape.includeMetadataCtx.Provider value={false}>
      <muc.embed.Context.Provider value={embed}>
        <svg
          id={`screenshot-${objectId}`}
          viewBox={viewBox}
          width={ust.formatPrecision(bounds.width, VIEWBOX_DECIMAL_PRECISION)}
          height={ust.formatPrecision(bounds.height, VIEWBOX_DECIMAL_PRECISION)}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{ WebkitPrintColorAdjust: 'exact' }}
          fill="none"
        >
          <ff.fontfacesStyle fonts={fonts} />
          <shapeWrapper shape={object} />
        </svg>
      </muc.embed.Context.Provider>
    </exportShape.includeMetadataCtx.Provider>
  );
});

// SPRITES (DEBUG)
export const ComponentSymbol = ({ component }: { component: any }) => {
  const { name, path } = component;
  const rootId = component.mainInstanceId || component.id;
  const origRoot = component.objects[rootId];
  const objects = adaptObjectsForShape(component.objects, rootId);
  const rootShape = objects[rootId];
  const selRect = rootShape.selrect;

  const mainInstanceId = component.mainInstanceId;
  const mainInstancePage = component.mainInstancePage;
  const mainInstanceX = component.deleted ? origRoot.x : undefined;
  const mainInstanceY = component.deleted ? origRoot.y : undefined;
  const mainInstanceParent = component.deleted ? origRoot.parentId : undefined;
  const mainInstanceFrame = component.deleted ? origRoot.frameId : undefined;

  const viewBox = formatViewbox({
    width: selRect.width,
    height: selRect.height
  });

  const groupWrapper = useMemo(() => groupWrapperFactory(objects), [objects]);
  const frameWrapper = useMemo(() => frameWrapperFactory(objects), [objects]);

  if (!rootShape) return null;

  return (
    <symbol
      id={String(component.id)}
      viewBox={viewBox}
      penpot:path={path}
      penpot:main-instance-id={mainInstanceId}
      penpot:main-instance-page={mainInstancePage}
      penpot:main-instance-x={mainInstanceX}
      penpot:main-instance-y={mainInstanceY}
      penpot:main-instance-parent={mainInstanceParent}
      penpot:main-instance-frame={mainInstanceFrame}
    >
      <title>{name}</title>
      <shapeContainer.shapeContainer shape={rootShape}>
        {rootShape.type === 'group' && groupWrapper({ shape: rootShape, viewBox })}
        {rootShape.type === 'frame' && frameWrapper({ shape: rootShape, viewBox })}
      </shapeContainer.shapeContainer>
    </symbol>
  );
};

export const ComponentsSvg = component('components-svg', { wrapProps: false }, (props) => {
  const { data, children, embed, includeMetadata, deleted } = props;

  const components = !deleted ?
    ctkl.componentsSeq(data) :
    ctkl.deletedComponentsSeq(data);

  return (
    <muc.embed.Context.Provider value={embed}>
      <exportShape.includeMetadataCtx.Provider value={includeMetadata}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlns:penpot={includeMetadata ? 'https://penpot.app/xmlns' : undefined}
          style={{ display: children ? undefined : 'none' }}
          fill="none"
        >
          <defs>
            {components.map(component => {
              const loaded = ctf.loadComponentObjects(data, component);
              return <ComponentSymbol key={String(component.id)} component={loaded} />;
            })}
          </defs>

          {children}
        </svg>
      </exportShape.includeMetadataCtx.Provider>
    </muc.embed.Context.Provider>
  );
});

// RENDER FOR DOWNLOAD (wrongly called exportation)
export const getImageData = (shape: any) => {
  if (shape.type === 'image') {
    return [shape.metadata];
  }

  if (shape.fillImage) {
    return [shape.fillImage];
  }

  return [];
};

export const populateImagesCache = (objects: any) => {
  const images = Object.values(objects)
    .flatMap(getImageData);

  return Observable.from(images)
    .map(cfg.resolveFileMedia)
    .mergeMap(http.fetchDataUri);
};

export const populateFontsCache = (objects: any) => {
  const texts = Object.values(objects)
    .filter(shape => shape.type === 'text')
    .map(shape => shape.content);

  return Observable.from(texts)
    .map(fonts.getContentFonts)
    .reduce(union, new Set())
    .mergeMap(identity)
    .mergeMap(fonts.fetchFontCss)
    .mergeMap(fonts.extractFontfaceUrls)
    .mergeMap(http.fetchDataUri);
};

export const renderPage = (data: any) => {
  return Observable.concat(
    Observable.merge(
      populateImagesCache(data.objects),
      populateFontsCache(data.objects)
    ).ignoreElements(),

    Observable.of(data)
      .map(data => {
        const elem = component(PageSvg, { data, embed: true, includeMetadata: true });
        return rds.renderToStaticMarkup(elem);
      })
  );
};

export const renderComponents = (data: any, deleted: boolean) => {
  const components = !deleted ?
    ctkl.componentsSeq(data) :
    ctkl.deletedComponentsSeq(data);

  const objects = components
    .map(component => ctf.loadComponentObjects(data, component))
    .map(comp => comp.objects)
    .reduce((acc, obj) => ({ ...acc, ...obj }), {});

  return Observable.concat(
    Observable.merge(
      populateImagesCache(objects),
      populateFontsCache(objects)
    ).ignoreElements(),

    Observable.of(data)
      .map(data => {
        const elem = component(ComponentsSvg, {
          data,
          embed: true,
          includeMetadata: true,
          deleted
        });
        return rds.renderToStaticMarkup(elem);
      })
  );
};

export const renderFrame = (objects: any, shape: any, objectId: string, options?: any) => {
  if (!shape) {
    l.warn('imposter shape is nil');
    return Observable.empty();
  }

  const fonts = ff.shapeToFonts(shape, objects);
  const bounds = gsb.getObjectBounds(objects, shape, { ignoreMargin: false });

  const background = String(objectId).endsWith('component')
    ? (options?.background || dom.getCssVariable('--assets-component-background-color') || '#fff')
    : undefined;

  const x = bounds.x;
  const y = bounds.y;
  const width = bounds.width;
  const height = bounds.height;
  const viewBox = strLib.ffmt('% % % %', x, y, width, height);

  const [fixedWidth, fixedHeight] = th.getRelativeSize(width, height);
  const [componentWidth, componentHeight] = th.getProportionalSize(width, height, 140, 140);

  // Temporarily override public-uri for rasterizer
  const originalPublicUri = cfg.publicUri;
  cfg.publicUri = cfg.rasterizerUri;

  const data = rds.renderToStaticMarkup(
    component(FrameImposter, {
      objects,
      frame: shape,
      viewBox,
      background,
      x,
      y,
      width,
      height
    })
  );

  cfg.publicUri = originalPublicUri;

  const isComponent = String(objectId).endsWith('/component');

  return fonts.renderFontStylesCached(fonts)
    .catch(cause => {
      l.err('unexpected error on rendering imposter', { cause });
      return Observable.empty();
    })
    .map(styles => ({
      id: objectId,
      data,
      width: isComponent ? componentWidth : fixedWidth,
      height: isComponent ? componentHeight : fixedHeight,
      styles
    }));
};