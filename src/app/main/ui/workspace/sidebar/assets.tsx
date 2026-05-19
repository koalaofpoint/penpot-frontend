// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useCallback, useMemo, useState } from "react"
import * as dm from "app/common/data/macros"
import * as ctkl from "app/common/types/components-list"
import * as modal from "app/main/data/modal"
import * as dw from "app/main/data/workspace"
import * as dwa from "app/main/data/workspace/assets"
import * as refs from "app/main/refs"
import * as st from "app/main/store"
import { ContextMenu } from "app/main/ui/components/context-menu-a11y"
import { SearchBar } from "app/main/ui/components/search-bar"
import { IconButton } from "app/main/ui/ds/buttons/icon-button"
import * as deprecatedIcon from "app/main/ui/icons"
import * as cmm from "app/main/ui/workspace/sidebar/assets/common"
import { FileLibrary } from "app/main/ui/workspace/sidebar/assets/file-library"
import * as dom from "app/util/dom"
import { tr } from "app/util/i18n"
import * as str from "cuerdas/core"

interface AssetsFilters {
  term: string
  section: string
  ordering: "asc" | "desc"
  listStyle: "thumbs" | "list"
  openMenu: boolean
}

function toggleValues<T>(v: T, a: T, b: T): T {
  return v === a ? b : a
}

interface AssetsLibrariesProps {
  filters: AssetsFilters
}

const AssetsLibraries: React.FC<AssetsLibrariesProps> = React.memo(({ filters }) => {
  const fileId = refs.currentFileId
  const files = refs.files.deref()
  const libraries = useMemo(() => {
    const result = refs.selectLibraries(files, fileId)
    return Object.values(result as any)
      .filter((file: any) => !file.isIndirect && file.id !== fileId)
      .map((file: any) => ({
        ...file,
        data: { ...file.data, pagesIndex: undefined },
      }))
      .sort((a: any, b: any) => str.lower(a.name).localeCompare(str.lower(b.name)))
    return result
  }, [files, fileId])

  return (
    <>
      {libraries.map((file: any) => (
        <FileLibrary
          key={file.id}
          file={file}
          isLocal={false}
          isDefaultOpen={false}
          filters={filters}
        />
      ))}
    </>
  )
})

interface AssetsLocalLibraryProps {
  filters: AssetsFilters
}

const AssetsLocalLibrary: React.FC<AssetsLocalLibraryProps> = ({ filters }) => {
  const file = refs.localLibrary.deref()
  return (
    <FileLibrary
      file={file}
      isLocal={true}
      isDefaultOpen={true}
      filters={filters}
    />
  )
}

interface AssetsToolboxProps {
  size?: number
  fileId?: string
}

export const AssetsToolbox: React.FC<AssetsToolboxProps> = ({ size = 300, fileId }) => {
  const readOnly = refs.workspaceReadOnly
  const [filters, setFilters] = useState<AssetsFilters>({
    term: "",
    section: "all",
    ordering: dwa.getCurrentAssetsOrdering(),
    listStyle: dwa.getCurrentAssetsListStyle(),
    openMenu: false,
  })

  const libs = refs.libraries.deref()
  const numLibs = libs ? Object.keys(libs).length : 0
  const file = libs?.[fileId as string]
  const components = useMemo(() => file ? ctkl.components(file.data) : [], [file])

  const toggleOrdering = useCallback(() => {
    setFilters((f) => {
      const newValue = toggleValues(f.ordering, "asc", "desc")
      dwa.setCurrentAssetsOrdering!(newValue)
      return { ...f, ordering: newValue }
    })
  }, [])

  const toggleListStyle = useCallback(() => {
    setFilters((f) => {
      const newValue = toggleValues(f.listStyle, "thumbs", "list")
      dwa.setCurrentAssetsListStyle!(newValue)
      return { ...f, listStyle: newValue }
    })
  }, [])

  const onSearchTermChange = useCallback((event: any) => {
    st.emit!(dw.clearAssetsSectionOpen())
    setFilters((f) => ({ ...f, term: event }))
  }, [])

  const onSectionFilterChange = useCallback((event: any) => {
    const value = dom.getTarget(event)
      ? dom.getValue(dom.getTarget(event) as HTMLInputElement)
      : dom.getAttribute(dom.getCurrentTarget(event) as Element, "data-testid")
    st.emit!(dw.clearAssetsSectionOpen())
    setFilters((f) => ({ ...f, section: value || "all", openMenu: false }))
  }, [])

  const showLibrariesDialog = useCallback(() => {
    modal.show!("libraries-dialog", { fileId })
  }, [fileId])

  const onOpenMenu = useCallback(() => {
    setFilters((f) => ({ ...f, openMenu: !f.openMenu }))
  }, [])

  const onMenuClose = useCallback(() => {
    setFilters((f) => ({ ...f, openMenu: false }))
  }, [])

  const options = useMemo(() => [
    {
      name: tr("workspace.assets.box-filter-all"),
      id: "all",
      handler: onSectionFilterChange,
    },
    {
      name: tr("workspace.assets.components"),
      id: "components",
      handler: onSectionFilterChange,
    },
    {
      name: tr("workspace.assets.colors"),
      id: "colors",
      handler: onSectionFilterChange,
    },
    {
      name: tr("workspace.assets.typography"),
      id: "typographies",
      handler: onSectionFilterChange,
    },
  ], [onSectionFilterChange])

  return (
    <article className="assets-bar">
      <div className="assets-header">
        {!readOnly && (
          numLibs === 1 && components.length === 0 ? (
            <button
              className="add-library-button"
              onClick={showLibrariesDialog}
              data-testid="libraries"
            >
              {tr("workspace.assets.add-library")}
            </button>
          ) : (
            <button
              className="libraries-button"
              onClick={showLibrariesDialog}
              data-testid="libraries"
            >
              {tr("workspace.assets.manage-library")}
            </button>
          )
        )}

        <div className="search-wrapper">
          <SearchBar
            onChange={onSearchTermChange}
            value={filters.term}
            placeholder={tr("workspace.assets.search")}
          >
            <button
              onClick={onOpenMenu}
              title={tr("workspace.assets.filter")}
              className={`section-button ${filters.openMenu ? "opened" : ""}`}
            >
              {deprecatedIcon.filterIcon}
            </button>
          </SearchBar>

          <ContextMenu
            onClose={onMenuClose}
            selectable
            selected={filters.section}
            show={filters.openMenu}
            fixed
            minWidth
            width={size}
            top={158}
            left={18}
            options={options}
          />

          <IconButton
            variant="ghost"
            ariaLabel={tr("workspace.assets.sort")}
            onClick={toggleOrdering}
            icon={filters.ordering === "desc" ? "asc-sort" : "desc-sort"}
          />
        </div>
      </div>

      <cmm.AssetsFilters.Provider value={filters}>
        <cmm.AssetsToggleOrdering.Provider value={toggleOrdering}>
          <cmm.AssetsToggleListStyle.Provider value={toggleListStyle}>
            <AssetsLocalLibrary filters={filters} />
            <AssetsLibraries filters={filters} />
          </cmm.AssetsToggleListStyle.Provider>
        </cmm.AssetsToggleOrdering.Provider>
      </cmm.AssetsFilters.Provider>
    </article>
  )
}
