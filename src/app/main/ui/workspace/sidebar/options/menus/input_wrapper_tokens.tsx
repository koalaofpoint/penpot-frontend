// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useMemo } from "react"
import * as tk from "app.common.types.token"
import {useActiveTokensByType} from "app/main/ui/context"
import {NumericInput} from "app/main/ui/ds/controls/numeric-input"
import {tr} from "app/util/i18n"

interface NumericInputWrapperProps {
  value: any
  attr: string
  appliedToken?: any
  align?: string
  onDetach?: (tokenName: string, attr: string) => void
  placeholder?: string
  inputType?: string
  class?: string
  [key: string]: any
}

export const NumericInputWrapper: React.FC<NumericInputWrapperProps> = ({
  value,
  attr,
  appliedToken,
  align,
  onDetach,
  placeholder,
  inputType,
  class: className,
  ...props
}) => {
  const tokens = useActiveTokensByType()

  const filteredTokens = useMemo(() => {
    const tokensByInput = tk.tokensByInput as Record<string, string[]>
    const keys = tokensByInput[inputType || attr] || []
    const selected = tokens ? Object.keys(tokens).filter((k) => keys.includes(k)).reduce((acc: any, k) => {
      acc[k] = tokens[k]
      return acc
    }, {}) : {}
    return Object.keys(selected).length > 0 ? selected : null
  }, [tokens, inputType, attr])

  const onDetachAttr = React.useCallback(
    (tokenName: string) => {
      if (onDetach) {
        onDetach(tokenName, attr)
      }
    },
    [onDetach, attr]
  )

  const finalPlaceholder = placeholder ||
    (value === ":multiple" ? tr("settings.multiple") : "--")

  return (
    <NumericInput
      placeholder={finalPlaceholder}
      className={`${className || ""} ${(stl as any).css("numeric-input-wrapper")}`}
      appliedToken={appliedToken}
      tokens={filteredTokens}
      align={align}
      onDetach={onDetachAttr}
      name={attr}
      value={value}
      {...props}
    />
  )
}
