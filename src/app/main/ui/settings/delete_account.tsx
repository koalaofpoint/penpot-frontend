// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useCallback } from "react";
import * as modal from "@app/main/data/modal";
import * as ntf from "@app/main/data/notifications";
import * as du from "@app/main/data/profile";
import { emit } from "@app/main/store";
import * as deprecatedIcon from "@app/main/ui/icons";
import { ContextNotification } from "@app/main/ui/notifications/context-notification";
import { tr } from "@app/util/i18n";

function onError(cause: any) {
  const code = exData(cause)?.code;
  if (code === "owner-teams-with-people") {
    const msg = tr("notifications.profile-deletion-not-allowed");
    emit(ntf.error(msg));
  } else {
    throw cause;
  }
}

export function DeleteAccountModal() {
  const onAccept = useCallback(() => {
    emit(
      modal.hide(),
      du.requestAccountDeletion(withMeta({}, { onError }))
    );
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2 className="modal-title">{tr("modals.delete-account.title")}</h2>
          <button className="modal-close-btn" onClick={modal.hide}>
            {deprecatedIcon.close}
          </button>
        </div>

        <div className="modal-content">
          <ContextNotification
            level="warning"
            content={tr("modals.delete-account.info")}
          />
        </div>

        <div className="modal-footer">
          <div className="action-buttons">
            <button className="cancel-button" onClick={modal.hide}>
              {tr("modals.delete-account.cancel")}
            </button>
            <button
              className="accept-button danger"
              onClick={onAccept}
              data-testid="delete-account-btn"
            >
              {tr("modals.delete-account.confirm")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}