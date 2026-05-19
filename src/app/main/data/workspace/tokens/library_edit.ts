import * as dm from "app/common/data/macros";
import * as pcb from "app/common/files/changes-builder";
import * as cfh from "app/common/files/helpers";
import * as gpt from "app/common/geom/point";
import * as clt from "app/common/logic/tokens";
import * as cpn from "app/common/path-names";
import * as cts from "app/common/types/shape";
import * as ctob from "app/common/types/tokens-lib";
import * as uuid from "app/common/uuid";
import * as dch from "app/main/data/changes";
import * as ev from "app/main/data/event";
import * as dsh from "app/main/data/helpers";
import * as ntf from "app/main/data/notifications";
import * as dwsh from "app/main/data/workspace/shapes";
import * as dwtp from "app/main/data/workspace/tokens/propagation";
import { tr } from "app/util/i18n";
import { of } from "rxjs";
import { startsWith } from "cuerdas";

export function getTokensLib(state: any): any {
  const fileData = dsh.lookupFileData(state);
  return fileData?.tokensLib;
}

export function lookupTokenSet(state: any, id?: string): any {
  const selected = id || dm.getIn(state, ["workspace-tokens", "selected-token-set-id"]);
  if (!selected) return null;

  const tokensLib = getTokensLib(state);
  if (!tokensLib) return null;

  return ctob.getSet(tokensLib, selected);
}

export function updateShape(id: string, attrs: any): any {
  if (!uuid.isUuid(id)) {
    throw new Error("expected valid uuid for `id`");
  }

  const checkedAttrs = cts.checkShapeAttrs(attrs);

  return {
    type: "::update-shape",
    watch: (_: any, __: any, ___: any) => {
      return of(
        dwsh.updateShapes([id], (shape) => ({ ...shape, ...checkedAttrs }))
      );
    },
  };
}

function removePathsRecursively(path: string, paths: string[]): string[] {
  return paths.filter((p) => !startsWith(p, path));
}

export function addPath(path: string, paths: string[]): string[] {
  const splitPath = cpn.splitPath(path, { separator: "." });
  const partialPaths = splitPath.reduce((acc: string[], segment) => {
    const newAcc = acc.length === 0 ? segment : `${acc[acc.length - 1]}.${segment}`;
    return [...acc, newAcc];
  }, []);

  return [...new Set([...paths, ...partialPaths])];
}

export function clearTokensPaths(): any {
  return {
    type: "::clear-tokens-paths",
    update: (_: any, state: any) => ({
      ...state,
      "workspace-tokens": {
        ...state["workspace-tokens"],
        "unfolded-token-paths": [],
      },
    }),
  };
}

export function toggleTokenPath(path: string): any {
  return {
    type: "::toggle-token-path",
    update: (_: any, state: any) => {
      const currentPaths = state["workspace-tokens"]?.["unfolded-token-paths"] || [];
      const newPaths = currentPaths.includes(path)
        ? removePathsRecursively(path, currentPaths)
        : addPath(path, currentPaths);

      return {
        ...state,
        "workspace-tokens": {
          ...state["workspace-tokens"],
          "unfolded-token-paths": newPaths,
        },
      };
    },
  };
}

export function createTokenTheme(tokenTheme: any): any {
  return {
    type: "::create-token-theme",
    watch: (it: any, state: any, _: any) => {
      const data = dsh.lookupFileData(state);
      const tokensLib = data.tokensLib;

      if (tokensLib && ctob.getTheme(tokensLib, ctob.getId(tokenTheme))) {
        return of(
          ntf.show({
            content: tr("errors.token-theme-already-exists"),
            type: "toast",
            level: "error",
            timeout: 9000,
          })
        );
      }

      const changes = pcb
        .emptyChanges(it)
        .withLibraryData(data)
        .setTokenTheme(ctob.getId(tokenTheme), tokenTheme);

      return of(dch.commitChanges(changes));
    },
  };
}

export function updateTokenTheme(id: string, tokenTheme: any): any {
  return {
    type: "::update-token-theme",
    watch: (it: any, state: any, _: any) => {
      const data = dsh.lookupFileData(state);
      const tokensLib = data.tokensLib;

      if (
        id !== ctob.getId(tokenTheme) &&
        ctob.getTheme(tokensLib, ctob.getId(tokenTheme))
      ) {
        return of(
          ntf.show({
            content: tr("errors.token-theme-already-exists"),
            type: "toast",
            level: "error",
            timeout: 9000,
          })
        );
      }

      const changes = pcb
        .emptyChanges(it)
        .withLibraryData(data)
        .setTokenTheme(ctob.getId(tokenTheme), tokenTheme);

      return of(dch.commitChanges(changes));
    },
  };
}

