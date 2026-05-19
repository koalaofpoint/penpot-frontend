// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { Observable, merge, of } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface MouseEvent {
  type: 'down' | 'up' | 'click' | 'double-click';
  ctrl: boolean;
  shift: boolean;
  alt: boolean;
  meta: boolean;
}

export interface Point {
  x: number;
  y: number;
}

export interface PointerEvent {
  source: EventTarget;
  pt: Point;
  ctrl: boolean;
  shift: boolean;
  alt: boolean;
  meta: boolean;
}

export interface ScrollEvent {
  point: Point;
}

export interface BlurEvent {
  type: 'blur';
}

/**
 * Checks if value is a MouseEvent.
 */
export function isMouseEvent(v: unknown): v is MouseEvent {
  return (v as any)?.type === 'down' ||
         (v as any)?.type === 'up' ||
         (v as any)?.type === 'click' ||
         (v as any)?.type === 'double-click';
}

/**
 * Checks if value is a PointerEvent.
 */
export function isPointerEvent(v: unknown): v is PointerEvent {
  return (v as any)?.source !== undefined && (v as any)?.pt !== undefined;
}

/**
 * Checks if value is a ScrollEvent.
 */
export function isScrollEvent(v: unknown): v is ScrollEvent {
  return (v as any)?.point !== undefined;
}

/**
 * Checks if value is a BlurEvent.
 */
export function isBlurEvent(v: unknown): v is BlurEvent {
  return (v as any)?.type === 'blur';
}

/**
 * Checks if mouse event is a down event.
 */
export function isMouseDownEvent(v: MouseEvent): boolean {
  return v.type === 'down';
}

/**
 * Checks if mouse event is an up event.
 */
export function isMouseUpEvent(v: MouseEvent): boolean {
  return v.type === 'up';
}

/**
 * Checks if mouse event is a click event.
 */
export function isMouseClickEvent(v: MouseEvent): boolean {
  return v.type === 'click';
}

/**
 * Checks if mouse event is a double-click event.
 */
export function isMouseDoubleClickEvent(v: MouseEvent): boolean {
  return v.type === 'double-click';
}

/**
 * Gets pointer source from pointer event.
 */
export function getPointerSource(ev: PointerEvent): EventTarget {
  return ev.source;
}

/**
 * Gets pointer position from pointer event.
 */
export function getPointerPosition(ev: PointerEvent): Point {
  return ev.pt;
}

/**
 * Gets ctrl modifier from pointer event.
 */
export function getPointerCtrlMod(ev: PointerEvent): boolean {
  return ev.ctrl;
}

/**
 * Gets meta modifier from pointer event.
 */
export function getPointerMetaMod(ev: PointerEvent): boolean {
  return ev.meta;
}

/**
 * Gets alt modifier from pointer event.
 */
export function getPointerAltMod(ev: PointerEvent): boolean {
  return ev.alt;
}

/**
 * Gets shift modifier from pointer event.
 */
export function getPointerShiftMod(ev: PointerEvent): boolean {
  return ev.shift;
}

/**
 * Creates a stream to stop drag events.
 * Takes into account mouse up events, blur events, and interrupt signals.
 *
 * @param stream - The event stream
 * @param options - Options for which events should stop the drag
 * @returns Observable that emits when drag should stop
 */
export function dragStopper<T>(
  stream: Observable<T>
): Observable<T>;
export function dragStopper<T>(
  stream: Observable<T>,
  options: { blur?: boolean; upMouse?: boolean; interrupt?: boolean }
): Observable<T>;
export function dragStopper<T>(
  stream: Observable<T>,
  options: { blur?: boolean; upMouse?: boolean; interrupt?: boolean } = {}
): Observable<T> {
  const { blur = true, upMouse = true, interrupt = true } = options;

  const observables: Observable<T>[] = [];

  if (blur) {
    observables.push(
      stream.pipe(filter(isBlurEvent as (value: T) => value is BlurEvent))
    );
  }

  if (upMouse) {
    observables.push(
      stream.pipe(
        filter(isMouseEvent),
        filter(isMouseUpEvent)
      )
    );
  }

  if (interrupt) {
    observables.push(
      stream.pipe(filter((v): v is T => v === 'interrupt'))
    );
  }

  if (observables.length === 0) {
    return new Observable<T>((subscriber) => subscriber.complete());
  }

  return merge(...observables);
}
