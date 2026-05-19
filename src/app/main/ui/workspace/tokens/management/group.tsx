// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain One at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as stl from 'app/main/style';
import * as d from 'app/common/data';
import * as dm from 'app/common/data/macros';
import * as ctob from 'app/common/types/tokens-lib';
import * as modal from 'app/main/data/modal';
import * as ntf from 'app/main/data/notifications';
import * as dwta from 'app/main/data/workspace/tokens/application';
import * as dwtl from 'app/main/data/workspace/tokens/library-edit';
import * as refs from 'app/main/refs';
import { emit } from 'app/main/store';
import { useContext } from 'app/main/ui/context';
import { IconButton } from 'app/main/ui/ds/buttons/icon-button';
import * as i from 'app/main/ui/ds/foundations/assets/icon';
import { LayerButton } from 'app/main/ui/ds/layers/layer-button';
import { TokenTree } from 'app/main/ui/workspace/tokens/management/token-tree';
import * as dom from 'app/util/dom';
import * as i18n from 'app/util/i18n';
import * as l from 'okulary.core';
import React, { useCallback, useMemo } from 'react';

const { tr } = i18n;

const refUnfoldedTokenPaths = l.derived(
  l.key('unfolded-token-paths'),
  refs.workspaceTokens
);

const tokenSectionIcon = (type: string) => {
  switch (type) {
    case 'border-radius':
      return i.cornerRadius;
    case 'color':
      return i.drop;
    case 'boolean':
      return i.booleanDifference;
    case 'font-family':
      return i.textFontFamily;
    case 'font-size':
      return i.textFontSize;
    case 'letter-spacing':
      return i.textLetterspacing;
    case 'text-case':
      return i.textMixed;
    case 'text-decoration':
      return i.textUnderlined;
    case 'font-weight':
      return i.textFontWeight;
    case 'typography':
      return i.textTypography;
    case 'opacity':
      return i.percentage;
    case 'number':
      return i.number;
    case 'rotation':
      return i.rotation;
    case 'spacing':
      return i.paddingExtended;
    case 'string':
      return i.textMixed;
    case 'stroke-width':
      return i.strokeSize;
    case 'dimensions':
      return i.expand;
    case 'sizing':
      return i.expand;
    case 'shadow':
      return i.dropShadow;
    default:
      return 'add';
  }
};

interface TokenGroupProps {
  type: string;
  tokens: any[];
  selectedShapes: any[];
  isSelectedInsideLayout?: boolean;
  activeThemeTokens?: any;
  selectedTokenSetId?: string;
  tokensLib?: any;
  selectedIds?: any[];
}

export const TokenGroup: React.FC<TokenGroupProps> = ({
  type,
  tokens,
  selectedShapes,
  isSelectedInsideLayout = false,
  activeThemeTokens,
  selectedTokenSetId,
  tokensLib,
  selectedIds,
}) => {
  const { modal: modalConfig, title } = dwta.tokenProperties[type] || {};

  const unfoldedTokenPaths = refs.workspaceTokens?.unfoldedTokenPaths;
  const isTypeUnfolded = unfoldedTokenPaths?.has(type);

  const editingRef = refs.workspaceEditorState;
  const edition = refs.selectedEdition;
  const objects = refs.workspacePageObjects;

  const notEditing =
    !editingRef ||
    (editingRef.length === 0 &&
      !(edition && objects?.[edition]?.type === 'text'));

  const canEdit = useContext('can-edit?');

  const sortedTokens = useMemo(() => {
    return [...(tokens || [])].sort((a, b) => a.name.localeCompare(b.name));
  }, [tokens]);

  const expandable = sortedTokens.length > 0;

  const onPillContextMenu = useCallback(
    (event: React.MouseEvent, token: any) => {
      dom.preventDefault(event);
      emit(
        dwtl.assignTokenContextMenu({
          type: 'token',
          position: dom.getClientPosition(event),
          errors: token.errors,
          tokenId: token.id,
        })
      );
    },
    []
  );

  const onNodeContextMenu = useCallback(
    (event: React.MouseEvent, node: any) => {
      dom.preventDefault(event);
      emit(
        dwtl.assignTokenNodeContextMenu({
          node,
          type,
          position: dom.getClientPosition(event),
        })
      );
    },
    [type]
  );

  const onToggleOpenClick = useCallback(() => {
    if (expandable) {
      emit(dwtl.toggleTokenPath(type));
    }
  }, [expandable, type]);

  const onPopoverOpenClick = useCallback(
    (event: React.MouseEvent) => {
      dom.stopPropagation(event);
      const pos = dom.getClientPosition(event);
      emit(
        modal.show(modalConfig?.key, {
          x: pos.x,
          y: pos.y,
          position: 'right',
          fields: modalConfig?.fields,
          title,
          action: 'create',
          tokenType: type,
        })
      );
    },
    [modalConfig, title, type]
  );

  const onTokenPillClick = useCallback(
    (event: React.MouseEvent, token: any) => {
      const resolvedToken = tokensLib
        ? ctob.getToken(tokensLib, selectedTokenSetId, token.id)
        : token;
      dom.stopPropagation(event);

      if (resolvedToken?.type !== 'number') {
        if (notEditing && selectedShapes?.length > 0) {
          emit(
            dwta.toggleToken({
              token: resolvedToken,
              shapeIds: selectedIds,
            })
          );
        } else if (selectedShapes?.length > 0) {
          emit(
            ntf.show({
              content: tr('workspace.tokens.error-text-edition'),
              type: 'toast',
              level: 'warning',
              timeout: 3000,
            })
          );
        }
      }
    },
    [notEditing, selectedShapes, selectedIds, tokensLib, selectedTokenSetId]
  );

  return (
    <div
      className={stl.css('token-section-wrapper')}
      data-testid={`section-${type}`}
    >
      <LayerButton
        label={title}
        expanded={isTypeUnfolded}
        description={expandable ? `${sortedTokens.length}` : undefined}
        isExpandable={expandable}
        aria-expanded={isTypeUnfolded}
        aria-controls={`token-tree-${type}`}
        onToggleExpand={onToggleOpenClick}
        icon={tokenSectionIcon(type)}
      >
        {canEdit && (
          <IconButton
            id={`add-token-button-${title}`}
            icon="add"
            aria-label={tr('workspace.tokens.add-token', title)}
            variant="ghost"
            onClick={onPopoverOpenClick}
            className={stl.css('token-section-icon')}
          />
        )}
      </LayerButton>
      {isTypeUnfolded && (
        <TokenTree
          tokens={sortedTokens}
          type={type}
          id={`token-tree-${type}`}
          tokensLib={tokensLib}
          unfoldedTokenPaths={unfoldedTokenPaths}
          selectedShapes={selectedShapes}
          activeThemeTokens={activeThemeTokens}
          selectedTokenSetId={selectedTokenSetId}
          isSelectedInsideLayout={isSelectedInsideLayout}
          onTokenPillClick={onTokenPillClick}
          onPillContextMenu={onPillContextMenu}
          onNodeContextMenu={onNodeContextMenu}
        />
      )}
    </div>
  );
};
