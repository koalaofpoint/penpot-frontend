// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react"
import { useCallback, useState, useRef, useEffect, useMemo } from "react"
import * as d from "app/common/data"
import * as dm from "app.common.data.macros"
import * as cfh from "app.common.files.helpers"
import * as cts from "app.common.types.shape"
import * as uuid from "app.common.uuid"
import * as dw from "app/main/data/workspace"
import * as refs from "app.main.refs"
import * as st from "app.main.store"
import { SearchBar } from "app.main.ui.components.search-bar"
import { TitleBar } from "app.main.ui.components.title-bar"
import { IconButton } from "app.main.ui.ds.buttons.icon-button"
import { Icon, icons } from "app.main.ui.ds.foundations.assets.icon"
import * as hooks from "app.main.ui.hooks"
import { BadgeNotification } from "app.main.ui.notifications.badge"
import { LayerItem } from "app.main.ui.workspace.sidebar.layer-item"
import * as dom from "app.util.dom"
import * as globals from "app.util.globals"
import { tr } from "app.util.i18n"
import * as kbd from "app.util.keyboard"
import { throttleFn } from "app.util.rxops"
import * as usi from "app.util.shape-icon"
import * as rx from "beicon.v2/core"
import * as str from "cuerdas/core"

const CSS = {
  elementList: "element-list",
  toolWindowBar: "tool-window-bar",
  search: "search",
  activeFilters: "active-filters",
  filterButton: "filter-button",
  layerFilter: "layer-filter",
  layerFilterIcon: "layer-filter-icon",
  layerFilterName: "layer-filter-name",
  layerFilterClose: "layer-filter-close",
  filtersContainer: "filters-container",
  filterMenuItem: "filter-menu-item",
  filterMenuItemNameWrapper: "filter-menu-item-name-wrapper",
  filterMenuItemIcon: "filter-menu-item-icon",
  filterMenuItemName: "filter-menu-item-name",
  filterMenuItemTick: "filter-menu-item-tick",
  layers: "layers",
  focusTitle: "focus-title",
  backButton: "back-button",
  focusName: "focus-name",
  focusModeTagWrapper: "focus-mode-tag-wrapper",
  toolWindowContent: "tool-window-content",
  backButtonIcon: "back-button-icon",
}

function css(className: string, ..._rest: any[]): string {
  return className
}

function cssCase(classMap: Record<string, boolean | undefined>): string {
  return Object.entries(classMap)
    .filter(([, v]) => v)
    .map(([k]) => k)
    .join(" ")
}

// Frame Wrapper Component
interface FrameWrapperProps {
  selected: Set<string>
  item: any
  highlighted: Set<string>
  index: number
  objects: any
  filtered?: boolean
  sortable?: boolean
  parentSize?: number
  depth?: number
}

const FrameWrapper: React.FC<FrameWrapperProps> = (props) => {
  const pendingSelectedRef = useRef(props.selected)
  const [currentSelected, setCurrentSelected] = useState(props.selected)

  const mergedProps = { ...props, selected: currentSelected }

  const setSelected = useMemo(() => {
    return throttleFn(50, () => {
      if (pendingSelectedRef.current) {
        setCurrentSelected(pendingSelectedRef.current)
      }
    })
  }, [])

  useEffect(() => {
    pendingSelectedRef.current = props.selected
    setSelected()
    return () => {
      pendingSelectedRef.current = null
      rx.dispose!(setSelected)
    }
  }, [props.selected, setSelected])

  return <LayerItem {...mergedProps} />
}

// Layers Tree Component
interface LayersTreeProps {
  objects: any
  filtered?: boolean
  parentSize?: number
}

