// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { cmd } from '@potok/v2'
import { rx } from '@beicon/v2'
import { st } from '@app.main/store'
import { refs } from '@app.main.refs'
import { rp } from '@app.main.repo'
import { ev } from '@app.main.data.event'
import { dsh } from '@app.main.data.helpers'
import { modal } from '@app.main.data.modal'
import { dwp } from '@app.main.data.persistence'
import { dom } from '@app.util.dom'
import { ws } from '@app.util.websocket'
import { ct } from '@app.common.time'
import { uuid } from '@app.common.uuid'

export const defaultTimeout = 5000

export function toggleDetailVisibility() {
  return cmd.reify('toggle-detail-visibility', {
    UpdateEvent: {
      update(state) {
        return state.update(['export', 'detail-visible'], (visible) => !visible)
      }
    }
  })
}

export function toggleWidgetVisibility() {
  return cmd.reify('toggle-widget-visibility', {
    UpdateEvent: {
      update(state) {
        return state.update(['export', 'widget-visible'], (visible) => !visible)
      }
    }
  })
}

export function clearExportState(id: string) {
  return cmd.reify('clear-export-state', {
    UpdateEvent: {
      update(state) {
        const existingId = state.getIn(['export', 'id'])

        // only clear if the existing export is the same
        if (existingId != null && id !== existingId) {
          return state
        }

        return state.delete('export')
      }
    }
  })
}

export function showWorkspaceExportDialog({ selected, origin }: { selected?: any; origin: string }) {
  return cmd.reify('show-workspace-export-dialog', {
    WatchEvent: {
      watch(_, state, _) {
        const fileId = state.get('current-file-id')
        const pageId = state.get('current-page-id')
        const selected = selected || dsh.lookupSelected(state, pageId, {})

        const shapes = selected.size > 0
          ? dsh.lookupShapes(state, selected)
          : reverse(dsh.filterShapes(state, (shape) => shape.get('exports', []).size > 0))

        const exports = shapes.flatMap(shape =>
          shape.get('exports').map(exportData => exportData
            .set('enabled', true)
            .set('page-id', pageId)
            .set('file-id', fileId)
            .set('object-id', shape.get('id'))
            .set('shape', shape.delete('exports'))
            .set('name', shape.get('name')))
        ).toVector()

        return rx.of(
          modal.show('export-shapes', {
            exports,
            origin
          })
        )
      }
    }
  })
}

export function showViewerExportDialog({ shapes, pageId, fileId, shareId, exports }: {
  shapes: any;
  pageId: string;
  fileId: string;
  shareId?: string;
  exports: any
}) {
  return cmd.reify('show-viewer-export-dialog', {
    WatchEvent: {
      watch(_, _, _) {
        const exports = rx.from(shapes).flatMap(shape =>
          rx.from(exports).map(exportData => exportData
            .set('enabled', true)
            .set('page-id', pageId)
            .set('file-id', fileId)
            .set('object-id', shape.get('id'))
            .set('shape', shape.delete('exports'))
            .set('name', shape.get('name'))
            .condSet(shareId, 'share-id', shareId))
        )

        return rx.of(
          modal.show('export-shapes', {
            exports: exports.toVector(),
            origin: 'viewer'
          })
        )
      }
    }
  })
}

export function showWorkspaceExportFramesDialog(frames: any) {
  return cmd.reify('show-workspace-export-frames-dialog', {
    WatchEvent: {
      watch(_, state, _) {
        const fileId = state.get('current-file-id')
        const pageId = state.get('current-page-id')

        const exports = frames.map(frame => ({
          enabled: true,
          page-id: pageId,
          file-id: fileId,
          object-id: frame.get('id'),
          shape: frame,
          name: frame.get('name')
        }))

        return rx.of(
          modal.show('export-frames', {
            exports,
            origin: 'workspace:menu'
          })
        )
      }
    }
  })
}

function initializeExportStatus(exports: any, cmdType: string, resource: any) {
  return cmd.reify('initialize-export-status', {
    UpdateEvent: {
      update(state) {
        return state.set('export', {
          in_progress: true,
          resource_id: resource.get('id'),
          healthy: true,
          error: false,
          progress: 0,
          widget_visible: true,
          detail_visible: true,
          exports,
          last_update: ct.now(),
          cmd: cmdType
        })
      }
    }
  })
}

function updateExportStatus(data: { done: number; status: string; resource_uri: string; filename: string; mtype: string }) {
  return cmd.reify('update-export-status', {
    UpdateEvent: {
      update(state) {
        const timeDiff = ct.diffMs(state.getIn(['export', 'last_update']), ct.now())
        const healthy = timeDiff < 6000

        let newState = state
        if (data.status === 'running') {
          newState = newState.setIn(['export', 'progress'], data.done)
            .setIn(['export', 'last_update'], ct.now())
            .setIn(['export', 'healthy'], healthy)
        } else if (data.status === 'error') {
          newState = newState.set('export', state.get('export')
            .set('in_progress', false)
            .set('error', (data as any).cause)
            .set('last_update', ct.now())
            .set('healthy', healthy))
        } else if (data.status === 'ended') {
          newState = newState.set('export', state.get('export')
            .set('in_progress', false)
            .set('last_update', ct.now())
            .set('healthy', healthy))
        }

        return newState
      }
    },
    WatchEvent: {
      watch(_, _, _) {
        if (data.status === 'ended') {
          dom.triggerDownloadUri(data.filename, data.mtype, data.resource_uri)
        }
      }
    }
  })
}

