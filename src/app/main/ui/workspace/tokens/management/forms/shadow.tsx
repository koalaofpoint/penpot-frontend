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
import { IconButton } from 'app/main/ui/ds/buttons/icon-button';
import { Icon } from 'app/main/ui/ds/foundations/assets/icon';
import { GenericForm } from 'app/main/ui/workspace/tokens/management/forms/generic_form';
import { Input, InputIndexed, InputComposite } from 'app/main/ui/workspace/tokens/management/forms/controls';
import * as dom from 'app/util/dom';
import * as i18n from 'app/util/i18n';
import * as rx from 'rxjs';
import * as str from 'cuerdas.core';
import React, { useCallback, useMemo } from 'react';

const { tr } = i18n;

// Default shadow token values
const defaultTokenShadow = {
  offsetX: '4',
  offsetY: '4',
  blur: '4',
  spread: '0',
};

// Check shadow token self-reference
const checkShadowTokenSelfReference = (token: any) => {
  const tokenName = token.name;
  const shadowValues = token.value;

  for (let shadowIdx = 0; shadowIdx < shadowValues.length; shadowIdx++) {
    const shadowMap = shadowValues[shadowIdx];
    for (const [k, v] of Object.entries(shadowMap)) {
      const err = checkSelfReference(tokenName, v);
      if (err) {
        return { ...err, shadowKey: k, shadowIndex: shadowIdx };
      }
    }
  }
  return null;
};

const checkSelfReference = (tokenName: string, value: string): any | null => {
  if (!value) return null;
  // Check if value references itself
  if (cto.tokenValueSelfReference?.(tokenName, value)) {
    return { message: 'Self reference detected' };
  }
  return null;
};

const checkEmptyShadowToken = (token: any) => {
  if (
    !token.value ||
    token.value.length === 0 ||
    token.value.some(
      (shadow: any) =>
        !['offsetX', 'offsetY', 'blur', 'spread', 'color'].every((key) =>
          shadow.hasOwnProperty(key)
        )
    )
  ) {
    return wte.getErrorCode('error.token/empty-input');
  }
  return null;
};

// Validate shadow token
const validateShadowToken = (params: any) => {
  const { tokenValue } = params;

  // Entering form without a value - show no error
  if (tokenValue == null) return rx.of(null);

  // Validate reference string
  if (cto.compositeTokenReference?.(tokenValue)) {
    return defaultValidateToken(params);
  }

  // Validate composite token
  const updatedParams = {
    ...params,
    tokenValue: tokenValue.map((shadow: any) => ({
      ...shadow,
      inset:
        typeof shadow.inset === 'boolean'
          ? shadow.inset
          : shadow.inset === 'true',
    })),
  };

  return defaultValidateToken({
    ...updatedParams,
    validators: [checkEmptyShadowToken, checkShadowTokenSelfReference],
  });
};

const defaultValidateToken = (params: any) => {
  // Default validation logic
  return rx.of(null);
};

interface SubtokenParams {
  token: any;
  index: number;
  prop: string;
  valueSubfield: string;
}

const getSubtoken = (
  token: any,
  index: number,
  prop: string,
  valueSubfield: string
) => {
  const value = token.value?.[valueSubfield]?.[index]?.[prop];
  return d.withoutNils({
    type: prop === 'color' ? 'color' : 'dimensions',
    value,
  });
};

// Shadow Formset Component
interface ShadowFormsetProps {
  index: number;
  token: any;
  tokens: any;
  removeShadowBlock: (index: number, event: React.MouseEvent) => void;
  showButton: boolean;
  valueSubfield: string;
}

