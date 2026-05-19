// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from "react";
import { dd } from "app.main.data.dashboard";
import { refs } from "app.main.refs";
import { st } from "app.main.store";
import { Grid } from "app.main.ui.dashboard.grid";
import { InlineEdition } from "app.main.ui.dashboard.inline-edition";
import { PinButton } from "app.main.ui.dashboard.pin-button";
import { ProjectMenu } from "app.main.ui.dashboard.project-menu";
import { EmptyPlaceholder } from "app.main.ui.ds.product.empty-placeholder";
import { hooks } from "app.main.ui.hooks";
import { deprecatedIcon } from "app.main.ui.icons";
import { dom } from "app.util.dom";
import { tr } from "app.util.i18n";
import { kbd } from "app.util.keyboard";

function cssClass(classes: Record<string, boolean>): string {
  return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
}

const menuIcon = deprecatedIcon.iconXref("menu", cssClass({ "menu-icon": true }));

interface HeaderProps {
  project: any;
  createFn?: (origin: string) => void;
  canEdit?: boolean;
}

export function Header(props: HeaderProps) {
  const { project, createFn, canEdit } = props;
  const projectId = project?.id;

  const localRef = React.useState({
    menuOpen: false,
    edition: false
  })[0];
  const local = localRef.current;

  const onCreateClick = React.useCallback(
    (event: any) => {
      dom.preventDefault(event);
      if (createFn) createFn("dashboard:header");
    },
    [createFn]
  );

  const onMenuClick = React.useCallback(
    (event: any) => {
      const position = dom.getClientPosition(event);
      dom.preventDefault(event);
      localRef.current = { ...localRef.current, menuOpen: true, menuPos: position };
    },
    []
  );

  const onMenuClose = React.useCallback(() => {
    localRef.current = { ...localRef.current, menuOpen: false };
  }, []);

  const onEdit = React.useCallback(() => {
    localRef.current = { ...localRef.current, edition: true, menuOpen: false };
  }, []);

  const togglePin = React.useCallback(
    (event: any) => {
      st.emit!(dd.toggleProjectPin(project));
    },
    [project]
  );

  const onImport = React.useCallback(
    () => {
      st.emit!(dpj.fetchFiles(projectId), dd.clearSelectedFiles());
    },
    [projectId]
  );

  return (
    <header className={cssClass({ "dashboard-header": true })} data-testid="dashboard-header">
      {project?.isDefault ? (
        <div id="dashboard-drafts-title" className={cssClass({ "dashboard-title": true })}>
          <h1>{tr("labels.drafts")}</h1>
        </div>
      ) : local.edition && canEdit ? (
        <InlineEdition
          content={project?.name}
          onEnd={(name: string) => {
            const trimmed = name.trim();
            if (!strLib.empty(trimmed)) {
              st.emit!(
                ptk.withMeta(dd.renameProject({ ...project, name: trimmed }), { [ev/origin]: "project" })
              );
            }
            localRef.current = { ...localRef.current, edition: false };
          }}
          maxLength={250}
        />
      ) : (
        <div className={cssClass({ "dashboard-title": true })}>
          <h1
            onDoubleClick={onEdit}
            data-testid="project-title"
            id={project?.id}
          >
            {project?.name}
          </h1>
        </div>
      )}

      <div className={cssClass({ "dashboard-header-actions": true })}>
        {canEdit && (
          <a
            className={cssClass({ "btn-secondary": true, "btn-small": true, "new-file": true })}
            tabIndex="0"
            onClick={onCreateClick}
            data-testid="new-file"
            onKeyDown={(event: any) => {
              if (kbd.enter(event)) onCreateClick(event);
            }}
          >
            {tr("dashboard.new-file")}
          </a>
        )}

        {!project?.isDefault && (
          <PinButton
            tabIndex={0}
            isPinned={project?.isPinned}
            onClick={togglePin}
            onKeyDown={(event: any) => {
              if (kbd.enter(event)) togglePin(event);
            }}
          />
        )}

        {canEdit && (
          <div
            className={cssClass({ icon: true })}
            tabIndex="0"
            onClick={onMenuClick}
            title={tr("dashboard.options")}
            onKeyDown={(event: any) => {
              if (kbd.enter(event)) onMenuClick(event);
            }}
          >
            {menuIcon}
          </div>
        )}

        {canEdit && (
          <ProjectMenu
            project={project}
            show={local.menuOpen}
            left={-180 + (local.menuPos?.x || 0)}
            top={local.menuPos?.y || 0}
            onEdit={onEdit}
            onClose={onMenuClose}
            onImport={onImport}
          />
        )}
      </div>
    </header>
  );
}

interface FilesSectionProps {
  project: any;
  team: any;
}

export function FilesSection(props: FilesSectionProps) {
  const { project, team } = props;
  const filesRef = refs.files;
  const projectId = project?.id;

  const filteredFiles = React.useMemo(() => {
    if (!filesRef || !projectId) return [];
    return Object.values(filesRef)
      .filter((file: any) => file["project-id"] === projectId)
      .sort((a: any, b: any) => b["modified-at"] - a["modified-at"]);
  }, [filesRef, projectId]);

  const canEdit = team?.permissions?.["can-edit"];
  const isDraftProject = project?.isDefault;

  const [rowRef, limit] = hooks.useDynamicGridItemWidth();

  const fileCount = filteredFiles?.length || 0;
  const emptyStateViewer = !canEdit && fileCount === 0;

  const selectedFiles = refs.selectedFiles;

  const onFileCreated = React.useCallback(
    (fileData: any) => {
      const fileId = fileData?.id;
      const pageId = fileData?.pages?.[0];
      st.emit!(dcm.goToWorkspace({ fileId, pageId }));
    },
    []
  );

  const createFile = React.useCallback(
    (origin: string) => {
      const mdata = { onSuccess: onFileCreated };
      const params = { "project-id": project?.id };
      st.emit!(
        ptk.withMeta(dd.createFile(ptk.withMeta(params, mdata)), {
          [ev/origin]: origin,
          "has-files": fileCount > 0
        })
      );
    },
    [project, fileCount, onFileCreated]
  );

  React.useEffect(() => {
    if (project) {
      const pname = project.isDefault ? tr("labels.drafts") : project.name;
      dom.setHtmlTitle(tr("title.dashboard.files", pname));
    }
  }, [project]);

  React.useEffect(() => {
    if (projectId) {
      st.emit!(dpj.fetchFiles(projectId), dd.clearSelectedFiles());
    }
  }, [projectId]);

  hooks.useShortcuts("dashboard", "shortcuts-drafts-libraries");

  return (
    <>
      <Header
        team={team}
        canEdit={canEdit}
        project={project}
        createFn={createFile}
      />
      <section
        className={cssClass({ "dashboard-container": true, "no-bg": true })}
        ref={rowRef as any}
      >
        {emptyStateViewer ? (
          <EmptyPlaceholder
            title={
              isDraftProject
                ? tr("dashboard.empty-placeholder-drafts-title")
                : tr("dashboard.empty-placeholder-files-title")
            }
            className={cssClass({ "placeholder-placement": true })}
            type={1}
            subtitle={
              isDraftProject
                ? tr("dashboard.empty-placeholder-drafts-subtitle")
                : tr("dashboard.empty-placeholder-files-subtitle")
            }
          />
        ) : (
          <Grid
            project={project}
            files={filteredFiles}
            selectedFiles={selectedFiles}
            canEdit={canEdit}
            origin="files"
            createFn={createFile}
            limit={limit}
          />
        )}
      </section>
    </>
  );
}