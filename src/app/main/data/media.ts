// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { ex } from "../../common/exceptions";
import { cm } from "../../common/media";
import { ntf } from "./notifications";
import { st } from "./store";
import { tr } from "../../util/i18n";
import { rx } from "../../beicon/v2";

// FIXME: revisit the need of this NS

// --- Predicates

export const isFile = (o: any): o is File => o instanceof File;

export const isBlob = (o: any): o is Blob => o instanceof Blob;

// --- Specs

export interface Notification {
  level?: "success" | "error" | "info" | "warning";
  status?: "visible" | "hide";
  position?: "fixed" | "floating" | "inline";
  type?: "inline" | "context" | "toast";
  controls?: "none" | "close" | "inline-actions" | "bottom-actions";
  tag?: string | symbol;
  timeout?: number;
  accept?: { label: string; callback: () => void };
  cancel?: { label: string; callback: () => void };
  actions?: Array<{ label: string; callback: () => void }>;
  links?: Array<{ label: string; callback: () => void }>;
}

// --- Utility functions

export const validateFile = (file: File): File => {
  if (!cm.imageTypes.includes(file.type)) {
    ex.throw(
      "validation",
      "media-type-not-allowed",
      `media type ${file.type} is not supported`
    );
  }
  return file;
};

export const notifyStartLoading = (): void => {
  st.emit(ntf.show({
    content: tr("media.loading"),
    tag: "media-upload",
    type: "toast",
    level: "info",
    timeout: null,
  }));
};

export const notifyFinishedLoading = (): void => {
  st.emit(ntf.hide("media-upload"));
};

export const processError = (error: any): rx.Observable<any> => {
  const msg = error.message
    ? error.message
    : error.code === "media-type-not-allowed"
      ? tr("errors.media-type-not-allowed")
      : error.code === "media-type-mismatch"
        ? tr("errors.media-type-mismatch")
        : tr("errors.unexpected-error");

  return rx.of(ntf.error(msg));
};