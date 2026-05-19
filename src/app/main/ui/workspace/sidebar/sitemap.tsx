// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useState, useRef, useEffect, useMemo, useCallback } from "react"
import * as d from "app/common/data"
import * as dm from "app/common/data/macros"
import * as dcm from "app/main/data/common"
import * as dsh from "app/main/data/helpers"
import * as modal from "app/main/data/modal"
import * as dw from "app/main/data/workspace"
import * as features from "app/main/features"
import * as refs from "app/main/refs"
import * as st from "app/main/store"
import { TitleBar } from "app/main/ui/components/title-bar"
import { WorkspaceReadOnly, CurrentPageId } from "app/main/ui/context"
import { IconButton } from "app/main/ui/ds/buttons/icon-button"
import * as i from "app/main/ui/ds/foundations/assets/icon"
import { useSortable } from "app/main/ui/hooks"
import * as deprecatedIcon from "app/main/ui/icons"
import { BadgeNotification } from "app/main/ui/notifications/badge"
import * as wasmApi from "app/render-wasm/api"
import * as dom from "app/util/dom"
import { tr } from "app/util/i18n"
import * as kbd from "app/util/keyboard"
import * as timers from "app/util/timers"
import * as str from "cuerdas/core"

// FIXME: can we unify this two refs in one?

const refFileWithPages = {
  derive: (file: any) => ({
    ...file,
    data: undefined,
    pages: file.data?.pages,
  }),
}

function makePageRef(pageId: string) {
  return {
    derive: (fdata: any) => {
      const page = dsh.getPage(fdata, pageId)
      return page ? { ...page, objects: undefined } : null
    },
  }
}

interface PageItemProps {
  page: any
  index: number
  deletable?: boolean
  selected?: boolean
  editing?: boolean
  hovering?: boolean
  currentPageId: string
}

const PageItem: React.FC<PageItemProps> = ({
  page,
  index,
  deletable = false,
  selected = false,
  editing = false,
  hovering = false,
  currentPageId,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const id = page.id

  const readOnly = refs.workspaceReadOnly

  const deleteFn = useCallback(() => {
    st.emit!(dw.deletePage(id))
  }, [id])

  const navigateFn = useCallback(() => {
    st.emit!("interrupt", dcm.goToWorkspace({ pageId: id })))
  }, [id])

  const onClick = useCallback(() => {
    if (
      features.activeFeature(st.state, "render-wasm/v1") &&
      id !== currentPageId
    ) {
      wasmApi.captureCanvasPixels()
      wasmApi.applyCanvasBlur()
      timers.raf(() => {
        timers.raf(navigateFn)
      })
    } else {
      navigateFn()
    }
  }, [id, currentPageId, navigateFn])

  const onDelete = useCallback(() => {
    st.emit!(
      modal.show({
        type: "confirm",
        title: tr("modals.delete-page.title"),
        message: tr("modals.delete-page.body"),
        onAccept: deleteFn,
      })
    )
  }, [deleteFn])

  const onDoubleClick = useCallback(
    (event: React.MouseEvent) => {
      dom.preventDefault(event)
      dom.stopPropagation(event)
      if (!readOnly) {
        st.emit!(dw.startRenamePageItem(id))
      }
    },
    [readOnly, id]
  )

  const onBlur = useCallback((event: React.FocusEvent) => {
    const name = str.trim(dom.getTargetVal(event))
    if (!str.empty(name)) {
      st.emit!(dw.renamePage(id, name))
    }
    st.emit!(dw.stopRenamePageItem())
  }, [id])

  const onKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (kbd.enter(event)) {
      onBlur(event as any)
    }
    if (kbd.esc(event)) {
      st.emit!(dw.stopRenamePageItem())
    }
  }, [onBlur])

  const onDrop = useCallback(
    (side: "top" | "bot", data: any) => {
      const newIndex = side === "bot" ? index + 1 : index
      st.emit!(dw.relocatePage(data.id, newIndex))
    },
    [index]
  )

  const { dprops, dref } = useSortable({
    dataType: "penpot/page",
    onDrop,
    data: { id, index, name: page.name },
    draggable: !readOnly && !editing,
  })

  const onContextMenu = useCallback(
    (event: React.MouseEvent) => {
      dom.preventDefault(event)
      dom.stopPropagation(event)
      if (!readOnly) {
        const position = dom.getClientPosition(event)
        st.emit!(
          dw.showPageItemContextMenu({
            position,
            page,
            deletable,
          })
        )
      }
    },
    [readOnly, page, deletable]
  )

  useEffect(() => {
    if (selected) {
      const node = dref?.current
      if (node) {
        dom.scrollIntoViewIfNeeded!(node)
      }
    }
  }, [selected, dref])

  useLayoutEffect(() => {
    if (editing && inputRef.current) {
      dom.selectText!(inputRef.current)
    }
  }, [editing])

  return (
    <li
      className={`page-element ${selected ? "selected" : ""} ${
        dprops.over === "top" ? "dnd-over-top" : ""
      } ${dprops.over === "bot" ? "dnd-over-bot" : ""}`}
      ref={dref}
    >
      <div
        className={`element-list-body ${hovering ? "hover" : ""} ${
          selected ? "selected" : ""
        }`}
        data-testid={`page-${id}`}
        tabIndex={0}
        onClick={onClick}
        onDoubleClick={onDoubleClick}
        onContextMenu={onContextMenu}
      >
        <div className="page-icon">{deprecatedIcon.document}</div>

        {editing ? (
          <>
            <input
              className="element-name"
              type="text"
              ref={inputRef}
              onBlur={onBlur}
              onKeyDown={onKeyDown}
              autoFocus
              defaultValue={page.name || ""}
            />
          </>
        ) : (
          <>
            <span
              className="page-name"
              title={page.name}
              data-testid="page-name"
            >
              {page.name}
            </span>
            <div className="page-actions">
              {deletable && !readOnly && (
                <button onClick={onDelete}>{deprecatedIcon.delete}</button>
              )}
            </div>
          </>
        )}
      </div>
    </li>
  )
}

