import * as cfo from "app/common/files/tokens";
import * as cf from "app/config";
import * as tinycolor from "app/main/data/tinycolor";
import * as ts from "app/main/data/tokenscript";

export function colorBulletColor(tokenColorValue: string): { color: string; opacity: number } | string | null {
  const tc = tinycolor.validColor(tokenColorValue);
  if (tc) {
    if (tinycolor.alpha(tc)) {
      return { color: tinycolor.toHexString(tc), opacity: tinycolor.alpha(tc) };
    }
    return tinycolor.toHexString(tc);
  }
  return null;
}

export function resolvedTokenBulletColor(token: { resolvedValue?: any }): { color: string; opacity: number } | string | null {
  if (cf.flags.has("tokenscript")) {
    if (token.resolvedValue && ts.colorSymbol(token.resolvedValue)) {
      return ts.colorSymbolToPenpotColor(token.resolvedValue);
    }
  } else {
    if (token.resolvedValue && cfo.colorToken(token)) {
      return colorBulletColor(token.resolvedValue);
    }
  }
  return null;
}
