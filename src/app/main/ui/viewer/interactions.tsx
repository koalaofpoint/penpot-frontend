// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useCallback, useMemo, useState } from "react";
import * as d from "@app/common/data";
import * as dm from "@app/common/data.macros";
import * as cfh from "@app/common/files.helpers";
import * as gpt from "@app/common/geom/point";
import * as gsh from "@app/common/geom/shapes";
import * as ctm from "@app/common/types/modifiers";
import * as ctp from "@app/common/types/page";
import * as uuid from "@app/common/uuid";
import * as dcm from "@app/main/data/comments";
import * as dv from "@app/main/data/viewer";
import { emit } from "@app/main/store";
import * as shapes from "@app/main/ui/viewer.shapes";
import * as dom from "@app/util/dom";
import { tr } from "@app/util/i18n";
import { kbd } from "@app/util/keyboard";

interface ViewportSvgProps {
  page: any;
  frame: any;
  base: any;
  offset: any;
  size: any;
  fixed?: boolean;
  delta?: any;
}

export function ViewportSvg(props: ViewportSvgProps) {
  const { page, frame, base, offset, size, fixed = false, delta = gpt.point(0, 0) } = props;

  const vbox = size?.vbox;

  const processedFrame = fixed ? { ...frame, fixedScroll: true } : frame;
  let objects = page?.objects;

  if (objects && fixed) {
    objects = { ...objects, [frame.id]: { ...objects[frame.id], fixedScroll: true } };
  }

  const fixedIds = getFixedIds(objects);
  const notFixedIds = Object.keys(objects || {}).filter(
    (id) => !fixedIds.includes(id) && id !== uuid.zero
  );

  const calculateObjects = useCallback((ids: string[]) => {
    return ids
      .map((id) => objects[id])
      .concat([frame])
      .reduce((acc, obj) => ({ ...acc, [obj.id]: obj }), {});
  }, [objects, frame]);

  const objectsFixed = useMemo(() => calculateObjects(fixedIds), [calculateObjects, fixedIds]);
  const objectsNotFixed = useMemo(() => calculateObjects(notFixedIds), [calculateObjects, notFixedIds]);

  const allObjects = useMemo(() => ({ ...objectsFixed, ...objectsNotFixed }), [objectsFixed, objectsNotFixed]);

  const wrapperFixed = useMemo(() => {
    return shapes.frameContainerFactory({ ...objectsFixed, [Symbol.for("fixed")]: true }, allObjects);
  }, [objectsFixed, allObjects]);

  const wrapperNotFixed = useMemo(() => {
    return shapes.frameContainerFactory(objectsNotFixed, allObjects);
  }, [objectsNotFixed, allObjects]);

  // Retrieve frames again with correct modifier
  const actualFrame = allObjects[frame.id] || frame;
  const actualBase = allObjects[base?.id] || base;

  const nonDelayInteractions = (actualFrame.interactions || []).filter(
    (i: any) => i.eventType !== "after-delay"
  );

  const fixedFrame = {
    ...actualFrame,
    fills: undefined,
    interactions: nonDelayInteractions
  };

  const svgProps = {
    viewBox: vbox,
    width: size?.width,
    height: size?.height,
    version: "1.1",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  };

  return (
    <shapes.BaseFrameCtx.Provider value={actualBase}>
      <shapes.FrameOffsetCtx.Provider value={offset}>
        {fixed ? (
          <svg className="fixed" {...svgProps}>
            <wrapperNotFixed shape={actualFrame} viewBox={vbox} />
          </svg>
        ) : (
          <>
            <svg
              className="fixed"
              {...svgProps}
              style={{ width: size?.width, height: size?.height, zIndex: 1 }}
            >
              <wrapperFixed shape={fixedFrame} viewBox={vbox} />
            </svg>
            <svg className="not-fixed" {...svgProps}>
              <wrapperNotFixed shape={actualFrame} viewBox={vbox} />
            </svg>
          </>
        )}
      </shapes.FrameOffsetCtx.Provider>
    </shapes.BaseFrameCtx.Provider>
  );
}

function getFixedIds(objects: any): string[] {
  if (!objects) return [];

  const fixedObjs = Object.values(objects).filter((obj: any) => cfh.fixedScroll(obj));
  const fixedChildrenIds = fixedObjs.flatMap((obj: any) => cfh.getChildrenIds(objects, (obj as any).id));

  const parentChildrenIds = fixedObjs.flatMap((obj: any) =>
    [(obj as any).id].concat(cfh.getParentIds(objects, (obj as any).id))
  ).filter((id) => id !== uuid.zero);

  return [...fixedChildrenIds, ...parentChildrenIds];
}

interface ViewportProps {
  interactionsMode: string;
  frameOffset: any;
  size: any;
  delta?: any;
  page: any;
  frame: any;
  baseFrame: any;
  fixed?: boolean;
}

