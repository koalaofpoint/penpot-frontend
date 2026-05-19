// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { maxInputLength } from '@main/constants'
import * as dom from '@util/dom'
import * as kbd from '@util/keyboard'
import * as timers from '@util/timers'
import React, { useCallback, useEffect, useRef, useState } from 'react'

interface EditableLabelProps {
  value: string
  classInput?: string
  classLabel?: string
  isEditing?: boolean
  tooltip?: string
  displayValue?: string
  onChange?: (value: string) => void
  onCancel?: () => void
}

export const EditableLabel: React.FC<EditableLabelProps> = ({
  value,
  classInput,
  classLabel,
  isEditing,
  tooltip,
  displayValue,
  onChange,
  onCancel,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [internalEditing, setInternalEditing] = useState(false)

  const startEdition = useCallback(() => {
    setInternalEditing(true)
    timers.schedule(100, () => {
      const node = inputRef.current
      if (node) dom.focus(node)
    })
  }, [])

  const stopEdition = useCallback(() => {
    setInternalEditing(false)
  }, [])

  const acceptEdition = useCallback(() => {
    if (internalEditing) {
      const newValue = dom.getValue(inputRef.current)
      if (typeof onChange === 'function') {
        onChange(newValue)
      }
      stopEdition()
    }
  }, [internalEditing, onChange, stopEdition])

  const cancelEdition = useCallback(() => {
    stopEdition()
    if (typeof onCancel === 'function') {
      onCancel()
    }
  }, [stopEdition, onCancel])

  const onKeyUp = useCallback(
    (event: React.KeyboardEvent) => {
      if (kbd.esc(event)) {
        cancelEdition()
      } else if (kbd.enter(event)) {
        acceptEdition()
      }
    },
    [cancelEdition, acceptEdition]
  )

  useEffect(() => {
    if (isEditing && !internalEditing) {
      startEdition()
    }
  }, [isEditing, internalEditing, startEdition])

  if (internalEditing) {
    return (
      <input
        className={[classInput, 'editable-label-input'].filter(Boolean).join(' ')}
        ref={inputRef}
        defaultValue={value}
        onKeyUp={onKeyUp}
        maxLength={maxInputLength}
        onBlur={acceptEdition}
      />
    )
  }

  return (
    <span
      className={[classLabel, 'editable-label-text'].filter(Boolean).join(' ')}
      title={tooltip}
    >
      {displayValue}
    </span>
  )
}
