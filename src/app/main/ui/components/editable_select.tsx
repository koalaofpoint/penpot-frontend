// This Source Code Form is subject to terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { css, cssCase } from '../../main/style';
// import { d, dm } from '../../../common/data';
// import { mth } from '../../../common/math';
// import { uuid } from '../../../common/uuid';
// import { cs } from './select';
// import { deprecatedIcon } from '../icons';
// import { dom } from '../../../util/dom';
// import { kbd } from '../../../util/keyboard';
// import { timers } from '../../../util/timers';

/**
 * Editable select option type
 */
export type EditableSelectOption = string | { value: any; label: string } | { disabled: true };

/**
 * Editable select component props
 */
export interface EditableSelectProps {
  value: any;
  type?: 'text' | 'number';
  options: EditableSelectOption[];
  class?: string;
  onChange?: (value: any) => void;
  onBlur?: () => void;
  placeholder?: string;
  inputClass?: string;
  ariaLabel?: string;
  min?: number;
  max?: number;
}

/**
 * Helper to convert option to key-value format
 */
function asKeyValue(item: EditableSelectOption): [any, string] {
  if (typeof item === 'string') {
    return [item, item];
  }
  if ('value' in item && 'label' in item) {
    return [(item as { value: any; label: string }).value, (item as { value: any; label: string }).label];
  }
  return [null, ''];
}

/**
 * Editable select component - Dropdown with inline input editing
 */
