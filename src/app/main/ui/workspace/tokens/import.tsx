// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from "react"
import * as modal from "app/main/data/modal"
import { IconButton } from "app/main/ui/ds/buttons/icon-button"
import * as icon from "app/main/ui/ds/foundations/assets/icon"
import { ImportModalBody } from "./import/modal"
import * as stl from "app/main/style"
import { tr } from "app/util/i18n"

export const ImportModal: React.FC = () => {
  return (
    <div className={stl.css("modal-overlay")}>
      <div className={stl.css("modal-dialog")}>
        <IconButton
          className={stl.css("close-btn")}
          onClick={() => modal.hide()}
          aria-label={tr("labels.close")}
          variant="ghost"
          icon={icon.close}
        />
        <ImportModalBody />
      </div>
    </div>
  )
}