// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useCallback, useState, useEffect, useRef, useMemo } from 'react';
import * as d from 'app/common/data';
import * as cto from 'app/common/types/token';
import * as ctob from 'app/common/types/tokens-lib';
import * as cf from 'app/config';
import * as sd from 'app/main/data/style-dictionary';
import * as ts from 'app/main/data/tokenscript';
import * as wte from 'app/main/data/workspace/tokens/errors';
import * as fonts from 'app/main/fonts';
import { iconButton } from 'app/main/ui/ds/buttons/icon-button';
import { input } from 'app/main/ui/ds/controls/input';
import * as i from 'app/main/ui/ds/foundations/assets/icon';
import * as fc from 'app/main/ui/forms';
import { fontSelector } from 'app/main/ui/workspace/sidebar/options/menus/typography';
import * as dom from 'app/util/dom';
import * as fm from 'app/util/forms';
import { tr } from 'app/util/i18n';
import { of as ofRx, subject as subjectRx, behaviorSubject, dispose as disposeRx, push as pushRx, subs as subsRx, debounce, switchMap, map as mapRx } from 'beicon.v2/core';
import * as str from 'cuerdas/core';

interface FontsComboboxProps {
  token: any;
  tokens: any;
  name: string;
  [key: string]: any;
}

function resolveValue(tokens: any, prevToken: any, tokenName: string, value: string): any {
  const tmpValue = cto.splitFontFamily(value);
  const tmpName = "__PENPOT__FONT_FAMILY__PLACEHOLDER__";

  const token = {
    name: tmpName,
    type: 'font-family' as const,
    value: prevToken.type === 'typography'
      ? { ...prevToken.value, fontFamily: tmpValue }
      : tmpValue
  };

  const updatedTokens = d.update(tokens, token.name, (prev: any) =>
    ctob.makeToken(d.merge(prev || {}, prevToken, token))
  );

  const resolveObs = cf.flags.includes('tokenscript')
    ? ofRx(ts.resolveTokens(updatedTokens))
    : sd.resolveTokensInteractive(updatedTokens);

  return resolveObs.pipe(
    switchMap((resolvedTokens: any) => {
      const resolvedToken = resolvedTokens[token.name];
      const resolvedValue = resolvedToken?.resolvedValue;
      const finalValue = cf.flags.includes('tokenscript')
        ? ts.tokenscriptSymbolsToPenpotUnit(resolvedValue)
        : resolvedValue;

      if (resolvedValue) {
        return ofRx({ value: resolvedValue });
      } else {
        return ofRx({ error: resolvedToken.errors?.[0] });
      }
    })
  );
}

export const FontsCombobox: React.FC<FontsComboboxProps> = ({ token, tokens, name, ...props }) => {
  const form = React.useContext(fc.context);
  const inputName = name;
  const tokenName = d.getIn(form.data, ['name'], null);

  const touched = form.data && d.contains(form.data, inputName) && d.getIn(form.touched, [inputName]);
  const error = d.getIn(form.errors, [inputName]);
  const value = d.getIn(form.data, [inputName], '');

  const font = useMemo(() => fonts.findFontFamily(value), [value]);

  const resolveStream = useMemo(() => {
    if (token?.value) {
      return behaviorSubject(token.value);
    }
    return subjectRx();
  }, [token]);

  const [hint, setHint] = useState<{ message?: string; type?: string }>({});
  const [fontSelectorOpen, setFontSelectorOpen] = useState(false);

  const onClickDropdownButton = useCallback((e: React.MouseEvent) => {
    dom.preventDefault(e);
    setFontSelectorOpen(prev => !prev);
  }, []);

  const onCloseFontSelector = useCallback(() => {
    setFontSelectorOpen(false);
  }, []);

  const onSelectFont = useCallback(({ family }: { family: string }) => {
    if (value !== family) {
      fm.onInputChange(form, inputName, family, true);
      pushRx(resolveStream, family);
    }
  }, [value, form, inputName, resolveStream]);

  const onChange = useCallback((event: React.ChangeEvent) => {
    const newValue = dom.getInputValue(dom.getTarget(event) as HTMLInputElement);
    fm.onInputChange(form, inputName, newValue, false);
    pushRx(resolveStream, newValue);
  }, [form, inputName, resolveStream]);

  const mergedProps = {
    ...props,
    onChange,
    value: value || '',
    hintMessage: hint.message,
    slotEnd: (
      <iconButton
        onClick={onClickDropdownButton}
        ariaLabel={tr("workspace.tokens.token-font-family-select")}
        icon={i.arrowDown}
        variant="action"
        type="button"
      />
    ),
    variant: "comfortable",
    hintType: hint.type
  };

  const finalProps = (error && touched)
    ? { ...mergedProps, hintType: "error", hintMessage: error.message }
    : mergedProps;

  useEffect(() => {
    const sub = resolveStream.pipe(
      debounce(300),
      switchMap((val: string) => resolveValue(tokens, token, tokenName, val)),
      mapRx((result: any) => d.updateWhen(result, 'error', wte.resolveErrorMessage)),
      subsRx(({ error, value }: any) => {
        if (touched) {
          if (error) {
            d.swap(form, 'extra-errors', d.assoc, inputName, { message: error });
            setHint({ message: error, type: "error" });
          } else {
            const message = tr("workspace.tokens.resolved-value", value);
            d.swap(form, 'extra-errors', d.dissoc, inputName);
            setHint({ message, type: "hint" });
          }
        }
      })
    );

    return () => disposeRx(sub);
  }, [resolveStream, tokens, token, tokenName, touched, form, inputName]);

  return (
    <>
      <input {...finalProps} />
      {fontSelectorOpen && (
        <div className={(styles as any).fontSelectWrapper}>
          <fontSelector
            currentFont={font}
            onSelect={onSelectFont}
            onClose={onCloseFontSelector}
            fullSize={true}
          />
        </div>
      )}
    </>
  );
};

