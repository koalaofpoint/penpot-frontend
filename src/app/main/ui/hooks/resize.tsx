// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
// TODO: Import proper modules
// import * as d from '../../../common/data';
// import * as dm from '../../../common/data/macros';
// import * as gpt from '../../../common/geom/point';
// import * as mth from '../../../common/math';
// import * as ctx from '../../context';
// import * as dom from '../../../util/dom';
// import * as glob from '../../../util/globals';
// import * as storage from '../../../util/storage';

let lastResizeType: string | null = null;

export function setResizeType(type: string): void {
  lastResizeType = type;
}

interface UseResizeHookOptions {
  key: string;
  initial: number;
  minVal: number;
  maxVal: number | string;
  axis: "x" | "y";
  negate?: boolean;
  resizeType: "width" | "height";
  onChangeSize?: (size: number) => void;
  fileId?: string;
}

function getInitialState(initial: number, fileId?: string, key?: string): number {
  // TODO: Get from storage/user
  return initial;
}

function updatePersistentState(data: any, fileId?: string, key?: string, size?: number): any {
  // TODO: update-in data [::state file-id] assoc key size
  return data;
}

export interface UseResizeHookResult {
  onPointerDown: (event: React.PointerEvent) => void;
  onLostPointerCapture: (event: React.PointerEvent) => void;
  onPointerMove: (event: React.PointerEvent) => void;
  parentRef: React.RefObject<HTMLDivElement | null>;
  setSize: (newSize: number) => void;
  size: number;
}

export function useResizeHook({
  key,
  initial,
  minVal,
  maxVal,
  axis,
  negate = false,
  resizeType,
  onChangeSize,
  fileId
}: UseResizeHookOptions): UseResizeHookResult {
  const [currentSize, setCurrentSize] = React.useState<number>(
    () => getInitialState(initial, fileId, key)
  );

  const parentRef = React.useRef<HTMLDivElement | null>(null);
  const draggingRef = React.useRef(false);
  const startSizeRef = React.useRef<number | null>(null);
  const startRef = React.useRef<{ x: number; y: number } | null>(null);

  const [windowHeight, setWindowHeight] = React.useState(
    () => typeof window !== "undefined" ? window.innerHeight : 800
  );

  const parsedMaxVal = React.useMemo(() => {
    if (typeof maxVal === "string") {
      const parsed = parseFloat(maxVal);
      if (!isNaN(parsed)) {
        return parsed * windowHeight;
      }
    }
    return maxVal as number;
  }, [maxVal, windowHeight]);

  const maxValue = parsedMaxVal;

  const clamp = (value: number, min: number, max: number): number => {
    return Math.min(Math.max(value, min), max);
  };

  const setSize = React.useCallback(
    (newSize: number) => {
      const clampedSize = clamp(newSize, minVal, maxValue as number);
      setCurrentSize(clampedSize);
      // Save to local storage
      // swap! storage/user update-persistent-state file-id key clampedSize
    },
    [minVal, maxValue]
  );

  const getClientPosition = (event: React.PointerEvent | MouseEvent): { x: number; y: number } => {
    return { x: event.clientX, y: event.clientY };
  };

  const onPointerDown = React.useCallback(
    (event: React.PointerEvent) => {
      event.currentTarget?.setPointerCapture?.(event.pointerId);
      startSizeRef.current = currentSize;
      draggingRef.current = true;
      startRef.current = getClientPosition(event);
      setResizeType(resizeType);
    },
    [currentSize, resizeType]
  );

  const onLostPointerCapture = React.useCallback(
    (event: React.PointerEvent) => {
      event.currentTarget?.releasePointerCapture?.(event.pointerId);
      startSizeRef.current = null;
      draggingRef.current = false;
      startRef.current = null;
      setResizeType("");
    },
    []
  );

  const onPointerMove = React.useCallback(
    (event: React.PointerEvent) => {
      if (!draggingRef.current || startRef.current === null || startSizeRef.current === null) {
        return;
      }

      const start = startRef.current;
      const pos = getClientPosition(event);

      let delta = axis === "x" ? pos.x - start.x : pos.y - start.y;
      if (negate) delta = -delta;

      const newSize = clamp(startSizeRef.current + delta, minVal, maxValue as number);
      setSize(newSize);
    },
    [axis, negate, minVal, maxValue, setSize]
  );

  const onResizeWindow = React.useCallback(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  React.useEffect(() => {
    window.addEventListener("resize", onResizeWindow);
    return () => {
      window.removeEventListener("resize", onResizeWindow);
    };
  }, [onResizeWindow]);

  React.useEffect(() => {
    const newSize = clamp(currentSize, minVal, maxValue as number);
    setSize(newSize);
  }, [windowHeight]);

  React.useEffect(() => {
    if (onChangeSize) {
      onChangeSize(currentSize);
    }
  }, [currentSize, onChangeSize]);

  return {
    onPointerDown,
    onLostPointerCapture,
    onPointerMove,
    parentRef,
    setSize,
    size: currentSize
  };
}

export function useResizeObserver(
  callback: (type: string | null, size: { width: number; height: number }) => void
): (node: HTMLElement | null) => void {
  const prevValRef = React.useRef<HTMLElement | null>(null);
  const observerRef = React.useRef<ResizeObserver | null>(null);

  const nodeRef = React.useCallback(
    (node: HTMLElement | null) => {
      if (node) {
        const observer = observerRef.current;
        const prevVal = prevValRef.current;

        if (prevVal !== node && observer) {
          observer.disconnect();
          observerRef.current = null;
        }

        if (prevVal !== node && node) {
          const newObserver = new ResizeObserver((entries) => {
            callback(lastResizeType, {
              width: entries[0]?.contentRect.width || 0,
              height: entries[0]?.contentRect.height || 0
            });
          });

          observerRef.current = newObserver;
          newObserver.observe(node);
          callback(lastResizeType, {
            width: node.clientWidth,
            height: node.clientHeight
          });
        }

        prevValRef.current = node;
      }
    },
    [callback]
  );

  React.useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return nodeRef;
}
