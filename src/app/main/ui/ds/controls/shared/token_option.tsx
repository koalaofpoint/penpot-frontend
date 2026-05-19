// This Source Code Form is subject to terms of Mozilla Public
// License, v. 2.0. If a copy of MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { stl } from '../../../../style';
// import { icon } from '../../foundations/assets/icon';
// import { tooltip } from '../../tooltip';

/**
 * Token option component props
 */
export interface TokenOptionProps extends React.LiHTMLAttributes<HTMLLIElement> {
  id?: string;
  name?: string;
  onClick?: (event: React.MouseEvent) => void;
  selected?: boolean;
  focused?: boolean;
  resolved?: string | number;
}

/**
 * TokenOption component - Token option in dropdown
 */
export function TokenOption({
  id,
  name,
  onClick,
  selected = false,
  focused = false,
  resolved,
  ...props
}: TokenOptionProps) {
  const internalId = React.useId();
  const finalId = id || internalId;
  const elementRef = React.useRef<HTMLElement>(null);

  const tokenClass = `token-option option-with-pill ${selected ? 'option-selected-token' : ''} ${focused ? 'option-current' : ''}`;

  return (
    <li
      {...props}
      value={finalId}
      className={tokenClass}
      aria-selected={selected}
      role="option"
      id={finalId}
      onClick={onClick}
      data-id={finalId}
      data-testid="dropdown-option"
    >
      {selected ? (
        /* <Icon iconId="tick" size="s" className="option-check" ariaHidden={!!name} /> */
        <span className="option-check">✓</span>
      ) : (
        <span className="icon-placeholder" />
      )}

      {/* <Tooltip
        content={name}
        triggerRef={elementRef}
        id={`${finalId}-name`}
        className="option-text"
      > */}
      <span aria-labelledby={`${finalId}-name`} className="option-text" ref={elementRef}>
        {name}
      </span>
      {/* </Tooltip> */}

      {resolved !== undefined && (
        <span className="option-pill">{resolved}</span>
      )}
    </li>
  );
}
