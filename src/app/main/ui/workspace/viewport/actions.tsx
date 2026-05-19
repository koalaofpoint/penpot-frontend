// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from "app/common/data";
import * as cfh from "app/common/files/helpers";
import * as gpt from "app/common/geom/point";
import * as mth from "app/common/math";
import * as ctl from "app/common/types/shape/layout";
import * as uuid from "app/common/uuid";
import * as cfg from "app/config";
import * as dw from "app/main/data/workspace";
import * as dd from "app/main/data/workspace/drawing";
import * as dwl from "app/main/data/workspace/libraries";
import * as dwm from "app/main/data/workspace/media";
import * as dwdp from "app/main/data/workspace/path";
import * as dwsp from "app/main/data/workspace/specialized-panel";
import * as dwt from "app/main/data/workspace/texts";
import * as features from "app/main/features";
import * as refs from "app/main/refs";
import { emit } from "app/main/store";
import * as wsac from "app/main/ui/workspace/sidebar/assets/components";
import * as uwvv from "app/main/ui/workspace/viewport/viewport-ref";
import * as wasmApi from "app/render-wasm/api";
import * as wasmWasm from "app/render-wasm/wasm";
import * as dom from "app/util/dom";
import * as dnd from "app/util/dom/dnd";
import * as nw from "app/util/dom/normalize-wheel";
import * as kbd from "app/util/keyboard";
import * as mse from "app/util/mouse";
import * as obj from "app/util/object";
import { throttleFn } from "app/util/rxops";
import * as txu from "app/util/text/ui";
import * as ts from "app/util/timers";
import * as wapi from "app/util/webapi";
import * as rx from "beicon.v2/core";
import * as str from "cuerdas.core";
import React, { useCallback, useEffect, useMemo, useRef } from "react";

const scalePerPixel = -0.0057;

interface OnPointerDownProps {
  id: string | null;
  blocked: boolean;
  hidden: boolean;
  type: string | null;
  selected: any;
  edition: string | null;
  drawingTool: any;
  textEditing: boolean;
  nodeEditing: boolean;
  gridEditing: boolean;
  drawingPath: boolean;
  createComment: boolean;
  space: boolean;
  panning: boolean;
  z: boolean;
  readOnly: boolean;
}

export function useOnPointerDown({
  id,
  blocked,
  hidden,
  type,
  selected,
  edition,
  drawingTool,
  textEditing,
  nodeEditing,
  gridEditing,
  drawingPath,
  createComment,
  space,
  panning,
  z,
  readOnly,
}: OnPointerDownProps) {
  return useCallback(
    (bevent: any) => {
      const target = dom.getTarget(bevent);
      const editor = txu.closestTextEditorContent(target);
      if (editor) {
        editor.setPointerCapture(bevent.pointerId);
      } else {
        target.setPointerCapture(bevent.pointerId);
      }

      if (
        dom.classList(target, "viewport-controls") ||
        dom.classList(target, "viewport-selrect") ||
        dom.child(target, dom.query(".grid-layout-editor"))
      ) {
        dom.stopPropagation(bevent);

        if (!z) {
          const event = dom.eventToNativeEvent(bevent);
          const ctrl = kbd.ctrl(event);
          const meta = kbd.meta(event);
          const shift = kbd.shift(event);
          const alt = kbd.alt(event);
          const mod = kbd.mod(event);

          const leftClick = !panning && dom.leftMouse(bevent);
          const middleClick = !panning && dom.middleMouse(bevent);

          if (middleClick || (leftClick && space)) {
            dom.preventDefault(bevent);
            if (mod) {
              const rawPt = dom.getClientPosition(event);
              const pt = uwvv.pointToViewport(rawPt);
              emit(dw.startZooming(pt));
            } else {
              emit(dw.startPanning());
            }
          } else if (leftClick) {
            emit(mse.toMouseEvent("down", ctrl, shift, alt, meta), dwsp.interrupt);

            if (edition !== id && (textEditing || gridEditing)) {
              emit(dw.clearEditionMode());
              if (
                textEditing &&
                features.activeFeature(st.state, "render-wasm/v1") &&
                wasmWasm.contextInitialized
              ) {
                const textEditorContent = wasmApi.textEditorSyncContent();
                if (textEditorContent) {
                  const { shapeId, content } = textEditorContent;
                  emit(dwt.v2UpdateTextShapeContent(shapeId, content, { updateName: true, finalize: true }));
                }
                wasmApi.textEditorStop();
              }
            }

            if (!textEditing && !blocked && !hidden && !createComment && !drawingPath) {
              if (nodeEditing) {
                if (!readOnly) {
                  emit(dwdp.handleAreaSelection(shift, shift && mod));
                }
              } else if (drawingTool) {
                if (!readOnly) {
                  emit(dd.startDrawing(drawingTool));
                }
              } else if (!id || mod) {
                emit(dw.handleAreaSelection(shift, shift && mod, mod));
              } else if (!drawingTool && !readOnly) {
                emit(dw.startMoveSelected(id, shift));
              }
            }
          }
        }
      }
    },
    [id, blocked, hidden, type, selected, edition, drawingTool, textEditing, nodeEditing, gridEditing, drawingPath, createComment, space, panning, z, readOnly]
  );
}

