// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as stl from "app/main/style"
import * as d from "app/common/data"
import * as dm from "app/common/data/macros"
import * as cfh from "app/common/files/helpers"
import * as uuid from "app/common/uuid"
import * as cf from "app/config"
import * as dcm from "app/main/data/common"
import * as ev from "app/main/data/event"
import * as de from "app/main/data/exports/assets"
import * as fexp from "app/main/data/exports/files"
import * as modal from "app/main/data/modal"
import * as dp from "app/main/data/plugins"
import * as du from "app/main/data/profile"
import * as scd from "app/main/data/shortcuts"
import * as dw from "app/main/data/workspace"
import * as dwl from "app/main/data/workspace/libraries"
import * as sc from "app/main/data/workspace/shortcuts"
import * as dwu from "app/main/data/workspace/undo"
import * as dwv from "app/main/data/workspace/versions"
import * as features from "app/main/features"
import * as refs from "app/main/refs"
import { emit, store, stream } from "app/main/store"
import {
  DropdownMenu,
  DropdownMenuItem,
} from "app/main/ui/components/dropdown-menu"
import * as ctx from "app/main/ui/context"
import {
  getSubscriptionType,
  MainMenuPowerUp,
} from "app/main/ui/dashboard/subscription"
import { IconButton } from "app/main/ui/ds/buttons/icon-button"
import * as i from "app/main/ui/ds/foundations/assets/icon"
import * as hooks from "app/main/ui/hooks"
import * as deprecatedIcon from "app/main/ui/icons"
import * as preg from "app/plugins/register"
import * as dom from "app/util/dom"
import * as i18n from "app/util/i18n"
import * as kbd from "app/util/keyboard"
import * as rx from "beicon.v2/core"
import * as ptk from "potok.v2/core"
import React, { useCallback, useEffect, useMemo, useState } from "react"

const { tr } = i18n

// Help Info Menu Component
interface HelpInfoMenuProps {
  layout: any
  onClose: () => void
}

