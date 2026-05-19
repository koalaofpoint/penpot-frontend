import * as json from "app/common/json";
import * as cpn from "app/common/path-names";
import * as ctob from "app/common/types/tokens-lib";
import * as cf from "app/config";
import * as ntf from "app/main/data/notifications";
import * as sd from "app/main/data/style-dictionary";
import * as ts from "app/main/data/tokenscript";
import * as wte from "app/main/data/workspace/tokens/errors";
import { emit } from "app/main/store";
import { tr } from "app/util/i18n";
import { from, of } from "rxjs";
import { catchError, map, reduce, filter as rxFilter } from "rxjs/operators";
import { split, replace } from "cuerdas";

function extractReferenceErrors(err: string): string[] | null {
  const parts = split(err, "\n");
  const header1 = parts[0];
  const header2 = parts[1];
  const errors = parts.slice(2);

  if (header1 === "Error: " && header2 === "Reference Errors:") {
    return errors;
  }
  return null;
}

function extractNameError(err: any): wte.ErrorCode | null {
  const schemaError =
    err?.exData?.["app.common.schema/explain"]?.errors?.[0];
  const nameError = schemaError?.in === ["name"];
  if (nameError) {
    return wte.errorExInfo("error.import/invalid-token-name", schemaError?.value, err);
  }
  return null;
}

function groupByValue(m: Record<string, string[]>): Record<string, string[]> {
  return Object.entries(m).reduce(
    (acc, [k, v]) => {
      if (!acc[v]) acc[v] = [];
      acc[v].push(k);
      return acc;
    },
    {} as Record<string, string[]>
  );
}

function showUnknownTypesWarning(unknownTokens: Record<string, string[]>): void {
  const typeToTokens = groupByValue(unknownTokens);
  const details = Object.entries(typeToTokens)
    .map(([tokenType, tokens]) =>
      tr("workspace.tokens.unknown-token-type-section", tokenType, tokens.length)
    )
    .join("<br>");

  emit(
    ntf.show({
      content: tr("workspace.tokens.unknown-token-type-message"),
      detail: details,
      type: "toast",
      level: "info",
    })
  );
}

function decodeJson(jsonString: string): any {
  try {
    return json.decode(jsonString, { keyFn: (k) => k });
  } catch (e) {
    throw wte.errorExInfo("error.import/json-parse-error", jsonString, e as Error);
  }
}

function parseDecodedJson(decodedJson: any, fileName: string): { tokensLib: any; unknownTokens: any } {
  try {
    return {
      tokensLib: ctob.parseDecodedJson(decodedJson, fileName),
      unknownTokens: ctob.getTokensOfUnknownType(decodedJson, {}),
    };
  } catch (e) {
    const err =
      extractNameError(e as Error) ||
      wte.errorExInfo("error.import/invalid-json-data", decodedJson, e as Error);
    throw err;
  }
}

function validateLibrary(data: { tokensLib: any; unknownTokens: any }): any {
  if (data.unknownTokens) {
    showUnknownTypesWarning(data.unknownTokens);
  }

  try {
    const tokensTree = ctob.getAllTokensMap(data.tokensLib);
    const resolvedTokens = cf.flags.has("tokenscript")
      ? of(ts.resolveTokens(tokensTree))
      : sd.resolveTokensWithVerboseErrors(tokensTree);

    return resolvedTokens.pipe(
      map(() => data.tokensLib),
      catchError((sdError) => {
        const referenceErrors = extractReferenceErrors(String(sdError));
        if (referenceErrors) {
          return of(data.tokensLib);
        }
        throw wte.errorExInfo("error.import/style-dictionary-unknown-error", String(sdError), sdError);
      })
    );
  } catch (e) {
    throw wte.errorExInfo("error.import/style-dictionary-unknown-error", "", e as Error);
  }
}

function dropParentDirectory(path: string): string {
  const parts = cpn.splitPath(path);
  return parts.slice(1).join("/");
}

function removePathExtension(path: string): string {
  const parts = split(path, ".");
  return parts.slice(0, -1).join(".");
}

function filePathToSetName(path: string): string {
  return removePathExtension(dropParentDirectory(path));
}

export function importFileStream(filePath: string, fileText: string): any {
  const fileName = removePathExtension(filePath);
  return of(fileText).pipe(
    map(decodeJson),
    map((decoded) => parseDecodedJson(decoded, fileName)),
    map((parsed) => validateLibrary(parsed))
  );
}

export function importDirectoryStream(fileStream: any): any {
  return fileStream.pipe(
    map(([filePath, fileText]: [string, string]) => {
      const setName = filePathToSetName(filePath);
      try {
        return { [setName]: decodeJson(fileText) };
      } catch (e) {
        return { path: filePath, error: e };
      }
    }),
    reduce((merged: any, decoded: any) => {
      if (decoded.error) {
        return merged;
      }
      return [...merged, decoded];
    }, []),
    map((merged: any[]) => {
      const firstEntry = merged[0];
      const val = firstEntry ? Object.values(firstEntry)[0] : {};
      return parseDecodedJson(
        merged.length === 1 ? val : merged,
        Object.keys(firstEntry || {})[0]
      );
    }),
    map((parsed) => validateLibrary(parsed))
  );
}
