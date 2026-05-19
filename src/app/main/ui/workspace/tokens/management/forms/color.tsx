// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as cfo from 'app/common/files/tokens';
import * as sm from 'app/common/schema';
import * as tokenControls from 'app/main/ui/workspace/tokens/management/forms/controls';
import { GenericForm } from 'app/main/ui/workspace/tokens/management/forms/generic-form';
import React, { useMemo } from 'react';

interface FormProps {
  token?: any;
  tokenType: string;
}

export const ColorForm: React.FC<FormProps> = ({ token, tokenType }) => {
  const initial = useMemo(
    () => ({
      type: tokenType,
      name: token?.name || '',
      value: token?.value || '',
      description: token?.description || '',
      colorResult: '',
    }),
    [tokenType, token]
  );

  const makeSchema = (tokenType: string) => {
    const schema = cfo.makeTokenSchema(tokenType, tokenType);
    return sm.dissocKey(schema, 'id');
  };

  return (
    <GenericForm
      token={token}
      tokenType={tokenType}
      initial={initial}
      makeSchema={makeSchema}
      inputComponent={tokenControls.ColorInput}
    />
  );
};
