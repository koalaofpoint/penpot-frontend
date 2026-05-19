// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from 'react';
import { PropertiesRow } from 'app/main/ui/inspect/styles/rows/properties-row';
import { ColorPropertiesRow } from 'app/main/ui/inspect/styles/rows/color-properties-row';
import { PropertyDetailCopiable } from 'app/main/ui/inspect/styles/property-detail-copiable';
import * as typesFills from 'app/common/types/fills';
import * as typesText from 'app/common/types/text';
import * as fonts from 'app/main/fonts';
import * as fmt from 'app/main/ui/formats';
import { useTypography } from 'app/main/ui/inspect/common/typography';
import * as clipboard from 'app/util/clipboard';
import { trim } from 'cuerdas/core';

interface TypographyNameBlockProps {
  style: any;
}

function TypographyNameBlock({ style }: TypographyNameBlockProps) {
  const typography = useTypography(style);
  const propertyValue = typography?.name || '';

  if (!typography) return null;

  return (
    <PropertiesRow
      term="Typography"
      detail={propertyValue}
      property={propertyValue}
      copiable={true}
    />
  );
}

interface TypographyColorRowProps {
  fill: any;
  shape: any;
  resolvedTokens?: any;
  colorSpace?: string;
}

function TypographyColorRow({ fill, shape, resolvedTokens, colorSpace }: TypographyColorRowProps) {
  const color = typesFills.fillToColor(fill);
  const resolvedToken = resolvedTokens?.[shape.appliedTokens?.fill];

  return (
    <ColorPropertiesRow
      term="Font Color"
      color={color}
      token={resolvedToken}
      format={colorSpace}
      copiable={true}
    />
  );
}

interface StyleTextBlockProps {
  shape: any;
  style: any;
  text: string;
  resolvedTokens?: any;
  colorSpace?: string;
}

