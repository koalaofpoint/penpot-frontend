// This Source Code Form is subject to terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { d } from '../../../common/data';
// import { cfg } from '../../../config';
// import { st } from '../store';
// import { dom } from '../../../util/dom';
// import { globals } from '../../../util/globals';
// import { kbd } from '../../../util/keyboard';
// import { rx } from 'beicon.v2.core';
// import { events } from 'goog.events';
// import { ptk } from 'potok.v2.core';

/**
 * Dropdown menu item component props
 */
export interface DropdownMenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  canFocus?: boolean;
}

/**
 * Dropdown menu item component
 */
export function DropdownMenuItem({ canFocus, children, ...props }: DropdownMenuItemProps) {
  const canFocusFinal = canFocus ?? true;
  return (
    <li role="menuitem" tabIndex={canFocusFinal ? 0 : -1} {...props}>
      {children}
    </li>
  );
}

/**
 * Internal dropdown menu component props
 */
export interface InternalDropdownMenuProps {
  onClose: () => void;
  children?: React.ReactNode;
  class?: string;
  id?: string;
}

/**
 * Internal dropdown menu component - Handles click-outside and keyboard navigation
 */
export function InternalDropdownMenu({ onClose, children, className, id }: InternalDropdownMenuProps) {
  const containerRef = React.useRef<HTMLUListElement>(null);

  const handleClick = React.useCallback((event: MouseEvent) => {
    // TODO: const target = dom.getTarget(event);
    const target = event.target as HTMLElement;

    // MacOS ctrl+click sends two events: context-menu and click.
    // In order to not have two handlings we ignore ctrl+click for this platform
    // TODO: const macCtrlClick = cfg.checkPlatform?(:macos) && kbd.ctrl(event);
    const macCtrlClick = false; // Simplified for now

    if (!macCtrlClick && !target.dataset.noClose && onClose) {
      onClose();
    }
  }, [onClose]);

  const handleKeyUp = React.useCallback((event: React.KeyboardEvent) => {
    // TODO: if (kbd.esc(event)) onClose();
    if (event.key === 'Escape') onClose();
  }, [onClose]);

  const handleKeyDown = React.useCallback((event: React.KeyboardEvent) => {
    const container = containerRef.current;
    if (!container) return;

    // TODO: const entries = Array.from(dom.queryAll(container, '[role=menuitem]'));
    const entries = Array.from(container.querySelectorAll('[role="menuitem"]')) as HTMLElement[];

    // TODO: if (kbd.upArrow(event)) {
    // TODO:   const selected = dom.getActive();
    // TODO:   const index = d.indexOfPred(entries, e => e === selected);
    // TODO:   const target = index === null ? entries[entries.length - 1] : entries[index - 1] ?? entries[entries.length - 1];
    // TODO:   dom.focus(target);
    // TODO: }
    if (event.key === 'ArrowUp') {
      const selected = document.activeElement as HTMLElement;
      const index = entries.indexOf(selected);
      const target = index === -1 ? entries[entries.length - 1] : entries[index - 1] ?? entries[entries.length - 1];
      target?.focus();
    }

    // TODO: if (kbd.downArrow(event)) {
    // TODO:   const selected = dom.getActive();
    // TODO:   const index = d.indexOfPred(entries, e => e === selected);
    // TODO:   const target = index === null ? entries[0] : entries[index + 1] ?? entries[0];
    // TODO:   dom.focus(target);
    // TODO: }
    if (event.key === 'ArrowDown') {
      const selected = document.activeElement as HTMLElement;
      const index = entries.indexOf(selected);
      const target = index === -1 ? entries[0] : entries[index + 1] ?? entries[0];
      target?.focus();
    }

    // TODO: if (kbd.enter(event)) {
    // TODO:   const selected = dom.getActive();
    // TODO:   dom.preventDefault(event);
    // TODO:   dom.click(selected);
    // TODO: }
    if (event.key === 'Enter') {
      const selected = document.activeElement as HTMLElement;
      event.preventDefault();
      selected?.click();
    }

    // TODO: if (kbd.tab(event)) onClose();
    if (event.key === 'Tab') onClose();
  }, [onClose]);

  React.useEffect(() => {
    if (id) {
      // TODO: st.emit(ptk.dataEvent(:dropdown/open { id }));
    }
  }, [id]);

  React.useEffect(() => {
    if (!id) return;

    // TODO: const stream = st.stream
    // TODO:   |> rx.filter(ptk.type?(:dropdown/open))
    // TODO:   |> rx.map(deref)
    // TODO:   |> rx.filter(e => e.id !== id)
    // TODO:   |> rx.take(1);
    // TODO: const subs = rx.subs(nil, nil, onClose, stream);

    return () => {
      // TODO: rx.dispose(subs);
    };
  }, [id, onClose]);

  React.useEffect(() => {
    // TODO: const keys = [
    // TODO:   events.listen(globals.document, EventType.CLICK, on-click),
    // TODO:   events.listen(globals.document, EventType.CONTEXTMENU, on-click),
    // TODO:   events.listen(globals.document, EventType.KEYUP, on-keyup),
    // TODO:   events.listen(globals.document, EventType.KEYDOWN, on-keydown)
    // TODO: ];

    const handleKeyUp = (e: KeyboardEvent) => handleKeyUp(e as unknown as React.KeyboardEvent);
    const handleKeyDown = (e: KeyboardEvent) => handleKeyDown(e as unknown as React.KeyboardEvent);

    document.addEventListener('click', handleClick);
    document.addEventListener('contextmenu', handleClick);
    document.addEventListener('keyup', handleKeyUp);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('contextmenu', handleClick);
      document.removeEventListener('keyup', handleKeyUp);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClick, handleKeyUp, handleKeyDown]);

  return (
    <ul className={className} role="menu" ref={containerRef}>
      {children}
    </ul>
  );
}

/**
 * Dropdown menu component props
 */
export interface DropdownMenuProps {
  show: boolean;
}

/**
 * Dropdown menu component
 */
export function DropdownMenu({ show, children }: DropdownMenuProps & { children?: React.ReactNode }) {
  if (!show) return null;
  return (
    <InternalDropdownMenu
      onClose={() => {}}
      {...(children ? {} : undefined)}
    >
      {children}
    </InternalDropdownMenu>
  );
}
