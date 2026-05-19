// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as stl from 'app/main/style';
import * as d from 'app/common/data';
import * as mth from 'app/common/math';
import * as cc from 'app/common/types/color';
import * as dom from 'app/util/dom';
import * as kbd from 'app/util/keyboard';
import React, { useCallback, useEffect, useRef } from 'react';

interface Color {
  r?: number;
  g?: number;
  b?: number;
  h?: number;
  s?: number;
  v?: number;
  hex?: string;
  alpha?: number;
}

interface ColorInputsProps {
  type: 'rgb' | 'hsv';
  color: Color;
  disableOpacity?: boolean;
  onChange: (color: Partial<Color>) => void;
}

const parseHex = (val: string): string => {
  if (val.charAt(0) === '#') return val;
  return '#' + val;
};

const valueToHsvValue = (val: number): number => (255 * val) / 100;
const hsvValueToValue = (val: number): number => (100 * val) / 255;

export const ColorInputs: React.FC<ColorInputsProps> = ({
  type,
  color,
  disableOpacity,
  onChange,
}) => {
  const { r = 0, g = 0, b = 0, h = 0, s = 0, v = 0, hex = '', alpha = 1 } = color;

  const hexRef = useRef<HTMLInputElement>(null);
  const rRef = useRef<HTMLInputElement>(null);
  const gRef = useRef<HTMLInputElement>(null);
  const bRef = useRef<HTMLInputElement>(null);
  const hRef = useRef<HTMLInputElement>(null);
  const sRef = useRef<HTMLInputElement>(null);
  const vRef = useRef<HTMLInputElement>(null);
  const alphaRef = useRef<HTMLInputElement>(null);

  const setupHexColor = useCallback(
    (hexVal: string) => {
      const [r, g, b] = cc.hexToRgb(hexVal);
      const [h, s, v] = cc.hexToHsv(hexVal);
      onChange({ hex: hexVal, h, s, v, r, g, b });
    },
    [onChange]
  );

  const onChangeHex = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = parseHex(dom.getTargetVal(e));
      if (cc.validHexColor(val)) {
        setupHexColor(val);
      }
    },
    [setupHexColor]
  );

  const onBlurHex = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const val = dom.getTargetVal(e);
      let finalVal = val;
      if (cc.colorString(val)) {
        finalVal = cc.parse(val);
      } else if (cc.validHexColor(parseHex(val))) {
        finalVal = parseHex(val);
      }

      if (finalVal) {
        setupHexColor(finalVal);
      }
    },
    [setupHexColor]
  );

  const applyPropertyChange = useCallback(
    (property: keyof Color, val: number) => {
      let finalVal = val;
      if (property === 's') finalVal = val / 100;
      if (property === 'v') finalVal = valueToHsvValue(val);
      if (property === 'alpha') finalVal = val / 100;

      if (property === 'alpha') {
        onChange({ alpha: finalVal });
        return;
      }

      if (['r', 'g', 'b'].includes(property)) {
        const merged = { ...color, [property]: val };
        const hex = cc.rgbToHex([merged.r || 0, merged.g || 0, merged.b || 0]);
        const [h, s, v] = cc.hexToHsv(hex);
        onChange({ hex, h, s, v, ...merged });
        return;
      }

      // h or s
      const merged = { ...color, [property]: finalVal };
      const hex = cc.hsvToHex([merged.h || 0, merged.s || 0, merged.v || 0]);
      const [r, g, b] = cc.hexToRgb(hex);
      onChange({ hex, h: merged.h, s: merged.s, v: merged.v, r, g, b });
    },
    [color, onChange]
  );

  const onChangeProperty = useCallback(
    (property: keyof Color, maxValue: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = d.parseDouble(dom.getTargetVal(e));
      const clamped = mth.clamp(val || 0, 0, maxValue);
      if (clamped !== null && clamped !== undefined) {
        applyPropertyChange(property, clamped);
      }
    },
    [applyPropertyChange]
  );

  const onKeyDownStep = useCallback(
    (maxValue: number, onStep: (val: number) => void) =>
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        const up = kbd.upArrow(e);
        const down = kbd.downArrow(e);
        if (up || down) {
          if (kbd.shift(e) || kbd.alt(e)) {
            dom.preventDefault(e);
            const currentValue = d.parseDouble(dom.getTargetVal(e));
            if (currentValue !== null) {
              let step = 0;
              if (kbd.shift(e)) step = up ? 10 : -10;
              if (kbd.alt(e)) step = up ? 0.1 : -0.1;
              const newValue = mth.clamp(currentValue + step, 0, maxValue);
              dom.setValue(e.currentTarget as HTMLInputElement, newValue);
              onStep(newValue);
            }
          }
        }
      },
    []
  );

  const onKeyDownProperty = useCallback(
    (property: keyof Color, maxValue: number) =>
      onKeyDownStep(maxValue, (val) => applyPropertyChange(property, val)),
    [applyPropertyChange, onKeyDownStep]
  );

  useEffect(() => {
    const refs: Record<string, { current: HTMLInputElement | null }> = {
      hex: hexRef,
      r: rRef,
      g: gRef,
      b: bRef,
      h: hRef,
      s: sRef,
      v: vRef,
      alpha: alphaRef,
    };

    const propertyVal = (key: string): number | undefined => {
      const val = (color as any)[key];
      return val as number | undefined;
    };

    Object.entries(refs).forEach(([key, ref]) => {
      const node = ref.current;
      const propVal = propertyVal(key);
      if (propVal !== undefined && node) {
        let newVal = propVal;
        if (key === 's' || key === 'alpha') {
          newVal = mth.precision(propVal * 100, 2);
        } else if (key === 'v') {
          newVal = mth.precision(hsvValueToValue(propVal), 2);
        }
        dom.setValue(node, newVal);
      }
    });
  }, [color, type]);

  return (
    <div className={stl.cssCase('color-values', true, 'disable-opacity', !!disableOpacity)}>
      <div className={stl.css('colors-row')}>
        {type === 'rgb' ? (
          <>
            <div className={stl.css('input-wrapper')}>
              <label htmlFor="red-value" className={stl.css('input-label')}>
                R
              </label>
              <input
                id="red-value"
                ref={rRef}
                type="number"
                min={0}
                max={255}
                defaultValue={r}
                onChange={onChangeProperty('r', 255)}
                onKeyDown={onKeyDownProperty('r', 255)}
              />
            </div>
            <div className={stl.css('input-wrapper')}>
              <label htmlFor="green-value" className={stl.css('input-label')}>
                G
              </label>
              <input
                id="green-value"
                ref={gRef}
                type="number"
                min={0}
                max={255}
                defaultValue={g}
                onChange={onChangeProperty('g', 255)}
                onKeyDown={onKeyDownProperty('g', 255)}
              />
            </div>
            <div className={stl.css('input-wrapper')}>
              <label htmlFor="blue-value" className={stl.css('input-label')}>
                B
              </label>
              <input
                id="blue-value"
                ref={bRef}
                type="number"
                min={0}
                max={255}
                defaultValue={b}
                onChange={onChangeProperty('b', 255)}
                onKeyDown={onKeyDownProperty('b', 255)}
              />
            </div>
          </>
        ) : (
          <>
            <div className={stl.css('input-wrapper')}>
              <label htmlFor="hue-value" className={stl.css('input-label')}>
                H
              </label>
              <input
                id="hue-value"
                ref={hRef}
                type="number"
                min={0}
                max={360}
                defaultValue={h}
                onChange={onChangeProperty('h', 360)}
                onKeyDown={onKeyDownProperty('h', 360)}
              />
            </div>
            <div className={stl.css('input-wrapper')}>
              <label htmlFor="saturation-value" className={stl.css('input-label')}>
                S
              </label>
              <input
                id="saturation-value"
                ref={sRef}
                type="number"
                min={0}
                max={100}
                step={1}
                defaultValue={s}
                onChange={onChangeProperty('s', 100)}
                onKeyDown={onKeyDownProperty('s', 100)}
              />
            </div>
            <div className={stl.css('input-wrapper')}>
              <label htmlFor="value-value" className={stl.css('input-label')}>
                V
              </label>
              <input
                id="value-value"
                ref={vRef}
                type="number"
                min={0}
                max={100}
                defaultValue={v}
                onChange={onChangeProperty('v', 100)}
                onKeyDown={onKeyDownProperty('v', 100)}
              />
            </div>
          </>
        )}
      </div>
      <div className={stl.css('hex-alpha-wrapper')}>
        <div className={stl.cssCase('input-wrapper', true, 'hex', true)}>
          <label htmlFor="hex-value" className={stl.css('input-label')}>
            HEX
          </label>
          <input
            id="hex-value"
            ref={hexRef}
            defaultValue={hex}
            onChange={onChangeHex}
            onBlur={onBlurHex}
          />
        </div>
        {!disableOpacity && (
          <div className={stl.cssCase('input-wrapper', true)}>
            <label htmlFor="alpha-value" className={stl.css('input-label')}>
              A
            </label>
            <input
              id="alpha-value"
              ref={alphaRef}
              type="number"
              min={0}
              step={1}
              max={100}
              defaultValue={alpha === 'multiple' ? '' : alpha}
              onChange={onChangeProperty('alpha', 100)}
              onKeyDown={onKeyDownProperty('alpha', 100)}
            />
          </div>
        )}
      </div>
    </div>
  );
};
