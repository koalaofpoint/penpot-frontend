// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from 'app/common/data';
import * as dm from 'app/common/data/macros';
import * as cfh from 'app/common/files/helpers';
import * as gsh from 'app/common/geom/shapes';
import * as gst from 'app/common/geom/shapes/text';
import * as mth from 'app/common/math';
import * as path from 'app/common/types/path';
import * as pathBool from 'app/common/types/path/bool';
import * as pathHelpers from 'app/common/types/path/helpers';
import * as pathSubpath from 'app/common/types/path/subpath';
import * as refs from 'app/main/refs';
import * as uc from 'app/util/color';
import * as dbg from 'app/util/debug';
import * as dom from 'app/util/dom';
import * as str from 'cuerdas.core';
import React, { useMemo } from 'react';

interface DebugBoundingBoxesProps {
  shape: any;
}

const DebugBoundingBoxes: React.FC<DebugBoundingBoxesProps> = ({ shape }) => {
  const points = useMemo(() => {
    return shape.points
      .map((p: any) => `${dm.getProp(p, 'x')},${dm.getProp(p, 'y')}`)
      .join(' ');
  }, [shape.points]);

  const color = uc.randomColor();
  const sr = shape.selrect;

  return (
    <g className="debug-bounding-boxes">
      <rect
        transform={gsh.transformStr(shape)}
        x={sr.x}
        y={sr.y}
        width={sr.width}
        height={sr.height}
        fill={color}
        opacity={0.2}
      />
      {shape.points.map((p: any, i: number) => (
        <circle
          key={i}
          cx={dm.getProp(p, 'x')}
          cy={dm.getProp(p, 'y')}
          r={2}
          fill={color}
        />
      ))}
      <polygon points={points} strokeWidth={1} stroke={color} />
    </g>
  );
};

interface DebugTextBoundsProps {
  shape: any;
}

const DebugTextBounds: React.FC<DebugTextBoundsProps> = ({ shape }) => {
  const zoom = refs.selectedZoom;
  const boundingBox = gst.shapeToRect(shape);
  const ctx = document.createElement('canvas').getContext('2d');

  return (
    <g transform={gsh.transformStr(shape)}>
      <rect
        x={boundingBox.x}
        y={boundingBox.y}
        width={boundingBox.width}
        height={boundingBox.height}
        style={{
          fill: 'none',
          stroke: 'orange',
          strokeWidth: 1 / zoom,
        }}
      />
      {d.enumerate(shape.positionData).map(([index, data]: [any, any]) => {
        const { x, y, width, height } = data;
        const res = dom.measureText(ctx, data.fontSize, data.fontFamily, data.text);
        return (
          <g key={index}>
            <rect
              x={x}
              y={y - height}
              width={width}
              height={height}
              style={{ fill: 'none', stroke: 'red', strokeWidth: 1 / zoom }}
            />
            <line
              x1={mth.round(x)}
              y1={mth.round(y - height)}
              x2={mth.round(x + width)}
              y2={mth.round(y - height)}
              style={{ stroke: 'blue', strokeWidth: 1 / zoom }}
            />
            <line
              x1={x}
              y1={y - res.descent}
              x2={x + width}
              y2={y - res.descent}
              style={{ stroke: 'green', strokeWidth: 2 / zoom }}
            />
          </g>
        );
      })}
    </g>
  );
};

interface DebugBoolShapeProps {
  shape: any;
}

const DebugBoolShape: React.FC<DebugBoolShapeProps> = ({ shape }) => {
  const objects = refs.workspacePageObjects;
  const zoom = refs.selectedZoom;
  const radius = 3 / zoom;

  const c1 = path.convertToPath(objects[shape.shapes[0]], objects);
  const c2 = path.convertToPath(objects[shape.shapes[1]], objects);

  const contentA = c1.content;
  const contentB = c2.content;
  const boolType = shape.boolType;

  const shouldReverse =
    boolType !== 'union' &&
    pathSubpath.clockwise(contentB) === pathSubpath.clockwise(contentA);

  let contentAMod = pathBool.closePaths(pathBool.addPrevious(contentA));
  let contentBMod = pathBool.closePaths(contentB);

  if (shouldReverse) {
    contentBMod = pathSubpath.reverseContent(contentBMod);
  }
  contentBMod = pathBool.addPrevious(contentBMod);

  const srA = path.calcSelrect(contentAMod);
  const srB = path.calcSelrect(contentBMod);

  const [contentASplit, contentBSplit] = pathBool.contentIntersectSplit(
    contentAMod,
    contentBMod,
    srA,
    srB
  );

  return (
    <>
      {d.enumerate(contentASplit).map(([i, segment]: [any, any]) => {
        const p1 = segment.prev;
        const p2 = pathHelpers.segmentToPoint(segment);

        let hp = null;
        if (segment.command === 'line-to') {
          hp = pathHelpers.lineValues(pathHelpers.commandToLine(segment), 0.5);
        } else if (segment.command === 'curve-to') {
          hp = pathHelpers.curveValues(pathHelpers.commandToBezier(segment), 0.5);
        }

        return (
          <>
            {p1 && (
              <circle key={`c11-${i}`} cx={p1.x} cy={p1.y} r={radius} fill="red" />
            )}
            <circle key={`c12-${i}`} cx={p2.x} cy={p2.y} r={radius} fill="red" />
            {hp && (
              <circle key={`c13-${i}`} cx={hp.x} cy={hp.y} r={radius} fill="orange" />
            )}
          </>
        );
      })}
      {d.enumerate(contentBSplit).map(([i, segment]: [any, any]) => {
        const p1 = segment.prev;
        const p2 = pathHelpers.segmentToPoint(segment);

        let hp = null;
        if (segment.command === 'line-to') {
          hp = pathHelpers.lineValues(pathHelpers.commandToLine(segment), 0.5);
        } else if (segment.command === 'curve-to') {
          hp = pathHelpers.curveValues(pathHelpers.commandToBezier(segment), 0.5);
        }

        return (
          <>
            {p1 && (
              <circle key={`c21-${i}`} cx={p1.x} cy={p1.y} r={radius} fill="blue" />
            )}
            <circle key={`c22-${i}`} cx={p2.x} cy={p2.y} r={radius} fill="blue" />
            {hp && (
              <circle key={`c23-${i}`} cx={hp.x} cy={hp.y} r={radius} fill="green" />
            )}
          </>
        );
      })}
    </>
  );
};

interface ShapeDebugProps {
  shape: any;
}

export const ShapeDebug: React.FC<ShapeDebugProps> = ({ shape }) => {
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <>
      {dbg.enabled('bounding-boxes') && (
        <DebugBoundingBoxes shape={shape} />
      )}
      {dbg.enabled('bool-shapes') && cfh.boolShape(shape) && (
        <DebugBoolShape shape={shape} />
      )}
      {dbg.enabled('text-outline') &&
        cfh.textShape(shape) &&
        shape.positionData?.length > 0 && (
          <DebugTextBounds shape={shape} />
        )}
    </>
  );
};
