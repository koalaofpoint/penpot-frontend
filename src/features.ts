// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// This namespace is only to export the functions for toggle features
import * as features from "app/main/features"
import { store } from "app/main/store"
import * as plugins from "app/plugins"
import * as tm from "app/util/timers"

export function grid() {
  tm.scheduleOnIdle(() => {
    store.emit(features.toggleFeature("layout/grid"))
  })
  return null
}

export function getEnabled() {
  return features.globalEnabledFeatures
}

export function getTeamEnabled() {
  return store.getState().features
}

export function plugins() {
  store.emit(features.enableFeature("plugins/runtime"))
  plugins.initPluginsRuntime!()
  return null
}
