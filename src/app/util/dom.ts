// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { mediaTypeToExtension } from './media';

// Types
export interface Point {
  x: number;
  y: number;
}

export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface BoundingRect {
  left: number;
  top: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
}

export interface WindowSize {
  width: number;
  height: number;
}

export interface ScrollPosition {
  scrollHeight: number;
  scrollLeft: number;
  scrollTop: number;
  scrollWidth: number;
}

// Document globals (defined elsewhere)
declare const document: Document;
declare const window: Window;

// --- Deprecated methods

/**
 * Extracts innerText from an event target.
 */
export function eventToInnerText(e: Event | null): string | undefined {
  if (!e) return undefined;
  const target = e.target as HTMLElement;
  return target?.innerText;
}

/**
 * Extracts value from an event target.
 */
export function eventToValue(e: Event | null): string | undefined {
  if (!e) return undefined;
  const target = e.target as HTMLInputElement;
  return target?.value;
}

/**
 * Extracts target from an event.
 */
export function eventToTarget(e: Event | null): EventTarget | undefined {
  if (!e) return undefined;
  return e.target;
}

/**
 * Extracts native event from React synthetic event.
 */
export function eventToNativeEvent(e: any): Event | undefined {
  return e?.nativeEvent;
}

// --- New methods

/**
 * Sets the HTML document title.
 */
export function setHtmlTitle(title: string): void {
  document.title = title;
}

/**
 * Sets page styles for printing/exporting.
 */
export function setPageStyle(styles: Record<string, string>): void {
  const headNode = document.getElementsByTagName('head')[0];
  if (!headNode) return;

  const styleEntries = Object.entries(styles).map(([k, v]) => `${k}:${v};`);
  const styleBlock = `<style>\n  @page {${styleEntries.join(' ')} }\n  html, body {font-size:0; margin:0; padding:0}\n </style>`;
  headNode.insertAdjacentHTML('beforeend', styleBlock);
}

/**
 * Gets an element by class name.
 */
export function getElementByClass(classname: string, node?: Element): Element | null {
  if (node) {
    return node.getElementsByClassName(classname)[0] || null;
  }
  return document.getElementsByClassName(classname)[0] || null;
}

/**
 * Gets all elements by class name.
 */
export function getElementsByClass(classname: string, node?: Element): HTMLCollectionOf<Element> {
  if (node) {
    return node.getElementsByClassName(classname);
  }
  return document.getElementsByClassName(classname);
}

/**
 * Gets an element by ID.
 */
export function getElement(id: string): HTMLElement | null {
  return document.getElementById(id);
}

/**
 * Gets elements by tag name.
 */
export function getElementsByTag(node: ParentNode | null, tag: string): HTMLCollectionOf<Element> | null {
  if (!node) return null;
  return node.getElementsByTagName(tag);
}

/**
 * Stops event propagation.
 */
export function stopPropagation(event: Event | null): void {
  if (event && typeof event.stopPropagation === 'function') {
    event.stopPropagation();
  }
}

/**
 * Stops immediate event propagation.
 */
export function stopImmediatePropagation(event: Event | null): void {
  if (event && typeof event.stopImmediatePropagation === 'function') {
    event.stopImmediatePropagation();
  }
}

/**
 * Prevents default event behavior.
 */
export function preventDefault(event: Event | null): void {
  if (event && typeof event.preventDefault === 'function') {
    event.preventDefault();
  }
}

/**
 * Extracts target from event instance.
 */
export function getTarget(event: Event | null): EventTarget | undefined {
  if (!event) return undefined;
  return event.target;
}

/**
 * Extracts related target from blur or focus event.
 */
export function getRelatedTarget(event: FocusEvent | null): EventTarget | undefined {
  if (!event) return undefined;
  return event.relatedTarget;
}

/**
 * Selects the target element.
 */
export function selectTarget(event: Event | null): void {
  if (!event) return;
  const target = event.target as HTMLInputElement;
  if (target?.select) {
    target.select();
  }
}

/**
 * Selects element by node.
 */
export function selectNode(node: HTMLInputElement | null): void {
  if (node?.select) {
    node.select();
  }
}

/**
 * Extracts current target from event instance.
 */
export function getCurrentTarget(event: Event | null): EventTarget | undefined {
  if (!event) return undefined;
  return event.currentTarget;
}

/**
 * Gets parent element.
 */
