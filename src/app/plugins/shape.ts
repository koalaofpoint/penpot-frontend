// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from "app/common/data";
import * as dm from "app/common/data.macros";
import * as cfh from "app/common/files.helpers";
import * as grc from "app/common/geom.rect";
import * as gsh from "app/common.geom.shapes";
import * as json from "app/common.json";
import * as cpn from "app/common.path-names";
import * as crc from "app/common.record";
import * as sm from "app/common.schema";
import * as svg.path from "app/common.svg.path";
import * as clr from "app/common.types.color";
import * as ctk from "app/common.types.component";
import * as ctn from "app/common.types.container";
import * as ctf from "app/common.types.file";
import * as types.fills from "app/common.types.fills";
import * as ctg from "app/common.types.grid";
import * as path from "app/common.types.path";
import * as cts from "app/common.types.shape";
import * as ctsb from "app/common.types.shape.blur";
import * as ctse from "app/common.types.shape.export";
import * as ctsi from "app/common.types.shape.interactions";
import * as ctl from "app/common.types.shape.layout";
import * as ctsr from "app/common.types.shape.radius";
import * as ctss from "app/common.types.shape.shadow";
import * as txt from "app/common.types.text";
import * as cto from "app/common.types.token";
import * as uuid from "app/common.uuid";
import * as dp from "app/main.data.plugins";
import * as dw from "app/main.data.workspace";
import * as dwg from "app/main.data.workspace.groups";
import * as dwgu from "app/main.data.workspace.guides";
import * as dwi from "app/main.data.workspace.interactions";
import * as dwl from "app/main.data.workspace.libraries";
import * as dws from "app/main.data.workspace.selection";
import * as dwsl from "app/main.data.workspace.shape-layout";
import * as dwsh from "app/main.data.workspace.shapes";
import * as dwt from "app/main.data.workspace.texts";
import * as dwta from "app/main.data.workspace.tokens.application";
import * as dwv from "app/main.data.workspace.variants";
import * as rp from "app/main.repo";
import * as st from "app/main.store";
import { natural-child-ordering? } from "app/plugins.flags";
import * as flex from "app/plugins.flex";
import * as format from "app/plugins.format";
import * as grid from "app/plugins.grid";
import * as parser from "app/plugins.parser";
import * as r from "app/plugins.register";
import * as rg from "app/plugins.ruler-guides";
import * as text from "app/plugins.text";
import * as u from "app/plugins.utils";
import * as http from "app.util.http";
import * as obj from "app.util.object";
import * as str from "cuerdas.core";
import { Subject, map, mapcat, takeUntil, from } from "rxjs";

declare let shapeProxy: any;
declare let shapeProxy: any;

// This is injected from plugin/librraies
let variantProxy: any = null;

export function interactionProxy(p: any): boolean {
  return obj.typeOf(p, "InteractionProxy");
}

export function interactionProxy(
  pluginId: string,
  fileId: any,
  pageId: any,
  shapeId: any,
  index: number
): any {
  return obj.reify(
    { name: "InteractionProxy" },
    {
      $plugin: { enumerable: false, get: () => pluginId },
      $file: { enumerable: false, get: () => fileId },
      $page: { enumerable: false, get: () => pageId },
      $shape: { enumerable: false, get: () => shapeId },
      $index: { enumerable: false, get: () => index },

      shape: {
        enumerable: false,
        get: () => shapeProxy(pluginId, fileId, pageId, shapeId),
      },

      trigger: {
        this: true,
        get(): any {
          return format.formatKey(u.proxyToInteraction(this).eventType);
        },
        set(value: any) {
          const valueParsed = parser.parseKeyword(value);
          if (!ctsi.eventTypes.has(valueParsed)) {
            u.displayNotValid("trigger", value);
          } else {
            st.emit!(
              dwi.updateInteraction(
                { id: shapeId },
                index,
                (x: any) => ({ ...x, eventType: valueParsed }),
                { pageId }
              )
            );
          }
        },
      },

      delay: {
        this: true,
        get(): number {
          return u.proxyToInteraction(this).delay;
        },
        set(value: any) {
          if (!typeof value === "number" || !value > 0) {
            u.displayNotValid("delay", value);
          } else {
            st.emit!(
              dwi.updateInteraction(
                { id: shapeId },
                index,
                (x: any) => ({ ...x, delay: value }),
                { pageId }
              )
            );
          }
        },
      },

      action: {
        this: true,
        get() {
          return format.formatAction(
            u.proxyToInteraction(this),
            pluginId,
            fileId,
            pageId
          );
        },
        set(self: any, value: any) {
          const params = parser.parseAction(value);
          const interaction = d.patchObject(u.proxyToInteraction(self), params);
          if (!sm.validate(ctsi.schemaInteraction, interaction)) {
            u.displayNotValid("action", interaction);
          } else {
            st.emit!(
              dwi.updateInteraction(
                { id: shapeId },
                index,
                (x: any) => d.patchObject(x, params),
                { pageId }
              )
            );
          }
        },
      },

      remove: () => {
        st.emit!(dwi.removeInteraction({ id: shapeId }, index));
      },
    }
  );
}

let libTypographyProxy: any = null;
let libComponentProxy: any = null;

export function textProps(shape: any): any {
  return d.merge(
    dwt.currentRootValues({ shape, attrs: txt.rootAttrs }),
    dwt.currentParagraphValues({ shape, attrs: txt.paragraphAttrs }),
    dwt.currentTextValues({ shape, attrs: txt.textNodeAttrs })
  );
}

function shadowDefaults(shadow: any): any {
  return d.patchObject(
    {
      id: uuid.next(),
      style: "drop-shadow",
      color: { color: clr.black, opacity: 0.2 },
      offsetX: 4,
      offsetY: 4,
      blur: 4,
      spread: 0,
      hidden: false,
    },
    shadow
  );
}

function blurDefaults(blur: any): any {
  return d.patchObject(
    {
      id: uuid.next(),
      type: "layer-blur",
      value: 4,
      hidden: false,
    },
    blur
  );
}

export function shapeProxy?(p: any): boolean {
  return obj.typeOf(p, "ShapeProxy");
}

export function tokenProxy?(t: any): boolean {
  return obj.typeOf(t, "TokenProxy");
}

