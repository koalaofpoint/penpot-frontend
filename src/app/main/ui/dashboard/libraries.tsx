// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as dd from '@main/data/dashboard'
import * as sc from '@main/data/dashboard/shortcuts'
import * as dtm from '@main/data/team'
import * as refs from '@main/refs'
import * as store from '@main/store'
import { grid as grid* } from '@ui/dashboard/grid'
import { useDynamicGridItemWidth, useShortcuts, useEffect } from '@ui/hooks'
import * as dom from '@util/dom'
import { tr } from '@util/i18n'
import { derived } from 'okulary/core'
import React, { useMemo } from 'react'

const refSelectedFiles = derived(
  (state) => {
    const selected = state.selectedFiles ?? []
    const files = state.sharedFiles ?? {}
    return refs.extractSelectedFiles(files, selected)
  },
  store.state
)

interface LibrariesPageProps {
  team: any
  defaultProject?: any
}

export const LibrariesPage: React.FC<LibrariesPageProps> = ({
  team,
  defaultProject,
}) => {
  const files = refs.sharedFiles
  const teamId = team?.id
  const canEdit = team?.permissions?.canEdit

  const filteredFiles = useMemo(() => {
    return files
      ? Object.values(files)
          .filter((f: any) => f.teamId === teamId)
          .sort((a: any, b: any) => b.modifiedAt - a.modifiedAt)
      : []
  }, [files, teamId])

  const selectedFiles = refSelectedFiles
  const [rowRef, limit] = useDynamicGridItemWidth(350)

  useEffect(() => {
    if (team) {
      const tname = team.isDefault
        ? tr('dashboard.your-penpot')
        : team.name
      dom.setHtmlTitle(tr('title.dashboard.shared-libraries', tname))
    }
  }, [team])

  useEffect(() => {
    if (teamId) {
      store.emit(dtm.fetchSharedFiles(teamId), dd.clearSelectedFiles())
    }
  }, [teamId])

  useShortcuts('dashboard', sc.shortcutsDraftsLibraries)

  return (
    <>
      <header className="dashboard-header" data-testid="dashboard-header">
        <div
          id="dashboard-libraries-title"
          className="dashboard-title"
        >
          <h1>{tr('dashboard.libraries-title')}</h1>
        </div>
      </header>

      <section
        className="dashboard-container no-bg dashboard-shared"
        ref={rowRef}
      >
        <grid*
          files={filteredFiles}
          selectedFiles={selectedFiles}
          project={defaultProject}
          origin="libraries"
          limit={limit}
          canEdit={canEdit}
        />
      </section>
    </>
  )
}
