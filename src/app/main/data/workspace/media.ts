// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { svgo } from "@penpot/svgo";
import * as d from "../../../common/data";
import { assert, getIn } from "../../../common/data/macros";
import * as ex from "../../../common/exceptions";
import * as pcb from "../../../common/files/changes-builder";
import * as sb from "../../../common/files/shapes-builder";
import * as mth from "../../../common/math";
import * as media from "../../../common/media";
import * as sm from "../../../common/schema";
import * as ctn from "../../../common/types/container";
import * as typesFills from "../../../common/types/fills";
import * as cts from "../../../common/types/shape";
import { UUID, zero as uuidZero } from "../../../common/uuid";
import * as cf from "../../../config";
import * as dch from "../changes";
import * as dsh from "../helpers";
import * as dmm from "../media";
import * as ntf from "../notifications";
import * as dwsh from "./shapes";
import * as svg from "./svg-upload";
import * as rp from "../../../repo";
import * as st from "../../../store";
import * as http from "../../../util/http";
import { tr } from "../../../util/i18n";
import {
  Observable,
  from,
  of,
  merge,
  filter,
  map,
  tap,
  catchError,
  mergeMap,
  concatMap,
  throwError,
  ignoreElements,
} from "rxjs";
import * as ptk from "../../../potok/v2/ptk";
import * as str from "cuerdas/core";
import * as promesa from "promesa";
import * as tubax from "tubax";

const ACCEPT_IMAGE_TYPES = str.join(",", media.imageTypes);

function optimize(input: string): string {
  return svgo.optimize(input, svgo.defaultOptions);
}

export function svgToClj([name, text]: [string, string]): Observable<any> {
  try {
    const processedText = cf.flags.has("frontend-svgo") ? optimize(text) : text;
    const data = tubax.xmlToClj(processedText);
    return of({ ...data, name });
  } catch (cause) {
    console.error(cause);
    return throwError(() =>
      ex.error({
        type: "svg-parser",
        hint: ex.message(cause as Error),
      })
    );
  }
}

export function imageUploaded(
  image: any,
  position: { x: number; y: number }
): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace/image-uploaded",
    watch(): Observable<any> {
      const { name, width, height, id, mtype } = image;

      const fills = typesFills.create({
        fillOpacity: 1,
        fillImage: {
          width,
          height,
          mtype,
          id,
          keepAspectRatio: true,
        },
      });

      const shape = {
        name,
        width,
        height,
        x: mth.round(position.x - width / 2),
        y: mth.round(position.y - height / 2),
        fills,
      };

      return of(dwsh.createAndAddShape("rect", position.x, position.y, shape));
    },
  };
}

export function svgUploaded(
  svgData: any,
  fileId: UUID,
  position: { x: number; y: number }
): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace/svg-uploaded",
    watch(): Observable<any> {
      return svg.uploadImages(svgData, fileId).pipe(
        map((imageData) =>
          svg.addSvgShapes(null, { ...svgData, imageData }, position)
        )
      );
    },
  };
}

export function uploadMediaUrl(
  name: string,
  fileId: UUID,
  url: string
): Promise<any> {
  return rp.cmd!("create-file-media-object-from-url", {
    name,
    fileId,
    url,
    isLocal: true,
  });
}

export function processUris(params: {
  fileId: UUID;
  local?: boolean;
  name?: string;
  uris: string[];
  mtype?: string;
  onImage?: (image: any) => void;
  onSvg?: (svg: any) => void;
}): Observable<any> {
  const {
    fileId,
    local = false,
    name,
    uris,
    mtype,
    onImage,
    onSvg,
  } = params;

  function svgUrl(url: string): boolean {
    return (
      (mtype && mtype === "image/svg+xml") || str.endsWith(url, ".svg")
    );
  }

  function upload(uri: string): Observable<any> {
    return http.send!({ method: "get", uri, mode: "no-cors", responseType: "blob" }).pipe(
      map((response: any) => response.body),
      map((content: Blob) => ({
        fileId,
        name: name || svg.extractName(uri),
        isLocal: local,
        content,
      })),
      concatMap((params) =>
        from(rp.cmd!("upload-file-media-object", params))
      )
    );
  }

  function fetchSvg(name: string, uri: string): Observable<[string, string]> {
    return http.send!({ method: "get", uri, mode: "no-cors" }).pipe(
      map((response: any) => [name || svg.extractName(uri), response.body])
    );
  }

  const image$ = from(uris).pipe(
    filter((uri) => !svgUrl(uri)),
    concatMap(upload),
    tap(onImage || (() => {}))
  );

  const svg$ = from(uris).pipe(
    filter(svgUrl),
    mergeMap((uri) => fetchSvg(name || "", uri)),
    mergeMap(([n, text]) => svgToClj([n, text])),
    tap(onSvg || (() => {}))
  );

  return merge(image$, svg$);
}

