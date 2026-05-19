// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useState, useCallback, useMemo, useRef } from "react"
import * as d from "app/common/data"
import * as dm from "app/common/data/macros"
import { maxInputLength } from "app/main/constants"
import * as dcm from "app/main/data/common"
import * as ev from "app/main/data/event"
import * as modal from "app/main/data/modal"
import * as dwta from "app/main/data/workspace.tokens.application"
import * as dwtl from "app/main/data/workspace.tokens.library-edit"
import { refs } from "app/main/refs"
import { store } from "app/main/store"
import { IconButton } from "app/main/ui/ds/buttons/icon-button"
import { Input } from "app/main/ui/ds/controls/input"
import { Icon } from "app/main/ui/ds/foundations/assets/icon"
import { ArrowRightIcon, ArrowDownIcon, SearchIcon, AddIcon, FlexGridIcon, ViewAsListIcon, TickIcon } from "app/main/ui/ds/foundations/assets/icon"
import { Tooltip } from "app/main/ui/ds/tooltip"
import { Swatch } from "app/main/ui/ds/utilities/swatch"
import * as dom from "app/util/dom"
import { tr } from "app/util/i18n"
import * as str from "cuerdas/core"
import * as ptk from "potok.v2.core"

const TokenEmptyState: React.FC = () => (
  <div className="color-token-empty-state">
    {tr("color-token.empty-state")}
  </div>
)

interface ListItemProps {
  token: any
  onTokenPillClick: (event: any, token: any) => void
  selected: boolean
}

const ListItem: React.FC<ListItemProps> = ({ token, onTokenPillClick, selected }) => {
  const onClick = useCallback(
    (event: any) => {
      onTokenPillClick(event, token)
    },
    [token, onTokenPillClick]
  )

  const idTooltip = React.useId()
  const itemRef = useRef<HTMLButtonElement>(null)
  const resolved = token.resolvedValue
  const colorValue = dwta.valueToColor(resolved)

  return (
    <Tooltip id={idTooltip} style={{ width: "100%" }} triggerRef={itemRef} content={token.name}>
      <button
        className={`color-token-item ${selected ? "color-token-selected" : ""}`}
        ref={itemRef}
        aria-labelledby={idTooltip}
        onClick={onClick}
      >
        <Swatch
          background={colorValue}
          tooltipContent={tr("workspace.tokens.resolved-value", resolved)}
          size="small"
        />
        <div className="token-name">{token.name}</div>
        {selected && <Icon iconId={TickIcon} size="s" className="token-selected-icon" />}
      </button>
    </Tooltip>
  )
}

interface GridItemProps {
  token: any
  onTokenPillClick: (event: any, token: any) => void
  selected: boolean
}

const GridItem: React.FC<GridItemProps> = ({ token, onTokenPillClick, selected }) => {
  const onClick = useCallback(
    (event: any) => {
      onTokenPillClick(event, token)
    },
    [token, onTokenPillClick]
  )

  const resolved = token.resolvedValue
  const tokenName = token.name
  const colorValue = dwta.valueToColor(resolved)

  return (
    <div className={`color-token-item-grid ${selected ? "color-token-selected-grid" : ""}`}>
      <Swatch
        background={colorValue}
        tooltipContent={
          <>
            <div>
              <span>{tr("workspace.tokens.token-name")}: </span>
              <span className="token-name">{tokenName}</span>
            </div>
            <div>{tr("workspace.tokens.resolved-value", resolved)}</div>
          </>
        }
        onClick={onClick}
        size="medium"
      />
    </div>
  )
}

function groupToPaths(m: any): Set<string[]> {
  const parts = m.group ? str.split(m.group, "/") : null
  if (!parts || parts.length === 0) return new Set()

  const result: string[][] = []
  for (let i = 1; i <= parts.length; i++) {
    result.push(parts.slice(0, i))
  }
  return new Set(result)
}

