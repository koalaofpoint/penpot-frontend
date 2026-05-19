// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react"
import * as D from "app/common/data"
import * as EV from "app/main/data/event"
import * as DWT from "app/main/data/workspace/texts"
import * as F from "app/main/fonts"
import {refs} from "app/main/refs"
import {store} from "app/main/store"
import {Ctx} from "app/main/ui/context"
import * as DeprecatedIcon from "app/main/ui/icons"
import {_tr} from "app/util/i18n"
import * as OBJ from "app/util/object"
import * as STR from "cuerdas.core"
import * as PTK from "potok.v2/core"

interface TypographyItemProps {
  fileId: string
  selectedIds: string[]
  typography: any
  nameOnly?: boolean
  size: number
  currentFileId: string
}

const TypographyItem: React.FC<TypographyItemProps> = (props) => {
  const {
    fileId,
    selectedIds,
    typography,
    nameOnly,
    size,
    currentFileId,
  } = props

  const fontData = F.getFontData(typography?.["font-id"])
  const fontVariantId = typography?.["font-variant-id"]
  const variantData = D.seek(
    (v: any) => v?.["id"] === fontVariantId,
    fontData?.variants
  )

  const handleClick = React.useCallback(
    () => {
      const attrs = {
        "typography-ref-file": fileId,
        "typography-ref-id": typography?.id,
        ...D.dissoc(typography, "id", "name"),
      }

      store.emit(PTK.event(
        EV.event("use-library-typography", {
          name: "use-library-typography",
          origin: "text-palette",
          "external-library": fileId !== currentFileId,
        })
      ))

      selectedIds.forEach((id) => {
        store.emit(DWT.updateTextAttrs({
          id,
          editor: refs.workspaceEditorState?.get?.(id),
          attrs,
        }))
      })
    },
    [typography, selectedIds, fileId, currentFileId]
  )

  const isMidItem = size <= 72
  const isSmallItem = size <= 64

  return (
    <div
      onClick={handleClick}
      className={[
        "typography-item",
        isMidItem ? "mid-item" : "",
        isSmallItem ? "small-item" : "",
      ].filter(Boolean).join(" ")}
    >
      <div
        className="typography-name"
        title={typography?.name}
        style={{
          fontFamily: typography?.["font-family"],
          fontWeight: typography?.["font-weight"],
          fontStyle: typography?.["font-style"],
        }}
      >
        {typography?.name}
      </div>

      {!nameOnly && (
        <>
          <div className="typography-font">
            {fontData?.name}
          </div>
          <div className="typography-data">
            {`${typography?.["font-size"]}px | ${variantData?.name}`}
          </div>
        </>
      )}
    </div>
  )
}

interface PaletteProps {
  selected: string
  selectedIds: string[]
  currentFileId: string
  fileTypographies: any
  libraries: any
  size: number
  width: number
}

const Palette: React.FC<PaletteProps> = (props) => {
  const {
    selected,
    selectedIds,
    currentFileId,
    fileTypographies,
    libraries,
    size,
    width,
  } = props

  const fileId = selected === ":recent"
    ? null
    : selected === ":file"
    ? currentFileId
    : selected

  let currentTypographies: any[]
  if (selected === ":recent") {
    currentTypographies = []
  } else if (selected === ":file") {
    currentTypographies = Object.values(fileTypographies || {}).sort((a, b) =>
      STR.lower(a?.name || "").localeCompare(STR.lower(b?.name || ""))
    )
  } else {
    currentTypographies = Object.values(
      libraries?.[selected]?.["data"]?.["typographies"] || {}
    ).sort((a, b) =>
      STR.lower(a?.name || "").localeCompare(STR.lower(b?.name || ""))
    )
  }

  const [state, setState] = React.useState({offset: 0})
  const offsetStep = 144
  const buttonsSize = size <= 64 ? 164 : size <= 72 ? 164 : size <= 80 ? 132 : 132
  const actualWidth = width - buttonsSize
  const visible = Math.floor(actualWidth / offsetStep)
  const showArrows = currentTypographies.length > visible
  const offset = state.offset || 0
  const maxOffset = currentTypographies.length - visible
  const containerRef = React.useRef<HTMLDivElement>(null)

  const onLeftArrowClick = React.useCallback(
    () => {
      setState((prev) => ({
        ...prev,
        offset: Math.max(prev.offset - 1, 0),
      }))
    },
    []
  )

  const onRightArrowClick = React.useCallback(
    () => {
      setState((prev) => ({
        ...prev,
        offset: Math.min(prev.offset + 1, maxOffset),
      }))
    },
    [maxOffset]
  )

  const onWheel = React.useCallback(
    (event: React.WheelEvent) => {
      const nativeEvent = event.nativeEvent as any
      const delta = nativeEvent.deltaY + nativeEvent.deltaX
      if (delta > 0) {
        onRightArrowClick()
      } else {
        onLeftArrowClick()
      }
    },
    [onLeftArrowClick, onRightArrowClick]
  )

  React.useEffect(() => {
    const fonts = new Set(currentTypographies.map((t: any) => t?.["font-id"]).filter(Boolean))
    fonts.forEach((fontId) => F.ensureLoaded(fontId))
  }, [currentTypographies])

  React.useLayoutEffect(() => {
    const dom = containerRef.current
    if (dom) {
      const domWidth = OBJ.get(dom, "clientWidth")
      setState((prev) => ({...prev, width: domWidth}))
    }
  }, [])

  React.useEffect(() => {
    if (state.offset !== 0) {
      setState((prev) => ({...prev, offset: 0}))
    }
  }, [width, selected])

  return (
    <div
      className="text-palette"
      style={{"--height": `${size}px`} as any}
    >
      {showArrows && (
        <button
          className="left-arrow"
          disabled={offset === 0}
          onClick={onLeftArrowClick}
        >
          {DeprecatedIcon.arrow}
        </button>
      )}

      <div
        className="text-palette-content"
        ref={containerRef}
        onWheel={onWheel}
      >
        {currentTypographies.length === 0 ? (
          <div
            className="text-palette-empty"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {_tr("workspace.libraries.colors.empty-typography-palette")}
          </div>
        ) : (
          <div
            className="text-palette-inside"
            style={{
              position: "relative",
              maxWidth: `${actualWidth}px`,
              right: `${offsetStep * offset}px`,
            }}
          >
            {currentTypographies.map((item: any, idx: number) => (
              <TypographyItem
                key={idx}
                fileId={fileId}
                currentFileId={currentFileId}
                selectedIds={selectedIds}
                typography={item}
                size={size}
              />
            ))}
          </div>
        )}
      </div>

      {showArrows && (
        <button
          className="right-arrow"
          disabled={offset === maxOffset}
          onClick={onRightArrowClick}
        >
          {DeprecatedIcon.arrow}
        </button>
      )}
    </div>
  )
}

interface TextPaletteProps {
  size: number
  width: number
  selected: string
}

export const TextPalette: React.FC<TextPaletteProps> = React.memo((props) => {
  const {size, width, selected} = props

  const selectedIds = refs.selectedShapes
  const fileTypographies = refs.workspaceFileTypography?.deref()
  const libraries = refs.files?.deref()
  const currentFileId = React.useContext(Ctx.CurrentFileIdContext)

  return (
    <Palette
      currentFileId={currentFileId}
      selectedIds={selectedIds}
      fileTypographies={fileTypographies}
      libraries={libraries}
      width={width}
      selected={selected}
      size={size}
    />
  )
})
