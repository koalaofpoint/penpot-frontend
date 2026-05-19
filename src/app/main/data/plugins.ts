// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { dm } from "../../common/data/macros";
import { pcb } from "../../common/files/changes-builder";
import { ct } from "../../common/time";
import { dch } from "./changes";
import { ev } from "./event";
import { modal } from "./modal";
import { ntf } from "./notifications";
import { st } from "./store";
import { pflag } from "../../plugins/flags";
import { preg } from "../../plugins/register";
import { ug } from "../../util/globals";
import { http } from "../../util/http";
import { tr } from "../../util/i18n";
import { rx } from "../../beicon/v2";
import { ptk } from "../../potok/v2";

export interface PluginManifest {
  pluginId: string;
  name: string;
  description: string;
  host: string;
  code: string;
  icon: string;
  permissions: string[];
  url?: string;
}

export interface PluginState {
  pluginId: string;
  name: string;
  description: string;
  host: string;
  code: string;
  icon: string;
  permissions: string[];
}

export interface State {
  workspaceLocal: {
    openPlugins?: Set<string>;
  };
  pluginsPermissionsPeek: {
    data: Record<string, string[]>;
    updatedAt: number;
  };
  permissions: {
    canEdit: boolean;
  };
}

export const savePluginPermissionsPeek = (id: string, permissions: string[]) => {
  return ptk.reify("save-plugin-permissions-peek", {
    update(state: State): State {
      return {
        ...state,
        pluginsPermissionsPeek: {
          ...state.pluginsPermissionsPeek,
          data: {
            ...state.pluginsPermissionsPeek.data,
            [id]: permissions,
          },
        },
      };
    },
  });
};

export const fetchManifest = (pluginUrl: string) => {
  return rx.pipe(
    http.send({
      method: "get",
      uri: pluginUrl,
      omitDefaultHeaders: true,
      responseType: "json",
    }),
    rx.map((response) => response.body),
    rx.map((body) => preg.parseManifest(pluginUrl, body))
  );
};

export const saveCurrentPlugin = (id: string) => {
  return ptk.reify("save-current-plugin", {
    update(state: State): State {
      const openPlugins = state.workspaceLocal.openPlugins
        ? new Set(state.workspaceLocal.openPlugins)
        : new Set();
      openPlugins.add(id);

      return {
        ...state,
        workspaceLocal: {
          ...state.workspaceLocal,
          openPlugins,
        },
      };
    },
  });
};

export const removeCurrentPlugin = (id: string) => {
  return ptk.reify("remove-current-plugin", {
    update(state: State): State {
      const openPlugins = state.workspaceLocal.openPlugins
        ? new Set(state.workspaceLocal.openPlugins)
        : new Set();
      openPlugins.delete(id);

      return {
        ...state,
        workspaceLocal: {
          ...state.workspaceLocal,
          openPlugins: openPlugins.size > 0 ? openPlugins : undefined,
        },
      };
    },
  });
};

const loadPlugin = (plugin: PluginManifest) => {
  try {
    st.emit(pflag.clear(plugin.pluginId), saveCurrentPlugin(plugin.pluginId));

    (ug.global as any).ɵloadPlugin(
      plugin,
      () => {
        st.emit(removeCurrentPlugin(plugin.pluginId));
      }
    );
  } catch (e) {
    st.emit(removeCurrentPlugin(plugin.pluginId));
    console.error("Error", e);
  }
};

export const openPlugin = (manifest: PluginManifest, userCanEdit: boolean) => {
  if (manifest.url) {
    // If the saved manifest has a URL we fetch the manifest to check for updates
    fetchManifest(manifest.url).subscribe({
      next: (newManifest) => {
        const updatedManifest = { ...newManifest, pluginId: manifest.pluginId };
        const permissions = newManifest.permissions;
        const isEditionPlugin = permissions.includes("content:write") || permissions.includes("library:write");

        st.emit(savePluginPermissionsPeek(newManifest.pluginId, permissions));

        if (isEditionPlugin && !userCanEdit) {
          st.emit(ntf.warn(tr("workspace.plugins.error.need-editor")));
        } else if (JSON.stringify(permissions) !== JSON.stringify(manifest.permissions)) {
          modal.showWithType_("plugin-permissions-update", {
            plugin: updatedManifest,
            onAccept: () => {
              preg.installPlugin(updatedManifest);
              loadPlugin(updatedManifest);
            },
          });
        } else if (JSON.stringify(newManifest) !== JSON.stringify(manifest)) {
          preg.installPlugin(updatedManifest);
          loadPlugin(manifest);
        } else {
          loadPlugin(manifest);
        }
      },
      error: () => {
        // Error fetching the manifest we'll load the plugin with the old manifest
        loadPlugin(manifest);
      },
    });
  } else {
    loadPlugin(manifest);
  }
};

