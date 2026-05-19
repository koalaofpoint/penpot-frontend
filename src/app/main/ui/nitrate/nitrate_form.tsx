// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useCallback } from "react"
import * as modal from "app/main/data/modal"
import { Button } from "app/main/ui/ds/buttons/button"
import * as deprecatedIcon from "app/main/ui/icons"
import * as dom from "app/util/dom"
import { tr } from "app/util/i18n"

// FIXME: rename to `form` (remove the nitrate prefix from namespace,
// because it is already under nitrate)

export const NitrateFormModal: React.FC = () => {
  const onClick = useCallback(() => {
    dom.openNewWindow("/control-center/licenses/start")
  }, [])

  return (
    <div className={(stl as any).css("modal-overlay")}>
      <div className={(stl as any).css("modal-container")}>
        <div className={(stl as any).css("nitrate-form")}>
          <div className={(stl as any).css("modal-header")}>
            <h2 className={(stl as any).css("modal-title")}>
              {"BUY NITRATE"}
            </h2>

            <button
              className={(stl as any).css("modal-close-btn")}
              onClick={modal.hide}
            >
              {deprecatedIcon.close}
            </button>
          </div>

          <div className={(stl as any).css("modal-content")}>
            {"Nitrate is so cool! You should buy it!"}
          </div>

          <div className={(stl as any).css("modal-footer")}>
            <div className={(stl as any).css("action-buttons")}>
              <Button variant="primary" onClick={onClick}>
                {"BUY NOW!"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Registration handled via modal system
