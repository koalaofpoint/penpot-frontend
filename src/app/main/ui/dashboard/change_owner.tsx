// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as sm from 'app/common/schema'
import * as modal from '@main/data/modal'
import * as fm from '@ui/components/forms'
import * as deprecatedIcon from '@ui/icons'
import { tr } from '@util/i18n'
import React, { useCallback, useMemo } from 'react'

const schemaLeaveModalForm = {
  title: 'LeaveModalForm',
  memberId: sm.uuid,
}

interface LeaveAndReassignModalProps {
  profile: any
  team: any
  accept: (memberId: string) => void
}

export const LeaveAndReassignModal: React.FC<LeaveAndReassignModalProps> = ({
  profile,
  team,
  accept,
}) => {
  const form = fm.useForm({ schema: schemaLeaveModalForm, initial: {} })
  const members = team?.members ?? []

  const options = useMemo(() => {
    const base = [
      {
        value: '',
        label: tr('modals.leave-and-reassign.select-member-to-promote'),
      },
    ]

    const memberOptions = members
      .filter((m: any) => m.email !== profile?.email)
      .map((m: any) => ({
        label: m.name,
        value: String(m.id),
      }))

    return [...base, ...memberOptions]
  }, [members, profile])

  const onAccept = useCallback(() => {
    const memberId = form.cleanData?.memberId
    accept(memberId)
  }, [form, accept])

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2 className="modal-title">
            {tr('modals.leave-and-reassign.title')}
          </h2>
          <button className="modal-close-btn" onClick={modal.hide}>
            {deprecatedIcon.close}
          </button>
        </div>

        <div className="modal-content">
          <p className="modal-msg">
            {tr('modals.leave-and-reassign.hint1', team?.name)}
          </p>

          {members.length === 0 ? (
            <p className="modal-msg">
              {tr('modals.leave-and-reassign.forbidden')}
            </p>
          ) : (
            <fm.form form={form}>
              <fm.select name="member-id" options={options} />
            </fm.form>
          )}
        </div>

        <div className="modal-footer">
          <div className="action-buttons">
            <input
              className="cancel-button"
              type="button"
              value={tr('labels.cancel')}
              onClick={modal.hide}
            />

            <input
              type="button"
              className={[
                'accept-btn',
                form.valid ? 'danger' : '',
                !form.valid ? 'global/disabled' : '',
              ].filter(Boolean).join(' ')}
              disabled={!form.valid}
              value={tr('modals.leave-and-reassign.promote-and-leave')}
              onClick={onAccept}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
