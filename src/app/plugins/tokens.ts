// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { emit, getState } from '../../main/store';
// import {
//   toggleToken,
//   updateToken,
//   createToken as createTokenEvent,
//   deleteToken as deleteTokenEvent,
//   updateTokenSet,
//   renameTokenSet,
//   setEnabledTokenSet,
//   toggleTokenSet,
//   duplicateTokenSet,
//   deleteTokenSet,
//   updateTokenTheme,
//   createTokenTheme,
//   deleteTokenTheme,
//   setTokenThemeActive,
//   toggleTokenThemeActive
// } from '../../main/data/workspace/tokens';
// import {
//   locateToken,
//   locateTokenSet,
//   locateTokensLib,
//   locateTokenTheme,
//   displayNotValid,
//   handleError
// } from './utils';
// import {
//   getName,
//   getDescription,
//   getTokens,
//   getTokensInActiveSets,
//   getTheme,
//   getSet,
//   getSetById,
//   getSetByName,
//   tokenSetActive,
//   themeSetActive,
//   makeToken,
//   makeTokenSet,
//   makeTokenTheme,
//   enableSet,
//   disableSet,
//   normalizeSetName
// } from '../../common/types/tokens-lib';
// import {
//   tokenTypeToDTCGTokenType,
//   tokenAttr?,
//   DTCGTokenTypeToTokenType
// } from '../../common/types/token';
// import { resolveTokens, tokenscriptSymbolsToPenpotUnit } from '../../main/data/tokenscript';
// import { makeTokenNameSchema, makeTokenValueSchema, makeTokenSetNameSchema, makeTokenThemeNameSchema, makeTokenThemeGroupSchema, makeTokenSchema, makeTokenSetSchema, makeTokenThemeSchema, convertDTCGToken } from '../../common/files/tokens';

/**
 * Token proxy interface
 */
export interface TokenProxy {
  pluginId: string;
  fileId: string;
  setId: string;
  id: string;

  id: string;
  name: string;
  type: string;
  value: unknown;
  resolvedValue: unknown;
  resolvedValueString: string;
  description: string;

  setName(name: string): void;
  setValue(value: unknown): void;
  setDescription(description: string): void;

  duplicate(): TokenProxy | null;
  remove(): void;

  applyToShapes(shapes: unknown[], attrs?: Set<string>): void;
  applyToSelected(attrs?: Set<string>): void;
}

/**
 * Token set proxy interface
 */
export interface TokenSetProxy {
  pluginId: string;
  fileId: string;
  id: string;

  id: string;
  name: string;
  active: boolean;

  setName(name: string): void;
  setActive(value: boolean): void;
  toggleActive(): void;

  tokens: TokenProxy[];
  tokensByType: Array<[string, TokenProxy[]]>;

  getTokenById(tokenId: string): TokenProxy | null;
  addToken(attrs: Record<string, unknown>): TokenProxy | null;

  duplicate(): void;
  remove(): void;
}

/**
 * Token theme proxy interface
 */
export interface TokenThemeProxy {
  pluginId: string;
  fileId: string;
  id: string;

  id: string;
  externalId: string;
  group: string;
  name: string;
  active: boolean;

  setGroup(group: string): void;
  setName(name: string): void;
  setActive(value: boolean): void;
  toggleActive(): void;

  activeSets: TokenSetProxy[];

  addSet(tokenSet: TokenSetProxy): void;
  removeSet(tokenSet: TokenSetProxy): void;

  duplicate(): TokenThemeProxy | null;
  remove(): void;
}

/**
 * Tokens catalog interface
 */
export interface TokensCatalog {
  pluginId: string;
  fileId: string;

  themes: TokenThemeProxy[];
  sets: TokenSetProxy[];

  addTheme(attrs: Record<string, unknown>): TokenThemeProxy;
  addSet(attrs: Record<string, unknown>): TokenSetProxy;

  getThemeById(themeId: string): TokenThemeProxy | null;
  getSetById(setId: string): TokenSetProxy | null;
}

/**
 * Check if value is a TokenProxy
 */
