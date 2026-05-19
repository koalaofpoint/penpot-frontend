// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as stl from 'app/main/style';
import * as d from 'app/common/data';
import * as dm from 'app/common/data/macros';
import * as mth from 'app/common/math';
import * as cc from 'app/common/types/color';
import * as typesFills from 'app/common/types/fills';
import * as features from 'app/main/features';
import { NumericInput } from 'app/main/ui/components/numeric-input';
import { ReorderHandler } from 'app/main/ui/components/reorder-handler';
import { Select } from 'app/main/ui/components/select';
import { IconButton } from 'app/main/ui/ds/buttons/icon-button';
import * as i from 'app/main/ui/ds/foundations/assets/icon';
import * as fmt from 'app/main/ui/formats';
import * as h from 'app/main/ui/hooks';
import * as dom from 'app/util/dom';
import * as str from 'cuerdas.core';
import React, { useCallback, useMemo, useRef, useState } from 'react';

const offsetToString = (opacity: number): string => {
  return str.toString(fmt.formatNumber(opacity * 100));
};

const eventToOffset = (event: React.PointerEvent): number => {
  const nativeEvent = event.nativeEvent as PointerEvent;
  return nativeEvent.offsetX /
    (event.currentTarget as HTMLElement).getBoundingClientRect().width;
};

const formatRgb = ({ r, g, b, offset }: any): string => {
  return str.ffmt('rgb(%1, %2, %3) %4%%', r, g, b, offset * 100);
};

const gradientToString = (stops: any[]): string => {
  const sorted = [...stops].sort((a, b) => a.offset - b.offset);
  const formatted = sorted.map(({ color, opacity, offset }) => {
    const [r, g, b] = cc.hexToRgb(color);
    return { r, g, b, alpha: opacity, offset };
  });
  const rgbStrings = formatted.map(formatRgb);
  return str.ffmt('linear-gradient(90deg, %1)', rgbStrings.join(', '));
};

const stopToHexColor = (stop: any) =>
  Object.keys(stop)
    .filter((k) => ['color', 'opacity'].includes(k))
    .reduce((acc, k) => ({ ...acc, [k]: stop[k] }), {});

interface Stop {
  color: string;
  opacity: number;
  offset: number;
  r?: number;
  g?: number;
  b?: number;
}

interface StopInputRowProps {
  stop: Stop;
  index: number;
  isSelected: boolean;
  onSelectStop: (index: number) => void;
  onChangeStop: (stop: Stop, newStop: Partial<Stop>) => void;
  onRemoveStop: (index: number) => void;
  onReorderStops: (fromIndex: number, toIndex: number) => void;
  onFocusStopOffset?: () => void;
  onBlurStopOffset?: () => void;
  onFocusStopColor?: () => void;
  onBlurStopColor?: () => void;
}

const StopInputRow: React.FC<StopInputRowProps> = ({
  stop,
  index,
  isSelected,
  onSelectStop,
  onChangeStop,
  onRemoveStop,
  onReorderStops,
  onFocusStopOffset,
  onBlurStopOffset,
  onFocusStopColor,
  onBlurStopColor,
}) => {
  const { color, opacity, offset } = stop;

  const handleChangeStopColor = useCallback(
    (value: any) => {
      onChangeStop(stop, { color: value.color, opacity: value.opacity });
    },
    [stop, onChangeStop]
  );

  const handleChangeOffset = useCallback(
    (value: number) => {
      onChangeStop(stop, { offset: mth.precision(value / 100, 2) });
    },
    [stop, onChangeStop]
  );

  const handleRemoveStop = useCallback(() => {
    onRemoveStop(index);
  }, [index, onRemoveStop]);

  const handleFocusStopOffset = useCallback(() => {
    onSelectStop(index);
    onFocusStopOffset?.();
  }, [index, onSelectStop, onFocusStopOffset]);

  const handleBlurStopOffset = useCallback(() => {
    onSelectStop(index);
    onBlurStopOffset?.();
  }, [index, onSelectStop, onBlurStopOffset]);

  const handleFocusStopColor = useCallback(() => {
    onSelectStop(index);
    onFocusStopColor?.();
  }, [index, onSelectStop, onFocusStopColor]);

  const handleBlurStopColor = useCallback(() => {
    onSelectStop(index);
    onBlurStopColor?.();
  }, [index, onSelectStop, onBlurStopColor]);

  const onDrop = useCallback(
    (position: string, data: any) => {
      const fromIndex = data.index;
      const toIndex = position === 'bot' ? index + 1 : index;
      onReorderStops(fromIndex, toIndex);
    },
    [index, onReorderStops]
  );

  const dprops = h.useSortable({
    dataType: 'penpot/stops',
    onDrop,
    data: { index },
    draggable: true,
  });

  return (
    <div
      className={stl.cssCase(
        'gradient-stops-entry',
        true,
        'is-selected',
        isSelected,
        'dnd-over',
        dprops.over === 'center',
        'dnd-over-top',
        dprops.over === 'top',
        'dnd-over-bot',
        dprops.over === 'bot'
      )}
    >
      <ReorderHandler />

      <div className={stl.css('offset-input-wrapper')}>
        <span className={stl.css('icon-text')}>%</span>
        <NumericInput
          value={offsetToString(offset)}
          onChange={handleChangeOffset}
          defaultValue={100}
          min={0}
          max={100}
          onFocus={handleFocusStopOffset}
          onBlur={handleBlurStopOffset}
        />
      </div>

      <div className={stl.css('color-input-wrapper')}>
        {/* Color row would go here - simplified for now */}
      </div>
    </div>
  );
};

