// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react"
import { useCallback, useState, useMemo, useEffect } from "react"
import * as d from "app.common.data"
import * as cft from "app.common.files.tokens"
import * as cto from "app.common.types.token"
import * as ctob from "app.common.types.tokens-lib"
import * as cf from "app.config"
import * as sd from "app.main.data.style-dictionary"
import * as ts from "app.main.data.tokenscript"
import * as wte from "app.main.data.workspace.tokens.errors"
import * as dwtf from "app.main.data.workspace.tokens.format"
import { Input } from "app.main.ui.ds.controls.input"
import * as fc from "app.main.ui.forms"
import * as dom from "app.util.dom"
import * as fm from "app.util.forms"
import { useTranslation } from "app.util.i18n"
import * as rx from "beicon.v2/core"
import * as str from "cuerdas.core"

function resolveValueTokenScript(
  tokens: any,
  prevToken: any,
  value: string
): rx.Observable<{ error?: any; value?: any }> {
  const result = ts.updateToken(tokens, { ...prevToken, value })
  const tokenResult = (result as any).resolved

  if (ts.processorError(tokenResult)) {
    return rx.of({
      error: wte.errorWithValue(
        "error.style-dictionary/missing-reference",
        (tokenResult as any).dependencyChain?.slice(1)
      ),
    })
  }

  if (tokenResult instanceof Error) {
    return rx.of({
      error: wte.errorWithValue("error.style-dictionary/invalid-token-value", value),
    })
  }

  return rx.of({ value: tokenResult })
}

function resolveValue(
  tokens: any,
  prevToken: any,
  tokenName: string,
  value: string
): rx.Observable<{ error?: string; value?: any }> {
  const validTokenName = str.notBlank(tokenName) &&
    new RegExp(cto.tokenNameValidationRegex).test(tokenName)

  const token: any = {
    value,
    name: validTokenName ? tokenName : "__PENPOT__TOKEN__NAME__PLACEHOLDER__",
  }

  const updatedTokens = tokens
    .delete(prevToken.name)
    .update(token.name, (existing: any) =>
      ctob.makeToken({ ...existing, ...prevToken, ...token })
    )

  return sd.resolveTokensInteractive(updatedTokens).pipe(
    rx.mergeMap((resolvedTokens: any) => {
      const resolved = resolvedTokens.get(token.name)
      const errors = resolved?.errors
      let resolvedValue = resolved?.resolvedValue

      if (cf.flags.has("tokenscript")) {
        resolvedValue = ts.tokenscriptSymbolsToPenpotUnit(resolvedValue)
      }

      if (resolvedValue) {
        return rx.of({ value: resolvedValue })
      }
      return rx.of({ error: errors?.[0] })
    })
  )
}

interface InputComponentProps {
  name: string
  tokens: any
  token: any
  [key: string]: any
}

export const InputComponent: React.FC<InputComponentProps> = ({
  name,
  tokens,
  token,
  ...props
}) => {
  const form = React.useContext(fc.FormContext)
  const inputName = name
  const tokenName = form?.data?.name

  const touched =
    form?.data && inputName in form.data && form.touched?.[inputName]

  const error = form?.errors?.[inputName]
  const value = form?.data?.[inputName] ?? ""

  const resolveStream = useMemo(() => {
    if (token && "value" in token) {
      return new rx.BehaviorSubject(token.value)
    }
    return new rx.Subject()
  }, [token])

  const [hint, setHint] = useState<{ message: string; type: string }>({})

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = dom.getInputValue(event.target)
      fm.onInputChange(form, inputName, value, true)
      rx.push!(resolveStream, value)
    },
    [inputName, resolveStream, form]
  )

  const resolvedProps = {
    ...props,
    onChange,
    defaultValue: value,
    variant: "comfortable",
    hintMessage: hint.message,
    hintType: hint.type,
  }

  if (error && touched) {
    resolvedProps.hintType = "error"
    resolvedProps.hintMessage = error.message
  }

  useEffect(() => {
    const resolveFn = cf.flags.has("tokenscript")
      ? resolveValueTokenScript
      : resolveValue

    const subscription = resolveStream.pipe(
      rx.debounce(300),
      rx.mergeMap((val) =>
        resolveFn(tokens, token, tokenName, val).pipe(
          rx.map((result) =>
            result.error
              ? { error: wte.resolveErrorMessage(result.error) }
              : result
          )
        )
      ),
      rx.subscribe(({ error, value }: { error?: any; value?: any }) => {
        const isTouched = form?.touched?.[inputName]
        if (isTouched) {
          if (error) {
            form && fm.update(fm.assocIn, ["extraErrors", inputName], { message: error })
            setHint({ message: error, type: "error" })
          } else {
            const message = `Resolved value: ${value}`
            form && fm.update(fm.dissocIn, ["extraErrors", inputName])
            setHint({ message, type: "hint" })
          }
        }
      })
    )

    return () => rx.dispose!(subscription)
  }, [resolveStream, tokens, token, tokenName, inputName, form])

  return <Input {...resolvedProps} />
}

