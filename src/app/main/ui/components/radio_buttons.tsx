// This Source Code Form is subject to terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { css, cssCase } from '../../main/style';
// import { icon } from '../ds/foundations/assets/icon';
// import { formats } from '../formats';
// import { dom } from '../../../util/dom';

/**
 * Radio button context
 */
const RadioButtonContext = React.createContext<{
  allowEmpty?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selected?: string;
  name?: string;
  encodeFn?: (value: string) => string;
}>({});

/**
 * Radio button component props
 */
export interface RadioButtonProps {
  icon?: string;
  id: string;
  value: string;
  disabled?: boolean;
  title?: string;
  iconClass?: string;
  type?: 'radio' | 'checkbox';
}

/**
 * Radio button component
 */
export function RadioButton({
  icon,
  id,
  value,
  disabled,
  title,
  iconClass,
  type: typeProp
}: RadioButtonProps) {
  const context = React.useContext(RadioButtonContext);
  const allowEmpty = context.allowEmpty;
  const onChange = context.onChange;
  const selected = context.selected;
  const name = context.name;
  const encodeFn = context.encodeFn || ((v: string) => v);

  const type = typeProp || (allowEmpty ? 'checkbox' : 'radio');
  const checked = selected === value;
  const encodedValue = encodeFn(value);

  return (
    <label
      htmlFor={id}
      data-testid={id}
      title={title}
      className={`radio-icon ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''}`}
    >
      {icon ? (
        // icon({ iconId: icon, class: iconClass, ariaHidden: true })
        <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        </svg>
      ) : (
        <span className="title-name">{value}</span>
      )}
      <input
        id={id}
        onChange={onChange}
        type={type}
        name={name}
        disabled={disabled}
        value={encodedValue}
        defaultChecked={checked}
      />
    </label>
  );
}

/**
 * Radio buttons container props
 */
export interface RadioButtonsProps {
  name?: string;
  children?: React.ReactNode;
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  selected?: string;
  class?: string;
  wide?: boolean;
  encodeFn?: (value: string) => string;
  decodeFn?: (value: string) => string;
  allowEmpty?: boolean;
}

/**
 * Radio buttons container component
 */
export function RadioButtons({
  name,
  children,
  onChange,
  selected,
  class: className,
  wide,
  encodeFn,
  decodeFn,
  allowEmpty
}: RadioButtonsProps) {
  const normalizedEncodeFn = encodeFn || ((v: string) => v);
  const normalizedDecodeFn = decodeFn || ((v: string) => v);

  // TODO: const nitems = array.normalizeToArray(children).filter(Boolean).length;
  const nitems = React.Children.count(children);

  // TODO: const width = wide ? 'unset' : formats.formatPixels(4 * (nitems - 1) + 32 * nitems);
  const width = wide ? 'unset' : `${4 * (nitems - 1) + 32 * nitems}px`;

  const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    // TODO: const value = dom.getTargetVal(event);
    const value = input.value;

    // Only allow null values when the "allow-empty" prop is true
    const finalValue = allowEmpty && value === selected ? undefined : value;

    if (onChange) {
      onChange(normalizedDecodeFn(finalValue || ''), event);
    }
    // TODO: dom.blur(input);
  }, [onChange, selected, allowEmpty, normalizedDecodeFn]);

  const contextValue = {
    allowEmpty,
    onChange: handleChange,
    selected,
    name,
    encodeFn: normalizedEncodeFn
  };

  return (
    <RadioButtonContext.Provider value={contextValue}>
      <div
        className={`${className || ''} radio-btn-wrapper`}
        style={{ width }}
        key={`${name}-${selected}`}
      >
        {children}
      </div>
    </RadioButtonContext.Provider>
  );
}
