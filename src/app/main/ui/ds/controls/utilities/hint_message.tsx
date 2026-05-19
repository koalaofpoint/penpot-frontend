// This Source Code Form is subject to terms of Mozilla Public
// License, v. 2.0. If a copy of MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { stl } from '../../../../../style';

/**
 * Hint message type
 */
export type HintMessageType = 'hint' | 'error' | 'warning';

/**
 * Hint message component props
 */
export interface HintMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  message?: React.ReactNode | (() => React.ReactNode);
  type?: HintMessageType;
}

/**
 * HintMessage component - Displays hint, warning, or error message
 */
export function HintMessage({
  id,
  message,
  type = 'hint',
  class: className,
  ...props
}: HintMessageProps) {
  const messageContent = typeof message === 'function' ? (message as () => React.ReactNode)() : message;

  const hintClass = `hint-message ${type === 'hint' ? 'type-hint' : ''} ${type === 'warning' ? 'type-warning' : ''} ${type === 'error' ? 'type-error' : ''} ${className || ''}`;

  const ariaLive = type === 'warning' || type === 'error' ? 'polite' : undefined;

  return (
    <div {...props} className={hintClass} ariaLive={ariaLive}>
      {messageContent !== undefined && (
        <span className="hint-message-text" id={`${id}-hint`}>
          {messageContent}
        </span>
      )}
    </div>
  );
}
