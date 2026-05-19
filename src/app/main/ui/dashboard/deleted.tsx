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
import { hooks } from "app.main.ui.hooks";
import { deprecatedIcon } from "app.main.ui.icons";
import { dom } from "app.util.dom";
import { tr } from "app.util.i18n";

function cssClass(classes: Record<string, boolean>): string {
  return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
}

const menuIcon = deprecatedIcon.iconXref("menu", cssClass({ "menu-icon": true }));

interface MenuProps {
  teamId?: string;
  section?: string;
}

export function Menu(props: MenuProps) {
  const { teamId, section } = props;

  const onRecentClick = React.useCallback(
    () => {
      st.emit!(dcm.goToDashboardRecent({ teamId }));
    },
    [teamId]
  );

  const onDeletedClick = React.useCallback(
    () => {
      st.emit!(dcm.goToDashboardDeleted({ teamId }));
    },
    [teamId]
  );

  return (
    <div className={cssClass({ nav: true })}>
      <div className={cssClass({ "nav-inside": true })}>
        <div
          className={cssClass({ "nav-option": true, selected: section === "dashboard-recent" })}
          data-testid="recent-tab"
          onClick={onRecentClick}
        >
          {tr("labels.recent")}
        </div>
        <div
          className={cssClass({ "nav-option": true, selected: section === "dashboard-deleted" })}
          variant="ghost"
          type="button"
          data-testid="deleted-tab"
          onClick={onDeletedClick}
        >
          {tr("labels.deleted")}
        </div>
      </div>
    </div>
  );
}