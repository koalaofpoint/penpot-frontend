// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import format module
// import * as fmt from '../../formates';

interface FlexDisplayPillProps {
  x: number;
  y: number;
  width: number;
  height: number;
  fontSize: number;
  borderRadius: number;
  value?: number;
  color: string;
}

// Constants
const FONT_SIZE = 11;
const DISTANCE_COLOR = "var(--color-accent-quaternary)";
const DISTANCE_TEXT_COLOR = "var(--app-white)";
const WARNING_COLOR = "var(--status-color-warning-500)";
const FLEX_DISPLAY_PILL_WIDTH = 40;
const FLEX_DISPLAY_PILL_HEIGHT = 20;
const FLEX_DISPLAY_PILL_BORDER_RADIUS = 4;

export function FlexDisplayPill({
  x,
  y,
  width,
  height,
  fontSize,
  borderRadius,
  value = 0,
  color
}: FlexDisplayPillProps) {
  // TODO: Import format-number function
  const displayValue = value;

  return (
    <g className="distance-pill">
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={borderRadius}
        ry={borderRadius}
        style={{ fill: color }}
      />
      <text
        x={x + width / 2}
        y={y + height / 2}
        textAnchor="middle"
        dominantBaseline="central"
        style={{
          fill: DISTANCE_TEXT_COLOR,
          fontSize: fontSize
        }}
      >
        {displayValue}
      </text>
    </g>
  );
}

export {
  FONT_SIZE,
  DISTANCE_COLOR,
  DISTANCE_TEXT_COLOR,
  WARNING_COLOR,
  FLEX_DISPLAY_PILL_WIDTH,
  FLEX_DISPLAY_PILL_HEIGHT,
  FLEX_DISPLAY_PILL_BORDER_RADIUS
};
