// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useCallback, useRef, useState } from "react";
import * as sm from "@app/common/schema";
import * as ct from "@app/common/time";
import * as modal from "@app/main/data/modal";
import * as ntf from "@app/main/data/notifications";
import * as du from "@app/main/data/profile";
import { emit } from "@app/main/store";
import { ContextMenu } from "@app/main/ui/components/context-menu-a11y";
import * as fm from "@app/main/ui/components/forms";
import * as deprecatedIcon from "@app/main/ui/icons";
import { clipboard } from "@app/util/clipboard";
import * as dom from "@app/util/dom";
import { tr } from "@app/util/i18n";
import * as kbd from "@app/util/keyboard";

const clipboardIcon = deprecatedIcon.iconXref("clipboard", "clipboard-icon");
const closeIcon = deprecatedIcon.iconXref("close", "close-icon");
const menuIcon = deprecatedIcon.iconXref("menu", "menu-icon");

const tokensRef = l.derived(":access-tokens", st.state);
const tokenCreatedRef = l.derived(":access-token-created", st.state);

const schemaForm = sm.schema({
  title: "AccessTokenForm",
  fields: {
    name: sm.text({ max: 250 }),
    expirationDate: sm.text({ max: 250 })
  }
});

const initialData = {
  name: "",
  expirationDate: "never"
};

