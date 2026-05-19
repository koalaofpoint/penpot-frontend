// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper location
// import { locateProfile, locatePresence } from './utils';
// import { formatPoint } from './format';

/**
 * Base User proxy interface
 */
export interface UserProxy {
  pluginId: string;
  id: string;
  name: string;
  avatarUrl: string;
}

/**
 * Current user proxy interface - extends UserProxy
 */
export interface CurrentUserProxy extends UserProxy {
  sessionId: string;
  color: string;
}

/**
 * Active user proxy interface - includes position and zoom
 */
export interface ActiveUserProxy extends CurrentUserProxy {
  position: { x: number; y: number };
  zoom: number;
}

/**
 * User profile data
 */
export interface UserProfile {
  id: string;
  fullname: string;
  email?: string;
  photo?: string;
}

/**
 * User presence data
 */
export interface UserPresence {
  session: string;
  profileId: string;
  point: { x: number; y: number };
  zoom: number;
  color: string;
}

/**
 * Point interface
 */
export interface Point {
  x: number;
  y: number;
}

/**
 * Check if value is CurrentUserProxy
 */
export function isCurrentUserProxy(p: unknown): p is CurrentUserProxy {
  return Object(p)?.[Symbol('type')] === 'CurrentUserProxy';
}

/**
 * Check if value is ActiveUserProxy
 */
export function isActiveUserProxy(p: unknown): p is ActiveUserProxy {
  return Object(p)?.[Symbol('type')] === 'ActiveUserProxy';
}

/**
 * Check if value is UserProxy (or any variant)
 */
export function isUserProxy(p: unknown): p is UserProxy {
  return (
    Object(p)?.[Symbol('type')] === 'UserProxy' ||
    isCurrentUserProxy(p) ||
    isActiveUserProxy(p)
  );
}

/**
 * Create a CurrentUserProxy for a plugin
 */
export function currentUserProxy(
  pluginId: string,
  sessionId: string
): CurrentUserProxy {
  const proxy = {
    pluginId,

    [Symbol('$plugin')](): string {
      return pluginId;
    },

    [Symbol('$session')](): string {
      return sessionId;
    },

    [Symbol('type')]: 'CurrentUserProxy'
  } as CurrentUserProxy;

  // Define getters lazily
  Object.defineProperty(proxy, 'id', {
    get(): string {
      // TODO: Get from profile
      // const profile = locateProfile(sessionId);
      // return profile?.id ?? '';
      return '';
    },
    enumerable: true,
    configurable: true
  });

  Object.defineProperty(proxy, 'name', {
    get(): string {
      // TODO: Get from profile
      // const profile = locateProfile(sessionId);
      // return profile?.fullname ?? '';
      return '';
    },
    enumerable: true,
    configurable: true
  });

  Object.defineProperty(proxy, 'avatarUrl', {
    get(): string {
      // TODO: Resolve profile photo URL
      // const profile = locateProfile(sessionId);
      // return resolveProfilePhotoUrl(profile);
      return '';
    },
    enumerable: true,
    configurable: true
  });

  Object.defineProperty(proxy, 'sessionId', {
    get(): string {
      return sessionId;
    },
    enumerable: true,
    configurable: true
  });

  Object.defineProperty(proxy, 'color', {
    get(): string {
      // TODO: Get from presence
      // const presence = locatePresence(sessionId);
      // return presence?.color ?? '';
      return '';
    },
    enumerable: true,
    configurable: true
  });

  return proxy;
}

/**
 * Create an ActiveUserProxy for a plugin
 */
export function activeUserProxy(
  pluginId: string,
  sessionId: string
): ActiveUserProxy {
  const baseProxy = currentUserProxy(pluginId, sessionId) as ActiveUserProxy;

  // Override type for ActiveUserProxy
  baseProxy[Symbol('type')] = 'ActiveUserProxy';

  // Add position property
  Object.defineProperty(baseProxy, 'position', {
    get(): Point {
      // TODO: Get from presence and format
      // const presence = locatePresence(sessionId);
      // return formatPoint(presence?.point);
      return { x: 0, y: 0 };
    },
    enumerable: true,
    configurable: true
  });

  // Add zoom property
  Object.defineProperty(baseProxy, 'zoom', {
    get(): number {
      // TODO: Get from presence
      // const presence = locatePresence(sessionId);
      // return presence?.zoom ?? 1;
      return 1;
    },
    enumerable: true,
    configurable: true
  });

  return baseProxy;
}

/**
 * Create a UserProxy from profile data
 */
export function userProxy(
  pluginId: string,
  profile: UserProfile
): UserProxy {
  const proxy = {
    pluginId,

    [Symbol('$plugin')](): string {
      return pluginId;
    },

    [Symbol('type')]: 'UserProxy'
  } as UserProxy;

  // Define properties from profile
  Object.defineProperty(proxy, 'id', {
    get(): string {
      return profile.id;
    },
    enumerable: true,
    configurable: true
  });

  Object.defineProperty(proxy, 'name', {
    get(): string {
      return profile.fullname;
    },
    enumerable: true,
    configurable: true
  });

  Object.defineProperty(proxy, 'avatarUrl', {
    get(): string {
      // TODO: Resolve profile photo URL
      // return resolveProfilePhotoUrl(profile);
      return '';
    },
    enumerable: true,
    configurable: true
  });

  return proxy;
}

/**
 * Get session ID from a user proxy
 */
export function getSessionId(proxy: CurrentUserProxy | ActiveUserProxy): string {
  return proxy.sessionId;
}

/**
 * Get plugin ID from a user proxy
 */
export function getPluginId(proxy: UserProxy): string {
  return proxy.pluginId;
}
