// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

/**
 * Performance profiling for react components.
 *
 * For use it, just wrap the component you want to profile with
 * `profiler` component and pass a label for debug purpose.
 *
 * Example:
 *   <Profiler label="viewport">
 *     <section>
 *       <SomeComponent />
 *     </section>
 *   </Profiler>
 *
 * This will catch all renders and print to console
 * percentiles of render time measures. The log function is
 * automatically debounced to avoid excessive spam to console.
 */

import TDigest from 'tdigest';
import type { ProfilerProps as ReactProfilerProps, ProfilerOnRenderCallback } from 'react';

/**
 * TDigest summary interface
 */
interface TDigestSummary {
  n: number;
  percentile: (p: number) => number;
}

/**
 * Creates a new TDigest instance with transdient collection methods.
 */
export function createTDigest(): TDigestSummary {
  const td = new TDigest();
  return {
    n: 0,
    percentile: (p) => td.percentile(p),
    push: (value: number) => {
      td.push(value);
    }
  } as TDigestSummary & { push: (value: number) => void };
}

/**
 * Creates a TDigest summary string.
 */
export function tdigestSummary(td: TDigestSummary): string {
  return `samples=${td.n}\n` +
         `Q50=${td.percentile(0.50)}\n` +
         `Q75=${td.percentile(0.75)}\n` +
         `Q95=${td.percentile(0.90)}\n` +
         `MAX=${td.percentile(1)}`;
}

/**
 * Gets current performance timestamp.
 */
export function timestamp(): number {
  return performance.now();
}

/**
 * Performance measure registry.
 */
const registry = new Map<string, TDigestSummary & { push: (value: number) => void }>();

/**
 * Registers a performance measure.
 */
export const registerMeasure = (() => {
  const printSingleSummary = (name: string, td: TDigestSummary) => {
    console.log(`[measure: ${name}] ${tdigestSummary(td)}`);
  };

  const debouncedPrintSummary = debounce(() => {
    registry.forEach((td, name) => printSingleSummary(name, td));
  }, 500);

  return (name: string, measure: number) => {
    let td = registry.get(name);
    if (!td) {
      td = createTDigest() as TDigestSummary & { push: (value: number) => void };
      registry.set(name, td);
    }
    td.push(measure);
    debouncedPrintSummary();
  };
})();

/**
 * Creates a measurable function wrapper.
 */
export function measurable<T extends (...args: any[]) => any>(name: string, f: T): T {
  return ((...args: Parameters<T>) => {
    const start = timestamp();
    const result = f(...args);
    const duration = timestamp() - start;
    registerMeasure(name, duration);
    return result;
  }) as T;
}

/**
 * Creates an on-render callback for React Profiler.
 */
export function onRenderFactory(label: string): ProfilerOnRenderCallback {
  const td = createTDigest() as TDigestSummary & { push: (value: number) => void };
  const log = debounce((phase: string, td: TDigestSummary) => {
    console.log(`[profile: ${label} (${phase})] ${tdigestSummary(td)}`);
  }, 300);

  return (_id, phase, actualDuration) => {
    td.push(actualDuration);
    log(phase, td);
  };
}

// Simple debounce implementation
function debounce<T extends (...args: any[]) => void>(fn: T, delay: number): T {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  return ((...args: Parameters<T>) => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => fn(...args), delay);
  }) as T;
}

/**
 * Profiler component props
 */
export interface ProfilerProps {
  children: React.ReactNode;
  label: string;
  enabled?: boolean;
}

/**
 * React Profiler component wrapper for performance profiling.
 */
export function Profiler({ children, label, enabled = true }: ProfilerProps): React.ReactNode {
  if (!enabled) {
    return children;
  }

  const onRender = onRenderFactory(label);

  return React.createElement(
    'Profiler' as any,
    { id: label, onRender },
    children
  );
}

/**
 * Benchmark options
 */
interface BenchmarkOptions {
  runFn: () => any;
  chkFn?: (result: any) => boolean;
  iterations?: number;
  name: string;
  gc?: () => void;
}

/**
 * Benchmark result
 */
interface BenchmarkResult {
  duration: number;
  avg: number;
}

/**
 * Runs a benchmark on a function.
 */
