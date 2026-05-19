// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as stl from 'app/main/style';
import * as d from 'app/common/data';
import * as cfo from 'app/common/files/tokens';
import * as sm from 'app/common/schema';
import * as ctob from 'app/common/types/tokens-lib';
import { maxInputLength } from 'app/main/constants';
import * as dh from 'app/main/data/helpers';
import * as modal from 'app/main/data/modal';
import * as dwta from 'app/main/data/workspace/tokens/application';
import * as wte from 'app/main/data/workspace/tokens/errors';
import * as dwtl from 'app/main/data/workspace/tokens/library-edit';
import * as dwtp from 'app/main/data/workspace/tokens/propagation';
import * as remap from 'app/main/data/workspace/tokens/remapping';
import * as refs from 'app/main/refs';
import { emit, store } from 'app/main/store';
import { Button } from 'app/main/ui/ds/buttons/button';
import { Icon } from 'app/main/ui/ds/foundations/assets/icon';
import { Heading } from 'app/main/ui/ds/foundations/typography/heading';
import * as fc from 'app/main/ui/forms';
import { Input } from 'app/main/ui/workspace/tokens/management/forms/controls';
import { defaultValidateToken } from 'app/main/ui/workspace/tokens/management/forms/validators';
import * as dom from 'app/util/dom';
import * as i18n from 'app/util/i18n';
import * as keyboard from 'app/util/keyboard';
import * as rx from 'rxjs';
import * as str from 'cuerdas.core';
import React, { useCallback, useMemo, useState } from 'react';

const { tr } = i18n;

interface GenericFormProps {
  token?: any;
  validator?: typeof defaultValidateToken;
  action?: string;
  isCreate?: boolean;
  selectedTokenSetId?: string;
  tokensTreeInSelectedSet?: any;
  tokenType: string;
  makeSchema?: (tokensTree: any, activeTab: string) => any;
  inputComponent?: React.FC<any>;
  initial?: any;
  valueType?: 'indexed' | 'composite' | 'simple';
  valueSubfield?: string;
  inputValuePlaceholder?: string;
}

const getValueForValidator = (
  activeTab: string,
  value: any,
  valueSubfield: string | undefined,
  valueType: string | undefined
) => {
  switch (valueType) {
    case 'indexed':
      if (activeTab === 'reference') {
        return value?.reference;
      }
      return valueSubfield ? value?.[valueSubfield] : value;

    case 'composite':
      if (activeTab === 'reference') {
        return value?.reference;
      }
      return value;

    default:
      return value;
  }
};

