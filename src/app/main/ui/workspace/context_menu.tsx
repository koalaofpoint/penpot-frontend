// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as stl from "app/main/style"
import * as d from "app/common/data"
import * as dm from "app/common/data/macros"
import * as cfh from "app/common/files/helpers"
import * as t from "app/common/transit"
import * as ctk from "app/common/types/component"
import * as ctn from "app/common/types/container"
import * as ctp from "app/common/types/page"
import * as ctl from "app/common/types/shape/layout"
import * as cf from "app/config"
import * as ev from "app/main/data/event"
import * as modal from "app/main/data/modal"
import * as scd from "app/main/data/shortcuts"
import * as dw from "app/main/data/workspace"
import * as dwi from "app/main/data/workspace/interactions"
import * as dwl from "app/main/data/workspace/libraries"
import * as dws from "app/main/data/workspace/selection"
import * as dwsl from "app/main/data/workspace/shape-layout"
import * as dwsh from "app/main/data/workspace/shapes"
import * as sc from "app/main/data/workspace/shortcuts"
import * as dwv from "app/main/data/workspace/variants"
import * as refs from "app/main/refs"
import { emit, store } from "app/main/store"
import { Dropdown } from "app/main/ui/components/dropdown"
import * as ctx from "app/main/ui/context"
import * as i from "app/main/ui/ds/foundations/assets/icon"
import * as cmm from "app/main/ui/workspace/sidebar/assets/common"
import * as clipboard from "app/util/clipboard"
import * as dom from "app/util/dom"
import * as i18n from "app/util/i18n"
import * as usi from "app/util/shape-icon"
import * as timers from "app/util/timers"
import * as rx from "beicon.v2/core"
import * as l from "okulary.core"
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"

const { tr } = i18n

const menuRef = l.derived("context-menu", refs.workspaceLocal)

const preventDefault = (event: React.MouseEvent) => {
  dom.preventDefault(event)
  dom.stopPropagation(event)
}

// Menu Entry Component
interface MenuEntryProps {
  title: React.ReactNode
  shortcut?: string
  onClick?: (event: React.MouseEvent) => void
  onPointerEnter?: () => void
  onPointerLeave?: () => void
  onUnmount?: () => void
  children?: React.ReactNode
  isSelected?: boolean
  icon?: any
  disabled?: boolean
  value?: string
}

const MenuEntry: React.FC<MenuEntryProps> = React.memo((props) => {
  const {
    title,
    shortcut,
    onClick,
    onPointerEnter,
    onPointerLeave,
    onUnmount,
    children,
    isSelected,
    icon,
    disabled,
    value,
  } = props

  const submenuRef = useRef<HTMLUListElement>(null)
  const hovering = useRef(false)

  const handleClick = useCallback(
    (event: React.MouseEvent) => {
      emit(dw.hideContextMenu())
      if (onClick) onClick(event)
    },
    [onClick]
  )

  const handlePointerEnter = useCallback(() => {
    hovering.current = true
    const submenuNode = submenuRef.current
    if (submenuNode) {
      dom.setCssProperty(submenuNode, "display", "block")
    }
    if (onPointerEnter) onPointerEnter()
  }, [onPointerEnter])

  const handlePointerLeave = useCallback(() => {
    hovering.current = false
    const submenuNode = submenuRef.current
    if (submenuNode) {
      timers.schedule(200, () => {
        if (!hovering.current) {
          dom.setCssProperty(submenuNode, "display", "none")
        }
      })
    }
    if (onPointerLeave) onPointerLeave()
  }, [onPointerLeave])

  const setDomNode = useCallback((domNode: HTMLLIElement | null) => {
    const submenuNode = submenuRef.current
    if (domNode && submenuNode) {
      dom.setCssProperty(submenuNode, "top", `${(domNode as any).offsetTop}px`)
    }
  }, [])

  useEffect(() => {
    if (onUnmount) {
      return onUnmount()
    }
  }, [onUnmount])

  const shortcutKeys = useMemo(() => {
    if (!shortcut) return []
    return scd.splitSc(shortcut)
  }, [shortcut])

  if (icon) {
    return (
      <li
        className={stl.css("icon-menu-item")}
        data-value={value}
        ref={setDomNode}
        onClick={handleClick}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      >
        <span className={stl.css("icon-wrapper")}>
          {isSelected ? (
            <span className={stl.css("selected-icon")}>
              <i.icon iconId={i.tick} size="s" />
            </span>
          ) : (
            <span className={stl.css("selected-icon")} />
          )}
          <span className={stl.css("shape-icon")}>
            <i.icon iconId={icon} size="s" />
          </span>
        </span>
        <span className={stl.css("title")}>{title}</span>
      </li>
    )
  }

  const hasSubmenu = React.Children.count(children) > 1

  return (
    <>
      <li
        className={stl.css("context-menu-item")}
        data-value={value}
        ref={setDomNode}
        onClick={handleClick}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      >
        <span className={stl.css("title")}>{title}</span>
        {shortcut && (
          <span className={stl.css("shortcut")}>
            {shortcutKeys.map((sc, idx) => (
              <span key={`${shortcut}-${idx}`} className={stl.css("shortcut-key")}>
                {sc}
              </span>
            ))}
          </span>
        )}
        {hasSubmenu && (
          <span className={stl.css("submenu-icon")}>
            <i.icon iconId={i.arrow} size="s" />
          </span>
        )}
      </li>
      {hasSubmenu && (
        <ul
          className={stl.css("workspace-context-submenu")}
          ref={submenuRef}
          style={{ display: "none", left: 250 }}
          onContextMenu={preventDefault}
        >
          {children}
        </ul>
      )}
    </>
  )
})

