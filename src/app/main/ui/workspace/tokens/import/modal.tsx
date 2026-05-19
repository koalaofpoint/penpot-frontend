// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as stl from 'app/main/style';
import * as ev from 'app/main/data/event';
import * as modal from 'app/main/data/modal';
import * as ntf from 'app/main/data/notifications';
import * as dwte from 'app/main/data/workspace/tokens/errors';
import * as dwti from 'app/main/data/workspace/tokens/import-export';
import * as dwtl from 'app/main/data/workspace/tokens/library-edit';
import { emit } from 'app/main/store';
import { Dropdown } from 'app/main/ui/components/dropdown';
import { Button } from 'app/main/ui/ds/buttons/button';
import { OptionsDropdown } from 'app/main/ui/ds/controls/shared/options-dropdown';
import * as i from 'app/main/ui/ds/foundations/assets/icon';
import { Heading } from 'app/main/ui/ds/foundations/typography/heading';
import { Text } from 'app/main/ui/ds/foundations/typography/text';
import { ContextNotification } from 'app/main/ui/ds/notifications/context-notification';
import * as dom from 'app/util/dom';
import * as i18n from 'app/util/i18n';
import * as wapi from 'app/util/webapi';
import * as uz from 'app/util/zip';
import * as str from 'cuerdas.core';
import * as ptk from 'potok.v2.core';
import React, { useCallback, useRef, useState } from 'react';

const { tr } = i18n;

const onStreamImported = (type: string, tokensLibStream: any) => {
  // Stream subscription handling would go here
  // This is simplified - actual implementation would use rxjs
};

interface ImportTypeDropdownProps {
  options: { label: string; value: string }[];
  onClick?: (value: string) => void;
  textRender?: (option: any) => string;
  default?: string;
}

const ImportTypeDropdown: React.FC<ImportTypeDropdownProps> = ({
  options,
  onClick,
  textRender,
  default: defaultValue,
}) => {
  const initialOption =
    options.find((o) => o.value === defaultValue) || options[0];
  const [selectedOption, setSelectedOption] = useState(initialOption);
  const [showDropdown, setShowDropdown] = useState(false);

  const fileTypeOptions = options.map((option) => ({
    id: option.value,
    label: option.label,
    ariaLabel: option.label,
  }));

  const buttonText = textRender
    ? textRender(selectedOption)
    : selectedOption.label;

  const toggleDropdown = useCallback(
    (e: React.MouseEvent) => {
      dom.preventDefault(e);
      dom.stopPropagation(e);
      setShowDropdown((s) => !s);
    },
    []
  );

  const closeDropdown = useCallback(() => {
    setShowDropdown(false);
  }, []);

  const handleOptionClick = useCallback(
    (e: React.MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const optionId = dom.getAttribute(target, 'id');
      const option = options.find((o) => str(o.value) === optionId);
      closeDropdown();
      if (option) {
        setSelectedOption(option);
      }
    },
    [options, closeDropdown]
  );

  const handleMainClick = useCallback(
    (e: React.MouseEvent) => {
      dom.preventDefault(e);
      if (selectedOption && onClick) {
        onClick(selectedOption.value);
      }
    },
    [selectedOption, onClick]
  );

  return (
    <div className={stl.css('dropdown-btn-wrapper')}>
      <Button
        variant="primary"
        type="button"
        className={stl.css('dropdown-btn')}
        onClick={handleMainClick}
      >
        {buttonText}
      </Button>

      <Button
        variant="primary"
        type="button"
        className={stl.css('dropdown-trigger-btn')}
        icon={i.arrowDown}
        onClick={toggleDropdown}
        aria-label="Show options"
      />

      <Dropdown show={showDropdown} onClose={closeDropdown}>
        <OptionsDropdown
          options={fileTypeOptions}
          selected={selectedOption.value}
          onClick={handleOptionClick}
        />
      </Dropdown>
    </div>
  );
};

const hasTokenFiles = (filePaths: string[]): boolean => {
  return (
    filePaths.length > 0 && filePaths.some((f) => str.endsWith(f, '.json'))
  );
};

