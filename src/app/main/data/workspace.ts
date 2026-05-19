// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as attrs from 'app.common.attrs';
import * as d from 'app.common.data';
import * as dm from 'app.common.data.macros';
import * as pcb from 'app.common.files.changes-builder';
import * as cfh from 'app.common.files.helpers';
import * as cfv from 'app.common.files.variant';
import * as gal from 'app.common.geom.align';
import * as gpt from 'app.common.geom.point';
import * as gpp from 'app.common.geom.proportions';
import * as gsh from 'app.common.geom.shapes';
import * as log from 'app.common.logging';
import * as cpn from 'app.common.path-names';
import * as t from 'app.common.transit';
import * as ctc from 'app.common.types.component';
import * as ctkl from 'app.common.types.components-list';
import * as cts from 'app.common.types.shape';
import * as ctv from 'app.common.types.variant';
import * as uuid from 'app.common.uuid';
import * as cf from 'app.config';
import * as dch from 'app.main.data.changes';
import * as dcmt from 'app.main.data.comments';
import * as dcm from 'app.main.data.common';
import * as ev from 'app.main.data.event';
import * as df from 'app.main.data.fonts';
import * as dsh from 'app.main.data.helpers';
import * as modal from 'app.main.data.modal';
import * as ntf from 'app.main.data.notifications';
import * as dps from 'app.main.data.persistence';
import * as dp from 'app.main.data.plugins';
import * as du from 'app.main.data.profile';
import * as dpj from 'app.main.data.project';
import * as dwb from 'app.main.data.workspace.bool';
import * as dwcp from 'app.main.data.workspace.clipboard';
import * as dwcl from 'app.main.data.workspace.colors';
import * as dwcm from 'app.main.data.workspace.comments';
import * as dwc from 'app.main.data.workspace.common';
import * as dwd from 'app.main.data.workspace.drawing';
import * as dwe from 'app.main.data.workspace.edition';
import * as fdf from 'app.main.data.workspace.fix-deleted-fonts';
import * as dwg from 'app.main.data.workspace.groups';
import * as dwgu from 'app.main.data.workspace.guides';
import * as dwh from 'app.main.data.workspace.highlight';
import * as dwi from 'app.main.data.workspace.interactions';
import * as dwly from 'app.main.data.workspace.layers';
import * as layout from 'app.main.data.workspace.layout';
import * as dwl from 'app.main.data.workspace.libraries';
import * as dwn from 'app.main.data.workspace.notifications';
import * as dwpg from 'app.main.data.workspace.pages';
import * as dwdp from 'app.main.data.workspace.path';
import * as dwps from 'app.main.data.workspace.path.shapes-to-path';
import * as dws from 'app.main.data.workspace.selection';
import * as dwsl from 'app.main.data.workspace.shape-layout';
import * as dwsh from 'app.main.data.workspace.shapes';
import * as dwth from 'app.main.data.workspace.thumbnails';
import * as dwt from 'app.main.data.workspace.transforms';
import * as dwu from 'app.main.data.workspace.undo';
import * as dwva from 'app.main.data.workspace.variants';
import * as dwv from 'app.main.data.workspace.viewport';
import * as dwz from 'app.main.data.workspace.zoom';
import * as app_main_errors from 'app.main.errors';
import * as features from 'app.main.features';
import * as fpmap from 'app.main.features.pointer-map';
import * as refs from 'app.main.refs';
import * as rp from 'app.main.repo';
import * as rt from 'app.main.router';
import * as wasm from 'app.render-wasm';
import * as wasm_api from 'app.render-wasm.api';
import * as dom from 'app.util.dom';
import * as ug from 'app.util.globals';
import * as http from 'app.util.http';
import * as perf from 'app.util.perf';
import * as storage from 'app.util.storage';
import * as tm from 'app.util.timers';
import * as wapi from 'app.util.webapi';
import * as rx from 'beicon.v2.core';
import * as str from 'cuerdas.core';
import * as ptk from 'potok.v2.core';

log.set_level('info');

declare function workspace_initialized(): ptk.PtkEvent;
declare function fetch_libraries(): ptk.PtkEvent;

// --- Initialize Workspace

export function initialize_workspace_layout(lname: string) {
  return ptk.reify('initialize-layout', class implements ptk.UpdateEvent {
    update(state: any): any {
      const layout_key = `workspace-layout:${lname}`;
      const layout_state = storage.get(layout_key);

      return {
        ...state,
        workspace_layout: {
          ...state.workspace_layout,
          [lname]: {
            ...(layout_state || {}),
            ...state.workspace_layout[lname]
          }
        }
      };
    }
  });
}