// Menu Separator Component
const MenuSeparator: React.FC = () => {
  return <li className={stl.css("separator")} />
}

// Context Menu Edit Component
interface ContextMenuEditProps {
  shapes: any[]
}

const ContextMenuEdit: React.FC<ContextMenuEditProps> = ({ shapes }) => {
  const doCopy = useCallback(() => emit(dw.copySelected()), [])
  const doCopyLink = useCallback(() => emit(dw.copyLinkToClipboard()), [])
  const doCut = useCallback(
    () => emit(dw.copySelected(), dw.deleteSelected()),
    []
  )
  const doPaste = useCallback(() => emit(dw.pasteFromClipboard()), [])
  const doDuplicate = useCallback(() => emit(dwv.duplicateOrAddVariant()), [])

  const [enabledPasteProps, setEnabledPasteProps] = useState(false)

  const handleCopyCss = useCallback(() => emit(dw.copySelectedCss()), [])
  const handleCopyCssNested = useCallback(
    () => emit(dw.copySelectedCssNested()),
    []
  )
  const handleCopyProps = useCallback(() => emit(dw.copySelectedProps()), [])
  const handlePasteProps = useCallback(() => emit(dw.pasteSelectedProps()), [])
  const handleCopySvg = useCallback(() => emit(dw.copySelectedSvg()), [])
  const handleCopyText = useCallback(() => emit(dw.copySelectedText()), [])

  const handleHoverCopyPaste = useCallback(() => {
    clipboard
      .fromNavigator()
      .pipe(rx.map((data: any) => data.text))
      .pipe(rx.take(1))
      .subscribe({
        next: (data: string) => {
          try {
            const pdata = t.decodeStr(data)
            setEnabledPasteProps(
              dw.pasteDataValid(pdata) && pdata.type === "copied-props"
            )
          } catch {
            setEnabledPasteProps(false)
          }
        },
        error: () => setEnabledPasteProps(false),
      })
  }, [])

  const isChrome = cf.checkBrowser("chrome")

  return (
    <>
      <MenuEntry
        title={tr("workspace.shape.menu.copy")}
        shortcut={sc.getTooltip("copy")}
        onClick={doCopy}
      />
      <MenuEntry
        title={tr("workspace.shape.menu.copy-link")}
        shortcut={sc.getTooltip("copy-link")}
        onClick={doCopyLink}
      />
      <MenuEntry
        title={tr("workspace.shape.menu.cut")}
        shortcut={sc.getTooltip("cut")}
        onClick={doCut}
      />
      <MenuEntry
        title={tr("workspace.shape.menu.paste")}
        shortcut={sc.getTooltip("paste")}
        onClick={doPaste}
      />
      <MenuEntry
        title={tr("workspace.shape.menu.duplicate")}
        shortcut={sc.getTooltip("duplicate")}
        onClick={doDuplicate}
      />
      <MenuEntry
        title={tr("workspace.shape.menu.copy-paste-as")}
        onPointerEnter={isChrome ? handleHoverCopyPaste : undefined}
      >
        <MenuEntry
          title={tr("workspace.shape.menu.copy-css")}
          onClick={handleCopyCss}
        />
        <MenuEntry
          title={tr("workspace.shape.menu.copy-css-nested")}
          onClick={handleCopyCssNested}
        />
        <MenuEntry
          title={tr("workspace.shape.menu.copy-svg")}
          onClick={handleCopySvg}
        />
        <MenuSeparator />
        <MenuEntry
          title={tr("workspace.shape.menu.copy-text")}
          onClick={handleCopyText}
        />
        <MenuEntry
          title={tr("workspace.shape.menu.copy-props")}
          shortcut={sc.getTooltip("copy-props")}
          disabled={shapes.length > 1}
          onClick={handleCopyProps}
        />
        <MenuEntry
          title={tr("workspace.shape.menu.paste-props")}
          shortcut={sc.getTooltip("paste-props")}
          disabled={isChrome && !enabledPasteProps}
          onClick={handlePasteProps}
        />
      </MenuEntry>
      <MenuSeparator />
    </>
  )
}

// Context Menu Layer Position Component
interface ContextMenuLayerPositionProps {
  shapes: any[]
}