interface OnMoveSelectedProps {
  hover: any;
  hoverIds: any[];
  selected: any;
  space: boolean;
  z: boolean;
  readOnly: boolean;
}

export function useOnMoveSelected({ hover, hoverIds, selected, space, z, readOnly }: OnMoveSelectedProps) {
  return useCallback(
    (bevent: any) => {
      const event = dom.eventToNativeEvent(bevent);
      const shift = kbd.shift(event);
      const mod = kbd.mod(event);

      if (dom.leftMouse(bevent) && !mod && !shift && !space) {
        dom.preventDefault(bevent);
        dom.stopPropagation(bevent);
        if (!readOnly && !z) {
          emit(dw.startMoveSelected());
        }
      }
    },
    [hover, hoverIds, selected, space, z, readOnly]
  );
}

interface OnFrameSelectProps {
  selected: any;
  readOnly: boolean;
}

export function useOnFrameSelect({ selected, readOnly }: OnFrameSelectProps) {
  return useCallback(
    (event: Event, id: string) => {
      const shift = kbd.shift(event);
      const selectedExists = selected.has(id);
      const selectedDrawtool = refs.selectedDrawingTool.deref();
      emit(
        !shift || !selectedExists ? dw.selectShape(id, shift) : null,
        selectedDrawtool === null && !shift && !readOnly ? dw.startMoveSelected() : null
      );
    },
    [selected, readOnly]
  );
}

export function useOnFrameEnter(frameHover: React.MutableRefObject<string | null>) {
  return useCallback((id: string) => {
    frameHover.current = id;
  }, [frameHover]);
}

export function useOnFrameLeave(frameHover: React.MutableRefObject<string | null>) {
  return useCallback(() => {
    frameHover.current = null;
  }, [frameHover]);
}

interface OnClickProps {
  hover: any;
  selected: any;
  edition: string | null;
  drawingPath: boolean;
  drawingTool: any;
  space: boolean;
  selrect: any;
  z: boolean;
}

export function useOnClick({ hover, selected, edition, drawingPath, drawingTool, space, selrect, z }: OnClickProps) {
  return useCallback(
    (event: Event) => {
      if (selrect) return;

      const target = dom.getTarget(event);
      if (
        !dom.classList(target, "viewport-controls") &&
        !dom.child(target, dom.query(".grid-layout-editor")) &&
        !dom.classList(target, "viewport-selrect")
      ) {
        return;
      }

      const ctrl = kbd.ctrl(event);
      const shift = kbd.shift(event);
      const alt = kbd.alt(event);
      const meta = kbd.meta(event);
      const hovering = hover?.current != null;
      const rawPt = dom.getClientPosition(event);
      const pt = uwvv.pointToViewport(rawPt);

      emit(mse.toMouseEvent("click", ctrl, shift, alt, meta));

      if (hovering && !space.current && !edition && !drawingPath && !drawingTool) {
        emit(dw.selectShape(hover.current.id, shift));
      }

      if (
        hovering &&
        !space.current &&
        edition &&
        !drawingPath &&
        !drawingTool
      ) {
        const hoverShape = hover.current;
        if (
          hoverShape.type === "text" &&
          features.activeFeature(st.state, "text-editor-wasm/v1") &&
          wasmWasm.contextInitialized
        ) {
          const rawPt2 = dom.getClientPosition(event);
          wasmApi.textEditorSetCursorFromPoint(rawPt2.x, rawPt2.y);
        }
      }

      if (z.current && !space.current && !edition && !drawingPath && !drawingTool) {
        if (alt) {
          emit(dw.decreaseZoom(pt));
        } else {
          emit(dw.increaseZoom(pt));
        }
      }
    },
    [hover, selected, edition, drawingPath, drawingTool, space, selrect, z]
  );
}

