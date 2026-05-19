// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as stl from 'app/main/style';
import * as dm from 'app/common/data/macros';
import * as ctob from 'app/common/types/tokens-lib';
import * as modal from 'app/main/data/modal';
import * as refs from 'app/main/refs';
import { IconButton } from 'app/main/ui/ds/buttons/icon-button';
import { Icon } from 'app/main/ui/ds/foundations/assets/icon';
import { FormContainer } from 'app/main/ui/workspace/tokens/management/forms/form_container';
import * as i18n from 'app/util/i18n';
import { derived } from 'okulary.core';
import React, { useMemo, useState } from 'react';

const { tr } = i18n;

interface TokenUpdateCreateModalProps {
  x?: number;
  y?: number;
  position?: 'left' | 'right';
  token?: any;
  tokenType: string;
  action: string;
  selectedTokenSetId?: string;
}

// Calculate position style for modal
const calculatePosition = (
  vport: { height: number },
  position: 'left' | 'right',
  x: number | undefined,
  y: number | undefined,
  tokenType: string
) => {
  // TODO: Revisit these hardcoded values
  const modalHeight =
    tokenType === 'color'
      ? 500
      : tokenType === 'typography'
      ? 660
      : tokenType === 'shadow'
      ? 660
      : 400;

  // Checks for overflow outside the viewport height
  const maxY = vport.height - modalHeight;
  const overflowFix = Math.max(0, y! + 50 + modalHeight - vport.height);
  const bottomOffset = '1rem';
  const topOffset = `${y! - 70}px`;
  const maxHeightTop = `calc(100vh - ${topOffset}`;
  const maxHeightBottom = `calc(100vh - ${bottomOffset})`;
  const xPos = 325;
  const rulers = refs.rulers;
  const leftOffset = rulers ? 80 : 58;
  const leftPosition = `${x! - xPos}px`;

  if (x == null || y == null) {
    return { left: 'auto', right: '16rem', top: '4rem' };
  }

  if (position === 'left') {
    if (y! > maxY) {
      return {
        left: leftPosition,
        bottom: bottomOffset,
        maxHeight: maxHeightBottom,
      };
    }
    return {
      left: leftPosition,
      maxHeight: maxHeightTop,
      top: `${y! - 50 - overflowFix}px`,
    };
  }

  // Right position
  if (y! > maxY) {
    return {
      left: `${x! + leftOffset}px`,
      bottom: bottomOffset,
      maxHeight: maxHeightBottom,
    };
  }
  return {
    left: `${x! + leftOffset}px`,
    top: `${y! - 70 - overflowFix}px`,
    maxHeight: maxHeightTop,
  };
};

const useViewportPositionStyle = (
  x: number | undefined,
  y: number | undefined,
  position: 'left' | 'right' | undefined,
  tokenType: string
) => {
  const vport = derived<any>(refs.workspaceLocal, (local) => local.vport);

  return useMemo(() => {
    if (!vport) return {};
    return calculatePosition(vport, position || 'right', x, y, tokenType);
  }, [vport, position, x, y, tokenType]);
};

// Token Update Create Modal Component
export const TokenUpdateCreateModal: React.FC<TokenUpdateCreateModalProps> = ({
  x,
  y,
  position,
  token,
  tokenType,
  action,
  selectedTokenSetId,
}) => {
  const wrapperStyle = useViewportPositionStyle(x, y, position, tokenType);
  const [modalSizeLarge, setModalSizeLarge] = useState(
    tokenType === 'typography' || tokenType === 'color' || tokenType === 'shadow'
  );

  const closeModal = () => {
    modal.hide();
  };

  const updateModalSize = (visible: boolean) => {
    setModalSizeLarge(visible);
  };

  return (
    <div
      className={stl.css('token-modal-wrapper', modalSizeLarge ? 'token-modal-large' : '')}
      style={wrapperStyle}
      data-testid="token-update-create-modal"
    >
      <IconButton
        onClick={closeModal}
        className={stl.css('close-btn')}
        icon={Icon.iconId('close')}
        variant="action"
        aria-label={tr('labels.close')}
      />
      <FormContainer
        isCreate={!ctob.token(token)}
        token={token}
        action={action}
        selectedTokenSetId={selectedTokenSetId}
        tokenType={tokenType}
        onDisplayColorpicker={updateModalSize}
      />
    </div>
  );
};

