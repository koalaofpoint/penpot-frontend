// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from 'react';
import { Icon, ICON_ID } from '../foundations/assets/icon';

// TODO: Import from proper location
// import { cssClass } from '../../../style';

interface CheckboxProps {
  id?: string;
  label?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  class?: string;
}

export function Checkbox({
  id,
  label,
  checked = false,
  onChange,
  disabled = false,
  class: className
}: CheckboxProps): JSX.Element {
  const checkboxClass = cssClass({
    checkbox: true
  });

  const inputClass = cssClass({
    'checkbox-input': true
  });

  const labelClass = cssClass({
    'checkbox-label': true
  });

  const boxClass = cssClass({
    'checkbox-box': true,
    checked,
    disabled
  });

  const textClass = cssClass({
    'checkbox-text': true
  });

  return React.createElement(
    'div',
    { className: [className, checkboxClass].filter(Boolean).join(' ') },
    [
      React.createElement(
        'label',
        { htmlFor: id, className: labelClass },
        [
          React.createElement(
            'div',
            { className: boxClass },
            checked && React.createElement(Icon, { iconId: ICON_ID.tick, size: 's' })
          ),
          React.createElement('div', { className: textClass }, label)
        ]
      ),
      React.createElement('input', {
        type: 'checkbox',
        className: inputClass,
        id,
        checked,
        onChange,
        disabled
      })
    ]
  );
}

// Temporary placeholder for cssClass
function cssClass(classes: Record<string, boolean>): string {
  return Object.entries(classes)
    .filter(([_, value]) => value)
    .map(([key, _]) => key)
    .join(' ');
}