export function setTokenThemeActive(id: string, active: boolean): any {
  if (!uuid.isUuid(id)) {
    throw new Error("expected a uuid for `id`");
  }
  if (typeof active !== "boolean") {
    throw new Error("expected a boolean for `active`");
  }

  return {
    type: "::set-token-theme-active",
    watch: (_: any, state: any, __: any) => {
      const data = dsh.lookupFileData(state);
      const tokensLib = getTokensLib(state);
      const changes = pcb
        .emptyChanges()
        .withLibraryData(data)
        .generateSetActiveTokenTheme(tokensLib, id, active);

      return of(dch.commitChanges(changes), dwtp.propagateWorkspaceTokens());
    },
  };
}

export function toggleTokenThemeActive(id: string): any {
  return {
    type: "::toggle-token-theme-active",
    watch: (it: any, state: any, _: any) => {
      const data = dsh.lookupFileData(state);
      const tokensLib = getTokensLib(state);
      const changes = pcb
        .emptyChanges(it)
        .withLibraryData(data)
        .generateToggleTokenTheme(tokensLib, id);

      return of(dch.commitChanges(changes), dwtp.propagateWorkspaceTokens());
    },
  };
}

export function deleteTokenTheme(id: string): any {
  return {
    type: "::delete-token-theme",
    watch: (it: any, state: any, _: any) => {
      const data = dsh.lookupFileData(state);
      const changes = pcb
        .emptyChanges(it)
        .withLibraryData(data)
        .setTokenTheme(id, null);

      return of(dch.commitChanges(changes), dwtp.propagateWorkspaceTokens());
    },
  };
}

export function createTokenSet(tokenSet: any): any {
  if (!ctob.tokenSet(tokenSet)) {
    throw new Error("a token set is required");
  }

  return {
    type: "::create-token-set",
    watch: (it: any, state: any, _: any) => {
      const data = dsh.lookupFileData(state);
      const changes = pcb
        .emptyChanges(it)
        .withLibraryData(data)
        .setTokenSet(ctob.getId(tokenSet), tokenSet);

      return of(
        setSelectedTokenSetId(ctob.getId(tokenSet)),
        dch.commitChanges(changes)
      );
    },
  };
}

export function renameTokenSet(tokenSet: any, newName: string): any {
  if (!ctob.tokenSet(tokenSet)) {
    throw new Error("a token set is required");
  }
  if (typeof newName !== "string") {
    throw new Error("a new name is required");
  }

  return {
    type: "::update-token-set",
    watch: (it: any, state: any, _: any) => {
      const data = dsh.lookupFileData(state);
      const changes = pcb
        .emptyChanges(it)
        .withLibraryData(data)
        .renameTokenSet(ctob.getId(tokenSet), newName);

      return of(
        setSelectedTokenSetId(ctob.getId(tokenSet)),
        dch.commitChanges(changes)
      );
    },
  };
}

export function renameTokenSetGroup(
  setGroupPath: string,
  setGroupFname: string
): any {
  return {
    type: "::rename-token-set-group",
    watch: (it: any, _: any, __: any) => {
      const changes = pcb
        .emptyChanges(it)
        .renameTokenSetGroup(setGroupPath, setGroupFname);

      return of(dch.commitChanges(changes));
    },
  };
}

export function duplicateTokenSet(id: string): any {
  return {
    type: "::duplicate-token-set",
    watch: (it: any, state: any, _: any) => {
      const data = dsh.lookupFileData(state);
      const tokensLib = data.tokensLib;
      const suffix = tr("workspace.tokens.duplicate-suffix");

      const tokenSet = ctob.duplicateSet(id, tokensLib, { suffix });
      if (!tokenSet) return of();

      const changes = pcb
        .emptyChanges(it)
        .withLibraryData(data)
        .setTokenSet(ctob.getId(tokenSet), tokenSet);

      return of(
        setSelectedTokenSetId(ctob.getId(tokenSet)),
        dch.commitChanges(changes)
      );
    },
  };
}

