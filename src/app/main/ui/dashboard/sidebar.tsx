// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from "react";
import { useCallback, useState, useEffect, useRef, useMemo } from "react";
import * as d from "app.common.data";
import * as dm from "app.common.data.macros";
import * as uuid from "app.common.uuid";
import * as cf from "app.config";
import * as da from "app.main.data.auth";
import * as dcm from "app.main.data.common";
import * as dd from "app.main.data.dashboard";
import * as ev from "app.main.data.event";
import * as modal from "app.main.data.modal";
import * as ntf from "app.main.data.notifications";
import * as dtm from "app.main.data.team";
import * as refs from "app.main.refs";
import * as rt from "app.main.router";
import * as st from "app.main.store";
import { DropdownMenu, DropdownMenuItem } from "app.main.ui.components.dropdown-menu";
import { Link } from "app.main.ui.components.link";
import { CommentsIcon, CommentsSection } from "app.main.ui.dashboard.comments";
import { InlineEdition } from "app.main.ui.dashboard.inline-edition";
import { ProjectMenu } from "app.main.ui.dashboard.project-menu";
import {
  DashboardCta,
  getSubscriptionType,
  MenuTeamIcon,
  showSubscriptionDashboardBanner,
  SubscriptionSidebar
} from "app.main.ui.dashboard.subscription";
import { Icon } from "app.main.ui.ds.foundations.assets.icon";
import * as deprecatedIcon from "app.main.ui.icons";
import * as dom from "app.util.dom";
import * as dnd from "app.util.dom.dnd";
import * as i18n from "app.util.i18n";
import { tr } from "app.util.i18n";
import * as kbd from "app.util.keyboard";
import * as ts from "app.util.timers";
import * as rx from "beicon.v2.core";
import * as str from "cuerdas.core";
import * as ptk from "potok.v2.core";

const clearSearchIcon = deprecatedIcon.iconXref("delete-text", "clear-search-icon");
const searchIcon = deprecatedIcon.iconXref("search", "search-icon");
const tickIcon = deprecatedIcon.iconXref("tick", "tick-icon");
const logoIcon = deprecatedIcon.iconXref("logo", "logo-icon");
const addIcon = deprecatedIcon.iconXref("add", "add-icon");
const arrowIcon = deprecatedIcon.iconXref("arrow", "arrow-icon");
const menuIcon = deprecatedIcon.iconXref("menu", "menu-icon");
const pinIcon = deprecatedIcon.iconXref("pin", "pin-icon");
const exitIcon = deprecatedIcon.iconXref("exit", "exit-icon");

interface SidebarProjectProps {
  item: any;
  isSelected?: boolean;
}

function SidebarProject(props: SidebarProjectProps) {
  const dstate = refs.deref(refs.dashboardLocal);
  const selectedFiles = dstate?.selectedFiles;
  const selectedProject = dstate?.selectedProject;
  const editId = dstate?.projectForEdit;

  const [local, setLocal] = useState(() => ({
    menuOpen: false,
    menuPos: null as { x: number; y: number } | null,
    edition: props.item.id === editId,
    dragging: false
  }));

  const projectId = props.item.id;

  const onClick = useCallback(() => {
    st.emit!(dcm.goToDashboardFiles({ projectId }));
  }, [projectId]);

  const onKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (kbd.enter(event)) {
      st.emit!(dcm.goToDashboardFiles({ projectId }));
      ts.schedule(() => {
        const title = dom.getElement(String(projectId));
        if (title) {
          dom.setAttribute(title, "tabindex", "0");
          dom.focus!(title);
          dom.setAttribute(title, "tabindex", "-1");
        }
      });
    }
  }, [projectId]);

  const onMenuClick = useCallback((event: React.MouseEvent) => {
    const position = dom.getClientPosition(event);
    dom.preventDefault(event);
    setLocal((prev) => ({ ...prev, menuOpen: true, menuPos: position }));
  }, []);

  const onMenuClose = useCallback(() => {
    setLocal((prev) => ({ ...prev, menuOpen: false }));
  }, []);

  const onEditOpen = useCallback(() => {
    setLocal((prev) => ({ ...prev, edition: true }));
  }, []);

  const onEdit = useCallback((name: string) => {
    if (!str.blank(name)) {
      st.emit!(dd.renameProject({ ...props.item, name }).pipe(
        ptk.withMeta({ [ev.origin]: "dashboard:sidebar" })
      ) as any);
    }
    setLocal((prev) => ({ ...prev, edition: false }));
  }, [props.item]);

  const onDragEnter = useCallback((e: React.DragEvent) => {
    if (dnd.hasType(e, "penpot/files")) {
      dom.preventDefault(e);
      if (!dnd.fromChild(e) && selectedProject !== props.item.id) {
        setLocal((prev) => ({ ...prev, dragging: true }));
      }
    }
  }, [selectedProject, props.item.id]);

  const onDragOver = useCallback((e: React.DragEvent) => {
    if (dnd.hasType(e, "penpot/files")) {
      dom.preventDefault(e);
    }
  }, []);

  const onDragLeave = useCallback((e: React.DragEvent) => {
    if (!dnd.fromChild(e)) {
      setLocal((prev) => ({ ...prev, dragging: false }));
    }
  }, []);

  const onDropSuccess = useCallback(() => {
    st.emit!(dcm.goToDashboardFiles({ projectId }), ntf.success(tr("dashboard.success-move-file")));
  }, [projectId]);

  const onDrop = useCallback(() => {
    setLocal((prev) => ({ ...prev, dragging: false }));
    if (selectedProject !== props.item.id) {
      const data = {
        ids: selectedFiles,
        projectId: props.item.id
      };
      const mdata = { onSuccess: onDropSuccess };
      st.emit!(dd.moveFiles(ptk.withMeta(data, mdata) as any));
    }
  }, [selectedProject, selectedFiles, props.item.id, onDropSuccess]);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <>
      <li
        tabIndex={0}
        className={cssClass({
          "project-element": true,
          "sidebar-nav-item": true,
          current: props.isSelected,
          dragging: local.dragging
        })}
        onClick={onClick}
        onKeyDown={onKeyDown}
        onDoubleClick={onEditOpen}
        onContextMenu={onMenuClick}
        onDragEnter={onDragEnter}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        {local.edition ? (
          <InlineEdition content={props.item.name} onEnd={onEdit} />
        ) : (
          <span className={cssClass({ "element-title": true })}>{props.item.name}</span>
        )}
      </li>
      <ProjectMenu
        project={props.item}
        show={local.menuOpen}
        left={local.menuPos?.x ?? 0}
        top={local.menuPos?.y ?? 0}
        onEdit={onEditOpen}
        onClose={onMenuClose}
      />
    </>
  );
}

