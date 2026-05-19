// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as cfo from 'app/common/files/tokens';
import * as sm from 'app/common/schema';
import * as cto from 'app/common/types/token';
import { GenericForm } from 'app/main/ui/workspace/tokens/management/forms/generic_form';
import { checkCollSelfReference, defaultValidateToken } from 'app/main/ui/workspace/tokens/management/forms/validators';
import React, { useMemo } from 'react';

interface FontFamilyFormProps {
  token?: any;
  tokenType: string;
}

// Check font family token self-reference
const checkFontFamilyTokenSelfReference = (token: { name: string; value: any }) => {
  return checkCollSelfReference(token.name, [token.value]);
};

// Validate font family token
const validateFontFamilyToken = (props: any) => {
  const updatedProps = {
    ...props,
    tokenValue: cto.splitFontFamily?.(props.tokenValue) || props.tokenValue,
  };

  return defaultValidateToken({
    ...updatedProps,
    validators: [
      (token: { value: any }) => {
        if (!token.value || token.value.length === 0) {
          return { error: 'empty-input' };
        }
        return null;
      },
      checkFontFamilyTokenSelfReference,
    ],
  });
};

export const FontFamilyForm: React.FC<FontFamilyFormProps> = ({
  token: tokenProp,
  tokenType,
}) => {
  const token = useMemo(() => {
    if (tokenProp) {
      return {
        ...tokenProp,
        value: cto.joinFontFamily?.(tokenProp.value) || tokenProp.value,
      };
    }
    return { type: tokenType };
  }, [tokenProp]);

  const makeSchema = (tokensTree: any, activeTab: string) => {
    const baseSchema = cfo.makeTokenSchema(tokensTree, tokenType);
    return sm.dissocKey(baseSchema, 'id');
  };

  return (
    <GenericForm
      token={token}
      tokenType={tokenType}
      makeSchema={makeSchema}
      validator={validateFontFamilyToken}
      inputComponent={null as any} // Will use default input component
    />
  );
};
