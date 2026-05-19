/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (c) KALEIDOS INC
 */

import { d } from "../../../common/data";
import * as dm from "../../../common/data/macros";
import * as ex from "../../../common/exceptions";
import * as cfeat from "../../../common/features";
import * as pcb from "../../../common/files/changes-builder";
import * as cfh from "../../../common/files/helpers";
import * as cfv from "../../../common/files/variant";
import * as gpt from "../../../common/geom/point";
import * as grc from "../../../common/geom/rect";
import * as gsh from "../../../common/geom/shapes";
import * as gslg from "../../../common/geom/shapes/grid-layout";
import * as cll from "../../../common/libraries";
import * as sm from "../../../common/schema";
import * as t from "../../../common/transit";
import * as ctc from "../../../common/types/component";
import * as ctn from "../../../common/types/container";
import * as ctf from "../../../common/types/file";
import * as cts from "../../../common/types/shape";
import * as ctst from "../../../common/types/shape-tree";
import * as ctl from "../../../common/types/shape/layout";
import * as typesText from "../../../common/types/shape/text";
import * as txt from "../../../common/types/text";
import * as ctt from "../../../common/types/typography";
import { uuid } from "../../../common/uuid";
import * as cf from "../../../config";
import * as dch from "../changes";
import * as ev from "../event";
import * as dsh from "../helpers";
import * as ntf from "../notifications";
import * as dps from "../persistence";
import * as dwm from "./media";
import * as dws from "./selection";
import * as dwsh from "./shapes";
import * as dwtxt from "./texts";
import * as dwu from "./undo";
import { features } from "../features";
import * as refs from "../refs";
import * as rp from "../repo";
import * as rt from "../router";
import * as st from "../store";
import * as ms from "../streams";
import * as clipboard from "../../../util/clipboard";
import * as svg from "../../../util/code-gen/markup-svg";
import * as css from "../../../util/code-gen/style-css";
import * as ug from "../../../util/globals";
import * as http from "../../../util/http";
import * as i18n from "../../../util/i18n";
import * as tc from "../../../util/text/content";
import * as wapi from "../../../util/webapi";
import * as rx from "beicon.v2.core";
import * as p from "promesa.core";
import { tr } from i18n;

export interface CopySelectedEvent extends Event {
  type: "copy-selected";
}

export function copySelected(): CopySelectedEvent {
  return { type: "copy-selected" };
}

export interface PasteFromClipboardEvent extends Event {
  type: "paste-from-clipboard";
}

export function pasteFromClipboard(): PasteFromClipboardEvent {
  return { type: "paste-from-clipboard" };
}

export interface PasteFromEvent extends Event {
  type: "paste-from-event";
  event: ClipboardEvent;
  inViewport: boolean;
}

export function pasteFromEvent(event: ClipboardEvent, inViewport: boolean): PasteFromEvent {
  return { type: "paste-from-event", event, inViewport };
}

export interface CopySelectedSvgEvent extends Event {
  type: "copy-selected-svg";
}

export function copySelectedSvg(): CopySelectedSvgEvent {
  return { type: "copy-selected-svg" };
}

export interface CopySelectedCssEvent extends Event {
  type: "copy-selected-css";
}

export function copySelectedCss(): CopySelectedCssEvent {
  return { type: "copy-selected-css" };
}

export interface CopySelectedCssNestedEvent extends Event {
  type: "copy-selected-css-nested";
}

export function copySelectedCssNested(): CopySelectedCssNestedEvent {
  return { type: "copy-selected-css-nested" };
}

export interface CopySelectedTextEvent extends Event {
  type: "copy-selected-text";
}

export function copySelectedText(): CopySelectedTextEvent {
  return { type: "copy-selected-text" };
}

export interface CopySelectedPropsEvent extends Event {
  type: "copy-selected-props";
}

export function copySelectedProps(): CopySelectedPropsEvent {
  return { type: "copy-selected-props" };
}

export interface PasteSelectedPropsEvent extends Event {
  type: "paste-selected-props";
}

export function pasteSelectedProps(): PasteSelectedPropsEvent {
  return { type: "paste-selected-props" };
}

export interface CopyLinkToClipboardEvent extends Event {
  type: "copy-link-to-clipboard";
}

export function copyLinkToClipboard(): CopyLinkToClipboardEvent {
  return { type: "copy-link-to-clipboard" };
}

interface PasteData {
  type: "copied-shapes" | "copied-props";
  features: Set<string>;
  version: number;
  file-id: string;
  selected: Set<string>;
  objects: Map<string, any>;
  images: Array<any>;
  position?: gpt.Point;
  variant-properties?: Map<string, any>;
}

const DEFAULT_OPTIONS = {
  decodeTransit: t.decodeStr,
  allowHTMLPaste: features.isActiveFeature(st.getState(), "text-editor/v2-html-paste"),
};

function createPasteFromBlob(inViewport: boolean) {
  return function (blob: Blob) {
    const type = blob.type;

    if (type === "image/svg+xml") {
      return rx.from(blob.text()).map(pasteSvgText);
    }

    if (clipboard.imageTypes.includes(type)) {
      return rx.of(pasteImage(blob));
    }

    if (type === "text/html") {
      return rx.from(blob.text()).map(pasteHtmlText);
    }

    if (type === "application/transit+json") {
      return rx.from(blob.text())
        .map(t.decodeStr)
        .filter((data: any) => typeof data === "object" && data !== null)
        .map((pdata: any) => ({
          ...pdata,
          inViewport,
        }))
        .mapcat((pdata: any) => {
          switch (pdata.type) {
            case "copied-props":
              return rx.of(pasteTransitProps(pdata));
            case "copied-shapes":
              return rx.of(pasteTransitShapes(pdata));
            default:
              return rx.empty();
          }
        });
    }

    return rx.from(blob.text()).map(pasteText);
  };
}

const defaultPasteFromBlob = createPasteFromBlob(false);

function isClipboardPermissionError(cause: any): boolean {
  return cause instanceof DOMException && cause.name === "NotAllowedError";
}

function onClipboardPermissionError(cause: any) {
  if (isClipboardPermissionError(cause)) {
    return rx.of(ntf.show({
      content: tr("errors.clipboard-permission-denied"),
      type: "toast",
      level: "warning",
      timeout: 5000,
    }));
  }
  return rx.throw(cause);
}

export interface PasteShapesEvent extends Event {
  type: "paste-shapes";
  data: PasteData;
  inViewport: boolean;
}

function pasteShapes(data: PasteData & { inViewport: boolean }): PasteShapesEvent {
  return { type: "paste-shapes", data, inViewport };
}

// Export all paste-related events
export const ClipboardEvents = {
  copySelected,
  pasteFromClipboard,
  pasteFromEvent,
  copySelectedSvg,
  copySelectedCss,
  copySelectedCssNested,
  copySelectedText,
  copySelectedProps,
  pasteSelectedProps,
  copyLinkToClipboard,
  pasteShapes,
};