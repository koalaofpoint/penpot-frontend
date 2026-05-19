// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useMemo, useCallback } from "react"
import * as d from "app/common/data"
import * as ctsl from "app/common/types/shape/layout"
import * as ctob from "app/common/types/tokens-lib"
import * as cf from "app/config"
import * as sd from "app/main/data/style-dictionary"
import * as dwta from "app/main/data/workspace.tokens.application"
import * as dwtl from "app/main/data/workspace.tokens.library-edit"
import { refs } from "app/main/refs"
import { store } from "app/main/store"
import { Icon } from "app/main/ui/ds/foundations/assets/icon"
import { EyeOffIcon } from "app/main/ui/ds/foundations/assets/icon"
import { Text } from "app/main/ui/ds/foundations/typography/text"
import { TokenContextMenu } from "app/main/ui/workspace/tokens/management/context-menu"
import { TokenGroup } from "app/main/ui/workspace/tokens/management/group"
import { TokenNodeContextMenu } from "app/main/ui/workspace/tokens/management/node-context-menu"
import * as array from "app/util/array"
import { tr } from "app/util/i18n"
import * as str from "cuerdas/core"

function getSortedTokenGroups(tokensByType: Record<string, any[]>): [string[], string[]] {
  const tokenShadowEnabled = cf.flags.has("token-shadow")
  let allTypes = dwta.tokenProperties
  if (!tokenShadowEnabled) {
    allTypes = Object.fromEntries(
      Object.entries(allTypes).filter(([k]) => k !== "shadow")
    )
  }
  const typeKeys = Object.keys(allTypes)

  let empty: string[] = []
  let filled: string[] = []

  for (const type of typeKeys) {
    const tokens = tokensByType[type]
    if (tokens && tokens.length > 0) {
      filled.push(type)
    } else {
      empty.push(type)
    }
  }

  empty.sort()
  filled.sort()

  return [empty, filled]
}

interface SelectedSetInfoProps {
  tokensLib: any
  selectedTokenSetId: string | null
}

const SelectedSetInfo: React.FC<SelectedSetInfoProps> = ({ tokensLib, selectedTokenSetId }) => {
  const selectedTokenSet = useMemo(() => {
    if (!selectedTokenSetId || !tokensLib) return null
    return ctob.getSet(tokensLib, selectedTokenSetId)
  }, [tokensLib, selectedTokenSetId])

  const activeTokenSetsNames = useMemo(() => {
    if (!tokensLib) return null
    return ctob.getActiveThemesSetNames(tokensLib)
  }, [tokensLib])

  const tokenSetActive = useCallback(
    (name: string) => {
      if (!activeTokenSetsNames) return false
      return activeTokenSetsNames.has(name)
    },
    [activeTokenSetsNames]
  )

  return (
    <div className="sets-header-container">
      <Text
        as="span"
        typography="headline-small"
        className="sets-header"
        data-testid="active-token-set-title"
      >
        {tr("workspace.tokens.tokens-section-title", ctob.getName(selectedTokenSet))}
      </Text>
      {selectedTokenSetId && selectedTokenSet && !tokenSetActive(ctob.getName(selectedTokenSet)) && (
        <div
          className="sets-header-status"
          title={tr("workspace.tokens.inactive-set-description")}
        >
          <Icon iconId={EyeOffIcon} className="sets-header-status-icon" />
          <Text
            as="span"
            typography="body-small"
            className="sets-header-status-text"
          >
            {tr("workspace.tokens.inactive-set")}
          </Text>
        </div>
      )}
    </div>
  )
}

interface TokenSectionProps {
  tokensLib: any
  activeTokens: Record<string, any>
  resolvedActiveTokens: Record<string, any>
}

