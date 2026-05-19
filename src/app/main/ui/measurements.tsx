// This Source Code Form is subject to terms of Mozilla Public
// License, v. 2.0. If a copy of MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { gpt } from '../../common/geom/point';
// import { grc } from '../../common/geom/rect';
// import { gsh } from '../../common/geom/shapes';
// import { mth } from '../../common/math';
// import { fmt } from './formats';
// import { ZERO_UUID } from '../../common/uuid';

// ------------------------------------------------
// CONSTANTS
// ------------------------------------------------

const FONT_SIZE = 11;
const SELECTION_RECT_WIDTH = 1;

const SELECT_COLOR = 'var(--color-accent-tertiary)';
const SELECT_GUIDE_WIDTH = 1;
const SELECT_GUIDE_DASHARRAY = 5;

const HOVER_COLOR = 'var(--color-accent-quaternary)';

const SIZE_DISPLAY_COLOR = 'var(--app-white)';
const SIZE_DISPLAY_OPACITY = 0.7;
const SIZE_DISPLAY_TEXT_COLOR = 'var(--app-black)';
const SIZE_DISPLAY_WIDTH_MIN = 50;
const SIZE_DISPLAY_WIDTH_MAX = 75;
const SIZE_DISPLAY_HEIGHT = 16;

const DISTANCE_COLOR = 'var(--color-accent-quaternary)';
const DISTANCE_TEXT_COLOR = 'var(--app-white)';
const DISTANCE_BORDER_RADIUS = 2;
const DISTANCE_PILL_WIDTH = 50;
const DISTANCE_PILL_HEIGHT = 16;
const DISTANCE_LINE_STROKE = 1;

// ------------------------------------------------
// TYPES
// ------------------------------------------------

/**
 * Bounding rect interface
 */
export interface BoundingRect {
  x: number;
  y: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  width: number;
  height: number;
}

/**
 * Selrect (selection rectangle) interface
 */
export interface SelRect {
  x: number;
  y: number;
  width: number;
  height: number;
  x1?: number;
  y1?: number;
  x2?: number;
  y2?: number;
}

/**
 * Shape interface
 */
export interface Shape {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  points?: number[];
}

/**
 * Frame shape
 */
export interface FrameShape extends Shape {
  points?: number[];
}

// ------------------------------------------------
// HELPERS
// ------------------------------------------------

/**
 * Convert bounds to selrect
 */
function boundsToSelrect(bounds: BoundingRect): SelRect {
  return {
    x: bounds.x,
    y: bounds.y,
    x1: bounds.x,
    y1: bounds.y,
    x2: bounds.x + bounds.width,
    y2: bounds.y + bounds.height,
    width: bounds.width,
    height: bounds.height
  };
}

/**
 * Calculate guides coordinates
 */
function calculateGuides(bounds: BoundingRect, selrect: SelRect): [number, number, number, number][] {
  const { width: boundsWidth, height: boundsHeight } = bounds;
  const { x, y, width, height } = selrect;

  return [
    [bounds.x, y, bounds.x + boundsWidth, y],
    [bounds.x, y + height, bounds.x + boundsWidth, y + height],
    [x, bounds.y, x, bounds.y + boundsHeight],
    [x + width, bounds.y, x + width, bounds.y + boundsHeight]
  ];
}

/**
 * Calculate distance lines
 */
function calculateDistanceLines(
  fromS: number,
  fromE: number,
  toS: number,
  toE: number
): [number, number][] {
  const ss = toS - fromS;
  const se = toE - fromS;
  const es = toS - fromE;
  const ee = toE - fromE;

  const result: [number, number][] = [];

  if ((ss < 0 && se > 0) || (ss > 0 && ee < 0) || (ss < 0 && ss > se)) {
    result.push([fromS, fromS + ss]);
  }

  if (se < 0 && ss <= se) {
    result.push([fromS, fromS + se]);
  }

  if (es > 0 && es <= ee) {
    result.push([fromE, fromE + es]);
  }

  if ((ee > 0 && es < 0) || (ee < 0 && ss > 0) || (ee > 0 && ee < es)) {
    result.push([fromE, fromE + ee]);
  }

  return result;
}

// ------------------------------------------------
// COMPONENTS
// ------------------------------------------------

/**
 * Size display props
 */
export interface SizeDisplayProps {
  selrect: SelRect;
  zoom: number;
}

/**
 * Size display component - Shows width x height
 */
