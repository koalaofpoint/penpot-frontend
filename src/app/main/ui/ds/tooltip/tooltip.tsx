// This Source Code Form is subject to terms of Mozilla Public
// License, v. 2.0. If a copy of MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { stl } from '../../../style';
// import { hooks } from '../hooks';
// import { dom } from '../../../../util/dom';
// import { kbd } from '../../../../util/keyboard';
// import { timers } from '../../../../util/timers';

const OVERLAY_OFFSET = 32;

let activeTooltip: { id: string; trigger: HTMLElement } | null = null;

/**
 * Tooltip placement type
 */
export type TooltipPlacement =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-right'
  | 'bottom-right'
  | 'bottom-left'
  | 'top-left';

/**
 * Bounding rect interface
 */
export interface BoundingRect {
  top: number;
  left: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
}

/**
 * Window size interface
 */
export interface WindowSize {
  width: number;
  height: number;
}

/**
 * Get fallback order for placement
 */
function getFallbackOrder(placement: TooltipPlacement): TooltipPlacement[] {
  switch (placement) {
    case 'top':
      return ['top', 'right', 'bottom', 'left', 'top-right', 'bottom-right', 'bottom-left', 'top-left'];
    case 'bottom':
      return ['bottom', 'left', 'top', 'right', 'bottom-right', 'bottom-left', 'top-left', 'top-right'];
    case 'left':
      return ['left', 'top', 'right', 'bottom', 'top-left', 'top-right', 'bottom-right', 'bottom-left'];
    case 'right':
      return ['right', 'bottom', 'left', 'top', 'bottom-left', 'top-left', 'top-right', 'bottom-right'];
    case 'top-right':
      return ['top-right', 'right', 'bottom', 'left', 'top', 'bottom-right', 'bottom-left', 'top-left'];
    case 'bottom-right':
      return ['bottom-right', 'bottom', 'left', 'top', 'right', 'bottom-left', 'top-left', 'top-right'];
    case 'bottom-left':
      return ['bottom-left', 'left', 'top', 'right', 'bottom', 'top-left', 'top-right', 'bottom-right'];
    case 'top-left':
      return ['top-left', 'top', 'right', 'bottom', 'left', 'bottom-left', 'top-right', 'bottom-right'];
    default:
      return ['top', 'right', 'bottom', 'left'];
  }
}

/**
 * Calculate placement bounding rect
 */
function calculatePlacementBoundingRect(
  placement: TooltipPlacement,
  tooltipBrect: BoundingRect,
  originBrect: BoundingRect,
  offset = 2
): BoundingRect {
  const {
    top: triggerTop,
    left: triggerLeft,
    right: triggerRight,
    bottom: triggerBottom,
    width: triggerWidth,
    height: triggerHeight
  } = originBrect;

  const { width: tooltipWidth, height: tooltipHeight } = tooltipBrect;

  switch (placement) {
    case 'bottom':
      return {
        top: triggerBottom + offset,
        left: triggerLeft + triggerWidth / 2 - tooltipWidth / 2,
        right: triggerLeft + triggerWidth / 2 + tooltipWidth / 2,
        bottom: triggerBottom + offset - tooltipHeight,
        width: tooltipWidth,
        height: tooltipHeight
      };

    case 'left':
      return {
        top: triggerTop + triggerHeight / 2 - tooltipHeight / 2,
        left: triggerLeft - tooltipWidth,
        right: triggerLeft - tooltipWidth + tooltipWidth,
        bottom: triggerTop + triggerHeight / 2 - tooltipHeight / 2 + tooltipHeight,
        width: tooltipWidth,
        height: tooltipHeight
      };

    case 'right':
      return {
        top: triggerTop + triggerHeight / 2 - tooltipHeight / 2,
        left: triggerRight + offset,
        right: triggerRight + offset + tooltipWidth,
        bottom: triggerTop + triggerHeight / 2 - tooltipHeight / 2 + tooltipHeight,
        width: tooltipWidth,
        height: tooltipHeight
      };

    case 'bottom-right':
      return {
        top: triggerBottom + offset,
        left: triggerRight - OVERLAY_OFFSET,
        right: triggerRight - OVERLAY_OFFSET + tooltipWidth,
        bottom: triggerBottom + offset - tooltipHeight,
        width: tooltipWidth,
        height: tooltipHeight
      };

    case 'bottom-left':
      return {
        top: triggerBottom + offset,
        left: triggerLeft - tooltipWidth + OVERLAY_OFFSET,
        right: triggerLeft + OVERLAY_OFFSET,
        bottom: triggerBottom + offset - tooltipHeight,
        width: tooltipWidth,
        height: tooltipHeight
      };

    case 'top-right':
      return {
        top: triggerTop - offset - tooltipHeight,
        left: triggerRight - OVERLAY_OFFSET,
        right: triggerRight - OVERLAY_OFFSET + tooltipWidth,
        bottom: triggerTop - offset,
        width: tooltipWidth,
        height: tooltipHeight
      };

    case 'top-left':
      return {
        top: triggerTop - offset - tooltipHeight,
        left: triggerLeft - tooltipWidth + OVERLAY_OFFSET,
        right: triggerLeft + OVERLAY_OFFSET,
        bottom: triggerTop - offset,
        width: tooltipWidth,
        height: tooltipHeight
      };

    default: // 'top'
      return {
        top: triggerTop - offset - tooltipHeight,
        left: triggerLeft + triggerWidth / 2 - tooltipWidth / 2,
        right: triggerLeft + triggerWidth / 2 - tooltipWidth / 2 + tooltipWidth,
        bottom: triggerTop - offset,
        width: tooltipWidth,
        height: tooltipHeight
      };
  }
}

