// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from "../../common/data"
import * as dm from "../../common/data/macros"
import * as gpt from "../../common/geom/point"
import * as sm from "../../common/schema"
import * as ct from "../../common/time"
import * as ctst from "../../common/types/shape-tree"
import * as uuid from "../../common/uuid"
import * as ev from "../data/event"
import * as dsh from "../data/helpers"
import * as ntf from "../data/notifications"
import * as dtm from "../data/team"
import * as rp from "../repo"
import * as i18n from "../../util/i18n"
import * as rx from "beicon.v2.core"
import * as ptk from "potok.v2.core"

// Types
interface CommentThread {
  id: string
  pageId: string
  fileId: string
  projectId: string
  ownerId: string
  ownerFullname?: string
  ownerEmail?: string
  pageName?: string
  fileName: string
  seqn: number
  content: string
  participants: Set<string>
  createdAt: string
  modifiedAt: string
  position: gpt.Point
  countUnreadComments?: number
  countComments?: number
  frameId?: string
  isResolved?: boolean
  mentions?: string[]
}

interface Comment {
  id: string
  threadId: string
  fileId: string
  ownerId: string
  ownerFullname?: string
  ownerEmail?: string
  createdAt: string
  modifiedAt: string
  content: string
}

interface CommentsLocalState {
  open?: string
  options?: string
  draft?: {
    pageId: string
    fileId: string
    position: gpt.Point
  }
  mode?: "yours" | "mentions"
  show?: "pending"
  list?: string[]
}

interface State {
  currentPageId?: string
  currentFileId?: string
  currentShareId?: string
  viewerLocal?: {
    shareId?: string
  }
  workspaceLocal?: boolean
  commentsLocal?: CommentsLocalState
  commentThreads?: Record<string, CommentThread>
  comments?: Record<string, Record<string, Comment>>
  pages?: Record<string, Record<string, any>>
  profiles?: Record<string, any>
}

// Constants
const rMentions = /@\[([^\]]*)\]\(([^\)]*)\)/

// Schema definitions
const schemaCommentThread: sm.Schema = {
  title: "CommentThread",
  type: "map",
  entries: {
    id: { pred: sm.uuid },
    page_id: { pred: sm.uuid },
    file_id: { pred: sm.uuid },
    project_id: { pred: sm.uuid },
    owner_id: { pred: sm.uuid },
    owner_fullname: { pred: sm.text, optional: true },
    owner_email: { pred: sm.email, optional: true },
    page_name: { pred: sm.text, optional: true },
    file_name: { pred: sm.text },
    seqn: { pred: "int" },
    content: { pred: "string" },
    participants: { pred: sm.set_of_uuid },
    created_at: { pred: ct.inst },
    modified_at: { pred: ct.inst },
    position: { pred: gpt.point },
    count_unread_comments: { pred: "int", optional: true },
    count_comments: { pred: "int", optional: true },
    frame_id: { pred: sm.uuid, optional: true },
    is_resolved: { pred: "boolean", optional: true },
    mentions: { pred: sm.set_of_uuid, optional: true },
  },
}

const schemaComment: sm.Schema = {
  title: "Comment",
  type: "map",
  entries: {
    id: { pred: sm.uuid },
    thread_id: { pred: sm.uuid },
    file_id: { pred: sm.uuid },
    owner_id: { pred: sm.uuid },
    owner_fullname: { pred: sm.text, optional: true },
    owner_email: { pred: sm.email, optional: true },
    created_at: { pred: ct.inst },
    modified_at: { pred: ct.inst },
    content: { pred: "string" },
  },
}

const schemaCreateDraft: sm.Schema = {
  title: "create-draft",
  type: "map",
  entries: {
    page_id: { pred: sm.uuid },
    file_id: { pred: sm.uuid },
    position: { pred: gpt.point },
  },
}

const schemaCreateThreadOnWorkspace: sm.Schema = {
  title: "created-thread-on-workspace",
  type: "map",
  entries: {
    page_id: { pred: sm.uuid },
    file_id: { pred: sm.uuid },
    position: { pred: gpt.point },
    content: { pred: "string" },
  },
}

const schemaCreateThreadOnViewer: sm.Schema = {
  title: "created-thread-on-viewer",
  type: "map",
  entries: {
    page_id: { pred: sm.uuid },
    file_id: { pred: sm.uuid },
    frame_id: { pred: sm.uuid },
    position: { pred: gpt.point },
    content: { pred: "string" },
  },
}

