// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as stl from 'app/main/style';
import * as d from 'app/common/data';
import * as cfo from 'app/common/files/tokens';
import * as cpn from 'app/common/path-names';
import * as ctt from 'app/common/types/token';
import * as cf from 'app/config';
import * as dwta from 'app/main/data/workspace/tokens/application';
import * as dwtc from 'app/main/data/workspace/tokens/color';
import * as dwtf from 'app/main/data/workspace/tokens/format';
import * as refs from 'app/main/refs';
import { Icon } from 'app/main/ui/ds/foundations/assets/icon';
import { TokenStatusIcon } from 'app/main/ui/ds/foundations/utilities/token/token_status';
import { Swatch } from 'app/main/ui/ds/utilities/swatch';
import * as dom from 'app/util/dom';
import * as i18n from 'app/util/i18n';
import * as str from 'cuerdas.core';
import React, { useCallback, useMemo } from 'react';

const { tr } = i18n;

// Translation dictionaries
const attributeDictionary: Record<string, string> = {
  rotation: 'Rotation',
  opacity: 'Opacity',
  'stroke-width': 'Stroke Width',
  // Spacing
  p1: 'Top',
  p2: 'Right',
  p3: 'Bottom',
  p4: 'Left',
  'column-gap': 'Column Gap',
  'row-gap': 'Row Gap',
  // Sizing
  width: 'Width',
  height: 'Height',
  'layout-item-min-w': 'Min Width',
  'layout-item-min-h': 'Min Height',
  'layout-item-max-w': 'Max Width',
  'layout-item-max-h': 'Max Height',
  // Border Radius
  r1: 'Top Left',
  r2: 'Top Right',
  r4: 'Bottom Left',
  r3: 'Bottom Right',
  // Dimensions
  x: 'X',
  y: 'Y',
  // Color
  fill: 'Fill',
  'stroke-color': 'Stroke Color',
};

const dimensionsDictionary: Record<string, string | symbol> = {
  'stroke-width': 'stroke-width',
  p1: 'spacing',
  p2: 'spacing',
  p3: 'spacing',
  p4: 'spacing',
  'column-gap': 'spacing',
  'row-gap': 'spacing',
  width: 'sizing',
  height: 'sizing',
  'layout-item-min-w': 'sizing',
  'layout-item-min-h': 'sizing',
  'layout-item-max-w': 'sizing',
  'layout-item-max-h': 'sizing',
  r1: 'border-radius',
  r2: 'border-radius',
  r4: 'border-radius',
  r3: 'border-radius',
  x: 'x',
  y: 'y',
};

// Helper functions
const partiallyAppliedAttr = (
  appTokenKeys: string[],
  isApplied: boolean,
  tokenProps: { attributes?: string[]; allAttributes?: string[] }
) => {
  const allAttr = tokenProps.allAttributes || tokenProps.attributes || [];
  const filteredKeys = allAttr.filter((key) => appTokenKeys.includes(key));

  if (isApplied && filteredKeys.length > 0) {
    return filteredKeys.map((k) => attributeDictionary[k] || k).join(', ');
  }
  return '';
};

const translateAndFormat = (groupedValues: [string, string[]][]) => {
  return groupedValues
    .map(([category, values]) => {
      const catDict = dwtf.categoryDictionary?.(category) || category;
      if (category === 'x' || category === 'y') {
        return `- ${catDict}`;
      }
      return `- ${catDict}: ${values.map((v) => attributeDictionary[v] || v).join(', ')}.`;
    })
    .join('\n');
};

