// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { Observable } from 'rxjs';
import { map, mapTo, tap, catchError } from 'rxjs/operators';

// TODO: Import from proper locations
// import { version } from '../../config';
// import { timestamp } from './perf';
// import { withCache } from './cache';
// import { readFileAsDataURL } from './webapi';

/**
 * HTTP method
 */
export type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete' | 'head' | 'options' | 'trace';

/**
 * HTTP request mode
 */
export type RequestMode = 'cors' | 'no-cors' | 'same-origin';

/**
 * Request credentials
 */
export type RequestCredentials = 'omit' | 'same-origin' | 'include';

/**
 * Response type
 */
export type ResponseType = 'text' | 'json' | 'blob' | 'buffer';

/**
 * HTTP response
 */
export interface HttpResponse {
  status: number;
  uri: string;
  headers: Record<string, string>;
  body: unknown;
  _response: Response;
}

/**
 * HTTP request options
 */
export interface HttpRequest {
  method: HttpMethod;
  uri: string;
  query?: string | Record<string, string>;
  headers?: Record<string, string>;
  body?: unknown;
  mode?: RequestMode;
  omitDefaultHeaders?: boolean;
  credentials?: RequestCredentials;
  responseType?: ResponseType;
}

/**
 * Body data interface
 */
interface IBodyData {
  getBodyData(): unknown;
  updateHeaders(headers: Record<string, string>): Record<string, string>;
}

/**
 * FormData body data wrapper
 */
class FormDataBody implements IBodyData {
  constructor(private readonly data: FormData) {}

  getBodyData(): FormData {
    return this.data;
  }

  updateHeaders(headers: Record<string, string>): Record<string, string> {
    const { 'content-type': _, 'Content-Type': __, ...rest } = headers;
    return rest;
  }
}

/**
 * Default body data wrapper
 */
class DefaultBody implements IBodyData {
  constructor(private readonly data: unknown) {}

  getBodyData(): unknown {
    return this.data;
  }

  updateHeaders(headers: Record<string, string>): Record<string, string> {
    return headers;
  }
}

/**
 * Wrap body data
 */
function wrapBodyData(body: unknown): IBodyData {
  if (body instanceof FormData) {
    return new FormDataBody(body);
  }
  return new DefaultBody(body);
}

/**
 * Translate HTTP method to string
 */
function translateMethod(method: HttpMethod): string {
  const map: Record<HttpMethod, string> = {
    get: 'GET',
    post: 'POST',
    put: 'PUT',
    patch: 'PATCH',
    delete: 'DELETE',
    head: 'HEAD',
    options: 'OPTIONS',
    trace: 'TRACE'
  };
  return map[method];
}

/**
 * Parse headers from Headers object
 */
function parseHeaders(headers: Headers): Record<string, string> {
  const result: Record<string, string> = {};
  headers.forEach((value, key) => {
    result[key] = value;
  });
  return result;
}

/**
 * Get default headers
 */
function getDefaultHeaders(): Record<string, string> {
  // TODO: Import version
  // return {
  //   'x-frontend-version': version.full,
  //   'x-client': `penpot-frontend/${version.full}`
  // };
  return {};
}

/**
 * Network average tracking
 */
const networkAverages = new Map<string, { count: number; average: number }>();

/**
 * Perform HTTP fetch
 */
export function fetch(options: HttpRequest): Observable<Response> {
  return new Observable(subscriber => {
    const controller = new AbortController();
    const signal = controller.signal;
    let unsubscribed = false;
    let abortable = true;

    let queryString: string | undefined;
    if (typeof options.query === 'string') {
      queryString = options.query;
    } else if (options.query) {
      queryString = new URLSearchParams(options.query).toString();
    }

    const uri = queryString ? `${options.uri}?${queryString}` : options.uri;

    let headers = options.headers ?? {};
    if (!options.omitDefaultHeaders) {
      headers = { ...getDefaultHeaders(), ...headers };
    }

    const bodyData = wrapBodyData(options.body);
    headers = bodyData.updateHeaders(headers);

    const body = bodyData.getBodyData();
    const startTime = Date.now();

    window
      .fetch(uri, {
        method: translateMethod(options.method),
        headers,
        body,
        mode: options.mode ?? 'cors',
        redirect: 'follow',
        credentials: options.credentials ?? 'same-origin',
        referrerPolicy: 'no-referrer',
        signal
      })
      .then(response => {
        abortable = false;
        subscriber.next(response);
        subscriber.complete();
      })
      .catch(cause => {
        abortable = false;
        if (!unsubscribed && (cause as Error).name !== 'AbortError') {
          const error = new Error((cause as Error).message);
          error.name = 'network-error';
          subscriber.error(error);
        }
      })
      .finally(() => {
        const path = uri.split('/').pop() ?? uri;
        const stats = networkAverages.get(path) ?? { count: 0, average: 0 };
        const currentTime = Date.now() - startTime;
        const newCount = stats.count + 1;
        const newAverage = (stats.average * (stats.count / newCount)) + (currentTime / newCount);
        networkAverages.set(path, { count: newCount, average: newAverage });
      });

    return () => {
      unsubscribed = true;
      if (abortable) {
        controller.abort();
      }
    };
  });
}

