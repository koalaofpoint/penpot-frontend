// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { dmStr } from 'app/common/data/macros'
import * as mth from 'app/common/math'
import * as dom from '@util/dom'
import * as obj from '@util/object'
import React, { useCallback, useState } from 'react'

interface SliderSelectorProps {
  value: number
  className?: string
  minValue?: number
  maxValue?: number
  vertical?: boolean
  reverse?: boolean
  onChange?: (value: number) => void
  onStartDrag?: () => void
  onFinishDrag?: () => void
  type?: 'hue' | 'saturation' | 'value' | 'opacity'
}

export const SliderSelector: React.FC<SliderSelectorProps> = ({
  value,
  className,
  minValue = 0,
  maxValue = 1,
  vertical = false,
  reverse = false,
  onChange,
  onStartDrag,
  onFinishDrag,
  type,
}) => {
  const [dragging, setDragging] = useState(false)

  const handleStartDrag = useCallback(
    (event: React.PointerEvent) => {
      dom.capturePointer(event)
      setDragging(true)
      onStartDrag?.()
    },
    [onStartDrag]
  )

  const handleStopDrag = useCallback(
    (event: React.PointerEvent) => {
      dom.releasePointer(event)
      setDragging(false)
      onFinishDrag?.()
    },
    [onFinishDrag]
  )

  const calculatePos = useCallback(
    (ev: any) => {
      if (!onChange) return

      const target = dom.getTarget(ev)
      const rect = dom.getBoundingRect(target)
      const { left, right, top, bottom } = rect
      const { x, y } = dom.getClientPosition(ev)

      let unitValue
      if (vertical) {
        unitValue = mth.clamp((bottom - y) / (bottom - top), 0, 1)
      } else {
        unitValue = mth.clamp((x - left) / (right - left), 0, 1)
      }

      if (reverse) {
        unitValue = mth.abs(1 - unitValue)
      }

      const newValue = minValue + unitValue * (maxValue - minValue)
      onChange(newValue)
    },
    [vertical, reverse, minValue, maxValue, onChange]
  )

  let valuePercent = ((value - minValue) / (maxValue - minValue)) * 100
  if (reverse) {
    valuePercent = mth.abs(100 - valuePercent)
  }
  const valuePercentStr = `${valuePercent}%`

  const commonStyle = { pointerEvents: 'none' as const }
  const horizontalStyle = obj.merge(
    { left: valuePercentStr },
    commonStyle
  )
  const verticalStyle = obj.merge(
    { bottom: valuePercentStr },
    commonStyle
  )

  return (
    <div
      className={[
        className,
        'slider-selector',
        vertical ? 'vertical' : '',
        type === 'hue' ? 'hue' : '',
        type === 'opacity' ? 'opacity' : '',
        type === 'value' ? 'value' : '',
      ].filter(Boolean).join(' ')}
      data-testid={type === 'opacity' ? 'slider-opacity' : undefined}
      onPointerDown={handleStartDrag}
      onPointerUp={handleStopDrag}
      onLostPointerCapture={handleStopDrag}
      onClick={calculatePos}
      onPointerMove={(e) => dragging && calculatePos(e)}
    >
      <div
        className="handler"
        style={vertical ? verticalStyle : horizontalStyle}
      />
    </div>
  )
}