export function getParent(node: Node | null): HTMLElement | null {
  if (!node) return null;
  return node.parentElement;
}

/**
 * Gets parent element at specific level up.
 */
export function getParentAt(node: Node | null, count: number): HTMLElement | null {
  if (!node) return null;
  let current: Node | null = node;
  let currentCount = count;

  while (current && currentCount > 0) {
    current = current.parentElement;
    currentCount--;
  }
  return current as HTMLElement | null;
}

/**
 * Gets first parent element that has the specified data attribute.
 */
export function getParentWithData(node: Node | null, name: string): HTMLElement | null {
  if (!node) return null;
  let current: Node | null = node;
  const camelName = name.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());

  while (current) {
    if (current.nodeType !== Node.ELEMENT_NODE) {
      current = current.parentElement;
      continue;
    }

    const element = current as HTMLElement;
    if (camelName in element.dataset) {
      return element;
    }

    current = current.parentElement;
  }

  return null;
}

/**
 * Gets first parent element that matches the selector.
 */
export function getParentWithSelector(node: Node | null, selector: string): HTMLElement | null {
  if (!node) return null;
  let current: Node | null = node;

  while (current) {
    const element = current as HTMLElement;
    if (element.matches?.(selector)) {
      return element;
    }
    current = current.parentElement;
  }

  return null;
}

/**
 * Extracts value from DOM node.
 */
export function getValue(node: HTMLElement | null): string | undefined {
  if (!node) return undefined;
  const input = node as HTMLInputElement;
  return input.value;
}

/**
 * Extracts value from DOM input node taking into account the type.
 */
export function getInputValue(node: HTMLElement | null): string | boolean | undefined {
  if (!node) return undefined;
  const input = node as HTMLInputElement;
  if (input.type === 'checkbox' || input.type === 'radio') {
    return input.checked;
  }
  return input.value;
}

/**
 * Extracts value of an attribute from a DOM node.
 */
export function getAttribute(node: Element | null, attrName: string): string | null {
  if (!node) return null;
  return node.getAttribute(attrName);
}

/**
 * Gets scroll position from an element.
 */
export function getScrollPosition(element: HTMLElement | null): ScrollPosition | null {
  if (!element) return null;
  return {
    scrollHeight: element.scrollHeight,
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop,
    scrollWidth: element.scrollWidth
  };
}

/**
 * Gets scroll height ratio.
 */
export function getScrollHeightRatio(node: HTMLElement | null): number | null {
  if (!node) return null;
  return node.scrollHeight / node.clientHeight;
}

/**
 * Gets scroll distance between two elements.
 */
export function getScrollDistance(node: HTMLElement | null, scrollNode: HTMLElement | null): number | null {
  if (!node || !scrollNode) return null;
  return Math.abs(scrollNode.scrollTop - node.offsetTop);
}

/**
 * Gets scroll distance ratio.
 */
export function getScrollDistanceRatio(node: HTMLElement | null, scrollNode: HTMLElement | null): number | null {
  const distance = getScrollDistance(node, scrollNode);
  if (distance === null || !scrollNode) return null;
  return distance / scrollNode.clientHeight;
}

/**
 * Composes getValue with getTarget.
 */
export const getTargetVal = (e: Event | null) => getValue(getTarget(e) as HTMLElement | null);

/**
 * Composes getScrollPosition with getTarget.
 */
export const getTargetScroll = (e: Event | null) => getScrollPosition(getTarget(e) as HTMLElement | null);

/**
 * Clicks a node.
 */
export function click(node: HTMLElement | null): void {
  if (!node) return;
  node.click();
}

/**
 * Extracts files from DOM node.
 */
export function getFiles(node: HTMLElement | null): File[] | null {
  if (!node) return null;
  const input = node as HTMLInputElement;
  if (!input.files) return null;
  return Array.from(input.files);
}

/**
 * Checks if a radio or checkbox node is checked.
 */
export function isChecked(node: HTMLElement | null): boolean | undefined {
  if (!node) return undefined;
  const input = node as HTMLInputElement;
  return input.checked;
}

/**
 * Checks if a form input has a valid value.
 */
export function isValid(node: HTMLElement | null): boolean | undefined {
  if (!node) return undefined;
  const input = node as HTMLInputElement;
  const validity = input.validity;
  return validity?.valid;
}

/**
 * Manually sets validity status of a form input.
 */
