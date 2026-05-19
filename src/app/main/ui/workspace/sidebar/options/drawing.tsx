// This Source Code Form is subject to terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper location
// import { throttle } from 'rxjs';
// import { frameOptions } from './frame';
// import { css } from '../../../main/style';

/**
 * Drawing state type
 */
type DrawingState = {
  tool: string;
  // ... other drawing state properties
};

/**
 * Drawing options component props
 */
export interface DrawingOptionsProps {
  drawingState: DrawingState;
}

/**
 * Drawing options component - Controls drawing tool options
 */
export function DrawingOptions({ drawingState }: DrawingOptionsProps) {
  // TODO: const throttled = throttle(frameOptions, 60);

  switch (drawingState.tool) {
    case 'frame':
      // TODO: return <frameOptions drawingState={drawingState} />;
      return <div>Frame options</div>;
    default:
      return null;
  }
}

DrawingOptions.displayName = 'DrawingOptions';
