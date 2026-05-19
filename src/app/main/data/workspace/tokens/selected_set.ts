import * as ctob from "app/common/types/tokens-lib";
import * as dsh from "app/main/data/helpers";

export function getSelectedTokenSetId(state: any): string | null {
  const id = state["workspace-tokens"]?.["selected-token-set-id"];
  if (id) return id;

  const fileData = dsh.lookupFileData(state);
  if (!fileData) return null;

  const tokensLib = fileData["tokens-lib"];
  if (!tokensLib) return null;

  const sets = ctob.getSets(tokensLib);
  if (!sets || sets.length === 0) return null;

  return ctob.getId(sets[0]);
}

export function getSelectedTokenSet(state: any): any {
  const setId = getSelectedTokenSetId(state);
  if (!setId) return null;

  const fileData = dsh.lookupFileData(state);
  if (!fileData) return null;

  const tokensLib = fileData["tokens-lib"];
  if (!tokensLib) return null;

  return ctob.getSet(tokensLib, setId);
}

export function getTokenInSelectedSet(state: any, tokenId: string): any {
  const setId = getSelectedTokenSetId(state);
  if (!setId) return null;

  const fileData = dsh.lookupFileData(state);
  if (!fileData) return null;

  const tokensLib = fileData["tokens-lib"];
  if (!tokensLib) return null;

  return ctob.getToken(tokensLib, setId, tokenId);
}

export function getAllTokensInSelectedSet(state: any): any[] {
  const setId = getSelectedTokenSetId(state);
  if (!setId) return [];

  const fileData = dsh.lookupFileData(state);
  if (!fileData) return [];

  const tokensLib = fileData["tokens-lib"];
  if (!tokensLib) return [];

  return ctob.getTokens(tokensLib, setId);
}
