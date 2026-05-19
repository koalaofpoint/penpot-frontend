// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from 'app/common/data'
import { dmGetIn } from 'app/common/data/macros'
import * as gpt from 'app/common/geom/point'
import * as store from '@main/store'
import * as dom from '@util/dom'
import * as mse from '@util/mouse'
import { listen, EventType } from 'goog.events'
import React, { useCallback, useEffect, useMemo, useRef } from 'react'

export const viewportRef = { current: null as HTMLElement | null }
export const currentObserver = { current: null as any }
export const viewportBrect = { current: null as any }

export function initObserver(node: HTMLElement | null, onChangeBounds: () => void) {
  const observer = new ResizeObserver(onChangeBounds)

  if (currentObserver.current !== null) {
    currentObserver.current.disconnect()
  }

  currentObserver.current = observer

  if (node !== null) {
    observer.observe(node)
  }
}

export function onChangeBounds() {
  if (viewportRef.current) {
    const brect = dom.getBoundingRect(viewportRef.current)
    viewportBrect.current = gpt.point(
      d.parseInteger(brect.left),
      d.parseInteger(brect.top)
    )
  }
}

export function useViewportRef(): [React.RefObject<HTMLElement>, (node: HTMLElement | null) => void] {
  const ref = useRef<HTMLElement>(null)

  const setRef = useCallback((node: HTMLElement | null) => {
    (ref as any).current = node
    viewportRef.current = node

    if (node !== null) {
      listen(node, EventType.MOUSELEAVE, () => store.emit(mse.toBlurEvent()))
    }
    initObserver(node, onChangeBounds)
  }, [])

  return [ref, setRef]
}

export function pointToViewport(pt: gpt.Point): gpt.Point | null {
  const zoom = dmGetIn(store.state, ['workspace-local', 'zoom'], 1)

  if (viewportRef.current === null || viewportBrect.current === null) {
    return null
  }

  const vbox = (viewportRef.current as any).viewBox?.baseVal
  const brect = viewportBrect.current
  const box = gpt.point(vbox?.x ?? 0, vbox?.y ?? 0)
  const zoomPt = gpt.point(zoom)

  return gpt.subtract(gpt.subtract(pt, brect), zoomPt).add(box)
}

export function pointToViewportRelative(pt: gpt.Point): gpt.Point | null {
  if (viewportBrect.current === null) {
    return null
  }
  return gpt.subtract(pt, viewportBrect.current)
}

export function insideViewport(target: HTMLElement): boolean {
  return dom.isChild(viewportRef.current, target)
}
