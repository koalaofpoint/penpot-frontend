// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react"
import { useCallback, useState, useRef, useMemo, useEffect } from "react"
import * as dm from "app.common.data.macros"
import * as ct from "app.common.time"
import * as uuid from "app.common.uuid"
import * as cfg from "app.config"
import * as ntf from "app.main.data.notifications"
import * as dwv from "app.main.data.workspace.versions"
import * as refs from "app.main.refs"
import * as st from "app.main.store"
import { Dropdown } from "app.main.ui.components.dropdown"
import { Select } from "app.main.ui.components.select"
import { getSubscriptionType } from "app.main.ui.dashboard.subscription"
import { IconButton } from "app.main.ui.ds.buttons.icon-button"
import * as i from "app.main.ui.ds.foundations.assets.icon"
import { CTA } from "app.main.ui.ds.product.cta"
import { EmptyState } from "app.main.ui.ds.product.empty-state"
import { Milestone } from "app.main.ui.ds.product.milestone"
import { MilestoneGroup } from "app.main.ui.ds.product.milestone-group"
import * as dom from "app.util.dom"
import { useTranslation } from "app.util.i18n"
import * as kbd from "app.util.keyboard"
import * as str from "cuerdas.core"
import * as u from "lambdaisland.uri"
import * as l from "okulary.core"

const versions = l.derived("workspace-versions", st.state)

function getVersionsStoredDays(team: any): number {
  const subscriptionType = getSubscriptionType(team?.subscription)
  switch (subscriptionType) {
    case "unlimited":
      return 30
    case "enterprise":
      return 90
    default:
      return 7
  }
}

function getVersionsWarningSubtext(team: any): string {
  const subscriptionType = getSubscriptionType(team?.subscription)
  const isOwner = team?.permissions?.isOwner
  const emailOwner = team?.members?.find((m: any) => m.isOwner)?.email
  const supportEmail = "support@penpot.app"
  const goToSubscription = u.join(cfg.publicUri, "#/settings/subscriptions")

  if (cfg.flags?.has("subscriptions")) {
    if (isOwner) {
      if (subscriptionType === "enterprise") {
        return `Enterprise version. Contact ${supportEmail} for more information.`
      }
      return `Go to subscription settings: ${goToSubscription}`
    }
    return `Contact workspace owner: ${emailOwner}`
  }
  return `Contact ${supportEmail} for more information.`
}

function groupSnapshots(data: any[]): any[] {
  const userEntries = data
    .filter((entry) => entry.createdBy === "user")
    .map((entry) => ({ ...entry, type: "version" }))

  const systemEntries = data
    .filter((entry) => entry.createdBy === "system")
    .reduce((acc: any[], entry) => {
      const day = ct.formatInst(entry.createdAt, "iso-date")
      const existing = acc.find((g) => g.day === day)
      if (existing) {
        existing.entries.push(entry)
      } else {
        acc.push({
          day,
          entries: [entry],
        })
      }
      return acc
    }, [])
    .flatMap((group) =>
      group.entries.map((entry: any) => ({
        type: "snapshot",
        createdAt: ct.inst(group.day),
        snapshots: [entry],
      }))
    )

  const combined = [...userEntries, ...systemEntries]
  return combined
    .sort((a, b) => a.createdAt - b.createdAt)
    .map((item, index) => ({ ...item, index }))
    .reverse()
}

function openRestoreVersionDialog(origin: string, id: string): void {
  st.emit!(
    ntf.dialog({
      content: "Are you sure you want to restore this version?",
      controls: "inline-actions",
      cancel: {
        label: "Dismiss",
        callback: () => st.emit!(ntf.hide()),
      },
      accept: {
        label: "Restore",
        callback: () => st.emit!(dwv.restoreVersion(id, origin)),
      },
      tag: "restore-dialog",
    })
  )
}

