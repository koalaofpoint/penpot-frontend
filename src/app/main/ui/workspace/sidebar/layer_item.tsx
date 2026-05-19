// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useRef, useState, useEffect, useCallback, useMemo } from "react"
import * as d from "app/common/data"
import * as dm from "app.common.data.macros"
import * as cfh from "app.common.files.helpers"
import * as ctk from "app.common.types.component"
import * as ctkl from "app.common.types.components-list"
import * as ctn from "app.common.types.container"
import * as ctl from "app.common.types.shape.layout"
import * as uuid from "app.common.uuid"
import * as dw from "app/main/data/workspace"
import * as dwc from "app/main/data.workspace.collapse"
import * as refs from "app.main.refs"
import * as st from "app.main.store"
import { currentWorkspaceReadOnly } from "app.main.ui.context"
import { Icon } from "app.main.ui.ds.foundations.assets.icon"
import * as hooks from "app.main.ui.hooks"
import * as deprecatedIcon from "app.main.ui.icons"
import { LayerName } from "app.main.ui.workspace.sidebar.layer-name"
import * as dom from "app.util.dom"
import { tr } from "app.util.i18n"
import * as kbd from "app.util.keyboard"
import * as usi from "app.util.shape-icon"
import * as ts from "app.util.timers"
import * as rx from "beicon.v2/core"
import * as l from "okulary.core"

