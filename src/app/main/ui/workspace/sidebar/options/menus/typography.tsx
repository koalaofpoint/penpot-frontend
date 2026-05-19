// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import * as rvt from "react-virtualized"
import * as d from "app.common.data"
import * as dm from "app.common.data.macros"
import * as ex from "app.common.exceptions"
import * as txt from "app.common.types.text"
import { maxInputLength } from "app.main.constants"
import * as dcm from "app.main.data.common"
import * as fts from "app.main.data.fonts"
import * as dsc from "app.main.data.shortcuts"
import * as features from "app.main.features"
import * as fonts from "app.main.fonts"
import * as refs from "app.main.refs"
import { store } from "app.main.store"
import { EditableSelect } from "app.main.ui.components.editable-select"
import { NumericInput } from "app.main.ui.components.numeric-input"
import { RadioButton, RadioButtons } from "app.main.ui.components.radio-buttons"
import { SearchBar } from "app.main.ui.components.search-bar"
import { Select } from "app.main.ui.components.select"
import { ctx } from "app.main.ui.context"
import * as i from "app.main.ui.ds.foundations.assets.icon"
import * as deprecatedIcon from "app.main.ui.icons"
import * as dom from "app.util.dom"
import { tr } from "app.util.i18n"
import * as kbd from "app.util.keyboard"
import * as ust from "app.util.strings"
import * as tm from "app.util.timers"
import * as str from "cuerdas.core"
import * as events from "goog.events"
import * as stl from "app.main.style"

function attrToString(value: any): string {
  if (value === ":multiple") {
    return ""
  }
  return ust.formatPrecision(value, 2)
}

function getNextFont(current: any, fonts: any[]): any {
  if (fonts.length > 0) {
    const index = d.indexOfPred(fonts, (f: any) => f.id === current.id)
    const next = ex.ignoring(nth(fonts, (index || -1) + 1))
    return next || first(fonts)
  }
  return current
}

function getPrevFont(current: any, fonts: any[]): any {
  if (fonts.length > 0) {
    const index = d.indexOfPred(fonts, (f: any) => f.id === current.id)
    const next = ex.ignoring(nth(fonts, index - 1))
    return next || peek(fonts)
  }
  return current
}

interface FontItemProps {
  font: any
  isCurrent: boolean
  onClick: (font: any) => void
  style?: any
}

const FontItem: React.FC<FontItemProps> = React.memo(({ font, isCurrent, onClick, style }) => {
  const itemRef = useRef<HTMLDivElement>(null)
  const handleClick = useCallback(() => onClick(font), [font, onClick])

  useEffect(() => {
    if (isCurrent && itemRef.current) {
      const element = itemRef.current
      if (!dom.isInViewport(element)) {
        dom.scrollIntoView(element)
      }
    }
  }, [isCurrent])

  return (
    <div className={stl.css("font-wrapper")} style={style} ref={itemRef} onClick={handleClick}>
      <div className={stl.cssCase("font-item", { selected: isCurrent })}>
        <span className={stl.css("label")}>{font.name}</span>
        <span className={stl.css("icon")}>
          {isCurrent && deprecatedIcon.tick}
        </span>
      </div>
    </div>
  )
})

declare function rowRenderer(fonts: any[], selected: any, onSelect: (font: any) => void, props: any): any

function filterFonts({ term, backends }: { term: string, backends?: any }, fonts: any[]): any[] {
  const lowerTerm = str.lower(term)
  let xform = (arr: any[]) => arr.map((x) => x)

  if (term) {
    xform = (arr) => arr.filter((f) => str.includes(str.lower(f.name), lowerTerm))
  }

  if (backends && backends.length > 0) {
    xform = (arr) => arr.filter((f) => backends.includes(f.backend))
  }

  return xform(fonts)
}

interface FontSelectorProps {
  onSelect: (font: any) => void
  onClose: () => void
  currentFont: any
  showRecent?: boolean
  fullSize?: boolean
}

