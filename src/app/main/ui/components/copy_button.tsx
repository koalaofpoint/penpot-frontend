// This Source Code Form is subject to terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { css } from '../../main/style';
// import { tr } from '../../../util/i18n';
// import { clipboard } from '../../../util/clipboard';
// import { timers } from '../../../util/timers';

/**
 * Copy button component props
 */
export interface CopyButtonProps {
  data: string;
  className?: string;
  ariaLabel?: string;
}

/**
 * Copy button component - Button that copies content to clipboard
 */
export function CopyButton({ data, className, ariaLabel = tr('labels.copy') }: CopyButtonProps) {
  const [active, setActive] = React.useState(false);
  const timeoutRef = React.useRef<number | null>(null);

  const handleCopy = () => {
    // TODO: clipboard(data);
    setActive(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => setActive(false), 1000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={css('copy-button', active ? 'copy-wrapper' : '', className)}
      data-active={active}
      aria-label={ariaLabel}
      data-value={data}
    >
      <span className={css('icon-btn')}>
        {/* TODO: deprecated-icon/clipboard */}
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 10h-5v-3h4.5l6.7-1.8-1.4.9 9.9h4.5l6.7-1.8-1.4.9-9.9" />
        </svg>
      </span>
    </button>
  );
}
