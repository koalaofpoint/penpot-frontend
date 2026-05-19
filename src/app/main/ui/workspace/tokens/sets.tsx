// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as ctob from 'app/common/types/tokens-lib'
import * as dwtl from '@main/data/workspace/tokens/library-edit'
import * as refs from '@main/refs'
import * as store from '@main/store'
import { ctx } from '@ui/context'
import * as setsHelpers from '@ui/workspace/tokens/sets/helpers'
import { controlledSetsList as controlledSetsList* } from '@ui/workspace/tokens/sets/lists'
import React, { useCallback } from 'react'

function onSelectTokenSetClick(id: string) {
  store.emit(dwtl.clearTokensPaths())
  store.emit(dwtl.setSelectedTokenSetId(id))
}

function onToggleTokenSetClick(name: string) {
  store.emit(dwtl.toggleTokenSet(name))
}

function onToggleTokenSetGroupClick(path: string[]) {
  store.emit(dwtl.toggleTokenSetGroup(path))
}

interface SetsListProps {
  tokensLib: any
  selected: string
  newPath?: string[]
  editionId?: string
}

export const SetsList: React.FC<SetsListProps> = ({
  tokensLib,
  selected,
  newPath,
  editionId,
}) => {
  const tokenSets = tokensLib ? ctob.getSetTree(tokensLib) : null
  const canEdit = ctx.useCanEdit()

  const tokenSetActive = useCallback(
    (name: string) => {
      if (!tokensLib) return false
      return ctob.tokenSetActive(tokensLib, name)
    },
    [tokensLib]
  )

  const tokenSetGroupActive = useCallback(
    (groupPath: string[]) => {
      return refs.tokenSetsAtPathAllActive(groupPath)
    },
    []
  )

  const onResetEdition = useCallback(
    (_: any) => {
      if (canEdit) {
        store.emit(dwtl.clearTokenSetEdition(), dwtl.clearTokenSetCreation())
      }
    },
    [canEdit]
  )

  const onStartEdition = useCallback(
    (id: string) => {
      if (canEdit) {
        store.emit(dwtl.startTokenSetEdition(id))
      }
    },
    [canEdit]
  )

  return (
    <controlledSetsList*
      tokensLib={tokensLib}
      tokenSets={tokenSets}
      isTokenSetActive={tokenSetActive}
      isTokenSetGroupActive={tokenSetGroupActive}
      onSelect={onSelectTokenSetClick}
      selected={selected}
      newPath={newPath}
      editionId={editionId}
      origin="set-panel"
      canEdit={canEdit}
      onStartEdition={onStartEdition}
      onResetEdition={onResetEdition}
      onToggleTokenSet={onToggleTokenSetClick}
      onToggleTokenSetGroup={onToggleTokenSetGroupClick}
      onUpdateTokenSet={setsHelpers.onUpdateTokenSet(tokensLib)}
      onUpdateTokenSetGroup={setsHelpers.onUpdateTokenSetGroup}
      onCreateTokenSet={setsHelpers.onCreateTokenSet}
    />
  )
}
