// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from "react";
import { useCallback, useState, useEffect, useRef } from "react";
import * as gpt from "app.common.geom.point";
import * as ct from "app.common.time";
import * as dcm from "app.main.data.common";
import * as dd from "app.main.data.dashboard";
import * as sc from "app.main.data.dashboard.shortcuts";
import * as ev from "app.main.data.event";
import * as modal from "app.main.data.modal";
import * as dpj from "app.main.data.project";
import * as refs from "app.main.refs";
import * as st from "app.main.store";
import { Deleted } from "app.main.ui.dashboard.deleted";
import { LineGrid } from "app.main.ui.dashboard.grid";
import { InlineEdition } from "app.main.ui.dashboard.inline-edition";
import { PinButton } from "app.main.ui.dashboard.pin-button";
import { ProjectMenu } from "app.main.ui.dashboard.project-menu";
import { EmptyPlaceholder } from "app.main.ui.ds.product.empty-placeholder";
import * as hooks from "app.main.ui.hooks";
import * as deprecatedIcon from "app.main.ui.icons";
import * as dom from "app.util.dom";
import * as i18n from "app.util.i18n";
import { tr } from "app.util.i18n";
import * as kbd from "app.util.keyboard";
import * as storage from "app.util.storage";
import * as str from "cuerdas.core";
import * as l from "okulary.core";
import * as ptk from "potok.v2.core";

const showMoreIcon = deprecatedIcon.iconXref("arrow", "show-more-icon");
const closeIcon = deprecatedIcon.iconXref("close", "close-icon");
const addIcon = deprecatedIcon.iconXref("add", "add-icon");
const menuIcon = deprecatedIcon.iconXref("menu", "menu-icon");

interface HeaderProps {
  canEdit?: boolean;
}

const Header = React.memo(function Header(props: HeaderProps) {
  const onClick = useCallback(() => {
    st.emit!(dd.createProject());
  }, []);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <header className={cssClass({ "dashboard-header": true })} data-testid="dashboard-header">
      <div id="dashboard-projects-title" className={cssClass({ "dashboard-title": true })}>
        <h1>{tr("dashboard.projects-title")}</h1>
      </div>
      {props.canEdit && (
        <button
          className={cssClass({ "btn-secondary": true, "btn-small": true })}
          onClick={onClick}
          data-testid="new-project-button"
        >
          {tr("dashboard.new-project")}
        </button>
      )}
    </header>
  );
});

interface TeamHeroProps {
  team: any;
  onClose: () => void;
}

const TeamHero = React.memo(function TeamHero(props: TeamHeroProps) {
  const onNavMembersClick = useCallback(() => {
    st.emit!(dcm.goToDashboardMembers());
  }, []);

  const onInvite = useCallback(() => {
    st.emit!(modal.show({
      type: "invite-members",
      team: props.team,
      origin: "hero"
    }));
  }, [props.team]);

  const onClose = useCallback((event: React.MouseEvent) => {
    dom.preventDefault(event);
    props.onClose();
  }, [props.onClose]);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <div className={cssClass({ "team-hero": true })}>
      <div className={cssClass({ "img-wrapper": true })}>
        <img src="images/deco-team-banner.png" border={0} role="presentation" />
      </div>
      <div className={cssClass({ text: true })}>
        <div className={cssClass({ title: true })}>{tr("dasboard.team-hero.title")}</div>
        <div className={cssClass({ info: true })}>
          <span>{tr("dasboard.team-hero.text")}</span>
          <a onClick={onNavMembersClick}>{tr("dasboard.team-hero.management")}</a>
        </div>
        <button className={cssClass({ "btn-primary": true, invite: true })} onClick={onInvite}>
          {tr("onboarding.choice.team-up.invite-members")}
        </button>
      </div>

      <button
        className={cssClass({ close: true })}
        onClick={onClose}
        aria-label={tr("labels.close")}
      >
        {closeIcon}
      </button>
    </div>
  );
});

interface ProjectItemProps {
  project: any;
  isFirst?: boolean;
  team: any;
  files: any[];
  canEdit?: boolean;
}

