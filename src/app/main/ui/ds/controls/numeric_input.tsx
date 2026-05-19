// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from 'react';
// import { cssClass } from '../../../style';
// import { IconButton } from '../buttons/icon-button';
// import { InputField } from './utilities/input-field';
// import { TokenField } from './utilities/token-field';
// import { OptionsDropdown } from './shared/options-dropdown';
// import { Icon } from '../foundations/assets/icon';
// import { getOption, handleFocusChange } from './select';
// import * as fmt from '../../formats';
// import * as dom from '../../../util/dom';
// import * as kbd from '../../../util/keyboard';
// import * as ts from '../../../util/timers';
// import { tr } from '../../../util/i18n';
// import { smt } from '../../../util/simple-math';
// import * as d from '../../common/data';
// import * as sm from '../../common/schema';
// import { maxInputLength } from '../../constants';

const MAX_INPUT_LENGTH = 255;

function increment(val: number, step: number, minVal: number, maxVal: number): number {
  return Math.min(Math.max(val + step, minVal), maxVal);
}

function decrement(val: number, step: number, minVal: number, maxVal: number): number {
  return Math.min(Math.max(val - step, minVal), maxVal);
}

function parseValue(rawValue: string | null, lastValue: number | null, minValue: number | null, maxValue: number | null, nillable: boolean): number | null {
  if (nillable && rawValue === null) {
    return null;
  }

  const strValue = rawValue !== null ? String(rawValue).replace(/\.$/, '') : '';
  const evaluated = smt.exprEval(strValue, lastValue ?? 0);

  if (d.num(evaluated)) {
    let result = evaluated;
    result = Math.min(result, sm.maxSafeInt / 2);
    result = Math.max(result, sm.minSafeInt / 2);
    if (d.num(minValue)) {
      result = Math.max(result, minValue);
    }
    if (d.num(maxValue)) {
      result = Math.min(result, maxValue);
    }
    return result;
  }

  return null;
}

function getOptionByName(options: any[], name: string): any {
  if (options instanceof Promise || (options as any)[Symbol.iterator] === undefined) {
    options = [...options];
  }
  return options.find(opt => opt.name === name);
}

function getTokenOp(tokens: any, name: string): any {
  let tokenData = tokens;
  if (tokens instanceof Promise) {
    tokenData = tokens;
  }
  const xform = (arr: any[]) => arr.filter(t => t.name === name);
  let result: any[] = [];
  Object.entries(tokenData).forEach(([_, tokens]) => {
    result = [...result, ...xform(tokens as any[])];
  });
  return result;
}

function cleanTokenName(s: string | null): string | null {
  if (!s) return null;
  return s.replace(/^\{/, '').replace(/\}$/, '');
}

function tokenToDropdownOption(token: any): any {
  return {
    id: String(token.id),
    type: 'token',
    resolvedValue: token.resolvedValue,
    name: token.name
  };
}

function generateDropdownOptions(tokens: any, noSets: boolean): any[] {
  if (!tokens || Object.keys(tokens).length === 0) {
    return [{
      type: 'empty',
      label: noSets
        ? tr("ds.inputs.numeric-input.no-applicable-tokens")
        : tr("ds.inputs.numeric-input.no-matches")
    }];
  }

  let options: any[] = [];
  Object.entries(tokens).forEach(([type, items]: [string, any[]], index: number) => {
    if (index > 0) {
      options.push({
        separator: true,
        id: 'separator',
        type: 'separator'
      });
    }
    options.push({
      group: true,
      type: 'group',
      id: `group-${type}`,
      name: type
    });
    (items as any[]).forEach((item: any) => {
      options.push(tokenToDropdownOption(item));
    });
  });

  return options.length > 0 ? options : [];
}

function extractPartialBraceText(s: string | null): string | null {
  if (!s) return null;
  const start = s.lastIndexOf('{');
  if (start === -1) return null;
  return s.substring(start + 1);
}

function filterTokenGroupsByName(tokens: any, filterText: string): any {
  const lcFilter = filterText.toLowerCase();
  const result: any = {};

  Object.entries(tokens).forEach(([group, tokens]: [string, any[]]) => {
    const filtered = (tokens as any[]).filter(t =>
      t.name.toLowerCase().includes(lcFilter)
    );
    if (filtered.length > 0) {
      result[group] = filtered;
    }
  });

  return result;
}