// Validation functions
export const checkCommentThread = sm.checkFn(schemaCommentThread)
export const checkComment = sm.checkFn(schemaComment)

// Helper functions
export function extractMentions(content: string): string[] {
  const mentions: string[] = []
  let match
  while ((match = rMentions.exec(content)) !== null) {
    mentions.push(uuid.parse(match[2]))
  }
  return mentions
}

export function updateMentions(props: { content: string; [key: string]: any }): any {
  return { ...props, mentions: extractMentions(props.content) }
}

// Main functions
export function createdThreadOnWorkspace(thread: { id: string; comment: Comment; pageId?: string; frameId?: string; position: gpt.Point }, open: boolean = true) {
  return ptk.reify("created-thread-on-workspace", class implements ptk.UpdateEvent, ptk.WatchEvent {
    update(state: State): State {
      const position = { position: thread.position, frame_id: thread.frameId }
      const pageId = thread.pageId || state.currentPageId

      return dsh.updatePage(state, pageId, (page: any) => ({
        ...page,
        comment_thread_positions: { ...page.comment_thread_positions, [thread.id]: position },
      }))
        .update("commentThreads", (threads: Record<string, CommentThread> | undefined) => ({
          ...threads,
          [thread.id]: { ...thread, comment: undefined },
        }))
        .update("commentsLocal", (local: CommentsLocalState | undefined) => ({
          ...local,
          open: open ? thread.id : local?.open,
          options: local?.options ? undefined : undefined,
          draft: local?.draft ? undefined : undefined,
        }))
        .update("comments", (comments: Record<string, Record<string, Comment>> | undefined) => ({
          ...comments,
          [thread.id]: {
            ...(comments?.[thread.id] || {}),
            [thread.comment.id]: thread.comment,
          },
        }))
    }

    async watch(state: State): Promise<rx.Observable<any>> {
      return rx.of(ptk.dataEvent(ev.event, {
        [ev.name]: "create-comment-thread",
        [ev.origin]: "workspace",
        id: thread.id,
        content_size: thread.comment.content.length,
      }))
    }
  })
}

export function createThreadOnWorkspace(params: { pageId: string; fileId: string; position: gpt.Point; content: string }, onThreadCreated: (thread: any) => void = () => {}, open: boolean = true) {
  dm.assert!(sm.check(schemaCreateThreadOnWorkspace, params))

  return ptk.reify("create-thread-on-workspace", class implements ptk.WatchEvent {
    async watch(state: State): Promise<rx.Observable<any>> {
      const pageId = state.currentPageId
      const objects = dsh.lookupPageObjects(state, pageId)
      const frameId = ctst.getFrameIdByPosition(objects, params.position)
      const updatedParams = updateMentions({
        ...params,
        frameId,
      })

      return rx.from(rp.cmd("create-comment-thread", updatedParams))
        .pipe(
          rx.mapcat((response: any) => rx.from(rp.cmd("get-comment-thread", {
            file_id: response.file_id,
            id: response.id,
          }))),
          rx.tap(onThreadCreated),
          rx.map((thread: any) => createdThreadOnWorkspace(thread, open)),
          rx.catch((cause: any) => {
            if (cause.type === "restriction" && cause.code === "max-quote-reached") {
              return rx.throw(cause)
            }
            return rx.throw({ type: "comment-error" })
          })
        )
    }
  })
}

export function createdThreadOnViewer(thread: { id: string; comment: Comment; pageId: string; frameId?: string; position: gpt.Point }) {
  return ptk.reify("created-thread-on-viewer", class implements ptk.UpdateEvent, ptk.WatchEvent {
    update(state: State): State {
      const position = { position: thread.position, frame_id: thread.frameId }

      return state
        .updateIn(["viewer", "pages", thread.pageId, "comment-thread-positions"], (positions: Record<string, any> | undefined) => ({
          ...positions,
          [thread.id]: position,
        }))
        .update("commentsLocal", (local: CommentsLocalState | undefined) => ({
          ...local,
          open: thread.id,
          options: local?.options ? undefined : undefined,
          draft: local?.draft ? undefined : undefined,
        }))
        .update("comments", (comments: Record<string, Record<string, Comment>> | undefined) => ({
          ...comments,
          [thread.id]: {
            ...(comments?.[thread.id] || {}),
            [thread.comment.id]: thread.comment,
          },
        }))
    }

    async watch(state: State): Promise<rx.Observable<any>> {
      return rx.of(ptk.dataEvent(ev.event, {
        [ev.name]: "create-comment-thread",
        [ev.origin]: "viewer",
        id: thread.id,
        content_size: thread.comment.content.length,
      }))
    }
  })
}