export const TokensSection: React.FC<TokenSectionProps> = ({
  tokensLib,
  activeTokens,
  resolvedActiveTokens,
}) => {
  const objects = refs.workspacePageObjects.deref()
  const selected = refs.selectedShapes.deref()

  const selectedShapes = useMemo(() => {
    if (!selected || !objects) return []
    return selected.map((id: string) => objects[id]).filter(Boolean)
  }, [selected, objects])

  const isSelectedInsideLayout = useMemo(() => {
    if (!selectedShapes || !objects) return false
    return selectedShapes.some((shape: any) =>
      ctsl.anyLayoutImmediateChild(objects, shape)
    )
  }, [selectedShapes, objects])

  const selectedTokenSetId = refs.selectedTokenSetId.deref()

  const selectedTokenSetTokens = useMemo(() => {
    if (!selectedTokenSetId || !tokensLib) return null
    return ctob.getTokens(tokensLib, selectedTokenSetId)
  }, [tokensLib, selectedTokenSetId])

  const mergedTokens = useMemo(() => {
    return { ...activeTokens, ...selectedTokenSetTokens }
  }, [activeTokens, selectedTokenSetTokens])

  const resolvedTokens = sd.useResolvedTokens(mergedTokens)

  const tokensByType = useMemo(() => {
    if (!resolvedTokens || !selectedTokenSetTokens) return {}
    const tokens = Object.entries(resolvedTokens).reduce((acc, [k, v]) => {
      if (selectedTokenSetTokens && selectedTokenSetTokens[k]) {
        return acc
      }
      return { ...acc, [k]: v }
    }, {})
    return ctob.groupByType(tokens)
  }, [resolvedTokens, selectedTokenSetTokens])

  const [emptyGroup, filledGroup] = useMemo(() => {
    return getSortedTokenGroups(tokensByType)
  }, [tokensByType])

  const filterTokensByPathIds = useCallback(
    (type: string, path: string) => {
      if (!selectedTokenSetTokens) return []
      return selectedTokenSetTokens
        .filter((token: any) => {
          return (
            token.type === type &&
            str.startsWith(token.name, path)
          )
        })
        .map((token: any) => token.id)
    },
    [selectedTokenSetTokens]
  )

  const remainingTokensOfTypeInSet = useCallback(
    (selectedTokenSetTokens: any[], tokensInPathIds: string[]) => {
      if (!selectedTokenSetTokens) return false
      const tokenIds = new Set(tokensInPathIds)
      const remaining = selectedTokenSetTokens.filter(
        (token: any) => !tokenIds.has(token.id)
      )
      return remaining.length > 0
    },
    []
  )

  const deleteToken = useCallback(
    (token: any) => {
      if (!selectedTokenSetId) return
      const id = token.id
      const type = token.type
      const path = token.name
      const tokensByTypeGrouped = ctob.groupByType(selectedTokenSetTokens)
      const tokensFilteredByType = tokensByTypeGrouped[type]
      const tokensInPathIds = filterTokensByPathIds(type, path)
      const remaining = remainingTokensOfTypeInSet(tokensFilteredByType, tokensInPathIds)

      store.emit(dwtl.deleteToken(selectedTokenSetId, id))

      if (remaining) {
        store.emit(dwtl.toggleTokenPath(`${type}.${path}`))
      } else {
        store.emit(dwtl.toggleTokenPath(type))
      }
    },
    [selectedTokenSetId, selectedTokenSetTokens, filterTokensByPathIds, remainingTokensOfTypeInSet]
  )

  const deleteNode = useCallback(
    (node: any, type: string) => {
      if (!selectedTokenSetId) return
      const path = node.path
      const tokensByTypeGrouped = ctob.groupByType(selectedTokenSetTokens)
      const tokensFilteredByType = tokensByTypeGrouped[type]
      const tokensInPathIds = filterTokensByPathIds(type, path)
      const remaining = remainingTokensOfTypeInSet(tokensFilteredByType, tokensInPathIds)

      store.emit(dwtl.bulkDeleteTokens(selectedTokenSetId, tokensInPathIds))

      if (remaining) {
        store.emit(dwtl.toggleTokenPath(`${type}.${path}`))
      } else {
        store.emit(dwtl.toggleTokenPath(type))
      }
    },
    [selectedTokenSetId, selectedTokenSetTokens, filterTokensByPathIds, remainingTokensOfTypeInSet]
  )

  React.useEffect(() => {
    if (!tokensLib) return
    if (
      !selectedTokenSetId ||
      (selectedTokenSetId && !ctob.getSet(tokensLib, selectedTokenSetId))
    ) {
      const match = ctob.getSets(tokensLib)?.[0]
      if (match) {
        store.emit(dwtl.setSelectedTokenSetId(ctob.getId(match)))
      }
    }
  }, [tokensLib, selectedTokenSetId])

  return (
    <>
      <TokenContextMenu onDeleteToken={deleteToken} />
      <TokenNodeContextMenu onDeleteNode={deleteNode} />

      <SelectedSetInfo
        tokensLib={tokensLib}
        selectedTokenSetId={selectedTokenSetId}
      />

      {filledGroup.map((type) => {
        const tokens = tokensByType[type]
        return (
          <TokenGroup
            key={type}
            tokens={tokens}
            type={type}
            selectedIds={selected}
            selectedShapes={selectedShapes}
            isSelectedInsideLayout={isSelectedInsideLayout}
            activeThemeTokens={resolvedActiveTokens}
            tokensLib={tokensLib}
            selectedTokenSetId={selectedTokenSetId}
          />
        )
      })}

      {emptyGroup.map((type) => (
        <TokenGroup
          key={type}
          tokens={[]}
          type={type}
          selectedShapes={selectedShapes}
          isSelectedInsideLayout={isSelectedInsideLayout}
          activeThemeTokens={resolvedActiveTokens}
        />
      ))}
    </>
  )
}