export function SizeDisplay({ selrect, zoom }: SizeDisplayProps) {
  const { x, y, width, height } = selrect;

  const sizeLabel = `${width} x ${height}`;

  const rectHeight = SIZE_DISPLAY_HEIGHT / zoom;
  const rectWidth = (sizeLabel.length <= 9 ? SIZE_DISPLAY_WIDTH_MIN : SIZE_DISPLAY_WIDTH_MAX) / zoom;
  const textPadding = 4 / zoom;

  return (
    <g className="size-display">
      <rect
        x={x + width / 2 - rectWidth / 2}
        y={y + height - rectHeight}
        width={rectWidth}
        height={rectHeight}
        style={{ fill: SIZE_DISPLAY_COLOR, fillOpacity: SIZE_DISPLAY_OPACITY }}
      />
      <text
        x={x + width / 2 - rectWidth / 2 + rectWidth / 2}
        y={y + height + textPadding + rectHeight / 2 - rectHeight}
        width={rectWidth}
        height={rectHeight}
        textAnchor="middle"
        style={{ fill: SIZE_DISPLAY_TEXT_COLOR, fontSize: FONT_SIZE / zoom }}
      >
        {sizeLabel}
      </text>
    </g>
  );
}

/**
 * Distance display pill props
 */
export interface DistanceDisplayPillProps {
  x: number;
  y: number;
  zoom: number;
  distance: number;
  bounds: BoundingRect;
}

/**
 * Distance display pill component
 */
export function DistanceDisplayPill({ x, y, zoom, distance, bounds }: DistanceDisplayPillProps) {
  const pillWidth = DISTANCE_PILL_WIDTH / zoom;
  const pillHeight = DISTANCE_PILL_HEIGHT / zoom;
  const fontSize = FONT_SIZE / zoom;
  const textPadding = 3 / zoom;
  const borderRadius = DISTANCE_BORDER_RADIUS / zoom;

  const { width: boundsWidth, height: boundsHeight } = bounds;

  let rectX = x - pillWidth / 2;
  let rectY = y - pillHeight / 2;

  const textX = x;
  const textY = y + textPadding;

  let offsetX = 0;
  if (rectX < bounds.x) {
    offsetX = bounds.x - rectX;
  } else if (rectX + pillWidth > bounds.x + boundsWidth) {
    offsetX = bounds.x + boundsWidth - (rectX + pillWidth);
  }

  let offsetY = 0;
  if (rectY < bounds.y) {
    offsetY = bounds.y - rectY;
  } else if (rectY + pillHeight > bounds.y + boundsHeight) {
    offsetY = bounds.y + boundsHeight - (rectY + pillHeight + pillHeight / 2);
  }

  return (
    <g className="distance-pill">
      <rect
        x={rectX + offsetX}
        y={rectY + offsetY}
        rx={borderRadius}
        ry={borderRadius}
        width={pillWidth}
        height={pillHeight}
        style={{ fill: DISTANCE_COLOR }}
      />
      <text
        x={textX + offsetX}
        y={textY + offsetY}
        rx={borderRadius}
        ry={borderRadius}
        textAnchor="middle"
        width={pillWidth}
        height={pillHeight}
        style={{ fill: DISTANCE_TEXT_COLOR, fontSize }}
      >
        {distance}
      </text>
    </g>
  );
}

/**
 * Selection rect component
 */
export interface SelectionRectProps {
  selrect: SelRect;
  zoom: number;
}

/**
 * Selection rect component - Shows hover selection rectangle
 */
export function SelectionRect({ selrect, zoom }: SelectionRectProps) {
  const { x, y, width, height } = selrect;
  const rectWidth = SELECTION_RECT_WIDTH / zoom;

  return (
    <g className="selection-rect">
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{ fill: 'none', stroke: HOVER_COLOR, strokeWidth: rectWidth }}
      />
    </g>
  );
}

/**
 * Distance display props
 */
export interface DistanceDisplayProps {
  from: SelRect;
  to: SelRect;
  zoom: number;
  bounds: BoundingRect;
}

/**
 * Distance display component - Shows distance lines between shapes
 */
