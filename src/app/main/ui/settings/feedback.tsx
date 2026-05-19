// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useCallback, useState } from "react";
import * as d from "@app/common/data";
import * as sm from "@app/common/schema";
import * as ntf from "@app/main/data/notifications";
import * as errors from "@app/main/errors";
import * as refs from "@app/main/refs";
import * as rp from "@app/main/repo";
import { emit } from "@app/main/store";
import * as fm from "@app/main/ui/components/forms";
import * as dom from "@app/util/dom";
import { tr } from "@app/util/i18n";
import * as tm from "@app/util/timers";
import * as wapi from "@app/util/webapi";

const schemaFeedbackForm = sm.schema({
  title: "FeedbackForm",
  fields: {
    subject: sm.text({ max: 250 }),
    type: sm.string({ max: 250 }),
    content: sm.text({ max: 5000 }),
    errorReport: sm.optional(sm.text()),
    errorHref: sm.optional(sm.text({ max: 2048 }))
  }
});

interface FeedbackFormProps {
  errorReport?: string;
  type?: string;
  errorHref?: string;
}

export function FeedbackForm(props: FeedbackFormProps) {
  const { errorReport, type, errorHref } = props;

  const profile = useDeref(refs.profile);

  const initial = useMemo(() =>
    d.withoutNils({
      subject: "",
      type: d.nilv(type, ""),
      content: "",
      errorHref,
      errorReport
    })
  , [errorHref, errorReport]);

  const form = fm.useForm({
    schema: schemaFeedbackForm,
    initial
  });

  const [loading, setLoading] = useState(false);

  const report = useMemo(() => {
    return errorReport ? wapi.createBlob(errorReport, "text/plain") : null;
  }, [errorReport]);

  const onDownload = useCallback((event: React.MouseEvent) => {
    dom.preventDefault(event);
    const uri = wapi.createUri(report);
    dom.triggerDownloadUri("report", "text/plain", uri);
    tm.scheduleOnIdle(() => wapi.revokeUri(uri));
  }, [report]);

  const onSuccess = useCallback((_: any) => {
    setLoading(false);
    emit(ntf.success(tr("labels.feedback-sent")));
    form.reset({ data: {}, touched: {}, errors: {} });
  }, [form]);

  const onError = useCallback(({ code }: any) => {
    setLoading(false);
    if (code === "feedback-disabled") {
      emit(ntf.error(tr("labels.feedback-disabled")));
    } else {
      emit(ntf.error(tr("errors.generic")));
    }
  }, []);

  const onSubmit = useCallback((formData: any) => {
    setLoading(true);
    const data = formData.cleanData;
    rp.cmd("send-user-feedback", data).subscribe(onSuccess, onError);
  }, [onSuccess, onError]);

  return (
    <fm.Form className="feedback-form" onSubmit={onSubmit} form={form}>
      <h2 className="field-title feedback-title">{tr("feedback.title-contact-us")}</h2>
      <p className="field-text feedback-title">{tr("feedback.subtitle")}</p>

      <div className="fields-row">
        <fm.Input label={tr("feedback.subject")} name="subject" showSuccess />
      </div>

      <div className="fields-row">
        <label className="field-label">{tr("feedback.type")}</label>
        <fm.Select
          label={tr("feedback.type")}
          name="type"
          options={[
            { label: tr("feedback.type.idea"), value: "idea" },
            { label: tr("feedback.type.issue"), value: "issue" },
            { label: tr("feedback.type.doubt"), value: "doubt" }
          ]}
        />
      </div>

      <div className="fields-row description">
        <fm.Textarea
          className="feedback-description"
          label={tr("feedback.description")}
          name="content"
          placeholder={tr("feedback.description-placeholder")}
          rows={5}
        />
      </div>

      <div className="fields-row">
        <p className="field-text">{tr("feedback.penpot.link")}</p>
        <fm.Input
          label=""
          name="error-href"
          placeholder="https://penpot.app/"
          showSuccess
        />
        {report && (
          <a className="link download-button" onClick={onDownload}>
            {tr("labels.download", "report.txt")}
          </a>
        )}
      </div>

      <fm.SubmitButton
        label={loading ? tr("labels.sending") : tr("labels.send")}
        className="feedback-button-link"
        disabled={loading}
      />

      <hr />

      <h2 className="feedback-title">{tr("feedback.other-ways.contact")}</h2>

      <a
        className="link"
        href="https://community.penpot.app"
        target="_blank"
      >
        {tr("feedback.discourse-title")}
      </a>
      <p className="field-text bottom-margin">{tr("feedback.discourse-subtitle1")}</p>

      <a
        className="link"
        href="https://x.com/penpotapp"
        target="_blank"
      >
        {tr("feedback.twitter-title")}
      </a>
      <p className="field-text">{tr("feedback.twitter-subtitle1")}</p>
    </fm.Form>
  );
}

interface FeedbackPageProps {
  errorReportId?: string;
}

export function FeedbackPage(props: FeedbackPageProps) {
  const { errorReportId } = props;

  React.useEffect(() => {
    dom.setHtmlTitle(tr("title.settings.feedback"));
  }, []);

  const report = errorReportId === errors.lastReport?.id ? errors.lastReport?.content : null;

  return (
    <div className="dashboard-settings">
      <div className="form-container">
        <FeedbackForm {...props} errorReport={report} />
      </div>
    </div>
  );
}

import { useDeref } from "@shared/rum";