const ContextMenuLayerPosition: React.FC<ContextMenuLayerPositionProps> = ({
  shapes,
}) => {
  const doBringForward = useCallback(
    () => emit(dw.verticalOrderSelected("up")),
    []
  )
  const doBringToFront = useCallback(
    () => emit(dw.verticalOrderSelected("top")),
    []
  )
  const doSendBackward = useCallback(
    () => emit(dw.verticalOrderSelected("down")),
    []
  )
  const doSendToBack = useCallback(
    () => emit(dw.verticalOrderSelected("bottom")),
    []
  )

  const selectShapes = useCallback(
    (id: string) => () => emit(dws.selectShape(id)),
    []
  )
  const onPointerEnter = useCallback(
    (id: string) => () => emit(dw.highlightShape(id)),
    []
  )
  const onPointerLeave = useCallback(
    (id: string) => () => emit(dw.dehighlightShape(id)),
    []
  )
  const onUnmount = useCallback(
    (id: string) => () => emit(dw.dehighlightShape(id)),
    []
  )

  const hoverIds = store.getState(refs.currentHoverIds)
  const objects = store.getState(refs.workspacePageObjects)
  const hoverObjs = hoverIds?.map((id: string) => objects[id]).filter(Boolean) || []

  return (
    <>
      {hoverObjs.length > 1 && (
        <MenuEntry title={tr("workspace.shape.menu.select-layer")}>
          {hoverObjs.map((object: any) => (
            <MenuEntry
              key={object.id}
              title={object.name}
              isSelected={shapes.includes(object)}
              onClick={selectShapes(object.id)}
              onPointerEnter={onPointerEnter(object.id)}
              onPointerLeave={onPointerLeave(object.id)}
              onUnmount={onUnmount(object.id)}
              icon={usi.getShapeIcon(object)}
            />
          ))}
        </MenuEntry>
      )}
      <MenuEntry
        title={tr("workspace.shape.menu.forward")}
        shortcut={sc.getTooltip("bring-forward")}
        onClick={doBringForward}
      />
      <MenuEntry
        title={tr("workspace.shape.menu.front")}
        shortcut={sc.getTooltip("bring-front")}
        onClick={doBringToFront}
      />
      <MenuEntry
        title={tr("workspace.shape.menu.backward")}
        shortcut={sc.getTooltip("bring-backward")}
        onClick={doSendBackward}
      />
      <MenuEntry
        title={tr("workspace.shape.menu.back")}
        shortcut={sc.getTooltip("bring-back")}
        onClick={doSendToBack}
      />
      <MenuSeparator />
    </>
  )
}

// Context Menu Flip Component
const ContextMenuFlip: React.FC = () => {
  const doFlipVertical = useCallback(
    () => emit(dw.flipVerticalSelected()),
    []
  )
  const doFlipHorizontal = useCallback(
    () => emit(dw.flipHorizontalSelected()),
    []
  )

  return (
    <>
      <MenuEntry
        title={tr("workspace.shape.menu.flip-vertical")}
        shortcut={sc.getTooltip("flip-vertical")}
        onClick={doFlipVertical}
      />
      <MenuEntry
        title={tr("workspace.shape.menu.flip-horizontal")}
        shortcut={sc.getTooltip("flip-horizontal")}
        onClick={doFlipHorizontal}
      />
      <MenuSeparator />
    </>
  )
}

// Context Menu Thumbnail Component
interface ContextMenuThumbnailProps {
  shapes: any[]
}

const ContextMenuThumbnail: React.FC<ContextMenuThumbnailProps> = ({
  shapes,
}) => {
  const single = shapes.length === 1
  const hasFrame = shapes.some((s) => cfh.frameShape(s))
  const doToggleThumbnail = useCallback(
    () => emit(dw.toggleFileThumbnailSelected()),
    []
  )

  if (!(single && hasFrame)) return null

  return (
    <>
      {shapes.every((s) => s.useForThumbnail) ? (
        <MenuEntry
          title={tr("workspace.shape.menu.thumbnail-remove")}
          onClick={doToggleThumbnail}
        />
      ) : (
        <MenuEntry
          title={tr("workspace.shape.menu.thumbnail-set")}
          shortcut={sc.getTooltip("thumbnail-set")}
          onClick={doToggleThumbnail}
        />
      )}
      <MenuSeparator />
    </>
  )
}

// Context Menu Rename Component
interface ContextMenuRenameProps {
  shapes: any[]
}

const ContextMenuRename: React.FC<ContextMenuRenameProps> = ({ shapes }) => {
  const doRename = useCallback(() => emit(dw.startRenameSelected()), [])

  if (shapes.length !== 1) return null

  return (
    <>
      <MenuSeparator />
      <MenuEntry
        title={tr("workspace.shape.menu.rename")}
        shortcut={sc.getTooltip("rename")}
        onClick={doRename}
      />
    </>
  )
}

// Context Menu Group Component
interface ContextMenuGroupProps {
  shapes: any[]
}

