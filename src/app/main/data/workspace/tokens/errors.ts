import { tr } from "app/util/i18n";
import { join } from "cuerdas";

interface ErrorCode {
  code: string;
  fn?: (value: any) => string;
  detail?: (value: any) => string;
}

export const errorCodes: Record<string, ErrorCode> = {
  "error.import/json-parse-error": {
    code: "error.import/json-parse-error",
    fn: () => tr("workspace.tokens.error-parse"),
  },
  "error.import/no-token-files-found": {
    code: "error.import/no-token-files-found",
    fn: () => tr("workspace.tokens.no-token-files-found"),
  },
  "error.import/invalid-json-data": {
    code: "error.import/invalid-json-data",
    fn: () => tr("workspace.tokens.invalid-json"),
  },
  "error.import/invalid-token-name": {
    code: "error.import/invalid-token-name",
    fn: () => tr("workspace.tokens.invalid-json-token-name"),
    detail: (v) => tr("workspace.tokens.invalid-json-token-name-detail", v),
  },
  "error.import/style-dictionary-reference-errors": {
    code: "error.import/style-dictionary-reference-errors",
    fn: (v) => `${tr("workspace.tokens.import-error")}\n\n${Array.isArray(v) ? v[0] : v}`,
    detail: (v) => join("\n\n", Array.isArray(v) ? v.slice(1) : []),
  },
  "error.import/style-dictionary-unknown-error": {
    code: "error.import/style-dictionary-reference-errors",
    fn: () => tr("workspace.tokens.import-error"),
  },
  "error.token/empty-input": {
    code: "error.token/empty-input",
    fn: () => tr("workspace.tokens.empty-input"),
  },
  "error.token/direct-self-reference": {
    code: "error.token/direct-self-reference",
    fn: () => tr("workspace.tokens.self-reference"),
  },
  "error.token/invalid-color": {
    code: "error.token/invalid-color",
    fn: (v) => `${tr("workspace.tokens.invalid-color", v)}`,
  },
  "error.token/number-too-large": {
    code: "error.token/number-too-large",
    fn: (v) => `${tr("workspace.tokens.number-too-large", v)}`,
  },
  "error.style-dictionary/missing-reference": {
    code: "error.style-dictionary/missing-reference",
    fn: (v) => `${tr("workspace.tokens.missing-references")}${join(" ", Array.isArray(v) ? v : [v])}`,
  },
  "error.style-dictionary/invalid-token-value": {
    code: "error.style-dictionary/invalid-token-value",
    fn: (v) => `${tr("workspace.tokens.invalid-value", v)}`,
  },
  "error.style-dictionary/value-with-units": {
    code: "error.style-dictionary/value-with-units",
    fn: () => tr("workspace.tokens.value-with-units"),
  },
  "error.style-dictionary/value-with-percent": {
    code: "error.style-dictionary/value-with-percent",
    fn: () => tr("workspace.tokens.value-with-percent"),
  },
  "error.style-dictionary/invalid-token-value-opacity": {
    code: "error.style-dictionary/invalid-token-value-opacity",
    fn: (v) =>
      `${tr("workspace.tokens.invalid-value", v)}. ${tr("workspace.tokens.opacity-range")}`,
  },
  "error.style-dictionary/invalid-token-value-stroke-width": {
    code: "error.style-dictionary/invalid-token-value-stroke-width",
    fn: (v) =>
      `${tr("workspace.tokens.invalid-value", v)}. ${tr("workspace.tokens.stroke-width-range")}`,
  },
  "error.style-dictionary/invalid-token-value-text-case": {
    code: "error.style-dictionary/invalid-token-value-text-case",
    fn: (v) => tr("workspace.tokens.invalid-text-case-token-value", v),
  },
  "error.style-dictionary/invalid-token-value-text-decoration": {
    code: "error.style-dictionary/invalid-token-value-text-decoration",
    fn: (v) => tr("workspace.tokens.invalid-text-decoration-token-value", v),
  },
  "error.style-dictionary/invalid-token-value-font-weight": {
    code: "error.style-dictionary/invalid-token-value-font-weight",
    fn: (v) => tr("workspace.tokens.invalid-font-weight-token-value", v),
  },
  "error.style-dictionary/invalid-token-value-font-family": {
    code: "error.style-dictionary/invalid-token-value-font-family",
    fn: (v) => tr("workspace.tokens.invalid-font-family-token-value", v),
  },
  "error.style-dictionary/invalid-token-value-typography": {
    code: "error.style-dictionary/invalid-token-value-typography",
    fn: (v) => tr("workspace.tokens.invalid-token-value-typography", v),
  },
  "error.style-dictionary/composite-line-height-needs-font-size": {
    code: "error.style-dictionary/composite-line-height-needs-font-size",
    fn: (v) => tr("workspace.tokens.composite-line-height-needs-font-size", v),
  },
  "error.style-dictionary/invalid-token-value-shadow-type": {
    code: "error.style-dictionary/invalid-token-value-shadow-type",
    fn: (v) => tr("workspace.tokens.invalid-shadow-type-token-value", v),
  },
  "error.style-dictionary/invalid-token-value-shadow-blur": {
    code: "error.style-dictionary/invalid-token-value-shadow-blur",
    fn: () => tr("workspace.tokens.shadow-blur-range"),
  },
  "error.style-dictionary/invalid-token-value-shadow-spread": {
    code: "error.style-dictionary/invalid-token-value-shadow-spread",
    fn: () => tr("workspace.tokens.shadow-spread-range"),
  },
  "error.style-dictionary/invalid-token-value-shadow": {
    code: "error.style-dictionary/invalid-token-value-shadow",
    fn: (v) => tr("workspace.tokens.invalid-token-value-shadow", v),
  },
  "error/unknown": {
    code: "error/unknown",
    fn: () => tr("labels.unknown-error"),
  },
};

const unknownError: ErrorCode = {
  code: "error/unknown",
  fn: () => tr("labels.unknown-error"),
};

export function getErrorCode(errorKey: string): ErrorCode {
  return errorCodes[errorKey] || unknownError;
}

export function errorWithValue(errorKey: string, errorValue: any): ErrorCode {
  const error = getErrorCode(errorKey);
  return { ...error, value: errorValue };
}

export function errorExInfo(errorKey: string, errorValue: any, exception: any): Error {
  const err = { ...errorWithValue(errorKey, errorValue), exception };
  return new Error(err.code);
}

export function hasErrorCode(errorKey: string, errors: ErrorCode[]): boolean {
  return errors.some((e) => e.code === errorKey);
}

export function resolveErrorMessage(error: ErrorCode): string {
  if (error.fn) {
    return error.fn((error as any).value);
  }
  return (error as any).message;
}

export function resolveErrorAssocMessage(error: ErrorCode): ErrorCode {
  if (error.fn) {
    return { ...error, message: error.fn((error as any).value) };
  }
  return error;
}

export function humanizeErrors(errors: ErrorCode[]): string[] {
  return errors.map((err) => {
    if (err.fn) return err.fn((err as any).value);
    if ((err as any).message) return (err as any).message;
    return err as any;
  });
}

export function detailErrors(errors: ErrorCode[]): string[] | null {
  const details = errors
    .map((err) => {
      if ((err as any).detail) {
        return (err as any).detail((err as any).value);
      }
      return null;
    })
    .filter((d) => d !== null && d !== undefined);
  return details.length > 0 ? details : null;
}
