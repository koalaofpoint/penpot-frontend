// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useCallback } from "react"
import * as d from "app/common/data"
import * as dm from "app/common/data/macros"
import * as dw from "app/main/data/workspace"
import * as st from "app/main/store"
import { PanelTitle } from "app/main/ui/ds/product/panel-title"
import * as deprecatedIcon from "app/main/ui/icons"
import * as dbg from "app/util/debug"
import * as dom from "app/util/dom"
import { tr } from "app/util/i18n"

interface DebugPanelProps {
  className?: string
}

export const DebugPanel: React.FC<DebugPanelProps> = ({ className = "" }) => {
  const onToggleEnabled = useCallback((event: React.MouseEvent, option: string) => {
    dom.preventDefault(event)
    dom.stopPropagation(event)
    dbg.toggle!(option)
    ;(js as any).app.main.reinit(true)
  }, [])

  const handleClose = useCallback(() => {
    st.emit!(dw.removeLayoutFlag("debug-panel"))
  }, [])

  const sortedOptions = [...dbg.options].sort((a, b) => d.name(a).localeCompare(d.name(b)))

  return (
    <div className={`${className} debug-panel`}>
      <PanelTitle
        className="debug-panel-title"
        text={tr("workspace.debug.title")}
        onClose={handleClose}
      />

      <div className="debug-panel-inner">
        {sortedOptions.map((option) => (
          <div key={d.name(option)} className="checkbox-wrapper">
            <span
              className={`checkbox-icon ${dbg.enabled(option) ? "global/checked" : ""}`}
              onClick={(e) => onToggleEnabled(e, option as any)}
            >
              {dbg.enabled(option) && deprecatedIcon.statusTick}
            </span>

            <input
              type="checkbox"
              id={d.name(option)}
              key={d.name(option)}
              onChange={(e) => onToggleEnabled(e as any, option as any)}
              checked={dbg.enabled(option)}
            />
            <label htmlFor={d.name(option)}>{d.name(option)}</label>
          </div>
        ))}
      </div>
    </div>
  )
}