const ContextMenuGroup: React.FC<ContextMenuGroupProps> = ({ shapes }) => {
  const multiple = shapes.length > 1
  const single = shapes.length === 1

  const objects = store.getState(refs.workspacePageObjects)
  const anyInCopy = shapes.some((s) => ctn.hasAnyCopyParent(objects, s))
  const anyIsVariant = shapes.some((s) => ctk.isVariant(s))

  const hasFrame = shapes.find(
    (s) => cfh.frameShape(s) && !ctk.instanceHead(s) && !ctk.isVariantContainer(s)
  )
  const hasGroup = shapes.find(
    (s) => cfh.groupShape(s) && !ctk.instanceHead(s) && !ctk.isVariantContainer(s)
  )
  const hasBool = shapes.find(cfh.boolShape)
  const hasMask = shapes.find((s) => s.maskedGroup)

  const isGroup = single && hasGroup
  const isBool = single && hasBool

  const doCreateGroup = useCallback(() => emit(dw.groupSelected()), [])
  const doRemoveGroup = useCallback(() => emit(dw.ungroupSelected()), [])
  const doMaskGroup = useCallback(() => emit(dw.maskGroup()), [])
  const doUnmaskGroup = useCallback(() => emit(dw.unmaskGroup()), [])
  const doCreateArtboardFromSelection = useCallback(
    () => emit(dwsh.createArtboardFromSelection()),
    []
  )

  if (anyInCopy || anyIsVariant) return null

  return (
    <>
      {(hasBool || hasGroup || hasMask || hasFrame) && (
        <MenuEntry
          title={tr("workspace.shape.menu.ungroup")}
          shortcut={sc.getTooltip("ungroup")}
          onClick={doRemoveGroup}
        />
      )}

      <MenuEntry
        title={tr("workspace.shape.menu.group")}
        shortcut={sc.getTooltip("group")}
        onClick={doCreateGroup}
      />

      {(multiple || (isGroup && !hasMask) || isBool) && (
        <MenuEntry
          title={tr("workspace.shape.menu.mask")}
          shortcut={sc.getTooltip("mask")}
          onClick={doMaskGroup}
        />
      )}

      {hasMask && (
        <MenuEntry
          title={tr("workspace.shape.menu.unmask")}
          shortcut={sc.getTooltip("unmask")}
          onClick={doUnmaskGroup}
        />
      )}

      <MenuEntry
        title={tr("workspace.shape.menu.create-artboard-from-selection")}
        shortcut={sc.getTooltip("artboard-selection")}
        onClick={doCreateArtboardFromSelection}
      />
      <MenuSeparator />
    </>
  )
}

// Context Focus Mode Menu Component
const ContextFocusModeMenu: React.FC = () => {
  const focus = store.getState(refs.workspaceFocusSelected)
  const doToggleFocusMode = useCallback(() => emit(dw.toggleFocusMode()), [])

  return (
    <MenuEntry
      title={
        focus?.length === 0
          ? tr("workspace.focus.focus-on")
          : tr("workspace.focus.focus-off")
      }
      shortcut={sc.getTooltip("toggle-focus-mode")}
      onClick={doToggleFocusMode}
    />
  )
}

// Context Menu Path Component
interface ContextMenuPathProps {
  shapes: any[]
  disableFlatten?: boolean
  disableBooleans?: boolean
}

const ContextMenuPath: React.FC<ContextMenuPathProps> = ({
  shapes,
  disableFlatten,
  disableBooleans,
}) => {
  const multiple = shapes.length > 1
  const single = shapes.length === 1

  const hasGroup = shapes.find(cfh.groupShape)
  const hasBool = shapes.find(cfh.boolShape)
  const hasFrame = shapes.find(cfh.frameShape)
  const hasPath = shapes.find(cfh.pathShape)

  const isGroup = single && hasGroup
  const isBool = single && hasBool
  const isFrame = single && hasFrame

  const doStartEditing = useCallback(
    () => timers.schedule(() => emit(dw.startEditingSelected())),
    []
  )
  const doTransformToPath = useCallback(
    () => emit(dw.convertSelectedToPath()),
    []
  )

  const makeDoBool = useCallback(
    (boolType: string) => () => {
      if (multiple) {
        emit(dw.createBool(boolType as any))
      } else if (isGroup) {
        emit(dw.groupToBool(shapes[0].id, boolType as any))
      } else if (isBool) {
        emit(dw.changeBoolType(shapes[0].id, boolType as any))
      }
    },
    [multiple, isGroup, isBool, shapes]
  )

  return (
    <>
      {single && !isFrame && (
        <MenuEntry
          title={tr("workspace.shape.menu.edit")}
          shortcut={sc.getTooltip("start-editing")}
          onClick={doStartEditing}
        />
      )}

      {!disableFlatten && !hasFrame && !hasPath && (
        <MenuEntry
          title={tr("workspace.shape.menu.flatten")}
          onClick={doTransformToPath}
        />
      )}

      {!hasFrame && !disableBooleans && (multiple || (single && (isGroup || isBool))) && (
        <MenuEntry title={tr("workspace.shape.menu.path")}>
          <MenuEntry
            title={tr("workspace.shape.menu.union")}
            shortcut={sc.getTooltip("bool-union")}
            onClick={makeDoBool("union")}
          />
          <MenuEntry
            title={tr("workspace.shape.menu.difference")}
            shortcut={sc.getTooltip("bool-difference")}
            onClick={makeDoBool("difference")}
          />
          <MenuEntry
            title={tr("workspace.shape.menu.intersection")}
            shortcut={sc.getTooltip("bool-intersection")}
            onClick={makeDoBool("intersection")}
          />
          <MenuEntry
            title={tr("workspace.shape.menu.exclude")}
            shortcut={sc.getTooltip("bool-exclude")}
            onClick={makeDoBool("exclude")}
          />

          {single && isBool && !disableFlatten && (
            <>
              <MenuSeparator />
              <MenuEntry
                title={tr("workspace.shape.menu.flatten")}
                onClick={doTransformToPath}
              />
            </>
          )}
        </MenuEntry>
      )}
    </>
  )
}

