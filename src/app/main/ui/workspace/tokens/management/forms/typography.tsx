// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as stl from 'app/main/style';
import * as d from 'app/common/data';
import * as sm from 'app/common/schema';
import * as cto from 'app/common/types/token';
import * as ctob from 'app/common/types/tokens-lib';
import * as wte from 'app/main/data/workspace/tokens/errors';
import { RadioButton, RadioButtons } from 'app/main/ui/components/radio-buttons';
import { Icon } from 'app/main/ui/ds/foundations/assets/icon';
import { GenericForm } from 'app/main/ui/workspace/tokens/management/forms/generic_form';
import {
  checkCollSelfReference,
  checkSelfReference,
  defaultValidateToken,
} from 'app/main/ui/workspace/tokens/management/forms/validators';
import * as i18n from 'app/util/i18n';
import * as rx from 'rxjs';
import * as str from 'cuerdas.core';
import React, { useMemo } from 'react';

const { tr } = i18n;

// Check typography token self-reference
const checkTypographyTokenSelfReference = (token: { name: string; value: any }) => {
  const tokenName = token.name;
  const tokenValues = token.value;

  if (!tokenValues) return null;

  for (const [k, v] of Object.entries(tokenValues)) {
    let err: any = null;
    if (k === 'font-family') {
      err = checkCollSelfReference(tokenName, [v as string]);
    } else {
      err = checkSelfReference(tokenName, v as string);
    }
    if (err) {
      return { ...err, typographyKey: k };
    }
  }
  return null;
};

// Check empty typography token
const checkEmptyTypographyToken = (token: { value: any }) => {
  if (!token.value || Object.keys(token.value).length === 0) {
    return wte.getErrorCode('error.token/empty-input');
  }
  return null;
};

// Validate typography token
const validateTypographyToken = (props: any) => {
  const { tokenValue } = props;

  // Entering form without a value - show no error just resolve nil
  if (tokenValue == null) return rx.of(null);

  // Validate reference string
  if (cto.compositeTokenReference?.(tokenValue)) {
    return defaultValidateToken(props);
  }

  // Validate composite token
  const updatedProps = {
    ...props,
    tokenValue: tokenValue
      ? {
          ...tokenValue,
          fontFamily:
            typeof tokenValue.fontFamily === 'string'
              ? cto.splitFontFamily?.(tokenValue.fontFamily)
              : tokenValue.fontFamily,
        }
      : {},
  };

  return defaultValidateToken({
    ...updatedProps,
    validators: [checkEmptyTypographyToken, checkTypographyTokenSelfReference],
  });
};

// Composite Form Component
interface CompositeFormProps {
  token: any;
  tokens: any;
}

const CompositeForm: React.FC<CompositeFormProps> = ({ token, tokens }) => {
  const letterSpacingSubToken = useMemo(() => {
    const value = token?.value;
    if (value) {
      return {
        type: 'letter-spacing',
        value: cto.joinFontFamily?.(value.letterSpacing),
      };
    }
    return { type: 'letter-spacing' };
  }, [token]);

  const fontFamilySubToken = useMemo(() => {
    const value = token?.value;
    if (value) {
      return {
        type: 'font-family',
        value: value.fontFamily,
      };
    }
    return { type: 'font-family' };
  }, [token]);

  const fontSizeSubToken = useMemo(() => {
    const value = token?.value;
    if (value) {
      return {
        type: 'font-size',
        value: value.fontSize,
      };
    }
    return { type: 'font-size' };
  }, [token]);

  const fontWeightSubToken = useMemo(() => {
    const value = token?.value;
    if (value) {
      return {
        type: 'font-weight',
        value: value.fontWeight,
      };
    }
    return { type: 'font-weight' };
  }, [token]);

  const lineHeightSubToken = useMemo(() => {
    const value = token?.value;
    if (value) {
      return {
        type: 'dimensions',
        value: value.lineHeight,
      };
    }
    return { type: 'dimensions' };
  }, [token]);

  const textCaseSubToken = useMemo(() => {
    const value = token?.value;
    if (value) {
      return {
        type: 'text-case',
        value: value.textCase,
      };
    }
    return { type: 'text-case' };
  }, [token]);

  const textDecorationSubToken = useMemo(() => {
    const value = token?.value;
    if (value) {
      return {
        type: 'text-decoration',
        value: value.textDecoration,
      };
    }
    return { type: 'text-decoration' };
  }, [token]);

  return (
    <>
      <div className={stl.css('input-row')}>
        {/* Font Family Combobox */}
        <div>{/* CompositeFontsCombobox would go here */}</div>
      </div>
      <div className={stl.css('input-row')}>
        {/* Font Size Input */}
      </div>
      <div className={stl.css('input-row')}>
        {/* Font Weight Input */}
      </div>
      <div className={stl.css('input-row')}>
        {/* Line Height Input */}
      </div>
      <div className={stl.css('input-row')}>
        {/* Letter Spacing Input */}
      </div>
      <div className={stl.css('input-row')}>
        {/* Text Case Input */}
      </div>
      <div className={stl.css('input-row')}>
        {/* Text Decoration Input */}
      </div>
    </>
  );
};

// Reference Form Component
interface ReferenceFormProps {
  token: any;
  tokens: any;
}

const ReferenceForm: React.FC<ReferenceFormProps> = ({ token, tokens }) => {
  return (
    <div className={stl.css('input-row')}>
      {/* Input composite for reference */}
    </div>
  );
};

