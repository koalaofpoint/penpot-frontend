// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { dmStr } from 'app/common/data/macros'
import * as dwtl from '@main/data/workspace/tokens/library-edit'
import * as refs from '@main/refs'
import * as store from '@main/store'
import { Dropdown } from '@ui/components/dropdown'
import { usePortalContainer } from '@ui/hooks'
import * as dom from '@util/dom'
import { tr } from '@util/i18n'
import { derived } from 'okulary/core'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const tokensNodeMenuRef = derived(
  'token-node-context-menu',
  (state) => state.workspaceTokens?.tokenNodeContextMenu,
  refs.workspaceTokens
)

function preventDefault(event: React.SyntheticEvent) {
  dom.preventDefault(event)
  dom.stopPropagation(event)
}

interface TokenNodeContextMenuProps {
  onDeleteNode: (node: any, type: string) => void
}

export const TokenNodeContextMenu: React.FC<TokenNodeContextMenuProps> = ({
  onDeleteNode,
}) => {
  const mdata = tokensNodeMenuRef
  const isOpen = !!mdata
  const dropdownRef = useRef<HTMLDivElement>(null)
  const dropdownAction = useRef<any>(null)
  const [dropdownDirection, setDropdownDirection] = useState('down')
  const dropdownDirectionChange = useRef(0)

  const top = (mdata?.position?.y ?? 0) + 5
  const left = (mdata?.position?.x ?? 0) + 5
  const container = usePortalContainer('popup')

  const deleteNode = useCallback(() => {
    const node = mdata?.node
    const type = mdata?.type
    if (node) {
      onDeleteNode(node, type)
    }
  }, [mdata, onDeleteNode])

  useEffect(() => {
    if (dropdownDirectionChange.current !== 0 && isOpen === false) {
      setDropdownDirection('down')
      dropdownDirectionChange.current = 0
    }
  }, [isOpen])

  useEffect(() => {
    const dropdownElement = dropdownRef.current
    if (dropdownDirectionChange.current === 0 && dropdownElement) {
      const isOutside = dom.isElementOutside(dropdownElement)
      setDropdownDirection(isOutside ? 'up' : 'down')
      dropdownDirectionChange.current++
    }
  }, [isOpen, dropdownRef.current])

  if (!isOpen) return null

  return createPortal(
    <Dropdown
      show={isOpen}
      onClose={() => store.emit(dwtl.assignTokenNodeContextMenu(null))}
    >
      <div
        className="token-node-context-menu"
        data-testid="tokens-context-menu-for-token-node"
        ref={dropdownRef}
        data-direction={dropdownDirection}
        style={{
          '--bottom': dropdownDirection === 'up' ? '40px' : 'unset',
          '--top': dmStr(top, 'px'),
          left: dmStr(left, 'px'),
        }}
        onContextMenu={preventDefault}
      >
        {mdata && (
          <ul className="token-node-context-menu-list">
            <li className="token-node-context-menu-listitem">
              <button
                className="token-node-context-menu-action"
                type="button"
                onClick={deleteNode}
              >
                {tr('labels.delete')}
              </button>
            </li>
          </ul>
        )}
      </div>
    </Dropdown>,
    container
  )
}