function onCompositeComboboxTokenChange(
  form: any,
  field: string,
  value: string,
  trim?: boolean
): void {
  const cleanErrors = (errors: any) =>
    d.pipe(
      d.dissoc(field),
      d.notEmpty
    );

  d.swap(form, (state: any) =>
    d.pipe(
      d.assocIn(['data', 'value', field], trim ? str.trim(value) : value),
      d.update('errors', cleanErrors),
      d.update('extra-errors', cleanErrors)
    )(state)
  );
}

interface CompositeFontsComboboxProps {
  token: any;
  tokens: any;
  name: string;
  [key: string]: any;
}

export const CompositeFontsCombobox: React.FC<CompositeFontsComboboxProps> = ({ token, tokens, name, ...props }) => {
  const form = React.useContext(fc.context);
  const inputName = name;
  const tokenName = d.getIn(form.data, ['name'], null);
  const error = d.getIn(form.errors, ['value', inputName]);

  const value = d.getIn(form.data, ['value', inputName], '');
  const font = useMemo(() => fonts.findFontFamily(value), [value]);

  const resolveStream = useMemo(() => {
    if (d.getIn(token, ['value', inputName])) {
      return behaviorSubject(d.getIn(token, ['value', inputName]));
    }
    return subjectRx();
  }, [token, inputName]);

  const [hint, setHint] = useState<{ message?: string; type?: string }>({});
  const [fontSelectorOpen, setFontSelectorOpen] = useState(false);

  const onClickDropdownButton = useCallback((e: React.MouseEvent) => {
    dom.preventDefault(e);
    setFontSelectorOpen(prev => !prev);
  }, []);

  const onCloseFontSelector = useCallback(() => {
    setFontSelectorOpen(false);
  }, []);

  const onSelectFont = useCallback(({ family }: { family: string }) => {
    if (value !== family) {
      onCompositeComboboxTokenChange(form, inputName, family, true);
      pushRx(resolveStream, family);
    }
  }, [value, form, inputName, resolveStream]);

  const onChange = useCallback((event: React.ChangeEvent) => {
    const newValue = dom.getInputValue(dom.getTarget(event) as HTMLInputElement);
    onCompositeComboboxTokenChange(form, inputName, newValue, false);
    pushRx(resolveStream, newValue);
  }, [form, inputName, resolveStream]);

  const mergedProps = {
    ...props,
    onChange,
    value: value || '',
    hintMessage: hint.message,
    slotEnd: (
      <iconButton
        onClick={onClickDropdownButton}
        ariaLabel={tr("workspace.tokens.token-font-family-select")}
        icon={i.arrowDown}
        variant="action"
        type="button"
      />
    ),
    variant: "comfortable",
    hintType: hint.type
  };

  const finalProps = error
    ? { ...mergedProps, hintType: "error", hintMessage: error.message }
    : mergedProps;

  useEffect(() => {
    const sub = resolveStream.pipe(
      debounce(300),
      switchMap((val: string) => resolveValue(tokens, token, tokenName, val)),
      mapRx((result: any) => d.updateWhen(result, 'error', wte.resolveErrorMessage)),
      subsRx(({ error, value }: any) => {
        if (error && d.empty(error.errorValue)) {
          d.swap(form, 'errors', 'value', d.dissoc, inputName);
          d.swap(form, 'data', 'value', d.dissoc, inputName);
          d.swap(form, 'extra-errors', d.dissoc, 'value');
          setHint({});
        } else if (error) {
          const errorMsg = error.message;
          d.swap(form, 'extra-errors', 'value', inputName, { message: errorMsg });
          setHint({ message: errorMsg, type: "error" });
        } else {
          const message = tr("workspace.tokens.resolved-value", value);
          const inputValue = d.getIn(form.data, ['value', inputName], '');
          d.swap(form, 'errors', d.dissoc, 'value');
          d.swap(form, 'extra-errors', d.dissoc, 'value');
          if (d.empty(value) || value === inputValue) {
            setHint({});
          } else {
            setHint({ message, type: "hint" });
          }
        }
      })
    );

    return () => disposeRx(sub);
  }, [resolveStream, tokens, token, tokenName, form, inputName]);

  return (
    <>
      <input {...finalProps} />
      {fontSelectorOpen && (
        <div className={(styles as any).fontSelectWrapper}>
          <fontSelector
            currentFont={font}
            onSelect={onSelectFont}
            onClose={onCloseFontSelector}
            fullSize={true}
          />
        </div>
      )}
    </>
  );
};