export function createThreadOnViewer(params: { pageId: string; fileId: string; frameId: string; position: gpt.Point; content: string }) {
  dm.assert!(sm.check(schemaCreateThreadOnViewer, params))

  return ptk.reify("create-thread-on-viewer", class implements ptk.WatchEvent {
    async watch(state: State): Promise<rx.Observable<any>> {
      const shareId = state.viewerLocal?.shareId
      const updatedParams = updateMentions({
        ...params,
        shareId,
        frameId: params.frameId,
      })

      return rx.from(rp.cmd("create-comment-thread", updatedParams))
        .pipe(
          rx.mapcat((response: any) => rx.from(rp.cmd("get-comment-thread", {
            file_id: response.file_id,
            id: response.id,
            shareId,
          }))),
          rx.map(createdThreadOnViewer),
          rx.catch((cause: any) => {
            if (cause.type === "restriction" && cause.code === "max-quote-reached") {
              return rx.throw(cause)
            }
            return rx.throw({ type: "comment-error" })
          })
        )
    }
  })
}

export function updateCommentThreadStatus(threadId: string) {
  return ptk.reify("update-comment-thread-status", class implements ptk.WatchEvent {
    async watch(state: State): Promise<rx.Observable<any>> {
      const done = (state: State): State => d.updateInWhen(state, ["commentThreads", threadId], (obj: CommentThread) => ({
        ...obj,
        count_unread_comments: 0,
      }))
      const shareId = state.viewerLocal?.shareId

      return rx.from(rp.cmd("update-comment-thread-status", { id: threadId, shareId }))
        .pipe(
          rx.map(() => done),
          rx.catch(() => rx.throw({ type: "comment-error" }))
        )
    }
  })
}

export function updateCommentThread(thread: { id: string; isResolved: boolean }) {
  dm.assert!("expected valid comment thread", checkCommentThread(thread))

  return ptk.reify("update-comment-thread", class implements ptk.IDeref, ptk.UpdateEvent, ptk.WatchEvent {
    async deref(): Promise<{ isResolved: boolean }> {
      return { isResolved: thread.isResolved }
    }

    update(state: State): State {
      return d.updateInWhen(state, ["commentThreads", thread.id], (obj: CommentThread) => ({
        ...obj,
        is_resolved: thread.isResolved,
      }))
    }

    async watch(state: State): Promise<rx.Observable<any>> {
      const shareId = state.viewerLocal?.shareId

      return rx.concat(
        thread.isResolved
          ? rx.of(ptk.event(ev.event, { [ev.name]: "resolve-comment-thread", thread_id: thread.id }))
          : rx.EMPTY,
        rx.from(rp.cmd("update-comment-thread", {
          id: thread.id,
          is_resolved: thread.isResolved,
          shareId,
        }))
          .pipe(
            rx.catch((cause: any) => {
              if (cause.type === "restriction" && cause.code === "max-quote-reached") {
                return rx.throw(cause)
              }
              return rx.throw({ type: "comment-error" })
            }),
            rx.ignore()
          )
      )
    }
  })
}

export function addComment(thread: CommentThread, content: string) {
  dm.assert!("expected valid comment thread", checkCommentThread(thread))
  dm.assert!("expected valid content", typeof content === "string")

  return ptk.reify("create-comment", class implements ev.Event, ptk.WatchEvent {
    get data(): any {
      return {
        thread_id: thread.id,
        file_id: thread.fileId,
        content_size: content.length,
      }
    }

    async watch(state: State): Promise<rx.Observable<any>> {
      const shareId = state.viewerLocal?.shareId
      const created = (comment: Comment, state: State): State =>
        state.updateIn(["comments", thread.id], (comments: Record<string, Comment> | undefined) => ({
          ...comments,
          [comment.id]: comment,
        }))

      const params = updateMentions({
        thread_id: thread.id,
        content,
        shareId,
      })

      return rx.concat(
        rx.from(rp.cmd("create-comment", params))
          .pipe(
            rx.map((comment: Comment) => (state: State) => created(comment, state)),
            rx.catch((cause: any) => {
              if (cause.type === "restriction" && cause.code === "max-quote-reached") {
                return rx.throw(cause)
              }
              return rx.throw({ type: "comment-error" })
            })
          ),
        rx.of(refreshCommentThread(thread))
      )
    }
  })
}

