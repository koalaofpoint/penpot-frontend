// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from "../../../common/data";
import { assert, getIn, nilv } from "../../../common/data/macros";
import * as ex from "../../../common/exceptions";
import * as pcb from "../../../common/files/changes-builder";
import * as cfh from "../../../common/files/helpers";
import * as sb from "../../../common/files/shapes-builder";
import * as csvg from "../../../common/svg";
import * as ctst from "../../../common/types/shape-tree";
import { next as uuidNext } from "../../../common/uuid";
import * as dch from "../changes";
import * as dsh from "../helpers";
import * as dws from "./selection";
import * as dwu from "./undo";
import * as rp from "../../../repo";
import * as wapi from "../../../util/webapi";
import { Observable, from, of, map, filter, concatMap, catchError, reduce, throwError, of as ofVal } from "rxjs";
import * as ptk from "../../../potok/v2/ptk";
import * as str from "cuerdas/core";

export function extractName(href: string): string {
  const queryIdx = str.lastIndexOf(href, "?");
  const cleanedHref = queryIdx > 0 ? href.substring(0, queryIdx) : href;
  const filename = str.last(cleanedHref.split("/"));
  const extIdx = str.lastIndexOf(filename, ".");
  return extIdx > 0 ? filename.substring(0, extIdx) : filename;
}

export function uploadImages(
  svgData: string,
  fileId: string
): Observable<Map<string, any>> {
  return from(csvg.collectImages(svgData)).pipe(
    map((item: any) => {
      const updatedItem = {
        ...item,
        fileId,
        isLocal: true,
        name: "image",
      };

      if (str.startsWith(item.href, "data:")) {
        return {
          ...updatedItem,
          content: wapi.dataUriToBlob(item.href),
        };
      }

      return {
        ...updatedItem,
        name: extractName(item.href),
        url: item.href,
      };
    }),
    concatMap((item: any) => {
      const cmd = item.content ? "upload-file-media-object" : "create-file-media-object-from-url";
      const { href, ...rest } = item;

      return from(rp.cmd!(cmd, rest)).pipe(
        catchError(() => of(null)),
        map((result: any) => [href, result])
      );
    }),
    reduce((acc: Map<string, any>, [href, result]: [string, any]) => {
      if (result) {
        acc.set(href, result);
      }
      return acc;
    }, new Map())
  );
}

export function addSvgShapes(
  id: string | null,
  svgData: string,
  position: any,
  options: {
    changeSelection?: boolean;
    ignoreSelection?: boolean;
  } = {}
): ptk.WatchEvent {
  const {
    changeSelection = true,
    ignoreSelection = false,
  } = options;

  return {
    type: "app.main.data.workspace/add-svg-shapes",
    watch(it: any, state: any, _stream: any): Observable<any> {
      try {
        const actualId = nilv(id, uuidNext());
        const pageId = state.currentPageId;
        const objects = dsh.lookupPageObjects(state, pageId);
        const selected = ignoreSelection ? new Set<string>() : dsh.lookupSelected(state);
        const base = cfh.getBaseShape(objects, selected);

        const selectedId = Array.from(selected)[0];
        const selectedFrame =
          selected.size === 1 && objects.get(selectedId)?.type === "frame";

        let baseId = base?.parentId;

        let frameId: string;
        let parentId: string;

        if (selectedFrame || selected.size === 0) {
          frameId = ctst.topNestedFrame(objects, position);
          parentId = frameId;
        } else {
          frameId = objects.get(baseId)?.type === "frame" ? baseId : ctst.topNestedFrame(objects, position);
          parentId = baseId;
        }

        const [newShape, newChildren] = sb.createSvgShapes(
          actualId,
          svgData,
          position,
          objects,
          frameId,
          parentId,
          selected,
          true
        );

        let changes = pcb.emptyChanges(it, pageId)
          .withObjects(objects)
          .addObject(newShape);

        changes = newChildren.reduce(
          (acc: any, child: any) => acc.addObject(child),
          changes
        );

        const shapeIdsToResize = changes.redoChanges
          .filter((c: any) => c.type === "add-obj")
          .map((c: any) => c.id)
          .reverse();

        changes = changes.resizeParents(shapeIdsToResize);

        const undoId = Symbol();

        return of(
          dwu.startUndoTransaction(undoId),
          dch.commitChanges(changes),
          changeSelection ? dws.selectShapes(d.orderedSet(newShape.id)) : null,
          ptk.dataEvent("layout/update", { ids: [newShape.id] }),
          dwu.commitUndoTransaction(undoId)
        ).filter((e: any) => e !== null);
      } catch (cause) {
        console.error(cause);
        return throwError(() =>
          ex.error({
            type: "svg-parser",
            hint: ex.message(cause as Error),
          })
        );
      }
    },
  };
}
