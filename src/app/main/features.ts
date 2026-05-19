// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as dm from '../common/data/macros.js';
import * as cfeat from '../common/features.js';
import * as log from '../common/logging.js';
import * as cf from '../config.js';
import * as rt from './router.js';
import * as st from './store.js';
import * as wasm from '../render-wasm/index.js';
import { str as strLib } from '../vendor/cuerdas/index.js';
import { derived } from '../vendor/okulary/core.js';
import type { PotokEvent } from '../vendor/potok/v2/index.js';
import { PotokV2 } from '../vendor/potok/v2/index.js';
import { useDeref } from '../vendor/rumext/v2/index.js';
import { useState } from 'react';

log.setLevel('trace');

// @ts-ignore
const globalEnabledFeatures = cfeat.getEnabledFeatures(cf.flags);

export const setupWasmFeatures = (features: Set<string>, state: any) => {
  const params = rt.getParams(state);
  const wasm = params.wasm;
  const enableWasm = wasm === 'true';
  const disableWasm = wasm === 'false';

  let updatedFeatures = new Set(features);
  if (enableWasm) {
    updatedFeatures.add('render-wasm/v1');
  }
  if (disableWasm) {
    updatedFeatures.delete('render-wasm/v1');
  }

  // If wasm render is enabled text-editor/v2 must be used
  if (updatedFeatures.has('render-wasm/v1')) {
    updatedFeatures.add('text-editor/v2');
  }

  return updatedFeatures;
};

export const getEnabledFeatures = (state: any, teamId: string) => {
  const team = dm.getIn(state, ['teams', teamId]);

  let features = new Set(globalEnabledFeatures);

  // Add runtime features
  const runtimeFeatures = state.featuresRuntime || new Set();
  features = new Set([...features, ...runtimeFeatures]);

  // Only features without migration
  const noMigrationFeatures = new Set(cfeat.noMigrationFeatures);
  features = new Set([...features, ...noMigrationFeatures]);

  // Add team features
  const teamFeatures = team?.features || new Set();
  features = new Set([...features, ...teamFeatures]);

  return setupWasmFeatures(features, state);
};

export const enabledByFlags = ({ featuresRuntime, features }: any, feature: string) => {
  const runtimeHasFeature = featuresRuntime?.has?.(feature) || false;
  const teamHasFeature = features?.has?.(feature) || false;
  return runtimeHasFeature || teamHasFeature;
};

export const enabledWithoutMigration = ({ featuresRuntime, features }: any, feature: string) => {
  const runtimeHasFeature = featuresRuntime?.has?.(feature) || false;
  const globalHasFeature = globalEnabledFeatures.has(feature);
  const teamHasFeature = features?.has?.(feature) || false;
  return runtimeHasFeature || globalHasFeature || teamHasFeature;
};

export const wasmUrlOverride = (state: any) => {
  const wasmParam = rt.getParams(state).wasm;
  if (wasmParam === 'true') return true;
  if (wasmParam === 'false') return false;
  return undefined;
};

export const activeFeature = (state: any, feature: string) => {
  if (!cfeat.supportedFeatures.has(feature)) {
    throw new Error(`feature not supported: ${feature}`);
  }

  const wasmOverride = feature === 'render-wasm/v1' ? wasmUrlOverride(state) : undefined;

  if (wasmOverride !== undefined) {
    return wasmOverride;
  }

  if (cfeat.noMigrationFeatures.has(feature)) {
    return enabledWithoutMigration(state, feature);
  }

  return enabledByFlags(state, feature);
};

const featuresRef = derived((state: any) => state.features || new Set(), st.state);

export const useFeature = (feature: string) => {
  const enabledFeatures = useDeref(featuresRef);
  return enabledFeatures.has(feature);
};

export const toggleFeature = (feature: string): PotokEvent => {
  if (!cfeat.supportedFeatures.has(feature)) {
    throw new Error('not supported feature');
  }

  return PotokV2.reify('toggle-feature', {
    update(state: any) {
      const runtimeFeatures = state.featuresRuntime || new Set();

      let updatedFeatures = new Set(runtimeFeatures);

      if (updatedFeatures.has(feature)) {
        updatedFeatures.delete(feature);
        log.trc('feature disabled', { feature });
      } else {
        updatedFeatures.add(feature);
        log.trc('feature enabled', { feature });
      }

      // Only allow features without migration
      const noMigrationFeatures = new Set(cfeat.noMigrationFeatures);
      updatedFeatures = new Set([...updatedFeatures].filter(f => noMigrationFeatures.has(f)));

      return {
        ...state,
        featuresRuntime: updatedFeatures
      };
    }
  });
};

export const enableFeature = (feature: string): PotokEvent => {
  if (!cfeat.supportedFeatures.has(feature)) {
    throw new Error('not supported feature');
  }

  return PotokV2.reify('enable-feature', {
    update(state: any) {
      if (activeFeature(state, feature)) {
        return state;
      }

      log.trc('feature enabled', { feature });

      const runtimeFeatures = state.featuresRuntime || new Set();
      const updatedFeatures = new Set([...runtimeFeatures, feature]);

      // Only allow features without migration
      const noMigrationFeatures = new Set(cfeat.noMigrationFeatures);
      const filteredFeatures = new Set([...updatedFeatures].filter(f => noMigrationFeatures.has(f)));

      return {
        ...state,
        featuresRuntime: filteredFeatures
      };
    }
  });
};

export const initialize = (features: Set<string>): PotokEvent => {
  return PotokV2.reify('initialize', {
    update(state: any) {
      let updatedFeatures = new Set(globalEnabledFeatures);

      // Add runtime features
      const runtimeFeatures = state.featuresRuntime || new Set();
      updatedFeatures = new Set([...updatedFeatures, ...runtimeFeatures]);

      // Add provided features
      updatedFeatures = new Set([...updatedFeatures, ...features]);

      updatedFeatures = setupWasmFeatures(updatedFeatures, state);

      return {
        ...state,
        features: updatedFeatures
      };
    },

    effect(state: any) {
      const features = state.features || new Set();

      if (features.has('render-wasm/v1')) {
        wasm.initialize(true);
      } else {
        wasm.initialize(false);
      }

      log.inf('initialized', {
        enabled: Array.from(features).join(' ')
      });
    }
  });
};