// This Source Code Form is subject to terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { css, cssCase } from '../../main/style';
// import { fm } from '../../../util/forms';
// import { d } from '../../../common/data';
// import { dom } from '../../../util/dom';
// import { i18n, tr } from '../../../util/i18n';
// import { kbd } from '../../../util/keyboard';
// import { str } from 'cuerdas.core';
// import { cs } from './select';
// import { hooks } from '../hooks';
// import { deprecatedIcon } from '../icons';

/**
 * Form state type
 */
export interface FormState {
  data: Record<string, any>;
  errors: Record<string, { message?: string; code?: string | string[] }>;
  extraErrors: Record<string, { message?: string; code?: string | string[] }>;
  touched: Record<string, boolean>;
  valid: boolean;
}

/**
 * Form context type
 */
export interface FormContextValue extends FormState {
  setData?: (name: string, value: any) => void;
  setTouched?: (name: string, touched: boolean) => void;
  setError?: (name: string, error: { message?: string; code?: string | string[] }) => void;
}

/**
 * Form context
 */
const FormContext = React.createContext<FormContextValue | null>(null);

/**
 * useForm hook
 */
// TODO: export function useForm() { return fm.useForm(); }
export function useForm() {
  // TODO: Implement form state management
  const [form, setForm] = React.useState<FormState>({
    data: {},
    errors: {},
    extraErrors: {},
    touched: {},
    valid: true
  });
  return form;
}

/**
 * Input component props
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'form'> {
  form?: FormState;
  label?: string;
  helpIcon?: React.ReactNode;
  disabled?: boolean;
  hint?: string;
  trim?: boolean;
  children?: React.ReactNode;
  'data-testid'?: string;
  onChangeValue?: (name: string, value: string) => void;
  placeholder?: string;
  showSuccess?: boolean;
  showError?: boolean;
}

/**
 * Input component
 */
