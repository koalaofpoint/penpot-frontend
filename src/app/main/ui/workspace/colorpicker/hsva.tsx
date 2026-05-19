// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as cc from 'app/common/types/color'
import { sliderSelector as sliderSelector* } from '@ui/workspace/colorpicker/slider-selector'
import React, { useCallback } from 'react'

interface HsvaSelectorProps {
  color: {
    h: number
    s: number
    v: number
    alpha: number
  }
  disableOpacity?: boolean
  onChange?: (color: any) => void
  onStartDrag?: () => void
  onFinishDrag?: () => void
}

export const HsvaSelector: React.FC<HsvaSelectorProps> = ({
  color,
  disableOpacity,
  onChange,
  onStartDrag,
  onFinishDrag,
}) => {
  const { h, s, v, alpha } = color

  const handleChangeSlider = useCallback(
    (key: string) => (newValue: number) => {
      const change = { [key]: newValue }
      const { h: newH, s: newS, v: newV } = { ...color, ...change }
      const hex = cc.hsvToHex([newH, newS, newV])
      const [r, g, b] = cc.hexToRgb(hex)
      onChange?.({
        ...change,
        hex,
        r,
        g,
        b,
      })
    },
    [color, onChange]
  )

  const onChangeOpacity = useCallback(
    (newAlpha: number) => onChange?.({ alpha: newAlpha }),
    [onChange]
  )

  return (
    <div className="hsva-selector">
      <div className="hsva-row">
        <span className="hsva-selector-label">H</span>
        <sliderSelector*
          className="hsva-bar"
          type="hue"
          maxValue={360}
          value={h}
          onChange={handleChangeSlider('h')}
          onStartDrag={onStartDrag}
          onFinishDrag={onFinishDrag}
        />
      </div>
      <div className="hsva-row">
        <span className="hsva-selector-label">S</span>
        <sliderSelector*
          className="hsva-bar"
          type="saturation"
          maxValue={1}
          value={s}
          onChange={handleChangeSlider('s')}
          onStartDrag={onStartDrag}
          onFinishDrag={onFinishDrag}
        />
      </div>
      <div className="hsva-row">
        <span className="hsva-selector-label">V</span>
        <sliderSelector*
          className="hsva-bar"
          type="value"
          reverse={false}
          maxValue={255}
          value={v}
          onChange={handleChangeSlider('v')}
          onStartDrag={onStartDrag}
          onFinishDrag={onFinishDrag}
        />
      </div>
      {!disableOpacity && (
        <div className="hsva-row">
          <span className="hsva-selector-label">A</span>
          <sliderSelector*
            className="hsva-bar"
            type="opacity"
            maxValue={1}
            value={alpha}
            onChange={onChangeOpacity}
            onStartDrag={onStartDrag}
            onFinishDrag={onFinishDrag}
          />
        </div>
      )}
    </div>
  )
}