interface SidebarSearchProps {
  searchTerm?: string;
  teamId?: string;
}

function SidebarSearch(props: SidebarSearchProps) {
  const term = d.nilv(props.searchTerm, "");
  const [focused, setFocused] = useState(false);

  const debouncedEmit = useMemo(() => {
    const fn = (action: any) => st.emit!(action);
    return debounce(fn, 500);
  }, []);

  const onSearchBlur = useCallback(() => {
    setFocused(false);
  }, []);

  const onSearchChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = dom.getTargetVal(event);
    debouncedEmit(dcm.goToDashboardSearch({ term: value }));
  }, [debouncedEmit]);

  const onClearClick = useCallback((e: React.MouseEvent) => {
    debouncedEmit(dcm.goToDashboardSearch());
    const searchInput = dom.getElement("search-input");
    if (searchInput) {
      dom.cleanValue!(searchInput);
      dom.focus!(searchInput);
    }
    dom.preventDefault(e);
    dom.stopPropagation(e);
  }, [debouncedEmit]);

  const onKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (kbd.enter(e)) {
      ts.schedule(() => {
        const searchTitle = dom.getElement("dashboard-search-title");
        if (searchTitle) {
          dom.setAttribute(searchTitle, "tabindex", "0");
          dom.focus!(searchTitle);
          dom.setAttribute(searchTitle, "tabindex", "-1");
        }
      });
      dom.preventDefault(e);
      dom.stopPropagation(e);
    }
  }, []);

  const handleClearSearch = useCallback((event: React.KeyboardEvent) => {
    if (kbd.enter(event)) {
      onClearClick(event as any);
    }
  }, [onClearClick]);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <form className={cssClass({ "sidebar-search": true })}>
      <input
        className={cssClass({ "input-text": true })}
        key="images-search-box"
        id="search-input"
        type="text"
        aria-label={tr("dashboard.search-placeholder")}
        placeholder={tr("dashboard.search-placeholder")}
        defaultValue={term}
        autoComplete="off"
        onBlur={onSearchBlur}
        onChange={onSearchChange}
        onKeyPress={onKeyPress}
        ref={(el) => {
          if (el && el.value !== term) {
            el.value = term;
          }
        }}
      />

      {(focused || term) ? (
        <button
          className={cssClass({ "search-btn": true, "clear-search-btn": true })}
          tabIndex={0}
          aria-label="dashboard-clear-search"
          onClick={onClearClick}
          onKeyDown={handleClearSearch}
        >
          {clearSearchIcon}
        </button>
      ) : (
        <button
          className={cssClass({ "search-btn": true })}
          aria-label="dashboard-search"
          onClick={onClearClick}
        >
          {searchIcon}
        </button>
      )}
    </form>
  );
}

interface TeamsSelectorDropdownProps {
  team: any;
  profile: any;
  teams: any;
  showDefaultTeam?: boolean;
  allowCreateTeams?: boolean;
  allowCreateOrg?: boolean;
  show: boolean;
  onClose: () => void;
}