export function isTokenProxy(p: unknown): p is TokenProxy {
  return Object(p)?.[Symbol('type')] === 'TokenProxy';
}

/**
 * Check if value is a TokenSetProxy
 */
export function isTokenSetProxy(p: unknown): p is TokenSetProxy {
  return Object(p)?.[Symbol('type')] === 'TokenSetProxy';
}

/**
 * Check if value is a TokenThemeProxy
 */
export function isTokenThemeProxy(p: unknown): p is TokenThemeProxy {
  return Object(p)?.[Symbol('type')] === 'TokenThemeProxy';
}

/**
 * Create a token proxy
 */
export function tokenProxy(
  pluginId: string,
  fileId: string,
  setId: string,
  id: string
): TokenProxy {
  const self = {} as TokenProxy;

  // Internal properties
  (self as unknown as Record<symbol, unknown>)[Symbol('$plugin')] = pluginId;
  (self as unknown as Record<symbol, unknown>)[Symbol('$file-id')] = fileId;
  (self as unknown as Record<symbol, unknown>)[Symbol('$set-id')] = setId;
  (self as unknown as Record<symbol, unknown>)[Symbol('$id')] = id;
  (self as unknown as Record<symbol, unknown>)[Symbol('type')] = 'TokenProxy';

  // Public properties
  self.pluginId = pluginId;
  self.fileId = fileId;
  self.setId = setId;
  self.id = id;

  // ID getter
  Object.defineProperty(self, 'id', {
    get(): string {
      return String(id);
    },
    enumerable: true
  });

  // Name getter and setter
  Object.defineProperty(self, 'name', {
    get(): string {
      const token = locateTokenInternal(fileId, setId, id);
      // TODO: return getName(token);
      return token?.name as string ?? '';
    },
    set(value: string): void {
      // TODO: Emit update token event
      // emit(updateToken(setId, id, { name: value }));
    },
    enumerable: true
  });

  // Type getter
  Object.defineProperty(self, 'type', {
    get(): string {
      const token = locateTokenInternal(fileId, setId, id);
      // TODO: return tokenTypeToDTCGTokenType(token?.type);
      return token?.type as string ?? '';
    },
    enumerable: true
  });

  // Value getter and setter
  Object.defineProperty(self, 'value', {
    get(): unknown {
      const token = locateTokenInternal(fileId, setId, id);
      // TODO: Return JSON representation of value
      return token?.value;
    },
    set(value: unknown): void {
      // TODO: Emit update token event
      // emit(updateToken(setId, id, { value }));
    },
    enumerable: true
  });

  // Resolved value getter (computed from active sets)
  Object.defineProperty(self, 'resolvedValue', {
    get(): unknown {
      const token = locateTokenInternal(fileId, setId, id);
      const tokensLib = locateTokensLibInternal(fileId);

      if (!token || !tokensLib) return undefined;

      const tokensTree = getTokensInActiveSetsInternal(tokensLib, setId);
      const resolvedTokens = resolveTokensInternal(tokensTree);
      const resolvedValue = resolvedTokens[token.name as string];

      // TODO: Return tokenscriptSymbolsToPenpotUnit(resolvedValue?.resolvedValue);
      return resolvedValue?.resolvedValue;
    },
    enumerable: false
  });

  // Resolved value string getter
  Object.defineProperty(self, 'resolvedValueString', {
    get(): string {
      const token = locateTokenInternal(fileId, setId, id);
      const tokensLib = locateTokensLibInternal(fileId);

      if (!token || !tokensLib) return '';

      const tokensTree = getTokensInActiveSetsInternal(tokensLib, setId);
      const resolvedTokens = resolveTokensInternal(tokensTree);
      const resolvedValue = resolvedTokens[token.name as string];

      // TODO: Return String(tokenscriptSymbolsToPenpotUnit(resolvedValue?.resolvedValue));
      return String(resolvedValue?.resolvedValue ?? '');
    },
    enumerable: false
  });

  // Description getter and setter
  Object.defineProperty(self, 'description', {
    get(): string {
      const token = locateTokenInternal(fileId, setId, id);
      // TODO: return getDescription(token);
      return token?.description as string ?? '';
    },
    set(value: string): void {
      // TODO: Emit update token event
      // emit(updateToken(setId, id, { description: value }));
    },
    enumerable: true
  });

  // Duplicate method
  self.duplicate = function(): TokenProxy | null {
    const token = locateTokenInternal(fileId, setId, id);
    if (!token) return null;

    // TODO: Create new token without id and modified-at
    // const newToken = makeToken({ ...token, id: undefined, modifiedAt: undefined });
    // emit(createTokenEvent(setId, newToken));
    // return tokenProxy(pluginId, fileId, setId, newToken.id);

    return null;
  };

  // Remove method
  self.remove = function(): void {
    // TODO: Emit delete token event
    // emit(deleteTokenEvent(setId, id));
  };

  // Apply to shapes method
  self.applyToShapes = function(shapes: unknown[], attrs?: Set<string>): void {
    // Validate attrs are valid token attributes
    if (attrs) {
      const invalidAttrs = Array.from(attrs).filter(attr => !isTokenAttr(attr));
      if (invalidAttrs.length > 0) {
        // displayNotValid('applyToSelected', attrs);
        console.error('[PENPOT PLUGIN] Invalid token attributes:', invalidAttrs);
        return;
      }
    }

    const shapeIds = shapes.map(shape => getProxyId(shape)).filter(Boolean) as string[];
    const token = locateTokenInternal(fileId, setId, id);

    if (!token) return;

    // TODO: Emit toggle token event
    // emit(toggleToken({
    //   token,
    //   attrs: attrs ? Array.from(attrs) : undefined,
    //   shapeIds,
    //   expandWithChildren: false
    // }));
  };

  // Apply to selected method
  self.applyToSelected = function(attrs?: Set<string>): void {
    // TODO: Get selected shapes from state
    // const state = getState();
    // const selected = state.workspaceLocal?.selected || [];

    // self.applyToShapes(selected, attrs);
  };

  return self;
}