export function EditableSelect({
  value,
  type = 'text',
  options,
  class: className,
  onChange,
  onBlur,
  placeholder,
  inputClass,
  ariaLabel,
  min,
  max
}: EditableSelectProps) {
  const [state, setState] = React.useState({
    id: '',
    isOpen: false,
    currentValue: value,
    top: undefined as number | undefined,
    left: undefined as number | undefined,
    bottom: undefined as number | undefined
  });

  const isOpen = state.isOpen;
  const currentValue = state.currentValue;
  const elementId = state.id;

  const emitBlurRef = React.useRef(false);
  const fontSizeWrapperRef = React.useRef<HTMLUListElement>(null);

  const toggleDropdown = React.useCallback(() => {
    setState(prev => ({ ...prev, isOpen: !prev.isOpen }));
  }, []);

  const closeDropdown = React.useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    setState(prev => ({ ...prev, isOpen: false }));
  }, []);

  const selectItem = React.useCallback((event: React.MouseEvent) => {
    // TODO: const value = d.read(dom.getData(dom.getCurrentTarget(event), 'value'));
    const itemValue = event.currentTarget.getAttribute('data-value');
    const newValue = itemValue ? JSON.parse(itemValue) : null;

    setState(prev => ({ ...prev, currentValue: newValue }));
    if (onChange) onChange(newValue);
    if (onBlur) onBlur();
  }, [onChange, onBlur]);

  const labelsMap = React.useMemo(() => {
    const result: Record<any, string> = {};
    options.forEach(item => {
      const [value, label] = asKeyValue(item);
      if (value !== null) {
        result[value] = label;
      }
    });
    return result;
  }, [options]);

  const valueToLabel = React.useCallback((val: any) => labelsMap[val] ?? val, [labelsMap]);

  const setValue = React.useCallback((newValue: any) => {
    setState(prev => ({ ...prev, currentValue: newValue }));
    if (onChange) onChange(newValue);
  }, [onChange]);

  const handleChangeInput = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const strValue = event.target.value;
    const parsedValue = parseFloat(strValue);
    setValue(isNaN(parsedValue) ? strValue : parsedValue);
  }, [setValue]);

  const handleKeyDown = React.useCallback((event: React.KeyboardEvent) => {
    if (type !== 'number') return;

    // TODO: const up = kbd.upArrow(event);
    // TODO: const down = kbd.downArrow(event);
    const up = event.key === 'ArrowUp';
    const down = event.key === 'ArrowDown';

    if (!up && !down) return;

    event.preventDefault();
    const input = event.target as HTMLInputElement;
    const strValue = input.value;
    const parsedValue = parseFloat(strValue);
    const currentValue = isNaN(parsedValue) ? 0 : parsedValue;

    let increment: number;
    // TODO: if (kbd.shift(event)) { increment = up ? 10 : -10; }
    // TODO: else if (kbd.alt(event)) { increment = up ? 0.1 : -0.1; }
    // TODO: else { increment = up ? 1 : -1; }
    if (event.shiftKey) {
      increment = up ? 10 : -10;
    } else if (event.altKey) {
      increment = up ? 0.1 : -0.1;
    } else {
      increment = up ? 1 : -1;
    }

    let newValue = currentValue + increment;

    if (typeof min === 'number' && newValue < min) newValue = min;
    if (typeof max === 'number' && newValue > max) newValue = max;

    setValue(newValue);
  }, [type, min, max, setValue]);

  const handleFocus = React.useCallback(() => {
    emitBlurRef.current = false;
  }, []);

  const handleBlur = React.useCallback(() => {
    emitBlurRef.current = true;
    // TODO: timers.schedule(200, () => { if (onBlur && emitBlurRef.current) onBlur(); });
    const timeoutId = setTimeout(() => {
      if (onBlur && emitBlurRef.current) onBlur();
    }, 200);
    return () => clearTimeout(timeoutId);
  }, [onBlur]);

  React.useEffect(() => {
    if (String(value) !== String(currentValue)) {
      setState(prev => ({ ...prev, currentValue: value }));
    }
  }, [value, currentValue]);

  React.useEffect(() => {
    if (isOpen) {
      const wrapperNode = fontSizeWrapperRef.current;
      if (!wrapperNode) return;

      // TODO: const node = dom.getElementByClass('checked-element is-selected', wrapperNode);
      const node = wrapperNode.querySelector('.checked-element.is-selected') as HTMLElement;

      // TODO: const nodes = dom.getElementsByClass('checked-element-value', wrapperNode);
      const nodes = Array.from(wrapperNode.querySelectorAll('.checked-element-value'));

      const closest = (arr: number[], target: number) => {
        const sorted = [...arr].sort((a, b) => Math.abs(a - target) - Math.abs(b - target));
        return sorted[0];
      };
      const optionsNumbers = options.map(o => typeof o === 'string' ? parseFloat(o) : NaN).filter(n => !isNaN(n));
      const closestValue = String(closest(optionsNumbers, value));

      if (node) {
        node.scrollIntoView({ block: 'nearest', inline: 'nearest' });
      } else if (nodes.length > 0) {
        // TODO: const targetNode = d.seek(n => closestValue === dom.getInnerText(n), nodes);
        const targetNode = nodes.find(n => n.textContent === closestValue);
        if (targetNode) {
          targetNode.scrollIntoView({ block: 'nearest', inline: 'nearest' });
        }
      }
    }

    emitBlurRef.current = !isOpen;
  }, [isOpen, options, value]);

  return (
    <div
      className={`${className} editable-select`}
      ref={(node: HTMLDivElement | null) => {
        if (node) {
          // TODO: timers.schedule(#(when-let [bounds (when node (dom/get-bounding-rect node))] {...}))
          setTimeout(() => {
            const bounds = node.getBoundingClientRect();
            if (bounds) {
              // TODO: const { windowHeight } = dom.getWindowSize();
              const windowHeight = window.innerHeight;
              const { left, top, height } = bounds;
              const bottom = windowHeight - top < 300 ? windowHeight - top : undefined;
              const newTop = windowHeight - top >= 300 ? top + height : undefined;

              setState(prev => ({
                ...prev,
                left,
                top: newTop,
                bottom
              }));
            }
          }, 0);
        }
      }}
    >
      {type === 'number' ? (
        // TODO: cs.numeric-input({ value: valueToLabel(currentValue), className: inputClass, onChange: setValue, onFocus: handleFocus, onBlur: handleBlur, aria-label: ariaLabel, placeholder })
        <input
          type="number"
          value={valueToLabel(currentValue)}
          className={inputClass}
          onChange={e => setValue(parseFloat(e.target.value))}
          onFocus={handleFocus}
          onBlur={handleBlur}
          aria-label={ariaLabel}
          placeholder={placeholder}
        />
      ) : (
        <input
          value={value === ':multiple' ? '' : valueToLabel(currentValue)}
          className={inputClass}
          onChange={handleChangeInput}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          aria-label={ariaLabel}
          type={type}
        />
      )}
      <span className="dropdown-button" onClick={toggleDropdown}>
        {/* deprecated-icon/arrow */}
        <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </span>
      <Dropdown show={isOpen} onClose={closeDropdown}>
        <ul className="custom-select-dropdown" ref={fontSizeWrapperRef}>
          {options.map((item, index) => {
            if (typeof item === 'object' && 'disabled' in item && item.disabled) {
              return (
                <li key={`${elementId}-${index}`} className="separator" />
              );
            }

            const [value, label] = asKeyValue(item);
            const isSelected = String(value) === String(currentValue);

            return (
              <li
                key={`${elementId}-${index}`}
                className={`dropdown-element ${isSelected ? 'is-selected' : ''}`}
                data-value={JSON.stringify(value)}
                onClick={selectItem}
              >
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
