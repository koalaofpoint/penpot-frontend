// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { dmGetProp, dmStr, dmFmt } from 'app/common/data/macros'
import * as dcm from '@main/data/comments'
import * as dwcm from '@main/data/workspace/comments'
import * as refs from '@main/refs'
import * as store from '@main/store'
import * as cmt from '@ui/comments'
import React, { useCallback, useEffect, useMemo } from 'react'

interface CommentsLayerProps {
  vbox: any
  vport: any
  zoom: number
  fileId: string
  pageId: string
}

export const CommentsLayer: React.FC<CommentsLayerProps> = React.memo(
  ({ vbox, vport, zoom, fileId, pageId }) => {
    const vboxX = dmGetProp(vbox, 'x')
    const vboxY = dmGetProp(vbox, 'y')
    const vportW = dmGetProp(vport, 'width')
    const vportH = dmGetProp(vport, 'height')

    const posX = -vboxX * zoom
    const posY = -vboxY * zoom

    const profile = refs.profile
    const local = refs.commentsLocal
    const threadsMap = refs.threads

    const threads = useMemo(() => {
      return threadsMap
        ? Object.values(threadsMap)
            .filter((t) => t.pageId === pageId)
            .filter((t) => dcm.applyFilters(local, profile, t))
        : []
    }, [threadsMap, local, profile, pageId])

    const viewport = {
      ...vport,
      offsetX: posX,
      offsetY: posY,
    }

    const onDraftCancel = useCallback(() => {
      store.emit('interrupt')
    }, [])

    const onDraftSubmit = useCallback(
      (draft: any) => {
        store.emit(dcm.createThreadOnWorkspace(draft))
      },
      []
    )

    useEffect(() => {
      store.emit(dwcm.initializeComments(fileId))
      return () => {
        store.emit(dwcm.finalize())
      }
    }, [fileId])

    return (
      <div className="comments-section">
        <div
          id="comments"
          className="workspace-comments-container"
          style={{ width: dmStr(vportW, 'px'), height: dmStr(vportH, 'px') }}
        >
          <div
            className="threads"
            style={{ transform: dmFmt('translate(%px, %px)', posX, posY) }}
          >
            {cmt.groupBubbles(zoom, threads).map((threadGroup) => {
              const group = threadGroup.length > 1
              const thread = threadGroup[0]

              if (group) {
                return (
                  <cmt.commentFloatingGroup*
                    key={thread.seqn}
                    threadGroup={threadGroup}
                    zoom={zoom}
                  />
                )
              }

              return (
                <cmt.commentFloatingBubble*
                  key={thread.seqn}
                  thread={thread}
                  zoom={zoom}
                  isOpen={thread.id === local?.open}
                />
              )
            })}

            {local?.open && threadsMap[local.open] && (
              dcm.applyFilters(local, profile, [threadsMap[local.open]]).length >
                0 && (
                <cmt.commentFloatingThread*
                  thread={threadsMap[local.open]}
                  viewport={viewport}
                  zoom={zoom}
                />
              )
            )}

            {local?.draft && (
              <cmt.commentFloatingThreadDraft*
                draft={local.draft}
                onCancel={onDraftCancel}
                onSubmit={onDraftSubmit}
                viewport={viewport}
                zoom={zoom}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
)
