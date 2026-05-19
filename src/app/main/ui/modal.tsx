// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { dmStr } from 'app/common/data/macros'
import * as modal from '@main/data/modal'
import * as store from '@main/store'
import { usePortalContainer } from '@ui/hooks'
import * as dom from '@util/dom'
import * as k from '@util/keyboard'
import { events, EventType } from 'goog.events'
import { derived } from 'okulary/core'
import React, { useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

function onEscClicked(event: KeyboardEvent, allowClickOutside: boolean) {
  if (k.esc(event) && !allowClickOutside) {
    dom.stopPropagation(event)
    store.emit(modal.hide)
  }
}

function onPopState(event: Event) {
  dom.preventDefault(event)
  dom.stopPropagation(event)
  store.emit(modal.hide)
  js.history.forward()
}

function onClickOutside(
  event: Event,
  wrapperRef: React.RefObject<HTMLDivElement>,
  type: string,
  allowClickOutside: boolean
) {
  const wrapper = wrapperRef.current
  const current = dom.getTarget(event) as HTMLElement

  if (
    wrapper &&
    !allowClickOutside &&
    !wrapper.contains(current) &&
    type !==
      (current as HTMLElement)?.dataset?.allowClickModal &&
    event.button === 0
  ) {
    dom.stopPropagation(event)
    dom.preventDefault(event)
    store.emit(modal.hide)
  }
}

interface ModalWrapperProps {
  data: {
    type: string
    props?: any
    allowClickOutside?: boolean
  }
}

const ModalWrapper: React.FC<ModalWrapperProps> = React.memo(({ data }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const components = modal.components

  const allowClickOutside = data.allowClickOutside

  const handleClickOutside = useCallback(
    (event: Event) => {
      onClickOutside(event, wrapperRef, data.type, allowClickOutside)
    },
    [allowClickOutside, data.type]
  )

  const handleKeydown = useCallback(
    (event: Event) => {
      onEscClicked(event as KeyboardEvent, allowClickOutside)
    },
    [allowClickOutside]
  )

  useEffect(() => {
    const keys = [
      events.listen(window, EventType.POPSTATE, onPopState),
      events.listen(document, EventType.KEYDOWN, handleKeydown),
      events.listen(dom.getRoot(), EventType.POINTERDOWN, handleClickOutside),
      events.listen(document, EventType.CONTEXTMENU, handleClickOutside),
    ]

    return () => {
      keys.forEach((key) => events.unlistenByKey(key))
    }
  }, [handleClickOutside, handleKeydown])

  const component = components.get(data.type)

  if (!component) return null

  return (
    <div ref={wrapperRef} className="modal-wrapper">
      {component(data.props)}
    </div>
  )
})

const refModal = derived(['modal'], (state) => state.modal, store.state)

export const ModalContainer: React.FC = () => {
  const container = usePortalContainer('modal')
  const modalData = refModal

  if (!modalData) return null

  return createPortal(
    <ModalWrapper data={modalData} key={dmStr(modalData.id)} />,
    container
  )
}
