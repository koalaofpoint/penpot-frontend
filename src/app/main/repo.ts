// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from '../common/data/index.js';
import * as ex from '../common/exceptions.js';
import * as log from '../common/logging.js';
import * as ct from '../common/time/index.js';
import * as t from '../common/transit/index.js';
import * as u from '../common/uri.js';
import * as cf from '../config.js';
import * as http from '../util/http/index.js';
import * as sse from '../util/sse/index.js';
import { Observable } from '../vendor/beicon/v2/index.js';
import { str as strLib } from '../vendor/cuerdas/index.js';

log.setLevel('info');

// Retry helpers
const RETRYABLE_TYPES = new Set([
  'network',              // js/fetch network-level failure
  'bad-gateway',          // 502
  'service-unavailable',  // 503
  'offline'              // status 0 (browser offline)
]);

export const retryableError = (error: any) => {
  const errorType = ex.getData(error)?.type;
  return RETRYABLE_TYPES.has(errorType);
};

export const defaultRetryConfig = {
  maxRetries: 3,
  baseDelayMs: 1000
};

export const withRetry = (
  observableFn: () => Observable<any>,
  config: any = defaultRetryConfig,
  attempt: number = 0
) => {
  const { maxRetries, baseDelayMs } = { ...defaultRetryConfig, ...config };

  return observableFn().pipe(
    catchError(cause => {
      if (retryableError(cause) && attempt < maxRetries) {
        // bit-shift-left 1 N is equivalent to 2^N: shift the bits of the
        // number 1 to the left N positions (e.g. 1 -> 2 -> 4 -> 8 -> 16),
        // producing exponential backoff delays of 1x, 2x, 4x, 8x, 16x.
        const delayMs = baseDelayMs * (1 << attempt);

        log.warn('retrying request', {
          attempt: attempt + 1,
          delay: delayMs,
          error: ex.getMessage(cause)
        });

        return Observable.timer(delayMs).pipe(
          flatMap(() => withRetry(observableFn, config, attempt + 1))
        );
      }

      throw cause;
    })
  );
};

// Response handling
export const handleResponse = (response: any) => {
  const { status, body, headers, uri } = response;

  switch (status) {
    case 204:
      // We need to send "something" so the streams listening downstream can act
      return Observable.of(null);

    case 502:
      throw new ex.Exception('http error', { type: 'bad-gateway' });

    case 503:
      throw new ex.Exception('http error', { type: 'service-unavailable' });

    case 0:
      throw new ex.Exception('http error', { type: 'offline' });

    case 200:
      return Observable.of(body);

    case 413:
      throw new ex.Exception('http error', {
        type: 'validation',
        code: 'request-body-too-large'
      });

    case 403:
      const server = headers.get('server');
      const cfMitigated = headers.get('cf-mitigated');
      if (server === 'cloudflare' || cfMitigated === 'challenge') {
        throw new ex.Exception('http error', {
          type: 'authorization',
          code: 'challenge-required'
        });
      }

    default:
      if (status >= 400 && typeof body === 'object') {
        throw new ex.Exception('http error', { ...body, uri, status });
      }

      throw new ex.Exception('http error', {
        type: 'internal',
        code: 'unable-to-process-repository-response',
        hint: 'unable to process repository response',
        uri,
        status,
        headers,
        data: body
      });
  }
};

const defaultOptions: Record<string, any> = {
  updateFile: { queryParams: ['id'] },
  getRawFile: { renameTo: 'getFile', rawTransit: true },
  createFileObjectThumbnail: {
    queryParams: ['fileId', 'objectId', 'tag'],
    formData: true
  },
  createFileThumbnail: {
    queryParams: ['fileId', 'revn'],
    formData: true
  },
  'sse/export-binfile': { stream: true },
  'sse/clone-template': { stream: true },
  'sse/import-binfile': {
    stream: true,
    formData: true
  },
  'sse/permanently-delete-team-files': { stream: true },
  'sse/restore-deleted-team-files': { stream: true },
  exportBinfile: { responseType: 'blob' },
  retrieveListOfBuiltinTemplates: { queryParams: 'all' }
};