interface VersionEntryProps {
  entry: any
  currentProfile: any
  onRestore?: (id: string) => void
  onDelete?: (id: string, event: any) => void
  onRename?: (id: string, label: string, event: any) => void
  onLock?: (id: string) => void
  onUnlock?: (id: string) => void
  onEdit?: (id: string, event: any) => void
  onCancelEdit?: (id: string, event: any) => void
  isEditing?: boolean
}

const VersionEntry: React.FC<VersionEntryProps> = ({
  entry,
  currentProfile,
  onRestore,
  onDelete,
  onRename,
  onLock,
  onUnlock,
  onEdit,
  onCancelEdit,
  isEditing,
}) => {
  const [showMenu, setShowMenu] = useState(false)
  const profiles = refs.profiles.deref()

  const createdBy = profiles[entry.profileId]

  const onOpenMenu = useCallback(() => setShowMenu(true), [])
  const onCloseMenu = useCallback(() => setShowMenu(false), [])

  const onEditHandler = useCallback(
    (event: React.MouseEvent) => {
      if (onEdit) {
        onEdit(entry.id, event)
      }
    },
    [onEdit, entry.id]
  )

  const onRestoreHandler = useCallback(() => {
    if (onRestore) {
      onRestore(entry.id)
    }
  }, [onRestore, entry.id])

  const onDeleteHandler = useCallback(
    (event: React.MouseEvent) => {
      if (onDelete) {
        onDelete(entry.id, event)
      }
    },
    [onDelete, entry.id]
  )

  const onLockHandler = useCallback(() => {
    if (onLock) {
      onLock(entry.id)
    }
  }, [onLock, entry.id])

  const onUnlockHandler = useCallback(() => {
    if (onUnlock) {
      onUnlock(entry.id)
    }
  }, [onUnlock, entry.id])

  const onNameInputFocus = useCallback((event: React.FocusEvent) => {
    dom.selectText(event.target as HTMLElement)
  }, [])

  const onNameInputBlur = useCallback(
    (event: React.FocusEvent) => {
      const label = str.trim(dom.getTargetVal(event))
      if (!str.isEmpty(label) && onRename) {
        onRename(entry.id, label, event)
      } else if (onCancelEdit) {
        onCancelEdit(entry.id, event)
      }
    },
    [entry.id, onRename, onCancelEdit]
  )

  const onNameInputKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (kbd.enter(event)) {
        onNameInputBlur(event as any)
      } else if (kbd.esc(event)) {
        if (onCancelEdit) {
          onCancelEdit(entry.id, event as any)
        }
      }
    },
    [entry.id, onCancelEdit]
  )

  const currentUserId = currentProfile?.id
  const lockedById = entry.lockedBy
  const imTheOwner = currentUserId === createdBy?.id
  const isLockedByMe = currentUserId === lockedById
  const isLocked = lockedById !== undefined
  const canDelete = !isLocked || isLockedByMe

  return (
    <li className={css("version-entry-wrap")}>
      <Milestone
        label={entry.label}
        profile={createdBy}
        editing={isEditing}
        createdAt={entry.createdAt}
        locked={isLocked}
        onOpenMenu={onOpenMenu}
        onFocusInput={onNameInputFocus}
        onBlurInput={onNameInputBlur}
        onKeyDownInput={onNameInputKeyDown}
      />

      <Dropdown show={showMenu} onClose={onCloseMenu}>
        <ul className={css("version-options-dropdown")}>
          {imTheOwner && (
            <li
              className={css("menu-option")}
              role="button"
              onClick={onEditHandler}
            >
              Rename
            </li>
          )}

          <li
            className={css("menu-option")}
            role="button"
            onClick={onRestoreHandler}
          >
            Restore
          </li>

          {isLockedByMe && (
            <li
              className={css("menu-option")}
              role="button"
              onClick={onUnlockHandler}
            >
              Unlock
            </li>
          )}

          {imTheOwner && !isLocked && (
            <li
              className={css("menu-option")}
              role="button"
              onClick={onLockHandler}
            >
              Lock
            </li>
          )}

          {canDelete && (
            <li
              className={css("menu-option")}
              role="button"
              onClick={onDeleteHandler}
            >
              Delete
            </li>
          )}
        </ul>
      </Dropdown>
    </li>
  )
}

