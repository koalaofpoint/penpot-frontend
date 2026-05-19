// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useState, useCallback, useMemo } from "react"
import * as d from "app/common/data"
import * as de from "app/main/data/exports/assets"
import * as dwsh from "app/main/data/workspace/shapes"
import {refs} from "app/main/refs"
import {store} from "app/main/store"
import {Select} from "app/main/ui/components/select"
import {TitleBar} from "app/main/ui/components/title-bar"
import {IconButton} from "app/main/ui/ds/buttons/icon-button"
import * as i from "app/main/ui/ds/foundations/assets/icon"
import * as dom from "app/util/dom"
import {c, tr} from "app/util/i18n"
import * as kbd from "app/util/keyboard"

const exportsAttrs = ["exports"]

function checkExportsMenuProps(oldProps: any, newProps: any): boolean {
  return (
    oldProps?.["ids"] === newProps?.["ids"] &&
    oldProps?.["type"] === newProps?.["type"] &&
    oldProps?.["pageId"] === newProps?.["pageId"] &&
    oldProps?.["fileId"] === newProps?.["fileId"] &&
    oldProps?.["values"] === newProps?.["values"]
  )
}

interface ExportsMenuProps {
  ids: string[]
  type: string
  shapes: any[]
  values: any
  fileId: string
  pageId: string
}