const HelpInfoMenu: React.FC<HelpInfoMenuProps> = ({ layout, onClose }) => {
  const navToHelpCenter = useCallback(() => {
    emit(
      ptk.event(ev.event, {
        [ev.name]: "explore-help-center-click",
        [ev.origin]: "workspace-menu:in-app",
      })
    )
    dom.openNewWindow("https://help.penpot.app")
  }, [])

  const navToCommunity = useCallback(() => {
    emit(
      ptk.event(ev.event, {
        [ev.name]: "explore-community-click",
        [ev.origin]: "workspace-menu:in-app",
      })
    )
    dom.openNewWindow("https://community.penpot.app")
  }, [])

  const navToYoutube = useCallback(() => {
    emit(
      ptk.event(ev.event, {
        [ev.name]: "explore-tutorials-click",
        [ev.origin]: "workspace-menu:in-app",
      })
    )
    dom.openNewWindow("https://www.youtube.com/c/Penpot")
  }, [])

  const navToTemplates = useCallback(() => {
    emit(
      ptk.event(ev.event, {
        [ev.name]: "explore-libraries-click",
        [ev.origin]: "workspace",
      })
    )
    dom.openNewWindow("https://penpot.app/libraries-templates")
  }, [])

  const navToGithub = useCallback(() => {
    emit(
      ptk.event(ev.event, {
        [ev.name]: "explore-github-repository-click",
        [ev.origin]: "workspace-menu:in-app",
      })
    )
    dom.openNewWindow("https://github.com/penpot/penpot")
  }, [])

  const navToTerms = useCallback(() => {
    emit(
      ptk.event(ev.event, {
        [ev.name]: "explore-terms-service-click",
        [ev.origin]: "workspace-menu:in-app",
      })
    )
    dom.openNewWindow("https://penpot.app/terms")
  }, [])

  const navToFeedback = useCallback(() => {
    emit(dcm.goToFeedback())
  }, [])

  const plugins = features.activeFeature(store.getState(), "plugins/runtime")

  const showShortcuts = useCallback(() => {
    if (layout?.hasOwnProperty("collapse-left-sidebar")) {
      emit(dw.toggleLayoutFlag("collapse-left-sidebar"))
    }
    emit(
      ptk.withMeta(
        dw.toggleLayoutFlag("shortcuts"),
        { [ev.origin]: "workspace-header" }
      )
    )
  }, [layout])

  const showReleaseNotes = useCallback(
    (event: React.MouseEvent) => {
      const version = cf.version?.main
      console.log(version)
      emit(
        ptk.event(ev.event, { [ev.name]: "show-release-notes", version })
      )
      if (kbd.alt(event) && kbd.mod(event)) {
        emit(modal.show({ type: "onboarding" }))
      } else {
        emit(modal.show({ type: "release-notes", version }))
      }
    },
    []
  )

  const handleEnter = (fn: () => void) => (event: React.KeyboardEvent) => {
    if (kbd.enter(event)) fn()
  }

  const shortcutKeys = useMemo(() => scd.splitSc(sc.getTooltip("show-shortcuts")), [])

  return (
    <DropdownMenu
      show={true}
      className={stl.cssCase("sub-menu", true, "help-info", plugins, "help-info-old", !plugins)}
      onClose={onClose}
    >
      <DropdownMenuItem
        className={stl.css("submenu-item")}
        onClick={navToHelpCenter}
        onKeyDown={handleEnter(navToHelpCenter)}
        id="file-menu-help-center"
      >
        <span className={stl.css("item-name")}>{tr("labels.help-center")}</span>
      </DropdownMenuItem>

      <DropdownMenuItem
        className={stl.css("submenu-item")}
        onClick={navToCommunity}
        onKeyDown={handleEnter(navToCommunity)}
        id="file-menu-community"
      >
        <span className={stl.css("item-name")}>{tr("labels.community")}</span>
      </DropdownMenuItem>

      <DropdownMenuItem
        className={stl.css("submenu-item")}
        onClick={navToYoutube}
        onKeyDown={handleEnter(navToYoutube)}
        id="file-menu-youtube"
      >
        <span className={stl.css("item-name")}>{tr("labels.tutorials")}</span>
      </DropdownMenuItem>

      <DropdownMenuItem
        className={stl.css("submenu-item")}
        onClick={showReleaseNotes}
        onKeyDown={handleEnter(() => showReleaseNotes({} as any))}
        id="file-menu-release-notes"
      >
        <span className={stl.css("item-name")}>{tr("labels.release-notes")}</span>
      </DropdownMenuItem>

      <DropdownMenuItem
        className={stl.css("submenu-item")}
        onClick={navToTemplates}
        onKeyDown={handleEnter(navToTemplates)}
        id="file-menu-templates"
      >
        <span className={stl.css("item-name")}>
          {tr("labels.libraries-and-templates")}
        </span>
      </DropdownMenuItem>

      <DropdownMenuItem
        className={stl.css("submenu-item")}
        onClick={navToGithub}
        onKeyDown={handleEnter(navToGithub)}
        id="file-menu-github"
      >
        <span className={stl.css("item-name")}>{tr("labels.github-repo")}</span>
      </DropdownMenuItem>

      <DropdownMenuItem
        className={stl.css("submenu-item")}
        onClick={navToTerms}
        onKeyDown={handleEnter(navToTerms)}
        id="file-menu-terms"
      >
        <span className={stl.css("item-name")}>
          {tr("auth.terms-of-service")}
        </span>
      </DropdownMenuItem>

      <DropdownMenuItem
        className={stl.css("submenu-item")}
        onClick={showShortcuts}
        onKeyDown={handleEnter(showShortcuts)}
        id="file-menu-shortcuts"
      >
        <span className={stl.css("item-name")}>{tr("label.shortcuts")}</span>
        <span className={stl.css("shortcut")}>
          {shortcutKeys.map((sc) => (
            <span key={sc} className={stl.css("shortcut-key")}>
              {sc}
            </span>
          ))}
        </span>
      </DropdownMenuItem>

      {cf.flags?.has("user-feedback") && (
        <DropdownMenuItem
          className={stl.cssCase("feedback", true, "item-name", true)}
          onClick={navToFeedback}
          onKeyDown={handleEnter(navToFeedback)}
          id="file-menu-feedback"
        >
          {tr("labels.give-feedback")}
        </DropdownMenuItem>
      )}
    </DropdownMenu>
  )
}

// Preferences Menu Component
interface PreferencesMenuProps {
  layout: any
  profile: any
  toggleFlag: (event: React.MouseEvent) => void
  onClose: () => void
  toggleTheme: (event: React.MouseEvent) => void
}

