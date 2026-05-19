// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from "react";
import { useCallback, useMemo, useState } from "react";
import * as d from "@app/common/data";
import * as dm from "@app/common/data.macros";
import * as cfh from "@app/common/files.helpers";
import * as gpt from "@app/common/geom/point";
import * as gsh from "@app/common/geom/shapes";
import * as ctsi from "@app/common/types/shape/interactions";
import * as ctm from "@app/common/types/modifiers";
import * as ctp from "@app/common/types/page";
import * as uuid from "@app/common/uuid";
import * as dcm from "@app/main/data/comments";
import * as dv from "@app/main/data/viewer";
import { emit } from "@app/main/store";
import * as refs from "@app/main/refs";
import * as rt from "@app/main/router";
import * as shapes from "@app/main/ui/viewer.shapes";
import * as dom from "@app/util/dom";
import { tr } from "@app/util/i18n";
import { kbd } from "@app/util/keyboard";
import * as ts from "@app/util/timers";

const baseFrameCtx = React.createContext(null);
const frameOffsetCtx = React.createContext(null);

export const refViewerShowInteractions = (l as any).derived(":show-interactions", refs.viewerLocal);

function findRelativeToBaseFrame(shape: any, objects: any, overlaysIds: Set<string>, baseFrame: any): any {
  if (cfh.frameShape(shape)) return shape;
  if (overlaysIds.size === 0 || shape === null || cfh.root(shape)) return baseFrame;
  return findRelativeToBaseFrame(cfh.getParent(objects, shape.id), objects, overlaysIds, baseFrame);
}

function ignoreFrameShape(shape: any, objects: any, manual?: boolean): [any, any] {
  let resultShape = shape;
  if (shape.frameId && !manual) {
    resultShape = { ...shape, type: "rect" };
  }
  return [resultShape, { ...objects, [shape.id]: resultShape }];
}

function activateInteraction(interaction: any, shape: any, baseFrame: any, frameOffset: any, objects: any, overlays: any[]) {
  switch (interaction.actionType) {
    case "navigate": {
      if (interaction.destination) {
        const viewerSection = dom.getElement("viewer-section");
        const scroll = interaction.preserveScroll ? dom.getScrollPos(viewerSection) : 0;
        emit(dv.setNavScroll(scroll), dv.goToFrame(interaction.destination, interaction.animation));
      }
      break;
    }
    case "open-overlay": {
      const manual = interaction.overlayPosType === "manual";
      let [shape1, objects1] = ignoreFrameShape(shape, objects, manual);
      const destFrameId = interaction.destination;
      const destFrame = objects1[destFrameId];
      const relativeToId = manual
        ? (shape1.type === "frame" ? shape1.frameId : shape1.id)
        : interaction.positionRelativeTo;
      const relativeToShape = objects1[relativeToId] || baseFrame;
      const closeClickOutside = interaction.closeClickOutside;
      const backgroundOverlay = interaction.backgroundOverlay;
      const overlaysIds = new Set(overlays.map((o: any) => o.id));
      const relativeToBaseFrame = findRelativeToBaseFrame(relativeToShape, objects1, overlaysIds, baseFrame);
      const fixedBase = cfh.fixed(objects1, relativeToId);
      const [position, snapTo] = ctsi.calcOverlayPosition(
        interaction, shape1, objects1, relativeToShape, relativeToBaseFrame, destFrame, frameOffset
      );
      if (destFrameId) {
        emit(dv.openOverlay(destFrameId, position, snapTo, closeClickOutside, backgroundOverlay, interaction.animation, fixedBase));
      }
      break;
    }
    case "toggle-overlay": {
      const manual = interaction.overlayPosType === "manual";
      let [shape1, objects1] = ignoreFrameShape(shape, objects, manual);
      const destFrameId = interaction.destination;
      const destFrame = objects1[destFrameId];
      const relativeToId = manual
        ? (shape1.type === "frame" ? shape1.frameId : shape1.id)
        : interaction.positionRelativeTo;
      const relativeToShape = objects1[relativeToId] || baseFrame;
      const overlaysIds = new Set(overlays.map((o: any) => o.id));
      const relativeToBaseFrame = findRelativeToBaseFrame(relativeToShape, objects1, overlaysIds, baseFrame);
      const fixedBase = cfh.fixed(objects1, baseFrame.id);
      const [position, snapTo] = ctsi.calcOverlayPosition(
        interaction, shape1, objects1, relativeToShape, relativeToBaseFrame, destFrame, frameOffset
      );
      const closeClickOutside = interaction.closeClickOutside;
      const backgroundOverlay = interaction.backgroundOverlay;
      if (destFrameId) {
        emit(dv.toggleOverlay(destFrameId, position, snapTo, closeClickOutside, backgroundOverlay, interaction.animation, fixedBase));
      }
      break;
    }
    case "close-overlay": {
      const destFrameId = interaction.destination ||
        (shape.type === "frame" && overlays.some((o: any) => o.id === shape.id) ? shape.id : shape.frameId);
      emit(dv.closeOverlay(destFrameId, interaction.animation));
      break;
    }
    case "prev-screen":
      emit(rt.navBackLocal());
      break;
    case "open-url":
      if (interaction.url) dom.openNewWindow(interaction.url);
      break;
  }
}

