// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react"
import { useCallback, useState, useMemo, useRef, useEffect } from "react"
import * as color from "app.common.colors"
import * as d from "app.common.data"
import * as dm from "app.common.data.macros"
import * as cl from "app.common.types.color"
import * as cto from "app.common.types.token"
import * as ctob from "app.common.types.tokens-lib"
import * as cf from "app.config"
import * as sd from "app.main.data.style-dictionary"
import * as tinycolor from "app.main.data.tinycolor"
import * as ts from "app.main.data.tokenscript"
import * as wte from "app.main.data.workspace.tokens.errors"
import * as dwtf from "app.main.data.workspace.tokens.format"
import * as refs from "app.main.refs"
import { Input } from "app.main.ui.ds.controls.input"
import { Swatch } from "app.main.ui.ds.utilities.swatch"
import * as fc from "app.main.ui.forms"
import * as colorpicker from "app.main.ui.workspace.colorpicker"
import { RampSelector } from "app.main.ui.workspace.colorpicker.ramp"
import * as dom from "app.util.dom"
import * as fm from "app.util.forms"
import { useTranslation } from "app.util.i18n"
import * as rx from "beicon.v2/core"
import * as str from "cuerdas.core"

interface ColorObj {
  hex: string
  r: number
  g: number
  b: number
  h: number
  s: number
  v: number
  alpha: number
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

  const resolveValueObservable = cf.flags.has("tokenscript")
    ? rx.of(ts.resolveTokens(updatedTokens))
    : sd.resolveTokensInteractive(updatedTokens)

