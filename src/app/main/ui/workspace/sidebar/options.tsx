// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useCallback, useState, useMemo } from "react"
import * as d from "app/common/data"
import * as dm from "app.common.data.macros"
import * as cfh from "app.common.files.helpers"
import * as gsh from "app/common/geom/shapes"
import * as ctl from "app/common/types/shape/layout"
import * as dsh from "app/main/data/helpers"
import * as udw from "app/main/data/workspace"
import * as dwc from "app/main/data/workspace/common"
import * as refs from "app.main.refs"
import * as st from "app/main/store"
import { currentPermissions } from "app.main.ui.context"
import { TabSwitcher } from "app.main.ui.ds.layout.tab-switcher"
import * as hrs from "app/main.ui.inspect/right-sidebar"
import * as drawing from "app.main.ui.workspace.sidebar.options.drawing"
import { AlignOptions } from "app.main.ui.workspace.sidebar.options.menus.align"
import { BoolOptions } from "app.main.ui.workspace.sidebar.options.menus.bool"
import { ComponentMenu } from "app.main.ui.workspace.sidebar.options.menus.component"
import * as gridCell from "app.main.ui.workspace.sidebar.options.menus.grid-cell"
import { InteractionsMenu } from "app.main.ui.workspace.sidebar.options.menus.interactions"
import * as layoutContainer from "app/main/ui.workspace.sidebar.options.menus.layout-container"
import * as page from "app.main.ui.workspace.sidebar.options.page"
import * as bool from "app/main.ui.workspace.sidebar.options/shapes/bool"
import * as circle from "app/main.ui.workspace.sidebar.options/shapes/circle"
import * as frame from "app/main.ui.workspace.sidebar.options/shapes/frame"
import * as group from "app.main.ui.workspace.sidebar.options/shapes/group"
import * as multiple from "app.main.ui.workspace.sidebar.options/shapes/multiple"
import * as path from "app/main.ui.workspace.sidebar.options/shapes/path"
import * as rect from "app/main.ui.workspace.sidebar.options/shapes/rect"
import * as svgRaw from "app.main.ui.workspace.sidebar.options/shapes/svg-raw"
import * as text from "app/main/ui.workspace.sidebar.options/shapes/text"
import { tr } from "app.util.i18n"
import * as l from "okulary.core"

const CSS = {
  elementOptions: "element-options",
  designOptions: "design-options",
  toolWindow: "tool-window",
  optionsTabSwitcher: "options-tab-switcher",
  interactionOptions: "interaction-options",
  inspectOptions: "inspect-options",
  readOnly: "read-only",
}

function css(className: string, ..._rest: any[]): string {
  return className
}

// Single Shape Options
interface SingleShapeOptionsProps {
  shape: any
  pageId: string
  fileId: string
  libraries: any
  shapesWithChildren?: any[]
}

const SingleShapeOptions: React.FC<SingleShapeOptionsProps> = React.memo((props) => {
  const { shape, pageId, fileId, libraries, shapesWithChildren } = props

  const modifiers = refs.workspaceModifiers.deref()
  const shapeModifiers = modifiers?.[shape.id]?.modifiers
  const transformedShape = gsh.transformShape(shape, shapeModifiers)

  const propsToPass = {
    shape: transformedShape,
    fileId,
    pageId,
    libraries,
    shapesWithChildren,
  }

  switch (shape.type) {
    case "frame":
      return <frame.Options {...propsToPass} />
    case "group":
      return <group.Options {...propsToPass} />
    case "text":
      return <text.Options {...propsToPass} />
    case "rect":
      return <rect.Options {...propsToPass} />
    case "circle":
      return <circle.Options {...propsToPass} />
    case "path":
      return <path.Options {...propsToPass} />
    case "svg-raw":
      return <svgRaw.Options {...propsToPass} />
    case "bool":
      return <bool.Options {...propsToPass} />
    default:
      return null
  }
}, (prev, next) => prev.shape?.id === next.shape?.id && prev.shape?.type === next.shape?.type)

// Shape Options
interface ShapeOptionsProps {
  shapes: any[]
  shapesWithChildren: any[]
  selected: string[]
  pageId: string
  fileId: string
  libraries: any
}

