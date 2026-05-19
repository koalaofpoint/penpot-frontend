/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (c) KALEIDOS INC
 */

import { d } from "../../../common/data";
import * as dm from "../../../common/data/macros";
import * as cfh from "../../../common/files/helpers";
import * as sm from "../../../common/schema";
import * as clr from "../../../common/types/color";
import * as typesFills from "../../../common/types/fills";
import * as ctl from "../../../common/types/library";
import * as shp from "../../../common/types/shape";
import * as typesShadow from "../../../common/types/shape/shadow";
import * as txt from "../../../common/types/text";
import * as mbc from "../broadcast";
import * as dsh from "../helpers";
import * as md from "../modal";
import * as layout from "./layout";
import * as dwsh from "./shapes";
import * as dwt from "./texts";
import * as dwu from "./undo";
import { features } from "../features";
import * as storage from "../../../util/storage";
import * as rx from "beicon.v2.core";
import { ptk, WatchEvent, UpdateEvent } from "potok.v2.core";
import * as str from "cuerdas.core";

export const COLOR_PICKER_SELECTED_BROADCAST_KEY = "colorpicker-selected";
export const COLOR_PALETTE_SELECTED_BROADCAST_KEY = "colorpalette-selected";

export interface ShowPaletteEvent extends Event {
  type: "show-palette";
  selected: string;
}

export function showPalette(selected: string): ShowPaletteEvent {
  return { type: "show-palette", selected };
}

export interface StartPickerEvent extends Event {
  type: "start-picker";
}

export function startPicker(): StartPickerEvent {
  return { type: "start-picker" };
}

export interface StopPickerEvent extends Event {
  type: "stop-picker";
}

export function stopPicker(): StopPickerEvent {
  return { type: "stop-picker" };
}

export interface PickColorEvent extends Event {
  type: "pick-color";
  rgba: string;
}

export function pickColor(rgba: string): PickColorEvent {
  return { type: "pick-color", rgba };
}

export interface PickColorSelectEvent extends Event {
  type: "pick-color-select";
  value: string;
  shift: boolean;
}

export function pickColorSelect(value: string, shift: boolean): PickColorSelectEvent {
  return { type: "pick-color-select", value, shift };
}

export interface ChangeFillEvent extends Event {
  type: "change-fill";
  ids: Array<string>;
  color: any;
  position: number;
  options?: any;
}

export function changeFill(ids: Array<string>, color: any, position: number, options?: any): ChangeFillEvent {
  return { type: "change-fill", ids, color, position, options };
}

export interface ChangeFillAndClearEvent extends Event {
  type: "change-fill-and-clear";
  ids: Array<string>;
  color: any;
  options?: any;
}

export function changeFillAndClear(ids: Array<string>, color: any, options?: any): ChangeFillAndClearEvent {
  return { type: "change-fill-and-clear", ids, color, options };
}

export interface AddFillEvent extends Event {
  type: "add-fill";
  ids: Array<string>;
  color: any;
  options?: any;
}

export function addFill(ids: Array<string>, color: any, options?: any): AddFillEvent {
  return { type: "add-fill", ids, color, options };
}

export interface DetachFillEvent extends Event {
  type: "detach-fill";
  ids: Array<string>;
  position: number;
  options?: any;
}

export function detachFill(ids: Array<string>, position: number, options?: any): DetachFillEvent {
  return { type: "detach-fill", ids, position, options };
}

export interface RemoveFillEvent extends Event {
  type: "remove-fill";
  ids: Array<string>;
  position: number;
  options?: any;
}

export function removeFill(ids: Array<string>, position: number, options?: any): RemoveFillEvent {
  return { type: "remove-fill", ids, position, options };
}

export interface RemoveAllFillsEvent extends Event {
  type: "remove-all-fills";
  ids: Array<string>;
  options?: any;
}

export function removeAllFills(ids: Array<string>, options?: any): RemoveAllFillsEvent {
  return { type: "remove-all-fills", ids, options };
}

export interface ChangeHideFillOnExportEvent extends Event {
  type: "change-hide-fill-on-export";
  ids: Array<string>;
  hideFillOnExport: boolean;
}

export function changeHideFillOnExport(ids: Array<string>, hideFillOnExport: boolean): ChangeHideFillOnExportEvent {
  return { type: "change-hide-fill-on-export", ids, hideFillOnExport };
}

export interface ChangeStrokeColorEvent extends Event {
  type: "change-stroke-color";
  ids: Array<string>;
  color: any;
  index: number;
  options?: any;
}

export function changeStrokeColor(ids: Array<string>, color: any, index: number, options?: any): ChangeStrokeColorEvent {
  return { type: "change-stroke-color", ids, color, index, options };
}

export interface ChangeStrokeAttrsEvent extends Event {
  type: "change-stroke-attrs";
  ids: Array<string>;
  attrs: any;
  index: number;
  options?: any;
}