export function setValidity(node: HTMLElement | null, status: string): void {
  if (!node) return;
  const input = node as HTMLInputElement;
  input.setCustomValidity(status);
  input.reportValidity();
}

/**
 * Clears the value of an input node.
 */
export function cleanValue(node: HTMLElement | null): void {
  if (!node) return;
  const input = node as HTMLInputElement;
  input.value = '';
}

/**
 * Sets the value of an input node.
 */
export function setValue(node: HTMLElement | null, value: string): void {
  if (!node) return;
  const input = node as HTMLInputElement;
  input.value = value;
}

/**
 * Selects all text in a node.
 */
export function selectText(node: HTMLElement | null): void {
  if (!node) return;
  const input = node as HTMLInputElement;
  if (input.select) {
    input.select();
  }
}

/**
 * Checks if two nodes are equal.
 */
export function equals(nodeA: Node | null, nodeB: Node | null): boolean {
  if (!nodeA && !nodeB) return true;
  if (!nodeA) return false;
  return nodeA.isEqualNode(nodeB);
}

/**
 * Extracts files from event instance.
 */
export function getEventFiles(event: Event | null): File[] | null {
  if (!event) return null;
  return getFiles(getTarget(event) as HTMLElement | null);
}

/**
 * Creates an HTML element.
 */
export function createElement(tag: string): HTMLElement;
export function createElement(namespace: string, tag: string): Element;
export function createElement(document: Document, namespace: string, tag: string): Element;
export function createElement(arg1: string | Document, arg2?: string, arg3?: string): Element {
  if (typeof arg1 === 'string' && arg2 === undefined) {
    return document.createElement(arg1);
  }
  if (typeof arg1 === 'string' && typeof arg2 === 'string') {
    return document.createElementNS(arg1, arg2);
  }
  if (typeof arg1 === 'object' && typeof arg2 === 'string' && typeof arg3 === 'string') {
    return (arg1 as Document).createElementNS(arg2, arg3);
  }
  throw new Error('Invalid arguments for createElement');
}

/**
 * Creates a text node.
 */
export function createText(text: string): Text;
export function createText(doc: Document, text: string): Text;
export function createText(arg1: string | Document, arg2?: string): Text {
  if (typeof arg1 === 'string') {
    return document.createTextNode(arg1);
  }
  return (arg1 as Document).createTextNode(arg2!);
}

/**
 * Sets inner HTML of an element.
 */
export function setHtml(el: HTMLElement | null, html: string): HTMLElement | null {
  if (!el) return null;
  el.innerHTML = html;
  return el;
}

/**
 * Appends a child to an element.
 */
export function appendChild(el: Node | null, child: Node | null): Node | null {
  if (!el) return null;
  if (!child) return el;
  el.appendChild(child);
  return el;
}

/**
 * Inserts a child after a reference node.
 */
export function insertAfter(el: Node | null, ref: Node | null, child: Node | null): Node | null {
  if (!el || !ref) return el;
  if (!child) return el;

  const nodes = el.childNodes;
  let idx = -1;
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i] === ref) {
      idx = i;
      break;
    }
  }

  const sibnode = nodes[idx + 1] as Node;
  if (sibnode) {
    el.insertBefore(child, sibnode);
  } else {
    el.appendChild(child);
  }

  return el;
}

/**
 * Removes a child from an element.
 */
export function removeChild(el: Node | null, child: Node | null): Node | null {
  if (!el) return null;
  if (!child) return el;
  el.removeChild(child);
  return el;
}

/**
 * Removes an element from the DOM.
 */
export function remove(el: HTMLElement | null): void {
  if (!el) return;
  el.remove();
}

/**
 * Gets first child of an element.
 */
export function getFirstChild(el: Node | null): Node | null {
  if (!el) return null;
  return el.firstChild;
}

/**
 * Gets tag name of an element.
 */
export function getTagName(el: Element | null): string | undefined {
  if (!el) return undefined;
  return el.tagName;
}

/**
 * Gets outer HTML of an element.
 */
export function getOuterHtml(el: Element | null): string | undefined {
  if (!el) return undefined;
  return el.outerHTML;
}

/**
 * Gets inner text of an element.
 */
export function getInnerText(el: Element | null): string | undefined {
  if (!el) return undefined;
  return el.innerText;
}

/**
 * Checks if element is content editable.
 */
export function isContentEditable(el: HTMLElement | null): boolean {
  return el?.isContentEditable ?? false;
}

