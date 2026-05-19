// This Source Code Form is subject to terms of Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { css, cssCase } from '../../../style';
// import { dm } from '../../../../common/data';
// import { sm } from '../../../../common/schema';
// import { ct } from '../../../../common/types/color';
// import { cfg } from '../../../config';
// import { tooltip } from '../tooltip';
// import { uc } from '../../../../util/color';
// import { tr } from '../../../../util/i18n';
// import { str } from 'cuerdas.core';

/**
 * Color item type
 */
export type ColorItem =
  | { name: string; path?: string; color: { color: string; opacity?: number } }
  | { name: string; path?: string; gradient: { type: string } }
  | { name: string; path?: string; image: string };

/**
 * Gradient type
 */
export interface Gradient {
  type: string;
  stops?: { color: string; offset: number }[];
}

/**
 * Color type
 */
export interface Color {
  color: string;
  opacity?: number;
}

/**
 * Swatch component props
 */
export interface SwatchProps {
  background: ColorItem;
  class?: string;
  size?: 'small' | 'medium' | 'large';
  active?: boolean;
  hasErrors?: boolean;
  showTooltip?: boolean;
  tooltipContent?: React.ReactNode;
  onClick?: () => void;
}

/**
 * Swatch component - Color picker swatch
 */
export function Swatch({
  background,
  class: className,
  size = 'medium',
  active = false,
  hasErrors = false,
  showTooltip = false,
  tooltipContent,
  onClick
}: SwatchProps & { children?: React.ReactNode }) {
  // NOTE: this code is only relevant for storybook, because
  // storybook is unable to pass in a comfortable way a complex
  // object; "interactive" way of storybook only allows
  // plain object. So for this case we accept them and
  // automatically convert them to clojure map (which is exactly
  // what this component expects). On normal usage of this
  // component this code should be always fallback to else case.

  const isBackgroundObject = typeof background === 'object' && background !== null;

  const backgroundData = isBackgroundObject ? background as ColorItem : null;

  const readOnly = !onClick;

  const id = backgroundData?.path;

  const elementType = readOnly ? 'div' : 'button';

  const buttonType = !readOnly ? 'button' : undefined;

  const elementId = React.useId();

  const elementRef = React.useRef<HTMLElement>(null);

  const handleClick = React.useCallback(
    (event: React.MouseEvent) => {
      if (onClick) {
        onClick(event);
        if (isBackgroundObject && (typeof background === 'object')) {
          // Trigger click on background
          // (^function on-click background event))
        }
      }
    },
    [background, onClick]
  );

  const colorTitle = React.useCallback((item: ColorItem | null) => {
    if (!item) return '';
    if ('color' in item) {
      const color = item.color;
      const hasOpacity = color.opacity !== undefined && color.opacity !== 1;
      return `${color.color}${hasOpacity ? ` / ${color.opacity}` : ''}`;
    }
    if ('gradient' in item) {
      return item.gradient.type;
    }
    if ('image' in item) {
      return 'Image';
    }
    return '';
  }, []);

  const elementClass = `${className || ''} swatch ${size === 'small' ? 'small' : ''} ${size === 'medium' ? 'medium' : ''} ${size === 'large' ? 'large' : ''} ${active ? 'active' : ''} ${elementType === 'button' ? 'interactive' : ''} ${!readOnly ? 'rounded' : 'square'}`;

  const hasOpacity = isBackgroundObject && 'color' in backgroundData && backgroundData.color.opacity !== undefined && backgroundData.color.opacity < 1;

  const props: React.HTMLAttributes<HTMLElement> = {
    className: elementClass,
    onClick: handleClick,
    type: buttonType,
    'aria-labelledby': elementId,
    ref: elementRef
  };

  const gradientType = 'gradient' in backgroundData ? backgroundData.gradient.type : undefined;
  const gradientStops = 'gradient' in backgroundData ? backgroundData.gradient.stops : undefined;

  const imageData = 'image' in backgroundData ? backgroundData.image : undefined;

  const childrenContent = isBackgroundObject && !readOnly ? (
    <>
      {gradientType && (
        <div className="swatch-gradient" style={{ backgroundImage: `linear-gradient(90deg, lightgray 0% 25%, white 0% 50%)` }} />
      )}
      {imageData && (
        <div className="swatch-image" style={{ backgroundImage: `url(${imageData})` }} />
      )}
      {hasErrors && (
        <div className="swatch-error" />
      )}
      {!(hasErrors || gradientType || imageData) && (
        <div className="swatch-opacity">
          <div className="swatch-opacity-side">
            <div
              className={`swatch-opacity-side-solid ${!hasOpacity ? 'swatch-opacity-side-transparency' : 'swatch-opacity-side-solid-color'}`}
              style={{ '--solid-color-overlay': `var(--color-overlay-${String(id)})` }}
            />
          </div>
        </div>
      )}
    </>
  ) : null;

  const tooltipTrigger = showTooltip ? (
    <Tooltip
      content={tooltipContent ? tooltipContent : colorTitle(backgroundData)}
      triggerRef={elementRef}
      id={elementId}
    >
      {childrenContent}
    </Tooltip>
  ) : childrenContent;

  return (
    <>
      {elementType === 'button' ? (
        <button {...props}>{tooltipTrigger}</button>
      ) : (
        <div {...props}>{tooltipTrigger}</div>
      )}
      {showTooltip && (
        <Tooltip
          content={tooltipContent ? tooltipContent : colorTitle(backgroundData)}
          triggerRef={elementRef}
          id={elementId}
        >
          {childrenContent}
        </Tooltip>
      )}
    </>
  );
}