const FontSelector: React.FC<FontSelectorProps> = ({
  onSelect,
  onClose,
  currentFont,
  showRecent = true,
  fullSize = false
}) => {
  const [selected, setSelected] = useState(currentFont)
  const [state, setState] = useState({ term: "", backends: new Set() as Set<string> })
  const flistRef = useRef<any>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const fontsDb = useDeref(fonts.fonts) || []
  const filteredFonts = useMemo(() => filterFonts(state, fontsDb), [state, fontsDb])

  const recentFontsDb = useDeref(refs.recentFonts) || []
  const recentFonts = useMemo(() => filterFonts(state, recentFontsDb), [state, recentFontsDb])

  const fullSizeEnabled = fullSize && showRecent

  const selectNext = useCallback((event: any) => {
    dom.stopPropagation(event)
    dom.preventDefault(event)
    setSelected((prev) => getNextFont(prev, filteredFonts))
  }, [filteredFonts])

  const selectPrev = useCallback((event: any) => {
    dom.stopPropagation(event)
    dom.preventDefault(event)
    setSelected((prev) => getPrevFont(prev, filteredFonts))
  }, [filteredFonts])

  const onKeyDown = useCallback((event: any) => {
    if (kbd.upArrow(event)) selectPrev(event)
    else if (kbd.downArrow(event)) selectNext(event)
    else if (kbd.esc(event)) onClose()
    else if (kbd.enter(event)) onClose()
    else if (inputRef.current) dom.focus(inputRef.current)
  }, [selectPrev, selectNext, onClose])

  const onFilterChange = useCallback((event: any) => {
    setState((prev) => ({ ...prev, term: event }))
  }, [])

  const onSelectAndClose = useCallback((font: any) => {
    onSelect(font)
    onClose()
  }, [onSelect, onClose])

  useEffect(() => {
    const listener = events.listen(document as any, "keydown", onKeyDown)
    return () => events.unlistenByKey(listener)
  }, [onKeyDown])

  useEffect(() => {
    if (flistRef.current && selected) {
      const inst = flistRef.current
      if (selected.index != null) {
        inst.scrollToRow(selected.index)
      }
    }
  }, [selected])

  useEffect(() => {
    onSelect(selected)
  }, [selected, onSelect])

  useEffect(() => {
    store.emit(dsc.pushShortcuts("typography", {}))
    return () => {
      store.emit(dsc.popShortcuts("typography"))
    }
  }, [])

  useEffect(() => {
    const index = d.indexOfPred(filteredFonts, (f: any) => f.id === currentFont?.id)
    const inst = flistRef.current
    if (inst && index != null) {
      tm.schedule(() => {
        const offset = inst.getOffsetForRow({ alignment: "center", index })
        inst.scrollToPosition(offset)
      })
    }
  }, [currentFont, filteredFonts])

  return (
    <div className={stl.css("font-selector")}>
      <div className={stl.cssCase("font-selector-dropdown", { "font-selector-dropdown-full-size": fullSizeEnabled })}>
        <div className={stl.css("header")}>
          <SearchBar
            onChange={onFilterChange}
            value={state.term}
            autoFocus
            placeholder={tr("workspace.options.search-font")}
          />
          {recentFonts.length > 0 && showRecent && (
            <section className={stl.css("show-recent")}>
              <p className={stl.css("title")}>{tr("workspace.options.recent-fonts")}</p>
              {recentFonts.map((font, idx) => (
                <FontItem
                  key={`font-${idx}`}
                  font={font}
                  style={{}}
                  onClick={onSelectAndClose}
                  isCurrent={font.id === selected?.id}
                />
              ))}
            </section>
          )}
        </div>

        <div className={stl.cssCase("fonts-list", { "fonts-list-full-size": fullSizeEnabled })}>
          <rvt.AutoSizer>
            {(props: any) => {
              const width = props.width
              const height = props.height
              const render: any = (p: any) => rowRenderer(filteredFonts, selected, onSelectAndClose, p)
              return (
                <rvt.List
                  ref={flistRef}
                  height={height}
                  width={width}
                  rowCount={filteredFonts.length}
                  rowHeight={36}
                  rowRenderer={render}
                />
              )
            }}
          </rvt.AutoSizer>
        </div>
      </div>
    </div>
  )
}

