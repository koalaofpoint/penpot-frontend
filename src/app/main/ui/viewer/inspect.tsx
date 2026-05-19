// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useCallback, useMemo, useRef, useState } from "react";
import * as d from "@app/common/data";
import * as dm from "@app/common/data.macros";
import * as constants from "@app/main/constants";
import * as dv from "@app/main/data/viewer";
import { emit } from "@app/main/store";
import { useResizeHook } from "@app/main/ui/hooks/resize";
import { LeftSidebar } from "@app/main/ui/inspect/left-sidebar";
import { RenderFrameSvg } from "@app/main/ui/inspect/render";
import { RightSidebar } from "@app/main/ui/inspect/right-sidebar";
import * as dom from "@app/util/dom";
import * as kbd from "@app/util/keyboard";

interface ViewportProps {
  local: any;
  file: any;
  page: any;
  frame: any;
  index: number;
  viewerPagination: React.ComponentType<any>;
  size: any;
  shareId: string;
}

export function Viewport(props: ViewportProps) {
  const { local, file, page, frame, index, viewerPagination, size, shareId } = props;

  const inspectSvgContainerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState<"info" | "code">("info");

  const canBeExpanded = currentSection === "code";

  const onMouseWheel = useCallback((event: React.WheelEvent) => {
    if (kbd.mod(event)) {
      dom.preventDefault(event);
      const nativeEvent = event.nativeEvent as WheelEvent;
      const delta = nativeEvent.deltaY + nativeEvent.deltaX;
      if (delta > 0) {
        emit(dv.decreaseZoom());
      } else {
        emit(dv.increaseZoom());
      }
    }
  }, []);

  const onMount = useCallback(() => {
    // bind with passive=false to allow the event to be cancelled
    // https://stackoverflow.com/a/57582286/3219895
    const key1 = (window as any).goog.events.listen(
      (window as any).goog.global,
      "wheel",
      onMouseWheel,
      { passive: false }
    );
    return () => {
      (window as any).goog.events.unlistenByKey(key1);
    };
  }, [onMouseWheel]);

  React.useEffect(() => {
    const cleanup = onMount();
    return cleanup;
  }, [onMount]);

  React.useEffect(() => {
    emit(dv.selectShape(frame.id));
  }, [frame.id]);

  const {
    onPointerDown,
    onLostPointerCapture,
    onPointerMove,
    setSize: setRightSize,
    size: rightSize
  } = useResizeHook(
    "code",
    constants.rightSidebarDefaultWidth,
    constants.rightSidebarDefaultWidth,
    constants.rightSidebarDefaultMaxWidth,
    "x",
    true,
    "right"
  );

  const handleChangeSection = useCallback((section: "info" | "code") => {
    setCurrentSection(section);
  }, []);

  const handleExpand = useCallback(() => {
    setRightSize(
      rightSize > constants.rightSidebarDefaultWidth
        ? constants.rightSidebarDefaultWidth
        : constants.rightSidebarDefaultMaxWidth
    );
  }, [rightSize, setRightSize]);

  const handleSelectFrame = useCallback((event: React.MouseEvent) => {
    const target = dom.getCurrentTarget(event) as HTMLElement;
    const frameId = d.readString(dom.getData(target, "value"));
    const origin = dom.getTarget(event) as HTMLElement;
    const overSection = dom.class(origin, "inspect-svg-container");
    const layout = dom.getElement("viewer-layout") as HTMLElement;
    const hasForce = dom.class(layout, "force-visible");

    dom.preventDefault(event);
    dom.stopPropagation(event);
    emit(dv.selectShape(frameId));
    if (overSection) {
      if (hasForce) {
        dom.removeClass(layout, "force-visible");
      } else {
        dom.addClass(layout, "force-visible");
      }
    }
  }, []);

  return (
    <>
      <LeftSidebar frame={frame} local={local} page={page} />
      <div
        id="inspect-svg-wrapper"
        className="inspect-svg-wrapper"
        data-value={String(frame.id)}
        onClick={handleSelectFrame}
      >
        <viewerPagination
          index={index}
          numFrames={page.frames?.length || 0}
          leftBar={true}
          rightBar={true}
        />
        <div
          id="inspect-svg-container"
          className="inspect-svg-container"
          ref={inspectSvgContainerRef}
        >
          <RenderFrameSvg frame={frame} page={page} local={local} size={size} />
        </div>
      </div>

      <div
        className={`sidebar-container ${canBeExpanded ? "expanded" : "not-expand"}`}
        style={{ "--right-sidebar-width": canBeExpanded ? `${rightSize}px` : undefined }}
      >
        {canBeExpanded && (
          <div
            className="resize-area"
            onPointerDown={onPointerDown}
            onLostPointerCapture={onLostPointerCapture}
            onPointerMove={onPointerMove}
          />
        )}
        <RightSidebar
          frame={frame}
          selected={local.selected}
          page={page}
          file={file}
          onChangeSection={handleChangeSection}
          onExpand={handleExpand}
          shareId={shareId}
        />
      </div>
    </>
  );
}