export function Viewport(props: ViewportProps) {
  const {
    interactionsMode,
    frameOffset,
    size,
    delta,
    page,
    frame,
    baseFrame,
    fixed = false
  } = props;

  React.useEffect(() => {
    let key1: any, key2: any, key3: any;

    const onClick = () => {
      if (interactionsMode === "show-on-click") {
        emit(dv.flashInteractions());
      }
    };

    const onMouseWheel = (event: WheelEvent) => {
      if (kbd.mod(event)) {
        dom.preventDefault(event);
        const nativeEvent = event.nativeEvent as WheelEvent;
        const deltaSum = nativeEvent.deltaY + nativeEvent.deltaX;
        if (deltaSum > 0) {
          emit(dv.decreaseZoom());
        } else {
          emit(dv.increaseZoom());
        }
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (kbd.esc(event)) {
        emit(dcm.closeThread());
      }
    };

    // bind with passive=false to allow the event to be cancelled
    // https://stackoverflow.com/a/57582286/3219895
    key1 = (window as any).goog.events.listen(window, "wheel", onMouseWheel, { passive: false });
    key2 = (window as any).goog.events.listen(window, "keydown", onKeyDown);
    key3 = (window as any).goog.events.listen(window, "click", onClick);

    return () => {
      (window as any).goog.events.unlistenByKey(key1);
      (window as any).goog.events.unlistenByKey(key2);
      (window as any).goog.events.unlistenByKey(key3);
    };
  }, [interactionsMode]);

  return (
    <ViewportSvg
      page={page}
      frame={frame}
      base={baseFrame}
      offset={frameOffset}
      size={size}
      fixed={fixed}
      delta={delta}
    />
  );
}

interface FlowsMenuProps {
  page: any;
  index: number;
}

export function FlowsMenu(props: FlowsMenuProps) {
  const { page, index } = props;

  const flows = page?.flows;
  const frames = page?.frames;
  const frame = frames?.[index];
  const frameId = frame?.id;

  const [currentFlow, setCurrentFlow] = useState(() => ctp.getFrameFlow(flows, frameId));
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = useCallback(() => setShowDropdown((prev) => !prev), []);
  const hideDropdown = useCallback(() => setShowDropdown(false), []);

  const selectFlow = useCallback((event: React.MouseEvent) => {
    const target = dom.getCurrentTarget(event) as HTMLElement;
    const flow = d.readString(dom.getData(target, "value"));
    setCurrentFlow(flow);
    emit(dv.goToFrame(flow.startingFrame));
  }, []);

  if (!flows) return null;

  return (
    <div onClick={toggleDropdown} className="view-options">
      <span className="icon">{deprecatedIcon.play}</span>
      <span className="dropdown-title">{currentFlow?.name}</span>
      <span className="icon-dropdown">{deprecatedIcon.arrow}</span>
      <Dropdown show={showDropdown} onClose={hideDropdown}>
        <ul className="dropdown">
          {Object.entries(flows).map(([flowId, flow]: [string, any]) => (
            <li
              key={`flow-${flowId}`}
              className={`dropdown-element ${flowId === currentFlow?.id ? "selected" : ""}`}
              data-value={String(flow)}
              onClick={selectFlow}
            >
              <span className="label">{flow.name}</span>
              {flowId === currentFlow?.id && (
                <span className="icon">{deprecatedIcon.tick}</span>
              )}
            </li>
          ))}
        </ul>
      </Dropdown>
    </div>
  );
}

interface InteractionsMenuProps {
  interactionsMode: string;
}

export function InteractionsMenu(props: InteractionsMenuProps) {
  const { interactionsMode } = props;

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = useCallback(() => setShowDropdown((prev) => !prev), []);
  const hideDropdown = useCallback(() => setShowDropdown(false), []);

  const selectMode = useCallback((event: React.MouseEvent) => {
    const target = dom.getCurrentTarget(event) as HTMLElement;
    const mode = dom.getData(target, "mode");
    dom.stopPropagation(event);
    emit(dv.setInteractionsMode(mode));
  }, []);

  return (
    <div onClick={toggleDropdown} className="view-options">
      <span className="dropdown-title">{tr("viewer.header.interactions")}</span>
      <span className="icon-dropdown">{deprecatedIcon.arrow}</span>
      <Dropdown show={showDropdown} onClose={hideDropdown}>
        <ul className="dropdown">
          <li
            className={`dropdown-element ${interactionsMode === "hide" ? "selected" : ""}`}
            onClick={selectMode}
            data-mode="hide"
          >
            <span className="label">{tr("viewer.header.dont-show-interactions")}</span>
            {interactionsMode === "hide" && (
              <span className="icon">{deprecatedIcon.tick}</span>
            )}
          </li>

          <li
            className={`dropdown-element ${interactionsMode === "show" ? "selected" : ""}`}
            onClick={selectMode}
            data-mode="show"
          >
            <span className="label">{tr("viewer.header.show-interactions")}</span>
            {interactionsMode === "show" && (
              <span className="icon">{deprecatedIcon.tick}</span>
            )}
          </li>

          <li
            className={`dropdown-element ${interactionsMode === "show-on-click" ? "selected" : ""}`}
            onClick={selectMode}
            data-mode="show-on-click"
          >
            <span className="label">{tr("viewer.header.show-interactions-on-click")}</span>
            {interactionsMode === "show-on-click" && (
              <span className="icon">{deprecatedIcon.tick}</span>
            )}
          </li>
        </ul>
      </Dropdown>
    </div>
  );
}

import { Dropdown } from "@app/main/ui/components/dropdown";
import * as deprecatedIcon from "@app/main/ui/icons";