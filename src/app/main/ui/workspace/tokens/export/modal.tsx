// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as stl from 'app/main/style';
import * as json from 'app/common/json';
import * as ctob from 'app/common/types/tokens-lib';
import * as ev from 'app/main/data/event';
import * as modal from 'app/main/data/modal';
import * as refs from 'app/main/refs';
import { emit } from 'app/main/store';
import { CodeBlock } from 'app/main/ui/components/code-block';
import { Button } from 'app/main/ui/ds/buttons/button';
import { Icon } from 'app/main/ui/ds/foundations/assets/icon';
import { Heading } from 'app/main/ui/ds/foundations/typography/heading';
import { Text } from 'app/main/ui/ds/foundations/typography/text';
import { TabSwitcher } from 'app/main/ui/ds/layout/tab-switcher';
import * as dom from 'app/util/dom';
import * as i18n from 'app/util/i18n';
import * as wapi from 'app/util/webapi';
import * as zip from 'app/util/zip';
import * as ptk from 'potok.v2.core';
import React, { useCallback, useMemo, useState } from 'react';

const { tr } = i18n;

interface ExportTabProps {
  isDisabled?: boolean;
  onExport?: () => void;
  children?: React.ReactNode;
}

const ExportTab: React.FC<ExportTabProps> = ({
  isDisabled = false,
  onExport,
  children,
}) => (
  <div className={stl.css('export-preview')}>
    {!isDisabled && (
      <Text
        as="span"
        typography="body-medium"
        className={stl.css('preview-label')}
      >
        {tr('workspace.tokens.export.preview')}
      </Text>
    )}
    {isDisabled ? (
      <div className={stl.css('disabled-message')}>
        {tr('workspace.tokens.export.no-tokens-themes-sets')}
      </div>
    ) : (
      children
    )}
    <div className={stl.css('export-actions')}>
      <Button variant="secondary" type="button" onClick={modal.hide}>
        {tr('labels.cancel')}
      </Button>
      <Button
        variant="primary"
        type="button"
        disabled={isDisabled}
        onClick={onExport}
      >
        {tr('workspace.tokens.export')}
      </Button>
    </div>
  </div>
);

const SingleFileTab: React.FC = () => {
  const tokensLib = refs.tokensLib;
  const tokensData = tokensLib ? ctob.exportDtcgJson(tokensLib) : null;
  const tokensJson = tokensData
    ? json.encode(tokensData, { keyFn: (k: any) => k, indent: 2 })
    : null;
  const isDisabled = !tokensData || tokensData.length === 0;

  const onExport = useCallback(() => {
    if (!tokensJson) return;
    emit(
      ptk.dataEvent(ev.event, {
        name: 'export-tokens',
        type: 'single',
      })
    );
    const blob = wapi.createBlob(tokensJson || '{}', 'application/json');
    dom.triggerDownload('tokens.json', blob);
  }, [tokensJson]);

  return (
    <ExportTab isDisabled={isDisabled} onExport={onExport}>
      <div className={stl.css('json-preview')}>
        <CodeBlock code={tokensJson || ''} type="json" />
      </div>
    </ExportTab>
  );
};

const downloadTokensZip = (multiFileEntries: [string, any][]) => {
  const writer = zip.blobWriter({ mtype: 'application/zip' });
  multiFileEntries.forEach(([path, content]) => {
    zip.add(writer, path, json.encode(content, { keyFn: (k: any) => k, indent: 2 }));
  });
  zip.close(writer).then((blob: Blob) => {
    dom.triggerDownload('tokens.zip', blob);
  });
};

const MultiFileTab: React.FC = () => {
  const tokensLib = refs.tokensLib;
  const files = tokensLib ? ctob.exportDtcgMultiFile(tokensLib) : null;
  const isDisabled =
    !files ||
    files.length === 0 ||
    files.every(([_, v]) => !v || v.length === 0);

  const onExport = useCallback(() => {
    if (!files) return;
    emit(
      ptk.dataEvent(ev.event, {
        name: 'export-tokens',
        type: 'multiple',
      })
    );
    downloadTokensZip(files);
  }, [files]);

  return (
    <ExportTab isDisabled={isDisabled} onExport={onExport}>
      <div className={stl.css('preview-container')}>
        <ul className={stl.css('file-list')}>
          {files?.map(([path]) => (
            <li key={path} className={stl.css('file-item')}>
              <div className={stl.css('file-icon')}>
                <Icon iconId="document" />
              </div>
              <div className={stl.css('file-name')} title={path}>
                {path}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </ExportTab>
  );
};

export const ExportModalBody: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('single');

  const tabs = [
    { label: tr('workspace.tokens.export.single-file'), id: 'single' },
    { label: tr('workspace.tokens.export.multiple-files'), id: 'multiple' },
  ];

  return (
    <div className={stl.css('export-modal-wrapper')}>
      <Heading
        level={2}
        typography="headline-medium"
        className={stl.css('export-modal-title')}
      >
        {tr('workspace.tokens.export-tokens')}
      </Heading>

      <TabSwitcher tabs={tabs} selected={selectedTab} onChange={setSelectedTab}>
        {selectedTab === 'single' ? <SingleFileTab /> : <MultiFileTab />}
      </TabSwitcher>
    </div>
  );
};