export function setEnabledTokenSet(name: string, enabled: boolean): any {
  if (typeof name !== "string") {
    throw new Error("expected a string for `name`");
  }
  if (typeof enabled !== "boolean") {
    throw new Error("expected a boolean for `enabled`");
  }

  return {
    type: "::set-enabled-token-set",
    watch: (_: any, state: any, __: any) => {
      const data = dsh.lookupFileData(state);
      const tlib = getTokensLib(state);
      const changes = pcb
        .emptyChanges()
        .withLibraryData(data)
        .generateSetEnabledTokenSet(tlib, name, enabled);

      return of(dch.commitChanges(changes), dwtp.propagateWorkspaceTokens());
    },
  };
}

export function toggleTokenSet(name: string): any {
  if (typeof name !== "string") {
    throw new Error("expected a string for `name`");
  }

  return {
    type: "::toggle-token-set",
    watch: (_: any, state: any, __: any) => {
      const data = dsh.lookupFileData(state);
      const tlib = getTokensLib(state);
      const changes = pcb
        .emptyChanges()
        .withLibraryData(data)
        .generateToggleTokenSet(tlib, name);

      return of(dch.commitChanges(changes), dwtp.propagateWorkspaceTokens());
    },
  };
}

export function toggleTokenSetGroup(groupPath: string): any {
  return {
    type: "::toggle-token-set-group",
    watch: (_: any, state: any, __: any) => {
      const data = dsh.lookupFileData(state);
      const changes = pcb
        .emptyChanges()
        .withLibraryData(data)
        .generateToggleTokenSetGroup(getTokensLib(state), groupPath);

      return of(dch.commitChanges(changes), dwtp.propagateWorkspaceTokens());
    },
  };
}

export function importTokensLib(lib: any): any {
  return {
    type: "::import-tokens-lib",
    watch: (it: any, state: any, _: any) => {
      const data = dsh.lookupFileData(state);
      const changes = pcb
        .emptyChanges(it)
        .withLibraryData(data)
        .setTokensLib(lib);

      return of(dch.commitChanges(changes), dwtp.propagateWorkspaceTokens());
    },
  };
}

export function deleteTokenSet(id: string): any {
  return {
    type: "::delete-token-set",
    watch: (it: any, state: any, _: any) => {
      const data = dsh.lookupFileData(state);
      const changes = pcb
        .emptyChanges(it)
        .withLibraryData(data)
        .setTokenSet(id, null);

      return of(dch.commitChanges(changes), dwtp.propagateWorkspaceTokens());
    },
  };
}

export function deleteTokenSetGroup(path: string): any {
  return {
    type: "::delete-token-set-group",
    watch: (it: any, state: any, _: any) => {
      const data = dsh.lookupFileData(state);
      const changes = pcb
        .emptyChanges(it)
        .withLibraryData(data)
        .generateDeleteTokenSetGroup(getTokensLib(state), path);

      return of(dch.commitChanges(changes), dwtp.propagateWorkspaceTokens());
    },
  };
}

export function dropError(params: { error: string; toPath?: string }): any {
  return {
    type: "::drop-error",
    watch: (_: any, __: any, ___: any) => {
      const content = (() => {
        switch (params.error) {
          case "path-exists":
            return tr("errors.token-set-exists-on-drop", params.toPath);
          case "parent-to-child":
            return tr("errors.drop-token-set-parent-to-child");
          default:
            return null;
        }
      })();

      if (!content) return of();

      return of(
        ntf.show({
          content,
          type: "toast",
          level: "error",
          timeout: 9000,
        })
      );
    },
  };
}

export function dropTokenSetGroup(dropOpts: any): any {
  return {
    type: "::drop-token-set-group",
    watch: (it: any, state: any, _: any) => {
      try {
        const changes = clt.generateMoveTokenSetGroup(
          pcb.emptyChanges(it),
          getTokensLib(state),
          dropOpts
        );
        if (!changes) return of();

        return of(
          dch.commitChanges(changes),
          dwtp.propagateWorkspaceTokens()
        );
      } catch (e: any) {
        return of(dropError(e?.exData || { error: "unknown" }));
      }
    },
  };
}

export function dropTokenSet(params: any): any {
  return {
    type: "::drop-token-set",
    watch: (it: any, state: any, _: any) => {
      try {
        const tokensLib = getTokensLib(state);
        const changes = clt.generateMoveTokenSet(
          pcb.emptyChanges(it),
          tokensLib,
          params
        );

        return of(
          dch.commitChanges(changes),
          dwtp.propagateWorkspaceTokens()
        );
      } catch (e: any) {
        return of(dropError(e?.exData || { error: "unknown" }));
      }
    },
  };
}

