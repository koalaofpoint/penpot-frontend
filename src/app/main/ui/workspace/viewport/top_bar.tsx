// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as DW from 'app/main/data/workspace'
import * as DWC from 'app/main/data/workspace/common'
import { Store } from 'app/main/store'
import { GridEditionActions } from 'app/main/ui/workspace/viewport/grid_layout_editor'
import { PathActions } from 'app/main/ui/workspace/viewport/path_actions'
import { tr } from 'app/util/i18n'
import * as MF from 'rumext.v2'
import React from 'react'

interface ViewOnlyBarProps {}

export const ViewOnlyBar: React.FC<ViewOnlyBarProps> = () => {
  const handleCloseViewMode = React.useCallback(() => {
    Store.emit('interrupt')
    Store.emit(DW.setOptionsMode('design'))
    Store.emit(DWC.setWorkspaceReadOnly(false))
  }, [])

  return (
    <div className='viewport-actions'>
      <div className='viewport-actions-container'>
        <div className='viewport-actions-title'>
          <span>{tr('workspace.top-bar.view-only')}</span>
        </div>
        <button className='done-btn' onClick={handleCloseViewMode}>
          {tr('workspace.top-bar.read-only.done')}
        </button>
      </div>
    </div>
  )
}

interface PathEditionBarProps {
  layout: any
  editPathState: any
  shape: any
}

export const PathEditionBar: React.FC<PathEditionBarProps> = ({
  layout,
  editPathState,
  shape,
}) => {
  const rulers = layout?.has('rulers')

  return (
    <div
      className={rulers ? 'viewport-actions-path' : 'viewport-actions-path viewport-actions-no-rulers'}
    >
      <PathActions shape={shape} state={editPathState} />
    </div>
  )
}

interface GridEditionBarProps {
  shape: any
}

export const GridEditionBar: React.FC<GridEditionBarProps> = ({ shape }) => {
  return <GridEditionActions shape={shape} />
}