function focusableOption(option: any): boolean {
  return !!option.id
    && option.type !== 'group'
    && option.type !== 'separator';
}

function firstFocusableId(options: any[]): string | null {
  return options.find(opt => focusableOption(opt))?.id ?? null;
}

function nextFocusIndex(options: any[], focusedId: string | null, direction: 'up' | 'down'): number | null {
  if (!options || options.length === 0) return null;
  const len = options.length;
  let startIndex = options.findIndex(opt => opt.id === focusedId);
  if (startIndex === -1) startIndex = 0;

  let indices: number[];
  if (direction === 'down') {
    indices = Array.from({ length: len }, (_, i) => startIndex + 1 + i);
  } else {
    indices = Array.from({ length: len }, (_, i) => startIndex - 1 - i);
  }

  for (const i of indices) {
    const j = ((i % len) + len) % len;
    if (focusableOption(options[j])) {
      return j;
    }
  }
  return null;
}

function sortGroupsAndTokens(groupsToTokens: Record<string, any[]>): Record<string, any[]> {
  const sorted: Record<string, any[]> = {};
  Object.keys(groupsToTokens).sort().forEach(key => {
    sorted[key] = (groupsToTokens[key] as any[]).sort((a, b) =>
      (a.name ?? '').localeCompare(b.name ?? '')
    );
  });
  return sorted;
}

interface DropdownOption {
  id: string;
  type: 'token' | 'group' | 'separator' | 'empty';
  group?: boolean;
  separator?: boolean;
  resolvedValue?: string | number;
  name?: string;
  label?: string;
}

interface NumericInputProps {
  id?: string;
  class?: string;
  innerClass?: string;
  value?: number | string | null | ':multiple';
  textIcon?: React.ReactNode;
  defaultValue?: string | null;
  placeholder?: string;
  icon?: string;
  disabled?: boolean;
  min?: number;
  max?: number;
  maxLength?: number;
  step?: number;
  isSelectedOnFocus?: boolean;
  nillable?: boolean;
  appliedToken?: string | null | ':multiple';
  emptyToEnd?: boolean;
  onChange?: (value: any) => void;
  onBlur?: (event: React.FocusEvent) => void;
  onFocus?: (event: React.FocusEvent) => void;
  onDetach?: (value: any) => void;
  property?: string;
  align?: 'left' | 'right';
  ref?: React.RefObject<HTMLInputElement | null>;
  name?: string;
  tokens?: any;
}

