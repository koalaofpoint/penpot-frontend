// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from 'react';
import * as ctk from 'app/common/types/component';
import * as cf from 'app/config';
import * as ev from 'app/main/data/event';
import * as refs from 'app/main/refs';
import * as st from 'app/main/store';
import { Button } from 'app/main/ui/ds/buttons/button';
import { Select } from 'app/main/ui/ds/controls/select';
import { Icon } from 'app/main/ui/ds/foundations/assets/icon';
import { TabSwitcher } from 'app/main/ui/ds/layout/tab-switcher';
import { EmptyState } from 'app/main/ui/ds/product/empty-state';
import { Attributes } from 'app/main/ui/inspect/attributes';
import { Code } from 'app/main/ui/inspect/code';
import { resolveShapes } from 'app/main/ui/inspect/selection-feedback';
import { StylesTab } from 'app/main/ui/inspect/styles';
import * as dom from 'app/util/dom';
import { tr } from 'app/util/i18n';
import { getShapeIcon } from 'app/util/shape-icon';
import * as ptk from 'potok.v2/core';

function getLibraries(from: 'workspace' | 'viewer') {
  if (from === 'workspace') {
    return st.getState(refs.libraries);
  }

  const viewerData = st.getState(refs.viewerData);
  const local = viewerData?.file?.data;
  const id = local?.id;
  const libraries = viewerData?.libraries || {};

  return {
    ...libraries,
    [id]: { id, data: local }
  };
}

interface RightSidebarProps {
  frame?: any;
  page?: any;
  objects?: any;
  file?: any;
  selected?: string[];
  shapes?: any[];
  pageId?: string;
  fileId?: string;
  shareId?: string;
  from?: 'workspace' | 'viewer';
  onChangeSection?: (section: string) => void;
  onExpand?: () => void;
}

