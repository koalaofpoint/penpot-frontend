// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as stl from 'app/main/style';
import * as modal from 'app/main/data/modal';
import * as refs from 'app/main/refs';
import { useContext } from 'app/main/ui/context';
import { Button } from 'app/main/ui/ds/buttons/button';
import { Text } from 'app/main/ui/ds/foundations/typography/text';
import { ThemeSelector } from 'app/main/ui/workspace/tokens/themes/theme-selector';
import * as dom from 'app/util/dom';
import * as i18n from 'app/util/i18n';
import React, { useCallback } from 'react';

const { tr } = i18n;

export const ThemesHeader: React.FC = () => {
  const orderedThemes = refs.workspaceTokenThemesNoHidden;
  const canEdit = useContext('can-edit?');

  const openModal = useCallback(
    (e: React.MouseEvent) => {
      dom.stopPropagation(e);
      modal.show('tokens/themes', {});
    },
    []
  );

  return (
    <div className={stl.css('themes-wrapper')}>
      <Text as="div" typography="headline-small" className={stl.css('themes-header')}>
        {tr('labels.themes')}
      </Text>
      {orderedThemes?.length === 0 ? (
        <div className={stl.css('empty-theme-wrapper')}>
          <Text as="span" typography="body-small" className={stl.css('empty-state-message')}>
            {tr('workspace.tokens.no-themes')}
          </Text>
          {canEdit && (
            <button
              onClick={openModal}
              className={stl.css('create-theme-button')}
            >
              {tr('workspace.tokens.create-one')}
            </button>
          )}
        </div>
      ) : canEdit ? (
        <div className={stl.css('theme-selector-wrapper')}>
          <ThemeSelector />
          <Button
            variant="secondary"
            type="button"
            className={stl.css('edit-theme-button')}
            onClick={openModal}
          >
            {tr('labels.edit')}
          </Button>
        </div>
      ) : (
        <div
          title={
            !canEdit ? tr('workspace.tokens.no-permission-themes') : undefined
          }
        >
          <ThemeSelector />
        </div>
      )}
    </div>
  );
};
