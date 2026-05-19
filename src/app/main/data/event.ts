// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as ua from 'ua-parser-js';
import * as d from 'app.common.data';
import * as dm from 'app.common.data.macros';
import * as json from 'app.common.json';
import * as l from 'app.common.logging';
import * as math from 'app.common.math';
import * as ct from 'app.common.time';
import * as cf from 'app.config';
import * as refs from 'app.main.refs';
import * as rp from 'app.main.repo';
import * as st from 'app.main.store';
import * as g from 'app.util.globals';
import * as http from 'app.util.http';
import * as i18n from 'app.util.i18n';
import * as obj from 'app.util.object';
import * as perf from 'app.util.perf';
import * as storage from 'app.util.storage';
import * as rx from 'beicon.v2.core';
import * as rxo from 'beicon.v2.operators';
import * as u from 'lambdaisland.uri';
import * as ptk from 'potok.v2.core';

l.set_level('info');

// Defines the maximum buffer size, after events start discarding.
const max_buffer_size = 1024;

// Defines the maximum number of events that can go in a single batch.
const max_chunk_size = 100;

// Defines the time window (in ms) within events belong to the same session.
const session_timeout = 1000 * 60 * 30;

// Min time for a long task to be reported to telemetry
const min_longtask_time = 1000;

// Min time between long task reports
const debounce_longtask_time = 1000;

// Min time for a long task to be reported to telemetry
const min_browser_event_time = 1000;

// Min time between long task reports
const debounce_browser_event_time = 1000;

// Min time for a long task to be reported to telemetry
const min_performance_event_time = 1000;

// Min time between long task reports
const debounce_performance_event_time = 1000;

// Default micro-benchmark iterations
const micro_benchmark_iterations = 1e6;

// --- CONTEXT

function collect_context() {
  const uagent = new ua.UAParser();
  return d.without_nils({
    version: cf.version.full,
    locale: i18n.current_locale,
    browser: obj.get(uagent.getBrowser(), "name"),
    browser_version: obj.get(uagent.getBrowser(), "version"),
    engine: obj.get(uagent.getEngine(), "name"),
    engine_version: obj.get(uagent.getEngine(), "version"),
    os: `${obj.get(uagent.getOS(), "name")} ${obj.get(uagent.getOS(), "version")}`,
    os_version: obj.get(uagent.getOS(), "version"),
    device_type: (() => {
      const device = uagent.getDevice();
      const type = obj.get(device, "type");
      return type ? type : "unknown";
    })(),
    device_vendor: obj.get(uagent.getDevice(), "vendor"),
    device_model: obj.get(uagent.getDevice(), "model"),
    screen_width: obj.get(g.window.screen, "width"),
    screen_height: obj.get(g.window.screen, "height"),
    screen_color_depth: obj.get(g.window.screen, "colorDepth"),
    screen_orientation: obj.get(obj.get(g.window.screen, "orientation"), "type"),
    device_arch: obj.get(uagent.getCPU(), "architecture")
  });
}

const context = atom(d.without_nils(collect_context()));

i18n.locale = i18n.locale;

// --- EVENT TRANSLATION

export interface Event {
  data(): any;
}

export interface PerformanceEvent {
  // Marker interface
}

function coerce_to_string(v: any): string | null {
  if (v instanceof Map) return null;
  if (typeof v === 'object') return null;

  if (v instanceof Keyword) return v.name;
  if (typeof v === 'string') return v;
  if (v === null) return null;
  return String(v);
}

const xf_coerce_to_string = (x: any) => {
  const s = coerce_to_string(x);
  return s !== null ? s : undefined;
};

function simplify_props(data: any): any {
  return Object.entries(data).reduce((acc: any, [k, v]: [string, any]) => {
    if (typeof v === 'object' && v !== null && !Array.isArray(v)) {
      return {...acc, [k]: 'placeholder/map'};
    }
    if (Array.isArray(v)) {
      return {...acc, [k]: v.map(xf_coerce_to_string)};
    }
    if (v instanceof Set) {
      return {...acc, [k]: Array.from(v).map(xf_coerce_to_string)};
    }
    if (typeof v === 'function') {
      return {...acc, [k]: 'placeholder/fn'};
    }
    if (v === null) {
      const {[k]: _, ...rest} = acc;
      return rest;
    }
    return {...acc, [k]: v};
  }, data);
}