export function Input({
  form: formProp,
  label,
  helpIcon,
  disabled,
  hint,
  trim,
  children,
  'data-testid': dataTestId,
  onChangeValue,
  placeholder,
  showSuccess = false,
  showError = true,
  ...props
}: InputProps) {
  const inputType = props.type || 'text';
  const inputName = props.name;
  const moreClasses = props.className;
  const autoFocus = props.autoFocus || false;

  const dataTestIdFinal = dataTestId || inputName;

  const contextForm = React.useContext(FormContext);
  const form = formProp || contextForm;
  const formState = form || { data: {}, touched: {}, errors: {} };

  const [typeState, setTypeState] = React.useState(inputType);
  const [focus, setFocus] = React.useState(false);

  const isCheckbox = typeState === 'checkbox';
  const isRadio = typeState === 'radio';
  const isText = typeState === 'password' || typeState === 'text' || typeState === 'email';

  const inputPlaceholder = isText ? (placeholder || label) : undefined;

  const touched = inputName && formState.data[inputName] !== undefined && formState.touched[inputName];
  const error = formState.errors[inputName] || formState.extraErrors?.[inputName];
  const value = inputName ? (formState.data[inputName] ?? '') : '';

  let helpIconFinal = helpIcon;
  if (inputType === 'password' && typeState === 'password') {
    // TODO: helpIconFinal = deprecatedIcon.shown;
    helpIconFinal = <span>👁️</span>;
  } else if (inputType === 'password' && typeState === 'text') {
    // TODO: helpIconFinal = deprecatedIcon.hide;
    helpIconFinal = <span>👁️‍🗨️</span>;
  }

  const onChangeValueFinal = onChangeValue || (() => {});

  const swapTextPassword = () => {
    setTypeState(typeState === 'password' ? 'text' : 'password');
  };

  const handleFocus = () => setFocus(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: const newValue = dom.getInputValue(dom.getTarget(event));
    const newValue = event.target.value;

    // TODO: if (form) { fm.onInputChange(form, inputName, newValue, trim); }
    if (form) {
      setForm(prev => ({ ...prev, touched: { ...prev.touched, [inputName]: true } }));
    }

    onChangeValueFinal(inputName!, newValue);
  };

  const handleBlur = () => setFocus(false);

  const handleClick = () => {
    if (!formState.touched[inputName!]) {
      setForm(prev => ({ ...prev, touched: { ...prev.touched, [inputName]: true } }));
    }
  };

  const inputProps: React.InputHTMLAttributes<HTMLInputElement> = {
    ...props,
    id: inputName,
    value,
    autoFocus,
    onClick: isRadio || isCheckbox ? handleClick : undefined,
    onFocus: handleFocus,
    onBlur: handleBlur,
    placeholder: inputPlaceholder,
    onChange: handleChange,
    type: typeState,
    tabIndex: 0,
    helpIcon: undefined,
    form: undefined,
    trim: undefined,
    children: undefined,
    showSuccess: undefined,
    autoFocus: undefined,
    label: undefined,
    className: moreClasses
  };

  if (value && isCheckbox) {
    (inputProps as any).defaultChecked = true;
  }

  if (touched && error?.message) {
    inputProps['aria-invalid'] = 'true';
    inputProps['aria-describedby'] = `error-${inputName}`;
  }

  const checked = isCheckbox && value === true;
  const showValid = showSuccess && touched && !error;
  const showInvalid = touched && !!error;

  return (
    <div className={`input-wrapper ${showValid ? 'valid' : ''} ${showInvalid ? 'invalid' : ''} ${isCheckbox ? 'checkbox' : ''} ${disabled ? 'disabled' : ''}`}>
      <div>
        {label ? (
          <label
            className={`input-with-label-form ${isText ? 'input-label' : ''} ${isRadio ? 'radio-label' : ''} ${isCheckbox ? 'checkbox-label' : ''}`}
            tabIndex={-1}
            htmlFor={inputName}
          >
            {label}
            {isCheckbox && (
              <span className={`${checked ? 'checked' : ''}`}>
                {checked && <span className="status-tick">✓</span>}
              </span>
            )}
            {isCheckbox ? (
              <input {...inputProps} />
            ) : (
              <div className="input-and-icon">
                <input {...inputProps} />
                {helpIconFinal && (
                  <span
                    className="help-icon"
                    onClick={inputType === 'password' ? swapTextPassword : undefined}
                  >
                    {helpIconFinal}
                  </span>
                )}
                {showValid && <span className="valid-icon">✓</span>}
                {showInvalid && <span className="invalid-icon">✕</span>}
              </div>
            )}
          </label>
        ) : children ? (
          <label htmlFor={inputName}>
            <input {...inputProps} />
            {children}
          </label>
        ) : null}

        {touched && error?.message && showError ? (
          <div id={`error-${inputName}`} className="error" data-testid={`${dataTestIdFinal}-error`}>
            {error.message}
          </div>
        ) : touched && error?.code && showError ? (
          <div id={`error-${inputName}`} className="error" data-testid={`${dataTestIdFinal}-error`}>
            {/* TODO: i18n.c(error.code) */}
            <span>{String(error.code)}</span>
          </div>
        ) : hint && typeof hint === 'string' ? (
          <div className="hint">{hint}</div>
        ) : null}
      </div>
    </div>
  );
}

/**
 * Textarea component props
 */
export interface TextareaProps {
  form?: FormState;
  label?: string;
  disabled?: boolean;
  hint?: string;
  trim?: boolean;
}

/**
 * Textarea component
 */