function deactivateInteraction(interaction: any, shape: any, baseFrame: any, frameOffset: any, objects: any, overlays: any[]) {
  switch (interaction.actionType) {
    case "open-overlay": {
      const frameId = interaction.destination || (shape.type === "frame" ? shape.id : shape.frameId);
      emit(dv.closeOverlay(frameId));
      break;
    }
    case "toggle-overlay": {
      const manual = interaction.overlayPosType === "manual";
      let [shape1, objects1] = ignoreFrameShape(shape, objects, manual);
      const destFrameId = interaction.destination;
      const destFrame = objects1[destFrameId];
      const relativeToId = manual
        ? (shape1.type === "frame" ? shape1.frameId : shape1.id)
        : interaction.positionRelativeTo;
      const relativeToShape = objects1[relativeToId] || baseFrame;
      const overlaysIds = new Set(overlays.map((o: any) => o.id));
      const relativeToBaseFrame = findRelativeToBaseFrame(relativeToShape, objects1, overlaysIds, baseFrame);
      const fixedBase = cfh.fixed(objects1, baseFrame.id);
      const [position, snapTo] = ctsi.calcOverlayPosition(
        interaction, shape1, objects1, relativeToShape, relativeToBaseFrame, destFrame, frameOffset
      );
      const closeClickOutside = interaction.closeClickOutside;
      const backgroundOverlay = interaction.backgroundOverlay;
      if (destFrameId) {
        emit(dv.toggleOverlay(destFrameId, position, snapTo, closeClickOutside, backgroundOverlay, interaction.animation, fixedBase));
      }
      break;
    }
    case "close-overlay": {
      const manual = interaction.overlayPosType === "manual";
      let [shape1, objects1] = ignoreFrameShape(shape, objects, manual);
      const destFrameId = interaction.destination;
      const destFrame = objects1[destFrameId];
      const relativeToId = manual
        ? (shape1.type === "frame" ? shape1.frameId : shape1.id)
        : interaction.positionRelativeTo;
      const relativeToShape = objects1[relativeToId] || baseFrame;
      const closeClickOutside = interaction.closeClickOutside;
      const backgroundOverlay = interaction.backgroundOverlay;
      const overlaysIds = new Set(overlays.map((o: any) => o.id));
      const relativeToBaseFrame = findRelativeToBaseFrame(relativeToShape, objects1, overlaysIds, baseFrame);
      const fixedBase = cfh.fixed(objects1, baseFrame.id);
      const [position, snapTo] = ctsi.calcOverlayPosition(
        interaction, shape1, objects1, relativeToShape, relativeToBaseFrame, destFrame, frameOffset
      );
      if (destFrameId) {
        emit(dv.openOverlay(destFrameId, position, snapTo, closeClickOutside, backgroundOverlay, interaction.animation, fixedBase));
      }
      break;
    }
  }
}

function onPointerDown(event: any, shape: any, baseFrame: any, frameOffset: any, objects: any, overlays: any[]) {
  const interactions = shape.interactions?.filter((i: any) =>
    i.eventType === "click" || i.eventType === "mouse-press"
  );
  if (interactions?.length) {
    dom.stopPropagation(event);
    interactions.forEach((interaction: any) =>
      activateInteraction(interaction, shape, baseFrame, frameOffset, objects, overlays)
    );
  }
}