function add_external_context_info(context: any): any {
  const external_context_info = json.to_clj(cf.external_context_info);
  return {...context, ...external_context_info};
}

function make_proto_event(event: Event & any): any {
  const data = d.deep_merge(event.data(), event.meta);
  const type = ptk.type(event);
  const ev_name = name(type);
  const context = d.without_nils({
    ...data.__context,
    event_origin: data.__origin,
    event_namespace: namespace(type),
    event_symbol: ev_name
  });
  const props = simplify_props(d.without_qualified(data));

  return {
    type: data.__type || 'action',
    name: data.__name || ev_name,
    context,
    props
  };
}

function make_data_event(event: any): any {
  const data = event.data;
  const name = data.__name;

  if (typeof name === 'string') {
    const type = data.__type || 'action';
    const context = d.without_nils({
      ...data.__context,
      event_origin: data.__origin
    });
    const props = simplify_props(d.without_qualified(data));

    return {
      type,
      name,
      context,
      props
    };
  }

  return null;
}

function make_event(result: any): any;
function make_event(profile_id: string, event: any): any;
function make_event(profile_id_or_result: string | any, event?: any): any {
  let profile_id: string;
  let event_to_process: any;

  if (typeof profile_id_or_result === 'string') {
    profile_id = profile_id_or_result;
    event_to_process = event;
  } else {
    profile_id = profile_id_or_result[1];
    event_to_process = profile_id_or_result[0];
  }

  const event_data = event_to_process instanceof Event
    ? make_proto_event(event_to_process)
    : ptk.data_event(event_to_process)
      ? make_data_event(event_to_process)
      : null;

  if (event_data) {
    return {...event_data, profile_id};
  }

  return null;
}

function make_performance_event(result: any): any;
function make_performance_event(profile_id: string, props: any): any;
function make_performance_event(profile_id_or_result: string | any, props?: any): any {
  let profile_id: string;
  let props_to_process: any;

  if (typeof profile_id_or_result === 'string') {
    profile_id = profile_id_or_result;
    props_to_process = props;
  } else {
    profile_id = profile_id_or_result[1];
    props_to_process = profile_id_or_result[0];
  }

  const perf_info = st.state?.performance_info;
  const name = props_to_process.__name;

  return {
    type: 'trigger',
    name: `performance-${name}`,
    context: {file_stats: perf_info?.counters || {}},
    props: {
      ...props_to_process,
      __name: undefined,
      file_id: perf_info?.file_id
    },
    profile_id
  };
}

function process_performance_event(result: any) {
  const event = result[0];
  const profile_id = result[1];

  if (event instanceof PerformanceEvent) {
    return rx.create((subs: any) => {
      const start = perf.now();

      js.requestAnimationFrame(() => {
        js.scheduler.postTask(() => {
          const time = perf.now() - start;
          if (time > min_performance_event_time) {
            rx.push!(subs, make_performance_event(profile_id, {
              __name: 'blocking-event',
              event_name: name(ptk.type(event)),
              duration: time
            }));
          }
          rx.end!(subs);
        }, {priority: 'user-blocking'});
      });

      return null;
    });
  }

  return rx.empty();
}

// --- MAIN LOOP

function append_to_buffer(buffer: any[], item: any): any[] {
  if (buffer.length >= max_buffer_size) {
    return buffer;
  }
  return [...buffer, item];
}

function remove_from_buffer(buffer: any[], items: number): any[] {
  return Array.from(buffer.slice(items));
}

function persist_events(events: any[]) {
  if (events.length === 0) {
    return rx.of(null);
  }

  const uri = u.join(cf.public_uri, 'api/main/methods/push-audit-events');
  const params = {
    uri,
    method: 'post',
    credentials: 'include',
    body: http.transit_data({events})
  };

  return rx.from(http.send!(params))
    .pipe(
      rx.mapcat(rp.handle_response),
      rx.catch(() => rx.of(null))
    );
}

