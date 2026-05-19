// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useCallback, useMemo, useContext } from 'react';
import { select as selectComp } from '@app/main/ui/ds/controls/select';
import { formContext } from '@app/main/ui/forms';

interface SelectIndexedProps {
  name: string;
  index: number;
  indexedType: string;
  [key: string]: any;
}

export const SelectIndexed: React.FC<SelectIndexedProps> = ({ name, index, indexedType, ...props }) => {
  const form = useContext(formContext);
  const inputName = name;

  const value = form?.data?.value?.[indexedType]?.[index]?.[inputName] ?? false;

  const onChange = useCallback(
    (id: string) => {
      const isInner = id === 'inner';
      if (form) {
        form.dispatch({
          type: 'SET_FIELD',
          path: ['data', 'value', indexedType, index, inputName],
          value: isInner
        });
      }
    },
    [form, indexedType, index, inputName]
  );

  const mergedProps = useMemo(() => ({
    ...props,
    defaultSelected: value ? 'inner' : 'drop',
    variant: 'ghost',
    onChange
  }), [props, value, onChange]);

  return React.createElement(selectComp, mergedProps);
};