function onPointerUp(event: any, shape: any, baseFrame: any, frameOffset: any, objects: any, overlays: any[]) {
  const interactions = shape.interactions?.filter((i: any) => i.eventType === "mouse-press");
  if (interactions?.length) {
    dom.stopPropagation(event);
    interactions.forEach((interaction: any) =>
      deactivateInteraction(interaction, shape, baseFrame, frameOffset, objects, overlays)
    );
  }
}

function onPointerEnter(event: any, shape: any, baseFrame: any, frameOffset: any, objects: any, overlays: any[]) {
  const interactions = shape.interactions?.filter((i: any) =>
    i.eventType === "mouse-enter" || i.eventType === "mouse-over"
  );
  if (interactions?.length) {
    dom.stopPropagation(event);
    interactions.forEach((interaction: any) =>
      activateInteraction(interaction, shape, baseFrame, frameOffset, objects, overlays)
    );
  }
}

function onPointerLeave(event: any, shape: any, baseFrame: any, frameOffset: any, objects: any, overlays: any[]) {
  const interactions = shape.interactions?.filter((i: any) => i.eventType === "mouse-leave");
  const interactionsInv = shape.interactions?.filter((i: any) => i.eventType === "mouse-over");
  if (interactions?.length || interactionsInv?.length) {
    dom.stopPropagation(event);
    interactions.forEach((interaction: any) =>
      activateInteraction(interaction, shape, baseFrame, frameOffset, objects, overlays)
    );
    interactionsInv.forEach((interaction: any) =>
      deactivateInteraction(interaction, shape, baseFrame, frameOffset, objects, overlays)
    );
  }
}

function onLoad(shape: any, baseFrame: any, frameOffset: any, objects: any, overlays: any[]) {
  const interactions = shape.interactions?.filter((i: any) => i.eventType === "after-delay");
  const sems: any[] = [];
  for (const interaction of interactions) {
    const sem = ts.schedule(interaction.delay, () =>
      activateInteraction(interaction, shape, baseFrame, frameOffset, objects, overlays)
    );
    sems.push(sem);
  }
  return sems;
}

interface InteractionProps {
  shape: any;
  interactions: any[];
  showInteractions: boolean;
}

export function Interaction(props: InteractionProps) {
  const { shape, interactions, showInteractions } = props;
  const { x, y, width, height } = shape.selrect;

  if (!interactions?.length) return null;

  return (
    <rect
      x={x - 1}
      y={y - 1}
      width={width + 2}
      height={height + 2}
      fill="var(--color-accent-tertiary)"
      stroke="var(--color-accent-tertiary)"
      strokeWidth={showInteractions ? 1 : 0}
      fillOpacity={showInteractions ? 0.2 : 0}
      transform={gsh.transformStr(shape)}
    />
  );
}

interface GenericWrapperProps {
  shape: any;
  childs: any[];
  frame: any;
  objects: any;
  allObjects?: any;
  component: React.ComponentType<any>;
}

export function GenericWrapper(props: GenericWrapperProps) {
  const { shape, childs, frame, objects, allObjects, component: Component } = props;

  const baseFrame = React.useContext(baseFrameCtx);
  const frameOffset = React.useContext(frameOffsetCtx);
  const showInteractions = useDeref(refViewerShowInteractions);
  const overlays = useDeref(refs.viewerOverlays);
  const interactions = shape.interactions;
  const svgElement = shape.type === "svg-raw" && shape.content?.tag !== "svg";

  const onPointerDown = useCallback((e: any) =>
    onPointerDown(e, shape, baseFrame, frameOffset, allObjects || objects, overlays)
  , [shape, baseFrame, frameOffset, allObjects, objects, overlays]);

  const onPointerUp = useCallback((e: any) =>
    onPointerUp(e, shape, baseFrame, frameOffset, allObjects || objects, overlays)
  , [shape, baseFrame, frameOffset, allObjects, objects, overlays]);

  const onPointerEnter = useCallback((e: any) =>
    onPointerEnter(e, shape, baseFrame, frameOffset, allObjects || objects, overlays)
  , [shape, baseFrame, frameOffset, allObjects, objects, overlays]);

  const onPointerLeave = useCallback((e: any) =>
    onPointerLeave(e, shape, baseFrame, frameOffset, allObjects || objects, overlays)
  , [shape, baseFrame, frameOffset, allObjects, objects, overlays]);

  React.useEffect(() => {
    const sems = onLoad(shape, baseFrame, frameOffset, objects, overlays);
    return () => sems.forEach((sem: any) => ts.dispose(sem));
  }, []);

  if (svgElement) {
    return (
      <Component
        shape={shape}
        frame={frame}
        childs={childs}
        objects={objects}
      />
    );
  }

  return (
    <shapeContainer
      shape={shape}
      cursor={ctsi.actionable(interactions) ? "pointer" : undefined}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      <Component
        shape={shape}
        frame={frame}
        childs={childs}
        isChildSelected={true}
        objects={objects}
      />
      <Interaction
        shape={shape}
        interactions={interactions}
        showInteractions={showInteractions}
      />
    </shapeContainer>
  );
}

