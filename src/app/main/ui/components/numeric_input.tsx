// This Source Code Form is subject to terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { d } from '../../../common/data';
// import { mth } from '../../../common/math';
// import { fmt } from '../formats';
// import { h } from '../hooks';
// import { dom } from '../../../util/dom';
// import { globals } from '../../../util/globals';
// import { kbd } from '../../../util/keyboard';
// import { obj } from '../../../util/object';
// import { smt } from '../../../util/simple-math';
// import { str } from 'cuerdas.core';

/**
 * Numeric input component props
 */
export interface NumericInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'onBlur' | 'onFocus'> {
  value?: number | ':multiple';
  min?: number;
  max?: number;
  step?: number;
  dataWrap?: boolean;
  onChange?: (value: number, event: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  title?: string;
  default?: number;
  nillable?: boolean;
  integer?: boolean;
  selectOnFocus?: boolean;
}

// TODO: const MIN_SAFE_INT_HALF = Number.MIN_SAFE_INTEGER / 2;
// TODO: const MAX_SAFE_INT_HALF = Number.MAX_SAFE_INTEGER / 2;

/**
 * Helper to parse double value
 */
function parseDouble(value: any, defaultValue?: number): number | undefined {
  if (typeof value === 'number') return value;
  if (typeof value === 'string') {
    const parsed = parseFloat(value);
    return isNaN(parsed) ? defaultValue : parsed;
  }
  return defaultValue;
}

/**
 * Helper to format number
 */
function formatNumber(value: number | undefined): string {
  // TODO: return fmt.formatNumber(value);
  return value !== undefined && !isNaN(value) ? String(value) : '';
}

/**
 * Helper to evaluate simple math expression
 */
function exprEval(expression: string, prevValue: number | undefined): number | undefined {
  // TODO: return smt.exprEval(expression, prevValue);
  try {
    return parseFloat(expression);
  } catch {
    return prevValue;
  }
}

/**
 * Numeric input component - Input with keyboard/mouse wheel support
 */
export const NumericInput = React.forwardRef<HTMLInputElement, NumericInputProps>((props, externalRef) => {
  const {
    value: valueStr = ':multiple',
    min: minProp,
    max: maxProp,
    step: stepProp,
    dataWrap,
    onChange,
    onBlur,
    onFocus,
    title,
    default: defaultProp,
    nillable,
    integer,
    selectOnFocus = true,
    className = '',
    ...restProps
  } = props;

  const minValue = parseDouble(minProp);
  const maxValue = parseDouble(maxProp);
  const stepValue = parseDouble(stepProp, 1);
  const defaultValue = parseDouble(defaultProp, nillable ? undefined : 0);

  const localRef = React.useRef<HTMLInputElement>(null);
  const ref = externalRef || localRef;

  const value = valueStr !== ':multiple' ? parseDouble(valueStr, defaultValue) : undefined;

  const dirtyRef = React.useRef(false);
  const lastValueRef = React.useRef(value);

  const parseValue = React.useCallback((): number | undefined => {
    const node = ref.current;
    if (!node) return undefined;

    // TODO: let newValue = dom.getValue(node).stripSuffix('.').exprEval(value);
    let nodeValue = node.value;
    nodeValue = nodeValue.endsWith('.') ? nodeValue.slice(0, -1) : nodeValue;
    const newValue = exprEval(nodeValue, value);

    if (typeof newValue === 'number' && !isNaN(newValue)) {
      let result = newValue;

      if (integer) {
        result = Math.round(result);
      }

      // TODO: result = Math.max(MIN_SAFE_INT_HALF, result);
      // TODO: result = Math.min(MAX_SAFE_INT_HALF, result);
      result = Math.max(Number.MIN_SAFE_INTEGER / 2, result);
      result = Math.min(Number.MAX_SAFE_INTEGER / 2, result);

      if (typeof minValue === 'number') {
        result = Math.max(minValue, result);
      }
      if (typeof maxValue === 'number') {
        result = Math.min(maxValue, result);
      }

      return result;
    }

    return nillable ? defaultValue : value;
  }, [ref, value, nillable, integer, minValue, maxValue, defaultValue]);

  const updateInput = React.useCallback((newValue: number | undefined) => {
    const node = ref.current;
    if (node) {
      node.value = formatNumber(newValue);
    }
  }, [ref]);

  const applyValue = React.useCallback((event: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent, newValue: number) => {
    dirtyRef.current = false;
    if (newValue !== value && onChange) {
      onChange(newValue, event);
    }
    updateInput(newValue);
  }, [onChange, updateInput, value]);

  const setDelta = React.useCallback((event: React.KeyboardEvent, up: boolean, down: boolean) => {
    const currentValue = parseValue();

    let baseValue: number;
    if (!currentValue && down && maxValue !== undefined) {
      baseValue = maxValue;
    } else if (!currentValue && up && minValue !== undefined) {
      baseValue = minValue;
    } else if (!currentValue) {
      baseValue = defaultValue ?? 0;
    } else {
      baseValue = currentValue;
    }

    if (currentValue === undefined) return;

    let increment: number;
    // TODO: if (kbd.shift(event)) { increment = up ? stepValue * 10 : -stepValue * 10; }
    // TODO: else if (kbd.alt(event)) { increment = up ? stepValue * 0.1 : -stepValue * 0.1; }
    // TODO: else { increment = up ? stepValue : -stepValue; }
    if (event.shiftKey) {
      increment = up ? stepValue * 10 : -stepValue * 10;
    } else if (event.altKey) {
      increment = up ? stepValue * 0.1 : -stepValue * 0.1;
    } else {
      increment = up ? stepValue : -stepValue;
    }

    let newValue = baseValue + increment;

    // Handle wrap
    if (dataWrap && typeof maxValue === 'number' && typeof minValue === 'number') {
      if (newValue > maxValue && up) {
        newValue = newValue - maxValue + minValue - stepValue;
      } else if (newValue < minValue && down) {
        newValue = newValue - minValue + maxValue + stepValue;
      }
    }

    // Clamp to min/max
    if (typeof minValue === 'number' && newValue < minValue) {
      newValue = minValue;
    }
    if (typeof maxValue === 'number' && newValue > maxValue) {
      newValue = maxValue;
    }

    if (integer) {
      newValue = Math.round(newValue);
    }

    applyValue(event, newValue);
  }, [dataWrap, maxValue, minValue, defaultValue, stepValue, integer, parseValue, applyValue]);

  const handleKeyDown = React.useCallback((event: React.KeyboardEvent) => {
    dirtyRef.current = true;
    // TODO: const up = kbd.upArrow(event);
    // TODO: const down = kbd.downArrow(event);
    // TODO: const enter = kbd.enter(event);
    // TODO: const esc = kbd.esc(event);
    const up = event.key === 'ArrowUp';
    const down = event.key === 'ArrowDown';
    const enter = event.key === 'Enter';
    const esc = event.key === 'Escape';

    const node = ref.current;

    if (up || down) {
      setDelta(event, up, down);
    }

    lastValueRef.current = parseValue();

    if (enter && node) {
      node.blur();
    }
    if (esc && node) {
      updateInput(parseDouble(valueStr));
      node.blur();
    }
  }, [setDelta, parseValue, updateInput, valueStr, ref]);

  const handleChange = React.useCallback(() => {
    lastValueRef.current = parseValue();
  }, [parseValue]);

  const handleMouseWheel = React.useCallback((event: WheelEvent) => {
    const node = ref.current;
    if (node && document.activeElement === node) {
      event.preventDefault();
      event.stopPropagation();

      // TODO: const { y } = dom.getDeltaPosition(event);
      const y = event.deltaY;
      setDelta(event as unknown as React.KeyboardEvent, y < 0, y > 0);
    }
  }, [setDelta, ref]);

  const handleBlur = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (dirtyRef.current) {
      const newValue = lastValueRef.current ?? defaultValue;
      if (nillable || newValue !== undefined) {
        applyValue(event, newValue!);
      } else {
        updateInput(newValue);
      }
    }
    if (onBlur) {
      onBlur(event);
    }
  }, [defaultValue, nillable, applyValue, updateInput, onBlur]);

