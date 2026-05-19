// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from 'app/common/data';
import * as sm from 'app/common/schema';
import * as cto from 'app/common/types/token';
import * as ctob from 'app/common/types/tokens-lib';
import * as cf from 'app/config';
import * as sd from 'app/main/data/style-dictionary';
import * as ts from 'app/main/data/tokenscript';
import * as wte from 'app/main/data/workspace/tokens/errors';
import * as rx from 'rxjs';
import * as str from 'cuerdas.core';

// Check for empty value
export const checkEmptyValue = (token: { value: string }) => {
  const tokenValue = token.value;
  if (str.trim(tokenValue).length === 0) {
    return wte.getErrorCode('error.token/empty-input');
  }
  return null;
};

// Check self reference
export const checkSelfReference = (
  tokenName: string,
  tokenValue: string
): wte.ErrorCode | null => {
  if (cto.tokenValueSelfReference?.(tokenName, tokenValue)) {
    return wte.getErrorCode('error.token/direct-self-reference');
  }
  return null;
};

// Validate resolve token
export const validateResolveToken = (
  token: any,
  prevToken: any,
  tokens: Record<string, any>
) => {
  let workingToken = token;

  // When creating a new token we don't have a name yet or invalid name,
  // but we still want to resolve the value to show in the form.
  // So we use a temporary token name that hopefully doesn't clash with any user's token names
  if (!sm.valid(cto.schemaTokenName, token.name)) {
    workingToken = { ...workingToken, name: '__PENPOT__TOKEN__NAME__PLACEHOLDER__' };
  }

  let workingTokens = tokens;

  // Remove previous token when renaming a token
  if (token.name !== prevToken?.name) {
    workingTokens = { ...workingTokens };
    delete workingTokens[prevToken?.name];
  }

  // Always update the token
  const tokenName = workingToken.name;
  workingTokens = {
    ...workingTokens,
    [tokenName]: ctob.makeToken({ ...workingTokens[tokenName], ...prevToken, ...workingToken }),
  };

  const resolveObservable = cf.flags?.has('tokenscript')
    ? rx.of(ts.resolveTokens(workingTokens))
    : sd.resolveTokensInteractive(workingTokens);

  return resolveObservable.pipe(
    rx.mapcat((resolvedTokens: any) => {
      let resolvedToken = resolvedTokens[workingToken.name];

      if (cf.flags?.has('tokenscript')) {
        resolvedToken = {
          ...resolvedToken,
          resolvedValue: ts.tokenscriptSymbolsToPenpotUnit(resolvedToken.resolvedValue),
        };
      }

      if (resolvedToken?.resolvedValue) {
        return rx.of(resolvedToken);
      }

      return rx.throw({
        errors: resolvedToken?.errors?.length > 0
          ? resolvedToken.errors
          : [wte.getErrorCode('error/unknown-error')],
      });
    })
  );
};

// Validate token with validators
const validateTokenWith = (token: any, validators: Array<(token: any) => wte.ErrorCode | null>) => {
  const error = validators.find((validate) => validate(token));
  if (error) {
    return rx.throw({ errors: [error] });
  }
  return rx.of(token);
};

// Default validators
const defaultValidators: Array<(token: any) => wte.ErrorCode | null> = [
  checkEmptyValue,
  checkSelfReference,
];

// Default validate token
export interface DefaultValidateTokenProps {
  tokenName?: string;
  tokenValue?: any;
  tokenDescription?: string;
  prevToken?: any;
  tokens?: Record<string, any>;
  validators?: Array<(token: any) => wte.ErrorCode | null>;
}

export const defaultValidateToken = ({
  tokenName,
  tokenValue,
  tokenDescription,
  prevToken,
  tokens,
  validators = defaultValidators,
}: DefaultValidateTokenProps) => {
  const token = d.withoutNils({
    name: tokenName,
    value: tokenValue,
    description: tokenDescription,
  });

  return rx.of(token).pipe(
    rx.mapcat((t) => validateTokenWith(t, validators)),
    rx.mapcat((t) => validateResolveToken(t, prevToken, tokens || {}))
  );
};

// Check collection self reference
export const checkCollSelfReference = (
  tokenName: string,
  tokenVals: string[]
): wte.ErrorCode | null => {
  if (tokenVals.some((v) => cto.tokenValueSelfReference?.(tokenName, v))) {
    return wte.getErrorCode('error.token/direct-self-reference');
  }
  return null;
};