interface SnapshotEntryProps {
  entry: any
  onPinSnapshot?: (id: string, event: any) => void
  onRestoreSnapshot?: (id: string, event: any) => void
}

const SnapshotEntry: React.FC<SnapshotEntryProps> = ({
  entry,
  onPinSnapshot,
  onRestoreSnapshot,
}) => {
  const [openMenu, setOpenMenu] = useState<{
    snapshot: string | null
    offset: number
  } | null>(null)
  const entryRef = useRef<HTMLLIElement>(null)

  const onPinSnapshotHandler = useCallback(
    (event: React.MouseEvent) => {
      const node = dom.getCurrentTarget(event)
      const id = dom.getData(node, "id")
      const parsedId = uuid.parse(id)
      if (onPinSnapshot) {
        onPinSnapshot(parsedId, event)
      }
    },
    [onPinSnapshot]
  )

  const onRestoreSnapshotHandler = useCallback(
    (event: React.MouseEvent) => {
      const node = dom.getCurrentTarget(event)
      const id = dom.getData(node, "id")
      const parsedId = uuid.parse(id)
      if (onRestoreSnapshot) {
        onRestoreSnapshot(parsedId, event)
      }
    },
    [onRestoreSnapshot]
  )

  const onOpenSnapshotMenu = useCallback(
    (index: number, event: React.MouseEvent) => {
      const snapshot = entry.snapshots[index]
      const entryRect = dom.getBoundingRect(entryRef.current)
      const targetRect = dom.getBoundingRect(dom.getTarget(event))
      const offset = targetRect.top - entryRect.top + 32

      setOpenMenu({
        snapshot: snapshot.id,
        offset,
      })
    },
    [entry]
  )

  return (
    <li ref={entryRef} className={css("version-entry-wrap")}>
      <MilestoneGroup
        label={ct.formatInst(entry.createdAt, "localized-date")}
        snapshots={entry.snapshots.map((s: any) => s.createdAt)}
        onMenuClick={onOpenSnapshotMenu}
      />

      <Dropdown show={openMenu !== null} onClose={() => setOpenMenu(null)}>
        <ul
          className={css("version-options-dropdown")}
          style={{ "--offset": `${openMenu?.offset || 0}px` } as any}
        >
          <li
            className={css("menu-option")}
            role="button"
            data-id={openMenu?.snapshot}
            onClick={onRestoreSnapshotHandler}
          >
            Restore
          </li>
          <li
            className={css("menu-option")}
            role="button"
            data-id={openMenu?.snapshot}
            onClick={onPinSnapshotHandler}
          >
            Pin
          </li>
        </ul>
      </Dropdown>
    </li>
  )
}

