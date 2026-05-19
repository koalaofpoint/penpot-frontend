// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from "react";
import { useCallback, useState, useEffect, useMemo } from "react";
import * as d from "app.common.data";
import * as dm from "app.common.data.macros";
import * as sm from "app.common.schema";
import * as cfg from "app.config";
import * as dcm from "app.main.data.common";
import * as ev from "app.main.data.event";
import * as modal from "app.main.data.modal";
import * as ntf from "app.main.data.notifications";
import * as dtm from "app.main.data.team";
import * as refs from "app.main.refs";
import * as st from "app.main.store";
import { Dropdown } from "app.main.ui.components.dropdown";
import { FileUploader } from "app.main.ui.components.file-uploader";
import { Forms } from "app.main.ui.components.forms";
import { Button } from "app.main.ui.ds.buttons.button";
import { IconButton } from "app.main.ui.ds.buttons.icon-button";
import { Icon } from "app.main.ui.ds.foundations.assets.icon";
import * as deprecatedIcon from "app.main.ui.icons";
import { BadgeNotification } from "app.main.ui.notifications.badge";
import { ContextNotification } from "app.main.ui.notifications.context-notification";
import { MembersCta, showSubscriptionMembersBanner } from "app.main.ui.dashboard.subscription";
import * as dom from "app.util.dom";
import * as i18n from "app.util.i18n";
import { tr } from "app.util.i18n";
import * as rx from "beicon.v2.core";
import * as str from "cuerdas.core";

const arrowIcon = deprecatedIcon.iconXref("arrow", "arrow-icon");
const menuIcon = deprecatedIcon.iconXref("menu", "menu-icon");
const warningIcon = deprecatedIcon.iconXref("msg-warning", "warning-icon");
const successIcon = deprecatedIcon.iconXref("msg-success", "success-icon");
const imageIcon = deprecatedIcon.iconXref("img", "image-icon");
const userIcon = deprecatedIcon.iconXref("user", "user-icon");
const documentIcon = deprecatedIcon.iconXref("document", "document-icon");
const groupIcon = deprecatedIcon.iconXref("group", "group-icon");

interface HeaderProps {
  section: string;
  team: any;
}

function Header(props: HeaderProps) {
  const onNavMembers = useCallback(() => st.emit!(dcm.goToDashboardMembers()), []);
  const onNavSettings = useCallback(() => st.emit!(dcm.goToDashboardSettings()), []);
  const onNavInvitations = useCallback(() => st.emit!(dcm.goToDashboardInvitations()), []);
  const onNavWebhooks = useCallback(() => st.emit!(dcm.goToDashboardWebhooks()), []);

  const route = refs.deref(refs.route);
  const inviteEmail = route?.queryParams?.inviteEmail;

  const membersSection = props.section === "dashboard-team-members";
  const settingsSection = props.section === "dashboard-team-settings";
  const invitationsSection = props.section === "dashboard-team-invitations";
  const webhooksSection = props.section === "dashboard-team-webhooks";

  const permissions = props.team?.permissions;
  const invitations = props.team?.invitations;

  const onInviteMember = useCallback(() => {
    st.emit!(modal.show({
      type: "invite-members",
      team: props.team,
      origin: "team",
      inviteEmail: inviteEmail
    }));
  }, [props.team, inviteEmail]);

  useEffect(() => {
    if (inviteEmail) {
      onInviteMember();
    }
  }, [inviteEmail, onInviteMember]);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <header className={cssClass({ "dashboard-header": true, team: true })} data-testid="dashboard-header">
      <div className={cssClass({ "dashboard-title": true })}>
        <h1>
          {membersSection && tr("labels.members")}
          {settingsSection && tr("labels.settings")}
          {invitationsSection && tr("labels.invitations")}
          {webhooksSection && tr("labels.webhooks")}
        </h1>
      </div>
      <nav className={cssClass({ "dashboard-header-menu": true })}>
        <ul className={cssClass({ "dashboard-header-options": true })}>
          <li className={membersSection ? cssClass({ active: true }) : ""}>
            <a onClick={onNavMembers}>{tr("labels.members")}</a>
          </li>
          <li className={invitationsSection ? cssClass({ active: true }) : ""}>
            <a onClick={onNavInvitations}>{tr("labels.invitations")}</a>
          </li>
          {cfg.flags.includes("webhooks") && (
            <li className={webhooksSection ? cssClass({ active: true }) : ""}>
              <a onClick={onNavWebhooks}>{tr("labels.webhooks")}</a>
            </li>
          )}
          <li className={settingsSection ? cssClass({ active: true }) : ""}>
            <a onClick={onNavSettings}>{tr("labels.settings")}</a>
          </li>
        </ul>
      </nav>
      <div className={cssClass({ "dashboard-buttons": true })}>
        {(invitationsSection || membersSection) && permissions?.isAdmin && invitations?.length > 0 ? (
          <a
            className={cssClass({ "btn-secondary": true, "btn-small": true })}
            onClick={onInviteMember}
            data-testid="invite-member"
          >
            {tr("dashboard.invite-profile")}
          </a>
        ) : (
          <div className={cssClass({ "blank-space": true })} />
        )}
      </div>
    </header>
  );
}

function getAvailableRoles(permissions: any): { value: string; label: string }[] {
  const roles = [
    { value: "viewer", label: tr("labels.viewer") },
    { value: "editor", label: tr("labels.editor") }
  ];

  if (permissions?.isAdmin) {
    roles.push({ value: "admin", label: tr("labels.admin") });
  }

  return roles;
}

const schemaInviteMemberForm = {
  title: "InviteMemberForm",
  type: "object",
  properties: {
    role: { type: "keyword" },
    emails: { type: "array", items: { type: "string", format: "email" }, minItems: 1 },
    teamId: { type: "string", format: "uuid" }
  }
};

interface InviteMembersModalProps {
  team: any;
  origin: string;
  inviteEmail?: string;
}

