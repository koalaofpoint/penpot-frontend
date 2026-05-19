// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from 'react';
import * as cfh from 'app/common/files/helpers';
import * as gpt from 'app/common/geom/point';
import * as gsh from 'app/common/geom/shapes';
import * as dv from 'app/main/data/viewer';
import * as st from 'app/main/store';
import { SelectionFeedback } from 'app/main/ui/inspect/selection-feedback';
import { ShapeContainer } from 'app/main/ui/shapes/shape';
import * as dom from 'app/util/dom';

function handleHoverShape(shape: any, hover: boolean) {
  return (event: React.PointerEvent) => {
    if (cfh.groupShape(shape) || cfh.rootFrame(shape)) {
      return;
    }
    dom.preventDefault(event);
    dom.stopPropagation(event);
    st.emit(dv.hoverShape(shape.id, hover));
  };
}

function selectShape(shape: any) {
  return (event: React.MouseEvent) => {
    if (cfh.groupShape(shape) || cfh.rootFrame(shape)) {
      return;
    }
    dom.stopPropagation(event);
    dom.preventDefault(event);

    if (event.shiftKey) {
      st.emit(dv.toggleSelection(shape.id));
    } else {
      st.emit(dv.selectShape(shape.id));
    }
  };
}

interface ShapeWrapperProps {
  shape: any;
  childs: any[];
  frame: any;
  renderWrapper?: boolean;
}

function ShapeWrapper({ shape, childs, frame, renderWrapper = true }: ShapeWrapperProps) {
  const isSvgRaw = shape.type === 'svg-raw';
  const isGraphicElement = isSvgRaw && svgRaw.graphicElement.has(getIn(shape, ['content', 'tag']));

  if (!renderWrapper || !isGraphicElement) {
    return (
      <ShapeContainer
        shape={shape}
        onPointerEnter={handleHoverShape(shape, true)}
        onPointerLeave={handleHoverShape(shape, false)}
        onClick={selectShape(shape)}
      >
        {/* Child components would be rendered here */}
      </ShapeContainer>
    );
  }

  return (
    <>
      {/* Child components would be rendered here */}
    </>
  );
}

function makeFrameContainer(objects: Record<string, any>) {
  return function FrameContainer({ shape, childs, ...props }: ShapeWrapperProps) {
    const translatedShape = gsh.translateToFrame(shape, props.frame);
    const childObjects = childs?.map((id: string) => objects[id]).filter(Boolean);

    return (
      <ShapeWrapper
        shape={translatedShape}
        childs={childObjects}
        frame={props.frame}
        renderWrapper
      />
    );
  };
}

function makeGroupContainer(objects: Record<string, any>) {
  return function GroupContainer({ shape, childs, ...props }: ShapeWrapperProps) {
    const childObjects = childs?.map((id: string) => objects[id]).filter(Boolean);

    return (
      <ShapeWrapper
        shape={shape}
        childs={childObjects}
        frame={props.frame}
        renderWrapper
      />
    );
  };
}

function makeBoolContainer(objects: Record<string, any>) {
  return function BoolContainer({ shape, childs, ...props }: ShapeWrapperProps) {
    const children = cfh.getChildrenIds(objects, shape.id)
      .reduce((acc, id) => {
        acc[id] = objects[id];
        return acc;
      }, {} as Record<string, any>);

    return (
      <ShapeWrapper
        shape={shape}
        childs={Object.values(children)}
        frame={props.frame}
        renderWrapper
      />
    );
  };
}

function makeSvgRawContainer(objects: Record<string, any>) {
  return function SvgRawContainer({ shape, childs, ...props }: ShapeWrapperProps) {
    const childObjects = childs?.map((id: string) => objects[id]).filter(Boolean);

    return (
      <ShapeWrapper
        shape={shape}
        childs={childObjects}
        frame={props.frame}
        renderWrapper
      />
    );
  };
}

function makeShapeContainer(objects: Record<string, any>) {
  const pathWrapper = (shape: any) => ({ shape, childs: [], frame: null });
  const textWrapper = (shape: any) => ({ shape, childs: [], frame: null });
  const rectWrapper = (shape: any) => ({ shape, childs: [], frame: null });
  const imageWrapper = (shape: any) => ({ shape, childs: [], frame: null });
  const circleWrapper = (shape: any) => ({ shape, childs: [], frame: null });

  return function ShapeContainerFactory({ shape, frame, ...props }: any) {
    const frameContainer = React.useMemo(
      () => makeFrameContainer(objects),
      [objects]
    );

    const groupContainer = React.useMemo(
      () => makeGroupContainer(objects),
      [objects]
    );

    const boolContainer = React.useMemo(
      () => makeBoolContainer(objects),
      [objects]
    );

    const svgRawContainer = React.useMemo(
      () => makeSvgRawContainer(objects),
      [objects]
    );

    if (!shape || shape.hidden) {
      return null;
    }

    const translatedShape = frame ? gsh.translateToFrame(shape, frame) : shape;

    const containerProps = { shape: translatedShape, frame };

    switch (shape.type) {
      case 'frame':
        return frameContainer(containerProps);
      case 'text':
        return textWrapper(containerProps);
      case 'rect':
        return rectWrapper(containerProps);
      case 'path':
        return pathWrapper(containerProps);
      case 'image':
        return imageWrapper(containerProps);
      case 'circle':
        return circleWrapper(containerProps);
      case 'group':
        return groupContainer(containerProps);
      case 'bool':
        return boolContainer(containerProps);
      case 'svg-raw':
        return svgRawContainer(containerProps);
      default:
        return null;
    }
  };
}

interface RenderFrameSvgProps {
  page: any;
  frame: any;
  local: any;
  size: any;
}

export function RenderFrameSvg({ page, frame, local, size }: RenderFrameSvgProps) {
  const objects = React.useMemo(() => {
    return prepareObjects(frame, size, gpt.point(0, 0), page.objects);
  }, [frame, size, page.objects]);

  const correctedFrame = objects[frame.id];
  const render = React.useMemo(
    () => makeShapeContainer(objects),
    [objects]
  );

  return (
    <svg
      id="svg-frame"
      viewBox={size.vbox}
      width={size.width}
      height={size.height}
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      {render({ shape: correctedFrame, viewBox: size.vbox })}
      <SelectionFeedback
        frame={correctedFrame}
        objects={objects}
        local={local}
        size={size}
      />
    </svg>
  );
}

function prepareObjects(frame: any, size: any, point: any, objects: Record<string, any>) {
  // Placeholder - actual implementation would prepare objects for rendering
  return objects;
}
