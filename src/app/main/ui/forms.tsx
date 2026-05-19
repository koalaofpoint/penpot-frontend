// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { button as button* } from '@ui/ds/buttons/button'
import { input as input* } from '@ui/ds/controls/input'
import * as dom from '@util/dom'
import * as fm from '@util/forms'
import * as k from '@util/keyboard'
import React, { createContext, useCallback, useContext } from 'react'

const FormContext = createContext<any>(null)

interface FormInputProps {
  name: string
  trim?: boolean
  [key: string]: any
}

export const FormInput: React.FC<FormInputProps> = ({
  name,
  trim,
  ...props
}) => {
  const form = useContext(FormContext)

  const inputName = name
  const touched = form?.data?.has(inputName) && form?.touched?.has(inputName)
  const error = form?.errors?.get(inputName)
  const value = form?.data?.get(inputName) ?? ''

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = dom.getInputValue(dom.getTarget(event))
      fm.onInputChange(form, inputName, inputValue, trim)
    },
    [form, inputName, trim]
  )

  const resolvedProps = {
    ...props,
    onChange,
    value,
  }

  if (error && touched) {
    return (
      <input*
        {...resolvedProps}
        hintType="error"
        hintMessage={error.message}
      />
    )
  }

  return <input* {...resolvedProps} />
}

interface FormSubmitProps {
  disabled?: boolean
  onSubmit?: (form: any, event: React.FormEvent) => void
  [key: string]: any
}

export const FormSubmit: React.FC<FormSubmitProps> = ({
  disabled,
  onSubmit,
  ...props
}) => {
  const form = useContext(FormContext)

  const disabledFlag =
    (form &&
      (!form.valid ||
        (form.asyncErrors?.length ?? 0) > 0 ||
        (form.extraErrors?.length ?? 0) > 0)) ||
    disabled === true

  const handleKeyDownSave = useCallback(
    (e: React.KeyboardEvent) => {
      if (k.enter(e) || k.space(e)) {
        dom.preventDefault(e)
        onSubmit?.(form, e as any)
      }
    },
    [form, onSubmit]
  )

  return (
    <button*
      {...props}
      disabled={disabledFlag}
      onKeyDown={handleKeyDownSave}
      type="submit"
    />
  )
}

interface FormProps {
  onSubmit?: (form: any, event: React.FormEvent) => void
  form: any
  children?: React.ReactNode
  className?: string
}

export const Form: React.FC<FormProps> = ({
  onSubmit,
  form,
  children,
  className,
}) => {
  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      dom.preventDefault(event)
      onSubmit?.(form, event)
    },
    [onSubmit, form]
  )

  return (
    <FormContext.Provider value={form}>
      <form className={className} onSubmit={handleSubmit}>
        {children}
      </form>
    </FormContext.Provider>
  )
}