const PreferencesMenu: React.FC<PreferencesMenuProps> = ({
  layout,
  profile,
  toggleFlag,
  onClose,
  toggleTheme,
}) => {
  const showNudgeOptions = useCallback(() => {
    modal.show({ type: "nudge-option" })
  }, [])

  const handleEnter = (fn: () => void) => (event: React.KeyboardEvent) => {
    if (kbd.enter(event)) fn()
  }

  const renderToggleItem = (
    id: string,
    testId: string,
    condition: boolean,
    enableLabel: string,
    disableLabel: string,
    tooltipKey: string
  ) => (
    <DropdownMenuItem
      onClick={toggleFlag}
      className={stl.css("submenu-item")}
      onKeyDown={handleEnter(toggleFlag)}
      data-testid={testId}
      id={id}
    >
      <span className={stl.css("item-name")}>
        {condition ? disableLabel : enableLabel}
      </span>
      <span className={stl.css("shortcut")}>
        {scd.splitSc(sc.getTooltip(tooltipKey as any)).map((sc) => (
          <span key={sc} className={stl.css("shortcut-key")}>
            {sc}
          </span>
        ))}
      </span>
    </DropdownMenuItem>
  )

  const themeLabel = useMemo(() => {
    switch (profile?.theme) {
      case "dark":
        return tr("workspace.header.menu.toggle-light-theme")
      case "light":
        return tr("workspace.header.menu.toggle-system-theme")
      case "system":
        return tr("workspace.header.menu.toggle-dark-theme")
      default:
        return tr("workspace.header.menu.toggle-light-theme")
    }
  }, [profile?.theme])

  return (
    <DropdownMenu show={true} className={stl.cssCase("sub-menu", true, "preferences", true)} onClose={onClose}>
      {renderToggleItem(
        "file-menu-scale-text",
        "scale-text",
        layout?.has?.("scale-text"),
        tr("workspace.header.menu.enable-scale-content"),
        tr("workspace.header.menu.disable-scale-content"),
        "scale"
      )}

      {renderToggleItem(
        "file-menu-snap-ruler-guides",
        "snap-ruler-guides",
        layout?.has?.("snap-ruler-guides"),
        tr("workspace.header.menu.enable-snap-ruler-guides"),
        tr("workspace.header.menu.disable-snap-ruler-guides"),
        "toggle-snap-ruler-guide"
      )}

      {renderToggleItem(
        "file-menu-snap-guides",
        "snap-guides",
        layout?.has?.("snap-guides"),
        tr("workspace.header.menu.enable-snap-guides"),
        tr("workspace.header.menu.disable-snap-guides"),
        "toggle-snap-guides"
      )}

      {renderToggleItem(
        "file-menu-dynamic-alignment",
        "dynamic-alignment",
        layout?.has?.("dynamic-alignment"),
        tr("workspace.header.menu.enable-dynamic-alignment"),
        tr("workspace.header.menu.disable-dynamic-alignment"),
        "toggle-alignment"
      )}

      {renderToggleItem(
        "file-menu-pixel-grid",
        "snap-pixel-grid",
        layout?.has?.("snap-pixel-grid"),
        tr("workspace.header.menu.enable-snap-pixel-grid"),
        tr("workspace.header.menu.disable-snap-pixel-grid"),
        "snap-pixel-grid"
      )}

      <DropdownMenuItem
        onClick={showNudgeOptions}
        className={stl.css("submenu-item")}
        onKeyDown={handleEnter(showNudgeOptions)}
        data-testid="snap-pixel-grid"
        id="file-menu-nudge"
      >
        <span className={stl.css("item-name")}>{tr("modals.nudge-title")}</span>
      </DropdownMenuItem>

      <DropdownMenuItem
        onClick={toggleTheme}
        className={stl.css("submenu-item")}
        onKeyDown={handleEnter(toggleTheme)}
        data-testid="toggle-theme"
        id="file-menu-toggle-theme"
      >
        <span className={stl.css("item-name")}>{themeLabel}</span>
        <span className={stl.css("shortcut")}>
          {scd.splitSc(sc.getTooltip("toggle-theme")).map((sc) => (
            <span key={sc} className={stl.css("shortcut-key")}>
              {sc}
            </span>
          ))}
        </span>
      </DropdownMenuItem>
    </DropdownMenu>
  )
}

// View Menu Component
interface ViewMenuProps {
  layout: any
  toggleFlag: (event: React.MouseEvent) => void
  onClose: () => void
}

