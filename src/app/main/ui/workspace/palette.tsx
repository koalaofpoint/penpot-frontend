// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react"
import * as D from "app/common/data"
import * as DM from "app/common/data/macros"
import * as UUID from "app/common/uuid"
import {leftSidebarDefaultWidth} from "app/main/constants"
import * as EV from "app/main/data/event"
import * as DW from "app/main/data/workspace"
import * as MDC from "app/main/data/workspace/colors"
import * as SC from "app/main/data/workspace/shortcuts"
import {refs} from "app/main/refs"
import {store} from "app/main/store"
import {Ctx} from "app/main/ui/context"
import * as H from "app/main/ui/hooks"
import {useResizeHook} from "app/main/ui/hooks/resize"
import * as DeprecatedIcon from "app/main/ui/icons"
import {ColorPalette, ColorPaletteCtxMenu} from "app/main/ui/workspace/color-palette"
import {TextPalette} from "app/main/ui/workspace/text-palette"
import {TextPaletteCtxMenu} from "app/main/ui/workspace/text-palette-ctx-menu"
import {_tr} from "app/util/i18n"
import * as TS from "app/util/timers"
import * as Events from "goog.events"
import * as L from "okulary.core"

const refViewport = L.derived(":vport", refs.workspaceLocal)

function calculatePaletteStyle(rulers: boolean): Record<string, string> {
  const leftSidebar = DOM.getElement("left-sidebar-aside")
  const leftSidebarSize = D.parseInteger(DOM.getData(leftSidebar, "width"))
  const rulersWidth = rulers ? 22 : 0
  const minLeftSidebarWidth = leftSidebarDefaultWidth
  const leftPadding = 4
  const calculatedPaddingLeft = rulersWidth + (leftSidebarSize || minLeftSidebarWidth) + leftPadding + 1

  return {
    paddingLeft: `${calculatedPaddingLeft}px`,
    paddingRight: "322px",
  }
}

interface PaletteProps {
  layout: any
  onChangeSize?: (size: number) => void
}

