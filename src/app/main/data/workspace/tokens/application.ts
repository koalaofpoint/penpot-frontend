import * as d from "app/common/data";
import * as cfo from "app/common/files/tokens";
import * as ctk from "app/common/types/component";
import * as ctsl from "app/common/types/shape/layout";
import * as ctsr from "app/common/types/shape/radius";
import * as ctst from "app/common/types/shape/token";
import * as cts from "app/common/types/stroke";
import * as txt from "app/common/types/text";
import * as ctt from "app/common/types/token";
import * as ctob from "app/common/types/tokens-lib";
import * as cty from "app/common/types/typography";
import * as uuid from "app/common/uuid";
import * as cf from "app/config";
import * as ev from "app/main/data/event";
import * as dsh from "app/main/data/helpers";
import * as ntf from "app/main/data/notifications";
import * as sd from "app/main/data/style-dictionary";
import * as tinycolor from "app/main/data/tinycolor";
import * as ts from "app/main/data/tokenscript";
import * as udw from "app/main/data/workspace";
import * as wdc from "app/main/data/workspace/colors";
import * as dwsl from "app/main/data/workspace/shape-layout";
import * as dwsh from "app/main/data/workspace/shapes";
import * as dwtr from "app/main/data/workspace/transforms";
import * as dwu from "app/main/data/workspace/undo";
import * as dwwt from "app/main/data/workspace/wasm-text";
import * as features from "app/main/features";
import * as fonts from "app/main/fonts";
import { emit } from "app/main/store";
import { tr } from "app/util/i18n";
import { of, merge as rxMerge } from "rxjs";
import { map as rxMap, filter as rxFilter } from "rxjs/operators";
import * as set from "clojure.set";

export function updateShapeRadiusAll(
  value: number,
  shapeIds: string[],
  attributes: any,
  pageId?: string
): any {
  if (typeof value !== "number") return null;

  const safeValue = Math.max(0, value);
  return dwsh.updateShapes(shapeIds, (shape) =>
    ctsr.setRadiusToAllCorners(shape, safeValue)
  ), {
    regObjects: true,
    ignoreTouched: true,
    pageId,
    attrs: ctt.borderRadiusKeys,
  });
}

export function updateShapeRadiusForCorners(
  value: number,
  shapeIds: string[],
  attributes: any,
  pageId?: string
): any {
  if (typeof value !== "number") return null;

  const safeValue = Math.max(0, value);
  return dwsh.updateShapes(shapeIds, (shape) =>
    ctsr.setRadiusForCorners(shape, attributes, safeValue)
  ), {
    regObjects: true,
    ignoreTouched: true,
    pageId,
    attrs: ctt.borderRadiusKeys,
  };
}

export function updateOpacity(
  value: number,
  shapeIds: string[],
  attributes: any,
  pageId?: string
): any {
  if (value < 0 || value > 1) return null;

  return dwsh.updateShapes(
    shapeIds,
    (shape) => ({ ...shape, opacity: value }),
    { ignoreTouched: true, pageId }
  );
}

export function updateRotation(
  value: number,
  shapeIds: string[],
  attributes: any,
  pageId?: string
): any {
  if (typeof value !== "number") return null;

  return {
    type: "::update-shape-rotation",
    watch: (_: any, __: any, ___: any) => {
      return of(
        udw.triggerBoundingBoxCloaking(shapeIds),
        udw.increaseRotation(shapeIds, value, null, {
          pageId,
          ignoreTouched: true,
        })
      );
    },
  };
}

export function updateStrokeWidth(
  value: number,
  shapeIds: string[],
  attributes: any,
  pageId?: string
): any {
  if (typeof value !== "number") return null;

  return dwsh.updateShapes(shapeIds, (shape) => {
    if (shape.strokes && shape.strokes.length > 0) {
      return {
        ...shape,
        strokes: shape.strokes.map((s, i) =>
          i === 0 ? { ...s, "stroke-width": value } : s
        ),
      };
    }
    const stroke = { ...cts.defaultStroke, "stroke-width": value };
    return { ...shape, strokes: [stroke] };
  }), {
    regObjects: true,
    ignoreTouched: true,
    pageId,
    attrs: ["strokes"],
  };
}

export function updateColor(
  f: Function,
  value: string,
  shapeIds: string[],
  pageId: string
): any {
  const tc = tinycolor.validColor(value);
  if (!tc) return null;

  const hex = tinycolor.toHexString(tc);
  const opacity = tinycolor.alpha(tc);

  return f(shapeIds, { color: hex, opacity }, 0, {
    ignoreTouched: true,
    pageId,
  });
}

export function valueToColor(color: string): { color: string; opacity: number } | null {
  const tc = tinycolor.validColor(color);
  if (!tc) return null;

  const hex = tinycolor.toHexString(tc);
  const opacity = tinycolor.alpha(tc);
  return { color: hex, opacity };
}

export function updateFill(
  value: string,
  shapeIds: string[],
  attributes: any,
  pageId?: string
): any {
  return {
    type: "::update-fill",
    watch: (_: any, state: any, __: any) => {
      const color = valueToColor(value);
      if (!color) return of();

      const updateFn = (shape: any, colorData: any) =>
        wdc.assocShapeFill(shape, 0, colorData);

      return wdc.transformFill(state, shapeIds, color, updateFn, {
        ignoreTouched: true,
        pageId,
      });
    },
  };
}

