// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useCallback, useState } from "react";
import * as dv from "@app/main/data/viewer";
import * as scd from "@app/main/data/shortcuts";
import * as sc from "@app/main/data/viewer.shortcuts";
import { emit } from "@app/main/store";
import { Dropdown } from "@app/main/ui/components/dropdown";
import { progressWidget } from "@app/main/ui/exports.assets";
import * as fmt from "@app/main/ui/formats";
import * as deprecatedIcon from "@app/main/ui/icons";
import { CommentsMenu } from "@app/main/ui/viewer.comments";
import { FlowsMenu, InteractionsMenu } from "@app/main/ui/viewer.interactions";
import * as dom from "@app/util/dom";
import { tr } from "@app/util/i18n";

interface ZoomWidgetProps {
  zoom: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onZoomReset: () => void;
  onFullscreen: () => void;
  onZoomFit: () => void;
  onZoomFill: () => void;
}

export function ZoomWidget(props: ZoomWidgetProps) {
  const {
    zoom,
    onIncrease,
    onDecrease,
    onZoomReset,
    onFullscreen,
    onZoomFit,
    onZoomFill
  } = props;

  const [open, setOpen] = useState(false);

  const openDropdown = useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event);
    setOpen(true);
  }, []);

  const closeDropdown = useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event);
    setOpen(false);
  }, []);

  const handleIncrease = useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event);
    onIncrease();
  }, [onIncrease]);

  const handleDecrease = useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event);
    onDecrease();
  }, [onDecrease]);

  return (
    <div
      className={`zoom-widget ${open ? "selected" : ""}`}
      onClick={openDropdown}
      title={tr("workspace.header.zoom")}
    >
      <span className="label">{fmt.formatPercent(zoom)}</span>
      <Dropdown show={open} onClose={closeDropdown}>
        <ul className="dropdown">
          <li className="basic-zoom-bar">
            <span className="zoom-btns">
              <button className="zoom-btn" onClick={handleDecrease}>
                <span className="zoom-icon">{deprecatedIcon.removeIcon}</span>
              </button>
            </span>
            <p className="zoom-text">{fmt.formatPercent(zoom)}</p>
            <button className="zoom-btn" onClick={handleIncrease}>
              <span className="zoom-icon">{deprecatedIcon.addIcon}</span>
            </button>
          </li>
          <button className="reset-btn" onClick={onZoomReset}>
            {tr("workspace.header.reset-zoom")}
          </button>

          <li className="zoom-option" onClick={onZoomFit}>
            {tr("workspace.header.zoom-fit")}
            <span className="shortcuts">
              {scd.splitSc(sc.getTooltip("toggle-zoom-style")).map((scKey: string) => (
                <span key={`zoom-fit-${scKey}`} className="shortcut-key">{scKey}</span>
              ))}
            </span>
          </li>
          <li className="zoom-option" onClick={onZoomFill}>
            {tr("workspace.header.zoom-fill")}
            <span className="shortcuts">
              {scd.splitSc(sc.getTooltip("toggle-zoom-style")).map((scKey: string) => (
                <span key={`zoom-fill-${scKey}`} className="shortcut-key">{scKey}</span>
              ))}
            </span>
          </li>
          <li className="zoom-option" onClick={onFullscreen}>
            {tr("workspace.header.zoom-full-screen")}
            <span className="shortcuts">
              {scd.splitSc(sc.getTooltip("toggle-fullscreen")).map((scKey: string) => (
                <span key={`zoom-fullscreen-${scKey}`} className="shortcut-key">{scKey}</span>
              ))}
            </span>
          </li>
        </ul>
      </Dropdown>
    </div>
  );
}

interface HeaderOptionsProps {
  section: string;
  zoom: number;
  page: any;
  file: any;
  index: number;
  permissions: any;
  interactionsMode: string;
  share: any;
}

