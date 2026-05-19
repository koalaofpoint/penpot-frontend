// This Source Code Form is subject to terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { css, cssCase } from '../../main/style';
// import { dom } from '../../../util/dom';
// import { kbd } from '../../../util/keyboard';
// import { uuid } from '../../../common/uuid';

/**
 * Select option type
 */
export type SelectOption = string | { value: any; label: string; icon?: string } | { disabled: true };

/**
 * Select component props
 */
export interface SelectProps {
  defaultValue: any;
  options: SelectOption[];
  class?: string;
  dropdownClass?: string;
  isOpen?: boolean;
  onChange?: (value: any) => void;
  onPointerEnterOption?: (value: any) => void;
  onPointerLeaveOption?: (value: any) => void;
  disabled?: boolean;
  dataDirection?: 'up' | 'down';
}

/**
 * Helper to convert option to key-value format
 */
function asKeyValue(item: SelectOption): [any, string, string | undefined] {
  if (typeof item === 'string') {
    return [item, item, item];
  }
  if ('value' in item && 'label' in item) {
    return [item.value, item.label, (item as any).icon];
  }
  return [null, '', undefined];
}

/**
 * Rotate index forward
 */
function rotateIndexForward(index: number, length: number): number {
  const lastIndex = length - 1;
  index = index < 0 ? 0 : index;
  index = index + 1;
  index = index > lastIndex ? 0 : index;
  return index;
}

/**
 * Rotate index backward
 */
function rotateIndexBackward(index: number, length: number): number {
  const lastIndex = length - 1;
  index = index < 0 ? 0 : index;
  index = index - 1;
  index = index < 0 ? lastIndex : index;
  return index;
}

/**
 * Rotate option forward
 */
function rotateOptionForward(options: SelectOption[], index: number): any {
  const option = options[rotateIndexForward(index, options.length)] as { value: any };
  return option.value;
}

/**
 * Rotate option backward
 */
function rotateOptionBackward(options: SelectOption[], index: number, length: number): any {
  const option = options[rotateIndexBackward(index, length)] as { value: any };
  return option.value;
}

/**
 * Select component - Custom dropdown with keyboard navigation
 */