function onCompositeInputChange(
  form: any,
  field: string,
  value: string,
  trim = false
): void {
  const cleanErrors = (errors: any) =>
    errors?.value
      ? errors.value instanceof Map
        ? new Map(errors.value).delete(field) && errors
        : Object.keys(errors.value || {}).length === 0
          ? fm.dissoc(errors, "value")
          : fm.updateIn(errors, ["value"], (vf: any) =>
              vf instanceof Map
                ? vf.delete(field) && vf
                : Object.fromEntries(
                    Object.entries(vf || {}).filter(([k]) => k !== field)
                  )
            )
      : errors

  fm.update(form, (state: any) => ({
    ...state,
    data: fm.assocIn(state.data, ["value", field], trim ? value.trim() : value),
    touched: fm.assocIn(state.touched, ["value", field], true),
    errors: cleanErrors(state.errors),
    extraErrors: cleanErrors(state.extraErrors),
  }))
}

interface InputCompositeProps {
  name: string
  tokens: any
  token: any
  [key: string]: any
}

export const InputComposite: React.FC<InputCompositeProps> = ({
  name,
  tokens,
  token,
  ...props
}) => {
  const form = React.useContext(fc.FormContext)
  const inputName = name
  const tokenName = form?.data?.name

  const error = form?.errors?.value?.[inputName]
  const value = form?.data?.value?.[inputName] ?? ""
  const touched = form?.touched?.value?.[inputName]

  const resolveStream = useMemo(() => {
    const val = token?.value?.[inputName]
    if (val) {
      return new rx.BehaviorSubject(val)
    }
    return new rx.Subject()
  }, [token, inputName])

  const [hint, setHint] = useState<{ message: string; type: string }>({})

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = dom.getInputValue(event.target)
      onCompositeInputChange(form, inputName, value, true)
      rx.push!(resolveStream, value)
    },
    [inputName, resolveStream, form]
  )

  const resolvedProps = {
    ...props,
    onChange,
    defaultValue: value,
    variant: "comfortable",
    hintMessage: hint.message,
    hintType: hint.type,
  }

  if (error && touched) {
    resolvedProps.hintType = "error"
    resolvedProps.hintMessage = error.message
  }

  if (!error && inputName === "reference") {
    resolvedProps.hintFormated = true
  }

  useEffect(() => {
    const subscription = resolveStream.pipe(
      rx.debounce(300),
      rx.mergeMap((val) =>
        resolveValue(tokens, token, tokenName, val).pipe(
          rx.map((result) =>
            result.error
              ? { error: wte.resolveErrorAssocMessage(result.error) }
              : result
          )
        )
      ),
      rx.subscribe(({ error, value }: { error?: any; value?: any }) => {
        const currentValue = form?.data?.value?.[inputName]

        if (error && str.isEmpty(error?.value)) {
          form && fm.update(fm.dissocIn, ["errors", "value", inputName])
          form && fm.update(fm.dissocIn, ["data", "value", inputName])
          form && fm.update(fm.dissocIn, ["extraErrors", "value"])
          setHint({ message: "", type: "" })
        } else if (error) {
          const errorMsg = error.message
          form && fm.update(fm.assocIn, ["extraErrors", "value", inputName], { message: errorMsg })
          setHint({ message: errorMsg, type: "error" })
        } else {
          let resolvedValue = value
          if (inputName === "line-height") {
            const parsed = cft.parseTokenValue(currentValue)
            if (parsed) {
              const fontSize = form?.data?.value?.["font-size"] || ""
              const calculated =
                parsed.unit === "%"
                  ? parseFloat(parsed.value) / 100
                  : parsed.unit === "px" && fontSize
                    ? parseFloat(parsed.value) / parseFloat(fontSize)
                    : null
              resolvedValue = calculated !== null
                ? dwtf.formatTokenValue(calculated)
                : value
            }
          } else {
            resolvedValue = dwtf.formatTokenValue(value)
          }

          const message = `Resolved value: ${resolvedValue ?? value}`
          form && fm.update(fm.dissocIn, ["errors", "value"])
          form && fm.update(fm.dissocIn, ["extraErrors", "value"])
          form && fm.update(fm.dissocIn, ["asyncErrors", "reference"])

          if (currentValue === String(resolvedValue)) {
            setHint({ message: "", type: "" })
          } else {
            setHint({ message, type: "hint" })
          }
        }
      })
    )

    return () => rx.dispose!(subscription)
  }, [resolveStream, tokens, token, inputName, tokenName, form])

  return <Input {...resolvedProps} />
}

