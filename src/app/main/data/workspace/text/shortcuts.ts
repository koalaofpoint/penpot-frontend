/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (c) KALEIDOS INC
 */

import * as D from "app/common/data";
import * as CFH from "app/common/files/helpers";
import * as TXT from "app/common/types/text";
import * as DS from "app/main/data/shortcuts";
import * as DWT from "app/main/data/workspace/texts";
import * as DWU from "app/main/data/workspace/undo";
import * as FEATURES from "app/main/features";
import * as FONTS from "app/main/fonts";
import * as REFS from "app/main/refs";
import * as ST from "app/main/store";
import * as STR from "cuerdas/core";
import { derived } from "okulary/core";

//////////////////////////////////////////////////////////////////////
// Shortcuts
//////////////////////////////////////////////////////////////////////

// Shortcuts format https://github.com/ccampbell/mousetrap

function isBold(variantId: string): boolean {
  return ["bold", "black", "700"].some((suffix) => variantId.includes(suffix));
}

function isItalic(variantId: string): boolean {
  return ["italic", "cursive"].some((suffix) => variantId.includes(suffix));
}

function generateVariantProps(textValues: any, variantId: string): any {
  const firstIntersection = (list1: string[], list2: string[]) =>
    list2.find((item) => list1.includes(item)) || null;

  const currentVariant = textValues["font-variant-id"];
  const boldOptions =
    currentVariant.includes("black")
      ? ["black", "bold", "700"]
      : currentVariant.includes("700")
        ? ["700", "black", "bold"]
        : ["bold", "black", "700"];

  let currentVariantNoItalic: string | null = null;
  if (currentVariant.includes("italic")) {
    currentVariantNoItalic = currentVariant.slice(0, -6);
  } else if (currentVariant.includes("cursive")) {
    currentVariantNoItalic = currentVariant.slice(0, -7);
  }

  const regularOptions = [currentVariantNoItalic, "regular", "normal", "400"].filter(Boolean) as string[];
  const italicOptions = [
    !currentVariant.includes("bold") &&
    !currentVariant.includes("black") &&
    !currentVariant.includes("700")
      ? currentVariant + "italic"
      : null,
    "italic",
    "cursive",
  ].filter(Boolean) as string[];

  const boldItalicOptions =
    currentVariant.includes("black")
      ? ["blackitalic", "blackcursive", "bolditalic", "700italic", "boldcursive", "700cursive"]
      : currentVariant.includes("700")
        ? ["700italic", "700cursive", "bolditalic", "blackitalic", "boldcursive", "blackcursive"]
        : ["bolditalic", "700italic", "blackitalic", "boldcursive", "700cursive", "blackcursive"];

  const fontId = textValues["font-id"];
  const fonts = FONTS.fontsdb.deref();
  const font = fonts[fontId];
  const variants = font?.variants?.map((v: any) => v.id) || [];

  const chooseRegular = () => firstIntersection(variants, regularOptions);
  const chooseBold = () => firstIntersection(variants, boldOptions);
  const chooseItalic = () => firstIntersection(variants, italicOptions);
  const chooseBoldItalic = () => firstIntersection(variants, boldItalicOptions) || chooseBold();
  const chooseItalicBold = () => firstIntersection(variants, boldItalicOptions) || chooseItalic();

  const bold = isBold(currentVariant);
  const italic = isItalic(currentVariant);
  const addBold =
    !bold && (variantId === "add-bold" || variantId === "toggle-bold");
  const removeBold =
    bold && (variantId === "remove-bold" || variantId === "toggle-bold");
  const addItalic =
    !italic && (variantId === "add-italic" || variantId === "toggle-italic");
  const removeItalic =
    italic && (variantId === "remove-italic" || variantId === "toggle-italic");

  let newVariant: string | null = null;

  if (addBold && italic) {
    newVariant = chooseBoldItalic();
  } else if (addBold && !italic) {
    newVariant = chooseBold();
  } else if (removeBold && italic) {
    newVariant = chooseItalic();
  } else if (removeBold && !italic) {
    newVariant = chooseRegular();
  } else if (addItalic && bold) {
    newVariant = chooseItalicBold();
  } else if (addItalic && !bold) {
    newVariant = chooseItalic();
  } else if (removeItalic && bold) {
    newVariant = chooseBold();
  } else if (removeItalic && !italic) {
    newVariant = chooseRegular();
  }

  if (!newVariant) return null;

  const matchedVariant = font?.variants?.find((v: any) => v.id === newVariant);
  if (!matchedVariant) return null;

  return {
    "font-variant-id": matchedVariant.id,
    "font-weight": matchedVariant.weight,
    "font-style": matchedVariant.style,
  };
}

export function calculateTextValues(shape: any): any {
  const isV2Editor = FEATURES.activeFeature(ST.state, "text-editor/v2");
  const stateMap = isV2Editor
    ? REFS.workspaceV2EditorState.deref()
    : REFS.workspaceEditorState.deref();
  const editorState = isV2Editor ? null : stateMap?.get?.(shape.id);
  const editorInstance = isV2Editor ? REFS.workspaceEditor.deref() : null;

  return D.merge(
    DWT.currentRootValues({
      shape,
      attrs: TXT.rootAttrs,
    }),
    DWT.currentParagraphValues({
      editorState,
      editorInstance,
      shape,
      attrs: TXT.paragraphAttrs,
    }),
    DWT.currentTextValues({
      editorState,
      editorInstance,
      shape,
      attrs: TXT.textNodeAttrs,
    })
  );
}