const ViewMenu: React.FC<ViewMenuProps> = ({ layout, toggleFlag, onClose }) => {
  const readOnly = ctx.useWorkspaceReadOnly()

  const toggleColorPalette = useCallback(() => {
    hooks.setResizeType("bottom")
    emit(
      dw.removeLayoutFlag("textpalette"),
      ptk.withMeta(dw.toggleLayoutFlag("colorpalette"), {
        [ev.origin]: "workspace-menu",
      })
    )
  }, [])

  const toggleTextPalette = useCallback(() => {
    hooks.setResizeType("bottom")
    emit(
      dw.removeLayoutFlag("colorpalette"),
      ptk.withMeta(dw.toggleLayoutFlag("textpalette"), {
        [ev.origin]: "workspace-menu",
      })
    )
  }, [])

  const handleEnter = (fn: () => void) => (event: React.KeyboardEvent) => {
    if (kbd.enter(event)) fn()
  }

  const renderToggleItem = (
    id: string,
    testId: string,
    condition: boolean,
    enableLabel: string,
    disableLabel: string,
    tooltipKey: string
  ) => (
    <DropdownMenuItem
      className={stl.css("submenu-item")}
      onClick={toggleFlag}
      onKeyDown={handleEnter(toggleFlag)}
      data-testid={testId}
      id={id}
    >
      <span className={stl.css("item-name")}>
        {condition ? disableLabel : enableLabel}
      </span>
      <span className={stl.css("shortcut")}>
        {scd.splitSc(sc.getTooltip(tooltipKey as any)).map((sc) => (
          <span key={sc} className={stl.css("shortcut-key")}>
            {sc}
          </span>
        ))}
      </span>
    </DropdownMenuItem>
  )

  const renderToggleItemNoShortcut = (
    id: string,
    testId: string,
    condition: boolean,
    enableLabel: string,
    disableLabel: string
  ) => (
    <DropdownMenuItem
      className={stl.css("submenu-item")}
      onClick={toggleFlag}
      onKeyDown={handleEnter(toggleFlag)}
      data-testid={testId}
      id={id}
    >
      <span className={stl.css("item-name")}>
        {condition ? disableLabel : enableLabel}
      </span>
    </DropdownMenuItem>
  )

  return (
    <DropdownMenu
      show={true}
      className={stl.cssCase("sub-menu", true, "view", true)}
      onClose={onClose}
    >
      {renderToggleItem(
        "file-menu-rulers",
        "rulers",
        layout?.has?.("rulers"),
        tr("workspace.header.menu.show-rules"),
        tr("workspace.header.menu.hide-rules"),
        "toggle-rulers"
      )}

      {renderToggleItem(
        "file-menu-guides",
        "display-guides",
        layout?.has?.("display-guides"),
        tr("workspace.header.menu.show-guides"),
        tr("workspace.header.menu.hide-guides"),
        "toggle-guides"
      )}

      {!readOnly && (
        <>
          <DropdownMenuItem
            className={stl.css("submenu-item")}
            onClick={toggleColorPalette}
            onKeyDown={handleEnter(toggleColorPalette)}
            id="file-menu-color-palette"
          >
            <span className={stl.css("item-name")}>
              {layout?.has?.("colorpalette")
                ? tr("workspace.header.menu.hide-palette")
                : tr("workspace.header.menu.show-palette")}
            </span>
            <span className={stl.css("shortcut")}>
              {scd.splitSc(sc.getTooltip("toggle-colorpalette")).map((sc) => (
                <span key={sc} className={stl.css("shortcut-key")}>
                  {sc}
                </span>
              ))}
            </span>
          </DropdownMenuItem>

          <DropdownMenuItem
            className={stl.css("submenu-item")}
            onClick={toggleTextPalette}
            onKeyDown={handleEnter(toggleTextPalette)}
            id="file-menu-text-palette"
          >
            <span className={stl.css("item-name")}>
              {layout?.has?.("textpalette")
                ? tr("workspace.header.menu.hide-textpalette")
                : tr("workspace.header.menu.show-textpalette")}
            </span>
            <span className={stl.css("shortcut")}>
              {scd.splitSc(sc.getTooltip("toggle-textpalette")).map((sc) => (
                <span key={sc} className={stl.css("shortcut-key")}>
                  {sc}
                </span>
              ))}
            </span>
          </DropdownMenuItem>
        </>
      )}

      {renderToggleItemNoShortcut(
        "file-menu-artboards",
        "display-artboard-names",
        layout?.has?.("display-artboard-names"),
        tr("workspace.header.menu.show-artboard-names"),
        tr("workspace.header.menu.hide-artboard-names")
      )}

      {renderToggleItem(
        "file-menu-pixel-grid",
        "show-pixel-grid",
        layout?.has?.("show-pixel-grid"),
        tr("workspace.header.menu.show-pixel-grid"),
        tr("workspace.header.menu.hide-pixel-grid"),
        "show-pixel-grid"
      )}

      <DropdownMenuItem
        className={stl.css("submenu-item")}
        onClick={toggleFlag}
        onKeyDown={handleEnter(toggleFlag)}
        data-testid="hide-ui"
        id="file-menu-hide-ui"
      >
        <span className={stl.css("item-name")}>
          {tr("workspace.shape.menu.hide-ui")}
        </span>
        <span className={stl.css("shortcut")}>
          {scd.splitSc(sc.getTooltip("hide-ui")).map((sc) => (
            <span key={sc} className={stl.css("shortcut-key")}>
              {sc}
            </span>
          ))}
        </span>
      </DropdownMenuItem>
    </DropdownMenu>
  )
}