export function frameWrapper(shapeContainer: any) {
  return GenericWrapper;
}

export function groupWrapper(shapeContainer: any) {
  return GenericWrapper;
}

export function boolWrapper(shapeContainer: any) {
  return GenericWrapper;
}

export function svgRawWrapper(shapeContainer: any) {
  return GenericWrapper;
}

export function rectWrapper() {
  return GenericWrapper;
}

export function imageWrapper() {
  return GenericWrapper;
}

export function pathWrapper() {
  return GenericWrapper;
}

export function textWrapper() {
  return GenericWrapper;
}

export function circleWrapper() {
  return GenericWrapper;
}

export function shapeContainerFactory(objects: any, allObjects: any) {
  return function ShapeContainer(props: any) {
    const { shape, frame } = props;

    if (!shape || shape.hidden) return null;

    const translatedShape = frame ? gsh.translateToFrame(shape, frame) : shape;
    const opts = { shape: translatedShape, objects, allObjects };

    switch (shape.type) {
      case "frame":
        return <FrameContainer {...opts} />;
      case "text":
        return <TextWrapper {...opts} />;
      case "rect":
        return <RectWrapper {...opts} />;
      case "path":
        return <PathWrapper {...opts} />;
      case "image":
        return <ImageWrapper {...opts} />;
      case "circle":
        return <CircleWrapper {...opts} />;
      case "group":
        return <GroupContainer shape={shape} frame={frame} objects={objects} />;
      case "bool":
        return <BoolContainer shape={shape} frame={frame} objects={objects} />;
      case "svg-raw":
        return <SvgRawContainer shape={shape} frame={frame} objects={objects} />;
      default:
        return null;
    }
  };
}

export function frameContainerFactory(objects: any, allObjects: any) {
  const shapeContainer = shapeContainerFactory(objects, allObjects);

  return function FrameContainer(props: any) {
    const { shape, objects: objs, allObjects: allObjs, ...rest } = props;
    const childs = shape.shapes?.map((id: any) => objects[id]).filter(Boolean) || [];
    return (
      <FrameWrapper
        {...rest}
        shape={shape}
        childs={childs}
        frame={shape}
        objects={objs}
        allObjects={allObjs}
      />
    );
  };
}

export function groupContainerFactory(objects: any, allObjects: any) {
  const shapeContainer = shapeContainerFactory(objects, allObjects);

  return function GroupContainer(props: any) {
    const { shape } = props;
    const childs = shape.shapes?.map((id: any) => objects[id]).filter(Boolean) || [];
    if (!childs.length) return null;
    return (
      <GroupWrapper
        {...props}
        childs={childs}
        objects={objects}
        allObjects={allObjects}
      />
    );
  };
}

export function boolContainerFactory(objects: any, allObjects: any) {
  return function BoolContainer(props: any) {
    const { shape } = props;
    const childs = cfh.getChildrenIds(objects, shape.id)
      .map((id: any) => objects[id])
      .filter(Boolean)
      .reduce((acc: any, curr: any) => ({ ...acc, [curr.id]: curr }), {});
    return (
      <BoolWrapper
        {...props}
        childs={childs}
        objects={objects}
      />
    );
  };
}

export function svgRawContainerFactory(objects: any, allObjects: any) {
  return function SvgRawContainer(props: any) {
    const { shape } = props;
    const childs = shape.shapes?.map((id: any) => objects[id]).filter(Boolean) || [];
    return (
      <SvgRawWrapper
        {...props}
        childs={childs}
        objects={objects}
      />
    );
  };
}