export function DistanceDisplay({ from, to, zoom, bounds }: DistanceDisplayProps) {
  const fixedX = from.x + from.width / 2;
  const fixedY = from.y + from.height / 2;

  const vLines = calculateDistanceLines(from.y1 || from.y, from.y2 || from.y + from.height, to.y1 || to.y, to.y2 || to.y + to.height)
    .map(([start, end]) => [fixedX, start, fixedX, end] as [number, number, number, number]);

  const hLines = calculateDistanceLines(from.x1 || from.x, from.x2 || from.x + from.width, to.x1 || to.x, to.x2 || to.x + to.width)
    .map(([start, end]) => [start, fixedY, end, fixedY] as [number, number, number, number]);

  const lines = [...vLines, ...hLines];

  const lineWidth = DISTANCE_LINE_STROKE / zoom;

  return (
    <>
      {lines.map(([x1, y1, x2, y2]) => {
        const centerX = x1 + (x2 - x1) / 2;
        const centerY = y1 + (y2 - y1) / 2;
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

        // TODO: Use mth.almostZero?
        if (distance > 0.001) {
          return (
            <g key={`line-${x1}-${y1}-${x2}-${y2}`} className="distance-line">
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                style={{ stroke: DISTANCE_COLOR, strokeWidth: lineWidth }}
              />
              <DistanceDisplayPill
                x={centerX}
                y={centerY}
                zoom={zoom}
                distance={distance}
                bounds={bounds}
              />
            </g>
          );
        }
        return null;
      })}
    </>
  );
}

/**
 * Selection guides props
 */
export interface SelectionGuidesProps {
  bounds: BoundingRect;
  selrect: SelRect;
  zoom: number;
}

/**
 * Selection guides component
 */
export function SelectionGuides({ bounds, selrect, zoom }: SelectionGuidesProps) {
  const guides = calculateGuides(bounds, selrect);
  const lineWidth = SELECT_GUIDE_WIDTH / zoom;
  const dashArray = SELECT_GUIDE_DASHARRAY / zoom;

  return (
    <g className="selection-guides">
      {guides.map(([x1, y1, x2, y2], idx) => (
        <line
          key={`guide-${idx}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          style={{
            stroke: SELECT_COLOR,
            strokeWidth: lineWidth,
            strokeDasharray: dashArray
          }}
        />
      ))}
    </g>
  );
}

/**
 * Measurement component props
 */
export interface MeasurementProps {
  bounds: BoundingRect;
  frame?: FrameShape | null;
  selectedShapes: Shape[];
  hoverShape?: Shape | null;
  zoom: number;
}

/**
 * Measurement component - Main component for drawing measurements
 */
export function Measurement({ bounds, frame, selectedShapes, hoverShape, zoom }: MeasurementProps) {
  const selectedIds = new Set(selectedShapes.map((s) => s.id));

  // TODO: Implement gsh.shapes->rect, grc.points->rect
  // const selectedSelrect = gsh.shapesToRect(selectedShapes);
  const selectedSelrect: SelRect = {
    x: 0, y: 0, width: 0, height: 0,
    x1: 0, y1: 0, x2: 0, y2: 0
  };

  // TODO: Implement grc.points->rect
  // const hoverSelrect = hoverShape ? grc.pointsToRect(hoverShape.points) : null;
  const hoverSelrect: SelRect | null = null;

  const boundsSelrect = boundsToSelrect(bounds);

  const hoverSelectedShape = hoverShape && !selectedIds.has(hoverShape.id);

  if (selectedShapes.length === 0) {
    return null;
  }

  return (
    <g className="measurement-feedback" style={{ pointerEvents: 'none' }}>
      <SelectionGuides selrect={selectedSelrect} bounds={bounds} zoom={zoom} />
      <SizeDisplay selrect={selectedSelrect} zoom={zoom} />

      {!hoverShape || hoverSelectedShape ? (
        frame && frame.id !== '00000000-0000-0000-0000-000000000000' ? (
          // TODO: Implement grc.points->rect
          // const frameBb = grc.pointsToRect(frame.points);
          <>
            <g className="hover-shapes">
              <SelectionRect selrect={{ x: 0, y: 0, width: 0, height: 0 }} zoom={zoom} />
              <DistanceDisplay
                from={{ x: 0, y: 0, width: 0, height: 0 }}
                to={selectedSelrect}
                zoom={zoom}
                bounds={boundsSelrect}
              />
            </g>
          </>
        ) : null
      ) : (
        <g className="hover-shapes">
          <SelectionRect selrect={hoverSelrect || { x: 0, y: 0, width: 0, height: 0 }} zoom={zoom} />
          <SizeDisplay selrect={hoverSelrect || { x: 0, y: 0, width: 0, height: 0 }} zoom={zoom} />
          <DistanceDisplay
            from={hoverSelrect || { x: 0, y: 0, width: 0, height: 0 }}
            to={selectedSelrect}
            zoom={zoom}
            bounds={boundsSelrect}
          />
        </g>
      )}
    </g>
  );
}