// Edit Menu Component
interface EditMenuProps {
  onClose: () => void
}

const EditMenu: React.FC<EditMenuProps> = ({ onClose }) => {
  const selectAll = useCallback(() => emit(dw.selectAll()), [])
  const undo = useCallback(() => emit(dwu.undo()), [])
  const redo = useCallback(() => emit(dwu.redo()), [])
  const perms = ctx.usePermissions()
  const canEdit = perms?.canEdit

  const handleEnter = (fn: () => void) => (event: React.KeyboardEvent) => {
    if (kbd.enter(event)) fn()
  }

  return (
    <DropdownMenu
      show={true}
      className={stl.cssCase("sub-menu", true, "edit", true)}
      onClose={onClose}
    >
      <DropdownMenuItem
        className={stl.css("submenu-item")}
        onClick={selectAll}
        onKeyDown={handleEnter(selectAll)}
        id="file-menu-select-all"
      >
        <span className={stl.css("item-name")}>
          {tr("workspace.header.menu.select-all")}
        </span>
        <span className={stl.css("shortcut")}>
          {scd.splitSc(sc.getTooltip("select-all")).map((sc) => (
            <span key={sc} className={stl.css("shortcut-key")}>
              {sc}
            </span>
          ))}
        </span>
      </DropdownMenuItem>

      {canEdit && (
        <DropdownMenuItem
          className={stl.css("submenu-item")}
          onClick={undo}
          onKeyDown={handleEnter(undo)}
          id="file-menu-undo"
        >
          <span className={stl.css("item-name")}>{tr("workspace.header.menu.undo")}</span>
          <span className={stl.css("shortcut")}>
            {scd.splitSc(sc.getTooltip("undo")).map((sc) => (
              <span key={sc} className={stl.css("shortcut-key")}>
                {sc}
              </span>
            ))}
          </span>
        </DropdownMenuItem>
      )}

      {canEdit && (
        <DropdownMenuItem
          className={stl.css("submenu-item")}
          onClick={redo}
          onKeyDown={handleEnter(redo)}
          id="file-menu-redo"
        >
          <span className={stl.css("item-name")}>{tr("workspace.header.menu.redo")}</span>
          <span className={stl.css("shortcut")}>
            {scd.splitSc(sc.getTooltip("redo")).map((sc) => (
              <span key={sc} className={stl.css("shortcut-key")}>
                {sc}
              </span>
            ))}
          </span>
        </DropdownMenuItem>
      )}
    </DropdownMenu>
  )
}

// File Menu Component
interface FileMenuProps {
  file: any
  onClose: () => void
}