/**
 * Queries for a single element.
 */
export function query(selector: string): Element | null;
export function query(el: Element | null, selector: string): Element | null;
export function query(arg1: string | Element | null, arg2?: string): Element | null {
  if (typeof arg1 === 'string') {
    return document.querySelector(arg1);
  }
  if (arg1) {
    return arg1.querySelector(arg2!);
  }
  return null;
}

/**
 * Queries for all matching elements.
 */
export function queryAll(selector: string): NodeListOf<Element>;
export function queryAll(el: Element | null, selector: string): NodeListOf<Element>;
export function queryAll(arg1: string | Element | null, arg2?: string): NodeListOf<Element> {
  if (typeof arg1 === 'string') {
    return document.querySelectorAll(arg1);
  }
  if (arg1) {
    return arg1.querySelectorAll(arg2!);
  }
  return document.querySelectorAll('');
}

/**
 * Gets element offset position.
 */
export function getElementOffsetPosition(node: HTMLElement | null): Point | null {
  if (!node) return null;
  return { x: node.offsetTop, y: node.offsetLeft };
}

/**
 * Gets client position from an event.
 */
export function getClientPosition(event: MouseEvent): Point {
  return { x: event.clientX, y: event.clientY };
}

/**
 * Gets offset position from an event.
 */
export function getOffsetPosition(event: MouseEvent | null): Point | null {
  if (!event) return null;
  return { x: event.offsetX, y: event.offsetY };
}

/**
 * Gets delta position from a wheel event.
 */
export function getDeltaPosition(event: WheelEvent): Point {
  return { x: event.deltaX, y: event.deltaY };
}

/**
 * Gets client size of an element.
 */
export function getClientSize(node: Element | null): Rect | null {
  if (!node) return null;
  return { x: 0, y: 0, width: node.clientWidth, height: node.clientHeight };
}

/**
 * Gets bounding rectangle of an element.
 */
export function getBoundingRect(node: Element): BoundingRect {
  const rect = node.getBoundingClientRect();
  return {
    left: rect.left,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    width: rect.width,
    height: rect.height
  };
}

/**
 * Checks if bounding rect is outside given dimensions.
 */
export function isBoundingRectOutside(rect: BoundingRect, { width, height }: WindowSize): boolean {
  return rect.left < 0 || rect.top < 0 || rect.right > width || rect.bottom > height;
}

/**
 * Checks if an element is outside the viewport.
 */
export function isElementOutside(element: Element): boolean {
  return isBoundingRectOutside(getBoundingRect(element), getWindowSize());
}

/**
 * Converts bounding rect to rect.
 */
export function boundingRectToRect(rect: DOMRect | null): Rect | null {
  if (!rect) return null;
  return {
    x: rect.left ?? 0,
    y: rect.top ?? 0,
    width: rect.width ?? 1,
    height: rect.height ?? 1
  };
}

/**
 * Gets window size.
 */
export function getWindowSize(): WindowSize {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}

/**
 * Gets window height.
 */
export function getWindowHeight(): number {
  return window.innerHeight;
}

/**
 * Gets computed styles of an element.
 */
export function getComputedStyle(element: Element): CSSStyleDeclaration {
  return window.getComputedStyle(element);
}

/**
 * Gets property value from computed styles.
 */
export function getPropertyValue(cssStyle: CSSStyleDeclaration, prop: string): string {
  return cssStyle.getPropertyValue(prop);
}

/**
 * Gets CSS variable value.
 */
export function getCssVariable(variable: string, element?: Element): string {
  const targetElement = element ?? document.documentElement;
  const styles = window.getComputedStyle(targetElement);
  return styles.getPropertyValue(variable);
}

/**
 * Focuses an element.
 */
export function focus(node: HTMLElement | null): void {
  if (!node) return;
  node.focus();
}

/**
 * Clicks an element.
 */
export function focusClick(node: HTMLElement | null): void {
  if (!node) return;
  node.click();
}

/**
 * Checks if an element has focus.
 */
export function hasFocus(node: HTMLElement | null): boolean {
  return node === document.activeElement;
}

/**
 * Blurs an element.
 */
export function blur(node: HTMLElement | null): void {
  if (!node) return;
  node.blur();
}

// List of fullscreen events for different browsers
const FULLSCREEN_EVENTS = [
  'fullscreenchange',
  'mozfullscreenchange',
  'MSFullscreenChange',
  'webkitfullscreenchange'
];

