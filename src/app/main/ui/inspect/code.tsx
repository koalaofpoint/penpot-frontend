// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from 'react';
import { CodeBlock } from 'app/main/ui/components/code-block';
import { CopyButton } from 'app/main/ui/components/copy-button';
import { RadioButton, RadioButtons } from 'app/main/ui/components/radio-buttons';
import { useResizeHook } from 'app/main/ui/hooks/resize';
import * as cfg from 'app/config';
import * as cfh from 'app/common/files/helpers';
import * as gsh from 'app/common/geom/shapes';
import * as ctst from 'app/common/types/shape-tree';
import * as fonts from 'app/main/fonts';
import * as refs from 'app/main/refs';
import * as st from 'app/main/store';
import { shapesToFonts } from 'app/main/ui/shapes/text/fontfaces';
import * as clipboard from 'app/util/clipboard';
import * as cb from 'app/util/code-beautify';
import * as cg from 'app/util/code-gen';
import * as http from 'app/util/http';
import { fromEvent, mergeMap, catchError, reduce } from 'rxjs';

const embedImages = true;
const removeLocalhost = true;

const pageTemplate = `<!DOCTYPE html>
<html>
  <head>
    <style>
    %s
    </style>
  </head>
  <body>
  %s
  </body>
</html>`;

function getViewerObjects(pageId?: string) {
  const route = st.getState().route;
  const actualPageId = pageId || route?.queryParams?.pageId;
  return refs.getViewerObjects(st.getState(), actualPageId);
}

function useObjects(from: 'workspace' | 'viewer') {
  const pageObjectsRef = React.useMemo(() => {
    if (from === 'workspace') {
      return refs.workspacePageObjects;
    }
    return getViewerObjects();
  }, [from]);

  return st.getState(pageObjectsRef);
}

function shapesToImages(shapes: any[]): [string, string][] {
  return shapes
    .map(shape => {
      const data = shape.metadata || shape.fillImage || (shape.fills?.[0]?.fillImage);
      if (data) {
        return [shape.id, cfg.resolveFileMedia(data)];
      }
      return null;
    })
    .filter(Boolean) as [string, string][];
}

function replaceMap(value: string, map: Record<string, string>): string {
  return Object.entries(map).reduce(
    (acc, [old, newVal]) => acc.replace(old, newVal),
    value
  );
}

function genAllCode(styleCode: string, markupCode: string, imagesData: Record<string, string>): string {
  let styleCodeFinal = styleCode;
  let markupCodeFinal = markupCode;

  if (embedImages) {
    styleCodeFinal = replaceMap(styleCodeFinal, imagesData);
    markupCodeFinal = replaceMap(markupCodeFinal, imagesData);
  }

  return pageTemplate.replace('%s', styleCodeFinal).replace('%s', markupCodeFinal);
}

interface CodeProps {
  shapes: any[];
  frame?: any;
  onExpand?: () => void;
  from?: 'workspace' | 'viewer';
}

