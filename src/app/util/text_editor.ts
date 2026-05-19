// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import {
//   createEditorState,
//   createDecorator,
//   convertFromRaw,
//   convertToRaw,
//   getPlainText,
//   getCurrentContent,
//   selectAll,
//   getCurrentBlock,
//   splitBlockPreservingData,
//   addBlurSelectionEntity,
//   removeBlurSelectionEntity,
//   cursorToEnd,
//   updateBlockData,
//   getBlockData,
//   getType,
//   isCurrentEmpty,
//   getCurrentInlineStyle,
//   updateCurrentBlockData,
//   updateBlockData,
//   getBlockData,
//   applyInlineStyle,
//   getSelection,
//   getSelectedBlocks,
//   setSelection,
//   getBlockContent,
//   getInlineStyle,
//   updateBlockData,
//   applyInlineStyle,
//   getSelection,
//   getInlineStyleOverride,
//   setInlineStyleOverride,
//   equals,
//   selectionEquals,
//   getBlockMap
// } from '@penpot/draft-js';
// import { convertToDraft, convertFromDraft } from '../../common/text';

/**
 * Editor state interface
 */
export interface EditorState {
  getCurrentContent(): unknown;
  getPlainText(): string;
  getSelection(): unknown;
  // ... more methods
}

/**
 * Content change type
 */
export interface ContentChange {
  added?: Array<{ key: string; text: string }>;
  updated?: Array<{ key: string; old: string; new: string }>;
  removed?: Array<{ key: string; text: string }>;
}

/**
 * Block data interface
 */
export interface BlockData {
  text: string;
  fills?: unknown;
  // ... more properties
}

/**
 * Block type
 */
export type BlockType = 'paragraph' | 'heading' | 'list' | 'quote' | 'code';

/**
 * Inline style attributes
 */
export interface InlineStyleAttrs {
  textAlign?: string;
  textDirection?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  textTransform?: string;
  textDecoration?: string;
  letterSpacing?: string;
  fontStyle?: string;
  // ... more properties
}

/**
 * Convert immutable map to regular object
 */
function immutableMapToMap(obj: unknown): BlockData {
  if (!obj || typeof obj !== 'object') {
    return { text: '' };
  }

  const entries = Object.entries(obj as Record<string, unknown>);
  const data: Record<string, unknown> = {};

  for (const [key, value] of entries) {
    data[key] = value;
    if (key === 'fills' && typeof value === 'object') {
      // Convert fills to proper format
      data[key] = (value as Record<string, unknown>);
    }
  }

  return data as BlockData;
}

/**
 * Create editor state
 */
export function createEditorState(): EditorState;
export function createEditorState(content: unknown): EditorState;
export function createEditorState(content?: unknown, decorator?: unknown): EditorState {
  // TODO: Implement with draft-js
  // return createEditorState(content, decorator);
  return {} as EditorState;
}

/**
 * Create decorator
 */
export function createDecorator(type: string, component: unknown): unknown {
  // TODO: Implement with draft-js
  // return createDecorator(type, component);
  return {};
}

/**
 * Import content to editor format
 */
export function importContent(content: unknown): unknown {
  // TODO: Implement with draft-js
  // return convertFromRaw(convertToDraft(content));
  return content;
}

/**
 * Export content from editor format
 */
export function exportContent(content: unknown): unknown {
  // TODO: Implement with draft-js
  // return convertFromDraft(convertToRaw(content));
  return content;
}

/**
 * Get editor current plain text
 */
export function getEditorCurrentPlainText(state: EditorState): string {
  // TODO: Implement with draft-js
  // return getPlainText(state);
  return '';
}

/**
 * Get editor current content
 */
export function getEditorCurrentContent(state: EditorState): unknown {
  // TODO: Implement with draft-js
  // return getCurrentContent(state);
  return state;
}

/**
 * Check if content has text
 */
export function contentHasText?(content: unknown): boolean {
  // TODO: Implement with draft-js
  // return hasText(content);
  return false;
}

/**
 * Select all in editor
 */
export function editorSelectAll(state: EditorState): EditorState {
  // TODO: Implement with draft-js
  // return selectAll(state);
  return state;
}

/**
 * Get editor current block data
 */
export function getEditorCurrentBlockData(state: EditorState): BlockData | null {
  // TODO: Implement with draft-js
  // const block = getCurrentBlock(state);
  // return block ? immutableMapToMap(getBlockData(block)) : null;
  return null;
}

/**
 * Get editor current block type
 */
export function getEditorCurrentBlockType(state: EditorState): BlockType | null {
  // TODO: Implement with draft-js
  // const block = getCurrentBlock(state);
  // return block ? getType(block) : null;
  return null;
}

/**
 * Get editor current inline styles
 */
export function getEditorCurrentInlineStyles(state: EditorState): InlineStyleAttrs {
  // TODO: Implement with draft-js
  // if (isCurrentEmpty(state)) {
  //   return immutableMapToMap(getEditorCurrentBlockData(state)!) as InlineStyleAttrs;
  // }
  //
  // const style = getCurrentInlineStyle(state);
  // return attrsToStyles(style);
  return {};
}

/**
 * Update editor current block data
 */
export function updateEditorCurrentBlockData(state: EditorState, attrs: Partial<BlockData>): EditorState {
  // TODO: Implement with draft-js
  // return updateCurrentBlockData(state, attrs);
  return state;
}

/**
 * Update editor current inline styles
 */
