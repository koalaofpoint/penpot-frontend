// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from 'app/common/data';
import * as dm from 'app/common/data/macros';
import * as gsb from 'app/common/geom/shapes/bounds';
import * as mth from 'app/common/math';
import * as thc from 'app/common/thumbnails';
import * as dsh from 'app/main/data/helpers';
import * as dwt from 'app/main/data/workspace/thumbnails';
import * as refs from 'app/main/refs';
import { store } from 'app/main/store';
import * as ctx from 'app/main/ui/context';
import * as frame from 'app/main/ui/shapes/frame';
import { ShapeContainer } from 'app/main/ui/shapes/shape';
import { checkShapeProps } from 'app/main/ui/workspace/shapes/common';
import { ShapeDebug } from 'app/main/ui/workspace/shapes/debug';
import { useDynamicModifiers } from 'app/main/ui/workspace/shapes/frame/dynamic_modifiers';
import * as dbg from 'app/util/debug';
import * as dom from 'app/util/dom';
import * as th from 'app/util/thumbnails';
import * as tm from 'app/util/timers';
import * as p from 'promesa.core';
import React, { useEffect, useMemo, useRef, useState } from 'react';

const checkProps = (newProps: any, oldProps: any) => {
  return (
    newProps['thumbnail?'] === oldProps['thumbnail?'] &&
    newProps['objects'] === oldProps['objects'] &&
    checkShapeProps(newProps, oldProps)
  );
};

// Image size helper
const imageSize = (href: string): Promise<{ width: number; height: number }> => {
  return p.create((resolve) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    };
    img.src = href;
  });
};

// Check thumbnail size
const checkThumbnailSize = (
  imageNode: HTMLElement,
  bounds: any,
  fileId: string,
  pageId: string,
  frameId: string
) => {
  const href = dom.getAttribute(imageNode, 'href');
  const width = dm.getProp(bounds, 'width');
  const height = dm.getProp(bounds, 'height');
  const [fixedWidth, fixedHeight] = th.getRelativeSize(width, height);

  imageSize(href!).then(({ width, height }) => {
    if (
      !mth.close(width, fixedWidth, 5) ||
      !mth.close(height, fixedHeight, 5)
    ) {
      store.emit(dwt.updateThumbnail(fileId, pageId, frameId, 'frame', 'check-thumbnail-size'));
    }
  });
};

// Frame Shape Component
interface FrameShapeInnerProps {
  shape: any;
  childs: any[];
  ref?: React.Ref<HTMLElement>;
}

const FrameShapeInner: React.FC<FrameShapeInnerProps> = React.forwardRef(
  ({ shape, childs }, ref) => {
    const shapeId = dm.getProp(shape, 'id');
    const childsRef = useMemo(
      () => refs.childrenObjects(shapeId),
      [shapeId]
    );
    const children = childsRef;

    return (
      <ShapeContainer shape={shape} ref={ref}>
        {frame.frameShape({ shape, childs: children })}
        {process.env.NODE_ENV === 'development' && (
          <ShapeDebug shape={shape} />
        )}
      </ShapeContainer>
    );
  }
);

// Nested Frame Wrapper
interface NestedFrameWrapperProps {
  shape: any;
}

const NestedFrameWrapper: React.FC<NestedFrameWrapperProps> = ({ shape }) => {
  const objects = dsh.lookupPageObjects(store.getState());
  const frameId = dm.getProp(shape, 'id');
  const nodeRef = useRef<HTMLElement>(null);
  const modifiersRef = useMemo(
    () => refs.workspaceModifiersByFrameId(frameId),
    [frameId]
  );
  const modifiers = modifiersRef;

  useDynamicModifiers(objects, nodeRef.current, modifiers);

  return frame.frameShape({ shape, ref: nodeRef });
};

// Root Frame Wrapper
interface RootFrameWrapperProps {
  shape: any;
  thumbnail?: boolean;
  objects: Record<string, any>;
}

