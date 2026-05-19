// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { indexBy } from '../../common/data';
// import { getIn } from '../../common/data/macros';
// import { formatInstantLocalized } from '../../common/time';
// import { next } from '../../common/uuid';
// import { flags } from '../../config';
// import { validExportTypes } from '../../main/data/exports/files';
// import { setPluginData as setPluginDataEvent } from '../../main/data/plugins';
// import { createPage } from '../../main/data/workspace';
// import { createVersionFromPlugins, restoreVersionFromPlugin } from '../../main/data/workspace/versions';
// import { cmd } from '../../main/repo';
// import { emit } from '../../main/store';
// import { askMany } from '../../main/worker';
// import { formatId } from './format';
// import { pageProxy } from './page';
// import { parseKeyword } from './parser';
// import { checkPermission, displayNotValid, rejectNotValid, locateFile } from './utils';
// import { userProxy, isUserProxy } from './user';
// import { send } from '../../util/http';

/**
 * Export format type
 */
export type ExportFormat = 'penpot' | 'zip' | null;

/**
 * Export type
 */
export type ExportType = 'all' | 'pages' | 'components';

/**
 * File version proxy interface
 */
export interface FileVersionProxy {
  pluginId: string;
  fileId: string;

  label: string;
  createdBy: unknown;
  createdAt: Date;
  isAutosave: boolean;

  setLabel(label: string): Promise<void>;
  restore(): Promise<void>;
  remove(): Promise<void>;
  pin(): Promise<FileVersionProxy>;
}

/**
 * Check if value is a FileVersionProxy
 */
export function isFileVersionProxy(p: unknown): p is FileVersionProxy {
  return Object(p)?.[Symbol('type')] === 'FileVersionProxy';
}

/**
 * Create a file version proxy
 */
export function fileVersionProxy(
  pluginId: string,
  fileId: string,
  users: Map<string, any>,
  data: any
): FileVersionProxy {
  const self = {} as FileVersionProxy;
  const internalData = { ...data };
  const internalUsers = users;

  // Internal properties
  (self as unknown as Record<symbol, unknown>)[Symbol('$plugin')] = pluginId;
  (self as unknown as Record<symbol, unknown>)[Symbol('$file')] = fileId;
  (self as unknown as Record<symbol, unknown>)[Symbol('$id')] = internalData.id;
  (self as unknown as Record<symbol, unknown>)[Symbol('type')] = 'FileVersionProxy';

  // Public properties
  self.pluginId = pluginId;
  self.fileId = fileId;

  // Label getter
  Object.defineProperty(self, 'label', {
    get(): string {
      return internalData.label ?? '';
    },
    set(label: string): void {
      if (!checkPermission(pluginId, 'content:write')) {
        displayNotValid('label', "Plugin doesn't have 'content:write' permission");
        return;
      }

      if (typeof label !== 'string' || label === '') {
        displayNotValid('label', label);
        return;
      }

      // TODO: Update internal data
      internalData.label = label;
      internalData.createdBy = 'user';

      // TODO: Emit update file snapshot event
      // cmd('update-file-snapshot', { id: internalData.id, label })
      //   .pipe(take(1))
      //   .subscribe(() => {});
    },
    enumerable: true
  });

  // Created by getter
  Object.defineProperty(self, 'createdBy', {
    get(): unknown {
      const userData = internalUsers.get(internalData.profileId);
      return userData ? userProxy(pluginId, userData) : undefined;
    },
    enumerable: true
  });

  // Created at getter
  Object.defineProperty(self, 'createdAt', {
    get(): Date {
      return internalData.createdAt ? new Date(internalData.createdAt) : new Date();
    },
    enumerable: true
  });

  // Is autosave getter
  Object.defineProperty(self, 'isAutosave', {
    get(): boolean {
      return internalData.createdBy === 'system';
    },
    enumerable: true
  });

  // Set label method
  self.setLabel = function(label: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!checkPermission(pluginId, 'content:write')) {
        rejectNotValid(reject, 'label', "Plugin doesn't have 'content:write' permission");
        return;
      }

      if (typeof label !== 'string' || label === '') {
        rejectNotValid(reject, 'label', 'Label must be a non-empty string');
        return;
      }

      // TODO: Emit update file snapshot event
      // cmd('update-file-snapshot', { id: internalData.id, label })
      //   .pipe(take(1))
      //   .subscribe({
      //     next: () => resolve(),
      //     error: reject
      //   });

      resolve();
    });
  };

  // Restore method
  self.restore = function(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!checkPermission(pluginId, 'content:write')) {
        rejectNotValid(reject, 'restore', "Plugin doesn't have 'content:write' permission");
        return;
      }

      const versionId = internalData.id;

      // TODO: Emit restore version event
      // emit(restoreVersionFromPlugin(fileId, versionId, resolve, reject));

      resolve();
    });
  };

  // Remove method
  self.remove = function(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!checkPermission(pluginId, 'content:write')) {
        rejectNotValid(reject, 'remove', "Plugin doesn't have 'content:write' permission");
        return;
      }

      const versionId = internalData.id;

      // TODO: Emit delete file snapshot event
      // cmd('delete-file-snapshot', { id: versionId })
      //   .pipe(map(() => null))
      //   .subscribe({
      //     next: resolve,
      //     error: reject
      //   });

      resolve();
    });
  };

  // Pin method
  self.pin = function(): Promise<FileVersionProxy> {
    return new Promise((resolve, reject) => {
      if (!checkPermission(pluginId, 'content:write')) {
        rejectNotValid(reject, 'pin', "Plugin doesn't have 'content:write' permission");
        return;
      }

      if (internalData.createdBy !== 'system') {
        rejectNotValid(reject, 'pin', 'Only auto-saved versions can be pinned');
        return;
      }

      const params = {
        id: internalData.id,
        label: formatInstantLocalized(internalData.createdAt)
      };

      // TODO: Emit get team users and update file snapshot events
      // zip(
      //   cmd('get-team-users', { fileId }),
      //   cmd('update-file-snapshot', params)
      // )
      //   .pipe(take(1))
      //   .subscribe({
      //     next: ([[users, data]]) => {
      //       const usersMap = indexBy(users, 'id');
      //       resolve(fileVersionProxy(pluginId, fileId, usersMap, internalData));
      //     },
      //     error: reject
      //   });

      resolve(self);
    });
  };

  return self;
}

