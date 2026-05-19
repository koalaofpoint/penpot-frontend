import {
  BaseSymbolType,
  ColorSymbol,
  ListSymbol,
  NumberSymbol,
  NumberWithUnitSymbol,
  ProcessorError,
  processTokens,
  TokenSymbol,
  makeConfig
} from "@penpot/tokenscript";
import * as l from "../../common/logging";
import * as ct from "../../common/time";
import * as wte from "./workspace/tokens/errors";

l.setLevel("debug");

// Config
const config = makeConfig();

// Type predicates
export function tokenscriptSymbol_(v: any): boolean {
  return v instanceof BaseSymbolType;
}

export function structuredToken_(v: any): boolean {
  return v instanceof TokenSymbol;
}

export function structuredRecordToken_(v: any): boolean {
  return structuredToken_(v) && v.value instanceof Map;
}

export function structuredArrayToken_(v: any): boolean {
  return structuredToken_(v) && Array.isArray(v.value);
}

export function numberWithUnitSymbol_(v: any): boolean {
  return v instanceof NumberWithUnitSymbol;
}

export function numberSymbol_(v: any): boolean {
  return v instanceof NumberSymbol;
}

export function listSymbol_(v: any): boolean {
  return v instanceof ListSymbol;
}

export function colorSymbol_(v: any): boolean {
  return v instanceof ColorSymbol;
}

export function processorError_(err: any): boolean {
  return err instanceof ProcessorError;
}

// Conversion functions
export function colorSymbolToHexString_(v: any): string {
  if (!colorSymbol_(v)) {
    return "";
  }
  return v.toString().to("hex");
}

export function colorAlpha_(v: any): number {
  if (v.isHex()) {
    return 1;
  }
  return v.getAttribute("alpha") ?? 1;
}

export function colorSymbolToPenpotColor_(v: any): any {
  return {
    color: colorSymbolToHexString_(v),
    opacity: colorAlpha_(v)
  };
}

export function remNumberWithUnit_(v: any): boolean {
  return numberWithUnitSymbol_(v) && v.unit === "rem";
}

export function percentNumberWithUnit_(v: any): boolean {
  return numberWithUnitSymbol_(v) && v.unit === "%";
}

export function remToPx_(v: any): number {
  return v.value * 16;
}

function tokenscriptSymbolsToPenpotUnit_(v: any): any {
  if (v === null) {
    return null;
  }

  if (structuredToken_(v)) {
    return structuredTokenToPenpotMap_(v);
  }

  if (listSymbol_(v)) {
    return structuredTokenToPenpotMap_(v);
  }

  if (colorSymbol_(v)) {
    return v.value.to("hex");
  }

  if (remNumberWithUnit_(v)) {
    return remToPx_(v);
  }

  if (percentNumberWithUnit_(v)) {
    return v.value / 100;
  }

  return v.value;
}

function structuredTokenToPenpotMap_(tokenSymbol: any): any {
  if (Array.isArray(tokenSymbol.value)) {
    return tokenSymbol.value.map(tokenscriptSymbolsToPenpotUnit_);
  }

  const entries = tokenSymbol.value.entries();
  const result: any = {};

  for (const [k, v] of entries) {
    result[k] = tokenscriptSymbolsToPenpotUnit_(v);
  }

  return result;
}

// Token processor
export function createTokenBuilder(tokens: any): any {
  const output = tokens;

  const onResolve = (tokenName: string, resolvedSymbol: any) => {
    // @ts-ignore
    output[tokenName].resolvedValue = resolvedSymbol;
  };

  const onError = (tokenName: string, _error: any, _originalValue: string) => {
    const value = get(tokens, tokenName);
    const defaultError = [wte.errorWithValue("error.style-dictionary/invalid-token-value", value)];
    // @ts-ignore
    output[tokenName].errors = defaultError;
  };

  const getResult = () => output;

  return {
    onResolve,
    onError,
    getResult
  };
}

function cljToToken_(token: any): any {
  return {
    $type: token.type,
    $value: token.value
  };
}

function cljTokensToTokenscriptTokens_(tokens: any): any {
  const tokenMap = new Map();

  for (const [k, token] of Object.entries(tokens)) {
    tokenMap.set(k, cljToToken_(token));
  }

  return tokenMap;
}

export function processTokens_(tokens: any): any {
  const input = cljTokensToTokenscriptTokens_(tokens);
  const result = processTokens(input, {
    config,
    builder: createTokenBuilder(tokens)
  });

  return result;
}

export function updateToken_(tokens: any, token: any): any {
  const result = processTokens_(tokens);
  const resolver = result.resolver;

  resolver.updateToken({
    tokenPath: token.name,
    tokenData: cljToToken_(token)
  });

  return result;
}

export function resolveTokens_(tokens: any): any {
  const tpoint = ct.tpointMs();
  const result = processTokens_(tokens);
  const elapsed = tpoint();

  l.debug({ hint: "tokenscript/resolve-tokens", elapsed });
  return result.output;
}