function createTokenWithSet(token: any): any {
  return {
    type: "::create-token-and-set",
    watch: (_: any, state: any, __: any) => {
      const data = dsh.lookupFileData(state);
      const setName = "Global";
      const tokenSet = ctob.makeTokenSet({ name: setName });
      const hiddenTheme = ctob.makeHiddenTheme();
      const hiddenThemeWithSet = ctob.enableSet(hiddenTheme, setName);

      const changes = pcb
        .emptyChanges()
        .withLibraryData(data)
        .setTokenSet(ctob.getId(tokenSet), tokenSet)
        .setToken(ctob.getId(tokenSet), token.id, token)
        .setTokenTheme(ctob.getId(hiddenTheme), hiddenThemeWithSet)
        .setActiveTokenThemes(new Set([ctob.hiddenThemePath]));

      return of(
        dch.commitChanges(changes),
        setSelectedTokenSetId(ctob.getId(tokenSet))
      );
    },
  };
}

export function createToken(setId: string | null, token: any): any {
  return {
    type: "::create-token",
    watch: (it: any, state: any, _: any) => {
      const tokenSet = setId
        ? lookupTokenSet(state, setId)
        : lookupTokenSet(state);

      if (tokenSet) {
        const data = dsh.lookupFileData(state);
        const tokenType = token.type;
        const changes = pcb
          .emptyChanges(it)
          .withLibraryData(data)
          .setToken(ctob.getId(tokenSet), token.id, token);

        return of(
          dch.commitChanges(changes),
          ev.dataEvent("event", { name: "create-token", type: tokenType })
        );
      }

      return of(createTokenWithSet(token));
    },
  };
}

export function updateToken(
  setId: string | null,
  id: string,
  params: any
): any {
  if (!uuid.isUuid(id)) {
    throw new Error("expected uuid for `id`");
  }

  return {
    type: "::update-token",
    watch: (it: any, state: any, _: any) => {
      const tokenSet = setId
        ? lookupTokenSet(state, setId)
        : lookupTokenSet(state);
      const data = dsh.lookupFileData(state);
      const token = ctob.getToken(getTokensLib(state), ctob.getId(tokenSet), id);
      const tokenP = { ...token, ...params };
      const tokenType = token.type;

      const changes = pcb
        .emptyChanges(it)
        .withLibraryData(data)
        .setToken(ctob.getId(tokenSet), id, tokenP);

      return of(
        dch.commitChanges(changes),
        ev.dataEvent("event", { name: "edit-token", type: tokenType })
      );
    },
  };
}

export function deleteToken(setId: string | null, tokenId: string): any {
  dm.assert!(uuid.isUuid(setId));
  dm.assert!(uuid.isUuid(tokenId));

  return {
    type: "::delete-token",
    watch: (it: any, state: any, _: any) => {
      const data = dsh.lookupFileData(state);
      const tokenSet = setId
        ? lookupTokenSet(state, setId)
        : lookupTokenSet(state);
      const token = ctob.getToken(
        getTokensLib(state),
        ctob.getId(tokenSet),
        tokenId
      );
      const tokenType = token?.type;

      const changes = pcb
        .emptyChanges(it)
        .withLibraryData(data)
        .setToken(setId, tokenId, null);

      return of(
        dch.commitChanges(changes),
        ev.dataEvent("event", { name: "delete-token", type: tokenType })
      );
    },
  };
}

export function bulkDeleteTokens(setId: string, tokenIds: string[]): any {
  dm.assert!(uuid.isUuid(setId));
  dm.assert!(tokenIds.every(uuid.isUuid));

  return {
    type: "::bulk-delete-tokens",
    watch: (it: any, state: any, _: any) => {
      const data = dsh.lookupFileData(state);
      const changes = tokenIds.reduce(
        (acc, tokenId) => pcb.setToken(acc, setId, tokenId, null),
        pcb.emptyChanges(it).withLibraryData(data)
      );

      return of(
        dch.commitChanges(changes),
        ev.dataEvent("event", { name: "delete-token-node" })
      );
    },
  };
}

