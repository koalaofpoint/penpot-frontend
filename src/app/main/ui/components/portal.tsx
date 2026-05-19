// This Source Code Form is subject to terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper location
// import { usePortalContainer } from '../hooks';

/**
 * Portal on document component props
 */
export interface PortalOnDocumentProps {
  children: React.ReactNode;
}

/**
 * Portal component - Renders children into a portal container on document
 */
export function PortalOnDocument({ children }: PortalOnDocumentProps) {
  const container = usePortalContainer();

  // TODO: return mf/portal(container, children);
  return <div>Portal on document</div>;
}

/**
 * Use portal container hook
 */
export function usePortalContainer() {
  // TODO: return hooks/use-portal-container();
  return document.createElement('div');
}
