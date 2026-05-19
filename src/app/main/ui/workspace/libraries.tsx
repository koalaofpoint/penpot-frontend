// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as D from "app/common/data"
import * as DM from "app/common/data/macros"
import * as CFV from "app/common/files/variant"
import * as CTKL from "app/common/types/components-list"
import * as CTF from "app/common/types/file"
import * as CTL from "app/common/types/library"
import * as CTYL from "app/common/types/typographies-list"
import * as UUID from "app/common/uuid"
import * as DD from "app/main/data/dashboard"
import * as Modal from "app/main/data/modal"
import * as NTF from "app/main/data/notifications"
import * as DU from "app/main/data/profile"
import * as DTM from "app/main/data/team"
import * as MDC from "app/main/data/workspace/colors"
import * as DWL from "app/main/data/workspace/libraries"
import * as Refs from "app/main/refs"
import { componentSvg } from "app/main/render"
import * as Store from "app/main/store"
import * as CB from "app/main/ui/components/color-bullet"
import * as LB from "app/main/ui/components/link-button"
import { SearchBar } from "app/main/ui/components/search-bar"
import { TitleBar } from "app/main/ui/components/title-bar"
import * as Ctx from "app/main/ui/context"
import { IconButton } from "app/main/ui/ds/buttons/icon-button"
import * as I from "app/main/ui/ds/foundations/assets/icon"
import { TabSwitcher } from "app/main/ui/ds/layout/tab-switcher"
import { EmptyState } from "app/main/ui/ds/product/empty-state"
import * as H from "app/main/ui/hooks"
import * as DeprecatedIcon from "app/main/ui/icons"
import * as UC from "app/util/color"
import * as DOM from "app/util/dom"
import { C, tr } from "app/util/i18n"
import { matchesSearch } from "app/util/strings"
import * as RX from "beicon.v2.core"
import * as STR from "cuerdas.core"
import React from "react"

const CloseIcon = DeprecatedIcon.iconXRef("close")
const AddIcon = DeprecatedIcon.iconXRef("add")

function getLibrarySummary(data: any): any {
  const colors = data.colors?.size ?? 0
  const graphics = 0
  const typographies = data.typographies?.size ?? 0
  const components = [...CTKL.componentsSeq(data)].filter(
    (c: any) => !CFV.isSecondaryVariant(c, data)
  ).length
  const empty =
    components === 0 && graphics === 0 && colors === 0 && typographies === 0

  return {
    isEmpty: empty,
    colors,
    graphics,
    typographies,
    components,
  }
}

function adaptBackendSummary(summary: any): any {
  const components = summary.components?.count ?? 0
  const graphics = summary.media?.count ?? 0
  const typographies = summary.typographies?.count ?? 0
  const colors = summary.colors?.count ?? 0
  const empty =
    components === 0 && graphics === 0 && colors === 0 && typographies === 0

  return {
    isEmpty: empty,
    components,
    graphics,
    typographies,
    colors,
  }
}

function describeLibrary(
  componentsCount: number,
  graphicsCount: number,
  colorsCount: number,
  typographyCount: number
): string {
  const allZero =
    componentsCount === 0 &&
    graphicsCount === 0 &&
    colorsCount === 0 &&
    typographyCount === 0

  const parts: string[] = []

  if (allZero || componentsCount > 0) {
    parts.push(tr("workspace.libraries.components", C(componentsCount)))
  }
  if (allZero || graphicsCount > 0) {
    parts.push(tr("workspace.libraries.graphics", C(graphicsCount)))
  }
  if (allZero || colorsCount > 0) {
    parts.push(tr("workspace.libraries.colors", C(colorsCount)))
  }
  if (allZero || typographyCount > 0) {
    parts.push(tr("workspace.libraries.typography", C(typographyCount)))
  }

  return STR.join(" · ", parts) + "\u00A0"
}

interface LibraryDescriptionProps {
  summary: any
}

