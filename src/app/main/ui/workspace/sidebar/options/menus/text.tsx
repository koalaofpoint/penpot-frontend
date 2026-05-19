// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react"
import * as D from "app/common/data"
import * as TXT from "app/common/types/text"
import * as UUID from "app/common/uuid"
import * as DWL from "app/main/data/workspace/libraries"
import * as DWSH from "app/main/data/workspace/shapes"
import * as SC from "app/main/data/workspace/shortcuts"
import * as DWT from "app/main/data/workspace/texts"
import * as DWU from "app/main/data/workspace/undo"
import * as DWWT from "app/main/data/workspace/wasm-text"
import * as Features from "app/main/features"
import {refs} from "app/main/refs"
import {store} from "app/main/store"
import {RadioButton, RadioButtons} from "app/main/ui/components/radio-buttons"
import {TitleBar} from "app/main/ui/components/title-bar"
import {Ctx} from "app/main/ui/context"
import {IconButton} from "app/main/ui/ds/buttons/icon-button"
import * as I from "app/main/ui/ds/foundations/assets/icon"
import * as Hooks from "app/main/ui/hooks"
import * as DeprecatedIcon from "app/main/ui/icons"
import {TextOptions, TypographyEntry} from "app/main/ui/workspace/sidebar/options/menus/typography"
import * as DOM from "app/util/dom"
import {_tr} from "app/util/i18n"
import * as Content from "app/util/text/content"
import * as TXU from "app/util/text/ui"
import * as TS from "app/util/timers"
import * as RX from "beicon.v2/core"
import * as PTK from "potok.v2/core"

interface TextAlignOptionsProps {
  values: any
  onChange: (attrs: any) => void
  onBlur?: () => void
}

const TextAlignOptions: React.FC<TextAlignOptionsProps> = (props) => {
  const {values, onChange, onBlur} = props
  const textAlign = values?.["text-align"]

  const handleChange = React.useCallback(
    (value: string) => {
      onChange({"text-align": value})
      if (onBlur) onBlur()
    },
    [onChange, onBlur]
  )

  return (
    <div className="align-options">
      <RadioButtons
        selected={textAlign}
        onChange={handleChange}
        name="align-text-options"
      >
        <RadioButton
          value="left"
          id="text-align-left"
          title={_tr("workspace.options.text-options.text-align-left")}
          icon={I.textAlignLeft}
        />
        <RadioButton
          value="center"
          id="text-align-center"
          title={_tr("workspace.options.text-options.text-align-center")}
          icon={I.textAlignCenter}
        />
        <RadioButton
          value="right"
          id="text-align-right"
          title={_tr("workspace.options.text-options.text-align-right")}
          icon={I.textAlignRight}
        />
        <RadioButton
          value="justify"
          id="text-align-justify"
          title={_tr("workspace.options.text-options.text-align-justify")}
          icon={I.textJustify}
        />
      </RadioButtons>
    </div>
  )
}

interface TextDirectionOptionsProps {
  values: any
  onChange: (attrs: any) => void
  onBlur?: () => void
}

const TextDirectionOptions: React.FC<TextDirectionOptionsProps> = (props) => {
  const {values, onChange, onBlur} = props
  const direction = values?.["text-direction"]

  const handleChange = React.useCallback(
    (value: string) => {
      const dir = value === direction ? "none" : value
      onChange({"text-direction": dir})
      if (onBlur) onBlur()
    },
    [direction, onChange, onBlur]
  )

  return (
    <div className="text-direction-options">
      <RadioButtons
        selected={direction}
        onChange={handleChange}
        name="text-direction-options"
      >
        <RadioButton
          value="ltr"
          type="checkbox"
          id="ltr-text-direction"
          title={_tr("workspace.options.text-options.direction-ltr")}
          icon={I.textLtr}
        />
        <RadioButton
          value="rtl"
          type="checkbox"
          id="rtl-text-direction"
          title={_tr("workspace.options.text-options.direction-rtl")}
          icon={I.textRtl}
        />
      </RadioButtons>
    </div>
  )
}

interface VerticalAlignProps {
  values: any
  onChange: (attrs: any) => void
  onBlur?: () => void
}

const VerticalAlign: React.FC<VerticalAlignProps> = (props) => {
  const {values, onChange, onBlur} = props
  const verticalAlign = values?.["vertical-align"] || "top"

  const handleChange = React.useCallback(
    (value: string) => {
      onChange({"vertical-align": value})
      if (onBlur) onBlur()
    },
    [onChange, onBlur]
  )

  return (
    <div className="vertical-align-options">
      <RadioButtons
        selected={verticalAlign}
        onChange={handleChange}
        name="vertical-align-text-options"
      >
        <RadioButton
          value="top"
          id="vertical-text-align-top"
          title={_tr("workspace.options.text-options.align-top")}
          icon={I.textTop}
        />
        <RadioButton
          value="center"
          id="vertical-text-align-center"
          title={_tr("workspace.options.text-options.align-middle")}
          icon={I.textMiddle}
        />
        <RadioButton
          value="bottom"
          id="vertical-text-align-bottom"
          title={_tr("workspace.options.text-options.align-bottom")}
          icon={I.textBottom}
        />
      </RadioButtons>
    </div>
  )
}

