// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from 'react';
// import { Tooltip } from '../tooltip/tooltip';
// import { Icon } from '../foundations/assets/icon';
// import { cssClass } from '../../../style';
// import { iconList } from '../../foundations/assets/icon';

// Temporarily using placeholders
const iconList: string[] = [];

type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right' | 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left';

interface IconButtonProps {
  class?: string;
  tooltipClass?: string;
  iconClass?: string;
  icon: string;
  'aria-label': string;
  tooltipPlacement?: TooltipPlacement;
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive' | 'action';
  children?: React.ReactNode;
}

export function IconButton({
  icon,
  variant = 'primary',
  children,
  class: className,
  tooltipClass,
  'aria-label': ariaLabel,
  tooltipPlacement = 'top',
  ...props
}: IconButtonProps): JSX.Element {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const tooltipId = `tooltip-${React.useId()}`;

  const buttonClass = cssClass({
    'icon-button': true,
    'icon-button-primary': variant === 'primary',
    'icon-button-secondary': variant === 'secondary',
    'icon-button-ghost': variant === 'ghost',
    'icon-button-action': variant === 'action',
    'icon-button-destructive': variant === 'destructive'
  });

  return React.createElement(
    'tooltip-component',
    {
      content: ariaLabel,
      class: tooltipClass,
      triggerRef: buttonRef,
      placement: tooltipPlacement,
      id: tooltipId
    },
    React.createElement(
      'button',
      {
        ...props,
        className: [className, buttonClass].filter(Boolean).join(' '),
        ref: buttonRef,
        'aria-labelledby': tooltipId
      },
      [
        React.createElement('icon-component', { iconId: icon, 'aria-hidden': true, class: props.iconClass }),
        children
      ]
    )
  );
}

// Temporary placeholder for cssClass
function cssClass(classes: Record<string, boolean>): string {
  return Object.entries(classes)
    .filter(([_, value]) => value)
    .map(([key, _]) => key)
    .join(' ');
}