/**
 * Create a token set proxy
 */
export function tokenSetProxy(
  pluginId: string,
  fileId: string,
  id: string
): TokenSetProxy {
  const self = {} as TokenSetProxy;

  // Internal properties
  (self as unknown as Record<symbol, unknown>)[Symbol('$plugin')] = pluginId;
  (self as unknown as Record<symbol, unknown>)[Symbol('$file-id')] = fileId;
  (self as unknown as Record<symbol, unknown>)[Symbol('$id')] = id;
  (self as unknown as Record<symbol, unknown>)[Symbol('type')] = 'TokenSetProxy';

  // Public properties
  self.pluginId = pluginId;
  self.fileId = fileId;
  self.id = id;

  // ID getter
  Object.defineProperty(self, 'id', {
    get(): string {
      return String(id);
    },
    enumerable: true
  });

  // Name getter and setter
  Object.defineProperty(self, 'name', {
    get(): string {
      const set = locateTokenSetInternal(fileId, id);
      // TODO: return getName(set);
      return set?.name as string ?? '';
    },
    set(value: string): void {
      const set = locateTokenSetInternal(fileId, id);
      if (!set) return;

      // TODO: Emit rename token set event
      // emit(renameTokenSet(set, value));
    },
    enumerable: true
  });

  // Active getter and setter
  Object.defineProperty(self, 'active', {
    get(): boolean {
      const tokensLib = locateTokensLibInternal(fileId);
      const set = locateTokenSetInternal(fileId, id);
      if (!tokensLib || !set) return false;

      // TODO: return tokenSetActive(tokensLib, getName(set));
      return false;
    },
    set(value: boolean): void {
      const set = locateTokenSetInternal(fileId, id);
      if (!set) return;

      // TODO: Emit set enabled token set event
      // emit(setEnabledTokenSet(getName(set), value));
    },
    enumerable: true
  });

  // Toggle active method
  self.toggleActive = function(): void {
    const set = locateTokenSetInternal(fileId, id);
    if (!set) return;

    // TODO: Emit toggle token set event
    // emit(toggleTokenSet(getName(set)));
  };

  // Tokens getter
  Object.defineProperty(self, 'tokens', {
    get(): TokenProxy[] {
      const tokensLib = locateTokensLibInternal(fileId);
      if (!tokensLib) return [];

      const tokens = getTokensInternal(tokensLib, id);

      return Object.values(tokens)
        .map(token => tokenProxy(pluginId, fileId, id, token.id as string));
    },
    enumerable: false
  });

  // Tokens by type getter
  Object.defineProperty(self, 'tokensByType', {
    get(): Array<[string, TokenProxy[]]> {
      const tokensLib = locateTokensLibInternal(fileId);
      if (!tokensLib) return [];

      const tokens = getTokensInternal(tokensLib, id);
      const tokensByType = new Map<string, TokenProxy[]>();

      for (const token of Object.values(tokens)) {
        const type = token.type as string;
        if (!tokensByType.has(type)) {
          tokensByType.set(type, []);
        }
        tokensByType.get(type)!.push(tokenProxy(pluginId, fileId, id, token.id as string));
      }

      // Sort by name within each type
      for (const [type, tokens] of tokensByType) {
        tokens.sort((a, b) => a.name.localeCompare(b.name));
      }

      return Array.from(tokensByType.entries());
    },
    enumerable: false
  });

  // Get token by ID method
  self.getTokenById = function(tokenId: string): TokenProxy | null {
    const token = locateTokenInternal(fileId, id, tokenId);
    if (!token) return null;

    return tokenProxy(pluginId, fileId, id, token.id as string);
  };

  // Add token method
  self.addToken = function(attrs: Record<string, unknown>): TokenProxy | null {
    const tokensLib = locateTokensLibInternal(fileId);

    // Validate attrs using schema
    // TODO: const schema = makeTokenSchema(...);
    // if (!validate(schema, attrs)) {
    //   return null;
    // }

    const token = makeTokenInternal(attrs);
    const tokensTree = getTokensInActiveSetsInternal(tokensLib, id);
    tokensTree[token.name as string] = token;
    const resolvedTokens = resolveTokensInternal(tokensTree);
    const result = resolvedTokens[token.name as string];

    if (!result || result.errors) {
      // displayNotValid('addToken', result?.errors);
      console.error('[PENPOT PLUGIN] Invalid token:', result?.errors);
      return null;
    }

    // TODO: Emit create token event
    // emit(createTokenEvent(id, token));
    // return tokenProxy(pluginId, fileId, id, token.id);

    return null;
  };

  // Duplicate method
  self.duplicate = function(): void {
    // TODO: Emit duplicate token set event
    // emit(duplicateTokenSet(id));
  };

  // Remove method
  self.remove = function(): void {
    // TODO: Emit delete token set event
    // emit(deleteTokenSet(id));
  };

  return self;
}

