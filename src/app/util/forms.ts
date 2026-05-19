// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { tr } from './i18n';

/**
 * Form error
 */
export interface FormError {
  message: string;
}

/**
 * Form state
 */
export interface FormState<T = unknown> {
  initial: T;
  data: T;
  errors: Record<string, FormError>;
  touched: Record<string, boolean>;
  extraErrors?: Record<string, FormError>;
  valid?: boolean;
  cleanData?: T;
}

/**
 * Form validator
 */
export type FormValidator = (errors: Record<string, FormError>, data: unknown) => Record<string, FormError>;

/**
 * Form options
 */
export interface FormOptions {
  initial: unknown;
  schema?: unknown;
  validators?: FormValidator[];
}

/**
 * Form reference interface
 */
export interface FormRef<T = unknown> {
  get<K extends keyof T>(key: K): T[K];
  set<K extends keyof T>(key: K, value: T[K]): void;
  swap(fn: (state: FormState<T>) => FormState<T>): void;
  reset(value?: FormState<T>): void;
  readonly errors: Record<string, FormError>;
  readonly touched: Record<string, boolean>;
  readonly valid: boolean;
  readonly cleanData?: T;
}

/**
 * Get error class name for a field
 */
export function errorClass<T>(form: FormRef<T>, field: keyof T): string | undefined {
  const errors = form.errors as Record<string, FormError>;
  const touched = form.touched as Record<string, boolean>;
  const fieldKey = String(field);

  if (errors[fieldKey] && touched[fieldKey]) {
    return 'invalid';
  }
  return undefined;
}

/**
 * Handle input change event
 */
export function onInputChange<T>(
  form: FormRef<T>,
  field: keyof T,
  value: unknown,
  trim = false
): void {
  const actualValue = trim && typeof value === 'string' ? value.trim() : value;
  const fieldKey = String(field);

  form.swap(state => {
    const newErrors = { ...state.errors };
    const newExtraErrors = { ...state.extraErrors };
    const newTouched = { ...state.touched };

    delete newErrors[fieldKey];
    delete newExtraErrors[fieldKey];
    newTouched[fieldKey] = true;

    return {
      ...state,
      data: { ...state.data, [fieldKey]: actualValue },
      errors: newErrors,
      extraErrors: newExtraErrors,
      touched: newTouched
    };
  });
}

/**
 * Update input value without validation
 */
export function updateInputValue<T>(form: FormRef<T>, field: keyof T, value: T[keyof T]): void {
  const fieldKey = String(field);

  form.swap(state => {
    const newErrors = { ...state.errors };
    delete newErrors[fieldKey];

    return {
      ...state,
      data: { ...state.data, [fieldKey]: value },
      errors: newErrors
    };
  });
}

/**
 * Handle input blur event
 */
export function onInputBlur<T>(form: FormRef<T>, field: keyof T): (event: FocusEvent) => void {
  const fieldKey = String(field);

  return () => {
    if (!form.touched[fieldKey]) {
      form.swap(state => ({
        ...state,
        touched: { ...state.touched, [fieldKey]: true }
      }));
    }
  };
}

/**
 * Translate error code
 */
function translateCode(code: string | string[]): string {
  // TODO: Import tr
  // if (Array.isArray(code)) {
  //   return tr(code[0], c(code[1]));
  // }
  // return tr(code);
  return String(code);
}

/**
 * Handle schema problem error
 */
function handleSchemaProblem(problem: { schema?: Record<string, unknown>; type?: string; in?: unknown; value?: unknown }): FormError {
  const props = problem.schema as Record<string, unknown> | undefined;
  const field = props?.errorField ?? problem.in ?? [];

  if (props?.errorFn) {
    return props.errorFn(problem);
  }

  if (props?.errorMessage) {
    return { message: String(props.errorMessage) };
  }

  if (props?.errorCode) {
    return { message: translateCode(props.errorCode as string | string[]) };
  }

  return { message: 'errors.invalid-data' };
}

/**
 * Interpret schema problem
 */
function interpretSchemaProblem(acc: Record<string, FormError>, problem: unknown): Record<string, FormError> {
  // TODO: Implement full schema interpretation
  // const props = problem.schema?.properties ?? problem.schema?.typeProperties;
  // const field = props?.errorField ?? problem.in;
  // ... full implementation

  return acc;
}

/**
 * Collect schema errors
 */
function collectSchemaErrors(
  schema: unknown,
  validators: FormValidator[],
  state: FormState
): Record<string, FormError> | undefined {
  // TODO: Implement schema validation
  // const explain = explainSchema(schema, state.data);
  // const errors = reduce(interpretSchemaProblem, {}, explain.errors);
  // const validatorErrors = validators.reduce((errors, fn) => merge(errors, fn(errors, state.data)), {});
  // const merged = merge(state.errors, errors, validatorErrors);
  // return withoutNils(merged);

  return undefined;
}

/**
 * Use form hook (simplified version without React)
 */
export function useForm(options: FormOptions): FormRef {
  const { initial = {} } = options;

  const initialState: FormState = {
    initial,
    data: initial,
    errors: {},
    touched: {}
  };

  let currentState = { ...initialState };

  const form: FormRef = {
    get<K extends keyof FormState>(key: K): FormState[K] {
      return currentState[key];
    },
    set<K extends keyof FormState>(key: K, value: FormState[K]): void {
      currentState = { ...currentState, [key]: value };
    },
    swap(fn: (state: FormState) => FormState): void {
      currentState = fn(currentState);
    },
    reset(value?: FormState): void {
      currentState = value ?? { ...initialState };
    },
    get errors() {
      return currentState.errors;
    },
    get touched() {
      return currentState.touched;
    },
    get valid() {
      return currentState.valid ?? false;
    },
    get cleanData() {
      return currentState.cleanData;
    }
  };

  return form;
}
