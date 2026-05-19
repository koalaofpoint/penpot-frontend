// This Source Code Form is subject to terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { css, cssCase } from '../../../style';
// import { d } from '../../../../common/data';
// import { icon, iconList } from '../foundations/assets/icon';
// import { dom } from '../../../../util/dom';
// import { kbd } from '../../../../util/keyboard';
// import { obj } from '../../../../util/object';

/**
 * Tab item props
 */
export interface TabItem {
  icon?: string;
  label?: string;
  'aria-label'?: string;
  id: string;
}

/**
 * Tab component props (private)
 */
export interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  icon?: string;
  label?: string;
  'aria-label'?: string;
  id?: string;
}

// TODO: const ICON_LIST = iconList();
const ICON_LIST: string[] = [];

/**
 * Private tab component
 */
function Tab({ selected, icon, label, 'aria-label': ariaLabel, id, ref: tabRef, ...props }: TabProps & { ref?: React.Ref<HTMLButtonElement> }) {
  const className = `tab ${selected ? 'selected' : ''}`;

  const buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement> = {
    ...props,
    className,
    role: 'tab',
    'aria-selected': selected,
    title: label || ariaLabel,
    tabIndex: selected ? 0 : -1,
    ref: tabRef as React.Ref<HTMLButtonElement>,
    'data-id': id,
    id // For accessibility purposes only
  };

  return (
    <li>
      <button {...buttonProps}>
        {icon && (
          // icon({ iconId: icon, ariaHidden: !!label, ariaLabel: !label ? ariaLabel : undefined })
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden={!!label} className="icon">
            {/* Placeholder icon */}
          </svg>
        )}
        {typeof label === 'string' && (
          <span className={`tab-text ${icon ? 'tab-text-and-icon' : ''}`}>
            {label}
          </span>
        )}
      </button>
    </li>
  );
}

/**
 * Tab navigation props (private)
 */
export interface TabNavProps extends React.HTMLAttributes<HTMLUListElement> {
  tabs: TabItem[];
  selected?: string;
  onClick?: (id: string) => void;
  buttonPosition?: 'start' | 'end';
  actionButton?: React.ReactNode;
}

// TODO: const ICON_LIST = iconList();
const ICON_LIST: string[] = [];

/**
 * Private tab navigation component
 */
function TabNav({ tabs, selected, onClick, buttonPosition, actionButton, ...props }: TabNavProps) {
  const navClass = `tab-nav ${buttonPosition === 'start' ? 'tab-nav-start' : ''} ${buttonPosition === 'end' ? 'tab-nav-end' : ''}`;

  const listProps: React.HTMLAttributes<HTMLUListElement> = {
    ...props,
    className: 'tab-list',
    role: 'tablist',
    'aria-orientation': 'horizontal'
  };

  return (
    <nav className={navClass}>
      {buttonPosition === 'start' && actionButton}
      <ul {...listProps}>
        {tabs.map(tab => (
          <Tab
            key={tab.id}
            icon={tab.icon}
            label={tab.label}
            'aria-label'={tab['aria-label']}
            selected={selected === tab.id}
            onClick={onClick}
            id={tab.id}
          />
        ))}
      </ul>
      {buttonPosition === 'end' && actionButton}
    </nav>
  );
}

/**
 * Tab attrs schema (private)
 */
// const schemaTabAttrs = {
//   title: 'tab',
//   icon: { optional: true, validate: v => ICON_LIST.includes(v) },
//   label: { optional: true, type: 'string' },
//   'aria-label': { optional: true, type: 'string' }
// };

/**
 * Tab schema (private)
 */
// const schemaTab = {
//   and: [schemaTabAttrs, v => (ICON_LIST.includes(v.icon) || v.label || v['aria-label'])]
// };

/**
 * Tab switcher component props
 */
export interface TabSwitcherProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs: TabItem[];
  class?: string;
  onChange?: (id: string) => void;
  selected?: string;
  actionButton?: React.ReactNode;
  actionButtonPosition?: 'start' | 'end';
  scrollablePanel?: boolean;
  children?: React.ReactNode;
}

/**
 * Tab switcher component
 */
export function TabSwitcher({
  tabs,
  class: className,
  onChange,
  selected,
  actionButton,
  actionButtonPosition,
  scrollablePanel = false,
  children,
  ...props
}: TabSwitcherProps) {
  const nodesRef = React.useRef<Record<string, HTMLButtonElement>>({});
  const normalizedTabs = Array.isArray(tabs) ? tabs : [tabs];

  const handleClick = React.useCallback(
    (event: React.MouseEvent) => {
      // TODO: const node = dom.getCurrentTarget(event);
      // TODO: const id = dom.getData(node, 'id');
      const id = event.currentTarget.getAttribute('data-id') || '';
      if (onChange) onChange(id);
    },
    [onChange]
  );

  const handleRef = React.useCallback(
    (node: HTMLButtonElement | null) => {
      const state = nodesRef.current || {};
      // TODO: const id = dom.getData(node, 'id');
      const id = node?.getAttribute('data-id') || '';

      if (node) {
        // TODO: obj.set(state, id, node);
        nodesRef.current = { ...state, [id]: node };
      } else {
        // TODO: obj.unset(state, id);
        nodesRef.current = { ...state };
        delete nodesRef.current[id];
      }
    },
    []
  );

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      const len = tabs.length;
      const isSelected = (id: string) => selected === id;

      let id: string | undefined;

      // TODO: if (kbd.home(event)) { id = tabs[0].id; }
      if (event.key === 'Home') {
        id = tabs[0]?.id;
      }
      // TODO: else if (kbd.leftArrow(event)) {
      // TODO:   const index = d.indexOfPred(tabs, isSelected);
      // TODO:   const newIndex = (index - 1) % len;
      // TODO:   id = tabs[newIndex].id;
      // TODO: }
      else if (event.key === 'ArrowLeft') {
        const index = tabs.findIndex(t => isSelected(t.id));
        const newIndex = ((index - 1) % len + len) % len;
        id = tabs[newIndex]?.id;
      }
      // TODO: else if (kbd.rightArrow(event)) {
      // TODO:   const index = d.indexOfPred(tabs, isSelected);
      // TODO:   const newIndex = (index + 1) % len;
      // TODO:   id = tabs[newIndex].id;
      // TODO: }
      else if (event.key === 'ArrowRight') {
        const index = tabs.findIndex(t => isSelected(t.id));
        const newIndex = (index + 1) % len;
        id = tabs[newIndex]?.id;
      }

      if (id) {
        if (onChange) onChange(id);
        const nodes = nodesRef.current;
        const node = nodes?.[id];
        // TODO: if (node) dom.focus(node);
        if (node) node.focus();
      }
    },
    [selected, tabs, onChange]
  );

  const wrapperProps: React.HTMLAttributes<HTMLDivElement> = {
    ...props,
    className: `${className || ''} tabs`
  };

  const panelClass = `tab-panel ${scrollablePanel ? 'scrollable-panel' : ''}`;

  return (
    <div {...wrapperProps}>
      <div className="padding-wrapper">
        <TabNav
          buttonPosition={actionButtonPosition}
          actionButton={actionButton}
          tabs={normalizedTabs}
          ref={handleRef}
          selected={selected}
          onKeyDown={handleKeyDown}
          onClick={handleClick}
        />
      </div>
      <section
        className={panelClass}
        tabIndex={0}
        role="tabpanel"
        aria-labelledby={selected}
      >
        {children}
      </section>
    </div>
  );
}
