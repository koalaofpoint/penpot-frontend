/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (c) KALEIDOS INC
 */

import { ptk, ev } from "../../potok";
import { d } from "../../../common/data";
import { dm } from "../../../common/data/macros";
import { pcb } from "../../../common/files/changes-builder";
import { cfh } from "../../../common/files/helpers";
import { gpt } from "../../../common/geom/point";
import { cls } from "../../../common/logic/shapes";
import { ctp } from "../../../common/types/page";
import { ctst } from "../../../common/types/shape-tree";
import { ctsi } from "../../../common/types/shape/interactions";
import { uuid } from "../../../common/uuid";
import { dch } from "../../changes";
import { dsh } from "../../helpers";
import { dwsh } from "./shapes";
import { dwu } from "./undo";
import { ms } from "../../streams";
import { mse } from "../../../util/mouse";

// --- Flows

export const addFlow = (
  startingFrame: string,
  pageId?: string,
  name?: string,
  flowId?: string
) => {
  if (!pageId && !name && !flowId) {
    return addFlow(null, null, null, startingFrame);
  }

  return ptk.reify("add-flow", {
    ptk: {
      Event: {
        data: {
          name: "add-flow",
        },
      },
      WatchEvent: {
        watch(it, state) {
          const page = pageId ? dsh.lookupPage(state, pageId) : dsh.lookupPage(state);
          const unames = cfh.getUsedNames(Object.values(page.flows || {}));
          const name = name || cfh.generateUniqueName("Flow", unames, true);
          const flowId = flowId || uuid.next();
          const flow = {
            id: flowId,
            name: name,
            startingFrame: startingFrame,
          };

          return [
            dch.commitChanges(
              pcb.emptyChanges(it)
                .withPage(page)
                .setFlow(flowId, flow)
            ),
          ];
        },
      },
    },
  });
};

export const addFlowSelectedFrame = () => {
  return ptk.reify("add-flow-selected-frame", {
    ptk: {
      Event: {
        data: {
          name: "add-prototype-interaction",
        },
      },
      WatchEvent: {
        watch(_ctx, state) {
          const selected = dsh.lookupSelected(state);
          return [addFlow(selected[0])];
        },
      },
    },
  });
};

export const removeFlow = (flowId: string, pageId?: string) => {
  if (!pageId) {
    return removeFlow(flowId, undefined);
  }

  return ptk.reify("remove-flow", {
    ptk: {
      WatchEvent: {
        watch(it, state) {
          const page = pageId ? dsh.lookupPage(state, pageId) : dsh.lookupPage(state);
          return [
            dch.commitChanges(
              pcb.emptyChanges(it)
                .withPage(page)
                .setFlow(flowId, null)
            ),
          ];
        },
      },
    },
  });
};

export const updateFlow = (pageId: string, flowId: string, updateFn: (flow: any) => any) => {
  dm.assert("expect valid flow-id", uuid.isUUID(flowId));
  dm.assert("expect valid page-id", uuid.isUUID(pageId));

  return ptk.reify("update-flow", {
    ptk: {
      WatchEvent: {
        watch(it, state) {
          const page = pageId ? dsh.lookupPage(state, pageId) : dsh.lookupPage(state);
          const flow = dm.getIn(page, ["flows", flowId]);
          const flow = flow ? updateFn(flow) : null;

          if (flow) {
            return [
              dch.commitChanges(
                pcb.emptyChanges(it)
                  .withPage(page)
                  .setFlow(flowId, flow)
              ),
            ];
          }

          return [];
        },
      },
    },
  });
};

export const renameFlow = (flowId: string, name: string) => {
  dm.assert("expected valid flow-id", uuid.isUUID(flowId));
  dm.assert("expected valid name", typeof name === "string");

  return ptk.reify("rename-flow", {
    ptk: {
      WatchEvent: {
        watch(_ctx, state) {
          const page = dsh.lookupPage(state);
          return [updateFlow(page.id, flowId, () => ({ ...page, name }))];
        },
      },
    },
  });
};

// --- Interactions

function connectedFrame?(objects: any, frameId: string): boolean {
  const children = cfh.getChildrenWithSelf(objects, frameId);
  return (
    children.some(child => ctsi.flowOrigin?(child.interactions)) ||
    Object.values(objects).some(obj =>
      obj.interactions?.some((interaction: any) => ctsi.flowTo?(interaction, frameId))
    )
  );
}

export const addInteraction = (
  pageId: string,
  shapeId: string,
  interaction: any
) => {
  return ptk.reify("add-interaction", {
    ptk: {
      WatchEvent: {
        watch(_ctx, state) {
          const pageId = pageId || state.currentPageId;
          return [
            dwsh.updateShapes([shapeId], (shape) =>
              cls.addNewInteraction(shape, interaction)
            ),
            { pageId },
            interaction.destination &&
              dwsh.updateShapes([interaction.destination], cls.showInViewer, {
                pageId,
              }),
          ].filter(Boolean);
        },
      },
    },
  });
};

