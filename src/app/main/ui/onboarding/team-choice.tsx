// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
// TODO: Import css and cssCase from proper location
// import { css, cssCase } from '../../main/style';
// import { fm } from '../../../util/forms';
// import { du } from '../../../main/data/profile';
// import { dtm } from '../../../main/data/team';
// import { dcm } from '../../../main/data/common';
// import { ev } from '../../../main/data/event';
// import { st } from '../../../main/store';
// import { ptk } from 'potok.v2/core';
// import { deprecated-icon } from '../icons';
// import { sm } from '../../../common/schema';
// import { context-notification } from '../notifications/context-notification';

interface LeftSidebarProps {}

function LeftSidebar({}: LeftSidebarProps) {
  return (
    <div className="modal-left">
      <h2 className="modal-subtitle">What is a team?</h2>
      <p className="modal-text">
        Teams allow you to organize projects and collaborate with other members.
      </p>
      <ul className="team-features">
        <li className="feature">
          <span className="icon">
            {/* deprecated-icon/document */}
            <svg viewBox="0 0 24 24" width="24" height="24"><path d="M..."/></svg>
          </span>
          <p className="modal-desc">Create and manage projects</p>
        </li>
        <li className="feature">
          <span className="icon">
            {/* deprecated-icon/move */}
            <svg viewBox="0 0 24 24" width="24" height="24"><path d="M..."/></svg>
          </span>
          <p className="modal-desc">Invite and manage members</p>
        </li>
        <li className="feature">
          <span className="icon">
            {/* deprecated-icon/tree */}
            <svg viewBox="0 0 24 24" width="24" height="24"><path d="M..."/></svg>
          </span>
          <p className="modal-desc">Organize files in folders</p>
        </li>
        <li className="feature">
          <span className="icon">
            {/* deprecated-icon/user */}
            <svg viewBox="0 0 24 24" width="24" height="24"><path d="M..."/></svg>
          </span>
          <p className="modal-desc">Assign roles and permissions</p>
        </li>
        <li className="feature">
          <span className="icon">
            {/* deprecated-icon/tick */}
            <svg viewBox="0 0 24 24" width="24" height="24"><path d="M..."/></svg>
          </span>
          <p className="modal-desc">Share libraries across projects</p>
        </li>
      </ul>
    </div>
  );
}

interface TeamFormProps {
  goToTeam?: boolean;
}

function TeamForm({ goToTeam }: TeamFormProps) {
  const [error, setError] = React.useState<string | null>(null);
  const [formData, setFormData] = React.useState({
    name: "",
    role: "editor",
    emails: [] as string[]
  });
  const [formErrors, setFormErrors] = React.useState<Record<string, any>>({});

  const roles = React.useMemo(() => [
    { value: "viewer", label: "Viewer" },
    { value: "editor", label: "Editor" },
    { value: "admin", label: "Admin" }
  ], []);

  const handleInputChange = (name: string, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInviteLater = React.useCallback(() => {
    // TODO: Implement team creation without invitations
    // st/emit!(
    //   dtm/create-team({ name: formData.name }),
    //   ptk/data-event ev/event { name: "onboarding-step", label: "team:create-team-and-invite-later", team-name: formData.name, step: 8 },
    //   ptk/data-event ev/event { name: "onboarding-finish" }
    // );
  }, [formData.name]);

  const handleInviteNow = React.useCallback(() => {
    // TODO: Implement team creation with invitations
    // st/emit!(
    //   dtm/create-team-with-invitations { name: formData.name, emails: formData.emails, role: formData.role },
    //   ptk/data-event ev/event { name: "onboarding-step", label: "team:create-team-and-invite", invites: formData.emails.length, team-name: formData.name, role: formData.role, step: 8 },
    //   ptk/data-event ev/event { name: "onboarding-finish" }
    // );
  }, [formData]);

  const handleSubmit = React.useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (formData.emails.length > 0) {
      handleInviteNow();
    } else {
      handleInviteLater();
    }
  }, [formData, handleInviteNow, handleInviteLater]);

  const handleSkip = React.useCallback(() => {
    // TODO: Implement skip and go to dashboard
    // st/emit!(
    //   du/update-profile-props({ onboarding-viewed: true }),
    //   ptk/data-event ev/event { name: "onboarding-step", label: "team:skip-team-creation", step: 7 },
    //   ptk/data-event ev/event { name: "onboarding-finish" }
    // );
  }, []);

  return (
    <>
      <div className="modal-right">
        <div className="first-block">
          <form className="modal-form" onSubmit={handleSubmit}>
            <h2 className="modal-subtitle">Create a team</h2>
            <p className="modal-text">
              Give your team a name. You can invite members after.
            </p>

            <input
              type="text"
              className="team-name-input"
              name="name"
              autoFocus
              placeholder="Team name"
              value={formData.name}
              onChange={e => handleInputChange("name", e.target.value)}
            />

            <h2 className="modal-subtitle invite-subtitle">Invite members</h2>
            <p className="modal-text">Invite your team to join you</p>

            {error && (
              <div className="context-notification error">
                {error}
              </div>
            )}

            <div className="role-select">
              <p className="role-title">Role</p>
              <select
                name="role"
                value={formData.role}
                onChange={e => handleInputChange("role", e.target.value)}
              >
                {roles.map(role => (
                  <option key={role.value} value={role.value}>
                    {role.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="invitation-row">
              <input
                type="email"
                name="emails"
                trim
                placeholder="Email addresses"
                multiple
                value={formData.emails.join(", ")}
                onChange={e => handleInputChange("emails", e.target.value.split(",").map(s => s.trim()))}
              />
            </div>

            <div className="action-buttons">
              <button type="submit" className="accept-button">
                {formData.emails.length > 0
                  ? "Create team and send invites"
                  : "Create team"}
              </button>
            </div>

            {formData.emails.length === 0 && (
              <div className="modal-hint">
                (You can invite members later from team settings)
              </div>
            )}
          </form>
        </div>

        <div className="second-block">
          <h2 className="modal-subtitle">Continue without a team</h2>
          <p className="modal-text">
            You can create a team later and invite members to collaborate.
          </p>

          <div className="action-buttons">
            <button className="accept-button" onClick={handleSkip}>
              Continue without a team
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

interface OnboardingTeamModalProps {
  goToTeam?: boolean;
}

export function OnboardingTeamModal({ goToTeam }: OnboardingTeamModalProps) {
  return (
    <div className="modal-overlay">
      <div className="animated fadeIn modal-container">
        <h1 className="modal-title">Welcome to Penpot</h1>
        <div className="modal-sections">
          <LeftSidebar />
          <div className="separator" />
          <TeamForm goToTeam={goToTeam} />
        </div>
      </div>
    </div>
  );
}