export function Select({
  defaultValue,
  options,
  class: className,
  dropdownClass,
  isOpen: isOpenProp,
  onChange,
  onPointerEnterOption,
  onPointerLeaveOption,
  disabled,
  dataDirection
}: SelectProps) {
  // TODO: const currentId = useRef(uuid.next()).current;
  const [state, setState] = React.useState({
    id: '',
    isOpen: isOpenProp || false,
    currentValue: defaultValue
  });

  const currentId = state.id;
  const currentValue = state.currentValue;
  const isOpen = state.isOpen;

  const nodeRef = React.useRef<HTMLUListElement>(null);
  const dropdownDirection = React.useState<'up' | 'down'>('down');
  const dropdownDirectionChange = React.useRef(0);

  const labelIndex = React.useMemo(() => {
    const result: Record<string, string> = {};
    options.forEach(item => {
      const [value, label] = asKeyValue(item);
      if (value !== null) {
        result[value] = label;
      }
    });
    return result;
  }, [options]);

  const currentLabel = labelIndex[currentValue] || '';

  const handleKeyUp = React.useCallback((e: React.KeyboardEvent) => {
    if (disabled) return;

    const enabledOptions = options.filter(opt => !(typeof opt === 'object' && 'disabled' in opt)) as { value: any }[];
    const length = enabledOptions.length;
    const index = enabledOptions.findIndex(opt => opt.value === currentValue) || 0;

    // TODO: Check keyboard events with kbd helpers
    // if (kbd.leftArrow(e) || kbd.upArrow(e)) {
    //   const value = rotateOptionBackward(enabledOptions, index, length);
    //   setState(prev => ({ ...prev, currentValue: value }));
    //   if (onChange) onChange(value);
    // }
    // if (kbd.rightArrow(e) || kbd.downArrow(e)) {
    //   const value = rotateOptionForward(enabledOptions, index);
    //   setState(prev => ({ ...prev, currentValue: value }));
    //   if (onChange) onChange(value);
    // }
    // if (kbd.enter(e) || kbd.space(e)) {
    //   setState(prev => ({ ...prev, isOpen: false }));
    // }
    // if (kbd.tab(e)) {
    //   setState(prev => ({ ...prev, isOpen: true, currentValue: options[0].value }));
    // }
  }, [disabled, options, currentValue, onChange]);

  const openDropdown = React.useCallback(() => {
    if (!disabled) {
      setState(prev => ({ ...prev, isOpen: true }));
    }
  }, [disabled]);

  const closeDropdown = React.useCallback(() => {
    setState(prev => ({ ...prev, isOpen: false }));
  }, []);

  const selectItem = React.useCallback((event: React.KeyboardEvent | React.MouseEvent) => {
    // TODO: const value = d.read(dom.getData(dom.getCurrentTarget(event), 'value'));
    setState(prev => ({ ...prev, currentValue: /* value */ null }));
    if (onChange) onChange(/* value */ null);
  }, [onChange]);

  const highlightItem = React.useCallback((event: React.MouseEvent) => {
    if (onPointerEnterOption) {
      // TODO: const value = d.read(dom.getData(dom.getCurrentTarget(event), 'value'));
      onPointerEnterOption(/* value */ null);
    }
  }, [onPointerEnterOption]);

  const unhighlightItem = React.useCallback((event: React.MouseEvent) => {
    if (onPointerLeaveOption) {
      // TODO: const value = d.read(dom.getData(dom.getCurrentTarget(event), 'value'));
      onPointerLeaveOption(/* value */ null);
    }
  }, [onPointerLeaveOption]);

  React.useEffect(() => {
    setState(prev => ({ ...prev, currentValue: defaultValue }));
  }, [defaultValue]);

  React.useEffect(() => {
    if (dropdownDirectionChange.current !== 0 && isOpen === false) {
      dropdownDirection[1]('down');
      dropdownDirectionChange.current = 0;
    }
  }, [isOpen]);

  React.useEffect(() => {
    const dropdownElement = nodeRef.current;
    if (dropdownDirectionChange.current === 0 && dropdownElement) {
      // TODO: const isOutside = dom.isElementOutside(dropdownElement);
      // dropdownDirection[1](isOutside ? 'up' : 'down');
      dropdownDirectionChange.current++;
    }
  }, [isOpen]);

  const selectedOption = options.find(opt => typeof opt === 'object' && 'value' in opt && opt.value === defaultValue) as { value: any; icon?: string };
  const currentIcon = selectedOption?.icon;
  // TODO: const currentIconRef = deprecatedIcon.keyToIcon(currentIcon);

  return (
    <div
      id={currentId}
      onClick={openDropdown}
      onKeyUp={handleKeyUp}
      tabIndex={0}
      role="combobox"
      // className={css('custom-select', disabled && 'disabled', currentIconRef && 'icon', className)}
    >
      {/* {currentIcon && currentIconRef && <span className={css('current-icon')}>{currentIconRef}</span>} */}
      <span className="current-label">{currentLabel}</span>
      <span className="dropdown-button">
        {/* deprecated-icon/arrow */}
        <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </span>
      <Dropdown show={isOpen} onClose={closeDropdown}>
        <ul
          ref={nodeRef}
          data-direction={dataDirection || dropdownDirection[0]}
          className={`${dropdownClass} custom-select-dropdown`}
        >
          {options.map((item, index) => {
            if (typeof item === 'object' && 'disabled' in item && item.disabled) {
              return (
                <li
                  key={`${currentId}-${index}`}
                  className="separator"
                  tabIndex={-1}
                  role="option"
                />
              );
            }

            const [value, label, icon] = asKeyValue(item);
            // TODO: const iconRef = deprecatedIcon.keyToIcon(icon);
            const isSelected = value === currentValue;
            const isDisabled = typeof item === 'object' && 'disabled' in item && item.disabled;

            return (
              <li
                key={`${currentId}-${index}`}
                tabIndex={-1}
                role="option"
                className={`checked-element ${isDisabled ? 'disabled' : ''} ${isSelected ? 'is-selected' : ''}`}
                data-value={JSON.stringify(value)}
                onKeyUp={selectItem}
                onPointerEnter={highlightItem}
                onPointerLeave={unhighlightItem}
                onClick={selectItem}
              >
                {/* {icon && iconRef && <span className="icon">{iconRef}</span>} */}
                <span className="label">{label}</span>
                <span className="check-icon">
                  {/* deprecated-icon/tick */}
                  <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                </span>
              </li>
            );
          })}
        </ul>
      </Dropdown>
    </div>
  );
}
