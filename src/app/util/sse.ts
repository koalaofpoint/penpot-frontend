// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { Observable } from 'rxjs';
import { map, mapTo, switchMap, filter } from 'rxjs/operators';

// TODO: Import eventsource-parser
// import { EventSourceParserStream } from 'eventsource-parser/stream';

/**
 * SSE event interface
 */
export interface SSEEvent {
  type: string;
  data: unknown;
}

/**
 * Create SSE stream from readable stream
 */
export function createStream(stream: ReadableStream<Uint8Array>): ReadableStream<SSEEvent> {
  // TODO: Import and use EventSourceParserStream
  // return stream
  //   .pipeThrough(new TextDecoderStream())
  //   .pipeThrough(new EventSourceParserStream());
  return stream;
}

/**
 * Read stream as observable
 */
export function readStream(stream: ReadableStream<SSEEvent>, decodeFn: (data: unknown) => unknown): Observable<SSEEvent> {
  const reader = stream.getReader();

  return new Observable(subscriber => {
    const read = async (): Promise<void> => {
      const { done, value } = await reader.read();

      if (done) {
        subscriber.complete();
        return;
      }

      subscriber.next(value);
      return read();
    };

    read().catch(error => {
      subscriber.error(error);
    });

    return () => {
      reader.cancel().catch(() => {});
    };
  }).pipe(
    map(event => {
      const type = (event as any).type;
      const data = (event as any).data;
      const decoded = decodeFn(data);

      if (type === 'error') {
        throw new Error('Stream exception');
      }

      return { type, data: decoded };
    })
  );
}

/**
 * Get event type from SSE event
 */
export function getType(event: SSEEvent): string {
  return event.type;
}

/**
 * Get payload from SSE event
 */
export function getPayload(event: SSEEvent): unknown {
  return event.data;
}

/**
 * Check if event is end of stream
 */
export function isEndOfStream(event: SSEEvent): boolean {
  return getType(event) === 'end';
}

/**
 * Check if event is progress
 */
export function isProgress(event: SSEEvent): boolean {
  return getType(event) === 'progress';
}

/**
 * Check if event is a regular event
 */
export function isEvent(event: SSEEvent): boolean {
  return getType(event) === 'event';
}
