// This Source Code Form is subject to terms of Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { css } from '../../../style';
// import { icon, iconList } from '../foundations/assets/icon';

// TODO: const ICON_LIST = iconList();
const ICON_LIST: string[] = [];

/**
 * Empty state component props
 */
export interface EmptyStateProps {
  class?: string;
  icon?: string;
  text: string;
}

/**
 * Empty state component
 */
export function EmptyState({ class: className, icon, text }: EmptyStateProps) {
  const props = { className: 'group' };

  return (
    <div {...props}>
      <div className="icon-wrapper">
        {/* icon({ iconId: icon, size: 'l', class: 'icon' }) */}
        <svg viewBox="0 0 24 24" fill="currentColor" className="icon" width="32" height="32">
          {/* Icon placeholder */}
        </svg>
      </div>
      <div className="text">{text}</div>
    </div>
  );
}
