// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// import { getDefaultTextAttrs } from '../../../common/types/text';
// import { defaultFont } from '../../../main/refs';
// import { getTextDefaults } from '../../../common/types/text';
// import { createRoot } from '../../../util/text/content/from-dom';
// import { createRoot } from '../../../util/text/content/to-dom';

/**
 * Gets the editor content from a DOM structure.
 */
export function domToCljs(root: any): any {
  return createRoot(root);
}

/**
 * Sets the editor content from a CLJS structure.
 */
export function cljsToDom(root: any): any {
  return createRoot(root);
}

/**
 * Build the base text tree (root -> paragraph-set -> paragraph -> span) with
 * the current default typography. Used by the V2 editor/WASM path
 * when a shape is created with no content yet.
 */
export const v2DefaultTextContent = (() => {
  const defaultFontRef = null; // TODO: deref refs/default-font
  const textDefaults = { /* TODO: merge */ };
  const defaultSpan = { /* TODO: merge */ };
  const defaultParagraph = {
    type: 'paragraph',
    children: [defaultSpan]
  };

  const defaultParagraphSet = {
    type: 'paragraph-set',
    children: [defaultParagraph]
  };

  return {
    type: 'root',
    children: [defaultParagraphSet]
  };
})();
