// This Source Code Form is subject to terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { css } from '../../../style';
// import { i, iconList } from '../foundations/assets/icon';
// import { Text } from '../foundations/typography/text';

// TODO: const ICON_LIST = iconList();
const ICON_LIST: string[] = [];

/**
 * Empty placeholder component props
 */
export interface EmptyPlaceholderProps {
  title?: string;
  description?: string;
  icon?: string;
  cta?: React.ReactNode;
}

/**
 * Empty placeholder component
 */
export function EmptyPlaceholder({ title, description, icon, cta }: EmptyPlaceholderProps) {
  const validIcon = icon && ICON_LIST.includes(icon);

  return (
    <div className="empty-placeholder">
      {validIcon && (
        // i.icon({ iconId: icon, class: 'icon' })
        <svg viewBox="0 0 24 24" fill="currentColor" className="icon" width="64" height="64">
          {/* Icon placeholder */}
        </svg>
      )}
      <Text as="p" typography="headline">
        {title}
      </Text>
      <Text as="p" typography="body">
        {description}
      </Text>
      {cta && <div className="cta">{cta}</div>}
    </div>
  );
}