const send = (id: string, params: any, options: any = {}) => {
  const {
    responseType,
    stream,
    formData,
    rawTransit,
    queryParams,
    renameTo
  } = { ...defaultOptions[id], ...options };

  const decodeFn = rawTransit ?
    http.conditionalErrorDecodeTransit :
    http.conditionalDecodeTransit;

  const actualId = renameTo || id;
  const name = actualId.toString();
  const method = queryParams === 'all' || strLib.startsWith(name, 'get-') ? 'get' : 'post';

  const actualResponseType = d.nilv(responseType, 'text');

  const request: any = {
    method: method,
    uri: u.join(cf.publicUri, 'api/main/methods/', name),
    credentials: 'include',
    headers: {
      accept: 'application/transit+json,text/event-stream,*/*',
      'x-external-session-id': cf.externalSessionId,
      'x-event-origin': params.meta?.ev__origin
    },
    body: method === 'post' ? (
      formData ? http.formData(params) : http.transitData(params)
    ) : undefined,
    query: method === 'get' ? params : queryParams ? d.selectKeys(params, queryParams) : undefined,
    responseType: stream ? undefined : actualResponseType
  };

  const tpoint = ct.tpointMs();

  log.trc('make request', { id });

  const makeRequest = () => {
    return http.fetch(request)
      .pipe(
        map(http.responseToMap),
        flatMap((response: any) => {
          log.trc('response received', { id, elapsed: tpoint() });

          const contentType = response.headers.get('content-type');
          const responseStream = strLib.startsWith(contentType, 'text/event-stream');
          const tpoint2 = ct.tpointMs();

          if (responseStream && !stream) {
            throw new ex.Exception('http error', {
              type: 'assertion',
              code: 'unexpected-response',
              hint: 'expected normal response, received sse stream',
              uri: response.uri,
              status: response.status
            });
          }

          if (responseStream) {
            return sse.createStream(response.body)
              .pipe(sse.readStream(t.decodeStr));
          }

          return Observable.of(response)
            .pipe(
              map(r => http.processResponseType(r, actualResponseType)),
              map(decodeFn),
              tap(() => {
                log.trc('response decoded', { id, elapsed: tpoint2() });
              }),
              flatMap(handleResponse)
            );
        })
      );
  };

  // Idempotent (GET) requests are automatically retried on
  // transient network / server errors.  Mutations are never
  // retried to avoid unintended side-effects.
  return method === 'get' ?
    withRetry(makeRequest) :
    makeRequest();
};

export const cmd = (id: string, params: any) => {
  const method = cmd.methods[id] || cmd.default;
  return method(id, params);
};

cmd.methods = {
  default(id: string, params: any) {
    return send(id, params);
  },

  loginWithOidc(_id: string, params: any) {
    const uri = u.join(cf.publicUri, 'api/auth/oidc');
    return http.send({
      method: 'post',
      uri,
      credentials: 'include',
      headers: {
        'x-external-session-id': cf.externalSessionId,
        'x-event-origin': params.meta?.ev__origin
      },
      query: params
    })
      .pipe(
        map(http.conditionalDecodeTransit),
        flatMap(handleResponse)
      );
  },

  export(_id: string, params: any) {
    const defaultParams = { wait: false, blob: false };
    const actualParams = { ...defaultParams, ...params };

    return sendExport(actualParams);
  }
};

// Define multimethod-like behavior
// @ts-ignore
cmd.__proto__ = {
  methods: cmd.methods
};

const sendExport = (params: { blob?: boolean }) => {
  return http.send({
    method: 'post',
    uri: u.join(cf.publicUri, 'api/export'),
    body: http.transitData({ ...params, blob: undefined }),
    headers: {
      'x-external-session-id': cf.externalSessionId,
      'x-event-origin': params.meta?.ev__origin
    },
    credentials: 'include',
    responseType: params.blob ? 'blob' : 'text'
  })
    .pipe(
      map(http.conditionalDecodeTransit),
      flatMap(handleResponse)
    );
};

// Multipart uploads
const multipartUploads = [
  'upload-file-media-object',
  'update-profile-photo',
  'update-team-photo'
];

multipartUploads.forEach(id => {
  // @ts-ignore
  cmd.methods[`::${id}`] = (id: string, params: any) => {
    return http.send({
      method: 'post',
      uri: u.join(cf.publicUri, 'api/main/methods/', id.toString()),
      credentials: 'include',
      headers: {
        'x-external-session-id': cf.externalSessionId,
        'x-event-origin': params.meta?.ev__origin
      },
      body: http.formData(params)
    })
      .pipe(
        map(http.conditionalDecodeTransit),
        flatMap(handleResponse)
      );
  };
});