interface GrowOptionsProps {
  ids: string[]
  values: any
  onBlur?: () => void
}

const GrowOptions: React.FC<GrowOptionsProps> = (props) => {
  const {ids, values, onBlur} = props
  const growType = values?.["grow-type"]
  const editorInstance = refs.workspaceEditor

  const handleChangeGrow = React.useCallback(
    (value: string) => {
      if (onBlur) onBlur()
      const uid = Symbol()
      const growTypeKeyword = D.keyword(value)

      store.emit(DWU.startUndoTransaction(uid))

      if (Features.activeFeature(store.getState(), "text-editor/v2")) {
        const content = editorInstance
          ? Content.domToCljs(DWT.getEditorRoot(editorInstance))
          : null
        if (content != null) {
          store.emit(DWT.v2UpdateTextShapeContent(ids[0], content, true))
        }
      }

      store.emit(DWSH.updateShapes(ids, (shape: any) => ({...shape, "grow-type": growTypeKeyword})))

      if (Features.activeFeature(store.getState(), "render-wasm/v1")) {
        store.emit(DWWT.resizeWasmTextAll(ids))
      }

      TS.schedule(() => store.emit(DWU.commitUndoTransaction(uid)))

      if (onBlur) onBlur()
    },
    [ids, onBlur, editorInstance]
  )

  return (
    <div className="grow-options">
      <RadioButtons
        selected={D.name(growType)}
        onChange={handleChangeGrow}
        name="grow-text-options"
      >
        <RadioButton
          value="fixed"
          id="text-fixed-grow"
          title={_tr("workspace.options.text-options.grow-fixed")}
          icon={I.textFixed}
        />
        <RadioButton
          value="auto-width"
          id="text-auto-width-grow"
          title={_tr("workspace.options.text-options.grow-auto-width")}
          icon={I.textAutoWidth}
        />
        <RadioButton
          value="auto-height"
          id="text-auto-height-grow"
          title={_tr("workspace.options.text-options.grow-auto-height")}
          icon={I.textAutoHeight}
        />
      </RadioButtons>
    </div>
  )
}

interface TextDecorationOptionsProps {
  values: any
  onChange: (attrs: any) => void
  onBlur?: () => void
}

const TextDecorationOptions: React.FC<TextDecorationOptionsProps> = (props) => {
  const {values, onChange, onBlur} = props
  const textDecoration = values?.["text-decoration"] || "none"

  const handleChange = React.useCallback(
    (value: string) => {
      const decoration = value === textDecoration ? "none" : value
      onChange({"text-decoration": decoration})
      if (onBlur) onBlur()
    },
    [textDecoration, onChange, onBlur]
  )

  return (
    <div className="text-decoration-options">
      <RadioButtons
        selected={textDecoration}
        onChange={handleChange}
        name="text-decoration-options"
      >
        <RadioButton
          value="underline"
          type="checkbox"
          id="underline-text-decoration"
          title={_tr("workspace.options.text-options.underline", SC.getTooltip(":underline"))}
          icon={I.textUnderlined}
        />
        <RadioButton
          value="line-through"
          type="checkbox"
          id="line-through-text-decoration"
          title={_tr("workspace.options.text-options.strikethrough", SC.getTooltip(":line-through"))}
          icon={I.textStroked}
        />
      </RadioButtons>
    </div>
  )
}

interface TextMenuProps {
  ids: string[]
  type: string
  values: any
}

