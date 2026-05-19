// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as stl from 'app/main/style';
import * as d from 'app/common/data';
import * as dm from 'app/common/data/macros';
import * as gmt from 'app/common/geom/matrix';
import * as gpt from 'app/common/geom/point';
import * as cc from 'app/common/types/color';
import * as typesFills from 'app/common/types/fills';
import * as ctob from 'app/common/types/tokens-lib';
import * as cfg from 'app/config';
import * as ev from 'app/main/data/event';
import * as modal from 'app/main/data/modal';
import * as dsc from 'app/main/data/shortcuts';
import * as dc from 'app/main/data/workspace/colors';
import * as dwl from 'app/main/data/workspace/libraries';
import * as dwm from 'app/main/data/workspace/media';
import * as dwu from 'app/main/data/workspace/undo';
import * as features from 'app/main/features';
import * as refs from 'app/main/refs';
import { emit, store } from 'app/main/store';
import { FileUploader } from 'app/main/ui/components/file-uploader';
import { NumericInput } from 'app/main/ui/components/numeric-input';
import { RadioButtons, RadioButton } from 'app/main/ui/components/radio-buttons';
import { Select } from 'app/main/ui/components/select';
import * as i from 'app/main/ui/ds/foundations/assets/icon';
import { TabSwitcher } from 'app/main/ui/ds/layout/tab-switcher';
import * as hooks from 'app/main/ui/hooks';
import * as deprecatedIcon from 'app/main/ui/icons';
import { ColorInputs } from 'app/main/ui/workspace/colorpicker/color-inputs';
import { TokenSection } from 'app/main/ui/workspace/colorpicker/color-tokens';
import { Gradients } from 'app/main/ui/workspace/colorpicker/gradients';
import { HarmonySelector } from 'app/main/ui/workspace/colorpicker/harmony';
import { HSVASelector } from 'app/main/ui/workspace/colorpicker/hsva';
import { Libraries } from 'app/main/ui/workspace/colorpicker/libraries';
import { RampSelector } from 'app/main/ui/workspace/colorpicker/ramp';
import * as sc from 'app/main/ui/workspace/colorpicker/shortcuts';
import * as dom from 'app/util/dom';
import * as i18n from 'app/util/i18n';
import * as ts from 'app/util/timers';
import * as str from 'cuerdas.core';
import * as l from 'okulary.core';
import * as ptk from 'potok.v2.core';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

const { tr } = i18n;

const pickingColor = l.derived('picking-color?', refs.workspaceGlobal);
const pickedColor = l.derived('picked-color', refs.workspaceGlobal);
const pickedColorSelect = l.derived('picked-color-select', refs.workspaceGlobal);
const viewport = l.derived('vport', refs.workspaceLocal);

const opacityToString = (opacity: any): string => {
  if (opacity !== 'multiple') {
    return str.toString(Math.round(d.coalesce(opacity, 1) * 100));
  }
  return 'multiple';
};

const useColorPickerCssVariables = (
  nodeRef: React.RefObject<HTMLDivElement>,
  currentColor: any
) => {
  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const { r, g, b, h, v } = currentColor;
    const rgb = [r, g, b];
    const hueRgb = cc.hsvToRgb([h, 1.0, 255]);
    const hslFrom = cc.hsvToHsl([h, 0.0, v]);
    const hslTo = cc.hsvToHsl([h, 1.0, v]);

    const formatHsl = ([h, s, l]: number[]) =>
      str.fmt('hsl(%s, %s, %s)', h, str(`${s * 100}%`), str(`${l * 100}%`));

    dom.setCssProperty(node, '--color', rgb.join(', '));
    dom.setCssProperty(node, '--hue-rgb', hueRgb.join(', '));
    dom.setCssProperty(
      node,
      '--saturation-grad-from',
      formatHsl(hslFrom)
    );
    dom.setCssProperty(node, '--saturation-grad-to', formatHsl(hslTo));
  }, [nodeRef, currentColor]);
};

interface ColorpickerProps {
  data: any;
  disableGradient?: boolean;
  disableOpacity?: boolean;
  disableImage?: boolean;
  onChange?: (color: any) => void;
  onAccept?: (color: any) => void;
  origin?: any;
  combinedTokens?: any[];
  colorOrigin?: any;
  onTokenChange?: (event: any, token: any) => void;
  tab?: string;
  appliedToken?: any;
}