function InviteMembersModal(props: InviteMembersModalProps) {
  const members = props.team?.members;
  const perms = props.team?.permissions;
  const teamId = props.team?.id;

  const roles = useMemo(() => getAvailableRoles(perms), [perms]);

  const initial = useMemo(() => {
    if (props.inviteEmail) {
      return { role: "editor", teamId, emails: [props.inviteEmail] };
    }
    return { role: "editor", teamId };
  }, [teamId, props.inviteEmail]);

  const [form, setForm] = useState({ cleanData: { ...initial, emails: new Set(initial.emails || []) } });
  const [errorText, setErrorText] = useState("");

  const currentDataEmails = new Set(form.cleanData.emails);
  const currentMembersEmails = new Set(members.map((m: any) => m.email));

  const onSuccess = useCallback((_form: any, result: any) => {
    if (result.total > 0) {
      st.emit!(ntf.success(tr("notifications.invitation-email-sent")));
    }
    st.emit!(modal.hide(), dtm.fetchMembers(), dtm.fetchInvitations());
  }, []);

  const onError = useCallback((_form: any, cause: any) => {
    const error = cause;
    if (error.type === "validation" && error.code === "profile-is-muted") {
      st.emit!(ntf.error(tr("errors.profile-is-muted")), modal.hide());
    } else if (error.type === "validation" && error.code === "max-invitations-by-request") {
      setErrorText(tr("errors.maximum-invitations-by-request-reached", error.threshold));
    } else if (error.type === "restriction" && error.code === "max-quota-reached") {
      setErrorText(tr("errors.max-quota-reached", error.target));
    } else if (["member-is-muted", "email-has-permanent-bounces", "email-has-complaints"].includes(error.code)) {
      setErrorText(tr("errors.email-spam-or-permanent-bounces", error.email));
    } else {
      st.emit!(ntf.error(tr("errors.generic")), modal.hide());
    }
  }, []);

  const onSubmit = useCallback((formData: any) => {
    const params = formData;
    const mdata = {
      onSuccess: (result: any) => onSuccess(form, result),
      onError: (err: any) => onError(form, err)
    };
    st.emit!(
      dtm.createInvitations(ptk.withMeta(params, { [ev.origin]: props.origin })),
      dtm.fetchInvitations(),
      dtm.fetchMembers()
    );
  }, [props.origin, onSuccess, onError]);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  const hasRepeatedEmails = Array.from(currentDataEmails).some((email) => currentMembersEmails.has(email));

  return (
    <div className={cssClass({ "modal-team-container": true, "hero": props.origin === "hero" })}>
      <Forms.Form onSubmit={onSubmit} form={form}>
        <div className={cssClass({ "modal-title": true })}>
          {tr("modals.invite-team-member.title")}
        </div>

        {props.origin === "workspace" && (
          <div className={cssClass({ "invite-team-member-text": true })}>
            {tr("modals.invite-team-member.text")}
          </div>
        )}

        {errorText !== "" && (
          <ContextNotification content={errorText} level="error" />
        )}

        {hasRepeatedEmails && (
          <ContextNotification content={tr("modals.invite-member.repeated-invitation")} level="warning" />
        )}

        <div className={cssClass({ "role-select": true })}>
          <p className={cssClass({ "role-title": true })}>
            {tr("onboarding.choice.team-up.roles")}
          </p>
          <Forms.Select name="role" options={roles} />
        </div>

        <div className={cssClass({ "invitation-row": true })}>
          <Forms.MultiInput
            type="email"
            className={cssClass({ "email-input": true })}
            name="emails"
            autoFocus={true}
            trim={true}
            validItemFn={(v: string) => sm.parseEmail(v)}
            cautionItemFn={currentMembersEmails}
            label={tr("modals.invite-member.emails")}
          />
        </div>

        <div className={cssClass({ "action-buttons": true })}>
          <Forms.SubmitButton
            label={tr("modals.invite-member-confirm.accept")}
            className={cssClass({ "accept-btn": true })}
            disabled={hasRepeatedEmails && Array.from(currentDataEmails).filter((e) => !currentMembersEmails.has(e)).length === 0}
          />
        </div>
      </Forms.Form>
    </div>
  );
}

interface MemberInfoProps {
  member: any;
  profile: any;
}

function MemberInfo(props: MemberInfoProps) {
  const isYou = props.profile?.id === props.member?.id;

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <>
      <img className={cssClass({ "member-image": true })} src={cfg.resolveProfilePhotoUrl(props.member)} />
      <div className={cssClass({ "member-info": true })}>
        <div className={cssClass({ "member-name": true })}>
          {props.member.name}
          {isYou && <span className={cssClass({ you: true })}>{tr("labels.you")}</span>}
        </div>
        <div className={cssClass({ "member-email": true })}>{props.member.email}</div>
      </div>
    </>
  );
}

interface RolInfoProps {
  member: any;
  team: any;
  onSetAdmin: () => void;
  onSetEditor: () => void;
  onSetOwner: () => void;
  onSetViewer: () => void;
  profile: any;
}

function RolInfo(props: RolInfoProps) {
  const memberIsOwner = props.member?.isOwner;
  const memberIsAdmin = props.member?.isAdmin && !memberIsOwner;
  const memberIsEditor = props.member?.canEdit && !memberIsAdmin && !memberIsOwner;
  const memberIsViewer = !memberIsEditor && !memberIsAdmin && !memberIsOwner;
  const [show, setShow] = useState(false);

  const permissions = props.team?.permissions;
  const isOwner = permissions?.isOwner;
  const isAdmin = permissions?.isAdmin;

  const isYou = props.profile?.id === props.member?.id;

  const canChangeRol = isOwner || isAdmin;
  const notSuperior = (isOwner || (canChangeRol && (memberIsAdmin || memberIsEditor || memberIsViewer))) && !(isYou && isOwner);

  let role = "labels.viewer";
  if (memberIsOwner) role = "labels.owner";
  else if (memberIsAdmin) role = "labels.admin";
  else if (memberIsEditor) role = "labels.editor";

  const onShow = useCallback(() => setShow(true), []);
  const onHide = useCallback(() => setShow(false), []);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <>
      {canChangeRol && notSuperior && !(isYou && isOwner) ? (
        <div
          className={cssClass({ "rol-selector": true, "has-priv": true })}
          role="combobox"
          aria-labelledby="role-label-id"
          onClick={onShow}
        >
          <span className={cssClass({ "rol-label": true })} id="role-label-id">{tr(role)}</span>
          {arrowIcon}
        </div>
      ) : (
        <div className={cssClass({ "rol-selector": true })}>
          <span className={cssClass({ "rol-label": true })}>{tr(role)}</span>
        </div>
      )}

      <Dropdown show={show} onClose={onHide} dropdownId={`member-role-${props.member.id}`}>
        <ul className={cssClass({ "roles-dropdown": true })} role="listbox">
          <li onClick={props.onSetViewer} className={cssClass({ "rol-dropdown-item": true })}>
            {tr("labels.viewer")}
          </li>
          <li onClick={props.onSetEditor} className={cssClass({ "rol-dropdown-item": true })}>
            {tr("labels.editor")}
          </li>
          <li onClick={props.onSetAdmin} className={cssClass({ "rol-dropdown-item": true })}>
            {tr("labels.admin")}
          </li>
          {isOwner && (
            <li onClick={() => props.onSetOwner(props.member)} className={cssClass({ "rol-dropdown-item": true })}>
              {tr("labels.owner")}
            </li>
          )}
        </ul>
      </Dropdown>
    </>
  );
}

