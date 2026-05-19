// This Source Code Form is subject to terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { css, cssCase } from '../../main/style';
// import { iconButton } from '../ds/buttons/icon-button';
// import { icon } from '../ds/foundations/assets/icon';

/**
 * Title bar component props
 */
export interface TitleBarProps {
  class?: string;
  collapsable?: boolean;
  collapsed?: boolean;
  title?: React.ReactNode;
  children?: React.ReactNode;
  btnIcon?: string;
  btnTitle?: string;
  allClickable?: boolean;
  addIconGap?: boolean;
  titleClass?: string;
  onCollapsed?: () => void;
  onBtnClick?: () => void;
}

/**
 * Title bar component - Collapsible section header
 */
export function TitleBar({
  class: className,
  collapsable,
  collapsed,
  title,
  children,
  btnIcon,
  btnTitle,
  allClickable,
  addIconGap,
  titleClass,
  onCollapsed,
  onBtnClick
}: TitleBarProps) {
  const iconId = collapsed ? 'arrow-right' : 'arrow-down';

  return (
    <div className={`title-bar ${allClickable ? 'all-clickable' : ''} ${className || ''}`}>
      {collapsable ? (
        <div className={`title-wrapper ${titleClass || ''}`}>
          {allClickable ? (
            <button className="icon-text-btn" onClick={onCollapsed}>
              {/* icon({ iconId, size: 's', class: 'icon' }) */}
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                {collapsed ? (
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                ) : (
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
                )}
              </svg>
              <div className="title">{title}</div>
            </button>
          ) : (
            <>
              <button className="icon-btn" onClick={onCollapsed}>
                {/* icon({ iconId, size: 's', class: 'icon' }) */}
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  {collapsed ? (
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  ) : (
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
                  )}
                </svg>
              </button>
              <div className="title">{title}</div>
            </>
          )}
        </div>
      ) : (
        <div className={`title-only ${addIconGap ? 'title-only-icon-gap' : ''} ${titleClass || ''}`}>
          {title}
        </div>
      )}
      {children}
      {onBtnClick && (
        // iconButton({ variant: 'ghost', ariaLabel: btnTitle, onClick: onBtnClick, icon: btnIcon })
        <button className="icon-button" aria-label={btnTitle} onClick={onBtnClick}>
          {btnIcon && <span className="icon">{btnIcon}</span>}
        </button>
      )}
    </div>
  );
}

/**
 * Inspect title bar component props
 */
export interface InspectTitleBarProps {
  class?: string;
  title?: React.ReactNode;
  titleClass?: string;
}

/**
 * Inspect title bar component - Simplified version for inspect panels
 */
export function InspectTitleBar({ class: className, title, titleClass }: InspectTitleBarProps) {
  return (
    <div className={`title-bar ${className || ''}`}>
      <div className={`${titleClass || ''} title-only inspect-title`}>{title}</div>
    </div>
  );
}
