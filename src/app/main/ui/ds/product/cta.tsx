// This Source Code Form is subject to terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { css, appendClass } from '../../../style';
// import { d } from '../../../../common/data';
// import { typography as t } from '../foundations/typography';
// import { Text } from '../foundations/typography/text';

/**
 * CTA component props
 */
export interface CtaProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children?: React.ReactNode;
}

/**
 * CTA component
 */
export function Cta({ title, children, ...props }: CtaProps) {
  const className = `cta ${props.class || ''}`;

  const finalProps: React.HTMLAttributes<HTMLDivElement> = {
    ...props,
    className,
    'data-testid': 'cta'
  };

  return (
    <div {...finalProps}>
      <div className="cta-title">
        <Text as="span" typography={t.headlineSmall} className="placeholder-title">
          {title}
        </Text>
      </div>
      <div className="cta-message">{children}</div>
    </div>
  );
}