export function HeaderOptions(props: HeaderOptionsProps) {
  const {
    section,
    zoom,
    page,
    file,
    index,
    permissions,
    interactionsMode,
    share
  } = props;

  const toggleFullscreen = useCallback(() => emit(dv.toggleFullscreen()), []);

  const goToWorkspace = useCallback(() => {
    emit(dv.goToWorkspace(page.id));
  }, [page]);

  const openShareDialog = useCallback(() => {
    emit(dv.showShareDialog({ page, file }));
    emit(dv.disallowClickOutside());
  }, [page, file]);

  const handleIncrease = useCallback(() => emit(dv.increaseZoom()), []);
  const handleDecrease = useCallback(() => emit(dv.decreaseZoom()), []);
  const handleZoomReset = useCallback(() => emit(dv.resetZoom()), []);
  const handleZoomFill = useCallback(() => emit(dv.zoomToFill()), []);
  const handleZoomFit = useCallback(() => emit(dv.zoomToFit()), []);

  React.useEffect(() => {
    if (permissions?.inTeam && permissions?.isAdmin && share) {
      openShareDialog();
    }
  }, [permissions, share]);

  return (
    <div className="options-zone">
      {progressWidget}

      {section === "interactions" && (
        <>
          {index !== undefined && <FlowsMenu page={page} index={index} />}
          <InteractionsMenu interactionsMode={interactionsMode} />
        </>
      )}
      {section === "comments" && <CommentsMenu />}

      <ZoomWidget
        zoom={zoom}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onZoomReset={handleZoomReset}
        onZoomFill={handleZoomFill}
        onZoomFit={handleZoomFit}
        onFullscreen={toggleFullscreen}
      />

      {permissions?.inTeam && (
        <span onClick={goToWorkspace} className="edit-btn">
          {deprecatedIcon.curve}
        </span>
      )}

      <span
        title={tr("viewer.header.fullscreen")}
        className="fullscreen-btn"
        onClick={toggleFullscreen}
      >
        {deprecatedIcon.expand}
      </span>

      {permissions?.inTeam && (
        <button onClick={openShareDialog} className="share-btn">
          {tr("labels.share")}
        </button>
      )}

      {!permissions?.isLogged && (
        <span onClick={() => emit(dv.openLoginDialog())} className="go-log-btn">
          {tr("labels.log-or-sign")}
        </span>
      )}
    </div>
  );
}

interface HeaderSitemapProps {
  project: any;
  file: any;
  page: any;
  frame: any;
  toggleThumbnails: () => void;
}