export const closePlugin = (plugin: PluginManifest) => {
  try {
    (ug.global as any).ɵunloadPlugin(plugin.pluginId);
  } catch (e) {
    console.error("Error", e);
  }
};

export const closeCurrentPlugin = (options?: { closeOnlyEditionPlugins?: boolean }) => {
  const { closeOnlyEditionPlugins = false } = options || {};

  return ptk.reify("close-current-plugin", {
    effect(state: State, _prevState: State, _dispatch: ptk.Dispatch) => {
      const ids = state.workspaceLocal.openPlugins || new Set();

      ids.forEach((id) => {
        const plugin = preg.getPlugin(id);
        if (!plugin) return;

        const permissions = dm.getIn(state, ["pluginsPermissionsPeek", "data", id]) || plugin.permissions;
        const isEditionPlugin = permissions.includes("content:write") || permissions.includes("library:write");

        if (!closeOnlyEditionPlugins || isEditionPlugin) {
          closePlugin(plugin);
        }
      });
    },
  });
};

export const delayOpenPlugin = (plugin: PluginManifest) => {
  return ptk.reify("delay-open-plugin", {
    update(state: State): State {
      return {
        ...state,
        [Symbol.for("open-plugin")]: plugin.pluginId,
      };
    },
  });
};

export const checkOpenPlugin = () => {
  return ptk.reify("check-open-plugin", {
    watch(state: State, _prevState: State, _dispatch: ptk.Dispatch) {
      const userCanEdit = dm.getIn(state, ["permissions", "can-edit"]);
      const pluginId = state[Symbol.for("open-plugin")] as string;

      if (pluginId) {
        const plugin = preg.getPlugin(pluginId);
        if (plugin) {
          openPlugin(plugin, userCanEdit);
          return rx.of(
            ev.event({
              name: "start-plugin",
              origin: "workspace",
              name: plugin.name,
              host: plugin.host,
            }),
            () => {
              const newState = { ...state };
              delete newState[Symbol.for("open-plugin")];
              return newState;
            }
          );
        }
      }

      return rx.empty();
    },
  });
};

const updatePluginPermissionsPeek = (plugin: PluginManifest) => {
  if (plugin.url) {
    // If the saved manifest has a URL we fetch the manifest to check for updates
    fetchManifest(plugin.url).subscribe({
      next: (newManifest) => {
        const permissions = newManifest.permissions;
        if (permissions) {
          st.emit(savePluginPermissionsPeek(plugin.pluginId, permissions));
        }
      },
      error: () => {
        // on error do nothing
      },
    });
  }
};

export const updatePluginsPermissionsPeek = () => {
  return ptk.reify("update-plugins-permissions-peek", {
    update(state: State): State {
      const now = ct.now();
      const expiration = ct.inPast({ days: 1 });
      const updatedAt = dm.getIn(state, ["pluginsPermissionsPeek", "updatedAt"], 0);
      const expired = expiration > updatedAt;

      if (expired) {
        const plugins = preg.pluginsList();
        plugins.forEach(updatePluginPermissionsPeek);

        return {
          ...state,
          pluginsPermissionsPeek: {
            ...state.pluginsPermissionsPeek,
            updatedAt: now,
          },
        };
      }

      return state;
    },
  });
};

export const setPluginData = (
  fileId: string,
  type: "file" | "page" | "shape" | "color" | "typography" | "component",
  namespace: string,
  key: string,
  value?: string,
  id?: string,
  pageId?: string
) => {
  return ptk.reify("set-file-plugin-data", {
    watch(_state: State, _prevState: State, _dispatch: ptk.Dispatch, it: any) => {
      const fileData = dm.getIn(it.state, ["files", fileId, "data"]);
      const changes = pcb
        .emptyChanges(it)
        .withFileData(fileData)
        .setPluginData(type, id, pageId, namespace, key, value);
      changes.fileId = fileId;

      return rx.of(dch.commitChanges(changes));
    },
  });
};

export const setPluginDataWithId = (
  fileId: string,
  type: "file" | "page" | "shape" | "color" | "typography" | "component",
  id: string,
  namespace: string,
  key: string,
  value?: string,
  pageId?: string
) => {
  return setPluginData(fileId, type, id, namespace, key, value, pageId);
};

export const setPluginDataWithPageId = (
  fileId: string,
  type: "file" | "page" | "shape" | "color" | "typography" | "component",
  id: string,
  pageId: string,
  namespace: string,
  key: string,
  value?: string
) => {
  return setPluginData(fileId, type, id, namespace, key, value, pageId);
};