function StyleTextBlock({
  shape,
  style,
  text,
  resolvedTokens,
  colorSpace
}: StyleTextBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = React.useCallback(() => {
    const formattedText = style.textTransform === 'uppercase'
      ? text.toUpperCase()
      : text;
    clipboard.toClipboard(formattedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  }, [text, style.textTransform]);

  const compositeTypographyToken = resolvedTokens?.[shape.appliedTokens?.typography];

  return (
    <div className="text-properties">
      {style.fills?.map((fill: any, idx: number) => (
        <TypographyColorRow
          key={idx}
          fill={fill}
          shape={shape}
          resolvedTokens={resolvedTokens}
          colorSpace={colorSpace}
        />
      ))}

      {!compositeTypographyToken && style.typographyRefId && (
        <TypographyNameBlock style={style} />
      )}

      {!style.typographyRefId && compositeTypographyToken && (
        <PropertiesRow
          term="Typography"
          detail={compositeTypographyToken.name}
          token={compositeTypographyToken}
          property={compositeTypographyToken.name}
          copiable={true}
        />
      )}

      {style.fontId && (
        <PropertiesRow
          term="Font Family"
          detail={fonts.getFontData(style.fontId).name}
          token={resolvedTokens?.[shape.appliedTokens?.fontFamily]}
          property={`font-family: "${fonts.getFontData(style.fontId).name}";`}
          copiable={true}
        />
      )}

      {style.fontStyle && (
        <PropertiesRow
          term="Font Style"
          detail={style.fontStyle}
          property={`font-style: ${style.fontStyle};`}
          copiable={true}
        />
      )}

      {style.fontSize && (
        <PropertiesRow
          term="Font Size"
          detail={fmt.formatPixels(style.fontSize)}
          token={resolvedTokens?.[shape.appliedTokens?.fontSize]}
          property={`font-size: ${fmt.formatPixels(style.fontSize)};`}
          copiable={true}
        />
      )}

      {style.fontWeight && (
        <PropertiesRow
          term="Font Weight"
          detail={String(style.fontWeight)}
          token={resolvedTokens?.[shape.appliedTokens?.fontWeight]}
          property={`font-weight: ${style.fontWeight};`}
          copiable={true}
        />
      )}

      {style.lineHeight && (
        <PropertiesRow
          term="Line Height"
          detail={String(style.lineHeight)}
          token={resolvedTokens?.[shape.appliedTokens?.lineHeight]}
          property={`line-height: ${style.lineHeight};`}
          copiable={true}
        />
      )}

      {style.letterSpacing && (
        <PropertiesRow
          term="Letter Spacing"
          detail={fmt.formatPixels(style.letterSpacing)}
          token={resolvedTokens?.[shape.appliedTokens?.letterSpacing]}
          property={`letter-spacing: ${fmt.formatPixels(style.letterSpacing)};`}
          copiable={true}
        />
      )}

      {style.textDecoration && (
        <PropertiesRow
          term="Text Decoration"
          detail={style.textDecoration}
          token={resolvedTokens?.[shape.appliedTokens?.textDecoration]}
          property={`text-decoration: ${style.textDecoration};`}
          copiable={true}
        />
      )}

      {style.textTransform && (
        <PropertiesRow
          term="Text Transform"
          detail={style.textTransform}
          token={resolvedTokens?.[shape.appliedTokens?.textCase]}
          property={`text-transform: ${style.textTransform};`}
          copiable={true}
        />
      )}

      <pre className="text-content-wrapper" role="presentation">
        <PropertyDetailCopiable copied={copied} onClick={handleCopy}>
          <span
            className="text-content"
            style={{
              fontFamily: style.fontFamily,
              fontWeight: style.fontWeight,
              textTransform: style.textTransform,
              letterSpacing: fmt.formatPixels(style.letterSpacing),
              fontStyle: style.fontStyle
            }}
          >
            {trim(text)}
          </span>
        </PropertyDetailCopiable>
      </pre>
    </div>
  );
}

function getStyleText(shape: any): [any, string][] {
  return txt
    .contentToTextAndStyles(shape.content)
    .filter(([, text]) => !trim(text))
    .map(([style, text]) => [{ ...typesText.getDefaultTextAttrs(), ...style }, text]);
}

function generateTypographyShorthand(shapes: any[]): string {
  const shape = shapes[0];
  if (!shape) return '';

  const styleTextBlocks = getStyleText(shape);
  return styleTextBlocks.reduce((acc, [style, _]]) => {
    const fontStyle = style.fontStyle || '';
    const textTransform = style.textTransform || '';
    const fontWeight = style.fontWeight || '';
    const fontSize = style.fontSize || '';
    const lineHeight = style.lineHeight || '';

    return `${acc}font: ${fontStyle} ${textTransform} ${fontWeight} ${fontSize}/${lineHeight} "font-family: " ${style.fontFamily}";`;
  }, '');
}

interface TextPanelProps {
  shapes: any[];
  resolvedTokens?: any;
  colorSpace?: string;
  onFontShorthand?: (shorthand: { panel: string; property: string }) => void;
}

export function TextPanel({
  shapes,
  resolvedTokens,
  colorSpace = 'hex',
  onFontShorthand
}: TextPanelProps) {
  const shorthand = React.useMemo(
    () => generateTypographyShorthand(shapes),
    [shapes]
  );

  React.useEffect(() => {
    if (onFontShorthand) {
      onFontShorthand({ panel: 'text', property: shorthand });
    }
  }, [shorthand, onFontShorthand]);

  return (
    <div className="text-panel">
      {shapes.map(shape => {
        const styleTextBlocks = getStyleText(shape);
        return (
          <div key={shape.id} className="text-shape">
            {styleTextBlocks.map(([style, text]) => (
              <StyleTextBlock
                key={shape.id}
                shape={shape}
                style={style}
                text={text}
                resolvedTokens={resolvedTokens}
                colorSpace={colorSpace}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}