const LayersTree: React.FC<LayersTreeProps> = React.memo(({ objects, filtered = false, parentSize }) => {
  const selected = hooks.useEqualMemo(refs.selectedShapes.deref())
  const highlighted = hooks.useEqualMemo(refs.highlightedShapes.deref())
  const root = objects[uuid.zero]

  return (
    <div className={css(CSS.elementList)} data-testid="layer-item">
      <hooks.SortableContainer>
        {Array.from(d.enumerate(d.reverse(Array.from((root?.shapes || []))))).map(([index, id]: [number, string]) => {
          const obj = objects[id]
          if (!obj) return null

          if (cfh.frameShape(obj)) {
            return (
              <FrameWrapper
                key={id}
                item={obj}
                selected={selected}
                highlighted={highlighted}
                index={index}
                objects={objects}
                sortable={true}
                filtered={filtered}
                parentSize={parentSize}
                depth={-1}
              />
            )
          }

          return (
            <LayerItem
              key={id}
              item={obj}
              selected={selected}
              highlighted={highlighted}
              index={index}
              objects={objects}
              sortable={true}
              filtered={filtered}
              parentSize={parentSize}
              depth={-1}
            />
          )
        })}
      </hooks.SortableContainer>
    </div>
  )
}, (prev, next) => {
  return throttleFn(200, () => true)(prev, next)
})

// Filters Tree Component
interface FiltersTreeProps {
  objects: any
  parentSize?: number
}

const FiltersTree: React.FC<FiltersTreeProps> = React.memo(({ objects, parentSize }) => {
  const selected = hooks.useEqualMemo(refs.selectedShapes.deref())
  const root = objects[uuid.zero]

  return (
    <ul className={css(CSS.elementList)}>
      {Array.from(d.enumerate(Array.from((root?.shapes || [])))).map(([index, id]: [number, string]) => {
        const obj = objects[id]
        if (!obj) return null

        return (
          <LayerItem
            key={id}
            item={obj}
            selected={selected}
            index={index}
            objects={objects}
            sortable={false}
            filtered={true}
            parentSize={parentSize}
            depth={-1}
          />
        )
      })}
    </ul>
  )
}, (prev, next) => {
  return throttleFn(200, () => true)(prev, next)
})

function calcReparentedObjects(objects: any) {
  const reparentedObjects = d.mapm((_key, val) => {
    return { ...val, parentId: uuid.zero, shapes: null }
  }, objects)

  const reparentedShapes = Object.keys(reparentedObjects)
    .filter((id) => id !== uuid.zero)
    .map((id) => reparentedObjects[id])

  return {
    ...reparentedObjects,
    [uuid.zero]: { ...reparentedObjects[uuid.zero], shapes: reparentedShapes }
  }
}

// Match filters logic
function matchFilters(state: any, [id, shape]: [string, any]) {
  const search = state.searchText
  let filters = state.filters

  if (filters?.has("shape")) {
    filters = new Set([...filters, "rect", "circle", "path", "bool"])
  }

  if (id === uuid.zero) return true

  const nameMatch =
    str.includes(str.lower(shape.name || ""), str.lower(search)) ||
    str.includes(str.lower(shape.variantName || ""), str.lower(search)) ||
    (assert && str.includes(dm.str(shape.id), str.lower(search)))

  if (!nameMatch) return false

  if (!filters || filters.size === 0) return true

  if (filters.has("component") && shape.componentId) return true
  if (filters.has("image") && cts.hasImages(shape)) return true

  const directFilters = new Set(["frame", "rect", "circle", "path", "bool", "text"])
  const intersectFilters = [...filters].filter((f) => directFilters.has(f))
  if (intersectFilters.length > 0 && intersectFilters.includes(shape.type)) return true

  if (filters.has("group") &&
      cfh.groupShape(shape) &&
      !shape.componentId &&
      (!shape.maskedGroup || shape.maskedGroup === false)) return true

  if (filters.has("mask") && shape.maskedGroup === true) return true

  return false
}