interface MemberActionsProps {
  member: any;
  team: any;
  onDelete: () => void;
  onLeave: () => void;
  profile: any;
}

function MemberActions(props: MemberActionsProps) {
  const isOwner = props.member?.isOwner;
  const owner = dm.getIn(props.team, ["permissions", "isOwner"]);
  const admin = dm.getIn(props.team, ["permissions", "isAdmin"]);
  const [show, setShow] = useState(false);
  const isYou = props.profile?.id === props.member?.id;
  const canDelete = owner || admin;

  const onShow = useCallback(() => setShow(true), []);
  const onHide = useCallback(() => setShow(false), []);

  if (!isYou && !(canDelete && !isOwner)) return null;

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <>
      <button className={cssClass({ "menu-btn": true })} onClick={onShow}>
        {menuIcon}
      </button>

      <Dropdown show={show} onClose={onHide} dropdownId={`member-actions-${props.member.id}`}>
        <ul className={cssClass({ "actions-dropdown": true })}>
          {isYou && (
            <li onClick={props.onLeave} className={cssClass({ "action-dropdown-item": true })} key="is-you-option">
              {tr("dashboard.leave-team")}
            </li>
          )}
          {canDelete && !isYou && !(isOwner && !owner) && (
            <li onClick={props.onDelete} className={cssClass({ "action-dropdown-item": true })} key="is-not-you-option">
              {tr("labels.remove-member")}
            </li>
          )}
        </ul>
      </Dropdown>
    </>
  );
}

function setRole(memberId: string, role: "admin" | "editor" | "viewer" | "owner") {
  const params = { memberId, role };
  st.emit!(dtm.updateMemberRole(params));
}

interface TeamMemberProps {
  team: any;
  member: any;
  totalMembers: number;
  profile: any;
}

const TeamMember = React.memo(function TeamMember(props: TeamMemberProps) {
  const memberId = props.member?.id;

  const onSetAdmin = useCallback(() => setRole(memberId, "admin"), [memberId]);
  const onSetEditor = useCallback(() => setRole(memberId, "editor"), [memberId]);
  const onSetViewer = useCallback(() => setRole(memberId, "viewer"), [memberId]);

  const owner = dm.getIn(props.team, ["permissions", "isOwner"]);

  const onSetOwner = useCallback((member: any) => {
    const params = {
      type: "confirm",
      title: tr("modals.promote-owner-confirm.title"),
      message: tr("modals.promote-owner-confirm.message", member.name),
      scdMessage: tr("modals.promote-owner-confirm.hint"),
      acceptLabel: tr("modals.promote-owner-confirm.accept"),
      onAccept: () => setRole(memberId, "owner"),
      acceptStyle: "primary"
    };
    st.emit!(modal.show(params));
  }, [memberId]);

  const onSuccess = useCallback(() => rx.of(dcm.goToDashboardRecent({ teamId: "default" })), []);

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

  const onDeleteAccepted = useCallback(() => {
    st.emit!(dtm.deleteTeam(ptk.withMeta(props.team, { onSuccess, onError })));
  }, [props.team, onSuccess, onError]);

  const onLeaveAccepted = useCallback((leaveMemberId?: string) => {
    const params: any = {};
    if (leaveMemberId && typeof leaveMemberId === "string") {
      params.reassignTo = leaveMemberId;
    }
    st.emit!(dtm.leaveCurrentTeam(ptk.withMeta(params, { onSuccess, onError })));
  }, [onSuccess, onError]);

  const onLeaveAndClose = useCallback(() => {
    st.emit!(modal.show({
      type: "confirm",
      title: tr("modals.leave-confirm.title"),
      message: tr("modals.leave-and-close-confirm.message", props.team.name),
      scdMessage: tr("modals.leave-and-close-confirm.hint"),
      acceptLabel: tr("modals.leave-confirm.accept"),
      onAccept: onDeleteAccepted
    }));
  }, [props.team.name, onDeleteAccepted]);

  const onChangeOwnerAndLeave = useCallback(() => {
    st.emit!(dtm.fetchMembers(), modal.show({
      type: "leave-and-reassign",
      profile: props.profile,
      team: props.team,
      accept: onLeaveAccepted
    }));
  }, [props.profile, props.team, onLeaveAccepted]);

  const onLeave = useCallback(() => {
    st.emit!(modal.show({
      type: "confirm",
      title: tr("modals.leave-confirm.title"),
      message: tr("modals.leave-confirm.message"),
      acceptLabel: tr("modals.leave-confirm.accept"),
      onAccept: onLeaveAccepted
    }));
  }, [onLeaveAccepted]);

  const onDelete = useCallback(() => {
    const onAccept = () => st.emit!(dtm.deleteMember({ memberId }));
    const params = {
      type: "confirm",
      title: tr("modals.delete-team-member-confirm.title"),
      message: tr("modals.delete-team-member-confirm.message"),
      acceptLabel: tr("modals.delete-team-member-confirm.accept"),
      onAccept
    };
    st.emit!(modal.show(params));
  }, [memberId]);

  let finalOnLeave: () => void;
  if (props.totalMembers === 1) {
    finalOnLeave = onLeaveAndClose;
  } else if (owner) {
    finalOnLeave = onChangeOwnerAndLeave;
  } else {
    finalOnLeave = onLeave;
  }

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <div className={cssClass({ "table-row": true })}>
      <div className={cssClass({ "table-field": true, "field-name": true })}>
        <MemberInfo member={props.member} profile={props.profile} />
      </div>

      <div className={cssClass({ "table-field": true, "field-roles": true })}>
        <RolInfo
          member={props.member}
          team={props.team}
          onSetAdmin={onSetAdmin}
          onSetEditor={onSetEditor}
          onSetOwner={onSetOwner}
          onSetViewer={onSetViewer}
          profile={props.profile}
        />
      </div>

      <div className={cssClass({ "table-field": true, "field-actions": true })}>
        <MemberActions
          member={props.member}
          profile={props.profile}
          team={props.team}
          onDelete={onDelete}
          onLeave={finalOnLeave}
        />
      </div>
    </div>
  );
});

interface TeamMembersProps {
  team: any;
  profile: any;
}

