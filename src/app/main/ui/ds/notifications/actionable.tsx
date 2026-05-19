// This Source Code Form is subject to terms of Mozilla Public
// License, v. 2.0. If a copy of MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { stl } from '../../../style';
// import { button } from '../buttons/button';

/**
 * Actionable variant
 */
export type ActionableVariant = 'default' | 'error';

/**
 * Actionable component props
 */
export interface ActionableProps extends React.HTMLAttributes<HTMLElement> {
  variant?: ActionableVariant;
  acceptLabel?: string;
  cancelLabel?: string;
  onAccept?: (event: React.MouseEvent) => void;
  onCancel?: (event: React.MouseEvent) => void;
}

/**
 * Actionable component - Notification with accept/cancel actions
 */
export function Actionable({
  variant = 'default',
  acceptLabel,
  cancelLabel,
  onAccept,
  onCancel,
  children,
  class: className,
  ...props
}: ActionableProps & { children?: React.ReactNode }) {
  const finalClass = `notification ${className || ''}`;

  const handleAccept = React.useCallback(
    (e: React.MouseEvent) => {
      if (onAccept) {
        onAccept(e);
      }
    },
    [onAccept]
  );

  const handleCancel = React.useCallback(
    (e: React.MouseEvent) => {
      if (onCancel) {
        onCancel(e);
      }
    },
    [onCancel]
  );

  return (
    <aside {...props} className={finalClass} data-testid="actionable">
      <div className="notification-message">{children}</div>

      {cancelLabel && (
        /* <Button variant="secondary" type="button" onClick={handleCancel}> */
        <button type="button" onClick={handleCancel}>
          {cancelLabel}
        </button>
      )}

      {acceptLabel && (
        /* <Button variant={variant === 'default' ? 'primary' : 'destructive'} type="button" onClick={handleAccept}> */
        <button
          type="button"
          onClick={handleAccept}
          className={variant === 'destructive' ? 'destructive' : ''}
        >
          {acceptLabel}
        </button>
      )}
    </aside>
  );
}