export const Colorpicker: React.FC<ColorpickerProps> = ({
  data,
  disableGradient,
  disableOpacity,
  disableImage,
  onChange,
  onAccept,
  origin,
  combinedTokens,
  colorOrigin,
  onTokenChange,
  tab,
  appliedToken,
}) => {
  const state = refs.colorpicker;
  const nodeRef = useRef<HTMLDivElement>(null);

  const shouldUpdate = useRef(true);
  const tokenColor = cfg.flags.includes('token-color');
  const [colorStyle, setColorStyle] = useState<'direct-color' | 'token-color'>(
    (d.nilv(tab, 'direct-color') as any) || 'direct-color'
  );

  const picking = store.getState(pickingColor);
  const picked = store.getState(pickedColor);
  const pickedSelect = store.getState(pickedColorSelect);

  const currentColor = state?.currentColor || {};

  const activeFillTab = data?.image
    ? 'image'
    : data?.gradient
    ? data.gradient.type === 'linear'
      ? 'linear-gradient'
      : 'radial-gradient'
    : 'color';

  const [activeColorTab, setActiveColorTab] = usePersistedState('ramp', 'color-tab');
  const [drag, setDrag] = useState(false);

  const type = activeColorTab === 'hsva' ? 'hsv' : 'rgb';
  const fillImageRef = useRef<HTMLInputElement>(null);

  const colorType = state?.type || 'color';
  const selectedMode =
    colorType === 'linear-gradient' || colorType === 'radial-gradient'
      ? 'gradient'
      : colorType;

  const disabledColorAccept =
    selectedMode === 'image' && !currentColor?.image;

  const onFillImageSuccess = useCallback(
    (image: any) => {
      const imageData = {
        id: image.id,
        width: image.width,
        height: image.height,
        mtype: image.mtype,
        name: image.name,
        keepAspectRatio: true,
      };
      emit(
        dc.updateColorpickerColor({ image: imageData }, !drag)
      );
    },
    [drag]
  );

  const onFillImageClick = useCallback(() => {
    dom.click(fillImageRef.current);
  }, []);

  const onFillImageSelected = useCallback(
    (file: File) => {
      emit(dwm.uploadFillImage(file, onFillImageSuccess));
    },
    [onFillImageSuccess]
  );

  const handleChangeKeepAspectRatio = useCallback(() => {
    const keepAspectRatio = !currentColor?.image?.keepAspectRatio;
    const image = { ...currentColor.image, keepAspectRatio };
    emit(
      dc.updateColorpickerColor({ image }, true),
      ptk.dataEvent(ev.event, {
        name: 'toggle-image-aspect-ratio',
        origin: 'workspace:colorpicker',
        checked: keepAspectRatio,
      })
    );
  }, [currentColor]);

  const onChangeTab = useCallback((tab: string) => {
    setActiveColorTab(tab);
  }, [setActiveColorTab]);

  const handleChangeMode = useCallback(
    (value: any) => {
      switch (value) {
        case 'color':
          emit(dc.activateColorpickerColor());
          break;
        case 'gradient':
          emit(dc.activateColorpickerGradient('linear-gradient'));
          break;
        case 'image':
          emit(dc.activateColorpickerImage());
          break;
      }
    },
    []
  );

  const handleChangeColor = useCallback(
    (color: any) => {
      const merged = { ...currentColor, ...color };
      const materialized = dc.materializeColorComponents(merged);
      emit(dc.updateColorpickerColor(materialized, !drag));
    },
    [currentColor, drag]
  );

  const handleClickPicker = useCallback(() => {
    if (picking) {
      modal.disallowClickOutside();
      emit(dc.stopPicker());
    } else {
      modal.allowClickOutside();
      emit(dc.startPicker());
    }
  }, [picking]);

  const onSelectLibraryColor = useCallback(
    (_: any, color: any) => {
      if (color.color && data?.gradient) {
        handleChangeColor({ hex: color.color, alpha: color.opacity });
      } else {
        const cleaned = d.withoutQualified(color);
        emit(dwl.addRecentColor(cleaned), dc.applyColorFromColorpicker(cleaned));
        onChange?.(cleaned);
      }
    },
    [data, handleChangeColor, onChange]
  );

  const onAddLibraryColor = useCallback(() => {
    emit(dwl.addColor(dc.getColorFromColorpickerState(state)));
  }, [state]);

  const onStartDrag = useCallback(() => {
    shouldUpdate.current = false;
    setDrag(true);
    emit(dwu.startUndoTransaction(nodeRef.current));
  }, []);

  const onFinishDrag = useCallback(() => {
    shouldUpdate.current = true;
    setDrag(false);
    emit(dwu.commitUndoTransaction(nodeRef.current));
  }, []);

  const onColorAccept = useCallback(() => {
    onAccept?.(dc.getColorFromColorpickerState(state));
    modal.hide();
  }, [state, onAccept]);

  const options = useMemo(
    () =>
      d.concatVec(
        [{ value: 'color', label: tr('media.solid') }],
        !disableGradient
          ? [{ value: 'gradient', label: tr('media.gradient') }]
          : [],
        !disableImage
          ? [{ value: 'image', label: tr('media.image') }]
          : []
      ),
    [disableGradient, disableImage]
  );

  const handleChangeGradientSelectedStop = useCallback(
    (index: number) => {
      emit(dc.selectColorpickerGradientStop(index));
    },
    []
  );

  const handleChangeGradientType = useCallback(
    (type: string) => {
      emit(dc.activateColorpickerGradient(type as any));
    },
    []
  );

  const handleGradientChangeStop = useCallback(
    (prevStop: any, newStop: any) => {
      const stops = state.stops.map((s: any) =>
        s === prevStop ? newStop : s
      );
      emit(dc.updateColorpickerStops(stops));
    },
    [state]
  );

  const handleGradientAddStopAuto = useCallback(() => {
    emit(dc.updateColorpickerAddAuto());
  }, []);

  const handleGradientAddStopPreview = useCallback(
    (offset: number) => {
      emit(dc.updateColorpickerAddStop(offset));
    },
    []
  );

  const handleGradientRemoveStop = useCallback(
    (index: number) => {
      emit(dc.removeGradientStop(index));
    },
    []
  );

  const handleStopEditStart = useCallback(() => {
    shouldUpdate.current = false;
  }, []);

  const handleStopEditFinish = useCallback(() => {
    shouldUpdate.current = true;
    ts.schedule(() => emit(dc.sortColorpickerStops()));
  }, []);

  const handleRotateStops = useCallback(() => {
    const gradient = state.gradient;
    const mtx = gmt.rotateMatrix(90, gpt.point(0.5, 0.5));
    const startP = gpt.transform(
      gpt.point(gradient.startX, gradient.startY),
      mtx
    );
    const endP = gpt.transform(
      gpt.point(gradient.endX, gradient.endY),
      mtx
    );
    emit(
      dc.updateColorpickerGradient({
        startX: startP.x,
        startY: startP.y,
        endX: endP.x,
        endY: endP.y,
      })
    );
  }, [state]);

  const handleReverseStops = useCallback(() => {
    const stops = state.stops
      .map((s: any) => ({ ...s, offset: 1 - s.offset }))
      .sort((a: any, b: any) => a.offset - b.offset);
    emit(dc.updateColorpickerStops(stops));
  }, [state]);

  const handleReorderStops = useCallback(
    (fromIndex: number, toIndex: number) => {
      const stops = state.stops;
      const [removed] = stops.splice(fromIndex, 1);
      stops.splice(toIndex, 0, removed);
      const reordered = stops.map((s: any, i: number) => ({
        ...s,
        offset: stops[i].offset,
      }));
      emit(dc.updateColorpickerStops(reordered));
    },
    [state]
  );

  const handleChangeGradientOpacity = useCallback(
    (value: number) => {
      emit(dc.updateColorpickerGradientOpacity(value / 100));
    },
    []
  );

  const renderWasm = features.useFeature('render-wasm/v1');

  const tabs = [
    {
      ariaLabel: tr('workspace.libraries.colors.rgba'),
      icon: i.rgba,
      id: 'ramp',
    },
    {
      ariaLabel: 'Harmony',
      icon: i.rgbaComplementary,
      id: 'harmony',
    },
    {
      ariaLabel: 'HSVA',
      icon: i.hsva,
      id: 'hsva',
    },
  ];

  const showTokens = ['fill', 'stroke-color', 'color-selection'].includes(
    colorOrigin
  );

  useEffect(() => {
    emit(dc.initializeColorpicker(onChange, activeFillTab));
    return () => {
      emit(dc.finalizeColorpicker());
    };
  }, []);

  useEffect(() => {
    if (shouldUpdate.current) {
      emit(dc.updateColorpicker(data));
    }
  }, [data]);

  useColorPickerCssVariables(nodeRef, currentColor);

  useEffect(() => {
    if (picking && picked && pickedSelect) {
      const [r, g, b, alpha] = picked;
      const hex = cc.rgbToHex([r, g, b]);
      const [h, s, v] = cc.hexToHsv(hex);
      handleChangeColor({ hex, r, g, b, h, s, v, alpha: alpha / 255 });
    }
  }, [picking, picked, pickedSelect]);

  const toggleTokenColor = useCallback(() => {
    setColorStyle((s) =>
      s === 'direct-color' ? 'token-color' : 'direct-color'
    );
  }, []);

  return (
    <>
      <div
        ref={nodeRef}
        className={stl.css('colorpicker')}
        style={{ touchAction: 'none' }}
      >
        <div className={stl.css('top-actions')}>
          <div className={stl.css('top-actions-right')}>
            {colorStyle === 'direct-color' && selectedMode === 'gradient' && (
              <div className={stl.css('opacity-input-wrapper')}>
                <span className={stl.css('icon-text')}>%</span>
                <NumericInput
                  value={opacityToString(data?.opacity)}
                  onChange={handleChangeGradientOpacity}
                  defaultValue={100}
                  min={0}
                  max={100}
                  dataTestid="opacity-global-input"
                />
              </div>
            )}

            {colorStyle === 'direct-color' &&
              (!disableGradient || !disableImage) && (
                <div className={stl.css('select')}>
                  <Select
                    defaultValue={selectedMode}
                    options={options}
                    onChange={handleChangeMode}
                  />
                </div>
              )}

            {origin === 'sidebar' && showTokens && tokenColor && (
              <RadioButtons
                selected={colorStyle}
                onChange={toggleTokenColor}
                name="color-style"
              >
                <RadioButton
                  icon={i.swatches}
                  value="direct-color"
                  title={tr('labels.color')}
                  id="opt-color"
                />
                <RadioButton
                  icon={i.tokens}
                  value="token-color"
                  title={tr('workspace.colorpicker.color-tokens')}
                  id="opt-token-color"
                />
              </RadioButtons>
            )}
          </div>

          {selectedMode !== 'image' && colorStyle === 'direct-color' && (
            <button
              className={stl.cssCase(
                'picker-btn',
                true,
                'selected',
                picking
              )}
              onClick={handleClickPicker}
            >
              {deprecatedIcon.picker}
            </button>
          )}

          {colorStyle === 'token-color' && (
            <div className={stl.css('token-color-title')}>
              {tr('workspace.colorpicker.color-tokens')}
            </div>
          )}
        </div>

        {colorStyle === 'direct-color' ? (
          <>
            {selectedMode === 'gradient' && (
              <Gradients
                type={state?.type}
                stops={
                  renderWasm
                    ? (state?.stops || []).slice(0, typesFills.MAX_GRADIENT_STOPS)
                    : state?.stops || []
                }
                editingStop={state?.editingStop}
                onStopEditStart={handleStopEditStart}
                onStopEditFinish={handleStopEditFinish}
                onSelectStop={handleChangeGradientSelectedStop}
                onChangeType={handleChangeGradientType}
                onChangeStop={handleGradientChangeStop}
                onAddStopAuto={handleGradientAddStopAuto}
                onAddStopPreview={handleGradientAddStopPreview}
                onRemoveStop={handleGradientRemoveStop}
                onRotateStops={handleRotateStops}
                onReverseStops={handleReverseStops}
                onReorderStops={handleReorderStops}
              />
            )}

            {selectedMode === 'image' ? (
              <div className={stl.css('select-image')}>
                <div className={stl.css('content')}>
                  {currentColor?.image && (
                    <img
                      src={cfg.resolveFileMedia(currentColor.image)}
                      alt=""
                    />
                  )}
                </div>

                {currentColor?.image && (
                  <div className={stl.css('checkbox-option')}>
                    <label
                      htmlFor="keep-aspect-ratio"
                      className={stl.cssCase(
                        'global/checked',
                        currentColor?.image?.keepAspectRatio
                      )}
                    >
                      <span
                        className={stl.cssCase(
                          'global/checked',
                          currentColor?.image?.keepAspectRatio
                        )}
                      >
                        {currentColor?.image?.keepAspectRatio &&
                          deprecatedIcon.statusTick}
                      </span>
                      {tr('media.keep-aspect-ratio')}
                      <input
                        type="checkbox"
                        id="keep-aspect-ratio"
                        checked={currentColor?.image?.keepAspectRatio}
                        onChange={handleChangeKeepAspectRatio}
                      />
                    </label>
                  </div>
                )}
                <button
                  className={stl.css('choose-image')}
                  title={tr('media.choose-image')}
                  aria-label={tr('media.choose-image')}
                  onClick={onFillImageClick}
                >
                  {tr('media.choose-image')}
                  <FileUploader
                    inputId="fill-image-upload"
                    accept="image/jpeg,image/png"
                    multi={false}
                    ref={fillImageRef}
                    onSelected={onFillImageSelected}
                  />
                </button>
              </div>
            ) : (
              <>
                <div className={stl.css('colorpicker-tabs')}>
                  <TabSwitcher
                    tabs={tabs}
                    selected={activeColorTab}
                    onChange={onChangeTab}
                  >
                    {picking ? (
                      <div className={stl.css('picker-detail-wrapper')}>
                        <div className={stl.css('center-circle')} />
                        <canvas
                          id="picker-detail"
                          className={stl.css('picker-detail')}
                          width={256}
                          height={140}
                        />
                      </div>
                    ) : (
                      <>
                        {activeColorTab === 'ramp' && (
                          <RampSelector
                            color={currentColor}
                            disableOpacity={disableOpacity}
                            onChange={handleChangeColor}
                            onStartDrag={onStartDrag}
                            onFinishDrag={onFinishDrag}
                          />
                        )}

                        {activeColorTab === 'harmony' && (
                          <HarmonySelector
                            color={currentColor}
                            disableOpacity={disableOpacity}
                            onChange={handleChangeColor}
                            onStartDrag={onStartDrag}
                          />
                        )}

                        {activeColorTab === 'hsva' && (
                          <HSVASelector
                            color={currentColor}
                            disableOpacity={disableOpacity}
                            onChange={handleChangeColor}
                            onStartDrag={onStartDrag}
                            onFinishDrag={onFinishDrag}
                          />
                        )}
                      </>
                    )}
                  </TabSwitcher>
                </div>

                <ColorInputs
                  type={type}
                  disableOpacity={disableOpacity}
                  color={currentColor}
                  onChange={handleChangeColor}
                />

                <Libraries
                  state={state}
                  currentColor={currentColor}
                  disableGradient={disableGradient}
                  disableOpacity={disableOpacity}
                  disableImage={disableImage}
                  onSelectColor={onSelectLibraryColor}
                  onAddLibraryColor={onAddLibraryColor}
                />
              </>
            )}
          </>
        ) : (
          <TokenSection
            combinedTokens={combinedTokens}
            onTokenChange={onTokenChange}
            appliedToken={appliedToken}
            colorOrigin={colorOrigin}
          />
        )}
      </div>

      {typeof onAccept === 'function' && (
        <div className={stl.css('actions')}>
          <button
            className={stl.cssCase('accept-color', true, 'btn-disabled', disabledColorAccept)}
            onClick={onColorAccept}
            disabled={disabledColorAccept}
          >
            {tr('workspace.libraries.colors.save-color')}
          </button>
        </div>
      )}
    </>
  );
};