function TeamMembers(props: TeamMembersProps) {
  const members = props.team?.members;
  const totalMembers = members?.length || 0;

  const owner = useMemo(() => members?.find((m: any) => m.isOwner), [members]);

  const sortedMembers = useMemo(() => {
    return members
      ?.filter((m: any) => !m.isOwner)
      ?.sort((a: any, b: any) => a.createdAt - b.createdAt) || [];
  }, [members]);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <div className={cssClass({ "dashboard-table": true, "team-members": true })}>
      <div className={cssClass({ "table-header": true })}>
        <div className={cssClass({ "table-field": true, "title-field-name": true })}>{tr("labels.member")}</div>
        <div className={cssClass({ "table-field": true, "title-field-role": true })}>{tr("labels.role")}</div>
      </div>

      <div className={cssClass({ "table-rows": true })}>
        <TeamMember
          member={owner}
          team={props.team}
          profile={props.profile}
          totalMembers={totalMembers}
        />

        {sortedMembers.map((item: any) => (
          <TeamMember
            key={dm.str(item.id)}
            member={item}
            team={props.team}
            profile={props.profile}
            totalMembers={totalMembers}
          />
        ))}
      </div>
    </div>
  );
}

interface TeamMembersPageProps {
  team: any;
  profile: any;
}

function TeamMembersPage(props: TeamMembersPageProps) {
  useEffect(() => {
    dom.setHtmlTitle(
      tr("title.team-members",
        props.team.isDefault ? tr("dashboard.your-penpot") : props.team.name)
    );
  }, [props.team]);

  useEffect(() => {
    st.emit!(dtm.fetchMembers());
  }, []);

  return (
    <>
      <Header section="dashboard-team-members" team={props.team} />
      <section className="dashboard-container dashboard-team-members">
        <TeamMembers team={props.team} profile={props.profile} />

        {cfg.flags.includes("subscriptions") && showSubscriptionMembersBanner(props.team, props.profile) && (
          <MembersCta team={props.team} />
        )}
      </section>
    </>
  );
}

interface InvitationRoleSelectorProps {
  canInvite: boolean;
  role: string;
  status: string;
  onChange: (role: string, event: any) => void;
}

function InvitationRoleSelector(props: InvitationRoleSelectorProps) {
  const [show, setShow] = useState(false);

  let label = tr("labels.viewer");
  if (props.role === "owner") label = tr("labels.owner");
  else if (props.role === "admin") label = tr("labels.admin");
  else if (props.role === "editor") label = tr("labels.editor");

  const onHide = useCallback(() => setShow(false), []);
  const onShow = useCallback(() => setShow(true), []);

  const onChange = useCallback((event: React.MouseEvent) => {
    const role = dom.getData(dom.getCurrentTarget(event), "role");
    props.onChange(role, event);
  }, [props.onChange]);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <>
      {props.canInvite && props.status === "pending" ? (
        <div className={cssClass({ "rol-selector": true, "has-priv": true })} onClick={onShow}>
          <span className={cssClass({ "rol-label": true })}>{label}</span>
          {arrowIcon}
        </div>
      ) : (
        <div className={cssClass({ "rol-selector": true })}>
          <span className={cssClass({ "rol-label": true })}>{label}</span>
        </div>
      )}

      <Dropdown show={show} onClose={onHide} dropdownId="invitation-role-selector">
        <ul className={cssClass({ "roles-dropdown": true })}>
          <li data-role="admin" className={cssClass({ "rol-dropdown-item": true })} onClick={onChange}>
            {tr("labels.admin")}
          </li>
          <li data-role="editor" className={cssClass({ "rol-dropdown-item": true })} onClick={onChange}>
            {tr("labels.editor")}
          </li>
          <li data-role="viewer" className={cssClass({ "rol-dropdown-item": true })} onClick={onChange}>
            {tr("labels.viewer")}
          </li>
        </ul>
      </Dropdown>
    </>
  );
}

interface InvitationActionsProps {
  invitation: any;
  teamId: string;
}

function InvitationActions(props: InvitationActionsProps) {
  const email = props.invitation?.email;

  const onError = useCallback((cause: any) => {
    const error = cause;
    if (error.type === "validation" && error.code === "profile-is-muted") {
      return rx.of(ntf.error(tr("errors.profile-is-muted")));
    }
    if (error.type === "validation" && error.code === "member-is-muted") {
      return rx.of(ntf.error(tr("errors.member-is-muted")));
    }
    if (error.type === "restriction" && ["email-has-permanent-bounces", "email-has-complaints"].includes(error.code)) {
      return rx.of(ntf.error(tr("errors.email-has-permanent-bounces", email)));
    }
    return rx.throw(cause);
  }, [email]);

  const onCopySuccess = useCallback(() => {
    st.emit!(ntf.success(tr("notifications.invitation-link-copied")), modal.hide());
  }, []);

  const onCopy = useCallback(() => {
    const params = { email: props.invitation.email, teamId: props.teamId };
    const mdata = { onSuccess: onCopySuccess, onError };
    st.emit!(dtm.copyInvitationLink(ptk.withMeta(params, { [ev.origin]: "team" })));
  }, [props.invitation.email, props.teamId, onCopySuccess, onError]);

  return (
    <IconButton
      variant="ghost"
      aria-label={tr("labels.copy-invitation-link")}
      onClick={onCopy}
      icon="clipboard"
    />
  );
}

interface InvitationRowProps {
  invitation: any;
  canInvite: boolean;
  teamId: string;
  selected: Set<string>;
  onSelectChange: (email: string) => void;
}