export const Palette: React.FC<PaletteProps> = (props) => {
  const {layout, onChangeSize} = props

  const colorPalette = layout?.colorpalette
  const textPalette = layout?.textpalette
  const hidePalettes = layout?.hidePalettes

  const readOnly = React.useContext(Ctx.WorkspaceReadOnlyContext)
  const containerRef = React.useRef<HTMLDivElement>(null)

  const [state, setState] = React.useState({showMenu: false, width: 0})
  const showMenu = state.showMenu

  const selected = H.useSharedState(MDC.colorpaletteSelectedBroadcastKey, ":recent")
  const [selectedText, setSelectedText] = React.useState<string>(":file")

  const onSelect = React.useCallback((value: any) => {
    // This would update the shared state
  }, [])

  const rulers = refs.rulers?.deref()
  const vport = refViewport?.deref()
  const vportWidth = vport?.width

  const resizeHook = useResizeHook(":palette", 72, 54, 80, ":y", true, onChangeSize)
  const {onPointerDown, onLostPointerCapture, onPointerMove, parentRef, size} = resizeHook

  const onResize = React.useCallback(
    () => {
      const dom = containerRef.current
      if (dom) {
        const width = OBJ.get(dom, "clientWidth")
        setState((prev) => ({...prev, width}))
      }
    },
    []
  )

  const onCloseMenu = React.useCallback(
    () => setState((prev) => ({...prev, showMenu: false})),
    []
  )

  const onSelectPalette = React.useCallback(
    (event: React.MouseEvent) => {
      const node = DOM.getCurrentTarget(event)
      const value = DOM.getAttribute(node, "data-palette")
      onSelect(
        value === "file" || value === "recent"
          ? D.keyword(value)
          : UUID.parse(value)
      )
    },
    [onSelect]
  )

  const onSelectTextPaletteMenu = React.useCallback(
    (lib: any) => {
      if (lib === null || lib === ":file") {
        setSelectedText(":file")
      } else {
        setSelectedText(lib?.id)
      }
    },
    []
  )

  const togglePalettes = React.useCallback(
    () => {
      // Would need proper implementation
    },
    []
  )

  const onSelectColorPalette = React.useCallback(
    (event: React.MouseEvent) => {
      const node = DOM.getCurrentTarget(event)
      TS.schedule(300, () => {
        store.emit(
          DW.removeLayoutFlag(":hide-palettes"),
          DW.removeLayoutFlag(":textpalette"),
          EV.withMeta(DW.toggleLayoutFlag(":colorpalette"), {origin: "workspace-left-toolbar"})
        )
      })
      DOM.blur(node)
    },
    []
  )

  const onSelectTextPalette = React.useCallback(
    (event: React.MouseEvent) => {
      const node = DOM.getCurrentTarget(event)
      TS.schedule(300, () => {
        store.emit(
          DW.removeLayoutFlag(":hide-palettes"),
          DW.removeLayoutFlag(":colorpalette"),
          EV.withMeta(DW.toggleLayoutFlag(":textpalette"), {origin: "workspace-left-toolbar"})
        )
      })
      DOM.blur(node)
    },
    []
  )

  const anyPalette = colorPalette || textPalette

  const sizeClassname = size <= 64
    ? "small-palette"
    : size <= 72
    ? "mid-palette"
    : "big-palette"

  React.useEffect(() => {
    const handleResize = () => onResize()
    const key = Events.listen(window, "resize", handleResize)
    return () => Events.unlistenByKey(key)
  }, [onResize])

  React.useLayoutEffect(() => {
    const dom = parentRef?.current
    if (dom) {
      const width = OBJ.get(dom, "clientWidth")
      setState((prev) => ({...prev, width}))
    }
  }, [parentRef])

  if (readOnly) return null

  return (
    <div
      className="palette-wrapper"
      id="palette-wrapper"
      style={calculatePaletteStyle(!!rulers)}
      data-testid="palette"
    >
      <div
        ref={parentRef}
        className={[
          sizeClassname,
          "palettes",
          anyPalette ? "wide" : "",
          hidePalettes ? "hidden-bts" : "",
        ].filter(Boolean).join(" ")}
        style={{"--height": `${size}px`} as any}
      >
        <div
          className="resize-area"
          onPointerDown={onPointerDown}
          onLostPointerCapture={onLostPointerCapture}
          onPointerMove={onPointerMove}
        />

        <ul
          className={[
            sizeClassname,
            "palette-btn-list",
            hidePalettes ? "hidden-bts" : "",
          ].filter(Boolean).join(" ")}
        >
          <li className="palette-item">
            <button
              title={_tr("workspace.toolbar.color-palette", SC.getTooltip(":toggle-colorpalette"))}
              aria-label={_tr("workspace.toolbar.color-palette", SC.getTooltip(":toggle-colorpalette"))}
              className={["palette-btn", colorPalette ? "selected" : ""].filter(Boolean).join(" ")}
              onClick={onSelectColorPalette}
            >
              {DeprecatedIcon.dropIcon}
            </button>
          </li>

          <li className="palette-item">
            <button
              title={_tr("workspace.toolbar.text-palette", SC.getTooltip(":toggle-textpalette"))}
              aria-label={_tr("workspace.toolbar.text-palette", SC.getTooltip(":toggle-textpalette"))}
              className={["palette-btn", textPalette ? "selected" : ""].filter(Boolean).join(" ")}
              onClick={onSelectTextPalette}
            >
              {DeprecatedIcon.textPalette}
            </button>
          </li>
        </ul>

        {anyPalette ? (
          <>
            <button
              className="palette-actions"
              onClick={() => setState((prev) => ({...prev, showMenu: !prev.showMenu}))}
            >
              {DeprecatedIcon.menu}
            </button>

            <div className="palette" ref={containerRef}>
              {textPalette && (
                <>
                  <TextPaletteCtxMenu
                    showMenu={showMenu}
                    closeMenu={onCloseMenu}
                    onSelectPalette={onSelectTextPaletteMenu}
                    selected={selectedText}
                  />
                  <TextPalette
                    size={size}
                    selected={selectedText}
                    width={vportWidth}
                  />
                </>
              )}

              {colorPalette && (
                <>
                  <ColorPaletteCtxMenu
                    show={showMenu}
                    onClose={onCloseMenu}
                    onSelect={onSelectPalette}
                    selected={selected}
                  />
                  <ColorPalette
                    size={size}
                    selected={selected}
                    width={vportWidth}
                  />
                </>
              )}
            </div>
          </>
        ) : (
          <div
            className="handler"
            onClick={togglePalettes}
            data-testid="toggle-palettes-visibility"
          >
            <div className="handler-btn"/>
          </div>
        )}
      </div>
    </div>
  )
}