/**
 * Checks if the document is in fullscreen mode.
 */
export function isFullscreen(): boolean {
  const doc = document as any;

  if ('webkitFullscreenElement' in doc) {
    return Boolean(doc.webkitFullscreenElement);
  }
  if ('mozFullScreen' in doc) {
    return Boolean(doc.mozFullScreen);
  }
  if ('msFullscreenElement' in doc) {
    return Boolean(doc.msFullscreenElement);
  }
  if ('fullscreenElement' in doc) {
    return Boolean(doc.fullscreenElement);
  }

  console.error('Seems like the current browser does not support fullscreen API.');
  return false;
}

/**
 * Gets fullscreen events list.
 */
export function getFullscreenEvents(): string[] {
  return [...FULLSCREEN_EVENTS];
}

/**
 * Checks if value is a Blob.
 */
export function isBlob(v: unknown): v is Blob {
  return v instanceof Blob;
}

/**
 * Creates a new element.
 */
export function makeNode(name: string): HTMLElement;
export function makeNode(namespace: string, name: string): Element;
export function makeNode(arg1: string, arg2?: string): Element {
  if (typeof arg2 === 'string') {
    return document.createElementNS(arg1, arg2);
  }
  return document.createElement(arg1);
}

/**
 * Converts a node to XML string.
 */
export function nodeToXml(node: Node | null): string | undefined {
  if (!node) return undefined;
  const serializer = new XMLSerializer();
  return serializer.serializeToString(node);
}

/**
 * Converts a string to data URI.
 */
export function strToDataUri(str: string, type: string): string {
  if (typeof str !== 'string') {
    throw new Error('str must be a string');
  }
  const b64 = btoa(str);
  return `data:${type};base64,${b64}`;
}

/**
 * Converts SVG node to data URI.
 */
export function svgNodeToDataUri(svgNode: Element): string {
  const xml = nodeToXml(svgNode) ?? '';
  return strToDataUri(xml, 'image/svg+xml');
}

/**
 * Sets a property on a node.
 */
export function setProperty(node: HTMLElement | null, property: string, value: string): HTMLElement | null {
  if (!node) return null;
  node.setAttribute(property, value);
  return node;
}

/**
 * Gets text content of a node.
 */
export function getText(node: Node | null): string | undefined {
  if (!node) return undefined;
  return node.textContent ?? undefined;
}

/**
 * Sets text content of a node.
 */
export function setText(node: Node | null, text: string): Node | null {
  if (!node) return null;
  node.textContent = text;
  return node;
}

/**
 * Sets a CSS property on a node.
 */
export function setCssProperty(node: HTMLElement | null, property: string, value: string): HTMLElement | null {
  if (!node) return null;
  node.style.setProperty(property, value);
  return node;
}

/**
 * Unsets a CSS property on a node.
 */
export function unsetCssProperty(node: HTMLElement | null, property: string): HTMLElement | null {
  if (!node) return null;
  node.style.removeProperty(property);
  return node;
}

/**
 * Captures pointer from an event.
 */
export function capturePointer(event: PointerEvent | null): void {
  if (!event) return;
  const target = event.target as HTMLElement;
  if (target?.setPointerCapture) {
    target.setPointerCapture(event.pointerId);
  }
}

/**
 * Releases pointer from an event.
 */
export function releasePointer(event: PointerEvent | null): void {
  if (!event || event.pointerId === undefined) return;
  const target = event.target as HTMLElement;
  if (target?.releasePointerCapture) {
    target.releasePointerCapture(event.pointerId);
  }
}

/**
 * Gets the body element.
 */
export function getBody(): HTMLElement | null {
  return document.body;
}

/**
 * Gets the root element.
 */
export function getRoot(): HTMLElement | null {
  return query('#app');
}

/**
 * Creates class names from key-value pairs.
 */
export function classnames(...params: Array<string | boolean | null | undefined>): string {
  const result: string[] = [];

  for (let i = 0; i < params.length; i += 2) {
    const key = params[i] as string;
    const value = params[i + 1];

    if (value === true) {
      result.push(key);
    }
  }

  return result.join(' ');
}

/**
 * Checks if element has the specified ID.
 */
export function hasId(node: Element | null, id: string): boolean {
  if (!node) return false;
  return node.id === id;
}

/**
 * Checks if element has the specified class.
 */
