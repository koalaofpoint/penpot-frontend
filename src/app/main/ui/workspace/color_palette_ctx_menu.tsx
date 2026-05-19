// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react"
import * as dm from "app/common/data/macros"
import {refs} from "app/main/refs"
import {ColorBullet} from "app/main/ui/components/color-bullet"
import {Dropdown} from "app/main/ui/components/dropdown"
import {Ctx} from "app/main/ui/context"
import * as DeprecatedIcon from "app/main/ui/icons"
import {tr} from "app/util/i18n"

interface ColorPaletteCtxMenuProps {
  show: boolean
  onClose: () => void
  onSelect: (paletteId: string) => void
  selected: string
}

export const ColorPaletteCtxMenu: React.FC<ColorPaletteCtxMenuProps> = (props) => {
  const {show, onClose, onSelect, selected} = props

  const recentColors = (refs.recentColors as any)?.deref?.()
  const libraries = (refs.libraries as any)?.deref?.()

  const fileId = React.useContext(Ctx.CurrentFileIdContext)

  const localColors = React.useMemo(() => {
    const colors = dm.getIn(libraries, [fileId, "data", "colors"])
    return colors ? Object.values(colors).slice(0, 7) : []
  }, [libraries, fileId])

  const libraryList = React.useMemo(() => {
    const result: any[] = []
    if (libraries) {
      Object.keys(libraries).forEach((key) => {
        if (key !== fileId) {
          const lib = libraries[key]
          const libColors = dm.getIn(libraries, [key, "data", "colors"])
          const colors = libColors ? Object.values(libColors).slice(0, 7) : []
          result.push({...lib, colors})
        }
      })
    }
    return result
  }, [libraries, fileId])

  const recentColorsList = React.useMemo(() => {
    return [...(recentColors || [])].reverse().slice(0, 7).map((color: any, index: number) =>
      Object.assign({}, color, {["::id"]: String(index)})
    )
  }, [recentColors])

  return (
    <Dropdown show={show} onClose={onClose}>
      <ul className="palette-menu">
        {libraryList.map((library: any) => (
          <li
            key={`library-${library.id}`}
            className={["palette-library", selected === library.id ? "selected" : ""].filter(Boolean).join(" ")}
            onClick={() => onSelect()}
            data-palette={library.id}
          >
            <div className="option-wrapper">
              <div className="library-name">
                <div className="lib-name-wrapper">
                  <span className="lib-name">{library.name}</span>
                  <span className="lib-num">({library.colors.length})</span>
                </div>
                {selected === library.id && (
                  <span className="icon-wrapper">{DeprecatedIcon.tick}</span>
                )}
              </div>
              <div className="color-sample" style={{"--bullet-size": "20px"} as any}>
                {library.colors.map((color: any) => (
                  <ColorBullet key={color.id} mini={true} color={color} />
                ))}
              </div>
            </div>
          </li>
        ))}

        <li
          className={["file-library", selected === ":file" ? "selected" : ""].filter(Boolean).join(" ")}
          onClick={() => onSelect()}
          data-palette="file"
        >
          <div className="option-wrapper">
            <div className="library-name">
              <div className="lib-name-wrapper">
                <span className="lib-name">{tr("workspace.libraries.colors.file-library")}</span>
                <span className="lib-num">({localColors.length})</span>
              </div>
              {selected === ":file" && (
                <span className="icon-wrapper">{DeprecatedIcon.tick}</span>
              )}
            </div>
            <div className="color-sample" style={{"--bullet-size": "20px"} as any}>
              {localColors.map((color: any) => (
                <ColorBullet key={color.id} mini={true} color={color} />
              ))}
            </div>
          </div>
        </li>

        <li
          className={["recent-colors", selected === ":recent" ? "selected" : ""].filter(Boolean).join(" ")}
          onClick={() => onSelect()}
          data-palette="recent"
        >
          <div className="option-wrapper">
            <div className="library-name">
              <div className="lib-name-wrapper">
                <span className="lib-name">{tr("workspace.libraries.colors.recent-colors")}</span>
                <span className="lib-num">({recentColorsList.length})</span>
              </div>
              {selected === ":recent" && (
                <span className="icon-wrapper">{DeprecatedIcon.tick}</span>
              )}
            </div>
            <div className="color-sample" style={{"--bullet-size": "20px"} as any}>
              {recentColorsList.map((color: any) => (
                <ColorBullet key={color["::id"]} mini={true} color={color} />
              ))}
            </div>
          </div>
        </li>
      </ul>
    </Dropdown>
  )
}