// Generate tooltip for token
const generateTooltip = (
  isViewer: boolean,
  shape: any,
  themeToken: any,
  token: any,
  halfApplied: boolean,
  noValidValue: boolean,
  refNotInActiveSet: boolean
) => {
  const { name, type, resolvedValue, value } = token;
  const resolvedValueTheme = themeToken?.resolvedValue;
  const resolved = resolvedValueTheme || resolvedValue;
  const tokenProps = dwta.getTokenProperties?.(themeToken) || {};
  const appliedTokens = shape?.appliedTokens || {};
  const appTokenVals = new Set(Object.values(appliedTokens) as string[]);
  const appTokenKeys = Object.keys(appliedTokens);
  const isApplied = appTokenVals.has(name);

  const appliedTo = halfApplied
    ? partiallyAppliedAttr(appTokenKeys, isApplied, tokenProps)
    : tr('labels.all');

  const groupedValues = d.groupBy?.(appTokenKeys, dimensionsDictionary) || [];

  const baseTitle = `Token: ${name}\n${tr('workspace.tokens.original-value', dwtf.formatTokenValue?.(value) || value)}\n${tr('workspace.tokens.resolved-value', dwtf.formatTokenValue?.(resolved) || resolved)}${
    type === 'number' ? `\n${tr('workspace.tokens.more-options')}` : ''
  }`;

  if (refNotInActiveSet) {
    return tr('workspace.tokens.ref-not-valid');
  }

  if (noValidValue) {
    return tr('workspace.tokens.value-not-valid');
  }

  if (isApplied && isViewer) {
    if (type === 'dimensions') {
      return [baseTitle, tr('workspace.tokens.applied-to'), translateAndFormat(groupedValues)].join('\n');
    }
    return [baseTitle, tr('workspace.tokens.applied-to'), `- ${tokenProps.title}: ${appliedTo}`].join('\n');
  }

  return baseTitle;
};

// Check if text contains a reference value
const containsReferenceValue = (text: string, activeTokens: Set<string>) => {
  const match = text.match(/\{([^}]+)\}/)?.[1];
  return match ? activeTokens.has(match) : false;
};

// Check if all attributes are applied
const appliedAllAttributes = (
  token: any,
  selectedShapes: any[],
  attributes: string[]
) => {
  const idsByAttributes = cfo.shapesIdsByAppliedAttributes?.(
    token,
    selectedShapes,
    attributes
  );
  const shapeIds = new Set(selectedShapes.map((s) => s.id));
  return cfo.shapesAppliedAll?.(idsByAttributes, shapeIds, attributes) || false;
};

// Check if attributes match selection
const attributesMatchSelection = (
  selectedShapes: any[],
  attrs: Set<string>,
  options?: { selectedInsideLayout?: boolean }
) => {
  if (
    options?.selectedInsideLayout &&
    ctt.spacingMarginKeys &&
    attrs.hasAll?.(ctt.spacingMarginKeys)
  ) {
    return true;
  }

  return selectedShapes.some((shape) =>
    ctt.anyAppliableAttrForShape?.(attrs, shape.type, shape.layout)
  );
};

const tokenTypesWithStatusIcon = new Set([
  'color',
  'border-radius',
  'rotation',
  'sizing',
  'dimensions',
  'opacity',
  'spacing',
  'stroke-width',
]);

interface TokenPillProps {
  onClick?: (event: React.MouseEvent, token: any) => void;
  token: any;
  onContextMenu?: (event: React.MouseEvent, token: any) => void;
  selectedShapes: any[];
  isSelectedInsideLayout?: boolean;
  activeThemeTokens?: any;
}

