// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { dmStr } from 'app/common/data/macros'
import * as cf from 'app/config'
import * as dd from '@main/data/dashboard'
import * as modal from '@main/data/modal'
import * as refs from '@main/refs'
import * as store from '@main/store'
import * as deprecatedIcon from '@ui/icons'
import * as http from '@util/http'
import { tr } from '@util/i18n'
import * as wapi from '@util/webapi'
import { send } from '@util/http'
import { from, dispose } from 'rxjs'
import React, { useCallback, useState } from 'react'

interface TemplateItemProps {
  name: string
  path: string
  image: string
  projectId: string
}

const TemplateItem: React.FC<TemplateItemProps> = ({
  name,
  path,
  image,
  projectId,
}) => {
  const [downloading, setDownloading] = useState(false)

  const onFinishImport = useCallback(() => {
    store.emit(dd.fetchRecentFiles())
  }, [])

  const openImportModal = useCallback(
    (file: any) => {
      store.emit(
        modal.show({
          type: 'import',
          projectId,
          files: [file],
          onFinishImport,
        })
      )
    },
    [projectId, onFinishImport]
  )

  const onClick = useCallback(() => {
    setDownloading(true)
    const link = dmStr({ ...cf.publicUri, path })

    from(
      send({
        method: 'get',
        uri: link,
        responseType: 'blob',
        mode: 'no-cors',
      })
    ).subscribe(
      ({ body }: any) => {
        openImportModal({ name, uri: wapi.createUri(body) })
      },
      (error) => {
        console.log('error', error)
      },
      () => {
        setDownloading(false)
      }
    )
  }, [link, name, openImportModal])

  return (
    <div className="template-item">
      <div className="template-item-content">
        <img src={image} />
      </div>
      <div className="template-item-title">
        <div className="label">{name}</div>
        {downloading ? (
          <div className="action">Fetching...</div>
        ) : (
          <div className="action" onClick={onClick}>
            + Add to drafts
          </div>
        )}
      </div>
    </div>
  )
}

interface OnboardingTemplatesModalProps {
  projectId?: string
}

export const OnboardingTemplatesModal: React.FC<OnboardingTemplatesModalProps> = ({
  projectId,
}) => {
  const profile = refs.profile
  const resolvedProjectId = projectId ?? profile?.defaultProjectId

  return (
    <div className="modal-overlay">
      <div className="modal-container onboarding-templates">
        <div className="modal-header">
          <div
            className="modal-close-button"
            onClick={modal.hide}
            data-testid="close-templates-btn"
          >
            {deprecatedIcon.close}
          </div>
        </div>

        <div className="modal-content">
          <h3>{tr('onboarding.templates.title')}</h3>
          <p>{tr('onboarding.templates.subtitle')}</p>

          <div className="templates">
            <TemplateItem
              path="/github/penpot-files/Penpot-Design-system.penpot"
              image="https://penpot.app/images/libraries/cover-ds-penpot.jpg"
              name="Penpot Design System"
              projectId={resolvedProjectId}
            />
            <TemplateItem
              path="/github/penpot-files/Material-Design-Kit.penpot"
              image="https://penpot.app/images/libraries/cover-material.jpg"
              name="Material Design Kit"
              projectId={resolvedProjectId}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