// Context Menu Layer Options Component
interface ContextMenuLayerOptionsProps {
  shapes: any[]
}

const ContextMenuLayerOptions: React.FC<ContextMenuLayerOptionsProps> = ({
  shapes,
}) => {
  const ids = shapes.map((s) => s.id)
  const doShowShape = useCallback(
    () => emit(dw.updateShapeFlags(ids, { hidden: false })),
    [ids]
  )
  const doHideShape = useCallback(
    () => emit(dw.updateShapeFlags(ids, { hidden: true })),
    [ids]
  )
  const doLockShape = useCallback(
    () => emit(dw.updateShapeFlags(ids, { blocked: true })),
    [ids]
  )
  const doUnlockShape = useCallback(
    () => emit(dw.updateShapeFlags(ids, { blocked: false })),
    [ids]
  )

  const allHidden = shapes.every((s) => s.hidden)
  const allBlocked = shapes.every((s) => s.blocked)

  return (
    <>
      {allHidden ? (
        <MenuEntry
          title={tr("workspace.shape.menu.show")}
          shortcut={sc.getTooltip("toggle-visibility")}
          onClick={doShowShape}
        />
      ) : (
        <MenuEntry
          title={tr("workspace.shape.menu.hide")}
          shortcut={sc.getTooltip("toggle-visibility")}
          onClick={doHideShape}
        />
      )}

      {allBlocked ? (
        <MenuEntry
          title={tr("workspace.shape.menu.unlock")}
          shortcut={sc.getTooltip("toggle-lock")}
          onClick={doUnlockShape}
        />
      ) : (
        <MenuEntry
          title={tr("workspace.shape.menu.lock")}
          shortcut={sc.getTooltip("toggle-lock")}
          onClick={doLockShape}
        />
      )}
    </>
  )
}

// Context Menu Prototype Component
interface ContextMenuPrototypeProps {
  shapes: any[]
}

const ContextMenuPrototype: React.FC<ContextMenuPrototypeProps> = ({
  shapes,
}) => {
  const flows = store.getState(refs.workspacePageFlows)
  const optionsMode = store.getState(refs.optionsModeGlobal)
  const doAddFlow = useCallback(
    () => emit(dwi.addFlowSelectedFrame()),
    []
  )
  const doRemoveFlow = useCallback(
    (flow: any) => emit(dwi.removeFlow(flow.id)),
    []
  )

  const prototype = optionsMode === "prototype"
  const single = shapes.length === 1
  const hasFrame = shapes.find(cfh.frameShape)
  const isFrame = single && hasFrame

  if (!(prototype && isFrame)) return null

  const flow = ctp.getFrameFlow(flows, shapes[0].id)

  if (flow) {
    return (
      <MenuEntry
        title={tr("workspace.shape.menu.delete-flow-start")}
        onClick={() => doRemoveFlow(flow)}
      />
    )
  }

  return (
    <MenuEntry
      title={tr("workspace.shape.menu.flow-start")}
      onClick={doAddFlow}
    />
  )
}

// Context Menu Layout Component
interface ContextMenuLayoutProps {
  shapes: any[]
}

