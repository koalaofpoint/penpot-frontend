// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from "react";
import { dcm } from "app.main.data.common";
import { dd } from "app.main.data.dashboard";
import { modal } from "app.main.data.modal";
import { ntf } from "app.main.data.notifications";
import { refs } from "app.main.refs";
import { st } from "app.main.store";
import { ContextMenu } from "app.main.ui.components.context-menu-a11y";
import { ctx } from "app.main.ui.context";
import { ImportForm } from "app.main.ui.dashboard.import";
import { dom } from "app.util.dom";
import { tr } from "app.util.i18n";
import { rx } from "beicon.v2.core";
import { ptk } from "potok.v2.core";

function cssClass(classes: Record<string, boolean>): string {
  return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
}

interface ProjectMenuProps {
  project: any;
  show?: boolean;
  onEdit?: () => void;
  onClose?: () => void;
  top?: number;
  left?: number;
  onImport?: () => void;
}

export function ProjectMenu(props: ProjectMenuProps) {
  const { project, show, onEdit, onClose, top = 0, left = 0, onImport } = props;

  const currentTeamId = ctx.useContext(ctx.currentTeamId);
  const teamsRef = refs.teams;
  const teams = teamsRef ? Object.values(teamsRef).filter((t: any) => t.id !== currentTeamId) : [];

  const onDuplicateSuccess = (newProject: any) => {
    st.emit!(
      ntf.success(tr("dashboard.success-duplicate-project")),
      dcm.goToDashboardFiles({
        teamId: newProject["team-id"],
        projectId: newProject.id
      })
    );
  };

  const onDuplicate = () => {
    st.emit!(
      dd.duplicateProject(
        ptk.withMeta(project, { onSuccess: onDuplicateSuccess })
      )
    );
  };

  const togglePin = () => {
    st.emit!(dd.toggleProjectPin(project));
  };

  const onMoveSuccess = (teamId: string) => {
    st.emit!(dcm.goToDashboardRecent({ teamId }));
  };

  const onMove = (teamId: string) => {
    const data = { id: project.id, "team-id": teamId };
    const mdata = { onSuccess: () => onMoveSuccess(teamId) };
    return () => {
      st.emit!(
        ntf.success(tr("dashboard.success-move-project")),
        dd.moveProject(ptk.withMeta(data, mdata))
      );
    };
  };

  const deleteFn = (_: any) => {
    const teamId = project["team-id"];
    st.emit!(
      ntf.success(tr("dashboard.success-delete-project")),
      dd.deleteProject(project),
      dcm.goToDashboardRecent({ teamId })
    );
  };

  const onDelete = () => {
    st.emit!(
      modal.show({
        type: "confirm",
        title: tr("modals.delete-project-confirm.title"),
        message: tr("modals.delete-project-confirm.message"),
        acceptLabel: tr("modals.delete-project-confirm.accept"),
        onAccept: deleteFn
      })
    );
  };

  const fileInput = React.useRef<HTMLInputElement>(null);

  const onImportFiles = () => {
    const node = fileInput.current;
    if (node) dom.click(node);
  };

  const onFinishImport = React.useCallback(() => {
    if (typeof onImport === "function") onImport();
  }, [onImport]);

  const options: any[] = [];

  if (!project["is-default"]) {
    options.push(
      { name: tr("labels.rename"), id: "project-rename", handler: onEdit }
    );
  }

  if (!project["is-default"]) {
    options.push(
      { name: tr("dashboard.duplicate"), id: "project-duplicate", handler: onDuplicate }
    );
  }

  if (!project["is-default"]) {
    options.push(
      { name: tr("dashboard.pin-unpin"), id: "project-pin", handler: togglePin }
    );
  }

  if (teams.length > 0 && !project["is-default"]) {
    options.push({
      name: tr("dashboard.move-to"),
      id: "project-move-to",
      options: teams.map((team: any) => ({
        name: team.name,
        id: `move-to-${team.id}`,
        handler: onMove(team.id)
      }))
    });
  }

  if (onImport !== undefined) {
    options.push({
      name: tr("dashboard.import"),
      id: "file-import",
      handler: onImportFiles
    });
  }

  if (!project["is-default"]) {
    options.push({ name: "separator" });
  }

  if (!project["is-default"]) {
    options.push({
      name: tr("labels.delete"),
      id: "project-delete",
      handler: onDelete
    });
  }

  React.useEffect(() => {
    if (show && onClose) {
      st.emit!(ptk.dataEvent("dropdown/open", { id: "project-menu" }));

      const stream = st.stream.pipe(
        rx.filter((e: any) => ptk.typeIs(e, "dropdown/open")),
        rx.map((e: any) => e),
        rx.filter((e: any) => e.id !== "project-menu"),
        rx.take(1)
      );

      const subs = rx.subscribe(null, null, onClose, stream);
      return () => rx.dispose(subs);
    }
  }, [show, onClose]);

  return (
    <>
      <ContextMenu
        onClose={onClose}
        show={show}
        fixed={top !== 0 || left !== 0}
        minWidth={true}
        top={top}
        left={left}
        options={options}
      />
      <ImportForm
        ref={fileInput}
        projectId={project?.id}
        onFinishImport={onFinishImport}
      />
    </>
  );
}