// Tabs Wrapper Component
interface TabsWrapperProps {
  token: any;
  tokens: any;
  tab: 'composite' | 'reference';
  handleToggle: (tab: string) => void;
}

const TabsWrapper: React.FC<TabsWrapperProps> = ({
  token,
  tokens,
  tab,
  handleToggle,
}) => {
  return (
    <>
      <div className={stl.css('title-bar')}>
        <div className={stl.css('title')}>{tr('labels.typography')}</div>
        <RadioButtons
          className={stl.css('listing-options')}
          selected={tab}
          onChange={handleToggle}
          name="reference-composite-tab"
        >
          <RadioButton
            icon={Icon.iconId('layers')}
            value="composite"
            title={tr('workspace.tokens.individual-tokens')}
            id="composite-opt"
          />
          <RadioButton
            icon={Icon.iconId('tokens')}
            value="reference"
            title={tr('workspace.tokens.use-reference')}
            id="reference-opt"
          />
        </RadioButtons>
      </div>
      <div className={stl.css('inputs-wrapper')}>
        {tab === 'composite' ? (
          <CompositeForm token={token} tokens={tokens} />
        ) : (
          <ReferenceForm token={token} tokens={tokens} />
        )}
      </div>
    </>
  );
};

// Schema maker
const makeSchema = (tokensTree: any, activeTab: string) => {
  return sm.schema([
    'and',
    [
      'map',
      [
        'name',
        [
          'and',
          [
            'string',
            {
              min: 1,
              max: 255,
              errorFn: (value: any) =>
                str(value) + tr('workspace.tokens.token-name-length-validation-error'),
            },
          ],
          [
            sm.updateProperties,
            cto.schemaTokenName,
            'assoc',
            {
              errorFn: (value: any) =>
                str(value) + tr('workspace.tokens.token-name-validation-error'),
            },
          ],
          [
            'fn',
            {
              errorFn: (value: any) =>
                tr('workspace.tokens.token-name-duplication-validation-error', value),
            },
            (name: string) => !ctob.tokenNamePathExists?.(name, tokensTree),
          ],
        ],
      ],
      [
        'value',
        [
          'map',
          ['font-family', { optional: true, type: ['maybe', 'string'] }],
          ['font-size', { optional: true, type: ['maybe', 'string'] }],
          ['font-weight', { optional: true, type: ['maybe', 'string'] }],
          ['line-height', { optional: true, type: ['maybe', 'string'] }],
          ['letter-spacing', { optional: true, type: ['maybe', 'string'] }],
          ['text-case', { optional: true, type: ['maybe', 'string'] }],
          ['text-decoration', { optional: true, type: ['maybe', 'string'] }],
          [
            activeTab === 'reference'
              ? ['reference', { optional: false }]
              : ['reference', { optional: true }],
            ['maybe', 'string'],
          ],
        ],
      ],
      [
        'description',
        { optional: true },
        [
          'string',
          {
            max: 2048,
            errorFn: (value: any) => tr('errors.field-max-length', 2048),
          },
        ],
      ],
    ],
    [
      'fn',
      {
        errorField: ['value', 'reference'],
        errorFn: () => tr('workspace.tokens.self-reference'),
      },
      ({ name, value }: any) => {
        const reference = value?.reference;
        if (reference && name) {
          return !cto.tokenValueSelfReference?.(name, reference);
        }
        return true;
      },
    ],
    [
      'fn',
      {
        errorField: ['value', 'line-height'],
        errorFn: () => tr('workspace.tokens.composite-line-height-needs-font-size'),
      },
      ({ value }: any) => {
        const lineHeight = value?.lineHeight;
        const fontSize = value?.fontSize;
        if (lineHeight && !fontSize) {
          return false;
        }
        return true;
      },
    ],
    [
      'fn',
      {
        errorFn: () => 'At least one composite field must be set',
        errorField: 'value',
      },
      (attrs: any) => {
        const values = attrs?.value || {};
        return Object.values(values).some((v) => !str.empty(v as string));
      },
    ],
  ]);
};

// Typography Form Component
interface TypographyFormProps {
  token?: any;
}

export const TypographyForm: React.FC<TypographyFormProps> = ({ token: tokenProp }) => {
  const initial = useMemo(() => {
    const value = tokenProp?.value;
    let processedValue: any = {};

    if (typeof value === 'string') {
      processedValue = { reference: value };
    } else if (value && typeof value === 'object') {
      processedValue = {
        ...value,
        ...(value.fontFamily && {
          fontFamily: cto.joinFontFamily?.(value.fontFamily) || value.fontFamily,
        }),
      };
      processedValue = {
        fontFamily: processedValue.fontFamily,
        fontSize: processedValue.fontSize,
        fontWeight: processedValue.fontWeight,
        lineHeight: processedValue.lineHeight,
        letterSpacing: processedValue.letterSpacing,
        textCase: processedValue.textCase,
        textDecoration: processedValue.textDecoration,
      };
    }

    return {
      name: tokenProp?.name || '',
      value: processedValue,
      description: tokenProp?.description || '',
    };
  }, [tokenProp]);

  return (
    <GenericForm
      token={tokenProp}
      initial={initial}
      makeSchema={makeSchema}
      token={tokenProp}
      validator={validateTypographyToken}
      valueType="composite"
      inputComponent={TabsWrapper}
    />
  );
};