interface OnDoubleClickProps {
  hover: any;
  hoverIds: any[];
  hoverTopFrameId: any;
  drawingPath: boolean;
  objects: any;
  edition: string | null;
  drawingTool: any;
  z: boolean;
  readOnly: boolean;
}

export function useOnDoubleClick({
  hover,
  hoverIds,
  hoverTopFrameId,
  drawingPath,
  objects,
  edition,
  drawingTool,
  z,
  readOnly,
}: OnDoubleClickProps) {
  return useCallback(
    (event: Event) => {
      dom.stopPropagation(event);

      if (z.current) return;

      const ctrl = kbd.ctrl(event);
      const shift = kbd.shift(event);
      const alt = kbd.alt(event);
      const meta = kbd.meta(event);

      const shape = hover.current || objects[hoverIds[0]];
      const { id, type } = shape || {};
      const editable = new Set(["text", "rect", "path", "image", "circle"]).has(type);

      const hoverShape = hoverIds.find((hId) => cfh.isChild(objects, id, hId));
      const selectedShape = hoverShape ? objects[hoverShape] : null;

      const gridLayoutId = [...hoverIds].reverse().find((hId) => ctl.gridLayout(objects, hId));

      emit(mse.toMouseEvent("double-click", ctrl, shift, alt, meta));

      ts.schedule(() => {
        if (!drawingPath && shape) {
          if (editable && id !== edition && !readOnly) {
            emit(dw.selectShape(id), dw.startEditingSelected());
            if (
              type === "text" &&
              features.activeFeature(st.state, "text-editor-wasm/v1") &&
              wasmWasm.contextInitialized
            ) {
              wasmApi.textEditorStart(id);
            }
          } else if (selectedShape) {
            hover.current = selectedShape;
            emit(dw.selectShape(selectedShape.id));
          } else if (!selectedShape && gridLayoutId && !readOnly) {
            emit(dw.startEditionMode(gridLayoutId));
          }
        }
      });
    },
    [hover, hoverIds, hoverTopFrameId, drawingPath, objects, edition, drawingTool, z, readOnly]
  );
}

interface OnContextMenuProps {
  hover: any;
  hoverIds: any[];
  readOnly: boolean;
}

export function useOnContextMenu({ hover, hoverIds, readOnly }: OnContextMenuProps) {
  return useCallback(
    (event: Event) => {
      dom.preventDefault(event);
      const target = dom.getTarget(event);
      if (
        dom.classList(target, "viewport-controls") ||
        dom.child(target, dom.query(".grid-layout-editor")) ||
        dom.classList(target, "viewport-selrect")
      ) {
        const position = dom.getClientPosition(event);
        ts.schedule(() => {
          emit(
            !readOnly && hover.current
              ? dw.showShapeContextMenu({ position, shape: hover.current, hoverIds: hoverIds.current })
              : dw.showContextMenu({ position })
          );
        });
      }
    },
    [hover, hoverIds, readOnly]
  );
}

interface OnMenuSelectedProps {
  hover: any;
  hoverIds: any[];
  selected: any;
  readOnly: boolean;
}

export function useOnMenuSelected({ hover, hoverIds, selected, readOnly }: OnMenuSelectedProps) {
  return useCallback(
    (event: Event) => {
      dom.preventDefault(event);
      dom.stopPropagation(event);
      if (!readOnly) {
        const position = dom.getClientPosition(event);
        emit(dw.showShapeContextMenu({ position, hoverIds: hoverIds.current }));
      }
    },
    [hover, hoverIds, selected, readOnly]
  );
}