const RootFrameWrapper: React.FC<RootFrameWrapperProps> = ({
  shape,
  thumbnail = false,
  objects,
}) => {
  const fileId = ctx.useCurrentFileId();
  const pageId = ctx.useCurrentPageId();
  const frameId = dm.getProp(shape, 'id');

  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLElement>(null);

  const bounds = useMemo(
    () => gsb.getObjectBounds(objects, shape, { ignoreMargin: false }),
    [objects, shape]
  );

  const x = dm.getProp(bounds, 'x');
  const y = dm.getProp(bounds, 'y');
  const width = dm.getProp(bounds, 'width');
  const height = dm.getProp(bounds, 'height');

  const thumbnailUriRef = useMemo(
    () => refs.workspaceThumbnailById(thc.fmtObjectId(fileId, pageId, frameId, 'frame')),
    [fileId, pageId, frameId]
  );
  const thumbnailUri = thumbnailUriRef;

  const modifiersRef = useMemo(
    () => refs.workspaceModifiersByFrameId(frameId),
    [frameId]
  );
  const modifiers = modifiersRef;

  const hidden = shape.hidden === true;
  const contentVisible = !thumbnail || !thumbnailUri;

  const triesRef = useRef(0);
  const imposterRef = useRef<HTMLElement>(null);
  const [imposterLoaded, setImposterLoaded] = useState(false);
  const taskRef = useRef<any>(null);

  const onLoad = () => {
    setImposterLoaded(true);
  };

  const onError = () => {
    const currentTries = triesRef.current;
    const newTries = triesRef.current + 1;
    triesRef.current = newTries;
    const delayInMs = Math.pow(2, newTries) * 1000;

    const retryFn = () => {
      const imposter = imposterRef.current;
      if (imposter) {
        dom.setAttribute(imposter, 'href', thumbnailUri!);
      }
    };

    if (newTries < 8) {
      taskRef.current = tm.schedule(delayInMs, retryFn);
    }
  };

  useEffect(() => {
    if (thumbnailUri == null) {
      tm.scheduleOnIdle(() => {
        store.emit(dwt.updateThumbnail(fileId, pageId, frameId, 'frame', 'root-frame'));
      });
    }

    return () => {
      const task = taskRef.current;
      if (task) {
        d.close(task);
      }
    };
  }, []);

  useEffect(() => {
    const task = taskRef.current;
    if (task) {
      d.close(task);
    }
  }, [thumbnailUri]);

  useDynamicModifiers(objects, contentRef.current, modifiers);

  return (
    <ShapeContainer shape={shape}>
      <g
        id={`frame-container-${frameId}`}
        opacity={hidden ? 0 : undefined}
      >
        {!contentVisible && !imposterLoaded && (
          <g className="frame-placeholder">
            <rect
              x={x}
              y={y}
              width={width}
              height={height}
              fill="url(#frame-placeholder-gradient)"
            />
          </g>
        )}

        <g className="frame-imposter">
          <image
            className="thumbnail-bitmap"
            x={x}
            y={y}
            width={width}
            height={height}
            href={thumbnailUri}
            onLoad={onLoad}
            onError={onError}
            style={{
              display:
                !thumbnail || !thumbnailUri ? 'none' : undefined,
            }}
          />
          {dbg.enabled('thumbnails') && (
            <rect
              x={x + 2}
              y={y + 2}
              width={width - 4}
              height={height - 4}
              stroke="#f0f"
              strokeWidth={2}
            />
          )}
        </g>

        {contentVisible && (
          <g
            id={`frame-content-${frameId}`}
            ref={containerRef}
          >
            {frame.frameShape({ shape, ref: contentRef })}
          </g>
        )}
      </g>
      {process.env.NODE_ENV === 'development' && (
        <ShapeDebug shape={shape} />
      )}
    </ShapeContainer>
  );
};

// Export factories
export const frameShapeFactory = (shapeWrapper: any) => {
  const frameShape = frame.frameShape(shapeWrapper);

  const FrameShapeComponent: React.FC<{ shape: any; objects?: any; thumbnail?: boolean; ref?: React.Ref<HTMLElement> }> = React.forwardRef(
    ({ shape, objects, thumbnail }, ref) => {
      const shapeId = dm.getProp(shape, 'id');
      const childsRef = useMemo(
        () => refs.childrenObjects(shapeId),
        [shapeId]
      );
      const childs = childsRef;

      return (
        <ShapeContainer shape={shape} ref={ref}>
          {frameShape({ shape, childs })}
          {process.env.NODE_ENV === 'development' && (
            <ShapeDebug shape={shape} />
          )}
        </ShapeContainer>
      );
    }
  );

  return FrameShapeComponent;
};

