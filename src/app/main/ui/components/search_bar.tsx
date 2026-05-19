// This Source Code Form is subject to terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { css, cssCase } from '../../main/style';
// import { dom } from '../../../util/dom';
// import { kbd } from '../../../util/keyboard';
// import { icon } from '../ds/foundations/assets/icon';

/**
 * Search bar component props
 */
export interface SearchBarProps {
  id?: string;
  class?: string;
  value: string;
  placeholder?: string;
  iconId?: string;
  autoFocus?: boolean;
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: (event: React.MouseEvent) => void;
  children?: React.ReactNode;
}

/**
 * Search bar component - Input with search icon and clear button
 */
export function SearchBar({
  id,
  class: className,
  value,
  placeholder,
  iconId,
  autoFocus,
  onChange,
  onClear,
  children
}: SearchBarProps) {
  const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: const value = dom.getTargetVal(event);
    const newValue = event.target.value;
    if (onChange) onChange(newValue, event);
  }, [onChange]);

  const handleClear = React.useCallback((event: React.MouseEvent) => {
    if (onClear) {
      onClear(event);
    } else if (onChange) {
      onChange('', event as unknown as React.ChangeEvent<HTMLInputElement>);
    }
  }, [onClear, onChange]);

  const handleKeyDown = React.useCallback((event: React.KeyboardEvent) => {
    // TODO: const enter = kbd.enter(event);
    // TODO: const esc = kbd.esc(event);
    // TODO: const node = dom.getTarget(event);
    const enter = event.key === 'Enter';
    const esc = event.key === 'Escape';
    const node = event.target as HTMLElement;

    if (enter) node.blur();
    if (esc) node.blur();
  }, []);

  return (
    <span className={`search-box ${children ? 'has-children' : ''}`}>
      {children}
      <div className={`${className} search-input-wrapper`}>
        {iconId && (
          // icon({ iconId, size: 's', class: 'icon' })
          <svg viewBox="0 0 24 24" fill="currentColor" className="icon" width="16" height="16">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        )}
        <input
          id={id}
          className="search-input"
          onChange={handleChange}
          value={value}
          autoFocus={autoFocus}
          autoComplete="off"
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
        />
        {value !== '' && (
          <button className="clear-icon" onClick={handleClear}>
            {/* icon({ iconId: 'delete-text', size: 's' }) */}
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        )}
      </div>
    </span>
  );
}
