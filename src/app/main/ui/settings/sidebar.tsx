// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useCallback } from "react";
import * as cf from "@app/config";
import * as dcm from "@app/main/data/common";
import * as ev from "@app/main/data/event";
import * as modal from "@app/main/data/modal";
import * as dtm from "@app/main/data/team";
import * as rt from "@app/main/router";
import { emit } from "@app/main/store";
import { ProfileSection } from "@app/main/ui/dashboard/sidebar";
import * as deprecatedIcon from "@app/main/ui/icons";
import { tr } from "@app/util/i18n";
import * as kbd from "@app/util/keyboard";

const arrowIcon = deprecatedIcon.iconXref("arrow", "arrow-icon");
const feedbackIcon = deprecatedIcon.iconXref("feedback", "feedback-icon");

const goSettingsProfile = () => emit(rt.nav("settings-profile"));
const goSettingsFeedback = () => emit(rt.nav("settings-feedback"));
const goSettingsPassword = () => emit(rt.nav("settings-password"));
const goSettingsOptions = () => emit(rt.nav("settings-options"));
const goSettingsSubscription = () => emit(rt.nav("settings-subscription"));
const goSettingsAccessTokens = () => emit(rt.nav("settings-access-tokens"));
const goSettingsNotifications = () => emit(rt.nav("settings-notifications"));

function showReleaseNotes(event: any) {
  const version = cf.version?.main;
  emit(ev.event(ev.NAME, "show-release-notes", { version }));

  if (kbd.alt(event) && kbd.mod(event)) {
    emit(modal.show({ type: "onboarding" }));
  } else {
    emit(modal.show({ type: "release-notes", version }));
  }
}

interface SidebarContentProps {
  profile: any;
  section: string;
}

export function SidebarContent(props: SidebarContentProps) {
  const { profile, section } = props;

  const profileSelected = section === "settings-profile";
  const passwordSelected = section === "settings-password";
  const optionsSelected = section === "settings-options";
  const feedbackSelected = section === "settings-feedback";
  const subscriptionSelected = section === "settings-subscription";
  const accessTokensSelected = section === "settings-access-tokens";
  const notificationsSelected = section === "settings-notifications";

  const teamId = dtm.getLastTeamId() || profile?.defaultTeamId;

  const goDashboard = useCallback(() => {
    emit(dcm.goToDashboardRecent({ teamId }));
  }, [teamId]);

  return (
    <div className="sidebar-content">
      <div className="sidebar-content-section">
        <button className="back-to-dashboard" onClick={goDashboard}>
          {arrowIcon}
          <span className="back-text">{tr("labels.dashboard")}</span>
        </button>
      </div>

      <hr className="sidebar-separator" />

      <div className="sidebar-content-section">
        <ul className="sidebar-nav-settings">
          <li
            className={`current ${profileSelected ? "current" : ""} settings-item`}
            onClick={goSettingsProfile}
          >
            <span className="element-title">{tr("labels.profile")}</span>
          </li>

          <li
            className={`current ${passwordSelected ? "current" : ""} settings-item`}
            onClick={goSettingsPassword}
          >
            <span className="element-title">{tr("labels.password")}</span>
          </li>

          <li
            className={`current ${notificationsSelected ? "current" : ""} settings-item`}
            onClick={goSettingsNotifications}
          >
            <span className="element-title">{tr("labels.notifications")}</span>
          </li>

          <li
            className={`current ${optionsSelected ? "current" : ""} settings-item`}
            onClick={goSettingsOptions}
            data-testid="settings-profile"
          >
            <span className="element-title">{tr("labels.settings")}</span>
          </li>

          {cf.flags?.includes("subscriptions") && (
            <li
              className={`current ${subscriptionSelected ? "current" : ""} settings-item`}
              onClick={goSettingsSubscription}
              data-testid="settings-subscription"
            >
              <span className="element-title">{tr("subscription.labels")}</span>
            </li>
          )}

          {cf.flags?.includes("access-tokens") && (
            <li
              className={`current ${accessTokensSelected ? "current" : ""} settings-item`}
              onClick={goSettingsAccessTokens}
              data-testid="settings-access-tokens"
            >
              <span className="element-title">{tr("labels.access-tokens")}</span>
            </li>
          )}

          <hr className="sidebar-separator" />

          <li
            onClick={showReleaseNotes}
            data-testid="release-notes"
            className="settings-item"
          >
            <span className="element-title">{tr("labels.release-notes")}</span>
          </li>

          {cf.flags?.includes("user-feedback") && (
            <li
              className={`current ${feedbackSelected ? "current" : ""} settings-item`}
              onClick={goSettingsFeedback}
            >
              {feedbackIcon}
              <span className="element-title">{tr("labels.contact-us")}</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

interface SidebarProps {
  profile: any;
  section: string;
}

export function Sidebar(props: SidebarProps) {
  const { profile, section } = props;

  return (
    <div className="dashboard-sidebar settings">
      <SidebarContent profile={profile} section={section} />
      <ProfileSection profile={profile} />
    </div>
  );
}