interface SetSectionProps {
  collapsed: boolean
  toggleSetsOpen: (name: string) => void
  groupOrSet: any
  name: string
  colorOrigin: "fill" | "stroke-color" | "color-selection"
  onTokenChange: (event: any, token: any) => void
  appliedToken?: string
}

const SetSection: React.FC<SetSectionProps> = ({
  collapsed,
  toggleSetsOpen,
  groupOrSet,
  name,
  colorOrigin,
  onTokenChange,
  appliedToken,
}) => {
  const [listStyle, setListStyle] = useState<"list" | "grid">("list")

  const toggleListStyle = useCallback(() => {
    setListStyle((prev) => (prev === "list" ? "grid" : "list"))
  }, [])

  const toggleSet = useCallback(() => {
    toggleSetsOpen(name)
  }, [name, toggleSetsOpen])

  const objects = refs.workspacePageObjects.deref()
  const selected = refs.selectedShapes.deref()

  const selectedShapes = useMemo(() => {
    if (!selected || !objects) return []
    return selected.map((id: string) => objects[id]).filter(Boolean)
  }, [selected, objects])

  const firstShape = selectedShapes[0]
  const appliedTokens = firstShape?.appliedTokens
  const hasColorTokens = appliedTokens?.fill
  const hasStrokeTokens = appliedTokens?.strokeColor

  const onTokenPillClick = useCallback(
    (event: any, token: any) => {
      dom.stopPropagation(event)
      if (selectedShapes.length > 0) {
        onTokenChange(event, token)
      }
    },
    [selectedShapes, onTokenChange]
  )

  const createTokenOnSet = useCallback(
    (_: any) => {
      const pathSet = groupToPaths(groupOrSet)
      const id = groupOrSet.sets[0]?.id

      store.emit(dcm.goToWorkspace("layout", "tokens"))
      if (pathSet.size > 0) {
        store.emit(ptk.dataEvent("expand-token-sets", { paths: pathSet }))
      }
      store.emit(dwtl.setSelectedTokenSetId(id))

      const modalConfig = dwta.tokenProperties.color
      const windowSize = dom.getWindowSize()
      const leftSidebar = dom.getElement("left-sidebar-aside")
      const xSize = leftSidebar ? dom.getData(leftSidebar, "width") : "0"
      const modalHeight = 392
      const x = parseInt(xSize) - 30
      const y = windowSize.height / 2 - modalHeight / 2

      modal.show(modalConfig.key, {
        x,
        y,
        position: "right",
        fields: modalConfig.fields,
        title: modalConfig.title,
        action: "create",
        tokenType: "color",
      })
    },
    [groupOrSet]
  )

  const iconId = collapsed ? ArrowRightIcon : ArrowDownIcon

  return (
    <article className="color-token-set">
      <header className="set-title-bar">
        <button
          className="set-title-btn"
          aria-controls={`set-panel-${d.name(name)}`}
          aria-expanded={!collapsed}
          aria-label={tr("inspect.tabs.styles.toggle-style", name)}
          onClick={toggleSet}
        >
          <Icon iconId={iconId} size="s" className="set-title-icon" />
          <span className="set-title">{name}</span>
        </button>
        <div className={`set-title-actions ${collapsed ? "set-title-action-hidden" : ""}`}>
          <IconButton
            onClick={toggleListStyle}
            variant="action"
            aria-label={
              listStyle === "list"
                ? tr("workspace.assets.grid-view")
                : tr("workspace.assets.list-view")
            }
            icon={listStyle === "list" ? FlexGridIcon : ViewAsListIcon}
          />
          <IconButton
            onClick={createTokenOnSet}
            variant="action"
            aria-label={tr("workspace.tokens.add-token", "color")}
            icon={AddIcon}
          />
        </div>
      </header>

      {!collapsed && (
        <div
          id={`set-panel-${d.name(name)}`}
          className={`color-token-list ${listStyle === "list" ? "list-view" : "grid-view"}`}
        >
          {groupOrSet.tokens.map((token: any) => {
            let selected = false
            switch (colorOrigin) {
              case "fill":
                selected = hasColorTokens === token.name
                break
              case "stroke-color":
                selected = hasStrokeTokens === token.name
                break
              case "color-selection":
                selected = appliedToken === token.name
                break
            }

            if (listStyle === "grid") {
              return (
                <GridItem
                  key={`token-grid-${token.id}`}
                  onTokenPillClick={onTokenPillClick}
                  selected={selected}
                  token={token}
                />
              )
            } else {
              return (
                <ListItem
                  key={`token-list-${token.id}`}
                  onTokenPillClick={onTokenPillClick}
                  selected={selected}
                  token={token}
                />
              )
            }
          })}
        </div>
      )}
    </article>
  )
}

