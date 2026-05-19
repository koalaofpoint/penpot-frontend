// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from "react";
import { ev } from "app.main.data.event";
import { st } from "app.main.store";
import { ImportForm } from "app.main.ui.dashboard.import";
import { EmptyPlaceholder } from "app.main.ui.ds.product.empty-placeholder";
import { Loader } from "app.main.ui.ds.product.loader";
import { deprecatedIcon } from "app.main.ui.icons";
import { dom } from "app.util.dom";
import { tr } from "app.util.i18n";
import { ptk } from "potok.v2.core";
import { l } from "okulary.core";

function cssClass(classes: Record<string, boolean>): string {
  return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
}

interface EmptyProjectPlaceholderProps {
  onCreate?: () => void;
  onFinishImport?: () => void;
  projectId?: string;
}

export function EmptyProjectPlaceholder(props: EmptyProjectPlaceholderProps) {
  const { onCreate, onFinishImport, projectId } = props;
  const fileInput = React.useRef<HTMLInputElement>(null);

  const onAddLibrary = React.useCallback(
    (_: any) => {
      st.emit!(
        ptk.event(ev.event, {
          [ev.name]: "explore-libraries-click",
          [ev/origin]: "dashboard",
          section: "empty-placeholder-projects"
        })
      );
      dom.openNewWindow("https://penpot.app/penpothub/libraries-templates");
    },
    []
  );

  const onImport = React.useCallback(
    (_: any) => {
      const node = fileInput.current;
      if (node) dom.click(node);
    },
    []
  );

  return (
    <div className={cssClass({ "empty-project-container": true })}>
      <div
        className={cssClass({ "empty-project-card": true })}
        onClick={onCreate}
        title={tr("dashboard.add-file")}
      >
        <div className={cssClass({ "empty-project-card-title": true })}>
          {tr("dashboard.empty-project.create")}
        </div>
        <div className={cssClass({ "empty-project-card-subtitle": true })}>
          {tr("dashboard.empty-project.start")}
        </div>
      </div>

      <div
        className={cssClass({ "empty-project-card": true })}
        onClick={onImport}
        title={tr("dashboard.empty-project.import")}
      >
        <div className={cssClass({ "empty-project-card-title": true })}>
          {tr("dashboard.empty-project.import")}
        </div>
        <div className={cssClass({ "empty-project-card-subtitle": true })}>
          {tr("dashboard.empty-project.import-penpot")}
        </div>
      </div>

      <div
        className={cssClass({ "empty-project-card": true })}
        onClick={onAddLibrary}
        title={tr("dashboard.empty-project.go-to-libraries")}
      >
        <div className={cssClass({ "empty-project-card-title": true })}>
          {tr("dashboard.empty-project.add-library")}
        </div>
        <div className={cssClass({ "empty-project-card-subtitle": true })}>
          {tr("dashboard.empty-project.explore")}
        </div>
      </div>

      <ImportForm
        ref={fileInput}
        projectId={projectId}
        onFinishImport={onFinishImport}
      />
    </div>
  );
}

function makeHasOtherFilesOrProjectsRef(teamId: string) {
  return l.derived((state: any) => {
    const projects = state.projects;
    const hasProject = projects && Object.values(projects).some(
      (project: any) =>
        project["team-id"] === teamId && !project["is-default"]
    );

    const files = state.files;
    const hasFile = files && Object.values(files).some(
      (file: any) => file["team-id"] === teamId
    );

    return hasProject || hasFile;
  });
}

interface EmptyGridPlaceholderProps {
  isDragging?: boolean;
  limit?: number;
  origin?: string;
  createFn?: (origin: string) => void;
  canEdit?: boolean;
  teamId?: string;
  projectId?: string;
  onFinishImport?: () => void;
}

export function EmptyGridPlaceholder(props: EmptyGridPlaceholderProps) {
  const {
    isDragging,
    limit = 0,
    origin,
    createFn,
    canEdit,
    teamId,
    projectId,
    onFinishImport
  } = props;

  const onClick = React.useCallback(
    (_: any) => {
      if (createFn) createFn("dashboard:empty-folder-placeholder");
    },
    [createFn]
  );

  const showTextRef = React.useState(false)[0];
  const showText = showTextRef.current;

  const onMouseEnter = React.useCallback(() => {
    showTextRef.current = true;
  }, []);

  const onMouseLeave = React.useCallback(() => {
    showTextRef.current = false;
  }, []);

  const hasOtherRef = React.useMemo(() => {
    if (!teamId) return { current: false };
    return makeHasOtherFilesOrProjectsRef(teamId);
  }, [teamId]);

  const hasOther = hasOtherRef.current;

  if (isDragging === true) {
    return (
      <ul
        className={cssClass({ "grid-row": true, "no-wrap": true })}
        style={{ gridTemplateColumns: `repeat(${limit}, 1fr)` }}
      >
        <li className={cssClass({ "grid-item": true, "grid-empty-placeholder": true, dragged: true })} />
      </ul>
    );
  }

  if (origin === "libraries") {
    return (
      <>
        <EmptyPlaceholder
          title={tr("dashboard.empty-placeholder-libraries-title")}
          type={2}
          subtitle={!canEdit ? tr("dashboard.empty-placeholder-libraries-subtitle-viewer-role") : undefined}
          className={cssClass({ "empty-placeholder-libraries": true })}
        />

        {canEdit && (
          <I18n.TrHtml
            content={tr("dashboard.empty-placeholder-libraries")}
            className={cssClass({ "placeholder-markdown": true })}
            tagName="span"
          />
        )}
      </>
    );
  }

  if (!hasOther) {
    return (
      <EmptyProjectPlaceholder
        onCreate={onClick}
        onFinishImport={onFinishImport}
        projectId={projectId}
      />
    );
  }

  return (
    <div className={cssClass({ "grid-empty-placeholder": true })}>
      <button
        className={cssClass({ "create-new": true })}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {showText ? tr("dashboard.empty-project.create") : deprecatedIcon.add}
      </button>
    </div>
  );
}

interface LoadingPlaceholderProps {}

export function LoadingPlaceholder(props: LoadingPlaceholderProps) {
  return (
    <Loader
      width={32}
      title={tr("labels.loading")}
      className={cssClass({ "placeholder-loader": true })}
    >
      <span className={cssClass({ "placeholder-text": true })}>
        {tr("dashboard.loading-files")}
      </span>
    </Loader>
  );
}