/**
 * Create a token theme proxy
 */
export function tokenThemeProxy(
  pluginId: string,
  fileId: string,
  id: string
): TokenThemeProxy {
  const self = {} as TokenThemeProxy;

  // Internal properties
  (self as unknown as Record<symbol, unknown>)[Symbol('$plugin')] = pluginId;
  (self as unknown as Record<symbol, unknown>)[Symbol('$file-id')] = fileId;
  (self as unknown as Record<symbol, unknown>)[Symbol('$id')] = id;
  (self as unknown as Record<symbol, unknown>)[Symbol('type')] = 'TokenThemeProxy';

  // Public properties
  self.pluginId = pluginId;
  self.fileId = fileId;
  self.id = id;

  // ID getter
  Object.defineProperty(self, 'id', {
    get(): string {
      return String(id);
    },
    enumerable: true
  });

  // External ID getter
  Object.defineProperty(self, 'externalId', {
    get(): string {
      const theme = locateTokenThemeInternal(fileId, id);
      return theme?.externalId as string ?? '';
    },
    enumerable: true
  });

  // Group getter and setter
  Object.defineProperty(self, 'group', {
    get(): string {
      const theme = locateTokenThemeInternal(fileId, id);
      return theme?.group as string ?? '';
    },
    set(value: string): void {
      const theme = locateTokenThemeInternal(fileId, id);
      if (!theme) return;

      // TODO: Emit update token theme event
      // emit(updateTokenTheme(id, { ...theme, group: value }));
    },
    enumerable: true
  });

  // Name getter and setter
  Object.defineProperty(self, 'name', {
    get(): string {
      const theme = locateTokenThemeInternal(fileId, id);
      return theme?.name as string ?? '';
    },
    set(value: string): void {
      const theme = locateTokenThemeInternal(fileId, id);
      if (!theme || !value) return;

      // TODO: Emit update token theme event
      // emit(updateTokenTheme(id, { ...theme, name: value }));
    },
    enumerable: true
  });

  // Active getter and setter
  Object.defineProperty(self, 'active', {
    get(): boolean {
      const tokensLib = locateTokensLibInternal(fileId);
      if (!tokensLib) return false;

      // TODO: return themeSetActive(tokensLib, id);
      return false;
    },
    set(value: boolean): void {
      // TODO: Emit set token theme active event
      // emit(setTokenThemeActive(id, value));
    },
    enumerable: true
  });

  // Toggle active method
  self.toggleActive = function(): void {
    // TODO: Emit toggle token theme active event
    // emit(toggleTokenThemeActive(id));
  };

  // Active sets getter
  Object.defineProperty(self, 'activeSets', {
    get(): TokenSetProxy[] {
      const theme = locateTokenThemeInternal(fileId, id);
      const tokensLib = locateTokensLibInternal(fileId);

      if (!theme || !tokensLib) return [];

      return (theme.sets || [])
        .map(setName => getSetByIdInternal(tokensLib, setName))
        .filter(Boolean)
        .map(setId => tokenSetProxy(pluginId, fileId, setId!)) as TokenSetProxy[];
    },
    enumerable: false
  });

  // Add set method
  self.addSet = function(tokenSet: TokenSetProxy): void {
    const theme = locateTokenThemeInternal(fileId, id);
    if (!theme) return;

    // TODO: Emit update token theme event
    // emit(updateTokenTheme(id, enableSet(theme, tokenSet.name)));
  };

  // Remove set method
  self.removeSet = function(tokenSet: TokenSetProxy): void {
    const theme = locateTokenThemeInternal(fileId, id);
    if (!theme) return;

    // TODO: Emit update token theme event
    // emit(updateTokenTheme(id, disableSet(theme, tokenSet.name)));
  };

  // Duplicate method
  self.duplicate = function(): TokenThemeProxy | null {
    const theme = locateTokenThemeInternal(fileId, id);
    if (!theme) return null;

    // TODO: Create new theme without id and modified-at
    // const newTheme = makeTokenThemeInternal({ ...theme, id: undefined, modifiedAt: undefined });
    // emit(createTokenTheme(newTheme));
    // return tokenThemeProxy(pluginId, fileId, newTheme.id);

    return null;
  };

  // Remove method
  self.remove = function(): void {
    // TODO: Emit delete token theme event
    // emit(deleteTokenTheme(id));
  };

  return self;
}

