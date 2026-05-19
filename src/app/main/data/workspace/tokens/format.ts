import * as ts from "app/main/data/tokenscript";
import { join } from "cuerdas";

const categoryDictionary: Record<string, string> = {
  "stroke-width": "Stroke Width",
  "spacing": "Spacing",
  "sizing": "Sizing",
  "border-radius": "Border Radius",
  "x": "X",
  "y": "Y",
  "font-size": "Font Size",
  "font-family": "Font Family",
  "font-weight": "Font Weight",
  "line-height": "Line Height",
  "letter-spacing": "Letter Spacing",
  "text-case": "Text Case",
  "text-decoration": "Text Decoration",
  "offset-x": "X",
  "offset-y": "Y",
  "blur": "Blur",
  "spread": "Spread",
  "color": "Color",
  "inset": "Inner Shadow",
};

function formatMapEntries(entries: [string, any][]): string {
  return (
    entries
      .map(([k, v]) => `- ${categoryDictionary[k] || k}: ${formatTokenValue(v)}`)
      .join("\n") + "\n"
  );
}

function formatStructuredToken(tokenSymbol: any): string {
  const entries = (tokenSymbol as any).value.entries();
  const arr = Array.from(entries as any);
  return formatMapEntries(arr);
}

export function formatTokenscriptSymbol(tokenscriptSymbol: any): string {
  if (ts.remNumberWithUnit(tokenscriptSymbol)) {
    return `${ts.remToPx(tokenscriptSymbol)}px`;
  }

  if (ts.colorSymbol(tokenscriptSymbol)) {
    return ts.colorSymbolToHexString(tokenscriptSymbol);
  }

  if (ts.structuredRecordToken(tokenscriptSymbol)) {
    return formatStructuredToken(tokenscriptSymbol);
  }

  if (ts.structuredArrayToken(tokenscriptSymbol)) {
    return join("\n", Array.from((tokenscriptSymbol as any).value).map(formatTokenscriptSymbol));
  }

  return tokenscriptSymbol.toString();
}

export function formatTokenValue(tokenValue: any): string {
  if (ts.tokenscriptSymbol(tokenValue)) {
    return formatTokenscriptSymbol(tokenValue);
  }

  if (typeof tokenValue === "object" && !Array.isArray(tokenValue)) {
    return formatMapEntries(Object.entries(tokenValue));
  }

  if (Array.isArray(tokenValue) && tokenValue.every((v) => typeof v === "object")) {
    return join("\n", tokenValue.map(formatTokenValue));
  }

  if (Array.isArray(tokenValue)) {
    return join(", ", tokenValue);
  }

  return String(tokenValue);
}
