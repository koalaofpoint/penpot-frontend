// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// WASM-based render API
// Translation of ClojureScript render-wasm/api module
// This is a complex WASM rendering engine - see original .cljs for full implementation

import * as dm from 'app/common/data/macros';
import * as rds from 'react-dom/server';
import * as d from 'app/common/data';
import * as ex from 'app/common/exceptions';
import * as cfh from 'app/common/files/helpers';
import * as log from 'app/common/logging';
import * as mth from 'app/common/math';
import * as typesFills from 'app/common/types/fills';
import * as typesFillsImpl from 'app/common/types/fills/impl';
import * as path from 'app/common/types/path';
import * as pathImpl from 'app/common/types/path/impl';
import * as ctl from 'app/common/types/shape/layout';
import * as txt from 'app/common/types/text';
import * as uuid from 'app/common/uuid';
import * as cf from 'app/config';
import * as refs from 'app/main/refs';
import * as render from 'app/main/render';
import { state } from 'app/main/store';
import 'app/main/ui/shapes/text';
import * as mw from 'app/main/worker';
import * as f from 'app/render-wasm/api/fonts';
import * as shapes from 'app/render-wasm/api/shapes';
import * as t from 'app/render-wasm/api/texts';
import * as webgl from 'app/render-wasm/api/webgl';
import * as dr from 'app/render-wasm/deserializers';
import * as h from 'app/render-wasm/helpers';
import * as mem from 'app/render-wasm/mem';
import * as memH32 from 'app/render-wasm/mem/heap32';
import * as perf from 'app/render-wasm/performance';
import * as sr from 'app/render-wasm/serializers';
import * as srClr from 'app/render-wasm/serializers/color';
import * as svgFilters from 'app/render-wasm/svg-filters';
import * as textEditor from 'app/render-wasm/text-editor';
import * as wasm from 'app/render-wasm/wasm';
import * as dbg from 'app/util/debug';
import * as dom from 'app/util/dom';
import * as fns from 'app/util/functions';
import * as ug from 'app/util/globals';
import * as mod from 'app/util/modules';
import * as tc from 'app/util/text/content';
import * as rx from 'beicon.v2.core';
import * as str from 'cuerdas.core';
import * as p from 'promesa.core';
import React from 'react';

// Constants
const useDpr = cf.flags.includes('render-wasm-dpr');

const UUID_U8_SIZE = 16;
const UUID_U32_SIZE = UUID_U8_SIZE / 4;

const MODIFIER_U8_SIZE = 40;
const MODIFIER_U32_SIZE = MODIFIER_U8_SIZE / 4;
const MODIFIER_TRANSFORM_U8_OFFSET_SIZE = 16;
const INPUT_MODIFIER_U8_SIZE = 44;
const INPUT_MODIFIER_U32_SIZE = INPUT_MODIFIER_U8_SIZE / 4;

const GRID_LAYOUT_ROW_U8_SIZE = 8;
const GRID_LAYOUT_COLUMN_U8_SIZE = 8;
const GRID_LAYOUT_CELL_U8_SIZE = 36;

const MAX_BUFFER_CHUNK_SIZE = 256 * 1024;
const DEBOUNCE_DELAY_MS = 100;
const THROTTLE_DELAY_MS = 10;
const SHAPES_CHUNK_SIZE = 100;
const ASYNC_THRESHOLD = 100;

// Re-export WebGL functions
export const captureCanvasPixels = webgl.captureCanvasPixels;
export const restorePreviousCanvasPixels = webgl.restorePreviousCanvasPixels;
export const clearCanvasPixels = webgl.clearCanvasPixels;

// Re-export text editor functions
export const textEditorStart = textEditor.textEditorStart;
export const textEditorStop = textEditor.textEditorStop;
export const textEditorSetCursorFromPoint = textEditor.textEditorSetCursorFromPoint;
export const textEditorIsActive = textEditor.textEditorIsActive;
export const textEditorSyncContent = textEditor.textEditorSyncContent;

export const dpr = useDpr
  ? typeof window !== 'undefined' ? window.devicePixelRatio : 1.0
  : 1.0;

export const noopFn = () => null;

const yieldToBrowser = (): Promise<void> => {
  return new Promise((resolve) => {
    requestAnimationFrame(() => resolve(undefined));
  });
};

// Object SVG component
interface ObjectSvgProps {
  shape: any;
}

export const ObjectSvg: React.FC<ObjectSvgProps> = ({ shape }) => {
  const objects = refs.workspacePageObjects;
  const shapeWrapper = render.shapeWrapperFactory!(objects);

  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="none">
      {React.createElement(shapeWrapper, { shape })}
    </svg>
  );
};

export const getStaticMarkup = (shape: any): string => {
  return rds.renderToStaticMarkup(React.createElement(ObjectSvg, { shape }));
};

// Request render
export const requestRender = (): void => {
  if (wasm.contextInitialized && !wasm.contextLost) {
    h.call!(wasm.internalModule, '_render');
  }
};

// Set shape vertical align
export const setShapeVerticalAlign = (shape: any, align: any): void => {
  // Implementation
};

// Fonts from text content
export const fontsFromTextContent = (content: any): any => {
  // Implementation
  return [];
};

// Module initialization
export const init = (): void => {
  // WASM initialization
};

// Cleanup
export const destroy = (): void => {
  // Cleanup resources
};

export default {
  init,
  destroy,
  requestRender,
  captureCanvasPixels,
  restorePreviousCanvasPixels,
  clearCanvasPixels,
  textEditorStart,
  textEditorStop,
  textEditorSetCursorFromPoint,
  textEditorIsActive,
  textEditorSyncContent,
};