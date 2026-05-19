// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { ex } from '../common/exceptions'
import { t } from '../common/transit'
import { rx, Observable } from '../beicon.v2/core'
import { ptk } from '../potok.v2/core'

export interface BroadcastMessage {
  id: string | null
  type: string
  data: any
  [Symbol.observable]?: () => Observable<any>
}

class BroadcastMessage implements Deref {
  constructor(
    public id: string | null,
    public type: string,
    public data: any
  ) {}

  deref(): any {
    return this.data
  }
}

const DEFAULT_TOPIC = "penpot" as const

let defaultChannel: BroadcastChannel | null = null

try {
  if (typeof BroadcastChannel !== 'undefined') {
    defaultChannel = new BroadcastChannel(DEFAULT_TOPIC)
  }
} catch (e) {
  // Ignore errors when creating BroadcastChannel
  // e.g. "Can't create BroadcastChannel in an opaque origin"
}

export const stream: Observable<any> = typeof BroadcastChannel !== 'undefined'
  ? rx.create(subs => {
      const chan = new BroadcastChannel(DEFAULT_TOPIC)
      chan.onmessage = (event) => {
        rx.push!(subs, event.data)
      }
      return () => chan.close()
    })
    .pipe(
      rx.map(t.decodeStr),
      rx.map(data => new BroadcastMessage(data.id, data.type, data.data)),
      rx.share()
    )
  : rx.subject()

export function emit(type: string, data: any): void
export function emit(id: string | null, type: string, data: any): void
export function emit(...args: any[]): void {
  if (!defaultChannel) return

  let type: string, id: string | null, data: any

  if (args.length === 2) {
    [type, data] = args
    id = null
  } else {
    [id, type, data] = args
  }

  defaultChannel.postMessage(t.encodeStr({ id, type, data }))
}

export function isType(type: string): (obj: any) => boolean
export function isType(obj: any, type: string): boolean
export function isType(...args: any[]): any {
  if (args.length === 1) {
    const type = args[0]
    return (obj: any) => obj?.type === type
  } else {
    const [obj, type] = args
    return obj?.type === type
  }
}

export function event(type: string, data: any): any {
  return ptk.reify('event', {
    ptk: {
      EffectEvent: {
        effect() {
          emit(type, data)
        }
      }
    }
  })
}