function onIndexedInputChange(
  form: any,
  field: string,
  index: number,
  value: string,
  valueSubfield: string,
  trim = false
): void {
  const cleanErrors = (errors: any) =>
    errors?.delete?.(field)?.delete?.(valueSubfield)?.delete?.(index)

  fm.update(form, (state: any) => ({
    ...state,
    data: fm.assocIn(
      state.data,
      ["value", valueSubfield, index, field],
      trim ? value.trim() : value
    ),
    errors: cleanErrors(state.errors),
    extraErrors: cleanErrors(state.extraErrors),
  }))
}

interface InputIndexedProps {
  name: string
  tokens: any
  token: any
  index: number
  valueSubfield: string
  [key: string]: any
}

export const InputIndexed: React.FC<InputIndexedProps> = ({
  name,
  tokens,
  token,
  index,
  valueSubfield,
  ...props
}) => {
  const form = React.useContext(fc.FormContext)
  const inputName = name
  const tokenName = form?.data?.name

  const error = form?.errors?.value?.[valueSubfield]?.[index]?.[inputName]
  const value = form?.data?.value?.[valueSubfield]?.[index]?.[inputName] ?? ""

  const resolveStream = useMemo(() => {
    const val = token?.value?.[valueSubfield]?.[index]?.[inputName]
    if (val) {
      return new rx.BehaviorSubject(val)
    }
    return new rx.Subject()
  }, [token, valueSubfield, index, inputName])

  const [hint, setHint] = useState<{ message: string; type: string }>({})

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = dom.getInputValue(event.target)
      onIndexedInputChange(form, inputName, index, value, valueSubfield, true)
      rx.push!(resolveStream, value)
    },
    [inputName, index, valueSubfield, resolveStream, form]
  )

  const resolvedProps = {
    ...props,
    onChange,
    value,
    variant: "comfortable",
    hintMessage: hint.message,
    hintType: hint.type,
  }

  if (error) {
    resolvedProps.hintType = "error"
    resolvedProps.hintMessage = error.message
  }

  if (!error && inputName === "reference") {
    resolvedProps.hintFormated = true
  }

  useEffect(() => {
    const subscription = resolveStream.pipe(
      rx.debounce(300),
      rx.mergeMap((val) =>
        resolveValue(tokens, token, tokenName, val).pipe(
          rx.map((result) =>
            result.error
              ? { error: wte.resolveErrorAssocMessage(result.error) }
              : result
          )
        )
      ),
      rx.subscribe(({ error, value }: { error?: any; value?: any }) => {
        const currentValue = form?.data?.value?.[valueSubfield]?.[index]?.[inputName]

        if (error && str.isEmpty(error?.value)) {
          form && fm.update(fm.dissocIn, ["errors", "value", valueSubfield, index, inputName])
          form && fm.update(fm.dissocIn, ["data", "value", valueSubfield, index, inputName])
          form && fm.update(fm.dissocIn, ["extraErrors", "value"])
          setHint({ message: "", type: "" })
        } else if (error) {
          const errorMsg = error.message
          form && fm.update(fm.assocIn, ["extraErrors", "value", valueSubfield, index, inputName], { message: errorMsg })
          setHint({ message: errorMsg, type: "error" })
        } else {
          const message = `Resolved value: ${dwtf.formatTokenValue(value)}`
          form && fm.update(fm.dissocIn, ["errors", "value"])
          form && fm.update(fm.dissocIn, ["extraErrors", "value"])

          if (currentValue === String(value)) {
            setHint({ message: "", type: "" })
          } else {
            setHint({ message, type: "hint" })
          }
        }
      })
    )

    return () => rx.dispose!(subscription)
  }, [resolveStream, tokens, token, inputName, index, valueSubfield, tokenName, form])

  return <Input {...resolvedProps} />
}