/**
 * Convert Response to HttpResponse map
 */
function responseToMap(response: Response): HttpResponse {
  return {
    status: response.status,
    uri: response.url,
    headers: parseHeaders(response.headers),
    body: response.body,
    _response: response
  };
}

/**
 * Process response by type
 */
function processResponseType(responseType: ResponseType, response: HttpResponse): Observable<HttpResponse> {
  const nativeResponse = response._response;
  let bodyPromise: Promise<unknown>;

  switch (responseType) {
    case 'buffer':
      bodyPromise = nativeResponse.arrayBuffer();
      break;
    case 'json':
      bodyPromise = nativeResponse.json();
      break;
    case 'blob':
      bodyPromise = nativeResponse.blob();
      break;
    case 'text':
    default:
      bodyPromise = nativeResponse.text();
      break;
  }

  return new Observable(subscriber => {
    bodyPromise
      .then(body => {
        subscriber.next({ ...response, body });
        subscriber.complete();
      })
      .catch(error => subscriber.error(error));

    return () => {};
  });
}

/**
 * Send HTTP request
 */
export function send!(options: HttpRequest & { responseType?: ResponseType }): Observable<HttpResponse> {
  const responseType = options.responseType ?? 'text';

  return fetch(options).pipe(
    map(responseToMap),
    mapTo(processResponseType(responseType, responseToMap({} as HttpResponse)) as Observable<HttpResponse>)
  );
}

/**
 * Create FormData from object
 */
export function formData(data: Record<string, unknown>): FormData {
  const form = new FormData();

  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      form.append(key, value[0], value[1]);
    } else {
      form.append(key, String(value));
    }
  }

  return form;
}

/**
 * Create transit data wrapper
 */
export function transitData(data: unknown): unknown {
  // TODO: Implement transit encoding
  return new class TransitBody implements IBodyData {
    constructor(private readonly data: unknown) {}

    getBodyData(): string {
      return JSON.stringify(this.data);
    }

    updateHeaders(headers: Record<string, string>): Record<string, string> {
      return { ...headers, 'content-type': 'application/transit+json' };
    }
  }(data);
}

/**
 * Check if response is successful
 */
export function isSuccess(response: HttpResponse): boolean {
  return response.status >= 200 && response.status < 300;
}

/**
 * Check if response is server error
 */
export function isServerError(response: HttpResponse): boolean {
  return response.status >= 500 && response.status < 600;
}

/**
 * Check if response is client error
 */
export function isClientError(response: HttpResponse): boolean {
  return response.status >= 400 && response.status < 500;
}

/**
 * Convert Observable to Promise
 */
export function asPromise<T>(observable: Observable<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    observable.subscribe({
      next: resolve,
      error: reject
    });
  });
}

/**
 * Fetch data URI
 */
export function fetchDataUri(uri: string, throwError = false): Observable<Record<string, string>> {
  // TODO: Implement with proper imports
  // return send!({
  //   method: 'get',
  //   uri,
  //   responseType: 'blob',
  //   omitDefaultHeaders: true
  // }).pipe(
  //   tap(response => {
  //     if (response.status < 200 || response.status >= 300) {
  //       throw new Error('Error fetching data uri');
  //     }
  //   }),
  //   mapTo(response.body),
  //   mapTo(readFileAsDataURL(response.body)),
  //   mapTo(withCache({ key: uri, maxAge: 1000 * 60 * 60 * 4 })),
  //   catchError(() => throwError ? throwError() : empty())
  // );

  return new Observable(subscriber => subscriber.complete());
}

/**
 * Fetch text
 */
export function fetchText(url: string): Observable<string> {
  // TODO: Implement with proper imports
  // return send!({
  //   method: 'get',
  //   mode: 'cors',
  //   omitDefaultHeaders: true,
  //   uri: url,
  //   responseType: 'text'
  // }).pipe(
  //   mapTo(response.body),
  //   mapTo(withCache({ key: url, maxAge: 1000 * 60 * 60 * 4 }))
  // );

  return new Observable(subscriber => subscriber.complete());
}