export function Textarea({
  form: formProp,
  label,
  disabled,
  hint,
  trim,
  ...props
}: TextareaProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const inputName = props.name;

  const contextForm = React.useContext(FormContext);
  const form = formProp || contextForm;
  const formState = form || { data: {}, touched: {}, errors: {} };

  const [focus, setFocus] = React.useState(false);

  const touched = inputName && formState.data[inputName] !== undefined && formState.touched[inputName];
  const error = formState.errors[inputName];
  const value = inputName ? (formState.data[inputName] ?? '') : '';

  const klass = `textarea-wrapper ${focus ? 'focus' : ''} ${touched && !error ? 'valid' : ''} ${touched && error ? 'invalid' : ''} ${disabled ? 'disabled' : ''}`;

  const handleFocus = () => setFocus(true);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    // TODO: const newValue = dom.getValue(dom.getTarget(event));
    const newValue = event.target.value;
    // TODO: fm.onInputChange(form, inputName, newValue, trim);
  };

  const handleBlur = () => {
    setFocus(false);
    if (!formState.touched[inputName!]) {
      setForm(prev => ({ ...prev, touched: { ...prev.touched, [inputName]: true } }));
    }
  };

  const textareaProps: React.TextareaHTMLAttributes<HTMLTextAreaElement> = {
    ...props,
    value,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: handleChange,
    helpIcon: undefined,
    form: undefined,
    trim: undefined,
    placeholder: label
  };

  return (
    <div className={klass}>
      <label className="textarea-label">{label}</label>
      <textarea {...textareaProps} />
      {touched && error?.message ? (
        <span className="error">{error.message}</span>
      ) : touched && error?.code ? (
        <span className="error">{/* TODO: tr(error.code) */ String(error.code)}</span>
      ) : hint && typeof hint === 'string' ? (
        <span className="hint">{hint}</span>
      ) : null}
    </div>
  );
}

/**
 * Form select component props
 */
export interface FormSelectProps {
  form?: FormState;
  options: any[];
  disabled?: boolean;
  default?: string;
  dropdownClass?: string;
  selectClass?: string;
}

/**
 * Form select component
 */
export function FormSelect({
  form: formProp,
  options,
  disabled,
  default: defaultOption = '',
  dropdownClass,
  selectClass,
  ...props
}: FormSelectProps & { name?: string }) {
  const inputName = props.name;

  const contextForm = React.useContext(FormContext);
  const form = formProp || contextForm;
  const formState = form || { data: {} };

  const value = inputName ? (formState.data[inputName] ?? defaultOption) : defaultOption;

  const handleChange = (newValue: string) => {
    // TODO: fm.onInputChange(form, inputName, newValue);
  };

  return (
    <div className="select-wrapper">
      {/* TODO: cs.select({ defaultValue: value, disabled, options, class: selectClass, dropdownClass, onChange: handleChange }) */}
      <select value={value} onChange={e => handleChange(e.target.value)}>
        {options.map((opt, i) => (
          <option key={i} value={typeof opt === 'object' ? opt.value : opt}>
            {typeof opt === 'object' ? opt.label : opt}
          </option>
        ))}
      </select>
    </div>
  );
}

/**
 * Radio button option type
 */
export interface RadioOption {
  image?: string;
  icon?: React.ReactNode;
  value: string;
  label: string;
  area?: string;
}

/**
 * Radio buttons component props
 */
export interface RadioButtonsFormProps {
  form?: FormState;
  name?: string;
  image?: boolean;
  value?: string;
  onChange?: (name: string, value: string) => void;
  options: RadioOption[];
  trim?: boolean;
  class?: string;
  encodeFn?: (value: string) => string;
  decodeFn?: (value: string) => string;
}

/**
 * Radio buttons component (form version)
 */
