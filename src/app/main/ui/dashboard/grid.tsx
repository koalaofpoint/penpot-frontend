// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from "react";
import { useCallback, useState, useEffect, useRef, useMemo } from "react";
import * as d from "app.common.data";
import * as dm from "app.common.data.macros";
import * as gpt from "app.common.geom.point";
import * as log from "app.common.logging";
import * as ct from "app.common.time";
import * as cf from "app.config";
import * as dcm from "app.main.data.common";
import * as dd from "app.main.data.dashboard";
import * as ntf from "app.main.data.notifications";
import * as dpj from "app.main.data.project";
import * as dtm from "app.main.data.team";
import * as features from "app.main.features";
import * as fonts from "app.main.fonts";
import * as thr from "app.main.rasterizer";
import * as refs from "app.main.refs";
import * as render from "app.main.render";
import * as rp from "app.main.repo";
import * as st from "app.main.store";
import { ColorBullet } from "app.main.ui.components.color-bullet";
import { PortalOnDocument } from "app.main.ui.components.portal";
import { FileMenu } from "app.main.ui.dashboard.file-menu";
import { useImportFile } from "app.main.ui.dashboard.import";
import { InlineEdition } from "app.main.ui.dashboard.inline-edition";
import { EmptyGridPlaceholder, LoadingPlaceholder } from "app.main.ui.dashboard.placeholder";
import { Loader } from "app.main.ui.ds.product.loader";
import * as h from "app.main.ui.hooks";
import * as deprecatedIcon from "app.main.ui.icons";
import * as mw from "app.main.worker";
import * as uc from "app.util.color";
import * as dom from "app.util.dom";
import * as dnd from "app.util.dom.dnd";
import * as i18n from "app.util.i18n";
import { tr } from "app.util.i18n";
import * as kbd from "app.util.keyboard";
import * as ts from "app.util.timers";
import * as rx from "beicon.v2.core";
import * as str from "cuerdas.core";

log.setLevel("debug");

const thumbnailWidth = 252;

function persistThumbnail(fileId: string, revn: number, blob: Blob): any {
  const params = { fileId, revn, media: blob };
  return rp.cmd!("create-file-thumbnail", params).pipe(rx.map((r: any) => r.id));
}

function renderThumbnail(fileId: string, revn: number): any {
  if (features.activeFeature(st.state, "render-wasm/v1")) {
    return mw.ask!({
      cmd: "thumbnails/generate-for-file-wasm",
      revn,
      fileId,
      width: thumbnailWidth
    });
  }

  return mw.ask!({
    cmd: "thumbnails/generate-for-file",
    revn,
    fileId,
    width: thumbnailWidth
  }).pipe(
    rx.mapcat((result: any) => {
      const { fonts: fontList } = result;
      return fonts.renderFontStyles(fontList).pipe(
        rx.map((styles: any) => ({
          ...result,
          styles,
          width: thumbnailWidth
        }))
      );
    })
  );
}

function askForThumbnail(fileId: string, revn: number): any {
  return renderThumbnail(fileId, revn)
    .pipe(
      rx.mapcat(thr.render),
      rx.mapcat((blob: Blob) => persistThumbnail(fileId, revn, blob))
    );
}

interface GridItemThumbnailProps {
  canEdit?: boolean;
  file: any;
  canRestore?: boolean;
}

const GridItemThumbnail = React.memo(function GridItemThumbnail(props: GridItemThumbnailProps) {
  const fileId = props.file.id;
  const revn = props.file.revn;
  const thumbnailId = props.file.thumbnailId;
  const bgColor = dm.getIn(props.file, ["data", "background"]);

  const containerRef = useRef<HTMLDivElement>(null);
  const visible = h.useVisible(containerRef, { once: true });

  useEffect(() => {
    if (visible && !thumbnailId) {
      const subscription = askForThumbnail(fileId, revn)
        .subscribe(
          (id: string) => {
            st.emit!(dd.setFileThumbnail(fileId, id));
          },
          (cause: any) => {
            log.error({
              hint: "unable to render thumbnail",
              fileId,
              revn,
              message: (cause as Error).message
            });
          }
        );

      return () => rx.dispose!(subscription);
    }
  }, [visible, fileId, revn, thumbnailId]);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <div
      className={cssClass({ "grid-item-th": true, "deleted-item": props.canRestore })}
      style={{ backgroundColor: bgColor }}
      ref={containerRef}
    >
      {visible && (
        thumbnailId ? (
          <img
            className={cssClass({ "grid-item-thumbnail-image": true })}
            draggable={String(canEdit)}
            src={cf.resolveMedia(thumbnailId)}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <Loader
            className={cssClass({ "grid-loader": true })}
            draggable={String(props.canEdit)}
            overlay={true}
            title={tr("labels.loading")}
          />
        )
      )}
    </div>
  );
});