export function updateComment(comment: { id: string; content: string; threadId: string; fileId: string }) {
  dm.assert!("expected valid comment", checkComment(comment))

  return ptk.reify("update-comment", class implements ev.Event, ptk.UpdateEvent, ptk.WatchEvent {
    get data(): any {
      return {
        thread_id: comment.threadId,
        id: comment.id,
        content_size: comment.content.length,
      }
    }

    update(state: State): State {
      return d.updateInWhen(state, ["comments", comment.threadId, comment.id], (obj: Comment) => ({
        ...obj,
        content: comment.content,
      }))
    }

    async watch(state: State): Promise<rx.Observable<any>> {
      const shareId = state.viewerLocal?.shareId
      const params = updateMentions({
        id: comment.id,
        content: comment.content,
        shareId,
      })

      return rx.from(rp.cmd("update-comment", params))
        .pipe(
          rx.catch(() => rx.throw({ type: "comment-error" })),
          rx.map(() => retrieveCommentThreads(comment.fileId))
        )
    }
  })
}

export function deleteCommentThreadOnWorkspace(thread: { id: string }, onDelete: () => void = () => {}) {
  dm.assert!(uuid.isUUID(thread.id))

  return ptk.reify("delete-comment-thread-on-workspace", class implements ptk.UpdateEvent, ptk.WatchEvent {
    update(state: State): State {
      return state
        .update("comments", (comments: Record<string, Record<string, Comment>> | undefined) =>
          comments ? d.without(comments, thread.id) : undefined
        )
        .update("commentThreads", (threads: Record<string, CommentThread> | undefined) =>
          threads ? d.without(threads, thread.id) : undefined
        )
        .updatePage((page: any) => ({
          ...page,
          comment_thread_positions: page.comment_thread_positions ? d.without(page.comment_thread_positions, thread.id) : undefined,
        }))
    }

    async watch(): Promise<rx.Observable<any>> {
      return rx.concat(
        rx.from(rp.cmd("delete-comment-thread", { id: thread.id }))
          .pipe(
            rx.catch(() => rx.throw({ type: "comment-error" })),
            rx.tap(onDelete),
            rx.ignore()
          ),
        rx.of(ptk.dataEvent(ev.event, {
          [ev.name]: "delete-comment-thread",
          [ev.origin]: "workspace",
          id: thread.id,
        }))
      )
    }
  })
}

export function deleteCommentThreadOnViewer(thread: CommentThread) {
  dm.assert!("expected valid comment thread", checkCommentThread(thread))

  return ptk.reify("delete-comment-thread-on-viewer", class implements ptk.UpdateEvent, ptk.WatchEvent {
    update(state: State): State {
      const pageId = state.currentPageId
      return state
        .updateIn(["viewer", "pages", pageId, "comment-thread-positions"], (positions: Record<string, any> | undefined) =>
          positions ? d.without(positions, thread.id) : undefined
        )
        .update("comments", (comments: Record<string, Record<string, Comment>> | undefined) =>
          comments ? d.without(comments, thread.id) : undefined
        )
        .update("commentThreads", (threads: Record<string, CommentThread> | undefined) =>
          threads ? d.without(threads, thread.id) : undefined
        )
    }

    async watch(state: State): Promise<rx.Observable<any>> {
      const shareId = state.viewerLocal?.shareId

      return rx.concat(
        rx.from(rp.cmd("delete-comment-thread", { id: thread.id, shareId }))
          .pipe(
            rx.catch(() => rx.throw({ type: "comment-error" })),
            rx.ignore()
          ),
        rx.of(ptk.dataEvent(ev.event, {
          [ev.name]: "delete-comment-thread",
          [ev.origin]: "viewer",
          id: thread.id,
        }))
      )
    }
  })
}

