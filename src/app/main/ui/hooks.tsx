// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
// TODO: Import proper modules
// import * as cpf from '../../../common/files/focus';
// import * as mth from '../../../common/math';
// import * as mbc from '../../../main/broadcast';
// import * as dsc from '../../../main/data/shortcuts';
// import * as refs from '../../../main/refs';
// import * as st from '../../../main/store';
// import * as dom from '../../../util/dom';
// import * as dnd from '../../../util/dom/dnd';
// import * as storage from '../../../util/storage';
// import * as ts from '../../../util/timers';
// import * as wapi from '../../../util/webapi';
// import * as rx from 'beicon.v2/core';
// import * as rxo from 'beicon.v2/operators';

let renderId = 0;

export function useRenderId(): string {
  return React.useMemo(() => `render-${++renderId}`, []);
}

export function useRxsub<T>(ob: any): T | null {
  const [state, setState] = React.useState<T | null>(() => {
    if (ob && typeof ob === 'object' && 'deref' in ob) {
      return (ob as any).deref();
    }
    return null;
  });

  React.useEffect(() => {
    const sub = (ob as any).subscribe?.((val: T) => setState(val)) ||
                (ob as any).sub?.((val: T) => setState(val));

    return () => {
      if (sub) {
        (sub as any).dispose?.() || (sub as any).unsubscribe?.();
      }
    };
  }, [ob]);

  return state;
}

export function useShortcuts(key: string, shortcuts: any): void {
  React.useEffect(() => {
    // TODO: st/emit!(dsc/push-shortcuts key shortcuts);
    return () => {
      // TODO: st/emit!(dsc/pop-shortcuts key);
    };
  }, [key, shortcuts]);
}

// Sortable Context
export const SortableContext = React.createContext<any>(null);

export function SortableContainer({ children }: { children: React.ReactNode }) {
  const globalDragEnd = React.useMemo(() => {
    // Create a simple subject-like object
    const handlers: ((...args: any[]) => void)[] = [];
    return {
      subscribe: (handler: (...args: any[]) => void) => {
        handlers.push(handler);
        return {
          unsubscribe: () => {
            const index = handlers.indexOf(handler);
            if (index > -1) handlers.splice(index, 1);
          }
        };
      },
      notify: () => handlers.forEach(h => h())
    };
  }, []);

  return (
    <SortableContext.Provider value={globalDragEnd}>
      {children}
    </SortableContext.Provider>
  );
}

export interface UseSortableOptions {
  dataType?: string;
  data?: any;
  onDrop?: (side: any, dropData: any, event: DragEvent) => void;
  onDrag?: (data: any) => void;
  onHold?: () => void;
  disabled?: boolean;
  detectCenter?: boolean;
  draggable?: boolean;
}

interface SortableState {
  over: any;
  timer: any;
  subscription: any;
}