export const TokenPill: React.FC<TokenPillProps> = ({
  onClick,
  token,
  onContextMenu,
  selectedShapes = [],
  isSelectedInsideLayout,
  activeThemeTokens,
}) => {
  const { name, value, type } = token;

  const resolvedToken = activeThemeTokens?.get?.(name) || activeThemeTokens?.[name];
  const errors = resolvedToken?.errors || token?.errors;

  const hasSelected = selectedShapes.length > 0;
  const isReference = cfo.isReference?.(token) || false;
  const containsPath = str.includes(name, '.');

  const tokenProperties = dwta.tokenProperties?.(type) || {};
  const attributes = tokenProperties.allAttributes || tokenProperties.attributes || [];

  const fullApplied = hasSelected
    ? appliedAllAttributes(token, selectedShapes, attributes)
    : true;

  const applied = hasSelected
    ? cfo.shapesTokenApplied?.(token, selectedShapes, attributes)
    : false;

  const halfApplied = applied && !fullApplied;

  const canEdit = refs.permissions?.canEdit;
  const isViewer = !canEdit;

  const refNotInActiveSet =
    cf.flags?.has('tokenscript')
      ? resolvedToken?.errors?.length > 0
      : isReference && !containsReferenceValue(value || '', new Set(Object.keys(activeThemeTokens || {})));

  const noValidValue = errors?.length > 0;
  const hasErrors = refNotInActiveSet || noValidValue;

  const color = useMemo(() => {
    if (cfo.colorToken?.(token)) {
      return (
        dwtc.resolvedTokenBulletColor?.(resolvedToken) ||
        dwtc.resolvedTokenBulletColor?.(token)
      );
    }
    return null;
  }, [token, resolvedToken]);

  const statusIcon = tokenTypesWithStatusIcon.has(type);

  const handleClick = useCallback(
    (event: React.MouseEvent) => {
      dom.stopPropagation(event);
      if (canEdit && !hasErrors && onClick) {
        onClick(event, token);
      }
    },
    [canEdit, hasErrors, onClick, token]
  );

  const handleContextMenu = useCallback(
    (e: React.MouseEvent) => {
      dom.stopPropagation(e);
      if (canEdit && onContextMenu) {
        onContextMenu(e, token);
      }
    },
    [canEdit, onContextMenu, token]
  );

  const handleHover = useCallback(
    (event: React.FocusEvent | React.MouseEvent) => {
      const node = dom.getCurrentTarget(event);
      const themeToken = activeThemeTokens?.[name] || activeThemeTokens?.get?.(name);
      const title = generateTooltip(
        isViewer,
        selectedShapes[0],
        themeToken,
        token,
        halfApplied,
        noValidValue,
        refNotInActiveSet
      );
      dom.setAttribute(node, 'title', title);
    },
    [isViewer, selectedShapes, activeThemeTokens, token, halfApplied, noValidValue, refNotInActiveSet, name]
  );

  const tokenStatusId = useMemo(() => {
    if (halfApplied) return 'token-status-partial';
    if (fullApplied) return 'token-status-full';
    return 'token-status-non-applied';
  }, [halfApplied, fullApplied]);

  const className = [
    stl.css('token-pill'),
    !statusIcon && !hasErrors && stl.css('token-pill-no-icon'),
    canEdit && stl.css('token-pill-default'),
    hasSelected && !applied && !halfApplied && !attributesMatchSelection(selectedShapes, new Set(attributes), { selectedInsideLayout: isSelectedInsideLayout }) && stl.css('token-pill-disabled'),
    canEdit && hasSelected && (halfApplied || fullApplied) && stl.css('token-pill-applied'),
    canEdit && hasErrors && stl.css('token-pill-invalid'),
    fullApplied && hasErrors && canEdit && stl.css('token-pill-invalid-applied'),
    isViewer && stl.css('token-pill-viewer'),
    isViewer && hasSelected && (halfApplied || fullApplied) && stl.css('token-pill-applied-viewer'),
    isViewer && hasErrors && stl.css('token-pill-invalid-viewer'),
    isViewer && fullApplied && hasErrors && stl.css('token-pill-invalid-applied-viewer'),
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={className}
      type="button"
      onFocus={handleHover}
      onClick={handleClick}
      onMouseEnter={handleHover}
      onContextMenu={handleContextMenu}
    >
      {hasErrors && (
        <Icon
          iconId="broken-link"
          className={stl.css('token-pill-icon')}
          ariaLabel={tr('workspace.tokens.missing-reference')}
        />
      )}

      {color && <Swatch background={color} size="small" />}

      {statusIcon && !hasErrors && (
        <TokenStatusIcon
          iconId={tokenStatusId}
          className={stl.css('token-pill-icon')}
        />
      )}

      {containsPath ? (
        <span className={stl.css('divided-name-wrapper')} aria-label={name}>
          <span className={stl.css('last-name-wrapper')}>
            {cpn.splitByLastPeriod?.(name)?.[1] || name.split('.').pop()}
          </span>
        </span>
      ) : (
        <span className={stl.css('name-wrapper')} aria-label={name}>
          {name}
        </span>
      )}
    </button>
  );
};
