// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useCallback } from "react"
import * as modal from "app/main/data/modal"
import { Button } from "app/main/ui/ds/buttons/button"
import { IconButton } from "app/main/ui/ds/buttons/icon-button"
import { Icon, icon* } from "app/main/ui/ds/foundations/assets/icon"
import * as t from "app/main/ui/ds/foundations/typography"
import { Heading, heading* } from "app/main/ui/ds/foundations/typography/heading"
import { Text, text* } from "app/main/ui/ds/foundations/typography/text"
import * as dom from "app/util/dom"
import { tr } from "app/util/i18n"

export const VariantsHelpModal: React.FC = () => {
  const onClose = useCallback(() => {
    modal.hide()
  }, [])

  const closeDialogOutside = useCallback(
    (event: React.MouseEvent) => {
      if (dom.getTarget(event) === dom.getCurrentTarget(event)) {
        modal.hide()
      }
    },
    []
  )

  return (
    <div className="modal-overlay" onClick={closeDialogOutside}>
      <div className="modal-dialog">
        <IconButton
          onClick={onClose}
          className="modal-close-btn"
          icon={Icon}
          variant="action"
          ariaLabel={tr("labels.close")}
        />

        <Heading
          level={2}
          typography="headline-medium"
          className="modal-title"
        >
          {tr("workspace.options.component.variants-help-modal.title")}
        </Heading>

        <div className="modal-content">
          <div className="help-text">
            <Text typography={t.bodyLarge}>
              {tr("workspace.options.component.variants-help-modal.intro")}
            </Text>

            <ul className="rule-list">
              <li className="rule-item">
                <div className="rule-item-icon">
                  <Icon iconId="text-mixed" size="m" ariaHidden />
                </div>

                <div className="rule-item-text">
                  <Text
                    as="span"
                    typography={t.bodyLarge}
                    className="rule-item-highlight"
                  >
                    {tr("workspace.options.component.variants-help-modal.rule1")}
                  </Text>
                </div>
              </li>

              <li className="rule-item">
                <div className="rule-item-icon">
                  <Icon iconId="img" size="m" ariaHidden />
                </div>

                <Text typography={t.bodyLarge} className="rule-item-text">
                  <span className="rule-item-highlight">
                    {tr("workspace.options.component.variants-help-modal.rule2")}
                  </span>
                  {tr("workspace.options.component.variants-help-modal.rule2.detail")}
                </Text>
              </li>

              <li className="rule-item">
                <div className="rule-item-icon">
                  <Icon iconId="folder" size="m" ariaHidden />
                </div>

                <Text className="rule-item-text" typography={t.bodyLarge}>
                  <span className="rule-item-highlight">
                    {tr("workspace.options.component.variants-help-modal.rule3")}
                  </span>
                  {tr("workspace.options.component.variants-help-modal.rule3.detail")}
                </Text>
              </li>
            </ul>

            <Text typography={t.bodyLarge}>
              {tr("workspace.options.component.variants-help-modal.outro")}
            </Text>
          </div>

          <div className="help-image">
            <img src="images/help-variant-connection.png" alt="" />
          </div>
        </div>

        <div className="button-row">
          <Button
            variant="primary"
            type="button"
            className="modal-accept-btn"
            onClick={onClose}
          >
            {tr("ds.confirm-ok")}
          </Button>
        </div>
      </div>
    </div>
  )
}
