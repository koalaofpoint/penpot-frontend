// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as stl from 'app/main/style';
import * as dm from 'app/common/data/macros';
import * as gpt from 'app/common/geom/point';
import * as mth from 'app/common/math';
import * as cc from 'app/common/types/color';
import { SliderSelector } from 'app/main/ui/workspace/colorpicker/slider-selector';
import * as dom from 'app/util/dom';
import * as obj from 'app/util/object';
import * as str from 'cuerdas.core';
import React, { useCallback, useEffect, useRef, useState } from 'react';

const createColorWheel = (canvasNode: HTMLCanvasElement) => {
  const ctx = canvasNode.getContext('2d');
  if (!ctx) return;

  const width = (canvasNode as any).width;
  const height = (canvasNode as any).height;
  const radius = width / 2;
  const cx = width / 2;
  const cy = width / 2;
  const step = 0.2;

  ctx.clearRect(0, 0, width, height);

  for (let degrees = 0; degrees < 360; degrees += step) {
    const degreesRad = mth.radians(degrees);
    const x = radius * mth.cos(-degreesRad);
    const y = radius * mth.sin(-degreesRad);

    ctx.strokeStyle = str.format('hsl(%s, 100%, 50%)', degrees);
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + x, cy + y);
    ctx.stroke();
  }

  const grd = ctx.createRadialGradient(cx, cy, 0, cx, cx, radius);
  grd.addColorStop(0, 'rgba(255, 255, 255, 1)');
  grd.addColorStop(1, 'rgba(255, 255, 255, 0)');
  ctx.fillStyle = grd;

  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, 2 * Math.PI, true);
  ctx.closePath();
  ctx.fill();
};

const colorToPoint = (
  canvasSide: number,
  hue: number,
  saturation: number
): gpt.Point => {
  const hueRad = mth.radians(-hue);
  const compX = saturation * mth.cos(hueRad);
  const compY = saturation * mth.sin(hueRad);
  const x = canvasSide / 2 + compX * (canvasSide / 2);
  const y = canvasSide / 2 + compY * (canvasSide / 2);
  return gpt.point(x, y);
};

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

interface HarmonySelectorProps {
  color: Color;
  disableOpacity?: boolean;
  onChange: (color: Partial<Color>) => void;
  onStartDrag?: () => void;
  onFinishDrag?: () => void;
}

export const HarmonySelector: React.FC<HarmonySelectorProps> = ({
  color,
  disableOpacity,
  onChange,
  onStartDrag,
  onFinishDrag,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasSide = 192;
  const [dragging, setDragging] = useState(false);

  const { h = 0, s = 0, v = 0, alpha = 1 } = color;

  const posCurrent = colorToPoint(canvasSide, h, s);
  const posComplement = colorToPoint(canvasSide, (h + 180) % 360, s);

  const calculatePos = useCallback(
    (ev: React.MouseEvent) => {
      const target = ev.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const { left, right, top, bottom } = rect;
      const { x, y } = dom.getClientPosition(ev);

      const px = mth.clamp((x - left) / (right - left), 0, 1);
      const py = mth.clamp((y - top) / (bottom - top), 0, 1);

      const px2 = 2 * px - 1;
      const py2 = 2 * py - 1;

      const angle = mth.degrees(mth.atan2(px2, py2));
      const newHue = (angle - 90 + 360) % 360;
      const newSaturation = mth.clamp(mth.distance([px2, py2], [0, 0]), 0, 1);
      const hex = cc.hsvToHex([newHue, newSaturation, v]);
      const [r, g, b] = cc.hexToRgb(hex);

      onChange({
        hex,
        r,
        g,
        b,
        h: newHue,
        s: newSaturation,
      });
    },
    [onChange, v]
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

  const onChangeValue = useCallback(
    (newValue: number) => {
      const hex = cc.hsvToHex([h, s, newValue]);
      const [r, g, b] = cc.hexToRgb(hex);
      onChange({ hex, r, g, b, v: newValue });
    },
    [onChange, h, s]
  );

  const onComplementClick = useCallback(
    (_: React.MouseEvent) => {
      const newHue = (h + 180) % 360;
      const hex = cc.hsvToHex([newHue, s, v]);
      const [r, g, b] = cc.hexToRgb(hex);
      onChange({ hex, r, g, b, h: newHue, s });
    },
    [onChange, h, s, v]
  );

  const onChangeOpacity = useCallback(
    (newAlpha: number) => onChange({ alpha: newAlpha }),
    [onChange]
  );

  useEffect(() => {
    if (canvasRef.current) {
      createColorWheel(canvasRef.current);
    }
  }, [canvasRef]);

  const [h1, s1, l1] = cc.hsvToHsl([h, s, 0]);
  const [h2, s2, l2] = cc.hsvToHsl([h, s, 255]);

  return (
    <div
      className={stl.css('harmony-selector')}
      style={{
        '--hue-from': `hsl(${h1}, ${s1 * 100}%, ${l1 * 100}%)`,
        '--hue-to': `hsl(${h2}, ${s2 * 100}%, ${l2 * 100}%)`,
      } as React.CSSProperties}
    >
      <div className={stl.css('handlers-wrapper')}>
        <SliderSelector
          type="value"
          vertical={true}
          reverse={false}
          value={v}
          maxValue={255}
          onChange={onChangeValue}
          onStartDrag={onStartDrag}
          onFinishDrag={onFinishDrag}
        />
        {!disableOpacity && (
          <SliderSelector
            type="opacity"
            vertical={true}
            value={alpha}
            maxValue={1}
            onChange={onChangeOpacity}
            onStartDrag={onStartDrag}
            onFinishDrag={onFinishDrag}
          />
        )}
      </div>

      <div className={stl.css('hue-wheel-wrapper')}>
        <canvas
          className={stl.css('hue-wheel')}
          ref={canvasRef}
          width={canvasSide}
          height={canvasSide}
          onPointerDown={handleStartDrag}
          onPointerUp={handleStopDrag}
          onLostPointerCapture={handleStopDrag}
          onClick={calculatePos}
          onPointerMove={(e) => {
            if (dragging) calculatePos(e);
          }}
        />
        <div
          className={stl.css('handler')}
          style={{
            pointerEvents: 'none',
            left: posCurrent.x,
            top: posCurrent.y,
          }}
        />
        <div
          className={`${stl.css('handler')} ${stl.css('complement')}`}
          style={{
            left: posComplement.x,
            top: posComplement.y,
            cursor: 'pointer',
          }}
          onClick={onComplementClick}
        />
      </div>
    </div>
  );
};