// Search hook
function useSearch(page: any, objects: any) {
  const [state, setState] = useState(() => ({
    showSearch: false,
    showMenu: false,
    searchText: "",
    filters: new Set<string>(),
    numItems: 100,
  }))

  const {
    showSearch: showSearch,
    showMenu: showMenu,
    searchText: currentSearch,
    filters: currentFilters,
    numItems: currentItems,
  } = state

  const clearSearchText = useCallback(() => {
    setState((s) => ({ ...s, searchText: "", numItems: 100 }))
  }, [])

  const toggleFilters = useCallback(() => {
    setState((s) => ({ ...s, showMenu: !s.showMenu }))
  }, [])

  const onToggleFiltersClick = useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event)
    toggleFilters()
  }, [toggleFilters])

  const hideMenu = useCallback(() => {
    setState((s) => ({ ...s, showMenu: false }))
  }, [])

  const onKeyDown = useCallback((event: KeyboardEvent) => {
    if (kbd.esc(event)) hideMenu()
  }, [hideMenu])

  const updateSearchText = useCallback((value: string, _event: any) => {
    setState((s) => ({ ...s, searchText: value, numItems: 100 }))
  }, [])

  const toggleSearch = useCallback((event: React.MouseEvent) => {
    const node = dom.getCurrentTarget(event)
    dom.blur!(node)
    setState((s) => ({
      ...s,
      searchText: "",
      filters: new Set(),
      showMenu: false,
      numItems: 100,
      showSearch: !s.showSearch,
    }))
  }, [])

  const removeFilter = useCallback((event: React.MouseEvent) => {
    const fkey = dom.getData(dom.getCurrentTarget(event), "filter")
    setState((s) => ({
      ...s,
      filters: new Set([...s.filters].filter((f) => f !== fkey)),
      numItems: 100,
    }))
  }, [])

  const addFilter = useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event)
    const key = dom.getData(dom.getCurrentTarget(event), "filter")
    setState((s) => ({
      ...s,
      filters: new Set([...s.filters, key]),
      showMenu: false,
      numItems: 100,
    }))
  }, [])

  const active = showSearch && (currentSearch.length > 0 || currentFilters.size > 0)

  const filteredObjectsAll = useMemo(() => {
    if (!active) return null
    return Array.from(objects).filter((item) => matchFilters(state, item))
  }, [active, objects, state])

  const filteredObjectsTotal = filteredObjectsAll?.length || 0

  const filteredObjects = useMemo(() => {
    if (!active) return null
    const taken = Array.from(filteredObjectsAll || []).slice(0, currentItems)
    const objMap = new Map(taken)
    return calcReparentedObjects(objMap)
  }, [active, filteredObjectsAll, currentItems])

  const handleShowMore = useCallback(() => {
    if (currentItems <= filteredObjectsTotal) {
      setState((s) => ({ ...s, numItems: s.numItems + 100 }))
    }
  }, [currentItems, filteredObjectsTotal])

  useEffect(() => {
    const keydown = (events as any).listen(globals.document, (events as any).EventType.KEYDOWN, onKeyDown)
    const click = (events as any).listen(globals.document, (events as any).EventType.CLICK, hideMenu)
    return () => {
      events.unlistenByKey(keydown)
      events.unlistenByKey(click)
    }
  }, [onKeyDown, hideMenu])

  const filterComponent = useMemo(() => {
    return (
      <>
        {showSearch && (
          <div className={css(CSS.toolWindowBar, CSS.search)}>
            <SearchBar
              onChange={updateSearchText}
              value={currentSearch}
              onClear={clearSearchText}
              placeholder={tr("workspace.sidebar.layers.search")}
            />
            <button
              className={cssCase({
                [CSS.filterButton]: true,
                opened: showMenu,
                active: active,
              })}
              onClick={onToggleFiltersClick}
            >
              <Icon iconId={icons.filter} />
            </button>
            <IconButton
              variant="ghost"
              ariaLabel={tr("labels.close")}
              onClick={toggleSearch}
              icon={icons.close}
            />
          </div>
        )}

        {active && currentFilters.size > 0 && (
          <div className={css(CSS.activeFilters)}>
            {Array.from(currentFilters).map((fkey) => {
              const fname = d.name(fkey as any)
              const name = (() => {
                switch (fkey) {
                  case "frame": return tr("workspace.sidebar.layers.frames")
                  case "group": return tr("workspace.sidebar.layers.groups")
                  case "mask": return tr("workspace.sidebar.layers.masks")
                  case "component": return tr("workspace.sidebar.layers.components")
                  case "text": return tr("workspace.sidebar.layers.texts")
                  case "image": return tr("workspace.sidebar.layers.images")
                  case "shape": return tr("workspace.sidebar.layers.shapes")
                  default: return tr(fkey as any)
                }
              })()
              const filterIcon = usi.getShapeIconByType(fkey as any)

              return (
                <button
                  key={fname}
                  className={css(CSS.layerFilter)}
                  data-filter={fname}
                  onClick={removeFilter}
                >
                  <Icon iconId={filterIcon} size="s" className={css(CSS.layerFilterIcon)} />
                  <span className={css(CSS.layerFilterName)}>{name}</span>
                  <Icon iconId={icons.closeSmall} className={css(CSS.layerFilterClose)} />
                </button>
              )
            })}
          </div>
        )}

        {showMenu && (
          <ul className={css(CSS.filtersContainer)}>
            {[
              { key: "frame", icon: icons.board, label: "workspace.sidebar.layers.frames" },
              { key: "group", icon: icons.group, label: "workspace.sidebar.layers.groups" },
              { key: "mask", icon: icons.mask, label: "workspace.sidebar.layers.masks" },
              { key: "component", icon: icons.component, label: "workspace.sidebar.layers.components" },
              { key: "text", icon: icons.text, label: "workspace.sidebar.layers.texts" },
              { key: "image", icon: icons.img, label: "workspace.sidebar.layers.images" },
              { key: "shape", icon: icons.path, label: "workspace.sidebar.layers.shapes" },
            ].map(({ key, icon, label }) => (
              <li
                key={key}
                className={cssCase({
                  [CSS.filterMenuItem]: true,
                  selected: currentFilters.has(key),
                })}
                data-filter={key}
                onClick={addFilter}
              >
                <div className={css(CSS.filterMenuItemNameWrapper)}>
                  <Icon iconId={icon} size="s" className={css(CSS.filterMenuItemIcon)} />
                  <span className={css(CSS.filterMenuItemName)}>{tr(label)}</span>
                </div>
                {currentFilters.has(key) && (
                  <Icon iconId={icons.tick} size="s" className={css(CSS.filterMenuItemTick)} />
                )}
              </li>
            ))}
          </ul>
        )}
      </>
    )
  }, [showSearch, showMenu, currentSearch, currentFilters, active, updateSearchText, clearSearchText, onToggleFiltersClick, toggleSearch, removeFilter, addFilter])

  return [
    filteredObjects,
    handleShowMore,
    () => filterComponent,
  ] as const
}