export const addNewInteraction = (shape: any, destination?: string) => {
  if (!destination) {
    return addNewInteraction(shape, undefined);
  }

  return ptk.reify("add-new-interaction", {
    ptk: {
      WatchEvent: {
        watch(_ctx, state) {
          const pageId = state.currentPageId;
          const page = dsh.lookupPage(state, pageId);
          const objects = page.objects;
          const frame = cfh.getRootFrame(objects, shape.id);
          const first = !Object.values(objects).some(obj => obj.interactions?.length);
          const flows = page.flows;
          const flow = ctp.getFrameFlow(flows, frame.id);

          return [
            dwsh.updateShapes(
              [shape.id],
              (shape) => {
                const newInteraction = {
                  ...ctsi.defaultInteraction,
                  destination,
                  positionRelativeTo: shape.id,
                };
                return cls.addNewInteraction(shape, newInteraction);
              }
            ),
            { pageId },
            destination &&
              dwsh.updateShapes([destination], cls.showInViewer, { pageId }),
            connectedFrame?(objects, frame.id) && !flow &&
              addFlow(frame.id),
            first &&
              ev.event({ name: "create-prototype" }),
            !first &&
              ev.event({ name: "add-prototype-interaction" }),
          ].filter(Boolean);
        },
      },
    },
  });
};

export const removeInteraction = (shape: any, index: number, pageId?: string) => {
  if (!pageId) {
    return removeInteraction(shape, index, undefined);
  }

  return ptk.reify("remove-interaction", {
    ptk: {
      WatchEvent: {
        watch(_ctx, _state) {
          return [
            dwsh.updateShapes([shape.id], (shape) => ({
              ...shape,
              interactions: ctsi.removeInteraction(shape.interactions, index),
            })),
            { pageId },
          ];
        },
      },
    },
  });
};

export const updateInteraction = (
  shape: any,
  index: number,
  updateFn: (interaction: any) => any,
  options?: any
) => {
  return ptk.reify("update-interaction", {
    ptk: {
      WatchEvent: {
        watch(_ctx, _state) {
          const interactions = ctsi.updateInteraction(shape.interactions, index, updateFn);
          const interaction = interactions[index];

          return [
            dwsh.updateShapes(
              [shape.id],
              (shape) => ({
                ...shape,
                interactions: ctsi.updateInteraction(shape.interactions, index, updateFn),
              }),
              options
            ),
            interaction.destination &&
              dwsh.updateShapes([interaction.destination], cls.showInViewer, options),
          ].filter(Boolean);
        },
      },
    },
  });
};

export const removeAllInteractionsNavTo = (frameId: string) => {
  return ptk.reify("remove-all-interactions-nav-to", {
    ptk: {
      WatchEvent: {
        watch(_ctx, state) {
          const pageId = state.currentPageId;
          const objects = dsh.lookupPageObjects(state, pageId);

          const removeInteractionsShape = (shape: any) => {
            const interactions = shape.interactions;
            const newInteractions = ctsi.removeInteractions(
              (interaction: any) => ctsi.navsTo?(interaction, frameId),
              interactions
            );

            if (interactions.length !== newInteractions.length) {
              return dwsh.updateShapes(
                [shape.id],
                (shape) => ({
                  ...shape,
                  interactions: newInteractions,
                })
              );
            }

            return null;
          };

          return Object.values(objects)
            .map(removeInteractionsShape)
            .filter(Boolean);
        },
      },
    },
  });
};

declare let moveEditInteraction: (initialPos: any, position: any) => any;
declare let finishEditInteraction: (index: number, initialPos: any) => any;

export const startEditInteraction = (index: number) => {
  return ptk.reify("start-edit-interaction", {
    ptk: {
      UpdateEvent: {
        update(_ctx, state) {
          return {
            ...state,
            workspaceLocal: {
              ...state.workspaceLocal,
              editingInteractionIndex: index,
            },
          };
        },
      },
      WatchEvent: {
        watch(_ctx, state, stream) {
          const initialPos = ms.mousePosition.get();
          const selected = dsh.lookupSelected(state);
          const stopper = mse.dragStopper(stream);

          if (selected.length === 1) {
            return [
              ms.mousePosition
                .takeUntil(stopper)
                .map(pos => moveEditInteraction(initialPos, pos)),
              finishEditInteraction(index, initialPos),
            ];
          }

          return [];
        },
      },
    },
  });
};

function getTargetFrame(state: any, position: any): any {
  const objects = dsh.lookupPageObjects(state);
  const fromId = dsh.lookupSelected(state)[0];
  const fromShape = dsh.lookupShape(state, fromId);
  const fromFrameId = cfh.frameShape?(fromShape) ? fromId : fromShape.frameId;

  const targetFrame = ctst.getFramesByPosition(objects, position).pop();

  if (targetFrame?.id !== uuid.zero && targetFrame?.id !== fromFrameId) {
    return targetFrame;
  }

  return null;
}

