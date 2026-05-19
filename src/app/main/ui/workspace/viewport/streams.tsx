// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as mainStore from "app/main/store"
import * as refs from "app/main/refs"
import { useSubscription } from "reactzustand"
import {
  startPipeline,
  stopPipeline,
  initializePipeline,
} from "rxjs"
import { streamsContainer } from "app/main/streams"

export const useWorkspaceViewport = () => {
  // The streams module initialization is handled at app startup
  // This hook provides access to viewport-related streams if needed
}