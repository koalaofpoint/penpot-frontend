// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

/**
 * Drag & Drop interaction helpers.
 *
 * This is official documentation for the dnd API:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
 *
 * The API is broken in several ways. Here is some discussion of problems,
 * and many incomplete solutions:
 * https://github.com/lolmaus/jquery.draggable/#what-this-is-all-about
 * https://www.w3schools.com/jsref/event_relatedtarget.asp
 * https://stackoverflow.com/questions/14194324/firefox-firing-dragleave-when-dragging-over-text-nestedredirect=1&lq=1
 * https://stackoverflow.com/questions/7110535/html5-dragleave-fired-when-hovering-a-child-element
 *
 * The main issue is that when we have a draggable element, for example
 *   <li draggable="true">
 *     <span>some text</span>
 *     other text
 *   </li>
 *
 * The api will generate enter and leave events when cursor moves within
 * internal elements (in this example within span and other text). But target of
 * event is draggable element (the real initiator comes in "relatedTarget" attribute).
 * This causes that the draggable element receives events that tells that the cursor
 * has moved from itself to itself, and this often causes strange behaviors.
 *
 * A common solution is to ignore events originated from child elements (look at
 * from-child? function). This creates additional problems when there are nested draggable
 * objects, for example a hierarchical tree with nested <li>s.
 */

/**
 * This function is useful to debug dnd interface behaviour when something weird occurs.
 */
export function trace(event: DragEvent, label: string): void {
  const currentTarget = event.currentTarget;
  const relatedTarget = event.relatedTarget;

  console.log(
    `[${label}] `,
    currentTarget
      ? `<${currentTarget.localName} ${currentTarget.textContent}>`
      : 'null',
    relatedTarget
      ? `<${relatedTarget.localName} ${relatedTarget.textContent}>`
      : 'null'
  );
}

/**
 * Sets penpot data on drag event.
 */
export function setData(event: DragEvent, data: unknown, dataType = 'application/json'): void {
  const dt = event.dataTransfer;
  if (dataType.startsWith('application') || dataType.startsWith('penpot')) {
    dt.setData(dataType, JSON.stringify(data));
  }
  dt.setData(dataType, data);
}

/**
 * Sets drag image for drag event.
 */
const INVISIBLE_IMAGE = new Image();
INVISIBLE_IMAGE.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';

export function setDragImage(event: DragEvent, image: string | HTMLImageElement): void;
export function setDragImage(event: DragEvent, image: string | HTMLImageElement, offsetX: number, offsetY: number): void {
  const dt = event.dataTransfer;
  if (offsetX === undefined) {
    dt.setDragImage(image, 0, 0);
  } else {
    dt.setDragImage(image, offsetX, offsetY);
  }
}

/**
 * Sets allowed effect for drag event.
 */
export function setAllowedEffect(event: DragEvent, effect: string): void {
  const dt = event.dataTransfer;
  dt.effectAllowed = effect;
}

/**
 * Sets drop effect for drag event.
 */
export function setDropEffect(event: DragEvent, effect: string): void {
  const dt = event.dataTransfer;
  dt.dropEffect = effect;
}

/**
 * Checks if data transfer has a specific type.
 */
export function hasType(event: DragEvent, dataType: string): boolean {
  const dt = event.dataTransfer;
  return dt.types.includes(dataType);
}

/**
 * The relatedTarget property contains a DOM element that was under
 * the mouse *before* event. This is useful, for example, to filter
 * out enter or over events initiated by children of the drop target.
 */
export function isFromChild(event: DragEvent): boolean {
  const target = event.currentTarget;
  const related = event.relatedTarget;
  return target.contains(related);
}

/**
 * WebKit browsers (Safari & Epiphany) do not send relatedEvent
 * property (https://bugs.webkit.org/show_bug.cgi?id=65647) so
 * there is no decent way of discriminating redundant enter/leave
 * events.
 */
export function isBrokenEvent(event: DragEvent): boolean {
  return event.relatedTarget === null;
}

/**
 * Gets penpot data from drag/drop event.
 */
export function getData(event: DragEvent): unknown;
export function getData(event: DragEvent, dataType: string): unknown {
  return getDataFromDataTransfer(event.dataTransfer, dataType);
}

/**
 * Gets penpot data from dataTransfer.
 */
function getDataFromDataTransfer(dt: DataTransfer, dataType: string): unknown {
  const data = dt.getData(dataType);

  if (data && data !== '') {
    if (dataType.startsWith('penpot') || dataType === 'application/json') {
      return JSON.parse(data);
    }
  }

  return data;
}

/**
 * Gets files from drag/drop event.
 */
export function getFiles(event: DragEvent): File[] {
  const dt = event.dataTransfer;
  return Array.from(dt.files);
}

/**
 * Determines which side of the target the drop occurred on.
 *
 * @param detectCenter - If true, determine if dropped on center, otherwise determine top/bottom
 */
export function dropSide(event: DragEvent, detectCenter = true): 'top' | 'bottom' | 'center' | 'bot' {
  const ypos = event.offsetY;
  const target = event.currentTarget as HTMLElement;
  const height = target.clientHeight;
  const innerHeight = target.firstElementChild?.clientHeight ?? 0;
  const thold = height / 2;
  const thold1 = innerHeight * 0.2;
  const thold2 = innerHeight * 0.8;

  if (!detectCenter) {
    if (ypos < thold1) {
      return 'top';
    } else if (ypos > thold2) {
      return ypos > height ? 'bot' : 'top';
    } else {
      return 'center';
    }
  }

  return 'center';
}