const moveEditInteraction = (_initialPos: any, position: any) => {
  return ptk.reify("move-edit-interaction", {
    ptk: {
      UpdateEvent: {
        update(_ctx, state) {
          const endFrame = getTargetFrame(state, position);
          return {
            ...state,
            workspaceLocal: {
              ...state.workspaceLocal,
              drawInteractionTo: position,
              drawInteractionToFrame: endFrame,
            },
          };
        },
      },
    },
  });
};

const finishEditInteraction = (index: number, initialPos: any) => {
  return ptk.reify("finish-edit-interaction", {
    ptk: {
      UpdateEvent: {
        update(_ctx, state) {
          return {
            ...state,
            workspaceLocal: {
              ...state.workspaceLocal,
              editingInteractionIndex: null,
              drawInteractionTo: null,
              drawInteractionToFrame: null,
            },
          };
        },
      },
      WatchEvent: {
        watch(_ctx, state) {
          const position = ms.mousePosition.get();
          const targetFrame = getTargetFrame(state, position);
          const shapeId = dsh.lookupSelected(state)[0];
          const shape = dsh.lookupShape(state, shapeId);
          const undoId = Symbol();

          const changeInteraction = (interaction: any) => {
            return {
              ...interaction,
              ...(interaction.destination ? {} : { actionType: "navigate" }),
              destination: targetFrame?.id || interaction.destination,
            };
          };

          return [
            dwu.startUndoTransaction(undoId),
            targetFrame?.hideInViewer &&
              dwsh.updateShapes([targetFrame.id], (shape) => ({
                ...shape,
                hideInViewer: false,
              })),
            (() => {
              if (!shape || position === initialPos || (!index && !targetFrame)) {
                return null;
              }

              if (index && !targetFrame) {
                return removeInteraction(shape, index);
              }

              if (!index) {
                return addNewInteraction(shape, targetFrame.id);
              }

              return updateInteraction(shape, index, changeInteraction);
            })(),
            dwu.commitUndoTransaction(undoId),
          ].filter(Boolean);
        },
      },
    },
  });
};

// --- Overlays

declare let moveOverlayPos: (pos: any, framePos: any, offset: any) => any;
declare let finishMoveOverlayPos: (index: number, framePos: any, offset: any) => any;

export const startMoveOverlayPos = (index: number) => {
  return ptk.reify("start-move-overlay-pos", {
    ptk: {
      UpdateEvent: {
        update(_ctx, state) {
          return {
            ...state,
            workspaceLocal: {
              ...state.workspaceLocal,
              moveOverlayTo: null,
              moveOverlayIndex: index,
            },
          };
        },
      },
      WatchEvent: {
        watch(_ctx, state, stream) {
          const initialPos = ms.mousePosition.get();
          const selected = dsh.lookupSelected(state);
          const stopper = mse.dragStopper(stream);

          if (selected.length === 1) {
            const pageId = state.currentPageId;
            const objects = dsh.lookupPageObjects(state, pageId);
            const shape = selected[0] ? objects[selected[0]] : null;
            const overlayPos = shape?.interactions[index]?.overlayPosition;
            const origFrame = cfh.getFrame(objects, shape);
            const framePos = gpt.point(origFrame.x, origFrame.y);
            const offset = gpt
              .subtract(initialPos, overlayPos)
              .subtract(framePos);

            return [
              ms.mousePosition
                .takeUntil(stopper)
                .map(pos => moveOverlayPos(pos, framePos, offset)),
              finishMoveOverlayPos(index, framePos, offset),
            ];
          }

          return [];
        },
      },
    },
  });
};

const moveOverlayPos = (pos: any, framePos: any, offset: any) => {
  return ptk.reify("move-overlay-pos", {
    ptk: {
      UpdateEvent: {
        update(_ctx, state) {
          const pos = gpt
            .subtract(pos, framePos)
            .subtract(offset);
          return {
            ...state,
            workspaceLocal: {
              ...state.workspaceLocal,
              moveOverlayTo: pos,
            },
          };
        },
      },
    },
  });
};

const finishMoveOverlayPos = (index: number, framePos: any, offset: any) => {
  return ptk.reify("finish-move-overlay-pos", {
    ptk: {
      UpdateEvent: {
        update(_ctx, state) {
          return {
            ...state,
            workspaceLocal: {
              ...state.workspaceLocal,
              moveOverlayTo: undefined,
              moveOverlayIndex: undefined,
            },
          };
        },
      },
      WatchEvent: {
        watch(_ctx, state) {
          const pos = ms.mousePosition.get();
          const overlayPos = gpt
            .subtract(pos, framePos)
            .subtract(offset);

          const pageId = state.currentPageId;
          const objects = dsh.lookupPageObjects(state, pageId);
          const shape = dsh.lookupSelected(state)[0] ? objects[dsh.lookupSelected(state)[0]] : null;

          if (!shape) return [];

          const interactions = shape.interactions;
          const newInteractions = update(interactions, index, (interaction: any) =>
            ctsi.setOverlayPosition(interaction, overlayPos)
          );

          return [
            dwsh.updateShapes([shape.id], () => ({
              ...shape,
              interactions: newInteractions,
            })),
          ];
        },
      },
    },
  });
};