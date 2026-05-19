// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as stl from 'app/main/style';
import * as dm from 'app/common/data/macros';
import * as ctob from 'app/common/types/tokens-lib';
import * as uuid from 'app/common/uuid';
import * as modal from 'app/main/data/modal';
import * as dwtl from 'app/main/data/workspace/tokens/library-edit';
import * as refs from 'app/main/refs';
import { emit } from 'app/main/store';
import { Dropdown } from 'app/main/ui/components/dropdown';
import { Icon } from 'app/main/ui/ds/foundations/assets/icon';
import { Text } from 'app/main/ui/ds/foundations/typography/text';
import * as dom from 'app/util/dom';
import * as i18n from 'app/util/i18n';
import * as str from 'cuerdas.core';
import React, { useCallback, useMemo, useState } from 'react';

const { tr } = i18n;

interface Theme {
  id: string;
  name: string;
  group?: string;
}

interface ThemesListProps {
  themes: [string, Theme][];
  activeThemePaths: Set<string>;
  onClose?: () => void;
  grouped?: boolean;
}

const ThemesList: React.FC<ThemesListProps> = ({
  themes,
  activeThemePaths,
  onClose,
  grouped = false,
}) => {
  if (!themes || themes.length === 0) return null;

  return (
    <ul className={stl.css('theme-options')}>
      {themes.map(([, theme]) => {
        const themePath = ctob.getThemePath(theme);
        const selected = activeThemePaths.has(themePath);

        const selectTheme = (e: React.MouseEvent) => {
          dom.stopPropagation(e);
          emit(dwtl.toggleTokenThemeActive(theme.id));
          onClose?.();
        };

        return (
          <li
            key={themePath}
            role="option"
            aria-selected={selected}
            className={`${stl.css('checked-element')} ${grouped ? stl.css('sub-item') : ''} ${selected ? stl.css('is-selected') : ''}`}
            onClick={selectTheme}
          >
            <Text
              as="span"
              typography="body-small"
              className={stl.css('label')}
              title={theme.name}
            >
              {theme.name}
            </Text>
            <Icon
              iconId="tick"
              aria-hidden={true}
              className={`${stl.css('check-icon')} ${selected ? stl.css('check-icon-visible') : ''}`}
            />
          </li>
        );
      })}
    </ul>
  );
};

const openTokensThemeModal = () => {
  modal.show('tokens/themes', {});
};

interface ThemeOptionsProps {
  activeThemePaths: Set<string>;
  themes: [string, Theme[]][];
  onClose?: () => void;
}

const ThemeOptions: React.FC<ThemeOptionsProps> = ({
  activeThemePaths,
  themes,
  onClose,
}) => (
  <ul className={`${stl.css('theme-options')} ${stl.css('custom-select-dropdown')}`} role="listbox">
    {themes.map(([group, themeGroup]) => (
      <li key={group} role="group" aria-labelledby={`${str.kebab(group)}-label`}>
        {group && (
          <Text
            as="span"
            typography="headline-small"
            className={stl.css('group')}
            id={`${str.kebab(group)}-label`}
            title={group}
          >
            {group}
          </Text>
        )}
        <ThemesList
          themes={themeGroup}
          activeThemePaths={activeThemePaths}
          onClose={onClose}
          grouped={!!group}
        />
      </li>
    ))}
    <li className={stl.css('separator')} aria-hidden={true} />
    <li
      className={`${stl.css('checked-element')} ${stl.css('checked-element-button')}`}
      role="option"
      onClick={openTokensThemeModal}
    >
      <Text as="span" typography="body-small">
        {tr('workspace.tokens.edit-themes')}
      </Text>
      <Icon iconId="arrow-right" aria-hidden={true} />
    </li>
  </ul>
);

export const ThemeSelector: React.FC = () => {
  const activeThemePaths = refs.workspaceActiveThemePathsNoHidden || new Set();
  const activeThemesCount = activeThemePaths.size;
  const themes = refs.workspaceTokenThemeTreeNoHidden || [];
  const permissions = refs.permissions;
  const canEdit = permissions?.canEdit;

  const currentLabel = useMemo(() => {
    if (activeThemesCount > 1) {
      return tr('workspace.tokens.active-themes', activeThemesCount);
    }
    if (activeThemesCount === 1) {
      const firstPath = Array.from(activeThemePaths)[0];
      const parts = ctob.splitThemePath(firstPath)?.filter(Boolean);
      return parts?.join(' / ') || tr('workspace.tokens.no-active-theme');
    }
    return tr('workspace.tokens.no-active-theme');
  }, [activeThemePaths, activeThemesCount]);

  const [state, setState] = useState(() => ({
    id: uuid.next(),
    isOpen: false,
    rect: null as DOMRect | null,
  }));

  const isOpen = state.isOpen;
  const rect = state.rect;

  const onCloseDropdown = useCallback(() => {
    setState((s) => ({ ...s, isOpen: false }));
  }, []);

  const onOpenDropdown = useCallback(
    (e: React.MouseEvent) => {
      if (!canEdit) return;
      const target = e.currentTarget as HTMLElement;
      const boundingRect = target.getBoundingClientRect();
      setState((s) => ({
        ...s,
        isOpen: true,
        rect: boundingRect,
      }));
    },
    [canEdit]
  );

  return (
    <div
      onClick={onOpenDropdown}
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      tabIndex={0}
      role="combobox"
      data-testid="theme-select"
      className={`${stl.css('custom-select')} ${!canEdit ? stl.css('disabled-select') : ''}`}
    >
      <Text as="span" typography="body-small" className={stl.css('current-label')}>
        {currentLabel}
      </Text>
      <Icon iconId="arrow-down" className={stl.css('dropdown-button')} aria-hidden={true} />

      {isOpen && (
        <div
          className={stl.css('dropdown-portal')}
          data-testid="theme-select-dropdown"
          style={{
            top: rect?.top,
            left: rect?.left,
            width: rect?.width,
          }}
        >
          <Dropdown show={isOpen} onClose={onCloseDropdown}>
            <ThemeOptions
              activeThemePaths={activeThemePaths}
              themes={themes}
              onClose={onCloseDropdown}
            />
          </Dropdown>
        </div>
      )}
    </div>
  );
};