const calculatePosition = (
  vport: any,
  position: any,
  x: number,
  y: number,
  gradient: any
) => {
  const h = gradient ? 820 : 510;
  const w = 284;
  const maxY = vport.height - h;
  const rulers = false;
  const leftOffset = rulers ? 40 : 18;
  const rightOffset = w + 40;
  const topOffset = `${y - 70}px`;
  const bottomOffset = '1rem';
  const maxHeightTop = `calc(100vh - ${topOffset})`;
  const maxHeightBottom = `calc(100vh - ${bottomOffset})`;

  if (x === null || y === null) {
    return { left: 'auto', right: '16rem', top: '4rem', maxHeight: 'calc(100vh - 4rem)' };
  }

  if (position === 'left') {
    if (y > maxY) {
      return {
        left: `${x - rightOffset}px`,
        bottom: bottomOffset,
        maxHeight: maxHeightBottom,
      };
    }
    return {
      left: `${x - rightOffset}px`,
      top: topOffset,
      maxHeight: maxHeightTop,
    };
  }

  if (position === 'right') {
    if (y > maxY) {
      return {
        left: `${x + 80}px`,
        bottom: bottomOffset,
        maxHeight: maxHeightBottom,
      };
    }
    return {
      left: `${x + 80}px`,
      top: topOffset,
      maxHeight: maxHeightTop,
    };
  }

  if (y > maxY) {
    return {
      left: `${x + leftOffset}px`,
      bottom: bottomOffset,
      maxHeight: maxHeightBottom,
    };
  }
  return {
    left: `${x + leftOffset}px`,
    top: topOffset,
    maxHeight: maxHeightTop,
  };
};