export function hasClass(node: Element | null, className: string): boolean {
  if (!node) return false;
  return node.classList.contains(className);
}

/**
 * Adds a class to an element.
 */
export function addClass(node: HTMLElement | null, className: string): HTMLElement | null {
  if (!node) return null;
  node.classList.add(className);
  return node;
}

/**
 * Removes a class from an element.
 */
export function removeClass(node: HTMLElement | null, className: string): void {
  if (!node) return;
  node.classList.remove(className);
}

/**
 * Checks if node1 is a child of node2.
 */
export function isChild(node1: Node | null, node2: Node | null): boolean {
  if (!node1 || !node2) return false;
  return node2.contains(node1);
}

/**
 * Gets the currently active element.
 */
export function getActive(): Element | null {
  return document.activeElement;
}

/**
 * Checks if an element is active.
 */
export function isActive(node: Element | null): boolean {
  if (!node) return false;
  return getActive() === node;
}

/**
 * Gets data attribute value from a node.
 */
export function getData(node: Node | null, attr: string): string | null {
  if (!node) return null;
  const element = node as Element;
  // NOTE: we use getAttribute instead of .dataset for performance reasons.
  // getAttribute is 2x faster than dataset.
  return element.getAttribute(`data-${attr}`);
}

/**
 * Resolves node from event or element.
 */
function resolveNode(nodeOrEvent: Event | Element | null): Element | null {
  if (nodeOrEvent instanceof Element) {
    return nodeOrEvent;
  }
  return getCurrentTarget(nodeOrEvent) as Element | null;
}

/**
 * Gets boolean data attribute value.
 */
export function getBooleanData(node: Event | Element | null, attr: string): boolean | undefined {
  const resolved = resolveNode(node);
  const value = getData(resolved, attr);
  return value === 'true' || value === '' ? true : value === 'false' ? false : undefined;
}

/**
 * Sets a data attribute on a node.
 */
export function setData(node: HTMLElement | null, attr: string, value: string | number | boolean): HTMLElement | null {
  if (!node) return null;
  node.setAttribute(`data-${attr}`, String(value));
  return node;
}

/**
 * Sets an attribute on a node.
 */
export function setAttribute(node: HTMLElement | null, attr: string, value: string | number | boolean): void {
  if (!node) return;
  node.setAttribute(attr, String(value));
}

/**
 * Sets a style property on a node.
 */
export function setStyle(node: HTMLElement | null, style: string, value: string): void {
  if (!node) return;
  node.style.setProperty(style, value);
}

/**
 * Removes an attribute from a node.
 */
export function removeAttribute(node: HTMLElement | null, attr: string): void {
  if (!node) return;
  node.removeAttribute(attr);
}

/**
 * Gets scroll position of an element.
 */
export function getScrollPos(element: HTMLElement | null): number | undefined {
  if (!element) return undefined;
  return element.scrollTop;
}

/**
 * Gets horizontal scroll position of an element.
 */
export function getHScrollPos(element: HTMLElement | null): number | undefined {
  if (!element) return undefined;
  return element.scrollLeft;
}

/**
 * Scrolls to a position.
 */
export function scrollTo(element: HTMLElement, options: ScrollToOptions): void;
export function scrollTo(element: HTMLElement, x: number, y: number): void;
export function scrollTo(element: HTMLElement, arg2: ScrollToOptions | number, y?: number): void {
  if (typeof arg2 === 'number' && typeof y === 'number') {
    element.scrollTo(arg2, y);
  } else {
    element.scrollTo(arg2 as ScrollToOptions);
  }
}

/**
 * Sets scroll position.
 */
export function setScrollPos(element: HTMLElement | null, scroll: number): void {
  if (!element) return;
  (element as any).scrollTop = scroll;
}

/**
 * Sets horizontal scroll position.
 */
export function setHScrollPos(element: HTMLElement | null, scroll: number): void {
  if (!element) return;
  (element as any).scrollLeft = scroll;
}

/**
 * Scrolls an element into view.
 */
export function scrollIntoView(element: HTMLElement): void;
export function scrollIntoView(element: HTMLElement, options: boolean | ScrollIntoViewOptions): void;
export function scrollIntoView(element: HTMLElement, options?: boolean | ScrollIntoViewOptions): void {
  if (!element) return;
  element.scrollIntoView(options ?? false);
}