// On Scroll Handler
function onScroll(event: React.UIEvent<HTMLDivElement>) {
  const children = dom.getElementsByClass("sticky-children")
  const length = (children as any).length

  if (length <= 0) return

  const target = dom.getTarget(event) as HTMLElement
  const targetTop = (dom.getBoundingRect(target) as any).top
  const frames = dom.getElementsByClass("root-board")

  const lastHiddenFrame = Array.from(frames as any).filter((frame: HTMLElement) => {
    return (dom.getBoundingRect(frame) as any).top - targetTop <= 0
  }).pop()

  const frameId = lastHiddenFrame ? dom.getAttribute(lastHiddenFrame, "id") : null

  const lastHiddenChildren = Array.from(children as any).filter((child: HTMLElement) => {
    return (dom.getBoundingRect(child) as any).top - targetTop < 0
  }).pop()

  const isChildrenShown = lastHiddenChildren &&
    (dom.getBoundingRect(lastHiddenChildren) as any).bottom - targetTop > 0

  const childrenFrameId = lastHiddenChildren ? dom.getAttribute(lastHiddenChildren, "data-id") : null

  const sticky = lastHiddenFrame && isChildrenShown && frameId === childrenFrameId

  Array.from(frames as any).forEach((frame: HTMLElement) => dom.removeClass!(frame, "sticky"))

  if (sticky && lastHiddenFrame) {
    dom.addClass!(lastHiddenFrame, "sticky")
  }
}

