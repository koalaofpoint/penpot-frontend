// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// Drawing interactions.

import * as dm from 'app.common.data.macros';
import * as mth from 'app.common.math';
import * as uuid from 'app.common.uuid';
import * as dwc from 'app.main.data.workspace.common';
import * as box from 'app.main.data.workspace.drawing.box';
import * as common from 'app.main.data.workspace.drawing.common';
import * as curve from 'app.main.data.workspace.drawing.curve';
import * as path from 'app.main.data.workspace.path';
import * as rx from 'beicon.v2.core';
import * as ptk from 'potok.v2.core';

declare function startDrawing(type: string): ptk.PtkEvent;
declare function handleDrawing(type: string): ptk.PtkEvent;

// --- Select for Drawing

export function selectForDrawing(tool: string) {
  dm.assert!(typeof tool === 'string', "Tool must be a string");

  return ptk.reify('select-for-drawing', class implements ptk.UpdateEvent, ptk.WatchEvent {
    update(state: any): any {
      const workspace_layout = tool === 'comments'
        ? state.workspace_layout.delete('document-history')
        : state.workspace_layout;

      return state
        .update('workspace-layout', () => workspace_layout)
        .update('workspace-drawing', (drawing: any) => ({
          ...drawing,
          tool
        }))
        .update('workspace-layout', (layout: any) => layout.delete('scale-text'));
    }

    async watch(_state: any, _dispatch: any, stream: any) {
      return rx.merge(
        tool === 'path'
          ? rx.of(startDrawing('path'))
          : rx.empty(),

        tool === 'curve'
          ? rx.from(stream)
            .pipe(
              rx.filter(dwc.interrupt_),
              rx.map(() => tool),
              rx.take(1),
              rx(observe_on('async')),
              rx.map(selectForDrawing),
              rx(take_until(rx.from(stream).filter(dwc.interrupt_)))
            )
          : rx.empty(),

        (tool !== 'comments' && tool !== 'path')
          ? rx.from(stream)
            .pipe(
              rx.filter(ptk.type_checker('clear-drawing')),
              rx(take_until(rx.from(stream).filter(dwc.interrupt_))),
              rx.map(common.clearDrawing),
              rx(take_until(rx.from(stream).filter(dwc.interrupt_)))
            )
          : rx.empty()
      );
    }
  });
}

// NOTE/TODO: when an exception is raised in some point of drawing the
// draw lock is not released so the user need to refresh in order to
// be able draw again. THIS NEED TO BE REVISITED

export function startDrawing(type: string) {
  dm.assert!(typeof type === 'string', "Type must be a string");

  const lockId = uuid.next();
  return ptk.reify('start-drawing', class implements ptk.UpdateEvent, ptk.WatchEvent {
    update(state: any): any {
      const lock = state.workspace_drawing?.lock;
      return state.update_in(['workspace-drawing', 'lock'], (current: any) => current || lockId);
    }

    async watch(state: any, _dispatch: any, stream: any) {
      const lock = state.workspace_drawing?.lock;
      if (lock !== lockId) return rx.empty();

      return rx.merge(
        rx.of(handleDrawing(type)),
        rx.from(stream)
          .pipe(
            rx.filter(ptk.type_checker('handle-finish-drawing')),
            rx.take(1),
            rx.map(() => (state: any) => state.update('workspace-drawing', (drawing: any) => {
              const {lock: _, ...rest} = drawing;
              return rest;
            }))
          )
      );
    }
  });
}

export function handleDrawing(type: string) {
  return ptk.reify('handle-drawing', class implements ptk.WatchEvent {
    async watch(_state: any, _dispatch: any, _ctx: any) {
      return rx.of(
        type === 'path' ? path.handleDrawing :
        type === 'rect' ? box.handleRectDrawing :
        type === 'circle' ? box.handleCircleDrawing :
        type === 'curve' ? curve.handleCurveDrawing :
        null
      );
    }
  });
}