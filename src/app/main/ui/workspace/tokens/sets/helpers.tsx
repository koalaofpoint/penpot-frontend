// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as cfo from 'app/common/files/tokens';
import * as sm from 'app/common/schema';
import * as ctob from 'app/common/types/tokens-lib';
import * as ev from 'app/main/data/event';
import * as ntf from 'app/main/data/notifications';
import * as dwtl from 'app/main/data/workspace/tokens/library-edit';
import { emit } from 'app/main/store';
import * as i18n from 'app/util/i18n';
import * as ptk from 'potok.v2.core';

const { tr } = i18n;

export const onUpdateTokenSet = (tokensLib: any, tokenSet: any, name: string) => {
  const normalizedName = ctob.normalizeSetName(name, ctob.getName(tokenSet));
  const errors = sm.validationErrors(
    normalizedName,
    cfo.makeTokenSetNameSchema(tokensLib, ctob.getId(tokenSet))
  );

  emit(dwtl.clearTokenSetEdition());

  if (errors.length === 0) {
    emit(dwtl.renameTokenSet(tokenSet, normalizedName));
  } else {
    emit(
      ntf.show({
        content: tr('errors.token-set-already-exists'),
        type: 'toast',
        level: 'error',
        timeout: 9000,
      })
    );
  }
};

export const onUpdateTokenSetGroup = (path: string[], name: string) => {
  emit(dwtl.clearTokenSetEdition(), dwtl.renameTokenSetGroup(path, name));
};

export const onCreateTokenSet = (tokensLib: any, parentSet: any, name: string) => {
  const newName = ctob.makeChildName(parentSet, name);
  const errors = sm.validationErrors(
    newName,
    cfo.makeTokenSetNameSchema(tokensLib, null)
  );

  emit(
    ptk.dataEvent(ev.event, {
      name: ev.name,
      eventName: 'create-token-set',
      name: newName,
    }),
    dwtl.clearTokenSetCreation()
  );

  if (errors.length === 0) {
    const tokenSet = ctob.makeTokenSet({ name: newName });
    emit(dwtl.createTokenSet(tokenSet));
  } else {
    emit(
      ntf.show({
        content: tr('errors.token-set-already-exists'),
        type: 'toast',
        level: 'error',
        timeout: 9000,
      })
    );
  }
};
