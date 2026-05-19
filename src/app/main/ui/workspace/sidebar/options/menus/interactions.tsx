// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import * as d from "app.common.data"
import * as cfh from "app.common.files.helpers"
import * as ctp from "app.common.types.page"
import * as ctt from "app.common.types.shape-tree"
import * as ctsi from "app.common.types.shape.interactions"
import * as uuid from "app.common.uuid"
import * as dcm from "app.main.data.common"
import * as dwi from "app.main.data.workspace.interactions"
import * as refs from "app.main.refs"
import { store } from "app.main.store"
import { RadioButton, RadioButtons } from "app.main.ui.components.radio-buttons"
import { Select } from "app.main.ui.components.select"
import { TitleBar } from "app.main.ui.components.title-bar"
import { IconButton } from "app.main.ui.ds.buttons.icon-button"
import { Checkbox } from "app.main.ui.ds.controls.checkbox"
import { Input } from "app.main.ui.ds.controls.input"
import { NumericInput } from "app.main.ui.ds.controls.numeric-input"
import * as i from "app.main.ui.ds.foundations.assets.icon"
import { EmptyState } from "app.main.ui.ds.product.empty-state"
import * as dom from "app.util.dom"
import { tr } from "app.util.i18n"
import * as kbd from "app.util.keyboard"
import * as str from "cuerdas.core"
import * as stl from "app.main.style"

function eventTypeNames(): Record<string, string> {
  return {
    click: tr("workspace.options.interaction-on-click"),
    "mouse-enter": tr("workspace.options.interaction-mouse-enter"),
    "mouse-leave": tr("workspace.options.interaction-mouse-leave"),
    "after-delay": tr("workspace.options.interaction-after-delay")
  }
}

function eventTypeName(interaction: any): string {
  const names = eventTypeNames()
  return names[interaction.eventType as string] || "--"
}

function actionSummary(interaction: any, destination: any): string {
  switch (interaction.actionType) {
    case "navigate":
      return tr("workspace.options.interaction-navigate-to-dest", destination?.name || tr("workspace.options.interaction-none"))
    case "open-overlay":
      return tr("workspace.options.interaction-open-overlay-dest", destination?.name || tr("workspace.options.interaction-none"))
    case "toggle-overlay":
      return tr("workspace.options.interaction-toggle-overlay-dest", destination?.name || tr("workspace.options.interaction-none"))
    case "close-overlay":
      return tr("workspace.options.interaction-close-overlay-dest", destination?.name || tr("workspace.options.interaction-self"))
    case "prev-screen":
      return tr("workspace.options.interaction-prev-screen")
    case "open-url":
      return tr("workspace.options.interaction-open-url")
    default:
      return "--"
  }
}

function getFramesOptions(frames: any[], shape: any): Array<{ value: string, label: string }> {
  return frames
    .filter((frame) => frame.id !== shape.id && frame.id !== shape.frameId)
    .map((frame) => ({ value: String(frame.id), label: frame.name }))
}

function getSharedFramesOptions(sharedFrames: any[]): Array<{ value: string, label: string }> {
  return sharedFrames.map((frame) => ({ value: String(frame.id), label: frame.name }))
}

interface PrototypePillProps {
  title: string
  description?: string
  onChange: (value: string) => void
  isEditable: boolean
  leftButtonIconId: any
  leftButtonTooltip: string
  onLeftButtonClick: () => void
  isLeftButtonActive?: boolean
  rightButtonIconId: any
  rightButtonTooltip: string
  onRightButtonClick: () => void
  isRightButtonActive?: boolean
}