const ProjectItem = React.memo(function ProjectItem(props: ProjectItemProps) {
  const projectId = props.project.id;
  const teamId = props.team.id;

  const fileCount = props.project.count || 0;
  const isDraft = props.project.isDefault;
  const empty = !props.canEdit && fileCount === 0;

  const dstate = refs.deref(refs.dashboardLocal);
  const editId = dstate?.projectForEdit;

  const [local, setLocal] = useState({
    menuOpen: false,
    menuPos: null as { x: number; y: number } | null,
    edition: props.project.id === editId
  });

  const rowRef = useRef<HTMLDivElement>(null);
  const limit = hooks.useDynamicGridItemWidth();

  const onNav = useCallback(() => {
    st.emit!(dcm.goToDashboardFiles({ projectId: projectId }));
  }, [projectId]);

  const togglePin = useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event);
    st.emit!(dd.toggleProjectPin(props.project));
  }, [props.project]);

  const onMenuClick = useCallback((event: React.MouseEvent) => {
    dom.preventDefault(event);

    const clientPosition = dom.getClientPosition(event);
    let position: { x: number; y: number };

    if (clientPosition.y == null && clientPosition.x == null) {
      const targetElement = dom.getTarget(event);
      const points = dom.getBoundingRect(targetElement);
      position = gpt.point(points.left, points.top);
    } else {
      position = clientPosition as { x: number; y: number };
    }

    setLocal((prev) => ({ ...prev, menuOpen: true, menuPos: position }));
  }, []);

  const onMenuClose = useCallback(() => {
    setLocal((prev) => ({ ...prev, menuOpen: false }));
  }, []);

  const onEditOpen = useCallback(() => {
    setLocal((prev) => ({ ...prev, edition: true }));
  }, []);

  const onEdit = useCallback((name: string) => {
    const trimmed = str.trim(name);
    if (!str.isEmpty(trimmed)) {
      st.emit!(dd.renameProject({ ...props.project, name: trimmed }).pipe(
        ptk.withMeta({ [ev.origin]: "dashboard" })
      ) as any);
    }
    setLocal((prev) => ({ ...prev, edition: false }));
  }, [props.project]);

  const onFileCreated = useCallback(({ id, data }: any) => {
    const pageId = dm.getIn(data, ["pages", 0]);
    st.emit!(dcm.goToWorkspace({ fileId: id, pageId: pageId }));
  }, []);

  const createFile = useCallback((origin: string) => {
    const mdata = { onSuccess: onFileCreated };
    const params = { projectId: projectId };
    st.emit!(dd.createFile(withMeta(params, mdata)).pipe(
      ptk.withMeta({ [ev.origin]: origin, hasFiles: fileCount > 0 })
    ) as any);
  }, [projectId, onFileCreated, fileCount]);

  const onCreateClick = useCallback((_event: any) => {
    createFile("dashboard:grid-header-plus-button");
  }, [createFile]);

  const onImport = useCallback(() => {
    st.emit!(
      dpj.fetchFiles(projectId),
      dd.fetchRecentFiles(teamId),
      dd.fetchProjects(teamId),
      dd.clearSelectedFiles()
    );
  }, [projectId, teamId]);

  const handleCreateClick = useCallback((event: React.KeyboardEvent) => {
    if (kbd.enter(event)) {
      onCreateClick(event);
    }
  }, [onCreateClick]);

  const handleMenuClick = useCallback((event: React.KeyboardEvent) => {
    if (kbd.enter(event)) {
      dom.stopPropagation(event);
      onMenuClick(event as any);
    }
  }, [onMenuClick]);

  const titleWidth = 100 / limit;

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <article className={cssClass({ "dashboard-project-row": true, first: props.isFirst })}>
      <header className={cssClass({ project: true })}>
        <div className={cssClass({ "project-name-wrapper": true })}>
          {local.edition ? (
            <InlineEdition
              content={props.project.name}
              onEnd={onEdit}
              maxLength={250}
            />
          ) : (
            <h2
              onClick={onNav}
              style={{ maxWidth: `${titleWidth}%` }}
              className={cssClass({ "project-name": true })}
              title={props.project.isDefault ? tr("labels.drafts") : props.project.name}
              onContextMenu={props.canEdit ? onMenuClick : undefined}
            >
              {props.project.isDefault ? tr("labels.drafts") : props.project.name}
            </h2>
          )}

          <div className={cssClass({ "info-wrapper": true })}>
            <div>
              <span className={cssClass({ info: true })}>
                {str(tr("labels.num-of-files", i18n.c(fileCount)))}
              </span>

              <span className={cssClass({ "recent-files-row-title-info": true })}>
                {", "}
                {ct.timeago(props.project.modifiedAt)}
              </span>
            </div>

            <div className={cssClass({
              "project-actions": true,
              "pinned-project": props.project.isPinned
            })}>
              {!props.project.isDefault && (
                <PinButton
                  className={cssClass({ "pin-button": true })}
                  isPinned={props.project.isPinned}
                  onClick={togglePin}
                  tabIndex={0}
                />
              )}

              {props.canEdit && (
                <button
                  className={cssClass({ "add-file-btn": true })}
                  onClick={onCreateClick}
                  title={tr("dashboard.new-file")}
                  aria-label={tr("dashboard.new-file")}
                  data-testid="project-new-file"
                  onKeyDown={handleCreateClick}
                >
                  {addIcon}
                </button>
              )}

              {props.canEdit && (
                <button
                  className={cssClass({ "options-btn": true })}
                  onClick={onMenuClick}
                  title={tr("dashboard.options")}
                  aria-label={tr("dashboard.options")}
                  data-testid="project-options"
                  onKeyDown={handleMenuClick}
                >
                  {menuIcon}
                </button>
              )}
            </div>

            {props.canEdit && (
              <ProjectMenu
                project={props.project}
                show={local.menuOpen}
                left={(local.menuPos?.x ?? 0) + 24}
                top={local.menuPos?.y ?? 0}
                onEdit={onEditOpen}
                onClose={onMenuClose}
                onImport={onImport}
              />
            )}
          </div>
        </div>
      </header>

      <div className={cssClass({ "grid-container": true })} ref={rowRef}>
        {empty ? (
          <EmptyPlaceholder
            title={isDraft ? tr("dashboard.empty-placeholder-drafts-title") : tr("dashboard.empty-placeholder-files-title")}
            className={cssClass({ "placeholder-placement": true })}
            type={1}
            subtitle={isDraft ? tr("dashboard.empty-placeholder-drafts-subtitle") : tr("dashboard.empty-placeholder-files-subtitle")}
          />
        ) : (
          <LineGrid
            project={props.project}
            team={props.team}
            files={props.files}
            createFn={createFile}
            canEdit={props.canEdit}
            limit={limit}
          />
        )}
      </div>

      {limit > 0 && fileCount > limit && (
        <button
          className={cssClass({ "show-more": true })}
          onClick={onNav}
          tabIndex={0}
          onKeyDown={(event) => {
            if (kbd.enter(event)) {
              onNav();
            }
          }}
        >
          <span className={cssClass({ "placeholder-label": true })}>
            {tr("dashboard.show-all-files")}
          </span>
          {showMoreIcon}
        </button>
      )}
    </article>
  );
});

