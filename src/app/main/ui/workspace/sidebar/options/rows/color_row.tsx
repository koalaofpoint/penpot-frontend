// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react"
import * as D from "app/common/data"
import * as DM from "app/common/data/macros"
import * as CLR from "app/common/types/color"
import {defaultColor} from "app/common/types/shape/attrs"
import * as TK from "app/common/types/token"
import * as CFG from "app/config"
import * as Modal from "app/main/data/modal"
import * as DWC from "app/main/data/workspace/colors"
import {refs} from "app/main/refs"
import {store} from "app/main/store"
import {ColorInput} from "app/main/ui/components/color-input"
import {NumericInput} from "app/main/ui/components/numeric-input"
import {ReorderHandler} from "app/main/ui/components/reorder-handler"
import {Ctx} from "app/main/ui/context"
import {IconButton} from "app/main/ui/ds/buttons/icon-button"
import * as I from "app/main/ui/ds/foundations/assets/icon"
import {Tooltip} from "app/main/ui/ds/tooltip/tooltip"
import {Swatch} from "app/main/ui/ds/utilities/swatch"
import * as Formats from "app/main/ui/formats"
import * as H from "app/main/ui/hooks"
import * as UC from "app/util/color"
import * as DOM from "app/util/dom"
import {_tr} from "app/util/i18n"

function opacityToString(opacity: any): string {
  if (opacity === ":multiple") {
    return ""
  }
  const value = D.coalesce(opacity, 1) * 100
  return Formats.formatNumber(value)
}

interface ColorInfoWrapperProps {
  color: any
  className?: string
  handleClickColor?: (color: any) => void
  children?: React.ReactNode
  selectOnFocus?: boolean
  opacity?: boolean
  onFocus?: () => void
  onBlur?: () => void
  onOpacityChange?: (value: number) => void
}

const ColorInfoWrapper: React.FC<ColorInfoWrapperProps> = (props) => {
  const {
    color,
    className,
    handleClickColor,
    children,
    selectOnFocus,
    opacity: showOpacity,
    onFocus,
    onBlur,
    onOpacityChange,
  } = props

  return (
    <div className="color-info">
      <div className={className}>
        <div className="color-bullet-wrapper">
          <Swatch
            background={color}
            onClick={handleClickColor}
            size="small"
          />
        </div>
        {children}
      </div>
      {showOpacity && (
        <div className="opacity-element-wrapper">
          <span className="icon-text">%</span>
          <NumericInput
            value={opacityToString(color?.["opacity"])}
            className="opacity-input"
            placeholder="--"
            selectOnFocus={selectOnFocus}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onOpacityChange}
            data-testid="opacity-input"
            defaultValue={100}
            min={0}
            max={100}
          />
        </div>
      )}
    </div>
  )
}

interface ColorTokenRowProps {
  activeTokens: any
  appliedTokenName: string
  color: any
  onSwatchClickToken: (color: any, event: any) => void
  detachToken: (tokenName: string) => void
  openModalFromToken: (event: any) => void
}

