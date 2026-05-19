// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from 'app/common/data'
import * as dom from '@util/dom'
import * as kbd from '@util/keyboard'
import { blank as isBlank } from 'cuerdas'
import React, { useCallback, useEffect, useState } from 'react'

interface SwitchProps {
  id?: string
  className?: string
  label?: string
  ariaLabel?: string
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
}

export const Switch: React.FC<SwitchProps> = ({
  id,
  className,
  label,
  ariaLabel,
  defaultChecked,
  onChange,
  disabled,
}) => {
  const [checked, setChecked] = useState(defaultChecked)
  const disabledFlag = d.nilv(disabled, false)
  const hasLabelFlag = !isBlank(label)

  const handleToggle = useCallback(() => {
    if (!disabledFlag) {
      const updatedChecked = !checked
      setChecked(updatedChecked)
      onChange?.(updatedChecked)
    }
  }, [disabledFlag, checked, onChange])

  const handleKeydown = useCallback(
    (event: React.KeyboardEvent) => {
      dom.preventDefault(event)
      if (!disabledFlag) {
        if (kbd.space(event) || kbd.enter(event)) {
          handleToggle()
        }
      }
    },
    [disabledFlag, handleToggle]
  )

  useEffect(() => {
    setChecked(defaultChecked)
  }, [defaultChecked])

  const classStr = [
    className,
    'switch',
    checked === false ? 'off' : '',
    checked === null ? 'neutral' : '',
    checked === true ? 'on' : '',
  ].filter(Boolean).join(' ')

  return (
    <div
      className={classStr}
      role="switch"
      aria-label={!hasLabelFlag ? ariaLabel : undefined}
      aria-checked={checked}
      tabIndex={disabledFlag ? -1 : 0}
      onClick={handleToggle}
      onKeyDown={handleKeydown}
      disabled={disabledFlag}
    >
      <div id={id} className="switch-track">
        <div className="switch-thumb" />
      </div>
      {hasLabelFlag && (
        <label htmlFor={id} className="switch-label">
          {label}
        </label>
      )}
    </div>
  )
}