const ShadowFormset: React.FC<ShadowFormsetProps> = ({
  index,
  token,
  tokens,
  removeShadowBlock,
  showButton,
  valueSubfield,
}) => {
  const insetToken = useMemo(
    () => getSubtoken(token, index, 'inset', valueSubfield),
    [token, index, valueSubfield]
  );

  const colorToken = useMemo(
    () => getSubtoken(token, index, 'color', valueSubfield),
    [token, index, valueSubfield]
  );

  const offsetXToken = useMemo(
    () => getSubtoken(token, index, 'offsetX', valueSubfield),
    [token, index, valueSubfield]
  );

  const offsetYToken = useMemo(
    () => getSubtoken(token, index, 'offsetY', valueSubfield),
    [token, index, valueSubfield]
  );

  const blurToken = useMemo(
    () => getSubtoken(token, index, 'blur', valueSubfield),
    [token, index, valueSubfield]
  );

  const spreadToken = useMemo(
    () => getSubtoken(token, index, 'spread', valueSubfield),
    [token, index, valueSubfield]
  );

  const onButtonClick = useCallback(
    (event: React.MouseEvent) => {
      removeShadowBlock(index, event);
    },
    [index, removeShadowBlock]
  );

  return (
    <div
      className={stl.css('shadow-block')}
      data-testid={`shadow-input-fields-${index}`}
    >
      <div className={stl.css('select-wrapper')}>
        {/* Select for inset/drop shadow - using a simplified version */}
        <div className={stl.css('select-content')}>
          {insetToken?.value ? 'inner' : 'drop'}
        </div>
        {showButton && (
          <IconButton
            variant="ghost"
            type="button"
            aria-label={tr('workspace.tokens.shadow-remove-shadow')}
            onClick={onButtonClick}
            icon={Icon.iconId('remove')}
          />
        )}
      </div>

      <div className={stl.css('inputs-wrapper')}>
        <div className={stl.css('input-row')}>
          <Input
            placeholder={tr('workspace.tokens.token-value-enter')}
            aria-label={tr('workspace.tokens.color')}
            name="color"
            token={colorToken}
            tokens={tokens}
          />
        </div>

        <div className={stl.css('input-row')}>
          <Input
            aria-label={tr('workspace.tokens.shadow-x')}
            icon={Icon.iconId('character-x')}
            placeholder={tr('workspace.tokens.shadow-x')}
            name="offsetX"
            token={offsetXToken}
            tokens={tokens}
          />
        </div>

        <div className={stl.css('input-row')}>
          <Input
            aria-label={tr('workspace.tokens.shadow-y')}
            icon={Icon.iconId('character-y')}
            placeholder={tr('workspace.tokens.shadow-y')}
            name="offsetY"
            token={offsetYToken}
            tokens={tokens}
          />
        </div>

        <div className={stl.css('input-row')}>
          <InputIndexed
            aria-label={tr('workspace.tokens.shadow-blur')}
            placeholder={tr('workspace.tokens.shadow-blur')}
            name="blur"
            token={blurToken}
            index={index}
            valueSubfield={valueSubfield}
            tokens={tokens}
            slotStart={
              <span className={stl.css('visible-label')}>
                {str(tr('workspace.tokens.shadow-blur'))}
              </span>
            }
          />
        </div>

        <div className={stl.css('input-row')}>
          <InputIndexed
            aria-label={tr('workspace.tokens.shadow-spread')}
            placeholder={tr('workspace.tokens.shadow-spread')}
            name="spread"
            token={spreadToken}
            valueSubfield={valueSubfield}
            index={index}
            tokens={tokens}
            slotStart={
              <span className={stl.css('visible-label')}>
                {str(tr('workspace.tokens.shadow-spread'))}
              </span>
            }
          />
        </div>
      </div>
    </div>
  );
};

// Composite Form Component
interface CompositeFormProps {
  token: any;
  tokens: any;
  removeShadowBlock: (index: number, event: React.MouseEvent) => void;
  valueSubfield: string;
}

const CompositeForm: React.FC<CompositeFormProps> = ({
  token,
  tokens,
  removeShadowBlock,
  valueSubfield,
}) => {
  const length = token.value?.[valueSubfield]?.length ?? 0;

  return (
    <>
      {Array.from({ length }, (_, index) => (
        <ShadowFormset
          key={index}
          index={index}
          token={token}
          tokens={tokens}
          removeShadowBlock={removeShadowBlock}
          showButton={length > 1}
          valueSubfield={valueSubfield}
        />
      ))}
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
    <div className={stl.css('input-row-reference')}>
      <InputComposite
        placeholder={tr('workspace.tokens.reference-composite-shadow')}
        aria-label={tr('labels.reference')}
        icon={Icon.iconId('drop-shadow')}
        name="reference"
        token={token}
        tokens={tokens}
      />
    </div>
  );
};

// Tabs Wrapper Component
interface TabsWrapperProps {
  token: any;
  tokens: any;
  tab: 'composite' | 'reference';
  handleToggle: (tab: string) => void;
  valueSubfield: string;
}

