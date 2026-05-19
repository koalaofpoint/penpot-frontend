// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import * as d from "app.common.data"
import * as dm from "app.common.data.macros"
import * as cfh from "app.common.files.helpers"
import * as cfv from "app.common.files.variant"
import * as cpn from "app.common.path-names"
import * as ctk from "app.common.types.component"
import * as ctkl from "app.common.types.components-list"
import * as ctf from "app.common.types.file"
import * as ctv from "app.common.types.variant"
import * as uuid from "app.common.uuid"
import * as ev from "app.main.data.event"
import * as dsh from "app.main.data.helpers"
import * as modal from "app.main.data.modal"
import * as ntf from "app.main.data.notifications"
import * as dw from "app.main.data.workspace"
import * as dwl from "app.main.data.workspace.libraries"
import * as dwsp from "app.main.data.workspace.specialized-panel"
import * as dwv from "app.main.data.workspace.variants"
import * as refs from "app.main.refs"
import { store } from "app.main.store"
import { Dropdown } from "app.main.ui.components.dropdown"
import { RadioButton, RadioButtons } from "app.main.ui.components.radio-buttons"
import { ReorderHandler } from "app.main.ui.components.reorder-handler"
import { SearchBar } from "app.main.ui.components.search-bar"
import { Select } from "app.main.ui.components.select"
import { TitleBar } from "app.main.ui.components.title-bar"
import { ctx } from "app.main.ui.context"
import { Button } from "app.main.ui.ds.buttons.button"
import { IconButton } from "app.main.ui.ds.buttons.icon-button"
import { Combobox } from "app.main.ui.ds.controls.combobox"
import { Switch } from "app.main.ui.ds.controls.switch"
import * as i from "app.main.ui.ds.foundations.assets.icon"
import { InputWithMeta } from "app.main.ui.ds.product.input-with-meta"
import * as h from "app.main.ui.hooks"
import { cmm } from "app.main.ui.workspace.sidebar.assets.common"
import * as dbg from "app.util.debug"
import * as dom from "app.util.dom"
import { tr } from "app.util.i18n"
import * as tm from "app.util.timers"
import * as str from "cuerdas.core"
import * as stl from "app.main.style"

const refAnnotationsState = (l: any) =>
  l.derived("workspace-annotations", store.getState())

interface ComponentAnnotationProps {
  id: string
  shape: any
  component: any
  rerenderFn: () => void
}

const ComponentAnnotation: React.FC<ComponentAnnotationProps> = ({
  id,
  shape,
  component,
  rerenderFn
}) => {
  const mainInstance = !!shape.mainInstance
  const componentId = shape.componentId
  const annotation = component.annotation
  const shapeId = shape.id

  const [editing, setEditing] = useState(false)
  const [invalidText, setInvalidText] = useState(() => str.blank(annotation))
  const [size, setSize] = useState(() => count(annotation))
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const state = refs.annotationsState?.deref()
  const expanded = state?.expanded
  const createId = state?.idForCreate
  const creating = id === createId

  const adjustTextareaSize = useCallback(() => {
    if (textareaRef.current) {
      const text = dom.getValue(textareaRef.current)
      setInvalidText(str.blank(text))
      setSize(count(text))
      const parent = textareaRef.current.parentNode as HTMLElement
      if (parent) {
        parent.dataset.replicatedValue = text
      }
    }
  }, [])

  const onToggleExpand = useCallback(() => {
    store.emit(dw.setAnnotationsExpanded(!expanded))
  }, [expanded])

  const onDiscard = useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event)
    rerenderFn()
    if (textareaRef.current) {
      dom.setValue(textareaRef.current, annotation)
      setEditing(false)
      if (creating) {
        store.emit(dw.setAnnotationsIdForCreate(null))
      }
      adjustTextareaSize()
      rerenderFn()
    }
  }, [annotation, creating, adjustTextareaSize, rerenderFn])

  const onEdit = useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event)
    rerenderFn()
    if (mainInstance && textareaRef.current) {
      setEditing(true)
      dom.focus(textareaRef.current)
      rerenderFn()
    }
  }, [mainInstance, rerenderFn])

  const onSave = useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event)
    rerenderFn()
    if (textareaRef.current) {
      const text = dom.getValue(textareaRef.current)
      if (!str.blank(text)) {
        setEditing(false)
        store.emit(dw.updateComponentAnnotation(componentId, text))
        if (creating) {
          store.emit(dw.setAnnotationsIdForCreate(null))
        }
        rerenderFn()
      }
    }
  }, [componentId, creating, rerenderFn])

  const onDeleteAnnotation = useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event)
    const onAccept = () => {
      rerenderFn()
      store.emit(
        creating ? dw.setAnnotationsIdForCreate(null) : null,
        dw.updateComponentAnnotation(componentId, null),
        rerenderFn
      )
    }
    store.emit(modal.show({
      type: "confirm",
      title: tr("modals.delete-component-annotation.title"),
      message: tr("modals.delete-component-annotation.message"),
      acceptLabel: tr("ds.confirm-ok"),
      onAccept
    }))
  }, [componentId, creating, rerenderFn])

  useEffect(() => {
    if (textareaRef.current) {
      dom.setValue(textareaRef.current, annotation)
      adjustTextareaSize()
    }
    if (!creating && createId !== undefined) {
      store.emit(dw.setAnnotationsIdForCreate(null))
    }
    return () => {
      if (creating) {
        store.emit(dw.setAnnotationsIdForCreate(null))
      }
    }
  }, [shapeId, state, createId, creating, annotation, adjustTextareaSize])

  if (!creating && !annotation) return null

  return (
    <div
      className={stl.cssCase("annotation", {
        editing,
        creating
      })}
    >
      <div
        className={stl.cssCase("annotation-title", {
          expandable: !editing && !creating,
          expanded
        })}
        onClick={onToggleExpand}
      >
        {editing || creating ? (
          <span className={stl.css("annotation-title-name")}>
            {editing
              ? tr("workspace.options.component.edit-annotation")
              : tr("workspace.options.component.create-annotation")}
          </span>
        ) : (
          <>
            <i.ArrowDown
              className={stl.css("annotation-title-icon-arrow")}
              size="s"
            />
            <span className={stl.css("annotation-title-name")}>
              {tr("workspace.options.component.annotation")}
            </span>
          </>
        )}

        <div className={stl.css("annotation-title-actions")}>
          {mainInstance && expanded && (
            editing || creating ? (
              <>
                <div
                  title={creating ? tr("labels.create") : tr("labels.save")}
                  onClick={onSave}
                  className={stl.css("annotation-title-icon-action")}
                >
                  <i.Tick
                    className={stl.cssCase("annotation-title-icon-ok", { disabled: invalidText })}
                  />
                </div>
                <div
                  className={stl.css("annotation-title-icon-action")}
                  title={tr("labels.discard")}
                  onClick={onDiscard}
                >
                  <i.Close className={stl.css("annotation-title-icon-nok")} />
                </div>
              </>
            ) : (
              <>
                <div
                  className={stl.css("annotation-title-icon-action")}
                  title={tr("labels.edit")}
                  onClick={onEdit}
                >
                  <i.Curve className={stl.css("annotation-title-icon-ok")} />
                </div>
                <div
                  className={stl.css("annotation-title-icon-action")}
                  title={tr("labels.delete")}
                  onClick={onDeleteAnnotation}
                >
                  <i.Delete className={stl.css("annotation-title-icon-nok")} />
                </div>
              </>
            )
          )}
        </div>
      </div>

      <div className={stl.cssCase("annotation-body-hidden", !expanded)}>
        <div className={stl.css("annotation-body")}>
          <textarea
            ref={textareaRef}
            id="annotation-textarea"
            className={stl.css("annotation-textarea")}
            data-debug={annotation}
            autoFocus={editing || creating}
            maxLength={300}
            onInput={adjustTextareaSize}
            defaultValue={annotation}
            readOnly={!creating && !editing}
          />
        </div>
        {(editing || creating) && (
          <div className={stl.css("annotation-counter")}>
            {size}/300
          </div>
        )}
      </div>
    </div>
  )
}

