// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { rx } from '@beicon/v2'
import { rp } from '@app.main.repo'
import { modal } from '@app.main.data.modal'
import { ev } from '@app.main.data.event'
import { d } from '@app.common.data'
import { sm } from '@app.common.schema'
import { sse } from '@app.util.sse'
import { cmd } from '@potok/v2'

export const validTypes = d.orderedSet(['all', 'merge', 'detach'])

export const validFormats = new Set(['binfile-v1', 'binfile-v3', 'legacy-zip'])

const exportFilesSchema: sm.CheckFn = sm.checkFn({
  title: "Files",
  schema: [
    {
      title: "FileParam",
      schema: {
        id: sm.uuid,
        name: "string",
        project_id: sm.uuid,
        is_shared: sm.boolean
      }
    }
  ]
})

export function openExportDialog(files: any) {
  const checkedFiles = exportFilesSchema(files)

  return cmd.reify('export-files', {
    WatchEvent: {
      watch(_, state, _) {
        const teamId = state.get('current-team-id')

        return rx.merge(
          rx.of(ev.event({
            [ev.name]: 'export-binary-files',
            [ev.origin]: 'dashboard',
            format: 'binfile-v3',
            num_files: checkedFiles.size
          })),

          rx.from(checkedFiles).pipe(
            rx.mapcat((file) =>
              rp.cmd!('has-file-libraries', { file_id: file.get('id') })
                .map((hasLibraries: boolean) => file.set('has-libraries', hasLibraries))
            ),
            rx.reduce((acc, file) => acc.push(file), []),
            rx.map((filesWithLibraries) =>
              modal.show({
                type: 'export-files',
                team_id: teamId,
                files: filesWithLibraries
              })
            )
          )
        )
      }
    }
  })
}

export function exportFiles({ type, files }: { type: string; files: any }) {
  return rx.from(files).pipe(
    rx.mapcat((file) =>
      rp.cmd!('sse-export-binfile', {
        file_id: file.get('id'),
        version: 3,
        include_libraries: type === 'all',
        embed_assets: type === 'merge'
      })
        .filter(sse.endOfStream)
        .map(sse.getPayload)
        .map((uri: string) => ({
          file_id: file.get('id'),
          uri,
          filename: file.get('name')
        }))
        .catch((cause) => {
          const error = cause.data
          return rx.of({
            file_id: file.get('id'),
            error
          })
        })
    )
  )
}

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// Team Request
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

export function createTeamAccessRequest(params: any) {
  const { onSuccess = (x) => x, onError = rx.throw, ...rest } = params.meta || {}

  return cmd.reify('create-team-access-request', {
    WatchEvent: {
      watch(_, _, _) {
        return rp.cmd!('create-team-access-request', rest)
          .tap(onSuccess)
          .catch(onError)
      }
    }
  })
}