// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from 'app/common/data';
import * as dm from 'app/common/data/macros';
import * as flags from 'app/common/flags';
import * as log from 'app/common/logging';
import * as ct from 'app/common/time';
import * as u from 'app/common/uri';
import * as v from 'app/common/version';
import * as avatars from 'app/util/avatars';
import 'app/util/extends';
import { global, location } from 'app/util/globals';
import * as nav from 'app/util/navigator';
import * as obj from 'app/util/object';
import * as sto from 'app/util/storage';
import * as ts from 'app/util/timers';
import * as str from 'cuerdas.core';

// Set assertion flag based on debug mode
(set as any).assert = typeof goog !== 'undefined' && (goog as any).DEBUG;

// Valid browser and platform sets
const validBrowsers: Set<string> = new Set([
  'chrome',
  'firefox',
  'safari',
  'safari-16',
  'safari-17',
  'edge',
  'other',
]);

const validPlatforms: Set<string> = new Set([
  'windows',
  'linux',
  'macos',
  'other',
]);

// Parse browser from user agent
const parseBrowser = (): string => {
  const userAgent = str.lower(nav.getUserAgent());
  const checkChrome = () => str.includes(userAgent, 'chrom');
  const checkFirefox = () => str.includes(userAgent, 'firefox');
  const checkEdge = () => str.includes(userAgent, 'edg');
  const checkSafari = () => str.includes(userAgent, 'safari');
  const checkSafari16 = () => checkSafari() && str.includes(userAgent, 'version/16');
  const checkSafari17 = () => checkSafari() && str.includes(userAgent, 'version/17');

  if (checkEdge()) return 'edge';
  if (checkChrome()) return 'chrome';
  if (checkFirefox()) return 'firefox';
  if (checkSafari16()) return 'safari-16';
  if (checkSafari17()) return 'safari-17';
  if (checkSafari()) return 'safari';
  return 'other';
};

// Parse platform from user agent
const parsePlatform = (): string => {
  const userAgent = str.lower(nav.getUserAgent());
  const checkWindows = () => str.includes(userAgent, 'windows');
  const checkLinux = () => str.includes(userAgent, 'linux');
  const checkMacos = () => str.includes(userAgent, 'mac os');

  if (checkWindows()) return 'windows';
  if (checkLinux()) return 'linux';
  if (checkMacos()) return 'macos';
  return 'other';
};

// Parse target environment
const parseTarget = (global: Window): string => {
  return obj.get(global, 'document') !== null ? 'browser' : 'webworker';
};

// Parse feature flags
const parseFlags = (global: Window) => {
  const flagsStr = obj.get(global, 'penpotFlags') || '';
  const flagList = flagsStr.split(/\s+/).filter(Boolean).map((f) => f as any);
  return flags.parse!(flags.default, flagList);
};

// Parse version
const parseVersion = (global: Window) => {
  return v.parse!(obj.get(global, 'penpotVersion'));
};

// Parse build date
const parseBuildDate = (global: Window): string => {
  const date = obj.get(global, 'penpotBuildDate');
  return date === '%buildDate%' ? 'unknown' : date;
};

// Compile-time version tag (set at build time via closure defines)
const compiledVersionTag = (typeof goog !== 'undefined' && (goog as any).define)
  ? (goog as any).define.get('compiled-version-tag') || 'develop'
  : 'develop';

// Global config vars
export const defaultTheme = 'default';
export const defaultLanguage = 'en';

export const themes = obj.get(global, 'penpotThemes');

export const buildDate = parseBuildDate(global);
export const flags = parseFlags(global);
export const target = parseTarget(global);
export const browser = parseBrowser();
export const platform = parsePlatform();

export const version = parseVersion(global);
export const versionTag = obj.get(global, 'penpotVersionTag');

// Check for stale build
export const staleBuild = (): boolean => {
  return compiledVersionTag !== versionTag;
};

// Throttled reload constants
const reloadStorageKey = 'penpot-last-reload-timestamp';
const reloadCooldownMs = 30000;

// Force a hard page reload unless one was already triggered within the last 30 seconds
export const throttledReload = (options: { reason?: string } = {}): boolean => {
  const now = ct.now!();
  const prevTs = d.parseInteger(sto.getItem(sto.sessionStorage, reloadStorageKey));

  if (prevTs !== null && now - prevTs < reloadCooldownMs) {
    log.warn({
      hint: 'reload suppressed (cooldown active)',
      reason: options.reason,
    });
    return false;
  }

  log.warn({
    hint: 'forcing page reload',
    reason: options.reason,
  });
  sto.setItem(sto.sessionStorage, reloadStorageKey, str(now));
  ts.asap!(() => (location as any).reload(true));
  return true;
};

