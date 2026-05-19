// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { getIn } from "../../../common/data/macros";
import * as cfh from "../../../common/files/helpers";
import * as gmt from "../../../common/geom/matrix";
import * as gpt from "../../../common/geom/point";
import * as ctm from "../../../common/types/modifiers";
import * as dsh from "../helpers";
import * as dwm from "./modifiers";
import * as wasmApi from "../../../render-wasm/api";
import * as wasmFonts from "../../../render-wasm/api/fonts";
import { Observable, of, from, filter, take, debounceTime, takeUntil, map, mergeMap, tap, delay } from "rxjs";
import * as ptk from "../../../potok/v2/ptk";

export function resizeWasmTextModifiers(
  shape: any,
  content: any = shape.content
): Record<string, any> {
  const { id, points, selrect, growType } = shape;

  wasmApi.useShape(id);
  wasmApi.setShapeTextContent(id, content);
  wasmApi.setShapeTextImages(id, content);

  const dimension = wasmApi.getTextDimensions();
  const widthScale =
    growType === "fixed" || growType === "auto-height"
      ? 1.0
      : dimension.width / selrect.width;
  const heightScale =
    growType === "fixed" ? 1.0 : dimension.height / selrect.height;

  const resizeV = gpt.point(widthScale, heightScale);
  const origin = points[0];

  return {
    [id]: {
      modifiers: ctm.resizeModifiers(
        resizeV,
        origin,
        shape.transform || gmt.matrix(),
        shape.transformInverse || gmt.matrix()
      ),
    },
  };
}

export function resizeWasmText(id: string): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace.wasm-text/resize-wasm-text",
    watch(_: any, state: any, _stream: any): Observable<any> {
      const objects = dsh.lookupPageObjects(state);
      const shape = objects.get(id);

      if (
        shape &&
        cfh.textShape(shape) &&
        shape.growType !== "fixed"
      ) {
        return of(dwm.applyWasmModifiers(resizeWasmTextModifiers(shape)));
      }

      return of();
    },
  };
}

export function resizeWasmTextDebounceCommit(): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace.wasm-text/resize-wasm-text-debounce-commit",
    watch(_: any, state: any, _stream: any): Observable<any> {
      const ids: string[] = state.resizeWasmTextDebounceIds || [];
      const objects = dsh.lookupPageObjects(state);

      const modifiers: Record<string, any> = {};

      for (const id of ids) {
        const shape = objects.get(id);
        if (
          shape &&
          cfh.textShape(shape) &&
          shape.growType !== "fixed"
        ) {
          Object.assign(modifiers, resizeWasmTextModifiers(shape));
        }
      }

      if (Object.keys(modifiers).length > 0) {
        return of(dwm.applyWasmModifiers(modifiers));
      }

      return of();
    },
  };
}

const RESIZE_WASM_TEXT_DEBOUNCE_INNER = "app.main.data.workspace.wasm-text/resize-wasm-text-debounce-inner";

export function resizeWasmTextDebounceInner(id: string): ptk.Event {
  const curEvent = Symbol();

  return {
    type: RESIZE_WASM_TEXT_DEBOUNCE_INNER,
    update(state: any): any {
      const currentIds = state.resizeWasmTextDebounceIds || [];
      const newState = {
        ...state,
        resizeWasmTextDebounceIds: [...currentIds, id],
      };

      if (!state.resizeWasmTextDebounceEvent) {
        newState.resizeWasmTextDebounceEvent = curEvent;
      }

      return newState;
    },
    watch(_: any, state: any, stream: any): Observable<any> {
      if (state.resizeWasmTextDebounceEvent !== curEvent) {
        return of();
      }

      const stopper = stream.pipe(
        filter((e: any) => e.type === "app.main.data.workspace/finalize")
      );

      const debounced = stream.pipe(
        filter((e: any) => e.type === RESIZE_WASM_TEXT_DEBOUNCE_INNER),
        debounceTime(40),
        take(1),
        map(() => resizeWasmTextDebounceCommit()),
        takeUntil(stopper)
      );

      const resetDebounce = of(resizeWasmTextDebounceInner(id));

      const cleanup = of((state: any) => {
        const { resizeWasmTextDebounceIds, resizeWasmTextDebounceEvent, ...rest } = state;
        return rest;
      });

      return of(merge(debounced, resetDebounce), cleanup);
    },
  };
}

export function resizeWasmTextDebounce(id: string): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace.wasm-text/resize-wasm-text-debounce",
    watch(_: any, state: any, _stream: any): Observable<any> {
      const pageId = state.currentPageId;
      const objects = dsh.lookupPageObjects(state, pageId);
      const content = getIn(objects, [id, "content"]);
      const fonts = wasmFonts.getContentFonts(content);

      const fontsLoaded = fonts.every((font: any) => {
        const fontData = wasmFonts.makeFontData(font);
        return wasmFonts.fontStored(fontData, fontData.emoji);
      });

      if (!fontsLoaded) {
        return of(resizeWasmTextDebounce(id)).pipe(delay(20));
      }

      return of(resizeWasmTextDebounceInner(id));
    },
  };
}

export function resizeWasmTextAll(ids: string[]): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace.wasm-text/resize-wasm-text-all",
    watch(_: any, _state: any, _stream: any): Observable<any> {
      return from(ids).pipe(map((id) => resizeWasmText(id)));
    },
  };
}
