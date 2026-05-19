// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
import { useMemo, useCallback } from "react";
import { useDeref } from "@app/common/react-extensions";
import { memoize } from "app.common.weak";
import { dmap } from "app.common.data";
import * as d from "app.common.data";
import * as attrs from "app.common.attrs";
import * as cfh from "app.common.files.helpers";
import * as gsh from "app.common.geom.shapes";
import * as ctk from "app.common.types.component";
import * as path from "app.common.types.path";
import { editableAttrs } from "app.common.types.shape.attrs";
import * as ctl from "app.common.types.shape.layout";
import * as txt from "app.common.types.text";
import * as tt from "app.common.types.token";
import * as weak from "app.common.weak";
import * as refs from "app.main.refs";
import { blurAttrs, blurMenu } from "app.main.ui.workspace.sidebar.options.menus.blur";
import { colorSelectionMenu } from "app.main.ui.workspace.sidebar.options.menus.color-selection";
import { componentMenu } from "app.main.ui.workspace.sidebar.options.menus.component";
import { constraintAttrs, constraintsMenu } from "app.main.ui.workspace.sidebar.options.menus.constraints";
import { exportsAttrs, exportsMenu } from "app.main.ui.workspace.sidebar.options.menus.exports";
import * as fill from "app.main.ui.workspace.sidebar.options.menus.fill";
import { layerAttrs, layerMenu } from "app.main.ui.workspace.sidebar.options.menus.layer";
import { layoutContainerFlexAttrs, layoutContainerMenu } from "app.main.ui.workspace.sidebar.options.menus.layout-container";
import { layoutItemAttrs, layoutItemMenu } from "app.main.ui.workspace.sidebar.options.menus.layout-item";
import { selectMeasureKeys, measureAttrs, measuresMenu } from "app.main.ui.workspace.sidebar.options.menus.measures";
import { shadowAttrs, shadowMenu } from "app.main.ui.workspace.sidebar.options.menus.shadow";
import { strokeAttrs, strokeMenu } from "app.main.ui.workspace.sidebar.options.menus.stroke";
import * as ot from "app.main.ui.workspace.sidebar.options.menus.text";
import { cssStyle } from "app.main.style";

// Define how to read each kind of attribute depending on the shape type:
//   - shape: read the attribute directly from the shape.
//   - children: read it from all the children, and then merging it.
//   - ignore: do not read this attribute from this shape.
//   - text: read it from all the content nodes, and then merging it.
export const typeReadMode: Record<string, Record<string, "shape" | "children" | "ignore" | "text"> = {
  frame: {
    measure: "shape",
    layer: "shape",
    constraint: "shape",
    fill: "shape",
    shadow: "shape",
    blur: "shape",
    stroke: "shape",
    text: "children",
    exports: "shape",
    "layout-container": "shape",
    "layout-item": "shape",
  },
  group: {
    measure: "shape",
    layer: "shape",
    constraint: "shape",
    fill: "children",
    shadow: "shape",
    blur: "shape",
    stroke: "children",
    text: "children",
    exports: "shape",
    "layout-container": "ignore",
    "layout-item": "shape",
  },
  path: {
    measure: "shape",
    layer: "shape",
    constraint: "shape",
    fill: "shape",
    shadow: "shape",
    blur: "shape",
    stroke: "shape",
    text: "ignore",
    exports: "shape",
    "layout-container": "ignore",
    "layout-item": "shape",
  },
  text: {
    measure: "shape",
    layer: "shape",
    constraint: "shape",
    fill: "text",
    shadow: "shape",
    blur: "shape",
    stroke: "shape",
    text: "text",
    exports: "shape",
    "layout-container": "ignore",
    "layout-item": "shape",
  },
  image: {
    measure: "shape",
    layer: "shape",
    constraint: "shape",
    fill: "ignore",
    shadow: "shape",
    blur: "shape",
    stroke: "ignore",
    text: "ignore",
    exports: "shape",
    "layout-container": "ignore",
    "layout-item": "shape",
  },
  rect: {
    measure: "shape",
    layer: "shape",
    constraint: "shape",
    fill: "shape",
    shadow: "shape",
    blur: "shape",
    stroke: "shape",
    text: "ignore",
    exports: "shape",
    "layout-container": "ignore",
    "layout-item": "shape",
  },
  circle: {
    measure: "shape",
    layer: "shape",
    constraint: "shape",
    fill: "shape",
    shadow: "shape",
    blur: "shape",
    stroke: "shape",
    text: "ignore",
    exports: "shape",
    "layout-container": "ignore",
    "layout-item": "shape",
  },
  "svg-raw": {
    measure: "shape",
    layer: "shape",
    constraint: "shape",
    fill: "shape",
    shadow: "shape",
    blur: "shape",
    stroke: "shape",
    text: "ignore",
    exports: "shape",
    "layout-container": "ignore",
    "layout-item": "shape",
  },
  bool: {
    measure: "shape",
    layer: "shape",
    constraint: "shape",
    fill: "shape",
    shadow: "shape",
    blur: "shape",
    stroke: "shape",
    text: "ignore",
    exports: "shape",
    "layout-container": "ignore",
    "layout-item": "shape",
  },
};