  return resolveValueObservable.pipe(
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

function hexToColorObj(hex: string): ColorObj | null {
  const tc = tinycolor.validColor(hex)
  if (!tc) return null

  const hexStr = tinycolor.toHexString(tc)
  const alpha = tinycolor.alpha(tc)
  const [r, g, b] = cl.hexToRgb(hexStr)
  const [h, s, v] = cl.hexToHsv(hexStr)

  return { hex: hexStr, r, g, b, h, s, v, alpha }
}

interface RampProps {
  color: ColorObj
  onChange: (hex: string, alpha: number) => void
}

const Ramp: React.FC<RampProps> = ({ color, onChange }) => {
  const wrapperNodeRef = useRef<HTMLDivElement>(null)
  const draggingRef = useRef(false)

  const onStartDrag = useCallback(() => {
    draggingRef.current = true
  }, [])

  const onFinishDrag = useCallback(() => {
    draggingRef.current = false
  }, [])

  const [internalColor, setInternalColor] = useState<ColorObj | null>(
    () => color
  )

  const onChangeHandler = useCallback(
    (selectorColor: ColorObj) => {
      if (draggingRef.current && selectorColor.hex) return
      setInternalColor(selectorColor)
      onChange(selectorColor.hex, selectorColor.alpha)
    },
    [onChange]
  )

  useEffect(() => {
    const tc = tinycolor.validColor(color.hex)
    if (tc && tinycolor.toHexString(tc) !== internalColor?.hex) {
      setInternalColor(hexToColorObj(color.hex))
    }
  }, [color])

  colorpicker.useColorPickerCssVariables(wrapperNodeRef, internalColor)

  return (
    <div ref={wrapperNodeRef}>
      <RampSelector
        color={internalColor}
        onStartDrag={onStartDrag}
        onFinishDrag={onFinishDrag}
        onChange={onChangeHandler}
      />
    </div>
  )
}

interface ColorInputProps {
  name: string
  tokens: any
  token: any
  [key: string]: any
}

export const ColorInput: React.FC<ColorInputProps> = ({
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
  const extraError = form?.extraErrors?.[inputName]
  const value = form?.data?.[inputName] ?? ""

  const colorResolved = form?.data?.colorResult ?? ""

  const validColor =
    tinycolor.validColor(value) || tinycolor.validColor(colorResolved)

  const profile = refs.profile.deref()

  const defaultBulletColor =
    profile?.theme === "light"
      ? color.backgroundQuaternaryLight
      : color.backgroundQuaternary

  const hex = validColor
    ? tinycolor.toHexString(tinycolor.validColor(validColor)!)
    : defaultBulletColor

  const alpha = validColor ? tinycolor.alpha(tinycolor.validColor(validColor)!) : 1

  const resolveStream = useMemo(() => {
    if (token?.value) {
      return new rx.BehaviorSubject(token.value)
    }
    return new rx.Subject()
  }, [token])

  const [hint, setHint] = useState<{ message: string; type: string }>({})

  const [colorRampOpen, setColorRampOpen] = useState(false)

  const onClickSwatch = useCallback(() => {
    setColorRampOpen((prev) => !prev)
  }, [])

  const swatchEl = (
    <Swatch
      background={{ color: hex, opacity: alpha }}
      showTooltip={false}
      data-testid="token-form-color-bullet"
      className={css("slot-start")}
      onClick={onClickSwatch}
    />
  )

  const onChangeValue = useCallback(
    (newHex: string, newAlpha: number) => {
      const prevInputColor = tinycolor.validColor(value)
      const prevComputedColor = !prevInputColor
        ? tinycolor.validColor(value)
        : null
      const prevFormat = prevInputColor
        ? tinycolor.colorFormat(prevInputColor)
        : prevComputedColor
          ? tinycolor.colorFormat(prevComputedColor)
          : null

      const toRgba =
        newAlpha < 1 && (prevFormat === "hex" || !prevFormat)
      const toHex = !prevFormat && newAlpha === 1
      const format = toRgba
        ? "rgba"
        : toHex
          ? "hex"
          : prevFormat || "hex"

      const colorValue = tinycolor
        .setAlpha(tinycolor.validColor(newHex)!, newAlpha || 1)
        .toString(format)

      if (value !== colorValue) {
        fm.onInputChange(form, inputName, colorValue, true)
        rx.push!(resolveStream, colorValue)
      }
    },
    [value, resolveStream, inputName, form]
  )

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const rawValue = dom.getInputValue(event.target)
      const finalValue = tinycolor.hexWithoutHashPrefix(rawValue)
        ? `#${rawValue}`
        : rawValue
      fm.onInputChange(form, inputName, finalValue, true)
      rx.push!(resolveStream, finalValue)
    },
    [inputName, resolveStream, form]
  )

  const resolvedProps = {
    ...props,
    onChange,
    value: value || "",
    hintMessage: hint.message,
    variant: "comfortable",
    slotStart: swatchEl,
    hintType: hint.type,
  }

  if (error && touched) {
    resolvedProps.hintType = "error"
    resolvedProps.hintMessage = error.message
  } else if (extraError && touched) {
    resolvedProps.hintType = "error"
    resolvedProps.hintMessage = extraError.message
  }

  useEffect(() => {
    const subscription = resolveStream.pipe(
      rx.debounce(300),
      rx.mergeMap((val) =>
        resolveValue(tokens, token, tokenName, val).pipe(
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
            form && fm.update(fm.assocIn, ["data", "colorResult"], "")
            setHint({ message: error, type: "error" })
          } else {
            const message = `Resolved value: ${dwtf.formatTokenValue(value)}`
            form && fm.update(fm.updateIn, ["extraErrors"], fm.dissoc, inputName)
            form && fm.update(fm.assocIn, ["data", "colorResult"], value)
            setHint({ message, type: "hint" })
          }
        }
      })
    )

    return () => rx.dispose!(subscription)
  }, [resolveStream, tokens, token, tokenName, inputName, form])

  return (
    <>
      <Input {...resolvedProps} />
      {colorRampOpen && <Ramp color={hexToColorObj(value) || { hex, r: 0, g: 0, b: 0, h: 0, s: 0, v: 0, alpha: 1 }} onChange={onChangeValue} />}
    </>
  )
}

interface IndexedColorInputProps {
  name: string
  tokens: any
  token: any
  index: number
  valueSubfield: string
  [key: string]: any
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
    errors
      ?.delete?.(field)
      ?.delete?.(valueSubfield)
      ?.delete?.(index)

  fm.update(form, (state: any) => ({
    ...state,
    data: fm.assocIn(state.data, ["value", valueSubfield, index, field], trim ? value.trim() : value),
    errors: cleanErrors(state.errors),
    extraErrors: cleanErrors(state.extraErrors),
  }))
}

