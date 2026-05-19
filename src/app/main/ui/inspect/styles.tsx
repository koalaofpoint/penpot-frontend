// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from 'react';
import * as ctc from 'app/common/types/component';
import * as ctkl from 'app/common/types/components-list';
import * as ctl from 'app/common/types/shape/layout';
import * as ctob from 'app/common/types/tokens-lib';
import { useResolvedTokens } from 'app/main/data/style-dictionary';
import { useSelector } from 'react-redux';
import { BlurPanel } from 'app/main/ui/inspect/styles/panels/blur';
import { FillPanel } from 'app/main/ui/inspect/styles/panels/fill';
import { GeometryPanel } from 'app/main/ui/inspect/styles/panels/geometry';
import { LayoutPanel } from 'app/main/ui/inspect/styles/panels/layout';
import { LayoutElementPanel } from 'app/main/ui/inspect/styles/panels/layout-element';
import { ShadowPanel } from 'app/main/ui/inspect/styles/panels/shadow';
import { StrokePanel } from 'app/main/ui/inspect/styles/panels/stroke';
import { SvgPanel } from 'app/main/ui/inspect/styles/panels/svg';
import { TextPanel } from 'app/main/ui/inspect/styles/panels/text';
import { TokensPanel } from 'app/main/ui/inspect/styles/panels/tokens-panel';
import { VariantsPanel } from 'app/main/ui/inspect/styles/panels/variants_panel';
import { VisibilityPanel } from 'app/main/ui/inspect/styles/panels/visibility';
import { StyleBox } from 'app/main/ui/inspect/styles/style-box';
import * as css from 'app/util/code-gen/style-css';
import { tr } from 'app/util/i18n';

export const layoutElementProperties: (string | symbol)[] = [
  'marginBlockStart',
  'marginBlockEnd',
  'marginInlineStart',
  'marginInlineEnd',
  'maxBlockSize',
  'minBlockSize',
  'maxInlineSize',
  'minInlineSize',
  'alignSelf',
  'justifySelf',
  'flexShrink',
  'flex',
  'gridColumn',
  'gridRow'
];

const typeToPanelGroup: Record<string, (string | symbol)[]> = {
  multiple: ['fill', 'stroke', 'text', 'shadow', 'blur', 'layoutElement'],
  frame: ['visibility', 'geometry', 'fill', 'stroke', 'shadow', 'blur', 'layout', 'layoutElement'],
  group: ['visibility', 'geometry', 'svg', 'layoutElement'],
  rect: ['visibility', 'geometry', 'fill', 'stroke', 'shadow', 'blur', 'svg', 'layoutElement'],
  circle: ['visibility', 'geometry', 'fill', 'stroke', 'shadow', 'blur', 'svg', 'layoutElement'],
  path: ['visibility', 'geometry', 'fill', 'stroke', 'shadow', 'blur', 'svg', 'layoutElement'],
  text: ['visibility', 'geometry', 'text', 'shadow', 'blur', 'stroke', 'layoutElement'],
  variant: ['variant', 'geometry', 'fill', 'stroke', 'shadow', 'blur', 'layout', 'layoutElement']
};

function hasFill(shape: any): boolean {
  return (
    shape.type !== 'text' &&
    shape.type !== 'group' &&
    !!(shape.fills && shape.fills.length > 0)
  );
}

function hasStroke(shape: any): boolean {
  return !!(shape.strokes && shape.strokes.length > 0);
}

function hasBlur(shape: any): boolean {
  return !!shape.blur;
}

function hasText(shape: any): boolean {
  return !!shape.content;
}

function hasShadow(shape: any): boolean {
  return !!(shape.shadow && shape.shadow.length > 0);
}

function getShapeType(shapes: any[], firstShape: any, firstComponent: any): string {
  if (shapes.length === 1) {
    if (ctc.isVariantContainer(firstShape) || ctc.isVariant(firstComponent)) {
      return 'variant';
    }
    return firstShape.type;
  }
  return 'multiple';
}