export const ExportsMenu: React.FC<ExportsMenuProps> = React.memo(
  ({ ids, type, shapes, values, fileId, pageId }) => {
    const exports = values?.exports || []
    const [open, setOpen] = useState(true)

    const exportState = refs.export.deref()
    const inProgress = exportState?.["in-progress"]

    const hasExports =
      exports === "multiple" || (Array.isArray(exports) && exports.length > 0)

    const toggleContent = useCallback(() => setOpen((prev) => !prev), [])

    const shapesWithExports = useMemo(() => {
      return shapes?.filter((shape: any) => shape.exports && shape.exports.length > 0) || []
    }, [shapes])

    const sname = useMemo(() => {
      if (!exports || exports.length === 0) return null
      const firstShapeName = shapesWithExports?.[0]?.name
      const suffix = exports[0]?.suffix
      if (exports.length === 1 && suffix) {
        return firstShapeName + suffix
      }
      return firstShapeName
    }, [exports, shapesWithExports])

    const scaleEnabled = useCallback((exportItem: any) => {
      return ["png", "jpeg", "webp"].includes(exportItem?.type)
    }, [])

    const onDownload = useCallback(
      (event: React.MouseEvent) => {
        dom.preventDefault(event)

        if (type === "multiple") {
          if (
            shapesWithExports.length === 1 &&
            shapesWithExports[0].exports.length === 1
          ) {
            const shape = shapesWithExports[0]
            const exportItem = shape.exports[0]
            const suffix = exportItem?.suffix
            const name = suffix
              ? shape.name + suffix
              : shape.name
            const defaults = {
              "page-id": pageId,
              "file-id": fileId,
              name,
              "object-id": shapesWithExports[0].id,
            }
            const fullExport = { ...exportItem, ...defaults }
            store.emit(
              de.requestSimpleExport({ export: fullExport }),
              de.exportShapesEvent([fullExport], "workspace:sidebar")
            )
          } else {
            store.emit(
              de.showWorkspaceExportDialog({
                selected: ids.reverse(),
                origin: "workspace:sidebar",
              })
            )
          }
        } else {
          const defaults = {
            "page-id": pageId,
            "file-id": fileId,
            name: sname,
            "object-id": ids[0],
          }
          const exportsArray = exports.map((exp: any) => ({
            ...exp,
            ...defaults,
          }))

          store.emit(
            de.requestExport({ exports: exportsArray }),
            de.exportShapesEvent(exportsArray, "workspace:sidebar")
          )
        }
      },
      [ids, pageId, fileId, exports, type, shapesWithExports, sname]
    )

    const addExport = useCallback(() => {
      const xspec = { type: "png", suffix: "", scale: 1 }
      store.emit(
        dwsh.updateShapes(ids, (shape: any) => ({
          ...shape,
          exports: [xspec, ...(shape.exports || [])],
        }))
      )
    }, [ids])

    const deleteExport = useCallback(
      (event: React.MouseEvent) => {
        const target = event.currentTarget as HTMLElement
        const index = parseInt(dom.getData(target, "value"), 10)

        const removeByIndex = (values: any[], idx: number) =>
          values
            .map((v, i) => [i, v])
            .filter(([i]) => i !== idx)
            .map(([, v]) => v)

        store.emit(
          dwsh.updateShapes(ids, (shape: any) => ({
            ...shape,
            exports: removeByIndex(shape.exports || [], index),
          }))
        )
      },
      [ids]
    )

    const onScaleChange = useCallback(
      (index: number, event: React.ChangeEvent) => {
        const scale = parseFloat(dom.getValue(event.target))
        store.emit(
          dwsh.updateShapes(ids, (shape: any) => ({
            ...shape,
            exports: shape.exports.map((exp: any, i: number) =>
              i === index ? { ...exp, scale } : exp
            ),
          }))
        )
      },
      [ids]
    )

    const onSuffixChange = useCallback(
      (event: React.ChangeEvent) => {
        const value = dom.getValue(event.target)
        const target = event.currentTarget as HTMLElement
        const index = parseInt(dom.getData(target, "value"), 10)

        store.emit(
          dwsh.updateShapes(ids, (shape: any) => ({
            ...shape,
            exports: shape.exports.map((exp: any, i: number) =>
              i === index ? { ...exp, suffix: value } : exp
            ),
          }))
        )
      },
      [ids]
    )

    const onTypeChange = useCallback(
      (index: number, event: React.ChangeEvent) => {
        const type = dom.getValue(event.target)
        store.emit(
          dwsh.updateShapes(ids, (shape: any) => ({
            ...shape,
            exports: shape.exports.map((exp: any, i: number) =>
              i === index ? { ...exp, type } : exp
            ),
          }))
        )
      },
      [ids]
    )

    const onRemoveAll = useCallback(() => {
      store.emit(
        dwsh.updateShapes(ids, (shape: any) => ({
          ...shape,
          exports: [],
        }))
      )
    }, [ids])

    const manageKeyDown = useCallback((event: React.KeyboardEvent) => {
      if (kbd.esc(event)) {
        dom.blur!(event.target as HTMLElement)
      }
    }, [])

    const sizeOptions = [
      { value: "0.5", label: "0.5x" },
      { value: "0.75", label: "0.75x" },
      { value: "1", label: "1x" },
      { value: "1.5", label: "1.5x" },
      { value: "2", label: "2x" },
      { value: "4", label: "4x" },
      { value: "6", label: "6x" },
    ]

    const formatOptions = [
      { value: "png", label: "PNG" },
      { value: "jpeg", label: "JPG" },
      { value: "webp", label: "WEBP" },
      { value: "svg", label: "SVG" },
      { value: "pdf", label: "PDF" },
    ]

    return (
      <div className={(stl as any).css("element-set")}>
        <div className={(stl as any).css("element-title")}>
          <TitleBar
            collapsable={hasExports}
            collapsed={!open}
            onCollapsed={toggleContent}
            title={tr(ids.length > 1 ? "workspace.options.export-multiple" : "workspace.options.export")}
            className={(stl as any).cssCase("title-spacing-export", !hasExports)}
          >
            <IconButton
              variant="ghost"
              ariaLabel={tr("workspace.options.export.add-export")}
              onClick={addExport}
              icon={i.add}
            />
          </TitleBar>
        </div>

        {open && (
          <div className={(stl as any).css("element-set-content")}>
            {exports === "multiple" ? (
              <div className={(stl as any).css("multiple-exports")}>
                <div className={(stl as any).css("label")}>
                  {tr("settings.multiple")}
                </div>
                <div className={(stl as any).css("actions")}>
                  <IconButton
                    variant="ghost"
                    ariaLabel={tr("workspace.options.export.remove-export")}
                    onClick={onRemoveAll}
                    icon={i.remove}
                  />
                </div>
              </div>
            ) : exports && exports.length > 0 ? (
              exports.map((exportItem: any, index: number) => (
                <div key={index} className={(stl as any).css("element-group")}>
                  <div className={(stl as any).css("input-wrapper")}>
                    <div className={(stl as any).css("format-select")}>
                      <Select
                        defaultValue={d.name(exportItem.type)}
                        options={formatOptions}
                        dropdownClass={(stl as any).css("dropdown-upwards")}
                        onChange={(value) => onTypeChange(index, value as any)}
                      />
                    </div>
                    {scaleEnabled(exportItem) && (
                      <div className={(stl as any).css("size-select")}>
                        <Select
                          defaultValue={String(exportItem.scale)}
                          options={sizeOptions}
                          dropdownClass={(stl as any).css("dropdown-upwards")}
                          onChange={(value) =>
                            onScaleChange(index, {
                              target: { value },
                            } as any)
                          }
                        />
                      </div>
                    )}
                    <label
                      htmlFor="suffix-export-input"
                      className={(stl as any).css("suffix-input")}
                    >
                      <input
                        className={(stl as any).css("type-input")}
                        id="suffix-export-input"
                        type="text"
                        value={exportItem.suffix || ""}
                        placeholder={tr("workspace.options.export.suffix")}
                        data-value={String(index)}
                        onChange={onSuffixChange}
                        onKeyDown={manageKeyDown}
                      />
                    </label>
                  </div>

                  <IconButton
                    variant="ghost"
                    ariaLabel={tr("workspace.options.export.remove-export")}
                    onClick={deleteExport}
                    data-value={String(index)}
                    icon={i.remove}
                  />
                </div>
              ))
            ) : null}

            {(exports === "multiple" ||
              (exports && exports.length > 0)) && (
              <button
                onClick={inProgress ? undefined : onDownload}
                className={(stl as any).cssCase(
                  "export-btn",
                  true,
                  "btn-disabled",
                  inProgress
                )}
                disabled={inProgress}
              >
                {inProgress
                  ? tr("workspace.options.exporting-object")
                  : tr(
                      "workspace.options.export-object",
                      c(shapesWithExports.length)
                    )}
              </button>
            )}
          </div>
        )}
      </div>
    )
  },
  checkExportsMenuProps
)