export function duplicateToken(tokenId: string): any {
  dm.assert!(uuid.isUuid(tokenId));

  return {
    type: "::duplicate-token",
    watch: (_: any, state: any, __: any) => {
      const tokenSet = lookupTokenSet(state);
      const tokensLib = getTokensLib(state);
      if (!tokenSet || !tokensLib) return of();

      const token = ctob.getToken(
        tokensLib,
        ctob.getId(tokenSet),
        tokenId
      );
      if (!token) return of();

      const tokens = Object.values(
        ctob.getTokens(tokensLib, ctob.getId(tokenSet))
      ) as any[];
      const unames = tokens.map((t) => t.name);
      const suffix = tr("workspace.tokens.duplicate-suffix");
      const copyName = cfh.generateUniqueName(token.name, unames, { suffix });
      const newToken = ctob.rename(ctob.reid(token, uuid.next()), copyName);

      return of(createToken(null, newToken));
    },
  };
}

export function assignTokenContextMenu(params: {
  position: gpt.Point;
} | null): any {
  if (params) {
    if (!gpt.point(params.position)) {
      throw new Error("expected a point instance for `position` param");
    }
  }

  return {
    type: "::show-token-context-menu",
    update: (_: any, state: any) => ({
      ...state,
      "workspace-tokens": params
        ? {
            ...state["workspace-tokens"],
            "token-context-menu": params,
          }
        : Object.fromEntries(
            Object.entries(state["workspace-tokens"] || {}).filter(
              ([k]) => k !== "token-context-menu"
            )
          ),
    }),
  };
}

export function assignTokenNodeContextMenu(params: {
  position: gpt.Point;
} | null): any {
  if (params) {
    if (!gpt.point(params.position)) {
      throw new Error("expected a point instance for `position` param");
    }
  }

  return {
    type: "::show-token-node-context-menu",
    update: (_: any, state: any) => ({
      ...state,
      "workspace-tokens": params
        ? {
            ...state["workspace-tokens"],
            "token-node-context-menu": params,
          }
        : Object.fromEntries(
            Object.entries(state["workspace-tokens"] || {}).filter(
              ([k]) => k !== "token-node-context-menu"
            )
          ),
    }),
  };
}

export function assignTokenSetContextMenu(params: {
  position: gpt.Point;
} | null): any {
  if (params) {
    if (!gpt.point(params.position)) {
      throw new Error("expected valid point for `position` param");
    }
  }

  return {
    type: "::assign-token-set-context-menu",
    update: (_: any, state: any) => ({
      ...state,
      "workspace-tokens": params
        ? {
            ...state["workspace-tokens"],
            "token-set-context-menu": params,
          }
        : Object.fromEntries(
            Object.entries(state["workspace-tokens"] || {}).filter(
              ([k]) => k !== "token-set-context-menu"
            )
          ),
    }),
  };
}

export function setSelectedTokenSetId(id: string): any {
  return {
    type: "::set-selected-token-set-id",
    update: (_: any, state: any) => ({
      ...state,
      "workspace-tokens": {
        ...state["workspace-tokens"],
        "selected-token-set-id": id,
      },
    }),
  };
}

export function startTokenSetEdition(editionId: string | uuid.UUID): any {
  if (typeof editionId !== "string" && typeof editionId !== "symbol") {
    throw new Error("expected a string or uuid for `editionId`");
  }

  return {
    type: "::start-token-set-edition",
    update: (_: any, state: any) => ({
      ...state,
      "workspace-tokens": {
        ...state["workspace-tokens"],
        "token-set-edition-id": editionId,
      },
    }),
  };
}

export function startTokenSetCreation(path: string[]): any {
  if (!Array.isArray(path)) {
    throw new Error("expected a vector for `path`");
  }

  return {
    type: "::start-token-set-creation",
    update: (_: any, state: any) => ({
      ...state,
      "workspace-tokens": {
        ...state["workspace-tokens"],
        "token-set-new-path": path,
      },
    }),
  };
}

export function clearTokenSetEdition(): any {
  return {
    type: "::clear-token-set-edition",
    update: (_: any, state: any) => ({
      ...state,
      "workspace-tokens": Object.fromEntries(
        Object.entries(state["workspace-tokens"] || {}).filter(
          ([k]) => k !== "token-set-edition-id"
        )
      ),
    }),
  };
}

export function clearTokenSetCreation(): any {
  return {
    type: "::clear-token-set-creation",
    update: (_: any, state: any) => ({
      ...state,
      "workspace-tokens": Object.fromEntries(
        Object.entries(state["workspace-tokens"] || {}).filter(
          ([k]) => k !== "token-set-new-path"
        )
      ),
    }),
  };
}