interface OnPointerUpProps {
  disablePasteRef: React.MutableRefObject<boolean>;
}

export function useOnPointerUp({ disablePasteRef }: OnPointerUpProps) {
  return useCallback(
    (event: Event) => {
      dom.stopPropagation(event);

      const target = dom.getTarget(event);
      target.releasePointerCapture(event.pointerId);

      const nativeEvent = dom.eventToNativeEvent(event);
      const ctrl = kbd.ctrl(nativeEvent);
      const shift = kbd.shift(nativeEvent);
      const alt = kbd.alt(nativeEvent);
      const meta = kbd.meta(nativeEvent);

      const leftClick = event.which === 1;
      const middleClick = event.which === 2;

      if (leftClick) {
        emit(mse.toMouseEvent("up", ctrl, shift, alt, meta));
      }

      if (middleClick) {
        dom.preventDefault(event);
        disablePasteRef.current = true;
        ts.schedule(() => {
          disablePasteRef.current = false;
        });
      }

      emit(dw.finishPanning(), dw.finishZooming());
    },
    [disablePasteRef]
  );
}

export function useOnPointerEnter(inViewportRef: React.MutableRefObject<boolean>) {
  return useCallback(() => {
    inViewportRef.current = true;
  }, [inViewportRef]);
}

export function useOnPointerLeave(inViewportRef: React.MutableRefObject<boolean>) {
  return useCallback(() => {
    inViewportRef.current = false;
  }, [inViewportRef]);
}

export function useOnKeyDown() {
  return useCallback(
    (event: any) => {
      const bevent = event.getBrowserEvent?.() || event;
      const key = bevent.key;
      const ctrl = kbd.ctrl(event);
      const shift = kbd.shift(event);
      const alt = kbd.alt(event);
      const meta = kbd.meta(event);
      const mod = kbd.mod(event);
      const target = dom.getTarget(event);

      const editing =
        txu.someTextEditorContent(target) ||
        target.className === "rich-text" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA";

      if (!bevent.repeat) {
        emit(kbd.toKeyboardEvent("down", key, shift, ctrl, alt, meta, mod, editing, event));
      }
    },
    []
  );
}

export function useOnKeyUp() {
  return useCallback(
    (event: any) => {
      const key = event.key;
      const ctrl = kbd.ctrl(event);
      const shift = kbd.shift(event);
      const alt = kbd.alt(event);
      const meta = kbd.meta(event);
      const mod = kbd.mod(event);
      const target = dom.getTarget(event);

      const editing =
        txu.someTextEditorContent(target) ||
        target.className === "rich-text" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA";

      emit(kbd.toKeyboardEvent("up", key, shift, ctrl, alt, meta, mod, editing, event));
    },
    []
  );
}

export function useOnPointerMove(moveStream: any) {
  const lastPosition = useRef<any>(null);

  return useCallback(
    (event: Event) => {
      const rawPt = dom.getClientPosition(event);
      const pt = uwvv.pointToViewport(rawPt);

      const delta = lastPosition.current
        ? gpt.subtract(rawPt, lastPosition.current)
        : gpt.point(0, 0);

      rx.push(moveStream, pt);
      lastPosition.current = rawPt;
      emit(
        mse.toPointerEvent("delta", delta, kbd.ctrl(event), kbd.shift(event), kbd.alt(event), kbd.meta(event))
      );
      emit(
        mse.toPointerEvent("viewport", pt, kbd.ctrl(event), kbd.shift(event), kbd.alt(event), kbd.meta(event))
      );
    },
    [moveStream]
  );
}

interface ScheduleZoomState {
  dx: number;
  dy: number;
  rafId: number;
  scale: number;
  zoomPt: any;
  zoomRafId: number;
}

function scheduleZoom(state: ScheduleZoomState, scale: number, pt: any) {
  const pending = state.zoomRafId > 0;
  state.scale = state.scale * scale;
  state.zoomPt = pt;
  if (!pending) {
    state.zoomRafId = ts.raf(() => {
      const s = state.scale;
      const zp = state.zoomPt;
      state.scale = 1;
      state.zoomPt = null;
      state.zoomRafId = 0;
      emit(dw.setZoom(zp, s));
    });
  }
}

