import * as sdTransforms from "@tokens-studio/sd-transforms";
import styleDictionary from "style-dictionary";
import * as cfo from "../../common/files/tokens";
import * as l from "../../common/logging";
import * as sm from "../../common/schema";
import * as ct from "../../common/time";
import * as cto from "../../common/types/token";
import * as ctob from "../../common/types/tokens-lib";
import * as cf from "../../config";
import * as tinycolor from "./tinycolor";
import * as ts from "./tokenscript";
import * as wte from "./workspace/tokens/errors";
import * as wtw from "./workspace/tokens/warnings";
import * as rx from "beicon.v2.core";
import * as p from "promesa.core";
import * as mf from "rumext.v2";
import * as str from "cuerdas";

l.setLevel("debug");

// Setup Style Dictionary
export function setupStyleDictionary(): any {
  sdTransforms.register(styleDictionary);

  styleDictionary.registerTransformGroup({
    name: "penpot",
    transforms: [
      ...sdTransforms.getTransforms(),
      "ts/color/css/hexrgba",
      "ts/color/modifiers",
      "color/css"
    ]
  });

  styleDictionary.registerFormat({
    name: "custom/json",
    format: (res: any) => res.dictionary.tokens
  });

  return styleDictionary;
}

const defaultConfig = {
  platforms: {
    json: {
      transformGroup: "penpot",
      files: [
        {
          format: "custom/json",
          destination: "penpot"
        }
      ]
    }
  },
  preprocessors: ["tokens-studio"],
  log: {
    verbosity: "silent" as const,
    warnings: "silent" as const,
    errors: {
      brokenReferences: "console" as const
    }
  }
};

// Token value parsers
function parseSdTokenColorValue(value: any): any {
  const missingReferences = cto.findTokenValueReferences(value);
  if (tinycolor.validColor(value)) {
    return {
      value,
      unit: tinycolor.colorFormat(tinycolor.validColor(value))
    };
  }

  if (missingReferences) {
    return {
      errors: [wte.errorWithValue("error.style-dictionary/missing-reference", missingReferences)],
      references: missingReferences
    };
  }

  return {
    errors: [wte.errorWithValue("error.token/invalid-color", value)]
  };
}

function numericString(s: any): boolean {
  return typeof s === "string" && /^-?\d+(\.\d+)?$/.test(s);
}

function withUnits(s: any): boolean {
  return typeof s === "string" && /^-?\d+(\.\d+)?(px|rem)$/.test(s);
}

function parseSdTokenNumberValue(value: any): any {
  const number_ = typeof value === "number" || numericString(value);
  const parsedValue = cfo.parseTokenValue(value);
  const outOfBounds =
    parsedValue.value >= sm.maxSafeInt ||
    parsedValue.value <= sm.minSafeInt;

  if (parsedValue && !outOfBounds && number_) {
    return parsedValue;
  }

  if (outOfBounds) {
    return {
      errors: [wte.errorWithValue("error.token/number-too-large", value)]
    };
  }

  const references = cto.findTokenValueReferences(value);
  if (references) {
    return {
      errors: [wte.errorWithValue("error.style-dictionary/missing-reference", references)],
      references
    };
  }

  if (withUnits(value)) {
    return {
      errors: [wte.errorWithValue("error.style-dictionary/value-with-units", value)]
    };
  }

  return {
    errors: [wte.errorWithValue("error.style-dictionary/invalid-token-value", value)]
  };
}

function parseSdTokenGeneralValue(value: any): any {
  const parsedValue = cfo.parseTokenValue(value);
  const outOfBounds =
    parsedValue.value >= sm.maxSafeInt ||
    parsedValue.value <= sm.minSafeInt;

  if (parsedValue && !outOfBounds) {
    return parsedValue;
  }

  if (outOfBounds) {
    return {
      errors: [wte.errorWithValue("error.token/number-too-large", value)]
    };
  }

  const references = cto.findTokenValueReferences(value);
  if (references) {
    return {
      errors: [wte.errorWithValue("error.style-dictionary/missing-reference", references)],
      references
    };
  }

  return {
    errors: [wte.errorWithValue("error.style-dictionary/invalid-token-value", value)]
  };
}

