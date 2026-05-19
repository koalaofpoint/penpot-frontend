// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from "react";
import { sm } from "app.common.schema";
import { dcm } from "app.main.data.common";
import { ev } from "app.main.data.event";
import { modal } from "app.main.data.modal";
import { ntf } from "app.main.data.notifications";
import { dtm } from "app.main.data.team";
import { st } from "app.main.store";
import { fm } from "app.main.ui.components.forms";
import { deprecatedIcon } from "app.main.ui.icons";
import { dom } from "app.util.dom";
import { tr } from "app.util.i18n";
import { kbd } from "app.util.keyboard";
import { rx } from "beicon.v2.core";

function cssClass(classes: Record<string, boolean>): string {
  return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
}

const schemaTeamForm = new Map([
  ["name", sm.text({ max: 250 })]
]);

function onCreateSuccess(_form: any, response: any) {
  const message = "Team created successfully";
  const teamId = response?.id;
  st.emit!(ntf.success(message), dcm.goToDashboardRecent({ teamId }));
}

function onUpdateSuccess(_form: any, _response: any) {
  const message = "Team created successfully";
  st.emit!(ntf.success(message), modal.hide());
}

function onError(form: any, _response: any) {
  const id = form?.cleanData?.id;
  if (id) {
    return rx.of(ntf.error("Error on updating team."));
  }
  return rx.of(ntf.error("Error on creating team."));
}

function onCreateSubmit(form: any) {
  const mdata = {
    onSuccess: (res: any) => onCreateSuccess(form, res),
    onError: (err: any) => onError(form, err)
  };
  const params = { name: form?.cleanData?.name };
  st.emit!(
    ptk.withMeta(dtm.createTeam(ptk.withMeta(params, mdata)), { [ev/origin]: "dashboard" })
  );
}

function onUpdateSubmit(form: any) {
  const mdata = {
    onSuccess: (res: any) => onUpdateSuccess(form, res),
    onError: (err: any) => onError(form, err)
  };
  const team = form?.cleanData;
  st.emit!(dtm.updateTeam(ptk.withMeta(team, mdata)), modal.hide());
}

function onSubmit(form: any, _: any) {
  const data = form?.cleanData;
  if (data?.id) {
    onUpdateSubmit(form);
  } else {
    onCreateSubmit(form);
  }
}

interface TeamFormModalProps {
  team?: any;
}

export function TeamFormModal(props: TeamFormModalProps) {
  const { team } = props;

  const initial = React.useMemo(() => {
    if (!team) return {};
    return { name: team.name, id: team.id };
  }, [team]);

  const form = fm.useForm({ schema: schemaTeamForm, initial });

  const handleKeydown = React.useCallback(
    (e: any) => {
      if (kbd.enter(e)) {
        dom.preventDefault(e);
        dom.stopPropagation(e);
        onSubmit(form, e);
      }
    },
    [form]
  );

  return (
    <div className={cssClass({ "modal-overlay": true })}>
      <div className={cssClass({ "modal-container": true })}>
        <fm.Form
          form={form}
          onSubmit={onSubmit}
          className={cssClass({ "team-form": true })}
        >
          <div className={cssClass({ "modal-header": true })}>
            {team ? (
              <h2 className={cssClass({ "modal-title": true })}>
                {tr("labels.rename-team")}
              </h2>
            ) : (
              <h2 className={cssClass({ "modal-title": true })}>
                {tr("labels.create-team")}
              </h2>
            )}

            <button
              className={cssClass({ "modal-close-btn": true })}
              onClick={modal.hide!}
            >
              {deprecatedIcon.close}
            </button>
          </div>

          <div className={cssClass({ "modal-content": true })}>
            <fm.Input
              type="text"
              autoFocus={true}
              className={cssClass({ "group-name-input": true })}
              form={form}
              name="name"
              placeholder="E.g. Design"
              label={tr("labels.create-team.placeholder")}
              onKeyDown={handleKeydown}
            />
          </div>

          <div className={cssClass({ "modal-footer": true })}>
            <div className={cssClass({ "action-buttons": true })}>
              <fm.SubmitButton
                label={team ? tr("labels.update-team") : tr("labels.create-team")}
                className={cssClass({ "accept-btn": true })}
              />
            </div>
          </div>
        </fm.Form>
      </div>
    </div>
  );
}