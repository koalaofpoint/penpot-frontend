// This Source Code Form is subject to terms of Mozilla Public
// License, v. 2.0. If a copy of MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { stl } from '../../../style';
// import { icon } from '../foundations/assets/icon';
// import { notificationPill } from './shared/notification_pill';

/**
 * Notification level type
 */
export type NotificationLevel = 'default' | 'info' | 'warning' | 'error' | 'success';

/**
 * Notification type
 */
export type NotificationType = 'toast' | 'context';

/**
 * Notification appearance
 */
export type NotificationAppearance = 'neutral' | 'ghost';

/**
 * Toast component props
 */
export interface ToastProps extends React.HTMLAttributes<HTMLElement> {
  type?: NotificationType;
  level?: NotificationLevel;
  appearance?: NotificationAppearance;
  isHtml?: boolean;
  detail?: React.ReactNode;
  showDetail?: boolean;
  onClose?: () => void;
  onToggleDetail?: () => void;
}

/**
 * Toast component - Dismissible notification
 */
export function Toast({
  type = 'toast',
  level = 'default',
  appearance = 'neutral',
  isHtml = false,
  detail,
  showDetail,
  onClose,
  onToggleDetail,
  children,
  ...props
}: ToastProps & { children?: React.ReactNode }) {
  const finalClass = `toast ${level === 'default' ? '' : ''} ${level === 'warning' ? 'level-warning' : ''} ${level === 'error' ? 'level-error' : ''} ${level === 'success' ? 'level-success' : ''} ${level === 'info' ? 'level-info' : ''} ${className || ''}`;

  return (
    <aside {...props} className={finalClass} role="alert" ariaLive="polite">
      {/* <NotificationPill level={level} type={type} isHtml={isHtml} appearance={appearance} detail={detail} showDetail={showDetail} onToggleDetail={onToggleDetail}> */}
      <div className="notification-pill">
        {children}
      </div>

      {/* TODO: This should be a button from DS, but this variant is not designed yet.
          https://tree.taiga.io/project/penpot/task/8492 */}
      <button onClick={onClose} ariaLabel="Close" className={`close-button ${level === 'default' ? 'level-default' : ''} ${level === 'warning' ? 'level-warning' : ''} ${level === 'error' ? 'level-error' : ''} ${level === 'success' ? 'level-success' : ''} ${level === 'info' ? 'level-info' : ''}`}>
        {/* <Icon iconId="close" /> */}
        <span>✕</span>
      </button>
    </aside>
  );
}
