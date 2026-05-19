// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as stl from 'app/main/style';
import * as ctf from 'app/common/types/file';
import * as modal from 'app/main/data/modal';
import * as wtt from 'app/main/data/workspace/tokens/typography';
import * as refs from 'app/main/refs';
import { emit } from 'app/main/store';
import { Button } from 'app/main/ui/ds/buttons/button';
import { IconButton } from 'app/main/ui/ds/buttons/icon-button';
import { Input } from 'app/main/ui/ds/controls/input';
import { Icon } from 'app/main/ui/ds/foundations/assets/icon';
import * as t from 'app/main/ui/ds/foundations/typography';
import { Heading } from 'app/main/ui/ds/foundations/typography/heading';
import { Text } from 'app/main/ui/ds/foundations/typography/text';
import * as dom from 'app/util/dom';
import * as i18n from 'app/util/i18n';
import * as keyboard from 'app/util/keyboard';
import * as str from 'cuerdas.core';
import React, { useCallback, useState } from 'react';

const { tr } = i18n;

export const TokenSettings: React.FC = () => {
  const fileData = refs.workspaceData;
  const [baseFontSize, setBaseFontSize] = useState(() =>
    ctf.getBaseFontSize(fileData)
  );
  const [isValid, setIsValid] = useState(true);

  const isValidFontSize = (value: string) => {
    return /^\d+(\.\d+)?(px)?$/.test(value);
  };

  const hintMessage = isValid
    ? `1rem = ${baseFontSize}`
    : tr('workspace.tokens.base-font-size.error');

  const onChangeBaseFontSize = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = dom.getTargetValue(e);
      const valid = isValidFontSize(value);
      setIsValid(valid);
      if (valid) {
        const unitValue = str.endsWith(value, 'px') ? value : str(value, 'px');
        setBaseFontSize(unitValue);
      }
    },
    []
  );

  const onSetFont = useCallback(() => {
    emit(
      wtt.setBaseFontSize(baseFontSize),
      modal.hide()
    );
  }, [baseFontSize]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (keyboard.enter(e) && isValid) {
        onSetFont();
      }
    },
    [isValid, onSetFont]
  );

  return (
    <div
      className={stl.css('setting-modal-overlay')}
      data-testid="token-font-settings-modal"
    >
      <div className={stl.css('setting-modal')}>
        <IconButton
          onClick={() => modal.hide()}
          className={stl.css('close-btn')}
          icon={Icon.iconId('close')}
          variant="action"
          aria-label={tr('labels.close')}
        />

        <div className={stl.css('settings-modal-layout')}>
          <Heading
            level={2}
            typography={t.headlineMedium}
            className={stl.css('settings-modal-title')}
          >
            {tr('workspace.tokens.settings')}
          </Heading>

          <div className={stl.css('settings-modal-content')}>
            <div className={stl.css('settings-modal-subtitle-wrapper')}>
              <Text
                as="span"
                typography={t.bodyLarge}
                className={stl.css('settings-subtitle')}
              >
                {tr('workspace.tokens.base-font-size')}
              </Text>
            </div>
            <Text
              as="span"
              typography={t.bodyMedium}
              className={stl.css('settings-modal-description')}
            >
              {tr('workspace.tokens.setting-description')}
            </Text>

            <Input
              type="text"
              placeholder="16"
              defaultValue={baseFontSize}
              hintMessage={hintMessage}
              hintType={isValid ? 'hint' : 'error'}
              onKeyDown={handleKeyDown}
              onChange={onChangeBaseFontSize}
            />

            <div className={stl.css('settings-modal-actions')}>
              <Button
                onClick={() => modal.hide()}
                type="button"
                variant="secondary"
              >
                {tr('labels.cancel')}
              </Button>
              <Button
                onClick={onSetFont}
                type="button"
                disabled={!isValid}
                variant="primary"
              >
                {tr('labels.save')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