const menuIcon = deprecatedIcon.iconXref("menu", "menu-icon");

interface GridItemLibraryProps {
  file: any;
  canRestore?: boolean;
}

const GridItemLibrary = React.memo(function GridItemLibrary(props: GridItemLibraryProps) {
  useEffect(() => {
    if (props.file) {
      const fontIds = dm.getIn(props.file, ["library-summary", "typographies", "sample"], [])
        .map((t: any) => t.fontId);
      fontIds.forEach((id: string) => fonts.ensureLoaded!(id));
    }
  }, [props.file]);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  if (props.file === null) {
    return (
      <div className={cssClass({ "grid-item-th": true, library: true, "deleted-item": props.canRestore })}>
        <Loader
          className={cssClass({ "grid-loader": true })}
          overlay={true}
          title={tr("labels.loading")}
        />
      </div>
    );
  }

  const summary = props.file.librarySummary;
  const components = summary?.components;
  const colors = summary?.colors;
  const typographies = summary?.typographies;

  return (
    <div className={cssClass({ "grid-item-th": true, library: true, "deleted-item": props.canRestore })}>
      {components?.count === 0 && colors?.count === 0 && typographies?.count === 0 && (
        <>
          <div className={cssClass({ "asset-section": true })}>
            <div className={cssClass({ "asset-title": true })}>
              <span>{tr("workspace.assets.components")}</span>
              <span className={cssClass({ "num-assets": true })}>{`\u00A0(0)`}</span>
            </div>
          </div>
          <div className={cssClass({ "asset-section": true })}>
            <div className={cssClass({ "asset-title": true })}>
              <span>{tr("workspace.assets.colors")}</span>
              <span className={cssClass({ "num-assets": true })}>{`\u00A0(0)`}</span>
            </div>
          </div>
          <div className={cssClass({ "asset-section": true })}>
            <div className={cssClass({ "asset-title": true })}>
              <span>{tr("workspace.assets.typography")}</span>
              <span className={cssClass({ "num-assets": true })}>{`\u00A0(0)`}</span>
            </div>
          </div>
        </>
      )}

      {components?.count > 0 && (
        <div className={cssClass({ "asset-section": true })}>
          <div className={cssClass({ "asset-title": true })}>
            <span>{tr("workspace.assets.components")}</span>
            <span className={cssClass({ "num-assets": true })}>{`\u00A0(${components.count})`}</span>
          </div>
          <div className={cssClass({ "asset-list": true })}>
            {components.sample.map((component: any) => {
              const rootId = component.mainInstanceId;
              return (
                <div className={cssClass({ "asset-list-item": true })} key={dm.str("assets-component-", component.id)}>
                  <render.ComponentSvg
                    rootShape={dm.getIn(component, ["objects", rootId])}
                    objects={component.objects}
                  />
                  <div className={cssClass({ "name-block": true })}>
                    <span className={cssClass({ "item-name": true })} title={component.name}>
                      {component.name}
                    </span>
                  </div>
                </div>
              );
            })}
            {components.count > components.sample.length && (
              <div className={cssClass({ "asset-list-item": true })}>
                <div className={cssClass({ "name-block": true })}>
                  <span className={cssClass({ "item-name": true })}>(...)</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {colors?.count > 0 && (
        <div className={cssClass({ "asset-section": true })}>
          <div className={cssClass({ "asset-title": true })}>
            <span>{tr("workspace.assets.colors")}</span>
            <span className={cssClass({ "num-assets": true })}>{`\u00A0(${colors.count})`}</span>
          </div>
          <div className={cssClass({ "asset-list": true })}>
            {colors.sample.map((color: any) => {
              const defaultName = color.gradient
                ? uc.gradientTypeToString(color.gradient.type)
                : color.color || color.value;

              return (
                <div className={cssClass({ "asset-list-item": true, "color-item": true })} key={dm.str("assets-color-", color.id)}>
                  <ColorBullet
                    color={{
                      color: color.color,
                      id: color.id,
                      opacity: color.opacity
                    }}
                    mini={true}
                  />
                  <div className={cssClass({ "name-block": true })}>
                    <span className={cssClass({ "color-name": true })}>{color.name}</span>
                    {color.name !== defaultName && (
                      <span className={cssClass({ "color-value": true })}>{color.color}</span>
                    )}
                  </div>
                </div>
              );
            })}
            {colors.count > colors.sample.length && (
              <div className={cssClass({ "asset-list-item": true })}>
                <div className={cssClass({ "name-block": true })}>
                  <span className={cssClass({ "item-name": true })}>(...)</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {typographies?.count > 0 && (
        <div className={cssClass({ "asset-section": true })}>
          <div className={cssClass({ "asset-title": true })}>
            <span>{tr("workspace.assets.typography")}</span>
            <span className={cssClass({ "num-assets": true })}>{`\u00A0(${typographies.count})`}</span>
          </div>
          <div className={cssClass({ "asset-list": true })}>
            {typographies.sample.map((typography: any) => (
              <div className={cssClass({ "asset-list-item": true })} key={dm.str("assets-typography-", typography.id)}>
                <div
                  className={cssClass({ "typography-sample": true })}
                  style={{
                    fontFamily: typography.fontFamily,
                    fontWeight: typography.fontWeight,
                    fontStyle: typography.fontStyle
                  }}
                >
                  {tr("workspace.assets.typography.sample")}
                </div>
                <div className={cssClass({ "name-block": true })}>
                  <span className={cssClass({ "item-name": true })} title={typography.name}>
                    {typography.name}
                  </span>
                </div>
              </div>
            ))}
            {typographies.count > typographies.sample.length && (
              <div className={cssClass({ "asset-list-item": true })}>
                <div className={cssClass({ "name-block": true })}>
                  <span className={cssClass({ "item-name": true })}>(...)</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
});

interface GridItemMetadataProps {
  file: any;
}

function GridItemMetadata(props: GridItemMetadataProps) {
  const time = ct.timeago(props.file.willBeDeletedAt || props.file.modifiedAt);

  return (
    <span className="date" title={tr("dashboard.deleted.will-be-deleted-at", time)}>
      {time}
    </span>
  );
}

function createCounterElement(_element: HTMLElement, fileCount: number): HTMLElement {
  const counterEl = dom.createElement("div");
  counterEl.className = "drag-counter";
  counterEl.textContent = String(fileCount);
  return counterEl;
}

interface GridItemProps {
  file: any;
  origin: string;
  canEdit?: boolean;
  selectedFiles: Set<string>;
  canRestore?: boolean;
}

const GridItem = React.memo(function GridItem(props: GridItemProps) {
  const fileId = props.file.id;
  const state = refs.deref(refs.dashboardLocal);

  const menuPos = state?.menuPos;
  const menuOpen = state?.menuOpen && state?.fileId === fileId;

  const selected = props.selectedFiles.has(fileId);
  const selectedNum = props.selectedFiles.size;

  const nodeRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const isLibraryView = props.origin === "libraries";

  const onMenuClose = useCallback(() => {
    st.emit!(dd.hideFileMenu());
  }, []);

  const onSelect = useCallback((event: React.MouseEvent) => {
    if (!selected || selectedNum > 1) {
      dom.stopPropagation(event);
      const shift = kbd.shift(event);
      if (!shift) {
        st.emit!(dd.clearSelectedFiles());
      }
      st.emit!(dd.toggleFileSelect(props.file));
    }
  }, [selected, selectedNum, props.file]);

  const onNavigate = useCallback((event: React.MouseEvent) => {
    if (!props.canRestore) {
      const menuIconEl = menuRef.current;
      const target = dom.getTarget(event);
      if (!dom.child(target, menuIconEl)) {
        st.emit!(dcm.goToWorkspace({ fileId: fileId }));
      }
    }
  }, [fileId, props.canRestore]);

  const onDragStart = useCallback((event: React.DragEvent) => {
    st.emit!(dd.hideFileMenu());
    if (props.canEdit) {
      const offset = dom.getOffsetPosition(dom.eventToNativeEvent(event) as MouseEvent);
      const itemEl = nodeRef.current;
      const counterEl = createCounterElement(itemEl, selected ? selectedNum : 1);

      if (!selected) {
        st.emit!(dd.clearSelectedFiles());
        st.emit!(dd.toggleFileSelect(props.file));
      }

      dnd.setData(event, "penpot/files", "dummy");
      dnd.setAllowedEffect(event, "move");

      dom.appendChild(itemEl, counterEl);
      dnd.setDragImage(event, itemEl, offset.x, offset.y);

      ts.raf(() => {
        if (dom.child(counterEl, itemEl)) {
          dom.removeChild(itemEl, counterEl);
        }
      });
    }
  }, [selected, selectedNum, props.canEdit, props.file]);

  const onMenuClick = useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event);

    if (!selected) {
      if (!kbd.shift(event)) {
        st.emit!(dd.clearSelectedFiles());
      }
      st.emit!(dd.toggleFileSelect(props.file));
    }

    const clientPosition = dom.getClientPosition(event);
    let position: { x: number; y: number };

    if (clientPosition.y == null && clientPosition.x == null) {
      const targetElement = dom.getTarget(event);
      const points = dom.getBoundingRect(targetElement);
      position = gpt.point(points.left, points.top);
    } else {
      position = clientPosition as { x: number; y: number };
    }

    st.emit!(dd.showFileMenuWithPosition(fileId, position));
  }, [fileId, selected, props.file]);

  const onContextMenu = useCallback((event: React.MouseEvent) => {
    dom.preventDefault(event);
    onMenuClick(event);
  }, [onMenuClick]);

  const edit = useCallback((name: string) => {
    const trimmed = str.trim(name);
    if (trimmed !== "") {
      st.emit!(dd.renameFile({ ...props.file, name: trimmed }));
    }
    st.emit!(dd.stopEditFileName());
  }, [props.file]);

  const onEdit = useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event);
    st.emit!(dd.startEditFileName(fileId));
  }, [fileId]);

  const onKeyDown = useCallback((event: React.KeyboardEvent) => {
    dom.stopPropagation(event);
    if (kbd.enter(event)) {
      onNavigate(event as any);
    }
    if (kbd.shift(event)) {
      const key = event.key;
      if (["ArrowDown", "ArrowLeft", "ArrowUp", "ArrowRight"].includes(key)) {
        onSelect(event as any);
      }
    }
  }, [onNavigate, onSelect]);

  const onMenuKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (kbd.enter(event)) {
      dom.stopPropagation(event);
      dom.preventDefault(event);
      onMenuClick(event as any);
    }
  }, [onMenuClick]);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <li className={cssClass({ "grid-item": true, "project-th": true, library: isLibraryView })}>
      <div
        className={cssClass({ selected: selected, library: isLibraryView })}
        ref={nodeRef}
        role="button"
        title={props.file.name}
        draggable={String(props.canEdit)}
        onClick={onSelect}
        onKeyDown={onKeyDown}
        onDoubleClick={onNavigate}
        onDragStart={onDragStart}
        onContextMenu={onContextMenu}
      >
        <div className={cssClass({ overlay: true })} />

        {isLibraryView ? (
          <GridItemLibrary file={props.file} canRestore={props.canRestore} />
        ) : (
          <GridItemThumbnail file={props.file} canEdit={props.canEdit} canRestore={props.canRestore} />
        )}

        {props.file.isShared && !isLibraryView && (
          <div className={cssClass({ "item-badge": true })}>{deprecatedIcon.library}</div>
        )}

        <div className={cssClass({ "info-wrapper": true })}>
          <div className={cssClass({ "item-info": true })}>
            {state?.fileId === fileId && state?.edition ? (
              <InlineEdition
                content={props.file.name}
                onEnd={edit}
                maxLength={250}
              />
            ) : (
              <h3>{props.file.name}</h3>
            )}
            <GridItemMetadata file={props.file} />
          </div>

          <div className={cssClass({ "project-th-actions": true, "force-display": menuOpen })}>
            <div
              className={cssClass({ "project-th-icon": true, menu: true })}
              tabIndex={0}
              role="button"
              aria-label={tr("dashboard.options")}
              ref={menuRef}
              id={dm.str(fileId, "-action-menu")}
              onClick={onMenuClick}
              onKeyDown={onMenuKeyDown}
            >
              {menuIcon}
              {selected && menuOpen && (
                <PortalOnDocument>
                  <FileMenu
                    files={Array.from(props.selectedFiles).map((id) => ({ id }))}
                    left={(menuPos?.x ?? 0) + 24}
                    top={menuPos?.y ?? 0}
                    canEdit={props.canEdit}
                    navigate={true}
                    onEdit={onEdit}
                    onClose={onMenuClose}
                    origin={props.origin}
                    parentId={dm.str(fileId, "-action-menu")}
                    canRestore={props.canRestore}
                  />
                </PortalOnDocument>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
});

interface GridProps {
  files: any[];
  project: any;
  origin: string;
  limit: number;
  createFn?: (origin: string) => void;
  canEdit?: boolean;
  selectedFiles: Set<string>;
  canRestore?: boolean;
}

function Grid(props: GridProps) {
  const [dragging, setDragging] = useState(false);
  const projectId = props.project.id;
  const teamId = props.project.teamId;

  const nodeRef = useRef<HTMLDivElement>(null);

  const onFinishImport = useCallback(() => {
    st.emit!(
      dpj.fetchFiles(projectId),
      dtm.fetchSharedFiles(teamId),
      dd.clearSelectedFiles()
    );
  }, [projectId, teamId]);

  const importFiles = useImportFile(projectId, onFinishImport);

  const onScroll = useCallback(() => {
    st.emit!(dd.hideFileMenu());
  }, []);

  const onDragEnter = useCallback((e: React.DragEvent) => {
    if (props.canEdit) {
      if (!dnd.hasType(e, "penpot/files") &&
          (dnd.hasType(e, "Files") || dnd.hasType(e, "application/x-moz-file"))) {
        dom.preventDefault(e);
        setDragging(true);
      }
    }
  }, [props.canEdit]);

  const onDragOver = useCallback((e: React.DragEvent) => {
    if (dnd.hasType(e, "Files") || dnd.hasType(e, "application/x-moz-file")) {
      dom.preventDefault(e);
    }
  }, []);

  const onDragLeave = useCallback((e: React.DragEvent) => {
    if (!dnd.fromChild(e)) {
      setDragging(false);
    }
  }, []);

  const onDrop = useCallback((e: React.DragEvent) => {
    if (props.canEdit) {
      if (!dnd.hasType(e, "penpot/files") &&
          (dnd.hasType(e, "Files") || dnd.hasType(e, "application/x-moz-file"))) {
        dom.preventDefault(e);
        setDragging(false);
        importFiles(e.dataTransfer.files);
      }
    } else {
      dom.preventDefault(e);
    }
  }, [props.canEdit, importFiles]);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  if (props.files === null) {
    return (
      <div
        className={cssClass({ "dashboard-grid": true })}
        draggable={String(props.canEdit)}
        onDragEnter={onDragEnter}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onScroll={onScroll}
        ref={nodeRef}
      >
        <LoadingPlaceholder />
      </div>
    );
  }

  if (props.files.length === 0) {
    return (
      <div
        className={cssClass({ "dashboard-grid": true })}
        draggable={String(props.canEdit)}
        onDragEnter={onDragEnter}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onScroll={onScroll}
        ref={nodeRef}
      >
        <EmptyGridPlaceholder
          limit={props.limit}
          canEdit={props.canEdit}
          createFn={props.createFn}
          origin={props.origin}
          projectId={projectId}
          teamId={teamId}
          onFinishImport={onFinishImport}
        />
      </div>
    );
  }

  const slices = d.partitionAll(props.limit, props.files);

  return (
    <div
      className={cssClass({ "dashboard-grid": true })}
      draggable={String(props.canEdit)}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onScroll={onScroll}
      ref={nodeRef}
    >
      {Array.from(slices).map((slice, index) => (
        <ul className={cssClass({ "grid-row": true })} key={dm.str(index)}>
          {dragging && <li className={cssClass({ "grid-item": true })} />}
          {slice.map((item) => (
            <GridItem
              key={dm.str(item.id)}
              file={item}
              origin={props.origin}
              selectedFiles={props.selectedFiles}
              canEdit={props.canEdit}
              canRestore={props.canRestore}
            />
          ))}
        </ul>
      ))}
    </div>
  );
}

interface LineGridRowProps {
  files: any[];
  selectedFiles: Set<string>;
  dragging?: boolean;
  limit: number;
  canEdit?: boolean;
  canRestore?: boolean;
}

function LineGridRow(props: LineGridRowProps) {
  const elements = props.limit;
  const limit = props.dragging ? props.limit - 1 : props.limit;

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <ul
      className={cssClass({ "grid-row": true, "no-wrap": true })}
      style={{ gridTemplateColumns: `repeat(${elements}, 1fr)` }}
    >
      {props.dragging && <li className={cssClass({ "grid-item": true, dragged: true })} />}
      {props.files.slice(0, limit).map((item) => (
        <GridItem
          key={dm.str(item.id)}
          id={item.id}
          file={item}
          selectedFiles={props.selectedFiles}
          canEdit={props.canEdit}
          canRestore={props.canRestore}
        />
      ))}
    </ul>
  );
}

interface LineGridProps {
  project: any;
  team: any;
  files: any[];
  limit: number;
  createFn?: (origin: string) => void;
  canEdit?: boolean;
  canRestore?: boolean;
}

function LineGrid(props: LineGridProps) {
  const [dragging, setDragging] = useState(false);
  const projectId = props.project.id;
  const teamId = props.project.id;

  const selectedFiles = refs.deref(refs.selectedFiles);
  const selectedProject = refs.deref(refs.selectedProject);

  const onFinishImport = useCallback(() => {
    st.emit!(dd.fetchRecentFiles(teamId), dd.clearSelectedFiles());
  }, [teamId]);

  const importFiles = useImportFile(projectId, onFinishImport);

  const onDragEnter = useCallback((e: React.DragEvent) => {
    if (props.canEdit) {
      if (dnd.hasType(e, "penpot/files")) {
        dom.preventDefault(e);
        if (!dnd.fromChild(e) && !dnd.brokenEvent(e)) {
          if (selectedProject !== projectId) {
            setDragging(true);
          }
        }
      } else if (dnd.hasType(e, "Files") || dnd.hasType(e, "application/x-moz-file")) {
        dom.preventDefault(e);
        setDragging(true);
      }
    }
  }, [props.canEdit, selectedProject, projectId]);

  const onDragOver = useCallback((e: React.DragEvent) => {
    if (dnd.hasType(e, "penpot/files") || dnd.hasType(e, "Files") || dnd.hasType(e, "application/x-moz-file")) {
      dom.preventDefault(e);
    }
  }, []);

  const onDragLeave = useCallback((e: React.DragEvent) => {
    if (!dnd.fromChild(e)) {
      setDragging(false);
    }
  }, []);

  const onDropSuccess = useCallback(() => {
    st.emit!(
      ntf.success(tr("dashboard.success-move-file")),
      dd.fetchRecentFiles(teamId),
      dd.clearSelectedFiles()
    );
  }, [teamId]);

  const onDrop = useCallback((e: React.DragEvent) => {
    if (props.canEdit) {
      if (dnd.hasType(e, "penpot/files")) {
        setDragging(false);
        if (selectedProject !== projectId) {
          const data = {
            ids: new Set(Object.keys(selectedFiles)),
            projectId: projectId
          };
          const mdata = { onSuccess: onDropSuccess };
          st.emit!(dd.moveFiles(ptk.withMeta(data, mdata) as any));
        }
      } else if (dnd.hasType(e, "Files") || dnd.hasType(e, "application/x-moz-file")) {
        dom.preventDefault(e);
        setDragging(false);
        importFiles(e.dataTransfer.files);
      }
    } else {
      dom.preventDefault(e);
    }
  }, [props.canEdit, selectedProject, projectId, selectedFiles, onDropSuccess, importFiles]);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  if (props.files === null) {
    return (
      <div
        className={cssClass({ "dashboard-grid": true })}
        draggable={String(props.canEdit)}
        onDragEnter={onDragEnter}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <LoadingPlaceholder />
      </div>
    );
  }

  if (props.files.length === 0) {
    return (
      <div
        className={cssClass({ "dashboard-grid": true })}
        draggable={String(props.canEdit)}
        onDragEnter={onDragEnter}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <EmptyGridPlaceholder
          isDragging={dragging}
          limit={props.limit}
          canEdit={props.canEdit}
          createFn={props.createFn}
          projectId={projectId}
          teamId={teamId}
          onFinishImport={onFinishImport}
        />
      </div>
    );
  }

  return (
    <div
      className={cssClass({ "dashboard-grid": true })}
      draggable={String(props.canEdit)}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <LineGridRow
        files={props.files}
        selectedFiles={selectedFiles}
        dragging={dragging}
        canEdit={props.canEdit}
        limit={props.limit}
        canRestore={props.canRestore}
      />
    </div>
  );
}

export { Grid, LineGrid };