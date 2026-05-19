// This Source Code Form is subject to terms of Mozilla Public
// License, v. 2.0. If a copy of MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { stl } from '../../../../../style';

/**
 * Label component props
 */
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  for: string;
  isOptional?: boolean;
}

/**
 * Label component - Form label with optional indicator
 */
export function Label({
  for: htmlFor,
  isOptional = false,
  class: className,
  children,
  ...props
}: LabelProps & { children?: React.ReactNode }) {
  const finalClass = `${className || ''} label`;

  return (
    <label {...props} className={finalClass} htmlFor={htmlFor}>
      {children !== undefined && <span className="label-text">{children}</span>}
      {isOptional && <span className="label-optional">(Optional)</span>}
    </label>
  );
}