const ContextMenuLayout: React.FC<ContextMenuLayoutProps> = ({ shapes }) => {
  const single = shapes.length === 1
  const objects = store.getState(refs.workspacePageObjects)
  const anyInCopy = shapes.some((s) => ctn.hasAnyCopyParent(objects, s))

  const hasFlex = single && shapes.every((s) => ctl.flexLayout(s))
  const hasGrid = single && shapes.every((s) => ctl.gridLayout(s))

  const anyIsVariant = shapes.some((s) => ctk.isVariant(s))

  const onAddLayout = useCallback(
    (event: React.MouseEvent) => {
      const value = dom.getData(dom.getCurrentTarget(event), "value")
      const type = value as any
      emit(
        dwsl.createLayout(type),
        { [ev.origin]: "workspace:context-menu" }
      )
    },
    []
  )

  const onRemoveLayout = useCallback(
    (event: React.MouseEvent) => {
      const ids = shapes.map((s) => s.id)
      emit(dwsl.removeLayout(ids))
    },
    [shapes]
  )

  if (anyInCopy) return null

  if (hasFlex || hasGrid) {
    return (
      <div>
        <MenuSeparator />
        {hasFlex ? (
          <MenuEntry
            title={tr("workspace.shape.menu.remove-flex")}
            shortcut={sc.getTooltip("toggle-layout-flex")}
            onClick={onRemoveLayout}
          />
        ) : (
          <MenuEntry
            title={tr("workspace.shape.menu.remove-grid")}
            shortcut={sc.getTooltip("toggle-layout-grid")}
            onClick={onRemoveLayout}
          />
        )}
      </div>
    )
  }

  if (single || !anyIsVariant) {
    return (
      <div>
        <MenuSeparator />
        <MenuEntry
          title={tr("workspace.shape.menu.add-flex")}
          shortcut={sc.getTooltip("toggle-layout-flex")}
          value="flex"
          onClick={onAddLayout}
        />
        <MenuEntry
          title={tr("workspace.shape.menu.add-grid")}
          shortcut={sc.getTooltip("toggle-layout-grid")}
          value="grid"
          onClick={onAddLayout}
        />
      </div>
    )
  }

  return null
}

// Context Menu Component Component
interface ContextMenuComponentProps {
  shapes: any[]
}

const ContextMenuComponent: React.FC<ContextMenuComponentProps> = ({ shapes }) => {
  const single = shapes.length === 1
  const objects = store.getState(refs.workspacePageObjects)
  const canMakeComponent = shapes.every((s) =>
    ctn.validShapeForComponent(objects, s)
  )
  const componentsMenuEntries = cmm.generateComponentsMenuEntries(shapes)
  const variantContainer =
    single && ctk.isVariantContainer(shapes[0])
  const allMain = shapes.every((s) => ctk.mainInstance(s))
  const anyVariant = shapes.some((s) => ctk.isVariant(s))

  const doAddComponent = useCallback(() => emit(dwl.addComponent()), [])
  const doAddMultipleComponents = useCallback(
    () => emit(dwl.addMultipleComponents()),
    []
  )
  const doCombineAsVariants = useCallback(
    () =>
      emit(
        dwv.combineSelectedAsVariants({ trigger: "workspace:context-menu-component" })
      ),
    []
  )
  const doAddVariant = useCallback(
    () =>
      emit(
        ev.event({
          [ev.name]: "add-new-variant",
          [ev.origin]: "workspace:context-menu-component",
        }),
        dwv.addNewVariant(shapes[0].id)
      ),
    [shapes]
  )

  return (
    <>
      {canMakeComponent && (
        <>
          <MenuSeparator />
          <MenuEntry
            title={tr("workspace.shape.menu.create-component")}
            shortcut={sc.getTooltip("create-component-variant")}
            onClick={doAddComponent}
          />
          {!single && (
            <MenuEntry
              title={tr("workspace.shape.menu.create-multiple-components")}
              onClick={doAddMultipleComponents}
            />
          )}
        </>
      )}

      {componentsMenuEntries && componentsMenuEntries.length > 0 && (
        <>
          <MenuSeparator />
          {componentsMenuEntries
            .filter((entry: any) => entry)
            .map((entry: any) => (
              <MenuEntry
                key={entry.title}
                title={entry.title}
                shortcut={
                  entry.shortcut ? sc.getTooltip(entry.shortcut) : undefined
                }
                onClick={entry.action}
              />
            ))}
        </>
      )}

      {variantContainer && (
        <>
          <MenuSeparator />
          <MenuEntry
            title={tr("workspace.shape.menu.add-variant")}
            shortcut={sc.getTooltip("create-component-variant")}
            onClick={doAddVariant}
          />
        </>
      )}

      {!single && allMain && !anyVariant && (
        <>
          <MenuSeparator />
          <MenuEntry
            title={tr("workspace.shape.menu.combine-as-variants")}
            onClick={doCombineAsVariants}
          />
        </>
      )}
    </>
  )
}

// Context Menu Delete Component
const ContextMenuDelete: React.FC = () => {
  const doDelete = useCallback(() => emit(dw.deleteSelected()), [])

  return (
    <>
      <MenuSeparator />
      <MenuEntry
        title={tr("workspace.shape.menu.delete")}
        shortcut={sc.getTooltip("delete")}
        onClick={doDelete}
      />
    </>
  )
}

// Shape Context Menu Component
interface ShapeContextMenuProps {
  mdata: {
    disableBooleans?: boolean
    disableFlatten?: boolean
  }
}

