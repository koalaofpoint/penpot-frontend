// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from 'react';
import * as txt from 'app/common/text';
import * as typesFills from 'app/common/types/fills';
import * as typesText from 'app/common/types/text';
import * as fonts from 'app/main/fonts';
import { ColorRow } from 'app/main/ui/inspect/attributes/common';
import { InspectTitleBar } from 'app/main/ui/components/title-bar';
import { CopyButton } from 'app/main/ui/components/copy-button';
import * as fmt from 'app/main/ui/formats';
import { tr } from 'app/util/i18n';
import { trim } from 'cuerdas/core';

function hasText(shape: any): boolean {
  return !!shape.content;
}

function copyStyleData(style: any, ...properties: (string | symbol)[]): string {
  return properties
    .map(prop => `${name(prop)}: ${style[prop]};`)
    .join('\n');
}

interface TypographyBlockProps {
  text: string;
  style: any;
}

function TypographyBlock({ text, style }: TypographyBlockProps) {
  const [colorFormat, setColorFormat] = React.useState('hex');

  return (
    <div className="attributes-content">
      {style.fills && style.fills.map((fill: any, idx: number) => (
        <ColorRow
          key={idx}
          format={colorFormat}
          color={typesFills.fillToColor(fill)}
          copyData={copyStyleData(fill, 'fillColor', 'fillColorGradient')}
          onChangeFormat={setColorFormat}
        />
      ))}

      {style.typographyRefId && (
        <div className="text-row">
          <div className="global-attr-label">{tr('inspect.attributes.typography')}</div>
          <div className="global-attr-value">
            <CopyButton
              data={copyStyleData(getTypography(style), 'fontFamily', 'fontWeight', 'fontStyle')}
              className="copy-btn-wrapper"
            >
              <div className="button-children">{getTypography(style).name}</div>
            </CopyButton>
          </div>
        </div>
      )}

      {style.fontId && (
        <div className="text-row">
          <div className="global-attr-label">Font Family</div>
          <div className="global-attr-value">
            <CopyButton data={copyStyleData(style, 'fontFamily')}>
              <div className="button-children">
                {fonts.getFontData(style.fontId).name}
              </div>
            </CopyButton>
          </div>
        </div>
      )}

      {style.fontStyle && (
        <div className="text-row">
          <div className="global-attr-label">Font Style</div>
          <div className="global-attr-value">
            <CopyButton data={copyStyleData(style, 'fontStyle')}>
              <div className="button-children">{String(style.fontStyle)}</div>
            </CopyButton>
          </div>
        </div>
      )}

      {style.fontSize && (
        <div className="text-row">
          <div className="global-attr-label">Font Size</div>
          <div className="global-attr-value">
            <CopyButton
              data={copyStyleData(
                { ...style, fontSize: fmt.formatPixels(style.fontSize) },
                'fontSize'
              )}
            >
              <div className="button-children">{fmt.formatPixels(style.fontSize)}</div>
            </CopyButton>
          </div>
        </div>
      )}

      {style.fontWeight && (
        <div className="text-row">
          <div className="global-attr-label">Font Weight</div>
          <div className="global-attr-value">
            <CopyButton data={copyStyleData(style, 'fontWeight')}>
              <div className="button-children">{String(style.fontWeight)}</div>
            </CopyButton>
          </div>
        </div>
      )}

      {style.lineHeight && (
        <div className="text-row">
          <div className="global-attr-label">Line Height</div>
          <div className="global-attr-value">
            <CopyButton data={copyStyleData(style, 'lineHeight')}>
              <div className="button-children">{fmt.formatNumber(style.lineHeight)}</div>
            </CopyButton>
          </div>
        </div>
      )}

      {style.letterSpacing && (
        <div className="text-row">
          <div className="global-attr-label">Letter Spacing</div>
          <div className="global-attr-value">
            <CopyButton data={copyStyleData(style, 'letterSpacing')}>
              <div className="button-children">{fmt.formatPixels(style.letterSpacing)}</div>
            </CopyButton>
          </div>
        </div>
      )}

      {style.textDecoration && (
        <div className="text-row">
          <div className="global-attr-label">Text Decoration</div>
          <div className="global-attr-value">
            <CopyButton data={copyStyleData(style, 'textDecoration')}>
              <div className="button-children">
                {tr(`inspect.attributes.typography.text-decoration.${style.textDecoration}`)}
              </div>
            </CopyButton>
          </div>
        </div>
      )}

      {style.textTransform && (
        <div className="text-row">
          <div className="global-attr-label">Text Transform</div>
          <div className="global-attr-value">
            <CopyButton data={copyStyleData(style, 'textTransform')}>
              <div className="button-children">
                {tr(`inspect.attributes.typography.text-transform.${style.textTransform}`)}
              </div>
            </CopyButton>
          </div>
        </div>
      )}

      <CopyButton data={trim(text)} className="attributes-content-row">
        <span
          className="content"
          style={{
            fontFamily: style.fontFamily,
            fontWeight: style.fontWeight,
            fontStyle: style.fontStyle
          }}
        >
          {trim(text)}
        </span>
      </CopyButton>
    </div>
  );
}

interface TextBlockProps {
  shape: any;
}

function TextBlock({ shape }: TextBlockProps) {
  const styleTextBlocks = React.useMemo(() => {
    return txt
      .contentToTextAndStyles(shape.content)
      .filter(([, text]) => !trim(text))
      .map(([style, text]) => [
        { ...typesText.getDefaultTextAttrs(), ...style },
        text
      ]);
  }, [shape.content]);

  return (
    <>
      {styleTextBlocks.map(([fullStyle, text], idx) => (
        <TypographyBlock
          key={`text-block-${idx}`}
          text={text}
          style={fullStyle}
        />
      ))}
    </>
  );
}

interface TextPanelProps {
  shapes: any[];
}

export function TextPanel({ shapes }: TextPanelProps) {
  const filteredShapes = shapes.filter(hasText);

  if (filteredShapes.length === 0) {
    return null;
  }

  return (
    <div className="attributes-block">
      <InspectTitleBar
        title={tr('inspect.attributes.typography')}
        titleClass="text-atrr-title"
      />
      {filteredShapes.map(shape => (
        <TextBlock key={`text-block-${shape.id}`} shape={shape} />
      ))}
    </div>
  );
}