const LibraryDescription: React.FC<LibraryDescriptionProps> = ({ summary }) => {
  const componentsCount = summary.components
  const graphicsCount = summary.graphics
  const typographyCount = summary.typographies
  const colorsCount = summary.colors

  return (
    <>
      {componentsCount > 0 && (
        <li className="element-count">
          {tr("workspace.libraries.components", C(componentsCount))}
        </li>
      )}
      {graphicsCount > 0 && (
        <li className="element-count">
          {tr("workspace.libraries.graphics", C(graphicsCount))}
        </li>
      )}
      {colorsCount > 0 && (
        <li className="element-count">
          {tr("workspace.libraries.colors", C(colorsCount))}
        </li>
      )}
      {typographyCount > 0 && (
        <li className="element-count">
          {tr("workspace.libraries.typography", C(typographyCount))}
        </li>
      )}
    </>
  )
}

interface SampleLibraryEntryProps {
  library: any
  importing: any
}

const SampleLibraryEntry: React.FC<SampleLibraryEntryProps> = ({
  library,
  importing,
}) => {
  const id = library.id
  const importingId = importing.current

  const teamId = React.useContext(Ctx.CurrentTeamIdContext)

  const onError = React.useCallback(() => {
    importing.current = null
    RX.of(NTF.error(tr("dashboard.libraries-and-templates.import-error")))
  }, [])

  const onSuccess = React.useCallback(() => {
    Store.emit(DTM.fetchSharedFiles(teamId))
  }, [teamId])

  const importLibrary = React.useCallback(() => {
    importing.current = id
    Store.emit(
      DD.cloneTemplate(id, {
        onSuccess,
        onError,
      })
    )
  }, [id, onSuccess, onError])

  return (
    <div className="sample-library-item" key={DM.str(id)}>
      <div className="sample-library-item-name">{library.name}</div>
      <input
        className={`sample-library-button ${
          importingId === null ? "sample-library-add" : "sample-library-adding"
        }`}
        type="button"
        value={importingId === id ? tr("labels.adding") : tr("labels.add")}
        onClick={importLibrary}
      />
    </div>
  )
}

function emptyLibrary(summary: any): boolean {
  return summary.isEmpty === true
}

interface LibrariesTabProps {
  isShared: boolean
  linkedLibraries: any
  sharedLibraries: any
}

