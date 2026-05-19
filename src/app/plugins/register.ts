// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { validate, explain, humanize } from '../../common/schema';
// import { version } from '../../config';
// import { uri, join } from '../../common/uri';
// import { uuid, next } from '../../common/uuid';
// import { updateVals, withoutNils } from '../../common/data';
// import { cmd } from '../../main/repo';
// import { emit } from '../../main/store';

/**
 * Plugin manifest interface
 */
export interface PluginManifest {
  pluginId: string;
  url: string;
  name: string;
  description?: string;
  code?: string;
  icon?: string;
  version?: number;
  host: string;
  permissions: string[];
}

/**
 * Plugin entry interface
 */
export interface PluginEntry {
  pluginId: string;
  url: string;
  name: string;
  description?: string;
  code?: string;
  icon?: string;
  version: number;
  host: string;
}

/**
 * Registry state
 */
interface RegistryState {
  ids: string[];
  data: Record<string, PluginEntry>;
}

const registry = {
  ids: [],
  data: {} as Record<string, PluginEntry>
};

/**
 * Get plugins list
 */
export function pluginsList(): PluginEntry[] {
  return registry.ids.map(id => registry.data[id]);
}

/**
 * Get plugin by ID
 */
export function getPlugin(id: string): PluginEntry | undefined {
  return registry.data[id];
}

/**
 * Parse manifest.json
 */
export function parseManifest(pluginUrl: string, manifest: unknown): PluginManifest | null {
  const name = manifest?.name;
  const desc = manifest?.description;
  const code = manifest?.code;
  const icon = manifest?.icon;
  const version = manifest?.version ?? 1;
  const permissions = manifest?.permissions ?? [];

  // Add implicit permissions
  const finalPermissions = [...permissions];
  if (permissions.includes('content:write')) {
    finalPermissions.push('content:read');
  }
  if (permissions.includes('library:write')) {
    finalPermissions.push('library:read');
  }
  if (permissions.includes('comment:write')) {
    finalPermissions.push('comment:read');
  }

  const origin = version === 1
    ? pluginUrl
    : join(pluginUrl, '.');

  // Find previous plugin
  const prevPlugin = Object.values(registry.data)
    .filter(p => p.name === name && p.host === origin);

  const pluginId = prevPlugin?.pluginId ?? next();

  const result: PluginManifest = {
    pluginId,
    url: origin,
    name,
    description,
    code,
    icon,
    version,
    host: origin,
    permissions: finalPermissions
  };

  // TODO: Validate schema
  // if (!validate(schema, result)) {
  //   console.error('Invalid manifest', explain(schema, result));
  //   return null;
  // }

  return result;
}

/**
 * Save to store
 */
function saveToStore(): void {
  // TODO: Implement store update
  // const registryUpdate = updateVals(registry, { data: withoutNils(registry.data) });
  // cmd('update-profile-props', { props: { plugins: registryUpdate } })
  //   .subscribe(() => {});
}

/**
 * Load from store
 */
function loadFromStore(): void {
  // TODO: Implement store load
  // reset(registry, getIn(state, ['profile', 'props', 'plugins']) ?? {});
}

/**
 * Initialize plugin system
 */
export function init(): void {
  loadFromStore();
}

/**
 * Install a plugin
 */
export function installPlugin!(plugin: PluginManifest): void {
  const { ids, data } = registry;

  const newIds = ids.filter(id => id !== plugin.pluginId);
  newIds.push(plugin.pluginId);

  registry.ids = newIds;
  registry.data[plugin.pluginId] = plugin;

  saveToStore();
}

/**
 * Remove a plugin
 */
export function removePlugin!({ pluginId }: { pluginId }): void {
  const { ids, data } = registry;

  const newIds = ids.filter(id => id !== pluginId);
  registry.ids = newIds;
  delete registry.data[pluginId];

  saveToStore();
}

/**
 * Check if plugin has permission
 */
export function checkPermission(pluginId: string, permission: string): boolean {
  // Special case for core plugin
  if (pluginId === '00000000-0000-0000-0000-000000000000') {
    return true;
  }

  const plugin = registry.data[pluginId];
  if (!plugin) return false;

  const permissions = plugin.permissions ?? [];
  return permissions.includes(permission);
}
