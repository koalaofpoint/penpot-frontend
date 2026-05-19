// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from 'react';
import { Icon } from 'app/main/ui/ds/foundations/assets/icon';
import { Swatch } from 'app/main/ui/ds/utilities/swatch';

interface PropertyDetailCopiableProps {
  color?: any;
  token?: any;
  copied: boolean;
  onClick: () => void;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLButtonElement>;
}

export function PropertyDetailCopiable({
  color,
  token,
  copied,
  onClick,
  children,
  ref
}: PropertyDetailCopiableProps) {
  return (
    <button
      className={`property-detail-copiable ${copied ? 'property-detail-copied' : ''} ${color ? 'property-detail-copiable-color' : ''}`}
      onClick={onClick}
      ref={ref}
    >
      {color && <Swatch background={color} size="small" />}
      {token ? (
        <span className="property-detail-text property-detail-text-token">
          {token.name}
        </span>
      ) : color?.refId ? (
        <span className="property-detail-text">{color.name}</span>
      ) : (
        <span className="property-detail-text">{children}</span>
      )}
      <Icon
        className="property-detail-icon"
        iconId={copied ? 'tick' : 'clipboard'}
        size="s"
        ariaLabel={tr('inspect.tabs.styles.copy-to-clipboard')}
      />
    </button>
  );
}