const FileMenu: React.FC<FileMenuProps> = ({ file, onClose }) => {
  const fileId = file?.id
  const shared = file?.isShared

  const objects = store.getState(refs.workspacePageObjects)
  const selected = store.getState(refs.selectedShapes)
  const allFrames = cfh.getImmediateChildren(objects, uuid.zero).filter(cfh.frameShape)

  const selectedFrames = allFrames.filter((f: any) => selected.includes(f.id))
  const frames = selectedFrames?.length > 0 ? selectedFrames : allFrames

  const perms = ctx.usePermissions()
  const canEdit = perms?.canEdit

  const onRemoveShared = useCallback(
    (event: React.MouseEvent) => {
      dom.preventDefault(event)
      dom.stopPropagation(event)
      modal.show({
        type: "delete-shared-libraries",
        origin: "unpublish",
        ids: new Set([fileId]),
        onAccept: () => emit(dwl.setFileShared(fileId, false)),
        countLibraries: 1,
      })
    },
    [fileId]
  )

  const onAddShared = useCallback(() => {
    const onAccept = () => emit(dwl.setFileShared(fileId, true))
    emit(dcm.showSharedDialog(fileId, onAccept))
  }, [fileId])

  const onShowVersionHistory = useCallback(() => {
    emit(dw.toggleLayoutFlag("document-history"))
  }, [])

  const onPinVersion = useCallback(() => {
    emit(dwv.createVersion())
  }, [])

  const onExportShapes = useCallback(
    () => emit(de.showWorkspaceExportDialog({ origin: "workspace:menu" })),
    []
  )

  const onExportFile = useCallback(() => {
    emit(ptk.withMeta(fexp.openExportDialog([file]), { [ev.origin]: "workspace" }))
  }, [file])

  const onExportFrames = useCallback(() => {
    emit(de.showWorkspaceExportFramesDialog(frames?.reverse()))
  }, [frames])

  const handleEnter = (fn: () => void) => (event: React.KeyboardEvent) => {
    if (kbd.enter(event)) fn()
  }

  return (
    <DropdownMenu
      show={true}
      className={stl.cssCase("sub-menu", true, "file", true)}
      onClose={onClose}
    >
      {shared ? (
        canEdit && (
          <DropdownMenuItem
            className={stl.css("submenu-item")}
            onClick={onRemoveShared}
            onKeyDown={handleEnter(onRemoveShared)}
            id="file-menu-remove-shared"
          >
            <span className={stl.css("item-name")}>
              {tr("dashboard.unpublish-shared")}
            </span>
          </DropdownMenuItem>
        )
      ) : (
        canEdit && (
          <DropdownMenuItem
            className={stl.css("submenu-item")}
            onClick={onAddShared}
            onKeyDown={handleEnter(onAddShared)}
            id="file-menu-add-shared"
          >
            <span className={stl.css("item-name")}>
              {tr("dashboard.add-shared")}
            </span>
          </DropdownMenuItem>
        )
      )}

      {canEdit && (
        <>
          <div className={stl.css("separator")} />

          <DropdownMenuItem
            className={stl.css("submenu-item")}
            onClick={onPinVersion}
            onKeyDown={handleEnter(onPinVersion)}
            id="file-menu-create-version"
          >
            <span className={stl.css("item-name")}>
              {tr("dashboard.create-version-menu")}
            </span>
          </DropdownMenuItem>

          <DropdownMenuItem
            className={stl.css("submenu-item")}
            onClick={onShowVersionHistory}
            onKeyDown={handleEnter(onShowVersionHistory)}
            id="file-menu-show-version-history"
          >
            <span className={stl.css("item-name")}>
              {tr("dashboard.show-version-history")}
            </span>
            <span className={stl.css("shortcut")}>
              {scd.splitSc(sc.getTooltip("toggle-history")).map((sc) => (
                <span key={sc} className={stl.css("shortcut-key")}>
                  {sc}
                </span>
              ))}
            </span>
          </DropdownMenuItem>

          <div className={stl.css("separator")} />
        </>
      )}

      <DropdownMenuItem
        className={stl.css("submenu-item")}
        onClick={onExportShapes}
        onKeyDown={handleEnter(onExportShapes)}
        id="file-menu-export-shapes"
      >
        <span className={stl.css("item-name")}>
          {tr("dashboard.export-shapes")}
        </span>
        <span className={stl.css("shortcut")}>
          {scd.splitSc(sc.getTooltip("export-shapes")).map((sc) => (
            <span key={sc} className={stl.css("shortcut-key")}>
              {sc}
            </span>
          ))}
        </span>
      </DropdownMenuItem>

      <DropdownMenuItem
        className={stl.css("submenu-item")}
        onClick={onExportFile}
        onKeyDown={handleEnter(onExportFile)}
        data-format="binfile-v3"
        id="file-menu-binary-file"
      >
        <span className={stl.css("item-name")}>
          {tr("dashboard.download-binary-file")}
        </span>
      </DropdownMenuItem>

      {frames?.length > 0 && (
        <DropdownMenuItem
          className={stl.css("submenu-item")}
          onClick={onExportFrames}
          onKeyDown={handleEnter(onExportFrames)}
          id="file-menu-export-frames"
        >
          <span className={stl.css("item-name")}>
            {tr("dashboard.export-frames")}
          </span>
        </DropdownMenuItem>
      )}
    </DropdownMenu>
  )
}