export const nestedFrameWrapperFactory = (shapeWrapper: any) => {
  const NestedWrapper: React.FC<{ shape: any }> = ({ shape }) => {
    const objects = dsh.lookupPageObjects(store.getState());
    const frameId = dm.getProp(shape, 'id');
    const nodeRef = useRef<HTMLElement>(null);
    const modifiersRef = useMemo(
      () => refs.workspaceModifiersByFrameId(frameId),
      [frameId]
    );
    const modifiers = modifiersRef;

    useDynamicModifiers(objects, nodeRef.current, modifiers);

    return frame.frameShape({ shape, ref: nodeRef });
  };

  return NestedWrapper;
};

export const rootFrameWrapperFactory = (shapeWrapper: any) => {
  const RootWrapper: React.FC<{ shape: any; thumbnail?: boolean; objects: Record<string, any> }> = ({
    shape,
    thumbnail = false,
    objects,
  }) => {
    const fileId = ctx.useCurrentFileId();
    const pageId = ctx.useCurrentPageId();
    const frameId = dm.getProp(shape, 'id');

    const containerRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLElement>(null);

    const bounds = useMemo(
      () => gsb.getObjectBounds(objects, shape, { ignoreMargin: false }),
      [objects, shape]
    );

    const x = dm.getProp(bounds, 'x');
    const y = dm.getProp(bounds, 'y');
    const width = dm.getProp(bounds, 'width');
    const height = dm.getProp(bounds, 'height');

    const thumbnailUriRef = useMemo(
      () => refs.workspaceThumbnailById(thc.fmtObjectId(fileId, pageId, frameId, 'frame')),
      [fileId, pageId, frameId]
    );
    const thumbnailUri = thumbnailUriRef;

    const modifiersRef = useMemo(
      () => refs.workspaceModifiersByFrameId(frameId),
      [frameId]
    );
    const modifiers = modifiersRef;

    const hidden = shape.hidden === true;
    const contentVisible = !thumbnail || !thumbnailUri;

    const triesRef = useRef(0);
    const imposterRef = useRef<HTMLElement>(null);
    const [imposterLoaded, setImposterLoaded] = useState(false);
    const taskRef = useRef<any>(null);

    const onLoad = () => setImposterLoaded(true);

    const onError = () => {
      const currentTries = triesRef.current;
      const newTries = triesRef.current + 1;
      triesRef.current = newTries;
      const delayInMs = Math.pow(2, newTries) * 1000;

      const retryFn = () => {
        const imposter = imposterRef.current;
        if (imposter) {
          dom.setAttribute(imposter, 'href', thumbnailUri!);
        }
      };

      if (newTries < 8) {
        taskRef.current = tm.schedule(delayInMs, retryFn);
      }
    };

    useEffect(() => {
      if (thumbnailUri == null) {
        tm.scheduleOnIdle(() => {
          store.emit(dwt.updateThumbnail(fileId, pageId, frameId, 'frame', 'root-frame'));
        });
      }

      return () => {
        const task = taskRef.current;
        if (task) {
          d.close(task);
        }
      };
    }, []);

    useEffect(() => {
      const task = taskRef.current;
      if (task) {
        d.close(task);
      }
    }, [thumbnailUri]);

    useDynamicModifiers(objects, contentRef.current, modifiers);

    return (
      <ShapeContainer shape={shape}>
        <g
          id={`frame-container-${frameId}`}
          opacity={hidden ? 0 : undefined}
        >
          {!contentVisible && !imposterLoaded && (
            <g className="frame-placeholder">
              <rect
                x={x}
                y={y}
                width={width}
                height={height}
                fill="url(#frame-placeholder-gradient)"
              />
            </g>
          )}

          <g className="frame-imposter">
            <image
              className="thumbnail-bitmap"
              x={x}
              y={y}
              width={width}
              height={height}
              href={thumbnailUri}
              ref={imposterRef}
              onLoad={onLoad}
              onError={onError}
              style={{
                display:
                  !thumbnail || !thumbnailUri ? 'none' : undefined,
              }}
            />
            {dbg.enabled('thumbnails') && (
              <rect
                x={x + 2}
                y={y + 2}
                width={width - 4}
                height={height - 4}
                stroke="#f0f"
                strokeWidth={2}
              />
            )}
          </g>

          {contentVisible && (
            <g
              id={`frame-content-${frameId}`}
              ref={containerRef}
            >
              {frame.frameShape({ shape, ref: contentRef })}
            </g>
          )}
        </g>
        {process.env.NODE_ENV === 'development' && (
          <ShapeDebug shape={shape} />
        )}
      </ShapeContainer>
    );
  };

  return RootWrapper;
};