export function RadioButtonsForm({
  form: formProp,
  name,
  image,
  value: valueProp,
  onChange,
  options,
  trim,
  class: className,
  encodeFn,
  decodeFn
}: RadioButtonsFormProps) {
  const contextForm = React.useContext(FormContext);
  const form = formProp || contextForm;
  const formState = form || { data: {} };

  const currentValue = name ? (formState.data[name] ?? valueProp ?? '') : valueProp ?? '';

  const normalizedEncodeFn = encodeFn || ((v: string) => v);
  const normalizedDecodeFn = decodeFn || ((v: string) => v);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: const newValue = normalizedDecodeFn(dom.getValue(dom.getTarget(event)));
    const newValue = normalizedDecodeFn(event.target.value);

    if (form) {
      setForm(prev => ({ ...prev, touched: { ...prev.touched, [name]: true } }));
      // TODO: fm.onInputChange(form, name, newValue, trim);
    }

    if (onChange) {
      onChange(name!, newValue);
    }
  };

  const finalClassName = image ? className : `${className || ''} custom-radio`;

  return (
    <div className={finalClassName}>
      {options.map(opt => {
        const hasImage = !!opt.image;
        const hasIcon = !!opt.icon;
        const encodedValue = normalizedEncodeFn(opt.value);
        const checked = opt.value === currentValue;
        const key = `${name}-${encodedValue}`;

        return (
          <label
            key={key}
            htmlFor={key}
            style={{ gridArea: opt.area }}
            className={`radio-label ${checked ? 'checked' : ''} ${hasImage || hasIcon ? 'with-image' : ''}`}
          >
            {hasImage ? (
              <span style={{ backgroundImage: `url(${opt.image})` }} className="image-inside" />
            ) : hasIcon ? (
              <span className="icon-inside">{opt.icon}</span>
            ) : (
              <span className={`radio-icon ${checked ? 'checked' : ''}`}>
                {checked && <span className="radio-dot" />}
              </span>
            )}
            {opt.label}
            <input
              onChange={handleChange}
              type="radio"
              className="radio-input"
              id={key}
              name={name}
              value={encodedValue}
              checked={checked}
            />
          </label>
        );
      })}
    </div>
  );
}

/**
 * Image radio buttons component props
 */
export interface ImageRadioButtonsProps extends RadioButtonsFormProps {
  imgHeight?: string;
  imgWidth?: string;
}

/**
 * Image radio buttons component
 */
export function ImageRadioButtons({
  form: formProp,
  name,
  image,
  imgHeight,
  imgWidth,
  value: valueProp,
  onChange,
  options,
  trim,
  class: className,
  encodeFn,
  decodeFn
}: ImageRadioButtonsProps) {
  const contextForm = React.useContext(FormContext);
  const form = formProp || contextForm;
  const formState = form || { data: {} };

  const currentValue = name ? (formState.data[name] ?? valueProp ?? '') : valueProp ?? '';

  const normalizedEncodeFn = encodeFn || ((v: string) => v);
  const normalizedDecodeFn = decodeFn || ((v: string) => v);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: const newValue = normalizedDecodeFn(dom.getValue(dom.getTarget(event)));
    const newValue = normalizedDecodeFn(event.target.value);

    if (form) {
      setForm(prev => ({ ...prev, touched: { ...prev.touched, [name]: true } }));
      // TODO: fm.onInputChange(form, name, newValue, trim);
    }

    if (onChange) {
      onChange(name!, newValue);
    }
  };

  const finalClassName = image ? className : `${className || ''} custom-radio`;

  return (
    <div className={finalClassName}>
      {options.map(opt => {
        const hasIcon = !!opt.icon;
        const encodedValue = normalizedEncodeFn(opt.value);
        const checked = opt.value === currentValue;
        const key = `${name}-${encodedValue}`;

        return (
          <label
            key={key}
            htmlFor={key}
            style={{ gridArea: opt.area }}
            className={`radio-label-image ${checked ? 'checked' : ''}`}
          >
            {hasIcon ? (
              <span className="icon-inside" style={{ height: imgHeight, width: imgWidth }}>
                {opt.icon}
              </span>
            ) : (
              <span
                style={{ backgroundImage: `url(${opt.image})`, height: imgHeight, width: imgWidth }}
                className="image-inside"
              />
            )}
            <span className="image-text">{opt.label}</span>
            <input
              onChange={handleChange}
              type="radio"
              className="radio-input"
              id={key}
              name={name}
              value={encodedValue}
              checked={checked}
            />
          </label>
        );
      })}
    </div>
  );
}

/**
 * Submit button component props
 */
export interface SubmitButtonProps {
  onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  children?: React.ReactNode;
  label?: string;
  form?: FormState;
  class?: string;
  name?: string;
  disabled?: boolean;
}

/**
 * Submit button component
 */
