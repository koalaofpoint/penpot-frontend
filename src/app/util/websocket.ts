// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { Observable, Subject, Observer } from 'rxjs';

/**
 * WebSocket message types
 */
export type WebSocketMessageType = 'message' | 'error' | 'opened';

/**
 * WebSocket message interface
 */
export interface WebSocketMessage {
  type: WebSocketMessageType;
  payload: unknown;
}

/**
 * WebSocket interface
 */
export interface IWebSocket extends Observable<WebSocketMessage> {
  isOpen(): boolean;
  send(msg: string): void;
  close(): void;
}

/**
 * WebSocket instance
 */
export class WebSocketConnection extends Observable<WebSocketMessage> implements IWebSocket {
  private readonly subject = new Subject<WebSocketMessage>();
  private readonly ws: WebSocket | null = null;
  private readonly eventListeners: Array<{ event: string; handler: EventListener }> = [];

  constructor(private readonly uri: string) {
    super(subscriber => {
      this.subject.subscribe(subscriber);
      return () => {
        this.subject.unsubscribe();
      };
    });

    this.connect();
  }

  private connect(): void {
    this.ws = new WebSocket(this.uri);

    this.ws.onopen = () => {
      this.subject.next({ type: 'opened', payload: null });
    };

    this.ws.onerror = error => {
      this.subject.next({ type: 'error', payload: error });
    };

    this.ws.onmessage = event => {
      // TODO: Implement transit decoding
      // const payload = decodeTransit(event.data);
      this.subject.next({ type: 'message', payload: event.data });
    };
  }

  /**
   * Check if WebSocket is open
   */
  isOpen(): boolean {
    return this.ws?.readyState === WebSocket.OPEN;
  }

  /**
   * Send message through WebSocket
   */
  send(msg: string): void {
    if (this.isOpen()) {
      this.ws?.send(msg);
    }
  }

  /**
   * Close WebSocket connection
   */
  close(): void {
    this.subject.complete();
    this.ws?.close();
    this.eventListeners.forEach(({ event, handler }) => {
      this.ws?.removeEventListener(event, handler);
    });
  }
}

/**
 * Create a WebSocket connection
 */
export function create(uri: string): IWebSocket {
  return new WebSocketConnection(uri);
}

/**
 * Check if message is a message event
 */
export function isMessageEvent(msg: WebSocketMessage): msg is WebSocketMessage & { type: 'message' } {
  return msg.type === 'message';
}

/**
 * Check if message is an error event
 */
export function isErrorEvent(msg: WebSocketMessage): msg is WebSocketMessage & { type: 'error' } {
  return msg.type === 'error';
}

/**
 * Check if message is an opened event
 */
export function isOpenedEvent(msg: WebSocketMessage): msg is WebSocketMessage & { type: 'opened' } {
  return msg.type === 'opened';
}

/**
 * Send message through WebSocket
 */
export function send!(ws: IWebSocket, msg: unknown): void {
  // TODO: Implement transit encoding
  // const encoded = encodeTransit(msg);
  const encoded = JSON.stringify(msg);
  ws.send(encoded);
}

/**
 * Close WebSocket connection
 */
export function close!(ws: IWebSocket): void {
  ws.close();
}

/**
 * Check if WebSocket is open
 */
export function isOpen(ws: IWebSocket): boolean {
  return ws.isOpen();
}

/**
 * Get receive stream from WebSocket
 */
export function getRcvStream(ws: IWebSocket): Observable<WebSocketMessage> {
  return ws;
}
