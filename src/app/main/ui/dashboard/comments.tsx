// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from "react";
import { dcm } from "app.main.data.comments";
import { ev } from "app.main.data.event";
import { dwcm } from "app.main.data.workspace.comments";
import { refs } from "app.main.refs";
import { st } from "app.main.store";
import { cmt } from "app.main.ui.comments";
import { Dropdown } from "app.main.ui.components.dropdown";
import { IconButton } from "app.main.ui.ds.buttons.icon-button";
import { Icon } from "app.main.ui.ds.foundations.assets.icon";
import { deprecatedIcon } from "app.main.ui.icons";
import { tr } from "app.util.i18n";
import { ptk } from "potok.v2.core";

function cssClass(classes: Record<string, boolean>): string {
  return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
}

const commentsIconSvg = deprecatedIcon.iconXref(
  "comments",
  cssClass({ "comments-icon": true })
);

interface CommentsIconProps {
  profile: any;
  onShowComments: () => void;
}

export function CommentsIcon(props: CommentsIconProps) {
  const { profile, onShowComments } = props;
  const threadsMap = refs.commentThreads;

  const tgroups = React.useMemo(() => {
    const threads = Object.values(threadsMap) as any[];
    return dcm.applyFilters(
      {},
      profile,
      dcm.groupThreadsByFileAndPage(
        threads.sort((a: any, b: any) => b["modified-at"] - a["modified-at"])
      )
    );
  }, [threadsMap, profile]);

  return (
    <div className={cssClass({ "dashboard-comments-section": true })}>
      <IconButton
        variant="ghost"
        tabIndex="0"
        className={cssClass({ "comment-button": true })}
        data-testid="open-comments"
        aria-label={tr("dashboard.notifications.view")}
        onClick={onShowComments}
        icon={<Icon iconId="i/comments" />}
      >
        {tgroups?.length > 0 && (
          <div className={cssClass({ unread: true })} />
        )}
      </IconButton>
    </div>
  );
}

interface CommentsSectionProps {
  profile: any;
  team: any;
  show?: boolean;
  onHideComments: () => void;
}

export function CommentsSection(props: CommentsSectionProps) {
  const { profile, team, show, onHideComments } = props;
  const threadsMap = refs.commentThreads;
  const teamId = team?.id;

  const tgroups = React.useMemo(() => {
    const threads = Object.values(threadsMap) as any[];
    return dcm.applyFilters(
      {},
      profile,
      dcm.groupThreadsByFileAndPage(
        threads.sort((a: any, b: any) => b["modified-at"] - a["modified-at"])
      )
    );
  }, [threadsMap, profile]);

  const onNavigate = React.useCallback(
    (thread: any) => {
      st.emit!(
        ptk.event(ev.event, {
          [ev.name]: "dashboard",
          [ev/origin]: "dashboard"
        })
      );
    },
    []
  );

  const onReadAll = React.useCallback(() => {
    st.emit!(dcm.markAllThreadsAsRead(teamId));
  }, [teamId]);

  React.useEffect(() => {
    st.emit!(dcm.retrieveUnreadCommentThreads(teamId));
  }, [teamId]);

  React.useEffect(() => {
    if (show) {
      st.emit!(
        ptk.event(ev.event, {
          [ev.name]: "open-comment-notifications",
          [ev/origin]: "dashboard"
        })
      );
    }
  }, [show]);

  return (
    <div className={cssClass({ "dashboard-comments-section": true })}>
      <Dropdown
        show={show}
        onClose={onHideComments}
        dropdownId="dashboard-comments"
      >
        <div className={cssClass({ dropdown: true, "comments-section": true, "comment-threads-section": true })}>
          <div className={cssClass({ header: true })}>
            <h3 className={cssClass({ "header-title": true })}>
              {tr("dashboard.notifications")}
            </h3>
            {tgroups?.length > 0 && (
              <IconButton
                className={cssClass({ "mark-all-as-read-button": true, "notifications-button": true })}
                variant="action"
                tabIndex={show ? "0" : "-1"}
                aria-label={tr("label.mark-all-as-read")}
                onClick={onReadAll}
                icon={<Icon iconId="i/tick" />}
              />
            )}

            <IconButton
              className={cssClass({ "notifications-button": true })}
              variant="action"
              tabIndex={show ? "0" : "-1"}
              aria-label={tr("labels.close")}
              onClick={onHideComments}
              icon={<Icon iconId="i/close" />}
            />
          </div>

          {tgroups?.length > 0 ? (
            <div className={cssClass({ "thread-groups": true })}>
              <cmt.CommentDashboardThreadGroup
                group={tgroups[0]}
                onThreadClick={onNavigate}
                showFileName={true}
              />
              {tgroups.slice(1).map((tgroup: any) => (
                <cmt.CommentDashboardThreadGroup
                  key={tgroup["page-id"]}
                  group={tgroup}
                  onThreadClick={onNavigate}
                  showFileName={true}
                />
              ))}
            </div>
          ) : (
            <div className={cssClass({ "thread-groups-placeholder": true })}>
              {commentsIconSvg}
              {tr("labels.no-comments-available")}
            </div>
          )}
        </div>
      </Dropdown>
    </div>
  );
}