function parseSdTokenOpacityValue(value: any): any {
  const missingReferences = cto.findTokenValueReferences(value);
  const parsedValue = cfo.parseTokenValue(value);
  const outOfScope = !(parsedValue.value >= 0 && parsedValue.value <= 1);
  const references = cto.findTokenValueReferences(value);

  if (parsedValue && !outOfScope) {
    return parsedValue;
  }

  if (references) {
    return {
      errors: [wte.errorWithValue("error.style-dictionary/missing-reference", references)],
      references
    };
  }

  if (!missingReferences && outOfScope) {
    return {
      errors: [wte.errorWithValue("error.style-dictionary/invalid-token-value-opacity", value)]
    };
  }

  if (missingReferences && outOfScope && parsedValue) {
    return {
      ...parsedValue,
      warnings: [wtw.warningWithValue("warning.style-dictionary/invalid-referenced-token-value-opacity", value)]
    };
  }

  return {
    errors: [wte.errorWithValue("error.style-dictionary/invalid-token-value", value)]
  };
}

function parseSdTokenStrokeWidthValue(value: any): any {
  const missingReferences = cto.findTokenValueReferences(value);
  const parsedValue = cfo.parseTokenValue(value);
  const outOfScope = parsedValue.value < 0;

  if (parsedValue && !outOfScope) {
    return parsedValue;
  }

  if (missingReferences) {
    return {
      errors: [wte.errorWithValue("error.style-dictionary/missing-reference", missingReferences)],
      references: missingReferences
    };
  }

  if (!missingReferences && outOfScope) {
    return {
      errors: [wte.errorWithValue("error.style-dictionary/invalid-token-value-stroke-width", value)]
    };
  }

  if (missingReferences && outOfScope && parsedValue) {
    return {
      ...parsedValue,
      warnings: [wtw.warningWithValue("warning.style-dictionary/invalid-referenced-token-value-stroke-width", value)]
    };
  }

  return {
    errors: [wte.errorWithValue("error.style-dictionary/invalid-token-value", value)]
  };
}

function parseSdTokenLetterSpacingValue(value: any): any {
  const parsedValue = parseSdTokenGeneralValue(value);
  if (parsedValue.unit === "%") {
    return {
      errors: [wte.errorWithValue("error.style-dictionary/value-with-percent", value)]
    };
  }
  return parsedValue;
}

function parseSdTokenTextCaseValue(value: any): any {
  const normalizedValue = str.lower(str.trim(value));
  const valid_ = ["none", "uppercase", "lowercase", "capitalize"].includes(normalizedValue);
  const references = cto.findTokenValueReferences(value);

  if (valid_) {
    return { value: normalizedValue };
  }

  if (references) {
    return {
      errors: [wte.errorWithValue("error.style-dictionary/missing-reference", references)],
      references
    };
  }

  return {
    errors: [wte.errorWithValue("error.style-dictionary/invalid-token-value-text-case", value)]
  };
}

function parseSdTokenTextDecorationValue(value: any): any {
  const validTextDecoration = cto.validTextDecoration(value);
  const references = cto.findTokenValueReferences(value);

  if (validTextDecoration) {
    return { value: validTextDecoration };
  }

  if (references) {
    return {
      errors: [wte.errorWithValue("error.style-dictionary/missing-reference", references)],
      references
    };
  }

  return {
    errors: [wte.errorWithValue("error.style-dictionary/invalid-token-value-text-decoration", value)]
  };
}

function parseSdTokenFontWeightValue(value: any): any {
  const validFontWeight = cto.validFontWeightVariant(value);
  const references = cto.findTokenValueReferences(value);

  if (validFontWeight) {
    return { value };
  }

  if (references) {
    return {
      errors: [wte.errorWithValue("error.style-dictionary/missing-reference", references)],
      references
    };
  }

  return {
    errors: [wte.errorWithValue("error.style-dictionary/invalid-token-value-font-weight", value)]
  };
}

function parseSdTokenTypographyLineHeight(lineHeightValue: any, fontSizeValue: any, fontSizeErrors: any): any {
  const missingReferences = cto.findTokenValueReferences(lineHeightValue);
  const error = missingReferences
    ? {
      errors: [wte.errorWithValue("error.style-dictionary/missing-reference", missingReferences)],
      references: missingReferences
    }
    : (!fontSizeValue || fontSizeErrors)
      ? {
        errors: [wte.errorWithValue("error.style-dictionary/composite-line-height-needs-font-size", fontSizeValue)],
        fontSizeValue
      }
      : undefined;

  if (error) return error;

  try {
    const { unit, value } = cfo.parseTokenValue(lineHeightValue);
    if (unit === "%") {
      return value / 100;
    }
    if (unit === "px") {
      return value / fontSizeValue;
    }
    return value;
  } catch {
    return {
      errors: [wte.errorWithValue("error.style-dictionary/invalid-token-value", lineHeightValue)]
    };
  }
}