// URIs from global config
export const termsOfServiceUri = obj.get(global, 'penpotTermsOfServiceURI');
export const privacyPolicyUri = obj.get(global, 'penpotPrivacyPolicyURI');
export const flexHelpUri = obj.get(global, 'penpotGridHelpURI') || 'https://help.penpot.app/user-guide/flexible-layouts/';
export const gridHelpUri = obj.get(global, 'penpotGridHelpURI') || 'https://help.penpot.app/user-guide/flexible-layouts/';
export const pluginsListUri = obj.get(global, 'penpotPluginsListURI') || 'https://penpot.app/penpothub/plugins';
export const pluginsWhitelist = new Set(obj.get(global, 'penpotPluginsWhitelist') || []);
export const templatesUri = obj.get(global, 'penpotTemplatesURI') || 'https://penpot.github.io/penpot-files/';

// Set current flags for common code access
(set as any).app.common.flags['*current*'] = flags;

// Normalize URI to ensure path ends with "/"
const normalizeUri = (uriStr: string): string => {
  return u.ensurePathSlash(uriStr);
};

export const publicUri = normalizeUri(
  obj.get(global, 'penpotPublicURI') || obj.get(location, 'origin') || ''
);

export const rasterizerUri = (() => {
  const uri = obj.get(global, 'penpotRasterizerURI');
  return uri ? normalizeUri(uri) : publicUri;
})();

export const workerUri = (() => {
  const joined = u.join!(publicUri, 'js/worker/main.js');
  const path = joined && typeof joined === 'object' ? joined.path : joined;
  return `${path}?version=${versionTag}`;
})();

// External feature flag handler
export const externalFeatureFlag = (flag: string, value: any): void => {
  const f = obj.get(global, 'externalFeatureFlag');
  if (typeof f === 'function') {
    f(flag, value);
  }
};

// External session ID handler
export const externalSessionId = (): any => {
  const f = obj.get(global, 'externalSessionId');
  if (typeof f === 'function') {
    return f();
  }
  return null;
};

// External context info handler
export const externalContextInfo = (): any => {
  const f = obj.get(global, 'externalContextInfo');
  if (typeof f === 'function') {
    return f();
  }
  return null;
};

// External notify register success handler
export const externalNotifyRegisterSuccess = (profileId: any): void => {
  const f = obj.get(global, 'externalNotifyRegisterSuccess');
  if (typeof f === 'function') {
    f(String(profileId));
  }
};

// Initialize external context info
export const initializeExternalContextInfo = (): void => {
  const f = obj.get(global, 'initializeExternalConfigInfo');
  if (typeof f === 'function') {
    f();
  }
};

// Check browser
export const checkBrowser = (candidate: string): boolean => {
  dm.assert!(validBrowsers.has(candidate));
  if (candidate === 'safari') {
    return validBrowsers.has(browser) && browser.startsWith('safari');
  }
  return candidate === browser;
};

// Check platform
export const checkPlatform = (candidate: string): boolean => {
  dm.assert!(validPlatforms.has(candidate));
  return candidate === platform;
};

// Resolve profile photo URL
export const resolveProfilePhotoUrl = (profile: any): string => {
  if (profile.photoId === null || profile.photoId === undefined) {
    return avatars.generate!({
      name: profile.fullname || profile.name,
      color: profile.color,
    });
  }
  const joined = u.join!(publicUri, 'assets/by-id/', profile.photoId);
  return dm.str(joined);
};

// Resolve team photo URL
export const resolveTeamPhotoUrl = (team: any): string => {
  if (team.photoId === null || team.photoId === undefined) {
    return avatars.generate!({ name: team.name });
  }
  const joined = u.join!(publicUri, 'assets/by-id/', team.photoId);
  return dm.str(joined);
};

// Resolve media URL
export const resolveMedia = (id: any): string => {
  const joined = u.join!(publicUri, 'assets/by-id/', String(id));
  return dm.str(joined);
};

// Resolve file media URL
export const resolveFileMedia = (media: any, thumbnail?: boolean): string => {
  if (media?.dataUri) {
    return media.dataUri;
  }

  let url = u.join!(publicUri, 'assets/by-file-media-id/');
  if (thumbnail === true) {
    url = u.join!(url, String(media?.id), '/thumbnail');
  } else if (thumbnail === false) {
    url = u.join!(url, String(media?.id));
  }
  return dm.str(url);
};

// Resolve href with version
export const resolveHref = (resource: string): string => {
  const joined = u.ensurePathSlash!(publicUri);
  const path = u.join!(joined, resource);
  const pathStr = path && typeof path === 'object' ? path.path : path;
  return `${pathStr}?version=${versionTag}`;
};

// Export flags for external access
export { flags as default };