// Plugins Menu Component
interface PluginsMenuProps {
  openPlugins: () => void
  onClose: () => void
}

const PluginsMenu: React.FC<PluginsMenuProps> = ({ openPlugins, onClose }) => {
  const plugins = preg.pluginsList()
  const userCanEdit = store.getState(refs.permissions)?.canEdit
  const permissionsPeek = store.getState(refs.pluginsPermissionsPeek)

  const pluginsActive = features.activeFeature(store.getState(), "plugins/runtime")

  const handleEnter = (fn: () => void) => (event: React.KeyboardEvent) => {
    if (kbd.enter(event)) fn()
  }

  if (!pluginsActive) return null

  return (
    <DropdownMenu
      show={true}
      className={stl.cssCase("sub-menu", true, "plugins", true)}
      onClose={onClose}
    >
      <DropdownMenuItem
        onClick={openPlugins}
        className={stl.css("submenu-item")}
        onKeyDown={handleEnter(openPlugins)}
        data-testid="open-plugins"
        id="file-menu-open-plugins"
      >
        <span className={stl.css("item-name")}>
          {tr("workspace.plugins.menu.plugins-manager")}
        </span>
        <span className={stl.css("shortcut")}>
          {scd.splitSc(sc.getTooltip("plugins")).map((sc) => (
            <span key={sc} className={stl.css("shortcut-key")}>
              {sc}
            </span>
          ))}
        </span>
      </DropdownMenuItem>

      {plugins && Object.keys(plugins).length > 0 && (
        <div className={stl.css("separator")} />
      )}

      {plugins?.map((manifest: any, idx: number) => {
        const pluginId = manifest.pluginId
        const permissions = permissionsPeek?.[pluginId] || manifest.permissions
        const isEditionPlugin =
          permissions?.includes("content:write") ||
          permissions?.includes("library:write")
        const canOpen = userCanEdit || !isEditionPlugin

        const handlePluginClick = () => {
          if (!canOpen) return
          emit(
            ptk.event(ev.event, {
              [ev.name]: "start-plugin",
              [ev.origin]: "workspace:menu",
              name: manifest.name,
              host: manifest.host,
            })
          )
          dp.openPlugin(manifest, userCanEdit)
        }

        return (
          <DropdownMenuItem
            key={`plugins-menu-${idx}`}
            onClick={handlePluginClick}
            className={stl.cssCase("submenu-item", true, "menu-disabled", !canOpen)}
            onKeyDown={handleEnter(handlePluginClick)}
          >
            <span className={stl.css("item-name")}>{manifest.name}</span>
            {!canOpen && (
              <span
                className={stl.css("item-icon")}
                title={tr("workspace.plugins.error.need-editor")}
              >
                {deprecatedIcon.help}
              </span>
            )}
          </DropdownMenuItem>
        )
      })}
    </DropdownMenu>
  )
}

// Main Menu Component
interface MainMenuProps {
  layout: any
  file: any
  profile: any
}