export const VersionsToolbox: React.FC = () => {
  const profiles = refs.profiles.deref()
  const profile = refs.profile.deref()
  const team = refs.team.deref()

  const state = versions.deref()
  const { status, data, editing } = state

  const users = useMemo(() => {
    const result: Set<string> = new Set()
    data?.forEach((entry: any) => {
      if (entry.createdBy === "user") {
        result.add(entry.profileId)
      }
    })
    return result
  }, [data])

  const entries = useMemo(() => {
    const filtered = data?.filter((entry: any) => {
      if (!state.filter) return true
      return entry.createdBy === "user" && entry.profileId === state.filter
    })
    return groupSnapshots(filtered || [])
  }, [data, state.filter])

  const onCreateVersion = useCallback(() => {
    st.emit!(dwv.createVersion())
  }, [])

  const onEditVersion = useCallback(
    (id: string, _event: any) => {
      st.emit!(dwv.updateVersionsState({ editing: id }))
    },
    []
  )

  const onCancelVersionEdition = useCallback((_id: string, _event: any) => {
    st.emit!(dwv.updateVersionsState({ editing: null }))
  }, [])

  const onRenameVersion = useCallback((id: string, label: string) => {
    st.emit!(dwv.renameVersion(id, label))
  }, [])

  const onRestoreVersion = useCallback((id: string, _event: any) => {
    openRestoreVersionDialog("version", id)
  }, [])

  const onRestoreSnapshot = useCallback((id: string, _event: any) => {
    openRestoreVersionDialog("snapshot", id)
  }, [])

  const onDeleteVersion = useCallback((id: string) => {
    st.emit!(dwv.deleteVersion(id))
  }, [])

  const onPinVersion = useCallback((id: string) => {
    st.emit!(dwv.pinVersion(id))
  }, [])

  const onLockVersion = useCallback((id: string) => {
    st.emit!(dwv.lockVersion(id))
  }, [])

  const onUnlockVersion = useCallback((id: string) => {
    st.emit!(dwv.unlockVersion(id))
  }, [])

  const onChangeFilter = useCallback((filter: string | { id: string }) => {
    if (filter === "all") {
      st.emit!(dwv.updateVersionsState({ filter: null }))
    } else if (filter === "own") {
      st.emit!(dwv.updateVersionsState({ filter: profile?.id }))
    } else {
      st.emit!(dwv.updateVersionsState({ filter }))
    }
  }, [profile?.id])

  const options = useMemo(() => {
    const currentProfileId = profile?.id
    const baseOptions = [
      { value: "all", label: "All" },
      { value: "own", label: "Mine" },
    ]

    const userOptions = Array.from(users).reduce((acc: any[], id) => {
      if (id === currentProfileId) return acc
      const fullname = profiles[id]?.fullname
      if (fullname) {
        acc.push({ value: id, label: `User: ${fullname}` })
      }
      return acc
    }, [])

    return [...baseOptions, ...userOptions]
  }, [users, profile?.id, profiles])

  useEffect(() => {
    st.emit!(dwv.initVersionsState())
  }, [])

  return (
    <div className={css("version-toolbox")}>
      <Select
        defaultValue="all"
        aria-label="Filter versions"
        options={options}
        onChange={onChangeFilter}
      />

      {status === "loading" && (
        <div className={css("versions-empty")}>
          <EmptyState icon={i.clock} text="Loading versions..." />
        </div>
      )}

      {status === "loaded" && (
        <>
          <div className={css("version-save-version")}>
            Save current version
            <IconButton
              variant="ghost"
              aria-label="Save version"
              onClick={onCreateVersion}
              icon={i.pin}
            />
          </div>

          {data?.length === 0 ? (
            <div className={css("versions-empty")}>
              <EmptyState icon={i.history} text="No versions yet" />
            </div>
          ) : (
            <ul className={css("versions-entries")}>
              {entries.map((entry: any) => {
                switch (entry.type) {
                  case "version":
                    return (
                      <VersionEntry
                        key={entry.index}
                        entry={entry}
                        isEditing={entry.id === editing}
                        currentProfile={profile}
                        onEdit={onEditVersion}
                        onCancelEdit={onCancelVersionEdition}
                        onRename={onRenameVersion}
                        onRestore={onRestoreVersion}
                        onDelete={onDeleteVersion}
                        onLock={onLockVersion}
                        onUnlock={onUnlockVersion}
                      />
                    )
                  case "snapshot":
                    return (
                      <SnapshotEntry
                        key={entry.index}
                        entry={entry}
                        onRestoreSnapshot={onRestoreSnapshot}
                        onPinSnapshot={onPinVersion}
                      />
                    )
                  default:
                    return null
                }
              })}
            </ul>
          )}

          <CTA title={`Warning: versions are stored for ${getVersionsStoredDays(team)} days`}>
            <div
              dangerouslySetInnerHTML={{
                __html: getVersionsWarningSubtext(team),
              }}
            />
          </CTA>
        </>
      )}
    </div>
  )
}

function css(className: string): string {
  return className
}
