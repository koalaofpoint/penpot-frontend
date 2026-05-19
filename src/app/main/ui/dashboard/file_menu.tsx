// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from "react";
import { useEffect, useState, useCallback } from "react";
import * as d from "app.common.data";
import * as dcm from "app.main.data.common";
import * as dd from "app.main.data.dashboard";
import * as ev from "app.main.data.event";
import * as fexp from "app.main.data.exports.files";
import * as modal from "app.main.data.modal";
import * as ntf from "app.main.data.notifications";
import * as rp from "app.main.repo";
import * as rt from "app.main.router";
import * as st from "app.main.store";
import { ContextMenu } from "app.main.ui.components.context-menu-a11y";
import * as ctx from "app.main.ui.context";
import * as dom from "app.util.dom";
import * as i18n from "app.util.i18n";
import { tr } from "app.util.i18n";
import * as rx from "beicon.v2.core";
import * as ptk from "potok.v2.core";

function getProjectName(project: any): string {
  if (project.isDefault) {
    return tr("labels.drafts");
  }
  return project.name;
}

function getProjectId(project: any): string {
  return String(project.id);
}

function getTeamName(team: any): string {
  if (team.isDefault) {
    return tr("dashboard.your-penpot");
  }
  return team.name;
}

function groupByTeam(projects: any[]): Record<string, any> {
  return projects.reduce((teams: Record<string, any>, project: any) => {
    const teamId = project.teamId;
    if (!teams[teamId]) {
      teams[teamId] = {
        id: teamId,
        name: project.teamName,
        isDefault: project.isDefaultTeam,
        projects: [project]
      };
    } else {
      teams[teamId].projects.push(project);
    }
    return teams;
  }, {} as Record<string, any>);
}

interface FileMenuProps {
  files: any[];
  onEdit: () => void;
  onClose: () => void;
  top?: number;
  left?: number;
  navigate: boolean;
  origin: string;
  parentId?: string;
  canEdit?: boolean;
  canRestore?: boolean;
}