export function updateEditorCurrentInlineStyles(state: EditorState, attrs: Partial<InlineStyleAttrs>): EditorState {
  // TODO: Implement with draft-js
  // const updateBlocks = (currentState: EditorState, blockKey: unknown) => {
  //   const content = getBlockContent(currentState, blockKey);
  //   if (isEmpty(content)) {
  //     return updateBlockData(currentState, blockKey, attrs);
  //   }
  //
  //   const style = getInlineStyle(currentState, blockKey, 0);
  //   const styleAttrs = stylesToAttrs(style);
  //   return updateBlockData(currentState, blockKey, styleAttrs);
  // };
  //
  // const currentState = applyInlineStyle(state, attrsToStyles(attrs));
  // const selectionAfterApply = getSelection(currentState);
  // const selected = getSelectedBlocks(currentState);
  // const newState = selected.reduce(updateBlocks, currentState);
  // return setSelection(newState, selectionAfterApply);
  return state;
}

/**
 * Update editor current inline styles with function
 */
export function updateEditorCurrentInlineStylesFn(state: EditorState, updateFn: (style: InlineStyleAttrs) => InlineStyleAttrs): EditorState {
  // TODO: Implement with draft-js
  // const style = getCurrentInlineStyle(state);
  // const styleAttrs = stylesToAttrs(style);
  // const updatedAttrs = updateFn(styleAttrs);
  // return applyInlineStyle(state, attrsToStyles(updatedAttrs));
  return state;
}

/**
 * Split editor block at current cursor
 */
export function editorSplitBlock(state: EditorState): EditorState {
  // TODO: Implement with draft-js
  // return splitBlockPreservingData(state);
  return state;
}

/**
 * Add blur selection entity
 */
export function addEditorBlurSelection(state: EditorState): EditorState {
  // TODO: Implement with draft-js
  // return addBlurSelectionEntity(state);
  return state;
}

/**
 * Remove blur selection entity
 */
export function removeEditorBlurSelection(state: EditorState): EditorState {
  // TODO: Implement with draft-js
  // return removeBlurSelectionEntity(state);
  return state;
}

/**
 * Move cursor to end of content
 */
export function cursorToEnd(state: EditorState): EditorState {
  // TODO: Implement with draft-js
  // return cursorToEnd(state);
  return state;
}

/**
 * Setup block styles for specific blocks
 */
export function setupBlockStyles(state: EditorState, blocks: unknown[], attrs: Partial<BlockData>): EditorState {
  // TODO: Implement with draft-js
  // if (isEmpty(blocks)) {
  //   return state;
  // }
  //
  // const newState = blocks.reduce((currentState, blockKey) => {
  //   return updateBlockData(currentState, blockKey, attrs);
  // }, state);
  // return newState;
  return state;
}

/**
 * Apply block styles to content
 */
export function applyBlockStylesToContent(state: EditorState, blocks: unknown[]): EditorState {
  // TODO: Implement with draft-js
  // if (isEmpty(blocks)) {
  //   return state;
  // }
  //
  // const selection = getSelection(state);
  //
  // const redfn = (currentState: EditorState, bkey: unknown) => {
  //   const attrs = getBlockData(currentState, bkey);
  //   return currentState
  //     .selectBlock(bkey)
  //     .applyInlineStyle(attrsToStyles(attrs));
  // };
  //
  // const newState = blocks.reduce(redfn, state);
  // return setSelection(newState, selection);
  return state;
}

/**
 * Insert text at cursor position
 */
export function insertText(state: EditorState, text: string, attrs?: Partial<InlineStyleAttrs>): EditorState {
  // TODO: Implement with draft-js
  // const style = attrsToStyles(attrs ?? {});
  // return insertText(state, text, attrs, style);
  return state;
}

/**
 * Get style override
 */
export function getStyleOverride(state: EditorState): unknown {
  // TODO: Implement with draft-js
  // return getInlineStyleOverride(state);
  return null;
}

/**
 * Set style override
 */
export function setStyleOverride(state: EditorState, inlineStyle: unknown): EditorState {
  // TODO: Implement with draft-js
  // return setInlineStyleOverride(state, inlineStyle);
  return state;
}

/**
 * Check if content is equal
 */
export function contentEquals(state: EditorState, other: EditorState): boolean {
  // TODO: Implement with draft-js
  // return equals(getCurrentContent(state), getCurrentContent(other));
  return false;
}

/**
 * Check if selection is equal
 */
export function selectionEquals(state: EditorState, other: EditorState): boolean {
  // TODO: Implement with draft-js
  // return selectionEquals(getSelection(state), getSelection(other));
  return false;
}

/**
 * Get content changes between two states
 */
export function getContentChanges(oldState: EditorState, state: EditorState): ContentChange {
  // TODO: Implement with draft-js
  // const oldBlocks = toJS(getBlockMap(getCurrentContent(oldState)));
  // const newBlocks = toJS(getBlockMap(getCurrentContent(state)));
  //
  // const added = filter(newBlocks, bkey => !has(oldBlocks, bkey))
  //   .map(bkey => ({ key: bkey, text: getIn(newBlocks, [bkey, 'text']) }));
  //
  // const updated = filter(oldBlocks, bkey => has(newBlocks, bkey))
  //   .map(bkey => ({
  //     key: bkey,
  //     old: getIn(oldBlocks, [bkey, 'text']),
  //     new: getIn(newBlocks, [bkey, 'text'])
  //   }));
  //
  // const removed = filter(oldBlocks, bkey => !has(newBlocks, bkey))
  //   .map(bkey => ({ key: bkey, text: getIn(oldBlocks, [bkey, 'text']) }));
  //
  // return { added, updated, removed };
  return {};
}