function user_input_observer(): rx.Observable<any> {
  if (typeof globalThis !== 'undefined' && (globalThis as any).PerformanceObserver) {
    return rx.create((subs: any) => {
      const observer = new (globalThis as any).PerformanceObserver((list: any) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'event' && entry.duration > min_browser_event_time) {
            rx.push!(subs, {
              __name: 'user-input',
              duration: entry.duration,
              event_name: entry.name
            });
          }
        }
      });

      observer.observe({entryTypes: ['event']});

      return () => observer.disconnect();
    });
  }

  return rx.empty();
}

function longtask_observer(): rx.Observable<any> {
  if (typeof globalThis !== 'undefined' && (globalThis as any).PerformanceObserver) {
    return rx.create((subs: any) => {
      const observer = new (globalThis as any).PerformanceObserver((list: any) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'longtask' && entry.duration > min_longtask_time) {
            rx.push!(subs, {
              __name: 'long-task',
              duration: entry.duration
            });
          }
        }
      });

      observer.observe({entryTypes: ['longtask']});

      return () => observer.disconnect();
    });
  }

  return rx.empty();
}

function snapshot_performance_info({file_id}: {file_id: string}) {
  return ptk.reify('snapshot-performance-info', class implements ptk.UpdateEvent {
    update(state: any): any {
      const count_shapes = (file: any) => {
        return Object.entries(file.data.pages_index).reduce((sum: number, [_, page]: [string, any]) => {
          return sum + Object.keys(page.objects).length;
        }, 0);
      };

      const add_libraries_counters = (state: any, files: any) => {
        return refs.select_libraries(files, file_id).reduce((acc: any, library_id: string) => {
          const data = dm.get_in(files, [library_id, 'data']);
          return {
            ...acc,
            total_components: acc.total_components + Object.keys(data.components).length,
            total_colors: acc.total_colors + Object.keys(data.colors).length,
            total_typographies: acc.total_typographies + Object.keys(data.typographies).length
          };
        }, state);
      };

      return state.update('performance-info', (info: any) => {
        const files = state.files;
        const file = files[file_id];

        return {
          ...info,
          file_id,
          counters: {
            ...info.counters,
            total_shapes: count_shapes(file)
          },
          counters: add_libraries_counters(info.counters, files)
        };
      });
    }
  });
}

function store_performance_info() {
  return ptk.reify('store-performance-info', class implements ptk.UpdateEvent, ptk.WatchEvent {
    update(state: any): any {
      const start = perf.now();

      for (let i = micro_benchmark_iterations; i > 0; i--) {
        math.sin(i) * math.sqrt(i);
      }

      const end = perf.now();

      return state.update('performance-info', (info: any) => ({
        ...info,
        bench: end - start
      }));
    }

    async watch(_state: any, _dispatch: any, stream: any) {
      return rx.from(stream)
        .pipe(
          rx.filter(ptk.type_checker('app.main.data.workspace/all-libraries-resolved')),
          rx.take(1),
          rx.map((event: any) => event.data),
          rx.map(snapshot_performance_info)
        );
    }
  });
}