rowRenderer = (fonts: any[], selected: any, onSelect: (font: any) => void, props: any) => {
  const index = props.index
  const key = props.key
  const style = props.style
  const font = nth(fonts, index)

  return (
    <FontItem
      key={key}
      font={font}
      style={style}
      onClick={onSelect}
      isCurrent={font?.id === selected?.id}
    />
  )
}

interface FontOptionsProps {
  values: any
  onChange: (values: any) => void
  onBlur?: () => void
  showRecent?: boolean
  fullSizeSelector?: boolean
}

const FontOptions: React.FC<FontOptionsProps> = ({
  values,
  onChange,
  onBlur,
  showRecent = true,
  fullSizeSelector = false
}) => {
  const { fontId, fontSize, fontVariantId } = values || {}

  const resolvedFontId = fontId || txt.defaultTypography.fontId
  const resolvedFontSize = fontSize || txt.defaultTypography.fontSize
  const resolvedFontVariantId = fontVariantId || txt.defaultTypography.fontVariantId

  const fontsDb = useDeref(fonts.fontsdb) || {}
  const font = fontsDb[resolvedFontId]

  const lastFontRef = useRef<any>(null)
  const [openSelector, setOpenSelector] = useState(false)

  const changeFont = useCallback((newFontId: string) => {
    const fontData = fontsDb[newFontId]
    if (fontData) {
      const { family } = fontData
      const variant = fonts.getDefaultVariant(fontData)
      const { id, name, weight, style } = variant
      onChange({
        fontId: newFontId,
        fontFamily: family,
        fontVariantId: id || name,
        fontWeight: weight,
        fontStyle: style
      })
      lastFontRef.current = fontData
    }
  }, [fontsDb, onChange])

  const onFontSizeChange = useCallback((newFontSize: string) => {
    if (!str.empty(newFontSize)) {
      onChange({ fontSize: newFontSize })
    }
  }, [onChange])

  const onFontVariantChange = useCallback((newVariantId: string) => {
    const variant = d.seek((v: any) => v.id === newVariantId, font?.variants)
    if (variant) {
      onChange({
        fontId: font.id,
        fontFamily: font.family,
        fontVariantId: newVariantId,
        fontWeight: variant.weight,
        fontStyle: variant.style
      })
    }
    if (onBlur) onBlur()
  }, [font, onChange, onBlur])

  const onFontSelect = useCallback((font: any) => {
    if (font !== font) {
      changeFont(font.id)
    }
    if (onBlur) onBlur()
  }, [changeFont, onBlur])

  const onFontSelectorClose = useCallback(() => {
    setOpenSelector(false)
    if (onBlur) onBlur()
    if (lastFontRef.current) {
      store.emit(fts.addRecentFont(lastFontRef.current))
    }
  }, [onBlur])

  return (
    <>
      {openSelector && (
        <FontSelector
          currentFont={font}
          onClose={onFontSelectorClose}
          onSelect={onFontSelect}
          fullSize={fullSizeSelector}
          showRecent={showRecent}
        />
      )}

      <div
        className={stl.css("font-option")}
        title={tr("inspect.attributes.typography.font-family")}
        onClick={() => setOpenSelector(true)}
      >
        {fontId === ":multiple" || fontId === "mixed" ? (
          "--"
        ) : font ? (
          <>
            <span className={stl.css("name")}>{font.name}</span>
            <span className={stl.css("icon")}>{deprecatedIcon.arrow}</span>
          </>
        ) : (
          tr("dashboard.fonts.deleted-placeholder")
        )}
      </div>

      <div className={stl.css("font-modifiers")}>
        <div
          className={stl.css("font-size-options")}
          title={tr("inspect.attributes.typography.font-size")}
        >
          {(() => {
            const sizeOptions = [8, 9, 10, 11, 12, 14, 16, 18, 24, 36, 48, 72]
            const options = fontSize === ":multiple" ? ["", ...sizeOptions] : sizeOptions
            return (
              <EditableSelect
                value={fontSize === ":multiple" ? ":multiple" : attrToString(fontSize)}
                className={stl.css("font-size-select")}
                ariaLabel={tr("inspect.attributes.typography.font-size")}
                inputClass={stl.css("numeric-input")}
                options={options}
                type="number"
                placeholder={tr("settings.multiple")}
                min={3}
                max={1000}
                onChange={onFontSizeChange}
                onBlur={onBlur}
              />
            )
          })()}
        </div>

        <div
          className={stl.css("font-variant-options")}
          title={tr("inspect.attributes.typography.font-style")}
        >
          {(() => {
            const basicVariantOptions = (font?.variants || []).map((variant: any) => ({
              value: variant.id,
              key: JSON.stringify(variant),
              label: variant.name
            }))
            const variantOptions = (fontVariantId === ":multiple" || fontVariantId === "mixed")
              ? [...basicVariantOptions, { value: "", key: "multiple-variants", label: "--" }]
              : basicVariantOptions
            const fontVariantValue = attrToString(fontVariantId)
            const value = fontVariantValue === "mixed" ? "" : fontVariantValue

            return (
              <Select
                className={stl.css("font-variant-select")}
                defaultValue={value}
                options={variantOptions}
                onChange={onFontVariantChange}
                onBlur={onBlur}
              />
            )
          })()}
        </div>
      </div>
    </>
  )
}