export const TextMenu: React.FC<TextMenuProps> = React.memo((props) => {
  const {ids, type, values} = props

  const fileId = React.useContext(Ctx.CurrentFileIdContext)
  const typographies = refs.workspaceFileTypography
  const libraries = refs.files

  const label = type === ":multiple"
    ? _tr("workspace.options.text-options.title-selection")
    : type === ":group"
    ? _tr("workspace.options.text-options.title-group")
    : _tr("workspace.options.text-options.title")

  const [state, setState] = React.useState({
    mainMenu: true,
    moreOptions: false,
  })

  const mainMenuOpen = state.mainMenu
  const moreOptionsOpen = state.moreOptions

  const toggleMainMenu = React.useCallback(() => {
    setState(prev => ({...prev, mainMenu: !prev.mainMenu}))
  }, [])

  const toggleMoreOptions = React.useCallback(() => {
    setState(prev => ({...prev, moreOptions: !prev.moreOptions}))
  }, [])

  const typographyId = values?.["typography-ref-id"]
  const typographyFileId = values?.["typography-ref-file"]

  const emitUpdate = React.useCallback(
    (shapeIds: string[], attrs: any) => {
      store.emit(
        DWT.saveFont(
          D.selectKeys(
            {...TXT.getDefaultTextAttrs(), ...values, ...attrs},
            TXT.textNodeAttrs
          )
        ),
        DWT.updateAllAttrs(shapeIds, attrs)
      )
    },
    [values]
  )

  const onChange = React.useCallback(
    (attrs: any) => {
      emitUpdate(ids, attrs)
    },
    [ids, emitUpdate]
  )

  const typography = React.useMemo(() => {
    if (
      typographyId &&
      typographyId !== ":multiple" &&
      typographyFileId !== fileId
    ) {
      const lib = libraries?.[typographyFileId]
      return lib?.["data"]?.["typographies"]?.[typographyId]
        ? {...lib["data"]["typographies"][typographyId], fileId: typographyFileId}
        : null
    }

    if (
      typographyId &&
      typographyId !== ":multiple" &&
      typographyFileId === fileId
    ) {
      return typographies?.[typographyId]
    }

    return null
  }, [typographyId, typographyFileId, fileId, libraries, typographies])

  const onConvertToTypography = React.useCallback(
    (_: any) => {
      const setValues = D.selectKeys(
        D.withoutNils(values),
        D.concatVec(
          TXT.textFontAttrs,
          TXT.textSpacingAttrs,
          TXT.textTransformAttrs
        )
      )
      let typography = {...TXT.defaultTypography, ...setValues}
      typography = DWT.generateTypographyName(typography)
      const id = UUID.next()

      store.emit(DWL.addTypography({...typography, id}, false))
      emitUpdate(ids, {
        "typography-ref-id": id,
        "typography-ref-file": fileId,
      })
    },
    [values, ids, fileId, emitUpdate]
  )

  const handleDetachTypography = React.useCallback(
    () => {
      onChange({
        "typography-ref-file": null,
        "typography-ref-id": null,
      })
    },
    [onChange]
  )

  const handleChangeTypography = React.useCallback(
    (changes: any) => {
      store.emit(DWL.updateTypography({...typography, ...changes}, fileId))
    },
    [typography, fileId]
  )

  const expandStream = React.useMemo(
    () =>
      store.stream.pipe(
        RX.filter((event: any) => PTK.isType(event, ":expand-text-more-options"))
      ),
    []
  )

  Hooks.useStream(
    expandStream,
    () => setState(prev => ({...prev, moreOptions: true}))
  )

  const multiple = Object.values(values).some((v: any) => v === ":multiple")

  const opts = {
    ids,
    values,
    onChange,
    showRecent: true,
    onBlur: () => {
      TS.schedule(100, () => {
        const active = DOM.getActive()
        if (active?.tagName !== "INPUT") {
          const node = TXU.getTextEditorContent()
          DOM.focus(node)
        }
      })
    },
  }

  return (
    <div className="element-set">
      <div className="element-title">
        <TitleBar
          collapsable={true}
          collapsed={!mainMenuOpen}
          onCollapsed={toggleMainMenu}
          title={label}
        >
          {!typography && !multiple && (
            <IconButton
              variant="ghost"
              aria-label={_tr("labels.options")}
              onClick={onConvertToTypography}
              icon={I.add}
            />
          )}
        </TitleBar>
      </div>

      {mainMenuOpen && (
        <div className="element-content">
          {typography ? (
            <TypographyEntry
              fileId={typographyFileId}
              typography={typography}
              local={typographyFileId === fileId}
              onDetach={handleDetachTypography}
              onChange={handleChangeTypography}
            />
          ) : typographyId === ":multiple" ? (
            <div className="multiple-typography">
              <span className="multiple-text">
                {_tr("workspace.libraries.text.multiple-typography")}
              </span>
              <div
                className="multiple-typography-button"
                onClick={handleDetachTypography}
                title={_tr("workspace.libraries.text.multiple-typography-tooltip")}
              >
                <DeprecatedIcon.detach/>
              </div>
            </div>
          ) : (
            <TextOptions {...opts}/>
          )}

          <div className="text-align-options">
            <TextAlignOptions {...opts}/>
            <GrowOptions {...opts}/>
            <IconButton
              variant="ghost"
              aria-label={_tr("labels.options")}
              data-testid="text-align-options-button"
              onClick={toggleMoreOptions}
              icon={I.menu}
            />
          </div>

          {moreOptionsOpen && (
            <div className="text-decoration-options">
              <VerticalAlign {...opts}/>
              <TextDecorationOptions {...opts}/>
              <TextDirectionOptions {...opts}/>
            </div>
          )}
        </div>
      )}
    </div>
  )
})