function parseSdTokenFontFamilyValue(value: any): any {
  const value_ = Array.isArray(value) ? flatten(value) : [value];
  const validFontFamily = typeof value_ === "string" || value_.every(v => typeof v === "string");
  const missingReferences = value_.some(v => cto.findTokenValueReferences(v));

  if (!validFontFamily) {
    return {
      errors: [wte.errorWithValue("error.style-dictionary/invalid-token-value-font-family", value)]
    };
  }

  if (missingReferences) {
    return {
      errors: [wte.errorWithValue("error.style-dictionary/missing-reference", missingReferences)],
      references: missingReferences
    };
  }

  return { value: value_ };
}

// Helper function to flatten arrays
function flatten(arr: any[]): any[] {
  return arr.reduce((flat: any[], item: any) => {
    return flat.concat(Array.isArray(item) ? flatten(item) : [item]);
  }, []);
}

function parseAtomicTypographyValue(tokenType: string, tokenValue: any): any {
  switch (tokenType) {
    case "font-size":
      return parseSdTokenGeneralValue(tokenValue);
    case "font-family":
      return parseSdTokenFontFamilyValue(tokenValue);
    case "font-weight":
      return parseSdTokenFontWeightValue(tokenValue);
    case "letter-spacing":
      return parseSdTokenLetterSpacingValue(tokenValue);
    case "text-case":
      return parseSdTokenTextCaseValue(tokenValue);
    case "text-decoration":
      return parseSdTokenTextDecorationValue(tokenValue);
    default:
      return null;
  }
}

function parseCompositeTypographyValue(value: any): any {
  const missingReferences = typeof value === "string"
    ? cto.findTokenValueReferences(value)
    : undefined;

  if (missingReferences) {
    return {
      errors: [wte.errorWithValue("error.style-dictionary/missing-reference", missingReferences)],
      references: missingReferences
    };
  }

  if (typeof value === "string") {
    return {
      errors: [wte.errorWithValue("error.style-dictionary/invalid-token-value-typography", value)]
    };
  }

  const converted = value as any;
  const addKeyedErrors = (typographyMap: any, k: string, errors: any[]) => {
    return {
      ...typographyMap,
      errors: [...(typographyMap.errors || []), ...errors.map(e => ({ ...e, typographyKey: k }))]
    };
  };

  const withoutLineHeight = { ...converted };
  delete withoutLineHeight.lineHeight;

  const validTypography = Object.entries(withoutLineHeight).reduce((acc: any, [k, v]: [string, any]) => {
    const { errors, value } = parseAtomicTypographyValue(k, v);
    if (errors) {
      return addKeyedErrors(acc, k, errors);
    }
    return {
      ...acc,
      value: {
        ...acc.value,
        [k]: value ?? v
      }
    };
  }, { value: {} });

  const lineHeight = converted.lineHeight
    ? parseSdTokenTypographyLineHeight(
      converted.lineHeight,
      validTypography.value.fontSize,
      validTypography.errors?.fontSize
    )
    : null;

  if (lineHeight && lineHeight.errors) {
    return addKeyedErrors(validTypography, "line-height", lineHeight.errors);
  }

  if (lineHeight) {
    return {
      ...validTypography,
      value: {
        ...validTypography.value,
        lineHeight
      }
    };
  }

  return validTypography;
}

export function collectTypographyErrors(token: any): any {
  return groupBy(token.errors, "typographyKey");
}

function groupBy(array: any[], key: string): any {
  return array.reduce((groups: any, item: any) => {
    const group = item[key];
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(item);
    return groups;
  }, {});
}

function parseSdTokenShadowInset(value: any): any {
  const references = cto.findTokenValueReferences(value);

  if (typeof value === "boolean") {
    return { value };
  }

  if (references) {
    return {
      errors: [wte.errorWithValue("error.style-dictionary/missing-reference", references)],
      references
    };
  }

  return {
    errors: [wte.errorWithValue("error.style-dictionary/invalid-token-value-shadow-type", value)]
  };
}

function parseSdTokenShadowBlur(value: any): any {
  const parsed = parseSdTokenGeneralValue(value);
  const valid_ = parsed.value !== undefined && parsed.value >= 0;

  if (valid_) {
    return parsed;
  }

  return {
    errors: [wte.errorWithValue("error.style-dictionary/invalid-token-value-shadow-blur", value)]
  };
}

function parseSdTokenShadowSpread(value: any): any {
  const parsed = parseSdTokenGeneralValue(value);
  const valid_ = parsed.value !== undefined;

  if (valid_) {
    return parsed;
  }

  return {
    errors: [wte.errorWithValue("error.style-dictionary/invalid-token-value-shadow-spread", value)]
  };
}