interface SpacingOptionsProps {
  values: any
  onChange: (values: any) => void
  onBlur?: () => void
}

const SpacingOptions: React.FC<SpacingOptionsProps> = ({ values, onChange, onBlur }) => {
  const { lineHeight, letterSpacing } = values || {}
  const resolvedLineHeight = lineHeight || "1.2"
  const resolvedLetterSpacing = letterSpacing || "0"

  const handleChange = (value: any, attr: string) => {
    onChange({ [attr]: String(value) })
  }

  return (
    <div className={stl.css("spacing-options")}>
      <div
        className={stl.css("line-height")}
        title={tr("inspect.attributes.typography.line-height")}
      >
        <span className={stl.css("icon")} alt={tr("workspace.options.text-options.line-height")}>
          {deprecatedIcon.textLineheight}
        </span>
        <NumericInput
          min={-200}
          max={200}
          step={0.1}
          defaultValue="1.2"
          className={stl.css("line-height-input")}
          ariaLabel={tr("inspect.attributes.typography.line-height")}
          value={attrToString(resolvedLineHeight)}
          placeholder={lineHeight === ":multiple" ? tr("settings.multiple") : "--"}
          nillable={lineHeight === ":multiple"}
          onChange={(val) => handleChange(val, "lineHeight")}
          onBlur={onBlur}
        />
      </div>

      <div
        className={stl.css("letter-spacing")}
        title={tr("inspect.attributes.typography.letter-spacing")}
      >
        <span className={stl.css("icon")} alt={tr("workspace.options.text-options.letter-spacing")}>
          {deprecatedIcon.textLetterspacing}
        </span>
        <NumericInput
          min={-200}
          max={200}
          step={0.1}
          defaultValue="0"
          className={stl.css("letter-spacing-input")}
          ariaLabel={tr("inspect.attributes.typography.letter-spacing")}
          value={attrToString(resolvedLetterSpacing)}
          placeholder={letterSpacing === ":multiple" ? tr("settings.multiple") : "--"}
          onChange={(val) => handleChange(val, "letterSpacing")}
          nillable={letterSpacing === ":multiple"}
          onBlur={onBlur}
        />
      </div>
    </div>
  )
}