export function useSortable({
  dataType = "text/plain",
  data,
  onDrop,
  onDrag,
  onHold,
  disabled = false,
  detectCenter = false,
  draggable = true
}: UseSortableOptions = {}): [SortableState, React.RefObject<HTMLDivElement | null>] {
  const ref = React.useRef<HTMLDivElement>(null);
  const globalDragEnd = React.useContext(SortableContext);
  const [state, setState] = React.useState<SortableState>({ over: null, timer: null, subscription: null });

  const cleanup = React.useCallback(() => {
    setState(prev => {
      if (prev.timer) {
        // clearTimeout(prev.timer);
      }
      return { over: null, timer: null, subscription: null };
    });
  }, []);

  const subscribeToDragEnd = React.useCallback(() => {
    setState(prev => {
      if (prev.subscription) return prev;
      const sub = globalDragEnd?.subscribe?.(cleanup);
      return { ...prev, subscription: sub };
    });
  }, [globalDragEnd, cleanup]);

  const onDragStart = React.useCallback((event: React.DragEvent) => {
    if (disabled || !draggable) {
      event.stopPropagation();
      event.preventDefault();
      return;
    }
    event.stopPropagation();
    // dom/set-data!(event, dataType, data);
    // dom/set-drag-image!(event, dom/invisible-image());
    // dom/set-allowed-effect!(event, "move");
    if (onDrag) onDrag(data);
  }, [disabled, draggable, dataType, data, onDrag]);

  const onDragEnter = React.useCallback((event: React.DragEvent) => {
    event.preventDefault();
    // if (!dnd/from-child?(event)) {
    //   event.stopPropagation();
    subscribeToDragEnd();
    if (onHold) {
      // const timer = setTimeout(onHold, 1000);
      // setState(prev => ({ ...prev, timer }));
    }
    // }
  }, [subscribeToDragEnd, onHold]);

  const onDragOver = React.useCallback((event: React.DragEvent) => {
    // if (dnd/has-type?(event, dataType)) {
    event.preventDefault();
    // if (!dnd/from-child?(event)) {
    //   event.stopPropagation();
    subscribeToDragEnd();
    // const side = dnd/drop-side(event, detectCenter);
    // setState(prev => ({ ...prev, over: side }));
    // }
    // }
  }, [dataType, subscribeToDragEnd, detectCenter]);

  const onDragLeave = React.useCallback((event: React.DragEvent) => {
    // if (!dnd/from-child?(event)) {
    cleanup();
    // }
  }, [cleanup]);

  const onDrop = React.useCallback((event: React.DragEvent) => {
    event.stopPropagation();
    // const side = dnd/drop-side(event, detectCenter);
    // const dropData = dnd/get-data(event, dataType);
    cleanup();
    globalDragEnd?.notify?.();
    if (onDrop) onDrop(null, data, event.nativeEvent);
  }, [dataType, cleanup, globalDragEnd, onDrop, data]);

  const onDragEnd = React.useCallback((event: React.DragEvent) => {
    event.stopPropagation();
    globalDragEnd?.notify?.();
    cleanup();
  }, [globalDragEnd, cleanup]);

  React.useEffect(() => {
    const dom = ref.current;
    if (!dom) return;

    dom.setAttribute("draggable", String(draggable && !disabled));

    dom.addEventListener("dragstart", onDragStart as any, false);
    dom.addEventListener("dragenter", onDragEnter as any, false);
    dom.addEventListener("dragover", onDragOver as any, false);
    dom.addEventListener("dragleave", onDragLeave as any, false);
    dom.addEventListener("drop", onDrop as any, false);
    dom.addEventListener("dragend", onDragEnd as any, false);

    return () => {
      dom.removeEventListener("dragstart", onDragStart as any);
      dom.removeEventListener("dragenter", onDragEnter as any);
      dom.removeEventListener("dragover", onDragOver as any);
      dom.removeEventListener("dragleave", onDragLeave as any);
      dom.removeEventListener("drop", onDrop as any);
      dom.removeEventListener("dragend", onDragEnd as any);
    };
  }, [data, onDrop, draggable, onDragStart, onDragEnter, onDragOver, onDragLeave, onDrop, onDragEnd]);

  return [state, ref as React.RefObject<HTMLDivElement | null>];
}

export function useStream(
  stream: any,
  deps: any[],
  onSubscribe: (value: any) => void,
  onDispose?: () => void
): void {
  React.useEffect(() => {
    if (!stream) return;

    const sub = stream.subscribe?.(onSubscribe) || stream.sub?.(onSubscribe);

    return () => {
      if (sub) {
        sub.dispose?.() || sub.unsubscribe?.();
      }
      if (onDispose) onDispose();
    };
  }, deps);
}