const ShapeContextMenu: React.FC<ShapeContextMenuProps> = ({ mdata }) => {
  const { disableBooleans, disableFlatten } = mdata
  const objects = store.getState(refs.workspacePageObjects)
  const shapeIds = store.getState(refs.selectedShapes)
  const shapes = shapeIds.map((id: string) => objects[id]).filter(Boolean)
  const isNotVariantContainer = shapes.find(
    (s) => !ctk.isVariantContainer(s)
  )

  const props = {
    shapes,
    disableBooleans,
    disableFlatten,
  }

  return (
    <>
      <ContextMenuEdit {...props} />
      <ContextMenuLayerPosition {...props} />
      {isNotVariantContainer && <ContextMenuFlip {...props} />}
      <ContextMenuThumbnail {...props} />
      <ContextMenuRename {...props} />
      <ContextMenuGroup {...props} />
      <ContextFocusModeMenu />
      <ContextMenuPath {...props} />
      <ContextMenuLayerOptions {...props} />
      <ContextMenuPrototype {...props} />
      {isNotVariantContainer && <ContextMenuLayout {...props} />}
      <ContextMenuComponent {...props} />
      <ContextMenuDelete />
    </>
  )
}

// Page Item Context Menu Component
interface PageItemContextMenuProps {
  mdata: {
    page: any
    deletable?: boolean
  }
}

const PageItemContextMenu: React.FC<PageItemContextMenuProps> = ({ mdata }) => {
  const { page, deletable } = mdata
  const id = page.id

  const deleteFn = useCallback(() => emit(dw.deletePage(id)), [id])
  const doDelete = useCallback(
    () =>
      emit(
        modal.show({
          type: "confirm",
          title: tr("modals.delete-page.title"),
          message: tr("modals.delete-page.body"),
          onAccept: deleteFn,
        })
      ),
    [deleteFn]
  )
  const doDuplicate = useCallback(
    () =>
      emit(
        dw.duplicatePage(id),
        ptk.event(ev.event, { [ev.name]: "duplicate-page" })
      ),
    [id]
  )
  const doRename = useCallback(
    () => emit(dw.startRenamePageItem(id)),
    [id]
  )

  return (
    <>
      {deletable && (
        <MenuEntry
          title={tr("workspace.assets.delete")}
          onClick={doDelete}
        />
      )}
      <MenuEntry
        title={tr("workspace.assets.rename")}
        onClick={doRename}
      />
      <MenuEntry
        title={tr("workspace.assets.duplicate")}
        onClick={doDuplicate}
      />
    </>
  )
}

// Viewport Context Menu Component
const ViewportContextMenu: React.FC<{ mdata: any }> = ({ mdata }) => {
  const focus = store.getState(refs.workspaceFocusSelected)
  const readOnly = ctx.useWorkspaceReadOnly()
  const doPaste = useCallback(() => emit(dw.pasteFromClipboard()), [])
  const doHideUi = useCallback(
    () =>
      emit(
        dw.toggleLayoutFlag("hide-ui"),
        ev.origin("workspace-context-menu")
      ),
    []
  )
  const doToggleFocusMode = useCallback(() => emit(dw.toggleFocusMode()), [])

  return (
    <>
      {!readOnly && (
        <MenuEntry
          title={tr("workspace.shape.menu.paste")}
          shortcut={sc.getTooltip("paste")}
          onClick={doPaste}
        />
      )}
      <MenuEntry
        title={tr("workspace.shape.menu.hide-ui")}
        shortcut={sc.getTooltip("hide-ui")}
        onClick={doHideUi}
      />
      {focus && focus.length > 0 && (
        <MenuEntry
          title={tr("workspace.focus.focus-off")}
          shortcut={sc.getTooltip("toggle-focus-mode")}
          onClick={doToggleFocusMode}
        />
      )}
    </>
  )
}

// Grid Track Context Menu Component
interface GridTrackContextMenuProps {
  mdata: {
    type: string
    index: number
    gridId: string
  }
}