/**
 * Scrolls an element into view only if needed.
 * NOTE: scrollIntoViewIfNeeded is not supported in Firefox because it is not a standard API.
 */
export function scrollIntoViewIfNeeded(element: HTMLElement): void;
export function scrollIntoViewIfNeeded(element: HTMLElement, options: boolean): void;
export function scrollIntoViewIfNeeded(element: HTMLElement, options?: boolean): void {
  if (!element) return;
  const anyElement = element as any;
  if (anyElement.scrollIntoViewIfNeeded) {
    anyElement.scrollIntoViewIfNeeded(options ?? false);
  }
}

/**
 * Checks if an element is in the viewport.
 */
export function isInViewport(element: HTMLElement | null): boolean | undefined {
  if (!element) return undefined;

  const rect = element.getBoundingClientRect();
  const height = window.innerHeight || document.documentElement.clientHeight;
  const width = window.innerWidth || document.documentElement.clientWidth;

  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= height && rect.right <= width;
}

/**
 * Triggers a download from a URI.
 */
export function triggerDownloadUri(filename: string, mtype: string, uri: string): void {
  const link = createElement('a') as HTMLAnchorElement;
  const extension = mediaTypeToExtension(mtype);
  const finalName = extension && !filename.endsWith(extension) ? filename + extension : filename;

  link.href = uri;
  link.download = finalName;
  (link.style as any).display = 'none';
  document.body.appendChild(link);
  link.click();
  link.remove();
}

/**
 * Triggers a download from a blob.
 */
export function triggerDownload(filename: string, blob: Blob): void {
  triggerDownloadUri(filename, blob.type, URL.createObjectURL(blob));
}

/**
 * Creates a DOM Event.
 */
export function createEvent(type: string): Event;
export function createEvent(type: string, options: EventInit): Event;
export function createEvent(type: string, options?: EventInit): Event {
  if (options) {
    return new Event(type, options);
  }
  return new Event(type);
}

/**
 * Dispatches an event on a target.
 */
export function dispatchEvent(target: EventTarget | null, event: Event): boolean {
  if (!target) return false;
  return target.dispatchEvent(event);
}

/**
 * Saves a file using the File System Access API if available, otherwise uses fallback.
 */
export async function saveAs(uri: string, filename: string, mtype: string, description: string): Promise<void> {
  // Only Chrome supports save dialog
  const anyWindow = window as any;

  if ('showSaveFilePicker' in anyWindow) {
    const extension = mediaTypeToExtension(mtype);
    const opts = {
      suggestedName: `${filename}.${extension}`,
      types: [
        {
          description,
          accept: { [mtype]: [`.${extension}`] }
        }
      ]
    };

    try {
      const fileSystem = await anyWindow.showSaveFilePicker(opts);
      const writable = await fileSystem.createWritable();
      const response = await fetch(uri);
      const blob = await response.blob();
      await writable.write(blob);
      await writable.close();
    } catch (error) {
      const err = error as DOMException;
      if (!(err instanceof DOMException && err.name === 'AbortError')) {
        triggerDownloadUri(filename, mtype, uri);
      }
    }
  } else {
    triggerDownloadUri(filename, mtype, uri);
  }
}

/**
 * Checks if left mouse button was pressed.
 */
export function isLeftMouse(event: MouseEvent | any): boolean {
  const nativeEvent = event.nativeEvent ?? event;
  return nativeEvent.which === 1;
}

/**
 * Checks if middle mouse button was pressed.
 */
export function isMiddleMouse(event: MouseEvent | any): boolean {
  const nativeEvent = event.nativeEvent ?? event;
  return nativeEvent.which === 2;
}

/**
 * Opens a new window with security measures against reverse tabnabbing.
 * https://www.comparitech.com/blog/information-security/reverse-tabnabbing/
 */
export function openNewWindow(uri: string): Window | null;
export function openNewWindow(uri: string, name: string): Window | null;
export function openNewWindow(uri: string, name: string, features: string): Window | null;
export function openNewWindow(uri: string, name = '_blank', features = 'noopener,noreferrer'): Window | null {
  const newWindow = window.open(uri, name, features);

  if (newWindow && name !== '_blank') {
    newWindow.location?.reload();
  }

  return newWindow;
}

/**
 * Navigates browser back.
 */
export function browserBack(): void {
  window.history.back();
}

/**
 * Reloads current window.
 */
export function reloadCurrentWindow(force?: boolean): void {
  window.location.reload(force);
}