function parseSingleShadow(shadowMap: any, shadowIndex: number): any {
  const defaultShadow = {
    offsetX: null,
    offsetY: null,
    blur: null,
    spread: null,
    color: null,
    inset: false
  };

  const shadowWithDefaults = {
    ...defaultShadow,
    ...shadowMap
  };

  const addKeyedErrors = (shadowResult: any, k: string, errors: any[]) => ({
    ...shadowResult,
    errors: [...(shadowResult.errors || []), ...errors.map(e => ({ ...e, shadowKey: k, shadowIndex }))]
  });

  const parsers = {
    offsetX: parseSdTokenGeneralValue,
    offsetY: parseSdTokenGeneralValue,
    blur: parseSdTokenShadowBlur,
    spread: parseSdTokenShadowSpread,
    color: parseSdTokenColorValue,
    inset: parseSdTokenShadowInset
  };

  const validShadow = Object.entries(shadowWithDefaults).reduce((acc: any, [k, v]: [string, any]) => {
    const parser = parsers[k as keyof typeof parsers];
    if (parser) {
      const { errors, value } = parser(v);
      if (errors) {
        return addKeyedErrors(acc, k, errors);
      }
      return {
        ...acc,
        value: {
          ...acc.value,
          [k]: value ?? v
        }
      };
    }
    return acc;
  }, { value: {} });

  return validShadow;
}

function parseSdTokenShadowValue(value: any): any {
  const missingReferences = typeof value === string
    ? cto.findTokenValueReferences(value)
    : undefined;

  if (missingReferences) {
    return {
      errors: [wte.errorWithValue("error.style-dictionary/missing-reference", missingReferences)],
      references: missingReferences
    };
  }

  if (typeof value === "string") {
    return {
      errors: [wte.errorWithValue("error.style-dictionary/invalid-token-value-shadow", value)]
    };
  }

  if (value === null) {
    return {
      errors: [wte.getErrorCode("error.token/empty-input")]
    };
  }

  if (!Array.isArray(value)) {
    return {
      errors: [wte.errorWithValue("error.style-dictionary/invalid-token-value", value)]
    };
  }

  const converted = value as any[];
  const parsedShadows = converted.map((shadowMap: any, idx: number) =>
    parseSingleShadow(shadowMap, idx)
  );

  const allErrors = parsedShadows.flatMap(s => s.errors || []);
  const allValues = parsedShadows.flatMap(s => s.value ? [s.value] : []);

  if (allErrors.length > 0) {
    return { errors: allErrors, value: allValues };
  }

  return { value: allValues };
}

export function collectShadowErrors(token: any, shadowIndex: number): any {
  return groupBy(
    (token.errors || []).filter((e: any) => e.shadowIndex === shadowIndex),
    "shadowKey"
  );
}

export function processSdTokens(sdTokens: any[], getOriginToken: (sdToken: any) => any): any {
  return sdTokens.reduce((acc: any, sdToken: any) => {
    const originToken = getOriginToken(sdToken);
    const value = sdToken.value;
    const parsedTokenValue = parseAtomicTypographyValue(originToken.type, value) ||
      (originToken.type === "typography" && parseCompositeTypographyValue(value)) ||
      (originToken.type === "shadow" && parseSdTokenShadowValue(value)) ||
      (originToken.type === "color" && parseSdTokenColorValue(value)) ||
      (originToken.type === "opacity" && parseSdTokenOpacityValue(value)) ||
      (originToken.type === "stroke-width" && parseSdTokenStrokeWidthValue(value)) ||
      (originToken.type === "number" && parseSdTokenNumberValue(value)) ||
      parseSdTokenGeneralValue(value);

    const outputToken = parsedTokenValue.errors
      ? { ...originToken, ...parsedTokenValue }
      : parsedTokenValue.warnings
        ? {
          ...originToken,
          resolvedValue: parsedTokenValue.value,
          warnings: parsedTokenValue.warnings,
          unit: parsedTokenValue.unit
        }
        : {
          ...originToken,
          resolvedValue: parsedTokenValue.value,
          unit: parsedTokenValue.unit
        };

    return { ...acc, [outputToken.name]: outputToken };
  }, {});
}

// IStyleDictionary interface
export interface IStyleDictionary {
  addTokens(tokens: any): IStyleDictionary;
  enableDebug(): IStyleDictionary;
  getConfig(): any;
  buildDictionary(): rx.Observable<any>;
}

// StyleDictionary class
export class StyleDictionary implements IStyleDictionary {
  constructor(private config: any) {}