export function deleteComment(comment: { id: string; threadId: string }) {
  dm.assert!("expected valid comment", checkComment(comment))

  return ptk.reify("delete-comment", class implements ev.Event, ptk.UpdateEvent, ptk.WatchEvent {
    get data(): any {
      return { thread_id: comment.threadId }
    }

    update(state: State): State {
      return state
        .updateIn(["comments", comment.threadId], (comments: Record<string, Comment> | undefined) =>
          comments ? d.without(comments, comment.id) : undefined
        )
        .updateIn(["commentThreads", comment.threadId, "count_comments"], (count: number | undefined) =>
          count ? count - 1 : undefined
        )
    }

    async watch(state: State): Promise<rx.Observable<any>> {
      const shareId = state.viewerLocal?.shareId

      return rx.from(rp.cmd("delete-comment", { id: comment.id, shareId }))
        .pipe(
          rx.catch(() => rx.throw({ type: "comment-error" })),
          rx.ignore()
        )
    }
  })
}

export function refreshCommentThread(thread: { id: string; fileId: string }) {
  dm.assert!("expected valid comment thread", checkCommentThread(thread))

  const fetched = (thread: CommentThread, state: State): State =>
    state.setIn(["commentThreads", thread.id], thread)

  return ptk.reify("refresh-comment-thread", class implements ptk.WatchEvent {
    async watch(state: State): Promise<rx.Observable<any>> {
      const shareId = state.viewerLocal?.shareId

      return rx.from(rp.cmd("get-comment-thread", {
        file_id: thread.fileId,
        id: thread.id,
        shareId,
      }))
        .pipe(
          rx.map((fetchedThread: CommentThread) => (state: State) => fetched(fetchedThread, state)),
          rx.catch(() => rx.throw({ type: "comment-error" }))
        )
    }
  })
}

export function commentThreadsFetched(threads: CommentThread[]) {
  return ptk.reify("comment-threads-fetched", class implements ptk.UpdateEvent {
    update(state: State): State {
      return threads.reduce((state: State, thread: CommentThread) => {
        return state
          .update("commentThreads", (threads: Record<string, CommentThread> | undefined) => ({
            ...threads,
            [thread.id]: thread,
          }))
          .updatePage(thread.fileId, thread.pageId, (page: any) => ({
            ...page,
            comment_thread_positions: {
              ...page.comment_thread_positions,
              [thread.id]: {
                position: thread.position,
                frame_id: thread.frameId,
              },
            },
          }))
      }, state)
    }
  })
}

export function retrieveCommentThreads(fileId: string) {
  return ptk.reify("retrieve-comment-threads", class implements ptk.UpdateEvent, ptk.WatchEvent {
    update(state: State): State {
      return state.delete("commentThreads")
    }

    async watch(state: State): Promise<rx.Observable<any>> {
      const shareId = state.viewerLocal?.shareId

      return rx.merge(
        rx.from(rp.cmd("get-comment-threads", { fileId, shareId }))
          .pipe(rx.map(commentThreadsFetched)),

        state.workspaceLocal
          ? rx.of(dtm.fetchMembers())
          : rx.EMPTY
      )
    }
  })
}

export function retrieveComments(threadId: string) {
  dm.assert!(uuid.isUUID(threadId))

  const fetched = (comments: Comment[], state: State): State =>
    state.update("comments", (comments: Record<string, Record<string, Comment>> | undefined) => ({
      ...comments,
      [threadId]: d.indexBy("id", comments),
    }))

  return ptk.reify("retrieve-comments", class implements ptk.WatchEvent {
    async watch(state: State): Promise<rx.Observable<any>> {
      const shareId = state.viewerLocal?.shareId

      return rx.from(rp.cmd("get-comments", { thread_id: threadId, shareId }))
        .pipe(
          rx.map((comments: Comment[]) => (state: State) => fetched(comments, state)),
          rx.catch(() => rx.throw({ type: "comment-error" }))
        )
    }
  })
}