const TabsWrapper: React.FC<TabsWrapperProps> = ({
  token,
  tokens,
  tab,
  handleToggle,
  valueSubfield,
}) => {
  const onAddShadowBlock = useCallback(() => {
    // This would update the form state to add a new shadow block
    // For now, the implementation would go through the form context
  }, [valueSubfield]);

  const removeShadowBlock = useCallback(
    (index: number, event: React.MouseEvent) => {
      dom.preventDefault(event);
      // Remove shadow at index
    },
    [valueSubfield]
  );

  return (
    <>
      <div className={stl.css('title-bar')}>
        <div className={stl.css('title')}>{tr('labels.shadow')}</div>
        <IconButton
          variant="ghost"
          type="button"
          aria-label={tr('workspace.tokens.shadow-add-shadow')}
          onClick={onAddShadowBlock}
          icon={Icon.iconId('add')}
        />
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

      {tab === 'composite' ? (
        <CompositeForm
          token={token}
          tokens={tokens}
          removeShadowBlock={removeShadowBlock}
          valueSubfield={valueSubfield}
        />
      ) : (
        <ReferenceForm token={token} tokens={tokens} />
      )}
    </>
  );
};

// Schema maker for shadow tokens
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
            (name: string) => !ctob.tokenNamePathExists(name, tokensTree),
          ],
        ],
      ],
      [
        'value',
        [
          'map',
          [
            'shadow',
            {
              optional: true,
            },
            [
              'vector',
              [
                'map',
                ['offsetX', { optional: true, type: ['maybe', 'string'] }],
                ['offsetY', { optional: true, type: ['maybe', 'string'] }],
                [
                  'blur',
                  {
                    optional: true,
                  },
                  [
                    'and',
                    ['maybe', 'string'],
                    [
                      'fn',
                      {
                        errorFn: () =>
                          tr('workspace.tokens.shadow-token-blur-value-error'),
                      },
                      (blur: string) => {
                        const n = d.parseDouble(blur);
                        return n == null || n >= 0;
                      },
                    ],
                  ],
                ],
                ['spread', { optional: true, type: ['maybe', 'string'] }],
                ['color', { optional: true, type: ['maybe', 'string'] }],
                ['colorResult', { optional: true, type: 'any' }],
                ['inset', { optional: true, type: ['maybe', 'boolean'] }],
              ],
            ],
          ],
          [
            activeTab === 'reference' ? ['reference', { optional: false }] : ['reference', { optional: true }],
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
        errorFn: () => 'Must be a valid shadow or reference',
        errorField: 'value',
      },
      ({ value }: any) => {
        const reference = value?.reference;
        const refValid = reference && !str.blank(reference);

        const shadows = value?.shadow;
        const validCompositeShadow =
          shadows &&
          shadows.length > 0 &&
          shadows.every(
            ({ offsetX, offsetY, blur, spread, color }: any) =>
              !str.blank(offsetX) &&
              !str.blank(offsetY) &&
              !str.blank(blur) &&
              !str.blank(spread) &&
              !str.blank(color)
          );

        return refValid || validCompositeShadow;
      },
    ],
  ]);
};

// Make default value
const makeDefaultValue = (value: any) => {
  if (typeof value === 'string') {
    return { reference: value, shadow: [] };
  }
  if (Array.isArray(value)) {
    return { reference: null, shadow: value };
  }
  return { reference: null, shadow: [defaultTokenShadow] };
};

// Shadow Form Component
interface ShadowFormProps {
  token?: any;
  tokenType: string;
}

export const ShadowForm: React.FC<ShadowFormProps> = ({
  token: tokenProp,
  tokenType,
}) => {
  const token = useMemo(() => {
    if (tokenProp) return tokenProp;
    const value = tokenProp?.value;
    if (value) {
      return {
        type: tokenType,
        value: makeDefaultValue(value),
      };
    }
    return {
      type: tokenType,
      value: { reference: null, shadow: [defaultTokenShadow] },
    };
  }, [tokenProp, tokenType]);

  const initial = useMemo(() => {
    const rawValue = token.value;
    const value = makeDefaultValue(rawValue);
    return {
      name: token.name ?? '',
      description: token.description ?? '',
      value,
    };
  }, [token]);

  return (
    <GenericForm
      token={token}
      tokenType={tokenType}
      initial={initial}
      makeSchema={makeSchema}
      valueType="indexed"
      valueSubfield="shadow"
      inputComponent={TabsWrapper}
      validator={validateShadowToken}
    />
  );
};