export function changeStrokeAttrs(ids: Array<string>, attrs: any, index: number, options?: any): ChangeStrokeAttrsEvent {
  return { type: "change-stroke-attrs", ids, attrs, index, options };
}

export interface ChangeShadowEvent extends Event {
  type: "change-shadow";
  ids: Array<string>;
  attrs: any;
  index: number;
}

export function changeShadow(ids: Array<string>, attrs: any, index: number): ChangeShadowEvent {
  return { type: "change-shadow", ids, attrs, index };
}

export interface AddShadowEvent extends Event {
  type: "add-shadow";
  ids: Array<string>;
  shadow: any;
}

export function addShadow(ids: Array<string>, shadow: any): AddShadowEvent {
  return { type: "add-shadow", ids, shadow };
}

export interface AddStrokeEvent extends Event {
  type: "add-stroke";
  ids: Array<string>;
  stroke: any;
}

export function addStroke(ids: Array<string>, stroke: any): AddStrokeEvent {
  return { type: "add-stroke", ids, stroke };
}

export interface RemoveStrokeEvent extends Event {
  type: "remove-stroke";
  ids: Array<string>;
  position: number;
}

export function removeStroke(ids: Array<string>, position: number): RemoveStrokeEvent {
  return { type: "remove-stroke", ids, position };
}

export interface RemoveAllStrokesEvent extends Event {
  type: "remove-all-strokes";
  ids: Array<string>;
}

export function removeAllStrokes(ids: Array<string>): RemoveAllStrokesEvent {
  return { type: "remove-all-strokes", ids };
}

export interface ReorderShadowsEvent extends Event {
  type: "reorder-shadows";
  ids: Array<string>;
  fromPos: number;
  toSpaceBetweenPos: number;
}

export function reorderShadows(ids: Array<string>, fromPos: number, toSpaceBetweenPos: number): ReorderShadowsEvent {
  return { type: "reorder-shadows", ids, fromPos, toSpaceBetweenPos };
}

export interface ReorderStrokesEvent extends Event {
  type: "reorder-strokes";
  ids: Array<string>;
  fromPos: number;
  toSpaceBetweenPos: number;
}

export function reorderStrokes(ids: Array<string>, fromPos: number, toSpaceBetweenPos: number): ReorderStrokesEvent {
  return { type: "reorder-strokes", ids, fromPos, toSpaceBetweenPos };
}

export interface ReorderFillsEvent extends Event {
  type: "reorder-fills";
  ids: Array<string>;
  fromPos: number;
  toSpaceBetweenPos: number;
}

export function reorderFills(ids: Array<string>, fromPos: number, toSpaceBetweenPos: number): ReorderFillsEvent {
  return { type: "reorder-fills", ids, fromPos, toSpaceBetweenPos };
}

export interface PickerForSelectedShapeEvent extends Event {
  type: "picker-for-selected-shape";
}

export function pickerForSelectedShape(): PickerForSelectedShapeEvent {
  return { type: "picker-for-selected-shape" };
}

export interface ChangeColorInSelectedEvent extends Event {
  type: "change-color-in-selected";
  operations: Array<{
    prop: "fill" | "stroke" | "shadow" | "content";
    shapeId: string;
    index: number;
  }>;
  newColor: any;
  oldColor: any;
}

export function changeColorInSelected(
  operations: ChangeColorInSelectedEvent["operations"],
  newColor: any,
  oldColor: any
): ChangeColorInSelectedEvent {
  return { type: "change-color-in-selected", operations, newColor, oldColor };
}

export interface ApplyColorFromPaletteEvent extends Event {
  type: "apply-color-from-palette";
  color: any;
  stroke: boolean;
}

export function applyColorFromPalette(color: any, stroke: boolean): ApplyColorFromPaletteEvent {
  return { type: "apply-color-from-palette", color, stroke };
}

export interface ApplyColorFromColorPickerEvent extends Event {
  type: "apply-color-from-colorpicker";
  color: any;
}

export function applyColorFromColorPicker(color: any): ApplyColorFromColorPickerEvent {
  return { type: "apply-color-from-colorpicker", color };
}

export interface AddRecentColorEvent extends Event {
  type: "add-recent-color";
  color: any;
}

export function addRecentColor(color: any): AddRecentColorEvent {
  return { type: "add-recent-color", color };
}

export interface ApplyColorFromAssetsEvent extends Event {
  type: "apply-color-from-assets";
  fileId: string;
  color: any;
  stroke: boolean;
}

export function applyColorFromAssets(fileId: string, color: any, stroke: boolean): ApplyColorFromAssetsEvent {
  return { type: "apply-color-from-assets", fileId, color, stroke };
}

export interface InitializeColorPickerEvent extends Event {
  type: "initialize-colorpicker";
  onChange: (color: any) => void;
  tab: string;
}

export function initializeColorPicker(onChange: (color: any) => void, tab: string): InitializeColorPickerEvent {
  return { type: "initialize-colorpicker", onChange, tab };
}