// Layers Toolbox Component
interface LayersToolboxProps {
  sizeParent?: number
}

export const LayersToolbox: React.FC<LayersToolboxProps> = ({ sizeParent }) => {
  const page = refs.workspacePage.deref()
  const focus = refs.workspaceFocusSelected.deref()

  const objects = hooks.withFocusObjects(page?.objects, focus)
  const title = focus?.length === 1 ? dm.getIn(objects, [focus[0], "name"]) : null

  const observerRef = useRef<IntersectionObserver | null>(null)
  const lazyLoadRef = useRef<HTMLDivElement | null>(null)

  const [filteredObjects, showMore, filterComponent] = useSearch(page, objects)

  const intersectionCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    if (entries[0]?.isIntersecting && showMore) {
      showMore()
    }
  }, [showMore])

  const onRenderContainer = useCallback((element: HTMLDivElement | null) => {
    if (!element) return

    if (lazyLoadRef.current) {
      if (!observerRef.current) {
        const observer = new IntersectionObserver(intersectionCallback, { root: element })
        observer.observe(lazyLoadRef.current)
        observerRef.current = observer
      }
    } else {
      if (observerRef.current) {
        observerRef.current.disconnect()
        observerRef.current = null
      }
    }
  }, [intersectionCallback])

  const toggleFocusMode = useCallback(() => {
    st.emit!(dw.toggleFocusMode())
  }, [])

  return (
    <div id="layers" className={css(CSS.layers)} data-testid="layer-tree">
      {d.notEmpty(focus) ? (
        <div className={css(CSS.toolWindowBar)}>
          <button className={css(CSS.focusTitle)} onClick={toggleFocusMode}>
            <span className={css(CSS.backButton)}>
              <Icon iconId={icons.arrow} />
            </span>
            <div className={css(CSS.focusName)}>
              {title || tr("workspace.sidebar.layers")}
            </div>
            <div className={css(CSS.focusModeTagWrapper)}>
              <BadgeNotification content={tr("workspace.focus.focus-mode")} size="small" isFocus={true} />
            </div>
          </button>
        </div>
      ) : (
        filterComponent()
      )}

      {filteredObjects ? (
        <>
          <div
            className={css(CSS.toolWindowContent)}
            data-scroll-container
            ref={onRenderContainer}
          >
            <FiltersTree
              objects={filteredObjects}
              key={dm.str(page?.id)}
              parentSize={sizeParent}
            />
            <div ref={lazyLoadRef} />
          </div>
          <div
            onScroll={onScroll}
            className={css(CSS.toolWindowContent)}
            data-scroll-container
            style={{ display: filteredObjects ? "none" : undefined }}
          >
            <LayersTree
              objects={filteredObjects}
              key={dm.str(page?.id)}
              filtered
              parentSize={sizeParent}
            />
          </div>
        </>
      ) : (
        <div
          onScroll={onScroll}
          className={css(CSS.toolWindowContent)}
          data-scroll-container
          style={{ display: filteredObjects ? "none" : undefined }}
        >
          <LayersTree
            objects={objects}
            key={dm.str(page?.id)}
            filtered={false}
            parentSize={sizeParent}
          />
        </div>
      )}
    </div>
  )
}