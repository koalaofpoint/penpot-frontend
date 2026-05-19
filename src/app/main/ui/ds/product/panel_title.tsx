// This Source Code Form is subject to terms of Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { css } from '../../../style';
// import { iconButton } from '../buttons/icon-button';
// import { i } from '../foundations/assets/icon';
// import { tr } from '../../../../util/i18n';

/**
 * Panel title component props
 */
export interface PanelTitleProps {
  class?: string;
  text: string;
  onClose?: () => void;
}

/**
 * Panel title component
 */
export function PanelTitle({ class: className, text, onClose }: PanelTitleProps) {
  const props = { className: `${className || ''} panel-title` };

  return (
    <div {...props}>
      <span className="panel-title-text">{text}</span>
      {onClose && (
        // iconButton({ variant: 'ghost', ariaLabel: tr('labels.close'), onClick: onClose, icon: i.close })
        <button
          className="icon-button"
          aria-label="Close"
          onClick={onClose}
        >
          {/* icon({ iconId: 'close' }) */}
          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
            <path d="M19 6.41L17.59 5 12 10.59 5 5 17.59 6.41 19 12 13.41 5 19 6.41z" />
          </svg>
        </button>
      )}
    </div>
  );
}