export const IndexedColorInput: React.FC<IndexedColorInputProps> = ({
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
  const colorResolved =
    form?.data?.value?.[valueSubfield]?.[index]?.colorResult ?? ""

  const validColor =
    tinycolor.validColor(value) || tinycolor.validColor(colorResolved)

  const profile = refs.profile.deref()

  const defaultBulletColor =
    profile?.theme === "light"
      ? color.backgroundQuaternaryLight
      : color.backgroundQuaternary

  const hex = validColor
    ? tinycolor.toHexString(tinycolor.validColor(validColor)!)
    : defaultBulletColor

  const alpha = validColor ? tinycolor.alpha(tinycolor.validColor(validColor)!) : 1

  const resolveStream = useMemo(() => {
    const val = token?.value?.[valueSubfield]?.[index]?.[inputName]
    if (val) {
      return new rx.BehaviorSubject(val)
    }
    return new rx.Subject()
  }, [token, valueSubfield, index, inputName])

  const [hint, setHint] = useState<{ message: string; type: string }>({})

  const [colorRampOpen, setColorRampOpen] = useState(false)

  const onClickSwatch = useCallback(() => {
    setColorRampOpen((prev) => !prev)
  }, [])

  const swatchEl = (
    <Swatch
      background={{ color: hex, opacity: alpha }}
      showTooltip={false}
      data-testid="token-form-color-bullet"
      className={css("slot-start")}
      onClick={onClickSwatch}
    />
  )

  const onChangeValue = useCallback(
    (newHex: string, newAlpha: number) => {
      const prevInputColor = tinycolor.validColor(value)
      const prevComputedColor = !prevInputColor
        ? tinycolor.validColor(value)
        : null
      const prevFormat = prevInputColor
        ? tinycolor.colorFormat(prevInputColor)
        : prevComputedColor
          ? tinycolor.colorFormat(prevComputedColor)
          : null

      const toRgba =
        newAlpha < 1 && (prevFormat === "hex" || !prevFormat)
      const toHex = !prevFormat && newAlpha === 1
      const format = toRgba
        ? "rgba"
        : toHex
          ? "hex"
          : prevFormat || "hex"

      const colorValue = tinycolor
        .setAlpha(tinycolor.validColor(newHex)!, newAlpha || 1)
        .toString(format)

      if (value !== colorValue) {
        onIndexedInputChange(form, inputName, index, colorValue, valueSubfield, true)
        rx.push!(resolveStream, colorValue)
      }
    },
    [value, resolveStream, inputName, index, valueSubfield, form]
  )

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const rawValue = dom.getInputValue(event.target)
      const finalValue = tinycolor.hexWithoutHashPrefix(rawValue)
        ? `#${rawValue}`
        : rawValue
      onIndexedInputChange(form, inputName, index, finalValue, valueSubfield, true)
      rx.push!(resolveStream, finalValue)
    },
    [inputName, index, valueSubfield, resolveStream, form]
  )

  const resolvedProps = {
    ...props,
    onChange,
    value: value || "",
    hintMessage: hint.message,
    slotStart: swatchEl,
    hintType: hint.type,
  }

  if (error) {
    resolvedProps.hintType = "error"
    resolvedProps.hintMessage = error.message
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
          form && fm.update(fm.updateIn, ["errors", "value", valueSubfield, index], fm.dissoc, inputName)
          form && fm.update(fm.updateIn, ["data", "value", valueSubfield, index], fm.dissoc, inputName)
          form && fm.update(fm.updateIn, ["data", "value", valueSubfield, index, "colorResult"], "")
          form && fm.update(fm.dissocIn, ["extraErrors", "value"])
          setHint({ message: "", type: "" })
        } else if (error) {
          const errorMsg = error.message
          form && fm.update(fm.assocIn, ["extraErrors", "value", valueSubfield, index, inputName], { message: errorMsg })
          form && fm.update(fm.assocIn, ["data", "value", valueSubfield, index, "colorResult"], "")
          setHint({ message: errorMsg, type: "error" })
        } else {
          const message = `Resolved value: ${dwtf.formatTokenValue(value)}`
          form && fm.update(fm.dissocIn, ["errors", "value"])
          form && fm.update(fm.dissocIn, ["extraErrors", "value"])
          form && fm.update(fm.assocIn, ["data", "value", valueSubfield, index, "colorResult"], dwtf.formatTokenValue(value))
          if (currentValue === String(value)) {
            setHint({ message: "", type: "" })
          } else {
            setHint({ message, type: "hint" })
          }
        }
      })
    )

    return () => rx.dispose!(subscription)
  }, [resolveStream, tokens, token, tokenName, inputName, index, valueSubfield, form])

  return (
    <>
      <Input {...resolvedProps} />
      {colorRampOpen && <Ramp color={hexToColorObj(value) || { hex, r: 0, g: 0, b: 0, h: 0, s: 0, v: 0, alpha: 1 }} onChange={onChangeValue} />}
    </>
  )
}

function css(className: string): string {
  return className
}