const ShapeOptions: React.FC<ShapeOptionsProps> = React.memo(({ shapes, shapesWithChildren, selected, pageId, fileId, libraries }) => {
  if (selected.length === 1) {
    return (
      <SingleShapeOptions
        pageId={pageId}
        fileId={fileId}
        libraries={libraries}
        shape={shapes[0]}
        shapesWithChildren={shapesWithChildren}
      />
    )
  }

  return (
    <multiple.Options
      shapesWithChildren={shapesWithChildren}
      shapes={shapes}
      pageId={pageId}
      fileId={fileId}
      libraries={libraries}
    />
  )
}, (prev, next) => {
  return prev.selected === next.selected &&
         prev.shapes === next.shapes &&
         prev.pageId === next.pageId
})

// Specialized Panel
interface SpecializedPanelProps {
  panel: any
}

const SpecializedPanel: React.FC<SpecializedPanelProps> = (props) => {
  if (props.panel?.type === "component-swap") {
    return <ComponentMenu shapes={props.panel.shapes} isSwapOpened={true} />
  }
  return null
}

// Design Menu
interface DesignMenuProps {
  selected: string[]
  objects: any
  pageId: string
  fileId: string
  shapes: any[]
}

const DesignMenu: React.FC<DesignMenuProps> = React.memo(({ selected, objects, pageId, fileId, shapes }) => {
  const spPanel = refs.specializedPanel.deref()
  const drawing = refs.workspaceDrawing.deref()
  const edition = refs.selectedEdition.deref()
  const files = refs.files.deref()

  const libraries = useMemo(() => {
    return refs.selectLibraries(files, fileId)
  }, [files, fileId])

  const editGrid = useMemo(() => {
    return ctl.gridLayout(objects, edition)
  }, [objects, edition])

  const gridEdition = refs.workspaceGridEdition.deref()

  const selectedCells = useMemo(() => {
    if (!gridEdition?.[edition]?.selected) return []
    return gridEdition[edition].selected.map((id: string) =>
      dm.getIn(objects, [edition, "layout-grid-cells", id])
    ).filter(Boolean)
  }, [gridEdition, edition, objects])

  const [shapesWithChildren, setShapesWithChildren] = useState<any[] | null>(null)

  React.useEffect(() => {
    setShapesWithChildren(null)

    const result: any[] = []
    const queue = [...selected]
    const visited = new Set(selected)

    while (queue.length > 0) {
      const id = queue.shift()!
      const shape = objects[id]
      const children = shape?.shapes

      if (children && children.length > 0) {
        const newChildren = children.filter((cid: string) => !visited.has(cid))
        queue.push(...newChildren)
        visited.add(...newChildren)
      } else {
        result.push(shape)
      }
    }

    setShapesWithChildren(result)
  }, [selected, objects, shapes])

  const totalSelected = selected.length

  return (
    <div className={css(CSS.elementOptions, CSS.designOptions)}>
      <AlignOptions shapes={shapes} objects={objects} />

      <BoolOptions
        totalSelected={totalSelected}
        shapes={shapes}
        shapesWithChildren={shapesWithChildren || []}
      />

      {editGrid && selectedCells.length > 0 && (
        <gridCell.Options
          shape={objects[edition]}
          cells={selectedCells}
        />
      )}

      {editGrid && (
        <layoutContainer.GridLayoutEdition
          ids={[edition]}
          values={objects[edition]}
        />
      )}

      {spPanel && <SpecializedPanel panel={spPanel} />}

      {d.notEmpty(drawing) && (
        <drawing.DrawingOptions drawingState={drawing} />
      )}

      {totalSelected === 0 && <page.Options />}

      {totalSelected > 0 && (
        <ShapeOptions
          shapes={shapes}
          shapesWithChildren={shapesWithChildren || []}
          pageId={pageId}
          fileId={fileId}
          selected={selected}
          libraries={libraries}
        />
      )}
    </div>
  )
}, (prev, next) => {
  return prev.selected === next.selected &&
         prev.objects === next.objects &&
         prev.pageId === next.pageId
})

// Inspect Tab
interface InspectTabProps {
  objects: any
  shapes: any[]
  pageId: string
  fileId: string
  onChangeSection?: () => void
  onExpand?: () => void
}