export const groupAttrs: Record<string, any> = {
  measure: measureAttrs,
  layer: layerAttrs,
  constraint: constraintAttrs,
  fill: fill.fillAttrs,
  shadow: shadowAttrs,
  blur: blurAttrs,
  stroke: strokeAttrs,
  text: txt.textAllAttrs,
  exports: exportsAttrs,
  "layout-container": layoutContainerFlexAttrs,
  "layout-item": layoutItemAttrs,
};

const shadowKeys = ["style", "color", "offsetX", "offsetY", "blur", "spread", "hidden"];

function shadowEq(s1: any, s2: any): boolean {
  return (
    s1.length === s2.length &&
    s1.every((v1: any, i: number) => {
      const v2 = s2[i];
      return (
        Object.keys(v1)
          .filter((k) => shadowKeys.includes(k))
          .every((k) => v1[k] === v2[k]) &&
        Object.keys(v2)
          .filter((k) => shadowKeys.includes(k))
          .every((k) => v1[k] === v2[k])
      );
    })
  );
}

function shadowSel(v: any[]): any[] {
  return v.map((item) => {
    const result: any = {};
    shadowKeys.forEach((k) => {
      if (item[k] !== undefined) result[k] = item[k];
    });
    return result;
  });
}

const blurKeys = ["type", "value", "hidden"];

function blurEq(v1: any, v2: any): boolean {
  const k1: any = {};
  const k2: any = {};
  blurKeys.forEach((k) => {
    k1[k] = v1[k];
    k2[k] = v2[k];
  });
  return k1 === k2;
}

function blurSel(v: any): any {
  if (!v) return null;
  const result: any = {};
  blurKeys.forEach((k) => {
    if (v[k] !== undefined) result[k] = v[k];
  });
  return result;
}

function getAttrs(
  shapes: any[],
  objects: any,
  attrGroup: string
): [any[], any, any] {
  const attrGroupAttrs = groupAttrs[attrGroup];
  const mergeAttrs = (v1: any, v2: any): any => {
    if (attrGroup === "shadow") return attrs.getAttrsMulti([v1, v2], attrGroupAttrs, shadowEq, shadowSel);
    if (attrGroup === "blur") return attrs.getAttrsMulti([v1, v2], attrGroupAttrs, blurEq, blurSel);
    return attrs.getAttrsMulti([v1, v2], attrGroupAttrs);
  };

  const mergeAttr = (acc: any, appliedTokens: any, tAttr: string): any => {
    const newVal = appliedTokens[tAttr];
    const existing = acc[tAttr];
    if (existing === undefined) return { ...acc, [tAttr]: newVal };
    if (existing === newVal) return acc;
    return { ...acc, [tAttr]: ":multiple" };
  };

  const mergeShapeAttr = (acc: any, appliedTokens: any, shapeAttr: string): any => {
    const tokenAttrs = tt.shapeAttrToTokenAttrs(shapeAttr);
    return tokenAttrs.reduce((result: any, t: string) => mergeAttr(result, appliedTokens, t), acc);
  };

  const mergeTokenValues = (acc: any, shapeAttrs: any[], appliedTokens: any): any => {
    return shapeAttrs.reduce((result: any, sa: string) => mergeShapeAttr(result, appliedTokens, sa), acc);
  };

  const extractAttrs = (
    [ids, values, tokenAcc]: [any[], any, any],
    shape: any
  ): [any[], any, any] => {
    const { id, type, appliedTokens } = shape;
    const readMode = typeReadMode[type]?.[attrGroup] ?? "ignore";
    const shapeEditableAttrs = editableAttrs[shape.type]?.filter((a: string) => attrGroupAttrs.includes(a)) ?? [];

    switch (readMode) {
      case "ignore":
        return [ids, values, tokenAcc];

      case "shape": {
        const shapeValues: any = {};
        shapeEditableAttrs.forEach((a: string) => {
          shapeValues[a] = null;
        });

        if (attrGroup === "measure") {
          Object.assign(shapeValues, selectMeasureKeys(shape));
        } else {
          Object.assign(shapeValues, shape);
        }

        const newTokenAcc = mergeTokenValues(tokenAcc, shapeEditableAttrs, appliedTokens);
        return [[...ids, id], mergeAttrs(values, shapeValues), newTokenAcc];
      }

      case "text": {
        const shapeAttrs: any = {};
        Object.keys(shape).forEach((k) => {
          if (attrGroupAttrs.includes(k)) shapeAttrs[k] = shape[k];
        });

        const contentAttrs = attrs.getTextAttrsMulti(shape, txt.defaultTextAttrs, attrGroupAttrs);

        const newValues = mergeAttrs(mergeAttrs(values, shapeAttrs), contentAttrs);
        const newTokenAcc = mergeTokenValues(tokenAcc, contentAttrs, appliedTokens);
        return [[...ids, id], newValues, newTokenAcc];
      }

      case "children": {
        const children = (shape.shapes || []).map((sid: string) => objects[sid]);
        const [newIds, newValues, tokens] = getAttrs(children, objects, attrGroup);
        return [d.concatVec(ids, newIds), mergeAttrs(values, newValues), tokens];
      }

      default:
        return [[], {}, {}];
    }
  };

  return shapes.reduce(extractAttrs, [[], {}, {}]);
}