export function RightSidebar({
  frame,
  page,
  objects,
  file,
  selected,
  shapes,
  pageId,
  fileId,
  shareId,
  from = 'viewer',
  onChangeSection,
  onExpand
}: RightSidebarProps) {
  const [colorSpace, setColorSpace] = React.useState('hex');
  const [section, setSection] = React.useState<string>('info');

  const resolvedObjects = objects || page?.objects || {};
  const resolvedShapes = shapes || resolveShapes(resolvedObjects, selected || []);
  const firstShape = resolvedShapes[0];
  const resolvedPageId = pageId || page?.id;
  const resolvedFileId = fileId || file?.id;

  const libraries = getLibraries(from);
  const mainInstance = ctk.mainInstance(firstShape);

  const subtitle = React.useMemo(() => {
    if (ctk.isVariantContainer(firstShape) || (!ctk.isVariant(firstShape) && mainInstance)) {
      return tr('inspect.subtitle.main');
    }
    if (ctk.isVariant(firstShape) && mainInstance) {
      return tr('labels.variant');
    }
    if (ctk.instanceHead(firstShape)) {
      return tr('inspect.subtitle.copy');
    }
    return null;
  }, [firstShape, mainInstance]);

  const handleChangeTab = React.useCallback((newSection: string) => {
    setSection(newSection);
    if (onChangeSection) {
      onChangeSection(newSection);
    }
    st.emit(
      ptk.event(ev.event, {
        name: 'change-inspect-tab',
        tab: newSection
      })
    );
  }, [onChangeSection]);

  const handleExpand = React.useCallback(() => {
    if (onExpand) {
      onExpand();
    }
  }, [onExpand]);

  const navigateToHelp = React.useCallback(() => {
    dom.openNewWindow('https://help.penpot.app/user-guide/inspect/');
  }, []);

  const handleChangeColorSpace = React.useCallback((newColorSpace: string) => {
    setColorSpace(newColorSpace);
  }, []);

  const colorSpaces = [
    { label: tr('inspect.attributes.color.hex'), id: 'hex' },
    { label: tr('inspect.attributes.color.rgba'), id: 'rgba' },
    { label: tr('inspect.attributes.color.hsla'), id: 'hsla' }
  ];

  const tabs = cf.flags?.has('inspect-styles')
    ? [
        { label: tr('labels.styles'), id: 'styles' },
        { label: tr('labels.computed'), id: 'computed' },
        { label: tr('labels.code'), id: 'code', dataTestid: 'code' }
      ]
    : [
        { label: tr('labels.info'), id: 'info' },
        { label: tr('labels.code'), id: 'code', dataTestid: 'code' }
      ];

  React.useEffect(() => {
    if (resolvedShapes.length > 0) {
      st.emit(
        ptk.event(ev.event, {
          name: 'inspect-mode-click-element'
        })
      );
    } else {
      handleChangeTab(cf.flags?.has('inspect-styles') ? 'styles' : 'info');
    }
  }, [resolvedShapes, handleChangeTab]);

  if (resolvedShapes.length === 0) {
    return (
      <aside className={`settings-bar-right ${from === 'viewer' ? 'viewer-code' : ''}`}>
        <div className="empty">
          <EmptyState icon={Icon} text={tr('inspect.empty.select')} />
          <EmptyState icon={Icon} text={tr('inspect.empty.help')} />
        </div>
        <div className="empty-button">
          <Button variant="secondary" onClick={navigateToHelp}>
            {tr('inspect.empty.more')}
          </Button>
        </div>
      </aside>
    );
  }

  return (
    <aside className={`settings-bar-right ${from === 'viewer' ? 'viewer-code' : ''}`}>
      <div className="tool-windows">
        <div className={`shape-info ${subtitle ? 'shape-info-subtitle' : ''}`}>
          {resolvedShapes.length > 1 ? (
            <>
              <div className="layers-icon">
                <Icon iconId="layers" size="s" />
              </div>
              <span className="layer-title">
                {tr('inspect.multiple-selected', resolvedShapes.length)}
              </span>
            </>
          ) : (
            <>
              <div className="shape-icon">
                <Icon iconId={getShapeIcon(firstShape)} size="s" />
              </div>
              <div>
                {subtitle ? (
                  <>
                    <div className="layer-title layer-title-with-subtitle">
                      {firstShape.name}
                    </div>
                    <div className="layer-subtitle">{subtitle}</div>
                  </>
                ) : (
                  <div className="layer-title">{firstShape.name}</div>
                )}
              </div>
            </>
          )}
        </div>

        <div className="inspect-content">
          {cf.flags?.has('inspect-styles') && (
            <div className="inspect-tab-switcher">
              <span className="inspect-tab-switcher-label">
                {tr('inspect.layer-info')}
              </span>
              <div className="inspect-tab-switcher-controls">
                <div className="inspect-tab-switcher-controls-color-space">
                  <Select
                    className="inspect-tab-switcher-controls-color-space-select"
                    ariaLabel={tr('inspect.color-space-label')}
                    options={colorSpaces}
                    defaultSelected="hex"
                    variant="ghost"
                    onChange={handleChangeColorSpace}
                  />
                </div>
                <div className="inspect-tab-switcher-controls-tab">
                  <Select
                    options={tabs}
                    ariaLabel={tr('inspect.tabs-switcher-label')}
                    defaultSelected={section}
                    onChange={handleChangeTab}
                  />
                </div>
              </div>
            </div>
          )}

          {cf.flags?.has('inspect-styles') ? (
            <div className="inspect-tab viewer-tab-switcher viewer-tab-switcher-layout">
              {section === 'styles' && (
                <StylesTab
                  colorSpace={colorSpace}
                  objects={resolvedObjects}
                  shapes={resolvedShapes}
                  from={from}
                  libraries={libraries}
                  fileId={resolvedFileId}
                />
              )}
              {section === 'computed' && (
                <Attributes
                  colorSpace={colorSpace}
                  pageId={resolvedPageId}
                  objects={resolvedObjects}
                  fileId={resolvedFileId}
                  frame={frame}
                  shapes={resolvedShapes}
                  from={from}
                  libraries={libraries}
                  shareId={shareId}
                />
              )}
              {section === 'code' && (
                <Code
                  frame={frame}
                  shapes={resolvedShapes}
                  onExpand={handleExpand}
                  from={from}
                />
              )}
            </div>
          ) : (
            <TabSwitcher
              tabs={tabs}
              selected={section}
              onChange={handleChangeTab}
              className="viewer-tab-switcher"
            >
              {section === 'info' && (
                <Attributes
                  pageId={resolvedPageId}
                  objects={resolvedObjects}
                  fileId={resolvedFileId}
                  frame={frame}
                  shapes={resolvedShapes}
                  from={from}
                  libraries={libraries}
                  shareId={shareId}
                />
              )}
              {section === 'code' && (
                <Code
                  frame={frame}
                  shapes={resolvedShapes}
                  onExpand={handleExpand}
                  from={from}
                />
              )}
            </TabSwitcher>
          )}
        </div>
      </div>
    </aside>
  );
}