const groupSets = (sets: any[]): any[] => {
  return sets
    .map((s) => {
      const parts = s.set?.split('/') || [];
      if (parts.length === 0) return null;
      const group = parts.slice(0, -1).join('/') || null;
      const name = parts[parts.length - 1];
      return { ...s, group, name };
    })
    .filter(Boolean);
};

const usePersistedState = (initialValue: any, key: string) => {
  const [value, setValue] = useState(initialValue);
  return [value, setValue];
};

interface ColorpickerModalProps {
  x?: number;
  y?: number;
  data?: any;
  position?: 'left' | 'right';
  disableGradient?: boolean;
  disableOpacity?: boolean;
  disableImage?: boolean;
  activeTokens?: any;
  onChange?: (color: any) => void;
  origin?: any;
  colorOrigin?: any;
  onTokenChange?: (event: any, token: any) => void;
  onClose?: (color: any) => void;
  tab?: string;
  appliedToken?: any;
  onAccept?: (color: any) => void;
}

export const ColorpickerModal: React.FC<ColorpickerModalProps> = ({
  x,
  y,
  data,
  position = 'left',
  disableGradient,
  disableOpacity,
  disableImage,
  activeTokens,
  onChange,
  origin,
  colorOrigin,
  onTokenChange,
  onClose,
  tab,
  appliedToken,
  onAccept,
}) => {
  const vport = store.getState(viewport);
  const dirty = useRef(false);
  const lastChange = useRef<any>(null);
  const resolvedPosition = d.nilv(position, 'left');
  const style = calculatePosition(vport, resolvedPosition, x, y, data?.gradient);

  const onChangeRef = useCallback(
    (newData: any) => {
      dirty.current = newData !== data;
      if (newData !== lastChange.current) {
        lastChange.current = newData;
        if (typeof onChange === 'function') {
          onChange(newData);
        } else {
          emit(dc.updateColorpicker(newData));
        }
      }
    },
    [data, onChange]
  );

  const tokensLib = store.getState(refs.tokensLib);

  const activeSetsNames = useMemo(() => {
    return tokensLib ? ctob.getActiveThemesSetNames(tokensLib) : null;
  }, [tokensLib]);

  const resolvedActiveTokens = activeTokens;

  const colorTokens = resolvedActiveTokens?.color;

  const groupedTokensBySet = useMemo(() => {
    if (!tokensLib) return [];
    const sets = ctob.getSets(tokensLib);
    const processedSets = sets.map((s: any) => ({
      set: ctob.getName(s),
      id: ctob.getId(s),
      tokens: Object.values(ctob.getTokens(s)),
    }));
    const filtered = processedSets.filter((s: any) =>
      activeSetsNames?.has(s.set)
    );
    return filtered;
  }, [tokensLib, activeSetsNames, colorTokens]);

  useEffect(() => {
    emit(dsc.pushShortcuts('colorpicker', sc.shortcuts));
    return () => {
      emit(dsc.popShortcuts('colorpicker'));
      if (dirty.current && lastChange.current && onClose) {
        onClose(lastChange.current);
      }
    };
  }, []);

  return (
    <div
      className={stl.css('colorpicker-tooltip')}
      data-testid="colorpicker"
      style={style}
    >
      <Colorpicker
        data={data}
        combinedTokens={groupedTokensBySet}
        disableGradient={disableGradient}
        disableOpacity={disableOpacity}
        disableImage={disableImage}
        onTokenChange={onTokenChange}
        appliedToken={appliedToken}
        onChange={onChangeRef}
        origin={origin}
        tab={tab}
        colorOrigin={colorOrigin}
        onAccept={onAccept}
      />
    </div>
  );
};