const getAttrsMulti = memoize(getAttrs);

function isBoolDescendant(
  objects: any,
  selectedShapeIds: Set<string>,
  shape: any
): boolean {
  if (!shape) return false;
  if (selectedShapeIds.has(shape.id)) return false;

  const parentId = shape.parentId;
  const parent = objects[parentId];

  if (cfh.boolShape(parent)) return true;

  return isBoolDescendant(objects, selectedShapeIds, parent);
}

const checkOptionsProps = (newProps: any, oldProps: any): boolean => {
  return (
    newProps.shapes === oldProps.shapes &&
    newProps.shapesWithChildren === oldProps.shapesWithChildren &&
    newProps.pageId === oldProps.pageId &&
    newProps.fileId === oldProps.fileId
  );
};

export const Options: React.FC<{
  shapes: any[];
  shapesWithChildren: any[];
  pageId: string;
  fileId: string;
  libraries: any;
}> = React.memo(
  ({ shapes, shapesWithChildren, pageId, fileId, libraries }) => {
    const shapeIds = useMemo(() => {
      return d.mapIdIntoSet(shapes);
    }, [shapes]);

    const isLayoutChildRef = useMemo(() => {
      return refs.isLayoutChild(shapeIds);
    }, [shapeIds]);

    const isLayoutChild = useDeref(isLayoutChildRef);

    const isFlexParentRef = useMemo(() => {
      return refs.flexLayoutChild(shapeIds);
    }, [shapeIds]);

    const isFlexParent = useDeref(isFlexParentRef);

    const isGridParentRef = useMemo(() => {
      return refs.gridLayoutChild(shapeIds);
    }, [shapeIds]);

    const isGridParent = useDeref(isGridParentRef);

    const hasFlexLayoutContainer = useMemo(() => {
      return shapes.some(ctl.flexLayout);
    }, [shapes]);

    const allLayoutChildRef = useMemo(() => {
      return refs.allLayoutChild(shapeIds);
    }, [shapeIds]);

    const allLayoutChild = useDeref(allLayoutChildRef);

    const allFlexLayoutContainer = useMemo(() => {
      return shapes.every(ctl.flexLayout);
    }, [shapes]);

    const showCaps = useMemo(() => {
      return shapes.some(
        (s) => cfh.pathShape(s) && path.shapeWithOpenPath(s)
      );
    }, [shapes]);

    const hasText = useMemo(() => {
      return shapes.some(cfh.textShape);
    }, [shapes]);

    const objects = useMemo(() => {
      const indexed = d.indexBy(shapesWithChildren, "id");
      return Object.keys(indexed).reduce((objs, id) => {
        if (isBoolDescendant(objs, shapeIds, indexed[id])) {
          const { [id]: _, ...rest } = objs;
          return rest;
        }
        return objs;
      }, indexed);
    }, [shapesWithChildren, shapeIds]);

    const [layerIds, layerValues, layerTokens] = getAttrsMulti(
      shapes,
      objects,
      "layer"
    );

    const [textIds, textValues] = getAttrsMulti(shapes, objects, "text");

    const [constraintIds, constraintValues] = getAttrsMulti(
      shapes,
      objects,
      "constraint"
    );

    const [fillIds, fillValues, fillTokens] = getAttrsMulti(
      shapes,
      objects,
      "fill"
    );

    const [shadowIds, shadowValues] = getAttrsMulti(shapes, objects, "shadow");

    const [blurIds, blurValues] = getAttrsMulti(shapes, objects, "blur");

    const [strokeIds, strokeValues, strokeTokens] = getAttrsMulti(
      shapes,
      objects,
      "stroke"
    );

    const [exportsIds, exportsValues] = getAttrsMulti(
      shapes,
      objects,
      "exports"
    );

    const [layoutContainerIds, layoutContainerValues, layoutContainerTokens] =
      getAttrsMulti(shapes, objects, "layout-container");

    const [layoutItemIds, layoutItemValues, layoutItemTokens] = getAttrsMulti(
      shapes,
      objects,
      "layout-item"
    );

    const components = useMemo(() => {
      const filtered = shapes.filter(ctk.instanceHead);
      return filtered.length > 0 ? filtered : null;
    }, [shapes]);

    const workspaceModifiers = useDeref(refs.workspaceModifiers);

    const transformedShapes = useMemo(() => {
      return shapes.map((shape) => {
        const shapeId = shape.id;
        const modifiers = workspaceModifiers?.[shapeId]?.modifiers;
        return gsh.transformShape(shape, modifiers);
      });
    }, [workspaceModifiers, shapes]);

    const type = ":multiple";

    const [measureIds, measureValues, measureTokens] = getAttrs(
      transformedShapes,
      objects,
      "measure"
    );

    return (
      <div className={cssStyle("options")}>
        {layerIds.length > 0 && (
          <layerMenu
            type={type}
            ids={layerIds}
            appliedTokens={layerTokens}
            values={layerValues}
          />
        )}

        {measureIds.length > 0 && (
          <measuresMenu
            type={type}
            ids={measureIds}
            values={measureValues}
            appliedTokens={measureTokens}
            shapes={transformedShapes}
          />
        )}

        {components && <componentMenu shapes={components} />}

        <layoutContainerMenu
          type={type}
          ids={layoutContainerIds}
          values={layoutContainerValues}
          appliedTokens={layoutContainerTokens}
          multiple={true}
        />

        {(isLayoutChild || hasFlexLayoutContainer) && (
          <layoutItemMenu
            type={type}
            ids={layoutItemIds}
            isLayoutChild={allLayoutChild}
            isLayoutContainer={allFlexLayoutContainer}
            isFlexParent={isFlexParent}
            isGridParent={isGridParent}
            appliedTokens={layoutItemTokens}
            values={layoutItemValues}
          />
        )}

        {constraintIds.length > 0 && !isLayoutChild && (
          <constraintsMenu ids={constraintIds} values={constraintValues} />
        )}

        {textIds.length > 0 && (
          <ot.textMenu type={type} ids={textIds} values={textValues} />
        )}

        {fillIds.length > 0 && (
          <fill.fillMenu
            type={type}
            ids={fillIds}
            values={fillValues}
            appliedTokens={fillTokens}
          />
        )}

        {strokeIds.length > 0 && (
          <strokeMenu
            type={type}
            ids={strokeIds}
            showCaps={showCaps}
            values={strokeValues}
            disableStrokeStyle={hasText}
            appliedTokens={strokeTokens}
          />
        )}

        {shapes.length > 0 && (
          <colorSelectionMenu
            fileId={fileId}
            type={type}
            shapes={Object.values(objects)}
            libraries={libraries}
          />
        )}

        {shadowIds.length > 0 && (
          <shadowMenu
            type={type}
            ids={shadowIds}
            values={shadowValues.shadow}
          />
        )}

        {blurIds.length > 0 && (
          <blurMenu type={type} ids={blurIds} values={blurValues} />
        )}

        {exportsIds.length > 0 && (
          <exportsMenu
            type={type}
            ids={exportsIds}
            shapes={transformedShapes}
            values={exportsValues}
            pageId={pageId}
            fileId={fileId}
          />
        )}
      </div>
    );
  },
  checkOptionsProps
);
