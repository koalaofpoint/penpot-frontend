// This Source Code Form is subject to terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper location
// import { css, cssCase } from '../../main/style';

/**
 * Badge notification component props
 */
export interface BadgeNotificationProps {
  type?: 'warning' | 'error' | 'success' | 'info';
  content: string;
  size?: 'small';
  isFocus?: boolean;
}

/**
 * Badge notification component - Small informative badge notification
 * "They are persistent, informative and non-actionable.
 *  They are small messages in specific areas off of app"
 */
export function BadgeNotification({
  type = 'info',
  content,
  size = 'normal',
  isFocus = false
}: BadgeNotificationProps) {
  return (
    <aside className={cssCase({
      'badge-notification': true,
      'warning': type === 'warning',
      'error': type === 'error',
      'success': type === 'success',
      'info': type === 'info',
      'small': size === 'small',
      'focus': isFocus
    })}>
      {content}
    </aside>
  );
}