function TeamsSelectorDropdown(props: TeamsSelectorDropdownProps) {
  const onCreateTeamClick = useCallback(() => {
    st.emit!(modal.show("team-form", {}));
  }, []);

  const onTeamClick = useCallback((event: React.MouseEvent) => {
    const teamId = uuid.parse(dom.getData(dom.getCurrentTarget(event), "value"));
    st.emit!(dcm.goToDashboardRecent({ teamId }));
  }, []);

  const onCreateOrgClick = useCallback(() => {
    if (props.profile?.nitrateLicence) {
      dom.openNewWindow("/control-center/org/create");
    } else {
      st.emit!(modal.show("nitrate-form", {}));
    }
  }, [props.profile]);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <DropdownMenu show={props.show} onClose={props.onClose}>
      {props.showDefaultTeam && (
        <DropdownMenuItem
          onClick={onTeamClick}
          dataValue={props.profile?.defaultTeamId}
          className={cssClass({ "team-dropdown-item": true })}
        >
          <span className={cssClass({ "penpot-icon": true })}>{deprecatedIcon.logoIcon}</span>
          <span className={cssClass({ "team-text": true })}>{tr("dashboard.your-penpot")}</span>
          {props.profile?.defaultTeamId === props.team?.id && tickIcon}
        </DropdownMenuItem>
      )}

      {Object.values(props.teams)
        .filter((t: any) => !t.isDefault)
        .map((teamItem: any) => (
          <DropdownMenuItem
            onClick={onTeamClick}
            dataValue={teamItem.id}
            className={cssClass({ "team-dropdown-item": true })}
            key={String(teamItem.id)}
          >
            <img
              src={cf.resolveTeamPhotoUrl(teamItem)}
              className={cssClass({ "team-picture": true })}
              alt={teamItem.name}
            />

            {cf.flags.includes("subscriptions") &&
            ["unlimited", "enterprise"].includes(getSubscriptionType(teamItem.subscription)) ? (
              <div className={cssClass({ "team-text-with-icon": true })}>
                <span className={cssClass({ "team-text": true })} title={teamItem.name}>
                  {teamItem.name}
                </span>
                <MenuTeamIcon subscriptionType={getSubscriptionType(teamItem.subscription)} />
              </div>
            ) : (
              <span className={cssClass({ "team-text": true })} title={teamItem.name}>
                {teamItem.name}
              </span>
            )}
            {teamItem.id === props.team?.id && tickIcon}
          </DropdownMenuItem>
        ))}

      {props.allowCreateTeams && (
        <>
          <hr role="separator" className={cssClass({ "team-separator": true })} />
          <DropdownMenuItem
            onClick={onCreateTeamClick}
            className={cssClass({ "team-dropdown-item": true, action: true })}
          >
            <span className={cssClass({ "icon-wrapper": true })}>{addIcon}</span>
            <span className={cssClass({ "team-text": true })}>{tr("dashboard.create-new-team")}</span>
          </DropdownMenuItem>
        </>
      )}

      {props.allowCreateOrg && (
        <>
          <hr role="separator" className={cssClass({ "team-separator": true })} />
          <DropdownMenuItem
            onClick={onCreateOrgClick}
            className={cssClass({ "team-dropdown-item": true, action: true })}
          >
            <span className={cssClass({ "icon-wrapper": true })}>{addIcon}</span>
            <span className={cssClass({ "team-text": true })}>{tr("dashboard.create-new-org")}</span>
          </DropdownMenuItem>
        </>
      )}
    </DropdownMenu>
  );
}

interface TeamOptionsDropdownProps {
  team: any;
  profile: any;
  show: boolean;
  onClose: () => void;
}

function TeamOptionsDropdown(props: TeamOptionsDropdownProps) {
  const goMembers = useCallback(() => st.emit!(dcm.goToDashboardMembers()), []);
  const goInvitations = useCallback(() => st.emit!(dcm.goToDashboardInvitations()), []);
  const goWebhooks = useCallback(() => st.emit!(dcm.goToDashboardWebhooks()), []);
  const goSettings = useCallback(() => st.emit!(dcm.goToDashboardSettings()), []);

  const members = props.team?.members;
  const permissions = props.team?.permissions;
  const canRename = permissions?.isOwner || permissions?.isAdmin;

  const onSuccess = useCallback(() => {
    const teamId = props.profile?.defaultTeamId;
    st.emit!(dcm.goToDashboardRecent({ teamId }), modal.hide());
  }, [props.profile]);

  const onError = useCallback((error: any) => {
    const code = error?.code;
    if (code === "no-enough-members-for-leave") {
      return rx.of(ntf.error(tr("errors.team-leave.insufficient-members")));
    }
    if (code === "member-does-not-exist") {
      return rx.of(ntf.error(tr("errors.team-leave.member-does-not-exists")));
    }
    if (code === "owner-cant-leave-team") {
      return rx.of(ntf.error(tr("errors.team-leave.owner-cant-leave")));
    }
    return rx.throw(error);
  }, []);

  const leaveFn = useCallback((memberId?: string) => {
    const params: any = {};
    if (memberId && typeof memberId === "string") {
      params.reassignTo = memberId;
    }
    st.emit!(dtm.leaveCurrentTeam(ptk.withMeta(params, { onSuccess, onError })));
  }, [onSuccess, onError]);

  const deleteFn = useCallback(() => {
    st.emit!(dtm.deleteTeam(ptk.withMeta(props.team, { onSuccess, onError })));
  }, [props.team, onSuccess, onError]);

  const onRenameClicked = useCallback(() => {
    st.emit!(modal.show("team-form", { team: props.team }));
  }, [props.team]);

  const onLeaveClicked = useCallback(() => {
    st.emit!(modal.show({
      type: "confirm",
      title: tr("modals.leave-confirm.title"),
      message: tr("modals.leave-confirm.message"),
      acceptLabel: tr("modals.leave-confirm.accept"),
      onAccept: () => leaveFn()
    }));
  }, [leaveFn]);

  const onLeaveAsOwnerClicked = useCallback(() => {
    st.emit!(dtm.fetchMembers(), modal.show({
      type: "leave-and-reassign",
      profile: props.profile,
      team: props.team,
      accept: leaveFn
    }));
  }, [props.profile, props.team, leaveFn]);

  const leaveAndClose = useCallback(() => {
    st.emit!(modal.show({
      type: "confirm",
      title: tr("modals.leave-confirm.title"),
      message: tr("modals.leave-and-close-confirm.message", props.team.name),
      scdMessage: tr("modals.leave-and-close-confirm.hint"),
      acceptLabel: tr("modals.leave-confirm.accept"),
      onAccept: deleteFn
    }));
  }, [props.team.name, deleteFn]);

  const onDeleteClicked = useCallback(() => {
    st.emit!(modal.show({
      type: "confirm",
      title: tr("modals.delete-team-confirm.title"),
      message: tr("modals.delete-team-confirm.message"),
      acceptLabel: tr("modals.delete-team-confirm.accept"),
      onAccept: deleteFn
    }));
  }, [deleteFn]);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <DropdownMenu show={props.show} onClose={props.onClose}>
      <DropdownMenuItem
        onClick={goMembers}
        className={cssClass({ "team-options-item": true })}
        dataTestid="team-members"
      >
        {tr("labels.members")}
      </DropdownMenuItem>
      <DropdownMenuItem
        onClick={goInvitations}
        className={cssClass({ "team-options-item": true })}
        dataTestid="team-invitations"
      >
        {tr("labels.invitations")}
      </DropdownMenuItem>

      {cf.flags.includes("webhooks") && (
        <DropdownMenuItem
          onClick={goWebhooks}
          className={cssClass({ "team-options-item": true })}
        >
          {tr("labels.webhooks")}
        </DropdownMenuItem>
      )}

      <DropdownMenuItem
        onClick={goSettings}
        className={cssClass({ "team-options-item": true })}
        dataTestid="team-settings"
      >
        {tr("labels.settings")}
      </DropdownMenuItem>

      <hr className={cssClass({ "team-option-separator": true })} />

      {canRename && (
        <DropdownMenuItem
          onClick={onRenameClicked}
          className={cssClass({ "team-options-item": true })}
          dataTestid="rename-team"
        >
          {tr("labels.rename")}
        </DropdownMenuItem>
      )}

      {members?.length === 1 && (
        <DropdownMenuItem
          onClick={leaveAndClose}
          className={cssClass({ "team-options-item": true })}
        >
          {tr("dashboard.leave-team")}
        </DropdownMenuItem>
      )}

      {permissions?.isOwner && members?.length > 1 && (
        <DropdownMenuItem
          onClick={onLeaveAsOwnerClicked}
          className={cssClass({ "team-options-item": true })}
          dataTestid="leave-team"
        >
          {tr("dashboard.leave-team")}
        </DropdownMenuItem>
      )}

      {members?.length > 1 && !permissions?.isOwner && (
        <DropdownMenuItem
          onClick={onLeaveClicked}
          className={cssClass({ "team-options-item": true })}
        >
          {tr("dashboard.leave-team")}
        </DropdownMenuItem>
      )}

      {permissions?.isOwner && (
        <DropdownMenuItem
          onClick={onDeleteClicked}
          className={cssClass({ "team-options-item": true, warning: true })}
          dataTestid="delete-team"
        >
          {tr("dashboard.delete-team")}
        </DropdownMenuItem>
      )}
    </DropdownMenu>
  );
}