const InvitationRow = React.memo(function InvitationRow(props: InvitationRowProps) {
  const expired = props.invitation?.expired;
  const email = props.invitation?.email;
  const role = props.invitation?.role;
  const status = expired ? "expired" : "pending";
  const type = expired ? "warning" : "default";

  const badgeContent = status === "expired"
    ? tr("labels.expired-invitation")
    : tr("labels.pending-invitation");

  const isSelected = (email: string) => props.selected.has(email);

  const onChange = useCallback((event: React.ChangeEvent) => {
    const emailAttr = dom.getData(dom.getCurrentTarget(event) as HTMLElement, "attr");
    props.onSelectChange(emailAttr);
  }, [props.onSelectChange]);

  const onChangeRole = useCallback((role: string, _event: any) => {
    const params = { email, teamId: props.teamId, role };
    const mdata = { onSuccess: () => st.emit!(dtm.fetchInvitations()) };
    st.emit!(dtm.updateInvitationRole(ptk.withMeta(params, mdata)));
  }, [email, props.teamId]);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <div className={cssClass({ "table-row": true, "table-row-invitations": true })}>
      <div className={cssClass({ "table-field": true, "field-email": true })}>
        <div className={cssClass({ "input-wrapper": true })}>
          <label>
            <span className={cssClass({ "input-checkbox": true, "global/checked": isSelected(email) })}>
              {deprecatedIcon.statusTick}
            </span>
            <input
              type="checkbox"
              id={dm.str("email-", email)}
              data-attr={email}
              value={email}
              checked={isSelected(email)}
              onChange={onChange}
            />
          </label>
          {email}
        </div>
      </div>

      <div className={cssClass({ "table-field": true, "field-roles": true })}>
        <InvitationRoleSelector
          canInvite={props.canInvite}
          role={role}
          status={status}
          onChange={onChangeRole}
        />
      </div>

      <div className={cssClass({ "table-field": true, "field-status": true })}>
        <BadgeNotification type={type} content={badgeContent} />
      </div>

      <div className={cssClass({ "table-field": true, "field-actions": true })}>
        {props.canInvite && (
          <InvitationActions invitation={props.invitation} teamId={props.teamId} />
        )}
      </div>
    </div>
  );
});

interface EmptyInvitationTableProps {
  canInvite: boolean;
  team: any;
}

function EmptyInvitationTable(props: EmptyInvitationTableProps) {
  const route = refs.deref(refs.route);
  const inviteEmail = route?.queryParams?.inviteEmail;

  const onInviteMember = useCallback(() => {
    st.emit!(modal.show({
      type: "invite-members",
      team: props.team,
      origin: "team",
      inviteEmail
    }));
  }, [props.team, inviteEmail]);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <div className={cssClass({ "empty-invitations": true })}>
      <span>{tr("labels.no-invitations")}</span>
      {props.canInvite && (
        <>
          <span>{tr("labels.no-invitations-gather-people")}</span>
          <a
            className={cssClass({ "btn-empty-invitations": true })}
            onClick={onInviteMember}
            data-testid="invite-member"
          >
            {tr("dashboard.invite-profile")}
          </a>
          <div className={cssClass({ "blank-space": true })} />
        </>
      )}
    </div>
  );
}

interface InvitationModalProps {
  selected: any[];
  delete?: boolean;
  onConfirm: () => void;
}