/**
 * File proxy interface
 */
export interface FileProxy {
  pluginId: string;
  id: string;

  name: string;
  pages: PageProxy[];

  getPluginData(key: string): string | undefined;
  setPluginData(key: string, value: string): void;
  getPluginDataKeys(): string[];
  getSharedPluginData(namespace: string, key: string): string | undefined;
  setSharedPluginData(namespace: string, key: string, value: string): void;
  getSharedPluginDataKeys(namespace: string): string[];

  createPage(): PageProxy;
  export(format: ExportFormat, type: ExportType): Promise<Uint8Array>;
  findVersions(criteria?: { createdBy?: unknown }): Promise<FileVersionProxy[]>;
  saveVersion(label?: string): Promise<FileVersionProxy>;
}

/**
 * Check if value is a FileProxy
 */
export function isFileProxy(p: unknown): p is FileProxy {
  return Object(p)?.[Symbol('type')] === 'FileProxy';
}

/**
 * Create a file proxy
 */
export function fileProxy(pluginId: string, id: string): FileProxy {
  const self = {} as FileProxyProxyType;

  // Internal properties
  (self as unknown as Record<symbol, unknown>)[Symbol('$plugin')] = pluginId;
  (self as unknown as Record<symbol, unknown>)[Symbol('$id')] = id;
  (self as unknown as Record<symbol, unknown>)[Symbol('type')] = 'FileProxy';

  // Public properties
  self.pluginId = pluginId;
  self.id = formatId(id);

  // Name getter
  Object.defineProperty(self, 'name', {
    get(): string {
      const file = locateFileInternal(id);
      return file?.name ?? '';
    },
    enumerable: true
  });

  // Pages getter
  Object.defineProperty(self, 'pages', {
    get(): PageProxy[] {
      return getPages();
    },
    enumerable: true
  });

  // Get pages method
  const getPages = function(): PageProxy[] {
    const file = locateFileInternal(id);
    const pagesData = file?.data?.pages ?? [];

    // TODO: return pagesData.map(page => pageProxy(pluginId, id, page.id));
    return [];
  };

  // Get plugin data method
  self.getPluginData = function(key: string): string | undefined {
    if (typeof key !== 'string') {
      displayNotValid('getPluginData-key', key);
      return undefined;
    }

    const file = locateFileInternal(id);
    // TODO: return getIn(file, ['data', 'plugin-data', `plugin-${pluginId}`, key]);
    return undefined;
  };

  // Set plugin data method
  self.setPluginData = function(key: string, value: string): void {
    if (typeof key !== 'string' || key === '') {
      displayNotValid('setPluginData-key', key);
      return;
    }

    if (typeof value !== 'string') {
      displayNotValid('setPluginData-value', value);
      return;
    }

    if (!checkPermission(pluginId, 'content:write')) {
      displayNotValid('setPluginData', "Plugin doesn't have 'content:write' permission");
      return;
    }

    // TODO: Emit set plugin data event
    // emit(setPluginDataEvent(id, 'file', `plugin-${pluginId}`, key, value));
  };

  // Get plugin data keys method
  self.getPluginDataKeys = function(): string[] {
    const file = locateFileInternal(id);
    const pluginData = file?.data?.pluginData?.[`plugin-${pluginId}`] ?? {};
    return Object.keys(pluginData);
  };

  // Get shared plugin data method
  self.getSharedPluginData = function(namespace: string, key: string): string | undefined {
    if (typeof namespace !== 'string') {
      displayNotValid('getSharedPluginData-namespace', namespace);
      return undefined;
    }

    if (typeof key !== 'string') {
      displayNotValid('getSharedPluginData-key', key);
      return undefined;
    }

    const file = locateFileInternal(id);
    // TODO: return getIn(file, ['data', 'plugin-data', `shared-${namespace}`, key]);
    return undefined;
  };

  // Set shared plugin data method
  self.setSharedPluginData = function(namespace: string, key: string, value: string): void {
    if (typeof namespace !== 'string' || namespace === '') {
      displayNotValid('setSharedPluginData-namespace', namespace);
      return;
    }

    if (typeof key !== 'string' || key === '') {
      displayNotValid('setSharedPluginData-key', key);
      return;
    }

    if (typeof value !== 'string') {
      displayNotValid('setSharedPluginData-value', value);
      return;
    }

    if (!checkPermission(pluginId, 'content:write')) {
      displayNotValid('setSharedPluginData', "Plugin doesn't have 'content:write' permission");
      return;
    }

    // TODO: Emit set plugin data event
    // emit(setPluginDataEvent(id, 'file', `shared-${namespace}`, key, value));
  };

  // Get shared plugin data keys method
  self.getSharedPluginDataKeys = function(namespace: string): string[] {
    if (typeof namespace !== 'string') {
      displayNotValid('getSharedPluginDataKeys', namespace);
      return [];
    }

    const file = locateFileInternal(id);
    const sharedData = file?.data?.pluginData?.[`shared-${namespace}`] ?? {};
    return Object.keys(sharedData);
  };

  // Create page method
  self.createPage = function(): PageProxy {
    if (!checkPermission(pluginId, 'content:write')) {
      displayNotValid('createPage', "Plugin doesn't have 'content:write' permission");
      throw new Error("Plugin doesn't have 'content:write' permission");
    }

    // TODO: const pageId = next();
    // TODO: emit(createPage({ pageId, fileId: id }));
    // TODO: return pageProxy(pluginId, id, pageId);
    return {} as PageProxy;
  };

  // Export method
  self.export = function(format: ExportFormat, type: ExportType): Promise<Uint8Array> {
    return new Promise((resolve, reject) => {
      const exportType = parseKeywordInternal(type) ?? 'all';

      if (format && !['penpot', 'zip'].includes(format)) {
        rejectNotValid(reject, 'format', `Invalid format: ${format}`);
        return;
      }

      // TODO: if (!validExportTypes.includes(exportType)) {
      // TODO:   rejectNotValid(reject, 'type', `Invalid type: ${type}`);
      // TODO:   return;
      // TODO: }

      const file = locateFileInternal(id);
      // TODO: const features = getState().features;
      // TODO: const teamId = getState().currentTeamId;

      const exportFormat = format === 'zip'
        ? 'legacy-zip'
        : 'binfile-v3'; // TODO: check if flags.export-file-v3

      // TODO: askMany({
      // TODO:   cmd: 'export-files',
      // TODO:   format: exportFormat,
      // TODO:   type: exportType,
      // TODO:   teamId,
      // TODO:   features,
      // TODO:   files: [file]
      // TODO: })
      // TODO:   .pipe(
      // TODO:     mergeMap(msg => {
      // TODO:       switch (msg.type) {
      // TODO:         case 'error':
      // TODO:           return throwError(() => new Error('cannot export file'));
      // TODO:         case 'progress':
      // TODO:           return EMPTY;
      // TODO;         case 'finish':
      // TODO;           return send({
      // TODO:             method: 'get',
      // TODO:             uri: msg.uri,
      // TODO;             mode: 'no-cors',
      // TODO;             responseType: 'buffer'
      // TODO;           });
      // TODO;         default:
      // TODO:           return EMPTY;
      // TODO;       }
      // TODO;     }),
      // TODO;     take(1),
      // TODO;     map(result => new Uint8Array(result.body))
      // TODO;   )
      // TODO;   .subscribe({
      // TODO;     next: resolve,
      // TODO;     error: reject
      // TODO;   });

      resolve(new Uint8Array());
    });
  };

  // Find versions method
  self.findVersions = function(criteria?: { createdBy?: unknown }): Promise<FileVersionProxy[]> {
    const user = criteria?.createdBy;

    return new Promise((resolve, reject) => {
      if (!checkPermission(pluginId, 'content:read')) {
        rejectNotValid(reject, 'findVersions', "Plugin doesn't have 'content:read' permission");
        return;
      }

      if (user && !isUserProxyInternal(user)) {
        rejectNotValid(reject, 'findVersions-user', 'Created by user is not a valid user object');
        return;
      }

      // TODO: zip(
      // TODO:   cmd('get-team-users', { fileId: id }),
      // TODO:   cmd('get-file-snapshots', { fileId: id })
      // TODO; )
      // TODO; .pipe(take(1))
      // TODO; .subscribe({
      // TODO;   next: ([[users, snapshots]]) => {
      // TODO;     const usersMap = indexBy(users, 'id');
      // TODO;     const userId = (user as Record<string, unknown>)['id'] as string;
      // TODO;     const filtered = snapshots.filter(
      // TODO;       snapshot => !userId || String(snapshot.profileId) === userId
      // TODO;     );
      // TODO;     const versions = filtered.map(
      // TODO;       snapshot => fileVersionProxy(pluginId, id, usersMap, snapshot)
      // TODO;     );
      // TODO;     resolve(versions);
      // TODO;   },
      // TODO;   error: reject
      // TODO; });

      resolve([]);
    });
  };

  // Save version method
  self.saveVersion = function(label?: string): Promise<FileVersionProxy> {
    const usersPromise = new Promise<any[]>((resolve, reject) => {
      // TODO: cmd('get-team-users', { fileId: id })
      // TODO;   .subscribe({
      // TODO;     next: resolve,
      // TODO;     error: reject
      // TODO;   });
      resolve([]);
    });

    const createVersionPromise = new Promise<any>((resolve, reject) => {
      if (!checkPermission(pluginId, 'content:write')) {
        rejectNotValid(reject, 'saveVersion', "Plugin doesn't have 'content:write' permission");
        return;
      }

      // TODO: emit(createVersionFromPlugins(id, label, resolve, reject));
      resolve({});
    });

    return Promise.all([usersPromise, createVersionPromise])
      .then(([users, data]) => {
        const usersMap = indexByInternal(users, 'id');
        return fileVersionProxy(pluginId, id, usersMap, data);
      });
  };

  return self;
}

