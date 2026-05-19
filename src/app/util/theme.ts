// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { useState, useEffect } from 'react';
import { fromEvent } from 'rxjs';

/**
 * Theme type
 */
export type Theme = 'dark' | 'light';

/**
 * Default theme
 */
export const DEFAULT_THEME: Theme = 'dark';

/**
 * Color scheme media query for system theme detection
 */
const colorSchemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

/**
 * Get system theme from OS preferences
 */
export function getSystemTheme(): Theme {
  return colorSchemeMediaQuery.matches ? 'dark' : 'light';
}

/**
 * Set color scheme on document body
 */
function setColorScheme(color: Theme): void {
  const node = document.querySelector('body');
  if (!node) {
    return;
  }

  const className = color === 'dark' ? 'default' : 'light';

  node.removeAttribute('class');
  (node as HTMLElement).classList.add(className);
}

/**
 * Initialize theme hook
 */
export function useInitialize(options: { theme?: Theme | 'system' }): void {
  const [systemTheme, setSystemTheme] = useState<Theme>(getSystemTheme);

  // Listen for system theme changes
  useEffect(() => {
    const subscription = fromEvent(colorSchemeMediaQuery, 'change').subscribe(event => {
      const matches = (event as MediaQueryListEvent).matches;
      setSystemTheme(matches ? 'dark' : 'light');
    });

    return () => subscription.unsubscribe();
  }, []);

  // Apply theme based on profile theme preference
  useEffect(() => {
    const profileTheme = options.theme ?? 'system';

    const theme: Theme =
      profileTheme === 'system'
        ? systemTheme
        : profileTheme === 'default'
        ? 'dark'
        : (profileTheme as Theme) ?? 'dark';

    setColorScheme(theme);
  }, [systemTheme, options.theme]);
}

/**
 * Create theme provider component
 */
export interface ThemeProviderProps {
  theme?: Theme | 'system';
  children: React.ReactNode;
}

export function ThemeProvider({ theme, children }: ThemeProviderProps): JSX.Element {
  useInitialize({ theme });

  return <>{children}</>;
}