export function retrieveUnreadCommentThreads(teamId: string) {
  dm.assert!(uuid.isUUID(teamId))

  return ptk.reify("retrieve-unread-comment-threads", class implements ptk.WatchEvent {
    async watch(): Promise<rx.Observable<any>> {
      const fetchedComments = (comments: CommentThread[], state: State): State => ({
        ...state,
        commentThreads: d.indexBy("id", comments),
      })

      const fetchedUsers = (profiles: any[], state: State): State => ({
        ...state,
        current_team_comments_users: d.indexBy("id", profiles),
      })

      return rx.from(rp.cmd("get-unread-comment-threads", { teamId }))
        .pipe(
          rx.mergeMap((comments: CommentThread[]) => rx.concat(
            rx.of((state: State) => fetchedComments(comments, state)),

            rx.from(new Set(comments.map((c: CommentThread) => c.fileId)))
              .pipe(
                rx.mergeMap((fileId: string) => rx.from(rp.cmd("get-profiles-for-file-comments", { fileId }))),
                rx.reduce((acc: any[], curr: any[]) => [...acc, ...curr], []),
                rx.map((profiles: any[]) => (state: State) => fetchedUsers(profiles, state))
              )
          )),
          rx.catch(() => rx.throw({ type: "comment-error" }))
        )
    }
  })
}

export function markAllThreadsAsRead(teamId: string) {
  return ptk.reify("mark-all-threads-as-read", class implements ev.Event, ptk.WatchEvent {
    get data(): any {
      return {}
    }

    async watch(state: State): Promise<rx.Observable<any>> {
      const threads = state.commentThreads ? Object.values(state.commentThreads) : []

      return rx.concat(
        rx.from(rp.cmd("mark-all-threads-as-read", {
          threads: threads.map((t: CommentThread) => t.id),
        }))
          .pipe(
            rx.map(() => retrieveUnreadCommentThreads(teamId)),
            rx.catch(() => rx.throw({ type: "comment-error" }))
          ),
        rx.of(ntf.show({
          level: "info",
          type: "toast",
          content: i18n.tr("dashboard.mark-all-as-read.success"),
          timeout: 7000,
        }))
      )
    }
  })
}

// Local State functions
export function openThread(thread: CommentThread) {
  dm.assert!("expected valid comment thread", checkCommentThread(thread))

  return ptk.reify("open-comment-thread", class implements ev.Event, ptk.UpdateEvent {
    get data(): any {
      return { thread_id: thread.id }
    }

    update(state: State): State {
      return state.update("commentsLocal", (local: CommentsLocalState | undefined) => ({
        ...local,
        open: thread.id,
        options: local?.options ? undefined : undefined,
        draft: local?.draft ? undefined : undefined,
      }))
    }
  })
}

export function closeThread() {
  return ptk.reify("close-comment-thread", class implements ptk.UpdateEvent {
    update(state: State): State {
      return state.update("commentsLocal", (local: CommentsLocalState | undefined) => ({
        ...local,
        open: undefined,
        draft: undefined,
        options: undefined,
      }))
    }
  })
}

export function updateFilters(params: { mode?: "yours" | "mentions"; show?: "pending"; list?: string[] }) {
  return ptk.reify("update-filters", class implements ptk.UpdateEvent {
    update(state: State): State {
      return state.update("commentsLocal", (local: CommentsLocalState | undefined) => {
        const newLocal: CommentsLocalState = { ...local }

        if (params.mode !== undefined) {
          newLocal.mode = params.mode
        }

        if (params.show !== undefined) {
          newLocal.show = params.show
        }

        if (params.list !== undefined) {
          newLocal.list = params.list
        }

        return newLocal
      })
    }
  })
}

export function updateOptions(params: any) {
  return ptk.reify("update-options", class implements ptk.UpdateEvent {
    update(state: State): State {
      return state.update("commentsLocal", (local: CommentsLocalState | undefined) => ({
        ...local,
        ...params,
      }))
    }
  })
}

export function createDraft(params: { pageId: string; fileId: string; position: gpt.Point }) {
  dm.assert!(sm.check(schemaCreateDraft, params))

  return ptk.reify("create-draft", class implements ptk.UpdateEvent {
    update(state: State): State {
      return state.update("commentsLocal", (local: CommentsLocalState | undefined) => ({
        ...local,
        draft: params,
      }))
    }
  })
}

export function updateDraftThread(data: any) {
  return ptk.reify("update-draft-thread", class implements ptk.UpdateEvent {
    update(state: State): State {
      return state.updateIn(["commentsLocal", "draft"], (draft: any) => ({
        ...draft,
        ...data,
      }))
    }
  })
}

