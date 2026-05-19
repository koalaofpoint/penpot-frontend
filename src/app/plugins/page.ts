// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { checkPermission } from './register';
// import { uuid, next, zero } from '../../common/uuid';

/**
 * Flow proxy interface
 */
export interface FlowProxy {
  pluginId: string;
  fileId?: string;
  pageId?: string;
  id?: string;

  get(name: string): string;
  set(name: string): void;
  getBackground(): string;
  setBackground(color: string): void;
  getFlows(): unknown[];
  getRulerGuides(): unknown[];
}

  /**
 * Page proxy interface
 */
export interface PageProxy {
  pluginId: string;
  fileId?: string;
  pageId?: string;
  id?: string;

  get(name: string): string;
  set(name: string): void;
  getBackground(): string;
  set(color: string): void;
  getRoot(): unknown;
  remove(): void;
  getFlows(): unknown[];
  getRulerGuides(): unknown[];
  openPage(newWindow: boolean | string): void;
}

/**
 * Check if value is flow proxy
 */
export function isFlowProxy(p: unknown): p is FlowProxy {
  return Object(p)?.type === 'FlowProxy';
}

/**
 * Check if value is page proxy
 */
export function isPageProxy(p: unknown): p is PageProxy {
  return Object(p)?.type === 'PageProxy';
}

/**
 * Create flow proxy
 */
export function flowProxy(
  pluginId: string,
  fileId?: string,
  pageId?: string,
  id?: string
): FlowProxy {
  return {
    pluginId,
    fileId,
    pageId,
    id,

    [Symbol('$plugin')](): () => pluginId,
    [Symbol('$file')](): fileId ?? undefined,
    [Symbol('$page')](): pageId ?? undefined,
    [Symbol('$id')](): id ?? undefined,

    get(name: string): string {
      // TODO: Get from proxy
      return '';
    },

    set(name: string): void {
      // TODO: Validate and set
      // if (!r.checkPermission(pluginId, 'content:write')) {
      //   displayNotValid('Plugin doesn\'t have \'content:write\' permission');
      // } else {
      //   TODO: Emit update flow
      // }
      // }
    },

    getBackground(): string {
      // TODO: Get from proxy
      return '#000000';
    },

    setBackground(color: string): void {
      // TODO: Validate color and emit
      // if (!r.checkPermission(pluginId, 'content:write')) {
      //   displayNotValid('Plugin doesn\'t have \'content:write\' permission');
      // } else {
      //   TODO: Emit update canvas color
      // }
      // }
    },

    getFlows(): unknown {
      // TODO: Get flows from state
      return [];
    },

    getRulerGuides(): unknown {
      // TODO: Get guides from state
      return [];
    }
  };
}

/**
 * Create page proxy
 */
export function pageProxy(
  pluginId: string,
  fileId?: string,
  pageId?: string,
  id?: string
): PageProxy {
  return {
    pluginId,
    fileId,
    pageId,
    id,

    [Symbol('$plugin')](): () => pluginId,
    [Symbol('$file')](): fileId ?? undefined,
    [Symbol('$page')](): pageId ?? undefined,
    [Symbol('$id')](): id ?? undefined,

    get(name: string): string {
      // TODO: Get from proxy
      return '';
    },

    set(name: string): void {
      // TODO: Validate and set
      // if (!r.checkPermission(pluginId, 'content:write')) {
      //   displayNotValid('Plugin doesn\'t have \'content:write\' permission');
      // } else {
      //   TODO: Emit update
      // }
      // }
    },

    getBackground(): string {
      // TODO: Get from proxy
      return '#000000';
    },

    getRoot(): unknown {
      // TODO: Get root shape proxy
      return {};
    },

    remove(): void {
      // TODO: Emit remove flow
    },

    getFlows(): unknown {
      // TODO: Get flows from state
      return [];
    },

    getRulerGuides(): unknown {
      // TODO: Get guides from state
      return [];
    },

    openPage(newWindow: boolean | string): void {
      // TODO: Open page in viewer
    }
  };
}
