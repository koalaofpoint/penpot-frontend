// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from 'react';
import { useSelector } from 'react-redux';
import { getIn } from 'app/common/data';
import * as colorTypes from 'app/common/types/color';
import * as cf from 'app/config';
import { ColorBullet } from 'app/main/ui/components/color-bullet';
import { CopyButton } from 'app/main/ui/components/copy-button';
import { Select } from 'app/main/ui/components/select';
import { Button } from 'app/main/ui/ds/buttons/button';
import * as fmt from 'app/main/ui/formats';
import { useColorsLibrary, fileColorsRef } from 'app/main/ui/inspect/common/colors';
import { tr } from 'app/util/i18n';
import { name as dName, split, join, capital } from 'cuerdas/core';

function getCssRuleHumanized(property: string | symbol): string {
  const name = dName(property);
  return capital(join(' ', split(name, '-')));
}

interface ColorRowProps {
  color: any;
  format: string;
  copyData: string;
  property: string;
  onChangeFormat?: (format: string) => void;
}

export function ColorRow({
  color,
  format,
  copyData,
  property,
  onChangeFormat
}: ColorRowProps) {
  const colorsLibrary = useColorsLibrary(color);
  const fileColorsRefValue = useSelector(fileColorsRef);
  const fileColors = fileColorsRefValue;
  const colorLibraryName = getIn(colorsLibrary || fileColors, [color.refId, 'name']);
  const colorWithName = { ...color, name: colorLibraryName };
  const image = color.image;

  if (image) {
    const name = image.name || tr('media.image');
    return (
      <div className="attributes-image-as-color-row">
        <div className="attributes-color-row">
          <div
            className="bullet-wrapper"
            style={{ '--bullet-size': '16px' } as React.CSSProperties}
          >
            <ColorBullet color={color} mini />
          </div>
          <div className="format-wrapper">
            <div className="image-format">{tr('media.image.short')}</div>
          </div>
          <CopyButton
            data={copyData}
            className="color-row-copy-btn"
          >
            <div
              className={`color-info ${colorLibraryName ? 'two-line' : 'one-line'}`}
            >
              <div className="first-row">
                <span className="opacity-info">
                  {`${(color.opacity || 1) * 100}%`}
                </span>
              </div>
              {colorLibraryName && (
                <div className="second-row">
                  <div className="color-name-library" data-testid="color-library-name">
                    {colorLibraryName}
                  </div>
                </div>
              )}
            </div>
          </CopyButton>
          <div className="image-download">
            <div className="image-wrapper">
              <img
                className="resolved-image"
                src={cf.resolveFileMedia(image)}
                alt=""
              />
            </div>
            <Button
              variant="secondary"
              type="button"
              target="_blank"
              download={name}
              to={cf.resolveFileMedia(image)}
            >
              {tr('inspect.attributes.image.download')}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="attributes-color-row">
      <div
        className="bullet-wrapper"
        style={{ '--bullet-size': '16px' } as React.CSSProperties}
      >
        <ColorBullet color={color} mini />
      </div>
      {!onChangeFormat || color.gradient || image ? (
        <div className="global-attr-label">{property}</div>
      ) : (
        <div className="format-wrapper">
          <Select
            defaultValue={format}
            className="select-format-wrapper"
            options={[
              { value: 'hex', label: tr('inspect.attributes.color.hex') },
              { value: 'rgba', label: tr('inspect.attributes.color.rgba') },
              { value: 'hsla', label: tr('inspect.attributes.color.hsla') }
            ]}
            onChange={onChangeFormat}
          />
        </div>
      )}
      {color.gradient && (
        <div className="format-info">rgba</div>
      )}
      <CopyButton
        data={copyData}
        aria-label={tr('labels.copy-color')}
        className={`color-row-copy-btn ${!colorLibraryName ? 'one-line' : 'two-line'}`}
      >
        <div className="first-row">
          <div className="name-opacity">
            <span className={`color-value-wrapper ${color.gradient ? 'gradient-name' : ''}`}>
              {color.gradient ? (
                <ColorName color={color} size={90} />
              ) : (
                (() => {
                  switch (format) {
                    case 'hex':
                      return <ColorName color={color} />;
                    case 'rgba': {
                      const [r, g, b, a] = colorTypes.hexToRgba(color.color, color.opacity);
                      return <>{colorTypes.formatRgba([r, g, b, a])}</>;
                    }
                    case 'hsla': {
                      const [h, s, l, a] = colorTypes.hexToHsla(color.color, color.opacity);
                      return <>{colorTypes.formatHsla([h, s, l, a])}</>;
                    }
                    default:
                      return <ColorName color={color} />;
                  }
                })()
              )}
            </span>
            {!color.gradient && format === 'hex' && (
              <span className="opacity-info">
                {fmt.formatNumber((color.opacity || 1) * 100)}%
              </span>
            )}
          </div>
        </div>
        {colorLibraryName && (
          <div className="second-row">
            <div className="color-name-library" data-testid="color-library-name">
              {colorLibraryName}
            </div>
          </div>
        )}
      </CopyButton>
    </div>
  );
}

interface ColorNameProps {
  color: any;
  size?: number;
}

function ColorName({ color, size }: ColorNameProps) {
  // Placeholder - actual implementation would use color-bullet's color-name
  return <span>{color.name || color.color}</span>;
}