const CSS = {
  layerRow: "layer-row",
  highlight: "highlight",
  component: "component",
  masked: "masked",
  selected: "selected",
  typeFrame: "type-frame",
  typeBool: "type-bool",
  typeComp: "type-comp",
  hidden: "hidden",
  dndOver: "dnd-over",
  dndOverTop: "dnd-over-top",
  dndOverBot: "dnd-over-bot",
  rootBoard: "root-board",
  tabIndentation: "tab-indentation",
  filtered: "filtered",
  elementListBody: "element-list-body",
  buttonContent: "button-content",
  toggleContent: "toggle-content",
  inverse: "inverse",
  iconShape: "icon-shape",
  absolute: "absolute",
  elementActions: "element-actions",
  isParent: "is-parent",
  toggleElement: "toggle-element",
  blockElement: "block-element",
  elementChildren: "element-children",
  parentSelected: "parent-selected",
  stickyChildren: "sticky-children",
  lazyLoadSentinel: "lazy-load-sentinel",
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

// Sidebar hover queue for performance optimization
const sidebarHoverQueue = { enter: new Set<string>(), leave: new Set<string>() }
let sidebarHoverPending = false

function scheduleSidebarHoverFlush() {
  if (!sidebarHoverPending) {
    sidebarHoverPending = true
    ts.raf(() => {
      const { enter, leave } = { ...sidebarHoverQueue, enter: new Set(), leave: new Set() }
      sidebarHoverPending = false

      if (leave.size > 0) {
        st.emit!(...Array.from(leave).map((id) => dw.dehighlightShape(id)))
      }
      if (enter.size > 0) {
        st.emit!(...Array.from(enter).map((id) => dw.highlightShape(id)))
      }
    })
  }
}

interface LayerItemInnerProps {
  item: any
  depth: number
  parentSize?: number
  nameRef?: React.RefObject<any>
  children?: React.ReactNode
  readOnly?: boolean
  highlighted?: boolean
  selected?: boolean
  componentTree?: boolean
  filtered?: boolean
  expanded?: boolean
  dndOver?: boolean
  dndOverTop?: boolean
  dndOverBot?: boolean
  hideToggle?: boolean
  onSelectShape?: (event: React.MouseEvent) => void
  onContextMenu?: (event: React.MouseEvent) => void
  onPointerEnter?: () => void
  onPointerLeave?: () => void
  onZoomToSelected?: () => void
  onToggleCollapse?: (event: React.MouseEvent) => void
  onEnableDrag?: () => void
  onDisableDrag?: () => void
  onToggleVisibility?: (event: React.MouseEvent) => void
  onToggleBlocking?: (event: React.MouseEvent) => void
  style?: React.CSSProperties
}

export const LayerItemInner: React.FC<LayerItemInnerProps> = ({
  item,
  depth,
  parentSize,
  nameRef,
  children,
  readOnly = false,
  highlighted = false,
  selected = false,
  componentTree = false,
  filtered = false,
  expanded = false,
  dndOver = false,
  dndOverTop = false,
  dndOverBot = false,
  hideToggle = false,
  onSelectShape,
  onContextMenu,
  onPointerEnter,
  onPointerLeave,
  onZoomToSelected,
  onToggleCollapse,
  onEnableDrag,
  onDisableDrag,
  onToggleVisibility,
  onToggleBlocking,
  style,
}) => {
  const id = item.id
  const name = item.name
  const blocked = item.blocked
  const hidden = item.hidden
  const hasShapes = item.shapes && item.shapes.length > 0
  const touched = item.touched && item.touched.length > 0
  const parentBoard = cfh.frameShape(item) && item.parentId === uuid.zero
  const absolute = ctl.itemAbsolute(item)
  const isVariant = ctk.isVariant(item)
  const isVariantContainer = ctk.isVariantContainer(item)
  const variantId = isVariant ? item.variantId : undefined
  const variantName = isVariant ? item.variantName : undefined
  const variantError = isVariant ? item.variantError : undefined

  const data = refs.workspaceData.deref()
  const component = ctkl.getComponent(data, item.componentId)
  const variantProperties = component?.variantProperties
  const iconShape = usi.getShapeIcon(item)

  return (
    <>
      <div
        id={id}
        ref={nameRef}
        onClick={onSelectShape}
        onContextMenu={onContextMenu}
        data-testid="layer-row"
        className={cssCase({
          [CSS.layerRow]: true,
          [CSS.highlight]: highlighted,
          [CSS.component]: ctk.instanceHead(item),
          [CSS.masked]: item.maskedGroup,
          [CSS.selected]: selected,
          [CSS.typeFrame]: cfh.frameShape(item),
          [CSS.typeBool]: cfh.boolShape(item),
          [CSS.typeComp]: componentTree || isVariantContainer,
          [CSS.hidden]: hidden,
          [CSS.dndOver]: dndOver,
          [CSS.dndOverTop]: dndOverTop,
          [CSS.dndOverBot]: dndOverBot,
          [CSS.rootBoard]: parentBoard,
        })}
        style={style}
      >
        <span
          className={cssCase({ [CSS.tabIndentation]: true, [CSS.filtered]: filtered })}
          style={{ "--depth": depth } as React.CSSProperties}
        />

        <div
          className={cssCase({
            [CSS.elementListBody]: true,
            [CSS.filtered]: filtered,
            [CSS.selected]: selected,
            [CSS.iconLayer]: item.type === "icon",
          })}
          style={{ "--depth": depth } as React.CSSProperties}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          onDoubleClick={(e) => dom.stopPropagation(e)}
        >
          {item.shapes && item.shapes.length > 0 ? (
            <div className={css(CSS.buttonContent)}>
              {!hideToggle && !filtered && (
                <button
                  className={cssCase({
                    [CSS.toggleContent]: true,
                    [CSS.inverse]: expanded,
                  })}
                  data-testid="toggle-content"
                  aria-expanded={expanded}
                  onClick={onToggleCollapse}
                >
                  {deprecatedIcon.arrow}
                </button>
              )}
              <div className={css(CSS.iconShape)} onDoubleClick={onZoomToSelected}>
                {absolute && <div className={css(CSS.absolute)} />}
                <Icon iconId={iconShape} size="s" data-testid={`icon-${iconShape}`} />
              </div>
            </div>
          ) : (
            <div className={css(CSS.buttonContent)}>
              {!filtered && <span className={css(CSS.toggleContent)} />}
              <div className={css(CSS.iconShape)} onDoubleClick={onZoomToSelected}>
                {absolute && <div className={css(CSS.absolute)} />}
                <Icon iconId={iconShape} size="s" data-testid={`icon-${iconShape}`} />
              </div>
            </div>
          )}
        </div>

        <LayerName
          ref={nameRef}
          shapeId={id}
          shapeName={name}
          isShapeTouched={touched}
          disabledDoubleClick={readOnly}
          onStartEdit={onDisableDrag}
          onStopEdit={onEnableDrag}
          depth={depth}
          isBlocked={blocked}
          parentSize={parentSize}
          isSelected={selected}
          typeComp={componentTree || isVariantContainer}
          typeFrame={cfh.frameShape(item)}
          variantId={variantId}
          variantName={variantName}
          variantProperties={variantProperties}
          variantError={variantError}
          componentId={component?.id}
          isHidden={hidden}
        />
      </div>

      {!readOnly && (
        <div
          className={cssCase({
            [CSS.elementActions]: true,
            [CSS.isParent]: hasShapes,
            [CSS.selected]: hidden,
            [CSS.selected]: blocked,
          })}
        >
          <button
            className={cssCase({
              [CSS.toggleElement]: true,
              [CSS.selected]: hidden,
            })}
            title={hidden ? tr("workspace.shape.menu.show") : tr("workspace.shape.menu.hide")}
            onClick={onToggleVisibility}
          >
            {hidden ? deprecatedIcon.hide : deprecatedIcon.shown}
          </button>
          <button
            className={cssCase({
              [CSS.blockElement]: true,
              [CSS.selected]: blocked,
            })}
            title={blocked ? tr("workspace.shape.menu.unlock") : tr("workspace.shape.menu.lock")}
            onClick={onToggleBlocking}
          >
            {blocked ? deprecatedIcon.lock : deprecatedIcon.unlock}
          </button>
        </div>
      )}

      {children}
    </>
  )
}

interface LayerItemProps {
  index?: number
  item: any
  selected: Set<string>
  objects: any
  sortable?: boolean
  filtered?: boolean
  depth?: number
  parentSize?: number
  componentChild?: boolean
  highlighted?: Set<string>
  style?: React.CSSProperties
  renderChildren?: boolean
}

export const LayerItem: React.FC<LayerItemProps> = React.memo(({
  index,
  item,
  selected,
  objects,
  sortable = false,
  filtered = false,
  depth = 0,
  parentSize,
  componentChild = false,
  highlighted,
  style,
  renderChildren = true,
}) => {
  const id = item.id
  const blocked = item.blocked
  const hidden = item.hidden

  const [dragDisabled, setDragDisabled] = useState(false)

  const scrollToMiddleRef = useRef(true)
  const expandedRef = useRef<any>(null)

  const expandedIdRef = useMemo(() => l.in(["expanded", id]), [id])
  const expandedValue = expandedIdRef.derive(refs.workspaceLocal)
  const expanded = expandedValue?.deref()

  const isSelected = selected.has(id)
  const isHighlighted = highlighted?.has(id) ?? false

  const container = cfh.frameShape(item) || cfh.groupShape(item)

  const readOnly = React.useContext(currentWorkspaceReadOnly)
  const parentBoard = cfh.frameShape(item) && item.parentId === uuid.zero

  const toggleCollapse = useCallback(
    (event: React.MouseEvent) => {
      dom.stopPropagation(event)
      if (expanded && kbd.shift(event)) {
        st.emit!(dwc.collapseAll())
      } else {
        st.emit!(dwc.toggleCollapse(id))
      }
    },
    [id, expanded]
  )

  const toggleBlocking = useCallback(
    (event: React.MouseEvent) => {
      dom.stopPropagation(event)
      if (blocked) {
        st.emit!(dw.updateShapeFlags([id], { blocked: false }))
      } else {
        st.emit!(dw.updateShapeFlags([id], { blocked: true }), dw.deselectShape(id))
      }
    },
    [id, blocked]
  )

  const toggleVisibility = useCallback(
    (event: React.MouseEvent) => {
      dom.stopPropagation(event)
      if (hidden) {
        st.emit!(dw.updateShapeFlags([id], { hidden: false }))
      } else {
        st.emit!(dw.updateShapeFlags([id], { hidden: true }))
      }
    },
    [id, hidden]
  )

  const selectShape = useCallback(
    (event: React.MouseEvent) => {
      dom.preventDefault(event)
      scrollToMiddleRef.current = false

      if (kbd.shift(event)) {
        if (filtered) {
          st.emit!(dw.shiftSelectShapes(id, objects))
        } else {
          st.emit!(dw.shiftSelectShapes(id))
        }
      } else if (kbd.mod(event)) {
        st.emit!(dw.selectShape(id, true))
      } else if (selected.size > 1) {
        st.emit!(dw.selectShape(id))
      } else {
        st.emit!(dw.selectShape(id))
      }
    },
    [id, filtered, objects, selected]
  )

  const onPointerEnter = useCallback(() => {
    sidebarHoverQueue.enter.add(id)
    sidebarHoverQueue.leave.delete(id)
    scheduleSidebarHoverFlush()
  }, [id])

  const onPointerLeave = useCallback(() => {
    sidebarHoverQueue.enter.delete(id)
    sidebarHoverQueue.leave.add(id)
    scheduleSidebarHoverFlush()
  }, [id])

  const onContextMenu = useCallback(
    (event: React.MouseEvent) => {
      dom.preventDefault(event)
      dom.stopPropagation(event)

      if (!readOnly) {
        const pos = dom.getClientPosition(event)
        st.emit!(dw.showShapeContextMenu({ position: pos, shape: item }))
      }
    },
    [item, readOnly]
  )

  const onDrag = useCallback(
    ({ id: dragId }: any) => {
      if (!selected.has(dragId)) {
        st.emit!(dw.selectShape(dragId))
      }
    },
    [selected]
  )

  const onDrop = useCallback(
    (side: string, _data: any) => {
      const single = selected.size === 1
      const same = single && selected.has(id)

      if (same) return

      const files = refs.files.deref()
      const shape = objects[id]

      let parentId: string
      if (side === "center") {
        parentId = id
      } else if (expanded && side === "bot" && shape.shapes && shape.shapes.length > 0) {
        parentId = id
      } else {
        parentId = cfh.getParentId(objects, id) || uuid.zero
      }

      const [validParentId] = ctn.findValidParentAndFrameIds(
        parentId,
        objects,
        Array.from(selected).map((sid) => objects[sid]),
        false,
        files
      )

      const parent = objects[validParentId]
      const currentIndex = d.indexOf(parent?.shapes, id)

      let toIndex: number | null
      if (side === "center") {
        toIndex = 0
      } else if (expanded && side === "bot" && shape.shapes && shape.shapes.length > 0) {
        toIndex = parent?.shapes?.length ?? 0
      } else if (currentIndex < 0) {
        toIndex = null
      } else if (side === "top") {
        toIndex = currentIndex + 1
      } else {
        toIndex = currentIndex
      }

      if (toIndex !== null) {
        st.emit!(dw.relocateSelectedShapes(validParentId, toIndex))
      }
    },
    [id, expanded, objects, selected]
  )

  const onHold = useCallback(() => {
    if (!expanded) {
      st.emit!(dwc.toggleCollapse(id))
    }
  }, [id, expanded])

  const zoomToSelected = useCallback(
    (event: React.MouseEvent) => {
      dom.stopPropagation(event)
      dom.preventDefault(event)
      st.emit!(dw.zoomToSelectedShape)
    },
    []
  )

  const dprops = hooks.useSortable({
    dataType: "penpot/layer",
    onDrop,
    onDrag,
    onHold,
    disabled: dragDisabled,
    detectCenter: container,
    data: { id: item.id, index: index, name: item.name },
    draggable: sortable && !readOnly && !ctn.hasAnyCopyParent(objects, item),
  })

  const ref = useRef<HTMLDivElement>(null)
  const currentDepth = depth + 1
  const isComponentTree = componentChild || ctk.instanceRoot(item) || ctk.instanceHead(item)

  const enableDrag = useCallback(() => setDragDisabled(false), [])
  const disableDrag = useCallback(() => setDragDisabled(true), [])

  // Lazy loading state
  const [childrenCount, setChildrenCount] = useState(0)
  const lazyRef = useRef<HTMLDivElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const chunkSize = 50

  // Scroll to selected effect
  useEffect(() => {
    const single = selected.size === 1
    const node = (ref as any).current
    const scrollNode = dom.getParentWithData(node, "scroll-container")
    const parentNode = dom.getParentAt(node, 2)
    const firstChildNode = dom.getFirstChild(parentNode)

    if (single && isSelected && scrollToMiddleRef.current) {
      ts.schedule(100, () => {
        if (node && scrollNode) {
          const scrollDistanceRatio = dom.getScrollDistanceRatio(node, scrollNode)
          const scrollBehavior = scrollDistanceRatio > 1 ? "instant" : "smooth"
          dom.scrollIntoViewIfNeeded!(firstChildNode, {
            block: "center",
            behavior: scrollBehavior as any,
            inline: "start"
          })
          scrollToMiddleRef.current = true
        }
      })
    }
  }, [isSelected, selected])

  // Setup lazy loading for expanded items
  useEffect(() => {
    const shapesVec = item.shapes || []
    const total = shapesVec.length

    if (expanded && total > 0) {
      // Find if any selected child is in the direct children
      let selectedChildRenderIdx: number | null = null
      if (total > chunkSize && selected.size > 0) {
        const shapesReversed = [...shapesVec].reverse()
        for (const selId of selected) {
          const idx = shapesReversed.indexOf(selId)
          if (idx >= 0) {
            selectedChildRenderIdx = idx
            break
          }
        }
      }

      const minCount = selectedChildRenderIdx !== null
        ? selectedChildRenderIdx + chunkSize
        : chunkSize

      const current = childrenCount
      const newCount = Math.min(total, Math.max(current, chunkSize, minCount))
      setChildrenCount(newCount)
    } else {
      setChildrenCount(0)
    }
  }, [expanded, item.shapes, selected, childrenCount])

  // Intersection observer for lazy loading
  useEffect(() => {
    const total = item.shapes?.length || 0
    const node = (ref as any).current
    const scrollNode = dom.getParentWithData(node, "scroll-container")
    const lazyNode = lazyRef.current

    // Disconnect previous observer
    if (observerRef.current) {
      observerRef.current.disconnect()
      observerRef.current = null
    }

    // Setup new observer if conditions are met
    if (expanded && childrenCount < total && scrollNode && lazyNode) {
      const cb = (entries: IntersectionObserverEntry[]) => {
        if (entries.length > 0 && (entries[0] as any).isIntersecting) {
          const current = childrenCount
          const nextCount = Math.min(total, current + chunkSize)
          setChildrenCount(nextCount)
        }
      }

      const observer = new IntersectionObserver(cb, { root: scrollNode as Element })
      observer.observe(lazyNode)
      observerRef.current = observer as any
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
        observerRef.current = null
      }
    }
  }, [childrenCount, expanded, item.shapes])

  const isDndOverCenter = dprops.over === "center"
  const isDndOverTop = dprops.over === "top"
  const isDndOverBot = dprops.over === "bot"

  return (
    <>
      <LayerItemInner
        ref={ref}
        item={item}
        depth={currentDepth}
        parentSize={parentSize}
        nameRef={ref}
        readOnly={readOnly}
        highlighted={isHighlighted}
        selected={isSelected}
        componentTree={isComponentTree}
        filtered={filtered}
        expanded={expanded}
        dndOver={isDndOverCenter}
        dndOverTop={isDndOverTop}
        dndOverBot={isDndOverBot}
        onSelectShape={selectShape}
        onContextMenu={onContextMenu}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onZoomToSelected={zoomToSelected}
        onToggleCollapse={toggleCollapse}
        onEnableDrag={enableDrag}
        onDisableDrag={disableDrag}
        onToggleVisibility={toggleVisibility}
        onToggleBlocking={toggleBlocking}
        style={style}
      />

      {renderChildren && item.shapes && expanded && (
        <div
          className={cssCase({
            [CSS.elementChildren]: true,
            [CSS.parentSelected]: isSelected,
            [CSS.stickyChildren]: parentBoard,
          })}
          data-testid={dm.str("children-", id)}
        >
          {Array.from(d.enumerate([...(item.shapes || [])].reverse().slice(0, childrenCount))).map(
            ([childIndex, childId]: [number, string]) => {
              const childItem = objects[childId]
              if (!childItem) return null

              return (
                <LayerItem
                  key={dm.str(childId)}
                  item={childItem}
                  highlighted={highlighted}
                  selected={selected}
                  index={childIndex}
                  objects={objects}
                  sortable={sortable}
                  depth={currentDepth}
                  parentSize={parentSize}
                  componentChild={isComponentTree}
                />
              )
            }
          )}

          {childrenCount < (item.shapes?.length || 0) && (
            <div ref={lazyRef} className={css(CSS.lazyLoadSentinel)} />
          )}
        </div>
      )}
    </>
  )
}, (prev, next) => {
  return !!prev.item && !!next.item && prev.item.id === next.item.id
})