const ColorTokenRow: React.FC<ColorTokenRowProps> = (props) => {
  const {
    activeTokens,
    appliedTokenName,
    color,
    onSwatchClickToken,
    detachToken,
    openModalFromToken,
  } = props

  // Force evaluation if activeTokens is a delay
  const actualActiveTokens = "then" in (activeTokens as any)
    ? (activeTokens as any).deref()
    : activeTokens

  const activeColorTokens = actualActiveTokens?.["color"]

  const token = activeColorTokens?.find((t: any) => t["name"] === appliedTokenName)

  const onDetachToken = React.useCallback(() => {
    const tokenName = token?.["name"] || appliedTokenName
    detachToken(tokenName)
  }, [detachToken, token, appliedTokenName])

  const hasErrors = token?.["errors"] != null
  const tokenName = token?.["name"]
  const resolved = token?.["resolved-value"]
  const notActive = !actualActiveTokens || actualActiveTokens.length === 0 || !token

  const id = DM.str(token?.["id"], "-name")
  const tokenNameRef = React.useRef<HTMLDivElement>(null)

  const swatchTooltipContent = notActive
    ? _tr("ds.inputs.token-field.no-active-token-option")
    : hasErrors
    ? _tr("color-row.token-color-row.deleted-token")
    : _tr("workspace.tokens.resolved-value", resolved)

  const nameTooltipContent = notActive
    ? _tr("ds.inputs.token-field.no-active-token-option")
    : hasErrors
    ? _tr("color-row.token-color-row.deleted-token")
    : `<div><span>${_tr("workspace.tokens.token-name")}: </span><span class="token-name-tooltip">${appliedTokenName}</span></div>`

  return (
    <div className="color-info">
      <div className={[
        "token-color-wrapper",
        hasErrors ? "token-color-with-errors" : "",
        notActive ? "token-color-not-active" : "",
      ].filter(Boolean).join(" ")}>
        <div className="color-bullet-wrapper">
          {(hasErrors || notActive) && <div className="error-dot"/>}
          <Swatch
            background={color}
            tooltipContent={swatchTooltipContent}
            onClick={onSwatchClickToken}
            hasErrors={hasErrors || notActive}
            size="small"
          />
        </div>
        <Tooltip
          content={nameTooltipContent}
          id={id}
          aria-label={`${_tr("workspace.tokens.token-name")}: ${appliedTokenName}`}
          triggerRef={tokenNameRef}
          className="token-tooltip"
        >
          <div
            className="token-name"
            ref={tokenNameRef}
            aria-labelledby={id}
          >
            {tokenName || appliedTokenName}
          </div>
        </Tooltip>
        <div className="token-actions">
          <IconButton
            variant="action"
            aria-label={_tr("ds.inputs.token-field.detach-token")}
            onClick={onDetachToken}
            icon={I.detach}
          />
          <IconButton
            variant="action"
            aria-label={_tr("ds.inputs.numeric-input.open-token-list-dropdown")}
            onClick={openModalFromToken}
            icon={I.tokens}
          />
        </div>
      </div>
    </div>
  )
}

interface ColorRowProps {
  index?: number
  color: any
  className?: string
  disableGradient?: boolean
  disableOpacity?: boolean
  disableImage?: boolean
  disablePicker?: boolean
  hidden?: boolean
  onChange?: (color: any, index?: number) => void
  onReorder?: (fromPos: number, toPos: number) => void
  onDetach?: (index: number, color: any) => void
  onOpen?: (color: any) => void
  onClose?: (value: any, opacity: any, id: any, fileId: any) => void
  onRemove?: (index: number) => void
  origin?: string
  onDetachToken?: (token: any) => void
  disableDrag?: React.MutableRefObject<boolean>
  onFocus?: () => void
  onBlur?: () => void
  selectOnly?: (color: any) => void
  selectOnFocus?: boolean
  onTokenChange?: (token: any) => void
  appliedToken?: string
}