interface GradientsProps {
  type: 'linear-gradient' | 'radial-gradient';
  stops: Stop[];
  editingStop: number | null;
  onSelectStop: (index: number) => void;
  onChangeType: (type: 'linear-gradient' | 'radial-gradient') => void;
  onChangeStop: (stop: Stop, newStop: Partial<Stop>) => void;
  onAddStopPreview: (offset: number) => void;
  onAddStopAuto: () => void;
  onRemoveStop: (index: number) => void;
  onStopEditStart: () => void;
  onStopEditFinish: () => void;
  onReverseStops: () => void;
  onRotateStops: () => void;
  onReorderStops: (fromIndex: number, toIndex: number) => void;
}

export const Gradients: React.FC<GradientsProps> = ({
  type,
  stops,
  editingStop,
  onSelectStop,
  onChangeType,
  onChangeStop,
  onAddStopPreview,
  onAddStopAuto,
  onRemoveStop,
  onStopEditStart,
  onStopEditFinish,
  onReverseStops,
  onRotateStops,
  onReorderStops,
}) => {
  const [previewState, setPreviewState] = useState(() => ({
    hover: false,
    offset: 0.5,
  }));
  const draggingRef = useRef(false);
  const startRef = useRef<{ x: number; y: number } | null>(null);
  const startOffsetRef = useRef<number | null>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  const handleSelectStop = useCallback(
    (event: React.MouseEvent) => {
      const index = dom.getData(event.currentTarget, 'index');
      const parsed = d.readString(index);
      if (onSelectStop && parsed !== null) {
        onSelectStop(parsed);
      }
    },
    [onSelectStop]
  );

  const handleChangeType = useCallback(
    (event: React.MouseEvent | any) => {
      const value = dom.getTargetVal(event);
      if (onChangeType) {
        onChangeType(value);
      }
    },
    [onChangeType]
  );

  const handleAddStop = useCallback(() => {
    if (onAddStopAuto) {
      onAddStopAuto();
    }
  }, [onAddStopAuto]);

  const handlePreviewEnter = useCallback(() => {
    setPreviewState((s) => ({ ...s, hover: true }));
  }, []);

  const handlePreviewLeave = useCallback(() => {
    setPreviewState((s) => ({ ...s, hover: false }));
  }, []);

  const handlePreviewMove = useCallback(
    (e: React.PointerEvent) => {
      const offset = eventToOffset(e);
      setPreviewState((s) => ({ ...s, offset: mth.precision(offset, 2) }));
    },
    []
  );

  const handlePreviewDown = useCallback(
    (e: React.PointerEvent) => {
      const offset = eventToOffset(e);
      if (onAddStopPreview) {
        onAddStopPreview(mth.precision(offset, 2));
      }
    },
    [onAddStopPreview]
  );

  const handleStopMarkerPointerDown = useCallback(
    (event: React.PointerEvent) => {
      const index = dom.getData(event.currentTarget, 'index');
      const parsedIndex = d.readString(index);
      if (parsedIndex === null) return;

      const stop = stops[parsedIndex];
      dom.capturePointer(event);
      handleSelectStop(event as unknown as React.MouseEvent);
      draggingRef.current = true;
      startRef.current = dom.getClientPosition(event);
      startOffsetRef.current = stop.offset;
      if (onStopEditStart) {
        onStopEditStart();
      }
    },
    [handleSelectStop, stops, onStopEditStart]
  );

  const handleStopMarkerPointerMove = useCallback(
    (event: React.PointerEvent) => {
      if (!draggingRef.current || !startRef.current) return;

      const index = dom.getData(event.target as HTMLElement, 'index');
      const parsedIndex = d.readString(index);
      if (parsedIndex === null) return;

      const currentPt = dom.getClientPosition(event);
      const deltaX = currentPt.x - startRef.current.x;
      const backgroundNode = backgroundRef.current;
      if (!backgroundNode) return;

      const backgroundWidth = backgroundNode.getBoundingClientRect().width;
      const deltaOffset = deltaX / backgroundWidth;
      const stop = stops[parsedIndex];
      const newOffset = mth.precision(
        mth.clamp((startOffsetRef.current || 0) + deltaOffset, 0, 1),
        2
      );
      onChangeStop(stop, { offset: newOffset });
    },
    [stops, onChangeStop]
  );

  const handleStopMarkerLostPointerCapture = useCallback(
    (event: React.PointerEvent) => {
      dom.releasePointer(event);
      draggingRef.current = false;
      startRef.current = null;
      if (onStopEditFinish) {
        onStopEditFinish();
      }
    },
    [onStopEditFinish]
  );

  const handleRotateGradient = useCallback(() => {
    if (onRotateStops) {
      onRotateStops();
    }
  }, [onRotateStops]);

  const handleReverseGradient = useCallback(() => {
    if (onReverseStops) {
      onReverseStops();
    }
  }, [onReverseStops]);

  const capStops = features.useFeature('render-wasm/v1');
  const addStopDisabled = capStops && stops.length >= typesFills.MAX_GRADIENT_STOPS;

  return (
    <div className={stl.css('gradient-panel')}>
      <div className={stl.css('gradient-preview')}>
        <div
          ref={backgroundRef}
          className={stl.css('gradient-background')}
          style={{ background: gradientToString(stops) }}
          onPointerEnter={handlePreviewEnter}
          onPointerLeave={handlePreviewLeave}
          onPointerMove={handlePreviewMove}
          onPointerDown={handlePreviewDown}
        >
          {!addStopDisabled && previewState.hover && (
            <div
              className={stl.css('gradient-preview-stop-preview')}
              style={{
                display: 'block',
                '--preview-position': `${previewState.offset * 100}%`,
              } as React.CSSProperties}
            />
          )}
        </div>

        <div className={stl.css('gradient-preview-stop-wrapper')}>
          {stops.map((stop, index) => (
            <div key={`preview-stop-${index}`}>
              <div
                className={stl.cssCase(
                  'gradient-preview-stop',
                  true,
                  'is-selected',
                  editingStop === index
                )}
                style={{
                  '--color-solid': stop.color,
                  '--color-alpha': str.ffmt(
                    'rgba(%1, %2, %3, %4)',
                    stop.r || 0,
                    stop.g || 0,
                    stop.b || 0,
                    stop.opacity
                  ),
                  '--position': `${stop.offset * 100}%`,
                } as React.CSSProperties}
                data-index={index}
                onPointerDown={handleStopMarkerPointerDown}
                onPointerMove={handleStopMarkerPointerMove}
                onLostPointerCapture={handleStopMarkerLostPointerCapture}
              >
                <div
                  className={stl.css('gradient-preview-stop-color')}
                  style={{ pointerEvents: 'none' }}
                />
                <div
                  className={stl.css('gradient-preview-stop-alpha')}
                  style={{ pointerEvents: 'none' }}
                />
              </div>
              <div
                className={stl.css('gradient-preview-stop-decoration')}
                style={{ '--position': `${stop.offset * 100}%` } as React.CSSProperties}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={stl.css('gradient-options')}>
        <Select
          defaultValue={type}
          options={[
            { value: 'linear-gradient', label: 'Linear' },
            { value: 'radial-gradient', label: 'Radial' },
          ]}
          onChange={handleChangeType}
          className={stl.css('gradient-options-select')}
        />

        <div className={stl.css('gradient-options-buttons')}>
          <IconButton
            variant="ghost"
            aria-label="Rotate gradient"
            onClick={handleRotateGradient}
            iconClass={stl.css('rotate-icon')}
            icon={i.reload}
          />
          <IconButton
            variant="ghost"
            aria-label="Reverse gradient"
            onClick={handleReverseGradient}
            icon={i.switch}
          />
          <IconButton
            variant="ghost"
            aria-label="Add stop"
            disabled={addStopDisabled}
            onClick={handleAddStop}
            icon={i.add}
          />
        </div>
      </div>

      <div className={stl.css('gradient-stops-list')}>
        <h.SortableContainer>
          {stops.map((stop, index) => (
            <StopInputRow
              key={index}
              stop={stop}
              index={index}
              isSelected={editingStop === index}
              onSelectStop={onSelectStop}
              onChangeStop={onChangeStop}
              onRemoveStop={onRemoveStop}
              onFocusStopOffset={onStopEditStart}
              onBlurStopOffset={onStopEditFinish}
              onFocusStopColor={onStopEditStart}
              onBlurStopColor={onStopEditFinish}
              onReorderStops={onReorderStops}
            />
          ))}
        </h.SortableContainer>
      </div>

      <hr className={stl.css('gradient-separator')} />
    </div>
  );
};
