// This Source Code Form is subject to terms of Mozilla Public
// License, v. 2.0. If a copy of MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { stl } from '../../../style';
// import { refs } from '../../refs';
// import { DropdownContent } from './dropdown';

/**
 * Option interface
 */
export interface ContextMenuOption {
  id: string;
  name: string;
  title?: string;
  disabled?: boolean;
  handler?: () => void;
  options?: ContextMenuOption[];
  separator?: boolean;
}

/**
 * Context menu inner props
 */
export interface ContextMenuInnerProps extends React.HTMLAttributes<HTMLDivElement> {
  onLocalClose?: () => void;
  options?: ContextMenuOption[];
  selectable?: boolean;
  selected?: ContextMenuOption | null;
  top?: number | null;
  left?: number | null;
  fixed?: boolean;
  minWidth?: string;
  origin?: 'top' | 'left' | 'width';
}

/**
 * ContextMenuInner component - Inner menu component
 */
export function ContextMenuInner({
  onLocalClose,
  options = [],
  selectable = true,
  selected = null,
  top = null,
  left = null,
  fixed = false,
  minWidth = 'initial',
  origin = 'top',
  ...props
}: ContextMenuInnerProps) {
  const state = React.useState({
    offsetX: 0,
    offsetY: 0,
    levels: [] as { parent: ContextMenuOption | null; options: ContextMenuOption[] }[],
  });

  const offsetX = React.useMemo(() => state.offsetX, [state.offsetX]);
  const offsetY = React.useMemo(() => state.offsetY, [state.offsetY]);
  const levels = React.useMemo(() => state.levels, [state.levels]);
  const internalId = React.useId();

  React.useEffect(() => {
    // TODO: Add navigation callbacks for keyboard support
  }, [options, selectable]);

  const handleLocalClose = React.useCallback(() => {
    if (onLocalClose) {
      onLocalClose();
    }
    setState(prev => ({
      ...prev,
      levels: [{ parent: null, options: options }]
    }));
    if (onLocalClose) {
      onLocalClose();
    }
  }, [onLocalClose]);

  const handleMouseEnter = (level: number, parent: ContextMenuOption | null, options: ContextMenuOption[]) => () => {
    return (event: React.MouseEvent) => {
      // Handle mouse enter for sub-menu expansion
      // TODO: Implement submenu expansion
    };
  };

  const generateIdsGroup = (opts: ContextMenuOption[], parent: ContextMenuOption | null) => {
    const hasParents = opts.some(opt => !!opt.options);
    const ids = opts.map(opt => opt.id);
    if (hasParents) {
      return ['go-back-sub-option', ...ids];
    }
    return ids;
  };

  React.useEffect(() => {
    if (options.length > 0) {
      const ids = generateIdsGroup(options, null);
      setState(prev => ({
        ...prev,
        levels: [{ parent: null, options: [...prev.levels[prev.levels.length - 1]?.options || [], ...ids }]
      }));
    }
  }, [options]);

  return (
    <div {...props}>
      <DropdownContent onClose={onLocalClose}>
        {levels.map((level, idx) => {
          const lastLevel = idx > 0 ? levels[idx - 1] : null;
          const ids = generateIdsGroup(level.options, lastLevel);

          return (
            <ul
              key={idx}
              className={`context-menu-level ${idx === 0 ? 'top' : ''}`}
              style={{
                top: `${level.top || 0}px`,
                left: `${level.left || 0}px`
              }}
            >
              {level.options.map((opt, optIdx) => (
                <li
                  key={opt.id}
                  role="menuitem"
                  tabIndex={idx === 0 ? 0 : -1}
                  className={selected === opt ? 'selected' : ''}
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    if (opt.handler) {
                      opt.handler();
                    }
                  }}
                  onMouseEnter={handleMouseEnter(idx, level.parent || level.options[optIdx])}
                >
                  {opt.name}
                </li>
              ))}
            </ul>
          );
        })}
      </DropdownContent>
    </div>
  );
}

export { ContextMenuInner };
