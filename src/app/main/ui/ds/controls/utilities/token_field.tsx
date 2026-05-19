// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from 'app/common/data'
import { dmGetProp, dmStr } from 'app/common/data/macros'
import { iconButton as icon-button* } from '@ui/ds/buttons/icon-button'
import * as i from '@ui/ds/foundations/assets/icon'
import { tooltip as tooltip* } from '@ui/ds/tooltip'
import * as dom from '@util/dom'
import { tr } from '@util/i18n'
import React, { useCallback, useId, useRef } from 'react'

interface TokenFieldProps {
  className?: string
  id?: string
  label?: string
  property?: string
  value: string
  disabled?: boolean
  slotStart?: React.ReactNode
  onClick?: () => void
  onTokenKeyDown?: (e: React.KeyboardEvent) => void
  onBlur?: () => void
  onFocus?: () => void
  detachToken?: () => void
  tokenWrapperRef?: React.RefObject<HTMLDivElement>
  tokenDetachBtnRef?: React.RefObject<HTMLButtonElement>
}

export const TokenField: React.FC<TokenFieldProps> = ({
  id,
  label,
  value,
  slotStart,
  disabled,
  className,
  onClick,
  onTokenKeyDown,
  onBlur,
  onFocus,
  detachToken,
  tokenWrapperRef,
  tokenDetachBtnRef,
  property,
}) => {
  const setActive = id !== null && id !== undefined
  const content = setActive ? label : tr('ds.inputs.token-field.no-active-token-option')
  const defaultId = useId()
  const resolvedId = id ?? defaultId
  const pillRef = useRef<HTMLButtonElement>(null)

  const focusWrapper = useCallback(
    (event: React.FocusEvent) => {
      if (!disabled) {
        dom.preventDefault(event)
        dom.focus(tokenWrapperRef?.current ?? null)
      }
    },
    [disabled, tokenWrapperRef]
  )

  return (
    <tooltip*
      content={property}
      className="token-field-wrapper"
      triggerRef={tokenWrapperRef}
      id={dmStr(defaultId, '-input')}
    >
      <div
        className={[
          className,
          'token-field',
          slotStart ? 'with-icon' : '',
          disabled ? 'token-field-disabled' : '',
        ]
          .filter(Boolean)
          .join(' ')}
        onClick={focusWrapper}
        disabled={disabled}
        onKeyDown={onTokenKeyDown}
        ref={tokenWrapperRef}
        onBlur={onBlur}
        onFocus={onFocus}
        aria-labelledby={dmStr(defaultId, '-input')}
        tabIndex={disabled ? -1 : 0}
      >
        {slotStart && slotStart}

        <div className="content-wrapper">
          <tooltip*
            content={content}
            triggerRef={pillRef}
            id={dmStr(resolvedId, '-pill')}
          >
            <button
              onClick={onClick}
              ref={pillRef}
              className={[
                'pill',
                !setActive ? 'no-set-pill' : '',
                disabled ? 'pill-disabled' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              disabled={disabled}
              aria-labelledby={dmStr(resolvedId, '-pill')}
              onKeyDown={onTokenKeyDown}
            >
              {value}
              {!setActive && <div className="pill-dot" />}
            </button>
          </tooltip*>
        </div>

        {!disabled && (
          <icon-button*
            variant="ghost"
            className="invisible-button"
            tooltipClass="button-tooltip"
            icon={i.brokenLink}
            ref={tokenDetachBtnRef}
            aria-label={tr('ds.inputs.token-field.detach-token')}
            onClick={detachToken}
          />
        )}
      </div>
    </tooltip*>
  )
}
