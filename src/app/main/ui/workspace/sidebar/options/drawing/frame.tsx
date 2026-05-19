// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as stl from 'app/main/style';
import * as d from 'app/common/data';
import { sizePresets } from 'app/main/constants';
import * as dwd from 'app/main/data/workspace/drawing';
import { emit } from 'app/main/store';
import { Dropdown } from 'app/main/ui/components/dropdown';
import { RadioButton, RadioButtons } from 'app/main/ui/components/radio-buttons';
import * as i from 'app/main/ui/ds/foundations/assets/icon';
import * as deprecatedIcon from 'app/main/ui/icons';
import * as dom from 'app/util/dom';
import * as i18n from 'app/util/i18n';
import React, { useState } from 'react';

const { tr } = i18n;

interface OptionsProps {
  drawingState: any;
}

export const Options: React.FC<OptionsProps> = ({ drawingState }) => {
  const [show, setShow] = useState(false);
  const [selectedPresetName, setSelectedPresetName] = useState<string | null>(null);

  const onOpen = () => setShow(true);
  const onClose = () => setShow(false);

  const onPresetSelected = (event: React.MouseEvent) => {
    const target = event.currentTarget as HTMLElement;
    const name = dom.getData(target, 'name');
    const width = d.readString(dom.getData(target, 'width'));
    const height = d.readString(dom.getData(target, 'height'));

    setSelectedPresetName(name);
    emit(dwd.setDefaultSize(width, height));
  };

  const orientation = drawingState?.width
    ? drawingState.width > drawingState.height
      ? 'horizontal'
      : 'vertical'
    : null;

  const onOrientationChange = (value: string) => {
    emit(dwd.changeOrientation(value as 'horizontal' | 'vertical'));
  };

  return (
    <div className={stl.css('presets')}>
      <div
        className={stl.cssCase('presets-wrapper', true, 'opened', show)}
        onClick={onOpen}
      >
        <span className={stl.css('select-name')}>
          {selectedPresetName || tr('workspace.options.size-presets')}
        </span>
        <span className={stl.css('collapsed-icon')}>
          {deprecatedIcon.arrow}
        </span>
        <Dropdown show={show} onClose={onClose}>
          <ul className={stl.css('custom-select-dropdown')}>
            {sizePresets.map((preset: any) => {
              if (!preset.width) {
                return (
                  <li
                    key={preset.name}
                    className={stl.cssCase('dropdown-element', true, 'disabled', true)}
                  >
                    <span className={stl.css('preset-name')}>{preset.name}</span>
                  </li>
                );
              }

              const presetMatch =
                preset.width === drawingState?.width &&
                preset.height === drawingState?.height;

              return (
                <li
                  key={preset.name}
                  className={stl.cssCase('dropdown-element', true, 'match', presetMatch)}
                  data-width={String(preset.width)}
                  data-height={String(preset.height)}
                  data-name={preset.name}
                  onClick={onPresetSelected}
                >
                  <div className={stl.css('name-wrapper')}>
                    <span className={stl.css('preset-name')}>{preset.name}</span>
                    <span className={stl.css('preset-size')}>
                      {preset.width} x {preset.height}
                    </span>
                  </div>
                  {presetMatch && (
                    <span className={stl.css('check-icon')}>
                      {deprecatedIcon.tick}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </Dropdown>
      </div>

      <RadioButtons
        selected={orientation ? String(orientation) : ''}
        onChange={onOrientationChange}
        name="frame-orientation"
        wide={true}
        className={stl.css('radio-buttons')}
      >
        <RadioButton icon={i.sizeVertical} value="vertical" id="size-vertical" />
        <RadioButton icon={i.sizeHorizontal} value="horizontal" id="size-horizontal" />
      </RadioButtons>
    </div>
  );
};

export default Options;