/**
 * Find matching placement
 */
function findMatchingPlacement(
  placement: TooltipPlacement,
  tooltipBrect: BoundingRect,
  originBrect: BoundingRect,
  windowSize: WindowSize,
  offset = 2
): [TooltipPlacement, BoundingRect] | null {
  const placements = getFallbackOrder(placement);

  for (const p of placements) {
    const placementBrect = calculatePlacementBoundingRect(p, tooltipBrect, originBrect, offset);

    // TODO: Use dom.isBoundingRectOutside? function
    // if (!dom.isBoundingRectOutside(placementBrect, windowSize)) {
    //   return [p, placementBrect];
    // }
    const isOutside =
      placementBrect.top < 0 ||
      placementBrect.left < 0 ||
      placementBrect.bottom > windowSize.height ||
      placementBrect.right > windowSize.width;

    if (!isOutside) {
      return [p, placementBrect];
    }
  }

  return null;
}

/**
 * Tooltip component props
 */
export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  class?: string;
  id?: string;
  content: React.ReactNode | (() => React.ReactNode);
  triggerRef?: React.RefObject<HTMLElement>;
  placement?: TooltipPlacement;
  offset?: number;
  delay?: number;
  ariaLabel?: string;
}

/**
 * Tooltip component
 */
export function Tooltip({
  class: className,
  id,
  content,
  triggerRef,
  placement = 'top',
  offset,
  delay = 300,
  ariaLabel,
  children,
  ...props
}: TooltipProps & { children?: React.ReactNode }) {
  const internalId = React.useId();
  const finalId = id || internalId;

  const internalTriggerRef = React.useRef<HTMLElement>(null);
  const finalTriggerRef = (triggerRef || internalTriggerRef) as React.RefObject<HTMLElement>;

  const tooltipRef = React.useRef<HTMLElement>(null);
  const [visible, setVisible] = React.useState(false);
  const [currentPlacement, setCurrentPlacement] = React.useState<TooltipPlacement>(placement);

  const scheduleRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  // TODO: Use hooks.usePortalContainer
  // const container = hooks.usePortalContainer('tooltip');

  const show = React.useCallback(() => {
    const triggerEl = finalTriggerRef.current;
    if (scheduleRef.current) {
      clearTimeout(scheduleRef.current);
    }

    scheduleRef.current = setTimeout(() => {
      if (activeTooltip && activeTooltip.id !== finalId) {
        // TODO: Hide previous tooltip using DOM manipulation
        activeTooltip = null;
      }

      if (triggerEl) {
        activeTooltip = { id: finalId, trigger: triggerEl };
        setVisible(true);
      }
    }, delay);
  }, [finalId, delay]);

  const hide = React.useCallback(() => {
    if (scheduleRef.current) {
      clearTimeout(scheduleRef.current);
    }

    setVisible(false);

    if (activeTooltip && activeTooltip.id === finalId) {
      activeTooltip = null;
    }
  }, [finalId]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      // TODO: Use kbd.esc? utility
      if (event.key === 'Escape') {
        hide();
      }
    },
    [hide]
  );

  const tooltipClass = `tooltip-content-wrapper ${currentPlacement === 'top' ? 'tooltip-top' : ''} ${currentPlacement === 'bottom' ? 'tooltip-bottom' : ''} ${currentPlacement === 'left' ? 'tooltip-left' : ''} ${currentPlacement === 'right' ? 'tooltip-right' : ''} ${currentPlacement === 'top-right' ? 'tooltip-top-right' : ''} ${currentPlacement === 'bottom-right' ? 'tooltip-bottom-right' : ''} ${currentPlacement === 'bottom-left' ? 'tooltip-bottom-left' : ''} ${currentPlacement === 'top-left' ? 'tooltip-top-left' : ''}`;

  const contentElement = typeof content === 'function' ? content() : content;

  React.useEffect(() => {
    if (visible) {
      const triggerEl = finalTriggerRef.current;
      const tooltipEl = tooltipRef.current;

      if (triggerEl && tooltipEl) {
        requestAnimationFrame(() => {
          // TODO: Use dom.getBoundingRect and dom.getWindowSize
          const originBrect: BoundingRect = triggerEl.getBoundingClientRect();
          const tooltipBrect: BoundingRect = tooltipEl.getBoundingClientRect();
          const windowSize: WindowSize = { width: window.innerWidth, height: window.innerHeight };

          const result = findMatchingPlacement(placement, tooltipBrect, originBrect, windowSize, offset);

          if (result) {
            const [newPlacement, placementRect] = result;

            // TODO: Use dom.setCssProperty!
            tooltipEl.style.setProperty('inset-block-start', `${placementRect.top}px`);
            tooltipEl.style.setProperty('inset-inline-start', `${placementRect.left}px`);

            if (newPlacement !== currentPlacement) {
              setCurrentPlacement(newPlacement);
            }
          }
        });
      }
    }
  }, [visible, placement, offset, currentPlacement]);

  return (
    <>
      <div
        {...props}
        className={`${className || ''} tooltip-trigger`}
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
        ref={internalTriggerRef}
        onKeyDown={handleKeyDown}
        id={finalId}
        aria-label={typeof content === 'string' ? content : ariaLabel}
      >
        {children}
      </div>

      {visible && (
        <div className="tooltip" role="tooltip" id={`tooltip-${finalId}`} ref={tooltipRef}>
          <div className={tooltipClass}>
            <div className="tooltip-content">{contentElement}</div>
            <div className="tooltip-arrow" id="tooltip-arrow" />
          </div>
        </div>
      )}
    </>
  );
}