interface SidebarOrgSwitchProps {
  team: any;
  profile: any;
}

function SidebarOrgSwitch(props: SidebarOrgSwitchProps) {
  const teamsData = refs.deref(refs.teams);
  const teamsByOrg = d.groupBy(Object.values(teamsData || {}), "organizationId");
  const teams = d.indexBy(
    Object.entries(teamsByOrg).map(([_, entries]) => entries[0]),
    "id"
  );

  const teamWithOrg = { ...props.team, name: `ORG: ${props.team.organizationName}` };

  const [showTeamsMenu, setShowTeamsMenu] = useState(false);

  const onShowTeamsClick = useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event);
    setShowTeamsMenu((prev) => !prev);
  }, []);

  const onShowTeamsKeydown = useCallback((event: React.KeyboardEvent) => {
    if (kbd.space(event) || kbd.enter(event)) {
      dom.preventDefault(event);
      dom.stopPropagation(event);
      const target = dom.getCurrentTarget(event);
      dom.click!(target);
    }
  }, []);

  const closeTeamsMenu = useCallback(() => setShowTeamsMenu(false), []);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <div className={cssClass({ "sidebar-team-switch": true })}>
      <div className={cssClass({ "switch-content": true })}>
        <button
          className={cssClass({ "current-team": true })}
          onClick={onShowTeamsClick}
          onKeyDown={onShowTeamsKeydown}
        >
          <div className={cssClass({ "team-name": true })}>
            <img
              src={cf.resolveTeamPhotoUrl(teamWithOrg)}
              className={cssClass({ "team-picture": true })}
              alt={teamWithOrg.name}
            />
            <span className={cssClass({ "team-text": true })} title={teamWithOrg.name}>
              {teamWithOrg.name}
            </span>
          </div>
          {arrowIcon}
        </button>
      </div>

      <TeamsSelectorDropdown
        show={showTeamsMenu}
        onClose={closeTeamsMenu}
        id="organizations-list"
        className={cssClass({ dropdown: true, "teams-dropdown": true })}
        team={props.team}
        profile={props.profile}
        teams={teams}
        showDefaultTeam={false}
        allowCreateTeams={false}
        allowCreateOrg={true}
      />
    </div>
  );
}

interface SidebarTeamSwitchProps {
  team: any;
  profile: any;
}