export const ColorRow: React.FC<ColorRowProps> = (props) => {
  const {
    index = 0,
    color,
    className,
    disableGradient,
    disableOpacity,
    disableImage,
    disablePicker,
    hidden,
    onChange,
    onReorder,
    onDetach,
    onOpen,
    onClose,
    onRemove,
    origin,
    onDetachToken,
    disableDrag,
    onFocus,
    onBlur,
    selectOnly,
    selectOnFocus,
    onTokenChange,
    appliedToken,
  } = props

  const tokenColor = CFG.flags.has("token-color")
  const libraries = React.useRef(refs.files).current

  const colorWithoutHash = React.useMemo(
    () => {
      const c = color?.["color"]
      return CLR.removeHash(c)
    },
    [color]
  )

  const fileId = color?.["ref-file"] || color?.["file-id"]
  const colorId = color?.["ref-id"] || color?.["id"]
  const srcColors = DM.getIn(libraries, [fileId, "data", "colors"])
  const colorName = DM.getIn(srcColors, [colorId, "name"])

  const hasMultipleColors = UC.multiple(color)
  const libraryColor = !!(colorId && colorName && !hasMultipleColors)
  const gradientColor = !hasMultipleColors && color?.["gradient"] && DM.getIn(color, ["gradient", "type"])
  const imageColor = !hasMultipleColors && color?.["image"]

  const [isEditingText, setIsEditingText] = React.useState(false)

  const activeTokensCtx = React.useContext(Ctx.ActiveTokensByTypeContext)
  const activeTokens = React.useMemo(() => {
    const actualOrigin = origin === "color-selection" ? "fill" : origin
    return (() => {
      const tokens = activeTokensCtx
      const keys = TK.tokensByInput[actualOrigin as keyof typeof TK.tokensByInput]
      if (!keys) return null
      const selected = {} as Record<string, any>
      for (const key of keys) {
        if (tokens[key]) selected[key] = tokens[key]
      }
      return Object.keys(selected).length > 0 ? selected : null
    })()
  }, [activeTokensCtx, origin])

  const onFocusCallback = React.useCallback(
    () => {
      setIsEditingText(true)
      if (onFocus) onFocus()
    },
    [onFocus]
  )

  const onBlurCallback = React.useCallback(
    () => {
      setIsEditingText(false)
      if (onBlur) onBlur()
    },
    [onBlur]
  )

  const parseColor = React.useCallback(
    (c: any) => ({...c, color: c.color || c.value})
  , [])

  const detachValue = React.useCallback(
    () => {
      if (onDetach) onDetach(index, color)
    },
    [onDetach, index, color]
  )

  const handleSelect = React.useCallback(
    () => {
      if (!selectOnly) return
      const c = appliedToken
        ? {...color, hasTokenApplied: true, tokenName: appliedToken}
        : color
      selectOnly(c)
    },
    [selectOnly, color, appliedToken]
  )

  const onColorChange = React.useCallback(
    (value: any, _event?: any) => {
      const newColor = {
        ...color,
        color: value,
      }
      delete newColor["gradient"]
      const attrs = CLR.colorAttrs
      const cleaned = Object.keys(attrs).length > 0
        ? Object.keys(attrs).reduce((acc, k) => {
            if (newColor[k] !== undefined) acc[k] = newColor[k]
            return acc
          }, {} as any)
        : newColor

      store.emit(DWC.addRecentColor(cleaned))
      if (onChange) onChange(cleaned, index)
    },
    [color, index, onChange]
  )

  const onOpacityChange = React.useCallback(
    (value: number) => {
      const newColor = {
        ...color,
        opacity: value / 100,
      }
      delete newColor["ref-id"]
      delete newColor["ref-file"]
      const attrs = CLR.colorAttrs
      const cleaned = Object.keys(attrs).length > 0
        ? Object.keys(attrs).reduce((acc, k) => {
            if (newColor[k] !== undefined) acc[k] = newColor[k]
            return acc
          }, {} as any)
        : newColor

      store.emit(DWC.addRecentColor(cleaned))
      if (onChange) onChange(cleaned, index)
    },
    [color, index, onChange]
  )

  const openModal = React.useCallback(
    (c: any, pos: any, tab: any) => {
      let resolvedColor = c
      if (hasMultipleColors) {
        resolvedColor = {color: defaultColor, opacity: 1}
      } else if (color?.["opacity"] === ":multiple") {
        resolvedColor = {...c, opacity: 1}
      }

      const modalProps = {
        x: pos?.x,
        y: pos?.y,
        disableGradient: disableGradient,
        disableOpacity: disableOpacity,
        disableImage: disableImage,
        onChange: (newColor: any) => onChange?.(newColor, index),
        onTokenChange: onTokenChange,
        onClose: (value: any, opacity: any, id: any, fileId: any) => {
          if (onClose) onClose(value, opacity, id, fileId)
        },
        activeTokens: activeTokens,
        appliedToken: appliedToken,
        colorOrigin: origin,
        tab: tab,
        origin: "sidebar",
        data: resolvedColor,
      }

      if (onOpen && typeof onOpen === "function") {
        onOpen(resolvedColor)
      }

      if (!disablePicker) {
        Modal.show(":colorpicker", modalProps)
      }
    },
    [
      hasMultipleColors,
      disableGradient,
      disableOpacity,
      disableImage,
      onChange,
      onTokenChange,
      onClose,
      activeTokens,
      appliedToken,
      origin,
      index,
      onOpen,
      disablePicker,
      color,
    ]
  )

  const handleClickColor = React.useCallback(
    (c: any, event: any) => {
      const cpos = DOM.getClientPosition(event)
      openModal(c, cpos, undefined)
    },
    [openModal]
  )

  const openModalFromToken = React.useCallback(
    (event: any) => {
      const cpos = DOM.getClientPosition(event)
      const x = cpos.x - 215
      const y = cpos.y
      openModal(color, {x, y}, ":token-color")
    },
    [openModal, color]
  )

  const onSwatchClickToken = React.useCallback(
    (c: any, event: any) => {
      const cpos = DOM.getClientPosition(event)
      openModal(c, cpos, ":token-color")
    },
    [openModal]
  )

  const detachTokenCallback = React.useCallback(
    (token: any) => {
      if (onDetachToken) onDetachToken(token)
    },
    [onDetachToken]
  )

  const onRemoveCallback = React.useCallback(
    () => {
      if (onRemove) onRemove(index)
    },
    [onRemove, index]
  )

  const prevColor = H.usePrevious(color)

  const onDrop = React.useCallback(
    (relativePos: any, data: any) => {
      if (!onReorder) return
      const fromPos = data["index"]
      const toSpaceBetweenPos = relativePos === "bot" ? index + 1 : index
      onReorder(fromPos, toSpaceBetweenPos)
    },
    [onReorder, index]
  )

  const dprops = onReorder
    ? H.useSortable({
        dataType: "penpot/color-row",
        onDrop,
        disabled: disableDrag?.current ?? false,
        detectCenter: false,
        data: {index},
      })
    : {over: null, ref: null}

  const rowClassName = [
    "color-data",
    hidden ? "hidden" : "",
    dprops["over"] === "top" ? "dnd-over-top" : "",
    dprops["over"] === "bot" ? "dnd-over-bot" : "",
  ].filter(Boolean).join(" ")

  React.useEffect(() => {
    if (!disablePicker && prevColor !== color) {
      Modal.updateProps(":colorpicker", {data: parseColor(color)})
    }
  }, [color, prevColor, disablePicker, parseColor])

  const renderContent = () => {
    if (tokenColor && appliedToken) {
      return (
        <ColorTokenRow
          activeTokens={activeTokens}
          appliedTokenName={appliedToken}
          color={{...color, refId: undefined, refFile: undefined}}
          onSwatchClickToken={onSwatchClickToken}
          detachToken={detachTokenCallback}
          openModalFromToken={openModalFromToken}
        />
      )
    }

    if (libraryColor) {
      return (
        <ColorInfoWrapper
          className={["color-name-wrapper", "library-name-wrapper"].join(" ")}
          handleClickColor={handleClickColor}
          opacity={false}
          color={color}
        >
          <div className="color-name" title={String(colorName)}>
            {String(colorName)}
          </div>
          <IconButton
            variant="ghost"
            className="detach-btn"
            aria-label={_tr("settings.detach")}
            onClick={detachValue}
            icon={I.detach}
          />
        </ColorInfoWrapper>
      )
    }

    if (gradientColor) {
      return (
        <ColorInfoWrapper
          className={["color-name-wrapper", !disableOpacity ? "gradient-name-wrapper" : ""].filter(Boolean).join(" ")}
          handleClickColor={handleClickColor}
          color={color}
          opacity={!disableOpacity}
          selectOnFocus={selectOnFocus}
          onFocus={onFocusCallback}
          onBlur={onBlurCallback}
          onOpacityChange={onOpacityChange}
        >
          <div className="color-name">
            {UC.gradientTypeToString(DM.getIn(color, ["gradient", "type"]))}
          </div>
        </ColorInfoWrapper>
      )
    }

    if (imageColor) {
      return (
        <ColorInfoWrapper
          className={["color-name-wrapper", !disableOpacity ? "no-opacity" : ""].filter(Boolean).join(" ")}
          handleClickColor={handleClickColor}
          color={color}
          opacity={!disableOpacity}
          selectOnFocus={selectOnFocus}
          onFocus={onFocusCallback}
          onBlur={onBlurCallback}
          onOpacityChange={onOpacityChange}
        >
          <div className="color-name">
            {_tr("media.image")}
          </div>
        </ColorInfoWrapper>
      )
    }

    return (
      <ColorInfoWrapper
        className={[
          "color-name-wrapper",
          disableOpacity || hasMultipleColors ? "no-opacity" : "",
          isEditingText ? "editing" : "",
        ].filter(Boolean).join(" ")}
        handleClickColor={handleClickColor}
        color={color}
        opacity={!(disableOpacity || hasMultipleColors)}
        selectOnFocus={selectOnFocus}
        onFocus={onFocusCallback}
        onBlur={onBlurCallback}
        onOpacityChange={onOpacityChange}
      >
        <span className="color-input-wrapper">
          <ColorInput
            value={hasMultipleColors ? "" : colorWithoutHash}
            placeholder={_tr("settings.multiple")}
            data-index={index}
            className="color-input"
            onFocus={onFocusCallback}
            onBlur={onBlurCallback}
            onChange={onColorChange}
          />
        </span>
      </ColorInfoWrapper>
    )
  }

  return (
    <div className={[className, rowClassName].filter(Boolean).join(" ")}>
      {onReorder && <ReorderHandler/>}

      {renderContent()}

      {onRemove && (
        <IconButton
          variant="ghost"
          aria-label={_tr("settings.remove-color")}
          onClick={onRemoveCallback}
          icon={I.remove}
        />
      )}

      {selectOnly && (
        <IconButton
          variant="ghost"
          aria-label={_tr("settings.select-this-color")}
          onClick={handleSelect}
          icon={I.move}
        />
      )}
    </div>
  )
}