interface TextTransformOptionsProps {
  values: any
  onChange: (values: any) => void
  onBlur?: () => void
}

const TextTransformOptions: React.FC<TextTransformOptionsProps> = ({ values, onChange, onBlur }) => {
  const textTransform = values?.textTransform || "none"
  const unsetValue = features.activeFeature(store.state, "text-editor/v2") ? "none" : "unset"

  const handleChange = (type: string) => {
    if (textTransform === type) {
      onChange({ textTransform: unsetValue })
    } else {
      onChange({ textTransform: type })
    }
    if (onBlur) onBlur()
  }

  return (
    <div className={stl.css("text-transform")}>
      <RadioButtons
        selected={textTransform}
        onChange={handleChange}
        name="text-transform"
      >
        <RadioButton
          icon={i.textUppercase}
          type="checkbox"
          title={tr("inspect.attributes.typography.text-transform.uppercase")}
          value="uppercase"
          id="text-transform-uppercase"
        />
        <RadioButton
          icon={i.textMixed}
          type="checkbox"
          value="capitalize"
          title={tr("inspect.attributes.typography.text-transform.capitalize")}
          id="text-transform-capitalize"
        />
        <RadioButton
          icon={i.textLowercase}
          type="checkbox"
          title={tr("inspect.attributes.typography.text-transform.lowercase")}
          value="lowercase"
          id="text-transform-lowercase"
        />
      </RadioButtons>
    </div>
  )
}

interface TextOptionsProps {
  ids?: any
  editor?: any
  values: any
  onChange: (values: any) => void
  onBlur?: () => void
  showRecent?: boolean
}

const TextOptions: React.FC<TextOptionsProps> = ({
  ids,
  editor,
  values,
  onChange,
  onBlur,
  showRecent
}) => {
  const sidebar = useContext(ctx.sidebar)
  const fullSizeSelector = showRecent && sidebar === "right"
  const opts = { editor, ids, values, onChange, onBlur, showRecent, fullSizeSelector }

  return (
    <div className={stl.cssCase("text-options", { "text-options-full-size": fullSizeSelector })}>
      <FontOptions {...opts} />
      <div className={stl.css("typography-variations")}>
        <SpacingOptions {...opts} />
        <TextTransformOptions {...opts} />
      </div>
    </div>
  )
}

interface TypographyAdvancedOptionsProps {
  visible?: boolean
  typography: any
  editable?: boolean
  nameInputRef?: React.RefObject<HTMLInputElement>
  onClose: () => void
  onChange?: (values: any) => void
  onNameBlur?: (event: any) => void
  local?: boolean
  navigateToLibrary?: () => void
  onKeyDown?: (event: any) => void
}

