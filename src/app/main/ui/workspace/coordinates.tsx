// This Source Code Form is subject to terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { mousePosition$ } from '../../main/streams';
// import { useRxSub } from '../hooks';
// import { css, cssCase } from '../../main/style';
import { useState } from 'react';

/**
 * Coordinates component props
 */
interface CoordinatesProps {
  colorpalette?: boolean;
}

/**
 * Coordinates data
 */
interface Coordinates {
  x: number;
  y: number;
}

/**
 * Coordinates component - Displays X/Y coordinates in the viewport
 */
export function Coordinates({ colorpalette }: CoordinatesProps) {
  const coords = useState<Coordinates>({ x: 0, y: 0 })[0];

  // TODO: const coords = useRxSub(mousePosition$);

  // TODO: const containerClass = cssCase({
  // TODO:   'container-color-palette-open': colorpalette,
  // TODO;   container: true
  // TODO: });

  // TODO: const coordinateClass = css('coordinate');

  return (
    <div className="container container-color-palette-open">
      <span className="coordinate" title="x">X: {coords.x}</span>
      <span className="coordinate" title="y">Y: {coords.y}</span>
    </div>
  );
}
