// This Source Code Form is subject to terms of Mozilla Public
// License, v. 2.0. If a copy of MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { stl } from '../../../../style';
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
 * Context notification component props
 */
export interface ContextNotificationProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: NotificationType;
  level?: NotificationLevel;
  appearance?: NotificationAppearance;
  isHtml?: boolean;
}

/**
 * ContextNotification component - Persistent notifications, they do not disappear.
 * These are contextual messages in specific areas of tool, usually in modals and Dashboard area, and are mainly informative.
 */
export function ContextNotification({
  type = 'context',
  level = 'default',
  appearance = 'neutral',
  isHtml = false,
  class: className,
  children,
  ...props
}: ContextNotificationProps & { children?: React.ReactNode }) {
  const finalClass = `contextual-notification ${isHtml ? 'contain-html' : ''} ${level === 'default' ? 'level-default' : ''} ${level === 'warning' ? 'level-warning' : ''} ${level === 'error' ? 'level-error' : ''} ${level === 'success' ? 'level-success' : ''} ${level === 'info' ? 'level-info' : ''} ${className || ''}`;

  return (
    <aside
      {...props}
      className={finalClass}
      role="alert"
      ariaLive="polite"
    >
      {/* <NotificationPill level={level} type={type} isHtml={isHtml} appearance={appearance}> */}
      <div className={`notification-pill ${level} ${type} ${appearance}`}>
        {children}
      </div>
    </aside>
  );
}
