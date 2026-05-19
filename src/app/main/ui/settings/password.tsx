// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useCallback, useMemo } from "react";
import * as sm from "@app/common/schema";
import * as ntf from "@app/main/data/notifications";
import * as udu from "@app/main/data/profile";
import { emit } from "@app/main/store";
import * as fm from "@app/main/ui/components/forms";
import * as dom from "@app/util/dom";
import { tr } from "@app/util/i18n";

function onError(form: any, error: any) {
  const data = exData(error);
  switch (data?.code) {
    case "old-password-not-match":
      form.swap((formData: any) =>
        assocIn(formData, ["extraErrors", "password-old"], { message: tr("errors.wrong-old-password") })
      );
      break;
    case "email-as-password":
      form.swap((formData: any) =>
        assocIn(formData, ["extraErrors", "password-1"], { message: tr("errors.email-as-password") })
      );
      break;
    default:
      emit(ntf.error(tr("generic.error")));
  }
}

function onSuccess(form: any) {
  form.reset();
  const passwordOldNode = dom.getElement("password-old");
  const msg = tr("dashboard.notifications.password-saved");
  dom.cleanValue(passwordOldNode);
  dom.focus(passwordOldNode);
  emit(ntf.success(msg));
}

function onSubmit(form: any, event: React.FormEvent) {
  event.preventDefault();
  const params = withMeta(form.cleanData, {
    onSuccess: partial(onSuccess, form),
    onError: partial(onError, form)
  });
  emit(udu.updatePassword(params));
}

const schemaPasswordForm = sm.and(
  sm.map({ title: "PasswordForm" }),
  sm.fields({
    password1: sm.password(),
    password2: sm.password(),
    passwordOld: sm.password()
  }),
  sm.fn(
    { code: "errors.password-invalid-confirmation", field: "password-2" },
    ({ password1, password2 }: any) => password1 === password2
  )
);

interface PasswordFormProps {}

export function PasswordForm(props: PasswordFormProps) {
  const initial = useMemo(() => ({
    passwordOld: "",
    password1: "",
    password2: ""
  }), []);

  const form = fm.useForm({
    schema: schemaPasswordForm,
    initial
  });

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit(form, e);
    },
    [form]
  );

  return (
    <fm.Form className="password-form" onSubmit={handleSubmit} form={form}>
      <div className="fields-row">
        <fm.Input
          type="password"
          name="password-old"
          autoFocus
          label={tr("labels.old-password")}
        />
      </div>

      <div className="fields-row">
        <fm.Input
          type="password"
          name="password-1"
          showSuccess
          label={tr("labels.new-password")}
        />
      </div>

      <div className="fields-row">
        <fm.Input
          type="password"
          name="password-2"
          showSuccess
          label={tr("labels.confirm-password")}
        />
      </div>

      <fm.SubmitButton
        label={tr("dashboard.password-change")}
        data-testid="submit-password"
        className="update-btn"
      />
    </fm.Form>
  );
}

export function PasswordPage() {
  React.useEffect(() => {
    dom.setHtmlTitle(tr("title.settings.password"));
  }, []);

  return (
    <section className="dashboard-settings">
      <div className="form-container">
        <h2>{tr("dashboard.password-change")}</h2>
        <PasswordForm />
      </div>
    </section>
  );
}