function SidebarTeamSwitch(props: SidebarTeamSwitchProps) {
  const nitrate = cf.flags.includes("nitrate");
  const orgId = nitrate ? props.team?.organizationId : null;
  const teamsData = refs.deref(refs.teams);

  const filteredTeams = nitrate
    ? Object.entries(teamsData || {}).filter(([_, t]) => t.organizationId === orgId)
    : Object.entries(teamsData || {});

  const teams = d.indexBy(filteredTeams.map(([_, t]) => t), "id");

  const subscription = props.team?.subscription;
  const subscriptionType = getSubscriptionType(subscription);

  const [showTeamOptionsMenu, setShowTeamOptionsMenu] = useState(false);
  const [showTeamsMenu, setShowTeamsMenu] = useState(false);

  const onShowTeamsClick = useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event);
    setShowTeamsMenu((prev) => !prev);
  }, []);

  const onShowTeamsKeydown = useCallback((event: React.KeyboardEvent) => {
    if (kbd.space(event) || kbd.enter(event)) {
      dom.preventDefault(event);
      dom.stopPropagation(event);
      const target = dom.getCurrentTarget(event);
      dom.click!(target);
    }
  }, []);

  const closeTeamOptionsMenu = useCallback(() => setShowTeamOptionsMenu(false), []);
  const closeTeamsMenu = useCallback(() => setShowTeamsMenu(false), []);

  const onShowOptionsClick = useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event);
    setShowTeamOptionsMenu((prev) => !prev);
  }, []);

  const onShowOptionsKeydown = useCallback((event: React.KeyboardEvent) => {
    if (kbd.space(event) || kbd.enter(event)) {
      dom.preventDefault(event);
      dom.stopPropagation(event);
      const target = dom.getCurrentTarget(event);
      dom.click!(target);
    }
  }, []);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <div className={cssClass({ "sidebar-team-switch": true })}>
      <div className={cssClass({ "switch-content": true })}>
        <button
          className={cssClass({ "current-team": true })}
          onClick={onShowTeamsClick}
          onKeyDown={onShowTeamsKeydown}
        >
          {props.team?.isDefault ? (
            <div className={cssClass({ "team-name": true })}>
              <span className={cssClass({ "penpot-icon": true })}>{deprecatedIcon.logoIcon}</span>
              <span className={cssClass({ "team-text": true })}>{tr("dashboard.default-team-name")}</span>
            </div>
          ) : cf.flags.includes("subscriptions") && !props.team?.isDefault &&
            (subscriptionType === "unlimited" || subscriptionType === "enterprise") ? (
            <div className={cssClass({ "team-name": true })}>
              <img
                src={cf.resolveTeamPhotoUrl(props.team)}
                className={cssClass({ "team-picture": true })}
                alt={props.team.name}
              />
              <div className={cssClass({ "team-text-with-icon": true })}>
                <span className={cssClass({ "team-text": true })} title={props.team.name}>
                  {props.team.name}
                </span>
                <MenuTeamIcon subscriptionType={subscriptionType} />
              </div>
            </div>
          ) : !props.team?.isDefault && subscriptionType !== "unlimited" && subscriptionType !== "enterprise" ? (
            <div className={cssClass({ "team-name": true })}>
              <img
                src={cf.resolveTeamPhotoUrl(props.team)}
                className={cssClass({ "team-picture": true })}
                alt={props.team.name}
              />
              <span className={cssClass({ "team-text": true })} title={props.team.name}>
                {props.team.name}
              </span>
            </div>
          ) : null}

          {arrowIcon}
        </button>

        {!props.team?.isDefault && (
          <button
            className={cssClass({ "switch-options": true })}
            onClick={onShowOptionsClick}
            aria-label="team-management"
            tabIndex={0}
            onKeyDown={onShowOptionsKeydown}
          >
            {menuIcon}
          </button>
        )}
      </div>

      <TeamsSelectorDropdown
        show={showTeamsMenu}
        onClose={closeTeamsMenu}
        id="team-list"
        className={cssClass({ dropdown: true, "teams-dropdown": true })}
        team={props.team}
        profile={props.profile}
        teams={teams}
        showDefaultTeam={true}
        allowCreateTeams={true}
        allowCreateOrg={false}
      />

      <TeamOptionsDropdown
        show={showTeamOptionsMenu}
        onClose={closeTeamOptionsMenu}
        id="team-options"
        className={cssClass({ dropdown: true, "options-dropdown": true })}
        team={props.team}
        profile={props.profile}
      />
    </div>
  );
}

interface SidebarContentProps {
  projects: any[];
  profile: any;
  section: string;
  team: any;
  project: any;
  searchTerm?: string;
  defaultProject: any;
}

