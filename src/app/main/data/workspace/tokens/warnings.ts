import { tr } from "app/util/i18n";
import { join } from "cuerdas";

interface WarningCode {
  code: string;
  fn?: (value: any) => string;
  message?: string;
}

export const warningCodes: Record<string, WarningCode> = {
  "warning.style-dictionary/invalid-referenced-token-value-opacity": {
    code: "warning.style-dictionary/invalid-referenced-token-value-opacity",
    fn: (value) =>
      join("\n", [
        `${tr("workspace.tokens.resolved-value", value)}.`,
        tr("workspace.tokens.opacity-range"),
      ]),
  },
  "warning.style-dictionary/invalid-referenced-token-value-stroke-width": {
    code: "warning.style-dictionary/invalid-referenced-token-value-stroke-width",
    fn: (value) =>
      join("\n", [
        `${tr("workspace.tokens.resolved-value", value)}.`,
        tr("workspace.tokens.stroke-width-range"),
      ]),
  },
  "warning/unknown": {
    code: "warning/unknown",
    message: "Unknown warning",
  },
};

const unknownWarning: WarningCode = {
  code: "warning/unknown",
  message: "Unknown warning",
};

export function getWarningCode(warningKey: string): WarningCode {
  return warningCodes[warningKey] || unknownWarning;
}

export function warningWithValue(warningKey: string, warningValue: any): WarningCode {
  const warning = getWarningCode(warningKey);
  return { ...warning, value: warningValue };
}

export function humanizeWarnings(warnings: WarningCode[]): (string | WarningCode)[] {
  return warnings.map((warn) => {
    if (warn.fn) return warn.fn((warn as any).value);
    if (warn.message) return warn.message;
    return warn;
  });
}
