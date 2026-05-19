// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useState, useCallback } from "react"
import * as d from "app/common/data"
import * as dm from "app/common/data/macros"
import * as cfg from "app/config"
import * as ev from "app/main/data/event"
import * as modal from "app/main/data/modal"
import * as dp from "app/main/data/plugins"
import * as refs from "app/main/refs"
import * as st from "app/main/store"
import { SearchBar } from "app/main/ui/components/search-bar"
import { TitleBar } from "app/main/ui/components/title-bar"
import { Button } from "app/main/ui/ds/buttons/button"
import { IconButton } from "app/main/ui/ds/buttons/icon-button"
import * as i from "app/main/ui/ds/foundations/assets/icon"
import * as deprecatedIcon from "app/main/ui/icons"
import * as preg from "app/plugins/register"
import * as avatars from "app/util/avatars"
import * as dom from "app/util/dom"
import { tr } from "app/util/i18n"
import * as rx from "beicon.core"
import * as str from "cuerdas/core"
import * as ptk from "potok.core"

const closeIcon = deprecatedIcon.iconXref("close")

function iconUrl(host: string, icon: string): string {
  return `${host}${
    !str.endsWith(host, "/") && !str.startsWith(icon, "/") ? "/" : ""
  }${icon}`
}

interface PluginEntryProps {
  index: number
  manifest: any
  userCanEdit: boolean
  onOpenPlugin?: (manifest: any) => void
  onRemovePlugin?: (index: number) => void
}

const PluginEntry: React.FC<PluginEntryProps> = ({
  index,
  manifest,
  userCanEdit,
  onOpenPlugin,
  onRemovePlugin,
}) => {
  const { pluginId, host, icon, name, description, permissions } = manifest
  const pluginsPermissionsPeek = refs.pluginsPermissionsPeek.deref()
  const finalPermissions = pluginsPermissionsPeek?.[pluginId] || permissions
  const isEditionPlugin =
    finalPermissions?.includes("content:write") ||
    finalPermissions?.includes("library:write")
  const canOpen = userCanEdit || !isEditionPlugin

  const handleOpenClick = useCallback(() => {
    if (canOpen && onOpenPlugin) {
      onOpenPlugin(manifest)
    }
  }, [canOpen, manifest, onOpenPlugin])

  const handleDeleteClick = useCallback(() => {
    if (onRemovePlugin) {
      onRemovePlugin(index)
    }
  }, [index, onRemovePlugin])

  return (
    <div className="plugins-list-element">
      <div className="plugin-icon">
        <img
          src={icon ? iconUrl(host, icon) : avatars.generate({ name })}
          alt={name}
        />
      </div>
      <div className="plugin-description">
        <div className="plugin-title">{name}</div>
        <div className="plugin-summary">{d.nilv(description, "")}</div>
      </div>

      <Button
        className="open-button"
        variant="secondary"
        type="button"
        onClick={handleOpenClick}
        title={!canOpen ? tr("workspace.plugins.error.need-editor") : undefined}
        disabled={!canOpen}
      >
        {tr("workspace.plugins.button-open")}
      </Button>

      <IconButton
        variant="ghost"
        ariaLabel={tr("workspace.plugins.remove-plugin")}
        onClick={handleDeleteClick}
        icon={i.delete}
      />
    </div>
  )
}

