// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from '@app/common/data';
import * as pcb from '@app/common/files/changes-builder';
import * as cph from '@app/common/files/helpers';
import * as ctn from '@app/common/types/container';
import * as path from '@app/common/types/path';
import * as txt from '@app/common/types/text';
import * as dch from '@app/main/data/changes';
import * as dsh from '@app/main/data/helpers';
import * as features from '@app/main/features';
import * as wasmApi from '@app/render-wasm/api';
import * as rx from 'beicon/v2/core';
import * as ptk from 'potok/v2/core';

const dissocAttrs: string[] = [
  'x', 'y', 'width', 'height',
  'rx', 'ry', 'r1', 'r2', 'r3', 'r4',
  'metadata'
];

export interface ConvertSelectedToPathOptions {
  ids?: string[];
}

export function convertSelectedToPath(ids?: string[]): ptk.WatchEvent {
  return ptk.createReifyEvent('::convert-selected-to-path', (it: any, state: any, _: any) => {
    if (features.activeFeature(state, 'render-wasm/v1')) {
      const pageId = state.currentPageId;
      const objects = dsh.lookupPageObjects(state);
      const selected = (ids || dsh.lookupSelected(state))
        .filter((id: string) => !ctn.hasAnyCopyParent(objects, objects[id]));

      const childrenIds = new Set(
        selected.flatMap((id: string) => cph.getChildrenIds(objects, id))
      );

      const changes = pcb.emptyChanges(it, pageId)
        .withObjects(objects)
        .updateShapes(selected, (shape: any) => {
          const content = wasmApi.shapeToPath(shape.id);
          return d.withoutKeys(
            path.updateGeometry(
              shape.type === 'path' ? shape : Object.assign(
                { type: 'path' },
                shape,
                cph.textShape(shape) ? { fills: txt.nodeSeq(txt.isTextNode, shape.content).map((n: any) => n.fills)[0] } : {},
                cph.imageShape(shape) ? { fillImage: shape.metadata } : {}
              ),
              content
            ),
            dissocAttrs
          );
        })
        .removeObjects(childrenIds);

      return rx.of(dch.commitChanges(changes));
    } else {
      const pageId = state.currentPageId;
      const objects = dsh.lookupPageObjects(state);
      const selected = (ids || dsh.lookupSelected(state))
        .filter((id: string) => !ctn.hasAnyCopyParent(objects, objects[id]));

      const childrenIds = new Set(
        selected.flatMap((id: string) => cph.getChildrenIds(objects, id))
      );

      const changes = pcb.emptyChanges(it, pageId)
        .withObjects(objects)
        .updateShapes(selected, path.convertToPath, { withObjects: true })
        .removeObjects(childrenIds);

      return rx.of(dch.commitChanges(changes));
    }
  });
}