function HeaderSitemap(props: HeaderSitemapProps) {
  const { project, file, page, frame, toggleThumbnails } = props;

  const projectName = project?.name;
  const fileName = file?.name;
  const pageName = page?.name;
  const pageId = page?.id;
  const frameName = frame?.name;

  const [showDropdown, setShowDropdown] = useState(false);

  const openDropdown = useCallback(() => setShowDropdown(true), []);
  const closeDropdown = useCallback(() => setShowDropdown(false), []);

  const navigateTo = useCallback((id: string) => {
    emit(dv.goToPage(id));
    setShowDropdown(false);
  }, []);

  return (
    <div className="sitemap-zone" title={tr("viewer.header.sitemap")}>
      <span className="project-name">{projectName}</span>
      <div className="sitemap-text">
        <div className="breadcrumb" onClick={openDropdown}>
          <span className="breadcrumb-text">{`${fileName} / ${pageName}`}</span>
          <span className="icon">{deprecatedIcon.arrow}</span>
          <span>/</span>
        </div>
        <Dropdown show={showDropdown} onClose={closeDropdown}>
          <ul className="dropdown-sitemap">
            {file?.data?.pages?.map((id: string) => {
              const pageData = file?.data?.pagesIndex?.[id];
              return (
                <li
                  key={id}
                  id={id}
                  className={`dropdown-element ${pageId === id ? "selected" : ""}`}
                  onClick={() => navigateTo(id)}
                >
                  <span className="label">{pageData?.name}</span>
                  {pageId === id && (
                    <span className="icon-check">{deprecatedIcon.tick}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </Dropdown>
      </div>
      <div className="current-frame" id="current-frame" onClick={toggleThumbnails}>
        <span className="frame-name">{frameName}</span>
        <span className="icon">{deprecatedIcon.arrow}</span>
      </div>
    </div>
  );
}

interface HeaderProps {
  project: any;
  file: any;
  page: any;
  frame: any;
  zoom: number;
  section: string;
  permissions: any;
  index: number;
  interactionsMode: string;
  shownThumbnails: boolean;
  share: any;
}

export function Header(props: HeaderProps) {
  const {
    project,
    file,
    page,
    frame,
    zoom,
    section,
    permissions,
    index,
    interactionsMode,
    shownThumbnails,
    share
  } = props;

  const goToDashboard = useCallback(() => emit(dv.goToDashboard()), []);

  const goToInspect = useCallback(() => {
    if (permissions?.isLogged) {
      emit(dv.closeThumbnailsPanel(), dv.goToSection("inspect"));
    } else {
      emit(dv.openLoginDialog());
    }
  }, [permissions]);

  const navigate = useCallback((event: React.MouseEvent) => {
    const target = dom.getCurrentTarget(event) as HTMLElement;
    const targetSection = dom.getData(target, "value") as string;

    if (targetSection === "interactions" || permissions?.isLogged) {
      emit(dv.goToSection(targetSection));
    } else {
      emit(dv.openLoginDialog());
    }
  }, [permissions]);

  const toggleThumbnails = useCallback(() => emit(dv.toggleThumbnailsPanel()), []);

  const closeThumbnails = useCallback(() => {
    if (shownThumbnails) {
      emit(dv.closeThumbnailsPanel());
    }
  }, [shownThumbnails]);

  return (
    <header className="viewer-header" onClick={closeThumbnails}>
      <div className="nav-zone">
        <a
          className="home-link"
          onClick={goToDashboard}
          data-testid="penpot-logo-link"
          style={{
            cursor: permissions?.inTeam ? "auto" : "pointer",
            pointerEvents: permissions?.inTeam ? "none" : "auto"
          }}
        >
          {deprecatedIcon.iconXref("penpot-logo-icon", "logo-icon")}
        </a>

        <HeaderSitemap
          project={project}
          file={file}
          page={page}
          frame={frame}
          toggleThumbnails={toggleThumbnails}
          index={index}
        />
      </div>

      <div className="mode-zone">
        <button
          onClick={navigate}
          data-value="interactions"
          className={`mode-zone-btn ${section === "interactions" ? "selected" : ""}`}
          title={tr("viewer.header.interactions-section", sc.getTooltip("open-interactions"))}
        >
          {deprecatedIcon.play}
        </button>

        {(permissions?.inTeam || permissions?.whoComment === "all") && (
          <button
            onClick={navigate}
            data-value="comments"
            className={`mode-zone-btn ${section === "comments" ? "selected" : ""}`}
            title={tr("viewer.header.comments-section", sc.getTooltip("open-comments"))}
          >
            {deprecatedIcon.comments}
          </button>
        )}

        {(permissions?.inTeam || (permissions?.type === "share-link" && permissions?.whoInspect === "all")) && (
          <button
            onClick={goToInspect}
            className={`mode-zone-btn ${section === "inspect" ? "selected" : ""}`}
            title={tr("viewer.header.inspect-section", sc.getTooltip("open-inspect"))}
          >
            {deprecatedIcon.code}
          </button>
        )}
      </div>

      <HeaderOptions
        section={section}
        permissions={permissions}
        page={page}
        file={file}
        index={index}
        zoom={zoom}
        interactionsMode={interactionsMode}
        share={share}
      />
    </header>
  );
}