// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from 'react';
import { InspectTitleBar } from 'app/main/ui/components/title-bar';
import { CopyButton } from 'app/main/ui/components/copy-button';
import { tr } from 'app/util/i18n';
import { name } from 'app/common/data';
import { join, split, capital } from 'cuerdas/core';

function mapToCss(attr: Record<string, any>): string {
  return Object.entries(attr)
    .map(([attrKey, attrValue]) => `${name(attrKey)}:${attrValue}`)
    .join('; ');
}

function humanizeAttr(attr: string | symbol): string {
  const attrName = name(attr);
  return capital(join(' ', split(attrName, '-')));
}

interface SvgAttrProps {
  attr: string | symbol;
  value: any;
}

function SvgAttr({ attr, value }: SvgAttrProps) {
  if (typeof value === 'object' && value !== null) {
    return (
      <>
        <div className="attributes-subtitle">
          <span>{name(attr)}</span>
          <CopyButton data={mapToCss(value)} />
        </div>
        {Object.entries(value).map(([attrKey, attrValue]) => (
          <SvgAttr
            key={`svg-key-${name(attrKey)}`}
            attr={attrKey}
            value={attrValue}
          />
        ))}
      </>
    );
  }

  const attrName = humanizeAttr(attr);
  return (
    <div className="svg-row">
      <div className="global-attr-label">{attrName}</div>
      <div className="global-attr-value">
        <CopyButton data={name(value)} className="copy-btn-title">
          <div className="button-children">{String(value)}</div>
        </CopyButton>
      </div>
    </div>
  );
}

interface SvgBlockProps {
  shape: any;
}

function SvgBlock({ shape }: SvgBlockProps) {
  return (
    <>
      {Object.entries(shape.svgAttrs || {}).map(([attrKey, attrValue]) => (
        <SvgAttr
          key={`svg-block-key-${name(attrKey)}`}
          attr={attrKey}
          value={attrValue}
        />
      ))}
    </>
  );
}

interface SvgPanelProps {
  shapes: any[];
}

export function SvgPanel({ shapes }: SvgPanelProps) {
  const shape = shapes[0];

  if (!shape || !shape.svgAttrs || Object.keys(shape.svgAttrs).length === 0) {
    return null;
  }

  return (
    <div className="attributes-block">
      <InspectTitleBar
        title={tr('workspace.sidebar.options.svg-attrs.title')}
        titleClass="svg-attr-title"
      />
      <SvgBlock shape={shape} />
    </div>
  );
}