export const MainMenu: React.FC<MainMenuProps> = ({ layout, file, profile }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [subMenu, setSubMenu] = useState<string | null>(null)

  const openMenu = useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event)
    setShowMenu(true)
  }, [])

  const closeMenu = useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event)
    setShowMenu(false)
  }, [])

  const closeSubMenu = useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event)
    setSubMenu(null)
  }, [])

  const closeAllMenus = useCallback(() => {
    setShowMenu(false)
    setSubMenu(null)
  }, [])

  const onMenuClick = useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event)
    const menu = dom.getData(dom.getCurrentTarget(event), "testid")
    setSubMenu(menu as any)
  }, [])

  const onPowerUpClick = useCallback(() => {
    emit(
      ptk.event(ev.event, {
        [ev.name]: "explore-pricing-click",
        [ev.origin]: "workspace-menu",
      })
    )
    dom.openNewWindow("https://penpot.app/pricing")
  }, [])

  const toggleFlag = useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event)
    const flag = dom.getData(dom.getCurrentTarget(event), "testid")
    emit(
      ptk.withMeta(dw.toggleLayoutFlag(flag as any), {
        [ev.origin]: "workspace-menu",
      })
    )
    setShowMenu(false)
    setSubMenu(null)
  }, [])

  const toggleTheme = useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event)
    emit(du.toggleTheme())
  }, [])

  const openPluginsManager = useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event)
    setShowMenu(false)
    setSubMenu(null)
    emit(
      ptk.event(ev.event, {
        [ev.name]: "open-plugins-manager",
        [ev.origin]: "workspace:menu",
      }),
      modal.show("plugin-management", {})
    )
  }, [])

  useEffect(() => {
    const disposable = stream
      .pipe(
        rx.filter((event) => event === "interrupt"),
        rx.subscribe(closeAllMenus)
      )

    return () => rx.dispose(disposable)
  }, [closeAllMenus])

  const subscription = profile?.props?.subscription
  const subscriptionType = getSubscriptionType(subscription)
  const pluginsActive = features.activeFeature(store.getState(), "plugins/runtime")

  const handleEnter = (fn: () => void) => (event: React.KeyboardEvent) => {
    if (kbd.enter(event)) fn()
  }

  const renderMenuItem = (
    testId: string,
    id: string,
    label: string
  ) => (
    <DropdownMenuItem
      className={stl.css("menu-item")}
      onClick={onMenuClick}
      onKeyDown={handleEnter(onMenuClick)}
      onPointerEnter={onMenuClick}
      data-testid={testId}
      id={id}
    >
      <span className={stl.css("item-name")}>{label}</span>
      <span className={stl.css("open-arrow")}>{deprecatedIcon.arrow}</span>
    </DropdownMenuItem>
  )

  return (
    <>
      <IconButton
        variant="ghost"
        ariaLabel={tr("shortcut-subsection.main-menu")}
        onClick={openMenu}
        icon={i.menu}
      />

      <DropdownMenu
        show={showMenu}
        id="workspace-menu"
        onClose={closeMenu}
        className={stl.css("menu")}
      >
        {renderMenuItem("file", "file-menu-file", tr("workspace.header.menu.option.file"))}
        {renderMenuItem("edit", "file-menu-edit", tr("workspace.header.menu.option.edit"))}
        {renderMenuItem("view", "file-menu-view", tr("workspace.header.menu.option.view"))}
        {renderMenuItem("preferences", "file-menu-preferences", tr("workspace.header.menu.option.preferences"))}

        {pluginsActive &&
          renderMenuItem("plugins", "file-menu-plugins", tr("workspace.plugins.menu.title"))}

        <div className={stl.css("separator")} />

        {renderMenuItem(
          "help-info",
          "file-menu-help-info",
          tr("workspace.header.menu.option.help-info")
        )}

        {cf.flags?.has("subscriptions") &&
          subscriptionType !== "enterprise" && (
            <MainMenuPowerUp closeSubMenu={closeSubMenu} />
          )}

        {cf.flags?.has("subscriptions-old") && (
          <DropdownMenuItem
            className={stl.cssCase("menu-item", true)}
            onClick={onPowerUpClick}
            onKeyDown={handleEnter(onPowerUpClick)}
            onPointerEnter={closeSubMenu}
            id="file-menu-power-up"
          >
            <span className={stl.css("item-name")}>
              {tr("subscription.workspace.header.menu.option.power-up")}
            </span>
          </DropdownMenuItem>
        )}
      </DropdownMenu>

      {subMenu === "file" && <FileMenu file={file} onClose={closeSubMenu} />}
      {subMenu === "edit" && <EditMenu onClose={closeSubMenu} />}
      {subMenu === "view" && (
        <ViewMenu layout={layout} toggleFlag={toggleFlag} onClose={closeSubMenu} />
      )}
      {subMenu === "preferences" && (
        <PreferencesMenu
          layout={layout}
          profile={profile}
          toggleFlag={toggleFlag}
          toggleTheme={toggleTheme}
          onClose={closeSubMenu}
        />
      )}
      {subMenu === "plugins" && (
        <PluginsMenu openPlugins={openPluginsManager} onClose={closeSubMenu} />
      )}
      {subMenu === "help-info" && (
        <HelpInfoMenu layout={layout} onClose={closeSubMenu} />
      )}
    </>
  )
}