export function processBlobs(params: {
  fileId: UUID;
  local?: boolean;
  name?: string;
  blobs: Blob[];
  forceMedia?: boolean;
  onImage?: (image: any) => void;
  onSvg?: (svg: any) => void;
}): Observable<any> {
  const {
    fileId,
    local = false,
    name,
    blobs,
    forceMedia = false,
    onImage,
    onSvg,
  } = params;

  function svgBlob(blob: Blob): boolean {
    return !forceMedia && blob.type === "image/svg+xml";
  }

  function prepareBlob(blob: Blob): any {
    const blobName = dmm.file(blob)
      ? media.stripImageExtension((blob as any).name)
      : "blob";
    return {
      fileId,
      name: name || blobName,
      isLocal: local,
      content: blob,
    };
  }

  async function extractContent(
    blob: Blob
  ): Promise<[string, string]> {
    const text = await (blob as any).text();
    return [name || (blob as any).name, text];
  }

  const image$ = from(blobs).pipe(
    map(dmm.validateFile),
    filter((blob) => !svgBlob(blob)),
    map(prepareBlob),
    concatMap((params) =>
      from(rp.cmd!("upload-file-media-object", params))
    ),
    tap(onImage || (() => {}))
  );

  const svg$ = from(blobs).pipe(
    map(dmm.validateFile),
    filter(svgBlob),
    mergeMap(extractContent),
    mergeMap(([n, text]) => svgToClj([n, text])),
    tap(onSvg || (() => {}))
  );

  return merge(image$, svg$);
}

export function handleMediaError(
  error: any,
  onError?: (error: any) => void
): Observable<any> {
  if (ex.exInfo(error)) {
    return handleMediaError(exData(error), onError);
  }

  const code = error?.code;

  if (code === "invalid-svg-file") {
    return of(ntf.error(tr("errors.media-type-not-allowed")));
  }
  if (code === "media-type-not-allowed") {
    return of(ntf.error(tr("errors.media-type-not-allowed")));
  }
  if (code === "unable-to-access-to-url") {
    return of(ntf.error(tr("errors.media-type-not-allowed")));
  }
  if (code === "invalid-image") {
    return of(ntf.error(tr("errors.media-type-not-allowed")));
  }
  if (code === "media-max-file-size-reached") {
    return of(ntf.error(tr("errors.media-too-large")));
  }
  if (code === "media-type-mismatch") {
    return of(ntf.error(tr("errors.media-type-mismatch")));
  }
  if (code === "unable-to-optimize") {
    return of(ntf.error(error.hint));
  }
  if (typeof onError === "function") {
    return onError(error);
  }

  console.error("ERROR", error);
  return of(ntf.error(tr("errors.cannot-upload")));
}

export function processMediaObjects(params: {
  fileId: UUID;
  local?: boolean;
  name?: string;
  uris?: string[];
  blobs?: Blob[];
  mtype?: string;
  onError?: (error: any) => void;
}): ptk.WatchEvent {
  const { uris, onError } = params;

  return {
    type: "app.main.data.workspace/process-media-objects",
    watch(): Observable<any> {
      const showNotification = of(
        ntf.show({
          content: tr("media.loading"),
          type: "toast",
          level: "info",
          timeout: null,
          tag: "media-loading",
        })
      );

      const process$ =
        uris && uris.length > 0
          ? processUris(params)
          : processBlobs(params);

      return showNotification.pipe(
        concatMap(() => process$),
        ignoreElements(),
        catchError((error) => handleMediaError(error, onError)),
        tap(() =>
          st.emit!(ntf.hide({ tag: "media-loading" }))
        )
      );
    },
  };
}

