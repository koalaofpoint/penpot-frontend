import * as d from "app/common/data";
import * as cfh from "app/common/files/helpers";
import * as l from "app/common/logging";
import * as ct from "app/common/time";
import * as ctt from "app/common/types/token";
import * as ctob from "app/common/types/tokens-lib";
import * as cf from "app/config";
import * as dsh from "app/main/data/helpers";
import * as sd from "app/main/data/style-dictionary";
import * as ts from "app/main/data/tokenscript";
import * as dwsh from "app/main/data/workspace/shapes";
import * as dwt from "app/main/data/workspace/thumbnails";
import * as dwta from "app/main/data/workspace/tokens/application";
import * as dwu from "app/main/data/workspace/undo";
import { from, of, merge } from "rxjs";
import { filter, map, mapcat, takeUntil, finalize, concatAll } from "rxjs/operators";
import * as data from "clojure.data";
import * as set from "clojure.set";

l.setLevel("warn");

function deepMerge(...args: any[]): any {
  const [a, b, ...rest] = args;
  if (a === undefined) return b;
  if (b === undefined) return a;

  if (typeof a === "object" && typeof b === "object" && !Array.isArray(a) && !Array.isArray(b)) {
    const result: any = { ...a };
    for (const key of Object.keys(b)) {
      result[key] = deepMerge(a[key], b[key]);
    }
    return result;
  }

  if (a instanceof Set && b instanceof Set) {
    return new Set([...a, ...b]);
  }

  return b;
}

function flattenSetKeyedMap(
  m: Map<Set<string>, any>,
  intoM: Map<string, any> = new Map()
): Map<string, any> {
  let result = intoM;
  m.forEach((action, ks) => {
    ks.forEach((k) => {
      result.set(k, action);
    });
  });
  return result;
}

const filterExistingValues = false;

const attributesToShapeUpdate: Map<Set<string>, Function> = new Map([
  [new Set(ctt.borderRadiusKeys), dwta.updateShapeRadiusForCorners],
  [new Set(ctt.colorKeys), dwta.updateFillStroke],
  [new Set(ctt.strokeWidthKeys), dwta.updateStrokeWidth],
  [new Set(ctt.sizingKeys), dwta.applyDimensionsToken],
  [new Set(ctt.opacityKeys), dwta.updateOpacity],
  [new Set(ctt.rotationKeys), dwta.updateRotation],
  [new Set(ctt.fontFamilyKeys), dwta.updateFontFamily],
  [new Set(ctt.fontSizeKeys), dwta.updateFontSize],
  [new Set(ctt.fontWeightKeys), dwta.updateFontWeight],
  [new Set(ctt.letterSpacingKeys), dwta.updateLetterSpacing],
  [new Set(ctt.textCaseKeys), dwta.updateTextCase],
  [new Set(ctt.textDecorationKeys), dwta.updateTextDecoration],
  [new Set(ctt.typographyTokenKeys), dwta.updateTypography],
  [new Set(ctt.shadowKeys), dwta.updateShadow],
  [new Set(["line-height"]), dwta.updateLineHeight],
  [new Set(["x", "y"]), dwta.updateShapePosition],
  [new Set(["p1", "p2", "p3", "p4"]), dwta.updateLayoutPadding],
  [new Set(["m1", "m2", "m3", "m4"]), dwta.updateLayoutItemMargin],
  [new Set(["column-gap", "row-gap"]), dwta.updateLayoutGap],
  [new Set(["width", "height"]), dwta.applyDimensionsToken],
  [
    new Set([
      "layout-item-min-w",
      "layout-item-min-h",
      "layout-item-max-w",
      "layout-item-max-h",
    ]),
    dwta.updateLayoutSizingLimits,
  ],
]);

const attributeActionsMap = flattenSetKeyedMap(attributesToShapeUpdate);

function invertCollectKeyVals(
  xs: [string, string][],
  resolvedTokens: any,
  shape: any
): Map<any, Set<string>> {
  const result = new Map();

  for (const [k, v] of xs) {
    const resolvedToken = resolvedTokens.get ? resolvedTokens.get(v) : resolvedTokens[v];
    const resolvedValue = resolvedToken?.resolvedValue;
    const skip =
      !resolvedTokens.get?.(v) && !resolvedTokens[v] ||
      (filterExistingValues && shape[k] === resolvedValue);

    if (!skip) {
      const existing = result.get(resolvedValue) || new Set();
      existing.add(k);
      result.set(resolvedValue, existing);
    }
  }

  return result;
}

function splitAttributeGroups(attrsValuesMap: Map<Set<string>, any>): Map<any, any> {
  const result = new Map();

  attrsValuesMap.forEach((v, attrs) => {
    const attrArray = Array.from(attrs);

    if (attrArray.some((a) => ["width", "height"].includes(a))) {
      const [, a, b] = data.diff(new Set(["width", "height"]), new Set(attrArray));
      if (a) result.set(a, v);
      if (b) result.set(b, v);
      return;
    }

    if (attrArray.some((a) => ctt.spacingKeys.has(a))) {
      const [, rst, gap] = data.diff(new Set(["row-gap", "column-gap"]), new Set(attrArray));
      const [, position, padding] = data.diff(new Set(["p1", "p2", "p3", "p4"]), new Set(rst || []));

      if (gap && gap.size > 0) result.set(gap, v);
      if (position && position.size > 0) result.set(position, v);
      if (padding && padding.size > 0) result.set(padding, v);
      return;
    }

    result.set(attrs, v);
  });

  return result;
}