export function benchmark(options: BenchmarkOptions): BenchmarkResult {
  const { runFn, chkFn, iterations = 10000, name, gc } = options;
  const endMark = `${name}:end`;

  const blackhole = { value: undefined as any };

  console.log(`=> benchmarking: ${name}`);
  if (gc) {
    console.log('-> force gc: true');
  }

  console.log(`--> warming up: ${iterations * 2}`);
  if (gc) gc();

  for (let i = iterations * 2; i > 0; i--) {
    blackhole.value = runFn();
  }

  console.log(`--> benchmarking: ${iterations}`);
  if (gc) gc();

  performance.mark(name);

  for (let i = iterations; i > 0; i--) {
    blackhole.value = runFn();
  }

  performance.measure(endMark, name);

  if (chkFn && !chkFn(blackhole.value)) {
    console.log('--> EE: failed chk-fn');
  }

  const result = performance.getEntriesByName(endMark)[0];
  const duration = result ? result.duration : 0;
  const avg = duration / iterations;

  console.log(`--> TOTAL: ${duration} ms`);
  console.log(`--> AVG  : ${avg} ms`);
  console.log('');

  performance.clearMarks(name);
  performance.clearMeasures(endMark);

  return { duration, avg };
}

/**
 * Gets current timestamp.
 */
export function now(): number {
  return performance.now();
}

/**
 * Creates a measurement checkpoint for time measurement of potentially asynchronous flow.
 */
export function createTPoint(): () => number {
  const p1 = now();
  return () => Math.floor(now() - p1);
}

/**
 * Measures time to render an event.
 */
export function measureTimeToRender(event: string): void {
  if (
    typeof globalThis !== 'undefined' &&
    'requestAnimationFrame' in globalThis &&
    'scheduler' in globalThis &&
    'postTask' in (globalThis as any).scheduler
  ) {
    const start = timestamp();
    requestAnimationFrame(() => {
      (globalThis as any).scheduler.postTask(
        () => {
          const end = timestamp();
          console.log(`[${event}] ${end - start}`);
        },
        { priority: 'user-blocking' }
      );
    });
  }
}

// --- DEVTOOLS PERF LOGGING

let longTaskObserver: PerformanceObserver | null = null;
let stallTimer: ReturnType<typeof setInterval> | null = null;
let currentOp: string | null = null;

/**
 * Installs a long task observer.
 */
function installLongTaskObserver(): void {
  if (typeof PerformanceObserver === 'undefined' || longTaskObserver !== null) {
    return;
  }

  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const dur = entry.duration;
      const start = entry.startTime;

      const attribution = (entry as any).attribution;
      const attribCount = attribution?.length ?? 0;
      const firstAttrib = attribCount > 0 ? attribution[0] : undefined;
      const attribName = firstAttrib?.name;
      const attribCtype = firstAttrib?.containerType;
      const attribCid = firstAttrib?.containerId;
      const attribCsrc = firstAttrib?.containerSrc;

      console.warn(
        `[perf] long task ${Math.round(dur)}ms at ${Math.round(start)}ms` +
          (firstAttrib
            ? ` attrib:name=${attribName} ctype=${attribCtype} cid=${attribCid} csrc=${attribCsrc}`
            : '')
      );
    }
  });

  observer.observe({ entryTypes: ['longtask'] });
  longTaskObserver = observer;
}

/**
 * Starts event loop stall logger.
 *
 * Params:
 *   - intervalMs: base interval
 *   - thresholdMs: drift over which we report
 */
function startEventLoopStallLogger(intervalMs: number, thresholdMs: number): void {
  if (stallTimer !== null) {
    return;
  }

  let last = performance.now();

  stallTimer = setInterval(() => {
    const now = performance.now();
    const expected = last + intervalMs;
    const drift = now - expected;

    last = now;

    if (drift > thresholdMs) {
      console.warn(
        `[perf] event loop stall: ${Math.round(drift)}ms` +
          (currentOp ? ` op=${currentOp}` : '')
      );
    }
  }, intervalMs);
}

/**
 * Setup performance observers in dev builds.
 * Safe to call multiple times.
 * Perf logs are disabled by default. Enable them with :perf-logs flag in config.
 */
export function setup(): void {
  installLongTaskObserver();
  startEventLoopStallLogger(50, 100);

  // Expose simple API on window for manual control in devtools
  const api = {
    reset: () => {
      try {
        performance.clearMarks();
        performance.clearMeasures();
      } catch (_err) {
        // Ignore
      }
    }
  };

  (window as any).PenpotPerf = api;
}