  // TODO: const handleUnmount = h.useRefCallback(handleBlur);

  const handleClick = React.useCallback((event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    const node = ref.current;
    if (node && !node.contains(target)) {
      node.blur();
    }
  }, [ref]);

  const handleFocus = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    lastValueRef.current = parseValue();
    const target = event.target as HTMLInputElement;

    if (onFocus) {
      dirtyRef.current = true;
      onFocus(event);
    }

    if (selectOnFocus) {
      target.select();
      target.addEventListener('mouseup', e => e.preventDefault(), { once: true });
    }
  }, [parseValue, onFocus, selectOnFocus]);

  const finalClassName = className;
  const finalProps: React.InputHTMLAttributes<HTMLInputElement> = {
    ...restProps,
    className: finalClassName,
    type: 'text',
    ref,
    defaultValue: formatNumber(value),
    title,
    onKeyDown: handleKeyDown,
    onBlur: handleBlur,
    onFocus: handleFocus,
    onChange: handleChange
  };

  React.useEffect(() => {
    const inputNode = ref.current;
    if (inputNode) {
      inputNode.value = formatNumber(value);
    }
  }, [value, ref]);

  React.useEffect(() => {
    // Handle unmount - call handleBlur
    return () => {
      if (dirtyRef.current && ref.current) {
        const newValue = lastValueRef.current ?? defaultValue;
        if (nillable || newValue !== undefined) {
          if (onChange) onChange(newValue!, {} as React.ChangeEvent<HTMLInputElement>);
        }
      }
    };
  }, [defaultValue, nillable, onChange, ref]);

  React.useLayoutEffect(() => {
    const handleGlobalClick = (event: Event) => handleClick(event as unknown as React.MouseEvent);
    const keys = [
      // TODO: events.listen(globals.window, 'pointerdown', on-click),
      // TODO: events.listen(globals.window, 'click', on-click),
      window.addEventListener('pointerdown', handleGlobalClick),
      window.addEventListener('click', handleGlobalClick)
    ];

    return () => {
      keys.forEach(key => {
        if (typeof key === 'function') key();
        else window.removeEventListener('pointerdown', handleGlobalClick);
        window.removeEventListener('click', handleGlobalClick);
      });
    };
  }, [handleClick]);

  React.useLayoutEffect(() => {
    const node = ref.current;
    if (node) {
      // TODO: const key = events.listen(node, 'wheel', handleMouseWheel, { passive: false });
      node.addEventListener('wheel', handleMouseWheel, { passive: false });
      return () => node.removeEventListener('wheel', handleMouseWheel);
    }
  }, [handleMouseWheel, ref]);

  return <input {...finalProps} />;
});

NumericInput.displayName = 'NumericInput';
