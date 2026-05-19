// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from 'react';
import * as colorTypes from 'app/common/types/color';
import * as cfg from 'app/config';
import { Button } from 'app/main/ui/ds/buttons/button';
import { Tooltip } from 'app/main/ui/ds/tooltip';
import * as fmt from 'app/main/ui/formats';
import { PropertyDetailCopiable } from 'app/main/ui/inspect/styles/property-detail-copiable';
import * as clipboard from 'app/util/clipboard';
import * as color from 'app/util/color';
import { tr } from 'app/util/i18n';
import { replace, replace as regReplace } from 'cuerdas/core';

interface ColorPropertiesRowProps {
  className?: string;
  term: string;
  color: any;
  format?: string;
  token?: any;
  copiable?: boolean;
}

export function ColorPropertiesRow({
  className,
  term,
  color,
  format = 'hex',
  token,
  copiable
}: ColorPropertiesRowProps) {
  const [copied, setCopied] = React.useState(false);
  const rowRef = React.useRef<HTMLDivElement>(null);

  const colorValue = color.color;
  const colorGradient = color.gradient;
  const colorImage = color.image;
  const colorImageName = colorImage?.name;
  const colorImageUrl = colorImage ? cfg.resolveFileMedia(colorImage) : null;

  const colorOpacity = React.useMemo(() => {
    return `${fmt.formatNumber((color.opacity || 1) * 100)}%`;
  }, [color.opacity]);

  const formattedColorValue = React.useMemo(() => {
    if (color.color) {
      switch (format) {
        case 'hex':
          return `${colorValue} ${colorOpacity}`;
        case 'rgba': {
          const [r, g, b, a] = colorTypes.hexToRgba(colorValue, color.opacity);
          return colorTypes.formatRgba([r, g, b, a]);
        }
        case 'hsla': {
          const [h, s, l, a] = colorTypes.hexToHsla(colorValue, color.opacity);
          return colorTypes.formatHsla([h, s, l, a]);
        }
        default:
          return colorValue;
      }
    }
    if (color.gradient) {
      return color.gradientTypeToString(color.gradient.type);
    }
    if (color.image) {
      return tr('media.image');
    }
    return 'none';
  }, [color, format, colorValue, colorOpacity]);

  const cssTerm = React.useMemo(() => {
    return regReplace(
      regReplace(
        regReplace(term, ' ', '-'),
        '([A-Z])',
        '-$1'
      ),
      '^-',
      ''
    ).toLowerCase();
  }, [term]);

  const copiableValue = React.useMemo(() => {
    if (token) {
      return token.name;
    }
    if (color.color) {
      return `${cssTerm}: ${color.colorToFormatBackground(color, format)};`;
    }
    if (color.gradient) {
      return `${cssTerm}: ${color.colorToBackground(color)};`;
    }
    if (color.image && colorImageUrl) {
      return `${cssTerm}: url('${colorImageUrl}') no-repeat center center / cover;`;
    }
    return 'none';
  }, [color, token, cssTerm, format, colorImageUrl]);

  const handleCopy = React.useCallback(() => {
    clipboard.toClipboard(copiableValue);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  }, [copiableValue]);

  return (
    <>
      <dl
        className={`property-row ${className || ''}`}
        data-testid="property-row"
      >
        <dt className="property-term">{term}</dt>
        <dd className="property-detail">
          {token ? (
            <Tooltip
              id={token.name}
              className="tooltip-token-wrapper"
              triggerRef={rowRef}
              content={
                <div className="tooltip-token">
                  <div className="tooltip-token-title">
                    {tr('inspect.tabs.styles.token-resolved-value')}
                  </div>
                  <div className="tooltip-token-value">
                    {String(token.resolvedValue)}
                  </div>
                </div>
              }
            >
              <PropertyDetailCopiable
                color={color}
                token={token}
                copied={copied}
                ref={rowRef}
                onClick={handleCopy}
              >
                {formattedColorValue}
              </PropertyDetailCopiable>
            </Tooltip>
          ) : (
            <PropertyDetailCopiable
              color={color}
              copied={copied}
              onClick={handleCopy}
            >
              {formattedColorValue}
            </PropertyDetailCopiable>
          )}
        </dd>
      </dl>
      {color.image && colorImageUrl && (
        <figure className="color-image-preview">
          <div className="color-image-preview-wrapper">
            <img
              className="color-image"
              src={colorImageUrl}
              title={colorImageName}
              alt={tr('inspect.attributes.image.preview')}
            />
          </div>
          <Button
            variant="secondary"
            to={colorImageUrl}
            type="button"
            target="_blank"
            download={colorImageName}
          >
            {tr('inspect.attributes.image.download')}
          </Button>
        </figure>
      )}
    </>
  );
}
