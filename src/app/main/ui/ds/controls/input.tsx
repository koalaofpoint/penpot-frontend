// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from 'react';

// TODO: Import from proper location
// import { cssClass } from '../../../style';
// import { HintMessage } from './utilities/hint-message';
// import { InputField } from './utilities/input-field';
// import { Label } from './utilities/label';

// Temporary constants
const MAX_INPUT_LENGTH = 255;

interface InputProps {
  id?: string;
  class?: string;
  label?: string;
  isOptional?: boolean;
  type?: string;
  maxLength?: number;
  variant?: 'seamless' | 'dense' | 'comfortable';
  hintMessage?: string;
  hintType?: 'hint' | 'error' | 'warning';
  hintFormatted?: boolean;
}

export function Input({
  id: externalId,
  class: className,
  label,
  isOptional = false,
  type = 'text',
  maxLength,
  variant = 'dense',
  hintMessage,
  hintType = 'hint',
  hintFormatted = false,
  ...props
}: InputProps): JSX.Element {
  const id = externalId || `input-${React.useId()}`;

  const hintClass = hintType === 'error' && hintFormatted
    ? cssClass({ 'hint-formatted': true })
    : '';

  const inputClass = cssClass({
    'input-field': true
  });

  const wrapperClass = cssClass({
    'input-wrapper': true,
    'variant-dense': variant === 'dense',
    'variant-comfortable': variant === 'comfortable',
    'has-hint': hintMessage !== undefined
  });

  const hasHint = hintMessage !== undefined && !hintMessage.trim();
  const hasLabel = label !== undefined && !label.trim();

  const finalMaxLength = maxLength ?? MAX_INPUT_LENGTH;

  return React.createElement(
    'div',
    { className: [className, wrapperClass].filter(Boolean).join(' ') },
    [
      hasLabel && React.createElement('label-component', { htmlFor: id, isOptional }, label),
      React.createElement('input-field-component', {
        type,
        id,
        maxLength: finalMaxLength,
        hasHint,
        hintType,
        variant,
        ...props
      }),
      hasHint && React.createElement('hint-message-component', {
        id,
        class: hintClass,
        message: hintMessage,
        type: hintType
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