const refRecentFiles = l.derived("recent-files", st.state);

interface ProjectsSectionProps {
  team: any;
  projects: any[];
  profile: any;
}

function ProjectsSection(props: ProjectsSectionProps) {
  const teamId = props.team.id;

  const recentMap = refs.deref(refRecentFiles);
  const permissions = props.team.permissions;

  const canEdit = permissions.canEdit;
  const canInvite = permissions.isOwner || permissions.isAdmin;

  const [showTeamHero, setShowTeamHero] = useState(() => {
    return storage.getGlobal("show-team-hero") ?? true;
  });

  const myPenpot = props.profile.defaultTeamId === teamId;
  const defaultTeam = props.team.isDefault;

  const showDeleted = permissions.canEdit;

  const filteredProjects = props.projects
    .filter((p: any) => !p.deletedAt)
    .sort((a: any, b: any) => b.modifiedAt - a.modifiedAt);

  const onClose = useCallback(() => {
    setShowTeamHero(false);
    st.emit!(ptk.dataEvent(ev.event, {
      name: "dont-show-team-up-hero",
      origin: "dashboard"
    }));
  }, []);

  useEffect(() => {
    storage.setGlobal("show-team-hero", showTeamHero);
  }, [showTeamHero]);

  useEffect(() => {
    const tname = props.team.isDefault
      ? tr("dashboard.your-penpot")
      : props.team.name;
    dom.setHtmlTitle(tr("title.dashboard.projects", tname));
  }, [props.team]);

  useEffect(() => {
    st.emit!(dd.fetchRecentFiles(teamId), dd.clearSelectedFiles());
  }, [teamId]);

  hooks.useShortcuts("dashboard", sc.shortcutsProjects);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  if (!filteredProjects.length) return null;

  return (
    <>
      <Header canEdit={canEdit} />
      <div className={cssClass({ "projects-container": true })}>
        <>
          {showTeamHero && canInvite && !defaultTeam && (
            <TeamHero team={props.team} onClose={onClose} />
          )}

          <div className={cssClass({
            "dashboard-container": true,
            "no-bg": true,
            "dashboard-projects": true,
            "with-team-hero": !myPenpot && !defaultTeam && showTeamHero && canInvite
          })}>
            {showDeleted && (
              <Deleted.Menu teamId={teamId} section="dashboard-recent" />
            )}

            {filteredProjects.map((project: any) => {
              const files = recentMap
                ? Object.values(recentMap)
                    .filter((f: any) => f.projectId === project.id)
                    .sort((a: any, b: any) => b.modifiedAt - a.modifiedAt)
                : [];

              return (
                <ProjectItem
                  key={project.id}
                  project={project}
                  team={props.team}
                  files={files}
                  canEdit={canEdit}
                  isFirst={project === filteredProjects[0]}
                />
              );
            })}
          </div>
        </>
      </div>
    </>
  );
}

export { ProjectsSection };