// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from 'app/common/data';
import * as ctob from 'app/common/types/tokens-lib';
import * as refs from 'app/main/refs';
import { ColorForm } from 'app/main/ui/workspace/tokens/management/forms/color';
import { FontFamilyForm } from 'app/main/ui/workspace/tokens/management/forms/font_family';
import { GenericForm } from 'app/main/ui/workspace/tokens/management/forms/generic_form';
import { ShadowForm } from 'app/main/ui/workspace/tokens/management/forms/shadow';
import { TypographyForm } from 'app/main/ui/workspace/tokens/management/forms/typography';
import * as i18n from 'app/util/i18n';
import React, { useMemo } from 'react';

const { tr } = i18n;

interface FormContainerProps {
  token?: any;
  tokenType?: string;
  isCreate?: boolean;
  action?: string;
  selectedTokenSetId?: string;
  onDisplayColorpicker?: (visible: boolean) => void;
}

export const FormContainer: React.FC<FormContainerProps> = ({
  token,
  tokenType: tokenTypeProp,
  ...props
}) => {
  const tokenType = token?.type || tokenTypeProp;

  const tokensInSelectedSet = refs.workspaceAllTokensInSelectedSet || {};

  const tokenPath = useMemo(() => {
    return ctob.getTokenPath?.(token);
  }, [token]);

  const tokensTreeInSelectedSet = useMemo(() => {
    if (!tokenPath || !tokensInSelectedSet) return {};
    const tree = ctob.tokensTree?.(tokensInSelectedSet);
    return d.dissocIn?.(tree, tokenPath) || {};
  }, [tokenPath, tokensInSelectedSet]);

  const textCaseProps = {
    ...props,
    inputValuePlaceholder: tr('workspace.tokens.text-case-value-enter'),
  };

  const textDecorationProps = {
    ...props,
    inputValuePlaceholder: tr('workspace.tokens.text-decoration-value-enter'),
  };

  const fontWeightProps = {
    ...props,
    inputValuePlaceholder: tr('workspace.tokens.font-weight-value-enter'),
  };

  switch (tokenType) {
    case 'color':
      return <ColorForm token={token} tokenType={tokenType} {...props} />;
    case 'typography':
      return <TypographyForm token={token} tokenType={tokenType} {...props} />;
    case 'shadow':
      return <ShadowForm token={token} tokenType={tokenType} {...props} />;
    case 'font-family':
      return <FontFamilyForm token={token} tokenType={tokenType} {...props} />;
    case 'text-case':
      return <GenericForm token={token} tokenType={tokenType} {...textCaseProps} />;
    case 'text-decoration':
      return <GenericForm token={token} tokenType={tokenType} {...textDecorationProps} />;
    case 'font-weight':
      return <GenericForm token={token} tokenType={tokenType} {...fontWeightProps} />;
    default:
      return <GenericForm token={token} tokenType={tokenType} {...props} />;
  }
};
