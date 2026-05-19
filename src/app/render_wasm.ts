// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as pathTypes from '@app/common/types/path';
import * as shapeTypes from '@app/common/types/shape';
import * as wasmApi from '@app/render-wasm/api';
import * as wasmShape from '@app/render-wasm/shape';

export const module = wasmApi.module;

export function initialize(enabled: boolean): void {
  if (enabled) {
    pathTypes.wasmCalcBoolContent = wasmApi.calculateBool;
  } else {
    pathTypes.wasmCalcBoolContent = null;
  }
  shapeTypes.wasmEnabled = enabled;
  shapeTypes.wasmCreateShape = wasmShape.createShape;
}