export function shapeProxy(
  pluginId: string,
  id: any
): any;
export function shapeProxy(
  pluginId: string,
  pageId: any,
  id: any
): any;
export function shapeProxy(
  pluginId: string,
  fileId: any,
  pageId: any,
  id: any
): any;
export function shapeProxy(
  pluginId: string,
  fileIdOrPageId: any,
  pageIdOrId?: any,
  maybePageId?: any,
  maybeId?: any
): any {
  if (arguments.length === 2) {
    const id = fileIdOrPageId;
    const state = st.store.getState();
    return shapeProxy(pluginId, state.currentFileId, state.currentPageId, id);
  }

  if (arguments.length === 3) {
    const pageId = fileIdOrPageId;
    const id = pageIdOrId;
    const state = st.store.getState();
    return shapeProxy(pluginId, state.currentFileId, pageId, id);
  }

  const fileId = fileIdOrPageId;
  const pageId = pageIdOrId;
  const id = maybePageId;

  // Asserts would be handled at runtime in TS, but we keep for logic flow
  if (!uuid?.(fileId)) return;
  if (!uuid?.(pageId)) return;
  if (!uuid?.(id)) return;

  const data = u.locateShape(fileId, pageId, id);
  return obj.reify(
    { name: "ShapeProxy" },
    {
      $plugin: { enumerable: false, get: () => pluginId },
      $id: { enumerable: false, get: () => id },
      $file: { enumerable: false, get: () => fileId },
      $page: { enumerable: false, get: () => pageId },

      id: {
        this: true,
        get(): string {
          return str(u.proxyToShape(this).id);
        },
      },

      type: {
        this: true,
        get() {
          return format.shapeType(u.proxyToShape(this).type);
        },
      },

      name: {
        this: true,
        get() {
          return u.proxyToShape(this).name;
        },
        set(self: any, value: any) {
          const id = obj.get(self, "$id");
          const trimmed = typeof value === "string" ? str.trim(value) : value;
          const cleaned = cpn.cleanPath(trimmed);
          const valid =
            cleaned != null &&
            !str.endsWith(cleaned, "/") &&
            !str.blank(cleaned);

          if (!r.checkPermission(pluginId, "content:write")) {
            u.displayNotValid("name", "Plugin doesn't have 'content:write' permission");
          } else if (!valid) {
            u.displayNotValid("name", cleaned);
          } else {
            st.emit!(dw.renameShapeOrVariant(fileId, pageId, id, cleaned));
          }
        },
      },

      blocked: {
        this: true,
        get(): boolean {
          return Boolean(u.proxyToShape(this).blocked);
        },
        set(self: any, value: any) {
          if (typeof value !== "boolean") {
            u.displayNotValid("blocked", value);
          } else if (!r.checkPermission(pluginId, "content:write")) {
            u.displayNotValid("blocked", "Plugin doesn't have 'content:write' permission");
          } else {
            const id = obj.get(self, "$id");
            st.emit!(dwsh.updateShapes([id], (s: any) => ({ ...s, blocked: value })));
          }
        },
      },

      hidden: {
        this: true,
        get(): boolean {
          return Boolean(u.proxyToShape(this).hidden);
        },
        set(self: any, value: any) {
          if (typeof value !== "boolean") {
            u.displayNotValid("hidden", value);
          } else if (!r.checkPermission(pluginId, "content:write")) {
            u.displayNotValid("hidden", "Plugin doesn't have 'content:write' permission");
          } else {
            const id = obj.get(self, "$id");
            st.emit!(dwsh.updateShapes([id], (s: any) => ({ ...s, hidden: value })));
          }
        },
      },

      visible: {
        this: true,
        get(): boolean {
          return !u.proxyToShape(this).hidden;
        },
        set(self: any, value: any) {
          if (typeof value !== "boolean") {
            u.displayNotValid("visible", value);
          } else if (!r.checkPermission(pluginId, "content:write")) {
            u.displayNotValid("visible", "Plugin doesn't have 'content:write' permission");
          } else {
            const id = obj.get(self, "$id");
            st.emit!(dwsh.updateShapes([id], (s: any) => ({ ...s, hidden: !value })));
          }
        },
      },

      proportionLock: {
        this: true,
        get(): boolean {
          return Boolean(u.proxyToShape(this).proportionLock);
        },
        set(self: any, value: any) {
          if (typeof value !== "boolean") {
            u.displayNotValid("proportionLock", value);
          } else if (!r.checkPermission(pluginId, "content:write")) {
            u.displayNotValid("proportionLock", "Plugin doesn't have 'content:write' permission");
          } else {
            const id = obj.get(self, "$id");
            st.emit!(dwsh.updateShapes([id], (s: any) => ({ ...s, proportionLock: value })));
          }
        },
      },

      constraintsHorizontal: {
        this: true,
        get() {
          return d.name(u.proxyToShape(this).constraintsH);
        },
        set(self: any, value: any) {
          const id = obj.get(self, "$id");
          const valueKW = value as any; // keyword
          if (!cts.horizontalConstraintTypes.has(valueKW)) {
            u.displayNotValid("constraintsHorizontal", value);
          } else if (!r.checkPermission(pluginId, "content:write")) {
            u.displayNotValid("constraintsHorizontal", "Plugin doesn't have 'content:write' permission");
          } else {
            st.emit!(dwsh.updateShapes([id], (s: any) => ({ ...s, constraintsH: valueKW })));
          }
        },
      },

      constraintsVertical: {
        this: true,
        get() {
          return d.name(u.proxyToShape(this).constraintsV);
        },
        set(self: any, value: any) {
          const id = obj.get(self, "$id");
          const valueKW = value as any;
          if (!cts.verticalConstraintTypes.has(valueKW)) {
            u.displayNotValid("constraintsVertical", value);
          } else if (!r.checkPermission(pluginId, "content:write")) {
            u.displayNotValid("constraintsVertical", "Plugin doesn't have 'content:write' permission");
          } else {
            st.emit!(dwsh.updateShapes([id], (s: any) => ({ ...s, constraintsV: valueKW })));
          }
        },
      },

      borderRadius: {
        this: true,
        get() {
          return u.proxyToShape(this).r1;
        },
        set(self: any, value: any) {
          const id = obj.get(self, "$id");
          if (!sm.validSafeInt(value) || value < 0) {
            u.displayNotValid("borderRadius", value);
          } else if (!r.checkPermission(pluginId, "content:write")) {
            u.displayNotValid("borderRadius", "Plugin doesn't have 'content:write' permission");
          } else {
            st.emit!(dwsh.updateShapes([id], (s: any) => ctsr.setRadiusToAllCorners(s, value)));
          }
        },
      },

      borderRadiusTopLeft: {
        this: true,
        get() {
          return u.proxyToShape(this).r1;
        },
        set(self: any, value: any) {
          const id = obj.get(self, "$id");
          if (!sm.validSafeInt(value)) {
            u.displayNotValid("borderRadiusTopLeft", value);
          } else if (!r.checkPermission(pluginId, "content:write")) {
            u.displayNotValid("borderRadiusTopLeft", "Plugin doesn't have 'content:write' permission");
          } else {
            st.emit!(dwsh.updateShapes([id], (s: any) => ctsr.setRadiusToSingleCorner(s, "r1", value)));
          }
        },
      },

      borderRadiusTopRight: {
        this: true,
        get() {
          return u.proxyToShape(this).r2;
        },
        set(self: any, value: any) {
          const id = obj.get(self, "$id");
          if (!sm.validSafeInt(value)) {
            u.displayNotValid("borderRadiusTopRight", value);
          } else if (!r.checkPermission(pluginId, "content:write")) {
            u.displayNotValid("borderRadiusTopRight", "Plugin doesn't have 'content:write' permission");
          } else {
            st.emit!(dwsh.updateShapes([id], (s: any) => ctsr.setRadiusToSingleCorner(s, "r2", value)));
          }
        },
      },

      borderRadiusBottomRight: {
        this: true,
        get() {
          return u.proxyToShape(this).r3;
        },
        set(self: any, value: any) {
          const id = obj.get(self, "$id");
          if (!sm.validSafeInt(value)) {
            u.displayNotValid("borderRadiusBottomRight", value);
          } else if (!r.checkPermission(pluginId, "content:write")) {
            u.displayNotValid("borderRadiusBottomRight", "Plugin doesn't have 'content:write' permission");
          } else {
            st.emit!(dwsh.updateShapes([id], (s: any) => ctsr.setRadiusToSingleCorner(s, "r3", value)));
          }
        },
      },

      borderRadiusBottomLeft: {
        this: true,
        get() {
          return u.proxyToShape(this).r4;
        },
        set(self: any, value: any) {
          const id = obj.get(self, "$id");
          if (!sm.validSafeInt(value)) {
            u.displayNotValid("borderRadiusBottomLeft", value);
          } else if (!r.checkPermission(pluginId, "content:write")) {
            u.displayNotValid("borderRadiusBottomLeft", "Plugin doesn't have 'content:write' permission");
          } else {
            st.emit!(dwsh.updateShapes([id], (s: any) => ctsr.setRadiusToSingleCorner(s, "r4", value)));
          }
        },
      },

      opacity: {
        this: true,
        get() {
          return u.proxyToShape(this).opacity;
        },
        set(self: any, value: any) {
          const id = obj.get(self, "$id");
          if (!sm.validSafeNumber(value) || value < 0 || value > 1) {
            u.displayNotValid("opacity", value);
          } else if (!r.checkPermission(pluginId, "content:write")) {
            u.displayNotValid("opacity", "Plugin doesn't have 'content:write' permission");
          } else {
            st.emit!(dwsh.updateShapes([id], (s: any) => ({ ...s, opacity: value })));
          }
        },
      },

      blendMode: {
        this: true,
        get() {
          return d.name(d.nilv(u.proxyToShape(this).blendMode, "normal"));
        },
        set(self: any, value: any) {
          const id = obj.get(self, "$id");
          const valueKW = value as any;
          if (!cts.blendModes.has(valueKW)) {
            u.displayNotValid("blendMode", value);
          } else if (!r.checkPermission(pluginId, "content:write")) {
            u.displayNotValid("blendMode", "Plugin doesn't have 'content:write' permission");
          } else {
            st.emit!(dwsh.updateShapes([id], (s: any) => ({ ...s, blendMode: valueKW })));
          }
        },
      },

      shadows: {
        this: true,
        get() {
          return format.formatShadows(u.proxyToShape(this).shadow);
        },
        set(self: any, value: any) {
          const id = obj.get(self, "$id");
          const parsedValue = (value as any[]).map((x) => shadowDefaults(parser.parseShadow(x)));
          if (!sm.validate(["vector", ctss.schemaShadow], parsedValue)) {
            u.displayNotValid("shadows", value);
          } else if (!r.checkPermission(pluginId, "content:write")) {
            u.displayNotValid("shadows", "Plugin doesn't have 'content:write' permission");
          } else {
            st.emit!(dwsh.updateShapes([id], (s: any) => ({ ...s, shadow: parsedValue })));
          }
        },
      },

      blur: {
        this: true,
        get() {
          return format.formatBlur(u.proxyToShape(this).blur);
        },
        set(self: any, value: any) {
          const id = obj.get(self, "$id");
          if (value == null) {
            st.emit!(dwsh.updateShapes([id], (s: any) => {
              const { blur: _, ...rest } = s;
              return rest;
            }));
          } else {
            const parsedValue = blurDefaults(parser.parseBlur(value));
            if (!sm.validate(ctsb.schemaBlur, parsedValue)) {
              u.displayNotValid("blur", value);
            } else if (!r.checkPermission(pluginId, "content:write")) {
              u.displayNotValid("blur", "Plugin doesn't have 'content:write' permission");
            } else {
              st.emit!(dwsh.updateShapes([id], (s: any) => ({ ...s, blur: parsedValue })));
            }
          }
        },
      },

      exports: {
        this: true,
        get() {
          return format.formatExports(u.proxyToShape(this).exports);
        },
        set(self: any, value: any) {
          const id = obj.get(self, "$id");
          const parsedValue = parser.parseExports(value);
          if (!sm.validate(["vector", ctse.schemaExport], parsedValue)) {
            u.displayNotValid("exports", value);
          } else if (!r.checkPermission(pluginId, "content:write")) {
            u.displayNotValid("exports", "Plugin doesn't have 'content:write' permission");
          } else {
            st.emit!(dwsh.updateShapes([id], (s: any) => ({ ...s, exports: parsedValue })));
          }
        },
      },

      x: {
        this: true,
        get() {
          return grc.pointsToRect(u.proxyToShape(this).points).x;
        },
        set(self: any, value: any) {
          const id = obj.get(self, "$id");
          if (!sm.validSafeNumber(value)) {
            u.displayNotValid("x", value);
          } else if (!r.checkPermission(pluginId, "content:write")) {
            u.displayNotValid("x", "Plugin doesn't have 'content:write' permission");
          } else {
            st.emit!(dw.updatePosition(id, { x: value }, { absolute: true }));
          }
        },
      },

      y: {
        this: true,
        get() {
          return grc.pointsToRect(u.proxyToShape(this).points).y;
        },
        set(self: any, value: any) {
          const id = obj.get(self, "$id");
          if (!sm.validSafeNumber(value)) {
            u.displayNotValid("y", value);
          } else if (!r.checkPermission(pluginId, "content:write")) {
            u.displayNotValid("y", "Plugin doesn't have 'content:write' permission");
          } else {
            st.emit!(dw.updatePosition(id, { y: value }, { absolute: true }));
          }
        },
      },

      parent: {
        this: true,
        enumerable: false,
        get(self: any) {
          const shape = u.proxyToShape(self);
          if (!cfh.root(shape)) {
            const parentId = shape.parentId;
            return shapeProxy(
              pluginId,
              obj.get(self, "$file"),
              obj.get(self, "$page"),
              parentId
            );
          }
          return null;
        },
      },

      parentIndex: {
        this: true,
        get(self: any) {
          const shape = u.proxyToShape(self);
          if (cfh.root(shape)) {
            return 0;
          }
          const fileId = obj.get(self, "$file");
          const pageId = obj.get(self, "$page");
          const parent = u.locateShape(fileId, pageId, shape.parentId);
          const index = d.indexOf(parent.shapes, id);
          return index;
        },
      },

      parentX: {
        this: true,
        get(self: any) {
          const shape = u.proxyToShape(self);
          const shapeX = grc.pointsToRect(shape.points).x;
          const parentId = shape.parentId;
          const parent = u.locateShape(obj.get(self, "$file"), obj.get(self, "$page"), parentId);
          return shapeX - parent.x;
        },
        set(self: any, value: any) {
          if (!sm.validSafeNumber(value)) {
            u.displayNotValid("parentX", value);
          } else if (!r.checkPermission(pluginId, "content:write")) {
            u.displayNotValid("parentX", "Plugin doesn't have 'content:write' permission");
          } else {
            const id = obj.get(self, "$id");
            const parentId = u.proxyToShape(self).parentId;
            const parent = u.locateShape(obj.get(self, "$file"), obj.get(self, "$page"), parentId);
            const parentX = parent.x;
            st.emit!(dw.updatePosition(id, { x: parentX + value }, { absolute: true }));
          }
        },
      },

      parentY: {
        this: true,
        get(self: any) {
          const shape = u.proxyToShape(self);
          const shapeY = grc.pointsToRect(shape.points).y;
          const parentId = shape.parentId;
          const parent = u.locateShape(obj.get(self, "$file"), obj.get(self, "$page"), parentId);
          return shapeY - parent.y;
        },
        set(self: any, value: any) {
          if (!sm.validSafeNumber(value)) {
            u.displayNotValid("parentY", value);
          } else if (!r.checkPermission(pluginId, "content:write")) {
            u.displayNotValid("parentY", "Plugin doesn't have 'content:write' permission");
          } else {
            const id = obj.get(self, "$id");
            const parentId = u.proxyToShape(self).parentId;
            const parent = u.locateShape(obj.get(self, "$file"), obj.get(self, "$page"), parentId);
            const parentY = parent.y;
            st.emit!(dw.updatePosition(id, { y: parentY + value }, { absolute: true }));
          }
        },
      },

      boardX: {
        this: true,
        get(self: any) {
          const shape = u.proxyToShape(self);
          const shapeX = grc.pointsToRect(shape.points).x;
          const frameId = shape.parentId;
          const frame = u.locateShape(obj.get(self, "$file"), obj.get(self, "$page"), frameId);
          const frameX = frame.x;
          return shapeX - frameX;
        },
        set(self: any, value: any) {
          if (!sm.validSafeNumber(value)) {
            u.displayNotValid("boardX", value);
          } else if (!r.checkPermission(pluginId, "content:write")) {
            u.displayNotValid("boardX", "Plugin doesn't have 'content:write' permission");
          } else {
            const id = obj.get(self, "$id");
            const frameId = u.proxyToShape(self).frameId;
            const frame = u.locateShape(obj.get(self, "$file"), obj.get(self, "$page"), frameId);
            const frameX = frame.x;
            st.emit!(dw.updatePosition(id, { x: frameX + value }, { absolute: true }));
          }
        },
      },

      boardY: {
        this: true,
        get(self: any) {
          const shape = u.proxyToShape(self);
          const shapeY = grc.pointsToRect(shape.points).y;
          const frameId = shape.parentId;
          const frame = u.locateShape(obj.get(self, "$file"), obj.get(self, "$page"), frameId);
          const frameY = frame.y;
          return shapeY - frameY;
        },
        set(self: any, value: any) {
          if (!sm.validSafeNumber(value)) {
            u.displayNotValid("boardY", value);
          } else if (!r.checkPermission(pluginId, "content:write")) {
            u.displayNotValid("boardY", "Plugin doesn't have 'content:write' permission");
          } else {
            const id = obj.get(self, "$id");
            const frameId = u.proxyToShape(self).frameId;
            const frame = u.locateShape(obj.get(self, "$file"), obj.get(self, "$page"), frameId);
            const frameY = frame.y;
            st.emit!(dw.updatePosition(id, { y: frameY + value }, { absolute: true }));
          }
        },
      },

      width: {
        this: true,
        get() {
          return u.proxyToShape(this).selrect.width;
        },
      },

      height: {
        this: true,
        get() {
          return u.proxyToShape(this).selrect.height;
        },
      },

      bounds: {
        this: true,
        get() {
          return format.formatBounds(grc.pointsToRect(u.proxyToShape(this).points));
        },
      },

      center: {
        this: true,
        get() {
          return format.formatPoint(gsh.shapeToCenter(u.proxyToShape(this)));
        },
      },

      rotation: {
        this: true,
        get() {
          return u.proxyToShape(this).rotation;
        },
        set(self: any, value: any) {
          if (typeof value !== "number") {
            u.displayNotValid("rotation", value);
          } else if (!r.checkPermission(pluginId, "content:write")) {
            u.displayNotValid("rotation", "Plugin doesn't have 'content:write' permission");
          } else {
            const shape = u.proxyToShape(self);
            st.emit!(dw.increaseRotation(new Set([shape.id]), value));
          }
        },
      },

      flipX: {
        this: true,
        get(): boolean {
          return Boolean(u.proxyToShape(this).flipX);
        },
        set(self: any, value: any) {
          if (typeof value !== "boolean") {
            u.displayNotValid("flipX", value);
          } else if (!r.checkPermission(pluginId, "content:write")) {
            u.displayNotValid("flipX", "Plugin doesn't have 'content:write' permission");
          } else {
            const id = obj.get(self, "$id");
            st.emit!(dw.flipHorizontalSelected(new Set([id])));
          }
        },
      },

      flipY: {
        this: true,
        get(): boolean {
          return Boolean(u.proxyToShape(this).flipY);
        },
        set(self: any, value: any) {
          if (typeof value !== "boolean") {
            u.displayNotValid("flipY", value);
          } else if (!r.checkPermission(pluginId, "content:write")) {
            u.displayNotValid("flipY", "Plugin doesn't have 'content:write' permission");
          } else {
            const id = obj.get(self, "$id");
            st.emit!(dw.flipVerticalSelected(new Set([id])));
          }
        },
      },

      fills: {
        this: true,
        get(self: any) {
          if (cfh.textShape(data)) {
            return format.formatFills(textProps(u.proxyToShape(self)).fills);
          }
          return format.formatFills(u.proxyToShape(self).fills);
        },
        set(self: any, value: any) {
          const shape = u.proxyToShape(self);
          const shapeId = shape.id;
          const parsedValue = parser.parseFills(value);
          if (!sm.validate(["vector", types.fills.schemaFill], parsedValue)) {
            u.displayNotValid("fills", value);
          } else if (cfh.textShape(shape)) {
            st.emit!(dwt.updateAttrs(shapeId, { fills: parsedValue }));
          } else if (!r.checkPermission(pluginId, "content:write")) {
            u.displayNotValid("fills", "Plugin doesn't have 'content:write' permission");
          } else {
            st.emit!(dwsh.updateShapes([shapeId], (s: any) => ({ ...s, fills: parsedValue })));
          }
        },
      },

      strokes: {
        this: true,
        get() {
          return format.formatStrokes(u.proxyToShape(this).strokes);
        },
        set(self: any, value: any) {
          const id = obj.get(self, "$id");
          const parsedValue = parser.parseStrokes(value);
          if (!sm.validate(["vector", cts.schemaStroke], parsedValue)) {
            u.displayNotValid("strokes", value);
          } else if (!r.checkPermission(pluginId, "content:write")) {
            u.displayNotValid("strokes", "Plugin doesn't have 'content:write' permission");
          } else {
            st.emit!(dwsh.updateShapes([id], (s: any) => ({ ...s, strokes: parsedValue })));
          }
        },
      },

      layoutChild: {
        this: true,
        get(self: any) {
          const fileId = obj.get(self, "$file");
          const pageId = obj.get(self, "$page");
          const id = obj.get(self, "$id");
          const objects = u.locateObjects(fileId, pageId);
          if (ctl.anyLayoutImmediateChildId(objects, id)) {
            return flex.layoutChildProxy(pluginId, fileId, pageId, id);
          }
          return null;
        },
      },

      layoutCell: {
        this: true,
        get(self: any) {
          const fileId = obj.get(self, "$file");
          const pageId = obj.get(self, "$page");
          const id = obj.get(self, "$id");
          const objects = u.locateObjects(fileId, pageId);
          if (ctl.gridLayoutImmediateChildId(objects, id)) {
            return grid.layoutCellProxy(pluginId, fileId, pageId, id);
          }
          return null;
        },
      },

      interactions: {
        this: true,
        get(self: any) {
          const interactions = u.proxyToShape(self).interactions;
          return format.formatArray(
            (i: number) =>
              interactionProxy(pluginId, fileId, pageId, id, i),
            Array.from({ length: interactions.length }, (_, i) => i)
          );
        },
      },

      resize(width: number, height: number) {
        if (!sm.validSafeNumber(width) || width <= 0) {
          u.displayNotValid("resize", width);
        } else if (!sm.validSafeNumber(height) || height <= 0) {
          u.displayNotValid("resize", height);
        } else if (!r.checkPermission(pluginId, "content:write")) {
          u.displayNotValid("resize", "Plugin doesn't have 'content:write' permission");
        } else {
          st.emit!(dw.updateDimensions([id], "width", width));
          st.emit!(dw.updateDimensions([id], "height", height));
        }
      },

      rotate(angle: number, center?: any) {
        const centerParsed = center ? { x: obj.get(center, "x"), y: obj.get(center, "y") } : null;
        if (typeof angle !== "number") {
          u.displayNotValid("rotate-angle", angle);
        } else if (centerParsed && (!typeof centerParsed.x === "number" || !typeof centerParsed.y === "number")) {
          u.displayNotValid("rotate-center", center);
        } else if (!r.checkPermission(pluginId, "content:write")) {
          u.displayNotValid("rotate", "Plugin doesn't have 'content:write' permission");
        } else {
          st.emit!(dw.increaseRotation([id], angle, { center: centerParsed, delta: true }));
        }
      },

      clone() {
        const retV = { current: null };
        if (!r.checkPermission(pluginId, "content:write")) {
          u.displayNotValid("clone", "Plugin doesn't have 'content:write' permission");
        } else {
          st.emit!(dws.duplicateShapes(new Set([id]), { changeSelection: false, returnRef: retV }));
          return shapeProxy(pluginId, retV.current);
        }
      },

      remove() {
        if (!r.checkPermission(pluginId, "content:write")) {
          u.displayNotValid("remove", "Plugin doesn't have 'content:write' permission");
        } else {
          st.emit!(dwsh.deleteShapes(new Set([id])));
        }
      },

      getPluginData(key: string) {
        if (typeof key !== "string") {
          u.displayNotValid("getPluginData", key);
        } else {
          const shape = u.locateShape(fileId, pageId, id);
          return dm.getIn(shape, ["plugin-data", `plugin-${pluginId}`, key]);
        }
      },

      setPluginData(key: string, value: any) {
        if (typeof key !== "string") {
          u.displayNotValid("setPluginData-key", key);
        } else if (value != null && typeof value !== "string") {
          u.displayNotValid("setPluginData-value", value);
        } else if (!r.checkPermission(pluginId, "content:write")) {
          u.displayNotValid("setPluginData", "Plugin doesn't have 'content:write' permission");
        } else {
          st.emit!(dp.setPluginData(fileId, "shape", id, pageId, `plugin-${pluginId}`, key, value));
        }
      },

      getPluginDataKeys() {
        const shape = u.locateShape(fileId, pageId, id);
        return Array.from(Object.keys(dm.getIn(shape, ["plugin-data", `plugin-${pluginId}`])));
      },

      getSharedPluginData(namespace: string, key: string) {
        if (typeof namespace !== "string") {
          u.displayNotValid("getSharedPluginData-namespace", namespace);
        } else if (typeof key !== "string") {
          u.displayNotValid("getSharedPluginData-key", key);
        } else {
          const shape = u.locateShape(fileId, pageId, id);
          return dm.getIn(shape, ["plugin-data", `shared-${namespace}`, key]);
        }
      },

      setSharedPluginData(namespace: string, key: string, value: any) {
        if (typeof namespace !== "string") {
          u.displayNotValid("setSharedPluginData-namespace", namespace);
        } else if (typeof key !== "string") {
          u.displayNotValid("setSharedPluginData-key", key);
        } else if (value != null && typeof value !== "string") {
          u.displayNotValid("setSharedPluginData-value", value);
        } else if (!r.checkPermission(pluginId, "content:write")) {
          u.displayNotValid("setSharedPluginData", "Plugin doesn't have 'content:write' permission");
        } else {
          st.emit!(dp.setPluginData(fileId, "shape", id, pageId, `shared-${namespace}`, key, value));
        }
      },

      getSharedPluginDataKeys(namespace: string) {
        if (typeof namespace !== "string") {
          u.displayNotValid("getSharedPluginDataKeys", namespace);
        } else {
          const shape = u.locateShape(fileId, pageId, id);
          return Array.from(Object.keys(dm.getIn(shape, ["plugin-data", `shared-${namespace}`])));
        }
      },

      getChildren() {
        const shape = u.locateShape(fileId, pageId, id);
        if (
          !cfh.frameShape(shape) &&
          !cfh.groupShape(shape) &&
          !cfh.svgRawShape(shape) &&
          !cfh.boolShape(shape)
        ) {
          u.displayNotValid("getChildren", shape.type);
        } else {
          const isReversed = ctl.flexLayout(shape);
          const reverseFn = naturalChildOrdering(pluginId) && isReversed ? reverse : identity;
          const shapes = u.locateShape(fileId, pageId, id).shapes;
          return format.formatArray(
            (s: any) => shapeProxy(pluginId, fileId, pageId, s),
            reverseFn(shapes)
          );
        }
      },

      appendChild(child: any) {
        const shape = u.locateShape(fileId, pageId, id);
        if (
          !cfh.frameShape(shape) &&
          !cfh.groupShape(shape) &&
          !cfh.svgRawShape(shape) &&
          !cfh.boolShape(shape)
        ) {
          u.displayNotValid("appendChild", shape.type);
        } else if (!shapeProxy(child)) {
          u.displayNotValid("appendChild-child", child);
        } else if (!r.checkPermission(pluginId, "content:write")) {
          u.displayNotValid("appendChild", "Plugin doesn't have 'content:write' permission");
        } else {
          const childId = obj.get(child, "$id");
          const isReversed = ctl.flexLayout(shape);
          const index =
            !naturalChildOrdering(pluginId) || isReversed ? 0 : shape.shapes.length;
          st.emit!(dwsh.relocateShapes(new Set([childId]), id, index));
        }
      },

      insertChild(index: number, child: any) {
        const shape = u.locateShape(fileId, pageId, id);
        if (
          !cfh.frameShape(shape) &&
          !cfh.groupShape(shape) &&
          !cfh.svgRawShape(shape) &&
          !cfh.boolShape(shape)
        ) {
          u.displayNotValid("insertChild", shape.type);
        } else if (!shapeProxy(child)) {
          u.displayNotValid("insertChild-child", child);
        } else if (!r.checkPermission(pluginId, "content:write")) {
          u.displayNotValid("insertChild", "Plugin doesn't have 'content:write' permission");
        } else {
          const childId = obj.get(child, "$id");
          const isReversed = ctl.flexLayout(shape);
          const finalIndex =
            !naturalChildOrdering(pluginId) || isReversed
              ? shape.shapes.length - index
              : index;
          st.emit!(dwsh.relocateShapes(new Set([childId]), id, finalIndex));
        }
      },

      addFlexLayout() {
        const shape = u.locateShape(fileId, pageId, id);
        if (!cfh.frameShape(shape)) {
          u.displayNotValid("addFlexLayout", shape.type);
        } else if (!r.checkPermission(pluginId, "content:write")) {
          u.displayNotValid("addFlexLayout", "Plugin doesn't have 'content:write' permission");
        } else {
          st.emit!(dwsl.createLayoutFromId(id, "flex", { fromFrame: true, calculateParams: false }));
          return flex.flexLayoutProxy(pluginId, fileId, pageId, id);
        }
      },

      addGridLayout() {
        const shape = u.locateShape(fileId, pageId, id);
        if (!cfh.frameShape(shape)) {
          u.displayNotValid("addGridLayout", shape.type);
        } else if (!r.checkPermission(pluginId, "content:write")) {
          u.displayNotValid("addGridLayout", "Plugin doesn't have 'content:write' permission");
        } else {
          st.emit!(dwsl.createLayoutFromId(id, "grid", { fromFrame: true, calculateParams: false }));
          return grid.gridLayoutProxy(pluginId, fileId, pageId, id);
        }
      },

      makeMask() {
        const shape = u.locateShape(fileId, pageId, id);
        if (!cfh.groupShape(shape)) {
          u.displayNotValid("makeMask", shape.type);
        } else if (!r.checkPermission(pluginId, "content:write")) {
          u.displayNotValid("makeMask", "Plugin doesn't have 'content:write' permission");
        } else {
          st.emit!(dwg.maskGroup(new Set([id])));
        }
      },

      removeMask() {
        const shape = u.locateShape(fileId, pageId, id);
        if (!cfh.maskShape(shape)) {
          u.displayNotValid("removeMask", shape.type);
        } else if (!r.checkPermission(pluginId, "content:write")) {
          u.displayNotValid("removeMask", "Plugin doesn't have 'content:write' permission");
        } else {
          st.emit!(dwg.unmaskGroup(new Set([id])));
        }
      },

      toD() {
        const shape = u.locateShape(fileId, pageId, id);
        if (!cfh.pathShape(shape) && !cfh.boolShape(shape)) {
          u.displayNotValid("toD", shape.type);
        } else {
          return shape.content.toString();
        }
      },

      getRange(start: number, end: number) {
        const shape = u.locateShape(fileId, pageId, id);
        if (!cfh.textShape(shape)) {
          u.displayNotValid("getRange-shape", "shape is not text");
        } else if (!sm.validSafeInt(start) || start < 0 || start > end) {
          u.displayNotValid("getRange-start", start);
        } else if (!sm.validSafeInt(end)) {
          u.displayNotValid("getRange-end", end);
        } else {
          return text.textRangeProxy(pluginId, fileId, pageId, id, start, end);
        }
      },

      applyTypography(typography: any) {
        const shape = u.locateShape(fileId, pageId, id);
        if (!libTypographyProxy(typography)) {
          u.displayNotValid("applyTypography-typography", typography);
        } else if (!cfh.textShape(shape)) {
          u.displayNotValid("applyTypography-shape", shape.type);
        } else if (!r.checkPermission(pluginId, "content:write")) {
          u.displayNotValid("applyTypography", "Plugin doesn't have 'content:write' permission");
        } else {
          const typographyData = u.proxyToLibraryTypography(typography);
          st.emit!(dwt.applyTypography(new Set([id]), typographyData, fileId));
        }
      },

      setParentIndex(index: number) {
        if (!sm.validSafeInt(index)) {
          u.displayNotValid("setParentIndex", index);
        } else if (!r.checkPermission(pluginId, "content:write")) {
          u.displayNotValid("setParentIndex", "Plugin doesn't have 'content:write' permission");
        } else {
          st.emit!(dw.setShapeIndex(fileId, pageId, id, index));
        }
      },

      bringForward() {
        st.emit!(dw.verticalOrderSelected("up"));
      },

      sendBackward() {
        st.emit!(dw.verticalOrderSelected("down"));
      },

      bringToFront() {
        st.emit!(dw.verticalOrderSelected("top"));
      },

      sendToBack() {
        st.emit!(dw.verticalOrderSelected("bottom"));
      },

      isComponentInstance() {
        const shape = u.locateShape(fileId, pageId, id);
        const objects = u.locateObjects(fileId, pageId);
        return ctn.inAnyComponent(objects, shape);
      },

      isComponentMainInstance() {
        const shape = u.locateShape(fileId, pageId, id);
        const objects = u.locateObjects(fileId, pageId);
        return ctn.insideComponentMain(objects, shape);
      },

      isComponentCopyInstance() {
        const shape = u.locateShape(fileId, pageId, id);
        return ctk.inComponentCopy(shape);
      },

      isComponentRoot() {
        const shape = u.locateShape(fileId, pageId, id);
        return ctk.instanceRoot(shape);
      },

      isComponentHead() {
        const shape = u.locateShape(fileId, pageId, id);
        return ctk.instanceHead(shape);
      },

      componentRefShape() {
        const objects = u.locateObjects(fileId, pageId);
        const shape = u.locateShape(fileId, pageId, id);
        if (ctn.inAnyComponent(objects, shape)) {
          const [root, component] = u.locateComponent(objects, shape);
          const componentPageId = component.mainInstancePage;
          const componentFile = u.locateFile(component.componentFile);
          const refShape = ctf.getRefShape(componentFile.data, component, shape);
          if (!component.deleted && refShape != null && componentFile != null) {
            return shapeProxy(pluginId, componentFile.id, componentPageId, refShape.id);
          }
        }
        return null;
      },

      componentRoot() {
        const objects = u.locateObjects(fileId, pageId);
        const shape = u.locateShape(fileId, pageId, id);
        if (ctn.inAnyComponent(objects, shape)) {
          const [root, component] = u.locateComponent(objects, shape);
          return shapeProxy(pluginId, root.componentFile, component.mainInstancePage, root.id);
        }
        return null;
      },

      componentHead() {
        const objects = u.locateObjects(fileId, pageId);
        const shape = u.locateShape(fileId, pageId, id);
        if (ctn.inAnyComponent(objects, shape)) {
          const head = ctn.getHeadShape(u.locateObjects(fileId, pageId), shape);
          return shapeProxy(pluginId, fileId, pageId, head.id);
        }
        return null;
      },

      component() {
        const objects = u.locateObjects(fileId, pageId);
        const shape = u.locateShape(fileId, pageId, id);
        if (ctn.inAnyComponent(objects, shape)) {
          const [root, component] = u.locateComponent(objects, shape);
          return libComponentProxy(pluginId, root.componentFile, component.id);
        }
        return null;
      },

      detach() {
        st.emit!(dwl.detachComponent(id));
      },

      export(value: any) {
        const valueParsed = parser.parseExport(value);
        if (!sm.validate(ctse.schemaExport, valueParsed)) {
          u.displayNotValid("export", value);
        } else {
          const shape = u.locateShape(fileId, pageId, id);
          const payload = {
            cmd: "export-shapes",
            profileId: st.store.getState().profileId,
            wait: true,
            exports: [
              {
                fileId,
                pageId,
                objectId: id,
                name: shape.name,
                type: valueParsed.type || "png",
                suffix: valueParsed.suffix || "",
                scale: valueParsed.scale || 1,
              },
            ],
          };
          return new Promise((resolve, reject) => {
            rp.cmd!(payload)
              .pipe(
                mapcat(({ uri }: any) =>
                  http.send!({ method: "get", uri, responseType: "blob", omitDefaultHeaders: true })
                ),
                map((r: any) => r.body),
                mapcat((r: any) => r.arrayBuffer()),
                map((buf: any) => new Uint8Array(buf))
              )
              .subscribe(resolve, reject);
          });
        }
      },

      addInteraction(trigger: any, action: any, delay: any) {
        const interaction = d.patchObject(
          ctsi.defaultInteraction,
          parser.parseInteraction(trigger, action, delay)
        );
        if (!sm.validate(ctsi.schemaInteraction, interaction)) {
          u.displayNotValid("addInteraction", interaction);
        } else {
          const shape = u.locateShape(fileId, pageId, id);
          const index = (shape.interactions || []).length;
          st.emit!(dwi.addInteraction(pageId, id, interaction));
          return interactionProxy(pluginId, fileId, pageId, id, index);
        }
      },

      removeInteraction(interaction: any) {
        if (!interactionProxy(interaction)) {
          u.displayNotValid("removeInteraction", interaction);
        } else {
          st.emit!(dwi.removeInteraction({ id }, obj.get(interaction, "$index")));
        }
      },

      addRulerGuide(orientation: string, value: number) {
        const shape = u.locateShape(fileId, pageId, id);
        if (!sm.validSafeNumber(value)) {
          u.displayNotValid("addRulerGuide", "Value not a safe number");
        } else if (!["vertical", "horizontal"].includes(orientation)) {
          u.displayNotValid("addRulerGuide", "Orientation should be either 'vertical' or 'horizontal'");
        } else if (!cfh.frameShape(shape)) {
          u.displayNotValid("addRulerGuide", "The shape is not a board");
        } else if (!r.checkPermission(pluginId, "content:write")) {
          u.displayNotValid("addRulerGuide", "Plugin doesn't have 'content:write' permission");
        } else {
          const guideId = uuid.next();
          const axis = parser.orientationToAxis(orientation);
          const objects = u.locateObjects(fileId, pageId);
          const frame = objects[id];
          const boardPos = frame[axis];
          const position = boardPos + value;
          st.emit!(
            dwgu.updateGuides({
              id: guideId,
              axis,
              position,
              frameId: id,
            })
          );
          return rg.rulerGuideProxy(pluginId, fileId, pageId, guideId);
        }
      },

      removeRulerGuide(_: any, value: any) {
        if (!rg.rulerGuideProxy(value)) {
          u.displayNotValid("removeRulerGuide", "Guide not provided");
        } else if (!r.checkPermission(pluginId, "content:write")) {
          u.displayNotValid("removeRulerGuide", "Plugin doesn't have 'content:write' permission");
        } else {
          const guide = u.proxyToRulerGuide(value);
          st.emit!(dwgu.removeGuide(guide));
        }
      },

      tokens: {
        this: true,
        get(self: any) {
          const tokens = u.locateShape(fileId, pageId, id).appliedTokens;
          return Object.entries(tokens).reduce(
            (acc, [prop, name]) => {
              obj.set(acc, json.writeCamelKey(prop), name);
              return acc;
            },
            {} as Record<string, any>
          );
        },
      },

      applyToken: {
        enumerable: false,
        schema: ["tuple", ["fn", tokenProxy], ["maybe", ["set", ["and", "::sm/keyword", ["fn", cto.tokenAttr]]]],
        fn(token: any, attrs: any) {
          const tokenData = u.locateToken(fileId, obj.get(token, "$setId"), obj.get(token, "$id"));
          const kwAttrs = new Set((attrs as any[]).map((x: any) => x as any));
          if (!Array.from(kwAttrs).every((x: any) => cto.tokenAttr(x))) {
            u.displayNotValid("applyToken", attrs);
          } else {
            st.emit!(
              dwta.toggleToken({
                token: tokenData,
                attrs: kwAttrs,
                shapeIds: [id],
                expandWithChildren: false,
              })
            );
          }
        },
      },

      isVariantHead() {
        const shape = u.locateShape(fileId, pageId, id);
        const component = u.locateLibraryComponent(fileId, shape.componentId);
        return ctk.instanceHead(shape) && ctk.isVariant(component);
      },

      isVariantContainer() {
        const shape = u.locateShape(fileId, pageId, id);
        return ctk.isVariantContainer(shape);
      },

      switchVariant(pos: number, value: string) {
        if (!Number.isInteger(pos) || pos < 0) {
          u.displayNotValid("pos", pos);
        } else if (typeof value !== "string") {
          u.displayNotValid("value", value);
        } else {
          const shape = u.locateShape(fileId, pageId, id);
          const component = u.locateLibraryComponent(fileId, shape.componentId);
          if (component && ctk.isVariant(component)) {
            st.emit!(dwv.variantsSwitch({ shapes: [shape], pos, val: value }));
          }
        }
      },

      combineAsVariants(ids: any[]) {
        if (!ids || !ids.every((x) => uuid.parse(x))) {
          u.displayNotValid("ids", ids);
        } else {
          const shape = u.locateShape(fileId, pageId, id);
          const component = u.locateLibraryComponent(fileId, shape.componentId);
          const idsSet = new Set([id, ...ids.map((x) => uuid.uuid(x))]);
          if (component && !ctk.isVariant(component)) {
            st.emit!(dwv.combineAsVariants(idsSet, { trigger: "plugin:combine-as-variants" }));
          }
        }
      },
    }
  );
}

// Additional conditional properties for frames/groups/svg-raw/bools
{
  const proxy: any = {};
  if (cfh.frameShape(data) || cfh.groupShape(data) || cfh.svgRawShape(data) || cfh.boolShape(data)) {
    crc.addProperties(proxy, {
      this: true,
      name: "children",
      enumerable: false,
      get(self: any) {
        return self.getChildren();
      },
      set(self: any, children: any[]) {
        if (!r.checkPermission(pluginId, "content:write")) {
          u.displayNotValid("children", "Plugin doesn't have 'content:write' permission");
        } else if (!children.every((c) => shapeProxy(c))) {
          u.displayNotValid("children", "Every children needs to be shape proxies");
        } else {
          const shape = u.proxyToShape(self);
          const fileId = obj.get(self, "$file");
          const pageId = obj.get(self, "$page");
          const reverseFn = naturalChildOrdering(pluginId) ? reverse : identity;
          const ids = reverseFn(children).map((c: any) => obj.get(c, "$id"));
          if (!new Set(ids).isEqual(new Set(shape.shapes))) {
            u.displayNotValid("children", "Not all children are present in the input");
          } else {
            st.emit!(dw.reorderChildren(fileId, pageId, shape.id, ids));
          }
        }
      },
    });
  }

  if (cfh.frameShape(data)) {
    crc.addProperties(proxy, {
      name: "clipContent",
      get(self: any) {
        return !u.proxyToShape(self).showContent;
      },
      set(_: any, value: any) {
        if (typeof value !== "boolean") {
          u.displayNotValid("clipContent", value);
        } else if (!r.checkPermission(pluginId, "content:write")) {
          u.displayNotValid("clipContent", "Plugin doesn't have 'content:write' permission");
        } else {
          st.emit!(dwsh.updateShapes([id], (s: any) => ({ ...s, showContent: !value })));
        }
      },
    });

    crc.addProperties(proxy, {
      name: "showInViewMode",
      get(self: any) {
        return !u.proxyToShape(self).hideInViewer;
      },
      set(_: any, value: any) {
        if (typeof value !== "boolean") {
          u.displayNotValid("showInViewMode", value);
        } else if (!r.checkPermission(pluginId, "content:write")) {
          u.displayNotValid("showInViewMode", "Plugin doesn't have 'content:write' permission");
        } else {
          st.emit!(dwsh.updateShapes([id], (s: any) => ({ ...s, hideInViewer: !value })));
        }
      },
    });

    crc.addProperties(proxy, {
      name: "grid",
      get(self: any) {
        const layout = u.proxyToShape(self).layout;
        const fileId = obj.get(self, "$file");
        const pageId = obj.get(self, "$page");
        const id = obj.get(self, "$id");
        if (layout === "grid") {
          return grid.gridLayoutProxy(pluginId, fileId, pageId, id);
        }
        return null;
      },
    });

    crc.addProperties(proxy, {
      name: "flex",
      get(self: any) {
        const layout = u.proxyToShape(self).layout;
        const fileId = obj.get(self, "$file");
        const pageId = obj.get(self, "$page");
        const id = obj.get(self, "$id");
        if (layout === "flex") {
          return flex.flexLayoutProxy(pluginId, fileId, pageId, id);
        }
        return null;
      },
    });

    crc.addProperties(proxy, {
      name: "guides",
      get(self: any) {
        return format.formatFrameGuides(u.proxyToShape(self).grids);
      },
      set(self: any, value: any) {
        const id = obj.get(self, "$id");
        const parsedValue = parser.parseFrameGuides(value);
        if (!sm.validate(["vector", ctg.grid], parsedValue)) {
          u.displayNotValid("guides", value);
        } else if (!r.checkPermission(pluginId, "content:write")) {
          u.displayNotValid("guides", "Plugin doesn't have 'content:write' permission");
        } else {
          st.emit!(dwsh.updateShapes([id], (s: any) => ({ ...s, grids: parsedValue })));
        }
      },
    });

    crc.addProperties(proxy, {
      name: "rulerGuides",
      get(_: any) {
        const guides = u.locatePage(fileId, pageId).guides;
        return format.formatArray(
          (g: any) => rg.rulerGuideProxy(pluginId, fileId, pageId, g.id),
          Object.values(guides).filter((g: any) => g.frameId === id)
        );
      },
    });

    crc.addProperties(proxy, {
      name: "horizontalSizing",
      get(self: any) {
        return d.name(d.nilv(u.proxyToShape(self).layoutItemHSizing, "fix"));
      },
      set(self: any, value: any) {
        const id = obj.get(self, "$id");
        const valueKW = value as any;
        if (!new Set(["fix", "auto"]).has(valueKW)) {
          u.displayNotValid("horizontalSizing", value);
        } else if (!r.checkPermission(pluginId, "content:write")) {
          u.displayNotValid("horizontalSizing", "Plugin doesn't have 'content:write' permission");
        } else {
          st.emit!(dwsl.updateLayout(new Set([id]), { layoutItemHSizing: valueKW }));
        }
      },
    });

    crc.addProperties(proxy, {
      name: "verticalSizing",
      get(self: any) {
        return d.name(d.nilv(u.proxyToShape(self).layoutItemVSizing, "fix"));
      },
      set(self: any, value: any) {
        const id = obj.get(self, "$id");
        const valueKW = value as any;
        if (!new Set(["fix", "auto"]).has(valueKW)) {
          u.displayNotValid("verticalSizing", value);
        } else if (!r.checkPermission(pluginId, "content:write")) {
          u.displayNotValid("verticalSizing", "Plugin doesn't have 'content:write' permission");
        } else {
          st.emit!(dwsl.updateLayout(new Set([id]), { layoutItemVSizing: valueKW }));
        }
      },
    });

    crc.addProperties(proxy, {
      name: "variants",
      enumerable: false,
      get(self: any) {
        const shape = u.proxyToShape(self);
        if (ctk.isVariantContainer(shape)) {
          return variantProxy(pluginId, fileId, shape.id);
        }
        return null;
      },
    });
  }
}

// Text shapes
{
  if (cfh.textShape(data)) {
    text.addTextProps(pluginId);
  }
}

// Path and bool shapes
{
  if (cfh.pathShape(data) || cfh.boolShape(data)) {
    crc.addProperties(proxy, {
      name: "commands",
      get(self: any) {
        return format.formatPathContent(u.proxyToShape(self).content);
      },
      set(_: any, value: any) {
        const segments = parser.parseCommands(value);
        if (!r.checkPermission(pluginId, "content:write")) {
          u.displayNotValid("content", "Plugin doesn't have 'content:write' permission");
        } else if (!sm.validate(path.schemaSegments, segments)) {
          u.displayNotValid("content", segments);
        } else {
          const selrect = path.calcSelrect(segments);
          const content = path.fromPlain(segments);
          const points = grc.rectToPoints(selrect);
          st.emit!(dwsh.updateShapes([id], (shape: any) => ({
            ...shape,
            content,
            selrect,
            points,
          })));
        }
      },
    });

    crc.addProperties(proxy, {
      name: "d",
      get(self: any) {
        return u.proxyToShape(self).content.toString();
      },
      set(_: any, value: any) {
        const segments = typeof value === "string" ? svg.path.parse(value) : value;
        if (!r.checkPermission(pluginId, "content:write")) {
          u.displayNotValid("content", "Plugin doesn't have 'content:write' permission");
        } else if (!cfh.pathShape(data)) {
          u.displayNotValid("content-type", type);
        } else if (!sm.validate(path.schemaSegments, segments)) {
          u.displayNotValid("content", segments);
        } else {
          const selrect = path.calcSelrect(segments);
          const content = path.fromPlain(segments);
          const points = grc.rectToPoints(selrect);
          st.emit!(dwsh.updateShapes([id], (shape: any) => ({
            ...shape,
            content,
            selrect,
            points,
          })));
        }
      },
    });

    crc.addProperties(proxy, {
      name: "content",
      get(self: any) {
        return (self as any).d;
      },
      set(self: any, value: any) {
        (self as any).d = value;
      },
    });
  }
}