function SidebarContent(props: SidebarContentProps) {
  const defaultProjectId = props.defaultProject?.id;
  const teamId = props.team?.id;

  const projectsSection = props.section === "dashboard-recent";
  const fontsSection = props.section === "dashboard-fonts";
  const libsSection = props.section === "dashboard-libraries";
  const draftsSection = props.section === "dashboard-files" && props.project?.id === defaultProjectId;

  const containerRef = useRef<HTMLDivElement>(null);
  const [overflow, setOverflow] = useState(false);

  const goProjects = useCallback(() => st.emit!(dcm.goToDashboardRecent()), []);
  const goProjectsWithKey = useCallback(() => {
    st.emit!(dcm.goToDashboardRecent({ teamId }));
    ts.schedule(() => {
      const projectsTitle = dom.getElement("dashboard-projects-title");
      if (projectsTitle) {
        dom.setAttribute(projectsTitle, "tabindex", "0");
        dom.focus!(projectsTitle);
        dom.setAttribute(projectsTitle, "tabindex", "-1");
      }
    });
  }, [teamId]);

  const goFonts = useCallback(() => st.emit!(dcm.goToDashboardFonts({ teamId })), [teamId]);
  const goFontsWithKey = useCallback(() => {
    st.emit!(dcm.goToDashboardFonts({ teamId }));
    ts.schedule(() => {
      const fontTitle = dom.getElement("dashboard-fonts-title");
      if (fontTitle) {
        dom.setAttribute(fontTitle, "tabindex", "0");
        dom.focus!(fontTitle);
        dom.setAttribute(fontTitle, "tabindex", "-1");
      }
    });
  }, [teamId]);

  const goDrafts = useCallback(() => {
    st.emit!(dcm.goToDashboardFiles({ teamId, projectId: defaultProjectId }));
  }, [teamId, defaultProjectId]);

  const goDraftsWithKey = useCallback(() => {
    st.emit!(dcm.goToDashboardFiles({ teamId, projectId: defaultProjectId }));
    ts.schedule(() => {
      const title = dom.getElement("dashboard-drafts-title");
      if (title) {
        dom.setAttribute(title, "tabindex", "0");
        dom.focus!(title);
        dom.setAttribute(title, "tabindex", "-1");
      }
    });
  }, [teamId, defaultProjectId]);

  const goLibs = useCallback(() => st.emit!(dcm.goToDashboardLibraries({ teamId })), [teamId]);
  const goLibsWithKey = useCallback(() => {
    st.emit!(dcm.goToDashboardLibraries({ teamId }));
    ts.schedule(() => {
      const libsTitle = dom.getElement("dashboard-libraries-title");
      if (libsTitle) {
        dom.setAttribute(libsTitle, "tabindex", "0");
        dom.focus!(libsTitle);
        dom.setAttribute(libsTitle, "tabindex", "-1");
      }
    });
  }, [teamId]);

  const pinnedProjects = useMemo(() => {
    return props.projects
      ?.filter((p: any) => !p.deletedAt && !p.isDefault && p.isPinned)
      ?.sort((a: any, b: any) => a.name.localeCompare(b.name)) || null;
  }, [props.projects]);

  useLayoutEffect(() => {
    const node = containerRef.current;
    if (node) {
      const clientHeight = node.clientHeight;
      const scrollHeight = node.scrollHeight;
      setOverflow(scrollHeight > clientHeight);
    }
  }, [pinnedProjects]);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <>
      <div className={cssClass({ "sidebar-content": true })} ref={containerRef}>
        {cf.flags.includes("nitrate") && (
          <SidebarOrgSwitch team={props.team} profile={props.profile} />
        )}
        <SidebarTeamSwitch team={props.team} profile={props.profile} />

        <SidebarSearch searchTerm={props.searchTerm} teamId={teamId} />

        <div className={cssClass({ "sidebar-content-section": true })}>
          <ul className={cssClass({ "sidebar-nav": true })}>
            <li
              className={cssClass({ "recent-projects": true, "sidebar-nav-item": true, current: projectsSection })}
            >
              <Link action={goProjects} className={cssClass({ "sidebar-link": true })} keyboardAction={goProjectsWithKey}>
                <span className={cssClass({ "element-title": true })}>{tr("labels.projects")}</span>
              </Link>
            </li>

            <li className={cssClass({ current: draftsSection, "sidebar-nav-item": true })}>
              <Link action={goDrafts} className={cssClass({ "sidebar-link": true })} keyboardAction={goDraftsWithKey}>
                <span className={cssClass({ "element-title": true })}>{tr("labels.drafts")}</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className={cssClass({ "sidebar-content-section": true })}>
          <div className={cssClass({ "sidebar-section-title": true })}>
            {tr("labels.sources")}
          </div>
          <ul className={cssClass({ "sidebar-nav": true })}>
            <li className={cssClass({ "sidebar-nav-item": true, current: fontsSection })}>
              <Link
                action={goFonts}
                className={cssClass({ "sidebar-link": true })}
                keyboardAction={goFontsWithKey}
                dataTestid="fonts"
              >
                <span className={cssClass({ "element-title": true })}>{tr("labels.fonts")}</span>
              </Link>
            </li>
            <li className={cssClass({ current: libsSection, "sidebar-nav-item": true })}>
              <Link
                action={goLibs}
                dataTestid="libs-link-sidebar"
                className={cssClass({ "sidebar-link": true })}
                keyboardAction={goLibsWithKey}
              >
                <span className={cssClass({ "element-title": true })}>{tr("labels.shared-libraries")}</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className={cssClass({ "sidebar-content-section": true })} data-testid="pinned-projects">
          <div className={cssClass({ "sidebar-section-title": true })}>
            {tr("labels.pinned-projects")}
          </div>
          {pinnedProjects ? (
            <ul className={cssClass({ "sidebar-nav": true, "pinned-projects": true })}>
              {pinnedProjects.map((item: any) => (
                <SidebarProject
                  key={dm.str(item.id)}
                  item={item}
                  id={item.id}
                  teamId={teamId}
                  isSelected={item.id === props.project?.id}
                />
              ))}
            </ul>
          ) : (
            <div className={cssClass({ "sidebar-empty-placeholder": true })}>
              {pinIcon}
              <span className={cssClass({ "empty-text": true })}>{tr("dashboard.no-projects-placeholder")}</span>
            </div>
          )}
        </div>
      </div>
      <div className={cssClass({ separator: true, "overflow-separator": overflow })} />
    </>
  );
}

interface HelpLearningMenuProps {
  onClose: () => void;
  onClick: (section: string) => void;
}

function HelpLearningMenu(props: HelpLearningMenuProps) {
  const handleClickUrl = useCallback((event: React.MouseEvent) => {
    const url = dom.getData(dom.getCurrentTarget(event), "url");
    const eventname = dom.getData(dom.getCurrentTarget(event), "eventname");
    st.emit!(ptk.event(ev.event, { name: eventname, origin: "menu:in-app" }));
    dom.openNewWindow(url);
  }, []);

  const handleFeedbackClick = useCallback(() => {
    props.onClick("settings-feedback");
  }, [props.onClick]);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <DropdownMenu show={true} className={cssClass({ "sub-menu": true, "help-learning": true })} onClose={props.onClose}>
      <DropdownMenuItem
        className={cssClass({ "submenu-item": true })}
        dataUrl="https://help.penpot.app"
        onClick={handleClickUrl}
        dataEventname="explore-help-center-click"
      >
        {tr("labels.help-center")}
      </DropdownMenuItem>

      <DropdownMenuItem
        className={cssClass({ "submenu-item": true })}
        dataUrl="https://penpot.app/learning-center"
        onClick={handleClickUrl}
        dataEventname="explore-learning-center-click"
      >
        {tr("labels.learning-center")}
      </DropdownMenuItem>

      <DropdownMenuItem
        className={cssClass({ "submenu-item": true })}
        dataUrl="https://penpot.app/penpothub"
        onClick={handleClickUrl}
        dataEventname="explore-penpot-hub-click"
      >
        {tr("labels.penpot-hub")}
      </DropdownMenuItem>

      {cf.flags.includes("user-feedback") && (
        <DropdownMenuItem className={cssClass({ "submenu-item": true })} onClick={handleFeedbackClick}>
          {tr("labels.give-feedback")}
        </DropdownMenuItem>
      )}
    </DropdownMenu>
  );
}