function getVariantMalformedWarningMessage(malformedList: boolean[]): string | null {
  if (malformedList.length === 1 && malformedList[0] !== undefined) {
    return tr("workspace.options.component.variant.malformed.single.one")
  }
  if (malformedList.length > 0 && malformedList.every((v) => v !== undefined)) {
    return tr("workspace.options.component.variant.malformed.single.all")
  }
  if (malformedList.length > 0 && malformedList.some((v) => v !== undefined)) {
    return tr("workspace.options.component.variant.malformed.single.some")
  }
  return null
}

function getVariantDuplicatedWarningMessage(duplicatedList: boolean[]): string | null {
  if (duplicatedList.length === 1 && duplicatedList[0] !== undefined) {
    return tr("workspace.options.component.variant.duplicated.single.one")
  }
  if (duplicatedList.length > 0 && duplicatedList.every((v) => v !== undefined)) {
    return tr("workspace.options.component.variant.duplicated.single.all")
  }
  if (duplicatedList.length > 0 && duplicatedList.some((v) => v !== undefined)) {
    return tr("workspace.options.component.variant.duplicated.single.some")
  }
  return null
}

function getComponentsWithDuplicatedVariantPropsAndValues(components: any[]): any[] {
  const duplicatedProps = components
    .map((c) => c.variantProperties)
    .reduce((acc: Record<string, number>, props) => {
      acc[props] = (acc[props] || 0) + 1
      return acc
    }, {})
  const duplicatedPropsSet = new Set(
    Object.entries(duplicatedProps)
      .filter(([_, count]) => count > 1)
      .map(([prop]) => prop)
  )
  return components.filter((c) => duplicatedPropsSet.has(c.variantProperties))
}

function getMainIdsWithDuplicatedVariantPropsAndValues(components: any[]): string[] {
  return getComponentsWithDuplicatedVariantPropsAndValues(components).map(
    (c) => c.mainInstanceId
  )
}

function getVariantOptions(propName: string, propVals: any[]): Array<{ id: string, label: string }> {
  const prop = propVals.find((p) => p.name === propName)
  if (!prop) return []
  return prop.value.map((val: string) => ({
    id: val,
    label: str.blank(val) ? `(${tr("labels.empty")})` : val
  }))
}

interface ComponentVariantPropertyProps {
  pos: number
  prop: any
  options: Array<{ id: string, label: string }>
  onPropNameBlur: (event: React.FocusEvent) => void
  onPropValueChange: (value: string) => void
  onReorder?: (fromPos: number, toPos: number) => void
}

const ComponentVariantProperty: React.FC<ComponentVariantPropertyProps> = ({
  pos,
  prop,
  options,
  onPropNameBlur,
  onPropValueChange,
  onReorder
}) => {
  const onDrop = useCallback(
    (relativePos: string, data: any) => {
      const fromPos = data.fromPos
      const toSpaceBetweenPos = relativePos === "bot" ? pos + 1 : pos
      onReorder?.(fromPos, toSpaceBetweenPos)
    },
    [pos, onReorder]
  )

  const onPropValueChangeHandler = useCallback(
    (value: string) => {
      onPropValueChange(value)
    },
    [onPropValueChange]
  )

  const [dprops, dref] = h.useSortable({
    dataType: "penpot/variant-property",
    onDrop,
    draggable: true,
    data: { fromPos: pos }
  })

  return (
    <div
      className={stl.cssCase("variant-property", {
        "dnd-over-top": dprops.over === "top",
        "dnd-over-bot": dprops.over === "bot"
      })}
    >
      {onReorder && <ReorderHandler ref={dref as any} />}

      <div className={stl.css("variant-property-container")}>
        <div className={stl.css("variant-property-name-wrapper")}>
          <InputWithMeta
            value={prop.name}
            isEditing={(prop as any).meta?.editing}
            maxLength={ctv.propertyMaxLength}
            data-position={pos}
            onBlur={onPropNameBlur}
          />
        </div>

        <div className={stl.css("variant-property-value-wrapper")}>
          <Combobox
            id={`variant-prop-${pos}`}
            placeholder={
              prop.value === false ? tr("settings.multiple") : "--"
            }
            defaultSelected={prop.value === false ? "" : prop.value}
            options={options}
            emptyToEnd
            maxLength={ctv.propertyMaxLength}
            onChange={onPropValueChangeHandler}
          />
        </div>
      </div>
    </div>
  )
}

interface ComponentVariantProps {
  components: any[]
  shapes: any[]
  data: any
}

