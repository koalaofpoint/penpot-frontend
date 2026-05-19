// This Source Code Form is subject to terms of Mozilla Public
// License, v. 2.0. If a copy of MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { stl } from '../../../style';
// import { getOption, handleFocusChange } from './select';
// import { optionsDropdown } from './shared/options-dropdown';
// import { icon } from '../foundations/assets/icon';
// import { dom } from '../../../../util/dom';
// import { kbd } from '../../../../util/keyboard';
// import { obj } from '../../../../util/object';
// import { str } from 'cuerdas.core';

// TODO: Import from proper locations
// import { MAX_INPUT_LENGTH } from '../../constants';

const MAX_INPUT_LENGTH = 200;

/**
 * Option interface
 */
export interface Option {
  id: string;
  label: string;
  icon?: string;
  value?: string;
}

/**
 * Get option by id
 */
function getOption(options: Option[], id: string | undefined | null): Option | undefined {
  if (!id) return undefined;
  return options.find((opt) => opt.id === id);
}

/**
 * Combobox component props
 */
export interface ComboboxProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  options: Option[];
  class?: string;
  maxLength?: number;
  placeholder?: string;
  disabled?: boolean;
  defaultSelected?: string;
  onChange?: (value: string) => void;
  emptyToEnd?: boolean;
  hasError?: boolean;
}

/**
 * Combobox component - Select input with filtering
 */