interface CommunityContributionsMenuProps {
  onClose: () => void;
}

function CommunityContributionsMenu(props: CommunityContributionsMenuProps) {
  const handleClickUrl = useCallback((event: React.MouseEvent) => {
    const url = dom.getData(dom.getCurrentTarget(event), "url");
    const eventname = dom.getData(dom.getCurrentTarget(event), "eventname");
    st.emit!(ptk.event(ev.event, { name: eventname, origin: "menu:in-app" }));
    dom.openNewWindow(url);
  }, []);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <DropdownMenu show={true} className={cssClass({ "sub-menu": true, community: true })} onClose={props.onClose}>
      <DropdownMenuItem
        className={cssClass({ "submenu-item": true })}
        dataUrl="https://github.com/penpot/penpot"
        onClick={handleClickUrl}
        dataEventname="explore-github-repository-click"
      >
        {tr("labels.github-repo")}
      </DropdownMenuItem>

      <DropdownMenuItem
        className={cssClass({ "submenu-item": true })}
        dataUrl="https://community.penpot.app"
        onClick={handleClickUrl}
        dataEventname="explore-community-click"
      >
        {tr("labels.community")}
      </DropdownMenuItem>
    </DropdownMenu>
  );
}

interface AboutPenpotMenuProps {
  onClose: () => void;
}

function AboutPenpotMenu(props: AboutPenpotMenuProps) {
  const version = cf.version;

  const showReleaseNotes = useCallback((event: React.MouseEvent) => {
    st.emit!(ptk.event(ev.event, { name: "show-release-notes", version: version.main }));
    if (kbd.alt(event) && kbd.mod(event)) {
      st.emit!(modal.show({ type: "onboarding" }));
    } else {
      st.emit!(modal.show({ type: "release-notes", version: version.main }));
    }
  }, [version]);

  const handleClickUrl = useCallback((event: React.MouseEvent) => {
    const url = dom.getData(dom.getCurrentTarget(event), "url");
    const eventname = dom.getData(dom.getCurrentTarget(event), "eventname");
    st.emit!(ptk.event(ev.event, { name: eventname, origin: "menu:in-app" }));
    dom.openNewWindow(url);
  }, []);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <DropdownMenu show={true} className={cssClass({ "sub-menu": true, about: true })} onClose={props.onClose}>
      <DropdownMenuItem className={cssClass({ "submenu-item": true })} onClick={showReleaseNotes}>
        {tr("labels.version-notes", version.base)}
      </DropdownMenuItem>

      <DropdownMenuItem
        className={cssClass({ "submenu-item": true })}
        dataUrl="https://github.com/penpot/penpot/blob/develop/CHANGES.md"
        onClick={handleClickUrl}
        dataEventname="explore-changelog-click"
      >
        {tr("labels.penpot-changelog")}
      </DropdownMenuItem>

      <DropdownMenuItem
        className={cssClass({ "submenu-item": true })}
        dataUrl="https://penpot.app/terms"
        onClick={handleClickUrl}
        dataEventname="explore-terms-service-click"
      >
        {tr("auth.terms-of-service")}
      </DropdownMenuItem>
    </DropdownMenu>
  );
}

interface ProfileSectionProps {
  profile: any;
  team: any;
}

