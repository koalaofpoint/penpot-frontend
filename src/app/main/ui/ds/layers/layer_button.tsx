// This Source Code Form is subject to terms of Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { css, cssCase } from '../../../style';
// import { icon } from '../foundations/assets/icon';

/**
 * Layer button component props
 */
export interface LayerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  description?: string;
  class?: string;
  isExpandable?: boolean;
  expanded?: boolean;
  icon?: string;
  onToggleExpand?: () => void;
  onContextMenu?: (event: React.MouseEvent) => void;
}

/**
 * Layer button component
 */
export function LayerButton({
  label,
  description,
  class: className,
  isExpandable,
  expanded,
  icon,
  onToggleExpand,
  onContextMenu,
  children,
  ...props
}: LayerButtonProps & { children?: React.ReactNode }) {
  const buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement> = {
    ...props,
    className: `${className || ''} layer-button ${isExpandable ? 'layer-button--expandable' : ''} ${expanded ? 'layer-button--expanded' : ''}`,
    type: 'button',
    onClick: onToggleExpand,
    onContextMenu
  };

  return (
    <div className="layer-button-wrapper">
      <button {...buttonProps}>
        <div className="layer-button-content">
          {isExpandable && (
            // icon({ iconId: 'arrow-down', class: 'folder-node-icon' })
            <svg viewBox="0 0 24 24" fill="currentColor" className="folder-node-icon" width="16" height="16">
              {expanded ? <path d="M7 10l5 5 5-5z" /> : <path d="M7 14l5-5 5z" />}
            </svg>
          )}
          {icon && (
            // icon({ iconId: icon, class: 'layer-button-icon' })
            <svg viewBox="0 0 24 24" fill="currentColor" className="layer-button-icon" width="16" height="16">
              {/* Icon placeholder */}
            </svg>
          )}
          <span className="layer-button-name">{label}</span>
          {description && <span className="layer-button-description">{description}</span>}
          <span className="layer-button-quantity">{children}</span>
        </div>
        <div className="layer-button-actions">{children}</div>
      </button>
    </div>
  );
}