export function initialize() {
  return ptk.reify('initialize', class implements ptk.WatchEvent, ptk.EffectEvent {
    async watch(_state: any, _dispatch: any, _ctx: any) {
      return rx.of(store_performance_info());
    }

    effect(_state: any, _dispatch: any, stream: any) {
      const session = atom(null);
      const stopper = rx.filter(ptk.type_checker('initialize'), stream);
      const buffer = atom(#queue []);
      const profile = rx.from_atom(storage.user, {emit_current_value: true})
        .pipe(
          rx(map(user => user.profile)),
          rx(map(profile => profile.id)),
          rxo.distinct_contiguous()
        );

      l.debug({hint: 'event instrumentation initialized'});

      // Audit persistence stream
      rx.merge(
        rx.from_atom(buffer)
          .pipe(
            rx(filter((buf: any[]) => buf.length > 0)),
            rx(debounce_time(2000))
          ),
        rx.from(stream)
          .pipe(
            rx(filter(ptk.type_checker('app.main.data.profile/logout'))),
            rx(observe_on('async'))
          )
      )
        .pipe(
          rx(map(() => Array.from(buffer.current).slice(0, max_chunk_size))),
          rx(with_latest_from(profile)),
          rx(mapcat(([chunk, profile_id]: [any[], string]) => {
            const events = chunk.filter((e: any) => e.profile_id === profile_id);
            return rx.from(persist_events(events))
              .pipe(
                rx(tap(() => l.debug({hint: 'events chunk persisted', total: events.length}))),
                rx(map(() => chunk))
              );
          })),
          rx(take_until(stopper)),
          rx(subs!({
            next: (chunk: any[]) => {
              buffer.current = remove_from_buffer(buffer.current, chunk.length);
            },
            error: (cause: any) => {
              l.error({hint: 'unexpected error on audit persistence', cause});
            },
            complete: () => {
              l.debug({hint: 'audit persistence terminated'});
            }
          }))
        );

      // Main event processing stream
      return rx.merge(
        rx.from(stream)
          .pipe(
            rx(with_latest_from(profile)),
            rx(map(make_event))
          ),

        user_input_observer()
          .pipe(
            rx(with_latest_from(profile)),
            rx(map(make_performance_event)),
            rx(debounce_time(debounce_browser_event_time))
          ),

        longtask_observer()
          .pipe(
            rx(with_latest_from(profile)),
            rx(map(make_performance_event)),
            rx(debounce_time(debounce_longtask_time))
          ),

        (typeof globalThis !== 'undefined' &&
         (globalThis as any).requestAnimationFrame &&
         (globalThis as any).scheduler &&
         (globalThis as any).scheduler.postTask)
          ? rx.from(stream)
            .pipe(
              rx(with_latest_from(profile)),
              rx(merge_map(process_performance_event)),
              rx(debounce_time(debounce_performance_event_time))
            )
          : rx.empty()
      )
        .pipe(
          rx(filter((e: any) => e.profile_id)),
          rx(map((event: any) => {
            const session_ = session.current || ct.now();
            const context_ = d.without_nils({
              ...context.current,
              ...event.context,
              session: session_,
              external_session_id: cf.external_session_id,
              ...add_external_context_info(context.current)
            });

            session.current = session_;
            return {
              ...event,
              timestamp: ct.now(),
              context: context_
            };
          })),
          rx(tap((event: any) => {
            l.debug({hint: 'event enqueued'});
            buffer.current = append_to_buffer(buffer.current, event);
          })),
          rx(switch_map(() => rx.timer(session_timeout))),
          rx(take_until(stopper)),
          rx(subs!({
            next: () => {
              l.debug({hint: 'session reinitialized'});
              session.current = null;
            },
            error: (cause: any) => {
              l.error({hint: 'error on event batching stream', cause});
            },
            complete: () => {
              l.debug({hint: 'events batching stream terminated'});
            }
          }))
        );
    }
  });
}

export function event(props: any) {
  return ptk.data_event('event', props);
}

// Helper functions
function name(keyword: any): string {
  if (typeof keyword === 'string') return keyword;
  if (keyword && typeof keyword.name === 'string') return keyword.name;
  return String(keyword);
}

function namespace(keyword: any): string | undefined {
  if (typeof keyword === 'string') return undefined;
  if (keyword && typeof keyword.ns === 'string') return keyword.ns;
  return undefined;
}

// Global atom implementation (simplified)
class Atom<T> {
  current: T;
  constructor(initial: T) {
    this.current = initial;
  }
}

function atom<T>(initial: T): Atom<T> {
  return new Atom(initial);
}

// Keyword implementation (simplified)
class Keyword {
  name: string;
  ns?: string;
  constructor(name: string, ns?: string) {
    this.name = name;
    this.ns = ns;
  }
}

// Global functions for ClojureScript compatibility
(globalThis as any).atom = atom;
(globalThis as any).Keyword = Keyword;