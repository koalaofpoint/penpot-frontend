// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC
// A main entry point for the rasterizer process that is
// executed on a separated iframe.

import * as d from 'app/common/data';
import * as dm from 'app/common/data/macros';
import * as ex from 'app/common/exceptions';
import * as log from 'app/common/logging';
import * as cf from 'app/config';
import * as dom from 'app/util/dom';
import * as http from 'app/util/http';
import * as obj from 'app/util/object';
import * as wapi from 'app/util/webapi';
import * as rx from 'beicon.v2.core';
import * as str from 'cuerdas.core';

log.setLevel!('info');

const dataUriCache = new Map<string, Blob>();

const parentOrigin = dm.str(cf.publicUri);

const getDocumentElement = (svg: any) => svg.documentElement;

const createImage = (uri: string): rx.Observable<HTMLImageElement> => {
  return rx.create((subs: any) => {
    const image = new Image();
    obj.set!(image, 'onload', () => {
      rx.push!(subs, image);
      rx.end!(subs);
    });
    obj.set!(image, 'crossOrigin', 'anonymous');
    obj.set!(image, 'onerror', (e: any) => rx.error!(subs, e));
    obj.set!(image, 'onabort', () =>
      rx.error!(subs, ex.error!({ type: 'abort', code: 'operation-aborted', hint: 'operation aborted' }))
    );
    obj.set!(image, 'src', uri);
    return () => {
      obj.set!(image, 'src', '');
      obj.set!(image, 'onload', null);
      obj.set!(image, 'onerror', null);
      obj.set!(image, 'onabort', null);
    };
  });
};

const svgGetAdjustedSize = (width: number, height: number, max: number): [number, number] => {
  const ratio = width / height;
  if (width < height) {
    return [max, max / ratio];
  }
  return [max * ratio, max];
};

const svgGetSizeFromViewbox = (svg: any, max: number): [number, number] | null => {
  const doc = getDocumentElement(svg);
  const vbox = dom.getAttribute!(doc, 'viewBox');
  if (typeof vbox !== 'string') return null;

  const parts = vbox.split(/\s+/);
  const width = d.parseInteger!(parts[2] || '0', 0);
  const height = d.parseInteger!(parts[3] || '0', 0);
  return svgGetAdjustedSize(width, height, max);
};

const svgGetSizeFromIntrinsicSize = (svg: any, max: number): [number, number] => {
  const doc = getDocumentElement(svg);
  const width = d.parseInteger!(dom.getAttribute!(doc, 'width') || '0', 0);
  const height = d.parseInteger!(dom.getAttribute!(doc, 'height') || '0', 0);
  return svgGetAdjustedSize(width, height, max);
};

const svgHasIntrinsicSize = (svg: any): boolean => {
  const doc = getDocumentElement(svg);
  const width = dom.getAttribute!(doc, 'width');
  const height = dom.getAttribute!(doc, 'height');
  return d.num!(width, height);
};

const svgGetSize = (svg: any, max: number): [number, number] => {
  if (svgHasIntrinsicSize(svg)) {
    return svgGetSizeFromIntrinsicSize(svg, max);
  }
  return svgGetSizeFromViewbox(svg, max) || [max, max];
};

const svgSetIntrinsicSize = (svg: any, max: number): any => {
  const doc = getDocumentElement(svg);
  const [w, h] = svgGetSize(svg, max);
  dom.setAttribute!(doc, 'width', dm.str(w));
  dom.setAttribute!(doc, 'height', dm.str(h));
  return svg;
};

const fetchAsDataUri = (uri: string): rx.Observable<string> => {
  if (dataUriCache.has(uri)) {
    const blob = dataUriCache.get(uri);
    return rx.from!(blob!.text());
  }

  return http.send!({
    uri,
    responseType: 'blob',
    method: 'get',
    mode: 'cors',
    omitDefaultHeaders: true,
  }).pipe(
    rx.catch((cause: any) => {
      log.error!({ hint: 'fetching data uri', cause });
      return rx.of!(null);
    }),
    rx.mapCat((response: any) => {
      if (response === null) {
        return rx.of!(uri);
      }
      return rx.of!(response.body).pipe(
        rx.mapCat((dataUri: string) => {
          dataUriCache.set(uri, wapi.createBlob!(dataUri, 'text/plain'));
          return rx.of!(dataUri);
        })
      );
    })
  );
};

const svgUpdateImage = (image: any): rx.Observable<any> => {
  const href = dom.getAttribute!(image, 'href');
  if (!href) return rx.empty!();

  if (str.startsWith!(href, 'data:')) {
    return rx.of!(image);
  }

  return fetchAsDataUri(href).pipe(
    rx.map((url: string) => {
      dom.setAttribute!(image, 'href', url);
      return image;
    })
  );
};

const svgResolveImages = (svg: any): rx.Observable<any> => {
  return rx.from!(dom.queryAll!(svg, 'image')).pipe(
    rx.mapCat(svgUpdateImage),
    rx.ignore!()
  );
};

const svgAddStyle = (svg: any, styles: string): void => {
  const doc = getDocumentElement(svg);
  const style = dom.createElement!(svg, 'http://www.w3.org/2000/svg', 'style');
  dom.appendChild!(style, dom.createText!(svg, styles));
  dom.appendChild!(doc, style);
};

const svgResolveExternalResources = (styles: string): rx.Observable<string> => {
  const regex = /url\((https?:\/\/[^)]+)\)/g;
  const matches = [...styles.matchAll(regex)];

  return rx.from!(matches.map((m) => m[1])).pipe(
    rx.mapCat((url: string) =>
      fetchAsDataUri(url).pipe(rx.map((uri) => [url, uri] as [string, string]))
    ),
    rx.reduce((stylesText: string, [url, uri]: [string, string]) => {
      return str.replace!(stylesText, url, uri);
    }, styles)
  );
};