export function updateStrokeColor(
  value: string,
  shapeIds: string[],
  attributes: any,
  pageId?: string
): any {
  const color = valueToColor(value);
  if (!color) return null;

  return dwsh.updateShapes(
    shapeIds,
    (shape) => wdc.updateShapeStrokeColor(shape, 0, color),
    {
      pageId,
      ignoreTouched: true,
      "changed-sub-attr": ["stroke-color"],
    }
  );
}

export function valueToShadow(value: any[]): any[] {
  return value.map(({
    offsetX,
    offsetY,
    blur,
    spread,
    color,
    inset,
  }: any) => ({
    id: uuid.next(),
    hidden: false,
    offsetX,
    offsetY,
    blur,
    color: valueToColor(color),
    spread,
    style: inset ? "inner-shadow" : "drop-shadow",
  }));
}

export function updateShadow(
  value: any[],
  shapeIds: string[],
  attributes: any,
  pageId?: string
): any {
  if (!Array.isArray(value)) return null;

  const shadows = valueToShadow(value);
  return dwsh.updateShapes(
    shapeIds,
    (shape) => ({ ...shape, shadow: shadows }),
    {
      regObjects: true,
      ignoreTouched: true,
      pageId,
      attrs: ["shadow"],
    }
  );
}

export function updateFillStroke(
  value: string,
  shapeIds: string[],
  attributes: any,
  pageId?: string
): any {
  return {
    type: "::update-fill-stroke",
    watch: (_: any, __: any, ___: any) => {
      return of(
        attributes.fill ? updateFill(value, shapeIds, attributes, pageId) : null,
        attributes.strokeColor
          ? updateStrokeColor(value, shapeIds, attributes, pageId)
          : null
      ).filter(Boolean);
    },
  };
}

function attributesToLayoutGap(
  attributes: Set<string>,
  value: number
): { layoutGap: Record<string, number> } {
  const gap: Record<string, number> = {};
  if (attributes.has("column-gap")) gap.columnGap = value;
  if (attributes.has("row-gap")) gap.rowGap = value;
  return { layoutGap: gap };
}

function shapeIdsWithLayout(
  state: any,
  pageId: string,
  shapeIds: string[]
): string[] {
  const shapes = dsh.lookupShapes(state, pageId, shapeIds);
  return shapes.filter((s: any) => ctsl.anyLayout(s)).map((s: any) => s.id);
}

function shapeIdsWithLayoutParent(
  state: any,
  pageId: string,
  shapeIds: string[]
): string[] {
  const objects = dsh.lookupPageObjects(state);
  const shapes = dsh.lookupShapes(state, pageId, shapeIds);
  return shapes
    .filter((s: any) => ctsl.anyLayoutImmediateChild(objects, s))
    .map((s: any) => s.id);
}

export function updateLayoutItemMargin(
  value: number,
  shapeIds: string[],
  attrs: string[],
  pageId?: string
): any {
  return {
    type: "::update-layout-item-margin",
    watch: (_: any, state: any, __: any) => {
      if (typeof value !== "number") return of();

      const idsWithLayoutParent = shapeIdsWithLayoutParent(
        state,
        pageId || state.currentPageId,
        shapeIds
      );

      const margin: Record<string, number> = {};
      attrs.forEach((attr) => (margin[attr] = value));

      return of(
        dwsl.updateLayout(idsWithLayoutParent, { "layout-item-margin": margin }, {
          ignoreTouched: true,
          pageId,
        })
      );
    },
  };
}

export function updateLayoutPadding(
  value: number,
  shapeIds: string[],
  attrs: string[],
  pageId?: string
): any {
  return {
    type: "::update-layout-padding",
    watch: (_: any, state: any, __: any) => {
      if (typeof value !== "number") return of();

      const idsWithLayout = shapeIdsWithLayout(
        state,
        pageId || state.currentPageId,
        shapeIds
      );

      const padding: Record<string, number> = {};
      attrs.forEach((attr) => (padding[attr] = value));

      return of(
        dwsl.updateLayout(idsWithLayout, { "layout-padding": padding }, {
          ignoreTouched: true,
          pageId,
        })
      );
    },
  };
}

export function updateShapePosition(
  value: number,
  shapeIds: string[],
  attributes: Set<string>,
  pageId?: string
): any {
  return {
    type: "::update-shape-position",
    watch: (_: any, state: any, __: any) => {
      if (typeof value !== "number") return of();

      const pid = pageId || state.currentPageId;
      const position: Record<string, number> = {};
      attributes.forEach((attr) => (position[attr] = value));

      return of(
        ...shapeIds.map((id) =>
          dwtr.updatePosition(id, position, { ignoreTouched: true, pageId: pid })
        )
      );
    },
  };
}

