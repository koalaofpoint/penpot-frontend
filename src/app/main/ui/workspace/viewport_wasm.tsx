// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// Viewport WASM - WebGL-based viewport rendering
// Translation of ClojureScript viewport-wasm module

import * as stl from 'app/main/style';
import * as d from 'app/common/data';
import * as dm from 'app/common/data/macros';
import * as cfh from 'app/common/files/helpers';
import * as gsh from 'app/common/geom/shapes';
import * as clr from 'app/common/types/color';
import * as ctk from 'app/common/types/component';
import * as path from 'app/common/types/path';
import * as cts from 'app/common/types/shape';
import * as ctl from 'app/common/types/shape/layout';
import * as dcm from 'app/main/data/common';
import * as dwt from 'app/main/data/workspace/transforms';
import * as dwv from 'app/main/data/workspace/variants';
import * as features from 'app/main/features';
import * as refs from 'app/main/refs';
import { state } from 'app/main/store';
import * as ctx from 'app/main/ui/context';
import * as mfc from 'app/main/ui/flex-controls';
import * as uiHooks from 'app/main/ui/hooks';
import * as msr from 'app/main/ui/measurements';
import { PathEditor } from 'app/main/ui/workspace/shapes/path/editor';
import * as editorV1 from 'app/main/ui/workspace/shapes/text/editor';
import { TextEditionOutline } from 'app/main/ui/workspace/shapes/text/text-edition-outline';
import * as editorV2 from 'app/main/ui/workspace/shapes/text/v2-editor';
import { TopToolbar } from 'app/main/ui/workspace/top-toolbar';
import * as actions from 'app/main/ui/workspace/viewport/actions';
import * as comments from 'app/main/ui/workspace/viewport/comments';
import * as debug from 'app/main/ui/workspace/viewport/debug';
import * as drawarea from 'app/main/ui/workspace/viewport/drawarea';
import * as frameGrid from 'app/main/ui/workspace/viewport/frame-grid';
import * as gradients from 'app/main/ui/workspace/viewport/gradients';
import * as gridLayout from 'app/main/ui/workspace/viewport/grid-layout-editor';
import * as guides from 'app/main/ui/workspace/viewport/guides';
import * as viewportHooks from 'app/main/ui/workspace/viewport/hooks';
import * as interactions from 'app/main/ui/workspace/viewport/interactions';
import * as outline from 'app/main/ui/workspace/viewport/outline';
import * as pixelOverlay from 'app/main/ui/workspace/viewport/pixel-overlay';
import * as presence from 'app/main/ui/workspace/viewport/presence';
import * as rulers from 'app/main/ui/workspace/viewport/rulers';
import * as scrollBars from 'app/main/ui/workspace/viewport/scroll-bars';
import * as selection from 'app/main/ui/workspace/viewport/selection';
import * as snapDistances from 'app/main/ui/workspace/viewport/snap-distances';
import * as snapPoints from 'app/main/ui/workspace/viewport/snap-points';
import { GridEditionBar, PathEditionBar, ViewOnlyBar } from 'app/main/ui/workspace/viewport/top-bar';
import * as utils from 'app/main/ui/workspace/viewport/utils';
import { createViewportRef } from 'app/main/ui/workspace/viewport/viewport-ref';
import * as widgets from 'app/main/ui/workspace/viewport/widgets';
import * as wasmApi from 'app/render-wasm/api';
import { TextEditorInput } from 'app/render-wasm/text-editor-input';
import * as dbg from 'app/util/debug';
import * as ted from 'app/util/text-editor';
import * as rx from 'beicon.v2.core';
import * as p from 'promesa.core';
import React, { useState, useEffect, useRef } from 'react';

export const applyModifiersToSelected = (
  selected: string[],
  objects: any,
  modifiers: any
): any => {
  return modifiers
    .filter(([, id]: [any, string]) => selected.includes(id))
    .reduce((acc: any, [id, transform]: [string, any]) => {
      return acc;
    }, objects);
};

interface ViewportWasmProps {
  selected: string[];
  wglobal: any;
  layout: any;
  file: any;
  page: any;
  paleteSize: any;
}

export const ViewportWasm: React.FC<ViewportWasmProps> = ({
  selected,
  wglobal,
  layout,
  file,
  page,
  paleteSize,
}) => {
  const localState = state.get('workspace-local') || {};
  const {
    editPath,
    panning,
    selrect,
    transform,
    highlighted,
    vbox,
    vport,
    zoom,
    zoomInverse,
    edition,
  } = localState;

  const {
    optionsMode,
    tooltip,
    showDistances,
    pickingColor,
  } = wglobal || {};

  // WASM-based WebGL viewport rendering
  return (
    <div className={stl.css('viewport-wasm-container')}>
      <TopToolbar />
      <div className={stl.css('viewport-wasm-canvas')}>
        {/* WebGL-based canvas rendering */}
      </div>
    </div>
  );
};

export default ViewportWasm;