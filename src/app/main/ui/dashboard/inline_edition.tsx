// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as deprecatedIcon from '@ui/icons'
import * as dom from '@util/dom'
import * as kbd from '@util/keyboard'
import React, { useCallback, useEffect, useRef, useState } from 'react'

interface InlineEditionProps {
  content: string
  onEnd: (value: string) => void
  maxLength?: number
}

export const InlineEdition: React.FC<InlineEditionProps> = ({
  content,
  onEnd,
  maxLength,
}) => {
  const [name, setName] = useState(content)
  const inputRef = useRef<HTMLInputElement>(null)

  const onInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(dom.getTargetVal(event))
    },
    []
  )

  const onCancel = useCallback(
    (event: React.MouseEvent) => {
      dom.preventDefault(event)
      dom.stopPropagation(event)
      onEnd(name)
    },
    [name, onEnd]
  )

  const onClick = useCallback(
    (event: React.MouseEvent) => {
      dom.preventDefault(event)
      dom.stopPropagation(event)
    },
    []
  )

  const onBlur = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      const newName = dom.getTargetVal(event)
      onEnd(newName)
    },
    [onEnd]
  )

  const onKeyup = useCallback(
    (event: React.KeyboardEvent) => {
      dom.stopPropagation(event)
      if (kbd.esc(event)) {
        onCancel(event as any)
      } else if (kbd.enter(event)) {
        const newName = dom.getTargetVal(event)
        onEnd(newName)
      }
    },
    [onCancel, onEnd]
  )

  useEffect(() => {
    const node = inputRef.current
    if (node) {
      dom.focus(node)
      dom.selectText(node)
    }
  }, [])

  return (
    <div className="edit-wrapper">
      <input
        className="element-title"
        value={name}
        ref={inputRef}
        onClick={onClick}
        onChange={onInput}
        onKeyDown={onKeyup}
        onBlur={onBlur}
        maxLength={maxLength}
      />
      <span className="close" onClick={onCancel}>
        {deprecatedIcon.close}
      </span>
    </div>
  )
}
