// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

/**
 * Low-Level queuing mechanism, mainly used for process thumbnails.
 */

import { Observable, Subject, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface QueueItem<T> {
  f: Observable<any>;
  result: Subject<any>;
  tag?: string;
}

interface QueueState {
  findFn: (item: QueueItem<any>) => boolean;
  items: QueueItem<any>[];
  timeout: ReturnType<typeof setTimeout> | null;
  time: number;
  threshold: number;
  maxIterations: number;
}

/**
 * Creates a new queue.
 */
export function create(
  findFn: (item: QueueItem<any>) => boolean,
  threshold: number
): QueueState {
  return {
    findFn,
    items: [],
    timeout: null,
    time: 0,
    threshold,
    maxIterations: Infinity
  };
}

/**
 * Calculates next process time for the queue.
 */
function nextProcessTime(queue: QueueState): number {
  const time = queue.time;
  const threshold = queue.threshold;
  const maxTime = 5000;
  const minTime = 1000;
  const calcTime = Math.min(Math.max((time - threshold) * 10, minTime), maxTime);

  console.debug('queue::next-process-time', {
    time,
    threshold,
    calcTime,
    maxTime,
    minTime
  });

  return calcTime;
}

/**
 * Checks if a process has been requested.
 */
function hasRequestedProcess(queue: QueueState): boolean {
  return queue.timeout !== null;
}

/**
 * Cancels the current process.
 */
function cancelProcess(queue: QueueState): QueueState {
  console.debug('queue::cancel-process');
  if (queue.timeout !== null) {
    clearTimeout(queue.timeout);
  }
  queue.timeout = null;
  return queue;
}

/**
 * Process a single item from the queue.
 */
function process(queue: QueueState, iterations: number): void {
  const { threshold, maxIterations } = queue;
  const item = queue.items.shift();

  if (!item) {
    return;
  }

  const startTime = now();
  const { f, result } = item;

  f.subscribe({
    next: (o) => {
      result.next(o);
    },
    error: (e) => {
      result.error(e);
    },
    complete: () => {
      result.complete();
      const duration = now() - startTime;
      queue.time += duration;

      if (queue.time > threshold || iterations >= maxIterations) {
        requestProcess(queue, 0, nextProcessTime(queue));
      } else {
        requestProcess(queue, iterations + 1, 0);
      }
    }
  });
}

/**
 * Gets current timestamp.
 */
function now(): number {
  return Date.now();
}

/**
 * Requests processing of the queue after a delay.
 */
function requestProcess(queue: QueueState, iterations: number, time: number): void {
  console.debug('queue::request-process', { time });
  queue.timeout = setTimeout(() => {
    queue.timeout = null;
    process(queue, iterations);
  }, time);
}

/**
 * Enqueues an item at the front of the queue.
 */
function enqueueFirst(queue: QueueState, item: QueueItem<any>): void {
  queue.items.unshift(item);
  if (!hasRequestedProcess(queue)) {
    requestProcess(queue, 0, nextProcessTime(queue));
  }
}

/**
 * Enqueues an item at the end of the queue.
 */
function enqueueLast(queue: QueueState, item: QueueItem<any>): void {
  queue.items.push(item);
  if (!hasRequestedProcess(queue)) {
    requestProcess(queue, 0, nextProcessTime(queue));
  }
}

/**
 * Enqueues a unique request - returns an existing request if already pending.
 */
export function enqueueUnique<T>(
  queue: QueueState,
  request: QueueItem<T>,
  f: () => Observable<T>
): Observable<T> {
  const { findFn } = queue;
  const result = new Subject<T>();

  request.result = result;
  request.f = f();

  // If tag is "frame", they are added to front of queue so that they are processed first
  if (request.tag === 'frame') {
    const item = queue.items.find(findFn);
    if (item) {
      const otherResult = item.result;
      otherResult.subscribe({ next: (v) => result.next(v) });
    } else {
      enqueueFirst(queue, request);
    }
  } else {
    const item = queue.items.findLast?.(findFn);
    if (item) {
      const otherResult = item.result;
      otherResult.subscribe({ next: (v) => result.next(v) });
    } else {
      enqueueLast(queue, request);
    }
  }

  return result.asObservable();
}

/**
 * Clears the queue.
 */
export function clear(queue: QueueState): QueueState {
  queue = cancelProcess(queue);
  queue.items = [];
  queue.time = 0;
  return queue;
}