/**
 * Create a tokens catalog
 */
export function tokensCatalog(
  pluginId: string,
  fileId: string
): TokensCatalog {
  const self = {} as TokensCatalog;

  // Internal properties
  (self as unknown as Record<symbol, unknown>)[Symbol('$plugin')] = pluginId;
  (self as unknown as Record<symbol, unknown>)[Symbol('$id')] = fileId;

  // Public properties
  self.pluginId = pluginId;
  self.fileId = fileId;

  // Themes getter
  Object.defineProperty(self, 'themes', {
    get(): TokenThemeProxy[] {
      const tokensLib = locateTokensLibInternal(fileId);
      if (!tokensLib) return [];

      const themes = getThemesInternal(tokensLib);

      return themes
        .filter(theme => theme.id !== ZERO_UUID)
        .map(theme => tokenThemeProxy(pluginId, fileId, theme.id as string));
    },
    enumerable: false
  });

  // Sets getter
  Object.defineProperty(self, 'sets', {
    get(): TokenSetProxy[] {
      const tokensLib = locateTokensLibInternal(fileId);
      if (!tokensLib) return [];

      const sets = getSetsInternal(tokensLib);

      return sets.map(set => tokenSetProxy(pluginId, fileId, set.id as string));
    },
    enumerable: false
  });

  // Add theme method
  self.addTheme = function(attrs: Record<string, unknown>): TokenThemeProxy {
    // TODO: Validate schema and create theme
    // const schema = makeTokenThemeSchema(...);
    // const theme = makeTokenThemeInternal(attrs);
    // emit(createTokenTheme(theme));
    // return tokenThemeProxy(pluginId, fileId, theme.id);

    return {} as TokenThemeProxy;
  };

  // Add set method
  self.addSet = function(attrs: Record<string, unknown>): TokenSetProxy {
    const tokensLib = locateTokensLibInternal(fileId);
    if (!tokensLib) return {} as TokenSetProxy;

    // TODO: Normalize set name and create
    // const normalizedName = normalizeSetNameInternal(attrs.name || '');
    // const set = makeTokenSetInternal({ ...attrs, name: normalizedName });
    // emit(createTokenSet(set));
    // return tokenSetProxy(pluginId, fileId, set.id);

    return {} as TokenSetProxy;
  };

  // Get theme by ID method
  self.getThemeById = function(themeId: string): TokenThemeProxy | null {
    const theme = locateTokenThemeInternal(fileId, themeId);
    if (!theme) return null;

    return tokenThemeProxy(pluginId, fileId, theme.id as string);
  };

  // Get set by ID method
  self.getSetById = function(setId: string): TokenSetProxy | null {
    const set = locateTokenSetInternal(fileId, setId);
    if (!set) return null;

    return tokenSetProxy(pluginId, fileId, set.id as string);
  };

  return self;
}

