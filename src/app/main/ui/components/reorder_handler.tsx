// This Source Code Form is subject to terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { css } from '../../main/style';
// import { icon } from '../ds/foundations/assets/icon';
import { forwardRef } from 'react';

/**
 * Reorder handler component props
 */
export interface ReorderHandlerProps {
  ref?: React.Ref<HTMLDivElement>;
}

/**
 * Reorder handler component - Drag handle for reordering items
 */
export const ReorderHandler = forwardRef<HTMLDivElement, ReorderHandlerProps>(
  ({ ref: externalRef }, ref) => {
    return (
      <>
        <div ref={ref || externalRef} className="reorder">
          {/* TODO: icon */}
          {/* TODO: <icon icon-id={icon.reorder} className="reorder-icon" aria-hidden={true} /> */}
        </div>
        <hr className="reorder-separator-top" />
        <hr className="reorder-separator-bottom" />
      </>
    );
  }
);

ReorderHandler.displayName = 'ReorderHandler';