function updateAttrs(shape: any, props: any): void {
  const textValues = calculateTextValues(shape);
  const fontSize = D.parseDouble(textValues["font-size"]);
  let finalProps = props;

  if (props["font-size-inc"]) {
    finalProps = { "font-size": String(fontSize + 1) };
  } else if (props["font-size-dec"]) {
    finalProps = { "font-size": String(fontSize - 1) };
  } else if (props["text-decoration"] === "toggle-underline") {
    finalProps = {
      "text-decoration": textValues["text-decoration"] === "underline" ? "none" : "underline",
    };
  } else if (props["text-decoration"] === "toggle-line-through") {
    finalProps = {
      "text-decoration": textValues["text-decoration"] === "line-through" ? "none" : "line-through",
    };
  } else if (props["font-variant-id"]) {
    finalProps = generateVariantProps(textValues, props["font-variant-id"]);
  }

  if (shape && finalProps) {
    ST.emit(DWT.updateAttrs(shape.id, finalProps));
  }
}

function blendProps(shapes: any[], props: any): any {
  const textValues = shapes.map(calculateTextValues);
  const allUnderline = textValues.every((tv) => tv["text-decoration"] === "underline");
  const allLineThrough = textValues.every((tv) => tv["text-decoration"] === "line-through");
  const allBold = textValues.every((tv) => isBold(tv["font-variant-id"]));
  const allItalic = textValues.every((tv) => isItalic(tv["font-variant-id"]));

  if (props["text-decoration"] === "toggle-underline") {
    return allUnderline ? { "text-decoration": "none" } : { "text-decoration": "underline" };
  }
  if (props["text-decoration"] === "toggle-line-through") {
    return allLineThrough ? { "text-decoration": "none" } : { "text-decoration": "line-through" };
  }
  if (props["font-variant-id"] === "toggle-bold") {
    return allBold ? { "font-variant-id": "remove-bold" } : { "font-variant-id": "add-bold" };
  }
  if (props["font-variant-id"] === "toggle-italic") {
    return allItalic ? { "font-variant-id": "remove-italic" } : { "font-variant-id": "add-italic" };
  }
  return props;
}

const selectedShapesWithChildren = derived(
  (state: any) => {
    const { objects, selected } = state;
    const xform = (sel: any[]) =>
      sel.flatMap((id) => {
        const children = CFH.getChildrenIds(objects, id);
        return children.length > 0 ? children : [id];
      });
    const shapes = xform(selected);
    return shapes.map((id) => objects?.[id]).filter(Boolean);
  },
  // WORKAROUND: we should not use it here, but util we restructure
  // this, the simplest way is just deref private var
  (REFS as any).selectedShapesData.deref()
);

function updateAttrsWhenNoReadonly(props: any): void {
  const undoId = Symbol();

  const canEdit = REFS.permissions.deref()?.canEdit;
  const readOnly = REFS.workspaceReadOnly.deref();

  const textShapes = selectedShapesWithChildren.deref()
    .filter(CFH.textShape);

  const finalProps = textShapes.length > 1 ? blendProps(textShapes, props) : props;

  if (canEdit && !readOnly && textShapes.length > 0) {
    ST.emit(DWU.startUndoTransaction(undoId));
    textShapes.forEach((shape: any) => updateAttrs(shape, finalProps));
    ST.emit(DWU.commitUndoTransaction(undoId));
  }
}

export const shortcuts = {
  underline: {
    tooltip: DS.meta("U"),
    command: DS.cMod("u"),
    subsections: ["text-editor"],
    fn: () => updateAttrsWhenNoReadonly({ "text-decoration": "toggle-underline" }),
  },

  "line-through": {
    tooltip: DS.alt(DS.metaShift("5")),
    command: "alt+shift+5",
    subsections: ["text-editor"],
    fn: () => updateAttrsWhenNoReadonly({ "text-decoration": "toggle-line-through" }),
  },

  "font-size-inc": {
    tooltip: DS.metaShift(">"),
    command: DS.cMod("shift+."),
    subsections: ["text-editor"],
    fn: () => updateAttrsWhenNoReadonly({ "font-size-inc": true }),
  },

  "font-size-dec": {
    tooltip: DS.metaShift("<"),
    command: DS.cMod("shift+,"),
    subsections: ["text-editor"],
    fn: () => updateAttrsWhenNoReadonly({ "font-size-dec": true }),
  },

  bold: {
    tooltip: DS.meta("b"),
    command: DS.cMod("b"),
    subsections: ["text-editor"],
    fn: () => updateAttrsWhenNoReadonly({ "font-variant-id": "toggle-bold" }),
  },

  italic: {
    tooltip: DS.meta("i"),
    command: DS.cMod("i"),
    subsections: ["text-editor"],
    fn: () => updateAttrsWhenNoReadonly({ "font-variant-id": "toggle-italic" }),
  },
};