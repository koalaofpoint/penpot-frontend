// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as features from "app/main/features";
import * as st from "app/main/store";
import * as dom from "app/util/dom";

export function v1ClosestTextEditorContent(target: HTMLElement): HTMLElement | null {
  return target.closest(".public-DraftEditor-content");
}

export function v2ClosestTextEditorContent(target: HTMLElement): HTMLElement | null {
  return target.closest("[data-itype=\"editor\"]");
}

export function closestTextEditorContent(
  target: HTMLElement,
): HTMLElement | null {
  if (features.activeFeature(st.state, "text-editor/v2")) {
    return v2ClosestTextEditorContent(target);
  }
  return v1ClosestTextEditorContent(target);
}

export function someTextEditorContent(target: HTMLElement): boolean {
  return closestTextEditorContent(target) !== null;
}

export function v1GetTextEditorContent(): HTMLElement | null {
  return dom.getElementByClass("public-DraftEditor-content");
}

export function v2GetTextEditorContent(): HTMLElement | null {
  return dom.query("[data-itype=\"editor\"]");
}

export function getTextEditorContent(): HTMLElement | null {
  if (features.activeFeature(st.state, "text-editor/v2")) {
    return v2GetTextEditorContent();
  }
  return v1GetTextEditorContent();
}