function ProfileSection(props: ProfileSectionProps) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [subMenu, setSubMenu] = useState<string | null>(null);
  const [showComments, setShowComments] = useState(false);

  const version = cf.version?.base;

  const closeSubMenu = useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event);
    setSubMenu(null);
  }, []);

  const photo = cf.resolveProfilePhotoUrl(props.profile);

  const onClick = useCallback((section: any, event: React.MouseEvent) => {
    dom.stopPropagation(event);
    setShowProfileMenu(false);
    if (typeof section === "keyword") {
      st.emit!(rt.nav(section));
    } else {
      st.emit!(section);
    }
  }, []);

  const handleHideComments = useCallback(() => setShowComments(false), []);
  const handleShowComments = useCallback(() => setShowComments(true), []);

  const handleClick = useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event);
    setShowProfileMenu((prev) => !prev);
  }, []);

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (kbd.enter(event)) {
      setShowProfileMenu(true);
    }
  }, []);

  const onClose = useCallback(() => setShowProfileMenu(false), []);

  const handleLogoutClick = useCallback((event: React.MouseEvent) => {
    onClick(da.logout(), event);
  }, [onClick]);

  const handleSetProfile = useCallback((event: React.MouseEvent) => {
    onClick("settings-profile", event);
  }, [onClick]);

  const onMenuClick = useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event);
    const menu = dom.getData(dom.getCurrentTarget(event), "testid");
    setSubMenu(menu ? menu : null);
  }, []);

  const onPowerUpClick = useCallback(() => {
    st.emit!(ptk.event(ev.event, { name: "explore-pricing-click", origin: "dashboard", section: "sidebar" }));
    dom.openNewWindow("https://penpot.app/pricing");
  }, []);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <>
      {cf.flags.includes("subscriptions") && (
        showSubscriptionDashboardBanner(props.profile) ? (
          <DashboardCta profile={props.profile} />
        ) : (
          <SubscriptionSidebar profile={props.profile} />
        )
      )}

      {cf.flags.includes("subscriptions-old") && (
        <button className={cssClass({ "upgrade-plan-section": true })} onClick={onPowerUpClick}>
          <div className={cssClass({ "penpot-free": true })}>
            <span>{tr("dashboard.upgrade-plan.penpot-free")}</span>
            <span className={cssClass({ "no-limits": true })}>{tr("dashboard.upgrade-plan.no-limits")}</span>
          </div>
          <div className={cssClass({ "power-up": true })}>
            {tr("subscription.dashboard.upgrade-plan.power-up")}
          </div>
        </button>
      )}

      {props.team && props.profile && (
        <CommentsSection
          profile={props.profile}
          team={props.team}
          show={showComments}
          onShowComments={handleShowComments}
          onHideComments={handleHideComments}
        />
      )}

      <div className={cssClass({ "profile-section": true })}>
        <button
          className={cssClass({ profile: true })}
          tabIndex={0}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          data-testid="profile-btn"
        >
          <img src={photo} className={cssClass({ "profile-img": true })} alt={props.profile?.fullname} />
          <span className={cssClass({ "profile-fullname": true })}>{props.profile?.fullname}</span>
        </button>

        <DropdownMenu
          onClose={onClose}
          show={showProfileMenu}
          id="profile-menu"
          className={cssClass({ profile: true, dropdown: true })}
        >
          <DropdownMenuItem
            className={cssClass({ "profile-dropdown-item": true })}
            onClick={handleSetProfile}
            dataTestid="profile-profile-opt"
          >
            {tr("labels.your-account")}
          </DropdownMenuItem>

          <li className={cssClass({ "profile-separator": true })} />

          <DropdownMenuItem
            className={cssClass({ "profile-dropdown-item": true })}
            onClick={onMenuClick}
            onKeyDown={(event: React.KeyboardEvent) => {
              if (kbd.enter(event)) onMenuClick(event);
            }}
            onPointerEnter={onMenuClick}
            dataTestid="help-learning"
            id="help-learning"
          >
            <span className={cssClass({ "item-name": true })}>{tr("labels.help-learning")}</span>
            <Icon iconId="i/arrow" className={cssClass({ "open-arrow": true })} />
          </DropdownMenuItem>

          <DropdownMenuItem
            className={cssClass({ "profile-dropdown-item": true })}
            onClick={onMenuClick}
            onKeyDown={(event: React.KeyboardEvent) => {
              if (kbd.enter(event)) onMenuClick(event);
            }}
            onPointerEnter={onMenuClick}
            dataTestid="community-contributions"
            id="community-contributions"
          >
            <span className={cssClass({ "item-name": true })}>{tr("labels.community-contributions")}</span>
            <Icon iconId="i/arrow" className={cssClass({ "open-arrow": true })} />
          </DropdownMenuItem>

          <DropdownMenuItem
            className={cssClass({ "profile-dropdown-item": true })}
            onClick={onMenuClick}
            onKeyDown={(event: React.KeyboardEvent) => {
              if (kbd.enter(event)) onMenuClick(event);
            }}
            onPointerEnter={onMenuClick}
            dataTestid="about-penpot"
            id="about-penpot"
          >
            <div className={cssClass({ "about-penpot": true })}>
              <span className={cssClass({ "item-name": true })}>{tr("labels.about-penpot")}</span>
              <span className={cssClass({ "menu-version": true })} title={version}>{version}</span>
            </div>
            <Icon iconId="i/arrow" className={cssClass({ "open-arrow": true })} />
          </DropdownMenuItem>

          <li className={cssClass({ "profile-separator": true })} />

          <DropdownMenuItem
            className={cssClass({ "profile-dropdown-item": true, "item-with-icon": true })}
            onClick={handleLogoutClick}
            dataTestid="logout-profile-opt"
          >
            {exitIcon}
            {tr("labels.logout")}
          </DropdownMenuItem>
        </DropdownMenu>

        {props.team && props.profile && (
          <CommentsIcon
            profile={props.profile}
            onShowComments={handleShowComments}
          />
        )}
      </div>

      {showProfileMenu && subMenu === "help-learning" && (
        <HelpLearningMenu onClose={closeSubMenu} onClick={onClick} />
      )}

      {showProfileMenu && subMenu === "community-contributions" && (
        <CommunityContributionsMenu onClose={closeSubMenu} />
      )}

      {showProfileMenu && subMenu === "about-penpot" && (
        <AboutPenpotMenu onClose={closeSubMenu} />
      )}
    </>
  );
}

interface SidebarProps {
  team: any;
  profile: any;
}

function Sidebar(props: SidebarProps) {
  const projects = refs.deref(refs/projects);
  const route = refs.deref(refs.route);
  const section = route?.data?.name;
  const project = route?.params?.project;
  const searchTerm = route?.queryParams?.term;
  const defaultProject = refs.deref(refs/default-project);

  const sidebarProps = {
    projects,
    profile: props.profile,
    section,
    team: props.team,
    project,
    searchTerm,
    defaultProject
  };

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <nav className={cssClass({ "dashboard-sidebar": true })} data-testid="dashboard-sidebar">
      <SidebarContent {...sidebarProps} />
      <ProfileSection profile={props.profile} team={props.team} />
    </nav>
  );
}

function debounce<T extends (...args: any[]) => any>(fn: T, ms: number): T {
  let timeoutId: ReturnType<typeof setTimeout>;
  return ((...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), ms);
  }) as T;
}

export { Sidebar };