function shapeIdsByValues(
  attrsValuesMap: Map<Set<string>, any>,
  objectId: string
): Map<Set<string>, { value: any; shapeIds: Set<string> }> {
  const result = new Map();

  attrsValuesMap.forEach((value, attrs) => {
    result.set(attrs, { value, shapeIds: new Set([objectId]) });
  });

  return result;
}

function collectShapesUpdateInfo(
  resolvedTokens: Map<string, any>,
  objects: Map<string, any>
): [Map<any, any>, Set<string>, string[]] {
  let frameIds = new Set<string>();
  let textIds: string[] = [];
  let tokens = new Map();

  const items = Array.from(objects.entries());
  for (const [shapeId, shape] of items) {
    const appliedTokens = shape.appliedTokens;

    const collected = invertCollectKeyVals(appliedTokens, resolvedTokens, shape);
    const shaped = shapeIdsByValues(collected, shapeId);
    const attrsFrameText = splitAttributeGroups(shaped);

    const parentFrameId = cfh.getShapeIdRootFrame(objects, shapeId);

    if (parentFrameId) frameIds.add(parentFrameId);
    if (cfh.textShape(shape)) textIds.push(shapeId);
    tokens = deepMerge(tokens, attrsFrameText);
  }

  return [tokens, frameIds, textIds];
}

function actionizeShapesUpdateInfo(
  pageId: string,
  shapesUpdateInfo: Map<any, any>
): any[] {
  const actions: any[] = [];

  shapesUpdateInfo.forEach((updateInfos, attrs) => {
    const action = attributeActionsMap.get?.(attrs) || attributeActionsMap[attrs];
    if (!action) {
      console.error("missing action function on attributes->shape-update");
      return;
    }

    updateInfos.forEach((v: any, shapeIds: Set<string>) => {
      actions.push(action(v, Array.from(shapeIds), attrs, pageId));
    });
  });

  return actions;
}

export function propagateTokens(state: any, resolvedTokens: Map<string, any>): any {
  const fileId = state.currentFileId;
  const currentPageId = state.currentPageId;
  const fdata = dsh.lookupFileData(state, fileId);
  const tpoint = ct.tpointMs();

  l.info({ status: "START", hint: "propagate-tokens" });

  const pages = Array.from((fdata as any).pages || []);

  const observable$ = of(currentPageId, ...pages.filter((id) => id !== currentPageId)).pipe(
    mapcat((pageId) => {
      const page = dsh.getPage(fdata, pageId);
      const [attrs, frameIds, textIds] = collectShapesUpdateInfo(
        resolvedTokens,
        page.objects
      );

      const actions = actionizeShapesUpdateInfo(pageId, attrs);

      const { observable, normal } = groupBy(actions, (a) =>
        isObservable(a) ? "observable" : "normal"
      );

      l.info({
        status: "PROGRESS",
        hint: "propagate-tokens",
        pageId: String(pageId),
        elapsed: tpoint(),
        sync: true,
      });

      const updates: any[] = [];
      if (observable.length > 0) updates.push(merge(...observable));
      if (normal.length > 0) updates.push(of(normal).pipe(concatAll()));

      if (pageId !== currentPageId) {
        updates.push(
          of(
            dwsh.updateShapes(textIds, (shape) => {
              const { positionData, ...rest } = shape;
              return rest;
            }, {
              pageId,
              ignoreTouched: true,
            })
          )
        );
      }

      const frameUpdates = from(frameIds).pipe(
        mapcat((frameId) => [
          dwt.clearThumbnail(fileId, pageId, frameId, "frame"),
          dwt.clearThumbnail(fileId, pageId, frameId, "component"),
        ])
      );

      return merge(...updates, frameUpdates);
    }),
    finalize(() => {
      const elapsed = tpoint();
      l.info({ status: "END", hint: "propagate-tokens", elapsed });
    })
  );

  return observable$;
}

function groupBy<T>(arr: T[], fn: (item: T) => string): Record<string, T[]> {
  return arr.reduce(
    (acc, item) => {
      const key = fn(item);
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    },
    {} as Record<string, T[]>
  );
}

function isObservable(val: any): boolean {
  return val && typeof val.subscribe === "function";
}

export function propagateWorkspaceTokens(): any {
  return {
    type: "::propagate-workspace-tokens",
    watch: (_: any, state: any, __: any) => {
      const fileData = dsh.lookupFileData(state);
      const tokensLib = fileData?.tokensLib;
      if (!tokensLib) return of();

      const tokensTree = ctob.getTokensInActiveSets(tokensLib);
      if (!tokensTree) return of();

      const resolved$ = cf.flags.has("tokenscript")
        ? of(
            d.updateVals(ts.resolveTokens(tokensTree), (v: any) => ({
              ...v,
              resolvedValue: ts.tokenscriptSymbolsToPenpotUnit(v.resolvedValue),
            }))
          )
        : sd.resolveTokens(tokensTree);

      return resolved$.pipe(
        mapcat((sdTokens) => {
          const undoId = Symbol();
          return of(
            dwu.startUndoTransaction(undoId, { timeout: false }),
            propagateTokens(state, sdTokens),
            dwu.commitUndoTransaction(undoId)
          );
        })
      );
    },
  };
}
