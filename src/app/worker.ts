// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as dm from 'app/common/data/macros';
import * as log from 'app/common/logging';
import * as sm from 'app/common/schema';
import 'app/common/types/objects-map';
import * as obj from 'app/util/object';
import * as impl from 'app/worker/impl';
import 'app/worker/import';
import 'app/worker/index';
import * as wm from 'app/worker/messages';
import 'app/worker/thumbnails';
import * as rx from 'beicon.v2.core';
import * as p from 'promesa.core';

log.setup!({ app: 'info' });

// Message schema
const schemaMessage = {
  title: 'WorkerMessage',
  type: 'object',
  properties: {
    senderId: { type: 'string', format: 'uuid' },
    payload: {
      type: 'object',
      properties: {
        cmd: { type: 'string' },
      },
      required: ['cmd'],
    },
    buffer: { type: 'boolean' },
  },
  required: ['senderId', 'payload'],
};

const checkMessage = (message: any): boolean => {
  return message && message.senderId && message.payload && message.payload.cmd;
};

const buffer = new rx.Subject<any>();

interface ProcessedMessage {
  messages: Record<string, any>;
  dropped: any[];
  last: any;
}

const handleMessage = (message: any) => {
  if (!checkMessage(message)) {
    console.warn('Invalid message received', message);
    return;
  }

  const { senderId, payload, transfer } = message;

  const post = (msg: any) => {
    const encoded = wm.encode!({ ...msg, replyTo: senderId });
    (self as any).postMessage(encoded);
  };

  const reply = (result: any) => {
    post({ payload: result });
  };

  const replyError = (cause: any) => {
    if (typeof cause === 'object') {
      post({
        error: {
          type: 'worker-error',
          code: cause.type || 'wrapped',
          data: cause,
        },
      });
    } else {
      post({
        error: {
          type: 'worker-error',
          code: 'unhandled-error',
          hint: cause instanceof Error ? cause.message : String(cause),
          data: cause instanceof Error ? cause.stack : null,
        },
      });
    }
  };

  const replyCompleted = (msg?: any) => {
    post({ payload: msg, completed: true });
  };

  try {
    const result = impl.handler!(payload, transfer);
    const isPromise = p.isPromise!(result);
    const isStream = rx.isObservable!(result) || rx.isSubject!(result);

    if (isPromise) {
      (result as Promise<any>)
        .then(replyCompleted)
        .catch(replyError);
    } else if (isStream) {
      (result as rx.Observable<any>).subscribe!(
        reply,
        replyError,
        replyCompleted
      );
    } else {
      reply(result);
    }
  } catch (err) {
    replyError(err);
  }
};

const dropMessage = (message: any) => {
  dm.assert!('expected valid message', checkMessage(message));
  (self as any).postMessage(
    wm.encode!({ replyTo: message.senderId, dropped: true })
  );
};

let processMessageSub: any;

const subscribeBufferMessages = () => {
  const empty: ProcessedMessage = { messages: {}, dropped: [], last: {} };

  return buffer
    .pipe(
      rx.observeOn!('async'),
      rx.scan!(
        (acc: ProcessedMessage, message: any) => {
          const cmd = message?.payload?.cmd;

          let dropped = acc.dropped;
          if (acc.messages[cmd]) {
            dropped = [...dropped, acc.messages[cmd]];
          }

          const messages = { ...acc.messages, [cmd]: message };

          if (message === '::clear') {
            return empty;
          }

          return { messages, dropped, last: message };
        },
        empty
      ),
      rx.debounce!(1),
      rx.subscribe!((result: ProcessedMessage) => {
        const { messages, dropped, last } = result;

        dropped.forEach((msg) => dropMessage(msg));

        Object.values(messages).forEach((msg) => handleMessage(msg));

        if (last !== '::clear') {
          buffer.next('::clear');
        }
      })
    );
};

const onMessage = (event: MessageEvent) => {
  if ((event as any).source !== null) {
    return;
  }

  let message = (event as any).data;
  const transfer = obj.get(message, 'transfer');

  message = wm.decode!(message);
  if (transfer !== null && transfer !== undefined) {
    message = { ...message, transfer };
  }

  if (message.buffer) {
    buffer.next(message);
  } else {
    handleMessage(message);
  }
};

(self as any).addEventListener('message', onMessage);

export const stop = () => {
  rx.dispose!(processMessageSub);
  (self as any).removeEventListener('message', onMessage);
};

export const start = () => {
  processMessageSub = subscribeBufferMessages();
  (self as any).addEventListener('message', onMessage);
};

export const init = () => {
  processMessageSub = subscribeBufferMessages();
};