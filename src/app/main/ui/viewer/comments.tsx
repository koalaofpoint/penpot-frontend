// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from "react";
import { useCallback, useMemo, useRef, useState } from "react";
import { useDeref, useRef as useMFRef } from "@shared/rum";
import { dm, str } from "@app/common/data/macros";
import * as gmt from "@app/common/geom/matrix";
import * as gpt from "@app/common/geom/point";
import * as grc from "@app/common/geom/rect";
import * as gsh from "@app/common/geom/shapes";
import * as dcm from "@app/main/data/comments";
import * as ev from "@app/main/data/event";
import * as refs from "@app/main/refs";
import { emit } from "@app/main/store";
import * as cmt from "@app/main/ui/comments";
import { Dropdown } from "@app/main/ui/components/dropdown";
import * as deprecatedIcon from "@app/main/ui/icons";
import * as wc from "@app/main/ui/workspace/comments";
import * as utils from "@app/main/ui/workspace/viewport/utils";
import * as dom from "@app/util/dom";
import { tr } from "@app/util/i18n";

interface CommentsMenuProps {}

export function CommentsMenu(props: CommentsMenuProps) {
  const state = useDeref(refs.commentsLocal);
  const cmode = state.mode;
  const cshow = state.show;
  const showSidebar = state.showSidebar ?? false;

  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = useCallback(() => setShowDropdown(prev => !prev), []);
  const hideDropdown = useCallback(() => setShowDropdown(false), []);

  const updateMode = useCallback((event: React.MouseEvent) => {
    const mode = dom.getData(dom.getCurrentTarget(event) as HTMLElement, "value") as "all" | "yours";
    emit(dcm.updateFilters({ mode }));
  }, []);

  const updateShow = useCallback((event: React.MouseEvent) => {
    const mode = dom.getData(dom.getCurrentTarget(event) as HTMLElement, "value") as "all" | "pending";
    const actualMode = mode === "pending" ? "all" : "pending";
    emit(dcm.updateFilters({ show: actualMode }));
  }, []);

  const updateOptions = useCallback((event: React.MouseEvent) => {
    const mode = dom.getData(dom.getCurrentTarget(event) as HTMLElement, "value");
    emit(dcm.updateOptions({ showSidebar: !(mode === "true") }));
  }, []);

  return (
    <div
      className="view-options"
      data-testid="viewer-comments-dropdown"
      onClick={toggleDropdown}
    >
      <span className="dropdown-title">{tr("labels.comments")}</span>
      <span className="icon-dropdown">{deprecatedIcon.arrow}</span>

      <Dropdown show={showDropdown} onClose={hideDropdown}>
        <ul className="dropdown">
          <li
            className={`dropdown-element ${(cmode === "all" || cmode === undefined) ? "selected" : ""}`}
            data-value="all"
            onClick={updateMode}
          >
            <span className="label">{tr("labels.show-all-comments")}</span>
            {(cmode === "all" || cmode === undefined) && (
              <span className="icon">{deprecatedIcon.tick}</span>
            )}
          </li>

          <li
            className={`dropdown-element ${cmode === "yours" ? "selected" : ""}`}
            data-value="yours"
            onClick={updateMode}
          >
            <span className="label">{tr("labels.show-your-comments")}</span>
            {cmode === "yours" && (
              <span className="icon">{deprecatedIcon.tick}</span>
            )}
          </li>

          <li className="separator" />

          <li
            className={`dropdown-element ${cshow === "pending" ? "selected" : ""}`}
            data-value={String(cshow)}
            onClick={updateShow}
          >
            <span className="label">{tr("labels.hide-resolved-comments")}</span>
            {cshow === "pending" && (
              <span className="icon">{deprecatedIcon.tick}</span>
            )}
          </li>

          <li className="separator" />

          <li
            className={`dropdown-element ${showSidebar ? "selected" : ""}`}
            data-value={dm/str(showSidebar)}
            onClick={updateOptions}
          >
            <span className="label">{tr("labels.show-comments-list")}</span>
            {showSidebar && (
              <span className="icon">{deprecatedIcon.tick}</span>
            )}
          </li>
        </ul>
      </Dropdown>
    </div>
  );
}

function updateThreadPosition(
  positions: any,
  thread: any
): any {
  const data = positions[thread.id];
  if (data) {
    return {
      ...thread,
      position: data.position,
      frameId: data.frameId
    };
  }
  return thread;
}

interface CommentsLayerProps {
  zoom: number;
  file: any;
  frame: any;
  page: any;
}

