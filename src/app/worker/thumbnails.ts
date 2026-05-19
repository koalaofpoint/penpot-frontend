// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as rds from "react-dom/server";
import * as dm from "app/common/data/macros";
import * as grc from "app/common/geom/rect";
import * as gsb from "app/common/geom/shapes/bounds";
import * as log from "app/common/logging";
import * as cc from "app/common/types/color";
import * as u from "app/common/uri";
import * as uuid from "app/common/uuid";
import * as cf from "app/config";
import * as fonts from "app/main/fonts";
import * as render from "app/main/render";
import * as wasmApi from "app/render-wasm/api";
import * as wasm from "app/render-wasm/wasm";
import * as http from "app/util/http";
import * as impl from "app/worker/impl";
import * as rx from "beicon/v2/core";
import { atom } from "app/vendor/okulary";
import * as p from "promesa/core";
import * as mf from "rumext/v2";

log.setLevel("trace");

const thumbnailAspectRatio = 2 / 3;

function handleResponse(response: { body: any; status: number }): any {
  if (http.success(response)) {
    return rx.of(response.body);
  }

  if (response.status === 413) {
    return rx.throw({ type: ":validation", code: ":request-body-too-large", hint: "request body too large" });
  }

  if (http.clientError(response) && typeof response.body === "object") {
    return rx.throw(response.body);
  }

  return rx.throw({ type: ":unexpected-error", code: ":unhandled-http-response", "http-status": response.status, "http-body": response.body });
}

function requestDataForThumbnail(fileId: any, revn: number, stripFramesWithThumbnails: boolean): any {
  const path = "api/main/methods/get-file-data-for-thumbnail";
  const params = { fileId, revn, stripFramesWithThumbnails };
  const request = {
    method: ":get",
    uri: u.join(cf.publicUri, path),
    credentials: "include",
    query: params,
  };

  return rx.pipe(
    http.send(request),
    rx.map(http.conditionalDecodeTransit),
    rx.mapcat(handleResponse)
  );
}

////////////////////////////////////////////////////////////////;
// SVG RENDERING (LEGACY RENDER)
////////////////////////////////////////////////////////////////;

function renderThumbnail({ page, fileId, revn }: { page: any; fileId: any; revn: number }): any {
  try {
    const prevLoadedHints = fonts.loadedHints;
    fonts.loadedHints = atom(new Set());

    const objects = page.objects;
    const frame = page.thumbnailFrameId ? objects[page.thumbnailFrameId] : null;
    const backgroundColor = page.background;

    const element = frame
      ? mf.element(render.frameSvg, {
          objects,
          frame,
          useThumbnails: true,
          backgroundColor,
          aspectRatio: 2 / 3,
        })
      : mf.element(render.pageSvg, {
          data: page,
          useThumbnails: true,
          embed: true,
          aspectRatio: 2 / 3,
        });

    const data = rds.renderToStaticMarkup(element);

    const result = {
      data,
      fonts: fonts.loadedHints.deref(),
      fileId,
      revn,
    };

    fonts.loadedHints = prevLoadedHints;
    return result;
  } catch (cause) {
    console.error("unexpected error on rendering thumbnail", cause);
    return null;
  }
}

impl.handler[":thumbnails/generate-for-file"] = ({ fileId, revn }: { fileId: any; revn: number }) => {
  return rx.pipe(requestDataForThumbnail(fileId, revn, true), rx.map(renderThumbnail));
};

////////////////////////////////////////////////////////////////;
// WASM RENDERING
////////////////////////////////////////////////////////////////;

mf.defc(svgWrapper, {
  ["::mf/private"]: true,
}, ({ uri, background, width, height }: { uri: string; background: string; width: number; height: number }) =>
  mf.createElement("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    style: { width: "100%", height: "100%", background },
    fill: "none",
    viewBox: dm.str("0 0 ", width, " ", height),
  },
    mf.createElement("image", { xlinkHref: uri, width, height })
  )
);

function blobToUri(blob: Blob): string {
  return new FileReaderSync().readAsDataURL(blob);
}

function renderCanvasBlob(canvas: any, width: number, height: number, background: string): any {
  return p.fmap(
    canvas.convertToBlob(),
    (blob: Blob) =>
      rds.renderToStaticMarkup(
        mf.element(svgWrapper, {
          uri: blobToUri(blob),
          width,
          height,
          background,
        })
      )
  );
}

const wasmModule = (() => {
  const module = (globalThis as any)["WasmModule"];
  const initFn = module?.["default"];
  const href = cf.resolveHref("js/render-wasm.wasm");

  return p.fmap(
    initFn({ locateFile: () => href }),
    (module: any, cause: any) => {
      if (cause) {
        console.error(cause);
      } else {
        wasm.internalModule = module;
      }
    }
  );
})();

function renderThumbnailWithWasm({ id, fileId, revn, width }: { id: any; fileId: any; revn: number; width: number }): any {
  return rx.pipe(
    rx.from(wasmModule),
    rx.mapcat(() => requestDataForThumbnail(fileId, revn, false)),
    rx.mapcat(({ page }: { page: any }) => {
      return rx.create((subs: any) => {
        const bgcolor = page.background || cc.canvas;
        const height = width * thumbnailAspectRatio;
        const canvas = new OffscreenCanvas(width, height);
        const init = wasmApi.initCanvasContext(canvas);

        if (!init) {
          rx.end(subs);
          return;
        }

        const objects = page.objects;
        const frame = page.thumbnailFrameId ? objects[page.thumbnailFrameId] : null;
        const vbox = frame
          ? grc.fixAspectRatio(gsb.getObjectBounds(objects, frame), thumbnailAspectRatio)
          : render.calculateDimensions(objects, thumbnailAspectRatio);
        const zoom = width / vbox.width;

        wasmApi.initializeViewport(objects, zoom, vbox, bgcolor, () => {
          if (frame) {
            wasmApi.renderSyncShape(frame.id);
          } else {
            wasmApi.renderSync();
          }

          renderCanvasBlob(canvas, width, height, bgcolor).fmap((data: any, cause: any) => {
            wasmApi.clearCanvas();
            if (cause) {
              rx.error(subs, cause);
            } else {
              rx.push(subs, { id, data, fileId, revn });
            }
            rx.end(subs);
          });
        });

        return () => {};
      });
    })
  );
}

const thumbnailsQueue = rx.subject();
const thumbnailsStream = rx.pipe(
  thumbnailsQueue,
  rx.mapcat(renderThumbnailWithWasm),
  rx.share()
);

impl.handler[":thumbnails/generate-for-file-wasm"] = (message: any) => {
  return rx.create((subs: any) => {
    const id = uuid.next();
    const sid = rx.pipe(
      thumbnailsStream,
      rx.filter((result: any) => result.id === id),
      rx.subs((result: any) => {
        rx.push(subs, result);
        rx.end(subs);
      })
    );

    rx.push(thumbnailsQueue, { ...message, id });
    return () => rx.dispose(sid);
  });
};
