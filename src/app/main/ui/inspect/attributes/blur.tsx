// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from 'react';
import { ColorRow } from 'app/main/ui/inspect/attributes/common';
import { InspectTitleBar } from 'app/main/ui/components/title-bar';
import { CopyButton } from 'app/main/ui/components/copy-button';
import * as css from 'app/util/code-gen/style-css';
import { tr } from 'app/util/i18n';

function hasBlur(shape: any): boolean {
  return !!shape.blur;
}

interface BlurPanelProps {
  objects: any;
  shapes: any[];
}

export function BlurPanel({ objects, shapes }: BlurPanelProps) {
  const filteredShapes = shapes.filter(hasBlur);

  if (filteredShapes.length === 0) {
    return null;
  }

  return (
    <div className="attributes-block">
      <InspectTitleBar
        title={tr('inspect.attributes.blur')}
        titleClass="blur-attr-title"
      >
        {filteredShapes.length === 1 && (
          <CopyButton
            data={css.getCssProperty(objects, filteredShapes[0], 'filter')}
            className="copy-btn-title"
          />
        )}
      </InspectTitleBar>
      <div className="attributes-content">
        {filteredShapes.map(shape => (
          <div key={`block-${shape.id}-blur`} className="blur-row">
            <div className="global-attr-label">Filter</div>
            <div className="global-attr-value">
              <CopyButton data={css.getCssProperty(objects, shape, 'filter')}>
                <div className="button-children">
                  {css.getCssValue(objects, shape, 'filter')}
                </div>
              </CopyButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
