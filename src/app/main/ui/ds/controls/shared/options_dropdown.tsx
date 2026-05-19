// This Source Code Form is subject to terms of Mozilla Public
// License, v. 2.0. If a copy of MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { stl } from '../../../../style';
// import { icon } from '../../foundations/assets/icon';

// TODO: Import icon list for validation
// import { ICON_LIST } from '../../foundations/assets/icon';

/**
 * Dropdown option type
 */
export interface DropdownOption {
  id?: string;
  name?: string;
  label?: string;
  icon?: string;
  resolvedValue?: string | number;
  type?: 'group' | 'separator' | 'empty' | 'token' | 'default';
  ariaLabel?: string;
  dimmed?: boolean;
}

/**
 * Render single option
 */
function renderOption(
  option: DropdownOption,
  ref: (node: HTMLElement | null) => void,
  onClick: (event: React.MouseEvent) => void,
  selected: any,
  focused: any
): React.ReactNode {
  const id = option.id || '';
  const name = option.name || '';
  const type = option.type || 'default';

  switch (type) {
    case 'group':
      return (
        <li key={`group-${id}`} className="group-option">
          {/* <Icon iconId="arrow-down" size="m" className="option-check" ariaHidden={!!name} /> */}
          <span className="option-check">▼</span>
          <span className="option-name">{name}</span>
        </li>
      );

    case 'separator':
      return <hr key={`sep-${id}`} className="option-separator" />;

    case 'empty':
      return (
        <li key={`empty-${id}`} className="option-empty">
          {option.label}
        </li>
      );

    case 'token':
      return (
        // <TokenOption
        //   selected={id === selected}
        //   key={`token-${id}`}
        //   id={id}
        //   name={name}
        //   resolved={option.resolvedValue}
        //   ref={ref}
        //   focused={id === focused}
        //   onClick={onClick}
        // />
        <li key={`token-${id}`} className="token-option" onClick={onClick}>
          {name} {option.resolvedValue}
        </li>
      );

    default: // 'default' case
      return (
        // <Option
        //   selected={id === selected}
        //   key={`opt-${id}`}
        //   id={id}
        //   label={option.label}
        //   ariaLabel={option.ariaLabel}
        //   icon={option.icon}
        //   ref={ref}
        //   focused={id === focused}
        //   dimmed={option.dimmed}
        //   onClick={onClick}
        // />
        <li key={`opt-${id}`} className="option" onClick={onClick}>
          {option.icon && <span className="option-icon">{option.icon}</span>}
          <span className={`option-text ${option.dimmed ? 'option-text-dimmed' : ''}`}>
            {option.label}
          </span>
          {id === selected && <span className="option-check">✓</span>}
        </li>
      );
  }
}

/**
 * Options dropdown component props
 */
export interface OptionsDropdownProps extends React.HTMLAttributes<HTMLUListElement> {
  ref?: (node: HTMLElement | null) => void;
  onClick: (event: React.MouseEvent) => void;
  options: DropdownOption[];
  selected?: any;
  focused?: any;
  emptyToEnd?: boolean;
  align?: 'left' | 'right';
}

/**
 * OptionsDropdown component - List of dropdown options
 */
export function OptionsDropdown({
  ref,
  onClick,
  options,
  selected,
  focused,
  emptyToEnd = false,
  align = 'left',
  ...props
}: OptionsDropdownProps) {
  const listClass = `option-list ${align === 'left' ? 'left-align' : ''} ${align === 'right' ? 'right-align' : ''}`;

  // Filter blank IDs for end placement
  const optionsBlank = React.useMemo(() => {
    if (emptyToEnd) {
      return options.filter((opt) => !opt.id);
    }
    return [];
  }, [emptyToEnd, options]);

  // Filter non-blank IDs
  const optionsFiltered = React.useMemo(() => {
    if (emptyToEnd) {
      return options.filter((opt) => opt.id);
    }
    return options;
  }, [emptyToEnd, options]);

  return (
    <ul {...props} className={listClass} tabIndex={-1} role="listbox">
      {optionsFiltered.map((option) =>
        renderOption(option, ref || (() => {}), onClick, selected, focused)
      )}

      {optionsBlank.length > 0 && (
        <>
          {optionsFiltered.length > 0 && <hr className="option-separator" />}
          {optionsBlank.map((option) =>
            renderOption(option, ref || (() => {}), onClick, selected, focused)
          )}
        </>
      )}
    </ul>
  );
}