export const PluginManagementDialog: React.FC = () => {
  const [pluginsState, setPluginsState] = useState(() => preg.pluginsList())
  const [pluginUrl, setPluginUrl] = useState("")
  const [fetchingManifest, setFetchingManifest] = useState(false)
  const [inputStatus, setInputStatus] = useState<
    null | "error-url" | "error-manifest" | "success"
  >(null)

  const userCanEdit = refs.permissions.deref()?.canEdit

  const handleUrlInput = useCallback((value: string) => {
    setInputStatus(null)
    setPluginUrl(value)
  }, [])

  const handleInstallClick = useCallback(() => {
    setFetchingManifest(true)
    rx.subscribe(dp.fetchManifest(pluginUrl), {
      next: (plugin: any) => {
        setFetchingManifest(false)
        if (plugin) {
          st.emit!(
            ptk.event(ev.event("install-plugin", {
              name: plugin.name,
              url: pluginUrl,
            }))
          )
          modal.show!("plugin-permissions", {
            plugin,
            onAccept: () => {
              preg.installPlugin(plugin)
              modal.show!("plugin-management", {})
            },
          })
          setInputStatus("success")
          setPluginUrl("")
        } else {
          setInputStatus("error-manifest")
        }
      },
      error: (err: any) => {
        console.error(err)
        setFetchingManifest(false)
        setInputStatus("error-url")
      },
    })
  }, [pluginUrl])

  const handleOpenPlugin = useCallback(
    (manifest: any) => {
      st.emit!(
        ptk.event(ev.event("start-plugin", {
          origin: "workspace:plugins",
          name: manifest.name,
          host: manifest.host,
        }))
      )
      dp.openPlugin(manifest, userCanEdit)
      modal.hide()
    },
    [userCanEdit]
  )

  const handleRemovePlugin = useCallback((pluginIndex: number) => {
    const pluginsList = preg.pluginsList()
    const plugin = pluginsList[pluginIndex]
    st.emit!(
      ptk.event(ev.event("remove-plugin", {
        name: plugin.name,
        host: plugin.host,
      }))
    )
    dp.closePlugin(plugin)
    preg.removePlugin(plugin)
    setPluginsState(preg.pluginsList())
  }, [])

  return (
    <div className="modal-overlay">
      <div className="modal-dialog plugin-management">
        <button className="close-btn" onClick={() => modal.hide()}>
          {closeIcon}
        </button>
        <div className="modal-title">{tr("workspace.plugins.title")}</div>

        <div className="modal-content">
          <div className="top-bar">
            <SearchBar
              onChange={handleUrlInput}
              value={pluginUrl}
              placeholder={tr("workspace.plugins.search-placeholder")}
              className={inputStatus ? "input-error" : ""}
            />

            <button
              className="primary-button"
              disabled={fetchingManifest}
              onClick={handleInstallClick}
            >
              {tr("workspace.plugins.install")}
            </button>
          </div>

          {inputStatus === "error-url" && (
            <div className={`info error`}>{tr("workspace.plugins.error.url")}</div>
          )}

          {inputStatus === "error-manifest" && (
            <div className={`info error`}>
              {tr("workspace.plugins.error.manifest")}
            </div>
          )}

          {pluginsState.length > 0 && (
            <div
              className="discover"
              onClick={() =>
                st.emit!(ptk.event(ev.event("open-plugins-list")))
              }
              dangerouslySetInnerHTML={{
                __html: tr("workspace.plugins.discover", cfg.pluginsListUri),
              }}
            />
          )}

          <hr />

          {pluginsState.length === 0 ? (
            <div className="plugins-empty">
              <div className="plugins-empty-logo">{deprecatedIcon.puzzle}</div>
              <div className="plugins-empty-text">
                {tr("workspace.plugins.empty-plugins")}
              </div>
              <a
                className="plugins-link"
                href={cfg.pluginsListUri}
                target="_blank"
                onClick={() =>
                  st.emit!(ptk.event(ev.event("open-plugins-list")))
                }
              >
                {tr("workspace.plugins.plugin-list-link")}
                {deprecatedIcon.externalLink}
              </a>
            </div>
          ) : (
            <>
              <TitleBar
                collapsable={false}
                title={tr("workspace.plugins.installed-plugins")}
              />

              <div className="plugins-list">
                {pluginsState.map((manifest: any, idx: number) => (
                  <PluginEntry
                    key={`plugin-${idx}`}
                    index={idx}
                    manifest={manifest}
                    userCanEdit={userCanEdit}
                    onOpenPlugin={handleOpenPlugin}
                    onRemovePlugin={handleRemovePlugin}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

interface PermissionsListProps {
  permissions: Set<string>
}

const PermissionsList: React.FC<PermissionsListProps> = ({ permissions }) => {
  const hasPermission = (p: string) => permissions.has(p)

  return (
    <div className="permissions-list">
      {hasPermission("content:write") && (
        <div className="permissions-list-entry">
          {deprecatedIcon.oauth1}
          <p className="permissions-list-text">
            {tr("workspace.plugins.permissions.content-write")}
          </p>
        </div>
      )}

      {hasPermission("content:read") && (
        <div className="permissions-list-entry">
          {deprecatedIcon.oauth1}
          <p className="permissions-list-text">
            {tr("workspace.plugins.permissions.content-read")}
          </p>
        </div>
      )}

      {hasPermission("user:read") && (
        <div className="permissions-list-entry">
          {deprecatedIcon.oauth2}
          <p className="permissions-list-text">
            {tr("workspace.plugins.permissions.user-read")}
          </p>
        </div>
      )}

      {hasPermission("library:write") && (
        <div className="permissions-list-entry">
          {deprecatedIcon.oauth3}
          <p className="permissions-list-text">
            {tr("workspace.plugins.permissions.library-write")}
          </p>
        </div>
      )}

      {hasPermission("library:read") && (
        <div className="permissions-list-entry">
          {deprecatedIcon.oauth3}
          <p className="permissions-list-text">
            {tr("workspace.plugins.permissions.library-read")}
          </p>
        </div>
      )}

      {hasPermission("comment:write") && (
        <div className="permissions-list-entry">
          {deprecatedIcon.oauth1}
          <p className="permissions-list-text">
            {tr("workspace.plugins.permissions.comment-write")}
          </p>
        </div>
      )}

      {hasPermission("comment:read") && (
        <div className="permissions-list-entry">
          {deprecatedIcon.oauth1}
          <p className="permissions-list-text">
            {tr("workspace.plugins.permissions.comment-read")}
          </p>
        </div>
      )}

      {hasPermission("allow:downloads") && (
        <div className="permissions-list-entry">
          {deprecatedIcon.oauth1}
          <p className="permissions-list-text">
            {tr("workspace.plugins.permissions.allow-download")}
          </p>
        </div>
      )}

      {hasPermission("allow:localstorage") && (
        <div className="permissions-list-entry">
          {deprecatedIcon.oauth1}
          <p className="permissions-list-text">
            {tr("workspace.plugins.permissions.allow-localstorage")}
          </p>
        </div>
      )}
    </div>
  )
}

interface PluginPermissionsDialogProps {
  plugin: any
  onAccept?: () => void
  onClose?: () => void
}

export const PluginPermissionsDialog: React.FC<PluginPermissionsDialogProps> = ({
  plugin,
  onAccept,
  onClose,
}) => {
  const { host, permissions } = plugin
  const permissionsSet = new Set(permissions)

  const handleAcceptDialog = useCallback(
    (event: React.MouseEvent) => {
      dom.preventDefault(event)
      st.emit!(
        ptk.event(
          ev.event("allow-plugin-permissions", {
            host,
            permissions: [...permissionsSet].join(", "),
          })
        )
      )
      modal.hide()
      onAccept?.()
    },
    [host, permissionsSet, onAccept]
  )

  const handleCloseDialog = useCallback(
    (event: React.MouseEvent) => {
      dom.preventDefault(event)
      st.emit!(
        ptk.event(
          ev.event("reject-plugin-permissions", {
            host,
            permissions: [...permissionsSet].join(", "),
          })
        )
      )
      modal.hide()
      onClose?.()
    },
    [host, permissionsSet, onClose]
  )

  return (
    <div className="modal-overlay">
      <div className="modal-dialog plugin-permissions">
        <button className="close-btn" onClick={handleCloseDialog}>
          {closeIcon}
        </button>
        <div className="modal-title">
          {tr("workspace.plugins.permissions.title", str.upper(plugin.name))}
        </div>

        <div className="modal-content">
          <PermissionsList permissions={permissionsSet} />

          {!cfg.pluginsWhitelist.has(host) && (
            <div className="permissions-disclaimer">
              {tr("workspace.plugins.permissions.disclaimer")}
            </div>
          )}
        </div>

        <div className="modal-footer">
          <div className="action-buttons">
            <input
              className="cancel-button button-expand"
              type="button"
              value={tr("ds.confirm-cancel")}
              onClick={handleCloseDialog}
            />

            <input
              className="primary-button button-expand"
              type="button"
              value={tr("ds.confirm-allow")}
              onClick={handleAcceptDialog}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

interface PluginPermissionsUpdatedDialogProps {
  plugin: any
  onAccept?: () => void
  onClose?: () => void
}

export const PluginPermissionsUpdatedDialog: React.FC<
  PluginPermissionsUpdatedDialogProps
> = ({ plugin, onAccept, onClose }) => {
  const { host, permissions } = plugin
  const permissionsSet = new Set(permissions)

  const handleAcceptDialog = useCallback(
    (event: React.MouseEvent) => {
      dom.preventDefault(event)
      st.emit!(
        ptk.event(
          ev.event("allow-plugin-permissions", {
            host,
            permissions: [...permissionsSet].join(", "),
          })
        )
      )
      modal.hide()
      onAccept?.()
    },
    [host, permissionsSet, onAccept]
  )

  const handleCloseDialog = useCallback(
    (event: React.MouseEvent) => {
      dom.preventDefault(event)
      st.emit!(
        ptk.event(
          ev.event("reject-plugin-permissions", {
            host,
            permissions: [...permissionsSet].join(", "),
          })
        )
      )
      modal.hide()
      onClose?.()
    },
    [host, permissionsSet, onClose]
  )

  return (
    <div className="modal-overlay">
      <div className="modal-dialog plugin-permissions">
        <button className="close-btn" onClick={handleCloseDialog}>
          {closeIcon}
        </button>
        <div className="modal-title">
          {tr("workspace.plugins.permissions-update.title", str.upper(plugin.name))}
        </div>

        <div className="modal-content">
          <div className="modal-paragraph">
            {tr("workspace.plugins.permissions-update.warning")}
          </div>
          <PermissionsList permissions={permissionsSet} />
        </div>

        <div className="modal-footer">
          <div className="action-buttons">
            <input
              className="cancel-button button-expand"
              type="button"
              value={tr("ds.confirm-cancel")}
              onClick={handleCloseDialog}
            />

            <input
              className="primary-button button-expand"
              type="button"
              value={tr("ds.confirm-allow")}
              onClick={handleAcceptDialog}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

interface PluginTryOutDialogProps {
  plugin: any
  onAccept?: () => void
  onClose?: () => void
}

export const PluginTryOutDialog: React.FC<PluginTryOutDialogProps> = ({
  plugin,
  onAccept,
  onClose,
}) => {
  const { icon, host, name } = plugin

  const handleAcceptDialog = useCallback(
    (event: React.MouseEvent) => {
      dom.preventDefault(event)
      st.emit!(ptk.event(ev.event("try-out-accept")))
      modal.hide()
      onAccept?.()
    },
    [onAccept]
  )

  const handleCloseDialog = useCallback(
    (event: React.MouseEvent) => {
      dom.preventDefault(event)
      st.emit!(ptk.event(ev.event("try-out-cancel")))
      modal.hide()
      onClose?.()
    },
    [onClose]
  )

  return (
    <div className="modal-overlay">
      <div className="modal-dialog plugin-try-out">
        <button className="close-btn" onClick={handleCloseDialog}>
          {closeIcon}
        </button>
        <div className="modal-title">
          <div className="plugin-icon">
            <img
              src={icon ? iconUrl(host, icon) : avatars.generate({ name })}
              alt={name}
            />
          </div>
          {tr("workspace.plugins.try-out.title", str.upper(name))}
        </div>

        <div className="modal-content">
          <div className="modal-message">
            {tr("workspace.plugins.try-out.message")}
          </div>
        </div>

        <div className="modal-footer">
          <div className="action-buttons">
            <input
              className="cancel-button button-expand"
              type="button"
              value={tr("workspace.plugins.try-out.cancel")}
              onClick={handleCloseDialog}
            />

            <input
              className="primary-button button-expand"
              type="button"
              value={tr("workspace.plugins.try-out.try")}
              onClick={handleAcceptDialog}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
