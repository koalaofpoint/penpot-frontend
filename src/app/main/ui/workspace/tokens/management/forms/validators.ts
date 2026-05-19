// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from 'app/common/data'
import * as sm from 'app/common/schema'
import * as cto from 'app/common/types/token'
import * as ctob from 'app/common/types/tokens-lib'
import * as cf from 'app/config'
import * as sd from 'app/main/data/style-dictionary'
import * as ts from 'app/main/data/tokenscript'
import * as wte from 'app/main/data/workspace/tokens/errors'
import { of, throwError } from 'rxjs'
import { map, mapcat, switchMap } from 'rxjs/operators'
import { trim } from 'cuerdas'

export function checkEmptyValue(token: any): any {
  const tokenValue = token.value
  if (trim(tokenValue) === '') {
    return wte.getErrorCode('error.token/empty-input')
  }
  return null
}

export function checkSelfReference(tokenName: string, tokenValue: string): any {
  if (cto.tokenValueSelfReference(tokenName, tokenValue)) {
    return wte.getErrorCode('error.token/direct-self-reference')
  }
  return null
}

export function validateResolveToken(
  token: any,
  prevToken: any,
  tokens: any
): any {
  const tokenCopy = !sm.valid(cto.schemaTokenName, token.name)
    ? { ...token, name: '__PENPOT__TOKEN__NAME__PLACEHOLDER__' }
    : token

  let tokensCopy = tokens
  if (token.name !== prevToken.name) {
    tokensCopy = d.dissoc(tokens, prevToken.name)
  }

  tokensCopy = d.update(tokensCopy, token.name, (t: any) =>
    ctob.makeToken({ ...t, ...prevToken, ...token })
  )

  const tokens$ = cf.flags.has('tokenscript')
    ? of(ts.resolveTokens(tokensCopy))
    : sd.resolveTokensInteractive(tokensCopy)

  return tokens$.pipe(
    switchMap((resolvedTokens: any) => {
      let resolvedToken = d.get(resolvedTokens, token.name)
      if (cf.flags.has('tokenscript')) {
        resolvedToken = d.update(resolvedToken, 'resolvedValue', ts.tokenscriptSymbolsToPenpotUnit)
      }

      if (resolvedToken?.resolvedValue) {
        return of(resolvedToken)
      } else {
        const errors = resolvedToken?.errors?.length
          ? resolvedToken.errors
          : [wte.getErrorCode('error/unknown-error')]
        return throwError({ errors })
      }
    })
  )
}

function validateTokenWith(
  token: any,
  validators: Array<(t: any) => any>
): any {
  for (const validate of validators) {
    const error = validate(token)
    if (error) {
      return throwError({ errors: [error] })
    }
  }
  return of(token)
}

const defaultValidators = [checkEmptyValue, checkSelfReference]

export function defaultValidateToken({
  tokenName,
  tokenValue,
  tokenDescription,
  prevToken,
  tokens,
  validators = defaultValidators,
}: {
  tokenName: string
  tokenValue: string
  tokenDescription?: string
  prevToken?: any
  tokens: any
  validators?: Array<(t: any) => any>
}): any {
  const token = d.withoutNils({
    name: tokenName,
    value: tokenValue,
    description: tokenDescription,
  })

  return of(token).pipe(
    switchMap((t: any) => validateTokenWith(t, validators)),
    switchMap((t: any) => validateResolveToken(t, prevToken, tokens))
  )
}

export function checkCollSelfReference(
  tokenName: string,
  tokenVals: string[]
): any {
  const hasSelfRef = tokenVals.some((v) =>
    cto.tokenValueSelfReference(tokenName, v)
  )
  if (hasSelfRef) {
    return wte.getErrorCode('error.token/direct-self-reference')
  }
  return null
}