function InvitationModal(props: InvitationModalProps) {
  const onConfirm = useCallback(() => {
    props.onConfirm();
  }, [props.onConfirm]);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <div className={cssClass({ "modal-overlay": true })}>
      <div className={cssClass({ "modal-invitation-container": true, "modal-container": true })}>
        <div className={cssClass({ "modal-header": true })}>
          <h2 className={cssClass({ "modal-title": true })}>
            {props.delete
              ? tr("dashboard.invitation-modal.title.delete-invitations")
              : tr("dashboard.invitation-modal.title.resend-invitations")}
          </h2>

          <button className={cssClass({ "modal-close-btn": true })} onClick={modal.hide}>
            {deprecatedIcon.close}
          </button>
        </div>

        <div className={cssClass({ "modal-invitation-content": true })}>
          <p>
            {props.delete
              ? tr("dashboard.invitation-modal.delete")
              : tr("dashboard.invitation-modal.resend")}
          </p>
          <div className={cssClass({ "invitation-list": true })}>
            {props.selected.map(({ email, role }: any) => (
              <p key={email}>
                {`- ${email} (${tr(dm.str("labels.", role))})`}
              </p>
            ))}
          </div>
        </div>

        <div className={cssClass({ "modal-footer": true })}>
          <div className={cssClass({ "action-buttons": true, "modal-invitation-action-buttons": true })}>
            {!props.delete && (
              <Button
                className={cssClass({ "cancel-button": true })}
                variant="secondary"
                type="button"
                onClick={modal.hide}
              >
                {tr("labels.cancel")}
              </Button>
            )}
            <Button
              className={cssClass({ "accept-btn": true })}
              variant="primary"
              type="button"
              onClick={onConfirm}
            >
              {props.delete ? tr("labels.continue") : tr("labels.resend")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface InvitationSectionProps {
  team: any;
}

function InvitationSection(props: InvitationSectionProps) {
  const permissions = props.team?.permissions;
  const invitations = useState(props.team?.invitations || []);
  const [invitationsState, setInvitationsState] = invitations;
  const teamId = props.team?.id;

  const owner = permissions?.isOwner;
  const admin = permissions?.isAdmin;
  const canInvite = owner || admin;

  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [sortState, setSortState] = useState({ field: null as string | null, direction: "asc" as "asc" | "desc" });

  const selectedInvitations = useMemo(() => {
    return invitationsState.filter((i: any) => selected.has(i.email));
  }, [invitationsState, selected]);

  const onSelectChange = useCallback((email: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(email)) {
        next.delete(email);
      } else {
        next.add(email);
      }
      return next;
    });
  }, []);

  const onConfirmDelete = useCallback(() => {
    Array.from(selected).forEach((email) => {
      const params = { email, teamId };
      const mdata = {
        onSuccess: () => {
          st.emit!(ntf.success(tr("notifications.invitation-deleted")), dtm.fetchInvitations(), modal.hide());
        }
      };
      st.emit!(dtm.deleteInvitation(ptk.withMeta(params, mdata)));
    });
    setSelected(new Set());
  }, [selected, teamId]);

  const onDelete = useCallback(() => {
    st.emit!(modal.show("invitation-modal", { selected: selectedInvitations, delete: true, onConfirm: onConfirmDelete }));
  }, [selectedInvitations, onConfirmDelete]);

  const onError = useCallback((form: any) => {
    const error = form;
    if (error.type === "validation" && error.code === "profile-is-muted") {
      st.emit!(ntf.error(tr("errors.profile-is-muted")), modal.hide());
    } else if (error.type === "validation" && error.code === "max-invitations-by-request") {
      st.emit!(ntf.error(tr("errors.maximum-invitations-by-request-reached", error.threshold)));
    } else if (error.type === "restriction" && error.code === "max-quote-reached") {
      st.emit!(ntf.error(tr("errors.max-quota-reached", error.target)));
    } else if (["member-is-muted", "email-has-permanent-bounces", "email-has-complaints"].includes(error.code)) {
      st.emit!(ntf.error(tr("errors.email-spam-or-permanent-bounces", error.email)));
    } else {
      st.emit!(ntf.error(tr("errors.generic")), modal.hide());
    }
  }, []);

  const onResendSuccess = useCallback(() => {
    st.emit!(ntf.success(tr("notifications.invitation-email-sent")), modal.hide(), dtm.fetchInvitations());
    setSelected(new Set());
  }, []);

  const onConfirmResend = useCallback(() => {
    modal.hide!();
    const params = {
      invitations: selectedInvitations,
      teamId,
      resend: true
    };
    const mdata = { onSuccess: onResendSuccess, onError };
    st.emit!(dtm.createInvitations(ptk.withMeta(params, { [ev.origin]: "team" })));
  }, [selectedInvitations, teamId, onResendSuccess, onError]);

  const onResend = useCallback(() => {
    st.emit!(modal.show("invitation-modal", { selected: selectedInvitations, onConfirm: onConfirmResend }));
  }, [selectedInvitations, onConfirmResend]);

  const onOrderByStatus = useCallback(() => {
    const currentField = sortState.field;
    const currentDirection = sortState.direction;
    const newDirection = currentField === "status"
      ? (currentDirection === "asc" ? "desc" : "asc")
      : "asc";

    setSortState({ field: "status", direction: newDirection });
    setInvitationsState((prev: any[]) => {
      const sorted = [...prev].sort((a, b) => {
        const aVal = a.expired ? 1 : 0;
        const bVal = b.expired ? 1 : 0;
        return [aVal, a.email].localeCompare([bVal, b.email]);
      });
      return newDirection === "desc" ? sorted.reverse() : sorted;
    });
  }, [sortState]);

  const onOrderByRole = useCallback(() => {
    const currentField = sortState.field;
    const currentDirection = sortState.direction;
    const newDirection = currentField === "role"
      ? (currentDirection === "asc" ? "desc" : "asc")
      : "asc";

    setSortState({ field: "role", direction: newDirection });
    setInvitationsState((prev: any[]) => {
      const sorted = [...prev].sort((a, b) => {
        const aVal = a.role;
        const bVal = b.role;
        return [aVal, a.email].localeCompare([bVal, b.email]);
      });
      return newDirection === "desc" ? sorted.reverse() : sorted;
    });
  }, [sortState]);

  useEffect(() => {
    setInvitationsState(props.team?.invitations || []);
    setSortState({ field: null, direction: "asc" });
  }, [props.team]);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <div className={cssClass({ invitations: true })}>
      {selected.size > 0 && (
        <>
          <div className={cssClass({ "invitations-actions": true })}>
            <div>{tr("team.invitations-selected", i18n.c(selected.size))}</div>
            <div>
              <Button variant="secondary" type="button" onClick={onResend}>
                {tr("labels.resend-invitation")}
              </Button>
            </div>
            <IconButton
              onClick={onDelete}
              variant="destructive"
              aria-label={tr("labels.delete-invitation")}
              icon="delete"
            />
          </div>
        </>
      )}

      <div className={cssClass({ "table-header": true })}>
        <div className={cssClass({ "title-field-name": true })}>{tr("labels.invitations")}</div>
        <div className={cssClass({ "title-field-role": true })}>
          {tr("labels.role")}
          <IconButton
            variant="action"
            className={cssClass({
              "sort-active": sortState.field === "role",
              "sort-inactive": sortState.field !== "role"
            })}
            aria-label={tr("dashboard.order-invitations-by-role")}
            icon={sortState.field === "role"
              ? (sortState.direction === "asc" ? "arrow-down" : "arrow-up")
              : "arrow-down"}
            onClick={onOrderByRole}
          />
        </div>
        <div className={cssClass({ "title-field-status": true })}>
          {tr("labels.status")}
          <IconButton
            variant="action"
            className={cssClass({
              "sort-active": sortState.field === "status",
              "sort-inactive": sortState.field !== "status"
            })}
            aria-label={tr("dashboard.order-invitations-by-status")}
            icon={sortState.field === "status"
              ? (sortState.direction === "asc" ? "arrow-down" : "arrow-up")
              : "arrow-down"}
            onClick={onOrderByStatus}
          />
        </div>
      </div>

      {invitationsState.length === 0 ? (
        <EmptyInvitationTable canInvite={canInvite} team={props.team} />
      ) : (
        <div className={cssClass({ "table-rows": true })}>
          {invitationsState.map((invitation: any) => (
            <InvitationRow
              key={invitation.email}
              invitation={invitation}
              canInvite={canInvite}
              teamId={teamId}
              selected={selected}
              onSelectChange={onSelectChange}
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface TeamInvitationsPageProps {
  team: any;
  profile: any;
}

function TeamInvitationsPage(props: TeamInvitationsPageProps) {
  useEffect(() => {
    dom.setHtmlTitle(
      tr("title.team-invitations",
        props.team.isDefault ? tr("dashboard.your-penpot") : props.team.name)
    );
  }, [props.team]);

  useEffect(() => {
    st.emit!(dtm.fetchInvitations());
  }, []);

  return (
    <>
      <Header section="dashboard-team-invitations" team={props.team} />
      <section className="dashboard-team-invitations">
        <InvitationSection team={props.team} />

        {cfg.flags.includes("subscriptions") && showSubscriptionMembersBanner(props.team, props.profile) && (
          <MembersCta team={props.team} />
        )}
      </section>
    </>
  );
}

const schemaWebhookForm = {
  title: "WebhookForm",
  type: "object",
  properties: {
    uri: { type: "string", maxLength: 4069, pattern: "^http[s]?://" },
    mtype: { type: "string" }
  }
};

const validWebhookMtypes = [
  { label: "application/json", value: "application/json" },
  { label: "application/transit+json", value: "application/transit+json" }
];

function extractStatus(errorCode: string): string | undefined {
  const parts = errorCode.split(":");
  return parts[1];
}

interface WebhookModalProps {
  webhook?: any;
}

function WebhookModal(props: WebhookModalProps) {
  const initial = useMemo(() => {
    if (props.webhook) {
      return { ...props.webhook, uri: String(props.webhook.uri) };
    }
    return { isActive: false, mtype: "application/json" };
  }, [props.webhook]);

  const onSuccess = useCallback(() => {
    const message = tr("dashboard.webhooks.create.success");
    return rx.of(ntf.success(message), modal.hide());
  }, []);

  const onError = useCallback((form: any, error: any) => {
    const { type, code, hint } = error;
    if (type === "validation" && code === "webhook-validation") {
      let message: string;
      if (hint === "unknown") {
        message = tr("errors.webhooks.unexpected");
      } else if (hint === "invalid-uri") {
        message = tr("errors.webhooks.invalid-uri");
      } else if (hint === "ssl-validation-error") {
        message = tr("errors.webhooks.ssl-validation");
      } else if (hint === "timeout") {
        message = tr("errors.webhooks.timeout");
      } else if (hint === "connection-error") {
        message = tr("errors.webhooks.connection");
      } else if (str.startsWith(hint, "unexpected-status")) {
        message = tr("errors.webhooks.unexpected-status", extractStatus(hint) || "");
      } else {
        message = hint;
      }
      form.swap((s: any) => ({ ...s, errors: { ...s.errors, uri: { message } } }));
      return rx.throw(error);
    }
    return rx.throw(error);
  }, []);

  const onCreateSubmit = useCallback((formData: any) => {
    const params = {
      uri: formData.uri,
      mtype: formData.mtype,
      isActive: formData.isActive
    };
    const mdata = {
      onSuccess: () => onSuccess(),
      onError: (err: any) => onError(formData, err)
    };
    st.emit!(dtm.createWebhook(ptk.withMeta(params, mdata)));
  }, [onSuccess, onError]);

  const onUpdateSubmit = useCallback((formData: any) => {
    const mdata = {
      onSuccess: () => onSuccess(),
      onError: (err: any) => onError(formData, err)
    };
    st.emit!(dtm.updateWebhook(ptk.withMeta(formData, mdata)));
  }, [onSuccess, onError]);

  const onSubmit = useCallback((formData: any) => {
    if (formData.id) {
      onUpdateSubmit(formData);
    } else {
      onCreateSubmit(formData);
    }
  }, [onCreateSubmit, onUpdateSubmit]);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <div className={cssClass({ "modal-overlay": true })}>
      <div className={cssClass({ "modal-container": true })}>
        <Forms.Form form={{ cleanData: initial }} onSubmit={onSubmit}>
          <div className={cssClass({ "modal-header": true })}>
            <h2 className={cssClass({ "modal-title": true })}>
              {props.webhook
                ? tr("modals.edit-webhook.title")
                : tr("modals.create-webhook.title")}
            </h2>

            <button className={cssClass({ "modal-close-btn": true })} onClick={modal.hide}>
              {deprecatedIcon.close}
            </button>
          </div>

          <div className={cssClass({ "modal-content": true })}>
            <div className={cssClass({ "fields-row": true })}>
              <Forms.Input
                type="text"
                autoFocus={true}
                name="uri"
                label={tr("modals.create-webhook.url.label")}
                placeholder={tr("modals.create-webhook.url.placeholder")}
              />
            </div>
            <div className={cssClass({ "fields-row": true })}>
              <div className={cssClass({ "select-title": true })}>{tr("dashboard.webhooks.content-type")}</div>
              <Forms.Select options={validWebhookMtypes} default="application/json" name="mtype" />
            </div>
            <div className={cssClass({ "fields-row": true })}>
              <Forms.Input
                type="checkbox"
                className={cssClass({ "custom-input-checkbox": true })}
                name="isActive"
                label={tr("dashboard.webhooks.active")}
              />
              <div className={cssClass({ hint: true })}>{tr("dashboard.webhooks.active.explain")}</div>
            </div>
          </div>

          <div className={cssClass({ "modal-footer": true })}>
            <div className={cssClass({ "action-buttons": true })}>
              <input
                className={cssClass({ "cancel-button": true })}
                type="button"
                value={tr("labels.cancel")}
                onClick={modal.hide}
              />
              <Forms.SubmitButton
                label={props.webhook
                  ? tr("modals.edit-webhook.submit-label")
                  : tr("modals.create-webhook.submit-label")}
              />
            </div>
          </div>
        </Forms.Form>
      </div>
    </div>
  );
}

function WebhooksHero() {
  const onClick = useCallback(() => {
    st.emit!(modal.show("webhook", {}));
  }, []);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <div className={cssClass({ "webhooks-hero-container": true })}>
      <h2 className={cssClass({ "hero-title": true })}>{tr("labels.webhooks")}</h2>
      <span className={cssClass({ "hero-desc": true })} dangerouslySetInnerHTML={{ __html: tr("dashboard.webhooks.description") }} />
      <button className={cssClass({ "hero-btn": true })} onClick={onClick}>
        {tr("dashboard.webhooks.create")}
      </button>
    </div>
  );
}

interface WebhookActionsProps {
  onEdit: () => void;
  onDelete: () => void;
  canEdit: boolean;
}

function WebhookActions(props: WebhookActionsProps) {
  const [show, setShow] = useState(false);
  const onShow = useCallback(() => setShow(true), []);
  const onHide = useCallback(() => setShow(false), []);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  if (!props.canEdit) {
    return (
      <span title={tr("dashboard.webhooks.cant-edit")} className={cssClass({ "menu-disabled": true })}>
        <Icon iconId="i/menu" />
      </span>
    );
  }

  return (
    <>
      <button className={cssClass({ "menu-btn": true })} onClick={onShow}>
        {menuIcon}
      </button>
      <Dropdown show={show} onClose={onHide} dropdownId="webhook-actions">
        <ul className={cssClass({ "webhook-actions-dropdown": true })}>
          <li onClick={props.onEdit} className={cssClass({ "webhook-dropdown-item": true })}>
            {tr("labels.edit")}
          </li>
          <li onClick={props.onDelete} className={cssClass({ "webhook-dropdown-item": true })}>
            {tr("labels.delete")}
          </li>
        </ul>
      </Dropdown>
    </>
  );
}

interface WebhookItemProps {
  webhook: any;
  permissions: any;
}

const WebhookItem = React.memo(function WebhookItem(props: WebhookItemProps) {
  const errorCode = props.webhook?.errorCode;
  const id = props.webhook?.id;
  const creatorId = props.webhook?.profileId;
  const profile = refs.deref(refs.profile);
  const userId = profile?.id;
  const canEdit = props.permissions?.canEdit || creatorId === userId;

  const onEdit = useCallback(() => {
    st.emit!(modal.show("webhook", { webhook: props.webhook }));
  }, [props.webhook]);

  const onDeleteAccepted = useCallback(() => {
    const params = { id };
    const mdata = { onSuccess: () => st.emit!(dtm.fetchWebhooks()) };
    st.emit!(dtm.deleteWebhook(ptk.withMeta(params, mdata)));
  }, [id]);

  const onDelete = useCallback(() => {
    const params = {
      type: "confirm",
      title: tr("modals.delete-webhook.title"),
      message: tr("modals.delete-webhook.message"),
      acceptLabel: tr("modals.delete-webhook.accept"),
      onAccept: onDeleteAccepted
    };
    st.emit!(modal.show(params));
  }, [onDeleteAccepted]);

  let lastDeliveryText = tr("webhooks.last-delivery.success");
  if (errorCode != null) {
    lastDeliveryText = dm.str(tr("errors.webhooks.last-delivery"));
    if (errorCode === "ssl-validation-error") {
      lastDeliveryText = dm.str(lastDeliveryText, " ", tr("errors.webhooks.ssl-validation"));
    } else if (str.startsWith(errorCode, "unexpected-status")) {
      lastDeliveryText = dm.str(lastDeliveryText, " ", tr("errors.webhooks.unexpected-status", extractStatus(errorCode) || ""));
    }
  }

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <div className={cssClass({ "table-row": true, "webhook-row": true })}>
      <div className={cssClass({ "table-field": true, lastdelivery: true })} title={lastDeliveryText}>
        {errorCode == null ? successIcon : warningIcon}
      </div>
      <div className={cssClass({ "table-field": true, uri: true })}>
        <div>{dm.str(props.webhook.uri)}</div>
      </div>
      <div className={cssClass({ "table-field": true, active: true })}>
        <div>
          {props.webhook.isActive ? tr("labels.active") : tr("labels.inactive")}
        </div>
      </div>
      <div className={cssClass({ "table-field": true, actions: true })}>
        <WebhookActions onEdit={onEdit} onDelete={onDelete} canEdit={canEdit} />
      </div>
    </div>
  );
});

interface WebhooksListProps {
  webhooks: any[];
  permissions: any;
}

function WebhooksList(props: WebhooksListProps) {
  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <div className={cssClass({ "table-rows": true, "webhook-table": true })}>
      {props.webhooks.map((webhook: any) => (
        <WebhookItem key={dm.str(webhook.id)} webhook={webhook} permissions={props.permissions} />
      ))}
    </div>
  );
}

interface WebhooksPageProps {
  team: any;
}

function WebhooksPage(props: WebhooksPageProps) {
  const webhooks = props.team?.webhooks;

  useEffect(() => {
    dom.setHtmlTitle(
      tr("title.team-webhooks",
        props.team.isDefault ? tr("dashboard.your-penpot") : props.team.name)
    );
  }, [props.team]);

  useEffect(() => {
    st.emit!(dtm.fetchWebhooks());
  }, []);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <>
      <Header section="dashboard-team-webhooks" team={props.team} />
      <section className={cssClass({ "dashboard-container": true, "dashboard-team-webhooks": true })}>
        <>
          <WebhooksHero />
          {webhooks?.length === 0 ? (
            <div className={cssClass({ "webhooks-empty": true })}>
              <div>{tr("dashboard.webhooks.empty.no-webhooks")}</div>
              <div>{tr("dashboard.webhooks.empty.add-one")}</div>
            </div>
          ) : (
            <WebhooksList webhooks={webhooks} permissions={props.team?.permissions} />
          )}
        </>
      </section>
    </>
  );
}