export const GenericForm: React.FC<GenericFormProps> = ({
  token: tokenProp,
  validator,
  action = 'edit',
  isCreate = false,
  selectedTokenSetId,
  tokensTreeInSelectedSet,
  tokenType,
  makeSchema: makeSchemaProp,
  inputComponent: InputComponent,
  initial: initialProp,
  valueType = 'simple',
  valueSubfield,
  inputValuePlaceholder,
}) => {
  const makeSchema = makeSchemaProp || ((tree: any) => cfo.makeTokenSchema(tree, tokenType));
  const validateToken = validator || defaultValidateToken;
  const InputComponentFinal = InputComponent || Input;

  const [activeTab, setActiveTab] = useState(() =>
    cfo.isReference?.(tokenProp) ? 'reference' : 'composite'
  );

  const token = useMemo(() => {
    return tokenProp || { type: tokenType };
  }, [tokenProp, tokenType]);

  const tokenProperties = dwta.getTokenProperties(token);

  const tokenTitle = str.lower(tokenProperties?.title || '');

  const tokens = refs.workspaceAllTokensMap || {};
  const tokensInSelectedSet = refs.workspaceAllTokensInSelectedSet || {};

  const mergedTokens = useMemo(() => {
    const base = { ...tokens, ...tokensInSelectedSet };
    if (token.name && token.value) {
      return { ...base, [token.name]: token };
    }
    return base;
  }, [tokens, tokensInSelectedSet, token]);

  const schema = useMemo(() => {
    return makeSchema(tokensTreeInSelectedSet || {}, activeTab);
  }, [makeSchema, tokensTreeInSelectedSet, activeTab]);

  const initial = useMemo(() => {
    if (initialProp) return initialProp;
    return {
      type: tokenType,
      name: token.name || '',
      value: token.value || '',
      description: token.description || '',
    };
  }, [initialProp, tokenType, token]);

  const onToggleTab = useCallback(
    (newTab: string) => {
      const tab = newTab as 'reference' | 'composite';
      setActiveTab(tab);
    },
    []
  );

  const onCancel = useCallback(
    (e: React.MouseEvent) => {
      dom.preventDefault(e);
      modal.hide();
    },
    []
  );

  const onDeleteToken = useCallback(
    (e: React.MouseEvent) => {
      dom.preventDefault(e);
      modal.hide();
      emit(dwtl.deleteToken(selectedTokenSetId, token.id));
    },
    [selectedTokenSetId, token]
  );

  const handleKeyDownDelete = useCallback(
    (e: React.KeyboardEvent) => {
      if (keyboard.enter(e) || keyboard.space(e)) {
        onDeleteToken(e as unknown as React.MouseEvent);
      }
    },
    [onDeleteToken]
  );

  const handleKeyDownCancel = useCallback(
    (e: React.KeyboardEvent) => {
      if (keyboard.enter(e) || keyboard.space(e)) {
        onCancel(e as unknown as React.MouseEvent);
      }
    },
    [onCancel]
  );

  const onRemapToken = useCallback(
    (validToken: any, name: string, oldName: string, description: string) => {
      emit(
        dwtl.updateToken(token.id, {
          name,
          value: validToken.value,
          description,
        }),
        remap.remapTokens(oldName, name),
        dwtp.propagateWorkspaceTokens(),
        modal.hide()
      );
    },
    [token]
  );

  const onRenameToken = useCallback(
    (validToken: any, name: string, description: string) => {
      emit(
        dwtl.updateToken(token.id, {
          name,
          value: validToken.value,
          description,
        }),
        modal.hide()
      );
    },
    [token]
  );

  const onSubmit = useCallback(
    (formState: any, _event: any) => {
      const name = formState.cleanData?.name;
      const path = str(d.name(tokenType), '.', name);
      const description = formState.cleanData?.description;
      const value = formState.cleanData?.value;
      const valueForValidation = getValueForValidator(
        activeTab,
        value,
        valueSubfield,
        valueType
      );

      validateToken({
        tokenValue: valueForValidation,
        tokenName: name,
        tokenDescription: description,
        prevToken: token,
        tokens: mergedTokens,
      }).subscribe({
        next: (validToken) => {
          const state = store.getState();
          const fileData = dh.lookupFileData(state);
          const oldName = token.name;
          const isRename = action === 'edit' && name !== oldName;
          const referencesCount = remap.countTokenReferences(fileData, oldName);
          const onRemap = () => onRemapToken(validToken, name, oldName, description);
          const onRename = () => onRenameToken(validToken, name, description);

          if (isRename && referencesCount > 0) {
            emit(
              modal.show('tokens/remapping-confirmation', {
                oldTokenName: oldName,
                newTokenName: name,
                referencesCount,
                onRemap,
                onRename,
              })
            );
          } else {
            emit(
              isCreate
                ? dwtl.createToken(
                    ctob.makeToken({
                      name,
                      type: tokenType,
                      value: validToken.value,
                      description,
                    })
                  )
                : dwtl.updateToken(token.id, {
                    name,
                    value: validToken.value,
                    description,
                  }),
              dwtl.toggleTokenPath(path),
              dwtp.propagateWorkspaceTokens(),
              modal.hide()
            );
          }
        },
        error: ({ errors }: { errors: any[] }) => {
          const errorMessages = wte.humanizeErrors(errors);
          const errorMessage = errorMessages[0];
          // Would update form extra-errors here
        },
      });
    },
    [
      validateToken,
      token,
      mergedTokens,
      tokenType,
      valueSubfield,
      valueType,
      activeTab,
      action,
      isCreate,
      onRemapToken,
      onRenameToken,
    ]
  );

  return (
    <fc.Form className={stl.css('form-wrapper')} onSubmit={onSubmit}>
      <div className={stl.css('token-rows')}>
        <Heading
          level={2}
          typography="headline-medium"
          className={stl.css('form-modal-title')}
        >
          {action === 'edit'
            ? tr('workspace.tokens.edit-token', tokenType)
            : tr('workspace.tokens.create-token', tokenType)}
        </Heading>

        <div className={stl.css('input-row')}>
          <fc.FormInput
            id="token-name"
            name="name"
            label={tr('workspace.tokens.token-name')}
            placeholder={tr('workspace.tokens.enter-token-name', tokenTitle)}
            maxLength={maxInputLength}
            variant="comfortable"
            trim={true}
            autoFocus={true}
          />
        </div>

        <div className={stl.css('input-row')}>
          {valueType === 'indexed' && (
            <InputComponentFinal
              token={token}
              tokens={mergedTokens}
              tab={activeTab}
              valueSubfield={valueSubfield}
              handleToggle={onToggleTab}
            />
          )}

          {valueType === 'composite' && (
            <InputComponentFinal
              token={token}
              tokens={mergedTokens}
              tab={activeTab}
              handleToggle={onToggleTab}
            />
          )}

          {valueType === 'simple' && (
            <InputComponentFinal
              placeholder={inputValuePlaceholder || tr('workspace.tokens.token-value-enter')}
              label={tr('workspace.tokens.token-value')}
              name="value"
              token={token}
              tokens={mergedTokens}
            />
          )}
        </div>

        <div className={stl.css('input-row')}>
          <fc.FormInput
            id="token-description"
            name="description"
            label={tr('workspace.tokens.token-description')}
            placeholder={tr('workspace.tokens.token-description')}
            maxLength={maxInputLength}
            variant="comfortable"
            isOptional={true}
          />
        </div>

        <div
          className={stl.css('button-row', action === 'edit' ? 'with-delete' : '')}
        >
          {action === 'edit' && (
            <Button
              onClick={onDeleteToken}
              onKeyDown={handleKeyDownDelete}
              className={stl.css('delete-btn')}
              type="button"
              icon={Icon.iconId('delete')}
              variant="secondary"
            >
              {tr('labels.delete')}
            </Button>
          )}

          <Button
            onClick={onCancel}
            onKeyDown={handleKeyDownCancel}
            type="button"
            id="token-modal-cancel"
            variant="secondary"
          >
            {tr('labels.cancel')}
          </Button>

          <fc.FormSubmit variant="primary" onSubmit={onSubmit}>
            {tr('labels.save')}
          </fc.FormSubmit>
        </div>
      </div>
    </fc.Form>
  );
};
