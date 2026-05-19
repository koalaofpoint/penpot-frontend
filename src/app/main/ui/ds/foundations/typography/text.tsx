// This Source Code Form is subject to terms of Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { css } from '../../../style';

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

/**
 * Text component props
 */
export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  typography?: TypographyVariant;
  class?: string;
  children?: React.ReactNode;
}

/**
 * Text component - Typography wrapper component
 */
export function Text({ as = 'p', typography = 'display', class: className, children, ...props }: TextProps) {
  const finalClass = `${className || ''} ${typography}`;

  const Element = as as React.ElementType;

  return (
    <Element {...props} className={finalClass}>
      {children}
    </Element>
  );
}
