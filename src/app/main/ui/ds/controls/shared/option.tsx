// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { icon as icon*, iconList } from '@ui/ds/foundations/assets/icon'
import React from 'react'

interface OptionProps {
  id: string
  icon?: string
  selected?: boolean
  focused?: boolean
  dimmed?: boolean
  label?: string
  ariaLabel?: string
  onClick?: () => void
  ref?: React.RefObject<HTMLLIElement>
}

export const Option: React.FC<OptionProps> = ({
  id,
  icon: iconId,
  selected,
  focused,
  dimmed,
  label,
  ariaLabel,
  onClick,
  ref,
}) => {
  const classStr = [
    'option',
    iconId ? 'option-with-icon' : '',
    selected ? 'option-selected' : '',
    focused ? 'option-current' : '',
  ].filter(Boolean).join(' ')

  return (
    <li
      value={id}
      className={classStr}
      aria-selected={selected}
      ref={ref}
      role="option"
      id={id}
      onClick={onClick}
      data-id={id}
      data-testid="dropdown-option"
    >
      {iconId && (
        <icon*
          iconId={iconId}
          size="s"
          className="option-icon"
          aria-hidden={!!label}
          aria-label={!label ? ariaLabel : undefined}
        />
      )}

      <span
        className={[
          'option-text',
          dimmed ? 'option-text-dimmed' : '',
        ].filter(Boolean).join(' ')}
      >
        {label}
      </span>

      {selected && (
        <icon*
          iconId={iconList.tick}
          size="s"
          className="option-check"
          aria-hidden={!!label}
        />
      )}
    </li>
  )
}