export const ImportModalBody: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dirInputRef = useRef<HTMLInputElement>(null);
  const zipInputRef = useRef<HTMLInputElement>(null);

  const onDisplayFileExplorer = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const onDisplayDirExplorer = useCallback(() => {
    dirInputRef.current?.click();
  }, []);

  const onDisplayZipExplorer = useCallback(() => {
    zipInputRef.current?.click();
  }, []);

  const handleImportAction = useCallback(
    (val: string) => {
      switch (val) {
        case 'file':
          onDisplayFileExplorer();
          break;
        case 'folder':
          onDisplayDirExplorer();
          break;
        case 'zip':
          onDisplayZipExplorer();
          break;
      }
    },
    [onDisplayFileExplorer, onDisplayDirExplorer, onDisplayZipExplorer]
  );

  const onImportJsonFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      wapi.readFileAsText(file).then((text) => {
        const stream = dwti.importFileStream(file.name, text);
        onStreamImported('single', stream);
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    },
    []
  );

  const onImportDirectory = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || []).filter((file) => {
        const name = file.name;
        const type = file.type;
        return (
          type === 'application/json' || str.endsWith(name, '.json')
        );
      });

      // Process files and import
      const filePromises = files.map((file) =>
        wapi.readFileAsText(file).then((text) => [
          file.webkitRelativePath || file.name,
          text,
        ])
      );

      Promise.all(filePromises).then((fileEntries) => {
        if (!hasTokenFiles(fileEntries.map(([path]) => path))) {
          emit(
            ntf.show({
              content: 'No token files found',
              type: 'toast',
              level: 'error',
            })
          );
          return;
        }
        const stream = dwti.importDirectoryStream(fileEntries);
        onStreamImported('multiple', stream);
      });

      if (dirInputRef.current) {
        dirInputRef.current.value = '';
      }
    },
    []
  );

  const onImportZipFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const zipfile = e.target.files?.[0];
      if (!zipfile) return;

      const zipfileName = str.stripSuffix(zipfile.name, '.zip');

      wapi.readFileAsArrayBuffer(zipfile).then((buffer) => {
        const reader = uz.reader(buffer);
        uz.getEntries(reader).then((entries) => {
          const jsonEntries = entries.filter((entry: any) =>
            str.endsWith(entry.filename, '.json')
          );

          const contentPromises = jsonEntries.map((entry: any) => {
            const filename = `${zipfileName}/${entry.filename}`;
            return uz.readAsText(entry).then((text: string) => [
              filename,
              text,
            ]);
          });

          Promise.all(contentPromises).then((fileEntries) => {
            if (!hasTokenFiles(fileEntries.map(([path]) => path))) {
              emit(
                ntf.show({
                  content: 'No token files found',
                  type: 'toast',
                  level: 'error',
                })
              );
              return;
            }
            const stream = dwti.importDirectoryStream(fileEntries);
            onStreamImported('zip', stream);
          });

          uz.close(reader);
        });
      });

      if (zipInputRef.current) {
        zipInputRef.current.value = '';
      }
    },
    []
  );

  const renderButtonText = useCallback(
    (option: any) => {
      return tr('workspace.tokens.import-button-prefix', option.label);
    },
    []
  );

  return (
    <div className={stl.css('import-modal-wrapper')}>
      <Heading
        level={2}
        typography="headline-medium"
        className={stl.css('import-modal-title')}
      >
        {tr('workspace.tokens.import-tokens')}
      </Heading>

      <Text as="ul" typography="body-medium" className={stl.css('import-description')}>
        <li>{tr('workspace.tokens.import-single-file')}</li>
        <li>{tr('workspace.tokens.import-multiple-files')}</li>
      </Text>

      <ContextNotification
        type="context"
        appearance="neutral"
        level="default"
        isHtml={true}
      >
        {tr('workspace.tokens.import-warning')}
      </ContextNotification>

      <div className={stl.css('import-actions')}>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          accept=".json"
          onChange={onImportJsonFile}
        />
        <input
          type="file"
          ref={zipInputRef}
          style={{ display: 'none' }}
          accept=".zip"
          onChange={onImportZipFile}
        />
        <input
          type="file"
          ref={dirInputRef}
          style={{ display: 'none' }}
          accept=""
          webkitdirectory="true"
          onChange={onImportDirectory}
        />
        <Button variant="secondary" type="button" onClick={modal.hide}>
          {tr('labels.cancel')}
        </Button>
        <ImportTypeDropdown
          options={[
            {
              label: tr('workspace.tokens.import-menu-json-option'),
              value: 'file',
            },
            {
              label: tr('workspace.tokens.import-menu-zip-option'),
              value: 'zip',
            },
            {
              label: tr('workspace.tokens.import-menu-folder-option'),
              value: 'folder',
            },
          ]}
          onClick={handleImportAction}
          textRender={renderButtonText}
          default="file"
        />
      </div>
    </div>
  );
};
