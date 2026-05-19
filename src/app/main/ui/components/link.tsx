// This Source Code Form is subject to terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper location
// import { nilv } from '../../common/data';
// import { enter } from '../../util/keyboard';

/**
 * Link component props
 */
export interface LinkProps {
  action?: () => void;
  className?: string;
  dataTestId?: string;
  children?: React.ReactNode;
  tabIndex?: number;
}

/**
 * Link component - Accessible link element with keyboard support
 */
export function Link({
  action,
  className = '',
  dataTestId,
  children,
  tabIndex = 0
}: LinkProps) {
  const keyboardAction = action || (() => {});

  return (
    <a
      onClick={keyboardAction}
      onKeyDown={(event: React.KeyboardEvent) => {
        // TODO: if (enter(event)) {
        // TODO;   keyboardAction(event);
        // TODO: }
      }}
      className={className}
      data-testid={dataTestId}
      tabIndex={tabIndex}
    >
      {children}
    </a>
  );
}