const ComponentVariant: React.FC<ComponentVariantProps> = ({
  components,
  shapes,
  data
}) => {
  const component = components[0]
  const variantId = component.variantId

  const page = dsh.getPage(data, component.mainInstancePage)
  const objects = page?.objects

  const propsList = components.map((c) => c.variantProperties)
  const componentIds = useMemo(() => components.map((c) => c.id), [components])
  const properties =
    componentIds.length > 1
      ? ctv.compareProperties(propsList, false)
      : propsList[0]

  const malformedList = shapes.map((s) => s.variantError)
  const malformedMsg = getVariantMalformedWarningMessage(malformedList)

  const duplicatedIds = new Set(
    getMainIdsWithDuplicatedVariantPropsAndValues(
      cfv.findVariantComponents(data, objects, variantId)
    )
  )
  const duplicatedList = components.map((c) => duplicatedIds.has(c.mainInstanceId))
  const duplicatedMsg = getVariantDuplicatedWarningMessage(duplicatedList)

  const propVals = useMemo(
    () => cfv.extractPropertiesValues(data, objects, variantId),
    [data, objects, variantId]
  )

  const getOptions = useCallback(
    (propName: string) => getVariantOptions(propName, propVals),
    [propVals]
  )

  const updatePropertyValue = useCallback(
    (pos: number, value: string) => {
      const trimmedValue = d.nilv(str.trim(value), "")
      componentIds.forEach((id) => {
        store.emit(
          ev.event({ name: "variant-edit-property-value", origin: "workspace:combo-design-tab" }),
          dwv.updatePropertyValue(id, pos, trimmedValue)
        )
        store.emit(dwv.updateError(id))
      })
    },
    [componentIds]
  )

  const updatePropertyName = useCallback(
    (event: React.FocusEvent) => {
      const value = str.trim(dom.getTargetVal(event))
      const target = dom.getCurrentTarget(event)
      const pos = parseInt(dom.getData(target, "position"), 10)
      if (value) {
        store.emit(
          dwv.updatePropertyName(variantId, pos, value, { trigger: "workspace:design-tab-variant" })
        )
      }
    },
    [variantId]
  )

  const reorderProperties = useCallback(
    (fromPos: number, toSpaceBetweenPos: number) => {
      store.emit(dwv.reorderVariantPoperties(variantId, fromPos, toSpaceBetweenPos))
    },
    [variantId]
  )

  return (
    <>
      <h.SortableContainer>
        <div className={stl.css("variant-property-list")}>
          {properties.map((prop: any, index: number) => (
            <ComponentVariantProperty
              key={`${variantId}-${index}`}
              pos={index}
              prop={prop}
              options={getOptions(prop.name)}
              onPropNameBlur={updatePropertyName}
              onPropValueChange={(value) => updatePropertyValue(index, value)}
              onReorder={reorderProperties}
            />
          ))}
        </div>
      </h.SortableContainer>

      {malformedMsg ? (
        <div className={stl.css("variant-warning")}>
          <i.MsgNeutral className={stl.css("variant-warning-darken")} />
          <div className={stl.css("variant-warning-highlight")}>
            {malformedMsg} {tr("workspace.options.component.variant.malformed.structure.title")}
          </div>
          <div className={stl.css("variant-warning-darken")}>
            {tr("workspace.options.component.variant.malformed.structure.example")}
          </div>
        </div>
      ) : duplicatedMsg ? (
        <div className={stl.css("variant-warning")}>
          <i.MsgNeutral className={stl.css("variant-warning-darken")} />
          <div className={stl.css("variant-warning-highlight")}>
            {duplicatedMsg}
          </div>
        </div>
      ) : null}
    </>
  )
}

interface ComponentVariantCopyProps {
  components: any[]
  shapes: any[]
  componentFileData: any
  currentFileId: string
}