export function SubmitButton({
  onClick,
  children,
  label,
  form: formProp,
  class: className,
  name,
  disabled: disabledProp,
  ...props
}: SubmitButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const contextForm = React.useContext(FormContext);
  const form = formProp || contextForm;

  const disabled = (form && !form.valid) || disabledProp;

  const finalClassName = className || 'button-submit';
  const finalName = name || 'submit';

  const onKeyDown = React.useCallback((event: React.KeyboardEvent) => {
    // TODO: if (kbd.enter(event) && onClick) onClick(event);
    if (event.key === 'Enter' && onClick) onClick(event);
  }, [onClick]);

  const buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement> = {
    ...props,
    children: undefined,
    disabled,
    onKeyDown,
    name: finalName,
    labek: undefined,
    className: finalClassName,
    type: 'submit'
  };

  return (
    <button {...buttonProps}>
      {children || <span>{label}</span>}
    </button>
  );
}

/**
 * Form container component props
 */
export interface FormContainerProps {
  onSubmit?: (form: FormState, event: React.FormEvent) => void;
  form: FormState;
  children?: React.ReactNode;
  class?: string;
}

/**
 * Form container component
 */
export function FormContainer({ onSubmit, form, children, className }: FormContainerProps) {
  const handleSubmit = React.useCallback((event: React.FormEvent) => {
    event.preventDefault();
    if (onSubmit) onSubmit(form, event);
  }, [onSubmit, form]);

  return (
    <FormContext.Provider value={form}>
      <form className={className} onSubmit={handleSubmit}>
        {children}
      </form>
    </FormContext.Provider>
  );
}

/**
 * Multi input item type
 */
export interface MultiInputItem {
  text: string;
  valid: boolean;
  caution?: boolean;
}

/**
 * Multi input component props
 */
export interface MultiInputProps {
  form?: FormState;
  label?: string;
  class?: string;
  name?: string;
  trim?: boolean;
  validItemFn?: (value: string) => boolean;
  cautionItemFn?: (value: string) => boolean;
  onSubmit?: (form: FormState, event: React.KeyboardEvent) => void;
  autoFocus?: boolean;
}

/**
 * Multi input component
 */