const GridTrackContextMenu: React.FC<GridTrackContextMenuProps> = ({
  mdata,
}) => {
  const { type, index, gridId } = mdata

  const doDeleteTrack = useCallback(
    () => emit(dwsl.removeLayoutTrack([gridId], type, index)),
    [gridId, type, index]
  )
  const doAddTrackBefore = useCallback(
    () =>
      emit(dwsl.addLayoutTrack([gridId], type, ctl.defaultTrackValue, index)),
    [gridId, type, index]
  )
  const doAddTrackAfter = useCallback(
    () =>
      emit(
        dwsl.addLayoutTrack([gridId], type, ctl.defaultTrackValue, index + 1)
      ),
    [gridId, type, index]
  )
  const doDuplicateTrack = useCallback(
    () => emit(dwsl.duplicateLayoutTrack([gridId], type, index)),
    [gridId, type, index]
  )
  const doDeleteTrackShapes = useCallback(
    () =>
      emit(
        dwsl.removeLayoutTrack([gridId], type, index, { withShapes: true })
      ),
    [gridId, type, index]
  )

  if (type === "column") {
    return (
      <>
        <MenuEntry
          title={tr("workspace.context-menu.grid-track.column.duplicate")}
          onClick={doDuplicateTrack}
        />
        <MenuEntry
          title={tr("workspace.context-menu.grid-track.column.add-before")}
          onClick={doAddTrackBefore}
        />
        <MenuEntry
          title={tr("workspace.context-menu.grid-track.column.add-after")}
          onClick={doAddTrackAfter}
        />
        <MenuEntry
          title={tr("workspace.context-menu.grid-track.column.delete")}
          onClick={doDeleteTrack}
        />
        <MenuEntry
          title={tr("workspace.context-menu.grid-track.column.delete-shapes")}
          onClick={doDeleteTrackShapes}
        />
      </>
    )
  }

  return (
    <>
      <MenuEntry
        title={tr("workspace.context-menu.grid-track.row.duplicate")}
        onClick={doDuplicateTrack}
      />
      <MenuEntry
        title={tr("workspace.context-menu.grid-track.row.add-before")}
        onClick={doAddTrackBefore}
      />
      <MenuEntry
        title={tr("workspace.context-menu.grid-track.row.add-after")}
        onClick={doAddTrackAfter}
      />
      <MenuEntry
        title={tr("workspace.context-menu.grid-track.row.delete")}
        onClick={doDeleteTrack}
      />
      <MenuEntry
        title={tr("workspace.context-menu.grid-track.row.delete-shapes")}
        onClick={doDeleteTrackShapes}
      />
    </>
  )
}

// Grid Cells Context Menu Component
interface GridCellsContextMenuProps {
  mdata: {
    grid: any
    cells: any[]
  }
}

const GridCellsContextMenu: React.FC<GridCellsContextMenuProps> = ({
  mdata,
}) => {
  const { grid, cells } = mdata
  const single = cells.length === 1

  const canMerge = useMemo(
    () => ctl.validAreaCells(cells),
    [cells]
  )

  const doMergeCells = useCallback(
    () => emit(dwsl.mergeCells(grid.id, cells.map((c: any) => c.id))),
    [grid, cells]
  )
  const doCreateBoard = useCallback(
    () =>
      emit(dwsl.createCellBoard(grid.id, cells.map((c: any) => c.id))),
    [grid, cells]
  )

  return (
    <>
      {!single && (
        <MenuEntry
          title={tr("workspace.context-menu.grid-cells.merge")}
          onClick={doMergeCells}
          disabled={!canMerge}
        />
      )}

      {single && (
        <MenuEntry
          title={tr("workspace.context-menu.grid-cells.area")}
          onClick={doMergeCells}
        />
      )}

      <MenuEntry
        title={tr("workspace.context-menu.grid-cells.create-board")}
        onClick={doCreateBoard}
        disabled={!single && !canMerge}
      />
    </>
  )
}

// Main Context Menu Component
const ContextMenu: React.FC = () => {
  const mdata = store.getState(menuRef)
  const top = (mdata?.position?.y || 0) - 20
  const left = mdata?.position?.x || 0
  const dropdownRef = useRef<HTMLDivElement>(null)
  const readOnly = ctx.useWorkspaceReadOnly()

  useEffect(() => {
    const dropdown = dropdownRef.current
    if (!dropdown || !mdata) return

    const boundingRect = dom.getBoundingRect(dropdown)
    const windowSize = dom.getWindowSize()
    const deltaX = Math.max(
      boundingRect.right + 250 - windowSize.width,
      0
    )
    const deltaY = Math.max(
      boundingRect.bottom - windowSize.height,
      0
    )
    const newStyle = `top: ${top - deltaY}px; left: ${left - deltaX}px;`

    if (deltaX > 0 || deltaY > 0) {
      dropdown.setAttribute("style", newStyle)
    }
  }, [mdata, top, left])

  const handleClose = useCallback(() => emit(dw.hideContextMenu()), [])

  return (
    <Dropdown show={!!mdata} onClose={handleClose}>
      <div
        className={stl.css("workspace-context-menu")}
        ref={dropdownRef}
        style={{ top, left }}
        data-testid="context-menu"
        onContextMenu={preventDefault}
      >
        <ul className={stl.css("context-list")}>
          {readOnly ? (
            <ViewportContextMenu mdata={mdata} />
          ) : (
            <>
              {mdata?.kind === "shape" && <ShapeContextMenu mdata={mdata} />}
              {mdata?.kind === "page" && <PageItemContextMenu mdata={mdata} />}
              {mdata?.kind === "grid-track" && (
                <GridTrackContextMenu mdata={mdata} />
              )}
              {mdata?.kind === "grid-cells" && (
                <GridCellsContextMenu mdata={mdata} />
              )}
              {(!mdata?.kind || mdata?.kind === "viewport") && (
                <ViewportContextMenu mdata={mdata} />
              )}
            </>
          )}
        </ul>
      </div>
    </Dropdown>
  )
}

export { ContextMenu }
