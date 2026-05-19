// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { Observable, Subject } from 'rxjs';
import { filter, take, takeWhile, map } from 'rxjs/operators';

// TODO: Import from proper location
// import { encode, decode } from '../worker/messages';
// import { next } from '../../common/uuid';

/**
 * Worker message
 */
export interface WorkerMessage {
  senderId: string;
  payload: unknown;
  transfer?: Transferable[];
  buffer?: boolean;
}

/**
 * Worker response
 */
export interface WorkerResponse {
  replyTo: string;
  payload?: unknown;
  completed?: boolean;
  dropped?: boolean;
  error?: {
    data: unknown;
    message: string;
  };
}

/**
 * Worker instance
 */
export interface WorkerRef extends Observable<WorkerMessage> {
  ask(message: unknown, transfer?: Transferable[]): Observable<unknown>;
  emit(message: unknown, transfer?: Transferable[]): void;
  askMany(message: unknown, transfer?: Transferable[]): Observable<unknown>;
  askBuffered(message: unknown, transfer?: Transferable[]): Observable<unknown>;
}

/**
 * Create worker instance
 */
export function init(path: string, onError: (error: Error) => void): WorkerRef {
  const instance = new Worker(path);
  const bus = new Subject<WorkerMessage>();

  const handleMessage = (event: MessageEvent): void => {
    // TODO: Implement message decoding
    // const message = decode(event.data);
    const message: WorkerResponse = event.data;

    if (message.error) {
      onError(new Error(message.error.message));
    } else {
      bus.next({
        senderId: 'response',
        payload: message
      } as WorkerMessage);
    }
  };

  const handleError = (event: ErrorEvent): void => {
    onError(new Error(event.message));
  };

  instance.addEventListener('message', handleMessage);
  instance.addEventListener('error', handleError);

  const ref: WorkerRef = new Observable(subscriber => {
    bus.subscribe(subscriber);
    return () => {
      bus.unsubscribe();
    };
  }) as WorkerRef;

  ref.ask = (message: unknown, transfer?: Transferable[]): Observable<unknown> => {
    return sendMessage(ref, {
      senderId: generateSenderId(),
      payload: message,
      transfer
    });
  };

  ref.emit = (message: unknown, transfer?: Transferable[]): void => {
    const data: WorkerMessage = {
      senderId: generateSenderId(),
      payload: message,
      transfer
    };
    postMessage(instance, data);
  };

  ref.askMany = (message: unknown, transfer?: Transferable[]): Observable<unknown> => {
    return sendMessage(ref, {
      senderId: generateSenderId(),
      payload: message,
      transfer
    }, { many: true });
  };

  ref.askBuffered = (message: unknown, transfer?: Transferable[]): Observable<unknown> => {
    return sendMessage(ref, {
      senderId: generateSenderId(),
      payload: message,
      transfer,
      buffer: true
    });
  };

  return ref;
}

/**
 * Send message to worker
 */
function sendMessage(
  worker: WorkerRef,
  message: WorkerMessage,
  options: { many?: boolean; ignoreResponse?: boolean } = {}
): Observable<unknown> {
  if (options.ignoreResponse) {
    postMessage((worker as any).instance, message);
    return new Observable(subscriber => subscriber.complete());
  }

  return worker.pipe(
    filter(msg => (msg as WorkerResponse).replyTo === message.senderId),
    takeWhile(msg => !(msg as WorkerResponse).completed, true),
    filter(msg => !(msg as WorkerResponse).dropped),
    map(msg => handleResponse(msg as WorkerResponse))
  );
}

/**
 * Post message to worker instance
 */
function postMessage(worker: Worker, message: WorkerMessage): void {
  // TODO: Implement message encoding
  // const { transfer, ...data } = message;
  // const encoded = encode(data);
  const encoded = message;
  worker.postMessage(encoded, message.transfer);
}

/**
 * Handle worker response
 */
function handleResponse(response: WorkerResponse): unknown {
  if (response.error) {
    throw new Error(response.error.message);
  }
  return response.payload;
}

/**
 * Generate sender ID for worker messages
 */
function generateSenderId(): string {
  return Math.random().toString(36).substring(2, 15);
}
