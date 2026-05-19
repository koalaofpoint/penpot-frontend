// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from 'app/common/data'
import * as dd from '@main/data/dashboard'
import * as refs from '@main/refs'
import * as store from '@main/store'
import { grid as grid* } from '@ui/dashboard/grid'
import { useDynamicGridItemWidth, useEffect } from '@ui/hooks'
import * as deprecatedIcon from '@ui/icons'
import * as dom from '@util/dom'
import { tr } from '@util/i18n'
import { derived } from 'okulary/core'
import React from 'react'

const refSearchResult = derived(
  'search-result',
  (state) => state.searchResult,
  store.state
)

const refSelected = derived(
  (state) => {
    const files = d.indexBy('id', state.searchResult ?? [])
    return refs.extractSelectedFiles(
      files,
      state.selectedFiles ?? []
    )
  },
  store.state
)

interface SearchPageProps {
  team: any
  searchTerm?: string
}

export const SearchPage: React.FC<SearchPageProps> = ({
  team,
  searchTerm = '',
}) => {
  const result = refSearchResult
  const selected = refSelected
  const [rowRef, limit] = useDynamicGridItemWidth()

  useEffect(() => {
    if (team) {
      const tname = team.isDefault
        ? tr('dashboard.your-penpot')
        : team.name
      dom.setHtmlTitle(tr('title.dashboard.search', tname))
    }
  }, [team])

  useEffect(() => {
    store.emit(
      dd.search({ searchTerm }),
      dd.clearSelectedFiles()
    )
  }, [searchTerm])

  return (
    <>
      <header className="dashboard-header" data-testid="dashboard-header">
        <div
          id="dashboard-search-title"
          className="dashboard-title"
        >
          <h1>{tr('dashboard.title-search')}</h1>
        </div>
      </header>

      <section
        className="dashboard-container search no-bg"
        ref={rowRef}
      >
        {searchTerm === '' ? (
          <div className="grid-empty-placeholder search">
            <div className="icon">{deprecatedIcon.search}</div>
            <div className="text">{tr('dashboard.type-something')}</div>
          </div>
        ) : result === null ? (
          <div className="grid-empty-placeholder search">
            <div className="icon">{deprecatedIcon.search}</div>
            <div className="text">{tr('dashboard.searching-for', searchTerm)}</div>
          </div>
        ) : result?.length === 0 ? (
          <div className="grid-empty-placeholder search">
            <div className="icon">{deprecatedIcon.search}</div>
            <div className="text">{tr('dashboard.no-matches-for', searchTerm)}</div>
          </div>
        ) : (
          <grid*
            files={result}
            selectedFiles={selected}
            origin="search"
            limit={limit}
          />
        )}
      </section>
    </>
  )
}