const ComponentVariantCopy: React.FC<ComponentVariantCopyProps> = ({
  components,
  shapes,
  componentFileData,
  currentFileId
}) => {
  const component = components[0]
  const shape = shapes[0]
  const properties = components.map((c) => c.variantProperties)
  const propsFirst = component.variantProperties
  const variantId = component.variantId

  const componentPageObjects = dsh.getPage(componentFileData, component.mainInstancePage)?.objects
  const variantComps = useMemo(
    () => cfv.findVariantComponents(componentFileData, componentPageObjects, variantId),
    [componentFileData, componentPageObjects, variantId]
  )

  const duplicatedComps = useMemo(
    () => getComponentsWithDuplicatedVariantPropsAndValues(variantComps),
    [variantComps]
  )

  const malformedComps = useMemo(
    () =>
      variantComps.filter((vc: any) => {
        const mainInst = componentPageObjects[vc.mainInstanceId]
        return mainInst?.variantError
      }),
    [variantComps, componentPageObjects]
  )

  const propVals = useMemo(
    () => cfv.extractPropertiesValues(componentFileData, componentPageObjects, variantId),
    [componentFileData, componentPageObjects, variantId]
  )

  const getOptions = useCallback(
    (propName: string) => getVariantOptions(propName, propVals),
    [propVals]
  )

  const selectDuplicatedComps = useCallback(() => {
    const ids = duplicatedComps.map((c: any) => c.id)
    if (currentFileId === shape.componentFile) {
      store.emit(dwl.goToLocalComponent({ id: ids[0], additionalIds: ids.slice(1) }))
    } else {
      store.emit(dwl.goToComponentFile(shape.componentFile, duplicatedComps[0], false))
    }
  }, [currentFileId, shape, duplicatedComps])

  const selectMalformedComps = useCallback(() => {
    const ids = malformedComps.map((c: any) => c.id)
    if (currentFileId === shape.componentFile) {
      store.emit(dwl.goToLocalComponent({ id: ids[0], additionalIds: ids.slice(1) }))
    } else {
      store.emit(dwl.goToComponentFile(shape.componentFile, malformedComps[0], false))
    }
  }, [currentFileId, shape, malformedComps])

  const [key, setKey] = useState(uuid.next())
  const mixedLabel = tr("settings.multiple")

  const switchComponent = useCallback(
    (pos: number, val: string) => {
      if (val === mixedLabel) {
        setKey(uuid.next())
      } else {
        const errorMsg =
          shapes.length > 1
            ? tr("workspace.component.switch.loop-error-multi")
            : tr("workspace.component.swap.loop-error")

        const mdata = {
          onError: () => {
            setKey(uuid.next())
            store.emit(ntf.warn(errorMsg))
          }
        }
        const params = { shapes, pos, val }
        store.emit(dwv.variantsSwitch(withMeta(params, mdata)))
      }
    },
    [shapes, mixedLabel]
  )

  const switchComponentToggle = useCallback(
    (pos: number, booleanPair: any, val: string) => {
      const invertedBooleanPair = d.invertMap(booleanPair)
      const value = invertedBooleanPair[val]
      switchComponent(pos, value)
    },
    [switchComponent]
  )

  return (
    <>
      <div className={stl.css("variant-property-list")}>
        {propsFirst.map((prop: any, pos: number) => {
          const mixedValue = !properties.every(
            (p) => p[pos]?.value === properties[0][pos]?.value
          )
          const options = getOptions(prop.name)
          const booleanPair = ctv.findBooleanPair(options.map((o: any) => o.id))
          const opts = mixedValue ? [...options, { id: mixedLabel, label: mixedLabel, dimmed: true }] : options

          return (
            <div
              key={`${pos}-${mixedValue}`}
              className={stl.css("variant-property-container")}
            >
              <div
                className={stl.css("variant-property-name-wrapper")}
                title={prop.name}
              >
                <div className={stl.css("variant-property-name")}>{prop.name}</div>
              </div>

              {booleanPair ? (
                <div className={stl.css("variant-property-value-switch-wrapper")}>
                  <Switch
                    defaultChecked={mixedValue ? undefined : get(booleanPair, properties[0][pos]?.value)}
                    onChange={(val) => switchComponentToggle(pos, booleanPair, val)}
                    key={`${properties[0][pos]?.value}-${key}`}
                  />
                </div>
              ) : (
                <div className={stl.css("variant-property-value-wrapper")}>
                  <Select
                    defaultSelected={mixedValue ? mixedLabel : properties[0][pos]?.value}
                    options={opts}
                    emptyToEnd
                    onChange={(val) => switchComponent(pos, val)}
                    key={`${properties[0][pos]?.value}-${key}`}
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>

      {malformedComps.length > 0 && (
        <div className={stl.css("variant-warning")}>
          <i.MsgNeutral className={stl.css("variant-warning-darken")} />
          <div className={stl.css("variant-warning-highlight")}>
            {tr("workspace.options.component.variant.malformed.copy")}
          </div>
          <button
            className={stl.css("variant-warning-button")}
            onClick={selectMalformedComps}
          >
            {tr("workspace.options.component.variant.malformed.locate")}
          </button>
        </div>
      )}

      {duplicatedComps.length > 0 && (
        <div className={stl.css("variant-warning")}>
          <i.MsgNeutral className={stl.css("variant-warning-darken")} />
          <div className={stl.css("variant-warning-highlight")}>
            {tr("workspace.options.component.variant.duplicated.copy.title")}
          </div>
          <button
            className={stl.css("variant-warning-button")}
            onClick={selectDuplicatedComps}
          >
            {tr("workspace.options.component.variant.duplicated.copy.locate")}
          </button>
        </div>
      )}
    </>
  )
}

interface ComponentSwapItemProps {
  item: any
  loop: boolean
  shapes: any[]
  fileId: string
  rootShape: any
  container: any
  componentId: string
  isSearch: boolean
  listingThumbs: boolean
  numVariants: number
}

const ComponentSwapItem: React.FC<ComponentSwapItemProps> = ({
  item,
  loop,
  shapes,
  fileId,
  rootShape,
  container,
  componentId,
  isSearch,
  listingThumbs,
  numVariants
}) => {
  const onSelect = useCallback(() => {
    if (loop) return
    store.emit(
      dwl.componentMultiSwap(shapes, fileId, item.id),
      dwsp.clearSpecializedPanel()
    )
  }, [shapes, fileId, item.id, loop])

  const itemRef = useRef<HTMLButtonElement>(null)
  const visible = h.useVisible(itemRef, { once: true })

  const name = isSearch ? item.fullName : item.name

  return (
    <button
      ref={itemRef}
      key={`swap-item-${item.id}`}
      className={stl.cssCase("swap-item-list", { "swap-item-grid": listingThumbs })}
      onClick={onSelect}
      disabled={loop}
    >
      {visible && (
        <cmm.ComponentItemThumbnail
          fileId={item.fileId}
          className={stl.css("swap-item-thumbnail")}
          rootShape={rootShape}
          component={item}
          container={container}
        />
      )}
      <span
        title={name}
        className={stl.css("swap-item-name")}
      >
        {name}
      </span>
      {ctk.isVariant(item) && (
        <span
          className={stl.css("swap-item-variant-icon")}
          title={tr("workspace.assets.components.num-variants", numVariants)}
        >
          <i.Variant size="s" />
        </span>
      )}
    </button>
  )
}

interface ComponentSwapGroupTitleProps {
  item: { name: string }
  onEnterGroup: (name: string) => void
}

const ComponentSwapGroupTitle: React.FC<ComponentSwapGroupTitleProps> = ({
  item,
  onEnterGroup
}) => {
  const groupName = item.name
  const onGroupClick = () => onEnterGroup(groupName)

  return (
    <div
      className={stl.css("swap-group")}
      onClick={onGroupClick}
      title={groupName}
    >
      <span className={stl.css("swap-group-name")}>
        {cpn.lastPath(groupName)}
      </span>
      <i.ArrowRight className={stl.css("swap-group-icon")} variant="ghost" size="s" />
    </div>
  )
}

function findCommonPath(components: any[]): string[] {
  const paths = components.map((c) => cpn.splitPath(c.path))
  return findCommonPathRecursive(paths, [], 0)
}

function findCommonPathRecursive(paths: string[][], path: string[], n: number): string[] {
  const current = paths[0]?.[n]
  if (!current || !paths.every((p) => p[n] === current)) {
    return path
  }
  return findCommonPathRecursive(paths, [...path, current], n + 1)
}

function sameComponentFile(shapeA: any, shapeB: any): boolean {
  return shapeA.componentFile === shapeB.componentFile
}

function sameComponent(shapeA: any, shapeB: any): boolean {
  return shapeA.componentId === shapeB.componentId
}

interface ComponentSwapProps {
  shapes: any[]
}

const ComponentSwap: React.FC<ComponentSwapProps> = ({ shapes }) => {
  const single = shapes.length === 1
  const shape = shapes[0]
  const currentFileId = ctx.currentFileId

  const libraries = refs.libraries.deref()
  const objects = refs.workspacePageObjects.deref()

  const everySameFile = shapes.every((s) => sameComponentFile(shape, s))

  const componentId = shapes.every((s) => sameComponent(shape, s))
    ? shape.componentId
    : null

  const fileId = everySameFile ? shape.componentFile : currentFileId

  const components = shapes.map((s) =>
    ctf.getComponent(libraries, s.componentFile, s.componentId)
  )

  const path = single
    ? components[0]?.path
    : cpn.joinPath(
        everySameFile ? "" : findCommonPath(components)
      )

  const [filters, setFilters] = useState({
    term: "",
    fileId,
    path: path || "",
    listingThumbs: false
  })

  const search = !str.blank(filters.term)

  const currentLibraryId = libraries.hasOwnProperty(filters.fileId)
    ? filters.fileId
    : currentFileId

  const currentLibName =
    currentLibraryId === currentFileId
      ? str.upper(tr("workspace.assets.local-library"))
      : dm.getIn(libraries, [currentLibraryId, "name"])

  const currentLibData = useMemo(
    () => dm.getIn(libraries, [currentLibraryId, "data"]),
    [libraries, currentLibraryId]
  )

  const currentLibCounts = useMemo(() => {
    const seq = ctkl.componentsSeq(currentLibData)
    const grouped = d.groupBy(seq, "variantId")
    return d.mapVals(grouped, (arr) => arr.length)
  }, [currentLibData])

  const libraryComponents = useMemo(() => {
    const comps = currentLibData?.components
    if (!comps) return []
    return Object.values(comps)
      .filter((c: any) => !c.deleted)
      .filter((c: any) => !cfv.isSecondaryVariant(c, currentLibData))
      .map((c: any) => ({
        ...c,
        fullName: cpn.mergePathItemWithDot(c.path, c.name)
      }))
  }, [currentLibData])

  const countVariants = (component: any) => currentLibCounts[component.variantId]

  const getSubgroups = (path: string): string[] => {
    const splitPath = cpn.splitPath(path)
    return splitPath.reduce(
      (acc, dir, idx) => [...acc, idx === 0 ? dir : `${acc[idx - 1]} / ${dir}`],
      [] as string[]
    )
  }

  const xform = (arr: any[]) =>
    arr
      .map((c) => c.path)
      .mapcat(getSubgroups)
      .filter((s) => !str.empty(s))
      .filter((s) => s !== null)
      .distinct()
      .filter((p) => cpn.butlastPath(p) === filters.path)

  const groups = search
    ? []
    : sort(
        sequence(xform, libraryComponents).map((name) => ({ name }))
      )

  const filteredComponents = search
    ? libraryComponents.filter((c: any) =>
        str.includes(str.lower(c.fullName), str.lower(filters.term))
      )
    : libraryComponents.filter((c: any) => c.path === filters.path)

  const items = search || filters.listingThumbs
    ? sortBy("fullName", filteredComponents)
    : concat(groups, filteredComponents)

  const findParentComponents = useCallback(
    (shape: any) =>
      cfh.getParents(objects, shape.id)
        .map((p) => p.componentId)
        .filter((id) => id !== undefined),
    [objects]
  )

  const parentComponents = shapes.flatMap(findParentComponents)

  const librariesOptions = Object.values(libraries).map((lib: any) => ({
    value: lib.id,
    label: lib.name
  }))

  const onLibraryChange = useCallback((id: string) => {
    setFilters((f) => ({ ...f, fileId: id, term: "", path: "" }))
  }, [])

  const onSearchTermChange = useCallback((term: string) => {
    setFilters((f) => ({ ...f, term }))
  }, [])

  const onSearchClearClick = useCallback(() => {
    setFilters((f) => ({ ...f, term: "" }))
  }, [])

  const onGoBack = useCallback(() => {
    setFilters((f) => ({ ...f, path: cpn.butlastPath(f.path) }))
  }, [])

  const onEnterGroup = useCallback((groupPath: string) => {
    setFilters((f) => ({ ...f, path: groupPath }))
  }, [])

  const toggleListStyle = useCallback((style: string) => {
    setFilters((f) => ({ ...f, listingThumbs: style === "grid" }))
  }, [])

  const filterPathWithDots = cpn.joinPathWithDot(cpn.splitPath(filters.path))

  return (
    <div className={stl.css("swap")}>
      <div className={stl.css("swap-title")}>
        {tr("workspace.options.component.swap")}
      </div>
      <div className={stl.css("swap-content")}>
        <div className={stl.css("swap-filters")}>
          <SearchBar
            id="swap-component-search-filter"
            iconId={i.search}
            value={filters.term}
            placeholder={`${tr("labels.search")} ${dm.getIn(libraries, [currentLibraryId, "name"])}`}
            onChange={onSearchTermChange}
            onClear={onSearchClearClick}
          />
          <Select
            defaultValue={currentLibraryId}
            options={librariesOptions}
            onChange={onLibraryChange}
          />
        </div>

        <div className={stl.css("swap-library")}>
          <div className={stl.css("swap-library-title")}>
            <div className={stl.css("swap-library-name")}>{currentLibName}</div>
            <RadioButtons
              selected={filters.listingThumbs ? "grid" : "list"}
              onChange={toggleListStyle}
              name="swap-listing-style"
            >
              <RadioButton icon={i.viewAsList} value="list" id="swap-opt-list" />
              <RadioButton icon={i.flexGrid} value="grid" id="swap-opt-grid" />
            </RadioButtons>
          </div>

          {!search && !str.empty(filters.path) && (
            <button
              className={stl.css("swap-library-back")}
              onClick={onGoBack}
              title={filterPathWithDots}
            >
              <i.ArrowLeft size="s" />
              <span className={stl.css("swap-library-back-name")}>
                {filterPathWithDots}
              </span>
            </button>
          )}

          {items.length === 0 && (
            <div className={stl.css("swap-library-empty")}>
              {tr("workspace.options.component.swap.empty")}
            </div>
          )}

          {filters.listingThumbs && groups.length > 0 && (
            <div>
              {groups.map((group) => (
                <ComponentSwapGroupTitle
                  key={group.name}
                  item={group}
                  onEnterGroup={onEnterGroup}
                />
              ))}
            </div>
          )}

          <div
            className={stl.cssCase("swap-library-grid", { "swap-library-list": !filters.listingThumbs })}
          >
            {items.map((item) =>
              item.id ? (() => {
                const data = dm.getIn(libraries, [currentLibraryId, "data"])
                const container = ctf.getComponentPage(data, item)
                const rootShape = ctf.getComponentRoot(data, item)
                const childrenWithSelf = cfh.getChildrenWithSelf(container.objects, rootShape.id)
                const componentIds = new Set(childrenWithSelf.map((c) => c.componentId).filter(Boolean))
                const loop = parentComponents.some((id) => componentIds.has(id))

                return (
                  <ComponentSwapItem
                    key={item.id}
                    item={item}
                    loop={loop}
                    shapes={shapes}
                    fileId={currentLibraryId}
                    rootShape={rootShape}
                    container={container}
                    componentId={componentId}
                    isSearch={search}
                    listingThumbs={filters.listingThumbs}
                    numVariants={countVariants(item)}
                  />
                )
              })() : (
                <ComponentSwapGroupTitle
                  key={item.name}
                  item={item}
                  onEnterGroup={onEnterGroup}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

interface ComponentPillProps {
  icon: any
  text: string
  subtext?: string
  menuEntries?: Array<{ title?: string, action: () => void }>
  disabled?: boolean
  onClick: () => void
}

const ComponentPill: React.FC<ComponentPillProps> = ({
  icon,
  text,
  subtext,
  menuEntries,
  disabled,
  onClick
}) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuEntriesExist = menuEntries && menuEntries.length > 0

  const onMenuClick = useCallback((event: React.MouseEvent) => {
    dom.preventDefault(event)
    dom.stopPropagation(event)
    setMenuOpen((v) => !v)
  }, [])

  const onMenuClose = useCallback(() => {
    setMenuOpen(false)
  }, [])

  const doAction = (action: () => void, event: React.MouseEvent) => {
    dom.stopPropagation(event)
    action()
    onMenuClose()
  }

  return (
    <div className={stl.css("pill")}>
      <button
        className={stl.cssCase("pill-btn", { "with-menu": menuEntriesExist })}
        data-testid="component-pill-button"
        onClick={onClick}
        disabled={disabled}
      >
        <div className={stl.css("pill-btn-icon")}>
          {icon && <i size="s" iconId={icon} />}
        </div>
        <div className={stl.css("pill-btn-name")}>
          <div className={stl.css("pill-btn-text")}>{text}</div>
          {subtext && <div className={stl.css("pill-btn-subtext")}>{subtext}</div>}
        </div>
      </button>

      {menuEntriesExist && (
        <div className={stl.css("pill-actions")}>
          <button
            className={stl.cssCase("pill-actions-btn", { selected: menuOpen })}
            onClick={onMenuClick}
          >
            <i iconId={i.menu} />
          </button>

          <Dropdown show={menuOpen} onClose={onMenuClose}>
            <ul className={stl.cssCase("pill-actions-dropdown", { extended: !!subtext })}>
              {menuEntries.map(({ title, action }) =>
                title && (
                  <li
                    key={title}
                    className={stl.css("pill-actions-dropdown-item")}
                    onClick={(e) => doAction(action, e)}
                  >
                    <span>{title}</span>
                  </li>
                )
              )}
            </ul>
          </Dropdown>
        </div>
      )}
    </div>
  )
}

interface ComponentMenuProps {
  shapes: any[]
  isSwapOpened: boolean
}

const ComponentMenu: React.FC<ComponentMenuProps> = ({ shapes, isSwapOpened }) => {
  const currentFileId = ctx.currentFileId
  const libraries = refs.files.deref()
  const currentFile = libraries?.[currentFileId]

  const [state, setState] = useState(() => ({
    showContent: true,
    menuOpen: false,
    render: 0
  }))
  const open = state.showContent

  const filteredShapes = shapes.filter(ctk.instanceHead)
  const multi = filteredShapes.length > 1
  const copies = filteredShapes.filter(ctk.inComponentCopy)
  const canSwap = copies.length > 0

  const allMain = filteredShapes.every(ctk.mainInstance)
  const anyVariant = filteredShapes.some(ctk.isVariant)

  const components = filteredShapes.map((s) =>
    ctf.resolveComponent(s, currentFile, libraries, { includeDeleted: true })
  )
  const sameVariant = ctv.sameVariant(components)

  const shape = filteredShapes[0]
  const id = shape?.id
  const shapeName = shape?.name

  const component = components[0]
  const data = dm.getIn(libraries, [shape.componentFile, "data"])
  const isVariant = ctk.isVariant(component)
  const mainInstance = ctk.mainInstance(shape)

  const toggleContent = useCallback(() => {
    setState((s) => ({ ...s, showContent: !s.showContent }))
  }, [])

  const onClickVariantTitleHelp = useCallback(() => {
    store.emit(modal.show({ type: "variants-help-modal" }))
    modal.allowClickOutside()
  }, [])

  const onComponentBack = useCallback(() => {
    store.emit(dwsp.interrupt())
  }, [])

  const openComponentPanel = useCallback(() => {
    if (canSwap) {
      store.emit(dwsp.openSpecializedPanel("component-swap"))
      tm.scheduleOnIdle(() => {
        const el = dom.getElement("swap-component-search-filter")
        if (el) dom.focus(el)
      })
    }
  }, [canSwap])

  const transformIntoVariant = useCallback(() => {
    store.emit(dwv.transformInVariant(id))
  }, [id])

  const createVariant = useCallback(() => {
    store.emit(
      ev.event({ name: "add-new-variant", origin: "workspace:button-design-tab-variant" }),
      dwv.addNewVariant(id)
    )
  }, [id])

  const addNewProperty = useCallback(() => {
    store.emit(
      ev.event({ name: "add-new-property", origin: "workspace:button-design-tab-variant" }),
      dwv.addNewProperty(shape.variantId, { propertyValue: "Value 1", editing: true })
    )
  }, [shape])

  const onCombineAsVariants = useCallback(() => {
    store.emit(dwv.combineSelectedAsVariants({ trigger: "workspace:button-design-tab" }))
  }, [])

  const rerenderFn = useCallback(() => {
    setState((s) => ({ ...s, render: (s.render || 0) + 1 }))
  }, [])

  const menuEntries = cmm.generateComponentsMenuEntries(shapes, { forDesignTab: true })
  const path = cpn.joinPathWithDot(cpn.splitPath(component?.path))

  if (shapes.length === 0) return null

  return (
    <div className={stl.css("component-section")}>
      <div className={stl.css("component-title")}>
        {isSwapOpened ? (
          <button
            className={stl.css("component-title-swap")}
            onClick={onComponentBack}
          >
            <i.ArrowLeft size="s" />
            <span>{tr("workspace.options.component")}</span>
          </button>
        ) : (
          <>
            <TitleBar
              collapsable
              collapsed={!open}
              onCollapsed={toggleContent}
              title={tr("workspace.options.component")}
              className={stl.css("component-title-bar")}
              titleClass={stl.css("component-title-bar-title")}
            >
              <span className={stl.css("component-title-bar-type")}>
                {mainInstance
                  ? isVariant
                    ? tr("labels.variant")
                    : tr("workspace.options.component.main")
                  : tr("workspace.options.component.copy")}
              </span>
            </TitleBar>

            {isVariant && (
              <IconButton
                variant="ghost"
                ariaLabel={tr("workspace.options.component.variants-help-modal.title")}
                onClick={onClickVariantTitleHelp}
                icon={i.help}
              />
            )}

            {mainInstance && (
              <IconButton
                variant="ghost"
                ariaLabel={tr("workspace.shape.menu.add-variant")}
                onClick={isVariant ? createVariant : transformIntoVariant}
                icon={i.variant}
              />
            )}
          </>
        )}
      </div>

      {open && (
        <div className={stl.css("component-content")}>
          <div className={stl.css("component-pill")}>
            <ComponentPill
              icon={mainInstance ? (isVariant ? i.variant : i.component) : i.componentCopy}
              text={
                multi && !sameVariant
                  ? tr("settings.multiple")
                  : cpn.lastPath(shapeName)
              }
              subtext={
                canSwap && (!multi || sameVariant)
                  ? component?.deleted
                    ? tr("workspace.options.component.unlinked")
                    : cpn.mergePathItemWithDot(path, component?.name)
                  : undefined
              }
              onClick={openComponentPanel}
              disabled={isSwapOpened || !canSwap}
              menuEntries={menuEntries}
            />
            {isVariant && mainInstance && (
              <IconButton
                variant="ghost"
                ariaLabel={tr("workspace.shape.menu.add-variant-property")}
                onClick={addNewProperty}
                icon={i.add}
              />
            )}
          </div>

          {isSwapOpened && <ComponentSwap shapes={copies} />}

          {isVariant && !mainInstance && !component?.deleted && !isSwapOpened && (!multi || sameVariant) && (
            <ComponentVariantCopy
              currentFileId={currentFileId}
              components={components}
              shapes={shapes}
              componentFileData={data}
            />
          )}

          {isVariant && mainInstance && sameVariant && !isSwapOpened && (
            <ComponentVariant
              components={components}
              shapes={shapes}
              data={data}
            />
          )}

          {!isSwapOpened && !multi && (
            <ComponentAnnotation
              id={id}
              shape={shape}
              component={component}
              rerenderFn={rerenderFn}
            />
          )}

          {multi && allMain && !anyVariant && (
            <Button
              variant="secondary"
              type="button"
              className={stl.css("component-combine")}
              onClick={onCombineAsVariants}
            >
              {tr("workspace.shape.menu.combine-as-variants")}
            </Button>
          )}

          {dbg.enabled("display-touched") && (
            <div>:touched {JSON.stringify(shape.touched)}</div>
          )}
        </div>
      )}
    </div>
  )
}

function moveEmptyItemsToEnd<T>(v: T[]): T[] {
  return [...v.filter((item) => (item as any)?.length === 0), ...v.filter((item) => (item as any)?.length > 0)]
}

interface ComponentVariantMainPropertyProps {
  pos: number
  property: any
  isRemoveDisabled: boolean
  onRemove: (event: React.MouseEvent) => void
  onBlur: (event: React.FocusEvent) => void
  onReorder: (fromPos: number, toPos: number) => void
}

const ComponentVariantMainProperty: React.FC<ComponentVariantMainPropertyProps> = ({
  pos,
  property,
  isRemoveDisabled,
  onRemove,
  onBlur,
  onReorder
}) => {
  const values = property.value
    .map((v: any) => (v === "" ? "--" : v))
    .join(", ")

  const onDrop = useCallback(
    (relativePos: string, data: any) => {
      const fromPos = data.fromPos
      const toSpaceBetweenPos = relativePos === "bot" ? pos + 1 : pos
      onReorder(fromPos, toSpaceBetweenPos)
    },
    [pos, onReorder]
  )

  const [dprops, dref] = h.useSortable({
    dataType: "penpot/variant-main-property",
    onDrop,
    draggable: true,
    data: { fromPos: pos }
  })

  return (
    <div
      className={stl.cssCase("variant-property", {
        "dnd-over-top": dprops.over === "top",
        "dnd-over-bot": dprops.over === "bot"
      })}
    >
      {onReorder && <ReorderHandler ref={dref as any} />}

      <div className={stl.css("variant-property-row")}>
        <InputWithMeta
          value={property.name}
          data-position={pos}
          meta={values}
          isEditing={(property as any).meta?.editing}
          maxLength={ctv.propertyMaxLength}
          onBlur={onBlur}
        />
        <IconButton
          variant="ghost"
          icon={i.remove}
          data-position={pos}
          ariaLabel={
            isRemoveDisabled
              ? tr("workspace.shape.menu.remove-variant-property.last-property")
              : tr("workspace.shape.menu.remove-variant-property")
          }
          onClick={onRemove}
          disabled={isRemoveDisabled}
        />
      </div>
    </div>
  )
}

interface ComponentVariantMainProps {
  shapes: any[]
}

const ComponentVariantMain: React.FC<ComponentVariantMainProps> = ({ shapes }) => {
  const multi = shapes.length > 1

  const shape = shapes[0]
  const shapeName = shape?.name

  const libraries = refs.libraries.deref()
  const currentFileId = ctx.currentFileId
  const currentPageId = ctx.currentPageId
  const data = libraries?.[currentFileId]?.data

  const page = dsh.getPage(data, currentPageId)
  const objects = page?.objects

  const variants = shapes.map((s) => objects?.[s.id])
  const variantId = variants[0]?.variantId
  const variantComponents = cfv.findVariantComponents(data, objects, variantId)

  const malformedIds = variants
    .filter((v) => v?.variantError !== undefined)
    .map((v) => v.id)
  const malformed = d.notEmpty(malformedIds)

  const duplicatedIds = getMainIdsWithDuplicatedVariantPropsAndValues(variantComponents)
  const duplicated = d.notEmpty(duplicatedIds)

  const properties = useMemo(
    () => cfv.extractPropertiesValues(data, objects, shape.id),
    [data, objects, shape.id]
  )
  const singleProperty = properties.length === 1

  const [open, setOpen] = useState(true)

  const showInAssetsPanel = useCallback(() => {
    store.emit(dw.showComponentInAssets(variantComponents[0]?.componentId))
  }, [variantComponents])

  const createVariant = useCallback(
    (trigger: string) => {
      store.emit(
        ev.event({ name: "add-new-variant", origin: trigger }),
        dwv.addNewVariant(shape.id)
      )
    },
    [shape]
  )

  const addNewProperty = useCallback(
    (trigger: string) => {
      store.emit(
        ev.event({ name: "add-new-property", origin: trigger }),
        dwv.addNewProperty(variantId, { propertyValue: "Value 1", editing: true })
      )
    },
    [variantId]
  )

  const menuEntries = [
    { title: tr("workspace.shape.menu.show-in-assets"), action: showInAssetsPanel },
    { title: tr("workspace.shape.menu.add-variant"), action: () => createVariant("workspace:design-tab-menu-component") },
    { title: tr("workspace.shape.menu.add-variant-property"), action: () => addNewProperty("workspace:design-tab-menu-component") }
  ]

  const toggleContent = useCallback(() => setOpen((v) => !v), [])

  const onClickVariantTitleHelp = useCallback(() => {
    store.emit(modal.show({ type: "variants-help-modal" }))
    modal.allowClickOutside()
  }, [])

  const updatePropertyName = useCallback(
    (event: React.FocusEvent) => {
      const value = dom.getTargetVal(event)
      const target = dom.getCurrentTarget(event)
      const pos = parseInt(dom.getData(target, "position"), 10)
      if (value) {
        store.emit(
          dwv.updatePropertyName(variantId, pos, value, { trigger: "workspace:design-tab-component" })
        )
      }
    },
    [variantId]
  )

  const removeProperty = useCallback(
    (event: React.MouseEvent) => {
      const target = dom.getCurrentTarget(event)
      const pos = parseInt(dom.getData(target, "position"), 10)
      if (properties.length > 1) {
        store.emit(
          ev.event({ name: "variant-remove-property", origin: "workspace:button-design-tab" }),
          dwv.removeProperty(variantId, pos)
        )
      }
    },
    [variantId, properties.length]
  )

  const reorderProperties = useCallback(
    (fromPos: number, toSpaceBetweenPos: number) => {
      store.emit(dwv.reorderVariantPoperties(variantId, fromPos, toSpaceBetweenPos))
    },
    [variantId]
  )

  const selectShapesWithMalformed = useCallback(() => {
    store.emit(dw.selectShapes(d.orderedSet(...malformedIds)))
  }, [malformedIds])

  const selectShapesWithDuplicated = useCallback(() => {
    store.emit(dw.selectShapes(d.orderedSet(...duplicatedIds)))
  }, [duplicatedIds])

  if (shapes.length === 0) return null

  return (
    <div className={stl.css("component-section")}>
      <div className={stl.css("component-title")}>
        <TitleBar
          collapsable
          collapsed={!open}
          onCollapsed={toggleContent}
          title={tr("workspace.options.component")}
          className={stl.css("component-title-bar")}
          titleClass={stl.css("component-title-bar-title")}
        >
          <span className={stl.css("component-title-bar-type")}>
            {tr("workspace.options.component.main")}
          </span>
        </TitleBar>

        <IconButton
          variant="ghost"
          ariaLabel={tr("workspace.options.component.variants-help-modal.title")}
          onClick={onClickVariantTitleHelp}
          icon={i.help}
        />
        <IconButton
          variant="ghost"
          ariaLabel={tr("workspace.shape.menu.add-variant")}
          onClick={() => createVariant("workspace:button-design-tab-component")}
          icon={i.variant}
        />
      </div>

      {open && (
        <div className={stl.css("component-content")}>
          <div className={stl.css("component-pill")}>
            <ComponentPill
              icon={i.component}
              text={multi ? tr("settings.multiple") : cpn.lastPath(shapeName)}
              disabled
              menuEntries={menuEntries}
            />
            <IconButton
              variant="ghost"
              ariaLabel={tr("workspace.shape.menu.add-variant-property")}
              onClick={() => addNewProperty("workspace:button-design-tab-component")}
              icon={i.add}
            />
          </div>

          {!multi && (
            <h.SortableContainer>
              <div className={stl.css("variant-property-list")}>
                {properties.map((property: any, index: number) => (
                  <ComponentVariantMainProperty
                    key={`${shape.id}${index}`}
                    pos={index}
                    property={property}
                    isRemoveDisabled={singleProperty}
                    onRemove={removeProperty}
                    onBlur={updatePropertyName}
                    onReorder={reorderProperties}
                  />
                ))}
              </div>
            </h.SortableContainer>
          )}

          {malformed ? (
            <div className={stl.css("variant-warning")}>
              <i.MsgNeutral className={stl.css("variant-warning-darken")} />
              <div className={stl.css("variant-warning-highlight")}>
                {tr("workspace.options.component.variant.malformed.group.title")}
              </div>
              <button
                className={stl.css("variant-warning-button")}
                onClick={selectShapesWithMalformed}
              >
                {tr("workspace.options.component.variant.malformed.group.locate")}
              </button>
            </div>
          ) : duplicated ? (
            <div className={stl.css("variant-warning")}>
              <i.MsgNeutral className={stl.css("variant-warning-darken")} />
              <div className={stl.css("variant-warning-highlight")}>
                {tr("workspace.options.component.variant.duplicated.group.title")}
              </div>
              <button
                className={stl.css("variant-warning-button")}
                onClick={selectShapesWithDuplicated}
              >
                {tr("workspace.options.component.variant.duplicated.group.locate")}
              </button>
            </div>
          ) : null}
        </div>
      )}
    </div>
  )
}

// Helper functions
function count(s: string): number {
  return s?.length || 0
}

function get<T>(obj: Record<string, T>, key: string): T | undefined {
  return obj[key]
}

function sort<T>(arr: T[]): T[] {
  return [...arr].sort()
}

function sortBy<T>(key: keyof T, arr: T[]): T[] {
  return [...arr].sort((a, b) => {
    const aVal = a[key]
    const bVal = b[key]
    if (typeof aVal === "string" && typeof bVal === "string") {
      return aVal.localeCompare(bVal)
    }
    return aVal < bVal ? -1 : aVal > bVal ? 1 : 0
  })
}

function sequence<T>(xf: (arr: T[]) => T[], coll: T[]): T[] {
  return xf(coll)
}

function concat<T>(...arrs: T[][]): T[] {
  return arrs.flat()
}

function withMeta<T>(obj: T, meta: Record<string, any>): T & { meta?: Record<string, any> } {
  return { ...obj, meta }
}

interface SortedArray<T> extends Array<T> {
  sort(cmp?: (a: T, b: T) => number): SortedArray<T>
}