const LibrariesTab: React.FC<LibrariesTabProps> = ({
  isShared,
  linkedLibraries,
  sharedLibraries,
}) => {
  const fileId = React.useContext(Ctx.CurrentFileIdContext)
  const [searchTerm, setSearchTerm] = React.useState("")

  const localLibrary = Refs.workspaceData.get()
  const summary = getLibrarySummary(localLibrary)
  const emptyLibraryFlag = emptyLibrary(summary)

  const selected = H.useSharedState(
    MDC.colorpaletteSelectedBroadcastKey,
    "recent"
  )

  const dependencies = React.useMemo(() => {
    return Object.fromEntries(
      Object.values(sharedLibraries).map((lib: any) => [
        lib.id,
        lib.libraryFileIds,
      ])
    )
  }, [sharedLibraries])

  const libraryNames = React.useMemo(() => {
    return Object.fromEntries(
      Object.values(sharedLibraries).map((lib: any) => [lib.id, lib.name])
    )
  }, [sharedLibraries])

  const findConnectedTo = React.useCallback(
    (libraryId: any) => {
      return [...dependencies.entries()]
        .filter(([k, v]: [any, any]) => v.has(libraryId))
        .map(([k]: [any, any]) => k)
    },
    [dependencies]
  )

  const filteredSharedLibraries = React.useMemo(() => {
    if (!sharedLibraries) return []

    let result = Object.values(sharedLibraries)
      .filter((lib: any) => lib.id !== fileId)
      .filter((lib: any) => !linkedLibraries.has(lib.id))
      .filter((lib: any) => matchesSearch(lib.name, searchTerm))
      .map((lib: any) => ({
        ...lib,
        connectedTo: findConnectedTo(lib.id),
        connectedToNames: findConnectedTo(lib.id)
          .map((id: any) => libraryNames[id])
          .filter(Boolean),
      }))
      .sort((a: any, b: any) =>
        STR.lower(a.name).localeCompare(STR.lower(b.name))
      )

    return result
  }, [sharedLibraries, linkedLibraries, fileId, searchTerm, findConnectedTo, libraryNames])

  const filteredLinkedLibraries = React.useMemo(() => {
    let result = Object.values(linkedLibraries)
      .map((lib: any) => ({
        ...lib,
        connectedTo: findConnectedTo(lib.id),
        connectedToNames: findConnectedTo(lib.id)
          .map((id: any) => libraryNames[id])
          .filter(Boolean),
      }))
      .sort((a: any, b: any) =>
        STR.lower(a.name).localeCompare(STR.lower(b.name))
      )

    return result
  }, [linkedLibraries, findConnectedTo, libraryNames])

  const linkedLibraryIds = React.useMemo(() => {
    return new Set(filteredLinkedLibraries.map((lib: any) => lib.id))
  }, [filteredLinkedLibraries])

  const [importing, setImporting] = React.useState<any>(null)
  const sampleLibraries = [
    { id: "penpot-design-system", name: "Design system example" },
    { id: "wireframing-kit", name: "Wireframe library" },
    { id: "whiteboarding-kit", name: "Whiteboarding Kit" },
  ]

  const changeSearchTerm = React.useCallback(
    (event: any) => {
      setSearchTerm(event)
    },
    []
  )

  const linkLibrary = React.useCallback(
    (event: any) => {
      const libraryId = DOM.getData(DOM.getCurrentTarget(event), "library-id")
      const id = UUID.parse(libraryId)
      selected.current = id
      Store.emit(DWL.linkFileToLibrary(fileId, id))
    },
    [fileId]
  )

  const unlinkLibrary = React.useCallback(
    (event: any) => {
      const libraryId = DOM.getData(DOM.getCurrentTarget(event), "library-id")
      const id = UUID.parse(libraryId)
      if (selected.current === id) {
        selected.current = "file"
      }
      Store.emit(
        DWL.unlinkFileFromLibrary(fileId, id),
        DWL.syncFile(fileId, id)
      )
    },
    [fileId]
  )

  const onDeleteAccept = React.useCallback(() => {
    Store.emit(
      DWL.setFileShared(fileId, false),
      Modal.show("libraries-dialog", { fileId })
    )
  }, [fileId])

  const onDeleteCancel = React.useCallback(() => {
    Store.emit(Modal.show("libraries-dialog", { fileId }))
  }, [fileId])

  const publish = React.useCallback(
    (event: any) => {
      const inputNode = DOM.getTarget(event)
      const publishLibrary = () => Store.emit(DWL.setFileShared(fileId, true))
      const cancelPublish = () =>
        Store.emit(Modal.show("libraries-dialog", { fileId }))

      if (emptyLibraryFlag) {
        Store.emit(
          Modal.show({
            type: "confirm",
            title: tr("modals.publish-empty-library.title"),
            message: tr("modals.publish-empty-library.message"),
            acceptLabel: tr("modals.publish-empty-library.accept"),
            onAccept: publishLibrary,
            onCancel: cancelPublish,
          })
        )
      } else {
        publishLibrary()
      }
      DOM.blur(inputNode)
    },
    [fileId, emptyLibraryFlag]
  )

  const unpublish = React.useCallback(() => {
    Store.emit(
      Modal.show({
        type: "delete-shared-libraries",
        ids: new Set([fileId]),
        origin: "unpublish",
        onAccept: onDeleteAccept,
        onCancel: onDeleteCancel,
        countLibraries: 1,
      })
    )
  }, [fileId, onDeleteAccept, onDeleteCancel])

  return (
    <div className="libraries-content">
      <div className="lib-section">
        <TitleBar
          collapsable={false}
          title={tr("workspace.libraries.in-this-file")}
          className="title-spacing-lib"
        />
        <div className="section-list">
          <div className="section-list-item">
            <div className="item-content">
              <div className="item-name">
                {tr("workspace.libraries.file-library")}
              </div>
              <ul className="item-contents">
                <LibraryDescription summary={summary} />
              </ul>
            </div>

            {isShared ? (
              <input
                className="item-unpublish"
                type="button"
                value={tr("common.unpublish")}
                onClick={unpublish}
              />
            ) : (
              <input
                className="item-publish"
                type="button"
                value={tr("common.publish")}
                onClick={publish}
              />
            )}
          </div>

          {filteredLinkedLibraries.map(
            (library: any) => {
              const disabled = library.connectedTo?.some((id: any) =>
                linkedLibraryIds.has(id)
              )
              return (
                <div
                  className="section-list-item"
                  key={DM.str(library.id)}
                  data-testid="library-item"
                >
                  <div className="item-content">
                    <div className="item-name">{library.name}</div>
                    <ul className="item-contents">
                      {(() => {
                        const libSummary = getLibrarySummary(library.data)
                        return (
                          <>
                            <LibraryDescription summary={libSummary} />
                            {library.connectedTo?.length > 0 && (
                              <div className="connected-to-wrapper">
                                <span>(</span>
                                <span className="connected-to-values">
                                  {library.connectedToNames.join(", ")}
                                </span>
                                <span>)</span>
                              </div>
                            )}
                          </>
                        )
                      })()}
                    </ul>
                  </div>

                  <IconButton
                    type="button"
                    ariaLabel={tr("workspace.libraries.unlink-library-btn")}
                    icon={I.detach}
                    dataLibraryId={DM.str(library.id)}
                    variant="secondary"
                    disabled={disabled}
                    onClick={unlinkLibrary}
                  />
                </div>
              )
            }
          )}
        </div>
      </div>

      <div className="shared-section">
        <TitleBar
          collapsable={false}
          title={tr("workspace.libraries.shared-libraries")}
          className="title-spacing-lib"
        />
        <SearchBar
          onChange={changeSearchTerm}
          value={searchTerm}
          placeholder={tr("workspace.libraries.search-shared-libraries")}
          iconId={I.search}
        />

        {filteredSharedLibraries.length > 0 ? (
          <div className="section-list-shared">
            {filteredSharedLibraries.map((library: any) => (
              <div
                className="section-list-item"
                key={DM.str(library.id)}
                data-testid="library-item"
              >
                <div className="item-content">
                  <div className="item-name">{library.name}</div>
                  <ul className="item-contents">
                    <LibraryDescription
                      summary={adaptBackendSummary(library.librarySummary)}
                    />
                  </ul>
                </div>

                <button
                  className="item-button-shared"
                  data-library-id={DM.str(library.id)}
                  title={tr("workspace.libraries.shared-library-btn")}
                  onClick={linkLibrary}
                >
                  {AddIcon}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="section-list-empty">
            {sharedLibraries === null ? (
              tr("workspace.libraries.loading")
            ) : STR.empty(searchTerm) ? (
              <>
                <div className="sample-libraries-info">
                  {tr("workspace.libraries.empty.no-libraries")}
                  <a
                    className="sample-libraries-link"
                    href="https://penpot.app/libraries-templates"
                    target="_blank"
                  >
                    {tr("workspace.libraries.empty.some-templates")}
                  </a>
                </div>
                <div className="sample-libraries-container">
                  {tr("workspace.libraries.empty.add-some")}
                  {sampleLibraries.map((library) => (
                    <SampleLibraryEntry
                      key={library.id}
                      library={library}
                      importing={importing}
                    />
                  ))}
                </div>
              </>
            ) : (
              tr("workspace.libraries.no-matches-for", searchTerm)
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function extractAssets(
  fileData: any,
  library: any,
  summaryFlag: boolean
): [any, any, any] {
  const exceeded = { components: false, colors: false, typographies: false }

  const truncate = (assetType: string, items: any[], max: number) => {
    if (summaryFlag && items.length > 5) {
      exceeded[assetType] = true
      return items.slice(0, 5)
    }
    return items
  }

  const assets = DWL.assetsNeedSync(library, fileData)

  const componentIds = new Set(
    assets
      .filter((a: any) => a.assetType === "component")
      .map((a: any) => a.assetId)
  )
  const colorIds = new Set(
    assets
      .filter((a: any) => a.assetType === "color")
      .map((a: any) => a.assetId)
  )
  const typographyIds = new Set(
    assets
      .filter((a: any) => a.assetType === "typography")
      .map((a: any) => a.assetId)
  )

  const components = truncate(
    "components",
    [...componentIds]
      .map((id: any) => CTKL.getComponent(library.data, id))
      .filter(Boolean)
      .sort((a: any, b: any) => STR.lower(a.name).localeCompare(STR.lower(b.name))),
    5
  )

  const colors = truncate(
    "colors",
    [...colorIds]
      .map((id: any) => CTL.getColor(library.data, id))
      .filter(Boolean)
      .sort((a: any, b: any) => STR.lower(a.name).localeCompare(STR.lower(b.name))),
    5
  )

  const typographies = truncate(
    "typographies",
    [...typographyIds]
      .map((id: any) => CTYL.getTypography(library.data, id))
      .filter(Boolean)
      .sort((a: any, b: any) => STR.lower(a.name).localeCompare(STR.lower(b.name))),
    5
  )

  return [library, exceeded, { components, colors, typographies }]
}

interface UpdatesTabProps {
  fileId: any
  libraries: any
}

const UpdatesTab: React.FC<UpdatesTabProps> = ({ fileId, libraries }) => {
  const [summaryFlag, setSummaryFlag] = React.useState(true)
  const updating = Refs.updatingLibrary.get()

  const fileData = Refs.workspaceData.get()

  const seeAllAssets = React.useCallback(() => {
    setSummaryFlag(false)
  }, [])

  const libsAssets = React.useMemo(() => {
    return [...Object.values(libraries)]
      .map((lib: any) => extractAssets(fileData, lib, summaryFlag))
      .filter(
        ([_, __, { components, colors, typographies }]) =>
          components.length > 0 || colors.length > 0 || typographies.length > 0
      )
  }, [fileData, libraries, summaryFlag])

  const update = React.useCallback(
    (event: any) => {
      if (updating) return

      const libraryId = DOM.getData(DOM.getTarget(event), "library-id")
      const id = UUID.parse(libraryId)

      Store.emit(
        DWL.setUpdatingLibrary(true),
        DWL.syncFile(fileId, id)
      )
    },
    [fileId, updating]
  )

  return (
    <div className="updates-content">
      <div className="update-section">
        {libsAssets.length === 0 ? (
          <div className="section-list-empty">
            <EmptyState icon={I.library} text={tr("workspace.libraries.no-libraries-need-sync")} />
          </div>
        ) : (
          <>
            <div className="section-title">
              {tr("workspace.libraries.library-updates")}
            </div>

            <div className="section-list">
              {libsAssets.map(
                ([library, exceeded, { components, colors, typographies }]: [
                  any,
                  any,
                  any
                ]) => (
                  <div
                    className="section-list-item"
                    key={DM.str(library.id)}
                  >
                    <div className="item-content">
                      <div className="item-name">{library.name}</div>
                      <ul className="item-contents">
                        {describeLibrary(
                          components.length,
                          0,
                          colors.length,
                          typographies.length
                        )}
                      </ul>
                    </div>
                    <button
                      type="button"
                      className="item-update"
                      disabled={updating}
                      data-library-id={DM.str(library.id)}
                      onClick={update}
                    >
                      {tr("workspace.libraries.update")}
                    </button>

                    <div className="libraries-updates">
                      {components.length > 0 && (
                        <div className="libraries-updates-column">
                          {components.map((component: any) => {
                            const componentData = CTF.loadComponentObjects(
                              library.data,
                              component
                            )
                            const rootShape = CTF.getComponentRoot(
                              library.data,
                              component
                            )
                            return (
                              <div
                                className="libraries-updates-item"
                                key={DM.str(component.id)}
                              >
                                <>
                                  {componentSvg({
                                    rootShape,
                                    className: "component-svg",
                                    objects: component.objects,
                                  })}
                                  <div className="name-block">
                                    <span
                                      className="item-name"
                                      title={component.name}
                                    >
                                      {component.name}
                                    </span>
                                  </div>
                                </>
                              </div>
                            )
                          })}
                          {exceeded.components && (
                            <div className="libraries-updates-item" key="...">
                              <div className="name-block ellipsis">
                                <span className="item-name">(...)</span>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {colors.length > 0 && (
                        <div
                          className="libraries-updates-column"
                          style={{ "--bullet-size": "24px" } as any}
                        >
                          {colors.map((color: any) => {
                            const defaultName = color.gradient
                              ? UC.gradientTypeToString(color.gradient.type)
                              : color.color ?? color.value

                            return (
                              <div
                                className="libraries-updates-item"
                                key={DM.str(color.id)}
                              >
                                <>
                                  <CB.ColorBullet
                                    color={{
                                      color: color.color,
                                      id: color.id,
                                      opacity: color.opacity,
                                    }}
                                  />
                                  <div className="name-block">
                                    <span
                                      className="item-name"
                                      title={color.name}
                                    >
                                      {color.name}
                                    </span>
                                    {color.name !== defaultName && (
                                      <span className="color-value">
                                        {color.color}
                                      </span>
                                    )}
                                  </div>
                                </>
                              </div>
                            )
                          })}
                          {exceeded.colors && (
                            <div className="libraries-updates-item" key="...">
                              <div className="name-block ellipsis">
                                <span className="item-name">(...)</span>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {typographies.length > 0 && (
                        <div className="libraries-updates-column">
                          {typographies.map((typography: any) => (
                            <div
                              className="libraries-updates-item"
                              key={DM.str(typography.id)}
                            >
                              <>
                                <div
                                  style={{
                                    fontFamily: typography.fontFamily,
                                    fontWeight: typography.fontWeight,
                                    fontStyle: typography.fontStyle,
                                  }}
                                >
                                  {tr("workspace.assets.typography.sample")}
                                </div>
                                <div className="name-block">
                                  <span
                                    className="item-name"
                                    title={typography.name}
                                  >
                                    {typography.name}
                                  </span>
                                </div>
                              </>
                            </div>
                          ))}
                          {exceeded.typographies && (
                            <div className="libraries-updates-item" key="...">
                              <div className="name-block ellipsis">
                                <span className="item-name">(...)</span>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {(exceeded.components ||
                      exceeded.colors ||
                      exceeded.typographies) && (
                      <LB.LinkButton
                        onClick={seeAllAssets}
                        className="libraries-updates-see-all"
                        value={`(${tr("workspace.libraries.update.see-all-changes")})`}
                      />
                    )}
                  </div>
                )
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

interface LibrariesDialogProps {
  startingTab?: string
  fileId: any
}

export const LibrariesDialog: React.FC<LibrariesDialogProps> = ({
  startingTab,
  fileId,
}) => {
  const files = Refs.files.get()
  const file = files[fileId]
  const shared = file?.isShared

  const linkedLibraries = React.useMemo(() => {
    return Refs.selectLibraries(files, fileId)
  }, [files, fileId])

  const filteredLinkedLibraries = React.useMemo(() => {
    return D.remove(
      ([_, lib]: [any, any]) => lib.id === fileId,
      linkedLibraries
    )
  }, [linkedLibraries, fileId])

  const sharedLibraries = Refs.sharedFiles.get()

  const closeDialogOutside = React.useCallback((event: any) => {
    if (DOM.getTarget(event) === DOM.getCurrentTarget(event)) {
      Modal.hide()
    }
  }, [])

  const closeDialog = React.useCallback(() => {
    Modal.hide()
  }, [])

  const [selectedTab, setSelectedTab] = React.useState(
    D.nilv(startingTab, "libraries")
  )

  const onChangeTab = React.useCallback((tab: string) => {
    setSelectedTab(tab)
  }, [])

  const tabs = [
    { label: tr("workspace.libraries.libraries"), id: "libraries" },
    { label: tr("workspace.libraries.updates"), id: "updates" },
  ]

  React.useEffect(() => {
    Store.emit(DTM.fetchSharedFiles())
  }, [])

  return (
    <div
      className="modal-overlay"
      onClick={closeDialogOutside}
      data-testid="libraries-modal"
    >
      <div className="modal-dialog">
        <button
          className="close-btn"
          onClick={closeDialog}
          aria-label={tr("labels.close")}
          data-testid="close-libraries"
        >
          {CloseIcon}
        </button>
        <div className="modal-title">{tr("workspace.libraries.libraries")}</div>

        <TabSwitcher
          tabs={tabs}
          selected={selectedTab}
          onChange={onChangeTab}
        >
          {selectedTab === "libraries" && (
            <LibrariesTab
              isShared={shared}
              linkedLibraries={filteredLinkedLibraries}
              sharedLibraries={sharedLibraries}
            />
          )}

          {selectedTab === "updates" && (
            <UpdatesTab fileId={fileId} libraries={filteredLinkedLibraries} />
          )}
        </TabSwitcher>
      </div>
    </div>
  )
}

export const V2InfoDialog: React.FC = () => {
  const handleGotItClick = React.useCallback(() => {
    Modal.hide()
    Store.emit(DU.updateProfileProps({ v2InfoShown: true }))
  }, [])

  return (
    <div className="modal-overlay">
      <div className="modal-dialog modal-v2-info">
        <div className="modal-v2-title">IMPORTANT INFORMATION ABOUT NEW COMPONENTS</div>
        <div className="modal-content">
          <div className="info-content">
            <div className="info-block">
              <div className="info-icon">{DeprecatedIcon.v2Icon1}</div>
              <div className="info-block-title">One physical source of truth</div>
              <div className="info-block-content">
                Main components are now found at the design space. They act as a single
                source of truth and can be worked on with their copies. This ensures
                consistency and allows better control and synchronization.
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon">{DeprecatedIcon.v2Icon2}</div>
              <div className="info-block-title">Swap components</div>
              <div className="info-block-content">
                Now, you can replace one component copy with another within your
                libraries. The swap components functionality streamlines making
                changes, testing variations, or updating elements without extensive
                manual adjustments.
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon">{DeprecatedIcon.v2Icon3}</div>
              <div className="info-block-title">Graphic assets no longer exist</div>
              <div className="info-block-content">
                Graphic assets now disappear, so that all graphic assets become
                components. This way, swapping between them is possible, and we
                avoid confusion about what should go in each typology.
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon">{DeprecatedIcon.v2Icon4}</div>
              <div className="info-block-title">Main components page</div>
              <div className="info-block-content">
                You might find that a new page called 'Main components' has appeared
                in your file. On that page, you'll find all the main components that
                were created in your files previously to this new version.
              </div>
            </div>
          </div>

          <div className="info-bottom">
            <button className="primary-button" onClick={handleGotItClick}>
              I GOT IT
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}