function labelGroupOrSet({ group, sets }: any): string {
  if (group) {
    return `${group} (${sets.map((s: any) => s.name).join(", ")})`
  }
  return sets[0]?.name || ""
}

function filterCombinedTokens(combinedTokens: any[], term: string): any[] {
  const lowerTerm = str.lower(str.trim(term))
  if (str.blank(lowerTerm)) return combinedTokens

  return combinedTokens
    .map((entry: any) => {
      const filtered = entry.tokens.filter((token: any) =>
        str.includes(str.lower(token.name), lowerTerm)
      )
      if (filtered.length > 0) {
        return { ...entry, tokens: filtered }
      }
      return null
    })
    .filter(Boolean)
}

function sortCombinedTokens(combinedTokens: any[]): any[] {
  return combinedTokens.map((entry: any) => ({
    ...entry,
    tokens: [...entry.tokens].sort((a: any, b: any) => a.name.localeCompare(b.name)),
  }))
}

interface TokenSectionProps {
  combinedTokens: any[]
  colorOrigin: "fill" | "stroke-color" | "color-selection"
  onTokenChange: (event: any, token: any) => void
  appliedToken?: string
}

export const TokenSection: React.FC<TokenSectionProps> = ({
  combinedTokens,
  colorOrigin,
  onTokenChange,
  appliedToken,
}) => {
  const sets = useMemo(() => {
    return new Set(combinedTokens.map(labelGroupOrSet))
  }, [combinedTokens])

  const [filterTerm, setFilterTerm] = useState("")
  const [openSets, setOpenSets] = useState<Set<string>>(sets)

  const toggleSetsOpen = useCallback(
    (name: string) => {
      setOpenSets((prev) => {
        const next = new Set(prev)
        if (next.has(name)) {
          next.delete(name)
        } else {
          next.add(name)
        }
        return next
      })
    },
    []
  )

  const onFilterTokens = useCallback(
    (event: any) => {
      const value = dom.getValue(dom.getTarget(event))
      setFilterTerm(value)
      setOpenSets(sets)
    },
    [sets]
  )

  const filteredCombined = useMemo(
    () => filterCombinedTokens(combinedTokens, filterTerm),
    [combinedTokens, filterTerm]
  )

  const sortedTokens = useMemo(() => sortCombinedTokens(filteredCombined), [filteredCombined])

  if (!combinedTokens || combinedTokens.length === 0) {
    return <TokenEmptyState />
  }

  return (
    <div className="color-tokens-section">
      <Input
        placeholder="Search by token name"
        icon={SearchIcon}
        maxLength={maxInputLength}
        variant="comfortable"
        className="search-input"
        defaultValue={filterTerm}
        onChange={onFilterTokens}
      />
      {sortedTokens.length > 0 ? (
        <div className="color-tokens-inputs">
          {sortedTokens.map((combinedSets: any) => {
            const name = labelGroupOrSet(combinedSets)
            return (
              <SetSection
                key={`set-${name}`}
                collapsed={!openSets.has(name)}
                toggleSetsOpen={toggleSetsOpen}
                colorOrigin={colorOrigin}
                onTokenChange={onTokenChange}
                name={name}
                appliedToken={appliedToken}
                groupOrSet={combinedSets}
              />
            )
          })}
        </div>
      ) : (
        <TokenEmptyState />
      )}
    </div>
  )
}