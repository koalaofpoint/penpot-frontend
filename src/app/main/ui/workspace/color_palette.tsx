// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react"
import * as dm from "app/common/data/macros"
import * as ctc from "app/common/types/color"
import * as ctl from "app/common/types/library"
import * as ev from "app/main/data/event"
import * as mdc from "app/main/data/workspace/colors"
import {refs} from "app/main/refs"
import {store} from "app/main/store"
import {ColorBullet} from "app/main/ui/components/color-bullet"
import {Ctx} from "app/main/ui/context"
import {Swatch} from "app/main/ui/ds/utilities/swatch"
import * as DeprecatedIcon from "app/main/ui/icons"
import * as uc from "app/util/color"
import * as dom from "app/util/dom"
import {tr} from "app/util/i18n"
import * as kbd from "app/util/keyboard"
import * as obj from "app/util/object"
import * as l from "okulary.core"
import * as ptk from "potok.v2/core"

interface PaletteItemProps {
  color: any
  size: number
  selected: string
}

const PaletteItem: React.FC<PaletteItemProps> = React.memo((props) => {
  const {color, size, selected} = props

  const selectColor = React.useCallback(
    (event: React.MouseEvent) => {
      store.emit(
        mdc.addRecentColor(color),
        mdc.applyColorFromPalette(color, kbd.alt(event)),
        selected !== ":recent" &&
          ptk.dataEvent(ev.event("use-library-color", {
            name: "use-library-color",
            origin: "color-palette",
            externalLibrary: selected !== ":file",
          }))
      )
    },
    [color, selected]
  )

  const title = uc.getColorName(color)

  return (
    <button
      className={[
        "color-cell",
        !color.id ? "is-not-library-color" : "",
        size <= 64 ? "no-text" : "",
      ].filter(Boolean).join(" ")}
      title={title}
      aria-label={title}
      type="button"
      onClick={selectColor}
    >
      <Swatch background={color} size="medium" />
      <ColorBullet color={color} size={size} origin=":palette" />
    </button>
  )
})

interface PaletteProps {
  colors: any[]
  size: number
  width: number
  selected: string
}

const Palette: React.FC<PaletteProps> = React.memo((props) => {
  const {colors, size, width, selected} = props

  const [state, setState] = React.useState(() => ({showMenu: false, offset: 0}))
  const offsetStep = size <= 64 ? 40 : size <= 80 ? 72 : 72
  const buttonsSize = size <= 64 ? 164 : 132
  const availableWidth = width - buttonsSize
  let visible = Math.floor(availableWidth / offsetStep)
  const showArrows = colors.length > visible

  if (showArrows) {
    visible = Math.floor((availableWidth - 48) / offsetStep)
  }

  const offset = state.offset || 0
  const maxOffset = colors.length - visible

  const containerRef = React.useRef<HTMLDivElement>(null)

  const bulletSize = size <= 64 ? "32" : size <= 72 ? "28" : size <= 80 ? "32" : "32"
  const colorCellWidth = size <= 64 ? 32 : 64

  const onLeftArrowClick = React.useCallback(() => {
    setState((prev) => ({
      ...prev,
      offset: prev.offset > 0 ? Math.max(prev.offset - 1, 0) : prev.offset,
    }))
  }, [])

  const onRightArrowClick = React.useCallback(() => {
    setState((prev) => ({
      ...prev,
      offset: prev.offset < maxOffset ? Math.min(prev.offset + 1, maxOffset) : prev.offset,
    }))
  }, [maxOffset])

  const onScroll = React.useCallback(
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

  React.useLayoutEffect(() => {
    const dom = containerRef.current
    if (dom) {
      const containerWidth = obj.get(dom, "clientWidth")
      setState((prev) => ({...prev, width: containerWidth}))
    }
  }, [])

  React.useEffect(() => {
    if (state.offset !== 0) {
      setState((prev) => ({...prev, offset: 0}))
    }
  }, [width, colors])

  return (
    <div
      className={["color-palette", size < 64 ? "no-text" : ""].filter(Boolean).join(" ")}
      style={{
        "--bullet-size": `${bulletSize}px`,
        "--color-cell-width": `${colorCellWidth}px`,
      } as React.CSSProperties}
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

      <div className="color-palette-content" ref={containerRef} onWheel={onScroll}>
        {colors.length === 0 ? (
          <div
            className="color-palette-empty"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {tr("workspace.libraries.colors.empty-palette")}
          </div>
        ) : (
          <div
            className="color-palette-inside"
            style={{
              position: "relative",
              maxWidth: `${availableWidth}px`,
              right: `${offsetStep * offset}px`,
            }}
          >
            {colors.map((item: any, idx: number) => (
              <PaletteItem key={idx} color={item} size={size} selected={selected} />
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
})

interface RecentColorsPaletteProps {
  colors?: any[]
}

const RecentColorsPalette: React.FC<RecentColorsPaletteProps> = (props) => {
  const libraries = (refs.files as any)?.deref?.()
  const recentColors = (refs.recentColors as any)?.deref?.()

  const processedColors = React.useMemo(() => {
    return [...(recentColors || [])]
      .reverse()
      .filter(ctc.validColor)
      .map((color: any) => {
        const {refId, refFile} = color
        if (refId && refFile) {
          const fdata = dm.getIn(libraries, [refFile, "data"])
          const libraryColor = ctl.getColor(fdata, refId)
          if (libraryColor) {
            return ctc.libraryColorToColor(libraryColor, refFile)
          }
          const {[refId]: _, [refFile]: __, ...rest} = color
          return rest
        }
        return color
      })
  }, [recentColors, libraries])

  return <Palette {...props} colors={processedColors} />
}

function makeLibraryColorsRef(fileId: string) {
  return l.derived(
    (files: any) => dm.getIn(files, [fileId, "data", "colors"]),
    refs.files
  )
}

interface FileColorPaletteProps {
  fileId: string
  colors?: any[]
}

const FileColorPalette: React.FC<FileColorPaletteProps> = (props) => {
  const {fileId} = props

  const colorsRef = React.useMemo(
    () => makeLibraryColorsRef(fileId),
    [fileId]
  )

  const rawColors = (colorsRef as any)?.deref?.()

  const colors = React.useMemo(() => {
    if (!rawColors) return []
    return Object.values(rawColors)
      .filter(ctc.validLibraryColor)
      .sort((a: any, b: any) => a.name.localeCompare(b.name))
      .map((color: any) => ctc.libraryColorToColor(color, fileId))
  }, [rawColors, fileId])

  return <Palette {...props} colors={colors} />
}

interface ColorPaletteProps {
  selected: string
}

export const ColorPalette: React.FC<ColorPaletteProps> = React.memo((props) => {
  const {selected} = props

  const fileId = React.useContext(Ctx.CurrentFileIdContext)

  if (selected === ":recent") {
    return <RecentColorsPalette {...props} />
  }

  if (selected === ":file") {
    return <FileColorPalette {...props} fileId={fileId} />
  }

  return <FileColorPalette {...props} fileId={selected} />
})