export function MultiInput({
  form: formProp,
  label,
  class: className,
  name,
  trim,
  validItemFn,
  cautionItemFn,
  onSubmit,
  autoFocus = false,
  ...props
}: MultiInputProps & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'form'>) {
  const contextForm = React.useContext(FormContext);
  const form = formProp || contextForm;
  const formState = form || { data: {}, touched: {}, errors: {} };

  const inputName = name || props.name;
  const touched = inputName ? formState.touched[inputName] : false;
  const error = inputName ? formState.errors[inputName] : undefined;

  const [focus, setFocus] = React.useState(false);
  const [items, setItems] = React.useState<MultiInputItem[]>(() => {
    const initial = inputName ? formState.data[inputName] : undefined;
    if (Array.isArray(initial) || initial instanceof Set) {
      return (Array.from(initial) as string[]).map(val => ({
        text: val,
        valid: validItemFn?.(val) ?? true,
        caution: cautionItemFn?.(val)
      }));
    }
    return [];
  });

  const [inputValue, setInputValue] = React.useState('');

  const validItemFnFinal = validItemFn || (() => true);
  const cautionItemFnFinal = cautionItemFn || (() => false);

  const empty = inputValue === '' && items.length === 0;

  const klass = `${props.className || ''} ${focus ? 'focus' : ''} ${touched && !error ? 'valid' : ''} ${touched && error ? 'invalid' : ''} ${empty ? 'empty' : ''} custom-multi-input`;

  const inputKlass = `${className || ''} inside-input ${items.length > 0 ? 'no-padding' : ''} ${validItemFn && touched && inputValue !== '' && !validItemFnFinal(inputValue) ? 'invalid' : ''}`;

  const handleFocus = () => setFocus(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const content = event.target.value;
    setInputValue(content);
  };

  const updateForm = React.useCallback((items: MultiInputItem[]) => {
    const value = items.map(i => i.text).join(' ');
    // TODO: fm.updateInputValue(form, inputName, value);
  }, [form, inputName]);

  const handleKeyDown = React.useCallback((event: React.KeyboardEvent) => {
    const val = trim ? inputValue.trim() : inputValue;
    // TODO: const enter = kbd.enter(event);
    // TODO: const comma = kbd.comma(event);
    // TODO: const space = kbd.space(event);
    // TODO: const backspace = kbd.backspace(event);
    const enter = event.key === 'Enter';
    const comma = event.key === ',';
    const space = event.key === ' ';
    const backspace = event.key === 'Backspace';

    if (enter || comma || space) {
      event.preventDefault();
      event.stopPropagation();

      // Mark as touched when enter is pressed
      if (form && inputName) {
        setForm(prev => ({ ...prev, touched: { ...prev.touched, [inputName]: true } }));
      }

      // Empty value with enter submits form
      if (enter && inputValue === '' && items.length > 0 && onSubmit) {
        onSubmit(form, event);
      }

      // Add valid items
      if (validItemFnFinal(val) && inputValue !== '') {
        setInputValue('');

        // Form is back as "untouched" after adding
        if (form && inputName) {
          setForm(prev => ({ ...prev, touched: { ...prev.touched, [inputName]: false } }));
        }

        // Split comma/space separated values
        const splitValues = val.split(/,|\s+/).filter(Boolean);
        setItems(prev => {
          const newItems = splitValues.map(v => ({
            text: v.trim(),
            valid: validItemFnFinal(v.trim()),
            caution: cautionItemFnFinal(v.trim())
          }));
          const allItems = [...prev, ...newItems];
          // Remove duplicates
          const uniqueMap = new Map(allItems.map(i => [i.text, i]));
          return Array.from(uniqueMap.values());
        });
      }
    }

    if (backspace && inputValue === '') {
      event.preventDefault();
      event.stopPropagation();
      setItems(prev => (prev.length === 0 ? prev : prev.slice(0, -1)));
    }
  }, [inputValue, trim, validItemFnFinal, cautionItemFnFinal, items, form, inputName, onSubmit]);

  const handleBlur = () => {
    setFocus(false);
    if (form && inputName && !formState.touched[inputName]) {
      setForm(prev => ({ ...prev, touched: { ...prev.touched, [inputName]: true } }));
    }
  };

  const removeItem = React.useCallback((item: MultiInputItem) => {
    setItems(prev => prev.filter(i => i !== item));
  }, []);

  const manageItemKeyDown = React.useCallback((item: MultiInputItem, event: React.KeyboardEvent) => {
    // TODO: if (kbd.enter(event)) removeItem(item);
    if (event.key === 'Enter') removeItem(item);
  }, [removeItem]);

  React.useEffect(() => {
    const val = trim ? inputValue.trim() : inputValue;
    const values = [...items, { text: val, valid: validItemFnFinal(val) }];
    const validValues = values.filter(v => v.valid);
    updateForm(validValues);
  }, [items, inputValue, trim, validItemFnFinal, updateForm]);

  return (
    <div className={klass}>
      <input
        id={inputName}
        className={inputKlass}
        type="text"
        autoFocus={autoFocus}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        value={inputValue}
        onChange={handleChange}
        placeholder={empty ? label : undefined}
      />
      <label htmlFor={inputName}>{label}</label>

      {items.length > 0 && (
        <div className="selected-items">
          {items.map((item, index) => (
            <div
              key={item.text}
              className={`selected-item ${!item.valid ? 'invalid' : ''} ${item.caution ? 'caution' : ''}`}
              tabIndex={0}
              onKeyDown={e => manageItemKeyDown(item, e)}
            >
              <span className="around">
                <span className="text">{item.text}</span>
                <button
                  className="icon"
                  onClick={() => removeItem(item)}
                >
                  {/* deprecated-icon/close */}
                  <span>✕</span>
                </button>
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
