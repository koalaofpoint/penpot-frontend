// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react"
import * as dm from "app/common/data/macros"
import {refs} from "app/main/refs"
import {Dropdown} from "app/main/ui/components/dropdown"
import * as DeprecatedIcon from "app/main/ui/icons"
import {tr} from "app/util/i18n"

interface TextPaletteCtxMenuProps {
  showMenu?: boolean
  closeMenu: () => void
  onSelectPalette: (library: any) => void
  selected: string
}

export const TextPaletteCtxMenu: React.FC<TextPaletteCtxMenuProps> = (props) => {
  const {showMenu, closeMenu, onSelectPalette, selected} = props

  const typographies = (refs.workspaceFileTypography as any)?.deref?.()
  const libraries = (refs.libraries as any)?.deref?.()

  const libraryEntries = libraries ? Object.values(libraries) as any[] : []

  return (
    <Dropdown show={showMenu} onClose={closeMenu}>
      <ul className="text-context-menu">
        {libraryEntries.map((curLibrary: any, idx: number) => {
          const libraryTypographies = Object.values((curLibrary as any).data?.typographies || {})
          return (
            <li
              key={`library-${idx}`}
              className={["palette-library", selected === curLibrary.id ? "selected" : ""].filter(Boolean).join(" ")}
              onClick={() => onSelectPalette(curLibrary)}
            >
              <div className="library-name">
                <span className="lib-name">{curLibrary.name}</span>
                <span className="lib-num">({libraryTypographies.length})</span>
              </div>
              {selected === curLibrary.id && (
                <span className="icon-wrapper">{DeprecatedIcon.tick}</span>
              )}
            </li>
          )
        })}

        <li
          className={["file-library", selected === ":file" ? "selected" : ""].filter(Boolean).join(" ")}
          onClick={() => onSelectPalette(":file")}
        >
          <div className="library-name">
            <span className="lib-name">{tr("workspace.libraries.colors.file-library")}</span>
            <span className="lib-num">({Object.keys(typographies || {}).length})</span>
          </div>
          {selected === ":file" && (
            <span className="icon-wrapper">{DeprecatedIcon.tick}</span>
          )}
        </li>
      </ul>
    </Dropdown>
  )
}