export function uploadMediaWorkspace(params: {
  position: { x: number; y: number };
  fileId: UUID;
  uris?: string[];
  blobs?: Blob[];
  name?: string;
  mtype?: string;
}): ptk.WatchEvent {
  const { position, fileId } = params;

  const enrichedParams = {
    ...params,
    local: true,
    onImage: (image: any) => st.emit!(imageUploaded(image, position)),
    onSvg: (svgData: any) =>
      st.emit!(svgUploaded(svgData, fileId, position)),
  };

  return processMediaObjects(enrichedParams);
}

export function uploadFillImage(
  file: Blob,
  onSuccess: (image: any) => void
): ptk.WatchEvent {
  assert(dmm.blob(file), "expected a valid blob for `file` param");

  return {
    type: "app.main.data.workspace/upload-fill-image",
    watch(_: any, state: any, _stream: any): Observable<any> {
      const fileId = state.currentFileId;

      const onUploadSuccess = (image: any) => {
        onSuccess(image);
        dmm.notifyFinishedLoading();
      };

      function prepare(content: any): any {
        return {
          fileId,
          name: dmm.file(content) ? (content as any).name : tr("media.image"),
          isLocal: false,
          content,
        };
      }

      dmm.notifyStartLoading();

      return of(file).pipe(
        map(dmm.validateFile),
        map(prepare),
        concatMap((params) =>
          from(rp.cmd!("upload-file-media-object", params))
        ),
        tap(onUploadSuccess),
        catchError(handleMediaError)
      );
    },
  };
}

export function createShapesSvg(
  fileId: UUID,
  objects: Map<UUID, any>,
  pos: { x: number; y: number },
  svgData: any
): Observable<[any, any[]]> {
  function uploadImages(svgData: any): Observable<any> {
    return svg.uploadImages(svgData, fileId).pipe(
      map((imageData) => ({ ...svgData, imageData }))
    );
  }

  function processSvg(svgData: any): [any, any[]] {
    const [rootSvgShape, children] = sb.createSvgShapes(
      svgData,
      pos,
      objects,
      uuidZero,
      null,
      new Set(),
      false
    );

    const frameShape = cts.setupShape({
      type: "frame",
      x: pos.x,
      y: pos.y,
      width: rootSvgShape.selrect?.width || 0,
      height: rootSvgShape.selrect?.height || 0,
      name: rootSvgShape.name,
      frameId: uuidZero,
      parentId: uuidZero,
      fills: typesFills.create(),
    });

    const updatedRootSvgShape = {
      ...rootSvgShape,
      frameId: frameShape.id,
      parentId: frameShape.id,
    };

    const shapes = children
      .filter((c: any) => c.parentId === rootSvgShape.id)
      .map((c: any) => c.id);

    const updatedRootSvgShapeFinal = {
      ...updatedRootSvgShape,
      shapes,
    };

    const updatedChildren = children.map((c: any) => ({
      ...c,
      frameId: frameShape.id,
    }));

    return [frameShape, [updatedRootSvgShapeFinal, ...updatedChildren]];
  }

  return uploadImages(svgData).pipe(map(processSvg));
}

export function createShapesImg(
  pos: { x: number; y: number },
  mediaObj: any
): Observable<[any, any[]]> {
  const { name, width, height, id, mtype } = mediaObj;

  const frameShape = cts.setupShape({
    type: "frame",
    x: pos.x,
    y: pos.y,
    width,
    height,
    name,
    frameId: uuidZero,
    parentId: uuidZero,
  });

  const imgFills = typesFills.create({
    fillOpacity: 1,
    fillImage: {
      id,
      width,
      height,
      mtype,
      keepAspectRatio: true,
    },
  });

  const imgShape = cts.setupShape({
    type: "rect",
    x: pos.x,
    y: pos.y,
    width,
    height,
    fills: imgFills,
    name,
    frameId: frameShape.id,
    parentId: frameShape.id,
  });

  return of([frameShape, [imgShape]]);
}