export function Combobox({
  id,
  options,
  class: className,
  placeholder,
  disabled = false,
  defaultSelected,
  maxLength,
  emptyToEnd = false,
  onChange,
  hasError = false,
  ...props
}: ComboboxProps) {
  // Handle options provided as clojure data or JavaScript objects
  const finalOptions = Array.isArray(options) ? options : options;

  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState(defaultSelected);
  const [filterId, setFilterId] = React.useState('');
  const [focusedId, setFocusedId] = React.useState<string | null>(null);

  const comboboxRef = React.useRef<HTMLElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const nodesRef = React.useRef<Record<string, HTMLElement>>({});
  const optionsRef = React.useRef<Option[]>([]);
  const listboxId = React.useId();
  const valueRef = React.useRef<string | null>(null);

  // Filter options based on input
  const dropdownOptions = React.useMemo(() => {
    const filter = filterId.toLowerCase();
    return finalOptions.filter((option) => {
      const optionId = option.id.toLowerCase();
      return optionId.includes(filter);
    });
  }, [finalOptions, filterId]);

  // Set option ref callback
  const setOptionRef = React.useCallback(
    (node: HTMLElement | null) => {
      if (node) {
        const id = node.dataset.id;
        if (id) {
          nodesRef.current[id] = node;
        }
      }
    },
    []
  );

  // Handle option click
  const onOptionClick = React.useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();
      const target = event.currentTarget as HTMLElement;
      const id = target.dataset.id;

      if (id) {
        setSelectedId(id);
        setIsOpen(false);
        setFocusedId(null);

        if (onChange) {
          onChange(id);
        }
      }
    },
    [onChange]
  );

  // Handle wrapper click
  const onClick = React.useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();
      if (!disabled) {
        if (!isOpen) {
          setFilterId('');
        }
        setIsOpen((prev) => !prev);
      }
    },
    [disabled, isOpen]
  );

  // Handle blur
  const onBlur = React.useCallback(
    (event: React.FocusEvent) => {
      event.stopPropagation();
      const target = event.relatedTarget as Node;
      const selfNode = comboboxRef.current;

      if (selfNode && target && !selfNode.contains(target)) {
        setIsOpen(false);
        setFocusedId(null);

        if (onChange && inputRef.current) {
          onChange(inputRef.current.value);
        }
      }
    },
    [onChange]
  );

  // Handle input click
  const onInputClick = React.useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();
      if (!disabled) {
        if (!isOpen) {
          setFilterId('');
        }
        setIsOpen(true);
      }
    },
    [disabled, isOpen]
  );

  // Handle input focus
  const onInputFocus = React.useCallback(
    (event: React.FocusEvent) => {
      event.stopPropagation();
      if (!disabled) {
        // TODO: Use dom.selectText!
        const target = event.target as HTMLInputElement;
        target.select();
      }
    },
    [disabled]
  );

  // Handle input key down
  const onInputKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      event.stopPropagation();
      if (disabled) return;

      const currentOptions = optionsRef.current;
      const len = currentOptions.length;
      const index = currentOptions.findIndex((opt) => opt.id === focusedId);
      const safeIndex = index === -1 ? -1 : index;

      if (isOpen) {
        // TODO: Use kbd.home?, kbd/up-arrow?, etc.
        if (event.key === 'Home') {
          // TODO: Handle home key
          setFocusedId(currentOptions[0]?.id || null);
        } else if (event.key === 'ArrowUp') {
          const newIndex = safeIndex === -1 ? len - 1 : (safeIndex - 1 + len) % len;
          setFocusedId(currentOptions[newIndex]?.id || null);
        } else if (event.key === 'ArrowDown') {
          const newIndex = safeIndex === -1 ? 0 : (safeIndex + 1) % len;
          setFocusedId(currentOptions[newIndex]?.id || null);
        } else if (event.key === 'Enter') {
          setSelectedId(focusedId || '');
          setIsOpen(false);
          setFocusedId(null);

          // TODO: Use dom.blur!
          if (inputRef.current) {
            inputRef.current.blur();
          }

          if (onChange && focusedId) {
            onChange(focusedId);
          }
        } else if (event.key === 'Escape') {
          setIsOpen(false);
          setFocusedId(null);

          // TODO: Use dom.blur!
          if (inputRef.current) {
            inputRef.current.blur();
          }
        }
      } else {
        if (event.key === 'ArrowDown') {
          setIsOpen(true);
        } else if (event.key === 'Escape' || event.key === 'Enter') {
          // TODO: Use dom.blur!
          if (inputRef.current) {
            inputRef.current.blur();
          }
        }
      }
    },
    [isOpen, focusedId, disabled, onChange]
  );

  // Handle input change
  const onInputChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.stopPropagation();
      const value = event.target.value;
      valueRef.current = value;
      setSelectedId(value);
      setFilterId(value);
      setFocusedId(null);
    },
    []
  );

  // Get selected option
  const selectedOption = React.useMemo(() => {
    if (finalOptions.length > 0) {
      return getOption(finalOptions, selectedId);
    }
    return undefined;
  }, [finalOptions, selectedId]);

  // Get icon from selected option
  const icon = selectedOption?.icon;

  // Update options ref when dropdown options change
  React.useEffect(() => {
    optionsRef.current = dropdownOptions;
  }, [dropdownOptions]);

  // Update selected id when default selected changes
  React.useEffect(() => {
    setSelectedId(defaultSelected || '');
  }, [defaultSelected]);

  // Cleanup on unmount - save value if needed
  React.useEffect(() => {
    return () => {
      const value = valueRef.current;
      if (value && onChange) {
        onChange(value);
      }
    };
  }, [onChange]);

  return (
    <div
      ref={comboboxRef}
      className={`wrapper ${hasError ? 'has-error' : ''} ${disabled ? 'disabled' : ''}`}
    >
      <div className={`combobox ${className || ''}`} onBlur={onBlur} onClick={onClick}>
        <span className={`header ${icon ? 'header-icon' : ''}`}>
          {icon && <Icon iconId={icon} size="s" ariaHidden />}

          <input
            id={id}
            ref={inputRef}
            type="text"
            role="combobox"
            className="input"
            autoComplete="off"
            ariaAutoComplete="both"
            ariaExpanded={isOpen}
            ariaControls={listboxId}
            ariaActivedescendant={focusedId || undefined}
            data-testid="combobox-input"
            maxLength={maxLength || MAX_INPUT_LENGTH}
            disabled={disabled}
            value={selectedId || ''}
            placeholder={placeholder}
            onChange={onInputChange}
            onClick={onInputClick}
            onFocus={onInputFocus}
            onKeyDown={onInputKeyDown}
          />
        </span>

        {finalOptions.length > 0 && (
          <button
            type="button"
            tabIndex={-1}
            ariaExpanded={isOpen}
            ariaControls={listboxId}
            className="button-toggle-list"
            onClick={onClick}
          >
            <Icon
              iconId="arrow-down"
              className="arrow"
              size="s"
              ariaHidden
              data-testid="combobox-open-button"
            />
          </button>
        )}
      </div>

      {isOpen && dropdownOptions.length > 0 && (
        // TODO: Import and use OptionsDropdown component
        <div className="options-dropdown" data-testid="combobox-options">
          {/* Options rendering would go here */}
        </div>
      )}
    </div>
  );
}

// TODO: Import proper icon component
function Icon({ iconId, size, ariaHidden, ...props }: any) {
  return <span {...props} className={`icon ${iconId} ${size}`}>icon</span>;
}
