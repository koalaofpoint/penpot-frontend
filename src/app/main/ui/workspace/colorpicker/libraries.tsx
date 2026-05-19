// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as stl from 'app/main/style';
import * as d from 'app/common/data';
import * as dm from 'app/common/data/macros';
import * as ctc from 'app/common/types/color';
import * as uuid from 'app/common/uuid';
import * as ev from 'app/main/data/event';
import * as dw from 'app/main/data/workspace';
import * as mdc from 'app/main/data/workspace/colors';
import * as refs from 'app/main/refs';
import { emit } from 'app/main/store';
import { ColorBullet } from 'app/main/ui/components/color-bullet';
import { Select } from 'app/main/ui/components/select';
import { useContext } from 'app/main/ui/context';
import { useSharedState } from 'app/main/ui/hooks';
import * as r from 'app/main/ui/hooks/resize';
import * as deprecatedIcon from 'app/main/ui/icons';
import * as dom from 'app/util/dom';
import * as i18n from 'app/util/i18n';
import * as ptk from 'potok.v2.core';
import React, { useCallback, useEffect, useState } from 'react';

const { tr } = i18n;

interface LibraryColor {
  color?: string;
  gradient?: any;
  opacity?: number;
  image?: any;
  name?: string;
}

interface LibrariesProps {
  state: any;
  onSelectColor: (state: any, event: any) => void;
  onAddLibraryColor: () => void;
  disableGradient?: boolean;
  disableOpacity?: boolean;
  disableImage?: boolean;
}

export const Libraries: React.FC<LibrariesProps> = ({
  state,
  onSelectColor,
  onAddLibraryColor,
  disableGradient,
  disableOpacity,
  disableImage,
}) => {
  const [selected, setSelected] = useSharedState<any>(
    mdc.colorpickerSelectedBroadcastKey,
    'recent'
  );
  const fileId = useContext('current-file-id');
  const [currentColors, setCurrentColors] = useState<any[]>([]);

  const libraries = refs.libraries;
  const recentColors = refs.recentColors;

  const validRecentColors = recentColors?.filter(ctc.validColor) || [];

  const libraryOptions = [
    { value: 'recent', label: tr('workspace.libraries.colors.recent-colors') },
    { value: 'file', label: tr('workspace.libraries.colors.file-library') },
  ];

  const options = [
    ...libraryOptions,
    ...Object.entries(libraries || {})
      .filter(([id]) => id !== fileId)
      .map(([, lib]: [any, any]) => ({
        value: d.name(lib.id),
        label: lib.name,
      })),
  ];

  const onLibraryChange = useCallback(
    (event: any) => {
      const value = dom.getTargetVal(event);
      if (value === 'recent' || value === 'file') {
        setSelected(value);
      } else {
        setSelected(uuid.parse(value));
      }
    },
    [setSelected]
  );

  const isValidColor = useCallback(
    (color: LibraryColor) => {
      return (
        (!disableGradient || !color.gradient) &&
        (!disableOpacity || color.opacity === 1) &&
        (!disableImage || !color.image)
      );
    },
    [disableGradient, disableOpacity, disableImage]
  );

  const togglePalette = useCallback(() => {
    r.setResizeType('bottom');
    dom.addClass(dom.getElementByClass('color-palette'), 'fade-out-down');
    emit(
      dw.removeLayoutFlag('textpalette'),
      ptk.event(ev.event, {
        name: ev.event,
        origin: 'workspace-colorpicker',
      })
    );
  }, []);

  const onColorClick = useCallback(
    (event: React.MouseEvent) => {
      if (selected !== 'recent') {
        emit(
          ptk.event(ev.event, {
            name: 'use-library-color',
            origin: 'colorpicker',
            'external-library': selected !== 'file',
          })
        );
      }
      onSelectColor(state, event);
    },
    [selected, state, onSelectColor]
  );

  useEffect(() => {
    const resolvedFileId = selected === 'file' ? fileId : selected;

    let colors: any[] = [];
    if (selected === 'recent') {
      colors = validRecentColors
        .filter(isValidColor)
        .map((color, index) => {
          const mappedColor = typeof color === 'string' ? { color } : color;
          return { ...mappedColor, id: index };
        })
        .sort(ctc.sortColors);
    } else if (libraries && libraries[resolvedFileId]) {
      const libraryColors = libraries[resolvedFileId].data?.colors;
      colors = Object.values(libraryColors || {})
        .filter(isValidColor)
        .sort((a: any, b: any) => a.name.localeCompare(b.name))
        .map((color: any, index: number) =>
          ctc.libraryColorToColor(color, resolvedFileId)
        );
    }

    setCurrentColors(colors);
  }, [selected, validRecentColors, libraries, fileId, isValidColor]);

  return (
    <div className={stl.css('libraries')}>
      <div className={stl.css('select-wrapper')}>
        <Select
          className={stl.css('shadow-type-select')}
          dataDirection="up"
          defaultValue={d.name(selected) || 'recent'}
          options={options}
          onChange={onLibraryChange}
        />
      </div>

      <div className={stl.css('selected-colors')}>
        {selected === 'file' && (
          <button
            className={stl.css('add-color-btn')}
            onClick={onAddLibraryColor}
          >
            {deprecatedIcon.add}
          </button>
        )}

        <button className={stl.css('palette-btn')} onClick={togglePalette}>
          {deprecatedIcon.swatches}
        </button>

        {currentColors.map((color: any) => (
          <ColorBullet
            key={color.id}
            color={color}
            onClick={onColorClick}
          />
        ))}
      </div>
    </div>
  );
};
