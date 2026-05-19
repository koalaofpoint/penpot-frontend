// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as stl from 'app/main/style';
import * as cpn from 'app/common/path-names';
import * as ctob from 'app/common/types/tokens-lib';
import * as dwtl from 'app/main/data/workspace/tokens/library-edit';
import * as refs from 'app/main/refs';
import { emit } from 'app/main/store';
import { LayerButton } from 'app/main/ui/ds/layers/layer-button';
import { TokenPill } from 'app/main/ui/workspace/tokens/management/token-pill';
import React, { useCallback, useMemo } from 'react';

interface FolderNodeProps {
  node: any;
  type: string;
  unfoldedTokenPaths: Set<string>;
  selectedShapes: any[];
  isSelectedInsideLayout?: boolean;
  activeThemeTokens?: any;
  selectedTokenSetId?: string;
  tokensLib?: any;
  onTokenPillClick?: (event: React.MouseEvent, token: any) => void;
  onPillContextMenu?: (event: React.MouseEvent, token: any) => void;
  onNodeContextMenu?: (event: React.MouseEvent, node: any) => void;
}

const FolderNode: React.FC<FolderNodeProps> = ({
  node,
  type,
  unfoldedTokenPaths,
  selectedShapes,
  isSelectedInsideLayout,
  activeThemeTokens,
  selectedTokenSetId,
  tokensLib,
  onTokenPillClick,
  onPillContextMenu,
  onNodeContextMenu,
}) => {
  const fullPath = `${type}.${node.path}`;
  const isFolderExpanded = unfoldedTokenPaths?.has(fullPath);

  const swapFolderExpanded = useCallback(() => {
    const path = `${type}.${node.path}`;
    emit(dwtl.toggleTokenPath(path));
  }, [type, node.path]);

  const nodeContextMenuPrep = useCallback(
    (event: React.MouseEvent) => {
      if (onNodeContextMenu) {
        onNodeContextMenu(event, node);
      }
    },
    [onNodeContextMenu, node]
  );

  return (
    <li className={stl.css('folder-node')}>
      <LayerButton
        label={node.name}
        expanded={isFolderExpanded}
        aria-expanded={isFolderExpanded}
        aria-controls={`folder-children-${node.path}`}
        isExpandable={!node.leaf}
        onToggleExpand={swapFolderExpanded}
        onContextMenu={nodeContextMenuPrep}
      />
      {isFolderExpanded && node.childrenFn && (
        <div
          className={stl.css('folder-children-wrapper')}
          id={`folder-children-${node.path}`}
        >
          {node.childrenFn().map((child: any) =>
            !child.leaf ? (
              <ul key={child.path} className={stl.css('node-parent')}>
                <FolderNode
                  type={type}
                  node={child}
                  unfoldedTokenPaths={unfoldedTokenPaths}
                  selectedShapes={selectedShapes}
                  isSelectedInsideLayout={isSelectedInsideLayout}
                  activeThemeTokens={activeThemeTokens}
                  onTokenPillClick={onTokenPillClick}
                  onPillContextMenu={onPillContextMenu}
                  onNodeContextMenu={onNodeContextMenu}
                  tokensLib={tokensLib}
                  selectedTokenSetId={selectedTokenSetId}
                />
              </ul>
            ) : (
              <TokenPill
                key={child.leaf.id}
                token={ctob.getToken(tokensLib, selectedTokenSetId, child.leaf.id)}
                selectedShapes={selectedShapes}
                isSelectedInsideLayout={isSelectedInsideLayout}
                activeThemeTokens={activeThemeTokens}
                onClick={onTokenPillClick}
                onContextMenu={onPillContextMenu}
              />
            )
          )}
        </div>
      )}
    </li>
  );
};

interface TokenTreeProps {
  tokens: any[];
  type: string;
  unfoldedTokenPaths: Set<string>;
  selectedShapes: any[];
  isSelectedInsideLayout?: boolean;
  activeThemeTokens?: any;
  selectedTokenSetId?: string;
  tokensLib?: any;
  onTokenPillClick?: (event: React.MouseEvent, token: any) => void;
  onPillContextMenu?: (event: React.MouseEvent, token: any) => void;
  onNodeContextMenu?: (event: React.MouseEvent, node: any) => void;
}

export const TokenTree: React.FC<TokenTreeProps> = ({
  tokens,
  type,
  unfoldedTokenPaths,
  selectedShapes,
  isSelectedInsideLayout,
  activeThemeTokens,
  selectedTokenSetId,
  tokensLib,
  onTokenPillClick,
  onPillContextMenu,
  onNodeContextMenu,
}) => {
  const separator = '.';
  const tree = useMemo(() => cpn.buildTreeRoot(tokens, separator), [tokens]);
  const permissions = refs.permissions;
  const canEdit = permissions?.canEdit;

  const handleNodeContextMenu = useCallback(
    (event: React.MouseEvent, node: any) => {
      if (canEdit && onNodeContextMenu) {
        onNodeContextMenu(event, node);
      }
    },
    [canEdit, onNodeContextMenu]
  );

  return (
    <div className={stl.css('token-tree-wrapper')}>
      {tree.map((node: any) =>
        node.leaf ? (
          <TokenPill
            key={node.leaf.id}
            token={ctob.getToken(tokensLib, selectedTokenSetId, node.leaf.id)}
            selectedShapes={selectedShapes}
            isSelectedInsideLayout={isSelectedInsideLayout}
            activeThemeTokens={activeThemeTokens}
            onClick={onTokenPillClick}
            onContextMenu={onPillContextMenu}
          />
        ) : (
          <ul key={node.path} className={stl.css('node-parent')}>
            <FolderNode
              type={type}
              node={node}
              unfoldedTokenPaths={unfoldedTokenPaths}
              selectedShapes={selectedShapes}
              isSelectedInsideLayout={isSelectedInsideLayout}
              activeThemeTokens={activeThemeTokens}
              onTokenPillClick={onTokenPillClick}
              onNodeContextMenu={handleNodeContextMenu}
              onPillContextMenu={onPillContextMenu}
              tokensLib={tokensLib}
              selectedTokenSetId={selectedTokenSetId}
            />
          </ul>
        )
      )}
    </div>
  );
};
