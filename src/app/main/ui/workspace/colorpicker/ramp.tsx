// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as stl from 'app/main/style';
import * as d from 'app/common/data';
import * as mth from 'app/common/math';
import * as cc from 'app/common/types/color';
import { ColorBullet } from 'app/main/ui/components/color-bullet';
import { SliderSelector } from 'app/main/ui/workspace/colorpicker/slider-selector';
import * as dom from 'app/util/dom';
import React, { useCallback, useEffect, useState } from 'react';

interface Color {
  h?: number;
  s?: number;
  v?: number;
  hex?: string;
  r?: number;
  g?: number;
  b?: number;
  alpha?: number;
}

interface ValueSaturationSelectorProps {
  saturation: number;
  value: number;
  onChange: (saturation: number, value: number) => void;
  onStartDrag?: () => void;
  onFinishDrag?: () => void;
}

const ValueSaturationSelector: React.FC<ValueSaturationSelectorProps> = ({
  saturation,
  value,
  onChange,
  onStartDrag,
  onFinishDrag,
}) => {
  const [dragging, setDragging] = useState(false);

  const calculatePos = useCallback(
    (ev: React.MouseEvent) => {
      const target = ev.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const { left, right, top, bottom } = rect;
      const { x, y } = dom.getClientPosition(ev);

      const px = mth.clamp((x - left) / (right - left), 0, 1);
      const py = 255 * (1 - mth.clamp((y - top) / (bottom - top), 0, 1));
      onChange(px, py);
    },
    [onChange]
  );

  const handleStartDrag = useCallback(
    (event: React.PointerEvent) => {
      dom.capturePointer(event);
      setDragging(true);
      onStartDrag?.();
    },
    [onStartDrag]
  );

  const handleStopDrag = useCallback(
    (event: React.PointerEvent) => {
      dom.releasePointer(event);
      setDragging(false);
      onFinishDrag?.();
    },
    [onFinishDrag]
  );

  const handlePointerMove = useCallback(
    (event: React.PointerEvent) => {
      if (dragging) {
        const { x, y } = dom.getClientPosition(event);
        const target = event.currentTarget as HTMLElement;
        const rect = target.getBoundingClientRect();
        const px = mth.clamp((x - rect.left) / (rect.right - rect.left), 0, 1);
        const py = 255 * (1 - mth.clamp((y - rect.top) / (rect.bottom - rect.top), 0, 1));
        onChange(px, py);
      }
    },
    [dragging, onChange]
  );

  return (
    <div
      className={stl.css('value-saturation-selector')}
      data-testid="value-saturation-selector"
      onPointerDown={handleStartDrag}
      onPointerUp={handleStopDrag}
      onClick={calculatePos}
      onPointerMove={handlePointerMove}
    >
      <div
        className={stl.css('handler')}
        data-testid="ramp-handler"
        style={{
          pointerEvents: 'none',
          left: `${saturation * 100}%`,
          top: `${100 - (value / 255) * 100}%`,
        }}
      />
    </div>
  );
};

const enrichColorMap = (color: Color): Color => {
  const h = d.nilv(color.h, 0);
  const s = d.nilv(color.s, 0);
  const v = d.nilv(color.v, 0);
  const hsv = [h, s, v] as [number, number, number];
  const [r, g, b] = cc.hsvToRgb(hsv);

  return {
    ...color,
    hex: cc.hsvToHex(hsv),
    h,
    s,
    v,
    r,
    g,
    b,
  };
};

interface RampSelectorProps {
  color: Color;
  disableOpacity?: boolean;
  onChange: (color: Color) => void;
  onStartDrag?: () => void;
  onFinishDrag?: () => void;
}

export const RampSelector: React.FC<RampSelectorProps> = ({
  color,
  disableOpacity,
  onChange,
  onStartDrag,
  onFinishDrag,
}) => {
  const [internalColor, setInternalColor] = useState<Color>(() =>
    enrichColorMap(color)
  );

  const { h, s, v } = internalColor;
  const hex = internalColor.hex || '';
  const alpha = internalColor.alpha || 1;

  useEffect(() => {
    setInternalColor(enrichColorMap(color));
  }, [color]);

  const onChangeValueSaturation = useCallback(
    (saturation: number, value: number) => {
      const newColor = enrichColorMap({ ...internalColor, s: saturation, v: value });
      setInternalColor(newColor);
      onChange(newColor);
    },
    [internalColor, onChange]
  );

  const onChangeHue = useCallback(
    (hue: number) => {
      const newColor = enrichColorMap({ ...internalColor, h: hue });
      setInternalColor(newColor);
      onChange(newColor);
    },
    [internalColor, onChange]
  );

  const onChangeOpacity = useCallback(
    (alpha: number) => {
      const newColor = { ...internalColor, alpha };
      setInternalColor(newColor);
      onChange(newColor);
    },
    [internalColor, onChange]
  );

  const bulletColor = { color: hex, opacity: alpha };

  return (
    <>
      <ValueSaturationSelector
        saturation={s || 0}
        value={v || 0}
        onChange={onChangeValueSaturation}
        onStartDrag={onStartDrag}
        onFinishDrag={onFinishDrag}
      />

      <div className={stl.css('shade-selector')} style={{ '--bullet-size': '52px' } as React.CSSProperties}>
        <ColorBullet color={bulletColor} area={true} />
        <div className={stl.css('sliders-wrapper')}>
          <SliderSelector
            type="hue"
            maxValue={360}
            value={h || 0}
            onChange={onChangeHue}
            onStartDrag={onStartDrag}
            onFinishDrag={onFinishDrag}
          />

          {!disableOpacity && (
            <SliderSelector
              type="opacity"
              maxValue={1}
              value={alpha}
              onChange={onChangeOpacity}
              onStartDrag={onStartDrag}
              onFinishDrag={onFinishDrag}
            />
          )}
        </div>
      </div>
    </>
  );
};