// Boolean Modal
export const BooleanModal: React.FC<any> = (properties) => (
  <TokenUpdateCreateModal {...properties} />
);
modal.register('tokens/boolean', BooleanModal);

// Border Radius Modal
export const BorderRadiusModal: React.FC<any> = (properties) => (
  <TokenUpdateCreateModal {...properties} />
);
modal.register('tokens/border-radius', BorderRadiusModal);

// Color Modal
export const ColorModal: React.FC<any> = (properties) => (
  <TokenUpdateCreateModal {...properties} />
);
modal.register('tokens/color', ColorModal);

// Stroke Width Modal
export const StrokeWidthModal: React.FC<any> = (properties) => (
  <TokenUpdateCreateModal {...properties} />
);
modal.register('tokens/stroke-width', StrokeWidthModal);

// Box Shadow Modal
export const BoxShadowModal: React.FC<any> = (properties) => (
  <TokenUpdateCreateModal {...properties} />
);
modal.register('tokens/shadow', BoxShadowModal);

// Sizing Modal
export const SizingModal: React.FC<any> = (properties) => (
  <TokenUpdateCreateModal {...properties} />
);
modal.register('tokens/sizing', SizingModal);

// Dimensions Modal
export const DimensionsModal: React.FC<any> = (properties) => (
  <TokenUpdateCreateModal {...properties} />
);
modal.register('tokens/dimensions', DimensionsModal);

// Number Modal
export const NumberModal: React.FC<any> = (properties) => (
  <TokenUpdateCreateModal {...properties} />
);
modal.register('tokens/number', NumberModal);

// Opacity Modal
export const OpacityModal: React.FC<any> = (properties) => (
  <TokenUpdateCreateModal {...properties} />
);
modal.register('tokens/opacity', OpacityModal);

// Other Modal
export const OtherModal: React.FC<any> = (properties) => (
  <TokenUpdateCreateModal {...properties} />
);
modal.register('tokens/other', OtherModal);

// Rotation Modal
export const RotationModal: React.FC<any> = (properties) => (
  <TokenUpdateCreateModal {...properties} />
);
modal.register('tokens/rotation', RotationModal);

// Spacing Modal
export const SpacingModal: React.FC<any> = (properties) => (
  <TokenUpdateCreateModal {...properties} />
);
modal.register('tokens/spacing', SpacingModal);

// String Modal
export const StringModal: React.FC<any> = (properties) => (
  <TokenUpdateCreateModal {...properties} />
);
modal.register('tokens/string', StringModal);

// Typography Modal
export const TypographyModal: React.FC<any> = (properties) => (
  <TokenUpdateCreateModal {...properties} />
);
modal.register('tokens/typography', TypographyModal);

// Font Size Modal
export const FontSizeModal: React.FC<any> = (properties) => (
  <TokenUpdateCreateModal {...properties} />
);
modal.register('tokens/font-size', FontSizeModal);

// Letter Spacing Modal
export const LetterSpacingModal: React.FC<any> = (properties) => (
  <TokenUpdateCreateModal {...properties} />
);
modal.register('tokens/letter-spacing', LetterSpacingModal);

// Font Family Modal
export const FontFamilyModal: React.FC<any> = (properties) => (
  <TokenUpdateCreateModal {...properties} />
);
modal.register('tokens/font-family', FontFamilyModal);

// Text Case Modal
export const TextCaseModal: React.FC<any> = (properties) => (
  <TokenUpdateCreateModal {...properties} />
);
modal.register('tokens/text-case', TextCaseModal);

// Text Decoration Modal
export const TextDecorationModal: React.FC<any> = (properties) => (
  <TokenUpdateCreateModal {...properties} />
);
modal.register('tokens/text-decoration', TextDecorationModal);

// Font Weight Modal
export const FontWeightModal: React.FC<any> = (properties) => (
  <TokenUpdateCreateModal {...properties} />
);
modal.register('tokens/font-weight', FontWeightModal);
