// This Source Code Form is subject to terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper location
// import { enter } from '../../../util/keyboard';

/**
 * Link button component props
 */
export interface LinkButtonProps {
  onClick?: () => void;
  className?: string;
  value: string;
  dataTestId?: string;
}

/**
 * Link button component - Button that triggers on both click and Enter key
 */
export function LinkButton({ onClick, className, value, dataTestId }: LinkButtonProps) {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    // TODO: if (enter(event)) {
    // TODO:   onClick();
    // TODO: }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className={className}
      value={value}
      tabIndex={0}
      data-testid={dataTestId}
    />
  );
}