export interface FinalizeColorPickerEvent extends Event {
  type: "finalize-colorpicker";
}

export function finalizeColorPicker(): FinalizeColorPickerEvent {
  return { type: "finalize-colorpicker" };
}

export interface UpdateColorPickerEvent extends Event {
  type: "update-colorpicker";
  data: any;
}

export function updateColorPicker(data: any): UpdateColorPickerEvent {
  return { type: "update-colorpicker", data };
}

export interface UpdateColorPickerGradientOpacityEvent extends Event {
  type: "update-colorpicker-gradient-opacity";
  opacity: number;
}

export function updateColorPickerGradientOpacity(opacity: number): UpdateColorPickerGradientOpacityEvent {
  return { type: "update-colorpicker-gradient-opacity", opacity };
}

export interface UpdateColorPickerAddAutoEvent extends Event {
  type: "update-colorpicker-add-auto";
}

export function updateColorPickerAddAuto(): UpdateColorPickerAddAutoEvent {
  return { type: "update-colorpicker-add-auto" };
}

export interface UpdateColorPickerAddStopEvent extends Event {
  type: "update-colorpicker-add-stop";
  offset: number;
}

export function updateColorPickerAddStop(offset: number): UpdateColorPickerAddStopEvent {
  return { type: "update-colorpicker-add-stop", offset };
}

export interface UpdateColorPickerStopsEvent extends Event {
  type: "update-colorpicker-stops";
  stops: any[];
}

export function updateColorPickerStops(stops: any[]): UpdateColorPickerStopsEvent {
  return { type: "update-colorpicker-stops", stops };
}

export interface SortColorPickerStopsEvent extends Event {
  type: "sort-colorpicker-stops";
}

export function sortColorPickerStops(): SortColorPickerStopsEvent {
  return { type: "sort-colorpicker-stops" };
}

export interface RemoveGradientStopEvent extends Event {
  type: "remove-gradient-stop";
  index?: number;
}

export function removeGradientStop(index?: number): RemoveGradientStopEvent {
  return { type: "remove-gradient-stop", index };
}

export interface UpdateColorPickerColorEvent extends Event {
  type: "update-colorpicker-color";
  changes: any;
  addRecent?: boolean;
}

export function updateColorPickerColor(changes: any, addRecent?: boolean): UpdateColorPickerColorEvent {
  return { type: "update-colorpicker-color", changes, addRecent };
}

export interface UpdateColorPickerGradientEvent extends Event {
  type: "update-colorpicker-gradient";
  changes: any;
}

export function updateColorPickerGradient(changes: any): UpdateColorPickerGradientEvent {
  return { type: "update-colorpicker-gradient", changes };
}

export interface SelectColorPickerGradientStopEvent extends Event {
  type: "select-colorpicker-gradient-stop";
  index: number;
}

export function selectColorPickerGradientStop(index: number): SelectColorPickerGradientStopEvent {
  return { type: "select-colorpicker-gradient-stop", index };
}

export interface ActivateColorPickerColorEvent extends Event {
  type: "activate-colorpicker-color";
}

export function activateColorPickerColor(): ActivateColorPickerColorEvent {
  return { type: "activate-colorpicker-color" };
}

export interface ActivateColorPickerGradientEvent extends Event {
  type: "activate-colorpicker-gradient";
  type: "linear-gradient" | "radial-gradient";
}

export function activateColorPickerGradient(type: "linear-gradient" | "radial-gradient"): ActivateColorPickerGradientEvent {
  return { type: "activate-colorpicker-gradient", type };
}

export interface ActivateColorPickerImageEvent extends Event {
  type: "activate-colorpicker-image";
}

export function activateColorPickerImage(): ActivateColorPickerImageEvent {
  return { type: "activate-colorpicker-image" };
}

// Export all color-related events
export const ColorEvents = {
  showPalette,
  startPicker,
  stopPicker,
  pickColor,
  pickColorSelect,
  changeFill,
  changeFillAndClear,
  addFill,
  detachFill,
  removeFill,
  removeAllFills,
  changeHideFillOnExport,
  changeStrokeColor,
  changeStrokeAttrs,
  changeShadow,
  addShadow,
  addStroke,
  removeStroke,
  removeAllStrokes,
  reorderShadows,
  reorderStrokes,
  reorderFills,
  pickerForSelectedShape,
  changeColorInSelected,
  applyColorFromPalette,
  applyColorFromColorPicker,
  addRecentColor,
  applyColorFromAssets,
  initializeColorPicker,
  finalizeColorPicker,
  updateColorPicker,
  updateColorPickerGradientOpacity,
  updateColorPickerAddAuto,
  updateColorPickerAddStop,
  updateColorPickerStops,
  sortColorPickerStops,
  removeGradientStop,
  updateColorPickerColor,
  updateColorPickerGradient,
  selectColorPickerGradientStop,
  activateColorPickerColor,
  activateColorPickerGradient,
  activateColorPickerImage,
};