export function updateLayoutGap(
  value: number,
  shapeIds: string[],
  attributes: Set<string>,
  pageId?: string
): any {
  return {
    type: "::update-layout-gap",
    watch: (_: any, state: any, __: any) => {
      if (typeof value !== "number") return of();

      const idsWithLayout = shapeIdsWithLayout(
        state,
        pageId || state.currentPageId,
        shapeIds
      );
      const layoutAttributes = attributesToLayoutGap(attributes, value);

      return of(
        dwsl.updateLayout(idsWithLayout, layoutAttributes, {
          ignoreTouched: true,
          pageId,
        })
      );
    },
  };
}

export function updateLayoutSizingLimits(
  value: number,
  shapeIds: string[],
  attributes: Set<string>,
  pageId?: string
): any {
  return {
    type: "::update-layout-sizing-limits",
    watch: (_: any, __: any, ___: any) => {
      if (typeof value !== "number") return of();

      const props: Record<string, number> = {};
      if (attributes.has("layout-item-min-w")) props["layout-item-min-w"] = value;
      if (attributes.has("layout-item-min-h")) props["layout-item-min-h"] = value;
      if (attributes.has("layout-item-max-w")) props["layout-item-max-w"] = value;
      if (attributes.has("layout-item-max-h")) props["layout-item-max-h"] = value;

      return of(
        dwsl.updateLayoutChild(shapeIds, props, { ignoreTouched: true, pageId })
      );
    },
  };
}

function generateTextShapeUpdate(
  txtAttrs: any,
  shapeIds: string[],
  pageId?: string
): any {
  const updateNode = (node: any) =>
    txt.isTextNode(node) || txt.isParagraphNode(node);

  const updateFn = (node: any, _: any) =>
    cty.removeTypographyFromNode(d.txtMerge(node, txtAttrs));

  const affectsLayout = ["font-size", "font-family", "font-weight", "letter-spacing", "line-height"].some(
    (attr) => txtAttrs[attr] !== undefined
  );

  return {
    type: "::generate-text-shape-update",
    watch: (_: any, state: any, __: any) => {
      const updateShapesEvent = dwsh.updateShapes(
        shapeIds,
        (shape) =>
          txt.updateTextContent(shape, updateNode, updateFn, null),
        { ignoreTouched: true, pageId }
      );

      const result: any[] = [updateShapesEvent];

      if (affectsLayout && features.activeFeature(state, "render-wasm/v1")) {
        result.push(dwwt.resizeWasmTextAll(shapeIds));
      }

      return of(...result);
    },
  };
}

export function updateLineHeight(
  value: number,
  shapeIds: string[],
  attributes: any,
  pageId?: string
): any {
  if (typeof value !== "number") return null;
  return generateTextShapeUpdate({ "line-height": value }, shapeIds, pageId);
}

export function updateLetterSpacing(
  value: number,
  shapeIds: string[],
  attributes: any,
  pageId?: string
): any {
  if (typeof value !== "number") return null;
  return generateTextShapeUpdate({ "letter-spacing": String(value) }, shapeIds, pageId);
}

export function warnFontVariantNotFound(): void {
  emit(
    ntf.show({
      content: tr("workspace.tokens.font-variant-not-found"),
      type: "toast",
      level: "warning",
      timeout: 7000,
    })
  );
}

function updateClosestFontVariantIdByWeight(
  txtAttrs: any,
  targetVariant: any,
  fontId: string,
  onMismatch?: () => void
): any {
  const font = fonts.getFontData(fontId);
  const variant = font
    ? fonts.findClosestVariant(font, targetVariant.weight, targetVariant.style)
    : null;

  const callOnMismatch =
    typeof onMismatch === "function" &&
    variant &&
    (targetVariant.fontWeight !== variant.weight ||
      (targetVariant.fontStyle && targetVariant.fontStyle !== variant.style));

  if (callOnMismatch) {
    onMismatch();
  }

  if (variant?.id) {
    return { ...txtAttrs, "font-variant-id": variant.id };
  }
  return txtAttrs;
}

function generateFontFamilyTextShapeUpdate(
  txtAttrs: any,
  shapeIds: string[],
  pageId: string | undefined,
  onMismatch?: () => void
): any {
  const notFoundFont = txtAttrs["font-id"] === String(uuid.zero);

  const updateNode = (node: any) =>
    txt.isTextNode(node) || txt.isParagraphNode(node);

  const updateFn = (node: any, findClosestWeight: boolean) => {
    const fontId = notFoundFont ? node["font-id"] : txtAttrs["font-id"];
    let attrs = txtAttrs;
    if (findClosestWeight) {
      attrs = updateClosestFontVariantIdByWeight(attrs, node, fontId, onMismatch);
    }
    return cty.removeTypographyFromNode(d.txtMerge(node, attrs));
  };

  return {
    type: "::generate-font-family-text-shape-update",
    watch: (_: any, state: any, __: any) => {
      const updateShapesEvent = dwsh.updateShapes(
        shapeIds,
        (shape) =>
          txt.updateTextContent(
            shape,
            updateNode,
            (n: any, findClosest: any) => updateFn(n, ctst.fontWeightApplied(shape))
          ),
        { ignoreTouched: true, pageId }
      );

      const result: any[] = [updateShapesEvent];

      if (features.activeFeature(state, "render-wasm/v1")) {
        result.push(dwwt.resizeWasmTextAll(shapeIds));
      }

      return of(...result);
    },
  };
}

