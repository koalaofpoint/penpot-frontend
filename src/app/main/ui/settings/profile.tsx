// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useCallback, useMemo } from "react";
import * as sm from "@app/common/schema";
import * as cf from "@app/config";
import * as modal from "@app/main/data/modal";
import * as ntf from "@app/main/data/notifications";
import * as du from "@app/main/data/profile";
import * as refs from "@app/main/refs";
import { emit } from "@app/main/store";
import { FileUploader } from "@app/main/ui/components/file-uploader";
import * as fm from "@app/main/ui/components/forms";
import * as dom from "@app/util/dom";
import { tr } from "@app/util/i18n";

const schemaProfileForm = sm.schema({
  title: "ProfileForm",
  fields: {
    fullname: sm.text({ max: 250 }),
    email: sm.email()
  }
});

function onSuccess(_: any) {
  emit(ntf.success(tr("notifications.profile-saved")));
}

function onSubmit(form: any, _event: any) {
  const data = form.cleanData;
  emit(du.updateProfile(data), du.persistProfile({ onSuccess }));
}

interface ProfileFormProps {}

export function ProfileForm(props: ProfileFormProps) {
  const profile = useDeref(refs.profile);
  const form = fm.useForm({
    schema: schemaProfileForm,
    initial: profile
  });

  const onShowChangeEmail = useCallback(() => {
    emit(modal.show("change-email", {}));
  }, []);

  const onShowDeleteAccount = useCallback(() => {
    emit(modal.show("delete-account", {}));
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit(form, e);
    },
    [form]
  );

  return (
    <fm.Form className="profile-form" onSubmit={handleSubmit} form={form}>
      <div className="fields-row">
        <fm.Input
          type="text"
          name="fullname"
          label={tr("dashboard.your-name")}
        />
      </div>

      <div className="fields-row" onClick={onShowChangeEmail}>
        <fm.Input
          type="email"
          name="email"
          disabled
          label={tr("dashboard.your-email")}
        />
        <div className="options">
          <div className="change-email">
            <a onClick={onShowChangeEmail}>{tr("dashboard.change-email")}</a>
          </div>
        </div>
      </div>

      <fm.SubmitButton
        label={tr("dashboard.save-settings")}
        disabled={!form.touched}
        className="btn-primary"
      />

      <div className="links">
        <div className="link-item">
          <a onClick={onShowDeleteAccount} data-testid="remove-account-btn">
            {tr("dashboard.remove-account")}
          </a>
        </div>
      </div>
    </fm.Form>
  );
}

export function ProfilePhotoForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const profile = useDeref(refs.profile);

  const photo = useMemo(() => {
    return cf.resolveProfilePhotoUrl(profile);
  }, [profile]);

  const onImageClick = useCallback(() => {
    dom.click(inputRef.current);
  }, []);

  const onFileSelected = useCallback((file: File) => {
    emit(du.updatePhoto(file));
  }, []);

  return (
    <form className="avatar-form">
      <div className="image-change-field">
        <span className="update-overlay" onClick={onImageClick}>
          {tr("labels.update")}
        </span>
        <img src={photo} alt="" />
        <FileUploader
          accept="image/jpeg,image/png"
          multi={false}
          ref={inputRef}
          onSelected={onFileSelected}
          data-testid="profile-image-input"
        />
      </div>
    </form>
  );
}

export function ProfilePage() {
  React.useEffect(() => {
    dom.setHtmlTitle(tr("title.settings.profile"));
  }, []);

  return (
    <div className="dashboard-settings">
      <div className="form-container">
        <h2>{tr("labels.profile")}</h2>
        <ProfilePhotoForm />
        <ProfileForm />
      </div>
    </div>
  );
}

import { useRef } from "react";
import { useDeref } from "@shared/rum";