function FileMenu(props: FileMenuProps) {
  const isLibPage = props.origin === "libraries";
  const isSearchPage = props.origin === "search";
  const top = props.top ?? 0;
  const left = props.left ?? 0;

  const file = props.files[0];
  const fileCount = props.files.length;
  const multi = fileCount > 1;

  const currentTeamId = ctx.useCurrentTeamId();
  const [teams, setTeams] = useState<Record<string, any> | null>(null);

  const currentTeam = teams?.[currentTeamId];
  const otherTeams = teams ? Object.values(teams).filter((t: any) => t.id !== currentTeamId) : [];
  const fileProjectIds = new Set(props.files.map((f: any) => f.projectId));
  const currentProjects = currentTeam?.projects?.filter((p: any) => !fileProjectIds.has(p.id)) || [];

  useEffect(() => {
    const subscription = rp.cmd!("get-all-projects")
      .pipe(rx.map(groupByTeam))
      .subscribe((result: Record<string, any>) => setTeams(result));

    return () => rx.dispose!(subscription);
  }, []);

  useEffect(() => {
    st.emit!(ptk.dataEvent("dropdown/open", { id: "file-menu" }));

    const stream = st.stream
      .pipe(
        rx.filter(ptk.typeFilter("dropdown/open")),
        rx.map((e: any) => e),
        rx.filter((e: any) => e.id !== "file-menu"),
        rx.take(1)
      );

    const subs = rx.subscribe(null, null, props.onClose, stream);

    return () => rx.dispose!(subs);
  }, [props.onClose]);

  const onNewTab = useCallback(() => {
    st.emit!(dcm.goToWorkspace({
      fileId: file.id,
      [rt.newWindow]: true
    }));
  }, [file.id]);

  const onDuplicate = useCallback(() => {
    props.files.forEach((f) => st.emit!(dd.duplicateFile(f)));
    st.emit!(ntf.success(tr("dashboard.success-duplicate-file", i18n.c(fileCount))));
  }, [props.files, fileCount]);

  const onDeleteAccept = useCallback(() => {
    props.files.forEach((f) => st.emit!(dd.deleteFile(f)));
    st.emit!(
      ntf.success(tr("dashboard.success-delete-file", i18n.c(fileCount))),
      dd.clearSelectedFiles()
    );
  }, [props.files, fileCount]);

  const onDelete = useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event);
    const numShared = props.files.filter((f: any) => f.isShared);

    if (numShared.length > 0) {
      st.emit!(modal.show({
        type: "delete-shared-libraries",
        origin: "delete",
        ids: new Set(props.files.map((f: any) => f.id)),
        onAccept: onDeleteAccept,
        countLibraries: numShared.length
      }));
    } else if (multi) {
      st.emit!(modal.show({
        type: "confirm",
        title: tr("modals.delete-file-multi-confirm.title", fileCount),
        message: tr("modals.delete-file-multi-confirm.message", fileCount),
        acceptLabel: tr("modals.delete-file-multi-confirm.accept", fileCount),
        onAccept: onDeleteAccept
      }));
    } else {
      st.emit!(modal.show({
        type: "confirm",
        title: tr("modals.delete-file-confirm.title"),
        message: tr("modals.delete-file-confirm.message"),
        acceptLabel: tr("modals.delete-file-confirm.accept"),
        onAccept: onDeleteAccept
      }));
    }
  }, [props.files, multi, fileCount, onDeleteAccept]);

  const onMoveSuccess = useCallback((teamId: string, projectId: string) => {
    if (multi) {
      st.emit!(ntf.success(tr("dashboard.success-move-files")));
    } else {
      st.emit!(ntf.success(tr("dashboard.success-move-file")));
    }

    if (props.navigate || teamId !== currentTeamId) {
      st.emit!(dcm.goToDashboardFiles({
        projectId: projectId,
        teamId: teamId
      }));
    } else {
      st.emit!(dd.fetchRecentFiles(teamId), dd.clearSelectedFiles());
    }
  }, [multi, props.navigate, currentTeamId]);

  const onMoveAccept = useCallback((params: any, teamId: string, projectId: string) => {
    st.emit!(dd.moveFiles(
      ptk.withMeta(params, { onSuccess: () => onMoveSuccess(teamId, projectId) })
    ));
  }, [onMoveSuccess]);

  const onMove = useCallback((teamId: string, projectId: string) => {
    const params = {
      ids: new Set(props.files.map((f: any) => f.id)),
      projectId: projectId
    };

    return () => {
      const numShared = props.files.filter((f: any) => f.isShared);
      if (numShared.length > 0 && teamId !== currentTeamId) {
        st.emit!(modal.show({
          type: "delete-shared-libraries",
          origin: "move",
          ids: new Set(props.files.map((f: any) => f.id)),
          onAccept: () => onMoveAccept(params, teamId, projectId),
          countLibraries: numShared.length
        }));
      } else {
        onMoveAccept(params, teamId, projectId);
      }
    };
  }, [props.files, currentTeamId, onMoveAccept]);

  const addShared = useCallback(() => {
    st.emit!(dd.setFileShared({ ...file, isShared: true }));
  }, [file]);

  const delShared = useCallback(() => {
    props.files.forEach((f) => st.emit!(dd.setFileShared({ ...f, isShared: false })));
  }, [props.files]);

  const onAddShared = useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event);
    st.emit!(dcm.showSharedDialog(file.id, addShared));
  }, [file.id, addShared]);

  const onDelShared = useCallback((event: React.MouseEvent) => {
    dom.preventDefault(event);
    dom.stopPropagation(event);
    st.emit!(modal.show({
      type: "delete-shared-libraries",
      origin: "unpublish",
      ids: new Set(props.files.map((f: any) => f.id)),
      onAccept: delShared,
      countLibraries: fileCount
    }));
  }, [props.files, fileCount, delShared]);

  const onExportBinaryFiles = useCallback(() => {
    st.emit!(fexp.openExportDialog(props.files).pipe(
      ptk.withMeta({ [ev.origin]: "dashboard" })
    ) as any);
  }, [props.files]);

  const restoreFn = useCallback(() => {
    st.emit!(dd.restoreFilesImmediately(
      ptk.withMeta(
        {
          teamId: currentTeamId,
          ids: new Set(d.mapId(props.files))
        },
        {
          onSuccess: () => {
            st.emit!(
              ntf.success(tr("dashboard.restore-success-notification", file.name)),
              dd.fetchProjects(currentTeamId),
              dd.fetchDeletedFiles(currentTeamId)
            );
          },
          onError: () => {
            st.emit!(ntf.error(tr("dashboard.errors.error-on-restore-file", file.name)));
          }
        }
      )
    ));
  }, [currentTeamId, file, props.files]);

  const onRestoreImmediately = useCallback(() => {
    st.emit!(modal.show({
      type: "confirm",
      title: tr("dashboard-restore-file-confirmation.title"),
      message: tr("dashboard-restore-file-confirmation.description", file.name),
      acceptLabel: tr("labels.continue"),
      acceptStyle: "primary",
      onAccept: restoreFn
    }));
  }, [file.name, restoreFn]);

  const onDeleteImmediately = useCallback(() => {
    const acceptFn = () => {
      st.emit!(dd.deleteFilesImmediately({
        teamId: currentTeamId,
        ids: new Set(d.mapId(props.files))
      }));
    };

    st.emit!(modal.show({
      type: "confirm",
      title: tr("dashboard.delete-forever-confirmation.title"),
      message: tr("dashboard.delete-file-forever-confirmation.description", file.name),
      acceptLabel: tr("dashboard.delete-forever-confirmation.title"),
      onAccept: acceptFn
    }));
  }, [currentTeamId, file.name, props.files]);

  const subOptions = [
    ...currentProjects.map((project: any) => ({
      name: getProjectName(project),
      id: getProjectId(project),
      handler: onMove(currentTeamId, project.id)
    })),
    ...(otherTeams.length > 0 ? [{
      name: tr("dashboard.move-to-other-team"),
      id: "move-to-other-team",
      options: otherTeams.map((team: any) => ({
        name: getTeamName(team),
        id: getProjectId(team),
        options: team.projects.map((subProject: any) => ({
          name: getProjectName(subProject),
          id: getProjectId(subProject),
          handler: onMove(team.id, subProject.id)
        }))
      }))
    }] : [])
  ] as any[];

  let options: any[];
  if (props.canRestore) {
    options = [
      {
        name: tr("dashboard.file-menu.restore-files-option", i18n.c(fileCount)),
        id: "restore-file",
        handler: onRestoreImmediately
      },
      {
        name: tr("dashboard.file-menu.delete-files-permanently-option", i18n.c(fileCount)),
        id: "delete-file",
        handler: onDeleteImmediately
      }
    ];
  } else if (multi) {
    options = [
      ...(props.canEdit ? [{
        name: tr("dashboard.duplicate-multi", fileCount),
        id: "duplicate-multi",
        handler: onDuplicate
      }] : []),
      ...((currentProjects.length > 0 || otherTeams.length > 0) && props.canEdit ? [{
        name: tr("dashboard.move-to-multi", fileCount),
        id: "file-move-multi",
        options: subOptions
      }] : []),
      {
        name: tr("dashboard.export-binary-multi", fileCount),
        id: "file-binary-export-multi",
        handler: onExportBinaryFiles
      },
      ...(file.isShared && props.canEdit ? [{
        name: tr("labels.unpublish-multi-files", fileCount),
        id: "file-unpublish-multi",
        handler: onDelShared
      }] : []),
      ...(!isLibPage && props.canEdit ? [
        { name: "separator" as const },
        {
          name: tr("labels.delete-multi-files", fileCount),
          id: "file-delete-multi",
          handler: onDelete
        }
      ] : [])
    ];
  } else {
    options = [
      {
        name: tr("dashboard.open-in-new-tab"),
        id: "file-open-new-tab",
        handler: onNewTab
      },
      ...(!isSearchPage && props.canEdit ? [{
        name: tr("labels.rename"),
        id: "file-rename",
        handler: props.onEdit
      }] : []),
      ...(!isSearchPage && props.canEdit ? [{
        name: tr("dashboard.duplicate"),
        id: "file-duplicate",
        handler: onDuplicate
      }] : []),
      ...(!isLibPage && !isSearchPage && (currentProjects.length > 0 || otherTeams.length > 0) && props.canEdit ? [{
        name: tr("dashboard.move-to"),
        id: "file-move-to",
        options: subOptions
      }] : []),
      ...(!isSearchPage && props.canEdit ? (
        file.isShared ? {
          name: tr("dashboard.unpublish-shared"),
          id: "file-del-shared",
          handler: onDelShared
        } : {
          name: tr("dashboard.add-shared"),
          id: "file-add-shared",
          handler: onAddShared
        }
      ) : []),
      { name: "separator" as const },
      {
        name: tr("dashboard.download-binary-file"),
        id: "download-binary-file",
        handler: onExportBinaryFiles
      },
      ...(!isLibPage && !isSearchPage && props.canEdit ? [
        { name: "separator" as const },
        {
          name: tr("labels.delete"),
          id: "file-delete",
          handler: onDelete
        }
      ] : [])
    ];
  }

  return (
    <ContextMenu
      onClose={props.onClose}
      fixed={top !== 0 || left !== 0}
      show={true}
      minWidth={true}
      top={top}
      left={left}
      options={options}
      origin={props.parentId}
    />
  );
}

export { FileMenu };