export function Code({ shapes, frame, onExpand, from = 'viewer' }: CodeProps) {
  const [styleType, setStyleType] = React.useState('css');
  const [markupType, setMarkupType] = React.useState('html');
  const [fontfacesCss, setFontfacesCss] = React.useState<string | null>(null);
  const [imagesData, setImagesData] = React.useState<Record<string, string>>({});
  const [collapsed, setCollapsed] = React.useState<Set<string>>(new Set());

  const objects = useObjects(from);

  const translatedShapes = React.useMemo(() => {
    return shapes.map(shape => gsh.translateToFrame(shape, frame));
  }, [shapes, frame]);

  const allChildren = React.useMemo(() => {
    return translatedShapes
      .map(shape => shape.id)
      .flatMap(id => cfh.selectedWithChildren(objects, id))
      .sort((a, b) => ctst.sortByZIndex(objects, a, b))
      .map(id => objects[id])
      .filter(Boolean);
  }, [translatedShapes, objects]);

  const fontsList = React.useMemo(() => {
    return shapesToFonts(allChildren);
  }, [allChildren]);

  const imagesUrls = React.useMemo(() => {
    return shapesToImages(allChildren);
  }, [allChildren]);

  const styleCode = React.useMemo(() => {
    const cssCode = cg.generateStyleCode(objects, styleType, translatedShapes, allChildren);
    return `${fontfacesCss || ''}\n${cb.formatCode(cssCode, styleType)}`;
  }, [fontfacesCss, styleType, objects, translatedShapes, allChildren]);

  const markupCode = React.useMemo(() => {
    return cg.generateFormattedMarkupCode(objects, markupType, translatedShapes);
  }, [objects, markupType, translatedShapes]);

  const onMarkupCopied = React.useCallback(() => {
    const origin = from === 'workspace' ? 'workspace' : 'viewer';
    st.emit({
      type: 'track-event',
      name: 'copy-inspect-code',
      origin,
      data: { type: markupType }
    });
  }, [markupType, from]);

  const onStyleCopied = React.useCallback(() => {
    const origin = from === 'workspace' ? 'workspace' : 'viewer';
    st.emit({
      type: 'track-event',
      name: 'copy-inspect-style',
      origin,
      data: { type: styleType }
    });
  }, [styleType, from]);

  const {
    onPointerDown: onMarkupPointerDown,
    onLostPointerCapture: onMarkupLostPointerCapture,
    onPointerMove: onMarkupPointerMove,
    size: markupSize
  } = useResizeHook('code', 400, 100, 800, 'y', false, 'bottom');

  const {
    onPointerDown: onStylePointerDown,
    onLostPointerCapture: onStyleLostPointerCapture,
    onPointerMove: onStylePointerMove,
    size: styleSize
  } = useResizeHook('code', 400, 100, 800, 'y', false, 'bottom');

  const setMarkup = React.useCallback((value: string) => {
    setMarkupType(value);
  }, []);

  const handleCopyAllCode = React.useCallback(() => {
    clipboard.toClipboard(genAllCode(styleCode, markupCode, imagesData));
    const origin = from === 'workspace' ? 'workspace' : 'viewer';
    st.emit({
      type: 'track-event',
      name: 'copy-inspect-code',
      origin,
      data: { type: 'all' }
    });
  }, [styleCode, markupCode, imagesData, from]);

  const handleCollapse = React.useCallback((event: React.MouseEvent) => {
    const panelType = (event.currentTarget as HTMLElement).getAttribute('data-type') as string;
    setCollapsed(prev => {
      const next = new Set(prev);
      if (next.has(panelType)) {
        next.delete(panelType);
      } else {
        next.add(panelType);
      }
      return next;
    });
  }, []);

  const copyCssFn = React.useCallback(() => {
    return replaceMap(styleCode, imagesData);
  }, [styleCode, imagesData]);

  const copyHtmlFn = React.useCallback(() => {
    return replaceMap(markupCode, imagesData);
  }, [markupCode, imagesData]);

  React.useEffect(() => {
    if (!fontsList || fontsList.length === 0) return;

    const subscription = from(fontsList)
      .pipe(
        mergeMap(font => fonts.fetchFontCss(font)),
        reduce((acc: string[], result: string) => [...acc, result], []),
        catchError(() => [])
      )
      .subscribe(cssList => {
        setFontfacesCss(cssList.join('\n'));
      });

    return () => subscription.unsubscribe();
  }, [fontsList]);

  React.useEffect(() => {
    if (!imagesUrls || imagesUrls.length === 0) {
      setImagesData({});
      return;
    }

    const subscription = from(imagesUrls)
      .pipe(
        mergeMap(([id, uri]) =>
          http.fetchDataUri(uri, true).pipe(
            catchError(() => [uri])
          ).pipe(
            map((dataUri: string) => [id, dataUri])
          )
        ),
        reduce((acc: Record<string, string>, [id, dataUri]: [string, string]) => {
          acc[id] = dataUri;
          return acc;
        }, {})
      )
      .subscribe(result => {
        setImagesData(result);
      });

    return () => subscription.unsubscribe();
  }, [imagesUrls]);

  const collapsedCss = collapsed.has('css');
  const collapsedMarkup = collapsed.has('markup');

  return (
    <div className={`element-options ${from === 'viewer' ? 'viewer-code-block' : ''}`}>
      <div className="attributes-block">
        <button className="download-button" onClick={handleCopyAllCode}>
          Copy all code
        </button>
      </div>

      <div className={`code-block ${collapsedCss ? 'collapsed' : ''}`}>
        <div className="code-row-lang">
          <button
            className="toggle-btn"
            data-type="css"
            onClick={handleCollapse}
          >
            <span className={`collapsabled-icon ${collapsedCss ? 'rotated' : ''}`}>
              arrow
            </span>
          </button>
          <div className="code-lang-option">CSS</div>
          <div className="action-btns">
            <button className="expand-button" onClick={onExpand}>
              code
            </button>
            <CopyButton
              data={copyCssFn}
              className="css-copy-btn"
              onCopied={onStyleCopied}
            />
          </div>
        </div>
        {!collapsedCss && (
          <div
            className="code-row-display"
            style={{ '--code-height': `${styleSize || 400}px` } as React.CSSProperties}
          >
            <CodeBlock type={styleType} code={styleCode} />
          </div>
        )}
        <div
          className="resize-area"
          onPointerDown={onStylePointerDown}
          onLostPointerCapture={onStyleLostPointerCapture}
          onPointerMove={onStylePointerMove}
        />
      </div>

      <div className={`code-block ${collapsedMarkup ? 'collapsed' : ''}`}>
        <div className="code-row-lang">
          <button
            className="toggle-btn"
            data-type="markup"
            onClick={handleCollapse}
          >
            <span className={`collapsabled-icon ${collapsedMarkup ? 'rotated' : ''}`}>
              arrow
            </span>
          </button>
          <RadioButtons
            selected={markupType}
            onChange={setMarkup}
            className="code-lang-options"
            wide
            name="listing-style"
          >
            <RadioButton value="html" id="html" />
            <RadioButton value="svg" id="svg" />
          </RadioButtons>
          <div className="action-btns">
            <button className="expand-button" onClick={onExpand}>
              code
            </button>
            <CopyButton
              data={copyHtmlFn}
              className="html-copy-btn"
              onCopied={onMarkupCopied}
            />
          </div>
        </div>
        {!collapsedMarkup && (
          <div
            className="code-row-display"
            style={{ '--code-height': `${markupSize || 400}px` } as React.CSSProperties}
          >
            <CodeBlock type={markupType} code={markupCode} />
          </div>
        )}
        <div
          className="resize-area"
          onPointerDown={onMarkupPointerDown}
          onLostPointerCapture={onMarkupLostPointerCapture}
          onPointerMove={onMarkupPointerMove}
        />
      </div>
    </div>
  );
}
