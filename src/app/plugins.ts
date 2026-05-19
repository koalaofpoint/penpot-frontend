// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// RPC for plugins runtime.
import * as runtime from "@penpot/plugins-runtime"
import * as features from "app/main/features"
import { store } from "app/main/store"
import * as api from "app/plugins/api"
import * as flex from "app/plugins/flex"
import * as format from "app/plugins/format"
import * as grid from "app/plugins/grid"
import * as library from "app/plugins/library"
import "app/plugins/public-utils"
import * as rg from "app/plugins/ruler-guides"
import * as shape from "app/plugins/shape"
import * as rx from "beicon.v2/core"
import * as ptk from "potok.v2.core"

export function initPluginsRuntime() {
  runtime.initPluginsRuntime((pluginId: string) =>
    api.createContext(pluginId)
  )
}

export const initialize = ptk.createWatchEvent(
  (stream: any) =>
    stream
      .pipe(
        rx.filter(ptk.isType("initialize", features)),
        rx.observeOn("async"),
        rx.filter((state: any) =>
          features.activeFeature(store.getState(), "plugins/runtime")
        ),
        rx.take(1),
        rx.tap(initPluginsRuntime),
        rx.ignore
      )
)

// Prevent circular dependency
flex.shapeProxy = shape.shapeProxy
grid.shapeProxy = shape.shapeProxy
format.shapeProxy = shape.shapeProxy
rg.shapeProxy = shape.shapeProxy
rg.shapeProxy = shape.shapeProxy

shape.libTypographyProxy = library.libTypographyProxy
shape.libComponentProxy = library.libComponentProxy
