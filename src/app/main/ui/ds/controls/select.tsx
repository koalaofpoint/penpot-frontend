// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from 'react';
import { Icon, ICON_ID } from '../foundations/assets/icon';
// import { cssClass } from '../../../style';
// import { stopPropagation, preventDefault, getCurrentTarget, getParentWithData, getData, setData, isChild, scrollIntoViewIfNeeded } from '../../../util/dom';
// import { isSpaceKey, isEnterKey, isEscKey } from '../../../util/keyboard';

interface SelectOption {
  id: string;
  label: string;
  icon?: string;
  dimmed?: boolean;
}

interface SelectProps {
  options: SelectOption[];
  class?: string;
  disabled?: boolean;
  defaultSelected?: string;
  emptyToEnd?: boolean;
  onChange?: (selected: string) => void;
  variant?: 'default' | 'ghost';
}

export function Select({
  options,
  class: className,
  disabled = false,
  defaultSelected,
  emptyToEnd = false,
  onChange,
  variant = 'default'
}: SelectProps): JSX.Element {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState(defaultSelected || '');
  const [focusedId, setFocusedId] = React.useState<string | null>(null);

  const listboxId = `listbox-${React.useId()}`;
  const selectRef = React.useRef<HTMLDivElement>(null);
  const nodesRef = React.useRef<Map<string, HTMLElement>>(new Map());
  const optionsRef = React.useRef<SelectOption[]>(options);

  React.useEffect(() => {
    optionsRef.current = options;
  }, [options]);

  const getOption = (id: string): SelectOption | undefined => {
    const options = optionsRef.current;
    return options.find(opt => opt.id === id);
  };

  const handleFocusChange = (newIndex: number, nodes: Map<string, HTMLElement>): void => {
    const option = options[newIndex];
    const id = option.id;
    const node = nodes.get(id);

    setFocusedId(id);
    if (node) {
      scrollIntoViewIfNeeded(node);
    }
  };

  const handleSelection = (focused: string | null, open: boolean): void => {
    setSelectedId(focused || '');
    setFocusedId(null);
    setIsOpen(false);

    if (onChange && focused !== null) {
      onChange(focused);
    }
  };

  const handleOptionClick = (event: React.MouseEvent): void => {
    stopPropagation(event);
    const node = getCurrentTarget(event) as HTMLElement;
    const id = getData(node, 'id') as string;

    setSelectedId(id);
    setFocusedId(null);
    setIsOpen(false);

    if (onChange) {
      onChange(id);
    }
  };

  const handleClick = (event: React.MouseEvent): void => {
    preventDefault(event);
    stopPropagation(event);
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleBlur = (event: React.FocusEvent): void => {
    const selectNode = selectRef.current;
    const target = event.relatedTarget;

    if (selectNode && !isChild(selectNode, target as Node)) {
      handleSelection(focusedId, isOpen);
    }
  };

  const handleButtonKeyDown = (event: React.KeyboardEvent): void => {
    stopPropagation(event);

    if (disabled) {
      return;
    }

    const nodes = nodesRef.current;
    const len = options.length;
    let index = options.findIndex(opt => opt.id === focusedId);

    if (event.code === 'Home' || event.code === 'ArrowUp') {
      event.preventDefault();
      const newIndex = index - 1 < 0 ? len - 1 : index - 1;
      handleFocusChange(newIndex, nodes);
    } else if (event.code === 'End' || event.code === 'ArrowDown') {
      event.preventDefault();
      const newIndex = index + 1 >= len ? 0 : index + 1;
      handleFocusChange(newIndex, nodes);
    } else if (isSpaceKey(event) || isEnterKey(event)) {
      event.preventDefault();
      if (isOpen && focusedId !== null) {
        handleSelection(focusedId, isOpen);
      }
    } else if (isEscKey(event)) {
      event.preventDefault();
      setIsOpen(false);
      setFocusedId(null);
    }
  };

  const selectedOption = getOption(selectedId);
  const emptySelectedId = selectedId === '' || selectedId === '--';

  return React.createElement(
    'div',
    {
      className: [className, cssClass({ select: true, 'variant-ghost': variant === 'ghost' })].filter(Boolean).join(' '),
      role: 'combobox',
      'aria-controls': listboxId,
      'aria-haspopup': 'listbox',
      'aria-activedescendant': focusedId,
      'aria-expanded': isOpen,
      onKeyDown: handleButtonKeyDown,
      onClick: handleClick,
      disabled
    },
    [
      React.createElement(
        'div',
        { className: cssClass({ 'select-wrapper': true }), onClick: handleClick, ref: selectRef, onBlur: handleBlur },
        [
          React.createElement('button', null,
            React.createElement(
              'span',
              { className: cssClass({ 'select-header': true, 'header-icon': !!selectedOption?.icon }) },
              selectedOption?.icon && React.createElement(Icon, { iconId: selectedOption.icon as any, size: 's', 'aria-hidden': true }),
              React.createElement(
                'span',
                { className: cssClass({ 'header-label': true, 'header-label-dimmed': !!selectedOption?.dimmed || emptySelectedId }) },
                selectedOption?.label ?? (emptySelectedId ? '--' : '')
              )
            )
          ),
          React.createElement(Icon, { iconId: ICON_ID.arrowDown, className: cssClass({ arrow: true }), size: 's', 'aria-hidden': true })
        ]
      ),
      isOpen && React.createElement(
        'options-dropdown-component',
        {
          onClick: handleOptionClick,
          id: listboxId,
          options: options,
          selected: selectedId,
          focused: focusedId,
          emptyToEnd
        }
      )
    ]
  );
}

// Temporary placeholder for cssClass
function cssClass(classes: Record<string, boolean>): string {
  return Object.entries(classes)
    .filter(([_, value]) => value)
    .map(([key, _]) => key)
    .join(' ');
}