const InspectTab: React.FC<InspectTabProps> = (props) => {
  const { objects, shapes, pageId, fileId, onChangeSection, onExpand } = props

  const frame = cfh.getFrame(objects, shapes[0])

  return (
    <hrs.RightSidebar
      frame={frame}
      from="workspace"
      pageId={pageId}
      fileId={fileId}
      objects={objects}
      selected={props.shapes}
      shapes={shapes}
      onChangeSection={onChangeSection}
      onExpand={onExpand}
    />
  )
}

const optionsTabs = [
  { label: tr("workspace.options.design"), id: "design" },
  { label: tr("workspace.options.prototype"), id: "prototype" },
  { label: tr("workspace.options.inspect"), id: "inspect" },
]

function onOptionTabChange(mode: string) {
  const modeKeyword = mode as "design" | "prototype" | "inspect"
  st.emit!(udw.setOptionsMode(modeKeyword))

  if (mode === "inspect") {
    st.emit!("interrupt", dwc.setWorkspaceReadOnly(true))
  } else {
    st.emit!("interrupt", dwc.setWorkspaceReadOnly(false))
  }
}

// Options Content
interface OptionsContentProps {
  objects: any
  selected: string[]
  pageId: string
  fileId: string
  section?: string
  onChangeSection?: () => void
  onExpand?: () => void
}

const OptionsContent: React.FC<OptionsContentProps> = (props) => {
  const { objects, selected, pageId, fileId, onChangeSection, onExpand } = props

  const permissions = React.useContext(currentPermissions)
  const optionsMode = refs.optionsModeGlobal.deref()

  const shapes = useMemo(() => {
    return Array.from(selected).map((id) => objects[id]).filter(Boolean)
  }, [selected, objects])

  return (
    <div className={css(CSS.toolWindow)}>
      {permissions?.canEdit ? (
        <>
          <TabSwitcher
            tabs={optionsTabs}
            onChange={onOptionTabChange}
            selected={optionsMode?.name || "design"}
            className={css(CSS.optionsTabSwitcher)}
          />

          {optionsMode === "prototype" && (
            <div className={css(CSS.elementOptions, CSS.interactionOptions)}>
              <InteractionsMenu shape={shapes[0]} />
            </div>
          )}

          {optionsMode === "inspect" && (
            <div className={css(CSS.elementOptions, CSS.inspectOptions)}>
              <InspectTab
                pageId={pageId}
                fileId={fileId}
                objects={objects}
                selected={selected}
                shapes={shapes}
                onChangeSection={onChangeSection}
                onExpand={onExpand}
              />
            </div>
          )}

          {optionsMode === "design" && (
            <DesignMenu
              selected={selected}
              objects={objects}
              pageId={pageId}
              fileId={fileId}
              shapes={shapes}
            />
          )}
        </>
      ) : (
        <div className={css(CSS.elementOptions, CSS.inspectOptions, CSS.readOnly)}>
          <InspectTab
            pageId={pageId}
            fileId={fileId}
            objects={objects}
            selected={selected}
            shapes={shapes}
            onChangeSection={onChangeSection}
            onExpand={onExpand}
          />
        </div>
      )}
    </div>
  )
}

// Make page objects ref
function makePageObjectsRef(fileId: string, pageId: string) {
  return l.derived(
    (state: any) => dsh.lookupPageObjects(state, fileId, pageId),
    st.state
  )
}

// Options Toolbox
interface OptionsToolboxProps {
  pageId: string
  fileId: string
  section?: string
  selected: string[]
  onChangeSection?: () => void
  onExpand?: () => void
}

export const OptionsToolbox: React.FC<OptionsToolboxProps> = React.memo(({ pageId, fileId, section, selected, onChangeSection, onExpand }) => {
  const objectsRef = useMemo(() => makePageObjectsRef(fileId, pageId), [fileId, pageId])
  const objects = objectsRef.deref()

  return (
    <OptionsContent
      objects={objects}
      selected={selected}
      fileId={fileId}
      pageId={pageId}
      section={section}
      onChangeSection={onChangeSection}
      onExpand={onExpand}
    />
  )
}, (prev, next) => {
  return prev.pageId === next.pageId &&
         prev.fileId === next.fileId &&
         prev.selected === next.selected
})