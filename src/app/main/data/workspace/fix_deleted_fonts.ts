// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as cfh from "../../../common/files/helpers";
import * as txt from "../../../common/types/text";
import * as dwc from "../changes";
import * as dsh from "../helpers";
import { fontsdb } from "../../fonts";
import { Observable, of, from, reduce, map, filter } from "rxjs";
import * as ptk from "../../../potok/v2/ptk";

// This event will update the file so the texts with non existing
// custom fonts try to be fixed. This can happen when:
//
// - Exporting/importing files to different teams or penpot instances
// - Moving files from one team to another in the same instance
// - Custom fonts are explicitly deleted in the team area

function calculateAlternativeFontId(value: string): string | null {
  const fonts = fontsdb;
  for (const [id, font] of Object.entries(fonts)) {
    if ((font as any).family === value) {
      return id;
    }
  }
  return null;
}

function hasInvalidFontFamily(node: any): boolean {
  const fonts = fontsdb;
  const fontFamily = node.fontFamily;
  return fontFamily !== null && fontFamily !== undefined && !fonts[node.fontId];
}

function shapeHasInvalidFontFamily(shape: any): boolean {
  if (!cfh.textShape(shape)) {
    return false;
  }

  const nodes = txt.nodeSeq(txt.isTextNode, shape.content);
  return nodes.some(hasInvalidFontFamily);
}

function fixDeletedFont(node: any): any {
  const alternativeFontId = calculateAlternativeFontId(node.fontFamily);
  if (alternativeFontId) {
    return { ...node, fontId: alternativeFontId };
  }
  return node;
}

function fixShapeContent(shape: any): any {
  return txt.transformNodes(
    hasInvalidFontFamily,
    fixDeletedFont,
    shape.content
  );
}

function fixTypography(typography: any): any {
  const alternativeFontId = calculateAlternativeFontId(typography.fontFamily);
  if (alternativeFontId) {
    return { ...typography, fontId: alternativeFontId };
  }
  return typography;
}

function generatePageChanges(page: any): any[] {
  const changes: any[] = [];
  const objects = page.objects;

  for (const [shapeId, shape] of Object.entries(objects)) {
    if (shapeHasInvalidFontFamily(shape)) {
      changes.push({
        type: "mod-obj",
        id: shapeId,
        pageId: page.id,
        operations: [
          {
            type: "set",
            attr: "content",
            val: fixShapeContent(shape),
          },
          {
            type: "set",
            attr: "position-data",
            val: null,
          },
        ],
      });
    }
  }

  return changes;
}

function generateLibraryChanges(fdata: any): any[] {
  const changes: any[] = [];
  const typographies = fdata.typographies || {};

  for (const [id, typography] of Object.entries(typographies)) {
    if (hasInvalidFontFamily(typography)) {
      changes.push({
        type: "mod-typography",
        typography: fixTypography(typography),
      });
    }
  }

  return changes;
}

export function fixDeletedFontsForLocalLibrary(
  fileId: string
): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace.fix-deleted-fonts/fix-deleted-fonts-for-local-library",
    watch(it: any, state: any, _stream: any): Observable<any> {
      const fdata = dsh.lookupFileData(state, fileId);
      const changes = generateLibraryChanges(fdata);

      if (changes.length === 0) {
        return of();
      }

      return of(
        dwc.commitChanges({
          origin: it,
          redoChanges: changes,
          undoChanges: [],
          saveUndo: false,
          ignoreWasm: true,
        })
      );
    },
  };
}

// FIXME: would be nice to not execute this code twice per page in the
// same working session, maybe some local memoization can improve that

export function fixDeletedFontsForPage(
  fileId: string,
  pageId: string
): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace.fix-deleted-fonts/fix-deleted-fonts-for-page",
    watch(it: any, state: any, _stream: any): Observable<any> {
      const page = dsh.lookupPage(state, fileId, pageId);
      const changes = generatePageChanges(page);

      if (changes.length === 0) {
        return of();
      }

      return of(
        dwc.commitChanges({
          origin: it,
          redoChanges: changes,
          undoChanges: [],
          saveUndo: false,
          ignoreWasm: true,
        })
      );
    },
  };
}
