// This Source Code Form is subject to terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { collectIcons } from '../assets/icon';
// import { css } from '../../../main/style';

/**
 * Token status icon type
 */
export type TokenStatusIcon = 'token-status-partial' | 'token-status-full' | 'token-status-non-applied';

/**
 * Token status icon component props
 */
export interface TokenStatusIconProps {
  iconId: TokenStatusIcon;
  className?: string;
  rest?: React.HTMLAttributes<SVGSVGElement>;
}

/**
 * Token status icon component - Shows token application status icon
 */
export function TokenStatusIcon({ iconId, className, ...rest }: TokenStatusIconProps) {
  const tokenStatusList: TokenStatusIcon[] = ['token-status-partial', 'token-status-full', 'token-status-non-applied'];
  const isFullIcon = tokenStatusList.includes(iconId);

  return (
    <svg className={className} {...rest}>
      <symbol>
        <use href={`#icon-${iconId}`} />
      </symbol>
      {isFullIcon && (
        <>
          <rect x="0" y="0" width="14" height="14" fill="currentColor" />
        </>
      )}
    </svg>
  );
}

TokenStatusIcon.displayName = 'TokenStatusIcon';