export function NumericInput({
  id: externalId,
  class: className,
  innerClass,
  value,
  textIcon,
  defaultValue,
  placeholder,
  icon,
  disabled = false,
  min,
  max,
  maxLength,
  step = 1,
  isSelectedOnFocus = true,
  nillable = false,
  appliedToken,
  emptyToEnd = false,
  onChange,
  onBlur,
  onFocus,
  onDetach,
  property,
  align = 'left',
  ref: externalRef,
  name,
  tokens
}: NumericInputProps): JSX.Element {
  const internalId = React.useId();
  const id = externalId || internalId;
  const listboxId = `listbox-${React.useId()}`;

  const defaultVal = React.useMemo(() =>
    d.parseDouble(defaultValue, nillable ? null : 0),
    [defaultValue, nillable]
  );

  const stepVal = React.useMemo(() =>
    d.parseDouble(step, 1),
    [step]
  );

  const minVal = React.useMemo(() =>
    d.parseDouble(min, sm.minSafeInt),
    [min]
  );

  const maxVal = React.useMemo(() =>
    d.parseDouble(max, sm.maxSafeInt),
    [max]
  );

  const maxLen = maxLength ?? MAX_INPUT_LENGTH;
  const emptyToEndVal = emptyToEnd;

  const isMultiple = value === ':multiple' || appliedToken === ':multiple';
  const currentValue = isMultiple ? null : (nillable && value === null ? null : d.parseDouble(value, defaultVal));

  const [isOpen, setIsOpen] = React.useState(false);
  const [tokenApplied, setTokenApplied] = React.useState<string | null | ':multiple'>(appliedToken ?? null);
  const [focusedId, setFocusedId] = React.useState<string | null>(null);
  const [filterId, setFilterId] = React.useState('');

  const rawValueRef = React.useRef<string | null>(null);
  const lastValueRef = React.useRef<number | string | null>(null);
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const nodesRef = React.useRef<Map<string, HTMLElement>>(new Map());
  const optionsRef = React.useRef<any[] | null>(null);
  const tokenWrapperRef = React.useRef<HTMLInputElement | null>(null);
  const internalRef = React.useRef<HTMLInputElement | null>(null);
  const ref = externalRef || internalRef;
  const dirtyRef = React.useRef(false);
  const openDropdownRef = React.useRef<HTMLElement | null>(null);
  const tokenDetachBtnRef = React.useRef<HTMLElement | null>(null);

  const selectedIdState = React.useState<string | null>(
    () => appliedToken
      ? getOptionByName(optionsRef.current || [], appliedToken)?.id ?? null
      : null
  );
  const [selectedId, setSelectedId] = selectedIdState;

  const dropdownOptions = React.useMemo(() => {
    return (() => {
      const tokenData = tokens;
      const sortedTokens = sortGroupsAndTokens(tokenData || {});
      const partial = extractPartialBraceText(filterId);
      const options = partial
        ? filterTokenGroupsByName(sortedTokens, partial)
        : sortedTokens;
      const noSets = !sortedTokens || Object.keys(sortedTokens).length === 0;
      return generateDropdownOptions(options, noSets);
    })();
  }, [tokens, filterId]);

  const setOptionRef = React.useCallback((node: HTMLElement | null) => {
    if (node) {
      const state = nodesRef.current;
      const nodeId = (node as any).dataset?.id || (node as any).getAttribute?.('data-id');
      const newState = new Map(state);
      newState.set(nodeId, node);
      nodesRef.current = newState;
    }
    return () => {
      if (node) {
        const state = nodesRef.current;
        const nodeId = (node as any).dataset?.id || (node as any).getAttribute?.('data-id');
        const newState = new Map(state);
        newState.delete(nodeId);
        nodesRef.current = newState;
      }
    };
  }, []);

  const updateInput = React.useCallback((newValue: string) => {
    const node = ref?.current;
    if (node) {
      dom.setValue(node, newValue);
    }
  }, [ref]);

  const applyValue = React.useCallback((rawValue: string) => {
    const parsed = parseValue(rawValue, lastValueRef.current as number | null, minVal, maxVal, nillable);
    if (parsed !== null && parsed !== lastValueRef.current) {
      lastValueRef.current = parsed;
      setTokenApplied(null);
      if (onChange) {
        onChange(parsed);
      }
      rawValueRef.current = fmt.formatNumber(parsed);
      updateInput(fmt.formatNumber(parsed));
    } else if (nillable && rawValue === '') {
      lastValueRef.current = null;
      rawValueRef.current = '';
      setTokenApplied(null);
      updateInput('');
      if (onChange) {
        onChange(null);
      }
    } else {
      const fallback = lastValueRef.current !== null ? lastValueRef.current as number : defaultVal;
      rawValueRef.current = String(fallback);
      lastValueRef.current = fallback;
      setTokenApplied(null);
      updateInput(fmt.formatNumber(fallback));
      if (onChange && fallback !== value) {
        onChange(fallback);
      }
    }
  }, [onChange, updateInput, minVal, maxVal, nillable, defaultVal, value]);

  const applyToken = React.useCallback((value: any, tokenName: string) => {
    const parsed = parseValue(value, lastValueRef.current as number | null, minVal, maxVal, nillable);
    if (parsed !== lastValueRef.current) {
      lastValueRef.current = parsed;
      if (onChange) {
        onChange(getTokenOp(tokens, tokenName));
      }
    }
  }, [onChange, minVal, maxVal, nillable, tokens]);

  const storeRawValue = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const text = dom.getTargetVal(event);
    rawValueRef.current = text;
    setFilterId(text);
  }, []);

  const onTokenApply = React.useCallback((id: string, value: any, tokenName: string) => {
    setSelectedId(id);
    setFocusedId(null);
    setIsOpen(false);
    setTokenApplied(tokenName);
    applyToken(value, tokenName);
    ts.scheduleOnIdle(() => {
      if (tokenWrapperRef.current) {
        dom.focus(tokenWrapperRef.current);
      }
    });
  }, [applyToken]);

  const onOptionClick = React.useCallback((event: React.MouseEvent) => {
    const node = dom.getCurrentTarget(event) as HTMLElement;
    const nodeId = dom.getData(node, 'id');
    const options = optionsRef.current;
    const option = getOption(options, nodeId);
    const value = option?.resolvedValue;
    const optName = option?.name;
    onTokenApply(nodeId, value, optName);
    setFilterId('');
  }, [onTokenApply]);

  const onOptionEnter = React.useCallback((_: React.KeyboardEvent) => {
    const options = optionsRef.current;
    const option = getOption(options, focusedId);
    const value = option?.resolvedValue;
    const optName = option?.name;
    onTokenApply(focusedId, value, optName);
    setFilterId('');
  }, [focusedId, onTokenApply]);

  const handleBlur = React.useCallback((event: React.FocusEvent) => {
    const target = dom.getRelatedTarget(event);
    const selfNode = wrapperRef.current;

    if (!dom.isChild(selfNode, target)) {
      setFilterId('');
      setFocusedId(null);
      setIsOpen(false);
    }

    if (dirtyRef.current) {
      applyValue(rawValueRef.current || '');
    }
    if (onBlur) {
      onBlur(event);
    }
  }, [applyValue, onBlur]);

  const onKeyDown = React.useCallback((event: React.KeyboardEvent) => {
    dirtyRef.current = true;
    const up = kbd.upArrow(event);
    const down = kbd.downArrow(event);
    const enter = kbd.enter(event);
    const esc = kbd.esc(event);
    const node = ref?.current;
    const openTokens = kbd.isKey(event, '{');
    const closeTokens = kbd.isKey(event, '}');
    const options = optionsRef.current;

    if (options && openTokens) {
      setIsOpen(true);
    } else if (closeTokens) {
      const cleanName = cleanTokenName(rawValueRef.current);
      const token = getOptionByName(options, cleanName || '');
      if (token) {
        applyToken(token.resolvedValue, token.name);
      } else {
        applyValue(String(lastValueRef.current));
      }
    } else if (enter) {
      if (isOpen) {
        dom.preventDefault(event);
        if (focusedId) {
          onOptionEnter(event);
        } else {
          const firstId = firstFocusableId(options || []);
          const option = getOption(options, firstId);
          onTokenApply(firstId, option?.resolvedValue, option?.name);
          setFilterId('');
        }
      } else {
        handleBlur(event as any);
      }
    } else if (esc) {
      updateInput(fmt.formatNumber(lastValueRef.current as number));
      setIsOpen(false);
      if (node) {
        dom.blur(node);
      }
    } else if (kbd.home(event)) {
      handleFocusChange(options, setFocusedId, 0, nodesRef.current);
    } else if (up) {
      if (isOpen) {
        const newIndex = nextFocusIndex(options, focusedId, 'up');
        dom.preventDefault(event);
        handleFocusChange(options, setFocusedId, newIndex, nodesRef.current);
      } else {
        const parsed = parseValue(rawValueRef.current, lastValueRef.current as number | null, minVal, maxVal, nillable);
        const currentVal = parsed !== null ? parsed : defaultVal;
        const newVal = increment(currentVal, stepVal, minVal, maxVal);
        dom.preventDefault(event);
        updateInput(fmt.formatNumber(newVal));
        applyValue(String(newVal));
      }
    } else if (down) {
      if (isOpen) {
        const newIndex = nextFocusIndex(options, focusedId, 'down');
        dom.preventDefault(event);
        handleFocusChange(options, setFocusedId, newIndex, nodesRef.current);
      } else {
        const parsed = parseValue(rawValueRef.current, lastValueRef.current as number | null, minVal, maxVal, nillable);
        const currentVal = parsed !== null ? parsed : defaultVal;
        const newVal = decrement(currentVal, stepVal, minVal, maxVal);
        dom.preventDefault(event);
        updateInput(fmt.formatNumber(newVal));
        applyValue(String(newVal));
      }
    }
  }, [ref, isOpen, focusedId, minVal, maxVal, nillable, defaultVal, stepVal, applyValue, updateInput, onOptionEnter, onTokenApply, handleBlur]);

  const handleFocus = React.useCallback((event: React.FocusEvent) => {
    if (onFocus) {
      onFocus(event);
    }
    if (isSelectedOnFocus) {
      const target = dom.getTarget(event);
      dom.selectText(target);
      target.addEventListener('mouseup', dom.preventDefault, { once: true });
    }
  }, [onFocus, isSelectedOnFocus]);

  const onMouseWheel = React.useCallback((event: WheelEvent) => {
    const node = ref?.current;
    if (node && dom.active(node)) {
      const inc = event.deltaY < 0;
      const parsed = parseValue(rawValueRef.current, lastValueRef.current as number | null, minVal, maxVal, nillable);
      const currentVal = parsed !== null ? parsed : defaultVal;
      const newVal = inc
        ? increment(currentVal, stepVal, minVal, maxVal)
        : decrement(currentVal, stepVal, minVal, maxVal);
      dom.preventDefault(event);
      dom.stopPropagation(event);
      applyValue(String(newVal));
    }
  }, [ref, minVal, maxVal, nillable, defaultVal, stepVal, applyValue]);

  const openDropdown = React.useCallback((event: React.MouseEvent) => {
    if (!disabled) {
      dom.preventDefault(event);
      setIsOpen(prev => !prev);
      if (ref?.current) {
        dom.focus(ref.current);
      }
    }
  }, [disabled, ref]);

  const openDropdownToken = React.useCallback((event: React.MouseEvent) => {
    if (!disabled) {
      dom.preventDefault(event);
      setIsOpen(prev => !prev);
      if (tokenWrapperRef.current) {
        dom.focus(tokenWrapperRef.current);
      }
    }
  }, [disabled]);

  const detachToken = React.useCallback((event: React.MouseEvent) => {
    if (!disabled) {
      dom.preventDefault(event);
      dom.stopPropagation(event);
      setTokenApplied(null);
      setSelectedId(null);
      setFocusedId(null);
      if (onDetach) {
        onDetach(tokenApplied);
      }
      ts.scheduleOnIdle(() => {
        if (ref?.current) {
          dom.focus(ref.current);
        }
      });
    }
  }, [disabled, onDetach, tokenApplied, ref]);

  const onTokenKeyDown = React.useCallback((event: React.KeyboardEvent) => {
    const esc = kbd.esc(event);
    const del = kbd.delete(event);
    const backspace = kbd.backspace(event);
    const enter = kbd.enter(event);
    const up = kbd.upArrow(event);
    const down = kbd.downArrow(event);
    const options = optionsRef.current;
    const detachBtn = tokenDetachBtnRef.current;
    const target = dom.getTarget(event);

    if (!disabled) {
      if (del || backspace) {
        dom.preventDefault(event);
        detachToken(event as any);
        if (ref?.current) {
          dom.focus(ref.current);
        }
      } else if (enter) {
        if (isOpen) {
          dom.preventDefault(event);
          dom.stopPropagation(event);
          onOptionEnter(event);
        } else if (target !== detachBtn) {
          dom.preventDefault(event);
          setIsOpen(true);
        }
      } else if (esc) {
        if (tokenWrapperRef.current) {
          dom.blur(tokenWrapperRef.current);
        }
      } else if (up && isOpen) {
        const newIndex = nextFocusIndex(options, focusedId, 'up');
        dom.preventDefault(event);
        handleFocusChange(options, setFocusedId, newIndex, nodesRef.current);
      } else if (down && isOpen) {
        const newIndex = nextFocusIndex(options, focusedId, 'down');
        dom.preventDefault(event);
        handleFocusChange(options, setFocusedId, newIndex, nodesRef.current);
      }
    }
  }, [disabled, isOpen, focusedId, detachToken, ref, onOptionEnter]);

  React.useEffect(() => {
    const valuePrime = isMultiple
      ? ''
      : (nillable && value === null)
        ? ''
        : fmt.formatNumber(d.parseDouble(value, defaultVal));

    rawValueRef.current = valuePrime;
    lastValueRef.current = valuePrime;
    setTokenApplied(appliedToken ?? null);
    if (appliedToken) {
      const tokenId = getOptionByName(dropdownOptions, appliedToken)?.id;
      setSelectedId(tokenId ?? null);
    } else {
      setSelectedId(null);
    }

    if (ref?.current) {
      dom.setValue(ref.current, valuePrime);
    }
  }, [value, defaultVal, appliedToken, isMultiple, nillable, dropdownOptions, ref]);

  React.useLayoutEffect(() => {
    const node = ref?.current;
    if (node) {
      const key = events.listen(node, 'wheel', onMouseWheel, { passive: false });
      return () => events.unlistenByKey(key);
    }
    return () => {};
  }, [ref, onMouseWheel]);

  React.useEffect(() => {
    optionsRef.current = dropdownOptions;
  }, [dropdownOptions]);

  const wrapperClass = [
    className,
    cssClass({ 'input-wrapper': true })
  ].filter(Boolean).join(' ');

  const textIconElement = textIcon ? (
    <div className={cssClass({ 'text-icon': true })}>
      {textIcon}
    </div>
  ) : null;

  const dropdownButton = !disabled && tokens ? (
    <icon-button-component
      variant="ghost"
      icon="tokens"
      tooltipClass={cssClass({ 'button-tooltip': true })}
      class={cssClass({ 'invisible-button': true })}
      aria-label={tr("ds.inputs.numeric-input.open-token-list-dropdown")}
      ref={openDropdownRef}
      onClick={openDropdown}
    />
  ) : null;

  const inputProps = {
    ref,
    type: 'text' as const,
    id,
    class: innerClass,
    placeholder: isMultiple ? tr("labels.mixed-values") : placeholder,
    defaultValue: String(lastValueRef.current ?? fmt.formatNumber(value ?? 0)),
    onBlur: handleBlur,
    onKeyDown,
    onFocus: handleFocus,
    onChange: storeRawValue,
    variant: 'comfortable' as const,
    disabled,
    icon,
    'aria-label': property,
    slotStart: textIconElement,
    slotEnd: dropdownButton,
    maxLength: maxLen
  };

  let tokenProps = null;
  if (tokenApplied && tokenApplied !== ':multiple') {
    const token = getOptionByName(dropdownOptions, tokenApplied);
    const tokenId = token?.id;
    const label = token?.name;
    let tokenValue = token?.resolvedValue ?? (lastValueRef.current !== null ? String(lastValueRef.current) : fmt.formatNumber(value ?? 0));
    if (name === ':opacity' && tokenValue) {
      tokenValue = String(parseFloat(tokenValue) * 100);
    }

    const iconElement = icon ? (
      <icon-component icon-id={icon} size="s" class={cssClass({ icon: true })} />
    ) : textIconElement;

    tokenProps = {
      id: tokenId,
      label,
      value: tokenValue,
      onClick: openDropdownToken,
      onFocus: handleFocus,
      onTokenKeyDown,
      disabled,
      onBlur: handleBlur,
      class: innerClass,
      property,
      slotStart: (icon || textIcon) ? iconElement : null,
      tokenWrapperRef,
      tokenDetachBtnRef,
      detachToken
    };
  }

  return (
    <div className={wrapperClass} ref={wrapperRef}>
      {tokenApplied && tokenApplied !== ':multiple' ? (
        <token-field-component {...tokenProps} />
      ) : (
        <input-field-component {...inputProps} />
      )}

      {isOpen && (
        <options-dropdown-component
          onClick={onOptionClick}
          id={listboxId}
          options={dropdownOptions}
          selected={selectedId}
          focused={focusedId}
          align={align}
          emptyToEnd={emptyToEndVal}
          ref={setOptionRef}
        />
      )}
    </div>
  );
}

function cssClass(classes: Record<string, boolean>): string {
  return Object.entries(classes)
    .filter(([_, value]) => value)
    .map(([key, _]) => key)
    .join(' ');
}
