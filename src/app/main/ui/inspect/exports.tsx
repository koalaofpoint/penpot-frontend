// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from 'react';
import { useSelector } from 'react-redux';
import * as d from 'app/common/data';
import * as de from 'app/main/data/exports/assets';
import * as refs from 'app/main/refs';
import * as st from 'app/main/store';
import { Select } from 'app/main/ui/components/select';
import { TitleBar } from 'app/main/ui/components/title-bar';
import { tr, c } from 'app/util/i18n';
import * as dom from 'app/util/dom';
import * as kbd from 'app/util/keyboard';

interface Export {
  type: string;
  suffix: string;
  scale: number;
}

interface ExportsProps {
  shapes: any[];
  pageId?: string;
  fileId?: string;
  shareId?: string;
  type?: string;
}

export function Exports({
  shapes,
  pageId,
  fileId,
  shareId,
  type
}: ExportsProps) {
  const [exports, setExports] = React.useState<Export[]>([]);
  const xstate = useSelector((state: any) => state.export);
  const vstate = useSelector((state: any) => state.viewerData);

  const page = vstate?.pages?.[pageId];
  const filename = React.useMemo(() => {
    if (shapes.length === 1) {
      const sname = shapes[0].name;
      const suffix = exports[0]?.suffix;
      if (exports.length === 1 && suffix) {
        return `${sname}${suffix}`;
      }
      return sname;
    }
    return page?.name || 'export';
  }, [shapes, exports, page]);

  const inProgress = xstate?.inProgress;

  const scaleEnabled = React.useCallback((exportItem: Export) => {
    return ['png', 'jpeg', 'webp'].includes(exportItem.type);
  }, []);

  const onDownload = React.useCallback((event: React.MouseEvent) => {
    dom.preventDefault(event);

    if (type === 'multiple') {
      st.emit(
        de.showViewerExportDialog({
          shapes,
          exports,
          filename,
          pageId,
          fileId,
          shareId
        })
      );
    } else {
      const defaults = {
        pageId,
        fileId,
        name: filename,
        objectId: shapes[0]?.id,
        ...(shareId ? { shareId } : {})
      };
      const exportItems = exports.map(exp => ({ ...exp, ...defaults }));
      st.emit(
        de.requestExport({ exports: exportItems }),
        de.exportShapesEvent(exportItems, 'viewer')
      );
    }
  }, [shapes, exports, filename, pageId, fileId, shareId, type]);

  const addExport = React.useCallback(() => {
    const xspec: Export = {
      type: 'png',
      suffix: '',
      scale: 1
    };
    setExports(prev => [...prev, xspec]);
  }, []);

  const deleteExport = React.useCallback((index: number) => {
    setExports(prev => {
      const before = prev.slice(0, index);
      const after = prev.slice(index + 1);
      return [...before, ...after];
    });
  }, []);

  const onScaleChange = React.useCallback((index: number, event: React.ChangeEvent<HTMLSelectElement>) => {
    const scale = d.parseDouble(event.target.value);
    setExports(prev => d.assocIn(prev, [index, 'scale'], scale));
  }, []);

  const onSuffixChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const index = parseInt(dom.getData(event.target, 'value') || '0', 10);
    setExports(prev => d.assocIn(prev, [index, 'suffix'], value));
  }, []);

  const onTypeChange = React.useCallback((index: number, event: React.ChangeEvent<HTMLSelectElement>) => {
    const type = event.target.value as keyof typeof exportTypes;
    setExports(prev => d.assocIn(prev, [index, 'type'], type));
  }, []);

  const manageKeyDown = React.useCallback((event: React.KeyboardEvent) => {
    if (kbd.esc(event)) {
      dom.blur(event.target as HTMLElement);
    }
  }, []);

  React.useEffect(() => {
    const exportList = shapes
      .flatMap(shape => shape.exports || [])
      .filter(Boolean);
    setExports(d.distinct(exportList));
  }, [shapes]);

  const sizeOptions = [
    { value: '0.5', label: '0.5x' },
    { value: '0.75', label: '0.75x' },
    { value: '1', label: '1x' },
    { value: '1.5', label: '1.5x' },
    { value: '2', label: '2x' },
    { value: '4', label: '4x' },
    { value: '6', label: '6x' }
  ];

  const formatOptions = [
    { value: 'png', label: 'PNG' },
    { value: 'jpeg', label: 'JPG' },
    { value: 'webp', label: 'WEBP' },
    { value: 'svg', label: 'SVG' },
    { value: 'pdf', label: 'PDF' }
  ];

  return (
    <div className="element-set">
      <div className="element-title">
        <TitleBar
          title={tr('workspace.options.export')}
          className="title-spacing-export-viewer"
        >
          <button className="add-export" onClick={addExport}>
            +
          </button>
        </TitleBar>
      </div>

      {exports.length === 0 ? null : (
        <div className="element-set-content">
          {exports.map((exp, index) => (
            <div key={index} className="element-group">
              <div className="input-wrapper">
                <div className="format-select">
                  <Select
                    defaultValue={exp.type}
                    options={formatOptions}
                    dropdownClass="dropdown-upwards"
                    onChange={(value) => onTypeChange(index, value as any)}
                  />
                </div>
                {scaleEnabled(exp) && (
                  <div className="size-select">
                    <Select
                      defaultValue={String(exp.scale)}
                      options={sizeOptions}
                      dropdownClass="dropdown-upwards"
                      onChange={(value) => onScaleChange(index, value as any)}
                    />
                  </div>
                )}
                <label className="suffix-input" htmlFor="suffix-export-input">
                  <input
                    className="type-input"
                    id="suffix-export-input"
                    type="text"
                    value={exp.suffix}
                    placeholder={tr('workspace.options.export.suffix')}
                    data-value={String(index)}
                    onChange={onSuffixChange}
                    onKeyDown={manageKeyDown}
                  />
                </label>
              </div>
              <button className="action-btn" onClick={() => deleteExport(index)}>
                -
              </button>
            </div>
          ))}
        </div>
      )}

      {exports.length > 0 && (
        <button
          onClick={inProgress ? undefined : onDownload}
          className={`export-btn ${inProgress ? 'btn-disabled' : ''}`}
          disabled={inProgress}
        >
          {inProgress
            ? tr('workspace.options.exporting-object')
            : tr('workspace.options.export-object', c(shapes.length))}
        </button>
      )}
    </div>
  );
}
