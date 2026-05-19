/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (c) KALEIDOS INC
 */

import * as drawing from "./path.drawing";
import * as edition from "./path.edition";
import * as selection from "./path.selection";
import * as tools from "./path.tools";
import * as undo from "./path.undo";

// Drawing
export const handleDrawing = drawing.handleDrawing;
export const startPathFromPoint = drawing.startPathFromPoint;
export const closePathDragStart = drawing.closePathDragStart;
export const changeEditMode = drawing.changeEditMode;
export const resetLastHandler = drawing.resetLastHandler;

// Edition
export const startMoveHandler = edition.startMoveHandler;
export const startMovePathPoint = edition.startMovePathPoint;
export const startPathEdit = edition.startPathEdit;
export const createNodeAtPosition = edition.createNodeAtPosition;
export const moveSelected = edition.moveSelected;

// Selection
export const handleAreaSelection = selection.handleAreaSelection;
export const selectNode = selection.selectNode;
export const pathHandlerEnter = selection.pathHandlerEnter;
export const pathHandlerLeave = selection.pathHandlerLeave;
export const pathPointerEnter = selection.pathPointerEnter;
export const pathPointerLeave = selection.pathPointerLeave;

// Path tools
export const makeCurve = tools.makeCurve;
export const makeCorner = tools.makeCorner;
export const addNode = tools.addNode;
export const removeNode = tools.removeNode;
export const mergeNodes = tools.mergeNodes;
export const joinNodes = tools.joinNodes;
export const separateNodes = tools.separateNodes;
export const toggleSnap = tools.toggleSnap;

// Undo/redo
export const undoPath = undo.undoPath;
export const redoPath = undo.redoPath;
export const mergeHead = undo.mergeHead;