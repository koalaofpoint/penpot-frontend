// This Source Code Form is subject to terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { d } from '../../../common/data';
// import { cc } from '../../../common/types/color';
// import { hooks } from '../hooks';
// import { dom } from '../../../util/dom';
// import { globals } from '../../../util/globals';
// import { i18n, tr } from '../../../util/i18n';
// import { kbd } from '../../../util/keyboard';

/**
 * Helper to clean color value
 */
function getCleanColor(node: HTMLInputElement): string | null {
  try {
    // TODO: const value = dom.getValue(node);
    const value = node.value;
    // TODO: const expanded = cc.expandHex(value);
    const expanded = value;
    // TODO: const parsed = cc.parse(expanded);
    const parsed = expanded;
    // TODO: return cc.prependHash(parsed);
    return parsed.startsWith('#') ? parsed : `#${parsed}`;
  } catch {
    return null;
  }
}

/**
 * Color input component props
 */
export interface ColorInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'onBlur' | 'onFocus'> {
  value: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  selectOnFocus?: boolean;
  class?: string;
  ariaLabel?: string;
}

/**
 * Color input component - Input field for hex color values
 */
export const ColorInput = React.forwardRef<HTMLInputElement, ColorInputProps>((props, externalRef) => {
  const {
    value,
    onChange,
    onBlur,
    onFocus,
    selectOnFocus,
    class: className = 'color-input',
    ariaLabel,
    ...restProps
  } = props;

  const selectOnFocusFinal = selectOnFocus ?? true;
  const ariaLabelFinal = ariaLabel || /* tr('inspect.attributes.color') */ 'Color';

  const localRef = React.useRef<HTMLInputElement>(null);
  const ref = externalRef || localRef;

  const dirtyRef = React.useRef(false);

  const parseValue = React.useCallback((): string | null => {
    const inputNode = ref.current;
    if (!inputNode) return null;

    try {
      const newValue = getCleanColor(inputNode);
      // TODO: dom.setValidity(inputNode, '');
      inputNode.setCustomValidity('');
      return newValue;
    } catch {
      // TODO: dom.setValidity(inputNode, tr('errors.invalid-color'));
      inputNode.setCustomValidity(/* tr('errors.invalid-color') */ 'Invalid color');
      return null;
    }
  }, [ref]);

  const updateInput = React.useCallback((newValue: string | null) => {
    const inputNode = ref.current;
    if (inputNode) {
      // TODO: dom.setValue(inputNode, cc.removeHash(newValue));
      inputNode.value = newValue?.replace('#', '') || '';
    }
  }, [ref]);

  const applyValue = React.useCallback((newValue: string) => {
    dirtyRef.current = false;
    const valueWithoutHash = newValue.replace('#', '');
    if (newValue && valueWithoutHash !== value.replace('#', '') && onChange) {
      onChange(newValue);
    }
    updateInput(newValue);
  }, [onChange, updateInput, value]);

  const handleKeyDown = React.useCallback((event: React.KeyboardEvent) => {
    dirtyRef.current = true;
    const inputNode = ref.current;
    if (!inputNode) return;

    // TODO: if (kbd.enter(event)) {
    // TODO:   const newValue = parseValue();
    // TODO:   updateInput(newValue);
    // TODO: dom.preventDefault(event);
    // TODO:   dom.blur(inputNode);
    // TODO: }
    // TODO: if (kbd.esc(event)) {
    // TODO:   updateInput(value);
    // TODO:   dom.preventDefault(event);
    // TODO:   dom.blur(inputNode);
    // TODO: }
    if (event.key === 'Enter') {
      const newValue = parseValue();
      if (newValue) {
        updateInput(newValue);
        event.preventDefault();
        inputNode.blur();
      }
    } else if (event.key === 'Escape') {
      updateInput(value);
      event.preventDefault();
      inputNode.blur();
    }
  }, [parseValue, updateInput, value, ref]);

  const handleClick = React.useCallback((event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const current = ref.current;
    if (current && !current.contains(target)) {
      current.blur();
    }
  }, [ref]);

  const handleMouseUp = React.useCallback((event: React.MouseEvent) => {
    event.preventDefault();
  }, []);

  const handleFocus = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    if (onFocus) onFocus();

    if (selectOnFocusFinal) {
      target.select();
      target.addEventListener('mouseup', handleMouseUp, { once: true });
    }
  }, [onFocus, selectOnFocusFinal, handleMouseUp]);

  const handleBlur = React.useCallback((_: React.FocusEvent<HTMLInputElement>) => {
    const newValue = parseValue();
    if (newValue) {
      applyValue(newValue);
    } else {
      updateInput(value);
    }
    if (onBlur) onBlur();
  }, [parseValue, applyValue, updateInput, value, onBlur]);

  const finalProps: React.InputHTMLAttributes<HTMLInputElement> = {
    ...restProps,
    className,
    type: 'text',
    ref,
    'aria-label': ariaLabelFinal,
    defaultValue: value,
    onKeyDown: handleKeyDown,
    onBlur: handleBlur,
    onFocus: handleFocus
  };

  React.useEffect(() => {
    const node = ref.current;
    if (node) {
      node.value = value;
    }
  }, [value, ref]);

  React.useLayoutEffect(() => {
    // UNMOUNT: we use layout-effect because we still need dom
    // node to be present on refs for properly executing the
    // on-blur event handler
    return () => {
      if (dirtyRef.current) {
        handleBlur({} as React.FocusEvent<HTMLInputElement>);
      }
    };
  }, [handleBlur]);

  React.useLayoutEffect(() => {
    const handleGlobalClick = (event: Event) => handleClick(event as MouseEvent);
    // TODO: const key1 = events.listen(globals.window, 'pointerdown', on-click);
    // TODO: const key2 = events.listen(globals.window, 'click', on-click);
    window.addEventListener('pointerdown', handleGlobalClick);
    window.addEventListener('click', handleGlobalClick);

    return () => {
      window.removeEventListener('pointerdown', handleGlobalClick);
      window.removeEventListener('click', handleGlobalClick);
    };
  }, [handleClick]);

  return <input {...finalProps} />;
});

ColorInput.displayName = 'ColorInput';