interface TeamSettingsPageProps {
  team: any;
}

function TeamSettingsPage(props: TeamSettingsPageProps) {
  const finput = useRef<HTMLInputElement>(null);

  const members = props.team?.members;
  const stats = props.team?.stats;
  const owner = members?.find((m: any) => m.isOwner);
  const permissions = props.team?.permissions;
  const canEdit = permissions?.isOwner || permissions?.isAdmin;

  const onImageClick = useCallback(() => {
    if (finput.current) {
      finput.current.click();
    }
  }, []);

  const onFileSelected = useCallback((file: any) => {
    st.emit!(dtm.updateTeamPhoto(file));
  }, []);

  useEffect(() => {
    dom.setHtmlTitle(
      tr("title.team-settings",
        props.team.isDefault ? tr("dashboard.your-penpot") : props.team.name)
    );
  }, [props.team]);

  useEffect(() => {
    st.emit!(dtm.fetchMembers(), dtm.fetchStats());
  }, []);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <>
      <Header section="dashboard-team-settings" team={props.team} />
      <section className={cssClass({ "dashboard-team-settings": true })}>
        <div className={cssClass({ "settings-container": true })}>
          <div className={cssClass({ block: true, "info-block": true })}>
            <div className={cssClass({ "team-icon": true })}>
              {canEdit && (
                <button className={cssClass({ "update-overlay": true })} onClick={onImageClick}>
                  {imageIcon}
                </button>
              )}
              <img className={cssClass({ "team-image": true })} src={cfg.resolveTeamPhotoUrl(props.team)} />
              {canEdit && (
                <FileUploader
                  accept="image/jpeg,image/png"
                  multi={false}
                  ref={finput}
                  onSelected={onFileSelected}
                />
              )}
            </div>
            <div className={cssClass({ "block-label": true })}>{tr("dashboard.team-info")}</div>
            <div className={cssClass({ "block-text": true })}>{props.team.name}</div>
          </div>

          <div className={cssClass({ block: true })}>
            <div className={cssClass({ "block-label": true })}>{tr("dashboard.team-members")}</div>

            <div className={cssClass({ "block-content": true })}>
              <img className={cssClass({ "owner-icon": true })} src={cfg.resolveProfilePhotoUrl(owner)} />
              <span className={cssClass({ "block-text": true })}>
                {owner.name} ({tr("labels.owner")})
              </span>
            </div>

            <div className={cssClass({ "block-content": true })}>
              {userIcon}
              <span className={cssClass({ "block-text": true })}>
                {tr("dashboard.num-of-members", members?.length)}
              </span>
            </div>
          </div>

          <div className={cssClass({ block: true })}>
            <div className={cssClass({ "block-label": true })}>{tr("dashboard.team-projects")}</div>

            <div className={cssClass({ "block-content": true })}>
              {groupIcon}
              <span className={cssClass({ "block-text": true })}>
                {tr("labels.num-of-projects", i18n.c((stats?.projects || 1) - 1))}
              </span>
            </div>

            <div className={cssClass({ "block-content": true })}>
              {documentIcon}
              <span className={cssClass({ "block-text": true })}>
                {tr("labels.num-of-files", i18n.c(stats?.files || 0))}
              </span>
            </div>
          </div>

          {cfg.flags.includes("subscriptions") && (
            <Team isOwner={permissions?.isOwner} team={props.team} />
          )}
        </div>
      </section>
    </>
  );
}

export {
  InviteMembersModal,
  TeamMembersPage,
  TeamInvitationsPage,
  WebhooksPage,
  TeamSettingsPage
};