export function usePrevious<T>(value: T): T | undefined {
  const ref = React.useRef<T | undefined>(undefined);

  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export function useUpdateVar<T>(value: T): React.MutableRefObject<T> {
  const ref = React.useRef(value);

  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref;
}

export function useUpdateRef<T>(value: T): React.MutableRefObject<T> {
  const ref = React.useRef(value);

  React.useEffect(() => {
    (ref as any).current = value;
  }, [value]);

  return ref;
}

export function useRefCallback<T extends (...args: any[]) => any>(
  f: T
): T {
  const ref = React.useRef<any>(null);

  React.useEffect(() => {
    ref.current = { f };
  }, [f]);

  return React.useCallback((...args: any[]) => {
    if (ref.current) {
      return ref.current.f(...args);
    }
  }, []) as T;
}

export function useRefValue<T>(v: T): React.MutableRefObject<T> {
  const ref = React.useRef(v);

  React.useEffect(() => {
    (ref as any).current = v;
  }, [v]);

  return ref;
}

export function useEqualMemo<T>(val: T): T {
  const ref = React.useRef<any>(null);

  if (ref.current !== val) {
    ref.current = val;
  }

  return ref.current;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function withFocusObjects(objects: any[], focus?: any): any[] {
  // TODO: Implement with-focus-objects
  // const focus = refs/workspace-focus-selected;
  // return cpf/focus-objects(objects, focus);
  return objects;
}

export function useDebounce<T>(ms: number, value: T): T {
  const [state, updateState] = React.useState(value);
  const updateFn = React.useMemo(
    () => {
      let timeoutId: ReturnType<typeof setTimeout>;
      return (val: T) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => updateState(val), ms);
      };
    },
    [ms]
  );

  React.useEffect(() => {
    updateFn(value);
  }, [value, updateFn]);

  return state;
}

export function useSharedState<T>(key: string, defaultValue: T): [T, (val: T) => void] {
  const id = React.useId();
  const [state, setState] = React.useState<T>(() => {
    // TODO: get from storage/user
    return defaultValue;
  });

  React.useEffect(() => {
    // TODO: mbc/emit! id key state
    // TODO: swap! storage/user assoc key state
  }, [state, key, id]);

  return [state, setState];
}

export function usePersistedState<T>(key: string, defaultValue: T): [T, (val: T) => void] {
  const id = React.useId();
  const [state, setState] = React.useState<T>(() => {
    // TODO: get from storage/user
    return defaultValue;
  });

  React.useEffect(() => {
    // TODO: swap! storage/user assoc key state
  }, [state, key, id]);

  return [state, setState];
}

export function useVisible(
  ref: React.RefObject<HTMLElement>,
  options: { once?: boolean } = {}
): boolean {
  const { once = false } = options;
  const [state, setState] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting || entry.intersectionRatio > 0.5) {
            setState(true);
            if (once) {
              observer.unobserve(node);
            }
          }
        });
      },
      { rootMargin: "0px", threshold: [0, 1.0] }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [ref, once]);

  return state;
}

// Portal container management
function getOrCreatePortalContainer(category: string): HTMLElement {
  const body = document.body;
  const id = `portal-container-${category}`;

  let container = document.getElementById(id);
  if (!container) {
    container = document.createElement("div");
    container.id = id;
    body.appendChild(container);
  }

  return container;
}

export function usePortalContainer(category: string = "default"): HTMLElement {
  return React.useMemo(() => getOrCreatePortalContainer(category), [category]);
}

export function useDynamicGridItemWidth(
  itemSize?: number
): [React.RefObject<HTMLDivElement | null>, number] {
  const [width, setWidth] = React.useState<number | null>(null);
  const rowRef = React.useRef<HTMLDivElement>(null);

  const computedItemSize = React.useMemo(() => {
    if (itemSize) return itemSize;
    if (width === null) return 230;
    return width >= 1030 ? 280 : 230;
  }, [itemSize, width]);

  const ratio = width ? width / computedItemSize : 0;
  const nitems = Math.floor(ratio);
  const limit = Math.min(10, Math.max(1, nitems));

  const thSize = width
    ? Math.floor((width - 32 - (limit - 1) * 24) / limit - 12)
    : undefined;

  const adjustedThSize = thSize && thSize % 2 !== 0 ? thSize - 1 : thSize;

  React.useEffect(() => {
    const node = rowRef.current;
    if (!node || !adjustedThSize) return;

    node.style.setProperty("--th-width", `${adjustedThSize}px`);
    node.style.setProperty("--th-height", `${Math.ceil(adjustedThSize * (2 / 3))}px`);
  }, [adjustedThSize]);

  React.useEffect(() => {
    const node = rowRef.current;
    if (!node) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const row = entries[0];
      if (row) {
        const rowWidth = row.contentRect.width;
        setWidth(rowWidth);
      }
    });

    resizeObserver.observe(node);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return [rowRef, limit];
}
