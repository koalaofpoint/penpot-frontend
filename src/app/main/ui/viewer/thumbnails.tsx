// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useCallback, useMemo, useRef, useState } from "react";
import * as d from "@app/common/data";
import * as dm from "@app/common/data.macros";
import * as cfh from "@app/common/files.helpers";
import * as gsh from "@app/common/geom/shapes";
import * as dv from "@app/main/data/viewer";
import { emit } from "@app/main/store";
import { frameSvg } from "@app/main/render";
import * as deprecatedIcon from "@app/main/ui/icons";
import * as dom from "@app/util/dom";
import { tr, c } from "@app/util/i18n";
import * as obj from "@app/util/object";
import * as ts from "@app/util/timers";

interface ThumbnailsContentProps {
  children?: React.ReactNode;
  expanded?: boolean;
  total?: number;
}

export function ThumbnailsContent(props: ThumbnailsContentProps) {
  const { children, expanded = false, total = 0 } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const width = useRef(window.document.documentElement.clientWidth);
  const elementWidth = useRef(152);

  const [offset, setOffset] = useState(0);

  const onLeftArrowClick = useCallback(() => {
    setOffset((v) => (v > 0 ? v - 1 : v));
  }, []);

  const onRightArrowClick = useCallback(() => {
    const visible = width.current / elementWidth.current;
    const maxVal = total - visible;
    setOffset((v) => (v < maxVal ? v + 1 : v));
  }, [total]);

  const onScroll = useCallback((event: React.WheelEvent) => {
    const nativeEvent = event.nativeEvent as WheelEvent;
    if (nativeEvent.deltaY > 0) {
      onRightArrowClick();
    } else {
      onLeftArrowClick();
    }
  }, [onLeftArrowClick, onRightArrowClick]);

  const onMount = useCallback(() => {
    const domEl = containerRef.current;
    if (domEl) {
      width.current = obj.get(domEl, "clientWidth");
    }
  }, []);

  React.useEffect(() => {
    onMount();
  }, [onMount]);

  if (expanded) {
    return (
      <div className="thumbnails-content">
        <div className="thumbnails-list-expanded">{children}</div>
      </div>
    );
  }

  return (
    <div className="thumbnails-content">
      <button className="left-scroll-handler" onClick={onLeftArrowClick}>
        {deprecatedIcon.arrow}
      </button>
      <button className="right-scroll-handler" onClick={onRightArrowClick}>
        {deprecatedIcon.arrow}
      </button>

      <div className="thumbnails-list" ref={containerRef} onWheel={onScroll}>
        <div
          className="thumbnails-list-inside"
          style={{ right: `${offset * 152}px` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

interface ThumbnailsSummaryProps {
  onToggleExpand?: () => void;
  onClose?: () => void;
  total?: number;
}

export function ThumbnailsSummary(props: ThumbnailsSummaryProps) {
  const { onToggleExpand, onClose, total = 0 } = props;

  return (
    <div className="thumbnails-summary">
      <span className="counter">{tr("labels.num-of-frames", c(total))}</span>
      <span className="actions">
        <button className="expand-btn" onClick={onToggleExpand}>
          {deprecatedIcon.arrow}
        </button>
        <button className="close-btn" onClick={onClose}>
          {deprecatedIcon.close}
        </button>
      </span>
    </div>
  );
}

interface ThumbnailItemProps {
  selected?: boolean;
  frame: any;
  onClick?: (event: React.MouseEvent, index: number) => void;
  index: number;
  objects: any;
  pageId: string;
  thumbnailData: any;
}

export function ThumbnailItem(props: ThumbnailItemProps) {
  const {
    selected = false,
    frame,
    onClick,
    index,
    objects,
    pageId,
    thumbnailData
  } = props;

  const childrenIds = cfh.getChildrenIds(objects, frame.id);
  const childObjects = childrenIds.map((id: string) => objects[id]).filter(Boolean);
  const childrenBounds = gsh.shapesRect([frame, ...childObjects]);

  const thumbnailKey = dm.str(pageId, "-", frame.id);
  const thumbnail = thumbnailData?.get(thumbnailKey);

  return (
    <button
      className={`thumbnail-item ${selected ? "selected" : ""}`}
      onClick={(e) => onClick?.(e, index)}
    >
      <div className={`thumbnail-preview ${selected ? "selected" : ""}`}>
        <frameSvg
          frame={{ ...frame, thumbnail, childrenBounds }}
          objects={objects}
          useThumbnails={true}
        />
      </div>
      <div className="thumbnail-info" title={frame.name}>
        {frame.name}
      </div>
    </button>
  );
}

interface ThumbnailsPanelProps {
  frames: any[];
  page: any;
  index: number;
  show?: boolean;
  thumbnailData: any;
}

export function ThumbnailsPanel(props: ThumbnailsPanelProps) {
  const { frames, page, index, show = true, thumbnailData } = props;

  const [expanded, setExpanded] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  const objects = page?.objects;

  const onClose = useCallback(() => {
    emit(dv.toggleThumbnailsPanel());
  }, []);

  const selected = useRef(false);

  const onItemClick = useCallback((_event: React.MouseEvent, itemIndex: number) => {
    selected.current = false;
    emit(dv.goToFrameByIndex(itemIndex));
    if (expanded) {
      onClose();
    }
  }, [expanded, onClose]);

  const toggleExpand = useCallback(() => {
    setExpanded((prev) => !prev);
  }, []);

  return (
    <section
      className={`viewer-thumbnails ${expanded ? "expanded" : ""}`}
      style={{ display: show ? undefined : "none" }}
      ref={containerRef}
    >
      <ThumbnailsSummary
        onToggleExpand={toggleExpand}
        onClose={onClose}
        total={frames?.length || 0}
      />
      <ThumbnailsContent expanded={expanded} total={frames?.length || 0}>
        {frames?.map((frame, i) => (
          <ThumbnailItem
            key={dm.str(frame.id, "-", i)}
            index={i}
            frame={frame}
            pageId={page?.id}
            objects={objects}
            onClick={onItemClick}
            selected={i === index}
            thumbnailData={thumbnailData}
          />
        ))}
      </ThumbnailsContent>
    </section>
  );
}