// Helper functions

const ZERO_UUID = '00000000-0000-0000-0000-000000000000';

function getProxyId(proxy: unknown): string | undefined {
  if (typeof proxy !== 'object' || proxy === null) return undefined;
  const idSymbol = Symbol('$id');
  return (proxy as Record<symbol, unknown>)[idSymbol] as string | undefined;
}

function isTokenAttr(attr: string): boolean {
  // TODO: Check if attr is a valid token attribute
  return true;
}

function locateTokenInternal(fileId: string, setId: string, id: string): unknown {
  // TODO: return locateToken(fileId, setId, id);
  return undefined;
}

function locateTokenSetInternal(fileId: string, id: string): unknown {
  // TODO: return locateTokenSet(fileId, id);
  return undefined;
}

function locateTokenThemeInternal(fileId: string, id: string): unknown {
  // TODO: return locateTokenTheme(fileId, id);
  return undefined;
}

function locateTokensLibInternal(fileId: string): unknown {
  // TODO: return locateTokensLib(fileId);
  return undefined;
}

function getTokensInternal(tokensLib: unknown, setId: string): Record<string, unknown> {
  // TODO: return getTokens(tokensLib, setId);
  return {};
}

function getTokensInActiveSetsInternal(tokensLib: unknown, setId: string): unknown {
  // TODO: return getTokensInActiveSets(tokensLib, setId);
  return {};
}

function resolveTokensInternal(tokensTree: unknown): unknown {
  // TODO: return resolveTokens(tokensTree);
  return {};
}

function getThemesInternal(tokensLib: unknown): unknown[] {
  // TODO: return getThemes(tokensLib);
  return [];
}

function getSetsInternal(tokensLib: unknown): unknown[] {
  // TODO: return getSets(tokensLib);
  return [];
}

function getSetByIdInternal(tokensLib: unknown, setName: string): string | undefined {
  // TODO: return getSetById(tokensLib, setName);
  return undefined;
}

function makeTokenInternal(attrs: Record<string, unknown>): { id: string } {
  // TODO: return makeToken(attrs);
  return { id: '' };
}

function makeTokenSetInternal(attrs: Record<string, unknown>): { id: string } {
  // TODO: return makeTokenSet(attrs);
  return { id: '' };
}

function makeTokenThemeInternal(attrs: Record<string, unknown>): { id: string } {
  // TODO: return makeTokenTheme(attrs);
  return { id: '' };
}

function normalizeSetNameInternal(name: string): string {
  // TODO: return normalizeSetName(name);
  return name;
}