function scheduleScroll(state: ScheduleZoomState, zoom: number, event: Event, deltaX: number, deltaY: number) {
  const pending = state.rafId > 0;
  if (!cfg.checkPlatform("macos") && kbd.shift(event)) {
    state.dx = state.dx + deltaY / zoom;
  } else {
    state.dx = state.dx + deltaX / zoom;
    state.dy = state.dy + deltaY / zoom;
  }
  if (!pending) {
    state.rafId = ts.raf(() => {
      const dx = state.dx;
      const dy = state.dy;
      state.dx = 0;
      state.dy = 0;
      state.rafId = 0;
      emit(dw.updateViewportPosition({ x: (x: number) => x + dx, y: (y: number) => y + dy }));
    });
  }
}

interface OnMouseWheelProps {
  zoomRef: React.MutableRefObject<number>;
}

export function useOnMouseWheel({ zoomRef }: OnMouseWheelProps) {
  const scrollState = useRef<ScheduleZoomState>({
    dx: 0,
    dy: 0,
    rafId: 0,
    scale: 1,
    zoomPt: null,
    zoomRafId: 0,
  });

  return useCallback(
    (event: any) => {
      const nativeEvent = event.getBrowserEvent?.() || event;
      const target = dom.getTarget(nativeEvent);
      const mod = kbd.mod(nativeEvent);
      const ctrl = kbd.ctrl(nativeEvent);

      const pickingColor = target.id === "pixel-overlay";
      const commentsLayer = dom.isChild(dom.getElement("comments"), target);

      const rawPt = dom.getClientPosition(nativeEvent);
      const pt = uwvv.pointToViewport(rawPt);

      const normEvent = nw.normalizeWheel(nativeEvent);
      const deltaY = normEvent.pixelY;
      const deltaX = normEvent.pixelX;
      const deltaZoom = deltaY + deltaX;
      let scale = 1 + Math.abs(scalePerPixel * deltaZoom);
      scale = deltaZoom > 0 ? 1 / scale : scale;

      if (uwvv.insideViewport(target) || pickingColor) {
        dom.preventDefault(event);
        dom.stopPropagation(event);
        if (ctrl || mod) {
          scheduleZoom(scrollState.current, scale, pt);
        } else {
          scheduleScroll(scrollState.current, zoomRef.current, nativeEvent, deltaX, deltaY);
        }
      }

      if (commentsLayer && (ctrl || mod)) {
        dom.preventDefault(event);
        dom.stopPropagation(event);
        scheduleZoom(scrollState.current, scale, pt);
      }
    },
    [zoomRef]
  );
}

interface OnDragEnterProps {
  compInstRef: React.MutableRefObject<boolean>;
}

export function useOnDragEnter({ compInstRef }: OnDragEnterProps) {
  return useCallback(
    (e: any) => {
      const componentInst = compInstRef.current;
      if (
        dnd.hasType(e, "penpot/component") &&
        dom.classList(dom.getTarget(e), "viewport-controls") &&
        !componentInst
      ) {
        const point = gpt.point(e.clientX, e.clientY);
        const viewportCoord = uwvv.pointToViewport(point);
        const { component, fileId, shape } = wsac.dragData.deref();

        const finalX = viewportCoord.x - shape.width / 2;
        const finalY = viewportCoord.y - shape.height / 2;

        compInstRef.current = true;
        emit(
          dwl.instantiateComponent(
            fileId,
            component.id,
            gpt.point(finalX, finalY),
            { startMove: true, initialPoint: viewportCoord, origin: "sidebar" }
          )
        );
      }

      if (
        dnd.hasType(e, "penpot/shape") ||
        dnd.hasType(e, "penpot/component") ||
        dnd.hasType(e, "Files") ||
        dnd.hasType(e, "text/uri-list") ||
        dnd.hasType(e, "text/asset-id")
      ) {
        dom.preventDefault(e);
      }
    },
    [compInstRef]
  );
}

