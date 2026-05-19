// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as txt from "app/common/types/text";
import * as refs from "app/main/refs";
import * as fd from "app/util/text/content/from-dom";
import * as td from "app/util/text/content/to-dom";

export function domToCljs(root: HTMLElement): ReturnType<typeof fd.createRoot> {
  return fd.createRoot(root);
}

export function cljsToDom(root: txt.TextRoot): ReturnType<typeof td.createRoot> {
  return td.createRoot(root);
}

export function v2DefaultTextContent(): txt.TextRoot {
  const defaultFont = refs.defaultFont.deref();
  const textDefaults = {...txt.getDefaultTextAttrs(), ...defaultFont};
  const defaultSpan = {
    ...{text: ""},
    ...txt.selectKeys(textDefaults, txt.textNodeAttrs),
  };
  const defaultParagraph = {
    ...{type: "paragraph", children: [defaultSpan]},
    ...txt.selectKeys(textDefaults, txt.paragraphAttrs),
  };
  const defaultParagraphSet = {
    type: "paragraph-set",
    children: [defaultParagraph],
  };
  return {
    ...{type: "root", children: [defaultParagraphSet]},
    ...txt.defaultRootAttrs,
    ...txt.selectKeys(textDefaults, txt.rootAttrs),
  };
}
