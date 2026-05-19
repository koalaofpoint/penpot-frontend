// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useState, useCallback } from "react"
import * as ctob from "app/common/types/tokens-lib"
import * as cf from "app/config"
import * as modal from "app/main/data/modal"
import * as refs from "app/main/refs"
import { DropdownMenu, DropdownMenuItem } from "app/main/ui/components/dropdown-menu"
import { TitleBar } from "app/main/ui/components/title-bar"
import { CanEdit } from "app/main/ui/context"
import { Button } from "app/main/ui/ds/buttons/button"
import { IconButton } from "app/main/ui/ds/buttons/icon-button"
import * as i from "app/main/ui/ds/foundations/assets/icon"
import { useSortable, SortableContainer } from "app/main/ui/hooks"
import { useResizeHook } from "app/main/ui/hooks/resize"
import { TokensSection } from "app/main/ui/workspace/tokens/management"
import { SetsList } from "app/main/ui/workspace/tokens/sets"
import { TokenSetContextMenu } from "app/main/ui/workspace/tokens/sets/context-menu"
import { InlineAddButton } from "app/main/ui/workspace/tokens/sets/lists"
import { ThemesHeader } from "app/main/ui/workspace/tokens/themes"
import * as dom from "app/util/dom"
import { tr } from "app/util/i18n"

interface TokenSetsListProps {
  tokensLib: any
}

const TokenSetsList: React.FC<TokenSetsListProps> = ({ tokensLib }) => {
  const tokenSets = ctob.getSetTree(tokensLib)
  const selectedTokenSetId = refs.selectedTokenSetId.deref()

  const { tokenSetEditionId, tokenSetNewPath } = refs.workspaceTokens.deref()

  if (tokenSets?.length === 0 && !tokenSetNewPath) {
    return <InlineAddButton />
  }

  return (
    <SortableContainer>
      <SetsList
        tokensLib={tokensLib}
        newPath={tokenSetNewPath}
        editionId={tokenSetEditionId}
        selected={selectedTokenSetId}
      />
    </SortableContainer>
  )
}

interface TokenManagementSectionProps {
  resizeHeight?: number
  tokensLib?: any
}

const TokenManagementSection: React.FC<TokenManagementSectionProps> = ({
  resizeHeight = 0,
  tokensLib,
}) => {
  const canEdit = refs.canEdit

  return (
    <>
      <TokenSetContextMenu />
      <section
        data-testid="token-management-sidebar"
        className="token-management-section-wrapper"
        style={{ "--resize-height": `${resizeHeight}px` } as any}
      >
        <ThemesHeader />
        <div className="sidebar-header">
          <TitleBar title={tr("labels.sets")}>
            {canEdit && <InlineAddButton />}
          </TitleBar>
        </div>

        <TokenSetsList tokensLib={tokensLib} />
      </section>
    </>
  )
}

interface ImportExportButtonProps {}

const ImportExportButton: React.FC<ImportExportButtonProps> = () => {
  const [showMenu, setShowMenu] = useState(false)
  const canEdit = refs.canEdit

  const openMenu = useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event)
    setShowMenu(true)
  }, [])

  const closeMenu = useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event)
    setShowMenu(false)
  }, [])

  const onExport = useCallback(() => {
    modal.show!("tokens/export", {})
  }, [])

  const onModalShow = useCallback(() => {
    modal.show!("tokens/import", {})
  }, [])

  const openSettingsModal = useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event)
    modal.show!("tokens/settings", {})
  }, [])

  return (
    <div className="import-export-button-wrapper">
      <Button
        onClick={openMenu}
        type="button"
        icon={i.importExport}
        variant="secondary"
      >
        {tr("workspace.tokens.tools")}
      </Button>

      <DropdownMenu
        show={showMenu}
        onClose={closeMenu}
        id="tokens-menu"
        className="import-export-menu"
      >
        {canEdit && (
          <DropdownMenuItem
            className="import-export-menu-item"
            onClick={onModalShow}
          >
            <div className="import-menu-item">{tr("labels.import")}</div>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem
          className="import-export-menu-item"
          onClick={onExport}
        >
          {tr("labels.export")}
        </DropdownMenuItem>
      </DropdownMenu>

      {canEdit && cf.flags.has("token-base-font-size") && (
        <IconButton
          variant="secondary"
          icon={i.settings}
          ariaLabel="Settings"
          onClick={openSettingsModal}
        />
      )}
    </div>
  )
}

interface TokensSidebarTabProps {
  tokensLib?: any
}

export const TokensSidebarTab: React.FC<TokensSidebarTabProps> = ({ tokensLib }) => {
  const {
    onPointerDown: onPointerDownPages,
    onLostPointerCapture: onLostPointerCapturePages,
    onPointerMove: onPointerMovePages,
    size: sizePagesOpened,
  } = useResizeHook("tokens", 200, 38, "0.6", "y", false, null)

  return (
    <div className="sidebar-wrapper">
      <TokenManagementSection
        resizeHeight={sizePagesOpened}
        tokensLib={tokensLib}
      />

      <article
        className="tokens-section-wrapper"
        data-testid="tokens-sidebar"
      >
        <div
          className="resize-area-horiz"
          onPointerDown={onPointerDownPages}
          onLostPointerCapture={onLostPointerCapturePages}
          onPointerMove={onPointerMovePages}
        >
          <div className="resize-handle-horiz" />
        </div>
        <TokensSection tokensLib={tokensLib} />
      </article>

      <ImportExportButton />
    </div>
  )
}
