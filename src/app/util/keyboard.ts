// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { preventDefault, stopPropagation } from './dom';

export interface KeyboardEvent {
  type: 'up' | 'down';
  key: string;
  shift: boolean;
  ctrl: boolean;
  alt: boolean;
  meta: boolean;
  mod: boolean;
  editing: boolean;
  nativeEvent: globalThis.KeyboardEvent;
  preventDefault: () => void;
  stopPropagation: () => void;
}

/**
 * Creates a keyboard event record.
 */
export function createKeyboardEvent(
  type: 'up' | 'down',
  key: string,
  shift: boolean,
  ctrl: boolean,
  alt: boolean,
  meta: boolean,
  mod: boolean,
  editing: boolean,
  nativeEvent: globalThis.KeyboardEvent
): KeyboardEvent {
  return {
    type,
    key,
    shift,
    ctrl,
    alt,
    meta,
    mod,
    editing,
    nativeEvent,
    preventDefault: () => preventDefault(nativeEvent),
    stopPropagation: () => stopPropagation(nativeEvent)
  };
}

/**
 * Checks if value is a KeyboardEvent.
 */
export function isKeyboardEvent(o: unknown): o is KeyboardEvent {
  return (o as any)?.type === 'up' || (o as any)?.type === 'down';
}

/**
 * Checks if event is a keyup event.
 */
export function isKeyUpEvent(event: KeyboardEvent): boolean {
  return event.type === 'up';
}

/**
 * Checks if event is a keydown event.
 */
export function isKeyDownEvent(event: KeyboardEvent): boolean {
  return event.type === 'down';
}

/**
 * Checks if modifier keys are pressed.
 */
export function isModEvent(event: KeyboardEvent): boolean {
  return event.mod === true;
}

/**
 * Checks if it's an editing event.
 */
export function isEditingEvent(event: KeyboardEvent): boolean {
  return event.editing === true;
}

/**
 * Creates a predicate function to check if keyboard event matches a specific key.
 */
export function isKey(key: string): (event: KeyboardEvent) => boolean;
export function isKey(event: KeyboardEvent, key: string): boolean;
export function isKey(arg1: string | KeyboardEvent, arg2?: string): ((event: KeyboardEvent) => boolean) | boolean {
  if (typeof arg1 === 'string') {
    const key = arg1;
    return (event) => event.key === key;
  } else {
    const event = arg1;
    const key = arg2!;
    return event.key === key;
  }
}

/**
 * Creates a predicate function to check if keyboard event matches a specific key (case-insensitive).
 */
export function isKeyIgnoreCase(key: string): (event: KeyboardEvent) => boolean {
  const upperKey = key.toUpperCase();
  return (e) => e.key.toUpperCase() === upperKey;
}

/**
 * Checks if alt key is pressed.
 */
export function isAlt(event: globalThis.KeyboardEvent): boolean {
  return event.altKey;
}

/**
 * Checks if ctrl key is pressed.
 */
export function isCtrl(event: globalThis.KeyboardEvent): boolean {
  return event.ctrlKey;
}

/**
 * Checks if meta key is pressed.
 */
export function isMeta(event: globalThis.KeyboardEvent): boolean {
  return event.metaKey;
}

/**
 * Checks if shift key is pressed.
 */
export function isShift(event: globalThis.KeyboardEvent): boolean {
  return event.shiftKey;
}

/**
 * Checks if the platform-specific mod key is pressed (Cmd on Mac, Ctrl on others).
 */
export function isMod(event: globalThis.KeyboardEvent): boolean {
  // TODO: Check platform - need platform detection
  // For now, assuming non-mac
  return event.ctrlKey;
}

// Key predicates
export const isEscKey = isKey('Escape');
export const isEnterKey = isKey('Enter');
export const isSpaceKey = isKey(' ');
export const isZKey = isKeyIgnoreCase('z');
export const isEqualsKey = isKey('=');
export const isPlusKey = isKey('+');
export const isMinusKey = isKey('-');
export const isUnderscoreKey = isKey('_');
export const isUpArrowKey = isKey('ArrowUp');
export const isDownArrowKey = isKey('ArrowDown');
export const isLeftArrowKey = isKey('ArrowLeft');
export const isRightArrowKey = isKey('ArrowRight');
export const isAltKey = isKey('Alt');
export const isShiftKey = isKey('Shift');
export const isCtrlKey = isKey('Control');
export const isMetaKey = isKey('Meta');
export const isCommaKey = isKey(',');
export const isBackspaceKey = isKey('Backspace');
export const isHomeKey = isKey('Home');
export const isTabKey = isKey('Tab');
export const isDeleteKey = isKey('Delete');
