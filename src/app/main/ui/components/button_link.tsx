// This Source Code Form is subject to terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { css } from '../../main/style';
// import { kbd } from '../../../util/keyboard';

/**
 * Button link component props
 */
export interface ButtonLinkProps {
  onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  icon?: React.ReactNode;
  label?: string;
  class?: string;
}

/**
 * Button link component - Link-style button with Enter key support
 */
export function ButtonLink({ onClick, icon, label, class: className }: ButtonLinkProps) {
  const onKeyDown = React.useCallback((event: React.KeyboardEvent) => {
    // TODO: if (kbd.enter(event) && onClick) onClick(event);
    if (event.key === 'Enter' && onClick) onClick(event);
  }, [onClick]);

  return (
    <a
      className={`${className} button`}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      <span className="logo">{icon}</span>
      {label}
    </a>
  );
}