export function requestSimpleExport({ export: exportData }: { export: any }) {
  return cmd.reify('request-simple-export', {
    UpdateEvent: {
      update(state) {
        return state.setIn(['export', 'in_progress'], true)
          .setIn(['export', 'id'], uuid.zero)
      }
    },
    WatchEvent: {
      watch(state, _, _) {
        const profileId = state.get('profile-id')
        const params = {
          exports: [exportData],
          profile_id: profileId,
          cmd: 'export-shapes' as const,
          wait: true
        }

        return rx.concat(
          rx.of(dwp.forcePersist),

          // Wait the persist to be successful
          rx.fromAtom(refs.persistenceState, { emitCurrentValue: true })
            .filter((status) => status == null || status === 'saved')
            .first()
            .timeout(400, rx.empty()),

          rp.cmd!('export', params)
            .map(({ filename, mtype, uri }: { filename: string; mtype: string; uri: string }) => {
              dom.triggerDownloadUri(filename, mtype, uri)
              clearExportState(uuid.zero)
            })
            .catch((cause) => rx.concat(
              rx.of(clearExportState(uuid.zero)),
              rx.throw(cause)
            ))
        )
      }
    }
  })
}

export function requestMultipleExport({ exports, cmd: cmdType = 'export-shapes' }: { exports: any; cmd?: string }) {
  return cmd.reify('request-multiple-export', {
    WatchEvent: {
      watch(state, _, _) {
        const resourceId = { current: null as string | null }
        const profileId = state.get('profile-id')
        const wsConn = state.get('ws-conn')

        const params = {
          exports,
          cmd: cmdType,
          profile_id: profileId,
          force_multiple: true
        }

        const progressStream = rx.from(ws.getRcvStream(wsConn))
          .filter(ws.messageEvent)
          .map((event) => event.payload)
          .filter((payload) => payload.type === 'export-update')
          .filter((payload) => payload.resource_id === resourceId.current)
          .share()

        const stopper = rx.from(progressStream)
          .filter((payload) => payload.status === 'ended' || payload.status === 'error')

        st.ongoingTasks.add('export')

        return rx.merge(
          // Force that all data is persisted; best effort.
          rx.of(dwp.forcePersist),

          // Launch the exportation process and stores the resource id locally.
          rp.cmd!('export', params)
            .map((resource: any) => {
              resourceId.current = resource.id
              return initializeExportStatus(exports, cmdType, resource)
            }),

          // We proceed to update the export state with incoming progress updates.
          // We delay the stopper for give some time to update the status with ended or errored status
          // before close the stream.
          rx.from(progressStream)
            .map(updateExportStatus)
            .takeUntil(stopper.delay(500))
            .finalize(() => {
              st.ongoingTasks.delete('export')
            }),

          // We need to hide the UI elements of the export after some interval.
          // We also delay a little bit more the stopper for ensure that after some security time,
          // the stream is completely closed.
          rx.from(progressStream)
            .filter((payload) => payload.status === 'ended')
            .take(1)
            .delay(defaultTimeout)
            .map(() => clearExportState(resourceId.current!))
            .takeUntil(stopper.delay(6000))
        )
      }
    }
  })
}

export function requestExport({ exports }: { exports: any }) {
  if (exports.size === 1) {
    return requestSimpleExport({ export: exports.first() })
  }
  return requestMultipleExport({ exports })
}

export function retryLastExport() {
  return cmd.reify('retry-last-export', {
    WatchEvent: {
      watch(_, state, _) {
        const exportState = state.get('export')
        if (exportState) {
          const params = exportState.pick(['exports', 'cmd']).toJS()
          if (Object.keys(params).length > 0) {
            return rx.of(requestMultipleExport(params))
          }
        }
        return rx.empty()
      }
    }
  })
}

export function exportShapesEvent(exports: any, origin: string) {
  const types = exports.reduce((counts: any, exportItem: any) => {
    if (['png', 'jpeg', 'webp', 'svg', 'pdf'].includes(exportItem.type)) {
      counts[exportItem.type] = (counts[exportItem.type] || 0) + 1
    }
    return counts
  }, { png: 0, jpeg: 0, webp: 0, pdf: 0, svg: 0 })

  return ev.event({
    ...types,
    [ev.name]: 'export-shapes',
    [ev.origin]: origin,
    num_shapes: exports.size
  })
}

// Helper functions
function reverse<T>(iterable: Iterable<T>): Iterable<T> {
  return Array.from(iterable).reverse()
}