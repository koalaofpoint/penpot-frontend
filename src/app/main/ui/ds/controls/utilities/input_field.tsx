// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from 'app/common/data'
import { maxInputLength } from '@main/constants'
import { icon as icon*, iconList } from '@ui/ds/foundations/assets/icon'
import { tooltip as tooltip* } from '@ui/ds/tooltip'
import * as dom from '@util/dom'
import React, { forwardRef, useCallback, useId, useRef } from 'react'

interface InputFieldProps {
  className?: string
  ariaLabel?: string
  id: string
  icon?: string
  hasHint?: boolean
  hintType?: 'hint' | 'error' | 'warning'
  type?: string
  maxLength?: number
  variant?: 'seamless' | 'dense' | 'comfortable'
  slotStart?: React.ReactNode
  slotEnd?: React.ReactNode
  [key: string]: any
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      id,
      icon: iconId,
      className,
      type = 'text',
      hasHint,
      hintType,
      maxLength,
      variant = 'dense',
      slotStart,
      slotEnd,
      ariaLabel,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const tooltipId = useId()

    const resolvedRef = (ref as React.RefObject<HTMLInputElement>) || inputRef

    const combinedClassName = d.classCase(
      { input: true, 'input-with-icon': !!iconId },
      className
    )

    const ariaInvalid = hasHint && hintType === 'error' ? 'true' : undefined
    const ariaDescribedBy = hasHint ? `${id}-hint` : undefined

    const onIconClick = useCallback(
      (_event: React.MouseEvent) => {
        const inputNode = resolvedRef.current
        if (inputNode) {
          dom.selectNode(inputNode)
          dom.focus(inputNode)
        }
      },
      [resolvedRef]
    )

    const wrapperClass = d.classCase(
      {
        'input-wrapper': true,
        'has-hint': hasHint,
        'hint-type-hint': hintType === 'hint',
        'hint-type-warning': hintType === 'warning',
        'hint-type-error': hintType === 'error',
        'variant-seamless': variant === 'seamless',
        'variant-dense': variant === 'dense',
        'variant-comfortable': variant === 'comfortable',
      }
    )

    return (
      <div className={[wrapperClass, className].filter(Boolean).join(' ')}>
        {slotStart}
        {iconId && (
          <icon*
            iconId={iconId}
            className="icon"
            size="s"
            onClick={onIconClick}
          />
        )}
        {ariaLabel ? (
          <tooltip*
            content={ariaLabel}
            triggerRef={resolvedRef}
            className="tooltip-wrapper"
            id={tooltipId}
          >
            <input
              {...props}
              className={combinedClassName}
              ref={resolvedRef}
              aria-invalid={ariaInvalid}
              aria-describedby={ariaDescribedBy}
              aria-labelledby={tooltipId}
              type={type}
              id={id}
              maxLength={maxLength ?? maxInputLength}
            />
          </tooltip*>
        ) : (
          <input
            {...props}
            className={combinedClassName}
            ref={resolvedRef}
            aria-invalid={ariaInvalid}
            aria-describedby={ariaDescribedBy}
            aria-labelledby={tooltipId}
            type={type}
            id={id}
            maxLength={maxLength ?? maxInputLength}
          />
        )}
        {slotEnd}
      </div>
    )
  }
)
