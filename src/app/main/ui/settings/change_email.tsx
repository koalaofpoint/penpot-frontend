// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useCallback } from "react";
import * as sm from "@app/common/schema";
import * as modal from "@app/main/data/modal";
import * as ntf from "@app/main/data/notifications";
import * as du from "@app/main/data/profile";
import { emit } from "@app/main/store";
import * as fm from "@app/main/ui/components/forms";
import * as deprecatedIcon from "@app/main/ui/icons";
import { ContextNotification } from "@app/main/ui/notifications/context-notification";
import { tr } from "@app/util/i18n";

function onError(form: any, cause: any) {
  const error = exData(cause);
  const code = error?.code;

  switch (code) {
    case "email-already-exists":
      swap(form, (data: any) => {
        const error = { message: tr("errors.email-already-exists") };
        return assocIn(data, ["errors", "email-1"], error);
      });
      break;
    case "profile-is-muted":
      emit(ntf.error(tr("errors.profile-is-muted")));
      break;
    case "email-has-permanent-bounces":
    case "email-has-complaints":
      emit(ntf.error(tr("errors.email-has-permanent-bounces", error.email)));
      break;
    default:
      throw cause;
  }
}

function onSuccess(profile: any, data: any) {
  if (data.changed) {
    emit(du.refreshProfile(), modal.hide());
  } else {
    const message = tr("notifications.validation-email-sent", profile.email);
    emit(ntf.info(message), modal.hide());
  }
}

function onSubmit(profile: any, form: any, _event: any) {
  const params = { email: getIn(form, ["cleanData", "email-1"]) };
  const mdata = {
    onError: partial(onError, form),
    onSuccess: partial(onSuccess, profile)
  };
  emit(du.requestEmailChange(withMeta(params, mdata)));
}

const schemaEmailChangeForm = sm.and(
  sm.map({ title: "EmailChangeForm" }),
  sm.fields({
    email1: sm.email(),
    email2: sm.email()
  }),
  sm.fn({
    errorFn: () => tr("errors.invalid-email-confirmation"),
    errorField: "email-2"
  }, (data: any) => data.email1 === data.email2)
);

export function ChangeEmailModal() {
  const profile = useDeref(refs.profile);
  const form = fm.useForm({
    schema: schemaEmailChangeForm,
    initial: profile
  });

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit(profile, form, e);
    },
    [profile, form]
  );

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <fm.Form form={form} onSubmit={handleSubmit}>
          <div className="modal-header">
            <h2
              className="modal-title"
              data-testid="change-email-title"
            >
              {tr("modals.change-email.title")}
            </h2>
            <button className="modal-close-btn" onClick={modal.hide}>
              {deprecatedIcon.close}
            </button>
          </div>

          <div className="modal-content">
            <ContextNotification
              level="info"
              content={tr("modals.change-email.info", profile?.email)}
            />

            <div className="fields-row">
              <fm.Input
                type="email"
                name="email-1"
                label={tr("modals.change-email.new-email")}
                trim
                showSuccess
              />
            </div>

            <div className="fields-row">
              <fm.Input
                type="email"
                name="email-2"
                label={tr("modals.change-email.confirm-email")}
                trim
                showSuccess
              />
            </div>
          </div>

          <div className="modal-footer">
            <div className="action-buttons" data-testid="change-email-submit">
              <fm.SubmitButton label={tr("modals.change-email.submit")} />
            </div>
          </div>
        </fm.Form>
      </div>
    </div>
  );
}

import { useDeref } from "@shared/rum";
import * as refs from "@app/main/refs";