interface OnDragEndProps {
  compInstRef: React.MutableRefObject<boolean>;
}

export function useOnDragEnd({ compInstRef }: OnDragEndProps) {
  return useCallback(() => {
    compInstRef.current = false;
  }, [compInstRef]);
}

interface OnDragOverProps {
  moveStream: any;
}

export function useOnDragOver({ moveStream }: OnDragOverProps) {
  const onPointerMove = useOnPointerMove(moveStream);
  const throttledMove = throttleFn(50, (e: Event) => ts.raf(() => onPointerMove(e)));

  return useCallback(
    (e: any) => {
      if (
        dnd.hasType(e, "penpot/shape") ||
        dnd.hasType(e, "penpot/component") ||
        dnd.hasType(e, "Files") ||
        dnd.hasType(e, "text/uri-list") ||
        dnd.hasType(e, "text/asset-id")
      ) {
        throttledMove(e);
        dom.preventDefault(e);
      }
    },
    [moveStream, throttledMove]
  );
}

interface OnDropProps {
  file: any;
  compInstRef: React.MutableRefObject<boolean>;
}

export function useOnDrop({ file, compInstRef }: OnDropProps) {
  return useCallback(
    (event: Event) => {
      dom.preventDefault(event);
      const point = gpt.point(event.clientX, event.clientY);
      const viewportCoord = uwvv.pointToViewport(point);

      if (dnd.hasType(event, "penpot/shape")) {
        const shape = dnd.getData(event, "penpot/shape");
        const finalX = viewportCoord.x - shape.width / 2;
        const finalY = viewportCoord.y - shape.height / 2;
        emit(
          dw.addShape(
            shape
              .set("id", uuid.next())
              .set("x", finalX)
              .set("y", finalY)
          )
        );
      } else if (dnd.hasType(event, "penpot/component")) {
        const nativeEvent = dom.eventToNativeEvent(event);
        const ctrl = kbd.ctrl(nativeEvent);
        const shift = kbd.shift(nativeEvent);
        const alt = kbd.alt(nativeEvent);
        const meta = kbd.meta(nativeEvent);
        emit(mse.toMouseEvent("up", ctrl, shift, alt, meta));
        compInstRef.current = false;
      } else if (dnd.hasType(event, "Files")) {
        const files = dnd.getFiles(event);
        const params = {
          fileId: file.id,
          position: viewportCoord,
          blobs: [...files],
        };
        emit(dwm.uploadMediaWorkspace(params));
      } else if (dnd.hasType(event, "text/uri-list")) {
        const data = dnd.getData(event, "text/uri-list");
        const lines = str.lines(data);
        const uris = lines.filter((l: string) => str.startsWith(l, "http"));
        const datauris = lines.filter((l: string) => str.startsWith(l, "data:image/"));
        const params: any = { fileId: file.id, position: viewportCoord };
        if (uris.length) {
          params.uris = uris;
        } else {
          params.blobs = datauris.map((d: string) => wapi.dataUriToBlob(d));
        }
        emit(dwm.uploadMediaWorkspace(params));
      } else {
        const files = dnd.getFiles(event);
        const params = {
          fileId: file.id,
          position: viewportCoord,
          blobs: [...files],
        };
        emit(dwm.uploadMediaWorkspace(params));
      }
    },
    [file, compInstRef]
  );
}

const invalidPasteTargets = new Set(["INPUT", "TEXTAREA"]);

interface OnPasteProps {
  disablePasteRef: React.MutableRefObject<boolean>;
  inViewportRef: React.MutableRefObject<boolean>;
  readOnly: boolean;
}

export function useOnPaste({ disablePasteRef, inViewportRef, readOnly }: OnPasteProps) {
  return useCallback(
    (event: Event) => {
      const tagName = dom.getTagName(dom.getTarget(event));
      const disablePaste = disablePasteRef.current;
      const inViewport = inViewportRef.current;

      if (!invalidPasteTargets.has(tagName) && !disablePaste && !readOnly) {
        emit(dw.pasteFromEvent(event, inViewport));
      }
    },
    [disablePasteRef, inViewportRef, readOnly]
  );
}