interface PageItemWrapperProps {
  pageId: string
  index: number
  deletable?: boolean
  selected?: boolean
  editing?: boolean
  currentPageId: string
}

const PageItemWrapper: React.FC<PageItemWrapperProps> = ({
  pageId,
  index,
  deletable,
  selected,
  editing,
  currentPageId,
}) => {
  const pageRef = useMemo(() => makePageRef(pageId), [pageId])
  const page = pageRef.derive(refs.workspaceData.deref())

  return (
    <PageItem
      page={page}
      index={index}
      currentPageId={currentPageId}
      deletable={deletable}
      selected={selected}
      editing={editing}
    />
  )
}

interface PagesListProps {
  file: any
}

const PagesList: React.FC<PagesListProps> = ({ file }) => {
  const pages = file.pages
  const deletable = pages.length > 1
  const editingPageId = refs.editingPageItem.deref()
  const currentPageId = refs.currentPageId

  return (
    <ul className="page-list">
      <useSortable.SortableContainer>
        {pages.map((pageId: string, index: number) => (
          <PageItemWrapper
            key={pageId}
            pageId={pageId}
            index={index}
            deletable={deletable}
            editing={pageId === editingPageId}
            selected={pageId === currentPageId}
            currentPageId={currentPageId}
          />
        ))}
      </useSortable.SortableContainer>
    </ul>
  )
}

interface SitemapProps {
  height: number
  collapsed: boolean
  onToggleCollapsed: () => void
}

export const Sitemap: React.FC<SitemapProps> = ({
  height,
  collapsed,
  onToggleCollapsed,
}) => {
  const file = refFileWithPages.derive(refs.file.deref())
  const fileId = file?.id
  const projectId = file?.projectId

  const readOnly = refs.workspaceReadOnly
  const permissions = refs.permissions

  const onCreate = useCallback(
    (event: React.MouseEvent) => {
      st.emit!(dw.createPage({ fileId, projectId }))
      dom.getCurrentTarget(event)?.blur()
    },
    [fileId, projectId]
  )

  return (
    <div className="sitemap" style={{ "--height": `${height}px` } as any}>
      <TitleBar
        collapsable
        collapsed={collapsed}
        onCollapsed={onToggleCollapsed}
        allClickable
        title={tr("workspace.sidebar.sitemap")}
        className="title-spacing-sitemap"
      >
        {readOnly ? (
          !permissions.canEdit ? (
            <BadgeNotification isFocus size="small" content={tr("labels.view-only")} />
          ) : null
        ) : (
          <IconButton
            variant="ghost"
            className="add-page"
            ariaLabel={tr("workspace.sidebar.sitemap.add-page")}
            onClick={onCreate}
            icon={i.add}
          />
        )}
      </TitleBar>

      {!collapsed && (
        <div className="tool-window-content">
          <PagesList file={file} key={file.id} />
        </div>
      )}
    </div>
  )
}

function useLayoutEffect(effect: () => void, deps: any[]) {
  useEffect(effect, deps)
}
