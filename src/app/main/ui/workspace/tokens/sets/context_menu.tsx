// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { dmGetProp, dmStr } from 'app/common/data/macros'
import * as dwtl from '@main/data/workspace/tokens/library-edit'
import * as refs from '@main/refs'
import * as store from '@main/store'
import { Dropdown } from '@ui/components/dropdown'
import * as dom from '@util/dom'
import { tr } from '@util/i18n'
import { derived } from 'okulary/core'
import React, { useCallback } from 'react'

const refTokenSetsContextMenu = derived(
  'token-set-context-menu',
  (state) => state.workspaceTokens?.tokenSetContextMenu,
  refs.workspaceTokens
)

function preventDefault(event: React.SyntheticEvent) {
  dom.preventDefault(event)
  dom.stopPropagation(event)
}

interface MenuEntryProps {
  title: string
  value?: string
  onClick?: () => void
}

const MenuEntry: React.FC<MenuEntryProps> = ({ title, value, onClick }) => (
  <li
    className="context-menu-item"
    data-value={value}
    onClick={onClick}
  >
    {title}
  </li>
)

interface MenuProps {
  isGroup: boolean
  id?: string
  path?: string[]
}

const Menu: React.FC<MenuProps> = ({ isGroup, id, path }) => {
  const createSetAtPath = useCallback(
    () => store.emit(dwtl.startTokenSetCreation(path)),
    [path]
  )

  const onEdit = useCallback(
    () => store.emit(dwtl.startTokenSetEdition(id)),
    [id]
  )

  const onDuplicate = useCallback(
    () => store.emit(dwtl.duplicateTokenSet(id)),
    [id]
  )

  const onDelete = useCallback(() => {
    if (isGroup) {
      store.emit(dwtl.deleteTokenSetGroup(path))
    } else {
      store.emit(dwtl.deleteTokenSet(id))
    }
  }, [isGroup, path, id])

  return (
    <ul className="context-list">
      {isGroup && (
        <MenuEntry
          title={tr('workspace.tokens.add-set-to-group')}
          onClick={createSetAtPath}
        />
      )}
      <MenuEntry title={tr('labels.rename')} onClick={onEdit} />
      {!isGroup && (
        <MenuEntry title={tr('labels.duplicate')} onClick={onDuplicate} />
      )}
      <MenuEntry title={tr('labels.delete')} onClick={onDelete} />
    </ul>
  )
}

export const TokenSetContextMenu: React.FC = () => {
  const mdata = refTokenSetsContextMenu

  if (!mdata?.position) return null

  const { position, isGroup, id, path } = mdata
  const positionTop = dmGetProp(position, 'y') + 5
  const positionLeft = dmGetProp(position, 'x') + 5

  const onClose = useCallback(
    () => store.emit(dwtl.assignTokenSetContextMenu(null)),
    []
  )

  return (
    <Dropdown show={true} onClose={onClose}>
      <div
        className="token-set-context-menu"
        data-testid="tokens-context-menu-for-set"
        style={{ top: positionTop, left: positionLeft }}
        onContextMenu={preventDefault}
      >
        <Menu isGroup={isGroup} id={id} path={path} />
      </div>
    </Dropdown>
  )
}
