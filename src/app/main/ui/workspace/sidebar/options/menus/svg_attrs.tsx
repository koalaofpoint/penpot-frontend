// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react"
import * as DOM from "app/util/dom"
import * as UF from "app/util/functions"
import {_tr} from "app/util/i18n"
import {updateShapes} from "app/main/data/workspace/shapes"
import {store} from "app/main/store"
import {TitleBar} from "app/main/ui/components/title-bar"
import * as DI from "app/main/ui/icons"
import * as D from "app/common/data"

interface AttributeValueProps {
  attr: any
  value: any
  onChange: (attr: any, value: any) => void
  onDelete: (attr: any) => void
}

const AttributeValue: React.FC<AttributeValueProps> = (props) => {
  const {attr, value, onChange, onDelete} = props
  const [lastValue, setLastValue] = React.useState(value)

  const handleChangeDebounced = React.useCallback(
    UF.debounce((val: any) => {
      onChange(attr, val)
    }, 300),
    [attr, onChange]
  )

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = DOM.getTargetVal(event)
      setLastValue(newValue)
      handleChangeDebounced(newValue)
    },
    [attr, onChange, handleChangeDebounced]
  )

  const handleDelete = React.useCallback(
    () => {
      onDelete(attr)
    },
    [attr, onDelete]
  )

  const label = D.name(D.last(attr))

  if (typeof value === "string") {
    return (
      <>
        <div className="attr-content">
          <span className="attr-name">{label}</span>
          <div className="attr-input">
            <input
              value={lastValue}
              onChange={handleChange}
            />
          </div>
          <div className="attr-actions">
            <button className="attr-action-btn" onClick={handleDelete}>
              <DI.remove-icon/>
            </button>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="attr-nested-content">
          <div className="attr-title">
            {String(D.name(D.last(attr)))}
          </div>
          {Array.from(value).map(([key, nestedValue]) => (
            <div className="attr-row" key={String(key)}>
              <AttributeValue
                attr={[...attr, key]}
                value={nestedValue}
                onChange={onChange}
                onDelete={onDelete}
              />
            </div>
          ))}
        </div>
      </>
    )
  }
}

interface SvgAttrsMenuProps {
  ids: string[]
  values: any
}

export const SvgAttrsMenu: React.FC<SvgAttrsMenuProps> = (props) => {
  const {ids, values} = props
  const [state, setState] = React.useState(true)
  const open = state
  const attrs = values["svg-attrs"]
  const hasAttributes = attrs === ":multiple" || (attrs != null && attrs.length > 0)

  const toggleContent = React.useCallback(() => setState(prev => !prev), [])

  const handleChange = React.useCallback(
    (attr: any, value: any) => {
      const updateFn = (shape: any) => D.assocIn(shape, ["svg-attrs", ...attr], value)
      store.emit(updateShapes(ids, updateFn))
    },
    [ids]
  )

  const handleDelete = React.useCallback(
    (attr: any) => {
      const updateFn = (shape: any) => {
        const updatePath = ["svg-attrs", ...D.butlast(attr)]
        let newShape = D.updateIn(shape, updatePath, D.dissoc, D.last(attr))

        if (D.empty(D.getIn(newShape, ["svg-attrs", "style"]))) {
          newShape = D.dissoc(newShape, "svg-attrs")
        }
        return newShape
      }
      store.emit(updateShapes(ids, updateFn))
    },
    [ids]
  )

  if (D.empty(attrs)) {
    return null
  }

  return (
    <div className="element-set">
      <div className="element-set-title">
        <TitleBar
          collapsable={hasAttributes}
          collapsed={!open}
          onCollapsed={toggleContent}
          title={_tr("workspace.sidebar.options.svg-attrs.title")}
        />
      </div>
      {open && (
        <div className="element-set-content">
          {Object.entries(attrs).map(([attrKey, attrValue]) => (
            <AttributeValue
              key={attrKey}
              attr={[attrKey]}
              value={attrValue}
              onChange={handleChange}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  )
}
