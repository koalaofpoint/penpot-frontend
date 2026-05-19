import * as pcb from "app/common/files/changes-builder";
import * as cft from "app/common/files/tokens";
import * as log from "app/common/logging";
import { shapesSeq } from "app/common/types/container";
import { objectContainersSeq } from "app/common/types/file";
import * as cto from "app/common/types/token";
import * as ctob from "app/common/types/tokens-lib";
import * as dch from "app/main/data/changes";
import * as dh from "app/main/data/helpers";
import { of } from "rxjs";
import { mapcat } from "rxjs/operators";
import { blank } from "cuerdas";

log.setLevel("warn");

export interface TokenReference {
  type: "applied-token" | "token-alias";
  shapeId?: string;
  attribute?: string;
  tokenName?: string;
  container?: any;
  sourceTokenId?: string;
  referencedTokenName?: string;
}

export function scanShapeAppliedTokens(
  shape: any,
  tokenName: string,
  container: any
): TokenReference[] {
  const appliedTokens = shape.appliedTokens;
  if (!appliedTokens) return [];

  const references: TokenReference[] = [];
  for (const [attribute, appliedTokenName] of Object.entries(appliedTokens)) {
    if (appliedTokenName === tokenName) {
      references.push({
        type: "applied-token",
        shapeId: shape.id,
        attribute,
        tokenName: appliedTokenName,
        container,
      });
    }
  }
  return references;
}

function findAllTokenValueReferences(tokenValue: any, tokenName: string): string[] {
  if (typeof tokenValue === "string") {
    const refs = cto.findTokenValueReferences(tokenValue);
    return refs.filter((ref) => ref === tokenName);
  }

  if (typeof tokenValue === "object" && !Array.isArray(tokenValue)) {
    const refs: string[] = [];
    for (const v of Object.values(tokenValue)) {
      refs.push(...findAllTokenValueReferences(v, tokenName));
    }
    return refs;
  }

  if (Array.isArray(tokenValue)) {
    const refs: string[] = [];
    for (const v of tokenValue) {
      refs.push(...findAllTokenValueReferences(v, tokenName));
    }
    return refs;
  }

  return [];
}

export function scanTokenValueReferences(
  token: any,
  tokenName: string
): TokenReference[] {
  const value = token.value;
  if (!value) return [];

  const referencedTokenNames = findAllTokenValueReferences(value, tokenName);
  return referencedTokenNames.map((referencedTokenName) => ({
    type: "token-alias",
    sourceTokenId: token.id,
    referencedTokenName,
  }));
}

export function scanWorkspaceTokenReferences(
  fileData: any,
  oldTokenName: string
): {
  appliedTokens: TokenReference[];
  tokenAliases: TokenReference[];
  totalReferences: number;
} {
  const tokensLib = fileData.tokensLib;
  const containers = objectContainersSeq(fileData);

  const matchingApplied: TokenReference[] = [];
  for (const container of containers) {
    const shapes = shapesSeq(container);
    for (const shape of shapes) {
      matchingApplied.push(
        ...scanShapeAppliedTokens(shape, oldTokenName, container)
      );
    }
  }

  let matchingAliases: TokenReference[] = [];
  if (tokensLib) {
    const allTokens = ctob.getAllTokens(tokensLib);
    matchingAliases = allTokens.flatMap((token) =>
      scanTokenValueReferences(token, oldTokenName)
    );
  }

  log.info({
    hint: "token-scan-details",
    "token-name": oldTokenName,
    "containers-count": containers.length,
    "total-applied-refs": matchingApplied.length,
    "matching-applied": matchingApplied.length,
    "total-alias-refs": matchingAliases.length,
    "matching-aliases": matchingAliases.length,
  });

  return {
    appliedTokens: matchingApplied,
    tokenAliases: matchingAliases,
    totalReferences: matchingApplied.length + matchingAliases.length,
  };
}

export function remapTokens(oldTokenName: string, newTokenName: string): any {
  return {
    type: "::remap-tokens",
    watch: (_: any, state: any, __: any) => {
      const fileData = dh.lookupFileData(state);
      const scanResults = scanWorkspaceTokenReferences(fileData, oldTokenName);
      const tokensLib = fileData.tokensLib;
      const sets = ctob.getSets(tokensLib);

      const tokensWithSets: { token: any; set: any }[] = [];
      for (const set of sets) {
        const setId = ctob.getId(set);
        const tokens = ctob.getTokens(tokensLib, setId);
        for (const token of Object.values(tokens) as any[]) {
          tokensWithSets.push({ token, set });
        }
      }

      const refsByContainer = groupBy(
        scanResults.appliedTokens,
        (ref) => ref.container
      );

      let shapeChanges = pcb
        .emptyChanges()
        .withFileData(fileData)
        .withLibraryData(fileData);

      for (const [container, refs] of Object.entries(refsByContainer)) {
        const shapeIds = refs.map((r) => r.shapeId);
        const token = tokensWithSets.find((t) =>
          t.token.name === newTokenName
        ) ||
          tokensWithSets.find((t) => t.token.name === oldTokenName);
        const attributes = new Set(refs.map((r) => r.attribute));

        if (token) {
          shapeChanges = pcb
            .withContainer(shapeChanges, container)
            .updateShapes(shapeIds, (shape) => ({
              ...shape,
              appliedTokens: {
                ...shape.appliedTokens,
                ...cft.attributesMap(attributes, token.token),
              },
            }));
        }
      }

      let tokenChanges = shapeChanges;
      for (const ref of scanResults.tokenAliases) {
        const sourceTokenId = ref.sourceTokenId;
        const found = tokensWithSets.find(
          (t) => t.token.id === sourceTokenId
        );
        if (found) {
          const { token, set } = found;
          const oldValue = token.value;
          const newValue = cto.updateTokenValueReferences(
            oldValue,
            oldTokenName,
            newTokenName
          );
          tokenChanges = pcb.setToken(
            tokenChanges,
            ctob.getId(set),
            token.id,
            { ...token, value: newValue }
          );
        }
      }

      log.info({
        hint: "token-remapping",
        "old-name": oldTokenName,
        "new-name": newTokenName,
        "references-count": scanResults.totalReferences,
      });

      return of(dch.commitChanges(tokenChanges));
    },
  };
}

export function validateTokenRemapping(
  oldName: string,
  newName: string
): { valid: boolean; error?: string; message?: string } {
  if (blank(newName)) {
    return { valid: false, error: "invalid-name", message: "Token name cannot be empty" };
  }
  if (oldName === newName) {
    return { valid: false, error: "no-change", message: "New name is the same as current name" };
  }
  return { valid: true };
}

export function countTokenReferences(
  fileData: any,
  tokenName: string
): number {
  const scanResults = scanWorkspaceTokenReferences(fileData, tokenName);
  log.info({
    hint: "token-reference-scan",
    "token-name": tokenName,
    "applied-refs": scanResults.appliedTokens.length,
    "alias-refs": scanResults.tokenAliases.length,
    total: scanResults.totalReferences,
  });
  return scanResults.totalReferences;
}

function groupBy<T>(arr: T[], fn: (item: T) => string): Record<string, T[]> {
  return arr.reduce(
    (acc, item) => {
      const key = fn(item);
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    },
    {} as Record<string, T[]>
  );
}
