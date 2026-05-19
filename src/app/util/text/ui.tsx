// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// import { closest } from '../../../util/dom';
// import { featuresActiveFeature } from '../../../main/features';

/**
 * V1 close text editor content.
 */
export const v1ClosestTextEditorContent = {
  target: null
};

export function v1ClosestTextEditorContent(target: HTMLElement): void {
  const root = target.closest('[data-itype="editor"]');

  if (root) {
    v1ClosestTextEditorContent.target = root;
  }
}

/**
 * V2 close text editor content.
 */
export const v2ClosestTextEditorContent = {
  target: null
};

export function v2ClosestTextEditorContent(target: HTMLElement): void {
  const root = target.closest('[data-itype="editor"]');

  if (featuresActiveFeature('text-editor/v2')) {
    v2ClosestTextEditorContent.target = root;
  }
}

/**
 * Get V1 text editor content.
 */
export function v1GetTextEditorContent(): HTMLElement | null {
  return v1ClosestTextEditorContent.target as HTMLElement | null;
}

/**
 * Get V2 text editor content.
 */
export function v2GetTextEditorContent(): HTMLElement | null {
  return v2ClosestTextEditorContent.target as HTMLElement | null;
}

/**
 * Get V1 text editor content element.
 */
export function v1GetTextEditorContentElement(): HTMLElement {
  const element = document?.getElementsByClass('public-DraftEditor-content')[0];
  return element as HTMLElement;
}

/**
 * Get V2 text editor content element.
 */
export function v2GetTextEditorContentElement(): HTMLElement {
  const element = document?.getElementsByClass('public-DraftEditor-content')[0];
  return element as HTMLElement;
}