const svgResolveStyles = (svg: any, styles: string): rx.Observable<any> => {
  return svgResolveExternalResources(styles).pipe(
    rx.tap((resolvedStyles: string) => svgAddStyle(svg, resolvedStyles)),
    rx.ignore!()
  );
};

const svgResolveInlineStyles = (svg: any): rx.Observable<any> => {
  return rx.from!(dom.queryAll!(svg, '[style]')).pipe(
    rx.mapCat((node: any) => {
      const styles = dom.getAttribute!(node, 'style');
      return svgResolveExternalResources(styles).pipe(
        rx.tap((resolvedStyles: string) => dom.setAttribute!(node, 'style', resolvedStyles))
      );
    }),
    rx.ignore!()
  );
};

const svgResolveStyleElements = (svg: any): rx.Observable<any> => {
  return rx.from!(dom.queryAll!(svg, 'style')).pipe(
    rx.mapCat((node: any) => {
      const styles = dom.getText!(node);
      return svgResolveExternalResources(styles).pipe(
        rx.tap((resolvedStyles: string) => dom.setText!(node, resolvedStyles))
      );
    }),
    rx.ignore!()
  );
};

const svgResolveAll = (svg: any, styles: string): rx.Observable<any> => {
  return rx.concat!(
    svgResolveImages(svg),
    svgResolveStyles(svg, styles),
    svgResolveInlineStyles(svg),
    svgResolveStyleElements(svg),
    rx.of!(svg)
  );
};

const svgParse = (data: string): any => {
  const parser = new DOMParser();
  return parser.parseFromString(data, 'image/svg+xml');
};

const svgStringify = (svg: any): string => {
  const doc = getDocumentElement(svg);
  const serializer = new XMLSerializer();
  return serializer.serializeToString(doc);
};

const svgPrepare = (data: string, styles: string, width: number): rx.Observable<string> => {
  const svg = svgParse(data);
  return svgResolveAll(svg, styles).pipe(
    rx.map((resolvedSvg: any) => svgSetIntrinsicSize(resolvedSvg, width)),
    rx.map(svgStringify)
  );
};

const bitmapToBlob = (bitmap: ImageBitmap): rx.Observable<Blob> => {
  return rx.create((subs: any) => {
    const canvas = dom.createElement!('canvas');
    (canvas as any).width = bitmap.width;
    (canvas as any).height = bitmap.height;
    const context = (canvas as any).getContext('bitmaprenderer');
    context.transferFromImageBitmap(bitmap);
    canvas.toBlob!((blob: Blob) => {
      rx.push!(subs, blob);
      rx.end!(subs);
    });
    return () => {};
  });
};

const renderImageBitmap = (payload: any): rx.Observable<ImageBitmap> => {
  const data = payload.data;
  const styles = payload.styles;
  const width = d.nilv!(payload.width, 300);
  const quality = d.nilv!(payload.quality, 'medium');

  return svgPrepare(data, styles, width).pipe(
    rx.map((svgString: string) => wapi.createBlob!(svgString, 'image/svg+xml')),
    rx.map(wapi.createUri!),
    rx.mapCat((uri: string) =>
      createImage(uri).pipe(
        rx.mapCat((img: HTMLImageElement) =>
          wapi.createImageBitmapWithWorkaround!(img, {
            resizeWidth: width,
            resizeQuality: quality,
          } as any)
        ),
        rx.tap(() => wapi.revokeUri!(uri))
      )
    )
  );
};

const renderBlob = (payload: any): rx.Observable<Blob> => {
  return renderImageBitmap(payload).pipe(
    rx.mapCat(bitmapToBlob)
  );
};

const render = (payload: any): rx.Observable<any> => {
  const result = d.nilv!(payload.result, 'blob');
  switch (result) {
    case 'image-bitmap':
      return renderImageBitmap(payload);
    default:
      return renderBlob(payload);
  }
};

const sendAnswer = (id: any, type: string, payload: any): void => {
  const message: any = {
    id,
    type,
    scope: 'penpot/rasterizer',
    payload,
  };

  if (window !== window.parent) {
    if (payload instanceof ImageBitmap) {
      (window.parent as any).postMessage(message, parentOrigin, [payload]);
    } else {
      (window.parent as any).postMessage(message, parentOrigin);
    }
  }
};

const sendSuccess = (id: any, payload: any): void => {
  sendAnswer(id, 'success', payload);
};

const sendFailure = (id: any, cause: any): void => {
  sendAnswer(id, 'failure', cause instanceof Error ? cause.message : String(cause));
};

const sendReady = (): void => {
  sendAnswer(null, 'ready', null);
};

const onMessage = (event: MessageEvent): void => {
  const evdata = (event as any).data;
  const evorigin = (event as any).origin;

  if (!str.startsWith!(parentOrigin, evorigin)) return;

  const id = evdata?.id;
  const payload = evdata?.payload;
  const scope = evdata?.scope;

  if (payload !== null && scope === 'penpot/rasterizer') {
    render(payload).subscribe!(
      (result) => sendSuccess(id, result),
      (error) => sendFailure(id, error)
    );
  }
};

const listen = (): void => {
  (window as any).addEventListener('message', onMessage);
};

export const init = (): void => {
  listen();
  sendReady();
  log.info!({
    hint: 'initialized',
    publicUri: dm.str(cf.publicUri),
    parentUri: dm.str(parentOrigin),
  });
};