const TypographyAdvancedOptions: React.FC<TypographyAdvancedOptionsProps> = React.memo(({
  visible = false,
  typography,
  editable = false,
  nameInputRef,
  onClose,
  onChange,
  onNameBlur,
  local = false,
  navigateToLibrary,
  onKeyDown
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const fontData = fonts.getFontData(typography.fontId)

  fonts.ensureLoaded(typography.fontId)

  useEffect(() => {
    if (ref.current && visible) {
      dom.scrollIntoViewIfNeeded(ref.current)
    }
  }, [visible])

  if (!visible) return null

  const { fontFamily, fontWeight, fontStyle } = typography

  return (
    <div ref={ref} className={stl.css("advanced-options-wrapper")}>
      {editable ? (
        <>
          <div className={stl.css("font-name-wrapper")}>
            <div
              className={stl.css("typography-sample-input")}
              style={{ fontFamily, fontWeight, fontStyle }}
            >
              {tr("workspace.assets.typography.sample")}
            </div>

            <input
              className={stl.css("adv-typography-name")}
              type="text"
              ref={nameInputRef}
              defaultValue={typography.name}
              maxLength={maxInputLength}
              onKeyDown={onKeyDown}
              onBlur={onNameBlur}
            />

            <div className={stl.css("action-btn")} onClick={onClose}>
              {deprecatedIcon.tick}
            </div>
          </div>

          <TextOptions values={typography} onChange={onChange} showRecent={false} />
        </>
      ) : (
        <div className={stl.css("typography-info-wrapper")}>
          <div className={stl.css("typography-name-wrapper")}>
            <div
              className={stl.css("typography-sample")}
              style={{ fontFamily, fontWeight, fontStyle }}
            >
              {tr("workspace.assets.typography.sample")}
            </div>

            <div className={stl.css("typography-name")} title={typography.name}>
              {typography.name}
            </div>
            <span className={stl.css("typography-font")}>{fontData?.name}</span>
            <div className={stl.css("action-btn")} onClick={onClose}>
              {deprecatedIcon.menu}
            </div>
          </div>

          <div className={stl.css("info-row")}>
            <span className={stl.css("info-label")}>{tr("workspace.assets.typography.font-style")}</span>
            <span className={stl.css("info-content")}>{typography.fontVariantId}</span>
          </div>

          <div className={stl.css("info-row")}>
            <span className={stl.css("info-label")}>{tr("workspace.assets.typography.font-size")}</span>
            <span className={stl.css("info-content")}>{typography.fontSize}</span>
          </div>

          <div className={stl.css("info-row")}>
            <span className={stl.css("info-label")}>{tr("workspace.assets.typography.line-height")}</span>
            <span className={stl.css("info-content")}>{typography.lineHeight}</span>
          </div>

          <div className={stl.css("info-row")}>
            <span className={stl.css("info-label")}>{tr("workspace.assets.typography.letter-spacing")}</span>
            <span className={stl.css("info-content")}>{typography.letterSpacing}</span>
          </div>

          <div className={stl.css("info-row")}>
            <span className={stl.css("info-label")}>{tr("workspace.assets.typography.text-transform")}</span>
            <span className={stl.css("info-content")}>{typography.textTransform}</span>
          </div>

          {!local && (
            <a className={stl.css("link-btn")} onClick={navigateToLibrary}>
              {tr("workspace.assets.typography.go-to-edit")}
            </a>
          )}
        </div>
      )}
    </div>
  )
})

interface TypographyEntryProps {
  fileId?: string
  typography: any
  local?: boolean
  selected?: boolean
  onClick?: () => void
  onChange?: (values: any) => void
  onDetach?: () => void
  onContextMenu?: (e: React.MouseEvent) => void
  editing?: boolean
  renaming?: boolean
  focusName?: boolean
  externalOpen?: React.MutableRefObject<boolean | undefined>
}

const TypographyEntry: React.FC<TypographyEntryProps> = ({
  fileId,
  typography,
  local = false,
  selected = false,
  onClick,
  onChange,
  onDetach,
  onContextMenu,
  editing = false,
  renaming = false,
  focusName = false,
  externalOpen
}) => {
  const nameInputRef = useRef<HTMLInputElement>(null)
  const readOnly = useContext(ctx.workspaceReadOnly)
  const editable = local && !readOnly

  const [open, setOpen] = useState(editing)
  const fontData = fonts.getFontData(typography.fontId)
  const nameOnly = typography.name === fontData?.name

  const onNameBlur = useCallback((event: any) => {
    const name = dom.getTargetVal(event)
    if (!str.blank(name)) {
      onChange?.({ name })
      store.emit((state: any) => update(state, "workspace-global", "dissoc", "rename-typography"))
    }
  }, [onChange])

  const onOpen = useCallback(() => setOpen(true), [])
  const onClose = useCallback(() => setOpen(false), [])

  const navigateToLibrary = useCallback(() => {
    if (fileId) {
      store.emit(dcm.goToWorkspace({ fileId }))
    }
  }, [fileId])

  const onKeyDown = useCallback((event: any) => {
    const enter = kbd.enter(event)
    const esc = kbd.esc(event)
    const inputNode = dom.getTarget(event)
    if (enter) dom.blur(inputNode)
    if (esc) dom.blur(inputNode)
  }, [])

  useEffect(() => {
    if (editing) setOpen(editing)
  }, [editing])

  useEffect(() => {
    if (externalOpen) {
      externalOpen.current = open
    }
  }, [open, externalOpen])

  useEffect(() => {
    if (focusName && nameInputRef.current) {
      tm.schedule(() => {
        if (nameInputRef.current) {
          dom.focus(nameInputRef.current)
          dom.selectText(nameInputRef.current)
        }
      })
    }
  }, [focusName])

  return (
    <>
      <div
        className={stl.cssCase("typography-entry", { selected: !!selected })}
        style={{ display: open ? "none" : undefined }}
      >
        {renaming ? (
          <div className={stl.css("font-name-wrapper")}>
            <div
              className={stl.css("typography-sample-input")}
              style={{
                fontFamily: typography.fontFamily,
                fontWeight: typography.fontWeight,
                fontStyle: typography.fontStyle
              }}
            >
              {tr("workspace.assets.typography.sample")}
            </div>

            <input
              className={stl.css("adv-typography-name")}
              type="text"
              ref={nameInputRef}
              defaultValue={typography.name}
              maxLength={maxInputLength}
              onKeyDown={onKeyDown}
              onBlur={onNameBlur}
            />
          </div>
        ) : (
          <div
            className={stl.cssCase("typography-selection-wrapper", { "is-selectable": !!onClick })}
            onClick={onClick}
            onContextMenu={onContextMenu}
          >
            <div
              className={stl.css("typography-sample")}
              style={{
                fontFamily: typography.fontFamily,
                fontWeight: typography.fontWeight,
                fontStyle: typography.fontStyle
              }}
            >
              {tr("workspace.assets.typography.sample")}
            </div>

            <div className={stl.css("typography-name")} title={typography.name}>
              {typography.name}
            </div>

            {!nameOnly && (
              <div className={stl.css("typography-font")} title={fontData?.name}>
                {fontData?.name}
              </div>
            )}
          </div>
        )}
        <div className={stl.css("element-set-actions")}>
          {onDetach && (
            <button className={stl.css("element-set-actions-button")} onClick={onDetach}>
              {deprecatedIcon.detach}
            </button>
          )}
          <button className={stl.css("menu-btn")} onClick={onOpen}>
            {deprecatedIcon.menu}
          </button>
        </div>
      </div>

      <TypographyAdvancedOptions
        visible={open}
        onClose={onClose}
        typography={typography}
        editable={editable}
        nameInputRef={nameInputRef}
        onChange={onChange}
        onNameBlur={onNameBlur}
        local={local}
        navigateToLibrary={navigateToLibrary}
        onKeyDown={onKeyDown}
      />
    </>
  )
}

// Helper functions
function first<T>(arr: T[]): T | undefined {
  return arr[0]
}

function peek<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1]
}

function nth<T>(arr: T[], n: number): T | undefined {
  return n >= 0 && n < arr.length ? arr[n] : undefined
}

function useDeref<T>(ref: { deref: () => T } | null): T | null {
  const [value, setValue] = useState<T | null>(null)
  useEffect(() => {
    if (ref) {
      setValue(ref.deref())
    }
  }, [ref])
  return value
}

function useContext<T>(ctx: any): T {
  return React.useContext(ctx) as T
}

function update(obj: any, ...keysAndUpdate: any[]): any {
  // Simplified update function
  const [key, ...rest] = keysAndUpdate
  if (rest.length === 0) return obj
  return {
    ...obj,
    [key]: update(obj[key], ...rest)
  }
}