interface StylesTabProps {
  colorSpace?: string;
  shapes: any[];
  libraries?: any;
  objects?: any;
  fileId?: string;
  from?: 'workspace' | 'viewer';
}

export function StylesTab({
  colorSpace = 'hex',
  shapes,
  libraries,
  objects,
  fileId,
  from = 'viewer'
}: StylesTabProps) {
  const data = libraries?.[fileId]?.data;
  const firstShape = shapes[0];
  const firstComponent = ctkl.getComponent(data, firstShape?.componentId);
  const shapeType = getShapeType(shapes, firstShape, firstComponent);
  const panels = typeToPanelGroup[shapeType] || typeToPanelGroup.multiple;

  const tokensLib = useSelector((state: any) => state.tokensLib);
  const activeThemes = useSelector((state: any) => state.workspaceActiveThemePathsNoHidden);
  const activeSets = React.useMemo(() => {
    return tokensLib ? ctob.getActiveThemesSetNames(tokensLib) : null;
  }, [tokensLib]);
  const activeTokens = React.useMemo(() => {
    return tokensLib ? ctob.getTokensInActiveSets(tokensLib) : null;
  }, [tokensLib]);
  const resolvedActiveTokens = useResolvedTokens(activeTokens);

  const hasVisibilityProps = React.useCallback((shape: any): boolean => {
    const shapeType = shape.type;
    return (
      shapeType !== 'text' &&
      shapeType !== 'group' &&
      (!!shape.opacity || !!shape.blendMode || !!shape.visibility)
    );
  }, []);

  const [shorthands, setShorthands] = React.useState<Record<string, string>>({
    fill: '',
    stroke: '',
    text: '',
    shadow: '',
    blur: '',
    layout: '',
    layoutElement: '',
    geometry: '',
    svg: '',
    visibility: '',
    variant: '',
    gridElement: ''
  });

  const setShorthand = React.useCallback((shorthand: { panel: string; property: string }) => {
    setShorthands(prev => ({
      ...prev,
      [shorthand.panel]: shorthand.property
    }));
  }, []);

  return (
    <ol
      className={`styles-tab ${from === 'workspace' ? 'styles-tab-workspace' : ''}`}
      aria-label={tr('labels.styles')}
    >
      {(activeThemes || activeSets) && (
        <li>
          <StyleBox panel="token">
            <TokensPanel
              themePaths={activeThemes}
              setNames={activeSets}
            />
          </StyleBox>
        </li>
      )}
      {panels.map(panel => {
        switch (panel) {
          case 'variant': {
            return (
              <li key={panel}>
                <StyleBox panel="variant">
                  <VariantsPanel
                    component={firstComponent}
                    objects={objects}
                    shape={firstShape}
                    data={data}
                  />
                </StyleBox>
              </li>
            );
          }
          case 'geometry': {
            return (
              <li key={panel}>
                <StyleBox panel="geometry" shorthand={shorthands.geometry}>
                  <GeometryPanel
                    shapes={shapes}
                    objects={objects}
                    resolvedTokens={resolvedActiveTokens}
                    onGeometryShorthand={setShorthand}
                  />
                </StyleBox>
              </li>
            );
          }
          case 'layout': {
            const layoutShapes = shapes.filter(shape => ctl.anyLayout(shape));
            if (layoutShapes.length === 0) return null;
            return (
              <li key={panel}>
                <StyleBox panel="layout" shorthand={shorthands.layout}>
                  <LayoutPanel
                    shapes={layoutShapes}
                    objects={objects}
                    resolvedTokens={resolvedActiveTokens}
                    onLayoutShorthand={setShorthand}
                  />
                </StyleBox>
              </li>
            );
          }
          case 'layoutElement': {
            const elementShapes = shapes.filter(shape => ctl.anyLayoutImmediateChild(objects, shape));
            const someLayoutProp = elementShapes.some(shape =>
              layoutElementProperties.some(prop => css.getCssValue(objects, shape, prop))
            );
            if (!someLayoutProp) return null;

            const onlyFlex = elementShapes.every(shape => ctl.flexLayoutImmediateChild(objects, shape));
            const onlyGrid = elementShapes.every(shape => ctl.gridLayoutImmediateChild(objects, shape));
            const panelType = onlyFlex ? 'flex-element' : onlyGrid ? 'grid-element' : 'layout-element';

            return (
              <li key={panel}>
                <StyleBox panel={panelType} shorthand={shorthands.layoutElement}>
                  <LayoutElementPanel
                    shapes={elementShapes}
                    objects={objects}
                    resolvedTokens={resolvedActiveTokens}
                    layoutElementProperties={layoutElementProperties}
                    onLayoutElementShorthand={setShorthand}
                  />
                </StyleBox>
              </li>
            );
          }
          case 'fill': {
            const fillShapes = shapes.filter(hasFill);
            if (fillShapes.length === 0) return null;
            return (
              <li key={panel}>
                <StyleBox panel="fill" shorthand={shorthands.fill}>
                  <FillPanel
                    colorSpace={colorSpace}
                    shapes={fillShapes}
                    resolvedTokens={resolvedActiveTokens}
                    onFillShorthand={setShorthand}
                  />
                </StyleBox>
              </li>
            );
          }
          case 'stroke': {
            const strokeShapes = shapes.filter(hasStroke);
            if (strokeShapes.length === 0) return null;
            return (
              <li key={panel}>
                <StyleBox panel="stroke" shorthand={shorthands.stroke}>
                  <StrokePanel
                    colorSpace={colorSpace}
                    shapes={strokeShapes}
                    objects={objects}
                    resolvedTokens={resolvedActiveTokens}
                    onStrokeShorthand={setShorthand}
                  />
                </StyleBox>
              </li>
            );
          }
          case 'visibility': {
            const visibilityShapes = shapes.filter(hasVisibilityProps);
            if (visibilityShapes.length === 0) return null;
            return (
              <li key={panel}>
                <StyleBox panel="visibility">
                  <VisibilityPanel
                    shapes={visibilityShapes}
                    objects={objects}
                    resolvedTokens={resolvedActiveTokens}
                  />
                </StyleBox>
              </li>
            );
          }
          case 'svg': {
            const shape = firstShape;
            if (!shape?.svgAttrs || Object.keys(shape.svgAttrs).length === 0) return null;
            return (
              <li key={panel}>
                <StyleBox panel="svg">
                  <SvgPanel shape={shape} objects={objects} />
                </StyleBox>
              </li>
            );
          }
          case 'blur': {
            const blurShapes = shapes.filter(hasBlur);
            if (blurShapes.length === 0) return null;
            return (
              <li key={panel}>
                <StyleBox panel="blur">
                  <BlurPanel shapes={blurShapes} objects={objects} />
                </StyleBox>
              </li>
            );
          }
          case 'text': {
            const textShapes = shapes.filter(hasText);
            if (textShapes.length === 0) return null;
            return (
              <li key={panel}>
                <StyleBox panel="text" shorthand={shorthands.text}>
                  <TextPanel
                    shapes={textShapes}
                    colorSpace={colorSpace}
                    resolvedTokens={resolvedActiveTokens}
                    onFontShorthand={setShorthand}
                  />
                </StyleBox>
              </li>
            );
          }
          case 'shadow': {
            const shadowShapes = shapes.filter(hasShadow);
            if (shadowShapes.length === 0) return null;
            return (
              <li key={panel}>
                <StyleBox panel="shadow" shorthand={shorthands.shadow}>
                  <ShadowPanel
                    shapes={shadowShapes}
                    resolvedTokens={resolvedActiveTokens}
                    colorSpace={colorSpace}
                    onShadowShorthand={setShorthand}
                  />
                </StyleBox>
              </li>
            );
          }
          default:
            return (
              <li key={panel}>
                <StyleBox panel={String(panel)}>
                  <div>{colorSpace}</div>
                </StyleBox>
              </li>
            );
        }
      })}
    </ol>
  );
}
