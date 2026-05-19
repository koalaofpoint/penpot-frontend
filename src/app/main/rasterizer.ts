// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from '../common/data/index.js';
import * as dm from '../common/data/macros.js';
import * as log from '../common/logging.js';
import * as u from '../common/uri.js';
import * as uuid from '../common/uuid/index.js';
import * as cf from '../config.js';
import * as dom from '../util/dom/index.js';
import * as http from '../util/http/index.js';
import { Observable } from '../vendor/beicon/v2/index.js';
import { str as strLib } from '../vendor/cuerdas/index.js';

let ready = false;
const queue: any[] = [];
let instance: HTMLIFrameElement | null = null;
const msgbus = new Subject<any>();

const origin = dm.str(
  u.join(cf.rasterizerUri, 'rasterizer.html')
);

const sendMessage = (message: any) => {
  const window = instance?.contentWindow;
  if (window) {
    window.postMessage(message, origin);
  }
};

const processQueuedMessages = () => {
  while (queue.length > 0) {
    const message = queue.shift();
    sendMessage(message);
  }
};

const onMessage = (event: MessageEvent) => {
  const evOrigin = event.origin;
  const evData = event.data;

  if (typeof evData === 'object' && strLib.startsWith(origin, evOrigin)) {
    const scope = evData.scope;
    const type = evData.type;

    if (scope === 'penpot/rasterizer') {
      if (type === 'ready') {
        ready = true;
        processQueuedMessages();
      }
      msgbus.next(evData);
    }
  }
};

const queueMessage = (message: any) => {
  queue.push(message);
};

const replaceUris = (styles: string) => {
  const publicUri = String(cf.publicUri);
  const rasterizerUri = String(cf.rasterizerUri);

  if (publicUri !== rasterizerUri) {
    return strLib.replace(styles, publicUri, rasterizerUri);
  }

  return styles;
};

export const render = ({ data, styles, width, result }: {
  data: any;
  styles: any;
  width: any;
  result: any;
}) => {
  styles = replaceUris(d.nilv(styles, ''));
  result = d.nilv(result, 'blob');
  const id = dm.str(uuid.next());
  const payload = { data, styles, width, result };
  const message = { id, scope: 'penpot/rasterizer', payload };

  if (ready) {
    sendMessage(message);
  } else {
    queueMessage(message);
  }

  return new Observable(subscriber => {
    const subscription = msgbus
      .pipe(
        msg => msg.id === id,
        map(msg => {
          switch (msg.type) {
            case 'success':
              return msg.payload;
            case 'failure':
              throw new Error(msg.payload);
            default:
              throw new Error('Unknown message type');
          }
        }),
        take(1)
      )
      .subscribe(subscriber);

    return () => subscription.unsubscribe();
  });
};

export const renderNode = ({ node, styles, width, result }: {
  node: HTMLElement;
  styles: any;
  width: any;
  result: any;
}) => {
  width = d.nilv(width, dom.getAttribute(node, 'width'));
  styles = d.nilv(styles, '');
  const data = dom.nodeToXml(node);
  result = d.nilv(result, 'blob');

  return render({ data, styles, width, result });
};

export const init = () => {
  const iframe = dom.createElement('iframe');
  dom.setAttribute(iframe, 'id', 'rasterizer');
  dom.setAttribute(iframe, 'src', origin);
  dom.setAttribute(iframe, 'hidden', 'true');

  window.addEventListener('message', onMessage);

  return http.fetch({
    method: 'head',
    uri: cf.rasterizerUri,
    mode: 'no-cors'
  })
    .pipe(
      map(response => {
        const allowed = !response.redirected;
        if (!allowed) {
          log.err('rasterizer iframe blocked by adblocker', { origin });
        }
        return allowed;
      }),
      catchError(cause => {
        log.err('rasterizer iframe blocked by adblocker', { origin, cause });
        return of(false);
      }),
      tap(allowed => {
        if (allowed) {
          document.body.appendChild(iframe);
          instance = iframe;
        } else {
          const newOrigin = dm.str(u.join(cf.publicUri, 'rasterizer.html'));
          log.warn('fallback to main domain', { origin: newOrigin });

          dom.setAttribute(iframe, 'src', newOrigin);
          document.body.appendChild(iframe);

          origin = newOrigin;
          cf.rasterizerUri = cf.publicUri;
          instance = iframe;
        }
      })
    );
};

// Simple Observable implementation for the Subject
class Subject<T> {
  private observers: ((value: T) => void)[] = [];

  next(value: T) {
    this.observers.forEach(observer => observer(value));
  }

  pipe<U>(
    operator1?: (source: Observable<T>) => Observable<U>
  ): Observable<U> {
    const source = new Observable<T>(subscriber => {
      const subscription = {
        unsubscribe: () => {}
      };

      const observer = (value: T) => subscriber.next(value);
      this.observers.push(observer);

      subscription.unsubscribe = () => {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
          this.observers.splice(index, 1);
        }
      };

      return subscription;
    });

    if (operator1) {
      return operator1(source);
    }

    return source as any;
  }
}