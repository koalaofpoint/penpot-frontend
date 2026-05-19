// This Source Code Form is subject to terms of Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { css, cssCase } from '../../../style';
// import { dm } from '../../../../common/data';
// import { t } from '../typography';

/**
 * Typography variant type
 */
export type TypographyVariant =
  | 'display'
  | 'title-large'
  | 'title-medium'
  | 'title-small'
  | 'headline-large'
  | 'headline-medium'
  | 'headline-small'
  | 'body-large'
  | 'body-medium'
  | 'body-small'
  | 'code-font';

// TODO: const TYPOGRAPHY_LIST = t.typographyList();
const TYPOGRAPHY_LIST: TypographyVariant[] = [
  'display',
  'title-large',
  'title-medium',
  'title-small',
  'headline-large',
  'headline-medium',
  'headline-small',
  'body-large',
  'body-medium',
  'body-small',
  'code-font'
];

// TODO: const NUMBER_SET = new Set(['1', '2', '3', '4', '5', '6']);
const NUMBER_SET = new Set(['1', '2', '3', '4', '5', '6']);

/**
 * Heading component props
 */
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: number;
  typography?: TypographyVariant;
  class?: string;
  children?: React.ReactNode;
}

/**
 * Heading component - HTML heading with typography support
 */
export function Heading({ level = 1, typography = 'display', class: className, children, ...props }: HeadingProps) {
  const tag = `h${Math.min(6, Math.max(1, level))}` as React.ElementType;
  const finalClass = `${className || ''} ${typography}`;

  return (
    <tag {...props} className={finalClass}>
      {children}
    </tag>
  );
}