  addTokens(tokens: any): IStyleDictionary {
    return new StyleDictionary({ ...this.config, tokens });
  }

  enableDebug(): IStyleDictionary {
    return new StyleDictionary({
      ...this.config,
      log: { ...this.config.log, verbosity: "verbose" }
    });
  }

  getConfig(): any {
    return this.config;
  }

  buildDictionary(): rx.Observable<any> {
    const platform = "json";
    const config_ = this.config;
    const buildPromise = p.fromPromise(
      (async () => {
        const sdInstance = new styleDictionary.constructor(config_);
        await sdInstance.buildAllPlatforms(platform);
        const platformTokens = await sdInstance.getPlatformTokens(platform);
        return platformTokens.allTokens;
      })()
    );

    return rx.from(buildPromise);
  }
}

export function resolveTokensTree(
  tokensTree: any,
  getToken: (sdToken: any) => any,
  styleDictionary: IStyleDictionary = new StyleDictionary(defaultConfig)
): rx.Observable<any> {
  return styleDictionary
    .addTokens(tokensTree)
    .buildDictionary()
    .pipe(
      rx.map(sdTokens => processSdTokens(sdTokens, getToken))
    );
}

export function sdTokenName(sdToken: any): string {
  return sdToken.original.name;
}

export function sdTokenUuid(sdToken: any): string {
  return sdToken.original.id;
}

export function resolveTokens(tokens: any): rx.Observable<any> {
  const tokensTree = ctob.tokensTree(tokens);
  return resolveTokensTree(tokensTree, (sdToken: any) => tokens[sdTokenName(sdToken)]);
}

export function resolveTokensInteractive(tokens: any): rx.Observable<any> {
  const { tokensTree, ids } = ctob.backtraceTokensTree(tokens);
  return resolveTokensTree(tokensTree, (sdToken: any) => ids[sdTokenUuid(sdToken)]);
}

export function resolveTokensWithVerboseErrors(tokens: any): rx.Observable<any> {
  return resolveTokensTree(
    ctob.tokensTree(tokens),
    (sdToken: any) => tokens[sdTokenName(sdToken)],
    new StyleDictionary({
      ...defaultConfig,
      log: { ...defaultConfig.log, verbosity: "verbose" }
    })
  );
}

// Cache for resolved tokens
const tokensCache: any = null;

// Hook for resolved tokens
export function useResolvedTokens(
  tokens: any,
  config: { cacheAtom?: any; interactive?: boolean } = {}
): any {
  const { cacheAtom = tokensCache, interactive = false } = config;
  const [tokensState, setTokensState] = mf.useState(get(cacheAtom, tokens));

  mf.useEffect(() => {
    if (!cf.flags.tokenscript) {
      const cached = get(cacheAtom, tokens);

      if (tokens === null) {
        return;
      }

      if (isObservable(cached)) {
        cached.subscribe(resolvedTokens => setTokensState(resolvedTokens));
      } else if (cached !== undefined) {
        setTokensState(cached);
      } else {
        const resolvedTokens$ = interactive
          ? resolveTokensInteractive(tokens)
          : resolveTokens(tokens);

        set(cacheAtom, tokens, resolvedTokens$);
        resolvedTokens$.subscribe(resolvedTokens => {
          set(cacheAtom, tokens, resolvedTokens);
          setTokensState(resolvedTokens);
        });
      }
    }
  }, [tokens, config]);

  if (cf.flags.tokenscript) {
    return ts.resolveTokens(tokens);
  }

  return tokensState;
}

export function useResolvedTokens*(tokens: any, { interactive }: { interactive?: boolean } = {}): any {
  const [state*, setState] = mf.useState(tokens);

  mf.useEffect(() => {
    if (!cf.flags.tokenscript && tokens) {
      const tpoint = ct.tpointMs();
      const tokens$ = interactive
        ? resolveTokensInteractive(tokens)
        : resolveTokens(tokens);

      tokens$.subscribe(resolvedTokens => {
        const elapsed = tpoint();
        l.debug({ hint: "use-resolved-tokens*", elapsed });
        setState(resolvedTokens);
      });
    }
  }, [tokens, interactive]);

  if (cf.flags.tokenscript) {
    return ts.resolveTokens(tokens);
  }

  return state;
}

// Helper functions
function get(obj: any, key: any): any {
  return obj ? obj[key] : undefined;
}

function set(obj: any, key: any, value: any): void {
  if (obj) {
    obj[key] = value;
  }
}

function isObservable(obj: any): boolean {
  return obj && typeof obj.subscribe === "function";
}