export function CommentsLayer(props: CommentsLayerProps) {
  const { zoom, file, frame, page } = props;

  const profile = useDeref(refs.profile);
  const local = useDeref(refs.commentsLocal);
  const cursor = utils.getCursor("comments");

  const openThreadId = local.open;
  const pageId = page.id;
  const fileId = file.id;
  const frameId = frame.id;
  const vsize = useDeref(refs.viewerLocal).viewportSize;

  const tposRef = useMemo(() => {
    return (l: any) => l.in(["pages", pageId, "comment-thread-positions"]).derived(refs.viewerData);
  }, [pageId]);

  const positions = useDeref(tposRef);
  const threadsMap = useDeref(refs.commentThreads);
  const frameCorner = useMemo(() => {
    return gpt.point(grc.pointsRect(frame.points));
  }, [frame]);

  const modifier1 = useMemo(() => {
    return gmt.translate(gpt.negate(frameCorner));
  }, [frameCorner]);

  const modifier2 = useMemo(() => {
    return gmt.translateMatrix(gpt.point(frameCorner));
  }, [frameCorner]);

  const threads = useMemo(() => {
    return Object.values(threadsMap || {})
      .map((thread: any) => updateThreadPosition(positions, thread))
      .filter((thread: any) => thread.frameId === frame.id)
      .filter((thread: any) => dcm.applyFilters(local, profile)(thread))
      .filter((thread: any) => gsh.hasPoint(frame, thread.position));
  }, [threadsMap, positions, frame, local, profile]);

  const onBubbleClick = useCallback((thread: any) => {
    if (thread.id === openThreadId) {
      emit(dcm.closeThread());
    } else {
      emit(dcm.openThread(thread, { [ev.ORIGIN]: "viewer" }));
    }
  }, [openThreadId]);

  const onClick = useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event);
    if (openThreadId) {
      emit(dcm.closeThread());
    } else {
      const nativeEvent = dom.eventNativeEvent(event);
      const position = dom.getOffsetPosition(nativeEvent);
      const transformedPosition = gpt.transform(
        { x: position.x / zoom, y: position.y / zoom },
        modifier2
      );
      const params = {
        position: transformedPosition,
        pageId: page.id,
        fileId: file.id
      };
      emit(dcm.createDraft(params));
    }
  }, [openThreadId, zoom, pageId, fileId, modifier2]);

  const onDraftCancel = useCallback(() => emit(dcm.closeThread()), []);
  const onDraftSubmit = useCallback((draft: any) => {
    const params = { ...draft, frameId };
    emit(dcm.createThreadOnViewer(params), dcm.closeThread());
  }, [frameId]);

  return (
    <div className="comments-section" onClick={onClick}>
      <div className={`${cursor} viewer-comments-container`}>
        <div className="threads">
          {threads.map((item: any) => (
            <cmt.CommentFloatingBubble
              key={item.seqn}
              thread={item}
              positionModifier={modifier1}
              zoom={zoom}
              onClick={onBubbleClick}
              isOpen={item.id === local.open}
              origin="viewer"
            />
          ))}

          {threadsMap[openThreadId] && (
            <cmt.CommentFloatingThread
              thread={threadsMap[openThreadId]}
              positionModifier={modifier1}
              viewport={{ offsetX: 0, offsetY: 0, width: vsize.width, height: vsize.height }}
              zoom={zoom}
            />
          )}

          {local.draft && (
            <cmt.CommentFloatingThreadDraft
              draft={local.draft}
              positionModifier={modifier1}
              onCancel={onDraftCancel}
              onSubmit={onDraftSubmit}
              viewport={null}
              zoom={zoom}
            />
          )}
        </div>
      </div>
    </div>
  );
}

interface CommentsSidebarProps {
  profiles: any;
  frame: any;
  page: any;
}

export function CommentsSidebar(props: CommentsSidebarProps) {
  const { profiles, frame, page } = props;

  const profile = useDeref(refs.profile);
  const local = useDeref(refs.commentsLocal);
  const threadsMap = useDeref(refs.commentThreads);
  const threads = Object.values(threadsMap || {})
    .filter((thread: any) => dcm.applyFilters(local, profile)(thread))
    .filter((thread: any) => gsh.hasPoint(frame, thread.position));

  return (
    <aside className="comments-sidebar">
      <div className="settings-bar-inside">
        <wc.CommentsSidebar
          fromViewer={true}
          profiles={profiles}
          threads={threads}
          pageId={page.id}
        />
      </div>
    </aside>
  );
}