function addShapesAndComponent(
  it: any,
  fileData: any,
  page: any,
  name: string,
  [shape, children]: [any, any[]]
): Observable<any> {
  const [componentShape, updatedShapes] = ctn.convertShapeInComponent(
    shape,
    children,
    fileData.id
  );

  const changes = pcb
    .emptyChanges(it)
    .withPage(page)
    .withObjects(page.objects)
    .withLibraryData(fileData)
    .addObjects([shape, ...children])
    .addComponent(
      componentShape.id,
      "",
      name,
      updatedShapes,
      shape.id,
      page.id
    );

  return of(dch.commitChanges(changes));
}

export function processImgComponent(
  mediaObj: any
): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace/process-img-component",
    watch(it: any, state: any, _stream: any): Observable<any> {
      const fileId = state.currentFileId;
      const pageId = state.currentPageId;

      const fdata = dsh.lookupFileData(state, fileId);
      const page = dsh.getPage(fdata, pageId);
      const pos = dsh.getViewportCenter(state);

      return createShapesImg(pos, mediaObj).pipe(
        map((result) =>
          addShapesAndComponent(it, fdata, page, mediaObj.name, result)
        )
      );
    },
  };
}

export function processSvgComponent(svgData: any): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace/process-svg-component",
    watch(it: any, state: any, _stream: any): Observable<any> {
      const fileId = state.currentFileId;
      const pageId = state.currentPageId;

      const fdata = dsh.lookupFileData(state, fileId);
      const page = dsh.getPage(fdata, pageId);
      const pos = dsh.getViewportCenter(state);

      return createShapesSvg(fileId, page.objects, pos, svgData).pipe(
        map((result) =>
          addShapesAndComponent(it, fdata, page, svgData.name, result)
        )
      );
    },
  };
}

export function uploadMediaComponents(params: {
  fileId: UUID;
  local?: boolean;
  name?: string;
  uris?: string[];
  blobs?: Blob[];
  mtype?: string;
}): ptk.WatchEvent {
  const enrichedParams = {
    ...params,
    local: false,
    onImage: (image: any) => st.emit!(processImgComponent(image)),
    onSvg: (svgData: any) => st.emit!(processSvgComponent(svgData)),
  };

  return processMediaObjects(enrichedParams);
}

export function cloneMediaObject(params: {
  fileId: UUID;
  objectId: UUID;
  onSuccess?: (result: any) => void;
  onError?: (error: any) => void;
}): ptk.WatchEvent {
  const { fileId, objectId, onSuccess, onError } = params;

  const resolvedOnSuccess = onSuccess || ((x: any) => x);
  const resolvedOnError = onError || ((x: any) => x);

  return {
    type: "app.main.data.workspace/clone-media-objects",
    watch(): Observable<any> {
      const showLoading = of(
        ntf.show({
          content: tr("media.loading"),
          type: "toast",
          level: "info",
          timeout: null,
          tag: "media-loading",
        })
      );

      const cloneParams = {
        isLocal: true,
        fileId,
        id: objectId,
      };

      return showLoading.pipe(
        concatMap(() =>
          from(rp.cmd!("clone-file-media-object", cloneParams)).pipe(
            tap(resolvedOnSuccess),
            catchError(resolvedOnError),
            tap(() => st.emit!(ntf.hide({ tag: "media-loading" })))
          )
        )
      );
    },
  };
}

export function createSvgShape(
  id: UUID | null,
  name: string,
  svgString: string,
  position: { x: number; y: number }
): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace/create-svg-shape",
    watch(): Observable<any> {
      return svgToClj([name, svgString]).pipe(
        take(1),
        map((svgData) =>
          svg.addSvgShapes(id, svgData, position, {
            ignoreSelection: true,
            changeSelection: false,
          })
        )
      );
    },
  };
}

export function createSvgShapeWithImages(
  fileId: UUID,
  id: UUID | null,
  name: string,
  svgString: string,
  position: { x: number; y: number },
  onSuccess: () => void,
  onError: (error: any) => void
): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace/create-svg-shape-with-images",
    watch(): Observable<any> {
      return svgToClj([name, svgString]).pipe(
        take(1),
        mergeMap((svgData) =>
          svg.uploadImages(svgData, fileId).pipe(
            map((imageData) => ({ ...svgData, imageData }))
          )
        ),
        map((svgData) =>
          svg.addSvgShapes(id, svgData, position, {
            ignoreSelection: true,
            changeSelection: false,
          })
        ),
        tap(onSuccess),
        catchError(onError)
      );
    },
  };
}