export function toggleCommentOptions(commentId: string) {
  return ptk.reify("toggle-comment-options", class implements ptk.UpdateEvent {
    update(state: State): State {
      return state.updateIn(["commentsLocal", "options"], (current: string | undefined) =>
        current === commentId ? undefined : commentId
      )
    }
  })
}

export function hideCommentOptions() {
  return ptk.reify("hide-comment-options", class implements ptk.UpdateEvent {
    update(state: State): State {
      return state.updateIn(["commentsLocal", "options"], () => undefined)
    }
  })
}

// Helper functions
export function getOwner(threadOrComment: any) {
  return {
    id: threadOrComment.owner_id,
    fullname: threadOrComment.owner_fullname,
    email: threadOrComment.owner_email,
    photo_id: threadOrComment.owner_photo_id,
  }
}

export function groupThreadsByPage(threads: CommentThread[]) {
  const groupByPage = (result: any[], thread: CommentThread) => {
    const current = result[0]

    if (current && current.page_id === thread.pageId) {
      return [
        { ...current, items: [...current.items, thread] },
        ...result.slice(1),
      ]
    } else {
      return [
        {
          page_id: thread.pageId,
          page_name: thread.pageName,
          items: [thread],
        },
        ...result,
      ]
    }
  }

  return groupByPage([], threads).reverse()
}

export function groupThreadsByFileAndPage(threads: CommentThread[]) {
  const groupByFileAndPage = (result: any[], thread: CommentThread) => {
    const current = result[0]

    if (current && current.page_id === thread.pageId && current.file_id === thread.fileId) {
      return [
        { ...current, items: [...current.items, thread] },
        ...result.slice(1),
      ]
    } else {
      return [
        {
          page_id: thread.pageId,
          page_name: thread.pageName,
          file_id: thread.fileId,
          file_name: thread.fileName,
          items: [thread],
        },
        ...result,
      ]
    }
  }

  return groupByFileAndPage([], threads).reverse()
}

export function applyFilters(cstate: CommentsLocalState, profile: any, threads: CommentThread[]) {
  const { show, mode } = cstate

  return threads.filter((thread) => {
    if (show === "pending" && thread.isResolved) {
      return false
    }

    if (mode === "yours" && !thread.participants.has(profile.id)) {
      return false
    }

    if (mode === "mentions" && !thread.mentions?.has(profile.id)) {
      return false
    }

    return true
  })
}

export function updateCommentThreadFrame(thread: { id: string }, frameId: string = uuid.zero) {
  dm.assert!("expected valid comment thread", checkCommentThread(thread))

  return ptk.reify("update-comment-thread-frame", class implements ptk.UpdateEvent, ptk.WatchEvent {
    update(state: State): State {
      return state.setIn(["commentThreads", thread.id, "frame_id"], frameId)
    }

    async watch(): Promise<rx.Observable<any>> {
      return rx.from(rp.cmd("update-comment-thread-frame", {
        id: thread.id,
        frame_id: frameId,
      }))
        .pipe(
          rx.catch(() => rx.throw({ type: "comment-error", code: "update-comment-thread-frame" })),
          rx.ignore()
        )
    }
  })
}

export function detachCommentThread(ids: string[]) {
  assert(sm.checkCollOfUuid(ids))

  return ptk.reify("detach-comment-thread", class implements ptk.WatchEvent {
    async watch(state: State): Promise<rx.Observable<any>> {
      const objects = dsh.lookupPageObjects(state)
      const isFrame = (id: string) => objects[id]?.type === "frame"
      const frameIds = new Set(ids.filter(isFrame))

      return rx.from(
        Object.values(state.commentThreads || {})
          .filter((comment: CommentThread) => frameIds.has(comment.frameId))
          .map(updateCommentThreadFrame)
      )
    }
  })
}

export function fetchProfiles() {
  return ptk.reify("fetch-profiles", class implements ptk.WatchEvent {
    async watch(state: State): Promise<rx.Observable<any>> {
      const fileId = state.currentFileId
      const shareId = state.viewerLocal?.shareId || state.currentShareId

      return rx.from(rp.cmd("get-profiles-for-file-comments", { fileId, shareId }))
        .pipe(
          rx.map((profiles: any[]) => (state: State) => ({
            ...state,
            profiles: {
              ...state.profiles,
              ...d.indexBy("id", profiles),
            },
          }))
        )
    }
  })
}