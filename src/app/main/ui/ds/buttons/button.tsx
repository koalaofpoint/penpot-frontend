// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from 'react';

// TODO: Import from proper location
// import { iconList } from '../../foundations/assets/icon';
// import { cssClass } from '../../../style';
// import { Icon } from '../foundations/assets/icon';

// Temporarily using placeholders
const iconList: string[] = [];

interface ButtonProps {
  class?: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: string;
  children?: React.ReactNode;
  onRef?: (node: HTMLButtonElement | HTMLAnchorElement) => void;
  to?: string; // renders as an anchor element
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive';
}

export function Button({
  variant = 'primary',
  icon,
  children,
  class: className,
  onRef,
  to,
  type = 'button',
  ...props
}: ButtonProps): JSX.Element {
  const buttonRef = React.useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  React.useEffect(() => {
    if (onRef && buttonRef.current) {
      onRef(buttonRef.current);
    }
  }, [onRef]);

  const Element = to ? 'a' as any : 'button';

  const internalClass = cssClass({
    button: true,
    'button-link': to !== undefined,
    'button-primary': variant === 'primary',
    'button-secondary': variant === 'secondary',
    'button-ghost': variant === 'ghost',
    'button-destructive': variant === 'destructive'
  });

  return React.createElement(
    Element,
    {
      ...props,
      className: [className, internalClass].filter(Boolean).join(' '),
      href: to,
      type: type,
      ref: buttonRef
    },
    icon && React.createElement('icon-component', { iconId: icon, size: 'm', 'aria-hidden': true }),
    React.createElement('span', { className: cssClass({ 'label-wrapper': true }) }, children)
  );
}

// Temporary placeholder for cssClass
function cssClass(classes: Record<string, boolean>): string {
  return Object.entries(classes)
    .filter(([_, value]) => value)
    .map(([key, _]) => key)
    .join(' ');
}