const PrototypePill: React.FC<PrototypePillProps> = ({
  title,
  description,
  onChange,
  isEditable,
  leftButtonIconId,
  leftButtonTooltip,
  onLeftButtonClick,
  isLeftButtonActive = false,
  rightButtonIconId,
  rightButtonTooltip,
  onRightButtonClick,
  isRightButtonActive = false
}) => {
  const localRef = useRef<HTMLInputElement>(null)
  const inputRef = localRef

  const handleFocus = useCallback(() => {
    if (inputRef.current) {
      dom.selectText(inputRef.current)
    }
  }, [])

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (inputRef.current) {
      const target = event.target as HTMLInputElement
      const value = str.trim(dom.getValue(target))
      if (kbd.esc(event) || kbd.enter(event)) {
        dom.blur(inputRef.current)
        onChange(value)
      }
    }
  }, [onChange])

  const handleBlur = useCallback((event: React.FocusEvent) => {
    const target = event.target as HTMLInputElement
    const value = str.trim(dom.getValue(target))
    onChange(value)
  }, [onChange])

  return (
    <div className={stl.cssCase("prototype-pill", { double: !!description })}>
      <IconButton
        variant="secondary"
        className={`${stl.css("prototype-pill-button")} ${stl.css("left")}`}
        ariaPressed={isLeftButtonActive}
        icon={leftButtonIconId}
        ariaLabel={leftButtonTooltip}
        onClick={onLeftButtonClick}
      />

      <div className={stl.css("prototype-pill-main")}>
        {isEditable ? (
          <input
            type="text"
            className={stl.css("prototype-pill-input")}
            ref={inputRef as any}
            defaultValue={title}
            onFocus={handleFocus}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
          />
        ) : (
          <div className={stl.css("prototype-pill-center")}>
            <div className={stl.css("prototype-pill-info")}>
              <div className={stl.css("prototype-pill-name")}>{title}</div>
              <div className={stl.css("prototype-pill-description")}>{description}</div>
            </div>
          </div>
        )}
      </div>

      <IconButton
        variant="secondary"
        className={`${stl.css("prototype-pill-button")} ${stl.css("right")}`}
        ariaPressed={isRightButtonActive}
        icon={rightButtonIconId}
        ariaLabel={rightButtonTooltip}
        onClick={onRightButtonClick}
      />
    </div>
  )
}

interface FlowItemProps {
  flow: any
}

const FlowItem: React.FC<FlowItemProps> = ({ flow }) => {
  const startFlow = useCallback(() => {
    store.emit(dcm.goToViewer({ section: "interactions", frameId: flow.startingFrame }))
  }, [flow])

  const renameFlow = useCallback((value: string) => {
    if (!str.empty(value)) {
      store.emit(dwi.renameFlow(flow.id, value))
    }
  }, [flow])

  const removeFlow = useCallback(() => {
    store.emit(dwi.removeFlow(flow.id))
  }, [flow])

  return (
    <PrototypePill
      title={flow.name || ""}
      isEditable
      onChange={renameFlow}
      leftButtonIconId={i.play}
      leftButtonTooltip={tr("workspace.options.flows.flow-start")}
      onLeftButtonClick={startFlow}
      rightButtonIconId={i.remove}
      rightButtonTooltip={tr("labels.remove")}
      onRightButtonClick={removeFlow}
    />
  )
}

interface InteractionItemProps {
  index: number
  shape: any
  interaction: any
  updateInteraction: (index: number, updateFn: (interaction: any) => any) => void
  removeInteraction: (index: number) => void
}