// Helper functions

type FileProxyProxyType = FileProxy & { [Symbol('$id')]: string; [Symbol('$plugin')]: string; [Symbol('type')]: string };

interface PageProxy {
  pluginId: string;
  fileId: string;
  id: string;
}

function formatId(id: string): string {
  // TODO: return formatId(id);
  return id;
}

function formatInstantLocalized(date: unknown): string {
  // TODO: return formatInstantLocalized(date);
  return '';
}

function parseKeywordInternal(value: unknown): ExportType {
  // TODO: return parseKeyword(value) ?? 'all';
  return 'all';
}

function checkPermission(pluginId: string, permission: string): boolean {
  // TODO: return checkPermission(pluginId, permission);
  return true;
}

function displayNotValid(code: string, message: string): void {
  console.error(`[PENPOT PLUGIN] Value not valid: ${message}. Code: ${code}`);
}

function rejectNotValid(reject: (reason?: any) => void, code: string, message: string): void {
  reject(new Error(`[PENPOT PLUGIN] Value not valid: ${message}. Code: ${code}`));
}

function locateFileInternal(id: string): { name: string; data: any } | undefined {
  // TODO: return locateFile(id);
  return undefined;
}

function isUserProxyInternal(p: unknown): boolean {
  // TODO: return isUserProxy(p);
  return true;
}

function indexByInternal<T>(arr: T[], key: keyof T): Map<string, T> {
  const map = new Map<string, T>();
  for (const item of arr) {
    const keyValue = item[key] as string;
    if (keyValue) {
      map.set(keyValue, item);
    }
  }
  return map;
}