export function AccessTokenModal() {
  const form = fm.useForm({
    initial: initialData,
    schema: schemaForm
  });

  const created = useDeref(tokenCreatedRef);
  const [createdSuccess, setCreatedSuccess] = useState(false);

  const onSuccess = useCallback((_: any) => {
    const message = tr("dashboard.access-tokens.create.success");
    emit(du.fetchAccessTokens(), ntf.success(message), setCreatedSuccess(true));
  }, []);

  const onClose = useCallback((_: any) => {
    setCreatedSuccess(false);
    emit(modal.hide());
  }, []);

  const onError = useCallback((_: any) => {
    emit(ntf.error(tr("errors.generic")), modal.hide());
  }, []);

  const onSubmit = useCallback((formData: any) => {
    const cdata = formData.cleanData;
    const mdata = {
      onSuccess: partial(onSuccess, formData),
      onError: partial(onError, formData)
    };
    const expiration = cdata.expirationDate;
    let params: any = { name: cdata.name, perms: cdata.perms };
    if (expiration !== "never") {
      params.expiration = expiration;
    }
    emit(du.createAccessToken(withMeta(params, mdata)));
  }, [onSuccess, onError]);

  const copyToken = useCallback((event: React.MouseEvent) => {
    dom.preventDefault(event);
    clipboard.toClipboard(created?.token);
    emit(ntf.show({
      level: "info",
      type: "toast",
      content: tr("dashboard.access-tokens.copied-success"),
      timeout: 7000
    }));
  }, [created]);

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <fm.Form form={form} onSubmit={onSubmit}>
          <div className="modal-header">
            <h2 className="modal-title">{tr("modals.create-access-token.title")}</h2>
            <button className="modal-close-btn" onClick={onClose}>
              {closeIcon}
            </button>
          </div>

          <div className="modal-content">
            <div className="fields-row">
              <fm.Input
                type="text"
                autoFocus
                form={form}
                name="name"
                disabled={createdSuccess}
                label={tr("modals.create-access-token.name.label")}
                showSuccess
                placeholder={tr("modals.create-access-token.name.placeholder")}
              />
            </div>

            <div className="fields-row">
              <div className="select-title">
                {tr("modals.create-access-token.expiration-date.label")}
              </div>
              <fm.Select
                options={[
                  { label: tr("dashboard.access-tokens.expiration-never"), value: "never", key: "never" },
                  { label: tr("dashboard.access-tokens.expiration-30-days"), value: "720h", key: "720h" },
                  { label: tr("dashboard.access-tokens.expiration-60-days"), value: "1440h", key: "1440h" },
                  { label: tr("dashboard.access-tokens.expiration-90-days"), value: "2160h", key: "2160h" },
                  { label: tr("dashboard.access-tokens.expiration-180-days"), value: "4320h", key: "4320h" }
                ]}
                default="never"
                disabled={createdSuccess}
                name="expiration-date"
              />
              {createdSuccess && (
                <span className="token-created-info">
                  {created?.expiresAt
                    ? tr("dashboard.access-tokens.token-will-expire", ct.formatInst(created.expiresAt, "PPP"))
                    : tr("dashboard.access-tokens.token-will-not-expire")}
                </span>
              )}
            </div>

            <div className="fields-row">
              {createdSuccess && (
                <div className="custon-input-wrapper">
                  <input
                    type="text"
                    value={created?.token || ""}
                    className="custom-input-token"
                    readOnly
                  />
                  <button
                    title={tr("modals.create-access-token.copy-token")}
                    className="copy-btn"
                    onClick={copyToken}
                  >
                    {clipboardIcon}
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="modal-footer">
            <div className="action-buttons">
              {createdSuccess ? (
                <input
                  className="cancel-button"
                  type="button"
                  value={tr("labels.close")}
                  onClick={modal.hide}
                />
              ) : (
                <>
                  <input
                    className="cancel-button"
                    type="button"
                    value={tr("labels.cancel")}
                    onClick={modal.hide}
                  />
                  <fm.SubmitButton large={false} label={tr("modals.create-access-token.submit-label")} />
                </>
              )}
            </div>
          </div>
        </fm.Form>
      </div>
    </div>
  );
}

export function AccessTokensHero() {
  const onClick = useCallback(() => {
    emit(modal.show("access-token", {}));
  }, []);

  return (
    <div className="access-tokens-hero">
      <h2 className="hero-title">{tr("dashboard.access-tokens.personal")}</h2>
      <p className="hero-desc">{tr("dashboard.access-tokens.personal.description")}</p>
      <button className="hero-btn" onClick={onClick}>
        {tr("dashboard.access-tokens.create")}
      </button>
    </div>
  );
}

interface AccessTokenActionsProps {
  onDelete: () => void;
}

export function AccessTokenActions(props: AccessTokenActionsProps) {
  const { onDelete } = props;

  const [local, setLocal] = useState({ menuOpen: false });
  const show = local.menuOpen;

  const options = useMemo(() => [
    { name: tr("labels.delete"), id: "access-token-delete", handler: onDelete }
  ], [onDelete]);

  const menuRef = useRef<HTMLButtonElement>(null);

  const onMenuClose = useCallback(() => {
    setLocal((prev) => ({ ...prev, menuOpen: false }));
  }, []);

  const onMenuClick = useCallback((event: React.MouseEvent) => {
    dom.preventDefault(event);
    setLocal((prev) => ({ ...prev, menuOpen: true }));
  }, []);

  const onKeydown = useCallback((event: React.KeyboardEvent) => {
    if (kbd.enter(event)) {
      dom.stopPropagation(event);
      onMenuClick(event as any);
    }
  }, [onMenuClick]);

  return (
    <button
      className="menu-btn"
      tabIndex={0}
      ref={menuRef}
      onClick={onMenuClick}
      onKeyDown={onKeydown}
    >
      {menuIcon}
      <ContextMenu
        onClose={onMenuClose}
        show={show}
        fixed
        minWidth
        top="auto"
        left="auto"
        options={options}
      />
    </button>
  );
}

interface AccessTokenItemProps {
  token: any;
}

export function AccessTokenItem(props: AccessTokenItemProps) {
  const { token } = props;

  const expiresAt = token?.expiresAt;
  const expiresTxt = expiresAt ? ct.formatInst(expiresAt, "PPP") : null;
  const expired = expiresAt && ct.now() > expiresAt;

  const deleteFn = useCallback(() => {
    const params = { id: token.id };
    const mdata = { onSuccess: () => emit(du.fetchAccessTokens()) };
    emit(du.deleteAccessToken(withMeta(params, mdata)));
  }, [token]);

  const onDelete = useCallback(() => {
    emit(modal.show({
      type: "confirm",
      title: tr("modals.delete-acces-token.title"),
      message: tr("modals.delete-acces-token.message"),
      acceptLabel: tr("modals.delete-acces-token.accept"),
      onAccept: deleteFn
    }));
  }, [deleteFn]);

  return (
    <div className="table-row">
      <div className="table-field field-name">{token.name}</div>
      <div className={`expiration-date ${expired ? "expired" : ""}`}>
        {expiresAt === null
          ? tr("dashboard.access-tokens.no-expiration")
          : expired
            ? tr("dashboard.access-tokens.expired-on", expiresTxt)
            : tr("dashboard.access-tokens.expires-on", expiresTxt)}
      </div>
      <div className="table-field actions">
        <AccessTokenActions onDelete={onDelete} />
      </div>
    </div>
  );
}

export function AccessTokensPage() {
  const tokens = useDeref(tokensRef);

  React.useEffect(() => {
    dom.setHtmlTitle(tr("title.settings.access-tokens"));
    emit(du.fetchAccessTokens());
  }, []);

  return (
    <div className="dashboard-access-tokens">
      <AccessTokensHero />
      {tokens?.length === 0 ? (
        <div className="access-tokens-empty">
          <div>{tr("dashboard.access-tokens.empty.no-access-tokens")}</div>
          <div>{tr("dashboard.access-tokens.empty.add-one")}</div>
        </div>
      ) : (
        <div className="dashboard-table">
          <div className="table-rows">
            {tokens?.map((token: any) => (
              <AccessTokenItem key={token.id} token={token} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

import { useDeref } from "@shared/rum";
import { l } from "okulary.core";
import { st } from "@app/main/store";