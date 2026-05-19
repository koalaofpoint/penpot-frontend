// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from 'react';
// import { cssClass } from '../../../style';
// import { Button } from '../buttons/button';
// import { IconButton } from '../buttons/icon_button';
// import { preventDefault, stopPropagation, getParentWithData, click } from '../../../util/dom';

// TODO: Import from proper location
// import { iconList } from '../../foundations/assets/icon';

interface RadioOption {
  id: string;
  value: string | symbol;
  label: string;
  icon?: string;
  disabled?: boolean;
}

interface RadioButtonsProps {
  class?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive' | 'action';
  extended?: boolean;
  name?: string;
  selected?: string | symbol;
  allowEmpty?: boolean;
  options: RadioOption[];
  onChange?: (value: string | symbol) => void;
}

export function RadioButtons({
  class: className,
  variant = 'secondary',
  extended = false,
  name,
  selected,
  allowEmpty = false,
  options,
  onChange
}: RadioButtonsProps): JSX.Element {
  const handleBlur = React.useCallback((event: React.FocusEvent) => {
    const input = event.target as HTMLInputElement;
    input.blur();
  }, []);

  const handleClick = (event: React.MouseEvent) => {
    const label = event.target as HTMLLabelElement;
    click(label);
  };

  const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const value = input.value;
    const symbolValue = value.startsWith(':') && value.endsWith(':') ? value.slice(1, -1) : value;

    onChange?.(symbolValue);
    handleBlur(event);
  }, [onChange, handleBlur]);

  const wrapperClass = cssClass({
    wrapper: true,
    extended
  });

  return React.createElement(
    'div',
    { className: [className, wrapperClass].filter(Boolean).join(' '), key: name },
    React.createElement('div', { role: 'radiogroup', name },
      options.map((option, idx) => {
        const isChecked = selected === option.value;
        const labelClass = cssClass({
          label: true,
          extended
        });

        return React.createElement(
          'label',
          {
            key: idx,
            htmlFor: option.id,
            className: labelClass
          },
          [
            option.icon && React.createElement('icon-button-component', {
              variant,
              onClick: handleClick,
              'aria-pressed': isChecked,
              'aria-label': option.label,
              icon: option.icon,
              disabled: option.disabled
            }),
            React.createElement('button-component', {
              variant,
              onClick: handleClick,
              'aria-pressed': isChecked,
              className: cssClass({
                button: true,
                extended
              }),
              disabled: option.disabled
            },
              option.label
            ),
            React.createElement('input', {
              id: option.id,
              className: cssClass({ input: true }),
              onChange: handleChange,
              type: allowEmpty ? 'checkbox' : 'radio',
              name,
              disabled: option.disabled,
              value: option.value.toString(),
              'defaultChecked': isChecked
            })
          ]
        );
      })
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