function createFontFamilyTextAttrs(value: string[]): any {
  const fontFamily = (value[0] || "").trim().replace(/^["']|["']$/g, "");
  const font = fonts.findFontFamily(fontFamily);

  if (font) {
    return { "font-id": font.id, "font-family": font.family };
  }
  return { "font-id": String(uuid.zero), "font-family": fontFamily };
}

export function updateFontFamily(
  value: string[],
  shapeIds: string[],
  attributes: any,
  pageId?: string
): any {
  const textAttrs = createFontFamilyTextAttrs(value);
  if (!textAttrs) return null;
  return generateFontFamilyTextShapeUpdate(textAttrs, shapeIds, pageId, undefined);
}

export function updateFontFamilyInteractive(
  value: string[],
  shapeIds: string[],
  attributes: any,
  pageId?: string
): any {
  const textAttrs = createFontFamilyTextAttrs(value);
  if (!textAttrs) return null;
  return generateFontFamilyTextShapeUpdate(
    textAttrs,
    shapeIds,
    pageId,
    warnFontVariantNotFound
  );
}

export function updateFontSize(
  value: number,
  shapeIds: string[],
  attributes: any,
  pageId?: string
): any {
  if (typeof value !== "number") return null;
  return generateTextShapeUpdate({ "font-size": String(value) }, shapeIds, pageId);
}

export function updateTextCase(
  value: string,
  shapeIds: string[],
  attributes: any,
  pageId?: string
): any {
  if (typeof value !== "string") return null;
  return generateTextShapeUpdate({ "text-transform": value }, shapeIds, pageId);
}

export function updateTextDecoration(
  value: string,
  shapeIds: string[],
  attributes: any,
  pageId?: string
): any {
  if (!ctt.validTextDecoration(value)) return null;

  const cssValue = value === "strike-through" ? "line-through" : value;
  return generateTextShapeUpdate({ "text-decoration": cssValue }, shapeIds, pageId);
}

export function updateTextDecorationInteractive(
  value: string,
  shapeIds: string[],
  attributes: any,
  pageId?: string
): any {
  if (!ctt.validTextDecoration(value)) return null;

  emit(ptk.dataEvent("expand-text-more-options"));
  return updateTextDecoration(value, shapeIds, attributes, pageId);
}

function generateFontWeightTextShapeUpdate(
  fontVariant: any,
  shapeIds: string[],
  pageId: string | undefined,
  onMismatch?: () => void
): any {
  const variantWithProps = {
    ...fontVariant,
    fontWeight: fontVariant.weight,
    fontStyle: fontVariant.style,
  };

  const updateNode = (node: any) =>
    txt.isTextNode(node) || txt.isParagraphNode(node);

  const updateFn = (node: any, _: any) => {
    const attrs = updateClosestFontVariantIdByWeight(
      variantWithProps,
      variantWithProps,
      node["font-id"],
      onMismatch
    );
    return cty.removeTypographyFromNode(d.txtMerge(node, attrs));
  };

  return {
    type: "::generate-font-weight-text-shape-update",
    watch: (_: any, state: any, __: any) => {
      const updateShapesEvent = dwsh.updateShapes(
        shapeIds,
        (shape) => txt.updateTextContent(shape, updateNode, updateFn, null),
        { ignoreTouched: true, pageId }
      );

      const result: any[] = [updateShapesEvent];

      if (features.activeFeature(state, "render-wasm/v1")) {
        result.push(dwwt.resizeWasmTextAll(shapeIds));
      }

      return of(...result);
    },
  };
}

export function updateFontWeight(
  value: string,
  shapeIds: string[],
  attributes: any,
  pageId?: string
): any {
  const fontVariant = ctt.validFontWeightVariant(value);
  if (!fontVariant) return null;
  return generateFontWeightTextShapeUpdate(fontVariant, shapeIds, pageId, undefined);
}

export function updateFontWeightInteractive(
  value: string,
  shapeIds: string[],
  attributes: any,
  pageId?: string
): any {
  const fontVariant = ctt.validFontWeightVariant(value);
  if (!fontVariant) return null;
  return generateFontWeightTextShapeUpdate(
    fontVariant,
    shapeIds,
    pageId,
    warnFontVariantNotFound
  );
}

function applyFunctionsMap(
  fs: Record<string, Function>,
  vs: Record<string, any>,
  args: any[]
): any[] {
  return Object.entries(fs)
    .map(([k, f]) => {
      const v = vs[k];
      if (v !== undefined && v !== null) {
        return f(v, ...args);
      }
      return null;
    })
    .filter(Boolean);
}

export function updateTypography(
  value: any,
  shapeIds: string[],
  attributes: any,
  pageId?: string
): any {
  if (typeof value !== "object" || value === null) return null;

  const updates: any[] = [];

  if (value["font-size"]) {
    updates.push(
      updateFontSize(value["font-size"], shapeIds, attributes, pageId)
    );
  }
  if (value["font-family"]) {
    updates.push(
      updateFontFamily(value["font-family"], shapeIds, attributes, pageId)
    );
  }
  if (value["font-weight"]) {
    updates.push(
      updateFontWeight(value["font-weight"], shapeIds, attributes, pageId)
    );
  }
  if (value["letter-spacing"]) {
    updates.push(
      updateLetterSpacing(value["letter-spacing"], shapeIds, attributes, pageId)
    );
  }
  if (value["text-case"]) {
    updates.push(
      updateTextCase(value["text-case"], shapeIds, attributes, pageId)
    );
  }
  if (value["text-decoration"]) {
    updates.push(
      updateTextDecoration(
        value["text-decoration"],
        shapeIds,
        attributes,
        pageId
      )
    );
  }
  if (value["line-height"]) {
    updates.push(
      updateLineHeight(value["line-height"], shapeIds, attributes, pageId)
    );
  }

  return updates.filter(Boolean);
}

export function updateShapeDimensions(
  value: number,
  shapeIds: string[],
  attributes: Set<string>,
  pageId?: string
): any {
  return {
    type: "::update-shape-dimensions",
    watch: (_: any, __: any, ___: any) => {
      if (typeof value !== "number") return of();

      const updates: any[] = [];
      if (attributes.has("width")) {
        updates.push(
          dwtr.updateDimensions(shapeIds, "width", value, {
            ignoreTouched: true,
            pageId,
          })
        );
      }
      if (attributes.has("height")) {
        updates.push(
          dwtr.updateDimensions(shapeIds, "height", value, {
            ignoreTouched: true,
            pageId,
          })
        );
      }

      return of(...updates);
    },
  };
}

function attributesToActions(params: {
  value: any;
  shapeIds: string[];
  attributes: Set<string>;
  pageId?: string;
  state?: any;
}): Function[] {
  const { value, shapeIds, attributes, pageId } = params;
  const actions: Function[] = [];

  if (["width", "height"].some((a) => attributes.has(a))) {
    const dims = new Set(["width", "height"].filter((a) => attributes.has(a)));
    actions.push(() =>
      updateShapeDimensions(value, shapeIds, dims, pageId)
    );
  }

  if (["x", "y"].some((a) => attributes.has(a))) {
    const pos = new Set(["x", "y"].filter((a) => attributes.has(a)));
    actions.push(() => updateShapePosition(value, shapeIds, pos, pageId));
  }

  if (["p1", "p2", "p3", "p4"].some((a) => attributes.has(a))) {
    const padd = new Set(["p1", "p2", "p3", "p4"].filter((a) => attributes.has(a)));
    actions.push(() => updateLayoutPadding(value, shapeIds, padd, pageId));
  }

  if (["m1", "m2", "m3", "m4"].some((a) => attributes.has(a))) {
    const marg = new Set(["m1", "m2", "m3", "m4"].filter((a) => attributes.has(a)));
    actions.push(() =>
      updateLayoutItemMargin(value, shapeIds, Array.from(marg), pageId)
    );
  }

  if (["row-gap", "column-gap"].some((a) => attributes.has(a))) {
    const gap = new Set(["row-gap", "column-gap"].filter((a) => attributes.has(a)));
    actions.push(() => updateLayoutGap(value, shapeIds, gap, pageId));
  }

  if (["r1", "r2", "r3", "r4"].some((a) => attributes.has(a))) {
    const rad = new Set(["r1", "r2", "r3", "r4"].filter((a) => attributes.has(a)));
    actions.push(() =>
      attributes.size === 4 && rad.size === 4
        ? updateShapeRadiusAll(value, shapeIds, rad, pageId)
        : updateShapeRadiusForCorners(value, shapeIds, rad, pageId)
    );
  }

  if (attributes.has("stroke-width")) {
    actions.push(() => updateStrokeWidth(value, shapeIds, new Set(["stroke-width"]), pageId));
  }

  if (
    ["max-width", "max-height", "layout-item-max-h", "layout-item-max-w", "layout-item-min-h", "layout-item-min-w"].some(
      (a) => attributes.has(a)
    )
  ) {
    const limits = new Set(
      ["max-width", "max-height", "layout-item-max-h", "layout-item-max-w", "layout-item-min-h", "layout-item-min-w"].filter(
        (a) => attributes.has(a)
      )
    );
    actions.push(() =>
      updateLayoutSizingLimits(value, shapeIds, limits, pageId)
    );
  }

  return actions;
}

export function applyDimensionsToken(
  value: number,
  shapeIds: string[],
  attributes: Set<string>,
  pageId?: string
): any {
  return {
    type: "::apply-dimensions-token",
    watch: (_: any, state: any, __: any) => {
      if (typeof value !== "number") return of();

      const actions = attributesToActions({
        value,
        shapeIds,
        attributes,
        pageId,
        state,
      });

      return of(...actions.map((a) => a()));
    },
  };
}

export function applySpacingToken(
  value: number,
  shapeIds: string[],
  attributes: Set<string>,
  pageId?: string
): any {
  return {
    type: "::apply-spacing-token",
    watch: (_: any, state: any, __: any) => {
      const spacingAttrs = new Set([
        "row-gap",
        "column-gap",
        "m1",
        "m2",
        "m3",
        "m4",
        "p1",
        "p2",
        "p3",
        "p4",
      ]);

      if (
        typeof value !== "number" ||
        !attributes ||
        ![...attributes].every((a) => spacingAttrs.has(a))
      ) {
        return of();
      }

      const actions = attributesToActions({
        value,
        shapeIds,
        attributes,
        pageId,
        state,
      });

      return of(...actions.map((a) => a()));
    },
  };
}

export function applySizingToken(
  value: number,
  shapeIds: string[],
  attributes: Set<string>,
  pageId?: string
): any {
  return {
    type: "::apply-sizing-token",
    watch: (_: any, state: any, __: any) => {
      const sizingAttrs = new Set(["width", "height", "max-width", "max-height"]);

      if (
        typeof value !== "number" ||
        !attributes ||
        ![...attributes].every((a) => sizingAttrs.has(a))
      ) {
        return of();
      }

      const actions = attributesToActions({
        value,
        shapeIds,
        attributes,
        pageId,
        state,
      });

      return of(...actions.map((a) => a()));
    },
  };
}

export function applyToken(params: {
  attributes: Set<string>;
  attributesToRemove?: Set<string>;
  token: any;
  shapeIds: string[];
  onUpdateShape?: Function;
}): any {
  return {
    type: "::apply-token",
    watch: (_: any, state: any, __: any) => {
      if (state["workspace-editor-state"]) {
        return of(
          ntf.show({
            content: tr("workspace.tokens.error-text-edition"),
            type: "toast",
            level: "warning",
            timeout: 3000,
          })
        );
      }

      let attributesToRemove = params.attributesToRemove;
      if (ctt.typographyTokenKeys(params.token.type)) {
        attributesToRemove = set.union(attributesToRemove, ctt.typographyKeys);
      } else if (ctt.typographyKeys(params.token.type)) {
        attributesToRemove = set.union(attributesToRemove, ctt.typographyTokenKeys);
      }

      const tokensLib = dsh.lookupFileData(state)?.tokensLib;
      if (!tokensLib) return of();

      const tokens = ctob.getTokensInActiveSets(tokensLib);
      if (!tokens) return of();

      const resolved$ = cf.flags.has("tokenscript")
        ? of(ts.resolveTokens(tokens))
        : sd.resolveTokens(tokens);

      return resolved$.pipe(
        rxMap((resolvedTokens: any) => {
          const undoId = Symbol();
          const objects = dsh.lookupPageObjects(state);
          const selectedShapes: any = {};
          params.shapeIds.forEach((id) => {
            if (objects[id]) selectedShapes[id] = objects[id];
          });

          const filteredShapes = Object.entries(selectedShapes).filter(
            ([_, shape]: [string, any]) => {
              const objectsRef = objects;
              return (
                (ctsl.anyLayoutImmediateChild(objectsRef, shape) &&
                  ctt.spacingMarginKeys.some((a) => params.attributes.has(a))) ||
                (ctt.anyAppliableAttrForShape(
                  params.attributes,
                  shape.type,
                  shape.layout
                ) &&
                  allAttrsAppliableForToken(params.attributes, params.token.type))
              );
            }
          );

          const shapeIds = d.nilv(
            filteredShapes.map(([id]) => id),
            []
          );
          const anyVariant = filteredShapes.some(([_, s]) => ctk.isVariant(s));

          const resolvedValue =
            resolvedTokens.get?.(cfo.tokenIdentifier(params.token))?.resolvedValue ||
            resolvedTokens[cfo.tokenIdentifier(params.token)]?.resolvedValue;

          const resolvedValueFinal = cf.flags.has("tokenscript")
            ? ts.tokenscriptSymbolsToPenpotUnit(resolvedValue)
            : resolvedValue;

          const tokenizedAttributes = cfo.attributesMap(
            params.attributes,
            params.token
          );
          const type = params.token.type;

          return [
            ev.event({ name: "apply-tokens", type, appliedTo: params.attributes, appliedToVariant: anyVariant }),
            dwu.startUndoTransaction(undoId),
            dwsh.updateShapes(shapeIds, (shape) => {
              let updated = shape;
              if (attributesToRemove) {
                updated = {
                  ...updated,
                  appliedTokens: Object.entries(shape.appliedTokens || {})
                    .filter(([k]) => !attributesToRemove.has(k))
                    .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {}),
                };
              }
              return {
                ...updated,
                appliedTokens: {
                  ...updated.appliedTokens,
                  ...tokenizedAttributes,
                },
              };
            }),
            params.onUpdateShape
              ? (() => {
                  const res = params.onUpdateShape(
                    resolvedValueFinal,
                    shapeIds,
                    params.attributes
                  );
                  return res;
                })()
              : null,
            dwu.commitUndoTransaction(undoId),
          ].filter(Boolean);
        })
      );
    },
  };
}

export function applySpacingTokenSeparated(params: {
  token: any;
  shapes: any[];
  attr?: Set<string>;
}): any {
  return {
    type: "::apply-spacing-token-separated",
    watch: (_: any, state: any, __: any) => {
      const objects = dsh.lookupPageObjects(state);
      const { token, shapes, attr } = params;

      const { attributes, onUpdateShape } = tokenProperties.get(token.type) || {};

      const { other, frameChildren } = groupBy(
        shapes,
        (s: any) =>
          ctsl.anyLayoutImmediateChild(objects, s) ? "frameChildren" : "other"
      );

      return of(
        applyToken({
          attributes: attr || attributes,
          token,
          shapeIds: other.map((s: any) => s.id),
          onUpdateShape,
        }),
        applyToken({
          attributes: ctt.spacingMarginKeys,
          token,
          shapeIds: frameChildren.map((s: any) => s.id),
          onUpdateShape: updateLayoutItemMargin,
        })
      );
    },
  };
}

export function unapplyToken(params: {
  attributes: Set<string>;
  tokenName: string;
  shapeIds: string[];
}): any {
  return {
    type: "::unapply-token",
    watch: (_: any, __: any, ___: any) => {
      const removeToken = (appliedTokens: any) => {
        if (!appliedTokens) return null;
        const result = { ...appliedTokens };
        for (const attr of params.attributes) {
          delete result[`${params.tokenName}:${attr}`];
        }
        return result;
      };

      return of(
        dwsh.updateShapes(params.shapeIds, (shape) => ({
          ...shape,
          appliedTokens: removeToken(shape.appliedTokens),
        }))
      );
    },
  };
}

export function toggleToken(params: {
  token: any;
  attrs?: Set<string>;
  shapeIds: string[];
  expandWithChildren?: boolean;
}): any {
  return {
    type: "::on-toggle-token",
    watch: (_: any, state: any, __: any) => {
      const objects = dsh.lookupPageObjects(state);
      let shapes = params.shapeIds.map((id) => objects[id]).filter(Boolean);

      if (params.expandWithChildren) {
        const expanded: any[] = [];
        for (const shape of shapes) {
          if (shape.type === "group") {
            expanded.push(...shape.shapes.map((id: string) => objects[id]).filter(Boolean));
          } else {
            expanded.push(shape);
          }
        }
        shapes = expanded;
      }

      const { attributes, allAttributes, onUpdateShape } =
        tokenProperties.get(params.token.type) || {};

      const unapplyTokens = cfo.shapesTokenApplied(
        params.token,
        shapes,
        params.attrs || allAttributes || attributes
      );

      const shapeIds = shapes.map((s: any) => s.id);

      if (unapplyTokens) {
        return of(
          unapplyToken({
            attributes: params.attrs || allAttributes || attributes,
            tokenName: params.token.name,
            shapeIds,
          })
        );
      }

      if (params.token.type === "spacing" && !params.attrs) {
        return of(
          applySpacingTokenSeparated({
            token: params.token,
            attr: params.attrs,
            shapes,
          })
        );
      }

      return of(
        applyToken({
          attributes: params.attrs || attributes,
          token: params.token,
          shapeIds,
          onUpdateShape,
        })
      );
    },
  };
}

export function applyTokenOnSelected(
  colorOperations: any[],
  token: any
): any {
  return {
    type: "::apply-token-on-selected",
    watch: (_: any, __: any, ___: any) => {
      const undoId = Symbol();

      const operations = colorOperations.map((cop) => {
        const shapeIds = [cop.shapeId];
        switch (cop.prop) {
          case "fill":
            return applyToken({
              attributes: new Set(["fill"]),
              token,
              shapeIds,
              onUpdateShape: updateFill,
            });
          case "stroke":
            return applyToken({
              attributes: new Set(["stroke-color"]),
              token,
              shapeIds,
              onUpdateShape: updateStrokeColor,
            });
          case "content":
            return applyToken({
              attributes: new Set(["fill"]),
              token,
              shapeIds,
              onUpdateShape: updateFill,
            });
          case "shadow":
            return of();
          default:
            return of();
        }
      });

      return of(
        dwu.startUndoTransaction(undoId),
        ...operations.filter(Boolean),
        dwu.commitUndoTransaction(undoId)
      );
    },
  };
}

interface TokenProperty {
  title: string;
  attributes: Set<string>;
  allAttributes?: Set<string>;
  onUpdateShape: Function;
  modal?: {
    key: string;
    fields: Array<{ label: string; key: string }>;
  };
}

export const tokenProperties: Map<string, TokenProperty> = new Map([
  [
    "border-radius",
    {
      title: "Border Radius",
      attributes: ctt.borderRadiusKeys,
      onUpdateShape: updateShapeRadiusAll,
      modal: {
        key: "tokens/border-radius",
        fields: [{ label: "Border Radius", key: "border-radius" }],
      },
    },
  ],
  [
    "shadow",
    {
      title: "Shadow",
      attributes: ctt.shadowKeys,
      onUpdateShape: updateShadow,
      modal: {
        key: "tokens/shadow",
        fields: [{ label: "Shadow", key: "shadow" }],
      },
    },
  ],
  [
    "color",
    {
      title: "Color",
      attributes: new Set(["fill"]),
      allAttributes: ctt.colorKeys,
      onUpdateShape: updateFillStroke,
      modal: {
        key: "tokens/color",
        fields: [{ label: "Color", key: "color" }],
      },
    },
  ],
  [
    "font-size",
    {
      title: "Font Size",
      attributes: ctt.fontSizeKeys,
      onUpdateShape: updateFontSize,
      modal: {
        key: "tokens/font-size",
        fields: [{ label: "Font Size", key: "font-size" }],
      },
    },
  ],
  [
    "letter-spacing",
    {
      title: "Letter Spacing",
      attributes: ctt.letterSpacingKeys,
      onUpdateShape: updateLetterSpacing,
      modal: {
        key: "tokens/letter-spacing",
        fields: [{ label: "Letter Spacing", key: "letter-spacing" }],
      },
    },
  ],
  [
    "font-family",
    {
      title: "Font Family",
      attributes: ctt.fontFamilyKeys,
      onUpdateShape: updateFontFamilyInteractive,
      modal: {
        key: "tokens/font-family",
        fields: [{ label: "Font Family", key: "font-family" }],
      },
    },
  ],
  [
    "text-case",
    {
      title: "Text Case",
      attributes: ctt.textCaseKeys,
      onUpdateShape: updateTextCase,
      modal: {
        key: "tokens/text-case",
        fields: [{ label: "Text Case", key: "text-case" }],
      },
    },
  ],
  [
    "font-weight",
    {
      title: "Font Weight",
      attributes: ctt.fontWeightKeys,
      onUpdateShape: updateFontWeightInteractive,
      modal: {
        key: "tokens/font-weight",
        fields: [{ label: "Font Weight", key: "font-weight" }],
      },
    },
  ],
  [
    "typography",
    {
      title: "Typography",
      attributes: ctt.typographyTokenKeys,
      onUpdateShape: updateTypography,
      modal: {
        key: "tokens/typography",
        fields: [{ label: "Typography", key: "typography" }],
      },
    },
  ],
  [
    "text-decoration",
    {
      title: "Text Decoration",
      attributes: ctt.textDecorationKeys,
      onUpdateShape: updateTextDecorationInteractive,
      modal: {
        key: "tokens/text-decoration",
        fields: [{ label: "Text Decoration", key: "text-decoration" }],
      },
    },
  ],
  [
    "stroke-width",
    {
      title: "Stroke Width",
      attributes: ctt.strokeWidthKeys,
      onUpdateShape: updateStrokeWidth,
      modal: {
        key: "tokens/stroke-width",
        fields: [{ label: "Stroke Width", key: "stroke-width" }],
      },
    },
  ],
  [
    "sizing",
    {
      title: "Sizing",
      attributes: new Set(["width", "height"]),
      allAttributes: ctt.sizingKeys,
      onUpdateShape: applySizingToken,
      modal: {
        key: "tokens/sizing",
        fields: [{ label: "Sizing", key: "sizing" }],
      },
    },
  ],
  [
    "dimensions",
    {
      title: "Dimensions",
      attributes: new Set(["width", "height"]),
      allAttributes: set.union(
        ctt.spacingKeys,
        ctt.sizingKeys,
        ctt.borderRadiusKeys,
        ctt.axisKeys,
        ctt.strokeWidthKeys
      ),
      onUpdateShape: applyDimensionsToken,
      modal: {
        key: "tokens/dimensions",
        fields: [{ label: "Dimensions", key: "dimensions" }],
      },
    },
  ],
  [
    "opacity",
    {
      title: "Opacity",
      attributes: ctt.opacityKeys,
      onUpdateShape: updateOpacity,
      modal: {
        key: "tokens/opacity",
        fields: [{ label: "Opacity", key: "opacity" }],
      },
    },
  ],
  [
    "number",
    {
      title: "Number",
      attributes: ctt.rotationKeys,
      allAttributes: ctt.numberKeys,
      onUpdateShape: updateRotation,
      modal: {
        key: "tokens/number",
        fields: [{ label: "Number", key: "number" }],
      },
    },
  ],
  [
    "rotation",
    {
      title: "Rotation",
      attributes: ctt.rotationKeys,
      onUpdateShape: updateRotation,
      modal: {
        key: "tokens/rotation",
        fields: [{ label: "Rotation", key: "rotation" }],
      },
    },
  ],
  [
    "spacing",
    {
      title: "Spacing",
      attributes: new Set(["column-gap", "row-gap"]),
      allAttributes: ctt.spacingKeys,
      onUpdateShape: applySpacingToken,
      modal: {
        key: "tokens/spacing",
        fields: [{ label: "Spacing", key: "spacing" }],
      },
    },
  ],
]);

export function getTokenProperties(token: any): TokenProperty | undefined {
  return tokenProperties.get(token.type);
}

export function getUpdateShapeFn(token: any): Function | undefined {
  if (!token) return undefined;
  const props = tokenProperties.get(token.type);
  return props?.onUpdateShape;
}

export function appliableAttributesForToken(tokenType: string): Set<string> {
  const props = tokenProperties.get(tokenType);
  return props?.allAttributes || props?.attributes || new Set();
}

export function allAttrsAppliableForToken(
  attributes: Set<string>,
  tokenType: string
): boolean {
  const appliable = appliableAttributesForToken(tokenType);
  return [...attributes].every((a) => appliable.has(a));
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