const InteractionItem: React.FC<InteractionItemProps> = ({
  index,
  shape,
  interaction,
  updateInteraction,
  removeInteraction
}) => {
  const objects = refs.workspacePageObjects.deref()
  const destination = objects?.[interaction.destination]

  const frames = useMemo(() => ctt.getViewerFrames(objects, { allFrames: true }), [objects])
  const shapeParentIds = useMemo(() => cfh.getParentIds(objects, shape.id), [objects])
  const shapeParents = useMemo(
    () => frames.filter((frame: any) => shapeParentIds.has(frame.id)),
    [frames, shapeParentIds]
  )

  const { overlayPosType, closeClickOutside, backgroundOverlay, preserveScroll } = interaction
  const way = interaction.animation?.way
  const direction = interaction.animation?.direction

  const [openExtended, setOpenExtended] = useState(false)
  const extDelayRef = useRef<HTMLInputElement>(null)
  const extDurationRef = useRef<HTMLInputElement>(null)

  const toggleExtended = useCallback(() => setOpenExtended((v) => !v), [])

  const changeEventType = useCallback((event: string) => {
    const value = event as any
    updateInteraction(index, (int: any) => ctsi.setEventType(int, value, shape))
  }, [index, updateInteraction, shape])

  const changeActionType = useCallback((event: string) => {
    const value = event as any
    updateInteraction(index, (int: any) => ctsi.setActionType(int, value))
  }, [index, updateInteraction])

  const changeDelay = useCallback((value: any) => {
    updateInteraction(index, (int: any) => ctsi.setDelay(int, value))
  }, [index, updateInteraction])

  const changeDestination = useCallback((event: string) => {
    let value = event
    value = value !== "" ? uuid.parse(value) : null
    updateInteraction(index, (int: any) => ctsi.setDestination(int, value))
  }, [index, updateInteraction])

  const changePositionRelativeTo = useCallback((event: string) => {
    const value = uuid.parse(event)
    updateInteraction(index, (int: any) => ctsi.setPositionRelativeTo(int, value))
  }, [index, updateInteraction])

  const changePreserveScroll = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = dom.checked(dom.getTarget(event))
    updateInteraction(index, (int: any) => ctsi.setPreserveScroll(int, value))
  }, [index, updateInteraction])

  const changeUrl = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target
    let value = dom.getValue(target)
    const hasPrefix = str.startsWith(value, "http://") || str.startsWith(value, "https://")
    if (!hasPrefix) {
      value = "http://" + value
      dom.setValue(target, value)
    }
    if (dom.valid(target)) {
      dom.removeClass(target, "error")
      updateInteraction(index, (int: any) => ctsi.setUrl(int, value))
    } else {
      dom.addClass(target, "error")
    }
  }, [index, updateInteraction])

  const changeOverlayPosType = useCallback((value: any) => {
    const shapeId = shape.id
    updateInteraction(index, (int: any) => ctsi.setOverlayPosType(int, value, shape, objects))
    if (value === "manual") {
      updateInteraction(index, (int: any) => ctsi.setPositionRelativeTo(int, shapeId))
    }
  }, [index, updateInteraction, shape, objects])

  const toggleOverlayPosType = useCallback((event: React.MouseEvent) => {
    const posType = dom.getData(dom.getCurrentTarget(event), "value")
    const value = posType as any
    updateInteraction(index, (int: any) => ctsi.toggleOverlayPosType(int, value, shape, objects))
  }, [index, updateInteraction, shape, objects])

  const changeCloseClickOutside = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = dom.checked(dom.getTarget(event))
    updateInteraction(index, (int: any) => ctsi.setCloseClickOutside(int, value))
  }, [index, updateInteraction])

  const changeBackgroundOverlay = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = dom.checked(dom.getTarget(event))
    updateInteraction(index, (int: any) => ctsi.setBackgroundOverlay(int, value))
  }, [index, updateInteraction])

  const changeAnimationType = useCallback((event: string) => {
    const value = event === "" ? null : (event as any)
    updateInteraction(index, (int: any) => ctsi.setAnimationType(int, value))
  }, [index, updateInteraction])

  const changeDuration = useCallback((value: any) => {
    updateInteraction(index, (int: any) => ctsi.setDuration(int, value))
  }, [index, updateInteraction])

  const changeEasing = useCallback((event: string) => {
    const value = event as any
    updateInteraction(index, (int: any) => ctsi.setEasing(int, value))
  }, [index, updateInteraction])

  const changeWay = useCallback((event: string) => {
    const value = event as any
    updateInteraction(index, (int: any) => ctsi.setWay(int, value))
  }, [index, updateInteraction])

  const changeDirection = useCallback((event: string) => {
    const value = event as any
    updateInteraction(index, (int: any) => ctsi.setDirection(int, value))
  }, [index, updateInteraction])

  const changeOffsetEffect = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = dom.checked(dom.getTarget(event))
    updateInteraction(index, (int: any) => ctsi.setOffsetEffect(int, value))
  }, [index, updateInteraction])

  const eventTypeOptions = [
    { value: "click", label: tr("workspace.options.interaction-on-click") },
    { value: "mouse-enter", label: tr("workspace.options.interaction-mouse-enter") },
    { value: "mouse-leave", label: tr("workspace.options.interaction-mouse-leave") },
    ...(cfh.frameShape(shape)
      ? [{ value: "after-delay", label: tr("workspace.options.interaction-after-delay") }]
      : [])
  ]

  const actionTypeOptions = [
    { value: "navigate", label: tr("workspace.options.interaction-navigate-to") },
    { value: "open-overlay", label: tr("workspace.options.interaction-open-overlay") },
    { value: "toggle-overlay", label: tr("workspace.options.interaction-toggle-overlay") },
    { value: "close-overlay", label: tr("workspace.options.interaction-close-overlay") },
    { value: "prev-screen", label: tr("workspace.options.interaction-prev-screen") },
    { value: "open-url", label: tr("workspace.options.interaction-open-url") }
  ]

  const framesOpts = getFramesOptions(frames, shape)
  const defaultOpts = interaction.actionType === "close-overlay"
    ? [{ value: "", label: tr("workspace.options.interaction-self") }]
    : [{ value: "", label: tr("workspace.options.interaction-none") }]

  const destinationOptions = useMemo(() => {
    const sortedFramesOpts = [...framesOpts].sort((a, b) => a.label.localeCompare(b.label))
    return [...defaultOpts, ...sortedFramesOpts]
  }, [framesOpts, defaultOpts])

  const shapeParentsOpts = getSharedFramesOptions(shapeParents)

  const relativeToOpts = useMemo(() => {
    if (overlayPosType !== "manual") {
      return [
        { value: "", label: tr("workspace.options.interaction-auto") },
        ...shapeParentsOpts,
        { value: String(shape.id), label: `${shape.name} (${tr("workspace.options.interaction-self")})` }
      ]
    }
    return [{ value: String(shape.id), label: `${shape.name} (${tr("workspace.options.interaction-self")})` }]
  }, [shapeParentsOpts, overlayPosType, shape])

  const overlayPositionOpts = [
    { value: "manual", label: tr("workspace.options.interaction-pos-manual") },
    { value: "center", label: tr("workspace.options.interaction-pos-center") },
    { value: "top-left", label: tr("workspace.options.interaction-pos-top-left") },
    { value: "top-right", label: tr("workspace.options.interaction-pos-top-right") },
    { value: "top-center", label: tr("workspace.options.interaction-pos-top-center") },
    { value: "bottom-left", label: tr("workspace.options.interaction-pos-bottom-left") },
    { value: "bottom-right", label: tr("workspace.options.interaction-pos-bottom-right") },
    { value: "bottom-center", label: tr("workspace.options.interaction-pos-bottom-center") }
  ]

  const basicAnimationOpts = [
    { value: "", label: tr("workspace.options.interaction-animation-none") },
    { value: "dissolve", label: tr("workspace.options.interaction-animation-dissolve") },
    { value: "slide", label: tr("workspace.options.interaction-animation-slide") }
  ]

  const animationOpts = useMemo(() => {
    if (ctsi.allowPush(interaction.actionType)) {
      return [...basicAnimationOpts, { value: "push", label: tr("workspace.options.interaction-animation-push") }]
    }
    return basicAnimationOpts
  }, [interaction.actionType])

  const easingOptions = [
    { icon: "easing-linear", value: "linear", label: tr("workspace.options.interaction-easing-linear") },
    { icon: "easing-ease", value: "ease", label: tr("workspace.options.interaction-easing-ease") },
    { icon: "easing-ease-in", value: "ease-in", label: tr("workspace.options.interaction-easing-ease-in") },
    { icon: "easing-ease-out", value: "ease-out", label: tr("workspace.options.interaction-easing-ease-out") },
    { icon: "easing-ease-in-out", value: "ease-in-out", label: tr("workspace.options.interaction-easing-ease-in-out") }
  ]

  return (
    <div className={stl.css("interaction-item")}>
      <PrototypePill
        title={eventTypeName(interaction)}
        description={actionSummary(interaction, destination)}
        leftButtonIconId={i.hsva}
        leftButtonTooltip={tr("labels.options")}
        isLeftButtonActive={openExtended}
        onLeftButtonClick={toggleExtended}
        rightButtonIconId={i.remove}
        rightButtonTooltip={tr("labels.remove")}
        onRightButtonClick={() => removeInteraction(index)}
      />

      {openExtended && (
        <>
          {/* Trigger select */}
          <div className={stl.css("interaction-row")}>
            <label className={stl.css("interaction-row-label")}>
              <div className={stl.css("interaction-row-name")}>
                {tr("workspace.options.interaction-trigger")}
              </div>
            </label>
            <div className={stl.css("interaction-row-select")}>
              <Select
                defaultValue={interaction.eventType}
                options={eventTypeOptions}
                onChange={changeEventType}
              />
            </div>
          </div>

          {/* Delay */}
          {ctsi.hasDelay(interaction) && (
            <div className={stl.css("interaction-row")}>
              <div className={stl.css("interaction-row-label")}>
                <div className={stl.css("interaction-row-name")}>
                  {tr("workspace.options.interaction-delay")}
                </div>
              </div>
              <div className={stl.css("interaction-row-input")}>
                <NumericInput
                  ref={extDelayRef as any}
                  icon={i.characterM}
                  property={tr("workspace.options.interaction-ms")}
                  onChange={changeDelay}
                  value={interaction.delay}
                />
              </div>
            </div>
          )}

          {/* Action select */}
          <div className={stl.css("interaction-row")}>
            <div className={stl.css("interaction-row-label")}>
              <div className={stl.css("interaction-row-name")}>
                {tr("workspace.options.interaction-action")}
              </div>
            </div>
            <div className={stl.css("interaction-row-select")}>
              <Select
                defaultValue={interaction.actionType}
                options={actionTypeOptions}
                onChange={changeActionType}
              />
            </div>
          </div>

          {/* Destination */}
          {ctsi.hasDestination(interaction) && (
            <div className={stl.css("interaction-row")}>
              <div className={stl.css("interaction-row-label")}>
                <div className={stl.css("interaction-row-name")}>
                  {tr("workspace.options.interaction-destination")}
                </div>
              </div>
              <div className={stl.css("interaction-row-select")}>
                <Select
                  defaultValue={String(interaction.destination)}
                  options={destinationOptions}
                  onChange={changeDestination}
                />
              </div>
            </div>
          )}

          {/* Preserve scroll */}
          {ctsi.hasPreserveScroll(interaction) && (
            <div className={stl.css("interaction-row")}>
              <div className={stl.css("interaction-row-checkbox")}>
                <Checkbox
                  id={`preserve-${index}`}
                  label={tr("workspace.options.interaction-preserve-scroll")}
                  checked={preserveScroll}
                  onChange={changePreserveScroll}
                />
              </div>
            </div>
          )}

          {/* URL */}
          {ctsi.hasUrl(interaction) && (
            <div className={stl.css("interaction-row")}>
              <div className={stl.css("interaction-row-label")}>
                <div className={stl.css("interaction-row-name")}>
                  {tr("workspace.options.interaction-url")}
                </div>
              </div>
              <div className={stl.css("interaction-row-input")}>
                <Input
                  type="url"
                  placeholder="http://example.com"
                  defaultValue={interaction.url}
                  onBlur={changeUrl}
                />
              </div>
            </div>
          )}

          {ctsi.hasOverlayOpts(interaction) && (
            <>
              {/* Overlay position relative-to */}
              <div className={stl.css("interaction-row")}>
                <div className={stl.css("interaction-row-label")}>
                  <div className={stl.css("interaction-row-name")}>
                    {tr("workspace.options.interaction-relative-to")}
                  </div>
                </div>
                <div className={stl.css("interaction-row-select")}>
                  <Select
                    defaultValue={String(interaction.positionRelativeTo)}
                    options={relativeToOpts}
                    onChange={changePositionRelativeTo}
                  />
                </div>
              </div>

              {/* Overlay position */}
              <div className={stl.css("interaction-row")}>
                <div className={stl.css("interaction-row-label")}>
                  <div className={stl.css("interaction-row-name")}>
                    {tr("workspace.options.interaction-position")}
                  </div>
                </div>
                <div className={stl.css("interaction-row-select")}>
                  <Select
                    defaultValue={overlayPosType}
                    options={overlayPositionOpts}
                    onChange={changeOverlayPosType}
                  />
                </div>
              </div>

              {/* Overlay position buttons */}
              <div className={stl.css("interaction-row")}>
                <div className={stl.css("interaction-row-position")}>
                  <div className={stl.css("center")}>
                    <IconButton
                      variant="secondary"
                      ariaPressed={overlayPosType === "center"}
                      dataValue="center"
                      icon={i.cornerCenter}
                      ariaLabel={tr("workspace.options.interaction-pos-center")}
                      onClick={toggleOverlayPosType}
                    />
                  </div>

                  <div className={stl.css("top-left")}>
                    <IconButton
                      variant="secondary"
                      ariaPressed={overlayPosType === "top-left"}
                      dataValue="top-left"
                      icon={i.cornerTopLeft}
                      ariaLabel={tr("workspace.options.interaction-pos-top-left")}
                      onClick={toggleOverlayPosType}
                    />
                  </div>

                  <div className={stl.css("top-right")}>
                    <IconButton
                      variant="secondary"
                      ariaPressed={overlayPosType === "top-right"}
                      dataValue="top-right"
                      icon={i.cornerTopRight}
                      ariaLabel={tr("workspace.options.interaction-pos-top-right")}
                      onClick={toggleOverlayPosType}
                    />
                  </div>

                  <div className={stl.css("top-center")}>
                    <IconButton
                      variant="secondary"
                      ariaPressed={overlayPosType === "top-center"}
                      dataValue="top-center"
                      icon={i.cornerTop}
                      ariaLabel={tr("workspace.options.interaction-pos-top-center")}
                      onClick={toggleOverlayPosType}
                    />
                  </div>

                  <div className={stl.css("bottom-left")}>
                    <IconButton
                      variant="secondary"
                      ariaPressed={overlayPosType === "bottom-left"}
                      dataValue="bottom-left"
                      icon={i.cornerBottomLeft}
                      ariaLabel={tr("workspace.options.interaction-pos-bottom-left")}
                      onClick={toggleOverlayPosType}
                    />
                  </div>

                  <div className={stl.css("bottom-right")}>
                    <IconButton
                      variant="secondary"
                      ariaPressed={overlayPosType === "bottom-right"}
                      dataValue="bottom-right"
                      icon={i.cornerBottomRight}
                      ariaLabel={tr("workspace.options.interaction-pos-bottom-right")}
                      onClick={toggleOverlayPosType}
                    />
                  </div>

                  <div className={stl.css("bottom-center")}>
                    <IconButton
                      variant="secondary"
                      ariaPressed={overlayPosType === "bottom-center"}
                      dataValue="bottom-center"
                      icon={i.cornerBottom}
                      ariaLabel={tr("workspace.options.interaction-pos-bottom-center")}
                      onClick={toggleOverlayPosType}
                    />
                  </div>
                </div>
              </div>

              {/* Overlay click outside */}
              <div className={stl.css("interaction-row")}>
                <div className={stl.css("interaction-row-checkbox")}>
                  <Checkbox
                    id={`close-${index}`}
                    label={tr("workspace.options.interaction-close-outside")}
                    checked={closeClickOutside}
                    onChange={changeCloseClickOutside}
                  />
                </div>
              </div>

              <div className={stl.css("interaction-row")}>
                <div className={stl.css("interaction-row-checkbox")}>
                  <Checkbox
                    id={`background-${index}`}
                    label={tr("workspace.options.interaction-background")}
                    checked={backgroundOverlay}
                    onChange={changeBackgroundOverlay}
                  />
                </div>
              </div>
            </>
          )}

          {ctsi.hasAnimation(interaction) && (
            <>
              {/* Animation select */}
              <div className={stl.css("interaction-row")}>
                <div className={stl.css("interaction-row-label")}>
                  <div className={stl.css("interaction-row-name")}>
                    {tr("workspace.options.interaction-animation")}
                  </div>
                </div>
                <div className={stl.css("interaction-row-select")}>
                  <Select
                    className={stl.css("animation-select")}
                    defaultValue={interaction.animation?.animationType || ""}
                    options={animationOpts}
                    onChange={changeAnimationType}
                  />
                </div>
              </div>

              {/* Direction */}
              {ctsi.hasWay(interaction) && (
                <div className={stl.css("interaction-row")}>
                  <div className={stl.css("interaction-row-radio")}>
                    <RadioButtons
                      selected={way}
                      onChange={changeWay}
                      name="animation-way"
                    >
                      <RadioButton value="in" id="animation-way-in" />
                      <RadioButton id="animation-way-out" value="out" />
                    </RadioButtons>
                  </div>
                </div>
              )}

              {/* Direction */}
              {ctsi.hasDirection(interaction) && (
                <div className={stl.css("interaction-row")}>
                  <div className={stl.css("interaction-row-radio")}>
                    <RadioButtons
                      selected={direction}
                      onChange={changeDirection}
                      name="animation-direction"
                    >
                      <RadioButton
                        icon={i.row}
                        iconClass={stl.css("right")}
                        value="right"
                        id="animation-right"
                      />
                      <RadioButton
                        icon={i.rowReverse}
                        iconClass={stl.css("left")}
                        id="animation-left"
                        value="left"
                      />
                      <RadioButton
                        icon={i.column}
                        iconClass={stl.css("down")}
                        id="animation-down"
                        value="down"
                      />
                      <RadioButton
                        icon={i.columnReverse}
                        iconClass={stl.css("up")}
                        id="animation-up"
                        value="up"
                      />
                    </RadioButtons>
                  </div>
                </div>
              )}

              {/* Duration */}
              {ctsi.hasDuration(interaction) && (
                <div className={stl.css("interaction-row")}>
                  <div className={stl.css("interaction-row-label")}>
                    <div className={stl.css("interaction-row-name")}>
                      {tr("workspace.options.interaction-duration")}
                    </div>
                  </div>
                  <div className={stl.css("interaction-row-input")}>
                    <NumericInput
                      ref={extDurationRef as any}
                      icon={i.characterM}
                      property={tr("workspace.options.interaction-ms")}
                      onChange={changeDuration}
                      value={interaction.animation?.duration}
                    />
                  </div>
                </div>
              )}

              {/* Easing */}
              {ctsi.hasEasing(interaction) && (
                <div className={stl.css("interaction-row")}>
                  <div className={stl/css("interaction-row-label")}>
                    <div className={stl.css("interaction-row-name")}>
                      {tr("workspace.options.interaction-easing")}
                    </div>
                  </div>
                  <div className={stl.css("interaction-row-select")}>
                    <Select
                      className={stl.css("easing-select")}
                      dropdownClass={stl.css("dropdown-upwards")}
                      defaultValue={interaction.animation?.easing}
                      options={easingOptions}
                      onChange={changeEasing}
                    />
                  </div>
                </div>
              )}

              {/* Offset effect */}
              {ctsi.hasOffsetEffect(interaction) && (
                <div className={stl.css("interaction-row")}>
                  <div className={stl.css("interaction-row-checkbox")}>
                    <Checkbox
                      id={`offset-effect-${index}`}
                      label={tr("workspace.options.interaction-offset-effect")}
                      checked={interaction.animation?.offsetEffect}
                      onChange={changeOffsetEffect}
                    />
                  </div>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  )
}

interface PageFlowsProps {
  flows: Array<[string, any]>
}

const PageFlows: React.FC<PageFlowsProps> = ({ flows }) => {
  const [showContent, setShowContent] = useState(true)

  const toggleContent = useCallback(() => setShowContent((v) => !v), [])

  return (
    <div className={stl.css("section")}>
      <div className={stl.css("title")}>
        <TitleBar
          collapsable={flows.length > 0}
          collapsed={!showContent}
          onCollapsed={toggleContent}
          title={tr("workspace.options.flows.flow-starts")}
          className={stl.css("title-bar")}
        />
      </div>
      {showContent && (
        <div className={stl.css("content")}>
          {flows.map(([id, flow]) => (
            <FlowItem key={id} flow={flow} />
          ))}
        </div>
      )}
    </div>
  )
}

interface ShapeFlowsProps {
  flows: Array<[string, any]>
  shape: any
}

const ShapeFlows: React.FC<ShapeFlowsProps> = ({ flows, shape }) => {
  const [showContent, setShowContent] = useState(true)
  const flow = ctp.getFrameFlow(Object.fromEntries(flows), shape.id)

  const toggleContent = useCallback(() => setShowContent((v) => !v), [])

  const addFlow = useCallback(() => {
    store.emit(dwi.addFlowSelectedFrame())
  }, [])

  return (
    <div className={stl.css("section")}>
      <div className={stl.css("title")}>
        <TitleBar
          collapsable={flow !== undefined}
          collapsed={!showContent}
          onCollapsed={toggleContent}
          title={tr("workspace.options.flows.flow")}
          className={stl.css("title-bar")}
        >
          {flow === undefined && (
            <IconButton
              variant="ghost"
              ariaLabel={tr("workspace.options.flows.add-flow-start")}
              onClick={addFlow}
              icon={i.add}
            />
          )}
        </TitleBar>
      </div>
      {showContent && flow !== undefined && (
        <div className={stl.css("content")}>
          <FlowItem key={flow.id} flow={flow} />
        </div>
      )}
    </div>
  )
}

interface InteractionsProps {
  interactions: Array<[number, any]>
  shape: any
}

const Interactions: React.FC<InteractionsProps> = ({ interactions, shape }) => {
  const [showContent, setShowContent] = useState(true)

  const toggleContent = useCallback(() => setShowContent((v) => !v), [])

  const addInteraction = useCallback(() => {
    store.emit(dwi.addNewInteraction(shape))
  }, [shape])

  const removeInteraction = useCallback((index: number) => {
    store.emit(dwi.removeInteraction(shape, index))
  }, [shape])

  const updateInteraction = useCallback((index: number, updateFn: (interaction: any) => any) => {
    store.emit(dwi.updateInteraction(shape, index, updateFn))
  }, [shape])

  return (
    <div className={stl.css("section")}>
      <div className={stl.css("title")}>
        <TitleBar
          collapsable={interactions.length > 0}
          collapsed={!showContent}
          onCollapsed={toggleContent}
          title={tr("workspace.options.interactions")}
          className={stl.css("title-bar")}
        >
          <IconButton
            variant="ghost"
            ariaLabel={tr("workspace.options.interactions.add-interaction")}
            onClick={addInteraction}
            icon={i.add}
          />
        </TitleBar>
      </div>

      {showContent && (
        <div className={`${stl.css("content")} ${stl.css("content-interactions")}`}>
          {interactions.map(([idx, interaction]) => (
            <InteractionItem
              key={`${shape.id}-${idx}`}
              index={idx}
              shape={shape}
              interaction={interaction}
              updateInteraction={updateInteraction}
              removeInteraction={removeInteraction}
            />
          ))}
        </div>
      )}
    </div>
  )
}

interface InteractionsMenuProps {
  shape?: any
}

const InteractionsMenu: React.FC<InteractionsMenuProps> = ({ shape }) => {
  const interactions = shape?.interactions || []
  const flows = refs.workspacePageFlows.deref() || []
  const framedShape = shape && !cfh.unframedShape(shape)

  return (
    <div className={stl.css("wrapper")}>
      {shape && cfh.frameShape(shape) && (
        <ShapeFlows flows={flows} shape={shape} />
      )}
      {!shape && flows.length > 0 && (
        <PageFlows flows={flows} />
      )}

      {framedShape && (
        <Interactions
          interactions={interactions}
          shape={shape}
        />
      )}

      {interactions.length === 0 && (
        <div className={stl.css("section")}>
          <div className={stl.css("content")}>
            <div className={stl.css("empty")}>
              {framedShape && (
                <EmptyState icon={i.add} text={tr("workspace.options.add-interaction")} />
              )}
              <EmptyState icon={i.interaction} text={tr("workspace.options.select-a-shape")} />
              <EmptyState icon={i.play} text={tr("workspace.options.use-play-button")} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export { InteractionsMenu }