/**
 * Scrolls by amount.
 */
export function scrollBy(element: HTMLElement, x: number, y: number): void;
export function scrollBy(x: number, y: number): void;
export function scrollBy(arg1: HTMLElement | number, x?: number, y?: number): void {
  if (typeof arg1 === 'number' && typeof x === 'number' && typeof y === 'number') {
    window.scrollBy(arg1, x);
  } else if (arg1 instanceof HTMLElement && typeof x === 'number' && typeof y === 'number') {
    arg1.scrollBy(x, y);
  }
}

/**
 * Animates an element.
 */
export function animate(
  item: Element,
  keyframes: Keyframe[],
  duration: number,
  onfinish?: () => void
): Animation | undefined {
  const animation = item.animate(keyframes, duration);
  if (onfinish) {
    animation.onfinish = onfinish;
  }
  return animation;
}

/**
 * Checks if candidate is a child of node.
 */
export function isChildOf(node: Node | null, candidate: Node | null): boolean {
  if (!node || !candidate) return false;
  return node.contains(candidate);
}

/**
 * Sequences all descendant nodes.
 */
export function* seqNodes(rootNode: Node): Generator<Node> {
  const branch = (n: Node) => n.children.length > 0;

  for (const node of getTreeSeq(rootNode, branch, (n: Node) => Array.from(n.children))) {
    yield node;
  }
}

function* getTreeSeq<T>(
  root: T,
  branch?: (node: T) => boolean,
  children?: (node: T) => T[]
): Generator<T> {
  yield root;

  const hasChildren = branch?.(root) ?? false;
  if (hasChildren) {
    const childNodes = children?.(root) ?? [];
    for (const child of childNodes) {
      yield* getTreeSeq(child, branch, children);
    }
  }
}

/**
 * Checks if a font is available.
 */
export function checkFont(font: string): boolean {
  const fonts = (document as any).fonts;
  return fonts.check(font);
}

/**
 * Loads a font.
 */
export function loadFont(font: string): Promise<FontFace> {
  const fonts = (document as any).fonts;
  return fonts.load(font);
}

/**
 * Measures font metrics.
 */
export function textMeasure(font: string): { ascent: number; descent: number } {
  const element = document.createElement('canvas');
  const context = element.getContext('2d');

  if (!context) {
    return { ascent: 0, descent: 0 };
  }

  context.font = font;
  const measure = context.measureText('Ag');

  return {
    ascent: (measure as any).fontBoundingBoxAscent,
    descent: (measure as any).fontBoundingBoxDescent
  };
}

/**
 * Clones a node.
 */
export function cloneNode(node: Node): Node;
export function cloneNode(node: Node, deep: boolean): Node;
export function cloneNode(node: Node, deep = true): Node {
  return node.cloneNode(deep);
}

/**
 * Gets children of a node.
 */
export function getChildren(node: Node | null): HTMLCollection | undefined {
  if (!node) return undefined;
  const element = node as Element;
  return element.children;
}

/**
 * Checks if node has children.
 */
export function hasChildren(node: Node | null): boolean {
  if (!node) return false;
  const element = node as Element;
  return element.children.length > 0;
}

/**
 * WARNING: Use only for debugging. It's too costly to use for real.
 * Given a canvas' context 2d and text info returns its ascent/descent info.
 */
export function measureText(
  context2d: CanvasRenderingContext2D,
  fontSize: number,
  fontFamily: string,
  text: string
): { descent: number; ascent: number } {
  context2d.font = `${fontSize} ${fontFamily}`;
  const measures = context2d.measureText(text);

  return {
    descent: (measures as any).actualBoundingBoxDescent,
    ascent: (measures as any).actualBoundingBoxAscent
  };
}

/**
 * Gets first child of a node.
 */
export function firstChild(node: Node | null): Node | undefined {
  return node?.firstChild ?? undefined;
}

/**
 * Gets last child of a node.
 */
export function lastChild(node: Node | null): Node | undefined {
  return node?.lastChild ?? undefined;
}

/**
 * Prevents browser gesture navigation.
 * Prevents browser from interpreting trackpad horizontal swipe as back/forth.
 */
export function preventBrowserGestureNavigation(): void {
  // Disable overscroll behavior for document element and body
  (document.documentElement.style as any).overscrollBehaviorX = 'none';
  document.body.style.overscrollBehaviorX = 'none';
}
